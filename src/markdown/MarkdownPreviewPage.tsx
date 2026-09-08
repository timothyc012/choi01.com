import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft, PenLine, Columns2, Eye,
  Copy, Check, Download, FileCode, RotateCcw,
  ArrowDownUp, ShieldAlert, Sun, Moon,
} from 'lucide-react';
import { renderMarkdown, type MarkdownBlock, type MarkdownRenderResult } from './renderMarkdown';
import { renderMermaid, type MermaidResult } from './renderMermaid';
import { buildHtmlDocument } from './exportHtmlDocument';

const DRAFT_KEY = 'choi01:markdown-preview:draft';
const RENDER_DEBOUNCE_MS = 300;
const NARROW_QUERY = '(max-width: 900px)';

type PaneView = 'edit' | 'split' | 'preview';

const SAMPLE_DOCUMENT = [
  '# 마크다운 라이브 프리뷰',
  '',
  '왼쪽에 쓰면 오른쪽에 바로 보입니다. **서버로 아무것도 보내지 않고**, 브라우저 안에서만',
  '변환합니다.',
  '',
  '## 쓸 수 있는 것',
  '',
  '- **굵게**, *기울임*, ~~취소선~~, `인라인 코드`',
  '- [링크](https://choi01.com) — 바깥 링크는 새 탭에서 열립니다',
  '- 중첩 목록',
  '  1. 순서 있는 항목',
  '  2. 그 다음 항목',
  '',
  '### 할 일 목록',
  '',
  '- [x] GFM 표와 체크박스',
  '- [ ] 여기에 직접 써 보기',
  '',
  '### 표',
  '',
  '| 기능 | 지원 |',
  '| --- | :---: |',
  '| 표 | O |',
  '| 각주 | X |',
  '',
  '### 코드',
  '',
  '```ts',
  'export function greet(name: string): string {',
  '  return `안녕하세요, ${name}`;',
  '}',
  '```',
  '',
  '### 다이어그램',
  '',
  '세 칸따옴표 뒤에 `mermaid`를 쓰면 그대로 그려줍니다.',
  '',
  '```mermaid',
  'pie showData',
  '    title 예상 환급액 배분 (단위: EUR)',
  '    "회사 귀속" : 25410',
  '    "2023 보육료" : 1450',
  '    "2024 보육료" : 1890',
  '```',
  '',
  '```mermaid',
  'flowchart LR',
  '    A[마크다운 입력] --> B{코드펜스?}',
  '    B -- mermaid --> C[다이어그램으로 렌더링]',
  '    B -- 그 외 --> D[코드 블록으로 표시]',
  '```',
  '',
  '> 인용문은 이렇게 보입니다.',
  '',
  '---',
  '',
  '붙여넣은 HTML은 렌더링되기 전에 소독됩니다. `<script>` 나 `onerror` 같은 것은',
  '조용히 제거되고, 무엇이 지워졌는지 미리보기 머리말에 알려 줍니다.',
  '',
].join('\n');

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function readDraft(): string {
  try {
    return window.localStorage.getItem(DRAFT_KEY) ?? SAMPLE_DOCUMENT;
  } catch {
    // Private mode / blocked storage: the page still works, it just forgets.
    return SAMPLE_DOCUMENT;
  }
}

