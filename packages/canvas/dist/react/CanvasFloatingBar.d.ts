import React from 'react';
import type { CanvasColorKey } from '../core/index.js';
import type { CanvasShape } from './InfiniteCanvas';
import type { CanvasSelectionActions } from './useCanvasSelectionActions';
interface Camera {
    x: number;
    y: number;
    z: number;
}
interface CanvasFloatingBarProps {
    /** Everything the bar acts on: one shape, or the whole multi-selection. */
    selection: readonly CanvasShape[];
    selectionActions: CanvasSelectionActions;
    camera: Camera;
    canvasSize: {
        width: number;
        height: number;
    };
    isDarkMode: boolean;
    setActiveColor: (color: CanvasColorKey) => void;
    patchSelected: (patch: Partial<CanvasShape>) => void;
    onOpenInspector: () => void;
}
/**
 * Compact action strip that floats over the selection in screen space. It
 * shares the inspector's action surface (`patchSelected` and the selection
 * actions) so the two can never disagree about a command.
 */
export declare function CanvasFloatingBar({ selection, selectionActions, camera, canvasSize, isDarkMode, setActiveColor, patchSelected, onOpenInspector, }: CanvasFloatingBarProps): React.JSX.Element;
export {};
//# sourceMappingURL=CanvasFloatingBar.d.ts.map