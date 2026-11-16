import { useCallback, useEffect } from 'react';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { CanvasShapeType, CanvasTool } from '../core/index.ts';
import { historyShortcutFromKeyboardEvent, toolShortcutFromKeyboardEvent } from './keyboardShortcuts';
import type { CanvasShape } from './InfiniteCanvas';
import type { CanvasSelectionActions } from './useCanvasSelectionActions';
import { shapePlainText } from './canvasGeometry';
import type { Interaction } from './canvasPointerTypes';
import { nextShapeId } from './canvasView';

/** View actions the parent supplies; every entry is optional so the hook stays usable standalone. */
export interface CanvasViewActions {
  openFind?: () => void;
  fitAll?: () => void;
  fitSelection?: () => void;
  zoomMax?: () => void;
  smartZoom?: (direction: number) => void;
  /** Select a shape and centre the camera on it when it is off screen. */
  revealShape?: (id: string) => void;
}

type ShapeUpdater = CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[]);

interface KeyboardInteractionOptions {
  containerRef: RefObject<HTMLDivElement | null>;
  editorRef: RefObject<HTMLDivElement | null>;
  shapesRef: RefObject<CanvasShape[]>;
  selectedRef: RefObject<Set<string>>;
  editingIdRef: RefObject<string | null>;
  interactionRef: RefObject<Interaction>;
  applyInteraction: (next: Interaction) => void;
  toolRef: RefObject<CanvasTool>;
  past: RefObject<CanvasShape[][]>;
  future: RefObject<CanvasShape[][]>;
  textualTypes: readonly CanvasShapeType[];
  setIsSpaceDown: Dispatch<SetStateAction<boolean>>;
  setEditingId: Dispatch<SetStateAction<string | null>>;
  setShapes: Dispatch<SetStateAction<CanvasShape[]>>;
  setAnnouncement: Dispatch<SetStateAction<string>>;
  commit: (next: ShapeUpdater) => void;
  deleteSelection: (selection: Set<string>) => boolean;
  selectNow: (selection: Set<string>) => void;
  onDirty: () => void;
  onToolChange: (tool: CanvasTool) => void;
  createId: (prefix?: string) => string;
  selectionActions: CanvasSelectionActions;
  /** Camera/find actions wired by the parent component. */
  viewActionsRef?: RefObject<CanvasViewActions | undefined>;
}

