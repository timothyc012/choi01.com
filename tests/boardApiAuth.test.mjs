import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createServer } from 'vite';

let server;
let onRequestGet;
let onRequestPost;
let onRequestPut;
let onMeRequestGet;

before(async () => {
  server = await createServer({
    logLevel: 'silent',
    server: { middlewareMode: true },
    appType: 'custom',
    optimizeDeps: { noDiscovery: true },
  });
  ({ onRequestGet, onRequestPost } = await server.ssrLoadModule('/functions/api/board.ts'));
  ({ onRequestPut } = await server.ssrLoadModule('/functions/api/board/[id].ts'));
  ({ onRequestGet: onMeRequestGet } = await server.ssrLoadModule('/functions/api/me.ts'));
});

after(async () => { await server?.close(); });

function forbiddenDatabase() {
  return {
    prepare() {
      throw new Error('A request without a verified identity must not reach D1.');
    },
  };
}

test('board endpoints reject unauthenticated requests before any database work', async () => {
  const env = { DB: forbiddenDatabase() };
  const get = await onRequestGet({ request: new Request('https://choi01.com/api/board'), env });
  const post = await onRequestPost({ request: new Request('https://choi01.com/api/board', { method: 'POST' }), env });
  const put = await onRequestPut({
    request: new Request('https://choi01.com/api/board/board-1', { method: 'PUT' }),
    env,
    params: { id: 'board-1' },
  });

  assert.equal(get.status, 401);
  assert.equal(post.status, 401);
  assert.equal(put.status, 401);
});

test('board endpoints identify a verified but unallowlisted user without touching D1', async () => {
  const env = {
    DB: forbiddenDatabase(),
    DEV_USER_EMAIL: 'owner@example.com',
    ALLOWED_EMAILS: 'other@example.com',
  };
  const get = await onRequestGet({ request: new Request('https://choi01.com/api/board'), env });
  const post = await onRequestPost({ request: new Request('https://choi01.com/api/board', { method: 'POST' }), env });
  const put = await onRequestPut({
    request: new Request('https://choi01.com/api/board/board-1', { method: 'PUT' }),
    env,
    params: { id: 'board-1' },
  });

  assert.equal(get.status, 403);
  assert.equal(post.status, 403);
  assert.equal(put.status, 403);
});

test('the session endpoint gives an unallowlisted account a safe logout route for switching Google accounts', async () => {
  const response = await onMeRequestGet({
    request: new Request('https://choi01.com/api/me'),
    env: { DEV_USER_EMAIL: 'owner@example.com', ALLOWED_EMAILS: 'other@example.com' },
  });

  assert.equal(response.status, 403);
  assert.deepEqual(await response.json(), { error: 'not allowed', logoutUrl: '/api/login' });
});
