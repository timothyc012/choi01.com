/**
 * Imperative overlay for strokes that are not in React state yet.
 *
 * A stroke in progress is held in a ref and rasterised straight onto a 2D
 * canvas sitting over the SVG layer. Drawing therefore costs zero React
 * renders per pointer sample, which is what keeps fast handwriting from
 * falling behind the pen.
 *
 * Two kinds of stroke live here:
 *   - the ACTIVE stroke, still being drawn;
 *   - PENDING strokes, finished but not yet visible in React state. They stay
 *     painted until the committed shape appears, so there is no blink between
 *     lifting the pen and the SVG shape rendering.
 *
 * Geometry comes from the same `freehandOutlinePoints` the SVG layer uses, so
 * the handoff from overlay to committed shape is invisible.
 */
import type { CanvasShape } from './InfiniteCanvas';
import type { Camera } from './canvasPointerTypes';
import { CANVAS_COLORS } from '../core/index.ts';
import { freehandDotRadius, freehandOutlinePoints } from './canvasShapeStyle';

function screenPoint(point: [number, number], camera: Camera): [number, number] {
  return [(point[0] - camera.x) * camera.z, (point[1] - camera.y) * camera.z];
}

/**
 * Append samples to a live stroke, dropping any that land on top of the
 * previous one. The threshold is in page units so it stays a fixed visual
 * distance at every zoom level.
 */
export function appendDistinctLivePoints(
  points: [number, number][],
  samples: readonly [number, number][],
  zoom: number,
): void {
  const threshold = 0.05 / Math.max(zoom, 0.1);
  let last = points[points.length - 1];
  for (const sample of samples) {
    if (!last || Math.hypot(sample[0] - last[0], sample[1] - last[1]) >= threshold) {
      points.push(sample);
      last = sample;
    }
  }
}

/**
 * Freeze a finished stroke: copy its points and fit the bounding box around
 * every one of them, so hit-testing and marquee selection match the ink.
 */
export function finalizeLiveStroke(shape: CanvasShape): CanvasShape {
  const points = (shape.points ?? []).map(([x, y]) => [x, y] as [number, number]);
  if (points.length === 0) return shape;
  let minX = points[0][0];
  let minY = points[0][1];
  let maxX = minX;
  let maxY = minY;
  for (const [x, y] of points) {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }
  return { ...shape, points, x: minX, y: minY, w: maxX - minX, h: maxY - minY };
}

function drawStroke(
  context: CanvasRenderingContext2D,
  shape: CanvasShape,
  camera: Camera,
): void {
  if (shape.type !== 'draw') return;
  const points = shape.points ?? [];
  if (points.length === 0) return;
  const strokeWidth = shape.strokeWidth ?? 3;
  const mode = shape.drawMode ?? 'pen';
  const color = shape.color ? CANVAS_COLORS[shape.color].border : '#2563eb';

  context.save();
  context.globalAlpha = mode === 'highlighter' ? 0.35 : 1;
  context.fillStyle = color;

  // A tap leaves a dot; perfect-freehand returns nothing for a single point.
  if (points.length === 1) {
    const [x, y] = screenPoint(points[0], camera);
    context.beginPath();
    context.arc(x, y, Math.max(freehandDotRadius(strokeWidth, mode) * camera.z, 0.5), 0, Math.PI * 2);
    context.fill();
    context.restore();
    return;
  }

  const outline = freehandOutlinePoints(points, strokeWidth, mode);
  if (outline.length === 0) { context.restore(); return; }
  context.beginPath();
  const [firstX, firstY] = screenPoint([outline[0][0], outline[0][1]], camera);
  context.moveTo(firstX, firstY);
  for (let i = 1; i < outline.length; i++) {
    const [x, y] = screenPoint([outline[i][0], outline[i][1]], camera);
    context.lineTo(x, y);
  }
  context.closePath();
  context.fill();
  context.restore();
}

/** Size the backing store to the container, capped at 2× for memory. */
export function prepareLiveStrokeCanvas(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  devicePixelRatio: number,
): number {
  const dpr = Math.max(1, Math.min(2, devicePixelRatio || 1));
  const pixelWidth = Math.max(1, Math.round(width * dpr));
  const pixelHeight = Math.max(1, Math.round(height * dpr));
  if (canvas.width !== pixelWidth) canvas.width = pixelWidth;
  if (canvas.height !== pixelHeight) canvas.height = pixelHeight;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  return dpr;
}

export function paintLiveStrokes(
  canvas: HTMLCanvasElement | null,
  pending: readonly CanvasShape[],
  active: CanvasShape | null,
  camera: Camera,
  devicePixelRatio = 1,
): void {
  if (!canvas) return;
  const context = canvas.getContext?.('2d');
  if (!context) return;
  const dpr = Math.max(1, Math.min(2, devicePixelRatio || 1));
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  for (const stroke of pending) drawStroke(context, stroke, camera);
  if (active) drawStroke(context, active, camera);
  context.setTransform(1, 0, 0, 1, 0, 0);
}
