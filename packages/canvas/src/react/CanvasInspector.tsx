import React, { useLayoutEffect, useState } from 'react';
import { ArrowUp, ArrowDown, ChevronsUp, ChevronsDown, Clipboard, ClipboardPaste, Copy, Group, RotateCcw, RotateCw, Trash2, Undo2, Ungroup } from 'lucide-react';
import { CANVAS_COLORS, CANVAS_COLOR_KEYS } from '../core/index.ts';
import type { CanvasColorKey, CanvasStrokeWidth } from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';
import { effectiveFill, effectiveText } from './canvasGeometry';
import { useInspectorPosition } from './useInspectorPosition';
import { CANVAS_UI_COLORS } from './theme';
import { getInspectorGroups, type InspectorGroup } from './canvasDiagram';
import { CanvasColorWheel, colorToHex } from './CanvasColorWheel';
import { CanvasInspectorText } from './CanvasInspectorText';
import type { CanvasSelectionActions } from './useCanvasSelectionActions';

interface Camera { x: number; y: number; z: number }
interface CanvasInspectorProps {
  shape: CanvasShape;
  /** Everything the panel acts on: one shape, or the whole multi-selection. */
  selection: readonly CanvasShape[];
  selectionActions: CanvasSelectionActions;
  shapes: CanvasShape[];
  camera: Camera;
  canvasSize: { width: number; height: number };
  isDarkMode: boolean;
  editing: boolean;
  showPalette: boolean;
  installedFontFamilies: readonly string[];
  setShowPalette: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveColor: (color: CanvasColorKey) => void;
  patchSelected: (patch: Partial<CanvasShape>) => void;
  applyFormat: (command: 'bold' | 'italic' | 'underline') => void;
  applyList: (kind: 'bullet' | 'dash' | 'number') => void;
  applyCustomFontFamily: (value: string) => void;
}

const STROKE_WIDTHS = [2, 4, 6, 8] as const satisfies readonly CanvasStrokeWidth[];
const ROTATION_STEP = Math.PI / 12;
type ColorTarget = 'fill' | 'stroke' | 'text';

function supportsStrokeWidth(shape: CanvasShape): boolean {
  switch (shape.type) {
    case 'arrow':
    case 'frame':
    case 'rect':
    case 'ellipse':
    case 'triangle':
    case 'diamond':
    case 'hexagon':
    case 'star':
    case 'draw':
      return true;
    case 'note':
    case 'card':
    case 'text':
    case 'image':
      return false;
    default:
      return assertNeverShape(shape);
  }
}

function inspectorStrokeWidth(shape: CanvasShape): CanvasStrokeWidth | undefined {
  switch (shape.type) {
    case 'arrow':
    case 'frame':
    case 'rect':
    case 'ellipse':
    case 'triangle':
    case 'diamond':
    case 'hexagon':
    case 'star':
    case 'draw':
      return shape.strokeWidth;
    case 'note':
    case 'card':
    case 'text':
    case 'image':
      return undefined;
    default:
      return assertNeverShape(shape);
  }
}

function assertNeverShape(shape: never): never {
  throw new Error(`Unhandled canvas shape: ${String(shape)}.`);
}

function supportsFillColor(shape: CanvasShape): boolean {
  return shape.type === 'note' || shape.type === 'card' || shape.type === 'rect' || shape.type === 'ellipse'
    || shape.type === 'triangle' || shape.type === 'diamond' || shape.type === 'hexagon' || shape.type === 'star';
}

function supportsStrokeColor(shape: CanvasShape): boolean {
  return shape.type === 'draw' || shape.type === 'arrow' || shape.type === 'frame' || shape.type === 'rect'
    || shape.type === 'ellipse' || shape.type === 'triangle' || shape.type === 'diamond' || shape.type === 'hexagon' || shape.type === 'star';
}

