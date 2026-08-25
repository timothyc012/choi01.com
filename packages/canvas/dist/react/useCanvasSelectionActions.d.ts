import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { CanvasShape } from './InfiniteCanvas';
type ShapeUpdater = CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[]);
interface SelectionActionOptions {
    containerRef: RefObject<HTMLDivElement | null>;
    shapesRef: RefObject<CanvasShape[]>;
    selectedRef: RefObject<Set<string>>;
    commit: (next: ShapeUpdater) => void;
    deleteSelection: (selection: Set<string>) => boolean;
    selectNow: (selection: Set<string>) => void;
    setAnnouncement: Dispatch<SetStateAction<string>>;
    createId: (prefix?: string) => string;
}
/** Selection-wide commands shared by the imperative handle and the inspector. */
export interface CanvasSelectionActions {
    deleteSelected: () => void;
    duplicateSelected: () => void;
    group: () => void;
    ungroup: () => void;
}
/**
 * Owns delete/duplicate/group/ungroup for the current selection. The toolbar
 * (imperative handle) and the floating inspector both drive the same code so
 * the two surfaces can never disagree about what a command does.
 */
export declare function useCanvasSelectionActions({ containerRef, shapesRef, selectedRef, commit, deleteSelection, selectNow, setAnnouncement, createId, }: SelectionActionOptions): CanvasSelectionActions;
export {};
//# sourceMappingURL=useCanvasSelectionActions.d.ts.map