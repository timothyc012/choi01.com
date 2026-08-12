import type { CanvasShape } from './InfiniteCanvas';
import { compactPath, orthogonalPathPoints } from './canvasRouting';
import type { BoundingBox, EdgeSide, OrthogonalPoint } from './canvasRouting';
export type { BoundingBox, EdgeSide, OrthogonalPoint } from './canvasRouting';
export { orthogonalEndAngle, orthogonalPathPoints, pathMidpoint, segmentAngle, toPath } from './canvasRouting';
export {
  effectiveFill,
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
    const edgeThreshold = (s.strokeWidth ?? 3) / zoom / 2 + slop;
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

export function eraseAt(shapes: CanvasShape[], px: number, py: number, radius: number, zoom: number): CanvasShape[] {
  const out: CanvasShape[] = [];
  let seq = 0;
  for (const s of shapes) {
    if (s.type !== 'draw' || !s.points) {
      if (hitTest(s, px, py, zoom)) continue;
      out.push(s);
      continue;
    }
    const runs: [number, number][][] = [];
    let run: [number, number][] = [];
    for (const [x, y] of s.points) {
      if (Math.hypot(x - px, y - py) <= radius / zoom) {
        if (run.length > 1) runs.push(run);
        run = [];
      } else run.push([x, y]);
    }
    if (run.length > 1) runs.push(run);
    if (runs.length === 0) continue;
    const b = rawBounds(s);
    runs.forEach(points => out.push({ ...s, id: `${s.id}-e${seq++}`, points, x: b.minX, y: b.minY, w: b.maxX - b.minX, h: b.maxY - b.minY }));
  }
  return out;
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
