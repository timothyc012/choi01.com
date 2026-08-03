import {
  CANVAS_COLORS,
  CANVAS_LIMITS,
} from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';
import {
  arrowGeometry,
  bezierAt,
  bounds,
  centreOf,
  escapeHtml,
  htmlToLines,
  rawBounds,
  safeAssetUrl,
  shapeHtml,
  shapePlainText,
  strokePath,
} from './canvasGeometry';
import { pathMidpoint, toPath } from './canvasRouting';
import { fontStackForShape } from './canvasText';
import { CANVAS_UI_COLORS } from './theme';

/** Builds a bounded, sanitized SVG snapshot suitable for download or rasterization. */
export function buildCanvasSvg(all: CanvasShape[], isDarkMode: boolean): string | null {
  if (all.length === 0) return null;

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const s of all) {
    const b = bounds(s);
    minX = Math.min(minX, b.minX); minY = Math.min(minY, b.minY);
    maxX = Math.max(maxX, b.maxX); maxY = Math.max(maxY, b.maxY);
  }
  const pad = 40;
  const w = maxX - minX + pad * 2;
  const h = maxY - minY + pad * 2;
  if (!Number.isFinite(w) || !Number.isFinite(h)
    || w > CANVAS_LIMITS.maxExportDimension || h > CANVAS_LIMITS.maxExportDimension
    || w * h > CANVAS_LIMITS.maxExportPixels) return null;

  // Real SVG primitives, not foreignObject: browsers refuse to rasterise
  // foreignObject through canvas, which would break PNG export.
  const textBlock = (s: CanvasShape, fill: string, fallbackSize: number, weight: string, align: 'start' | 'middle') => {
    const size = s.fontSize ?? fallbackSize;
    const family = fontStackForShape(s);
    const lines = htmlToLines(shapeHtml(s));
    if (lines.length === 0) return '';
    const b = rawBounds(s);
    const textAnchor = s.textAlign === 'right' ? 'end' : s.textAlign === 'center' ? 'middle' : s.textAlign === 'left' ? 'start' : align;
    const anchorX = textAnchor === 'end' ? b.maxX - 12 : textAnchor === 'middle' ? (b.minX + b.maxX) / 2 : b.minX + 12;
    const startY = b.minY + size + 12;
    return lines.map((line, i) => {
      const spans = line.map(run => {
        const styles = [
          run.bold ? 'font-weight:700' : `font-weight:${weight}`,
          run.italic ? 'font-style:italic' : '',
          run.underline ? 'text-decoration:underline' : '',
        ].filter(Boolean).join(';');
        return `<tspan style="${styles}">${escapeHtml(run.text)}</tspan>`;
      }).join('');
      return `<text x="${anchorX}" y="${startY + i * size * 1.4}" font-family="${escapeHtml(family)}" font-size="${size}" fill="${fill}" text-anchor="${textAnchor}">${spans}</text>`;
    }).join('');
  };

  const body = all.map(s => {
    const palette = CANVAS_COLORS[s.color ?? 'blue'];
    const b = rawBounds(s);
    const c = centreOf(s);
    const rot = s.rotation ? ` transform="rotate(${(s.rotation * 180) / Math.PI} ${c.x} ${c.y})"` : '';

    const ink = s.color ? CANVAS_COLORS[s.color].border : CANVAS_UI_COLORS.ink;
    if (s.type === 'draw' && s.points) {
      return `<path d="${strokePath(s.points)}" fill="none" stroke="${ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (s.type === 'arrow') {
      const g = arrowGeometry(s, new Map(all.map(x => [x.id, x])), all);
      const orthPoint = g.routing === 'orthogonal' && g.pathPoints && g.pathPoints.length > 1
        ? g.pathPoints[g.pathPoints.length - 2]
        : null;
      const near = g.routing === 'orthogonal' && orthPoint
        ? orthPoint
        : bezierAt(0.94, g.start, g.control, g.end);
      const angle = Math.atan2(g.end.y - near.y, g.end.x - near.x);
      const head = 14;
      const p1 = `${g.end.x - head * Math.cos(angle - 0.4)},${g.end.y - head * Math.sin(angle - 0.4)}`;
      const p2 = `${g.end.x - head * Math.cos(angle + 0.4)},${g.end.y - head * Math.sin(angle + 0.4)}`;
      const d = g.routing === 'orthogonal' && g.pathPoints
        ? toPath(g.pathPoints)
        : (g.bend === 0
          ? `M ${g.start.x} ${g.start.y} L ${g.end.x} ${g.end.y}`
          : `M ${g.start.x} ${g.start.y} Q ${g.control.x} ${g.control.y} ${g.end.x} ${g.end.y}`);
      const mid = g.routing === 'orthogonal' && g.pathPoints
        ? pathMidpoint(g.pathPoints)
        : (g.bend === 0
          ? { x: (g.start.x + g.end.x) / 2, y: (g.start.y + g.end.y) / 2 }
          : bezierAt(0.5, g.start, g.control, g.end));
      const labelText = shapePlainText(s);
      const label = labelText
        ? `<text x="${mid.x}" y="${mid.y - 6}" text-anchor="middle" font-family="${escapeHtml(fontStackForShape(s))}" font-size="${s.fontSize ?? 12}" fill="${ink}">${escapeHtml(labelText)}</text>`
        : '';
      return `<path d="${d}" fill="none" stroke="${ink}" stroke-width="2.5" stroke-linecap="round"/>`
        + `<polygon points="${g.end.x},${g.end.y} ${p1} ${p2}" fill="${ink}"/>` + label;
    }
    if (s.type === 'image' && s.src) {
      const src = safeAssetUrl(s.src);
      if (!src) return '';
      return `<image href="${escapeHtml(src)}" x="${b.minX}" y="${b.minY}" width="${b.maxX - b.minX}" height="${b.maxY - b.minY}"${rot}/>`;
    }
    if (s.type === 'frame') {
      return `<g${rot}><rect x="${b.minX}" y="${b.minY}" width="${b.maxX - b.minX}" height="${b.maxY - b.minY}" fill="none" stroke="${CANVAS_UI_COLORS.slate400}" stroke-width="2" rx="4"/>`
        + `<text x="${b.minX}" y="${b.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${CANVAS_UI_COLORS.muted}">${escapeHtml(s.text ?? '프레임')}</text></g>`;
    }
    if (s.type === 'note') {
      return `<g${rot}><rect x="${b.minX}" y="${b.minY}" width="${b.maxX - b.minX}" height="${b.maxY - b.minY}" fill="${palette.bg}"/>`
        + `<rect x="${b.minX}" y="${b.minY}" width="${b.maxX - b.minX}" height="6" fill="${palette.border}"/>`
        + textBlock(s, palette.text, 14, '600', 'start') + `</g>`;
    }
    if (s.type === 'card') {
      const isGlass = s.cardStyle === 'glass';
      return `<g${rot}><rect x="${b.minX}" y="${b.minY}" width="${b.maxX - b.minX}" height="${b.maxY - b.minY}" rx="16" fill="${isGlass ? CANVAS_UI_COLORS.glassFill : CANVAS_UI_COLORS.slateCard}"/>`
        + `<text x="${b.minX + 16}" y="${b.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${CANVAS_UI_COLORS.slate400}">[ ${escapeHtml(s.category ?? 'ENTITY')} ]</text>`
        + textBlock(s, CANVAS_UI_COLORS.white, 16, '700', 'start') + `</g>`;
    }
    const shapeEl = s.type === 'ellipse'
      ? `<ellipse cx="${(b.minX + b.maxX) / 2}" cy="${(b.minY + b.maxY) / 2}" rx="${(b.maxX - b.minX) / 2}" ry="${(b.maxY - b.minY) / 2}" fill="${palette.bg}" stroke="${palette.border}" stroke-width="2"/>`
      : `<rect x="${b.minX}" y="${b.minY}" width="${b.maxX - b.minX}" height="${b.maxY - b.minY}" rx="12" fill="${palette.bg}" stroke="${palette.border}" stroke-width="2"/>`;
    return `<g${rot}>${shapeEl}${textBlock(s, palette.text, 14, '700', 'middle')}</g>`;
  }).join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="${minX - pad} ${minY - pad} ${w} ${h}">`
    + `<rect x="${minX - pad}" y="${minY - pad}" width="${w}" height="${h}" fill="${isDarkMode ? CANVAS_UI_COLORS.canvasDark : CANVAS_UI_COLORS.canvasLight}"/>`
    + body + `</svg>`;
}

export type SvgBuilder = () => string | null;

/** Rasterizes the bounded SVG into a 2x PNG, returning null on browser failures. */
export async function exportCanvasPng(buildSvg: SvgBuilder): Promise<Blob | null> {
  const svg = buildSvg();
  if (!svg) return null;
  const match = /width="([\d.]+)" height="([\d.]+)"/.exec(svg);
  const width = Math.ceil(Number(match?.[1] ?? 1200));
  const height = Math.ceil(Number(match?.[2] ?? 800));
  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

  const img = new Image();
  // Supabase-hosted images are cross-origin; without this the canvas is
  // tainted and toBlob throws.
  img.crossOrigin = 'anonymous';
  try {
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error('svg rasterise failed'));
      img.src = url;
    });
  } catch {
    return null;
  }

  const scale = 2;
  const rasterWidth = width * scale;
  const rasterHeight = height * scale;
  if (!Number.isSafeInteger(rasterWidth) || !Number.isSafeInteger(rasterHeight)
    || rasterWidth > CANVAS_LIMITS.maxExportDimension
    || rasterHeight > CANVAS_LIMITS.maxExportDimension
    || rasterWidth * rasterHeight > CANVAS_LIMITS.maxExportPixels) return null;
  const canvas = document.createElement('canvas');
  canvas.width = rasterWidth;
  canvas.height = rasterHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  ctx.scale(scale, scale);
  ctx.drawImage(img, 0, 0);
  return new Promise<Blob | null>(resolve => {
    try {
      canvas.toBlob(blob => resolve(blob), 'image/png');
    } catch {
      resolve(null);
    }
  });
}
