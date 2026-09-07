import React from 'react';
import { MousePointer2 } from 'lucide-react';

interface CanvasPenModeExitProps {
  isDarkMode: boolean;
  onExit: () => void;
}

export function CanvasPenModeExit({ isDarkMode, onExit }: CanvasPenModeExitProps) {
  return (
    <button
      type="button"
      data-canvas-pen-mode-exit="true"
      aria-label="펜 모드 종료 후 선택 도구로 전환"
      onPointerDown={event => event.stopPropagation()}
      onClick={event => {
        event.stopPropagation();
        onExit();
      }}
      className={`absolute right-safe-4 bottom-safe-4 z-50 pointer-events-auto inline-flex min-h-11 items-center gap-2 rounded-2xl border px-3.5 py-2 text-sm font-semibold shadow-xl backdrop-blur-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
        isDarkMode
          ? 'border-slate-700 bg-slate-900/90 text-slate-100 shadow-slate-950/40 hover:bg-slate-800'
          : 'border-slate-200 bg-white/90 text-slate-700 shadow-slate-300/40 hover:bg-slate-50'
      }`}
    >
      <MousePointer2 aria-hidden="true" className="h-4 w-4" />
      <span>펜 모드 종료</span>
    </button>
  );
}
