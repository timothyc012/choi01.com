import type { CanvasShape } from './InfiniteCanvas';
import { compactPath, orthogonalPathPoints } from './canvasRouting';
import type { BoundingBox, EdgeSide, OrthogonalPoint } from './canvasRouting';
export type { BoundingBox, EdgeSide, OrthogonalPoint } from './canvasRouting';
export { orthogonalEndAngle, orthogonalPathPoints, pathMidpoint, segmentAngle, toPath } from './canvasRouting';
export {
  effectiveFill,
  effectiveStroke,
  effectiveBorder,
  effectiveText,
  polygonPoints,
  strokePath,
  freehandOutlinePath,
  escapeHtml,
  htmlToLines,
  shapeHtml,
  safeAssetUrl,
  sanitizeShapeForCanvas,
  shapePlainText,
} from './canvasShapeStyle';
export interface SnapResult {
  dx: number;
  dy: number;
  guides: { x1: number; y1: number; x2: number; y2: number }[];
}

const ORTHOGONAL_PADDING = 12;

export function rawBounds(s: CanvasShape): BoundingBox {
  return {
    minX: Math.min(s.x, s.x + s.w),
    minY: Math.min(s.y, s.y + s.h),
    maxX: Math.max(s.x, s.x + s.w),
    maxY: Math.max(s.y, s.y + s.h),
  };
}

export function centreOf(s: CanvasShape) {
  return { x: s.x + s.w / 2, y: s.y + s.h / 2 };
}

export function bounds(s: CanvasShape): BoundingBox {
  const r = s.rotation ?? 0;
  const b = rawBounds(s);
  if (!r) return b;
  const c = centreOf(s);
  const cos = Math.cos(r);
  const sin = Math.sin(r);
  const corners = [
    [b.minX, b.minY], [b.maxX, b.minY], [b.maxX, b.maxY], [b.minX, b.maxY],
  ].map(([x, y]) => {
    const dx = x - c.x;
    const dy = y - c.y;
    return [c.x + dx * cos - dy * sin, c.y + dx * sin + dy * cos];
  });
  const xs = corners.map(p => p[0]);
  const ys = corners.map(p => p[1]);
  return { minX: Math.min(...xs), minY: Math.min(...ys), maxX: Math.max(...xs), maxY: Math.max(...ys) };
}

export function toLocal(s: CanvasShape, px: number, py: number) {
  const r = s.rotation ?? 0;
  if (!r) return { x: px, y: py };
  const c = centreOf(s);
  const cos = Math.cos(-r);
  const sin = Math.sin(-r);
  const dx = px - c.x;
  const dy = py - c.y;
  return { x: c.x + dx * cos - dy * sin, y: c.y + dx * sin + dy * cos };
}

function distanceToSegment(px: number, py: number, x1: number, y1: number, x2: number, y2: number): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lenSq = dx * dx + dy * dy;
  const t = lenSq === 0 ? 0 : Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lenSq));
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

