import type { RefObject } from 'react';
import type { CanvasShape } from './InfiniteCanvas';
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
export declare function useCanvasTextEditing({ editorRef, editingId, setShapes, setAnnouncement, onDirty, patchSelected, }: CanvasTextEditingOptions): CanvasTextEditingHandlers;
export {};
//# sourceMappingURL=useCanvasTextEditing.d.ts.map