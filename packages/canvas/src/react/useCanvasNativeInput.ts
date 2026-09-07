import { useEffect } from 'react';
import type { RefObject } from 'react';
import type { CanvasTool } from './InfiniteCanvas';
import { isIosInput } from './canvasInput';

interface NativeInputOptions {
  containerRef: RefObject<HTMLDivElement | null>;
  penModeRef: RefObject<boolean>;
  toolRef: RefObject<CanvasTool>;
}

/** Native browser gestures are separate from the pointer events that edit ink. */
export function useCanvasNativeInput({ containerRef, penModeRef, toolRef }: NativeInputOptions): void {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const doc = container.ownerDocument;
    const ownerWindow = doc.defaultView;
    const claimedTouches = new Set<number>();
    const preventTouch = (event: TouchEvent) => {
      const touches = Array.from(event.changedTouches);
      const wasClaimed = event.type !== 'touchstart' && touches.some(touch => claimedTouches.has(touch.identifier));
      if (event.type !== 'touchstart') {
        for (const touch of touches) claimedTouches.delete(touch.identifier);
      }
      if (event.type === 'touchcancel') return;
      const target = event.target instanceof Element ? event.target : null;
      // Preserve tap-generated clicks and native editing in the controls.
      if (target?.closest('button, input, textarea, select, a, [data-canvas-inspector], [data-canvas-pen-palette]')) return;
      const tool = toolRef.current;
      const ink = tool === 'draw' || tool === 'highlighter' || tool === 'eraser';
      const stylus = touches.some(touch => (touch as Touch & { touchType?: string }).touchType === 'stylus');
      // Like tldraw, also claim touches overlapping the window edges. Do not
      // swallow the click that places a note or text with a finger.
      const edge = event.type === 'touchstart' && isIosInput()
        && tool !== 'note' && tool !== 'text'
        && !target?.closest('[contenteditable="true"]')
        && touches.some(touch => {
          const radius = touch.radiusX || 0;
          return touch.clientX - radius < 10 || touch.clientX + radius > (ownerWindow?.innerWidth ?? Infinity) - 10;
        });
      if (!wasClaimed && !penModeRef.current && !ink && !stylus && !edge) return;
      if (event.type === 'touchstart') {
        for (const touch of touches) {
          if (Number.isFinite(touch.identifier)) claimedTouches.add(touch.identifier);
        }
      }
      if (event.cancelable) event.preventDefault();
    };
    const preventGesture = (event: Event) => {
      const inside = event.target instanceof Node && container.contains(event.target);
      const focused = doc.activeElement && container.contains(doc.activeElement);
      if ((inside || focused) && event.cancelable) event.preventDefault();
    };
    // React delegates touch events passively. Excalidraw's native listener
    // registration is essential: preventDefault must reach WebKit itself.
    const options = { passive: false, capture: true };
    for (const type of ['touchstart', 'touchend', 'touchcancel'] as const) {
      container.addEventListener(type, preventTouch, options);
    }
    for (const type of ['gesturestart', 'gesturechange', 'gestureend']) {
      doc.addEventListener(type, preventGesture, options);
    }
    return () => {
      for (const type of ['touchstart', 'touchend', 'touchcancel'] as const) {
        container.removeEventListener(type, preventTouch, true);
      }
      for (const type of ['gesturestart', 'gesturechange', 'gestureend']) {
        doc.removeEventListener(type, preventGesture, true);
      }
    };
  }, [containerRef, penModeRef, toolRef]);
}
