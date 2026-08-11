import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  MousePointer, Hand, StickyNote, RectangleHorizontal, Circle, Triangle, Diamond, Hexagon, Star,
  Frame, Type, GitCommit, PenTool, Eraser,
  Highlighter, Minus,
  Undo2, Redo2, Copy, Trash2, Group, Ungroup,
  ZoomIn, ZoomOut, Maximize2, Locate, Sparkles,
  Sun, Moon, Download, FolderOpen, ArrowLeft, Image as ImageIcon, FileCode,
} from 'lucide-react';
import {
  InfiniteCanvas, CANVAS_COLORS,
  type InfiniteCanvasHandle, type CanvasTool, type CanvasColorKey, type CanvasSelectionInfo, type CanvasShape,
} from 'chois-canvas/react';
import { parseCanvasSnapshot } from 'chois-canvas/core';
import { DiagramComposer } from './diagram/DiagramComposer';
import { DiagramSourceDrawer } from './diagram/DiagramSourceDrawer';
import { MermaidDiagram } from './diagram/MermaidDiagram';

type CanvasStrokeWidth = 2 | 4 | 6 | 8;
type GuestCanvasTool = CanvasTool | 'highlighter';
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

const STICKY_COLORS: CanvasColorKey[] = ['yellow', 'pink', 'purple', 'blue', 'green', 'peach'];
const ZOOM_PRESETS = [25, 50, 75, 100, 150, 200, 400];
const DRAW_STROKE_WIDTHS = [2, 4, 6, 8] as const satisfies readonly CanvasStrokeWidth[];

