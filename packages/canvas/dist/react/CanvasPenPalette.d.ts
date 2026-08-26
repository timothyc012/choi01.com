import React from 'react';
import type { CanvasColorKey, CanvasStrokeWidth } from '../core/index.js';
import type { CanvasTool } from './InfiniteCanvas';
interface CanvasPenPaletteProps {
    tool: CanvasTool;
    activeColor: CanvasColorKey;
    drawStrokeWidth: CanvasStrokeWidth;
    isDarkMode: boolean;
    onSelectColor: (color: CanvasColorKey) => void;
    onSelectStrokeWidth: (width: CanvasStrokeWidth) => void;
}
export declare function CanvasPenPalette({ tool, activeColor, drawStrokeWidth, isDarkMode, onSelectColor, onSelectStrokeWidth, }: CanvasPenPaletteProps): React.JSX.Element | null;
export {};
//# sourceMappingURL=CanvasPenPalette.d.ts.map