/**
 * Wraps rendered markdown in a standalone HTML file.
 *
 * The download has to survive leaving this site, so the stylesheet is inlined
 * rather than linked. It is deliberately a trimmed-down copy of the preview
 * pane's typography — enough to read like the preview, small enough that nobody
 * has to maintain it in lockstep.
 */

const EXPORT_STYLESHEET = `
  :root { color-scheme: light dark; }
  body {
    margin: 0 auto;
    padding: 48px 24px 96px;
    max-width: 880px;
    font-family: Aptos, "Segoe UI", "Helvetica Neue", system-ui, sans-serif;
    font-size: 16px;
    line-height: 1.7;
    color: #111513;
    background: #ffffff;
  }
  h1, h2, h3, h4, h5, h6 { line-height: 1.3; margin: 2em 0 0.6em; font-weight: 620; }
  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; padding-bottom: 0.3em; border-bottom: 1px solid #dfe7e2; }
  h3 { font-size: 1.2em; }
  p, ul, ol, blockquote, table, pre { margin: 0 0 1em; }
  a { color: #087c55; }
  code { font-family: "Cascadia Mono", "SFMono-Regular", Consolas, monospace; font-size: 0.9em; }
  :not(pre) > code { padding: 0.15em 0.4em; border-radius: 4px; background: #f4f7f5; }
  pre { padding: 16px; overflow-x: auto; border: 1px solid #dfe7e2; border-radius: 8px; background: #fbfcfb; }
  pre code { background: none; padding: 0; }
  blockquote { padding-left: 16px; border-left: 3px solid #dfe7e2; color: #4f5a55; }
  table { display: block; width: max-content; max-width: 100%; overflow-x: auto; border-collapse: collapse; }
  th, td { padding: 8px 12px; border: 1px solid #dfe7e2; text-align: left; }
  th { background: #f4f7f5; }
  img { max-width: 100%; }
  /* Mermaid writes its own width/height onto the SVG; without this a wide
     diagram runs off the page in the downloaded file. */
  svg { max-width: 100%; height: auto; }
  hr { height: 1px; border: 0; background: #dfe7e2; margin: 2em 0; }
  @media (prefers-color-scheme: dark) {
    body { color: #e8ede9; background: #131c19; }
    h2 { border-bottom-color: #24312c; }
    a { color: #17b877; }
    :not(pre) > code { background: #1c2723; }
    pre { border-color: #24312c; background: #17211d; }
    blockquote { border-left-color: #24312c; color: #93a29a; }
    th, td { border-color: #24312c; }
    th { background: #17211d; }
    hr { background: #24312c; }
  }
`;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** `bodyHtml` must already be sanitised — see renderMarkdown. */
export function buildHtmlDocument(title: string, bodyHtml: string): string {
  return `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <style>${EXPORT_STYLESHEET}</style>
  </head>
  <body>
${bodyHtml}
  </body>
</html>
`;
}
