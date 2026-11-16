import React from 'react';
import type { CanvasShape } from './InfiniteCanvas';
interface Camera {
    x: number;
    y: number;
    z: number;
}
interface CanvasObjectLayerProps {
    visiblePaintOrder: CanvasShape[];
    selected: Set<string>;
    editingId: string | null;
    camera: Camera;
    shapeById: Map<string, CanvasShape>;
    allShapes: CanvasShape[];
    peerCursors?: Array<{
        id: number;
        name: string;
        color: string;
        x: number;
        y: number;
    }>;
    /** Select-tool hover target; connect dots show on it even unselected. */
    hoveredShapeId?: string | null;
    /** Connect dots are select-tool chrome; hidden while a gesture is active. */
    dotsEnabled?: boolean;
    isDarkMode: boolean;
    renderEditor: (extra: string, style?: React.CSSProperties) => React.ReactNode;
    renderShapeBody: (shape: CanvasShape) => React.ReactNode;
    setEditingId: (id: string | null) => void;
    onBendHandleDown: (event: React.PointerEvent, shape: CanvasShape) => void;
    onOrthogonalSegmentHandleDown: (event: React.PointerEvent, shape: CanvasShape, segmentIndex: number) => void;
    onArrowEndpointDown: (event: React.PointerEvent, shape: CanvasShape, endpoint: 'start' | 'end') => void;
    onResizeHandleDown: (event: React.PointerEvent, shape: CanvasShape, handle: 'nw' | 'ne' | 'sw' | 'se') => void;
    onRotateHandleDown: (event: React.PointerEvent, shape: CanvasShape) => void;
    onConnectHandleDown: (event: React.PointerEvent, shape: CanvasShape) => void;
}
/** DOM layer for editable shapes and remote cursors; vectors stay in SVG. */
export declare function CanvasObjectLayer({ visiblePaintOrder, selected, editingId, camera, shapeById, allShapes, peerCursors, hoveredShapeId, dotsEnabled, isDarkMode, renderEditor, renderShapeBody, setEditingId, onBendHandleDown, onOrthogonalSegmentHandleDown, onResizeHandleDown, onRotateHandleDown, onConnectHandleDown, onArrowEndpointDown, }: CanvasObjectLayerProps): React.JSX.Element;
export {};
//# sourceMappingURL=CanvasObjectLayer.d.ts.map