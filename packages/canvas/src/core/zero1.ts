import { CanvasValidationError, createCanvasShapeId } from './model.ts';
import type {
  CanvasCamera,
  CanvasColorKey,
  CanvasDrawMode,
  CanvasShape,
  CanvasSnapshot,
  CanvasStrokeWidth,
} from './model.ts';
import { isRecord, parseCanvasSnapshot } from './document.ts';

/**
 * Zero1 Office canvas file (.pdfcanvas.json) ⇄ canvas-v1 converter.
 *
 * Field names mirror `CanvasItem`/`CanvasConnection`/`CanvasSheet`/
 * `CanvasProject` CodingKeys in the Zero1 repository — do not rename.
 *
 * Conventions verified against the Swift sources:
 * - Zero1 `x`/`y` mark the element **centre**; Chois `x`/`y` mark the
 *   top-left of the shape bounds. `elementWidth`/`elementHeight` carry the
 *   size, with per-kind fallbacks (sticky 200×200, text 240×70,
 *   shape 180×100, mindmap 180×76, file 240×300, frame 480×320,
 *   everything else 270×220 — see `CanvasItem.canvasSize`).
 * - Sheet `viewport` stores screen-space `panX`/`panY`/`zoom`
 *   (`screenPt = worldPt * zoom + pan`, see `CanvasViewportMath.zoom`).
 *   Chois `camera` stores the world coordinate at the top-left of the
 *   view (`screenPt = (worldPt - camera) * z`), so
 *   `camera.x = -panX / zoom`, `camera.y = -panY / zoom`, `camera.z = zoom`.
 * - `inkPoints` are relative to the ink element rect's top-left
 *   (`CanvasInk.worldPoints` adds `x - elementWidth/2`); Chois draw points
 *   are absolute canvas coordinates.
 */

interface Zero1Point { x: number; y: number }
interface Zero1Viewport { panX?: number; panY?: number; zoom?: number }
interface Zero1Sheet { id?: string; title?: string; viewport?: Zero1Viewport }
interface Zero1Item {
  id?: string;
  kind?: string;
  x?: number;
  y?: number;
  title?: string;
  text?: string;
  pageNumber?: number;
  category?: string;
  sourceID?: string;
  note?: string;
  sheetID?: string | null;
  shape?: string;
  elementWidth?: number;
  elementHeight?: number;
  mindmapRootID?: string;
  color?: string;
  locked?: boolean;
  inkPoints?: (Zero1Point | [number, number])[];
  inkWidth?: number;
  inkStyle?: string;
}
interface Zero1Connection {
  id?: string;
  sourceID?: string;
  targetID?: string;
  label?: string;
  isMindmap?: boolean;
  arrow?: boolean;
  routing?: string;
}

export interface Zero1File {
  version: number;
  items: Record<string, unknown>[];
  connections: Record<string, unknown>[];
  sheets?: Record<string, unknown>[];
  activeSheetID?: string;
}

export interface Zero1Import {
  snapshot: CanvasSnapshot;
  /** Titles of items Chois cannot represent (image, file). */
  dropped: string[];
  /** Every sheet in the file, in file order. One conversion covers one sheet; pass another id as `options.sheet` to get the rest. */
  sheets: { id: string; title: string }[];
  /** Id of the sheet this snapshot was made from. Undefined for files without sheets. */
  sheetId: string | undefined;
}

const ZERO1_DEFAULT_SIZE: Record<string, [number, number]> = {
  sticky: [200, 200],
  text: [240, 70],
  shape: [180, 100],
  mindmap: [180, 76],
  file: [240, 300],
  frame: [480, 320],
};

const ZERO1_COLOR: Record<string, CanvasColorKey | undefined> = {
  yellow: 'yellow', pink: 'pink', purple: 'purple', blue: 'blue',
  green: 'green', orange: 'peach', gray: 'grey', white: undefined,
};
const CHOIS_COLOR: Record<string, string | undefined> = {
  yellow: 'yellow', pink: 'pink', purple: 'purple', blue: 'blue',
  green: 'green', peach: 'orange', grey: 'gray', red: 'pink',
  brand: undefined, ink: undefined,
};

function fail(message: string): never {
  throw new CanvasValidationError(message);
}

function numberField(value: unknown, name: string): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    fail(`Zero1 canvas: ${name} must be a finite number.`);
  }
  return value;
}

function optionalNumber(value: unknown, name: string): number | undefined {
  if (value === undefined || value === null) return undefined;
  return numberField(value, name);
}

function optionalString(value: unknown, name: string): string | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== 'string') fail(`Zero1 canvas: ${name} must be a string.`);
  return value;
}

