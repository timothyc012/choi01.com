import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { CanvasColorKey } from '../core/index.ts';
import type { CanvasShape, CanvasTool } from './InfiniteCanvas';
import { sanitizeShapeForCanvas } from './canvasShapeStyle';
import type { SnapResult } from './canvasGeometry';
import {
  CANVAS_FONT_FAMILY_CANDIDATES,
  collectInstalledFontFamilies,
} from './canvasText';
import { shapeHtml } from './canvasShapeStyle';
import type { Camera, Interaction, PointerPosition } from './canvasPointerTypes';

interface EditorStateOptions {
  boardIdentity: string;
  tool: CanvasTool;
  controlledShapes?: CanvasShape[];
  onShapesChange?: (updater: (prev: CanvasShape[]) => CanvasShape[]) => void;
  onDirty: () => void;
}

export interface CanvasEditorState {
  containerRef: RefObject<HTMLDivElement | null>;
  editorRef: RefObject<HTMLDivElement | null>;
  localShapes: CanvasShape[];
  setLocalShapes: Dispatch<SetStateAction<CanvasShape[]>>;
  controlled: boolean;
  shapes: CanvasShape[];
  setShapes: (updater: SetStateAction<CanvasShape[]>) => void;
  camera: Camera;
  setCamera: Dispatch<SetStateAction<Camera>>;
  cameraRef: RefObject<Camera>;
  selected: Set<string>;
  setSelected: Dispatch<SetStateAction<Set<string>>>;
  selectedRef: RefObject<Set<string>>;
  editingId: string | null;
  setEditingId: Dispatch<SetStateAction<string | null>>;
  editingIdRef: RefObject<string | null>;
  interaction: Interaction;
  interactionRef: RefObject<Interaction>;
  applyInteraction: (next: Interaction) => void;
  isSpaceDown: boolean;
  setIsSpaceDown: Dispatch<SetStateAction<boolean>>;
  guides: SnapResult['guides'];
  setGuides: Dispatch<SetStateAction<SnapResult['guides']>>;
  announcement: string;
  setAnnouncement: Dispatch<SetStateAction<string>>;
  showInspectorPalette: boolean;
  setShowInspectorPalette: Dispatch<SetStateAction<boolean>>;
  eraserPos: { x: number; y: number } | null;
  setEraserPos: Dispatch<SetStateAction<{ x: number; y: number } | null>>;
  activeColor: CanvasColorKey;
  setActiveColor: Dispatch<SetStateAction<CanvasColorKey>>;
  activeColorRef: RefObject<CanvasColorKey>;
  installedFontFamilies: readonly string[];
  pointers: RefObject<Map<number, PointerPosition>>;
  past: RefObject<CanvasShape[][]>;
  future: RefObject<CanvasShape[][]>;
  selectNow: (next: Set<string>) => void;
  commit: (next: CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[])) => void;
  deleteSelection: (selection: Set<string>) => boolean;
  beginHistory: () => void;
  endHistory: () => void;
  toPage: (clientX: number, clientY: number) => { x: number; y: number };
  viewportCentre: () => { x: number; y: number };
  expandToGroups: (ids: Set<string>) => Set<string>;
  toolRef: RefObject<CanvasTool>;
  shapesRef: RefObject<CanvasShape[]>;
  liveStrokeCanvasRef: RefObject<HTMLCanvasElement | null>;
  activeDrawRef: RefObject<CanvasShape | null>;
  pendingDrawsRef: RefObject<CanvasShape[]>;
  queuedDrawIdsRef: RefObject<Set<string>>;
  commitDrawBatch: (strokes: readonly CanvasShape[]) => void;
}

