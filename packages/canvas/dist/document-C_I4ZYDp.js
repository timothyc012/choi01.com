const r = {
  coordinate: 1e9,
  cameraZoomMin: 0.05,
  cameraZoomMax: 16,
  fontSizeMin: 1,
  fontSizeMax: 512,
  maxShapes: 1e4,
  maxDrawPoints: 5e4,
  maxExportDimension: 16384,
  maxExportPixels: 67108864,
  maxHtmlLength: 2e5,
  maxHtmlDepth: 256,
  maxTextLength: 1e5,
  maxShortStringLength: 512
}, pt = [
  "rect",
  "ellipse",
  "triangle",
  "diamond",
  "hexagon",
  "star"
], mt = {
  sans: { label: "고딕", stack: '"Inter", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, -apple-system, sans-serif' },
  serif: { label: "명조", stack: '"Noto Serif KR", "Noto Serif", "Malgun Gothic", Batang, "Times New Roman", serif' },
  mono: { label: "모노", stack: '"JetBrains Mono", "D2Coding", "Consolas", "Courier New", ui-monospace, monospace' },
  gothic: { label: "Gothic", stack: '"Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", "Pretendard", "Nanum Gothic", "Gulim", sans-serif' },
  korean: { label: "Korean", stack: '"Noto Serif KR", "Noto Serif", "Batang", "Gungsuh", "GungsuhChe", serif' },
  chosunmyjo: { label: "조선일보명조", stack: '"조선일보명조", "Noto Serif KR", "Noto Serif", "NanumMyeongjo", serif' },
  hdhyundai: { label: "HD현대체", stack: '"HD현대체", "Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif' },
  custom: { label: "직접입력", stack: "sans-serif" }
}, E = {
  yellow: { bg: "#fef08a", border: "#facc15", text: "#854d0e", label: "노랑" },
  pink: { bg: "#fbcfe8", border: "#f472b6", text: "#9d174d", label: "분홍" },
  purple: { bg: "#e9d5ff", border: "#c084fc", text: "#6b21a8", label: "보라" },
  blue: { bg: "#bae6fd", border: "#38bdf8", text: "#0369a1", label: "하늘" },
  green: { bg: "#bbf7d0", border: "#4ade80", text: "#15803d", label: "연두" },
  peach: { bg: "#fed7aa", border: "#fb923c", text: "#9a3412", label: "살구" },
  grey: { bg: "#e2e8f0", border: "#94a3b8", text: "#334155", label: "회색" },
  brand: { bg: "#e6f0ff", border: "#003087", text: "#003087", label: "브랜드" },
  red: { bg: "#fecaca", border: "#ef4444", text: "#991b1b", label: "빨강" },
  ink: { bg: "#1e293b", border: "#0f172a", text: "#f8fafc", label: "먹" }
}, wt = Object.keys(E);
function A(t) {
  var e, o;
  const a = t ?? ((o = (e = globalThis.crypto) == null ? void 0 : e.randomUUID) == null ? void 0 : o.call(e));
  if (!a)
    throw new n("Canvas shape IDs require a cryptographically secure random UUID.");
  if (a.trim().length === 0)
    throw new n("Canvas shape IDs cannot be empty.");
  return a;
}
class n extends Error {
  constructor(a) {
    super(a), this.code = "CANVAS_VALIDATION_ERROR", this.name = "CanvasValidationError";
  }
}
const N = /* @__PURE__ */ new Set(["b", "strong", "i", "em", "u", "br", "div", "p", "ul", "ol", "li"]), M = /* @__PURE__ */ new Set(["http:", "https:", "blob:"]), T = /^(?:#[0-9a-f]{3,8}|(?:rgb|hsl)a?\([0-9.%\s,/+\-]+\)|[a-z][a-z0-9-]{0,31})$/i, P = 8;
function R(t) {
  if (!t) return "";
  if (t.length > r.maxHtmlLength)
    throw new n("Canvas rich text is too long.");
  return typeof document < "u" ? F(t) : H(t);
}
function I(t) {
  const a = t.trim();
  if (!a) throw new n("Canvas asset URLs cannot be empty.");
  if (a.startsWith("/") || a.startsWith("./") || a.startsWith("../"))
    throw new n("Canvas asset URLs must use an explicit HTTP(S) or blob origin.");
  let e;
  try {
    e = new URL(a);
  } catch {
    throw new n("Canvas asset URLs must be absolute HTTP(S)/blob URLs or relative paths.");
  }
  if (!M.has(e.protocol))
    throw new n(`Canvas asset URL protocol is not supported: ${e.protocol}`);
  const o = z(_(e.pathname));
  if ((e.protocol === "http:" || e.protocol === "https:") && (o === "/api" || o.startsWith("/api/")))
    throw new n("Canvas asset URLs cannot target application API routes.");
  return e.toString();
}
function _(t) {
  let a = t;
  for (let e = 0; e < P; e += 1) {
    let o;
    try {
      o = decodeURIComponent(a);
    } catch {
      throw new n("Canvas asset URLs cannot contain malformed escapes.");
    }
    if (o === a) return a;
    a = o;
  }
  throw new n("Canvas asset URLs contain too many encoded path layers.");
}
function z(t) {
  const a = t.replace(/[\\/]+/g, "/").split("/"), e = [];
  for (const o of a)
    if (!(!o || o === ".")) {
      if (o === "..") {
        e.pop();
        continue;
      }
      e.push(o);
    }
  return `/${e.join("/")}`.toLowerCase();
}
function W(t) {
  const a = t.trim();
  if (!a || a.length > 64 || !T.test(a))
    throw new n("Canvas colors must be simple CSS color values.");
  return a;
}
function U(t) {
  if (/[{};<>\\]/.test(t))
    throw new n("Canvas font families must contain font names only.");
  const a = t.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 120);
  if (!a || a.includes("url(") || a.includes("/*"))
    throw new n("Canvas font families must contain font names only.");
  return a;
}
function F(t) {
  const a = document.createElement("template");
  return a.innerHTML = t, b(a.content, void 0, 0);
}
function b(t, a, e = 0) {
  if (e > r.maxHtmlDepth)
    throw new n("Canvas rich text nesting is too deep.");
  let o = "";
  return t.childNodes.forEach((s) => {
    if (s.nodeType === Node.TEXT_NODE) {
      o += L(s.textContent ?? "");
      return;
    }
    if (s.nodeType !== Node.ELEMENT_NODE) return;
    const c = s;
    if (!N.has(c.tagName.toLowerCase())) {
      o += b(c, void 0, e + 1);
      return;
    }
    const i = c.tagName.toLowerCase();
    if (i === "br") {
      o += "<br>";
      return;
    }
    const l = (a === "ul" || a === "ol") && (i === "ul" || i === "ol");
    l && (o += "<li>");
    const d = i === "ul" && c.dataset.listStyle === "dash" ? ' data-list-style="dash"' : "";
    o += `<${i}${d}>${b(c, i, e + 1)}</${i}>`, l && (o += "</li>");
  }), o;
}
function H(t) {
  var c;
  const a = /<!--[\s\S]*?-->|<\/?[a-z][^>]*>|[^<]+/gi;
  let e = "", o;
  const s = [];
  for (; (o = a.exec(t)) !== null; ) {
    const i = o[0];
    if (i.startsWith("<!--")) continue;
    if (!i.startsWith("<")) {
      e += L(i);
      continue;
    }
    const l = /^<\/?\s*([a-z0-9]+)[^>]*>$/i.exec(i);
    if (!l) continue;
    const d = l[1].toLowerCase();
    if (!N.has(d)) continue;
    if (d === "br") {
      i.startsWith("</") || (e += "<br>");
      continue;
    }
    if (i.startsWith("</")) {
      e += `</${d}>`;
      const w = s.pop();
      w != null && w.wrapsNestedList && (e += "</li>");
      continue;
    }
    const S = (c = s.at(-1)) == null ? void 0 : c.tag;
    if (s.length >= r.maxHtmlDepth)
      throw new n("Canvas rich text nesting is too deep.");
    const C = (S === "ul" || S === "ol") && (d === "ul" || d === "ol");
    C && (e += "<li>");
    const $ = d === "ul" && /data-list-style\s*=\s*["']dash["']/i.test(i) ? ' data-list-style="dash"' : "";
    e += `<${d}${$}>`, s.push({ tag: d, wrapsNestedList: C });
  }
  return e;
}
function L(t) {
  return t.replace(/[&<>\"]/g, (a) => a === "&" ? "&amp;" : a === "<" ? "&lt;" : a === ">" ? "&gt;" : "&quot;");
}
function vt(t = {}) {
  return {
    id: t.id ?? "local-document",
    version: 1,
    shapes: [...t.shapes ?? []]
  };
}
function bt(t, a) {
  switch (a.type) {
    case "createShapes":
      return { ...t, shapes: [...t.shapes, ...a.shapes] };
    case "moveShapes": {
      const e = new Set(a.ids);
      return {
        ...t,
        shapes: t.shapes.map(
          (o) => e.has(o.id) ? { ...o, x: o.x + a.dx, y: o.y + a.dy } : o
        )
      };
    }
    case "deleteShapes": {
      const e = new Set(a.ids);
      return {
        ...t,
        shapes: t.shapes.filter((o) => e.has(o.id) ? !1 : o.type !== "arrow" ? !0 : !(o.fromId && e.has(o.fromId)) && !(o.toId && e.has(o.toId)))
      };
    }
    default:
      return ut(a);
  }
}
function gt(t, a) {
  return {
    version: "canvas-v1",
    shapes: [...t.shapes],
    camera: { ...a }
  };
}
function St(t) {
  if (!p(t)) throw new n("Canvas shape must be an object.");
  return D(t);
}
function Ct(t) {
  if (!p(t))
    throw new n("Canvas snapshot must be an object.");
  if (t.version !== "canvas-v1")
    throw new n(`Unsupported canvas snapshot version: ${String(t.version)}.`);
  if (!Array.isArray(t.shapes))
    throw new n("Canvas snapshot shapes must be an array.");
  if (t.shapes.length > r.maxShapes)
    throw new n(`Canvas snapshots cannot contain more than ${r.maxShapes} shapes.`);
  if (!p(t.camera))
    throw new n("Canvas snapshot camera must be an object.");
  const a = j(t.camera);
  return {
    version: "canvas-v1",
    shapes: t.shapes.map(D),
    camera: a
  };
}
function j(t) {
  const a = h(t, "x", "camera", r.coordinate), e = h(t, "y", "camera", r.coordinate), o = h(t, "z", "camera", r.cameraZoomMax);
  if (o < r.cameraZoomMin)
    throw new n("Canvas camera zoom is below the supported minimum.");
  return { x: a, y: e, z: o };
}
function D(t) {
  if (!p(t)) throw new n("Canvas shape must be an object.");
  const a = t.id, e = t.type;
  if (typeof a != "string" || a.trim().length === 0)
    throw new n("Canvas shape ID must be a non-empty string.");
  if (a.length > r.maxShortStringLength)
    throw new n("Canvas shape ID is too long.");
  if (typeof e != "string" || !st.has(e))
    throw new n(`Unsupported canvas shape type: ${String(e)}.`);
  const o = h(t, "x", "shape", r.coordinate), s = h(t, "y", "shape", r.coordinate), c = h(t, "w", "shape", r.coordinate), i = h(t, "h", "shape", r.coordinate), l = G(t, a, o, s, c, i);
  if (e === "draw") {
    if (!Array.isArray(t.points)) throw new n("Draw shapes require points.");
    return m(t), {
      ...l,
      type: "draw",
      points: K(t.points),
      strokeWidth: v(t),
      drawMode: at(t)
    };
  }
  if (e === "arrow")
    return u(t, "drawMode", e), m(t), {
      ...l,
      type: "arrow",
      strokeWidth: v(t),
      fromId: x(t, "fromId"),
      toId: x(t, "toId"),
      bend: g(t, "bend", r.coordinate),
      routing: ot(t, "routing"),
      orthogonalVariant: nt(t, "orthogonalVariant"),
      orthogonalWaypoints: rt(t, "orthogonalWaypoints"),
      arrowStart: O(t, "arrowStart"),
      arrowEnd: O(t, "arrowEnd")
    };
  if (e === "image")
    return u(t, "strokeWidth", e), u(t, "drawMode", e), m(t), { ...l, type: "image" };
  if (!dt(e))
    throw new n(`Unsupported canvas shape type: ${e}.`);
  return u(t, "drawMode", e), m(t), ht(e) ? { ...l, type: e, strokeWidth: v(t) } : (u(t, "strokeWidth", e), { ...l, type: e });
}
function G(t, a, e, o, s, c) {
  return {
    id: A(a),
    x: e,
    y: o,
    w: s,
    h: c,
    rotation: B(t, "rotation"),
    groupId: f(t, "groupId"),
    html: V(t, "html"),
    text: f(t, "text"),
    color: X(t, "color"),
    src: k(t, "src"),
    fileName: f(t, "fileName"),
    category: f(t, "category"),
    cardStyle: tt(t, "cardStyle"),
    fontSize: Y(t, "fontSize"),
    fontFamily: J(t, "fontFamily"),
    customFontFamily: Z(t, "customFontFamily"),
    textAlign: Q(t, "textAlign"),
    manualSize: q(t, "manualSize"),
    fillColor: y(t, "fillColor"),
    textColor: y(t, "textColor"),
    strokeStyle: et(t, "strokeStyle")
  };
}
function k(t, a) {
  const e = f(t, a);
  return e === void 0 ? void 0 : I(e);
}
function V(t, a) {
  const e = f(t, a);
  return e === void 0 ? void 0 : R(e);
}
function K(t) {
  if (t.length > r.maxDrawPoints)
    throw new n(`Draw shapes cannot contain more than ${r.maxDrawPoints} points.`);
  return t.map((a) => {
    if (!Array.isArray(a) || a.length !== 2)
      throw new n("Draw points must contain two coordinates.");
    const [e, o] = a;
    if (typeof e != "number" || !Number.isFinite(e) || Math.abs(e) > r.coordinate || typeof o != "number" || !Number.isFinite(o) || Math.abs(o) > r.coordinate)
      throw new n("Draw point coordinates must be finite numbers.");
    return [e, o];
  });
}
function h(t, a, e, o) {
  const s = t[a];
  if (typeof s != "number" || !Number.isFinite(s) || Math.abs(s) > o)
    throw new n(`Canvas ${e} ${a} must be a finite number within supported limits.`);
  return s;
}
function B(t, a) {
  return g(t, a, r.coordinate);
}
function g(t, a, e) {
  const o = t[a];
  if (o !== void 0) {
    if (typeof o != "number" || !Number.isFinite(o) || Math.abs(o) > e)
      throw new n(`Canvas shape ${a} must be a finite number within supported limits.`);
    return o;
  }
}
function f(t, a) {
  const e = t[a];
  if (e === void 0) return;
  if (typeof e != "string") throw new n(`Canvas shape ${a} must be a string.`);
  const o = a === "html" ? r.maxHtmlLength : a === "text" || a === "category" ? r.maxTextLength : r.maxShortStringLength;
  if (e.length > o) throw new n(`Canvas shape ${a} is too long.`);
  return e;
}
function Y(t, a) {
  const e = g(t, a, r.fontSizeMax);
  if (e !== void 0 && e < r.fontSizeMin)
    throw new n(`Canvas shape ${a} is below the supported minimum.`);
  return e;
}
function y(t, a) {
  const e = f(t, a);
  return e === void 0 ? void 0 : W(e);
}
function Z(t, a) {
  const e = f(t, a);
  return e === void 0 ? void 0 : U(e);
}
function q(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (typeof e != "boolean") throw new n(`Canvas shape ${a} must be a boolean.`);
    return e;
  }
}
function x(t, a) {
  const e = f(t, a);
  return e === void 0 ? void 0 : A(e);
}
function X(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (typeof e != "string" || !ft(e))
      throw new n(`Canvas shape ${a} is not a supported color.`);
    return e;
  }
}
function J(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "sans" && e !== "serif" && e !== "mono" && e !== "gothic" && e !== "korean" && e !== "chosunmyjo" && e !== "hdhyundai" && e !== "custom")
      throw new n(`Canvas shape ${a} is not a supported font.`);
    return e;
  }
}
function Q(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "left" && e !== "center" && e !== "right")
      throw new n(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function tt(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "solid" && e !== "glass") throw new n(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function et(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "solid" && e !== "dashed" && e !== "dotted")
      throw new n(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function v(t) {
  const a = t.strokeWidth;
  if (a !== void 0) {
    if (a !== 2 && a !== 4 && a !== 6 && a !== 8)
      throw new n("Canvas shape strokeWidth must be one of 2, 4, 6, or 8.");
    return a;
  }
}
function at(t) {
  const a = t.drawMode;
  if (a !== void 0) {
    if (a !== "pen" && a !== "highlighter")
      throw new n("Canvas drawMode must be pen or highlighter.");
    return a;
  }
}
function u(t, a, e) {
  if (Object.prototype.hasOwnProperty.call(t, a))
    throw new n(`Canvas shape ${a} is not supported on ${e}.`);
}
function m(t) {
  if (Object.prototype.hasOwnProperty.call(t, "pressure"))
    throw new n("Canvas shapes do not support pressure data.");
}
function ot(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "straight" && e !== "curved" && e !== "orthogonal")
      throw new n(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function nt(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "elbow" && e !== "reverse" && e !== "u" && e !== "zigzag")
      throw new n(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function rt(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (!Array.isArray(e) || e.length > 100)
      throw new n(`Canvas shape ${a} must be an array of at most 100 points.`);
    return e.map((o) => {
      if (!p(o)) throw new n(`Canvas shape ${a} points must be objects.`);
      const s = h(o, "x", a, r.coordinate), c = h(o, "y", a, r.coordinate);
      return { x: s, y: c };
    });
  }
}
function O(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "none" && e !== "arrow" && e !== "dot")
      throw new n(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function p(t) {
  return typeof t == "object" && t !== null;
}
const st = /* @__PURE__ */ new Set([
  "note",
  "card",
  "text",
  "arrow",
  "draw",
  "image",
  "frame",
  "rect",
  "ellipse",
  "triangle",
  "diamond",
  "hexagon",
  "star"
]), it = /* @__PURE__ */ new Set([
  "note",
  "card",
  "text",
  "frame",
  "rect",
  "ellipse",
  "triangle",
  "diamond",
  "hexagon",
  "star"
]), ct = /* @__PURE__ */ new Set([
  "frame",
  "rect",
  "ellipse",
  "triangle",
  "diamond",
  "hexagon",
  "star"
]), lt = /* @__PURE__ */ new Set(["yellow", "pink", "purple", "blue", "green", "peach", "grey", "brand", "ink", "red"]);
function dt(t) {
  return it.has(t);
}
function ht(t) {
  return ct.has(t);
}
function ft(t) {
  return lt.has(t);
}
function ut(t) {
  throw new n(`Unhandled canvas command: ${String(t)}.`);
}
export {
  n as C,
  pt as S,
  E as a,
  wt as b,
  mt as c,
  r as d,
  bt as e,
  vt as f,
  A as g,
  Ct as h,
  R as i,
  gt as j,
  W as k,
  St as p,
  U as s,
  I as v
};
