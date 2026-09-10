import assert from 'node:assert/strict';
import test from 'node:test';
import { authorizationFromRequest, identityFromRequest, isAllowedEmail } from '../functions/_lib/identity.ts';

const request = new Request('https://choi01.com/api/me');

test('local development identity is rejected when it is absent from the exact email allowlist', async () => {
  const identity = await identityFromRequest(request, {
    DEV_USER_EMAIL: 'owner@example.com',
    ALLOWED_EMAILS: 'other@example.com',
  });

  assert.equal(identity, null);
});

test('local development identity is accepted when its email matches the allowlist case-insensitively', async () => {
  const identity = await identityFromRequest(request, {
    DEV_USER_EMAIL: 'Owner@Example.com',
    ALLOWED_EMAILS: ' owner@example.com , second@example.com ',
  });

  assert.deepEqual(identity, { email: 'owner@example.com' });
});

test('an Access deployment fails closed when its email allowlist is missing', () => {
  assert.equal(isAllowedEmail('owner@example.com', { ACCESS_TEAM_DOMAIN: 'team.cloudflareaccess.com' }), false);
});

test('reports a verified but unallowlisted development identity as forbidden', async () => {
  const authorization = await authorizationFromRequest(request, {
    DEV_USER_EMAIL: 'owner@example.com',
    ALLOWED_EMAILS: 'other@example.com',
  });

  assert.deepEqual(authorization, { kind: 'forbidden' });
});
