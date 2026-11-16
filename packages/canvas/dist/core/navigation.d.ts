import type { CanvasDocument, CanvasShapeId } from './model.js';
/**
 * Shapes whose text, rich text (tags stripped), file name, or category
 * contain the trimmed query. Document order; an empty query matches nothing.
 */
export declare function findCanvasShapes(document: CanvasDocument, query: string): CanvasShapeId[];
/**
 * Next/previous non-arrow shape for Tab / Shift+Tab — top→bottom,
 * same row (centre y within 24pt buckets) left→right. Wraps at the ends.
 * `current` null: direction ≥ 0 → first, < 0 → last.
 */
export declare function nextCanvasShape(document: CanvasDocument, current: CanvasShapeId | null, direction: number): CanvasShapeId | null;
export type CanvasSmartZoomTarget = 'all' | 'selection' | 'actual';
/**
 * ]·[ smart zoom — ported from CanvasViewportMath.smartZoom. Candidate zooms
 * (all fit, selection fit, 100%) sort ascending; duplicates within 0.0001 keep
 * the higher-priority target (selection > all > actual). Returns the first
 * level above (direction > 0) or last below (direction < 0) `current`, or null.
 */
export declare function smartZoomTarget(current: number, allFit: number, selectionFit: number | null, direction: number): CanvasSmartZoomTarget | null;
export interface CanvasMinimapRect {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}
export interface CanvasMinimapLayout {
    /** World rect (canvas coordinates) the minimap shows: content ∪ visible + 10% margin. */
    readonly world: CanvasMinimapRect;
    /** Minimap units per canvas unit. */
    readonly scale: number;
    /** Minimap point at which `world` starts (centring margin). */
    readonly origin: {
        readonly x: number;
        readonly y: number;
    };
    /** Canvas rect → minimap rect. */
    readonly toMinimap: (rect: CanvasMinimapRect) => CanvasMinimapRect;
    /** Minimap point → canvas point. */
    readonly toWorld: (point: {
        readonly x: number;
        readonly y: number;
    }) => {
        readonly x: number;
        readonly y: number;
    };
}
/** Ported from Zero1 CanvasMinimapLayout: world = (content ∪ visible) + 10%. */
export declare function minimapLayout(content: CanvasMinimapRect, visible: CanvasMinimapRect, size: {
    readonly width: number;
    readonly height: number;
}): CanvasMinimapLayout;
//# sourceMappingURL=navigation.d.ts.map