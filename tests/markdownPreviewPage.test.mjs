// Mounts the real preview page, so a regression in the debounce, the pane
// wiring or the sanitiser notice fails here rather than in someone's browser.
import './helpers/markdownDom.mjs';

import { after, before, it } from 'node:test';
import assert from 'node:assert/strict';
import { setTimeout as delay } from 'node:timers/promises';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { createServer } from 'vite';

// The page renders 300ms after the last keystroke; give it a little slack.
const AFTER_DEBOUNCE_MS = 500;

let container;
let root;
let server;

async function type(value) {
  const editor = container.querySelector('.mp-editor');
  assert.ok(editor, 'expected the markdown textarea to exist');
  const setValue = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
  await act(async () => {
    setValue.call(editor, value);
    editor.dispatchEvent(new window.Event('input', { bubbles: true }));
  });
  await act(async () => { await delay(AFTER_DEBOUNCE_MS); });
}

before(async () => {
  server = await createServer({
    logLevel: 'silent',
    server: { middlewareMode: true },
    appType: 'custom',
    optimizeDeps: { noDiscovery: true },
  });
  const { MarkdownPreviewPage } = await server.ssrLoadModule('/src/markdown/MarkdownPreviewPage.tsx');
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
  await act(async () => { root.render(React.createElement(MarkdownPreviewPage)); });
});

after(async () => {
  await act(async () => { root.unmount(); });
  container.remove();
  await server.close();
});

it('shows both panes with the sample document already rendered', () => {
  assert.ok(container.querySelector('.mp-pane-editor'), 'editor pane');
  assert.ok(container.querySelector('.mp-pane-preview'), 'preview pane');
  assert.equal(container.querySelector('.mp-markdown h1')?.textContent, '마크다운 라이브 프리뷰');
  assert.ok(container.querySelector('.mp-markdown table'), 'the sample table should render');
});

it('updates the preview after the user stops typing', async () => {
  await type('## 새 제목\n\n본문 한 줄.');

  assert.equal(container.querySelector('.mp-markdown h2')?.textContent, '새 제목');
  assert.equal(container.querySelector('.mp-markdown p')?.textContent, '본문 한 줄.');
  assert.equal(container.querySelector('.mp-markdown h1'), null, 'the old document must be gone');
});

it('renders pasted HTML without its script, and says what it removed', async () => {
  await type('안녕<script>window.__pwned = true;</script>');

  assert.equal(container.querySelector('.mp-markdown script'), null, 'no script element may survive');
  assert.equal(window.__pwned, undefined, 'nothing from the document may execute');
  assert.match(container.querySelector('.mp-removed')?.textContent ?? '', /제거/);
});

it('drops the removal notice again once the document is clean', async () => {
  await type('그냥 평범한 문장.');

  assert.equal(container.querySelector('.mp-removed'), null);
});

it('keeps the draft in localStorage so a refresh does not lose it', async () => {
  await type('저장되어야 하는 초안');

  assert.equal(window.localStorage.getItem('choi01:markdown-preview:draft'), '저장되어야 하는 초안');
});

it('switches to a single pane when a view is selected', async () => {
  const preview = [...container.querySelectorAll('.mp-segment')]
    .find(button => button.textContent?.includes('미리보기'));
  assert.ok(preview, 'expected a 미리보기 segment');

  await act(async () => { preview.click(); });

  assert.equal(container.querySelector('.mp-stage')?.getAttribute('data-view'), 'preview');
  assert.equal(preview.getAttribute('aria-pressed'), 'true');
});

it('gives a mermaid fence its own block instead of folding it into the prose', async () => {
  await type('# 제목\n\n```mermaid\npie title 배분\n    "A" : 1\n```\n\n뒤 문단.');

  // Mermaid loads lazily and may not draw under the test DOM, so assert on the
  // wiring that must hold either way: the fence is its own block, its source is
  // still visible, and the surrounding prose is untouched.
  assert.equal(container.querySelector('.mp-markdown h1')?.textContent, '제목');
  assert.ok(
    container.querySelector('.mp-diagram') ?? container.querySelector('code.language-mermaid'),
    'expected either a drawn diagram or its code-block fallback',
  );
  assert.match(container.querySelector('.mp-markdown')?.textContent ?? '', /뒤 문단\./);
});
