import {
  CanvasValidationError,
  CANVAS_LIMITS,
  createCanvasShapeId,
  type CanvasCamera,
  type CanvasArrowShape,
  type CanvasColorKey,
  type CanvasDocument,
  type CanvasShapeBase,
  type CanvasShape,
  type CanvasShapeId,
  type CanvasSimpleShapeType,
  type CanvasSnapshot,
  type CanvasTextAlign,
} from './model.ts';
import {
  sanitizeCanvasFontFamily,
  sanitizeCanvasHtml,
  validateCanvasAssetUrl,
  validateCanvasCssColor,
} from './security.ts';

export type CanvasCommand =
  | {
      readonly type: 'createShapes';
      readonly shapes: readonly CanvasShape[];
    }
  | {
      readonly type: 'moveShapes';
      readonly ids: readonly CanvasShapeId[];
      readonly dx: number;
      readonly dy: number;
    }
  | {
      readonly type: 'deleteShapes';
      readonly ids: readonly CanvasShapeId[];
    };

export function createCanvasDocument(input: {
  readonly id?: string;
  readonly shapes?: readonly CanvasShape[];
} = {}): CanvasDocument {
  return {
    id: input.id ?? 'local-document',
    version: 1,
    shapes: [...(input.shapes ?? [])],
  };
}

export function applyCanvasCommand(document: CanvasDocument, command: CanvasCommand): CanvasDocument {
  switch (command.type) {
    case 'createShapes':
      return { ...document, shapes: [...document.shapes, ...command.shapes] };
    case 'moveShapes': {
      const ids = new Set(command.ids);
      return {
        ...document,
        shapes: document.shapes.map(shape =>
          ids.has(shape.id) ? { ...shape, x: shape.x + command.dx, y: shape.y + command.dy } : shape,
        ),
      };
    }
    case 'deleteShapes': {
      const ids = new Set(command.ids);
      return {
        ...document,
        shapes: document.shapes.filter(shape => {
          if (ids.has(shape.id)) return false;
          if (shape.type !== 'arrow') return true;
          return !(shape.fromId && ids.has(shape.fromId)) && !(shape.toId && ids.has(shape.toId));
        }),
      };
    }
    default:
      return assertNever(command);
  }
}

export function serializeCanvasSnapshot(document: CanvasDocument, camera: CanvasCamera): CanvasSnapshot {
  return {
    version: 'canvas-v1',
    shapes: [...document.shapes],
    camera: { ...camera },
  };
}

/** Parse one untrusted shape at collaboration/render boundaries. */
export function parseCanvasShape(input: unknown): CanvasShape {
  if (!isRecord(input)) throw new CanvasValidationError('Canvas shape must be an object.');
  return parseShape(input);
}

export function parseCanvasSnapshot(input: unknown): CanvasSnapshot {
  if (!isRecord(input)) {
    throw new CanvasValidationError('Canvas snapshot must be an object.');
  }
  if (input.version !== 'canvas-v1') {
    throw new CanvasValidationError(`Unsupported canvas snapshot version: ${String(input.version)}.`);
  }
  if (!Array.isArray(input.shapes)) {
    throw new CanvasValidationError('Canvas snapshot shapes must be an array.');
  }
  if (input.shapes.length > CANVAS_LIMITS.maxShapes) {
    throw new CanvasValidationError(`Canvas snapshots cannot contain more than ${CANVAS_LIMITS.maxShapes} shapes.`);
  }
  if (!isRecord(input.camera)) {
    throw new CanvasValidationError('Canvas snapshot camera must be an object.');
  }
  const camera = parseCamera(input.camera);
  return {
    version: 'canvas-v1',
    shapes: input.shapes.map(parseShape),
    camera,
  };
}

function parseCamera(input: Record<string, unknown>): CanvasCamera {
  const x = readBoundedNumber(input, 'x', 'camera', CANVAS_LIMITS.coordinate);
  const y = readBoundedNumber(input, 'y', 'camera', CANVAS_LIMITS.coordinate);
  const z = readBoundedNumber(input, 'z', 'camera', CANVAS_LIMITS.cameraZoomMax);
  if (z < CANVAS_LIMITS.cameraZoomMin) {
    throw new CanvasValidationError('Canvas camera zoom is below the supported minimum.');
  }
  return { x, y, z };
}

