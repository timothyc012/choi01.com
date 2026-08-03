import { type CanvasCamera, type CanvasDocument, type CanvasShape, type CanvasShapeId, type CanvasSnapshot } from './model.js';
export type CanvasCommand = {
    readonly type: 'createShapes';
    readonly shapes: readonly CanvasShape[];
} | {
    readonly type: 'moveShapes';
    readonly ids: readonly CanvasShapeId[];
    readonly dx: number;
    readonly dy: number;
} | {
    readonly type: 'deleteShapes';
    readonly ids: readonly CanvasShapeId[];
};
export declare function createCanvasDocument(input?: {
    readonly id?: string;
    readonly shapes?: readonly CanvasShape[];
}): CanvasDocument;
export declare function applyCanvasCommand(document: CanvasDocument, command: CanvasCommand): CanvasDocument;
export declare function serializeCanvasSnapshot(document: CanvasDocument, camera: CanvasCamera): CanvasSnapshot;
/** Parse one untrusted shape at collaboration/render boundaries. */
export declare function parseCanvasShape(input: unknown): CanvasShape;
export declare function parseCanvasSnapshot(input: unknown): CanvasSnapshot;
//# sourceMappingURL=document.d.ts.map