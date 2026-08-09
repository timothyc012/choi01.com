import type { OrthogonalVariant } from '../core/model.ts';

export type EdgeSide = 'n' | 's' | 'e' | 'w';
export type OrthogonalPoint = { x: number; y: number; side?: EdgeSide };
export type BoundingBox = { minX: number; minY: number; maxX: number; maxY: number };

const ORTHOGONAL_PADDING = 12;

export function toPath(points: OrthogonalPoint[]) {
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
}

function onSegment(p: OrthogonalPoint, q: OrthogonalPoint, r: OrthogonalPoint) {
  if (Math.min(p.x, r.x) > q.x || q.x > Math.max(p.x, r.x)) return false;
  if (Math.min(p.y, r.y) > q.y || q.y > Math.max(p.y, r.y)) return false;
  return true;
}

function orient(a: OrthogonalPoint, b: OrthogonalPoint, c: OrthogonalPoint) {
  return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y);
}

function segmentCrosses(a1: OrthogonalPoint, a2: OrthogonalPoint, b1: OrthogonalPoint, b2: OrthogonalPoint) {
  const eps = 1e-6;
  const o1 = orient(a1, a2, b1);
  const o2 = orient(a1, a2, b2);
  const o3 = orient(b1, b2, a1);
  const o4 = orient(b1, b2, a2);
  if (Math.abs(o1) < eps && onSegment(a1, b1, a2)) return true;
  if (Math.abs(o2) < eps && onSegment(a1, b2, a2)) return true;
  if (Math.abs(o3) < eps && onSegment(b1, a1, b2)) return true;
  if (Math.abs(o4) < eps && onSegment(b1, a2, b2)) return true;
  return (o1 > 0) !== (o2 > 0) && (o3 > 0) !== (o4 > 0);
}

function segmentIntersectsRect(a: OrthogonalPoint, b: OrthogonalPoint, r: BoundingBox): boolean {
  const minX = Math.min(a.x, b.x);
  const maxX = Math.max(a.x, b.x);
  const minY = Math.min(a.y, b.y);
  const maxY = Math.max(a.y, b.y);
  if (maxX < r.minX || minX > r.maxX || maxY < r.minY || minY > r.maxY) return false;
  if (a.x >= r.minX && a.x <= r.maxX && a.y >= r.minY && a.y <= r.maxY) return true;
  if (b.x >= r.minX && b.x <= r.maxX && b.y >= r.minY && b.y <= r.maxY) return true;
  const p1 = { x: r.minX, y: r.minY };
  const p2 = { x: r.maxX, y: r.minY };
  const p3 = { x: r.maxX, y: r.maxY };
  const p4 = { x: r.minX, y: r.maxY };
  return segmentCrosses(a, b, p1, p2) || segmentCrosses(a, b, p2, p3)
    || segmentCrosses(a, b, p3, p4) || segmentCrosses(a, b, p4, p1);
}

function pathIntersectsObstacles(points: OrthogonalPoint[], obstacles: BoundingBox[]) {
  for (let i = 1; i < points.length; i++) {
    for (const obstacle of obstacles) {
      if (segmentIntersectsRect(points[i - 1], points[i], obstacle)) return true;
    }
  }
  return false;
}

function pathLength(points: OrthogonalPoint[]) {
  let total = 0;
  for (let i = 1; i < points.length; i++) total += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
  return total;
}

export function pathMidpoint(points: OrthogonalPoint[]) {
  if (points.length === 0) return { x: 0, y: 0 };
  if (points.length === 1) return { x: points[0].x, y: points[0].y };
  const total = pathLength(points);
  if (total === 0) return points[0];
  const target = total / 2;
  let acc = 0;
  for (let i = 1; i < points.length; i++) {
    const len = Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
    if (acc + len >= target) {
      const t = (target - acc) / len;
      return { x: points[i - 1].x + (points[i].x - points[i - 1].x) * t, y: points[i - 1].y + (points[i].y - points[i - 1].y) * t };
    }
    acc += len;
  }
  const last = points[points.length - 1];
  return { x: last.x, y: last.y };
}

export function segmentAngle(a: OrthogonalPoint, b: OrthogonalPoint) {
  return Math.atan2(b.y - a.y, b.x - a.x);
}

