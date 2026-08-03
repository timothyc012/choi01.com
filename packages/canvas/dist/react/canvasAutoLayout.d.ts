import type { CanvasShape } from './InfiniteCanvas';
type ShapeUpdater = CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[]);
type CommitShapes = (next: ShapeUpdater) => void;
/**
 * Runs the one-shot force-directed layout used by the imperative canvas API.
 * The caller owns history; this helper invokes commit exactly once on success.
 */
export declare function autoLayoutCanvas(all: CanvasShape[], commit: CommitShapes, onComplete: () => void): void;
export {};
//# sourceMappingURL=canvasAutoLayout.d.ts.map