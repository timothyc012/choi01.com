# choi01.com

Choi01 Lab — public project hub plus a guest canvas memo board.

## Structure

| Path | What it is |
| --- | --- |
| `index.html`, `styles.css`, `script.js` | Static hub homepage (design system in `DESIGN.md`) |
| `canvas/index.html` + `src/` | Guest canvas memo board (React island at `/canvas/`) |
| `packages/canvas/` | Vendored copy of [`chois-canvas`](https://github.com/timothyc012/chois-canvas) |
| `public/mohemeokji/` + `public/offers/` | Weekly supermarket offers, recipe pages, and shopping checklist |

## Canvas

The canvas at `/canvas/` stays **ephemeral** for logged-out guests: no server
persistence or localStorage, with **파일로 저장** and **파일 열기** for manual
backup. When Cloudflare Access is configured, only the exact Google emails in
the Access policy and server-side allowlist can log in. Their canvas is stored
in D1, restored after login, saved after a short edit debounce, and protected
against silent overwrite from another device. See [the deployment guide](docs/canvas-access.md).

All imported and server-stored snapshots are validated through
`parseCanvasSnapshot`, the package's required boundary for external snapshots.

Image attachments are intentionally not offered: the package's asset policy
allows only `http(s):`/`blob:` URLs, so self-contained JSON round-trips can't
carry embedded `data:` images. If that's ever wanted, extend `chois-canvas`
upstream first (see its README integration policy).

## Vendored chois-canvas

`packages/canvas` is a snapshot of the private `timothyc012/chois-canvas`
repository, pinned at upstream commit `9b1773e` (2026-09-10, "feat(canvas):
add canvas lasso scenes export and grid support").

Per the upstream integration policy:

- Do **not** edit the vendored copy. Make changes upstream, verify there,
  then re-copy (excluding `.git/` and `node_modules/`).
- The prebuilt `dist/` ships with the package, so consumers need no build step.

## Develop

```bash
npm install
npm run dev        # serves / (home) and /canvas/
npm run build      # emits dist/ for both pages
npm run typecheck
```

For the Cloudflare Functions/D1 local path, copy `.dev.vars.example` to
`.dev.vars` and use `wrangler pages dev`; normal `npm run dev` remains guest
mode by design.
