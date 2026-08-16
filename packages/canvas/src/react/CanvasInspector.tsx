import React, { useLayoutEffect, useRef, useState } from 'react';
import { AlignCenter, AlignLeft, AlignRight, Bold, ChevronDown, Italic, List, ListOrdered, Minus, Plus, Underline } from 'lucide-react';
import { CANVAS_COLORS, CANVAS_COLOR_KEYS, CANVAS_FONTS } from '../core/index.ts';
import type { CanvasColorKey, CanvasStrokeWidth } from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';
import { arrowGeometry, bounds, effectiveFill, effectiveText } from './canvasGeometry';
import { pathMidpoint } from './canvasRouting';
import { CANVAS_FONT_KEYS, canvasFontFromValue, fontSizeForShape, textAlignForShape } from './canvasText';
import { CANVAS_UI_COLORS } from './theme';
import { getInspectorGroups, type InspectorGroup } from './canvasDiagram';
import { CanvasColorWheel, colorToHex } from './CanvasColorWheel';

interface Camera { x: number; y: number; z: number }
interface CanvasInspectorProps {
  shape: CanvasShape;
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
  shape: s, shapes, camera, canvasSize, isDarkMode, editing, showPalette,
  installedFontFamilies, setShowPalette, setActiveColor, patchSelected,
  applyFormat, applyList, applyCustomFontFamily,
}: CanvasInspectorProps) {
  const btn = isDarkMode ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100';
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
  }, [editing, installedFontFamilies.length, isDarkMode, s, showPalette]);
  const toolbarWidth = inspectorSize.width;
  const toolbarHeight = inspectorSize.height;
  const selected = bounds(s);
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
  const size = fontSizeForShape(s);
  const strokeWidth = inspectorStrokeWidth(s);
  const hasStrokeWidthControl = supportsStrokeWidth(s);
  const groups = getInspectorGroups(s);
  const defaultGroup: InspectorGroup = s.type === 'arrow' ? 'arrow' : (groups[0] ?? 'color');
  const [openGroup, setOpenGroup] = useState<InspectorGroup>(defaultGroup);
  useLayoutEffect(() => {
    if (!groups.includes(openGroup)) setOpenGroup(defaultGroup);
  }, [defaultGroup, groups, openGroup]);
  const manualOrthogonal = s.type === 'arrow' && Boolean(s.orthogonalWaypoints?.length);
  const startCap = s.type === 'arrow' ? (s.arrowStart ?? 'none') : 'none';
  const endCap = s.type === 'arrow' ? (s.arrowEnd ?? 'arrow') : 'arrow';
  const segment = (label: string, active: boolean, onClick: () => void, title: string, ariaLabel = title) => <button type="button" title={title} aria-label={ariaLabel} onClick={onClick} className={`h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${active ? 'bg-blue-600 text-white' : btn}`}>{label}</button>;
  const groupLabel = (label: string) => <span className="px-1 text-[10px] font-semibold tracking-wide opacity-60">{label}</span>;
  const groupNames: Record<InspectorGroup, string> = { color: '색상', text: '텍스트', arrow: '선', arrange: '정렬', diagram: 'Diagram' };

  return (
    <div ref={inspectorRef} data-canvas-inspector={isDraw ? 'draw' : 'text'} className={`absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${isDarkMode ? 'bg-slate-900/95 border-slate-700 text-slate-200' : 'bg-white/95 border-slate-200 text-slate-700'}`} style={{ left: position.left, top: position.top }} onPointerDown={event => { event.stopPropagation(); const target = event.target instanceof Element ? event.target : null; if (!target?.closest('input, select, textarea')) event.preventDefault(); }} onClick={event => event.stopPropagation()}>
      <div className="flex flex-wrap items-center gap-1 pointer-events-auto" role="tablist" aria-label="선택 개체 도구 그룹">
        {groups.map(group => <button key={group} type="button" role="tab" aria-selected={openGroup === group} onClick={() => setOpenGroup(group)} className={`h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${openGroup === group ? 'bg-blue-600 text-white' : btn}`}>{groupNames[group]}</button>)}
      </div>
      <div className="relative flex items-center gap-1.5 pointer-events-none" style={{ display: openGroup === 'color' || isDraw ? undefined : 'none' }}>
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
      {openGroup !== 'color' && !isDraw && <>
      <div className="flex flex-wrap items-center gap-2 pointer-events-none">
        <span className="pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60">텍스트</span>
        <label title="글씨 색" className="pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm" style={{ background: effectiveText(s), color: CANVAS_UI_COLORS.white, mixBlendMode: 'normal' }}><span aria-hidden="true">A</span><input data-canvas-control="text-color" type="color" value={s.textColor ?? effectiveText(s)} onChange={event => patchSelected({ textColor: event.target.value })} className="absolute inset-0 opacity-0 cursor-pointer" /></label>
        <div className={`pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${isDarkMode ? 'border-slate-700 bg-slate-950/60' : 'border-slate-200 bg-slate-50'}`}><span className="px-1 text-[10px] font-medium opacity-60">크기</span><button type="button" title="글씨 작게" aria-label="글씨 작게" onClick={() => patchSelected({ fontSize: Math.max(8, size - 2) })} className={`pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${btn}`}><Minus className="w-3.5 h-3.5" /></button><span className="pointer-events-none w-8 text-center text-xs font-semibold tabular-nums">{size}</span><button type="button" title="글씨 크게" aria-label="글씨 크게" onClick={() => patchSelected({ fontSize: Math.min(96, size + 2) })} className={`pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${btn}`}><Plus className="w-3.5 h-3.5" /></button></div>
        <label className={`pointer-events-auto relative flex items-center h-8 rounded-lg border ${isDarkMode ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-200'}`}><select title="글꼴" aria-label="글꼴" value={s.fontFamily ?? 'sans'} onChange={event => { const value = canvasFontFromValue(event.target.value); patchSelected(value === 'custom' ? { fontFamily: 'custom', customFontFamily: s.customFontFamily } : { fontFamily: value, customFontFamily: undefined }); }} className={`h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>{CANVAS_FONT_KEYS.map(key => <option key={key} value={key} className={isDarkMode ? 'bg-slate-900 text-slate-200' : 'bg-white text-slate-800'}>{CANVAS_FONTS[key].label}</option>)}</select><ChevronDown className="pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" /></label>
        {s.fontFamily === 'custom' && <><input type="text" list={`canvas-font-families-${s.id}`} title="폰트 직접입력" aria-label="폰트 직접입력" defaultValue={s.customFontFamily ?? ''} onBlur={event => applyCustomFontFamily(event.target.value)} onChange={event => event.currentTarget.value && applyCustomFontFamily(event.currentTarget.value)} onKeyDown={event => { if (event.key === 'Enter') { event.preventDefault(); applyCustomFontFamily(event.currentTarget.value); } }} onDoubleClick={event => event.stopPropagation()} onPointerDown={event => event.stopPropagation()} placeholder="Noto Sans KR" className={`pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${isDarkMode ? 'bg-slate-950 border-slate-700' : 'bg-white border-slate-200'}`} /><datalist id={`canvas-font-families-${s.id}`}>{installedFontFamilies.map(font => <option key={font} value={font} />)}</datalist></>}
      </div>
      <div className={`flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${isDarkMode ? 'border-slate-700' : 'border-slate-100'}`}><span className="pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60">문단</span><div className={`pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${isDarkMode ? 'bg-slate-950/70' : 'bg-slate-50'}`}>{([['left', AlignLeft, '왼쪽 정렬'], ['center', AlignCenter, '가운데 정렬'], ['right', AlignRight, '오른쪽 정렬']] as const).map(([alignment, Icon, label]) => <button key={alignment} type="button" aria-label={label} title={label} onClick={() => patchSelected({ textAlign: alignment })} className={`pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${textAlignForShape(s) === alignment ? 'bg-blue-600 text-white shadow-sm' : btn}`}><Icon className="w-4 h-4" /></button>)}</div>{editing && <><span className="pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60">목록</span><div className={`pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${isDarkMode ? 'bg-slate-950/70' : 'bg-slate-50'}`}>{([['bullet', List, '글머리표 목록'], ['dash', null, '대시 목록'], ['number', ListOrdered, '번호 목록']] as const).map(([kind, Icon, label]) => <button key={kind} type="button" onClick={() => applyList(kind)} aria-label={label} title={label} className={`pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${btn}`}>{Icon ? <Icon className="w-4 h-4" /> : <span className="text-base leading-none">–</span>}</button>)}</div><div className={`pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${isDarkMode ? 'bg-slate-950/70' : 'bg-slate-50'}`}>{([{ cmd: 'bold' as const, Icon: Bold, label: '굵게' }, { cmd: 'italic' as const, Icon: Italic, label: '기울임' }, { cmd: 'underline' as const, Icon: Underline, label: '밑줄' }]).map(({ cmd, Icon, label }) => <button key={cmd} type="button" onClick={() => applyFormat(cmd)} aria-label={label} title={label} className={`pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${btn}`}><Icon className="w-4 h-4" /></button>)}</div></>}</div>
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
      {hasStrokeWidthControl && <div className={`flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-none ${isDarkMode ? 'border-slate-700' : 'border-slate-100'}`}>
        {groupLabel('굵기')}
        {STROKE_WIDTHS.map(width => <React.Fragment key={width}>{segment(String(width), strokeWidth === width, () => patchSelected({ strokeWidth: width }), `굵기 ${width}`)}</React.Fragment>)}
      </div>}
    </div>
  );
}
