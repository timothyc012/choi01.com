import { CanvasValidationError, CANVAS_LIMITS } from './model.ts';

const ALLOWED_HTML_TAGS = new Set(['b', 'strong', 'i', 'em', 'u', 'br', 'div', 'p', 'ul', 'ol', 'li']);
const ALLOWED_ASSET_PROTOCOLS = new Set(['http:', 'https:', 'blob:']);
const SAFE_CSS_COLOR = /^(?:#[0-9a-f]{3,8}|(?:rgb|hsl)a?\([0-9.%\s,/+\-]+\)|[a-z][a-z0-9-]{0,31})$/i;
const MAX_ASSET_PATH_DECODE_PASSES = 8;

/**
 * Keep only the small formatting vocabulary understood by the canvas editor.
 * Attributes are intentionally discarded so event handlers, URLs and CSS
 * cannot cross the snapshot boundary. The DOM path is used in a browser; the
 * tokenizer fallback keeps the core package safe in Node/SSR environments.
 */
export function sanitizeCanvasHtml(input: string): string {
  if (!input) return '';
  if (input.length > CANVAS_LIMITS.maxHtmlLength) {
    throw new CanvasValidationError('Canvas rich text is too long.');
  }
  if (typeof document !== 'undefined') return sanitizeWithDom(input);
  return sanitizeWithoutDom(input);
}

/**
 * Validate an image/file URL before it can become a network request or a link.
 * Only blob URLs created in the current tab and ordinary HTTP(S) storage URLs
 * are allowed. Relative app URLs are intentionally rejected: an untrusted
 * collaborator could otherwise turn an image load into an authenticated GET
 * against a host application's state-changing endpoint.
 */
export function validateCanvasAssetUrl(value: string): string {
  const candidate = value.trim();
  if (!candidate) throw new CanvasValidationError('Canvas asset URLs cannot be empty.');
  if (candidate.startsWith('/') || candidate.startsWith('./') || candidate.startsWith('../')) {
    throw new CanvasValidationError('Canvas asset URLs must use an explicit HTTP(S) or blob origin.');
  }
  let parsed: URL;
  try {
    parsed = new URL(candidate);
  } catch {
    throw new CanvasValidationError('Canvas asset URLs must be absolute HTTP(S)/blob URLs or relative paths.');
  }
  if (!ALLOWED_ASSET_PROTOCOLS.has(parsed.protocol)) {
    throw new CanvasValidationError(`Canvas asset URL protocol is not supported: ${parsed.protocol}`);
  }
  // Do not let a collaborator turn an image load into a state-changing API
  // request even when they know the host's absolute origin. Storage/CDN paths
  // remain valid; application API routes are never valid canvas assets.
  const canonicalPath = canonicalizeAssetPath(decodeAssetPath(parsed.pathname));
  if ((parsed.protocol === 'http:' || parsed.protocol === 'https:')
    && (canonicalPath === '/api' || canonicalPath.startsWith('/api/'))) {
    throw new CanvasValidationError('Canvas asset URLs cannot target application API routes.');
  }
  return parsed.toString();
}

function decodeAssetPath(pathname: string): string {
  let decodedPath = pathname;
  for (let pass = 0; pass < MAX_ASSET_PATH_DECODE_PASSES; pass += 1) {
    let nextPath: string;
    try {
      nextPath = decodeURIComponent(decodedPath);
    } catch {
      throw new CanvasValidationError('Canvas asset URLs cannot contain malformed escapes.');
    }
    if (nextPath === decodedPath) return decodedPath;
    decodedPath = nextPath;
  }
  throw new CanvasValidationError('Canvas asset URLs contain too many encoded path layers.');
}

function canonicalizeAssetPath(pathname: string): string {
  const segments = pathname.replace(/[\\/]+/g, '/').split('/');
  const resolvedSegments: string[] = [];
  for (const segment of segments) {
    if (!segment || segment === '.') continue;
    if (segment === '..') {
      resolvedSegments.pop();
      continue;
    }
    resolvedSegments.push(segment);
  }
  return `/${resolvedSegments.join('/')}`.toLowerCase();
}

/** Validate a user-controlled color before it reaches an inline style or SVG. */
export function validateCanvasCssColor(value: string): string {
  const candidate = value.trim();
  if (!candidate || candidate.length > 64 || !SAFE_CSS_COLOR.test(candidate)) {
    throw new CanvasValidationError('Canvas colors must be simple CSS color values.');
  }
  return candidate;
}

/** Keep custom font stacks free of CSS declarations and control characters. */
export function sanitizeCanvasFontFamily(value: string): string {
  if (/[{};<>\\]/.test(value)) {
    throw new CanvasValidationError('Canvas font families must contain font names only.');
  }
  const candidate = value
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .trim()
    .slice(0, 120);
  if (!candidate || candidate.includes('url(') || candidate.includes('/*')) {
    throw new CanvasValidationError('Canvas font families must contain font names only.');
  }
  return candidate;
}

function sanitizeWithDom(input: string): string {
  const template = document.createElement('template');
  template.innerHTML = input;
  return walkDom(template.content, undefined, 0);
}

function walkDom(node: Node, parentTag?: string, depth = 0): string {
  if (depth > CANVAS_LIMITS.maxHtmlDepth) {
    throw new CanvasValidationError('Canvas rich text nesting is too deep.');
  }
  let output = '';
  node.childNodes.forEach(child => {
    if (child.nodeType === Node.TEXT_NODE) {
      output += escapeHtml(child.textContent ?? '');
      return;
    }
    if (child.nodeType !== Node.ELEMENT_NODE) return;
    const element = child as HTMLElement;
    if (!ALLOWED_HTML_TAGS.has(element.tagName.toLowerCase())) {
      output += walkDom(element, undefined, depth + 1);
      return;
    }
    const tag = element.tagName.toLowerCase();
    if (tag === 'br') {
      output += '<br>';
      return;
    }
    // Browsers can produce a direct list-under-list node after an indent
    // command. HTML requires nested lists to be children of an LI, so repair
    // that shape at the trust boundary instead of persisting invalid markup.
    const wrapsNestedList = (parentTag === 'ul' || parentTag === 'ol')
      && (tag === 'ul' || tag === 'ol');
    if (wrapsNestedList) output += '<li>';
    const marker = tag === 'ul' && element.dataset.listStyle === 'dash'
      ? ' data-list-style="dash"'
      : '';
    output += `<${tag}${marker}>${walkDom(element, tag, depth + 1)}</${tag}>`;
    if (wrapsNestedList) output += '</li>';
  });
  return output;
}

function sanitizeWithoutDom(input: string): string {
  const tokenPattern = /<!--[\s\S]*?-->|<\/?[a-z][^>]*>|[^<]+/gi;
  let output = '';
  let match: RegExpExecArray | null;
  const stack: Array<{ tag: string; wrapsNestedList: boolean }> = [];
  while ((match = tokenPattern.exec(input)) !== null) {
    const token = match[0];
    if (token.startsWith('<!--')) continue;
    if (!token.startsWith('<')) {
      output += escapeHtml(token);
      continue;
    }
    const tagMatch = /^<\/?\s*([a-z0-9]+)[^>]*>$/i.exec(token);
    if (!tagMatch) continue;
    const tag = tagMatch[1].toLowerCase();
    if (!ALLOWED_HTML_TAGS.has(tag)) continue;
    if (tag === 'br') {
      if (!token.startsWith('</')) output += '<br>';
      continue;
    }
    if (token.startsWith('</')) {
      output += `</${tag}>`;
      const entry = stack.pop();
      if (entry?.wrapsNestedList) output += '</li>';
      continue;
    }
    const parentTag = stack.at(-1)?.tag;
    if (stack.length >= CANVAS_LIMITS.maxHtmlDepth) {
      throw new CanvasValidationError('Canvas rich text nesting is too deep.');
    }
    const wrapsNestedList = (parentTag === 'ul' || parentTag === 'ol')
      && (tag === 'ul' || tag === 'ol');
    if (wrapsNestedList) output += '<li>';
    const marker = tag === 'ul' && /data-list-style\s*=\s*["']dash["']/i.test(token)
      ? ' data-list-style="dash"'
      : '';
    output += `<${tag}${marker}>`;
    stack.push({ tag, wrapsNestedList });
  }
  return output;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>\"]/g, character => (
    character === '&' ? '&amp;' : character === '<' ? '&lt;' : character === '>' ? '&gt;' : '&quot;'
  ));
}
