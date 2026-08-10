import { useMemo } from 'react';
import type { RefObject } from 'react';
import type { CanvasTool as CoreCanvasTool } from '../core/index.ts';
import { useCanvasImperativeHandle } from './useCanvasImperativeHandle';
import { useCanvasKeyboardInteractions } from './useCanvasKeyboardInteractions';
import { useCanvasPointerInteractions } from './useCanvasPointerInteractions';

type PointerOptions = Parameters<typeof useCanvasPointerInteractions>[0];
type RuntimeInteractionsOptions = PointerOptions
  & Omit<Parameters<typeof useCanvasImperativeHandle>[0], 'onToolChange'>
  & Omit<Parameters<typeof useCanvasKeyboardInteractions>[0], 'onToolChange' | 'toolRef'>;

/** Installs the imperative API, keyboard semantics, and pointer gesture runtime. */
export function useCanvasRuntimeInteractions(options: RuntimeInteractionsOptions) {
  useCanvasImperativeHandle(options);
  const coreToolRef = useMemo<RefObject<CoreCanvasTool>>(() => ({
    get current() {
      return options.toolRef.current === 'highlighter' ? 'draw' : options.toolRef.current;
    },
    set current(tool: CoreCanvasTool) {
      options.toolRef.current = tool;
    },
  }), [options.toolRef]);
  useCanvasKeyboardInteractions({ ...options, toolRef: coreToolRef });
  return useCanvasPointerInteractions(options);
}