export function hitTest(
  s: CanvasShape,
  px: number,
  py: number,
  zoom: number,
  byId?: Map<string, CanvasShape>,
  allShapes?: CanvasShape[],
): boolean {
  const slop = 8 / zoom;
  if (s.type === 'arrow') {
    const edgeThreshold = (s.strokeWidth ?? 2.5) / zoom / 2 + slop;
    const g = arrowGeometry(s, byId ?? new Map(), allShapes);
    if (g.routing === 'orthogonal' && g.pathPoints && g.pathPoints.length > 1) {
      for (let i = 1; i < g.pathPoints.length; i++) {
        const p0 = g.pathPoints[i - 1];
        const p1 = g.pathPoints[i];
        if (distanceToSegment(px, py, p0.x, p0.y, p1.x, p1.y) <= edgeThreshold) return true;
      }
      return false;
    }
    if (g.bend === 0) return distanceToSegment(px, py, g.start.x, g.start.y, g.end.x, g.end.y) <= edgeThreshold;
    let prev = g.start;
    for (let i = 1; i <= 16; i++) {
      const pt = bezierAt(i / 16, g.start, g.control, g.end);
      if (distanceToSegment(px, py, prev.x, prev.y, pt.x, pt.y) <= edgeThreshold) return true;
      prev = pt;
    }
    return false;
  }
  if (s.type === 'draw' && s.points) {
    // perfect-freehand renders a filled polygon whose width ≈ size (strokeWidth).
    // For highlighter the visual width is 2.5× strokeWidth. Account for that
    // so clicking anywhere on the visible ink registers as a hit.
    const drawMode = s.drawMode ?? 'pen';
    const visualWidth = drawMode === 'highlighter' ? (s.strokeWidth ?? 3) * 2.5 : (s.strokeWidth ?? 3);
    const edgeThreshold = visualWidth / zoom / 2 + slop;
    // Single-point dot: test as a small circle around the point.
    if (s.points.length === 1) {
      const [x, y] = s.points[0];
      return Math.hypot(px - x, py - y) <= edgeThreshold;
    }
    for (let i = 1; i < s.points.length; i++) {
      const [ax, ay] = s.points[i - 1];
      const [bx, by] = s.points[i];
      if (distanceToSegment(px, py, ax, ay, bx, by) <= edgeThreshold) return true;
    }
    return false;
  }
  const p = toLocal(s, px, py);
  const b = rawBounds(s);
  if (s.type === 'frame') {
    const onEdge = p.x >= b.minX - slop && p.x <= b.maxX + slop && p.y >= b.minY - slop && p.y <= b.maxY + slop
      && (p.x <= b.minX + slop || p.x >= b.maxX - slop || p.y <= b.minY + slop || p.y >= b.maxY - slop);
    const onTitle = p.x >= b.minX - slop && p.x <= b.maxX + slop && p.y >= b.minY - 28 / zoom && p.y <= b.minY;
    return onEdge || onTitle;
  }
  return p.x >= b.minX - slop && p.x <= b.maxX + slop && p.y >= b.minY - slop && p.y <= b.maxY + slop;
}

export function edgePoint(shape: CanvasShape, towardX: number, towardY: number): { x: number; y: number; side: EdgeSide } {
  const b = rawBounds(shape);
  const cx = (b.minX + b.maxX) / 2;
  const cy = (b.minY + b.maxY) / 2;
  const dx = towardX - cx;
  const dy = towardY - cy;
  if (dx === 0 && dy === 0) return { x: cx, y: cy, side: 'e' };
  const halfW = (b.maxX - b.minX) / 2;
  const halfH = (b.maxY - b.minY) / 2;
  const scaleH = halfW === 0 ? Infinity : Math.abs(halfW / dx);
  const scaleV = halfH === 0 ? Infinity : Math.abs(halfH / dy);
  if (scaleH <= scaleV) return { x: cx + dx * scaleH, y: cy + dy * scaleH, side: dx >= 0 ? 'e' : 'w' };
  return { x: cx + dx * scaleV, y: cy + dy * scaleV, side: dy >= 0 ? 's' : 'n' };
}

export function collectObstaclesForArrow(allShapes: CanvasShape[], arrow: CanvasShape, fromId?: string, toId?: string): BoundingBox[] {
  const skip = new Set([arrow.id, fromId, toId]);
  return allShapes.filter(shape => !skip.has(shape.id)).map(shape => {
    const b = bounds(shape);
    return { minX: b.minX - ORTHOGONAL_PADDING, minY: b.minY - ORTHOGONAL_PADDING, maxX: b.maxX + ORTHOGONAL_PADDING, maxY: b.maxY + ORTHOGONAL_PADDING };
  }).filter(b => b.maxX > b.minX && b.maxY > b.minY);
}

