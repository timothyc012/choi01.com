import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { CanvasShapeType, CanvasTool } from '../core/index.js';
import type { CanvasShape } from './InfiniteCanvas';
type ShapeUpdater = CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[]);
interface KeyboardInteractionOptions {
    containerRef: RefObject<HTMLDivElement | null>;
    editorRef: RefObject<HTMLDivElement | null>;
    shapesRef: RefObject<CanvasShape[]>;
    selectedRef: RefObject<Set<string>>;
    editingIdRef: RefObject<string | null>;
    toolRef: RefObject<CanvasTool>;
    past: RefObject<CanvasShape[][]>;
    future: RefObject<CanvasShape[][]>;
    textualTypes: readonly CanvasShapeType[];
    setIsSpaceDown: Dispatch<SetStateAction<boolean>>;
    setEditingId: Dispatch<SetStateAction<string | null>>;
    setShapes: Dispatch<SetStateAction<CanvasShape[]>>;
    setAnnouncement: Dispatch<SetStateAction<string>>;
    commit: (next: ShapeUpdater) => void;
    deleteSelection: (selection: Set<string>) => boolean;
    selectNow: (selection: Set<string>) => void;
    onDirty: () => void;
    onToolChange: (tool: CanvasTool) => void;
    createId: (prefix?: string) => string;
}
/** Installs keyboard shortcuts and canvas-level editing/navigation semantics. */
export declare function useCanvasKeyboardInteractions({ containerRef, editorRef, shapesRef, selectedRef, editingIdRef, toolRef, past, future, textualTypes, setIsSpaceDown, setEditingId, setShapes, setAnnouncement, commit, deleteSelection, selectNow, onDirty, onToolChange, createId, }: KeyboardInteractionOptions): void;
export {};
//# sourceMappingURL=useCanvasKeyboardInteractions.d.ts.map