function parseShape(input: unknown): CanvasShape {
  if (!isRecord(input)) throw new CanvasValidationError('Canvas shape must be an object.');
  const id = input.id;
  const type = input.type;
  if (typeof id !== 'string' || id.trim().length === 0) {
    throw new CanvasValidationError('Canvas shape ID must be a non-empty string.');
  }
  if (id.length > CANVAS_LIMITS.maxShortStringLength) {
    throw new CanvasValidationError('Canvas shape ID is too long.');
  }
  if (typeof type !== 'string' || !SHAPE_TYPES.has(type)) {
    throw new CanvasValidationError(`Unsupported canvas shape type: ${String(type)}.`);
  }
  const x = readBoundedNumber(input, 'x', 'shape', CANVAS_LIMITS.coordinate);
  const y = readBoundedNumber(input, 'y', 'shape', CANVAS_LIMITS.coordinate);
  const w = readBoundedNumber(input, 'w', 'shape', CANVAS_LIMITS.coordinate);
  const h = readBoundedNumber(input, 'h', 'shape', CANVAS_LIMITS.coordinate);
  const common = parseCommonShape(input, id, x, y, w, h);
  if (type === 'draw') {
    if (!Array.isArray(input.points)) throw new CanvasValidationError('Draw shapes require points.');
    return { ...common, type: 'draw', points: parsePoints(input.points) };
  }
  if (type === 'arrow') {
    return {
      ...common,
      type: 'arrow',
      fromId: readOptionalShapeId(input, 'fromId'),
      toId: readOptionalShapeId(input, 'toId'),
      bend: readOptionalBoundedNumber(input, 'bend', CANVAS_LIMITS.coordinate),
      routing: readOptionalRouting(input, 'routing'),
      orthogonalVariant: readOptionalOrthogonalVariant(input, 'orthogonalVariant'),
      arrowStart: readOptionalArrowCap(input, 'arrowStart'),
      arrowEnd: readOptionalArrowCap(input, 'arrowEnd'),
    };
  }
  if (type === 'image') return { ...common, type: 'image' };
  if (!isSimpleShapeType(type)) {
    throw new CanvasValidationError(`Unsupported canvas shape type: ${type}.`);
  }
  return { ...common, type };
}

function parseCommonShape(
  input: Record<string, unknown>,
  id: string,
  x: number,
  y: number,
  w: number,
  h: number,
): CanvasShapeBase {
  return {
    id: createCanvasShapeId(id),
    x,
    y,
    w,
    h,
    rotation: readOptionalFiniteNumber(input, 'rotation'),
    groupId: readOptionalString(input, 'groupId'),
    html: readOptionalHtml(input, 'html'),
    text: readOptionalString(input, 'text'),
    color: readOptionalColor(input, 'color'),
    src: readOptionalAssetUrl(input, 'src'),
    fileName: readOptionalString(input, 'fileName'),
    category: readOptionalString(input, 'category'),
    cardStyle: readOptionalCardStyle(input, 'cardStyle'),
    fontSize: readOptionalFontSize(input, 'fontSize'),
    fontFamily: readOptionalFont(input, 'fontFamily'),
    customFontFamily: readOptionalFontFamily(input, 'customFontFamily'),
    textAlign: readOptionalTextAlign(input, 'textAlign'),
    manualSize: readOptionalBoolean(input, 'manualSize'),
    fillColor: readOptionalCssColor(input, 'fillColor'),
    textColor: readOptionalCssColor(input, 'textColor'),
    strokeStyle: readOptionalStrokeStyle(input, 'strokeStyle'),
  };
}

function readOptionalAssetUrl(input: Record<string, unknown>, key: string): string | undefined {
  const value = readOptionalString(input, key);
  return value === undefined ? undefined : validateCanvasAssetUrl(value);
}

