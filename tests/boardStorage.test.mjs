import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  BoardConflictError,
  loadOwnBoard,
  saveBoard,
} from '../src/canvas/boardStorage.ts';

const OWNER = '11111111-1111-4111-8111-111111111111';

const emptySnapshot = () => ({ version: 'canvas-v1', shapes: [], camera: { x: 0, y: 0, z: 1 } });
const snapshotWith = shapes => ({ version: 'canvas-v1', shapes, camera: { x: 0, y: 0, z: 1 } });

/**
 * In-memory stand-in for the two queries boardStorage issues. It records the
 * calls so the tests can assert on the exact revision guard sent to the
 * server, which is the part a real database would enforce.
 */
function fakeClient(rows = []) {
  const calls = [];
  return {
    rows,
    calls,
    async selectOwnBoard(ownerId) {
      calls.push({ op: 'select', ownerId });
      return rows.filter(r => r.owner_id === ownerId).sort((a, b) => a.created_at.localeCompare(b.created_at))[0] ?? null;
    },
    async insertBoard(row) {
      calls.push({ op: 'insert', row });
      const stored = { id: `board-${rows.length + 1}`, created_at: new Date(2026, 8, 7, 12, rows.length).toISOString(), revision: 1, ...row };
      rows.push(stored);
      return stored;
    },
    async updateBoard(id, expectedRevision, snapshot) {
      calls.push({ op: 'update', id, expectedRevision });
      const row = rows.find(r => r.id === id);
      if (!row || row.revision !== expectedRevision) return null;
      row.snapshot = snapshot;
      row.revision += 1;
      return { id: row.id, revision: row.revision };
    },
  };
}

describe('loadOwnBoard', () => {
  it('creates an empty board on first login and returns it', async () => {
    const client = fakeClient();
    const board = await loadOwnBoard(client, OWNER);
    assert.equal(board.revision, 1);
    assert.deepEqual(board.snapshot.shapes, []);
    assert.equal(client.calls.filter(c => c.op === 'insert').length, 1);
    assert.equal(client.calls[1].row.owner_id, OWNER);
  });

  it('returns the stored board when one exists, parsed through the snapshot boundary', async () => {
    const stored = snapshotWith([{ id: 'n1', type: 'note', x: 10, y: 10, w: 180, h: 180, text: 'hi', color: 'yellow' }]);
    const client = fakeClient([{ id: 'b1', owner_id: OWNER, snapshot: stored, revision: 7, created_at: '2026-09-01T00:00:00Z' }]);
    const board = await loadOwnBoard(client, OWNER);
    assert.equal(board.id, 'b1');
    assert.equal(board.revision, 7);
    assert.equal(board.snapshot.shapes.length, 1);
    assert.equal(client.calls.some(c => c.op === 'insert'), false);
  });

  it('rejects a damaged stored snapshot instead of half-loading it', async () => {
    const client = fakeClient([{ id: 'b1', owner_id: OWNER, snapshot: { version: 'nope' }, revision: 2, created_at: '2026-09-01T00:00:00Z' }]);
    await assert.rejects(() => loadOwnBoard(client, OWNER), /snapshot/i);
  });
});

describe('saveBoard', () => {
  it('sends the last seen revision as the guard and returns the new one', async () => {
    const client = fakeClient([{ id: 'b1', owner_id: OWNER, snapshot: emptySnapshot(), revision: 3, created_at: '2026-09-01T00:00:00Z' }]);
    const next = await saveBoard(client, { id: 'b1', revision: 3 }, snapshotWith([]));
    assert.equal(next.revision, 4);
    assert.deepEqual(client.calls.at(-1), { op: 'update', id: 'b1', expectedRevision: 3 });
  });

  it('raises BoardConflictError when another device saved first', async () => {
    const client = fakeClient([{ id: 'b1', owner_id: OWNER, snapshot: emptySnapshot(), revision: 5, created_at: '2026-09-01T00:00:00Z' }]);
    await assert.rejects(
      () => saveBoard(client, { id: 'b1', revision: 4 }, snapshotWith([])),
      err => err instanceof BoardConflictError,
    );
    assert.equal(client.rows[0].revision, 5, 'nothing was overwritten');
  });

  it('refuses to save a snapshot that fails the canvas boundary', async () => {
    const client = fakeClient([{ id: 'b1', owner_id: OWNER, snapshot: emptySnapshot(), revision: 1, created_at: '2026-09-01T00:00:00Z' }]);
    await assert.rejects(() => saveBoard(client, { id: 'b1', revision: 1 }, { version: 'canvas-v0', shapes: [] }), /snapshot/i);
    assert.equal(client.calls.some(c => c.op === 'update'), false);
  });
});
