import React from 'react';
import { bezierAt, arrowGeometry, bounds, effectiveFill, effectiveText, rawBounds, shapeHtml, shapePlainText } from './canvasGeometry';
import { pathMidpoint } from './canvasRouting';
import { CONNECTABLE } from './canvasPointerTypes';
import { CANVAS_COLORS } from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';
import { CANVAS_UI_COLORS } from './theme';
import { listKindForShape, fontSizeForShape, fontStackForShape, textAlignForShape } from './canvasText';

interface Camera { x: number; y: number; z: number }
const TEXTUAL = new Set(['note', 'card', 'text', 'rect', 'ellipse', 'triangle', 'diamond', 'hexagon', 'star', 'frame', 'arrow']);

interface CanvasObjectLayerProps {
  visiblePaintOrder: CanvasShape[];
  selected: Set<string>;
  editingId: string | null;
  camera: Camera;
  shapeById: Map<string, CanvasShape>;
  allShapes: CanvasShape[];
  peerCursors?: Array<{ id: number; name: string; color: string; x: number; y: number }>;
  /** Select-tool hover target; connect dots show on it even unselected. */
  hoveredShapeId?: string | null;
  /** Connect dots are select-tool chrome; hidden while a gesture is active. */
  dotsEnabled?: boolean;
  isDarkMode: boolean;
  renderEditor: (extra: string, style?: React.CSSProperties) => React.ReactNode;
  renderShapeBody: (shape: CanvasShape) => React.ReactNode;
  setEditingId: (id: string | null) => void;
  onBendHandleDown: (event: React.PointerEvent, shape: CanvasShape) => void;
  onOrthogonalSegmentHandleDown: (event: React.PointerEvent, shape: CanvasShape, segmentIndex: number) => void;
  onArrowEndpointDown: (event: React.PointerEvent, shape: CanvasShape, endpoint: 'start' | 'end') => void;
  onResizeHandleDown: (event: React.PointerEvent, shape: CanvasShape, handle: 'nw' | 'ne' | 'sw' | 'se') => void;
  onRotateHandleDown: (event: React.PointerEvent, shape: CanvasShape) => void;
  onConnectHandleDown: (event: React.PointerEvent, shape: CanvasShape) => void;
}