function candidateDetourCoordinates(start: number, end: number, obstacles: BoundingBox[], axis: 'x' | 'y') {
  const result = new Set<number>([start, end]);
  const min = Math.min(start, end);
  const max = Math.max(start, end);
  const radius = ORTHOGONAL_PADDING * 1.2;
  for (const o of obstacles) {
    const low = (axis === 'x' ? o.minX : o.minY) - radius;
    const high = (axis === 'x' ? o.maxX : o.maxY) + radius;
    const inRange = (v: number) => v >= min - radius * 4 && v <= max + radius * 4;
    if (inRange(low)) result.add(low);
    if (inRange(high)) result.add(high);
  }
  return [...result].sort((a, b) => Math.abs(a - start) - Math.abs(b - start));
}

export function compactPath(points: OrthogonalPoint[]) {
  const out: OrthogonalPoint[] = [];
  for (const p of points) {
    const prev = out[out.length - 1];
    if (!prev || prev.x !== p.x || prev.y !== p.y) out.push(p);
  }
  return out;
}

function compactOrthogonalPath(points: OrthogonalPoint[]) {
  const out: OrthogonalPoint[] = [];
  for (const point of points) {
    const previous = out[out.length - 1];
    if (previous && previous.x === point.x && previous.y === point.y) continue;
    const beforePrevious = out[out.length - 2];
    if (beforePrevious && previous
      && ((beforePrevious.x === previous.x && previous.x === point.x)
        || (beforePrevious.y === previous.y && previous.y === point.y))) {
      out[out.length - 1] = point;
      continue;
    }
    out.push(point);
  }
  return out;
}

function pathThroughWaypoints(start: OrthogonalPoint, end: OrthogonalPoint, waypoints: readonly OrthogonalPoint[]) {
  const route: OrthogonalPoint[] = [start];
  for (const point of [...waypoints, end]) {
    const previous = route[route.length - 1];
    if (!previous) {
      route.push(point);
      continue;
    }
    if (previous.x === point.x || previous.y === point.y) {
      route.push(point);
      continue;
    }
    route.push({ x: point.x, y: previous.y }, point);
  }
  return compactOrthogonalPath(route);
}

export function moveOrthogonalSegment(points: readonly OrthogonalPoint[], segmentIndex: number, coordinate: number) {
  const start = points[segmentIndex];
  const end = points[segmentIndex + 1];
  if (!start || !end || !Number.isFinite(coordinate) || (start.x !== end.x && start.y !== end.y)) return [...points];
  const replacement = start.x === end.x
    ? [start, { x: coordinate, y: start.y }, { x: coordinate, y: end.y }, end]
    : [start, { x: start.x, y: coordinate }, { x: end.x, y: coordinate }, end];
  return compactOrthogonalPath([
    ...points.slice(0, segmentIndex),
    ...replacement,
    ...points.slice(segmentIndex + 2),
  ]);
}

function selectShortestPath(paths: OrthogonalPoint[][], obstacles: BoundingBox[]) {
  const safe: OrthogonalPoint[][] = [];
  const blocked: OrthogonalPoint[][] = [];
  for (const p of paths) {
    const simplified = compactPath(p);
    if (simplified.length < 2) continue;
    if (pathIntersectsObstacles(simplified, obstacles)) blocked.push(simplified);
    else safe.push(simplified);
  }
  const options = safe.length > 0 ? safe : blocked;
  if (options.length === 0) return [];
  return options.reduce((best, cur) => (pathLength(cur) < pathLength(best) ? cur : best));
}

function firstAxis(path: OrthogonalPoint[]): 'x' | 'y' | undefined {
  for (let i = 1; i < path.length; i++) {
    if (path[i - 1].x !== path[i].x) return 'x';
    if (path[i - 1].y !== path[i].y) return 'y';
  }
  return undefined;
}

function outsideCoordinate(start: number, end: number, side: EdgeSide | undefined, axis: 'x' | 'y') {
  const min = Math.min(start, end);
  const max = Math.max(start, end);
  const distance = Math.max(48, Math.abs(end - start) * 0.35, ORTHOGONAL_PADDING * 4);
  if (axis === 'x') {
    if (side === 'e') return max + distance;
    if (side === 'w') return min - distance;
  } else {
    if (side === 's') return max + distance;
    if (side === 'n') return min - distance;
  }
  return start <= end ? min - distance : max + distance;
}

