import type { CanvasShape } from './InfiniteCanvas';
import type { Camera } from './canvasPointerTypes';
import { CANVAS_COLORS } from '../core/index.ts';
import { freehandOutlinePoints } from './canvasShapeStyle';

function screenPoint(point: [number, number], camera: Camera): [number, number] {
  return [(point[0] - camera.x) * camera.z, (point[1] - camera.y) * camera.z];
}

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

export function finalizeLiveStroke(shape: CanvasShape): CanvasShape {
  const points = (shape.points ?? []).map(([x, y]) => [x, y] as [number, number]);
  if (points.length === 0) return shape;
  let minX = points[0][0];
  let minY = points[0][1];
  let maxX = minX;
  let maxY = minY;
  for (const [x, y] of points.slice(1)) {
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
  const width = (shape.strokeWidth ?? 4) * camera.z;
  const alpha = shape.drawMode === 'highlighter' ? 0.35 : 1;
  const [firstX, firstY] = screenPoint(points[0], camera);
  context.save();
  context.globalAlpha = alpha;
  const color = shape.color ? CANVAS_COLORS[shape.color].border : '#2563eb';
  context.strokeStyle = color;
  context.fillStyle = color;
  if (points.length === 1) {
    context.beginPath();
    context.arc(firstX, firstY, Math.max(width / 2, 1), 0, Math.PI * 2);
    context.fill();
    context.restore();
    return;
  }
  const outline = freehandOutlinePoints(points, shape.strokeWidth ?? 4, shape.drawMode ?? 'pen');
  if (outline.length === 0) { context.restore(); return; }
  context.beginPath();
  const [outlineX, outlineY] = screenPoint([outline[0][0], outline[0][1]], camera);
  context.moveTo(outlineX, outlineY);
  for (const point of outline.slice(1)) {
    const [x, y] = screenPoint([point[0], point[1]], camera);
    context.lineTo(x, y);
  }
  context.closePath();
  context.fill();
  context.restore();
}

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
  const context = canvas.getContext('2d');
  if (!context) return;
  const dpr = Math.max(1, Math.min(2, devicePixelRatio || 1));
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  for (const stroke of pending) drawStroke(context, stroke, camera);
  if (active) drawStroke(context, active, camera);
  context.setTransform(1, 0, 0, 1, 0, 0);
}
