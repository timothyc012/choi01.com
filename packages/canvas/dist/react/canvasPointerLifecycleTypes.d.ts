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
}
//# sourceMappingURL=canvasPointerLifecycleTypes.d.ts.map