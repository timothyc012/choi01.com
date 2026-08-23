import type { Dispatch, PointerEvent as ReactPointerEvent, RefObject, SetStateAction } from 'react';
import type { CanvasColorKey, CanvasShapeType, CanvasStrokeWidth } from '../core/index.js';
import type { CanvasShape, CanvasTool } from './InfiniteCanvas';
import { type Camera, type Interaction, type PointerPosition } from './canvasPointerTypes';
interface PointerDownOptions {
    containerRef: RefObject<HTMLDivElement | null>;
    editorRef: RefObject<HTMLDivElement | null>;
    pointers: RefObject<Map<number, PointerPosition>>;
    interactionRef: RefObject<Interaction>;
    cameraRef: RefObject<Camera>;
    shapesRef: RefObject<CanvasShape[]>;
    editingIdRef: RefObject<string | null>;
    toolRef: RefObject<CanvasTool>;
    activeColorRef: RefObject<CanvasColorKey>;
    drawStrokeWidth: CanvasStrokeWidth;
    camera: Camera;
    shapes: CanvasShape[];
    selected: Set<string>;
    isSpaceDown: boolean;
    textualTypes: readonly CanvasShapeType[];
    setShapes: Dispatch<SetStateAction<CanvasShape[]>>;
    setEditingId: Dispatch<SetStateAction<string | null>>;
    applyInteraction: (next: Interaction) => void;
    selectNow: (next: Set<string>) => void;
    beginHistory: () => void;
    commit: (next: CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[])) => void;
    onToolChange: (tool: CanvasTool) => void;
    expandToGroups: (ids: Set<string>) => Set<string>;
    toPage: (clientX: number, clientY: number) => {
        x: number;
        y: number;
    };
    createId: (prefix?: string) => string;
}
export interface PointerDownHandlers {
    onPointerDown: (event: ReactPointerEvent) => void;
    onResizeHandleDown: (event: ReactPointerEvent, shape: CanvasShape, handle: string) => void;
    onRotateHandleDown: (event: ReactPointerEvent, shape: CanvasShape) => void;
    onConnectHandleDown: (event: ReactPointerEvent, shape: CanvasShape) => void;
    onBendHandleDown: (event: ReactPointerEvent, shape: CanvasShape) => void;
    onOrthogonalSegmentHandleDown: (event: ReactPointerEvent, shape: CanvasShape, segmentIndex: number) => void;
    onArrowEndpointDown: (event: ReactPointerEvent, shape: CanvasShape, endpoint: 'start' | 'end') => void;
}
export declare function useCanvasPointerDown({ containerRef, editorRef, pointers, interactionRef, cameraRef, shapesRef, editingIdRef, toolRef, activeColorRef, drawStrokeWidth, camera, shapes, selected, isSpaceDown, textualTypes, setShapes, setEditingId, applyInteraction, selectNow, beginHistory, commit, onToolChange, expandToGroups, toPage, createId, }: PointerDownOptions): PointerDownHandlers;
export {};
//# sourceMappingURL=useCanvasPointerDown.d.ts.map