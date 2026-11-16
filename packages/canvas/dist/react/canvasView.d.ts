import type { CanvasShape } from './InfiniteCanvas';
import type { Camera } from './canvasPointerTypes';
export interface ViewBounds {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}
/** Combined bounds of the given shapes, or null when empty. */
export declare function shapesBounds(shapes: readonly CanvasShape[]): ViewBounds | null;
/** Same fit rule as zoomToFit: pad around the bounds, zoom capped to the range. */
export declare function cameraFitting(b: ViewBounds, viewW: number, viewH: number, minZoom: number, maxZoom: number): Camera;
/** Camera that keeps the current zoom but centres the view on world point p. */
export declare function cameraCentering(point: {
    x: number;
    y: number;
}, viewW: number, viewH: number, z: number): Camera;
/** True when the bounds are fully inside the camera's viewport. */
export declare function boundsVisible(b: ViewBounds, camera: Camera, viewW: number, viewH: number): boolean;
/** Find results for the find bar, in document order. */
export declare function findShapeIds(shapes: readonly CanvasShape[], query: string): string[];
/** Tab/Shift+Tab target in Zero1 reading order, skipping arrows. */
export declare function nextShapeId(shapes: readonly CanvasShape[], currentId: string | null, direction: number): string | null;
//# sourceMappingURL=canvasView.d.ts.map