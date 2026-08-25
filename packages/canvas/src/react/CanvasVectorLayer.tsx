import React from 'react';
import type { CanvasShape } from './InfiniteCanvas';
import {
  arrowGeometry,
  bezierAt,
  bounds,
  collectObstaclesForArrow,
  edgePoint,
  strokePath,
} from './canvasGeometry';
import { shapeOutlinePath } from './canvasShapeStyle';
import { orthogonalEndAngle, orthogonalPathPoints, segmentAngle, toPath } from './canvasRouting';
import { CANVAS_UI_COLORS } from './theme';

interface Camera { x: number; y: number; z: number }
type VectorInteraction = { kind: string; fromId?: string; toX?: number; toY?: number; hoverId?: string | null };
interface Guide { x1: number; y1: number; x2: number; y2: number }

interface Marquee { startX: number; startY: number; curX: number; curY: number }

interface CanvasVectorLayerProps {
  visiblePaintOrder: CanvasShape[];
  selected: Set<string>;
  shapeById: Map<string, CanvasShape>;
  allShapes: CanvasShape[];
  camera: Camera;
  interaction: VectorInteraction;
  eraserPos: { x: number; y: number } | null;
  guides: Guide[];
  marquee: Marquee | null;
  strokeColorOf: (shape: CanvasShape) => string;
}

const ERASER_RADIUS = 14;