export function arrowGeometry(arrow: CanvasShape, byId: Map<string, CanvasShape>, allShapes: CanvasShape[] = []) {
  const from = arrow.fromId ? byId.get(arrow.fromId) : undefined;
  const to = arrow.toId ? byId.get(arrow.toId) : undefined;
  let start: OrthogonalPoint = { x: arrow.x, y: arrow.y };
  let end: OrthogonalPoint = { x: arrow.x + arrow.w, y: arrow.y + arrow.h };
  if (from && to) {
    const fc = centreOf(from), tc = centreOf(to);
    start = edgePoint(from, tc.x, tc.y);
    end = edgePoint(to, fc.x, fc.y);
  } else if (from) start = edgePoint(from, end.x, end.y);
  else if (to) end = edgePoint(to, start.x, start.y);
  const midX = (start.x + end.x) / 2, midY = (start.y + end.y) / 2;
  const bend = arrow.bend ?? 0;
  let control = { x: midX, y: midY };
  if (bend !== 0) {
    const dx = end.x - start.x, dy = end.y - start.y, len = Math.hypot(dx, dy) || 1;
    control = { x: midX + (-dy / len) * bend, y: midY + (dx / len) * bend };
  }
  const bound = !!(from || to);
  const routing: 'straight' | 'curved' | 'orthogonal' = arrow.routing ?? (bound ? 'orthogonal' : bend !== 0 ? 'curved' : 'straight');
  if (routing !== 'orthogonal') return { start, end, control, bend, routing };
  const obstacles = collectObstaclesForArrow(allShapes, arrow, from?.id, to?.id);
  return {
    start,
    end,
    control,
    bend,
    routing,
    pathPoints: compactPath(orthogonalPathPoints(start, end, obstacles, arrow.orthogonalVariant, arrow.orthogonalWaypoints)),
  };
}

export function bezierAt(t: number, s: { x: number; y: number }, c: { x: number; y: number }, e: { x: number; y: number }) {
  const mt = 1 - t;
  return { x: mt * mt * s.x + 2 * mt * t * c.x + t * t * e.x, y: mt * mt * s.y + 2 * mt * t * c.y + t * t * e.y };
}

type EraserPoint = { x: number; y: number };
type ParameterInterval = { start: number; end: number };

function intersectIntervals(a: ParameterInterval | null, b: ParameterInterval | null): ParameterInterval | null {
  if (!a || !b) return null;
  const start = Math.max(a.start, b.start);
  const end = Math.min(a.end, b.end);
  return start <= end ? { start, end } : null;
}

function linearRangeInterval(origin: number, delta: number, min: number, max: number): ParameterInterval | null {
  if (Math.abs(delta) < 1e-12) return origin >= min && origin <= max ? { start: 0, end: 1 } : null;
  const first = (min - origin) / delta;
  const second = (max - origin) / delta;
  return intersectIntervals(
    { start: Math.min(first, second), end: Math.max(first, second) },
    { start: 0, end: 1 },
  );
}

function circleIntersectionInterval(
  start: readonly [number, number],
  end: readonly [number, number],
  centre: EraserPoint,
  radius: number,
): ParameterInterval | null {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  const offsetX = start[0] - centre.x;
  const offsetY = start[1] - centre.y;
  const a = dx * dx + dy * dy;
  if (a < 1e-12) {
    return offsetX * offsetX + offsetY * offsetY <= radius * radius ? { start: 0, end: 1 } : null;
  }
  const b = 2 * (offsetX * dx + offsetY * dy);
  const c = offsetX * offsetX + offsetY * offsetY - radius * radius;
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return null;
  const root = Math.sqrt(discriminant);
  return intersectIntervals(
    { start: (-b - root) / (2 * a), end: (-b + root) / (2 * a) },
    { start: 0, end: 1 },
  );
}

