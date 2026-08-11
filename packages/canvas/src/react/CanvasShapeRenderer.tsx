import type {
  CSSProperties,
  Dispatch,
  HTMLAttributes,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  RefObject,
  SetStateAction,
} from 'react';
import { CANVAS_COLORS } from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';
import {
  effectiveBorder,
  effectiveFill,
  effectiveText,
  polygonPoints,
  safeAssetUrl,
  shapeHtml,
  shapePlainText,
} from './canvasGeometry';
import {
  fontSizeForShape,
  fontStackForShape,
  textAlignForShape,
} from './canvasText';
import { CANVAS_UI_COLORS } from './theme';
import { isDiagramShape } from './canvasDiagram';

interface CanvasShapeRendererOptions {
  camera: { readonly z: number };
  editingId: string | null;
  isDarkMode: boolean;
  editorRef: RefObject<HTMLDivElement | null>;
  commitEditorHtml: () => void;
  onEditorKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
  setShapes: Dispatch<SetStateAction<CanvasShape[]>>;
  onDirty: () => void;
  renderDiagram?: (shape: CanvasShape) => ReactNode;
}

interface CanvasShapeRenderer {
  renderEditor: (extra: string, style?: CSSProperties) => ReactElement;
  renderShapeBody: (shape: CanvasShape) => ReactNode;
}

