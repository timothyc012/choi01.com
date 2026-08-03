export type CanvasShortcutTool = 'select' | 'draw' | 'text' | 'frame';

export interface CanvasShortcutEvent {
  readonly key: string;
  readonly code: string;
  readonly altKey?: boolean;
  readonly ctrlKey?: boolean;
  readonly metaKey?: boolean;
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
