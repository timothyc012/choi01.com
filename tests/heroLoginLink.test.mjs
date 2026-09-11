import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import test from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const home = readFileSync(resolve(here, '../index.html'), 'utf8');

test('home header places the Google login link immediately before GitHub', () => {
  assert.match(
    home,
    /<div class="nav-actions">\s*<a class="nav-action nav-login" href="\/api\/login"[^>]*>Google로 로그인<\/a>\s*<a class="nav-action" href="https:\/\/github\.com\/timothyc012"[^>]*>GitHub<\/a>\s*<\/div>/,
  );
});

test('home copy distinguishes the ephemeral guest canvas from an allowlisted saved board', () => {
  const copy = home.replace(/\s+/g, ' ');
  assert.match(copy, /The guest canvas is not saved on a server/);
  assert.match(copy, /sign in with a permitted Google account to keep a private board across devices/);
});
