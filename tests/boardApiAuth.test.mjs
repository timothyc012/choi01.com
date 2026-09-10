import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createServer } from 'vite';

let server;
let onRequestGet;
let onRequestPost;
let onRequestPut;

before(async () => {
  server = await createServer({
    logLevel: 'silent',
    server: { middlewareMode: true },
    appType: 'custom',
    optimizeDeps: { noDiscovery: true },
  });
  ({ onRequestGet, onRequestPost } = await server.ssrLoadModule('/functions/api/board.ts'));
  ({ onRequestPut } = await server.ssrLoadModule('/functions/api/board/[id].ts'));
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
