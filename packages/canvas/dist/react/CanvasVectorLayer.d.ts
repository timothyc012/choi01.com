import React from 'react';
import type { CanvasShape } from './InfiniteCanvas';
interface Camera {
    x: number;
    y: number;
    z: number;
}
type VectorInteraction = {
    kind: string;
    id?: string;
    fromId?: string;
    toX?: number;
    toY?: number;
    hoverId?: string | null;
};
interface Guide {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}
interface Marquee {
    startX: number;
    startY: number;
    curX: number;
    curY: number;
}
interface CanvasVectorLayerProps {
    visiblePaintOrder: CanvasShape[];
    selected: Set<string>;
    shapeById: Map<string, CanvasShape>;
    allShapes: CanvasShape[];
    camera: Camera;
    interaction: VectorInteraction;
    eraserPos: {
        x: number;
        y: number;
    } | null;
    guides: Guide[];
    marquee: Marquee | null;
    strokeColorOf: (shape: CanvasShape) => string;
}
/** SVG-only scene for freehand strokes, connectors and transient guides. */
export declare function CanvasVectorLayer({ visiblePaintOrder, selected, shapeById, allShapes, camera, interaction, eraserPos, guides, marquee, strokeColorOf, }: CanvasVectorLayerProps): React.JSX.Element;
export {};
//# sourceMappingURL=CanvasVectorLayer.d.ts.map