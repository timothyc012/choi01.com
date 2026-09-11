-- Canvas boards: one row per board, the whole canvas-v1 snapshot as JSON text.
-- Every query is scoped by owner_id, which the API takes from the verified
-- Cloudflare Access identity, never from the client.

CREATE TABLE IF NOT EXISTS boards (
  id TEXT PRIMARY KEY,
  owner_id TEXT NOT NULL,
  title TEXT NOT NULL DEFAULT '내 보드',
  snapshot TEXT NOT NULL,
  revision INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS boards_owner_id_idx ON boards (owner_id, created_at);
