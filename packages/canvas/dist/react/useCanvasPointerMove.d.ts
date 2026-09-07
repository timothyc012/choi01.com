import type { PointerLifecycleOptions } from './canvasPointerLifecycleTypes';
declare global {
    interface WindowEventMap {
        pointerrawupdate: PointerEvent;
    }
}
type PointerMoveOptions = Pick<PointerLifecycleOptions, 'containerRef' | 'pointers' | 'interactionRef' | 'cameraRef' | 'shapesRef' | 'setCamera' | 'setShapes' | 'setEraserPos' | 'setGuides' | 'applyInteraction' | 'selectNow' | 'expandToGroups' | 'toPage' | 'drawing'>;
/** Binds pointer movement and applies the active drag/gesture to editor state. */
export declare function useCanvasPointerMove({ containerRef, pointers, interactionRef, cameraRef, shapesRef, setCamera, setShapes, setEraserPos, setGuides, applyInteraction, selectNow, expandToGroups, toPage, drawing, }: PointerMoveOptions): void;
export {};
//# sourceMappingURL=useCanvasPointerMove.d.ts.map