/** SVG-only scene for freehand strokes, connectors and transient guides. */
export function CanvasVectorLayer({
  visiblePaintOrder, selected, shapeById, allShapes, camera, interaction,
  eraserPos, guides, marquee, strokeColorOf,
}: CanvasVectorLayerProps) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
      <g transform={`scale(${camera.z}) translate(${-camera.x}, ${-camera.y})`}>
        {visiblePaintOrder.map(s => {
          if (s.type === 'draw' && s.points) {
            const drawMode = s.drawMode ?? 'pen';
            const documentStrokeWidth = s.strokeWidth ?? 3;
            const color = selected.has(s.id) ? CANVAS_UI_COLORS.blue : strokeColorOf(s);
            // perfect-freehand produces a filled polygon outline that gives
            // variable-width, natural-looking strokes (thick on slow curves,
            // thin on fast flicks). Cached against the shape, so an unrelated
            // re-render does not rebuild it. Single points fall back to a
            // simple stroke, which perfect-freehand cannot outline.
            const outlineD = shapeOutlinePath(s);
            return (
              <path
                key={s.id}
                data-canvas-vector-shape-id={s.id}
                data-canvas-vector-shape-type="draw"
                data-canvas-draw-mode={drawMode}
                data-canvas-stroke-width={documentStrokeWidth}
                d={outlineD || strokePath(s.points)}
                fill={outlineD ? color : 'none'}
                stroke={outlineD ? 'none' : color}
                strokeWidth={documentStrokeWidth / camera.z}
                strokeOpacity={drawMode === 'highlighter' ? 0.35 : undefined}
                fillOpacity={drawMode === 'highlighter' ? 0.35 : undefined}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            );
          }
          if (s.type !== 'arrow') return null;
          const stroke = selected.has(s.id) ? CANVAS_UI_COLORS.blue : strokeColorOf(s);
          const geometry = arrowGeometry(s, shapeById, allShapes);
          const documentStrokeWidth = s.strokeWidth ?? 2.5;
          const renderedStrokeWidth = documentStrokeWidth / camera.z;
          const arrowheadSize = Math.max(10, 8 + documentStrokeWidth * 2);
          const dotRadius = Math.max(4, 2 + documentStrokeWidth);
          const head = arrowheadSize / camera.z;
          const dot = dotRadius / camera.z;
          const pathPoints = geometry.routing === 'orthogonal' && geometry.pathPoints ? geometry.pathPoints : null;
          const orthLine = pathPoints && pathPoints.length > 1;
          let d: string;
          let angle: number;
          if (orthLine) {
            d = toPath(pathPoints);
            angle = orthogonalEndAngle(pathPoints);
          } else if (geometry.routing === 'curved') {
            d = `M ${geometry.start.x} ${geometry.start.y} Q ${geometry.control.x} ${geometry.control.y} ${geometry.end.x} ${geometry.end.y}`;
            const near = bezierAt(0.94, geometry.start, geometry.control, geometry.end);
            angle = Math.atan2(geometry.end.y - near.y, geometry.end.x - near.x);
          } else {
            d = `M ${geometry.start.x} ${geometry.start.y} L ${geometry.end.x} ${geometry.end.y}`;
            angle = Math.atan2(geometry.end.y - geometry.start.y, geometry.end.x - geometry.start.x);
          }
          const startAngle = orthLine && pathPoints.length >= 2
            ? segmentAngle(pathPoints[0], pathPoints[1])
            : geometry.routing === 'orthogonal' && geometry.start.side
              ? (geometry.start.side === 'e' ? 0 : geometry.start.side === 'w' ? Math.PI
                : geometry.start.side === 's' ? Math.PI / 2 : -Math.PI / 2)
              : segmentAngle(geometry.start, geometry.end);
          const strokeDash = s.strokeStyle === 'dashed' ? `${8 / camera.z} ${5 / camera.z}`
            : s.strokeStyle === 'dotted' ? `${1.5 / camera.z} ${4 / camera.z}` : undefined;
          const capAt = (cap: 'none' | 'arrow' | 'dot' | undefined, tipX: number, tipY: number, dirAngle: number) => {
            if (cap === 'dot') return <circle data-canvas-arrow-dot-radius={dotRadius} cx={tipX} cy={tipY} r={dot} fill={stroke} />;
            if (cap === 'none') return null;
            return <polygon
              data-canvas-arrowhead-size={arrowheadSize}
              points={`${tipX},${tipY} ${tipX - head * Math.cos(dirAngle - 0.4)},${tipY - head * Math.sin(dirAngle - 0.4)} ${tipX - head * Math.cos(dirAngle + 0.4)},${tipY - head * Math.sin(dirAngle + 0.4)}`}
              fill={stroke}
            />;
          };
          return (
            <g key={s.id} data-canvas-vector-shape-id={s.id} data-canvas-vector-shape-type="arrow" data-canvas-routing={geometry.routing} data-canvas-stroke-width={documentStrokeWidth}>
              <path d={d} fill="none" stroke={stroke} strokeWidth={renderedStrokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={strokeDash} />
              {capAt(s.arrowEnd ?? 'arrow', geometry.end.x, geometry.end.y, angle)}
              {capAt(s.arrowStart ?? 'none', geometry.start.x, geometry.start.y, startAngle + Math.PI)}
            </g>
          );
        })}

        {interaction.kind === 'connect' && interaction.fromId !== undefined && interaction.toX !== undefined && interaction.toY !== undefined && (() => {
          const source = shapeById.get(interaction.fromId!);
          if (!source) return null;
          const start = edgePoint(source, interaction.toX!, interaction.toY!);
          const target = interaction.hoverId ? shapeById.get(interaction.hoverId) : null;
          const end = target ? edgePoint(target, start.x, start.y) : { x: interaction.toX!, y: interaction.toY! };
          const path = target
            ? orthogonalPathPoints(start, end, collectObstaclesForArrow(allShapes, { id: '__preview', type: 'arrow', x: 0, y: 0, w: 0, h: 0 }, source.id, target.id))
            : [start, end];
          return (
            <g>
              <path d={toPath(path)} stroke={CANVAS_UI_COLORS.blue} strokeWidth={2 / camera.z} strokeDasharray={`${5 / camera.z} ${4 / camera.z}`} />
              {target ? <rect x={bounds(target).minX - 3 / camera.z} y={bounds(target).minY - 3 / camera.z} width={bounds(target).maxX - bounds(target).minX + 6 / camera.z} height={bounds(target).maxY - bounds(target).minY + 6 / camera.z} fill="none" stroke={CANVAS_UI_COLORS.blue} strokeWidth={2 / camera.z} rx={6 / camera.z} /> : <circle cx={end.x} cy={end.y} r={5 / camera.z} fill={CANVAS_UI_COLORS.blue} />}
            </g>
          );
        })()}
        {eraserPos && <circle cx={eraserPos.x} cy={eraserPos.y} r={ERASER_RADIUS / camera.z} fill={CANVAS_UI_COLORS.roseSoft} stroke={CANVAS_UI_COLORS.rose} strokeWidth={1 / camera.z} />}
        {guides.map((guide, index) => <line key={`guide-${index}`} x1={guide.x1} y1={guide.y1} x2={guide.x2} y2={guide.y2} stroke={CANVAS_UI_COLORS.pink} strokeWidth={1 / camera.z} strokeDasharray={`${4 / camera.z} ${4 / camera.z}`} />)}
        {marquee && <rect x={Math.min(marquee.startX, marquee.curX)} y={Math.min(marquee.startY, marquee.curY)} width={Math.abs(marquee.curX - marquee.startX)} height={Math.abs(marquee.curY - marquee.startY)} fill={CANVAS_UI_COLORS.marqueeFill} stroke={CANVAS_UI_COLORS.blue} strokeWidth={1 / camera.z} />}
      </g>
    </svg>
  );
}