/** Selection inspector kept separate from the canvas scene for package reuse. */
export function CanvasInspector({
  shape: s, selection, selectionActions, shapes, camera, canvasSize, isDarkMode, editing, showPalette,
  installedFontFamilies, setShowPalette, setActiveColor, patchSelected,
  applyFormat, applyList, applyCustomFontFamily,
}: CanvasInspectorProps) {
  const btn = isDarkMode ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100';
  // A multi-selection has no single set of text/arrow properties to show, so
  // the panel collapses to what applies to every member: colour, stroke width,
  // and the selection-wide commands.
  const multi = selection.length > 1;
  const canUngroup = selection.some(shape => !!shape.groupId);
  const isDraw = s.type === 'draw';
  const defaultColorTarget: ColorTarget = isDraw || (supportsStrokeColor(s) && !supportsFillColor(s))
    ? 'stroke'
    : supportsFillColor(s) ? 'fill' : 'text';
  const [colorTarget, setColorTarget] = useState<ColorTarget>(defaultColorTarget);
  const [hexValue, setHexValue] = useState('');
  useLayoutEffect(() => setColorTarget(defaultColorTarget), [defaultColorTarget, s.id]);
  const colorValue = colorTarget === 'text'
    ? effectiveText(s)
    : colorTarget === 'stroke'
      ? (s.strokeColor ?? (s.color ? CANVAS_COLORS[s.color].border : CANVAS_UI_COLORS.ink))
      : effectiveFill(s);
  useLayoutEffect(() => setHexValue(colorToHex(colorValue).toUpperCase()), [colorValue]);
  const swatchColor = colorToHex(colorValue);
  const applyCustomColor = (value: string) => {
    if (isDraw || colorTarget === 'stroke') patchSelected({ strokeColor: value });
    else if (colorTarget === 'text') patchSelected({ textColor: value });
    else patchSelected({ fillColor: value });
  };
  const applyPresetColor = (key: CanvasColorKey) => {
    setActiveColor(key);
    if (isDraw || colorTarget === 'stroke') patchSelected({ color: key, strokeColor: undefined });
    else if (colorTarget === 'text') patchSelected({ textColor: CANVAS_COLORS[key].text });
    else patchSelected({ color: key, fillColor: undefined });
    setShowPalette(false);
  };
  const { inspectorRef, position } = useInspectorPosition(s, selection, shapes, camera, canvasSize);

  const hasStrokeWidthControl = selection.every(supportsStrokeWidth);
  // Mixed widths across a selection show no active segment rather than
  // pretending the whole selection shares the first shape's width.
  const widths = new Set(selection.map(inspectorStrokeWidth));
  const strokeWidth = widths.size === 1 ? inspectorStrokeWidth(s) : undefined;
  const groups = getInspectorGroups(s);
  const defaultGroup: InspectorGroup = s.type === 'image'
    ? 'arrange'
    : s.type === 'arrow' ? 'arrow' : (groups[0] ?? 'color');
  const [openGroup, setOpenGroup] = useState<InspectorGroup>(defaultGroup);
  useLayoutEffect(() => {
    if (!groups.includes(openGroup)) setOpenGroup(defaultGroup);
  }, [defaultGroup, groups, openGroup]);
  const manualOrthogonal = s.type === 'arrow' && Boolean(s.orthogonalWaypoints?.length);
  const startCap = s.type === 'arrow' ? (s.arrowStart ?? 'none') : 'none';
  const endCap = s.type === 'arrow' ? (s.arrowEnd ?? 'arrow') : 'arrow';
  const segment = (label: string, active: boolean, onClick: () => void, title: string, ariaLabel = title) => <button type="button" title={title} aria-label={ariaLabel} onClick={onClick} className={`h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${active ? 'bg-blue-600 text-white' : btn}`}>{label}</button>;
  const groupLabel = (label: string, className = '') => <span className={`px-1 text-[10px] font-semibold tracking-wide opacity-60 ${className}`}>{label}</span>;
  const action = (
    Icon: typeof Copy,
    label: string,
    onClick: () => void,
    enabled: boolean,
    danger = false,
  ) => <button
    type="button"
    title={label}
    aria-label={label}
    disabled={!enabled}
    onClick={onClick}
    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default ${danger ? 'text-rose-500 hover:bg-rose-500/10' : btn}`}
  ><Icon className="w-4 h-4" /></button>;
  const groupNames: Record<InspectorGroup, string> = { color: '색상', text: '텍스트', arrow: '선', arrange: '정렬', diagram: 'Diagram' };

  return (
    <div ref={inspectorRef} data-canvas-inspector={isDraw ? 'draw' : 'text'} className={`absolute z-40 pointer-events-auto flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${isDarkMode ? 'bg-slate-900/95 border-slate-700 text-slate-200' : 'bg-white/95 border-slate-200 text-slate-700'}`} style={{ left: position.left, top: position.top }} onPointerDown={event => { event.stopPropagation(); const target = event.target instanceof Element ? event.target : null; if (!target?.closest('input, select, textarea')) event.preventDefault(); }} onClick={event => event.stopPropagation()}>
      {multi
        ? <div className="flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70">{selection.length}개 선택됨</div>
        : <div className="flex flex-wrap items-center gap-1 pointer-events-auto" role="tablist" aria-label="선택 개체 도구 그룹">
            {groups.map(group => <button key={group} type="button" role="tab" aria-selected={openGroup === group} onClick={() => setOpenGroup(group)} className={`h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${openGroup === group ? 'bg-blue-600 text-white' : btn}`}>{groupNames[group]}</button>)}
          </div>}
      <div className="relative flex items-center gap-1.5 pointer-events-none" style={{ display: multi || openGroup === 'color' ? undefined : 'none' }}>
        <span className="pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60">{isDraw ? '그리기' : '색상'}</span>
        <button type="button" title={isDraw ? '그리기 무지개 컬러휠' : '무지개 컬러휠'} aria-label={isDraw ? '그리기 무지개 컬러휠' : '무지개 컬러휠'} onClick={() => setShowPalette(value => !value)} className={`pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${isDarkMode ? 'border-slate-700 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-50'}`}>
          <span className="canvas-color-wheel-trigger" aria-hidden="true"><span className="canvas-color-wheel-trigger-dot" style={{ background: swatchColor }} /></span>
        </button>
        {showPalette && <div data-canvas-color-popover className={`pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
          {!isDraw && <div className="canvas-color-targets" role="tablist" aria-label="세부 색상 대상">
            {supportsFillColor(s) && <button type="button" role="tab" aria-selected={colorTarget === 'fill'} onClick={() => setColorTarget('fill')} className={colorTarget === 'fill' ? 'is-active' : ''}>배경</button>}
            {supportsStrokeColor(s) && <button type="button" role="tab" aria-selected={colorTarget === 'stroke'} onClick={() => setColorTarget('stroke')} className={colorTarget === 'stroke' ? 'is-active' : ''}>선</button>}
            <button type="button" role="tab" aria-selected={colorTarget === 'text'} onClick={() => setColorTarget('text')} className={colorTarget === 'text' ? 'is-active' : ''}>글씨</button>
          </div>}
          <div className="canvas-color-presets" aria-label="기본 색상">
            {CANVAS_COLOR_KEYS.map(key => <button key={key} type="button" title={CANVAS_COLORS[key].label} aria-label={`색 ${CANVAS_COLORS[key].label}`} onClick={() => applyPresetColor(key)} className="canvas-color-preset" style={{ background: CANVAS_COLORS[key].bg, borderColor: CANVAS_COLORS[key].border, outline: s.color === key && !s.fillColor && !s.strokeColor ? `2px solid ${CANVAS_UI_COLORS.blue}` : undefined, outlineOffset: 1 }} />)}
          </div>
          <CanvasColorWheel value={colorValue} onChange={applyCustomColor} />
          <label className="canvas-color-hex">
            <span>#</span>
            <input
              data-canvas-control="color-hex"
              type="text"
              inputMode="text"
              aria-label="HEX 색상"
              value={hexValue.replace(/^#/, '')}
              onChange={event => {
                const next = event.currentTarget.value.replace(/[^0-9a-f]/gi, '').slice(0, 6);
                setHexValue(`#${next}`.toUpperCase());
                if (next.length === 6) applyCustomColor(`#${next}`);
              }}
              onBlur={() => setHexValue(colorToHex(colorValue).toUpperCase())}
              onPointerDown={event => event.stopPropagation()}
              className="canvas-color-hex-input"
            />
          </label>
        </div>}
      </div>
      {!multi && openGroup !== 'color' && !isDraw && <>
      {openGroup === 'text' && <CanvasInspectorText s={s} isDarkMode={isDarkMode} editing={editing} installedFontFamilies={installedFontFamilies} patchSelected={patchSelected} applyFormat={applyFormat} applyList={applyList} applyCustomFontFamily={applyCustomFontFamily} />}
      {((openGroup === 'arrange' && s.type === 'card') || (openGroup === 'arrow' && s.type === 'arrow')) && <div className={`flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${isDarkMode ? 'border-slate-700' : 'border-slate-100'}`}>
        {s.type === 'card' && <><div className={`w-px h-6 ${isDarkMode ? 'bg-slate-700' : 'bg-slate-200'}`} /><input type="text" title="카드 Type" aria-label="카드 Type" value={s.category ?? ''} placeholder="TYPE" onPointerDown={event => event.stopPropagation()} onChange={event => patchSelected({ category: event.target.value.toUpperCase() })} className={`h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${isDarkMode ? 'bg-slate-950 border-slate-700 text-slate-200' : 'bg-white border-slate-200 text-slate-700'}`} /></>}
        {s.type === 'arrow' && <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1">{groupLabel('경로')}{segment('직선', (s.routing ?? 'straight') === 'straight', () => patchSelected({ routing: 'straight', bend: 0, orthogonalVariant: undefined, orthogonalWaypoints: undefined }), '직선')}{segment('직각', s.routing === 'orthogonal', () => patchSelected({ routing: 'orthogonal', bend: 0, orthogonalVariant: undefined, orthogonalWaypoints: undefined }), '직각: 자동으로 장애물 회피')}{segment('곡선', (s.routing ?? '') === 'curved', () => patchSelected({ routing: 'curved', bend: s.bend || 60, orthogonalVariant: undefined, orthogonalWaypoints: undefined }), '곡선')}{manualOrthogonal && segment('자동', false, () => patchSelected({ routing: 'orthogonal', orthogonalVariant: undefined, orthogonalWaypoints: undefined }), '직각 경로를 자동으로 다시 계산')}</div>
          <div className="flex items-center gap-1">{groupLabel('선')}{segment('—', (s.strokeStyle ?? 'solid') === 'solid', () => patchSelected({ strokeStyle: 'solid' }), '실선')}{segment('- -', s.strokeStyle === 'dashed', () => patchSelected({ strokeStyle: 'dashed' }), '파선')}{segment('···', s.strokeStyle === 'dotted', () => patchSelected({ strokeStyle: 'dotted' }), '점선')}</div>
          <div className="flex items-center gap-1">{groupLabel('시작')}{segment(startCap === 'none' ? '○' : startCap === 'dot' ? '●' : '◀', startCap !== 'none', () => patchSelected({ arrowStart: startCap === 'none' ? 'arrow' : startCap === 'arrow' ? 'dot' : 'none' }), '시작점 표식', `시작점 표식: ${startCap === 'none' ? '없음' : startCap === 'dot' ? '점' : '화살표'}`)}</div>
          <div className="flex items-center gap-1">{groupLabel('끝')}{segment(endCap === 'none' ? '○' : endCap === 'dot' ? '●' : '▶', endCap !== 'none', () => patchSelected({ arrowEnd: endCap === 'arrow' ? 'dot' : endCap === 'dot' ? 'none' : 'arrow' }), '끝점 표식', `끝점 표식: ${endCap === 'none' ? '없음' : endCap === 'dot' ? '점' : '화살표'}`)}</div>
        </div>}
      </div>}
      {openGroup === 'diagram' && <div className={`pt-1.5 border-t text-[11px] opacity-70 ${isDarkMode ? 'border-slate-700' : 'border-slate-100'}`}>Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다.</div>}
      </>}
      {(multi || openGroup === 'arrange') && <div className="flex flex-wrap items-center gap-1 pointer-events-auto">
        {action(ChevronsUp, '맨 앞으로', () => selectionActions.reorderSelected('front'), true)}
        {action(ArrowUp, '앞으로', () => selectionActions.reorderSelected('forward'), true)}
        {action(ArrowDown, '뒤로', () => selectionActions.reorderSelected('backward'), true)}
        {action(ChevronsDown, '맨 뒤로', () => selectionActions.reorderSelected('back'), true)}
      </div>}
      {hasStrokeWidthControl && (multi || openGroup === 'color' || openGroup === 'arrow') && <div className={`flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${isDarkMode ? 'border-slate-700' : 'border-slate-100'}`}>
        {groupLabel('굵기')}
        {STROKE_WIDTHS.map(width => <React.Fragment key={width}>{segment(String(width), strokeWidth === width, () => patchSelected({ strokeWidth: width }), `굵기 ${width}`)}</React.Fragment>)}
      </div>}
      <div className={`canvas-selection-actions flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${isDarkMode ? 'border-slate-700' : 'border-slate-100'}`}>
        {groupLabel('선택', 'canvas-selection-label')}
        <div className="canvas-selection-action-buttons flex flex-wrap items-center gap-1 pointer-events-auto">
          {action(Group, '그룹 (Ctrl+G)', selectionActions.group, multi)}
          {action(Ungroup, '그룹 해제 (Ctrl+Shift+G)', selectionActions.ungroup, canUngroup)}
          {action(Clipboard, '복사 (Ctrl+C)', selectionActions.copySelected, true)}
          {action(ClipboardPaste, '붙여넣기 (Ctrl+V)', () => { void selectionActions.pasteClipboard(); }, true)}
          {action(Copy, '복제', selectionActions.duplicateSelected, true)}
          {action(RotateCcw, '왼쪽으로 15도 회전', () => selectionActions.rotateSelected(-ROTATION_STEP), true)}
          {action(RotateCw, '오른쪽으로 15도 회전', () => selectionActions.rotateSelected(ROTATION_STEP), true)}
          {action(Undo2, '회전 초기화', () => selectionActions.rotateSelected(0), true)}
          {action(Trash2, '삭제 (Delete)', selectionActions.deleteSelected, true, true)}
        </div>
      </div>
    </div>
  );
}
