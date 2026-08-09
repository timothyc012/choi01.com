import React from 'react';
import { bounds, bezierAt, arrowGeometry, effectiveFill, effectiveText, rawBounds, shapeHtml, shapePlainText } from './canvasGeometry';
import { pathMidpoint } from './canvasRouting';
import { CANVAS_COLORS } from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';
import { CANVAS_UI_COLORS } from './theme';
import { listKindForShape, fontSizeForShape, fontStackForShape, textAlignForShape } from './canvasText';

interface Camera { x: number; y: number; z: number }
const TEXTUAL = new Set(['note', 'card', 'text', 'rect', 'ellipse', 'triangle', 'diamond', 'hexagon', 'star', 'frame', 'arrow']);
const CONNECTABLE = new Set(['note', 'card', 'rect', 'ellipse', 'text', 'image']);

interface CanvasObjectLayerProps {
  visiblePaintOrder: CanvasShape[];
  selected: Set<string>;
  editingId: string | null;
  camera: Camera;
  shapeById: Map<string, CanvasShape>;
  allShapes: CanvasShape[];
  peerCursors?: Array<{ id: number; name: string; color: string; x: number; y: number }>;
  isDarkMode: boolean;
  renderEditor: (extra: string, style?: React.CSSProperties) => React.ReactNode;
  renderShapeBody: (shape: CanvasShape) => React.ReactNode;
  setEditingId: (id: string | null) => void;
  onBendHandleDown: (event: React.PointerEvent, shape: CanvasShape) => void;
  onArrowEndpointDown: (event: React.PointerEvent, shape: CanvasShape, endpoint: 'start' | 'end') => void;
  onResizeHandleDown: (event: React.PointerEvent, shape: CanvasShape, handle: 'nw' | 'ne' | 'sw' | 'se') => void;
  onRotateHandleDown: (event: React.PointerEvent, shape: CanvasShape) => void;
  onConnectHandleDown: (event: React.PointerEvent, shape: CanvasShape) => void;
}

