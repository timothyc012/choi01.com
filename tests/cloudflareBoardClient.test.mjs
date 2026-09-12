import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createCloudflareBoardClient } from '../src/canvas/cloudflareBoardClient.ts';

const snapshot = { version: 'canvas-v1', shapes: [], camera: { x: 0, y: 0, z: 1 } };
const row = { id: 'b1', owner_id: 'me@example.com', title: '내 보드', snapshot, revision: 3, created_at: '2026-09-07T10:00:00Z', updated_at: '2026-09-07T10:00:00Z' };

function fakeFetch(responses) {
  const calls = [];
  const fetchImpl = async (input, init) => {
    calls.push({ input, init });
    const next = responses.shift();
    if (!next) throw new Error(`unexpected request ${input}`);
    return new Response(next.body === undefined ? null : JSON.stringify(next.body), {
      status: next.status,
      headers: { 'content-type': 'application/json' },
    });
  };
  return { fetchImpl, calls };
}

describe('cloudflareBoardClient', () => {
  it('reads the own board, and treats 404 as "no board yet"', async () => {
    const { fetchImpl, calls } = fakeFetch([{ status: 200, body: row }, { status: 404, body: { error: 'no board yet' } }]);
    const client = createCloudflareBoardClient(fetchImpl);
    assert.deepEqual(await client.selectOwnBoard('ignored'), row);
    assert.equal(await client.selectOwnBoard('ignored'), null);
    assert.equal(calls[0].input, '/api/board');
    assert.equal(calls[0].init.credentials, 'same-origin');
  });

  it('creates a board by posting the snapshot only; the server decides the owner', async () => {
    const { fetchImpl, calls } = fakeFetch([{ status: 201, body: row }]);
    const client = createCloudflareBoardClient(fetchImpl);
    const created = await client.insertBoard({ owner_id: 'me@example.com', snapshot });
    assert.equal(created.id, 'b1');
    assert.equal(calls[0].init.method, 'POST');
    assert.deepEqual(JSON.parse(calls[0].init.body), snapshot);
  });

  it('sends the expected revision and maps 409 to null (conflict)', async () => {
    const { fetchImpl, calls } = fakeFetch([{ status: 200, body: { id: 'b1', revision: 4 } }, { status: 409, body: { error: 'newer' } }]);
    const client = createCloudflareBoardClient(fetchImpl);
    assert.deepEqual(await client.updateBoard('b1', 3, snapshot), { id: 'b1', revision: 4 });
    assert.equal(calls[0].input, '/api/board/b1');
    assert.equal(calls[0].init.method, 'PUT');
    assert.deepEqual(JSON.parse(calls[0].init.body), { expectedRevision: 3, snapshot });
    assert.equal(await client.updateBoard('b1', 3, snapshot), null);
  });

  it('turns other failures into errors the UI can show', async () => {
    const { fetchImpl } = fakeFetch([{ status: 401, body: { error: 'not logged in' } }, { status: 500, body: { error: 'boom' } }]);
    const client = createCloudflareBoardClient(fetchImpl);
    await assert.rejects(() => client.selectOwnBoard('x'), /로그인/);
    await assert.rejects(() => client.updateBoard('b1', 1, snapshot), /500 boom/);
  });
});
