import { useEffect, useRef } from 'react';
import type {
  Dispatch,
  PointerEvent as ReactPointerEvent,
  RefObject,
  SetStateAction,
} from 'react';
import { SHAPE_TOOLS } from '../core/index.ts';
import type { CanvasColorKey, CanvasShapeType, CanvasTool } from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';
import {
  bounds,
  centreOf,
  eraseAt,
  hitTest,
} from './canvasGeometry';
import {
  type Camera,
  type Interaction,
  type PointerPosition,
} from './canvasPointerTypes';

/**
 * Window for the app-level double-click fallback below — deliberately wider
 * than a native browser dblclick, which also demands near-pixel-perfect
 * repeat position and silently drops the gesture on real mice/trackpads.
 */
const REPEAT_CLICK_WINDOW_MS = 400;

interface PointerDownOptions {
  containerRef: RefObject<HTMLDivElement | null>;
  editorRef: RefObject<HTMLDivElement | null>;
  pointers: RefObject<Map<number, PointerPosition>>;
  cameraRef: RefObject<Camera>;
  shapesRef: RefObject<CanvasShape[]>;
  toolRef: RefObject<CanvasTool>;
  activeColorRef: RefObject<CanvasColorKey>;
  camera: Camera;
  shapes: CanvasShape[];
  selected: Set<string>;
  isSpaceDown: boolean;
  textualTypes: readonly CanvasShapeType[];
  setShapes: Dispatch<SetStateAction<CanvasShape[]>>;
  setEditingId: Dispatch<SetStateAction<string | null>>;
  applyInteraction: (next: Interaction) => void;
  selectNow: (next: Set<string>) => void;
  beginHistory: () => void;
  commit: (next: CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[])) => void;
  onToolChange: (tool: CanvasTool) => void;
  expandToGroups: (ids: Set<string>) => Set<string>;
  toPage: (clientX: number, clientY: number) => { x: number; y: number };
  createId: (prefix?: string) => string;
}

export interface PointerDownHandlers {
  onPointerDown: (event: ReactPointerEvent) => void;
  onResizeHandleDown: (event: ReactPointerEvent, shape: CanvasShape, handle: string) => void;
  onRotateHandleDown: (event: ReactPointerEvent, shape: CanvasShape) => void;
  onConnectHandleDown: (event: ReactPointerEvent, shape: CanvasShape) => void;
  onBendHandleDown: (event: ReactPointerEvent, shape: CanvasShape) => void;
  onArrowEndpointDown: (event: ReactPointerEvent, shape: CanvasShape, endpoint: 'start' | 'end') => void;
}

