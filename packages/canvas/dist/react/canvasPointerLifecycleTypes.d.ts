import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { CanvasTool } from '../core/index.js';
import type { CanvasShape } from './InfiniteCanvas';
import type { SnapResult } from './canvasGeometry';
import type { Camera, Interaction, PointerPosition } from './canvasPointerTypes';
export interface PointerLifecycleOptions {
    containerRef: RefObject<HTMLDivElement | null>;
    pointers: RefObject<Map<number, PointerPosition>>;
    interactionRef: RefObject<Interaction>;
    cameraRef: RefObject<Camera>;
    shapesRef: RefObject<CanvasShape[]>;
    setCamera: Dispatch<SetStateAction<Camera>>;
    setShapes: Dispatch<SetStateAction<CanvasShape[]>>;
    setEditingId: Dispatch<SetStateAction<string | null>>;
    setEraserPos: Dispatch<SetStateAction<{
        x: number;
        y: number;
    } | null>>;
    setGuides: Dispatch<SetStateAction<SnapResult['guides']>>;
    setAnnouncement: Dispatch<SetStateAction<string>>;
    applyInteraction: (next: Interaction) => void;
    selectNow: (next: Set<string>) => void;
    endHistory: () => void;
    commit: (next: CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[])) => void;
    onToolChange: (tool: CanvasTool) => void;
    expandToGroups: (ids: Set<string>) => Set<string>;
    toPage: (clientX: number, clientY: number) => {
        x: number;
        y: number;
    };
    createId: (prefix?: string) => string;
    /** Samples captured since the last animation frame. Owned by the lifecycle hook. */
    pendingDrawPointsRef?: RefObject<[number, number][]>;
    drawRafRef?: RefObject<number | null>;
    /** Overlay that renders strokes not yet present in React state. */
    liveStrokeCanvasRef: RefObject<HTMLCanvasElement | null>;
    /** The stroke currently under the pen; not in `shapes` until it finishes. */
    activeDrawRef: RefObject<CanvasShape | null>;
    /** Finished strokes still waiting to appear in `shapes`. */
    pendingDrawsRef: RefObject<CanvasShape[]>;
    /** Ids handed to `commitDrawBatch`, so each stroke commits exactly once. */
    queuedDrawIdsRef: RefObject<Set<string>>;
    commitDrawBatch: (strokes: readonly CanvasShape[]) => void;
}
//# sourceMappingURL=canvasPointerLifecycleTypes.d.ts.map