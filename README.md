# choi01.com

Choi01 Lab — public project hub plus a guest canvas memo board.

## Structure

| Path | What it is |
| --- | --- |
| `index.html`, `styles.css`, `script.js` | Static hub homepage (design system in `DESIGN.md`) |
| `canvas/index.html` + `src/` | Guest canvas memo board (React island at `/canvas/`) |
| `packages/canvas/` | Vendored copy of [`chois-canvas`](https://github.com/timothyc012/chois-canvas) |

## Guest canvas

The canvas at `/canvas/` is deliberately **ephemeral**: no server persistence, no
localStorage, no login. Guests are told up front that nothing is saved. To keep
work, the page offers **파일로 저장** (downloads the board as a `canvas-v1` JSON
snapshot) and **파일 열기** (re-imports that file later). Uploads are validated
through `parseCanvasSnapshot`, the package's required boundary for external
snapshots.

Image attachments are intentionally not offered: the package's asset policy
allows only `http(s):`/`blob:` URLs, so self-contained JSON round-trips can't
carry embedded `data:` images. If that's ever wanted, extend `chois-canvas`
upstream first (see its README integration policy).

## Vendored chois-canvas

`packages/canvas` is a snapshot of the private `timothyc012/chois-canvas`
repository, pinned at upstream commit `8fa7ea2` (2026-08-03) **plus one local
fix** not yet pushed upstream:
[`upstream-patches/chois-canvas-0001-jsx-runtime.patch`](upstream-patches/chois-canvas-0001-jsx-runtime.patch)
— the library build used the classic JSX runtime, so `CanvasShapeRenderer.tsx`
(no explicit React import) emitted global `React.createElement` calls and any
consumer without `window.React` crashed on first shape render. Apply the patch
to the upstream repo with `git am`, then future re-vendors stay clean.

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
