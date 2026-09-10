import { parseCanvasSnapshot } from 'chois-canvas/core';
import { authorizationFromRequest, type IdentityEnv } from '../../_lib/identity';
import { updateBoard } from '../../_lib/boardRepo';
import { error, json } from '../../_lib/http';

type Env = IdentityEnv & { DB: D1Database };

export const onRequestPut: PagesFunction<Env> = async ({ request, env, params }) => {
  const authorization = await authorizationFromRequest(request, env);
  if (authorization.kind !== 'authenticated') {
    return error(authorization.kind === 'forbidden' ? 403 : 401, authorization.kind === 'forbidden' ? 'not allowed' : 'not logged in');
  }
  const { identity } = authorization;
  const id = typeof params.id === 'string' ? params.id : '';
  if (!id) return error(400, 'missing board id');

  let body: { expectedRevision?: unknown; snapshot?: unknown };
  try {
    body = JSON.parse(await request.text());
  } catch {
    return error(400, 'body must be JSON');
  }
  const expectedRevision = body.expectedRevision;
  if (typeof expectedRevision !== 'number' || !Number.isInteger(expectedRevision) || expectedRevision < 1) {
    return error(400, 'expectedRevision must be a positive integer');
  }
  let snapshot: unknown;
  try {
    snapshot = parseCanvasSnapshot(body.snapshot);
  } catch (err) {
    return error(400, err instanceof Error ? err.message : 'invalid snapshot');
  }

  const result = await updateBoard(env.DB, identity.email, id, expectedRevision, snapshot);
  switch (result.kind) {
    case 'updated': return json({ id: result.id, revision: result.revision });
    case 'conflict': return error(409, 'another device saved a newer revision');
    default: return error(404, 'board not found');
  }
};
