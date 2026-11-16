import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { CanvasShapeType, CanvasTool } from '../core/index.js';
import type { CanvasShape } from './InfiniteCanvas';
import type { CanvasSelectionActions } from './useCanvasSelectionActions';
import type { Interaction } from './canvasPointerTypes';
/** View actions the parent supplies; every entry is optional so the hook stays usable standalone. */
export interface CanvasViewActions {
    openFind?: () => void;
    fitAll?: () => void;
    fitSelection?: () => void;
    zoomMax?: () => void;
    smartZoom?: (direction: number) => void;
    /** Select a shape and centre the camera on it when it is off screen. */
    revealShape?: (id: string) => void;
}
type ShapeUpdater = CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[]);
interface KeyboardInteractionOptions {
    containerRef: RefObject<HTMLDivElement | null>;
    editorRef: RefObject<HTMLDivElement | null>;
    shapesRef: RefObject<CanvasShape[]>;
    selectedRef: RefObject<Set<string>>;
    editingIdRef: RefObject<string | null>;
    interactionRef: RefObject<Interaction>;
    applyInteraction: (next: Interaction) => void;
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
    selectionActions: CanvasSelectionActions;
    /** Camera/find actions wired by the parent component. */
    viewActionsRef?: RefObject<CanvasViewActions | undefined>;
}
/** Installs keyboard shortcuts and canvas-level editing/navigation semantics. */
export declare function useCanvasKeyboardInteractions({ containerRef, editorRef, shapesRef, selectedRef, editingIdRef, interactionRef, applyInteraction, toolRef, past, future, textualTypes, setIsSpaceDown, setEditingId, setShapes, setAnnouncement, commit, deleteSelection, selectNow, onDirty, onToolChange, viewActionsRef, createId, selectionActions, }: KeyboardInteractionOptions): void;
export {};
//# sourceMappingURL=useCanvasKeyboardInteractions.d.ts.map