function readOptionalHtml(input: Record<string, unknown>, key: string): string | undefined {
  const value = readOptionalString(input, key);
  return value === undefined ? undefined : sanitizeCanvasHtml(value);
}

function parsePoints(input: unknown[]): readonly (readonly [number, number])[] {
  if (input.length > CANVAS_LIMITS.maxDrawPoints) {
    throw new CanvasValidationError(`Draw shapes cannot contain more than ${CANVAS_LIMITS.maxDrawPoints} points.`);
  }
  return input.map(point => {
    if (!Array.isArray(point) || point.length !== 2) {
      throw new CanvasValidationError('Draw points must contain two coordinates.');
    }
    const [x, y] = point;
    if (typeof x !== 'number' || !Number.isFinite(x) || Math.abs(x) > CANVAS_LIMITS.coordinate
      || typeof y !== 'number' || !Number.isFinite(y) || Math.abs(y) > CANVAS_LIMITS.coordinate) {
      throw new CanvasValidationError('Draw point coordinates must be finite numbers.');
    }
    return [x, y] as const;
  });
}

function readBoundedNumber(input: Record<string, unknown>, key: string, subject: string, limit: number): number {
  const value = input[key];
  if (typeof value !== 'number' || !Number.isFinite(value) || Math.abs(value) > limit) {
    throw new CanvasValidationError(`Canvas ${subject} ${key} must be a finite number within supported limits.`);
  }
  return value;
}

function readOptionalFiniteNumber(input: Record<string, unknown>, key: string): number | undefined {
  return readOptionalBoundedNumber(input, key, CANVAS_LIMITS.coordinate);
}

function readOptionalBoundedNumber(input: Record<string, unknown>, key: string, limit: number): number | undefined {
  const value = input[key];
  if (value === undefined) return undefined;
  if (typeof value !== 'number' || !Number.isFinite(value) || Math.abs(value) > limit) {
    throw new CanvasValidationError(`Canvas shape ${key} must be a finite number within supported limits.`);
  }
  return value;
}

function readOptionalString(input: Record<string, unknown>, key: string): string | undefined {
  const value = input[key];
  if (value === undefined) return undefined;
  if (typeof value !== 'string') throw new CanvasValidationError(`Canvas shape ${key} must be a string.`);
  const limit = key === 'html'
    ? CANVAS_LIMITS.maxHtmlLength
    : key === 'text' || key === 'category'
      ? CANVAS_LIMITS.maxTextLength
      : CANVAS_LIMITS.maxShortStringLength;
  if (value.length > limit) throw new CanvasValidationError(`Canvas shape ${key} is too long.`);
  return value;
}

function readOptionalFontSize(input: Record<string, unknown>, key: string): number | undefined {
  const value = readOptionalBoundedNumber(input, key, CANVAS_LIMITS.fontSizeMax);
  if (value !== undefined && value < CANVAS_LIMITS.fontSizeMin) {
    throw new CanvasValidationError(`Canvas shape ${key} is below the supported minimum.`);
  }
  return value;
}

function readOptionalCssColor(input: Record<string, unknown>, key: string): string | undefined {
  const value = readOptionalString(input, key);
  return value === undefined ? undefined : validateCanvasCssColor(value);
}

function readOptionalFontFamily(input: Record<string, unknown>, key: string): string | undefined {
  const value = readOptionalString(input, key);
  return value === undefined ? undefined : sanitizeCanvasFontFamily(value);
}

function readOptionalBoolean(input: Record<string, unknown>, key: string): boolean | undefined {
  const value = input[key];
  if (value === undefined) return undefined;
  if (typeof value !== 'boolean') throw new CanvasValidationError(`Canvas shape ${key} must be a boolean.`);
  return value;
}

function readOptionalShapeId(input: Record<string, unknown>, key: string): CanvasShapeId | undefined {
  const value = readOptionalString(input, key);
  return value === undefined ? undefined : createCanvasShapeId(value);
}

