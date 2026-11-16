import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  GripHorizontal,
  ZoomIn, ZoomOut, Maximize2, Locate, Sparkles,
  Sun, Moon, Download, FolderOpen, ArrowLeft, Image as ImageIcon, FileCode,
  Layers, ChevronDown, Save, CircleHelp, Search,
} from 'lucide-react';
import {
  InfiniteCanvas,
  type InfiniteCanvasHandle, type CanvasSelectionInfo, type CanvasShape,
} from 'chois-canvas/react';
import { parseCanvasSnapshot } from 'chois-canvas/core';
import { PenDebugOverlay } from './PenDebugOverlay';
import { isPenDebugEnabled } from './penDebug';
import { DiagramComposer } from './diagram/DiagramComposer';
import { DiagramSourceDrawer } from './diagram/DiagramSourceDrawer';
import { MermaidDiagram } from './diagram/MermaidDiagram';
import { AuthControls } from './canvas/AuthControls';
import { createCloudflareBoardClient } from './canvas/cloudflareBoardClient';
import { useBoardPersistence, type BoardPersistence } from './canvas/useBoardPersistence';
import { useCanvasAuth } from './canvas/useCanvasAuth';
import { useToolbarPosition } from './useToolbarPosition';
import { GuestCanvasToolbar, type CanvasStrokeWidth, type GuestCanvasTool } from './GuestCanvasToolbar';

type StrokeCanvasProps = Omit<React.ComponentProps<typeof InfiniteCanvas>, 'tool' | 'onToolChange'> & {
  readonly tool: GuestCanvasTool;
  readonly drawStrokeWidth: CanvasStrokeWidth;
  readonly onToolChange: (tool: GuestCanvasTool) => void;
};

function withStrokeStyleProps(Component: React.ElementType) {
  return React.forwardRef<InfiniteCanvasHandle, StrokeCanvasProps>((props, ref) => (
    React.createElement(Component, { ...props, ref })
  ));
}

const StrokeCanvas = withStrokeStyleProps(InfiniteCanvas);

const ZOOM_PRESETS = [25, 50, 75, 100, 150, 200, 400];