function itemSize(item: Zero1Item): [number, number] {
  const fallback = ZERO1_DEFAULT_SIZE[item.kind ?? ''] ?? [270, 220];
  return [
    optionalNumber(item.elementWidth, 'elementWidth') ?? fallback[0],
    optionalNumber(item.elementHeight, 'elementHeight') ?? fallback[1],
  ];
}

function cardText(item: Zero1Item): string {
  const parts = [item.title ?? '', item.text ?? '', item.note ?? ''].filter(p => p !== '');
  return parts.join('\n');
}

function zero1Color(value: unknown): CanvasColorKey | undefined {
  if (value === undefined || value === null) return undefined;
  if (typeof value !== 'string' || !(value in ZERO1_COLOR)) {
    fail(`Zero1 canvas: unknown color ${String(value)}.`);
  }
  return ZERO1_COLOR[value];
}

function nearestStrokeWidth(width: number | undefined, mode: CanvasDrawMode): CanvasStrokeWidth {
  if (mode === 'highlighter') return 8;
  const candidates: readonly CanvasStrokeWidth[] = [2, 4, 6, 8];
  const target = width ?? 4;
  return candidates.reduce((a, b) => Math.abs(b - target) < Math.abs(a - target) ? b : a);
}

function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);
}

function newUuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  // Deterministic-shape fallback; uniqueness still guaranteed by randomness below.
  return 'xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx'.replace(/x/g, () => Math.floor(Math.random() * 16).toString(16));
}

function toRecord(input: unknown): Record<string, unknown> {
  let raw = input;
  if (typeof raw === 'string') {
    try { raw = JSON.parse(raw); } catch { fail('Zero1 canvas: input is not valid JSON.'); }
  }
  if (!isRecord(raw)) fail('Zero1 canvas: root must be an object.');
  if (!Array.isArray(raw.items)) fail('Zero1 canvas: items must be an array.');
  if (raw.connections !== undefined && !Array.isArray(raw.connections)) {
    fail('Zero1 canvas: connections must be an array.');
  }
  if (raw.sheets !== undefined && !Array.isArray(raw.sheets)) {
    fail('Zero1 canvas: sheets must be an array.');
  }
  return raw;
}

function pickSheet(raw: Record<string, unknown>, requested: string | undefined): Zero1Sheet | undefined {
  const sheets = (raw.sheets ?? []) as Zero1Sheet[];
  if (sheets.length === 0) return undefined;
  const active = optionalString(raw.activeSheetID, 'activeSheetID');
  return sheets.find(s => s.id === requested)
    ?? (requested === undefined ? sheets.find(s => s.id === active) : undefined)
    ?? (requested === undefined ? sheets[0] : undefined)
    ?? undefined;
}

function viewportToCamera(viewport: Zero1Viewport | undefined): CanvasCamera {
  const zoom = optionalNumber(viewport?.zoom, 'zoom') ?? 1;
  const panX = optionalNumber(viewport?.panX, 'panX') ?? 0;
  const panY = optionalNumber(viewport?.panY, 'panY') ?? 0;
  if (zoom <= 0) fail('Zero1 canvas: viewport zoom must be positive.');
  return { x: -panX / zoom, y: -panY / zoom, z: zoom };
}

