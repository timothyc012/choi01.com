import { useEffect, useMemo, useRef } from 'react';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { CanvasShapeType } from '../core/index.ts';
import type { CanvasSelectionInfo, CanvasShape } from './InfiniteCanvas';

interface Camera {
  x: number;
  y: number;
  z: number;
}

interface ViewInteractionsOptions {
  containerRef: RefObject<HTMLDivElement | null>;
  camera: Camera;
  setCamera: Dispatch<SetStateAction<Camera>>;
  minZoom: number;
  maxZoom: number;
  shapes: CanvasShape[];
  selected: Set<string>;
  editingId: string | null;
  textualTypes: readonly CanvasShapeType[];
  onZoomChange?: (zoom: number) => void;
  onSelectionChange?: (info: CanvasSelectionInfo) => void;
  onLocalCursor?: (page: { x: number; y: number } | null) => void;
  toPage: (clientX: number, clientY: number) => { x: number; y: number };
}

interface ViewInteractionsResult {
  selectionInfo: CanvasSelectionInfo;
  inspectorShape: CanvasShape | null;
  onContainerPointerMove?: (event: React.PointerEvent) => void;
  onContainerPointerLeave?: () => void;
}

/** Owns camera wheel input and view-only selection, inspector, and presence derivations. */
export function useCanvasViewInteractions({
  containerRef,
  camera,
  setCamera,
  minZoom,
  maxZoom,
  shapes,
  selected,
  editingId,
  textualTypes,
  onZoomChange,
  onSelectionChange,
  onLocalCursor,
  toPage,
}: ViewInteractionsOptions): ViewInteractionsResult {
  useEffect(() => { onZoomChange?.(camera.z); }, [camera.z, onZoomChange]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) {
        const rect = el.getBoundingClientRect();
        setCamera(cam => {
          const z = Math.min(maxZoom, Math.max(minZoom, cam.z * Math.exp(-e.deltaY * 0.01)));
          const sx = e.clientX - rect.left;
          const sy = e.clientY - rect.top;
          return { x: cam.x + sx / cam.z - sx / z, y: cam.y + sy / cam.z - sy / z, z };
        });
      } else {
        setCamera(cam => ({ ...cam, x: cam.x + e.deltaX / cam.z, y: cam.y + e.deltaY / cam.z }));
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [containerRef, maxZoom, minZoom, setCamera]);

  const selectionInfo = useMemo<CanvasSelectionInfo>(() => {
    const picked = shapes.filter(s => selected.has(s.id));
    return {
      count: picked.length,
      canGroup: picked.length > 1,
      canUngroup: picked.some(s => !!s.groupId),
      isTextual: picked.length === 1 && textualTypes.includes(picked[0].type),
    };
  }, [selected, shapes, textualTypes]);

  useEffect(() => { onSelectionChange?.(selectionInfo); }, [onSelectionChange, selectionInfo]);

  const inspectorShape = useMemo(() => {
    if (editingId) {
      const editing = shapes.find(s => s.id === editingId);
      return editing && editing.type !== 'image' && editing.type !== 'draw' ? editing : null;
    }
    if (selected.size !== 1) return null;
    const only = shapes.find(s => selected.has(s.id));
    return only && only.type !== 'image' && only.type !== 'draw' ? only : null;
  }, [editingId, selected, shapes]);

  const cursorReportTimer = useRef<number>(0);
  const onContainerPointerMove = onLocalCursor
    ? (e: React.PointerEvent) => {
        const now = performance.now();
        if (now - cursorReportTimer.current < 60) return;
        cursorReportTimer.current = now;
        onLocalCursor(toPage(e.clientX, e.clientY));
      }
    : undefined;
  const onContainerPointerLeave = onLocalCursor ? () => onLocalCursor(null) : undefined;

  return { selectionInfo, inspectorShape, onContainerPointerMove, onContainerPointerLeave };
}
