import React from 'react';
import {
  MousePointer, Hand, StickyNote, RectangleHorizontal, Circle, Triangle, Diamond, Hexagon, Star,
  Frame, Type, GitCommit, PenTool, Eraser,
  Highlighter, Minus,
  Undo2, Redo2, Group, Ungroup,
  FileCode, GripHorizontal,
} from 'lucide-react';
import { CANVAS_COLORS, type InfiniteCanvasHandle, type CanvasTool, type CanvasColorKey, type CanvasSelectionInfo } from 'chois-canvas/react';
import { useToolbarPosition } from './useToolbarPosition';
export type CanvasStrokeWidth = 2 | 4 | 6 | 8;
export type GuestCanvasTool = CanvasTool | 'highlighter';
const STICKY_COLORS: CanvasColorKey[] = ['yellow', 'pink', 'purple', 'blue', 'green', 'peach'];
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


interface Props {
 readonly canvasRef: React.RefObject<InfiniteCanvasHandle | null>;
 readonly activeTool: GuestCanvasTool;
 readonly setActiveTool: (tool: GuestCanvasTool) => void;
 readonly drawStrokeWidth: CanvasStrokeWidth;
 readonly setDrawStrokeWidth: (width: CanvasStrokeWidth) => void;
 readonly selection: CanvasSelectionInfo;
 readonly menu: string | null;
 readonly setMenu: (menu: string | null) => void;
 readonly onDiagram: () => void;
}
export function GuestCanvasToolbar({canvasRef, activeTool, setActiveTool, drawStrokeWidth, setDrawStrokeWidth, selection, menu, setMenu, onDiagram}: Props) {
 const position = useToolbarPosition(menu);
 const showStickyPalette = menu === 'sticky';
 const showShapesMenu = menu === 'shapes';
 const showStrokeWidths = menu === 'width';
 const toolButtonClass = (tool: GuestCanvasTool, danger = false) =>
    'gc-tool' + (activeTool === tool ? (danger ? ' is-active-danger' : ' is-active') : '');
 return (
        <div
          className="gc-toolbar"
          ref={position.ref}
          style={position.style}
          role="toolbar"
          aria-label="캔버스 도구"
          draggable={false}
          onDragStart={event => event.preventDefault()}
        >
          <button type="button" className="gc-tool gc-toolbar-grip" aria-label="도구 모음 이동" title="드래그 또는 방향키로 이동 · Shift: 크게 이동 · Home: 원래 위치" {...position.gripProps}><GripHorizontal className="gc-icon" /></button>
          <button type="button" onClick={() => setActiveTool('select')} className={toolButtonClass('select')} title="선택 / 이동 (V) · Space 또는 Alt+드래그로 화면 이동" aria-label="선택 / 이동">
            <MousePointer className="gc-icon" />
          </button>
          <button type="button" onClick={() => setActiveTool('hand')} className={toolButtonClass('hand')} title="손 도구 / 화면 이동 (H)">
            <Hand className="gc-icon" />
          </button>
          <button type="button" onClick={() => onDiagram()} className="gc-tool gc-tool-diagram" title="Mermaid 다이어그램 만들기">
            <FileCode className="gc-icon" />
          </button>

          <div className="gc-popover-anchor">
            <button
              type="button"
              onClick={() => { setMenu(showStickyPalette ? null : 'sticky'); }}
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
                      setActiveTool('select');
                      canvasRef.current?.addNote(key);
                      setMenu(null);
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
              onClick={() => { setMenu(showShapesMenu ? null : 'shapes'); }}
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
                      onClick={() => { setActiveTool(t); setMenu(null); }}
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
              onClick={() => { setMenu(showStrokeWidths ? null : 'width'); }}
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
                      canvasRef.current?.setSelectedStrokeWidth(width);
                      setMenu(null);
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
          <button type="button" onClick={() => setActiveTool('eraser')} className={toolButtonClass('eraser', true)} title="지우개 — 손글씨는 닿은 구간만, 도형은 전체 삭제">
            <Eraser className="gc-icon" />
          </button>

          <div className="gc-toolbar-divider" />

          <button type="button" onClick={() => canvasRef.current?.undo()} className="gc-tool" title="실행 취소 (Ctrl/⌘+Z)">
            <Undo2 className="gc-icon" />
          </button>
          <button type="button" onClick={() => canvasRef.current?.redo()} className="gc-tool" title="다시 실행 (Ctrl/⌘+Shift+Z 또는 Ctrl/⌘+Y)">
            <Redo2 className="gc-icon" />
          </button>
          <button type="button" onClick={() => canvasRef.current?.group()} disabled={!selection.canGroup} className="gc-tool" title="그룹 (Ctrl+G) — 2개 이상 선택 필요">
            <Group className="gc-icon" />
          </button>
          <button type="button" onClick={() => canvasRef.current?.ungroup()} disabled={!selection.canUngroup} className="gc-tool" title="그룹 해제 (Ctrl+Shift+G)">
            <Ungroup className="gc-icon" />
          </button>
        </div>

 );
}
