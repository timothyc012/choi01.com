import { parseCanvasSnapshot } from 'chois-canvas/core';
import { identityFromRequest, type IdentityEnv } from '../_lib/identity';
import { createBoard, getOwnBoard } from '../_lib/boardRepo';
import { error, json } from '../_lib/http';

type Env = IdentityEnv & { DB: D1Database };

const EMPTY = { version: 'canvas-v1', shapes: [], camera: { x: 0, y: 0, z: 1 } };

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const identity = await identityFromRequest(request, env);
  if (!identity) return error(401, 'not logged in');
  const board = await getOwnBoard(env.DB, identity.email);
  return board ? json(board) : error(404, 'no board yet');
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const identity = await identityFromRequest(request, env);
  if (!identity) return error(401, 'not logged in');
  let snapshot: unknown = EMPTY;
  const text = await request.text();
  if (text.trim()) {
    try {
      snapshot = parseCanvasSnapshot(JSON.parse(text));
    } catch (err) {
      return error(400, err instanceof Error ? err.message : 'invalid snapshot');
    }
  }
  const board = await createBoard(env.DB, identity.email, snapshot);
  return json(board, 201);
};