function convertItem(item: Zero1Item, dropped: string[]): CanvasShape | null {
  const id = optionalString(item.id, 'id');
  const kind = optionalString(item.kind, 'kind');
  if (!id) fail('Zero1 canvas: every item needs an id.');
  if (!kind) fail(`Zero1 canvas: item ${id} has no kind.`);
  const x = numberField(item.x, `item ${id} x`);
  const y = numberField(item.y, `item ${id} y`);
  const [w, h] = itemSize(item);
  const shapeId = createCanvasShapeId(id);
  const base = {
    id: shapeId,
    x: x - w / 2,
    y: y - h / 2,
    w,
    h,
    ...(item.locked === true ? { locked: true } : {}),
    ...(zero1Color(item.color) ? { color: zero1Color(item.color) } : {}),
  };

  switch (kind) {
    case 'sticky':
      return { ...base, type: 'note', text: item.text ?? item.title ?? '' };
    case 'note':
    case 'quote':
    case 'page':
      return { ...base, type: 'card', text: cardText(item), ...(item.category ? { category: item.category } : {}) };
    case 'text':
      return { ...base, type: 'text', text: item.text ?? item.title ?? '' };
    case 'shape': {
      const t = item.shape === 'ellipse' ? 'ellipse' : item.shape === 'diamond' ? 'diamond' : 'rect';
      return { ...base, type: t, text: item.title ?? '' };
    }
    case 'mindmap':
      return { ...base, type: 'rect', text: item.title ?? '' };
    case 'frame':
      return { ...base, type: 'frame', text: item.title ?? '' };
    case 'ink': {
      const rawPoints = item.inkPoints;
      if (!Array.isArray(rawPoints)) fail(`Zero1 canvas: ink item ${id} has no inkPoints.`);
      // Swift encodes CGPoint as a two-number array `[x, y]` — that is what real Zero1 files hold.
      // The `{x, y}` object form is accepted too, for hand-written files.
      const points = rawPoints.map(p => {
        const px = Array.isArray(p) ? p[0] : isRecord(p) ? p.x : undefined;
        const py = Array.isArray(p) ? p[1] : isRecord(p) ? p.y : undefined;
        if (px === undefined || py === undefined || (Array.isArray(p) && p.length !== 2)) fail(`Zero1 canvas: ink item ${id} has a malformed point.`);
        return [x - w / 2 + numberField(px, 'inkPoints.x'), y - h / 2 + numberField(py, 'inkPoints.y')] as const;
      });
      const mode: CanvasDrawMode = item.inkStyle === 'highlighter' ? 'highlighter' : 'pen';
      return {
        ...base,
        type: 'draw',
        points,
        strokeWidth: nearestStrokeWidth(optionalNumber(item.inkWidth, 'inkWidth'), mode),
        drawMode: mode,
      };
    }
    case 'image':
    case 'file':
      dropped.push(item.title || kind);
      return null;
    default:
      fail(`Zero1 canvas: unknown item kind ${kind}.`);
  }
}

function convertConnection(
  conn: Zero1Connection,
  bounds: Map<string, { x: number; y: number; w: number; h: number }>,
): CanvasShape | null {
  const source = optionalString(conn.sourceID, 'sourceID');
  const target = optionalString(conn.targetID, 'targetID');
  if (!source || !target) fail('Zero1 canvas: connection needs sourceID and targetID.');
  const a = bounds.get(source);
  const b = bounds.get(target);
  if (!a || !b) return null; // an endpoint was skipped (image/file) — drop the edge
  const minX = Math.min(a.x, b.x);
  const minY = Math.min(a.y, b.y);
  const maxX = Math.max(a.x + a.w, b.x + b.w);
  const maxY = Math.max(a.y + a.h, b.y + b.h);
  const mindmap = conn.isMindmap === true;
  const head = conn.arrow === true ? 'arrow' : 'none';
  return {
    id: createCanvasShapeId(conn.id ?? newUuid()),
    type: 'arrow',
    x: minX,
    y: minY,
    w: Math.max(1, maxX - minX),
    h: Math.max(1, maxY - minY),
    fromId: createCanvasShapeId(source),
    toId: createCanvasShapeId(target),
    text: conn.label ?? '',
    arrowStart: 'none',
    arrowEnd: mindmap ? 'none' : head,
    routing: mindmap ? 'curved' : conn.routing === 'orthogonal' ? 'orthogonal' : 'straight',
  };
}

/**
 * Convert a Zero1 `.pdfcanvas.json` file (object or JSON string) into a
 * `canvas-v1` snapshot. `options.sheet` selects a sheet by id; otherwise the
 * `activeSheetID` (or first) sheet is used. Items without a `sheetID`
 * belong to every sheet. Output always passes `parseCanvasSnapshot`.
 */
export function zero1ToChois(input: unknown, options: { sheet?: string } = {}): Zero1Import {
  const raw = toRecord(input);
  const sheet = pickSheet(raw, options.sheet);
  const sheetId = sheet?.id;
  const dropped: string[] = [];

  const shapes: CanvasShape[] = [];
  const bounds = new Map<string, { x: number; y: number; w: number; h: number }>();
  for (const item of raw.items as Zero1Item[]) {
    if (item.sheetID !== undefined && item.sheetID !== null && sheetId !== undefined && item.sheetID !== sheetId) {
      continue;
    }
    const shape = convertItem(item, dropped);
    if (shape) {
      shapes.push(shape);
      bounds.set(item.id!, { x: shape.x, y: shape.y, w: shape.w, h: shape.h });
    }
  }
  for (const conn of (raw.connections ?? []) as Zero1Connection[]) {
    const arrow = convertConnection(conn, bounds);
    if (arrow) shapes.push(arrow);
  }

  const snapshot = parseCanvasSnapshot({
    version: 'canvas-v1',
    shapes,
    camera: viewportToCamera(sheet?.viewport),
  });
  const sheets = ((raw.sheets ?? []) as Zero1Sheet[])
    .filter(s => typeof s.id === 'string')
    .map(s => ({ id: s.id as string, title: typeof s.title === 'string' ? s.title : '' }));
  return { snapshot, dropped, sheets, sheetId };
}

