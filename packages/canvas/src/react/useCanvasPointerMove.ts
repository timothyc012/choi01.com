import { useEffect, useRef } from 'react';
import type { PointerLifecycleOptions } from './canvasPointerLifecycleTypes';
import {
  arrowGeometry,
  bounds,
  centreOf,
  computeSnap,
  edgePoint,
  eraseAt,
  hitTest,
  toLocal,
} from './canvasGeometry';
import { moveOrthogonalSegment } from './canvasRouting';
import {
  CONNECTABLE,
  ERASER_RADIUS,
  MAX_ZOOM,
  MIN_ZOOM,
} from './canvasPointerTypes';

type PointerMoveOptions = Pick<PointerLifecycleOptions,
  | 'containerRef'
  | 'pointers'
  | 'interactionRef'
  | 'cameraRef'
  | 'shapesRef'
  | 'setCamera'
  | 'setShapes'
  | 'setEraserPos'
  | 'setGuides'
  | 'applyInteraction'
  | 'selectNow'
  | 'expandToGroups'
  | 'toPage'
  | 'pendingDrawPointsRef'
  | 'drawRafRef'
>;

/** Binds pointer movement and applies the active drag/gesture to editor state. */
export function useCanvasPointerMove({
  containerRef,
  pointers,
  interactionRef,
  cameraRef,
  shapesRef,
  setCamera,
  setShapes,
  setEraserPos,
  setGuides,
  applyInteraction,
  selectNow,
  expandToGroups,
  toPage,
  pendingDrawPointsRef,
  drawRafRef,
}: PointerMoveOptions): void {
  // Pending drawing points collected between animation frames. Each pointermove
  // pushes into this buffer; a single rAF callback flushes them to setShapes so
  // React re-renders at most once per frame instead of once per raw event.
  // On high-frequency inputs (120 Hz trackpads, coalesced touch events) this
  // prevents dropped points and the choppy stroke they produce.

  useEffect(() => {
    return () => {
      if (drawRafRef.current !== null) cancelAnimationFrame(drawRafRef.current);
    };
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (pointers.current.has(e.pointerId)) {
        pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
      }
      const interaction = interactionRef.current;
      if (interaction.kind === 'none') return;
      const cam = cameraRef.current;

      if (interaction.kind === 'pinch') {
        if (pointers.current.size < 2) return;
        const [a, b] = [...pointers.current.values()];
        const dist = Math.hypot(b.x - a.x, b.y - a.y) || 1;
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const z = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, interaction.startZoom * (dist / interaction.startDist)));
        // Keep the page point under the pinch midpoint fixed, and follow the
        // midpoint so a two-finger drag also pans.
        const anchorX = interaction.camX + (interaction.startMidX - rect.left) / interaction.startZoom;
        const anchorY = interaction.camY + (interaction.startMidY - rect.top) / interaction.startZoom;
        setCamera({ x: anchorX - (midX - rect.left) / z, y: anchorY - (midY - rect.top) / z, z });
        return;
      }

      if (interaction.kind === 'pan') {
        setCamera({
          x: interaction.camX - (e.clientX - interaction.startX) / cam.z,
          y: interaction.camY - (e.clientY - interaction.startY) / cam.z,
          z: cam.z,
        });
        return;
      }

      const p = toPage(e.clientX, e.clientY);

      if (interaction.kind === 'erasing') {
        setShapes(prev => eraseAt(prev, p.x, p.y, ERASER_RADIUS / cam.z, cam.z));
        setEraserPos({ x: p.x, y: p.y });
        return;
      }

      if (interaction.kind === 'connect') {
        const all = shapesRef.current;
        const byId = new Map(all.map(s => [s.id, s]));
        const target = [...all].reverse().find(s => (
          s.id !== interaction.fromId &&
          CONNECTABLE.includes(s.type) &&
          hitTest(s, p.x, p.y, cam.z, byId, all)
        ));
        applyInteraction({ ...interaction, toX: p.x, toY: p.y, hoverId: target?.id ?? null });
        return;
      }

      if (interaction.kind === 'bend') {
        const all = shapesRef.current;
        const arrow = all.find(s => s.id === interaction.id);
        if (!arrow) return;
        const g = arrowGeometry(arrow, new Map(all.map(s => [s.id, s])), all);
        const dx = g.end.x - g.start.x;
        const dy = g.end.y - g.start.y;
        const len = Math.hypot(dx, dy) || 1;
        const midX = (g.start.x + g.end.x) / 2;
        const midY = (g.start.y + g.end.y) / 2;
        // Project the drag onto the chord normal; that distance *is* the bend.
        const bend = ((p.x - midX) * (-dy / len) + (p.y - midY) * (dx / len));
        setShapes(prev => prev.map(s => (s.id === interaction.id ? { ...s, bend } : s)));
        return;
      }

      if (interaction.kind === 'orthogonal-segment') {
        const all = shapesRef.current;
        const arrow = all.find(s => s.id === interaction.id);
        if (!arrow) return;
        const geometry = arrowGeometry(arrow, new Map(all.map(s => [s.id, s])), all);
        const pathPoints = geometry.routing === 'orthogonal' ? geometry.pathPoints : undefined;
        if (!pathPoints || pathPoints.length < 2) return;
        const segmentStart = pathPoints[interaction.segmentIndex];
        const segmentEnd = pathPoints[interaction.segmentIndex + 1];
        if (!segmentStart || !segmentEnd) return;
        const coordinate = segmentStart.x === segmentEnd.x ? p.x : p.y;
        const moved = moveOrthogonalSegment(pathPoints, interaction.segmentIndex, coordinate);
        setShapes(prev => prev.map(s => s.id === interaction.id
          ? { ...s, routing: 'orthogonal', orthogonalVariant: undefined, orthogonalWaypoints: moved.slice(1, -1).map(point => ({ x: point.x, y: point.y })) }
          : s));
        return;
      }

      if (interaction.kind === 'arrow-endpoint') {
        const all = shapesRef.current;
        const arrow = all.find(s => s.id === interaction.id);
        if (!arrow) return;
        const byId = new Map(all.map(s => [s.id, s]));
        const geometry = arrowGeometry(arrow, byId, all);
        // The endpoint that isn't being dragged stays anchored where it is.
        const fixed = interaction.endpoint === 'start' ? geometry.end : geometry.start;
        // Dropping onto a connectable shape (re)attaches the endpoint to it,
        // mirroring the "+" connect-handle behaviour.
        const target = [...all].reverse().find(s => (
          s.id !== arrow.id &&
          CONNECTABLE.includes(s.type) &&
          hitTest(s, p.x, p.y, cam.z, byId, all)
        ));
        const tip = target ? edgePoint(target, fixed.x, fixed.y) : { x: p.x, y: p.y };
        applyInteraction({ ...interaction, hoverId: target?.id ?? null });
        setShapes(prev => prev.map(s => {
          if (s.id !== arrow.id) return s;
          const start = interaction.endpoint === 'start' ? tip : fixed;
          const end = interaction.endpoint === 'end' ? tip : fixed;
          return {
            ...s,
            x: start.x,
            y: start.y,
            w: end.x - start.x,
            h: end.y - start.y,
            fromId: interaction.endpoint === 'start' ? target?.id : s.fromId,
            toId: interaction.endpoint === 'end' ? target?.id : s.toId,
          };
        }));
        return;
      }

      if (interaction.kind === 'marquee') {
        applyInteraction({ ...interaction, curX: p.x, curY: p.y });
        const minX = Math.min(interaction.startX, p.x);
        const maxX = Math.max(interaction.startX, p.x);
        const minY = Math.min(interaction.startY, p.y);
        const maxY = Math.max(interaction.startY, p.y);
        const screenMinX = Math.min(interaction.screenStartX, e.clientX);
        const screenMaxX = Math.max(interaction.screenStartX, e.clientX);
        const screenMinY = Math.min(interaction.screenStartY, e.clientY);
        const screenMaxY = Math.max(interaction.screenStartY, e.clientY);
        const renderedBounds = new Map<string, DOMRect>();
        containerRef.current?.querySelectorAll<HTMLElement>('[data-canvas-shape-id]').forEach(element => {
          const id = element.dataset.canvasShapeId;
          if (id) renderedBounds.set(id, element.getBoundingClientRect());
        });
        const picked = shapesRef.current
          .filter(s => {
            const rendered = renderedBounds.get(s.id);
            if (rendered) {
              return rendered.right >= screenMinX && rendered.left <= screenMaxX
                && rendered.bottom >= screenMinY && rendered.top <= screenMaxY;
            }
            const b = bounds(s);
            return b.maxX >= minX && b.minX <= maxX && b.maxY >= minY && b.minY <= maxY;
          })
          .map(s => s.id);
        selectNow(expandToGroups(new Set(picked)));
        return;
      }

      if (interaction.kind === 'move') {
        let dx = p.x - interaction.startX;
        let dy = p.y - interaction.startY;

        // Snap against shapes that aren't being dragged.
        const movingIds = interaction.origin;
        const movedBox = (() => {
          let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
          movingIds.forEach(origin => {
            const b = bounds({ ...origin, x: origin.x + dx, y: origin.y + dy });
            minX = Math.min(minX, b.minX); minY = Math.min(minY, b.minY);
            maxX = Math.max(maxX, b.maxX); maxY = Math.max(maxY, b.maxY);
          });
          return { minX, minY, maxX, maxY };
        })();
        const others = shapesRef.current.filter(s => !movingIds.has(s.id));
        const snap = computeSnap(movedBox, others, cam.z);
        dx += snap.dx;
        dy += snap.dy;
        setGuides(snap.guides);

        setShapes(prev => prev.map(s => {
          const origin = movingIds.get(s.id);
          if (!origin) return s;
          return {
            ...s,
            x: origin.x + dx,
            y: origin.y + dy,
            points: origin.points?.map(([px, py]) => [px + dx, py + dy] as [number, number]),
            ...(origin.type === 'arrow' && origin.orthogonalWaypoints
              ? { orthogonalWaypoints: origin.orthogonalWaypoints.map(point => ({ x: point.x + dx, y: point.y + dy })) }
              : {}),
          };
        }));
        return;
      }

      if (interaction.kind === 'drawing') {
        // Shift = straight line from first point to cursor (bypass batching).
        if (e.shiftKey) {
          setShapes(prev => prev.map(s => {
            if (s.id !== interaction.id || !s.points) return s;
            const first = s.points[0];
            return first ? { ...s, points: [first, [p.x, p.y]] } : s;
          }));
          return;
        }
        // Buffer the point and schedule a single rAF flush. This decouples
        // point capture from React state updates: raw pointermove fires 120+
        // times/second on some devices, but setShapes + re-render only needs
        // to happen once per animation frame. Without batching, fast events
        // pile up during the render commit and their points are silently
        // dropped, producing a choppy, disconnected stroke.
        pendingDrawPointsRef.current.push([p.x, p.y]);
        if (drawRafRef.current === null) {
          drawRafRef.current = requestAnimationFrame(() => {
            drawRafRef.current = null;
            const pending = pendingDrawPointsRef.current;
            if (pending.length === 0) return;
            pendingDrawPointsRef.current = [];
            const z = cameraRef.current.z;
            setShapes(prev => prev.map(s => {
              if (s.id !== interaction.id || !s.points) return s;
              let lx = s.points[s.points.length - 1][0];
              let ly = s.points[s.points.length - 1][1];
              const merged = [...s.points];
              for (const [px, py] of pending) {
                // tldraw-inspired: if the new point is within 1px (screen space)
                // of the last recorded point, merge instead of append. This
                // keeps the point list short without creating visible gaps.
                if (Math.hypot(px - lx, py - ly) < 1 / z) continue;
                merged.push([px, py]);
                lx = px; ly = py;
              }
              return merged.length === s.points.length ? s : { ...s, points: merged };
            }));
          });
        }
        return;
      }

      if (interaction.kind === 'creating') {
        setShapes(prev => prev.map(s => s.id === interaction.id
          ? { ...s, w: p.x - interaction.startX, h: p.y - interaction.startY }
          : s));
        return;
      }

      if (interaction.kind === 'rotate') {
        const start = shapesRef.current.find(s => s.id === interaction.id);
        if (!start) return;
        const c = centreOf(start);
        const angle = Math.atan2(p.y - c.y, p.x - c.x);
        let rotation = interaction.startRotation + (angle - interaction.startAngle);
        // Shift snaps to 15° increments.
        if (e.shiftKey) rotation = Math.round(rotation / (Math.PI / 12)) * (Math.PI / 12);
        setShapes(prev => prev.map(s => (s.id === interaction.id ? { ...s, rotation } : s)));
        return;
      }

      if (interaction.kind === 'resize') {
        const { start, handle } = interaction;
        // Resize in the shape's own frame so rotated shapes behave predictably.
        const local = toLocal(start, p.x, p.y);
        setShapes(prev => prev.map(s => {
          if (s.id !== start.id) return s;
          let { x, y, w, h } = start;
          if (handle.includes('e')) w = Math.max(20, local.x - start.x);
          if (handle.includes('s')) h = Math.max(20, local.y - start.y);
          if (handle.includes('w')) { const right = start.x + start.w; x = Math.min(local.x, right - 20); w = right - x; }
          if (handle.includes('n')) { const bottom = start.y + start.h; y = Math.min(local.y, bottom - 20); h = bottom - y; }
          return { ...s, x, y, w, h, manualSize: s.type === 'text' ? true : s.manualSize };
        }));
      }
    };

    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [applyInteraction, containerRef, expandToGroups, interactionRef, pointers, selectNow, shapesRef, toPage]);
}
