import type {
  Dispatch,
  PointerEvent as ReactPointerEvent,
  RefObject,
  SetStateAction,
} from 'react';
import type { CanvasColorKey, CanvasShapeType, CanvasTool } from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';
import type { SnapResult } from './canvasGeometry';
import {
  useCanvasPointerDown,
  type PointerDownHandlers,
} from './useCanvasPointerDown';
import { useCanvasPointerLifecycle } from './useCanvasPointerLifecycle';
import type { Camera, Interaction, PointerPosition } from './canvasPointerTypes';

export type { Interaction } from './canvasPointerTypes';

interface PointerInteractionOptions {
  containerRef: RefObject<HTMLDivElement | null>;
  editorRef: RefObject<HTMLDivElement | null>;
  pointers: RefObject<Map<number, PointerPosition>>;
  interactionRef: RefObject<Interaction>;
  cameraRef: RefObject<Camera>;
  shapesRef: RefObject<CanvasShape[]>;
  toolRef: RefObject<CanvasTool>;
  activeColorRef: RefObject<CanvasColorKey>;
  camera: Camera;
  shapes: CanvasShape[];
  selected: Set<string>;
  isSpaceDown: boolean;
  textualTypes: readonly CanvasShapeType[];
  setCamera: Dispatch<SetStateAction<Camera>>;
  setShapes: Dispatch<SetStateAction<CanvasShape[]>>;
  setEditingId: Dispatch<SetStateAction<string | null>>;
  setEraserPos: Dispatch<SetStateAction<{ x: number; y: number } | null>>;
  setGuides: Dispatch<SetStateAction<SnapResult['guides']>>;
  setAnnouncement: Dispatch<SetStateAction<string>>;
  applyInteraction: (next: Interaction) => void;
  selectNow: (next: Set<string>) => void;
  beginHistory: () => void;
  endHistory: () => void;
  commit: (next: CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[])) => void;
  onToolChange: (tool: CanvasTool) => void;
  expandToGroups: (ids: Set<string>) => Set<string>;
  toPage: (clientX: number, clientY: number) => { x: number; y: number };
  createId: (prefix?: string) => string;
}

export interface PointerInteractionHandlers extends PointerDownHandlers {
  onPointerDown: (event: ReactPointerEvent) => void;
}

/** Composes pointer-start and global drag lifecycle handlers. */
export function useCanvasPointerInteractions({
  containerRef,
  editorRef,
  pointers,
  interactionRef,
  cameraRef,
  shapesRef,
  toolRef,
  activeColorRef,
  camera,
  shapes,
  selected,
  isSpaceDown,
  textualTypes,
  setCamera,
  setShapes,
  setEditingId,
  setEraserPos,
  setGuides,
  setAnnouncement,
  applyInteraction,
  selectNow,
  beginHistory,
  endHistory,
  commit,
  onToolChange,
  expandToGroups,
  toPage,
  createId,
}: PointerInteractionOptions): PointerInteractionHandlers {
  const down = useCanvasPointerDown({
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
  });

  useCanvasPointerLifecycle({
    containerRef,
    pointers,
    interactionRef,
    cameraRef,
    shapesRef,
    setCamera,
    setShapes,
    setEditingId,
    setEraserPos,
    setGuides,
    setAnnouncement,
    applyInteraction,
    selectNow,
    endHistory,
    commit,
    onToolChange,
    expandToGroups,
    toPage,
    createId,
  });

  return down;
}
