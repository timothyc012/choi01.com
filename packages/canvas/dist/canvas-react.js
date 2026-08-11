import { jsx as N, jsxs as j, Fragment as Ct } from "react/jsx-runtime";
import te, { useRef as et, useState as ct, useLayoutEffect as Kt, useEffect as $t, useMemo as Xt, useCallback as st, useImperativeHandle as rn, forwardRef as an } from "react";
import { p as cn, i as re, k as we, a as ft, v as sn, c as wt, s as ln, b as dn, d as Lt, h as un, C as xn, S as hn } from "./document-C_I4ZYDp.js";
import { Palette as fn, Minus as mn, Plus as vn, ChevronDown as pn, AlignLeft as yn, AlignCenter as gn, AlignRight as wn, List as bn, ListOrdered as $n, Bold as kn, Italic as zn, Underline as Mn } from "lucide-react";
const Xn = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover{background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover{background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', _ = Object.freeze({
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
  const u = Ot(t, n, e), l = Ot(t, n, o), y = Ot(e, o, t), g = Ot(e, o, n);
  return Math.abs(u) < 1e-6 && Dt(t, e, n) || Math.abs(l) < 1e-6 && Dt(t, o, n) || Math.abs(y) < 1e-6 && Dt(e, t, o) || Math.abs(g) < 1e-6 && Dt(e, n, o) ? !0 : u > 0 != l > 0 && y > 0 != g > 0;
}
function Sn(t, n, e) {
  const o = Math.min(t.x, n.x), a = Math.max(t.x, n.x), u = Math.min(t.y, n.y), l = Math.max(t.y, n.y);
  if (a < e.minX || o > e.maxX || l < e.minY || u > e.maxY) return !1;
  if (t.x >= e.minX && t.x <= e.maxX && t.y >= e.minY && t.y <= e.maxY || n.x >= e.minX && n.x <= e.maxX && n.y >= e.minY && n.y <= e.maxY) return !0;
  const y = { x: e.minX, y: e.minY }, g = { x: e.maxX, y: e.minY }, k = { x: e.maxX, y: e.maxY }, s = { x: e.minX, y: e.maxY };
  return _t(t, n, y, g) || _t(t, n, g, k) || _t(t, n, k, s) || _t(t, n, s, y);
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
      const y = (e - o) / l;
      return { x: t[u - 1].x + (t[u].x - t[u - 1].x) * y, y: t[u - 1].y + (t[u].y - t[u - 1].y) * y };
    }
    o += l;
  }
  const a = t[t.length - 1];
  return { x: a.x, y: a.y };
}
function At(t, n) {
  return Math.atan2(n.y - t.y, n.x - t.x);
}
function fe(t, n, e, o) {
  const a = /* @__PURE__ */ new Set([t, n]), u = Math.min(t, n), l = Math.max(t, n), y = be * 1.2;
  for (const g of e) {
    const k = (o === "x" ? g.minX : g.minY) - y, s = (o === "x" ? g.maxX : g.maxY) + y, f = (r) => r >= u - y * 4 && r <= l + y * 4;
    f(k) && a.add(k), f(s) && a.add(s);
  }
  return [...a].sort((g, k) => Math.abs(g - t) - Math.abs(k - t));
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
    const a = n[n.length - 2];
    if (a && o && (a.x === o.x && o.x === e.x || a.y === o.y && o.y === e.y)) {
      n[n.length - 1] = e;
      continue;
    }
    n.push(e);
  }
  return n;
}
function Cn(t, n, e) {
  const o = [t];
  for (const a of [...e, n]) {
    const u = o[o.length - 1];
    if (!u) {
      o.push(a);
      continue;
    }
    if (u.x === a.x || u.y === a.y) {
      o.push(a);
      continue;
    }
    o.push({ x: a.x, y: u.y }, a);
  }
  return ke(o);
}
function Nn(t, n, e) {
  const o = t[n], a = t[n + 1];
  if (!o || !a || !Number.isFinite(e) || o.x !== a.x && o.y !== a.y) return [...t];
  const u = o.x === a.x ? [o, { x: e, y: o.y }, { x: e, y: a.y }, a] : [o, { x: o.x, y: e }, { x: a.x, y: e }, a];
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
  const a = e.length > 0 ? e : o;
  return a.length === 0 ? [] : a.reduce((u, l) => ne(l) < ne(u) ? l : u);
}
function me(t) {
  for (let n = 1; n < t.length; n++) {
    if (t[n - 1].x !== t[n].x) return "x";
    if (t[n - 1].y !== t[n].y) return "y";
  }
}
function Et(t, n, e, o) {
  const a = Math.min(t, n), u = Math.max(t, n), l = Math.max(48, Math.abs(n - t) * 0.35, be * 4);
  if (o === "x") {
    if (e === "e") return u + l;
    if (e === "w") return a - l;
  } else {
    if (e === "s") return u + l;
    if (e === "n") return a - l;
  }
  return t <= n ? a - l : u + l;
}
function In(t, n, e, o, a) {
  const u = (t.x + n.x) / 2, l = (t.y + n.y) / 2;
  if (e === "u") {
    if (o) {
      const g = Et(t.x, n.x, t.side, "x");
      return [t, { x: g, y: t.y }, { x: g, y: n.y }, n];
    }
    const y = Et(t.y, n.y, t.side, "y");
    return [t, { x: t.x, y }, { x: n.x, y }, n];
  }
  if (e === "zigzag") {
    if (o) {
      const k = Et(t.x, n.x, t.side, "x"), s = Et(t.y, n.y, t.side, "y");
      return a ? [t, { x: k, y: t.y }, { x: k, y: s }, { x: u, y: s }, { x: u, y: n.y }, n] : [t, { x: k, y: t.y }, { x: k, y: s }, { x: n.x, y: s }, n];
    }
    const y = Et(t.y, n.y, t.side, "y"), g = Et(t.x, n.x, t.side, "x");
    return a ? [t, { x: t.x, y }, { x: g, y }, { x: g, y: n.y }, n] : [t, { x: t.x, y }, { x: g, y }, { x: g, y: l }, { x: n.x, y: l }, n];
  }
  return [];
}
function ze(t, n, e = [], o = "elbow", a = []) {
  if (a.length > 0) return Cn(t, n, a);
  const u = t.side ?? (Math.abs(n.x - t.x) >= Math.abs(n.y - t.y) ? "e" : "s"), l = n.side ?? (u === "e" || u === "w" ? "w" : "n"), y = u === "e" || u === "w", g = l === "e" || l === "w", k = fe(t.x, n.x, e, "x"), s = fe(t.y, n.y, e, "y"), f = [];
  if (y && g) {
    for (const i of k) f.push([t, { x: i, y: t.y }, { x: i, y: n.y }, n]);
    for (const i of s) f.push([t, { x: t.x, y: i }, { x: n.x, y: i }, n]);
  } else if (!y && !g) {
    for (const i of s) f.push([t, { x: t.x, y: i }, { x: n.x, y: i }, n]);
    for (const i of k) f.push([t, { x: i, y: t.y }, { x: i, y: n.y }, n]);
  } else if (y) {
    f.push([t, { x: n.x, y: t.y }, n]);
    for (const i of s)
      f.push([t, { x: t.x, y: i }, { x: n.x, y: i }, n]), f.push([t, { x: t.x, y: i }, n]);
    for (const i of k) f.push([t, { x: i, y: t.y }, { x: i, y: n.y }, n]);
  } else {
    f.push([t, { x: t.x, y: n.y }, n]);
    for (const i of s)
      f.push([t, { x: t.x, y: i }, n]), f.push([t, { x: t.x, y: i }, { x: n.x, y: i }, n]);
    for (const i of k) f.push([t, { x: i, y: t.y }, { x: i, y: n.y }, n]);
  }
  const r = Jt(f, e);
  if (o === "elbow") return r;
  if (o === "reverse") {
    const i = me(r), Y = Jt(f.filter((x) => me(x) !== i), e);
    return Y.length > 1 ? Y : r;
  }
  const c = In(t, n, o, y, g), v = Jt([c], e);
  return v.length > 1 ? v : r;
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
      const o = n / 2, a = e / 2, u = Math.min(n, e) / 2, l = u * 0.4, y = [];
      for (let g = 0; g < 10; g++) {
        const k = Math.PI / 5 * g - Math.PI / 2, s = g % 2 === 0 ? u : l;
        y.push(`${o + s * Math.cos(k)},${a + s * Math.sin(k)}`);
      }
      return y.join(" ");
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
    const [a, u] = t[o], [l, y] = t[o + 1];
    n += ` Q ${a} ${u} ${(a + l) / 2} ${(u + y) / 2}`;
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
  const e = [[]], o = (a, u) => {
    a.childNodes.forEach((l) => {
      if (l.nodeType === Node.TEXT_NODE) {
        const s = l.textContent ?? "";
        s && e[e.length - 1].push({ text: s, ...u });
        return;
      }
      if (l.nodeType !== Node.ELEMENT_NODE) return;
      const y = l;
      if (y.tagName === "BR") {
        e.push([]);
        return;
      }
      const g = { bold: u.bold || y.tagName === "B" || y.tagName === "STRONG", italic: u.italic || y.tagName === "I" || y.tagName === "EM", underline: u.underline || y.tagName === "U" }, k = y.tagName === "DIV" || y.tagName === "P" || y.tagName === "LI";
      k && e[e.length - 1].length > 0 && e.push([]), o(y, g), k && e.push([]);
    });
  };
  return o(n.content, { bold: !1, italic: !1, underline: !1 }), e.filter((a) => a.length > 0);
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
  const o = gt(t), a = Math.cos(n), u = Math.sin(n), l = [
    [e.minX, e.minY],
    [e.maxX, e.minY],
    [e.maxX, e.maxY],
    [e.minX, e.maxY]
  ].map(([k, s]) => {
    const f = k - o.x, r = s - o.y;
    return [o.x + f * a - r * u, o.y + f * u + r * a];
  }), y = l.map((k) => k[0]), g = l.map((k) => k[1]);
  return { minX: Math.min(...y), minY: Math.min(...g), maxX: Math.max(...y), maxY: Math.max(...g) };
}
function Ie(t, n, e) {
  const o = t.rotation ?? 0;
  if (!o) return { x: n, y: e };
  const a = gt(t), u = Math.cos(-o), l = Math.sin(-o), y = n - a.x, g = e - a.y;
  return { x: a.x + y * u - g * l, y: a.y + y * l + g * u };
}
function Bt(t, n, e, o, a, u) {
  const l = a - e, y = u - o, g = l * l + y * y, k = g === 0 ? 0 : Math.max(0, Math.min(1, ((t - e) * l + (n - o) * y) / g));
  return Math.hypot(t - (e + k * l), n - (o + k * y));
}
function Ut(t, n, e, o, a, u) {
  const l = 8 / o;
  if (t.type === "arrow") {
    const k = (t.strokeWidth ?? 2.5) / o / 2 + l, s = bt(t, a ?? /* @__PURE__ */ new Map(), u);
    if (s.routing === "orthogonal" && s.pathPoints && s.pathPoints.length > 1) {
      for (let r = 1; r < s.pathPoints.length; r++) {
        const c = s.pathPoints[r - 1], v = s.pathPoints[r];
        if (Bt(n, e, c.x, c.y, v.x, v.y) <= k) return !0;
      }
      return !1;
    }
    if (s.bend === 0) return Bt(n, e, s.start.x, s.start.y, s.end.x, s.end.y) <= k;
    let f = s.start;
    for (let r = 1; r <= 16; r++) {
      const c = Wt(r / 16, s.start, s.control, s.end);
      if (Bt(n, e, f.x, f.y, c.x, c.y) <= k) return !0;
      f = c;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const k = (t.strokeWidth ?? 3) / o / 2 + l;
    for (let s = 1; s < t.points.length; s++) {
      const [f, r] = t.points[s - 1], [c, v] = t.points[s];
      if (Bt(n, e, f, r, c, v) <= k) return !0;
    }
    return !1;
  }
  const y = Ie(t, n, e), g = St(t);
  if (t.type === "frame") {
    const k = y.x >= g.minX - l && y.x <= g.maxX + l && y.y >= g.minY - l && y.y <= g.maxY + l && (y.x <= g.minX + l || y.x >= g.maxX - l || y.y <= g.minY + l || y.y >= g.maxY - l), s = y.x >= g.minX - l && y.x <= g.maxX + l && y.y >= g.minY - 28 / o && y.y <= g.minY;
    return k || s;
  }
  return y.x >= g.minX - l && y.x <= g.maxX + l && y.y >= g.minY - l && y.y <= g.maxY + l;
}
function It(t, n, e) {
  const o = St(t), a = (o.minX + o.maxX) / 2, u = (o.minY + o.maxY) / 2, l = n - a, y = e - u;
  if (l === 0 && y === 0) return { x: a, y: u, side: "e" };
  const g = (o.maxX - o.minX) / 2, k = (o.maxY - o.minY) / 2, s = g === 0 ? 1 / 0 : Math.abs(g / l), f = k === 0 ? 1 / 0 : Math.abs(k / y);
  return s <= f ? { x: a + l * s, y: u + y * s, side: l >= 0 ? "e" : "w" } : { x: a + l * f, y: u + y * f, side: y >= 0 ? "s" : "n" };
}
function Pe(t, n, e, o) {
  const a = /* @__PURE__ */ new Set([n.id, e, o]);
  return t.filter((u) => !a.has(u.id)).map((u) => {
    const l = rt(u);
    return { minX: l.minX - Ht, minY: l.minY - Ht, maxX: l.maxX + Ht, maxY: l.maxY + Ht };
  }).filter((u) => u.maxX > u.minX && u.maxY > u.minY);
}
function bt(t, n, e = []) {
  const o = t.fromId ? n.get(t.fromId) : void 0, a = t.toId ? n.get(t.toId) : void 0;
  let u = { x: t.x, y: t.y }, l = { x: t.x + t.w, y: t.y + t.h };
  if (o && a) {
    const v = gt(o), i = gt(a);
    u = It(o, i.x, i.y), l = It(a, v.x, v.y);
  } else o ? u = It(o, l.x, l.y) : a && (l = It(a, u.x, u.y));
  const y = (u.x + l.x) / 2, g = (u.y + l.y) / 2, k = t.bend ?? 0;
  let s = { x: y, y: g };
  if (k !== 0) {
    const v = l.x - u.x, i = l.y - u.y, Y = Math.hypot(v, i) || 1;
    s = { x: y + -i / Y * k, y: g + v / Y * k };
  }
  const f = !!(o || a), r = t.routing ?? (f ? "orthogonal" : k !== 0 ? "curved" : "straight");
  if (r !== "orthogonal") return { start: u, end: l, control: s, bend: k, routing: r };
  const c = Pe(e, t, o == null ? void 0 : o.id, a == null ? void 0 : a.id);
  return {
    start: u,
    end: l,
    control: s,
    bend: k,
    routing: r,
    pathPoints: $e(ze(u, l, c, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function Wt(t, n, e, o) {
  const a = 1 - t;
  return { x: a * a * n.x + 2 * a * t * e.x + t * t * o.x, y: a * a * n.y + 2 * a * t * e.y + t * t * o.y };
}
function Ee(t, n, e, o, a) {
  const u = [];
  let l = 0;
  for (const y of t) {
    if (y.type !== "draw" || !y.points) {
      if (Ut(y, n, e, a)) continue;
      u.push(y);
      continue;
    }
    const g = [];
    let k = [];
    for (const [f, r] of y.points)
      Math.hypot(f - n, r - e) <= o / a ? (k.length > 1 && g.push(k), k = []) : k.push([f, r]);
    if (k.length > 1 && g.push(k), g.length === 0) continue;
    const s = St(y);
    g.forEach((f) => u.push({ ...y, id: `${y.id}-e${l++}`, points: f, x: s.minX, y: s.minY, w: s.maxX - s.minX, h: s.maxY - s.minY }));
  }
  return u;
}
function Pn(t, n, e) {
  const o = 6 / e;
  let a = null, u = null;
  const l = [], y = [t.minX, (t.minX + t.maxX) / 2, t.maxX], g = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const k of n) {
    const s = rt(k), f = [s.minX, (s.minX + s.maxX) / 2, s.maxX], r = [s.minY, (s.minY + s.maxY) / 2, s.maxY];
    for (const c of y) for (const v of f) {
      const i = v - c;
      Math.abs(i) <= o && (!a || Math.abs(i) < Math.abs(a.delta)) && (a = { delta: i, at: v });
    }
    for (const c of g) for (const v of r) {
      const i = v - c;
      Math.abs(i) <= o && (!u || Math.abs(i) < Math.abs(u.delta)) && (u = { delta: i, at: v });
    }
  }
  return a && l.push({ x1: a.at, y1: t.minY - 1e3, x2: a.at, y2: t.maxY + 1e3 }), u && l.push({ x1: t.minX - 1e3, y1: u.at, x2: t.maxX + 1e3, y2: u.at }), { dx: (a == null ? void 0 : a.delta) ?? 0, dy: (u == null ? void 0 : u.delta) ?? 0, guides: l };
}
const En = 14;
function Ln({
  visiblePaintOrder: t,
  selected: n,
  shapeById: e,
  allShapes: o,
  camera: a,
  interaction: u,
  eraserPos: l,
  guides: y,
  marquee: g,
  strokeColorOf: k
}) {
  return /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ j("g", { transform: `scale(${a.z}) translate(${-a.x}, ${-a.y})`, children: [
    t.map((s) => {
      if (s.type === "draw" && s.points) {
        const $ = s.drawMode ?? "pen", z = s.strokeWidth ?? 3;
        return /* @__PURE__ */ N(
          "path",
          {
            "data-canvas-vector-shape-id": s.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": $,
            "data-canvas-stroke-width": z,
            d: Ye(s.points),
            fill: "none",
            stroke: n.has(s.id) ? _.blue : k(s),
            strokeWidth: z / a.z,
            strokeOpacity: $ === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          s.id
        );
      }
      if (s.type !== "arrow") return null;
      const f = n.has(s.id) ? _.blue : k(s), r = bt(s, e, o), c = s.strokeWidth ?? 2.5, v = c / a.z, i = Math.max(10, 8 + c * 2), Y = Math.max(4, 2 + c), x = i / a.z, S = Y / a.z, M = r.routing === "orthogonal" && r.pathPoints ? r.pathPoints : null, d = M && M.length > 1;
      let h, w;
      if (d)
        h = ee(M), w = Me(M);
      else if (r.routing === "curved") {
        h = `M ${r.start.x} ${r.start.y} Q ${r.control.x} ${r.control.y} ${r.end.x} ${r.end.y}`;
        const $ = Wt(0.94, r.start, r.control, r.end);
        w = Math.atan2(r.end.y - $.y, r.end.x - $.x);
      } else
        h = `M ${r.start.x} ${r.start.y} L ${r.end.x} ${r.end.y}`, w = Math.atan2(r.end.y - r.start.y, r.end.x - r.start.x);
      const m = d && M.length >= 2 ? At(M[0], M[1]) : r.routing === "orthogonal" && r.start.side ? r.start.side === "e" ? 0 : r.start.side === "w" ? Math.PI : r.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : At(r.start, r.end), b = s.strokeStyle === "dashed" ? `${8 / a.z} ${5 / a.z}` : s.strokeStyle === "dotted" ? `${1.5 / a.z} ${4 / a.z}` : void 0, p = ($, z, C, I) => $ === "dot" ? /* @__PURE__ */ N("circle", { "data-canvas-arrow-dot-radius": Y, cx: z, cy: C, r: S, fill: f }) : $ === "none" ? null : /* @__PURE__ */ N(
        "polygon",
        {
          "data-canvas-arrowhead-size": i,
          points: `${z},${C} ${z - x * Math.cos(I - 0.4)},${C - x * Math.sin(I - 0.4)} ${z - x * Math.cos(I + 0.4)},${C - x * Math.sin(I + 0.4)}`,
          fill: f
        }
      );
      return /* @__PURE__ */ j("g", { "data-canvas-vector-shape-id": s.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": r.routing, "data-canvas-stroke-width": c, children: [
        /* @__PURE__ */ N("path", { d: h, fill: "none", stroke: f, strokeWidth: v, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: b }),
        p(s.arrowEnd ?? "arrow", r.end.x, r.end.y, w),
        p(s.arrowStart ?? "none", r.start.x, r.start.y, m + Math.PI)
      ] }, s.id);
    }),
    u.kind === "connect" && u.fromId !== void 0 && u.toX !== void 0 && u.toY !== void 0 && (() => {
      const s = e.get(u.fromId);
      if (!s) return null;
      const f = It(s, u.toX, u.toY), r = u.hoverId ? e.get(u.hoverId) : null, c = r ? It(r, f.x, f.y) : { x: u.toX, y: u.toY }, v = r ? ze(f, c, Pe(o, { id: "__preview" }, s.id, r.id)) : [f, c];
      return /* @__PURE__ */ j("g", { children: [
        /* @__PURE__ */ N("path", { d: ee(v), stroke: _.blue, strokeWidth: 2 / a.z, strokeDasharray: `${5 / a.z} ${4 / a.z}` }),
        r ? /* @__PURE__ */ N("rect", { x: rt(r).minX - 3 / a.z, y: rt(r).minY - 3 / a.z, width: rt(r).maxX - rt(r).minX + 6 / a.z, height: rt(r).maxY - rt(r).minY + 6 / a.z, fill: "none", stroke: _.blue, strokeWidth: 2 / a.z, rx: 6 / a.z }) : /* @__PURE__ */ N("circle", { cx: c.x, cy: c.y, r: 5 / a.z, fill: _.blue })
      ] });
    })(),
    l && /* @__PURE__ */ N("circle", { cx: l.x, cy: l.y, r: En / a.z, fill: _.roseSoft, stroke: _.rose, strokeWidth: 1 / a.z }),
    y.map((s, f) => /* @__PURE__ */ N("line", { x1: s.x1, y1: s.y1, x2: s.x2, y2: s.y2, stroke: _.pink, strokeWidth: 1 / a.z, strokeDasharray: `${4 / a.z} ${4 / a.z}` }, `guide-${f}`)),
    g && /* @__PURE__ */ N("rect", { x: Math.min(g.startX, g.curX), y: Math.min(g.startY, g.curY), width: Math.abs(g.curX - g.startX), height: Math.abs(g.curY - g.startY), fill: _.marqueeFill, stroke: _.blue, strokeWidth: 1 / a.z })
  ] }) });
}
const Fn = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], Tn = /* @__PURE__ */ new Set([
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
function Le(t) {
  return Tn.has(t.trim().toLowerCase());
}
function Fe(t) {
  const n = qt(t);
  return n ? Le(n) ? n : `"${n.replace(/"/g, '\\"')}"` : "";
}
function Wn(t) {
  return qt(t).split(",").map((n) => n.trim()).filter(Boolean).map(Fe).filter(Boolean).join(", ");
}
function Te(t) {
  return qt(t).split(",").map((n) => n.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Tt(t) {
  return t.split(",").map((n) => qt(n).replace(/^["']|["']$/g, "")).filter(Boolean).filter((n) => !Le(n));
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
    const e = Fe(n);
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
  shapeById: a,
  allShapes: u,
  peerCursors: l,
  isDarkMode: y,
  renderEditor: g,
  renderShapeBody: k,
  setEditingId: s,
  onBendHandleDown: f,
  onOrthogonalSegmentHandleDown: r,
  onResizeHandleDown: c,
  onRotateHandleDown: v,
  onConnectHandleDown: i,
  onArrowEndpointDown: Y
}) {
  return /* @__PURE__ */ j(Ct, { children: [
    /* @__PURE__ */ N("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((x) => {
      if (x.type === "draw") return null;
      if (x.type === "arrow") {
        const d = bt(x, a, u), h = d.routing === "orthogonal" && d.pathPoints ? ie(d.pathPoints) : d.routing === "curved" ? Wt(0.5, d.start, d.control, d.end) : { x: (d.start.x + d.end.x) / 2, y: (d.start.y + d.end.y) / 2 }, w = e === x.id, m = Vt(x), b = n.has(x.id), p = Gt(x).trim(), $ = m || (b ? "관계 입력" : "");
        return !$ && !w ? null : /* @__PURE__ */ N(te.Fragment, { children: /* @__PURE__ */ N("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: h.x - 90, top: h.y - 18, width: 180, height: 36 }, onDoubleClick: (z) => {
          z.stopPropagation(), s(x.id);
        }, children: ($ || w) && /* @__PURE__ */ N(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": p ? `관계 설명: ${p}` : "관계 설명 입력",
            title: w ? void 0 : p ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${y ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: dt(x),
              fontFamily: ut(x),
              maxWidth: "100%",
              minWidth: w ? 120 / o.z : void 0,
              minHeight: w ? 28 / o.z : void 0,
              color: x.textColor
            },
            children: w ? g("text-center whitespace-nowrap") : /* @__PURE__ */ N("span", { dangerouslySetInnerHTML: { __html: $ } }, "canvas-view")
          }
        ) }) }, x.id);
      }
      const S = n.has(x.id), M = St(x);
      return /* @__PURE__ */ j(
        "div",
        {
          "data-canvas-shape-id": x.id,
          "data-canvas-shape-type": x.type,
          "data-canvas-selected": S ? "true" : void 0,
          "data-canvas-text-align": mt(x),
          "data-canvas-text-color": x.textColor,
          "data-canvas-font-size": dt(x),
          "data-canvas-font-family": x.fontFamily === "custom" ? x.customFontFamily ?? "custom" : x.fontFamily ?? "sans",
          "data-canvas-manual-size": x.manualSize ? "true" : void 0,
          "data-canvas-group-id": x.groupId,
          "data-canvas-list-kind": jn(x),
          "data-canvas-x": x.x,
          "data-canvas-y": x.y,
          "data-canvas-width": x.w,
          "data-canvas-height": x.h,
          className: "absolute",
          style: { left: M.minX, top: M.minY, width: M.maxX - M.minX, height: M.maxY - M.minY, transform: x.rotation ? `rotate(${x.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (d) => {
            d.stopPropagation(), Un.has(x.type) && s(x.id);
          },
          children: [
            k(x),
            S && /* @__PURE__ */ j(Ct, { children: [
              /* @__PURE__ */ N("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${_.blue}` } }),
              n.size === 1 && /* @__PURE__ */ j(Ct, { children: [
                ["nw", "ne", "sw", "se"].map((d) => /* @__PURE__ */ N("div", { "data-canvas-resize-handle": d, onPointerDown: (h) => c(h, x, d), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${d}-resize`, left: d.includes("w") ? -5 / o.z : void 0, right: d.includes("e") ? -5 / o.z : void 0, top: d.includes("n") ? -5 / o.z : void 0, bottom: d.includes("s") ? -5 / o.z : void 0 } }, d)),
                /* @__PURE__ */ N("div", { onPointerDown: (d) => v(d, x), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                Vn.has(x.type) && ["n", "s", "w", "e"].map((d) => /* @__PURE__ */ N("div", { onPointerDown: (h) => i(h, x), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...d === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : d === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : d === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${d}`))
              ] })
            ] })
          ]
        },
        x.id
      );
    }) }),
    n.size === 1 && u.filter((x) => x.type === "arrow" && n.has(x.id)).map((x) => {
      const S = bt(x, a, u), M = (d, h) => ({
        left: (d.x - o.x) * o.z - h / 2,
        top: (d.y - o.y) * o.z - h / 2
      });
      return /* @__PURE__ */ j(te.Fragment, { children: [
        S.routing === "orthogonal" && S.pathPoints && S.pathPoints.length > 2 ? S.pathPoints.slice(0, -1).map((d, h) => {
          var b;
          const w = (b = S.pathPoints) == null ? void 0 : b[h + 1];
          if (!w) return null;
          const m = { x: (d.x + w.x) / 2, y: (d.y + w.y) / 2 };
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-segment-handle": h, onPointerDown: (p) => r(p, x, h), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...M(m, 12), cursor: d.x === w.x ? "ew-resize" : "ns-resize" } }, `segment-${h}`);
        }) : S.routing === "curved" && /* @__PURE__ */ N("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (d) => f(d, x), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (S.start.x + S.end.x) / 2 * o.z - o.x * o.z - 5, top: (S.start.y + S.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map((d) => {
          const h = d === "start" ? S.start : S.end;
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-endpoint": d, onPointerDown: (w) => Y(w, x, d), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...M(h, 12), cursor: "grab" } }, d);
        })
      ] }, `arrow-handles-${x.id}`);
    }),
    l == null ? void 0 : l.map((x) => /* @__PURE__ */ j("div", { className: "absolute pointer-events-none z-40", style: { left: (x.x - o.x) * o.z, top: (x.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ N("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ N("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: x.color, stroke: _.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ N("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: x.color }, children: x.name })
    ] }, x.id))
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
function Fo(t) {
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
  isDarkMode: a,
  editing: u,
  showPalette: l,
  installedFontFamilies: y,
  setShowPalette: g,
  setActiveColor: k,
  patchSelected: s,
  applyFormat: f,
  applyList: r,
  applyCustomFontFamily: c
}) {
  var xt, lt;
  const v = a ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", i = t.type === "draw", Y = i ? t.color ? ft[t.color].border : _.ink : Nt(t), x = et(null), [S, M] = ct({ width: 380, height: 260 });
  Kt(() => {
    const X = x.current;
    if (!X) return;
    const D = () => {
      const at = Math.max(1, Math.ceil(X.getBoundingClientRect().width)), vt = Math.max(1, Math.ceil(X.getBoundingClientRect().height));
      M((Yt) => Yt.width === at && Yt.height === vt ? Yt : { width: at, height: vt });
    };
    if (D(), typeof ResizeObserver > "u") return;
    const q = new ResizeObserver(D);
    return q.observe(X), () => q.disconnect();
  }, [u, y.length, a, t, l]);
  const d = S.width, h = S.height, w = rt(t), m = (w.minX - e.x) * e.z, b = (w.minY - e.y) * e.z, p = (w.maxX - e.x) * e.z, $ = (w.maxY - e.y) * e.z, z = Math.max(8, o.width - d - 8), C = Math.max(8, o.height - h - 8), I = (X, D) => ({ left: Math.min(Math.max(8, X), z), top: Math.min(Math.max(8, D), C) }), E = [
    I((m + p) / 2 - d / 2, b - h - 12),
    I((m + p) / 2 - d / 2, $ + 12),
    I((o.width - d) / 2, 12),
    I(m - d - 12, b + ($ - b - h) / 2),
    I(p + 12, b + ($ - b - h) / 2)
  ], O = n.map((X) => {
    const D = rt(X);
    return { left: (D.minX - e.x) * e.z, top: (D.minY - e.y) * e.z, right: (D.maxX - e.x) * e.z, bottom: (D.maxY - e.y) * e.z };
  });
  if (t.type === "arrow") {
    const X = bt(t, new Map(n.map((vt) => [vt.id, vt])), n), D = X.routing === "orthogonal" && X.pathPoints ? ie(X.pathPoints) : { x: (X.start.x + X.end.x) / 2, y: (X.start.y + X.end.y) / 2 }, q = 180 * e.z, at = 36 * e.z;
    O.push({
      left: (D.x - e.x) * e.z - q / 2,
      top: (D.y - e.y) * e.z - at / 2,
      right: (D.x - e.x) * e.z + q / 2,
      bottom: (D.y - e.y) * e.z + at / 2
    });
  }
  const U = E[0], P = (X, D) => {
    const q = Math.max(0, Math.min(X.left + d, D.right) - Math.max(X.left, D.left)), at = Math.max(0, Math.min(X.top + h, D.bottom) - Math.max(X.top, D.top));
    return q * at;
  }, T = ((xt = E.map((X) => ({
    candidate: X,
    overlap: O.reduce((D, q) => D + P(X, q), 0),
    distance: Math.hypot(X.left - U.left, X.top - U.top)
  })).sort((X, D) => X.overlap - D.overlap || X.distance - D.distance)[0]) == null ? void 0 : xt.candidate) ?? U, L = dt(t), W = Jn(t), A = Zn(t), R = qn(t), V = t.type === "arrow" ? "arrow" : R[0] ?? "color", [G, B] = ct(V);
  Kt(() => {
    R.includes(G) || B(V);
  }, [V, R, G]);
  const Q = t.type === "arrow" && !!((lt = t.orthogonalWaypoints) != null && lt.length), Z = t.type === "arrow" ? t.arrowStart ?? "none" : "none", nt = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", J = (X, D, q, at, vt = at) => /* @__PURE__ */ N("button", { type: "button", title: at, "aria-label": vt, onClick: q, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${D ? "bg-blue-600 text-white" : v}`, children: X }), it = (X) => /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: X }), ot = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ j("div", { ref: x, "data-canvas-inspector": i ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${a ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: T.left, top: T.top }, onPointerDown: (X) => {
    X.stopPropagation();
    const D = X.target instanceof Element ? X.target : null;
    D != null && D.closest("input, select, textarea") || X.preventDefault();
  }, onClick: (X) => X.stopPropagation(), children: [
    /* @__PURE__ */ N("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: R.map((X) => /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": G === X, onClick: () => B(X), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${G === X ? "bg-blue-600 text-white" : v}`, children: ot[X] }, X)) }),
    /* @__PURE__ */ j("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: G === "color" || i ? void 0 : "none" }, children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: i ? "그리기" : "색상" }),
      /* @__PURE__ */ N("button", { type: "button", title: i ? "그리기 색상 팔레트" : "색상 팔레트", "aria-label": i ? "그리기 색상" : "도형 색상", onClick: () => g((X) => !X), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${a ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ N(fn, { className: "w-4 h-4", style: { color: Y } }) }),
      l && /* @__PURE__ */ j("div", { className: `pointer-events-auto absolute left-0 top-10 z-50 flex items-center gap-1.5 p-2 rounded-xl border shadow-xl ${a ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        dn.map((X) => /* @__PURE__ */ N("button", { type: "button", title: ft[X].label, "aria-label": `색 ${ft[X].label}`, onClick: () => {
          k(X), s({ color: X, fillColor: void 0 }), g(!1);
        }, className: "w-5 h-5 rounded-full border", style: { background: ft[X].bg, borderColor: ft[X].border, outline: t.color === X && !t.fillColor ? `2px solid ${_.blue}` : void 0, outlineOffset: 1 } }, X)),
        !i && /* @__PURE__ */ N("label", { title: "배경 색 (자유 선택)", className: "w-5 h-5 rounded-full border relative overflow-hidden cursor-pointer flex items-center justify-center", style: { background: t.fillColor ?? Rt(t), outline: t.fillColor ? `2px solid ${_.blue}` : void 0, outlineOffset: 1 }, children: /* @__PURE__ */ N("input", { type: "color", value: t.fillColor ?? Rt(t), onChange: (X) => {
          s({ fillColor: X.target.value }), g(!1);
        }, className: "absolute inset-0 opacity-0 cursor-pointer" }) })
      ] })
    ] }),
    G !== "color" && !i && /* @__PURE__ */ j(Ct, { children: [
      /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ j("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: Nt(t), color: _.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ N("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ N("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? Nt(t), onChange: (X) => s({ textColor: X.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ j("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${a ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => s({ fontSize: Math.max(8, L - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ N(mn, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ N("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: L }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => s({ fontSize: Math.min(96, L + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ N(vn, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ j("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ N("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (X) => {
            const D = Bn(X.target.value);
            s(D === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: D, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${a ? "text-slate-200" : "text-slate-700"}`, children: Fn.map((X) => /* @__PURE__ */ N("option", { value: X, className: a ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: wt[X].label }, X)) }),
          /* @__PURE__ */ N(pn, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ j(Ct, { children: [
          /* @__PURE__ */ N("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (X) => c(X.target.value), onChange: (X) => X.currentTarget.value && c(X.currentTarget.value), onKeyDown: (X) => {
            X.key === "Enter" && (X.preventDefault(), c(X.currentTarget.value));
          }, onDoubleClick: (X) => X.stopPropagation(), onPointerDown: (X) => X.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ N("datalist", { id: `canvas-font-families-${t.id}`, children: y.map((X) => /* @__PURE__ */ N("option", { value: X }, X)) })
        ] })
      ] }),
      /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", yn, "왼쪽 정렬"], ["center", gn, "가운데 정렬"], ["right", wn, "오른쪽 정렬"]].map(([X, D, q]) => /* @__PURE__ */ N("button", { type: "button", "aria-label": q, title: q, onClick: () => s({ textAlign: X }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${mt(t) === X ? "bg-blue-600 text-white shadow-sm" : v}`, children: /* @__PURE__ */ N(D, { className: "w-4 h-4" }) }, X)) }),
        u && /* @__PURE__ */ j(Ct, { children: [
          /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", bn, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", $n, "번호 목록"]].map(([X, D, q]) => /* @__PURE__ */ N("button", { type: "button", onClick: () => r(X), "aria-label": q, title: q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: D ? /* @__PURE__ */ N(D, { className: "w-4 h-4" }) : /* @__PURE__ */ N("span", { className: "text-base leading-none", children: "–" }) }, X)) }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: kn, label: "굵게" }, { cmd: "italic", Icon: zn, label: "기울임" }, { cmd: "underline", Icon: Mn, label: "밑줄" }].map(({ cmd: X, Icon: D, label: q }) => /* @__PURE__ */ N("button", { type: "button", onClick: () => f(X), "aria-label": q, title: q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ N(D, { className: "w-4 h-4" }) }, X)) })
        ] })
      ] }),
      (G === "arrange" && t.type === "card" || G === "arrow" && t.type === "arrow") && /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ j(Ct, { children: [
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ N("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (X) => X.stopPropagation(), onChange: (X) => s({ category: X.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${a ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            it("경로"),
            J("직선", (t.routing ?? "straight") === "straight", () => s({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            J("직각", t.routing === "orthogonal", () => s({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            J("곡선", (t.routing ?? "") === "curved", () => s({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            Q && J("자동", !1, () => s({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            it("선"),
            J("—", (t.strokeStyle ?? "solid") === "solid", () => s({ strokeStyle: "solid" }), "실선"),
            J("- -", t.strokeStyle === "dashed", () => s({ strokeStyle: "dashed" }), "파선"),
            J("···", t.strokeStyle === "dotted", () => s({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            it("시작"),
            J(Z === "none" ? "○" : Z === "dot" ? "●" : "◀", Z !== "none", () => s({ arrowStart: Z === "none" ? "arrow" : Z === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${Z === "none" ? "없음" : Z === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            it("끝"),
            J(nt === "none" ? "○" : nt === "dot" ? "●" : "▶", nt !== "none", () => s({ arrowEnd: nt === "arrow" ? "dot" : nt === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${nt === "none" ? "없음" : nt === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      G === "diagram" && /* @__PURE__ */ N("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${a ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    A && /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-none ${a ? "border-slate-700" : "border-slate-100"}`, children: [
      it("굵기"),
      Qn.map((X) => /* @__PURE__ */ N(te.Fragment, { children: J(String(X), W === X, () => s({ strokeWidth: X }), `굵기 ${X}`) }, X))
    ] })
  ] });
}
function eo({
  camera: t,
  editingId: n,
  isDarkMode: e,
  editorRef: o,
  commitEditorHtml: a,
  onEditorKeyDown: u,
  setShapes: l,
  onDirty: y,
  renderDiagram: g
}) {
  const k = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", s = (r, c) => /* @__PURE__ */ N(
    "div",
    {
      ref: o,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": "텍스트 편집",
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onInput: a,
      onBlur: a,
      onPointerDown: (v) => v.stopPropagation(),
      onDoubleClick: (v) => v.stopPropagation(),
      onKeyDown: u,
      className: `${k} ${r}`,
      style: c
    },
    "canvas-editor"
  );
  return { renderEditor: s, renderShapeBody: (r) => {
    const c = ft[r.color ?? "blue"], v = n === r.id, i = Vt(r);
    if (r.type === "frame") {
      const w = r.strokeWidth ?? 2;
      return /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-stroke-width": w,
          className: "w-full h-full rounded",
          style: { border: `${w / t.z}px solid ${e ? _.slate600 : _.slate400}` },
          children: /* @__PURE__ */ N(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: e ? _.slate400 : _.muted
              },
              children: v ? s("", { fontSize: 13 / t.z }) : Gt(r) || "프레임"
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
          style: { background: c.bg, borderTop: `6px solid ${c.border}`, color: c.text },
          children: v ? s("font-medium", { color: Nt(r), fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }) : i ? /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Nt(r), fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }, dangerouslySetInnerHTML: { __html: i } }, "canvas-view") : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Nt(r), fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (r.type === "card") {
      const w = r.cardStyle === "glass";
      return We(r) && g && !v ? /* @__PURE__ */ N("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: g(r) }) : /* @__PURE__ */ j(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: w ? _.glassFill : _.slateCard,
            backdropFilter: w ? "blur(12px)" : void 0,
            WebkitBackdropFilter: w ? "blur(12px)" : void 0,
            border: `1px solid ${w ? _.glassBorder : _.darkBorder}`,
            boxShadow: w ? _.glassShadow : _.cardShadow
          },
          children: [
            /* @__PURE__ */ j(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (m) => m.stopPropagation(),
                onDoubleClick: (m) => m.stopPropagation(),
                onBlur: (m) => {
                  const p = (m.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  l(($) => $.map((z) => z.id === r.id ? { ...z, category: p } : z)), y();
                },
                onKeyDown: (m) => {
                  m.key === "Enter" && (m.preventDefault(), m.currentTarget.blur());
                },
                children: [
                  "[ ",
                  r.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            v ? s("flex-1 font-medium", { color: r.textColor ?? _.white, fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: r.textColor ?? _.white, fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }, dangerouslySetInnerHTML: { __html: i } }, "canvas-view"),
            /* @__PURE__ */ j("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              r.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (r.type === "text") {
      const w = e ? "text-slate-100" : "text-slate-900", m = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${w}`,
        style: { color: r.textColor, fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }
      };
      return v ? s(`font-medium ${w}`, m.style) : i ? /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-text-view": !0,
          ...m,
          dangerouslySetInnerHTML: { __html: i }
        },
        "canvas-view"
      ) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, ...m, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (r.type === "image") {
      const w = oe(r.src);
      return w ? /* @__PURE__ */ N(
        "img",
        {
          src: w,
          alt: r.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const Y = Rt(r), x = Xe(r), S = Nt(r);
    if (r.type === "triangle" || r.type === "diamond" || r.type === "hexagon" || r.type === "star") {
      const w = r.strokeWidth ?? 2;
      return /* @__PURE__ */ j("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${r.w} ${r.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ N("polygon", { "data-canvas-stroke-width": w, points: Se(r.type, r.w, r.h), fill: Y, stroke: x, strokeWidth: w / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ N("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: S }, children: v ? s("font-medium", { color: S, fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }, dangerouslySetInnerHTML: { __html: i } }, "canvas-view") })
      ] });
    }
    const d = oe(r.src), h = r.type === "rect" || r.type === "ellipse" ? r.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ N(
      "div",
      {
        "data-canvas-stroke-width": h,
        className: `w-full h-full flex items-center justify-center p-3 ${r.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: Y, border: `${h / t.z}px solid ${x}`, color: S },
        children: v ? s("font-medium", { color: S, fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }) : /* @__PURE__ */ j("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: dt(r), fontFamily: ut(r), textAlign: mt(r) }, children: [
          /* @__PURE__ */ N("div", { dangerouslySetInnerHTML: { __html: i } }),
          d && /* @__PURE__ */ N(
            "a",
            {
              href: d,
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
function no({
  containerRef: t,
  shapesRef: n,
  shapes: e,
  camera: o,
  selected: a,
  editingId: u,
  boardIdentity: l
}) {
  const [y, g] = ct({ width: 0, height: 0 });
  $t(() => {
    const v = t.current;
    if (!v) return;
    let i = -1, Y = -1;
    const x = (M = v.clientWidth, d = v.clientHeight) => {
      M === i && d === Y || (i = M, Y = d, g({ width: M, height: d }));
    };
    if (x(), typeof ResizeObserver < "u") {
      const M = new ResizeObserver((d) => {
        var w;
        const h = (w = d[0]) == null ? void 0 : w.contentRect;
        x((h == null ? void 0 : h.width) ?? v.clientWidth, (h == null ? void 0 : h.height) ?? v.clientHeight);
      });
      return M.observe(v), () => M.disconnect();
    }
    const S = () => x();
    return window.addEventListener("resize", S), () => window.removeEventListener("resize", S);
  }, [l, t]);
  const k = Xt(() => new Map(e.map((v) => [v.id, v])), [e]), s = Xt(
    () => [...e].sort((v, i) => (v.type === "frame" ? -1 : 0) - (i.type === "frame" ? -1 : 0)),
    [e]
  ), f = Xt(() => {
    if (!t.current || y.width <= 0 || y.height <= 0) return null;
    const v = 200 / o.z;
    return {
      minX: o.x - v,
      minY: o.y - v,
      maxX: o.x + y.width / o.z + v,
      maxY: o.y + y.height / o.z + v
    };
  }, [o, t, y]), r = st((v) => {
    if (!f) return !1;
    if (v.id === u || a.has(v.id)) return !0;
    if (v.type === "arrow") {
      const Y = bt(v, k, n.current), S = (Y.routing === "orthogonal" ? Y.pathPoints : null) ?? [Y.start, Y.end], M = Math.min(...S.map((m) => m.x)), d = Math.max(...S.map((m) => m.x)), h = Math.min(...S.map((m) => m.y)), w = Math.max(...S.map((m) => m.y));
      return d >= f.minX && M <= f.maxX && w >= f.minY && h <= f.maxY;
    }
    const i = rt(v);
    return i.maxX >= f.minX && i.minX <= f.maxX && i.maxY >= f.minY && i.minY <= f.maxY;
  }, [u, a, k, n, f]), c = Xt(
    () => s.filter(r),
    [r, s]
  );
  return { shapeById: k, visiblePaintOrder: c };
}
function oo({
  editorRef: t,
  editingId: n,
  setShapes: e,
  setAnnouncement: o,
  onDirty: a,
  patchSelected: u
}) {
  const l = st(() => {
    const c = t.current;
    if (!c || !n) return;
    let v;
    try {
      v = re(c.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const i = c.scrollHeight;
    e((Y) => Y.map((x) => {
      if (x.id !== n) return x;
      const S = { ...x, html: v, text: void 0 };
      if (x.type === "text")
        return x.manualSize ? S : { ...S, ...Rn(c, x) };
      if (x.type === "arrow") return S;
      const M = x.type === "note" ? 32 : x.type === "card" ? 96 : (
        // category header + type footer
        (x.type === "frame", 24)
      ), d = Math.max(x.h, i + M);
      return { ...S, h: d };
    })), a();
  }, [n, a]), y = (c) => {
    var v;
    (v = t.current) == null || v.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(c), l();
  }, g = () => {
    var Y;
    const c = (Y = window.getSelection()) == null ? void 0 : Y.anchorNode, v = c instanceof Element ? c : c == null ? void 0 : c.parentElement, i = v == null ? void 0 : v.closest("ul, ol");
    return i instanceof HTMLElement ? i : null;
  }, k = (c, v, i) => {
    const Y = document.createElement(v);
    for (; c.firstChild; ) Y.append(c.firstChild);
    return c.replaceWith(Y), Y;
  }, s = (c) => {
    const v = t.current;
    if (!v) return;
    v.focus();
    const i = g();
    if (c === "number")
      if ((i == null ? void 0 : i.tagName) === "OL")
        i.removeAttribute("data-list-style");
      else if ((i == null ? void 0 : i.tagName) === "UL")
        k(i, "ol");
      else {
        document.execCommand("insertOrderedList");
        const Y = g();
        Y == null || Y.removeAttribute("data-list-style");
      }
    else if ((i == null ? void 0 : i.tagName) === "UL") {
      const Y = i.dataset.listStyle;
      c === Y ? document.execCommand("insertUnorderedList") : i.dataset.listStyle = c;
    } else {
      (i == null ? void 0 : i.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const Y = g();
      Y && (Y.dataset.listStyle = c);
    }
    l();
  };
  return { commitEditorHtml: l, applyFormat: y, applyList: s, onEditorKeyDown: (c) => {
    if (c.key === "Tab") {
      c.preventDefault(), document.execCommand(c.shiftKey ? "outdent" : "indent"), l();
      return;
    }
    if (c.key === " ") {
      const v = window.getSelection();
      if (v && v.isCollapsed && v.anchorNode) {
        const i = v.anchorNode, Y = i.textContent || "", x = v.anchorOffset, S = Y.slice(0, x).trim();
        if (!g()) {
          if (S === "-" || S === "–") {
            c.preventDefault(), i.textContent = Y.slice(x), s("dash");
            return;
          }
          if (S === "*") {
            c.preventDefault(), i.textContent = Y.slice(x), s("bullet");
            return;
          }
          if (S === "1.") {
            c.preventDefault(), i.textContent = Y.slice(x), s("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (c) => {
    const v = Te(c);
    if (!v) {
      u({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    u({
      fontFamily: "custom",
      customFontFamily: v
    });
  } };
}
function ro({
  boardIdentity: t,
  tool: n,
  controlledShapes: e,
  onShapesChange: o,
  onDirty: a
}) {
  const u = et(null), l = et(null), [y, g] = ct([]), k = e !== void 0 && o !== void 0, s = et(/* @__PURE__ */ new WeakMap()), f = Xt(() => {
    const F = s.current;
    return (k ? e ?? [] : y).map((K) => {
      let H = F.get(K);
      return H === void 0 && (H = Ne(K), F.set(K, H)), H;
    }).filter((K) => K !== null);
  }, [k, e, y]), r = et(o);
  r.current = o;
  const c = st((F) => {
    const K = r.current;
    if (!K) {
      g(F);
      return;
    }
    K(typeof F == "function" ? F : () => F);
  }, []), [v, i] = ct({ x: -400, y: -300, z: 1 }), [Y, x] = ct(/* @__PURE__ */ new Set()), [S, M] = ct(null), [d, h] = ct({ kind: "none" }), [w, m] = ct(!1), [b, p] = ct([]), [$, z] = ct(""), [C, I] = ct(!1), [E, O] = ct(null), [U, P] = ct("blue"), [T, L] = ct(jt), W = et(U);
  W.current = U;
  const A = et([]), R = et([]), V = et(null), G = et(/* @__PURE__ */ new Map()), B = et(f), Q = et(v), Z = et(n), nt = et(Y), J = et(S);
  B.current = f, Q.current = v, Z.current = n, nt.current = Y, J.current = S;
  const it = et({ kind: "none" }), ot = st((F) => {
    it.current = F, h(F);
  }, []), xt = st((F) => {
    nt.current = F, x(F);
  }, []);
  Kt(() => {
    var K;
    const F = /* @__PURE__ */ new Set();
    nt.current = F, J.current = null, G.current.clear(), A.current = [], R.current = [], V.current = null, ot({ kind: "none" }), x(F), M(null), m(!1), p([]), O(null), z(""), (K = u.current) == null || K.focus();
  }, [ot, t]), $t(() => {
    let F = !1;
    const K = () => {
      const tt = Dn();
      F || L(tt);
    };
    if (K(), typeof document > "u" || !("fonts" in document)) return;
    const H = () => K();
    return document.fonts.addEventListener("loadingdone", H), () => {
      F = !0, document.fonts.removeEventListener("loadingdone", H);
    };
  }, [t]);
  const X = (S ? f.find((F) => F.id === S) : void 0) !== void 0;
  Kt(() => {
    if (!S || !X) return;
    const F = () => {
      const H = l.current, tt = B.current.find((Zt) => Zt.id === S);
      if (!H || !tt || (H.dataset.seeded !== S && (H.innerHTML = Vt(tt), H.dataset.seeded = S), document.activeElement === H)) return;
      H.focus();
      const kt = document.createRange();
      kt.selectNodeContents(H), kt.collapse(!1);
      const zt = window.getSelection();
      zt == null || zt.removeAllRanges(), zt == null || zt.addRange(kt);
    };
    F();
    const K = requestAnimationFrame(F);
    return () => cancelAnimationFrame(K);
  }, [S, X]);
  const D = st((F) => {
    c((K) => {
      const H = typeof F == "function" ? F(K) : F;
      return A.current.push(K), A.current.length > 100 && A.current.shift(), R.current = [], H;
    }), a();
  }, [a]), q = st((F) => F.size === 0 ? !1 : (D((K) => K.filter((H) => F.has(H.id) ? !1 : H.type !== "arrow" ? !0 : !(H.fromId && F.has(H.fromId)) && !(H.toId && F.has(H.toId)))), xt(/* @__PURE__ */ new Set()), z(`${F.size}개 삭제됨`), !0), [D, xt]), at = st(() => {
    V.current = B.current;
  }, []), vt = st(() => {
    const F = V.current;
    V.current = null, !(!F || F === B.current) && (A.current.push(F), A.current.length > 100 && A.current.shift(), R.current = [], a());
  }, [a]), Yt = st((F, K) => {
    var kt;
    const H = (kt = u.current) == null ? void 0 : kt.getBoundingClientRect(), tt = Q.current;
    return H ? { x: (F - H.left) / tt.z + tt.x, y: (K - H.top) / tt.z + tt.y } : { x: 0, y: 0 };
  }, []), Qt = st(() => {
    var H;
    const F = (H = u.current) == null ? void 0 : H.getBoundingClientRect(), K = Q.current;
    return F ? { x: K.x + F.width / 2 / K.z, y: K.y + F.height / 2 / K.z } : { x: 0, y: 0 };
  }, []), Pt = st((F) => {
    const K = new Set(B.current.filter((tt) => F.has(tt.id) && tt.groupId).map((tt) => tt.groupId));
    if (K.size === 0) return F;
    const H = new Set(F);
    for (const tt of B.current) tt.groupId && K.has(tt.groupId) && H.add(tt.id);
    return H;
  }, []);
  return {
    containerRef: u,
    editorRef: l,
    localShapes: y,
    setLocalShapes: g,
    controlled: k,
    shapes: f,
    setShapes: c,
    camera: v,
    setCamera: i,
    cameraRef: Q,
    selected: Y,
    setSelected: x,
    selectedRef: nt,
    editingId: S,
    setEditingId: M,
    editingIdRef: J,
    interaction: d,
    interactionRef: it,
    applyInteraction: ot,
    isSpaceDown: w,
    setIsSpaceDown: m,
    guides: b,
    setGuides: p,
    announcement: $,
    setAnnouncement: z,
    showInspectorPalette: C,
    setShowInspectorPalette: I,
    eraserPos: E,
    setEraserPos: O,
    activeColor: U,
    setActiveColor: P,
    activeColorRef: W,
    installedFontFamilies: T,
    pointers: G,
    past: A,
    future: R,
    selectNow: xt,
    commit: D,
    deleteSelection: q,
    beginHistory: at,
    endHistory: vt,
    toPage: Yt,
    viewportCentre: Qt,
    expandToGroups: Pt,
    toolRef: Z,
    shapesRef: B
  };
}
function io({
  containerRef: t,
  camera: n,
  setCamera: e,
  minZoom: o,
  maxZoom: a,
  shapes: u,
  selected: l,
  editingId: y,
  textualTypes: g,
  onZoomChange: k,
  onSelectionChange: s,
  onLocalCursor: f,
  toPage: r
}) {
  $t(() => {
    k == null || k(n.z);
  }, [n.z, k]), $t(() => {
    const S = t.current;
    if (!S) return;
    const M = (d) => {
      if (d.preventDefault(), d.ctrlKey || d.metaKey) {
        const h = S.getBoundingClientRect();
        e((w) => {
          const m = Math.min(a, Math.max(o, w.z * Math.exp(-d.deltaY * 0.01))), b = d.clientX - h.left, p = d.clientY - h.top;
          return { x: w.x + b / w.z - b / m, y: w.y + p / w.z - p / m, z: m };
        });
      } else
        e((h) => ({ ...h, x: h.x + d.deltaX / h.z, y: h.y + d.deltaY / h.z }));
    };
    return S.addEventListener("wheel", M, { passive: !1 }), () => S.removeEventListener("wheel", M);
  }, [t, a, o, e]);
  const c = Xt(() => {
    const S = u.filter((M) => l.has(M.id));
    return {
      count: S.length,
      canGroup: S.length > 1,
      canUngroup: S.some((M) => !!M.groupId),
      isTextual: S.length === 1 && g.includes(S[0].type),
      selectedIds: S.map((M) => M.id)
    };
  }, [l, u, g]);
  $t(() => {
    s == null || s(c);
  }, [s, c]);
  const v = Xt(() => {
    if (y) {
      const d = u.find((h) => h.id === y);
      return d && d.type !== "image" && d.type !== "draw" ? d : null;
    }
    const S = u.filter((d) => l.has(d.id));
    if (S.length > 1 && S.every((d) => d.type === "draw")) return S[0] ?? null;
    if (S.length !== 1) return null;
    const M = S[0];
    return M && M.type !== "image" ? M : null;
  }, [y, l, u]), i = et(0);
  return { selectionInfo: c, inspectorShape: v, onContainerPointerMove: f ? (S) => {
    const M = performance.now();
    M - i.current < 60 || (i.current = M, f(r(S.clientX, S.clientY)));
  } : void 0, onContainerPointerLeave: f ? () => f(null) : void 0 };
}
function ao(t, n) {
  if (t.length === 0) return null;
  let e = 1 / 0, o = 1 / 0, a = -1 / 0, u = -1 / 0;
  for (const f of t) {
    const r = rt(f);
    e = Math.min(e, r.minX), o = Math.min(o, r.minY), a = Math.max(a, r.maxX), u = Math.max(u, r.maxY);
  }
  const l = 40, y = a - e + l * 2, g = u - o + l * 2;
  if (!Number.isFinite(y) || !Number.isFinite(g) || y > Lt.maxExportDimension || g > Lt.maxExportDimension || y * g > Lt.maxExportPixels) return null;
  const k = (f, r, c, v, i) => {
    const Y = f.fontSize ?? c, x = ut(f), S = Ce(Vt(f));
    if (S.length === 0) return "";
    const M = St(f), d = f.textAlign === "right" ? "end" : f.textAlign === "center" ? "middle" : f.textAlign === "left" ? "start" : i, h = d === "end" ? M.maxX - 12 : d === "middle" ? (M.minX + M.maxX) / 2 : M.minX + 12, w = M.minY + Y + 12;
    return S.map((m, b) => {
      const p = m.map(($) => `<tspan style="${[
        $.bold ? "font-weight:700" : `font-weight:${v}`,
        $.italic ? "font-style:italic" : "",
        $.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Mt($.text)}</tspan>`).join("");
      return `<text x="${h}" y="${w + b * Y * 1.4}" font-family="${Mt(x)}" font-size="${Y}" fill="${r}" text-anchor="${d}">${p}</text>`;
    }).join("");
  }, s = t.map((f) => {
    const r = ft[f.color ?? "blue"], c = St(f), v = gt(f), i = f.rotation ? ` transform="rotate(${f.rotation * 180 / Math.PI} ${v.x} ${v.y})"` : "", Y = f.color ? ft[f.color].border : _.ink;
    if (f.type === "draw" && f.points) {
      const m = (f.drawMode ?? "pen") === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${Ye(f.points)}" fill="none" stroke="${Y}" stroke-width="${f.strokeWidth ?? 3}"${m} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (f.type === "arrow") {
      const m = bt(f, new Map(t.map((A) => [A.id, A])), t), b = f.strokeWidth ?? 2.5, p = Math.max(10, 8 + b * 2), $ = Math.max(4, 2 + b), z = m.routing === "orthogonal" && m.pathPoints ? m.pathPoints : null, C = z && z.length > 1, I = C ? ee(z) : m.routing === "curved" ? `M ${m.start.x} ${m.start.y} Q ${m.control.x} ${m.control.y} ${m.end.x} ${m.end.y}` : `M ${m.start.x} ${m.start.y} L ${m.end.x} ${m.end.y}`, E = C ? Me(z) : m.routing === "curved" ? (() => {
        const A = Wt(0.94, m.start, m.control, m.end);
        return Math.atan2(m.end.y - A.y, m.end.x - A.x);
      })() : Math.atan2(m.end.y - m.start.y, m.end.x - m.start.x), O = C ? At(z[0], z[1]) : m.routing === "orthogonal" && m.start.side ? m.start.side === "e" ? 0 : m.start.side === "w" ? Math.PI : m.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : At(m.start, m.end), U = f.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : f.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", P = (A, R, V, G) => {
        if (A === "dot") return `<circle cx="${R}" cy="${V}" r="${$}" fill="${Y}"/>`;
        if (A === "none") return "";
        const B = `${R - p * Math.cos(G - 0.4)},${V - p * Math.sin(G - 0.4)}`, Q = `${R - p * Math.cos(G + 0.4)},${V - p * Math.sin(G + 0.4)}`;
        return `<polygon points="${R},${V} ${B} ${Q}" fill="${Y}"/>`;
      }, T = m.routing === "orthogonal" && m.pathPoints ? ie(m.pathPoints) : m.bend === 0 ? { x: (m.start.x + m.end.x) / 2, y: (m.start.y + m.end.y) / 2 } : Wt(0.5, m.start, m.control, m.end), L = Gt(f), W = L ? `<text x="${T.x}" y="${T.y - 6}" text-anchor="middle" font-family="${Mt(ut(f))}" font-size="${f.fontSize ?? 12}" fill="${Y}">${Mt(L)}</text>` : "";
      return `<path d="${I}" fill="none" stroke="${Y}" stroke-width="${b}" stroke-linecap="round" stroke-linejoin="round"${U}/>` + P(f.arrowEnd ?? "arrow", m.end.x, m.end.y, E) + P(f.arrowStart ?? "none", m.start.x, m.start.y, O + Math.PI) + W;
    }
    if (f.type === "image" && f.src) {
      const m = oe(f.src);
      return m ? `<image href="${Mt(m)}" x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}"${i}/>` : "";
    }
    if (f.type === "frame")
      return `<g${i}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" fill="none" stroke="${_.slate400}" stroke-width="${f.strokeWidth ?? 2}" rx="4"/><text x="${c.minX}" y="${c.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${_.muted}">${Mt(f.text ?? "프레임")}</text></g>`;
    if (f.type === "note")
      return `<g${i}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" fill="${r.bg}"/><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="6" fill="${r.border}"/>` + k(f, r.text, 14, "600", "start") + "</g>";
    if (f.type === "card") {
      const m = f.cardStyle === "glass";
      return `<g${i}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" rx="16" fill="${m ? _.glassFill : _.slateCard}"/><text x="${c.minX + 16}" y="${c.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${_.slate400}">[ ${Mt(f.category ?? "ENTITY")} ]</text>` + k(f, _.white, 16, "700", "start") + "</g>";
    }
    const x = f.type === "rect" || f.type === "ellipse" || f.type === "triangle" || f.type === "diamond" || f.type === "hexagon" || f.type === "star" ? f.strokeWidth ?? 2 : 2, S = Rt(f), M = Xe(f), d = f.type === "triangle" || f.type === "diamond" || f.type === "hexagon" || f.type === "star", h = d ? Se(f.type, c.maxX - c.minX, c.maxY - c.minY).split(" ").map((m) => {
      const [b, p] = m.split(",").map(Number);
      return `${b + c.minX},${p + c.minY}`;
    }).join(" ") : "", w = f.type === "ellipse" ? `<ellipse cx="${(c.minX + c.maxX) / 2}" cy="${(c.minY + c.maxY) / 2}" rx="${(c.maxX - c.minX) / 2}" ry="${(c.maxY - c.minY) / 2}" fill="${S}" stroke="${M}" stroke-width="${x}"/>` : d ? `<polygon points="${h}" fill="${S}" stroke="${M}" stroke-width="${x}" stroke-linejoin="round"/>` : `<rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" rx="12" fill="${S}" stroke="${M}" stroke-width="${x}"/>`;
    return `<g${i}>${w}${k(f, r.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${y}" height="${g}" viewBox="${e - l} ${o - l} ${y} ${g}"><rect x="${e - l}" y="${o - l}" width="${y}" height="${g}" fill="${n ? _.canvasDark : _.canvasLight}"/>` + s + "</svg>";
}
async function co(t) {
  const n = t();
  if (!n) return null;
  const e = /width="([\d.]+)" height="([\d.]+)"/.exec(n), o = Math.ceil(Number((e == null ? void 0 : e[1]) ?? 1200)), a = Math.ceil(Number((e == null ? void 0 : e[2]) ?? 800)), u = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`, l = new Image();
  l.crossOrigin = "anonymous";
  try {
    await new Promise((r, c) => {
      l.onload = () => r(), l.onerror = () => c(new Error("svg rasterise failed")), l.src = u;
    });
  } catch {
    return null;
  }
  const y = 2, g = o * y, k = a * y;
  if (!Number.isSafeInteger(g) || !Number.isSafeInteger(k) || g > Lt.maxExportDimension || k > Lt.maxExportDimension || g * k > Lt.maxExportPixels) return null;
  const s = document.createElement("canvas");
  s.width = g, s.height = k;
  const f = s.getContext("2d");
  return f ? (f.scale(y, y), f.drawImage(l, 0, 0), new Promise((r) => {
    try {
      s.toBlob((c) => r(c), "image/png");
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
  const a = o.map((r, c) => ({
    id: r.id,
    i: c,
    x: gt(r).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: gt(r).y,
    vx: 0,
    vy: 0
  }));
  for (let r = 0; r < a.length; r++)
    for (let c = 0; c < r; c++)
      if (Math.abs(a[r].x - a[c].x) < 1 && Math.abs(a[r].y - a[c].y) < 1) {
        const v = 2 * Math.PI * r / a.length;
        a[r].x += Math.cos(v) * 10, a[r].y += Math.sin(v) * 10;
        break;
      }
  const u = new Map(a.map((r) => [r.id, r])), l = [];
  for (const r of t) {
    if (r.type !== "arrow") continue;
    const c = r.fromId ? u.get(r.fromId) : null, v = r.toId ? u.get(r.toId) : null;
    c && v && l.push([c, v]);
  }
  const y = 220, g = y * y, k = 80;
  let s = 400;
  const f = s / k;
  for (let r = 0; r < k; r++) {
    for (let c = 0; c < a.length; c++)
      a[c].vx = 0, a[c].vy = 0;
    for (let c = 0; c < a.length; c++)
      for (let v = c + 1; v < a.length; v++) {
        const i = a[c], Y = a[v], x = i.x - Y.x, S = i.y - Y.y, M = Math.hypot(x, S) || 0.01, d = g / M, h = x / M * d, w = S / M * d;
        i.vx += h, i.vy += w, Y.vx -= h, Y.vy -= w;
      }
    for (const [c, v] of l) {
      const i = c.x - v.x, Y = c.y - v.y, x = Math.hypot(i, Y) || 0.01, S = x * x / y, M = i / x * S, d = Y / x * S;
      c.vx -= M, c.vy -= d, v.vx += M, v.vy += d;
    }
    for (const c of a) {
      const v = Math.hypot(c.vx, c.vy) || 0.01, i = Math.min(v, s);
      c.x += c.vx / v * i, c.y += c.vy / v * i;
    }
    s = Math.max(0.5, s - f);
  }
  n((r) => r.map((c) => {
    const v = u.get(c.id);
    return v ? { ...c, x: v.x - c.w / 2, y: v.y - c.h / 2 } : c;
  })), e();
}
function lo(t, {
  controlled: n,
  past: e,
  future: o,
  setLocalShapes: a,
  setCamera: u,
  selectNow: l,
  setEditingId: y
}) {
  let g;
  try {
    g = un(t);
  } catch {
    return;
  }
  n || (e.current = [], o.current = [], a(g.shapes.map(uo))), u(g.camera), l(/* @__PURE__ */ new Set()), y(null);
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
  selectedRef: a,
  past: u,
  future: l,
  controlled: y,
  isDarkMode: g,
  minZoom: k,
  maxZoom: s,
  onToolChange: f,
  onDirty: r,
  commit: c,
  deleteSelection: v,
  selectNow: i,
  viewportCentre: Y,
  setShapes: x,
  setLocalShapes: S,
  setCamera: M,
  setEditingId: d,
  setAnnouncement: h,
  createId: w
}) {
  const m = st((p) => {
    const $ = Y(), z = Ne({
      id: w(),
      x: p.x ?? $.x - p.w / 2,
      y: p.y ?? $.y - p.h / 2,
      ...p
    });
    if (!z) throw new Error("Canvas could not create a valid shape.");
    return c((C) => [...C, z]), i(/* @__PURE__ */ new Set([z.id])), f("select"), h(`${z.type} 추가됨`), z;
  }, [c, w, f, i, h, Y]), b = st(() => ao(e.current, g), [g, e]);
  rn(t, () => ({
    addNote: (p) => {
      const $ = m({ type: "note", w: 180, h: 180, color: p, text: "" });
      d($.id);
    },
    addCard: (p, $, z, C) => {
      m({ type: "card", w: 260, h: 150, text: p, category: $, cardStyle: z, color: C });
    },
    addText: () => {
      const p = m({ type: "text", w: 220, h: 44, text: "" });
      d(p.id);
    },
    addShape: (p, $, z) => {
      m({
        type: p,
        w: p === "ellipse" ? 220 : 200,
        h: p === "ellipse" ? 110 : 140,
        color: $,
        text: z ?? ""
      });
    },
    addArrow: () => {
      const p = Y(), $ = { id: w(), type: "arrow", x: p.x - 140, y: p.y, w: 280, h: 0 };
      c((z) => [...z, $]), i(/* @__PURE__ */ new Set([$.id])), f("select");
    },
    addImage: (p, $, z, C) => {
      m({ type: "image", w: z, h: C, src: p, fileName: $ });
    },
    addFileCard: (p, $, z) => {
      m({ type: "rect", w: 260, h: 120, color: "purple", text: z, src: $, fileName: p });
    },
    updateShapeText: (p, $) => {
      c((z) => z.map((C) => C.id === p ? { ...C, text: $, html: void 0 } : C));
    },
    setTool: f,
    undo: () => {
      const p = u.current.pop();
      p && (l.current.push(e.current), x(p), i(/* @__PURE__ */ new Set()), d(null), r(), h("실행 취소"));
    },
    redo: () => {
      const p = l.current.pop();
      p && (u.current.push(e.current), x(p), i(/* @__PURE__ */ new Set()), d(null), r(), h("다시 실행"));
    },
    deleteSelected: () => {
      v(a.current);
    },
    duplicateSelected: () => {
      var C;
      const p = a.current;
      if (p.size === 0) return;
      const $ = [], z = /* @__PURE__ */ new Map();
      for (const I of e.current) {
        if (!p.has(I.id)) continue;
        let E = I.groupId;
        E && (z.has(E) || z.set(E, w("g")), E = z.get(E)), $.push({
          ...I,
          id: w(),
          x: I.x + 24,
          y: I.y + 24,
          groupId: E,
          points: (C = I.points) == null ? void 0 : C.map(([O, U]) => [O + 24, U + 24]),
          orthogonalWaypoints: I.type === "arrow" && I.orthogonalWaypoints ? I.orthogonalWaypoints.map((O) => ({ x: O.x + 24, y: O.y + 24 })) : void 0
        });
      }
      c((I) => [...I, ...$]), i(new Set($.map((I) => I.id))), h(`${$.length}개 복제됨`);
    },
    group: () => {
      var z;
      const p = a.current;
      if (p.size < 2) return;
      const $ = w("g");
      c((C) => C.map((I) => p.has(I.id) ? { ...I, groupId: $ } : I)), h(`${p.size}개 그룹화됨`), (z = n.current) == null || z.focus();
    },
    ungroup: () => {
      var $;
      const p = a.current;
      p.size !== 0 && (c((z) => z.map((C) => p.has(C.id) ? { ...C, groupId: void 0 } : C)), h("그룹 해제됨"), ($ = n.current) == null || $.focus());
    },
    zoomBy: (p) => {
      M(($) => {
        var O;
        const z = (O = n.current) == null ? void 0 : O.getBoundingClientRect(), C = Math.min(s, Math.max(k, $.z * p));
        if (!z) return { ...$, z: C };
        const I = $.x + z.width / 2 / $.z, E = $.y + z.height / 2 / $.z;
        return { x: I - z.width / 2 / C, y: E - z.height / 2 / C, z: C };
      });
    },
    zoomTo: (p) => {
      M(($) => {
        var O;
        const z = (O = n.current) == null ? void 0 : O.getBoundingClientRect(), C = Math.min(s, Math.max(k, p));
        if (!z) return { ...$, z: C };
        const I = $.x + z.width / 2 / $.z, E = $.y + z.height / 2 / $.z;
        return { x: I - z.width / 2 / C, y: E - z.height / 2 / C, z: C };
      });
    },
    resetZoom: () => {
      M((p) => {
        var I;
        const $ = (I = n.current) == null ? void 0 : I.getBoundingClientRect();
        if (!$) return { ...p, z: 1 };
        const z = p.x + $.width / 2 / p.z, C = p.y + $.height / 2 / p.z;
        return { x: z - $.width / 2, y: C - $.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var P;
      const p = e.current, $ = (P = n.current) == null ? void 0 : P.getBoundingClientRect();
      if (p.length === 0 || !$) return;
      let z = 1 / 0, C = 1 / 0, I = -1 / 0, E = -1 / 0;
      for (const T of p) {
        const L = rt(T);
        z = Math.min(z, L.minX), C = Math.min(C, L.minY), I = Math.max(I, L.maxX), E = Math.max(E, L.maxY);
      }
      const O = 80, U = Math.min(s, Math.max(
        k,
        Math.min($.width / (I - z + O * 2), $.height / (E - C + O * 2))
      ));
      M({
        x: (z + I) / 2 - $.width / 2 / U,
        y: (C + E) / 2 - $.height / 2 / U,
        z: U
      });
    },
    autoLayout: () => so(e.current, c, () => h("자동 배치 완료")),
    exportSvg: b,
    exportPng: () => co(b),
    getSnapshot: () => ({ version: "canvas-v1", shapes: e.current, camera: o.current }),
    loadSnapshot: (p) => lo(p, {
      controlled: y,
      past: u,
      future: l,
      setLocalShapes: S,
      setCamera: M,
      selectNow: i,
      setEditingId: d
    })
  }), [
    m,
    b,
    c,
    w,
    v,
    g,
    s,
    k,
    r,
    f,
    i,
    M,
    d,
    S,
    x,
    h,
    Y,
    y
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
  editingIdRef: a,
  toolRef: u,
  past: l,
  future: y,
  textualTypes: g,
  setIsSpaceDown: k,
  setEditingId: s,
  setShapes: f,
  setAnnouncement: r,
  commit: c,
  deleteSelection: v,
  selectNow: i,
  onDirty: Y,
  onToolChange: x,
  createId: S
}) {
  const M = st((d, h) => {
    const w = o.current;
    w.size !== 0 && c((m) => m.map((b) => {
      var p;
      return w.has(b.id) ? {
        ...b,
        x: b.x + d,
        y: b.y + h,
        points: (p = b.points) == null ? void 0 : p.map(([$, z]) => [$ + d, z + h])
      } : b;
    }));
  }, [c, o]);
  $t(() => {
    const d = (b) => {
      const p = b;
      return !!p && (p.tagName === "INPUT" || p.tagName === "TEXTAREA" || p.isContentEditable);
    }, h = (b) => b instanceof Element && !!b.closest("input, select, button, textarea, option, label, [data-canvas-control]"), w = (b) => {
      var U, P, T, L;
      const p = t.current, $ = document.activeElement, z = b.target instanceof Node && !!(p != null && p.contains(b.target)), C = !!p && ($ === p || p.contains($));
      if (!z && !C || h(b.target)) return;
      if (b.code === "Space" && !d(b.target)) {
        k(!0), b.preventDefault();
        return;
      }
      if (d(b.target)) {
        if (b.key === "Escape")
          b.preventDefault(), s(null), (U = n.current) == null || U.blur(), (P = t.current) == null || P.focus();
        else if ((b.key === "Delete" || b.key === "Backspace") && !a.current) {
          const W = o.current;
          v(W) && b.preventDefault();
        }
        return;
      }
      const I = b.metaKey || b.ctrlKey, E = o.current;
      if (I && b.key.toLowerCase() === "z") {
        if (b.preventDefault(), b.shiftKey) {
          const W = y.current.pop();
          W && (l.current.push(e.current), f(W), Y());
        } else {
          const W = l.current.pop();
          W && (y.current.push(e.current), f(W), Y());
        }
        i(/* @__PURE__ */ new Set());
        return;
      }
      if (I && b.key.toLowerCase() === "g") {
        if (b.preventDefault(), b.shiftKey)
          E.size > 0 && (c((W) => W.map((A) => E.has(A.id) ? { ...A, groupId: void 0 } : A)), r("그룹 해제됨"));
        else if (E.size > 1) {
          const W = S("g");
          c((A) => A.map((R) => E.has(R.id) ? { ...R, groupId: W } : R)), r(`${E.size}개 그룹화됨`);
        }
        return;
      }
      if (I && b.key.toLowerCase() === "a") {
        b.preventDefault(), i(new Set(e.current.map((W) => W.id))), r(`전체 ${e.current.length}개 선택됨`);
        return;
      }
      if (b.key === "Delete" || b.key === "Backspace") {
        v(E) && b.preventDefault();
        return;
      }
      if (b.key.startsWith("Arrow")) {
        b.preventDefault();
        const W = b.shiftKey ? 10 : 1;
        b.key === "ArrowLeft" && M(-W, 0), b.key === "ArrowRight" && M(W, 0), b.key === "ArrowUp" && M(0, -W), b.key === "ArrowDown" && M(0, W);
        return;
      }
      if (b.key === "Tab" && e.current.length > 0) {
        b.preventDefault();
        const W = e.current, A = W.findIndex((G) => E.has(G.id)), R = b.shiftKey ? A <= 0 ? W.length - 1 : A - 1 : A === -1 || A === W.length - 1 ? 0 : A + 1, V = W[R];
        i(/* @__PURE__ */ new Set([V.id])), r(`${V.type} 선택됨: ${Gt(V) || "내용 없음"}`);
        return;
      }
      if (b.key === "Enter" && E.size === 1) {
        const W = e.current.find((A) => E.has(A.id));
        W && g.includes(W.type) && (b.preventDefault(), s(W.id));
        return;
      }
      if (b.key === "Escape") {
        if (a.current) {
          b.preventDefault(), s(null), (T = n.current) == null || T.blur(), (L = t.current) == null || L.focus(), x("select");
          return;
        }
        i(/* @__PURE__ */ new Set()), x("select");
        return;
      }
      const O = fo(b);
      O && (b.preventDefault(), u.current = O, x(O));
    }, m = (b) => {
      const p = t.current;
      !p || !(document.activeElement === p || p.contains(document.activeElement)) || b.code === "Space" && k(!1);
    };
    return window.addEventListener("keydown", w), window.addEventListener("keyup", m), () => {
      window.removeEventListener("keydown", w), window.removeEventListener("keyup", m);
    };
  }, [
    c,
    t,
    S,
    v,
    a,
    n,
    y,
    M,
    Y,
    x,
    l,
    i,
    o,
    r,
    s,
    k,
    f,
    e,
    g,
    u
  ]);
}
const vo = 400;
function po({
  containerRef: t,
  editorRef: n,
  pointers: e,
  cameraRef: o,
  shapesRef: a,
  toolRef: u,
  activeColorRef: l,
  drawStrokeWidth: y,
  camera: g,
  shapes: k,
  selected: s,
  isSpaceDown: f,
  textualTypes: r,
  setShapes: c,
  setEditingId: v,
  applyInteraction: i,
  selectNow: Y,
  beginHistory: x,
  commit: S,
  onToolChange: M,
  expandToGroups: d,
  toPage: h,
  createId: w
}) {
  const m = w, b = et(null), p = (P, T) => {
    var R;
    const L = ((R = t.current) == null ? void 0 : R.dataset.canvasActiveTool) === "text" ? "text" : u.current;
    if (L !== "note" && L !== "text") return;
    const W = h(P, T), A = L === "note" ? { id: m(), type: "note", x: W.x - 90, y: W.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: m(), type: "text", x: W.x, y: W.y - 22, w: 220, h: 44, text: "" };
    S((V) => [...V, A]), Y(/* @__PURE__ */ new Set([A.id])), v(A.id), M("select");
  };
  return $t(() => {
    const P = (T) => {
      var L;
      (L = t.current) != null && L.contains(T.target) && (T.target instanceof Element && T.target.closest('[role="textbox"], [data-canvas-inspector]') || p(T.clientX, T.clientY));
    };
    return window.addEventListener("click", P, !0), () => window.removeEventListener("click", P, !0);
  }), { onPointerDown: (P) => {
    var R, V, G;
    const T = u.current;
    if (e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), e.current.size === 2) {
      const [B, Q] = [...e.current.values()], Z = o.current;
      i({
        kind: "pinch",
        startDist: Math.hypot(Q.x - B.x, Q.y - B.y) || 1,
        startZoom: Z.z,
        startMidX: (B.x + Q.x) / 2,
        startMidY: (B.y + Q.y) / 2,
        camX: Z.x,
        camY: Z.y
      });
      return;
    }
    if (e.current.size > 2) return;
    if (P.button === 1 || f || T === "hand" || P.button === 0 && T === "select" && P.altKey) {
      i({ kind: "pan", startX: P.clientX, startY: P.clientY, camX: g.x, camY: g.y });
      return;
    }
    if (P.button !== 0) return;
    const L = h(P.clientX, P.clientY);
    if (v(null), (R = n.current) == null || R.blur(), (V = t.current) == null || V.focus(), T === "draw" || T === "highlighter") {
      const B = {
        id: m(),
        type: "draw",
        x: L.x,
        y: L.y,
        w: 0,
        h: 0,
        points: [[L.x, L.y]],
        color: l.current,
        strokeWidth: y,
        drawMode: T === "highlighter" ? "highlighter" : "pen"
      };
      x(), c((Q) => [...Q, B]), i({ kind: "drawing", id: B.id });
      return;
    }
    if (T === "arrow" || T === "frame" || hn.includes(T)) {
      const B = T, Q = T === "arrow" ? { id: m(), type: "arrow", x: L.x, y: L.y, w: 0, h: 0, color: l.current } : T === "frame" ? { id: m(), type: "frame", x: L.x, y: L.y, w: 0, h: 0, text: "프레임" } : { id: m(), type: B, x: L.x, y: L.y, w: 0, h: 0, color: l.current, text: "" };
      x(), c((Z) => [...Z, Q]), i({ kind: "creating", id: Q.id, startX: L.x, startY: L.y });
      return;
    }
    if (T === "note" || T === "text") return;
    if (T === "eraser") {
      x(), c((B) => Ee(B, L.x, L.y, 14 / g.z, g.z)), i({ kind: "erasing" });
      return;
    }
    const W = new Map(k.map((B) => [B.id, B])), A = [...k].reverse().find((B) => Ut(B, L.x, L.y, g.z, W, k));
    if (!A)
      b.current = null;
    else {
      const B = Date.now(), Q = !P.shiftKey && r.includes(A.type) && ((G = b.current) == null ? void 0 : G.id) === A.id && B - b.current.time < vo, Z = Q ? A.id : void 0;
      b.current = Q ? null : { id: A.id, time: B };
      const nt = P.shiftKey ? new Set(s).add(A.id) : s.has(A.id) ? s : /* @__PURE__ */ new Set([A.id]), J = d(nt);
      Y(J);
      const it = /* @__PURE__ */ new Map();
      for (const ot of k) J.has(ot.id) && it.set(ot.id, ot);
      for (const ot of k) {
        if (ot.type !== "frame" || !J.has(ot.id)) continue;
        const xt = rt(ot);
        for (const lt of k) {
          if (lt.id === ot.id || it.has(lt.id)) continue;
          const X = gt(lt);
          X.x >= xt.minX && X.x <= xt.maxX && X.y >= xt.minY && X.y <= xt.maxY && it.set(lt.id, lt);
        }
      }
      x(), i({ kind: "move", startX: L.x, startY: L.y, origin: it, editOnReleaseId: Z });
      return;
    }
    P.shiftKey || Y(/* @__PURE__ */ new Set()), i({
      kind: "marquee",
      startX: L.x,
      startY: L.y,
      curX: L.x,
      curY: L.y,
      screenStartX: P.clientX,
      screenStartY: P.clientY
    });
  }, onResizeHandleDown: (P, T, L) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), x(), i({ kind: "resize", id: T.id, handle: L, start: T });
  }, onRotateHandleDown: (P, T) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
    const L = h(P.clientX, P.clientY), W = gt(T);
    x(), i({
      kind: "rotate",
      id: T.id,
      startAngle: Math.atan2(L.y - W.y, L.x - W.x),
      startRotation: T.rotation ?? 0
    });
  }, onConnectHandleDown: (P, T) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
    const L = h(P.clientX, P.clientY);
    i({ kind: "connect", fromId: T.id, toX: L.x, toY: L.y, hoverId: null });
  }, onBendHandleDown: (P, T) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), x(), i({ kind: "bend", id: T.id });
  }, onOrthogonalSegmentHandleDown: (P, T, L) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), x(), i({ kind: "orthogonal-segment", id: T.id, segmentIndex: L });
  }, onArrowEndpointDown: (P, T, L) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), x(), i({ kind: "arrow-endpoint", id: T.id, endpoint: L, hoverId: null });
  } };
}
const yo = 0.1, go = 4, wo = 14, bo = 4, ve = ["note", "card", "rect", "ellipse", "text", "image"];
function $o({
  pointers: t,
  interactionRef: n,
  cameraRef: e,
  toPage: o,
  shapesRef: a,
  setShapes: u,
  setEditingId: l,
  setEraserPos: y,
  setGuides: g,
  setAnnouncement: k,
  applyInteraction: s,
  selectNow: f,
  endHistory: r,
  commit: c,
  onToolChange: v,
  createId: i
}) {
  const Y = i;
  $t(() => {
    const x = (S) => {
      t.current.delete(S.pointerId);
      const M = n.current;
      if (M.kind !== "none") {
        if (M.kind === "pinch") {
          t.current.size < 2 && s({ kind: "none" });
          return;
        }
        if (g([]), M.kind === "erasing") {
          y(null), r(), s({ kind: "none" });
          return;
        }
        if (M.kind === "connect") {
          const h = a.current.find((z) => z.id === M.fromId);
          if (s({ kind: "none" }), !h) return;
          const w = { x: M.toX, y: M.toY }, m = gt(h);
          if (!M.hoverId && Math.hypot(w.x - m.x, w.y - m.y) < 30) return;
          const b = [];
          let p = M.hoverId;
          if (!p) {
            const z = h.type === "note" ? 180 : 200, C = h.type === "note" ? 180 : 120, I = {
              ...h,
              id: Y(),
              x: w.x - z / 2,
              y: w.y - C / 2,
              w: z,
              h: C,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            b.push(I), p = I.id;
          }
          const $ = {
            id: Y(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: h.id,
            toId: p,
            text: ""
          };
          b.push($), c((z) => [...z, ...b]), f(/* @__PURE__ */ new Set([$.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => l($.id)) : l($.id), k("연결 생성됨");
          return;
        }
        if (M.kind === "bend") {
          r(), s({ kind: "none" });
          return;
        }
        if (M.kind === "drawing") {
          u((d) => d.map((h) => {
            if (h.id !== M.id || !h.points) return h;
            const w = h.points.map(($) => $[0]), m = h.points.map(($) => $[1]), b = Math.min(...w), p = Math.min(...m);
            return { ...h, x: b, y: p, w: Math.max(...w) - b, h: Math.max(...m) - p };
          })), r(), s({ kind: "none" });
          return;
        }
        if (M.kind === "creating") {
          u((d) => d.map((h) => {
            if (h.id !== M.id) return h;
            const w = Math.abs(h.w) < 4 && Math.abs(h.h) < 4 ? {
              ...h,
              w: h.type === "arrow" ? 200 : h.type === "frame" ? 480 : 180,
              h: h.type === "arrow" ? 0 : h.type === "frame" ? 320 : 120
            } : h;
            if (w.type === "arrow") return w;
            const m = St(w);
            return { ...w, x: m.minX, y: m.minY, w: m.maxX - m.minX, h: m.maxY - m.minY };
          })), r(), f(/* @__PURE__ */ new Set([M.id])), v("select"), s({ kind: "none" });
          return;
        }
        if ((M.kind === "move" || M.kind === "resize" || M.kind === "rotate" || M.kind === "orthogonal-segment" || M.kind === "arrow-endpoint") && r(), M.kind === "move" && M.editOnReleaseId && S.type === "pointerup") {
          const d = o(S.clientX, S.clientY);
          Math.hypot(d.x - M.startX, d.y - M.startY) * e.current.z <= bo && l(M.editOnReleaseId);
        }
        s({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", x), window.addEventListener("pointercancel", x), () => {
      window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", x);
    };
  }, [s, e, i, r, n, v, t, f, k, l, u, a, o]);
}
function ko({
  containerRef: t,
  pointers: n,
  interactionRef: e,
  cameraRef: o,
  shapesRef: a,
  setCamera: u,
  setShapes: l,
  setEraserPos: y,
  setGuides: g,
  applyInteraction: k,
  selectNow: s,
  expandToGroups: f,
  toPage: r
}) {
  $t(() => {
    const c = (v) => {
      var S, M;
      n.current.has(v.pointerId) && n.current.set(v.pointerId, { x: v.clientX, y: v.clientY });
      const i = e.current;
      if (i.kind === "none") return;
      const Y = o.current;
      if (i.kind === "pinch") {
        if (n.current.size < 2) return;
        const [d, h] = [...n.current.values()], w = Math.hypot(h.x - d.x, h.y - d.y) || 1, m = (d.x + h.x) / 2, b = (d.y + h.y) / 2, p = (S = t.current) == null ? void 0 : S.getBoundingClientRect();
        if (!p) return;
        const $ = Math.min(go, Math.max(yo, i.startZoom * (w / i.startDist))), z = i.camX + (i.startMidX - p.left) / i.startZoom, C = i.camY + (i.startMidY - p.top) / i.startZoom;
        u({ x: z - (m - p.left) / $, y: C - (b - p.top) / $, z: $ });
        return;
      }
      if (i.kind === "pan") {
        u({
          x: i.camX - (v.clientX - i.startX) / Y.z,
          y: i.camY - (v.clientY - i.startY) / Y.z,
          z: Y.z
        });
        return;
      }
      const x = r(v.clientX, v.clientY);
      if (i.kind === "erasing") {
        l((d) => Ee(d, x.x, x.y, wo / Y.z, Y.z)), y({ x: x.x, y: x.y });
        return;
      }
      if (i.kind === "connect") {
        const d = a.current, h = new Map(d.map((m) => [m.id, m])), w = [...d].reverse().find((m) => m.id !== i.fromId && ve.includes(m.type) && Ut(m, x.x, x.y, Y.z, h, d));
        k({ ...i, toX: x.x, toY: x.y, hoverId: (w == null ? void 0 : w.id) ?? null });
        return;
      }
      if (i.kind === "bend") {
        const d = a.current, h = d.find((I) => I.id === i.id);
        if (!h) return;
        const w = bt(h, new Map(d.map((I) => [I.id, I])), d), m = w.end.x - w.start.x, b = w.end.y - w.start.y, p = Math.hypot(m, b) || 1, $ = (w.start.x + w.end.x) / 2, z = (w.start.y + w.end.y) / 2, C = (x.x - $) * (-b / p) + (x.y - z) * (m / p);
        l((I) => I.map((E) => E.id === i.id ? { ...E, bend: C } : E));
        return;
      }
      if (i.kind === "orthogonal-segment") {
        const d = a.current, h = d.find((C) => C.id === i.id);
        if (!h) return;
        const w = bt(h, new Map(d.map((C) => [C.id, C])), d), m = w.routing === "orthogonal" ? w.pathPoints : void 0;
        if (!m || m.length < 2) return;
        const b = m[i.segmentIndex], p = m[i.segmentIndex + 1];
        if (!b || !p) return;
        const $ = b.x === p.x ? x.x : x.y, z = Nn(m, i.segmentIndex, $);
        l((C) => C.map((I) => I.id === i.id ? { ...I, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: z.slice(1, -1).map((E) => ({ x: E.x, y: E.y })) } : I));
        return;
      }
      if (i.kind === "arrow-endpoint") {
        const d = a.current, h = d.find((z) => z.id === i.id);
        if (!h) return;
        const w = new Map(d.map((z) => [z.id, z])), m = bt(h, w, d), b = i.endpoint === "start" ? m.end : m.start, p = [...d].reverse().find((z) => z.id !== h.id && ve.includes(z.type) && Ut(z, x.x, x.y, Y.z, w, d)), $ = p ? It(p, b.x, b.y) : { x: x.x, y: x.y };
        k({ ...i, hoverId: (p == null ? void 0 : p.id) ?? null }), l((z) => z.map((C) => {
          if (C.id !== h.id) return C;
          const I = i.endpoint === "start" ? $ : b, E = i.endpoint === "end" ? $ : b;
          return {
            ...C,
            x: I.x,
            y: I.y,
            w: E.x - I.x,
            h: E.y - I.y,
            fromId: i.endpoint === "start" ? p == null ? void 0 : p.id : C.fromId,
            toId: i.endpoint === "end" ? p == null ? void 0 : p.id : C.toId
          };
        }));
        return;
      }
      if (i.kind === "marquee") {
        k({ ...i, curX: x.x, curY: x.y });
        const d = Math.min(i.startX, x.x), h = Math.max(i.startX, x.x), w = Math.min(i.startY, x.y), m = Math.max(i.startY, x.y), b = Math.min(i.screenStartX, v.clientX), p = Math.max(i.screenStartX, v.clientX), $ = Math.min(i.screenStartY, v.clientY), z = Math.max(i.screenStartY, v.clientY), C = /* @__PURE__ */ new Map();
        (M = t.current) == null || M.querySelectorAll("[data-canvas-shape-id]").forEach((E) => {
          const O = E.dataset.canvasShapeId;
          O && C.set(O, E.getBoundingClientRect());
        });
        const I = a.current.filter((E) => {
          const O = C.get(E.id);
          if (O)
            return O.right >= b && O.left <= p && O.bottom >= $ && O.top <= z;
          const U = rt(E);
          return U.maxX >= d && U.minX <= h && U.maxY >= w && U.minY <= m;
        }).map((E) => E.id);
        s(f(new Set(I)));
        return;
      }
      if (i.kind === "move") {
        let d = x.x - i.startX, h = x.y - i.startY;
        const w = i.origin, m = (() => {
          let $ = 1 / 0, z = 1 / 0, C = -1 / 0, I = -1 / 0;
          return w.forEach((E) => {
            const O = rt({ ...E, x: E.x + d, y: E.y + h });
            $ = Math.min($, O.minX), z = Math.min(z, O.minY), C = Math.max(C, O.maxX), I = Math.max(I, O.maxY);
          }), { minX: $, minY: z, maxX: C, maxY: I };
        })(), b = a.current.filter(($) => !w.has($.id)), p = Pn(m, b, Y.z);
        d += p.dx, h += p.dy, g(p.guides), l(($) => $.map((z) => {
          var I;
          const C = w.get(z.id);
          return C ? {
            ...z,
            x: C.x + d,
            y: C.y + h,
            points: (I = C.points) == null ? void 0 : I.map(([E, O]) => [E + d, O + h]),
            ...C.type === "arrow" && C.orthogonalWaypoints ? { orthogonalWaypoints: C.orthogonalWaypoints.map((E) => ({ x: E.x + d, y: E.y + h })) } : {}
          } : z;
        }));
        return;
      }
      if (i.kind === "drawing") {
        l((d) => d.map((h) => {
          if (h.id !== i.id || !h.points) return h;
          if (v.shiftKey) {
            const m = h.points[0];
            return m ? { ...h, points: [m, [x.x, x.y]] } : h;
          }
          const w = h.points[h.points.length - 1];
          return Math.hypot(x.x - w[0], x.y - w[1]) < 2 / Y.z ? h : { ...h, points: [...h.points, [x.x, x.y]] };
        }));
        return;
      }
      if (i.kind === "creating") {
        l((d) => d.map((h) => h.id === i.id ? { ...h, w: x.x - i.startX, h: x.y - i.startY } : h));
        return;
      }
      if (i.kind === "rotate") {
        const d = a.current.find((b) => b.id === i.id);
        if (!d) return;
        const h = gt(d), w = Math.atan2(x.y - h.y, x.x - h.x);
        let m = i.startRotation + (w - i.startAngle);
        v.shiftKey && (m = Math.round(m / (Math.PI / 12)) * (Math.PI / 12)), l((b) => b.map((p) => p.id === i.id ? { ...p, rotation: m } : p));
        return;
      }
      if (i.kind === "resize") {
        const { start: d, handle: h } = i, w = Ie(d, x.x, x.y);
        l((m) => m.map((b) => {
          if (b.id !== d.id) return b;
          let { x: p, y: $, w: z, h: C } = d;
          if (h.includes("e") && (z = Math.max(20, w.x - d.x)), h.includes("s") && (C = Math.max(20, w.y - d.y)), h.includes("w")) {
            const I = d.x + d.w;
            p = Math.min(w.x, I - 20), z = I - p;
          }
          if (h.includes("n")) {
            const I = d.y + d.h;
            $ = Math.min(w.y, I - 20), C = I - $;
          }
          return { ...b, x: p, y: $, w: z, h: C, manualSize: b.type === "text" ? !0 : b.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", c), () => window.removeEventListener("pointermove", c);
  }, [k, t, f, e, n, s, a, r]);
}
function zo(t) {
  ko(t), $o(t);
}
function Mo({
  containerRef: t,
  editorRef: n,
  pointers: e,
  interactionRef: o,
  cameraRef: a,
  shapesRef: u,
  toolRef: l,
  activeColorRef: y,
  drawStrokeWidth: g,
  camera: k,
  shapes: s,
  selected: f,
  isSpaceDown: r,
  textualTypes: c,
  setCamera: v,
  setShapes: i,
  setEditingId: Y,
  setEraserPos: x,
  setGuides: S,
  setAnnouncement: M,
  applyInteraction: d,
  selectNow: h,
  beginHistory: w,
  endHistory: m,
  commit: b,
  onToolChange: p,
  expandToGroups: $,
  toPage: z,
  createId: C
}) {
  const I = po({
    containerRef: t,
    editorRef: n,
    pointers: e,
    cameraRef: a,
    shapesRef: u,
    toolRef: l,
    activeColorRef: y,
    drawStrokeWidth: g,
    camera: k,
    shapes: s,
    selected: f,
    isSpaceDown: r,
    textualTypes: c,
    setShapes: i,
    setEditingId: Y,
    applyInteraction: d,
    selectNow: h,
    beginHistory: w,
    commit: b,
    onToolChange: p,
    expandToGroups: $,
    toPage: z,
    createId: C
  });
  return zo({
    containerRef: t,
    pointers: e,
    interactionRef: o,
    cameraRef: a,
    shapesRef: u,
    setCamera: v,
    setShapes: i,
    setEditingId: Y,
    setEraserPos: x,
    setGuides: S,
    setAnnouncement: M,
    applyInteraction: d,
    selectNow: h,
    endHistory: m,
    commit: b,
    onToolChange: p,
    expandToGroups: $,
    toPage: z,
    createId: C
  }), I;
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
  zoom: a
}) {
  const u = e || o.kind === "pan" ? "grabbing" : n === "hand" ? "grab" : n === "draw" ? "crosshair" : n === "eraser" ? "cell" : n === "select" ? "default" : "crosshair", l = t ? _.gridDark : _.gridLight, y = 40 * a;
  return { cursor: u, gridColor: l, gridSize: y, strokeColorOf: (k) => k.color ? ft[k.color].border : t ? "var(--canvas-slate-200)" : _.ink };
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
  drawStrokeWidth: a = 4,
  onToolChange: u,
  onDirty: l,
  onZoomChange: y,
  onSelectionChange: g,
  shapes: k,
  onShapesChange: s,
  peerCursors: f,
  onLocalCursor: r,
  renderDiagram: c
}, v) {
  var de, ue;
  const {
    containerRef: i,
    editorRef: Y,
    setLocalShapes: x,
    controlled: S,
    shapes: M,
    setShapes: d,
    camera: h,
    setCamera: w,
    cameraRef: m,
    selected: b,
    selectedRef: p,
    editingId: $,
    setEditingId: z,
    editingIdRef: C,
    interaction: I,
    interactionRef: E,
    applyInteraction: O,
    isSpaceDown: U,
    setIsSpaceDown: P,
    guides: T,
    setGuides: L,
    announcement: W,
    setAnnouncement: A,
    showInspectorPalette: R,
    setShowInspectorPalette: V,
    eraserPos: G,
    setEraserPos: B,
    setActiveColor: Q,
    activeColorRef: Z,
    installedFontFamilies: nt,
    pointers: J,
    past: it,
    future: ot,
    selectNow: xt,
    commit: lt,
    deleteSelection: X,
    beginHistory: D,
    endHistory: q,
    toPage: at,
    viewportCentre: vt,
    expandToGroups: Yt,
    toolRef: Qt,
    shapesRef: Pt
  } = ro({ boardIdentity: n, tool: o, controlledShapes: k, onShapesChange: s, onDirty: l }), {
    inspectorShape: F,
    onContainerPointerMove: K,
    onContainerPointerLeave: H
  } = io({
    containerRef: i,
    camera: h,
    setCamera: w,
    minZoom: pe,
    maxZoom: ye,
    shapes: M,
    selected: b,
    editingId: $,
    textualTypes: ge,
    onZoomChange: y,
    onSelectionChange: g,
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
    ref: v,
    containerRef: i,
    editorRef: Y,
    pointers: J,
    interactionRef: E,
    cameraRef: m,
    shapesRef: Pt,
    toolRef: Qt,
    activeColorRef: Z,
    drawStrokeWidth: a,
    camera: h,
    shapes: M,
    selected: b,
    isSpaceDown: U,
    setCamera: w,
    setShapes: d,
    setEditingId: z,
    setEraserPos: B,
    setGuides: L,
    setAnnouncement: A,
    applyInteraction: O,
    selectNow: xt,
    past: it,
    future: ot,
    beginHistory: D,
    endHistory: q,
    commit: lt,
    deleteSelection: X,
    onDirty: l,
    onToolChange: u,
    controlled: S,
    isDarkMode: e,
    minZoom: pe,
    maxZoom: ye,
    textualTypes: ge,
    selectedRef: p,
    editingIdRef: C,
    setIsSpaceDown: P,
    viewportCentre: vt,
    setLocalShapes: x,
    expandToGroups: Yt,
    toPage: at,
    createId: No
  }), { cursor: je, gridColor: Ke, gridSize: ae, strokeColorOf: Re } = So({
    isDarkMode: e,
    tool: o === "highlighter" ? "draw" : o,
    isSpaceDown: U,
    interaction: I,
    zoom: h.z
  }), ce = (pt) => {
    const en = p.current, xe = C.current, Ft = new Set(en);
    if (xe && Ft.add(xe), Ft.size === 0) return;
    const he = "strokeWidth" in pt, nn = Object.keys(pt).every((yt) => yt === "color" || yt === "fillColor" || yt === "strokeWidth");
    if ((F == null ? void 0 : F.type) === "draw" && nn) {
      const yt = "color" in pt ? pt.color : void 0, ht = "strokeWidth" in pt ? pt.strokeWidth : void 0;
      lt((on) => Co(on, Ft, {
        ...yt !== void 0 ? { color: yt } : {},
        ...ht !== void 0 ? { strokeWidth: ht } : {}
      }));
      return;
    }
    if (he) {
      const yt = pt.strokeWidth;
      if (yt !== void 0 && Object.keys(pt).length === 1) {
        lt((ht) => Yo(ht, Ft, yt));
        return;
      }
    }
    lt((yt) => yt.map((ht) => {
      if (!Ft.has(ht.id)) return ht;
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
    editingId: $,
    setShapes: d,
    setAnnouncement: A,
    onDirty: l,
    patchSelected: ce
  }), { renderEditor: Ze, renderShapeBody: Je } = eo({
    camera: h,
    editingId: $,
    isDarkMode: e,
    editorRef: Y,
    commitEditorHtml: Ue,
    onEditorKeyDown: qe,
    setShapes: d,
    onDirty: l,
    renderDiagram: c
  }), tn = I.kind === "marquee" ? I : null, { shapeById: se, visiblePaintOrder: le } = no({
    containerRef: i,
    shapesRef: Pt,
    shapes: M,
    camera: h,
    selected: b,
    editingId: $,
    boardIdentity: n
  });
  return /* @__PURE__ */ j(
    "div",
    {
      ref: i,
      onPointerDown: tt,
      onPointerMove: K,
      onPointerLeave: H,
      role: "application",
      "data-canvas-board-id": n,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": h.x,
      "data-canvas-camera-y": h.y,
      "data-canvas-camera-z": h.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: je,
        background: e ? _.canvasDark : _.canvasLight,
        backgroundImage: `radial-gradient(${Ke} 1px, transparent 1px)`,
        backgroundSize: `${ae}px ${ae}px`,
        backgroundPosition: `${-h.x * h.z}px ${-h.y * h.z}px`
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
            children: W
          }
        ),
        /* @__PURE__ */ N(
          Ln,
          {
            visiblePaintOrder: le,
            selected: b,
            shapeById: se,
            allShapes: Pt.current,
            camera: h,
            interaction: I,
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
            selected: b,
            editingId: $,
            camera: h,
            shapeById: se,
            allShapes: Pt.current,
            peerCursors: f,
            isDarkMode: e,
            renderEditor: Ze,
            renderShapeBody: Je,
            setEditingId: z,
            onBendHandleDown: _e,
            onOrthogonalSegmentHandleDown: He,
            onResizeHandleDown: kt,
            onRotateHandleDown: zt,
            onConnectHandleDown: Zt,
            onArrowEndpointDown: Be
          }
        ),
        F && /* @__PURE__ */ N(
          to,
          {
            shape: F,
            shapes: M,
            camera: h,
            canvasSize: { width: ((de = i.current) == null ? void 0 : de.clientWidth) ?? 380, height: ((ue = i.current) == null ? void 0 : ue.clientHeight) ?? 190 },
            isDarkMode: e,
            editing: !!$,
            showPalette: R,
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
  Fo as diagramTemplate,
  qn as getInspectorGroups,
  We as isDiagramShape
};
