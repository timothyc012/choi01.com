import React, { forwardRef } from 'react';
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
import { createCanvasShapeRenderer } from './CanvasShapeRenderer';
import { type Interaction } from './useCanvasPointerInteractions';
import { useCanvasViewport } from './useCanvasViewport';
import { useCanvasTextEditing } from './useCanvasTextEditing';
import { useCanvasEditorState } from './useCanvasEditorState';
import { useCanvasViewInteractions } from './useCanvasViewInteractions';
import { useCanvasRuntimeInteractions } from './useCanvasRuntimeInteractions';
import { getCanvasRenderConfig } from './canvasRenderConfig';

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
    if (!targetIds.has(shape.id)) return shape;
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
}

export function applySelectedDrawStyle(
  shapes: CanvasShape[],
  targetIds: Set<string>,
  style: SelectedDrawStyle,
): CanvasShape[] {
  return shapes.map(shape => (
    targetIds.has(shape.id) && shape.type === 'draw'
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
  addImage: (src: string, fileName: string, w: number, h: number) => void;
  addFileCard: (fileName: string, src: string, label: string) => void;
  updateShapeText: (id: string, text: string) => void;
  setSelectedStrokeWidth: (strokeWidth: CanvasStrokeWidth) => void;
  setTool: (tool: CoreCanvasTool) => void;
  undo: () => void;
  redo: () => void;
  deleteSelected: () => void;
  duplicateSelected: () => void;
  group: () => void;
  ungroup: () => void;
  zoomBy: (factor: number) => void;
  zoomTo: (zoom: number) => void;
  resetZoom: () => void;
  zoomToFit: () => void;
  autoLayout: () => void;
  exportSvg: () => string | null;
  exportPng: () => Promise<Blob | null>;
  getSnapshot: () => CanvasSnapshot;
  loadSnapshot: (snapshot: unknown) => void;
}

interface InfiniteCanvasProps {
  /** Stable identity used to reset local interaction state on board changes. */
  boardIdentity?: string;
  isDarkMode: boolean;
  tool: CanvasTool;
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
  { boardIdentity = 'standalone', isDarkMode, tool, drawStrokeWidth = 4, onToolChange, onDirty, onZoomChange, onSelectionChange,
    shapes: controlledShapes, onShapesChange, peerCursors, onLocalCursor, renderDiagram }, ref
) {
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
    activeColor,
    setActiveColor,
    activeColorRef,
    installedFontFamilies,
    pointers,
    past,
    future,
    selectNow,
    commit,
    deleteSelection,
    beginHistory,
    endHistory,
    toPage,
    viewportCentre,
    expandToGroups,
    toolRef,
    shapesRef,
  } = useCanvasEditorState({ boardIdentity, tool, controlledShapes, onShapesChange, onDirty });

  const {
    selectionInfo,
    inspectorShape,
    onContainerPointerMove,
    onContainerPointerLeave,
  } = useCanvasViewInteractions({
    containerRef,
    camera,
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

  const setSelectedStrokeWidth = React.useCallback((strokeWidth: CanvasStrokeWidth) => {
    const targetIds = new Set(selectedRef.current);
    if (targetIds.size === 0) return;
    commit(prev => applySelectedStrokeWidth(prev, targetIds, strokeWidth));
  }, [commit, selectedRef]);

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
    editorRef,
    pointers,
    interactionRef,
    cameraRef,
    shapesRef,
    toolRef,
    activeColorRef,
    drawStrokeWidth,
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
    past,
    future,
    beginHistory,
    endHistory,
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
    const drawStyleKeys = Object.keys(patch).every(key => key === 'color' || key === 'fillColor' || key === 'strokeWidth');
    if (inspectorShape?.type === 'draw' && drawStyleKeys) {
      const color = 'color' in patch ? patch.color : undefined;
      const strokeWidth = 'strokeWidth' in patch ? patch.strokeWidth : undefined;
      commit(prev => applySelectedDrawStyle(prev, targetIds, {
        ...(color !== undefined ? { color } : {}),
        ...(strokeWidth !== undefined ? { strokeWidth } : {}),
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
    commit(prev => prev.map(s => {
      if (!targetIds.has(s.id)) return s;
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
      data-canvas-camera-x={camera.x}
      data-canvas-camera-y={camera.y}
      data-canvas-camera-z={camera.z}
      aria-label="무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정."
      tabIndex={0}
      className="invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none"
      style={{
        cursor,
        background: isDarkMode ? CANVAS_UI_COLORS.canvasDark : CANVAS_UI_COLORS.canvasLight,
        backgroundImage: `radial-gradient(${gridColor} 1px, transparent 1px)`,
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

      <CanvasVectorLayer
        visiblePaintOrder={visiblePaintOrder}
        selected={selected}
        shapeById={shapeById}
        allShapes={shapesRef.current}
        camera={camera}
        interaction={interaction}
        eraserPos={eraserPos}
        guides={guides}
        marquee={marquee}
        strokeColorOf={strokeColorOf}
      />

      {/* DOM layer: everything with text, so it stays selectable and editable. */}
      <CanvasObjectLayer
        visiblePaintOrder={visiblePaintOrder}
        selected={selected}
        editingId={editingId}
        camera={camera}
        shapeById={shapeById}
        allShapes={shapesRef.current}
        peerCursors={peerCursors}
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

      {inspectorShape && (
        <CanvasInspector
          shape={inspectorShape}
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
        />
      )}
    </div>
  );
});