const SHAPE_MENU_TOOLS = ['rect', 'ellipse', 'triangle', 'diamond', 'hexagon', 'star'] as const;
const SHAPE_ICON: Record<(typeof SHAPE_MENU_TOOLS)[number], typeof RectangleHorizontal> = {
  rect: RectangleHorizontal,
  ellipse: Circle,
  triangle: Triangle,
  diamond: Diamond,
  hexagon: Hexagon,
  star: Star,
};
const SHAPE_LABEL: Record<(typeof SHAPE_MENU_TOOLS)[number], string> = {
  rect: '사각형',
  ellipse: '원 / 타원',
  triangle: '삼각형',
  diamond: '마름모',
  hexagon: '육각형',
  star: '별',
};

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
  const [selection, setSelection] = useState<CanvasSelectionInfo>({
    count: 0, canGroup: false, canUngroup: false, isTextual: false, selectedIds: [],
  });
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showNotice, setShowNotice] = useState(true);
  const [showStickyPalette, setShowStickyPalette] = useState(false);
  const [showShapesMenu, setShowShapesMenu] = useState(false);
  const [showStrokeWidths, setShowStrokeWidths] = useState(false);
  const [showDiagramComposer, setShowDiagramComposer] = useState(false);
  const [openDiagramId, setOpenDiagramId] = useState<string | null>(null);

  const markDirty = useCallback(() => setHasUnsavedChanges(true), []);

  const handleSelectionChange = useCallback((info: CanvasSelectionInfo) => {
    setSelection(info);
    const selectedId = info.selectedIds.length === 1 ? info.selectedIds[0] : null;
    const shape = selectedId ? canvasRef.current?.getSnapshot().shapes.find(candidate => candidate.id === selectedId) : undefined;
    setOpenDiagramId(shape?.type === 'card' && shape.category?.toLowerCase() === 'diagram' ? shape.id : null);
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

  // Leaving the page destroys the board — warn while there is unexported work.
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const toolButtonClass = (tool: GuestCanvasTool, danger = false) =>
    `gc-tool${activeTool === tool ? (danger ? ' is-active-danger' : ' is-active') : ''}`;

  return (
    <div className={`gc-root${isDarkMode ? ' dark' : ''}`}>
      <header className="gc-header">
        <div className="gc-header-left">
          <a className="gc-home-link" href="/" title="Choi01 Lab 홈으로">
            <ArrowLeft className="gc-icon" />
          </a>
          <span className="gc-brand">
            <span className="gc-brand-mark">01</span>
            캔버스 메모보드
          </span>
          <span className="gc-ephemeral-badge" title="이 페이지는 서버에 아무것도 저장하지 않습니다">
            저장되지 않음 · 파일로 보관
          </span>
        </div>

        <div className="gc-header-right">
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
            <Download className="gc-icon" />
            <span>파일로 저장</span>
          </button>
          <div className="gc-header-divider" />
          <button type="button" className="gc-button gc-button-quiet" onClick={handleExportPng} title="PNG 이미지로 내보내기">
            <ImageIcon className="gc-icon" />
            <span>PNG</span>
          </button>
          <button type="button" className="gc-button gc-button-quiet" onClick={handleExportSvg} title="SVG 벡터로 내보내기">
            <FileCode className="gc-icon" />
            <span>SVG</span>
          </button>
          <button
            type="button"
            className="gc-button gc-button-quiet"
            onClick={() => setIsDarkMode(prev => !prev)}
            title="다크 / 라이트 모드 전환"
          >
            {isDarkMode ? <Sun className="gc-icon" /> : <Moon className="gc-icon" />}
          </button>
        </div>
      </header>

      <div className="gc-stage">
        <StrokeCanvas
          ref={canvasRef}
          boardIdentity="guest"
          isDarkMode={isDarkMode}
          tool={activeTool}
          drawStrokeWidth={drawStrokeWidth}
          onToolChange={setActiveTool}
          onDirty={markDirty}
          onZoomChange={setZoom}
          onSelectionChange={handleSelectionChange}
          renderDiagram={renderDiagram}
        />

        {/* Floating toolbar */}
        <div className="gc-toolbar">
          <button type="button" onClick={() => setActiveTool('select')} className={toolButtonClass('select')} title="선택 / 이동 (V) · Space 또는 Alt+드래그로 화면 이동" aria-label="선택 / 이동">
            <MousePointer className="gc-icon" />
          </button>
          <button type="button" onClick={() => setActiveTool('hand')} className={toolButtonClass('hand')} title="손 도구 / 화면 이동 (H)">
            <Hand className="gc-icon" />
          </button>
          <button type="button" onClick={() => setShowDiagramComposer(true)} className="gc-tool gc-tool-diagram" title="Mermaid 다이어그램 만들기">
            <FileCode className="gc-icon" />
          </button>

          <div className="gc-popover-anchor">
            <button
              type="button"
              onClick={() => { setShowStickyPalette(prev => !prev); setShowShapesMenu(false); setShowStrokeWidths(false); }}
              className={`gc-tool gc-tool-sticky${showStickyPalette || activeTool === 'note' ? ' is-active-sticky' : ''}`}
              title="스티커 메모지 추가"
            >
              <StickyNote className="gc-icon" />
            </button>
            {showStickyPalette && (
              <div className="gc-popover gc-sticky-palette">
                {STICKY_COLORS.map(key => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      canvasRef.current?.addNote(key);
                      setShowStickyPalette(false);
                    }}
                    style={{ backgroundColor: CANVAS_COLORS[key].bg, borderColor: CANVAS_COLORS[key].border }}
                    className="gc-sticky-swatch"
                    title={`${CANVAS_COLORS[key].label} 메모 추가`}
                  >
                    +
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="gc-popover-anchor">
            <button
              type="button"
              onClick={() => { setShowShapesMenu(prev => !prev); setShowStickyPalette(false); setShowStrokeWidths(false); }}
              className={toolButtonClass((SHAPE_MENU_TOOLS as readonly GuestCanvasTool[]).includes(activeTool) ? activeTool : 'rect')}
              title="도형 (사각형·원·삼각형·마름모·육각형·별)"
            >
              {(() => {
                const Icon = SHAPE_ICON[
                  (SHAPE_MENU_TOOLS as readonly GuestCanvasTool[]).includes(activeTool)
                    ? (activeTool as (typeof SHAPE_MENU_TOOLS)[number])
                    : 'rect'
                ];
                return <Icon className="gc-icon" />;
              })()}
            </button>
            {showShapesMenu && (
              <div className="gc-popover gc-shapes-menu">
                {SHAPE_MENU_TOOLS.map(t => {
                  const Icon = SHAPE_ICON[t];
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => { setActiveTool(t); setShowShapesMenu(false); }}
                      title={SHAPE_LABEL[t]}
                      className={`gc-tool${activeTool === t ? ' is-active' : ''}`}
                    >
                      <Icon className="gc-icon" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button type="button" onClick={() => setActiveTool('frame')} className={toolButtonClass('frame')} title="프레임 (F) — 드래그해서 그리기">
            <Frame className="gc-icon" />
          </button>
          <button type="button" onClick={() => setActiveTool('text')} className={toolButtonClass('text')} title="텍스트 (T) — 캔버스를 클릭하면 입력">
            <Type className="gc-icon" />
          </button>
          <button type="button" onClick={() => setActiveTool('arrow')} className={toolButtonClass('arrow')} title="연결선 / 화살표 (드래그해서 그리기)">
            <GitCommit className="gc-icon" />
          </button>
          <button type="button" onClick={() => setActiveTool('draw')} className={toolButtonClass('draw')} title="펜 (P)" aria-label="펜">
            <PenTool className="gc-icon" />
          </button>
          <button type="button" onClick={() => setActiveTool('highlighter')} className={toolButtonClass('highlighter')} title="하이라이터" aria-label="하이라이터">
            <Highlighter className="gc-icon" />
          </button>
          <div className="gc-popover-anchor">
            <button
              type="button"
              onClick={() => { setShowStrokeWidths(prev => !prev); setShowStickyPalette(false); setShowShapesMenu(false); }}
              className="gc-tool"
              title="선 굵기"
              aria-label="선 굵기"
            >
              <Minus className="gc-icon" />
            </button>
            {showStrokeWidths && (
              <div className="gc-popover gc-shapes-menu">
                {DRAW_STROKE_WIDTHS.map(width => (
                  <button
                    key={width}
                    type="button"
                    onClick={() => {
                      setDrawStrokeWidth(width);
                      setShowStrokeWidths(true);
                    }}
                    className={`gc-tool${drawStrokeWidth === width ? ' is-active' : ''}`}
                    title={`굵기 ${width}`}
                    aria-label={`굵기 ${width}`}
                  >
                    {width}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button type="button" onClick={() => setActiveTool('eraser')} className={toolButtonClass('eraser', true)} title="지우개 — 클릭한 개체 삭제">
            <Eraser className="gc-icon" />
          </button>

          <div className="gc-toolbar-divider" />

          <button type="button" onClick={() => canvasRef.current?.undo()} className="gc-tool" title="실행 취소 (Ctrl+Z)">
            <Undo2 className="gc-icon" />
          </button>
          <button type="button" onClick={() => canvasRef.current?.redo()} className="gc-tool" title="다시 실행 (Ctrl+Shift+Z)">
            <Redo2 className="gc-icon" />
          </button>
          <button type="button" onClick={() => canvasRef.current?.duplicateSelected()} disabled={selection.count === 0} className="gc-tool" title="선택 항목 복제">
            <Copy className="gc-icon" />
          </button>
          <button type="button" onClick={() => canvasRef.current?.deleteSelected()} disabled={selection.count === 0} className="gc-tool gc-tool-danger" title="선택 항목 삭제 (Delete)">
            <Trash2 className="gc-icon" />
          </button>

          <div className="gc-toolbar-divider" />

          <button type="button" onClick={() => canvasRef.current?.group()} disabled={!selection.canGroup} className="gc-tool" title="그룹 (Ctrl+G) — 2개 이상 선택 필요">
            <Group className="gc-icon" />
          </button>
          <button type="button" onClick={() => canvasRef.current?.ungroup()} disabled={!selection.canUngroup} className="gc-tool" title="그룹 해제 (Ctrl+Shift+G)">
            <Ungroup className="gc-icon" />
          </button>
        </div>

        {/* Zoom controls */}
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

        <div className="gc-hint">
          더블클릭 편집 · Space/두 손가락 드래그로 이동 · Ctrl+휠로 확대 · Ctrl+S 파일 저장
        </div>

        {openDiagramId && (() => {
          const shape = canvasRef.current?.getSnapshot().shapes.find(candidate => candidate.id === openDiagramId);
          return shape?.type === 'card' ? <DiagramSourceDrawer source={shape.text ?? ''} onChange={handleDiagramSourceChange} onClose={() => setOpenDiagramId(null)} /> : null;
        })()}

        <DiagramComposer open={showDiagramComposer} onClose={() => setShowDiagramComposer(false)} onCreate={handleCreateDiagram} />

        {showNotice && (
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
