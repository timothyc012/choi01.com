import { useRef } from 'react';
import type { PointerLifecycleOptions } from './canvasPointerLifecycleTypes';
import { useCanvasPointerFinish } from './useCanvasPointerFinish';
import { useCanvasPointerMove } from './useCanvasPointerMove';

/** Composes the movement and completion listeners for an active pointer gesture. */
export function useCanvasPointerLifecycle(options: PointerLifecycleOptions): void {
  const pendingDrawPointsRef = useRef<[number, number][]>([]);
  const drawRafRef = useRef<number | null>(null);
  const rawDrawPointerIdsRef = useRef(new Set<number>());
  const lifecycleOptions = { ...options, pendingDrawPointsRef, drawRafRef, rawDrawPointerIdsRef };
  useCanvasPointerMove(lifecycleOptions);
  useCanvasPointerFinish(lifecycleOptions);
}
