import { jsx as N, jsxs as K, Fragment as Ct } from "react/jsx-runtime";
import te, { useRef as et, useState as ct, useLayoutEffect as Kt, useEffect as bt, useMemo as Xt, useCallback as st, useImperativeHandle as rn, forwardRef as an } from "react";
import { p as cn, i as re, k as we, a as ft, v as sn, c as wt, s as ln, b as dn, d as Ft, h as un, C as xn, S as hn } from "./document-C_I4ZYDp.js";
import { Palette as fn, Minus as mn, Plus as vn, ChevronDown as pn, AlignLeft as yn, AlignCenter as gn, AlignRight as wn, List as bn, ListOrdered as $n, Bold as kn, Italic as zn, Underline as Mn } from "lucide-react";
const Xn = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover{background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover{background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', H = Object.freeze({
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
}), be = 12;
function ee(t) {
  return t.map((n, e) => `${e === 0 ? "M" : "L"} ${n.x} ${n.y}`).join(" ");
}
function Dt(t, n, e) {
  return !(Math.min(t.x, e.x) > n.x || n.x > Math.max(t.x, e.x) || Math.min(t.y, e.y) > n.y || n.y > Math.max(t.y, e.y));
}
function Ot(t, n, e) {
  return (n.y - t.y) * (e.x - n.x) - (n.x - t.x) * (e.y - n.y);
}
function _t(t, n, e, o) {
  const u = Ot(t, n, e), l = Ot(t, n, o), m = Ot(e, o, t), w = Ot(e, o, n);
  return Math.abs(u) < 1e-6 && Dt(t, e, n) || Math.abs(l) < 1e-6 && Dt(t, o, n) || Math.abs(m) < 1e-6 && Dt(e, t, o) || Math.abs(w) < 1e-6 && Dt(e, n, o) ? !0 : u > 0 != l > 0 && m > 0 != w > 0;
}
function Sn(t, n, e) {
  const o = Math.min(t.x, n.x), i = Math.max(t.x, n.x), u = Math.min(t.y, n.y), l = Math.max(t.y, n.y);
  if (i < e.minX || o > e.maxX || l < e.minY || u > e.maxY) return !1;
  if (t.x >= e.minX && t.x <= e.maxX && t.y >= e.minY && t.y <= e.maxY || n.x >= e.minX && n.x <= e.maxX && n.y >= e.minY && n.y <= e.maxY) return !0;
  const m = { x: e.minX, y: e.minY }, w = { x: e.maxX, y: e.minY }, M = { x: e.maxX, y: e.maxY }, s = { x: e.minX, y: e.maxY };
  return _t(t, n, m, w) || _t(t, n, w, M) || _t(t, n, M, s) || _t(t, n, s, m);
}
function Yn(t, n) {
  for (let e = 1; e < t.length; e++)
    for (const o of n)
      if (Sn(t[e - 1], t[e], o)) return !0;
  return !1;
}
function ne(t) {
  let n = 0;
  for (let e = 1; e < t.length; e++) n += Math.hypot(t[e].x - t[e - 1].x, t[e].y - t[e - 1].y);
  return n;
}
function ie(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const n = ne(t);
  if (n === 0) return t[0];
  const e = n / 2;
  let o = 0;
  for (let u = 1; u < t.length; u++) {
    const l = Math.hypot(t[u].x - t[u - 1].x, t[u].y - t[u - 1].y);
    if (o + l >= e) {
      const m = (e - o) / l;
      return { x: t[u - 1].x + (t[u].x - t[u - 1].x) * m, y: t[u - 1].y + (t[u].y - t[u - 1].y) * m };
    }
    o += l;
  }
  const i = t[t.length - 1];
  return { x: i.x, y: i.y };
}
function At(t, n) {
  return Math.atan2(n.y - t.y, n.x - t.x);
}
function fe(t, n, e, o) {
  const i = /* @__PURE__ */ new Set([t, n]), u = Math.min(t, n), l = Math.max(t, n), m = be * 1.2;
  for (const w of e) {
    const M = (o === "x" ? w.minX : w.minY) - m, s = (o === "x" ? w.maxX : w.maxY) + m, h = (r) => r >= u - m * 4 && r <= l + m * 4;
    h(M) && i.add(M), h(s) && i.add(s);
  }
  return [...i].sort((w, M) => Math.abs(w - t) - Math.abs(M - t));
}
function $e(t) {
  const n = [];
  for (const e of t) {
    const o = n[n.length - 1];
    (!o || o.x !== e.x || o.y !== e.y) && n.push(e);
  }
  return n;
}
function ke(t) {
  const n = [];
  for (const e of t) {
    const o = n[n.length - 1];
    if (o && o.x === e.x && o.y === e.y) continue;
    const i = n[n.length - 2];
    if (i && o && (i.x === o.x && o.x === e.x || i.y === o.y && o.y === e.y)) {
      n[n.length - 1] = e;
      continue;
    }
    n.push(e);
  }
  return n;
}
function Cn(t, n, e) {
  const o = [t];
  for (const i of [...e, n]) {
    const u = o[o.length - 1];
    if (!u) {
      o.push(i);
      continue;
    }
    if (u.x === i.x || u.y === i.y) {
      o.push(i);
      continue;
    }
    o.push({ x: i.x, y: u.y }, i);
  }
  return ke(o);
}
function Nn(t, n, e) {
  const o = t[n], i = t[n + 1];
  if (!o || !i || !Number.isFinite(e) || o.x !== i.x && o.y !== i.y) return [...t];
  const u = o.x === i.x ? [o, { x: e, y: o.y }, { x: e, y: i.y }, i] : [o, { x: o.x, y: e }, { x: i.x, y: e }, i];
  return ke([
    ...t.slice(0, n),
    ...u,
    ...t.slice(n + 2)
  ]);
}
function Jt(t, n) {
  const e = [], o = [];
  for (const u of t) {
    const l = $e(u);
    l.length < 2 || (Yn(l, n) ? o.push(l) : e.push(l));
  }
  const i = e.length > 0 ? e : o;
  return i.length === 0 ? [] : i.reduce((u, l) => ne(l) < ne(u) ? l : u);
}
function me(t) {
  for (let n = 1; n < t.length; n++) {
    if (t[n - 1].x !== t[n].x) return "x";
    if (t[n - 1].y !== t[n].y) return "y";
  }
}
function Et(t, n, e, o) {
  const i = Math.min(t, n), u = Math.max(t, n), l = Math.max(48, Math.abs(n - t) * 0.35, be * 4);
  if (o === "x") {
    if (e === "e") return u + l;
    if (e === "w") return i - l;
  } else {
    if (e === "s") return u + l;
    if (e === "n") return i - l;
  }
  return t <= n ? i - l : u + l;
}
function In(t, n, e, o, i) {
  const u = (t.x + n.x) / 2, l = (t.y + n.y) / 2;
  if (e === "u") {
    if (o) {
      const w = Et(t.x, n.x, t.side, "x");
      return [t, { x: w, y: t.y }, { x: w, y: n.y }, n];
    }
    const m = Et(t.y, n.y, t.side, "y");
    return [t, { x: t.x, y: m }, { x: n.x, y: m }, n];
  }
  if (e === "zigzag") {
    if (o) {
      const M = Et(t.x, n.x, t.side, "x"), s = Et(t.y, n.y, t.side, "y");
      return i ? [t, { x: M, y: t.y }, { x: M, y: s }, { x: u, y: s }, { x: u, y: n.y }, n] : [t, { x: M, y: t.y }, { x: M, y: s }, { x: n.x, y: s }, n];
    }
    const m = Et(t.y, n.y, t.side, "y"), w = Et(t.x, n.x, t.side, "x");
    return i ? [t, { x: t.x, y: m }, { x: w, y: m }, { x: w, y: n.y }, n] : [t, { x: t.x, y: m }, { x: w, y: m }, { x: w, y: l }, { x: n.x, y: l }, n];
  }
  return [];
}
function ze(t, n, e = [], o = "elbow", i = []) {
  if (i.length > 0) return Cn(t, n, i);
  const u = t.side ?? (Math.abs(n.x - t.x) >= Math.abs(n.y - t.y) ? "e" : "s"), l = n.side ?? (u === "e" || u === "w" ? "w" : "n"), m = u === "e" || u === "w", w = l === "e" || l === "w", M = fe(t.x, n.x, e, "x"), s = fe(t.y, n.y, e, "y"), h = [];
  if (m && w) {
    for (const x of M) h.push([t, { x, y: t.y }, { x, y: n.y }, n]);
    for (const x of s) h.push([t, { x: t.x, y: x }, { x: n.x, y: x }, n]);
  } else if (!m && !w) {
    for (const x of s) h.push([t, { x: t.x, y: x }, { x: n.x, y: x }, n]);
    for (const x of M) h.push([t, { x, y: t.y }, { x, y: n.y }, n]);
  } else if (m) {
    h.push([t, { x: n.x, y: t.y }, n]);
    for (const x of s)
      h.push([t, { x: t.x, y: x }, { x: n.x, y: x }, n]), h.push([t, { x: t.x, y: x }, n]);
    for (const x of M) h.push([t, { x, y: t.y }, { x, y: n.y }, n]);
  } else {
    h.push([t, { x: t.x, y: n.y }, n]);
    for (const x of s)
      h.push([t, { x: t.x, y: x }, n]), h.push([t, { x: t.x, y: x }, { x: n.x, y: x }, n]);
    for (const x of M) h.push([t, { x, y: t.y }, { x, y: n.y }, n]);
  }
  const r = Jt(h, e);
  if (o === "elbow") return r;
  if (o === "reverse") {
    const x = me(r), Y = Jt(h.filter((c) => me(c) !== x), e);
    return Y.length > 1 ? Y : r;
  }
  const a = In(t, n, o, m, w), y = Jt([a], e);
  return y.length > 1 ? y : r;
}
function Me(t) {
  return t.length < 2 ? 0 : At(t[t.length - 2], t[t.length - 1]);
}
function Rt(t) {
  if (t.fillColor)
    try {
      return we(t.fillColor);
    } catch {
    }
  return t.color ? ft[t.color].bg : ft.blue.bg;
}
function Xe(t) {
  return t.color ? ft[t.color].border : "#2563eb";
}
function Nt(t) {
  if (t.textColor)
    try {
      return we(t.textColor);
    } catch {
    }
  return t.color ? ft[t.color].text : "#0f172a";
}
function Se(t, n, e) {
  switch (t) {
    case "triangle":
      return `${n / 2},0 ${n},${e} 0,${e}`;
    case "diamond":
      return `${n / 2},0 ${n},${e / 2} ${n / 2},${e} 0,${e / 2}`;
    case "hexagon": {
      const o = n * 0.25;
      return `${o},0 ${n - o},0 ${n},${e / 2} ${n - o},${e} ${o},${e} 0,${e / 2}`;
    }
    case "star": {
      const o = n / 2, i = e / 2, u = Math.min(n, e) / 2, l = u * 0.4, m = [];
      for (let w = 0; w < 10; w++) {
        const M = Math.PI / 5 * w - Math.PI / 2, s = w % 2 === 0 ? u : l;
        m.push(`${o + s * Math.cos(M)},${i + s * Math.sin(M)}`);
      }
      return m.join(" ");
    }
    default:
      return "";
  }
}
function Ye(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let n = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [i, u] = t[o], [l, m] = t[o + 1];
    n += ` Q ${i} ${u} ${(i + l) / 2} ${(u + m) / 2}`;
  }
  const e = t[t.length - 1];
  return `${n} L ${e[0]} ${e[1]}`;
}
function Mt(t) {
  return t.replace(/[&<>\"]/g, (n) => n === "&" ? "&amp;" : n === "<" ? "&lt;" : n === ">" ? "&gt;" : "&quot;");
}
function Ce(t) {
  const n = document.createElement("template");
  n.innerHTML = t;
  const e = [[]], o = (i, u) => {
    i.childNodes.forEach((l) => {
      if (l.nodeType === Node.TEXT_NODE) {
        const s = l.textContent ?? "";
        s && e[e.length - 1].push({ text: s, ...u });
        return;
      }
      if (l.nodeType !== Node.ELEMENT_NODE) return;
      const m = l;
      if (m.tagName === "BR") {
        e.push([]);
        return;
      }
      const w = { bold: u.bold || m.tagName === "B" || m.tagName === "STRONG", italic: u.italic || m.tagName === "I" || m.tagName === "EM", underline: u.underline || m.tagName === "U" }, M = m.tagName === "DIV" || m.tagName === "P" || m.tagName === "LI";
      M && e[e.length - 1].length > 0 && e.push([]), o(m, w), M && e.push([]);
    });
  };
  return o(n.content, { bold: !1, italic: !1, underline: !1 }), e.filter((i) => i.length > 0);
}
function Vt(t) {
  return t.html ? re(t.html) : t.text ? Mt(t.text).replace(/\n/g, "<br>") : "";
}
function oe(t) {
  if (t)
    try {
      return sn(t);
    } catch {
      return;
    }
}
function Ne(t) {
  try {
    return cn(t);
  } catch {
    return null;
  }
}
function Gt(t) {
  return t.html ? Ce(t.html).map((n) => n.map((e) => e.text).join("")).join(`
`) : t.text ?? "";
}
const Ht = 12;
function St(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function gt(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function rt(t) {
  const n = t.rotation ?? 0, e = St(t);
  if (!n) return e;
  const o = gt(t), i = Math.cos(n), u = Math.sin(n), l = [
    [e.minX, e.minY],
    [e.maxX, e.minY],
    [e.maxX, e.maxY],
    [e.minX, e.maxY]
  ].map(([M, s]) => {
    const h = M - o.x, r = s - o.y;
    return [o.x + h * i - r * u, o.y + h * u + r * i];
  }), m = l.map((M) => M[0]), w = l.map((M) => M[1]);
  return { minX: Math.min(...m), minY: Math.min(...w), maxX: Math.max(...m), maxY: Math.max(...w) };
}
function Ie(t, n, e) {
  const o = t.rotation ?? 0;
  if (!o) return { x: n, y: e };
  const i = gt(t), u = Math.cos(-o), l = Math.sin(-o), m = n - i.x, w = e - i.y;
  return { x: i.x + m * u - w * l, y: i.y + m * l + w * u };
}
function Bt(t, n, e, o, i, u) {
  const l = i - e, m = u - o, w = l * l + m * m, M = w === 0 ? 0 : Math.max(0, Math.min(1, ((t - e) * l + (n - o) * m) / w));
  return Math.hypot(t - (e + M * l), n - (o + M * m));
}
function Ut(t, n, e, o, i, u) {
  const l = 8 / o;
  if (t.type === "arrow") {
    const M = (t.strokeWidth ?? 2.5) / o / 2 + l, s = $t(t, i ?? /* @__PURE__ */ new Map(), u);
    if (s.routing === "orthogonal" && s.pathPoints && s.pathPoints.length > 1) {
      for (let r = 1; r < s.pathPoints.length; r++) {
        const a = s.pathPoints[r - 1], y = s.pathPoints[r];
        if (Bt(n, e, a.x, a.y, y.x, y.y) <= M) return !0;
      }
      return !1;
    }
    if (s.bend === 0) return Bt(n, e, s.start.x, s.start.y, s.end.x, s.end.y) <= M;
    let h = s.start;
    for (let r = 1; r <= 16; r++) {
      const a = Wt(r / 16, s.start, s.control, s.end);
      if (Bt(n, e, h.x, h.y, a.x, a.y) <= M) return !0;
      h = a;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const M = (t.strokeWidth ?? 3) / o / 2 + l;
    for (let s = 1; s < t.points.length; s++) {
      const [h, r] = t.points[s - 1], [a, y] = t.points[s];
      if (Bt(n, e, h, r, a, y) <= M) return !0;
    }
    return !1;
  }
  const m = Ie(t, n, e), w = St(t);
  if (t.type === "frame") {
    const M = m.x >= w.minX - l && m.x <= w.maxX + l && m.y >= w.minY - l && m.y <= w.maxY + l && (m.x <= w.minX + l || m.x >= w.maxX - l || m.y <= w.minY + l || m.y >= w.maxY - l), s = m.x >= w.minX - l && m.x <= w.maxX + l && m.y >= w.minY - 28 / o && m.y <= w.minY;
    return M || s;
  }
  return m.x >= w.minX - l && m.x <= w.maxX + l && m.y >= w.minY - l && m.y <= w.maxY + l;
}
function It(t, n, e) {
  const o = St(t), i = (o.minX + o.maxX) / 2, u = (o.minY + o.maxY) / 2, l = n - i, m = e - u;
  if (l === 0 && m === 0) return { x: i, y: u, side: "e" };
  const w = (o.maxX - o.minX) / 2, M = (o.maxY - o.minY) / 2, s = w === 0 ? 1 / 0 : Math.abs(w / l), h = M === 0 ? 1 / 0 : Math.abs(M / m);
  return s <= h ? { x: i + l * s, y: u + m * s, side: l >= 0 ? "e" : "w" } : { x: i + l * h, y: u + m * h, side: m >= 0 ? "s" : "n" };
}
function Pe(t, n, e, o) {
  const i = /* @__PURE__ */ new Set([n.id, e, o]);
  return t.filter((u) => !i.has(u.id)).map((u) => {
    const l = rt(u);
    return { minX: l.minX - Ht, minY: l.minY - Ht, maxX: l.maxX + Ht, maxY: l.maxY + Ht };
  }).filter((u) => u.maxX > u.minX && u.maxY > u.minY);
}
function $t(t, n, e = []) {
  const o = t.fromId ? n.get(t.fromId) : void 0, i = t.toId ? n.get(t.toId) : void 0;
  let u = { x: t.x, y: t.y }, l = { x: t.x + t.w, y: t.y + t.h };
  if (o && i) {
    const y = gt(o), x = gt(i);
    u = It(o, x.x, x.y), l = It(i, y.x, y.y);
  } else o ? u = It(o, l.x, l.y) : i && (l = It(i, u.x, u.y));
  const m = (u.x + l.x) / 2, w = (u.y + l.y) / 2, M = t.bend ?? 0;
  let s = { x: m, y: w };
  if (M !== 0) {
    const y = l.x - u.x, x = l.y - u.y, Y = Math.hypot(y, x) || 1;
    s = { x: m + -x / Y * M, y: w + y / Y * M };
  }
  const h = !!(o || i), r = t.routing ?? (h ? "orthogonal" : M !== 0 ? "curved" : "straight");
  if (r !== "orthogonal") return { start: u, end: l, control: s, bend: M, routing: r };
  const a = Pe(e, t, o == null ? void 0 : o.id, i == null ? void 0 : i.id);
  return {
    start: u,
    end: l,
    control: s,
    bend: M,
    routing: r,
    pathPoints: $e(ze(u, l, a, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function Wt(t, n, e, o) {
  const i = 1 - t;
  return { x: i * i * n.x + 2 * i * t * e.x + t * t * o.x, y: i * i * n.y + 2 * i * t * e.y + t * t * o.y };
}
function Ee(t, n, e, o, i) {
  const u = [];
  let l = 0;
  for (const m of t) {
    if (m.type !== "draw" || !m.points) {
      if (Ut(m, n, e, i)) continue;
      u.push(m);
      continue;
    }
    const w = [];
    let M = [];
    for (const [h, r] of m.points)
      Math.hypot(h - n, r - e) <= o / i ? (M.length > 1 && w.push(M), M = []) : M.push([h, r]);
    if (M.length > 1 && w.push(M), w.length === 0) continue;
    const s = St(m);
    w.forEach((h) => u.push({ ...m, id: `${m.id}-e${l++}`, points: h, x: s.minX, y: s.minY, w: s.maxX - s.minX, h: s.maxY - s.minY }));
  }
  return u;
}
function Pn(t, n, e) {
  const o = 6 / e;
  let i = null, u = null;
  const l = [], m = [t.minX, (t.minX + t.maxX) / 2, t.maxX], w = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const M of n) {
    const s = rt(M), h = [s.minX, (s.minX + s.maxX) / 2, s.maxX], r = [s.minY, (s.minY + s.maxY) / 2, s.maxY];
    for (const a of m) for (const y of h) {
      const x = y - a;
      Math.abs(x) <= o && (!i || Math.abs(x) < Math.abs(i.delta)) && (i = { delta: x, at: y });
    }
    for (const a of w) for (const y of r) {
      const x = y - a;
      Math.abs(x) <= o && (!u || Math.abs(x) < Math.abs(u.delta)) && (u = { delta: x, at: y });
    }
  }
  return i && l.push({ x1: i.at, y1: t.minY - 1e3, x2: i.at, y2: t.maxY + 1e3 }), u && l.push({ x1: t.minX - 1e3, y1: u.at, x2: t.maxX + 1e3, y2: u.at }), { dx: (i == null ? void 0 : i.delta) ?? 0, dy: (u == null ? void 0 : u.delta) ?? 0, guides: l };
}
const En = 14;
function Fn({
  visiblePaintOrder: t,
  selected: n,
  shapeById: e,
  allShapes: o,
  camera: i,
  interaction: u,
  eraserPos: l,
  guides: m,
  marquee: w,
  strokeColorOf: M
}) {
  return /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ K("g", { transform: `scale(${i.z}) translate(${-i.x}, ${-i.y})`, children: [
    t.map((s) => {
      if (s.type === "draw" && s.points) {
        const b = s.drawMode ?? "pen", k = s.strokeWidth ?? 3;
        return /* @__PURE__ */ N(
          "path",
          {
            "data-canvas-vector-shape-id": s.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": b,
            "data-canvas-stroke-width": k,
            d: Ye(s.points),
            fill: "none",
            stroke: n.has(s.id) ? H.blue : M(s),
            strokeWidth: k / i.z,
            strokeOpacity: b === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          s.id
        );
      }
      if (s.type !== "arrow") return null;
      const h = n.has(s.id) ? H.blue : M(s), r = $t(s, e, o), a = s.strokeWidth ?? 2.5, y = a / i.z, x = Math.max(10, 8 + a * 2), Y = Math.max(4, 2 + a), c = x / i.z, X = Y / i.z, v = r.routing === "orthogonal" && r.pathPoints ? r.pathPoints : null, $ = v && v.length > 1;
      let z, p;
      if ($)
        z = ee(v), p = Me(v);
      else if (r.routing === "curved") {
        z = `M ${r.start.x} ${r.start.y} Q ${r.control.x} ${r.control.y} ${r.end.x} ${r.end.y}`;
        const b = Wt(0.94, r.start, r.control, r.end);
        p = Math.atan2(r.end.y - b.y, r.end.x - b.x);
      } else
        z = `M ${r.start.x} ${r.start.y} L ${r.end.x} ${r.end.y}`, p = Math.atan2(r.end.y - r.start.y, r.end.x - r.start.x);
      const d = $ && v.length >= 2 ? At(v[0], v[1]) : r.routing === "orthogonal" && r.start.side ? r.start.side === "e" ? 0 : r.start.side === "w" ? Math.PI : r.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : At(r.start, r.end), g = s.strokeStyle === "dashed" ? `${8 / i.z} ${5 / i.z}` : s.strokeStyle === "dotted" ? `${1.5 / i.z} ${4 / i.z}` : void 0, f = (b, k, I, C) => b === "dot" ? /* @__PURE__ */ N("circle", { "data-canvas-arrow-dot-radius": Y, cx: k, cy: I, r: X, fill: h }) : b === "none" ? null : /* @__PURE__ */ N(
        "polygon",
        {
          "data-canvas-arrowhead-size": x,
          points: `${k},${I} ${k - c * Math.cos(C - 0.4)},${I - c * Math.sin(C - 0.4)} ${k - c * Math.cos(C + 0.4)},${I - c * Math.sin(C + 0.4)}`,
          fill: h
        }
      );
      return /* @__PURE__ */ K("g", { "data-canvas-vector-shape-id": s.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": r.routing, "data-canvas-stroke-width": a, children: [
        /* @__PURE__ */ N("path", { d: z, fill: "none", stroke: h, strokeWidth: y, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: g }),
        f(s.arrowEnd ?? "arrow", r.end.x, r.end.y, p),
        f(s.arrowStart ?? "none", r.start.x, r.start.y, d + Math.PI)
      ] }, s.id);
    }),
    u.kind === "connect" && u.fromId !== void 0 && u.toX !== void 0 && u.toY !== void 0 && (() => {
      const s = e.get(u.fromId);
      if (!s) return null;
      const h = It(s, u.toX, u.toY), r = u.hoverId ? e.get(u.hoverId) : null, a = r ? It(r, h.x, h.y) : { x: u.toX, y: u.toY }, y = r ? ze(h, a, Pe(o, { id: "__preview" }, s.id, r.id)) : [h, a];
      return /* @__PURE__ */ K("g", { children: [
        /* @__PURE__ */ N("path", { d: ee(y), stroke: H.blue, strokeWidth: 2 / i.z, strokeDasharray: `${5 / i.z} ${4 / i.z}` }),
        r ? /* @__PURE__ */ N("rect", { x: rt(r).minX - 3 / i.z, y: rt(r).minY - 3 / i.z, width: rt(r).maxX - rt(r).minX + 6 / i.z, height: rt(r).maxY - rt(r).minY + 6 / i.z, fill: "none", stroke: H.blue, strokeWidth: 2 / i.z, rx: 6 / i.z }) : /* @__PURE__ */ N("circle", { cx: a.x, cy: a.y, r: 5 / i.z, fill: H.blue })
      ] });
    })(),
    l && /* @__PURE__ */ N("circle", { cx: l.x, cy: l.y, r: En / i.z, fill: H.roseSoft, stroke: H.rose, strokeWidth: 1 / i.z }),
    m.map((s, h) => /* @__PURE__ */ N("line", { x1: s.x1, y1: s.y1, x2: s.x2, y2: s.y2, stroke: H.pink, strokeWidth: 1 / i.z, strokeDasharray: `${4 / i.z} ${4 / i.z}` }, `guide-${h}`)),
    w && /* @__PURE__ */ N("rect", { x: Math.min(w.startX, w.curX), y: Math.min(w.startY, w.curY), width: Math.abs(w.curX - w.startX), height: Math.abs(w.curY - w.startY), fill: H.marqueeFill, stroke: H.blue, strokeWidth: 1 / i.z })
  ] }) });
}
const Ln = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], Tn = /* @__PURE__ */ new Set([
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
]), An = [
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
function qt(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function Fe(t) {
  return Tn.has(t.trim().toLowerCase());
}
function Le(t) {
  const n = qt(t);
  return n ? Fe(n) ? n : `"${n.replace(/"/g, '\\"')}"` : "";
}
function Wn(t) {
  return qt(t).split(",").map((n) => n.trim()).filter(Boolean).map(Le).filter(Boolean).join(", ");
}
function Te(t) {
  return qt(t).split(",").map((n) => n.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Tt(t) {
  return t.split(",").map((n) => qt(n).replace(/^["']|["']$/g, "")).filter(Boolean).filter((n) => !Fe(n));
}
const jt = Array.from(/* @__PURE__ */ new Set([
  ...An,
  ...Tt(wt.sans.stack),
  ...Tt(wt.serif.stack),
  ...Tt(wt.mono.stack),
  ...Tt(wt.gothic.stack),
  ...Tt(wt.korean.stack)
]));
function Dn() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return jt;
  const t = jt.filter((n) => {
    const e = Le(n);
    return e ? document.fonts.check(`12px ${e}`) : !1;
  });
  return t.length > 0 ? t : jt;
}
const On = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, _n = 24, Hn = 28, Ae = 720;
function dt(t) {
  return t.fontSize ?? On[t.type] ?? 14;
}
function ut(t) {
  var n;
  if (!t.fontFamily) return wt.sans.stack;
  if (t.fontFamily === "custom") {
    let e = "";
    try {
      e = Te(ln(t.customFontFamily ?? ""));
    } catch {
    }
    return Wn(e) || wt.sans.stack;
  }
  return ((n = wt[t.fontFamily]) == null ? void 0 : n.stack) ?? wt.sans.stack;
}
function mt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function Bn(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function jn(t) {
  var n, e, o;
  if ((n = t.html) != null && n.includes('<ul data-list-style="dash">')) return "dash";
  if ((e = t.html) != null && e.includes("<ul>")) return "bullet";
  if ((o = t.html) != null && o.includes("<ol>")) return "number";
}
function Kn(t, n) {
  return {
    w: Math.min(Ae, Math.max(_n, Math.ceil(t))),
    h: Math.max(Hn, Math.ceil(n))
  };
}
function Rn(t, n) {
  const e = t.cloneNode(!0);
  e.removeAttribute("id"), e.removeAttribute("role"), e.removeAttribute("aria-label"), e.removeAttribute("aria-multiline"), e.removeAttribute("contenteditable"), e.removeAttribute("data-seeded"), e.innerHTML = re(t.innerHTML), (e.textContent || "").length === 0 && (e.innerHTML = "&nbsp;"), Object.assign(e.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${Ae}px`,
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
    fontSize: `${dt(n)}px`,
    fontFamily: ut(n)
  }), document.body.appendChild(e);
  const o = e.getBoundingClientRect();
  return e.remove(), Kn(o.width, o.height);
}
const Un = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), Vn = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function Gn({
  visiblePaintOrder: t,
  selected: n,
  editingId: e,
  camera: o,
  shapeById: i,
  allShapes: u,
  peerCursors: l,
  isDarkMode: m,
  renderEditor: w,
  renderShapeBody: M,
  setEditingId: s,
  onBendHandleDown: h,
  onOrthogonalSegmentHandleDown: r,
  onResizeHandleDown: a,
  onRotateHandleDown: y,
  onConnectHandleDown: x,
  onArrowEndpointDown: Y
}) {
  return /* @__PURE__ */ K(Ct, { children: [
    /* @__PURE__ */ N("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((c) => {
      if (c.type === "draw") return null;
      if (c.type === "arrow") {
        const $ = $t(c, i, u), z = $.routing === "orthogonal" && $.pathPoints ? ie($.pathPoints) : $.routing === "curved" ? Wt(0.5, $.start, $.control, $.end) : { x: ($.start.x + $.end.x) / 2, y: ($.start.y + $.end.y) / 2 }, p = e === c.id, d = Vt(c), g = n.has(c.id), f = Gt(c).trim(), b = d || (g ? "관계 입력" : "");
        return !b && !p ? null : /* @__PURE__ */ N(te.Fragment, { children: /* @__PURE__ */ N("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: z.x - 90, top: z.y - 18, width: 180, height: 36 }, onDoubleClick: (k) => {
          k.stopPropagation(), s(c.id);
        }, children: (b || p) && /* @__PURE__ */ N(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": f ? `관계 설명: ${f}` : "관계 설명 입력",
            title: p ? void 0 : f ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${m ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: dt(c),
              fontFamily: ut(c),
              maxWidth: "100%",
              minWidth: p ? 120 / o.z : void 0,
              minHeight: p ? 28 / o.z : void 0,
              color: c.textColor
            },
            children: p ? w("text-center whitespace-nowrap") : /* @__PURE__ */ N("span", { dangerouslySetInnerHTML: { __html: b } }, "canvas-view")
          }
        ) }) }, c.id);
      }
      const X = n.has(c.id), v = St(c);
      return /* @__PURE__ */ K(
        "div",
        {
          "data-canvas-shape-id": c.id,
          "data-canvas-shape-type": c.type,
          "data-canvas-selected": X ? "true" : void 0,
          "data-canvas-text-align": mt(c),
          "data-canvas-text-color": c.textColor,
          "data-canvas-font-size": dt(c),
          "data-canvas-font-family": c.fontFamily === "custom" ? c.customFontFamily ?? "custom" : c.fontFamily ?? "sans",
          "data-canvas-manual-size": c.manualSize ? "true" : void 0,
          "data-canvas-group-id": c.groupId,
          "data-canvas-list-kind": jn(c),
          "data-canvas-x": c.x,
          "data-canvas-y": c.y,
          "data-canvas-width": c.w,
          "data-canvas-height": c.h,
          className: "absolute",
          style: { left: v.minX, top: v.minY, width: v.maxX - v.minX, height: v.maxY - v.minY, transform: c.rotation ? `rotate(${c.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: ($) => {
            $.stopPropagation(), Un.has(c.type) && s(c.id);
          },
          children: [
            M(c),
            X && /* @__PURE__ */ K(Ct, { children: [
              /* @__PURE__ */ N("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${H.blue}` } }),
              n.size === 1 && /* @__PURE__ */ K(Ct, { children: [
                ["nw", "ne", "sw", "se"].map(($) => /* @__PURE__ */ N("div", { "data-canvas-resize-handle": $, onPointerDown: (z) => a(z, c, $), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${$}-resize`, left: $.includes("w") ? -5 / o.z : void 0, right: $.includes("e") ? -5 / o.z : void 0, top: $.includes("n") ? -5 / o.z : void 0, bottom: $.includes("s") ? -5 / o.z : void 0 } }, $)),
                /* @__PURE__ */ N("div", { onPointerDown: ($) => y($, c), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                Vn.has(c.type) && ["n", "s", "w", "e"].map(($) => /* @__PURE__ */ N("div", { onPointerDown: (z) => x(z, c), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...$ === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : $ === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : $ === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${$}`))
              ] })
            ] })
          ]
        },
        c.id
      );
    }) }),
    n.size === 1 && u.filter((c) => c.type === "arrow" && n.has(c.id)).map((c) => {
      const X = $t(c, i, u), v = ($, z) => ({
        left: ($.x - o.x) * o.z - z / 2,
        top: ($.y - o.y) * o.z - z / 2
      });
      return /* @__PURE__ */ K(te.Fragment, { children: [
        X.routing === "orthogonal" && X.pathPoints && X.pathPoints.length > 2 ? X.pathPoints.slice(0, -1).map(($, z) => {
          var g;
          const p = (g = X.pathPoints) == null ? void 0 : g[z + 1];
          if (!p) return null;
          const d = { x: ($.x + p.x) / 2, y: ($.y + p.y) / 2 };
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-segment-handle": z, onPointerDown: (f) => r(f, c, z), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...v(d, 12), cursor: $.x === p.x ? "ew-resize" : "ns-resize" } }, `segment-${z}`);
        }) : X.routing === "curved" && /* @__PURE__ */ N("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: ($) => h($, c), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (X.start.x + X.end.x) / 2 * o.z - o.x * o.z - 5, top: (X.start.y + X.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map(($) => {
          const z = $ === "start" ? X.start : X.end;
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-endpoint": $, onPointerDown: (p) => Y(p, c, $), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...v(z, 12), cursor: "grab" } }, $);
        })
      ] }, `arrow-handles-${c.id}`);
    }),
    l == null ? void 0 : l.map((c) => /* @__PURE__ */ K("div", { className: "absolute pointer-events-none z-40", style: { left: (c.x - o.x) * o.z, top: (c.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ N("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ N("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: c.color, stroke: H.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ N("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: c.color }, children: c.name })
    ] }, c.id))
  ] });
}
function We(t) {
  var n;
  return t.type === "card" && ((n = t.category) == null ? void 0 : n.toLowerCase()) === "diagram";
}
function qn(t) {
  const n = ["color"];
  return t.type === "arrow" ? n.push("arrow") : t.type !== "image" && t.type !== "draw" && n.push("text"), n.push("arrange"), We(t) && n.push("diagram"), n;
}
function Lo(t) {
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
const Qn = [2, 4, 6, 8];
function Zn(t) {
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
      return De(t);
  }
}
function Jn(t) {
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
      return De(t);
  }
}
function De(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function to({
  shape: t,
  shapes: n,
  camera: e,
  canvasSize: o,
  isDarkMode: i,
  editing: u,
  showPalette: l,
  installedFontFamilies: m,
  setShowPalette: w,
  setActiveColor: M,
  patchSelected: s,
  applyFormat: h,
  applyList: r,
  applyCustomFontFamily: a
}) {
  var xt, lt;
  const y = i ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", x = t.type === "draw", Y = x ? t.color ? ft[t.color].border : H.ink : Nt(t), c = et(null), [X, v] = ct({ width: 380, height: 260 });
  Kt(() => {
    const S = c.current;
    if (!S) return;
    const _ = () => {
      const at = Math.max(1, Math.ceil(S.getBoundingClientRect().width)), vt = Math.max(1, Math.ceil(S.getBoundingClientRect().height));
      v((Yt) => Yt.width === at && Yt.height === vt ? Yt : { width: at, height: vt });
    };
    if (_(), typeof ResizeObserver > "u") return;
    const q = new ResizeObserver(_);
    return q.observe(S), () => q.disconnect();
  }, [u, m.length, i, t, l]);
  const $ = X.width, z = X.height, p = rt(t), d = (p.minX - e.x) * e.z, g = (p.minY - e.y) * e.z, f = (p.maxX - e.x) * e.z, b = (p.maxY - e.y) * e.z, k = Math.max(8, o.width - $ - 8), I = Math.max(8, o.height - z - 8), C = (S, _) => ({ left: Math.min(Math.max(8, S), k), top: Math.min(Math.max(8, _), I) }), E = [
    C((d + f) / 2 - $ / 2, g - z - 12),
    C((d + f) / 2 - $ / 2, b + 12),
    C((o.width - $) / 2, 12),
    C(d - $ - 12, g + (b - g - z) / 2),
    C(f + 12, g + (b - g - z) / 2)
  ], L = n.map((S) => {
    const _ = rt(S);
    return { left: (_.minX - e.x) * e.z, top: (_.minY - e.y) * e.z, right: (_.maxX - e.x) * e.z, bottom: (_.maxY - e.y) * e.z };
  });
  if (t.type === "arrow") {
    const S = $t(t, new Map(n.map((vt) => [vt.id, vt])), n), _ = S.routing === "orthogonal" && S.pathPoints ? ie(S.pathPoints) : { x: (S.start.x + S.end.x) / 2, y: (S.start.y + S.end.y) / 2 }, q = 180 * e.z, at = 36 * e.z;
    L.push({
      left: (_.x - e.x) * e.z - q / 2,
      top: (_.y - e.y) * e.z - at / 2,
      right: (_.x - e.x) * e.z + q / 2,
      bottom: (_.y - e.y) * e.z + at / 2
    });
  }
  const W = E[0], P = (S, _) => {
    const q = Math.max(0, Math.min(S.left + $, _.right) - Math.max(S.left, _.left)), at = Math.max(0, Math.min(S.top + z, _.bottom) - Math.max(S.top, _.top));
    return q * at;
  }, T = ((xt = E.map((S) => ({
    candidate: S,
    overlap: L.reduce((_, q) => _ + P(S, q), 0),
    distance: Math.hypot(S.left - W.left, S.top - W.top)
  })).sort((S, _) => S.overlap - _.overlap || S.distance - _.distance)[0]) == null ? void 0 : xt.candidate) ?? W, F = dt(t), O = Jn(t), D = Zn(t), U = qn(t), V = t.type === "arrow" ? "arrow" : U[0] ?? "color", [G, j] = ct(V);
  Kt(() => {
    U.includes(G) || j(V);
  }, [V, U, G]);
  const Q = t.type === "arrow" && !!((lt = t.orthogonalWaypoints) != null && lt.length), Z = t.type === "arrow" ? t.arrowStart ?? "none" : "none", nt = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", J = (S, _, q, at, vt = at) => /* @__PURE__ */ N("button", { type: "button", title: at, "aria-label": vt, onClick: q, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${_ ? "bg-blue-600 text-white" : y}`, children: S }), it = (S) => /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: S }), ot = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ K("div", { ref: c, "data-canvas-inspector": x ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${i ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: T.left, top: T.top }, onPointerDown: (S) => {
    S.stopPropagation();
    const _ = S.target instanceof Element ? S.target : null;
    _ != null && _.closest("input, select, textarea") || S.preventDefault();
  }, onClick: (S) => S.stopPropagation(), children: [
    /* @__PURE__ */ N("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: U.map((S) => /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": G === S, onClick: () => j(S), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${G === S ? "bg-blue-600 text-white" : y}`, children: ot[S] }, S)) }),
    /* @__PURE__ */ K("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: G === "color" || x ? void 0 : "none" }, children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: x ? "그리기" : "색상" }),
      /* @__PURE__ */ N("button", { type: "button", title: x ? "그리기 색상 팔레트" : "색상 팔레트", "aria-label": x ? "그리기 색상" : "도형 색상", onClick: () => w((S) => !S), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${i ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ N(fn, { className: "w-4 h-4", style: { color: Y } }) }),
      l && /* @__PURE__ */ K("div", { className: `pointer-events-auto absolute left-0 top-10 z-50 flex items-center gap-1.5 p-2 rounded-xl border shadow-xl ${i ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        dn.map((S) => /* @__PURE__ */ N("button", { type: "button", title: ft[S].label, "aria-label": `색 ${ft[S].label}`, onClick: () => {
          M(S), s({ color: S, fillColor: void 0 }), w(!1);
        }, className: "w-5 h-5 rounded-full border", style: { background: ft[S].bg, borderColor: ft[S].border, outline: t.color === S && !t.fillColor ? `2px solid ${H.blue}` : void 0, outlineOffset: 1 } }, S)),
        !x && /* @__PURE__ */ N("label", { title: "배경 색 (자유 선택)", className: "w-5 h-5 rounded-full border relative overflow-hidden cursor-pointer flex items-center justify-center", style: { background: t.fillColor ?? Rt(t), outline: t.fillColor ? `2px solid ${H.blue}` : void 0, outlineOffset: 1 }, children: /* @__PURE__ */ N("input", { type: "color", value: t.fillColor ?? Rt(t), onChange: (S) => {
          s({ fillColor: S.target.value }), w(!1);
        }, className: "absolute inset-0 opacity-0 cursor-pointer" }) })
      ] })
    ] }),
    G !== "color" && !x && /* @__PURE__ */ K(Ct, { children: [
      /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ K("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: Nt(t), color: H.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ N("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ N("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? Nt(t), onChange: (S) => s({ textColor: S.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ K("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${i ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => s({ fontSize: Math.max(8, F - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${y}`, children: /* @__PURE__ */ N(mn, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ N("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: F }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => s({ fontSize: Math.min(96, F + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${y}`, children: /* @__PURE__ */ N(vn, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ K("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${i ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ N("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (S) => {
            const _ = Bn(S.target.value);
            s(_ === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: _, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${i ? "text-slate-200" : "text-slate-700"}`, children: Ln.map((S) => /* @__PURE__ */ N("option", { value: S, className: i ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: wt[S].label }, S)) }),
          /* @__PURE__ */ N(pn, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ K(Ct, { children: [
          /* @__PURE__ */ N("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (S) => a(S.target.value), onChange: (S) => S.currentTarget.value && a(S.currentTarget.value), onKeyDown: (S) => {
            S.key === "Enter" && (S.preventDefault(), a(S.currentTarget.value));
          }, onDoubleClick: (S) => S.stopPropagation(), onPointerDown: (S) => S.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${i ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ N("datalist", { id: `canvas-font-families-${t.id}`, children: m.map((S) => /* @__PURE__ */ N("option", { value: S }, S)) })
        ] })
      ] }),
      /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${i ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", yn, "왼쪽 정렬"], ["center", gn, "가운데 정렬"], ["right", wn, "오른쪽 정렬"]].map(([S, _, q]) => /* @__PURE__ */ N("button", { type: "button", "aria-label": q, title: q, onClick: () => s({ textAlign: S }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${mt(t) === S ? "bg-blue-600 text-white shadow-sm" : y}`, children: /* @__PURE__ */ N(_, { className: "w-4 h-4" }) }, S)) }),
        u && /* @__PURE__ */ K(Ct, { children: [
          /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", bn, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", $n, "번호 목록"]].map(([S, _, q]) => /* @__PURE__ */ N("button", { type: "button", onClick: () => r(S), "aria-label": q, title: q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${y}`, children: _ ? /* @__PURE__ */ N(_, { className: "w-4 h-4" }) : /* @__PURE__ */ N("span", { className: "text-base leading-none", children: "–" }) }, S)) }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: kn, label: "굵게" }, { cmd: "italic", Icon: zn, label: "기울임" }, { cmd: "underline", Icon: Mn, label: "밑줄" }].map(({ cmd: S, Icon: _, label: q }) => /* @__PURE__ */ N("button", { type: "button", onClick: () => h(S), "aria-label": q, title: q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${y}`, children: /* @__PURE__ */ N(_, { className: "w-4 h-4" }) }, S)) })
        ] })
      ] }),
      (G === "arrange" && t.type === "card" || G === "arrow" && t.type === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${i ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ K(Ct, { children: [
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${i ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ N("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (S) => S.stopPropagation(), onChange: (S) => s({ category: S.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${i ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            it("경로"),
            J("직선", (t.routing ?? "straight") === "straight", () => s({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            J("직각", t.routing === "orthogonal", () => s({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            J("곡선", (t.routing ?? "") === "curved", () => s({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            Q && J("자동", !1, () => s({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            it("선"),
            J("—", (t.strokeStyle ?? "solid") === "solid", () => s({ strokeStyle: "solid" }), "실선"),
            J("- -", t.strokeStyle === "dashed", () => s({ strokeStyle: "dashed" }), "파선"),
            J("···", t.strokeStyle === "dotted", () => s({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            it("시작"),
            J(Z === "none" ? "○" : Z === "dot" ? "●" : "◀", Z !== "none", () => s({ arrowStart: Z === "none" ? "arrow" : Z === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${Z === "none" ? "없음" : Z === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            it("끝"),
            J(nt === "none" ? "○" : nt === "dot" ? "●" : "▶", nt !== "none", () => s({ arrowEnd: nt === "arrow" ? "dot" : nt === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${nt === "none" ? "없음" : nt === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      G === "diagram" && /* @__PURE__ */ N("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${i ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    D && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-none ${i ? "border-slate-700" : "border-slate-100"}`, children: [
      it("굵기"),
      Qn.map((S) => /* @__PURE__ */ N(te.Fragment, { children: J(String(S), O === S, () => s({ strokeWidth: S }), `굵기 ${S}`) }, S))
    ] })
  ] });
}
function eo({
  camera: t,
  editingId: n,
  isDarkMode: e,
  editorRef: o,
  commitEditorHtml: i,
  onEditorKeyDown: u,
  setShapes: l,
  onDirty: m,
  renderDiagram: w
}) {
  const M = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", s = (r, a) => /* @__PURE__ */ N(
    "div",
    {
      ref: o,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": "텍스트 편집",
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onInput: i,
      onBlur: i,
      onPointerDown: (y) => y.stopPropagation(),
      onDoubleClick: (y) => y.stopPropagation(),
      onKeyDown: u,
      className: `${M} ${r}`,
      style: a
    },
    "canvas-editor"
  );
  return { renderEditor: s, renderShapeBody: (r) => {
    const a = ft[r.color ?? "blue"], y = n === r.id, x = Vt(r);
    if (r.type === "frame") {
      const p = r.strokeWidth ?? 2;
      return /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-stroke-width": p,
          className: "w-full h-full rounded",
          style: { border: `${p / t.z}px solid ${e ? H.slate600 : H.slate400}` },
          children: /* @__PURE__ */ N(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: e ? H.slate400 : H.muted
              },
              children: y ? s("", { fontSize: 13 / t.z }) : Gt(r) || "프레임"
            }
          )
        }
      );
    }
    if (r.type === "note")
      return /* @__PURE__ */ N(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: a.bg, borderTop: `6px solid ${a.border}`, color: a.text },
          children: y ? s("font-medium", { color: Nt(r), fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }) : x ? /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Nt(r), fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view") : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Nt(r), fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (r.type === "card") {
      const p = r.cardStyle === "glass";
      return We(r) && w && !y ? /* @__PURE__ */ N("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: w(r) }) : /* @__PURE__ */ K(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: p ? H.glassFill : H.slateCard,
            backdropFilter: p ? "blur(12px)" : void 0,
            WebkitBackdropFilter: p ? "blur(12px)" : void 0,
            border: `1px solid ${p ? H.glassBorder : H.darkBorder}`,
            boxShadow: p ? H.glassShadow : H.cardShadow
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
                  l((b) => b.map((k) => k.id === r.id ? { ...k, category: f } : k)), m();
                },
                onKeyDown: (d) => {
                  d.key === "Enter" && (d.preventDefault(), d.currentTarget.blur());
                },
                children: [
                  "[ ",
                  r.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            y ? s("flex-1 font-medium", { color: r.textColor ?? H.white, fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: r.textColor ?? H.white, fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view"),
            /* @__PURE__ */ K("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              r.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (r.type === "text") {
      const p = e ? "text-slate-100" : "text-slate-900", d = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${p}`,
        style: { color: r.textColor, fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }
      };
      return y ? s(`font-medium ${p}`, d.style) : x ? /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-text-view": !0,
          ...d,
          dangerouslySetInnerHTML: { __html: x }
        },
        "canvas-view"
      ) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, ...d, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (r.type === "image") {
      const p = oe(r.src);
      return p ? /* @__PURE__ */ N(
        "img",
        {
          src: p,
          alt: r.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const Y = Rt(r), c = Xe(r), X = Nt(r);
    if (r.type === "triangle" || r.type === "diamond" || r.type === "hexagon" || r.type === "star") {
      const p = r.strokeWidth ?? 2;
      return /* @__PURE__ */ K("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${r.w} ${r.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ N("polygon", { "data-canvas-stroke-width": p, points: Se(r.type, r.w, r.h), fill: Y, stroke: c, strokeWidth: p / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ N("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: X }, children: y ? s("font-medium", { color: X, fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view") })
      ] });
    }
    const $ = oe(r.src), z = r.type === "rect" || r.type === "ellipse" ? r.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ N(
      "div",
      {
        "data-canvas-stroke-width": z,
        className: `w-full h-full flex items-center justify-center p-3 ${r.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: Y, border: `${z / t.z}px solid ${c}`, color: X },
        children: y ? s("font-medium", { color: X, fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }) : /* @__PURE__ */ K("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }, children: [
          /* @__PURE__ */ N("div", { dangerouslySetInnerHTML: { __html: x } }),
          $ && /* @__PURE__ */ N(
            "a",
            {
              href: $,
              target: "_blank",
              rel: "noreferrer",
              onPointerDown: (p) => p.stopPropagation(),
              className: "block mt-1 text-[11px] underline opacity-70",
              children: "파일 열기"
            }
          )
        ] }, "canvas-view")
      }
    );
  } };
}
function no({
  containerRef: t,
  shapesRef: n,
  shapes: e,
  camera: o,
  selected: i,
  editingId: u,
  boardIdentity: l
}) {
  const [m, w] = ct({ width: 0, height: 0 });
  bt(() => {
    const y = t.current;
    if (!y) return;
    let x = -1, Y = -1;
    const c = (v = y.clientWidth, $ = y.clientHeight) => {
      v === x && $ === Y || (x = v, Y = $, w({ width: v, height: $ }));
    };
    if (c(), typeof ResizeObserver < "u") {
      const v = new ResizeObserver(($) => {
        var p;
        const z = (p = $[0]) == null ? void 0 : p.contentRect;
        c((z == null ? void 0 : z.width) ?? y.clientWidth, (z == null ? void 0 : z.height) ?? y.clientHeight);
      });
      return v.observe(y), () => v.disconnect();
    }
    const X = () => c();
    return window.addEventListener("resize", X), () => window.removeEventListener("resize", X);
  }, [l, t]);
  const M = Xt(() => new Map(e.map((y) => [y.id, y])), [e]), s = Xt(
    () => [...e].sort((y, x) => (y.type === "frame" ? -1 : 0) - (x.type === "frame" ? -1 : 0)),
    [e]
  ), h = Xt(() => {
    if (!t.current || m.width <= 0 || m.height <= 0) return null;
    const y = 200 / o.z;
    return {
      minX: o.x - y,
      minY: o.y - y,
      maxX: o.x + m.width / o.z + y,
      maxY: o.y + m.height / o.z + y
    };
  }, [o, t, m]), r = st((y) => {
    if (!h) return !1;
    if (y.id === u || i.has(y.id)) return !0;
    if (y.type === "arrow") {
      const Y = $t(y, M, n.current), X = (Y.routing === "orthogonal" ? Y.pathPoints : null) ?? [Y.start, Y.end], v = Math.min(...X.map((d) => d.x)), $ = Math.max(...X.map((d) => d.x)), z = Math.min(...X.map((d) => d.y)), p = Math.max(...X.map((d) => d.y));
      return $ >= h.minX && v <= h.maxX && p >= h.minY && z <= h.maxY;
    }
    const x = rt(y);
    return x.maxX >= h.minX && x.minX <= h.maxX && x.maxY >= h.minY && x.minY <= h.maxY;
  }, [u, i, M, n, h]), a = Xt(
    () => s.filter(r),
    [r, s]
  );
  return { shapeById: M, visiblePaintOrder: a };
}
function oo({
  editorRef: t,
  editingId: n,
  setShapes: e,
  setAnnouncement: o,
  onDirty: i,
  patchSelected: u
}) {
  const l = st(() => {
    const a = t.current;
    if (!a || !n) return;
    let y;
    try {
      y = re(a.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const x = a.scrollHeight;
    e((Y) => Y.map((c) => {
      if (c.id !== n) return c;
      const X = { ...c, html: y, text: void 0 };
      if (c.type === "text")
        return c.manualSize ? X : { ...X, ...Rn(a, c) };
      if (c.type === "arrow") return X;
      const v = c.type === "note" ? 32 : c.type === "card" ? 96 : (
        // category header + type footer
        (c.type === "frame", 24)
      ), $ = Math.max(c.h, x + v);
      return { ...X, h: $ };
    })), i();
  }, [n, i]), m = (a) => {
    var y;
    (y = t.current) == null || y.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(a), l();
  }, w = () => {
    var Y;
    const a = (Y = window.getSelection()) == null ? void 0 : Y.anchorNode, y = a instanceof Element ? a : a == null ? void 0 : a.parentElement, x = y == null ? void 0 : y.closest("ul, ol");
    return x instanceof HTMLElement ? x : null;
  }, M = (a, y, x) => {
    const Y = document.createElement(y);
    for (; a.firstChild; ) Y.append(a.firstChild);
    return a.replaceWith(Y), Y;
  }, s = (a) => {
    const y = t.current;
    if (!y) return;
    y.focus();
    const x = w();
    if (a === "number")
      if ((x == null ? void 0 : x.tagName) === "OL")
        x.removeAttribute("data-list-style");
      else if ((x == null ? void 0 : x.tagName) === "UL")
        M(x, "ol");
      else {
        document.execCommand("insertOrderedList");
        const Y = w();
        Y == null || Y.removeAttribute("data-list-style");
      }
    else if ((x == null ? void 0 : x.tagName) === "UL") {
      const Y = x.dataset.listStyle;
      a === Y ? document.execCommand("insertUnorderedList") : x.dataset.listStyle = a;
    } else {
      (x == null ? void 0 : x.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const Y = w();
      Y && (Y.dataset.listStyle = a);
    }
    l();
  };
  return { commitEditorHtml: l, applyFormat: m, applyList: s, onEditorKeyDown: (a) => {
    if (a.key === "Tab") {
      a.preventDefault(), document.execCommand(a.shiftKey ? "outdent" : "indent"), l();
      return;
    }
    if (a.key === " ") {
      const y = window.getSelection();
      if (y && y.isCollapsed && y.anchorNode) {
        const x = y.anchorNode, Y = x.textContent || "", c = y.anchorOffset, X = Y.slice(0, c).trim();
        if (!w()) {
          if (X === "-" || X === "–") {
            a.preventDefault(), x.textContent = Y.slice(c), s("dash");
            return;
          }
          if (X === "*") {
            a.preventDefault(), x.textContent = Y.slice(c), s("bullet");
            return;
          }
          if (X === "1.") {
            a.preventDefault(), x.textContent = Y.slice(c), s("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (a) => {
    const y = Te(a);
    if (!y) {
      u({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    u({
      fontFamily: "custom",
      customFontFamily: y
    });
  } };
}
function ro({
  boardIdentity: t,
  tool: n,
  controlledShapes: e,
  onShapesChange: o,
  onDirty: i
}) {
  const u = et(null), l = et(null), [m, w] = ct([]), M = e !== void 0 && o !== void 0, s = et(/* @__PURE__ */ new WeakMap()), h = Xt(() => {
    const A = s.current;
    return (M ? e ?? [] : m).map((R) => {
      let B = A.get(R);
      return B === void 0 && (B = Ne(R), A.set(R, B)), B;
    }).filter((R) => R !== null);
  }, [M, e, m]), r = et(o);
  r.current = o;
  const a = st((A) => {
    const R = r.current;
    if (!R) {
      w(A);
      return;
    }
    R(typeof A == "function" ? A : () => A);
  }, []), [y, x] = ct({ x: -400, y: -300, z: 1 }), [Y, c] = ct(/* @__PURE__ */ new Set()), [X, v] = ct(null), [$, z] = ct({ kind: "none" }), [p, d] = ct(!1), [g, f] = ct([]), [b, k] = ct(""), [I, C] = ct(!1), [E, L] = ct(null), [W, P] = ct("blue"), [T, F] = ct(jt), O = et(W);
  O.current = W;
  const D = et([]), U = et([]), V = et(null), G = et(/* @__PURE__ */ new Map()), j = et(h), Q = et(y), Z = et(n), nt = et(Y), J = et(X);
  j.current = h, Q.current = y, Z.current = n, nt.current = Y, J.current = X;
  const it = et({ kind: "none" }), ot = st((A) => {
    it.current = A, z(A);
  }, []), xt = st((A) => {
    nt.current = A, c(A);
  }, []);
  Kt(() => {
    var R;
    const A = /* @__PURE__ */ new Set();
    nt.current = A, J.current = null, G.current.clear(), D.current = [], U.current = [], V.current = null, ot({ kind: "none" }), c(A), v(null), d(!1), f([]), L(null), k(""), (R = u.current) == null || R.focus();
  }, [ot, t]), bt(() => {
    let A = !1;
    const R = () => {
      const tt = Dn();
      A || F(tt);
    };
    if (R(), typeof document > "u" || !("fonts" in document)) return;
    const B = () => R();
    return document.fonts.addEventListener("loadingdone", B), () => {
      A = !0, document.fonts.removeEventListener("loadingdone", B);
    };
  }, [t]);
  const S = (X ? h.find((A) => A.id === X) : void 0) !== void 0;
  Kt(() => {
    if (!X || !S) return;
    const A = () => {
      const B = l.current, tt = j.current.find((Zt) => Zt.id === X);
      if (!B || !tt || (B.dataset.seeded !== X && (B.innerHTML = Vt(tt), B.dataset.seeded = X), document.activeElement === B)) return;
      B.focus();
      const kt = document.createRange();
      kt.selectNodeContents(B), kt.collapse(!1);
      const zt = window.getSelection();
      zt == null || zt.removeAllRanges(), zt == null || zt.addRange(kt);
    };
    A();
    const R = requestAnimationFrame(A);
    return () => cancelAnimationFrame(R);
  }, [X, S]);
  const _ = st((A) => {
    a((R) => {
      const B = typeof A == "function" ? A(R) : A;
      return D.current.push(R), D.current.length > 100 && D.current.shift(), U.current = [], B;
    }), i();
  }, [i]), q = st((A) => A.size === 0 ? !1 : (_((R) => R.filter((B) => A.has(B.id) ? !1 : B.type !== "arrow" ? !0 : !(B.fromId && A.has(B.fromId)) && !(B.toId && A.has(B.toId)))), xt(/* @__PURE__ */ new Set()), k(`${A.size}개 삭제됨`), !0), [_, xt]), at = st(() => {
    V.current = j.current;
  }, []), vt = st(() => {
    const A = V.current;
    V.current = null, !(!A || A === j.current) && (D.current.push(A), D.current.length > 100 && D.current.shift(), U.current = [], i());
  }, [i]), Yt = st((A, R) => {
    var kt;
    const B = (kt = u.current) == null ? void 0 : kt.getBoundingClientRect(), tt = Q.current;
    return B ? { x: (A - B.left) / tt.z + tt.x, y: (R - B.top) / tt.z + tt.y } : { x: 0, y: 0 };
  }, []), Qt = st(() => {
    var B;
    const A = (B = u.current) == null ? void 0 : B.getBoundingClientRect(), R = Q.current;
    return A ? { x: R.x + A.width / 2 / R.z, y: R.y + A.height / 2 / R.z } : { x: 0, y: 0 };
  }, []), Pt = st((A) => {
    const R = new Set(j.current.filter((tt) => A.has(tt.id) && tt.groupId).map((tt) => tt.groupId));
    if (R.size === 0) return A;
    const B = new Set(A);
    for (const tt of j.current) tt.groupId && R.has(tt.groupId) && B.add(tt.id);
    return B;
  }, []);
  return {
    containerRef: u,
    editorRef: l,
    localShapes: m,
    setLocalShapes: w,
    controlled: M,
    shapes: h,
    setShapes: a,
    camera: y,
    setCamera: x,
    cameraRef: Q,
    selected: Y,
    setSelected: c,
    selectedRef: nt,
    editingId: X,
    setEditingId: v,
    editingIdRef: J,
    interaction: $,
    interactionRef: it,
    applyInteraction: ot,
    isSpaceDown: p,
    setIsSpaceDown: d,
    guides: g,
    setGuides: f,
    announcement: b,
    setAnnouncement: k,
    showInspectorPalette: I,
    setShowInspectorPalette: C,
    eraserPos: E,
    setEraserPos: L,
    activeColor: W,
    setActiveColor: P,
    activeColorRef: O,
    installedFontFamilies: T,
    pointers: G,
    past: D,
    future: U,
    selectNow: xt,
    commit: _,
    deleteSelection: q,
    beginHistory: at,
    endHistory: vt,
    toPage: Yt,
    viewportCentre: Qt,
    expandToGroups: Pt,
    toolRef: Z,
    shapesRef: j
  };
}
function io({
  containerRef: t,
  camera: n,
  setCamera: e,
  minZoom: o,
  maxZoom: i,
  shapes: u,
  selected: l,
  editingId: m,
  textualTypes: w,
  onZoomChange: M,
  onSelectionChange: s,
  onLocalCursor: h,
  toPage: r
}) {
  bt(() => {
    M == null || M(n.z);
  }, [n.z, M]), bt(() => {
    const X = t.current;
    if (!X) return;
    const v = ($) => {
      if ($.preventDefault(), $.ctrlKey || $.metaKey) {
        const z = X.getBoundingClientRect();
        e((p) => {
          const d = Math.min(i, Math.max(o, p.z * Math.exp(-$.deltaY * 0.01))), g = $.clientX - z.left, f = $.clientY - z.top;
          return { x: p.x + g / p.z - g / d, y: p.y + f / p.z - f / d, z: d };
        });
      } else
        e((z) => ({ ...z, x: z.x + $.deltaX / z.z, y: z.y + $.deltaY / z.z }));
    };
    return X.addEventListener("wheel", v, { passive: !1 }), () => X.removeEventListener("wheel", v);
  }, [t, i, o, e]);
  const a = Xt(() => {
    const X = u.filter((v) => l.has(v.id));
    return {
      count: X.length,
      canGroup: X.length > 1,
      canUngroup: X.some((v) => !!v.groupId),
      isTextual: X.length === 1 && w.includes(X[0].type),
      selectedIds: X.map((v) => v.id)
    };
  }, [l, u, w]);
  bt(() => {
    s == null || s(a);
  }, [s, a]);
  const y = Xt(() => {
    if (m) {
      const $ = u.find((z) => z.id === m);
      return $ && $.type !== "image" && $.type !== "draw" ? $ : null;
    }
    const X = u.filter(($) => l.has($.id));
    if (X.length > 1 && X.every(($) => $.type === "draw")) return X[0] ?? null;
    if (X.length !== 1) return null;
    const v = X[0];
    return v && v.type !== "image" ? v : null;
  }, [m, l, u]), x = et(0);
  return { selectionInfo: a, inspectorShape: y, onContainerPointerMove: h ? (X) => {
    const v = performance.now();
    v - x.current < 60 || (x.current = v, h(r(X.clientX, X.clientY)));
  } : void 0, onContainerPointerLeave: h ? () => h(null) : void 0 };
}
function ao(t, n) {
  if (t.length === 0) return null;
  let e = 1 / 0, o = 1 / 0, i = -1 / 0, u = -1 / 0;
  for (const h of t) {
    const r = rt(h);
    e = Math.min(e, r.minX), o = Math.min(o, r.minY), i = Math.max(i, r.maxX), u = Math.max(u, r.maxY);
  }
  const l = 40, m = i - e + l * 2, w = u - o + l * 2;
  if (!Number.isFinite(m) || !Number.isFinite(w) || m > Ft.maxExportDimension || w > Ft.maxExportDimension || m * w > Ft.maxExportPixels) return null;
  const M = (h, r, a, y, x) => {
    const Y = h.fontSize ?? a, c = ut(h), X = Ce(Vt(h));
    if (X.length === 0) return "";
    const v = St(h), $ = h.textAlign === "right" ? "end" : h.textAlign === "center" ? "middle" : h.textAlign === "left" ? "start" : x, z = $ === "end" ? v.maxX - 12 : $ === "middle" ? (v.minX + v.maxX) / 2 : v.minX + 12, p = v.minY + Y + 12;
    return X.map((d, g) => {
      const f = d.map((b) => `<tspan style="${[
        b.bold ? "font-weight:700" : `font-weight:${y}`,
        b.italic ? "font-style:italic" : "",
        b.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Mt(b.text)}</tspan>`).join("");
      return `<text x="${z}" y="${p + g * Y * 1.4}" font-family="${Mt(c)}" font-size="${Y}" fill="${r}" text-anchor="${$}">${f}</text>`;
    }).join("");
  }, s = t.map((h) => {
    const r = ft[h.color ?? "blue"], a = St(h), y = gt(h), x = h.rotation ? ` transform="rotate(${h.rotation * 180 / Math.PI} ${y.x} ${y.y})"` : "", Y = h.color ? ft[h.color].border : H.ink;
    if (h.type === "draw" && h.points) {
      const d = (h.drawMode ?? "pen") === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${Ye(h.points)}" fill="none" stroke="${Y}" stroke-width="${h.strokeWidth ?? 3}"${d} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (h.type === "arrow") {
      const d = $t(h, new Map(t.map((D) => [D.id, D])), t), g = h.strokeWidth ?? 2.5, f = Math.max(10, 8 + g * 2), b = Math.max(4, 2 + g), k = d.routing === "orthogonal" && d.pathPoints ? d.pathPoints : null, I = k && k.length > 1, C = I ? ee(k) : d.routing === "curved" ? `M ${d.start.x} ${d.start.y} Q ${d.control.x} ${d.control.y} ${d.end.x} ${d.end.y}` : `M ${d.start.x} ${d.start.y} L ${d.end.x} ${d.end.y}`, E = I ? Me(k) : d.routing === "curved" ? (() => {
        const D = Wt(0.94, d.start, d.control, d.end);
        return Math.atan2(d.end.y - D.y, d.end.x - D.x);
      })() : Math.atan2(d.end.y - d.start.y, d.end.x - d.start.x), L = I ? At(k[0], k[1]) : d.routing === "orthogonal" && d.start.side ? d.start.side === "e" ? 0 : d.start.side === "w" ? Math.PI : d.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : At(d.start, d.end), W = h.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : h.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", P = (D, U, V, G) => {
        if (D === "dot") return `<circle cx="${U}" cy="${V}" r="${b}" fill="${Y}"/>`;
        if (D === "none") return "";
        const j = `${U - f * Math.cos(G - 0.4)},${V - f * Math.sin(G - 0.4)}`, Q = `${U - f * Math.cos(G + 0.4)},${V - f * Math.sin(G + 0.4)}`;
        return `<polygon points="${U},${V} ${j} ${Q}" fill="${Y}"/>`;
      }, T = d.routing === "orthogonal" && d.pathPoints ? ie(d.pathPoints) : d.bend === 0 ? { x: (d.start.x + d.end.x) / 2, y: (d.start.y + d.end.y) / 2 } : Wt(0.5, d.start, d.control, d.end), F = Gt(h), O = F ? `<text x="${T.x}" y="${T.y - 6}" text-anchor="middle" font-family="${Mt(ut(h))}" font-size="${h.fontSize ?? 12}" fill="${Y}">${Mt(F)}</text>` : "";
      return `<path d="${C}" fill="none" stroke="${Y}" stroke-width="${g}" stroke-linecap="round" stroke-linejoin="round"${W}/>` + P(h.arrowEnd ?? "arrow", d.end.x, d.end.y, E) + P(h.arrowStart ?? "none", d.start.x, d.start.y, L + Math.PI) + O;
    }
    if (h.type === "image" && h.src) {
      const d = oe(h.src);
      return d ? `<image href="${Mt(d)}" x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}"${x}/>` : "";
    }
    if (h.type === "frame")
      return `<g${x}><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" fill="none" stroke="${H.slate400}" stroke-width="${h.strokeWidth ?? 2}" rx="4"/><text x="${a.minX}" y="${a.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${H.muted}">${Mt(h.text ?? "프레임")}</text></g>`;
    if (h.type === "note")
      return `<g${x}><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" fill="${r.bg}"/><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="6" fill="${r.border}"/>` + M(h, r.text, 14, "600", "start") + "</g>";
    if (h.type === "card") {
      const d = h.cardStyle === "glass";
      return `<g${x}><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" rx="16" fill="${d ? H.glassFill : H.slateCard}"/><text x="${a.minX + 16}" y="${a.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${H.slate400}">[ ${Mt(h.category ?? "ENTITY")} ]</text>` + M(h, H.white, 16, "700", "start") + "</g>";
    }
    const c = h.type === "rect" || h.type === "ellipse" || h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star" ? h.strokeWidth ?? 2 : 2, X = Rt(h), v = Xe(h), $ = h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star", z = $ ? Se(h.type, a.maxX - a.minX, a.maxY - a.minY).split(" ").map((d) => {
      const [g, f] = d.split(",").map(Number);
      return `${g + a.minX},${f + a.minY}`;
    }).join(" ") : "", p = h.type === "ellipse" ? `<ellipse cx="${(a.minX + a.maxX) / 2}" cy="${(a.minY + a.maxY) / 2}" rx="${(a.maxX - a.minX) / 2}" ry="${(a.maxY - a.minY) / 2}" fill="${X}" stroke="${v}" stroke-width="${c}"/>` : $ ? `<polygon points="${z}" fill="${X}" stroke="${v}" stroke-width="${c}" stroke-linejoin="round"/>` : `<rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" rx="12" fill="${X}" stroke="${v}" stroke-width="${c}"/>`;
    return `<g${x}>${p}${M(h, r.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${m}" height="${w}" viewBox="${e - l} ${o - l} ${m} ${w}"><rect x="${e - l}" y="${o - l}" width="${m}" height="${w}" fill="${n ? H.canvasDark : H.canvasLight}"/>` + s + "</svg>";
}
async function co(t) {
  const n = t();
  if (!n) return null;
  const e = /width="([\d.]+)" height="([\d.]+)"/.exec(n), o = Math.ceil(Number((e == null ? void 0 : e[1]) ?? 1200)), i = Math.ceil(Number((e == null ? void 0 : e[2]) ?? 800)), u = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`, l = new Image();
  l.crossOrigin = "anonymous";
  try {
    await new Promise((r, a) => {
      l.onload = () => r(), l.onerror = () => a(new Error("svg rasterise failed")), l.src = u;
    });
  } catch {
    return null;
  }
  const m = 2, w = o * m, M = i * m;
  if (!Number.isSafeInteger(w) || !Number.isSafeInteger(M) || w > Ft.maxExportDimension || M > Ft.maxExportDimension || w * M > Ft.maxExportPixels) return null;
  const s = document.createElement("canvas");
  s.width = w, s.height = M;
  const h = s.getContext("2d");
  return h ? (h.scale(m, m), h.drawImage(l, 0, 0), new Promise((r) => {
    try {
      s.toBlob((a) => r(a), "image/png");
    } catch {
      r(null);
    }
  })) : null;
}
function so(t, n, e) {
  if (t.length < 2) return;
  const o = t.filter(
    (r) => r.type !== "draw" && r.type !== "arrow" && r.type !== "frame" && r.type !== "image"
  );
  if (o.length < 2) return;
  const i = o.map((r, a) => ({
    id: r.id,
    i: a,
    x: gt(r).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: gt(r).y,
    vx: 0,
    vy: 0
  }));
  for (let r = 0; r < i.length; r++)
    for (let a = 0; a < r; a++)
      if (Math.abs(i[r].x - i[a].x) < 1 && Math.abs(i[r].y - i[a].y) < 1) {
        const y = 2 * Math.PI * r / i.length;
        i[r].x += Math.cos(y) * 10, i[r].y += Math.sin(y) * 10;
        break;
      }
  const u = new Map(i.map((r) => [r.id, r])), l = [];
  for (const r of t) {
    if (r.type !== "arrow") continue;
    const a = r.fromId ? u.get(r.fromId) : null, y = r.toId ? u.get(r.toId) : null;
    a && y && l.push([a, y]);
  }
  const m = 220, w = m * m, M = 80;
  let s = 400;
  const h = s / M;
  for (let r = 0; r < M; r++) {
    for (let a = 0; a < i.length; a++)
      i[a].vx = 0, i[a].vy = 0;
    for (let a = 0; a < i.length; a++)
      for (let y = a + 1; y < i.length; y++) {
        const x = i[a], Y = i[y], c = x.x - Y.x, X = x.y - Y.y, v = Math.hypot(c, X) || 0.01, $ = w / v, z = c / v * $, p = X / v * $;
        x.vx += z, x.vy += p, Y.vx -= z, Y.vy -= p;
      }
    for (const [a, y] of l) {
      const x = a.x - y.x, Y = a.y - y.y, c = Math.hypot(x, Y) || 0.01, X = c * c / m, v = x / c * X, $ = Y / c * X;
      a.vx -= v, a.vy -= $, y.vx += v, y.vy += $;
    }
    for (const a of i) {
      const y = Math.hypot(a.vx, a.vy) || 0.01, x = Math.min(y, s);
      a.x += a.vx / y * x, a.y += a.vy / y * x;
    }
    s = Math.max(0.5, s - h);
  }
  n((r) => r.map((a) => {
    const y = u.get(a.id);
    return y ? { ...a, x: y.x - a.w / 2, y: y.y - a.h / 2 } : a;
  })), e();
}
function lo(t, {
  controlled: n,
  past: e,
  future: o,
  setLocalShapes: i,
  setCamera: u,
  selectNow: l,
  setEditingId: m
}) {
  let w;
  try {
    w = un(t);
  } catch {
    return;
  }
  n || (e.current = [], o.current = [], i(w.shapes.map(uo))), u(w.camera), l(/* @__PURE__ */ new Set()), m(null);
}
function uo(t) {
  var n;
  switch (t.type) {
    case "arrow":
      return {
        ...t,
        orthogonalWaypoints: (n = t.orthogonalWaypoints) == null ? void 0 : n.map((e) => ({ x: e.x, y: e.y }))
      };
    case "draw":
      return {
        ...t,
        points: t.points.map(([e, o]) => [e, o])
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
      return xo(t);
  }
}
function xo(t) {
  throw new xn(`Unhandled canvas shape type: ${String(t)}.`);
}
function ho({
  ref: t,
  containerRef: n,
  shapesRef: e,
  cameraRef: o,
  selectedRef: i,
  past: u,
  future: l,
  controlled: m,
  isDarkMode: w,
  minZoom: M,
  maxZoom: s,
  onToolChange: h,
  onDirty: r,
  commit: a,
  deleteSelection: y,
  selectNow: x,
  viewportCentre: Y,
  setShapes: c,
  setLocalShapes: X,
  setCamera: v,
  setEditingId: $,
  setAnnouncement: z,
  createId: p
}) {
  const d = st((f) => {
    const b = Y(), k = Ne({
      id: p(),
      x: f.x ?? b.x - f.w / 2,
      y: f.y ?? b.y - f.h / 2,
      ...f
    });
    if (!k) throw new Error("Canvas could not create a valid shape.");
    return a((I) => [...I, k]), x(/* @__PURE__ */ new Set([k.id])), h("select"), z(`${k.type} 추가됨`), k;
  }, [a, p, h, x, z, Y]), g = st(() => ao(e.current, w), [w, e]);
  rn(t, () => ({
    addNote: (f) => {
      const b = d({ type: "note", w: 180, h: 180, color: f, text: "" });
      $(b.id);
    },
    addCard: (f, b, k, I) => {
      d({ type: "card", w: 260, h: 150, text: f, category: b, cardStyle: k, color: I });
    },
    addText: () => {
      const f = d({ type: "text", w: 220, h: 44, text: "" });
      $(f.id);
    },
    addShape: (f, b, k) => {
      d({
        type: f,
        w: f === "ellipse" ? 220 : 200,
        h: f === "ellipse" ? 110 : 140,
        color: b,
        text: k ?? ""
      });
    },
    addArrow: () => {
      const f = Y(), b = { id: p(), type: "arrow", x: f.x - 140, y: f.y, w: 280, h: 0 };
      a((k) => [...k, b]), x(/* @__PURE__ */ new Set([b.id])), h("select");
    },
    addImage: (f, b, k, I) => {
      d({ type: "image", w: k, h: I, src: f, fileName: b });
    },
    addFileCard: (f, b, k) => {
      d({ type: "rect", w: 260, h: 120, color: "purple", text: k, src: b, fileName: f });
    },
    updateShapeText: (f, b) => {
      a((k) => k.map((I) => I.id === f ? { ...I, text: b, html: void 0 } : I));
    },
    setTool: h,
    undo: () => {
      const f = u.current.pop();
      f && (l.current.push(e.current), c(f), x(/* @__PURE__ */ new Set()), $(null), r(), z("실행 취소"));
    },
    redo: () => {
      const f = l.current.pop();
      f && (u.current.push(e.current), c(f), x(/* @__PURE__ */ new Set()), $(null), r(), z("다시 실행"));
    },
    deleteSelected: () => {
      y(i.current);
    },
    duplicateSelected: () => {
      var I;
      const f = i.current;
      if (f.size === 0) return;
      const b = [], k = /* @__PURE__ */ new Map();
      for (const C of e.current) {
        if (!f.has(C.id)) continue;
        let E = C.groupId;
        E && (k.has(E) || k.set(E, p("g")), E = k.get(E)), b.push({
          ...C,
          id: p(),
          x: C.x + 24,
          y: C.y + 24,
          groupId: E,
          points: (I = C.points) == null ? void 0 : I.map(([L, W]) => [L + 24, W + 24]),
          orthogonalWaypoints: C.type === "arrow" && C.orthogonalWaypoints ? C.orthogonalWaypoints.map((L) => ({ x: L.x + 24, y: L.y + 24 })) : void 0
        });
      }
      a((C) => [...C, ...b]), x(new Set(b.map((C) => C.id))), z(`${b.length}개 복제됨`);
    },
    group: () => {
      var k;
      const f = i.current;
      if (f.size < 2) return;
      const b = p("g");
      a((I) => I.map((C) => f.has(C.id) ? { ...C, groupId: b } : C)), z(`${f.size}개 그룹화됨`), (k = n.current) == null || k.focus();
    },
    ungroup: () => {
      var b;
      const f = i.current;
      f.size !== 0 && (a((k) => k.map((I) => f.has(I.id) ? { ...I, groupId: void 0 } : I)), z("그룹 해제됨"), (b = n.current) == null || b.focus());
    },
    zoomBy: (f) => {
      v((b) => {
        var L;
        const k = (L = n.current) == null ? void 0 : L.getBoundingClientRect(), I = Math.min(s, Math.max(M, b.z * f));
        if (!k) return { ...b, z: I };
        const C = b.x + k.width / 2 / b.z, E = b.y + k.height / 2 / b.z;
        return { x: C - k.width / 2 / I, y: E - k.height / 2 / I, z: I };
      });
    },
    zoomTo: (f) => {
      v((b) => {
        var L;
        const k = (L = n.current) == null ? void 0 : L.getBoundingClientRect(), I = Math.min(s, Math.max(M, f));
        if (!k) return { ...b, z: I };
        const C = b.x + k.width / 2 / b.z, E = b.y + k.height / 2 / b.z;
        return { x: C - k.width / 2 / I, y: E - k.height / 2 / I, z: I };
      });
    },
    resetZoom: () => {
      v((f) => {
        var C;
        const b = (C = n.current) == null ? void 0 : C.getBoundingClientRect();
        if (!b) return { ...f, z: 1 };
        const k = f.x + b.width / 2 / f.z, I = f.y + b.height / 2 / f.z;
        return { x: k - b.width / 2, y: I - b.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var P;
      const f = e.current, b = (P = n.current) == null ? void 0 : P.getBoundingClientRect();
      if (f.length === 0 || !b) return;
      let k = 1 / 0, I = 1 / 0, C = -1 / 0, E = -1 / 0;
      for (const T of f) {
        const F = rt(T);
        k = Math.min(k, F.minX), I = Math.min(I, F.minY), C = Math.max(C, F.maxX), E = Math.max(E, F.maxY);
      }
      const L = 80, W = Math.min(s, Math.max(
        M,
        Math.min(b.width / (C - k + L * 2), b.height / (E - I + L * 2))
      ));
      v({
        x: (k + C) / 2 - b.width / 2 / W,
        y: (I + E) / 2 - b.height / 2 / W,
        z: W
      });
    },
    autoLayout: () => so(e.current, a, () => z("자동 배치 완료")),
    exportSvg: g,
    exportPng: () => co(g),
    getSnapshot: () => ({ version: "canvas-v1", shapes: e.current, camera: o.current }),
    loadSnapshot: (f) => lo(f, {
      controlled: m,
      past: u,
      future: l,
      setLocalShapes: X,
      setCamera: v,
      selectNow: x,
      setEditingId: $
    })
  }), [
    d,
    g,
    a,
    p,
    y,
    w,
    s,
    M,
    r,
    h,
    x,
    v,
    $,
    X,
    c,
    z,
    Y,
    m
  ]);
}
function fo(t) {
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
function mo({
  containerRef: t,
  editorRef: n,
  shapesRef: e,
  selectedRef: o,
  editingIdRef: i,
  toolRef: u,
  past: l,
  future: m,
  textualTypes: w,
  setIsSpaceDown: M,
  setEditingId: s,
  setShapes: h,
  setAnnouncement: r,
  commit: a,
  deleteSelection: y,
  selectNow: x,
  onDirty: Y,
  onToolChange: c,
  createId: X
}) {
  const v = st(($, z) => {
    const p = o.current;
    p.size !== 0 && a((d) => d.map((g) => {
      var f;
      return p.has(g.id) ? {
        ...g,
        x: g.x + $,
        y: g.y + z,
        points: (f = g.points) == null ? void 0 : f.map(([b, k]) => [b + $, k + z])
      } : g;
    }));
  }, [a, o]);
  bt(() => {
    const $ = (g) => {
      const f = g;
      return !!f && (f.tagName === "INPUT" || f.tagName === "TEXTAREA" || f.isContentEditable);
    }, z = (g) => g instanceof Element && !!g.closest("input, select, button, textarea, option, label, [data-canvas-control]"), p = (g) => {
      var W, P, T, F;
      const f = t.current, b = document.activeElement, k = g.target instanceof Node && !!(f != null && f.contains(g.target)), I = !!f && (b === f || f.contains(b));
      if (!k && !I || z(g.target)) return;
      if (g.code === "Space" && !$(g.target)) {
        M(!0), g.preventDefault();
        return;
      }
      if ($(g.target)) {
        if (g.key === "Escape")
          g.preventDefault(), s(null), (W = n.current) == null || W.blur(), (P = t.current) == null || P.focus();
        else if ((g.key === "Delete" || g.key === "Backspace") && !i.current) {
          const O = o.current;
          y(O) && g.preventDefault();
        }
        return;
      }
      const C = g.metaKey || g.ctrlKey, E = o.current;
      if (C && g.key.toLowerCase() === "z") {
        if (g.preventDefault(), g.shiftKey) {
          const O = m.current.pop();
          O && (l.current.push(e.current), h(O), Y());
        } else {
          const O = l.current.pop();
          O && (m.current.push(e.current), h(O), Y());
        }
        x(/* @__PURE__ */ new Set());
        return;
      }
      if (C && g.key.toLowerCase() === "g") {
        if (g.preventDefault(), g.shiftKey)
          E.size > 0 && (a((O) => O.map((D) => E.has(D.id) ? { ...D, groupId: void 0 } : D)), r("그룹 해제됨"));
        else if (E.size > 1) {
          const O = X("g");
          a((D) => D.map((U) => E.has(U.id) ? { ...U, groupId: O } : U)), r(`${E.size}개 그룹화됨`);
        }
        return;
      }
      if (C && g.key.toLowerCase() === "a") {
        g.preventDefault(), x(new Set(e.current.map((O) => O.id))), r(`전체 ${e.current.length}개 선택됨`);
        return;
      }
      if (g.key === "Delete" || g.key === "Backspace") {
        y(E) && g.preventDefault();
        return;
      }
      if (g.key.startsWith("Arrow")) {
        g.preventDefault();
        const O = g.shiftKey ? 10 : 1;
        g.key === "ArrowLeft" && v(-O, 0), g.key === "ArrowRight" && v(O, 0), g.key === "ArrowUp" && v(0, -O), g.key === "ArrowDown" && v(0, O);
        return;
      }
      if (g.key === "Tab" && e.current.length > 0) {
        g.preventDefault();
        const O = e.current, D = O.findIndex((G) => E.has(G.id)), U = g.shiftKey ? D <= 0 ? O.length - 1 : D - 1 : D === -1 || D === O.length - 1 ? 0 : D + 1, V = O[U];
        x(/* @__PURE__ */ new Set([V.id])), r(`${V.type} 선택됨: ${Gt(V) || "내용 없음"}`);
        return;
      }
      if (g.key === "Enter" && E.size === 1) {
        const O = e.current.find((D) => E.has(D.id));
        O && w.includes(O.type) && (g.preventDefault(), s(O.id));
        return;
      }
      if (g.key === "Escape") {
        if (i.current) {
          g.preventDefault(), s(null), (T = n.current) == null || T.blur(), (F = t.current) == null || F.focus(), c("select");
          return;
        }
        x(/* @__PURE__ */ new Set()), c("select");
        return;
      }
      const L = fo(g);
      L && (g.preventDefault(), u.current = L, c(L));
    }, d = (g) => {
      const f = t.current;
      !f || !(document.activeElement === f || f.contains(document.activeElement)) || g.code === "Space" && M(!1);
    };
    return window.addEventListener("keydown", p), window.addEventListener("keyup", d), () => {
      window.removeEventListener("keydown", p), window.removeEventListener("keyup", d);
    };
  }, [
    a,
    t,
    X,
    y,
    i,
    n,
    m,
    v,
    Y,
    c,
    l,
    x,
    o,
    r,
    s,
    M,
    h,
    e,
    w,
    u
  ]);
}
const vo = 400;
function po({
  containerRef: t,
  editorRef: n,
  pointers: e,
  cameraRef: o,
  shapesRef: i,
  toolRef: u,
  activeColorRef: l,
  drawStrokeWidth: m,
  camera: w,
  shapes: M,
  selected: s,
  isSpaceDown: h,
  textualTypes: r,
  setShapes: a,
  setEditingId: y,
  applyInteraction: x,
  selectNow: Y,
  beginHistory: c,
  commit: X,
  onToolChange: v,
  expandToGroups: $,
  toPage: z,
  createId: p
}) {
  const d = p, g = et(null), f = (P, T) => {
    var U;
    const F = ((U = t.current) == null ? void 0 : U.dataset.canvasActiveTool) === "text" ? "text" : u.current;
    if (F !== "note" && F !== "text") return;
    const O = z(P, T), D = F === "note" ? { id: d(), type: "note", x: O.x - 90, y: O.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: d(), type: "text", x: O.x, y: O.y - 22, w: 220, h: 44, text: "" };
    X((V) => [...V, D]), Y(/* @__PURE__ */ new Set([D.id])), y(D.id), v("select");
  };
  return bt(() => {
    const P = (T) => {
      var F;
      (F = t.current) != null && F.contains(T.target) && (T.target instanceof Element && T.target.closest('[role="textbox"], [data-canvas-inspector]') || f(T.clientX, T.clientY));
    };
    return window.addEventListener("click", P, !0), () => window.removeEventListener("click", P, !0);
  }), { onPointerDown: (P) => {
    var U, V, G;
    const T = u.current;
    if (e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), e.current.size === 2) {
      const [j, Q] = [...e.current.values()], Z = o.current;
      x({
        kind: "pinch",
        startDist: Math.hypot(Q.x - j.x, Q.y - j.y) || 1,
        startZoom: Z.z,
        startMidX: (j.x + Q.x) / 2,
        startMidY: (j.y + Q.y) / 2,
        camX: Z.x,
        camY: Z.y
      });
      return;
    }
    if (e.current.size > 2) return;
    if (P.button === 1 || h || T === "hand" || P.button === 0 && T === "select" && P.altKey) {
      x({ kind: "pan", startX: P.clientX, startY: P.clientY, camX: w.x, camY: w.y });
      return;
    }
    if (P.button !== 0) return;
    const F = z(P.clientX, P.clientY);
    if (y(null), (U = n.current) == null || U.blur(), (V = t.current) == null || V.focus(), T === "draw" || T === "highlighter") {
      const j = {
        id: d(),
        type: "draw",
        x: F.x,
        y: F.y,
        w: 0,
        h: 0,
        points: [[F.x, F.y]],
        color: l.current,
        strokeWidth: m,
        drawMode: T === "highlighter" ? "highlighter" : "pen"
      };
      c(), a((Q) => [...Q, j]), x({ kind: "drawing", id: j.id });
      return;
    }
    if (T === "arrow" || T === "frame" || hn.includes(T)) {
      const j = T, Q = T === "arrow" ? { id: d(), type: "arrow", x: F.x, y: F.y, w: 0, h: 0, color: l.current } : T === "frame" ? { id: d(), type: "frame", x: F.x, y: F.y, w: 0, h: 0, text: "프레임" } : { id: d(), type: j, x: F.x, y: F.y, w: 0, h: 0, color: l.current, text: "" };
      c(), a((Z) => [...Z, Q]), x({ kind: "creating", id: Q.id, startX: F.x, startY: F.y });
      return;
    }
    if (T === "note" || T === "text") return;
    if (T === "eraser") {
      c(), a((j) => Ee(j, F.x, F.y, 14 / w.z, w.z)), x({ kind: "erasing" });
      return;
    }
    const O = new Map(M.map((j) => [j.id, j])), D = [...M].reverse().find((j) => Ut(j, F.x, F.y, w.z, O, M));
    if (!D)
      g.current = null;
    else {
      const j = Date.now(), Q = !P.shiftKey && r.includes(D.type) && ((G = g.current) == null ? void 0 : G.id) === D.id && j - g.current.time < vo, Z = Q ? D.id : void 0;
      g.current = Q ? null : { id: D.id, time: j };
      const nt = P.shiftKey ? new Set(s).add(D.id) : s.has(D.id) ? s : /* @__PURE__ */ new Set([D.id]), J = $(nt);
      Y(J);
      const it = /* @__PURE__ */ new Map();
      for (const ot of M) J.has(ot.id) && it.set(ot.id, ot);
      for (const ot of M) {
        if (ot.type !== "frame" || !J.has(ot.id)) continue;
        const xt = rt(ot);
        for (const lt of M) {
          if (lt.id === ot.id || it.has(lt.id)) continue;
          const S = gt(lt);
          S.x >= xt.minX && S.x <= xt.maxX && S.y >= xt.minY && S.y <= xt.maxY && it.set(lt.id, lt);
        }
      }
      c(), x({ kind: "move", startX: F.x, startY: F.y, origin: it, editOnReleaseId: Z });
      return;
    }
    P.shiftKey || Y(/* @__PURE__ */ new Set()), x({
      kind: "marquee",
      startX: F.x,
      startY: F.y,
      curX: F.x,
      curY: F.y,
      screenStartX: P.clientX,
      screenStartY: P.clientY
    });
  }, onResizeHandleDown: (P, T, F) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), c(), x({ kind: "resize", id: T.id, handle: F, start: T });
  }, onRotateHandleDown: (P, T) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
    const F = z(P.clientX, P.clientY), O = gt(T);
    c(), x({
      kind: "rotate",
      id: T.id,
      startAngle: Math.atan2(F.y - O.y, F.x - O.x),
      startRotation: T.rotation ?? 0
    });
  }, onConnectHandleDown: (P, T) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
    const F = z(P.clientX, P.clientY);
    x({ kind: "connect", fromId: T.id, toX: F.x, toY: F.y, hoverId: null });
  }, onBendHandleDown: (P, T) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), c(), x({ kind: "bend", id: T.id });
  }, onOrthogonalSegmentHandleDown: (P, T, F) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), c(), x({ kind: "orthogonal-segment", id: T.id, segmentIndex: F });
  }, onArrowEndpointDown: (P, T, F) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), c(), x({ kind: "arrow-endpoint", id: T.id, endpoint: F, hoverId: null });
  } };
}
const yo = 0.1, go = 4, wo = 14, bo = 4, ve = ["note", "card", "rect", "ellipse", "text", "image"];
function $o({
  pointers: t,
  interactionRef: n,
  cameraRef: e,
  toPage: o,
  shapesRef: i,
  setShapes: u,
  setEditingId: l,
  setEraserPos: m,
  setGuides: w,
  setAnnouncement: M,
  applyInteraction: s,
  selectNow: h,
  endHistory: r,
  commit: a,
  onToolChange: y,
  createId: x
}) {
  const Y = x;
  bt(() => {
    const c = (X) => {
      t.current.delete(X.pointerId);
      const v = n.current;
      if (v.kind !== "none") {
        if (v.kind === "pinch") {
          t.current.size < 2 && s({ kind: "none" });
          return;
        }
        if (w([]), v.kind === "erasing") {
          m(null), r(), s({ kind: "none" });
          return;
        }
        if (v.kind === "connect") {
          const z = i.current.find((k) => k.id === v.fromId);
          if (s({ kind: "none" }), !z) return;
          const p = { x: v.toX, y: v.toY }, d = gt(z);
          if (!v.hoverId && Math.hypot(p.x - d.x, p.y - d.y) < 30) return;
          const g = [];
          let f = v.hoverId;
          if (!f) {
            const k = z.type === "note" ? 180 : 200, I = z.type === "note" ? 180 : 120, C = {
              ...z,
              id: Y(),
              x: p.x - k / 2,
              y: p.y - I / 2,
              w: k,
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
            g.push(C), f = C.id;
          }
          const b = {
            id: Y(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: z.id,
            toId: f,
            text: ""
          };
          g.push(b), a((k) => [...k, ...g]), h(/* @__PURE__ */ new Set([b.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => l(b.id)) : l(b.id), M("연결 생성됨");
          return;
        }
        if (v.kind === "bend") {
          r(), s({ kind: "none" });
          return;
        }
        if (v.kind === "drawing") {
          u(($) => $.map((z) => {
            if (z.id !== v.id || !z.points) return z;
            const p = z.points.map((b) => b[0]), d = z.points.map((b) => b[1]), g = Math.min(...p), f = Math.min(...d);
            return { ...z, x: g, y: f, w: Math.max(...p) - g, h: Math.max(...d) - f };
          })), r(), s({ kind: "none" });
          return;
        }
        if (v.kind === "creating") {
          u(($) => $.map((z) => {
            if (z.id !== v.id) return z;
            const p = Math.abs(z.w) < 4 && Math.abs(z.h) < 4 ? {
              ...z,
              w: z.type === "arrow" ? 200 : z.type === "frame" ? 480 : 180,
              h: z.type === "arrow" ? 0 : z.type === "frame" ? 320 : 120
            } : z;
            if (p.type === "arrow") return p;
            const d = St(p);
            return { ...p, x: d.minX, y: d.minY, w: d.maxX - d.minX, h: d.maxY - d.minY };
          })), r(), h(/* @__PURE__ */ new Set([v.id])), y("select"), s({ kind: "none" });
          return;
        }
        if ((v.kind === "move" || v.kind === "resize" || v.kind === "rotate" || v.kind === "orthogonal-segment" || v.kind === "arrow-endpoint") && r(), v.kind === "move" && v.editOnReleaseId && X.type === "pointerup") {
          const $ = o(X.clientX, X.clientY);
          Math.hypot($.x - v.startX, $.y - v.startY) * e.current.z <= bo && l(v.editOnReleaseId);
        }
        s({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c), () => {
      window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c);
    };
  }, [s, e, x, r, n, y, t, h, M, l, u, i, o]);
}
function ko({
  containerRef: t,
  pointers: n,
  interactionRef: e,
  cameraRef: o,
  shapesRef: i,
  setCamera: u,
  setShapes: l,
  setEraserPos: m,
  setGuides: w,
  applyInteraction: M,
  selectNow: s,
  expandToGroups: h,
  toPage: r
}) {
  const a = et([]), y = et(null);
  bt(() => () => {
    y.current !== null && cancelAnimationFrame(y.current);
  }, []), bt(() => {
    const x = (Y) => {
      var $, z;
      n.current.has(Y.pointerId) && n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY });
      const c = e.current;
      if (c.kind === "none") return;
      const X = o.current;
      if (c.kind === "pinch") {
        if (n.current.size < 2) return;
        const [p, d] = [...n.current.values()], g = Math.hypot(d.x - p.x, d.y - p.y) || 1, f = (p.x + d.x) / 2, b = (p.y + d.y) / 2, k = ($ = t.current) == null ? void 0 : $.getBoundingClientRect();
        if (!k) return;
        const I = Math.min(go, Math.max(yo, c.startZoom * (g / c.startDist))), C = c.camX + (c.startMidX - k.left) / c.startZoom, E = c.camY + (c.startMidY - k.top) / c.startZoom;
        u({ x: C - (f - k.left) / I, y: E - (b - k.top) / I, z: I });
        return;
      }
      if (c.kind === "pan") {
        u({
          x: c.camX - (Y.clientX - c.startX) / X.z,
          y: c.camY - (Y.clientY - c.startY) / X.z,
          z: X.z
        });
        return;
      }
      const v = r(Y.clientX, Y.clientY);
      if (c.kind === "erasing") {
        l((p) => Ee(p, v.x, v.y, wo / X.z, X.z)), m({ x: v.x, y: v.y });
        return;
      }
      if (c.kind === "connect") {
        const p = i.current, d = new Map(p.map((f) => [f.id, f])), g = [...p].reverse().find((f) => f.id !== c.fromId && ve.includes(f.type) && Ut(f, v.x, v.y, X.z, d, p));
        M({ ...c, toX: v.x, toY: v.y, hoverId: (g == null ? void 0 : g.id) ?? null });
        return;
      }
      if (c.kind === "bend") {
        const p = i.current, d = p.find((L) => L.id === c.id);
        if (!d) return;
        const g = $t(d, new Map(p.map((L) => [L.id, L])), p), f = g.end.x - g.start.x, b = g.end.y - g.start.y, k = Math.hypot(f, b) || 1, I = (g.start.x + g.end.x) / 2, C = (g.start.y + g.end.y) / 2, E = (v.x - I) * (-b / k) + (v.y - C) * (f / k);
        l((L) => L.map((W) => W.id === c.id ? { ...W, bend: E } : W));
        return;
      }
      if (c.kind === "orthogonal-segment") {
        const p = i.current, d = p.find((E) => E.id === c.id);
        if (!d) return;
        const g = $t(d, new Map(p.map((E) => [E.id, E])), p), f = g.routing === "orthogonal" ? g.pathPoints : void 0;
        if (!f || f.length < 2) return;
        const b = f[c.segmentIndex], k = f[c.segmentIndex + 1];
        if (!b || !k) return;
        const I = b.x === k.x ? v.x : v.y, C = Nn(f, c.segmentIndex, I);
        l((E) => E.map((L) => L.id === c.id ? { ...L, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: C.slice(1, -1).map((W) => ({ x: W.x, y: W.y })) } : L));
        return;
      }
      if (c.kind === "arrow-endpoint") {
        const p = i.current, d = p.find((C) => C.id === c.id);
        if (!d) return;
        const g = new Map(p.map((C) => [C.id, C])), f = $t(d, g, p), b = c.endpoint === "start" ? f.end : f.start, k = [...p].reverse().find((C) => C.id !== d.id && ve.includes(C.type) && Ut(C, v.x, v.y, X.z, g, p)), I = k ? It(k, b.x, b.y) : { x: v.x, y: v.y };
        M({ ...c, hoverId: (k == null ? void 0 : k.id) ?? null }), l((C) => C.map((E) => {
          if (E.id !== d.id) return E;
          const L = c.endpoint === "start" ? I : b, W = c.endpoint === "end" ? I : b;
          return {
            ...E,
            x: L.x,
            y: L.y,
            w: W.x - L.x,
            h: W.y - L.y,
            fromId: c.endpoint === "start" ? k == null ? void 0 : k.id : E.fromId,
            toId: c.endpoint === "end" ? k == null ? void 0 : k.id : E.toId
          };
        }));
        return;
      }
      if (c.kind === "marquee") {
        M({ ...c, curX: v.x, curY: v.y });
        const p = Math.min(c.startX, v.x), d = Math.max(c.startX, v.x), g = Math.min(c.startY, v.y), f = Math.max(c.startY, v.y), b = Math.min(c.screenStartX, Y.clientX), k = Math.max(c.screenStartX, Y.clientX), I = Math.min(c.screenStartY, Y.clientY), C = Math.max(c.screenStartY, Y.clientY), E = /* @__PURE__ */ new Map();
        (z = t.current) == null || z.querySelectorAll("[data-canvas-shape-id]").forEach((W) => {
          const P = W.dataset.canvasShapeId;
          P && E.set(P, W.getBoundingClientRect());
        });
        const L = i.current.filter((W) => {
          const P = E.get(W.id);
          if (P)
            return P.right >= b && P.left <= k && P.bottom >= I && P.top <= C;
          const T = rt(W);
          return T.maxX >= p && T.minX <= d && T.maxY >= g && T.minY <= f;
        }).map((W) => W.id);
        s(h(new Set(L)));
        return;
      }
      if (c.kind === "move") {
        let p = v.x - c.startX, d = v.y - c.startY;
        const g = c.origin, f = (() => {
          let I = 1 / 0, C = 1 / 0, E = -1 / 0, L = -1 / 0;
          return g.forEach((W) => {
            const P = rt({ ...W, x: W.x + p, y: W.y + d });
            I = Math.min(I, P.minX), C = Math.min(C, P.minY), E = Math.max(E, P.maxX), L = Math.max(L, P.maxY);
          }), { minX: I, minY: C, maxX: E, maxY: L };
        })(), b = i.current.filter((I) => !g.has(I.id)), k = Pn(f, b, X.z);
        p += k.dx, d += k.dy, w(k.guides), l((I) => I.map((C) => {
          var L;
          const E = g.get(C.id);
          return E ? {
            ...C,
            x: E.x + p,
            y: E.y + d,
            points: (L = E.points) == null ? void 0 : L.map(([W, P]) => [W + p, P + d]),
            ...E.type === "arrow" && E.orthogonalWaypoints ? { orthogonalWaypoints: E.orthogonalWaypoints.map((W) => ({ x: W.x + p, y: W.y + d })) } : {}
          } : C;
        }));
        return;
      }
      if (c.kind === "drawing") {
        if (Y.shiftKey) {
          l((p) => p.map((d) => {
            if (d.id !== c.id || !d.points) return d;
            const g = d.points[0];
            return g ? { ...d, points: [g, [v.x, v.y]] } : d;
          }));
          return;
        }
        a.current.push([v.x, v.y]), y.current === null && (y.current = requestAnimationFrame(() => {
          y.current = null;
          const p = a.current;
          if (p.length === 0) return;
          a.current = [];
          const d = o.current.z;
          l((g) => g.map((f) => {
            if (f.id !== c.id || !f.points) return f;
            let b = f.points[f.points.length - 1][0], k = f.points[f.points.length - 1][1];
            const I = [...f.points];
            for (const [C, E] of p)
              Math.hypot(C - b, E - k) < 1 / d || (I.push([C, E]), b = C, k = E);
            return I.length === f.points.length ? f : { ...f, points: I };
          }));
        }));
        return;
      }
      if (c.kind === "creating") {
        l((p) => p.map((d) => d.id === c.id ? { ...d, w: v.x - c.startX, h: v.y - c.startY } : d));
        return;
      }
      if (c.kind === "rotate") {
        const p = i.current.find((b) => b.id === c.id);
        if (!p) return;
        const d = gt(p), g = Math.atan2(v.y - d.y, v.x - d.x);
        let f = c.startRotation + (g - c.startAngle);
        Y.shiftKey && (f = Math.round(f / (Math.PI / 12)) * (Math.PI / 12)), l((b) => b.map((k) => k.id === c.id ? { ...k, rotation: f } : k));
        return;
      }
      if (c.kind === "resize") {
        const { start: p, handle: d } = c, g = Ie(p, v.x, v.y);
        l((f) => f.map((b) => {
          if (b.id !== p.id) return b;
          let { x: k, y: I, w: C, h: E } = p;
          if (d.includes("e") && (C = Math.max(20, g.x - p.x)), d.includes("s") && (E = Math.max(20, g.y - p.y)), d.includes("w")) {
            const L = p.x + p.w;
            k = Math.min(g.x, L - 20), C = L - k;
          }
          if (d.includes("n")) {
            const L = p.y + p.h;
            I = Math.min(g.y, L - 20), E = L - I;
          }
          return { ...b, x: k, y: I, w: C, h: E, manualSize: b.type === "text" ? !0 : b.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", x), () => window.removeEventListener("pointermove", x);
  }, [M, t, h, e, n, s, i, r]);
}
function zo(t) {
  ko(t), $o(t);
}
function Mo({
  containerRef: t,
  editorRef: n,
  pointers: e,
  interactionRef: o,
  cameraRef: i,
  shapesRef: u,
  toolRef: l,
  activeColorRef: m,
  drawStrokeWidth: w,
  camera: M,
  shapes: s,
  selected: h,
  isSpaceDown: r,
  textualTypes: a,
  setCamera: y,
  setShapes: x,
  setEditingId: Y,
  setEraserPos: c,
  setGuides: X,
  setAnnouncement: v,
  applyInteraction: $,
  selectNow: z,
  beginHistory: p,
  endHistory: d,
  commit: g,
  onToolChange: f,
  expandToGroups: b,
  toPage: k,
  createId: I
}) {
  const C = po({
    containerRef: t,
    editorRef: n,
    pointers: e,
    cameraRef: i,
    shapesRef: u,
    toolRef: l,
    activeColorRef: m,
    drawStrokeWidth: w,
    camera: M,
    shapes: s,
    selected: h,
    isSpaceDown: r,
    textualTypes: a,
    setShapes: x,
    setEditingId: Y,
    applyInteraction: $,
    selectNow: z,
    beginHistory: p,
    commit: g,
    onToolChange: f,
    expandToGroups: b,
    toPage: k,
    createId: I
  });
  return zo({
    containerRef: t,
    pointers: e,
    interactionRef: o,
    cameraRef: i,
    shapesRef: u,
    setCamera: y,
    setShapes: x,
    setEditingId: Y,
    setEraserPos: c,
    setGuides: X,
    setAnnouncement: v,
    applyInteraction: $,
    selectNow: z,
    endHistory: d,
    commit: g,
    onToolChange: f,
    expandToGroups: b,
    toPage: k,
    createId: I
  }), C;
}
function Xo(t) {
  ho(t);
  const n = Xt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(e) {
      t.toolRef.current = e;
    }
  }), [t.toolRef]);
  return mo({ ...t, toolRef: n }), Mo(t);
}
function So({
  isDarkMode: t,
  tool: n,
  isSpaceDown: e,
  interaction: o,
  zoom: i
}) {
  const u = e || o.kind === "pan" ? "grabbing" : n === "hand" ? "grab" : n === "draw" ? "crosshair" : n === "eraser" ? "cell" : n === "select" ? "default" : "crosshair", l = t ? H.gridDark : H.gridLight, m = 40 * i;
  return { cursor: u, gridColor: l, gridSize: m, strokeColorOf: (M) => M.color ? ft[M.color].border : t ? "var(--canvas-slate-200)" : H.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = Xn, document.head.appendChild(t);
}
const pe = 0.1, ye = 4, ge = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function Oe(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Yo(t, n, e) {
  return t.map((o) => {
    if (!n.has(o.id)) return o;
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
        return { ...o, strokeWidth: e };
      case "note":
      case "card":
      case "text":
      case "image":
        return o;
      default:
        return Oe(o);
    }
  });
}
function Co(t, n, e) {
  return t.map((o) => n.has(o.id) && o.type === "draw" ? { ...o, ...e } : o);
}
function No(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const To = an(function({
  boardIdentity: n = "standalone",
  isDarkMode: e,
  tool: o,
  drawStrokeWidth: i = 4,
  onToolChange: u,
  onDirty: l,
  onZoomChange: m,
  onSelectionChange: w,
  shapes: M,
  onShapesChange: s,
  peerCursors: h,
  onLocalCursor: r,
  renderDiagram: a
}, y) {
  var de, ue;
  const {
    containerRef: x,
    editorRef: Y,
    setLocalShapes: c,
    controlled: X,
    shapes: v,
    setShapes: $,
    camera: z,
    setCamera: p,
    cameraRef: d,
    selected: g,
    selectedRef: f,
    editingId: b,
    setEditingId: k,
    editingIdRef: I,
    interaction: C,
    interactionRef: E,
    applyInteraction: L,
    isSpaceDown: W,
    setIsSpaceDown: P,
    guides: T,
    setGuides: F,
    announcement: O,
    setAnnouncement: D,
    showInspectorPalette: U,
    setShowInspectorPalette: V,
    eraserPos: G,
    setEraserPos: j,
    setActiveColor: Q,
    activeColorRef: Z,
    installedFontFamilies: nt,
    pointers: J,
    past: it,
    future: ot,
    selectNow: xt,
    commit: lt,
    deleteSelection: S,
    beginHistory: _,
    endHistory: q,
    toPage: at,
    viewportCentre: vt,
    expandToGroups: Yt,
    toolRef: Qt,
    shapesRef: Pt
  } = ro({ boardIdentity: n, tool: o, controlledShapes: M, onShapesChange: s, onDirty: l }), {
    inspectorShape: A,
    onContainerPointerMove: R,
    onContainerPointerLeave: B
  } = io({
    containerRef: x,
    camera: z,
    setCamera: p,
    minZoom: pe,
    maxZoom: ye,
    shapes: v,
    selected: g,
    editingId: b,
    textualTypes: ge,
    onZoomChange: m,
    onSelectionChange: w,
    onLocalCursor: r,
    toPage: at
  }), {
    onPointerDown: tt,
    onResizeHandleDown: kt,
    onRotateHandleDown: zt,
    onConnectHandleDown: Zt,
    onBendHandleDown: _e,
    onOrthogonalSegmentHandleDown: He,
    onArrowEndpointDown: Be
  } = Xo({
    ref: y,
    containerRef: x,
    editorRef: Y,
    pointers: J,
    interactionRef: E,
    cameraRef: d,
    shapesRef: Pt,
    toolRef: Qt,
    activeColorRef: Z,
    drawStrokeWidth: i,
    camera: z,
    shapes: v,
    selected: g,
    isSpaceDown: W,
    setCamera: p,
    setShapes: $,
    setEditingId: k,
    setEraserPos: j,
    setGuides: F,
    setAnnouncement: D,
    applyInteraction: L,
    selectNow: xt,
    past: it,
    future: ot,
    beginHistory: _,
    endHistory: q,
    commit: lt,
    deleteSelection: S,
    onDirty: l,
    onToolChange: u,
    controlled: X,
    isDarkMode: e,
    minZoom: pe,
    maxZoom: ye,
    textualTypes: ge,
    selectedRef: f,
    editingIdRef: I,
    setIsSpaceDown: P,
    viewportCentre: vt,
    setLocalShapes: c,
    expandToGroups: Yt,
    toPage: at,
    createId: No
  }), { cursor: je, gridColor: Ke, gridSize: ae, strokeColorOf: Re } = So({
    isDarkMode: e,
    tool: o === "highlighter" ? "draw" : o,
    isSpaceDown: W,
    interaction: C,
    zoom: z.z
  }), ce = (pt) => {
    const en = f.current, xe = I.current, Lt = new Set(en);
    if (xe && Lt.add(xe), Lt.size === 0) return;
    const he = "strokeWidth" in pt, nn = Object.keys(pt).every((yt) => yt === "color" || yt === "fillColor" || yt === "strokeWidth");
    if ((A == null ? void 0 : A.type) === "draw" && nn) {
      const yt = "color" in pt ? pt.color : void 0, ht = "strokeWidth" in pt ? pt.strokeWidth : void 0;
      lt((on) => Co(on, Lt, {
        ...yt !== void 0 ? { color: yt } : {},
        ...ht !== void 0 ? { strokeWidth: ht } : {}
      }));
      return;
    }
    if (he) {
      const yt = pt.strokeWidth;
      if (yt !== void 0 && Object.keys(pt).length === 1) {
        lt((ht) => Yo(ht, Lt, yt));
        return;
      }
    }
    lt((yt) => yt.map((ht) => {
      if (!Lt.has(ht.id)) return ht;
      if (!he) return { ...ht, ...pt };
      switch (ht.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...ht, ...pt };
        case "note":
        case "card":
        case "text":
        case "image":
          return ht;
        case "draw":
          return { ...ht, ...pt };
        default:
          return Oe(ht);
      }
    }));
  }, {
    commitEditorHtml: Ue,
    applyFormat: Ve,
    applyList: Ge,
    onEditorKeyDown: qe,
    applyCustomFontFamily: Qe
  } = oo({
    editorRef: Y,
    editingId: b,
    setShapes: $,
    setAnnouncement: D,
    onDirty: l,
    patchSelected: ce
  }), { renderEditor: Ze, renderShapeBody: Je } = eo({
    camera: z,
    editingId: b,
    isDarkMode: e,
    editorRef: Y,
    commitEditorHtml: Ue,
    onEditorKeyDown: qe,
    setShapes: $,
    onDirty: l,
    renderDiagram: a
  }), tn = C.kind === "marquee" ? C : null, { shapeById: se, visiblePaintOrder: le } = no({
    containerRef: x,
    shapesRef: Pt,
    shapes: v,
    camera: z,
    selected: g,
    editingId: b,
    boardIdentity: n
  });
  return /* @__PURE__ */ K(
    "div",
    {
      ref: x,
      onPointerDown: tt,
      onPointerMove: R,
      onPointerLeave: B,
      role: "application",
      "data-canvas-board-id": n,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": z.x,
      "data-canvas-camera-y": z.y,
      "data-canvas-camera-z": z.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: je,
        background: e ? H.canvasDark : H.canvasLight,
        backgroundImage: `radial-gradient(${Ke} 1px, transparent 1px)`,
        backgroundSize: `${ae}px ${ae}px`,
        backgroundPosition: `${-z.x * z.z}px ${-z.y * z.z}px`
      },
      children: [
        /* @__PURE__ */ N("style", { children: '.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas .canvas-rich-text ul>li::before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style="dash"]>li::before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li::before{content:counter(canvas-list-item) ". "}' }),
        /* @__PURE__ */ N(
          "div",
          {
            "aria-live": "polite",
            role: "status",
            className: "absolute w-px h-px overflow-hidden whitespace-nowrap",
            style: { clip: "rect(0 0 0 0)", clipPath: "inset(50%)" },
            children: O
          }
        ),
        /* @__PURE__ */ N(
          Fn,
          {
            visiblePaintOrder: le,
            selected: g,
            shapeById: se,
            allShapes: Pt.current,
            camera: z,
            interaction: C,
            eraserPos: G,
            guides: T,
            marquee: tn,
            strokeColorOf: Re
          }
        ),
        /* @__PURE__ */ N(
          Gn,
          {
            visiblePaintOrder: le,
            selected: g,
            editingId: b,
            camera: z,
            shapeById: se,
            allShapes: Pt.current,
            peerCursors: h,
            isDarkMode: e,
            renderEditor: Ze,
            renderShapeBody: Je,
            setEditingId: k,
            onBendHandleDown: _e,
            onOrthogonalSegmentHandleDown: He,
            onResizeHandleDown: kt,
            onRotateHandleDown: zt,
            onConnectHandleDown: Zt,
            onArrowEndpointDown: Be
          }
        ),
        A && /* @__PURE__ */ N(
          to,
          {
            shape: A,
            shapes: v,
            camera: z,
            canvasSize: { width: ((de = x.current) == null ? void 0 : de.clientWidth) ?? 380, height: ((ue = x.current) == null ? void 0 : ue.clientHeight) ?? 190 },
            isDarkMode: e,
            editing: !!b,
            showPalette: U,
            installedFontFamilies: nt,
            setShowPalette: V,
            setActiveColor: Q,
            patchSelected: ce,
            applyFormat: Ve,
            applyList: Ge,
            applyCustomFontFamily: Qe
          }
        )
      ]
    }
  );
});
export {
  ft as CANVAS_COLORS,
  dn as CANVAS_COLOR_KEYS,
  wt as CANVAS_FONTS,
  To as InfiniteCanvas,
  hn as SHAPE_TOOLS,
  Co as applySelectedDrawStyle,
  Yo as applySelectedStrokeWidth,
  Lo as diagramTemplate,
  qn as getInspectorGroups,
  We as isDiagramShape
};
