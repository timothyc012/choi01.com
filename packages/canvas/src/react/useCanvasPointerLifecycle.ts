import type { PointerLifecycleOptions } from './canvasPointerLifecycleTypes';
import { useCanvasPointerFinish } from './useCanvasPointerFinish';
import { useCanvasPointerMove } from './useCanvasPointerMove';

/** Composes the movement and completion listeners for an active pointer gesture. */
export function useCanvasPointerLifecycle(options: PointerLifecycleOptions): void {
  useCanvasPointerMove(options);
  useCanvasPointerFinish(options);
}
