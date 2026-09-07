import type { RefObject } from 'react';
import type { CanvasTool } from './InfiniteCanvas';
interface NativeInputOptions {
    containerRef: RefObject<HTMLDivElement | null>;
    penModeRef: RefObject<boolean>;
    toolRef: RefObject<CanvasTool>;
}
/** Native browser gestures are separate from the pointer events that edit ink. */
export declare function useCanvasNativeInput({ containerRef, penModeRef, toolRef }: NativeInputOptions): void;
export {};
//# sourceMappingURL=useCanvasNativeInput.d.ts.map