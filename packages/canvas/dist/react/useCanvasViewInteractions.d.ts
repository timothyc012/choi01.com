import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { CanvasShapeType, CanvasTool } from '../core/index.js';
import type { CanvasSelectionInfo, CanvasShape } from './InfiniteCanvas';
import type { Interaction, PointerPosition } from './canvasPointerTypes';
interface Camera {
    x: number;
    y: number;
    z: number;
}
interface ViewInteractionsOptions {
    containerRef: RefObject<HTMLDivElement | null>;
    camera: Camera;
    interactionRef: RefObject<Interaction>;
    toolRef: RefObject<CanvasTool | 'highlighter'>;
    pointers: RefObject<Map<number, PointerPosition>>;
    shapesRef: RefObject<CanvasShape[]>;
    setCamera: Dispatch<SetStateAction<Camera>>;
    minZoom: number;
    maxZoom: number;
    shapes: CanvasShape[];
    selected: Set<string>;
    editingId: string | null;
    textualTypes: readonly CanvasShapeType[];
    onZoomChange?: (zoom: number) => void;
    onSelectionChange?: (info: CanvasSelectionInfo) => void;
    onLocalCursor?: (page: {
        x: number;
        y: number;
    } | null) => void;
    toPage: (clientX: number, clientY: number) => {
        x: number;
        y: number;
    };
}
interface ViewInteractionsResult {
    selectionInfo: CanvasSelectionInfo;
    /** Every shape the inspector acts on. Empty when no panel should render. */
    inspectorSelection: readonly CanvasShape[];
    /** Shape under the pointer (select tool only); drives edge connect dots. */
    hoveredShapeId: string | null;
    inspectorShape: CanvasShape | null;
    onContainerPointerMove?: (event: React.PointerEvent) => void;
    onContainerPointerLeave?: () => void;
}
/** Owns camera wheel input and view-only selection, inspector, and presence derivations. */
export declare function useCanvasViewInteractions({ containerRef, camera, interactionRef, toolRef, pointers, shapesRef, setCamera, minZoom, maxZoom, shapes, selected, editingId, textualTypes, onZoomChange, onSelectionChange, onLocalCursor, toPage, }: ViewInteractionsOptions): ViewInteractionsResult;
export {};
//# sourceMappingURL=useCanvasViewInteractions.d.ts.map