import React from 'react';
import { CANVAS_COLORS, CANVAS_COLOR_KEYS } from '../core/index.ts';
import type { CanvasColorKey, CanvasStrokeWidth } from '../core/index.ts';
import type { CanvasTool } from './InfiniteCanvas';

interface CanvasPenPaletteProps {
  tool: CanvasTool;
  activeColor: CanvasColorKey;
  drawStrokeWidth: CanvasStrokeWidth;
  isDarkMode: boolean;
  onSelectColor: (color: CanvasColorKey) => void;
  onSelectStrokeWidth: (width: CanvasStrokeWidth) => void;
}

const STROKE_WIDTHS = [2, 4, 6, 8] as const satisfies readonly CanvasStrokeWidth[];

export function CanvasPenPalette({
  tool,
  activeColor,
  drawStrokeWidth,
  isDarkMode,
  onSelectColor,
  onSelectStrokeWidth,
}: CanvasPenPaletteProps) {
  if (tool !== 'draw' && tool !== 'highlighter') return null;

  const isHighlighter = tool === 'highlighter';

  return (
    <div
      data-canvas-pen-palette="true"
      className={`absolute top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex flex-wrap items-center gap-2 px-3 py-2 rounded-2xl border shadow-xl backdrop-blur-md transition-all ${
        isDarkMode
          ? 'bg-slate-900/90 border-slate-700 text-slate-200 shadow-slate-950/40'
          : 'bg-white/90 border-slate-200 text-slate-700 shadow-slate-300/40'
      }`}
      onPointerDown={e => e.stopPropagation()}
      onClick={e => e.stopPropagation()}
    >
      <div className="flex items-center gap-1.5 pr-2 border-r border-slate-300/40 dark:border-slate-700/60">
        <span className="text-[11px] font-bold tracking-wide opacity-75">
          {isHighlighter ? '형광펜' : '펜 색상'}
        </span>
      </div>

      <div className="flex items-center gap-1.5" role="radiogroup" aria-label="펜 색상 선택">
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

      <div className="flex items-center gap-1 pl-2 border-l border-slate-300/40 dark:border-slate-700/60">
        <span className="mr-1 text-[10px] font-semibold opacity-60">두께</span>
        {STROKE_WIDTHS.map(w => {
          const isSelected = drawStrokeWidth === w;
          return (
            <button
              key={w}
              type="button"
              title={`두께 ${w}px`}
              aria-label={`두께 ${w}px`}
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
    </div>
  );
}
