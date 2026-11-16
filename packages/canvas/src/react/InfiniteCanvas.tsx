import React, { forwardRef, useLayoutEffect } from 'react';
import './styles.css';
import canvasCssText from './styles.css?inline';

if (typeof document !== 'undefined' && !document.querySelector('style[data-invoicex-canvas]')) {
  const style = document.createElement('style');
  style.setAttribute('data-invoicex-canvas', '');
  style.textContent = canvasCssText;
  document.head.appendChild(style);
}
import {
  AlignCenter, AlignLeft, AlignRight, Bold, ChevronDown, Italic, List, ListOrdered,
  Minus, Palette, Plus, Underline,
} from 'lucide-react';
import {
  CANVAS_COLORS,
  CANVAS_COLOR_KEYS,
  CANVAS_FONTS,
  SHAPE_TOOLS,
  parseCanvasShape,
  sanitizeCanvasFontFamily,
  validateCanvasAssetUrl,
  validateCanvasCssColor,
  smartZoomTarget,
} from '../core/index.ts';
import type {
  CanvasColorKey,
  CanvasFontKey,
  CanvasShape as DocumentCanvasShape,
  CanvasShapeType,
  CanvasStrokeWidth,
  CanvasTextAlign,
  CanvasTool as CoreCanvasTool,
  OrthogonalVariant,
} from '../core/index.ts';
import {
  CANVAS_FONT_KEYS,
  canvasFontFromValue,
  fittedTextBoxSizeFromMeasurement,
  listKindForShape,
  TEXT_BOX_MAX_WIDTH,
} from './canvasText';
import { CANVAS_UI_COLORS } from './theme';
import { CanvasVectorLayer } from './CanvasVectorLayer';
import { CanvasObjectLayer } from './CanvasObjectLayer';
import { CanvasInspector } from './CanvasInspector';
import { CanvasFloatingBar } from './CanvasFloatingBar';
import { CanvasPenPalette } from './CanvasPenPalette';
import { CanvasPenModeExit } from './CanvasPenModeExit';
import { createCanvasShapeRenderer } from './CanvasShapeRenderer';
import { type Interaction } from './useCanvasPointerInteractions';
import { useCanvasViewport } from './useCanvasViewport';
import { useCanvasTextEditing } from './useCanvasTextEditing';
import { useCanvasPreferences, type CanvasPreferenceOptions } from './useCanvasPreferences';
import { useCanvasEditorState } from './useCanvasEditorState';
import { useCanvasViewInteractions } from './useCanvasViewInteractions';
import { useCanvasSelectionActions } from './useCanvasSelectionActions';
import { useCanvasRuntimeInteractions } from './useCanvasRuntimeInteractions';
import { getCanvasRenderConfig } from './canvasRenderConfig';
import { paintLiveStrokes, prepareLiveStrokeCanvas } from './liveStrokeCanvas';
import { CanvasMinimap } from './CanvasMinimap';
import {
  boundsVisible,
  cameraCentering,
  cameraFitting,
  findShapeIds,
  nextShapeId,
  shapesBounds,
} from './canvasView';
import type { CanvasViewActions } from './useCanvasKeyboardInteractions';
import { bounds } from './canvasGeometry';

/**
 * Self-contained infinite canvas engine.
 *
 * A self-contained React + DOM/SVG editor that behaves identically on local
 * and production hosts without a runtime license or service dependency.
 *
 * Dependency-free apart from React itself, and it deliberately avoids this
 * project's custom Tailwind tokens so the file can be lifted out on its own.
 */

export { CANVAS_COLORS, CANVAS_COLOR_KEYS, CANVAS_FONTS, SHAPE_TOOLS } from '../core/index.ts';
export type { CanvasColorKey, CanvasFontKey, CanvasShapeType, CanvasTextAlign, OrthogonalVariant } from '../core/index.ts';
export { diagramTemplate, getInspectorGroups, isDiagramShape } from './canvasDiagram';
export type { DiagramTemplateKind, InspectorGroup } from './canvasDiagram';
export type CanvasTool = CoreCanvasTool | 'highlighter';

type EditableCanvasShape<Shape> = Shape extends DocumentCanvasShape
  ? Omit<Shape, 'id' | 'points' | 'fromId' | 'toId' | 'bend' | 'routing' | 'orthogonalVariant' | 'orthogonalWaypoints' | 'arrowStart' | 'arrowEnd'> & {
      id: string;
      points?: [number, number][];
      fromId?: string;
      toId?: string;
      bend?: number;
      routing?: 'straight' | 'curved' | 'orthogonal';
      orthogonalVariant?: OrthogonalVariant;
      orthogonalWaypoints?: { x: number; y: number }[];
      arrowStart?: 'none' | 'arrow' | 'dot';
      arrowEnd?: 'none' | 'arrow' | 'dot';
    }
  : never;

