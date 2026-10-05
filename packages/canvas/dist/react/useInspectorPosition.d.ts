import type { CanvasShape } from './InfiniteCanvas';
export declare function useInspectorPosition(s: CanvasShape, selection: readonly CanvasShape[], shapes: CanvasShape[], camera: {
    x: number;
    y: number;
    z: number;
}, canvasSize: {
    width: number;
    height: number;
}): {
    inspectorRef: import("react").RefObject<HTMLDivElement | null>;
    position: {
        left: number;
        top: number;
    };
};
//# sourceMappingURL=useInspectorPosition.d.ts.map