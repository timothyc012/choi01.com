import { CANVAS_FONTS, sanitizeCanvasFontFamily, sanitizeCanvasHtml } from '../core/index.ts';
import type { CanvasFontKey, CanvasShapeType, CanvasTextAlign } from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';

export const CANVAS_FONT_KEYS: readonly CanvasFontKey[] = ['sans', 'serif', 'mono', 'gothic', 'korean', 'chosunmyjo', 'hdhyundai', 'custom'];
const GENERIC_FONT_FAMILIES = new Set([
  'serif',
  'sans-serif',
  'monospace',
  'cursive',
  'fantasy',
  'system-ui',
  'ui-serif',
  'ui-sans-serif',
  'ui-monospace',
  'emoji',
  'math',
  'fangsong',
]);

const KNOWN_FONT_FAMILIES = [
  'Arial',
  'Arial Black',
  'Calibri',
  'Cambria',
  'Candara',
  'Comic Sans MS',
  'Consolas',
  'Courier New',
  'D2Coding',
  'Georgia',
  'Helvetica',
  'Malgun Gothic',
  'Meiryo',
  'Noto Sans KR',
  'Noto Serif KR',
  'Noto Serif',
  'Nanum Gothic',
  'NanumMyeongjo',
  'Pretendard',
  'Segoe UI',
  'Times New Roman',
  'Verdana',
  'Apple SD Gothic Neo',
  'Dotum',
  'Gulim',
  '조선일보명조',
  'HD현대체',
  'Batang',
  'Gungsuh',
  'GungsuhChe',
  'Tahoma',
  'Trebuchet MS',
  'Verdana',
  'Yu Gothic',
] as const;

function sanitizeFontFamilyToken(value: string): string {
  return value.replace(/[\u0000-\u001f\u007f]/g, '').replace(/[{}\\]/g, '').trim().slice(0, 120);
}

function isGenericFontFamily(value: string) {
  return GENERIC_FONT_FAMILIES.has(value.trim().toLowerCase());
}

