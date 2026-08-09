import type { RefObject } from 'react';
import type { CanvasShapeType } from '../core/index.js';
import type { CanvasShape } from './InfiniteCanvas';
export interface Camera {
    x: number;
    y: number;
    z: number;
}
export type PointerPosition = {
    x: number;
    y: number;
};
export type Interaction = {
    kind: 'none';
} | {
    kind: 'pan';
    startX: number;
    startY: number;
    camX: number;
    camY: number;
} | {
    kind: 'pinch';
    startDist: number;
    startZoom: number;
    startMidX: number;
    startMidY: number;
    camX: number;
    camY: number;
} | {
    kind: 'marquee';
    startX: number;
    startY: number;
    curX: number;
    curY: number;
    screenStartX: number;
    screenStartY: number;
} | {
    kind: 'move';
    startX: number;
    startY: number;
    origin: Map<string, CanvasShape>;
    editOnReleaseId?: string;
} | {
    kind: 'resize';
    id: string;
    handle: string;
    start: CanvasShape;
} | {
    kind: 'rotate';
    id: string;
    startAngle: number;
    startRotation: number;
} | {
    kind: 'creating';
    id: string;
    startX: number;
    startY: number;
} | {
    kind: 'drawing';
    id: string;
} | {
    kind: 'connect';
    fromId: string;
    toX: number;
    toY: number;
    hoverId: string | null;
} | {
    kind: 'bend';
    id: string;
} | {
    kind: 'orthogonal-segment';
    id: string;
    segmentIndex: number;
} | {
    kind: 'arrow-endpoint';
    id: string;
    endpoint: 'start' | 'end';
    hoverId: string | null;
} | {
    kind: 'erasing';
};
export declare const MIN_ZOOM = 0.1;
export declare const MAX_ZOOM = 4;
export declare const ERASER_RADIUS = 14;
/** Screen-space drift tolerated between the two presses of a double-click. */
export declare const DOUBLE_CLICK_DRIFT_PX = 4;
export declare const CONNECTABLE: CanvasShapeType[];
export type InteractionRef = RefObject<Interaction>;
//# sourceMappingURL=canvasPointerTypes.d.ts.map