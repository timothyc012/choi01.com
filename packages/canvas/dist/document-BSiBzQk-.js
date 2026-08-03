const s = {
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
}, rt = [
  "rect",
  "ellipse",
  "triangle",
  "diamond",
  "hexagon",
  "star"
], it = {
  sans: { label: "고딕", stack: '"Inter", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, -apple-system, sans-serif' },
  serif: { label: "명조", stack: '"Noto Serif KR", "Noto Serif", "Malgun Gothic", Batang, "Times New Roman", serif' },
  mono: { label: "모노", stack: '"JetBrains Mono", "D2Coding", "Consolas", "Courier New", ui-monospace, monospace' },
  gothic: { label: "Gothic", stack: '"Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", "Pretendard", "Nanum Gothic", "Gulim", sans-serif' },
  korean: { label: "Korean", stack: '"Noto Serif KR", "Noto Serif", "Batang", "Gungsuh", "GungsuhChe", serif' },
  chosunmyjo: { label: "조선일보명조", stack: '"조선일보명조", "Noto Serif KR", "Noto Serif", "NanumMyeongjo", serif' },
  hdhyundai: { label: "HD현대체", stack: '"HD현대체", "Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif' },
  custom: { label: "직접입력", stack: "sans-serif" }
}, O = {
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
}, ct = Object.keys(O);
function x(t) {
  var e, n;
  const a = t ?? ((n = (e = globalThis.crypto) == null ? void 0 : e.randomUUID) == null ? void 0 : n.call(e));
  if (!a)
    throw new o("Canvas shape IDs require a cryptographically secure random UUID.");
  if (a.trim().length === 0)
    throw new o("Canvas shape IDs cannot be empty.");
  return a;
}
class o extends Error {
  constructor(a) {
    super(a), this.code = "CANVAS_VALIDATION_ERROR", this.name = "CanvasValidationError";
  }
}
const y = /* @__PURE__ */ new Set(["b", "strong", "i", "em", "u", "br", "div", "p", "ul", "ol", "li"]), D = /* @__PURE__ */ new Set(["http:", "https:", "blob:"]), E = /^(?:#[0-9a-f]{3,8}|(?:rgb|hsl)a?\([0-9.%\s,/+\-]+\)|[a-z][a-z0-9-]{0,31})$/i, $ = 8;
function T(t) {
  if (!t) return "";
  if (t.length > s.maxHtmlLength)
    throw new o("Canvas rich text is too long.");
  return typeof document < "u" ? z(t) : U(t);
}
function R(t) {
  const a = t.trim();
  if (!a) throw new o("Canvas asset URLs cannot be empty.");
  if (a.startsWith("/") || a.startsWith("./") || a.startsWith("../"))
    throw new o("Canvas asset URLs must use an explicit HTTP(S) or blob origin.");
  let e;
  try {
    e = new URL(a);
  } catch {
    throw new o("Canvas asset URLs must be absolute HTTP(S)/blob URLs or relative paths.");
  }
  if (!D.has(e.protocol))
    throw new o(`Canvas asset URL protocol is not supported: ${e.protocol}`);
  const n = M(I(e.pathname));
  if ((e.protocol === "http:" || e.protocol === "https:") && (n === "/api" || n.startsWith("/api/")))
    throw new o("Canvas asset URLs cannot target application API routes.");
  return e.toString();
}
function I(t) {
  let a = t;
  for (let e = 0; e < $; e += 1) {
    let n;
    try {
      n = decodeURIComponent(a);
    } catch {
      throw new o("Canvas asset URLs cannot contain malformed escapes.");
    }
    if (n === a) return a;
    a = n;
  }
  throw new o("Canvas asset URLs contain too many encoded path layers.");
}
function M(t) {
  const a = t.replace(/[\\/]+/g, "/").split("/"), e = [];
  for (const n of a)
    if (!(!n || n === ".")) {
      if (n === "..") {
        e.pop();
        continue;
      }
      e.push(n);
    }
  return `/${e.join("/")}`.toLowerCase();
}
function P(t) {
  const a = t.trim();
  if (!a || a.length > 64 || !E.test(a))
    throw new o("Canvas colors must be simple CSS color values.");
  return a;
}
function _(t) {
  if (/[{};<>\\]/.test(t))
    throw new o("Canvas font families must contain font names only.");
  const a = t.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 120);
  if (!a || a.includes("url(") || a.includes("/*"))
    throw new o("Canvas font families must contain font names only.");
  return a;
}
function z(t) {
  const a = document.createElement("template");
  return a.innerHTML = t, p(a.content, void 0, 0);
}
function p(t, a, e = 0) {
  if (e > s.maxHtmlDepth)
    throw new o("Canvas rich text nesting is too deep.");
  let n = "";
  return t.childNodes.forEach((r) => {
    if (r.nodeType === Node.TEXT_NODE) {
      n += N(r.textContent ?? "");
      return;
    }
    if (r.nodeType !== Node.ELEMENT_NODE) return;
    const c = r;
    if (!y.has(c.tagName.toLowerCase())) {
      n += p(c, void 0, e + 1);
      return;
    }
    const i = c.tagName.toLowerCase();
    if (i === "br") {
      n += "<br>";
      return;
    }
    const l = (a === "ul" || a === "ol") && (i === "ul" || i === "ol");
    l && (n += "<li>");
    const h = i === "ul" && c.dataset.listStyle === "dash" ? ' data-list-style="dash"' : "";
    n += `<${i}${h}>${p(c, i, e + 1)}</${i}>`, l && (n += "</li>");
  }), n;
}
function U(t) {
  var c;
  const a = /<!--[\s\S]*?-->|<\/?[a-z][^>]*>|[^<]+/gi;
  let e = "", n;
  const r = [];
  for (; (n = a.exec(t)) !== null; ) {
    const i = n[0];
    if (i.startsWith("<!--")) continue;
    if (!i.startsWith("<")) {
      e += N(i);
      continue;
    }
    const l = /^<\/?\s*([a-z0-9]+)[^>]*>$/i.exec(i);
    if (!l) continue;
    const h = l[1].toLowerCase();
    if (!y.has(h)) continue;
    if (h === "br") {
      i.startsWith("</") || (e += "<br>");
      continue;
    }
    if (i.startsWith("</")) {
      e += `</${h}>`;
      const m = r.pop();
      m != null && m.wrapsNestedList && (e += "</li>");
      continue;
    }
    const v = (c = r.at(-1)) == null ? void 0 : c.tag;
    if (r.length >= s.maxHtmlDepth)
      throw new o("Canvas rich text nesting is too deep.");
    const b = (v === "ul" || v === "ol") && (h === "ul" || h === "ol");
    b && (e += "<li>");
    const L = h === "ul" && /data-list-style\s*=\s*["']dash["']/i.test(i) ? ' data-list-style="dash"' : "";
    e += `<${h}${L}>`, r.push({ tag: h, wrapsNestedList: b });
  }
  return e;
}
function N(t) {
  return t.replace(/[&<>\"]/g, (a) => a === "&" ? "&amp;" : a === "<" ? "&lt;" : a === ">" ? "&gt;" : "&quot;");
}
function lt(t = {}) {
  return {
    id: t.id ?? "local-document",
    version: 1,
    shapes: [...t.shapes ?? []]
  };
}
function ht(t, a) {
  switch (a.type) {
    case "createShapes":
      return { ...t, shapes: [...t.shapes, ...a.shapes] };
    case "moveShapes": {
      const e = new Set(a.ids);
      return {
        ...t,
        shapes: t.shapes.map(
          (n) => e.has(n.id) ? { ...n, x: n.x + a.dx, y: n.y + a.dy } : n
        )
      };
    }
    case "deleteShapes": {
      const e = new Set(a.ids);
      return {
        ...t,
        shapes: t.shapes.filter((n) => e.has(n.id) ? !1 : n.type !== "arrow" ? !0 : !(n.fromId && e.has(n.fromId)) && !(n.toId && e.has(n.toId)))
      };
    }
    default:
      return st(a);
  }
}
function dt(t, a) {
  return {
    version: "canvas-v1",
    shapes: [...t.shapes],
    camera: { ...a }
  };
}
function ft(t) {
  if (!u(t)) throw new o("Canvas shape must be an object.");
  return A(t);
}
function ut(t) {
  if (!u(t))
    throw new o("Canvas snapshot must be an object.");
  if (t.version !== "canvas-v1")
    throw new o(`Unsupported canvas snapshot version: ${String(t.version)}.`);
  if (!Array.isArray(t.shapes))
    throw new o("Canvas snapshot shapes must be an array.");
  if (t.shapes.length > s.maxShapes)
    throw new o(`Canvas snapshots cannot contain more than ${s.maxShapes} shapes.`);
  if (!u(t.camera))
    throw new o("Canvas snapshot camera must be an object.");
  const a = F(t.camera);
  return {
    version: "canvas-v1",
    shapes: t.shapes.map(A),
    camera: a
  };
}
function F(t) {
  const a = f(t, "x", "camera", s.coordinate), e = f(t, "y", "camera", s.coordinate), n = f(t, "z", "camera", s.cameraZoomMax);
  if (n < s.cameraZoomMin)
    throw new o("Canvas camera zoom is below the supported minimum.");
  return { x: a, y: e, z: n };
}
function A(t) {
  if (!u(t)) throw new o("Canvas shape must be an object.");
  const a = t.id, e = t.type;
  if (typeof a != "string" || a.trim().length === 0)
    throw new o("Canvas shape ID must be a non-empty string.");
  if (a.length > s.maxShortStringLength)
    throw new o("Canvas shape ID is too long.");
  if (typeof e != "string" || !tt.has(e))
    throw new o(`Unsupported canvas shape type: ${String(e)}.`);
  const n = f(t, "x", "shape", s.coordinate), r = f(t, "y", "shape", s.coordinate), c = f(t, "w", "shape", s.coordinate), i = f(t, "h", "shape", s.coordinate), l = H(t, a, n, r, c, i);
  if (e === "draw") {
    if (!Array.isArray(t.points)) throw new o("Draw shapes require points.");
    return { ...l, type: "draw", points: j(t.points) };
  }
  if (e === "arrow")
    return {
      ...l,
      type: "arrow",
      fromId: S(t, "fromId"),
      toId: S(t, "toId"),
      bend: w(t, "bend", s.coordinate),
      routing: Q(t, "routing"),
      arrowStart: C(t, "arrowStart"),
      arrowEnd: C(t, "arrowEnd")
    };
  if (e === "image") return { ...l, type: "image" };
  if (!nt(e))
    throw new o(`Unsupported canvas shape type: ${e}.`);
  return { ...l, type: e };
}
function H(t, a, e, n, r, c) {
  return {
    id: x(a),
    x: e,
    y: n,
    w: r,
    h: c,
    rotation: k(t, "rotation"),
    groupId: d(t, "groupId"),
    html: W(t, "html"),
    text: d(t, "text"),
    color: Z(t, "color"),
    src: G(t, "src"),
    fileName: d(t, "fileName"),
    category: d(t, "category"),
    cardStyle: X(t, "cardStyle"),
    fontSize: K(t, "fontSize"),
    fontFamily: q(t, "fontFamily"),
    customFontFamily: V(t, "customFontFamily"),
    textAlign: Y(t, "textAlign"),
    manualSize: B(t, "manualSize"),
    fillColor: g(t, "fillColor"),
    textColor: g(t, "textColor"),
    strokeStyle: J(t, "strokeStyle")
  };
}
function G(t, a) {
  const e = d(t, a);
  return e === void 0 ? void 0 : R(e);
}
function W(t, a) {
  const e = d(t, a);
  return e === void 0 ? void 0 : T(e);
}
function j(t) {
  if (t.length > s.maxDrawPoints)
    throw new o(`Draw shapes cannot contain more than ${s.maxDrawPoints} points.`);
  return t.map((a) => {
    if (!Array.isArray(a) || a.length !== 2)
      throw new o("Draw points must contain two coordinates.");
    const [e, n] = a;
    if (typeof e != "number" || !Number.isFinite(e) || Math.abs(e) > s.coordinate || typeof n != "number" || !Number.isFinite(n) || Math.abs(n) > s.coordinate)
      throw new o("Draw point coordinates must be finite numbers.");
    return [e, n];
  });
}
function f(t, a, e, n) {
  const r = t[a];
  if (typeof r != "number" || !Number.isFinite(r) || Math.abs(r) > n)
    throw new o(`Canvas ${e} ${a} must be a finite number within supported limits.`);
  return r;
}
function k(t, a) {
  return w(t, a, s.coordinate);
}
function w(t, a, e) {
  const n = t[a];
  if (n !== void 0) {
    if (typeof n != "number" || !Number.isFinite(n) || Math.abs(n) > e)
      throw new o(`Canvas shape ${a} must be a finite number within supported limits.`);
    return n;
  }
}
function d(t, a) {
  const e = t[a];
  if (e === void 0) return;
  if (typeof e != "string") throw new o(`Canvas shape ${a} must be a string.`);
  const n = a === "html" ? s.maxHtmlLength : a === "text" || a === "category" ? s.maxTextLength : s.maxShortStringLength;
  if (e.length > n) throw new o(`Canvas shape ${a} is too long.`);
  return e;
}
function K(t, a) {
  const e = w(t, a, s.fontSizeMax);
  if (e !== void 0 && e < s.fontSizeMin)
    throw new o(`Canvas shape ${a} is below the supported minimum.`);
  return e;
}
function g(t, a) {
  const e = d(t, a);
  return e === void 0 ? void 0 : P(e);
}
function V(t, a) {
  const e = d(t, a);
  return e === void 0 ? void 0 : _(e);
}
function B(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (typeof e != "boolean") throw new o(`Canvas shape ${a} must be a boolean.`);
    return e;
  }
}
function S(t, a) {
  const e = d(t, a);
  return e === void 0 ? void 0 : x(e);
}
function Z(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (typeof e != "string" || !ot(e))
      throw new o(`Canvas shape ${a} is not a supported color.`);
    return e;
  }
}
function q(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "sans" && e !== "serif" && e !== "mono" && e !== "gothic" && e !== "korean" && e !== "chosunmyjo" && e !== "hdhyundai" && e !== "custom")
      throw new o(`Canvas shape ${a} is not a supported font.`);
    return e;
  }
}
function Y(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "left" && e !== "center" && e !== "right")
      throw new o(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function X(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "solid" && e !== "glass") throw new o(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function J(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "solid" && e !== "dashed" && e !== "dotted")
      throw new o(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function Q(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "straight" && e !== "curved" && e !== "orthogonal")
      throw new o(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function C(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "none" && e !== "arrow" && e !== "dot")
      throw new o(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function u(t) {
  return typeof t == "object" && t !== null;
}
const tt = /* @__PURE__ */ new Set([
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
]), et = /* @__PURE__ */ new Set([
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
]), at = /* @__PURE__ */ new Set(["yellow", "pink", "purple", "blue", "green", "peach", "grey", "brand", "ink", "red"]);
function nt(t) {
  return et.has(t);
}
function ot(t) {
  return at.has(t);
}
function st(t) {
  throw new o(`Unhandled canvas command: ${String(t)}.`);
}
export {
  o as C,
  rt as S,
  O as a,
  ct as b,
  it as c,
  s as d,
  ht as e,
  lt as f,
  x as g,
  ut as h,
  T as i,
  dt as j,
  P as k,
  ft as p,
  _ as s,
  R as v
};
