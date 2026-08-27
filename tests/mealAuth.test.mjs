import assert from 'node:assert/strict';
import test from 'node:test';

import {
  createPasswordHash,
  issueSessionToken,
  loginAttemptAllowed,
  mealSessionCookie,
  verifyPassword,
  verifySessionToken,
} from '../functions/_lib/meal-auth.ts';
import { onRequest as guardMealRoute } from '../functions/meal/[[path]].ts';
import { onRequestPost as loginMealRoute } from '../functions/meal/login.ts';

const encoder = new TextEncoder();

test('password verification accepts only the configured password', async () => {
  const stored = await createPasswordHash('correct horse', new Uint8Array(16).fill(7), 10_000);

  assert.equal(await verifyPassword('correct horse', stored), true);
  assert.equal(await verifyPassword('wrong horse', stored), false);
});

test('session tokens reject tampering and expiration', async () => {
  const secret = 'session-secret-with-enough-entropy-for-tests';
  const now = new Date('2026-08-27T10:00:00Z');
  const token = await issueSessionToken(secret, now, 60 * 60);

  assert.equal(await verifySessionToken(token, secret, new Date('2026-08-27T10:30:00Z')), true);
  assert.equal(await verifySessionToken(`${token}x`, secret, now), false);
  assert.equal(await verifySessionToken(token, secret, new Date('2026-08-27T11:00:01Z')), false);
});

test('meal session cookie is server-only and strict', () => {
  const cookie = mealSessionCookie('signed-token', 3600);

  assert.match(cookie, /^choi01_meal_session=signed-token;/);
  assert.match(cookie, /HttpOnly/);
  assert.match(cookie, /Secure/);
  assert.match(cookie, /SameSite=Strict/);
  assert.match(cookie, /Path=\/meal/);
});

test('login attempt limiter blocks the sixth attempt in one window', () => {
  const attempts = new Map();
  const now = Date.parse('2026-08-27T10:00:00Z');

  for (let count = 0; count < 5; count += 1) {
    assert.equal(loginAttemptAllowed(attempts, '203.0.113.7', now), true);
  }
  assert.equal(loginAttemptAllowed(attempts, '203.0.113.7', now), false);
  assert.equal(loginAttemptAllowed(attempts, '203.0.113.7', now + 15 * 60 * 1000 + 1), true);
});

test('password hash format contains no plaintext password', async () => {
  const stored = await createPasswordHash('never-commit-this', encoder.encode('0123456789abcdef'), 10_000);

  assert.equal(stored.includes('never-commit-this'), false);
  assert.match(stored, /^pbkdf2-sha256\$10000\$/);
});

test('login issues a session and protected JSON requires it', async () => {
  const passwordHash = await createPasswordHash('private-pass', new Uint8Array(16).fill(5), 10_000);
  const env = {
    MEAL_PAGE_PASSWORD_HASH: passwordHash,
    MEAL_PAGE_SESSION_SECRET: 'a-long-session-secret-for-route-tests',
  };
  const body = new URLSearchParams({ password: 'private-pass' });
  const loginResponse = await loginMealRoute({
    request: new Request('https://choi01.com/meal/login', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded', 'cf-connecting-ip': '203.0.113.8' },
      body,
    }),
    env,
  });
  const setCookie = loginResponse.headers.get('set-cookie');

  assert.equal(loginResponse.status, 303);
  assert.ok(setCookie?.startsWith('choi01_meal_session='));

  const denied = await guardMealRoute({
    request: new Request('https://choi01.com/meal/data/current/44369.json'),
    env,
    next: () => new Response('secret-json'),
  });
  assert.equal(denied.status, 302);
  assert.equal(denied.headers.get('location'), '/meal/login.html');

  const granted = await guardMealRoute({
    request: new Request('https://choi01.com/meal/data/current/44369.json', {
      headers: { cookie: setCookie.split(';', 1)[0] },
    }),
    env,
    next: () => new Response('secret-json'),
  });
  assert.equal(await granted.text(), 'secret-json');
});
