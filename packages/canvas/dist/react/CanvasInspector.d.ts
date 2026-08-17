import React from 'react';
import type { CanvasColorKey } from '../core/index.js';
import type { CanvasShape } from './InfiniteCanvas';
import type { CanvasSelectionActions } from './useCanvasSelectionActions';
interface Camera {
    x: number;
    y: number;
    z: number;
}
interface CanvasInspectorProps {
    shape: CanvasShape;
    /** Everything the panel acts on: one shape, or the whole multi-selection. */
    selection: readonly CanvasShape[];
    selectionActions: CanvasSelectionActions;
    shapes: CanvasShape[];
    camera: Camera;
    canvasSize: {
        width: number;
        height: number;
    };
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
/** Selection inspector kept separate from the canvas scene for package reuse. */
export declare function CanvasInspector({ shape: s, selection, selectionActions, shapes, camera, canvasSize, isDarkMode, editing, showPalette, installedFontFamilies, setShowPalette, setActiveColor, patchSelected, applyFormat, applyList, applyCustomFontFamily, }: CanvasInspectorProps): React.JSX.Element;
export {};
//# sourceMappingURL=CanvasInspector.d.ts.map