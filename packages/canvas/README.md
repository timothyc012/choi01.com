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

Storage, collaboration, and asset adapters must remain provider-neutral contracts; they must not leak an application's service client into the core package.

## Integration policy

Applications should pin a tested commit or release. Make changes and verify them in this repository first, then update the consuming application's Git dependency or submodule reference. Avoid editing vendored copies inside consuming applications.
