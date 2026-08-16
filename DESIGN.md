# Choi01 Hub Design System

## 0. Research Log

- Embedded refs: shortlisted Mintlify, Vercel, Linear -> picked minimalist-skill + Mintlify because the site is a documentation-grade project hub, not a glossy app launch.
- UI/UX DB: local CSV data file was unavailable; applied the loaded UI/UX accessibility, responsive, typography, and interaction rules from the README.
- Imagen drafts: skipped because existing 01ontology visualization artifacts better represent the real project surface than invented imagery.
- Skipped lanes: lazyweb real screens because the request is for a first local draft and the chosen embedded references already cover documentation/product-hub grammar.

## 1. Atmosphere & Identity

Choi01 Hub should feel like a quiet technical lab notebook made public: readable, specific, and grounded in real project surfaces. The signature is a living ontology workbench: a restrained page with real canvas screenshots, technical labels, and clear MCP usage paths.

## 2. Color

| Role | Token | Value | Usage |
| --- | --- | --- | --- |
| Canvas | `--color-canvas` | `#ffffff` | Page background |
| Surface | `--color-surface` | `#fbfcfb` | Subtle panels and code blocks |
| Surface Strong | `--color-surface-strong` | `#f4f7f5` | Preview rails |
| Text Primary | `--color-text` | `#111513` | Headings and body |
| Text Secondary | `--color-muted` | `#58625d` | Supporting copy |
| Text Tertiary | `--color-faint` | `#7d8983` | Captions and metadata |
| Border | `--color-border` | `#dfe7e2` | Cards, dividers |
| Border Soft | `--color-border-soft` | `#edf2ef` | Light separators |
| Accent Green | `--color-accent` | `#11a36a` | Primary links and focus |
| Accent Ink | `--color-ink` | `#15201b` | Primary button |
| Accent Blue | `--color-blue` | `#2769b4` | Ontology and canvas tags |
| Accent Amber | `--color-amber` | `#9a6a12` | DATEV/FIBU tags |
| Accent Red | `--color-red` | `#a43d45` | Caution and local/API notes |

Rules: green is interactive, blue marks ontology/canvas, amber marks accounting, red marks key requirements. No decorative color-only meaning.

## 3. Typography

| Level | Size | Weight | Line Height | Usage |
| --- | --- | --- | --- | --- |
| Display | `clamp(38px, 4.6vw, 56px)` | 650 | 1.05 | Hero brand headline |
| H1 | `40px` | 620 | 1.12 | Section title |
| H2 | `28px` | 620 | 1.2 | Project title |
| H3 | `18px` | 620 | 1.35 | Card title |
| Body Large | `18px` | 400 | 1.62 | Hero copy |
| Body | `16px` | 400 | 1.62 | Main reading |
| Small | `14px` | 450 | 1.5 | Metadata |
| Mono | `12px` | 600 | 1.45 | Technical labels |

Font stack: `Aptos`, `Segoe UI`, `Helvetica Neue`, system sans-serif. Mono stack: `Cascadia Mono`, `SFMono-Regular`, `Consolas`, monospace.

## 4. Spacing & Layout

Base unit: 4px. Main tokens: `--space-2` 8px, `--space-3` 12px, `--space-4` 16px, `--space-6` 24px, `--space-8` 32px, `--space-12` 48px, `--space-16` 64px, `--space-20` 80px.

Content width: 1180px max, 20px mobile gutter, 32px desktop gutter. Hero is one-column with an artifact rail below the copy. Project cards use a responsive grid with stable minimum track width.

## 5. Components

### Header
- Structure: brand, navigation anchors, primary action.
- States: hover color shift, focus outline.
- Accessibility: semantic `nav`, skip link, visible focus, anchor targets offset below the sticky header.

### Artifact Rail
- Structure: four real visualization screenshots in fixed-aspect frames.
- States: none beyond image alt text.
- Accessibility: descriptive alt text for each project surface.

### Project Card
- Structure: label, title, summary, evidence bullets, action links.
- Variants: flagship, mcp, pack.
- States: hover border shift, keyboard focus on links.
- Layout: CSS grid, no nested cards.

### Usage Tabs
- Structure: tab buttons with panels for MCP, BYOK UI, and hosting.
- States: selected, hover, focus.
- Accessibility: ARIA tab roles, keyboard-click compatible buttons.

### Route Table
- Structure: static table-like grid of subdomains and purpose.
- Accessibility: headings and readable text; no tiny cells.

### Canvas Diagram Composer
- Structure: toolbar action opens a modal with Flowchart, Sequence, and Class Mermaid starters; created diagrams render as canvas cards.
- Editing: the selected diagram exposes a compact `Diagram` inspector group and a source drawer for direct Mermaid edits.
- States: loading, rendered SVG, and parse error preserve the source for recovery. The drawer fits narrow viewports without leaving the canvas.
- Persistence: source text stays on the diagram card so the existing canvas-v1 save/load path remains authoritative.

### Canvas Color Wheel
- Structure: the selected-object color popover combines preset swatches with a hue ring, saturation/value square, target tabs, and a six-digit hex field.
- Targets: drawing/line objects edit `strokeColor`; filled objects can edit `fillColor`, `strokeColor`, or `textColor` without losing the preset palette value.
- States: pointer-captured drag updates the live swatch; the active target and current color are announced through labels and remain keyboard-editable through the hex field.
- Accessibility: the ring and square expose named slider-like controls, visible focus, and a reduced-motion-safe response.

### Canvas Selection Drag
- Mechanism: a pointer press on a selected object records immutable origins and moves the object set in page coordinates with snap guides. Freehand points and connector waypoints translate with the object.
- Text editing bridge: a press inside the active contenteditable bubbles to the canvas. A release within the 4px drift threshold keeps the caret; a real drag moves the text object while preserving its content.
- Novel interaction note: beui.dev source consultation was attempted but unavailable in this environment, so this pointer-capture gesture is recorded here as a project-specific mechanism rather than copied from a catalog component.

## 6. Motion & Interaction

Use subtle transform/opacity only. Interactive links and buttons transition in 160ms. Entrance animation is optional and disabled for reduced motion. No decorative looping motion.

Canvas gestures are direct-manipulation interactions, not decorative motion: selection movement follows the pointer immediately, color-wheel updates are live, and the 4px text-editor drift threshold distinguishes caret placement from repositioning. `prefers-reduced-motion: reduce` removes transition easing but never disables pointer input or live color feedback.

## 7. Depth & Surface

Strategy: borders plus tonal shift. Cards use 1px borders and at most 8px radius. Shadows are only a low-opacity page-level lift on screenshot frames.

## 8. Accessibility Constraints & Accepted Debt

Target WCAG 2.2 AA. Body contrast must exceed 4.5:1. All interactive elements need visible focus. Korean and English text should wrap naturally without narrow containers. Reduced motion is respected.

Accepted debt: none for this draft.
