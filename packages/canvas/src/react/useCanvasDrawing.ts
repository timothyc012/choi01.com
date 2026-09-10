import { useEffect, useMemo, useRef } from 'react';
import type { CanvasShape } from './InfiniteCanvas';
import type { PointerLifecycleOptions } from './canvasPointerLifecycleTypes';
import { isIosInput, pointerSamples } from './canvasInput';
import { appendDistinctLivePoints, finalizeLiveStroke, paintLiveStrokes } from './liveStrokeCanvas';

export interface CanvasDrawingHandlers {
  start: (shape: CanvasShape, event: { pointerId: number }) => void;
  move: (event: PointerEvent) => void;
  finish: (event?: PointerEvent, immediate?: boolean) => void;
  cancel: () => void;
}

type DrawingOptions = Pick<PointerLifecycleOptions,
  | 'containerRef' | 'pointers' | 'interactionRef' | 'cameraRef' | 'toPage'
  | 'applyInteraction' | 'liveStrokeCanvasRef' | 'activeDrawRef'
  | 'pendingDrawsRef' | 'queuedDrawIdsRef' | 'commitDrawBatch'
>;

/** Owns the complete lifetime of an ink stroke, including interrupted contacts. */
export function useCanvasDrawing(options: DrawingOptions): CanvasDrawingHandlers {
  const latest = useRef(options);
  latest.current = options;
  const pendingPoints = useRef<[number, number][]>([]);
  const paintFrame = useRef<number | null>(null);
  const commitFrame = useRef<number | null>(null);
  const session = useRef<{ shapeId: string; pointerId: number; raw: boolean } | null>(null);

  const handlers = useMemo<CanvasDrawingHandlers>(() => {
    const repaint = () => {
      const o = latest.current;
      paintLiveStrokes(o.liveStrokeCanvasRef.current, o.pendingDrawsRef.current,
        o.activeDrawRef.current, o.cameraRef.current, window.devicePixelRatio || 1);
    };
    const clearPaint = () => {
      if (paintFrame.current !== null) cancelAnimationFrame(paintFrame.current);
      paintFrame.current = null;
    };
    const drain = () => {
      const o = latest.current;
      const active = o.activeDrawRef.current;
      const points = pendingPoints.current.splice(0);
      if (active?.id === session.current?.shapeId && active?.points) {
        appendDistinctLivePoints(active.points, points, o.cameraRef.current.z, active.type === 'draw' ? active.inkStyle : undefined);
      }
    };
    const commitPending = () => {
      commitFrame.current = null;
      const o = latest.current;
      const batch = o.pendingDrawsRef.current.filter(stroke => !o.queuedDrawIdsRef.current.has(stroke.id));
      if (batch.length === 0) return;
      for (const stroke of batch) o.queuedDrawIdsRef.current.add(stroke.id);
      o.commitDrawBatch(batch);
    };
    const finish: CanvasDrawingHandlers['finish'] = (event, immediate = false) => {
      const owner = session.current;
      if (event && owner?.pointerId !== event.pointerId) return;
      const o = latest.current;
      clearPaint();
      drain();
      const active = o.activeDrawRef.current;
      if (owner && active?.id === owner.shapeId && active.points) {
        // Cancellation/capture-loss coordinates are not new ink samples.
        if (event?.type === 'pointerup' && Number.isFinite(event.clientX) && Number.isFinite(event.clientY)) {
          const point = o.toPage(event.clientX, event.clientY);
          appendDistinctLivePoints(active.points, [[point.x, point.y]], o.cameraRef.current.z, active.type === 'draw' ? active.inkStyle : undefined);
        }
        o.pendingDrawsRef.current.push(finalizeLiveStroke(active));
        o.activeDrawRef.current = null;
        o.pointers.current.delete(owner.pointerId);
        if (o.interactionRef.current.kind === 'drawing') o.applyInteraction({ kind: 'none' });
        repaint();
      }
      session.current = null;
      if (immediate) {
        if (commitFrame.current !== null) cancelAnimationFrame(commitFrame.current);
        commitPending();
      } else if (commitFrame.current === null) {
        commitFrame.current = requestAnimationFrame(commitPending);
      }
    };
    return {
      start(shape, event) {
        clearPaint();
        pendingPoints.current = [];
        session.current = { shapeId: shape.id, pointerId: event.pointerId, raw: false };
        latest.current.activeDrawRef.current = shape;
        latest.current.applyInteraction({ kind: 'drawing', id: shape.id, pointerId: event.pointerId });
        repaint();
      },
      move(event) {
        const o = latest.current;
        const owner = session.current;
        const active = o.activeDrawRef.current;
        if (!owner || owner.pointerId !== event.pointerId || active?.id !== owner.shapeId || !active.points
          || o.interactionRef.current.kind !== 'drawing') return;
        if (event.type === 'pointerrawupdate') {
          if (isIosInput()) return;
          owner.raw = true;
        } else if (owner.raw) {
          // The browser dispatches the same hardware samples again in its
          // frame-aligned pointermove. Never append that path a second time.
          return;
        }
        if (event.shiftKey) {
          clearPaint();
          pendingPoints.current = [];
          const p = o.toPage(event.clientX, event.clientY);
          active.points = [active.points[0], [p.x, p.y]];
          repaint();
          return;
        }
        for (const sample of pointerSamples(event)) {
          const p = o.toPage(sample.clientX, sample.clientY);
          pendingPoints.current.push([p.x, p.y]);
        }
        if (paintFrame.current !== null) return;
        paintFrame.current = requestAnimationFrame(() => {
          paintFrame.current = null;
          drain();
          repaint();
        });
      },
      finish,
      cancel() {
        clearPaint();
        pendingPoints.current = [];
        const o = latest.current;
        const owner = session.current;
        if (owner && o.activeDrawRef.current?.id === owner.shapeId) {
          o.activeDrawRef.current = null;
          o.pointers.current.delete(owner.pointerId);
          if (o.interactionRef.current.kind === 'drawing') o.applyInteraction({ kind: 'none' });
          repaint();
        }
        session.current = null;
      },
    };
  }, []);

  useEffect(() => {
    const container = options.containerRef.current;
    const onLostCapture = (event: PointerEvent) => {
      if (event.target === container && latest.current.pointers.current.has(event.pointerId)
        && !container?.hasPointerCapture(event.pointerId)) handlers.finish(event);
    };
    const onBlur = () => {
      // rAF can stop while a tab is hidden; commit the last real samples now.
      handlers.finish(undefined, true);
      const o = latest.current;
      if (o.interactionRef.current.kind === 'pinch') o.applyInteraction({ kind: 'none' });
      // Other tools still own their release and history transaction.
      if (o.interactionRef.current.kind === 'none') o.pointers.current.clear();
    };
    const onVisibility = () => { if (document.visibilityState === 'hidden') onBlur(); };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && session.current && event.target instanceof Node && container?.contains(event.target)) {
        event.preventDefault();
        handlers.cancel();
      }
    };
    window.addEventListener('pointerrawupdate', handlers.move);
    window.addEventListener('blur', onBlur);
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('visibilitychange', onVisibility);
    container?.addEventListener('lostpointercapture', onLostCapture);
    return () => {
      window.removeEventListener('pointerrawupdate', handlers.move);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('visibilitychange', onVisibility);
      container?.removeEventListener('lostpointercapture', onLostCapture);
      if (paintFrame.current !== null) cancelAnimationFrame(paintFrame.current);
      if (commitFrame.current !== null) cancelAnimationFrame(commitFrame.current);
      paintFrame.current = null;
      commitFrame.current = null;
      pendingPoints.current = [];
      session.current = null;
    };
  }, [handlers, options.containerRef]);
  return handlers;
}
