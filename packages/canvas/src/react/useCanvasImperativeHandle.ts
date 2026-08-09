import { useCallback, useImperativeHandle } from 'react';
import type { Dispatch, ForwardedRef, RefObject, SetStateAction } from 'react';
import type { CanvasTool } from '../core/index.ts';
import type { CanvasShape, CanvasSnapshot, InfiniteCanvasHandle } from './InfiniteCanvas';
import { bounds, sanitizeShapeForCanvas } from './canvasGeometry';
import { buildCanvasSvg, exportCanvasPng } from './canvasExport';
import { autoLayoutCanvas } from './canvasAutoLayout';
import { loadCanvasSnapshot } from './canvasSnapshot';

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
  viewportCentre: () => { x: number; y: number };
  setShapes: (updater: SetStateAction<CanvasShape[]>) => void;
  setLocalShapes: Dispatch<SetStateAction<CanvasShape[]>>;
  setCamera: Dispatch<SetStateAction<Camera>>;
  setEditingId: Dispatch<SetStateAction<string | null>>;
  setAnnouncement: Dispatch<SetStateAction<string>>;
  createId: (prefix?: string) => string;
}

export function useCanvasImperativeHandle({
  ref,
  containerRef,
  shapesRef,
  cameraRef,
  selectedRef,
  past,
  future,
  controlled,
  isDarkMode,
  minZoom,
  maxZoom,
  onToolChange,
  onDirty,
  commit,
  deleteSelection,
  selectNow,
  viewportCentre,
  setShapes,
  setLocalShapes,
  setCamera,
  setEditingId,
  setAnnouncement,
  createId,
}: UseCanvasImperativeHandleOptions): void {
  // --- Imperative API used by the toolbar -----------------------------------
  const addAtCentre = useCallback((shape: Omit<CanvasShape, 'id' | 'x' | 'y'> & { x?: number; y?: number }) => {
    const c = viewportCentre();
    const created = sanitizeShapeForCanvas({
      id: createId(),
      x: shape.x ?? c.x - shape.w / 2,
      y: shape.y ?? c.y - shape.h / 2,
      ...shape,
    } as CanvasShape);
    if (!created) throw new Error('Canvas could not create a valid shape.');
    commit(prev => [...prev, created]);
    selectNow(new Set([created.id]));
    onToolChange('select');
    setAnnouncement(`${created.type} 추가됨`);
    return created;
  }, [commit, createId, onToolChange, selectNow, setAnnouncement, viewportCentre]);

  const buildSvg = useCallback(() => buildCanvasSvg(shapesRef.current, isDarkMode), [isDarkMode, shapesRef]);

  useImperativeHandle(ref, () => ({
    addNote: (color) => {
      const created = addAtCentre({ type: 'note', w: 180, h: 180, color, text: '' });
      setEditingId(created.id);
    },
    addCard: (label, category, cardStyle, color) => {
      addAtCentre({ type: 'card', w: 260, h: 150, text: label, category, cardStyle, color });
    },
    addText: () => {
      const created = addAtCentre({ type: 'text', w: 220, h: 44, text: '' });
      setEditingId(created.id);
    },
    addShape: (type, color, text) => {
      addAtCentre({
        type,
        w: type === 'ellipse' ? 220 : 200,
        h: type === 'ellipse' ? 110 : 140,
        color,
        text: text ?? '',
      });
    },
    addArrow: () => {
      const c = viewportCentre();
      const created: CanvasShape = { id: createId(), type: 'arrow', x: c.x - 140, y: c.y, w: 280, h: 0 };
      commit(prev => [...prev, created]);
      selectNow(new Set([created.id]));
      onToolChange('select');
    },
    addImage: (src, fileName, w, h) => {
      addAtCentre({ type: 'image', w, h, src, fileName });
    },
    addFileCard: (fileName, src, label) => {
      addAtCentre({ type: 'rect', w: 260, h: 120, color: 'purple', text: label, src, fileName });
    },
    setTool: onToolChange,
    undo: () => {
      const prev = past.current.pop();
      if (!prev) return;
      future.current.push(shapesRef.current);
      setShapes(prev);
      selectNow(new Set());
      setEditingId(null);
      onDirty();
      setAnnouncement('실행 취소');
    },
    redo: () => {
      const next = future.current.pop();
      if (!next) return;
      past.current.push(shapesRef.current);
      setShapes(next);
      selectNow(new Set());
      setEditingId(null);
      onDirty();
      setAnnouncement('다시 실행');
    },
    deleteSelected: () => {
      deleteSelection(selectedRef.current);
    },
    duplicateSelected: () => {
      const sel = selectedRef.current;
      if (sel.size === 0) return;
      const copies: CanvasShape[] = [];
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
          x: s.x + 24,
          y: s.y + 24,
          groupId,
          points: s.points?.map(([px, py]) => [px + 24, py + 24] as [number, number]),
          orthogonalWaypoints: s.type === 'arrow' && s.orthogonalWaypoints
            ? s.orthogonalWaypoints.map(point => ({ x: point.x + 24, y: point.y + 24 }))
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
    zoomBy: (factor) => {
      setCamera(cam => {
        const rect = containerRef.current?.getBoundingClientRect();
        const z = Math.min(maxZoom, Math.max(minZoom, cam.z * factor));
        if (!rect) return { ...cam, z };
        const cx = cam.x + rect.width / 2 / cam.z;
        const cy = cam.y + rect.height / 2 / cam.z;
        return { x: cx - rect.width / 2 / z, y: cy - rect.height / 2 / z, z };
      });
    },
    zoomTo: (target) => {
      setCamera(cam => {
        const rect = containerRef.current?.getBoundingClientRect();
        const z = Math.min(maxZoom, Math.max(minZoom, target));
        if (!rect) return { ...cam, z };
        // Zoom about the viewport centre so the view doesn't jump.
        const cx = cam.x + rect.width / 2 / cam.z;
        const cy = cam.y + rect.height / 2 / cam.z;
        return { x: cx - rect.width / 2 / z, y: cy - rect.height / 2 / z, z };
      });
    },
    resetZoom: () => {
      setCamera(cam => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return { ...cam, z: 1 };
        const cx = cam.x + rect.width / 2 / cam.z;
        const cy = cam.y + rect.height / 2 / cam.z;
        return { x: cx - rect.width / 2, y: cy - rect.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      const all = shapesRef.current;
      const rect = containerRef.current?.getBoundingClientRect();
      if (all.length === 0 || !rect) return;
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      for (const s of all) {
        const b = bounds(s);
        minX = Math.min(minX, b.minX); minY = Math.min(minY, b.minY);
        maxX = Math.max(maxX, b.maxX); maxY = Math.max(maxY, b.maxY);
      }
      const pad = 80;
      const z = Math.min(maxZoom, Math.max(minZoom,
        Math.min(rect.width / (maxX - minX + pad * 2), rect.height / (maxY - minY + pad * 2))));
      setCamera({
        x: (minX + maxX) / 2 - rect.width / 2 / z,
        y: (minY + maxY) / 2 - rect.height / 2 / z,
        z,
      });
    },
    autoLayout: () => autoLayoutCanvas(shapesRef.current, commit, () => setAnnouncement('자동 배치 완료')),
    exportSvg: buildSvg,
    exportPng: () => exportCanvasPng(buildSvg),
    getSnapshot: () => ({ version: 'canvas-v1', shapes: shapesRef.current, camera: cameraRef.current }),
    loadSnapshot: snapshot => loadCanvasSnapshot(snapshot, {
      controlled,
      past,
      future,
      setLocalShapes,
      setCamera,
      selectNow,
      setEditingId,
    }),
  }), [
    addAtCentre, buildSvg, commit, createId, deleteSelection, isDarkMode, maxZoom, minZoom, onDirty,
    onToolChange, selectNow, setCamera, setEditingId, setLocalShapes, setShapes,
    setAnnouncement, viewportCentre, controlled,
  ]);
}
