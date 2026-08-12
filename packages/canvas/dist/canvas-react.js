import { jsx as P, jsxs as K, Fragment as Ft } from "react/jsx-runtime";
import de, { useRef as et, useState as st, useLayoutEffect as Qt, useEffect as $t, useMemo as Nt, useCallback as lt, useImperativeHandle as Ln, forwardRef as En } from "react";
import { p as Fn, i as me, k as Be, a as ft, v as Tn, c as bt, s as An, b as Dn, d as Ot, h as Wn, C as On, S as _n } from "./document-C_I4ZYDp.js";
import { Palette as Hn, Minus as Bn, Plus as jn, ChevronDown as Kn, AlignLeft as Rn, AlignCenter as Un, AlignRight as Vn, List as Gn, ListOrdered as qn, Bold as Zn, Italic as Qn, Underline as Jn } from "lucide-react";
const to = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover{background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover{background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', H = Object.freeze({
  canvasLight: "#f8fafc",
  canvasDark: "#020617",
  ink: "#0f172a",
  muted: "#64748b",
  slate300: "#cbd5e1",
  slate400: "#94a3b8",
  slate600: "#475569",
  slateCard: "rgb(30,41,59)",
  blue: "#2563eb",
  rose: "#f43f5e",
  roseSoft: "rgba(244,63,94,0.10)",
  pink: "#ec4899",
  white: "#ffffff",
  glassFill: "rgba(30,41,59,0.6)",
  glassBorder: "rgba(255,255,255,0.2)",
  darkBorder: "rgba(255,255,255,0.1)",
  glassShadow: "0 8px 32px rgba(0,0,0,0.3)",
  cardShadow: "0 4px 12px rgba(0,0,0,0.2)",
  selectedFill: "rgba(37,99,235,0.08)",
  marqueeFill: "rgba(37,99,235,0.08)",
  gridDark: "rgba(148,163,184,0.16)",
  gridLight: "rgba(100,116,139,0.18)"
}), je = 12;
function ue(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function Rt(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function Ut(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function Vt(t, e, n, o) {
  const s = Ut(t, e, n), c = Ut(t, e, o), h = Ut(n, o, t), g = Ut(n, o, e);
  return Math.abs(s) < 1e-6 && Rt(t, n, e) || Math.abs(c) < 1e-6 && Rt(t, o, e) || Math.abs(h) < 1e-6 && Rt(n, t, o) || Math.abs(g) < 1e-6 && Rt(n, e, o) ? !0 : s > 0 != c > 0 && h > 0 != g > 0;
}
function eo(t, e, n) {
  const o = Math.min(t.x, e.x), r = Math.max(t.x, e.x), s = Math.min(t.y, e.y), c = Math.max(t.y, e.y);
  if (r < n.minX || o > n.maxX || c < n.minY || s > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const h = { x: n.minX, y: n.minY }, g = { x: n.maxX, y: n.minY }, k = { x: n.maxX, y: n.maxY }, u = { x: n.minX, y: n.maxY };
  return Vt(t, e, h, g) || Vt(t, e, g, k) || Vt(t, e, k, u) || Vt(t, e, u, h);
}
function no(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const o of e)
      if (eo(t[n - 1], t[n], o)) return !0;
  return !1;
}
function xe(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function ve(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = xe(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let o = 0;
  for (let s = 1; s < t.length; s++) {
    const c = Math.hypot(t[s].x - t[s - 1].x, t[s].y - t[s - 1].y);
    if (o + c >= n) {
      const h = (n - o) / c;
      return { x: t[s - 1].x + (t[s].x - t[s - 1].x) * h, y: t[s - 1].y + (t[s].y - t[s - 1].y) * h };
    }
    o += c;
  }
  const r = t[t.length - 1];
  return { x: r.x, y: r.y };
}
function Bt(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function Xe(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([t, e]), s = Math.min(t, e), c = Math.max(t, e), h = je * 1.2;
  for (const g of n) {
    const k = (o === "x" ? g.minX : g.minY) - h, u = (o === "x" ? g.maxX : g.maxY) + h, m = (i) => i >= s - h * 4 && i <= c + h * 4;
    m(k) && r.add(k), m(u) && r.add(u);
  }
  return [...r].sort((g, k) => Math.abs(g - t) - Math.abs(k - t));
}
function Ke(t) {
  const e = [];
  for (const n of t) {
    const o = e[e.length - 1];
    (!o || o.x !== n.x || o.y !== n.y) && e.push(n);
  }
  return e;
}
function Re(t) {
  const e = [];
  for (const n of t) {
    const o = e[e.length - 1];
    if (o && o.x === n.x && o.y === n.y) continue;
    const r = e[e.length - 2];
    if (r && o && (r.x === o.x && o.x === n.x || r.y === o.y && o.y === n.y)) {
      e[e.length - 1] = n;
      continue;
    }
    e.push(n);
  }
  return e;
}
function oo(t, e, n) {
  const o = [t];
  for (const r of [...n, e]) {
    const s = o[o.length - 1];
    if (!s) {
      o.push(r);
      continue;
    }
    if (s.x === r.x || s.y === r.y) {
      o.push(r);
      continue;
    }
    o.push({ x: r.x, y: s.y }, r);
  }
  return Re(o);
}
function ro(t, e, n) {
  const o = t[e], r = t[e + 1];
  if (!o || !r || !Number.isFinite(n) || o.x !== r.x && o.y !== r.y) return [...t];
  const s = o.x === r.x ? [o, { x: n, y: o.y }, { x: n, y: r.y }, r] : [o, { x: o.x, y: n }, { x: r.x, y: n }, r];
  return Re([
    ...t.slice(0, e),
    ...s,
    ...t.slice(e + 2)
  ]);
}
function ae(t, e) {
  const n = [], o = [];
  for (const s of t) {
    const c = Ke(s);
    c.length < 2 || (no(c, e) ? o.push(c) : n.push(c));
  }
  const r = n.length > 0 ? n : o;
  return r.length === 0 ? [] : r.reduce((s, c) => xe(c) < xe(s) ? c : s);
}
function Se(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function Wt(t, e, n, o) {
  const r = Math.min(t, e), s = Math.max(t, e), c = Math.max(48, Math.abs(e - t) * 0.35, je * 4);
  if (o === "x") {
    if (n === "e") return s + c;
    if (n === "w") return r - c;
  } else {
    if (n === "s") return s + c;
    if (n === "n") return r - c;
  }
  return t <= e ? r - c : s + c;
}
function io(t, e, n, o, r) {
  const s = (t.x + e.x) / 2, c = (t.y + e.y) / 2;
  if (n === "u") {
    if (o) {
      const g = Wt(t.x, e.x, t.side, "x");
      return [t, { x: g, y: t.y }, { x: g, y: e.y }, e];
    }
    const h = Wt(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: h }, { x: e.x, y: h }, e];
  }
  if (n === "zigzag") {
    if (o) {
      const k = Wt(t.x, e.x, t.side, "x"), u = Wt(t.y, e.y, t.side, "y");
      return r ? [t, { x: k, y: t.y }, { x: k, y: u }, { x: s, y: u }, { x: s, y: e.y }, e] : [t, { x: k, y: t.y }, { x: k, y: u }, { x: e.x, y: u }, e];
    }
    const h = Wt(t.y, e.y, t.side, "y"), g = Wt(t.x, e.x, t.side, "x");
    return r ? [t, { x: t.x, y: h }, { x: g, y: h }, { x: g, y: e.y }, e] : [t, { x: t.x, y: h }, { x: g, y: h }, { x: g, y: c }, { x: e.x, y: c }, e];
  }
  return [];
}
function Ue(t, e, n = [], o = "elbow", r = []) {
  if (r.length > 0) return oo(t, e, r);
  const s = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), c = e.side ?? (s === "e" || s === "w" ? "w" : "n"), h = s === "e" || s === "w", g = c === "e" || c === "w", k = Xe(t.x, e.x, n, "x"), u = Xe(t.y, e.y, n, "y"), m = [];
  if (h && g) {
    for (const x of k) m.push([t, { x, y: t.y }, { x, y: e.y }, e]);
    for (const x of u) m.push([t, { x: t.x, y: x }, { x: e.x, y: x }, e]);
  } else if (!h && !g) {
    for (const x of u) m.push([t, { x: t.x, y: x }, { x: e.x, y: x }, e]);
    for (const x of k) m.push([t, { x, y: t.y }, { x, y: e.y }, e]);
  } else if (h) {
    m.push([t, { x: e.x, y: t.y }, e]);
    for (const x of u)
      m.push([t, { x: t.x, y: x }, { x: e.x, y: x }, e]), m.push([t, { x: t.x, y: x }, e]);
    for (const x of k) m.push([t, { x, y: t.y }, { x, y: e.y }, e]);
  } else {
    m.push([t, { x: t.x, y: e.y }, e]);
    for (const x of u)
      m.push([t, { x: t.x, y: x }, e]), m.push([t, { x: t.x, y: x }, { x: e.x, y: x }, e]);
    for (const x of k) m.push([t, { x, y: t.y }, { x, y: e.y }, e]);
  }
  const i = ae(m, n);
  if (o === "elbow") return i;
  if (o === "reverse") {
    const x = Se(i), X = ae(m.filter((l) => Se(l) !== x), n);
    return X.length > 1 ? X : i;
  }
  const a = io(t, e, o, h, g), v = ae([a], n);
  return v.length > 1 ? v : i;
}
function Ve(t) {
  return t.length < 2 ? 0 : Bt(t[t.length - 2], t[t.length - 1]);
}
const { PI: ao } = Math, jt = ao + 1e-4, Ye = 0.5, Ce = [1, 1];
function Ne(t, e, n, o = (r) => r) {
  return t * o(0.5 - e * (0.5 - n));
}
const { min: ce } = Math;
function Ge(t, e, n) {
  let o = ce(1, e / n);
  return ce(1, t + (ce(1, 1 - o) - t) * (o * 0.275));
}
function co(t) {
  return [-t[0], -t[1]];
}
function Mt(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function Ie(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function Pt(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function he(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function It(t, e) {
  return [t[0] * e, t[1] * e];
}
function se(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function so(t, e) {
  return [t[0] / e, t[1] / e];
}
function qe(t) {
  return [t[1], -t[0]];
}
function le(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function Pe(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function lo(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function uo(t) {
  return Math.hypot(t[0], t[1]);
}
function Le(t, e) {
  let n = t[0] - e[0], o = t[1] - e[1];
  return n * n + o * o;
}
function Ze(t) {
  return so(t, uo(t));
}
function xo(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function pe(t, e, n) {
  let o = Math.sin(n), r = Math.cos(n), s = t[0] - e[0], c = t[1] - e[1], h = s * r - c * o, g = s * o + c * r;
  return [h + e[0], g + e[1]];
}
function Ee(t, e, n, o) {
  let r = Math.sin(o), s = Math.cos(o), c = e[0] - n[0], h = e[1] - n[1], g = c * s - h * r, k = c * r + h * s;
  return t[0] = g + n[0], t[1] = k + n[1], t;
}
function Fe(t, e, n) {
  return Mt(t, It(Pt(e, t), n));
}
function ho(t, e, n, o) {
  let r = n[0] - e[0], s = n[1] - e[1];
  return t[0] = e[0] + r * o, t[1] = e[1] + s * o, t;
}
function Qe(t, e, n) {
  return Mt(t, It(e, n));
}
const it = [0, 0], St = [0, 0], Yt = [0, 0];
function fo(t, e) {
  let n = Qe(t, Ze(qe(Pt(t, Mt(t, [1, 1])))), -e), o = [], r = 1 / 13;
  for (let s = r; s <= 1; s += r) o.push(pe(n, t, jt * 2 * s));
  return o;
}
function mo(t, e, n) {
  let o = [], r = 1 / n;
  for (let s = r; s <= 1; s += r) o.push(pe(e, t, jt * s));
  return o;
}
function vo(t, e, n) {
  let o = Pt(e, n), r = It(o, 0.5), s = It(o, 0.51);
  return [Pt(t, r), Pt(t, s), Mt(t, s), Mt(t, r)];
}
function po(t, e, n, o) {
  let r = [], s = Qe(t, e, n), c = 1 / o;
  for (let h = c; h < 1; h += c) r.push(pe(s, t, jt * 3 * h));
  return r;
}
function yo(t, e, n) {
  return [Mt(t, It(e, n)), Mt(t, It(e, n * 0.99)), Pt(t, It(e, n * 0.99)), Pt(t, It(e, n))];
}
function Te(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function go(t, e, n) {
  return t.slice(0, 10).reduce((o, r) => {
    let s = r.pressure;
    return e && (s = Ge(o, r.distance, n)), (o + s) / 2;
  }, t[0].pressure);
}
function wo(t, e = {}) {
  let { size: n = 16, smoothing: o = 0.5, thinning: r = 0.5, simulatePressure: s = !0, easing: c = (C) => C, start: h = {}, end: g = {}, last: k = !1 } = e, { cap: u = !0, easing: m = (C) => C * (2 - C) } = h, { cap: i = !0, easing: a = (C) => --C * C * C + 1 } = g;
  if (t.length === 0 || n <= 0) return [];
  let v = t[t.length - 1].runningLength, x = Te(h.taper, n, v), X = Te(g.taper, n, v), l = (n * o) ** 2, z = [], y = [], M = go(t, s, n), S = Ne(n, r, t[t.length - 1].pressure, c), w, d = t[0].vector, p = t[0].point, f = p, b = p, $ = f, I = !1;
  for (let C = 0; C < t.length; C++) {
    let { pressure: T } = t[C], { point: O, vector: E, distance: _, runningLength: B } = t[C], V = C === t.length - 1;
    if (!V && v - B < 3) continue;
    r ? (s && (T = Ge(M, _, n)), S = Ne(n, r, T, c)) : S = n / 2, w === void 0 && (w = S);
    let q = B < x ? m(B / x) : 1, nt = v - B < X ? a((v - B) / X) : 1;
    S = Math.max(0.01, S * Math.min(q, nt));
    let R = (V ? t[C] : t[C + 1]).vector, G = V ? 1 : Pe(E, R), Z = Pe(E, d) < 0 && !I, J = G !== null && G < 0;
    if (Z || J) {
      le(it, d), se(it, it, S);
      for (let ot = 0; ot <= 1; ot += 0.07692307692307693) he(St, O, it), Ee(St, St, O, jt * ot), b = [St[0], St[1]], z.push(b), Ie(Yt, O, it), Ee(Yt, Yt, O, jt * -ot), $ = [Yt[0], Yt[1]], y.push($);
      p = b, f = $, J && (I = !0);
      continue;
    }
    if (I = !1, V) {
      le(it, E), se(it, it, S), z.push(Pt(O, it)), y.push(Mt(O, it));
      continue;
    }
    ho(it, R, E, G), le(it, it), se(it, it, S), he(St, O, it), b = [St[0], St[1]], (C <= 1 || Le(p, b) > l) && (z.push(b), p = b), Ie(Yt, O, it), $ = [Yt[0], Yt[1]], (C <= 1 || Le(f, $) > l) && (y.push($), f = $), M = T, d = E;
  }
  let N = [t[0].point[0], t[0].point[1]], L = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : Mt(t[0].point, [1, 1]), F = [], A = [];
  if (t.length === 1) {
    if (!(x || X) || k) return fo(N, w || S);
  } else {
    x || X && t.length === 1 || (u ? F.push(...mo(N, y[0], 13)) : F.push(...vo(N, z[0], y[0])));
    let C = qe(co(t[t.length - 1].vector));
    X || x && t.length === 1 ? A.push(L) : i ? A.push(...po(L, C, S, 29)) : A.push(...yo(L, C, S));
  }
  return z.concat(A, y.reverse(), F);
}
const Ae = [0, 0];
function De(t) {
  return t != null && t >= 0;
}
function bo(t, e = {}) {
  var i;
  let { streamline: n = 0.5, size: o = 16, last: r = !1 } = e;
  if (t.length === 0) return [];
  let s = 0.15 + (1 - n) * 0.85, c = Array.isArray(t[0]) ? t : t.map(({ x: a, y: v, pressure: x = Ye }) => [a, v, x]);
  if (c.length === 2) {
    let a = c[1];
    c = c.slice(0, -1);
    for (let v = 1; v < 5; v++) c.push(Fe(c[0], a, v / 4));
  }
  c.length === 1 && (c = [...c, [...Mt(c[0], Ce), ...c[0].slice(2)]]);
  let h = [{ point: [c[0][0], c[0][1]], pressure: De(c[0][2]) ? c[0][2] : 0.25, vector: [...Ce], distance: 0, runningLength: 0 }], g = !1, k = 0, u = h[0], m = c.length - 1;
  for (let a = 1; a < c.length; a++) {
    let v = r && a === m ? [c[a][0], c[a][1]] : Fe(u.point, c[a], s);
    if (lo(u.point, v)) continue;
    let x = xo(v, u.point);
    if (k += x, a < m && !g) {
      if (k < o) continue;
      g = !0;
    }
    he(Ae, u.point, v), u = { point: v, pressure: De(c[a][2]) ? c[a][2] : Ye, vector: Ze(Ae), distance: x, runningLength: k }, h.push(u);
  }
  return h[0].vector = ((i = h[1]) == null ? void 0 : i.vector) || [0, 0], h;
}
function $o(t, e = {}) {
  return wo(bo(t, e), e);
}
var ko = $o;
function Jt(t) {
  if (t.fillColor)
    try {
      return Be(t.fillColor);
    } catch {
    }
  return t.color ? ft[t.color].bg : ft.blue.bg;
}
function Je(t) {
  return t.color ? ft[t.color].border : "#2563eb";
}
function Tt(t) {
  if (t.textColor)
    try {
      return Be(t.textColor);
    } catch {
    }
  return t.color ? ft[t.color].text : "#0f172a";
}
function tn(t, e, n) {
  switch (t) {
    case "triangle":
      return `${e / 2},0 ${e},${n} 0,${n}`;
    case "diamond":
      return `${e / 2},0 ${e},${n / 2} ${e / 2},${n} 0,${n / 2}`;
    case "hexagon": {
      const o = e * 0.25;
      return `${o},0 ${e - o},0 ${e},${n / 2} ${e - o},${n} ${o},${n} 0,${n / 2}`;
    }
    case "star": {
      const o = e / 2, r = n / 2, s = Math.min(e, n) / 2, c = s * 0.4, h = [];
      for (let g = 0; g < 10; g++) {
        const k = Math.PI / 5 * g - Math.PI / 2, u = g % 2 === 0 ? s : c;
        h.push(`${o + u * Math.cos(k)},${r + u * Math.sin(k)}`);
      }
      return h.join(" ");
    }
    default:
      return "";
  }
}
function en(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [r, s] = t[o], [c, h] = t[o + 1];
    e += ` Q ${r} ${s} ${(r + c) / 2} ${(s + h) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function nn(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [s, c] = t[0], h = n === "highlighter" ? e * 1.25 : e / 2;
    return `M ${s - h} ${c} A ${h} ${h} 0 1 0 ${s + h} ${c} A ${h} ${h} 0 1 0 ${s - h} ${c} Z`;
  }
  const o = n === "highlighter" ? { size: e * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: e, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 }, r = ko(t, o);
  return r.length === 0 ? "" : r.reduce(
    (s, [c, h], g) => s + (g === 0 ? `M ${c} ${h}` : ` L ${c} ${h}`),
    ""
  ) + " Z";
}
function Ct(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function on(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], o = (r, s) => {
    r.childNodes.forEach((c) => {
      if (c.nodeType === Node.TEXT_NODE) {
        const u = c.textContent ?? "";
        u && n[n.length - 1].push({ text: u, ...s });
        return;
      }
      if (c.nodeType !== Node.ELEMENT_NODE) return;
      const h = c;
      if (h.tagName === "BR") {
        n.push([]);
        return;
      }
      const g = { bold: s.bold || h.tagName === "B" || h.tagName === "STRONG", italic: s.italic || h.tagName === "I" || h.tagName === "EM", underline: s.underline || h.tagName === "U" }, k = h.tagName === "DIV" || h.tagName === "P" || h.tagName === "LI";
      k && n[n.length - 1].length > 0 && n.push([]), o(h, g), k && n.push([]);
    });
  };
  return o(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((r) => r.length > 0);
}
function ee(t) {
  return t.html ? me(t.html) : t.text ? Ct(t.text).replace(/\n/g, "<br>") : "";
}
function fe(t) {
  if (t)
    try {
      return Tn(t);
    } catch {
      return;
    }
}
function rn(t) {
  try {
    return Fn(t);
  } catch {
    return null;
  }
}
function ne(t) {
  return t.html ? on(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const Gt = 12;
function Lt(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function wt(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function at(t) {
  const e = t.rotation ?? 0, n = Lt(t);
  if (!e) return n;
  const o = wt(t), r = Math.cos(e), s = Math.sin(e), c = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([k, u]) => {
    const m = k - o.x, i = u - o.y;
    return [o.x + m * r - i * s, o.y + m * s + i * r];
  }), h = c.map((k) => k[0]), g = c.map((k) => k[1]);
  return { minX: Math.min(...h), minY: Math.min(...g), maxX: Math.max(...h), maxY: Math.max(...g) };
}
function an(t, e, n) {
  const o = t.rotation ?? 0;
  if (!o) return { x: e, y: n };
  const r = wt(t), s = Math.cos(-o), c = Math.sin(-o), h = e - r.x, g = n - r.y;
  return { x: r.x + h * s - g * c, y: r.y + h * c + g * s };
}
function qt(t, e, n, o, r, s) {
  const c = r - n, h = s - o, g = c * c + h * h, k = g === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * c + (e - o) * h) / g));
  return Math.hypot(t - (n + k * c), e - (o + k * h));
}
function te(t, e, n, o, r, s) {
  const c = 8 / o;
  if (t.type === "arrow") {
    const k = (t.strokeWidth ?? 2.5) / o / 2 + c, u = kt(t, r ?? /* @__PURE__ */ new Map(), s);
    if (u.routing === "orthogonal" && u.pathPoints && u.pathPoints.length > 1) {
      for (let i = 1; i < u.pathPoints.length; i++) {
        const a = u.pathPoints[i - 1], v = u.pathPoints[i];
        if (qt(e, n, a.x, a.y, v.x, v.y) <= k) return !0;
      }
      return !1;
    }
    if (u.bend === 0) return qt(e, n, u.start.x, u.start.y, u.end.x, u.end.y) <= k;
    let m = u.start;
    for (let i = 1; i <= 16; i++) {
      const a = Kt(i / 16, u.start, u.control, u.end);
      if (qt(e, n, m.x, m.y, a.x, a.y) <= k) return !0;
      m = a;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const m = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / o / 2 + c;
    if (t.points.length === 1) {
      const [i, a] = t.points[0];
      return Math.hypot(e - i, n - a) <= m;
    }
    for (let i = 1; i < t.points.length; i++) {
      const [a, v] = t.points[i - 1], [x, X] = t.points[i];
      if (qt(e, n, a, v, x, X) <= m) return !0;
    }
    return !1;
  }
  const h = an(t, e, n), g = Lt(t);
  if (t.type === "frame") {
    const k = h.x >= g.minX - c && h.x <= g.maxX + c && h.y >= g.minY - c && h.y <= g.maxY + c && (h.x <= g.minX + c || h.x >= g.maxX - c || h.y <= g.minY + c || h.y >= g.maxY - c), u = h.x >= g.minX - c && h.x <= g.maxX + c && h.y >= g.minY - 28 / o && h.y <= g.minY;
    return k || u;
  }
  return h.x >= g.minX - c && h.x <= g.maxX + c && h.y >= g.minY - c && h.y <= g.maxY + c;
}
function At(t, e, n) {
  const o = Lt(t), r = (o.minX + o.maxX) / 2, s = (o.minY + o.maxY) / 2, c = e - r, h = n - s;
  if (c === 0 && h === 0) return { x: r, y: s, side: "e" };
  const g = (o.maxX - o.minX) / 2, k = (o.maxY - o.minY) / 2, u = g === 0 ? 1 / 0 : Math.abs(g / c), m = k === 0 ? 1 / 0 : Math.abs(k / h);
  return u <= m ? { x: r + c * u, y: s + h * u, side: c >= 0 ? "e" : "w" } : { x: r + c * m, y: s + h * m, side: h >= 0 ? "s" : "n" };
}
function cn(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([e.id, n, o]);
  return t.filter((s) => !r.has(s.id)).map((s) => {
    const c = at(s);
    return { minX: c.minX - Gt, minY: c.minY - Gt, maxX: c.maxX + Gt, maxY: c.maxY + Gt };
  }).filter((s) => s.maxX > s.minX && s.maxY > s.minY);
}
function kt(t, e, n = []) {
  const o = t.fromId ? e.get(t.fromId) : void 0, r = t.toId ? e.get(t.toId) : void 0;
  let s = { x: t.x, y: t.y }, c = { x: t.x + t.w, y: t.y + t.h };
  if (o && r) {
    const v = wt(o), x = wt(r);
    s = At(o, x.x, x.y), c = At(r, v.x, v.y);
  } else o ? s = At(o, c.x, c.y) : r && (c = At(r, s.x, s.y));
  const h = (s.x + c.x) / 2, g = (s.y + c.y) / 2, k = t.bend ?? 0;
  let u = { x: h, y: g };
  if (k !== 0) {
    const v = c.x - s.x, x = c.y - s.y, X = Math.hypot(v, x) || 1;
    u = { x: h + -x / X * k, y: g + v / X * k };
  }
  const m = !!(o || r), i = t.routing ?? (m ? "orthogonal" : k !== 0 ? "curved" : "straight");
  if (i !== "orthogonal") return { start: s, end: c, control: u, bend: k, routing: i };
  const a = cn(n, t, o == null ? void 0 : o.id, r == null ? void 0 : r.id);
  return {
    start: s,
    end: c,
    control: u,
    bend: k,
    routing: i,
    pathPoints: Ke(Ue(s, c, a, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function Kt(t, e, n, o) {
  const r = 1 - t;
  return { x: r * r * e.x + 2 * r * t * n.x + t * t * o.x, y: r * r * e.y + 2 * r * t * n.y + t * t * o.y };
}
function sn(t, e, n, o, r) {
  const s = [];
  let c = 0;
  for (const h of t) {
    if (h.type !== "draw" || !h.points) {
      if (te(h, e, n, r)) continue;
      s.push(h);
      continue;
    }
    const g = [];
    let k = [];
    for (const [m, i] of h.points)
      Math.hypot(m - e, i - n) <= o / r ? (k.length > 1 && g.push(k), k = []) : k.push([m, i]);
    if (k.length > 1 && g.push(k), g.length === 0) continue;
    const u = Lt(h);
    g.forEach((m) => s.push({ ...h, id: `${h.id}-e${c++}`, points: m, x: u.minX, y: u.minY, w: u.maxX - u.minX, h: u.maxY - u.minY }));
  }
  return s;
}
function Mo(t, e, n) {
  const o = 6 / n;
  let r = null, s = null;
  const c = [], h = [t.minX, (t.minX + t.maxX) / 2, t.maxX], g = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const k of e) {
    const u = at(k), m = [u.minX, (u.minX + u.maxX) / 2, u.maxX], i = [u.minY, (u.minY + u.maxY) / 2, u.maxY];
    for (const a of h) for (const v of m) {
      const x = v - a;
      Math.abs(x) <= o && (!r || Math.abs(x) < Math.abs(r.delta)) && (r = { delta: x, at: v });
    }
    for (const a of g) for (const v of i) {
      const x = v - a;
      Math.abs(x) <= o && (!s || Math.abs(x) < Math.abs(s.delta)) && (s = { delta: x, at: v });
    }
  }
  return r && c.push({ x1: r.at, y1: t.minY - 1e3, x2: r.at, y2: t.maxY + 1e3 }), s && c.push({ x1: t.minX - 1e3, y1: s.at, x2: t.maxX + 1e3, y2: s.at }), { dx: (r == null ? void 0 : r.delta) ?? 0, dy: (s == null ? void 0 : s.delta) ?? 0, guides: c };
}
const zo = 14;
function Xo({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: o,
  camera: r,
  interaction: s,
  eraserPos: c,
  guides: h,
  marquee: g,
  strokeColorOf: k
}) {
  return /* @__PURE__ */ P("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ K("g", { transform: `scale(${r.z}) translate(${-r.x}, ${-r.y})`, children: [
    t.map((u) => {
      if (u.type === "draw" && u.points) {
        const b = u.drawMode ?? "pen", $ = u.strokeWidth ?? 3, I = e.has(u.id) ? H.blue : k(u), N = u.points.length >= 2 ? nn(u.points, $, b) : "";
        return /* @__PURE__ */ P(
          "path",
          {
            "data-canvas-vector-shape-id": u.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": b,
            "data-canvas-stroke-width": $,
            d: N || en(u.points),
            fill: N ? I : "none",
            stroke: N ? "none" : I,
            strokeWidth: $ / r.z,
            strokeOpacity: b === "highlighter" ? 0.35 : void 0,
            fillOpacity: b === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          u.id
        );
      }
      if (u.type !== "arrow") return null;
      const m = e.has(u.id) ? H.blue : k(u), i = kt(u, n, o), a = u.strokeWidth ?? 2.5, v = a / r.z, x = Math.max(10, 8 + a * 2), X = Math.max(4, 2 + a), l = x / r.z, z = X / r.z, y = i.routing === "orthogonal" && i.pathPoints ? i.pathPoints : null, M = y && y.length > 1;
      let S, w;
      if (M)
        S = ue(y), w = Ve(y);
      else if (i.routing === "curved") {
        S = `M ${i.start.x} ${i.start.y} Q ${i.control.x} ${i.control.y} ${i.end.x} ${i.end.y}`;
        const b = Kt(0.94, i.start, i.control, i.end);
        w = Math.atan2(i.end.y - b.y, i.end.x - b.x);
      } else
        S = `M ${i.start.x} ${i.start.y} L ${i.end.x} ${i.end.y}`, w = Math.atan2(i.end.y - i.start.y, i.end.x - i.start.x);
      const d = M && y.length >= 2 ? Bt(y[0], y[1]) : i.routing === "orthogonal" && i.start.side ? i.start.side === "e" ? 0 : i.start.side === "w" ? Math.PI : i.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Bt(i.start, i.end), p = u.strokeStyle === "dashed" ? `${8 / r.z} ${5 / r.z}` : u.strokeStyle === "dotted" ? `${1.5 / r.z} ${4 / r.z}` : void 0, f = (b, $, I, N) => b === "dot" ? /* @__PURE__ */ P("circle", { "data-canvas-arrow-dot-radius": X, cx: $, cy: I, r: z, fill: m }) : b === "none" ? null : /* @__PURE__ */ P(
        "polygon",
        {
          "data-canvas-arrowhead-size": x,
          points: `${$},${I} ${$ - l * Math.cos(N - 0.4)},${I - l * Math.sin(N - 0.4)} ${$ - l * Math.cos(N + 0.4)},${I - l * Math.sin(N + 0.4)}`,
          fill: m
        }
      );
      return /* @__PURE__ */ K("g", { "data-canvas-vector-shape-id": u.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": i.routing, "data-canvas-stroke-width": a, children: [
        /* @__PURE__ */ P("path", { d: S, fill: "none", stroke: m, strokeWidth: v, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: p }),
        f(u.arrowEnd ?? "arrow", i.end.x, i.end.y, w),
        f(u.arrowStart ?? "none", i.start.x, i.start.y, d + Math.PI)
      ] }, u.id);
    }),
    s.kind === "connect" && s.fromId !== void 0 && s.toX !== void 0 && s.toY !== void 0 && (() => {
      const u = n.get(s.fromId);
      if (!u) return null;
      const m = At(u, s.toX, s.toY), i = s.hoverId ? n.get(s.hoverId) : null, a = i ? At(i, m.x, m.y) : { x: s.toX, y: s.toY }, v = i ? Ue(m, a, cn(o, { id: "__preview" }, u.id, i.id)) : [m, a];
      return /* @__PURE__ */ K("g", { children: [
        /* @__PURE__ */ P("path", { d: ue(v), stroke: H.blue, strokeWidth: 2 / r.z, strokeDasharray: `${5 / r.z} ${4 / r.z}` }),
        i ? /* @__PURE__ */ P("rect", { x: at(i).minX - 3 / r.z, y: at(i).minY - 3 / r.z, width: at(i).maxX - at(i).minX + 6 / r.z, height: at(i).maxY - at(i).minY + 6 / r.z, fill: "none", stroke: H.blue, strokeWidth: 2 / r.z, rx: 6 / r.z }) : /* @__PURE__ */ P("circle", { cx: a.x, cy: a.y, r: 5 / r.z, fill: H.blue })
      ] });
    })(),
    c && /* @__PURE__ */ P("circle", { cx: c.x, cy: c.y, r: zo / r.z, fill: H.roseSoft, stroke: H.rose, strokeWidth: 1 / r.z }),
    h.map((u, m) => /* @__PURE__ */ P("line", { x1: u.x1, y1: u.y1, x2: u.x2, y2: u.y2, stroke: H.pink, strokeWidth: 1 / r.z, strokeDasharray: `${4 / r.z} ${4 / r.z}` }, `guide-${m}`)),
    g && /* @__PURE__ */ P("rect", { x: Math.min(g.startX, g.curX), y: Math.min(g.startY, g.curY), width: Math.abs(g.curX - g.startX), height: Math.abs(g.curY - g.startY), fill: H.marqueeFill, stroke: H.blue, strokeWidth: 1 / r.z })
  ] }) });
}
const So = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], Yo = /* @__PURE__ */ new Set([
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "ui-serif",
  "ui-sans-serif",
  "ui-monospace",
  "emoji",
  "math",
  "fangsong"
]), Co = [
  "Arial",
  "Arial Black",
  "Calibri",
  "Cambria",
  "Candara",
  "Comic Sans MS",
  "Consolas",
  "Courier New",
  "D2Coding",
  "Georgia",
  "Helvetica",
  "Malgun Gothic",
  "Meiryo",
  "Noto Sans KR",
  "Noto Serif KR",
  "Noto Serif",
  "Nanum Gothic",
  "NanumMyeongjo",
  "Pretendard",
  "Segoe UI",
  "Times New Roman",
  "Verdana",
  "Apple SD Gothic Neo",
  "Dotum",
  "Gulim",
  "조선일보명조",
  "HD현대체",
  "Batang",
  "Gungsuh",
  "GungsuhChe",
  "Tahoma",
  "Trebuchet MS",
  "Verdana",
  "Yu Gothic"
];
function oe(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function ln(t) {
  return Yo.has(t.trim().toLowerCase());
}
function dn(t) {
  const e = oe(t);
  return e ? ln(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function No(t) {
  return oe(t).split(",").map((e) => e.trim()).filter(Boolean).map(dn).filter(Boolean).join(", ");
}
function un(t) {
  return oe(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Ht(t) {
  return t.split(",").map((e) => oe(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !ln(e));
}
const Zt = Array.from(/* @__PURE__ */ new Set([
  ...Co,
  ...Ht(bt.sans.stack),
  ...Ht(bt.serif.stack),
  ...Ht(bt.mono.stack),
  ...Ht(bt.gothic.stack),
  ...Ht(bt.korean.stack)
]));
function Io() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Zt;
  const t = Zt.filter((e) => {
    const n = dn(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : Zt;
}
const Po = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, Lo = 24, Eo = 28, xn = 720;
function dt(t) {
  return t.fontSize ?? Po[t.type] ?? 14;
}
function ut(t) {
  var e;
  if (!t.fontFamily) return bt.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = un(An(t.customFontFamily ?? ""));
    } catch {
    }
    return No(n) || bt.sans.stack;
  }
  return ((e = bt[t.fontFamily]) == null ? void 0 : e.stack) ?? bt.sans.stack;
}
function vt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function Fo(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function To(t) {
  var e, n, o;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((o = t.html) != null && o.includes("<ol>")) return "number";
}
function Ao(t, e) {
  return {
    w: Math.min(xn, Math.max(Lo, Math.ceil(t))),
    h: Math.max(Eo, Math.ceil(e))
  };
}
function Do(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = me(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${xn}px`,
    height: "auto",
    minHeight: "0",
    maxHeight: "none",
    margin: "0",
    padding: "0",
    border: "0",
    outline: "0",
    boxSizing: "content-box",
    visibility: "hidden",
    pointerEvents: "none",
    whiteSpace: "pre-wrap",
    overflow: "visible",
    overflowWrap: "break-word",
    wordBreak: "normal",
    fontSize: `${dt(e)}px`,
    fontFamily: ut(e)
  }), document.body.appendChild(n);
  const o = n.getBoundingClientRect();
  return n.remove(), Ao(o.width, o.height);
}
const Wo = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), Oo = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function _o({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: o,
  shapeById: r,
  allShapes: s,
  peerCursors: c,
  isDarkMode: h,
  renderEditor: g,
  renderShapeBody: k,
  setEditingId: u,
  onBendHandleDown: m,
  onOrthogonalSegmentHandleDown: i,
  onResizeHandleDown: a,
  onRotateHandleDown: v,
  onConnectHandleDown: x,
  onArrowEndpointDown: X
}) {
  return /* @__PURE__ */ K(Ft, { children: [
    /* @__PURE__ */ P("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((l) => {
      if (l.type === "draw") return null;
      if (l.type === "arrow") {
        const M = kt(l, r, s), S = M.routing === "orthogonal" && M.pathPoints ? ve(M.pathPoints) : M.routing === "curved" ? Kt(0.5, M.start, M.control, M.end) : { x: (M.start.x + M.end.x) / 2, y: (M.start.y + M.end.y) / 2 }, w = n === l.id, d = ee(l), p = e.has(l.id), f = ne(l).trim(), b = d || (p ? "관계 입력" : "");
        return !b && !w ? null : /* @__PURE__ */ P(de.Fragment, { children: /* @__PURE__ */ P("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: S.x - 90, top: S.y - 18, width: 180, height: 36 }, onDoubleClick: ($) => {
          $.stopPropagation(), u(l.id);
        }, children: (b || w) && /* @__PURE__ */ P(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": f ? `관계 설명: ${f}` : "관계 설명 입력",
            title: w ? void 0 : f ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${h ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: dt(l),
              fontFamily: ut(l),
              maxWidth: "100%",
              minWidth: w ? 120 / o.z : void 0,
              minHeight: w ? 28 / o.z : void 0,
              color: l.textColor
            },
            children: w ? g("text-center whitespace-nowrap") : /* @__PURE__ */ P("span", { dangerouslySetInnerHTML: { __html: b } }, "canvas-view")
          }
        ) }) }, l.id);
      }
      const z = e.has(l.id), y = Lt(l);
      return /* @__PURE__ */ K(
        "div",
        {
          "data-canvas-shape-id": l.id,
          "data-canvas-shape-type": l.type,
          "data-canvas-selected": z ? "true" : void 0,
          "data-canvas-text-align": vt(l),
          "data-canvas-text-color": l.textColor,
          "data-canvas-font-size": dt(l),
          "data-canvas-font-family": l.fontFamily === "custom" ? l.customFontFamily ?? "custom" : l.fontFamily ?? "sans",
          "data-canvas-manual-size": l.manualSize ? "true" : void 0,
          "data-canvas-group-id": l.groupId,
          "data-canvas-list-kind": To(l),
          "data-canvas-x": l.x,
          "data-canvas-y": l.y,
          "data-canvas-width": l.w,
          "data-canvas-height": l.h,
          className: "absolute",
          style: { left: y.minX, top: y.minY, width: y.maxX - y.minX, height: y.maxY - y.minY, transform: l.rotation ? `rotate(${l.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (M) => {
            M.stopPropagation(), Wo.has(l.type) && u(l.id);
          },
          children: [
            k(l),
            z && /* @__PURE__ */ K(Ft, { children: [
              /* @__PURE__ */ P("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${H.blue}` } }),
              e.size === 1 && /* @__PURE__ */ K(Ft, { children: [
                ["nw", "ne", "sw", "se"].map((M) => /* @__PURE__ */ P("div", { "data-canvas-resize-handle": M, onPointerDown: (S) => a(S, l, M), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${M}-resize`, left: M.includes("w") ? -5 / o.z : void 0, right: M.includes("e") ? -5 / o.z : void 0, top: M.includes("n") ? -5 / o.z : void 0, bottom: M.includes("s") ? -5 / o.z : void 0 } }, M)),
                /* @__PURE__ */ P("div", { onPointerDown: (M) => v(M, l), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                Oo.has(l.type) && ["n", "s", "w", "e"].map((M) => /* @__PURE__ */ P("div", { onPointerDown: (S) => x(S, l), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...M === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : M === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : M === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${M}`))
              ] })
            ] })
          ]
        },
        l.id
      );
    }) }),
    e.size === 1 && s.filter((l) => l.type === "arrow" && e.has(l.id)).map((l) => {
      const z = kt(l, r, s), y = (M, S) => ({
        left: (M.x - o.x) * o.z - S / 2,
        top: (M.y - o.y) * o.z - S / 2
      });
      return /* @__PURE__ */ K(de.Fragment, { children: [
        z.routing === "orthogonal" && z.pathPoints && z.pathPoints.length > 2 ? z.pathPoints.slice(0, -1).map((M, S) => {
          var p;
          const w = (p = z.pathPoints) == null ? void 0 : p[S + 1];
          if (!w) return null;
          const d = { x: (M.x + w.x) / 2, y: (M.y + w.y) / 2 };
          return /* @__PURE__ */ P("div", { "data-canvas-arrow-segment-handle": S, onPointerDown: (f) => i(f, l, S), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...y(d, 12), cursor: M.x === w.x ? "ew-resize" : "ns-resize" } }, `segment-${S}`);
        }) : z.routing === "curved" && /* @__PURE__ */ P("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (M) => m(M, l), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (z.start.x + z.end.x) / 2 * o.z - o.x * o.z - 5, top: (z.start.y + z.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map((M) => {
          const S = M === "start" ? z.start : z.end;
          return /* @__PURE__ */ P("div", { "data-canvas-arrow-endpoint": M, onPointerDown: (w) => X(w, l, M), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...y(S, 12), cursor: "grab" } }, M);
        })
      ] }, `arrow-handles-${l.id}`);
    }),
    c == null ? void 0 : c.map((l) => /* @__PURE__ */ K("div", { className: "absolute pointer-events-none z-40", style: { left: (l.x - o.x) * o.z, top: (l.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ P("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ P("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: l.color, stroke: H.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ P("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: l.color }, children: l.name })
    ] }, l.id))
  ] });
}
function hn(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function Ho(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), hn(t) && e.push("diagram"), e;
}
function Xr(t) {
  switch (t) {
    case "sequence":
      return `sequenceDiagram
  participant User
  participant App
  User->>App: Open canvas
  App-->>User: Render diagram`;
    case "class":
      return `classDiagram
  class Canvas {
    +addShape()
    +saveSnapshot()
  }
  class Diagram {
    +source: string
  }
  Canvas --> Diagram`;
    case "flowchart":
    default:
      return `flowchart TD
  Start([Start]) --> Compose[Compose diagram]
  Compose --> Review{Review}
  Review -->|Yes| Share[Share]
  Review -->|Edit| Compose`;
  }
}
const Bo = [2, 4, 6, 8];
function jo(t) {
  switch (t.type) {
    case "arrow":
    case "frame":
    case "rect":
    case "ellipse":
    case "triangle":
    case "diamond":
    case "hexagon":
    case "star":
    case "draw":
      return !0;
    case "note":
    case "card":
    case "text":
    case "image":
      return !1;
    default:
      return fn(t);
  }
}
function Ko(t) {
  switch (t.type) {
    case "arrow":
    case "frame":
    case "rect":
    case "ellipse":
    case "triangle":
    case "diamond":
    case "hexagon":
    case "star":
    case "draw":
      return t.strokeWidth;
    case "note":
    case "card":
    case "text":
    case "image":
      return;
    default:
      return fn(t);
  }
}
function fn(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Ro({
  shape: t,
  shapes: e,
  camera: n,
  canvasSize: o,
  isDarkMode: r,
  editing: s,
  showPalette: c,
  installedFontFamilies: h,
  setShowPalette: g,
  setActiveColor: k,
  patchSelected: u,
  applyFormat: m,
  applyList: i,
  applyCustomFontFamily: a
}) {
  var rt, xt;
  const v = r ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", x = t.type === "draw", X = x ? t.color ? ft[t.color].border : H.ink : Tt(t), l = et(null), [z, y] = st({ width: 380, height: 260 });
  Qt(() => {
    const Y = l.current;
    if (!Y) return;
    const W = () => {
      const ct = Math.max(1, Math.ceil(Y.getBoundingClientRect().width)), pt = Math.max(1, Math.ceil(Y.getBoundingClientRect().height));
      y((Et) => Et.width === ct && Et.height === pt ? Et : { width: ct, height: pt });
    };
    if (W(), typeof ResizeObserver > "u") return;
    const Q = new ResizeObserver(W);
    return Q.observe(Y), () => Q.disconnect();
  }, [s, h.length, r, t, c]);
  const M = z.width, S = z.height, w = at(t), d = (w.minX - n.x) * n.z, p = (w.minY - n.y) * n.z, f = (w.maxX - n.x) * n.z, b = (w.maxY - n.y) * n.z, $ = Math.max(8, o.width - M - 8), I = Math.max(8, o.height - S - 8), N = (Y, W) => ({ left: Math.min(Math.max(8, Y), $), top: Math.min(Math.max(8, W), I) }), L = [
    N((d + f) / 2 - M / 2, p - S - 12),
    N((d + f) / 2 - M / 2, b + 12),
    N((o.width - M) / 2, 12),
    N(d - M - 12, p + (b - p - S) / 2),
    N(f + 12, p + (b - p - S) / 2)
  ], F = e.map((Y) => {
    const W = at(Y);
    return { left: (W.minX - n.x) * n.z, top: (W.minY - n.y) * n.z, right: (W.maxX - n.x) * n.z, bottom: (W.maxY - n.y) * n.z };
  });
  if (t.type === "arrow") {
    const Y = kt(t, new Map(e.map((pt) => [pt.id, pt])), e), W = Y.routing === "orthogonal" && Y.pathPoints ? ve(Y.pathPoints) : { x: (Y.start.x + Y.end.x) / 2, y: (Y.start.y + Y.end.y) / 2 }, Q = 180 * n.z, ct = 36 * n.z;
    F.push({
      left: (W.x - n.x) * n.z - Q / 2,
      top: (W.y - n.y) * n.z - ct / 2,
      right: (W.x - n.x) * n.z + Q / 2,
      bottom: (W.y - n.y) * n.z + ct / 2
    });
  }
  const A = L[0], C = (Y, W) => {
    const Q = Math.max(0, Math.min(Y.left + M, W.right) - Math.max(Y.left, W.left)), ct = Math.max(0, Math.min(Y.top + S, W.bottom) - Math.max(Y.top, W.top));
    return Q * ct;
  }, T = ((rt = L.map((Y) => ({
    candidate: Y,
    overlap: F.reduce((W, Q) => W + C(Y, Q), 0),
    distance: Math.hypot(Y.left - A.left, Y.top - A.top)
  })).sort((Y, W) => Y.overlap - W.overlap || Y.distance - W.distance)[0]) == null ? void 0 : rt.candidate) ?? A, O = dt(t), E = Ko(t), _ = jo(t), B = Ho(t), V = t.type === "arrow" ? "arrow" : B[0] ?? "color", [q, nt] = st(V);
  Qt(() => {
    B.includes(q) || nt(V);
  }, [V, B, q]);
  const R = t.type === "arrow" && !!((xt = t.orthogonalWaypoints) != null && xt.length), G = t.type === "arrow" ? t.arrowStart ?? "none" : "none", Z = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", J = (Y, W, Q, ct, pt = ct) => /* @__PURE__ */ P("button", { type: "button", title: ct, "aria-label": pt, onClick: Q, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${W ? "bg-blue-600 text-white" : v}`, children: Y }), ot = (Y) => /* @__PURE__ */ P("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: Y }), mt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ K("div", { ref: l, "data-canvas-inspector": x ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${r ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: T.left, top: T.top }, onPointerDown: (Y) => {
    Y.stopPropagation();
    const W = Y.target instanceof Element ? Y.target : null;
    W != null && W.closest("input, select, textarea") || Y.preventDefault();
  }, onClick: (Y) => Y.stopPropagation(), children: [
    /* @__PURE__ */ P("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: B.map((Y) => /* @__PURE__ */ P("button", { type: "button", role: "tab", "aria-selected": q === Y, onClick: () => nt(Y), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${q === Y ? "bg-blue-600 text-white" : v}`, children: mt[Y] }, Y)) }),
    /* @__PURE__ */ K("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: q === "color" || x ? void 0 : "none" }, children: [
      /* @__PURE__ */ P("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: x ? "그리기" : "색상" }),
      /* @__PURE__ */ P("button", { type: "button", title: x ? "그리기 색상 팔레트" : "색상 팔레트", "aria-label": x ? "그리기 색상" : "도형 색상", onClick: () => g((Y) => !Y), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${r ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ P(Hn, { className: "w-4 h-4", style: { color: X } }) }),
      c && /* @__PURE__ */ K("div", { className: `pointer-events-auto absolute left-0 top-10 z-50 flex items-center gap-1.5 p-2 rounded-xl border shadow-xl ${r ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        Dn.map((Y) => /* @__PURE__ */ P("button", { type: "button", title: ft[Y].label, "aria-label": `색 ${ft[Y].label}`, onClick: () => {
          k(Y), u({ color: Y, fillColor: void 0 }), g(!1);
        }, className: "w-5 h-5 rounded-full border", style: { background: ft[Y].bg, borderColor: ft[Y].border, outline: t.color === Y && !t.fillColor ? `2px solid ${H.blue}` : void 0, outlineOffset: 1 } }, Y)),
        !x && /* @__PURE__ */ P("label", { title: "배경 색 (자유 선택)", className: "w-5 h-5 rounded-full border relative overflow-hidden cursor-pointer flex items-center justify-center", style: { background: t.fillColor ?? Jt(t), outline: t.fillColor ? `2px solid ${H.blue}` : void 0, outlineOffset: 1 }, children: /* @__PURE__ */ P("input", { type: "color", value: t.fillColor ?? Jt(t), onChange: (Y) => {
          u({ fillColor: Y.target.value }), g(!1);
        }, className: "absolute inset-0 opacity-0 cursor-pointer" }) })
      ] })
    ] }),
    q !== "color" && !x && /* @__PURE__ */ K(Ft, { children: [
      /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ P("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ K("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: Tt(t), color: H.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ P("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ P("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? Tt(t), onChange: (Y) => u({ textColor: Y.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ K("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${r ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ P("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ P("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => u({ fontSize: Math.max(8, O - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ P(Bn, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ P("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: O }),
          /* @__PURE__ */ P("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => u({ fontSize: Math.min(96, O + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ P(jn, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ K("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${r ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ P("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (Y) => {
            const W = Fo(Y.target.value);
            u(W === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: W, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${r ? "text-slate-200" : "text-slate-700"}`, children: So.map((Y) => /* @__PURE__ */ P("option", { value: Y, className: r ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: bt[Y].label }, Y)) }),
          /* @__PURE__ */ P(Kn, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ K(Ft, { children: [
          /* @__PURE__ */ P("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (Y) => a(Y.target.value), onChange: (Y) => Y.currentTarget.value && a(Y.currentTarget.value), onKeyDown: (Y) => {
            Y.key === "Enter" && (Y.preventDefault(), a(Y.currentTarget.value));
          }, onDoubleClick: (Y) => Y.stopPropagation(), onPointerDown: (Y) => Y.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${r ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ P("datalist", { id: `canvas-font-families-${t.id}`, children: h.map((Y) => /* @__PURE__ */ P("option", { value: Y }, Y)) })
        ] })
      ] }),
      /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${r ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ P("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ P("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", Rn, "왼쪽 정렬"], ["center", Un, "가운데 정렬"], ["right", Vn, "오른쪽 정렬"]].map(([Y, W, Q]) => /* @__PURE__ */ P("button", { type: "button", "aria-label": Q, title: Q, onClick: () => u({ textAlign: Y }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${vt(t) === Y ? "bg-blue-600 text-white shadow-sm" : v}`, children: /* @__PURE__ */ P(W, { className: "w-4 h-4" }) }, Y)) }),
        s && /* @__PURE__ */ K(Ft, { children: [
          /* @__PURE__ */ P("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ P("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", Gn, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", qn, "번호 목록"]].map(([Y, W, Q]) => /* @__PURE__ */ P("button", { type: "button", onClick: () => i(Y), "aria-label": Q, title: Q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: W ? /* @__PURE__ */ P(W, { className: "w-4 h-4" }) : /* @__PURE__ */ P("span", { className: "text-base leading-none", children: "–" }) }, Y)) }),
          /* @__PURE__ */ P("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: Zn, label: "굵게" }, { cmd: "italic", Icon: Qn, label: "기울임" }, { cmd: "underline", Icon: Jn, label: "밑줄" }].map(({ cmd: Y, Icon: W, label: Q }) => /* @__PURE__ */ P("button", { type: "button", onClick: () => m(Y), "aria-label": Q, title: Q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ P(W, { className: "w-4 h-4" }) }, Y)) })
        ] })
      ] }),
      (q === "arrange" && t.type === "card" || q === "arrow" && t.type === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${r ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ K(Ft, { children: [
          /* @__PURE__ */ P("div", { className: `w-px h-6 ${r ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ P("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (Y) => Y.stopPropagation(), onChange: (Y) => u({ category: Y.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${r ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            ot("경로"),
            J("직선", (t.routing ?? "straight") === "straight", () => u({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            J("직각", t.routing === "orthogonal", () => u({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            J("곡선", (t.routing ?? "") === "curved", () => u({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            R && J("자동", !1, () => u({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            ot("선"),
            J("—", (t.strokeStyle ?? "solid") === "solid", () => u({ strokeStyle: "solid" }), "실선"),
            J("- -", t.strokeStyle === "dashed", () => u({ strokeStyle: "dashed" }), "파선"),
            J("···", t.strokeStyle === "dotted", () => u({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            ot("시작"),
            J(G === "none" ? "○" : G === "dot" ? "●" : "◀", G !== "none", () => u({ arrowStart: G === "none" ? "arrow" : G === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${G === "none" ? "없음" : G === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            ot("끝"),
            J(Z === "none" ? "○" : Z === "dot" ? "●" : "▶", Z !== "none", () => u({ arrowEnd: Z === "arrow" ? "dot" : Z === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${Z === "none" ? "없음" : Z === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      q === "diagram" && /* @__PURE__ */ P("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${r ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    _ && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-none ${r ? "border-slate-700" : "border-slate-100"}`, children: [
      ot("굵기"),
      Bo.map((Y) => /* @__PURE__ */ P(de.Fragment, { children: J(String(Y), E === Y, () => u({ strokeWidth: Y }), `굵기 ${Y}`) }, Y))
    ] })
  ] });
}
function Uo({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: o,
  commitEditorHtml: r,
  onEditorKeyDown: s,
  setShapes: c,
  onDirty: h,
  renderDiagram: g
}) {
  const k = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", u = (i, a) => /* @__PURE__ */ P(
    "div",
    {
      ref: o,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": "텍스트 편집",
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onInput: r,
      onBlur: r,
      onPointerDown: (v) => v.stopPropagation(),
      onDoubleClick: (v) => v.stopPropagation(),
      onKeyDown: s,
      className: `${k} ${i}`,
      style: a
    },
    "canvas-editor"
  );
  return { renderEditor: u, renderShapeBody: (i) => {
    const a = ft[i.color ?? "blue"], v = e === i.id, x = ee(i);
    if (i.type === "frame") {
      const w = i.strokeWidth ?? 2;
      return /* @__PURE__ */ P(
        "div",
        {
          "data-canvas-stroke-width": w,
          className: "w-full h-full rounded",
          style: { border: `${w / t.z}px solid ${n ? H.slate600 : H.slate400}` },
          children: /* @__PURE__ */ P(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? H.slate400 : H.muted
              },
              children: v ? u("", { fontSize: 13 / t.z }) : ne(i) || "프레임"
            }
          )
        }
      );
    }
    if (i.type === "note")
      return /* @__PURE__ */ P(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: a.bg, borderTop: `6px solid ${a.border}`, color: a.text },
          children: v ? u("font-medium", { color: Tt(i), fontSize: dt(i), fontFamily: ut(i), textAlign: vt(i) }) : x ? /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Tt(i), fontSize: dt(i), fontFamily: ut(i), textAlign: vt(i) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view") : /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Tt(i), fontSize: dt(i), fontFamily: ut(i), textAlign: vt(i) }, children: /* @__PURE__ */ P("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (i.type === "card") {
      const w = i.cardStyle === "glass";
      return hn(i) && g && !v ? /* @__PURE__ */ P("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: g(i) }) : /* @__PURE__ */ K(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: w ? H.glassFill : H.slateCard,
            backdropFilter: w ? "blur(12px)" : void 0,
            WebkitBackdropFilter: w ? "blur(12px)" : void 0,
            border: `1px solid ${w ? H.glassBorder : H.darkBorder}`,
            boxShadow: w ? H.glassShadow : H.cardShadow
          },
          children: [
            /* @__PURE__ */ K(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (d) => d.stopPropagation(),
                onDoubleClick: (d) => d.stopPropagation(),
                onBlur: (d) => {
                  const f = (d.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  c((b) => b.map(($) => $.id === i.id ? { ...$, category: f } : $)), h();
                },
                onKeyDown: (d) => {
                  d.key === "Enter" && (d.preventDefault(), d.currentTarget.blur());
                },
                children: [
                  "[ ",
                  i.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            v ? u("flex-1 font-medium", { color: i.textColor ?? H.white, fontSize: dt(i), fontFamily: ut(i), textAlign: vt(i) }) : /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: i.textColor ?? H.white, fontSize: dt(i), fontFamily: ut(i), textAlign: vt(i) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view"),
            /* @__PURE__ */ K("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              i.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (i.type === "text") {
      const w = n ? "text-slate-100" : "text-slate-900", d = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${w}`,
        style: { color: i.textColor, fontSize: dt(i), fontFamily: ut(i), textAlign: vt(i) }
      };
      return v ? u(`font-medium ${w}`, d.style) : x ? /* @__PURE__ */ P(
        "div",
        {
          "data-canvas-text-view": !0,
          ...d,
          dangerouslySetInnerHTML: { __html: x }
        },
        "canvas-view"
      ) : /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, ...d, children: /* @__PURE__ */ P("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (i.type === "image") {
      const w = fe(i.src);
      return w ? /* @__PURE__ */ P(
        "img",
        {
          src: w,
          alt: i.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const X = Jt(i), l = Je(i), z = Tt(i);
    if (i.type === "triangle" || i.type === "diamond" || i.type === "hexagon" || i.type === "star") {
      const w = i.strokeWidth ?? 2;
      return /* @__PURE__ */ K("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ P("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${i.w} ${i.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ P("polygon", { "data-canvas-stroke-width": w, points: tn(i.type, i.w, i.h), fill: X, stroke: l, strokeWidth: w / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ P("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: z }, children: v ? u("font-medium", { color: z, fontSize: dt(i), fontFamily: ut(i), textAlign: vt(i) }) : /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: dt(i), fontFamily: ut(i), textAlign: vt(i) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view") })
      ] });
    }
    const M = fe(i.src), S = i.type === "rect" || i.type === "ellipse" ? i.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ P(
      "div",
      {
        "data-canvas-stroke-width": S,
        className: `w-full h-full flex items-center justify-center p-3 ${i.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: X, border: `${S / t.z}px solid ${l}`, color: z },
        children: v ? u("font-medium", { color: z, fontSize: dt(i), fontFamily: ut(i), textAlign: vt(i) }) : /* @__PURE__ */ K("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: dt(i), fontFamily: ut(i), textAlign: vt(i) }, children: [
          /* @__PURE__ */ P("div", { dangerouslySetInnerHTML: { __html: x } }),
          M && /* @__PURE__ */ P(
            "a",
            {
              href: M,
              target: "_blank",
              rel: "noreferrer",
              onPointerDown: (w) => w.stopPropagation(),
              className: "block mt-1 text-[11px] underline opacity-70",
              children: "파일 열기"
            }
          )
        ] }, "canvas-view")
      }
    );
  } };
}
function Vo({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: o,
  selected: r,
  editingId: s,
  boardIdentity: c
}) {
  const [h, g] = st({ width: 0, height: 0 });
  $t(() => {
    const v = t.current;
    if (!v) return;
    let x = -1, X = -1;
    const l = (y = v.clientWidth, M = v.clientHeight) => {
      y === x && M === X || (x = y, X = M, g({ width: y, height: M }));
    };
    if (l(), typeof ResizeObserver < "u") {
      const y = new ResizeObserver((M) => {
        var w;
        const S = (w = M[0]) == null ? void 0 : w.contentRect;
        l((S == null ? void 0 : S.width) ?? v.clientWidth, (S == null ? void 0 : S.height) ?? v.clientHeight);
      });
      return y.observe(v), () => y.disconnect();
    }
    const z = () => l();
    return window.addEventListener("resize", z), () => window.removeEventListener("resize", z);
  }, [c, t]);
  const k = Nt(() => new Map(n.map((v) => [v.id, v])), [n]), u = Nt(
    () => [...n].sort((v, x) => (v.type === "frame" ? -1 : 0) - (x.type === "frame" ? -1 : 0)),
    [n]
  ), m = Nt(() => {
    if (!t.current || h.width <= 0 || h.height <= 0) return null;
    const v = 200 / o.z;
    return {
      minX: o.x - v,
      minY: o.y - v,
      maxX: o.x + h.width / o.z + v,
      maxY: o.y + h.height / o.z + v
    };
  }, [o, t, h]), i = lt((v) => {
    if (!m) return !1;
    if (v.id === s || r.has(v.id)) return !0;
    if (v.type === "arrow") {
      const X = kt(v, k, e.current), z = (X.routing === "orthogonal" ? X.pathPoints : null) ?? [X.start, X.end], y = Math.min(...z.map((d) => d.x)), M = Math.max(...z.map((d) => d.x)), S = Math.min(...z.map((d) => d.y)), w = Math.max(...z.map((d) => d.y));
      return M >= m.minX && y <= m.maxX && w >= m.minY && S <= m.maxY;
    }
    const x = at(v);
    return x.maxX >= m.minX && x.minX <= m.maxX && x.maxY >= m.minY && x.minY <= m.maxY;
  }, [s, r, k, e, m]), a = Nt(
    () => u.filter(i),
    [i, u]
  );
  return { shapeById: k, visiblePaintOrder: a };
}
function Go({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: o,
  onDirty: r,
  patchSelected: s
}) {
  const c = lt(() => {
    const a = t.current;
    if (!a || !e) return;
    let v;
    try {
      v = me(a.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const x = a.scrollHeight;
    n((X) => X.map((l) => {
      if (l.id !== e) return l;
      const z = { ...l, html: v, text: void 0 };
      if (l.type === "text")
        return l.manualSize ? z : { ...z, ...Do(a, l) };
      if (l.type === "arrow") return z;
      const y = l.type === "note" ? 32 : l.type === "card" ? 96 : (
        // category header + type footer
        (l.type === "frame", 24)
      ), M = Math.max(l.h, x + y);
      return { ...z, h: M };
    })), r();
  }, [e, r]), h = (a) => {
    var v;
    (v = t.current) == null || v.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(a), c();
  }, g = () => {
    var X;
    const a = (X = window.getSelection()) == null ? void 0 : X.anchorNode, v = a instanceof Element ? a : a == null ? void 0 : a.parentElement, x = v == null ? void 0 : v.closest("ul, ol");
    return x instanceof HTMLElement ? x : null;
  }, k = (a, v, x) => {
    const X = document.createElement(v);
    for (; a.firstChild; ) X.append(a.firstChild);
    return a.replaceWith(X), X;
  }, u = (a) => {
    const v = t.current;
    if (!v) return;
    v.focus();
    const x = g();
    if (a === "number")
      if ((x == null ? void 0 : x.tagName) === "OL")
        x.removeAttribute("data-list-style");
      else if ((x == null ? void 0 : x.tagName) === "UL")
        k(x, "ol");
      else {
        document.execCommand("insertOrderedList");
        const X = g();
        X == null || X.removeAttribute("data-list-style");
      }
    else if ((x == null ? void 0 : x.tagName) === "UL") {
      const X = x.dataset.listStyle;
      a === X ? document.execCommand("insertUnorderedList") : x.dataset.listStyle = a;
    } else {
      (x == null ? void 0 : x.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const X = g();
      X && (X.dataset.listStyle = a);
    }
    c();
  };
  return { commitEditorHtml: c, applyFormat: h, applyList: u, onEditorKeyDown: (a) => {
    if (a.key === "Tab") {
      a.preventDefault(), document.execCommand(a.shiftKey ? "outdent" : "indent"), c();
      return;
    }
    if (a.key === " ") {
      const v = window.getSelection();
      if (v && v.isCollapsed && v.anchorNode) {
        const x = v.anchorNode, X = x.textContent || "", l = v.anchorOffset, z = X.slice(0, l).trim();
        if (!g()) {
          if (z === "-" || z === "–") {
            a.preventDefault(), x.textContent = X.slice(l), u("dash");
            return;
          }
          if (z === "*") {
            a.preventDefault(), x.textContent = X.slice(l), u("bullet");
            return;
          }
          if (z === "1.") {
            a.preventDefault(), x.textContent = X.slice(l), u("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (a) => {
    const v = un(a);
    if (!v) {
      s({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    s({
      fontFamily: "custom",
      customFontFamily: v
    });
  } };
}
function qo({
  boardIdentity: t,
  tool: e,
  controlledShapes: n,
  onShapesChange: o,
  onDirty: r
}) {
  const s = et(null), c = et(null), [h, g] = st([]), k = n !== void 0 && o !== void 0, u = et(/* @__PURE__ */ new WeakMap()), m = Nt(() => {
    const D = u.current;
    return (k ? n ?? [] : h).map((U) => {
      let j = D.get(U);
      return j === void 0 && (j = rn(U), D.set(U, j)), j;
    }).filter((U) => U !== null);
  }, [k, n, h]), i = et(o);
  i.current = o;
  const a = lt((D) => {
    const U = i.current;
    if (!U) {
      g(D);
      return;
    }
    U(typeof D == "function" ? D : () => D);
  }, []), [v, x] = st({ x: -400, y: -300, z: 1 }), [X, l] = st(/* @__PURE__ */ new Set()), [z, y] = st(null), [M, S] = st({ kind: "none" }), [w, d] = st(!1), [p, f] = st([]), [b, $] = st(""), [I, N] = st(!1), [L, F] = st(null), [A, C] = st("blue"), [T, O] = st(Zt), E = et(A);
  E.current = A;
  const _ = et([]), B = et([]), V = et(null), q = et(/* @__PURE__ */ new Map()), nt = et(m), R = et(v), G = et(e), Z = et(X), J = et(z);
  nt.current = m, R.current = v, G.current = e, Z.current = X, J.current = z;
  const ot = et({ kind: "none" }), mt = lt((D) => {
    ot.current = D, S(D);
  }, []), rt = lt((D) => {
    Z.current = D, l(D);
  }, []);
  Qt(() => {
    var U;
    const D = /* @__PURE__ */ new Set();
    Z.current = D, J.current = null, q.current.clear(), _.current = [], B.current = [], V.current = null, mt({ kind: "none" }), l(D), y(null), d(!1), f([]), F(null), $(""), (U = s.current) == null || U.focus();
  }, [mt, t]), $t(() => {
    let D = !1;
    const U = () => {
      const tt = Io();
      D || O(tt);
    };
    if (U(), typeof document > "u" || !("fonts" in document)) return;
    const j = () => U();
    return document.fonts.addEventListener("loadingdone", j), () => {
      D = !0, document.fonts.removeEventListener("loadingdone", j);
    };
  }, [t]);
  const Y = (z ? m.find((D) => D.id === z) : void 0) !== void 0;
  Qt(() => {
    if (!z || !Y) return;
    const D = () => {
      const j = c.current, tt = nt.current.find((ie) => ie.id === z);
      if (!j || !tt || (j.dataset.seeded !== z && (j.innerHTML = ee(tt), j.dataset.seeded = z), document.activeElement === j)) return;
      j.focus();
      const zt = document.createRange();
      zt.selectNodeContents(j), zt.collapse(!1);
      const Xt = window.getSelection();
      Xt == null || Xt.removeAllRanges(), Xt == null || Xt.addRange(zt);
    };
    D();
    const U = requestAnimationFrame(D);
    return () => cancelAnimationFrame(U);
  }, [z, Y]);
  const W = lt((D) => {
    a((U) => {
      const j = typeof D == "function" ? D(U) : D;
      return _.current.push(U), _.current.length > 100 && _.current.shift(), B.current = [], j;
    }), r();
  }, [r]), Q = lt((D) => D.size === 0 ? !1 : (W((U) => U.filter((j) => D.has(j.id) ? !1 : j.type !== "arrow" ? !0 : !(j.fromId && D.has(j.fromId)) && !(j.toId && D.has(j.toId)))), rt(/* @__PURE__ */ new Set()), $(`${D.size}개 삭제됨`), !0), [W, rt]), ct = lt(() => {
    V.current = nt.current;
  }, []), pt = lt(() => {
    const D = V.current;
    V.current = null, !(!D || D === nt.current) && (_.current.push(D), _.current.length > 100 && _.current.shift(), B.current = [], r());
  }, [r]), Et = lt((D, U) => {
    var zt;
    const j = (zt = s.current) == null ? void 0 : zt.getBoundingClientRect(), tt = R.current;
    return j ? { x: (D - j.left) / tt.z + tt.x, y: (U - j.top) / tt.z + tt.y } : { x: 0, y: 0 };
  }, []), re = lt(() => {
    var j;
    const D = (j = s.current) == null ? void 0 : j.getBoundingClientRect(), U = R.current;
    return D ? { x: U.x + D.width / 2 / U.z, y: U.y + D.height / 2 / U.z } : { x: 0, y: 0 };
  }, []), Dt = lt((D) => {
    const U = new Set(nt.current.filter((tt) => D.has(tt.id) && tt.groupId).map((tt) => tt.groupId));
    if (U.size === 0) return D;
    const j = new Set(D);
    for (const tt of nt.current) tt.groupId && U.has(tt.groupId) && j.add(tt.id);
    return j;
  }, []);
  return {
    containerRef: s,
    editorRef: c,
    localShapes: h,
    setLocalShapes: g,
    controlled: k,
    shapes: m,
    setShapes: a,
    camera: v,
    setCamera: x,
    cameraRef: R,
    selected: X,
    setSelected: l,
    selectedRef: Z,
    editingId: z,
    setEditingId: y,
    editingIdRef: J,
    interaction: M,
    interactionRef: ot,
    applyInteraction: mt,
    isSpaceDown: w,
    setIsSpaceDown: d,
    guides: p,
    setGuides: f,
    announcement: b,
    setAnnouncement: $,
    showInspectorPalette: I,
    setShowInspectorPalette: N,
    eraserPos: L,
    setEraserPos: F,
    activeColor: A,
    setActiveColor: C,
    activeColorRef: E,
    installedFontFamilies: T,
    pointers: q,
    past: _,
    future: B,
    selectNow: rt,
    commit: W,
    deleteSelection: Q,
    beginHistory: ct,
    endHistory: pt,
    toPage: Et,
    viewportCentre: re,
    expandToGroups: Dt,
    toolRef: G,
    shapesRef: nt
  };
}
function Zo({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: o,
  maxZoom: r,
  shapes: s,
  selected: c,
  editingId: h,
  textualTypes: g,
  onZoomChange: k,
  onSelectionChange: u,
  onLocalCursor: m,
  toPage: i
}) {
  $t(() => {
    k == null || k(e.z);
  }, [e.z, k]), $t(() => {
    const z = t.current;
    if (!z) return;
    const y = (M) => {
      if (M.preventDefault(), M.ctrlKey || M.metaKey) {
        const S = z.getBoundingClientRect();
        n((w) => {
          const d = Math.min(r, Math.max(o, w.z * Math.exp(-M.deltaY * 0.01))), p = M.clientX - S.left, f = M.clientY - S.top;
          return { x: w.x + p / w.z - p / d, y: w.y + f / w.z - f / d, z: d };
        });
      } else
        n((S) => ({ ...S, x: S.x + M.deltaX / S.z, y: S.y + M.deltaY / S.z }));
    };
    return z.addEventListener("wheel", y, { passive: !1 }), () => z.removeEventListener("wheel", y);
  }, [t, r, o, n]);
  const a = Nt(() => {
    const z = s.filter((y) => c.has(y.id));
    return {
      count: z.length,
      canGroup: z.length > 1,
      canUngroup: z.some((y) => !!y.groupId),
      isTextual: z.length === 1 && g.includes(z[0].type),
      selectedIds: z.map((y) => y.id)
    };
  }, [c, s, g]);
  $t(() => {
    u == null || u(a);
  }, [u, a]);
  const v = Nt(() => {
    if (h) {
      const M = s.find((S) => S.id === h);
      return M && M.type !== "image" && M.type !== "draw" ? M : null;
    }
    const z = s.filter((M) => c.has(M.id));
    if (z.length > 1 && z.every((M) => M.type === "draw")) return z[0] ?? null;
    if (z.length !== 1) return null;
    const y = z[0];
    return y && y.type !== "image" ? y : null;
  }, [h, c, s]), x = et(0);
  return { selectionInfo: a, inspectorShape: v, onContainerPointerMove: m ? (z) => {
    const y = performance.now();
    y - x.current < 60 || (x.current = y, m(i(z.clientX, z.clientY)));
  } : void 0, onContainerPointerLeave: m ? () => m(null) : void 0 };
}
function Qo(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, o = 1 / 0, r = -1 / 0, s = -1 / 0;
  for (const m of t) {
    const i = at(m);
    n = Math.min(n, i.minX), o = Math.min(o, i.minY), r = Math.max(r, i.maxX), s = Math.max(s, i.maxY);
  }
  const c = 40, h = r - n + c * 2, g = s - o + c * 2;
  if (!Number.isFinite(h) || !Number.isFinite(g) || h > Ot.maxExportDimension || g > Ot.maxExportDimension || h * g > Ot.maxExportPixels) return null;
  const k = (m, i, a, v, x) => {
    const X = m.fontSize ?? a, l = ut(m), z = on(ee(m));
    if (z.length === 0) return "";
    const y = Lt(m), M = m.textAlign === "right" ? "end" : m.textAlign === "center" ? "middle" : m.textAlign === "left" ? "start" : x, S = M === "end" ? y.maxX - 12 : M === "middle" ? (y.minX + y.maxX) / 2 : y.minX + 12, w = y.minY + X + 12;
    return z.map((d, p) => {
      const f = d.map((b) => `<tspan style="${[
        b.bold ? "font-weight:700" : `font-weight:${v}`,
        b.italic ? "font-style:italic" : "",
        b.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Ct(b.text)}</tspan>`).join("");
      return `<text x="${S}" y="${w + p * X * 1.4}" font-family="${Ct(l)}" font-size="${X}" fill="${i}" text-anchor="${M}">${f}</text>`;
    }).join("");
  }, u = t.map((m) => {
    const i = ft[m.color ?? "blue"], a = Lt(m), v = wt(m), x = m.rotation ? ` transform="rotate(${m.rotation * 180 / Math.PI} ${v.x} ${v.y})"` : "", X = m.color ? ft[m.color].border : H.ink;
    if (m.type === "draw" && m.points) {
      const d = m.drawMode ?? "pen", p = m.strokeWidth ?? 3, f = m.points.length >= 2 ? nn(m.points, p, d) : "";
      if (f)
        return `<path d="${f}" fill="${X}"${d === "highlighter" ? ' fill-opacity="0.35"' : ""} fill-rule="evenodd" stroke="none"/>`;
      const b = d === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${en(m.points)}" fill="none" stroke="${X}" stroke-width="${p}"${b} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (m.type === "arrow") {
      const d = kt(m, new Map(t.map((_) => [_.id, _])), t), p = m.strokeWidth ?? 2.5, f = Math.max(10, 8 + p * 2), b = Math.max(4, 2 + p), $ = d.routing === "orthogonal" && d.pathPoints ? d.pathPoints : null, I = $ && $.length > 1, N = I ? ue($) : d.routing === "curved" ? `M ${d.start.x} ${d.start.y} Q ${d.control.x} ${d.control.y} ${d.end.x} ${d.end.y}` : `M ${d.start.x} ${d.start.y} L ${d.end.x} ${d.end.y}`, L = I ? Ve($) : d.routing === "curved" ? (() => {
        const _ = Kt(0.94, d.start, d.control, d.end);
        return Math.atan2(d.end.y - _.y, d.end.x - _.x);
      })() : Math.atan2(d.end.y - d.start.y, d.end.x - d.start.x), F = I ? Bt($[0], $[1]) : d.routing === "orthogonal" && d.start.side ? d.start.side === "e" ? 0 : d.start.side === "w" ? Math.PI : d.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Bt(d.start, d.end), A = m.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : m.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", C = (_, B, V, q) => {
        if (_ === "dot") return `<circle cx="${B}" cy="${V}" r="${b}" fill="${X}"/>`;
        if (_ === "none") return "";
        const nt = `${B - f * Math.cos(q - 0.4)},${V - f * Math.sin(q - 0.4)}`, R = `${B - f * Math.cos(q + 0.4)},${V - f * Math.sin(q + 0.4)}`;
        return `<polygon points="${B},${V} ${nt} ${R}" fill="${X}"/>`;
      }, T = d.routing === "orthogonal" && d.pathPoints ? ve(d.pathPoints) : d.bend === 0 ? { x: (d.start.x + d.end.x) / 2, y: (d.start.y + d.end.y) / 2 } : Kt(0.5, d.start, d.control, d.end), O = ne(m), E = O ? `<text x="${T.x}" y="${T.y - 6}" text-anchor="middle" font-family="${Ct(ut(m))}" font-size="${m.fontSize ?? 12}" fill="${X}">${Ct(O)}</text>` : "";
      return `<path d="${N}" fill="none" stroke="${X}" stroke-width="${p}" stroke-linecap="round" stroke-linejoin="round"${A}/>` + C(m.arrowEnd ?? "arrow", d.end.x, d.end.y, L) + C(m.arrowStart ?? "none", d.start.x, d.start.y, F + Math.PI) + E;
    }
    if (m.type === "image" && m.src) {
      const d = fe(m.src);
      return d ? `<image href="${Ct(d)}" x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}"${x}/>` : "";
    }
    if (m.type === "frame")
      return `<g${x}><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" fill="none" stroke="${H.slate400}" stroke-width="${m.strokeWidth ?? 2}" rx="4"/><text x="${a.minX}" y="${a.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${H.muted}">${Ct(m.text ?? "프레임")}</text></g>`;
    if (m.type === "note")
      return `<g${x}><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" fill="${i.bg}"/><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="6" fill="${i.border}"/>` + k(m, i.text, 14, "600", "start") + "</g>";
    if (m.type === "card") {
      const d = m.cardStyle === "glass";
      return `<g${x}><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" rx="16" fill="${d ? H.glassFill : H.slateCard}"/><text x="${a.minX + 16}" y="${a.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${H.slate400}">[ ${Ct(m.category ?? "ENTITY")} ]</text>` + k(m, H.white, 16, "700", "start") + "</g>";
    }
    const l = m.type === "rect" || m.type === "ellipse" || m.type === "triangle" || m.type === "diamond" || m.type === "hexagon" || m.type === "star" ? m.strokeWidth ?? 2 : 2, z = Jt(m), y = Je(m), M = m.type === "triangle" || m.type === "diamond" || m.type === "hexagon" || m.type === "star", S = M ? tn(m.type, a.maxX - a.minX, a.maxY - a.minY).split(" ").map((d) => {
      const [p, f] = d.split(",").map(Number);
      return `${p + a.minX},${f + a.minY}`;
    }).join(" ") : "", w = m.type === "ellipse" ? `<ellipse cx="${(a.minX + a.maxX) / 2}" cy="${(a.minY + a.maxY) / 2}" rx="${(a.maxX - a.minX) / 2}" ry="${(a.maxY - a.minY) / 2}" fill="${z}" stroke="${y}" stroke-width="${l}"/>` : M ? `<polygon points="${S}" fill="${z}" stroke="${y}" stroke-width="${l}" stroke-linejoin="round"/>` : `<rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" rx="12" fill="${z}" stroke="${y}" stroke-width="${l}"/>`;
    return `<g${x}>${w}${k(m, i.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${h}" height="${g}" viewBox="${n - c} ${o - c} ${h} ${g}"><rect x="${n - c}" y="${o - c}" width="${h}" height="${g}" fill="${e ? H.canvasDark : H.canvasLight}"/>` + u + "</svg>";
}
async function Jo(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), o = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), r = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), s = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, c = new Image();
  c.crossOrigin = "anonymous";
  try {
    await new Promise((i, a) => {
      c.onload = () => i(), c.onerror = () => a(new Error("svg rasterise failed")), c.src = s;
    });
  } catch {
    return null;
  }
  const h = 2, g = o * h, k = r * h;
  if (!Number.isSafeInteger(g) || !Number.isSafeInteger(k) || g > Ot.maxExportDimension || k > Ot.maxExportDimension || g * k > Ot.maxExportPixels) return null;
  const u = document.createElement("canvas");
  u.width = g, u.height = k;
  const m = u.getContext("2d");
  return m ? (m.scale(h, h), m.drawImage(c, 0, 0), new Promise((i) => {
    try {
      u.toBlob((a) => i(a), "image/png");
    } catch {
      i(null);
    }
  })) : null;
}
function tr(t, e, n) {
  if (t.length < 2) return;
  const o = t.filter(
    (i) => i.type !== "draw" && i.type !== "arrow" && i.type !== "frame" && i.type !== "image"
  );
  if (o.length < 2) return;
  const r = o.map((i, a) => ({
    id: i.id,
    i: a,
    x: wt(i).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: wt(i).y,
    vx: 0,
    vy: 0
  }));
  for (let i = 0; i < r.length; i++)
    for (let a = 0; a < i; a++)
      if (Math.abs(r[i].x - r[a].x) < 1 && Math.abs(r[i].y - r[a].y) < 1) {
        const v = 2 * Math.PI * i / r.length;
        r[i].x += Math.cos(v) * 10, r[i].y += Math.sin(v) * 10;
        break;
      }
  const s = new Map(r.map((i) => [i.id, i])), c = [];
  for (const i of t) {
    if (i.type !== "arrow") continue;
    const a = i.fromId ? s.get(i.fromId) : null, v = i.toId ? s.get(i.toId) : null;
    a && v && c.push([a, v]);
  }
  const h = 220, g = h * h, k = 80;
  let u = 400;
  const m = u / k;
  for (let i = 0; i < k; i++) {
    for (let a = 0; a < r.length; a++)
      r[a].vx = 0, r[a].vy = 0;
    for (let a = 0; a < r.length; a++)
      for (let v = a + 1; v < r.length; v++) {
        const x = r[a], X = r[v], l = x.x - X.x, z = x.y - X.y, y = Math.hypot(l, z) || 0.01, M = g / y, S = l / y * M, w = z / y * M;
        x.vx += S, x.vy += w, X.vx -= S, X.vy -= w;
      }
    for (const [a, v] of c) {
      const x = a.x - v.x, X = a.y - v.y, l = Math.hypot(x, X) || 0.01, z = l * l / h, y = x / l * z, M = X / l * z;
      a.vx -= y, a.vy -= M, v.vx += y, v.vy += M;
    }
    for (const a of r) {
      const v = Math.hypot(a.vx, a.vy) || 0.01, x = Math.min(v, u);
      a.x += a.vx / v * x, a.y += a.vy / v * x;
    }
    u = Math.max(0.5, u - m);
  }
  e((i) => i.map((a) => {
    const v = s.get(a.id);
    return v ? { ...a, x: v.x - a.w / 2, y: v.y - a.h / 2 } : a;
  })), n();
}
function er(t, {
  controlled: e,
  past: n,
  future: o,
  setLocalShapes: r,
  setCamera: s,
  selectNow: c,
  setEditingId: h
}) {
  let g;
  try {
    g = Wn(t);
  } catch {
    return;
  }
  e || (n.current = [], o.current = [], r(g.shapes.map(nr))), s(g.camera), c(/* @__PURE__ */ new Set()), h(null);
}
function nr(t) {
  var e;
  switch (t.type) {
    case "arrow":
      return {
        ...t,
        orthogonalWaypoints: (e = t.orthogonalWaypoints) == null ? void 0 : e.map((n) => ({ x: n.x, y: n.y }))
      };
    case "draw":
      return {
        ...t,
        points: t.points.map(([n, o]) => [n, o])
      };
    case "note":
    case "card":
    case "text":
    case "image":
    case "frame":
    case "rect":
    case "ellipse":
    case "triangle":
    case "diamond":
    case "hexagon":
    case "star":
      return { ...t };
    default:
      return or(t);
  }
}
function or(t) {
  throw new On(`Unhandled canvas shape type: ${String(t)}.`);
}
function rr({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: o,
  selectedRef: r,
  past: s,
  future: c,
  controlled: h,
  isDarkMode: g,
  minZoom: k,
  maxZoom: u,
  onToolChange: m,
  onDirty: i,
  commit: a,
  deleteSelection: v,
  selectNow: x,
  viewportCentre: X,
  setShapes: l,
  setLocalShapes: z,
  setCamera: y,
  setEditingId: M,
  setAnnouncement: S,
  createId: w
}) {
  const d = lt((f) => {
    const b = X(), $ = rn({
      id: w(),
      x: f.x ?? b.x - f.w / 2,
      y: f.y ?? b.y - f.h / 2,
      ...f
    });
    if (!$) throw new Error("Canvas could not create a valid shape.");
    return a((I) => [...I, $]), x(/* @__PURE__ */ new Set([$.id])), m("select"), S(`${$.type} 추가됨`), $;
  }, [a, w, m, x, S, X]), p = lt(() => Qo(n.current, g), [g, n]);
  Ln(t, () => ({
    addNote: (f) => {
      const b = d({ type: "note", w: 180, h: 180, color: f, text: "" });
      M(b.id);
    },
    addCard: (f, b, $, I) => {
      d({ type: "card", w: 260, h: 150, text: f, category: b, cardStyle: $, color: I });
    },
    addText: () => {
      const f = d({ type: "text", w: 220, h: 44, text: "" });
      M(f.id);
    },
    addShape: (f, b, $) => {
      d({
        type: f,
        w: f === "ellipse" ? 220 : 200,
        h: f === "ellipse" ? 110 : 140,
        color: b,
        text: $ ?? ""
      });
    },
    addArrow: () => {
      const f = X(), b = { id: w(), type: "arrow", x: f.x - 140, y: f.y, w: 280, h: 0 };
      a(($) => [...$, b]), x(/* @__PURE__ */ new Set([b.id])), m("select");
    },
    addImage: (f, b, $, I) => {
      d({ type: "image", w: $, h: I, src: f, fileName: b });
    },
    addFileCard: (f, b, $) => {
      d({ type: "rect", w: 260, h: 120, color: "purple", text: $, src: b, fileName: f });
    },
    updateShapeText: (f, b) => {
      a(($) => $.map((I) => I.id === f ? { ...I, text: b, html: void 0 } : I));
    },
    setTool: m,
    undo: () => {
      const f = s.current.pop();
      f && (c.current.push(n.current), l(f), x(/* @__PURE__ */ new Set()), M(null), i(), S("실행 취소"));
    },
    redo: () => {
      const f = c.current.pop();
      f && (s.current.push(n.current), l(f), x(/* @__PURE__ */ new Set()), M(null), i(), S("다시 실행"));
    },
    deleteSelected: () => {
      v(r.current);
    },
    duplicateSelected: () => {
      var I;
      const f = r.current;
      if (f.size === 0) return;
      const b = [], $ = /* @__PURE__ */ new Map();
      for (const N of n.current) {
        if (!f.has(N.id)) continue;
        let L = N.groupId;
        L && ($.has(L) || $.set(L, w("g")), L = $.get(L)), b.push({
          ...N,
          id: w(),
          x: N.x + 24,
          y: N.y + 24,
          groupId: L,
          points: (I = N.points) == null ? void 0 : I.map(([F, A]) => [F + 24, A + 24]),
          orthogonalWaypoints: N.type === "arrow" && N.orthogonalWaypoints ? N.orthogonalWaypoints.map((F) => ({ x: F.x + 24, y: F.y + 24 })) : void 0
        });
      }
      a((N) => [...N, ...b]), x(new Set(b.map((N) => N.id))), S(`${b.length}개 복제됨`);
    },
    group: () => {
      var $;
      const f = r.current;
      if (f.size < 2) return;
      const b = w("g");
      a((I) => I.map((N) => f.has(N.id) ? { ...N, groupId: b } : N)), S(`${f.size}개 그룹화됨`), ($ = e.current) == null || $.focus();
    },
    ungroup: () => {
      var b;
      const f = r.current;
      f.size !== 0 && (a(($) => $.map((I) => f.has(I.id) ? { ...I, groupId: void 0 } : I)), S("그룹 해제됨"), (b = e.current) == null || b.focus());
    },
    zoomBy: (f) => {
      y((b) => {
        var F;
        const $ = (F = e.current) == null ? void 0 : F.getBoundingClientRect(), I = Math.min(u, Math.max(k, b.z * f));
        if (!$) return { ...b, z: I };
        const N = b.x + $.width / 2 / b.z, L = b.y + $.height / 2 / b.z;
        return { x: N - $.width / 2 / I, y: L - $.height / 2 / I, z: I };
      });
    },
    zoomTo: (f) => {
      y((b) => {
        var F;
        const $ = (F = e.current) == null ? void 0 : F.getBoundingClientRect(), I = Math.min(u, Math.max(k, f));
        if (!$) return { ...b, z: I };
        const N = b.x + $.width / 2 / b.z, L = b.y + $.height / 2 / b.z;
        return { x: N - $.width / 2 / I, y: L - $.height / 2 / I, z: I };
      });
    },
    resetZoom: () => {
      y((f) => {
        var N;
        const b = (N = e.current) == null ? void 0 : N.getBoundingClientRect();
        if (!b) return { ...f, z: 1 };
        const $ = f.x + b.width / 2 / f.z, I = f.y + b.height / 2 / f.z;
        return { x: $ - b.width / 2, y: I - b.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var C;
      const f = n.current, b = (C = e.current) == null ? void 0 : C.getBoundingClientRect();
      if (f.length === 0 || !b) return;
      let $ = 1 / 0, I = 1 / 0, N = -1 / 0, L = -1 / 0;
      for (const T of f) {
        const O = at(T);
        $ = Math.min($, O.minX), I = Math.min(I, O.minY), N = Math.max(N, O.maxX), L = Math.max(L, O.maxY);
      }
      const F = 80, A = Math.min(u, Math.max(
        k,
        Math.min(b.width / (N - $ + F * 2), b.height / (L - I + F * 2))
      ));
      y({
        x: ($ + N) / 2 - b.width / 2 / A,
        y: (I + L) / 2 - b.height / 2 / A,
        z: A
      });
    },
    autoLayout: () => tr(n.current, a, () => S("자동 배치 완료")),
    exportSvg: p,
    exportPng: () => Jo(p),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (f) => er(f, {
      controlled: h,
      past: s,
      future: c,
      setLocalShapes: z,
      setCamera: y,
      selectNow: x,
      setEditingId: M
    })
  }), [
    d,
    p,
    a,
    w,
    v,
    g,
    u,
    k,
    i,
    m,
    x,
    y,
    M,
    z,
    l,
    S,
    X,
    h
  ]);
}
function ir(t) {
  if (t.altKey || t.ctrlKey || t.metaKey) return null;
  switch (t.code) {
    case "KeyV":
      return "select";
    case "KeyP":
      return "draw";
    case "KeyT":
      return "text";
    case "KeyF":
      return "frame";
    default:
      return null;
  }
}
function ar({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: o,
  editingIdRef: r,
  toolRef: s,
  past: c,
  future: h,
  textualTypes: g,
  setIsSpaceDown: k,
  setEditingId: u,
  setShapes: m,
  setAnnouncement: i,
  commit: a,
  deleteSelection: v,
  selectNow: x,
  onDirty: X,
  onToolChange: l,
  createId: z
}) {
  const y = lt((M, S) => {
    const w = o.current;
    w.size !== 0 && a((d) => d.map((p) => {
      var f;
      return w.has(p.id) ? {
        ...p,
        x: p.x + M,
        y: p.y + S,
        points: (f = p.points) == null ? void 0 : f.map(([b, $]) => [b + M, $ + S])
      } : p;
    }));
  }, [a, o]);
  $t(() => {
    const M = (p) => {
      const f = p;
      return !!f && (f.tagName === "INPUT" || f.tagName === "TEXTAREA" || f.isContentEditable);
    }, S = (p) => p instanceof Element && !!p.closest("input, select, button, textarea, option, label, [data-canvas-control]"), w = (p) => {
      var A, C, T, O;
      const f = t.current, b = document.activeElement, $ = p.target instanceof Node && !!(f != null && f.contains(p.target)), I = !!f && (b === f || f.contains(b));
      if (!$ && !I || S(p.target)) return;
      if (p.code === "Space" && !M(p.target)) {
        k(!0), p.preventDefault();
        return;
      }
      if (M(p.target)) {
        if (p.key === "Escape")
          p.preventDefault(), u(null), (A = e.current) == null || A.blur(), (C = t.current) == null || C.focus();
        else if ((p.key === "Delete" || p.key === "Backspace") && !r.current) {
          const E = o.current;
          v(E) && p.preventDefault();
        }
        return;
      }
      const N = p.metaKey || p.ctrlKey, L = o.current;
      if (N && p.key.toLowerCase() === "z") {
        if (p.preventDefault(), p.shiftKey) {
          const E = h.current.pop();
          E && (c.current.push(n.current), m(E), X());
        } else {
          const E = c.current.pop();
          E && (h.current.push(n.current), m(E), X());
        }
        x(/* @__PURE__ */ new Set());
        return;
      }
      if (N && p.key.toLowerCase() === "g") {
        if (p.preventDefault(), p.shiftKey)
          L.size > 0 && (a((E) => E.map((_) => L.has(_.id) ? { ..._, groupId: void 0 } : _)), i("그룹 해제됨"));
        else if (L.size > 1) {
          const E = z("g");
          a((_) => _.map((B) => L.has(B.id) ? { ...B, groupId: E } : B)), i(`${L.size}개 그룹화됨`);
        }
        return;
      }
      if (N && p.key.toLowerCase() === "a") {
        p.preventDefault(), x(new Set(n.current.map((E) => E.id))), i(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (p.key === "Delete" || p.key === "Backspace") {
        v(L) && p.preventDefault();
        return;
      }
      if (p.key.startsWith("Arrow")) {
        p.preventDefault();
        const E = p.shiftKey ? 10 : 1;
        p.key === "ArrowLeft" && y(-E, 0), p.key === "ArrowRight" && y(E, 0), p.key === "ArrowUp" && y(0, -E), p.key === "ArrowDown" && y(0, E);
        return;
      }
      if (p.key === "Tab" && n.current.length > 0) {
        p.preventDefault();
        const E = n.current, _ = E.findIndex((q) => L.has(q.id)), B = p.shiftKey ? _ <= 0 ? E.length - 1 : _ - 1 : _ === -1 || _ === E.length - 1 ? 0 : _ + 1, V = E[B];
        x(/* @__PURE__ */ new Set([V.id])), i(`${V.type} 선택됨: ${ne(V) || "내용 없음"}`);
        return;
      }
      if (p.key === "Enter" && L.size === 1) {
        const E = n.current.find((_) => L.has(_.id));
        E && g.includes(E.type) && (p.preventDefault(), u(E.id));
        return;
      }
      if (p.key === "Escape") {
        if (r.current) {
          p.preventDefault(), u(null), (T = e.current) == null || T.blur(), (O = t.current) == null || O.focus(), l("select");
          return;
        }
        x(/* @__PURE__ */ new Set()), l("select");
        return;
      }
      const F = ir(p);
      F && (p.preventDefault(), s.current = F, l(F));
    }, d = (p) => {
      const f = t.current;
      !f || !(document.activeElement === f || f.contains(document.activeElement)) || p.code === "Space" && k(!1);
    };
    return window.addEventListener("keydown", w), window.addEventListener("keyup", d), () => {
      window.removeEventListener("keydown", w), window.removeEventListener("keyup", d);
    };
  }, [
    a,
    t,
    z,
    v,
    r,
    e,
    h,
    y,
    X,
    l,
    c,
    x,
    o,
    i,
    u,
    k,
    m,
    n,
    g,
    s
  ]);
}
const cr = 400;
function sr({
  containerRef: t,
  editorRef: e,
  pointers: n,
  cameraRef: o,
  shapesRef: r,
  toolRef: s,
  activeColorRef: c,
  drawStrokeWidth: h,
  camera: g,
  shapes: k,
  selected: u,
  isSpaceDown: m,
  textualTypes: i,
  setShapes: a,
  setEditingId: v,
  applyInteraction: x,
  selectNow: X,
  beginHistory: l,
  commit: z,
  onToolChange: y,
  expandToGroups: M,
  toPage: S,
  createId: w
}) {
  const d = w, p = et(null), f = (C, T) => {
    var B;
    const O = ((B = t.current) == null ? void 0 : B.dataset.canvasActiveTool) === "text" ? "text" : s.current;
    if (O !== "note" && O !== "text") return;
    const E = S(C, T), _ = O === "note" ? { id: d(), type: "note", x: E.x - 90, y: E.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: d(), type: "text", x: E.x, y: E.y - 22, w: 220, h: 44, text: "" };
    z((V) => [...V, _]), X(/* @__PURE__ */ new Set([_.id])), v(_.id), y("select");
  };
  return $t(() => {
    const C = (T) => {
      var O;
      (O = t.current) != null && O.contains(T.target) && (T.target instanceof Element && T.target.closest('[role="textbox"], [data-canvas-inspector]') || f(T.clientX, T.clientY));
    };
    return window.addEventListener("click", C, !0), () => window.removeEventListener("click", C, !0);
  }), { onPointerDown: (C) => {
    var V, q, nt;
    const T = s.current;
    n.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), C.cancelable && C.preventDefault();
    const O = C.currentTarget;
    try {
      O.setPointerCapture(C.pointerId);
    } catch {
    }
    if (n.current.size === 2) {
      const [R, G] = [...n.current.values()], Z = o.current;
      x({
        kind: "pinch",
        startDist: Math.hypot(G.x - R.x, G.y - R.y) || 1,
        startZoom: Z.z,
        startMidX: (R.x + G.x) / 2,
        startMidY: (R.y + G.y) / 2,
        camX: Z.x,
        camY: Z.y
      });
      return;
    }
    if (n.current.size > 2) return;
    if (C.button === 1 || m || T === "hand" || C.button === 0 && T === "select" && C.altKey) {
      x({ kind: "pan", startX: C.clientX, startY: C.clientY, camX: g.x, camY: g.y });
      return;
    }
    if (C.button !== 0) return;
    const E = S(C.clientX, C.clientY);
    if (v(null), (V = e.current) == null || V.blur(), (q = t.current) == null || q.focus(), T === "draw" || T === "highlighter") {
      const R = {
        id: d(),
        type: "draw",
        x: E.x,
        y: E.y,
        w: 0,
        h: 0,
        points: [[E.x, E.y]],
        color: c.current,
        strokeWidth: h,
        drawMode: T === "highlighter" ? "highlighter" : "pen"
      };
      l(), a((G) => [...G, R]), x({ kind: "drawing", id: R.id });
      return;
    }
    if (T === "arrow" || T === "frame" || _n.includes(T)) {
      const R = T, G = T === "arrow" ? { id: d(), type: "arrow", x: E.x, y: E.y, w: 0, h: 0, color: c.current } : T === "frame" ? { id: d(), type: "frame", x: E.x, y: E.y, w: 0, h: 0, text: "프레임" } : { id: d(), type: R, x: E.x, y: E.y, w: 0, h: 0, color: c.current, text: "" };
      l(), a((Z) => [...Z, G]), x({ kind: "creating", id: G.id, startX: E.x, startY: E.y });
      return;
    }
    if (T === "note" || T === "text") return;
    if (T === "eraser") {
      l(), a((R) => sn(R, E.x, E.y, 14 / g.z, g.z)), x({ kind: "erasing" });
      return;
    }
    const _ = new Map(k.map((R) => [R.id, R])), B = [...k].reverse().find((R) => te(R, E.x, E.y, g.z, _, k));
    if (!B)
      p.current = null;
    else {
      const R = Date.now(), G = !C.shiftKey && i.includes(B.type) && ((nt = p.current) == null ? void 0 : nt.id) === B.id && R - p.current.time < cr, Z = G ? B.id : void 0;
      p.current = G ? null : { id: B.id, time: R };
      const J = C.shiftKey ? new Set(u).add(B.id) : u.has(B.id) ? u : /* @__PURE__ */ new Set([B.id]), ot = M(J);
      X(ot);
      const mt = /* @__PURE__ */ new Map();
      for (const rt of k) ot.has(rt.id) && mt.set(rt.id, rt);
      for (const rt of k) {
        if (rt.type !== "frame" || !ot.has(rt.id)) continue;
        const xt = at(rt);
        for (const Y of k) {
          if (Y.id === rt.id || mt.has(Y.id)) continue;
          const W = wt(Y);
          W.x >= xt.minX && W.x <= xt.maxX && W.y >= xt.minY && W.y <= xt.maxY && mt.set(Y.id, Y);
        }
      }
      l(), x({ kind: "move", startX: E.x, startY: E.y, origin: mt, editOnReleaseId: Z });
      return;
    }
    C.shiftKey || X(/* @__PURE__ */ new Set()), x({
      kind: "marquee",
      startX: E.x,
      startY: E.y,
      curX: E.x,
      curY: E.y,
      screenStartX: C.clientX,
      screenStartY: C.clientY
    });
  }, onResizeHandleDown: (C, T, O) => {
    C.stopPropagation(), n.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), l(), x({ kind: "resize", id: T.id, handle: O, start: T });
  }, onRotateHandleDown: (C, T) => {
    C.stopPropagation(), n.current.set(C.pointerId, { x: C.clientX, y: C.clientY });
    const O = S(C.clientX, C.clientY), E = wt(T);
    l(), x({
      kind: "rotate",
      id: T.id,
      startAngle: Math.atan2(O.y - E.y, O.x - E.x),
      startRotation: T.rotation ?? 0
    });
  }, onConnectHandleDown: (C, T) => {
    C.stopPropagation(), n.current.set(C.pointerId, { x: C.clientX, y: C.clientY });
    const O = S(C.clientX, C.clientY);
    x({ kind: "connect", fromId: T.id, toX: O.x, toY: O.y, hoverId: null });
  }, onBendHandleDown: (C, T) => {
    C.stopPropagation(), n.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), l(), x({ kind: "bend", id: T.id });
  }, onOrthogonalSegmentHandleDown: (C, T, O) => {
    C.stopPropagation(), n.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), l(), x({ kind: "orthogonal-segment", id: T.id, segmentIndex: O });
  }, onArrowEndpointDown: (C, T, O) => {
    C.stopPropagation(), n.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), l(), x({ kind: "arrow-endpoint", id: T.id, endpoint: O, hoverId: null });
  } };
}
const lr = 0.1, dr = 4, ur = 14, xr = 4, We = ["note", "card", "rect", "ellipse", "text", "image"];
function hr({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: o,
  shapesRef: r,
  setShapes: s,
  setEditingId: c,
  setEraserPos: h,
  setGuides: g,
  setAnnouncement: k,
  applyInteraction: u,
  selectNow: m,
  endHistory: i,
  commit: a,
  onToolChange: v,
  createId: x
}) {
  const X = x;
  $t(() => {
    const l = (z) => {
      var M, S;
      t.current.delete(z.pointerId);
      try {
        (S = (M = z.target) == null ? void 0 : M.releasePointerCapture) == null || S.call(M, z.pointerId);
      } catch {
      }
      const y = e.current;
      if (y.kind !== "none") {
        if (y.kind === "pinch") {
          t.current.size < 2 && u({ kind: "none" });
          return;
        }
        if (g([]), y.kind === "erasing") {
          h(null), i(), u({ kind: "none" });
          return;
        }
        if (y.kind === "connect") {
          const d = r.current.find((N) => N.id === y.fromId);
          if (u({ kind: "none" }), !d) return;
          const p = { x: y.toX, y: y.toY }, f = wt(d);
          if (!y.hoverId && Math.hypot(p.x - f.x, p.y - f.y) < 30) return;
          const b = [];
          let $ = y.hoverId;
          if (!$) {
            const N = d.type === "note" ? 180 : 200, L = d.type === "note" ? 180 : 120, F = {
              ...d,
              id: X(),
              x: p.x - N / 2,
              y: p.y - L / 2,
              w: N,
              h: L,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            b.push(F), $ = F.id;
          }
          const I = {
            id: X(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: d.id,
            toId: $,
            text: ""
          };
          b.push(I), a((N) => [...N, ...b]), m(/* @__PURE__ */ new Set([I.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => c(I.id)) : c(I.id), k("연결 생성됨");
          return;
        }
        if (y.kind === "bend") {
          i(), u({ kind: "none" });
          return;
        }
        if (y.kind === "drawing") {
          s((w) => w.map((d) => {
            if (d.id !== y.id || !d.points) return d;
            const p = d.points.map((I) => I[0]), f = d.points.map((I) => I[1]), b = Math.min(...p), $ = Math.min(...f);
            return { ...d, x: b, y: $, w: Math.max(...p) - b, h: Math.max(...f) - $ };
          })), i(), u({ kind: "none" });
          return;
        }
        if (y.kind === "creating") {
          s((w) => w.map((d) => {
            if (d.id !== y.id) return d;
            const p = Math.abs(d.w) < 4 && Math.abs(d.h) < 4 ? {
              ...d,
              w: d.type === "arrow" ? 200 : d.type === "frame" ? 480 : 180,
              h: d.type === "arrow" ? 0 : d.type === "frame" ? 320 : 120
            } : d;
            if (p.type === "arrow") return p;
            const f = Lt(p);
            return { ...p, x: f.minX, y: f.minY, w: f.maxX - f.minX, h: f.maxY - f.minY };
          })), i(), m(/* @__PURE__ */ new Set([y.id])), v("select"), u({ kind: "none" });
          return;
        }
        if ((y.kind === "move" || y.kind === "resize" || y.kind === "rotate" || y.kind === "orthogonal-segment" || y.kind === "arrow-endpoint") && i(), y.kind === "move" && y.editOnReleaseId && z.type === "pointerup") {
          const w = o(z.clientX, z.clientY);
          Math.hypot(w.x - y.startX, w.y - y.startY) * n.current.z <= xr && c(y.editOnReleaseId);
        }
        u({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", l), window.addEventListener("pointercancel", l), () => {
      window.removeEventListener("pointerup", l), window.removeEventListener("pointercancel", l);
    };
  }, [u, n, x, i, e, v, t, m, k, c, s, r, o]);
}
function fr({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: o,
  shapesRef: r,
  setCamera: s,
  setShapes: c,
  setEraserPos: h,
  setGuides: g,
  applyInteraction: k,
  selectNow: u,
  expandToGroups: m,
  toPage: i
}) {
  const a = et([]), v = et(null);
  $t(() => () => {
    v.current !== null && cancelAnimationFrame(v.current);
  }, []), $t(() => {
    const x = (X) => {
      var M, S;
      e.current.has(X.pointerId) && e.current.set(X.pointerId, { x: X.clientX, y: X.clientY });
      const l = n.current;
      if (l.kind === "none") return;
      const z = o.current;
      if (l.kind === "pinch") {
        if (e.current.size < 2) return;
        const [w, d] = [...e.current.values()], p = Math.hypot(d.x - w.x, d.y - w.y) || 1, f = (w.x + d.x) / 2, b = (w.y + d.y) / 2, $ = (M = t.current) == null ? void 0 : M.getBoundingClientRect();
        if (!$) return;
        const I = Math.min(dr, Math.max(lr, l.startZoom * (p / l.startDist))), N = l.camX + (l.startMidX - $.left) / l.startZoom, L = l.camY + (l.startMidY - $.top) / l.startZoom;
        s({ x: N - (f - $.left) / I, y: L - (b - $.top) / I, z: I });
        return;
      }
      if (l.kind === "pan") {
        s({
          x: l.camX - (X.clientX - l.startX) / z.z,
          y: l.camY - (X.clientY - l.startY) / z.z,
          z: z.z
        });
        return;
      }
      const y = i(X.clientX, X.clientY);
      if (l.kind === "erasing") {
        c((w) => sn(w, y.x, y.y, ur / z.z, z.z)), h({ x: y.x, y: y.y });
        return;
      }
      if (l.kind === "connect") {
        const w = r.current, d = new Map(w.map((f) => [f.id, f])), p = [...w].reverse().find((f) => f.id !== l.fromId && We.includes(f.type) && te(f, y.x, y.y, z.z, d, w));
        k({ ...l, toX: y.x, toY: y.y, hoverId: (p == null ? void 0 : p.id) ?? null });
        return;
      }
      if (l.kind === "bend") {
        const w = r.current, d = w.find((F) => F.id === l.id);
        if (!d) return;
        const p = kt(d, new Map(w.map((F) => [F.id, F])), w), f = p.end.x - p.start.x, b = p.end.y - p.start.y, $ = Math.hypot(f, b) || 1, I = (p.start.x + p.end.x) / 2, N = (p.start.y + p.end.y) / 2, L = (y.x - I) * (-b / $) + (y.y - N) * (f / $);
        c((F) => F.map((A) => A.id === l.id ? { ...A, bend: L } : A));
        return;
      }
      if (l.kind === "orthogonal-segment") {
        const w = r.current, d = w.find((L) => L.id === l.id);
        if (!d) return;
        const p = kt(d, new Map(w.map((L) => [L.id, L])), w), f = p.routing === "orthogonal" ? p.pathPoints : void 0;
        if (!f || f.length < 2) return;
        const b = f[l.segmentIndex], $ = f[l.segmentIndex + 1];
        if (!b || !$) return;
        const I = b.x === $.x ? y.x : y.y, N = ro(f, l.segmentIndex, I);
        c((L) => L.map((F) => F.id === l.id ? { ...F, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: N.slice(1, -1).map((A) => ({ x: A.x, y: A.y })) } : F));
        return;
      }
      if (l.kind === "arrow-endpoint") {
        const w = r.current, d = w.find((N) => N.id === l.id);
        if (!d) return;
        const p = new Map(w.map((N) => [N.id, N])), f = kt(d, p, w), b = l.endpoint === "start" ? f.end : f.start, $ = [...w].reverse().find((N) => N.id !== d.id && We.includes(N.type) && te(N, y.x, y.y, z.z, p, w)), I = $ ? At($, b.x, b.y) : { x: y.x, y: y.y };
        k({ ...l, hoverId: ($ == null ? void 0 : $.id) ?? null }), c((N) => N.map((L) => {
          if (L.id !== d.id) return L;
          const F = l.endpoint === "start" ? I : b, A = l.endpoint === "end" ? I : b;
          return {
            ...L,
            x: F.x,
            y: F.y,
            w: A.x - F.x,
            h: A.y - F.y,
            fromId: l.endpoint === "start" ? $ == null ? void 0 : $.id : L.fromId,
            toId: l.endpoint === "end" ? $ == null ? void 0 : $.id : L.toId
          };
        }));
        return;
      }
      if (l.kind === "marquee") {
        k({ ...l, curX: y.x, curY: y.y });
        const w = Math.min(l.startX, y.x), d = Math.max(l.startX, y.x), p = Math.min(l.startY, y.y), f = Math.max(l.startY, y.y), b = Math.min(l.screenStartX, X.clientX), $ = Math.max(l.screenStartX, X.clientX), I = Math.min(l.screenStartY, X.clientY), N = Math.max(l.screenStartY, X.clientY), L = /* @__PURE__ */ new Map();
        (S = t.current) == null || S.querySelectorAll("[data-canvas-shape-id]").forEach((A) => {
          const C = A.dataset.canvasShapeId;
          C && L.set(C, A.getBoundingClientRect());
        });
        const F = r.current.filter((A) => {
          const C = L.get(A.id);
          if (C)
            return C.right >= b && C.left <= $ && C.bottom >= I && C.top <= N;
          const T = at(A);
          return T.maxX >= w && T.minX <= d && T.maxY >= p && T.minY <= f;
        }).map((A) => A.id);
        u(m(new Set(F)));
        return;
      }
      if (l.kind === "move") {
        let w = y.x - l.startX, d = y.y - l.startY;
        const p = l.origin, f = (() => {
          let I = 1 / 0, N = 1 / 0, L = -1 / 0, F = -1 / 0;
          return p.forEach((A) => {
            const C = at({ ...A, x: A.x + w, y: A.y + d });
            I = Math.min(I, C.minX), N = Math.min(N, C.minY), L = Math.max(L, C.maxX), F = Math.max(F, C.maxY);
          }), { minX: I, minY: N, maxX: L, maxY: F };
        })(), b = r.current.filter((I) => !p.has(I.id)), $ = Mo(f, b, z.z);
        w += $.dx, d += $.dy, g($.guides), c((I) => I.map((N) => {
          var F;
          const L = p.get(N.id);
          return L ? {
            ...N,
            x: L.x + w,
            y: L.y + d,
            points: (F = L.points) == null ? void 0 : F.map(([A, C]) => [A + w, C + d]),
            ...L.type === "arrow" && L.orthogonalWaypoints ? { orthogonalWaypoints: L.orthogonalWaypoints.map((A) => ({ x: A.x + w, y: A.y + d })) } : {}
          } : N;
        }));
        return;
      }
      if (l.kind === "drawing") {
        if (X.shiftKey) {
          c((w) => w.map((d) => {
            if (d.id !== l.id || !d.points) return d;
            const p = d.points[0];
            return p ? { ...d, points: [p, [y.x, y.y]] } : d;
          }));
          return;
        }
        a.current.push([y.x, y.y]), v.current === null && (v.current = requestAnimationFrame(() => {
          v.current = null;
          const w = a.current;
          if (w.length === 0) return;
          a.current = [];
          const d = o.current.z;
          c((p) => p.map((f) => {
            if (f.id !== l.id || !f.points) return f;
            let b = f.points[f.points.length - 1][0], $ = f.points[f.points.length - 1][1];
            const I = [...f.points];
            for (const [N, L] of w)
              Math.hypot(N - b, L - $) < 1 / d || (I.push([N, L]), b = N, $ = L);
            return I.length === f.points.length ? f : { ...f, points: I };
          }));
        }));
        return;
      }
      if (l.kind === "creating") {
        c((w) => w.map((d) => d.id === l.id ? { ...d, w: y.x - l.startX, h: y.y - l.startY } : d));
        return;
      }
      if (l.kind === "rotate") {
        const w = r.current.find((b) => b.id === l.id);
        if (!w) return;
        const d = wt(w), p = Math.atan2(y.y - d.y, y.x - d.x);
        let f = l.startRotation + (p - l.startAngle);
        X.shiftKey && (f = Math.round(f / (Math.PI / 12)) * (Math.PI / 12)), c((b) => b.map(($) => $.id === l.id ? { ...$, rotation: f } : $));
        return;
      }
      if (l.kind === "resize") {
        const { start: w, handle: d } = l, p = an(w, y.x, y.y);
        c((f) => f.map((b) => {
          if (b.id !== w.id) return b;
          let { x: $, y: I, w: N, h: L } = w;
          if (d.includes("e") && (N = Math.max(20, p.x - w.x)), d.includes("s") && (L = Math.max(20, p.y - w.y)), d.includes("w")) {
            const F = w.x + w.w;
            $ = Math.min(p.x, F - 20), N = F - $;
          }
          if (d.includes("n")) {
            const F = w.y + w.h;
            I = Math.min(p.y, F - 20), L = F - I;
          }
          return { ...b, x: $, y: I, w: N, h: L, manualSize: b.type === "text" ? !0 : b.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", x), () => window.removeEventListener("pointermove", x);
  }, [k, t, m, n, e, u, r, i]);
}
function mr(t) {
  fr(t), hr(t);
}
function vr({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: o,
  cameraRef: r,
  shapesRef: s,
  toolRef: c,
  activeColorRef: h,
  drawStrokeWidth: g,
  camera: k,
  shapes: u,
  selected: m,
  isSpaceDown: i,
  textualTypes: a,
  setCamera: v,
  setShapes: x,
  setEditingId: X,
  setEraserPos: l,
  setGuides: z,
  setAnnouncement: y,
  applyInteraction: M,
  selectNow: S,
  beginHistory: w,
  endHistory: d,
  commit: p,
  onToolChange: f,
  expandToGroups: b,
  toPage: $,
  createId: I
}) {
  const N = sr({
    containerRef: t,
    editorRef: e,
    pointers: n,
    cameraRef: r,
    shapesRef: s,
    toolRef: c,
    activeColorRef: h,
    drawStrokeWidth: g,
    camera: k,
    shapes: u,
    selected: m,
    isSpaceDown: i,
    textualTypes: a,
    setShapes: x,
    setEditingId: X,
    applyInteraction: M,
    selectNow: S,
    beginHistory: w,
    commit: p,
    onToolChange: f,
    expandToGroups: b,
    toPage: $,
    createId: I
  });
  return mr({
    containerRef: t,
    pointers: n,
    interactionRef: o,
    cameraRef: r,
    shapesRef: s,
    setCamera: v,
    setShapes: x,
    setEditingId: X,
    setEraserPos: l,
    setGuides: z,
    setAnnouncement: y,
    applyInteraction: M,
    selectNow: S,
    endHistory: d,
    commit: p,
    onToolChange: f,
    expandToGroups: b,
    toPage: $,
    createId: I
  }), N;
}
function pr(t) {
  rr(t);
  const e = Nt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return ar({ ...t, toolRef: e }), vr(t);
}
function yr({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: o,
  zoom: r
}) {
  const s = n || o.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", c = t ? H.gridDark : H.gridLight, h = 40 * r;
  return { cursor: s, gridColor: c, gridSize: h, strokeColorOf: (k) => k.color ? ft[k.color].border : t ? "var(--canvas-slate-200)" : H.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = to, document.head.appendChild(t);
}
const Oe = 0.1, _e = 4, He = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function mn(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function gr(t, e, n) {
  return t.map((o) => {
    if (!e.has(o.id)) return o;
    switch (o.type) {
      case "arrow":
      case "frame":
      case "rect":
      case "ellipse":
      case "triangle":
      case "diamond":
      case "hexagon":
      case "star":
      case "draw":
        return { ...o, strokeWidth: n };
      case "note":
      case "card":
      case "text":
      case "image":
        return o;
      default:
        return mn(o);
    }
  });
}
function wr(t, e, n) {
  return t.map((o) => e.has(o.id) && o.type === "draw" ? { ...o, ...n } : o);
}
function br(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const Sr = En(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: o,
  drawStrokeWidth: r = 4,
  onToolChange: s,
  onDirty: c,
  onZoomChange: h,
  onSelectionChange: g,
  shapes: k,
  onShapesChange: u,
  peerCursors: m,
  onLocalCursor: i,
  renderDiagram: a
}, v) {
  var $e, ke;
  const {
    containerRef: x,
    editorRef: X,
    setLocalShapes: l,
    controlled: z,
    shapes: y,
    setShapes: M,
    camera: S,
    setCamera: w,
    cameraRef: d,
    selected: p,
    selectedRef: f,
    editingId: b,
    setEditingId: $,
    editingIdRef: I,
    interaction: N,
    interactionRef: L,
    applyInteraction: F,
    isSpaceDown: A,
    setIsSpaceDown: C,
    guides: T,
    setGuides: O,
    announcement: E,
    setAnnouncement: _,
    showInspectorPalette: B,
    setShowInspectorPalette: V,
    eraserPos: q,
    setEraserPos: nt,
    setActiveColor: R,
    activeColorRef: G,
    installedFontFamilies: Z,
    pointers: J,
    past: ot,
    future: mt,
    selectNow: rt,
    commit: xt,
    deleteSelection: Y,
    beginHistory: W,
    endHistory: Q,
    toPage: ct,
    viewportCentre: pt,
    expandToGroups: Et,
    toolRef: re,
    shapesRef: Dt
  } = qo({ boardIdentity: e, tool: o, controlledShapes: k, onShapesChange: u, onDirty: c }), {
    inspectorShape: D,
    onContainerPointerMove: U,
    onContainerPointerLeave: j
  } = Zo({
    containerRef: x,
    camera: S,
    setCamera: w,
    minZoom: Oe,
    maxZoom: _e,
    shapes: y,
    selected: p,
    editingId: b,
    textualTypes: He,
    onZoomChange: h,
    onSelectionChange: g,
    onLocalCursor: i,
    toPage: ct
  }), {
    onPointerDown: tt,
    onResizeHandleDown: zt,
    onRotateHandleDown: Xt,
    onConnectHandleDown: ie,
    onBendHandleDown: vn,
    onOrthogonalSegmentHandleDown: pn,
    onArrowEndpointDown: yn
  } = pr({
    ref: v,
    containerRef: x,
    editorRef: X,
    pointers: J,
    interactionRef: L,
    cameraRef: d,
    shapesRef: Dt,
    toolRef: re,
    activeColorRef: G,
    drawStrokeWidth: r,
    camera: S,
    shapes: y,
    selected: p,
    isSpaceDown: A,
    setCamera: w,
    setShapes: M,
    setEditingId: $,
    setEraserPos: nt,
    setGuides: O,
    setAnnouncement: _,
    applyInteraction: F,
    selectNow: rt,
    past: ot,
    future: mt,
    beginHistory: W,
    endHistory: Q,
    commit: xt,
    deleteSelection: Y,
    onDirty: c,
    onToolChange: s,
    controlled: z,
    isDarkMode: n,
    minZoom: Oe,
    maxZoom: _e,
    textualTypes: He,
    selectedRef: f,
    editingIdRef: I,
    setIsSpaceDown: C,
    viewportCentre: pt,
    setLocalShapes: l,
    expandToGroups: Et,
    toPage: ct,
    createId: br
  }), { cursor: gn, gridColor: wn, gridSize: ye, strokeColorOf: bn } = yr({
    isDarkMode: n,
    tool: o === "highlighter" ? "draw" : o,
    isSpaceDown: A,
    interaction: N,
    zoom: S.z
  }), ge = (yt) => {
    const Nn = f.current, Me = I.current, _t = new Set(Nn);
    if (Me && _t.add(Me), _t.size === 0) return;
    const ze = "strokeWidth" in yt, In = Object.keys(yt).every((gt) => gt === "color" || gt === "fillColor" || gt === "strokeWidth");
    if ((D == null ? void 0 : D.type) === "draw" && In) {
      const gt = "color" in yt ? yt.color : void 0, ht = "strokeWidth" in yt ? yt.strokeWidth : void 0;
      xt((Pn) => wr(Pn, _t, {
        ...gt !== void 0 ? { color: gt } : {},
        ...ht !== void 0 ? { strokeWidth: ht } : {}
      }));
      return;
    }
    if (ze) {
      const gt = yt.strokeWidth;
      if (gt !== void 0 && Object.keys(yt).length === 1) {
        xt((ht) => gr(ht, _t, gt));
        return;
      }
    }
    xt((gt) => gt.map((ht) => {
      if (!_t.has(ht.id)) return ht;
      if (!ze) return { ...ht, ...yt };
      switch (ht.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...ht, ...yt };
        case "note":
        case "card":
        case "text":
        case "image":
          return ht;
        case "draw":
          return { ...ht, ...yt };
        default:
          return mn(ht);
      }
    }));
  }, {
    commitEditorHtml: $n,
    applyFormat: kn,
    applyList: Mn,
    onEditorKeyDown: zn,
    applyCustomFontFamily: Xn
  } = Go({
    editorRef: X,
    editingId: b,
    setShapes: M,
    setAnnouncement: _,
    onDirty: c,
    patchSelected: ge
  }), { renderEditor: Sn, renderShapeBody: Yn } = Uo({
    camera: S,
    editingId: b,
    isDarkMode: n,
    editorRef: X,
    commitEditorHtml: $n,
    onEditorKeyDown: zn,
    setShapes: M,
    onDirty: c,
    renderDiagram: a
  }), Cn = N.kind === "marquee" ? N : null, { shapeById: we, visiblePaintOrder: be } = Vo({
    containerRef: x,
    shapesRef: Dt,
    shapes: y,
    camera: S,
    selected: p,
    editingId: b,
    boardIdentity: e
  });
  return /* @__PURE__ */ K(
    "div",
    {
      ref: x,
      onPointerDown: tt,
      onPointerMove: U,
      onPointerLeave: j,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": S.x,
      "data-canvas-camera-y": S.y,
      "data-canvas-camera-z": S.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: gn,
        background: n ? H.canvasDark : H.canvasLight,
        backgroundImage: `radial-gradient(${wn} 1px, transparent 1px)`,
        backgroundSize: `${ye}px ${ye}px`,
        backgroundPosition: `${-S.x * S.z}px ${-S.y * S.z}px`
      },
      children: [
        /* @__PURE__ */ P("style", { children: '.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas .canvas-rich-text ul>li::before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style="dash"]>li::before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li::before{content:counter(canvas-list-item) ". "}' }),
        /* @__PURE__ */ P(
          "div",
          {
            "aria-live": "polite",
            role: "status",
            className: "absolute w-px h-px overflow-hidden whitespace-nowrap",
            style: { clip: "rect(0 0 0 0)", clipPath: "inset(50%)" },
            children: E
          }
        ),
        /* @__PURE__ */ P(
          Xo,
          {
            visiblePaintOrder: be,
            selected: p,
            shapeById: we,
            allShapes: Dt.current,
            camera: S,
            interaction: N,
            eraserPos: q,
            guides: T,
            marquee: Cn,
            strokeColorOf: bn
          }
        ),
        /* @__PURE__ */ P(
          _o,
          {
            visiblePaintOrder: be,
            selected: p,
            editingId: b,
            camera: S,
            shapeById: we,
            allShapes: Dt.current,
            peerCursors: m,
            isDarkMode: n,
            renderEditor: Sn,
            renderShapeBody: Yn,
            setEditingId: $,
            onBendHandleDown: vn,
            onOrthogonalSegmentHandleDown: pn,
            onResizeHandleDown: zt,
            onRotateHandleDown: Xt,
            onConnectHandleDown: ie,
            onArrowEndpointDown: yn
          }
        ),
        D && /* @__PURE__ */ P(
          Ro,
          {
            shape: D,
            shapes: y,
            camera: S,
            canvasSize: { width: (($e = x.current) == null ? void 0 : $e.clientWidth) ?? 380, height: ((ke = x.current) == null ? void 0 : ke.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!b,
            showPalette: B,
            installedFontFamilies: Z,
            setShowPalette: V,
            setActiveColor: R,
            patchSelected: ge,
            applyFormat: kn,
            applyList: Mn,
            applyCustomFontFamily: Xn
          }
        )
      ]
    }
  );
});
export {
  ft as CANVAS_COLORS,
  Dn as CANVAS_COLOR_KEYS,
  bt as CANVAS_FONTS,
  Sr as InfiniteCanvas,
  _n as SHAPE_TOOLS,
  wr as applySelectedDrawStyle,
  gr as applySelectedStrokeWidth,
  Xr as diagramTemplate,
  Ho as getInspectorGroups,
  hn as isDiagramShape
};