/** Names the download after the first heading, so files are not all "markdown". */
function documentName(source: string): string {
  const heading = /^#{1,6}\s+(.+)$/m.exec(source)?.[1] ?? '';
  const name = heading
    .replace(/[\\/:*?"<>|]/g, '')
    .trim()
    .slice(0, 60);
  return name || 'markdown';
}

function countWords(source: string): number {
  const matches = source.trim().match(/\S+/g);
  return matches ? matches.length : 0;
}

/**
 * One ```mermaid fence. While Mermaid is still loading it shows the fence as
 * code, so the block never blinks out of the document; a diagram that will not
 * parse says so and keeps its source visible for fixing.
 */
function MermaidBlock({ block, result }: {
  block: Extract<MarkdownBlock, { kind: 'mermaid' }>;
  result: MermaidResult | undefined;
}) {
  if (result?.status === 'ready') {
    // Mermaid runs at securityLevel 'strict', which sanitises its own output.
    return <figure className="mp-diagram" dangerouslySetInnerHTML={{ __html: result.svg }} />;
  }
  return (
    <div className="mp-block">
      {result?.status === 'error' && (
        <p className="mp-diagram-error">
          <ShieldAlert className="mp-icon" />
          {result.message}
        </p>
      )}
      <div dangerouslySetInnerHTML={{ __html: block.fallbackHtml }} />
    </div>
  );
}

/**
 * Live markdown preview.
 *
 * Unlike the guest canvas next door, this page *does* keep a localStorage
 * draft: losing a half-written document to an accidental refresh is the one
 * failure an editor cannot excuse. It stays local-only — nothing reaches a
 * server, and 초기화 wipes the stored copy.
 */
export function MarkdownPreviewPage() {
  const [source, setSource] = useState(readDraft);
  const [rendered, setRendered] = useState<MarkdownRenderResult>(() => renderMarkdown(source));
  const [view, setView] = useState<PaneView>('split');
  const [isNarrow, setIsNarrow] = useState(() => window.matchMedia(NARROW_QUERY).matches);
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches,
  );
  const [scrollSync, setScrollSync] = useState(true);
  const [copied, setCopied] = useState(false);
  const [diagrams, setDiagrams] = useState<ReadonlyMap<string, MermaidResult>>(new Map());

  const editorRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const scrollOwnerRef = useRef<'editor' | 'preview' | null>(null);

  // Render off the critical typing path: keystrokes stay cheap, the preview
  // catches up once the user pauses.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRendered(renderMarkdown(source));
      try {
        window.localStorage.setItem(DRAFT_KEY, source);
      } catch {
        // Storage unavailable — the preview is the part that matters.
      }
    }, RENDER_DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
  }, [source]);

  // Diagrams are drawn after the markdown pass, in one batch per document, and
  // redrawn when the theme flips so their palette follows the page.
  useEffect(() => {
    const pending = rendered.blocks.filter(block => block.kind === 'mermaid');
    if (pending.length === 0) {
      setDiagrams(previous => (previous.size === 0 ? previous : new Map()));
      return;
    }
    let cancelled = false;
    void (async () => {
      const drawn = await Promise.all(pending.map(async block =>
        [block.key, await renderMermaid(block.source, isDarkMode ? 'dark' : 'light')] as const,
      ));
      if (!cancelled) setDiagrams(new Map(drawn));
    })();
    return () => { cancelled = true; };
  }, [rendered.blocks, isDarkMode]);

  useEffect(() => {
    const query = window.matchMedia(NARROW_QUERY);
    const onChange = (event: MediaQueryListEvent) => setIsNarrow(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  /**
   * What "copy HTML" and the .html download hand over. A drawn diagram travels
   * as its SVG so the exported file shows what the preview showed; one that has
   * not drawn (or failed) falls back to its original code fence rather than
   * vanishing from the document.
   */
  const documentHtml = useMemo(() => rendered.blocks.map(block => {
    if (block.kind === 'html') return block.html;
    const drawn = diagrams.get(block.key);
    return drawn?.status === 'ready' ? drawn.svg : block.fallbackHtml;
  }).join('\n'), [rendered.blocks, diagrams]);

  const stats = useMemo(() => ({
    characters: source.length,
    words: countWords(source),
    lines: source ? source.split('\n').length : 0,
  }), [source]);

  const handleDownloadMarkdown = useCallback(() => {
    downloadBlob(
      new Blob([source], { type: 'text/markdown;charset=utf-8' }),
      `${documentName(source)}.md`,
    );
  }, [source]);

  const handleDownloadHtml = useCallback(() => {
    const name = documentName(source);
    downloadBlob(
      new Blob([buildHtmlDocument(name, documentHtml)], { type: 'text/html;charset=utf-8' }),
      `${name}.html`,
    );
  }, [documentHtml, source]);

  const handleCopyHtml = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(documentHtml);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard denied (permissions, insecure context) — the download still works.
    }
  }, [documentHtml]);

  const handleReset = useCallback(() => {
    if (!window.confirm('작성한 내용을 지우고 예시 문서로 되돌릴까요?')) return;
    setSource(SAMPLE_DOCUMENT);
    try {
      window.localStorage.removeItem(DRAFT_KEY);
    } catch {
      // Nothing stored to clear.
    }
    editorRef.current?.focus();
  }, []);

  // Ctrl/Cmd+S saves the markdown file — the same gesture the canvas uses.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 's') {
        event.preventDefault();
        handleDownloadMarkdown();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleDownloadMarkdown]);

  /**
   * Proportional scroll sync. `scrollOwnerRef` is the loop breaker: setting
   * scrollTop on the other pane fires its own scroll event, which would bounce
   * straight back and fight the pane the user is actually scrolling.
   */
  const syncScrollFrom = useCallback((owner: 'editor' | 'preview') => {
    if (!scrollSync) return;
    if (scrollOwnerRef.current && scrollOwnerRef.current !== owner) return;
    const from = owner === 'editor' ? editorRef.current : previewRef.current;
    const to = owner === 'editor' ? previewRef.current : editorRef.current;
    if (!from || !to) return;

    const fromRange = from.scrollHeight - from.clientHeight;
    const toRange = to.scrollHeight - to.clientHeight;
    if (fromRange <= 0 || toRange <= 0) return;

    scrollOwnerRef.current = owner;
    to.scrollTop = (from.scrollTop / fromRange) * toRange;
    window.requestAnimationFrame(() => { scrollOwnerRef.current = null; });
  }, [scrollSync]);

  const effectiveView: PaneView = isNarrow && view === 'split' ? 'edit' : view;
  const viewOptions: ReadonlyArray<{ value: PaneView; label: string; Icon: typeof PenLine }> = [
    { value: 'edit', label: '편집', Icon: PenLine },
    ...(isNarrow ? [] : [{ value: 'split' as const, label: '나란히', Icon: Columns2 }]),
    { value: 'preview', label: '미리보기', Icon: Eye },
  ];

  return (
    <div className={`mp-root${isDarkMode ? ' dark' : ''}`}>
      <header className="mp-header">
        <div className="mp-header-left">
          <a className="mp-home-link" href="/" title="Choi01 홈으로" aria-label="Choi01 홈으로">
            <ArrowLeft className="mp-icon" />
          </a>
          <span className="mp-brand">
            <span className="mp-brand-mark">01</span>
            마크다운 프리뷰
          </span>
          <span className="mp-badge" title="입력한 글은 이 브라우저 밖으로 나가지 않습니다">
            브라우저 안에서만 변환
          </span>
        </div>

        <div className="mp-header-right">
          <div className="mp-segmented" role="group" aria-label="화면 구성">
            {viewOptions.map(({ value, label, Icon }) => (
              <button
                key={value}
                type="button"
                className={`mp-segment${effectiveView === value ? ' is-active' : ''}`}
                onClick={() => setView(value)}
                aria-pressed={effectiveView === value}
                title={label}
              >
                <Icon className="mp-icon" />
                <span className="mp-segment-label">{label}</span>
              </button>
            ))}
          </div>

          <div className="mp-header-divider" />

          <button
            type="button"
            className={`mp-button mp-button-quiet${scrollSync ? ' is-on' : ''}`}
            onClick={() => setScrollSync(previous => !previous)}
            aria-pressed={scrollSync}
            title="편집 창과 미리보기 스크롤 동기화"
          >
            <ArrowDownUp className="mp-icon" />
            <span>스크롤 동기화</span>
          </button>
          <button type="button" className="mp-button mp-button-quiet" onClick={handleCopyHtml} title="변환된 HTML을 클립보드로 복사">
            {copied ? <Check className="mp-icon" /> : <Copy className="mp-icon" />}
            <span>{copied ? '복사됨' : 'HTML 복사'}</span>
          </button>
          <button type="button" className="mp-button mp-button-quiet" onClick={handleDownloadHtml} title="스타일이 포함된 단독 .html 파일로 내려받기">
            <FileCode className="mp-icon" />
            <span>HTML</span>
          </button>
          <button type="button" className="mp-button mp-button-primary" onClick={handleDownloadMarkdown} title="원본 .md 파일로 내려받기 (Ctrl+S)">
            <Download className="mp-icon" />
            <span>.md 저장</span>
          </button>

          <div className="mp-header-divider" />

          <button type="button" className="mp-button mp-button-quiet" onClick={handleReset} title="예시 문서로 되돌리기" aria-label="예시 문서로 되돌리기">
            <RotateCcw className="mp-icon" />
          </button>
          <button
            type="button"
            className="mp-button mp-button-quiet"
            onClick={() => setIsDarkMode(previous => !previous)}
            title="다크 / 라이트 모드 전환"
            aria-label="다크 / 라이트 모드 전환"
          >
            {isDarkMode ? <Sun className="mp-icon" /> : <Moon className="mp-icon" />}
          </button>
        </div>
      </header>

      <main className="mp-stage" data-view={effectiveView}>
        <section className="mp-pane mp-pane-editor" aria-label="마크다운 편집">
          <div className="mp-pane-head">
            <span>Markdown</span>
            <span className="mp-stats">
              {stats.characters.toLocaleString()}자 · {stats.words.toLocaleString()}단어 · {stats.lines.toLocaleString()}줄
            </span>
          </div>
          <textarea
            ref={editorRef}
            className="mp-editor"
            value={source}
            onChange={event => setSource(event.target.value)}
            onScroll={() => syncScrollFrom('editor')}
            spellCheck={false}
            placeholder="여기에 마크다운을 쓰거나 붙여넣으세요."
            aria-label="마크다운 원본"
          />
        </section>

        <section className="mp-pane mp-pane-preview" aria-label="미리보기">
          <div className="mp-pane-head">
            <span>Preview</span>
            {rendered.removed.length > 0 && (
              <span className="mp-removed" title={`제거됨: ${rendered.removed.join(', ')}`}>
                <ShieldAlert className="mp-icon" />
                위험한 항목 {rendered.removed.length}개 제거
              </span>
            )}
          </div>
          <div
            ref={previewRef}
            className="mp-preview"
            onScroll={() => syncScrollFrom('preview')}
            tabIndex={0}
            aria-label="변환 결과"
          >
            <div className="mp-markdown">
              {rendered.blocks.map(block => block.kind === 'html'
                ? (
                  // Safe by construction: renderMarkdown puts every string through DOMPurify.
                  <div key={block.key} className="mp-block" dangerouslySetInnerHTML={{ __html: block.html }} />
                )
                : <MermaidBlock key={block.key} block={block} result={diagrams.get(block.key)} />)}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
