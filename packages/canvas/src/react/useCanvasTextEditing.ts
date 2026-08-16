import { useCallback } from 'react';
import type { RefObject } from 'react';
import type { CanvasShape } from './InfiniteCanvas';
import { sanitizeCanvasHtml } from '../core/index.ts';
import { shapePlainText } from './canvasGeometry';
import { isDiagramShape } from './canvasDiagram';
import {
  measureTextBoxContent,
  normalizeCustomFontFamily,
} from './canvasText';

interface CanvasTextEditingOptions {
  editorRef: RefObject<HTMLDivElement | null>;
  editingId: string | null;
  setShapes: (updater: (prev: CanvasShape[]) => CanvasShape[]) => void;
  setAnnouncement: (updater: string | ((prev: string) => string)) => void;
  onDirty: () => void;
  patchSelected: (patch: Partial<CanvasShape>) => void;
}

export interface CanvasTextEditingHandlers {
  commitEditorHtml: () => void;
  applyFormat: (command: 'bold' | 'italic' | 'underline') => void;
  applyList: (kind: 'bullet' | 'dash' | 'number') => void;
  onEditorKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  applyCustomFontFamily: (fontFamily: string) => void;
}

/** Owns contenteditable formatting, list shortcuts, and custom font updates. */
export function useCanvasTextEditing({
  editorRef,
  editingId,
  setShapes,
  setAnnouncement,
  onDirty,
  patchSelected,
}: CanvasTextEditingOptions): CanvasTextEditingHandlers {
  const commitEditorHtml = useCallback(() => {
    const el = editorRef.current;
    if (!el || !editingId) return;
    let html: string;
    try {
      html = sanitizeCanvasHtml(el.innerHTML);
    } catch {
      setAnnouncement('입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.');
      return;
    }
    /**
     * Text-only shapes fit tightly to their content. Larger containers keep
     * the existing auto-height behaviour so multi-line typing doesn't clip.
     */
    const scrollH = el.scrollHeight;
    setShapes(prev => prev.map(s => {
      if (s.id !== editingId) return s;
      const next = isDiagramShape(s)
        ? { ...s, text: shapePlainText({ ...s, html, text: undefined }), html: undefined }
        : { ...s, html, text: undefined };
      if (s.type === 'text') {
        return s.manualSize ? next : { ...next, ...measureTextBoxContent(el, s) };
      }
      // An arrow's x/y/w/h describe its endpoints, not a text container.
      // Letting the generic auto-height path write `h` would bend a free
      // connector merely because its relationship label was edited.
      if (s.type === 'arrow') return next;
      // Padding depends on how much chrome the shape draws around the editor.
      const chromePad =
        s.type === 'note' ? 32 :
        s.type === 'card' ? 96 : // category header + type footer
        s.type === 'frame' ? 24 : // title bar
        24; // rect / ellipse / polygons default
      const nextH = Math.max(s.h, scrollH + chromePad);
      return { ...next, h: nextH };
    }));
    onDirty();
  }, [editingId, onDirty]);

  const applyFormat = (command: 'bold' | 'italic' | 'underline') => {
    editorRef.current?.focus();
    // execCommand is deprecated but remains the only broadly supported way to
    // apply inline formatting to a contenteditable selection.
    //
    // styleWithCSS must be off: with it on the browser emits
    // <span style="font-weight:…">, and the sanitizer strips every attribute, so
    // the formatting would vanish the moment it round-trips through state.
    // Off, it emits <b>/<i>/<u>, which the allowlist keeps.
    document.execCommand('styleWithCSS', false, 'false');
    document.execCommand(command);
    commitEditorHtml();
  };

  const selectedListElement = (): HTMLElement | null => {
    const anchor = window.getSelection()?.anchorNode;
    const element = anchor instanceof Element ? anchor : anchor?.parentElement;
    const list = element?.closest('ul, ol');
    return list instanceof HTMLElement ? list : null;
  };

  /**
   * Change the semantic container for the whole active list.
   *
   * `execCommand('insertOrderedList')` is selection-sensitive: when the
   * toolbar selection is collapsed inside an existing list it can split only
   * the active `<li>`, leaving the remaining siblings in the old list. Moving
   * the existing children into one replacement container keeps every item,
   * including nested lists, in the same list operation.
   */
  const replaceListContainer = (list: HTMLElement, tag: 'ul' | 'ol', style?: 'bullet' | 'dash') => {
    const replacement = document.createElement(tag);
    while (list.firstChild) replacement.append(list.firstChild);
    if (tag === 'ul' && style) replacement.dataset.listStyle = style;
    list.replaceWith(replacement);
    return replacement;
  };

  const applyList = (kind: 'bullet' | 'dash' | 'number') => {
    const editor = editorRef.current;
    if (!editor) return;
    editor.focus();
    const existing = selectedListElement();
    if (kind === 'number') {
      if (existing?.tagName === 'OL') {
        // Keep the ordered-list element unadorned so the semantic snapshot
        // remains portable; the package stylesheet renders its counter marker
        // inline with the text for consistent alignment.
        existing.removeAttribute('data-list-style');
      } else if (existing?.tagName === 'UL') {
        // Do not toggle the native command from UL to OL here. With a
        // collapsed caret browsers are allowed to convert only the current
        // list item, which leaves a mixed UL/OL result. Replacing the list
        // container preserves all sibling items and nested content.
        replaceListContainer(existing, 'ol');
      } else {
        document.execCommand('insertOrderedList');
        const list = selectedListElement();
        list?.removeAttribute('data-list-style');
      }
    } else {
      if (existing?.tagName === 'UL') {
        const currentStyle = existing.dataset.listStyle;
        if (kind === currentStyle) {
          document.execCommand('insertUnorderedList');
        } else {
          existing.dataset.listStyle = kind;
        }
      } else {
        if (existing?.tagName === 'OL') document.execCommand('insertOrderedList');
        document.execCommand('insertUnorderedList');
        const list = selectedListElement();
        if (list) list.dataset.listStyle = kind;
      }
    }
    commitEditorHtml();
  };

  const onEditorKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      document.execCommand(e.shiftKey ? 'outdent' : 'indent');
      commitEditorHtml();
      return;
    }

    if (e.key === ' ') {
      const sel = window.getSelection();
      if (sel && sel.isCollapsed && sel.anchorNode) {
        const node = sel.anchorNode;
        const textContent = node.textContent || '';
        const offset = sel.anchorOffset;
        const prefix = textContent.slice(0, offset).trim();

        if (!selectedListElement()) {
          if (prefix === '-' || prefix === '–') {
            e.preventDefault();
            node.textContent = textContent.slice(offset);
            applyList('dash');
            return;
          }
          if (prefix === '*') {
            e.preventDefault();
            node.textContent = textContent.slice(offset);
            applyList('bullet');
            return;
          }
          if (prefix === '1.') {
            e.preventDefault();
            node.textContent = textContent.slice(offset);
            applyList('number');
            return;
          }
        }
      }
    }
  };

  const applyCustomFontFamily = (fontFamily: string) => {
    const normalized = normalizeCustomFontFamily(fontFamily);
    if (!normalized) {
      patchSelected({
        fontFamily: 'sans',
        customFontFamily: undefined,
      });
      return;
    }
    patchSelected({
      fontFamily: 'custom',
      customFontFamily: normalized,
    });
  };

  return { commitEditorHtml, applyFormat, applyList, onEditorKeyDown, applyCustomFontFamily };
}
