import React from 'react';
import type { CanvasColorKey, CanvasShape as DocumentCanvasShape, CanvasStrokeWidth, CanvasTool as CoreCanvasTool, OrthogonalVariant } from '../core/index.js';
/**
 * Self-contained infinite canvas engine.
 *
 * A self-contained React + DOM/SVG editor that behaves identically on local
 * and production hosts without a runtime license or service dependency.
 *
 * Dependency-free apart from React itself, and it deliberately avoids this
 * project's custom Tailwind tokens so the file can be lifted out on its own.
 */
export { CANVAS_COLORS, CANVAS_COLOR_KEYS, CANVAS_FONTS, SHAPE_TOOLS } from '../core/index.js';
export type { CanvasColorKey, CanvasFontKey, CanvasShapeType, CanvasTextAlign, OrthogonalVariant } from '../core/index.js';
export { diagramTemplate, getInspectorGroups, isDiagramShape } from './canvasDiagram';
export type { DiagramTemplateKind, InspectorGroup } from './canvasDiagram';
export type CanvasTool = CoreCanvasTool | 'highlighter';
type EditableCanvasShape<Shape> = Shape extends DocumentCanvasShape ? Omit<Shape, 'id' | 'points' | 'fromId' | 'toId' | 'bend' | 'routing' | 'orthogonalVariant' | 'orthogonalWaypoints' | 'arrowStart' | 'arrowEnd'> & {
    id: string;
    points?: [number, number][];
    fromId?: string;
    toId?: string;
    bend?: number;
    routing?: 'straight' | 'curved' | 'orthogonal';
    orthogonalVariant?: OrthogonalVariant;
    orthogonalWaypoints?: {
        x: number;
        y: number;
    }[];
    arrowStart?: 'none' | 'arrow' | 'dot';
    arrowEnd?: 'none' | 'arrow' | 'dot';
} : never;
/** Mutable editor shape view derived from the validated core document union. */
export type CanvasShape = EditableCanvasShape<DocumentCanvasShape>;
interface Camera {
    x: number;
    y: number;
    z: number;
}
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
export declare function applySelectedStrokeWidth(shapes: CanvasShape[], targetIds: Set<string>, strokeWidth: CanvasStrokeWidth): CanvasShape[];
interface SelectedDrawStyle {
    readonly color?: CanvasColorKey;
    readonly strokeWidth?: CanvasStrokeWidth;
}
export declare function applySelectedDrawStyle(shapes: CanvasShape[], targetIds: Set<string>, style: SelectedDrawStyle): CanvasShape[];
export interface InfiniteCanvasHandle {
    addNote: (color: CanvasColorKey) => void;
    addCard: (label: string, category: string, cardStyle: 'solid' | 'glass', color: CanvasColorKey) => void;
    addText: () => void;
    addShape: (type: 'rect' | 'ellipse', color: CanvasColorKey, text?: string) => void;
    addArrow: () => void;
    addImage: (src: string, fileName: string, w: number, h: number) => void;
    addFileCard: (fileName: string, src: string, label: string) => void;
    updateShapeText: (id: string, text: string) => void;
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
    peerCursors?: Array<{
        id: number;
        name: string;
        color: string;
        x: number;
        y: number;
    }>;
    /** Called on every pointer move in page space so the outer layer can broadcast. */
    onLocalCursor?: (page: {
        x: number;
        y: number;
    } | null) => void;
    renderDiagram?: (shape: CanvasShape) => React.ReactNode;
}
export declare const InfiniteCanvas: React.ForwardRefExoticComponent<InfiniteCanvasProps & React.RefAttributes<InfiniteCanvasHandle>>;
//# sourceMappingURL=InfiniteCanvas.d.ts.map