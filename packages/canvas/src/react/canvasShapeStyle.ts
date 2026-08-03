import {
  CANVAS_COLORS,
  parseCanvasShape,
  sanitizeCanvasHtml,
  validateCanvasAssetUrl,
  validateCanvasCssColor,
} from '../core/index.ts';
import type { CanvasShapeType } from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';

export function effectiveFill(s: CanvasShape): string {
  if (s.fillColor) {
    try { return validateCanvasCssColor(s.fillColor); } catch { /* palette fallback */ }
  }
  return s.color ? CANVAS_COLORS[s.color].bg : CANVAS_COLORS.blue.bg;
}

export function effectiveBorder(s: CanvasShape): string {
  return s.color ? CANVAS_COLORS[s.color].border : '#2563eb';
}

export function effectiveText(s: CanvasShape): string {
  if (s.textColor) {
    try { return validateCanvasCssColor(s.textColor); } catch { /* palette fallback */ }
  }
  return s.color ? CANVAS_COLORS[s.color].text : '#0f172a';
}

export function polygonPoints(type: CanvasShapeType, w: number, h: number): string {
  switch (type) {
    case 'triangle': return `${w / 2},0 ${w},${h} 0,${h}`;
    case 'diamond': return `${w / 2},0 ${w},${h / 2} ${w / 2},${h} 0,${h / 2}`;
    case 'hexagon': {
      const inset = w * 0.25;
      return `${inset},0 ${w - inset},0 ${w},${h / 2} ${w - inset},${h} ${inset},${h} 0,${h / 2}`;
    }
    case 'star': {
      const cx = w / 2, cy = h / 2, rOuter = Math.min(w, h) / 2, rInner = rOuter * 0.4;
      const pts: string[] = [];
      for (let i = 0; i < 10; i++) {
        const angle = (Math.PI / 5) * i - Math.PI / 2;
        const r = i % 2 === 0 ? rOuter : rInner;
        pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
      }
      return pts.join(' ');
    }
    default: return '';
  }
}

export function strokePath(points: [number, number][]): string {
  if (points.length === 0) return '';
  if (points.length === 1) return `M ${points[0][0]} ${points[0][1]} L ${points[0][0] + 0.1} ${points[0][1]}`;
  let d = `M ${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length - 1; i++) {
    const [cx, cy] = points[i], [nx, ny] = points[i + 1];
    d += ` Q ${cx} ${cy} ${(cx + nx) / 2} ${(cy + ny) / 2}`;
  }
  const last = points[points.length - 1];
  return `${d} L ${last[0]} ${last[1]}`;
}

export function escapeHtml(s: string): string {
  return s.replace(/[&<>\"]/g, ch => ch === '&' ? '&amp;' : ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : '&quot;');
}

type TextRun = { text: string; bold: boolean; italic: boolean; underline: boolean };

export function htmlToLines(html: string): TextRun[][] {
  const template = document.createElement('template');
  template.innerHTML = html;
  const lines: TextRun[][] = [[]];
  const walk = (node: Node, style: Omit<TextRun, 'text'>) => {
    node.childNodes.forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        const text = child.textContent ?? '';
        if (text) lines[lines.length - 1].push({ text, ...style });
        return;
      }
      if (child.nodeType !== Node.ELEMENT_NODE) return;
      const el = child as HTMLElement;
      if (el.tagName === 'BR') { lines.push([]); return; }
      const next = { bold: style.bold || el.tagName === 'B' || el.tagName === 'STRONG', italic: style.italic || el.tagName === 'I' || el.tagName === 'EM', underline: style.underline || el.tagName === 'U' };
      const isBlock = el.tagName === 'DIV' || el.tagName === 'P' || el.tagName === 'LI';
      if (isBlock && lines[lines.length - 1].length > 0) lines.push([]);
      walk(el, next);
      if (isBlock) lines.push([]);
    });
  };
  walk(template.content, { bold: false, italic: false, underline: false });
  return lines.filter(line => line.length > 0);
}

export function shapeHtml(s: CanvasShape): string {
  if (s.html) return sanitizeCanvasHtml(s.html);
  if (!s.text) return '';
  return escapeHtml(s.text).replace(/\n/g, '<br>');
}

export function safeAssetUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try { return validateCanvasAssetUrl(value); } catch { return undefined; }
}

export function sanitizeShapeForCanvas(shape: CanvasShape): CanvasShape | null {
  try { return parseCanvasShape(shape) as unknown as CanvasShape; } catch { return null; }
}

export function shapePlainText(s: CanvasShape): string {
  if (!s.html) return s.text ?? '';
  return htmlToLines(s.html).map(line => line.map(run => run.text).join('')).join('\n');
}
