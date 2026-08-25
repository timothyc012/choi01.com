import type { CanvasShapeType } from '../core/index.js';
import type { CanvasShape } from './InfiniteCanvas';
export declare function effectiveFill(s: CanvasShape): string;
/** A custom stroke colour set through the colour wheel wins over the palette. */
export declare function effectiveStroke(s: CanvasShape): string;
export declare function effectiveBorder(s: CanvasShape): string;
export declare function effectiveText(s: CanvasShape): string;
export declare function polygonPoints(type: CanvasShapeType, w: number, h: number): string;
/**
 * Build a smooth SVG path from raw freehand points using quadratic Bézier
 * through midpoints. Used for export and as a fallback.
 */
export declare function strokePath(points: [number, number][]): string;
/**
 * The single definition of a stroke's shape. The live overlay (canvas), the
 * committed shape (SVG), and the export path all resolve through here, so a
 * stroke keeps its exact appearance when the pen lifts and the in-progress
 * stroke is replaced by the committed one.
 */
export declare function freehandStrokeOptions(strokeWidth: number, mode: 'pen' | 'highlighter'): {
    size: number;
    thinning: number;
    smoothing: number;
    streamline: number;
    last: boolean;
};
/** Radius of the dot a single-point tap leaves behind. */
export declare function freehandDotRadius(strokeWidth: number, mode: 'pen' | 'highlighter'): number;
/**
 * The raw perfect-freehand outline polygon. Callers that rasterise directly
 * (the live-stroke canvas) want these points; callers that emit SVG want
 * `freehandOutlinePath`.
 */
export declare function freehandOutlinePoints(points: [number, number][], strokeWidth: number, mode: 'pen' | 'highlighter'): number[][];
export declare function freehandOutlinePath(points: [number, number][], strokeWidth: number, mode: 'pen' | 'highlighter'): string;
/**
 * The outline path for a committed stroke, cached against the shape object.
 *
 * Rebuilding a perfect-freehand outline is O(points), and a board re-renders
 * for reasons that have nothing to do with its strokes — panning, selecting,
 * editing a note. Shapes are immutable, so a shape that has not changed keeps
 * its path. The stroke under the pen does not come through here at all; it is
 * rasterised on the live overlay and only reaches this cache once, when it is
 * committed.
 */
export declare function shapeOutlinePath(s: CanvasShape): string;
export declare function escapeHtml(s: string): string;
type TextRun = {
    text: string;
    bold: boolean;
    italic: boolean;
    underline: boolean;
};
export declare function htmlToLines(html: string): TextRun[][];
export declare function shapeHtml(s: CanvasShape): string;
export declare function safeAssetUrl(value: string | undefined): string | undefined;
export declare function sanitizeShapeForCanvas(shape: CanvasShape): CanvasShape | null;
export declare function shapePlainText(s: CanvasShape): string;
export {};
//# sourceMappingURL=canvasShapeStyle.d.ts.map