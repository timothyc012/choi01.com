# Chois Canvas

Reusable canvas document primitives and a React editor surface.

The package exposes the core document model, immutable commands, snapshot serialization, runtime boundary parsing, provider-neutral contracts, and a self-contained React editor surface. Concrete persistence, collaboration, and upload infrastructure stays outside the package so consuming applications can provide their own services.

## Install

Install the repository directly from GitHub:

```bash
npm install github:timothyc012/chois-canvas
```

For local development between sibling projects:

```bash
npm install ../chois-canvas
```

## Build

```bash
npm install
npm test
npm run build
```

The generated `dist/` directory is the portable package artifact. The source package does not depend on a host application's services, authentication, database, or collaboration provider. The prebuilt React entry installs its scoped stylesheet on first browser import, while `chois-canvas/style.css` remains available for CSP-controlled or CSS-bundler consumers that prefer an explicit stylesheet. The React entry requires React, React DOM, and `lucide-react` as peer dependencies; those remain external so their licenses and versions stay visible to the consuming application.

## Public contract

- `CanvasShape` is a discriminated union.
- `CanvasSnapshot` is versioned as `canvas-v1`.
- External snapshots must enter through `parseCanvasSnapshot`.
- Commands return a new document and never mutate the input document.
- Storage writes carry an optional expected revision so adapters can report conflicts instead of silently overwriting another user's work.
- Collaboration transports expose updates, presence, status, and close semantics without naming a realtime vendor.

The React editor is available as an additive subpath export and keeps the existing interaction contract while the host application migrates its board shell and collaboration wiring:

```tsx
import { InfiniteCanvas } from 'chois-canvas/react';
```

### Editing and navigation

- Shapes carry an optional `locked` flag. Locked shapes stay selectable but cannot be moved, resized, edited, or deleted; `applyCanvasCommand` ignores them in `moveShapes`/`deleteShapes`, and `setShapesLocked` toggles the flag.
- `Cmd/Ctrl+F` opens a find bar that searches shape text in reading order; `Enter`/`Shift+Enter` cycles matches and centres the camera on each hit, `Esc` closes it. `Tab`/`Shift+Tab` walks shapes in the same reading order, and `Alt+1`/`Alt+2`/`Alt+3` fit all shapes, the selection, and the maximum zoom; `[`/`]` step smart zoom.
- A minimap (`data-canvas-minimap`) renders in the bottom-right corner; click or drag to re-centre the camera, and the `미니맵` toggle button (or the `showMinimap` prop) turns it off.
- A floating toolbar (`data-canvas-floating-bar`) appears above the current selection with colour, text style, list, and selection actions; it stays screen-sized, clamps inside the viewport, and hides during drags and text editing.
- Hovering or selecting a shape with the select tool shows blue edge dots (`data-canvas-connect-dot`) at the four edge midpoints. Dragging a dot previews a connector; dropping on a shape binds a `fromId`/`toId` orthogonal arrow, and dropping on empty space clones the source shape, links it, and opens its text editor. `Esc` cancels the drag; locked shapes may start or receive connections without being modified.
- Frames draw their name in a screen-sized label above the top-left edge (`data-canvas-frame-label`); double-clicking the label renames the frame.
- `InfiniteCanvasHandle.listFrames()` returns `{ id, name }` for every frame in document order, and `focusShape(id)` fits the camera on a shape with zoom capped at 100%, so a host can build a frame navigation list.

### Zero1 file conversion

`zero1ToChois` converts a Zero1 Office `.pdfcanvas.json` file (version 6) into a `canvas-v1` snapshot — pass `{ sheet: id }` to pick a specific sheet; unrepresentable items land in `dropped`. `choisToZero1` exports a document back to the Zero1 format with fresh UUIDs. Both are exported from `chois-canvas` core.

```ts
import { choisToZero1, zero1ToChois } from 'chois-canvas';
const { snapshot, dropped } = zero1ToChois(fileJson);
```

Storage, collaboration, and asset adapters must remain provider-neutral contracts; they must not leak an application's service client into the core package.

## Integration policy

Applications should pin a tested commit or release. Make changes and verify them in this repository first, then update the consuming application's Git dependency or submodule reference. Avoid editing vendored copies inside consuming applications.
