import { jsx as I, jsxs as j, Fragment as gt } from "react/jsx-runtime";
import Rn, { useRef as tt, useState as it, useLayoutEffect as Gt, useEffect as xt, useMemo as bt, useCallback as rt, useImperativeHandle as Un, forwardRef as Gn } from "react";
import { p as qn, i as nn, k as yn, a as st, v as Qn, c as ut, s as Zn, b as Jn, d as zt, h as te, S as ne } from "./document-CyKLUB7f.js";
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
}), gn = 12;
function qt(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function It(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function Pt(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function Et(t, e, n, o) {
  const l = Pt(t, e, n), d = Pt(t, e, o), v = Pt(n, o, t), b = Pt(n, o, e);
  return Math.abs(l) < 1e-6 && It(t, n, e) || Math.abs(d) < 1e-6 && It(t, o, e) || Math.abs(v) < 1e-6 && It(n, t, o) || Math.abs(b) < 1e-6 && It(n, e, o) ? !0 : l > 0 != d > 0 && v > 0 != b > 0;
}
function ve(t, e, n) {
  const o = Math.min(t.x, e.x), r = Math.max(t.x, e.x), l = Math.min(t.y, e.y), d = Math.max(t.y, e.y);
  if (r < n.minX || o > n.maxX || d < n.minY || l > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const v = { x: n.minX, y: n.minY }, b = { x: n.maxX, y: n.minY }, y = { x: n.maxX, y: n.maxY }, f = { x: n.minX, y: n.maxY };
  return Et(t, e, v, b) || Et(t, e, b, y) || Et(t, e, y, f) || Et(t, e, f, v);
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
      const v = (n - o) / d;
      return { x: t[l - 1].x + (t[l].x - t[l - 1].x) * v, y: t[l - 1].y + (t[l].y - t[l - 1].y) * v };
    }
    o += d;
  }
  const r = t[t.length - 1];
  return { x: r.x, y: r.y };
}
function Zt(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function xn(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([t, e]), l = Math.min(t, e), d = Math.max(t, e), v = gn * 1.2;
  for (const b of n) {
    const y = (o === "x" ? b.minX : b.minY) - v, f = (o === "x" ? b.maxX : b.maxY) + v, i = (u) => u >= l - v * 4 && u <= d + v * 4;
    i(y) && r.add(y), i(f) && r.add(f);
  }
  return [...r].sort((b, y) => Math.abs(b - t) - Math.abs(y - t));
}
function bn(t) {
  const e = [];
  for (const n of t) {
    const o = e[e.length - 1];
    (!o || o.x !== n.x || o.y !== n.y) && e.push(n);
  }
  return e;
}
function wn(t) {
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
  return wn(o);
}
function ye(t, e, n) {
  const o = t[e], r = t[e + 1];
  if (!o || !r || !Number.isFinite(n) || o.x !== r.x && o.y !== r.y) return [...t];
  const l = o.x === r.x ? [o, { x: n, y: o.y }, { x: n, y: r.y }, r] : [o, { x: o.x, y: n }, { x: r.x, y: n }, r];
  return wn([
    ...t.slice(0, e),
    ...l,
    ...t.slice(e + 2)
  ]);
}
function Ut(t, e) {
  const n = [], o = [];
  for (const l of t) {
    const d = bn(l);
    d.length < 2 || (me(d, e) ? o.push(d) : n.push(d));
  }
  const r = n.length > 0 ? n : o;
  return r.length === 0 ? [] : r.reduce((l, d) => Qt(d) < Qt(l) ? d : l);
}
function fn(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function Xt(t, e, n, o) {
  const r = Math.min(t, e), l = Math.max(t, e), d = Math.max(48, Math.abs(e - t) * 0.35, gn * 4);
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
    const v = Xt(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: v }, { x: e.x, y: v }, e];
  }
  if (n === "zigzag") {
    if (o) {
      const y = Xt(t.x, e.x, t.side, "x"), f = Xt(t.y, e.y, t.side, "y");
      return r ? [t, { x: y, y: t.y }, { x: y, y: f }, { x: l, y: f }, { x: l, y: e.y }, e] : [t, { x: y, y: t.y }, { x: y, y: f }, { x: e.x, y: f }, e];
    }
    const v = Xt(t.y, e.y, t.side, "y"), b = Xt(t.x, e.x, t.side, "x");
    return r ? [t, { x: t.x, y: v }, { x: b, y: v }, { x: b, y: e.y }, e] : [t, { x: t.x, y: v }, { x: b, y: v }, { x: b, y: d }, { x: e.x, y: d }, e];
  }
  return [];
}
function $n(t, e, n = [], o = "elbow", r = []) {
  if (r.length > 0) return pe(t, e, r);
  const l = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), d = e.side ?? (l === "e" || l === "w" ? "w" : "n"), v = l === "e" || l === "w", b = d === "e" || d === "w", y = xn(t.x, e.x, n, "x"), f = xn(t.y, e.y, n, "y"), i = [];
  if (v && b) {
    for (const a of y) i.push([t, { x: a, y: t.y }, { x: a, y: e.y }, e]);
    for (const a of f) i.push([t, { x: t.x, y: a }, { x: e.x, y: a }, e]);
  } else if (!v && !b) {
    for (const a of f) i.push([t, { x: t.x, y: a }, { x: e.x, y: a }, e]);
    for (const a of y) i.push([t, { x: a, y: t.y }, { x: a, y: e.y }, e]);
  } else if (v) {
    i.push([t, { x: e.x, y: t.y }, e]);
    for (const a of f)
      i.push([t, { x: t.x, y: a }, { x: e.x, y: a }, e]), i.push([t, { x: t.x, y: a }, e]);
    for (const a of y) i.push([t, { x: a, y: t.y }, { x: a, y: e.y }, e]);
  } else {
    i.push([t, { x: t.x, y: e.y }, e]);
    for (const a of f)
      i.push([t, { x: t.x, y: a }, e]), i.push([t, { x: t.x, y: a }, { x: e.x, y: a }, e]);
    for (const a of y) i.push([t, { x: a, y: t.y }, { x: a, y: e.y }, e]);
  }
  const u = Ut(i, n);
  if (o === "elbow") return u;
  if (o === "reverse") {
    const a = fn(u), X = Ut(i.filter((x) => fn(x) !== a), n);
    return X.length > 1 ? X : u;
  }
  const c = ge(t, e, o, v, b), h = Ut([c], n);
  return h.length > 1 ? h : u;
}
function be(t) {
  return t.length < 2 ? 0 : Zt(t[t.length - 2], t[t.length - 1]);
}
function Jt(t) {
  if (t.fillColor)
    try {
      return yn(t.fillColor);
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
      return yn(t.textColor);
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
      const o = e / 2, r = n / 2, l = Math.min(e, n) / 2, d = l * 0.4, v = [];
      for (let b = 0; b < 10; b++) {
        const y = Math.PI / 5 * b - Math.PI / 2, f = b % 2 === 0 ? l : d;
        v.push(`${o + f * Math.cos(y)},${r + f * Math.sin(y)}`);
      }
      return v.join(" ");
    }
    default:
      return "";
  }
}
function zn(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [r, l] = t[o], [d, v] = t[o + 1];
    e += ` Q ${r} ${l} ${(r + d) / 2} ${(l + v) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function mt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function kn(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], o = (r, l) => {
    r.childNodes.forEach((d) => {
      if (d.nodeType === Node.TEXT_NODE) {
        const f = d.textContent ?? "";
        f && n[n.length - 1].push({ text: f, ...l });
        return;
      }
      if (d.nodeType !== Node.ELEMENT_NODE) return;
      const v = d;
      if (v.tagName === "BR") {
        n.push([]);
        return;
      }
      const b = { bold: l.bold || v.tagName === "B" || v.tagName === "STRONG", italic: l.italic || v.tagName === "I" || v.tagName === "EM", underline: l.underline || v.tagName === "U" }, y = v.tagName === "DIV" || v.tagName === "P" || v.tagName === "LI";
      y && n[n.length - 1].length > 0 && n.push([]), o(v, b), y && n.push([]);
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
  return t.html ? kn(t.html).map((e) => e.map((n) => n.text).join("")).join(`
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
  ].map(([y, f]) => {
    const i = y - o.x, u = f - o.y;
    return [o.x + i * r - u * l, o.y + i * l + u * r];
  }), v = d.map((y) => y[0]), b = d.map((y) => y[1]);
  return { minX: Math.min(...v), minY: Math.min(...b), maxX: Math.max(...v), maxY: Math.max(...b) };
}
function Mn(t, e, n) {
  const o = t.rotation ?? 0;
  if (!o) return { x: e, y: n };
  const r = dt(t), l = Math.cos(-o), d = Math.sin(-o), v = e - r.x, b = n - r.y;
  return { x: r.x + v * l - b * d, y: r.y + v * d + b * l };
}
function Ft(t, e, n, o, r, l) {
  const d = r - n, v = l - o, b = d * d + v * v, y = b === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * d + (e - o) * v) / b));
  return Math.hypot(t - (n + y * d), e - (o + y * v));
}
function Tt(t, e, n, o, r, l) {
  const d = 8 / o;
  if (t.type === "arrow") {
    const y = ft(t, r ?? /* @__PURE__ */ new Map(), l);
    if (y.routing === "orthogonal" && y.pathPoints && y.pathPoints.length > 1) {
      for (let i = 1; i < y.pathPoints.length; i++) {
        const u = y.pathPoints[i - 1], c = y.pathPoints[i];
        if (Ft(e, n, u.x, u.y, c.x, c.y) <= d) return !0;
      }
      return !1;
    }
    if (y.bend === 0) return Ft(e, n, y.start.x, y.start.y, y.end.x, y.end.y) <= d;
    let f = y.start;
    for (let i = 1; i <= 16; i++) {
      const u = St(i / 16, y.start, y.control, y.end);
      if (Ft(e, n, f.x, f.y, u.x, u.y) <= d) return !0;
      f = u;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    for (let y = 1; y < t.points.length; y++) {
      const [f, i] = t.points[y - 1], [u, c] = t.points[y];
      if (Ft(e, n, f, i, u, c) <= d) return !0;
    }
    return !1;
  }
  const v = Mn(t, e, n), b = pt(t);
  if (t.type === "frame") {
    const y = v.x >= b.minX - d && v.x <= b.maxX + d && v.y >= b.minY - d && v.y <= b.maxY + d && (v.x <= b.minX + d || v.x >= b.maxX - d || v.y <= b.minY + d || v.y >= b.maxY - d), f = v.x >= b.minX - d && v.x <= b.maxX + d && v.y >= b.minY - 28 / o && v.y <= b.minY;
    return y || f;
  }
  return v.x >= b.minX - d && v.x <= b.maxX + d && v.y >= b.minY - d && v.y <= b.maxY + d;
}
function $t(t, e, n) {
  const o = pt(t), r = (o.minX + o.maxX) / 2, l = (o.minY + o.maxY) / 2, d = e - r, v = n - l;
  if (d === 0 && v === 0) return { x: r, y: l, side: "e" };
  const b = (o.maxX - o.minX) / 2, y = (o.maxY - o.minY) / 2, f = b === 0 ? 1 / 0 : Math.abs(b / d), i = y === 0 ? 1 / 0 : Math.abs(y / v);
  return f <= i ? { x: r + d * f, y: l + v * f, side: d >= 0 ? "e" : "w" } : { x: r + d * i, y: l + v * i, side: v >= 0 ? "s" : "n" };
}
function Xn(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([e.id, n, o]);
  return t.filter((l) => !r.has(l.id)).map((l) => {
    const d = et(l);
    return { minX: d.minX - Lt, minY: d.minY - Lt, maxX: d.maxX + Lt, maxY: d.maxY + Lt };
  }).filter((l) => l.maxX > l.minX && l.maxY > l.minY);
}
function ft(t, e, n = []) {
  const o = t.fromId ? e.get(t.fromId) : void 0, r = t.toId ? e.get(t.toId) : void 0;
  let l = { x: t.x, y: t.y }, d = { x: t.x + t.w, y: t.y + t.h };
  if (o && r) {
    const h = dt(o), a = dt(r);
    l = $t(o, a.x, a.y), d = $t(r, h.x, h.y);
  } else o ? l = $t(o, d.x, d.y) : r && (d = $t(r, l.x, l.y));
  const v = (l.x + d.x) / 2, b = (l.y + d.y) / 2, y = t.bend ?? 0;
  let f = { x: v, y: b };
  if (y !== 0) {
    const h = d.x - l.x, a = d.y - l.y, X = Math.hypot(h, a) || 1;
    f = { x: v + -a / X * y, y: b + h / X * y };
  }
  const i = !!(o || r), u = t.routing ?? (i ? "orthogonal" : y !== 0 ? "curved" : "straight");
  if (u !== "orthogonal") return { start: l, end: d, control: f, bend: y, routing: u };
  const c = Xn(n, t, o == null ? void 0 : o.id, r == null ? void 0 : r.id);
  return {
    start: l,
    end: d,
    control: f,
    bend: y,
    routing: u,
    pathPoints: bn($n(l, d, c, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function St(t, e, n, o) {
  const r = 1 - t;
  return { x: r * r * e.x + 2 * r * t * n.x + t * t * o.x, y: r * r * e.y + 2 * r * t * n.y + t * t * o.y };
}
function Yn(t, e, n, o, r) {
  const l = [];
  let d = 0;
  for (const v of t) {
    if (v.type !== "draw" || !v.points) {
      if (Tt(v, e, n, r)) continue;
      l.push(v);
      continue;
    }
    const b = [];
    let y = [];
    for (const [i, u] of v.points)
      Math.hypot(i - e, u - n) <= o / r ? (y.length > 1 && b.push(y), y = []) : y.push([i, u]);
    if (y.length > 1 && b.push(y), b.length === 0) continue;
    const f = pt(v);
    b.forEach((i) => l.push({ ...v, id: `${v.id}-e${d++}`, points: i, x: f.minX, y: f.minY, w: f.maxX - f.minX, h: f.maxY - f.minY }));
  }
  return l;
}
function ze(t, e, n) {
  const o = 6 / n;
  let r = null, l = null;
  const d = [], v = [t.minX, (t.minX + t.maxX) / 2, t.maxX], b = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const y of e) {
    const f = et(y), i = [f.minX, (f.minX + f.maxX) / 2, f.maxX], u = [f.minY, (f.minY + f.maxY) / 2, f.maxY];
    for (const c of v) for (const h of i) {
      const a = h - c;
      Math.abs(a) <= o && (!r || Math.abs(a) < Math.abs(r.delta)) && (r = { delta: a, at: h });
    }
    for (const c of b) for (const h of u) {
      const a = h - c;
      Math.abs(a) <= o && (!l || Math.abs(a) < Math.abs(l.delta)) && (l = { delta: a, at: h });
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
  guides: v,
  marquee: b,
  strokeColorOf: y
}) {
  return /* @__PURE__ */ I("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ j("g", { transform: `scale(${r.z}) translate(${-r.x}, ${-r.y})`, children: [
    t.map((f) => {
      if (f.type === "draw" && f.points)
        return /* @__PURE__ */ I(
          "path",
          {
            "data-canvas-vector-shape-id": f.id,
            "data-canvas-vector-shape-type": "draw",
            d: zn(f.points),
            fill: "none",
            stroke: e.has(f.id) ? _.blue : y(f),
            strokeWidth: 3 / r.z,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          f.id
        );
      if (f.type !== "arrow") return null;
      const i = e.has(f.id) ? _.blue : y(f), u = ft(f, n, o), c = 14 / r.z, h = 5 / r.z, a = u.routing === "orthogonal" && u.pathPoints ? u.pathPoints : null, X = a && a.length > 1;
      let x, g;
      if (X)
        x = qt(a), g = be(a);
      else if (u.routing === "curved") {
        x = `M ${u.start.x} ${u.start.y} Q ${u.control.x} ${u.control.y} ${u.end.x} ${u.end.y}`;
        const z = St(0.94, u.start, u.control, u.end);
        g = Math.atan2(u.end.y - z.y, u.end.x - z.x);
      } else
        x = `M ${u.start.x} ${u.start.y} L ${u.end.x} ${u.end.y}`, g = Math.atan2(u.end.y - u.start.y, u.end.x - u.start.x);
      const $ = X && a.length >= 2 ? Zt(a[0], a[1]) : u.routing === "orthogonal" && u.start.side ? u.start.side === "e" ? 0 : u.start.side === "w" ? Math.PI : u.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Zt(u.start, u.end), s = f.strokeStyle === "dashed" ? `${8 / r.z} ${5 / r.z}` : f.strokeStyle === "dotted" ? `${1.5 / r.z} ${4 / r.z}` : void 0, m = (z, Y, w, p) => z === "dot" ? /* @__PURE__ */ I("circle", { cx: Y, cy: w, r: h, fill: i }) : z === "none" ? null : /* @__PURE__ */ I(
        "polygon",
        {
          points: `${Y},${w} ${Y - c * Math.cos(p - 0.4)},${w - c * Math.sin(p - 0.4)} ${Y - c * Math.cos(p + 0.4)},${w - c * Math.sin(p + 0.4)}`,
          fill: i
        }
      );
      return /* @__PURE__ */ j("g", { "data-canvas-vector-shape-id": f.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": u.routing, children: [
        /* @__PURE__ */ I("path", { d: x, fill: "none", stroke: i, strokeWidth: 2.5 / r.z, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: s }),
        m(f.arrowEnd ?? "arrow", u.end.x, u.end.y, g),
        m(f.arrowStart ?? "none", u.start.x, u.start.y, $ + Math.PI)
      ] }, f.id);
    }),
    l.kind === "connect" && l.fromId !== void 0 && l.toX !== void 0 && l.toY !== void 0 && (() => {
      const f = n.get(l.fromId);
      if (!f) return null;
      const i = $t(f, l.toX, l.toY), u = l.hoverId ? n.get(l.hoverId) : null, c = u ? $t(u, i.x, i.y) : { x: l.toX, y: l.toY }, h = u ? $n(i, c, Xn(o, { id: "__preview" }, f.id, u.id)) : [i, c];
      return /* @__PURE__ */ j("g", { children: [
        /* @__PURE__ */ I("path", { d: qt(h), stroke: _.blue, strokeWidth: 2 / r.z, strokeDasharray: `${5 / r.z} ${4 / r.z}` }),
        u ? /* @__PURE__ */ I("rect", { x: et(u).minX - 3 / r.z, y: et(u).minY - 3 / r.z, width: et(u).maxX - et(u).minX + 6 / r.z, height: et(u).maxY - et(u).minY + 6 / r.z, fill: "none", stroke: _.blue, strokeWidth: 2 / r.z, rx: 6 / r.z }) : /* @__PURE__ */ I("circle", { cx: c.x, cy: c.y, r: 5 / r.z, fill: _.blue })
      ] });
    })(),
    d && /* @__PURE__ */ I("circle", { cx: d.x, cy: d.y, r: ke / r.z, fill: _.roseSoft, stroke: _.rose, strokeWidth: 1 / r.z }),
    v.map((f, i) => /* @__PURE__ */ I("line", { x1: f.x1, y1: f.y1, x2: f.x2, y2: f.y2, stroke: _.pink, strokeWidth: 1 / r.z, strokeDasharray: `${4 / r.z} ${4 / r.z}` }, `guide-${i}`)),
    b && /* @__PURE__ */ I("rect", { x: Math.min(b.startX, b.curX), y: Math.min(b.startY, b.curY), width: Math.abs(b.curX - b.startX), height: Math.abs(b.curY - b.startY), fill: _.marqueeFill, stroke: _.blue, strokeWidth: 1 / r.z })
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
function Sn(t) {
  return Ye.has(t.trim().toLowerCase());
}
function Cn(t) {
  const e = _t(t);
  return e ? Sn(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function Ce(t) {
  return _t(t).split(",").map((e) => e.trim()).filter(Boolean).map(Cn).filter(Boolean).join(", ");
}
function Nn(t) {
  return _t(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Yt(t) {
  return t.split(",").map((e) => _t(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !Sn(e));
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
    const n = Cn(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : At;
}
const Ie = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, Pe = 24, Ee = 28, In = 720;
function at(t) {
  return t.fontSize ?? Ie[t.type] ?? 14;
}
function ct(t) {
  var e;
  if (!t.fontFamily) return ut.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = Nn(Zn(t.customFontFamily ?? ""));
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
    w: Math.min(In, Math.max(Pe, Math.ceil(t))),
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
  isDarkMode: v,
  renderEditor: b,
  renderShapeBody: y,
  setEditingId: f,
  onBendHandleDown: i,
  onOrthogonalSegmentHandleDown: u,
  onResizeHandleDown: c,
  onRotateHandleDown: h,
  onConnectHandleDown: a,
  onArrowEndpointDown: X
}) {
  return /* @__PURE__ */ j(gt, { children: [
    /* @__PURE__ */ I("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((x) => {
      if (x.type === "draw") return null;
      if (x.type === "arrow") {
        const s = ft(x, r, l), m = s.routing === "orthogonal" && s.pathPoints ? en(s.pathPoints) : s.routing === "curved" ? St(0.5, s.start, s.control, s.end) : { x: (s.start.x + s.end.x) / 2, y: (s.start.y + s.end.y) / 2 }, z = n === x.id, Y = Dt(x), w = e.has(x.id), p = Ot(x).trim(), M = Y || (w ? "관계 입력" : "");
        return !M && !z ? null : /* @__PURE__ */ j(Rn.Fragment, { children: [
          /* @__PURE__ */ I("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: m.x - 90, top: m.y - 18, width: 180, height: 36 }, onDoubleClick: (k) => {
            k.stopPropagation(), f(x.id);
          }, children: (M || z) && /* @__PURE__ */ I(
            "div",
            {
              "data-canvas-arrow-label": "true",
              "aria-label": p ? `관계 설명: ${p}` : "관계 설명 입력",
              title: z ? void 0 : p ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
              className: `px-3 py-1 rounded-full border-2 shadow-sm ${v ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
              style: {
                fontSize: at(x),
                fontFamily: ct(x),
                maxWidth: "100%",
                minWidth: z ? 120 / o.z : void 0,
                minHeight: z ? 28 / o.z : void 0,
                color: x.textColor
              },
              children: z ? b("text-center whitespace-nowrap") : /* @__PURE__ */ I("span", { dangerouslySetInnerHTML: { __html: M } }, "canvas-view")
            }
          ) }),
          w && e.size === 1 && s.routing === "orthogonal" && s.pathPoints && s.pathPoints.length > 2 ? s.pathPoints.slice(0, -1).map((k, C) => {
            var O;
            const N = (O = s.pathPoints) == null ? void 0 : O[C + 1];
            if (!N) return null;
            const E = { x: (k.x + N.x) / 2, y: (k.y + N.y) / 2 };
            return /* @__PURE__ */ I("div", { "data-canvas-arrow-segment-handle": C, onPointerDown: (P) => u(P, x, C), title: "드래그해서 직각선 구간 이동", className: "absolute z-20 rounded-sm bg-white border-2 border-blue-600", style: { width: 12 / o.z, height: 12 / o.z, left: E.x - 6 / o.z, top: E.y - 6 / o.z, cursor: k.x === N.x ? "ew-resize" : "ns-resize" } }, `segment-${C}`);
          }) : w && e.size === 1 && s.routing === "curved" && /* @__PURE__ */ I("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (k) => i(k, x), title: "드래그해서 곡선 휘기", className: "absolute z-20 rounded-full bg-white border-2 border-blue-600", style: { width: 10 / o.z, height: 10 / o.z, left: `calc(50% - ${5 / o.z}px)`, top: -10 / o.z, cursor: "grab" } }),
          w && e.size === 1 && ["start", "end"].map((k) => {
            const C = k === "start" ? s.start : s.end;
            return /* @__PURE__ */ I(
              "div",
              {
                "data-canvas-arrow-endpoint": k,
                onPointerDown: (N) => X(N, x, k),
                title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)",
                className: "absolute z-20 bg-white border-2 border-blue-600 rounded-full",
                style: { width: 12 / o.z, height: 12 / o.z, left: C.x - 6 / o.z, top: C.y - 6 / o.z, cursor: "grab" }
              },
              k
            );
          })
        ] }, x.id);
      }
      const g = e.has(x.id), $ = pt(x);
      return /* @__PURE__ */ j(
        "div",
        {
          "data-canvas-shape-id": x.id,
          "data-canvas-shape-type": x.type,
          "data-canvas-selected": g ? "true" : void 0,
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
          style: { left: $.minX, top: $.minY, width: $.maxX - $.minX, height: $.maxY - $.minY, transform: x.rotation ? `rotate(${x.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (s) => {
            s.stopPropagation(), De.has(x.type) && f(x.id);
          },
          children: [
            y(x),
            g && /* @__PURE__ */ j(gt, { children: [
              /* @__PURE__ */ I("div", { className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${_.blue}` } }),
              e.size === 1 && /* @__PURE__ */ j(gt, { children: [
                ["nw", "ne", "sw", "se"].map((s) => /* @__PURE__ */ I("div", { "data-canvas-resize-handle": s, onPointerDown: (m) => c(m, x, s), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${s}-resize`, left: s.includes("w") ? -5 / o.z : void 0, right: s.includes("e") ? -5 / o.z : void 0, top: s.includes("n") ? -5 / o.z : void 0, bottom: s.includes("s") ? -5 / o.z : void 0 } }, s)),
                /* @__PURE__ */ I("div", { onPointerDown: (s) => h(s, x), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                Oe.has(x.type) && ["n", "s", "w", "e"].map((s) => /* @__PURE__ */ I("div", { onPointerDown: (m) => a(m, x), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...s === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : s === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : s === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${s}`))
              ] })
            ] })
          ]
        },
        x.id
      );
    }) }),
    l.filter((x) => x.type === "arrow" && e.has(x.id)).map((x) => {
      const g = et(x);
      return /* @__PURE__ */ I("div", { className: "absolute pointer-events-none border-2 border-blue-600/60 rounded", style: { left: (g.minX - o.x) * o.z - 4, top: (g.minY - o.y) * o.z - 4, width: (g.maxX - g.minX) * o.z + 8, height: (g.maxY - g.minY) * o.z + 8 } }, `sel-${x.id}`);
    }),
    d == null ? void 0 : d.map((x) => /* @__PURE__ */ j("div", { className: "absolute pointer-events-none z-40", style: { left: (x.x - o.x) * o.z, top: (x.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ I("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ I("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: x.color, stroke: _.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ I("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: x.color }, children: x.name })
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
  installedFontFamilies: v,
  setShowPalette: b,
  setActiveColor: y,
  patchSelected: f,
  applyFormat: i,
  applyList: u,
  applyCustomFontFamily: c
}) {
  var G, nt;
  const h = r ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", a = t.type === "draw", X = a ? t.color ? st[t.color].border : _.ink : wt(t), x = tt(null), [g, $] = it({ width: 380, height: 260 });
  Gt(() => {
    const S = x.current;
    if (!S) return;
    const F = () => {
      const q = Math.max(1, Math.ceil(S.getBoundingClientRect().width)), J = Math.max(1, Math.ceil(S.getBoundingClientRect().height));
      $((ot) => ot.width === q && ot.height === J ? ot : { width: q, height: J });
    };
    if (F(), typeof ResizeObserver > "u") return;
    const V = new ResizeObserver(F);
    return V.observe(S), () => V.disconnect();
  }, [l, v.length, r, t, d]);
  const s = g.width, m = g.height, z = et(t), Y = (z.minX - n.x) * n.z, w = (z.minY - n.y) * n.z, p = (z.maxX - n.x) * n.z, M = (z.maxY - n.y) * n.z, k = Math.max(8, o.width - s - 8), C = Math.max(8, o.height - m - 8), N = (S, F) => ({ left: Math.min(Math.max(8, S), k), top: Math.min(Math.max(8, F), C) }), E = [
    N((Y + p) / 2 - s / 2, w - m - 12),
    N((Y + p) / 2 - s / 2, M + 12),
    N((o.width - s) / 2, 12),
    N(Y - s - 12, w + (M - w - m) / 2),
    N(p + 12, w + (M - w - m) / 2)
  ], O = e.map((S) => {
    const F = et(S);
    return { left: (F.minX - n.x) * n.z, top: (F.minY - n.y) * n.z, right: (F.maxX - n.x) * n.z, bottom: (F.maxY - n.y) * n.z };
  });
  if (t.type === "arrow") {
    const S = ft(t, new Map(e.map((J) => [J.id, J])), e), F = S.routing === "orthogonal" && S.pathPoints ? en(S.pathPoints) : { x: (S.start.x + S.end.x) / 2, y: (S.start.y + S.end.y) / 2 }, V = 180 * n.z, q = 36 * n.z;
    O.push({
      left: (F.x - n.x) * n.z - V / 2,
      top: (F.y - n.y) * n.z - q / 2,
      right: (F.x - n.x) * n.z + V / 2,
      bottom: (F.y - n.y) * n.z + q / 2
    });
  }
  const P = E[0], T = (S, F) => {
    const V = Math.max(0, Math.min(S.left + s, F.right) - Math.max(S.left, F.left)), q = Math.max(0, Math.min(S.top + m, F.bottom) - Math.max(S.top, F.top));
    return V * q;
  }, L = ((G = E.map((S) => ({
    candidate: S,
    overlap: O.reduce((F, V) => F + T(S, V), 0),
    distance: Math.hypot(S.left - P.left, S.top - P.top)
  })).sort((S, F) => S.overlap - F.overlap || S.distance - F.distance)[0]) == null ? void 0 : G.candidate) ?? P, R = at(t), D = t.type === "arrow" && !!((nt = t.orthogonalWaypoints) != null && nt.length), B = t.type === "arrow" ? t.arrowStart ?? "none" : "none", U = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", Q = (S, F, V, q, J = q) => /* @__PURE__ */ I("button", { type: "button", title: q, "aria-label": J, onClick: V, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${F ? "bg-blue-600 text-white" : h}`, children: S }), K = (S) => /* @__PURE__ */ I("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: S });
  return /* @__PURE__ */ j("div", { ref: x, "data-canvas-inspector": a ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${r ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: L.left, top: L.top }, onPointerDown: (S) => {
    S.stopPropagation();
    const F = S.target instanceof Element ? S.target : null;
    F != null && F.closest("input, select, textarea") || S.preventDefault();
  }, onClick: (S) => S.stopPropagation(), children: [
    /* @__PURE__ */ j("div", { className: "relative flex items-center gap-1.5 pointer-events-none", children: [
      /* @__PURE__ */ I("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: a ? "그리기" : "색상" }),
      /* @__PURE__ */ I("button", { type: "button", title: a ? "그리기 색상 팔레트" : "색상 팔레트", "aria-label": a ? "그리기 색상" : "도형 색상", onClick: () => b((S) => !S), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${r ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ I(ee, { className: "w-4 h-4", style: { color: X } }) }),
      d && /* @__PURE__ */ j("div", { className: `pointer-events-auto absolute left-0 top-10 z-50 flex items-center gap-1.5 p-2 rounded-xl border shadow-xl ${r ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        Jn.map((S) => /* @__PURE__ */ I("button", { type: "button", title: st[S].label, "aria-label": `색 ${st[S].label}`, onClick: () => {
          y(S), f({ color: S, fillColor: void 0 }), b(!1);
        }, className: "w-5 h-5 rounded-full border", style: { background: st[S].bg, borderColor: st[S].border, outline: t.color === S && !t.fillColor ? `2px solid ${_.blue}` : void 0, outlineOffset: 1 } }, S)),
        !a && /* @__PURE__ */ I("label", { title: "배경 색 (자유 선택)", className: "w-5 h-5 rounded-full border relative overflow-hidden cursor-pointer flex items-center justify-center", style: { background: t.fillColor ?? Jt(t), outline: t.fillColor ? `2px solid ${_.blue}` : void 0, outlineOffset: 1 }, children: /* @__PURE__ */ I("input", { type: "color", value: t.fillColor ?? Jt(t), onChange: (S) => {
          f({ fillColor: S.target.value }), b(!1);
        }, className: "absolute inset-0 opacity-0 cursor-pointer" }) })
      ] })
    ] }),
    !a && /* @__PURE__ */ j(gt, { children: [
      /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ I("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ j("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: wt(t), color: _.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ I("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ I("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? wt(t), onChange: (S) => f({ textColor: S.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ j("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${r ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ I("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ I("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => f({ fontSize: Math.max(8, R - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${h}`, children: /* @__PURE__ */ I(oe, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ I("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: R }),
          /* @__PURE__ */ I("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => f({ fontSize: Math.min(96, R + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${h}`, children: /* @__PURE__ */ I(re, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ j("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${r ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ I("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (S) => {
            const F = Le(S.target.value);
            f(F === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: F, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${r ? "text-slate-200" : "text-slate-700"}`, children: Xe.map((S) => /* @__PURE__ */ I("option", { value: S, className: r ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: ut[S].label }, S)) }),
          /* @__PURE__ */ I(ie, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ j(gt, { children: [
          /* @__PURE__ */ I("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (S) => c(S.target.value), onChange: (S) => S.currentTarget.value && c(S.currentTarget.value), onKeyDown: (S) => {
            S.key === "Enter" && (S.preventDefault(), c(S.currentTarget.value));
          }, onDoubleClick: (S) => S.stopPropagation(), onPointerDown: (S) => S.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${r ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ I("datalist", { id: `canvas-font-families-${t.id}`, children: v.map((S) => /* @__PURE__ */ I("option", { value: S }, S)) })
        ] })
      ] }),
      /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${r ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ I("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ I("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", ae, "왼쪽 정렬"], ["center", ce, "가운데 정렬"], ["right", se, "오른쪽 정렬"]].map(([S, F, V]) => /* @__PURE__ */ I("button", { type: "button", "aria-label": V, title: V, onClick: () => f({ textAlign: S }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${lt(t) === S ? "bg-blue-600 text-white shadow-sm" : h}`, children: /* @__PURE__ */ I(F, { className: "w-4 h-4" }) }, S)) }),
        l && /* @__PURE__ */ j(gt, { children: [
          /* @__PURE__ */ I("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ I("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", le, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", de, "번호 목록"]].map(([S, F, V]) => /* @__PURE__ */ I("button", { type: "button", onClick: () => u(S), "aria-label": V, title: V, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${h}`, children: F ? /* @__PURE__ */ I(F, { className: "w-4 h-4" }) : /* @__PURE__ */ I("span", { className: "text-base leading-none", children: "–" }) }, S)) }),
          /* @__PURE__ */ I("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: ue, label: "굵게" }, { cmd: "italic", Icon: xe, label: "기울임" }, { cmd: "underline", Icon: fe, label: "밑줄" }].map(({ cmd: S, Icon: F, label: V }) => /* @__PURE__ */ I("button", { type: "button", onClick: () => i(S), "aria-label": V, title: V, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${h}`, children: /* @__PURE__ */ I(F, { className: "w-4 h-4" }) }, S)) })
        ] })
      ] }),
      (t.type === "card" || t.type === "arrow") && /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${r ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ j(gt, { children: [
          /* @__PURE__ */ I("div", { className: `w-px h-6 ${r ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ I("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (S) => S.stopPropagation(), onChange: (S) => f({ category: S.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${r ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            K("경로"),
            Q("직선", (t.routing ?? "straight") === "straight", () => f({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            Q("직각", t.routing === "orthogonal", () => f({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            Q("곡선", (t.routing ?? "") === "curved", () => f({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            D && Q("자동", !1, () => f({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            K("선"),
            Q("—", (t.strokeStyle ?? "solid") === "solid", () => f({ strokeStyle: "solid" }), "실선"),
            Q("- -", t.strokeStyle === "dashed", () => f({ strokeStyle: "dashed" }), "파선"),
            Q("···", t.strokeStyle === "dotted", () => f({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            K("시작"),
            Q(B === "none" ? "○" : B === "dot" ? "●" : "◀", B !== "none", () => f({ arrowStart: B === "none" ? "arrow" : B === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${B === "none" ? "없음" : B === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            K("끝"),
            Q(U === "none" ? "○" : U === "dot" ? "●" : "▶", U !== "none", () => f({ arrowEnd: U === "arrow" ? "dot" : U === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${U === "none" ? "없음" : U === "dot" ? "점" : "화살표"}`)
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
  onDirty: v
}) {
  const b = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", y = (i, u) => /* @__PURE__ */ I(
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
  return { renderEditor: y, renderShapeBody: (i) => {
    const u = st[i.color ?? "blue"], c = e === i.id, h = Dt(i);
    if (i.type === "frame")
      return /* @__PURE__ */ I(
        "div",
        {
          className: "w-full h-full rounded",
          style: { border: `${2 / t.z}px solid ${n ? _.slate600 : _.slate400}` },
          children: /* @__PURE__ */ I(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? _.slate400 : _.muted
              },
              children: c ? y("", { fontSize: 13 / t.z }) : Ot(i) || "프레임"
            }
          )
        }
      );
    if (i.type === "note")
      return /* @__PURE__ */ I(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: u.bg, borderTop: `6px solid ${u.border}`, color: u.text },
          children: c ? y("font-medium", { color: wt(i), fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }) : h ? /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: wt(i), fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }, dangerouslySetInnerHTML: { __html: h } }, "canvas-view") : /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: wt(i), fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }, children: /* @__PURE__ */ I("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
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
                onPointerDown: (m) => m.stopPropagation(),
                onDoubleClick: (m) => m.stopPropagation(),
                onBlur: (m) => {
                  const Y = (m.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  d((w) => w.map((p) => p.id === i.id ? { ...p, category: Y } : p)), v();
                },
                onKeyDown: (m) => {
                  m.key === "Enter" && (m.preventDefault(), m.currentTarget.blur());
                },
                children: [
                  "[ ",
                  i.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            c ? y("flex-1 font-medium", { color: i.textColor ?? _.white, fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }) : /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: i.textColor ?? _.white, fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }, dangerouslySetInnerHTML: { __html: h } }, "canvas-view"),
            /* @__PURE__ */ j("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              i.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (i.type === "text") {
      const s = n ? "text-slate-100" : "text-slate-900", m = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${s}`,
        style: { color: i.textColor, fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }
      };
      return c ? y(`font-medium ${s}`, m.style) : h ? /* @__PURE__ */ I(
        "div",
        {
          "data-canvas-text-view": !0,
          ...m,
          dangerouslySetInnerHTML: { __html: h }
        },
        "canvas-view"
      ) : /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, ...m, children: /* @__PURE__ */ I("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (i.type === "image") {
      const s = tn(i.src);
      return s ? /* @__PURE__ */ I(
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
        /* @__PURE__ */ I("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${i.w} ${i.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ I("polygon", { points: $e(i.type, i.w, i.h), fill: a, stroke: X, strokeWidth: 2, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ I("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: x }, children: c ? y("font-medium", { color: x, fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }) : /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }, dangerouslySetInnerHTML: { __html: h } }, "canvas-view") })
      ] });
    const $ = tn(i.src);
    return /* @__PURE__ */ I(
      "div",
      {
        className: `w-full h-full flex items-center justify-center p-3 ${i.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: a, border: `2px solid ${X}`, color: x },
        children: c ? y("font-medium", { color: x, fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }) : /* @__PURE__ */ j("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: at(i), fontFamily: ct(i), textAlign: lt(i) }, children: [
          /* @__PURE__ */ I("div", { dangerouslySetInnerHTML: { __html: h } }),
          $ && /* @__PURE__ */ I(
            "a",
            {
              href: $,
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
  const [v, b] = it({ width: 0, height: 0 });
  xt(() => {
    const h = t.current;
    if (!h) return;
    let a = -1, X = -1;
    const x = ($ = h.clientWidth, s = h.clientHeight) => {
      $ === a && s === X || (a = $, X = s, b({ width: $, height: s }));
    };
    if (x(), typeof ResizeObserver < "u") {
      const $ = new ResizeObserver((s) => {
        var z;
        const m = (z = s[0]) == null ? void 0 : z.contentRect;
        x((m == null ? void 0 : m.width) ?? h.clientWidth, (m == null ? void 0 : m.height) ?? h.clientHeight);
      });
      return $.observe(h), () => $.disconnect();
    }
    const g = () => x();
    return window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, [d, t]);
  const y = bt(() => new Map(n.map((h) => [h.id, h])), [n]), f = bt(
    () => [...n].sort((h, a) => (h.type === "frame" ? -1 : 0) - (a.type === "frame" ? -1 : 0)),
    [n]
  ), i = bt(() => {
    if (!t.current || v.width <= 0 || v.height <= 0) return null;
    const h = 200 / o.z;
    return {
      minX: o.x - h,
      minY: o.y - h,
      maxX: o.x + v.width / o.z + h,
      maxY: o.y + v.height / o.z + h
    };
  }, [o, t, v]), u = rt((h) => {
    if (!i) return !1;
    if (h.id === l || r.has(h.id)) return !0;
    if (h.type === "arrow") {
      const X = ft(h, y, e.current), g = (X.routing === "orthogonal" ? X.pathPoints : null) ?? [X.start, X.end], $ = Math.min(...g.map((Y) => Y.x)), s = Math.max(...g.map((Y) => Y.x)), m = Math.min(...g.map((Y) => Y.y)), z = Math.max(...g.map((Y) => Y.y));
      return s >= i.minX && $ <= i.maxX && z >= i.minY && m <= i.maxY;
    }
    const a = et(h);
    return a.maxX >= i.minX && a.minX <= i.maxX && a.maxY >= i.minY && a.minY <= i.maxY;
  }, [l, r, y, e, i]), c = bt(
    () => f.filter(u),
    [u, f]
  );
  return { shapeById: y, visiblePaintOrder: c };
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
    let h;
    try {
      h = nn(c.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const a = c.scrollHeight;
    n((X) => X.map((x) => {
      if (x.id !== e) return x;
      const g = { ...x, html: h, text: void 0 };
      if (x.type === "text")
        return x.manualSize ? g : { ...g, ...Te(c, x) };
      if (x.type === "arrow") return g;
      const $ = x.type === "note" ? 32 : x.type === "card" ? 96 : (
        // category header + type footer
        (x.type === "frame", 24)
      ), s = Math.max(x.h, a + $);
      return { ...g, h: s };
    })), r();
  }, [e, r]), v = (c) => {
    var h;
    (h = t.current) == null || h.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(c), d();
  }, b = () => {
    var X;
    const c = (X = window.getSelection()) == null ? void 0 : X.anchorNode, h = c instanceof Element ? c : c == null ? void 0 : c.parentElement, a = h == null ? void 0 : h.closest("ul, ol");
    return a instanceof HTMLElement ? a : null;
  }, y = (c, h, a) => {
    const X = document.createElement(h);
    for (; c.firstChild; ) X.append(c.firstChild);
    return c.replaceWith(X), X;
  }, f = (c) => {
    const h = t.current;
    if (!h) return;
    h.focus();
    const a = b();
    if (c === "number")
      if ((a == null ? void 0 : a.tagName) === "OL")
        a.removeAttribute("data-list-style");
      else if ((a == null ? void 0 : a.tagName) === "UL")
        y(a, "ol");
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
  return { commitEditorHtml: d, applyFormat: v, applyList: f, onEditorKeyDown: (c) => {
    if (c.key === "Tab") {
      c.preventDefault(), document.execCommand(c.shiftKey ? "outdent" : "indent"), d();
      return;
    }
    if (c.key === " ") {
      const h = window.getSelection();
      if (h && h.isCollapsed && h.anchorNode) {
        const a = h.anchorNode, X = a.textContent || "", x = h.anchorOffset, g = X.slice(0, x).trim();
        if (!b()) {
          if (g === "-" || g === "–") {
            c.preventDefault(), a.textContent = X.slice(x), f("dash");
            return;
          }
          if (g === "*") {
            c.preventDefault(), a.textContent = X.slice(x), f("bullet");
            return;
          }
          if (g === "1.") {
            c.preventDefault(), a.textContent = X.slice(x), f("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (c) => {
    const h = Nn(c);
    if (!h) {
      l({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    l({
      fontFamily: "custom",
      customFontFamily: h
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
  const l = tt(null), d = tt(null), [v, b] = it([]), y = n !== void 0 && o !== void 0, f = tt(/* @__PURE__ */ new WeakMap()), i = bt(() => {
    const A = f.current;
    return (y ? n ?? [] : v).map((W) => {
      let H = A.get(W);
      return H === void 0 && (H = on(W), A.set(W, H)), H;
    }).filter((W) => W !== null);
  }, [y, n, v]), u = tt(o);
  u.current = o;
  const c = rt((A) => {
    const W = u.current;
    if (!W) {
      b(A);
      return;
    }
    W(typeof A == "function" ? A : () => A);
  }, []), [h, a] = it({ x: -400, y: -300, z: 1 }), [X, x] = it(/* @__PURE__ */ new Set()), [g, $] = it(null), [s, m] = it({ kind: "none" }), [z, Y] = it(!1), [w, p] = it([]), [M, k] = it(""), [C, N] = it(!1), [E, O] = it(null), [P, T] = it("blue"), [L, R] = it(At), D = tt(P);
  D.current = P;
  const B = tt([]), U = tt([]), Q = tt(null), K = tt(/* @__PURE__ */ new Map()), G = tt(i), nt = tt(h), S = tt(e), F = tt(X), V = tt(g);
  G.current = i, nt.current = h, S.current = e, F.current = X, V.current = g;
  const q = tt({ kind: "none" }), J = rt((A) => {
    q.current = A, m(A);
  }, []), ot = rt((A) => {
    F.current = A, x(A);
  }, []);
  Gt(() => {
    var W;
    const A = /* @__PURE__ */ new Set();
    F.current = A, V.current = null, K.current.clear(), B.current = [], U.current = [], Q.current = null, J({ kind: "none" }), x(A), $(null), Y(!1), p([]), O(null), k(""), (W = l.current) == null || W.focus();
  }, [J, t]), xt(() => {
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
  const Ct = (g ? i.find((A) => A.id === g) : void 0) !== void 0;
  Gt(() => {
    if (!g || !Ct) return;
    const A = () => {
      const H = d.current, Z = G.current.find((Kt) => Kt.id === g);
      if (!H || !Z || (H.dataset.seeded !== g && (H.innerHTML = Dt(Z), H.dataset.seeded = g), document.activeElement === H)) return;
      H.focus();
      const ht = document.createRange();
      ht.selectNodeContents(H), ht.collapse(!1);
      const vt = window.getSelection();
      vt == null || vt.removeAllRanges(), vt == null || vt.addRange(ht);
    };
    A();
    const W = requestAnimationFrame(A);
    return () => cancelAnimationFrame(W);
  }, [g, Ct]);
  const kt = rt((A) => {
    c((W) => {
      const H = typeof A == "function" ? A(W) : A;
      return B.current.push(W), B.current.length > 100 && B.current.shift(), U.current = [], H;
    }), r();
  }, [r]), Bt = rt((A) => A.size === 0 ? !1 : (kt((W) => W.filter((H) => A.has(H.id) ? !1 : H.type !== "arrow" ? !0 : !(H.fromId && A.has(H.fromId)) && !(H.toId && A.has(H.toId)))), ot(/* @__PURE__ */ new Set()), k(`${A.size}개 삭제됨`), !0), [kt, ot]), Ht = rt(() => {
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
    localShapes: v,
    setLocalShapes: b,
    controlled: y,
    shapes: i,
    setShapes: c,
    camera: h,
    setCamera: a,
    cameraRef: nt,
    selected: X,
    setSelected: x,
    selectedRef: F,
    editingId: g,
    setEditingId: $,
    editingIdRef: V,
    interaction: s,
    interactionRef: q,
    applyInteraction: J,
    isSpaceDown: z,
    setIsSpaceDown: Y,
    guides: w,
    setGuides: p,
    announcement: M,
    setAnnouncement: k,
    showInspectorPalette: C,
    setShowInspectorPalette: N,
    eraserPos: E,
    setEraserPos: O,
    activeColor: P,
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
  editingId: v,
  textualTypes: b,
  onZoomChange: y,
  onSelectionChange: f,
  onLocalCursor: i,
  toPage: u
}) {
  xt(() => {
    y == null || y(e.z);
  }, [e.z, y]), xt(() => {
    const g = t.current;
    if (!g) return;
    const $ = (s) => {
      if (s.preventDefault(), s.ctrlKey || s.metaKey) {
        const m = g.getBoundingClientRect();
        n((z) => {
          const Y = Math.min(r, Math.max(o, z.z * Math.exp(-s.deltaY * 0.01))), w = s.clientX - m.left, p = s.clientY - m.top;
          return { x: z.x + w / z.z - w / Y, y: z.y + p / z.z - p / Y, z: Y };
        });
      } else
        n((m) => ({ ...m, x: m.x + s.deltaX / m.z, y: m.y + s.deltaY / m.z }));
    };
    return g.addEventListener("wheel", $, { passive: !1 }), () => g.removeEventListener("wheel", $);
  }, [t, r, o, n]);
  const c = bt(() => {
    const g = l.filter(($) => d.has($.id));
    return {
      count: g.length,
      canGroup: g.length > 1,
      canUngroup: g.some(($) => !!$.groupId),
      isTextual: g.length === 1 && b.includes(g[0].type)
    };
  }, [d, l, b]);
  xt(() => {
    f == null || f(c);
  }, [f, c]);
  const h = bt(() => {
    if (v) {
      const s = l.find((m) => m.id === v);
      return s && s.type !== "image" && s.type !== "draw" ? s : null;
    }
    const g = l.filter((s) => d.has(s.id));
    if (g.length > 1 && g.every((s) => s.type === "draw")) return g[0] ?? null;
    if (g.length !== 1) return null;
    const $ = g[0];
    return $ && $.type !== "image" ? $ : null;
  }, [v, d, l]), a = tt(0);
  return { selectionInfo: c, inspectorShape: h, onContainerPointerMove: i ? (g) => {
    const $ = performance.now();
    $ - a.current < 60 || (a.current = $, i(u(g.clientX, g.clientY)));
  } : void 0, onContainerPointerLeave: i ? () => i(null) : void 0 };
}
function Re(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, o = 1 / 0, r = -1 / 0, l = -1 / 0;
  for (const i of t) {
    const u = et(i);
    n = Math.min(n, u.minX), o = Math.min(o, u.minY), r = Math.max(r, u.maxX), l = Math.max(l, u.maxY);
  }
  const d = 40, v = r - n + d * 2, b = l - o + d * 2;
  if (!Number.isFinite(v) || !Number.isFinite(b) || v > zt.maxExportDimension || b > zt.maxExportDimension || v * b > zt.maxExportPixels) return null;
  const y = (i, u, c, h, a) => {
    const X = i.fontSize ?? c, x = ct(i), g = kn(Dt(i));
    if (g.length === 0) return "";
    const $ = pt(i), s = i.textAlign === "right" ? "end" : i.textAlign === "center" ? "middle" : i.textAlign === "left" ? "start" : a, m = s === "end" ? $.maxX - 12 : s === "middle" ? ($.minX + $.maxX) / 2 : $.minX + 12, z = $.minY + X + 12;
    return g.map((Y, w) => {
      const p = Y.map((M) => `<tspan style="${[
        M.bold ? "font-weight:700" : `font-weight:${h}`,
        M.italic ? "font-style:italic" : "",
        M.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${mt(M.text)}</tspan>`).join("");
      return `<text x="${m}" y="${z + w * X * 1.4}" font-family="${mt(x)}" font-size="${X}" fill="${u}" text-anchor="${s}">${p}</text>`;
    }).join("");
  }, f = t.map((i) => {
    const u = st[i.color ?? "blue"], c = pt(i), h = dt(i), a = i.rotation ? ` transform="rotate(${i.rotation * 180 / Math.PI} ${h.x} ${h.y})"` : "", X = i.color ? st[i.color].border : _.ink;
    if (i.type === "draw" && i.points)
      return `<path d="${zn(i.points)}" fill="none" stroke="${X}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    if (i.type === "arrow") {
      const g = ft(i, new Map(t.map((N) => [N.id, N])), t), $ = g.routing === "orthogonal" && g.pathPoints && g.pathPoints.length > 1 ? g.pathPoints[g.pathPoints.length - 2] : null, s = g.routing === "orthogonal" && $ ? $ : St(0.94, g.start, g.control, g.end), m = Math.atan2(g.end.y - s.y, g.end.x - s.x), z = 14, Y = `${g.end.x - z * Math.cos(m - 0.4)},${g.end.y - z * Math.sin(m - 0.4)}`, w = `${g.end.x - z * Math.cos(m + 0.4)},${g.end.y - z * Math.sin(m + 0.4)}`, p = g.routing === "orthogonal" && g.pathPoints ? qt(g.pathPoints) : g.bend === 0 ? `M ${g.start.x} ${g.start.y} L ${g.end.x} ${g.end.y}` : `M ${g.start.x} ${g.start.y} Q ${g.control.x} ${g.control.y} ${g.end.x} ${g.end.y}`, M = g.routing === "orthogonal" && g.pathPoints ? en(g.pathPoints) : g.bend === 0 ? { x: (g.start.x + g.end.x) / 2, y: (g.start.y + g.end.y) / 2 } : St(0.5, g.start, g.control, g.end), k = Ot(i), C = k ? `<text x="${M.x}" y="${M.y - 6}" text-anchor="middle" font-family="${mt(ct(i))}" font-size="${i.fontSize ?? 12}" fill="${X}">${mt(k)}</text>` : "";
      return `<path d="${p}" fill="none" stroke="${X}" stroke-width="2.5" stroke-linecap="round"/><polygon points="${g.end.x},${g.end.y} ${Y} ${w}" fill="${X}"/>` + C;
    }
    if (i.type === "image" && i.src) {
      const g = tn(i.src);
      return g ? `<image href="${mt(g)}" x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}"${a}/>` : "";
    }
    if (i.type === "frame")
      return `<g${a}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" fill="none" stroke="${_.slate400}" stroke-width="2" rx="4"/><text x="${c.minX}" y="${c.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${_.muted}">${mt(i.text ?? "프레임")}</text></g>`;
    if (i.type === "note")
      return `<g${a}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" fill="${u.bg}"/><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="6" fill="${u.border}"/>` + y(i, u.text, 14, "600", "start") + "</g>";
    if (i.type === "card") {
      const g = i.cardStyle === "glass";
      return `<g${a}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" rx="16" fill="${g ? _.glassFill : _.slateCard}"/><text x="${c.minX + 16}" y="${c.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${_.slate400}">[ ${mt(i.category ?? "ENTITY")} ]</text>` + y(i, _.white, 16, "700", "start") + "</g>";
    }
    const x = i.type === "ellipse" ? `<ellipse cx="${(c.minX + c.maxX) / 2}" cy="${(c.minY + c.maxY) / 2}" rx="${(c.maxX - c.minX) / 2}" ry="${(c.maxY - c.minY) / 2}" fill="${u.bg}" stroke="${u.border}" stroke-width="2"/>` : `<rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" rx="12" fill="${u.bg}" stroke="${u.border}" stroke-width="2"/>`;
    return `<g${a}>${x}${y(i, u.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${v}" height="${b}" viewBox="${n - d} ${o - d} ${v} ${b}"><rect x="${n - d}" y="${o - d}" width="${v}" height="${b}" fill="${e ? _.canvasDark : _.canvasLight}"/>` + f + "</svg>";
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
  const v = 2, b = o * v, y = r * v;
  if (!Number.isSafeInteger(b) || !Number.isSafeInteger(y) || b > zt.maxExportDimension || y > zt.maxExportDimension || b * y > zt.maxExportPixels) return null;
  const f = document.createElement("canvas");
  f.width = b, f.height = y;
  const i = f.getContext("2d");
  return i ? (i.scale(v, v), i.drawImage(d, 0, 0), new Promise((u) => {
    try {
      f.toBlob((c) => u(c), "image/png");
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
        const h = 2 * Math.PI * u / r.length;
        r[u].x += Math.cos(h) * 10, r[u].y += Math.sin(h) * 10;
        break;
      }
  const l = new Map(r.map((u) => [u.id, u])), d = [];
  for (const u of t) {
    if (u.type !== "arrow") continue;
    const c = u.fromId ? l.get(u.fromId) : null, h = u.toId ? l.get(u.toId) : null;
    c && h && d.push([c, h]);
  }
  const v = 220, b = v * v, y = 80;
  let f = 400;
  const i = f / y;
  for (let u = 0; u < y; u++) {
    for (let c = 0; c < r.length; c++)
      r[c].vx = 0, r[c].vy = 0;
    for (let c = 0; c < r.length; c++)
      for (let h = c + 1; h < r.length; h++) {
        const a = r[c], X = r[h], x = a.x - X.x, g = a.y - X.y, $ = Math.hypot(x, g) || 0.01, s = b / $, m = x / $ * s, z = g / $ * s;
        a.vx += m, a.vy += z, X.vx -= m, X.vy -= z;
      }
    for (const [c, h] of d) {
      const a = c.x - h.x, X = c.y - h.y, x = Math.hypot(a, X) || 0.01, g = x * x / v, $ = a / x * g, s = X / x * g;
      c.vx -= $, c.vy -= s, h.vx += $, h.vy += s;
    }
    for (const c of r) {
      const h = Math.hypot(c.vx, c.vy) || 0.01, a = Math.min(h, f);
      c.x += c.vx / h * a, c.y += c.vy / h * a;
    }
    f = Math.max(0.5, f - i);
  }
  e((u) => u.map((c) => {
    const h = l.get(c.id);
    return h ? { ...c, x: h.x - c.w / 2, y: h.y - c.h / 2 } : c;
  })), n();
}
function qe(t, {
  controlled: e,
  past: n,
  future: o,
  setLocalShapes: r,
  setCamera: l,
  selectNow: d,
  setEditingId: v
}) {
  const b = t;
  if (!b || b.version !== "canvas-v1") return;
  let y;
  try {
    y = te({ version: "canvas-v1", shapes: [], camera: b.camera }).camera;
  } catch {
    return;
  }
  !e && Array.isArray(b.shapes) && b.shapes.length <= zt.maxShapes && (n.current = [], o.current = [], r(b.shapes.map(on).filter((f) => f !== null))), l(y), d(/* @__PURE__ */ new Set()), v(null);
}
function Qe({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: o,
  selectedRef: r,
  past: l,
  future: d,
  controlled: v,
  isDarkMode: b,
  minZoom: y,
  maxZoom: f,
  onToolChange: i,
  onDirty: u,
  commit: c,
  deleteSelection: h,
  selectNow: a,
  viewportCentre: X,
  setShapes: x,
  setLocalShapes: g,
  setCamera: $,
  setEditingId: s,
  setAnnouncement: m,
  createId: z
}) {
  const Y = rt((p) => {
    const M = X(), k = on({
      id: z(),
      x: p.x ?? M.x - p.w / 2,
      y: p.y ?? M.y - p.h / 2,
      ...p
    });
    if (!k) throw new Error("Canvas could not create a valid shape.");
    return c((C) => [...C, k]), a(/* @__PURE__ */ new Set([k.id])), i("select"), m(`${k.type} 추가됨`), k;
  }, [c, z, i, a, m, X]), w = rt(() => Re(n.current, b), [b, n]);
  Un(t, () => ({
    addNote: (p) => {
      const M = Y({ type: "note", w: 180, h: 180, color: p, text: "" });
      s(M.id);
    },
    addCard: (p, M, k, C) => {
      Y({ type: "card", w: 260, h: 150, text: p, category: M, cardStyle: k, color: C });
    },
    addText: () => {
      const p = Y({ type: "text", w: 220, h: 44, text: "" });
      s(p.id);
    },
    addShape: (p, M, k) => {
      Y({
        type: p,
        w: p === "ellipse" ? 220 : 200,
        h: p === "ellipse" ? 110 : 140,
        color: M,
        text: k ?? ""
      });
    },
    addArrow: () => {
      const p = X(), M = { id: z(), type: "arrow", x: p.x - 140, y: p.y, w: 280, h: 0 };
      c((k) => [...k, M]), a(/* @__PURE__ */ new Set([M.id])), i("select");
    },
    addImage: (p, M, k, C) => {
      Y({ type: "image", w: k, h: C, src: p, fileName: M });
    },
    addFileCard: (p, M, k) => {
      Y({ type: "rect", w: 260, h: 120, color: "purple", text: k, src: M, fileName: p });
    },
    setTool: i,
    undo: () => {
      const p = l.current.pop();
      p && (d.current.push(n.current), x(p), a(/* @__PURE__ */ new Set()), s(null), u(), m("실행 취소"));
    },
    redo: () => {
      const p = d.current.pop();
      p && (l.current.push(n.current), x(p), a(/* @__PURE__ */ new Set()), s(null), u(), m("다시 실행"));
    },
    deleteSelected: () => {
      h(r.current);
    },
    duplicateSelected: () => {
      var C;
      const p = r.current;
      if (p.size === 0) return;
      const M = [], k = /* @__PURE__ */ new Map();
      for (const N of n.current) {
        if (!p.has(N.id)) continue;
        let E = N.groupId;
        E && (k.has(E) || k.set(E, z("g")), E = k.get(E)), M.push({
          ...N,
          id: z(),
          x: N.x + 24,
          y: N.y + 24,
          groupId: E,
          points: (C = N.points) == null ? void 0 : C.map(([O, P]) => [O + 24, P + 24]),
          orthogonalWaypoints: N.type === "arrow" && N.orthogonalWaypoints ? N.orthogonalWaypoints.map((O) => ({ x: O.x + 24, y: O.y + 24 })) : void 0
        });
      }
      c((N) => [...N, ...M]), a(new Set(M.map((N) => N.id))), m(`${M.length}개 복제됨`);
    },
    group: () => {
      var k;
      const p = r.current;
      if (p.size < 2) return;
      const M = z("g");
      c((C) => C.map((N) => p.has(N.id) ? { ...N, groupId: M } : N)), m(`${p.size}개 그룹화됨`), (k = e.current) == null || k.focus();
    },
    ungroup: () => {
      var M;
      const p = r.current;
      p.size !== 0 && (c((k) => k.map((C) => p.has(C.id) ? { ...C, groupId: void 0 } : C)), m("그룹 해제됨"), (M = e.current) == null || M.focus());
    },
    zoomBy: (p) => {
      $((M) => {
        var O;
        const k = (O = e.current) == null ? void 0 : O.getBoundingClientRect(), C = Math.min(f, Math.max(y, M.z * p));
        if (!k) return { ...M, z: C };
        const N = M.x + k.width / 2 / M.z, E = M.y + k.height / 2 / M.z;
        return { x: N - k.width / 2 / C, y: E - k.height / 2 / C, z: C };
      });
    },
    zoomTo: (p) => {
      $((M) => {
        var O;
        const k = (O = e.current) == null ? void 0 : O.getBoundingClientRect(), C = Math.min(f, Math.max(y, p));
        if (!k) return { ...M, z: C };
        const N = M.x + k.width / 2 / M.z, E = M.y + k.height / 2 / M.z;
        return { x: N - k.width / 2 / C, y: E - k.height / 2 / C, z: C };
      });
    },
    resetZoom: () => {
      $((p) => {
        var N;
        const M = (N = e.current) == null ? void 0 : N.getBoundingClientRect();
        if (!M) return { ...p, z: 1 };
        const k = p.x + M.width / 2 / p.z, C = p.y + M.height / 2 / p.z;
        return { x: k - M.width / 2, y: C - M.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var T;
      const p = n.current, M = (T = e.current) == null ? void 0 : T.getBoundingClientRect();
      if (p.length === 0 || !M) return;
      let k = 1 / 0, C = 1 / 0, N = -1 / 0, E = -1 / 0;
      for (const L of p) {
        const R = et(L);
        k = Math.min(k, R.minX), C = Math.min(C, R.minY), N = Math.max(N, R.maxX), E = Math.max(E, R.maxY);
      }
      const O = 80, P = Math.min(f, Math.max(
        y,
        Math.min(M.width / (N - k + O * 2), M.height / (E - C + O * 2))
      ));
      $({
        x: (k + N) / 2 - M.width / 2 / P,
        y: (C + E) / 2 - M.height / 2 / P,
        z: P
      });
    },
    autoLayout: () => Ge(n.current, c, () => m("자동 배치 완료")),
    exportSvg: w,
    exportPng: () => Ue(w),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (p) => qe(p, {
      controlled: v,
      past: l,
      future: d,
      setLocalShapes: g,
      setCamera: $,
      selectNow: a,
      setEditingId: s
    })
  }), [
    Y,
    w,
    c,
    z,
    h,
    b,
    f,
    y,
    u,
    i,
    a,
    $,
    s,
    g,
    x,
    m,
    X,
    v
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
  future: v,
  textualTypes: b,
  setIsSpaceDown: y,
  setEditingId: f,
  setShapes: i,
  setAnnouncement: u,
  commit: c,
  deleteSelection: h,
  selectNow: a,
  onDirty: X,
  onToolChange: x,
  createId: g
}) {
  const $ = rt((s, m) => {
    const z = o.current;
    z.size !== 0 && c((Y) => Y.map((w) => {
      var p;
      return z.has(w.id) ? {
        ...w,
        x: w.x + s,
        y: w.y + m,
        points: (p = w.points) == null ? void 0 : p.map(([M, k]) => [M + s, k + m])
      } : w;
    }));
  }, [c, o]);
  xt(() => {
    const s = (w) => {
      const p = w;
      return !!p && (p.tagName === "INPUT" || p.tagName === "TEXTAREA" || p.isContentEditable);
    }, m = (w) => w instanceof Element && !!w.closest("input, select, button, textarea, option, label, [data-canvas-control]"), z = (w) => {
      var P, T, L, R;
      const p = t.current, M = document.activeElement, k = w.target instanceof Node && !!(p != null && p.contains(w.target)), C = !!p && (M === p || p.contains(M));
      if (!k && !C || m(w.target)) return;
      if (w.code === "Space" && !s(w.target)) {
        y(!0), w.preventDefault();
        return;
      }
      if (s(w.target)) {
        if (w.key === "Escape")
          w.preventDefault(), f(null), (P = e.current) == null || P.blur(), (T = t.current) == null || T.focus();
        else if ((w.key === "Delete" || w.key === "Backspace") && !r.current) {
          const D = o.current;
          h(D) && w.preventDefault();
        }
        return;
      }
      const N = w.metaKey || w.ctrlKey, E = o.current;
      if (N && w.key.toLowerCase() === "z") {
        if (w.preventDefault(), w.shiftKey) {
          const D = v.current.pop();
          D && (d.current.push(n.current), i(D), X());
        } else {
          const D = d.current.pop();
          D && (v.current.push(n.current), i(D), X());
        }
        a(/* @__PURE__ */ new Set());
        return;
      }
      if (N && w.key.toLowerCase() === "g") {
        if (w.preventDefault(), w.shiftKey)
          E.size > 0 && (c((D) => D.map((B) => E.has(B.id) ? { ...B, groupId: void 0 } : B)), u("그룹 해제됨"));
        else if (E.size > 1) {
          const D = g("g");
          c((B) => B.map((U) => E.has(U.id) ? { ...U, groupId: D } : U)), u(`${E.size}개 그룹화됨`);
        }
        return;
      }
      if (N && w.key.toLowerCase() === "a") {
        w.preventDefault(), a(new Set(n.current.map((D) => D.id))), u(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (w.key === "Delete" || w.key === "Backspace") {
        h(E) && w.preventDefault();
        return;
      }
      if (w.key.startsWith("Arrow")) {
        w.preventDefault();
        const D = w.shiftKey ? 10 : 1;
        w.key === "ArrowLeft" && $(-D, 0), w.key === "ArrowRight" && $(D, 0), w.key === "ArrowUp" && $(0, -D), w.key === "ArrowDown" && $(0, D);
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
        D && b.includes(D.type) && (w.preventDefault(), f(D.id));
        return;
      }
      if (w.key === "Escape") {
        if (r.current) {
          w.preventDefault(), f(null), (L = e.current) == null || L.blur(), (R = t.current) == null || R.focus(), x("select");
          return;
        }
        a(/* @__PURE__ */ new Set()), x("select");
        return;
      }
      const O = Ze(w);
      O && (w.preventDefault(), l.current = O, x(O));
    }, Y = (w) => {
      const p = t.current;
      !p || !(document.activeElement === p || p.contains(document.activeElement)) || w.code === "Space" && y(!1);
    };
    return window.addEventListener("keydown", z), window.addEventListener("keyup", Y), () => {
      window.removeEventListener("keydown", z), window.removeEventListener("keyup", Y);
    };
  }, [
    c,
    t,
    g,
    h,
    r,
    e,
    v,
    $,
    X,
    x,
    d,
    a,
    o,
    u,
    f,
    y,
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
  camera: v,
  shapes: b,
  selected: y,
  isSpaceDown: f,
  textualTypes: i,
  setShapes: u,
  setEditingId: c,
  applyInteraction: h,
  selectNow: a,
  beginHistory: X,
  commit: x,
  onToolChange: g,
  expandToGroups: $,
  toPage: s,
  createId: m
}) {
  const z = m, Y = tt(null), w = (P, T) => {
    var B;
    const L = ((B = t.current) == null ? void 0 : B.dataset.canvasActiveTool) === "text" ? "text" : l.current;
    if (L !== "note" && L !== "text") return;
    const R = s(P, T), D = L === "note" ? { id: z(), type: "note", x: R.x - 90, y: R.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: z(), type: "text", x: R.x, y: R.y - 22, w: 220, h: 44, text: "" };
    x((U) => [...U, D]), a(/* @__PURE__ */ new Set([D.id])), c(D.id), g("select");
  };
  return xt(() => {
    const P = (T) => {
      var L;
      (L = t.current) != null && L.contains(T.target) && (T.target instanceof Element && T.target.closest('[role="textbox"], [data-canvas-inspector]') || w(T.clientX, T.clientY));
    };
    return window.addEventListener("click", P, !0), () => window.removeEventListener("click", P, !0);
  }), { onPointerDown: (P) => {
    var B, U, Q;
    const T = l.current;
    if (n.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), n.current.size === 2) {
      const [K, G] = [...n.current.values()], nt = o.current;
      h({
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
    if (P.button === 1 || f || T === "hand" || P.button === 0 && T === "select" && P.altKey) {
      h({ kind: "pan", startX: P.clientX, startY: P.clientY, camX: v.x, camY: v.y });
      return;
    }
    if (P.button !== 0) return;
    const L = s(P.clientX, P.clientY);
    if (c(null), (B = e.current) == null || B.blur(), (U = t.current) == null || U.focus(), T === "draw") {
      const K = { id: z(), type: "draw", x: L.x, y: L.y, w: 0, h: 0, points: [[L.x, L.y]], color: d.current };
      X(), u((G) => [...G, K]), h({ kind: "drawing", id: K.id });
      return;
    }
    if (T === "arrow" || T === "frame" || ne.includes(T)) {
      const K = T, G = T === "arrow" ? { id: z(), type: "arrow", x: L.x, y: L.y, w: 0, h: 0, color: d.current } : T === "frame" ? { id: z(), type: "frame", x: L.x, y: L.y, w: 0, h: 0, text: "프레임" } : { id: z(), type: K, x: L.x, y: L.y, w: 0, h: 0, color: d.current, text: "" };
      X(), u((nt) => [...nt, G]), h({ kind: "creating", id: G.id, startX: L.x, startY: L.y });
      return;
    }
    if (T === "note" || T === "text") return;
    if (T === "eraser") {
      X(), u((K) => Yn(K, L.x, L.y, 14 / v.z, v.z)), h({ kind: "erasing" });
      return;
    }
    const R = new Map(b.map((K) => [K.id, K])), D = [...b].reverse().find((K) => Tt(K, L.x, L.y, v.z, R, b));
    if (!D)
      Y.current = null;
    else {
      const K = Date.now(), G = !P.shiftKey && i.includes(D.type) && ((Q = Y.current) == null ? void 0 : Q.id) === D.id && K - Y.current.time < to, nt = G ? D.id : void 0;
      Y.current = G ? null : { id: D.id, time: K };
      const S = P.shiftKey ? new Set(y).add(D.id) : y.has(D.id) ? y : /* @__PURE__ */ new Set([D.id]), F = $(S);
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
      X(), h({ kind: "move", startX: L.x, startY: L.y, origin: V, editOnReleaseId: nt });
      return;
    }
    P.shiftKey || a(/* @__PURE__ */ new Set()), h({
      kind: "marquee",
      startX: L.x,
      startY: L.y,
      curX: L.x,
      curY: L.y,
      screenStartX: P.clientX,
      screenStartY: P.clientY
    });
  }, onResizeHandleDown: (P, T, L) => {
    P.stopPropagation(), n.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), X(), h({ kind: "resize", id: T.id, handle: L, start: T });
  }, onRotateHandleDown: (P, T) => {
    P.stopPropagation(), n.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
    const L = s(P.clientX, P.clientY), R = dt(T);
    X(), h({
      kind: "rotate",
      id: T.id,
      startAngle: Math.atan2(L.y - R.y, L.x - R.x),
      startRotation: T.rotation ?? 0
    });
  }, onConnectHandleDown: (P, T) => {
    P.stopPropagation(), n.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
    const L = s(P.clientX, P.clientY);
    h({ kind: "connect", fromId: T.id, toX: L.x, toY: L.y, hoverId: null });
  }, onBendHandleDown: (P, T) => {
    P.stopPropagation(), n.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), X(), h({ kind: "bend", id: T.id });
  }, onOrthogonalSegmentHandleDown: (P, T, L) => {
    P.stopPropagation(), n.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), X(), h({ kind: "orthogonal-segment", id: T.id, segmentIndex: L });
  }, onArrowEndpointDown: (P, T, L) => {
    P.stopPropagation(), n.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), X(), h({ kind: "arrow-endpoint", id: T.id, endpoint: L, hoverId: null });
  } };
}
const eo = 0.1, oo = 4, ro = 14, io = 4, hn = ["note", "card", "rect", "ellipse", "text", "image"];
function ao({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: o,
  shapesRef: r,
  setShapes: l,
  setEditingId: d,
  setEraserPos: v,
  setGuides: b,
  setAnnouncement: y,
  applyInteraction: f,
  selectNow: i,
  endHistory: u,
  commit: c,
  onToolChange: h,
  createId: a
}) {
  const X = a;
  xt(() => {
    const x = (g) => {
      t.current.delete(g.pointerId);
      const $ = e.current;
      if ($.kind !== "none") {
        if ($.kind === "pinch") {
          t.current.size < 2 && f({ kind: "none" });
          return;
        }
        if (b([]), $.kind === "erasing") {
          v(null), u(), f({ kind: "none" });
          return;
        }
        if ($.kind === "connect") {
          const m = r.current.find((k) => k.id === $.fromId);
          if (f({ kind: "none" }), !m) return;
          const z = { x: $.toX, y: $.toY }, Y = dt(m);
          if (!$.hoverId && Math.hypot(z.x - Y.x, z.y - Y.y) < 30) return;
          const w = [];
          let p = $.hoverId;
          if (!p) {
            const k = m.type === "note" ? 180 : 200, C = m.type === "note" ? 180 : 120, N = {
              ...m,
              id: X(),
              x: z.x - k / 2,
              y: z.y - C / 2,
              w: k,
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
            w.push(N), p = N.id;
          }
          const M = {
            id: X(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: m.id,
            toId: p,
            text: ""
          };
          w.push(M), c((k) => [...k, ...w]), i(/* @__PURE__ */ new Set([M.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => d(M.id)) : d(M.id), y("연결 생성됨");
          return;
        }
        if ($.kind === "bend") {
          u(), f({ kind: "none" });
          return;
        }
        if ($.kind === "drawing") {
          l((s) => s.map((m) => {
            if (m.id !== $.id || !m.points) return m;
            const z = m.points.map((M) => M[0]), Y = m.points.map((M) => M[1]), w = Math.min(...z), p = Math.min(...Y);
            return { ...m, x: w, y: p, w: Math.max(...z) - w, h: Math.max(...Y) - p };
          })), u(), f({ kind: "none" });
          return;
        }
        if ($.kind === "creating") {
          l((s) => s.map((m) => {
            if (m.id !== $.id) return m;
            const z = Math.abs(m.w) < 4 && Math.abs(m.h) < 4 ? {
              ...m,
              w: m.type === "arrow" ? 200 : m.type === "frame" ? 480 : 180,
              h: m.type === "arrow" ? 0 : m.type === "frame" ? 320 : 120
            } : m;
            if (z.type === "arrow") return z;
            const Y = pt(z);
            return { ...z, x: Y.minX, y: Y.minY, w: Y.maxX - Y.minX, h: Y.maxY - Y.minY };
          })), u(), i(/* @__PURE__ */ new Set([$.id])), h("select"), f({ kind: "none" });
          return;
        }
        if (($.kind === "move" || $.kind === "resize" || $.kind === "rotate" || $.kind === "orthogonal-segment" || $.kind === "arrow-endpoint") && u(), $.kind === "move" && $.editOnReleaseId && g.type === "pointerup") {
          const s = o(g.clientX, g.clientY);
          Math.hypot(s.x - $.startX, s.y - $.startY) * n.current.z <= io && d($.editOnReleaseId);
        }
        f({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", x), window.addEventListener("pointercancel", x), () => {
      window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", x);
    };
  }, [f, n, a, u, e, h, t, i, y, d, l, r, o]);
}
function co({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: o,
  shapesRef: r,
  setCamera: l,
  setShapes: d,
  setEraserPos: v,
  setGuides: b,
  applyInteraction: y,
  selectNow: f,
  expandToGroups: i,
  toPage: u
}) {
  xt(() => {
    const c = (h) => {
      var g, $;
      e.current.has(h.pointerId) && e.current.set(h.pointerId, { x: h.clientX, y: h.clientY });
      const a = n.current;
      if (a.kind === "none") return;
      const X = o.current;
      if (a.kind === "pinch") {
        if (e.current.size < 2) return;
        const [s, m] = [...e.current.values()], z = Math.hypot(m.x - s.x, m.y - s.y) || 1, Y = (s.x + m.x) / 2, w = (s.y + m.y) / 2, p = (g = t.current) == null ? void 0 : g.getBoundingClientRect();
        if (!p) return;
        const M = Math.min(oo, Math.max(eo, a.startZoom * (z / a.startDist))), k = a.camX + (a.startMidX - p.left) / a.startZoom, C = a.camY + (a.startMidY - p.top) / a.startZoom;
        l({ x: k - (Y - p.left) / M, y: C - (w - p.top) / M, z: M });
        return;
      }
      if (a.kind === "pan") {
        l({
          x: a.camX - (h.clientX - a.startX) / X.z,
          y: a.camY - (h.clientY - a.startY) / X.z,
          z: X.z
        });
        return;
      }
      const x = u(h.clientX, h.clientY);
      if (a.kind === "erasing") {
        d((s) => Yn(s, x.x, x.y, ro / X.z, X.z)), v({ x: x.x, y: x.y });
        return;
      }
      if (a.kind === "connect") {
        const s = r.current, m = new Map(s.map((Y) => [Y.id, Y])), z = [...s].reverse().find((Y) => Y.id !== a.fromId && hn.includes(Y.type) && Tt(Y, x.x, x.y, X.z, m, s));
        y({ ...a, toX: x.x, toY: x.y, hoverId: (z == null ? void 0 : z.id) ?? null });
        return;
      }
      if (a.kind === "bend") {
        const s = r.current, m = s.find((N) => N.id === a.id);
        if (!m) return;
        const z = ft(m, new Map(s.map((N) => [N.id, N])), s), Y = z.end.x - z.start.x, w = z.end.y - z.start.y, p = Math.hypot(Y, w) || 1, M = (z.start.x + z.end.x) / 2, k = (z.start.y + z.end.y) / 2, C = (x.x - M) * (-w / p) + (x.y - k) * (Y / p);
        d((N) => N.map((E) => E.id === a.id ? { ...E, bend: C } : E));
        return;
      }
      if (a.kind === "orthogonal-segment") {
        const s = r.current, m = s.find((C) => C.id === a.id);
        if (!m) return;
        const z = ft(m, new Map(s.map((C) => [C.id, C])), s), Y = z.routing === "orthogonal" ? z.pathPoints : void 0;
        if (!Y || Y.length < 2) return;
        const w = Y[a.segmentIndex], p = Y[a.segmentIndex + 1];
        if (!w || !p) return;
        const M = w.x === p.x ? x.x : x.y, k = ye(Y, a.segmentIndex, M);
        d((C) => C.map((N) => N.id === a.id ? { ...N, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: k.slice(1, -1).map((E) => ({ x: E.x, y: E.y })) } : N));
        return;
      }
      if (a.kind === "arrow-endpoint") {
        const s = r.current, m = s.find((k) => k.id === a.id);
        if (!m) return;
        const z = new Map(s.map((k) => [k.id, k])), Y = ft(m, z, s), w = a.endpoint === "start" ? Y.end : Y.start, p = [...s].reverse().find((k) => k.id !== m.id && hn.includes(k.type) && Tt(k, x.x, x.y, X.z, z, s)), M = p ? $t(p, w.x, w.y) : { x: x.x, y: x.y };
        y({ ...a, hoverId: (p == null ? void 0 : p.id) ?? null }), d((k) => k.map((C) => {
          if (C.id !== m.id) return C;
          const N = a.endpoint === "start" ? M : w, E = a.endpoint === "end" ? M : w;
          return {
            ...C,
            x: N.x,
            y: N.y,
            w: E.x - N.x,
            h: E.y - N.y,
            fromId: a.endpoint === "start" ? p == null ? void 0 : p.id : C.fromId,
            toId: a.endpoint === "end" ? p == null ? void 0 : p.id : C.toId
          };
        }));
        return;
      }
      if (a.kind === "marquee") {
        y({ ...a, curX: x.x, curY: x.y });
        const s = Math.min(a.startX, x.x), m = Math.max(a.startX, x.x), z = Math.min(a.startY, x.y), Y = Math.max(a.startY, x.y), w = Math.min(a.screenStartX, h.clientX), p = Math.max(a.screenStartX, h.clientX), M = Math.min(a.screenStartY, h.clientY), k = Math.max(a.screenStartY, h.clientY), C = /* @__PURE__ */ new Map();
        ($ = t.current) == null || $.querySelectorAll("[data-canvas-shape-id]").forEach((E) => {
          const O = E.dataset.canvasShapeId;
          O && C.set(O, E.getBoundingClientRect());
        });
        const N = r.current.filter((E) => {
          const O = C.get(E.id);
          if (O)
            return O.right >= w && O.left <= p && O.bottom >= M && O.top <= k;
          const P = et(E);
          return P.maxX >= s && P.minX <= m && P.maxY >= z && P.minY <= Y;
        }).map((E) => E.id);
        f(i(new Set(N)));
        return;
      }
      if (a.kind === "move") {
        let s = x.x - a.startX, m = x.y - a.startY;
        const z = a.origin, Y = (() => {
          let M = 1 / 0, k = 1 / 0, C = -1 / 0, N = -1 / 0;
          return z.forEach((E) => {
            const O = et({ ...E, x: E.x + s, y: E.y + m });
            M = Math.min(M, O.minX), k = Math.min(k, O.minY), C = Math.max(C, O.maxX), N = Math.max(N, O.maxY);
          }), { minX: M, minY: k, maxX: C, maxY: N };
        })(), w = r.current.filter((M) => !z.has(M.id)), p = ze(Y, w, X.z);
        s += p.dx, m += p.dy, b(p.guides), d((M) => M.map((k) => {
          var N;
          const C = z.get(k.id);
          return C ? {
            ...k,
            x: C.x + s,
            y: C.y + m,
            points: (N = C.points) == null ? void 0 : N.map(([E, O]) => [E + s, O + m]),
            ...C.type === "arrow" && C.orthogonalWaypoints ? { orthogonalWaypoints: C.orthogonalWaypoints.map((E) => ({ x: E.x + s, y: E.y + m })) } : {}
          } : k;
        }));
        return;
      }
      if (a.kind === "drawing") {
        d((s) => s.map((m) => {
          if (m.id !== a.id || !m.points) return m;
          const z = m.points[m.points.length - 1];
          return Math.hypot(x.x - z[0], x.y - z[1]) < 2 / X.z ? m : { ...m, points: [...m.points, [x.x, x.y]] };
        }));
        return;
      }
      if (a.kind === "creating") {
        d((s) => s.map((m) => m.id === a.id ? { ...m, w: x.x - a.startX, h: x.y - a.startY } : m));
        return;
      }
      if (a.kind === "rotate") {
        const s = r.current.find((w) => w.id === a.id);
        if (!s) return;
        const m = dt(s), z = Math.atan2(x.y - m.y, x.x - m.x);
        let Y = a.startRotation + (z - a.startAngle);
        h.shiftKey && (Y = Math.round(Y / (Math.PI / 12)) * (Math.PI / 12)), d((w) => w.map((p) => p.id === a.id ? { ...p, rotation: Y } : p));
        return;
      }
      if (a.kind === "resize") {
        const { start: s, handle: m } = a, z = Mn(s, x.x, x.y);
        d((Y) => Y.map((w) => {
          if (w.id !== s.id) return w;
          let { x: p, y: M, w: k, h: C } = s;
          if (m.includes("e") && (k = Math.max(20, z.x - s.x)), m.includes("s") && (C = Math.max(20, z.y - s.y)), m.includes("w")) {
            const N = s.x + s.w;
            p = Math.min(z.x, N - 20), k = N - p;
          }
          if (m.includes("n")) {
            const N = s.y + s.h;
            M = Math.min(z.y, N - 20), C = N - M;
          }
          return { ...w, x: p, y: M, w: k, h: C, manualSize: w.type === "text" ? !0 : w.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", c), () => window.removeEventListener("pointermove", c);
  }, [y, t, i, n, e, f, r, u]);
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
  activeColorRef: v,
  camera: b,
  shapes: y,
  selected: f,
  isSpaceDown: i,
  textualTypes: u,
  setCamera: c,
  setShapes: h,
  setEditingId: a,
  setEraserPos: X,
  setGuides: x,
  setAnnouncement: g,
  applyInteraction: $,
  selectNow: s,
  beginHistory: m,
  endHistory: z,
  commit: Y,
  onToolChange: w,
  expandToGroups: p,
  toPage: M,
  createId: k
}) {
  const C = no({
    containerRef: t,
    editorRef: e,
    pointers: n,
    cameraRef: r,
    shapesRef: l,
    toolRef: d,
    activeColorRef: v,
    camera: b,
    shapes: y,
    selected: f,
    isSpaceDown: i,
    textualTypes: u,
    setShapes: h,
    setEditingId: a,
    applyInteraction: $,
    selectNow: s,
    beginHistory: m,
    commit: Y,
    onToolChange: w,
    expandToGroups: p,
    toPage: M,
    createId: k
  });
  return so({
    containerRef: t,
    pointers: n,
    interactionRef: o,
    cameraRef: r,
    shapesRef: l,
    setCamera: c,
    setShapes: h,
    setEditingId: a,
    setEraserPos: X,
    setGuides: x,
    setAnnouncement: g,
    applyInteraction: $,
    selectNow: s,
    endHistory: z,
    commit: Y,
    onToolChange: w,
    expandToGroups: p,
    toPage: M,
    createId: k
  }), C;
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
  const l = n || o.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", d = t ? _.gridDark : _.gridLight, v = 40 * r;
  return { cursor: l, gridColor: d, gridSize: v, strokeColorOf: (y) => y.color ? st[y.color].border : t ? "var(--canvas-slate-200)" : _.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = he, document.head.appendChild(t);
}
const vn = 0.1, mn = 4, pn = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
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
  onSelectionChange: v,
  shapes: b,
  onShapesChange: y,
  peerCursors: f,
  onLocalCursor: i
}, u) {
  var ln, dn;
  const {
    containerRef: c,
    editorRef: h,
    setLocalShapes: a,
    controlled: X,
    shapes: x,
    setShapes: g,
    camera: $,
    setCamera: s,
    cameraRef: m,
    selected: z,
    selectedRef: Y,
    editingId: w,
    setEditingId: p,
    editingIdRef: M,
    interaction: k,
    interactionRef: C,
    applyInteraction: N,
    isSpaceDown: E,
    setIsSpaceDown: O,
    guides: P,
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
  } = Ke({ boardIdentity: e, tool: o, controlledShapes: b, onShapesChange: y, onDirty: l }), {
    inspectorShape: Nt,
    onContainerPointerMove: jt,
    onContainerPointerLeave: A
  } = Ve({
    containerRef: c,
    camera: $,
    setCamera: s,
    minZoom: vn,
    maxZoom: mn,
    shapes: x,
    selected: z,
    editingId: w,
    textualTypes: pn,
    onZoomChange: d,
    onSelectionChange: v,
    onLocalCursor: i,
    toPage: kt
  }), {
    onPointerDown: W,
    onResizeHandleDown: H,
    onRotateHandleDown: Z,
    onConnectHandleDown: ht,
    onBendHandleDown: vt,
    onOrthogonalSegmentHandleDown: Kt,
    onArrowEndpointDown: Pn
  } = uo({
    ref: u,
    containerRef: c,
    editorRef: h,
    pointers: S,
    interactionRef: C,
    cameraRef: m,
    shapesRef: Mt,
    toolRef: Wt,
    activeColorRef: G,
    camera: $,
    shapes: x,
    selected: z,
    isSpaceDown: E,
    setCamera: s,
    setShapes: g,
    setEditingId: p,
    setEraserPos: Q,
    setGuides: T,
    setAnnouncement: R,
    applyInteraction: N,
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
    minZoom: vn,
    maxZoom: mn,
    textualTypes: pn,
    selectedRef: Y,
    editingIdRef: M,
    setIsSpaceDown: O,
    viewportCentre: Bt,
    setLocalShapes: a,
    expandToGroups: Ht,
    toPage: kt,
    createId: fo
  }), { cursor: En, gridColor: Ln, gridSize: rn, strokeColorOf: Fn } = xo({
    isDarkMode: n,
    tool: o,
    isSpaceDown: E,
    interaction: k,
    zoom: $.z
  }), an = (jn) => {
    const Kn = Y.current, un = M.current, Vt = new Set(Kn);
    un && Vt.add(un), Vt.size !== 0 && J((Vn) => Vn.map((Rt) => Vt.has(Rt.id) ? { ...Rt, ...jn } : Rt));
  }, {
    commitEditorHtml: An,
    applyFormat: Tn,
    applyList: Dn,
    onEditorKeyDown: On,
    applyCustomFontFamily: _n
  } = je({
    editorRef: h,
    editingId: w,
    setShapes: g,
    setAnnouncement: R,
    onDirty: l,
    patchSelected: an
  }), { renderEditor: Bn, renderShapeBody: Hn } = He({
    camera: $,
    editingId: w,
    isDarkMode: n,
    editorRef: h,
    commitEditorHtml: An,
    onEditorKeyDown: On,
    setShapes: g,
    onDirty: l
  }), Wn = k.kind === "marquee" ? k : null, { shapeById: cn, visiblePaintOrder: sn } = We({
    containerRef: c,
    shapesRef: Mt,
    shapes: x,
    camera: $,
    selected: z,
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
      "data-canvas-camera-x": $.x,
      "data-canvas-camera-y": $.y,
      "data-canvas-camera-z": $.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: En,
        background: n ? _.canvasDark : _.canvasLight,
        backgroundImage: `radial-gradient(${Ln} 1px, transparent 1px)`,
        backgroundSize: `${rn}px ${rn}px`,
        backgroundPosition: `${-$.x * $.z}px ${-$.y * $.z}px`
      },
      children: [
        /* @__PURE__ */ I("style", { children: '.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas .canvas-rich-text ul>li::before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style="dash"]>li::before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li::before{content:counter(canvas-list-item) ". "}' }),
        /* @__PURE__ */ I(
          "div",
          {
            "aria-live": "polite",
            role: "status",
            className: "absolute w-px h-px overflow-hidden whitespace-nowrap",
            style: { clip: "rect(0 0 0 0)", clipPath: "inset(50%)" },
            children: L
          }
        ),
        /* @__PURE__ */ I(
          Me,
          {
            visiblePaintOrder: sn,
            selected: z,
            shapeById: cn,
            allShapes: Mt.current,
            camera: $,
            interaction: k,
            eraserPos: U,
            guides: P,
            marquee: Wn,
            strokeColorOf: Fn
          }
        ),
        /* @__PURE__ */ I(
          _e,
          {
            visiblePaintOrder: sn,
            selected: z,
            editingId: w,
            camera: $,
            shapeById: cn,
            allShapes: Mt.current,
            peerCursors: f,
            isDarkMode: n,
            renderEditor: Bn,
            renderShapeBody: Hn,
            setEditingId: p,
            onBendHandleDown: vt,
            onOrthogonalSegmentHandleDown: Kt,
            onResizeHandleDown: H,
            onRotateHandleDown: Z,
            onConnectHandleDown: ht,
            onArrowEndpointDown: Pn
          }
        ),
        Nt && /* @__PURE__ */ I(
          Be,
          {
            shape: Nt,
            shapes: x,
            camera: $,
            canvasSize: { width: ((ln = c.current) == null ? void 0 : ln.clientWidth) ?? 380, height: ((dn = c.current) == null ? void 0 : dn.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!w,
            showPalette: D,
            installedFontFamilies: nt,
            setShowPalette: B,
            setActiveColor: K,
            patchSelected: an,
            applyFormat: Tn,
            applyList: Dn,
            applyCustomFontFamily: _n
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
