import { reorderShapes, rotateShapes, withNoteChildren, type LayerDirection } from './canvasLayerActions';
import { useMemo } from 'react';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import { parseCanvasShape } from '../core/index.ts';
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

/** Offset applied to duplicated shapes so the copy is visibly distinct. */
const DUPLICATE_OFFSET = 24;
const CLIPBOARD_MARKER = 'choi01-canvas-selection';

function copyShapeData(shape: CanvasShape): CanvasShape {
  return {
    ...shape,
    points: shape.points?.map(([x, y]) => [x, y] as [number, number]),
    orthogonalWaypoints: shape.type === 'arrow' && shape.orthogonalWaypoints
      ? shape.orthogonalWaypoints.map(point => ({ ...point }))
      : undefined,
  };
}

function parseClipboardText(value: string): CanvasShape[] | null {
  try {
    const input: unknown = JSON.parse(value);
    if (!input || typeof input !== 'object' || !('marker' in input) || input.marker !== CLIPBOARD_MARKER
      || !('shapes' in input) || !Array.isArray(input.shapes)) return null;
    return input.shapes.map(shape => parseCanvasShape(shape) as CanvasShape);
  } catch {
    return null;
  }
}

/**
 * Owns delete/duplicate/group/ungroup for the current selection. The toolbar
 * (imperative handle) and the floating inspector both drive the same code so
 * the two surfaces can never disagree about what a command does.
 */
export function useCanvasSelectionActions({
  containerRef,
  shapesRef,
  clipboardRef,
  selectedRef,
  commit,
  deleteSelection,
  selectNow,
  setAnnouncement,
  createId,
}: SelectionActionOptions): CanvasSelectionActions {
  return useMemo(() => ({
    copySelected: () => {
      const selected = withNoteChildren(shapesRef.current, selectedRef.current);
      const copied = shapesRef.current.filter(shape => selected.has(shape.id)).map(copyShapeData);
      if (copied.length === 0) return;
      clipboardRef.current = copied;
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        void navigator.clipboard.writeText(JSON.stringify({ marker: CLIPBOARD_MARKER, shapes: copied })).catch(() => {});
      }
      setAnnouncement(String(copied.length) + '개 복사됨');
    },
    pasteClipboard: async () => {
      let source = clipboardRef.current;
      if (!source && typeof navigator !== 'undefined' && navigator.clipboard?.readText) {
        try { source = parseClipboardText(await navigator.clipboard.readText()); } catch { source = null; }
      }
      if (!source || source.length === 0) {
        setAnnouncement('붙여넣을 개체가 없습니다');
        return;
      }
      const idRemap = new Map(source.map(shape => [shape.id, createId()]));
      const groupRemap = new Map<string, string>();
      const copies = source.map(shape => {
        let groupId = shape.groupId;
        if (groupId) {
          if (!groupRemap.has(groupId)) groupRemap.set(groupId, createId('g'));
          groupId = groupRemap.get(groupId);
        }
        return {
          ...copyShapeData(shape),
          id: idRemap.get(shape.id) ?? createId(),
          parentId: shape.parentId ? idRemap.get(shape.parentId) ?? shape.parentId : undefined,
          fromId: shape.fromId ? idRemap.get(shape.fromId) ?? shape.fromId : undefined,
          toId: shape.toId ? idRemap.get(shape.toId) ?? shape.toId : undefined,
          x: shape.x + DUPLICATE_OFFSET,
          y: shape.y + DUPLICATE_OFFSET,
          groupId,
          points: shape.points?.map(([x, y]) => [x + DUPLICATE_OFFSET, y + DUPLICATE_OFFSET] as [number, number]),
          orthogonalWaypoints: shape.type === 'arrow' && shape.orthogonalWaypoints
            ? shape.orthogonalWaypoints.map(point => ({ x: point.x + DUPLICATE_OFFSET, y: point.y + DUPLICATE_OFFSET }))
            : undefined,
        };
      });
      commit(previous => [...previous, ...copies]);
      selectNow(new Set(copies.map(shape => shape.id)));
      setAnnouncement(String(copies.length) + '개 붙여넣음');
    },
    rotateSelected: deltaRadians => {
      const ids = selectedRef.current;
      if (ids.size === 0) return;
      commit(previous => rotateShapes(previous, ids, deltaRadians));
      setAnnouncement(deltaRadians === 0 ? '회전 초기화됨' : '회전됨');
    },
    reorderSelected: direction => {
      const ids = selectedRef.current;
      if (ids.size === 0) return;
      commit(previous => reorderShapes(previous, ids, direction));
      setAnnouncement('레이어 순서 변경됨');
    },
    deleteSelected: () => {
      deleteSelection(selectedRef.current);
    },
    duplicateSelected: () => {
      const sel = withNoteChildren(shapesRef.current, selectedRef.current);
      if (sel.size === 0) return;
      const copies: CanvasShape[] = [];
      // Copies of a group stay grouped, but as a *new* group: reusing the
      // source groupId would silently fuse the copy into the original.
      const groupRemap = new Map<string, string>();
      const idRemap = new Map(shapesRef.current.filter(s => sel.has(s.id)).map(s => [s.id, createId()]));
      for (const s of shapesRef.current) {
        if (!sel.has(s.id)) continue;
        let groupId = s.groupId;
        if (groupId) {
          if (!groupRemap.has(groupId)) groupRemap.set(groupId, createId('g'));
          groupId = groupRemap.get(groupId);
        }
        copies.push({
          ...s,
          id: idRemap.get(s.id) ?? createId(),
          parentId: s.parentId ? idRemap.get(s.parentId) ?? s.parentId : undefined,
          fromId: s.fromId ? idRemap.get(s.fromId) ?? s.fromId : undefined,
          toId: s.toId ? idRemap.get(s.toId) ?? s.toId : undefined,
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
  }), [clipboardRef, commit, containerRef, createId, deleteSelection, selectNow, selectedRef, setAnnouncement, shapesRef]);
}
