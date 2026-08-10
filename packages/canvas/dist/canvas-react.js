import { jsx as N, jsxs as K, Fragment as Mt } from "react/jsx-runtime";
import Jt, { useRef as tt, useState as it, useLayoutEffect as te, useEffect as yt, useMemo as kt, useCallback as rt, useImperativeHandle as nn, forwardRef as on } from "react";
import { p as rn, i as re, k as we, a as dt, v as an, c as vt, s as cn, b as sn, d as Nt, h as ln, C as dn, S as un } from "./document-C_I4ZYDp.js";
import { Palette as xn, Minus as hn, Plus as fn, ChevronDown as mn, AlignLeft as vn, AlignCenter as pn, AlignRight as yn, List as gn, ListOrdered as wn, Bold as bn, Italic as kn, Underline as $n } from "lucide-react";
const zn = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover{background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover{background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', H = Object.freeze({
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
function At(t, n, e) {
  return !(Math.min(t.x, e.x) > n.x || n.x > Math.max(t.x, e.x) || Math.min(t.y, e.y) > n.y || n.y > Math.max(t.y, e.y));
}
function Wt(t, n, e) {
  return (n.y - t.y) * (e.x - n.x) - (n.x - t.x) * (e.y - n.y);
}
function Ot(t, n, e, o) {
  const u = Wt(t, n, e), d = Wt(t, n, o), y = Wt(e, o, t), g = Wt(e, o, n);
  return Math.abs(u) < 1e-6 && At(t, e, n) || Math.abs(d) < 1e-6 && At(t, o, n) || Math.abs(y) < 1e-6 && At(e, t, o) || Math.abs(g) < 1e-6 && At(e, n, o) ? !0 : u > 0 != d > 0 && y > 0 != g > 0;
}
function Mn(t, n, e) {
  const o = Math.min(t.x, n.x), i = Math.max(t.x, n.x), u = Math.min(t.y, n.y), d = Math.max(t.y, n.y);
  if (i < e.minX || o > e.maxX || d < e.minY || u > e.maxY) return !1;
  if (t.x >= e.minX && t.x <= e.maxX && t.y >= e.minY && t.y <= e.maxY || n.x >= e.minX && n.x <= e.maxX && n.y >= e.minY && n.y <= e.maxY) return !0;
  const y = { x: e.minX, y: e.minY }, g = { x: e.maxX, y: e.minY }, w = { x: e.maxX, y: e.maxY }, l = { x: e.minX, y: e.maxY };
  return Ot(t, n, y, g) || Ot(t, n, g, w) || Ot(t, n, w, l) || Ot(t, n, l, y);
}
function Xn(t, n) {
  for (let e = 1; e < t.length; e++)
    for (const o of n)
      if (Mn(t[e - 1], t[e], o)) return !0;
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
    const d = Math.hypot(t[u].x - t[u - 1].x, t[u].y - t[u - 1].y);
    if (o + d >= e) {
      const y = (e - o) / d;
      return { x: t[u - 1].x + (t[u].x - t[u - 1].x) * y, y: t[u - 1].y + (t[u].y - t[u - 1].y) * y };
    }
    o += d;
  }
  const i = t[t.length - 1];
  return { x: i.x, y: i.y };
}
function Lt(t, n) {
  return Math.atan2(n.y - t.y, n.x - t.x);
}
function fe(t, n, e, o) {
  const i = /* @__PURE__ */ new Set([t, n]), u = Math.min(t, n), d = Math.max(t, n), y = be * 1.2;
  for (const g of e) {
    const w = (o === "x" ? g.minX : g.minY) - y, l = (o === "x" ? g.maxX : g.maxY) + y, r = (f) => f >= u - y * 4 && f <= d + y * 4;
    r(w) && i.add(w), r(l) && i.add(l);
  }
  return [...i].sort((g, w) => Math.abs(g - t) - Math.abs(w - t));
}
function ke(t) {
  const n = [];
  for (const e of t) {
    const o = n[n.length - 1];
    (!o || o.x !== e.x || o.y !== e.y) && n.push(e);
  }
  return n;
}
function $e(t) {
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
function Yn(t, n, e) {
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
  return $e(o);
}
function Sn(t, n, e) {
  const o = t[n], i = t[n + 1];
  if (!o || !i || !Number.isFinite(e) || o.x !== i.x && o.y !== i.y) return [...t];
  const u = o.x === i.x ? [o, { x: e, y: o.y }, { x: e, y: i.y }, i] : [o, { x: o.x, y: e }, { x: i.x, y: e }, i];
  return $e([
    ...t.slice(0, n),
    ...u,
    ...t.slice(n + 2)
  ]);
}
function Zt(t, n) {
  const e = [], o = [];
  for (const u of t) {
    const d = ke(u);
    d.length < 2 || (Xn(d, n) ? o.push(d) : e.push(d));
  }
  const i = e.length > 0 ? e : o;
  return i.length === 0 ? [] : i.reduce((u, d) => ne(d) < ne(u) ? d : u);
}
function me(t) {
  for (let n = 1; n < t.length; n++) {
    if (t[n - 1].x !== t[n].x) return "x";
    if (t[n - 1].y !== t[n].y) return "y";
  }
}
function Ct(t, n, e, o) {
  const i = Math.min(t, n), u = Math.max(t, n), d = Math.max(48, Math.abs(n - t) * 0.35, be * 4);
  if (o === "x") {
    if (e === "e") return u + d;
    if (e === "w") return i - d;
  } else {
    if (e === "s") return u + d;
    if (e === "n") return i - d;
  }
  return t <= n ? i - d : u + d;
}
function Cn(t, n, e, o, i) {
  const u = (t.x + n.x) / 2, d = (t.y + n.y) / 2;
  if (e === "u") {
    if (o) {
      const g = Ct(t.x, n.x, t.side, "x");
      return [t, { x: g, y: t.y }, { x: g, y: n.y }, n];
    }
    const y = Ct(t.y, n.y, t.side, "y");
    return [t, { x: t.x, y }, { x: n.x, y }, n];
  }
  if (e === "zigzag") {
    if (o) {
      const w = Ct(t.x, n.x, t.side, "x"), l = Ct(t.y, n.y, t.side, "y");
      return i ? [t, { x: w, y: t.y }, { x: w, y: l }, { x: u, y: l }, { x: u, y: n.y }, n] : [t, { x: w, y: t.y }, { x: w, y: l }, { x: n.x, y: l }, n];
    }
    const y = Ct(t.y, n.y, t.side, "y"), g = Ct(t.x, n.x, t.side, "x");
    return i ? [t, { x: t.x, y }, { x: g, y }, { x: g, y: n.y }, n] : [t, { x: t.x, y }, { x: g, y }, { x: g, y: d }, { x: n.x, y: d }, n];
  }
  return [];
}
function ze(t, n, e = [], o = "elbow", i = []) {
  if (i.length > 0) return Yn(t, n, i);
  const u = t.side ?? (Math.abs(n.x - t.x) >= Math.abs(n.y - t.y) ? "e" : "s"), d = n.side ?? (u === "e" || u === "w" ? "w" : "n"), y = u === "e" || u === "w", g = d === "e" || d === "w", w = fe(t.x, n.x, e, "x"), l = fe(t.y, n.y, e, "y"), r = [];
  if (y && g) {
    for (const a of w) r.push([t, { x: a, y: t.y }, { x: a, y: n.y }, n]);
    for (const a of l) r.push([t, { x: t.x, y: a }, { x: n.x, y: a }, n]);
  } else if (!y && !g) {
    for (const a of l) r.push([t, { x: t.x, y: a }, { x: n.x, y: a }, n]);
    for (const a of w) r.push([t, { x: a, y: t.y }, { x: a, y: n.y }, n]);
  } else if (y) {
    r.push([t, { x: n.x, y: t.y }, n]);
    for (const a of l)
      r.push([t, { x: t.x, y: a }, { x: n.x, y: a }, n]), r.push([t, { x: t.x, y: a }, n]);
    for (const a of w) r.push([t, { x: a, y: t.y }, { x: a, y: n.y }, n]);
  } else {
    r.push([t, { x: t.x, y: n.y }, n]);
    for (const a of l)
      r.push([t, { x: t.x, y: a }, n]), r.push([t, { x: t.x, y: a }, { x: n.x, y: a }, n]);
    for (const a of w) r.push([t, { x: a, y: t.y }, { x: a, y: n.y }, n]);
  }
  const f = Zt(r, e);
  if (o === "elbow") return f;
  if (o === "reverse") {
    const a = me(f), S = Zt(r.filter((h) => me(h) !== a), e);
    return S.length > 1 ? S : f;
  }
  const c = Cn(t, n, o, y, g), v = Zt([c], e);
  return v.length > 1 ? v : f;
}
function Me(t) {
  return t.length < 2 ? 0 : Lt(t[t.length - 2], t[t.length - 1]);
}
function Bt(t) {
  if (t.fillColor)
    try {
      return we(t.fillColor);
    } catch {
    }
  return t.color ? dt[t.color].bg : dt.blue.bg;
}
function Xe(t) {
  return t.color ? dt[t.color].border : "#2563eb";
}
function Xt(t) {
  if (t.textColor)
    try {
      return we(t.textColor);
    } catch {
    }
  return t.color ? dt[t.color].text : "#0f172a";
}
function Ye(t, n, e) {
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
      const o = n / 2, i = e / 2, u = Math.min(n, e) / 2, d = u * 0.4, y = [];
      for (let g = 0; g < 10; g++) {
        const w = Math.PI / 5 * g - Math.PI / 2, l = g % 2 === 0 ? u : d;
        y.push(`${o + l * Math.cos(w)},${i + l * Math.sin(w)}`);
      }
      return y.join(" ");
    }
    default:
      return "";
  }
}
function Se(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let n = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [i, u] = t[o], [d, y] = t[o + 1];
    n += ` Q ${i} ${u} ${(i + d) / 2} ${(u + y) / 2}`;
  }
  const e = t[t.length - 1];
  return `${n} L ${e[0]} ${e[1]}`;
}
function bt(t) {
  return t.replace(/[&<>\"]/g, (n) => n === "&" ? "&amp;" : n === "<" ? "&lt;" : n === ">" ? "&gt;" : "&quot;");
}
function Ce(t) {
  const n = document.createElement("template");
  n.innerHTML = t;
  const e = [[]], o = (i, u) => {
    i.childNodes.forEach((d) => {
      if (d.nodeType === Node.TEXT_NODE) {
        const l = d.textContent ?? "";
        l && e[e.length - 1].push({ text: l, ...u });
        return;
      }
      if (d.nodeType !== Node.ELEMENT_NODE) return;
      const y = d;
      if (y.tagName === "BR") {
        e.push([]);
        return;
      }
      const g = { bold: u.bold || y.tagName === "B" || y.tagName === "STRONG", italic: u.italic || y.tagName === "I" || y.tagName === "EM", underline: u.underline || y.tagName === "U" }, w = y.tagName === "DIV" || y.tagName === "P" || y.tagName === "LI";
      w && e[e.length - 1].length > 0 && e.push([]), o(y, g), w && e.push([]);
    });
  };
  return o(n.content, { bold: !1, italic: !1, underline: !1 }), e.filter((i) => i.length > 0);
}
function Kt(t) {
  return t.html ? re(t.html) : t.text ? bt(t.text).replace(/\n/g, "<br>") : "";
}
function oe(t) {
  if (t)
    try {
      return an(t);
    } catch {
      return;
    }
}
function Ne(t) {
  try {
    return rn(t);
  } catch {
    return null;
  }
}
function Rt(t) {
  return t.html ? Ce(t.html).map((n) => n.map((e) => e.text).join("")).join(`
`) : t.text ?? "";
}
const Dt = 12;
function $t(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function mt(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function nt(t) {
  const n = t.rotation ?? 0, e = $t(t);
  if (!n) return e;
  const o = mt(t), i = Math.cos(n), u = Math.sin(n), d = [
    [e.minX, e.minY],
    [e.maxX, e.minY],
    [e.maxX, e.maxY],
    [e.minX, e.maxY]
  ].map(([w, l]) => {
    const r = w - o.x, f = l - o.y;
    return [o.x + r * i - f * u, o.y + r * u + f * i];
  }), y = d.map((w) => w[0]), g = d.map((w) => w[1]);
  return { minX: Math.min(...y), minY: Math.min(...g), maxX: Math.max(...y), maxY: Math.max(...g) };
}
function Ie(t, n, e) {
  const o = t.rotation ?? 0;
  if (!o) return { x: n, y: e };
  const i = mt(t), u = Math.cos(-o), d = Math.sin(-o), y = n - i.x, g = e - i.y;
  return { x: i.x + y * u - g * d, y: i.y + y * d + g * u };
}
function _t(t, n, e, o, i, u) {
  const d = i - e, y = u - o, g = d * d + y * y, w = g === 0 ? 0 : Math.max(0, Math.min(1, ((t - e) * d + (n - o) * y) / g));
  return Math.hypot(t - (e + w * d), n - (o + w * y));
}
function jt(t, n, e, o, i, u) {
  const d = 8 / o;
  if (t.type === "arrow") {
    const w = (t.strokeWidth ?? 2.5) / o / 2 + d, l = pt(t, i ?? /* @__PURE__ */ new Map(), u);
    if (l.routing === "orthogonal" && l.pathPoints && l.pathPoints.length > 1) {
      for (let f = 1; f < l.pathPoints.length; f++) {
        const c = l.pathPoints[f - 1], v = l.pathPoints[f];
        if (_t(n, e, c.x, c.y, v.x, v.y) <= w) return !0;
      }
      return !1;
    }
    if (l.bend === 0) return _t(n, e, l.start.x, l.start.y, l.end.x, l.end.y) <= w;
    let r = l.start;
    for (let f = 1; f <= 16; f++) {
      const c = Ft(f / 16, l.start, l.control, l.end);
      if (_t(n, e, r.x, r.y, c.x, c.y) <= w) return !0;
      r = c;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const w = (t.strokeWidth ?? 3) / o / 2 + d;
    for (let l = 1; l < t.points.length; l++) {
      const [r, f] = t.points[l - 1], [c, v] = t.points[l];
      if (_t(n, e, r, f, c, v) <= w) return !0;
    }
    return !1;
  }
  const y = Ie(t, n, e), g = $t(t);
  if (t.type === "frame") {
    const w = y.x >= g.minX - d && y.x <= g.maxX + d && y.y >= g.minY - d && y.y <= g.maxY + d && (y.x <= g.minX + d || y.x >= g.maxX - d || y.y <= g.minY + d || y.y >= g.maxY - d), l = y.x >= g.minX - d && y.x <= g.maxX + d && y.y >= g.minY - 28 / o && y.y <= g.minY;
    return w || l;
  }
  return y.x >= g.minX - d && y.x <= g.maxX + d && y.y >= g.minY - d && y.y <= g.maxY + d;
}
function Yt(t, n, e) {
  const o = $t(t), i = (o.minX + o.maxX) / 2, u = (o.minY + o.maxY) / 2, d = n - i, y = e - u;
  if (d === 0 && y === 0) return { x: i, y: u, side: "e" };
  const g = (o.maxX - o.minX) / 2, w = (o.maxY - o.minY) / 2, l = g === 0 ? 1 / 0 : Math.abs(g / d), r = w === 0 ? 1 / 0 : Math.abs(w / y);
  return l <= r ? { x: i + d * l, y: u + y * l, side: d >= 0 ? "e" : "w" } : { x: i + d * r, y: u + y * r, side: y >= 0 ? "s" : "n" };
}
function Pe(t, n, e, o) {
  const i = /* @__PURE__ */ new Set([n.id, e, o]);
  return t.filter((u) => !i.has(u.id)).map((u) => {
    const d = nt(u);
    return { minX: d.minX - Dt, minY: d.minY - Dt, maxX: d.maxX + Dt, maxY: d.maxY + Dt };
  }).filter((u) => u.maxX > u.minX && u.maxY > u.minY);
}
function pt(t, n, e = []) {
  const o = t.fromId ? n.get(t.fromId) : void 0, i = t.toId ? n.get(t.toId) : void 0;
  let u = { x: t.x, y: t.y }, d = { x: t.x + t.w, y: t.y + t.h };
  if (o && i) {
    const v = mt(o), a = mt(i);
    u = Yt(o, a.x, a.y), d = Yt(i, v.x, v.y);
  } else o ? u = Yt(o, d.x, d.y) : i && (d = Yt(i, u.x, u.y));
  const y = (u.x + d.x) / 2, g = (u.y + d.y) / 2, w = t.bend ?? 0;
  let l = { x: y, y: g };
  if (w !== 0) {
    const v = d.x - u.x, a = d.y - u.y, S = Math.hypot(v, a) || 1;
    l = { x: y + -a / S * w, y: g + v / S * w };
  }
  const r = !!(o || i), f = t.routing ?? (r ? "orthogonal" : w !== 0 ? "curved" : "straight");
  if (f !== "orthogonal") return { start: u, end: d, control: l, bend: w, routing: f };
  const c = Pe(e, t, o == null ? void 0 : o.id, i == null ? void 0 : i.id);
  return {
    start: u,
    end: d,
    control: l,
    bend: w,
    routing: f,
    pathPoints: ke(ze(u, d, c, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function Ft(t, n, e, o) {
  const i = 1 - t;
  return { x: i * i * n.x + 2 * i * t * e.x + t * t * o.x, y: i * i * n.y + 2 * i * t * e.y + t * t * o.y };
}
function Ee(t, n, e, o, i) {
  const u = [];
  let d = 0;
  for (const y of t) {
    if (y.type !== "draw" || !y.points) {
      if (jt(y, n, e, i)) continue;
      u.push(y);
      continue;
    }
    const g = [];
    let w = [];
    for (const [r, f] of y.points)
      Math.hypot(r - n, f - e) <= o / i ? (w.length > 1 && g.push(w), w = []) : w.push([r, f]);
    if (w.length > 1 && g.push(w), g.length === 0) continue;
    const l = $t(y);
    g.forEach((r) => u.push({ ...y, id: `${y.id}-e${d++}`, points: r, x: l.minX, y: l.minY, w: l.maxX - l.minX, h: l.maxY - l.minY }));
  }
  return u;
}
function Nn(t, n, e) {
  const o = 6 / e;
  let i = null, u = null;
  const d = [], y = [t.minX, (t.minX + t.maxX) / 2, t.maxX], g = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const w of n) {
    const l = nt(w), r = [l.minX, (l.minX + l.maxX) / 2, l.maxX], f = [l.minY, (l.minY + l.maxY) / 2, l.maxY];
    for (const c of y) for (const v of r) {
      const a = v - c;
      Math.abs(a) <= o && (!i || Math.abs(a) < Math.abs(i.delta)) && (i = { delta: a, at: v });
    }
    for (const c of g) for (const v of f) {
      const a = v - c;
      Math.abs(a) <= o && (!u || Math.abs(a) < Math.abs(u.delta)) && (u = { delta: a, at: v });
    }
  }
  return i && d.push({ x1: i.at, y1: t.minY - 1e3, x2: i.at, y2: t.maxY + 1e3 }), u && d.push({ x1: t.minX - 1e3, y1: u.at, x2: t.maxX + 1e3, y2: u.at }), { dx: (i == null ? void 0 : i.delta) ?? 0, dy: (u == null ? void 0 : u.delta) ?? 0, guides: d };
}
const In = 14;
function Pn({
  visiblePaintOrder: t,
  selected: n,
  shapeById: e,
  allShapes: o,
  camera: i,
  interaction: u,
  eraserPos: d,
  guides: y,
  marquee: g,
  strokeColorOf: w
}) {
  return /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ K("g", { transform: `scale(${i.z}) translate(${-i.x}, ${-i.y})`, children: [
    t.map((l) => {
      if (l.type === "draw" && l.points) {
        const $ = l.drawMode ?? "pen", M = l.strokeWidth ?? 3;
        return /* @__PURE__ */ N(
          "path",
          {
            "data-canvas-vector-shape-id": l.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": $,
            "data-canvas-stroke-width": M,
            d: Se(l.points),
            fill: "none",
            stroke: n.has(l.id) ? H.blue : w(l),
            strokeWidth: M / i.z,
            strokeOpacity: $ === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          l.id
        );
      }
      if (l.type !== "arrow") return null;
      const r = n.has(l.id) ? H.blue : w(l), f = pt(l, e, o), c = l.strokeWidth ?? 2.5, v = c / i.z, a = Math.max(10, 8 + c * 2), S = Math.max(4, 2 + c), h = a / i.z, Y = S / i.z, z = f.routing === "orthogonal" && f.pathPoints ? f.pathPoints : null, s = z && z.length > 1;
      let x, k;
      if (s)
        x = ee(z), k = Me(z);
      else if (f.routing === "curved") {
        x = `M ${f.start.x} ${f.start.y} Q ${f.control.x} ${f.control.y} ${f.end.x} ${f.end.y}`;
        const $ = Ft(0.94, f.start, f.control, f.end);
        k = Math.atan2(f.end.y - $.y, f.end.x - $.x);
      } else
        x = `M ${f.start.x} ${f.start.y} L ${f.end.x} ${f.end.y}`, k = Math.atan2(f.end.y - f.start.y, f.end.x - f.start.x);
      const p = s && z.length >= 2 ? Lt(z[0], z[1]) : f.routing === "orthogonal" && f.start.side ? f.start.side === "e" ? 0 : f.start.side === "w" ? Math.PI : f.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Lt(f.start, f.end), b = l.strokeStyle === "dashed" ? `${8 / i.z} ${5 / i.z}` : l.strokeStyle === "dotted" ? `${1.5 / i.z} ${4 / i.z}` : void 0, m = ($, M, C, I) => $ === "dot" ? /* @__PURE__ */ N("circle", { "data-canvas-arrow-dot-radius": S, cx: M, cy: C, r: Y, fill: r }) : $ === "none" ? null : /* @__PURE__ */ N(
        "polygon",
        {
          "data-canvas-arrowhead-size": a,
          points: `${M},${C} ${M - h * Math.cos(I - 0.4)},${C - h * Math.sin(I - 0.4)} ${M - h * Math.cos(I + 0.4)},${C - h * Math.sin(I + 0.4)}`,
          fill: r
        }
      );
      return /* @__PURE__ */ K("g", { "data-canvas-vector-shape-id": l.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": f.routing, "data-canvas-stroke-width": c, children: [
        /* @__PURE__ */ N("path", { d: x, fill: "none", stroke: r, strokeWidth: v, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: b }),
        m(l.arrowEnd ?? "arrow", f.end.x, f.end.y, k),
        m(l.arrowStart ?? "none", f.start.x, f.start.y, p + Math.PI)
      ] }, l.id);
    }),
    u.kind === "connect" && u.fromId !== void 0 && u.toX !== void 0 && u.toY !== void 0 && (() => {
      const l = e.get(u.fromId);
      if (!l) return null;
      const r = Yt(l, u.toX, u.toY), f = u.hoverId ? e.get(u.hoverId) : null, c = f ? Yt(f, r.x, r.y) : { x: u.toX, y: u.toY }, v = f ? ze(r, c, Pe(o, { id: "__preview" }, l.id, f.id)) : [r, c];
      return /* @__PURE__ */ K("g", { children: [
        /* @__PURE__ */ N("path", { d: ee(v), stroke: H.blue, strokeWidth: 2 / i.z, strokeDasharray: `${5 / i.z} ${4 / i.z}` }),
        f ? /* @__PURE__ */ N("rect", { x: nt(f).minX - 3 / i.z, y: nt(f).minY - 3 / i.z, width: nt(f).maxX - nt(f).minX + 6 / i.z, height: nt(f).maxY - nt(f).minY + 6 / i.z, fill: "none", stroke: H.blue, strokeWidth: 2 / i.z, rx: 6 / i.z }) : /* @__PURE__ */ N("circle", { cx: c.x, cy: c.y, r: 5 / i.z, fill: H.blue })
      ] });
    })(),
    d && /* @__PURE__ */ N("circle", { cx: d.x, cy: d.y, r: In / i.z, fill: H.roseSoft, stroke: H.rose, strokeWidth: 1 / i.z }),
    y.map((l, r) => /* @__PURE__ */ N("line", { x1: l.x1, y1: l.y1, x2: l.x2, y2: l.y2, stroke: H.pink, strokeWidth: 1 / i.z, strokeDasharray: `${4 / i.z} ${4 / i.z}` }, `guide-${r}`)),
    g && /* @__PURE__ */ N("rect", { x: Math.min(g.startX, g.curX), y: Math.min(g.startY, g.curY), width: Math.abs(g.curX - g.startX), height: Math.abs(g.curY - g.startY), fill: H.marqueeFill, stroke: H.blue, strokeWidth: 1 / i.z })
  ] }) });
}
const En = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], Ln = /* @__PURE__ */ new Set([
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
]), Fn = [
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
function Ut(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function Le(t) {
  return Ln.has(t.trim().toLowerCase());
}
function Fe(t) {
  const n = Ut(t);
  return n ? Le(n) ? n : `"${n.replace(/"/g, '\\"')}"` : "";
}
function Tn(t) {
  return Ut(t).split(",").map((n) => n.trim()).filter(Boolean).map(Fe).filter(Boolean).join(", ");
}
function Te(t) {
  return Ut(t).split(",").map((n) => n.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Et(t) {
  return t.split(",").map((n) => Ut(n).replace(/^["']|["']$/g, "")).filter(Boolean).filter((n) => !Le(n));
}
const Ht = Array.from(/* @__PURE__ */ new Set([
  ...Fn,
  ...Et(vt.sans.stack),
  ...Et(vt.serif.stack),
  ...Et(vt.mono.stack),
  ...Et(vt.gothic.stack),
  ...Et(vt.korean.stack)
]));
function An() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Ht;
  const t = Ht.filter((n) => {
    const e = Fe(n);
    return e ? document.fonts.check(`12px ${e}`) : !1;
  });
  return t.length > 0 ? t : Ht;
}
const Wn = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, On = 24, Dn = 28, Ae = 720;
function at(t) {
  return t.fontSize ?? Wn[t.type] ?? 14;
}
function ct(t) {
  var n;
  if (!t.fontFamily) return vt.sans.stack;
  if (t.fontFamily === "custom") {
    let e = "";
    try {
      e = Te(cn(t.customFontFamily ?? ""));
    } catch {
    }
    return Tn(e) || vt.sans.stack;
  }
  return ((n = vt[t.fontFamily]) == null ? void 0 : n.stack) ?? vt.sans.stack;
}
function ut(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function _n(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function Hn(t) {
  var n, e, o;
  if ((n = t.html) != null && n.includes('<ul data-list-style="dash">')) return "dash";
  if ((e = t.html) != null && e.includes("<ul>")) return "bullet";
  if ((o = t.html) != null && o.includes("<ol>")) return "number";
}
function Bn(t, n) {
  return {
    w: Math.min(Ae, Math.max(On, Math.ceil(t))),
    h: Math.max(Dn, Math.ceil(n))
  };
}
function jn(t, n) {
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
    fontSize: `${at(n)}px`,
    fontFamily: ct(n)
  }), document.body.appendChild(e);
  const o = e.getBoundingClientRect();
  return e.remove(), Bn(o.width, o.height);
}
const Kn = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), Rn = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function Un({
  visiblePaintOrder: t,
  selected: n,
  editingId: e,
  camera: o,
  shapeById: i,
  allShapes: u,
  peerCursors: d,
  isDarkMode: y,
  renderEditor: g,
  renderShapeBody: w,
  setEditingId: l,
  onBendHandleDown: r,
  onOrthogonalSegmentHandleDown: f,
  onResizeHandleDown: c,
  onRotateHandleDown: v,
  onConnectHandleDown: a,
  onArrowEndpointDown: S
}) {
  return /* @__PURE__ */ K(Mt, { children: [
    /* @__PURE__ */ N("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((h) => {
      if (h.type === "draw") return null;
      if (h.type === "arrow") {
        const s = pt(h, i, u), x = s.routing === "orthogonal" && s.pathPoints ? ie(s.pathPoints) : s.routing === "curved" ? Ft(0.5, s.start, s.control, s.end) : { x: (s.start.x + s.end.x) / 2, y: (s.start.y + s.end.y) / 2 }, k = e === h.id, p = Kt(h), b = n.has(h.id), m = Rt(h).trim(), $ = p || (b ? "관계 입력" : "");
        return !$ && !k ? null : /* @__PURE__ */ N(Jt.Fragment, { children: /* @__PURE__ */ N("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: x.x - 90, top: x.y - 18, width: 180, height: 36 }, onDoubleClick: (M) => {
          M.stopPropagation(), l(h.id);
        }, children: ($ || k) && /* @__PURE__ */ N(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": m ? `관계 설명: ${m}` : "관계 설명 입력",
            title: k ? void 0 : m ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${y ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: at(h),
              fontFamily: ct(h),
              maxWidth: "100%",
              minWidth: k ? 120 / o.z : void 0,
              minHeight: k ? 28 / o.z : void 0,
              color: h.textColor
            },
            children: k ? g("text-center whitespace-nowrap") : /* @__PURE__ */ N("span", { dangerouslySetInnerHTML: { __html: $ } }, "canvas-view")
          }
        ) }) }, h.id);
      }
      const Y = n.has(h.id), z = $t(h);
      return /* @__PURE__ */ K(
        "div",
        {
          "data-canvas-shape-id": h.id,
          "data-canvas-shape-type": h.type,
          "data-canvas-selected": Y ? "true" : void 0,
          "data-canvas-text-align": ut(h),
          "data-canvas-text-color": h.textColor,
          "data-canvas-font-size": at(h),
          "data-canvas-font-family": h.fontFamily === "custom" ? h.customFontFamily ?? "custom" : h.fontFamily ?? "sans",
          "data-canvas-manual-size": h.manualSize ? "true" : void 0,
          "data-canvas-group-id": h.groupId,
          "data-canvas-list-kind": Hn(h),
          "data-canvas-x": h.x,
          "data-canvas-y": h.y,
          "data-canvas-width": h.w,
          "data-canvas-height": h.h,
          className: "absolute",
          style: { left: z.minX, top: z.minY, width: z.maxX - z.minX, height: z.maxY - z.minY, transform: h.rotation ? `rotate(${h.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (s) => {
            s.stopPropagation(), Kn.has(h.type) && l(h.id);
          },
          children: [
            w(h),
            Y && /* @__PURE__ */ K(Mt, { children: [
              /* @__PURE__ */ N("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${H.blue}` } }),
              n.size === 1 && /* @__PURE__ */ K(Mt, { children: [
                ["nw", "ne", "sw", "se"].map((s) => /* @__PURE__ */ N("div", { "data-canvas-resize-handle": s, onPointerDown: (x) => c(x, h, s), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${s}-resize`, left: s.includes("w") ? -5 / o.z : void 0, right: s.includes("e") ? -5 / o.z : void 0, top: s.includes("n") ? -5 / o.z : void 0, bottom: s.includes("s") ? -5 / o.z : void 0 } }, s)),
                /* @__PURE__ */ N("div", { onPointerDown: (s) => v(s, h), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                Rn.has(h.type) && ["n", "s", "w", "e"].map((s) => /* @__PURE__ */ N("div", { onPointerDown: (x) => a(x, h), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...s === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : s === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : s === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${s}`))
              ] })
            ] })
          ]
        },
        h.id
      );
    }) }),
    n.size === 1 && u.filter((h) => h.type === "arrow" && n.has(h.id)).map((h) => {
      const Y = pt(h, i, u), z = (s, x) => ({
        left: (s.x - o.x) * o.z - x / 2,
        top: (s.y - o.y) * o.z - x / 2
      });
      return /* @__PURE__ */ K(Jt.Fragment, { children: [
        Y.routing === "orthogonal" && Y.pathPoints && Y.pathPoints.length > 2 ? Y.pathPoints.slice(0, -1).map((s, x) => {
          var b;
          const k = (b = Y.pathPoints) == null ? void 0 : b[x + 1];
          if (!k) return null;
          const p = { x: (s.x + k.x) / 2, y: (s.y + k.y) / 2 };
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-segment-handle": x, onPointerDown: (m) => f(m, h, x), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...z(p, 12), cursor: s.x === k.x ? "ew-resize" : "ns-resize" } }, `segment-${x}`);
        }) : Y.routing === "curved" && /* @__PURE__ */ N("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (s) => r(s, h), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (Y.start.x + Y.end.x) / 2 * o.z - o.x * o.z - 5, top: (Y.start.y + Y.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map((s) => {
          const x = s === "start" ? Y.start : Y.end;
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-endpoint": s, onPointerDown: (k) => S(k, h, s), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...z(x, 12), cursor: "grab" } }, s);
        })
      ] }, `arrow-handles-${h.id}`);
    }),
    d == null ? void 0 : d.map((h) => /* @__PURE__ */ K("div", { className: "absolute pointer-events-none z-40", style: { left: (h.x - o.x) * o.z, top: (h.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ N("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ N("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: h.color, stroke: H.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ N("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: h.color }, children: h.name })
    ] }, h.id))
  ] });
}
const Vn = [2, 4, 6, 8];
function Gn(t) {
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
      return We(t);
  }
}
function qn(t) {
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
      return We(t);
  }
}
function We(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Qn({
  shape: t,
  shapes: n,
  camera: e,
  canvasSize: o,
  isDarkMode: i,
  editing: u,
  showPalette: d,
  installedFontFamilies: y,
  setShowPalette: g,
  setActiveColor: w,
  patchSelected: l,
  applyFormat: r,
  applyList: f,
  applyCustomFontFamily: c
}) {
  var ot, xt;
  const v = i ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", a = t.type === "draw", S = a ? t.color ? dt[t.color].border : H.ink : Xt(t), h = tt(null), [Y, z] = it({ width: 380, height: 260 });
  te(() => {
    const X = h.current;
    if (!X) return;
    const T = () => {
      const Q = Math.max(1, Math.ceil(X.getBoundingClientRect().width)), et = Math.max(1, Math.ceil(X.getBoundingClientRect().height));
      z((st) => st.width === Q && st.height === et ? st : { width: Q, height: et });
    };
    if (T(), typeof ResizeObserver > "u") return;
    const j = new ResizeObserver(T);
    return j.observe(X), () => j.disconnect();
  }, [u, y.length, i, t, d]);
  const s = Y.width, x = Y.height, k = nt(t), p = (k.minX - e.x) * e.z, b = (k.minY - e.y) * e.z, m = (k.maxX - e.x) * e.z, $ = (k.maxY - e.y) * e.z, M = Math.max(8, o.width - s - 8), C = Math.max(8, o.height - x - 8), I = (X, T) => ({ left: Math.min(Math.max(8, X), M), top: Math.min(Math.max(8, T), C) }), E = [
    I((p + m) / 2 - s / 2, b - x - 12),
    I((p + m) / 2 - s / 2, $ + 12),
    I((o.width - s) / 2, 12),
    I(p - s - 12, b + ($ - b - x) / 2),
    I(m + 12, b + ($ - b - x) / 2)
  ], D = n.map((X) => {
    const T = nt(X);
    return { left: (T.minX - e.x) * e.z, top: (T.minY - e.y) * e.z, right: (T.maxX - e.x) * e.z, bottom: (T.maxY - e.y) * e.z };
  });
  if (t.type === "arrow") {
    const X = pt(t, new Map(n.map((et) => [et.id, et])), n), T = X.routing === "orthogonal" && X.pathPoints ? ie(X.pathPoints) : { x: (X.start.x + X.end.x) / 2, y: (X.start.y + X.end.y) / 2 }, j = 180 * e.z, Q = 36 * e.z;
    D.push({
      left: (T.x - e.x) * e.z - j / 2,
      top: (T.y - e.y) * e.z - Q / 2,
      right: (T.x - e.x) * e.z + j / 2,
      bottom: (T.y - e.y) * e.z + Q / 2
    });
  }
  const G = E[0], P = (X, T) => {
    const j = Math.max(0, Math.min(X.left + s, T.right) - Math.max(X.left, T.left)), Q = Math.max(0, Math.min(X.top + x, T.bottom) - Math.max(X.top, T.top));
    return j * Q;
  }, F = ((ot = E.map((X) => ({
    candidate: X,
    overlap: D.reduce((T, j) => T + P(X, j), 0),
    distance: Math.hypot(X.left - G.left, X.top - G.top)
  })).sort((X, T) => X.overlap - T.overlap || X.distance - T.distance)[0]) == null ? void 0 : ot.candidate) ?? G, L = at(t), O = qn(t), W = Gn(t), q = t.type === "arrow" && !!((xt = t.orthogonalWaypoints) != null && xt.length), U = t.type === "arrow" ? t.arrowStart ?? "none" : "none", Z = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", _ = (X, T, j, Q, et = Q) => /* @__PURE__ */ N("button", { type: "button", title: Q, "aria-label": et, onClick: j, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${T ? "bg-blue-600 text-white" : v}`, children: X }), V = (X) => /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: X });
  return /* @__PURE__ */ K("div", { ref: h, "data-canvas-inspector": a ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${i ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: F.left, top: F.top }, onPointerDown: (X) => {
    X.stopPropagation();
    const T = X.target instanceof Element ? X.target : null;
    T != null && T.closest("input, select, textarea") || X.preventDefault();
  }, onClick: (X) => X.stopPropagation(), children: [
    /* @__PURE__ */ K("div", { className: "relative flex items-center gap-1.5 pointer-events-none", children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: a ? "그리기" : "색상" }),
      /* @__PURE__ */ N("button", { type: "button", title: a ? "그리기 색상 팔레트" : "색상 팔레트", "aria-label": a ? "그리기 색상" : "도형 색상", onClick: () => g((X) => !X), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${i ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ N(xn, { className: "w-4 h-4", style: { color: S } }) }),
      d && /* @__PURE__ */ K("div", { className: `pointer-events-auto absolute left-0 top-10 z-50 flex items-center gap-1.5 p-2 rounded-xl border shadow-xl ${i ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        sn.map((X) => /* @__PURE__ */ N("button", { type: "button", title: dt[X].label, "aria-label": `색 ${dt[X].label}`, onClick: () => {
          w(X), l({ color: X, fillColor: void 0 }), g(!1);
        }, className: "w-5 h-5 rounded-full border", style: { background: dt[X].bg, borderColor: dt[X].border, outline: t.color === X && !t.fillColor ? `2px solid ${H.blue}` : void 0, outlineOffset: 1 } }, X)),
        !a && /* @__PURE__ */ N("label", { title: "배경 색 (자유 선택)", className: "w-5 h-5 rounded-full border relative overflow-hidden cursor-pointer flex items-center justify-center", style: { background: t.fillColor ?? Bt(t), outline: t.fillColor ? `2px solid ${H.blue}` : void 0, outlineOffset: 1 }, children: /* @__PURE__ */ N("input", { type: "color", value: t.fillColor ?? Bt(t), onChange: (X) => {
          l({ fillColor: X.target.value }), g(!1);
        }, className: "absolute inset-0 opacity-0 cursor-pointer" }) })
      ] })
    ] }),
    !a && /* @__PURE__ */ K(Mt, { children: [
      /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ K("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: Xt(t), color: H.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ N("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ N("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? Xt(t), onChange: (X) => l({ textColor: X.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ K("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${i ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => l({ fontSize: Math.max(8, L - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ N(hn, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ N("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: L }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => l({ fontSize: Math.min(96, L + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ N(fn, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ K("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${i ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ N("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (X) => {
            const T = _n(X.target.value);
            l(T === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: T, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${i ? "text-slate-200" : "text-slate-700"}`, children: En.map((X) => /* @__PURE__ */ N("option", { value: X, className: i ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: vt[X].label }, X)) }),
          /* @__PURE__ */ N(mn, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ K(Mt, { children: [
          /* @__PURE__ */ N("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (X) => c(X.target.value), onChange: (X) => X.currentTarget.value && c(X.currentTarget.value), onKeyDown: (X) => {
            X.key === "Enter" && (X.preventDefault(), c(X.currentTarget.value));
          }, onDoubleClick: (X) => X.stopPropagation(), onPointerDown: (X) => X.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${i ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ N("datalist", { id: `canvas-font-families-${t.id}`, children: y.map((X) => /* @__PURE__ */ N("option", { value: X }, X)) })
        ] })
      ] }),
      /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${i ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", vn, "왼쪽 정렬"], ["center", pn, "가운데 정렬"], ["right", yn, "오른쪽 정렬"]].map(([X, T, j]) => /* @__PURE__ */ N("button", { type: "button", "aria-label": j, title: j, onClick: () => l({ textAlign: X }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${ut(t) === X ? "bg-blue-600 text-white shadow-sm" : v}`, children: /* @__PURE__ */ N(T, { className: "w-4 h-4" }) }, X)) }),
        u && /* @__PURE__ */ K(Mt, { children: [
          /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", gn, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", wn, "번호 목록"]].map(([X, T, j]) => /* @__PURE__ */ N("button", { type: "button", onClick: () => f(X), "aria-label": j, title: j, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: T ? /* @__PURE__ */ N(T, { className: "w-4 h-4" }) : /* @__PURE__ */ N("span", { className: "text-base leading-none", children: "–" }) }, X)) }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: bn, label: "굵게" }, { cmd: "italic", Icon: kn, label: "기울임" }, { cmd: "underline", Icon: $n, label: "밑줄" }].map(({ cmd: X, Icon: T, label: j }) => /* @__PURE__ */ N("button", { type: "button", onClick: () => r(X), "aria-label": j, title: j, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ N(T, { className: "w-4 h-4" }) }, X)) })
        ] })
      ] }),
      (t.type === "card" || t.type === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${i ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ K(Mt, { children: [
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${i ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ N("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (X) => X.stopPropagation(), onChange: (X) => l({ category: X.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${i ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            V("경로"),
            _("직선", (t.routing ?? "straight") === "straight", () => l({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            _("직각", t.routing === "orthogonal", () => l({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            _("곡선", (t.routing ?? "") === "curved", () => l({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            q && _("자동", !1, () => l({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            V("선"),
            _("—", (t.strokeStyle ?? "solid") === "solid", () => l({ strokeStyle: "solid" }), "실선"),
            _("- -", t.strokeStyle === "dashed", () => l({ strokeStyle: "dashed" }), "파선"),
            _("···", t.strokeStyle === "dotted", () => l({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            V("시작"),
            _(U === "none" ? "○" : U === "dot" ? "●" : "◀", U !== "none", () => l({ arrowStart: U === "none" ? "arrow" : U === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${U === "none" ? "없음" : U === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            V("끝"),
            _(Z === "none" ? "○" : Z === "dot" ? "●" : "▶", Z !== "none", () => l({ arrowEnd: Z === "arrow" ? "dot" : Z === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${Z === "none" ? "없음" : Z === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] })
    ] }),
    W && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-none ${i ? "border-slate-700" : "border-slate-100"}`, children: [
      V("굵기"),
      Vn.map((X) => /* @__PURE__ */ N(Jt.Fragment, { children: _(String(X), O === X, () => l({ strokeWidth: X }), `굵기 ${X}`) }, X))
    ] })
  ] });
}
function Zn({
  camera: t,
  editingId: n,
  isDarkMode: e,
  editorRef: o,
  commitEditorHtml: i,
  onEditorKeyDown: u,
  setShapes: d,
  onDirty: y
}) {
  const g = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", w = (r, f) => /* @__PURE__ */ N(
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
      onPointerDown: (c) => c.stopPropagation(),
      onDoubleClick: (c) => c.stopPropagation(),
      onKeyDown: u,
      className: `${g} ${r}`,
      style: f
    },
    "canvas-editor"
  );
  return { renderEditor: w, renderShapeBody: (r) => {
    const f = dt[r.color ?? "blue"], c = n === r.id, v = Kt(r);
    if (r.type === "frame") {
      const x = r.strokeWidth ?? 2;
      return /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-stroke-width": x,
          className: "w-full h-full rounded",
          style: { border: `${x / t.z}px solid ${e ? H.slate600 : H.slate400}` },
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
              children: c ? w("", { fontSize: 13 / t.z }) : Rt(r) || "프레임"
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
          style: { background: f.bg, borderTop: `6px solid ${f.border}`, color: f.text },
          children: c ? w("font-medium", { color: Xt(r), fontSize: at(r), fontFamily: ct(r), textAlign: ut(r) }) : v ? /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Xt(r), fontSize: at(r), fontFamily: ct(r), textAlign: ut(r) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Xt(r), fontSize: at(r), fontFamily: ct(r), textAlign: ut(r) }, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (r.type === "card") {
      const x = r.cardStyle === "glass";
      return /* @__PURE__ */ K(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: x ? H.glassFill : H.slateCard,
            backdropFilter: x ? "blur(12px)" : void 0,
            WebkitBackdropFilter: x ? "blur(12px)" : void 0,
            border: `1px solid ${x ? H.glassBorder : H.darkBorder}`,
            boxShadow: x ? H.glassShadow : H.cardShadow
          },
          children: [
            /* @__PURE__ */ K(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (k) => k.stopPropagation(),
                onDoubleClick: (k) => k.stopPropagation(),
                onBlur: (k) => {
                  const b = (k.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  d((m) => m.map(($) => $.id === r.id ? { ...$, category: b } : $)), y();
                },
                onKeyDown: (k) => {
                  k.key === "Enter" && (k.preventDefault(), k.currentTarget.blur());
                },
                children: [
                  "[ ",
                  r.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            c ? w("flex-1 font-medium", { color: r.textColor ?? H.white, fontSize: at(r), fontFamily: ct(r), textAlign: ut(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: r.textColor ?? H.white, fontSize: at(r), fontFamily: ct(r), textAlign: ut(r) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view"),
            /* @__PURE__ */ K("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              r.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (r.type === "text") {
      const x = e ? "text-slate-100" : "text-slate-900", k = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${x}`,
        style: { color: r.textColor, fontSize: at(r), fontFamily: ct(r), textAlign: ut(r) }
      };
      return c ? w(`font-medium ${x}`, k.style) : v ? /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-text-view": !0,
          ...k,
          dangerouslySetInnerHTML: { __html: v }
        },
        "canvas-view"
      ) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, ...k, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (r.type === "image") {
      const x = oe(r.src);
      return x ? /* @__PURE__ */ N(
        "img",
        {
          src: x,
          alt: r.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const a = Bt(r), S = Xe(r), h = Xt(r);
    if (r.type === "triangle" || r.type === "diamond" || r.type === "hexagon" || r.type === "star") {
      const x = r.strokeWidth ?? 2;
      return /* @__PURE__ */ K("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${r.w} ${r.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ N("polygon", { "data-canvas-stroke-width": x, points: Ye(r.type, r.w, r.h), fill: a, stroke: S, strokeWidth: x / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ N("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: h }, children: c ? w("font-medium", { color: h, fontSize: at(r), fontFamily: ct(r), textAlign: ut(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: at(r), fontFamily: ct(r), textAlign: ut(r) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") })
      ] });
    }
    const z = oe(r.src), s = r.type === "rect" || r.type === "ellipse" ? r.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ N(
      "div",
      {
        "data-canvas-stroke-width": s,
        className: `w-full h-full flex items-center justify-center p-3 ${r.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: a, border: `${s / t.z}px solid ${S}`, color: h },
        children: c ? w("font-medium", { color: h, fontSize: at(r), fontFamily: ct(r), textAlign: ut(r) }) : /* @__PURE__ */ K("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: at(r), fontFamily: ct(r), textAlign: ut(r) }, children: [
          /* @__PURE__ */ N("div", { dangerouslySetInnerHTML: { __html: v } }),
          z && /* @__PURE__ */ N(
            "a",
            {
              href: z,
              target: "_blank",
              rel: "noreferrer",
              onPointerDown: (x) => x.stopPropagation(),
              className: "block mt-1 text-[11px] underline opacity-70",
              children: "파일 열기"
            }
          )
        ] }, "canvas-view")
      }
    );
  } };
}
function Jn({
  containerRef: t,
  shapesRef: n,
  shapes: e,
  camera: o,
  selected: i,
  editingId: u,
  boardIdentity: d
}) {
  const [y, g] = it({ width: 0, height: 0 });
  yt(() => {
    const v = t.current;
    if (!v) return;
    let a = -1, S = -1;
    const h = (z = v.clientWidth, s = v.clientHeight) => {
      z === a && s === S || (a = z, S = s, g({ width: z, height: s }));
    };
    if (h(), typeof ResizeObserver < "u") {
      const z = new ResizeObserver((s) => {
        var k;
        const x = (k = s[0]) == null ? void 0 : k.contentRect;
        h((x == null ? void 0 : x.width) ?? v.clientWidth, (x == null ? void 0 : x.height) ?? v.clientHeight);
      });
      return z.observe(v), () => z.disconnect();
    }
    const Y = () => h();
    return window.addEventListener("resize", Y), () => window.removeEventListener("resize", Y);
  }, [d, t]);
  const w = kt(() => new Map(e.map((v) => [v.id, v])), [e]), l = kt(
    () => [...e].sort((v, a) => (v.type === "frame" ? -1 : 0) - (a.type === "frame" ? -1 : 0)),
    [e]
  ), r = kt(() => {
    if (!t.current || y.width <= 0 || y.height <= 0) return null;
    const v = 200 / o.z;
    return {
      minX: o.x - v,
      minY: o.y - v,
      maxX: o.x + y.width / o.z + v,
      maxY: o.y + y.height / o.z + v
    };
  }, [o, t, y]), f = rt((v) => {
    if (!r) return !1;
    if (v.id === u || i.has(v.id)) return !0;
    if (v.type === "arrow") {
      const S = pt(v, w, n.current), Y = (S.routing === "orthogonal" ? S.pathPoints : null) ?? [S.start, S.end], z = Math.min(...Y.map((p) => p.x)), s = Math.max(...Y.map((p) => p.x)), x = Math.min(...Y.map((p) => p.y)), k = Math.max(...Y.map((p) => p.y));
      return s >= r.minX && z <= r.maxX && k >= r.minY && x <= r.maxY;
    }
    const a = nt(v);
    return a.maxX >= r.minX && a.minX <= r.maxX && a.maxY >= r.minY && a.minY <= r.maxY;
  }, [u, i, w, n, r]), c = kt(
    () => l.filter(f),
    [f, l]
  );
  return { shapeById: w, visiblePaintOrder: c };
}
function to({
  editorRef: t,
  editingId: n,
  setShapes: e,
  setAnnouncement: o,
  onDirty: i,
  patchSelected: u
}) {
  const d = rt(() => {
    const c = t.current;
    if (!c || !n) return;
    let v;
    try {
      v = re(c.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const a = c.scrollHeight;
    e((S) => S.map((h) => {
      if (h.id !== n) return h;
      const Y = { ...h, html: v, text: void 0 };
      if (h.type === "text")
        return h.manualSize ? Y : { ...Y, ...jn(c, h) };
      if (h.type === "arrow") return Y;
      const z = h.type === "note" ? 32 : h.type === "card" ? 96 : (
        // category header + type footer
        (h.type === "frame", 24)
      ), s = Math.max(h.h, a + z);
      return { ...Y, h: s };
    })), i();
  }, [n, i]), y = (c) => {
    var v;
    (v = t.current) == null || v.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(c), d();
  }, g = () => {
    var S;
    const c = (S = window.getSelection()) == null ? void 0 : S.anchorNode, v = c instanceof Element ? c : c == null ? void 0 : c.parentElement, a = v == null ? void 0 : v.closest("ul, ol");
    return a instanceof HTMLElement ? a : null;
  }, w = (c, v, a) => {
    const S = document.createElement(v);
    for (; c.firstChild; ) S.append(c.firstChild);
    return c.replaceWith(S), S;
  }, l = (c) => {
    const v = t.current;
    if (!v) return;
    v.focus();
    const a = g();
    if (c === "number")
      if ((a == null ? void 0 : a.tagName) === "OL")
        a.removeAttribute("data-list-style");
      else if ((a == null ? void 0 : a.tagName) === "UL")
        w(a, "ol");
      else {
        document.execCommand("insertOrderedList");
        const S = g();
        S == null || S.removeAttribute("data-list-style");
      }
    else if ((a == null ? void 0 : a.tagName) === "UL") {
      const S = a.dataset.listStyle;
      c === S ? document.execCommand("insertUnorderedList") : a.dataset.listStyle = c;
    } else {
      (a == null ? void 0 : a.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const S = g();
      S && (S.dataset.listStyle = c);
    }
    d();
  };
  return { commitEditorHtml: d, applyFormat: y, applyList: l, onEditorKeyDown: (c) => {
    if (c.key === "Tab") {
      c.preventDefault(), document.execCommand(c.shiftKey ? "outdent" : "indent"), d();
      return;
    }
    if (c.key === " ") {
      const v = window.getSelection();
      if (v && v.isCollapsed && v.anchorNode) {
        const a = v.anchorNode, S = a.textContent || "", h = v.anchorOffset, Y = S.slice(0, h).trim();
        if (!g()) {
          if (Y === "-" || Y === "–") {
            c.preventDefault(), a.textContent = S.slice(h), l("dash");
            return;
          }
          if (Y === "*") {
            c.preventDefault(), a.textContent = S.slice(h), l("bullet");
            return;
          }
          if (Y === "1.") {
            c.preventDefault(), a.textContent = S.slice(h), l("number");
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
function eo({
  boardIdentity: t,
  tool: n,
  controlledShapes: e,
  onShapesChange: o,
  onDirty: i
}) {
  const u = tt(null), d = tt(null), [y, g] = it([]), w = e !== void 0 && o !== void 0, l = tt(/* @__PURE__ */ new WeakMap()), r = kt(() => {
    const A = l.current;
    return (w ? e ?? [] : y).map((R) => {
      let B = A.get(R);
      return B === void 0 && (B = Ne(R), A.set(R, B)), B;
    }).filter((R) => R !== null);
  }, [w, e, y]), f = tt(o);
  f.current = o;
  const c = rt((A) => {
    const R = f.current;
    if (!R) {
      g(A);
      return;
    }
    R(typeof A == "function" ? A : () => A);
  }, []), [v, a] = it({ x: -400, y: -300, z: 1 }), [S, h] = it(/* @__PURE__ */ new Set()), [Y, z] = it(null), [s, x] = it({ kind: "none" }), [k, p] = it(!1), [b, m] = it([]), [$, M] = it(""), [C, I] = it(!1), [E, D] = it(null), [G, P] = it("blue"), [F, L] = it(Ht), O = tt(G);
  O.current = G;
  const W = tt([]), q = tt([]), U = tt(null), Z = tt(/* @__PURE__ */ new Map()), _ = tt(r), V = tt(v), ot = tt(n), xt = tt(S), X = tt(Y);
  _.current = r, V.current = v, ot.current = n, xt.current = S, X.current = Y;
  const T = tt({ kind: "none" }), j = rt((A) => {
    T.current = A, x(A);
  }, []), Q = rt((A) => {
    xt.current = A, h(A);
  }, []);
  te(() => {
    var R;
    const A = /* @__PURE__ */ new Set();
    xt.current = A, X.current = null, Z.current.clear(), W.current = [], q.current = [], U.current = null, j({ kind: "none" }), h(A), z(null), p(!1), m([]), D(null), M(""), (R = u.current) == null || R.focus();
  }, [j, t]), yt(() => {
    let A = !1;
    const R = () => {
      const J = An();
      A || L(J);
    };
    if (R(), typeof document > "u" || !("fonts" in document)) return;
    const B = () => R();
    return document.fonts.addEventListener("loadingdone", B), () => {
      A = !0, document.fonts.removeEventListener("loadingdone", B);
    };
  }, [t]);
  const st = (Y ? r.find((A) => A.id === Y) : void 0) !== void 0;
  te(() => {
    if (!Y || !st) return;
    const A = () => {
      const B = d.current, J = _.current.find((Qt) => Qt.id === Y);
      if (!B || !J || (B.dataset.seeded !== Y && (B.innerHTML = Kt(J), B.dataset.seeded = Y), document.activeElement === B)) return;
      B.focus();
      const gt = document.createRange();
      gt.selectNodeContents(B), gt.collapse(!1);
      const wt = window.getSelection();
      wt == null || wt.removeAllRanges(), wt == null || wt.addRange(gt);
    };
    A();
    const R = requestAnimationFrame(A);
    return () => cancelAnimationFrame(R);
  }, [Y, st]);
  const It = rt((A) => {
    c((R) => {
      const B = typeof A == "function" ? A(R) : A;
      return W.current.push(R), W.current.length > 100 && W.current.shift(), q.current = [], B;
    }), i();
  }, [i]), Tt = rt((A) => A.size === 0 ? !1 : (It((R) => R.filter((B) => A.has(B.id) ? !1 : B.type !== "arrow" ? !0 : !(B.fromId && A.has(B.fromId)) && !(B.toId && A.has(B.toId)))), Q(/* @__PURE__ */ new Set()), M(`${A.size}개 삭제됨`), !0), [It, Q]), Vt = rt(() => {
    U.current = _.current;
  }, []), Gt = rt(() => {
    const A = U.current;
    U.current = null, !(!A || A === _.current) && (W.current.push(A), W.current.length > 100 && W.current.shift(), q.current = [], i());
  }, [i]), qt = rt((A, R) => {
    var gt;
    const B = (gt = u.current) == null ? void 0 : gt.getBoundingClientRect(), J = V.current;
    return B ? { x: (A - B.left) / J.z + J.x, y: (R - B.top) / J.z + J.y } : { x: 0, y: 0 };
  }, []), St = rt(() => {
    var B;
    const A = (B = u.current) == null ? void 0 : B.getBoundingClientRect(), R = V.current;
    return A ? { x: R.x + A.width / 2 / R.z, y: R.y + A.height / 2 / R.z } : { x: 0, y: 0 };
  }, []), zt = rt((A) => {
    const R = new Set(_.current.filter((J) => A.has(J.id) && J.groupId).map((J) => J.groupId));
    if (R.size === 0) return A;
    const B = new Set(A);
    for (const J of _.current) J.groupId && R.has(J.groupId) && B.add(J.id);
    return B;
  }, []);
  return {
    containerRef: u,
    editorRef: d,
    localShapes: y,
    setLocalShapes: g,
    controlled: w,
    shapes: r,
    setShapes: c,
    camera: v,
    setCamera: a,
    cameraRef: V,
    selected: S,
    setSelected: h,
    selectedRef: xt,
    editingId: Y,
    setEditingId: z,
    editingIdRef: X,
    interaction: s,
    interactionRef: T,
    applyInteraction: j,
    isSpaceDown: k,
    setIsSpaceDown: p,
    guides: b,
    setGuides: m,
    announcement: $,
    setAnnouncement: M,
    showInspectorPalette: C,
    setShowInspectorPalette: I,
    eraserPos: E,
    setEraserPos: D,
    activeColor: G,
    setActiveColor: P,
    activeColorRef: O,
    installedFontFamilies: F,
    pointers: Z,
    past: W,
    future: q,
    selectNow: Q,
    commit: It,
    deleteSelection: Tt,
    beginHistory: Vt,
    endHistory: Gt,
    toPage: qt,
    viewportCentre: St,
    expandToGroups: zt,
    toolRef: ot,
    shapesRef: _
  };
}
function no({
  containerRef: t,
  camera: n,
  setCamera: e,
  minZoom: o,
  maxZoom: i,
  shapes: u,
  selected: d,
  editingId: y,
  textualTypes: g,
  onZoomChange: w,
  onSelectionChange: l,
  onLocalCursor: r,
  toPage: f
}) {
  yt(() => {
    w == null || w(n.z);
  }, [n.z, w]), yt(() => {
    const Y = t.current;
    if (!Y) return;
    const z = (s) => {
      if (s.preventDefault(), s.ctrlKey || s.metaKey) {
        const x = Y.getBoundingClientRect();
        e((k) => {
          const p = Math.min(i, Math.max(o, k.z * Math.exp(-s.deltaY * 0.01))), b = s.clientX - x.left, m = s.clientY - x.top;
          return { x: k.x + b / k.z - b / p, y: k.y + m / k.z - m / p, z: p };
        });
      } else
        e((x) => ({ ...x, x: x.x + s.deltaX / x.z, y: x.y + s.deltaY / x.z }));
    };
    return Y.addEventListener("wheel", z, { passive: !1 }), () => Y.removeEventListener("wheel", z);
  }, [t, i, o, e]);
  const c = kt(() => {
    const Y = u.filter((z) => d.has(z.id));
    return {
      count: Y.length,
      canGroup: Y.length > 1,
      canUngroup: Y.some((z) => !!z.groupId),
      isTextual: Y.length === 1 && g.includes(Y[0].type)
    };
  }, [d, u, g]);
  yt(() => {
    l == null || l(c);
  }, [l, c]);
  const v = kt(() => {
    if (y) {
      const s = u.find((x) => x.id === y);
      return s && s.type !== "image" && s.type !== "draw" ? s : null;
    }
    const Y = u.filter((s) => d.has(s.id));
    if (Y.length > 1 && Y.every((s) => s.type === "draw")) return Y[0] ?? null;
    if (Y.length !== 1) return null;
    const z = Y[0];
    return z && z.type !== "image" ? z : null;
  }, [y, d, u]), a = tt(0);
  return { selectionInfo: c, inspectorShape: v, onContainerPointerMove: r ? (Y) => {
    const z = performance.now();
    z - a.current < 60 || (a.current = z, r(f(Y.clientX, Y.clientY)));
  } : void 0, onContainerPointerLeave: r ? () => r(null) : void 0 };
}
function oo(t, n) {
  if (t.length === 0) return null;
  let e = 1 / 0, o = 1 / 0, i = -1 / 0, u = -1 / 0;
  for (const r of t) {
    const f = nt(r);
    e = Math.min(e, f.minX), o = Math.min(o, f.minY), i = Math.max(i, f.maxX), u = Math.max(u, f.maxY);
  }
  const d = 40, y = i - e + d * 2, g = u - o + d * 2;
  if (!Number.isFinite(y) || !Number.isFinite(g) || y > Nt.maxExportDimension || g > Nt.maxExportDimension || y * g > Nt.maxExportPixels) return null;
  const w = (r, f, c, v, a) => {
    const S = r.fontSize ?? c, h = ct(r), Y = Ce(Kt(r));
    if (Y.length === 0) return "";
    const z = $t(r), s = r.textAlign === "right" ? "end" : r.textAlign === "center" ? "middle" : r.textAlign === "left" ? "start" : a, x = s === "end" ? z.maxX - 12 : s === "middle" ? (z.minX + z.maxX) / 2 : z.minX + 12, k = z.minY + S + 12;
    return Y.map((p, b) => {
      const m = p.map(($) => `<tspan style="${[
        $.bold ? "font-weight:700" : `font-weight:${v}`,
        $.italic ? "font-style:italic" : "",
        $.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${bt($.text)}</tspan>`).join("");
      return `<text x="${x}" y="${k + b * S * 1.4}" font-family="${bt(h)}" font-size="${S}" fill="${f}" text-anchor="${s}">${m}</text>`;
    }).join("");
  }, l = t.map((r) => {
    const f = dt[r.color ?? "blue"], c = $t(r), v = mt(r), a = r.rotation ? ` transform="rotate(${r.rotation * 180 / Math.PI} ${v.x} ${v.y})"` : "", S = r.color ? dt[r.color].border : H.ink;
    if (r.type === "draw" && r.points) {
      const p = (r.drawMode ?? "pen") === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${Se(r.points)}" fill="none" stroke="${S}" stroke-width="${r.strokeWidth ?? 3}"${p} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (r.type === "arrow") {
      const p = pt(r, new Map(t.map((W) => [W.id, W])), t), b = r.strokeWidth ?? 2.5, m = Math.max(10, 8 + b * 2), $ = Math.max(4, 2 + b), M = p.routing === "orthogonal" && p.pathPoints ? p.pathPoints : null, C = M && M.length > 1, I = C ? ee(M) : p.routing === "curved" ? `M ${p.start.x} ${p.start.y} Q ${p.control.x} ${p.control.y} ${p.end.x} ${p.end.y}` : `M ${p.start.x} ${p.start.y} L ${p.end.x} ${p.end.y}`, E = C ? Me(M) : p.routing === "curved" ? (() => {
        const W = Ft(0.94, p.start, p.control, p.end);
        return Math.atan2(p.end.y - W.y, p.end.x - W.x);
      })() : Math.atan2(p.end.y - p.start.y, p.end.x - p.start.x), D = C ? Lt(M[0], M[1]) : p.routing === "orthogonal" && p.start.side ? p.start.side === "e" ? 0 : p.start.side === "w" ? Math.PI : p.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Lt(p.start, p.end), G = r.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : r.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", P = (W, q, U, Z) => {
        if (W === "dot") return `<circle cx="${q}" cy="${U}" r="${$}" fill="${S}"/>`;
        if (W === "none") return "";
        const _ = `${q - m * Math.cos(Z - 0.4)},${U - m * Math.sin(Z - 0.4)}`, V = `${q - m * Math.cos(Z + 0.4)},${U - m * Math.sin(Z + 0.4)}`;
        return `<polygon points="${q},${U} ${_} ${V}" fill="${S}"/>`;
      }, F = p.routing === "orthogonal" && p.pathPoints ? ie(p.pathPoints) : p.bend === 0 ? { x: (p.start.x + p.end.x) / 2, y: (p.start.y + p.end.y) / 2 } : Ft(0.5, p.start, p.control, p.end), L = Rt(r), O = L ? `<text x="${F.x}" y="${F.y - 6}" text-anchor="middle" font-family="${bt(ct(r))}" font-size="${r.fontSize ?? 12}" fill="${S}">${bt(L)}</text>` : "";
      return `<path d="${I}" fill="none" stroke="${S}" stroke-width="${b}" stroke-linecap="round" stroke-linejoin="round"${G}/>` + P(r.arrowEnd ?? "arrow", p.end.x, p.end.y, E) + P(r.arrowStart ?? "none", p.start.x, p.start.y, D + Math.PI) + O;
    }
    if (r.type === "image" && r.src) {
      const p = oe(r.src);
      return p ? `<image href="${bt(p)}" x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}"${a}/>` : "";
    }
    if (r.type === "frame")
      return `<g${a}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" fill="none" stroke="${H.slate400}" stroke-width="${r.strokeWidth ?? 2}" rx="4"/><text x="${c.minX}" y="${c.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${H.muted}">${bt(r.text ?? "프레임")}</text></g>`;
    if (r.type === "note")
      return `<g${a}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" fill="${f.bg}"/><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="6" fill="${f.border}"/>` + w(r, f.text, 14, "600", "start") + "</g>";
    if (r.type === "card") {
      const p = r.cardStyle === "glass";
      return `<g${a}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" rx="16" fill="${p ? H.glassFill : H.slateCard}"/><text x="${c.minX + 16}" y="${c.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${H.slate400}">[ ${bt(r.category ?? "ENTITY")} ]</text>` + w(r, H.white, 16, "700", "start") + "</g>";
    }
    const h = r.type === "rect" || r.type === "ellipse" || r.type === "triangle" || r.type === "diamond" || r.type === "hexagon" || r.type === "star" ? r.strokeWidth ?? 2 : 2, Y = Bt(r), z = Xe(r), s = r.type === "triangle" || r.type === "diamond" || r.type === "hexagon" || r.type === "star", x = s ? Ye(r.type, c.maxX - c.minX, c.maxY - c.minY).split(" ").map((p) => {
      const [b, m] = p.split(",").map(Number);
      return `${b + c.minX},${m + c.minY}`;
    }).join(" ") : "", k = r.type === "ellipse" ? `<ellipse cx="${(c.minX + c.maxX) / 2}" cy="${(c.minY + c.maxY) / 2}" rx="${(c.maxX - c.minX) / 2}" ry="${(c.maxY - c.minY) / 2}" fill="${Y}" stroke="${z}" stroke-width="${h}"/>` : s ? `<polygon points="${x}" fill="${Y}" stroke="${z}" stroke-width="${h}" stroke-linejoin="round"/>` : `<rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" rx="12" fill="${Y}" stroke="${z}" stroke-width="${h}"/>`;
    return `<g${a}>${k}${w(r, f.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${y}" height="${g}" viewBox="${e - d} ${o - d} ${y} ${g}"><rect x="${e - d}" y="${o - d}" width="${y}" height="${g}" fill="${n ? H.canvasDark : H.canvasLight}"/>` + l + "</svg>";
}
async function ro(t) {
  const n = t();
  if (!n) return null;
  const e = /width="([\d.]+)" height="([\d.]+)"/.exec(n), o = Math.ceil(Number((e == null ? void 0 : e[1]) ?? 1200)), i = Math.ceil(Number((e == null ? void 0 : e[2]) ?? 800)), u = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`, d = new Image();
  d.crossOrigin = "anonymous";
  try {
    await new Promise((f, c) => {
      d.onload = () => f(), d.onerror = () => c(new Error("svg rasterise failed")), d.src = u;
    });
  } catch {
    return null;
  }
  const y = 2, g = o * y, w = i * y;
  if (!Number.isSafeInteger(g) || !Number.isSafeInteger(w) || g > Nt.maxExportDimension || w > Nt.maxExportDimension || g * w > Nt.maxExportPixels) return null;
  const l = document.createElement("canvas");
  l.width = g, l.height = w;
  const r = l.getContext("2d");
  return r ? (r.scale(y, y), r.drawImage(d, 0, 0), new Promise((f) => {
    try {
      l.toBlob((c) => f(c), "image/png");
    } catch {
      f(null);
    }
  })) : null;
}
function io(t, n, e) {
  if (t.length < 2) return;
  const o = t.filter(
    (f) => f.type !== "draw" && f.type !== "arrow" && f.type !== "frame" && f.type !== "image"
  );
  if (o.length < 2) return;
  const i = o.map((f, c) => ({
    id: f.id,
    i: c,
    x: mt(f).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: mt(f).y,
    vx: 0,
    vy: 0
  }));
  for (let f = 0; f < i.length; f++)
    for (let c = 0; c < f; c++)
      if (Math.abs(i[f].x - i[c].x) < 1 && Math.abs(i[f].y - i[c].y) < 1) {
        const v = 2 * Math.PI * f / i.length;
        i[f].x += Math.cos(v) * 10, i[f].y += Math.sin(v) * 10;
        break;
      }
  const u = new Map(i.map((f) => [f.id, f])), d = [];
  for (const f of t) {
    if (f.type !== "arrow") continue;
    const c = f.fromId ? u.get(f.fromId) : null, v = f.toId ? u.get(f.toId) : null;
    c && v && d.push([c, v]);
  }
  const y = 220, g = y * y, w = 80;
  let l = 400;
  const r = l / w;
  for (let f = 0; f < w; f++) {
    for (let c = 0; c < i.length; c++)
      i[c].vx = 0, i[c].vy = 0;
    for (let c = 0; c < i.length; c++)
      for (let v = c + 1; v < i.length; v++) {
        const a = i[c], S = i[v], h = a.x - S.x, Y = a.y - S.y, z = Math.hypot(h, Y) || 0.01, s = g / z, x = h / z * s, k = Y / z * s;
        a.vx += x, a.vy += k, S.vx -= x, S.vy -= k;
      }
    for (const [c, v] of d) {
      const a = c.x - v.x, S = c.y - v.y, h = Math.hypot(a, S) || 0.01, Y = h * h / y, z = a / h * Y, s = S / h * Y;
      c.vx -= z, c.vy -= s, v.vx += z, v.vy += s;
    }
    for (const c of i) {
      const v = Math.hypot(c.vx, c.vy) || 0.01, a = Math.min(v, l);
      c.x += c.vx / v * a, c.y += c.vy / v * a;
    }
    l = Math.max(0.5, l - r);
  }
  n((f) => f.map((c) => {
    const v = u.get(c.id);
    return v ? { ...c, x: v.x - c.w / 2, y: v.y - c.h / 2 } : c;
  })), e();
}
function ao(t, {
  controlled: n,
  past: e,
  future: o,
  setLocalShapes: i,
  setCamera: u,
  selectNow: d,
  setEditingId: y
}) {
  let g;
  try {
    g = ln(t);
  } catch {
    return;
  }
  n || (e.current = [], o.current = [], i(g.shapes.map(co))), u(g.camera), d(/* @__PURE__ */ new Set()), y(null);
}
function co(t) {
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
      return so(t);
  }
}
function so(t) {
  throw new dn(`Unhandled canvas shape type: ${String(t)}.`);
}
function lo({
  ref: t,
  containerRef: n,
  shapesRef: e,
  cameraRef: o,
  selectedRef: i,
  past: u,
  future: d,
  controlled: y,
  isDarkMode: g,
  minZoom: w,
  maxZoom: l,
  onToolChange: r,
  onDirty: f,
  commit: c,
  deleteSelection: v,
  selectNow: a,
  viewportCentre: S,
  setShapes: h,
  setLocalShapes: Y,
  setCamera: z,
  setEditingId: s,
  setAnnouncement: x,
  createId: k
}) {
  const p = rt((m) => {
    const $ = S(), M = Ne({
      id: k(),
      x: m.x ?? $.x - m.w / 2,
      y: m.y ?? $.y - m.h / 2,
      ...m
    });
    if (!M) throw new Error("Canvas could not create a valid shape.");
    return c((C) => [...C, M]), a(/* @__PURE__ */ new Set([M.id])), r("select"), x(`${M.type} 추가됨`), M;
  }, [c, k, r, a, x, S]), b = rt(() => oo(e.current, g), [g, e]);
  nn(t, () => ({
    addNote: (m) => {
      const $ = p({ type: "note", w: 180, h: 180, color: m, text: "" });
      s($.id);
    },
    addCard: (m, $, M, C) => {
      p({ type: "card", w: 260, h: 150, text: m, category: $, cardStyle: M, color: C });
    },
    addText: () => {
      const m = p({ type: "text", w: 220, h: 44, text: "" });
      s(m.id);
    },
    addShape: (m, $, M) => {
      p({
        type: m,
        w: m === "ellipse" ? 220 : 200,
        h: m === "ellipse" ? 110 : 140,
        color: $,
        text: M ?? ""
      });
    },
    addArrow: () => {
      const m = S(), $ = { id: k(), type: "arrow", x: m.x - 140, y: m.y, w: 280, h: 0 };
      c((M) => [...M, $]), a(/* @__PURE__ */ new Set([$.id])), r("select");
    },
    addImage: (m, $, M, C) => {
      p({ type: "image", w: M, h: C, src: m, fileName: $ });
    },
    addFileCard: (m, $, M) => {
      p({ type: "rect", w: 260, h: 120, color: "purple", text: M, src: $, fileName: m });
    },
    setTool: r,
    undo: () => {
      const m = u.current.pop();
      m && (d.current.push(e.current), h(m), a(/* @__PURE__ */ new Set()), s(null), f(), x("실행 취소"));
    },
    redo: () => {
      const m = d.current.pop();
      m && (u.current.push(e.current), h(m), a(/* @__PURE__ */ new Set()), s(null), f(), x("다시 실행"));
    },
    deleteSelected: () => {
      v(i.current);
    },
    duplicateSelected: () => {
      var C;
      const m = i.current;
      if (m.size === 0) return;
      const $ = [], M = /* @__PURE__ */ new Map();
      for (const I of e.current) {
        if (!m.has(I.id)) continue;
        let E = I.groupId;
        E && (M.has(E) || M.set(E, k("g")), E = M.get(E)), $.push({
          ...I,
          id: k(),
          x: I.x + 24,
          y: I.y + 24,
          groupId: E,
          points: (C = I.points) == null ? void 0 : C.map(([D, G]) => [D + 24, G + 24]),
          orthogonalWaypoints: I.type === "arrow" && I.orthogonalWaypoints ? I.orthogonalWaypoints.map((D) => ({ x: D.x + 24, y: D.y + 24 })) : void 0
        });
      }
      c((I) => [...I, ...$]), a(new Set($.map((I) => I.id))), x(`${$.length}개 복제됨`);
    },
    group: () => {
      var M;
      const m = i.current;
      if (m.size < 2) return;
      const $ = k("g");
      c((C) => C.map((I) => m.has(I.id) ? { ...I, groupId: $ } : I)), x(`${m.size}개 그룹화됨`), (M = n.current) == null || M.focus();
    },
    ungroup: () => {
      var $;
      const m = i.current;
      m.size !== 0 && (c((M) => M.map((C) => m.has(C.id) ? { ...C, groupId: void 0 } : C)), x("그룹 해제됨"), ($ = n.current) == null || $.focus());
    },
    zoomBy: (m) => {
      z(($) => {
        var D;
        const M = (D = n.current) == null ? void 0 : D.getBoundingClientRect(), C = Math.min(l, Math.max(w, $.z * m));
        if (!M) return { ...$, z: C };
        const I = $.x + M.width / 2 / $.z, E = $.y + M.height / 2 / $.z;
        return { x: I - M.width / 2 / C, y: E - M.height / 2 / C, z: C };
      });
    },
    zoomTo: (m) => {
      z(($) => {
        var D;
        const M = (D = n.current) == null ? void 0 : D.getBoundingClientRect(), C = Math.min(l, Math.max(w, m));
        if (!M) return { ...$, z: C };
        const I = $.x + M.width / 2 / $.z, E = $.y + M.height / 2 / $.z;
        return { x: I - M.width / 2 / C, y: E - M.height / 2 / C, z: C };
      });
    },
    resetZoom: () => {
      z((m) => {
        var I;
        const $ = (I = n.current) == null ? void 0 : I.getBoundingClientRect();
        if (!$) return { ...m, z: 1 };
        const M = m.x + $.width / 2 / m.z, C = m.y + $.height / 2 / m.z;
        return { x: M - $.width / 2, y: C - $.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var P;
      const m = e.current, $ = (P = n.current) == null ? void 0 : P.getBoundingClientRect();
      if (m.length === 0 || !$) return;
      let M = 1 / 0, C = 1 / 0, I = -1 / 0, E = -1 / 0;
      for (const F of m) {
        const L = nt(F);
        M = Math.min(M, L.minX), C = Math.min(C, L.minY), I = Math.max(I, L.maxX), E = Math.max(E, L.maxY);
      }
      const D = 80, G = Math.min(l, Math.max(
        w,
        Math.min($.width / (I - M + D * 2), $.height / (E - C + D * 2))
      ));
      z({
        x: (M + I) / 2 - $.width / 2 / G,
        y: (C + E) / 2 - $.height / 2 / G,
        z: G
      });
    },
    autoLayout: () => io(e.current, c, () => x("자동 배치 완료")),
    exportSvg: b,
    exportPng: () => ro(b),
    getSnapshot: () => ({ version: "canvas-v1", shapes: e.current, camera: o.current }),
    loadSnapshot: (m) => ao(m, {
      controlled: y,
      past: u,
      future: d,
      setLocalShapes: Y,
      setCamera: z,
      selectNow: a,
      setEditingId: s
    })
  }), [
    p,
    b,
    c,
    k,
    v,
    g,
    l,
    w,
    f,
    r,
    a,
    z,
    s,
    Y,
    h,
    x,
    S,
    y
  ]);
}
function uo(t) {
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
function xo({
  containerRef: t,
  editorRef: n,
  shapesRef: e,
  selectedRef: o,
  editingIdRef: i,
  toolRef: u,
  past: d,
  future: y,
  textualTypes: g,
  setIsSpaceDown: w,
  setEditingId: l,
  setShapes: r,
  setAnnouncement: f,
  commit: c,
  deleteSelection: v,
  selectNow: a,
  onDirty: S,
  onToolChange: h,
  createId: Y
}) {
  const z = rt((s, x) => {
    const k = o.current;
    k.size !== 0 && c((p) => p.map((b) => {
      var m;
      return k.has(b.id) ? {
        ...b,
        x: b.x + s,
        y: b.y + x,
        points: (m = b.points) == null ? void 0 : m.map(([$, M]) => [$ + s, M + x])
      } : b;
    }));
  }, [c, o]);
  yt(() => {
    const s = (b) => {
      const m = b;
      return !!m && (m.tagName === "INPUT" || m.tagName === "TEXTAREA" || m.isContentEditable);
    }, x = (b) => b instanceof Element && !!b.closest("input, select, button, textarea, option, label, [data-canvas-control]"), k = (b) => {
      var G, P, F, L;
      const m = t.current, $ = document.activeElement, M = b.target instanceof Node && !!(m != null && m.contains(b.target)), C = !!m && ($ === m || m.contains($));
      if (!M && !C || x(b.target)) return;
      if (b.code === "Space" && !s(b.target)) {
        w(!0), b.preventDefault();
        return;
      }
      if (s(b.target)) {
        if (b.key === "Escape")
          b.preventDefault(), l(null), (G = n.current) == null || G.blur(), (P = t.current) == null || P.focus();
        else if ((b.key === "Delete" || b.key === "Backspace") && !i.current) {
          const O = o.current;
          v(O) && b.preventDefault();
        }
        return;
      }
      const I = b.metaKey || b.ctrlKey, E = o.current;
      if (I && b.key.toLowerCase() === "z") {
        if (b.preventDefault(), b.shiftKey) {
          const O = y.current.pop();
          O && (d.current.push(e.current), r(O), S());
        } else {
          const O = d.current.pop();
          O && (y.current.push(e.current), r(O), S());
        }
        a(/* @__PURE__ */ new Set());
        return;
      }
      if (I && b.key.toLowerCase() === "g") {
        if (b.preventDefault(), b.shiftKey)
          E.size > 0 && (c((O) => O.map((W) => E.has(W.id) ? { ...W, groupId: void 0 } : W)), f("그룹 해제됨"));
        else if (E.size > 1) {
          const O = Y("g");
          c((W) => W.map((q) => E.has(q.id) ? { ...q, groupId: O } : q)), f(`${E.size}개 그룹화됨`);
        }
        return;
      }
      if (I && b.key.toLowerCase() === "a") {
        b.preventDefault(), a(new Set(e.current.map((O) => O.id))), f(`전체 ${e.current.length}개 선택됨`);
        return;
      }
      if (b.key === "Delete" || b.key === "Backspace") {
        v(E) && b.preventDefault();
        return;
      }
      if (b.key.startsWith("Arrow")) {
        b.preventDefault();
        const O = b.shiftKey ? 10 : 1;
        b.key === "ArrowLeft" && z(-O, 0), b.key === "ArrowRight" && z(O, 0), b.key === "ArrowUp" && z(0, -O), b.key === "ArrowDown" && z(0, O);
        return;
      }
      if (b.key === "Tab" && e.current.length > 0) {
        b.preventDefault();
        const O = e.current, W = O.findIndex((Z) => E.has(Z.id)), q = b.shiftKey ? W <= 0 ? O.length - 1 : W - 1 : W === -1 || W === O.length - 1 ? 0 : W + 1, U = O[q];
        a(/* @__PURE__ */ new Set([U.id])), f(`${U.type} 선택됨: ${Rt(U) || "내용 없음"}`);
        return;
      }
      if (b.key === "Enter" && E.size === 1) {
        const O = e.current.find((W) => E.has(W.id));
        O && g.includes(O.type) && (b.preventDefault(), l(O.id));
        return;
      }
      if (b.key === "Escape") {
        if (i.current) {
          b.preventDefault(), l(null), (F = n.current) == null || F.blur(), (L = t.current) == null || L.focus(), h("select");
          return;
        }
        a(/* @__PURE__ */ new Set()), h("select");
        return;
      }
      const D = uo(b);
      D && (b.preventDefault(), u.current = D, h(D));
    }, p = (b) => {
      const m = t.current;
      !m || !(document.activeElement === m || m.contains(document.activeElement)) || b.code === "Space" && w(!1);
    };
    return window.addEventListener("keydown", k), window.addEventListener("keyup", p), () => {
      window.removeEventListener("keydown", k), window.removeEventListener("keyup", p);
    };
  }, [
    c,
    t,
    Y,
    v,
    i,
    n,
    y,
    z,
    S,
    h,
    d,
    a,
    o,
    f,
    l,
    w,
    r,
    e,
    g,
    u
  ]);
}
const ho = 400;
function fo({
  containerRef: t,
  editorRef: n,
  pointers: e,
  cameraRef: o,
  shapesRef: i,
  toolRef: u,
  activeColorRef: d,
  drawStrokeWidth: y,
  camera: g,
  shapes: w,
  selected: l,
  isSpaceDown: r,
  textualTypes: f,
  setShapes: c,
  setEditingId: v,
  applyInteraction: a,
  selectNow: S,
  beginHistory: h,
  commit: Y,
  onToolChange: z,
  expandToGroups: s,
  toPage: x,
  createId: k
}) {
  const p = k, b = tt(null), m = (P, F) => {
    var q;
    const L = ((q = t.current) == null ? void 0 : q.dataset.canvasActiveTool) === "text" ? "text" : u.current;
    if (L !== "note" && L !== "text") return;
    const O = x(P, F), W = L === "note" ? { id: p(), type: "note", x: O.x - 90, y: O.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: p(), type: "text", x: O.x, y: O.y - 22, w: 220, h: 44, text: "" };
    Y((U) => [...U, W]), S(/* @__PURE__ */ new Set([W.id])), v(W.id), z("select");
  };
  return yt(() => {
    const P = (F) => {
      var L;
      (L = t.current) != null && L.contains(F.target) && (F.target instanceof Element && F.target.closest('[role="textbox"], [data-canvas-inspector]') || m(F.clientX, F.clientY));
    };
    return window.addEventListener("click", P, !0), () => window.removeEventListener("click", P, !0);
  }), { onPointerDown: (P) => {
    var q, U, Z;
    const F = u.current;
    if (e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), e.current.size === 2) {
      const [_, V] = [...e.current.values()], ot = o.current;
      a({
        kind: "pinch",
        startDist: Math.hypot(V.x - _.x, V.y - _.y) || 1,
        startZoom: ot.z,
        startMidX: (_.x + V.x) / 2,
        startMidY: (_.y + V.y) / 2,
        camX: ot.x,
        camY: ot.y
      });
      return;
    }
    if (e.current.size > 2) return;
    if (P.button === 1 || r || F === "hand" || P.button === 0 && F === "select" && P.altKey) {
      a({ kind: "pan", startX: P.clientX, startY: P.clientY, camX: g.x, camY: g.y });
      return;
    }
    if (P.button !== 0) return;
    const L = x(P.clientX, P.clientY);
    if (v(null), (q = n.current) == null || q.blur(), (U = t.current) == null || U.focus(), F === "draw" || F === "highlighter") {
      const _ = {
        id: p(),
        type: "draw",
        x: L.x,
        y: L.y,
        w: 0,
        h: 0,
        points: [[L.x, L.y]],
        color: d.current,
        strokeWidth: y,
        drawMode: F === "highlighter" ? "highlighter" : "pen"
      };
      h(), c((V) => [...V, _]), a({ kind: "drawing", id: _.id });
      return;
    }
    if (F === "arrow" || F === "frame" || un.includes(F)) {
      const _ = F, V = F === "arrow" ? { id: p(), type: "arrow", x: L.x, y: L.y, w: 0, h: 0, color: d.current } : F === "frame" ? { id: p(), type: "frame", x: L.x, y: L.y, w: 0, h: 0, text: "프레임" } : { id: p(), type: _, x: L.x, y: L.y, w: 0, h: 0, color: d.current, text: "" };
      h(), c((ot) => [...ot, V]), a({ kind: "creating", id: V.id, startX: L.x, startY: L.y });
      return;
    }
    if (F === "note" || F === "text") return;
    if (F === "eraser") {
      h(), c((_) => Ee(_, L.x, L.y, 14 / g.z, g.z)), a({ kind: "erasing" });
      return;
    }
    const O = new Map(w.map((_) => [_.id, _])), W = [...w].reverse().find((_) => jt(_, L.x, L.y, g.z, O, w));
    if (!W)
      b.current = null;
    else {
      const _ = Date.now(), V = !P.shiftKey && f.includes(W.type) && ((Z = b.current) == null ? void 0 : Z.id) === W.id && _ - b.current.time < ho, ot = V ? W.id : void 0;
      b.current = V ? null : { id: W.id, time: _ };
      const xt = P.shiftKey ? new Set(l).add(W.id) : l.has(W.id) ? l : /* @__PURE__ */ new Set([W.id]), X = s(xt);
      S(X);
      const T = /* @__PURE__ */ new Map();
      for (const j of w) X.has(j.id) && T.set(j.id, j);
      for (const j of w) {
        if (j.type !== "frame" || !X.has(j.id)) continue;
        const Q = nt(j);
        for (const et of w) {
          if (et.id === j.id || T.has(et.id)) continue;
          const st = mt(et);
          st.x >= Q.minX && st.x <= Q.maxX && st.y >= Q.minY && st.y <= Q.maxY && T.set(et.id, et);
        }
      }
      h(), a({ kind: "move", startX: L.x, startY: L.y, origin: T, editOnReleaseId: ot });
      return;
    }
    P.shiftKey || S(/* @__PURE__ */ new Set()), a({
      kind: "marquee",
      startX: L.x,
      startY: L.y,
      curX: L.x,
      curY: L.y,
      screenStartX: P.clientX,
      screenStartY: P.clientY
    });
  }, onResizeHandleDown: (P, F, L) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), h(), a({ kind: "resize", id: F.id, handle: L, start: F });
  }, onRotateHandleDown: (P, F) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
    const L = x(P.clientX, P.clientY), O = mt(F);
    h(), a({
      kind: "rotate",
      id: F.id,
      startAngle: Math.atan2(L.y - O.y, L.x - O.x),
      startRotation: F.rotation ?? 0
    });
  }, onConnectHandleDown: (P, F) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
    const L = x(P.clientX, P.clientY);
    a({ kind: "connect", fromId: F.id, toX: L.x, toY: L.y, hoverId: null });
  }, onBendHandleDown: (P, F) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), h(), a({ kind: "bend", id: F.id });
  }, onOrthogonalSegmentHandleDown: (P, F, L) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), h(), a({ kind: "orthogonal-segment", id: F.id, segmentIndex: L });
  }, onArrowEndpointDown: (P, F, L) => {
    P.stopPropagation(), e.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), h(), a({ kind: "arrow-endpoint", id: F.id, endpoint: L, hoverId: null });
  } };
}
const mo = 0.1, vo = 4, po = 14, yo = 4, ve = ["note", "card", "rect", "ellipse", "text", "image"];
function go({
  pointers: t,
  interactionRef: n,
  cameraRef: e,
  toPage: o,
  shapesRef: i,
  setShapes: u,
  setEditingId: d,
  setEraserPos: y,
  setGuides: g,
  setAnnouncement: w,
  applyInteraction: l,
  selectNow: r,
  endHistory: f,
  commit: c,
  onToolChange: v,
  createId: a
}) {
  const S = a;
  yt(() => {
    const h = (Y) => {
      t.current.delete(Y.pointerId);
      const z = n.current;
      if (z.kind !== "none") {
        if (z.kind === "pinch") {
          t.current.size < 2 && l({ kind: "none" });
          return;
        }
        if (g([]), z.kind === "erasing") {
          y(null), f(), l({ kind: "none" });
          return;
        }
        if (z.kind === "connect") {
          const x = i.current.find((M) => M.id === z.fromId);
          if (l({ kind: "none" }), !x) return;
          const k = { x: z.toX, y: z.toY }, p = mt(x);
          if (!z.hoverId && Math.hypot(k.x - p.x, k.y - p.y) < 30) return;
          const b = [];
          let m = z.hoverId;
          if (!m) {
            const M = x.type === "note" ? 180 : 200, C = x.type === "note" ? 180 : 120, I = {
              ...x,
              id: S(),
              x: k.x - M / 2,
              y: k.y - C / 2,
              w: M,
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
            b.push(I), m = I.id;
          }
          const $ = {
            id: S(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: x.id,
            toId: m,
            text: ""
          };
          b.push($), c((M) => [...M, ...b]), r(/* @__PURE__ */ new Set([$.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => d($.id)) : d($.id), w("연결 생성됨");
          return;
        }
        if (z.kind === "bend") {
          f(), l({ kind: "none" });
          return;
        }
        if (z.kind === "drawing") {
          u((s) => s.map((x) => {
            if (x.id !== z.id || !x.points) return x;
            const k = x.points.map(($) => $[0]), p = x.points.map(($) => $[1]), b = Math.min(...k), m = Math.min(...p);
            return { ...x, x: b, y: m, w: Math.max(...k) - b, h: Math.max(...p) - m };
          })), f(), l({ kind: "none" });
          return;
        }
        if (z.kind === "creating") {
          u((s) => s.map((x) => {
            if (x.id !== z.id) return x;
            const k = Math.abs(x.w) < 4 && Math.abs(x.h) < 4 ? {
              ...x,
              w: x.type === "arrow" ? 200 : x.type === "frame" ? 480 : 180,
              h: x.type === "arrow" ? 0 : x.type === "frame" ? 320 : 120
            } : x;
            if (k.type === "arrow") return k;
            const p = $t(k);
            return { ...k, x: p.minX, y: p.minY, w: p.maxX - p.minX, h: p.maxY - p.minY };
          })), f(), r(/* @__PURE__ */ new Set([z.id])), v("select"), l({ kind: "none" });
          return;
        }
        if ((z.kind === "move" || z.kind === "resize" || z.kind === "rotate" || z.kind === "orthogonal-segment" || z.kind === "arrow-endpoint") && f(), z.kind === "move" && z.editOnReleaseId && Y.type === "pointerup") {
          const s = o(Y.clientX, Y.clientY);
          Math.hypot(s.x - z.startX, s.y - z.startY) * e.current.z <= yo && d(z.editOnReleaseId);
        }
        l({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h), () => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h);
    };
  }, [l, e, a, f, n, v, t, r, w, d, u, i, o]);
}
function wo({
  containerRef: t,
  pointers: n,
  interactionRef: e,
  cameraRef: o,
  shapesRef: i,
  setCamera: u,
  setShapes: d,
  setEraserPos: y,
  setGuides: g,
  applyInteraction: w,
  selectNow: l,
  expandToGroups: r,
  toPage: f
}) {
  yt(() => {
    const c = (v) => {
      var Y, z;
      n.current.has(v.pointerId) && n.current.set(v.pointerId, { x: v.clientX, y: v.clientY });
      const a = e.current;
      if (a.kind === "none") return;
      const S = o.current;
      if (a.kind === "pinch") {
        if (n.current.size < 2) return;
        const [s, x] = [...n.current.values()], k = Math.hypot(x.x - s.x, x.y - s.y) || 1, p = (s.x + x.x) / 2, b = (s.y + x.y) / 2, m = (Y = t.current) == null ? void 0 : Y.getBoundingClientRect();
        if (!m) return;
        const $ = Math.min(vo, Math.max(mo, a.startZoom * (k / a.startDist))), M = a.camX + (a.startMidX - m.left) / a.startZoom, C = a.camY + (a.startMidY - m.top) / a.startZoom;
        u({ x: M - (p - m.left) / $, y: C - (b - m.top) / $, z: $ });
        return;
      }
      if (a.kind === "pan") {
        u({
          x: a.camX - (v.clientX - a.startX) / S.z,
          y: a.camY - (v.clientY - a.startY) / S.z,
          z: S.z
        });
        return;
      }
      const h = f(v.clientX, v.clientY);
      if (a.kind === "erasing") {
        d((s) => Ee(s, h.x, h.y, po / S.z, S.z)), y({ x: h.x, y: h.y });
        return;
      }
      if (a.kind === "connect") {
        const s = i.current, x = new Map(s.map((p) => [p.id, p])), k = [...s].reverse().find((p) => p.id !== a.fromId && ve.includes(p.type) && jt(p, h.x, h.y, S.z, x, s));
        w({ ...a, toX: h.x, toY: h.y, hoverId: (k == null ? void 0 : k.id) ?? null });
        return;
      }
      if (a.kind === "bend") {
        const s = i.current, x = s.find((I) => I.id === a.id);
        if (!x) return;
        const k = pt(x, new Map(s.map((I) => [I.id, I])), s), p = k.end.x - k.start.x, b = k.end.y - k.start.y, m = Math.hypot(p, b) || 1, $ = (k.start.x + k.end.x) / 2, M = (k.start.y + k.end.y) / 2, C = (h.x - $) * (-b / m) + (h.y - M) * (p / m);
        d((I) => I.map((E) => E.id === a.id ? { ...E, bend: C } : E));
        return;
      }
      if (a.kind === "orthogonal-segment") {
        const s = i.current, x = s.find((C) => C.id === a.id);
        if (!x) return;
        const k = pt(x, new Map(s.map((C) => [C.id, C])), s), p = k.routing === "orthogonal" ? k.pathPoints : void 0;
        if (!p || p.length < 2) return;
        const b = p[a.segmentIndex], m = p[a.segmentIndex + 1];
        if (!b || !m) return;
        const $ = b.x === m.x ? h.x : h.y, M = Sn(p, a.segmentIndex, $);
        d((C) => C.map((I) => I.id === a.id ? { ...I, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: M.slice(1, -1).map((E) => ({ x: E.x, y: E.y })) } : I));
        return;
      }
      if (a.kind === "arrow-endpoint") {
        const s = i.current, x = s.find((M) => M.id === a.id);
        if (!x) return;
        const k = new Map(s.map((M) => [M.id, M])), p = pt(x, k, s), b = a.endpoint === "start" ? p.end : p.start, m = [...s].reverse().find((M) => M.id !== x.id && ve.includes(M.type) && jt(M, h.x, h.y, S.z, k, s)), $ = m ? Yt(m, b.x, b.y) : { x: h.x, y: h.y };
        w({ ...a, hoverId: (m == null ? void 0 : m.id) ?? null }), d((M) => M.map((C) => {
          if (C.id !== x.id) return C;
          const I = a.endpoint === "start" ? $ : b, E = a.endpoint === "end" ? $ : b;
          return {
            ...C,
            x: I.x,
            y: I.y,
            w: E.x - I.x,
            h: E.y - I.y,
            fromId: a.endpoint === "start" ? m == null ? void 0 : m.id : C.fromId,
            toId: a.endpoint === "end" ? m == null ? void 0 : m.id : C.toId
          };
        }));
        return;
      }
      if (a.kind === "marquee") {
        w({ ...a, curX: h.x, curY: h.y });
        const s = Math.min(a.startX, h.x), x = Math.max(a.startX, h.x), k = Math.min(a.startY, h.y), p = Math.max(a.startY, h.y), b = Math.min(a.screenStartX, v.clientX), m = Math.max(a.screenStartX, v.clientX), $ = Math.min(a.screenStartY, v.clientY), M = Math.max(a.screenStartY, v.clientY), C = /* @__PURE__ */ new Map();
        (z = t.current) == null || z.querySelectorAll("[data-canvas-shape-id]").forEach((E) => {
          const D = E.dataset.canvasShapeId;
          D && C.set(D, E.getBoundingClientRect());
        });
        const I = i.current.filter((E) => {
          const D = C.get(E.id);
          if (D)
            return D.right >= b && D.left <= m && D.bottom >= $ && D.top <= M;
          const G = nt(E);
          return G.maxX >= s && G.minX <= x && G.maxY >= k && G.minY <= p;
        }).map((E) => E.id);
        l(r(new Set(I)));
        return;
      }
      if (a.kind === "move") {
        let s = h.x - a.startX, x = h.y - a.startY;
        const k = a.origin, p = (() => {
          let $ = 1 / 0, M = 1 / 0, C = -1 / 0, I = -1 / 0;
          return k.forEach((E) => {
            const D = nt({ ...E, x: E.x + s, y: E.y + x });
            $ = Math.min($, D.minX), M = Math.min(M, D.minY), C = Math.max(C, D.maxX), I = Math.max(I, D.maxY);
          }), { minX: $, minY: M, maxX: C, maxY: I };
        })(), b = i.current.filter(($) => !k.has($.id)), m = Nn(p, b, S.z);
        s += m.dx, x += m.dy, g(m.guides), d(($) => $.map((M) => {
          var I;
          const C = k.get(M.id);
          return C ? {
            ...M,
            x: C.x + s,
            y: C.y + x,
            points: (I = C.points) == null ? void 0 : I.map(([E, D]) => [E + s, D + x]),
            ...C.type === "arrow" && C.orthogonalWaypoints ? { orthogonalWaypoints: C.orthogonalWaypoints.map((E) => ({ x: E.x + s, y: E.y + x })) } : {}
          } : M;
        }));
        return;
      }
      if (a.kind === "drawing") {
        d((s) => s.map((x) => {
          if (x.id !== a.id || !x.points) return x;
          if (v.shiftKey) {
            const p = x.points[0];
            return p ? { ...x, points: [p, [h.x, h.y]] } : x;
          }
          const k = x.points[x.points.length - 1];
          return Math.hypot(h.x - k[0], h.y - k[1]) < 2 / S.z ? x : { ...x, points: [...x.points, [h.x, h.y]] };
        }));
        return;
      }
      if (a.kind === "creating") {
        d((s) => s.map((x) => x.id === a.id ? { ...x, w: h.x - a.startX, h: h.y - a.startY } : x));
        return;
      }
      if (a.kind === "rotate") {
        const s = i.current.find((b) => b.id === a.id);
        if (!s) return;
        const x = mt(s), k = Math.atan2(h.y - x.y, h.x - x.x);
        let p = a.startRotation + (k - a.startAngle);
        v.shiftKey && (p = Math.round(p / (Math.PI / 12)) * (Math.PI / 12)), d((b) => b.map((m) => m.id === a.id ? { ...m, rotation: p } : m));
        return;
      }
      if (a.kind === "resize") {
        const { start: s, handle: x } = a, k = Ie(s, h.x, h.y);
        d((p) => p.map((b) => {
          if (b.id !== s.id) return b;
          let { x: m, y: $, w: M, h: C } = s;
          if (x.includes("e") && (M = Math.max(20, k.x - s.x)), x.includes("s") && (C = Math.max(20, k.y - s.y)), x.includes("w")) {
            const I = s.x + s.w;
            m = Math.min(k.x, I - 20), M = I - m;
          }
          if (x.includes("n")) {
            const I = s.y + s.h;
            $ = Math.min(k.y, I - 20), C = I - $;
          }
          return { ...b, x: m, y: $, w: M, h: C, manualSize: b.type === "text" ? !0 : b.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", c), () => window.removeEventListener("pointermove", c);
  }, [w, t, r, e, n, l, i, f]);
}
function bo(t) {
  wo(t), go(t);
}
function ko({
  containerRef: t,
  editorRef: n,
  pointers: e,
  interactionRef: o,
  cameraRef: i,
  shapesRef: u,
  toolRef: d,
  activeColorRef: y,
  drawStrokeWidth: g,
  camera: w,
  shapes: l,
  selected: r,
  isSpaceDown: f,
  textualTypes: c,
  setCamera: v,
  setShapes: a,
  setEditingId: S,
  setEraserPos: h,
  setGuides: Y,
  setAnnouncement: z,
  applyInteraction: s,
  selectNow: x,
  beginHistory: k,
  endHistory: p,
  commit: b,
  onToolChange: m,
  expandToGroups: $,
  toPage: M,
  createId: C
}) {
  const I = fo({
    containerRef: t,
    editorRef: n,
    pointers: e,
    cameraRef: i,
    shapesRef: u,
    toolRef: d,
    activeColorRef: y,
    drawStrokeWidth: g,
    camera: w,
    shapes: l,
    selected: r,
    isSpaceDown: f,
    textualTypes: c,
    setShapes: a,
    setEditingId: S,
    applyInteraction: s,
    selectNow: x,
    beginHistory: k,
    commit: b,
    onToolChange: m,
    expandToGroups: $,
    toPage: M,
    createId: C
  });
  return bo({
    containerRef: t,
    pointers: e,
    interactionRef: o,
    cameraRef: i,
    shapesRef: u,
    setCamera: v,
    setShapes: a,
    setEditingId: S,
    setEraserPos: h,
    setGuides: Y,
    setAnnouncement: z,
    applyInteraction: s,
    selectNow: x,
    endHistory: p,
    commit: b,
    onToolChange: m,
    expandToGroups: $,
    toPage: M,
    createId: C
  }), I;
}
function $o(t) {
  lo(t);
  const n = kt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(e) {
      t.toolRef.current = e;
    }
  }), [t.toolRef]);
  return xo({ ...t, toolRef: n }), ko(t);
}
function zo({
  isDarkMode: t,
  tool: n,
  isSpaceDown: e,
  interaction: o,
  zoom: i
}) {
  const u = e || o.kind === "pan" ? "grabbing" : n === "hand" ? "grab" : n === "draw" ? "crosshair" : n === "eraser" ? "cell" : n === "select" ? "default" : "crosshair", d = t ? H.gridDark : H.gridLight, y = 40 * i;
  return { cursor: u, gridColor: d, gridSize: y, strokeColorOf: (w) => w.color ? dt[w.color].border : t ? "var(--canvas-slate-200)" : H.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = zn, document.head.appendChild(t);
}
const pe = 0.1, ye = 4, ge = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function Oe(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Mo(t, n, e) {
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
function Xo(t, n, e) {
  return t.map((o) => n.has(o.id) && o.type === "draw" ? { ...o, ...e } : o);
}
function Yo(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const Po = on(function({
  boardIdentity: n = "standalone",
  isDarkMode: e,
  tool: o,
  drawStrokeWidth: i = 4,
  onToolChange: u,
  onDirty: d,
  onZoomChange: y,
  onSelectionChange: g,
  shapes: w,
  onShapesChange: l,
  peerCursors: r,
  onLocalCursor: f
}, c) {
  var de, ue;
  const {
    containerRef: v,
    editorRef: a,
    setLocalShapes: S,
    controlled: h,
    shapes: Y,
    setShapes: z,
    camera: s,
    setCamera: x,
    cameraRef: k,
    selected: p,
    selectedRef: b,
    editingId: m,
    setEditingId: $,
    editingIdRef: M,
    interaction: C,
    interactionRef: I,
    applyInteraction: E,
    isSpaceDown: D,
    setIsSpaceDown: G,
    guides: P,
    setGuides: F,
    announcement: L,
    setAnnouncement: O,
    showInspectorPalette: W,
    setShowInspectorPalette: q,
    eraserPos: U,
    setEraserPos: Z,
    setActiveColor: _,
    activeColorRef: V,
    installedFontFamilies: ot,
    pointers: xt,
    past: X,
    future: T,
    selectNow: j,
    commit: Q,
    deleteSelection: et,
    beginHistory: st,
    endHistory: It,
    toPage: Tt,
    viewportCentre: Vt,
    expandToGroups: Gt,
    toolRef: qt,
    shapesRef: St
  } = eo({ boardIdentity: n, tool: o, controlledShapes: w, onShapesChange: l, onDirty: d }), {
    inspectorShape: zt,
    onContainerPointerMove: A,
    onContainerPointerLeave: R
  } = no({
    containerRef: v,
    camera: s,
    setCamera: x,
    minZoom: pe,
    maxZoom: ye,
    shapes: Y,
    selected: p,
    editingId: m,
    textualTypes: ge,
    onZoomChange: y,
    onSelectionChange: g,
    onLocalCursor: f,
    toPage: Tt
  }), {
    onPointerDown: B,
    onResizeHandleDown: J,
    onRotateHandleDown: gt,
    onConnectHandleDown: wt,
    onBendHandleDown: Qt,
    onOrthogonalSegmentHandleDown: De,
    onArrowEndpointDown: _e
  } = $o({
    ref: c,
    containerRef: v,
    editorRef: a,
    pointers: xt,
    interactionRef: I,
    cameraRef: k,
    shapesRef: St,
    toolRef: qt,
    activeColorRef: V,
    drawStrokeWidth: i,
    camera: s,
    shapes: Y,
    selected: p,
    isSpaceDown: D,
    setCamera: x,
    setShapes: z,
    setEditingId: $,
    setEraserPos: Z,
    setGuides: F,
    setAnnouncement: O,
    applyInteraction: E,
    selectNow: j,
    past: X,
    future: T,
    beginHistory: st,
    endHistory: It,
    commit: Q,
    deleteSelection: et,
    onDirty: d,
    onToolChange: u,
    controlled: h,
    isDarkMode: e,
    minZoom: pe,
    maxZoom: ye,
    textualTypes: ge,
    selectedRef: b,
    editingIdRef: M,
    setIsSpaceDown: G,
    viewportCentre: Vt,
    setLocalShapes: S,
    expandToGroups: Gt,
    toPage: Tt,
    createId: Yo
  }), { cursor: He, gridColor: Be, gridSize: ae, strokeColorOf: je } = zo({
    isDarkMode: e,
    tool: o === "highlighter" ? "draw" : o,
    isSpaceDown: D,
    interaction: C,
    zoom: s.z
  }), ce = (ht) => {
    const Je = b.current, xe = M.current, Pt = new Set(Je);
    if (xe && Pt.add(xe), Pt.size === 0) return;
    const he = "strokeWidth" in ht, tn = Object.keys(ht).every((ft) => ft === "color" || ft === "fillColor" || ft === "strokeWidth");
    if ((zt == null ? void 0 : zt.type) === "draw" && tn) {
      const ft = "color" in ht ? ht.color : void 0, lt = "strokeWidth" in ht ? ht.strokeWidth : void 0;
      Q((en) => Xo(en, Pt, {
        ...ft !== void 0 ? { color: ft } : {},
        ...lt !== void 0 ? { strokeWidth: lt } : {}
      }));
      return;
    }
    if (he) {
      const ft = ht.strokeWidth;
      if (ft !== void 0 && Object.keys(ht).length === 1) {
        Q((lt) => Mo(lt, Pt, ft));
        return;
      }
    }
    Q((ft) => ft.map((lt) => {
      if (!Pt.has(lt.id)) return lt;
      if (!he) return { ...lt, ...ht };
      switch (lt.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...lt, ...ht };
        case "note":
        case "card":
        case "text":
        case "image":
          return lt;
        case "draw":
          return { ...lt, ...ht };
        default:
          return Oe(lt);
      }
    }));
  }, {
    commitEditorHtml: Ke,
    applyFormat: Re,
    applyList: Ue,
    onEditorKeyDown: Ve,
    applyCustomFontFamily: Ge
  } = to({
    editorRef: a,
    editingId: m,
    setShapes: z,
    setAnnouncement: O,
    onDirty: d,
    patchSelected: ce
  }), { renderEditor: qe, renderShapeBody: Qe } = Zn({
    camera: s,
    editingId: m,
    isDarkMode: e,
    editorRef: a,
    commitEditorHtml: Ke,
    onEditorKeyDown: Ve,
    setShapes: z,
    onDirty: d
  }), Ze = C.kind === "marquee" ? C : null, { shapeById: se, visiblePaintOrder: le } = Jn({
    containerRef: v,
    shapesRef: St,
    shapes: Y,
    camera: s,
    selected: p,
    editingId: m,
    boardIdentity: n
  });
  return /* @__PURE__ */ K(
    "div",
    {
      ref: v,
      onPointerDown: B,
      onPointerMove: A,
      onPointerLeave: R,
      role: "application",
      "data-canvas-board-id": n,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": s.x,
      "data-canvas-camera-y": s.y,
      "data-canvas-camera-z": s.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: He,
        background: e ? H.canvasDark : H.canvasLight,
        backgroundImage: `radial-gradient(${Be} 1px, transparent 1px)`,
        backgroundSize: `${ae}px ${ae}px`,
        backgroundPosition: `${-s.x * s.z}px ${-s.y * s.z}px`
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
            children: L
          }
        ),
        /* @__PURE__ */ N(
          Pn,
          {
            visiblePaintOrder: le,
            selected: p,
            shapeById: se,
            allShapes: St.current,
            camera: s,
            interaction: C,
            eraserPos: U,
            guides: P,
            marquee: Ze,
            strokeColorOf: je
          }
        ),
        /* @__PURE__ */ N(
          Un,
          {
            visiblePaintOrder: le,
            selected: p,
            editingId: m,
            camera: s,
            shapeById: se,
            allShapes: St.current,
            peerCursors: r,
            isDarkMode: e,
            renderEditor: qe,
            renderShapeBody: Qe,
            setEditingId: $,
            onBendHandleDown: Qt,
            onOrthogonalSegmentHandleDown: De,
            onResizeHandleDown: J,
            onRotateHandleDown: gt,
            onConnectHandleDown: wt,
            onArrowEndpointDown: _e
          }
        ),
        zt && /* @__PURE__ */ N(
          Qn,
          {
            shape: zt,
            shapes: Y,
            camera: s,
            canvasSize: { width: ((de = v.current) == null ? void 0 : de.clientWidth) ?? 380, height: ((ue = v.current) == null ? void 0 : ue.clientHeight) ?? 190 },
            isDarkMode: e,
            editing: !!m,
            showPalette: W,
            installedFontFamilies: ot,
            setShowPalette: q,
            setActiveColor: _,
            patchSelected: ce,
            applyFormat: Re,
            applyList: Ue,
            applyCustomFontFamily: Ge
          }
        )
      ]
    }
  );
});
export {
  dt as CANVAS_COLORS,
  sn as CANVAS_COLOR_KEYS,
  vt as CANVAS_FONTS,
  Po as InfiniteCanvas,
  un as SHAPE_TOOLS,
  Xo as applySelectedDrawStyle,
  Mo as applySelectedStrokeWidth
};
