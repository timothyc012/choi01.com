import React, { useEffect, useState } from 'react';
import {
  MousePointer, Hand, StickyNote, RectangleHorizontal, Circle, Triangle, Diamond, Hexagon, Star,
  Frame, Type, GitCommit, PenTool, Eraser,
  Highlighter,
  Undo2, Redo2,
  FileCode, GripHorizontal,
} from 'lucide-react';
import { CANVAS_COLORS, type InfiniteCanvasHandle, type CanvasTool, type CanvasColorKey } from 'chois-canvas/react';
import { useToolbarPosition } from './useToolbarPosition';
import { CanvasAttachmentButton } from './CanvasAttachmentButton';
export type CanvasStrokeWidth = 2 | 4 | 6 | 8;
export type GuestCanvasTool = CanvasTool | 'highlighter';
const STICKY_COLORS: CanvasColorKey[] = ['yellow', 'pink', 'purple', 'blue', 'green', 'peach'];
const DRAW_STROKE_WIDTHS = [2, 4, 6, 8] as const satisfies readonly CanvasStrokeWidth[];

const SELECT_MENU_TOOLS = ['select', 'hand'] as const;
const SELECT_ICON: Record<(typeof SELECT_MENU_TOOLS)[number], typeof MousePointer> = {
  select: MousePointer,
  hand: Hand,
};
const SELECT_LABEL: Record<(typeof SELECT_MENU_TOOLS)[number], string> = {
  select: '선택 / 이동',
  hand: '손 도구',
};
const SELECT_TITLE: Record<(typeof SELECT_MENU_TOOLS)[number], string> = {
  select: '선택 / 이동 (V) · Space 또는 Alt+드래그로 화면 이동',
  hand: '손 도구 / 화면 이동 (H)',
};