interface ExportContext {
  sheetId: string;
  idMap: Map<string, string>;
}

function exportItem(shape: CanvasShape, ctx: ExportContext): Record<string, unknown> | null {
  const id = ctx.idMap.get(shape.id as string);
  if (!id) return null;
  const cx = shape.x + shape.w / 2;
  const cy = shape.y + shape.h / 2;
  const common: Record<string, unknown> = {
    id,
    x: cx,
    y: cy,
    sheetID: ctx.sheetId,
    category: typeof shape.category === 'string' && ['idea', 'question', 'evidence', 'action', 'reference'].includes(shape.category)
      ? shape.category
      : 'reference',
    elementWidth: shape.w,
    elementHeight: shape.h,
  };
  if (shape.locked) common.locked = true;
  const color = shape.color !== undefined ? CHOIS_COLOR[shape.color] : undefined;
  if (color !== undefined) common.color = color;

  switch (shape.type) {
    case 'note':
      return { ...common, kind: 'sticky', title: '', text: shape.text ?? '' };
    case 'card': {
      const lines = (shape.text ?? '').split('\n');
      return { ...common, kind: 'note', title: lines[0] ?? '', text: lines.slice(1).join('\n') };
    }
    case 'text':
      return { ...common, kind: 'text', title: '', text: shape.text ?? '' };
    case 'rect':
    case 'ellipse':
    case 'diamond':
    case 'triangle':
    case 'hexagon':
    case 'star': {
      const kind = shape.type === 'ellipse' ? 'ellipse' : shape.type === 'diamond' ? 'diamond' : 'rectangle';
      return { ...common, kind: 'shape', title: shape.text ?? '', text: '', shape: kind };
    }
    case 'frame':
      return { ...common, kind: 'frame', title: shape.text ?? '', text: '' };
    case 'draw': {
      const mode = shape.drawMode === 'highlighter' ? 'highlighter' : 'pen';
      return {
        ...common,
        kind: 'ink',
        title: '',
        text: '',
        inkPoints: shape.points.map(([px, py]) => [px - shape.x, py - shape.y]),
        inkWidth: shape.strokeWidth ?? 4,
        inkStyle: mode,
      };
    }
    default:
      return null; // arrow handled separately; image/file not representable
  }
}

/**
 * Convert a canvas document into a Zero1 version-6 file. Every emitted id is
 * a UUID — non-UUID Chois ids get a fresh UUID and connections are remapped.
 * Only arrows attached to two exported items become connections.
 */
export function choisToZero1(document: { shapes: readonly CanvasShape[] }, camera?: CanvasCamera): Zero1File {
  const sheetId = newUuid();
  const idMap = new Map<string, string>();
  for (const shape of document.shapes) {
    const id = shape.id as string;
    idMap.set(id, isUuid(id) ? id : newUuid());
  }
  const ctx: ExportContext = { sheetId, idMap };

  const items: Record<string, unknown>[] = [];
  for (const shape of document.shapes) {
    if (shape.type === 'arrow' || shape.type === 'image') continue;
    const item = exportItem(shape, ctx);
    if (item) items.push(item);
  }
  const exportedIds = new Set(items.map(i => i.id as string));
  const connections: Record<string, unknown>[] = [];
  for (const shape of document.shapes) {
    if (shape.type !== 'arrow' || !shape.fromId || !shape.toId) continue;
    const source = idMap.get(shape.fromId as string);
    const target = idMap.get(shape.toId as string);
    if (!source || !target || !exportedIds.has(source) || !exportedIds.has(target)) continue;
    connections.push({
      id: isUuid(shape.id as string) ? (shape.id as string) : newUuid(),
      sourceID: source,
      targetID: target,
      label: shape.text ?? '',
      isMindmap: shape.routing === 'curved',
      arrow: shape.arrowEnd === 'arrow',
      routing: shape.routing === 'orthogonal' ? 'orthogonal' : 'straight',
    });
  }

  const cam = camera ?? { x: 0, y: 0, z: 1 };
  return {
    version: 6,
    items,
    connections,
    sheets: [{ id: sheetId, title: 'Canvas', viewport: { panX: -cam.x * cam.z, panY: -cam.y * cam.z, zoom: cam.z } }],
    activeSheetID: sheetId,
  };
}
