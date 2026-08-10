import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { CanvasColorKey } from '../core/index.js';
import type { CanvasShape, CanvasTool } from './InfiniteCanvas';
import type { SnapResult } from './canvasGeometry';
import type { Camera, Interaction, PointerPosition } from './canvasPointerTypes';
interface EditorStateOptions {
    boardIdentity: string;
    tool: CanvasTool;
    controlledShapes?: CanvasShape[];
    onShapesChange?: (updater: (prev: CanvasShape[]) => CanvasShape[]) => void;
    onDirty: () => void;
}
export interface CanvasEditorState {
    containerRef: RefObject<HTMLDivElement | null>;
    editorRef: RefObject<HTMLDivElement | null>;
    localShapes: CanvasShape[];
    setLocalShapes: Dispatch<SetStateAction<CanvasShape[]>>;
    controlled: boolean;
    shapes: CanvasShape[];
    setShapes: (updater: SetStateAction<CanvasShape[]>) => void;
    camera: Camera;
    setCamera: Dispatch<SetStateAction<Camera>>;
    cameraRef: RefObject<Camera>;
    selected: Set<string>;
    setSelected: Dispatch<SetStateAction<Set<string>>>;
    selectedRef: RefObject<Set<string>>;
    editingId: string | null;
    setEditingId: Dispatch<SetStateAction<string | null>>;
    editingIdRef: RefObject<string | null>;
    interaction: Interaction;
    interactionRef: RefObject<Interaction>;
    applyInteraction: (next: Interaction) => void;
    isSpaceDown: boolean;
    setIsSpaceDown: Dispatch<SetStateAction<boolean>>;
    guides: SnapResult['guides'];
    setGuides: Dispatch<SetStateAction<SnapResult['guides']>>;
    announcement: string;
    setAnnouncement: Dispatch<SetStateAction<string>>;
    showInspectorPalette: boolean;
    setShowInspectorPalette: Dispatch<SetStateAction<boolean>>;
    eraserPos: {
        x: number;
        y: number;
    } | null;
    setEraserPos: Dispatch<SetStateAction<{
        x: number;
        y: number;
    } | null>>;
    activeColor: CanvasColorKey;
    setActiveColor: Dispatch<SetStateAction<CanvasColorKey>>;
    activeColorRef: RefObject<CanvasColorKey>;
    installedFontFamilies: readonly string[];
    pointers: RefObject<Map<number, PointerPosition>>;
    past: RefObject<CanvasShape[][]>;
    future: RefObject<CanvasShape[][]>;
    selectNow: (next: Set<string>) => void;
    commit: (next: CanvasShape[] | ((prev: CanvasShape[]) => CanvasShape[])) => void;
    deleteSelection: (selection: Set<string>) => boolean;
    beginHistory: () => void;
    endHistory: () => void;
    toPage: (clientX: number, clientY: number) => {
        x: number;
        y: number;
    };
    viewportCentre: () => {
        x: number;
        y: number;
    };
    expandToGroups: (ids: Set<string>) => Set<string>;
    toolRef: RefObject<CanvasTool>;
    shapesRef: RefObject<CanvasShape[]>;
}
/** Owns the mutable editor model, refs, history, and coordinate actions. */
export declare function useCanvasEditorState({ boardIdentity, tool, controlledShapes, onShapesChange, onDirty, }: EditorStateOptions): CanvasEditorState;
export {};
//# sourceMappingURL=useCanvasEditorState.d.ts.map