import { useMemo } from 'react';
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

/** Offset applied to duplicated shapes so the copy is visibly distinct. */
const DUPLICATE_OFFSET = 24;

/**
 * Owns delete/duplicate/group/ungroup for the current selection. The toolbar
 * (imperative handle) and the floating inspector both drive the same code so
 * the two surfaces can never disagree about what a command does.
 */
export function useCanvasSelectionActions({
  containerRef,
  shapesRef,
  selectedRef,
  commit,
  deleteSelection,
  selectNow,
  setAnnouncement,
  createId,
}: SelectionActionOptions): CanvasSelectionActions {
  return useMemo(() => ({
    deleteSelected: () => {
      deleteSelection(selectedRef.current);
    },
    duplicateSelected: () => {
      const sel = selectedRef.current;
      if (sel.size === 0) return;
      const copies: CanvasShape[] = [];
      // Copies of a group stay grouped, but as a *new* group: reusing the
      // source groupId would silently fuse the copy into the original.
      const groupRemap = new Map<string, string>();
      for (const s of shapesRef.current) {
        if (!sel.has(s.id)) continue;
        let groupId = s.groupId;
        if (groupId) {
          if (!groupRemap.has(groupId)) groupRemap.set(groupId, createId('g'));
          groupId = groupRemap.get(groupId);
        }
        copies.push({
          ...s,
          id: createId(),
          x: s.x + DUPLICATE_OFFSET,
          y: s.y + DUPLICATE_OFFSET,
          groupId,
          points: s.points?.map(([px, py]) => [px + DUPLICATE_OFFSET, py + DUPLICATE_OFFSET] as [number, number]),
          orthogonalWaypoints: s.type === 'arrow' && s.orthogonalWaypoints
            ? s.orthogonalWaypoints.map(point => ({ x: point.x + DUPLICATE_OFFSET, y: point.y + DUPLICATE_OFFSET }))
            : undefined,
        });
      }
      commit(prev => [...prev, ...copies]);
      selectNow(new Set(copies.map(c => c.id)));
      setAnnouncement(`${copies.length}개 복제됨`);
    },
    group: () => {
      const sel = selectedRef.current;
      if (sel.size < 2) return;
      const groupId = createId('g');
      commit(prev => prev.map(s => (sel.has(s.id) ? { ...s, groupId } : s)));
      setAnnouncement(`${sel.size}개 그룹화됨`);
      containerRef.current?.focus();
    },
    ungroup: () => {
      const sel = selectedRef.current;
      if (sel.size === 0) return;
      commit(prev => prev.map(s => (sel.has(s.id) ? { ...s, groupId: undefined } : s)));
      setAnnouncement('그룹 해제됨');
      containerRef.current?.focus();
    },
  }), [commit, containerRef, createId, deleteSelection, selectNow, selectedRef, setAnnouncement, shapesRef]);
}
