import type { CSSProperties, Dispatch, KeyboardEvent, ReactElement, ReactNode, RefObject, SetStateAction } from 'react';
import type { CanvasShape } from './InfiniteCanvas';
interface CanvasShapeRendererOptions {
    camera: {
        readonly z: number;
    };
    editingId: string | null;
    isDarkMode: boolean;
    editorRef: RefObject<HTMLDivElement | null>;
    commitEditorHtml: () => void;
    onEditorKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
    setShapes: Dispatch<SetStateAction<CanvasShape[]>>;
    onDirty: () => void;
}
interface CanvasShapeRenderer {
    renderEditor: (extra: string, style?: CSSProperties) => ReactElement;
    renderShapeBody: (shape: CanvasShape) => ReactNode;
}
export declare function createCanvasShapeRenderer({ camera, editingId, isDarkMode, editorRef, commitEditorHtml, onEditorKeyDown, setShapes, onDirty, }: CanvasShapeRendererOptions): CanvasShapeRenderer;
export {};
//# sourceMappingURL=CanvasShapeRenderer.d.ts.map