function readOptionalColor(input: Record<string, unknown>, key: string): CanvasShape['color'] {
  const value = input[key];
  if (value === undefined) return undefined;
  if (typeof value !== 'string' || !isCanvasColorKey(value)) {
    throw new CanvasValidationError(`Canvas shape ${key} is not a supported color.`);
  }
  return value;
}

function readOptionalFont(input: Record<string, unknown>, key: string): CanvasShape['fontFamily'] {
  const value = input[key];
  if (value === undefined) return undefined;
  if (
    value !== 'sans' && value !== 'serif' && value !== 'mono' && value !== 'gothic' &&
    value !== 'korean' && value !== 'chosunmyjo' && value !== 'hdhyundai' && value !== 'custom'
  ) {
    throw new CanvasValidationError(`Canvas shape ${key} is not a supported font.`);
  }
  return value;
}

function readOptionalTextAlign(input: Record<string, unknown>, key: string): CanvasTextAlign | undefined {
  const value = input[key];
  if (value === undefined) return undefined;
  if (value !== 'left' && value !== 'center' && value !== 'right') {
    throw new CanvasValidationError(`Canvas shape ${key} is invalid.`);
  }
  return value;
}

function readOptionalCardStyle(input: Record<string, unknown>, key: string): CanvasShape['cardStyle'] {
  const value = input[key];
  if (value === undefined) return undefined;
  if (value !== 'solid' && value !== 'glass') throw new CanvasValidationError(`Canvas shape ${key} is invalid.`);
  return value;
}

function readOptionalStrokeStyle(input: Record<string, unknown>, key: string): CanvasShape['strokeStyle'] {
  const value = input[key];
  if (value === undefined) return undefined;
  if (value !== 'solid' && value !== 'dashed' && value !== 'dotted') {
    throw new CanvasValidationError(`Canvas shape ${key} is invalid.`);
  }
  return value;
}

function readOptionalRouting(input: Record<string, unknown>, key: string): CanvasArrowShape['routing'] {
  const value = input[key];
  if (value === undefined) return undefined;
  if (value !== 'straight' && value !== 'curved' && value !== 'orthogonal') {
    throw new CanvasValidationError(`Canvas shape ${key} is invalid.`);
  }
  return value;
}

function readOptionalOrthogonalVariant(input: Record<string, unknown>, key: string): CanvasArrowShape['orthogonalVariant'] {
  const value = input[key];
  if (value === undefined) return undefined;
  if (value !== 'elbow' && value !== 'reverse' && value !== 'u' && value !== 'zigzag') {
    throw new CanvasValidationError(`Canvas shape ${key} is invalid.`);
  }
  return value;
}

function readOptionalArrowCap(input: Record<string, unknown>, key: string): 'none' | 'arrow' | 'dot' | undefined {
  const value = input[key];
  if (value === undefined) return undefined;
  if (value !== 'none' && value !== 'arrow' && value !== 'dot') {
    throw new CanvasValidationError(`Canvas shape ${key} is invalid.`);
  }
  return value;
}

function isRecord(input: unknown): input is Record<string, unknown> {
  return typeof input === 'object' && input !== null;
}

const SHAPE_TYPES = new Set([
  'note',
  'card',
  'text',
  'arrow',
  'draw',
  'image',
  'frame',
  'rect',
  'ellipse',
  'triangle',
  'diamond',
  'hexagon',
  'star',
]);

const SIMPLE_SHAPE_TYPES = new Set([
  'note',
  'card',
  'text',
  'frame',
  'rect',
  'ellipse',
  'triangle',
  'diamond',
  'hexagon',
  'star',
]);

const COLORS = new Set(['yellow', 'pink', 'purple', 'blue', 'green', 'peach', 'grey', 'brand', 'ink', 'red']);

function isSimpleShapeType(value: string): value is CanvasSimpleShapeType {
  return SIMPLE_SHAPE_TYPES.has(value);
}

function isCanvasColorKey(value: string): value is CanvasColorKey {
  return COLORS.has(value);
}

function assertNever(value: never): never {
  throw new CanvasValidationError(`Unhandled canvas command: ${String(value)}.`);
}
