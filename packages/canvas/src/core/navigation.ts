import type {
  CanvasDocument,
  CanvasShape,
  CanvasShapeId,
} from './model.ts';

/**
 * Canvas navigation math ported from Zero1 (CanvasNavigation.swift,
 * CanvasTabOrder in CanvasEditing.swift). Pure functions: no DOM, no React.
 */

// --- find --------------------------------------------------------------------

function normalizeFindText(value: string): string {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

/** Case- and accent-insensitive normalization (café ≟ CAFE, é ≟ e). */
function findKey(value: string): string {
  return value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

/**
 * Shapes whose text, rich text (tags stripped), file name, or category
 * contain the trimmed query. Document order; an empty query matches nothing.
 */
export function findCanvasShapes(document: CanvasDocument, query: string): CanvasShapeId[] {
  const needle = findKey(query.trim());
  if (needle.length === 0) return [];
  const found: CanvasShapeId[] = [];
  for (const shape of document.shapes) {
    const haystacks = [shape.text, shape.html ? normalizeFindText(shape.html) : undefined, shape.fileName, shape.category];
    if (haystacks.some(field => field !== undefined && findKey(field).includes(needle))) {
      found.push(shape.id);
    }
  }
  return found;
}

// --- tab order ----------------------------------------------------------------

/** Zero1: centre-y buckets of 24pt; inside a row, left→right, ties by id. */
function canvasTabRank(shape: CanvasShape): { row: number; col: number } {
  const minX = Math.min(shape.x, shape.x + shape.w);
  const maxX = Math.max(shape.x, shape.x + shape.w);
  const minY = Math.min(shape.y, shape.y + shape.h);
  const maxY = Math.max(shape.y, shape.y + shape.h);
  return { row: Math.floor((minY + maxY) / 2 / 24), col: (minX + maxX) / 2 };
}

/**
 * Next/previous non-arrow shape for Tab / Shift+Tab — top→bottom,
 * same row (centre y within 24pt buckets) left→right. Wraps at the ends.
 * `current` null: direction ≥ 0 → first, < 0 → last.
 */
export function nextCanvasShape(
  document: CanvasDocument,
  current: CanvasShapeId | null,
  direction: number,
): CanvasShapeId | null {
  const ordered = document.shapes
    .filter(shape => shape.type !== 'arrow')
    .map(shape => ({ shape, rank: canvasTabRank(shape) }))
    .sort((a, b) => (a.rank.row - b.rank.row) || (a.rank.col - b.rank.col) || String(a.shape.id).localeCompare(String(b.shape.id)));
  if (ordered.length === 0) return null;
  if (current !== null) {
    const index = ordered.findIndex(entry => entry.shape.id === current);
    if (index >= 0) {
      const step = direction < 0 ? -1 : 1;
      return ordered[(index + step + ordered.length) % ordered.length].shape.id;
    }
  }
  return direction < 0 ? ordered[ordered.length - 1].shape.id : ordered[0].shape.id;
}

// --- smart zoom ---------------------------------------------------------------

export type CanvasSmartZoomTarget = 'all' | 'selection' | 'actual';

const ZOOM_TOLERANCE = 0.0001;

/**
 * ]·[ smart zoom — ported from CanvasViewportMath.smartZoom. Candidate zooms
 * (all fit, selection fit, 100%) sort ascending; duplicates within 0.0001 keep
 * the higher-priority target (selection > all > actual). Returns the first
 * level above (direction > 0) or last below (direction < 0) `current`, or null.
 */
export function smartZoomTarget(
  current: number,
  allFit: number,
  selectionFit: number | null,
  direction: number,
): CanvasSmartZoomTarget | null {
  const levels: { zoom: number; target: CanvasSmartZoomTarget }[] = [{ zoom: allFit, target: 'all' }];
  if (selectionFit !== null) levels.push({ zoom: selectionFit, target: 'selection' });
  levels.push({ zoom: 1, target: 'actual' });
  const rank = { selection: 0, all: 1, actual: 2 } as const;
  levels.sort((a, b) =>
    Math.abs(a.zoom - b.zoom) <= ZOOM_TOLERANCE ? rank[a.target] - rank[b.target] : a.zoom - b.zoom);
  const merged: { zoom: number; target: CanvasSmartZoomTarget }[] = [];
  for (const level of levels) {
    const last = merged[merged.length - 1];
    if (last && Math.abs(last.zoom - level.zoom) <= ZOOM_TOLERANCE) continue;
    merged.push(level);
  }
  if (direction > 0) return merged.find(level => level.zoom > current + ZOOM_TOLERANCE)?.target ?? null;
  if (direction < 0) {
    for (let i = merged.length - 1; i >= 0; i--) {
      if (merged[i].zoom < current - ZOOM_TOLERANCE) return merged[i].target;
    }
  }
  return null;
}

// --- minimap ------------------------------------------------------------------

export interface CanvasMinimapRect {
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

export interface CanvasMinimapLayout {
  /** World rect (canvas coordinates) the minimap shows: content ∪ visible + 10% margin. */
  readonly world: CanvasMinimapRect;
  /** Minimap units per canvas unit. */
  readonly scale: number;
  /** Minimap point at which `world` starts (centring margin). */
  readonly origin: { readonly x: number; readonly y: number };
  /** Canvas rect → minimap rect. */
  readonly toMinimap: (rect: CanvasMinimapRect) => CanvasMinimapRect;
  /** Minimap point → canvas point. */
  readonly toWorld: (point: { readonly x: number; readonly y: number }) => { readonly x: number; readonly y: number };
}

function unionRects(a: CanvasMinimapRect, b: CanvasMinimapRect): CanvasMinimapRect {
  const x = Math.min(a.x, b.x);
  const y = Math.min(a.y, b.y);
  return {
    x,
    y,
    width: Math.max(a.x + a.width, b.x + b.width) - x,
    height: Math.max(a.y + a.height, b.y + b.height) - y,
  };
}

/** Ported from Zero1 CanvasMinimapLayout: world = (content ∪ visible) + 10%. */
export function minimapLayout(
  content: CanvasMinimapRect,
  visible: CanvasMinimapRect,
  size: { readonly width: number; readonly height: number },
): CanvasMinimapLayout {
  const union = unionRects(content, visible);
  const world: CanvasMinimapRect = {
    x: union.x - union.width * 0.1,
    y: union.y - union.height * 0.1,
    width: union.width * 1.2,
    height: union.height * 1.2,
  };
  const scale = Math.min(size.width / Math.max(1, world.width), size.height / Math.max(1, world.height));
  const origin = {
    x: (size.width - world.width * scale) / 2,
    y: (size.height - world.height * scale) / 2,
  };
  return {
    world,
    scale,
    origin,
    toMinimap: rect => ({
      x: origin.x + (rect.x - world.x) * scale,
      y: origin.y + (rect.y - world.y) * scale,
      width: rect.width * scale,
      height: rect.height * scale,
    }),
    toWorld: point => ({
      x: world.x + (point.x - origin.x) / scale,
      y: world.y + (point.y - origin.y) / scale,
    }),
  };
}

