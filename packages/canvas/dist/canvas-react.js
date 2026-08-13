import { jsx as E, jsxs as K, Fragment as Ft } from "react/jsx-runtime";
import te, { useRef as et, useState as lt, useLayoutEffect as ee, useEffect as $t, useMemo as Nt, useCallback as dt, useImperativeHandle as Fn, forwardRef as Tn } from "react";
import { p as An, i as pe, k as Ke, a as mt, v as Wn, c as bt, s as Dn, b as On, d as Ot, h as _n, C as Hn, S as Bn } from "./document-C_I4ZYDp.js";
import { Palette as jn, Minus as Kn, Plus as Un, ChevronDown as Vn, AlignLeft as Gn, AlignCenter as Rn, AlignRight as qn, List as Zn, ListOrdered as Qn, Bold as Jn, Italic as to, Underline as eo } from "lucide-react";
const no = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover{background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover{background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', H = Object.freeze({
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
}), Ue = 12;
function xe(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function Gt(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function Rt(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function qt(t, e, n, o) {
  const s = Rt(t, e, n), a = Rt(t, e, o), u = Rt(n, o, t), g = Rt(n, o, e);
  return Math.abs(s) < 1e-6 && Gt(t, n, e) || Math.abs(a) < 1e-6 && Gt(t, o, e) || Math.abs(u) < 1e-6 && Gt(n, t, o) || Math.abs(g) < 1e-6 && Gt(n, e, o) ? !0 : s > 0 != a > 0 && u > 0 != g > 0;
}
function oo(t, e, n) {
  const o = Math.min(t.x, e.x), r = Math.max(t.x, e.x), s = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
  if (r < n.minX || o > n.maxX || a < n.minY || s > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const u = { x: n.minX, y: n.minY }, g = { x: n.maxX, y: n.minY }, k = { x: n.maxX, y: n.maxY }, d = { x: n.minX, y: n.maxY };
  return qt(t, e, u, g) || qt(t, e, g, k) || qt(t, e, k, d) || qt(t, e, d, u);
}
function ro(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const o of e)
      if (oo(t[n - 1], t[n], o)) return !0;
  return !1;
}
function fe(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function ye(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = fe(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let o = 0;
  for (let s = 1; s < t.length; s++) {
    const a = Math.hypot(t[s].x - t[s - 1].x, t[s].y - t[s - 1].y);
    if (o + a >= n) {
      const u = (n - o) / a;
      return { x: t[s - 1].x + (t[s].x - t[s - 1].x) * u, y: t[s - 1].y + (t[s].y - t[s - 1].y) * u };
    }
    o += a;
  }
  const r = t[t.length - 1];
  return { x: r.x, y: r.y };
}
function Bt(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function Se(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([t, e]), s = Math.min(t, e), a = Math.max(t, e), u = Ue * 1.2;
  for (const g of n) {
    const k = (o === "x" ? g.minX : g.minY) - u, d = (o === "x" ? g.maxX : g.maxY) + u, x = (i) => i >= s - u * 4 && i <= a + u * 4;
    x(k) && r.add(k), x(d) && r.add(d);
  }
  return [...r].sort((g, k) => Math.abs(g - t) - Math.abs(k - t));
}
function Ve(t) {
  const e = [];
  for (const n of t) {
    const o = e[e.length - 1];
    (!o || o.x !== n.x || o.y !== n.y) && e.push(n);
  }
  return e;
}
function Ge(t) {
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
function io(t, e, n) {
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
  return Ge(o);
}
function ao(t, e, n) {
  const o = t[e], r = t[e + 1];
  if (!o || !r || !Number.isFinite(n) || o.x !== r.x && o.y !== r.y) return [...t];
  const s = o.x === r.x ? [o, { x: n, y: o.y }, { x: n, y: r.y }, r] : [o, { x: o.x, y: n }, { x: r.x, y: n }, r];
  return Ge([
    ...t.slice(0, e),
    ...s,
    ...t.slice(e + 2)
  ]);
}
function le(t, e) {
  const n = [], o = [];
  for (const s of t) {
    const a = Ve(s);
    a.length < 2 || (ro(a, e) ? o.push(a) : n.push(a));
  }
  const r = n.length > 0 ? n : o;
  return r.length === 0 ? [] : r.reduce((s, a) => fe(a) < fe(s) ? a : s);
}
function Ye(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function Dt(t, e, n, o) {
  const r = Math.min(t, e), s = Math.max(t, e), a = Math.max(48, Math.abs(e - t) * 0.35, Ue * 4);
  if (o === "x") {
    if (n === "e") return s + a;
    if (n === "w") return r - a;
  } else {
    if (n === "s") return s + a;
    if (n === "n") return r - a;
  }
  return t <= e ? r - a : s + a;
}
function co(t, e, n, o, r) {
  const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2;
  if (n === "u") {
    if (o) {
      const g = Dt(t.x, e.x, t.side, "x");
      return [t, { x: g, y: t.y }, { x: g, y: e.y }, e];
    }
    const u = Dt(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: u }, { x: e.x, y: u }, e];
  }
  if (n === "zigzag") {
    if (o) {
      const k = Dt(t.x, e.x, t.side, "x"), d = Dt(t.y, e.y, t.side, "y");
      return r ? [t, { x: k, y: t.y }, { x: k, y: d }, { x: s, y: d }, { x: s, y: e.y }, e] : [t, { x: k, y: t.y }, { x: k, y: d }, { x: e.x, y: d }, e];
    }
    const u = Dt(t.y, e.y, t.side, "y"), g = Dt(t.x, e.x, t.side, "x");
    return r ? [t, { x: t.x, y: u }, { x: g, y: u }, { x: g, y: e.y }, e] : [t, { x: t.x, y: u }, { x: g, y: u }, { x: g, y: a }, { x: e.x, y: a }, e];
  }
  return [];
}
function Re(t, e, n = [], o = "elbow", r = []) {
  if (r.length > 0) return io(t, e, r);
  const s = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), a = e.side ?? (s === "e" || s === "w" ? "w" : "n"), u = s === "e" || s === "w", g = a === "e" || a === "w", k = Se(t.x, e.x, n, "x"), d = Se(t.y, e.y, n, "y"), x = [];
  if (u && g) {
    for (const h of k) x.push([t, { x: h, y: t.y }, { x: h, y: e.y }, e]);
    for (const h of d) x.push([t, { x: t.x, y: h }, { x: e.x, y: h }, e]);
  } else if (!u && !g) {
    for (const h of d) x.push([t, { x: t.x, y: h }, { x: e.x, y: h }, e]);
    for (const h of k) x.push([t, { x: h, y: t.y }, { x: h, y: e.y }, e]);
  } else if (u) {
    x.push([t, { x: e.x, y: t.y }, e]);
    for (const h of d)
      x.push([t, { x: t.x, y: h }, { x: e.x, y: h }, e]), x.push([t, { x: t.x, y: h }, e]);
    for (const h of k) x.push([t, { x: h, y: t.y }, { x: h, y: e.y }, e]);
  } else {
    x.push([t, { x: t.x, y: e.y }, e]);
    for (const h of d)
      x.push([t, { x: t.x, y: h }, e]), x.push([t, { x: t.x, y: h }, { x: e.x, y: h }, e]);
    for (const h of k) x.push([t, { x: h, y: t.y }, { x: h, y: e.y }, e]);
  }
  const i = le(x, n);
  if (o === "elbow") return i;
  if (o === "reverse") {
    const h = Ye(i), X = le(x.filter((l) => Ye(l) !== h), n);
    return X.length > 1 ? X : i;
  }
  const c = co(t, e, o, u, g), m = le([c], n);
  return m.length > 1 ? m : i;
}
function qe(t) {
  return t.length < 2 ? 0 : Bt(t[t.length - 2], t[t.length - 1]);
}
const { PI: so } = Math, jt = so + 1e-4, Ce = 0.5, Ne = [1, 1];
function Ie(t, e, n, o = (r) => r) {
  return t * o(0.5 - e * (0.5 - n));
}
const { min: de } = Math;
function Ze(t, e, n) {
  let o = de(1, e / n);
  return de(1, t + (de(1, 1 - o) - t) * (o * 0.275));
}
function lo(t) {
  return [-t[0], -t[1]];
}
function Mt(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function Pe(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function Pt(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function me(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function It(t, e) {
  return [t[0] * e, t[1] * e];
}
function ue(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function uo(t, e) {
  return [t[0] / e, t[1] / e];
}
function Qe(t) {
  return [t[1], -t[0]];
}
function he(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function Ee(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function ho(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function xo(t) {
  return Math.hypot(t[0], t[1]);
}
function Le(t, e) {
  let n = t[0] - e[0], o = t[1] - e[1];
  return n * n + o * o;
}
function Je(t) {
  return uo(t, xo(t));
}
function fo(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function ge(t, e, n) {
  let o = Math.sin(n), r = Math.cos(n), s = t[0] - e[0], a = t[1] - e[1], u = s * r - a * o, g = s * o + a * r;
  return [u + e[0], g + e[1]];
}
function Fe(t, e, n, o) {
  let r = Math.sin(o), s = Math.cos(o), a = e[0] - n[0], u = e[1] - n[1], g = a * s - u * r, k = a * r + u * s;
  return t[0] = g + n[0], t[1] = k + n[1], t;
}
function Te(t, e, n) {
  return Mt(t, It(Pt(e, t), n));
}
function mo(t, e, n, o) {
  let r = n[0] - e[0], s = n[1] - e[1];
  return t[0] = e[0] + r * o, t[1] = e[1] + s * o, t;
}
function tn(t, e, n) {
  return Mt(t, It(e, n));
}
const it = [0, 0], St = [0, 0], Yt = [0, 0];
function vo(t, e) {
  let n = tn(t, Je(Qe(Pt(t, Mt(t, [1, 1])))), -e), o = [], r = 1 / 13;
  for (let s = r; s <= 1; s += r) o.push(ge(n, t, jt * 2 * s));
  return o;
}
function po(t, e, n) {
  let o = [], r = 1 / n;
  for (let s = r; s <= 1; s += r) o.push(ge(e, t, jt * s));
  return o;
}
function yo(t, e, n) {
  let o = Pt(e, n), r = It(o, 0.5), s = It(o, 0.51);
  return [Pt(t, r), Pt(t, s), Mt(t, s), Mt(t, r)];
}
function go(t, e, n, o) {
  let r = [], s = tn(t, e, n), a = 1 / o;
  for (let u = a; u < 1; u += a) r.push(ge(s, t, jt * 3 * u));
  return r;
}
function wo(t, e, n) {
  return [Mt(t, It(e, n)), Mt(t, It(e, n * 0.99)), Pt(t, It(e, n * 0.99)), Pt(t, It(e, n))];
}
function Ae(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function bo(t, e, n) {
  return t.slice(0, 10).reduce((o, r) => {
    let s = r.pressure;
    return e && (s = Ze(o, r.distance, n)), (o + s) / 2;
  }, t[0].pressure);
}
function $o(t, e = {}) {
  let { size: n = 16, smoothing: o = 0.5, thinning: r = 0.5, simulatePressure: s = !0, easing: a = (S) => S, start: u = {}, end: g = {}, last: k = !1 } = e, { cap: d = !0, easing: x = (S) => S * (2 - S) } = u, { cap: i = !0, easing: c = (S) => --S * S * S + 1 } = g;
  if (t.length === 0 || n <= 0) return [];
  let m = t[t.length - 1].runningLength, h = Ae(u.taper, n, m), X = Ae(g.taper, n, m), l = (n * o) ** 2, Y = [], M = [], b = bo(t, s, n), $ = Ie(n, r, t[t.length - 1].pressure, a), w, f = t[0].vector, v = t[0].point, z = v, p = v, y = z, I = !1;
  for (let S = 0; S < t.length; S++) {
    let { pressure: T } = t[S], { point: O, vector: F, distance: _, runningLength: B } = t[S], G = S === t.length - 1;
    if (!G && m - B < 3) continue;
    r ? (s && (T = Ze(b, _, n)), $ = Ie(n, r, T, a)) : $ = n / 2, w === void 0 && (w = $);
    let q = B < h ? x(B / h) : 1, nt = m - B < X ? c((m - B) / X) : 1;
    $ = Math.max(0.01, $ * Math.min(q, nt));
    let U = (G ? t[S] : t[S + 1]).vector, R = G ? 1 : Ee(F, U), Z = Ee(F, f) < 0 && !I, J = R !== null && R < 0;
    if (Z || J) {
      he(it, f), ue(it, it, $);
      for (let ot = 0; ot <= 1; ot += 0.07692307692307693) me(St, O, it), Fe(St, St, O, jt * ot), p = [St[0], St[1]], Y.push(p), Pe(Yt, O, it), Fe(Yt, Yt, O, jt * -ot), y = [Yt[0], Yt[1]], M.push(y);
      v = p, z = y, J && (I = !0);
      continue;
    }
    if (I = !1, G) {
      he(it, F), ue(it, it, $), Y.push(Pt(O, it)), M.push(Mt(O, it));
      continue;
    }
    mo(it, U, F, R), he(it, it), ue(it, it, $), me(St, O, it), p = [St[0], St[1]], (S <= 1 || Le(v, p) > l) && (Y.push(p), v = p), Pe(Yt, O, it), y = [Yt[0], Yt[1]], (S <= 1 || Le(z, y) > l) && (M.push(y), z = y), b = T, f = F;
  }
  let C = [t[0].point[0], t[0].point[1]], P = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : Mt(t[0].point, [1, 1]), L = [], A = [];
  if (t.length === 1) {
    if (!(h || X) || k) return vo(C, w || $);
  } else {
    h || X && t.length === 1 || (d ? L.push(...po(C, M[0], 13)) : L.push(...yo(C, Y[0], M[0])));
    let S = Qe(lo(t[t.length - 1].vector));
    X || h && t.length === 1 ? A.push(P) : i ? A.push(...go(P, S, $, 29)) : A.push(...wo(P, S, $));
  }
  return Y.concat(A, M.reverse(), L);
}
const We = [0, 0];
function De(t) {
  return t != null && t >= 0;
}
function ko(t, e = {}) {
  var i;
  let { streamline: n = 0.5, size: o = 16, last: r = !1 } = e;
  if (t.length === 0) return [];
  let s = 0.15 + (1 - n) * 0.85, a = Array.isArray(t[0]) ? t : t.map(({ x: c, y: m, pressure: h = Ce }) => [c, m, h]);
  if (a.length === 2) {
    let c = a[1];
    a = a.slice(0, -1);
    for (let m = 1; m < 5; m++) a.push(Te(a[0], c, m / 4));
  }
  a.length === 1 && (a = [...a, [...Mt(a[0], Ne), ...a[0].slice(2)]]);
  let u = [{ point: [a[0][0], a[0][1]], pressure: De(a[0][2]) ? a[0][2] : 0.25, vector: [...Ne], distance: 0, runningLength: 0 }], g = !1, k = 0, d = u[0], x = a.length - 1;
  for (let c = 1; c < a.length; c++) {
    let m = r && c === x ? [a[c][0], a[c][1]] : Te(d.point, a[c], s);
    if (ho(d.point, m)) continue;
    let h = fo(m, d.point);
    if (k += h, c < x && !g) {
      if (k < o) continue;
      g = !0;
    }
    me(We, d.point, m), d = { point: m, pressure: De(a[c][2]) ? a[c][2] : Ce, vector: Je(We), distance: h, runningLength: k }, u.push(d);
  }
  return u[0].vector = ((i = u[1]) == null ? void 0 : i.vector) || [0, 0], u;
}
function Mo(t, e = {}) {
  return $o(ko(t, e), e);
}
var zo = Mo;
function ne(t) {
  if (t.fillColor)
    try {
      return Ke(t.fillColor);
    } catch {
    }
  return t.color ? mt[t.color].bg : mt.blue.bg;
}
function en(t) {
  return t.color ? mt[t.color].border : "#2563eb";
}
function Tt(t) {
  if (t.textColor)
    try {
      return Ke(t.textColor);
    } catch {
    }
  return t.color ? mt[t.color].text : "#0f172a";
}
function nn(t, e, n) {
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
      const o = e / 2, r = n / 2, s = Math.min(e, n) / 2, a = s * 0.4, u = [];
      for (let g = 0; g < 10; g++) {
        const k = Math.PI / 5 * g - Math.PI / 2, d = g % 2 === 0 ? s : a;
        u.push(`${o + d * Math.cos(k)},${r + d * Math.sin(k)}`);
      }
      return u.join(" ");
    }
    default:
      return "";
  }
}
function on(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [r, s] = t[o], [a, u] = t[o + 1];
    e += ` Q ${r} ${s} ${(r + a) / 2} ${(s + u) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function rn(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [s, a] = t[0], u = n === "highlighter" ? e * 1.25 : e / 2;
    return `M ${s - u} ${a} A ${u} ${u} 0 1 0 ${s + u} ${a} A ${u} ${u} 0 1 0 ${s - u} ${a} Z`;
  }
  const o = n === "highlighter" ? { size: e * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: e, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 }, r = zo(t, o);
  return r.length === 0 ? "" : r.reduce(
    (s, [a, u], g) => s + (g === 0 ? `M ${a} ${u}` : ` L ${a} ${u}`),
    ""
  ) + " Z";
}
function Ct(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function an(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], o = (r, s) => {
    r.childNodes.forEach((a) => {
      if (a.nodeType === Node.TEXT_NODE) {
        const d = a.textContent ?? "";
        d && n[n.length - 1].push({ text: d, ...s });
        return;
      }
      if (a.nodeType !== Node.ELEMENT_NODE) return;
      const u = a;
      if (u.tagName === "BR") {
        n.push([]);
        return;
      }
      const g = { bold: s.bold || u.tagName === "B" || u.tagName === "STRONG", italic: s.italic || u.tagName === "I" || u.tagName === "EM", underline: s.underline || u.tagName === "U" }, k = u.tagName === "DIV" || u.tagName === "P" || u.tagName === "LI";
      k && n[n.length - 1].length > 0 && n.push([]), o(u, g), k && n.push([]);
    });
  };
  return o(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((r) => r.length > 0);
}
function re(t) {
  return t.html ? pe(t.html) : t.text ? Ct(t.text).replace(/\n/g, "<br>") : "";
}
function ve(t) {
  if (t)
    try {
      return Wn(t);
    } catch {
      return;
    }
}
function cn(t) {
  try {
    return An(t);
  } catch {
    return null;
  }
}
function ie(t) {
  return t.html ? an(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const Zt = 12;
function Et(t) {
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
  const e = t.rotation ?? 0, n = Et(t);
  if (!e) return n;
  const o = wt(t), r = Math.cos(e), s = Math.sin(e), a = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([k, d]) => {
    const x = k - o.x, i = d - o.y;
    return [o.x + x * r - i * s, o.y + x * s + i * r];
  }), u = a.map((k) => k[0]), g = a.map((k) => k[1]);
  return { minX: Math.min(...u), minY: Math.min(...g), maxX: Math.max(...u), maxY: Math.max(...g) };
}
function sn(t, e, n) {
  const o = t.rotation ?? 0;
  if (!o) return { x: e, y: n };
  const r = wt(t), s = Math.cos(-o), a = Math.sin(-o), u = e - r.x, g = n - r.y;
  return { x: r.x + u * s - g * a, y: r.y + u * a + g * s };
}
function Qt(t, e, n, o, r, s) {
  const a = r - n, u = s - o, g = a * a + u * u, k = g === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * a + (e - o) * u) / g));
  return Math.hypot(t - (n + k * a), e - (o + k * u));
}
function oe(t, e, n, o, r, s) {
  const a = 8 / o;
  if (t.type === "arrow") {
    const k = (t.strokeWidth ?? 2.5) / o / 2 + a, d = kt(t, r ?? /* @__PURE__ */ new Map(), s);
    if (d.routing === "orthogonal" && d.pathPoints && d.pathPoints.length > 1) {
      for (let i = 1; i < d.pathPoints.length; i++) {
        const c = d.pathPoints[i - 1], m = d.pathPoints[i];
        if (Qt(e, n, c.x, c.y, m.x, m.y) <= k) return !0;
      }
      return !1;
    }
    if (d.bend === 0) return Qt(e, n, d.start.x, d.start.y, d.end.x, d.end.y) <= k;
    let x = d.start;
    for (let i = 1; i <= 16; i++) {
      const c = Kt(i / 16, d.start, d.control, d.end);
      if (Qt(e, n, x.x, x.y, c.x, c.y) <= k) return !0;
      x = c;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const x = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / o / 2 + a;
    if (t.points.length === 1) {
      const [i, c] = t.points[0];
      return Math.hypot(e - i, n - c) <= x;
    }
    for (let i = 1; i < t.points.length; i++) {
      const [c, m] = t.points[i - 1], [h, X] = t.points[i];
      if (Qt(e, n, c, m, h, X) <= x) return !0;
    }
    return !1;
  }
  const u = sn(t, e, n), g = Et(t);
  if (t.type === "frame") {
    const k = u.x >= g.minX - a && u.x <= g.maxX + a && u.y >= g.minY - a && u.y <= g.maxY + a && (u.x <= g.minX + a || u.x >= g.maxX - a || u.y <= g.minY + a || u.y >= g.maxY - a), d = u.x >= g.minX - a && u.x <= g.maxX + a && u.y >= g.minY - 28 / o && u.y <= g.minY;
    return k || d;
  }
  return u.x >= g.minX - a && u.x <= g.maxX + a && u.y >= g.minY - a && u.y <= g.maxY + a;
}
function At(t, e, n) {
  const o = Et(t), r = (o.minX + o.maxX) / 2, s = (o.minY + o.maxY) / 2, a = e - r, u = n - s;
  if (a === 0 && u === 0) return { x: r, y: s, side: "e" };
  const g = (o.maxX - o.minX) / 2, k = (o.maxY - o.minY) / 2, d = g === 0 ? 1 / 0 : Math.abs(g / a), x = k === 0 ? 1 / 0 : Math.abs(k / u);
  return d <= x ? { x: r + a * d, y: s + u * d, side: a >= 0 ? "e" : "w" } : { x: r + a * x, y: s + u * x, side: u >= 0 ? "s" : "n" };
}
function ln(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([e.id, n, o]);
  return t.filter((s) => !r.has(s.id)).map((s) => {
    const a = at(s);
    return { minX: a.minX - Zt, minY: a.minY - Zt, maxX: a.maxX + Zt, maxY: a.maxY + Zt };
  }).filter((s) => s.maxX > s.minX && s.maxY > s.minY);
}
function kt(t, e, n = []) {
  const o = t.fromId ? e.get(t.fromId) : void 0, r = t.toId ? e.get(t.toId) : void 0;
  let s = { x: t.x, y: t.y }, a = { x: t.x + t.w, y: t.y + t.h };
  if (o && r) {
    const m = wt(o), h = wt(r);
    s = At(o, h.x, h.y), a = At(r, m.x, m.y);
  } else o ? s = At(o, a.x, a.y) : r && (a = At(r, s.x, s.y));
  const u = (s.x + a.x) / 2, g = (s.y + a.y) / 2, k = t.bend ?? 0;
  let d = { x: u, y: g };
  if (k !== 0) {
    const m = a.x - s.x, h = a.y - s.y, X = Math.hypot(m, h) || 1;
    d = { x: u + -h / X * k, y: g + m / X * k };
  }
  const x = !!(o || r), i = t.routing ?? (x ? "orthogonal" : k !== 0 ? "curved" : "straight");
  if (i !== "orthogonal") return { start: s, end: a, control: d, bend: k, routing: i };
  const c = ln(n, t, o == null ? void 0 : o.id, r == null ? void 0 : r.id);
  return {
    start: s,
    end: a,
    control: d,
    bend: k,
    routing: i,
    pathPoints: Ve(Re(s, a, c, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function Kt(t, e, n, o) {
  const r = 1 - t;
  return { x: r * r * e.x + 2 * r * t * n.x + t * t * o.x, y: r * r * e.y + 2 * r * t * n.y + t * t * o.y };
}
function dn(t, e, n, o, r) {
  const s = [];
  let a = 0;
  for (const u of t) {
    if (u.type !== "draw" || !u.points) {
      if (oe(u, e, n, r)) continue;
      s.push(u);
      continue;
    }
    const g = [];
    let k = [];
    for (const [x, i] of u.points)
      Math.hypot(x - e, i - n) <= o / r ? (k.length > 1 && g.push(k), k = []) : k.push([x, i]);
    if (k.length > 1 && g.push(k), g.length === 0) continue;
    const d = Et(u);
    g.forEach((x) => s.push({ ...u, id: `${u.id}-e${a++}`, points: x, x: d.minX, y: d.minY, w: d.maxX - d.minX, h: d.maxY - d.minY }));
  }
  return s;
}
function Xo(t, e, n) {
  const o = 6 / n;
  let r = null, s = null;
  const a = [], u = [t.minX, (t.minX + t.maxX) / 2, t.maxX], g = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const k of e) {
    const d = at(k), x = [d.minX, (d.minX + d.maxX) / 2, d.maxX], i = [d.minY, (d.minY + d.maxY) / 2, d.maxY];
    for (const c of u) for (const m of x) {
      const h = m - c;
      Math.abs(h) <= o && (!r || Math.abs(h) < Math.abs(r.delta)) && (r = { delta: h, at: m });
    }
    for (const c of g) for (const m of i) {
      const h = m - c;
      Math.abs(h) <= o && (!s || Math.abs(h) < Math.abs(s.delta)) && (s = { delta: h, at: m });
    }
  }
  return r && a.push({ x1: r.at, y1: t.minY - 1e3, x2: r.at, y2: t.maxY + 1e3 }), s && a.push({ x1: t.minX - 1e3, y1: s.at, x2: t.maxX + 1e3, y2: s.at }), { dx: (r == null ? void 0 : r.delta) ?? 0, dy: (s == null ? void 0 : s.delta) ?? 0, guides: a };
}
const So = 14;
function Yo({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: o,
  camera: r,
  interaction: s,
  eraserPos: a,
  guides: u,
  marquee: g,
  strokeColorOf: k
}) {
  return /* @__PURE__ */ E("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ K("g", { transform: `scale(${r.z}) translate(${-r.x}, ${-r.y})`, children: [
    t.map((d) => {
      if (d.type === "draw" && d.points) {
        const p = d.drawMode ?? "pen", y = d.strokeWidth ?? 3, I = e.has(d.id) ? H.blue : k(d), C = d.points.length >= 2 ? rn(d.points, y, p) : "";
        return /* @__PURE__ */ E(
          "path",
          {
            "data-canvas-vector-shape-id": d.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": p,
            "data-canvas-stroke-width": y,
            d: C || on(d.points),
            fill: C ? I : "none",
            stroke: C ? "none" : I,
            strokeWidth: y / r.z,
            strokeOpacity: p === "highlighter" ? 0.35 : void 0,
            fillOpacity: p === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          d.id
        );
      }
      if (d.type !== "arrow") return null;
      const x = e.has(d.id) ? H.blue : k(d), i = kt(d, n, o), c = d.strokeWidth ?? 2.5, m = c / r.z, h = Math.max(10, 8 + c * 2), X = Math.max(4, 2 + c), l = h / r.z, Y = X / r.z, M = i.routing === "orthogonal" && i.pathPoints ? i.pathPoints : null, b = M && M.length > 1;
      let $, w;
      if (b)
        $ = xe(M), w = qe(M);
      else if (i.routing === "curved") {
        $ = `M ${i.start.x} ${i.start.y} Q ${i.control.x} ${i.control.y} ${i.end.x} ${i.end.y}`;
        const p = Kt(0.94, i.start, i.control, i.end);
        w = Math.atan2(i.end.y - p.y, i.end.x - p.x);
      } else
        $ = `M ${i.start.x} ${i.start.y} L ${i.end.x} ${i.end.y}`, w = Math.atan2(i.end.y - i.start.y, i.end.x - i.start.x);
      const f = b && M.length >= 2 ? Bt(M[0], M[1]) : i.routing === "orthogonal" && i.start.side ? i.start.side === "e" ? 0 : i.start.side === "w" ? Math.PI : i.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Bt(i.start, i.end), v = d.strokeStyle === "dashed" ? `${8 / r.z} ${5 / r.z}` : d.strokeStyle === "dotted" ? `${1.5 / r.z} ${4 / r.z}` : void 0, z = (p, y, I, C) => p === "dot" ? /* @__PURE__ */ E("circle", { "data-canvas-arrow-dot-radius": X, cx: y, cy: I, r: Y, fill: x }) : p === "none" ? null : /* @__PURE__ */ E(
        "polygon",
        {
          "data-canvas-arrowhead-size": h,
          points: `${y},${I} ${y - l * Math.cos(C - 0.4)},${I - l * Math.sin(C - 0.4)} ${y - l * Math.cos(C + 0.4)},${I - l * Math.sin(C + 0.4)}`,
          fill: x
        }
      );
      return /* @__PURE__ */ K("g", { "data-canvas-vector-shape-id": d.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": i.routing, "data-canvas-stroke-width": c, children: [
        /* @__PURE__ */ E("path", { d: $, fill: "none", stroke: x, strokeWidth: m, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: v }),
        z(d.arrowEnd ?? "arrow", i.end.x, i.end.y, w),
        z(d.arrowStart ?? "none", i.start.x, i.start.y, f + Math.PI)
      ] }, d.id);
    }),
    s.kind === "connect" && s.fromId !== void 0 && s.toX !== void 0 && s.toY !== void 0 && (() => {
      const d = n.get(s.fromId);
      if (!d) return null;
      const x = At(d, s.toX, s.toY), i = s.hoverId ? n.get(s.hoverId) : null, c = i ? At(i, x.x, x.y) : { x: s.toX, y: s.toY }, m = i ? Re(x, c, ln(o, { id: "__preview" }, d.id, i.id)) : [x, c];
      return /* @__PURE__ */ K("g", { children: [
        /* @__PURE__ */ E("path", { d: xe(m), stroke: H.blue, strokeWidth: 2 / r.z, strokeDasharray: `${5 / r.z} ${4 / r.z}` }),
        i ? /* @__PURE__ */ E("rect", { x: at(i).minX - 3 / r.z, y: at(i).minY - 3 / r.z, width: at(i).maxX - at(i).minX + 6 / r.z, height: at(i).maxY - at(i).minY + 6 / r.z, fill: "none", stroke: H.blue, strokeWidth: 2 / r.z, rx: 6 / r.z }) : /* @__PURE__ */ E("circle", { cx: c.x, cy: c.y, r: 5 / r.z, fill: H.blue })
      ] });
    })(),
    a && /* @__PURE__ */ E("circle", { cx: a.x, cy: a.y, r: So / r.z, fill: H.roseSoft, stroke: H.rose, strokeWidth: 1 / r.z }),
    u.map((d, x) => /* @__PURE__ */ E("line", { x1: d.x1, y1: d.y1, x2: d.x2, y2: d.y2, stroke: H.pink, strokeWidth: 1 / r.z, strokeDasharray: `${4 / r.z} ${4 / r.z}` }, `guide-${x}`)),
    g && /* @__PURE__ */ E("rect", { x: Math.min(g.startX, g.curX), y: Math.min(g.startY, g.curY), width: Math.abs(g.curX - g.startX), height: Math.abs(g.curY - g.startY), fill: H.marqueeFill, stroke: H.blue, strokeWidth: 1 / r.z })
  ] }) });
}
const Co = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], No = /* @__PURE__ */ new Set([
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
]), Io = [
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
function ae(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function un(t) {
  return No.has(t.trim().toLowerCase());
}
function hn(t) {
  const e = ae(t);
  return e ? un(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function Po(t) {
  return ae(t).split(",").map((e) => e.trim()).filter(Boolean).map(hn).filter(Boolean).join(", ");
}
function xn(t) {
  return ae(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Ht(t) {
  return t.split(",").map((e) => ae(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !un(e));
}
const Jt = Array.from(/* @__PURE__ */ new Set([
  ...Io,
  ...Ht(bt.sans.stack),
  ...Ht(bt.serif.stack),
  ...Ht(bt.mono.stack),
  ...Ht(bt.gothic.stack),
  ...Ht(bt.korean.stack)
]));
function Eo() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Jt;
  const t = Jt.filter((e) => {
    const n = hn(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : Jt;
}
const Lo = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, Fo = 24, To = 28, fn = 720;
function ut(t) {
  return t.fontSize ?? Lo[t.type] ?? 14;
}
function ht(t) {
  var e;
  if (!t.fontFamily) return bt.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = xn(Dn(t.customFontFamily ?? ""));
    } catch {
    }
    return Po(n) || bt.sans.stack;
  }
  return ((e = bt[t.fontFamily]) == null ? void 0 : e.stack) ?? bt.sans.stack;
}
function pt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function Ao(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function Wo(t) {
  var e, n, o;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((o = t.html) != null && o.includes("<ol>")) return "number";
}
function Do(t, e) {
  return {
    w: Math.min(fn, Math.max(Fo, Math.ceil(t))),
    h: Math.max(To, Math.ceil(e))
  };
}
function Oo(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = pe(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${fn}px`,
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
    fontSize: `${ut(e)}px`,
    fontFamily: ht(e)
  }), document.body.appendChild(n);
  const o = n.getBoundingClientRect();
  return n.remove(), Do(o.width, o.height);
}
const _o = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), Ho = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function Bo({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: o,
  shapeById: r,
  allShapes: s,
  peerCursors: a,
  isDarkMode: u,
  renderEditor: g,
  renderShapeBody: k,
  setEditingId: d,
  onBendHandleDown: x,
  onOrthogonalSegmentHandleDown: i,
  onResizeHandleDown: c,
  onRotateHandleDown: m,
  onConnectHandleDown: h,
  onArrowEndpointDown: X
}) {
  return /* @__PURE__ */ K(Ft, { children: [
    /* @__PURE__ */ E("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((l) => {
      if (l.type === "draw") return null;
      if (l.type === "arrow") {
        const b = kt(l, r, s), $ = b.routing === "orthogonal" && b.pathPoints ? ye(b.pathPoints) : b.routing === "curved" ? Kt(0.5, b.start, b.control, b.end) : { x: (b.start.x + b.end.x) / 2, y: (b.start.y + b.end.y) / 2 }, w = n === l.id, f = re(l), v = e.has(l.id), z = ie(l).trim(), p = f || (v ? "관계 입력" : "");
        return !p && !w ? null : /* @__PURE__ */ E(te.Fragment, { children: /* @__PURE__ */ E("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: $.x - 90, top: $.y - 18, width: 180, height: 36 }, onDoubleClick: (y) => {
          y.stopPropagation(), d(l.id);
        }, children: (p || w) && /* @__PURE__ */ E(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": z ? `관계 설명: ${z}` : "관계 설명 입력",
            title: w ? void 0 : z ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${u ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: ut(l),
              fontFamily: ht(l),
              maxWidth: "100%",
              minWidth: w ? 120 / o.z : void 0,
              minHeight: w ? 28 / o.z : void 0,
              color: l.textColor
            },
            children: w ? g("text-center whitespace-nowrap") : /* @__PURE__ */ E("span", { dangerouslySetInnerHTML: { __html: p } }, "canvas-view")
          }
        ) }) }, l.id);
      }
      const Y = e.has(l.id), M = Et(l);
      return /* @__PURE__ */ K(
        "div",
        {
          "data-canvas-shape-id": l.id,
          "data-canvas-shape-type": l.type,
          "data-canvas-selected": Y ? "true" : void 0,
          "data-canvas-text-align": pt(l),
          "data-canvas-text-color": l.textColor,
          "data-canvas-font-size": ut(l),
          "data-canvas-font-family": l.fontFamily === "custom" ? l.customFontFamily ?? "custom" : l.fontFamily ?? "sans",
          "data-canvas-manual-size": l.manualSize ? "true" : void 0,
          "data-canvas-group-id": l.groupId,
          "data-canvas-list-kind": Wo(l),
          "data-canvas-x": l.x,
          "data-canvas-y": l.y,
          "data-canvas-width": l.w,
          "data-canvas-height": l.h,
          className: "absolute",
          style: { left: M.minX, top: M.minY, width: M.maxX - M.minX, height: M.maxY - M.minY, transform: l.rotation ? `rotate(${l.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (b) => {
            b.stopPropagation(), _o.has(l.type) && d(l.id);
          },
          children: [
            k(l),
            Y && /* @__PURE__ */ K(Ft, { children: [
              /* @__PURE__ */ E("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${H.blue}` } }),
              e.size === 1 && /* @__PURE__ */ K(Ft, { children: [
                ["nw", "ne", "sw", "se"].map((b) => /* @__PURE__ */ E("div", { "data-canvas-resize-handle": b, onPointerDown: ($) => c($, l, b), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${b}-resize`, left: b.includes("w") ? -5 / o.z : void 0, right: b.includes("e") ? -5 / o.z : void 0, top: b.includes("n") ? -5 / o.z : void 0, bottom: b.includes("s") ? -5 / o.z : void 0 } }, b)),
                /* @__PURE__ */ E("div", { onPointerDown: (b) => m(b, l), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                Ho.has(l.type) && ["n", "s", "w", "e"].map((b) => /* @__PURE__ */ E("div", { onPointerDown: ($) => h($, l), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...b === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : b === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : b === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${b}`))
              ] })
            ] })
          ]
        },
        l.id
      );
    }) }),
    e.size === 1 && s.filter((l) => l.type === "arrow" && e.has(l.id)).map((l) => {
      const Y = kt(l, r, s), M = (b, $) => ({
        left: (b.x - o.x) * o.z - $ / 2,
        top: (b.y - o.y) * o.z - $ / 2
      });
      return /* @__PURE__ */ K(te.Fragment, { children: [
        Y.routing === "orthogonal" && Y.pathPoints && Y.pathPoints.length > 2 ? Y.pathPoints.slice(0, -1).map((b, $) => {
          var v;
          const w = (v = Y.pathPoints) == null ? void 0 : v[$ + 1];
          if (!w) return null;
          const f = { x: (b.x + w.x) / 2, y: (b.y + w.y) / 2 };
          return /* @__PURE__ */ E("div", { "data-canvas-arrow-segment-handle": $, onPointerDown: (z) => i(z, l, $), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...M(f, 12), cursor: b.x === w.x ? "ew-resize" : "ns-resize" } }, `segment-${$}`);
        }) : Y.routing === "curved" && /* @__PURE__ */ E("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (b) => x(b, l), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (Y.start.x + Y.end.x) / 2 * o.z - o.x * o.z - 5, top: (Y.start.y + Y.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map((b) => {
          const $ = b === "start" ? Y.start : Y.end;
          return /* @__PURE__ */ E("div", { "data-canvas-arrow-endpoint": b, onPointerDown: (w) => X(w, l, b), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...M($, 12), cursor: "grab" } }, b);
        })
      ] }, `arrow-handles-${l.id}`);
    }),
    a == null ? void 0 : a.map((l) => /* @__PURE__ */ K("div", { className: "absolute pointer-events-none z-40", style: { left: (l.x - o.x) * o.z, top: (l.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ E("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ E("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: l.color, stroke: H.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ E("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: l.color }, children: l.name })
    ] }, l.id))
  ] });
}
function mn(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function jo(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), mn(t) && e.push("diagram"), e;
}
function Sr(t) {
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
const Ko = [2, 4, 6, 8];
function Uo(t) {
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
      return vn(t);
  }
}
function Vo(t) {
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
      return vn(t);
  }
}
function vn(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Go({
  shape: t,
  shapes: e,
  camera: n,
  canvasSize: o,
  isDarkMode: r,
  editing: s,
  showPalette: a,
  installedFontFamilies: u,
  setShowPalette: g,
  setActiveColor: k,
  patchSelected: d,
  applyFormat: x,
  applyList: i,
  applyCustomFontFamily: c
}) {
  var rt, ct;
  const m = r ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", h = t.type === "draw", X = h ? t.color ? mt[t.color].border : H.ink : Tt(t), l = et(null), [Y, M] = lt({ width: 380, height: 260 });
  ee(() => {
    const N = l.current;
    if (!N) return;
    const D = () => {
      const st = Math.max(1, Math.ceil(N.getBoundingClientRect().width)), yt = Math.max(1, Math.ceil(N.getBoundingClientRect().height));
      M((Lt) => Lt.width === st && Lt.height === yt ? Lt : { width: st, height: yt });
    };
    if (D(), typeof ResizeObserver > "u") return;
    const Q = new ResizeObserver(D);
    return Q.observe(N), () => Q.disconnect();
  }, [s, u.length, r, t, a]);
  const b = Y.width, $ = Y.height, w = at(t), f = (w.minX - n.x) * n.z, v = (w.minY - n.y) * n.z, z = (w.maxX - n.x) * n.z, p = (w.maxY - n.y) * n.z, y = Math.max(8, o.width - b - 8), I = Math.max(8, o.height - $ - 8), C = (N, D) => ({ left: Math.min(Math.max(8, N), y), top: Math.min(Math.max(8, D), I) }), P = [
    C((f + z) / 2 - b / 2, v - $ - 12),
    C((f + z) / 2 - b / 2, p + 12),
    C((o.width - b) / 2, 12),
    C(f - b - 12, v + (p - v - $) / 2),
    C(z + 12, v + (p - v - $) / 2)
  ], L = e.map((N) => {
    const D = at(N);
    return { left: (D.minX - n.x) * n.z, top: (D.minY - n.y) * n.z, right: (D.maxX - n.x) * n.z, bottom: (D.maxY - n.y) * n.z };
  });
  if (t.type === "arrow") {
    const N = kt(t, new Map(e.map((yt) => [yt.id, yt])), e), D = N.routing === "orthogonal" && N.pathPoints ? ye(N.pathPoints) : { x: (N.start.x + N.end.x) / 2, y: (N.start.y + N.end.y) / 2 }, Q = 180 * n.z, st = 36 * n.z;
    L.push({
      left: (D.x - n.x) * n.z - Q / 2,
      top: (D.y - n.y) * n.z - st / 2,
      right: (D.x - n.x) * n.z + Q / 2,
      bottom: (D.y - n.y) * n.z + st / 2
    });
  }
  const A = P[0], S = (N, D) => {
    const Q = Math.max(0, Math.min(N.left + b, D.right) - Math.max(N.left, D.left)), st = Math.max(0, Math.min(N.top + $, D.bottom) - Math.max(N.top, D.top));
    return Q * st;
  }, T = ((rt = P.map((N) => ({
    candidate: N,
    overlap: L.reduce((D, Q) => D + S(N, Q), 0),
    distance: Math.hypot(N.left - A.left, N.top - A.top)
  })).sort((N, D) => N.overlap - D.overlap || N.distance - D.distance)[0]) == null ? void 0 : rt.candidate) ?? A, O = ut(t), F = Vo(t), _ = Uo(t), B = jo(t), G = t.type === "arrow" ? "arrow" : B[0] ?? "color", [q, nt] = lt(G);
  ee(() => {
    B.includes(q) || nt(G);
  }, [G, B, q]);
  const U = t.type === "arrow" && !!((ct = t.orthogonalWaypoints) != null && ct.length), R = t.type === "arrow" ? t.arrowStart ?? "none" : "none", Z = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", J = (N, D, Q, st, yt = st) => /* @__PURE__ */ E("button", { type: "button", title: st, "aria-label": yt, onClick: Q, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${D ? "bg-blue-600 text-white" : m}`, children: N }), ot = (N) => /* @__PURE__ */ E("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: N }), vt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ K("div", { ref: l, "data-canvas-inspector": h ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${r ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: T.left, top: T.top }, onPointerDown: (N) => {
    N.stopPropagation();
    const D = N.target instanceof Element ? N.target : null;
    D != null && D.closest("input, select, textarea") || N.preventDefault();
  }, onClick: (N) => N.stopPropagation(), children: [
    /* @__PURE__ */ E("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: B.map((N) => /* @__PURE__ */ E("button", { type: "button", role: "tab", "aria-selected": q === N, onClick: () => nt(N), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${q === N ? "bg-blue-600 text-white" : m}`, children: vt[N] }, N)) }),
    /* @__PURE__ */ K("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: q === "color" || h ? void 0 : "none" }, children: [
      /* @__PURE__ */ E("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: h ? "그리기" : "색상" }),
      /* @__PURE__ */ E("button", { type: "button", title: h ? "그리기 색상 팔레트" : "색상 팔레트", "aria-label": h ? "그리기 색상" : "도형 색상", onClick: () => g((N) => !N), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${r ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ E(jn, { className: "w-4 h-4", style: { color: X } }) }),
      a && /* @__PURE__ */ K("div", { className: `pointer-events-auto absolute left-0 top-10 z-50 flex items-center gap-1.5 p-2 rounded-xl border shadow-xl ${r ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        On.map((N) => /* @__PURE__ */ E("button", { type: "button", title: mt[N].label, "aria-label": `색 ${mt[N].label}`, onClick: () => {
          k(N), d({ color: N, fillColor: void 0 }), g(!1);
        }, className: "w-5 h-5 rounded-full border", style: { background: mt[N].bg, borderColor: mt[N].border, outline: t.color === N && !t.fillColor ? `2px solid ${H.blue}` : void 0, outlineOffset: 1 } }, N)),
        !h && /* @__PURE__ */ E("label", { title: "배경 색 (자유 선택)", className: "w-5 h-5 rounded-full border relative overflow-hidden cursor-pointer flex items-center justify-center", style: { background: t.fillColor ?? ne(t), outline: t.fillColor ? `2px solid ${H.blue}` : void 0, outlineOffset: 1 }, children: /* @__PURE__ */ E("input", { type: "color", value: t.fillColor ?? ne(t), onChange: (N) => {
          d({ fillColor: N.target.value }), g(!1);
        }, className: "absolute inset-0 opacity-0 cursor-pointer" }) })
      ] })
    ] }),
    q !== "color" && !h && /* @__PURE__ */ K(Ft, { children: [
      /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ E("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ K("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: Tt(t), color: H.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ E("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ E("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? Tt(t), onChange: (N) => d({ textColor: N.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ K("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${r ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ E("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ E("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => d({ fontSize: Math.max(8, O - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${m}`, children: /* @__PURE__ */ E(Kn, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ E("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: O }),
          /* @__PURE__ */ E("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => d({ fontSize: Math.min(96, O + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${m}`, children: /* @__PURE__ */ E(Un, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ K("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${r ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ E("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (N) => {
            const D = Ao(N.target.value);
            d(D === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: D, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${r ? "text-slate-200" : "text-slate-700"}`, children: Co.map((N) => /* @__PURE__ */ E("option", { value: N, className: r ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: bt[N].label }, N)) }),
          /* @__PURE__ */ E(Vn, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ K(Ft, { children: [
          /* @__PURE__ */ E("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (N) => c(N.target.value), onChange: (N) => N.currentTarget.value && c(N.currentTarget.value), onKeyDown: (N) => {
            N.key === "Enter" && (N.preventDefault(), c(N.currentTarget.value));
          }, onDoubleClick: (N) => N.stopPropagation(), onPointerDown: (N) => N.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${r ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ E("datalist", { id: `canvas-font-families-${t.id}`, children: u.map((N) => /* @__PURE__ */ E("option", { value: N }, N)) })
        ] })
      ] }),
      /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${r ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ E("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ E("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", Gn, "왼쪽 정렬"], ["center", Rn, "가운데 정렬"], ["right", qn, "오른쪽 정렬"]].map(([N, D, Q]) => /* @__PURE__ */ E("button", { type: "button", "aria-label": Q, title: Q, onClick: () => d({ textAlign: N }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${pt(t) === N ? "bg-blue-600 text-white shadow-sm" : m}`, children: /* @__PURE__ */ E(D, { className: "w-4 h-4" }) }, N)) }),
        s && /* @__PURE__ */ K(Ft, { children: [
          /* @__PURE__ */ E("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ E("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", Zn, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", Qn, "번호 목록"]].map(([N, D, Q]) => /* @__PURE__ */ E("button", { type: "button", onClick: () => i(N), "aria-label": Q, title: Q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${m}`, children: D ? /* @__PURE__ */ E(D, { className: "w-4 h-4" }) : /* @__PURE__ */ E("span", { className: "text-base leading-none", children: "–" }) }, N)) }),
          /* @__PURE__ */ E("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: Jn, label: "굵게" }, { cmd: "italic", Icon: to, label: "기울임" }, { cmd: "underline", Icon: eo, label: "밑줄" }].map(({ cmd: N, Icon: D, label: Q }) => /* @__PURE__ */ E("button", { type: "button", onClick: () => x(N), "aria-label": Q, title: Q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${m}`, children: /* @__PURE__ */ E(D, { className: "w-4 h-4" }) }, N)) })
        ] })
      ] }),
      (q === "arrange" && t.type === "card" || q === "arrow" && t.type === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${r ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ K(Ft, { children: [
          /* @__PURE__ */ E("div", { className: `w-px h-6 ${r ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ E("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (N) => N.stopPropagation(), onChange: (N) => d({ category: N.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${r ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            ot("경로"),
            J("직선", (t.routing ?? "straight") === "straight", () => d({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            J("직각", t.routing === "orthogonal", () => d({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            J("곡선", (t.routing ?? "") === "curved", () => d({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            U && J("자동", !1, () => d({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            ot("선"),
            J("—", (t.strokeStyle ?? "solid") === "solid", () => d({ strokeStyle: "solid" }), "실선"),
            J("- -", t.strokeStyle === "dashed", () => d({ strokeStyle: "dashed" }), "파선"),
            J("···", t.strokeStyle === "dotted", () => d({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            ot("시작"),
            J(R === "none" ? "○" : R === "dot" ? "●" : "◀", R !== "none", () => d({ arrowStart: R === "none" ? "arrow" : R === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${R === "none" ? "없음" : R === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            ot("끝"),
            J(Z === "none" ? "○" : Z === "dot" ? "●" : "▶", Z !== "none", () => d({ arrowEnd: Z === "arrow" ? "dot" : Z === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${Z === "none" ? "없음" : Z === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      q === "diagram" && /* @__PURE__ */ E("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${r ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    _ && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-none ${r ? "border-slate-700" : "border-slate-100"}`, children: [
      ot("굵기"),
      Ko.map((N) => /* @__PURE__ */ E(te.Fragment, { children: J(String(N), F === N, () => d({ strokeWidth: N }), `굵기 ${N}`) }, N))
    ] })
  ] });
}
function Ro({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: o,
  commitEditorHtml: r,
  onEditorKeyDown: s,
  setShapes: a,
  onDirty: u,
  renderDiagram: g
}) {
  const k = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", d = (i, c) => /* @__PURE__ */ E(
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
      onPointerDown: (m) => m.stopPropagation(),
      onDoubleClick: (m) => m.stopPropagation(),
      onKeyDown: s,
      className: `${k} ${i}`,
      style: c
    },
    "canvas-editor"
  );
  return { renderEditor: d, renderShapeBody: (i) => {
    const c = mt[i.color ?? "blue"], m = e === i.id, h = re(i);
    if (i.type === "frame") {
      const w = i.strokeWidth ?? 2;
      return /* @__PURE__ */ E(
        "div",
        {
          "data-canvas-stroke-width": w,
          className: "w-full h-full rounded",
          style: { border: `${w / t.z}px solid ${n ? H.slate600 : H.slate400}` },
          children: /* @__PURE__ */ E(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? H.slate400 : H.muted
              },
              children: m ? d("", { fontSize: 13 / t.z }) : ie(i) || "프레임"
            }
          )
        }
      );
    }
    if (i.type === "note")
      return /* @__PURE__ */ E(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: c.bg, borderTop: `6px solid ${c.border}`, color: c.text },
          children: m ? d("font-medium", { color: Tt(i), fontSize: ut(i), fontFamily: ht(i), textAlign: pt(i) }) : h ? /* @__PURE__ */ E("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Tt(i), fontSize: ut(i), fontFamily: ht(i), textAlign: pt(i) }, dangerouslySetInnerHTML: { __html: h } }, "canvas-view") : /* @__PURE__ */ E("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Tt(i), fontSize: ut(i), fontFamily: ht(i), textAlign: pt(i) }, children: /* @__PURE__ */ E("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (i.type === "card") {
      const w = i.cardStyle === "glass";
      return mn(i) && g && !m ? /* @__PURE__ */ E("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: g(i) }) : /* @__PURE__ */ K(
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
                onPointerDown: (f) => f.stopPropagation(),
                onDoubleClick: (f) => f.stopPropagation(),
                onBlur: (f) => {
                  const z = (f.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  a((p) => p.map((y) => y.id === i.id ? { ...y, category: z } : y)), u();
                },
                onKeyDown: (f) => {
                  f.key === "Enter" && (f.preventDefault(), f.currentTarget.blur());
                },
                children: [
                  "[ ",
                  i.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            m ? d("flex-1 font-medium", { color: i.textColor ?? H.white, fontSize: ut(i), fontFamily: ht(i), textAlign: pt(i) }) : /* @__PURE__ */ E("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: i.textColor ?? H.white, fontSize: ut(i), fontFamily: ht(i), textAlign: pt(i) }, dangerouslySetInnerHTML: { __html: h } }, "canvas-view"),
            /* @__PURE__ */ K("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              i.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (i.type === "text") {
      const w = n ? "text-slate-100" : "text-slate-900", f = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${w}`,
        style: { color: i.textColor, fontSize: ut(i), fontFamily: ht(i), textAlign: pt(i) }
      };
      return m ? d(`font-medium ${w}`, f.style) : h ? /* @__PURE__ */ E(
        "div",
        {
          "data-canvas-text-view": !0,
          ...f,
          dangerouslySetInnerHTML: { __html: h }
        },
        "canvas-view"
      ) : /* @__PURE__ */ E("div", { "data-canvas-text-view": !0, ...f, children: /* @__PURE__ */ E("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (i.type === "image") {
      const w = ve(i.src);
      return w ? /* @__PURE__ */ E(
        "img",
        {
          src: w,
          alt: i.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const X = ne(i), l = en(i), Y = Tt(i);
    if (i.type === "triangle" || i.type === "diamond" || i.type === "hexagon" || i.type === "star") {
      const w = i.strokeWidth ?? 2;
      return /* @__PURE__ */ K("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ E("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${i.w} ${i.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ E("polygon", { "data-canvas-stroke-width": w, points: nn(i.type, i.w, i.h), fill: X, stroke: l, strokeWidth: w / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ E("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: Y }, children: m ? d("font-medium", { color: Y, fontSize: ut(i), fontFamily: ht(i), textAlign: pt(i) }) : /* @__PURE__ */ E("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: ut(i), fontFamily: ht(i), textAlign: pt(i) }, dangerouslySetInnerHTML: { __html: h } }, "canvas-view") })
      ] });
    }
    const b = ve(i.src), $ = i.type === "rect" || i.type === "ellipse" ? i.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ E(
      "div",
      {
        "data-canvas-stroke-width": $,
        className: `w-full h-full flex items-center justify-center p-3 ${i.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: X, border: `${$ / t.z}px solid ${l}`, color: Y },
        children: m ? d("font-medium", { color: Y, fontSize: ut(i), fontFamily: ht(i), textAlign: pt(i) }) : /* @__PURE__ */ K("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: ut(i), fontFamily: ht(i), textAlign: pt(i) }, children: [
          /* @__PURE__ */ E("div", { dangerouslySetInnerHTML: { __html: h } }),
          b && /* @__PURE__ */ E(
            "a",
            {
              href: b,
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
function qo({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: o,
  selected: r,
  editingId: s,
  boardIdentity: a
}) {
  const [u, g] = lt({ width: 0, height: 0 });
  $t(() => {
    const m = t.current;
    if (!m) return;
    let h = -1, X = -1;
    const l = (M = m.clientWidth, b = m.clientHeight) => {
      M === h && b === X || (h = M, X = b, g({ width: M, height: b }));
    };
    if (l(), typeof ResizeObserver < "u") {
      const M = new ResizeObserver((b) => {
        var w;
        const $ = (w = b[0]) == null ? void 0 : w.contentRect;
        l(($ == null ? void 0 : $.width) ?? m.clientWidth, ($ == null ? void 0 : $.height) ?? m.clientHeight);
      });
      return M.observe(m), () => M.disconnect();
    }
    const Y = () => l();
    return window.addEventListener("resize", Y), () => window.removeEventListener("resize", Y);
  }, [a, t]);
  const k = Nt(() => new Map(n.map((m) => [m.id, m])), [n]), d = Nt(
    () => [...n].sort((m, h) => (m.type === "frame" ? -1 : 0) - (h.type === "frame" ? -1 : 0)),
    [n]
  ), x = Nt(() => {
    if (!t.current || u.width <= 0 || u.height <= 0) return null;
    const m = 200 / o.z;
    return {
      minX: o.x - m,
      minY: o.y - m,
      maxX: o.x + u.width / o.z + m,
      maxY: o.y + u.height / o.z + m
    };
  }, [o, t, u]), i = dt((m) => {
    if (!x) return !1;
    if (m.id === s || r.has(m.id)) return !0;
    if (m.type === "arrow") {
      const X = kt(m, k, e.current), Y = (X.routing === "orthogonal" ? X.pathPoints : null) ?? [X.start, X.end], M = Math.min(...Y.map((f) => f.x)), b = Math.max(...Y.map((f) => f.x)), $ = Math.min(...Y.map((f) => f.y)), w = Math.max(...Y.map((f) => f.y));
      return b >= x.minX && M <= x.maxX && w >= x.minY && $ <= x.maxY;
    }
    const h = at(m);
    return h.maxX >= x.minX && h.minX <= x.maxX && h.maxY >= x.minY && h.minY <= x.maxY;
  }, [s, r, k, e, x]), c = Nt(
    () => d.filter(i),
    [i, d]
  );
  return { shapeById: k, visiblePaintOrder: c };
}
function Zo({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: o,
  onDirty: r,
  patchSelected: s
}) {
  const a = dt(() => {
    const c = t.current;
    if (!c || !e) return;
    let m;
    try {
      m = pe(c.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const h = c.scrollHeight;
    n((X) => X.map((l) => {
      if (l.id !== e) return l;
      const Y = { ...l, html: m, text: void 0 };
      if (l.type === "text")
        return l.manualSize ? Y : { ...Y, ...Oo(c, l) };
      if (l.type === "arrow") return Y;
      const M = l.type === "note" ? 32 : l.type === "card" ? 96 : (
        // category header + type footer
        (l.type === "frame", 24)
      ), b = Math.max(l.h, h + M);
      return { ...Y, h: b };
    })), r();
  }, [e, r]), u = (c) => {
    var m;
    (m = t.current) == null || m.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(c), a();
  }, g = () => {
    var X;
    const c = (X = window.getSelection()) == null ? void 0 : X.anchorNode, m = c instanceof Element ? c : c == null ? void 0 : c.parentElement, h = m == null ? void 0 : m.closest("ul, ol");
    return h instanceof HTMLElement ? h : null;
  }, k = (c, m, h) => {
    const X = document.createElement(m);
    for (; c.firstChild; ) X.append(c.firstChild);
    return c.replaceWith(X), X;
  }, d = (c) => {
    const m = t.current;
    if (!m) return;
    m.focus();
    const h = g();
    if (c === "number")
      if ((h == null ? void 0 : h.tagName) === "OL")
        h.removeAttribute("data-list-style");
      else if ((h == null ? void 0 : h.tagName) === "UL")
        k(h, "ol");
      else {
        document.execCommand("insertOrderedList");
        const X = g();
        X == null || X.removeAttribute("data-list-style");
      }
    else if ((h == null ? void 0 : h.tagName) === "UL") {
      const X = h.dataset.listStyle;
      c === X ? document.execCommand("insertUnorderedList") : h.dataset.listStyle = c;
    } else {
      (h == null ? void 0 : h.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const X = g();
      X && (X.dataset.listStyle = c);
    }
    a();
  };
  return { commitEditorHtml: a, applyFormat: u, applyList: d, onEditorKeyDown: (c) => {
    if (c.key === "Tab") {
      c.preventDefault(), document.execCommand(c.shiftKey ? "outdent" : "indent"), a();
      return;
    }
    if (c.key === " ") {
      const m = window.getSelection();
      if (m && m.isCollapsed && m.anchorNode) {
        const h = m.anchorNode, X = h.textContent || "", l = m.anchorOffset, Y = X.slice(0, l).trim();
        if (!g()) {
          if (Y === "-" || Y === "–") {
            c.preventDefault(), h.textContent = X.slice(l), d("dash");
            return;
          }
          if (Y === "*") {
            c.preventDefault(), h.textContent = X.slice(l), d("bullet");
            return;
          }
          if (Y === "1.") {
            c.preventDefault(), h.textContent = X.slice(l), d("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (c) => {
    const m = xn(c);
    if (!m) {
      s({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    s({
      fontFamily: "custom",
      customFontFamily: m
    });
  } };
}
function Qo({
  boardIdentity: t,
  tool: e,
  controlledShapes: n,
  onShapesChange: o,
  onDirty: r
}) {
  const s = et(null), a = et(null), [u, g] = lt([]), k = n !== void 0 && o !== void 0, d = et(/* @__PURE__ */ new WeakMap()), x = Nt(() => {
    const W = d.current;
    return (k ? n ?? [] : u).map((V) => {
      let j = W.get(V);
      return j === void 0 && (j = cn(V), W.set(V, j)), j;
    }).filter((V) => V !== null);
  }, [k, n, u]), i = et(o);
  i.current = o;
  const c = dt((W) => {
    const V = i.current;
    if (!V) {
      g(W);
      return;
    }
    V(typeof W == "function" ? W : () => W);
  }, []), [m, h] = lt({ x: -400, y: -300, z: 1 }), [X, l] = lt(/* @__PURE__ */ new Set()), [Y, M] = lt(null), [b, $] = lt({ kind: "none" }), [w, f] = lt(!1), [v, z] = lt([]), [p, y] = lt(""), [I, C] = lt(!1), [P, L] = lt(null), [A, S] = lt("blue"), [T, O] = lt(Jt), F = et(A);
  F.current = A;
  const _ = et([]), B = et([]), G = et(null), q = et(/* @__PURE__ */ new Map()), nt = et(x), U = et(m), R = et(e), Z = et(X), J = et(Y);
  nt.current = x, U.current = m, R.current = e, Z.current = X, J.current = Y;
  const ot = et({ kind: "none" }), vt = dt((W) => {
    ot.current = W, $(W);
  }, []), rt = dt((W) => {
    Z.current = W, l(W);
  }, []);
  ee(() => {
    var V;
    const W = /* @__PURE__ */ new Set();
    Z.current = W, J.current = null, q.current.clear(), _.current = [], B.current = [], G.current = null, vt({ kind: "none" }), l(W), M(null), f(!1), z([]), L(null), y(""), (V = s.current) == null || V.focus();
  }, [vt, t]), $t(() => {
    let W = !1;
    const V = () => {
      const tt = Eo();
      W || O(tt);
    };
    if (V(), typeof document > "u" || !("fonts" in document)) return;
    const j = () => V();
    return document.fonts.addEventListener("loadingdone", j), () => {
      W = !0, document.fonts.removeEventListener("loadingdone", j);
    };
  }, [t]);
  const N = (Y ? x.find((W) => W.id === Y) : void 0) !== void 0;
  ee(() => {
    if (!Y || !N) return;
    const W = () => {
      const j = a.current, tt = nt.current.find((se) => se.id === Y);
      if (!j || !tt || (j.dataset.seeded !== Y && (j.innerHTML = re(tt), j.dataset.seeded = Y), document.activeElement === j)) return;
      j.focus();
      const zt = document.createRange();
      zt.selectNodeContents(j), zt.collapse(!1);
      const Xt = window.getSelection();
      Xt == null || Xt.removeAllRanges(), Xt == null || Xt.addRange(zt);
    };
    W();
    const V = requestAnimationFrame(W);
    return () => cancelAnimationFrame(V);
  }, [Y, N]);
  const D = dt((W) => {
    c((V) => {
      const j = typeof W == "function" ? W(V) : W;
      return _.current.push(V), _.current.length > 100 && _.current.shift(), B.current = [], j;
    }), r();
  }, [r]), Q = dt((W) => W.size === 0 ? !1 : (D((V) => V.filter((j) => W.has(j.id) ? !1 : j.type !== "arrow" ? !0 : !(j.fromId && W.has(j.fromId)) && !(j.toId && W.has(j.toId)))), rt(/* @__PURE__ */ new Set()), y(`${W.size}개 삭제됨`), !0), [D, rt]), st = dt(() => {
    G.current = nt.current;
  }, []), yt = dt(() => {
    const W = G.current;
    G.current = null, !(!W || W === nt.current) && (_.current.push(W), _.current.length > 100 && _.current.shift(), B.current = [], r());
  }, [r]), Lt = dt((W, V) => {
    var zt;
    const j = (zt = s.current) == null ? void 0 : zt.getBoundingClientRect(), tt = U.current;
    return j ? { x: (W - j.left) / tt.z + tt.x, y: (V - j.top) / tt.z + tt.y } : { x: 0, y: 0 };
  }, []), ce = dt(() => {
    var j;
    const W = (j = s.current) == null ? void 0 : j.getBoundingClientRect(), V = U.current;
    return W ? { x: V.x + W.width / 2 / V.z, y: V.y + W.height / 2 / V.z } : { x: 0, y: 0 };
  }, []), Wt = dt((W) => {
    const V = new Set(nt.current.filter((tt) => W.has(tt.id) && tt.groupId).map((tt) => tt.groupId));
    if (V.size === 0) return W;
    const j = new Set(W);
    for (const tt of nt.current) tt.groupId && V.has(tt.groupId) && j.add(tt.id);
    return j;
  }, []);
  return {
    containerRef: s,
    editorRef: a,
    localShapes: u,
    setLocalShapes: g,
    controlled: k,
    shapes: x,
    setShapes: c,
    camera: m,
    setCamera: h,
    cameraRef: U,
    selected: X,
    setSelected: l,
    selectedRef: Z,
    editingId: Y,
    setEditingId: M,
    editingIdRef: J,
    interaction: b,
    interactionRef: ot,
    applyInteraction: vt,
    isSpaceDown: w,
    setIsSpaceDown: f,
    guides: v,
    setGuides: z,
    announcement: p,
    setAnnouncement: y,
    showInspectorPalette: I,
    setShowInspectorPalette: C,
    eraserPos: P,
    setEraserPos: L,
    activeColor: A,
    setActiveColor: S,
    activeColorRef: F,
    installedFontFamilies: T,
    pointers: q,
    past: _,
    future: B,
    selectNow: rt,
    commit: D,
    deleteSelection: Q,
    beginHistory: st,
    endHistory: yt,
    toPage: Lt,
    viewportCentre: ce,
    expandToGroups: Wt,
    toolRef: R,
    shapesRef: nt
  };
}
function Jo({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: o,
  maxZoom: r,
  shapes: s,
  selected: a,
  editingId: u,
  textualTypes: g,
  onZoomChange: k,
  onSelectionChange: d,
  onLocalCursor: x,
  toPage: i
}) {
  $t(() => {
    k == null || k(e.z);
  }, [e.z, k]), $t(() => {
    const Y = t.current;
    if (!Y) return;
    const M = (b) => {
      if (b.preventDefault(), b.ctrlKey || b.metaKey) {
        const $ = Y.getBoundingClientRect();
        n((w) => {
          const f = Math.min(r, Math.max(o, w.z * Math.exp(-b.deltaY * 0.01))), v = b.clientX - $.left, z = b.clientY - $.top;
          return { x: w.x + v / w.z - v / f, y: w.y + z / w.z - z / f, z: f };
        });
      } else
        n(($) => ({ ...$, x: $.x + b.deltaX / $.z, y: $.y + b.deltaY / $.z }));
    };
    return Y.addEventListener("wheel", M, { passive: !1 }), () => Y.removeEventListener("wheel", M);
  }, [t, r, o, n]);
  const c = Nt(() => {
    const Y = s.filter((M) => a.has(M.id));
    return {
      count: Y.length,
      canGroup: Y.length > 1,
      canUngroup: Y.some((M) => !!M.groupId),
      isTextual: Y.length === 1 && g.includes(Y[0].type),
      selectedIds: Y.map((M) => M.id)
    };
  }, [a, s, g]);
  $t(() => {
    d == null || d(c);
  }, [d, c]);
  const m = Nt(() => {
    if (u) {
      const b = s.find(($) => $.id === u);
      return b && b.type !== "image" && b.type !== "draw" ? b : null;
    }
    const Y = s.filter((b) => a.has(b.id));
    if (Y.length > 1 && Y.every((b) => b.type === "draw")) return Y[0] ?? null;
    if (Y.length !== 1) return null;
    const M = Y[0];
    return M && M.type !== "image" ? M : null;
  }, [u, a, s]), h = et(0);
  return { selectionInfo: c, inspectorShape: m, onContainerPointerMove: x ? (Y) => {
    const M = performance.now();
    M - h.current < 60 || (h.current = M, x(i(Y.clientX, Y.clientY)));
  } : void 0, onContainerPointerLeave: x ? () => x(null) : void 0 };
}
function tr(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, o = 1 / 0, r = -1 / 0, s = -1 / 0;
  for (const x of t) {
    const i = at(x);
    n = Math.min(n, i.minX), o = Math.min(o, i.minY), r = Math.max(r, i.maxX), s = Math.max(s, i.maxY);
  }
  const a = 40, u = r - n + a * 2, g = s - o + a * 2;
  if (!Number.isFinite(u) || !Number.isFinite(g) || u > Ot.maxExportDimension || g > Ot.maxExportDimension || u * g > Ot.maxExportPixels) return null;
  const k = (x, i, c, m, h) => {
    const X = x.fontSize ?? c, l = ht(x), Y = an(re(x));
    if (Y.length === 0) return "";
    const M = Et(x), b = x.textAlign === "right" ? "end" : x.textAlign === "center" ? "middle" : x.textAlign === "left" ? "start" : h, $ = b === "end" ? M.maxX - 12 : b === "middle" ? (M.minX + M.maxX) / 2 : M.minX + 12, w = M.minY + X + 12;
    return Y.map((f, v) => {
      const z = f.map((p) => `<tspan style="${[
        p.bold ? "font-weight:700" : `font-weight:${m}`,
        p.italic ? "font-style:italic" : "",
        p.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Ct(p.text)}</tspan>`).join("");
      return `<text x="${$}" y="${w + v * X * 1.4}" font-family="${Ct(l)}" font-size="${X}" fill="${i}" text-anchor="${b}">${z}</text>`;
    }).join("");
  }, d = t.map((x) => {
    const i = mt[x.color ?? "blue"], c = Et(x), m = wt(x), h = x.rotation ? ` transform="rotate(${x.rotation * 180 / Math.PI} ${m.x} ${m.y})"` : "", X = x.color ? mt[x.color].border : H.ink;
    if (x.type === "draw" && x.points) {
      const f = x.drawMode ?? "pen", v = x.strokeWidth ?? 3, z = x.points.length >= 2 ? rn(x.points, v, f) : "";
      if (z)
        return `<path d="${z}" fill="${X}"${f === "highlighter" ? ' fill-opacity="0.35"' : ""} fill-rule="evenodd" stroke="none"/>`;
      const p = f === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${on(x.points)}" fill="none" stroke="${X}" stroke-width="${v}"${p} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (x.type === "arrow") {
      const f = kt(x, new Map(t.map((_) => [_.id, _])), t), v = x.strokeWidth ?? 2.5, z = Math.max(10, 8 + v * 2), p = Math.max(4, 2 + v), y = f.routing === "orthogonal" && f.pathPoints ? f.pathPoints : null, I = y && y.length > 1, C = I ? xe(y) : f.routing === "curved" ? `M ${f.start.x} ${f.start.y} Q ${f.control.x} ${f.control.y} ${f.end.x} ${f.end.y}` : `M ${f.start.x} ${f.start.y} L ${f.end.x} ${f.end.y}`, P = I ? qe(y) : f.routing === "curved" ? (() => {
        const _ = Kt(0.94, f.start, f.control, f.end);
        return Math.atan2(f.end.y - _.y, f.end.x - _.x);
      })() : Math.atan2(f.end.y - f.start.y, f.end.x - f.start.x), L = I ? Bt(y[0], y[1]) : f.routing === "orthogonal" && f.start.side ? f.start.side === "e" ? 0 : f.start.side === "w" ? Math.PI : f.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Bt(f.start, f.end), A = x.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : x.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", S = (_, B, G, q) => {
        if (_ === "dot") return `<circle cx="${B}" cy="${G}" r="${p}" fill="${X}"/>`;
        if (_ === "none") return "";
        const nt = `${B - z * Math.cos(q - 0.4)},${G - z * Math.sin(q - 0.4)}`, U = `${B - z * Math.cos(q + 0.4)},${G - z * Math.sin(q + 0.4)}`;
        return `<polygon points="${B},${G} ${nt} ${U}" fill="${X}"/>`;
      }, T = f.routing === "orthogonal" && f.pathPoints ? ye(f.pathPoints) : f.bend === 0 ? { x: (f.start.x + f.end.x) / 2, y: (f.start.y + f.end.y) / 2 } : Kt(0.5, f.start, f.control, f.end), O = ie(x), F = O ? `<text x="${T.x}" y="${T.y - 6}" text-anchor="middle" font-family="${Ct(ht(x))}" font-size="${x.fontSize ?? 12}" fill="${X}">${Ct(O)}</text>` : "";
      return `<path d="${C}" fill="none" stroke="${X}" stroke-width="${v}" stroke-linecap="round" stroke-linejoin="round"${A}/>` + S(x.arrowEnd ?? "arrow", f.end.x, f.end.y, P) + S(x.arrowStart ?? "none", f.start.x, f.start.y, L + Math.PI) + F;
    }
    if (x.type === "image" && x.src) {
      const f = ve(x.src);
      return f ? `<image href="${Ct(f)}" x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}"${h}/>` : "";
    }
    if (x.type === "frame")
      return `<g${h}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" fill="none" stroke="${H.slate400}" stroke-width="${x.strokeWidth ?? 2}" rx="4"/><text x="${c.minX}" y="${c.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${H.muted}">${Ct(x.text ?? "프레임")}</text></g>`;
    if (x.type === "note")
      return `<g${h}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" fill="${i.bg}"/><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="6" fill="${i.border}"/>` + k(x, i.text, 14, "600", "start") + "</g>";
    if (x.type === "card") {
      const f = x.cardStyle === "glass";
      return `<g${h}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" rx="16" fill="${f ? H.glassFill : H.slateCard}"/><text x="${c.minX + 16}" y="${c.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${H.slate400}">[ ${Ct(x.category ?? "ENTITY")} ]</text>` + k(x, H.white, 16, "700", "start") + "</g>";
    }
    const l = x.type === "rect" || x.type === "ellipse" || x.type === "triangle" || x.type === "diamond" || x.type === "hexagon" || x.type === "star" ? x.strokeWidth ?? 2 : 2, Y = ne(x), M = en(x), b = x.type === "triangle" || x.type === "diamond" || x.type === "hexagon" || x.type === "star", $ = b ? nn(x.type, c.maxX - c.minX, c.maxY - c.minY).split(" ").map((f) => {
      const [v, z] = f.split(",").map(Number);
      return `${v + c.minX},${z + c.minY}`;
    }).join(" ") : "", w = x.type === "ellipse" ? `<ellipse cx="${(c.minX + c.maxX) / 2}" cy="${(c.minY + c.maxY) / 2}" rx="${(c.maxX - c.minX) / 2}" ry="${(c.maxY - c.minY) / 2}" fill="${Y}" stroke="${M}" stroke-width="${l}"/>` : b ? `<polygon points="${$}" fill="${Y}" stroke="${M}" stroke-width="${l}" stroke-linejoin="round"/>` : `<rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" rx="12" fill="${Y}" stroke="${M}" stroke-width="${l}"/>`;
    return `<g${h}>${w}${k(x, i.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${g}" viewBox="${n - a} ${o - a} ${u} ${g}"><rect x="${n - a}" y="${o - a}" width="${u}" height="${g}" fill="${e ? H.canvasDark : H.canvasLight}"/>` + d + "</svg>";
}
async function er(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), o = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), r = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), s = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, a = new Image();
  a.crossOrigin = "anonymous";
  try {
    await new Promise((i, c) => {
      a.onload = () => i(), a.onerror = () => c(new Error("svg rasterise failed")), a.src = s;
    });
  } catch {
    return null;
  }
  const u = 2, g = o * u, k = r * u;
  if (!Number.isSafeInteger(g) || !Number.isSafeInteger(k) || g > Ot.maxExportDimension || k > Ot.maxExportDimension || g * k > Ot.maxExportPixels) return null;
  const d = document.createElement("canvas");
  d.width = g, d.height = k;
  const x = d.getContext("2d");
  return x ? (x.scale(u, u), x.drawImage(a, 0, 0), new Promise((i) => {
    try {
      d.toBlob((c) => i(c), "image/png");
    } catch {
      i(null);
    }
  })) : null;
}
function nr(t, e, n) {
  if (t.length < 2) return;
  const o = t.filter(
    (i) => i.type !== "draw" && i.type !== "arrow" && i.type !== "frame" && i.type !== "image"
  );
  if (o.length < 2) return;
  const r = o.map((i, c) => ({
    id: i.id,
    i: c,
    x: wt(i).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: wt(i).y,
    vx: 0,
    vy: 0
  }));
  for (let i = 0; i < r.length; i++)
    for (let c = 0; c < i; c++)
      if (Math.abs(r[i].x - r[c].x) < 1 && Math.abs(r[i].y - r[c].y) < 1) {
        const m = 2 * Math.PI * i / r.length;
        r[i].x += Math.cos(m) * 10, r[i].y += Math.sin(m) * 10;
        break;
      }
  const s = new Map(r.map((i) => [i.id, i])), a = [];
  for (const i of t) {
    if (i.type !== "arrow") continue;
    const c = i.fromId ? s.get(i.fromId) : null, m = i.toId ? s.get(i.toId) : null;
    c && m && a.push([c, m]);
  }
  const u = 220, g = u * u, k = 80;
  let d = 400;
  const x = d / k;
  for (let i = 0; i < k; i++) {
    for (let c = 0; c < r.length; c++)
      r[c].vx = 0, r[c].vy = 0;
    for (let c = 0; c < r.length; c++)
      for (let m = c + 1; m < r.length; m++) {
        const h = r[c], X = r[m], l = h.x - X.x, Y = h.y - X.y, M = Math.hypot(l, Y) || 0.01, b = g / M, $ = l / M * b, w = Y / M * b;
        h.vx += $, h.vy += w, X.vx -= $, X.vy -= w;
      }
    for (const [c, m] of a) {
      const h = c.x - m.x, X = c.y - m.y, l = Math.hypot(h, X) || 0.01, Y = l * l / u, M = h / l * Y, b = X / l * Y;
      c.vx -= M, c.vy -= b, m.vx += M, m.vy += b;
    }
    for (const c of r) {
      const m = Math.hypot(c.vx, c.vy) || 0.01, h = Math.min(m, d);
      c.x += c.vx / m * h, c.y += c.vy / m * h;
    }
    d = Math.max(0.5, d - x);
  }
  e((i) => i.map((c) => {
    const m = s.get(c.id);
    return m ? { ...c, x: m.x - c.w / 2, y: m.y - c.h / 2 } : c;
  })), n();
}
function or(t, {
  controlled: e,
  past: n,
  future: o,
  setLocalShapes: r,
  setCamera: s,
  selectNow: a,
  setEditingId: u
}) {
  let g;
  try {
    g = _n(t);
  } catch {
    return;
  }
  e || (n.current = [], o.current = [], r(g.shapes.map(rr))), s(g.camera), a(/* @__PURE__ */ new Set()), u(null);
}
function rr(t) {
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
      return ir(t);
  }
}
function ir(t) {
  throw new Hn(`Unhandled canvas shape type: ${String(t)}.`);
}
function ar({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: o,
  selectedRef: r,
  past: s,
  future: a,
  controlled: u,
  isDarkMode: g,
  minZoom: k,
  maxZoom: d,
  onToolChange: x,
  setSelectedStrokeWidth: i,
  onDirty: c,
  commit: m,
  deleteSelection: h,
  selectNow: X,
  viewportCentre: l,
  setShapes: Y,
  setLocalShapes: M,
  setCamera: b,
  setEditingId: $,
  setAnnouncement: w,
  createId: f
}) {
  const v = dt((p) => {
    const y = l(), I = cn({
      id: f(),
      x: p.x ?? y.x - p.w / 2,
      y: p.y ?? y.y - p.h / 2,
      ...p
    });
    if (!I) throw new Error("Canvas could not create a valid shape.");
    return m((C) => [...C, I]), X(/* @__PURE__ */ new Set([I.id])), x("select"), w(`${I.type} 추가됨`), I;
  }, [m, f, x, X, w, l]), z = dt(() => tr(n.current, g), [g, n]);
  Fn(t, () => ({
    addNote: (p) => {
      const y = v({ type: "note", w: 180, h: 180, color: p, text: "" });
      $(y.id);
    },
    addCard: (p, y, I, C) => {
      v({ type: "card", w: 260, h: 150, text: p, category: y, cardStyle: I, color: C });
    },
    addText: () => {
      const p = v({ type: "text", w: 220, h: 44, text: "" });
      $(p.id);
    },
    addShape: (p, y, I) => {
      v({
        type: p,
        w: p === "ellipse" ? 220 : 200,
        h: p === "ellipse" ? 110 : 140,
        color: y,
        text: I ?? ""
      });
    },
    addArrow: () => {
      const p = l(), y = { id: f(), type: "arrow", x: p.x - 140, y: p.y, w: 280, h: 0 };
      m((I) => [...I, y]), X(/* @__PURE__ */ new Set([y.id])), x("select");
    },
    addImage: (p, y, I, C) => {
      v({ type: "image", w: I, h: C, src: p, fileName: y });
    },
    addFileCard: (p, y, I) => {
      v({ type: "rect", w: 260, h: 120, color: "purple", text: I, src: y, fileName: p });
    },
    updateShapeText: (p, y) => {
      m((I) => I.map((C) => C.id === p ? { ...C, text: y, html: void 0 } : C));
    },
    setSelectedStrokeWidth: i,
    setTool: x,
    undo: () => {
      const p = s.current.pop();
      p && (a.current.push(n.current), Y(p), X(/* @__PURE__ */ new Set()), $(null), c(), w("실행 취소"));
    },
    redo: () => {
      const p = a.current.pop();
      p && (s.current.push(n.current), Y(p), X(/* @__PURE__ */ new Set()), $(null), c(), w("다시 실행"));
    },
    deleteSelected: () => {
      h(r.current);
    },
    duplicateSelected: () => {
      var C;
      const p = r.current;
      if (p.size === 0) return;
      const y = [], I = /* @__PURE__ */ new Map();
      for (const P of n.current) {
        if (!p.has(P.id)) continue;
        let L = P.groupId;
        L && (I.has(L) || I.set(L, f("g")), L = I.get(L)), y.push({
          ...P,
          id: f(),
          x: P.x + 24,
          y: P.y + 24,
          groupId: L,
          points: (C = P.points) == null ? void 0 : C.map(([A, S]) => [A + 24, S + 24]),
          orthogonalWaypoints: P.type === "arrow" && P.orthogonalWaypoints ? P.orthogonalWaypoints.map((A) => ({ x: A.x + 24, y: A.y + 24 })) : void 0
        });
      }
      m((P) => [...P, ...y]), X(new Set(y.map((P) => P.id))), w(`${y.length}개 복제됨`);
    },
    group: () => {
      var I;
      const p = r.current;
      if (p.size < 2) return;
      const y = f("g");
      m((C) => C.map((P) => p.has(P.id) ? { ...P, groupId: y } : P)), w(`${p.size}개 그룹화됨`), (I = e.current) == null || I.focus();
    },
    ungroup: () => {
      var y;
      const p = r.current;
      p.size !== 0 && (m((I) => I.map((C) => p.has(C.id) ? { ...C, groupId: void 0 } : C)), w("그룹 해제됨"), (y = e.current) == null || y.focus());
    },
    zoomBy: (p) => {
      b((y) => {
        var A;
        const I = (A = e.current) == null ? void 0 : A.getBoundingClientRect(), C = Math.min(d, Math.max(k, y.z * p));
        if (!I) return { ...y, z: C };
        const P = y.x + I.width / 2 / y.z, L = y.y + I.height / 2 / y.z;
        return { x: P - I.width / 2 / C, y: L - I.height / 2 / C, z: C };
      });
    },
    zoomTo: (p) => {
      b((y) => {
        var A;
        const I = (A = e.current) == null ? void 0 : A.getBoundingClientRect(), C = Math.min(d, Math.max(k, p));
        if (!I) return { ...y, z: C };
        const P = y.x + I.width / 2 / y.z, L = y.y + I.height / 2 / y.z;
        return { x: P - I.width / 2 / C, y: L - I.height / 2 / C, z: C };
      });
    },
    resetZoom: () => {
      b((p) => {
        var P;
        const y = (P = e.current) == null ? void 0 : P.getBoundingClientRect();
        if (!y) return { ...p, z: 1 };
        const I = p.x + y.width / 2 / p.z, C = p.y + y.height / 2 / p.z;
        return { x: I - y.width / 2, y: C - y.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var T;
      const p = n.current, y = (T = e.current) == null ? void 0 : T.getBoundingClientRect();
      if (p.length === 0 || !y) return;
      let I = 1 / 0, C = 1 / 0, P = -1 / 0, L = -1 / 0;
      for (const O of p) {
        const F = at(O);
        I = Math.min(I, F.minX), C = Math.min(C, F.minY), P = Math.max(P, F.maxX), L = Math.max(L, F.maxY);
      }
      const A = 80, S = Math.min(d, Math.max(
        k,
        Math.min(y.width / (P - I + A * 2), y.height / (L - C + A * 2))
      ));
      b({
        x: (I + P) / 2 - y.width / 2 / S,
        y: (C + L) / 2 - y.height / 2 / S,
        z: S
      });
    },
    autoLayout: () => nr(n.current, m, () => w("자동 배치 완료")),
    exportSvg: z,
    exportPng: () => er(z),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (p) => or(p, {
      controlled: u,
      past: s,
      future: a,
      setLocalShapes: M,
      setCamera: b,
      selectNow: X,
      setEditingId: $
    })
  }), [
    v,
    z,
    m,
    f,
    h,
    g,
    d,
    k,
    c,
    x,
    X,
    b,
    $,
    M,
    i,
    Y,
    w,
    l,
    u
  ]);
}
function cr(t) {
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
function sr({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: o,
  editingIdRef: r,
  toolRef: s,
  past: a,
  future: u,
  textualTypes: g,
  setIsSpaceDown: k,
  setEditingId: d,
  setShapes: x,
  setAnnouncement: i,
  commit: c,
  deleteSelection: m,
  selectNow: h,
  onDirty: X,
  onToolChange: l,
  createId: Y
}) {
  const M = dt((b, $) => {
    const w = o.current;
    w.size !== 0 && c((f) => f.map((v) => {
      var z;
      return w.has(v.id) ? {
        ...v,
        x: v.x + b,
        y: v.y + $,
        points: (z = v.points) == null ? void 0 : z.map(([p, y]) => [p + b, y + $])
      } : v;
    }));
  }, [c, o]);
  $t(() => {
    const b = (v) => {
      const z = v;
      return !!z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA" || z.isContentEditable);
    }, $ = (v) => v instanceof Element && !!v.closest("input, select, button, textarea, option, label, [data-canvas-control]"), w = (v) => {
      var A, S, T, O;
      const z = t.current, p = document.activeElement, y = v.target instanceof Node && !!(z != null && z.contains(v.target)), I = !!z && (p === z || z.contains(p));
      if (!y && !I || $(v.target)) return;
      if (v.code === "Space" && !b(v.target)) {
        k(!0), v.preventDefault();
        return;
      }
      if (b(v.target)) {
        if (v.key === "Escape")
          v.preventDefault(), d(null), (A = e.current) == null || A.blur(), (S = t.current) == null || S.focus();
        else if ((v.key === "Delete" || v.key === "Backspace") && !r.current) {
          const F = o.current;
          m(F) && v.preventDefault();
        }
        return;
      }
      const C = v.metaKey || v.ctrlKey, P = o.current;
      if (C && v.key.toLowerCase() === "z") {
        if (v.preventDefault(), v.shiftKey) {
          const F = u.current.pop();
          F && (a.current.push(n.current), x(F), X());
        } else {
          const F = a.current.pop();
          F && (u.current.push(n.current), x(F), X());
        }
        h(/* @__PURE__ */ new Set());
        return;
      }
      if (C && v.key.toLowerCase() === "g") {
        if (v.preventDefault(), v.shiftKey)
          P.size > 0 && (c((F) => F.map((_) => P.has(_.id) ? { ..._, groupId: void 0 } : _)), i("그룹 해제됨"));
        else if (P.size > 1) {
          const F = Y("g");
          c((_) => _.map((B) => P.has(B.id) ? { ...B, groupId: F } : B)), i(`${P.size}개 그룹화됨`);
        }
        return;
      }
      if (C && v.key.toLowerCase() === "a") {
        v.preventDefault(), h(new Set(n.current.map((F) => F.id))), i(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (v.key === "Delete" || v.key === "Backspace") {
        m(P) && v.preventDefault();
        return;
      }
      if (v.key.startsWith("Arrow")) {
        v.preventDefault();
        const F = v.shiftKey ? 10 : 1;
        v.key === "ArrowLeft" && M(-F, 0), v.key === "ArrowRight" && M(F, 0), v.key === "ArrowUp" && M(0, -F), v.key === "ArrowDown" && M(0, F);
        return;
      }
      if (v.key === "Tab" && n.current.length > 0) {
        v.preventDefault();
        const F = n.current, _ = F.findIndex((q) => P.has(q.id)), B = v.shiftKey ? _ <= 0 ? F.length - 1 : _ - 1 : _ === -1 || _ === F.length - 1 ? 0 : _ + 1, G = F[B];
        h(/* @__PURE__ */ new Set([G.id])), i(`${G.type} 선택됨: ${ie(G) || "내용 없음"}`);
        return;
      }
      if (v.key === "Enter" && P.size === 1) {
        const F = n.current.find((_) => P.has(_.id));
        F && g.includes(F.type) && (v.preventDefault(), d(F.id));
        return;
      }
      if (v.key === "Escape") {
        if (r.current) {
          v.preventDefault(), d(null), (T = e.current) == null || T.blur(), (O = t.current) == null || O.focus(), l("select");
          return;
        }
        h(/* @__PURE__ */ new Set()), l("select");
        return;
      }
      const L = cr(v);
      L && (v.preventDefault(), s.current = L, l(L));
    }, f = (v) => {
      const z = t.current;
      !z || !(document.activeElement === z || z.contains(document.activeElement)) || v.code === "Space" && k(!1);
    };
    return window.addEventListener("keydown", w), window.addEventListener("keyup", f), () => {
      window.removeEventListener("keydown", w), window.removeEventListener("keyup", f);
    };
  }, [
    c,
    t,
    Y,
    m,
    r,
    e,
    u,
    M,
    X,
    l,
    a,
    h,
    o,
    i,
    d,
    k,
    x,
    n,
    g,
    s
  ]);
}
const lr = 400;
function dr({
  containerRef: t,
  editorRef: e,
  pointers: n,
  cameraRef: o,
  shapesRef: r,
  toolRef: s,
  activeColorRef: a,
  drawStrokeWidth: u,
  camera: g,
  shapes: k,
  selected: d,
  isSpaceDown: x,
  textualTypes: i,
  setShapes: c,
  setEditingId: m,
  applyInteraction: h,
  selectNow: X,
  beginHistory: l,
  commit: Y,
  onToolChange: M,
  expandToGroups: b,
  toPage: $,
  createId: w
}) {
  const f = w, v = et(null), z = (S, T) => {
    var B;
    const O = ((B = t.current) == null ? void 0 : B.dataset.canvasActiveTool) === "text" ? "text" : s.current;
    if (O !== "note" && O !== "text") return;
    const F = $(S, T), _ = O === "note" ? { id: f(), type: "note", x: F.x - 90, y: F.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: f(), type: "text", x: F.x, y: F.y - 22, w: 220, h: 44, text: "" };
    Y((G) => [...G, _]), X(/* @__PURE__ */ new Set([_.id])), m(_.id), M("select");
  };
  return $t(() => {
    const S = (T) => {
      var O;
      (O = t.current) != null && O.contains(T.target) && (T.target instanceof Element && T.target.closest('[role="textbox"], [data-canvas-inspector]') || z(T.clientX, T.clientY));
    };
    return window.addEventListener("click", S, !0), () => window.removeEventListener("click", S, !0);
  }), { onPointerDown: (S) => {
    var G, q, nt;
    const T = s.current;
    n.current.set(S.pointerId, { x: S.clientX, y: S.clientY }), S.cancelable && S.preventDefault();
    const O = S.currentTarget;
    try {
      O.setPointerCapture(S.pointerId);
    } catch {
    }
    if (n.current.size === 2) {
      const [U, R] = [...n.current.values()], Z = o.current;
      h({
        kind: "pinch",
        startDist: Math.hypot(R.x - U.x, R.y - U.y) || 1,
        startZoom: Z.z,
        startMidX: (U.x + R.x) / 2,
        startMidY: (U.y + R.y) / 2,
        camX: Z.x,
        camY: Z.y
      });
      return;
    }
    if (n.current.size > 2) return;
    if (S.button === 1 || x || T === "hand" || S.button === 0 && T === "select" && S.altKey) {
      h({ kind: "pan", startX: S.clientX, startY: S.clientY, camX: g.x, camY: g.y });
      return;
    }
    if (S.button !== 0) return;
    const F = $(S.clientX, S.clientY);
    if (m(null), (G = e.current) == null || G.blur(), (q = t.current) == null || q.focus(), T === "draw" || T === "highlighter") {
      const U = {
        id: f(),
        type: "draw",
        x: F.x,
        y: F.y,
        w: 0,
        h: 0,
        points: [[F.x, F.y]],
        color: a.current,
        strokeWidth: u,
        drawMode: T === "highlighter" ? "highlighter" : "pen"
      };
      l(), c((R) => [...R, U]), h({ kind: "drawing", id: U.id });
      return;
    }
    if (T === "arrow" || T === "frame" || Bn.includes(T)) {
      const U = T, R = T === "arrow" ? { id: f(), type: "arrow", x: F.x, y: F.y, w: 0, h: 0, color: a.current } : T === "frame" ? { id: f(), type: "frame", x: F.x, y: F.y, w: 0, h: 0, text: "프레임" } : { id: f(), type: U, x: F.x, y: F.y, w: 0, h: 0, color: a.current, text: "" };
      l(), c((Z) => [...Z, R]), h({ kind: "creating", id: R.id, startX: F.x, startY: F.y });
      return;
    }
    if (T === "note" || T === "text") return;
    if (T === "eraser") {
      l(), c((U) => dn(U, F.x, F.y, 14 / g.z, g.z)), h({ kind: "erasing" });
      return;
    }
    const _ = new Map(k.map((U) => [U.id, U])), B = [...k].reverse().find((U) => oe(U, F.x, F.y, g.z, _, k));
    if (!B)
      v.current = null;
    else {
      const U = Date.now(), R = !S.shiftKey && i.includes(B.type) && ((nt = v.current) == null ? void 0 : nt.id) === B.id && U - v.current.time < lr, Z = R ? B.id : void 0;
      v.current = R ? null : { id: B.id, time: U };
      const J = S.shiftKey ? new Set(d).add(B.id) : d.has(B.id) ? d : /* @__PURE__ */ new Set([B.id]), ot = b(J);
      X(ot);
      const vt = /* @__PURE__ */ new Map();
      for (const rt of k) ot.has(rt.id) && vt.set(rt.id, rt);
      for (const rt of k) {
        if (rt.type !== "frame" || !ot.has(rt.id)) continue;
        const ct = at(rt);
        for (const N of k) {
          if (N.id === rt.id || vt.has(N.id)) continue;
          const D = wt(N);
          D.x >= ct.minX && D.x <= ct.maxX && D.y >= ct.minY && D.y <= ct.maxY && vt.set(N.id, N);
        }
      }
      l(), h({ kind: "move", startX: F.x, startY: F.y, origin: vt, editOnReleaseId: Z });
      return;
    }
    S.shiftKey || X(/* @__PURE__ */ new Set()), h({
      kind: "marquee",
      startX: F.x,
      startY: F.y,
      curX: F.x,
      curY: F.y,
      screenStartX: S.clientX,
      screenStartY: S.clientY
    });
  }, onResizeHandleDown: (S, T, O) => {
    S.stopPropagation(), n.current.set(S.pointerId, { x: S.clientX, y: S.clientY }), l(), h({ kind: "resize", id: T.id, handle: O, start: T });
  }, onRotateHandleDown: (S, T) => {
    S.stopPropagation(), n.current.set(S.pointerId, { x: S.clientX, y: S.clientY });
    const O = $(S.clientX, S.clientY), F = wt(T);
    l(), h({
      kind: "rotate",
      id: T.id,
      startAngle: Math.atan2(O.y - F.y, O.x - F.x),
      startRotation: T.rotation ?? 0
    });
  }, onConnectHandleDown: (S, T) => {
    S.stopPropagation(), n.current.set(S.pointerId, { x: S.clientX, y: S.clientY });
    const O = $(S.clientX, S.clientY);
    h({ kind: "connect", fromId: T.id, toX: O.x, toY: O.y, hoverId: null });
  }, onBendHandleDown: (S, T) => {
    S.stopPropagation(), n.current.set(S.pointerId, { x: S.clientX, y: S.clientY }), l(), h({ kind: "bend", id: T.id });
  }, onOrthogonalSegmentHandleDown: (S, T, O) => {
    S.stopPropagation(), n.current.set(S.pointerId, { x: S.clientX, y: S.clientY }), l(), h({ kind: "orthogonal-segment", id: T.id, segmentIndex: O });
  }, onArrowEndpointDown: (S, T, O) => {
    S.stopPropagation(), n.current.set(S.pointerId, { x: S.clientX, y: S.clientY }), l(), h({ kind: "arrow-endpoint", id: T.id, endpoint: O, hoverId: null });
  } };
}
const ur = 0.1, hr = 4, xr = 14, fr = 4, Oe = ["note", "card", "rect", "ellipse", "text", "image"];
function mr({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: o,
  shapesRef: r,
  setShapes: s,
  setEditingId: a,
  setEraserPos: u,
  setGuides: g,
  setAnnouncement: k,
  applyInteraction: d,
  selectNow: x,
  endHistory: i,
  commit: c,
  onToolChange: m,
  createId: h,
  pendingDrawPointsRef: X,
  drawRafRef: l
}) {
  const Y = h;
  $t(() => {
    const M = (b) => {
      var w, f;
      t.current.delete(b.pointerId);
      try {
        (f = (w = b.target) == null ? void 0 : w.releasePointerCapture) == null || f.call(w, b.pointerId);
      } catch {
      }
      const $ = e.current;
      if ($.kind !== "none") {
        if ($.kind === "pinch") {
          t.current.size < 2 && d({ kind: "none" });
          return;
        }
        if (g([]), $.kind === "erasing") {
          u(null), i(), d({ kind: "none" });
          return;
        }
        if ($.kind === "connect") {
          const z = r.current.find((L) => L.id === $.fromId);
          if (d({ kind: "none" }), !z) return;
          const p = { x: $.toX, y: $.toY }, y = wt(z);
          if (!$.hoverId && Math.hypot(p.x - y.x, p.y - y.y) < 30) return;
          const I = [];
          let C = $.hoverId;
          if (!C) {
            const L = z.type === "note" ? 180 : 200, A = z.type === "note" ? 180 : 120, S = {
              ...z,
              id: Y(),
              x: p.x - L / 2,
              y: p.y - A / 2,
              w: L,
              h: A,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            I.push(S), C = S.id;
          }
          const P = {
            id: Y(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: z.id,
            toId: C,
            text: ""
          };
          I.push(P), c((L) => [...L, ...I]), x(/* @__PURE__ */ new Set([P.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => a(P.id)) : a(P.id), k("연결 생성됨");
          return;
        }
        if ($.kind === "bend") {
          i(), d({ kind: "none" });
          return;
        }
        if ($.kind === "drawing") {
          l.current !== null && (cancelAnimationFrame(l.current), l.current = null);
          const v = o(b.clientX, b.clientY);
          X.current.push([v.x, v.y]);
          const z = X.current.splice(0);
          s((p) => p.map((y) => {
            if (y.id !== $.id || !y.points) return y;
            const I = [...y.points];
            let C = I[I.length - 1];
            for (const T of z)
              (!C || Math.hypot(T[0] - C[0], T[1] - C[1]) >= 1 / n.current.z) && (I.push(T), C = T);
            const P = I.map((T) => T[0]), L = I.map((T) => T[1]), A = Math.min(...P), S = Math.min(...L);
            return { ...y, points: I, x: A, y: S, w: Math.max(...P) - A, h: Math.max(...L) - S };
          })), i(), d({ kind: "none" });
          return;
        }
        if ($.kind === "creating") {
          s((v) => v.map((z) => {
            if (z.id !== $.id) return z;
            const p = Math.abs(z.w) < 4 && Math.abs(z.h) < 4 ? {
              ...z,
              w: z.type === "arrow" ? 200 : z.type === "frame" ? 480 : 180,
              h: z.type === "arrow" ? 0 : z.type === "frame" ? 320 : 120
            } : z;
            if (p.type === "arrow") return p;
            const y = Et(p);
            return { ...p, x: y.minX, y: y.minY, w: y.maxX - y.minX, h: y.maxY - y.minY };
          })), i(), x(/* @__PURE__ */ new Set([$.id])), m("select"), d({ kind: "none" });
          return;
        }
        if (($.kind === "move" || $.kind === "resize" || $.kind === "rotate" || $.kind === "orthogonal-segment" || $.kind === "arrow-endpoint") && i(), $.kind === "move" && $.editOnReleaseId && b.type === "pointerup") {
          const v = o(b.clientX, b.clientY);
          Math.hypot(v.x - $.startX, v.y - $.startY) * n.current.z <= fr && a($.editOnReleaseId);
        }
        d({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", M), window.addEventListener("pointercancel", M), () => {
      window.removeEventListener("pointerup", M), window.removeEventListener("pointercancel", M);
    };
  }, [d, n, h, i, e, m, t, x, k, a, s, r, o]);
}
function vr({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: o,
  shapesRef: r,
  setCamera: s,
  setShapes: a,
  setEraserPos: u,
  setGuides: g,
  applyInteraction: k,
  selectNow: d,
  expandToGroups: x,
  toPage: i,
  pendingDrawPointsRef: c,
  drawRafRef: m
}) {
  $t(() => () => {
    m.current !== null && cancelAnimationFrame(m.current);
  }, []), $t(() => {
    const h = (X) => {
      var b, $;
      e.current.has(X.pointerId) && e.current.set(X.pointerId, { x: X.clientX, y: X.clientY });
      const l = n.current;
      if (l.kind === "none") return;
      const Y = o.current;
      if (l.kind === "pinch") {
        if (e.current.size < 2) return;
        const [w, f] = [...e.current.values()], v = Math.hypot(f.x - w.x, f.y - w.y) || 1, z = (w.x + f.x) / 2, p = (w.y + f.y) / 2, y = (b = t.current) == null ? void 0 : b.getBoundingClientRect();
        if (!y) return;
        const I = Math.min(hr, Math.max(ur, l.startZoom * (v / l.startDist))), C = l.camX + (l.startMidX - y.left) / l.startZoom, P = l.camY + (l.startMidY - y.top) / l.startZoom;
        s({ x: C - (z - y.left) / I, y: P - (p - y.top) / I, z: I });
        return;
      }
      if (l.kind === "pan") {
        s({
          x: l.camX - (X.clientX - l.startX) / Y.z,
          y: l.camY - (X.clientY - l.startY) / Y.z,
          z: Y.z
        });
        return;
      }
      const M = i(X.clientX, X.clientY);
      if (l.kind === "erasing") {
        a((w) => dn(w, M.x, M.y, xr / Y.z, Y.z)), u({ x: M.x, y: M.y });
        return;
      }
      if (l.kind === "connect") {
        const w = r.current, f = new Map(w.map((z) => [z.id, z])), v = [...w].reverse().find((z) => z.id !== l.fromId && Oe.includes(z.type) && oe(z, M.x, M.y, Y.z, f, w));
        k({ ...l, toX: M.x, toY: M.y, hoverId: (v == null ? void 0 : v.id) ?? null });
        return;
      }
      if (l.kind === "bend") {
        const w = r.current, f = w.find((L) => L.id === l.id);
        if (!f) return;
        const v = kt(f, new Map(w.map((L) => [L.id, L])), w), z = v.end.x - v.start.x, p = v.end.y - v.start.y, y = Math.hypot(z, p) || 1, I = (v.start.x + v.end.x) / 2, C = (v.start.y + v.end.y) / 2, P = (M.x - I) * (-p / y) + (M.y - C) * (z / y);
        a((L) => L.map((A) => A.id === l.id ? { ...A, bend: P } : A));
        return;
      }
      if (l.kind === "orthogonal-segment") {
        const w = r.current, f = w.find((P) => P.id === l.id);
        if (!f) return;
        const v = kt(f, new Map(w.map((P) => [P.id, P])), w), z = v.routing === "orthogonal" ? v.pathPoints : void 0;
        if (!z || z.length < 2) return;
        const p = z[l.segmentIndex], y = z[l.segmentIndex + 1];
        if (!p || !y) return;
        const I = p.x === y.x ? M.x : M.y, C = ao(z, l.segmentIndex, I);
        a((P) => P.map((L) => L.id === l.id ? { ...L, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: C.slice(1, -1).map((A) => ({ x: A.x, y: A.y })) } : L));
        return;
      }
      if (l.kind === "arrow-endpoint") {
        const w = r.current, f = w.find((C) => C.id === l.id);
        if (!f) return;
        const v = new Map(w.map((C) => [C.id, C])), z = kt(f, v, w), p = l.endpoint === "start" ? z.end : z.start, y = [...w].reverse().find((C) => C.id !== f.id && Oe.includes(C.type) && oe(C, M.x, M.y, Y.z, v, w)), I = y ? At(y, p.x, p.y) : { x: M.x, y: M.y };
        k({ ...l, hoverId: (y == null ? void 0 : y.id) ?? null }), a((C) => C.map((P) => {
          if (P.id !== f.id) return P;
          const L = l.endpoint === "start" ? I : p, A = l.endpoint === "end" ? I : p;
          return {
            ...P,
            x: L.x,
            y: L.y,
            w: A.x - L.x,
            h: A.y - L.y,
            fromId: l.endpoint === "start" ? y == null ? void 0 : y.id : P.fromId,
            toId: l.endpoint === "end" ? y == null ? void 0 : y.id : P.toId
          };
        }));
        return;
      }
      if (l.kind === "marquee") {
        k({ ...l, curX: M.x, curY: M.y });
        const w = Math.min(l.startX, M.x), f = Math.max(l.startX, M.x), v = Math.min(l.startY, M.y), z = Math.max(l.startY, M.y), p = Math.min(l.screenStartX, X.clientX), y = Math.max(l.screenStartX, X.clientX), I = Math.min(l.screenStartY, X.clientY), C = Math.max(l.screenStartY, X.clientY), P = /* @__PURE__ */ new Map();
        ($ = t.current) == null || $.querySelectorAll("[data-canvas-shape-id]").forEach((A) => {
          const S = A.dataset.canvasShapeId;
          S && P.set(S, A.getBoundingClientRect());
        });
        const L = r.current.filter((A) => {
          const S = P.get(A.id);
          if (S)
            return S.right >= p && S.left <= y && S.bottom >= I && S.top <= C;
          const T = at(A);
          return T.maxX >= w && T.minX <= f && T.maxY >= v && T.minY <= z;
        }).map((A) => A.id);
        d(x(new Set(L)));
        return;
      }
      if (l.kind === "move") {
        let w = M.x - l.startX, f = M.y - l.startY;
        const v = l.origin, z = (() => {
          let I = 1 / 0, C = 1 / 0, P = -1 / 0, L = -1 / 0;
          return v.forEach((A) => {
            const S = at({ ...A, x: A.x + w, y: A.y + f });
            I = Math.min(I, S.minX), C = Math.min(C, S.minY), P = Math.max(P, S.maxX), L = Math.max(L, S.maxY);
          }), { minX: I, minY: C, maxX: P, maxY: L };
        })(), p = r.current.filter((I) => !v.has(I.id)), y = Xo(z, p, Y.z);
        w += y.dx, f += y.dy, g(y.guides), a((I) => I.map((C) => {
          var L;
          const P = v.get(C.id);
          return P ? {
            ...C,
            x: P.x + w,
            y: P.y + f,
            points: (L = P.points) == null ? void 0 : L.map(([A, S]) => [A + w, S + f]),
            ...P.type === "arrow" && P.orthogonalWaypoints ? { orthogonalWaypoints: P.orthogonalWaypoints.map((A) => ({ x: A.x + w, y: A.y + f })) } : {}
          } : C;
        }));
        return;
      }
      if (l.kind === "drawing") {
        if (X.shiftKey) {
          a((f) => f.map((v) => {
            if (v.id !== l.id || !v.points) return v;
            const z = v.points[0];
            return z ? { ...v, points: [z, [M.x, M.y]] } : v;
          }));
          return;
        }
        const w = typeof X.getCoalescedEvents == "function" ? X.getCoalescedEvents() : [];
        if (w.length > 0)
          for (const f of w) {
            const v = i(f.clientX, f.clientY);
            c.current.push([v.x, v.y]);
          }
        c.current.push([M.x, M.y]), m.current === null && (m.current = requestAnimationFrame(() => {
          m.current = null;
          const f = c.current;
          if (f.length === 0) return;
          c.current = [];
          const v = o.current.z;
          a((z) => z.map((p) => {
            if (p.id !== l.id || !p.points) return p;
            let y = p.points[p.points.length - 1][0], I = p.points[p.points.length - 1][1];
            const C = [...p.points];
            for (const [P, L] of f)
              Math.hypot(P - y, L - I) < 1 / v || (C.push([P, L]), y = P, I = L);
            return C.length === p.points.length ? p : { ...p, points: C };
          }));
        }));
        return;
      }
      if (l.kind === "creating") {
        a((w) => w.map((f) => f.id === l.id ? { ...f, w: M.x - l.startX, h: M.y - l.startY } : f));
        return;
      }
      if (l.kind === "rotate") {
        const w = r.current.find((p) => p.id === l.id);
        if (!w) return;
        const f = wt(w), v = Math.atan2(M.y - f.y, M.x - f.x);
        let z = l.startRotation + (v - l.startAngle);
        X.shiftKey && (z = Math.round(z / (Math.PI / 12)) * (Math.PI / 12)), a((p) => p.map((y) => y.id === l.id ? { ...y, rotation: z } : y));
        return;
      }
      if (l.kind === "resize") {
        const { start: w, handle: f } = l, v = sn(w, M.x, M.y);
        a((z) => z.map((p) => {
          if (p.id !== w.id) return p;
          let { x: y, y: I, w: C, h: P } = w;
          if (f.includes("e") && (C = Math.max(20, v.x - w.x)), f.includes("s") && (P = Math.max(20, v.y - w.y)), f.includes("w")) {
            const L = w.x + w.w;
            y = Math.min(v.x, L - 20), C = L - y;
          }
          if (f.includes("n")) {
            const L = w.y + w.h;
            I = Math.min(v.y, L - 20), P = L - I;
          }
          return { ...p, x: y, y: I, w: C, h: P, manualSize: p.type === "text" ? !0 : p.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", h), () => window.removeEventListener("pointermove", h);
  }, [k, t, x, n, e, d, r, i]);
}
function pr(t) {
  const e = et([]), n = et(null), o = { ...t, pendingDrawPointsRef: e, drawRafRef: n };
  vr(o), mr(o);
}
function yr({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: o,
  cameraRef: r,
  shapesRef: s,
  toolRef: a,
  activeColorRef: u,
  drawStrokeWidth: g,
  camera: k,
  shapes: d,
  selected: x,
  isSpaceDown: i,
  textualTypes: c,
  setCamera: m,
  setShapes: h,
  setEditingId: X,
  setEraserPos: l,
  setGuides: Y,
  setAnnouncement: M,
  applyInteraction: b,
  selectNow: $,
  beginHistory: w,
  endHistory: f,
  commit: v,
  onToolChange: z,
  expandToGroups: p,
  toPage: y,
  createId: I
}) {
  const C = dr({
    containerRef: t,
    editorRef: e,
    pointers: n,
    cameraRef: r,
    shapesRef: s,
    toolRef: a,
    activeColorRef: u,
    drawStrokeWidth: g,
    camera: k,
    shapes: d,
    selected: x,
    isSpaceDown: i,
    textualTypes: c,
    setShapes: h,
    setEditingId: X,
    applyInteraction: b,
    selectNow: $,
    beginHistory: w,
    commit: v,
    onToolChange: z,
    expandToGroups: p,
    toPage: y,
    createId: I
  });
  return pr({
    containerRef: t,
    pointers: n,
    interactionRef: o,
    cameraRef: r,
    shapesRef: s,
    setCamera: m,
    setShapes: h,
    setEditingId: X,
    setEraserPos: l,
    setGuides: Y,
    setAnnouncement: M,
    applyInteraction: b,
    selectNow: $,
    endHistory: f,
    commit: v,
    onToolChange: z,
    expandToGroups: p,
    toPage: y,
    createId: I
  }), C;
}
function gr(t) {
  ar(t);
  const e = Nt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return sr({ ...t, toolRef: e }), yr(t);
}
function wr({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: o,
  zoom: r
}) {
  const s = n || o.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", a = t ? H.gridDark : H.gridLight, u = 40 * r;
  return { cursor: s, gridColor: a, gridSize: u, strokeColorOf: (k) => k.color ? mt[k.color].border : t ? "var(--canvas-slate-200)" : H.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = no, document.head.appendChild(t);
}
const _e = 0.1, He = 4, Be = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function pn(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function je(t, e, n) {
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
        return pn(o);
    }
  });
}
function br(t, e, n) {
  return t.map((o) => e.has(o.id) && o.type === "draw" ? { ...o, ...n } : o);
}
function $r(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const Yr = Tn(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: o,
  drawStrokeWidth: r = 4,
  onToolChange: s,
  onDirty: a,
  onZoomChange: u,
  onSelectionChange: g,
  shapes: k,
  onShapesChange: d,
  peerCursors: x,
  onLocalCursor: i,
  renderDiagram: c
}, m) {
  var Me, ze;
  const {
    containerRef: h,
    editorRef: X,
    setLocalShapes: l,
    controlled: Y,
    shapes: M,
    setShapes: b,
    camera: $,
    setCamera: w,
    cameraRef: f,
    selected: v,
    selectedRef: z,
    editingId: p,
    setEditingId: y,
    editingIdRef: I,
    interaction: C,
    interactionRef: P,
    applyInteraction: L,
    isSpaceDown: A,
    setIsSpaceDown: S,
    guides: T,
    setGuides: O,
    announcement: F,
    setAnnouncement: _,
    showInspectorPalette: B,
    setShowInspectorPalette: G,
    eraserPos: q,
    setEraserPos: nt,
    setActiveColor: U,
    activeColorRef: R,
    installedFontFamilies: Z,
    pointers: J,
    past: ot,
    future: vt,
    selectNow: rt,
    commit: ct,
    deleteSelection: N,
    beginHistory: D,
    endHistory: Q,
    toPage: st,
    viewportCentre: yt,
    expandToGroups: Lt,
    toolRef: ce,
    shapesRef: Wt
  } = Qo({ boardIdentity: e, tool: o, controlledShapes: k, onShapesChange: d, onDirty: a }), {
    inspectorShape: W,
    onContainerPointerMove: V,
    onContainerPointerLeave: j
  } = Jo({
    containerRef: h,
    camera: $,
    setCamera: w,
    minZoom: _e,
    maxZoom: He,
    shapes: M,
    selected: v,
    editingId: p,
    textualTypes: Be,
    onZoomChange: u,
    onSelectionChange: g,
    onLocalCursor: i,
    toPage: st
  }), tt = te.useCallback((xt) => {
    const Ut = new Set(z.current);
    Ut.size !== 0 && ct((Vt) => je(Vt, Ut, xt));
  }, [ct, z]), {
    onPointerDown: zt,
    onResizeHandleDown: Xt,
    onRotateHandleDown: se,
    onConnectHandleDown: yn,
    onBendHandleDown: gn,
    onOrthogonalSegmentHandleDown: wn,
    onArrowEndpointDown: bn
  } = gr({
    ref: m,
    containerRef: h,
    editorRef: X,
    pointers: J,
    interactionRef: P,
    cameraRef: f,
    shapesRef: Wt,
    toolRef: ce,
    activeColorRef: R,
    drawStrokeWidth: r,
    setSelectedStrokeWidth: tt,
    camera: $,
    shapes: M,
    selected: v,
    isSpaceDown: A,
    setCamera: w,
    setShapes: b,
    setEditingId: y,
    setEraserPos: nt,
    setGuides: O,
    setAnnouncement: _,
    applyInteraction: L,
    selectNow: rt,
    past: ot,
    future: vt,
    beginHistory: D,
    endHistory: Q,
    commit: ct,
    deleteSelection: N,
    onDirty: a,
    onToolChange: s,
    controlled: Y,
    isDarkMode: n,
    minZoom: _e,
    maxZoom: He,
    textualTypes: Be,
    selectedRef: z,
    editingIdRef: I,
    setIsSpaceDown: S,
    viewportCentre: yt,
    setLocalShapes: l,
    expandToGroups: Lt,
    toPage: st,
    createId: $r
  }), { cursor: $n, gridColor: kn, gridSize: we, strokeColorOf: Mn } = wr({
    isDarkMode: n,
    tool: o === "highlighter" ? "draw" : o,
    isSpaceDown: A,
    interaction: C,
    zoom: $.z
  }), be = (xt) => {
    const Ut = z.current, Vt = I.current, _t = new Set(Ut);
    if (Vt && _t.add(Vt), _t.size === 0) return;
    const Xe = "strokeWidth" in xt, En = Object.keys(xt).every((gt) => gt === "color" || gt === "fillColor" || gt === "strokeWidth");
    if ((W == null ? void 0 : W.type) === "draw" && En) {
      const gt = "color" in xt ? xt.color : void 0, ft = "strokeWidth" in xt ? xt.strokeWidth : void 0;
      ct((Ln) => br(Ln, _t, {
        ...gt !== void 0 ? { color: gt } : {},
        ...ft !== void 0 ? { strokeWidth: ft } : {}
      }));
      return;
    }
    if (Xe) {
      const gt = xt.strokeWidth;
      if (gt !== void 0 && Object.keys(xt).length === 1) {
        ct((ft) => je(ft, _t, gt));
        return;
      }
    }
    ct((gt) => gt.map((ft) => {
      if (!_t.has(ft.id)) return ft;
      if (!Xe) return { ...ft, ...xt };
      switch (ft.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...ft, ...xt };
        case "note":
        case "card":
        case "text":
        case "image":
          return ft;
        case "draw":
          return { ...ft, ...xt };
        default:
          return pn(ft);
      }
    }));
  }, {
    commitEditorHtml: zn,
    applyFormat: Xn,
    applyList: Sn,
    onEditorKeyDown: Yn,
    applyCustomFontFamily: Cn
  } = Zo({
    editorRef: X,
    editingId: p,
    setShapes: b,
    setAnnouncement: _,
    onDirty: a,
    patchSelected: be
  }), { renderEditor: Nn, renderShapeBody: In } = Ro({
    camera: $,
    editingId: p,
    isDarkMode: n,
    editorRef: X,
    commitEditorHtml: zn,
    onEditorKeyDown: Yn,
    setShapes: b,
    onDirty: a,
    renderDiagram: c
  }), Pn = C.kind === "marquee" ? C : null, { shapeById: $e, visiblePaintOrder: ke } = qo({
    containerRef: h,
    shapesRef: Wt,
    shapes: M,
    camera: $,
    selected: v,
    editingId: p,
    boardIdentity: e
  });
  return /* @__PURE__ */ K(
    "div",
    {
      ref: h,
      onPointerDown: zt,
      onPointerMove: V,
      onPointerLeave: j,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": $.x,
      "data-canvas-camera-y": $.y,
      "data-canvas-camera-z": $.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: $n,
        background: n ? H.canvasDark : H.canvasLight,
        backgroundImage: `radial-gradient(${kn} 1px, transparent 1px)`,
        backgroundSize: `${we}px ${we}px`,
        backgroundPosition: `${-$.x * $.z}px ${-$.y * $.z}px`
      },
      children: [
        /* @__PURE__ */ E("style", { children: '.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas .canvas-rich-text ul>li::before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style="dash"]>li::before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li::before{content:counter(canvas-list-item) ". "}' }),
        /* @__PURE__ */ E(
          "div",
          {
            "aria-live": "polite",
            role: "status",
            className: "absolute w-px h-px overflow-hidden whitespace-nowrap",
            style: { clip: "rect(0 0 0 0)", clipPath: "inset(50%)" },
            children: F
          }
        ),
        /* @__PURE__ */ E(
          Yo,
          {
            visiblePaintOrder: ke,
            selected: v,
            shapeById: $e,
            allShapes: Wt.current,
            camera: $,
            interaction: C,
            eraserPos: q,
            guides: T,
            marquee: Pn,
            strokeColorOf: Mn
          }
        ),
        /* @__PURE__ */ E(
          Bo,
          {
            visiblePaintOrder: ke,
            selected: v,
            editingId: p,
            camera: $,
            shapeById: $e,
            allShapes: Wt.current,
            peerCursors: x,
            isDarkMode: n,
            renderEditor: Nn,
            renderShapeBody: In,
            setEditingId: y,
            onBendHandleDown: gn,
            onOrthogonalSegmentHandleDown: wn,
            onResizeHandleDown: Xt,
            onRotateHandleDown: se,
            onConnectHandleDown: yn,
            onArrowEndpointDown: bn
          }
        ),
        W && /* @__PURE__ */ E(
          Go,
          {
            shape: W,
            shapes: M,
            camera: $,
            canvasSize: { width: ((Me = h.current) == null ? void 0 : Me.clientWidth) ?? 380, height: ((ze = h.current) == null ? void 0 : ze.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!p,
            showPalette: B,
            installedFontFamilies: Z,
            setShowPalette: G,
            setActiveColor: U,
            patchSelected: be,
            applyFormat: Xn,
            applyList: Sn,
            applyCustomFontFamily: Cn
          }
        )
      ]
    }
  );
});
export {
  mt as CANVAS_COLORS,
  On as CANVAS_COLOR_KEYS,
  bt as CANVAS_FONTS,
  Yr as InfiniteCanvas,
  Bn as SHAPE_TOOLS,
  br as applySelectedDrawStyle,
  je as applySelectedStrokeWidth,
  Sr as diagramTemplate,
  jo as getInspectorGroups,
  mn as isDiagramShape
};