/** Owns the mutable editor model, refs, history, and coordinate actions. */
export function useCanvasEditorState({
  boardIdentity,
  tool,
  controlledShapes,
  onShapesChange,
  onDirty,
}: EditorStateOptions): CanvasEditorState {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [localShapes, setLocalShapes] = useState<CanvasShape[]>([]);
  const controlled = controlledShapes !== undefined && onShapesChange !== undefined;
  // Sanitizing every shape on each render makes long gestures (drawing,
  // dragging) stall on dense boards: the full parse/HTML boundary only needs
  // to run for shape objects that actually changed. Cache the result per
  // shape reference — immutable updates mint new objects, so a cache miss is
  // exactly the new/untrusted data that must pass through the boundary.
  const sanitizeCache = useRef(new WeakMap<CanvasShape, CanvasShape | null>());
  const shapes = useMemo(() => {
    const cache = sanitizeCache.current;
    return (controlled ? controlledShapes ?? [] : localShapes)
      .map(shape => {
        let sanitized = cache.get(shape);
        if (sanitized === undefined) {
          sanitized = sanitizeShapeForCanvas(shape);
          cache.set(shape, sanitized);
        }
        return sanitized;
      })
      .filter((shape): shape is CanvasShape => shape !== null);
  }, [controlled, controlledShapes, localShapes]);
  const onShapesChangeRef = useRef(onShapesChange);
  onShapesChangeRef.current = onShapesChange;
  const setShapes = useCallback((updater: SetStateAction<CanvasShape[]>) => {
    const change = onShapesChangeRef.current;
    if (!change) { setLocalShapes(updater); return; }
    change(typeof updater === 'function'
      ? (updater as (prev: CanvasShape[]) => CanvasShape[])
      : () => updater);
  }, []);

  const [camera, setCamera] = useState<Camera>({ x: -400, y: -300, z: 1 });
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [interaction, setInteraction] = useState<Interaction>({ kind: 'none' });
  const [isSpaceDown, setIsSpaceDown] = useState(false);
  const [guides, setGuides] = useState<SnapResult['guides']>([]);
  const [announcement, setAnnouncement] = useState('');
  const [showInspectorPalette, setShowInspectorPalette] = useState(false);
  const [eraserPos, setEraserPos] = useState<{ x: number; y: number } | null>(null);
  const [activeColor, setActiveColor] = useState<CanvasColorKey>('blue');
  const [installedFontFamilies, setInstalledFontFamilies] = useState<readonly string[]>(CANVAS_FONT_FAMILY_CANDIDATES);
  const activeColorRef = useRef(activeColor);
  activeColorRef.current = activeColor;

  const past = useRef<CanvasShape[][]>([]);
  const future = useRef<CanvasShape[][]>([]);
  const historyBase = useRef<CanvasShape[] | null>(null);
  const pointers = useRef<Map<number, PointerPosition>>(new Map());
  const liveStrokeCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeDrawRef = useRef<CanvasShape | null>(null);
  const pendingDrawsRef = useRef<CanvasShape[]>([]);
  const queuedDrawIdsRef = useRef<Set<string>>(new Set());
  const shapesRef = useRef(shapes);
  const cameraRef = useRef(camera);
  const toolRef = useRef(tool);
  const selectedRef = useRef(selected);
  const editingIdRef = useRef(editingId);
  shapesRef.current = shapes;
  cameraRef.current = camera;
  toolRef.current = tool;
  selectedRef.current = selected;
  editingIdRef.current = editingId;

  const interactionRef = useRef<Interaction>({ kind: 'none' });
  const applyInteraction = useCallback((next: Interaction) => {
    interactionRef.current = next;
    setInteraction(next);
  }, []);

  const selectNow = useCallback((next: Set<string>) => {
    selectedRef.current = next;
    setSelected(next);
  }, []);

  useLayoutEffect(() => {
    const emptySelection = new Set<string>();
    selectedRef.current = emptySelection;
    editingIdRef.current = null;
    pointers.current.clear();
    past.current = [];
    future.current = [];
    historyBase.current = null;
    activeDrawRef.current = null;
    pendingDrawsRef.current = [];
    queuedDrawIdsRef.current.clear();
    applyInteraction({ kind: 'none' });
    setSelected(emptySelection);
    setEditingId(null);
    setIsSpaceDown(false);
    setGuides([]);
    setEraserPos(null);
    setAnnouncement('');
    containerRef.current?.focus();
  }, [applyInteraction, boardIdentity]);

  useEffect(() => {
    let canceled = false;
    const refresh = () => {
      const detected = collectInstalledFontFamilies();
      if (!canceled) setInstalledFontFamilies(detected);
    };
    refresh();
    if (typeof document === 'undefined' || !('fonts' in document)) return;
    const handleLoadingDone = () => refresh();
    document.fonts.addEventListener('loadingdone', handleLoadingDone);
    return () => {
      canceled = true;
      document.fonts.removeEventListener('loadingdone', handleLoadingDone);
    };
  }, [boardIdentity]);

  const editingShape = editingId ? shapes.find(s => s.id === editingId) : undefined;
  const hasRenderableEditingShape = editingShape !== undefined;
  useLayoutEffect(() => {
    if (!editingId || !hasRenderableEditingShape) return;
    const focusEditor = () => {
      const el = editorRef.current;
      const shape = shapesRef.current.find(candidate => candidate.id === editingId);
      if (!el || !shape) return;
      if (el.dataset.seeded !== editingId) {
        el.innerHTML = shapeHtml(shape);
        el.dataset.seeded = editingId;
      }
      if (document.activeElement === el) return;
      el.focus();
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    };
    focusEditor();
    const raf = requestAnimationFrame(focusEditor);
    return () => cancelAnimationFrame(raf);
  }, [editingId, hasRenderableEditingShape]);

  const commit = useCallback((next: CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[])) => {
    setShapes(prev => {
      const resolved = typeof next === 'function' ? next(prev) : next;
      past.current.push(prev);
      if (past.current.length > 100) past.current.shift();
      future.current = [];
      return resolved;
    });
    onDirty();
  }, [onDirty]);

  const commitDrawBatch = useCallback((strokes: readonly CanvasShape[]) => {
    if (strokes.length === 0) return;
    let historyCursor = shapesRef.current;
    for (const stroke of strokes) {
      past.current.push(historyCursor);
      historyCursor = [...historyCursor, stroke];
    }
    if (past.current.length > 100) past.current.splice(0, past.current.length - 100);
    future.current = [];
    setShapes(prev => [...prev, ...strokes]);
    onDirty();
  }, [onDirty]);

  const deleteSelection = useCallback((sel: Set<string>) => {
    if (sel.size === 0) return false;
    // A connector is a relationship between its endpoints. Removing one
    // endpoint must remove the connector too; clearing only fromId/toId
    // leaves a visually orphaned line that falls back to its stale 0,0
    // geometry on the next render.
    commit(prev => prev.filter(s => {
      if (sel.has(s.id)) return false;
      if (s.type !== 'arrow') return true;
      return !(s.fromId && sel.has(s.fromId)) && !(s.toId && sel.has(s.toId));
    }));
    selectNow(new Set());
    setAnnouncement(`${sel.size}개 삭제됨`);
    return true;
  }, [commit, selectNow]);

  const beginHistory = useCallback(() => {
    historyBase.current = shapesRef.current;
  }, []);
  const endHistory = useCallback(() => {
    const base = historyBase.current;
    historyBase.current = null;
    if (!base || base === shapesRef.current) return;
    past.current.push(base);
    if (past.current.length > 100) past.current.shift();
    future.current = [];
    onDirty();
  }, [onDirty]);

  const toPage = useCallback((clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    const cam = cameraRef.current;
    if (!rect) return { x: 0, y: 0 };
    return { x: (clientX - rect.left) / cam.z + cam.x, y: (clientY - rect.top) / cam.z + cam.y };
  }, []);
  const viewportCentre = useCallback(() => {
    const rect = containerRef.current?.getBoundingClientRect();
    const cam = cameraRef.current;
    if (!rect) return { x: 0, y: 0 };
    return { x: cam.x + rect.width / 2 / cam.z, y: cam.y + rect.height / 2 / cam.z };
  }, []);
  const expandToGroups = useCallback((ids: Set<string>): Set<string> => {
    const groupIds = new Set(shapesRef.current.filter(s => ids.has(s.id) && s.groupId).map(s => s.groupId));
    if (groupIds.size === 0) return ids;
    const out = new Set(ids);
    for (const s of shapesRef.current) if (s.groupId && groupIds.has(s.groupId)) out.add(s.id);
    return out;
  }, []);

  return {
    containerRef, editorRef, localShapes, setLocalShapes, controlled, shapes, setShapes,
    camera, setCamera, cameraRef, selected, setSelected, selectedRef, editingId, setEditingId,
    editingIdRef, interaction, interactionRef, applyInteraction, isSpaceDown, setIsSpaceDown,
    guides, setGuides, announcement, setAnnouncement, showInspectorPalette, setShowInspectorPalette,
    eraserPos, setEraserPos, activeColor, setActiveColor, activeColorRef, installedFontFamilies,
    pointers, past, future, selectNow, commit, deleteSelection, beginHistory, endHistory,
    toPage, viewportCentre, expandToGroups, toolRef, shapesRef,
    liveStrokeCanvasRef, activeDrawRef, pendingDrawsRef, queuedDrawIdsRef, commitDrawBatch,
  };
}
