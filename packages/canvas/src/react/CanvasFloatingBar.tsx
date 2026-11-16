import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  ArrowDown, ArrowUp, Copy, Group, Lock, LockOpen, MoreHorizontal,
  AlignCenter, AlignLeft, AlignRight,
} from 'lucide-react';
import { CANVAS_COLORS, CANVAS_COLOR_KEYS } from '../core/index.ts';
import type { CanvasColorKey, CanvasStrokeWidth } from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';
import { bounds, effectiveFill, effectiveStroke } from './canvasGeometry';
import { fontSizeForShape, textAlignForShape } from './canvasText';
import { floatingBarPosition } from './canvasFloatingBarPosition';
import { CANVAS_UI_COLORS } from './theme';
import type { CanvasSelectionActions } from './useCanvasSelectionActions';

interface Camera { x: number; y: number; z: number }

interface CanvasFloatingBarProps {
  /** Everything the bar acts on: one shape, or the whole multi-selection. */
  selection: readonly CanvasShape[];
  selectionActions: CanvasSelectionActions;
  camera: Camera;
  canvasSize: { width: number; height: number };
  isDarkMode: boolean;
  setActiveColor: (color: CanvasColorKey) => void;
  patchSelected: (patch: Partial<CanvasShape>) => void;
  onOpenInspector: () => void;
}

const STROKE_WIDTHS = [2, 4, 6, 8] as const satisfies readonly CanvasStrokeWidth[];
const TEXTUAL_BAR: Partial<Record<CanvasShape['type'], true>> = {
  note: true, card: true, text: true, rect: true, ellipse: true,
  triangle: true, diamond: true, hexagon: true, star: true,
};

function assertNeverBarShape(shape: never): never {
  throw new Error(`Unhandled canvas shape: ${String(shape)}.`);
}

type StrokeWidthShape = CanvasShape & { readonly strokeWidth?: CanvasStrokeWidth };

function barSupportsStrokeWidth(shape: CanvasShape): shape is StrokeWidthShape {
  switch (shape.type) {
    case 'arrow':
    case 'draw':
    case 'frame':
    case 'rect':
    case 'ellipse':
    case 'triangle':
    case 'diamond':
    case 'hexagon':
    case 'star':
      return true;
    case 'note':
    case 'card':
    case 'text':
    case 'image':
      return false;
    default:
      return assertNeverBarShape(shape);
  }
}

/**
 * Compact action strip that floats over the selection in screen space. It
 * shares the inspector's action surface (`patchSelected` and the selection
 * actions) so the two can never disagree about a command.
 */
