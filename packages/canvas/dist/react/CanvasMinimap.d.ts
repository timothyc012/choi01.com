import React from 'react';
import type { CanvasShape } from './InfiniteCanvas';
import type { Camera } from './canvasPointerTypes';
interface CanvasMinimapProps {
    shapes: CanvasShape[];
    camera: Camera;
    isDarkMode: boolean;
    /** Centres the camera on a canvas point. */
    onCenter: (point: {
        x: number;
        y: number;
    }) => void;
    /** Canvas viewport size in screen px (the parent container's box). */
    viewSize: {
        width: number;
        height: number;
    };
}
/** 180×120 overview in the bottom-right corner; click/drag re-centres the view. */
export declare function CanvasMinimap({ shapes, camera, isDarkMode, viewSize, onCenter }: CanvasMinimapProps): React.JSX.Element;
export {};
//# sourceMappingURL=CanvasMinimap.d.ts.map