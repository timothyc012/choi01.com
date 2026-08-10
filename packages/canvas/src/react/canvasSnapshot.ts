import type { Dispatch, RefObject, SetStateAction } from 'react';
import { CanvasValidationError, parseCanvasSnapshot } from '../core/index.ts';
import type { CanvasShape as ParsedCanvasShape } from '../core/index.ts';
import type { CanvasShape, CanvasSnapshot } from './InfiniteCanvas';

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
  let parsed: ReturnType<typeof parseCanvasSnapshot>;
  try {
    parsed = parseCanvasSnapshot(snapshot);
  } catch {
    return;
  }

  // In controlled mode the parent (usually a Yjs-backed hook) owns the
  // shape array, so ignore that half of the snapshot — otherwise a naive
  // reseed here would race the collab layer. We still honour the camera
  // because that's per-viewer state, not shared.
  if (!controlled) {
    past.current = [];
    future.current = [];
    setLocalShapes(parsed.shapes.map(toEditableCanvasShape));
  }
  setCamera(parsed.camera);
  selectNow(new Set());
  setEditingId(null);
}

function toEditableCanvasShape(shape: ParsedCanvasShape): CanvasShape {
  switch (shape.type) {
    case 'arrow':
      return {
        ...shape,
        orthogonalWaypoints: shape.orthogonalWaypoints?.map(point => ({ x: point.x, y: point.y })),
      };
    case 'draw':
      return {
        ...shape,
        points: shape.points.map(([x, y]) => {
          const point: [number, number] = [x, y];
          return point;
        }),
      };
    case 'note':
    case 'card':
    case 'text':
    case 'image':
    case 'frame':
    case 'rect':
    case 'ellipse':
    case 'triangle':
    case 'diamond':
    case 'hexagon':
    case 'star':
      return { ...shape };
    default:
      return assertNever(shape);
  }
}

function assertNever(shape: never): never {
  throw new CanvasValidationError(`Unhandled canvas shape type: ${String(shape)}.`);
}