/** Installs keyboard shortcuts and canvas-level editing/navigation semantics. */
export function useCanvasKeyboardInteractions({
  containerRef,
  editorRef,
  shapesRef,
  selectedRef,
  editingIdRef,
  interactionRef,
  applyInteraction,
  toolRef,
  past,
  future,
  textualTypes,
  setIsSpaceDown,
  setEditingId,
  setShapes,
  setAnnouncement,
  commit,
  deleteSelection,
  selectNow,
  onDirty,
  onToolChange,
  viewActionsRef,
  createId,
  selectionActions,
}: KeyboardInteractionOptions): void {
  const nudge = useCallback((dx: number, dy: number) => {
    const sel = selectedRef.current;
    if (sel.size === 0) return;
    commit(prev => prev.map(s => (sel.has(s.id) && !s.locked ? {
      ...s,
      x: s.x + dx,
      y: s.y + dy,
      points: s.points?.map(([px, py]) => [px + dx, py + dy] as [number, number]),
    } : s)));
  }, [commit, selectedRef]);

  useEffect(() => {
    const isTypingTarget = (t: EventTarget | null) => {
      const el = t as HTMLElement | null;
      return !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
    };
    const isInteractiveControl = (t: EventTarget | null) => (
      t instanceof Element
      && !!t.closest('input, select, button, textarea, option, label, [data-canvas-control]')
    );

    const onKeyDown = (e: KeyboardEvent) => {
      const canvas = containerRef.current;
      const activeElement = document.activeElement;
      const eventInsideCanvas = e.target instanceof Node && !!canvas?.contains(e.target);
      const focusInsideCanvas = !!canvas && (activeElement === canvas || canvas.contains(activeElement));
      if (!eventInsideCanvas && !focusInsideCanvas) return;
      // Inspector controls own their native keyboard semantics. In particular,
      // arrows must move through a select and Space/Enter must activate a
      // button instead of nudging or changing the canvas tool.
      if (isInteractiveControl(e.target)) return;
      if (e.code === 'Space' && !isTypingTarget(e.target)) {
        setIsSpaceDown(true);
        e.preventDefault();
        return;
      }

      if (isTypingTarget(e.target)) {
        // Escape leaves the text editor; everything else belongs to the editor.
        if (e.key === 'Escape') {
          e.preventDefault();
          setEditingId(null);
          editorRef.current?.blur();
          containerRef.current?.focus();
        } else if ((e.key === 'Delete' || e.key === 'Backspace') && !editingIdRef.current) {
          const staleFocusSelection = selectedRef.current;
          if (deleteSelection(staleFocusSelection)) e.preventDefault();
        }
        return;
      }

      const sel = selectedRef.current;

      const historyShortcut = historyShortcutFromKeyboardEvent(e);
      if (historyShortcut) {
        e.preventDefault();
        if (historyShortcut === 'redo') {
          const next = future.current.pop();
          if (next) {
            past.current.push(shapesRef.current);
            setShapes(next);
            onDirty();
            setAnnouncement('다시 실행');
          }
        } else {
          const prev = past.current.pop();
          if (prev) {
            future.current.push(shapesRef.current);
            setShapes(prev);
            onDirty();
            setAnnouncement('실행 취소');
          }
        }
        selectNow(new Set());
        return;
      }

      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key.toLowerCase() === 'c') {
        e.preventDefault();
        selectionActions.copySelected();
        return;
      }
      if (mod && e.key.toLowerCase() === 'v') {
        e.preventDefault();
        void selectionActions.pasteClipboard();
        return;
      }
      if (mod && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        selectionActions.duplicateSelected();
        return;
      }
      if (mod && e.key.toLowerCase() === 'g') {
        e.preventDefault();
        if (e.shiftKey) {
          if (sel.size > 0) {
            commit(prev => prev.map(s => (sel.has(s.id) ? { ...s, groupId: undefined } : s)));
            setAnnouncement('그룹 해제됨');
          }
        } else if (sel.size > 1) {
          const groupId = createId('g');
          commit(prev => prev.map(s => (sel.has(s.id) ? { ...s, groupId } : s)));
          setAnnouncement(`${sel.size}개 그룹화됨`);
        }
        return;
      }

      // ⇧⌘L toggles the lock on the selection; it must work on locked shapes.
      if (mod && e.shiftKey && e.code === 'KeyL') {
        e.preventDefault();
        if (sel.size > 0) selectionActions.toggleLocked();
        return;
      }

      if (mod && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        selectNow(new Set(shapesRef.current.map(s => s.id)));
        setAnnouncement(`전체 ${shapesRef.current.length}개 선택됨`);
        return;
      }

      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (deleteSelection(sel)) e.preventDefault();
        return;
      }

      if (e.key.startsWith('Arrow')) {
        e.preventDefault();
        const step = e.shiftKey ? 10 : 1;
        if (e.key === 'ArrowLeft') nudge(-step, 0);
        if (e.key === 'ArrowRight') nudge(step, 0);
        if (e.key === 'ArrowUp') nudge(0, -step);
        if (e.key === 'ArrowDown') nudge(0, step);
        return;
      }

      // Tab walks shapes in Zero1 reading order (rows by centre-y, then
      // left→right) so the canvas is reachable without a mouse. Skipped while
      // text is being edited or the find input is focused (typing targets).
      if (e.key === 'Tab' && !editingIdRef.current && shapesRef.current.length > 0) {
        e.preventDefault();
        const current = shapesRef.current.find(s => sel.has(s.id))?.id ?? null;
        const next = nextShapeId(shapesRef.current, current, e.shiftKey ? -1 : 1);
        if (!next) return;
        selectNow(new Set([next]));
        viewActionsRef?.current?.revealShape?.(next);
        const target = shapesRef.current.find(s => s.id === next);
        if (target) setAnnouncement(`${target.type} 선택됨: ${shapePlainText(target) || '내용 없음'}`);
        return;
      }

      // Find bar: ⌘F/Ctrl+F, physical key so non-Latin layouts still open it.
      if ((e.metaKey || e.ctrlKey) && !e.altKey && e.code === 'KeyF') {
        e.preventDefault();
        viewActionsRef?.current?.openFind?.();
        return;
      }

      // View keys (physical keys): ⌥1 all, ⌥2 selection, ⌥3 max, ]/[ smart.
      if (e.altKey && !e.metaKey && !e.ctrlKey && e.code === 'Digit1') {
        e.preventDefault();
        viewActionsRef?.current?.fitAll?.();
        return;
      }
      if (e.altKey && !e.metaKey && !e.ctrlKey && e.code === 'Digit2') {
        e.preventDefault();
        viewActionsRef?.current?.fitSelection?.();
        return;
      }
      if (e.altKey && !e.metaKey && !e.ctrlKey && e.code === 'Digit3') {
        e.preventDefault();
        viewActionsRef?.current?.zoomMax?.();
        return;
      }
      if (!editingIdRef.current && (e.code === 'BracketRight' || e.code === 'BracketLeft')
          && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        viewActionsRef?.current?.smartZoom?.(e.code === 'BracketRight' ? 1 : -1);
        return;
      }

      if (e.key === 'Enter' && sel.size === 1) {
        const target = shapesRef.current.find(s => sel.has(s.id));
        if (target && !target.locked && textualTypes.includes(target.type)) {
          e.preventDefault();
          setEditingId(target.id);
        }
        return;
      }

      if (e.key === 'Escape') {
        // A connect drag in flight is cancelled whole: no history was opened,
        // so dropping the interaction is the entire cleanup.
        if (interactionRef.current.kind === 'connect') {
          e.preventDefault();
          applyInteraction({ kind: 'none' });
          return;
        }
        if (editingIdRef.current) {
          e.preventDefault();
          setEditingId(null);
          editorRef.current?.blur();
          containerRef.current?.focus();
          onToolChange('select');
          return;
        }
        selectNow(new Set());
        onToolChange('select');
        return;
      }

      const shortcutTool = toolShortcutFromKeyboardEvent(e);
      if (shortcutTool) {
        e.preventDefault();
        toolRef.current = shortcutTool;
        onToolChange(shortcutTool);
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      const canvas = containerRef.current;
      if (!canvas || !(document.activeElement === canvas || canvas.contains(document.activeElement))) return;
      if (e.code === 'Space') setIsSpaceDown(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [commit, containerRef, createId, deleteSelection, editingIdRef, editorRef, future, nudge, onDirty,
    onToolChange, past, selectNow, selectedRef, setAnnouncement, setEditingId, setIsSpaceDown, setShapes,
    selectionActions, shapesRef, textualTypes, toolRef]);
}
