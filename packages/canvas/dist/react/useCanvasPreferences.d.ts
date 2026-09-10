import type { CanvasInkStyle } from '../core/index.js';
export interface CanvasPreferenceOptions {
    /** Style for newly created strokes; omitted values restore the local choice, initially raw. */
    drawInkStyle?: CanvasInkStyle;
    onDrawInkStyleChange?: (style: CanvasInkStyle) => void;
    /** Align moved objects to neighbours; enabled by default, independently of pen correction. */
    objectSnapEnabled?: boolean;
    onObjectSnapEnabledChange?: (enabled: boolean) => void;
}
/** Preferences never mutate the document or the stroke already under the pen. */
export declare function useCanvasPreferences(options: CanvasPreferenceOptions): {
    drawInkStyle: CanvasInkStyle;
    objectSnapEnabled: boolean;
    selectInkStyle: (style: CanvasInkStyle) => void;
    selectObjectSnap: (enabled: boolean) => void;
};
//# sourceMappingURL=useCanvasPreferences.d.ts.map