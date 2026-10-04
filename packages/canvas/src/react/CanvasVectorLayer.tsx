import React from 'react';
import { CANVAS_COLORS, type CanvasCamera } from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';
import { CANVAS_UI_COLORS } from './theme';
import { shapeStrokeRendering } from './canvasShapeStyle';

interface CanvasVectorLayerProps {
  visiblePaintOrder: CanvasShape[];
  selected: Set<string>;
  shapeById: Map<string, CanvasShape>;
  allShapes: CanvasShape[];
  camera: CanvasCamera | { x: number; y: number; z: number };
  interaction?: unknown;
  eraserPos: { x: number; y: number } | null;
  guides: { x1: number; y1: number; x2: number; y2: number }[];
  marquee: { startX: number; startY: number; curX: number; curY: number } | null;
  lasso?: { points: { x: number; y: number }[] } | null;
  strokeColorOf: (shape: CanvasShape) => string;
}

const ERASER_RADIUS = 14;

/** SVG-only scene for freehand strokes, connectors and transient guides. */
export function CanvasVectorLayer({
  visiblePaintOrder, selected, camera, eraserPos, guides, marquee, lasso, strokeColorOf,
}: CanvasVectorLayerProps) {
  const dashPattern = `${4 / camera.z} ${4 / camera.z}`;
  const lassoDashPattern = `${5 / camera.z} ${4 / camera.z}`;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
      <g transform={`scale(${camera.z}) translate(${-camera.x}, ${-camera.y})`}>
        {visiblePaintOrder.map(s => {
          if (s.type === 'draw' && s.points) {
            const color = selected.has(s.id) ? CANVAS_UI_COLORS.blue : strokeColorOf(s);
            const rendering = shapeStrokeRendering(s, camera.z);
            return (
              <path
                key={s.id}
                d={rendering.d}
                fill={rendering.filled ? color : 'none'}
                stroke={rendering.filled ? 'none' : color}
                strokeWidth={rendering.filled ? undefined : rendering.width}
                strokeOpacity={rendering.opacity === 1 ? undefined : rendering.opacity}
                fillOpacity={rendering.opacity === 1 ? undefined : rendering.opacity}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            );
          }
          return null;
        })}

        {eraserPos && (
          <circle
            cx={eraserPos.x}
            cy={eraserPos.y}
            r={ERASER_RADIUS / camera.z}
            fill={CANVAS_UI_COLORS.roseSoft}
            stroke={CANVAS_UI_COLORS.rose}
            strokeWidth={1 / camera.z}
          />
        )}
        {guides.map((guide, index) => (
          <line
            key={`guide-${index}`}
            x1={guide.x1}
            y1={guide.y1}
            x2={guide.x2}
            y2={guide.y2}
            stroke={CANVAS_UI_COLORS.pink}
            strokeWidth={1 / camera.z}
            strokeDasharray={dashPattern}
          />
        ))}
        {marquee && (
          <rect
            x={Math.min(marquee.startX, marquee.curX)}
            y={Math.min(marquee.startY, marquee.curY)}
            width={Math.abs(marquee.curX - marquee.startX)}
            height={Math.abs(marquee.curY - marquee.startY)}
            fill={CANVAS_UI_COLORS.marqueeFill}
            stroke={CANVAS_UI_COLORS.blue}
            strokeWidth={1 / camera.z}
          />
        )}
        {lasso && lasso.points.length > 1 && (
          <polygon
            data-canvas-lasso="true"
            points={lasso.points.map(point => `${point.x},${point.y}`).join(' ')}
            fill={CANVAS_UI_COLORS.marqueeFill}
            stroke={CANVAS_UI_COLORS.blue}
            strokeWidth={1.5 / camera.z}
            strokeDasharray={lassoDashPattern}
            strokeLinejoin="round"
          />
        )}
      </g>
    </svg>
  );
}
