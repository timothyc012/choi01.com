import React from 'react';
import type { CanvasColorKey, CanvasInkStyle, CanvasStrokeWidth } from '../core/index.js';
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
export declare function CanvasPenPalette({ tool, activeColor, drawStrokeWidth, drawInkStyle, objectSnapEnabled, onSelectInkStyle, onSelectObjectSnap, isDarkMode, onSelectColor, onSelectStrokeWidth, }: CanvasPenPaletteProps): React.JSX.Element | null;
export {};
//# sourceMappingURL=CanvasPenPalette.d.ts.map