# Neoflow UI adaptation design

## Status

Approved scope: implement both the compact selection inspector and a working Mermaid diagram editing flow. The first implementation targets the guest canvas in `choi01.com`; the reusable canvas changes land in the sibling `chois-canvas` repository first and are then vendored into this app.

## Goal

Bring over Neoflow's strongest interaction patterns without copying its visual shell or tldraw dependency:

- progressive disclosure for selection actions;
- a two-step diagram composer;
- a right-side source editor that keeps the canvas visible while code changes are previewed.

The result must still feel like the Choi01 Lab canvas: quiet, border-led, keyboard-accessible, and explicit about ephemeral storage.

## Scope and non-goals

### In scope

1. Refactor the selection inspector into small grouped popovers. The compact row exposes the common action and the expanded groups expose color, text, arrow, alignment, and stacking controls only when the selected shape supports them.
2. Add a diagram composer entry to the guest toolbar. It offers Flowchart, Sequence, and Class templates, accepts a user description/source, and creates a diagram card at the viewport center.
3. Add a right-side diagram source drawer. Selecting a diagram card opens a code-edit affordance; edits update the card source and re-render the diagram without navigating away.
4. Keep diagram data inside the existing versioned canvas snapshot. A diagram uses the existing `card` shape with `category: 'diagram'` and `text` as its source, so old snapshots remain readable and no new persistence service is required.
5. Add a provider-neutral renderer extension to `InfiniteCanvas`. The host supplies the Mermaid renderer; the core package remains free of Mermaid, Next.js, and model-provider dependencies.

### Out of scope

- a live LLM request or API key handling;
- accounts, teams, realtime collaboration, or server persistence;
- replacing the canvas engine with tldraw;
- changing the guest board's explicit file-only storage policy;
- a Mermaid-specific export contract in this pass. Export falls back to the validated card source until a renderer-aware export contract is designed separately.

## Architecture

### Reusable package (`/Users/01/Desktop/DEVProject/chois-canvas`)

- `CanvasInspector` keeps the existing placement and collision-avoidance logic, but replaces the dense control row with a reusable `InspectorGroup`/popover pattern.
- `InfiniteCanvas` accepts an optional `renderDiagram` callback. The callback receives a validated card shape whose category is `diagram` and returns a React node. When omitted, the existing card text renderer remains the safe fallback.
- The package's core model, snapshot version, sanitizer, and adapter contracts remain provider-neutral. No Mermaid import enters `packages/canvas`.
- Existing `CanvasShape` and `CanvasSnapshot` types remain backward-compatible because diagrams are represented as existing cards.

### Host app (`/Users/01/Desktop/DEVProject/choi01.com`)

- `GuestCanvasPage` owns composer state, source drawer state, and the Mermaid adapter.
- The composer uses deterministic starter templates in this pass. Its button is labeled as a diagram composer, not as a live AI claim. A later AI adapter can replace the source-generation function without changing the canvas schema or drawer.
- The host renders Mermaid output inside the supplied callback with a bounded container and a stable shape id. Rendering errors become an inline error state with the editable source still available.
- The drawer writes source changes through the existing card update path and marks the board dirty.

## Interaction design

### Selection inspector

- Common actions stay visible: color, duplicate/delete, and the active shape summary.
- Advanced controls are grouped as `정렬`, `순서`, `텍스트`, and `연결선`.
- Groups are hidden when unsupported, not merely disabled.
- Popovers close on outside pointer/focus movement and expose visible focus rings.
- The inspector remains collision-aware and must not cover the selected shape when an alternate placement is available.

### Diagram composer

- Entry point: one `Sparkles`/diagram button in the existing floating toolbar.
- Step 1: choose Flowchart, Sequence, or Class.
- Step 2: edit a starter source or short description, then create the diagram.
- On creation, the card is selected and the source drawer opens so the next action is obvious.
- Empty or invalid source is rejected inline; no alert-only failure path.

### Source drawer

- Desktop: right drawer, 360–420px, canvas remains visible.
- Narrow viewport: drawer becomes a full-width bottom sheet or full-screen panel.
- Header contains diagram type, close button, and source status.
- Editor is a labelled textarea in the first pass; Monaco is intentionally deferred to avoid a large editor dependency for the guest surface.
- Render errors appear below the editor, never replacing it.

## Data flow

```text
composer template/source
  -> host creates card { type: 'card', category: 'diagram', text: source }
  -> InfiniteCanvas validates and stores the card in canvas-v1
  -> renderDiagram(card) renders Mermaid in the host
  -> source drawer edits card.text
  -> onDirty marks the existing file-save warning state
```

## Error and safety rules

- Diagram source is bounded before render and before snapshot entry using the existing text limits.
- Mermaid is initialized with a restrictive security level and never receives HTML from untrusted shape fields as executable markup.
- A render failure preserves the source and shows a recoverable error state.
- External snapshots still enter through `parseCanvasSnapshot`.
- No new `any`, TypeScript suppression, or silent fallback is allowed.

## Verification plan

### Package

- Existing core and React tests remain green.
- Add focused tests for the optional diagram renderer path and the inspector's supported-group visibility.
- Run `npm test`, `npm run build`, and type generation in `chois-canvas`.

### Host

- Run `npm run typecheck` and `npm run build`.
- Browser QA at desktop and narrow viewport:
  - select a card and open/close each supported inspector group;
  - create a flowchart, sequence, and class diagram;
  - edit source in the right drawer and observe a re-render;
  - trigger a malformed source and recover without losing it;
  - save and reload a `canvas-v1` file containing a diagram card;
  - verify the unsaved warning and keyboard shortcuts still work.

## Accepted debt

Diagram export will render the validated card source as a fallback rather than embedding Mermaid's generated SVG. A renderer-aware export adapter is a separate follow-up because it changes the package's export contract and CSP/sanitization surface.

