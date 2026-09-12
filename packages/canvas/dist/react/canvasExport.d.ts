import type { CanvasShape } from './InfiniteCanvas';
/** Builds the existing full-board export without changing document state. */
export declare function buildCanvasSvg(all: CanvasShape[], isDarkMode: boolean): string | null;
/**
 * Builds a bounded SVG for exactly the current selection. Connected endpoints
 * remain available for geometry calculation, but are never emitted as SVG
 * elements unless they are part of the selection.
 */
export declare function buildSelectionCanvasSvg(all: CanvasShape[], selectedIds: ReadonlySet<string>, isDarkMode: boolean): string | null;
export type SvgBuilder = () => string | null;
/** Rasterizes the bounded SVG into a 2x PNG, returning null on browser failures. */
export declare function exportCanvasPng(buildSvg: SvgBuilder): Promise<Blob | null>;
//# sourceMappingURL=canvasExport.d.ts.map