/**
 * The boards table, as three queries over a minimal D1 interface. Owner
 * scoping lives here so no handler can forget it, and the interface is small
 * enough for tests to fake.
 */
export interface D1Like {
  prepare(sql: string): D1StatementLike;
}

export interface D1StatementLike {
  bind(...values: unknown[]): D1StatementLike;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  run(): Promise<{ meta: { changes: number } }>;
}

export interface BoardRecord {
  readonly id: string;
  readonly owner_id: string;
  readonly title: string;
  readonly snapshot: unknown;
  readonly revision: number;
  readonly created_at: string;
  readonly updated_at: string;
}

interface Row {
  id: string;
  owner_id: string;
  title: string;
  snapshot: string;
  revision: number;
  created_at: string;
  updated_at: string;
}

const COLUMNS = 'id, owner_id, title, snapshot, revision, created_at, updated_at';

function toRecord(row: Row): BoardRecord {
  return { ...row, snapshot: JSON.parse(row.snapshot) };
}

export async function getOwnBoard(db: D1Like, ownerId: string): Promise<BoardRecord | null> {
  const row = await db
    .prepare(`SELECT ${COLUMNS} FROM boards WHERE owner_id = ? ORDER BY created_at ASC LIMIT 1`)
    .bind(ownerId)
    .first<Row>();
  return row ? toRecord(row) : null;
}

export async function createBoard(db: D1Like, ownerId: string, snapshot: unknown, now = new Date()): Promise<BoardRecord> {
  const id = crypto.randomUUID();
  const stamp = now.toISOString();
  const inserted = await db
    .prepare('INSERT INTO boards (id, owner_id, snapshot, revision, created_at, updated_at) VALUES (?, ?, ?, 1, ?, ?) ON CONFLICT(owner_id) DO NOTHING')
    .bind(id, ownerId, JSON.stringify(snapshot), stamp, stamp)
    .run();
  if (inserted.meta.changes === 1) {
    return { id, owner_id: ownerId, title: '내 보드', snapshot, revision: 1, created_at: stamp, updated_at: stamp };
  }
  // A second device may have completed the first-board creation between its
  // read and insert. Return that canonical row rather than making a duplicate.
  const existing = await getOwnBoard(db, ownerId);
  if (existing) return existing;
  throw new Error('board creation did not persist');
}

export type UpdateResult =
  | { kind: 'updated'; id: string; revision: number }
  | { kind: 'conflict' }
  | { kind: 'missing' };

/**
 * Save only when the stored revision still equals `expectedRevision`. The
 * owner filter makes a foreign board look exactly like a missing one.
 */
export async function updateBoard(
  db: D1Like,
  ownerId: string,
  id: string,
  expectedRevision: number,
  snapshot: unknown,
  now = new Date(),
): Promise<UpdateResult> {
  const result = await db
    .prepare('UPDATE boards SET snapshot = ?, revision = revision + 1, updated_at = ? WHERE id = ? AND owner_id = ? AND revision = ?')
    .bind(JSON.stringify(snapshot), now.toISOString(), id, ownerId, expectedRevision)
    .run();
  if (result.meta.changes === 1) return { kind: 'updated', id, revision: expectedRevision + 1 };
  const exists = await db
    .prepare('SELECT id FROM boards WHERE id = ? AND owner_id = ?')
    .bind(id, ownerId)
    .first<{ id: string }>();
  return exists ? { kind: 'conflict' } : { kind: 'missing' };
}
