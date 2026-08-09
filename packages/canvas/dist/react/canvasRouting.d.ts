import type { OrthogonalVariant } from '../core/model.js';
export type EdgeSide = 'n' | 's' | 'e' | 'w';
export type OrthogonalPoint = {
    x: number;
    y: number;
    side?: EdgeSide;
};
export type BoundingBox = {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
};
export declare function toPath(points: OrthogonalPoint[]): string;
export declare function pathMidpoint(points: OrthogonalPoint[]): OrthogonalPoint;
export declare function segmentAngle(a: OrthogonalPoint, b: OrthogonalPoint): number;
export declare function compactPath(points: OrthogonalPoint[]): OrthogonalPoint[];
export declare function orthogonalPathPoints(start: OrthogonalPoint, end: OrthogonalPoint, obstacles?: BoundingBox[], variant?: OrthogonalVariant): OrthogonalPoint[];
export declare function orthogonalEndAngle(pathPoints: OrthogonalPoint[]): number;
//# sourceMappingURL=canvasRouting.d.ts.map