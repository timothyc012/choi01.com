const l = {
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
}, St = [
  "rect",
  "ellipse",
  "triangle",
  "diamond",
  "hexagon",
  "star"
], yt = {
  sans: { label: "고딕", stack: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif' },
  serif: { label: "명조", stack: 'ui-serif, "AppleMyungjo", "Noto Serif KR", "Noto Serif", "Batang", "Times New Roman", serif' },
  mono: { label: "모노", stack: 'ui-monospace, "SFMono-Regular", "JetBrains Mono", "D2Coding", "Consolas", "Courier New", monospace' },
  gothic: { label: "Gothic", stack: '"Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", "Pretendard", "Nanum Gothic", "Gulim", ui-sans-serif, sans-serif' },
  korean: { label: "Korean", stack: '"AppleMyungjo", "Noto Serif KR", "Noto Serif", "Batang", "Gungsuh", "GungsuhChe", ui-serif, serif' },
  chosunmyjo: { label: "조선일보명조", stack: '"조선일보명조", "AppleMyungjo", "Noto Serif KR", "Noto Serif", "NanumMyeongjo", ui-serif, serif' },
  hdhyundai: { label: "HD현대체", stack: '"HD현대체", "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", ui-sans-serif, sans-serif' },
  custom: { label: "직접입력", stack: "sans-serif" }
}, k = {
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
}, xt = Object.keys(k);
function L(t) {
  var e, o;
  const a = t ?? ((o = (e = globalThis.crypto) == null ? void 0 : e.randomUUID) == null ? void 0 : o.call(e));
  if (!a)
    throw new r("Canvas shape IDs require a cryptographically secure random UUID.");
  if (a.trim().length === 0)
    throw new r("Canvas shape IDs cannot be empty.");
  return a;
}
class r extends Error {
  constructor(a) {
    super(a), this.code = "CANVAS_VALIDATION_ERROR", this.name = "CanvasValidationError";
  }
}
const D = /* @__PURE__ */ new Set(["b", "strong", "i", "em", "u", "br", "div", "p", "ul", "ol", "li"]), z = /* @__PURE__ */ new Set(["http:", "https:", "blob:"]), T = /^(?:#[0-9a-f]{3,8}|(?:rgb|hsl)a?\([0-9.%\s,/+\-]+\)|[a-z][a-z0-9-]{0,31})$/i, P = 8;
function R(t) {
  if (!t) return "";
  if (t.length > l.maxHtmlLength)
    throw new r("Canvas rich text is too long.");
  return typeof document < "u" ? H(t) : G(t);
}
function W(t) {
  const a = t.trim();
  if (!a) throw new r("Canvas asset URLs cannot be empty.");
  if (a.startsWith("data:")) {
    const n = a.indexOf(","), s = a.slice(0, n), i = a.slice(n + 1);
    if (a.length <= 32 * 1024 * 1024 && ["data:image/png;base64", "data:image/jpeg;base64", "data:image/webp;base64"].includes(s) && i.length > 0 && i.length % 4 === 0 && /^[A-Za-z0-9+/]+={0,2}$/.test(i)) return a;
    throw new r("Canvas embedded assets must be bounded base64 PNG, JPEG, or WebP images.");
  }
  if (a.startsWith("/") || a.startsWith("./") || a.startsWith("../"))
    throw new r("Canvas asset URLs must use an explicit HTTP(S) or blob origin.");
  let e;
  try {
    e = new URL(a);
  } catch {
    throw new r("Canvas asset URLs must be absolute HTTP(S)/blob URLs or relative paths.");
  }
  if (!z.has(e.protocol))
    throw new r(`Canvas asset URL protocol is not supported: ${e.protocol}`);
  const o = F(_(e.pathname));
  if ((e.protocol === "http:" || e.protocol === "https:") && (o === "/api" || o.startsWith("/api/")))
    throw new r("Canvas asset URLs cannot target application API routes.");
  return e.toString();
}
function _(t) {
  let a = t;
  for (let e = 0; e < P; e += 1) {
    let o;
    try {
      o = decodeURIComponent(a);
    } catch {
      throw new r("Canvas asset URLs cannot contain malformed escapes.");
    }
    if (o === a) return a;
    a = o;
  }
  throw new r("Canvas asset URLs contain too many encoded path layers.");
}
function F(t) {
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
function U(t) {
  const a = t.trim();
  if (!a || a.length > 64 || !T.test(a))
    throw new r("Canvas colors must be simple CSS color values.");
  return a;
}
function j(t) {
  if (/[{};<>\\]/.test(t))
    throw new r("Canvas font families must contain font names only.");
  const a = t.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 120);
  if (!a || a.includes("url(") || a.includes("/*"))
    throw new r("Canvas font families must contain font names only.");
  return a;
}
function H(t) {
  const a = document.createElement("template");
  return a.innerHTML = t, y(a.content, void 0, 0);
}
function y(t, a, e = 0) {
  if (e > l.maxHtmlDepth)
    throw new r("Canvas rich text nesting is too deep.");
  let o = "";
  return t.childNodes.forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE) {
      o += E(n.textContent ?? "");
      return;
    }
    if (n.nodeType !== Node.ELEMENT_NODE) return;
    const s = n;
    if (!D.has(s.tagName.toLowerCase())) {
      o += y(s, void 0, e + 1);
      return;
    }
    const i = s.tagName.toLowerCase();
    if (i === "br") {
      o += "<br>";
      return;
    }
    const h = (a === "ul" || a === "ol") && (i === "ul" || i === "ol");
    h && (o += "<li>");
    const c = i === "ul" && s.dataset.listStyle === "dash" ? ' data-list-style="dash"' : "";
    o += `<${i}${c}>${y(s, i, e + 1)}</${i}>`, h && (o += "</li>");
  }), o;
}
function G(t) {
  var s;
  const a = /<!--[\s\S]*?-->|<\/?[a-z][^>]*>|[^<]+/gi;
  let e = "", o;
  const n = [];
  for (; (o = a.exec(t)) !== null; ) {
    const i = o[0];
    if (i.startsWith("<!--")) continue;
    if (!i.startsWith("<")) {
      e += E(i);
      continue;
    }
    const h = /^<\/?\s*([a-z0-9]+)[^>]*>$/i.exec(i);
    if (!h) continue;
    const c = h[1].toLowerCase();
    if (!D.has(c)) continue;
    if (c === "br") {
      i.startsWith("</") || (e += "<br>");
      continue;
    }
    if (i.startsWith("</")) {
      e += `</${c}>`;
      const v = n.pop();
      v != null && v.wrapsNestedList && (e += "</li>");
      continue;
    }
    const f = (s = n.at(-1)) == null ? void 0 : s.tag;
    if (n.length >= l.maxHtmlDepth)
      throw new r("Canvas rich text nesting is too deep.");
    const C = (f === "ul" || f === "ol") && (c === "ul" || c === "ol");
    C && (e += "<li>");
    const I = c === "ul" && /data-list-style\s*=\s*["']dash["']/i.test(i) ? ' data-list-style="dash"' : "";
    e += `<${c}${I}>`, n.push({ tag: c, wrapsNestedList: C });
  }
  return e;
}
function E(t) {
  return t.replace(/[&<>\"]/g, (a) => a === "&" ? "&amp;" : a === "<" ? "&lt;" : a === ">" ? "&gt;" : "&quot;");
}
function Ct(t = {}) {
  return {
    id: t.id ?? "local-document",
    version: 1,
    shapes: [...t.shapes ?? []]
  };
}
function Ot(t, a) {
  switch (a.type) {
    case "createShapes":
      return { ...t, shapes: [...t.shapes, ...a.shapes] };
    case "moveShapes": {
      const e = new Set(a.ids), o = new Set(t.shapes.filter((n) => !n.locked).map((n) => n.id));
      return {
        ...t,
        shapes: t.shapes.map(
          (n) => !n.locked && (e.has(n.id) || n.parentId !== void 0 && e.has(n.parentId) && o.has(n.parentId)) ? { ...n, x: n.x + a.dx, y: n.y + a.dy } : n
        )
      };
    }
    case "deleteShapes": {
      const e = new Set(t.shapes.filter((o) => !o.locked && a.ids.includes(o.id)).map((o) => o.id));
      return {
        ...t,
        shapes: t.shapes.filter((o) => e.has(o.id) || o.parentId && e.has(o.parentId) ? !1 : o.type !== "arrow" ? !0 : !(o.fromId && e.has(o.fromId)) && !(o.toId && e.has(o.toId)))
      };
    }
    case "lockShapes": {
      const e = new Set(a.ids);
      return {
        ...t,
        shapes: t.shapes.map(
          (o) => e.has(o.id) ? { ...o, locked: a.locked || void 0 } : o
        )
      };
    }
    default:
      return wt(a);
  }
}
function Mt(t, a) {
  return {
    version: "canvas-v1",
    shapes: [...t.shapes],
    camera: { ...a }
  };
}
function At(t) {
  if (!p(t)) throw new r("Canvas shape must be an object.");
  return $(t);
}
function Nt(t) {
  if (!p(t))
    throw new r("Canvas snapshot must be an object.");
  if (t.version !== "canvas-v1")
    throw new r(`Unsupported canvas snapshot version: ${String(t.version)}.`);
  if (!Array.isArray(t.shapes))
    throw new r("Canvas snapshot shapes must be an array.");
  if (t.shapes.length > l.maxShapes)
    throw new r(`Canvas snapshots cannot contain more than ${l.maxShapes} shapes.`);
  if (!p(t.camera))
    throw new r("Canvas snapshot camera must be an object.");
  const a = V(t.camera);
  return {
    version: "canvas-v1",
    shapes: t.shapes.map($),
    camera: a
  };
}
function V(t) {
  const a = u(t, "x", "camera", l.coordinate), e = u(t, "y", "camera", l.coordinate), o = u(t, "z", "camera", l.cameraZoomMax);
  if (o < l.cameraZoomMin)
    throw new r("Canvas camera zoom is below the supported minimum.");
  return { x: a, y: e, z: o };
}
function $(t) {
  if (!p(t)) throw new r("Canvas shape must be an object.");
  const a = t.id, e = t.type;
  if (typeof a != "string" || a.trim().length === 0)
    throw new r("Canvas shape ID must be a non-empty string.");
  if (a.length > l.maxShortStringLength)
    throw new r("Canvas shape ID is too long.");
  if (typeof e != "string" || !ct.has(e))
    throw new r(`Unsupported canvas shape type: ${String(e)}.`);
  const o = u(t, "x", "shape", l.coordinate), n = u(t, "y", "shape", l.coordinate), s = u(t, "w", "shape", l.coordinate), i = u(t, "h", "shape", l.coordinate), h = K(t, a, o, n, s, i);
  if (e !== "draw" && m(t, "inkStyle", e), e === "draw") {
    if (!Array.isArray(t.points)) throw new r("Draw shapes require points.");
    return w(t), {
      ...h,
      type: "draw",
      points: Y(t.points),
      strokeWidth: S(t),
      drawMode: nt(t),
      inkStyle: rt(t)
    };
  }
  if (e === "arrow")
    return m(t, "drawMode", e), w(t), {
      ...h,
      type: "arrow",
      strokeWidth: S(t),
      fromId: M(t, "fromId"),
      toId: M(t, "toId"),
      bend: x(t, "bend", l.coordinate),
      routing: st(t, "routing"),
      orthogonalVariant: it(t, "orthogonalVariant"),
      orthogonalWaypoints: lt(t, "orthogonalWaypoints"),
      arrowStart: A(t, "arrowStart"),
      arrowEnd: A(t, "arrowEnd")
    };
  if (e === "image")
    return m(t, "strokeWidth", e), m(t, "drawMode", e), w(t), { ...h, type: "image" };
  if (!ut(e))
    throw new r(`Unsupported canvas shape type: ${e}.`);
  return m(t, "drawMode", e), w(t), mt(e) ? { ...h, type: e, strokeWidth: S(t) } : (m(t, "strokeWidth", e), { ...h, type: e });
}
function K(t, a, e, o, n, s) {
  return {
    id: L(a),
    x: e,
    y: o,
    w: n,
    h: s,
    // false is the default; it parses but is never written back out.
    locked: O(t, "locked") || void 0,
    rotation: q(t, "rotation"),
    groupId: d(t, "groupId"),
    parentId: d(t, "parentId"),
    html: Z(t, "html"),
    text: d(t, "text"),
    color: Q(t, "color"),
    src: B(t, "src"),
    fileName: d(t, "fileName"),
    category: d(t, "category"),
    cardStyle: at(t, "cardStyle"),
    fontSize: X(t, "fontSize"),
    fontFamily: tt(t, "fontFamily"),
    customFontFamily: J(t, "customFontFamily"),
    textAlign: et(t, "textAlign"),
    manualSize: O(t, "manualSize"),
    fillColor: b(t, "fillColor"),
    strokeColor: b(t, "strokeColor"),
    textColor: b(t, "textColor"),
    strokeStyle: ot(t, "strokeStyle")
  };
}
function B(t, a) {
  const e = t[a], o = typeof e == "string" && e.startsWith("data:") ? e : d(t, a);
  return o === void 0 ? void 0 : W(o);
}
function Z(t, a) {
  const e = d(t, a);
  return e === void 0 ? void 0 : R(e);
}
function Y(t) {
  if (t.length > l.maxDrawPoints)
    throw new r(`Draw shapes cannot contain more than ${l.maxDrawPoints} points.`);
  return t.map((a) => {
    if (!Array.isArray(a) || a.length !== 2)
      throw new r("Draw points must contain two coordinates.");
    const [e, o] = a;
    if (typeof e != "number" || !Number.isFinite(e) || Math.abs(e) > l.coordinate || typeof o != "number" || !Number.isFinite(o) || Math.abs(o) > l.coordinate)
      throw new r("Draw point coordinates must be finite numbers.");
    return [e, o];
  });
}
function u(t, a, e, o) {
  const n = t[a];
  if (typeof n != "number" || !Number.isFinite(n) || Math.abs(n) > o)
    throw new r(`Canvas ${e} ${a} must be a finite number within supported limits.`);
  return n;
}
function q(t, a) {
  return x(t, a, l.coordinate);
}
function x(t, a, e) {
  const o = t[a];
  if (o !== void 0) {
    if (typeof o != "number" || !Number.isFinite(o) || Math.abs(o) > e)
      throw new r(`Canvas shape ${a} must be a finite number within supported limits.`);
    return o;
  }
}
function d(t, a) {
  const e = t[a];
  if (e === void 0) return;
  if (typeof e != "string") throw new r(`Canvas shape ${a} must be a string.`);
  const o = a === "html" ? l.maxHtmlLength : a === "text" || a === "category" ? l.maxTextLength : l.maxShortStringLength;
  if (e.length > o) throw new r(`Canvas shape ${a} is too long.`);
  return e;
}
function X(t, a) {
  const e = x(t, a, l.fontSizeMax);
  if (e !== void 0 && e < l.fontSizeMin)
    throw new r(`Canvas shape ${a} is below the supported minimum.`);
  return e;
}
function b(t, a) {
  const e = d(t, a);
  return e === void 0 ? void 0 : U(e);
}
function J(t, a) {
  const e = d(t, a);
  return e === void 0 ? void 0 : j(e);
}
function O(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (typeof e != "boolean") throw new r(`Canvas shape ${a} must be a boolean.`);
    return e;
  }
}
function M(t, a) {
  const e = d(t, a);
  return e === void 0 ? void 0 : L(e);
}
function Q(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (typeof e != "string" || !pt(e))
      throw new r(`Canvas shape ${a} is not a supported color.`);
    return e;
  }
}
function tt(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "sans" && e !== "serif" && e !== "mono" && e !== "gothic" && e !== "korean" && e !== "chosunmyjo" && e !== "hdhyundai" && e !== "custom")
      throw new r(`Canvas shape ${a} is not a supported font.`);
    return e;
  }
}
function et(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "left" && e !== "center" && e !== "right")
      throw new r(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function at(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "solid" && e !== "glass") throw new r(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function ot(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "solid" && e !== "dashed" && e !== "dotted")
      throw new r(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function S(t) {
  const a = t.strokeWidth;
  if (a !== void 0) {
    if (a !== 2 && a !== 4 && a !== 6 && a !== 8)
      throw new r("Canvas shape strokeWidth must be one of 2, 4, 6, or 8.");
    return a;
  }
}
function nt(t) {
  const a = t.drawMode;
  if (a !== void 0) {
    if (a !== "pen" && a !== "highlighter")
      throw new r("Canvas drawMode must be pen or highlighter.");
    return a;
  }
}
function rt(t) {
  const a = t.inkStyle;
  if (a !== void 0) {
    if (a !== "raw" && a !== "smoothed")
      throw new r("Canvas inkStyle must be raw or smoothed.");
    return a;
  }
}
function m(t, a, e) {
  if (Object.prototype.hasOwnProperty.call(t, a))
    throw new r(`Canvas shape ${a} is not supported on ${e}.`);
}
function w(t) {
  if (Object.prototype.hasOwnProperty.call(t, "pressure"))
    throw new r("Canvas shapes do not support pressure data.");
}
function st(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "straight" && e !== "curved" && e !== "orthogonal")
      throw new r(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function it(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "elbow" && e !== "reverse" && e !== "u" && e !== "zigzag")
      throw new r(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function lt(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (!Array.isArray(e) || e.length > 100)
      throw new r(`Canvas shape ${a} must be an array of at most 100 points.`);
    return e.map((o) => {
      if (!p(o)) throw new r(`Canvas shape ${a} points must be objects.`);
      const n = u(o, "x", a, l.coordinate), s = u(o, "y", a, l.coordinate);
      return { x: n, y: s };
    });
  }
}
function A(t, a) {
  const e = t[a];
  if (e !== void 0) {
    if (e !== "none" && e !== "arrow" && e !== "dot")
      throw new r(`Canvas shape ${a} is invalid.`);
    return e;
  }
}
function p(t) {
  return typeof t == "object" && t !== null;
}
const ct = /* @__PURE__ */ new Set([
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
]), ht = /* @__PURE__ */ new Set([
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
]), dt = /* @__PURE__ */ new Set([
  "frame",
  "rect",
  "ellipse",
  "triangle",
  "diamond",
  "hexagon",
  "star"
]), ft = /* @__PURE__ */ new Set(["yellow", "pink", "purple", "blue", "green", "peach", "grey", "brand", "ink", "red"]);
function ut(t) {
  return ht.has(t);
}
function mt(t) {
  return dt.has(t);
}
function pt(t) {
  return ft.has(t);
}
function wt(t) {
  throw new r(`Unhandled canvas command: ${String(t)}.`);
}
function gt(t) {
  return t.replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, " ");
}
function N(t) {
  return t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}
function Lt(t, a) {
  const e = N(a.trim());
  if (e.length === 0) return [];
  const o = [];
  for (const n of t.shapes)
    [n.text, n.html ? gt(n.html) : void 0, n.fileName, n.category].some((i) => i !== void 0 && N(i).includes(e)) && o.push(n.id);
  return o;
}
function vt(t) {
  const a = Math.min(t.x, t.x + t.w), e = Math.max(t.x, t.x + t.w), o = Math.min(t.y, t.y + t.h), n = Math.max(t.y, t.y + t.h);
  return { row: Math.floor((o + n) / 2 / 24), col: (a + e) / 2 };
}
function Dt(t, a, e) {
  const o = t.shapes.filter((n) => n.type !== "arrow").map((n) => ({ shape: n, rank: vt(n) })).sort((n, s) => n.rank.row - s.rank.row || n.rank.col - s.rank.col || String(n.shape.id).localeCompare(String(s.shape.id)));
  if (o.length === 0) return null;
  if (a !== null) {
    const n = o.findIndex((s) => s.shape.id === a);
    if (n >= 0) {
      const s = e < 0 ? -1 : 1;
      return o[(n + s + o.length) % o.length].shape.id;
    }
  }
  return e < 0 ? o[o.length - 1].shape.id : o[0].shape.id;
}
const g = 1e-4;
function Et(t, a, e, o) {
  var h;
  const n = [{ zoom: a, target: "all" }];
  e !== null && n.push({ zoom: e, target: "selection" }), n.push({ zoom: 1, target: "actual" });
  const s = { selection: 0, all: 1, actual: 2 };
  n.sort((c, f) => Math.abs(c.zoom - f.zoom) <= g ? s[c.target] - s[f.target] : c.zoom - f.zoom);
  const i = [];
  for (const c of n) {
    const f = i[i.length - 1];
    f && Math.abs(f.zoom - c.zoom) <= g || i.push(c);
  }
  if (o > 0) return ((h = i.find((c) => c.zoom > t + g)) == null ? void 0 : h.target) ?? null;
  if (o < 0) {
    for (let c = i.length - 1; c >= 0; c--)
      if (i[c].zoom < t - g) return i[c].target;
  }
  return null;
}
function bt(t, a) {
  const e = Math.min(t.x, a.x), o = Math.min(t.y, a.y);
  return {
    x: e,
    y: o,
    width: Math.max(t.x + t.width, a.x + a.width) - e,
    height: Math.max(t.y + t.height, a.y + a.height) - o
  };
}
function $t(t, a, e) {
  const o = bt(t, a), n = {
    x: o.x - o.width * 0.1,
    y: o.y - o.height * 0.1,
    width: o.width * 1.2,
    height: o.height * 1.2
  }, s = Math.min(e.width / Math.max(1, n.width), e.height / Math.max(1, n.height)), i = {
    x: (e.width - n.width * s) / 2,
    y: (e.height - n.height * s) / 2
  };
  return {
    world: n,
    scale: s,
    origin: i,
    toMinimap: (h) => ({
      x: i.x + (h.x - n.x) * s,
      y: i.y + (h.y - n.y) * s,
      width: h.width * s,
      height: h.height * s
    }),
    toWorld: (h) => ({
      x: n.x + (h.x - i.x) / s,
      y: n.y + (h.y - i.y) / s
    })
  };
}
export {
  r as C,
  St as S,
  k as a,
  xt as b,
  L as c,
  yt as d,
  l as e,
  Ot as f,
  Ct as g,
  Lt as h,
  p as i,
  At as j,
  R as k,
  Mt as l,
  $t as m,
  Dt as n,
  Et as o,
  Nt as p,
  U as q,
  j as s,
  W as v
};
