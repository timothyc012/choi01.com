export type CanvasShortcutTool = 'select' | 'draw' | 'text' | 'frame';

export interface CanvasShortcutEvent {
  readonly key: string;
  readonly code: string;
  readonly altKey?: boolean;
  readonly ctrlKey?: boolean;
  readonly metaKey?: boolean;
  readonly shiftKey?: boolean;
}

export type CanvasHistoryShortcut = 'undo' | 'redo';

/** Resolve history chords from the physical key so non-Latin layouts work. */
export function historyShortcutFromKeyboardEvent(event: CanvasShortcutEvent): CanvasHistoryShortcut | null {
  if (event.altKey || (!event.ctrlKey && !event.metaKey)) return null;
  if (event.code === 'KeyZ') return event.shiftKey ? 'redo' : 'undo';
  if (event.code === 'KeyY') return 'redo';
  return null;
}

export function toolShortcutFromKeyboardEvent(event: CanvasShortcutEvent): CanvasShortcutTool | null {
  if (event.altKey || event.ctrlKey || event.metaKey) return null;

  switch (event.code) {
    case 'KeyV':
      return 'select';
    case 'KeyP':
      return 'draw';
    case 'KeyT':
      return 'text';
    case 'KeyF':
      return 'frame';
    default:
      return null;
  }
}
