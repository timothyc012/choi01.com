import { v as r, C as t } from "./document-CLNFlHux.js";
import { a as h, b as p, c as u, d as A, S as f, e as m, f as I, g as O, p as N, h as _, s as E, i as R, j as V, k as g } from "./document-CLNFlHux.js";
function i(a) {
  return r(a);
}
function C(a) {
  return e(a, "board");
}
function v(a) {
  return e(a, "user");
}
function c(a) {
  return e(a, "asset");
}
class d extends Error {
  constructor(s, n) {
    super("The canvas changed elsewhere. Reload or merge before saving again."), this.code = "CANVAS_REVISION_CONFLICT", this.name = "CanvasRevisionConflictError", this.boardId = s, this.currentRevision = n;
  }
}
function e(a, s) {
  if (a.trim().length === 0)
    throw new t(`Canvas ${s} IDs cannot be empty.`);
  return a;
}
export {
  h as CANVAS_COLORS,
  p as CANVAS_COLOR_KEYS,
  u as CANVAS_FONTS,
  A as CANVAS_LIMITS,
  d as CanvasRevisionConflictError,
  t as CanvasValidationError,
  f as SHAPE_TOOLS,
  m as applyCanvasCommand,
  c as createCanvasAssetId,
  i as createCanvasAssetUrl,
  C as createCanvasBoardId,
  I as createCanvasDocument,
  O as createCanvasShapeId,
  v as createCanvasUserId,
  N as parseCanvasShape,
  _ as parseCanvasSnapshot,
  E as sanitizeCanvasFontFamily,
  R as sanitizeCanvasHtml,
  V as serializeCanvasSnapshot,
  r as validateCanvasAssetUrl,
  g as validateCanvasCssColor
};
