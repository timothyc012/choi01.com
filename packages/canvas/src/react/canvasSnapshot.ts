import type { Dispatch, RefObject, SetStateAction } from 'react';
import { CANVAS_LIMITS, parseCanvasSnapshot } from '../core/index.ts';
import type { CanvasShape, CanvasSnapshot } from './InfiniteCanvas';
import { sanitizeShapeForCanvas } from './canvasGeometry';

type Camera = CanvasSnapshot['camera'];

interface CanvasSnapshotLoadOptions {
  controlled: boolean;
  past: RefObject<CanvasShape[][]>;
  future: RefObject<CanvasShape[][]>;
  setLocalShapes: Dispatch<SetStateAction<CanvasShape[]>>;
  setCamera: Dispatch<SetStateAction<Camera>>;
  selectNow: (selection: Set<string>) => void;
  setEditingId: Dispatch<SetStateAction<string | null>>;
}

/** Validates and applies a persisted snapshot while respecting collab ownership. */
export function loadCanvasSnapshot(snapshot: unknown, {
  controlled,
  past,
  future,
  setLocalShapes,
  setCamera,
  selectNow,
  setEditingId,
}: CanvasSnapshotLoadOptions): void {
  const snap = snapshot as Partial<CanvasSnapshot> | null;
  // Older boards may hold an unsupported snapshot schema; start clean
  // rather than crashing on data this engine cannot read.
  if (!snap || snap.version !== 'canvas-v1') return;
  let validatedCamera: Camera;
  try {
    validatedCamera = parseCanvasSnapshot({ version: 'canvas-v1', shapes: [], camera: snap.camera }).camera;
  } catch {
    return;
  }

  // In controlled mode the parent (usually a Yjs-backed hook) owns the
  // shape array, so ignore that half of the snapshot — otherwise a naive
  // reseed here would race the collab layer. We still honour the camera
  // because that's per-viewer state, not shared.
  if (!controlled && Array.isArray(snap.shapes) && snap.shapes.length <= CANVAS_LIMITS.maxShapes) {
    past.current = [];
    future.current = [];
    // Markup from storage is untrusted — re-sanitise on the way in.
    setLocalShapes(snap.shapes.map(sanitizeShapeForCanvas).filter((s): s is CanvasShape => s !== null));
  }
  setCamera(validatedCamera);
  selectNow(new Set());
  setEditingId(null);
}
