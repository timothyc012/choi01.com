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
}, ct = [
  "rect",
  "ellipse",
  "triangle",
  "diamond",
  "hexagon",
  "star"
], lt = {
  sans: { label: "고딕", stack: '"Inter", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", system-ui, -apple-system, sans-serif' },
  serif: { label: "명조", stack: '"Noto Serif KR", "Noto Serif", "Malgun Gothic", Batang, "Times New Roman", serif' },
  mono: { label: "모노", stack: '"JetBrains Mono", "D2Coding", "Consolas", "Courier New", ui-monospace, monospace' },
  gothic: { label: "Gothic", stack: '"Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", "Pretendard", "Nanum Gothic", "Gulim", sans-serif' },
  korean: { label: "Korean", stack: '"Noto Serif KR", "Noto Serif", "Batang", "Gungsuh", "GungsuhChe", serif' },
  chosunmyjo: { label: "조선일보명조", stack: '"조선일보명조", "Noto Serif KR", "Noto Serif", "NanumMyeongjo", serif' },
  hdhyundai: { label: "HD현대체", stack: '"HD현대체", "Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif' },
  custom: { label: "직접입력", stack: "sans-serif" }
}, L = {
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
}, ht = Object.keys(L);
function x(e) {
  var t, n;
  const a = e ?? ((n = (t = globalThis.crypto) == null ? void 0 : t.randomUUID) == null ? void 0 : n.call(t));
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
const y = /* @__PURE__ */ new Set(["b", "strong", "i", "em", "u", "br", "div", "p", "ul", "ol", "li"]), D = /* @__PURE__ */ new Set(["http:", "https:", "blob:"]), $ = /^(?:#[0-9a-f]{3,8}|(?:rgb|hsl)a?\([0-9.%\s,/+\-]+\)|[a-z][a-z0-9-]{0,31})$/i, E = 8;
function T(e) {
  if (!e) return "";
  if (e.length > r.maxHtmlLength)
    throw new o("Canvas rich text is too long.");
  return typeof document < "u" ? _(e) : U(e);
}
function R(e) {
  const a = e.trim();
  if (!a) throw new o("Canvas asset URLs cannot be empty.");
  if (a.startsWith("/") || a.startsWith("./") || a.startsWith("../"))
    throw new o("Canvas asset URLs must use an explicit HTTP(S) or blob origin.");
  let t;
  try {
    t = new URL(a);
  } catch {
    throw new o("Canvas asset URLs must be absolute HTTP(S)/blob URLs or relative paths.");
  }
  if (!D.has(t.protocol))
    throw new o(`Canvas asset URL protocol is not supported: ${t.protocol}`);
  const n = M(I(t.pathname));
  if ((t.protocol === "http:" || t.protocol === "https:") && (n === "/api" || n.startsWith("/api/")))
    throw new o("Canvas asset URLs cannot target application API routes.");
  return t.toString();
}
function I(e) {
  let a = e;
  for (let t = 0; t < E; t += 1) {
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
function M(e) {
  const a = e.replace(/[\\/]+/g, "/").split("/"), t = [];
  for (const n of a)
    if (!(!n || n === ".")) {
      if (n === "..") {
        t.pop();
        continue;
      }
      t.push(n);
    }
  return `/${t.join("/")}`.toLowerCase();
}
function z(e) {
  const a = e.trim();
  if (!a || a.length > 64 || !$.test(a))
    throw new o("Canvas colors must be simple CSS color values.");
  return a;
}
function P(e) {
  if (/[{};<>\\]/.test(e))
    throw new o("Canvas font families must contain font names only.");
  const a = e.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 120);
  if (!a || a.includes("url(") || a.includes("/*"))
    throw new o("Canvas font families must contain font names only.");
  return a;
}
function _(e) {
  const a = document.createElement("template");
  return a.innerHTML = e, p(a.content, void 0, 0);
}
function p(e, a, t = 0) {
  if (t > r.maxHtmlDepth)
    throw new o("Canvas rich text nesting is too deep.");
  let n = "";
  return e.childNodes.forEach((s) => {
    if (s.nodeType === Node.TEXT_NODE) {
      n += A(s.textContent ?? "");
      return;
    }
    if (s.nodeType !== Node.ELEMENT_NODE) return;
    const c = s;
    if (!y.has(c.tagName.toLowerCase())) {
      n += p(c, void 0, t + 1);
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
    n += `<${i}${h}>${p(c, i, t + 1)}</${i}>`, l && (n += "</li>");
  }), n;
}
function U(e) {
  var c;
  const a = /<!--[\s\S]*?-->|<\/?[a-z][^>]*>|[^<]+/gi;
  let t = "", n;
  const s = [];
  for (; (n = a.exec(e)) !== null; ) {
    const i = n[0];
    if (i.startsWith("<!--")) continue;
    if (!i.startsWith("<")) {
      t += A(i);
      continue;
    }
    const l = /^<\/?\s*([a-z0-9]+)[^>]*>$/i.exec(i);
    if (!l) continue;
    const h = l[1].toLowerCase();
    if (!y.has(h)) continue;
    if (h === "br") {
      i.startsWith("</") || (t += "<br>");
      continue;
    }
    if (i.startsWith("</")) {
      t += `</${h}>`;
      const m = s.pop();
      m != null && m.wrapsNestedList && (t += "</li>");
      continue;
    }
    const v = (c = s.at(-1)) == null ? void 0 : c.tag;
    if (s.length >= r.maxHtmlDepth)
      throw new o("Canvas rich text nesting is too deep.");
    const b = (v === "ul" || v === "ol") && (h === "ul" || h === "ol");
    b && (t += "<li>");
    const O = h === "ul" && /data-list-style\s*=\s*["']dash["']/i.test(i) ? ' data-list-style="dash"' : "";
    t += `<${h}${O}>`, s.push({ tag: h, wrapsNestedList: b });
  }
  return t;
}
function A(e) {
  return e.replace(/[&<>\"]/g, (a) => a === "&" ? "&amp;" : a === "<" ? "&lt;" : a === ">" ? "&gt;" : "&quot;");
}
function dt(e = {}) {
  return {
    id: e.id ?? "local-document",
    version: 1,
    shapes: [...e.shapes ?? []]
  };
}
function ft(e, a) {
  switch (a.type) {
    case "createShapes":
      return { ...e, shapes: [...e.shapes, ...a.shapes] };
    case "moveShapes": {
      const t = new Set(a.ids);
      return {
        ...e,
        shapes: e.shapes.map(
          (n) => t.has(n.id) ? { ...n, x: n.x + a.dx, y: n.y + a.dy } : n
        )
      };
    }
    case "deleteShapes": {
      const t = new Set(a.ids);
      return {
        ...e,
        shapes: e.shapes.filter((n) => t.has(n.id) ? !1 : n.type !== "arrow" ? !0 : !(n.fromId && t.has(n.fromId)) && !(n.toId && t.has(n.toId)))
      };
    }
    default:
      return it(a);
  }
}
function ut(e, a) {
  return {
    version: "canvas-v1",
    shapes: [...e.shapes],
    camera: { ...a }
  };
}
function mt(e) {
  if (!u(e)) throw new o("Canvas shape must be an object.");
  return N(e);
}
function pt(e) {
  if (!u(e))
    throw new o("Canvas snapshot must be an object.");
  if (e.version !== "canvas-v1")
    throw new o(`Unsupported canvas snapshot version: ${String(e.version)}.`);
  if (!Array.isArray(e.shapes))
    throw new o("Canvas snapshot shapes must be an array.");
  if (e.shapes.length > r.maxShapes)
    throw new o(`Canvas snapshots cannot contain more than ${r.maxShapes} shapes.`);
  if (!u(e.camera))
    throw new o("Canvas snapshot camera must be an object.");
  const a = F(e.camera);
  return {
    version: "canvas-v1",
    shapes: e.shapes.map(N),
    camera: a
  };
}
function F(e) {
  const a = d(e, "x", "camera", r.coordinate), t = d(e, "y", "camera", r.coordinate), n = d(e, "z", "camera", r.cameraZoomMax);
  if (n < r.cameraZoomMin)
    throw new o("Canvas camera zoom is below the supported minimum.");
  return { x: a, y: t, z: n };
}
function N(e) {
  if (!u(e)) throw new o("Canvas shape must be an object.");
  const a = e.id, t = e.type;
  if (typeof a != "string" || a.trim().length === 0)
    throw new o("Canvas shape ID must be a non-empty string.");
  if (a.length > r.maxShortStringLength)
    throw new o("Canvas shape ID is too long.");
  if (typeof t != "string" || !at.has(t))
    throw new o(`Unsupported canvas shape type: ${String(t)}.`);
  const n = d(e, "x", "shape", r.coordinate), s = d(e, "y", "shape", r.coordinate), c = d(e, "w", "shape", r.coordinate), i = d(e, "h", "shape", r.coordinate), l = H(e, a, n, s, c, i);
  if (t === "draw") {
    if (!Array.isArray(e.points)) throw new o("Draw shapes require points.");
    return { ...l, type: "draw", points: j(e.points) };
  }
  if (t === "arrow")
    return {
      ...l,
      type: "arrow",
      fromId: S(e, "fromId"),
      toId: S(e, "toId"),
      bend: w(e, "bend", r.coordinate),
      routing: Q(e, "routing"),
      orthogonalVariant: tt(e, "orthogonalVariant"),
      orthogonalWaypoints: et(e, "orthogonalWaypoints"),
      arrowStart: C(e, "arrowStart"),
      arrowEnd: C(e, "arrowEnd")
    };
  if (t === "image") return { ...l, type: "image" };
  if (!rt(t))
    throw new o(`Unsupported canvas shape type: ${t}.`);
  return { ...l, type: t };
}
function H(e, a, t, n, s, c) {
  return {
    id: x(a),
    x: t,
    y: n,
    w: s,
    h: c,
    rotation: V(e, "rotation"),
    groupId: f(e, "groupId"),
    html: G(e, "html"),
    text: f(e, "text"),
    color: Z(e, "color"),
    src: W(e, "src"),
    fileName: f(e, "fileName"),
    category: f(e, "category"),
    cardStyle: X(e, "cardStyle"),
    fontSize: K(e, "fontSize"),
    fontFamily: q(e, "fontFamily"),
    customFontFamily: B(e, "customFontFamily"),
    textAlign: Y(e, "textAlign"),
    manualSize: k(e, "manualSize"),
    fillColor: g(e, "fillColor"),
    textColor: g(e, "textColor"),
    strokeStyle: J(e, "strokeStyle")
  };
}
function W(e, a) {
  const t = f(e, a);
  return t === void 0 ? void 0 : R(t);
}
function G(e, a) {
  const t = f(e, a);
  return t === void 0 ? void 0 : T(t);
}
function j(e) {
  if (e.length > r.maxDrawPoints)
    throw new o(`Draw shapes cannot contain more than ${r.maxDrawPoints} points.`);
  return e.map((a) => {
    if (!Array.isArray(a) || a.length !== 2)
      throw new o("Draw points must contain two coordinates.");
    const [t, n] = a;
    if (typeof t != "number" || !Number.isFinite(t) || Math.abs(t) > r.coordinate || typeof n != "number" || !Number.isFinite(n) || Math.abs(n) > r.coordinate)
      throw new o("Draw point coordinates must be finite numbers.");
    return [t, n];
  });
}
function d(e, a, t, n) {
  const s = e[a];
  if (typeof s != "number" || !Number.isFinite(s) || Math.abs(s) > n)
    throw new o(`Canvas ${t} ${a} must be a finite number within supported limits.`);
  return s;
}
function V(e, a) {
  return w(e, a, r.coordinate);
}
function w(e, a, t) {
  const n = e[a];
  if (n !== void 0) {
    if (typeof n != "number" || !Number.isFinite(n) || Math.abs(n) > t)
      throw new o(`Canvas shape ${a} must be a finite number within supported limits.`);
    return n;
  }
}
function f(e, a) {
  const t = e[a];
  if (t === void 0) return;
  if (typeof t != "string") throw new o(`Canvas shape ${a} must be a string.`);
  const n = a === "html" ? r.maxHtmlLength : a === "text" || a === "category" ? r.maxTextLength : r.maxShortStringLength;
  if (t.length > n) throw new o(`Canvas shape ${a} is too long.`);
  return t;
}
function K(e, a) {
  const t = w(e, a, r.fontSizeMax);
  if (t !== void 0 && t < r.fontSizeMin)
    throw new o(`Canvas shape ${a} is below the supported minimum.`);
  return t;
}
function g(e, a) {
  const t = f(e, a);
  return t === void 0 ? void 0 : z(t);
}
function B(e, a) {
  const t = f(e, a);
  return t === void 0 ? void 0 : P(t);
}
function k(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (typeof t != "boolean") throw new o(`Canvas shape ${a} must be a boolean.`);
    return t;
  }
}
function S(e, a) {
  const t = f(e, a);
  return t === void 0 ? void 0 : x(t);
}
function Z(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (typeof t != "string" || !st(t))
      throw new o(`Canvas shape ${a} is not a supported color.`);
    return t;
  }
}
function q(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "sans" && t !== "serif" && t !== "mono" && t !== "gothic" && t !== "korean" && t !== "chosunmyjo" && t !== "hdhyundai" && t !== "custom")
      throw new o(`Canvas shape ${a} is not a supported font.`);
    return t;
  }
}
function Y(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "left" && t !== "center" && t !== "right")
      throw new o(`Canvas shape ${a} is invalid.`);
    return t;
  }
}
function X(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "solid" && t !== "glass") throw new o(`Canvas shape ${a} is invalid.`);
    return t;
  }
}
function J(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "solid" && t !== "dashed" && t !== "dotted")
      throw new o(`Canvas shape ${a} is invalid.`);
    return t;
  }
}
function Q(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "straight" && t !== "curved" && t !== "orthogonal")
      throw new o(`Canvas shape ${a} is invalid.`);
    return t;
  }
}
function tt(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "elbow" && t !== "reverse" && t !== "u" && t !== "zigzag")
      throw new o(`Canvas shape ${a} is invalid.`);
    return t;
  }
}
function et(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (!Array.isArray(t) || t.length > 100)
      throw new o(`Canvas shape ${a} must be an array of at most 100 points.`);
    return t.map((n) => {
      if (!u(n)) throw new o(`Canvas shape ${a} points must be objects.`);
      const s = d(n, "x", a, r.coordinate), c = d(n, "y", a, r.coordinate);
      return { x: s, y: c };
    });
  }
}
function C(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "none" && t !== "arrow" && t !== "dot")
      throw new o(`Canvas shape ${a} is invalid.`);
    return t;
  }
}
function u(e) {
  return typeof e == "object" && e !== null;
}
const at = /* @__PURE__ */ new Set([
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
]), nt = /* @__PURE__ */ new Set([
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
]), ot = /* @__PURE__ */ new Set(["yellow", "pink", "purple", "blue", "green", "peach", "grey", "brand", "ink", "red"]);
function rt(e) {
  return nt.has(e);
}
function st(e) {
  return ot.has(e);
}
function it(e) {
  throw new o(`Unhandled canvas command: ${String(e)}.`);
}
export {
  o as C,
  ct as S,
  L as a,
  ht as b,
  lt as c,
  r as d,
  ft as e,
  dt as f,
  x as g,
  pt as h,
  T as i,
  ut as j,
  z as k,
  mt as p,
  P as s,
  R as v
};
