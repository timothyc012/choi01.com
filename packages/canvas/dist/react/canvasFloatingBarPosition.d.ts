/**
 * Screen-space placement for the floating selection bar. Kept dependency-free
 * (no React, no shape model) so the geometry rules can be unit-tested under
 * plain `node --test` and reused by any host that wraps the canvas.
 */
export interface FloatingBarRect {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}
export interface FloatingBarSize {
    width: number;
    height: number;
}
/** Screen-space gap between the bar and the selection. */
export declare const FLOATING_BAR_GAP = 12;
/** Minimum inset from the viewport edge the bar keeps. */
export declare const FLOATING_BAR_MARGIN = 8;
/**
 * Centred above the selection, flipped below when the top edge is too close,
 * always clamped inside the viewport.
 */
export declare function floatingBarPosition(selectionRect: FloatingBarRect, viewport: {
    width: number;
    height: number;
}, barSize: FloatingBarSize): {
    left: number;
    top: number;
    placement: 'above' | 'below';
};
//# sourceMappingURL=canvasFloatingBarPosition.d.ts.map