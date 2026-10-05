import { type LayerDirection } from './canvasLayerActions';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { CanvasShape } from './InfiniteCanvas';
type ShapeUpdater = CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[]);
interface SelectionActionOptions {
    containerRef: RefObject<HTMLDivElement | null>;
    shapesRef: RefObject<CanvasShape[]>;
    clipboardRef: RefObject<CanvasShape[] | null>;
    selectedRef: RefObject<Set<string>>;
    commit: (next: ShapeUpdater) => void;
    deleteSelection: (selection: Set<string>) => boolean;
    selectNow: (selection: Set<string>) => void;
    setAnnouncement: Dispatch<SetStateAction<string>>;
    createId: (prefix?: string) => string;
}
/** Selection-wide commands shared by the imperative handle and the inspector. */
export interface CanvasSelectionActions {
    copySelected: () => void;
    pasteClipboard: () => Promise<void>;
    deleteSelected: () => void;
    duplicateSelected: () => void;
    rotateSelected: (deltaRadians: number) => void;
    group: () => void;
    ungroup: () => void;
    reorderSelected: (direction: LayerDirection) => void;
}
/**
 * Owns delete/duplicate/group/ungroup for the current selection. The toolbar
 * (imperative handle) and the floating inspector both drive the same code so
 * the two surfaces can never disagree about what a command does.
 */
export declare function useCanvasSelectionActions({ containerRef, shapesRef, clipboardRef, selectedRef, commit, deleteSelection, selectNow, setAnnouncement, createId, }: SelectionActionOptions): CanvasSelectionActions;
export {};
//# sourceMappingURL=useCanvasSelectionActions.d.ts.map