type ChromeMenu = 'frames' | 'export';

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function exportStamp(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`;
}

/** Save-state badge text for the signed-in board (guests see the ephemeral badge instead). */
function saveStatusLabel(persistence: BoardPersistence): { text: string; tone: 'ok' | 'busy' | 'warn' } {
  const time = persistence.savedAt
    ? persistence.savedAt.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    : null;
  switch (persistence.status) {
    case 'loading': return { text: '불러오는 중…', tone: 'busy' };
    case 'saving': return { text: '저장 중…', tone: 'busy' };
    case 'dirty': return { text: '변경됨 · 곧 저장', tone: 'busy' };
    case 'conflict': return { text: '다른 기기에서 저장됨', tone: 'warn' };
    case 'error': return { text: '저장 실패 · 다시 시도합니다', tone: 'warn' };
    case 'saved': return { text: time ? `저장됨 · ${time}` : '저장됨', tone: 'ok' };
    default: return { text: '', tone: 'ok' };
  }
}

/**
 * Guest memo board: a deliberately ephemeral canvas.
 *
 * Nothing is persisted anywhere — no server, no localStorage. The only way to
 * keep work is the explicit "파일로 저장" JSON download, and the only way to
 * get it back is uploading that file through "파일 열기". Uploads pass through
 * `parseCanvasSnapshot`, the package's required boundary for external
 * snapshots, so a corrupted or foreign file fails with a clear message
 * instead of half-loading.
 */
export const GuestCanvasPage: React.FC = () => {
  const canvasRef = useRef<InfiniteCanvasHandle>(null);
  const importInputRef = useRef<HTMLInputElement>(null);

  const [activeTool, setActiveTool] = useState<GuestCanvasTool>('select');
  const [drawStrokeWidth, setDrawStrokeWidth] = useState<CanvasStrokeWidth>(4);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showNotice, setShowNotice] = useState(true);
  const [toolMenu, setToolMenu] = useState<string | null>(null);
  const [chromeMenu, setChromeMenu] = useState<ChromeMenu | null>(null);
  const [showHelp, setShowHelp] = useState(false);
  const [frames, setFrames] = useState<readonly { id: string; name: string }[]>([]);
  const chromeToolbarPosition = useToolbarPosition(null);
  const [showDiagramComposer, setShowDiagramComposer] = useState(false);
  const [openDiagramId, setOpenDiagramId] = useState<string | null>(null);

  const refreshFrames = useCallback(() => {
    setFrames(canvasRef.current?.listFrames() ?? []);
  }, []);

  const chooseTool = useCallback((tool: GuestCanvasTool) => {
    setActiveTool(tool);
    setToolMenu(null);
  }, []);

  const setToolMenuFromToolbar = useCallback((menu: string | null) => {
    setToolMenu(menu);
    if (menu) setChromeMenu(null);
  }, []);

  const toggleChromeMenu = useCallback((menu: ChromeMenu) => {
    setToolMenu(null);
    setChromeMenu(prev => (prev === menu ? null : menu));
    if (menu === 'frames') refreshFrames();
  }, [refreshFrames]);

  // Signed-in visitors get a server-backed board; everyone else keeps the
  // ephemeral guest canvas described above. Without the /api functions (plain
  // `vite dev`) the auth hook reports "not configured" and login stays hidden.
  const auth = useCanvasAuth();
  const boardClient = useMemo(() => (auth.configured ? createCloudflareBoardClient() : null), [auth.configured]);
  const confirmReplace = useCallback((message: string) => window.confirm(message), []);
  const persistence = useBoardPersistence({ client: boardClient, userId: auth.user?.id ?? null, canvasRef, confirmReplace });
  const isPersisted = persistence.status !== 'off';
  const { markDirty: markBoardDirty } = persistence;

  const markDirty = useCallback(() => {
    setHasUnsavedChanges(true);
    markBoardDirty();
    // Frame count/names change through edits (draw, rename, delete, undo).
    refreshFrames();
  }, [markBoardDirty, refreshFrames]);

  // Pick up the initial frame list once the canvas handle mounts.
  useEffect(() => { refreshFrames(); }, [refreshFrames]);

  // Close the top-right dropdowns, the tool flyouts, or the help card on
  // outside click or Escape.
  useEffect(() => {
    if (!chromeMenu && !toolMenu && !showHelp) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      if (!event.target.closest('.gc-chrome-right')) setChromeMenu(null);
      if (!event.target.closest('.gc-toolbar')) setToolMenu(null);
      if (!event.target.closest('.gc-help')) setShowHelp(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setChromeMenu(null);
      setToolMenu(null);
      setShowHelp(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [chromeMenu, toolMenu, showHelp]);

  const handleSelectionChange = useCallback((info: CanvasSelectionInfo) => {
    const selectedId = info.selectedIds.length === 1 ? info.selectedIds[0] : null;
    const shape = selectedId ? canvasRef.current?.getSnapshot().shapes.find(candidate => candidate.id === selectedId) : undefined;
    setOpenDiagramId(shape?.type === 'card' && shape.category?.toLowerCase() === 'diagram' ? shape.id : null);
  }, []);

  // The vendored canvas opens its find bar only through the Ctrl/⌘+F
  // keybinding (viewActions.openFind); the imperative handle does not expose
  // it. Dispatch the same physical-key event on the canvas container so this
  // button and the keyboard path stay identical.
  const openFind = useCallback(() => {
    document.querySelector('[data-canvas-board-id]')?.dispatchEvent(
      new KeyboardEvent('keydown', { code: 'KeyF', key: 'f', ctrlKey: true, bubbles: true, cancelable: true }),
    );
  }, []);

  const handleCreateDiagram = useCallback((source: string) => {
    canvasRef.current?.addCard(source, 'diagram', 'solid', 'blue');
    setShowNotice(false);
  }, []);

  const handleDiagramSourceChange = useCallback((source: string) => {
    if (openDiagramId) canvasRef.current?.updateShapeText(openDiagramId, source);
  }, [openDiagramId]);

  const renderDiagram = useCallback((shape: CanvasShape) => (
    <MermaidDiagram source={shape.text ?? ''} diagramId={shape.id} />
  ), []);

  const handleSaveToFile = useCallback(() => {
    const handle = canvasRef.current;
    if (!handle) return;
    const snapshot = handle.getSnapshot();
    if (snapshot.shapes.length === 0) {
      window.alert('내보낼 내용이 없습니다. 캔버스에 메모를 남긴 뒤 저장해 주세요.');
      return;
    }
    downloadBlob(
      new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' }),
      `choi01-canvas-${exportStamp()}.json`,
    );
    setHasUnsavedChanges(false);
  }, []);

  const handleOpenFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try {
      const parsed = parseCanvasSnapshot(JSON.parse(await file.text()));
      const current = canvasRef.current?.getSnapshot();
      if (
        current && current.shapes.length > 0 &&
        !window.confirm('현재 캔버스 내용이 불러온 파일로 교체됩니다. 계속할까요?')
      ) {
        return;
      }
      canvasRef.current?.loadSnapshot(parsed);
      setHasUnsavedChanges(false);
      setShowNotice(false);
      refreshFrames();
    } catch (err) {
      window.alert(`파일을 불러오지 못했습니다.\n${err instanceof Error ? err.message : String(err)}`);
    }
  };

  const safeName = () => `choi01-canvas-${exportStamp()}`;

  const handleExportSvg = () => {
    const svg = canvasRef.current?.exportSvg();
    if (!svg) {
      window.alert('내보낼 내용이 없습니다.');
      return;
    }
    downloadBlob(new Blob([svg], { type: 'image/svg+xml' }), `${safeName()}.svg`);
  };

  const handleExportPng = async () => {
    const blob = await canvasRef.current?.exportPng();
    if (!blob) {
      window.alert('PNG 변환에 실패했습니다. SVG로 내보내주세요.');
      return;
    }
    downloadBlob(blob, `${safeName()}.png`);
  };

  // Ctrl/Cmd+S downloads the JSON file — the closest thing this page has to
  // "save". Ctrl/Cmd+O opens the file picker for a previous download.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!(e.metaKey || e.ctrlKey)) return;
      const key = e.key.toLowerCase();
      if (key === 's') {
        e.preventDefault();
        handleSaveToFile();
      } else if (key === 'o') {
        e.preventDefault();
        importInputRef.current?.click();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleSaveToFile]);

  // Leaving the page destroys a guest board — warn while there is unexported
  // work. A signed-in board only warns while a save is still pending.
  const pendingSave = isPersisted
    ? persistence.status === 'dirty' || persistence.status === 'saving' || persistence.status === 'error' || persistence.status === 'conflict'
    : hasUnsavedChanges;
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (pendingSave) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [pendingSave]);

  const saveStatus = isPersisted ? saveStatusLabel(persistence) : null;

  return (
    <div className={`gc-root${isDarkMode ? ' dark' : ''}`}>
      {auth.notice && <div className="gc-auth-notice" role="alert">{auth.notice}</div>}

      <div className="gc-stage">
        {isPenDebugEnabled(window.location.search) && <PenDebugOverlay />}
        <StrokeCanvas
          ref={canvasRef}
          boardIdentity="guest"
          isDarkMode={isDarkMode}
          tool={activeTool}
          drawStrokeWidth={drawStrokeWidth}
          onToolChange={chooseTool}
          onDirty={markDirty}
          onZoomChange={setZoom}
          onSelectionChange={handleSelectionChange}
          renderDiagram={renderDiagram}
        />

        {/* Floating chrome: board identity (top-left) */}
        <div className="gc-chrome gc-chrome-left">
          <a className="gc-home-link" href="/" title="Choi01 Lab 홈으로">
            <ArrowLeft className="gc-icon" />
          </a>
          <a className="gc-brand" href="/" title="Choi01 Lab 홈으로">
            <span className="gc-brand-mark">01</span>
            <span className="gc-brand-label">캔버스 메모보드</span>
          </a>
          {!isPersisted && (
            <span className="gc-ephemeral-badge" title="이 페이지는 서버에 아무것도 저장하지 않습니다">
              저장되지 않음 · 파일로 보관
            </span>
          )}
          {saveStatus?.text ? (
            <span className={`gc-save-status is-${saveStatus.tone}`} role="status">{saveStatus.text}</span>
          ) : null}
        </div>

        {/* Floating chrome: board actions (top-right) */}
        <div
          className="gc-chrome gc-chrome-right"
          ref={chromeToolbarPosition.ref}
          style={chromeToolbarPosition.style}
        >
          <button type="button" className="gc-button gc-chrome-grip" aria-label="상단 도구 모음 이동" title="드래그 또는 방향키로 상단 도구 모음 이동 · Home: 원래 위치" {...chromeToolbarPosition.gripProps}>
            <GripHorizontal className="gc-icon" />
          </button>
          <AuthControls auth={auth} persistence={persistence} />
          {auth.configured && !auth.loading && <div className="gc-chrome-divider" />}
          <button
            type="button"
            className="gc-button gc-button-quiet"
            onClick={openFind}
            title="캔버스에서 찾기 (Ctrl/⌘+F)"
            aria-label="찾기"
          >
            <Search className="gc-icon" />
          </button>
          <div className="gc-popover-anchor">
            <button
              type="button"
              className="gc-button"
              aria-haspopup="menu"
              aria-expanded={chromeMenu === 'frames'}
              onClick={() => toggleChromeMenu('frames')}
              title="프레임 목록 — 누르면 해당 프레임으로 이동"
            >
              <Layers className="gc-icon" />
              <span>프레임</span>
              <span className="gc-frames-count" aria-hidden="true">{frames.length}</span>
            </button>
            {chromeMenu === 'frames' && (
              <div className="gc-menu" role="menu" aria-label="프레임 목록">
                {frames.length === 0 && <div className="gc-menu-empty">캔버스에 프레임이 없습니다</div>}
                {frames.map(frame => (
                  <button
                    key={frame.id}
                    type="button"
                    role="menuitem"
                    className="gc-menu-item"
                    onClick={() => {
                      canvasRef.current?.focusShape(frame.id);
                      setChromeMenu(null);
                    }}
                    title={frame.name ? `「${frame.name}」 프레임으로 이동` : '프레임으로 이동'}
                  >
                    {frame.name || '이름 없는 프레임'}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button type="button" className="gc-button" onClick={() => importInputRef.current?.click()} title="내려받았던 .json 작업 파일 불러오기 (Ctrl+O)">
            <FolderOpen className="gc-icon" />
            <span>파일 열기</span>
          </button>
          <input
            ref={importInputRef}
            type="file"
            accept=".json,application/json"
            onChange={handleOpenFile}
            className="gc-hidden-input"
          />
          <button type="button" className="gc-button gc-button-primary" onClick={handleSaveToFile} title="작업을 .json 파일로 컴퓨터에 내려받기 (Ctrl+S)">
            <Save className="gc-icon" />
            <span>파일로 저장</span>
          </button>
          <div className="gc-popover-anchor">
            <button
              type="button"
              className="gc-button gc-button-quiet"
              aria-haspopup="menu"
              aria-expanded={chromeMenu === 'export'}
              onClick={() => toggleChromeMenu('export')}
              title="이미지로 내보내기"
            >
              <Download className="gc-icon" />
              <span>내보내기</span>
              <ChevronDown className="gc-icon gc-icon-small" />
            </button>
            {chromeMenu === 'export' && (
              <div className="gc-menu" role="menu" aria-label="내보내기">
                <button type="button" role="menuitem" className="gc-menu-item" onClick={() => { void handleExportPng(); setChromeMenu(null); }}>
                  <ImageIcon className="gc-icon" /> PNG 이미지
                </button>
                <button type="button" role="menuitem" className="gc-menu-item" onClick={() => { handleExportSvg(); setChromeMenu(null); }}>
                  <FileCode className="gc-icon" /> SVG 벡터
                </button>
              </div>
            )}
          </div>
          <button
            type="button"
            className="gc-button gc-button-quiet"
            onClick={() => setIsDarkMode(prev => !prev)}
            title="다크 / 라이트 모드 전환"
          >
            {isDarkMode ? <Sun className="gc-icon" /> : <Moon className="gc-icon" />}
          </button>
          <div className="gc-help">
            <button
              type="button"
              className="gc-button gc-button-quiet"
              aria-expanded={showHelp}
              onClick={() => setShowHelp(prev => !prev)}
              title="단축키 안내"
              aria-label="단축키 안내"
            >
              <CircleHelp className="gc-icon" />
            </button>
            {showHelp && (
              <div className="gc-hint" role="note">
                더블클릭 편집 · Space/두 손가락 드래그로 이동 · Ctrl/⌘+F 찾기 · Ctrl/⌘+Z 되돌리기 · Ctrl/⌘+Shift+Z 다시 실행 · Ctrl+S 파일 저장
              </div>
            )}
          </div>
        </div>

        {/* Floating toolbar */}
        <GuestCanvasToolbar
          canvasRef={canvasRef}
          activeTool={activeTool}
          setActiveTool={chooseTool}
          drawStrokeWidth={drawStrokeWidth}
          setDrawStrokeWidth={setDrawStrokeWidth}
          menu={toolMenu}
          setMenu={setToolMenuFromToolbar}
          onDiagram={() => setShowDiagramComposer(true)}
        />

        {/* Zoom controls (minimap sits directly above, inside the canvas) */}
        <div className="gc-zoombar">
          <button type="button" onClick={() => canvasRef.current?.zoomBy(1 / 1.2)} className="gc-tool" title="축소 (Ctrl + 휠 아래)">
            <ZoomOut className="gc-icon" />
          </button>
          <select
            value={ZOOM_PRESETS.includes(Math.round(zoom * 100)) ? Math.round(zoom * 100) : 'custom'}
            onChange={e => {
              const v = e.target.value;
              if (v === 'fit') canvasRef.current?.zoomToFit();
              else if (v !== 'custom') canvasRef.current?.zoomTo(Number(v) / 100);
            }}
            className="gc-zoom-select"
            title="확대 비율"
            aria-label="확대 비율"
          >
            {!ZOOM_PRESETS.includes(Math.round(zoom * 100)) && (
              <option value="custom">{Math.round(zoom * 100)}%</option>
            )}
            {ZOOM_PRESETS.map(p => <option key={p} value={p}>{p}%</option>)}
            <option value="fit">전체 보기</option>
          </select>
          <button type="button" onClick={() => canvasRef.current?.zoomBy(1.2)} className="gc-tool" title="확대 (Ctrl + 휠 위)">
            <ZoomIn className="gc-icon" />
          </button>
          <div className="gc-toolbar-divider gc-toolbar-divider-v" />
          <button type="button" onClick={() => canvasRef.current?.zoomToFit()} className="gc-tool" title="전체 보기 — 모든 개체가 보이게 맞춤">
            <Maximize2 className="gc-icon" />
          </button>
          <button type="button" onClick={() => canvasRef.current?.resetZoom()} className="gc-tool" title="100%로 되돌리기">
            <Locate className="gc-icon" />
          </button>
          <button type="button" onClick={() => canvasRef.current?.autoLayout()} className="gc-tool" title="자동 배치 — 화살표로 연결된 노드를 정렬">
            <Sparkles className="gc-icon" />
          </button>
        </div>


        {openDiagramId && (() => {
          const shape = canvasRef.current?.getSnapshot().shapes.find(candidate => candidate.id === openDiagramId);
          return shape?.type === 'card' ? <DiagramSourceDrawer source={shape.text ?? ''} onChange={handleDiagramSourceChange} onClose={() => setOpenDiagramId(null)} /> : null;
        })()}

        <DiagramComposer open={showDiagramComposer} onClose={() => setShowDiagramComposer(false)} onCreate={handleCreateDiagram} />

        {persistence.status === 'conflict' && (
          <div className="gc-notice" role="alertdialog" aria-labelledby="gc-conflict-title">
            <div className="gc-notice-title" id="gc-conflict-title">다른 기기에서 저장된 내용이 있습니다</div>
            <p className="gc-notice-body">
              지금 화면의 변경은 아직 저장되지 않았습니다. 다른 기기의 내용을 불러올지,
              지금 화면의 내용으로 덮어쓸지 골라 주세요. 어느 쪽도 자동으로 덮어쓰지 않습니다.
            </p>
            <div className="gc-notice-actions">
              <button type="button" className="gc-button gc-button-primary" onClick={() => void persistence.resolveConflict('reload')}>다른 기기 내용 불러오기</button>
              <button type="button" className="gc-button" onClick={() => void persistence.resolveConflict('overwrite')}>내 것으로 덮어쓰기</button>
            </div>
          </div>
        )}

        {showNotice && !isPersisted && (
          <div className="gc-notice" role="status">
            <div className="gc-notice-title">이 캔버스는 저장되지 않습니다</div>
            <p className="gc-notice-body">
              온라인 메모장처럼 자유롭게 쓰고 가세요. 페이지를 닫거나 새로고침하면
              작업이 사라집니다. 보관하고 싶다면 <strong>파일로 저장</strong>을 눌러
              JSON 파일을 내려받고, 다음에 <strong>파일 열기</strong>로 다시 불러오면
              작업이 그대로 복원됩니다.
            </p>
            <p className="gc-notice-body gc-notice-body-en">
              Nothing is stored on a server. Download your board as a JSON file to
              keep it, and upload the same file later to continue.
            </p>
            <div className="gc-notice-actions">
              <button type="button" className="gc-button gc-button-primary" onClick={() => setShowNotice(false)}>
                알겠어요
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
