// The markdown preview renders user text as HTML, so these tests exist to keep
// the sanitiser wired in. A failure here is a live XSS on /markdown/, not a
// cosmetic regression.
import './helpers/markdownDom.mjs';

import { after, before, it } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';

let renderMarkdown;
let server;

before(async () => {
  server = await createServer({
    logLevel: 'silent',
    server: { middlewareMode: true },
    appType: 'custom',
    optimizeDeps: { noDiscovery: true },
  });
  ({ renderMarkdown } = await server.ssrLoadModule('/src/markdown/renderMarkdown.ts'));
});

after(async () => {
  await server.close();
});

it('renders GFM: headings, tables, task lists, strikethrough, fenced code', () => {
  const { html } = renderMarkdown([
    '# Title',
    '',
    '| a | b |',
    '| --- | --- |',
    '| 1 | 2 |',
    '',
    '- [x] done',
    '- [ ] todo',
    '',
    '~~gone~~',
    '',
    '```js',
    'const x = 1;',
    '```',
  ].join('\n'));

  assert.match(html, /<h1[^>]*>Title<\/h1>/);
  assert.match(html, /<table>/);
  assert.match(html, /<td>1<\/td>/);
  assert.match(html, /type="checkbox"/);
  assert.match(html, /<del>gone<\/del>/);
  assert.match(html, /<code class="language-js">/);
});

it('strips script tags and inline event handlers from raw HTML', () => {
  const { html, removed } = renderMarkdown(
    '<script>alert(1)</script>\n\n<img src=x onerror="alert(2)">\n\n<p onclick="alert(3)">hi</p>',
  );

  assert.doesNotMatch(html, /<script/i);
  assert.doesNotMatch(html, /onerror/i);
  assert.doesNotMatch(html, /onclick/i);
  assert.match(html, /<p>hi<\/p>/);
  assert.ok(removed.length > 0, 'the caller needs to know something was stripped');
});

it('drops javascript: and data:text/html links', () => {
  const { html } = renderMarkdown(
    '[a](javascript:alert(1))\n\n[b](data:text/html;base64,PHNjcmlwdD4=)\n\n[c](https://example.com)',
  );

  assert.doesNotMatch(html, /javascript:/i);
  assert.doesNotMatch(html, /data:text\/html/i);
  assert.match(html, /href="https:\/\/example\.com"/);
});

it('opens external links in a new tab without leaking the referrer, and leaves anchors in place', () => {
  const { html } = renderMarkdown('[out](https://example.com)\n\n[in](#section)');

  assert.match(html, /<a[^>]*href="https:\/\/example\.com"[^>]*target="_blank"[^>]*>/);
  assert.match(html, /rel="noreferrer noopener"/);
  assert.doesNotMatch(html, /<a[^>]*href="#section"[^>]*target=/);
});

it('gives headings stable, collision-free ids', () => {
  const { html } = renderMarkdown('## Setup\n\n## Setup\n\n## 한글 제목');

  assert.match(html, /<h2 id="setup">/);
  assert.match(html, /<h2 id="setup-1">/);
  assert.match(html, /<h2 id="한글-제목">/);
});

it('refuses <style> and <form> so pasted markdown cannot restyle or fake the page chrome', () => {
  const { html } = renderMarkdown('<style>body{display:none}</style>\n\n<form action="/x"><input name="pw"></form>');

  assert.doesNotMatch(html, /<style/i);
  assert.doesNotMatch(html, /<form/i);
});

it('escapes markdown-authored HTML entities rather than executing them', () => {
  const { html } = renderMarkdown('`<script>alert(1)</script>`');

  assert.match(html, /<code>&lt;script&gt;/);
});

it('returns an empty string for empty input', () => {
  assert.equal(renderMarkdown('').html, '');
});
