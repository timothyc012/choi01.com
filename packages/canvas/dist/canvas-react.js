import { jsx as P, jsxs as R, Fragment as Ft } from "react/jsx-runtime";
import de, { useRef as nt, useState as st, useLayoutEffect as Zt, useEffect as $t, useMemo as Nt, useCallback as lt, useImperativeHandle as Ln, forwardRef as En } from "react";
import { p as Fn, i as me, k as Be, a as mt, v as Tn, c as bt, s as An, b as Dn, d as Ot, h as Wn, C as On, S as _n } from "./document-C_I4ZYDp.js";
import { Palette as Hn, Minus as Bn, Plus as jn, ChevronDown as Kn, AlignLeft as Rn, AlignCenter as Un, AlignRight as Vn, List as Gn, ListOrdered as qn, Bold as Qn, Italic as Zn, Underline as Jn } from "lucide-react";
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
  const s = Ut(t, e, n), c = Ut(t, e, o), f = Ut(n, o, t), g = Ut(n, o, e);
  return Math.abs(s) < 1e-6 && Rt(t, n, e) || Math.abs(c) < 1e-6 && Rt(t, o, e) || Math.abs(f) < 1e-6 && Rt(n, t, o) || Math.abs(g) < 1e-6 && Rt(n, e, o) ? !0 : s > 0 != c > 0 && f > 0 != g > 0;
}
function eo(t, e, n) {
  const o = Math.min(t.x, e.x), r = Math.max(t.x, e.x), s = Math.min(t.y, e.y), c = Math.max(t.y, e.y);
  if (r < n.minX || o > n.maxX || c < n.minY || s > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const f = { x: n.minX, y: n.minY }, g = { x: n.maxX, y: n.minY }, z = { x: n.maxX, y: n.maxY }, d = { x: n.minX, y: n.maxY };
  return Vt(t, e, f, g) || Vt(t, e, g, z) || Vt(t, e, z, d) || Vt(t, e, d, f);
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
      const f = (n - o) / c;
      return { x: t[s - 1].x + (t[s].x - t[s - 1].x) * f, y: t[s - 1].y + (t[s].y - t[s - 1].y) * f };
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
  const r = /* @__PURE__ */ new Set([t, e]), s = Math.min(t, e), c = Math.max(t, e), f = je * 1.2;
  for (const g of n) {
    const z = (o === "x" ? g.minX : g.minY) - f, d = (o === "x" ? g.maxX : g.maxY) + f, h = (i) => i >= s - f * 4 && i <= c + f * 4;
    h(z) && r.add(z), h(d) && r.add(d);
  }
  return [...r].sort((g, z) => Math.abs(g - t) - Math.abs(z - t));
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
    const f = Wt(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: f }, { x: e.x, y: f }, e];
  }
  if (n === "zigzag") {
    if (o) {
      const z = Wt(t.x, e.x, t.side, "x"), d = Wt(t.y, e.y, t.side, "y");
      return r ? [t, { x: z, y: t.y }, { x: z, y: d }, { x: s, y: d }, { x: s, y: e.y }, e] : [t, { x: z, y: t.y }, { x: z, y: d }, { x: e.x, y: d }, e];
    }
    const f = Wt(t.y, e.y, t.side, "y"), g = Wt(t.x, e.x, t.side, "x");
    return r ? [t, { x: t.x, y: f }, { x: g, y: f }, { x: g, y: e.y }, e] : [t, { x: t.x, y: f }, { x: g, y: f }, { x: g, y: c }, { x: e.x, y: c }, e];
  }
  return [];
}
function Ue(t, e, n = [], o = "elbow", r = []) {
  if (r.length > 0) return oo(t, e, r);
  const s = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), c = e.side ?? (s === "e" || s === "w" ? "w" : "n"), f = s === "e" || s === "w", g = c === "e" || c === "w", z = Xe(t.x, e.x, n, "x"), d = Xe(t.y, e.y, n, "y"), h = [];
  if (f && g) {
    for (const x of z) h.push([t, { x, y: t.y }, { x, y: e.y }, e]);
    for (const x of d) h.push([t, { x: t.x, y: x }, { x: e.x, y: x }, e]);
  } else if (!f && !g) {
    for (const x of d) h.push([t, { x: t.x, y: x }, { x: e.x, y: x }, e]);
    for (const x of z) h.push([t, { x, y: t.y }, { x, y: e.y }, e]);
  } else if (f) {
    h.push([t, { x: e.x, y: t.y }, e]);
    for (const x of d)
      h.push([t, { x: t.x, y: x }, { x: e.x, y: x }, e]), h.push([t, { x: t.x, y: x }, e]);
    for (const x of z) h.push([t, { x, y: t.y }, { x, y: e.y }, e]);
  } else {
    h.push([t, { x: t.x, y: e.y }, e]);
    for (const x of d)
      h.push([t, { x: t.x, y: x }, e]), h.push([t, { x: t.x, y: x }, { x: e.x, y: x }, e]);
    for (const x of z) h.push([t, { x, y: t.y }, { x, y: e.y }, e]);
  }
  const i = ae(h, n);
  if (o === "elbow") return i;
  if (o === "reverse") {
    const x = Se(i), S = ae(h.filter((l) => Se(l) !== x), n);
    return S.length > 1 ? S : i;
  }
  const a = io(t, e, o, f, g), v = ae([a], n);
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
function Qe(t) {
  return so(t, uo(t));
}
function xo(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function pe(t, e, n) {
  let o = Math.sin(n), r = Math.cos(n), s = t[0] - e[0], c = t[1] - e[1], f = s * r - c * o, g = s * o + c * r;
  return [f + e[0], g + e[1]];
}
function Ee(t, e, n, o) {
  let r = Math.sin(o), s = Math.cos(o), c = e[0] - n[0], f = e[1] - n[1], g = c * s - f * r, z = c * r + f * s;
  return t[0] = g + n[0], t[1] = z + n[1], t;
}
function Fe(t, e, n) {
  return Mt(t, It(Pt(e, t), n));
}
function ho(t, e, n, o) {
  let r = n[0] - e[0], s = n[1] - e[1];
  return t[0] = e[0] + r * o, t[1] = e[1] + s * o, t;
}
function Ze(t, e, n) {
  return Mt(t, It(e, n));
}
const rt = [0, 0], St = [0, 0], Yt = [0, 0];
function fo(t, e) {
  let n = Ze(t, Qe(qe(Pt(t, Mt(t, [1, 1])))), -e), o = [], r = 1 / 13;
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
  let r = [], s = Ze(t, e, n), c = 1 / o;
  for (let f = c; f < 1; f += c) r.push(pe(s, t, jt * 3 * f));
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
  let { size: n = 16, smoothing: o = 0.5, thinning: r = 0.5, simulatePressure: s = !0, easing: c = (C) => C, start: f = {}, end: g = {}, last: z = !1 } = e, { cap: d = !0, easing: h = (C) => C * (2 - C) } = f, { cap: i = !0, easing: a = (C) => --C * C * C + 1 } = g;
  if (t.length === 0 || n <= 0) return [];
  let v = t[t.length - 1].runningLength, x = Te(f.taper, n, v), S = Te(g.taper, n, v), l = (n * o) ** 2, X = [], p = [], M = go(t, s, n), k = Ne(n, r, t[t.length - 1].pressure, c), w, u = t[0].vector, y = t[0].point, m = y, b = y, $ = m, I = !1;
  for (let C = 0; C < t.length; C++) {
    let { pressure: T } = t[C], { point: E, vector: W, distance: O, runningLength: K } = t[C], V = C === t.length - 1;
    if (!V && v - K < 3) continue;
    r ? (s && (T = Ge(M, O, n)), k = Ne(n, r, T, c)) : k = n / 2, w === void 0 && (w = k);
    let G = K < x ? h(K / x) : 1, B = v - K < S ? a((v - K) / S) : 1;
    k = Math.max(0.01, k * Math.min(G, B));
    let q = (V ? t[C] : t[C + 1]).vector, Q = V ? 1 : Pe(W, q), ot = Pe(W, u) < 0 && !I, J = Q !== null && Q < 0;
    if (ot || J) {
      le(rt, u), se(rt, rt, k);
      for (let tt = 0; tt <= 1; tt += 0.07692307692307693) he(St, E, rt), Ee(St, St, E, jt * tt), b = [St[0], St[1]], X.push(b), Ie(Yt, E, rt), Ee(Yt, Yt, E, jt * -tt), $ = [Yt[0], Yt[1]], p.push($);
      y = b, m = $, J && (I = !0);
      continue;
    }
    if (I = !1, V) {
      le(rt, W), se(rt, rt, k), X.push(Pt(E, rt)), p.push(Mt(E, rt));
      continue;
    }
    ho(rt, q, W, Q), le(rt, rt), se(rt, rt, k), he(St, E, rt), b = [St[0], St[1]], (C <= 1 || Le(y, b) > l) && (X.push(b), y = b), Ie(Yt, E, rt), $ = [Yt[0], Yt[1]], (C <= 1 || Le(m, $) > l) && (p.push($), m = $), M = T, u = W;
  }
  let N = [t[0].point[0], t[0].point[1]], L = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : Mt(t[0].point, [1, 1]), F = [], A = [];
  if (t.length === 1) {
    if (!(x || S) || z) return fo(N, w || k);
  } else {
    x || S && t.length === 1 || (d ? F.push(...mo(N, p[0], 13)) : F.push(...vo(N, X[0], p[0])));
    let C = qe(co(t[t.length - 1].vector));
    S || x && t.length === 1 ? A.push(L) : i ? A.push(...po(L, C, k, 29)) : A.push(...yo(L, C, k));
  }
  return X.concat(A, p.reverse(), F);
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
  let f = [{ point: [c[0][0], c[0][1]], pressure: De(c[0][2]) ? c[0][2] : 0.25, vector: [...Ce], distance: 0, runningLength: 0 }], g = !1, z = 0, d = f[0], h = c.length - 1;
  for (let a = 1; a < c.length; a++) {
    let v = r && a === h ? [c[a][0], c[a][1]] : Fe(d.point, c[a], s);
    if (lo(d.point, v)) continue;
    let x = xo(v, d.point);
    if (z += x, a < h && !g) {
      if (z < o) continue;
      g = !0;
    }
    he(Ae, d.point, v), d = { point: v, pressure: De(c[a][2]) ? c[a][2] : Ye, vector: Qe(Ae), distance: x, runningLength: z }, f.push(d);
  }
  return f[0].vector = ((i = f[1]) == null ? void 0 : i.vector) || [0, 0], f;
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
  return t.color ? mt[t.color].bg : mt.blue.bg;
}
function Je(t) {
  return t.color ? mt[t.color].border : "#2563eb";
}
function Tt(t) {
  if (t.textColor)
    try {
      return Be(t.textColor);
    } catch {
    }
  return t.color ? mt[t.color].text : "#0f172a";
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
      const o = e / 2, r = n / 2, s = Math.min(e, n) / 2, c = s * 0.4, f = [];
      for (let g = 0; g < 10; g++) {
        const z = Math.PI / 5 * g - Math.PI / 2, d = g % 2 === 0 ? s : c;
        f.push(`${o + d * Math.cos(z)},${r + d * Math.sin(z)}`);
      }
      return f.join(" ");
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
    const [r, s] = t[o], [c, f] = t[o + 1];
    e += ` Q ${r} ${s} ${(r + c) / 2} ${(s + f) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function nn(t, e, n) {
  if (t.length === 0) return "";
  const o = n === "highlighter" ? { size: e * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: e, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 }, r = ko(t, o);
  return r.length === 0 ? "" : r.reduce(
    (s, [c, f], g) => s + (g === 0 ? `M ${c} ${f}` : ` L ${c} ${f}`),
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
        const d = c.textContent ?? "";
        d && n[n.length - 1].push({ text: d, ...s });
        return;
      }
      if (c.nodeType !== Node.ELEMENT_NODE) return;
      const f = c;
      if (f.tagName === "BR") {
        n.push([]);
        return;
      }
      const g = { bold: s.bold || f.tagName === "B" || f.tagName === "STRONG", italic: s.italic || f.tagName === "I" || f.tagName === "EM", underline: s.underline || f.tagName === "U" }, z = f.tagName === "DIV" || f.tagName === "P" || f.tagName === "LI";
      z && n[n.length - 1].length > 0 && n.push([]), o(f, g), z && n.push([]);
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
  ].map(([z, d]) => {
    const h = z - o.x, i = d - o.y;
    return [o.x + h * r - i * s, o.y + h * s + i * r];
  }), f = c.map((z) => z[0]), g = c.map((z) => z[1]);
  return { minX: Math.min(...f), minY: Math.min(...g), maxX: Math.max(...f), maxY: Math.max(...g) };
}
function an(t, e, n) {
  const o = t.rotation ?? 0;
  if (!o) return { x: e, y: n };
  const r = wt(t), s = Math.cos(-o), c = Math.sin(-o), f = e - r.x, g = n - r.y;
  return { x: r.x + f * s - g * c, y: r.y + f * c + g * s };
}
function qt(t, e, n, o, r, s) {
  const c = r - n, f = s - o, g = c * c + f * f, z = g === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * c + (e - o) * f) / g));
  return Math.hypot(t - (n + z * c), e - (o + z * f));
}
function te(t, e, n, o, r, s) {
  const c = 8 / o;
  if (t.type === "arrow") {
    const z = (t.strokeWidth ?? 2.5) / o / 2 + c, d = kt(t, r ?? /* @__PURE__ */ new Map(), s);
    if (d.routing === "orthogonal" && d.pathPoints && d.pathPoints.length > 1) {
      for (let i = 1; i < d.pathPoints.length; i++) {
        const a = d.pathPoints[i - 1], v = d.pathPoints[i];
        if (qt(e, n, a.x, a.y, v.x, v.y) <= z) return !0;
      }
      return !1;
    }
    if (d.bend === 0) return qt(e, n, d.start.x, d.start.y, d.end.x, d.end.y) <= z;
    let h = d.start;
    for (let i = 1; i <= 16; i++) {
      const a = Kt(i / 16, d.start, d.control, d.end);
      if (qt(e, n, h.x, h.y, a.x, a.y) <= z) return !0;
      h = a;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const z = (t.strokeWidth ?? 3) / o / 2 + c;
    for (let d = 1; d < t.points.length; d++) {
      const [h, i] = t.points[d - 1], [a, v] = t.points[d];
      if (qt(e, n, h, i, a, v) <= z) return !0;
    }
    return !1;
  }
  const f = an(t, e, n), g = Lt(t);
  if (t.type === "frame") {
    const z = f.x >= g.minX - c && f.x <= g.maxX + c && f.y >= g.minY - c && f.y <= g.maxY + c && (f.x <= g.minX + c || f.x >= g.maxX - c || f.y <= g.minY + c || f.y >= g.maxY - c), d = f.x >= g.minX - c && f.x <= g.maxX + c && f.y >= g.minY - 28 / o && f.y <= g.minY;
    return z || d;
  }
  return f.x >= g.minX - c && f.x <= g.maxX + c && f.y >= g.minY - c && f.y <= g.maxY + c;
}
function At(t, e, n) {
  const o = Lt(t), r = (o.minX + o.maxX) / 2, s = (o.minY + o.maxY) / 2, c = e - r, f = n - s;
  if (c === 0 && f === 0) return { x: r, y: s, side: "e" };
  const g = (o.maxX - o.minX) / 2, z = (o.maxY - o.minY) / 2, d = g === 0 ? 1 / 0 : Math.abs(g / c), h = z === 0 ? 1 / 0 : Math.abs(z / f);
  return d <= h ? { x: r + c * d, y: s + f * d, side: c >= 0 ? "e" : "w" } : { x: r + c * h, y: s + f * h, side: f >= 0 ? "s" : "n" };
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
  const f = (s.x + c.x) / 2, g = (s.y + c.y) / 2, z = t.bend ?? 0;
  let d = { x: f, y: g };
  if (z !== 0) {
    const v = c.x - s.x, x = c.y - s.y, S = Math.hypot(v, x) || 1;
    d = { x: f + -x / S * z, y: g + v / S * z };
  }
  const h = !!(o || r), i = t.routing ?? (h ? "orthogonal" : z !== 0 ? "curved" : "straight");
  if (i !== "orthogonal") return { start: s, end: c, control: d, bend: z, routing: i };
  const a = cn(n, t, o == null ? void 0 : o.id, r == null ? void 0 : r.id);
  return {
    start: s,
    end: c,
    control: d,
    bend: z,
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
  for (const f of t) {
    if (f.type !== "draw" || !f.points) {
      if (te(f, e, n, r)) continue;
      s.push(f);
      continue;
    }
    const g = [];
    let z = [];
    for (const [h, i] of f.points)
      Math.hypot(h - e, i - n) <= o / r ? (z.length > 1 && g.push(z), z = []) : z.push([h, i]);
    if (z.length > 1 && g.push(z), g.length === 0) continue;
    const d = Lt(f);
    g.forEach((h) => s.push({ ...f, id: `${f.id}-e${c++}`, points: h, x: d.minX, y: d.minY, w: d.maxX - d.minX, h: d.maxY - d.minY }));
  }
  return s;
}
function Mo(t, e, n) {
  const o = 6 / n;
  let r = null, s = null;
  const c = [], f = [t.minX, (t.minX + t.maxX) / 2, t.maxX], g = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const z of e) {
    const d = at(z), h = [d.minX, (d.minX + d.maxX) / 2, d.maxX], i = [d.minY, (d.minY + d.maxY) / 2, d.maxY];
    for (const a of f) for (const v of h) {
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
  guides: f,
  marquee: g,
  strokeColorOf: z
}) {
  return /* @__PURE__ */ P("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ R("g", { transform: `scale(${r.z}) translate(${-r.x}, ${-r.y})`, children: [
    t.map((d) => {
      if (d.type === "draw" && d.points) {
        const b = d.drawMode ?? "pen", $ = d.strokeWidth ?? 3, I = e.has(d.id) ? H.blue : z(d), N = d.points.length >= 2 ? nn(d.points, $, b) : "";
        return /* @__PURE__ */ P(
          "path",
          {
            "data-canvas-vector-shape-id": d.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": b,
            "data-canvas-stroke-width": $,
            d: N || en(d.points),
            fill: N ? I : "none",
            stroke: N ? "none" : I,
            strokeWidth: $ / r.z,
            strokeOpacity: b === "highlighter" ? 0.35 : void 0,
            fillOpacity: b === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          d.id
        );
      }
      if (d.type !== "arrow") return null;
      const h = e.has(d.id) ? H.blue : z(d), i = kt(d, n, o), a = d.strokeWidth ?? 2.5, v = a / r.z, x = Math.max(10, 8 + a * 2), S = Math.max(4, 2 + a), l = x / r.z, X = S / r.z, p = i.routing === "orthogonal" && i.pathPoints ? i.pathPoints : null, M = p && p.length > 1;
      let k, w;
      if (M)
        k = ue(p), w = Ve(p);
      else if (i.routing === "curved") {
        k = `M ${i.start.x} ${i.start.y} Q ${i.control.x} ${i.control.y} ${i.end.x} ${i.end.y}`;
        const b = Kt(0.94, i.start, i.control, i.end);
        w = Math.atan2(i.end.y - b.y, i.end.x - b.x);
      } else
        k = `M ${i.start.x} ${i.start.y} L ${i.end.x} ${i.end.y}`, w = Math.atan2(i.end.y - i.start.y, i.end.x - i.start.x);
      const u = M && p.length >= 2 ? Bt(p[0], p[1]) : i.routing === "orthogonal" && i.start.side ? i.start.side === "e" ? 0 : i.start.side === "w" ? Math.PI : i.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Bt(i.start, i.end), y = d.strokeStyle === "dashed" ? `${8 / r.z} ${5 / r.z}` : d.strokeStyle === "dotted" ? `${1.5 / r.z} ${4 / r.z}` : void 0, m = (b, $, I, N) => b === "dot" ? /* @__PURE__ */ P("circle", { "data-canvas-arrow-dot-radius": S, cx: $, cy: I, r: X, fill: h }) : b === "none" ? null : /* @__PURE__ */ P(
        "polygon",
        {
          "data-canvas-arrowhead-size": x,
          points: `${$},${I} ${$ - l * Math.cos(N - 0.4)},${I - l * Math.sin(N - 0.4)} ${$ - l * Math.cos(N + 0.4)},${I - l * Math.sin(N + 0.4)}`,
          fill: h
        }
      );
      return /* @__PURE__ */ R("g", { "data-canvas-vector-shape-id": d.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": i.routing, "data-canvas-stroke-width": a, children: [
        /* @__PURE__ */ P("path", { d: k, fill: "none", stroke: h, strokeWidth: v, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: y }),
        m(d.arrowEnd ?? "arrow", i.end.x, i.end.y, w),
        m(d.arrowStart ?? "none", i.start.x, i.start.y, u + Math.PI)
      ] }, d.id);
    }),
    s.kind === "connect" && s.fromId !== void 0 && s.toX !== void 0 && s.toY !== void 0 && (() => {
      const d = n.get(s.fromId);
      if (!d) return null;
      const h = At(d, s.toX, s.toY), i = s.hoverId ? n.get(s.hoverId) : null, a = i ? At(i, h.x, h.y) : { x: s.toX, y: s.toY }, v = i ? Ue(h, a, cn(o, { id: "__preview" }, d.id, i.id)) : [h, a];
      return /* @__PURE__ */ R("g", { children: [
        /* @__PURE__ */ P("path", { d: ue(v), stroke: H.blue, strokeWidth: 2 / r.z, strokeDasharray: `${5 / r.z} ${4 / r.z}` }),
        i ? /* @__PURE__ */ P("rect", { x: at(i).minX - 3 / r.z, y: at(i).minY - 3 / r.z, width: at(i).maxX - at(i).minX + 6 / r.z, height: at(i).maxY - at(i).minY + 6 / r.z, fill: "none", stroke: H.blue, strokeWidth: 2 / r.z, rx: 6 / r.z }) : /* @__PURE__ */ P("circle", { cx: a.x, cy: a.y, r: 5 / r.z, fill: H.blue })
      ] });
    })(),
    c && /* @__PURE__ */ P("circle", { cx: c.x, cy: c.y, r: zo / r.z, fill: H.roseSoft, stroke: H.rose, strokeWidth: 1 / r.z }),
    f.map((d, h) => /* @__PURE__ */ P("line", { x1: d.x1, y1: d.y1, x2: d.x2, y2: d.y2, stroke: H.pink, strokeWidth: 1 / r.z, strokeDasharray: `${4 / r.z} ${4 / r.z}` }, `guide-${h}`)),
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
const Qt = Array.from(/* @__PURE__ */ new Set([
  ...Co,
  ...Ht(bt.sans.stack),
  ...Ht(bt.serif.stack),
  ...Ht(bt.mono.stack),
  ...Ht(bt.gothic.stack),
  ...Ht(bt.korean.stack)
]));
function Io() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Qt;
  const t = Qt.filter((e) => {
    const n = dn(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : Qt;
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
function ut(t) {
  return t.fontSize ?? Po[t.type] ?? 14;
}
function xt(t) {
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
    fontSize: `${ut(e)}px`,
    fontFamily: xt(e)
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
  isDarkMode: f,
  renderEditor: g,
  renderShapeBody: z,
  setEditingId: d,
  onBendHandleDown: h,
  onOrthogonalSegmentHandleDown: i,
  onResizeHandleDown: a,
  onRotateHandleDown: v,
  onConnectHandleDown: x,
  onArrowEndpointDown: S
}) {
  return /* @__PURE__ */ R(Ft, { children: [
    /* @__PURE__ */ P("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((l) => {
      if (l.type === "draw") return null;
      if (l.type === "arrow") {
        const M = kt(l, r, s), k = M.routing === "orthogonal" && M.pathPoints ? ve(M.pathPoints) : M.routing === "curved" ? Kt(0.5, M.start, M.control, M.end) : { x: (M.start.x + M.end.x) / 2, y: (M.start.y + M.end.y) / 2 }, w = n === l.id, u = ee(l), y = e.has(l.id), m = ne(l).trim(), b = u || (y ? "관계 입력" : "");
        return !b && !w ? null : /* @__PURE__ */ P(de.Fragment, { children: /* @__PURE__ */ P("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: k.x - 90, top: k.y - 18, width: 180, height: 36 }, onDoubleClick: ($) => {
          $.stopPropagation(), d(l.id);
        }, children: (b || w) && /* @__PURE__ */ P(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": m ? `관계 설명: ${m}` : "관계 설명 입력",
            title: w ? void 0 : m ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${f ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: ut(l),
              fontFamily: xt(l),
              maxWidth: "100%",
              minWidth: w ? 120 / o.z : void 0,
              minHeight: w ? 28 / o.z : void 0,
              color: l.textColor
            },
            children: w ? g("text-center whitespace-nowrap") : /* @__PURE__ */ P("span", { dangerouslySetInnerHTML: { __html: b } }, "canvas-view")
          }
        ) }) }, l.id);
      }
      const X = e.has(l.id), p = Lt(l);
      return /* @__PURE__ */ R(
        "div",
        {
          "data-canvas-shape-id": l.id,
          "data-canvas-shape-type": l.type,
          "data-canvas-selected": X ? "true" : void 0,
          "data-canvas-text-align": vt(l),
          "data-canvas-text-color": l.textColor,
          "data-canvas-font-size": ut(l),
          "data-canvas-font-family": l.fontFamily === "custom" ? l.customFontFamily ?? "custom" : l.fontFamily ?? "sans",
          "data-canvas-manual-size": l.manualSize ? "true" : void 0,
          "data-canvas-group-id": l.groupId,
          "data-canvas-list-kind": To(l),
          "data-canvas-x": l.x,
          "data-canvas-y": l.y,
          "data-canvas-width": l.w,
          "data-canvas-height": l.h,
          className: "absolute",
          style: { left: p.minX, top: p.minY, width: p.maxX - p.minX, height: p.maxY - p.minY, transform: l.rotation ? `rotate(${l.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (M) => {
            M.stopPropagation(), Wo.has(l.type) && d(l.id);
          },
          children: [
            z(l),
            X && /* @__PURE__ */ R(Ft, { children: [
              /* @__PURE__ */ P("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${H.blue}` } }),
              e.size === 1 && /* @__PURE__ */ R(Ft, { children: [
                ["nw", "ne", "sw", "se"].map((M) => /* @__PURE__ */ P("div", { "data-canvas-resize-handle": M, onPointerDown: (k) => a(k, l, M), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${M}-resize`, left: M.includes("w") ? -5 / o.z : void 0, right: M.includes("e") ? -5 / o.z : void 0, top: M.includes("n") ? -5 / o.z : void 0, bottom: M.includes("s") ? -5 / o.z : void 0 } }, M)),
                /* @__PURE__ */ P("div", { onPointerDown: (M) => v(M, l), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                Oo.has(l.type) && ["n", "s", "w", "e"].map((M) => /* @__PURE__ */ P("div", { onPointerDown: (k) => x(k, l), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...M === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : M === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : M === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${M}`))
              ] })
            ] })
          ]
        },
        l.id
      );
    }) }),
    e.size === 1 && s.filter((l) => l.type === "arrow" && e.has(l.id)).map((l) => {
      const X = kt(l, r, s), p = (M, k) => ({
        left: (M.x - o.x) * o.z - k / 2,
        top: (M.y - o.y) * o.z - k / 2
      });
      return /* @__PURE__ */ R(de.Fragment, { children: [
        X.routing === "orthogonal" && X.pathPoints && X.pathPoints.length > 2 ? X.pathPoints.slice(0, -1).map((M, k) => {
          var y;
          const w = (y = X.pathPoints) == null ? void 0 : y[k + 1];
          if (!w) return null;
          const u = { x: (M.x + w.x) / 2, y: (M.y + w.y) / 2 };
          return /* @__PURE__ */ P("div", { "data-canvas-arrow-segment-handle": k, onPointerDown: (m) => i(m, l, k), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...p(u, 12), cursor: M.x === w.x ? "ew-resize" : "ns-resize" } }, `segment-${k}`);
        }) : X.routing === "curved" && /* @__PURE__ */ P("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (M) => h(M, l), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (X.start.x + X.end.x) / 2 * o.z - o.x * o.z - 5, top: (X.start.y + X.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map((M) => {
          const k = M === "start" ? X.start : X.end;
          return /* @__PURE__ */ P("div", { "data-canvas-arrow-endpoint": M, onPointerDown: (w) => S(w, l, M), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...p(k, 12), cursor: "grab" } }, M);
        })
      ] }, `arrow-handles-${l.id}`);
    }),
    c == null ? void 0 : c.map((l) => /* @__PURE__ */ R("div", { className: "absolute pointer-events-none z-40", style: { left: (l.x - o.x) * o.z, top: (l.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
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
  installedFontFamilies: f,
  setShowPalette: g,
  setActiveColor: z,
  patchSelected: d,
  applyFormat: h,
  applyList: i,
  applyCustomFontFamily: a
}) {
  var ht, dt;
  const v = r ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", x = t.type === "draw", S = x ? t.color ? mt[t.color].border : H.ink : Tt(t), l = nt(null), [X, p] = st({ width: 380, height: 260 });
  Zt(() => {
    const Y = l.current;
    if (!Y) return;
    const _ = () => {
      const ct = Math.max(1, Math.ceil(Y.getBoundingClientRect().width)), pt = Math.max(1, Math.ceil(Y.getBoundingClientRect().height));
      p((Et) => Et.width === ct && Et.height === pt ? Et : { width: ct, height: pt });
    };
    if (_(), typeof ResizeObserver > "u") return;
    const Z = new ResizeObserver(_);
    return Z.observe(Y), () => Z.disconnect();
  }, [s, f.length, r, t, c]);
  const M = X.width, k = X.height, w = at(t), u = (w.minX - n.x) * n.z, y = (w.minY - n.y) * n.z, m = (w.maxX - n.x) * n.z, b = (w.maxY - n.y) * n.z, $ = Math.max(8, o.width - M - 8), I = Math.max(8, o.height - k - 8), N = (Y, _) => ({ left: Math.min(Math.max(8, Y), $), top: Math.min(Math.max(8, _), I) }), L = [
    N((u + m) / 2 - M / 2, y - k - 12),
    N((u + m) / 2 - M / 2, b + 12),
    N((o.width - M) / 2, 12),
    N(u - M - 12, y + (b - y - k) / 2),
    N(m + 12, y + (b - y - k) / 2)
  ], F = e.map((Y) => {
    const _ = at(Y);
    return { left: (_.minX - n.x) * n.z, top: (_.minY - n.y) * n.z, right: (_.maxX - n.x) * n.z, bottom: (_.maxY - n.y) * n.z };
  });
  if (t.type === "arrow") {
    const Y = kt(t, new Map(e.map((pt) => [pt.id, pt])), e), _ = Y.routing === "orthogonal" && Y.pathPoints ? ve(Y.pathPoints) : { x: (Y.start.x + Y.end.x) / 2, y: (Y.start.y + Y.end.y) / 2 }, Z = 180 * n.z, ct = 36 * n.z;
    F.push({
      left: (_.x - n.x) * n.z - Z / 2,
      top: (_.y - n.y) * n.z - ct / 2,
      right: (_.x - n.x) * n.z + Z / 2,
      bottom: (_.y - n.y) * n.z + ct / 2
    });
  }
  const A = L[0], C = (Y, _) => {
    const Z = Math.max(0, Math.min(Y.left + M, _.right) - Math.max(Y.left, _.left)), ct = Math.max(0, Math.min(Y.top + k, _.bottom) - Math.max(Y.top, _.top));
    return Z * ct;
  }, T = ((ht = L.map((Y) => ({
    candidate: Y,
    overlap: F.reduce((_, Z) => _ + C(Y, Z), 0),
    distance: Math.hypot(Y.left - A.left, Y.top - A.top)
  })).sort((Y, _) => Y.overlap - _.overlap || Y.distance - _.distance)[0]) == null ? void 0 : ht.candidate) ?? A, E = ut(t), W = Ko(t), O = jo(t), K = Ho(t), V = t.type === "arrow" ? "arrow" : K[0] ?? "color", [G, B] = st(V);
  Zt(() => {
    K.includes(G) || B(V);
  }, [V, K, G]);
  const q = t.type === "arrow" && !!((dt = t.orthogonalWaypoints) != null && dt.length), Q = t.type === "arrow" ? t.arrowStart ?? "none" : "none", ot = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", J = (Y, _, Z, ct, pt = ct) => /* @__PURE__ */ P("button", { type: "button", title: ct, "aria-label": pt, onClick: Z, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${_ ? "bg-blue-600 text-white" : v}`, children: Y }), tt = (Y) => /* @__PURE__ */ P("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: Y }), it = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ R("div", { ref: l, "data-canvas-inspector": x ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${r ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: T.left, top: T.top }, onPointerDown: (Y) => {
    Y.stopPropagation();
    const _ = Y.target instanceof Element ? Y.target : null;
    _ != null && _.closest("input, select, textarea") || Y.preventDefault();
  }, onClick: (Y) => Y.stopPropagation(), children: [
    /* @__PURE__ */ P("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: K.map((Y) => /* @__PURE__ */ P("button", { type: "button", role: "tab", "aria-selected": G === Y, onClick: () => B(Y), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${G === Y ? "bg-blue-600 text-white" : v}`, children: it[Y] }, Y)) }),
    /* @__PURE__ */ R("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: G === "color" || x ? void 0 : "none" }, children: [
      /* @__PURE__ */ P("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: x ? "그리기" : "색상" }),
      /* @__PURE__ */ P("button", { type: "button", title: x ? "그리기 색상 팔레트" : "색상 팔레트", "aria-label": x ? "그리기 색상" : "도형 색상", onClick: () => g((Y) => !Y), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${r ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ P(Hn, { className: "w-4 h-4", style: { color: S } }) }),
      c && /* @__PURE__ */ R("div", { className: `pointer-events-auto absolute left-0 top-10 z-50 flex items-center gap-1.5 p-2 rounded-xl border shadow-xl ${r ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        Dn.map((Y) => /* @__PURE__ */ P("button", { type: "button", title: mt[Y].label, "aria-label": `색 ${mt[Y].label}`, onClick: () => {
          z(Y), d({ color: Y, fillColor: void 0 }), g(!1);
        }, className: "w-5 h-5 rounded-full border", style: { background: mt[Y].bg, borderColor: mt[Y].border, outline: t.color === Y && !t.fillColor ? `2px solid ${H.blue}` : void 0, outlineOffset: 1 } }, Y)),
        !x && /* @__PURE__ */ P("label", { title: "배경 색 (자유 선택)", className: "w-5 h-5 rounded-full border relative overflow-hidden cursor-pointer flex items-center justify-center", style: { background: t.fillColor ?? Jt(t), outline: t.fillColor ? `2px solid ${H.blue}` : void 0, outlineOffset: 1 }, children: /* @__PURE__ */ P("input", { type: "color", value: t.fillColor ?? Jt(t), onChange: (Y) => {
          d({ fillColor: Y.target.value }), g(!1);
        }, className: "absolute inset-0 opacity-0 cursor-pointer" }) })
      ] })
    ] }),
    G !== "color" && !x && /* @__PURE__ */ R(Ft, { children: [
      /* @__PURE__ */ R("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ P("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ R("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: Tt(t), color: H.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ P("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ P("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? Tt(t), onChange: (Y) => d({ textColor: Y.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ R("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${r ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ P("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ P("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => d({ fontSize: Math.max(8, E - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ P(Bn, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ P("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: E }),
          /* @__PURE__ */ P("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => d({ fontSize: Math.min(96, E + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ P(jn, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ R("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${r ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ P("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (Y) => {
            const _ = Fo(Y.target.value);
            d(_ === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: _, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${r ? "text-slate-200" : "text-slate-700"}`, children: So.map((Y) => /* @__PURE__ */ P("option", { value: Y, className: r ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: bt[Y].label }, Y)) }),
          /* @__PURE__ */ P(Kn, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ R(Ft, { children: [
          /* @__PURE__ */ P("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (Y) => a(Y.target.value), onChange: (Y) => Y.currentTarget.value && a(Y.currentTarget.value), onKeyDown: (Y) => {
            Y.key === "Enter" && (Y.preventDefault(), a(Y.currentTarget.value));
          }, onDoubleClick: (Y) => Y.stopPropagation(), onPointerDown: (Y) => Y.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${r ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ P("datalist", { id: `canvas-font-families-${t.id}`, children: f.map((Y) => /* @__PURE__ */ P("option", { value: Y }, Y)) })
        ] })
      ] }),
      /* @__PURE__ */ R("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${r ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ P("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ P("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", Rn, "왼쪽 정렬"], ["center", Un, "가운데 정렬"], ["right", Vn, "오른쪽 정렬"]].map(([Y, _, Z]) => /* @__PURE__ */ P("button", { type: "button", "aria-label": Z, title: Z, onClick: () => d({ textAlign: Y }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${vt(t) === Y ? "bg-blue-600 text-white shadow-sm" : v}`, children: /* @__PURE__ */ P(_, { className: "w-4 h-4" }) }, Y)) }),
        s && /* @__PURE__ */ R(Ft, { children: [
          /* @__PURE__ */ P("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ P("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", Gn, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", qn, "번호 목록"]].map(([Y, _, Z]) => /* @__PURE__ */ P("button", { type: "button", onClick: () => i(Y), "aria-label": Z, title: Z, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: _ ? /* @__PURE__ */ P(_, { className: "w-4 h-4" }) : /* @__PURE__ */ P("span", { className: "text-base leading-none", children: "–" }) }, Y)) }),
          /* @__PURE__ */ P("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: Qn, label: "굵게" }, { cmd: "italic", Icon: Zn, label: "기울임" }, { cmd: "underline", Icon: Jn, label: "밑줄" }].map(({ cmd: Y, Icon: _, label: Z }) => /* @__PURE__ */ P("button", { type: "button", onClick: () => h(Y), "aria-label": Z, title: Z, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ P(_, { className: "w-4 h-4" }) }, Y)) })
        ] })
      ] }),
      (G === "arrange" && t.type === "card" || G === "arrow" && t.type === "arrow") && /* @__PURE__ */ R("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${r ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ R(Ft, { children: [
          /* @__PURE__ */ P("div", { className: `w-px h-6 ${r ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ P("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (Y) => Y.stopPropagation(), onChange: (Y) => d({ category: Y.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${r ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ R("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ R("div", { className: "flex items-center gap-1", children: [
            tt("경로"),
            J("직선", (t.routing ?? "straight") === "straight", () => d({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            J("직각", t.routing === "orthogonal", () => d({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            J("곡선", (t.routing ?? "") === "curved", () => d({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            q && J("자동", !1, () => d({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ R("div", { className: "flex items-center gap-1", children: [
            tt("선"),
            J("—", (t.strokeStyle ?? "solid") === "solid", () => d({ strokeStyle: "solid" }), "실선"),
            J("- -", t.strokeStyle === "dashed", () => d({ strokeStyle: "dashed" }), "파선"),
            J("···", t.strokeStyle === "dotted", () => d({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ R("div", { className: "flex items-center gap-1", children: [
            tt("시작"),
            J(Q === "none" ? "○" : Q === "dot" ? "●" : "◀", Q !== "none", () => d({ arrowStart: Q === "none" ? "arrow" : Q === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${Q === "none" ? "없음" : Q === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ R("div", { className: "flex items-center gap-1", children: [
            tt("끝"),
            J(ot === "none" ? "○" : ot === "dot" ? "●" : "▶", ot !== "none", () => d({ arrowEnd: ot === "arrow" ? "dot" : ot === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${ot === "none" ? "없음" : ot === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      G === "diagram" && /* @__PURE__ */ P("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${r ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    O && /* @__PURE__ */ R("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-none ${r ? "border-slate-700" : "border-slate-100"}`, children: [
      tt("굵기"),
      Bo.map((Y) => /* @__PURE__ */ P(de.Fragment, { children: J(String(Y), W === Y, () => d({ strokeWidth: Y }), `굵기 ${Y}`) }, Y))
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
  onDirty: f,
  renderDiagram: g
}) {
  const z = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", d = (i, a) => /* @__PURE__ */ P(
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
      className: `${z} ${i}`,
      style: a
    },
    "canvas-editor"
  );
  return { renderEditor: d, renderShapeBody: (i) => {
    const a = mt[i.color ?? "blue"], v = e === i.id, x = ee(i);
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
              children: v ? d("", { fontSize: 13 / t.z }) : ne(i) || "프레임"
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
          children: v ? d("font-medium", { color: Tt(i), fontSize: ut(i), fontFamily: xt(i), textAlign: vt(i) }) : x ? /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Tt(i), fontSize: ut(i), fontFamily: xt(i), textAlign: vt(i) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view") : /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Tt(i), fontSize: ut(i), fontFamily: xt(i), textAlign: vt(i) }, children: /* @__PURE__ */ P("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (i.type === "card") {
      const w = i.cardStyle === "glass";
      return hn(i) && g && !v ? /* @__PURE__ */ P("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: g(i) }) : /* @__PURE__ */ R(
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
            /* @__PURE__ */ R(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (u) => u.stopPropagation(),
                onDoubleClick: (u) => u.stopPropagation(),
                onBlur: (u) => {
                  const m = (u.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  c((b) => b.map(($) => $.id === i.id ? { ...$, category: m } : $)), f();
                },
                onKeyDown: (u) => {
                  u.key === "Enter" && (u.preventDefault(), u.currentTarget.blur());
                },
                children: [
                  "[ ",
                  i.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            v ? d("flex-1 font-medium", { color: i.textColor ?? H.white, fontSize: ut(i), fontFamily: xt(i), textAlign: vt(i) }) : /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: i.textColor ?? H.white, fontSize: ut(i), fontFamily: xt(i), textAlign: vt(i) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view"),
            /* @__PURE__ */ R("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              i.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (i.type === "text") {
      const w = n ? "text-slate-100" : "text-slate-900", u = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${w}`,
        style: { color: i.textColor, fontSize: ut(i), fontFamily: xt(i), textAlign: vt(i) }
      };
      return v ? d(`font-medium ${w}`, u.style) : x ? /* @__PURE__ */ P(
        "div",
        {
          "data-canvas-text-view": !0,
          ...u,
          dangerouslySetInnerHTML: { __html: x }
        },
        "canvas-view"
      ) : /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, ...u, children: /* @__PURE__ */ P("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
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
    const S = Jt(i), l = Je(i), X = Tt(i);
    if (i.type === "triangle" || i.type === "diamond" || i.type === "hexagon" || i.type === "star") {
      const w = i.strokeWidth ?? 2;
      return /* @__PURE__ */ R("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ P("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${i.w} ${i.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ P("polygon", { "data-canvas-stroke-width": w, points: tn(i.type, i.w, i.h), fill: S, stroke: l, strokeWidth: w / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ P("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: X }, children: v ? d("font-medium", { color: X, fontSize: ut(i), fontFamily: xt(i), textAlign: vt(i) }) : /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: ut(i), fontFamily: xt(i), textAlign: vt(i) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view") })
      ] });
    }
    const M = fe(i.src), k = i.type === "rect" || i.type === "ellipse" ? i.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ P(
      "div",
      {
        "data-canvas-stroke-width": k,
        className: `w-full h-full flex items-center justify-center p-3 ${i.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: S, border: `${k / t.z}px solid ${l}`, color: X },
        children: v ? d("font-medium", { color: X, fontSize: ut(i), fontFamily: xt(i), textAlign: vt(i) }) : /* @__PURE__ */ R("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: ut(i), fontFamily: xt(i), textAlign: vt(i) }, children: [
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
  const [f, g] = st({ width: 0, height: 0 });
  $t(() => {
    const v = t.current;
    if (!v) return;
    let x = -1, S = -1;
    const l = (p = v.clientWidth, M = v.clientHeight) => {
      p === x && M === S || (x = p, S = M, g({ width: p, height: M }));
    };
    if (l(), typeof ResizeObserver < "u") {
      const p = new ResizeObserver((M) => {
        var w;
        const k = (w = M[0]) == null ? void 0 : w.contentRect;
        l((k == null ? void 0 : k.width) ?? v.clientWidth, (k == null ? void 0 : k.height) ?? v.clientHeight);
      });
      return p.observe(v), () => p.disconnect();
    }
    const X = () => l();
    return window.addEventListener("resize", X), () => window.removeEventListener("resize", X);
  }, [c, t]);
  const z = Nt(() => new Map(n.map((v) => [v.id, v])), [n]), d = Nt(
    () => [...n].sort((v, x) => (v.type === "frame" ? -1 : 0) - (x.type === "frame" ? -1 : 0)),
    [n]
  ), h = Nt(() => {
    if (!t.current || f.width <= 0 || f.height <= 0) return null;
    const v = 200 / o.z;
    return {
      minX: o.x - v,
      minY: o.y - v,
      maxX: o.x + f.width / o.z + v,
      maxY: o.y + f.height / o.z + v
    };
  }, [o, t, f]), i = lt((v) => {
    if (!h) return !1;
    if (v.id === s || r.has(v.id)) return !0;
    if (v.type === "arrow") {
      const S = kt(v, z, e.current), X = (S.routing === "orthogonal" ? S.pathPoints : null) ?? [S.start, S.end], p = Math.min(...X.map((u) => u.x)), M = Math.max(...X.map((u) => u.x)), k = Math.min(...X.map((u) => u.y)), w = Math.max(...X.map((u) => u.y));
      return M >= h.minX && p <= h.maxX && w >= h.minY && k <= h.maxY;
    }
    const x = at(v);
    return x.maxX >= h.minX && x.minX <= h.maxX && x.maxY >= h.minY && x.minY <= h.maxY;
  }, [s, r, z, e, h]), a = Nt(
    () => d.filter(i),
    [i, d]
  );
  return { shapeById: z, visiblePaintOrder: a };
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
    n((S) => S.map((l) => {
      if (l.id !== e) return l;
      const X = { ...l, html: v, text: void 0 };
      if (l.type === "text")
        return l.manualSize ? X : { ...X, ...Do(a, l) };
      if (l.type === "arrow") return X;
      const p = l.type === "note" ? 32 : l.type === "card" ? 96 : (
        // category header + type footer
        (l.type === "frame", 24)
      ), M = Math.max(l.h, x + p);
      return { ...X, h: M };
    })), r();
  }, [e, r]), f = (a) => {
    var v;
    (v = t.current) == null || v.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(a), c();
  }, g = () => {
    var S;
    const a = (S = window.getSelection()) == null ? void 0 : S.anchorNode, v = a instanceof Element ? a : a == null ? void 0 : a.parentElement, x = v == null ? void 0 : v.closest("ul, ol");
    return x instanceof HTMLElement ? x : null;
  }, z = (a, v, x) => {
    const S = document.createElement(v);
    for (; a.firstChild; ) S.append(a.firstChild);
    return a.replaceWith(S), S;
  }, d = (a) => {
    const v = t.current;
    if (!v) return;
    v.focus();
    const x = g();
    if (a === "number")
      if ((x == null ? void 0 : x.tagName) === "OL")
        x.removeAttribute("data-list-style");
      else if ((x == null ? void 0 : x.tagName) === "UL")
        z(x, "ol");
      else {
        document.execCommand("insertOrderedList");
        const S = g();
        S == null || S.removeAttribute("data-list-style");
      }
    else if ((x == null ? void 0 : x.tagName) === "UL") {
      const S = x.dataset.listStyle;
      a === S ? document.execCommand("insertUnorderedList") : x.dataset.listStyle = a;
    } else {
      (x == null ? void 0 : x.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const S = g();
      S && (S.dataset.listStyle = a);
    }
    c();
  };
  return { commitEditorHtml: c, applyFormat: f, applyList: d, onEditorKeyDown: (a) => {
    if (a.key === "Tab") {
      a.preventDefault(), document.execCommand(a.shiftKey ? "outdent" : "indent"), c();
      return;
    }
    if (a.key === " ") {
      const v = window.getSelection();
      if (v && v.isCollapsed && v.anchorNode) {
        const x = v.anchorNode, S = x.textContent || "", l = v.anchorOffset, X = S.slice(0, l).trim();
        if (!g()) {
          if (X === "-" || X === "–") {
            a.preventDefault(), x.textContent = S.slice(l), d("dash");
            return;
          }
          if (X === "*") {
            a.preventDefault(), x.textContent = S.slice(l), d("bullet");
            return;
          }
          if (X === "1.") {
            a.preventDefault(), x.textContent = S.slice(l), d("number");
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
  const s = nt(null), c = nt(null), [f, g] = st([]), z = n !== void 0 && o !== void 0, d = nt(/* @__PURE__ */ new WeakMap()), h = Nt(() => {
    const D = d.current;
    return (z ? n ?? [] : f).map((U) => {
      let j = D.get(U);
      return j === void 0 && (j = rn(U), D.set(U, j)), j;
    }).filter((U) => U !== null);
  }, [z, n, f]), i = nt(o);
  i.current = o;
  const a = lt((D) => {
    const U = i.current;
    if (!U) {
      g(D);
      return;
    }
    U(typeof D == "function" ? D : () => D);
  }, []), [v, x] = st({ x: -400, y: -300, z: 1 }), [S, l] = st(/* @__PURE__ */ new Set()), [X, p] = st(null), [M, k] = st({ kind: "none" }), [w, u] = st(!1), [y, m] = st([]), [b, $] = st(""), [I, N] = st(!1), [L, F] = st(null), [A, C] = st("blue"), [T, E] = st(Qt), W = nt(A);
  W.current = A;
  const O = nt([]), K = nt([]), V = nt(null), G = nt(/* @__PURE__ */ new Map()), B = nt(h), q = nt(v), Q = nt(e), ot = nt(S), J = nt(X);
  B.current = h, q.current = v, Q.current = e, ot.current = S, J.current = X;
  const tt = nt({ kind: "none" }), it = lt((D) => {
    tt.current = D, k(D);
  }, []), ht = lt((D) => {
    ot.current = D, l(D);
  }, []);
  Zt(() => {
    var U;
    const D = /* @__PURE__ */ new Set();
    ot.current = D, J.current = null, G.current.clear(), O.current = [], K.current = [], V.current = null, it({ kind: "none" }), l(D), p(null), u(!1), m([]), F(null), $(""), (U = s.current) == null || U.focus();
  }, [it, t]), $t(() => {
    let D = !1;
    const U = () => {
      const et = Io();
      D || E(et);
    };
    if (U(), typeof document > "u" || !("fonts" in document)) return;
    const j = () => U();
    return document.fonts.addEventListener("loadingdone", j), () => {
      D = !0, document.fonts.removeEventListener("loadingdone", j);
    };
  }, [t]);
  const Y = (X ? h.find((D) => D.id === X) : void 0) !== void 0;
  Zt(() => {
    if (!X || !Y) return;
    const D = () => {
      const j = c.current, et = B.current.find((ie) => ie.id === X);
      if (!j || !et || (j.dataset.seeded !== X && (j.innerHTML = ee(et), j.dataset.seeded = X), document.activeElement === j)) return;
      j.focus();
      const zt = document.createRange();
      zt.selectNodeContents(j), zt.collapse(!1);
      const Xt = window.getSelection();
      Xt == null || Xt.removeAllRanges(), Xt == null || Xt.addRange(zt);
    };
    D();
    const U = requestAnimationFrame(D);
    return () => cancelAnimationFrame(U);
  }, [X, Y]);
  const _ = lt((D) => {
    a((U) => {
      const j = typeof D == "function" ? D(U) : D;
      return O.current.push(U), O.current.length > 100 && O.current.shift(), K.current = [], j;
    }), r();
  }, [r]), Z = lt((D) => D.size === 0 ? !1 : (_((U) => U.filter((j) => D.has(j.id) ? !1 : j.type !== "arrow" ? !0 : !(j.fromId && D.has(j.fromId)) && !(j.toId && D.has(j.toId)))), ht(/* @__PURE__ */ new Set()), $(`${D.size}개 삭제됨`), !0), [_, ht]), ct = lt(() => {
    V.current = B.current;
  }, []), pt = lt(() => {
    const D = V.current;
    V.current = null, !(!D || D === B.current) && (O.current.push(D), O.current.length > 100 && O.current.shift(), K.current = [], r());
  }, [r]), Et = lt((D, U) => {
    var zt;
    const j = (zt = s.current) == null ? void 0 : zt.getBoundingClientRect(), et = q.current;
    return j ? { x: (D - j.left) / et.z + et.x, y: (U - j.top) / et.z + et.y } : { x: 0, y: 0 };
  }, []), re = lt(() => {
    var j;
    const D = (j = s.current) == null ? void 0 : j.getBoundingClientRect(), U = q.current;
    return D ? { x: U.x + D.width / 2 / U.z, y: U.y + D.height / 2 / U.z } : { x: 0, y: 0 };
  }, []), Dt = lt((D) => {
    const U = new Set(B.current.filter((et) => D.has(et.id) && et.groupId).map((et) => et.groupId));
    if (U.size === 0) return D;
    const j = new Set(D);
    for (const et of B.current) et.groupId && U.has(et.groupId) && j.add(et.id);
    return j;
  }, []);
  return {
    containerRef: s,
    editorRef: c,
    localShapes: f,
    setLocalShapes: g,
    controlled: z,
    shapes: h,
    setShapes: a,
    camera: v,
    setCamera: x,
    cameraRef: q,
    selected: S,
    setSelected: l,
    selectedRef: ot,
    editingId: X,
    setEditingId: p,
    editingIdRef: J,
    interaction: M,
    interactionRef: tt,
    applyInteraction: it,
    isSpaceDown: w,
    setIsSpaceDown: u,
    guides: y,
    setGuides: m,
    announcement: b,
    setAnnouncement: $,
    showInspectorPalette: I,
    setShowInspectorPalette: N,
    eraserPos: L,
    setEraserPos: F,
    activeColor: A,
    setActiveColor: C,
    activeColorRef: W,
    installedFontFamilies: T,
    pointers: G,
    past: O,
    future: K,
    selectNow: ht,
    commit: _,
    deleteSelection: Z,
    beginHistory: ct,
    endHistory: pt,
    toPage: Et,
    viewportCentre: re,
    expandToGroups: Dt,
    toolRef: Q,
    shapesRef: B
  };
}
function Qo({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: o,
  maxZoom: r,
  shapes: s,
  selected: c,
  editingId: f,
  textualTypes: g,
  onZoomChange: z,
  onSelectionChange: d,
  onLocalCursor: h,
  toPage: i
}) {
  $t(() => {
    z == null || z(e.z);
  }, [e.z, z]), $t(() => {
    const X = t.current;
    if (!X) return;
    const p = (M) => {
      if (M.preventDefault(), M.ctrlKey || M.metaKey) {
        const k = X.getBoundingClientRect();
        n((w) => {
          const u = Math.min(r, Math.max(o, w.z * Math.exp(-M.deltaY * 0.01))), y = M.clientX - k.left, m = M.clientY - k.top;
          return { x: w.x + y / w.z - y / u, y: w.y + m / w.z - m / u, z: u };
        });
      } else
        n((k) => ({ ...k, x: k.x + M.deltaX / k.z, y: k.y + M.deltaY / k.z }));
    };
    return X.addEventListener("wheel", p, { passive: !1 }), () => X.removeEventListener("wheel", p);
  }, [t, r, o, n]);
  const a = Nt(() => {
    const X = s.filter((p) => c.has(p.id));
    return {
      count: X.length,
      canGroup: X.length > 1,
      canUngroup: X.some((p) => !!p.groupId),
      isTextual: X.length === 1 && g.includes(X[0].type),
      selectedIds: X.map((p) => p.id)
    };
  }, [c, s, g]);
  $t(() => {
    d == null || d(a);
  }, [d, a]);
  const v = Nt(() => {
    if (f) {
      const M = s.find((k) => k.id === f);
      return M && M.type !== "image" && M.type !== "draw" ? M : null;
    }
    const X = s.filter((M) => c.has(M.id));
    if (X.length > 1 && X.every((M) => M.type === "draw")) return X[0] ?? null;
    if (X.length !== 1) return null;
    const p = X[0];
    return p && p.type !== "image" ? p : null;
  }, [f, c, s]), x = nt(0);
  return { selectionInfo: a, inspectorShape: v, onContainerPointerMove: h ? (X) => {
    const p = performance.now();
    p - x.current < 60 || (x.current = p, h(i(X.clientX, X.clientY)));
  } : void 0, onContainerPointerLeave: h ? () => h(null) : void 0 };
}
function Zo(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, o = 1 / 0, r = -1 / 0, s = -1 / 0;
  for (const h of t) {
    const i = at(h);
    n = Math.min(n, i.minX), o = Math.min(o, i.minY), r = Math.max(r, i.maxX), s = Math.max(s, i.maxY);
  }
  const c = 40, f = r - n + c * 2, g = s - o + c * 2;
  if (!Number.isFinite(f) || !Number.isFinite(g) || f > Ot.maxExportDimension || g > Ot.maxExportDimension || f * g > Ot.maxExportPixels) return null;
  const z = (h, i, a, v, x) => {
    const S = h.fontSize ?? a, l = xt(h), X = on(ee(h));
    if (X.length === 0) return "";
    const p = Lt(h), M = h.textAlign === "right" ? "end" : h.textAlign === "center" ? "middle" : h.textAlign === "left" ? "start" : x, k = M === "end" ? p.maxX - 12 : M === "middle" ? (p.minX + p.maxX) / 2 : p.minX + 12, w = p.minY + S + 12;
    return X.map((u, y) => {
      const m = u.map((b) => `<tspan style="${[
        b.bold ? "font-weight:700" : `font-weight:${v}`,
        b.italic ? "font-style:italic" : "",
        b.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Ct(b.text)}</tspan>`).join("");
      return `<text x="${k}" y="${w + y * S * 1.4}" font-family="${Ct(l)}" font-size="${S}" fill="${i}" text-anchor="${M}">${m}</text>`;
    }).join("");
  }, d = t.map((h) => {
    const i = mt[h.color ?? "blue"], a = Lt(h), v = wt(h), x = h.rotation ? ` transform="rotate(${h.rotation * 180 / Math.PI} ${v.x} ${v.y})"` : "", S = h.color ? mt[h.color].border : H.ink;
    if (h.type === "draw" && h.points) {
      const u = h.drawMode ?? "pen", y = h.strokeWidth ?? 3, m = h.points.length >= 2 ? nn(h.points, y, u) : "";
      if (m)
        return `<path d="${m}" fill="${S}"${u === "highlighter" ? ' fill-opacity="0.35"' : ""} fill-rule="evenodd" stroke="none"/>`;
      const b = u === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${en(h.points)}" fill="none" stroke="${S}" stroke-width="${y}"${b} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (h.type === "arrow") {
      const u = kt(h, new Map(t.map((O) => [O.id, O])), t), y = h.strokeWidth ?? 2.5, m = Math.max(10, 8 + y * 2), b = Math.max(4, 2 + y), $ = u.routing === "orthogonal" && u.pathPoints ? u.pathPoints : null, I = $ && $.length > 1, N = I ? ue($) : u.routing === "curved" ? `M ${u.start.x} ${u.start.y} Q ${u.control.x} ${u.control.y} ${u.end.x} ${u.end.y}` : `M ${u.start.x} ${u.start.y} L ${u.end.x} ${u.end.y}`, L = I ? Ve($) : u.routing === "curved" ? (() => {
        const O = Kt(0.94, u.start, u.control, u.end);
        return Math.atan2(u.end.y - O.y, u.end.x - O.x);
      })() : Math.atan2(u.end.y - u.start.y, u.end.x - u.start.x), F = I ? Bt($[0], $[1]) : u.routing === "orthogonal" && u.start.side ? u.start.side === "e" ? 0 : u.start.side === "w" ? Math.PI : u.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Bt(u.start, u.end), A = h.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : h.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", C = (O, K, V, G) => {
        if (O === "dot") return `<circle cx="${K}" cy="${V}" r="${b}" fill="${S}"/>`;
        if (O === "none") return "";
        const B = `${K - m * Math.cos(G - 0.4)},${V - m * Math.sin(G - 0.4)}`, q = `${K - m * Math.cos(G + 0.4)},${V - m * Math.sin(G + 0.4)}`;
        return `<polygon points="${K},${V} ${B} ${q}" fill="${S}"/>`;
      }, T = u.routing === "orthogonal" && u.pathPoints ? ve(u.pathPoints) : u.bend === 0 ? { x: (u.start.x + u.end.x) / 2, y: (u.start.y + u.end.y) / 2 } : Kt(0.5, u.start, u.control, u.end), E = ne(h), W = E ? `<text x="${T.x}" y="${T.y - 6}" text-anchor="middle" font-family="${Ct(xt(h))}" font-size="${h.fontSize ?? 12}" fill="${S}">${Ct(E)}</text>` : "";
      return `<path d="${N}" fill="none" stroke="${S}" stroke-width="${y}" stroke-linecap="round" stroke-linejoin="round"${A}/>` + C(h.arrowEnd ?? "arrow", u.end.x, u.end.y, L) + C(h.arrowStart ?? "none", u.start.x, u.start.y, F + Math.PI) + W;
    }
    if (h.type === "image" && h.src) {
      const u = fe(h.src);
      return u ? `<image href="${Ct(u)}" x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}"${x}/>` : "";
    }
    if (h.type === "frame")
      return `<g${x}><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" fill="none" stroke="${H.slate400}" stroke-width="${h.strokeWidth ?? 2}" rx="4"/><text x="${a.minX}" y="${a.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${H.muted}">${Ct(h.text ?? "프레임")}</text></g>`;
    if (h.type === "note")
      return `<g${x}><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" fill="${i.bg}"/><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="6" fill="${i.border}"/>` + z(h, i.text, 14, "600", "start") + "</g>";
    if (h.type === "card") {
      const u = h.cardStyle === "glass";
      return `<g${x}><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" rx="16" fill="${u ? H.glassFill : H.slateCard}"/><text x="${a.minX + 16}" y="${a.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${H.slate400}">[ ${Ct(h.category ?? "ENTITY")} ]</text>` + z(h, H.white, 16, "700", "start") + "</g>";
    }
    const l = h.type === "rect" || h.type === "ellipse" || h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star" ? h.strokeWidth ?? 2 : 2, X = Jt(h), p = Je(h), M = h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star", k = M ? tn(h.type, a.maxX - a.minX, a.maxY - a.minY).split(" ").map((u) => {
      const [y, m] = u.split(",").map(Number);
      return `${y + a.minX},${m + a.minY}`;
    }).join(" ") : "", w = h.type === "ellipse" ? `<ellipse cx="${(a.minX + a.maxX) / 2}" cy="${(a.minY + a.maxY) / 2}" rx="${(a.maxX - a.minX) / 2}" ry="${(a.maxY - a.minY) / 2}" fill="${X}" stroke="${p}" stroke-width="${l}"/>` : M ? `<polygon points="${k}" fill="${X}" stroke="${p}" stroke-width="${l}" stroke-linejoin="round"/>` : `<rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" rx="12" fill="${X}" stroke="${p}" stroke-width="${l}"/>`;
    return `<g${x}>${w}${z(h, i.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${g}" viewBox="${n - c} ${o - c} ${f} ${g}"><rect x="${n - c}" y="${o - c}" width="${f}" height="${g}" fill="${e ? H.canvasDark : H.canvasLight}"/>` + d + "</svg>";
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
  const f = 2, g = o * f, z = r * f;
  if (!Number.isSafeInteger(g) || !Number.isSafeInteger(z) || g > Ot.maxExportDimension || z > Ot.maxExportDimension || g * z > Ot.maxExportPixels) return null;
  const d = document.createElement("canvas");
  d.width = g, d.height = z;
  const h = d.getContext("2d");
  return h ? (h.scale(f, f), h.drawImage(c, 0, 0), new Promise((i) => {
    try {
      d.toBlob((a) => i(a), "image/png");
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
  const f = 220, g = f * f, z = 80;
  let d = 400;
  const h = d / z;
  for (let i = 0; i < z; i++) {
    for (let a = 0; a < r.length; a++)
      r[a].vx = 0, r[a].vy = 0;
    for (let a = 0; a < r.length; a++)
      for (let v = a + 1; v < r.length; v++) {
        const x = r[a], S = r[v], l = x.x - S.x, X = x.y - S.y, p = Math.hypot(l, X) || 0.01, M = g / p, k = l / p * M, w = X / p * M;
        x.vx += k, x.vy += w, S.vx -= k, S.vy -= w;
      }
    for (const [a, v] of c) {
      const x = a.x - v.x, S = a.y - v.y, l = Math.hypot(x, S) || 0.01, X = l * l / f, p = x / l * X, M = S / l * X;
      a.vx -= p, a.vy -= M, v.vx += p, v.vy += M;
    }
    for (const a of r) {
      const v = Math.hypot(a.vx, a.vy) || 0.01, x = Math.min(v, d);
      a.x += a.vx / v * x, a.y += a.vy / v * x;
    }
    d = Math.max(0.5, d - h);
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
  setEditingId: f
}) {
  let g;
  try {
    g = Wn(t);
  } catch {
    return;
  }
  e || (n.current = [], o.current = [], r(g.shapes.map(nr))), s(g.camera), c(/* @__PURE__ */ new Set()), f(null);
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
  controlled: f,
  isDarkMode: g,
  minZoom: z,
  maxZoom: d,
  onToolChange: h,
  onDirty: i,
  commit: a,
  deleteSelection: v,
  selectNow: x,
  viewportCentre: S,
  setShapes: l,
  setLocalShapes: X,
  setCamera: p,
  setEditingId: M,
  setAnnouncement: k,
  createId: w
}) {
  const u = lt((m) => {
    const b = S(), $ = rn({
      id: w(),
      x: m.x ?? b.x - m.w / 2,
      y: m.y ?? b.y - m.h / 2,
      ...m
    });
    if (!$) throw new Error("Canvas could not create a valid shape.");
    return a((I) => [...I, $]), x(/* @__PURE__ */ new Set([$.id])), h("select"), k(`${$.type} 추가됨`), $;
  }, [a, w, h, x, k, S]), y = lt(() => Zo(n.current, g), [g, n]);
  Ln(t, () => ({
    addNote: (m) => {
      const b = u({ type: "note", w: 180, h: 180, color: m, text: "" });
      M(b.id);
    },
    addCard: (m, b, $, I) => {
      u({ type: "card", w: 260, h: 150, text: m, category: b, cardStyle: $, color: I });
    },
    addText: () => {
      const m = u({ type: "text", w: 220, h: 44, text: "" });
      M(m.id);
    },
    addShape: (m, b, $) => {
      u({
        type: m,
        w: m === "ellipse" ? 220 : 200,
        h: m === "ellipse" ? 110 : 140,
        color: b,
        text: $ ?? ""
      });
    },
    addArrow: () => {
      const m = S(), b = { id: w(), type: "arrow", x: m.x - 140, y: m.y, w: 280, h: 0 };
      a(($) => [...$, b]), x(/* @__PURE__ */ new Set([b.id])), h("select");
    },
    addImage: (m, b, $, I) => {
      u({ type: "image", w: $, h: I, src: m, fileName: b });
    },
    addFileCard: (m, b, $) => {
      u({ type: "rect", w: 260, h: 120, color: "purple", text: $, src: b, fileName: m });
    },
    updateShapeText: (m, b) => {
      a(($) => $.map((I) => I.id === m ? { ...I, text: b, html: void 0 } : I));
    },
    setTool: h,
    undo: () => {
      const m = s.current.pop();
      m && (c.current.push(n.current), l(m), x(/* @__PURE__ */ new Set()), M(null), i(), k("실행 취소"));
    },
    redo: () => {
      const m = c.current.pop();
      m && (s.current.push(n.current), l(m), x(/* @__PURE__ */ new Set()), M(null), i(), k("다시 실행"));
    },
    deleteSelected: () => {
      v(r.current);
    },
    duplicateSelected: () => {
      var I;
      const m = r.current;
      if (m.size === 0) return;
      const b = [], $ = /* @__PURE__ */ new Map();
      for (const N of n.current) {
        if (!m.has(N.id)) continue;
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
      a((N) => [...N, ...b]), x(new Set(b.map((N) => N.id))), k(`${b.length}개 복제됨`);
    },
    group: () => {
      var $;
      const m = r.current;
      if (m.size < 2) return;
      const b = w("g");
      a((I) => I.map((N) => m.has(N.id) ? { ...N, groupId: b } : N)), k(`${m.size}개 그룹화됨`), ($ = e.current) == null || $.focus();
    },
    ungroup: () => {
      var b;
      const m = r.current;
      m.size !== 0 && (a(($) => $.map((I) => m.has(I.id) ? { ...I, groupId: void 0 } : I)), k("그룹 해제됨"), (b = e.current) == null || b.focus());
    },
    zoomBy: (m) => {
      p((b) => {
        var F;
        const $ = (F = e.current) == null ? void 0 : F.getBoundingClientRect(), I = Math.min(d, Math.max(z, b.z * m));
        if (!$) return { ...b, z: I };
        const N = b.x + $.width / 2 / b.z, L = b.y + $.height / 2 / b.z;
        return { x: N - $.width / 2 / I, y: L - $.height / 2 / I, z: I };
      });
    },
    zoomTo: (m) => {
      p((b) => {
        var F;
        const $ = (F = e.current) == null ? void 0 : F.getBoundingClientRect(), I = Math.min(d, Math.max(z, m));
        if (!$) return { ...b, z: I };
        const N = b.x + $.width / 2 / b.z, L = b.y + $.height / 2 / b.z;
        return { x: N - $.width / 2 / I, y: L - $.height / 2 / I, z: I };
      });
    },
    resetZoom: () => {
      p((m) => {
        var N;
        const b = (N = e.current) == null ? void 0 : N.getBoundingClientRect();
        if (!b) return { ...m, z: 1 };
        const $ = m.x + b.width / 2 / m.z, I = m.y + b.height / 2 / m.z;
        return { x: $ - b.width / 2, y: I - b.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var C;
      const m = n.current, b = (C = e.current) == null ? void 0 : C.getBoundingClientRect();
      if (m.length === 0 || !b) return;
      let $ = 1 / 0, I = 1 / 0, N = -1 / 0, L = -1 / 0;
      for (const T of m) {
        const E = at(T);
        $ = Math.min($, E.minX), I = Math.min(I, E.minY), N = Math.max(N, E.maxX), L = Math.max(L, E.maxY);
      }
      const F = 80, A = Math.min(d, Math.max(
        z,
        Math.min(b.width / (N - $ + F * 2), b.height / (L - I + F * 2))
      ));
      p({
        x: ($ + N) / 2 - b.width / 2 / A,
        y: (I + L) / 2 - b.height / 2 / A,
        z: A
      });
    },
    autoLayout: () => tr(n.current, a, () => k("자동 배치 완료")),
    exportSvg: y,
    exportPng: () => Jo(y),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (m) => er(m, {
      controlled: f,
      past: s,
      future: c,
      setLocalShapes: X,
      setCamera: p,
      selectNow: x,
      setEditingId: M
    })
  }), [
    u,
    y,
    a,
    w,
    v,
    g,
    d,
    z,
    i,
    h,
    x,
    p,
    M,
    X,
    l,
    k,
    S,
    f
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
  future: f,
  textualTypes: g,
  setIsSpaceDown: z,
  setEditingId: d,
  setShapes: h,
  setAnnouncement: i,
  commit: a,
  deleteSelection: v,
  selectNow: x,
  onDirty: S,
  onToolChange: l,
  createId: X
}) {
  const p = lt((M, k) => {
    const w = o.current;
    w.size !== 0 && a((u) => u.map((y) => {
      var m;
      return w.has(y.id) ? {
        ...y,
        x: y.x + M,
        y: y.y + k,
        points: (m = y.points) == null ? void 0 : m.map(([b, $]) => [b + M, $ + k])
      } : y;
    }));
  }, [a, o]);
  $t(() => {
    const M = (y) => {
      const m = y;
      return !!m && (m.tagName === "INPUT" || m.tagName === "TEXTAREA" || m.isContentEditable);
    }, k = (y) => y instanceof Element && !!y.closest("input, select, button, textarea, option, label, [data-canvas-control]"), w = (y) => {
      var A, C, T, E;
      const m = t.current, b = document.activeElement, $ = y.target instanceof Node && !!(m != null && m.contains(y.target)), I = !!m && (b === m || m.contains(b));
      if (!$ && !I || k(y.target)) return;
      if (y.code === "Space" && !M(y.target)) {
        z(!0), y.preventDefault();
        return;
      }
      if (M(y.target)) {
        if (y.key === "Escape")
          y.preventDefault(), d(null), (A = e.current) == null || A.blur(), (C = t.current) == null || C.focus();
        else if ((y.key === "Delete" || y.key === "Backspace") && !r.current) {
          const W = o.current;
          v(W) && y.preventDefault();
        }
        return;
      }
      const N = y.metaKey || y.ctrlKey, L = o.current;
      if (N && y.key.toLowerCase() === "z") {
        if (y.preventDefault(), y.shiftKey) {
          const W = f.current.pop();
          W && (c.current.push(n.current), h(W), S());
        } else {
          const W = c.current.pop();
          W && (f.current.push(n.current), h(W), S());
        }
        x(/* @__PURE__ */ new Set());
        return;
      }
      if (N && y.key.toLowerCase() === "g") {
        if (y.preventDefault(), y.shiftKey)
          L.size > 0 && (a((W) => W.map((O) => L.has(O.id) ? { ...O, groupId: void 0 } : O)), i("그룹 해제됨"));
        else if (L.size > 1) {
          const W = X("g");
          a((O) => O.map((K) => L.has(K.id) ? { ...K, groupId: W } : K)), i(`${L.size}개 그룹화됨`);
        }
        return;
      }
      if (N && y.key.toLowerCase() === "a") {
        y.preventDefault(), x(new Set(n.current.map((W) => W.id))), i(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (y.key === "Delete" || y.key === "Backspace") {
        v(L) && y.preventDefault();
        return;
      }
      if (y.key.startsWith("Arrow")) {
        y.preventDefault();
        const W = y.shiftKey ? 10 : 1;
        y.key === "ArrowLeft" && p(-W, 0), y.key === "ArrowRight" && p(W, 0), y.key === "ArrowUp" && p(0, -W), y.key === "ArrowDown" && p(0, W);
        return;
      }
      if (y.key === "Tab" && n.current.length > 0) {
        y.preventDefault();
        const W = n.current, O = W.findIndex((G) => L.has(G.id)), K = y.shiftKey ? O <= 0 ? W.length - 1 : O - 1 : O === -1 || O === W.length - 1 ? 0 : O + 1, V = W[K];
        x(/* @__PURE__ */ new Set([V.id])), i(`${V.type} 선택됨: ${ne(V) || "내용 없음"}`);
        return;
      }
      if (y.key === "Enter" && L.size === 1) {
        const W = n.current.find((O) => L.has(O.id));
        W && g.includes(W.type) && (y.preventDefault(), d(W.id));
        return;
      }
      if (y.key === "Escape") {
        if (r.current) {
          y.preventDefault(), d(null), (T = e.current) == null || T.blur(), (E = t.current) == null || E.focus(), l("select");
          return;
        }
        x(/* @__PURE__ */ new Set()), l("select");
        return;
      }
      const F = ir(y);
      F && (y.preventDefault(), s.current = F, l(F));
    }, u = (y) => {
      const m = t.current;
      !m || !(document.activeElement === m || m.contains(document.activeElement)) || y.code === "Space" && z(!1);
    };
    return window.addEventListener("keydown", w), window.addEventListener("keyup", u), () => {
      window.removeEventListener("keydown", w), window.removeEventListener("keyup", u);
    };
  }, [
    a,
    t,
    X,
    v,
    r,
    e,
    f,
    p,
    S,
    l,
    c,
    x,
    o,
    i,
    d,
    z,
    h,
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
  drawStrokeWidth: f,
  camera: g,
  shapes: z,
  selected: d,
  isSpaceDown: h,
  textualTypes: i,
  setShapes: a,
  setEditingId: v,
  applyInteraction: x,
  selectNow: S,
  beginHistory: l,
  commit: X,
  onToolChange: p,
  expandToGroups: M,
  toPage: k,
  createId: w
}) {
  const u = w, y = nt(null), m = (C, T) => {
    var K;
    const E = ((K = t.current) == null ? void 0 : K.dataset.canvasActiveTool) === "text" ? "text" : s.current;
    if (E !== "note" && E !== "text") return;
    const W = k(C, T), O = E === "note" ? { id: u(), type: "note", x: W.x - 90, y: W.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: u(), type: "text", x: W.x, y: W.y - 22, w: 220, h: 44, text: "" };
    X((V) => [...V, O]), S(/* @__PURE__ */ new Set([O.id])), v(O.id), p("select");
  };
  return $t(() => {
    const C = (T) => {
      var E;
      (E = t.current) != null && E.contains(T.target) && (T.target instanceof Element && T.target.closest('[role="textbox"], [data-canvas-inspector]') || m(T.clientX, T.clientY));
    };
    return window.addEventListener("click", C, !0), () => window.removeEventListener("click", C, !0);
  }), { onPointerDown: (C) => {
    var K, V, G;
    const T = s.current;
    if (n.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), n.current.size === 2) {
      const [B, q] = [...n.current.values()], Q = o.current;
      x({
        kind: "pinch",
        startDist: Math.hypot(q.x - B.x, q.y - B.y) || 1,
        startZoom: Q.z,
        startMidX: (B.x + q.x) / 2,
        startMidY: (B.y + q.y) / 2,
        camX: Q.x,
        camY: Q.y
      });
      return;
    }
    if (n.current.size > 2) return;
    if (C.button === 1 || h || T === "hand" || C.button === 0 && T === "select" && C.altKey) {
      x({ kind: "pan", startX: C.clientX, startY: C.clientY, camX: g.x, camY: g.y });
      return;
    }
    if (C.button !== 0) return;
    const E = k(C.clientX, C.clientY);
    if (v(null), (K = e.current) == null || K.blur(), (V = t.current) == null || V.focus(), T === "draw" || T === "highlighter") {
      const B = {
        id: u(),
        type: "draw",
        x: E.x,
        y: E.y,
        w: 0,
        h: 0,
        points: [[E.x, E.y]],
        color: c.current,
        strokeWidth: f,
        drawMode: T === "highlighter" ? "highlighter" : "pen"
      };
      l(), a((q) => [...q, B]), x({ kind: "drawing", id: B.id });
      return;
    }
    if (T === "arrow" || T === "frame" || _n.includes(T)) {
      const B = T, q = T === "arrow" ? { id: u(), type: "arrow", x: E.x, y: E.y, w: 0, h: 0, color: c.current } : T === "frame" ? { id: u(), type: "frame", x: E.x, y: E.y, w: 0, h: 0, text: "프레임" } : { id: u(), type: B, x: E.x, y: E.y, w: 0, h: 0, color: c.current, text: "" };
      l(), a((Q) => [...Q, q]), x({ kind: "creating", id: q.id, startX: E.x, startY: E.y });
      return;
    }
    if (T === "note" || T === "text") return;
    if (T === "eraser") {
      l(), a((B) => sn(B, E.x, E.y, 14 / g.z, g.z)), x({ kind: "erasing" });
      return;
    }
    const W = new Map(z.map((B) => [B.id, B])), O = [...z].reverse().find((B) => te(B, E.x, E.y, g.z, W, z));
    if (!O)
      y.current = null;
    else {
      const B = Date.now(), q = !C.shiftKey && i.includes(O.type) && ((G = y.current) == null ? void 0 : G.id) === O.id && B - y.current.time < cr, Q = q ? O.id : void 0;
      y.current = q ? null : { id: O.id, time: B };
      const ot = C.shiftKey ? new Set(d).add(O.id) : d.has(O.id) ? d : /* @__PURE__ */ new Set([O.id]), J = M(ot);
      S(J);
      const tt = /* @__PURE__ */ new Map();
      for (const it of z) J.has(it.id) && tt.set(it.id, it);
      for (const it of z) {
        if (it.type !== "frame" || !J.has(it.id)) continue;
        const ht = at(it);
        for (const dt of z) {
          if (dt.id === it.id || tt.has(dt.id)) continue;
          const Y = wt(dt);
          Y.x >= ht.minX && Y.x <= ht.maxX && Y.y >= ht.minY && Y.y <= ht.maxY && tt.set(dt.id, dt);
        }
      }
      l(), x({ kind: "move", startX: E.x, startY: E.y, origin: tt, editOnReleaseId: Q });
      return;
    }
    C.shiftKey || S(/* @__PURE__ */ new Set()), x({
      kind: "marquee",
      startX: E.x,
      startY: E.y,
      curX: E.x,
      curY: E.y,
      screenStartX: C.clientX,
      screenStartY: C.clientY
    });
  }, onResizeHandleDown: (C, T, E) => {
    C.stopPropagation(), n.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), l(), x({ kind: "resize", id: T.id, handle: E, start: T });
  }, onRotateHandleDown: (C, T) => {
    C.stopPropagation(), n.current.set(C.pointerId, { x: C.clientX, y: C.clientY });
    const E = k(C.clientX, C.clientY), W = wt(T);
    l(), x({
      kind: "rotate",
      id: T.id,
      startAngle: Math.atan2(E.y - W.y, E.x - W.x),
      startRotation: T.rotation ?? 0
    });
  }, onConnectHandleDown: (C, T) => {
    C.stopPropagation(), n.current.set(C.pointerId, { x: C.clientX, y: C.clientY });
    const E = k(C.clientX, C.clientY);
    x({ kind: "connect", fromId: T.id, toX: E.x, toY: E.y, hoverId: null });
  }, onBendHandleDown: (C, T) => {
    C.stopPropagation(), n.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), l(), x({ kind: "bend", id: T.id });
  }, onOrthogonalSegmentHandleDown: (C, T, E) => {
    C.stopPropagation(), n.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), l(), x({ kind: "orthogonal-segment", id: T.id, segmentIndex: E });
  }, onArrowEndpointDown: (C, T, E) => {
    C.stopPropagation(), n.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), l(), x({ kind: "arrow-endpoint", id: T.id, endpoint: E, hoverId: null });
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
  setEraserPos: f,
  setGuides: g,
  setAnnouncement: z,
  applyInteraction: d,
  selectNow: h,
  endHistory: i,
  commit: a,
  onToolChange: v,
  createId: x
}) {
  const S = x;
  $t(() => {
    const l = (X) => {
      t.current.delete(X.pointerId);
      const p = e.current;
      if (p.kind !== "none") {
        if (p.kind === "pinch") {
          t.current.size < 2 && d({ kind: "none" });
          return;
        }
        if (g([]), p.kind === "erasing") {
          f(null), i(), d({ kind: "none" });
          return;
        }
        if (p.kind === "connect") {
          const k = r.current.find(($) => $.id === p.fromId);
          if (d({ kind: "none" }), !k) return;
          const w = { x: p.toX, y: p.toY }, u = wt(k);
          if (!p.hoverId && Math.hypot(w.x - u.x, w.y - u.y) < 30) return;
          const y = [];
          let m = p.hoverId;
          if (!m) {
            const $ = k.type === "note" ? 180 : 200, I = k.type === "note" ? 180 : 120, N = {
              ...k,
              id: S(),
              x: w.x - $ / 2,
              y: w.y - I / 2,
              w: $,
              h: I,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            y.push(N), m = N.id;
          }
          const b = {
            id: S(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: k.id,
            toId: m,
            text: ""
          };
          y.push(b), a(($) => [...$, ...y]), h(/* @__PURE__ */ new Set([b.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => c(b.id)) : c(b.id), z("연결 생성됨");
          return;
        }
        if (p.kind === "bend") {
          i(), d({ kind: "none" });
          return;
        }
        if (p.kind === "drawing") {
          s((M) => M.map((k) => {
            if (k.id !== p.id || !k.points) return k;
            const w = k.points.map((b) => b[0]), u = k.points.map((b) => b[1]), y = Math.min(...w), m = Math.min(...u);
            return { ...k, x: y, y: m, w: Math.max(...w) - y, h: Math.max(...u) - m };
          })), i(), d({ kind: "none" });
          return;
        }
        if (p.kind === "creating") {
          s((M) => M.map((k) => {
            if (k.id !== p.id) return k;
            const w = Math.abs(k.w) < 4 && Math.abs(k.h) < 4 ? {
              ...k,
              w: k.type === "arrow" ? 200 : k.type === "frame" ? 480 : 180,
              h: k.type === "arrow" ? 0 : k.type === "frame" ? 320 : 120
            } : k;
            if (w.type === "arrow") return w;
            const u = Lt(w);
            return { ...w, x: u.minX, y: u.minY, w: u.maxX - u.minX, h: u.maxY - u.minY };
          })), i(), h(/* @__PURE__ */ new Set([p.id])), v("select"), d({ kind: "none" });
          return;
        }
        if ((p.kind === "move" || p.kind === "resize" || p.kind === "rotate" || p.kind === "orthogonal-segment" || p.kind === "arrow-endpoint") && i(), p.kind === "move" && p.editOnReleaseId && X.type === "pointerup") {
          const M = o(X.clientX, X.clientY);
          Math.hypot(M.x - p.startX, M.y - p.startY) * n.current.z <= xr && c(p.editOnReleaseId);
        }
        d({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", l), window.addEventListener("pointercancel", l), () => {
      window.removeEventListener("pointerup", l), window.removeEventListener("pointercancel", l);
    };
  }, [d, n, x, i, e, v, t, h, z, c, s, r, o]);
}
function fr({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: o,
  shapesRef: r,
  setCamera: s,
  setShapes: c,
  setEraserPos: f,
  setGuides: g,
  applyInteraction: z,
  selectNow: d,
  expandToGroups: h,
  toPage: i
}) {
  const a = nt([]), v = nt(null);
  $t(() => () => {
    v.current !== null && cancelAnimationFrame(v.current);
  }, []), $t(() => {
    const x = (S) => {
      var M, k;
      e.current.has(S.pointerId) && e.current.set(S.pointerId, { x: S.clientX, y: S.clientY });
      const l = n.current;
      if (l.kind === "none") return;
      const X = o.current;
      if (l.kind === "pinch") {
        if (e.current.size < 2) return;
        const [w, u] = [...e.current.values()], y = Math.hypot(u.x - w.x, u.y - w.y) || 1, m = (w.x + u.x) / 2, b = (w.y + u.y) / 2, $ = (M = t.current) == null ? void 0 : M.getBoundingClientRect();
        if (!$) return;
        const I = Math.min(dr, Math.max(lr, l.startZoom * (y / l.startDist))), N = l.camX + (l.startMidX - $.left) / l.startZoom, L = l.camY + (l.startMidY - $.top) / l.startZoom;
        s({ x: N - (m - $.left) / I, y: L - (b - $.top) / I, z: I });
        return;
      }
      if (l.kind === "pan") {
        s({
          x: l.camX - (S.clientX - l.startX) / X.z,
          y: l.camY - (S.clientY - l.startY) / X.z,
          z: X.z
        });
        return;
      }
      const p = i(S.clientX, S.clientY);
      if (l.kind === "erasing") {
        c((w) => sn(w, p.x, p.y, ur / X.z, X.z)), f({ x: p.x, y: p.y });
        return;
      }
      if (l.kind === "connect") {
        const w = r.current, u = new Map(w.map((m) => [m.id, m])), y = [...w].reverse().find((m) => m.id !== l.fromId && We.includes(m.type) && te(m, p.x, p.y, X.z, u, w));
        z({ ...l, toX: p.x, toY: p.y, hoverId: (y == null ? void 0 : y.id) ?? null });
        return;
      }
      if (l.kind === "bend") {
        const w = r.current, u = w.find((F) => F.id === l.id);
        if (!u) return;
        const y = kt(u, new Map(w.map((F) => [F.id, F])), w), m = y.end.x - y.start.x, b = y.end.y - y.start.y, $ = Math.hypot(m, b) || 1, I = (y.start.x + y.end.x) / 2, N = (y.start.y + y.end.y) / 2, L = (p.x - I) * (-b / $) + (p.y - N) * (m / $);
        c((F) => F.map((A) => A.id === l.id ? { ...A, bend: L } : A));
        return;
      }
      if (l.kind === "orthogonal-segment") {
        const w = r.current, u = w.find((L) => L.id === l.id);
        if (!u) return;
        const y = kt(u, new Map(w.map((L) => [L.id, L])), w), m = y.routing === "orthogonal" ? y.pathPoints : void 0;
        if (!m || m.length < 2) return;
        const b = m[l.segmentIndex], $ = m[l.segmentIndex + 1];
        if (!b || !$) return;
        const I = b.x === $.x ? p.x : p.y, N = ro(m, l.segmentIndex, I);
        c((L) => L.map((F) => F.id === l.id ? { ...F, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: N.slice(1, -1).map((A) => ({ x: A.x, y: A.y })) } : F));
        return;
      }
      if (l.kind === "arrow-endpoint") {
        const w = r.current, u = w.find((N) => N.id === l.id);
        if (!u) return;
        const y = new Map(w.map((N) => [N.id, N])), m = kt(u, y, w), b = l.endpoint === "start" ? m.end : m.start, $ = [...w].reverse().find((N) => N.id !== u.id && We.includes(N.type) && te(N, p.x, p.y, X.z, y, w)), I = $ ? At($, b.x, b.y) : { x: p.x, y: p.y };
        z({ ...l, hoverId: ($ == null ? void 0 : $.id) ?? null }), c((N) => N.map((L) => {
          if (L.id !== u.id) return L;
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
        z({ ...l, curX: p.x, curY: p.y });
        const w = Math.min(l.startX, p.x), u = Math.max(l.startX, p.x), y = Math.min(l.startY, p.y), m = Math.max(l.startY, p.y), b = Math.min(l.screenStartX, S.clientX), $ = Math.max(l.screenStartX, S.clientX), I = Math.min(l.screenStartY, S.clientY), N = Math.max(l.screenStartY, S.clientY), L = /* @__PURE__ */ new Map();
        (k = t.current) == null || k.querySelectorAll("[data-canvas-shape-id]").forEach((A) => {
          const C = A.dataset.canvasShapeId;
          C && L.set(C, A.getBoundingClientRect());
        });
        const F = r.current.filter((A) => {
          const C = L.get(A.id);
          if (C)
            return C.right >= b && C.left <= $ && C.bottom >= I && C.top <= N;
          const T = at(A);
          return T.maxX >= w && T.minX <= u && T.maxY >= y && T.minY <= m;
        }).map((A) => A.id);
        d(h(new Set(F)));
        return;
      }
      if (l.kind === "move") {
        let w = p.x - l.startX, u = p.y - l.startY;
        const y = l.origin, m = (() => {
          let I = 1 / 0, N = 1 / 0, L = -1 / 0, F = -1 / 0;
          return y.forEach((A) => {
            const C = at({ ...A, x: A.x + w, y: A.y + u });
            I = Math.min(I, C.minX), N = Math.min(N, C.minY), L = Math.max(L, C.maxX), F = Math.max(F, C.maxY);
          }), { minX: I, minY: N, maxX: L, maxY: F };
        })(), b = r.current.filter((I) => !y.has(I.id)), $ = Mo(m, b, X.z);
        w += $.dx, u += $.dy, g($.guides), c((I) => I.map((N) => {
          var F;
          const L = y.get(N.id);
          return L ? {
            ...N,
            x: L.x + w,
            y: L.y + u,
            points: (F = L.points) == null ? void 0 : F.map(([A, C]) => [A + w, C + u]),
            ...L.type === "arrow" && L.orthogonalWaypoints ? { orthogonalWaypoints: L.orthogonalWaypoints.map((A) => ({ x: A.x + w, y: A.y + u })) } : {}
          } : N;
        }));
        return;
      }
      if (l.kind === "drawing") {
        if (S.shiftKey) {
          c((w) => w.map((u) => {
            if (u.id !== l.id || !u.points) return u;
            const y = u.points[0];
            return y ? { ...u, points: [y, [p.x, p.y]] } : u;
          }));
          return;
        }
        a.current.push([p.x, p.y]), v.current === null && (v.current = requestAnimationFrame(() => {
          v.current = null;
          const w = a.current;
          if (w.length === 0) return;
          a.current = [];
          const u = o.current.z;
          c((y) => y.map((m) => {
            if (m.id !== l.id || !m.points) return m;
            let b = m.points[m.points.length - 1][0], $ = m.points[m.points.length - 1][1];
            const I = [...m.points];
            for (const [N, L] of w)
              Math.hypot(N - b, L - $) < 1 / u || (I.push([N, L]), b = N, $ = L);
            return I.length === m.points.length ? m : { ...m, points: I };
          }));
        }));
        return;
      }
      if (l.kind === "creating") {
        c((w) => w.map((u) => u.id === l.id ? { ...u, w: p.x - l.startX, h: p.y - l.startY } : u));
        return;
      }
      if (l.kind === "rotate") {
        const w = r.current.find((b) => b.id === l.id);
        if (!w) return;
        const u = wt(w), y = Math.atan2(p.y - u.y, p.x - u.x);
        let m = l.startRotation + (y - l.startAngle);
        S.shiftKey && (m = Math.round(m / (Math.PI / 12)) * (Math.PI / 12)), c((b) => b.map(($) => $.id === l.id ? { ...$, rotation: m } : $));
        return;
      }
      if (l.kind === "resize") {
        const { start: w, handle: u } = l, y = an(w, p.x, p.y);
        c((m) => m.map((b) => {
          if (b.id !== w.id) return b;
          let { x: $, y: I, w: N, h: L } = w;
          if (u.includes("e") && (N = Math.max(20, y.x - w.x)), u.includes("s") && (L = Math.max(20, y.y - w.y)), u.includes("w")) {
            const F = w.x + w.w;
            $ = Math.min(y.x, F - 20), N = F - $;
          }
          if (u.includes("n")) {
            const F = w.y + w.h;
            I = Math.min(y.y, F - 20), L = F - I;
          }
          return { ...b, x: $, y: I, w: N, h: L, manualSize: b.type === "text" ? !0 : b.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", x), () => window.removeEventListener("pointermove", x);
  }, [z, t, h, n, e, d, r, i]);
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
  activeColorRef: f,
  drawStrokeWidth: g,
  camera: z,
  shapes: d,
  selected: h,
  isSpaceDown: i,
  textualTypes: a,
  setCamera: v,
  setShapes: x,
  setEditingId: S,
  setEraserPos: l,
  setGuides: X,
  setAnnouncement: p,
  applyInteraction: M,
  selectNow: k,
  beginHistory: w,
  endHistory: u,
  commit: y,
  onToolChange: m,
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
    activeColorRef: f,
    drawStrokeWidth: g,
    camera: z,
    shapes: d,
    selected: h,
    isSpaceDown: i,
    textualTypes: a,
    setShapes: x,
    setEditingId: S,
    applyInteraction: M,
    selectNow: k,
    beginHistory: w,
    commit: y,
    onToolChange: m,
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
    setEditingId: S,
    setEraserPos: l,
    setGuides: X,
    setAnnouncement: p,
    applyInteraction: M,
    selectNow: k,
    endHistory: u,
    commit: y,
    onToolChange: m,
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
  const s = n || o.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", c = t ? H.gridDark : H.gridLight, f = 40 * r;
  return { cursor: s, gridColor: c, gridSize: f, strokeColorOf: (z) => z.color ? mt[z.color].border : t ? "var(--canvas-slate-200)" : H.ink };
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
  onZoomChange: f,
  onSelectionChange: g,
  shapes: z,
  onShapesChange: d,
  peerCursors: h,
  onLocalCursor: i,
  renderDiagram: a
}, v) {
  var $e, ke;
  const {
    containerRef: x,
    editorRef: S,
    setLocalShapes: l,
    controlled: X,
    shapes: p,
    setShapes: M,
    camera: k,
    setCamera: w,
    cameraRef: u,
    selected: y,
    selectedRef: m,
    editingId: b,
    setEditingId: $,
    editingIdRef: I,
    interaction: N,
    interactionRef: L,
    applyInteraction: F,
    isSpaceDown: A,
    setIsSpaceDown: C,
    guides: T,
    setGuides: E,
    announcement: W,
    setAnnouncement: O,
    showInspectorPalette: K,
    setShowInspectorPalette: V,
    eraserPos: G,
    setEraserPos: B,
    setActiveColor: q,
    activeColorRef: Q,
    installedFontFamilies: ot,
    pointers: J,
    past: tt,
    future: it,
    selectNow: ht,
    commit: dt,
    deleteSelection: Y,
    beginHistory: _,
    endHistory: Z,
    toPage: ct,
    viewportCentre: pt,
    expandToGroups: Et,
    toolRef: re,
    shapesRef: Dt
  } = qo({ boardIdentity: e, tool: o, controlledShapes: z, onShapesChange: d, onDirty: c }), {
    inspectorShape: D,
    onContainerPointerMove: U,
    onContainerPointerLeave: j
  } = Qo({
    containerRef: x,
    camera: k,
    setCamera: w,
    minZoom: Oe,
    maxZoom: _e,
    shapes: p,
    selected: y,
    editingId: b,
    textualTypes: He,
    onZoomChange: f,
    onSelectionChange: g,
    onLocalCursor: i,
    toPage: ct
  }), {
    onPointerDown: et,
    onResizeHandleDown: zt,
    onRotateHandleDown: Xt,
    onConnectHandleDown: ie,
    onBendHandleDown: vn,
    onOrthogonalSegmentHandleDown: pn,
    onArrowEndpointDown: yn
  } = pr({
    ref: v,
    containerRef: x,
    editorRef: S,
    pointers: J,
    interactionRef: L,
    cameraRef: u,
    shapesRef: Dt,
    toolRef: re,
    activeColorRef: Q,
    drawStrokeWidth: r,
    camera: k,
    shapes: p,
    selected: y,
    isSpaceDown: A,
    setCamera: w,
    setShapes: M,
    setEditingId: $,
    setEraserPos: B,
    setGuides: E,
    setAnnouncement: O,
    applyInteraction: F,
    selectNow: ht,
    past: tt,
    future: it,
    beginHistory: _,
    endHistory: Z,
    commit: dt,
    deleteSelection: Y,
    onDirty: c,
    onToolChange: s,
    controlled: X,
    isDarkMode: n,
    minZoom: Oe,
    maxZoom: _e,
    textualTypes: He,
    selectedRef: m,
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
    zoom: k.z
  }), ge = (yt) => {
    const Nn = m.current, Me = I.current, _t = new Set(Nn);
    if (Me && _t.add(Me), _t.size === 0) return;
    const ze = "strokeWidth" in yt, In = Object.keys(yt).every((gt) => gt === "color" || gt === "fillColor" || gt === "strokeWidth");
    if ((D == null ? void 0 : D.type) === "draw" && In) {
      const gt = "color" in yt ? yt.color : void 0, ft = "strokeWidth" in yt ? yt.strokeWidth : void 0;
      dt((Pn) => wr(Pn, _t, {
        ...gt !== void 0 ? { color: gt } : {},
        ...ft !== void 0 ? { strokeWidth: ft } : {}
      }));
      return;
    }
    if (ze) {
      const gt = yt.strokeWidth;
      if (gt !== void 0 && Object.keys(yt).length === 1) {
        dt((ft) => gr(ft, _t, gt));
        return;
      }
    }
    dt((gt) => gt.map((ft) => {
      if (!_t.has(ft.id)) return ft;
      if (!ze) return { ...ft, ...yt };
      switch (ft.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...ft, ...yt };
        case "note":
        case "card":
        case "text":
        case "image":
          return ft;
        case "draw":
          return { ...ft, ...yt };
        default:
          return mn(ft);
      }
    }));
  }, {
    commitEditorHtml: $n,
    applyFormat: kn,
    applyList: Mn,
    onEditorKeyDown: zn,
    applyCustomFontFamily: Xn
  } = Go({
    editorRef: S,
    editingId: b,
    setShapes: M,
    setAnnouncement: O,
    onDirty: c,
    patchSelected: ge
  }), { renderEditor: Sn, renderShapeBody: Yn } = Uo({
    camera: k,
    editingId: b,
    isDarkMode: n,
    editorRef: S,
    commitEditorHtml: $n,
    onEditorKeyDown: zn,
    setShapes: M,
    onDirty: c,
    renderDiagram: a
  }), Cn = N.kind === "marquee" ? N : null, { shapeById: we, visiblePaintOrder: be } = Vo({
    containerRef: x,
    shapesRef: Dt,
    shapes: p,
    camera: k,
    selected: y,
    editingId: b,
    boardIdentity: e
  });
  return /* @__PURE__ */ R(
    "div",
    {
      ref: x,
      onPointerDown: et,
      onPointerMove: U,
      onPointerLeave: j,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": k.x,
      "data-canvas-camera-y": k.y,
      "data-canvas-camera-z": k.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: gn,
        background: n ? H.canvasDark : H.canvasLight,
        backgroundImage: `radial-gradient(${wn} 1px, transparent 1px)`,
        backgroundSize: `${ye}px ${ye}px`,
        backgroundPosition: `${-k.x * k.z}px ${-k.y * k.z}px`
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
            children: W
          }
        ),
        /* @__PURE__ */ P(
          Xo,
          {
            visiblePaintOrder: be,
            selected: y,
            shapeById: we,
            allShapes: Dt.current,
            camera: k,
            interaction: N,
            eraserPos: G,
            guides: T,
            marquee: Cn,
            strokeColorOf: bn
          }
        ),
        /* @__PURE__ */ P(
          _o,
          {
            visiblePaintOrder: be,
            selected: y,
            editingId: b,
            camera: k,
            shapeById: we,
            allShapes: Dt.current,
            peerCursors: h,
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
            shapes: p,
            camera: k,
            canvasSize: { width: (($e = x.current) == null ? void 0 : $e.clientWidth) ?? 380, height: ((ke = x.current) == null ? void 0 : ke.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!b,
            showPalette: K,
            installedFontFamilies: ot,
            setShowPalette: V,
            setActiveColor: q,
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
  mt as CANVAS_COLORS,
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
