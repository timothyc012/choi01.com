import { findCanvasShapes, nextCanvasShape } from '../core/index.ts';
import type { CanvasDocument, CanvasShape as DocumentCanvasShape, CanvasShapeId } from '../core/index.ts';
import { bounds } from './canvasGeometry';
import type { CanvasShape } from './InfiniteCanvas';
import type { Camera } from './canvasPointerTypes';

export interface ViewBounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

/** Combined bounds of the given shapes, or null when empty. */
export function shapesBounds(shapes: readonly CanvasShape[]): ViewBounds | null {
  if (shapes.length === 0) return null;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const shape of shapes) {
    const b = bounds(shape);
    minX = Math.min(minX, b.minX);
    minY = Math.min(minY, b.minY);
    maxX = Math.max(maxX, b.maxX);
    maxY = Math.max(maxY, b.maxY);
  }
  return { minX, minY, maxX, maxY };
}

/** Same fit rule as zoomToFit: pad around the bounds, zoom capped to the range. */
export function cameraFitting(b: ViewBounds, viewW: number, viewH: number, minZoom: number, maxZoom: number): Camera {
  const pad = 80;
  const z = Math.min(maxZoom, Math.max(minZoom,
    Math.min(viewW / (b.maxX - b.minX + pad * 2), viewH / (b.maxY - b.minY + pad * 2))));
  return {
    x: (b.minX + b.maxX) / 2 - viewW / 2 / z,
    y: (b.minY + b.maxY) / 2 - viewH / 2 / z,
    z,
  };
}

/** Camera that keeps the current zoom but centres the view on world point p. */
export function cameraCentering(point: { x: number; y: number }, viewW: number, viewH: number, z: number): Camera {
  return { x: point.x - viewW / 2 / z, y: point.y - viewH / 2 / z, z };
}

/** True when the bounds are fully inside the camera's viewport. */
export function boundsVisible(b: ViewBounds, camera: Camera, viewW: number, viewH: number): boolean {
  return b.minX >= camera.x && b.maxX <= camera.x + viewW / camera.z
    && b.minY >= camera.y && b.maxY <= camera.y + viewH / camera.z;
}

const asDocument = (shapes: readonly CanvasShape[]): CanvasDocument => ({
  id: 'view',
  version: 1,
  shapes: shapes as unknown as DocumentCanvasShape[],
});

/** Find results for the find bar, in document order. */
export function findShapeIds(shapes: readonly CanvasShape[], query: string): string[] {
  return findCanvasShapes(asDocument(shapes), query) as unknown as string[];
}

/** Tab/Shift+Tab target in Zero1 reading order, skipping arrows. */
export function nextShapeId(shapes: readonly CanvasShape[], currentId: string | null, direction: number): string | null {
  return nextCanvasShape(asDocument(shapes), currentId as CanvasShapeId | null, direction) as string | null;
}