/** Parameter interval where a stroke segment lies inside a swept eraser capsule. */
function capsuleIntersectionInterval(
  start: readonly [number, number],
  end: readonly [number, number],
  from: EraserPoint,
  to: EraserPoint,
  radius: number,
): ParameterInterval | null {
  const sweepX = to.x - from.x;
  const sweepY = to.y - from.y;
  const sweepLength = Math.hypot(sweepX, sweepY);
  if (sweepLength < 1e-12) return circleIntersectionInterval(start, end, from, radius);

  const unitX = sweepX / sweepLength;
  const unitY = sweepY / sweepLength;
  const segmentX = end[0] - start[0];
  const segmentY = end[1] - start[1];
  const offsetX = start[0] - from.x;
  const offsetY = start[1] - from.y;
  const alongOrigin = offsetX * unitX + offsetY * unitY;
  const alongDelta = segmentX * unitX + segmentY * unitY;
  const normalOrigin = offsetX * -unitY + offsetY * unitX;
  const normalDelta = segmentX * -unitY + segmentY * unitX;
  const strip = intersectIntervals(
    linearRangeInterval(alongOrigin, alongDelta, 0, sweepLength),
    linearRangeInterval(normalOrigin, normalDelta, -radius, radius),
  );
  const intervals = [
    strip,
    circleIntersectionInterval(start, end, from, radius),
    circleIntersectionInterval(start, end, to, radius),
  ].filter((interval): interval is ParameterInterval => interval !== null);
  if (intervals.length === 0) return null;
  // A capsule is convex, so its intersection with a line segment is one
  // continuous interval. Taking the extrema also absorbs floating-point seams
  // where the central strip meets an end cap.
  return {
    start: Math.min(...intervals.map(interval => interval.start)),
    end: Math.max(...intervals.map(interval => interval.end)),
  };
}

function pointOnSegment(start: readonly [number, number], end: readonly [number, number], t: number): [number, number] {
  return [start[0] + (end[0] - start[0]) * t, start[1] + (end[1] - start[1]) * t];
}

function appendPoint(points: [number, number][], point: readonly [number, number]): void {
  const previous = points[points.length - 1];
  if (!previous || Math.hypot(point[0] - previous[0], point[1] - previous[1]) > 1e-9) {
    points.push([point[0], point[1]]);
  }
}

function strokeRunShape(shape: CanvasShape, id: string, points: [number, number][]): CanvasShape {
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
  return { ...shape, id, points, x: minX, y: minY, w: maxX - minX, h: maxY - minY };
}

function nextEraserFragmentId(sourceId: string, usedIds: Set<string>): string {
  const base = sourceId.slice(0, 480);
  let sequence = 1;
  let candidate = `${base}-e${sequence}`;
  while (usedIds.has(candidate)) candidate = `${base}-e${++sequence}`;
  usedIds.add(candidate);
  return candidate;
}

function orientation(a: EraserPoint, b: EraserPoint, c: EraserPoint): number {
  return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
}

function pointOnLineSegment(point: EraserPoint, start: EraserPoint, end: EraserPoint): boolean {
  return Math.abs(orientation(start, end, point)) <= 1e-9
    && point.x >= Math.min(start.x, end.x) - 1e-9 && point.x <= Math.max(start.x, end.x) + 1e-9
    && point.y >= Math.min(start.y, end.y) - 1e-9 && point.y <= Math.max(start.y, end.y) + 1e-9;
}

function segmentsIntersect(a: EraserPoint, b: EraserPoint, c: EraserPoint, d: EraserPoint): boolean {
  const abC = orientation(a, b, c);
  const abD = orientation(a, b, d);
  const cdA = orientation(c, d, a);
  const cdB = orientation(c, d, b);
  if (((abC > 0 && abD < 0) || (abC < 0 && abD > 0))
    && ((cdA > 0 && cdB < 0) || (cdA < 0 && cdB > 0))) return true;
  return (Math.abs(abC) <= 1e-9 && pointOnLineSegment(c, a, b))
    || (Math.abs(abD) <= 1e-9 && pointOnLineSegment(d, a, b))
    || (Math.abs(cdA) <= 1e-9 && pointOnLineSegment(a, c, d))
    || (Math.abs(cdB) <= 1e-9 && pointOnLineSegment(b, c, d));
}

