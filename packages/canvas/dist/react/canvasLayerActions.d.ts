import type { CanvasShape } from './InfiniteCanvas';
export type LayerDirection = 'forward' | 'backward' | 'front' | 'back';
export declare function withNoteChildren(shapes: readonly CanvasShape[], ids: ReadonlySet<string>): Set<string>;
export declare function rotateShapes(shapes: CanvasShape[], ids: ReadonlySet<string>, deltaRadians: number): CanvasShape[];
export declare function reorderShapes(shapes: CanvasShape[], ids: ReadonlySet<string>, direction: LayerDirection): CanvasShape[];
//# sourceMappingURL=canvasLayerActions.d.ts.map