function variantPath(start: OrthogonalPoint, end: OrthogonalPoint, variant: OrthogonalVariant, horizontalFirst: boolean, horizontalLast: boolean) {
  const midX = (start.x + end.x) / 2;
  const midY = (start.y + end.y) / 2;
  if (variant === 'u') {
    if (horizontalFirst) {
      const detourX = outsideCoordinate(start.x, end.x, start.side, 'x');
      return [start, { x: detourX, y: start.y }, { x: detourX, y: end.y }, end];
    }
    const detourY = outsideCoordinate(start.y, end.y, start.side, 'y');
    return [start, { x: start.x, y: detourY }, { x: end.x, y: detourY }, end];
  }
  if (variant === 'zigzag') {
    if (horizontalFirst) {
      const detourX = outsideCoordinate(start.x, end.x, start.side, 'x');
      const detourY = outsideCoordinate(start.y, end.y, start.side, 'y');
      if (horizontalLast) {
        return [start, { x: detourX, y: start.y }, { x: detourX, y: detourY }, { x: midX, y: detourY }, { x: midX, y: end.y }, end];
      }
      return [start, { x: detourX, y: start.y }, { x: detourX, y: detourY }, { x: end.x, y: detourY }, end];
    }
    const detourY = outsideCoordinate(start.y, end.y, start.side, 'y');
    const detourX = outsideCoordinate(start.x, end.x, start.side, 'x');
    if (!horizontalLast) {
      return [start, { x: start.x, y: detourY }, { x: detourX, y: detourY }, { x: detourX, y: midY }, { x: end.x, y: midY }, end];
    }
    return [start, { x: start.x, y: detourY }, { x: detourX, y: detourY }, { x: detourX, y: end.y }, end];
  }
  return [];
}

export function orthogonalPathPoints(
  start: OrthogonalPoint,
  end: OrthogonalPoint,
  obstacles: BoundingBox[] = [],
  variant: OrthogonalVariant = 'elbow',
  waypoints: readonly OrthogonalPoint[] = [],
) {
  if (waypoints.length > 0) return pathThroughWaypoints(start, end, waypoints);
  const sideAt = start.side ?? (Math.abs(end.x - start.x) >= Math.abs(end.y - start.y) ? 'e' : 's');
  const endSide = end.side ?? (sideAt === 'e' || sideAt === 'w' ? 'w' : 'n');
  const horizFirst = sideAt === 'e' || sideAt === 'w';
  const horizLast = endSide === 'e' || endSide === 'w';
  const candidateXs = candidateDetourCoordinates(start.x, end.x, obstacles, 'x');
  const candidateYs = candidateDetourCoordinates(start.y, end.y, obstacles, 'y');
  const paths: OrthogonalPoint[][] = [];
  if (horizFirst && horizLast) {
    for (const x of candidateXs) paths.push([start, { x, y: start.y }, { x, y: end.y }, end]);
    for (const y of candidateYs) paths.push([start, { x: start.x, y }, { x: end.x, y }, end]);
  } else if (!horizFirst && !horizLast) {
    for (const y of candidateYs) paths.push([start, { x: start.x, y }, { x: end.x, y }, end]);
    for (const x of candidateXs) paths.push([start, { x, y: start.y }, { x, y: end.y }, end]);
  } else if (horizFirst) {
    paths.push([start, { x: end.x, y: start.y }, end]);
    for (const y of candidateYs) {
      paths.push([start, { x: start.x, y }, { x: end.x, y }, end]);
      paths.push([start, { x: start.x, y }, end]);
    }
    for (const x of candidateXs) paths.push([start, { x, y: start.y }, { x, y: end.y }, end]);
  } else {
    paths.push([start, { x: start.x, y: end.y }, end]);
    for (const y of candidateYs) {
      paths.push([start, { x: start.x, y }, end]);
      paths.push([start, { x: start.x, y }, { x: end.x, y }, end]);
    }
    for (const x of candidateXs) paths.push([start, { x, y: start.y }, { x, y: end.y }, end]);
  }
  const elbow = selectShortestPath(paths, obstacles);
  if (variant === 'elbow') return elbow;
  if (variant === 'reverse') {
    const preferredAxis = firstAxis(elbow);
    const alternate = selectShortestPath(paths.filter(path => firstAxis(path) !== preferredAxis), obstacles);
    return alternate.length > 1 ? alternate : elbow;
  }
  const shaped = variantPath(start, end, variant, horizFirst, horizLast);
  const selected = selectShortestPath([shaped], obstacles);
  return selected.length > 1 ? selected : elbow;
}

export function orthogonalEndAngle(pathPoints: OrthogonalPoint[]) {
  if (pathPoints.length < 2) return 0;
  return segmentAngle(pathPoints[pathPoints.length - 2], pathPoints[pathPoints.length - 1]);
}
