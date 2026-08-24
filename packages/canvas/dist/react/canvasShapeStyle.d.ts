import type { CanvasShapeType } from '../core/index.js';
import type { CanvasShape } from './InfiniteCanvas';
export declare function effectiveFill(s: CanvasShape): string;
export declare function effectiveStroke(s: CanvasShape): string;
export declare function effectiveBorder(s: CanvasShape): string;
export declare function effectiveText(s: CanvasShape): string;
export declare function polygonPoints(type: CanvasShapeType, w: number, h: number): string;
/**
 * Build a smooth SVG path from raw freehand points using quadratic Bézier
 * through midpoints. Used for export and as a fallback.
 */
export declare function strokePath(points: [number, number][]): string;
export declare function freehandOutlinePoints(points: [number, number][], strokeWidth: number, mode: 'pen' | 'highlighter'): number[][];
export declare function freehandOutlinePath(points: [number, number][], strokeWidth: number, mode: 'pen' | 'highlighter'): string;
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