function cssFontFamilyTokenForCheck(token: string) {
  const clean = sanitizeFontFamilyToken(token);
  if (!clean) return '';
  if (isGenericFontFamily(clean)) return clean;
  const escaped = clean.replace(/"/g, '\\"');
  return `"${escaped}"`;
}

function cssFontFamilyFromList(value: string) {
  return sanitizeFontFamilyToken(value)
    .split(',')
    .map(part => part.trim())
    .filter(Boolean)
    .map(cssFontFamilyTokenForCheck)
    .filter(Boolean)
    .join(', ');
}

export function normalizeCustomFontFamily(value: string): string {
  return sanitizeFontFamilyToken(value)
    .split(',')
    .map(part => part.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean)
    .join(', ')
    .slice(0, 120);
}

function extractFontFamiliesFromStack(stack: string) {
  return stack
    .split(',')
    .map(item => sanitizeFontFamilyToken(item).replace(/^["']|["']$/g, ''))
    .filter(Boolean)
    .filter(f => !isGenericFontFamily(f));
}

export const CANVAS_FONT_FAMILY_CANDIDATES = Array.from(new Set([
  ...KNOWN_FONT_FAMILIES,
  ...extractFontFamiliesFromStack(CANVAS_FONTS.sans.stack),
  ...extractFontFamiliesFromStack(CANVAS_FONTS.serif.stack),
  ...extractFontFamiliesFromStack(CANVAS_FONTS.mono.stack),
  ...extractFontFamiliesFromStack(CANVAS_FONTS.gothic.stack),
  ...extractFontFamiliesFromStack(CANVAS_FONTS.korean.stack),
]));

export function collectInstalledFontFamilies() {
  if (typeof document === 'undefined' || !('fonts' in document) || typeof document.fonts.check !== 'function') {
    return CANVAS_FONT_FAMILY_CANDIDATES;
  }

  const detected = CANVAS_FONT_FAMILY_CANDIDATES.filter(family => {
    const token = cssFontFamilyTokenForCheck(family);
    return token ? document.fonts.check(`12px ${token}`) : false;
  });

  return detected.length > 0 ? detected : CANVAS_FONT_FAMILY_CANDIDATES;
}

/** Default text size per shape type, used when a shape has no explicit size. */
const DEFAULT_FONT_SIZE: Partial<Record<CanvasShapeType, number>> = {
  note: 14, card: 16, text: 20, rect: 14, ellipse: 14, frame: 13, arrow: 12,
};

const TEXT_BOX_MIN_WIDTH = 24;
const TEXT_BOX_MIN_HEIGHT = 28;
export const TEXT_BOX_MAX_WIDTH = 720;

export function fontSizeForShape(s: CanvasShape) {
  return s.fontSize ?? DEFAULT_FONT_SIZE[s.type] ?? 14;
}

export function fontStackForShape(s: CanvasShape) {
  if (!s.fontFamily) return CANVAS_FONTS.sans.stack;
  if (s.fontFamily === 'custom') {
    let customFamily = '';
    try { customFamily = normalizeCustomFontFamily(sanitizeCanvasFontFamily(s.customFontFamily ?? '')); } catch { /* use the default stack */ }
    const cssValue = cssFontFamilyFromList(customFamily);
    return cssValue || CANVAS_FONTS.sans.stack;
  }
  return CANVAS_FONTS[s.fontFamily]?.stack ?? CANVAS_FONTS.sans.stack;
}

export function textAlignForShape(s: CanvasShape): CanvasTextAlign {
  if (s.textAlign) return s.textAlign;
  return ['rect', 'ellipse', 'triangle', 'diamond', 'hexagon', 'star'].includes(s.type) ? 'center' : 'left';
}

export function canvasFontFromValue(value: string): CanvasFontKey {
  if (
    value === 'serif' ||
    value === 'mono' ||
    value === 'sans' ||
    value === 'custom' ||
    value === 'gothic' ||
    value === 'korean' ||
    value === 'chosunmyjo' ||
    value === 'hdhyundai'
  ) {
    return value;
  }
  return 'sans';
}

export function listKindForShape(s: CanvasShape): 'bullet' | 'dash' | 'number' | undefined {
  if (s.html?.includes('<ul data-list-style="dash">')) return 'dash';
  if (s.html?.includes('<ul>')) return 'bullet';
  if (s.html?.includes('<ol>')) return 'number';
  return undefined;
}

export function fittedTextBoxSizeFromMeasurement(width: number, height: number) {
  return {
    w: Math.min(TEXT_BOX_MAX_WIDTH, Math.max(TEXT_BOX_MIN_WIDTH, Math.ceil(width))),
    h: Math.max(TEXT_BOX_MIN_HEIGHT, Math.ceil(height)),
  };
}

export function measureTextBoxContent(el: HTMLElement, shape: CanvasShape) {
  const probe = el.cloneNode(true) as HTMLElement;
  probe.removeAttribute('id');
  probe.removeAttribute('role');
  probe.removeAttribute('aria-label');
  probe.removeAttribute('aria-multiline');
  probe.removeAttribute('contenteditable');
  probe.removeAttribute('data-seeded');
  // Never append a clone of the live editor before sanitising it. Pasted
  // event-handler attributes or active URLs must not execute during layout
  // measurement, even though the value is sanitized before persistence.
  probe.innerHTML = sanitizeCanvasHtml(el.innerHTML);

  if ((probe.textContent || '').length === 0) {
    probe.innerHTML = '&nbsp;';
  }

  Object.assign(probe.style, {
    position: 'absolute',
    left: '-10000px',
    top: '-10000px',
    width: 'max-content',
    minWidth: '0',
    maxWidth: `${TEXT_BOX_MAX_WIDTH}px`,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'none',
    margin: '0',
    padding: '0',
    border: '0',
    outline: '0',
    boxSizing: 'content-box',
    visibility: 'hidden',
    pointerEvents: 'none',
    whiteSpace: 'pre-wrap',
    overflow: 'visible',
    overflowWrap: 'break-word',
    wordBreak: 'normal',
    fontSize: `${fontSizeForShape(shape)}px`,
    fontFamily: fontStackForShape(shape),
  });

  document.body.appendChild(probe);
  const rect = probe.getBoundingClientRect();
  probe.remove();
  return fittedTextBoxSizeFromMeasurement(rect.width, rect.height);
}
