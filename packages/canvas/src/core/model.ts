export type Brand<Value, Name extends string> = Value & {
  readonly __brand: Name;
};

export type CanvasShapeId = Brand<string, 'CanvasShapeId'>;
export type CanvasAssetUrl = Brand<string, 'CanvasAssetUrl'>;

export type CanvasColorKey =
  | 'yellow'
  | 'pink'
  | 'purple'
  | 'blue'
  | 'green'
  | 'peach'
  | 'grey'
  | 'brand'
  | 'ink'
  | 'red';

export type CanvasFontKey =
  | 'sans'
  | 'serif'
  | 'mono'
  | 'gothic'
  | 'korean'
  | 'chosunmyjo'
  | 'hdhyundai'
  | 'custom';

export type CanvasTextAlign = 'left' | 'center' | 'right';

export type CanvasStrokeWidth = 2 | 4 | 6 | 8;

export type CanvasDrawMode = 'pen' | 'highlighter';

export type OrthogonalVariant = 'elbow' | 'reverse' | 'u' | 'zigzag';

export type CanvasShapeType =
  | 'note'
  | 'card'
  | 'text'
  | 'arrow'
  | 'draw'
  | 'image'
  | 'frame'
  | 'rect'
  | 'ellipse'
  | 'triangle'
  | 'diamond'
  | 'hexagon'
  | 'star';

export type CanvasSimpleShapeType =
  | 'note'
  | 'card'
  | 'text'
  | 'frame'
  | 'rect'
  | 'ellipse'
  | 'triangle'
  | 'diamond'
  | 'hexagon'
  | 'star';

export type CanvasOutlinedShapeType =
  | 'frame'
  | 'rect'
  | 'ellipse'
  | 'triangle'
  | 'diamond'
  | 'hexagon'
  | 'star';

export type CanvasUnoutlinedShapeType = 'note' | 'card' | 'text';

export type CanvasTool =
  | 'select'
  | 'hand'
  | 'note'
  | 'card'
  | 'text'
  | 'arrow'
  | 'draw'
  | 'eraser'
  | 'frame'
  | 'rect'
  | 'ellipse'
  | 'triangle'
  | 'diamond'
  | 'hexagon'
  | 'star';

/**
 * Resource limits applied at every untrusted snapshot/collaboration boundary.
 * They are deliberately generous for normal boards while keeping malformed
 * remote data from creating unbounded render or geometry work.
 */
export const CANVAS_LIMITS = {
  coordinate: 1_000_000_000,
  cameraZoomMin: 0.05,
  cameraZoomMax: 16,
  fontSizeMin: 1,
  fontSizeMax: 512,
  maxShapes: 10_000,
  maxDrawPoints: 50_000,
  maxExportDimension: 16_384,
  maxExportPixels: 64 * 1024 * 1024,
  maxHtmlLength: 200_000,
  maxHtmlDepth: 256,
  maxTextLength: 100_000,
  maxShortStringLength: 512,
} as const;

export const SHAPE_TOOLS: readonly CanvasTool[] = [
  'rect',
  'ellipse',
  'triangle',
  'diamond',
  'hexagon',
  'star',
];

export interface CanvasShapeBase {
  readonly id: CanvasShapeId;
  readonly x: number;
  readonly y: number;
  readonly w: number;
  readonly h: number;
  readonly rotation?: number;
  readonly groupId?: string;
  readonly html?: string;
  readonly text?: string;
  readonly color?: CanvasColorKey;
  readonly src?: string;
  readonly fileName?: string;
  readonly category?: string;
  readonly cardStyle?: 'solid' | 'glass';
  readonly fontSize?: number;
  readonly fontFamily?: CanvasFontKey;
  readonly customFontFamily?: string;
  readonly textAlign?: CanvasTextAlign;
  readonly manualSize?: boolean;
  readonly fillColor?: string;
  readonly textColor?: string;
  readonly strokeStyle?: 'solid' | 'dashed' | 'dotted';
}

export interface CanvasOutlinedShape extends CanvasShapeBase {
  readonly type: CanvasOutlinedShapeType;
  readonly strokeWidth?: CanvasStrokeWidth;
}

export interface CanvasUnoutlinedShape extends CanvasShapeBase {
  readonly type: CanvasUnoutlinedShapeType;
}

export type CanvasRectShape = CanvasOutlinedShape | CanvasUnoutlinedShape;