/** Mutable editor shape view derived from the validated core document union. */
export type CanvasShape = EditableCanvasShape<DocumentCanvasShape>;


interface Camera { x: number; y: number; z: number }

export interface CanvasSnapshot {
  version: 'canvas-v1';
  shapes: CanvasShape[];
  camera: Camera;
}

export interface CanvasSelectionInfo {
  count: number;
  canGroup: boolean;
  canUngroup: boolean;
  isTextual: boolean;
  selectedIds: readonly string[];
}

const MIN_ZOOM = 0.1;
const MAX_ZOOM = 4;
/** Screen-space distance at which a moving edge locks onto a neighbour. */
const SNAP_THRESHOLD = 6;
const TEXTUAL: CanvasShapeType[] = ['note', 'card', 'text', 'rect', 'ellipse', 'triangle', 'diamond', 'hexagon', 'star', 'frame', 'arrow'];

function assertNeverCanvasShape(shape: never): never {
  throw new Error(`Unhandled canvas shape: ${String(shape)}.`);
}

export function applySelectedStrokeWidth(
  shapes: CanvasShape[],
  targetIds: Set<string>,
  strokeWidth: CanvasStrokeWidth,
): CanvasShape[] {
  return shapes.map(shape => {
    if (!targetIds.has(shape.id) || shape.locked) return shape;
    switch (shape.type) {
      case 'arrow':
      case 'frame':
      case 'rect':
      case 'ellipse':
      case 'triangle':
      case 'diamond':
      case 'hexagon':
      case 'star':
      case 'draw':
        return { ...shape, strokeWidth };
      case 'note':
      case 'card':
      case 'text':
      case 'image':
        return shape;
      default:
        return assertNeverCanvasShape(shape);
    }
  });
}

interface SelectedDrawStyle {
  readonly color?: CanvasColorKey;
  readonly strokeWidth?: CanvasStrokeWidth;
  readonly strokeColor?: string;
}

export function applySelectedDrawStyle(
  shapes: CanvasShape[],
  targetIds: Set<string>,
  style: SelectedDrawStyle,
): CanvasShape[] {
  return shapes.map(shape => (
    targetIds.has(shape.id) && shape.type === 'draw' && !shape.locked
      ? { ...shape, ...style }
      : shape
  ));
}

export interface InfiniteCanvasHandle {
  addNote: (color: CanvasColorKey) => void;
  addCard: (label: string, category: string, cardStyle: 'solid' | 'glass', color: CanvasColorKey) => void;
  addText: () => void;
  addShape: (type: 'rect' | 'ellipse', color: CanvasColorKey, text?: string) => void;
  addArrow: () => void;
  addImages: (images: readonly { readonly src: string; readonly fileName: string; readonly w: number; readonly h: number }[]) => void;
  addImage: (src: string, fileName: string, w: number, h: number) => void;
  addFileCard: (fileName: string, src: string, label: string) => void;
  updateShapeText: (id: string, text: string) => void;
  setSelectedStrokeWidth: (strokeWidth: CanvasStrokeWidth) => void;
  setActiveColor: (color: CanvasColorKey) => void;
  getActiveColor: () => CanvasColorKey;
  setTool: (tool: CoreCanvasTool) => void;
  undo: () => void;
  redo: () => void;
  copySelected: () => void;
  pasteClipboard: () => Promise<void>;
  deleteSelected: () => void;
  duplicateSelected: () => void;
  rotateSelected: (deltaRadians: number) => void;
  group: () => void;
  ungroup: () => void;
  reorderSelected: (direction: 'forward' | 'backward' | 'front' | 'back') => void;
  zoomBy: (factor: number) => void;
  zoomTo: (zoom: number) => void;
  resetZoom: () => void;
  zoomToFit: () => void;
  /** Frames in document order: `{ id, name }` for a host frame list. */
  listFrames: () => readonly { id: string; name: string }[];
  /** Fit the camera to a shape (frames included), zoom capped at 100%. */
  focusShape: (id: string) => void;
  autoLayout: () => void;
  exportSvg: () => string | null;
  exportPng: () => Promise<Blob | null>;
  exportSvgForSelection: () => string | null;
  exportPngForSelection: () => Promise<Blob | null>;
  getSnapshot: () => CanvasSnapshot;
  loadSnapshot: (snapshot: unknown) => void;
}

