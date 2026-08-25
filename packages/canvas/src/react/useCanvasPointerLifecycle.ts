import { useRef } from 'react';
import type { PointerLifecycleOptions } from './canvasPointerLifecycleTypes';
import { useCanvasPointerFinish } from './useCanvasPointerFinish';
import { useCanvasPointerMove } from './useCanvasPointerMove';

/** Composes the movement and completion listeners for an active pointer gesture. */
export function useCanvasPointerLifecycle(options: PointerLifecycleOptions): void {
  // The draw buffer is shared between move (which fills it) and finish (which
  // drains it), so it is owned here rather than inside either hook.
  const pendingDrawPointsRef = useRef<[number, number][]>([]);
  const drawRafRef = useRef<number | null>(null);
  const lifecycleOptions = { ...options, pendingDrawPointsRef, drawRafRef };
  useCanvasPointerMove(lifecycleOptions);
  useCanvasPointerFinish(lifecycleOptions);
}
