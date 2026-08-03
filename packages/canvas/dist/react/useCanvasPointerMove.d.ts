import type { PointerLifecycleOptions } from './canvasPointerLifecycleTypes';
type PointerMoveOptions = Pick<PointerLifecycleOptions, 'containerRef' | 'pointers' | 'interactionRef' | 'cameraRef' | 'shapesRef' | 'setCamera' | 'setShapes' | 'setEraserPos' | 'setGuides' | 'applyInteraction' | 'selectNow' | 'expandToGroups' | 'toPage'>;
/** Binds pointer movement and applies the active drag/gesture to editor state. */
export declare function useCanvasPointerMove({ containerRef, pointers, interactionRef, cameraRef, shapesRef, setCamera, setShapes, setEraserPos, setGuides, applyInteraction, selectNow, expandToGroups, toPage, }: PointerMoveOptions): void;
export {};
//# sourceMappingURL=useCanvasPointerMove.d.ts.map