interface InfiniteCanvasProps extends CanvasPreferenceOptions {
  /** Stable identity used to reset local interaction state on board changes. */
  boardIdentity?: string;
  isDarkMode: boolean;
  tool: CanvasTool;
  activeColor?: CanvasColorKey;
  defaultActiveColor?: CanvasColorKey;
  onActiveColorChange?: (color: CanvasColorKey) => void;
  drawStrokeWidth?: CanvasStrokeWidth;
  onToolChange: (tool: CanvasTool) => void;
  onDirty: () => void;
  onZoomChange?: (zoom: number) => void;
  onSelectionChange?: (info: CanvasSelectionInfo) => void;
  /**
   * Controlled mode: when both are provided the shapes array lives outside the
   * component (usually inside a Yjs-backed collab hook) and every mutation
   * routes through `onShapesChange`. Leave both undefined for the standalone
   * mode used by the benchmark and smoke harnesses.
   */
  shapes?: CanvasShape[];
  onShapesChange?: (updater: (prev: CanvasShape[]) => CanvasShape[]) => void;
  /** Cursors from other peers, if any. Rendered as coloured pointers. */
  peerCursors?: Array<{ id: number; name: string; color: string; x: number; y: number }>;
  /** Called on every pointer move in page space so the outer layer can broadcast. */
  onLocalCursor?: (page: { x: number; y: number } | null) => void;
  renderDiagram?: (shape: CanvasShape) => React.ReactNode;
}