/** DOM layer for editable shapes and remote cursors; vectors stay in SVG. */
export function CanvasObjectLayer({
  visiblePaintOrder, selected, editingId, camera, shapeById, allShapes, peerCursors,
  isDarkMode, renderEditor, renderShapeBody, setEditingId, onBendHandleDown,
  onResizeHandleDown, onRotateHandleDown, onConnectHandleDown, onArrowEndpointDown,
}: CanvasObjectLayerProps) {
  return (
    <>
      <div className="absolute top-0 left-0 origin-top-left" style={{ transform: `scale(${camera.z}) translate(${-camera.x}px, ${-camera.y}px)` }}>
        {visiblePaintOrder.map(s => {
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
            const showRelationPlaceholder = isSelected && !isEditing && !label;
            const relationLabelText = shapePlainText(s).trim();
            if (!label && !isEditing && !isSelected) return null;
            return (
              <React.Fragment key={s.id}>
              <div className="absolute flex items-center justify-center" style={{ left: mid.x - 90, top: mid.y - 18, width: 180, height: 36 }} onDoubleClick={event => { event.stopPropagation(); setEditingId(s.id); }}>
                {(label || isEditing || showRelationPlaceholder) && <div
                  data-canvas-arrow-label="true"
                  data-canvas-arrow-label-placeholder={showRelationPlaceholder ? 'true' : undefined}
                  aria-label={relationLabelText ? `관계 설명: ${relationLabelText}` : '관계 설명 입력'}
                  title={isEditing ? undefined : relationLabelText ? '더블클릭하여 관계 설명 편집' : '더블클릭하여 관계 설명 입력'}
                  className={`px-3 py-1 rounded-full border-2 shadow-sm ${showRelationPlaceholder ? 'border-dashed' : ''} ${isDarkMode
                    ? `bg-slate-900 border-slate-600 ${showRelationPlaceholder ? 'text-slate-400' : 'text-slate-100'}`
                    : `bg-white border-slate-300 ${showRelationPlaceholder ? 'text-slate-500' : 'text-slate-800'}`}`}
                  style={{
                    fontSize: fontSizeForShape(s),
                    fontFamily: fontStackForShape(s),
                    maxWidth: '100%',
                    minWidth: isEditing ? 120 / camera.z : undefined,
                    minHeight: isEditing ? 28 / camera.z : undefined,
                    color: showRelationPlaceholder ? undefined : s.textColor,
                  }}
                >
                  {isEditing ? renderEditor('text-center whitespace-nowrap') : label
                    ? <span key="canvas-view" dangerouslySetInnerHTML={{ __html: label }} />
                    : <span className="whitespace-nowrap">관계 입력</span>}
                </div>}
                {isSelected && selected.size === 1 && <div data-canvas-arrow-bend-handle onPointerDown={event => onBendHandleDown(event, s)} title="드래그해서 곡선으로 (Curve)" className="absolute rounded-full bg-white border-2 border-blue-600" style={{ width: 10 / camera.z, height: 10 / camera.z, left: `calc(50% - ${5 / camera.z}px)`, top: -10 / camera.z, cursor: 'grab' }} />}
              </div>
              {isSelected && selected.size === 1 && (['start', 'end'] as const).map(endpoint => {
                const point = endpoint === 'start' ? geometry.start : geometry.end;
                return (
                  <div
                    key={endpoint}
                    data-canvas-arrow-endpoint={endpoint}
                    onPointerDown={event => onArrowEndpointDown(event, s, endpoint)}
                    title="드래그해서 끝점 이동 (노드 위에 놓으면 연결)"
                    className="absolute bg-white border-2 border-blue-600 rounded-full"
                    style={{ width: 12 / camera.z, height: 12 / camera.z, left: point.x - 6 / camera.z, top: point.y - 6 / camera.z, cursor: 'grab' }}
                  />
                );
              })}
              </React.Fragment>
            );
          }
          const isSelected = selected.has(s.id);
          const box = rawBounds(s);
          return (
            <div
              key={s.id}
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
              data-canvas-x={s.x}
              data-canvas-y={s.y}
              data-canvas-width={s.w}
              data-canvas-height={s.h}
              className="absolute"
              style={{ left: box.minX, top: box.minY, width: box.maxX - box.minX, height: box.maxY - box.minY, transform: s.rotation ? `rotate(${s.rotation}rad)` : undefined, transformOrigin: 'center' }}
              onDoubleClick={event => { event.stopPropagation(); if (TEXTUAL.has(s.type)) setEditingId(s.id); }}
            >
              {renderShapeBody(s)}
              {isSelected && <>
                <div className="absolute -inset-0.5 pointer-events-none" style={{ outline: `${2 / camera.z}px solid ${CANVAS_UI_COLORS.blue}` }} />
                {selected.size === 1 && <>
                  {(['nw', 'ne', 'sw', 'se'] as const).map(handle => <div key={handle} data-canvas-resize-handle={handle} onPointerDown={event => onResizeHandleDown(event, s, handle)} className="absolute bg-white border-2 border-blue-600 rounded-sm" style={{ width: 10 / camera.z, height: 10 / camera.z, cursor: `${handle}-resize`, left: handle.includes('w') ? -5 / camera.z : undefined, right: handle.includes('e') ? -5 / camera.z : undefined, top: handle.includes('n') ? -5 / camera.z : undefined, bottom: handle.includes('s') ? -5 / camera.z : undefined }} />)}
                  <div onPointerDown={event => onRotateHandleDown(event, s)} title="회전 (Shift로 15도 단위)" className="absolute bg-blue-600 rounded-full" style={{ width: 12 / camera.z, height: 12 / camera.z, left: '50%', marginLeft: -6 / camera.z, top: -28 / camera.z, cursor: 'grab' }} />
                  {CONNECTABLE.has(s.type) && (['n', 's', 'w', 'e'] as const).map(key => <div key={`plus-${key}`} onPointerDown={event => onConnectHandleDown(event, s)} title="드래그해서 연결 (관계 생성)" className="absolute flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500" style={{ ...(key === 'n' ? { left: '50%', top: -30 / camera.z, marginLeft: -9 / camera.z } : key === 's' ? { left: '50%', bottom: -30 / camera.z, marginLeft: -9 / camera.z } : key === 'w' ? { top: '50%', left: -30 / camera.z, marginTop: -9 / camera.z } : { top: '50%', right: -30 / camera.z, marginTop: -9 / camera.z }), width: 18 / camera.z, height: 18 / camera.z, fontSize: 13 / camera.z, lineHeight: 1, cursor: 'crosshair' }}>+</div>)}
                </>}
              </>}
            </div>
          );
        })}
      </div>
      {allShapes.filter(shape => (shape.type === 'draw' || shape.type === 'arrow') && selected.has(shape.id)).map(shape => {
        const box = bounds(shape);
        return <div key={`sel-${shape.id}`} className="absolute pointer-events-none border-2 border-blue-600/60 rounded" style={{ left: (box.minX - camera.x) * camera.z - 4, top: (box.minY - camera.y) * camera.z - 4, width: (box.maxX - box.minX) * camera.z + 8, height: (box.maxY - box.minY) * camera.z + 8 }} />;
      })}
      {peerCursors?.map(peer => <div key={peer.id} className="absolute pointer-events-none z-40" style={{ left: (peer.x - camera.x) * camera.z, top: (peer.y - camera.y) * camera.z, transform: 'translate(-2px, -2px)' }}>
        <svg width="20" height="24" viewBox="0 0 20 24"><path d="M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z" fill={peer.color} stroke={CANVAS_UI_COLORS.white} strokeWidth="1.5" strokeLinejoin="round" /></svg>
        <div className="mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap" style={{ background: peer.color }}>{peer.name}</div>
      </div>)}
    </>
  );
}