function distanceBetweenSegments(a: EraserPoint, b: EraserPoint, c: EraserPoint, d: EraserPoint): number {
  if (segmentsIntersect(a, b, c, d)) return 0;
  return Math.min(
    distanceToSegment(a.x, a.y, c.x, c.y, d.x, d.y),
    distanceToSegment(b.x, b.y, c.x, c.y, d.x, d.y),
    distanceToSegment(c.x, c.y, a.x, a.y, b.x, b.y),
    distanceToSegment(d.x, d.y, a.x, a.y, b.x, b.y),
  );
}

function segmentIntersectsBox(from: EraserPoint, to: EraserPoint, box: BoundingBox, padding: number): boolean {
  const xInterval = linearRangeInterval(from.x, to.x - from.x, box.minX - padding, box.maxX + padding);
  const yInterval = linearRangeInterval(from.y, to.y - from.y, box.minY - padding, box.maxY + padding);
  return intersectIntervals(xInterval, yInterval) !== null;
}

function pathHitsShape(
  shape: CanvasShape,
  from: EraserPoint,
  to: EraserPoint,
  radius: number,
  zoom: number,
  byId: Map<string, CanvasShape>,
  allShapes: CanvasShape[],
): boolean {
  const slop = 8 / zoom;
  if (shape.type === 'arrow') {
    const threshold = radius + (shape.strokeWidth ?? 2.5) / zoom / 2 + slop;
    const geometry = arrowGeometry(shape, byId, allShapes);
    const segments: [EraserPoint, EraserPoint][] = [];
    if (geometry.routing === 'orthogonal' && geometry.pathPoints && geometry.pathPoints.length > 1) {
      for (let index = 1; index < geometry.pathPoints.length; index++) {
        segments.push([geometry.pathPoints[index - 1], geometry.pathPoints[index]]);
      }
    } else if (geometry.bend === 0) {
      segments.push([geometry.start, geometry.end]);
    } else {
      let previous = geometry.start;
      for (let step = 1; step <= 16; step++) {
        const point = bezierAt(step / 16, geometry.start, geometry.control, geometry.end);
        segments.push([previous, point]);
        previous = point;
      }
    }
    return segments.some(([start, end]) => distanceBetweenSegments(from, to, start, end) <= threshold);
  }

  const localFrom = toLocal(shape, from.x, from.y);
  const localTo = toLocal(shape, to.x, to.y);
  const box = rawBounds(shape);
  if (shape.type !== 'frame') return segmentIntersectsBox(localFrom, localTo, box, radius + slop);

  const threshold = radius + slop;
  const corners = [
    { x: box.minX, y: box.minY }, { x: box.maxX, y: box.minY },
    { x: box.maxX, y: box.maxY }, { x: box.minX, y: box.maxY },
  ];
  for (let index = 0; index < corners.length; index++) {
    if (distanceBetweenSegments(localFrom, localTo, corners[index], corners[(index + 1) % corners.length]) <= threshold) return true;
  }
  const title = { minX: box.minX, minY: box.minY - 28 / zoom, maxX: box.maxX, maxY: box.minY };
  return segmentIntersectsBox(localFrom, localTo, title, radius);
}

/**
 * Rub ink out along a swept circular eraser path.
 *
 * `radius` is expressed in screen pixels. Draw strokes are split into the
 * untouched runs; object shapes retain the existing whole-object behaviour.
 */