function uid(prefix = 's'): string {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

export const InfiniteCanvas = forwardRef<InfiniteCanvasHandle, InfiniteCanvasProps>(function InfiniteCanvas(
  { boardIdentity = 'standalone', isDarkMode, tool, activeColor: propActiveColor, defaultActiveColor, onActiveColorChange, drawStrokeWidth: propDrawStrokeWidth = 4, onToolChange, onDirty, onZoomChange, onSelectionChange,
    shapes: controlledShapes, onShapesChange, peerCursors, onLocalCursor, renderDiagram,
    drawInkStyle: propDrawInkStyle, onDrawInkStyleChange, objectSnapEnabled: propObjectSnapEnabled, onObjectSnapEnabledChange,
    showGrid: propShowGrid, onShowGridChange, showMinimap: propShowMinimap, onShowMinimapChange }, ref
) {
  const { drawInkStyle, objectSnapEnabled, showGrid, minimapEnabled, selectInkStyle, selectObjectSnap, selectMinimap } = useCanvasPreferences({
    drawInkStyle: propDrawInkStyle, onDrawInkStyleChange,
    objectSnapEnabled: propObjectSnapEnabled, onObjectSnapEnabledChange,
    showGrid: propShowGrid, onShowGridChange,
    showMinimap: propShowMinimap, onShowMinimapChange,
  });
  const [drawStrokeWidth, setDrawStrokeWidth] = React.useState<CanvasStrokeWidth>(propDrawStrokeWidth);
  React.useEffect(() => setDrawStrokeWidth(propDrawStrokeWidth), [propDrawStrokeWidth]);
  const {
    containerRef,
    editorRef,
    localShapes,
    setLocalShapes,
    controlled,
    shapes,
    setShapes,
    camera,
    setCamera,
    cameraRef,
    selected,
    setSelected,
    selectedRef,
    editingId,
    setEditingId,
    editingIdRef,
    interaction,
    interactionRef,
    applyInteraction,
    isSpaceDown,
    setIsSpaceDown,
    guides,
    setGuides,
    announcement,
    setAnnouncement,
    showInspectorPalette,
    setShowInspectorPalette,
    eraserPos,
    setEraserPos,
    isPenMode,
    setIsPenMode,
    penModeRef,
    activeColor,
    setActiveColor,
    activeColorRef,
    drawColor,
    setDrawColor,
    drawColorRef,
    installedFontFamilies,
    pointers,
    past,
    future,
    selectNow,
    commit,
    deleteSelection,
    beginHistory,
    endHistory,
    cancelHistory,
    toPage,
    viewportCentre,
    expandToGroups,
    toolRef,
    shapesRef,
    liveStrokeCanvasRef,
    activeDrawRef,
    pendingDrawsRef,
    queuedDrawIdsRef,
    commitDrawBatch,
  } = useCanvasEditorState({ boardIdentity, tool, activeColor: propActiveColor, defaultActiveColor, onActiveColorChange, controlledShapes, onShapesChange, onDirty });
  const clipboardRef = React.useRef<CanvasShape[] | null>(null);

  // --- Find bar, tab navigation, view keys, minimap ------------------------
  const [findOpen, setFindOpen] = React.useState(false);
  const [findQuery, setFindQuery] = React.useState('');
  /** No match highlighted yet: the first Enter lands on result 0 (Zero1 step). */
  const [findIndex, setFindIndex] = React.useState(-1);
  const findInputRef = React.useRef<HTMLInputElement | null>(null);
  const findResults = React.useMemo(() => findShapeIds(shapes, findQuery), [shapes, findQuery]);

  React.useEffect(() => {
    if (findOpen) findInputRef.current?.focus();
  }, [findOpen]);

  const viewSize = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    return { width: rect?.width ?? 0, height: rect?.height ?? 0 };
  };

  const focusFindResult = React.useCallback((index: number, results: readonly string[]) => {
    if (results.length === 0) return;
    const wrapped = ((index % results.length) + results.length) % results.length;
    setFindIndex(wrapped);
    const id = results[wrapped];
    selectNow(new Set([id]));
    const shape = shapesRef.current.find(s => s.id === id);
    if (!shape) return;
    const { width, height } = viewSize();
    if (width <= 0 || height <= 0) return;
    const b = bounds(shape);
    // Zero1 find focus: keep zoom at ≤100%, but fit when the shape is larger
    // than the viewport, and always centre on the hit.
    const z = Math.min(1, cameraRef.current.z,
      Math.max(MIN_ZOOM, Math.min(width / (b.maxX - b.minX + 160), height / (b.maxY - b.minY + 160))));
    setCamera(cameraCentering(
      { x: (b.minX + b.maxX) / 2, y: (b.minY + b.maxY) / 2 },
      width, height, z,
    ));
    setAnnouncement(`${id}로 이동`);
  }, [cameraRef, selectNow, setAnnouncement, setCamera, shapesRef]);

  const stepFind = React.useCallback((direction: number) => {
    focusFindResult(findIndex + direction, findResults);
  }, [findIndex, findResults, focusFindResult]);

  const closeFind = React.useCallback(() => {
    setFindOpen(false);
    containerRef.current?.focus();
  }, [containerRef]);

  const fitAllShapes = React.useCallback(() => {
    const b = shapesBounds(shapesRef.current);
    const { width, height } = viewSize();
    if (!b || width <= 0 || height <= 0) return;
    setCamera(cameraFitting(b, width, height, MIN_ZOOM, MAX_ZOOM));
  }, [setCamera, shapesRef]);

  const fitSelection = React.useCallback(() => {
    const sel = selectedRef.current;
    const b = shapesBounds(shapesRef.current.filter(s => sel.has(s.id)));
    const { width, height } = viewSize();
    if (!b || width <= 0 || height <= 0) return;
    setCamera(cameraFitting(b, width, height, MIN_ZOOM, MAX_ZOOM));
  }, [selectedRef, setCamera, shapesRef]);

  const zoomToMax = React.useCallback(() => {
    const { width, height } = viewSize();
    const cam = cameraRef.current;
    const cx = cam.x + width / 2 / cam.z;
    const cy = cam.y + height / 2 / cam.z;
    setCamera({ x: cx - width / 2 / MAX_ZOOM, y: cy - height / 2 / MAX_ZOOM, z: MAX_ZOOM });
  }, [cameraRef, setCamera]);

  const smartZoom = React.useCallback((direction: number) => {
    const sel = selectedRef.current;
    const all = shapesRef.current;
    const { width, height } = viewSize();
    if (all.length === 0 || width <= 0 || height <= 0) return;
    const allFit = cameraFitting(shapesBounds(all)!, width, height, MIN_ZOOM, MAX_ZOOM).z;
    const selectionBounds = shapesBounds(all.filter(s => sel.has(s.id)));
    const selectionFit = selectionBounds ? cameraFitting(selectionBounds, width, height, MIN_ZOOM, MAX_ZOOM).z : null;
    const target = smartZoomTarget(cameraRef.current.z, allFit, selectionFit, direction);
    if (!target) return;
    if (target === 'all') fitAllShapes();
    else if (target === 'selection') fitSelection();
    else zoomToMax();
  }, [cameraRef, fitAllShapes, fitSelection, selectedRef, shapesRef, zoomToMax]);

  const revealShape = React.useCallback((id: string) => {
    const shape = shapesRef.current.find(s => s.id === id);
    const { width, height } = viewSize();
    if (!shape || width <= 0 || height <= 0) return;
    const b = bounds(shape);
    if (boundsVisible(b, cameraRef.current, width, height)) return;
    setCamera(cameraCentering(
      { x: (b.minX + b.maxX) / 2, y: (b.minY + b.maxY) / 2 },
      width, height, cameraRef.current.z,
    ));
  }, [cameraRef, setCamera, shapesRef]);

  const centerOnPoint = React.useCallback((point: { x: number; y: number }) => {
    const { width, height } = viewSize();
    if (width <= 0 || height <= 0) return;
    setCamera(cameraCentering(point, width, height, cameraRef.current.z));
  }, [cameraRef, setCamera]);

  const viewActionsRef = React.useRef<CanvasViewActions | undefined>(undefined);
  viewActionsRef.current = {
    openFind: () => { setFindIndex(-1); setFindOpen(true); },
    fitAll: fitAllShapes,
    fitSelection,
    zoomMax: zoomToMax,
    smartZoom,
    revealShape,
  };

  useLayoutEffect(() => {
    const canvas = liveStrokeCanvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const repaint = () => {
      // prepareLiveStrokeCanvas caps the ratio; paint with the value it used
      // so the transform matches the backing store it actually allocated.
      const dpr = prepareLiveStrokeCanvas(canvas, container.clientWidth, container.clientHeight, window.devicePixelRatio || 1);
      const committedIds = new Set(shapes.map(shape => shape.id));
      pendingDrawsRef.current = pendingDrawsRef.current.filter(stroke => !committedIds.has(stroke.id));
      for (const id of committedIds) queuedDrawIdsRef.current.delete(id);
      paintLiveStrokes(canvas, pendingDrawsRef.current, activeDrawRef.current, cameraRef.current, dpr);
    };
    repaint();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', repaint);
      return () => window.removeEventListener('resize', repaint);
    }
    const observer = new ResizeObserver(repaint);
    observer.observe(container);
    window.addEventListener('resize', repaint);
    return () => { observer.disconnect(); window.removeEventListener('resize', repaint); };
  }, [activeDrawRef, camera, cameraRef, containerRef, liveStrokeCanvasRef, pendingDrawsRef, queuedDrawIdsRef, shapes]);

  const selectionActions = useCanvasSelectionActions({
    containerRef,
    shapesRef,
    clipboardRef,
    selectedRef,
    commit,
    deleteSelection,
    selectNow,
    setAnnouncement,
    createId: uid,
  });
  const {
    selectionInfo,
    inspectorSelection,
    inspectorShape,
    hoveredShapeId,
    onContainerPointerMove,
    onContainerPointerLeave,
  } = useCanvasViewInteractions({
    containerRef,
    camera,
    interactionRef,
    toolRef,
    pointers,
    shapesRef,
    setCamera,
    minZoom: MIN_ZOOM,
    maxZoom: MAX_ZOOM,
    shapes,
    selected,
    editingId,
    textualTypes: TEXTUAL,
    onZoomChange,
    onSelectionChange,
    onLocalCursor,
    toPage,
  });

  // The compact selection bar is the primary surface; the detailed inspector
  // opens on demand (⋯) and always during text editing, where it carries the
  // formatting controls. It closes itself when the selection empties.
  const [inspectorOpen, setInspectorOpen] = React.useState(false);
  React.useEffect(() => {
    if (!inspectorShape) setInspectorOpen(false);
  }, [inspectorShape]);
  const setSelectedStrokeWidth = React.useCallback((strokeWidth: CanvasStrokeWidth) => {
    const targetIds = new Set(selectedRef.current);
    if (targetIds.size === 0) return;
    commit(prev => applySelectedStrokeWidth(prev, targetIds, strokeWidth));
  }, [commit, selectedRef]);
  const selectPenStrokeWidth = React.useCallback((strokeWidth: CanvasStrokeWidth) => {
    setDrawStrokeWidth(strokeWidth);
    setSelectedStrokeWidth(strokeWidth);
  }, [setSelectedStrokeWidth]);
  const selectPenColor = React.useCallback((color: CanvasColorKey) => {
    setDrawColor(color);
    const targetIds = new Set(
      shapesRef.current
        .filter(shape => shape.type === 'draw' && selectedRef.current.has(shape.id))
        .map(shape => shape.id),
    );
    if (targetIds.size > 0) {
      commit(prev => applySelectedDrawStyle(prev, targetIds, { color }));
    }
  }, [commit, selectedRef, setDrawColor, shapesRef]);

  const {
    onPointerDown,
    onResizeHandleDown,
    onRotateHandleDown,
    onConnectHandleDown,
    onBendHandleDown,
    onOrthogonalSegmentHandleDown,
    onArrowEndpointDown,
  } = useCanvasRuntimeInteractions({
    ref,
    containerRef,
    viewActionsRef,
    editorRef,
    pointers,
    interactionRef,
    cameraRef,
    shapesRef,
    toolRef,
    penModeRef,
    activeColorRef,
    drawColorRef,
    setDrawColor,
    setActiveColor,
    drawStrokeWidth,
    drawInkStyle,
    objectSnapEnabled,
    setSelectedStrokeWidth,
    camera,
    shapes,
    selected,
    isSpaceDown,
    setCamera,
    setShapes,
    setEditingId,
    setEraserPos,
    setGuides,
    setAnnouncement,
    applyInteraction,
    selectNow,
    selectionActions,
    past,
    future,
    beginHistory,
    endHistory,
    cancelHistory,
    commit,
    deleteSelection,
    onDirty,
    onToolChange,
    controlled,
    isDarkMode,
    minZoom: MIN_ZOOM,
    maxZoom: MAX_ZOOM,
    textualTypes: TEXTUAL,
    selectedRef,
    editingIdRef,
    setIsSpaceDown,
    viewportCentre,
    setLocalShapes,
    expandToGroups,
    toPage,
    createId: uid,
    liveStrokeCanvasRef,
    activeDrawRef,
    pendingDrawsRef,
    queuedDrawIdsRef,
    commitDrawBatch,
    setIsPenMode,
  });

  // --- Rendering -----------------------------------------------------------
  const { cursor, gridColor, gridSize, strokeColorOf } = getCanvasRenderConfig({
    isDarkMode, tool: tool === 'highlighter' ? 'draw' : tool, isSpaceDown, interaction, zoom: camera.z,
  });

  /** Apply a property to every selected shape (including the one currently being edited). */
  const patchSelected = (patch: Partial<CanvasShape>) => {
    const sel = selectedRef.current;
    const eid = editingIdRef.current;
    const targetIds = new Set(sel);
    if (eid) targetIds.add(eid);
    if (targetIds.size === 0) return;
    const includesStrokeWidth = 'strokeWidth' in patch;
    const drawStyleKeys = Object.keys(patch).every(key => key === 'color' || key === 'fillColor' || key === 'strokeColor' || key === 'strokeWidth');
    // Freehand strokes carry colour on the stroke itself; only take that path
    // when the whole selection is freehand, so a mixed selection still routes
    // through the generic patch below and every shape gets recoloured.
    const allDraw = inspectorSelection.length > 0 && inspectorSelection.every(shape => shape.type === 'draw');
    if (allDraw && drawStyleKeys) {
      const color = 'color' in patch ? patch.color : undefined;
      const strokeWidth = 'strokeWidth' in patch ? patch.strokeWidth : undefined;
      const strokeColor = 'strokeColor' in patch ? patch.strokeColor : undefined;
      commit(prev => applySelectedDrawStyle(prev, targetIds, {
        ...(color !== undefined ? { color } : {}),
        ...(strokeWidth !== undefined ? { strokeWidth } : {}),
        ...(strokeColor !== undefined ? { strokeColor } : {}),
      }));
      return;
    }
    if (includesStrokeWidth) {
      const strokeWidth = patch.strokeWidth;
      if (strokeWidth !== undefined && Object.keys(patch).length === 1) {
        commit(prev => applySelectedStrokeWidth(prev, targetIds, strokeWidth));
        return;
      }
    }
    // Locked shapes keep their style and text; only their lock flag itself moves.
    commit(prev => prev.map(s => {
      if (!targetIds.has(s.id) || s.locked) return s;
      if (!includesStrokeWidth) return { ...s, ...patch };
      switch (s.type) {
        case 'arrow':
        case 'frame':
        case 'rect':
        case 'ellipse':
        case 'triangle':
        case 'diamond':
        case 'hexagon':
        case 'star':
          return { ...s, ...patch };
        case 'note':
        case 'card':
        case 'text':
        case 'image':
          return s;
        case 'draw':
          return { ...s, ...patch };
        default:
          return assertNeverCanvasShape(s);
      }
    }));
  };

  const {
    commitEditorHtml,
    applyFormat,
    applyList,
    onEditorKeyDown,
    applyCustomFontFamily,
  } = useCanvasTextEditing({
    editorRef,
    editingId,
    setShapes,
    setAnnouncement,
    onDirty,
    patchSelected,
  });

  const { renderEditor, renderShapeBody } = createCanvasShapeRenderer({
    camera,
    editingId,
    isDarkMode,
    editorRef,
    commitEditorHtml,
    onEditorKeyDown,
    setShapes,
    onDirty,
    renderDiagram,
  });

  const marquee = interaction.kind === 'marquee' ? interaction : null;
  const lasso = interaction.kind === 'lasso' ? interaction : null;

  const exitPenMode = React.useCallback(() => {
    pointers.current.clear();
    activeDrawRef.current = null;
    applyInteraction({ kind: 'none' });
    paintLiveStrokes(
      liveStrokeCanvasRef.current,
      pendingDrawsRef.current,
      null,
      cameraRef.current,
      window.devicePixelRatio || 1,
    );
    setIsPenMode(false);
    onToolChange('select');
    containerRef.current?.focus();
  }, [
    activeDrawRef,
    applyInteraction,
    cameraRef,
    containerRef,
    liveStrokeCanvasRef,
    onToolChange,
    pendingDrawsRef,
    pointers,
    setIsPenMode,
  ]);

  const { shapeById, visiblePaintOrder } = useCanvasViewport({
    containerRef,
    shapesRef,
    shapes,
    camera,
    selected,
    editingId,
    boardIdentity,
  });

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onContainerPointerMove}
      onPointerLeave={onContainerPointerLeave}
      role="application"
      data-canvas-board-id={boardIdentity}
      data-canvas-active-tool={tool}
      data-canvas-pen-mode={isPenMode ? 'true' : 'false'}
      data-canvas-camera-x={camera.x}
      data-canvas-camera-y={camera.y}
      data-canvas-camera-z={camera.z}
      aria-label="무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정."
      tabIndex={0}
      className="invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none"
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none',
        cursor,
        background: isDarkMode ? CANVAS_UI_COLORS.canvasDark : CANVAS_UI_COLORS.canvasLight,
        backgroundImage: showGrid ? `radial-gradient(${gridColor} 1px, transparent 1px)` : 'none',
        backgroundSize: `${gridSize}px ${gridSize}px`,
        backgroundPosition: `${-camera.x * camera.z}px ${-camera.y * camera.z}px`,
      }}
    >
      <style>{`.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas .canvas-rich-text ul>li::before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style="dash"]>li::before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li::before{content:counter(canvas-list-item) ". "}`}</style>
      {/* Screen-reader channel for actions that are otherwise purely visual. */}
      <div
        aria-live="polite"
        role="status"
        className="absolute w-px h-px overflow-hidden whitespace-nowrap"
        style={{ clip: 'rect(0 0 0 0)', clipPath: 'inset(50%)' }}
      >
        {announcement}
      </div>

      <div className="absolute inset-0" style={{ isolation: 'isolate', zIndex: 0 }}>
      <CanvasVectorLayer
        visiblePaintOrder={visiblePaintOrder}
        selected={selected}
        shapeById={shapeById}
        allShapes={shapesRef.current}
        camera={camera}
        interaction={interaction}
        eraserPos={eraserPos}
        guides={objectSnapEnabled ? guides : []}
        marquee={marquee}
        lasso={lasso}
        strokeColorOf={strokeColorOf}
      />

      <canvas style={{ zIndex: visiblePaintOrder.length + 1 }} ref={liveStrokeCanvasRef} aria-hidden="true" data-canvas-live-strokes="true" className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* DOM layer: everything with text, so it stays selectable and editable. */}
      <CanvasObjectLayer
        visiblePaintOrder={visiblePaintOrder}
        selected={selected}
        editingId={editingId}
        camera={camera}
        shapeById={shapeById}
        allShapes={shapesRef.current}
        peerCursors={peerCursors}
        hoveredShapeId={hoveredShapeId}
        dotsEnabled={tool === 'select' && interaction.kind === 'none'}
        isDarkMode={isDarkMode}
        renderEditor={renderEditor}
        renderShapeBody={renderShapeBody}
        setEditingId={setEditingId}
        onBendHandleDown={onBendHandleDown}
        onOrthogonalSegmentHandleDown={onOrthogonalSegmentHandleDown}
        onResizeHandleDown={onResizeHandleDown}
        onRotateHandleDown={onRotateHandleDown}
        onConnectHandleDown={onConnectHandleDown}
        onArrowEndpointDown={onArrowEndpointDown}
      />

      </div>
      {/*
        Pen mode shows the pen palette instead. The inspector's popovers hold
        text inputs (HEX colour, card TYPE, custom font). Keep these inactive
        while drawing instead of exposing nearby native handwriting targets.
      */}
      {inspectorShape && (inspectorOpen || Boolean(editingId)) && tool !== 'draw' && tool !== 'highlighter' && tool !== 'eraser' && (
        <CanvasInspector
          shape={inspectorShape}
          selection={inspectorSelection}
          selectionActions={selectionActions}
          shapes={shapes}
          camera={camera}
          canvasSize={{ width: containerRef.current?.clientWidth ?? 380, height: containerRef.current?.clientHeight ?? 190 }}
          isDarkMode={isDarkMode}
          editing={Boolean(editingId)}
          showPalette={showInspectorPalette}
          installedFontFamilies={installedFontFamilies}
          setShowPalette={setShowInspectorPalette}
          setActiveColor={setActiveColor}
          patchSelected={patchSelected}
          applyFormat={applyFormat}
          applyList={applyList}
          applyCustomFontFamily={applyCustomFontFamily}
          onClose={() => setInspectorOpen(false)}
        />
      )}

      {inspectorShape && !inspectorOpen && !editingId && interaction.kind === 'none'
        && tool !== 'draw' && tool !== 'highlighter' && tool !== 'eraser' && (
        <CanvasFloatingBar
          selection={inspectorSelection}
          selectionActions={selectionActions}
          camera={camera}
          canvasSize={{ width: containerRef.current?.clientWidth ?? 380, height: containerRef.current?.clientHeight ?? 190 }}
          isDarkMode={isDarkMode}
          setActiveColor={setActiveColor}
          patchSelected={patchSelected}
          onOpenInspector={() => setInspectorOpen(true)}
        />
      )}

      {isPenMode && (
        <CanvasPenModeExit isDarkMode={isDarkMode} onExit={exitPenMode} />
      )}

      <CanvasPenPalette
        tool={tool}
        activeColor={drawColor}
        drawStrokeWidth={drawStrokeWidth}
        drawInkStyle={drawInkStyle}
        objectSnapEnabled={objectSnapEnabled}
        onSelectInkStyle={selectInkStyle}
        onSelectObjectSnap={selectObjectSnap}

        isDarkMode={isDarkMode}
        onSelectColor={selectPenColor}
        onSelectStrokeWidth={selectPenStrokeWidth}
      />

      {findOpen && (
        <div
          data-canvas-find="true"
          className={`absolute z-40 top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-xl border shadow-lg backdrop-blur-sm ${isDarkMode ? 'bg-slate-900/95 border-slate-700 text-slate-200' : 'bg-white/95 border-slate-300 text-slate-800'}`}
          onPointerDown={event => event.stopPropagation()}
          onClick={event => event.stopPropagation()}
        >
          <input
            ref={findInputRef}
            data-canvas-find-input="true"
            type="text"
            value={findQuery}
            onChange={event => { setFindQuery(event.target.value); setFindIndex(-1); }}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                event.preventDefault();
                stepFind(event.shiftKey ? -1 : 1);
              } else if (event.key === 'Escape') {
                event.preventDefault();
                closeFind();
              }
            }}
            placeholder="찾기"
            aria-label="캔버스에서 찾기"
            className={`w-56 bg-transparent outline-none text-sm ${isDarkMode ? 'placeholder-slate-500' : 'placeholder-slate-400'}`}
          />
          <span data-canvas-find-count="true" className="text-xs opacity-60 tabular-nums min-w-8 text-center">
            {findResults.length === 0 ? '0/0' : `${Math.min(findIndex + 1, findResults.length)}/${findResults.length}`}
          </span>
          <button
            type="button"
            onClick={closeFind}
            aria-label="찾기 닫기"
            className="w-6 h-6 rounded text-sm opacity-60 hover:opacity-100"
          >×</button>
        </div>
      )}

      <div className="absolute z-30 right-3 bottom-3 flex flex-col items-end gap-1.5">
        {minimapEnabled && shapes.length > 0 && (
          <CanvasMinimap
            shapes={shapes}
            camera={camera}
            isDarkMode={isDarkMode}
            onCenter={centerOnPoint}
            viewSize={viewSize()}
          />
        )}
        <button
          type="button"
          data-canvas-minimap-toggle="true"
          onClick={() => selectMinimap(!minimapEnabled)}
          aria-pressed={minimapEnabled}
          title="미니맵 켜기/끄기"
          className={`h-6 px-2 rounded-md text-[10px] font-semibold border shadow-sm ${isDarkMode ? 'bg-slate-900/90 border-slate-700 text-slate-300 hover:bg-slate-800' : 'bg-white/90 border-slate-300 text-slate-600 hover:bg-slate-50'} ${minimapEnabled ? '' : 'opacity-60'}`}
        >미니맵</button>
      </div>
    </div>
  );
});