export function CanvasFloatingBar({
  selection, selectionActions, camera, canvasSize, isDarkMode,
  setActiveColor, patchSelected, onOpenInspector,
}: CanvasFloatingBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const [barSize, setBarSize] = useState({ width: 320, height: 44 });
  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const update = () => {
      const rect = bar.getBoundingClientRect();
      const width = Math.max(1, Math.ceil(rect.width));
      const height = Math.max(1, Math.ceil(rect.height));
      setBarSize(previous => (previous.width === width && previous.height === height
        ? previous
        : { width, height }));
    };
    update();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(update);
    observer.observe(bar);
    return () => observer.disconnect();
  }, [selection]);

  const allLocked = selection.every(shape => !!shape.locked);
  const allDraw = selection.every(shape => shape.type === 'draw');
  const single = selection.length === 1 ? selection[0] : null;
  const multi = selection.length > 1;
  const textual = single !== null && TEXTUAL_BAR[single.type] === true;
  const hasStrokeWidth = selection.every(barSupportsStrokeWidth);

  const selectionRect = selection.reduce(
    (box, shape) => {
      const b = bounds(shape);
      return {
        minX: Math.min(box.minX, b.minX),
        minY: Math.min(box.minY, b.minY),
        maxX: Math.max(box.maxX, b.maxX),
        maxY: Math.max(box.maxY, b.maxY),
      };
    },
    bounds(selection[0]),
  );
  const screenRect = {
    minX: (selectionRect.minX - camera.x) * camera.z,
    minY: (selectionRect.minY - camera.y) * camera.z,
    maxX: (selectionRect.maxX - camera.x) * camera.z,
    maxY: (selectionRect.maxY - camera.y) * camera.z,
  };
  const position = floatingBarPosition(screenRect, canvasSize, barSize);

  const [showPalette, setShowPalette] = useState(false);
  useLayoutEffect(() => { setShowPalette(false); }, [selection]);

  const btn = isDarkMode ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100';
  const iconBtn = (
    label: string,
    onClick: () => void,
    Icon: typeof Copy,
    options: { disabled?: boolean; active?: boolean } = {},
  ) => (
    <button
      key={label}
      type="button"
      title={label}
      aria-label={label}
      disabled={options.disabled}
      onClick={onClick}
      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${options.active ? 'bg-blue-600 text-white' : btn}`}
    ><Icon className="w-4 h-4" /></button>
  );
  const textBtn = (label: string, title: string, onClick: () => void, active = false, disabled = false) => (
    <button
      key={`${title}-${label}`}
      type="button"
      title={title}
      aria-label={title}
      disabled={disabled}
      onClick={onClick}
      className={`h-10 min-w-10 px-2 rounded-lg text-[11px] font-bold transition-colors disabled:opacity-30 disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${active ? 'bg-blue-600 text-white' : btn}`}
    >{label}</button>
  );

  const applyPresetColor = (key: CanvasColorKey) => {
    setActiveColor(key);
    if (allDraw) patchSelected({ color: key, strokeColor: undefined });
    else patchSelected({ color: key, fillColor: undefined });
    setShowPalette(false);
  };
  const swatchPreview = allDraw
    ? effectiveStroke(selection[0])
    : effectiveFill(selection[0]);

  const size = single ? fontSizeForShape(single) : 14;
  const arrow = single?.type === 'arrow' ? single : null;
  const startCap = arrow ? (arrow.arrowStart ?? 'none') : 'none';
  const endCap = arrow ? (arrow.arrowEnd ?? 'arrow') : 'arrow';
  const routing = arrow?.routing ?? 'straight';
  const widths = new Set(selection.filter(barSupportsStrokeWidth).map(shape => shape.strokeWidth));
  const strokeWidth = widths.size === 1 ? [...widths][0] : undefined;

  const colorControl = (
    <div className="relative">
      <button
        type="button"
        title="색상"
        aria-label="색상"
        disabled={allLocked}
        onClick={() => setShowPalette(value => !value)}
        className={`w-10 h-10 rounded-lg flex items-center justify-center disabled:opacity-30 ${btn}`}
      >
        <span
          aria-hidden="true"
          className="block w-5 h-5 rounded-full border"
          style={{
            background: swatchPreview,
            borderColor: isDarkMode ? CANVAS_UI_COLORS.slate600 : CANVAS_UI_COLORS.slate300,
          }}
        />
      </button>
      {showPalette && !allLocked && (
        <div
          data-canvas-color-popover
          className={`absolute left-0 z-50 p-2 rounded-xl border shadow-xl ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}
          style={{ top: position.placement === 'above' ? '100%' : undefined, bottom: position.placement === 'below' ? '100%' : undefined }}
        >
          <div className="canvas-color-presets" aria-label="기본 색상" style={{ width: 180 }}>
            {CANVAS_COLOR_KEYS.map(key => (
              <button
                key={key}
                type="button"
                title={CANVAS_COLORS[key].label}
                aria-label={`색 ${CANVAS_COLORS[key].label}`}
                onClick={() => applyPresetColor(key)}
                className="canvas-color-preset"
                style={{ background: CANVAS_COLORS[key].bg, borderColor: CANVAS_COLORS[key].border }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const strokeWidthControls = hasStrokeWidth && (
    <>
      {STROKE_WIDTHS.map(width => textBtn(
        String(width),
        `굵기 ${width}`,
        () => patchSelected({ strokeWidth: width }),
        strokeWidth === width,
        allLocked,
      ))}
    </>
  );

  return (
    <div
      ref={barRef}
      data-canvas-floating-bar
      role="toolbar"
      aria-label="선택 개체 도구"
      className={`absolute z-40 pointer-events-auto flex items-center gap-1 px-1 rounded-xl border shadow-xl backdrop-blur-sm ${isDarkMode ? 'bg-slate-900/95 border-slate-700 text-slate-200' : 'bg-white/95 border-slate-200 text-slate-700'}`}
      style={{ left: position.left, top: position.top }}
      onPointerDown={event => {
        event.stopPropagation();
        const target = event.target instanceof Element ? event.target : null;
        if (!target?.closest('input, select, textarea')) event.preventDefault();
      }}
      onClick={event => event.stopPropagation()}
    >
      {allLocked ? (
        <>
          {iconBtn('잠금 해제', selectionActions.toggleLocked, LockOpen)}
          {colorControl}
          {iconBtn('복제', () => {}, Copy, { disabled: true })}
          {iconBtn('자세한 설정', () => {}, MoreHorizontal, { disabled: true })}
        </>
      ) : (
        <>
          {colorControl}
          {textual && (
            <>
              {textBtn('−', '글씨 작게', () => patchSelected({ fontSize: Math.max(8, size - 2) }))}
              <span className="w-8 text-center text-xs font-semibold tabular-nums">{size}</span>
              {textBtn('＋', '글씨 크게', () => patchSelected({ fontSize: Math.min(96, size + 2) }))}
              {([
                ['left', AlignLeft, '왼쪽 정렬'],
                ['center', AlignCenter, '가운데 정렬'],
                ['right', AlignRight, '오른쪽 정렬'],
              ] as const).map(([align, Icon, label]) => (
                <button
                  key={align}
                  type="button"
                  title={label}
                  aria-label={label}
                  onClick={() => patchSelected({ textAlign: align })}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${textAlignForShape(single) === align ? 'bg-blue-600 text-white' : btn}`}
                ><Icon className="w-4 h-4" /></button>
              ))}
            </>
          )}
          {arrow && (
            <>
              {textBtn('직선', '직선', () => patchSelected({ routing: 'straight', bend: 0, orthogonalVariant: undefined, orthogonalWaypoints: undefined }), routing === 'straight')}
              {textBtn('곡선', '곡선', () => patchSelected({ routing: 'curved', bend: arrow.bend || 60, orthogonalVariant: undefined, orthogonalWaypoints: undefined }), routing === 'curved')}
              {textBtn('꺾임', '꺾임', () => patchSelected({ routing: 'orthogonal', bend: 0, orthogonalVariant: undefined, orthogonalWaypoints: undefined }), routing === 'orthogonal')}
              {textBtn(
                startCap === 'none' ? '○' : startCap === 'dot' ? '●' : '◀',
                '시작점 표식',
                () => patchSelected({ arrowStart: startCap === 'none' ? 'arrow' : startCap === 'arrow' ? 'dot' : 'none' }),
                startCap !== 'none',
              )}
              {textBtn(
                endCap === 'none' ? '○' : endCap === 'dot' ? '●' : '▶',
                '끝점 표식',
                () => patchSelected({ arrowEnd: endCap === 'arrow' ? 'dot' : endCap === 'dot' ? 'none' : 'arrow' }),
                endCap !== 'none',
              )}
            </>
          )}
          {strokeWidthControls}
          {iconBtn(allLocked ? '잠금 해제' : '잠금', selectionActions.toggleLocked, allLocked ? LockOpen : Lock)}
          {iconBtn('복제', selectionActions.duplicateSelected, Copy)}
          {iconBtn('앞으로', () => selectionActions.reorderSelected('forward'), ArrowUp)}
          {iconBtn('뒤로', () => selectionActions.reorderSelected('backward'), ArrowDown)}
          {multi && iconBtn('그룹', selectionActions.group, Group)}
          {iconBtn('자세한 설정', onOpenInspector, MoreHorizontal)}
        </>
      )}
    </div>
  );
}
