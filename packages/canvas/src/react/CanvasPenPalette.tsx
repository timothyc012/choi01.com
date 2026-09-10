import React from 'react';
import { CANVAS_COLORS, CANVAS_COLOR_KEYS } from '../core/index.ts';
import type { CanvasColorKey, CanvasInkStyle, CanvasStrokeWidth } from '../core/index.ts';
import type { CanvasTool } from './InfiniteCanvas';

interface CanvasPenPaletteProps {
  tool: CanvasTool;
  activeColor: CanvasColorKey;
  drawStrokeWidth: CanvasStrokeWidth;
  drawInkStyle: CanvasInkStyle;
  objectSnapEnabled: boolean;
  onSelectInkStyle: (style: CanvasInkStyle) => void;
  onSelectObjectSnap: (enabled: boolean) => void;
  isDarkMode: boolean;
  onSelectColor: (color: CanvasColorKey) => void;
  onSelectStrokeWidth: (width: CanvasStrokeWidth) => void;
}

const STROKE_WIDTHS = [2, 4, 6, 8] as const satisfies readonly CanvasStrokeWidth[];

export function CanvasPenPalette({
  tool,
  activeColor,
  drawStrokeWidth,
  drawInkStyle,
  objectSnapEnabled,
  onSelectInkStyle,
  onSelectObjectSnap,
  isDarkMode,
  onSelectColor,
  onSelectStrokeWidth,
}: CanvasPenPaletteProps) {
  const isDrawing = tool === 'draw' || tool === 'highlighter';
  const settingClass = `rounded-lg px-2 py-1 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
    isDarkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'
  }`;
  const snapControl = (
    <button
      type="button"
      aria-label="개체 정렬"
      aria-pressed={objectSnapEnabled}
      title="개체 이동 시 주변 개체에 자동 정렬"
      className={settingClass}
      style={{ minHeight: 28, whiteSpace: 'nowrap' }}
      onClick={() => onSelectObjectSnap(!objectSnapEnabled)}
    >개체 정렬 {objectSnapEnabled ? '켬' : '끔'}</button>
  );
  if (!isDrawing) return null;

  const isHighlighter = tool === 'highlighter';

  return (
    <div
      data-canvas-pen-palette="true"
      aria-label={isHighlighter ? '형광펜 설정' : '펜 설정'}
      style={{ left: '50%', transform: 'translateX(-50%)', width: 340, maxWidth: 'calc(100% - 32px)', boxSizing: 'border-box', justifyContent: 'center' }}
      className={`absolute top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex flex-wrap items-center gap-2 px-3 py-2 rounded-2xl border shadow-xl backdrop-blur-md ${
        isDarkMode
          ? 'bg-slate-900/90 border-slate-700 text-slate-200 shadow-slate-950/40'
          : 'bg-white/90 border-slate-200 text-slate-700 shadow-slate-300/40'
      }`}
      onPointerDown={e => e.stopPropagation()}
      onClick={e => e.stopPropagation()}
    >
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }} role="radiogroup" aria-label="펜 색상 선택">
        {CANVAS_COLOR_KEYS.map(key => {
          const colorDef = CANVAS_COLORS[key];
          const isSelected = activeColor === key;
          return (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={isSelected}
              title={`${colorDef.label} 선택`}
              aria-label={colorDef.label}
              onClick={() => onSelectColor(key)}
              className={`group relative w-6 h-6 rounded-full transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                isSelected ? 'scale-110 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900' : 'hover:scale-105 opacity-90 hover:opacity-100'
              }`}
              style={{
                backgroundColor: colorDef.border,
                borderColor: colorDef.border,
              }}
            >
              {isSelected && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-1">
        <span className={`mr-1 text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-500'}`}>두께</span>
        {STROKE_WIDTHS.map(w => {
          const isSelected = drawStrokeWidth === w;
          return (
            <button
              key={w}
              type="button"
              title={`두께 ${w}px`}
              aria-label={`두께 ${w}px`}
              aria-pressed={isSelected}
              onClick={() => onSelectStrokeWidth(w)}
              className={`w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-semibold transition-colors ${
                isSelected
                  ? 'bg-blue-600 text-white font-bold'
                  : isDarkMode
                    ? 'hover:bg-slate-800 text-slate-300'
                    : 'hover:bg-slate-100 text-slate-700'
              }`}
            >
              <span
                className="rounded-full bg-current"
                style={{ width: `${Math.max(3, w + 1)}px`, height: `${Math.max(3, w + 1)}px` }}
              />
            </button>
          );
        })}
      </div>
      <div role="group" aria-label="새 획 보정" style={{ display: 'flex', gap: 2 }}>
        {(['raw', 'smoothed'] as const).map(style => (
          <button
            key={style}
            type="button"
            aria-label={style === 'raw' ? '보정 끔' : '보정 켬'}
            aria-pressed={drawInkStyle === style}
            title="새로 그리는 획에 적용"
            onClick={() => onSelectInkStyle(style)}
            className={settingClass}
            style={{ minHeight: 28, whiteSpace: 'nowrap', ...(drawInkStyle === style ? { background: '#2563eb', color: '#ffffff' } : {}) }}
          >{style === 'raw' ? '보정 끔' : '보정 켬'}</button>
        ))}
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>{snapControl}</div>
    </div>
  );
}
