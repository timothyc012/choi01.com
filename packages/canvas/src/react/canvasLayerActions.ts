import type { CanvasShape } from './InfiniteCanvas';

export type LayerDirection = 'forward' | 'backward' | 'front' | 'back';

export function withNoteChildren(shapes: readonly CanvasShape[], ids: ReadonlySet<string>): Set<string> {
  const result = new Set(ids);
  for (const shape of shapes) if (shape.parentId && ids.has(shape.parentId)) result.add(shape.id);
  return result;
}

export function rotateShapes(
  shapes: CanvasShape[],
  ids: ReadonlySet<string>,
  deltaRadians: number,
): CanvasShape[] {
  const selected = withNoteChildren(shapes, ids);
  return shapes.map(shape => {
    if (!selected.has(shape.id)) return shape;
    if (deltaRadians === 0) return { ...shape, rotation: undefined };
    return { ...shape, rotation: (shape.rotation ?? 0) + deltaRadians };
  });
}

export function reorderShapes(shapes: CanvasShape[], ids: ReadonlySet<string>, direction: LayerDirection): CanvasShape[] {
  const selected = withNoteChildren(shapes, ids);
  const next = [...shapes];
  switch (direction) {
    case 'front': return [...shapes.filter(s => !selected.has(s.id)), ...shapes.filter(s => selected.has(s.id))];
    case 'back': return [...shapes.filter(s => selected.has(s.id)), ...shapes.filter(s => !selected.has(s.id))];
    case 'forward':
      for (let i = next.length - 2; i >= 0; i--) {
        const item = next[i]; const neighbor = next[i + 1];
        if (item && neighbor && selected.has(item.id) && !selected.has(neighbor.id)) {
          next[i] = neighbor; next[i + 1] = item;
        }
      }
      return next;
    case 'backward':
      for (let i = 1; i < next.length; i++) {
        const item = next[i]; const neighbor = next[i - 1];
        if (item && neighbor && selected.has(item.id) && !selected.has(neighbor.id)) {
          next[i] = neighbor; next[i - 1] = item;
        }
      }
      return next;
    default: { const unreachable: never = direction; throw new Error(String(unreachable)); }
  }
}
