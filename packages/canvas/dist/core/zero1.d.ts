import type { CanvasCamera, CanvasShape, CanvasSnapshot } from './model.js';
export interface Zero1File {
    version: number;
    items: Record<string, unknown>[];
    connections: Record<string, unknown>[];
    sheets?: Record<string, unknown>[];
    activeSheetID?: string;
}
export interface Zero1Import {
    snapshot: CanvasSnapshot;
    /** Titles of items Chois cannot represent (image, file). */
    dropped: string[];
    /** Every sheet in the file, in file order. One conversion covers one sheet; pass another id as `options.sheet` to get the rest. */
    sheets: {
        id: string;
        title: string;
    }[];
    /** Id of the sheet this snapshot was made from. Undefined for files without sheets. */
    sheetId: string | undefined;
}
/**
 * Convert a Zero1 `.pdfcanvas.json` file (object or JSON string) into a
 * `canvas-v1` snapshot. `options.sheet` selects a sheet by id; otherwise the
 * `activeSheetID` (or first) sheet is used. Items without a `sheetID`
 * belong to every sheet. Output always passes `parseCanvasSnapshot`.
 */
export declare function zero1ToChois(input: unknown, options?: {
    sheet?: string;
}): Zero1Import;
/**
 * Convert a canvas document into a Zero1 version-6 file. Every emitted id is
 * a UUID — non-UUID Chois ids get a fresh UUID and connections are remapped.
 * Only arrows attached to two exported items become connections.
 */
export declare function choisToZero1(document: {
    shapes: readonly CanvasShape[];
}, camera?: CanvasCamera): Zero1File;
//# sourceMappingURL=zero1.d.ts.map