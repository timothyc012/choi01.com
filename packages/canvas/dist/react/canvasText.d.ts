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
/** Smallest font a note shrinks to before it clips instead of shrinking further. */
export declare const NOTE_FONT_MIN = 11;
export interface TextBoxSize {
    width: number;
    height: number;
}
/**
 * Largest font size at which `text` fits `box`. `max` is the note's nominal
 * size (a user-set `fontSize` caps the result too); `measure` is injected so
 * the fit rule stays unit-testable without a layout engine.
 */
export declare function fitNoteFontSize(text: string, box: TextBoxSize, max: number, min: number, measure: (text: string, width: number, size: number) => TextBoxSize): number;
/**
 * The size a note's text view renders at: its nominal size unless the
 * content overflows the box, in which case it shrinks toward NOTE_FONT_MIN.
 * `manualSize`/`fontSize` stay authoritative — they only raise the cap.
 * Results cache per (html, box, cap) so per-frame re-renders stay cheap.
 */
export declare function noteFontSizeForShape(s: CanvasShape): number;
//# sourceMappingURL=canvasText.d.ts.map