import { useCallback, useImperativeHandle } from 'react';
import type { Dispatch, ForwardedRef, RefObject, SetStateAction } from 'react';
import type { CanvasColorKey, CanvasStrokeWidth, CanvasTool } from '../core/index.ts';
import type { CanvasShape, CanvasSnapshot, InfiniteCanvasHandle } from './InfiniteCanvas';
import { bounds, sanitizeShapeForCanvas } from './canvasGeometry';
import { buildCanvasSvg, exportCanvasPng } from './canvasExport';
import { autoLayoutCanvas } from './canvasAutoLayout';
import { loadCanvasSnapshot } from './canvasSnapshot';
import type { CanvasSelectionActions } from './useCanvasSelectionActions';

type Camera = CanvasSnapshot['camera'];

const isDrawTool = (tool: CanvasTool | 'highlighter') => tool === 'draw' || tool === 'highlighter';
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
  toolRef,
  activeColorRef,
  drawColorRef,
  setDrawColor,
  setActiveColor,
  past,
  future,
  controlled,
  isDarkMode,
  minZoom,
  maxZoom,
  onToolChange,
  setSelectedStrokeWidth,
  onDirty,
  commit,
  selectNow,
  selectionActions,
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
    updateShapeText: (id, text) => {
      commit(prev => prev.map(shape => shape.id === id ? { ...shape, text, html: undefined } : shape));
    },
    setSelectedStrokeWidth,
    // While a pen tool is active the "active colour" is the pen colour, so
    // hosts that drive the palette through the handle see the same thing the
    // user sees on the canvas. Other tools keep the note/shape colour.
    setActiveColor: (color: CanvasColorKey) => {
      if (isDrawTool(toolRef.current)) setDrawColor(color);
      else setActiveColor(color);
    },
    getActiveColor: () => (isDrawTool(toolRef.current) ? drawColorRef.current : activeColorRef.current),
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
    deleteSelected: selectionActions.deleteSelected,
    duplicateSelected: selectionActions.duplicateSelected,
    group: selectionActions.group,
    ungroup: selectionActions.ungroup,
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
    addAtCentre, buildSvg, commit, createId, isDarkMode, maxZoom, minZoom, onDirty,
    onToolChange, selectionActions, selectNow, setCamera, setEditingId, setLocalShapes,
    setSelectedStrokeWidth, setShapes, setAnnouncement, viewportCentre, controlled,
  ]);
}
