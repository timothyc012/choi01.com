/**
 * Imperative overlay for strokes that are not in React state yet.
 *
 * A stroke in progress is held in a ref and rasterised straight onto a 2D
 * canvas sitting over the SVG layer. Drawing therefore costs zero React
 * renders per pointer sample, which is what keeps fast handwriting from
 * falling behind the pen.
 *
 * Two kinds of stroke live here:
 *   - the ACTIVE stroke, still being drawn;
 *   - PENDING strokes, finished but not yet visible in React state. They stay
 *     painted until the committed shape appears, so there is no blink between
 *     lifting the pen and the SVG shape rendering.
 *
 * Geometry comes from the same `freehandOutlinePoints` the SVG layer uses, so
 * the handoff from overlay to committed shape is invisible.
 */
import type { CanvasShape } from './InfiniteCanvas';
import type { Camera } from './canvasPointerTypes';
/**
 * Append samples to a live stroke, dropping any that land on top of the
 * previous one. The threshold is in page units so it stays a fixed visual
 * distance at every zoom level.
 */
export declare function appendDistinctLivePoints(points: [number, number][], samples: readonly [number, number][], zoom: number): void;
/**
 * Freeze a finished stroke: copy its points and fit the bounding box around
 * every one of them, so hit-testing and marquee selection match the ink.
 */
export declare function finalizeLiveStroke(shape: CanvasShape): CanvasShape;
/** Size the backing store to the container, capped at 2× for memory. */
export declare function prepareLiveStrokeCanvas(canvas: HTMLCanvasElement, width: number, height: number, devicePixelRatio: number): number;
export declare function paintLiveStrokes(canvas: HTMLCanvasElement | null, pending: readonly CanvasShape[], active: CanvasShape | null, camera: Camera, devicePixelRatio?: number): void;
//# sourceMappingURL=liveStrokeCanvas.d.ts.map