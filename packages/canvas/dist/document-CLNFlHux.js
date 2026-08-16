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
}, pe = [
  "rect",
  "ellipse",
  "triangle",
  "diamond",
  "hexagon",
  "star"
], me = {
  sans: { label: "고딕", stack: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif' },
  serif: { label: "명조", stack: 'ui-serif, "AppleMyungjo", "Noto Serif KR", "Noto Serif", "Batang", "Times New Roman", serif' },
  mono: { label: "모노", stack: 'ui-monospace, "SFMono-Regular", "JetBrains Mono", "D2Coding", "Consolas", "Courier New", monospace' },
  gothic: { label: "Gothic", stack: '"Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", "Pretendard", "Nanum Gothic", "Gulim", ui-sans-serif, sans-serif' },
  korean: { label: "Korean", stack: '"AppleMyungjo", "Noto Serif KR", "Noto Serif", "Batang", "Gungsuh", "GungsuhChe", ui-serif, serif' },
  chosunmyjo: { label: "조선일보명조", stack: '"조선일보명조", "AppleMyungjo", "Noto Serif KR", "Noto Serif", "NanumMyeongjo", ui-serif, serif' },
  hdhyundai: { label: "HD현대체", stack: '"HD현대체", "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", ui-sans-serif, sans-serif' },
  custom: { label: "직접입력", stack: "sans-serif" }
}, $ = {
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
}, we = Object.keys($);
function A(e) {
  var t, o;
  const a = e ?? ((o = (t = globalThis.crypto) == null ? void 0 : t.randomUUID) == null ? void 0 : o.call(t));
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
const N = /* @__PURE__ */ new Set(["b", "strong", "i", "em", "u", "br", "div", "p", "ul", "ol", "li"]), E = /* @__PURE__ */ new Set(["http:", "https:", "blob:"]), T = /^(?:#[0-9a-f]{3,8}|(?:rgb|hsl)a?\([0-9.%\s,/+\-]+\)|[a-z][a-z0-9-]{0,31})$/i, P = 8;
function R(e) {
  if (!e) return "";
  if (e.length > r.maxHtmlLength)
    throw new n("Canvas rich text is too long.");
  return typeof document < "u" ? F(e) : H(e);
}
function I(e) {
  const a = e.trim();
  if (!a) throw new n("Canvas asset URLs cannot be empty.");
  if (a.startsWith("/") || a.startsWith("./") || a.startsWith("../"))
    throw new n("Canvas asset URLs must use an explicit HTTP(S) or blob origin.");
  let t;
  try {
    t = new URL(a);
  } catch {
    throw new n("Canvas asset URLs must be absolute HTTP(S)/blob URLs or relative paths.");
  }
  if (!E.has(t.protocol))
    throw new n(`Canvas asset URL protocol is not supported: ${t.protocol}`);
  const o = z(_(t.pathname));
  if ((t.protocol === "http:" || t.protocol === "https:") && (o === "/api" || o.startsWith("/api/")))
    throw new n("Canvas asset URLs cannot target application API routes.");
  return t.toString();
}
function _(e) {
  let a = e;
  for (let t = 0; t < P; t += 1) {
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
function z(e) {
  const a = e.replace(/[\\/]+/g, "/").split("/"), t = [];
  for (const o of a)
    if (!(!o || o === ".")) {
      if (o === "..") {
        t.pop();
        continue;
      }
      t.push(o);
    }
  return `/${t.join("/")}`.toLowerCase();
}
function U(e) {
  const a = e.trim();
  if (!a || a.length > 64 || !T.test(a))
    throw new n("Canvas colors must be simple CSS color values.");
  return a;
}
function W(e) {
  if (/[{};<>\\]/.test(e))
    throw new n("Canvas font families must contain font names only.");
  const a = e.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 120);
  if (!a || a.includes("url(") || a.includes("/*"))
    throw new n("Canvas font families must contain font names only.");
  return a;
}
function F(e) {
  const a = document.createElement("template");
  return a.innerHTML = e, b(a.content, void 0, 0);
}
function b(e, a, t = 0) {
  if (t > r.maxHtmlDepth)
    throw new n("Canvas rich text nesting is too deep.");
  let o = "";
  return e.childNodes.forEach((s) => {
    if (s.nodeType === Node.TEXT_NODE) {
      o += L(s.textContent ?? "");
      return;
    }
    if (s.nodeType !== Node.ELEMENT_NODE) return;
    const l = s;
    if (!N.has(l.tagName.toLowerCase())) {
      o += b(l, void 0, t + 1);
      return;
    }
    const i = l.tagName.toLowerCase();
    if (i === "br") {
      o += "<br>";
      return;
    }
    const c = (a === "ul" || a === "ol") && (i === "ul" || i === "ol");
    c && (o += "<li>");
    const d = i === "ul" && l.dataset.listStyle === "dash" ? ' data-list-style="dash"' : "";
    o += `<${i}${d}>${b(l, i, t + 1)}</${i}>`, c && (o += "</li>");
  }), o;
}
function H(e) {
  var l;
  const a = /<!--[\s\S]*?-->|<\/?[a-z][^>]*>|[^<]+/gi;
  let t = "", o;
  const s = [];
  for (; (o = a.exec(e)) !== null; ) {
    const i = o[0];
    if (i.startsWith("<!--")) continue;
    if (!i.startsWith("<")) {
      t += L(i);
      continue;
    }
    const c = /^<\/?\s*([a-z0-9]+)[^>]*>$/i.exec(i);
    if (!c) continue;
    const d = c[1].toLowerCase();
    if (!N.has(d)) continue;
    if (d === "br") {
      i.startsWith("</") || (t += "<br>");
      continue;
    }
    if (i.startsWith("</")) {
      t += `</${d}>`;
      const w = s.pop();
      w != null && w.wrapsNestedList && (t += "</li>");
      continue;
    }
    const C = (l = s.at(-1)) == null ? void 0 : l.tag;
    if (s.length >= r.maxHtmlDepth)
      throw new n("Canvas rich text nesting is too deep.");
    const y = (C === "ul" || C === "ol") && (d === "ul" || d === "ol");
    y && (t += "<li>");
    const M = d === "ul" && /data-list-style\s*=\s*["']dash["']/i.test(i) ? ' data-list-style="dash"' : "";
    t += `<${d}${M}>`, s.push({ tag: d, wrapsNestedList: y });
  }
  return t;
}
function L(e) {
  return e.replace(/[&<>\"]/g, (a) => a === "&" ? "&amp;" : a === "<" ? "&lt;" : a === ">" ? "&gt;" : "&quot;");
}
function ve(e = {}) {
  return {
    id: e.id ?? "local-document",
    version: 1,
    shapes: [...e.shapes ?? []]
  };
}
function ge(e, a) {
  switch (a.type) {
    case "createShapes":
      return { ...e, shapes: [...e.shapes, ...a.shapes] };
    case "moveShapes": {
      const t = new Set(a.ids);
      return {
        ...e,
        shapes: e.shapes.map(
          (o) => t.has(o.id) ? { ...o, x: o.x + a.dx, y: o.y + a.dy } : o
        )
      };
    }
    case "deleteShapes": {
      const t = new Set(a.ids);
      return {
        ...e,
        shapes: e.shapes.filter((o) => t.has(o.id) ? !1 : o.type !== "arrow" ? !0 : !(o.fromId && t.has(o.fromId)) && !(o.toId && t.has(o.toId)))
      };
    }
    default:
      return ue(a);
  }
}
function be(e, a) {
  return {
    version: "canvas-v1",
    shapes: [...e.shapes],
    camera: { ...a }
  };
}
function Se(e) {
  if (!p(e)) throw new n("Canvas shape must be an object.");
  return D(e);
}
function Ce(e) {
  if (!p(e))
    throw new n("Canvas snapshot must be an object.");
  if (e.version !== "canvas-v1")
    throw new n(`Unsupported canvas snapshot version: ${String(e.version)}.`);
  if (!Array.isArray(e.shapes))
    throw new n("Canvas snapshot shapes must be an array.");
  if (e.shapes.length > r.maxShapes)
    throw new n(`Canvas snapshots cannot contain more than ${r.maxShapes} shapes.`);
  if (!p(e.camera))
    throw new n("Canvas snapshot camera must be an object.");
  const a = j(e.camera);
  return {
    version: "canvas-v1",
    shapes: e.shapes.map(D),
    camera: a
  };
}
function j(e) {
  const a = h(e, "x", "camera", r.coordinate), t = h(e, "y", "camera", r.coordinate), o = h(e, "z", "camera", r.cameraZoomMax);
  if (o < r.cameraZoomMin)
    throw new n("Canvas camera zoom is below the supported minimum.");
  return { x: a, y: t, z: o };
}
function D(e) {
  if (!p(e)) throw new n("Canvas shape must be an object.");
  const a = e.id, t = e.type;
  if (typeof a != "string" || a.trim().length === 0)
    throw new n("Canvas shape ID must be a non-empty string.");
  if (a.length > r.maxShortStringLength)
    throw new n("Canvas shape ID is too long.");
  if (typeof t != "string" || !se.has(t))
    throw new n(`Unsupported canvas shape type: ${String(t)}.`);
  const o = h(e, "x", "shape", r.coordinate), s = h(e, "y", "shape", r.coordinate), l = h(e, "w", "shape", r.coordinate), i = h(e, "h", "shape", r.coordinate), c = k(e, a, o, s, l, i);
  if (t === "draw") {
    if (!Array.isArray(e.points)) throw new n("Draw shapes require points.");
    return m(e), {
      ...c,
      type: "draw",
      points: K(e.points),
      strokeWidth: g(e),
      drawMode: ae(e)
    };
  }
  if (t === "arrow")
    return u(e, "drawMode", t), m(e), {
      ...c,
      type: "arrow",
      strokeWidth: g(e),
      fromId: x(e, "fromId"),
      toId: x(e, "toId"),
      bend: S(e, "bend", r.coordinate),
      routing: oe(e, "routing"),
      orthogonalVariant: ne(e, "orthogonalVariant"),
      orthogonalWaypoints: re(e, "orthogonalWaypoints"),
      arrowStart: O(e, "arrowStart"),
      arrowEnd: O(e, "arrowEnd")
    };
  if (t === "image")
    return u(e, "strokeWidth", t), u(e, "drawMode", t), m(e), { ...c, type: "image" };
  if (!de(t))
    throw new n(`Unsupported canvas shape type: ${t}.`);
  return u(e, "drawMode", t), m(e), he(t) ? { ...c, type: t, strokeWidth: g(e) } : (u(e, "strokeWidth", t), { ...c, type: t });
}
function k(e, a, t, o, s, l) {
  return {
    id: A(a),
    x: t,
    y: o,
    w: s,
    h: l,
    rotation: B(e, "rotation"),
    groupId: f(e, "groupId"),
    html: V(e, "html"),
    text: f(e, "text"),
    color: X(e, "color"),
    src: G(e, "src"),
    fileName: f(e, "fileName"),
    category: f(e, "category"),
    cardStyle: ee(e, "cardStyle"),
    fontSize: Y(e, "fontSize"),
    fontFamily: J(e, "fontFamily"),
    customFontFamily: Z(e, "customFontFamily"),
    textAlign: Q(e, "textAlign"),
    manualSize: q(e, "manualSize"),
    fillColor: v(e, "fillColor"),
    strokeColor: v(e, "strokeColor"),
    textColor: v(e, "textColor"),
    strokeStyle: te(e, "strokeStyle")
  };
}
function G(e, a) {
  const t = f(e, a);
  return t === void 0 ? void 0 : I(t);
}
function V(e, a) {
  const t = f(e, a);
  return t === void 0 ? void 0 : R(t);
}
function K(e) {
  if (e.length > r.maxDrawPoints)
    throw new n(`Draw shapes cannot contain more than ${r.maxDrawPoints} points.`);
  return e.map((a) => {
    if (!Array.isArray(a) || a.length !== 2)
      throw new n("Draw points must contain two coordinates.");
    const [t, o] = a;
    if (typeof t != "number" || !Number.isFinite(t) || Math.abs(t) > r.coordinate || typeof o != "number" || !Number.isFinite(o) || Math.abs(o) > r.coordinate)
      throw new n("Draw point coordinates must be finite numbers.");
    return [t, o];
  });
}
function h(e, a, t, o) {
  const s = e[a];
  if (typeof s != "number" || !Number.isFinite(s) || Math.abs(s) > o)
    throw new n(`Canvas ${t} ${a} must be a finite number within supported limits.`);
  return s;
}
function B(e, a) {
  return S(e, a, r.coordinate);
}
function S(e, a, t) {
  const o = e[a];
  if (o !== void 0) {
    if (typeof o != "number" || !Number.isFinite(o) || Math.abs(o) > t)
      throw new n(`Canvas shape ${a} must be a finite number within supported limits.`);
    return o;
  }
}
function f(e, a) {
  const t = e[a];
  if (t === void 0) return;
  if (typeof t != "string") throw new n(`Canvas shape ${a} must be a string.`);
  const o = a === "html" ? r.maxHtmlLength : a === "text" || a === "category" ? r.maxTextLength : r.maxShortStringLength;
  if (t.length > o) throw new n(`Canvas shape ${a} is too long.`);
  return t;
}
function Y(e, a) {
  const t = S(e, a, r.fontSizeMax);
  if (t !== void 0 && t < r.fontSizeMin)
    throw new n(`Canvas shape ${a} is below the supported minimum.`);
  return t;
}
function v(e, a) {
  const t = f(e, a);
  return t === void 0 ? void 0 : U(t);
}
function Z(e, a) {
  const t = f(e, a);
  return t === void 0 ? void 0 : W(t);
}
function q(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (typeof t != "boolean") throw new n(`Canvas shape ${a} must be a boolean.`);
    return t;
  }
}
function x(e, a) {
  const t = f(e, a);
  return t === void 0 ? void 0 : A(t);
}
function X(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (typeof t != "string" || !fe(t))
      throw new n(`Canvas shape ${a} is not a supported color.`);
    return t;
  }
}
function J(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "sans" && t !== "serif" && t !== "mono" && t !== "gothic" && t !== "korean" && t !== "chosunmyjo" && t !== "hdhyundai" && t !== "custom")
      throw new n(`Canvas shape ${a} is not a supported font.`);
    return t;
  }
}
function Q(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "left" && t !== "center" && t !== "right")
      throw new n(`Canvas shape ${a} is invalid.`);
    return t;
  }
}
function ee(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "solid" && t !== "glass") throw new n(`Canvas shape ${a} is invalid.`);
    return t;
  }
}
function te(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "solid" && t !== "dashed" && t !== "dotted")
      throw new n(`Canvas shape ${a} is invalid.`);
    return t;
  }
}
function g(e) {
  const a = e.strokeWidth;
  if (a !== void 0) {
    if (a !== 2 && a !== 4 && a !== 6 && a !== 8)
      throw new n("Canvas shape strokeWidth must be one of 2, 4, 6, or 8.");
    return a;
  }
}
function ae(e) {
  const a = e.drawMode;
  if (a !== void 0) {
    if (a !== "pen" && a !== "highlighter")
      throw new n("Canvas drawMode must be pen or highlighter.");
    return a;
  }
}
function u(e, a, t) {
  if (Object.prototype.hasOwnProperty.call(e, a))
    throw new n(`Canvas shape ${a} is not supported on ${t}.`);
}
function m(e) {
  if (Object.prototype.hasOwnProperty.call(e, "pressure"))
    throw new n("Canvas shapes do not support pressure data.");
}
function oe(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "straight" && t !== "curved" && t !== "orthogonal")
      throw new n(`Canvas shape ${a} is invalid.`);
    return t;
  }
}
function ne(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "elbow" && t !== "reverse" && t !== "u" && t !== "zigzag")
      throw new n(`Canvas shape ${a} is invalid.`);
    return t;
  }
}
function re(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (!Array.isArray(t) || t.length > 100)
      throw new n(`Canvas shape ${a} must be an array of at most 100 points.`);
    return t.map((o) => {
      if (!p(o)) throw new n(`Canvas shape ${a} points must be objects.`);
      const s = h(o, "x", a, r.coordinate), l = h(o, "y", a, r.coordinate);
      return { x: s, y: l };
    });
  }
}
function O(e, a) {
  const t = e[a];
  if (t !== void 0) {
    if (t !== "none" && t !== "arrow" && t !== "dot")
      throw new n(`Canvas shape ${a} is invalid.`);
    return t;
  }
}
function p(e) {
  return typeof e == "object" && e !== null;
}
const se = /* @__PURE__ */ new Set([
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
]), ie = /* @__PURE__ */ new Set([
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
]), le = /* @__PURE__ */ new Set([
  "frame",
  "rect",
  "ellipse",
  "triangle",
  "diamond",
  "hexagon",
  "star"
]), ce = /* @__PURE__ */ new Set(["yellow", "pink", "purple", "blue", "green", "peach", "grey", "brand", "ink", "red"]);
function de(e) {
  return ie.has(e);
}
function he(e) {
  return le.has(e);
}
function fe(e) {
  return ce.has(e);
}
function ue(e) {
  throw new n(`Unhandled canvas command: ${String(e)}.`);
}
export {
  n as C,
  pe as S,
  $ as a,
  we as b,
  me as c,
  r as d,
  ge as e,
  ve as f,
  A as g,
  Ce as h,
  R as i,
  be as j,
  U as k,
  Se as p,
  W as s,
  I as v
};
