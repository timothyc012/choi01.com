import { useLayoutEffect, useRef, useState } from 'react';
import type { CanvasShape } from './InfiniteCanvas';
import { bounds, arrowGeometry } from './canvasGeometry';
import { pathMidpoint } from './canvasRouting';
export function useInspectorPosition(s: CanvasShape, selection: readonly CanvasShape[], shapes: CanvasShape[], camera: {x:number;y:number;z:number}, canvasSize:{width:number;height:number}) {
  // The inspector wraps on narrow canvases and when the list/arrow controls
  // are visible. Measure the rendered panel instead of using a desktop-only
  // height estimate; stale geometry was allowing the panel to overlap the
  // selected object after a mobile resize.
  const inspectorRef = useRef<HTMLDivElement>(null);
  const [inspectorSize, setInspectorSize] = useState({ width: 380, height: 260 });
  useLayoutEffect(() => {
    const panel = inspectorRef.current;
    if (!panel) return;
    const update = () => {
      const width = Math.max(1, Math.ceil(panel.getBoundingClientRect().width));
      const height = Math.max(1, Math.ceil(panel.getBoundingClientRect().height));
      setInspectorSize(previous => previous.width === width && previous.height === height
        ? previous
        : { width, height });
    };
    update();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(update);
    observer.observe(panel);
    return () => observer.disconnect();
  }, [s, shapes, selection]);
  const toolbarWidth = inspectorSize.width;
  const toolbarHeight = inspectorSize.height;
  const selected = selection.reduce((box, shape) => {
    const b = bounds(shape);
    return {
      minX: Math.min(box.minX, b.minX),
      minY: Math.min(box.minY, b.minY),
      maxX: Math.max(box.maxX, b.maxX),
      maxY: Math.max(box.maxY, b.maxY),
    };
  }, bounds(s));
  const left = (selected.minX - camera.x) * camera.z;
  const top = (selected.minY - camera.y) * camera.z;
  const right = (selected.maxX - camera.x) * camera.z;
  const bottom = (selected.maxY - camera.y) * camera.z;
  const maxLeft = Math.max(8, canvasSize.width - toolbarWidth - 8);
  const maxTop = Math.max(8, canvasSize.height - toolbarHeight - 8);
  const fit = (x: number, y: number) => ({ left: Math.min(Math.max(8, x), maxLeft), top: Math.min(Math.max(8, y), maxTop) });
  const candidates = [
    fit((left + right) / 2 - toolbarWidth / 2, top - toolbarHeight - 12),
    fit((left + right) / 2 - toolbarWidth / 2, bottom + 12),
    fit((canvasSize.width - toolbarWidth) / 2, 12),
    fit(left - toolbarWidth - 12, top + (bottom - top - toolbarHeight) / 2),
    fit(right + 12, top + (bottom - top - toolbarHeight) / 2),
  ];
  const occupied = shapes.map(candidate => {
    const box = bounds(candidate);
    return { left: (box.minX - camera.x) * camera.z, top: (box.minY - camera.y) * camera.z, right: (box.maxX - camera.x) * camera.z, bottom: (box.maxY - camera.y) * camera.z };
  });
  if (s.type === 'arrow') {
    const geometry = arrowGeometry(s, new Map(shapes.map(candidate => [candidate.id, candidate])), shapes);
    const labelPoint = geometry.routing === 'orthogonal' && geometry.pathPoints
      ? pathMidpoint(geometry.pathPoints)
      : { x: (geometry.start.x + geometry.end.x) / 2, y: (geometry.start.y + geometry.end.y) / 2 };
    const labelWidth = 180 * camera.z;
    const labelHeight = 36 * camera.z;
    occupied.push({
      left: (labelPoint.x - camera.x) * camera.z - labelWidth / 2,
      top: (labelPoint.y - camera.y) * camera.z - labelHeight / 2,
      right: (labelPoint.x - camera.x) * camera.z + labelWidth / 2,
      bottom: (labelPoint.y - camera.y) * camera.z + labelHeight / 2,
    });
  }
  const preferred = candidates[0];
  const overlapArea = (candidate: typeof preferred, box: (typeof occupied)[number]) => {
    const width = Math.max(0, Math.min(candidate.left + toolbarWidth, box.right) - Math.max(candidate.left, box.left));
    const height = Math.max(0, Math.min(candidate.top + toolbarHeight, box.bottom) - Math.max(candidate.top, box.top));
    return width * height;
  };
  const position = candidates
    .map(candidate => ({
      candidate,
      overlap: occupied.reduce((total, box) => total + overlapArea(candidate, box), 0),
      distance: Math.hypot(candidate.left - preferred.left, candidate.top - preferred.top),
    }))
    .sort((a, b) => a.overlap - b.overlap || a.distance - b.distance)[0]?.candidate ?? preferred;

return { inspectorRef, position };
}