export function useCanvasPointerDown({
  containerRef,
  editorRef,
  pointers,
  cameraRef,
  shapesRef,
  toolRef,
  activeColorRef,
  camera,
  shapes,
  selected,
  isSpaceDown,
  textualTypes,
  setShapes,
  setEditingId,
  applyInteraction,
  selectNow,
  beginHistory,
  commit,
  onToolChange,
  expandToGroups,
  toPage,
  createId,
}: PointerDownOptions): PointerDownHandlers {
  const uid = createId;
  const lastClickRef = useRef<{ id: string; time: number } | null>(null);
  const placeTextualShape = (clientX: number, clientY: number) => {
    const activeTool = containerRef.current?.dataset.canvasActiveTool === 'text'
      ? 'text'
      : toolRef.current;
    if (activeTool !== 'note' && activeTool !== 'text') return;
    const p = toPage(clientX, clientY);
    const created: CanvasShape = activeTool === 'note'
      ? { id: uid(), type: 'note', x: p.x - 90, y: p.y - 90, w: 180, h: 180, color: 'yellow', text: '' }
      : { id: uid(), type: 'text', x: p.x, y: p.y - 22, w: 220, h: 44, text: '' };
    commit(prev => [...prev, created]);
    selectNow(new Set([created.id]));
    setEditingId(created.id);
    onToolChange('select');
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) return;
      if (e.target instanceof Element && e.target.closest('[role="textbox"], [data-canvas-inspector]')) return;
      placeTextualShape(e.clientX, e.clientY);
    };
    window.addEventListener('click', onClick, true);
    return () => window.removeEventListener('click', onClick, true);
  });

  const onPointerDown = (e: ReactPointerEvent) => {
    const activeTool = toolRef.current;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // Second finger down promotes the gesture to a pinch, so touch devices get
    // zoom without a keyboard modifier.
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      const cam = cameraRef.current;
      applyInteraction({
        kind: 'pinch',
        startDist: Math.hypot(b.x - a.x, b.y - a.y) || 1,
        startZoom: cam.z,
        startMidX: (a.x + b.x) / 2,
        startMidY: (a.y + b.y) / 2,
        camX: cam.x,
        camY: cam.y,
      });
      return;
    }
    if (pointers.current.size > 2) return;

    if (e.button === 1 || isSpaceDown || activeTool === 'hand' || (e.button === 0 && activeTool === 'select' && e.altKey)) {
      applyInteraction({ kind: 'pan', startX: e.clientX, startY: e.clientY, camX: camera.x, camY: camera.y });
      return;
    }
    if (e.button !== 0) return;

    const p = toPage(e.clientX, e.clientY);
    setEditingId(null);
    editorRef.current?.blur();
    containerRef.current?.focus();

    if (activeTool === 'draw') {
      const created: CanvasShape = { id: uid(), type: 'draw', x: p.x, y: p.y, w: 0, h: 0, points: [[p.x, p.y]], color: activeColorRef.current };
      beginHistory();
      setShapes(prev => [...prev, created]);
      applyInteraction({ kind: 'drawing', id: created.id });
      return;
    }

    if (activeTool === 'arrow' || activeTool === 'frame' || SHAPE_TOOLS.includes(activeTool)) {
      // The `tool` narrowing is opaque to TS inside SHAPE_TOOLS.includes(), so
      // cast to the concrete shape-type union for the polygon path.
      const shapeType = activeTool as Exclude<typeof activeTool, 'select' | 'draw' | 'eraser' | 'note' | 'card' | 'text' | 'image'>;
      const created: CanvasShape = activeTool === 'arrow'
        ? { id: uid(), type: 'arrow', x: p.x, y: p.y, w: 0, h: 0, color: activeColorRef.current }
        : activeTool === 'frame'
          ? { id: uid(), type: 'frame', x: p.x, y: p.y, w: 0, h: 0, text: '프레임' }
          : { id: uid(), type: shapeType, x: p.x, y: p.y, w: 0, h: 0, color: activeColorRef.current, text: '' };
      beginHistory();
      setShapes(prev => [...prev, created]);
      applyInteraction({ kind: 'creating', id: created.id, startX: p.x, startY: p.y });
      return;
    }

    if (activeTool === 'note' || activeTool === 'text') return;

    if (activeTool === 'eraser') {
      // Held down and dragged, so a stroke can be rubbed out progressively.
      beginHistory();
      setShapes(prev => eraseAt(prev, p.x, p.y, 14 / camera.z, camera.z));
      applyInteraction({ kind: 'erasing' });
      return;
    }

    // Topmost shape wins, matching paint order.
    const byId = new Map(shapes.map(s => [s.id, s]));
    const hit = [...shapes].reverse().find(s => hitTest(s, p.x, p.y, camera.z, byId, shapes));

    if (!hit) {
      lastClickRef.current = null;
    } else {
      const now = Date.now();
      const isRepeatClick = !e.shiftKey
        && textualTypes.includes(hit.type)
        && lastClickRef.current?.id === hit.id
        && now - lastClickRef.current.time < REPEAT_CLICK_WINDOW_MS;
      // A quick second press on the same shape *might* be a double-click —
      // "open the editor", handled here instead of leaning on the browser's
      // native dblclick, which requires the two clicks to land at nearly the
      // same pixel and silently does nothing when a real mouse/trackpad
      // drifts a few pixels between clicks. At pointer-down we cannot tell a
      // double-click apart from a grab-and-drag, so always start the move
      // gesture and tag it with the shape; the pointer-up handler opens the
      // editor only when the press released where it started.
      const editOnReleaseId = isRepeatClick ? hit.id : undefined;
      lastClickRef.current = isRepeatClick ? null : { id: hit.id, time: now };

      const base = e.shiftKey ? new Set(selected).add(hit.id) : (selected.has(hit.id) ? selected : new Set([hit.id]));
      const nextSelected = expandToGroups(base);
      selectNow(nextSelected);

      const origin = new Map<string, CanvasShape>();
      for (const s of shapes) if (nextSelected.has(s.id)) origin.set(s.id, s);

      // Dragging a frame carries whatever sits inside it, decided once at
      // gesture start so shapes don't join or leave mid-drag.
      for (const s of shapes) {
        if (s.type !== 'frame' || !nextSelected.has(s.id)) continue;
        const fb = bounds(s);
        for (const inner of shapes) {
          if (inner.id === s.id || origin.has(inner.id)) continue;
          const c = centreOf(inner);
          if (c.x >= fb.minX && c.x <= fb.maxX && c.y >= fb.minY && c.y <= fb.maxY) origin.set(inner.id, inner);
        }
      }

      beginHistory();
      applyInteraction({ kind: 'move', startX: p.x, startY: p.y, origin, editOnReleaseId });
      return;
    }

    if (!e.shiftKey) selectNow(new Set());
    applyInteraction({
      kind: 'marquee',
      startX: p.x,
      startY: p.y,
      curX: p.x,
      curY: p.y,
      screenStartX: e.clientX,
      screenStartY: e.clientY,
    });
  };

  const onResizeHandleDown = (e: ReactPointerEvent, shape: CanvasShape, handle: string) => {
    e.stopPropagation();
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    beginHistory();
    applyInteraction({ kind: 'resize', id: shape.id, handle, start: shape });
  };

  const onRotateHandleDown = (e: ReactPointerEvent, shape: CanvasShape) => {
    e.stopPropagation();
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const p = toPage(e.clientX, e.clientY);
    const c = centreOf(shape);
    beginHistory();
    applyInteraction({
      kind: 'rotate',
      id: shape.id,
      startAngle: Math.atan2(p.y - c.y, p.x - c.x),
      startRotation: shape.rotation ?? 0,
    });
  };

  /** Drag out of a `+` handle to connect to, or create, another node. */
  const onConnectHandleDown = (e: ReactPointerEvent, shape: CanvasShape) => {
    e.stopPropagation();
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const p = toPage(e.clientX, e.clientY);
    applyInteraction({ kind: 'connect', fromId: shape.id, toX: p.x, toY: p.y, hoverId: null });
  };

  const onBendHandleDown = (e: ReactPointerEvent, shape: CanvasShape) => {
    e.stopPropagation();
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    beginHistory();
    applyInteraction({ kind: 'bend', id: shape.id });
  };

  /** Drag an arrow endpoint to move it, or drop it on a node to (re)attach. */
  const onArrowEndpointDown = (e: ReactPointerEvent, shape: CanvasShape, endpoint: 'start' | 'end') => {
    e.stopPropagation();
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    beginHistory();
    applyInteraction({ kind: 'arrow-endpoint', id: shape.id, endpoint, hoverId: null });
  };

  return { onPointerDown, onResizeHandleDown, onRotateHandleDown, onConnectHandleDown, onBendHandleDown, onArrowEndpointDown };
}
