# Canvas login and persistence

Date: 2026-09-07 (revised the same day: Supabase replaced by Cloudflare)
Scope: choi01.com `/canvas/` page. The `chois-canvas` package is not changed.

## Goal

Work done on the canvas must survive a reload and follow the owner across
devices (iPad, Mac). Start with a single owner and a single board (stage a),
without blocking later stages:

- b. many users, each with their own boards
- c. several users editing one board together

## Current state

- choi01.com is a static Vite site deployed on Cloudflare Pages.
  `GuestCanvasPage` persists nothing; the only durable path is the
  "파일로 저장" JSON download.
- `InfiniteCanvasHandle` already exposes `getSnapshot`, `loadSnapshot` and
  `onDirty`, which is everything persistence needs.
- Supabase was evaluated first and rejected: the free tier allows two active
  projects and both are in use (one holds company data, one the dogemeinde
  admin app), so the canvas would have had to share a project.

## Decisions

1. Backend: **Cloudflare**, the account the site already deploys from.
   Login through **Cloudflare Access** (Zero Trust, Google as identity
   provider, free up to 50 users). Storage through **Pages Functions + D1**.
2. Login is optional. Access protects exactly one path, `/api/login`; the
   public guest canvas stays open. After login the Access session cookie
   (`CF_Authorization`) is sent with every same-origin request, and the other
   `/api/*` functions verify that JWT themselves.
3. Access policy is the allow-list. Stage a: allow only the owner's email.
   Stage b: change the policy to "anyone who logs in with Google". No code
   changes.
4. Storage unit: the whole `canvas-v1` snapshot as one row. Stage c adds a
   realtime document (Yjs on Durable Objects) beside it; the snapshot stays as
   backup and preview, as tldraw and Excalidraw do.
5. The owner id is the verified email from the Access JWT.

## 1. Auth flow

- On load the page calls `GET /api/me`. 200 with `{ email, logoutUrl }`
  means logged in; 401 means logged out; 404 or a network error means the
  backend is not deployed (local `vite dev`), and the login controls stay
  hidden.
- Toolbar gains one control: "Google로 로그인" when logged out, the user's
  email with save status and "로그아웃" when logged in.
- Login navigates to `/api/login`. Access shows its Google login, sets the
  cookie and returns to `/api/login`, which redirects to `/canvas/`.
- Logout navigates to the Access logout URL, which clears the cookie and
  returns to `/canvas/`.
- Every `/api/*` function reads `CF_Authorization` (or the
  `Cf-Access-Jwt-Assertion` header), verifies it against the team's JWKS
  (`https://<team>.cloudflareaccess.com/cdn-cgi/access/certs`) with the
  application's AUD tag, and takes `email` from the payload. Local
  development can set `DEV_USER_EMAIL` in `.dev.vars` to act as that user.

## 2. Data model

D1 table `boards`:

| column | type | notes |
|---|---|---|
| id | TEXT primary key | UUID |
| owner_id | TEXT not null | verified email, lower-cased |
| title | TEXT not null default '내 보드' | |
| snapshot | TEXT not null | `canvas-v1` snapshot as JSON |
| revision | INTEGER not null default 1 | +1 on every save |
| created_at / updated_at | TEXT (ISO 8601) | |

Index on `owner_id`. Every query is scoped by `owner_id` from the verified
identity; the client never sends an owner. Stage c adds `board_members` and
lets members through the same functions; `boards` does not change.

Every snapshot passes `parseCanvasSnapshot` on the server before it is
stored and on the client after it is loaded, so a damaged row fails loudly
instead of half-loading.

## 3. API

| method and path | behaviour |
|---|---|
| GET `/api/me` | 200 `{ email, logoutUrl }`, or 401 |
| GET `/api/login` | protected by Access; 302 to `/canvas/` |
| GET `/api/board` | the owner's oldest board, or 404 |
| POST `/api/board` | create a board for the owner (body: optional snapshot); 201 |
| PUT `/api/board/:id` | body `{ expectedRevision, snapshot }`; 200 `{ id, revision }`, 409 when the stored revision differs, 404 when the board is not the caller's |

## 4. Saving, loading and conflicts

- After login: `GET /api/board`; 404 means first login, so `POST` an empty
  board. Then `loadSnapshot`. If the guest canvas already has content and the
  stored board does too, the user is asked which to keep; if the stored board
  is empty, the guest content becomes the first save.
- `onDirty` marks the board dirty and schedules a save 1.5 s later
  (debounced). `pagehide` / `visibilitychange: hidden` flush immediately.
- Save is `UPDATE ... WHERE id = ? AND owner_id = ? AND revision = ?`. Zero
  rows means another device saved first: the page shows "다른 기기에서
  저장된 내용이 있습니다" with "다른 기기 내용 불러오기" and "내 것으로
  덮어쓰기". Nothing is overwritten silently.
- A save error keeps the dirty flag and retries on the next `onDirty`.
- The existing file export/import remains as a manual backup.
- Status text in the toolbar: "저장됨 · 14:02", "저장 중…", "저장 실패".

## 5. Guest mode

Logged-out visitors keep today's ephemeral canvas and its notice. The landing
page copy stays true.

## 6. Configuration

`wrangler.toml` at the repo root (committed): Pages output dir, the D1
binding `DB`, and the vars `ACCESS_TEAM_DOMAIN` and `ACCESS_AUD`. The Pages
project reads the same file on deploy, so no dashboard-side variables are
needed for these. `.dev.vars` (git-ignored) may set `DEV_USER_EMAIL`.

Cloudflare side, done once:

- `wrangler d1 create choi01-canvas`, then `wrangler d1 migrations apply`
  (CLI, by the agent once Wrangler is logged in).
- Zero Trust → Settings → Authentication: add Google as a login method using
  the existing OAuth client; its authorised redirect URI is
  `https://<team>.cloudflareaccess.com/cdn-cgi/access/callback`.
- Zero Trust → Access → Applications: self-hosted application for
  `choi01.com/api/login`, policy "Allow" including the owner's email. Copy
  the application's AUD tag into `wrangler.toml`.

## 7. Files

- `functions/_lib/identity.ts`: JWT extraction and verification (jose).
- `functions/_lib/boardRepo.ts`: the three D1 queries as pure functions over a
  minimal D1 interface, so tests use a fake.
- `functions/api/me.ts`, `functions/api/login.ts`, `functions/api/board.ts`,
  `functions/api/board/[id].ts`: HTTP handlers.
- `migrations/0001_boards.sql`: D1 schema.
- `src/canvas/boardStorage.ts`: backend-neutral load/save with the revision
  guard (unchanged from the Supabase draft).
- `src/canvas/cloudflareBoardClient.ts`: `BoardClient` over `fetch`.
- `src/canvas/useCanvasAuth.ts`: `/api/me` state, login/logout navigation.
- `src/canvas/useBoardPersistence.ts`, `src/canvas/AuthControls.tsx`,
  `src/GuestCanvasPage.tsx`: unchanged in shape; the page wires the new
  client and auth hook.

## 8. Testing

- `tests/boardStorage.test.mjs`: load creates a board when none exists; save
  bumps revision; stale revision raises `BoardConflictError`; malformed
  snapshot is rejected.
- `tests/cloudflareBoardClient.test.mjs`: 404 → null, 201 → row, 409 → null
  (conflict), other statuses → error, all with a fake `fetch`.
- `tests/boardRepo.test.mjs`: the D1 queries against an in-memory fake,
  including the owner scoping and the revision guard.
- Manual on iPad and Mac: log in on both, draw on one, reload the other, then
  force a conflict by drawing on both before either saves.
