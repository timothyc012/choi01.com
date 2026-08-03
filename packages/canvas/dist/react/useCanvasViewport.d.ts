import type { RefObject } from 'react';
import type { CanvasShape } from './InfiniteCanvas';
interface Camera {
    x: number;
    y: number;
    z: number;
}
export interface CanvasViewportResult {
    shapeById: Map<string, CanvasShape>;
    visiblePaintOrder: CanvasShape[];
}
interface CanvasViewportOptions {
    containerRef: RefObject<HTMLDivElement | null>;
    shapesRef: RefObject<CanvasShape[]>;
    shapes: CanvasShape[];
    camera: Camera;
    selected: Set<string>;
    editingId: string | null;
    boardIdentity: string;
}
/** Measures the host and derives culling/paint-order inputs for both canvas layers. */
export declare function useCanvasViewport({ containerRef, shapesRef, shapes, camera, selected, editingId, boardIdentity, }: CanvasViewportOptions): CanvasViewportResult;
export {};
//# sourceMappingURL=useCanvasViewport.d.ts.map