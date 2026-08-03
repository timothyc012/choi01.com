export type CanvasShortcutTool = 'select' | 'draw' | 'text' | 'frame';
export interface CanvasShortcutEvent {
    readonly key: string;
    readonly code: string;
    readonly altKey?: boolean;
    readonly ctrlKey?: boolean;
    readonly metaKey?: boolean;
}
export declare function toolShortcutFromKeyboardEvent(event: CanvasShortcutEvent): CanvasShortcutTool | null;
//# sourceMappingURL=keyboardShortcuts.d.ts.map