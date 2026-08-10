import { useCanvasImperativeHandle } from './useCanvasImperativeHandle';
import { useCanvasKeyboardInteractions } from './useCanvasKeyboardInteractions';
import { useCanvasPointerInteractions } from './useCanvasPointerInteractions';
type PointerOptions = Parameters<typeof useCanvasPointerInteractions>[0];
type RuntimeInteractionsOptions = PointerOptions & Omit<Parameters<typeof useCanvasImperativeHandle>[0], 'onToolChange'> & Omit<Parameters<typeof useCanvasKeyboardInteractions>[0], 'onToolChange' | 'toolRef'>;
/** Installs the imperative API, keyboard semantics, and pointer gesture runtime. */
export declare function useCanvasRuntimeInteractions(options: RuntimeInteractionsOptions): import("./useCanvasPointerInteractions").PointerInteractionHandlers;
export {};
//# sourceMappingURL=useCanvasRuntimeInteractions.d.ts.map