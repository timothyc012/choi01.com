import type { CanvasFontKey, CanvasTextAlign } from '../core/index.js';
import type { CanvasShape } from './InfiniteCanvas';
export declare const CANVAS_FONT_KEYS: readonly CanvasFontKey[];
export declare function normalizeCustomFontFamily(value: string): string;
export declare const CANVAS_FONT_FAMILY_CANDIDATES: string[];
export declare function collectInstalledFontFamilies(): string[];
export declare const TEXT_BOX_MAX_WIDTH = 720;
export declare function fontSizeForShape(s: CanvasShape): number;
export declare function fontStackForShape(s: CanvasShape): string;
export declare function textAlignForShape(s: CanvasShape): CanvasTextAlign;
export declare function canvasFontFromValue(value: string): CanvasFontKey;
export declare function listKindForShape(s: CanvasShape): 'bullet' | 'dash' | 'number' | undefined;
export declare function fittedTextBoxSizeFromMeasurement(width: number, height: number): {
    w: number;
    h: number;
};
export declare function measureTextBoxContent(el: HTMLElement, shape: CanvasShape): {
    w: number;
    h: number;
};
//# sourceMappingURL=canvasText.d.ts.map