export function eraseAlongPath(
  shapes: CanvasShape[],
  from: EraserPoint,
  to: EraserPoint,
  radius: number,
  zoom: number,
): CanvasShape[] {
  const out: CanvasShape[] = [];
  const safeZoom = Math.max(zoom, 0.1);
  const pageRadius = radius / safeZoom;
  const usedIds = new Set(shapes.map(shape => shape.id));
  const byId = new Map(shapes.map(shape => [shape.id, shape]));

  for (const s of shapes) {
    if (s.type !== 'draw' || !s.points) {
      if (pathHitsShape(s, from, to, pageRadius, safeZoom, byId, shapes)) continue;
      out.push(s);
      continue;
    }

    const drawMode = s.drawMode ?? 'pen';
    const visualWidth = drawMode === 'highlighter' ? (s.strokeWidth ?? 3) * 2.5 : (s.strokeWidth ?? 3);
    const effectiveRadius = pageRadius + visualWidth / 2;
    const shapeBounds = rawBounds(s);
    if (!segmentIntersectsBox(from, to, shapeBounds, effectiveRadius)) {
      out.push(s);
      continue;
    }

    if (s.points.length === 0) {
      out.push(s);
      continue;
    }
    if (s.points.length === 1) {
      const [x, y] = s.points[0];
      if (distanceToSegment(x, y, from.x, from.y, to.x, to.y) > effectiveRadius) out.push(s);
      continue;
    }

    const runs: [number, number][][] = [];
    let run: [number, number][] = [];
    let erased = false;
    const flushRun = () => {
      if (run.length > 1) runs.push(run);
      run = [];
    };
    for (let index = 1; index < s.points.length; index++) {
      const start = s.points[index - 1];
      const end = s.points[index];
      const interval = capsuleIntersectionInterval(start, end, from, to, effectiveRadius);
      if (!interval) {
        if (run.length === 0) appendPoint(run, start);
        appendPoint(run, end);
        continue;
      }

      erased = true;
      if (interval.start > 1e-9) {
        if (run.length === 0) appendPoint(run, start);
        appendPoint(run, pointOnSegment(start, end, interval.start));
      }
      flushRun();
      if (interval.end < 1 - 1e-9) {
        appendPoint(run, pointOnSegment(start, end, interval.end));
        appendPoint(run, end);
      }
    }
    flushRun();
    if (!erased) {
      out.push(s);
      continue;
    }
    runs.forEach((points, index) => {
      const id = index === 0 ? s.id : nextEraserFragmentId(s.id, usedIds);
      out.push(strokeRunShape(s, id, points));
    });
  }
  return out;
}

export function eraseAt(shapes: CanvasShape[], px: number, py: number, radius: number, zoom: number): CanvasShape[] {
  return eraseAlongPath(shapes, { x: px, y: py }, { x: px, y: py }, radius, zoom);
}

export function computeSnap(movingBox: BoundingBox, others: CanvasShape[], zoom: number): SnapResult {
  const threshold = 6 / zoom;
  let bestX: { delta: number; at: number } | null = null;
  let bestY: { delta: number; at: number } | null = null;
  const guides: SnapResult['guides'] = [];
  const movingX = [movingBox.minX, (movingBox.minX + movingBox.maxX) / 2, movingBox.maxX];
  const movingY = [movingBox.minY, (movingBox.minY + movingBox.maxY) / 2, movingBox.maxY];
  for (const other of others) {
    const b = bounds(other);
    const targetX = [b.minX, (b.minX + b.maxX) / 2, b.maxX];
    const targetY = [b.minY, (b.minY + b.maxY) / 2, b.maxY];
    for (const x of movingX) for (const tx of targetX) {
      const delta = tx - x;
      if (Math.abs(delta) <= threshold && (!bestX || Math.abs(delta) < Math.abs(bestX.delta))) bestX = { delta, at: tx };
    }
    for (const y of movingY) for (const ty of targetY) {
      const delta = ty - y;
      if (Math.abs(delta) <= threshold && (!bestY || Math.abs(delta) < Math.abs(bestY.delta))) bestY = { delta, at: ty };
    }
  }
  if (bestX) { guides.push({ x1: bestX.at, y1: movingBox.minY - 1000, x2: bestX.at, y2: movingBox.maxY + 1000 }); }
  if (bestY) { guides.push({ x1: movingBox.minX - 1000, y1: bestY.at, x2: movingBox.maxX + 1000, y2: bestY.at }); }
  return { dx: bestX?.delta ?? 0, dy: bestY?.delta ?? 0, guides };
}
