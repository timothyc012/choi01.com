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
export declare function historyShortcutFromKeyboardEvent(event: CanvasShortcutEvent): CanvasHistoryShortcut | null;
export declare function toolShortcutFromKeyboardEvent(event: CanvasShortcutEvent): CanvasShortcutTool | null;
//# sourceMappingURL=keyboardShortcuts.d.ts.map