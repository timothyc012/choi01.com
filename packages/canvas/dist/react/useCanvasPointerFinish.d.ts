import type { PointerLifecycleOptions } from './canvasPointerLifecycleTypes';
type PointerFinishOptions = Pick<PointerLifecycleOptions, 'pointers' | 'interactionRef' | 'shapesRef' | 'setShapes' | 'setEditingId' | 'setEraserPos' | 'setGuides' | 'setAnnouncement' | 'applyInteraction' | 'selectNow' | 'endHistory' | 'commit' | 'onToolChange' | 'createId'>;
/** Binds pointer completion/cancellation and commits the completed gesture. */
export declare function useCanvasPointerFinish({ pointers, interactionRef, shapesRef, setShapes, setEditingId, setEraserPos, setGuides, setAnnouncement, applyInteraction, selectNow, endHistory, commit, onToolChange, createId, }: PointerFinishOptions): void;
export {};
//# sourceMappingURL=useCanvasPointerFinish.d.ts.map