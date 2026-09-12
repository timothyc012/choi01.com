import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createBoard, getOwnBoard, updateBoard } from '../functions/_lib/boardRepo.ts';

const snapshot = { version: 'canvas-v1', shapes: [], camera: { x: 0, y: 0, z: 1 } };

/**
 * Just enough of D1 to run the repo's three statements: an array of rows and
 * hand-written matching for each SQL shape. It fails loudly on any other SQL
 * so a new query cannot silently pass.
 */
function fakeD1(rows = []) {
  const statement = sql => {
    let args = [];
    return {
      bind(...values) { args = values; return this; },
      async first() {
        if (sql.startsWith('SELECT id, owner_id')) {
          const [owner] = args;
          return rows.filter(r => r.owner_id === owner).sort((a, b) => a.created_at.localeCompare(b.created_at))[0] ?? null;
        }
        if (sql.startsWith('SELECT id FROM boards')) {
          const [id, owner] = args;
          const row = rows.find(r => r.id === id && r.owner_id === owner);
          return row ? { id: row.id } : null;
        }
        throw new Error(`unexpected first(): ${sql}`);
      },
      async run() {
        if (sql.startsWith('INSERT INTO boards')) {
          const [id, owner, snap, created, updated] = args;
          if (sql.includes('ON CONFLICT(owner_id)') && rows.some(row => row.owner_id === owner)) {
            return { meta: { changes: 0 } };
          }
          rows.push({ id, owner_id: owner, title: '내 보드', snapshot: snap, revision: 1, created_at: created, updated_at: updated });
          return { meta: { changes: 1 } };
        }
        if (sql.startsWith('UPDATE boards')) {
          const [snap, updated, id, owner, expected] = args;
          const row = rows.find(r => r.id === id && r.owner_id === owner && r.revision === expected);
          if (!row) return { meta: { changes: 0 } };
          row.snapshot = snap; row.revision += 1; row.updated_at = updated;
          return { meta: { changes: 1 } };
        }
        throw new Error(`unexpected run(): ${sql}`);
      },
    };
  };
  return { rows, prepare: statement };
}

describe('boardRepo', () => {
  it('creates a board and reads it back with the snapshot parsed from JSON text', async () => {
    const db = fakeD1();
    const created = await createBoard(db, 'me@example.com', snapshot, new Date('2026-09-07T10:00:00Z'));
    assert.equal(created.revision, 1);
    assert.equal(typeof db.rows[0].snapshot, 'string', 'D1 stores the snapshot as text');
    const read = await getOwnBoard(db, 'me@example.com');
    assert.equal(read.id, created.id);
    assert.deepEqual(read.snapshot, snapshot);
  });

  it('never returns another owner\'s board', async () => {
    const db = fakeD1();
    await createBoard(db, 'me@example.com', snapshot);
    assert.equal(await getOwnBoard(db, 'other@example.com'), null);
  });

  it('keeps one board when two first-login creates race for the same owner', async () => {
    const db = fakeD1();
    const first = await createBoard(db, 'me@example.com', snapshot, new Date('2026-09-07T10:00:00Z'));
    const second = await createBoard(db, 'me@example.com', snapshot, new Date('2026-09-07T10:00:01Z'));

    assert.equal(second.id, first.id);
    assert.equal(db.rows.length, 1);
  });

  it('updates only when the revision matches, and reports conflicts', async () => {
    const db = fakeD1();
    const board = await createBoard(db, 'me@example.com', snapshot);
    assert.deepEqual(await updateBoard(db, 'me@example.com', board.id, 1, snapshot), { kind: 'updated', id: board.id, revision: 2 });
    assert.deepEqual(await updateBoard(db, 'me@example.com', board.id, 1, snapshot), { kind: 'conflict' });
    assert.equal(db.rows[0].revision, 2, 'the stale save changed nothing');
  });

  it('treats a foreign or unknown board as missing', async () => {
    const db = fakeD1();
    const board = await createBoard(db, 'me@example.com', snapshot);
    assert.deepEqual(await updateBoard(db, 'other@example.com', board.id, 1, snapshot), { kind: 'missing' });
    assert.deepEqual(await updateBoard(db, 'me@example.com', 'nope', 1, snapshot), { kind: 'missing' });
  });
});
