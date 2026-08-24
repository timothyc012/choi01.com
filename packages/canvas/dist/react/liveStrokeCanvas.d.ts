import type { CanvasShape } from './InfiniteCanvas';
import type { Camera } from './canvasPointerTypes';
export declare function appendDistinctLivePoints(points: [number, number][], samples: readonly [number, number][], zoom: number): void;
export declare function finalizeLiveStroke(shape: CanvasShape): CanvasShape;
export declare function prepareLiveStrokeCanvas(canvas: HTMLCanvasElement, width: number, height: number, devicePixelRatio: number): number;
export declare function paintLiveStrokes(canvas: HTMLCanvasElement | null, pending: readonly CanvasShape[], active: CanvasShape | null, camera: Camera, devicePixelRatio?: number): void;
//# sourceMappingURL=liveStrokeCanvas.d.ts.map