/** DOM layer for editable shapes and remote cursors; vectors stay in SVG. */
export function CanvasObjectLayer({
  visiblePaintOrder, selected, editingId, camera, shapeById, allShapes, peerCursors,
  hoveredShapeId, dotsEnabled,
  isDarkMode, renderEditor, renderShapeBody, setEditingId, onBendHandleDown, onOrthogonalSegmentHandleDown,
  onResizeHandleDown, onRotateHandleDown, onConnectHandleDown, onArrowEndpointDown,
}: CanvasObjectLayerProps) {
  return (
    <>
        {visiblePaintOrder.map((s, index) => {
          const layerStyle = { zIndex: index + 1, transform: `scale(${camera.z}) translate(${-camera.x}px, ${-camera.y}px)` };
          if (s.type === 'draw') return null;
          if (s.type === 'arrow') {
            const geometry = arrowGeometry(s, shapeById, allShapes);
            const mid = geometry.routing === 'orthogonal' && geometry.pathPoints
              ? pathMidpoint(geometry.pathPoints)
              : geometry.routing === 'curved'
                ? bezierAt(0.5, geometry.start, geometry.control, geometry.end)
                : { x: (geometry.start.x + geometry.end.x) / 2, y: (geometry.start.y + geometry.end.y) / 2 };
            const isEditing = editingId === s.id;
            const label = shapeHtml(s);
            const isSelected = selected.has(s.id);
            const relationLabelText = shapePlainText(s).trim();
            const displayLabel = label || (isSelected ? '관계 입력' : '');
            if (!displayLabel && !isEditing) return null;
            return (
              <div key={s.id} data-canvas-paint-id={s.id} className="absolute top-0 left-0 origin-top-left" style={layerStyle}>
              <div data-canvas-arrow-label-hit-area className="absolute flex items-center justify-center" style={{ left: mid.x - 90, top: mid.y - 18, width: 180, height: 36 }} onDoubleClick={event => { event.stopPropagation(); setEditingId(s.id); }}>
                {(displayLabel || isEditing) && <div
                  data-canvas-arrow-label="true"
                  aria-label={relationLabelText ? `관계 설명: ${relationLabelText}` : '관계 설명 입력'}
                  title={isEditing ? undefined : relationLabelText ? '더블클릭하여 관계 설명 편집' : '더블클릭하여 관계 입력'}
                  className={`px-3 py-1 rounded-full border-2 shadow-sm ${isDarkMode ? 'bg-slate-900 border-slate-600 text-slate-100' : 'bg-white border-slate-300 text-slate-800'}`}
                  style={{
                    fontSize: fontSizeForShape(s),
                    fontFamily: fontStackForShape(s),
                    maxWidth: '100%',
                    minWidth: isEditing ? 120 / camera.z : undefined,
                    minHeight: isEditing ? 28 / camera.z : undefined,
                    color: s.textColor,
                  }}
                >
                  {isEditing ? renderEditor('text-center whitespace-nowrap') : <span key="canvas-view" dangerouslySetInnerHTML={{ __html: displayLabel }} />}
                </div>}
              </div>
              </div>
            );
          }
          const isSelected = selected.has(s.id);
          const box = rawBounds(s);
          return (
            <div key={s.id} data-canvas-paint-id={s.id} className="absolute top-0 left-0 origin-top-left" style={layerStyle}>
            <div
              data-canvas-locked={s.locked ? 'true' : undefined}
              data-canvas-shape-id={s.id}
              data-canvas-shape-type={s.type}
              data-canvas-selected={isSelected ? 'true' : undefined}
              data-canvas-text-align={textAlignForShape(s)}
              data-canvas-text-color={s.textColor}
              data-canvas-font-size={fontSizeForShape(s)}
              data-canvas-font-family={s.fontFamily === 'custom' ? (s.customFontFamily ?? 'custom') : (s.fontFamily ?? 'sans')}
              data-canvas-manual-size={s.manualSize ? 'true' : undefined}
              data-canvas-group-id={s.groupId}
              data-canvas-list-kind={listKindForShape(s)}
              onDoubleClick={event => { event.stopPropagation(); if (!s.locked && TEXTUAL.has(s.type)) setEditingId(s.id); }}
              data-canvas-x={s.x}
              data-canvas-y={s.y}
              data-canvas-width={s.w}
              data-canvas-height={s.h}
              className="absolute"
              style={{ left: box.minX, top: box.minY, width: box.maxX - box.minX, height: box.maxY - box.minY, transform: s.rotation ? `rotate(${s.rotation}rad)` : undefined, transformOrigin: 'center' }}
            >
              {renderShapeBody(s)}
            </div>
            </div>
          );
        })}
      {/* Single selection: per-shape outline with resize/rotate/connect
          handles. Multi selection: one shared bounding box instead of
          per-shape outlines. */}
      {selected.size === 1 && visiblePaintOrder.filter(s => s.type !== 'draw' && s.type !== 'arrow' && !s.locked && selected.has(s.id)).map(s => {
        const box = rawBounds(s);
        return <div key={`selection-${s.id}`} data-canvas-selection-id={s.id} className="absolute top-0 left-0 origin-top-left pointer-events-none" style={{ zIndex: visiblePaintOrder.length + 3, transform: `scale(${camera.z}) translate(${-camera.x}px, ${-camera.y}px)` }}>
          <div className="absolute" style={{ left: box.minX, top: box.minY, width: box.maxX - box.minX, height: box.maxY - box.minY, transform: s.rotation ? `rotate(${s.rotation}rad)` : undefined, transformOrigin: 'center' }}>
                <div data-canvas-selection-box="true" className="absolute -inset-0.5 pointer-events-none" style={{ outline: `${2 / camera.z}px solid ${CANVAS_UI_COLORS.blue}` }} />
                <>
                  {(['nw', 'ne', 'sw', 'se'] as const).map(handle => <div key={handle} data-canvas-resize-handle={handle} onPointerDown={event => onResizeHandleDown(event, s, handle)} className="absolute pointer-events-auto z-20 bg-white border-2 border-blue-600 rounded-sm" style={{ width: 10 / camera.z, height: 10 / camera.z, cursor: `${handle}-resize`, left: handle.includes('w') ? -5 / camera.z : undefined, right: handle.includes('e') ? -5 / camera.z : undefined, top: handle.includes('n') ? -5 / camera.z : undefined, bottom: handle.includes('s') ? -5 / camera.z : undefined }} />)}
                  <div onPointerDown={event => onRotateHandleDown(event, s)} title="회전 (Shift로 15도 단위)" className="absolute pointer-events-auto z-20 bg-blue-600 rounded-full" style={{ width: 12 / camera.z, height: 12 / camera.z, left: '50%', marginLeft: -6 / camera.z, top: -28 / camera.z, cursor: 'grab' }} />
                </>
          </div>
        </div>;
      })}
      {selected.size > 1 && (() => {
        const picked = allShapes.filter(shape => selected.has(shape.id));
        if (picked.length === 0) return null;
        const union = picked.reduce((acc, shape) => {
          const b = bounds(shape);
          return {
            minX: Math.min(acc.minX, b.minX),
            minY: Math.min(acc.minY, b.minY),
            maxX: Math.max(acc.maxX, b.maxX),
            maxY: Math.max(acc.maxY, b.maxY),
          };
        }, bounds(picked[0]));
        return (
          <div data-canvas-selection-group="true" className="absolute top-0 left-0 origin-top-left pointer-events-none" style={{ zIndex: visiblePaintOrder.length + 3, transform: `scale(${camera.z}) translate(${-camera.x}px, ${-camera.y}px)` }}>
            <div className="absolute" style={{ left: union.minX, top: union.minY, width: union.maxX - union.minX, height: union.maxY - union.minY, outline: `${2 / camera.z}px solid ${CANVAS_UI_COLORS.blue}` }} />
          </div>
        );
      })()}
      {/* Blue edge dots start connector drags: on the selected shape, the
          hovered shape, and locked shapes (locking blocks edits, not links). */}
      {dotsEnabled !== false && visiblePaintOrder
        .filter(s => CONNECTABLE.includes(s.type) && (selected.has(s.id) || s.id === hoveredShapeId || s.locked))
        .map(s => {
          const box = rawBounds(s);
          const w = box.maxX - box.minX;
          const h = box.maxY - box.minY;
          // Touch needs a 40px press target; smaller shapes cap it so the
          // shape centre stays clickable.
          const dotHit = Math.min(40 / camera.z, Math.max(16 / camera.z, Math.min(w, h) * 0.6));
          const dotSize = 10 / camera.z;
          return (
            <div key={`connect-${s.id}`} className="absolute top-0 left-0 origin-top-left pointer-events-none" style={{ zIndex: visiblePaintOrder.length + 3, transform: `scale(${camera.z}) translate(${-camera.x}px, ${-camera.y}px)` }}>
              <div className="absolute" style={{ left: box.minX, top: box.minY, width: w, height: h, transform: s.rotation ? `rotate(${s.rotation}rad)` : undefined, transformOrigin: 'center' }}>
                {(['n', 's', 'w', 'e'] as const).map(side => {
                  const sideStyle: React.CSSProperties = side === 'n'
                    ? { left: '50%', top: -dotHit / 2, marginLeft: -dotHit / 2 }
                    : side === 's'
                      ? { left: '50%', bottom: -dotHit / 2, marginLeft: -dotHit / 2 }
                      : side === 'w'
                        ? { top: '50%', left: -dotHit / 2, marginTop: -dotHit / 2 }
                        : { top: '50%', right: -dotHit / 2, marginTop: -dotHit / 2 };
                  return (
                    <div
                      key={`dot-${side}`}
                      data-canvas-connect-dot={side}
                      onPointerDown={event => onConnectHandleDown(event, s)}
                      title="드래그해서 연결 (관계 생성)"
                      className="absolute pointer-events-auto z-20 flex items-center justify-center"
                      style={{ ...sideStyle, width: dotHit, height: dotHit, cursor: 'crosshair' }}
                    >
                      <div className="rounded-full bg-blue-600 border-2 border-white shadow-sm" style={{ width: dotSize, height: dotSize }} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      {selected.size === 1 && allShapes.filter(shape => shape.type === 'arrow' && !shape.locked && selected.has(shape.id)).map(shape => {
        const geometry = arrowGeometry(shape, shapeById, allShapes);
        const screenPoint = (point: { x: number; y: number }, size: number) => ({
          left: (point.x - camera.x) * camera.z - size / 2,
          top: (point.y - camera.y) * camera.z - size / 2,
        });
        return (
          <React.Fragment key={`arrow-handles-${shape.id}`}>
            {geometry.routing === 'orthogonal' && geometry.pathPoints && geometry.pathPoints.length > 2
              ? geometry.pathPoints.slice(0, -1).map((point, index) => {
                const next = geometry.pathPoints?.[index + 1];
                if (!next) return null;
                const midpoint = { x: (point.x + next.x) / 2, y: (point.y + next.y) / 2 };
                return <div key={`segment-${index}`} data-canvas-arrow-segment-handle={index} onPointerDown={event => onOrthogonalSegmentHandleDown(event, shape, index)} title="드래그해서 직각선 구간 이동" className="absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600" style={{ zIndex: visiblePaintOrder.length + 3, width: 12, height: 12, ...screenPoint(midpoint, 12), cursor: point.x === next.x ? 'ew-resize' : 'ns-resize' }} />;
              })
              : geometry.routing === 'curved' && <div data-canvas-arrow-bend-handle onPointerDown={event => onBendHandleDown(event, shape)} title="드래그해서 곡선 휘기" className="absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600" style={{ zIndex: visiblePaintOrder.length + 3, width: 10, height: 10, left: (geometry.start.x + geometry.end.x) / 2 * camera.z - camera.x * camera.z - 5, top: (geometry.start.y + geometry.end.y) / 2 * camera.z - camera.y * camera.z - 10, cursor: 'grab' }} />}
            {(['start', 'end'] as const).map(endpoint => {
              const point = endpoint === 'start' ? geometry.start : geometry.end;
              return <div key={endpoint} data-canvas-arrow-endpoint={endpoint} onPointerDown={event => onArrowEndpointDown(event, shape, endpoint)} title="드래그해서 끝점 이동 (노드 위에 놓으면 연결)" className="absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full" style={{ zIndex: visiblePaintOrder.length + 3, width: 12, height: 12, ...screenPoint(point, 12), cursor: 'grab' }} />;
            })}
          </React.Fragment>
        );
      })}
      {allShapes.filter(shape => shape.locked).map(shape => {
        const box = rawBounds(shape);
        return <div key={`lock-badge-${shape.id}`} data-canvas-lock-badge={shape.id} title="잠김" aria-label="잠긴 개체" className="absolute pointer-events-none z-40" style={{ zIndex: visiblePaintOrder.length + 4, left: (box.maxX - camera.x) * camera.z - 18, top: (box.minY - camera.y) * camera.z + 2 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isDarkMode ? '#cbd5e1' : '#475569'} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" fill={isDarkMode ? '#1e293b' : '#fff'} /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
        </div>;
      })}
      {peerCursors?.map(peer => <div key={peer.id} className="absolute pointer-events-none z-40" style={{ zIndex: visiblePaintOrder.length + 4, left: (peer.x - camera.x) * camera.z, top: (peer.y - camera.y) * camera.z, transform: 'translate(-2px, -2px)' }}>
        <svg width="20" height="24" viewBox="0 0 20 24"><path d="M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z" fill={peer.color} stroke={CANVAS_UI_COLORS.white} strokeWidth="1.5" strokeLinejoin="round" /></svg>
        <div className="mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap" style={{ background: peer.color }}>{peer.name}</div>
      </div>)}
    </>
  );
}
