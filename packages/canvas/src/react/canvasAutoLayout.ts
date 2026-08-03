import type { CanvasShape } from './InfiniteCanvas';
import { centreOf } from './canvasGeometry';

type ShapeUpdater = CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[]);
type CommitShapes = (next: ShapeUpdater) => void;

/**
 * Runs the one-shot force-directed layout used by the imperative canvas API.
 * The caller owns history; this helper invokes commit exactly once on success.
 */
export function autoLayoutCanvas(
  all: CanvasShape[],
  commit: CommitShapes,
  onComplete: () => void,
): void {
  if (all.length < 2) return;

  // Draw shapes are freehand strokes with no meaningful "position" for
  // layout; images and frames are treated as anchors that must not drift.
  const movable = all.filter(s =>
    s.type !== 'draw' && s.type !== 'arrow' && s.type !== 'frame' && s.type !== 'image'
  );
  if (movable.length < 2) return;

  const nodes = movable.map((s, i) => ({
    id: s.id,
    i,
    x: centreOf(s).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: centreOf(s).y,
    vx: 0,
    vy: 0,
  }));
  // Jitter any nodes that share coordinates with a neighbour so the first
  // iteration produces non-zero directions.
  for (let i = 0; i < nodes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (Math.abs(nodes[i].x - nodes[j].x) < 1 && Math.abs(nodes[i].y - nodes[j].y) < 1) {
        const angle = (2 * Math.PI * i) / nodes.length;
        nodes[i].x += Math.cos(angle) * 10;
        nodes[i].y += Math.sin(angle) * 10;
        break;
      }
    }
  }
  const byId = new Map(nodes.map(n => [n.id, n]));
  const edges: Array<[typeof nodes[0], typeof nodes[0]]> = [];
  for (const s of all) {
    if (s.type !== 'arrow') continue;
    const a = s.fromId ? byId.get(s.fromId) : null;
    const b = s.toId ? byId.get(s.toId) : null;
    if (a && b) edges.push([a, b]);
  }

  // Ideal edge length scales with node count so denser graphs spread out.
  // 220 px is roughly one card's width, which reads well in practice.
  const k = 220;
  const kSq = k * k;
  const iterations = 80;
  // Cooling temperature limits per-iteration displacement so late iterations
  // fine-tune rather than throwing nodes across the canvas.
  let temp = 400;
  const cooling = temp / iterations;

  for (let iter = 0; iter < iterations; iter++) {
    // Repulsive: every pair pushes each other away by k² / distance.
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].vx = 0; nodes[i].vy = 0;
    }
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy) || 0.01;
        const force = kSq / dist;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        a.vx += fx; a.vy += fy;
        b.vx -= fx; b.vy -= fy;
      }
    }
    // Attractive: connected pairs pull together by dist² / k.
    for (const [a, b] of edges) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.hypot(dx, dy) || 0.01;
      const force = (dist * dist) / k;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      a.vx -= fx; a.vy -= fy;
      b.vx += fx; b.vy += fy;
    }
    // Apply capped displacement.
    for (const n of nodes) {
      const disp = Math.hypot(n.vx, n.vy) || 0.01;
      const cap = Math.min(disp, temp);
      n.x += (n.vx / disp) * cap;
      n.y += (n.vy / disp) * cap;
    }
    temp = Math.max(0.5, temp - cooling);
  }

  // Convert centre positions back to top-left, so the shape's own w/h
  // stays intact.
  commit(prev => prev.map(s => {
    const n = byId.get(s.id);
    if (!n) return s;
    return { ...s, x: n.x - s.w / 2, y: n.y - s.h / 2 };
  }));
  onComplete();
}
