import type { RefObject } from 'react';
import type { CanvasShapeType } from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';

export interface Camera {
  x: number;
  y: number;
  z: number;
}

export type PointerPosition = { x: number; y: number };

export type Interaction =
  | { kind: 'none' }
  | { kind: 'pan'; startX: number; startY: number; camX: number; camY: number }
  | { kind: 'pinch'; startDist: number; startZoom: number; startMidX: number; startMidY: number; camX: number; camY: number }
  | { kind: 'marquee'; startX: number; startY: number; curX: number; curY: number; screenStartX: number; screenStartY: number }
  | { kind: 'move'; startX: number; startY: number; origin: Map<string, CanvasShape> }
  | { kind: 'resize'; id: string; handle: string; start: CanvasShape }
  | { kind: 'rotate'; id: string; startAngle: number; startRotation: number }
  | { kind: 'creating'; id: string; startX: number; startY: number }
  | { kind: 'drawing'; id: string }
  | { kind: 'connect'; fromId: string; toX: number; toY: number; hoverId: string | null }
  | { kind: 'bend'; id: string }
  | { kind: 'erasing' };

export const MIN_ZOOM = 0.1;
export const MAX_ZOOM = 4;
export const ERASER_RADIUS = 14;
export const CONNECTABLE: CanvasShapeType[] = ['note', 'card', 'rect', 'ellipse', 'text', 'image'];

export type InteractionRef = RefObject<Interaction>;
