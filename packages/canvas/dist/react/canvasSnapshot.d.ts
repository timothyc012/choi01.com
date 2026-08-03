import type { Dispatch, RefObject, SetStateAction } from 'react';
import type { CanvasShape, CanvasSnapshot } from './InfiniteCanvas';
type Camera = CanvasSnapshot['camera'];
interface CanvasSnapshotLoadOptions {
    controlled: boolean;
    past: RefObject<CanvasShape[][]>;
    future: RefObject<CanvasShape[][]>;
    setLocalShapes: Dispatch<SetStateAction<CanvasShape[]>>;
    setCamera: Dispatch<SetStateAction<Camera>>;
    selectNow: (selection: Set<string>) => void;
    setEditingId: Dispatch<SetStateAction<string | null>>;
}
/** Validates and applies a persisted snapshot while respecting collab ownership. */
export declare function loadCanvasSnapshot(snapshot: unknown, { controlled, past, future, setLocalShapes, setCamera, selectNow, setEditingId, }: CanvasSnapshotLoadOptions): void;
export {};
//# sourceMappingURL=canvasSnapshot.d.ts.map