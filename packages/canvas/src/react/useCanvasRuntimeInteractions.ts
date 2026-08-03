import { useCanvasImperativeHandle } from './useCanvasImperativeHandle';
import { useCanvasKeyboardInteractions } from './useCanvasKeyboardInteractions';
import { useCanvasPointerInteractions } from './useCanvasPointerInteractions';

type RuntimeInteractionsOptions = Parameters<typeof useCanvasImperativeHandle>[0]
  & Parameters<typeof useCanvasKeyboardInteractions>[0]
  & Parameters<typeof useCanvasPointerInteractions>[0];

/** Installs the imperative API, keyboard semantics, and pointer gesture runtime. */
export function useCanvasRuntimeInteractions(options: RuntimeInteractionsOptions) {
  useCanvasImperativeHandle(options);
  useCanvasKeyboardInteractions(options);
  return useCanvasPointerInteractions(options);
}
