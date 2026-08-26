import type { CanvasShape } from './InfiniteCanvas';
import type { BoundingBox, EdgeSide, OrthogonalPoint } from './canvasRouting';
export type { BoundingBox, EdgeSide, OrthogonalPoint } from './canvasRouting';
export { orthogonalEndAngle, orthogonalPathPoints, pathMidpoint, segmentAngle, toPath } from './canvasRouting';
export { effectiveFill, effectiveStroke, effectiveBorder, effectiveText, polygonPoints, strokePath, freehandOutlinePath, escapeHtml, htmlToLines, shapeHtml, safeAssetUrl, sanitizeShapeForCanvas, shapePlainText, } from './canvasShapeStyle';
export interface SnapResult {
    dx: number;
    dy: number;
    guides: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }[];
}
export declare function rawBounds(s: CanvasShape): BoundingBox;
export declare function centreOf(s: CanvasShape): {
    x: number;
    y: number;
};
export declare function bounds(s: CanvasShape): BoundingBox;
export declare function toLocal(s: CanvasShape, px: number, py: number): {
    x: number;
    y: number;
};
export declare function hitTest(s: CanvasShape, px: number, py: number, zoom: number, byId?: Map<string, CanvasShape>, allShapes?: CanvasShape[]): boolean;
export declare function edgePoint(shape: CanvasShape, towardX: number, towardY: number): {
    x: number;
    y: number;
    side: EdgeSide;
};
export declare function collectObstaclesForArrow(allShapes: CanvasShape[], arrow: CanvasShape, fromId?: string, toId?: string): BoundingBox[];
export declare function arrowGeometry(arrow: CanvasShape, byId: Map<string, CanvasShape>, allShapes?: CanvasShape[]): {
    start: OrthogonalPoint;
    end: OrthogonalPoint;
    control: {
        x: number;
        y: number;
    };
    bend: number;
    routing: "straight" | "curved";
    pathPoints?: undefined;
} | {
    start: OrthogonalPoint;
    end: OrthogonalPoint;
    control: {
        x: number;
        y: number;
    };
    bend: number;
    routing: "orthogonal";
    pathPoints: OrthogonalPoint[];
};
export declare function bezierAt(t: number, s: {
    x: number;
    y: number;
}, c: {
    x: number;
    y: number;
}, e: {
    x: number;
    y: number;
}): {
    x: number;
    y: number;
};
type EraserPoint = {
    x: number;
    y: number;
};
/**
 * Rub ink out along a swept circular eraser path.
 *
 * `radius` is expressed in screen pixels. Draw strokes are split into the
 * untouched runs; object shapes retain the existing whole-object behaviour.
 */
export declare function eraseAlongPath(shapes: CanvasShape[], from: EraserPoint, to: EraserPoint, radius: number, zoom: number): CanvasShape[];
export declare function eraseAt(shapes: CanvasShape[], px: number, py: number, radius: number, zoom: number): CanvasShape[];
export declare function computeSnap(movingBox: BoundingBox, others: CanvasShape[], zoom: number): SnapResult;
//# sourceMappingURL=canvasGeometry.d.ts.map