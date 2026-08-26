import type { Dispatch, PointerEvent as ReactPointerEvent, RefObject, SetStateAction } from 'react';
import type { CanvasColorKey, CanvasShapeType, CanvasStrokeWidth } from '../core/index.js';
import type { CanvasShape, CanvasTool } from './InfiniteCanvas';
import { type Camera, type Interaction, type PointerPosition } from './canvasPointerTypes';
interface PointerDownOptions {
    containerRef: RefObject<HTMLDivElement | null>;
    editorRef: RefObject<HTMLDivElement | null>;
    pointers: RefObject<Map<number, PointerPosition>>;
    interactionRef: RefObject<Interaction>;
    editingIdRef: RefObject<string | null>;
    cameraRef: RefObject<Camera>;
    shapesRef: RefObject<CanvasShape[]>;
    toolRef: RefObject<CanvasTool>;
    activeColorRef: RefObject<CanvasColorKey>;
    drawColorRef: RefObject<CanvasColorKey>;
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
    liveStrokeCanvasRef: RefObject<HTMLCanvasElement | null>;
    activeDrawRef: RefObject<CanvasShape | null>;
    pendingDrawsRef: RefObject<CanvasShape[]>;
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
export declare function useCanvasPointerDown({ containerRef, editorRef, pointers, interactionRef, editingIdRef, cameraRef, shapesRef, toolRef, activeColorRef, drawColorRef, drawStrokeWidth, camera, shapes, selected, isSpaceDown, textualTypes, setShapes, setEditingId, applyInteraction, selectNow, beginHistory, commit, onToolChange, expandToGroups, toPage, createId, liveStrokeCanvasRef, activeDrawRef, pendingDrawsRef, }: PointerDownOptions): PointerDownHandlers;
export {};
//# sourceMappingURL=useCanvasPointerDown.d.ts.map