import { useCallback, useEffect, useRef, useState, type ButtonHTMLAttributes, type CSSProperties } from 'react';

type Position = { left: number; top: number };
type Drag = Position & { pointerId: number; clientX: number; clientY: number };

/** Keep movable chrome inside its containing stage without changing its CSS default. */
export function useToolbarPosition(layoutKey: string | null) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<Drag | null>(null);
  const currentPosition = useRef<Position | null>(null);
  const [position, setPosition] = useState<Position | null>(null);

  const moveTo = useCallback((next: Position) => {
    const element = ref.current;
    const parent = element?.offsetParent ?? element?.parentElement;
    if (!(parent instanceof HTMLElement) || !element) return;
    const bounded = {
      left: Math.max(0, Math.min(next.left, Math.max(0, parent.clientWidth - element.offsetWidth))),
      top: Math.max(0, Math.min(next.top, Math.max(0, parent.clientHeight - element.offsetHeight))),
    };
    currentPosition.current = bounded;
    setPosition(bounded);
  }, []);

  const readPosition = useCallback((): Position => {
    if (currentPosition.current) return currentPosition.current;
    const element = ref.current;
    const parent = element?.offsetParent ?? element?.parentElement;
    if (!element || !(parent instanceof HTMLElement)) return { left: 0, top: 0 };
    const bounds = element.getBoundingClientRect();
    const parentBounds = parent.getBoundingClientRect();
    return {
      left: bounds.left - parentBounds.left + parent.scrollLeft - parent.clientLeft,
      top: bounds.top - parentBounds.top + parent.scrollTop - parent.clientTop,
    };
  }, []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const start = drag.current;
      if (!start || event.pointerId !== start.pointerId) return;
      event.preventDefault();
      moveTo({
        left: start.left + event.clientX - start.clientX,
        top: start.top + event.clientY - start.clientY,
      });
    };
    const onEnd = (event: PointerEvent) => {
      if (drag.current?.pointerId === event.pointerId) drag.current = null;
    };
    const remeasure = () => {
      if (currentPosition.current) moveTo(currentPosition.current);
    };
    window.addEventListener('pointermove', onMove, { passive: false });
    window.addEventListener('pointerup', onEnd);
    window.addEventListener('pointercancel', onEnd);
    window.addEventListener('resize', remeasure);
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(remeasure);
    if (ref.current) observer?.observe(ref.current);
    if (ref.current?.parentElement) observer?.observe(ref.current.parentElement);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onEnd);
      window.removeEventListener('pointercancel', onEnd);
      window.removeEventListener('resize', remeasure);
      observer?.disconnect();
      drag.current = null;
    };
  }, [moveTo]);

  useEffect(() => {
    if (currentPosition.current) moveTo(currentPosition.current);
  }, [layoutKey, moveTo]);

  const gripProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    onPointerDown(event) {
      if (event.button !== 0) return;
      event.preventDefault();
      event.stopPropagation();
      event.currentTarget.focus({ preventScroll: true });
      drag.current = {
        ...readPosition(),
        pointerId: event.pointerId,
        clientX: event.clientX,
        clientY: event.clientY,
      };
      event.currentTarget.setPointerCapture?.(event.pointerId);
    },
    onLostPointerCapture() {
      drag.current = null;
    },
    onKeyDown(event) {
      if (event.key === 'Home') {
        event.preventDefault();
        event.stopPropagation();
        drag.current = null;
        currentPosition.current = null;
        setPosition(null);
        return;
      }
      const steps: Record<string, Position> = {
        ArrowLeft: { left: -1, top: 0 },
        ArrowRight: { left: 1, top: 0 },
        ArrowUp: { left: 0, top: -1 },
        ArrowDown: { left: 0, top: 1 },
      };
      const direction = steps[event.key];
      if (!direction) return;
      event.preventDefault();
      event.stopPropagation();
      const current = readPosition();
      const distance = event.shiftKey ? 32 : 8;
      moveTo({ left: current.left + direction.left * distance, top: current.top + direction.top * distance });
    },
    draggable: false,
    onDragStart: event => event.preventDefault(),
  };

  const style: CSSProperties = position ? { left: position.left, top: position.top, right: 'auto', bottom: 'auto' } : {};
  return { ref, style, gripProps };
}
