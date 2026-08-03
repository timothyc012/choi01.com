import type { Dispatch, ForwardedRef, RefObject, SetStateAction } from 'react';
import type { CanvasTool } from '../core/index.js';
import type { CanvasShape, CanvasSnapshot, InfiniteCanvasHandle } from './InfiniteCanvas';
type Camera = CanvasSnapshot['camera'];
type ShapeUpdater = CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[]);
interface UseCanvasImperativeHandleOptions {
    ref: ForwardedRef<InfiniteCanvasHandle>;
    containerRef: RefObject<HTMLDivElement | null>;
    shapesRef: RefObject<CanvasShape[]>;
    cameraRef: RefObject<Camera>;
    selectedRef: RefObject<Set<string>>;
    past: RefObject<CanvasShape[][]>;
    future: RefObject<CanvasShape[][]>;
    controlled: boolean;
    isDarkMode: boolean;
    minZoom: number;
    maxZoom: number;
    onToolChange: (tool: CanvasTool) => void;
    onDirty: () => void;
    commit: (next: ShapeUpdater) => void;
    deleteSelection: (selection: Set<string>) => boolean;
    selectNow: (selection: Set<string>) => void;
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
export declare function useCanvasImperativeHandle({ ref, containerRef, shapesRef, cameraRef, selectedRef, past, future, controlled, isDarkMode, minZoom, maxZoom, onToolChange, onDirty, commit, deleteSelection, selectNow, viewportCentre, setShapes, setLocalShapes, setCamera, setEditingId, setAnnouncement, createId, }: UseCanvasImperativeHandleOptions): void;
export {};
//# sourceMappingURL=useCanvasImperativeHandle.d.ts.map