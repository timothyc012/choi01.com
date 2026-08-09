import { jsx as C, jsxs as j, Fragment as gt } from "react/jsx-runtime";
import xn, { useRef as tt, useState as it, useLayoutEffect as Gt, useEffect as ft, useMemo as bt, useCallback as rt, useImperativeHandle as Un, forwardRef as Gn } from "react";
import { p as qn, i as nn, k as gn, a as st, v as Qn, c as ut, s as Zn, b as Jn, d as zt, h as te, S as ne } from "./document-CyKLUB7f.js";
import { Palette as ee, Minus as oe, Plus as re, ChevronDown as ie, AlignLeft as ae, AlignCenter as ce, AlignRight as se, List as le, ListOrdered as de, Bold as ue, Italic as xe, Underline as fe } from "lucide-react";
const he = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover{background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover{background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', _ = Object.freeze({
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
}), bn = 12;
function qt(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function Pt(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function It(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function Et(t, e, n, o) {
  const l = It(t, e, n), d = It(t, e, o), p = It(n, o, t), b = It(n, o, e);
  return Math.abs(l) < 1e-6 && Pt(t, n, e) || Math.abs(d) < 1e-6 && Pt(t, o, e) || Math.abs(p) < 1e-6 && Pt(n, t, o) || Math.abs(b) < 1e-6 && Pt(n, e, o) ? !0 : l > 0 != d > 0 && p > 0 != b > 0;
}
function ve(t, e, n) {
  const o = Math.min(t.x, e.x), r = Math.max(t.x, e.x), l = Math.min(t.y, e.y), d = Math.max(t.y, e.y);
  if (r < n.minX || o > n.maxX || d < n.minY || l > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const p = { x: n.minX, y: n.minY }, b = { x: n.maxX, y: n.minY }, g = { x: n.maxX, y: n.maxY }, h = { x: n.minX, y: n.maxY };
  return Et(t, e, p, b) || Et(t, e, b, g) || Et(t, e, g, h) || Et(t, e, h, p);
}
function me(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const o of e)
      if (ve(t[n - 1], t[n], o)) return !0;
  return !1;
}
function Qt(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function en(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = Qt(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let o = 0;
  for (let l = 1; l < t.length; l++) {
    const d = Math.hypot(t[l].x - t[l - 1].x, t[l].y - t[l - 1].y);
    if (o + d >= n) {
      const p = (n - o) / d;
      return { x: t[l - 1].x + (t[l].x - t[l - 1].x) * p, y: t[l - 1].y + (t[l].y - t[l - 1].y) * p };
    }
    o += d;
  }
  const r = t[t.length - 1];
  return { x: r.x, y: r.y };
}
function Zt(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function fn(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([t, e]), l = Math.min(t, e), d = Math.max(t, e), p = bn * 1.2;
  for (const b of n) {
    const g = (o === "x" ? b.minX : b.minY) - p, h = (o === "x" ? b.maxX : b.maxY) + p, i = (u) => u >= l - p * 4 && u <= d + p * 4;
    i(g) && r.add(g), i(h) && r.add(h);
  }
  return [...r].sort((b, g) => Math.abs(b - t) - Math.abs(g - t));
}
function wn(t) {
  const e = [];
  for (const n of t) {
    const o = e[e.length - 1];
    (!o || o.x !== n.x || o.y !== n.y) && e.push(n);
  }
  return e;
}
function $n(t) {
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
function pe(t, e, n) {
  const o = [t];
  for (const r of [...n, e]) {
    const l = o[o.length - 1];
    if (!l) {
      o.push(r);
      continue;
    }
    if (l.x === r.x || l.y === r.y) {
      o.push(r);
      continue;
    }
    o.push({ x: r.x, y: l.y }, r);
  }
  return $n(o);
}
function ye(t, e, n) {
  const o = t[e], r = t[e + 1];
  if (!o || !r || !Number.isFinite(n) || o.x !== r.x && o.y !== r.y) return [...t];
  const l = o.x === r.x ? [o, { x: n, y: o.y }, { x: n, y: r.y }, r] : [o, { x: o.x, y: n }, { x: r.x, y: n }, r];
  return $n([
    ...t.slice(0, e),
    ...l,
    ...t.slice(e + 2)
  ]);
}
function Ut(t, e) {
  const n = [], o = [];
  for (const l of t) {
    const d = wn(l);
    d.length < 2 || (me(d, e) ? o.push(d) : n.push(d));
  }
  const r = n.length > 0 ? n : o;
  return r.length === 0 ? [] : r.reduce((l, d) => Qt(d) < Qt(l) ? d : l);
}
function hn(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function Xt(t, e, n, o) {
  const r = Math.min(t, e), l = Math.max(t, e), d = Math.max(48, Math.abs(e - t) * 0.35, bn * 4);
  if (o === "x") {
    if (n === "e") return l + d;
    if (n === "w") return r - d;
  } else {
    if (n === "s") return l + d;
    if (n === "n") return r - d;
  }
  return t <= e ? r - d : l + d;
}
function ge(t, e, n, o, r) {
  const l = (t.x + e.x) / 2, d = (t.y + e.y) / 2;
  if (n === "u") {
    if (o) {
      const b = Xt(t.x, e.x, t.side, "x");
      return [t, { x: b, y: t.y }, { x: b, y: e.y }, e];
    }
    const p = Xt(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: p }, { x: e.x, y: p }, e];
  }
  if (n === "zigzag") {
    if (o) {
      const g = Xt(t.x, e.x, t.side, "x"), h = Xt(t.y, e.y, t.side, "y");
      return r ? [t, { x: g, y: t.y }, { x: g, y: h }, { x: l, y: h }, { x: l, y: e.y }, e] : [t, { x: g, y: t.y }, { x: g, y: h }, { x: e.x, y: h }, e];
    }
    const p = Xt(t.y, e.y, t.side, "y"), b = Xt(t.x, e.x, t.side, "x");
    return r ? [t, { x: t.x, y: p }, { x: b, y: p }, { x: b, y: e.y }, e] : [t, { x: t.x, y: p }, { x: b, y: p }, { x: b, y: d }, { x: e.x, y: d }, e];
  }
  return [];
}
function zn(t, e, n = [], o = "elbow", r = []) {
  if (r.length > 0) return pe(t, e, r);
  const l = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), d = e.side ?? (l === "e" || l === "w" ? "w" : "n"), p = l === "e" || l === "w", b = d === "e" || d === "w", g = fn(t.x, e.x, n, "x"), h = fn(t.y, e.y, n, "y"), i = [];
  if (p && b) {
    for (const a of g) i.push([t, { x: a, y: t.y }, { x: a, y: e.y }, e]);
    for (const a of h) i.push([t, { x: t.x, y: a }, { x: e.x, y: a }, e]);
  } else if (!p && !b) {
    for (const a of h) i.push([t, { x: t.x, y: a }, { x: e.x, y: a }, e]);
    for (const a of g) i.push([t, { x: a, y: t.y }, { x: a, y: e.y }, e]);
  } else if (p) {
    i.push([t, { x: e.x, y: t.y }, e]);
    for (const a of h)
      i.push([t, { x: t.x, y: a }, { x: e.x, y: a }, e]), i.push([t, { x: t.x, y: a }, e]);
    for (const a of g) i.push([t, { x: a, y: t.y }, { x: a, y: e.y }, e]);
  } else {
    i.push([t, { x: t.x, y: e.y }, e]);
    for (const a of h)
      i.push([t, { x: t.x, y: a }, e]), i.push([t, { x: t.x, y: a }, { x: e.x, y: a }, e]);
    for (const a of g) i.push([t, { x: a, y: t.y }, { x: a, y: e.y }, e]);
  }
  const u = Ut(i, n);
  if (o === "elbow") return u;
  if (o === "reverse") {
    const a = hn(u), X = Ut(i.filter((x) => hn(x) !== a), n);
    return X.length > 1 ? X : u;
  }
  const c = ge(t, e, o, p, b), v = Ut([c], n);
  return v.length > 1 ? v : u;
}
function be(t) {
  return t.length < 2 ? 0 : Zt(t[t.length - 2], t[t.length - 1]);
}
function Jt(t) {
  if (t.fillColor)
    try {
      return gn(t.fillColor);
    } catch {
    }
  return t.color ? st[t.color].bg : st.blue.bg;
}
function we(t) {
  return t.color ? st[t.color].border : "#2563eb";
}
function wt(t) {
  if (t.textColor)
    try {
      return gn(t.textColor);
    } catch {
    }
  return t.color ? st[t.color].text : "#0f172a";
}
function $e(t, e, n) {
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
      const o = e / 2, r = n / 2, l = Math.min(e, n) / 2, d = l * 0.4, p = [];
      for (let b = 0; b < 10; b++) {
        const g = Math.PI / 5 * b - Math.PI / 2, h = b % 2 === 0 ? l : d;
        p.push(`${o + h * Math.cos(g)},${r + h * Math.sin(g)}`);
      }
      return p.join(" ");
    }
    default:
      return "";
  }
}
function kn(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [r, l] = t[o], [d, p] = t[o + 1];
    e += ` Q ${r} ${l} ${(r + d) / 2} ${(l + p) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function mt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function Mn(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], o = (r, l) => {
    r.childNodes.forEach((d) => {
      if (d.nodeType === Node.TEXT_NODE) {
        const h = d.textContent ?? "";
        h && n[n.length - 1].push({ text: h, ...l });
        return;
      }
      if (d.nodeType !== Node.ELEMENT_NODE) return;
      const p = d;
      if (p.tagName === "BR") {
        n.push([]);
        return;
      }
      const b = { bold: l.bold || p.tagName === "B" || p.tagName === "STRONG", italic: l.italic || p.tagName === "I" || p.tagName === "EM", underline: l.underline || p.tagName === "U" }, g = p.tagName === "DIV" || p.tagName === "P" || p.tagName === "LI";
      g && n[n.length - 1].length > 0 && n.push([]), o(p, b), g && n.push([]);
    });
  };
  return o(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((r) => r.length > 0);
}
function Dt(t) {
  return t.html ? nn(t.html) : t.text ? mt(t.text).replace(/\n/g, "<br>") : "";
}
function tn(t) {
  if (t)
    try {
      return Qn(t);
    } catch {
      return;
    }
}
function on(t) {
  try {
    return qn(t);
  } catch {
    return null;
  }
}
function Ot(t) {
  return t.html ? Mn(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const Lt = 12;
function pt(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function dt(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function et(t) {
  const e = t.rotation ?? 0, n = pt(t);
  if (!e) return n;
  const o = dt(t), r = Math.cos(e), l = Math.sin(e), d = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([g, h]) => {
    const i = g - o.x, u = h - o.y;
    return [o.x + i * r - u * l, o.y + i * l + u * r];
  }), p = d.map((g) => g[0]), b = d.map((g) => g[1]);
  return { minX: Math.min(...p), minY: Math.min(...b), maxX: Math.max(...p), maxY: Math.max(...b) };
}
function Xn(t, e, n) {
  const o = t.rotation ?? 0;
  if (!o) return { x: e, y: n };
  const r = dt(t), l = Math.cos(-o), d = Math.sin(-o), p = e - r.x, b = n - r.y;
  return { x: r.x + p * l - b * d, y: r.y + p * d + b * l };
}
function Ft(t, e, n, o, r, l) {
  const d = r - n, p = l - o, b = d * d + p * p, g = b === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * d + (e - o) * p) / b));
  return Math.hypot(t - (n + g * d), e - (o + g * p));
}
function Tt(t, e, n, o, r, l) {
  const d = 8 / o;
  if (t.type === "arrow") {
    const g = xt(t, r ?? /* @__PURE__ */ new Map(), l);
    if (g.routing === "orthogonal" && g.pathPoints && g.pathPoints.length > 1) {
      for (let i = 1; i < g.pathPoints.length; i++) {
        const u = g.pathPoints[i - 1], c = g.pathPoints[i];
        if (Ft(e, n, u.x, u.y, c.x, c.y) <= d) return !0;
      }
      return !1;
    }
    if (g.bend === 0) return Ft(e, n, g.start.x, g.start.y, g.end.x, g.end.y) <= d;
    let h = g.start;
    for (let i = 1; i <= 16; i++) {
      const u = St(i / 16, g.start, g.control, g.end);
      if (Ft(e, n, h.x, h.y, u.x, u.y) <= d) return !0;
      h = u;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    for (let g = 1; g < t.points.length; g++) {
      const [h, i] = t.points[g - 1], [u, c] = t.points[g];
      if (Ft(e, n, h, i, u, c) <= d) return !0;
    }
    return !1;
  }
  const p = Xn(t, e, n), b = pt(t);
  if (t.type === "frame") {
    const g = p.x >= b.minX - d && p.x <= b.maxX + d && p.y >= b.minY - d && p.y <= b.maxY + d && (p.x <= b.minX + d || p.x >= b.maxX - d || p.y <= b.minY + d || p.y >= b.maxY - d), h = p.x >= b.minX - d && p.x <= b.maxX + d && p.y >= b.minY - 28 / o && p.y <= b.minY;
    return g || h;
  }
  return p.x >= b.minX - d && p.x <= b.maxX + d && p.y >= b.minY - d && p.y <= b.maxY + d;
}
function $t(t, e, n) {
  const o = pt(t), r = (o.minX + o.maxX) / 2, l = (o.minY + o.maxY) / 2, d = e - r, p = n - l;
  if (d === 0 && p === 0) return { x: r, y: l, side: "e" };
  const b = (o.maxX - o.minX) / 2, g = (o.maxY - o.minY) / 2, h = b === 0 ? 1 / 0 : Math.abs(b / d), i = g === 0 ? 1 / 0 : Math.abs(g / p);
  return h <= i ? { x: r + d * h, y: l + p * h, side: d >= 0 ? "e" : "w" } : { x: r + d * i, y: l + p * i, side: p >= 0 ? "s" : "n" };
}
function Yn(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([e.id, n, o]);
  return t.filter((l) => !r.has(l.id)).map((l) => {
    const d = et(l);
    return { minX: d.minX - Lt, minY: d.minY - Lt, maxX: d.maxX + Lt, maxY: d.maxY + Lt };
  }).filter((l) => l.maxX > l.minX && l.maxY > l.minY);
}
function xt(t, e, n = []) {
  const o = t.fromId ? e.get(t.fromId) : void 0, r = t.toId ? e.get(t.toId) : void 0;
  let l = { x: t.x, y: t.y }, d = { x: t.x + t.w, y: t.y + t.h };
  if (o && r) {
    const v = dt(o), a = dt(r);
    l = $t(o, a.x, a.y), d = $t(r, v.x, v.y);
  } else o ? l = $t(o, d.x, d.y) : r && (d = $t(r, l.x, l.y));
  const p = (l.x + d.x) / 2, b = (l.y + d.y) / 2, g = t.bend ?? 0;
  let h = { x: p, y: b };
  if (g !== 0) {
    const v = d.x - l.x, a = d.y - l.y, X = Math.hypot(v, a) || 1;
    h = { x: p + -a / X * g, y: b + v / X * g };
  }
  const i = !!(o || r), u = t.routing ?? (i ? "orthogonal" : g !== 0 ? "curved" : "straight");
  if (u !== "orthogonal") return { start: l, end: d, control: h, bend: g, routing: u };
  const c = Yn(n, t, o == null ? void 0 : o.id, r == null ? void 0 : r.id);
  return {
    start: l,
    end: d,
    control: h,
    bend: g,
    routing: u,
    pathPoints: wn(zn(l, d, c, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function St(t, e, n, o) {
  const r = 1 - t;
  return { x: r * r * e.x + 2 * r * t * n.x + t * t * o.x, y: r * r * e.y + 2 * r * t * n.y + t * t * o.y };
}
function Sn(t, e, n, o, r) {
  const l = [];
  let d = 0;
  for (const p of t) {
    if (p.type !== "draw" || !p.points) {
      if (Tt(p, e, n, r)) continue;
      l.push(p);
      continue;
    }
    const b = [];
    let g = [];
    for (const [i, u] of p.points)
      Math.hypot(i - e, u - n) <= o / r ? (g.length > 1 && b.push(g), g = []) : g.push([i, u]);
    if (g.length > 1 && b.push(g), b.length === 0) continue;
    const h = pt(p);
    b.forEach((i) => l.push({ ...p, id: `${p.id}-e${d++}`, points: i, x: h.minX, y: h.minY, w: h.maxX - h.minX, h: h.maxY - h.minY }));
  }
  return l;
}
function ze(t, e, n) {
  const o = 6 / n;
  let r = null, l = null;
  const d = [], p = [t.minX, (t.minX + t.maxX) / 2, t.maxX], b = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const g of e) {
    const h = et(g), i = [h.minX, (h.minX + h.maxX) / 2, h.maxX], u = [h.minY, (h.minY + h.maxY) / 2, h.maxY];
    for (const c of p) for (const v of i) {
      const a = v - c;
      Math.abs(a) <= o && (!r || Math.abs(a) < Math.abs(r.delta)) && (r = { delta: a, at: v });
    }
    for (const c of b) for (const v of u) {
      const a = v - c;
      Math.abs(a) <= o && (!l || Math.abs(a) < Math.abs(l.delta)) && (l = { delta: a, at: v });
    }
  }
  return r && d.push({ x1: r.at, y1: t.minY - 1e3, x2: r.at, y2: t.maxY + 1e3 }), l && d.push({ x1: t.minX - 1e3, y1: l.at, x2: t.maxX + 1e3, y2: l.at }), { dx: (r == null ? void 0 : r.delta) ?? 0, dy: (l == null ? void 0 : l.delta) ?? 0, guides: d };
}
const ke = 14;
function Me({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: o,
  camera: r,
  interaction: l,
  eraserPos: d,
  guides: p,
  marquee: b,
  strokeColorOf: g
}) {
  return /* @__PURE__ */ C("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ j("g", { transform: `scale(${r.z}) translate(${-r.x}, ${-r.y})`, children: [
    t.map((h) => {
      if (h.type === "draw" && h.points)
        return /* @__PURE__ */ C(
          "path",
          {
            "data-canvas-vector-shape-id": h.id,
            "data-canvas-vector-shape-type": "draw",
            d: kn(h.points),
            fill: "none",
            stroke: e.has(h.id) ? _.blue : g(h),
            strokeWidth: 3 / r.z,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          h.id
        );
      if (h.type !== "arrow") return null;
      const i = e.has(h.id) ? _.blue : g(h), u = xt(h, n, o), c = 14 / r.z, v = 5 / r.z, a = u.routing === "orthogonal" && u.pathPoints ? u.pathPoints : null, X = a && a.length > 1;
      let x, m;
      if (X)
        x = qt(a), m = be(a);
      else if (u.routing === "curved") {
        x = `M ${u.start.x} ${u.start.y} Q ${u.control.x} ${u.control.y} ${u.end.x} ${u.end.y}`;
        const $ = St(0.94, u.start, u.control, u.end);
        m = Math.atan2(u.end.y - $.y, u.end.x - $.x);
      } else
        x = `M ${u.start.x} ${u.start.y} L ${u.end.x} ${u.end.y}`, m = Math.atan2(u.end.y - u.start.y, u.end.x - u.start.x);
      const z = X && a.length >= 2 ? Zt(a[0], a[1]) : u.routing === "orthogonal" && u.start.side ? u.start.side === "e" ? 0 : u.start.side === "w" ? Math.PI : u.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Zt(u.start, u.end), s = h.strokeStyle === "dashed" ? `${8 / r.z} ${5 / r.z}` : h.strokeStyle === "dotted" ? `${1.5 / r.z} ${4 / r.z}` : void 0, f = ($, Y, w, y) => $ === "dot" ? /* @__PURE__ */ C("circle", { cx: Y, cy: w, r: v, fill: i }) : $ === "none" ? null : /* @__PURE__ */ C(
        "polygon",
        {
          points: `${Y},${w} ${Y - c * Math.cos(y - 0.4)},${w - c * Math.sin(y - 0.4)} ${Y - c * Math.cos(y + 0.4)},${w - c * Math.sin(y + 0.4)}`,
          fill: i
        }
      );
      return /* @__PURE__ */ j("g", { "data-canvas-vector-shape-id": h.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": u.routing, children: [
        /* @__PURE__ */ C("path", { d: x, fill: "none", stroke: i, strokeWidth: 2.5 / r.z, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: s }),
        f(h.arrowEnd ?? "arrow", u.end.x, u.end.y, m),
        f(h.arrowStart ?? "none", u.start.x, u.start.y, z + Math.PI)
      ] }, h.id);
    }),
    l.kind === "connect" && l.fromId !== void 0 && l.toX !== void 0 && l.toY !== void 0 && (() => {
      const h = n.get(l.fromId);
      if (!h) return null;
      const i = $t(h, l.toX, l.toY), u = l.hoverId ? n.get(l.hoverId) : null, c = u ? $t(u, i.x, i.y) : { x: l.toX, y: l.toY }, v = u ? zn(i, c, Yn(o, { id: "__preview" }, h.id, u.id)) : [i, c];
      return /* @__PURE__ */ j("g", { children: [
        /* @__PURE__ */ C("path", { d: qt(v), stroke: _.blue, strokeWidth: 2 / r.z, strokeDasharray: `${5 / r.z} ${4 / r.z}` }),
        u ? /* @__PURE__ */ C("rect", { x: et(u).minX - 3 / r.z, y: et(u).minY - 3 / r.z, width: et(u).maxX - et(u).minX + 6 / r.z, height: et(u).maxY - et(u).minY + 6 / r.z, fill: "none", stroke: _.blue, strokeWidth: 2 / r.z, rx: 6 / r.z }) : /* @__PURE__ */ C("circle", { cx: c.x, cy: c.y, r: 5 / r.z, fill: _.blue })
      ] });
    })(),
    d && /* @__PURE__ */ C("circle", { cx: d.x, cy: d.y, r: ke / r.z, fill: _.roseSoft, stroke: _.rose, strokeWidth: 1 / r.z }),
    p.map((h, i) => /* @__PURE__ */ C("line", { x1: h.x1, y1: h.y1, x2: h.x2, y2: h.y2, stroke: _.pink, strokeWidth: 1 / r.z, strokeDasharray: `${4 / r.z} ${4 / r.z}` }, `guide-${i}`)),
    b && /* @__PURE__ */ C("rect", { x: Math.min(b.startX, b.curX), y: Math.min(b.startY, b.curY), width: Math.abs(b.curX - b.startX), height: Math.abs(b.curY - b.startY), fill: _.marqueeFill, stroke: _.blue, strokeWidth: 1 / r.z })
  ] }) });
}
const Xe = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], Ye = /* @__PURE__ */ new Set([
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
]), Se = [
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
function _t(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function Cn(t) {
  return Ye.has(t.trim().toLowerCase());
}
function Nn(t) {
  const e = _t(t);
  return e ? Cn(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function Ce(t) {
  return _t(t).split(",").map((e) => e.trim()).filter(Boolean).map(Nn).filter(Boolean).join(", ");
}
function Pn(t) {
  return _t(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Yt(t) {
  return t.split(",").map((e) => _t(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !Cn(e));
}
const At = Array.from(/* @__PURE__ */ new Set([
  ...Se,
  ...Yt(ut.sans.stack),
  ...Yt(ut.serif.stack),
  ...Yt(ut.mono.stack),
  ...Yt(ut.gothic.stack),
  ...Yt(ut.korean.stack)
]));
function Ne() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return At;
  const t = At.filter((e) => {
    const n = Nn(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : At;
}
const Pe = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, Ie = 24, Ee = 28, In = 720;
function at(t) {
  return t.fontSize ?? Pe[t.type] ?? 14;
}
function ct(t) {
  var e;
  if (!t.fontFamily) return ut.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = Pn(Zn(t.customFontFamily ?? ""));
    } catch {
    }
    return Ce(n) || ut.sans.stack;
  }
  return ((e = ut[t.fontFamily]) == null ? void 0 : e.stack) ?? ut.sans.stack;
}
function lt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function Le(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function Fe(t) {
  var e, n, o;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((o = t.html) != null && o.includes("<ol>")) return "number";
}
function Ae(t, e) {
  return {
    w: Math.min(In, Math.max(Ie, Math.ceil(t))),
    h: Math.max(Ee, Math.ceil(e))
  };
}
function Te(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = nn(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${In}px`,
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
    fontSize: `${at(e)}px`,
    fontFamily: ct(e)
  }), document.body.appendChild(n);
  const o = n.getBoundingClientRect();
  return n.remove(), Ae(o.width, o.height);
}
const De = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), Oe = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function _e({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: o,
  shapeById: r,
  allShapes: l,
  peerCursors: d,
  isDarkMode: p,
  renderEditor: b,
  renderShapeBody: g,
  setEditingId: h,
  onBendHandleDown: i,
  onOrthogonalSegmentHandleDown: u,
  onResizeHandleDown: c,
  onRotateHandleDown: v,
  onConnectHandleDown: a,
  onArrowEndpointDown: X
}) {
  return /* @__PURE__ */ j(gt, { children: [
    /* @__PURE__ */ C("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((x) => {
      if (x.type === "draw") return null;
      if (x.type === "arrow") {
        const s = xt(x, r, l), f = s.routing === "orthogonal" && s.pathPoints ? en(s.pathPoints) : s.routing === "curved" ? St(0.5, s.start, s.control, s.end) : { x: (s.start.x + s.end.x) / 2, y: (s.start.y + s.end.y) / 2 }, $ = n === x.id, Y = Dt(x), w = e.has(x.id), y = Ot(x).trim(), k = Y || (w ? "관계 입력" : "");
        return !k && !$ ? null : /* @__PURE__ */ C(xn.Fragment, { children: /* @__PURE__ */ C("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: f.x - 90, top: f.y - 18, width: 180, height: 36 }, onDoubleClick: (M) => {
          M.stopPropagation(), h(x.id);
        }, children: (k || $) && /* @__PURE__ */ C(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": y ? `관계 설명: ${y}` : "관계 설명 입력",
            title: $ ? void 0 : y ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${p ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: at(x),
              fontFamily: ct(x),
              maxWidth: "100%",
              minWidth: $ ? 120 / o.z : void 0,
              minHeight: $ ? 28 / o.z : void 0,
              color: x.textColor
            },
            children: $ ? b("text-center whitespace-nowrap") : /* @__PURE__ */ C("span", { dangerouslySetInnerHTML: { __html: k } }, "canvas-view")
          }
        ) }) }, x.id);
      }
      const m = e.has(x.id), z = pt(x);
      return /* @__PURE__ */ j(
        "div",
        {
          "data-canvas-shape-id": x.id,
          "data-canvas-shape-type": x.type,
          "data-canvas-selected": m ? "true" : void 0,
          "data-canvas-text-align": lt(x),
          "data-canvas-text-color": x.textColor,
          "data-canvas-font-size": at(x),
          "data-canvas-font-family": x.fontFamily === "custom" ? x.customFontFamily ?? "custom" : x.fontFamily ?? "sans",
          "data-canvas-manual-size": x.manualSize ? "true" : void 0,
          "data-canvas-group-id": x.groupId,
          "data-canvas-list-kind": Fe(x),
          "data-canvas-x": x.x,
          "data-canvas-y": x.y,
          "data-canvas-width": x.w,
          "data-canvas-height": x.h,
          className: "absolute",
          style: { left: z.minX, top: z.minY, width: z.maxX - z.minX, height: z.maxY - z.minY, transform: x.rotation ? `rotate(${x.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (s) => {
            s.stopPropagation(), De.has(x.type) && h(x.id);
          },
          children: [
            g(x),
            m && /* @__PURE__ */ j(gt, { children: [
              /* @__PURE__ */ C("div", { className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${_.blue}` } }),
              e.size === 1 && /* @__PURE__ */ j(gt, { children: [
                ["nw", "ne", "sw", "se"].map((s) => /* @__PURE__ */ C("div", { "data-canvas-resize-handle": s, onPointerDown: (f) => c(f, x, s), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${s}-resize`, left: s.includes("w") ? -5 / o.z : void 0, right: s.includes("e") ? -5 / o.z : void 0, top: s.includes("n") ? -5 / o.z : void 0, bottom: s.includes("s") ? -5 / o.z : void 0 } }, s)),
                /* @__PURE__ */ C("div", { onPointerDown: (s) => v(s, x), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                Oe.has(x.type) && ["n", "s", "w", "e"].map((s) => /* @__PURE__ */ C("div", { onPointerDown: (f) => a(f, x), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...s === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : s === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : s === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${s}`))
              ] })
            ] })
          ]
        },
        x.id
      );
    }) }),
    e.size === 1 && l.filter((x) => x.type === "arrow" && e.has(x.id)).map((x) => {
      const m = xt(x, r, l), z = (s, f) => ({
        left: (s.x - o.x) * o.z - f / 2,
        top: (s.y - o.y) * o.z - f / 2
      });
      return /* @__PURE__ */ j(xn.Fragment, { children: [
        m.routing === "orthogonal" && m.pathPoints && m.pathPoints.length > 2 ? m.pathPoints.slice(0, -1).map((s, f) => {
          var w;
          const $ = (w = m.pathPoints) == null ? void 0 : w[f + 1];
          if (!$) return null;
          const Y = { x: (s.x + $.x) / 2, y: (s.y + $.y) / 2 };
          return /* @__PURE__ */ C("div", { "data-canvas-arrow-segment-handle": f, onPointerDown: (y) => u(y, x, f), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...z(Y, 12), cursor: s.x === $.x ? "ew-resize" : "ns-resize" } }, `segment-${f}`);
        }) : m.routing === "curved" && /* @__PURE__ */ C("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (s) => i(s, x), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (m.start.x + m.end.x) / 2 * o.z - o.x * o.z - 5, top: (m.start.y + m.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map((s) => {
          const f = s === "start" ? m.start : m.end;
          return /* @__PURE__ */ C("div", { "data-canvas-arrow-endpoint": s, onPointerDown: ($) => X($, x, s), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...z(f, 12), cursor: "grab" } }, s);
        })
      ] }, `arrow-handles-${x.id}`);
    }),
    l.filter((x) => x.type === "arrow" && e.has(x.id)).map((x) => {
      const m = et(x);
      return /* @__PURE__ */ C("div", { className: "absolute pointer-events-none border-2 border-blue-600/60 rounded", style: { left: (m.minX - o.x) * o.z - 4, top: (m.minY - o.y) * o.z - 4, width: (m.maxX - m.minX) * o.z + 8, height: (m.maxY - m.minY) * o.z + 8 } }, `sel-${x.id}`);
    }),
    d == null ? void 0 : d.map((x) => /* @__PURE__ */ j("div", { className: "absolute pointer-events-none z-40", style: { left: (x.x - o.x) * o.z, top: (x.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ C("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ C("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: x.color, stroke: _.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ C("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: x.color }, children: x.name })
    ] }, x.id))
  ] });
}
function Be({
  shape: t,
  shapes: e,
  camera: n,
  canvasSize: o,
  isDarkMode: r,
  editing: l,
  showPalette: d,
  installedFontFamilies: p,
  setShowPalette: b,
  setActiveColor: g,
  patchSelected: h,
  applyFormat: i,
  applyList: u,
  applyCustomFontFamily: c
}) {
  var G, nt;
  const v = r ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", a = t.type === "draw", X = a ? t.color ? st[t.color].border : _.ink : wt(t), x = tt(null), [m, z] = it({ width: 380, height: 260 });
  Gt(() => {
    const S = x.current;
    if (!S) return;
    const F = () => {
      const q = Math.max(1, Math.ceil(S.getBoundingClientRect().width)), J = Math.max(1, Math.ceil(S.getBoundingClientRect().height));
      z((ot) => ot.width === q && ot.height === J ? ot : { width: q, height: J });
    };
    if (F(), typeof ResizeObserver > "u") return;
    const V = new ResizeObserver(F);
    return V.observe(S), () => V.disconnect();
  }, [l, p.length, r, t, d]);
  const s = m.width, f = m.height, $ = et(t), Y = ($.minX - n.x) * n.z, w = ($.minY - n.y) * n.z, y = ($.maxX - n.x) * n.z, k = ($.maxY - n.y) * n.z, M = Math.max(8, o.width - s - 8), N = Math.max(8, o.height - f - 8), P = (S, F) => ({ left: Math.min(Math.max(8, S), M), top: Math.min(Math.max(8, F), N) }), E = [
    P((Y + y) / 2 - s / 2, w - f - 12),
    P((Y + y) / 2 - s / 2, k + 12),
    P((o.width - s) / 2, 12),
    P(Y - s - 12, w + (k - w - f) / 2),
    P(y + 12, w + (k - w - f) / 2)
  ], O = e.map((S) => {
    const F = et(S);
    return { left: (F.minX - n.x) * n.z, top: (F.minY - n.y) * n.z, right: (F.maxX - n.x) * n.z, bottom: (F.maxY - n.y) * n.z };
  });
  if (t.type === "arrow") {
    const S = xt(t, new Map(e.map((J) => [J.id, J])), e), F = S.routing === "orthogonal" && S.pathPoints ? en(S.pathPoints) : { x: (S.start.x + S.end.x) / 2, y: (S.start.y + S.end.y) / 2 }, V = 180 * n.z, q = 36 * n.z;
    O.push({
      left: (F.x - n.x) * n.z - V / 2,
      top: (F.y - n.y) * n.z - q / 2,
      right: (F.x - n.x) * n.z + V / 2,
      bottom: (F.y - n.y) * n.z + q / 2
    });
  }
  const I = E[0], T = (S, F) => {
    const V = Math.max(0, Math.min(S.left + s, F.right) - Math.max(S.left, F.left)), q = Math.max(0, Math.min(S.top + f, F.bottom) - Math.max(S.top, F.top));
    return V * q;
  }, L = ((G = E.map((S) => ({
    candidate: S,
    overlap: O.reduce((F, V) => F + T(S, V), 0),
    distance: Math.hypot(S.left - I.left, S.top - I.top)
  })).sort((S, F) => S.overlap - F.overlap || S.distance - F.distance)[0]) == null ? void 0 : G.candidate) ?? I, R = at(t), D = t.type === "arrow" && !!((nt = t.orthogonalWaypoints) != null && nt.length), B = t.type === "arrow" ? t.arrowStart ?? "none" : "none", U = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", Q = (S, F, V, q, J = q) => /* @__PURE__ */ C("button", { type: "button", title: q, "aria-label": J, onClick: V, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${F ? "bg-blue-600 text-white" : v}`, children: S }), K = (S) => /* @__PURE__ */ C("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: S });
  return /* @__PURE__ */ j("div", { ref: x, "data-canvas-inspector": a ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${r ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: L.left, top: L.top }, onPointerDown: (S) => {
    S.stopPropagation();
    const F = S.target instanceof Element ? S.target : null;
    F != null && F.closest("input, select, textarea") || S.preventDefault();
  }, onClick: (S) => S.stopPropagation(), children: [
    /* @__PURE__ */ j("div", { className: "relative flex items-center gap-1.5 pointer-events-none", children: [
      /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: a ? "그리기" : "색상" }),
      /* @__PURE__ */ C("button", { type: "button", title: a ? "그리기 색상 팔레트" : "색상 팔레트", "aria-label": a ? "그리기 색상" : "도형 색상", onClick: () => b((S) => !S), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${r ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ C(ee, { className: "w-4 h-4", style: { color: X } }) }),
      d && /* @__PURE__ */ j("div", { className: `pointer-events-auto absolute left-0 top-10 z-50 flex items-center gap-1.5 p-2 rounded-xl border shadow-xl ${r ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        Jn.map((S) => /* @__PURE__ */ C("button", { type: "button", title: st[S].label, "aria-label": `색 ${st[S].label}`, onClick: () => {
          g(S), h({ color: S, fillColor: void 0 }), b(!1);
        }, className: "w-5 h-5 rounded-full border", style: { background: st[S].bg, borderColor: st[S].border, outline: t.color === S && !t.fillColor ? `2px solid ${_.blue}` : void 0, outlineOffset: 1 } }, S)),
        !a && /* @__PURE__ */ C("label", { title: "배경 색 (자유 선택)", className: "w-5 h-5 rounded-full border relative overflow-hidden cursor-pointer flex items-center justify-center", style: { background: t.fillColor ?? Jt(t), outline: t.fillColor ? `2px solid ${_.blue}` : void 0, outlineOffset: 1 }, children: /* @__PURE__ */ C("input", { type: "color", value: t.fillColor ?? Jt(t), onChange: (S) => {
          h({ fillColor: S.target.value }), b(!1);
        }, className: "absolute inset-0 opacity-0 cursor-pointer" }) })
      ] })
    ] }),
    !a && /* @__PURE__ */ j(gt, { children: [
      /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ j("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: wt(t), color: _.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ C("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ C("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? wt(t), onChange: (S) => h({ textColor: S.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ j("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${r ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ C("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ C("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => h({ fontSize: Math.max(8, R - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ C(oe, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ C("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: R }),
          /* @__PURE__ */ C("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => h({ fontSize: Math.min(96, R + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ C(re, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ j("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${r ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ C("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (S) => {
            const F = Le(S.target.value);
            h(F === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: F, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${r ? "text-slate-200" : "text-slate-700"}`, children: Xe.map((S) => /* @__PURE__ */ C("option", { value: S, className: r ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: ut[S].label }, S)) }),
          /* @__PURE__ */ C(ie, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ j(gt, { children: [
          /* @__PURE__ */ C("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (S) => c(S.target.value), onChange: (S) => S.currentTarget.value && c(S.currentTarget.value), onKeyDown: (S) => {
            S.key === "Enter" && (S.preventDefault(), c(S.currentTarget.value));
          }, onDoubleClick: (S) => S.stopPropagation(), onPointerDown: (S) => S.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${r ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ C("datalist", { id: `canvas-font-families-${t.id}`, children: p.map((S) => /* @__PURE__ */ C("option", { value: S }, S)) })
        ] })
      ] }),
      /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${r ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ C("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", ae, "왼쪽 정렬"], ["center", ce, "가운데 정렬"], ["right", se, "오른쪽 정렬"]].map(([S, F, V]) => /* @__PURE__ */ C("button", { type: "button", "aria-label": V, title: V, onClick: () => h({ textAlign: S }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${lt(t) === S ? "bg-blue-600 text-white shadow-sm" : v}`, children: /* @__PURE__ */ C(F, { className: "w-4 h-4" }) }, S)) }),
        l && /* @__PURE__ */ j(gt, { children: [
          /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ C("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", le, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", de, "번호 목록"]].map(([S, F, V]) => /* @__PURE__ */ C("button", { type: "button", onClick: () => u(S), "aria-label": V, title: V, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: F ? /* @__PURE__ */ C(F, { className: "w-4 h-4" }) : /* @__PURE__ */ C("span", { className: "text-base leading-none", children: "–" }) }, S)) }),
          /* @__PURE__ */ C("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: ue, label: "굵게" }, { cmd: "italic", Icon: xe, label: "기울임" }, { cmd: "underline", Icon: fe, label: "밑줄" }].map(({ cmd: S, Icon: F, label: V }) => /* @__PURE__ */ C("button", { type: "button", onClick: () => i(S), "aria-label": V, title: V, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ C(F, { className: "w-4 h-4" }) }, S)) })
        ] })
      ] }),
      (t.type === "card" || t.type === "arrow") && /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${r ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ j(gt, { children: [
          /* @__PURE__ */ C("div", { className: `w-px h-6 ${r ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ C("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (S) => S.stopPropagation(), onChange: (S) => h({ category: S.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${r ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            K("경로"),
            Q("직선", (t.routing ?? "straight") === "straight", () => h({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            Q("직각", t.routing === "orthogonal", () => h({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            Q("곡선", (t.routing ?? "") === "curved", () => h({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            D && Q("자동", !1, () => h({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            K("선"),
            Q("—", (t.strokeStyle ?? "solid") === "solid", () => h({ strokeStyle: "solid" }), "실선"),
            Q("- -", t.strokeStyle === "dashed", () => h({ strokeStyle: "dashed" }), "파선"),
            Q("···", t.strokeStyle === "dotted", () => h({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            K("시작"),
            Q(B === "none" ? "○" : B === "dot" ? "●" : "◀", B !== "none", () => h({ arrowStart: B === "none" ? "arrow" : B === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${B === "none" ? "없음" : B === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            K("끝"),
            Q(U === "none" ? "○" : U === "dot" ? "●" : "▶", U !== "none", () => h({ arrowEnd: U === "arrow" ? "dot" : U === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${U === "none" ? "없음" : U === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] })
    ] })
  ] });
}
function He({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: o,
  commitEditorHtml: r,
  onEditorKeyDown: l,
  setShapes: d,
  onDirty: p
}) {
  const b = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", g = (i, u) => /* @__PURE__ */ C(
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
      onPointerDown: (c) => c.stopPropagation(),
      onDoubleClick: (c) => c.stopPropagation(),
      onKeyDown: l,
      className: `${b} ${i}`,
      style: u
    },
    "canvas-editor"
  );
  return { renderEditor: g, renderShapeBody: (i) => {
    const u = st[i.color ?? "blue"], c = e === i.id, v = Dt(i);
    if (i.type === "frame")
      return /* @__PURE__ */ C(
        "div",
        {
          className: "w-full h-full rounded",
          style: { border: `${2 / t.z}px solid ${n ? _.slate600 : _.slate400}` },
          children: /* @__PURE__ */ C(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? _.slate400 : _.muted
              },
              children: c ? g("", { fontSize: 13 / t.z }) : Ot(i) || "프레임"
            }
          )
        }
      );
    if (i.type === "note")
      return /* @__PURE__ */ C(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: u.bg, borderTop: `6px solid ${u.border}`, color: u.text },
          children: c ? g("font-medium", { color: wt(i), fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }) : v ? /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: wt(i), fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: wt(i), fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }, children: /* @__PURE__ */ C("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (i.type === "card") {
      const s = i.cardStyle === "glass";
      return /* @__PURE__ */ j(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: s ? _.glassFill : _.slateCard,
            backdropFilter: s ? "blur(12px)" : void 0,
            WebkitBackdropFilter: s ? "blur(12px)" : void 0,
            border: `1px solid ${s ? _.glassBorder : _.darkBorder}`,
            boxShadow: s ? _.glassShadow : _.cardShadow
          },
          children: [
            /* @__PURE__ */ j(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (f) => f.stopPropagation(),
                onDoubleClick: (f) => f.stopPropagation(),
                onBlur: (f) => {
                  const Y = (f.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  d((w) => w.map((y) => y.id === i.id ? { ...y, category: Y } : y)), p();
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
            c ? g("flex-1 font-medium", { color: i.textColor ?? _.white, fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }) : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: i.textColor ?? _.white, fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view"),
            /* @__PURE__ */ j("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              i.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (i.type === "text") {
      const s = n ? "text-slate-100" : "text-slate-900", f = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${s}`,
        style: { color: i.textColor, fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }
      };
      return c ? g(`font-medium ${s}`, f.style) : v ? /* @__PURE__ */ C(
        "div",
        {
          "data-canvas-text-view": !0,
          ...f,
          dangerouslySetInnerHTML: { __html: v }
        },
        "canvas-view"
      ) : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, ...f, children: /* @__PURE__ */ C("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (i.type === "image") {
      const s = tn(i.src);
      return s ? /* @__PURE__ */ C(
        "img",
        {
          src: s,
          alt: i.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const a = Jt(i), X = we(i), x = wt(i);
    if (i.type === "triangle" || i.type === "diamond" || i.type === "hexagon" || i.type === "star")
      return /* @__PURE__ */ j("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ C("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${i.w} ${i.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ C("polygon", { points: $e(i.type, i.w, i.h), fill: a, stroke: X, strokeWidth: 2, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ C("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: x }, children: c ? g("font-medium", { color: x, fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }) : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") })
      ] });
    const z = tn(i.src);
    return /* @__PURE__ */ C(
      "div",
      {
        className: `w-full h-full flex items-center justify-center p-3 ${i.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: a, border: `2px solid ${X}`, color: x },
        children: c ? g("font-medium", { color: x, fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }) : /* @__PURE__ */ j("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }, children: [
          /* @__PURE__ */ C("div", { dangerouslySetInnerHTML: { __html: v } }),
          z && /* @__PURE__ */ C(
            "a",
            {
              href: z,
              target: "_blank",
              rel: "noreferrer",
              onPointerDown: (s) => s.stopPropagation(),
              className: "block mt-1 text-[11px] underline opacity-70",
              children: "파일 열기"
            }
          )
        ] }, "canvas-view")
      }
    );
  } };
}
function We({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: o,
  selected: r,
  editingId: l,
  boardIdentity: d
}) {
  const [p, b] = it({ width: 0, height: 0 });
  ft(() => {
    const v = t.current;
    if (!v) return;
    let a = -1, X = -1;
    const x = (z = v.clientWidth, s = v.clientHeight) => {
      z === a && s === X || (a = z, X = s, b({ width: z, height: s }));
    };
    if (x(), typeof ResizeObserver < "u") {
      const z = new ResizeObserver((s) => {
        var $;
        const f = ($ = s[0]) == null ? void 0 : $.contentRect;
        x((f == null ? void 0 : f.width) ?? v.clientWidth, (f == null ? void 0 : f.height) ?? v.clientHeight);
      });
      return z.observe(v), () => z.disconnect();
    }
    const m = () => x();
    return window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, [d, t]);
  const g = bt(() => new Map(n.map((v) => [v.id, v])), [n]), h = bt(
    () => [...n].sort((v, a) => (v.type === "frame" ? -1 : 0) - (a.type === "frame" ? -1 : 0)),
    [n]
  ), i = bt(() => {
    if (!t.current || p.width <= 0 || p.height <= 0) return null;
    const v = 200 / o.z;
    return {
      minX: o.x - v,
      minY: o.y - v,
      maxX: o.x + p.width / o.z + v,
      maxY: o.y + p.height / o.z + v
    };
  }, [o, t, p]), u = rt((v) => {
    if (!i) return !1;
    if (v.id === l || r.has(v.id)) return !0;
    if (v.type === "arrow") {
      const X = xt(v, g, e.current), m = (X.routing === "orthogonal" ? X.pathPoints : null) ?? [X.start, X.end], z = Math.min(...m.map((Y) => Y.x)), s = Math.max(...m.map((Y) => Y.x)), f = Math.min(...m.map((Y) => Y.y)), $ = Math.max(...m.map((Y) => Y.y));
      return s >= i.minX && z <= i.maxX && $ >= i.minY && f <= i.maxY;
    }
    const a = et(v);
    return a.maxX >= i.minX && a.minX <= i.maxX && a.maxY >= i.minY && a.minY <= i.maxY;
  }, [l, r, g, e, i]), c = bt(
    () => h.filter(u),
    [u, h]
  );
  return { shapeById: g, visiblePaintOrder: c };
}
function je({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: o,
  onDirty: r,
  patchSelected: l
}) {
  const d = rt(() => {
    const c = t.current;
    if (!c || !e) return;
    let v;
    try {
      v = nn(c.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const a = c.scrollHeight;
    n((X) => X.map((x) => {
      if (x.id !== e) return x;
      const m = { ...x, html: v, text: void 0 };
      if (x.type === "text")
        return x.manualSize ? m : { ...m, ...Te(c, x) };
      if (x.type === "arrow") return m;
      const z = x.type === "note" ? 32 : x.type === "card" ? 96 : (
        // category header + type footer
        (x.type === "frame", 24)
      ), s = Math.max(x.h, a + z);
      return { ...m, h: s };
    })), r();
  }, [e, r]), p = (c) => {
    var v;
    (v = t.current) == null || v.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(c), d();
  }, b = () => {
    var X;
    const c = (X = window.getSelection()) == null ? void 0 : X.anchorNode, v = c instanceof Element ? c : c == null ? void 0 : c.parentElement, a = v == null ? void 0 : v.closest("ul, ol");
    return a instanceof HTMLElement ? a : null;
  }, g = (c, v, a) => {
    const X = document.createElement(v);
    for (; c.firstChild; ) X.append(c.firstChild);
    return c.replaceWith(X), X;
  }, h = (c) => {
    const v = t.current;
    if (!v) return;
    v.focus();
    const a = b();
    if (c === "number")
      if ((a == null ? void 0 : a.tagName) === "OL")
        a.removeAttribute("data-list-style");
      else if ((a == null ? void 0 : a.tagName) === "UL")
        g(a, "ol");
      else {
        document.execCommand("insertOrderedList");
        const X = b();
        X == null || X.removeAttribute("data-list-style");
      }
    else if ((a == null ? void 0 : a.tagName) === "UL") {
      const X = a.dataset.listStyle;
      c === X ? document.execCommand("insertUnorderedList") : a.dataset.listStyle = c;
    } else {
      (a == null ? void 0 : a.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const X = b();
      X && (X.dataset.listStyle = c);
    }
    d();
  };
  return { commitEditorHtml: d, applyFormat: p, applyList: h, onEditorKeyDown: (c) => {
    if (c.key === "Tab") {
      c.preventDefault(), document.execCommand(c.shiftKey ? "outdent" : "indent"), d();
      return;
    }
    if (c.key === " ") {
      const v = window.getSelection();
      if (v && v.isCollapsed && v.anchorNode) {
        const a = v.anchorNode, X = a.textContent || "", x = v.anchorOffset, m = X.slice(0, x).trim();
        if (!b()) {
          if (m === "-" || m === "–") {
            c.preventDefault(), a.textContent = X.slice(x), h("dash");
            return;
          }
          if (m === "*") {
            c.preventDefault(), a.textContent = X.slice(x), h("bullet");
            return;
          }
          if (m === "1.") {
            c.preventDefault(), a.textContent = X.slice(x), h("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (c) => {
    const v = Pn(c);
    if (!v) {
      l({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    l({
      fontFamily: "custom",
      customFontFamily: v
    });
  } };
}
function Ke({
  boardIdentity: t,
  tool: e,
  controlledShapes: n,
  onShapesChange: o,
  onDirty: r
}) {
  const l = tt(null), d = tt(null), [p, b] = it([]), g = n !== void 0 && o !== void 0, h = tt(/* @__PURE__ */ new WeakMap()), i = bt(() => {
    const A = h.current;
    return (g ? n ?? [] : p).map((W) => {
      let H = A.get(W);
      return H === void 0 && (H = on(W), A.set(W, H)), H;
    }).filter((W) => W !== null);
  }, [g, n, p]), u = tt(o);
  u.current = o;
  const c = rt((A) => {
    const W = u.current;
    if (!W) {
      b(A);
      return;
    }
    W(typeof A == "function" ? A : () => A);
  }, []), [v, a] = it({ x: -400, y: -300, z: 1 }), [X, x] = it(/* @__PURE__ */ new Set()), [m, z] = it(null), [s, f] = it({ kind: "none" }), [$, Y] = it(!1), [w, y] = it([]), [k, M] = it(""), [N, P] = it(!1), [E, O] = it(null), [I, T] = it("blue"), [L, R] = it(At), D = tt(I);
  D.current = I;
  const B = tt([]), U = tt([]), Q = tt(null), K = tt(/* @__PURE__ */ new Map()), G = tt(i), nt = tt(v), S = tt(e), F = tt(X), V = tt(m);
  G.current = i, nt.current = v, S.current = e, F.current = X, V.current = m;
  const q = tt({ kind: "none" }), J = rt((A) => {
    q.current = A, f(A);
  }, []), ot = rt((A) => {
    F.current = A, x(A);
  }, []);
  Gt(() => {
    var W;
    const A = /* @__PURE__ */ new Set();
    F.current = A, V.current = null, K.current.clear(), B.current = [], U.current = [], Q.current = null, J({ kind: "none" }), x(A), z(null), Y(!1), y([]), O(null), M(""), (W = l.current) == null || W.focus();
  }, [J, t]), ft(() => {
    let A = !1;
    const W = () => {
      const Z = Ne();
      A || R(Z);
    };
    if (W(), typeof document > "u" || !("fonts" in document)) return;
    const H = () => W();
    return document.fonts.addEventListener("loadingdone", H), () => {
      A = !0, document.fonts.removeEventListener("loadingdone", H);
    };
  }, [t]);
  const Ct = (m ? i.find((A) => A.id === m) : void 0) !== void 0;
  Gt(() => {
    if (!m || !Ct) return;
    const A = () => {
      const H = d.current, Z = G.current.find((Kt) => Kt.id === m);
      if (!H || !Z || (H.dataset.seeded !== m && (H.innerHTML = Dt(Z), H.dataset.seeded = m), document.activeElement === H)) return;
      H.focus();
      const ht = document.createRange();
      ht.selectNodeContents(H), ht.collapse(!1);
      const vt = window.getSelection();
      vt == null || vt.removeAllRanges(), vt == null || vt.addRange(ht);
    };
    A();
    const W = requestAnimationFrame(A);
    return () => cancelAnimationFrame(W);
  }, [m, Ct]);
  const kt = rt((A) => {
    c((W) => {
      const H = typeof A == "function" ? A(W) : A;
      return B.current.push(W), B.current.length > 100 && B.current.shift(), U.current = [], H;
    }), r();
  }, [r]), Bt = rt((A) => A.size === 0 ? !1 : (kt((W) => W.filter((H) => A.has(H.id) ? !1 : H.type !== "arrow" ? !0 : !(H.fromId && A.has(H.fromId)) && !(H.toId && A.has(H.toId)))), ot(/* @__PURE__ */ new Set()), M(`${A.size}개 삭제됨`), !0), [kt, ot]), Ht = rt(() => {
    Q.current = G.current;
  }, []), Wt = rt(() => {
    const A = Q.current;
    Q.current = null, !(!A || A === G.current) && (B.current.push(A), B.current.length > 100 && B.current.shift(), U.current = [], r());
  }, [r]), Mt = rt((A, W) => {
    var ht;
    const H = (ht = l.current) == null ? void 0 : ht.getBoundingClientRect(), Z = nt.current;
    return H ? { x: (A - H.left) / Z.z + Z.x, y: (W - H.top) / Z.z + Z.y } : { x: 0, y: 0 };
  }, []), Nt = rt(() => {
    var H;
    const A = (H = l.current) == null ? void 0 : H.getBoundingClientRect(), W = nt.current;
    return A ? { x: W.x + A.width / 2 / W.z, y: W.y + A.height / 2 / W.z } : { x: 0, y: 0 };
  }, []), jt = rt((A) => {
    const W = new Set(G.current.filter((Z) => A.has(Z.id) && Z.groupId).map((Z) => Z.groupId));
    if (W.size === 0) return A;
    const H = new Set(A);
    for (const Z of G.current) Z.groupId && W.has(Z.groupId) && H.add(Z.id);
    return H;
  }, []);
  return {
    containerRef: l,
    editorRef: d,
    localShapes: p,
    setLocalShapes: b,
    controlled: g,
    shapes: i,
    setShapes: c,
    camera: v,
    setCamera: a,
    cameraRef: nt,
    selected: X,
    setSelected: x,
    selectedRef: F,
    editingId: m,
    setEditingId: z,
    editingIdRef: V,
    interaction: s,
    interactionRef: q,
    applyInteraction: J,
    isSpaceDown: $,
    setIsSpaceDown: Y,
    guides: w,
    setGuides: y,
    announcement: k,
    setAnnouncement: M,
    showInspectorPalette: N,
    setShowInspectorPalette: P,
    eraserPos: E,
    setEraserPos: O,
    activeColor: I,
    setActiveColor: T,
    activeColorRef: D,
    installedFontFamilies: L,
    pointers: K,
    past: B,
    future: U,
    selectNow: ot,
    commit: kt,
    deleteSelection: Bt,
    beginHistory: Ht,
    endHistory: Wt,
    toPage: Mt,
    viewportCentre: Nt,
    expandToGroups: jt,
    toolRef: S,
    shapesRef: G
  };
}
function Ve({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: o,
  maxZoom: r,
  shapes: l,
  selected: d,
  editingId: p,
  textualTypes: b,
  onZoomChange: g,
  onSelectionChange: h,
  onLocalCursor: i,
  toPage: u
}) {
  ft(() => {
    g == null || g(e.z);
  }, [e.z, g]), ft(() => {
    const m = t.current;
    if (!m) return;
    const z = (s) => {
      if (s.preventDefault(), s.ctrlKey || s.metaKey) {
        const f = m.getBoundingClientRect();
        n(($) => {
          const Y = Math.min(r, Math.max(o, $.z * Math.exp(-s.deltaY * 0.01))), w = s.clientX - f.left, y = s.clientY - f.top;
          return { x: $.x + w / $.z - w / Y, y: $.y + y / $.z - y / Y, z: Y };
        });
      } else
        n((f) => ({ ...f, x: f.x + s.deltaX / f.z, y: f.y + s.deltaY / f.z }));
    };
    return m.addEventListener("wheel", z, { passive: !1 }), () => m.removeEventListener("wheel", z);
  }, [t, r, o, n]);
  const c = bt(() => {
    const m = l.filter((z) => d.has(z.id));
    return {
      count: m.length,
      canGroup: m.length > 1,
      canUngroup: m.some((z) => !!z.groupId),
      isTextual: m.length === 1 && b.includes(m[0].type)
    };
  }, [d, l, b]);
  ft(() => {
    h == null || h(c);
  }, [h, c]);
  const v = bt(() => {
    if (p) {
      const s = l.find((f) => f.id === p);
      return s && s.type !== "image" && s.type !== "draw" ? s : null;
    }
    const m = l.filter((s) => d.has(s.id));
    if (m.length > 1 && m.every((s) => s.type === "draw")) return m[0] ?? null;
    if (m.length !== 1) return null;
    const z = m[0];
    return z && z.type !== "image" ? z : null;
  }, [p, d, l]), a = tt(0);
  return { selectionInfo: c, inspectorShape: v, onContainerPointerMove: i ? (m) => {
    const z = performance.now();
    z - a.current < 60 || (a.current = z, i(u(m.clientX, m.clientY)));
  } : void 0, onContainerPointerLeave: i ? () => i(null) : void 0 };
}
function Re(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, o = 1 / 0, r = -1 / 0, l = -1 / 0;
  for (const i of t) {
    const u = et(i);
    n = Math.min(n, u.minX), o = Math.min(o, u.minY), r = Math.max(r, u.maxX), l = Math.max(l, u.maxY);
  }
  const d = 40, p = r - n + d * 2, b = l - o + d * 2;
  if (!Number.isFinite(p) || !Number.isFinite(b) || p > zt.maxExportDimension || b > zt.maxExportDimension || p * b > zt.maxExportPixels) return null;
  const g = (i, u, c, v, a) => {
    const X = i.fontSize ?? c, x = ct(i), m = Mn(Dt(i));
    if (m.length === 0) return "";
    const z = pt(i), s = i.textAlign === "right" ? "end" : i.textAlign === "center" ? "middle" : i.textAlign === "left" ? "start" : a, f = s === "end" ? z.maxX - 12 : s === "middle" ? (z.minX + z.maxX) / 2 : z.minX + 12, $ = z.minY + X + 12;
    return m.map((Y, w) => {
      const y = Y.map((k) => `<tspan style="${[
        k.bold ? "font-weight:700" : `font-weight:${v}`,
        k.italic ? "font-style:italic" : "",
        k.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${mt(k.text)}</tspan>`).join("");
      return `<text x="${f}" y="${$ + w * X * 1.4}" font-family="${mt(x)}" font-size="${X}" fill="${u}" text-anchor="${s}">${y}</text>`;
    }).join("");
  }, h = t.map((i) => {
    const u = st[i.color ?? "blue"], c = pt(i), v = dt(i), a = i.rotation ? ` transform="rotate(${i.rotation * 180 / Math.PI} ${v.x} ${v.y})"` : "", X = i.color ? st[i.color].border : _.ink;
    if (i.type === "draw" && i.points)
      return `<path d="${kn(i.points)}" fill="none" stroke="${X}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    if (i.type === "arrow") {
      const m = xt(i, new Map(t.map((P) => [P.id, P])), t), z = m.routing === "orthogonal" && m.pathPoints && m.pathPoints.length > 1 ? m.pathPoints[m.pathPoints.length - 2] : null, s = m.routing === "orthogonal" && z ? z : St(0.94, m.start, m.control, m.end), f = Math.atan2(m.end.y - s.y, m.end.x - s.x), $ = 14, Y = `${m.end.x - $ * Math.cos(f - 0.4)},${m.end.y - $ * Math.sin(f - 0.4)}`, w = `${m.end.x - $ * Math.cos(f + 0.4)},${m.end.y - $ * Math.sin(f + 0.4)}`, y = m.routing === "orthogonal" && m.pathPoints ? qt(m.pathPoints) : m.bend === 0 ? `M ${m.start.x} ${m.start.y} L ${m.end.x} ${m.end.y}` : `M ${m.start.x} ${m.start.y} Q ${m.control.x} ${m.control.y} ${m.end.x} ${m.end.y}`, k = m.routing === "orthogonal" && m.pathPoints ? en(m.pathPoints) : m.bend === 0 ? { x: (m.start.x + m.end.x) / 2, y: (m.start.y + m.end.y) / 2 } : St(0.5, m.start, m.control, m.end), M = Ot(i), N = M ? `<text x="${k.x}" y="${k.y - 6}" text-anchor="middle" font-family="${mt(ct(i))}" font-size="${i.fontSize ?? 12}" fill="${X}">${mt(M)}</text>` : "";
      return `<path d="${y}" fill="none" stroke="${X}" stroke-width="2.5" stroke-linecap="round"/><polygon points="${m.end.x},${m.end.y} ${Y} ${w}" fill="${X}"/>` + N;
    }
    if (i.type === "image" && i.src) {
      const m = tn(i.src);
      return m ? `<image href="${mt(m)}" x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}"${a}/>` : "";
    }
    if (i.type === "frame")
      return `<g${a}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" fill="none" stroke="${_.slate400}" stroke-width="2" rx="4"/><text x="${c.minX}" y="${c.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${_.muted}">${mt(i.text ?? "프레임")}</text></g>`;
    if (i.type === "note")
      return `<g${a}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" fill="${u.bg}"/><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="6" fill="${u.border}"/>` + g(i, u.text, 14, "600", "start") + "</g>";
    if (i.type === "card") {
      const m = i.cardStyle === "glass";
      return `<g${a}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" rx="16" fill="${m ? _.glassFill : _.slateCard}"/><text x="${c.minX + 16}" y="${c.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${_.slate400}">[ ${mt(i.category ?? "ENTITY")} ]</text>` + g(i, _.white, 16, "700", "start") + "</g>";
    }
    const x = i.type === "ellipse" ? `<ellipse cx="${(c.minX + c.maxX) / 2}" cy="${(c.minY + c.maxY) / 2}" rx="${(c.maxX - c.minX) / 2}" ry="${(c.maxY - c.minY) / 2}" fill="${u.bg}" stroke="${u.border}" stroke-width="2"/>` : `<rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" rx="12" fill="${u.bg}" stroke="${u.border}" stroke-width="2"/>`;
    return `<g${a}>${x}${g(i, u.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${p}" height="${b}" viewBox="${n - d} ${o - d} ${p} ${b}"><rect x="${n - d}" y="${o - d}" width="${p}" height="${b}" fill="${e ? _.canvasDark : _.canvasLight}"/>` + h + "</svg>";
}
async function Ue(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), o = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), r = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), l = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, d = new Image();
  d.crossOrigin = "anonymous";
  try {
    await new Promise((u, c) => {
      d.onload = () => u(), d.onerror = () => c(new Error("svg rasterise failed")), d.src = l;
    });
  } catch {
    return null;
  }
  const p = 2, b = o * p, g = r * p;
  if (!Number.isSafeInteger(b) || !Number.isSafeInteger(g) || b > zt.maxExportDimension || g > zt.maxExportDimension || b * g > zt.maxExportPixels) return null;
  const h = document.createElement("canvas");
  h.width = b, h.height = g;
  const i = h.getContext("2d");
  return i ? (i.scale(p, p), i.drawImage(d, 0, 0), new Promise((u) => {
    try {
      h.toBlob((c) => u(c), "image/png");
    } catch {
      u(null);
    }
  })) : null;
}
function Ge(t, e, n) {
  if (t.length < 2) return;
  const o = t.filter(
    (u) => u.type !== "draw" && u.type !== "arrow" && u.type !== "frame" && u.type !== "image"
  );
  if (o.length < 2) return;
  const r = o.map((u, c) => ({
    id: u.id,
    i: c,
    x: dt(u).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: dt(u).y,
    vx: 0,
    vy: 0
  }));
  for (let u = 0; u < r.length; u++)
    for (let c = 0; c < u; c++)
      if (Math.abs(r[u].x - r[c].x) < 1 && Math.abs(r[u].y - r[c].y) < 1) {
        const v = 2 * Math.PI * u / r.length;
        r[u].x += Math.cos(v) * 10, r[u].y += Math.sin(v) * 10;
        break;
      }
  const l = new Map(r.map((u) => [u.id, u])), d = [];
  for (const u of t) {
    if (u.type !== "arrow") continue;
    const c = u.fromId ? l.get(u.fromId) : null, v = u.toId ? l.get(u.toId) : null;
    c && v && d.push([c, v]);
  }
  const p = 220, b = p * p, g = 80;
  let h = 400;
  const i = h / g;
  for (let u = 0; u < g; u++) {
    for (let c = 0; c < r.length; c++)
      r[c].vx = 0, r[c].vy = 0;
    for (let c = 0; c < r.length; c++)
      for (let v = c + 1; v < r.length; v++) {
        const a = r[c], X = r[v], x = a.x - X.x, m = a.y - X.y, z = Math.hypot(x, m) || 0.01, s = b / z, f = x / z * s, $ = m / z * s;
        a.vx += f, a.vy += $, X.vx -= f, X.vy -= $;
      }
    for (const [c, v] of d) {
      const a = c.x - v.x, X = c.y - v.y, x = Math.hypot(a, X) || 0.01, m = x * x / p, z = a / x * m, s = X / x * m;
      c.vx -= z, c.vy -= s, v.vx += z, v.vy += s;
    }
    for (const c of r) {
      const v = Math.hypot(c.vx, c.vy) || 0.01, a = Math.min(v, h);
      c.x += c.vx / v * a, c.y += c.vy / v * a;
    }
    h = Math.max(0.5, h - i);
  }
  e((u) => u.map((c) => {
    const v = l.get(c.id);
    return v ? { ...c, x: v.x - c.w / 2, y: v.y - c.h / 2 } : c;
  })), n();
}
function qe(t, {
  controlled: e,
  past: n,
  future: o,
  setLocalShapes: r,
  setCamera: l,
  selectNow: d,
  setEditingId: p
}) {
  const b = t;
  if (!b || b.version !== "canvas-v1") return;
  let g;
  try {
    g = te({ version: "canvas-v1", shapes: [], camera: b.camera }).camera;
  } catch {
    return;
  }
  !e && Array.isArray(b.shapes) && b.shapes.length <= zt.maxShapes && (n.current = [], o.current = [], r(b.shapes.map(on).filter((h) => h !== null))), l(g), d(/* @__PURE__ */ new Set()), p(null);
}
function Qe({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: o,
  selectedRef: r,
  past: l,
  future: d,
  controlled: p,
  isDarkMode: b,
  minZoom: g,
  maxZoom: h,
  onToolChange: i,
  onDirty: u,
  commit: c,
  deleteSelection: v,
  selectNow: a,
  viewportCentre: X,
  setShapes: x,
  setLocalShapes: m,
  setCamera: z,
  setEditingId: s,
  setAnnouncement: f,
  createId: $
}) {
  const Y = rt((y) => {
    const k = X(), M = on({
      id: $(),
      x: y.x ?? k.x - y.w / 2,
      y: y.y ?? k.y - y.h / 2,
      ...y
    });
    if (!M) throw new Error("Canvas could not create a valid shape.");
    return c((N) => [...N, M]), a(/* @__PURE__ */ new Set([M.id])), i("select"), f(`${M.type} 추가됨`), M;
  }, [c, $, i, a, f, X]), w = rt(() => Re(n.current, b), [b, n]);
  Un(t, () => ({
    addNote: (y) => {
      const k = Y({ type: "note", w: 180, h: 180, color: y, text: "" });
      s(k.id);
    },
    addCard: (y, k, M, N) => {
      Y({ type: "card", w: 260, h: 150, text: y, category: k, cardStyle: M, color: N });
    },
    addText: () => {
      const y = Y({ type: "text", w: 220, h: 44, text: "" });
      s(y.id);
    },
    addShape: (y, k, M) => {
      Y({
        type: y,
        w: y === "ellipse" ? 220 : 200,
        h: y === "ellipse" ? 110 : 140,
        color: k,
        text: M ?? ""
      });
    },
    addArrow: () => {
      const y = X(), k = { id: $(), type: "arrow", x: y.x - 140, y: y.y, w: 280, h: 0 };
      c((M) => [...M, k]), a(/* @__PURE__ */ new Set([k.id])), i("select");
    },
    addImage: (y, k, M, N) => {
      Y({ type: "image", w: M, h: N, src: y, fileName: k });
    },
    addFileCard: (y, k, M) => {
      Y({ type: "rect", w: 260, h: 120, color: "purple", text: M, src: k, fileName: y });
    },
    setTool: i,
    undo: () => {
      const y = l.current.pop();
      y && (d.current.push(n.current), x(y), a(/* @__PURE__ */ new Set()), s(null), u(), f("실행 취소"));
    },
    redo: () => {
      const y = d.current.pop();
      y && (l.current.push(n.current), x(y), a(/* @__PURE__ */ new Set()), s(null), u(), f("다시 실행"));
    },
    deleteSelected: () => {
      v(r.current);
    },
    duplicateSelected: () => {
      var N;
      const y = r.current;
      if (y.size === 0) return;
      const k = [], M = /* @__PURE__ */ new Map();
      for (const P of n.current) {
        if (!y.has(P.id)) continue;
        let E = P.groupId;
        E && (M.has(E) || M.set(E, $("g")), E = M.get(E)), k.push({
          ...P,
          id: $(),
          x: P.x + 24,
          y: P.y + 24,
          groupId: E,
          points: (N = P.points) == null ? void 0 : N.map(([O, I]) => [O + 24, I + 24]),
          orthogonalWaypoints: P.type === "arrow" && P.orthogonalWaypoints ? P.orthogonalWaypoints.map((O) => ({ x: O.x + 24, y: O.y + 24 })) : void 0
        });
      }
      c((P) => [...P, ...k]), a(new Set(k.map((P) => P.id))), f(`${k.length}개 복제됨`);
    },
    group: () => {
      var M;
      const y = r.current;
      if (y.size < 2) return;
      const k = $("g");
      c((N) => N.map((P) => y.has(P.id) ? { ...P, groupId: k } : P)), f(`${y.size}개 그룹화됨`), (M = e.current) == null || M.focus();
    },
    ungroup: () => {
      var k;
      const y = r.current;
      y.size !== 0 && (c((M) => M.map((N) => y.has(N.id) ? { ...N, groupId: void 0 } : N)), f("그룹 해제됨"), (k = e.current) == null || k.focus());
    },
    zoomBy: (y) => {
      z((k) => {
        var O;
        const M = (O = e.current) == null ? void 0 : O.getBoundingClientRect(), N = Math.min(h, Math.max(g, k.z * y));
        if (!M) return { ...k, z: N };
        const P = k.x + M.width / 2 / k.z, E = k.y + M.height / 2 / k.z;
        return { x: P - M.width / 2 / N, y: E - M.height / 2 / N, z: N };
      });
    },
    zoomTo: (y) => {
      z((k) => {
        var O;
        const M = (O = e.current) == null ? void 0 : O.getBoundingClientRect(), N = Math.min(h, Math.max(g, y));
        if (!M) return { ...k, z: N };
        const P = k.x + M.width / 2 / k.z, E = k.y + M.height / 2 / k.z;
        return { x: P - M.width / 2 / N, y: E - M.height / 2 / N, z: N };
      });
    },
    resetZoom: () => {
      z((y) => {
        var P;
        const k = (P = e.current) == null ? void 0 : P.getBoundingClientRect();
        if (!k) return { ...y, z: 1 };
        const M = y.x + k.width / 2 / y.z, N = y.y + k.height / 2 / y.z;
        return { x: M - k.width / 2, y: N - k.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var T;
      const y = n.current, k = (T = e.current) == null ? void 0 : T.getBoundingClientRect();
      if (y.length === 0 || !k) return;
      let M = 1 / 0, N = 1 / 0, P = -1 / 0, E = -1 / 0;
      for (const L of y) {
        const R = et(L);
        M = Math.min(M, R.minX), N = Math.min(N, R.minY), P = Math.max(P, R.maxX), E = Math.max(E, R.maxY);
      }
      const O = 80, I = Math.min(h, Math.max(
        g,
        Math.min(k.width / (P - M + O * 2), k.height / (E - N + O * 2))
      ));
      z({
        x: (M + P) / 2 - k.width / 2 / I,
        y: (N + E) / 2 - k.height / 2 / I,
        z: I
      });
    },
    autoLayout: () => Ge(n.current, c, () => f("자동 배치 완료")),
    exportSvg: w,
    exportPng: () => Ue(w),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (y) => qe(y, {
      controlled: p,
      past: l,
      future: d,
      setLocalShapes: m,
      setCamera: z,
      selectNow: a,
      setEditingId: s
    })
  }), [
    Y,
    w,
    c,
    $,
    v,
    b,
    h,
    g,
    u,
    i,
    a,
    z,
    s,
    m,
    x,
    f,
    X,
    p
  ]);
}
function Ze(t) {
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
function Je({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: o,
  editingIdRef: r,
  toolRef: l,
  past: d,
  future: p,
  textualTypes: b,
  setIsSpaceDown: g,
  setEditingId: h,
  setShapes: i,
  setAnnouncement: u,
  commit: c,
  deleteSelection: v,
  selectNow: a,
  onDirty: X,
  onToolChange: x,
  createId: m
}) {
  const z = rt((s, f) => {
    const $ = o.current;
    $.size !== 0 && c((Y) => Y.map((w) => {
      var y;
      return $.has(w.id) ? {
        ...w,
        x: w.x + s,
        y: w.y + f,
        points: (y = w.points) == null ? void 0 : y.map(([k, M]) => [k + s, M + f])
      } : w;
    }));
  }, [c, o]);
  ft(() => {
    const s = (w) => {
      const y = w;
      return !!y && (y.tagName === "INPUT" || y.tagName === "TEXTAREA" || y.isContentEditable);
    }, f = (w) => w instanceof Element && !!w.closest("input, select, button, textarea, option, label, [data-canvas-control]"), $ = (w) => {
      var I, T, L, R;
      const y = t.current, k = document.activeElement, M = w.target instanceof Node && !!(y != null && y.contains(w.target)), N = !!y && (k === y || y.contains(k));
      if (!M && !N || f(w.target)) return;
      if (w.code === "Space" && !s(w.target)) {
        g(!0), w.preventDefault();
        return;
      }
      if (s(w.target)) {
        if (w.key === "Escape")
          w.preventDefault(), h(null), (I = e.current) == null || I.blur(), (T = t.current) == null || T.focus();
        else if ((w.key === "Delete" || w.key === "Backspace") && !r.current) {
          const D = o.current;
          v(D) && w.preventDefault();
        }
        return;
      }
      const P = w.metaKey || w.ctrlKey, E = o.current;
      if (P && w.key.toLowerCase() === "z") {
        if (w.preventDefault(), w.shiftKey) {
          const D = p.current.pop();
          D && (d.current.push(n.current), i(D), X());
        } else {
          const D = d.current.pop();
          D && (p.current.push(n.current), i(D), X());
        }
        a(/* @__PURE__ */ new Set());
        return;
      }
      if (P && w.key.toLowerCase() === "g") {
        if (w.preventDefault(), w.shiftKey)
          E.size > 0 && (c((D) => D.map((B) => E.has(B.id) ? { ...B, groupId: void 0 } : B)), u("그룹 해제됨"));
        else if (E.size > 1) {
          const D = m("g");
          c((B) => B.map((U) => E.has(U.id) ? { ...U, groupId: D } : U)), u(`${E.size}개 그룹화됨`);
        }
        return;
      }
      if (P && w.key.toLowerCase() === "a") {
        w.preventDefault(), a(new Set(n.current.map((D) => D.id))), u(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (w.key === "Delete" || w.key === "Backspace") {
        v(E) && w.preventDefault();
        return;
      }
      if (w.key.startsWith("Arrow")) {
        w.preventDefault();
        const D = w.shiftKey ? 10 : 1;
        w.key === "ArrowLeft" && z(-D, 0), w.key === "ArrowRight" && z(D, 0), w.key === "ArrowUp" && z(0, -D), w.key === "ArrowDown" && z(0, D);
        return;
      }
      if (w.key === "Tab" && n.current.length > 0) {
        w.preventDefault();
        const D = n.current, B = D.findIndex((K) => E.has(K.id)), U = w.shiftKey ? B <= 0 ? D.length - 1 : B - 1 : B === -1 || B === D.length - 1 ? 0 : B + 1, Q = D[U];
        a(/* @__PURE__ */ new Set([Q.id])), u(`${Q.type} 선택됨: ${Ot(Q) || "내용 없음"}`);
        return;
      }
      if (w.key === "Enter" && E.size === 1) {
        const D = n.current.find((B) => E.has(B.id));
        D && b.includes(D.type) && (w.preventDefault(), h(D.id));
        return;
      }
      if (w.key === "Escape") {
        if (r.current) {
          w.preventDefault(), h(null), (L = e.current) == null || L.blur(), (R = t.current) == null || R.focus(), x("select");
          return;
        }
        a(/* @__PURE__ */ new Set()), x("select");
        return;
      }
      const O = Ze(w);
      O && (w.preventDefault(), l.current = O, x(O));
    }, Y = (w) => {
      const y = t.current;
      !y || !(document.activeElement === y || y.contains(document.activeElement)) || w.code === "Space" && g(!1);
    };
    return window.addEventListener("keydown", $), window.addEventListener("keyup", Y), () => {
      window.removeEventListener("keydown", $), window.removeEventListener("keyup", Y);
    };
  }, [
    c,
    t,
    m,
    v,
    r,
    e,
    p,
    z,
    X,
    x,
    d,
    a,
    o,
    u,
    h,
    g,
    i,
    n,
    b,
    l
  ]);
}
const to = 400;
function no({
  containerRef: t,
  editorRef: e,
  pointers: n,
  cameraRef: o,
  shapesRef: r,
  toolRef: l,
  activeColorRef: d,
  camera: p,
  shapes: b,
  selected: g,
  isSpaceDown: h,
  textualTypes: i,
  setShapes: u,
  setEditingId: c,
  applyInteraction: v,
  selectNow: a,
  beginHistory: X,
  commit: x,
  onToolChange: m,
  expandToGroups: z,
  toPage: s,
  createId: f
}) {
  const $ = f, Y = tt(null), w = (I, T) => {
    var B;
    const L = ((B = t.current) == null ? void 0 : B.dataset.canvasActiveTool) === "text" ? "text" : l.current;
    if (L !== "note" && L !== "text") return;
    const R = s(I, T), D = L === "note" ? { id: $(), type: "note", x: R.x - 90, y: R.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: $(), type: "text", x: R.x, y: R.y - 22, w: 220, h: 44, text: "" };
    x((U) => [...U, D]), a(/* @__PURE__ */ new Set([D.id])), c(D.id), m("select");
  };
  return ft(() => {
    const I = (T) => {
      var L;
      (L = t.current) != null && L.contains(T.target) && (T.target instanceof Element && T.target.closest('[role="textbox"], [data-canvas-inspector]') || w(T.clientX, T.clientY));
    };
    return window.addEventListener("click", I, !0), () => window.removeEventListener("click", I, !0);
  }), { onPointerDown: (I) => {
    var B, U, Q;
    const T = l.current;
    if (n.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), n.current.size === 2) {
      const [K, G] = [...n.current.values()], nt = o.current;
      v({
        kind: "pinch",
        startDist: Math.hypot(G.x - K.x, G.y - K.y) || 1,
        startZoom: nt.z,
        startMidX: (K.x + G.x) / 2,
        startMidY: (K.y + G.y) / 2,
        camX: nt.x,
        camY: nt.y
      });
      return;
    }
    if (n.current.size > 2) return;
    if (I.button === 1 || h || T === "hand" || I.button === 0 && T === "select" && I.altKey) {
      v({ kind: "pan", startX: I.clientX, startY: I.clientY, camX: p.x, camY: p.y });
      return;
    }
    if (I.button !== 0) return;
    const L = s(I.clientX, I.clientY);
    if (c(null), (B = e.current) == null || B.blur(), (U = t.current) == null || U.focus(), T === "draw") {
      const K = { id: $(), type: "draw", x: L.x, y: L.y, w: 0, h: 0, points: [[L.x, L.y]], color: d.current };
      X(), u((G) => [...G, K]), v({ kind: "drawing", id: K.id });
      return;
    }
    if (T === "arrow" || T === "frame" || ne.includes(T)) {
      const K = T, G = T === "arrow" ? { id: $(), type: "arrow", x: L.x, y: L.y, w: 0, h: 0, color: d.current } : T === "frame" ? { id: $(), type: "frame", x: L.x, y: L.y, w: 0, h: 0, text: "프레임" } : { id: $(), type: K, x: L.x, y: L.y, w: 0, h: 0, color: d.current, text: "" };
      X(), u((nt) => [...nt, G]), v({ kind: "creating", id: G.id, startX: L.x, startY: L.y });
      return;
    }
    if (T === "note" || T === "text") return;
    if (T === "eraser") {
      X(), u((K) => Sn(K, L.x, L.y, 14 / p.z, p.z)), v({ kind: "erasing" });
      return;
    }
    const R = new Map(b.map((K) => [K.id, K])), D = [...b].reverse().find((K) => Tt(K, L.x, L.y, p.z, R, b));
    if (!D)
      Y.current = null;
    else {
      const K = Date.now(), G = !I.shiftKey && i.includes(D.type) && ((Q = Y.current) == null ? void 0 : Q.id) === D.id && K - Y.current.time < to, nt = G ? D.id : void 0;
      Y.current = G ? null : { id: D.id, time: K };
      const S = I.shiftKey ? new Set(g).add(D.id) : g.has(D.id) ? g : /* @__PURE__ */ new Set([D.id]), F = z(S);
      a(F);
      const V = /* @__PURE__ */ new Map();
      for (const q of b) F.has(q.id) && V.set(q.id, q);
      for (const q of b) {
        if (q.type !== "frame" || !F.has(q.id)) continue;
        const J = et(q);
        for (const ot of b) {
          if (ot.id === q.id || V.has(ot.id)) continue;
          const yt = dt(ot);
          yt.x >= J.minX && yt.x <= J.maxX && yt.y >= J.minY && yt.y <= J.maxY && V.set(ot.id, ot);
        }
      }
      X(), v({ kind: "move", startX: L.x, startY: L.y, origin: V, editOnReleaseId: nt });
      return;
    }
    I.shiftKey || a(/* @__PURE__ */ new Set()), v({
      kind: "marquee",
      startX: L.x,
      startY: L.y,
      curX: L.x,
      curY: L.y,
      screenStartX: I.clientX,
      screenStartY: I.clientY
    });
  }, onResizeHandleDown: (I, T, L) => {
    I.stopPropagation(), n.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), X(), v({ kind: "resize", id: T.id, handle: L, start: T });
  }, onRotateHandleDown: (I, T) => {
    I.stopPropagation(), n.current.set(I.pointerId, { x: I.clientX, y: I.clientY });
    const L = s(I.clientX, I.clientY), R = dt(T);
    X(), v({
      kind: "rotate",
      id: T.id,
      startAngle: Math.atan2(L.y - R.y, L.x - R.x),
      startRotation: T.rotation ?? 0
    });
  }, onConnectHandleDown: (I, T) => {
    I.stopPropagation(), n.current.set(I.pointerId, { x: I.clientX, y: I.clientY });
    const L = s(I.clientX, I.clientY);
    v({ kind: "connect", fromId: T.id, toX: L.x, toY: L.y, hoverId: null });
  }, onBendHandleDown: (I, T) => {
    I.stopPropagation(), n.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), X(), v({ kind: "bend", id: T.id });
  }, onOrthogonalSegmentHandleDown: (I, T, L) => {
    I.stopPropagation(), n.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), X(), v({ kind: "orthogonal-segment", id: T.id, segmentIndex: L });
  }, onArrowEndpointDown: (I, T, L) => {
    I.stopPropagation(), n.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), X(), v({ kind: "arrow-endpoint", id: T.id, endpoint: L, hoverId: null });
  } };
}
const eo = 0.1, oo = 4, ro = 14, io = 4, vn = ["note", "card", "rect", "ellipse", "text", "image"];
function ao({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: o,
  shapesRef: r,
  setShapes: l,
  setEditingId: d,
  setEraserPos: p,
  setGuides: b,
  setAnnouncement: g,
  applyInteraction: h,
  selectNow: i,
  endHistory: u,
  commit: c,
  onToolChange: v,
  createId: a
}) {
  const X = a;
  ft(() => {
    const x = (m) => {
      t.current.delete(m.pointerId);
      const z = e.current;
      if (z.kind !== "none") {
        if (z.kind === "pinch") {
          t.current.size < 2 && h({ kind: "none" });
          return;
        }
        if (b([]), z.kind === "erasing") {
          p(null), u(), h({ kind: "none" });
          return;
        }
        if (z.kind === "connect") {
          const f = r.current.find((M) => M.id === z.fromId);
          if (h({ kind: "none" }), !f) return;
          const $ = { x: z.toX, y: z.toY }, Y = dt(f);
          if (!z.hoverId && Math.hypot($.x - Y.x, $.y - Y.y) < 30) return;
          const w = [];
          let y = z.hoverId;
          if (!y) {
            const M = f.type === "note" ? 180 : 200, N = f.type === "note" ? 180 : 120, P = {
              ...f,
              id: X(),
              x: $.x - M / 2,
              y: $.y - N / 2,
              w: M,
              h: N,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            w.push(P), y = P.id;
          }
          const k = {
            id: X(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: f.id,
            toId: y,
            text: ""
          };
          w.push(k), c((M) => [...M, ...w]), i(/* @__PURE__ */ new Set([k.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => d(k.id)) : d(k.id), g("연결 생성됨");
          return;
        }
        if (z.kind === "bend") {
          u(), h({ kind: "none" });
          return;
        }
        if (z.kind === "drawing") {
          l((s) => s.map((f) => {
            if (f.id !== z.id || !f.points) return f;
            const $ = f.points.map((k) => k[0]), Y = f.points.map((k) => k[1]), w = Math.min(...$), y = Math.min(...Y);
            return { ...f, x: w, y, w: Math.max(...$) - w, h: Math.max(...Y) - y };
          })), u(), h({ kind: "none" });
          return;
        }
        if (z.kind === "creating") {
          l((s) => s.map((f) => {
            if (f.id !== z.id) return f;
            const $ = Math.abs(f.w) < 4 && Math.abs(f.h) < 4 ? {
              ...f,
              w: f.type === "arrow" ? 200 : f.type === "frame" ? 480 : 180,
              h: f.type === "arrow" ? 0 : f.type === "frame" ? 320 : 120
            } : f;
            if ($.type === "arrow") return $;
            const Y = pt($);
            return { ...$, x: Y.minX, y: Y.minY, w: Y.maxX - Y.minX, h: Y.maxY - Y.minY };
          })), u(), i(/* @__PURE__ */ new Set([z.id])), v("select"), h({ kind: "none" });
          return;
        }
        if ((z.kind === "move" || z.kind === "resize" || z.kind === "rotate" || z.kind === "orthogonal-segment" || z.kind === "arrow-endpoint") && u(), z.kind === "move" && z.editOnReleaseId && m.type === "pointerup") {
          const s = o(m.clientX, m.clientY);
          Math.hypot(s.x - z.startX, s.y - z.startY) * n.current.z <= io && d(z.editOnReleaseId);
        }
        h({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", x), window.addEventListener("pointercancel", x), () => {
      window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", x);
    };
  }, [h, n, a, u, e, v, t, i, g, d, l, r, o]);
}
function co({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: o,
  shapesRef: r,
  setCamera: l,
  setShapes: d,
  setEraserPos: p,
  setGuides: b,
  applyInteraction: g,
  selectNow: h,
  expandToGroups: i,
  toPage: u
}) {
  ft(() => {
    const c = (v) => {
      var m, z;
      e.current.has(v.pointerId) && e.current.set(v.pointerId, { x: v.clientX, y: v.clientY });
      const a = n.current;
      if (a.kind === "none") return;
      const X = o.current;
      if (a.kind === "pinch") {
        if (e.current.size < 2) return;
        const [s, f] = [...e.current.values()], $ = Math.hypot(f.x - s.x, f.y - s.y) || 1, Y = (s.x + f.x) / 2, w = (s.y + f.y) / 2, y = (m = t.current) == null ? void 0 : m.getBoundingClientRect();
        if (!y) return;
        const k = Math.min(oo, Math.max(eo, a.startZoom * ($ / a.startDist))), M = a.camX + (a.startMidX - y.left) / a.startZoom, N = a.camY + (a.startMidY - y.top) / a.startZoom;
        l({ x: M - (Y - y.left) / k, y: N - (w - y.top) / k, z: k });
        return;
      }
      if (a.kind === "pan") {
        l({
          x: a.camX - (v.clientX - a.startX) / X.z,
          y: a.camY - (v.clientY - a.startY) / X.z,
          z: X.z
        });
        return;
      }
      const x = u(v.clientX, v.clientY);
      if (a.kind === "erasing") {
        d((s) => Sn(s, x.x, x.y, ro / X.z, X.z)), p({ x: x.x, y: x.y });
        return;
      }
      if (a.kind === "connect") {
        const s = r.current, f = new Map(s.map((Y) => [Y.id, Y])), $ = [...s].reverse().find((Y) => Y.id !== a.fromId && vn.includes(Y.type) && Tt(Y, x.x, x.y, X.z, f, s));
        g({ ...a, toX: x.x, toY: x.y, hoverId: ($ == null ? void 0 : $.id) ?? null });
        return;
      }
      if (a.kind === "bend") {
        const s = r.current, f = s.find((P) => P.id === a.id);
        if (!f) return;
        const $ = xt(f, new Map(s.map((P) => [P.id, P])), s), Y = $.end.x - $.start.x, w = $.end.y - $.start.y, y = Math.hypot(Y, w) || 1, k = ($.start.x + $.end.x) / 2, M = ($.start.y + $.end.y) / 2, N = (x.x - k) * (-w / y) + (x.y - M) * (Y / y);
        d((P) => P.map((E) => E.id === a.id ? { ...E, bend: N } : E));
        return;
      }
      if (a.kind === "orthogonal-segment") {
        const s = r.current, f = s.find((N) => N.id === a.id);
        if (!f) return;
        const $ = xt(f, new Map(s.map((N) => [N.id, N])), s), Y = $.routing === "orthogonal" ? $.pathPoints : void 0;
        if (!Y || Y.length < 2) return;
        const w = Y[a.segmentIndex], y = Y[a.segmentIndex + 1];
        if (!w || !y) return;
        const k = w.x === y.x ? x.x : x.y, M = ye(Y, a.segmentIndex, k);
        d((N) => N.map((P) => P.id === a.id ? { ...P, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: M.slice(1, -1).map((E) => ({ x: E.x, y: E.y })) } : P));
        return;
      }
      if (a.kind === "arrow-endpoint") {
        const s = r.current, f = s.find((M) => M.id === a.id);
        if (!f) return;
        const $ = new Map(s.map((M) => [M.id, M])), Y = xt(f, $, s), w = a.endpoint === "start" ? Y.end : Y.start, y = [...s].reverse().find((M) => M.id !== f.id && vn.includes(M.type) && Tt(M, x.x, x.y, X.z, $, s)), k = y ? $t(y, w.x, w.y) : { x: x.x, y: x.y };
        g({ ...a, hoverId: (y == null ? void 0 : y.id) ?? null }), d((M) => M.map((N) => {
          if (N.id !== f.id) return N;
          const P = a.endpoint === "start" ? k : w, E = a.endpoint === "end" ? k : w;
          return {
            ...N,
            x: P.x,
            y: P.y,
            w: E.x - P.x,
            h: E.y - P.y,
            fromId: a.endpoint === "start" ? y == null ? void 0 : y.id : N.fromId,
            toId: a.endpoint === "end" ? y == null ? void 0 : y.id : N.toId
          };
        }));
        return;
      }
      if (a.kind === "marquee") {
        g({ ...a, curX: x.x, curY: x.y });
        const s = Math.min(a.startX, x.x), f = Math.max(a.startX, x.x), $ = Math.min(a.startY, x.y), Y = Math.max(a.startY, x.y), w = Math.min(a.screenStartX, v.clientX), y = Math.max(a.screenStartX, v.clientX), k = Math.min(a.screenStartY, v.clientY), M = Math.max(a.screenStartY, v.clientY), N = /* @__PURE__ */ new Map();
        (z = t.current) == null || z.querySelectorAll("[data-canvas-shape-id]").forEach((E) => {
          const O = E.dataset.canvasShapeId;
          O && N.set(O, E.getBoundingClientRect());
        });
        const P = r.current.filter((E) => {
          const O = N.get(E.id);
          if (O)
            return O.right >= w && O.left <= y && O.bottom >= k && O.top <= M;
          const I = et(E);
          return I.maxX >= s && I.minX <= f && I.maxY >= $ && I.minY <= Y;
        }).map((E) => E.id);
        h(i(new Set(P)));
        return;
      }
      if (a.kind === "move") {
        let s = x.x - a.startX, f = x.y - a.startY;
        const $ = a.origin, Y = (() => {
          let k = 1 / 0, M = 1 / 0, N = -1 / 0, P = -1 / 0;
          return $.forEach((E) => {
            const O = et({ ...E, x: E.x + s, y: E.y + f });
            k = Math.min(k, O.minX), M = Math.min(M, O.minY), N = Math.max(N, O.maxX), P = Math.max(P, O.maxY);
          }), { minX: k, minY: M, maxX: N, maxY: P };
        })(), w = r.current.filter((k) => !$.has(k.id)), y = ze(Y, w, X.z);
        s += y.dx, f += y.dy, b(y.guides), d((k) => k.map((M) => {
          var P;
          const N = $.get(M.id);
          return N ? {
            ...M,
            x: N.x + s,
            y: N.y + f,
            points: (P = N.points) == null ? void 0 : P.map(([E, O]) => [E + s, O + f]),
            ...N.type === "arrow" && N.orthogonalWaypoints ? { orthogonalWaypoints: N.orthogonalWaypoints.map((E) => ({ x: E.x + s, y: E.y + f })) } : {}
          } : M;
        }));
        return;
      }
      if (a.kind === "drawing") {
        d((s) => s.map((f) => {
          if (f.id !== a.id || !f.points) return f;
          const $ = f.points[f.points.length - 1];
          return Math.hypot(x.x - $[0], x.y - $[1]) < 2 / X.z ? f : { ...f, points: [...f.points, [x.x, x.y]] };
        }));
        return;
      }
      if (a.kind === "creating") {
        d((s) => s.map((f) => f.id === a.id ? { ...f, w: x.x - a.startX, h: x.y - a.startY } : f));
        return;
      }
      if (a.kind === "rotate") {
        const s = r.current.find((w) => w.id === a.id);
        if (!s) return;
        const f = dt(s), $ = Math.atan2(x.y - f.y, x.x - f.x);
        let Y = a.startRotation + ($ - a.startAngle);
        v.shiftKey && (Y = Math.round(Y / (Math.PI / 12)) * (Math.PI / 12)), d((w) => w.map((y) => y.id === a.id ? { ...y, rotation: Y } : y));
        return;
      }
      if (a.kind === "resize") {
        const { start: s, handle: f } = a, $ = Xn(s, x.x, x.y);
        d((Y) => Y.map((w) => {
          if (w.id !== s.id) return w;
          let { x: y, y: k, w: M, h: N } = s;
          if (f.includes("e") && (M = Math.max(20, $.x - s.x)), f.includes("s") && (N = Math.max(20, $.y - s.y)), f.includes("w")) {
            const P = s.x + s.w;
            y = Math.min($.x, P - 20), M = P - y;
          }
          if (f.includes("n")) {
            const P = s.y + s.h;
            k = Math.min($.y, P - 20), N = P - k;
          }
          return { ...w, x: y, y: k, w: M, h: N, manualSize: w.type === "text" ? !0 : w.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", c), () => window.removeEventListener("pointermove", c);
  }, [g, t, i, n, e, h, r, u]);
}
function so(t) {
  co(t), ao(t);
}
function lo({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: o,
  cameraRef: r,
  shapesRef: l,
  toolRef: d,
  activeColorRef: p,
  camera: b,
  shapes: g,
  selected: h,
  isSpaceDown: i,
  textualTypes: u,
  setCamera: c,
  setShapes: v,
  setEditingId: a,
  setEraserPos: X,
  setGuides: x,
  setAnnouncement: m,
  applyInteraction: z,
  selectNow: s,
  beginHistory: f,
  endHistory: $,
  commit: Y,
  onToolChange: w,
  expandToGroups: y,
  toPage: k,
  createId: M
}) {
  const N = no({
    containerRef: t,
    editorRef: e,
    pointers: n,
    cameraRef: r,
    shapesRef: l,
    toolRef: d,
    activeColorRef: p,
    camera: b,
    shapes: g,
    selected: h,
    isSpaceDown: i,
    textualTypes: u,
    setShapes: v,
    setEditingId: a,
    applyInteraction: z,
    selectNow: s,
    beginHistory: f,
    commit: Y,
    onToolChange: w,
    expandToGroups: y,
    toPage: k,
    createId: M
  });
  return so({
    containerRef: t,
    pointers: n,
    interactionRef: o,
    cameraRef: r,
    shapesRef: l,
    setCamera: c,
    setShapes: v,
    setEditingId: a,
    setEraserPos: X,
    setGuides: x,
    setAnnouncement: m,
    applyInteraction: z,
    selectNow: s,
    endHistory: $,
    commit: Y,
    onToolChange: w,
    expandToGroups: y,
    toPage: k,
    createId: M
  }), N;
}
function uo(t) {
  return Qe(t), Je(t), lo(t);
}
function xo({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: o,
  zoom: r
}) {
  const l = n || o.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", d = t ? _.gridDark : _.gridLight, p = 40 * r;
  return { cursor: l, gridColor: d, gridSize: p, strokeColorOf: (g) => g.color ? st[g.color].border : t ? "var(--canvas-slate-200)" : _.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = he, document.head.appendChild(t);
}
const mn = 0.1, pn = 4, yn = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function fo(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const yo = Gn(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: o,
  onToolChange: r,
  onDirty: l,
  onZoomChange: d,
  onSelectionChange: p,
  shapes: b,
  onShapesChange: g,
  peerCursors: h,
  onLocalCursor: i
}, u) {
  var ln, dn;
  const {
    containerRef: c,
    editorRef: v,
    setLocalShapes: a,
    controlled: X,
    shapes: x,
    setShapes: m,
    camera: z,
    setCamera: s,
    cameraRef: f,
    selected: $,
    selectedRef: Y,
    editingId: w,
    setEditingId: y,
    editingIdRef: k,
    interaction: M,
    interactionRef: N,
    applyInteraction: P,
    isSpaceDown: E,
    setIsSpaceDown: O,
    guides: I,
    setGuides: T,
    announcement: L,
    setAnnouncement: R,
    showInspectorPalette: D,
    setShowInspectorPalette: B,
    eraserPos: U,
    setEraserPos: Q,
    setActiveColor: K,
    activeColorRef: G,
    installedFontFamilies: nt,
    pointers: S,
    past: F,
    future: V,
    selectNow: q,
    commit: J,
    deleteSelection: ot,
    beginHistory: yt,
    endHistory: Ct,
    toPage: kt,
    viewportCentre: Bt,
    expandToGroups: Ht,
    toolRef: Wt,
    shapesRef: Mt
  } = Ke({ boardIdentity: e, tool: o, controlledShapes: b, onShapesChange: g, onDirty: l }), {
    inspectorShape: Nt,
    onContainerPointerMove: jt,
    onContainerPointerLeave: A
  } = Ve({
    containerRef: c,
    camera: z,
    setCamera: s,
    minZoom: mn,
    maxZoom: pn,
    shapes: x,
    selected: $,
    editingId: w,
    textualTypes: yn,
    onZoomChange: d,
    onSelectionChange: p,
    onLocalCursor: i,
    toPage: kt
  }), {
    onPointerDown: W,
    onResizeHandleDown: H,
    onRotateHandleDown: Z,
    onConnectHandleDown: ht,
    onBendHandleDown: vt,
    onOrthogonalSegmentHandleDown: Kt,
    onArrowEndpointDown: En
  } = uo({
    ref: u,
    containerRef: c,
    editorRef: v,
    pointers: S,
    interactionRef: N,
    cameraRef: f,
    shapesRef: Mt,
    toolRef: Wt,
    activeColorRef: G,
    camera: z,
    shapes: x,
    selected: $,
    isSpaceDown: E,
    setCamera: s,
    setShapes: m,
    setEditingId: y,
    setEraserPos: Q,
    setGuides: T,
    setAnnouncement: R,
    applyInteraction: P,
    selectNow: q,
    past: F,
    future: V,
    beginHistory: yt,
    endHistory: Ct,
    commit: J,
    deleteSelection: ot,
    onDirty: l,
    onToolChange: r,
    controlled: X,
    isDarkMode: n,
    minZoom: mn,
    maxZoom: pn,
    textualTypes: yn,
    selectedRef: Y,
    editingIdRef: k,
    setIsSpaceDown: O,
    viewportCentre: Bt,
    setLocalShapes: a,
    expandToGroups: Ht,
    toPage: kt,
    createId: fo
  }), { cursor: Ln, gridColor: Fn, gridSize: rn, strokeColorOf: An } = xo({
    isDarkMode: n,
    tool: o,
    isSpaceDown: E,
    interaction: M,
    zoom: z.z
  }), an = (Kn) => {
    const Vn = Y.current, un = k.current, Vt = new Set(Vn);
    un && Vt.add(un), Vt.size !== 0 && J((Rn) => Rn.map((Rt) => Vt.has(Rt.id) ? { ...Rt, ...Kn } : Rt));
  }, {
    commitEditorHtml: Tn,
    applyFormat: Dn,
    applyList: On,
    onEditorKeyDown: _n,
    applyCustomFontFamily: Bn
  } = je({
    editorRef: v,
    editingId: w,
    setShapes: m,
    setAnnouncement: R,
    onDirty: l,
    patchSelected: an
  }), { renderEditor: Hn, renderShapeBody: Wn } = He({
    camera: z,
    editingId: w,
    isDarkMode: n,
    editorRef: v,
    commitEditorHtml: Tn,
    onEditorKeyDown: _n,
    setShapes: m,
    onDirty: l
  }), jn = M.kind === "marquee" ? M : null, { shapeById: cn, visiblePaintOrder: sn } = We({
    containerRef: c,
    shapesRef: Mt,
    shapes: x,
    camera: z,
    selected: $,
    editingId: w,
    boardIdentity: e
  });
  return /* @__PURE__ */ j(
    "div",
    {
      ref: c,
      onPointerDown: W,
      onPointerMove: jt,
      onPointerLeave: A,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": z.x,
      "data-canvas-camera-y": z.y,
      "data-canvas-camera-z": z.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: Ln,
        background: n ? _.canvasDark : _.canvasLight,
        backgroundImage: `radial-gradient(${Fn} 1px, transparent 1px)`,
        backgroundSize: `${rn}px ${rn}px`,
        backgroundPosition: `${-z.x * z.z}px ${-z.y * z.z}px`
      },
      children: [
        /* @__PURE__ */ C("style", { children: '.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas .canvas-rich-text ul>li::before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style="dash"]>li::before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li::before{content:counter(canvas-list-item) ". "}' }),
        /* @__PURE__ */ C(
          "div",
          {
            "aria-live": "polite",
            role: "status",
            className: "absolute w-px h-px overflow-hidden whitespace-nowrap",
            style: { clip: "rect(0 0 0 0)", clipPath: "inset(50%)" },
            children: L
          }
        ),
        /* @__PURE__ */ C(
          Me,
          {
            visiblePaintOrder: sn,
            selected: $,
            shapeById: cn,
            allShapes: Mt.current,
            camera: z,
            interaction: M,
            eraserPos: U,
            guides: I,
            marquee: jn,
            strokeColorOf: An
          }
        ),
        /* @__PURE__ */ C(
          _e,
          {
            visiblePaintOrder: sn,
            selected: $,
            editingId: w,
            camera: z,
            shapeById: cn,
            allShapes: Mt.current,
            peerCursors: h,
            isDarkMode: n,
            renderEditor: Hn,
            renderShapeBody: Wn,
            setEditingId: y,
            onBendHandleDown: vt,
            onOrthogonalSegmentHandleDown: Kt,
            onResizeHandleDown: H,
            onRotateHandleDown: Z,
            onConnectHandleDown: ht,
            onArrowEndpointDown: En
          }
        ),
        Nt && /* @__PURE__ */ C(
          Be,
          {
            shape: Nt,
            shapes: x,
            camera: z,
            canvasSize: { width: ((ln = c.current) == null ? void 0 : ln.clientWidth) ?? 380, height: ((dn = c.current) == null ? void 0 : dn.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!w,
            showPalette: D,
            installedFontFamilies: nt,
            setShowPalette: B,
            setActiveColor: K,
            patchSelected: an,
            applyFormat: Dn,
            applyList: On,
            applyCustomFontFamily: Bn
          }
        )
      ]
    }
  );
});
export {
  st as CANVAS_COLORS,
  Jn as CANVAS_COLOR_KEYS,
  ut as CANVAS_FONTS,
  yo as InfiniteCanvas,
  ne as SHAPE_TOOLS
};
