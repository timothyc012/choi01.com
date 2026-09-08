/**
 * Markdown -> safe HTML for the live preview page.
 *
 * The order of the two steps below is the whole security story: `marked` turns
 * markdown into HTML, and DOMPurify is the only thing standing between a pasted
 * `<img onerror=...>` and the reader's session. Markdown allows raw HTML by
 * design, so the sanitiser is not optional hardening — it is the feature.
 *
 * Never render marked's output directly, and never make the sanitize step
 * conditional. tests/renderMarkdown.test.mjs pins both facts.
 */
import { Marked, type Token } from 'marked';
import DOMPurify from 'dompurify';
import type { Config, DOMPurify as DOMPurifyApi } from 'dompurify';

/**
 * The document as an ordered run of segments.
 *
 * A ```mermaid fence is kept out of the HTML path entirely rather than being
 * rendered and then re-parsed out of the DOM: the diagram source stays a plain
 * string until Mermaid itself draws it, so nothing about it is ever eligible to
 * be treated as markup here.
 */
export type MarkdownBlock =
  | { readonly kind: 'html'; readonly key: string; readonly html: string }
  | {
      readonly kind: 'mermaid';
      readonly key: string;
      readonly source: string;
      /** Shown when Mermaid is unavailable or the diagram does not parse. */
      readonly fallbackHtml: string;
    };

export interface MarkdownRenderResult {
  readonly blocks: readonly MarkdownBlock[];
  /**
   * Human-readable names of what the sanitiser stripped, deduped. Shown in the
   * UI so a surprising preview reads as "this was removed" instead of "this is
   * broken".
   */
  readonly removed: readonly string[];
}

const marked = new Marked({
  gfm: true,
  // Single newlines stay soft, as in CommonMark and GitHub's file rendering.
  breaks: false,
});

/**
 * `<style>` would let pasted markdown restyle the editor chrome around the
 * preview pane, and `<form>` invites credential-looking UI. The `style`
 * *attribute* stays allowed — DOMPurify validates its value, and inline styles
 * are something people legitimately write in markdown.
 */
const SANITIZE_CONFIG: Config = {
  ADD_ATTR: ['target'],
  FORBID_TAGS: ['style', 'form'],
};

/** Reset per render so repeated headings get -1, -2 ... suffixes, not clashes. */
let slugCounts = new Map<string, number>();

function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

function uniqueSlug(text: string): string {
  const base = slugify(text);
  if (!base) return '';
  const seen = slugCounts.get(base) ?? 0;
  slugCounts.set(base, seen + 1);
  return seen === 0 ? base : `${base}-${seen}`;
}

/**
 * Runs after DOMPurify has already decided a node is safe, so anything set here
 * is trusted by construction: a fixed `target`/`rel` pair and a slug derived
 * from text content.
 */
function hardenNode(node: Element): void {
  if (node.nodeName === 'A') {
    const href = node.getAttribute('href') ?? '';
    // External links only — in-document anchors must keep navigating in place.
    if (/^(https?:)?\/\//i.test(href)) {
      node.setAttribute('target', '_blank');
      node.setAttribute('rel', 'noreferrer noopener');
    }
    return;
  }
  if (/^H[1-6]$/.test(node.nodeName) && !node.getAttribute('id')) {
    const slug = uniqueSlug(node.textContent ?? '');
    if (slug) node.setAttribute('id', slug);
  }
}

let purifier: DOMPurifyApi | null = null;

function getPurifier(): DOMPurifyApi {
  if (purifier) return purifier;
  const instance = DOMPurify(typeof window === 'undefined' ? undefined : window);
  if (!instance.isSupported) {
    // Failing loudly beats returning unsanitised HTML from a DOM-less context.
    throw new Error('renderMarkdown needs a DOM: DOMPurify reports isSupported === false.');
  }
  instance.addHook('afterSanitizeAttributes', node => {
    if (node instanceof Element || 'nodeName' in node) hardenNode(node as Element);
  });
  purifier = instance;
  return purifier;
}

function describeRemoval(entry: unknown): string {
  const record = entry as { attribute?: { name?: string }; from?: { nodeName?: string }; element?: { nodeName?: string } };
  const owner = record.from?.nodeName?.toLowerCase();
  if (record.attribute?.name) {
    return owner ? `${owner}[${record.attribute.name}]` : record.attribute.name;
  }
  const element = record.element?.nodeName?.toLowerCase();
  return element ? `<${element}>` : 'unknown';
}

function isMermaidFence(token: { type: string; lang?: string }): boolean {
  // marked keeps the whole info string, so ```mermaid and ```mermaid title=x
  // both land here; only the language word decides.
  return token.type === 'code' && (token.lang ?? '').trim().split(/\s+/)[0] === 'mermaid';
}

/**
 * Splits at the top level of the token stream, so a ```mermaid fence nested
 * inside a list or a blockquote stays an ordinary code block. Lifting those out
 * would tear them from their container, and a diagram is a block-level thing
 * anyway.
 */
export function renderMarkdown(source: string): MarkdownRenderResult {
  const purify = getPurifier();
  slugCounts = new Map();

  const tokens = marked.lexer(source);
  const blocks: MarkdownBlock[] = [];
  const removals: string[] = [];
  let pending: Token[] = [];

  // `purify.removed` is reset at the top of every sanitize() call, so a
  // multi-segment document has to accumulate as it goes — otherwise the notice
  // would only ever describe the last segment.
  const sanitize = (html: string): string => {
    const clean = purify.sanitize(html, SANITIZE_CONFIG);
    removals.push(...purify.removed.map(describeRemoval));
    return clean;
  };

  const flushHtml = () => {
    if (pending.length === 0) return;
    blocks.push({ kind: 'html', key: `html-${blocks.length}`, html: sanitize(marked.parser(pending)) });
    pending = [];
  };

  for (const token of tokens) {
    if (!isMermaidFence(token)) {
      pending.push(token);
      continue;
    }
    flushHtml();
    blocks.push({
      kind: 'mermaid',
      key: `mermaid-${blocks.length}`,
      source: 'text' in token ? token.text : '',
      fallbackHtml: sanitize(marked.parser([token])),
    });
  }
  flushHtml();

  return { blocks, removed: [...new Set(removals)] };
}
