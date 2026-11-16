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
export const FLOATING_BAR_GAP = 12;
/** Minimum inset from the viewport edge the bar keeps. */
export const FLOATING_BAR_MARGIN = 8;

/**
 * Centred above the selection, flipped below when the top edge is too close,
 * always clamped inside the viewport.
 */
export function floatingBarPosition(
  selectionRect: FloatingBarRect,
  viewport: { width: number; height: number },
  barSize: FloatingBarSize,
): { left: number; top: number; placement: 'above' | 'below' } {
  const centreX = (selectionRect.minX + selectionRect.maxX) / 2;
  const aboveTop = selectionRect.minY - FLOATING_BAR_GAP - barSize.height;
  const placement = aboveTop >= FLOATING_BAR_MARGIN ? 'above' : 'below';
  const idealTop = placement === 'above' ? aboveTop : selectionRect.maxY + FLOATING_BAR_GAP;
  const maxLeft = Math.max(FLOATING_BAR_MARGIN, viewport.width - barSize.width - FLOATING_BAR_MARGIN);
  const maxTop = Math.max(FLOATING_BAR_MARGIN, viewport.height - barSize.height - FLOATING_BAR_MARGIN);
  return {
    placement,
    left: Math.min(Math.max(FLOATING_BAR_MARGIN, centreX - barSize.width / 2), maxLeft),
    top: Math.min(Math.max(FLOATING_BAR_MARGIN, idealTop), maxTop),
  };
}
