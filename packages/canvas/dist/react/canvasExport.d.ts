import type { CanvasShape } from './InfiniteCanvas';
/** Builds a bounded, sanitized SVG snapshot suitable for download or rasterization. */
export declare function buildCanvasSvg(all: CanvasShape[], isDarkMode: boolean): string | null;
export type SvgBuilder = () => string | null;
/** Rasterizes the bounded SVG into a 2x PNG, returning null on browser failures. */
export declare function exportCanvasPng(buildSvg: SvgBuilder): Promise<Blob | null>;
//# sourceMappingURL=canvasExport.d.ts.map