export interface CanvasArrowShape extends CanvasShapeBase {
  readonly type: 'arrow';
  readonly strokeWidth?: CanvasStrokeWidth;
  readonly fromId?: CanvasShapeId;
  readonly toId?: CanvasShapeId;
  readonly bend?: number;
  readonly routing?: 'straight' | 'curved' | 'orthogonal';
  readonly orthogonalVariant?: OrthogonalVariant;
  readonly orthogonalWaypoints?: readonly { readonly x: number; readonly y: number }[];
  readonly arrowStart?: 'none' | 'arrow' | 'dot';
  readonly arrowEnd?: 'none' | 'arrow' | 'dot';
}

export interface CanvasDrawShape extends CanvasShapeBase {
  readonly type: 'draw';
  readonly points: readonly (readonly [number, number])[];
  readonly strokeWidth?: CanvasStrokeWidth;
  readonly drawMode?: CanvasDrawMode;
}

export interface CanvasImageShape extends CanvasShapeBase {
  readonly type: 'image';
}

export type CanvasShape = CanvasRectShape | CanvasArrowShape | CanvasDrawShape | CanvasImageShape;

export interface CanvasCamera {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

export interface CanvasSnapshot {
  readonly version: 'canvas-v1';
  readonly shapes: readonly CanvasShape[];
  readonly camera: CanvasCamera;
}

export interface CanvasDocument {
  readonly id: string;
  readonly version: 1;
  readonly shapes: readonly CanvasShape[];
}

export interface CanvasSelectionInfo {
  readonly count: number;
  readonly canGroup: boolean;
  readonly canUngroup: boolean;
  readonly isTextual: boolean;
}

export const CANVAS_FONTS = {
  sans: { label: '고딕', stack: '"Inter", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, -apple-system, sans-serif' },
  serif: { label: '명조', stack: '"Noto Serif KR", "Noto Serif", "Malgun Gothic", Batang, "Times New Roman", serif' },
  mono: { label: '모노', stack: '"JetBrains Mono", "D2Coding", "Consolas", "Courier New", ui-monospace, monospace' },
  gothic: { label: 'Gothic', stack: '"Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", "Pretendard", "Nanum Gothic", "Gulim", sans-serif' },
  korean: { label: 'Korean', stack: '"Noto Serif KR", "Noto Serif", "Batang", "Gungsuh", "GungsuhChe", serif' },
  chosunmyjo: { label: '조선일보명조', stack: '"조선일보명조", "Noto Serif KR", "Noto Serif", "NanumMyeongjo", serif' },
  hdhyundai: { label: 'HD현대체', stack: '"HD현대체", "Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif' },
  custom: { label: '직접입력', stack: 'sans-serif' },
} as const satisfies Record<CanvasFontKey, { readonly label: string; readonly stack: string }>;

export const CANVAS_COLORS = {
  yellow: { bg: '#fef08a', border: '#facc15', text: '#854d0e', label: '노랑' },
  pink: { bg: '#fbcfe8', border: '#f472b6', text: '#9d174d', label: '분홍' },
  purple: { bg: '#e9d5ff', border: '#c084fc', text: '#6b21a8', label: '보라' },
  blue: { bg: '#bae6fd', border: '#38bdf8', text: '#0369a1', label: '하늘' },
  green: { bg: '#bbf7d0', border: '#4ade80', text: '#15803d', label: '연두' },
  peach: { bg: '#fed7aa', border: '#fb923c', text: '#9a3412', label: '살구' },
  grey: { bg: '#e2e8f0', border: '#94a3b8', text: '#334155', label: '회색' },
  brand: { bg: '#e6f0ff', border: '#003087', text: '#003087', label: '브랜드' },
  red: { bg: '#fecaca', border: '#ef4444', text: '#991b1b', label: '빨강' },
  ink: { bg: '#1e293b', border: '#0f172a', text: '#f8fafc', label: '먹' },
} as const satisfies Record<CanvasColorKey, { readonly bg: string; readonly border: string; readonly text: string; readonly label: string }>;

export const CANVAS_COLOR_KEYS: readonly CanvasColorKey[] = Object.keys(CANVAS_COLORS) as CanvasColorKey[];

export function createCanvasShapeId(value?: string): CanvasShapeId {
  const candidate = value ?? globalThis.crypto?.randomUUID?.();
  if (!candidate) {
    throw new CanvasValidationError('Canvas shape IDs require a cryptographically secure random UUID.');
  }
  if (candidate.trim().length === 0) {
    throw new CanvasValidationError('Canvas shape IDs cannot be empty.');
  }
  return candidate as CanvasShapeId;
}

export class CanvasValidationError extends Error {
  readonly code = 'CANVAS_VALIDATION_ERROR' as const;

  constructor(message: string) {
    super(message);
    this.name = 'CanvasValidationError';
  }
}
