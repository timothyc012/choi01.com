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
  /** Every shape the inspector acts on. Empty when no panel should render. */
  inspectorSelection: readonly CanvasShape[];
  /** Representative shape whose values the per-shape controls display. */
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
      selectedIds: picked.map(shape => shape.id),
    };
  }, [selected, shapes, textualTypes]);

  useEffect(() => { onSelectionChange?.(selectionInfo); }, [onSelectionChange, selectionInfo]);

  // While text is being edited the panel belongs to that one shape; otherwise
  // it covers the whole selection so multi-select still gets group/duplicate/
  // delete and the shared colour controls.
  const inspectorSelection = useMemo<readonly CanvasShape[]>(() => {
    if (editingId) {
      const editing = shapes.find(s => s.id === editingId);
      return editing && editing.type !== 'image' && editing.type !== 'draw' ? [editing] : [];
    }
    const picked = shapes.filter(s => selected.has(s.id));
    if (picked.length === 1) return picked[0].type === 'image' ? [] : picked;
    return picked;
  }, [editingId, selected, shapes]);

  const inspectorShape = useMemo(() => {
    if (inspectorSelection.length === 0) return null;
    // Images carry no colour or text state, so a mixed selection reads its
    // displayed values off a shape that actually has them.
    return inspectorSelection.find(s => s.type !== 'image') ?? null;
  }, [inspectorSelection]);

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

  return { selectionInfo, inspectorSelection, inspectorShape, onContainerPointerMove, onContainerPointerLeave };
}
