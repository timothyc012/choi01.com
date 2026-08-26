import type { Dispatch, ForwardedRef, RefObject, SetStateAction } from 'react';
import type { CanvasColorKey, CanvasStrokeWidth, CanvasTool } from '../core/index.js';
import type { CanvasShape, CanvasSnapshot, InfiniteCanvasHandle } from './InfiniteCanvas';
import type { CanvasSelectionActions } from './useCanvasSelectionActions';
type Camera = CanvasSnapshot['camera'];
type ShapeUpdater = CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[]);
interface UseCanvasImperativeHandleOptions {
    ref: ForwardedRef<InfiniteCanvasHandle>;
    containerRef: RefObject<HTMLDivElement | null>;
    shapesRef: RefObject<CanvasShape[]>;
    cameraRef: RefObject<Camera>;
    toolRef: RefObject<CanvasTool | 'highlighter'>;
    activeColorRef: RefObject<CanvasColorKey>;
    drawColorRef: RefObject<CanvasColorKey>;
    setDrawColor: (color: CanvasColorKey) => void;
    setActiveColor: (color: CanvasColorKey) => void;
    past: RefObject<CanvasShape[][]>;
    future: RefObject<CanvasShape[][]>;
    controlled: boolean;
    isDarkMode: boolean;
    minZoom: number;
    maxZoom: number;
    onToolChange: (tool: CanvasTool) => void;
    setSelectedStrokeWidth: (strokeWidth: CanvasStrokeWidth) => void;
    onDirty: () => void;
    commit: (next: ShapeUpdater) => void;
    selectNow: (selection: Set<string>) => void;
    selectionActions: CanvasSelectionActions;
    viewportCentre: () => {
        x: number;
        y: number;
    };
    setShapes: (updater: SetStateAction<CanvasShape[]>) => void;
    setLocalShapes: Dispatch<SetStateAction<CanvasShape[]>>;
    setCamera: Dispatch<SetStateAction<Camera>>;
    setEditingId: Dispatch<SetStateAction<string | null>>;
    setAnnouncement: Dispatch<SetStateAction<string>>;
    createId: (prefix?: string) => string;
}
export declare function useCanvasImperativeHandle({ ref, containerRef, shapesRef, cameraRef, toolRef, activeColorRef, drawColorRef, setDrawColor, setActiveColor, past, future, controlled, isDarkMode, minZoom, maxZoom, onToolChange, setSelectedStrokeWidth, onDirty, commit, selectNow, selectionActions, viewportCentre, setShapes, setLocalShapes, setCamera, setEditingId, setAnnouncement, createId, }: UseCanvasImperativeHandleOptions): void;
export {};
//# sourceMappingURL=useCanvasImperativeHandle.d.ts.map