import { useCallback, useEffect, useMemo, useState } from 'react';
import type { RefObject } from 'react';
import type { CanvasShape } from './InfiniteCanvas';
import { arrowGeometry, bounds } from './canvasGeometry';

interface Camera {
  x: number;
  y: number;
  z: number;
}

interface ViewportBounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export interface CanvasViewportResult {
  shapeById: Map<string, CanvasShape>;
  visiblePaintOrder: CanvasShape[];
}

interface CanvasViewportOptions {
  containerRef: RefObject<HTMLDivElement | null>;
  shapesRef: RefObject<CanvasShape[]>;
  shapes: CanvasShape[];
  camera: Camera;
  selected: Set<string>;
  editingId: string | null;
  boardIdentity: string;
}

/** Measures the host and derives culling/paint-order inputs for both canvas layers. */
export function useCanvasViewport({
  containerRef,
  shapesRef,
  shapes,
  camera,
  selected,
  editingId,
  boardIdentity,
}: CanvasViewportOptions): CanvasViewportResult {
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  // Culling depends on the host container, not just camera state. A reusable
  // canvas can live in a split pane or rotate on mobile without receiving a
  // React render, so observe the element and invalidate viewport bounds when
  // its content box changes.
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    let lastWidth = -1;
    let lastHeight = -1;
    const update = (width = element.clientWidth, height = element.clientHeight) => {
      if (width === lastWidth && height === lastHeight) return;
      lastWidth = width;
      lastHeight = height;
      setViewportSize({ width, height });
    };
    update();
    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(entries => {
        const contentRect = entries[0]?.contentRect;
        update(contentRect?.width ?? element.clientWidth, contentRect?.height ?? element.clientHeight);
      });
      observer.observe(element);
      return () => observer.disconnect();
    }
    const handleWindowResize = () => update();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [boardIdentity, containerRef]);

  const shapeById = useMemo(() => new Map(shapes.map(s => [s.id, s])), [shapes]);
  // Frames paint first so they read as containers behind their contents.
  const paintOrder = useMemo(
    () => [...shapes].sort((a, b) => (a.type === 'frame' ? -1 : 0) - (b.type === 'frame' ? -1 : 0)),
    [shapes]
  );

  /**
   * Viewport culling: only render shapes whose bounding box (or, for arrows, the
   * segment between the two endpoints) overlaps the visible page rectangle.
   *
   * Kept in the render set regardless of position:
   *   - the shape being edited (its editor and inspector bar are anchored to it)
   *   - selected shapes (handles and outlines must stay visible)
   *   - arrows whose chord passes through the viewport even though both ends sit
   *     outside it — otherwise long connectors would visibly pop out mid-pan
   */
  const viewport = useMemo<ViewportBounds | null>(() => {
    // The very first render happens before the container measures; render
    // nothing rather than everything so cold-start doesn't spike.
    if (!containerRef.current || viewportSize.width <= 0 || viewportSize.height <= 0) return null;
    // A page-space margin around the visible rectangle keeps shapes that are
    // about to scroll in from popping into existence during a fast pan.
    const margin = 200 / camera.z;
    return {
      minX: camera.x - margin,
      minY: camera.y - margin,
      maxX: camera.x + viewportSize.width / camera.z + margin,
      maxY: camera.y + viewportSize.height / camera.z + margin,
    };
  }, [camera, containerRef, viewportSize]);

  const isOnScreen = useCallback((s: CanvasShape): boolean => {
    if (!viewport) return false;
    if (s.id === editingId || selected.has(s.id)) return true;

    if (s.type === 'arrow') {
      const g = arrowGeometry(s, shapeById, shapesRef.current);
      const usePoints = g.routing === 'orthogonal' ? g.pathPoints : null;
      const pointsForCulling = usePoints ?? [g.start, g.end];
      const minX = Math.min(...pointsForCulling.map(p => p.x));
      const maxX = Math.max(...pointsForCulling.map(p => p.x));
      const minY = Math.min(...pointsForCulling.map(p => p.y));
      const maxY = Math.max(...pointsForCulling.map(p => p.y));
      return maxX >= viewport.minX && minX <= viewport.maxX
        && maxY >= viewport.minY && minY <= viewport.maxY;
    }

    const b = bounds(s);
    return b.maxX >= viewport.minX && b.minX <= viewport.maxX
      && b.maxY >= viewport.minY && b.minY <= viewport.maxY;
  }, [editingId, selected, shapeById, shapesRef, viewport]);

  const visiblePaintOrder = useMemo(
    () => paintOrder.filter(isOnScreen),
    [isOnScreen, paintOrder]
  );

  return { shapeById, visiblePaintOrder };
}
