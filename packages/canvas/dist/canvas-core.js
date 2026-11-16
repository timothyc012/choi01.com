import { p as Z, i as v, c as g, C as D, v as M } from "./navigation-CJfchp2F.js";
import { a as K, b as G, d as Q, e as tt, S as et, f as nt, g as ot, h as rt, m as at, n as it, j as st, s as ct, k as dt, l as ut, o as lt, q as ft } from "./navigation-CJfchp2F.js";
const O = {
  sticky: [200, 200],
  text: [240, 70],
  shape: [180, 100],
  mindmap: [180, 76],
  file: [240, 300],
  frame: [480, 320]
}, w = {
  yellow: "yellow",
  pink: "pink",
  purple: "purple",
  blue: "blue",
  green: "green",
  orange: "peach",
  gray: "grey",
  white: void 0
}, z = {
  yellow: "yellow",
  pink: "pink",
  purple: "purple",
  blue: "blue",
  green: "green",
  peach: "orange",
  grey: "gray",
  red: "pink",
  brand: void 0,
  ink: void 0
};
function l(t) {
  throw new D(t);
}
function y(t, e) {
  return (typeof t != "number" || !Number.isFinite(t)) && l(`Zero1 canvas: ${e} must be a finite number.`), t;
}
function x(t, e) {
  if (t != null)
    return y(t, e);
}
function p(t, e) {
  if (t != null)
    return typeof t != "string" && l(`Zero1 canvas: ${e} must be a string.`), t;
}
function E(t) {
  const e = O[t.kind ?? ""] ?? [270, 220];
  return [
    x(t.elementWidth, "elementWidth") ?? e[0],
    x(t.elementHeight, "elementHeight") ?? e[1]
  ];
}
function R(t) {
  return [t.title ?? "", t.text ?? "", t.note ?? ""].filter((n) => n !== "").join(`
`);
}
function b(t) {
  if (t != null)
    return (typeof t != "string" || !(t in w)) && l(`Zero1 canvas: unknown color ${String(t)}.`), w[t];
}
function N(t, e) {
  if (e === "highlighter") return 8;
  const n = [2, 4, 6, 8], a = t ?? 4;
  return n.reduce((s, i) => Math.abs(i - a) < Math.abs(s - a) ? i : s);
}
function A(t) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(t);
}
function m() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx".replace(/x/g, () => Math.floor(Math.random() * 16).toString(16));
}
function _(t) {
  let e = t;
  if (typeof e == "string")
    try {
      e = JSON.parse(e);
    } catch {
      l("Zero1 canvas: input is not valid JSON.");
    }
  return v(e) || l("Zero1 canvas: root must be an object."), Array.isArray(e.items) || l("Zero1 canvas: items must be an array."), e.connections !== void 0 && !Array.isArray(e.connections) && l("Zero1 canvas: connections must be an array."), e.sheets !== void 0 && !Array.isArray(e.sheets) && l("Zero1 canvas: sheets must be an array."), e;
}
function T(t, e) {
  const n = t.sheets ?? [];
  if (n.length === 0) return;
  const a = p(t.activeSheetID, "activeSheetID");
  return n.find((s) => s.id === e) ?? (e === void 0 ? n.find((s) => s.id === a) : void 0) ?? (e === void 0 ? n[0] : void 0) ?? void 0;
}
function $(t) {
  const e = x(t == null ? void 0 : t.zoom, "zoom") ?? 1, n = x(t == null ? void 0 : t.panX, "panX") ?? 0, a = x(t == null ? void 0 : t.panY, "panY") ?? 0;
  return e <= 0 && l("Zero1 canvas: viewport zoom must be positive."), { x: -n / e, y: -a / e, z: e };
}
function U(t, e) {
  const n = p(t.id, "id"), a = p(t.kind, "kind");
  n || l("Zero1 canvas: every item needs an id."), a || l(`Zero1 canvas: item ${n} has no kind.`);
  const s = y(t.x, `item ${n} x`), i = y(t.y, `item ${n} y`), [u, c] = E(t), o = {
    id: g(n),
    x: s - u / 2,
    y: i - c / 2,
    w: u,
    h: c,
    ...t.locked === !0 ? { locked: !0 } : {},
    ...b(t.color) ? { color: b(t.color) } : {}
  };
  switch (a) {
    case "sticky":
      return { ...o, type: "note", text: t.text ?? t.title ?? "" };
    case "note":
    case "quote":
    case "page":
      return { ...o, type: "card", text: R(t), ...t.category ? { category: t.category } : {} };
    case "text":
      return { ...o, type: "text", text: t.text ?? t.title ?? "" };
    case "shape": {
      const r = t.shape === "ellipse" ? "ellipse" : t.shape === "diamond" ? "diamond" : "rect";
      return { ...o, type: r, text: t.title ?? "" };
    }
    case "mindmap":
      return { ...o, type: "rect", text: t.title ?? "" };
    case "frame":
      return { ...o, type: "frame", text: t.title ?? "" };
    case "ink": {
      const r = t.inkPoints;
      Array.isArray(r) || l(`Zero1 canvas: ink item ${n} has no inkPoints.`);
      const d = r.map((h) => {
        const C = Array.isArray(h) ? h[0] : v(h) ? h.x : void 0, S = Array.isArray(h) ? h[1] : v(h) ? h.y : void 0;
        return (C === void 0 || S === void 0 || Array.isArray(h) && h.length !== 2) && l(`Zero1 canvas: ink item ${n} has a malformed point.`), [s - u / 2 + y(C, "inkPoints.x"), i - c / 2 + y(S, "inkPoints.y")];
      }), I = t.inkStyle === "highlighter" ? "highlighter" : "pen";
      return {
        ...o,
        type: "draw",
        points: d,
        strokeWidth: N(x(t.inkWidth, "inkWidth"), I),
        drawMode: I
      };
    }
    case "image":
    case "file":
      return e.push(t.title || a), null;
    default:
      l(`Zero1 canvas: unknown item kind ${a}.`);
  }
}
function L(t, e) {
  const n = p(t.sourceID, "sourceID"), a = p(t.targetID, "targetID");
  (!n || !a) && l("Zero1 canvas: connection needs sourceID and targetID.");
  const s = e.get(n), i = e.get(a);
  if (!s || !i) return null;
  const u = Math.min(s.x, i.x), c = Math.min(s.y, i.y), f = Math.max(s.x + s.w, i.x + i.w), o = Math.max(s.y + s.h, i.y + i.h), r = t.isMindmap === !0, d = t.arrow === !0 ? "arrow" : "none";
  return {
    id: g(t.id ?? m()),
    type: "arrow",
    x: u,
    y: c,
    w: Math.max(1, f - u),
    h: Math.max(1, o - c),
    fromId: g(n),
    toId: g(a),
    text: t.label ?? "",
    arrowStart: "none",
    arrowEnd: r ? "none" : d,
    routing: r ? "curved" : t.routing === "orthogonal" ? "orthogonal" : "straight"
  };
}
function P(t, e = {}) {
  const n = _(t), a = T(n, e.sheet), s = a == null ? void 0 : a.id, i = [], u = [], c = /* @__PURE__ */ new Map();
  for (const r of n.items) {
    if (r.sheetID !== void 0 && r.sheetID !== null && s !== void 0 && r.sheetID !== s)
      continue;
    const d = U(r, i);
    d && (u.push(d), c.set(r.id, { x: d.x, y: d.y, w: d.w, h: d.h }));
  }
  for (const r of n.connections ?? []) {
    const d = L(r, c);
    d && u.push(d);
  }
  const f = Z({
    version: "canvas-v1",
    shapes: u,
    camera: $(a == null ? void 0 : a.viewport)
  }), o = (n.sheets ?? []).filter((r) => typeof r.id == "string").map((r) => ({ id: r.id, title: typeof r.title == "string" ? r.title : "" }));
  return { snapshot: f, dropped: i, sheets: o, sheetId: s };
}
function W(t, e) {
  const n = e.idMap.get(t.id);
  if (!n) return null;
  const a = t.x + t.w / 2, s = t.y + t.h / 2, i = {
    id: n,
    x: a,
    y: s,
    sheetID: e.sheetId,
    category: typeof t.category == "string" && ["idea", "question", "evidence", "action", "reference"].includes(t.category) ? t.category : "reference",
    elementWidth: t.w,
    elementHeight: t.h
  };
  t.locked && (i.locked = !0);
  const u = t.color !== void 0 ? z[t.color] : void 0;
  switch (u !== void 0 && (i.color = u), t.type) {
    case "note":
      return { ...i, kind: "sticky", title: "", text: t.text ?? "" };
    case "card": {
      const c = (t.text ?? "").split(`
`);
      return { ...i, kind: "note", title: c[0] ?? "", text: c.slice(1).join(`
`) };
    }
    case "text":
      return { ...i, kind: "text", title: "", text: t.text ?? "" };
    case "rect":
    case "ellipse":
    case "diamond":
    case "triangle":
    case "hexagon":
    case "star": {
      const c = t.type === "ellipse" ? "ellipse" : t.type === "diamond" ? "diamond" : "rectangle";
      return { ...i, kind: "shape", title: t.text ?? "", text: "", shape: c };
    }
    case "frame":
      return { ...i, kind: "frame", title: t.text ?? "", text: "" };
    case "draw": {
      const c = t.drawMode === "highlighter" ? "highlighter" : "pen";
      return {
        ...i,
        kind: "ink",
        title: "",
        text: "",
        inkPoints: t.points.map(([f, o]) => [f - t.x, o - t.y]),
        inkWidth: t.strokeWidth ?? 4,
        inkStyle: c
      };
    }
    default:
      return null;
  }
}
function V(t, e) {
  const n = m(), a = /* @__PURE__ */ new Map();
  for (const o of t.shapes) {
    const r = o.id;
    a.set(r, A(r) ? r : m());
  }
  const s = { sheetId: n, idMap: a }, i = [];
  for (const o of t.shapes) {
    if (o.type === "arrow" || o.type === "image") continue;
    const r = W(o, s);
    r && i.push(r);
  }
  const u = new Set(i.map((o) => o.id)), c = [];
  for (const o of t.shapes) {
    if (o.type !== "arrow" || !o.fromId || !o.toId) continue;
    const r = a.get(o.fromId), d = a.get(o.toId);
    !r || !d || !u.has(r) || !u.has(d) || c.push({
      id: A(o.id) ? o.id : m(),
      sourceID: r,
      targetID: d,
      label: o.text ?? "",
      isMindmap: o.routing === "curved",
      arrow: o.arrowEnd === "arrow",
      routing: o.routing === "orthogonal" ? "orthogonal" : "straight"
    });
  }
  const f = e ?? { x: 0, y: 0, z: 1 };
  return {
    version: 6,
    items: i,
    connections: c,
    sheets: [{ id: n, title: "Canvas", viewport: { panX: -f.x * f.z, panY: -f.y * f.z, zoom: f.z } }],
    activeSheetID: n
  };
}
function Y(t) {
  return M(t);
}
function H(t) {
  return k(t, "board");
}
function X(t) {
  return k(t, "user");
}
function j(t) {
  return k(t, "asset");
}
class J extends Error {
  constructor(e, n) {
    super("The canvas changed elsewhere. Reload or merge before saving again."), this.code = "CANVAS_REVISION_CONFLICT", this.name = "CanvasRevisionConflictError", this.boardId = e, this.currentRevision = n;
  }
}
function k(t, e) {
  if (t.trim().length === 0)
    throw new D(`Canvas ${e} IDs cannot be empty.`);
  return t;
}
export {
  K as CANVAS_COLORS,
  G as CANVAS_COLOR_KEYS,
  Q as CANVAS_FONTS,
  tt as CANVAS_LIMITS,
  J as CanvasRevisionConflictError,
  D as CanvasValidationError,
  et as SHAPE_TOOLS,
  nt as applyCanvasCommand,
  V as choisToZero1,
  j as createCanvasAssetId,
  Y as createCanvasAssetUrl,
  H as createCanvasBoardId,
  ot as createCanvasDocument,
  g as createCanvasShapeId,
  X as createCanvasUserId,
  rt as findCanvasShapes,
  at as minimapLayout,
  it as nextCanvasShape,
  st as parseCanvasShape,
  Z as parseCanvasSnapshot,
  ct as sanitizeCanvasFontFamily,
  dt as sanitizeCanvasHtml,
  ut as serializeCanvasSnapshot,
  lt as smartZoomTarget,
  M as validateCanvasAssetUrl,
  ft as validateCanvasCssColor,
  P as zero1ToChois
};
