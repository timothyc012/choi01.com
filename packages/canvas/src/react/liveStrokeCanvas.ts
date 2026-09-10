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
 * Geometry uses the same stroke renderer as committed SVG and export.
 */
import type { CanvasShape } from './InfiniteCanvas';
import type { Camera } from './canvasPointerTypes';
import { CANVAS_LIMITS, type CanvasInkStyle } from '../core/index.ts';
import { effectiveStroke, freehandDotRadius, freehandOutlinePoints, strokeRendering } from './canvasShapeStyle';

function screenPoint(point: [number, number], camera: Camera): [number, number] {
  return [(point[0] - camera.x) * camera.z, (point[1] - camera.y) * camera.z];
}

/**
 * Append samples to a live stroke, dropping any that land on top of the
 * previous one. Raw ink only drops exact duplicates; smoothed ink retains
 * its existing screen-space threshold and interpolation.
 */
export function appendDistinctLivePoints(
  points: [number, number][],
  samples: readonly [number, number][],
  zoom: number,
  inkStyle?: CanvasInkStyle,
): void {
  if (inkStyle === 'raw') {
    let last = points[points.length - 1];
    for (const sample of samples) {
      if (points.length >= CANVAS_LIMITS.maxDrawPoints) return;
      if (last && sample[0] === last[0] && sample[1] === last[1]) continue;
      points.push(sample);
      last = sample;
    }
    return;
  }
  const safeZoom = Math.max(zoom, 0.1);
  const threshold = 0.05 / safeZoom;
  // WebKit only exposed coalesced PointerEvent samples relatively recently,
  // and embedded browsers can still hand us two positions a long way apart.
  // Keep a small screen-space gap so perfect-freehand never has to turn one
  // sparse event into a visibly pinched or angular segment.
  const maxStep = 4 / safeZoom;
  let last = points[points.length - 1];
  for (const sample of samples) {
    if (!last) {
      points.push(sample);
      last = sample;
      continue;
    }
    const dx = sample[0] - last[0];
    const dy = sample[1] - last[1];
    const distance = Math.hypot(dx, dy);
    if (distance < threshold) continue;
    const desiredSteps = Math.max(1, Math.ceil(distance / maxStep));
    // The snapshot boundary already defines the safe upper bound. Stop there
    // rather than silently widening interpolation gaps or committing a stroke
    // that the document parser would reject on the next render.
    const steps = Math.min(desiredSteps, CANVAS_LIMITS.maxDrawPoints - points.length);
    if (steps <= 0) return;
    for (let step = 1; step <= steps; step++) {
      const point: [number, number] = [
        last[0] + dx * (step / desiredSteps),
        last[1] + dy * (step / desiredSteps),
      ];
      points.push(point);
    }
    last = points[points.length - 1];
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
  const color = effectiveStroke(shape);

  context.save();
  context.globalAlpha = mode === 'highlighter' ? 0.35 : 1;
  context.fillStyle = color;

  // A tap leaves a dot; perfect-freehand returns nothing for a single point.
  if (points.length === 1 && shape.inkStyle === undefined) {
    const [x, y] = screenPoint(points[0], camera);
    context.beginPath();
    context.arc(x, y, Math.max(freehandDotRadius(strokeWidth, mode) * camera.z, 0.5), 0, Math.PI * 2);
    context.fill();
    context.restore();
    return;
  }

  if (typeof Path2D === 'function') {
    const rendering = strokeRendering(shape);
    context.scale(camera.z, camera.z);
    context.translate(-camera.x, -camera.y);
    const path = new Path2D(rendering.d);
    if (rendering.filled) context.fill(path);
    else {
      context.strokeStyle = color;
      context.lineWidth = rendering.width;
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.stroke(path);
    }
    context.restore();
    return;
  }
  if (points.length === 1 || (shape.inkStyle === 'raw' && points.every(([x, y]) => x === points[0][0] && y === points[0][1]))) {
    const [x, y] = screenPoint(points[0], camera);
    context.beginPath();
    context.arc(x, y, freehandDotRadius(strokeWidth, mode) * camera.z, 0, Math.PI * 2);
    context.fill();
    context.restore();
    return;
  }
  if (shape.inkStyle === 'raw') {
    context.beginPath();
    const [x, y] = screenPoint(points[0], camera);
    context.moveTo(x, y);
    for (let i = 1; i < points.length; i++) {
      const [nextX, nextY] = screenPoint(points[i], camera);
      context.lineTo(nextX, nextY);
    }
    context.strokeStyle = color;
    context.lineWidth = freehandDotRadius(strokeWidth, mode) * 2 * camera.z;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.stroke();
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
