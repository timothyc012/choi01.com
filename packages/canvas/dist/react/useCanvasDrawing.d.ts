import type { CanvasShape } from './InfiniteCanvas';
import type { PointerLifecycleOptions } from './canvasPointerLifecycleTypes';
export interface CanvasDrawingHandlers {
    start: (shape: CanvasShape, event: {
        pointerId: number;
    }) => void;
    move: (event: PointerEvent) => void;
    finish: (event?: PointerEvent, immediate?: boolean) => void;
    cancel: () => void;
}
type DrawingOptions = Pick<PointerLifecycleOptions, 'containerRef' | 'pointers' | 'interactionRef' | 'cameraRef' | 'toPage' | 'applyInteraction' | 'liveStrokeCanvasRef' | 'activeDrawRef' | 'pendingDrawsRef' | 'queuedDrawIdsRef' | 'commitDrawBatch'>;
/** Owns the complete lifetime of an ink stroke, including interrupted contacts. */
export declare function useCanvasDrawing(options: DrawingOptions): CanvasDrawingHandlers;
export {};
//# sourceMappingURL=useCanvasDrawing.d.ts.map