export function createCanvasShapeRenderer({
  camera,
  editingId,
  isDarkMode,
  editorRef,
  commitEditorHtml,
  onEditorKeyDown,
  setShapes,
  onDirty,
  renderDiagram,
}: CanvasShapeRendererOptions): CanvasShapeRenderer {
  const editorClasses = 'canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden';
  const renderEditor = (extra: string, style?: CSSProperties) => (
    <div
      // Distinct from the read-only view's key on purpose. Both are plain divs
      // in the same slot, so without it React reuses the DOM node when editing
      // ends — and the contenteditable's children, written imperatively and
      // therefore invisible to React, survive alongside the new content.
      key="canvas-editor"
      ref={editorRef}
      role="textbox"
      aria-multiline="true"
      aria-label="텍스트 편집"
      contentEditable
      suppressContentEditableWarning
      onInput={commitEditorHtml}
      onBlur={commitEditorHtml}
      onPointerDown={e => e.stopPropagation()}
      onDoubleClick={e => e.stopPropagation()}
      onKeyDown={onEditorKeyDown}
      className={`${editorClasses} ${extra}`}
      style={style}
    />
  );

  const renderShapeBody = (s: CanvasShape) => {
    const palette = CANVAS_COLORS[s.color ?? 'blue'];
    const isEditing = editingId === s.id;
    const html = shapeHtml(s);

    if (s.type === 'frame') {
      const strokeWidth = s.strokeWidth ?? 2;
      return (
        <div
          data-canvas-stroke-width={strokeWidth}
          className="w-full h-full rounded"
          style={{ border: `${strokeWidth / camera.z}px solid ${isDarkMode ? CANVAS_UI_COLORS.slate600 : CANVAS_UI_COLORS.slate400}` }}
        >
          <div
            className="absolute font-semibold"
            style={{
              top: -22 / camera.z,
              left: 0,
              fontSize: 13 / camera.z,
              color: isDarkMode ? CANVAS_UI_COLORS.slate400 : CANVAS_UI_COLORS.muted,
            }}
          >
            {isEditing
              ? renderEditor('', { fontSize: 13 / camera.z })
              : (shapePlainText(s) || '프레임')}
          </div>
        </div>
      );
    }

    if (s.type === 'note') {
      return (
        <div
          className="w-full h-full flex p-3 shadow-md"
          style={{ background: palette.bg, borderTop: `6px solid ${palette.border}`, color: palette.text }}
        >
          {isEditing
            ? renderEditor('font-medium', { color: effectiveText(s), fontSize: fontSizeForShape(s), fontFamily: fontStackForShape(s), textAlign: textAlignForShape(s) })
            : html
              ? <div data-canvas-text-view key="canvas-view" className="canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden" style={{ color: effectiveText(s), fontSize: fontSizeForShape(s), fontFamily: fontStackForShape(s), textAlign: textAlignForShape(s) }} dangerouslySetInnerHTML={{ __html: html }} />
              : <div data-canvas-text-view key="canvas-view" className="canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden" style={{ color: effectiveText(s), fontSize: fontSizeForShape(s), fontFamily: fontStackForShape(s), textAlign: textAlignForShape(s) }}><span className="opacity-40">메모 입력...</span></div>}
        </div>
      );
    }

    if (s.type === 'card') {
      const isGlass = s.cardStyle === 'glass';
      if (isDiagramShape(s) && renderDiagram && !isEditing) {
        return (
          <div className="w-full h-full overflow-hidden rounded-2xl" data-canvas-diagram>
            {renderDiagram(s)}
          </div>
        );
      }
      return (
        <div
          className="w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden"
          style={{
            background: isGlass ? CANVAS_UI_COLORS.glassFill : CANVAS_UI_COLORS.slateCard,
            backdropFilter: isGlass ? 'blur(12px)' : undefined,
            WebkitBackdropFilter: isGlass ? 'blur(12px)' : undefined,
            border: `1px solid ${isGlass ? CANVAS_UI_COLORS.glassBorder : CANVAS_UI_COLORS.darkBorder}`,
            boxShadow: isGlass ? CANVAS_UI_COLORS.glassShadow : CANVAS_UI_COLORS.cardShadow,
          }}
        >
          {/*
            Type label is contenteditable so clicking on the [ ENTITY ] bracket
            lets the user rename it directly, without hunting for a form field.
            Blur/Enter commits, and the value is normalised to uppercase in the
            same shape as manual entry from the inspector.
          */}
          <div
            className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none"
            contentEditable
            suppressContentEditableWarning
            onPointerDown={e => e.stopPropagation()}
            onDoubleClick={e => e.stopPropagation()}
            onBlur={e => {
              const raw = (e.currentTarget.textContent || '').replace(/^\[\s*|\s*\]$/g, '').trim();
              const next = raw.toUpperCase() || 'ENTITY';
              setShapes(prev => prev.map(x => (x.id === s.id ? { ...x, category: next } : x)));
              onDirty();
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') { e.preventDefault(); (e.currentTarget as HTMLElement).blur(); }
            }}
          >
            [ {s.category || 'ENTITY'} ]
          </div>
          {isEditing
            ? renderEditor('flex-1 font-medium', { color: s.textColor ?? CANVAS_UI_COLORS.white, fontSize: fontSizeForShape(s), fontFamily: fontStackForShape(s), textAlign: textAlignForShape(s) })
            : <div data-canvas-text-view key="canvas-view" className="canvas-rich-text flex-1 font-medium break-words overflow-hidden" style={{ color: s.textColor ?? CANVAS_UI_COLORS.white, fontSize: fontSizeForShape(s), fontFamily: fontStackForShape(s), textAlign: textAlignForShape(s) }} dangerouslySetInnerHTML={{ __html: html }} />}
          <div className="text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1">
            • Type: {s.category || 'Entity'}
          </div>
        </div>
      );
    }

    if (s.type === 'text') {
      const tone = isDarkMode ? 'text-slate-100' : 'text-slate-900';
      const textViewProps = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${tone}`,
        style: { color: s.textColor, fontSize: fontSizeForShape(s), fontFamily: fontStackForShape(s), textAlign: textAlignForShape(s) },
      } satisfies Pick<HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;
      if (isEditing) return renderEditor(`font-medium ${tone}`, textViewProps.style);
      if (html) return (
        <div
          data-canvas-text-view
          key="canvas-view"
          {...textViewProps}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
      return (
        <div data-canvas-text-view key="canvas-view" {...textViewProps}>
          <span className="opacity-40">텍스트 입력...</span>
        </div>
      );
    }

    if (s.type === 'image') {
      const assetUrl = safeAssetUrl(s.src);
      if (!assetUrl) return null;
      return (
        <img
          src={assetUrl}
          alt={s.fileName || '캔버스 이미지'}
          className="w-full h-full object-contain pointer-events-none rounded-lg"
          draggable={false}
        />
      );
    }

    // Shape family — rect / ellipse and the polygon variants (triangle, diamond,
    // hexagon, star). Polygons draw as an SVG under the text overlay so the
    // fill/border follow the same palette + override semantics as rect/ellipse.
    const fill = effectiveFill(s);
    const border = effectiveBorder(s);
    const textCol = effectiveText(s);
    const isPolygon = s.type === 'triangle' || s.type === 'diamond' || s.type === 'hexagon' || s.type === 'star';

    if (isPolygon) {
      const strokeWidth = s.strokeWidth ?? 2;
      return (
        <div className="relative w-full h-full">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox={`0 0 ${s.w} ${s.h}`} preserveAspectRatio="none">
            <polygon data-canvas-stroke-width={strokeWidth} points={polygonPoints(s.type, s.w, s.h)} fill={fill} stroke={border} strokeWidth={strokeWidth / camera.z} strokeLinejoin="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center p-3" style={{ color: textCol }}>
            {isEditing
              ? renderEditor('font-medium', { color: textCol, fontSize: fontSizeForShape(s), fontFamily: fontStackForShape(s), textAlign: textAlignForShape(s) })
              : <div data-canvas-text-view key="canvas-view" className="canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden" style={{ fontSize: fontSizeForShape(s), fontFamily: fontStackForShape(s), textAlign: textAlignForShape(s) }} dangerouslySetInnerHTML={{ __html: html }} />}
          </div>
        </div>
      );
    }

    // rect / ellipse — also used for the file-attachment card.
    const assetUrl = safeAssetUrl(s.src);
    const strokeWidth = s.type === 'rect' || s.type === 'ellipse' ? s.strokeWidth ?? 2 : 2;
    return (
      <div
        data-canvas-stroke-width={strokeWidth}
        className={`w-full h-full flex items-center justify-center p-3 ${s.type === 'ellipse' ? 'rounded-full' : 'rounded-xl'}`}
        style={{ background: fill, border: `${strokeWidth / camera.z}px solid ${border}`, color: textCol }}
      >
        {isEditing ? renderEditor('font-medium', { color: textCol, fontSize: fontSizeForShape(s), fontFamily: fontStackForShape(s), textAlign: textAlignForShape(s) }) : (
          <div data-canvas-text-view key="canvas-view" className="canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden" style={{ fontSize: fontSizeForShape(s), fontFamily: fontStackForShape(s), textAlign: textAlignForShape(s) }}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {assetUrl && (
              <a
                href={assetUrl}
                target="_blank"
                rel="noreferrer"
                onPointerDown={e => e.stopPropagation()}
                className="block mt-1 text-[11px] underline opacity-70"
              >
                파일 열기
              </a>
            )}
          </div>
        )}
      </div>
    );
  };
  return { renderEditor, renderShapeBody };
}
