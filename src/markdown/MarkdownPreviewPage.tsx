import {
  useCallback, useEffect, useMemo, useRef, useState,
  type CSSProperties, type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import {
  ArrowLeft, PenLine, Columns2, Eye,
  Copy, Check, Download, FileCode, RotateCcw,
  ArrowDownUp, ArrowLeftRight, ShieldAlert, Sun, Moon,
} from 'lucide-react';
import { renderMarkdown, type MarkdownBlock, type MarkdownRenderResult } from './renderMarkdown';
import { renderMermaid, type MermaidResult } from './renderMermaid';
import { buildHtmlDocument } from './exportHtmlDocument';

const DRAFT_KEY = 'choi01:markdown-preview:draft';
const RENDER_DEBOUNCE_MS = 300;
const NARROW_QUERY = '(max-width: 900px)';
const MIN_EDITOR_SIZE = 20;
const MAX_EDITOR_SIZE = 80;
const KEYBOARD_RESIZE_STEP = 5;

type PaneView = 'edit' | 'split' | 'preview';

const SAMPLE_DOCUMENT = [
  '# 마크다운 프리뷰 사용법',
  '',
  '편집창에 마크다운을 입력하면 미리보기창에서 결과를 바로 확인할 수 있습니다.',
  '작성한 내용은 서버로 전송되지 않고 이 브라우저에만 임시 저장됩니다.',
  '',
  '## 빠르게 시작하기',
  '',
  '1. 편집창에 내용을 쓰거나 기존 마크다운을 붙여넣으세요.',
  '2. 가운데 구분선을 드래그해 두 영역의 너비를 조절하세요.',
  '3. 상단 버튼으로 편집·나란히·미리보기 화면을 전환할 수 있습니다.',
  '4. 좌우 바꾸기 버튼을 누르면 편집창과 미리보기창의 위치가 바뀝니다.',
  '',
  '## 기본 문법',
  '',
  '- `# 제목`, `## 소제목`',
  '- `**굵게**`, `*기울임*`, `` `코드` ``',
  '- `[링크 이름](https://example.com)`',
  '- `- 항목` 또는 `1. 항목`으로 목록 만들기',
  '- `- [ ] 할 일`, `- [x] 완료한 일`',
  '',
  '### 예시 표',
  '',
  '| 문법 | 결과 |',
  '| --- | --- |',
  '| `**중요**` | **중요** |',
  '| `> 인용문` | 인용문 |',
  '',
  '### 코드 블록',
  '',
  '```js',
  'console.log("안녕하세요!");',
  '```',
  '',
  '### 다이어그램',
  '',
  '코드 블록의 언어를 `mermaid`로 지정하면 다이어그램도 그릴 수 있습니다.',
  '',
  '```mermaid',
  'flowchart LR',
  '    A[마크다운 입력] --> B[미리보기 확인]',
  '```',
  '',
  '---',
  '',
  '완성한 문서는 상단에서 `.md` 또는 HTML 파일로 저장할 수 있습니다.',
  '',
].join('\n');

const LEGACY_SAMPLE_SIGNATURES = [
  'title 예상 환급액 배분 (단위: EUR)',
  '"회사 귀속" : 25410',
  '"2023 보육료" : 1450',
] as const;

function isBundledLegacySample(source: string): boolean {
  return LEGACY_SAMPLE_SIGNATURES.every(signature => source.includes(signature));
}

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
    const draft = window.localStorage.getItem(DRAFT_KEY);
    if (draft && isBundledLegacySample(draft)) {
      window.localStorage.removeItem(DRAFT_KEY);
      return SAMPLE_DOCUMENT;
    }
    return draft ?? SAMPLE_DOCUMENT;
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

function clampEditorSize(value: number): number {
  return Math.min(MAX_EDITOR_SIZE, Math.max(MIN_EDITOR_SIZE, value));
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
  const [editorSize, setEditorSize] = useState(50);
  const [editorSide, setEditorSide] = useState<'left' | 'right'>('left');
  const [isResizing, setIsResizing] = useState(false);

  const stageRef = useRef<HTMLElement>(null);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const scrollOwnerRef = useRef<'editor' | 'preview' | null>(null);
  const hasUserEditedRef = useRef(false);

  // Render off the critical typing path: keystrokes stay cheap, the preview
  // catches up once the user pauses.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRendered(renderMarkdown(source));
      if (hasUserEditedRef.current) {
        try {
          window.localStorage.setItem(DRAFT_KEY, source);
        } catch {
          // Storage unavailable — the preview is the part that matters.
        }
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
    hasUserEditedRef.current = false;
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

  const resizeFromPointer = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isResizing) return;
    const stage = stageRef.current;
    if (!stage) return;
    const bounds = stage.getBoundingClientRect();
    if (bounds.width <= 0) return;
    const pointerPercent = ((event.clientX - bounds.left) / bounds.width) * 100;
    const percent = editorSide === 'left' ? pointerPercent : 100 - pointerPercent;
    setEditorSize(clampEditorSize(percent));
  }, [editorSide, isResizing]);

  const handleResizeKeyDown = useCallback((event: ReactKeyboardEvent<HTMLDivElement>) => {
    const direction = editorSide === 'left' ? 1 : -1;
    const sizeByKey: Partial<Record<string, (current: number) => number>> = {
      ArrowLeft: current => current - (KEYBOARD_RESIZE_STEP * direction),
      ArrowRight: current => current + (KEYBOARD_RESIZE_STEP * direction),
      Home: () => editorSide === 'left' ? MIN_EDITOR_SIZE : MAX_EDITOR_SIZE,
      End: () => editorSide === 'left' ? MAX_EDITOR_SIZE : MIN_EDITOR_SIZE,
    };
    const resize = sizeByKey[event.key];
    if (!resize) return;
    event.preventDefault();
    setEditorSize(current => clampEditorSize(resize(current)));
  }, [editorSide]);

  const editorPane = (
    <section key="editor" id="mp-editor-pane" className="mp-pane mp-pane-editor" aria-label="마크다운 편집">
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
        onChange={event => {
          hasUserEditedRef.current = true;
          setSource(event.target.value);
        }}
        onScroll={() => syncScrollFrom('editor')}
        spellCheck={false}
        placeholder="여기에 마크다운을 쓰거나 붙여넣으세요."
        aria-label="마크다운 원본"
      />
    </section>
  );

  const resizeHandle = (
    <div
      key="resizer"
      className="mp-resizer"
      role="separator"
      tabIndex={0}
      aria-label="편집 영역 너비 조절"
      aria-controls="mp-editor-pane mp-preview-pane"
      aria-orientation="vertical"
      aria-valuemin={MIN_EDITOR_SIZE}
      aria-valuemax={MAX_EDITOR_SIZE}
      aria-valuenow={Math.round(editorSize)}
      aria-valuetext={`편집 영역 ${Math.round(editorSize)}%`}
      onKeyDown={handleResizeKeyDown}
      onPointerDown={event => {
        event.currentTarget.setPointerCapture?.(event.pointerId);
        setIsResizing(true);
      }}
      onPointerMove={resizeFromPointer}
      onPointerUp={event => {
        if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
          event.currentTarget.releasePointerCapture(event.pointerId);
        }
        setIsResizing(false);
      }}
      onPointerCancel={() => setIsResizing(false)}
    >
      <span className="mp-resizer-line" aria-hidden="true" />
    </div>
  );

  const previewPane = (
    <section key="preview" id="mp-preview-pane" className="mp-pane mp-pane-preview" aria-label="미리보기">
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
  );

  return (
    <div className={`mp-root${isDarkMode ? ' dark' : ''}${isResizing ? ' is-resizing' : ''}`}>
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

          {!isNarrow && (
            <button
              type="button"
              className="mp-button mp-button-quiet"
              onClick={() => setEditorSide(current => current === 'left' ? 'right' : 'left')}
              disabled={effectiveView !== 'split'}
              title="편집기와 미리보기 위치 바꾸기"
              aria-label="편집기와 미리보기 좌우 바꾸기"
            >
              <ArrowLeftRight className="mp-icon" />
              <span>좌우 바꾸기</span>
            </button>
          )}

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

      <main
        ref={stageRef}
        className="mp-stage"
        data-view={effectiveView}
        data-editor-side={editorSide}
        style={{ '--mp-editor-size': `${editorSize}%` } as CSSProperties}
      >
        {editorSide === 'left'
          ? [editorPane, resizeHandle, previewPane]
          : [previewPane, resizeHandle, editorPane]}
      </main>
    </div>
  );
}
