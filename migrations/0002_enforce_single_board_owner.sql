-- 0001 may already be deployed. Keep its history immutable and add the
-- one-board-per-owner invariant in a forward-only migration instead.
CREATE UNIQUE INDEX IF NOT EXISTS boards_owner_id_unique ON boards(owner_id);
