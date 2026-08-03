/**
 * Keep only the small formatting vocabulary understood by the canvas editor.
 * Attributes are intentionally discarded so event handlers, URLs and CSS
 * cannot cross the snapshot boundary. The DOM path is used in a browser; the
 * tokenizer fallback keeps the core package safe in Node/SSR environments.
 */
export declare function sanitizeCanvasHtml(input: string): string;
/**
 * Validate an image/file URL before it can become a network request or a link.
 * Only blob URLs created in the current tab and ordinary HTTP(S) storage URLs
 * are allowed. Relative app URLs are intentionally rejected: an untrusted
 * collaborator could otherwise turn an image load into an authenticated GET
 * against a host application's state-changing endpoint.
 */
export declare function validateCanvasAssetUrl(value: string): string;
/** Validate a user-controlled color before it reaches an inline style or SVG. */
export declare function validateCanvasCssColor(value: string): string;
/** Keep custom font stacks free of CSS declarations and control characters. */
export declare function sanitizeCanvasFontFamily(value: string): string;
//# sourceMappingURL=security.d.ts.map