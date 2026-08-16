import type { PointerLifecycleOptions } from './canvasPointerLifecycleTypes';
type PointerFinishOptions = Pick<PointerLifecycleOptions, 'pointers' | 'interactionRef' | 'cameraRef' | 'toPage' | 'shapesRef' | 'setShapes' | 'setEditingId' | 'setEraserPos' | 'setGuides' | 'setAnnouncement' | 'applyInteraction' | 'selectNow' | 'endHistory' | 'commit' | 'onToolChange' | 'createId'> & Required<Pick<PointerLifecycleOptions, 'pendingDrawPointsRef' | 'drawRafRef' | 'rawDrawPointerIdsRef'>>;
/** Binds pointer completion/cancellation and commits the completed gesture. */
export declare function useCanvasPointerFinish({ pointers, interactionRef, cameraRef, toPage, shapesRef, setShapes, setEditingId, setEraserPos, setGuides, setAnnouncement, applyInteraction, selectNow, endHistory, commit, onToolChange, createId, pendingDrawPointsRef, drawRafRef, rawDrawPointerIdsRef, }: PointerFinishOptions): void;
export {};
//# sourceMappingURL=useCanvasPointerFinish.d.ts.map