const PEN_MENU_TOOLS = ['draw', 'highlighter', 'eraser'] as const;
const PEN_ICON: Record<(typeof PEN_MENU_TOOLS)[number], typeof PenTool> = {
  draw: PenTool,
  highlighter: Highlighter,
  eraser: Eraser,
};
const PEN_LABEL: Record<(typeof PEN_MENU_TOOLS)[number], string> = {
  draw: '펜 도구',
  highlighter: '하이라이터',
  eraser: '지우개',
};
const PEN_TITLE: Record<(typeof PEN_MENU_TOOLS)[number], string> = {
  draw: '펜 (P)',
  highlighter: '하이라이터',
  eraser: '지우개 — 손글씨는 닿은 구간만, 도형은 전체 삭제',
};

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
 readonly menu: string | null;
 readonly setMenu: (menu: string | null) => void;
 readonly onDiagram: () => void;
}
export function GuestCanvasToolbar({canvasRef, activeTool, setActiveTool, drawStrokeWidth, setDrawStrokeWidth, menu, setMenu, onDiagram}: Props) {
 const position = useToolbarPosition(menu);
 const showSelectMenu = menu === 'select';
 const showStickyPalette = menu === 'sticky';
 const showShapesMenu = menu === 'shapes';
 const showPenMenu = menu === 'pen';
 // Each grouped rail button keeps the icon of the tool last used in its group,
 // even after the active tool moves to another group (e.g. via shortcut).
 const [selectGroupTool, setSelectGroupTool] = useState<(typeof SELECT_MENU_TOOLS)[number]>('select');
 const [penGroupTool, setPenGroupTool] = useState<(typeof PEN_MENU_TOOLS)[number]>('draw');
 const [shapeGroupTool, setShapeGroupTool] = useState<(typeof SHAPE_MENU_TOOLS)[number]>('rect');
 useEffect(() => {
   if ((SELECT_MENU_TOOLS as readonly GuestCanvasTool[]).includes(activeTool)) setSelectGroupTool(activeTool as (typeof SELECT_MENU_TOOLS)[number]);
   else if ((PEN_MENU_TOOLS as readonly GuestCanvasTool[]).includes(activeTool)) setPenGroupTool(activeTool as (typeof PEN_MENU_TOOLS)[number]);
   else if ((SHAPE_MENU_TOOLS as readonly GuestCanvasTool[]).includes(activeTool)) setShapeGroupTool(activeTool as (typeof SHAPE_MENU_TOOLS)[number]);
 }, [activeTool]);
 const selectGroupActive = (SELECT_MENU_TOOLS as readonly GuestCanvasTool[]).includes(activeTool);
 const penGroupActive = (PEN_MENU_TOOLS as readonly GuestCanvasTool[]).includes(activeTool);
 const shapeGroupActive = (SHAPE_MENU_TOOLS as readonly GuestCanvasTool[]).includes(activeTool);
 // A grouped rail button activates the group's current tool and toggles its flyout.
 const chooseGroup = (menuId: string, tool: GuestCanvasTool) => {
   setActiveTool(tool);
   setMenu(menu === menuId ? null : menuId);
 };
 const toolButtonClass = (tool: GuestCanvasTool, danger = false) =>
    'gc-tool' + (activeTool === tool ? (danger ? ' is-active-danger' : ' is-active') : '');
 const SelectIcon = SELECT_ICON[selectGroupTool];
 const PenIcon = PEN_ICON[penGroupTool];
 const ShapeIcon = SHAPE_ICON[shapeGroupTool];
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
          <button type="button" className="gc-tool gc-toolbar-grip" aria-label="캔버스 도구 모음 이동" title="드래그 또는 방향키로 캔버스 도구 모음 이동 · Shift: 크게 이동 · Home: 원래 위치" {...position.gripProps}><GripHorizontal className="gc-icon" /></button>

          {/* 선택 — 손 도구를 함께 묶은 플라이아웃 */}
          <div className="gc-popover-anchor">
            <button
              type="button"
              onClick={() => chooseGroup('select', selectGroupTool)}
              className={`gc-tool${selectGroupActive ? ' is-active' : ''}`}
              title={`선택 (V) — ${SELECT_LABEL[selectGroupTool]} · 눌러 이동 도구 더 보기`}
              aria-label="선택 / 이동"
              aria-haspopup="menu"
              aria-expanded={showSelectMenu}
            >
              <SelectIcon className="gc-icon" />
              <span className="gc-tool-caret" aria-hidden="true" />
            </button>
            {showSelectMenu && (
              <div className="gc-popover gc-flyout">
                <div className="gc-flyout-row">
                  {SELECT_MENU_TOOLS.map(t => {
                    const Icon = SELECT_ICON[t];
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setActiveTool(t)}
                        title={SELECT_TITLE[t]}
                        aria-label={SELECT_LABEL[t]}
                        className={`gc-tool${activeTool === t ? ' is-active' : ''}`}
                      >
                        <Icon className="gc-icon" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 메모지 + 색 견본 */}
          <div className="gc-popover-anchor">
            <button
              type="button"
              onClick={() => { setMenu(showStickyPalette ? null : 'sticky'); }}
              className={`gc-tool gc-tool-sticky${showStickyPalette || activeTool === 'note' ? ' is-active-sticky' : ''}`}
              title="스티커 메모지 추가"
              aria-label="메모지"
              aria-haspopup="menu"
              aria-expanded={showStickyPalette}
            >
              <StickyNote className="gc-icon" />
              <span className="gc-tool-caret" aria-hidden="true" />
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

          {/* 텍스트 */}
          <button type="button" onClick={() => setActiveTool('text')} className={toolButtonClass('text')} title="텍스트 (T) — 캔버스를 클릭하면 입력" aria-label="텍스트">
            <Type className="gc-icon" />
          </button>

          {/* 도형 + Mermaid 다이어그램 */}
          <div className="gc-popover-anchor">
            <button
              type="button"
              onClick={() => chooseGroup('shapes', shapeGroupTool)}
              className={`gc-tool${shapeGroupActive ? ' is-active' : ''}`}
              title="도형 — 사각형·원·삼각형·마름모·육각형·별·Mermaid 다이어그램"
              aria-label="도형"
              aria-haspopup="menu"
              aria-expanded={showShapesMenu}
            >
              <ShapeIcon className="gc-icon" />
              <span className="gc-tool-caret" aria-hidden="true" />
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
                      aria-label={SHAPE_LABEL[t]}
                      className={`gc-tool${activeTool === t ? ' is-active' : ''}`}
                    >
                      <Icon className="gc-icon" />
                    </button>
                  );
                })}
                <button
                  type="button"
                  onClick={() => { onDiagram(); setMenu(null); }}
                  title="Mermaid 다이어그램 만들기"
                  aria-label="Mermaid 다이어그램"
                  className="gc-tool gc-tool-diagram"
                >
                  <FileCode className="gc-icon" />
                </button>
              </div>
            )}
          </div>

          {/* 연결선 */}
          <button type="button" onClick={() => setActiveTool('arrow')} className={toolButtonClass('arrow')} title="연결선 / 화살표 (드래그해서 그리기)" aria-label="연결선">
            <GitCommit className="gc-icon" />
          </button>

          {/* 펜·형광펜·지우개 + 선 굵기 */}
          <div className="gc-popover-anchor">
            <button
              type="button"
              onClick={() => chooseGroup('pen', penGroupTool)}
              className={`gc-tool${penGroupActive ? (penGroupTool === 'eraser' ? ' is-active-danger' : ' is-active') : ''}`}
              title={`펜 (P) — ${PEN_LABEL[penGroupTool]} · 눌러 그리기 도구 더 보기`}
              aria-label="펜"
              aria-haspopup="menu"
              aria-expanded={showPenMenu}
            >
              <PenIcon className="gc-icon" />
              <span className="gc-tool-caret" aria-hidden="true" />
            </button>
            {showPenMenu && (
              <div className="gc-popover gc-flyout">
                <div className="gc-flyout-row">
                  {PEN_MENU_TOOLS.map(t => {
                    const Icon = PEN_ICON[t];
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setActiveTool(t)}
                        title={PEN_TITLE[t]}
                        aria-label={PEN_LABEL[t]}
                        className={toolButtonClass(t, t === 'eraser')}
                      >
                        <Icon className="gc-icon" />
                      </button>
                    );
                  })}
                </div>
                <div className="gc-flyout-label" aria-hidden="true">선 굵기</div>
                <div className="gc-flyout-row" role="group" aria-label="선 굵기">
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
              </div>
            )}
          </div>

          {/* 프레임 */}
          <button type="button" onClick={() => setActiveTool('frame')} className={toolButtonClass('frame')} title="프레임 (F) — 드래그해서 그리기" aria-label="프레임">
            <Frame className="gc-icon" />
          </button>

          {/* 올리기 — PDF·이미지 첨부 */}
          <CanvasAttachmentButton canvasRef={canvasRef} />

          <div className="gc-toolbar-divider" />

          {/* 실행 취소 / 다시 실행 */}
          <button type="button" onClick={() => canvasRef.current?.undo()} className="gc-tool" title="실행 취소 (Ctrl/⌘+Z)" aria-label="실행 취소">
            <Undo2 className="gc-icon" />
          </button>
          <button type="button" onClick={() => canvasRef.current?.redo()} className="gc-tool" title="다시 실행 (Ctrl/⌘+Shift+Z 또는 Ctrl/⌘+Y)" aria-label="다시 실행">
            <Redo2 className="gc-icon" />
          </button>
        </div>

 );
}
