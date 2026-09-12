/**
 * Board persistence, independent of any backend client.
 *
 * The functions here take a `BoardClient` (three small queries) so the
 * revision guard and the snapshot boundary can be tested with a fake. The
 * Supabase-backed client lives in `supabaseBoardClient.ts`.
 */
import { parseCanvasSnapshot } from 'chois-canvas/core';

export type BoardSnapshot = ReturnType<typeof parseCanvasSnapshot>;

export interface BoardRow {
  readonly id: string;
  readonly owner_id: string;
  readonly snapshot: unknown;
  readonly revision: number;
  readonly created_at: string;
}

export interface BoardClient {
  /** The owner's oldest board, or null when they have none yet. */
  selectOwnBoard(ownerId: string): Promise<BoardRow | null>;
  insertBoard(row: { owner_id: string; snapshot: BoardSnapshot }): Promise<BoardRow>;
  /**
   * Update only when the stored revision still equals `expectedRevision`.
   * Resolves null when no row matched, which means another device saved first.
   */
  updateBoard(id: string, expectedRevision: number, snapshot: BoardSnapshot): Promise<{ id: string; revision: number } | null>;
}

export interface BoardRef {
  readonly id: string;
  readonly revision: number;
}

export interface LoadedBoard extends BoardRef {
  readonly snapshot: BoardSnapshot;
}

/** Another device saved a newer revision; nothing was overwritten. */
export class BoardConflictError extends Error {
  readonly board: BoardRef;
  constructor(board: BoardRef) {
    super('다른 기기에서 먼저 저장된 내용이 있습니다.');
    this.name = 'BoardConflictError';
    this.board = board;
  }
}

export function emptySnapshot(): BoardSnapshot {
  return parseCanvasSnapshot({ version: 'canvas-v1', shapes: [], camera: { x: 0, y: 0, z: 1 } });
}

export async function loadOwnBoard(client: BoardClient, ownerId: string): Promise<LoadedBoard> {
  const existing = await client.selectOwnBoard(ownerId);
  if (existing) {
    // A damaged row must fail here, loudly, rather than half-load into the canvas.
    return { id: existing.id, revision: existing.revision, snapshot: parseCanvasSnapshot(existing.snapshot) };
  }
  const created = await client.insertBoard({ owner_id: ownerId, snapshot: emptySnapshot() });
  return { id: created.id, revision: created.revision, snapshot: parseCanvasSnapshot(created.snapshot) };
}

export async function saveBoard(client: BoardClient, board: BoardRef, snapshot: unknown): Promise<BoardRef> {
  const parsed = parseCanvasSnapshot(snapshot);
  const updated = await client.updateBoard(board.id, board.revision, parsed);
  if (!updated) throw new BoardConflictError(board);
  return { id: updated.id, revision: updated.revision };
}
