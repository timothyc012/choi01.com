import React, { useRef } from 'react';
import { minimapLayout } from '../core/index.ts';
import { CANVAS_COLORS } from '../core/index.ts';
import { bounds } from './canvasGeometry';
import type { CanvasShape } from './InfiniteCanvas';
import type { Camera } from './canvasPointerTypes';
import { CANVAS_UI_COLORS } from './theme';

const MINIMAP_SIZE = { width: 180, height: 120 };

interface CanvasMinimapProps {
  shapes: CanvasShape[];
  camera: Camera;
  isDarkMode: boolean;
  /** Centres the camera on a canvas point. */
  onCenter: (point: { x: number; y: number }) => void;
  /** Canvas viewport size in screen px (the parent container's box). */
  viewSize: { width: number; height: number };
}

/** 180×120 overview in the bottom-right corner; click/drag re-centres the view. */
export function CanvasMinimap({ shapes, camera, isDarkMode, viewSize, onCenter }: CanvasMinimapProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const rectOf = (shape: CanvasShape) => {
    const b = bounds(shape);
    return { x: b.minX, y: b.minY, width: b.maxX - b.minX, height: b.maxY - b.minY };
  };
  const content = shapes.length > 0
    ? shapes.map(rectOf).reduce((a, b) => ({
        x: Math.min(a.x, b.x),
        y: Math.min(a.y, b.y),
        width: Math.max(a.x + a.width, b.x + b.width) - Math.min(a.x, b.x),
        height: Math.max(a.y + a.height, b.y + b.height) - Math.min(a.y, b.y),
      }))
    : { x: 0, y: 0, width: 0, height: 0 };
  const visible = {
    x: camera.x,
    y: camera.y,
    width: viewSize.width / camera.z,
    height: viewSize.height / camera.z,
  };
  const layout = minimapLayout(content, visible, MINIMAP_SIZE);

  const worldPoint = (event: React.PointerEvent) => {
    const element = elementRef.current;
    if (!element) return null;
    const rect = element.getBoundingClientRect();
    // The harness layout reports a constant 1280×800 box; in a real browser the
    // minimap's own box is 180×120, so scale by the element's size ratio.
    const sx = rect.width > 0 ? MINIMAP_SIZE.width / rect.width : 1;
    const sy = rect.height > 0 ? MINIMAP_SIZE.height / rect.height : 1;
    return layout.toWorld({
      x: (event.clientX - rect.left) * sx,
      y: (event.clientY - rect.top) * sy,
    });
  };

  const onPointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
    event.preventDefault();
    dragging.current = true;
    try { (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId); } catch { /* capture optional */ }
    const point = worldPoint(event);
    if (point) onCenter(point);
  };
  const onPointerMove = (event: React.PointerEvent) => {
    if (!dragging.current) return;
    event.stopPropagation();
    const point = worldPoint(event);
    if (point) onCenter(point);
  };
  const onPointerUp = (event: React.PointerEvent) => {
    event.stopPropagation();
    dragging.current = false;
  };

  const viewRect = layout.toMinimap(visible);
  const panel = isDarkMode ? 'bg-slate-900/90 border-slate-700' : 'bg-white/90 border-slate-300';

  return (
    <div
      ref={elementRef}
      data-canvas-minimap="true"
      role="presentation"
      className={`absolute z-30 border rounded-lg overflow-hidden shadow-md cursor-crosshair ${panel}`}
      style={{ right: 12, bottom: 12, width: MINIMAP_SIZE.width, height: MINIMAP_SIZE.height }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onClick={event => event.stopPropagation()}
    >
      <svg width={MINIMAP_SIZE.width} height={MINIMAP_SIZE.height} className="block">
        {shapes.map(shape => {
          const b = rectOf(shape);
          const mini = layout.toMinimap(b);
          const fill = shape.color ? CANVAS_COLORS[shape.color].bg : CANVAS_UI_COLORS.marqueeFill;
          return (
            <rect
              key={shape.id}
              data-canvas-minimap-shape={shape.id}
              x={mini.x}
              y={mini.y}
              width={Math.max(1.5, mini.width)}
              height={Math.max(1.5, mini.height)}
              fill={fill}
              stroke={isDarkMode ? '#475569' : '#94a3b8'}
              strokeWidth={0.5}
              rx={1}
            />
          );
        })}
        <rect
          data-canvas-minimap-view="true"
          x={viewRect.x}
          y={viewRect.y}
          width={Math.max(2, viewRect.width)}
          height={Math.max(2, viewRect.height)}
          fill="none"
          stroke={CANVAS_UI_COLORS.blue}
          strokeWidth={1.2}
        />
      </svg>
    </div>
  );
}
