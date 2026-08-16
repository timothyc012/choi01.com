import { jsx as L, jsxs as j, Fragment as At } from "react/jsx-runtime";
import Vt, { useState as ot, useRef as G, useEffect as bt, useLayoutEffect as _t, useMemo as Pt, useCallback as ut, useImperativeHandle as Kn, forwardRef as Un } from "react";
import { p as Vn, i as be, k as ke, a as rt, v as Gn, c as zt, s as Rn, b as qn, d as Bt, h as Zn, C as Qn, S as Jn } from "./document-CLNFlHux.js";
import { Minus as to, Plus as eo, ChevronDown as no, AlignLeft as oo, AlignCenter as ro, AlignRight as ao, List as io, ListOrdered as co, Bold as so, Italic as lo, Underline as uo } from "lucide-react";
const ho = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover{background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover{background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', B = Object.freeze({
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
}), en = 12;
function me(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function Jt(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function te(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function ee(t, e, n, o) {
  const i = te(t, e, n), c = te(t, e, o), l = te(n, o, t), p = te(n, o, e);
  return Math.abs(i) < 1e-6 && Jt(t, n, e) || Math.abs(c) < 1e-6 && Jt(t, o, e) || Math.abs(l) < 1e-6 && Jt(n, t, o) || Math.abs(p) < 1e-6 && Jt(n, e, o) ? !0 : i > 0 != c > 0 && l > 0 != p > 0;
}
function xo(t, e, n) {
  const o = Math.min(t.x, e.x), r = Math.max(t.x, e.x), i = Math.min(t.y, e.y), c = Math.max(t.y, e.y);
  if (r < n.minX || o > n.maxX || c < n.minY || i > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const l = { x: n.minX, y: n.minY }, p = { x: n.maxX, y: n.minY }, $ = { x: n.maxX, y: n.maxY }, u = { x: n.minX, y: n.maxY };
  return ee(t, e, l, p) || ee(t, e, p, $) || ee(t, e, $, u) || ee(t, e, u, l);
}
function fo(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const o of e)
      if (xo(t[n - 1], t[n], o)) return !0;
  return !1;
}
function ge(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function $e(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = ge(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let o = 0;
  for (let i = 1; i < t.length; i++) {
    const c = Math.hypot(t[i].x - t[i - 1].x, t[i].y - t[i - 1].y);
    if (o + c >= n) {
      const l = (n - o) / c;
      return { x: t[i - 1].x + (t[i].x - t[i - 1].x) * l, y: t[i - 1].y + (t[i].y - t[i - 1].y) * l };
    }
    o += c;
  }
  const r = t[t.length - 1];
  return { x: r.x, y: r.y };
}
function Gt(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function Le(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([t, e]), i = Math.min(t, e), c = Math.max(t, e), l = en * 1.2;
  for (const p of n) {
    const $ = (o === "x" ? p.minX : p.minY) - l, u = (o === "x" ? p.maxX : p.maxY) + l, h = (a) => a >= i - l * 4 && a <= c + l * 4;
    h($) && r.add($), h(u) && r.add(u);
  }
  return [...r].sort((p, $) => Math.abs(p - t) - Math.abs($ - t));
}
function nn(t) {
  const e = [];
  for (const n of t) {
    const o = e[e.length - 1];
    (!o || o.x !== n.x || o.y !== n.y) && e.push(n);
  }
  return e;
}
function on(t) {
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
function vo(t, e, n) {
  const o = [t];
  for (const r of [...n, e]) {
    const i = o[o.length - 1];
    if (!i) {
      o.push(r);
      continue;
    }
    if (i.x === r.x || i.y === r.y) {
      o.push(r);
      continue;
    }
    o.push({ x: r.x, y: i.y }, r);
  }
  return on(o);
}
function po(t, e, n) {
  const o = t[e], r = t[e + 1];
  if (!o || !r || !Number.isFinite(n) || o.x !== r.x && o.y !== r.y) return [...t];
  const i = o.x === r.x ? [o, { x: n, y: o.y }, { x: n, y: r.y }, r] : [o, { x: o.x, y: n }, { x: r.x, y: n }, r];
  return on([
    ...t.slice(0, e),
    ...i,
    ...t.slice(e + 2)
  ]);
}
function he(t, e) {
  const n = [], o = [];
  for (const i of t) {
    const c = nn(i);
    c.length < 2 || (fo(c, e) ? o.push(c) : n.push(c));
  }
  const r = n.length > 0 ? n : o;
  return r.length === 0 ? [] : r.reduce((i, c) => ge(c) < ge(i) ? c : i);
}
function Ee(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function Ht(t, e, n, o) {
  const r = Math.min(t, e), i = Math.max(t, e), c = Math.max(48, Math.abs(e - t) * 0.35, en * 4);
  if (o === "x") {
    if (n === "e") return i + c;
    if (n === "w") return r - c;
  } else {
    if (n === "s") return i + c;
    if (n === "n") return r - c;
  }
  return t <= e ? r - c : i + c;
}
function mo(t, e, n, o, r) {
  const i = (t.x + e.x) / 2, c = (t.y + e.y) / 2;
  if (n === "u") {
    if (o) {
      const p = Ht(t.x, e.x, t.side, "x");
      return [t, { x: p, y: t.y }, { x: p, y: e.y }, e];
    }
    const l = Ht(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: l }, { x: e.x, y: l }, e];
  }
  if (n === "zigzag") {
    if (o) {
      const $ = Ht(t.x, e.x, t.side, "x"), u = Ht(t.y, e.y, t.side, "y");
      return r ? [t, { x: $, y: t.y }, { x: $, y: u }, { x: i, y: u }, { x: i, y: e.y }, e] : [t, { x: $, y: t.y }, { x: $, y: u }, { x: e.x, y: u }, e];
    }
    const l = Ht(t.y, e.y, t.side, "y"), p = Ht(t.x, e.x, t.side, "x");
    return r ? [t, { x: t.x, y: l }, { x: p, y: l }, { x: p, y: e.y }, e] : [t, { x: t.x, y: l }, { x: p, y: l }, { x: p, y: c }, { x: e.x, y: c }, e];
  }
  return [];
}
function rn(t, e, n = [], o = "elbow", r = []) {
  if (r.length > 0) return vo(t, e, r);
  const i = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), c = e.side ?? (i === "e" || i === "w" ? "w" : "n"), l = i === "e" || i === "w", p = c === "e" || c === "w", $ = Le(t.x, e.x, n, "x"), u = Le(t.y, e.y, n, "y"), h = [];
  if (l && p) {
    for (const v of $) h.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
    for (const v of u) h.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
  } else if (!l && !p) {
    for (const v of u) h.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
    for (const v of $) h.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  } else if (l) {
    h.push([t, { x: e.x, y: t.y }, e]);
    for (const v of u)
      h.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]), h.push([t, { x: t.x, y: v }, e]);
    for (const v of $) h.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  } else {
    h.push([t, { x: t.x, y: e.y }, e]);
    for (const v of u)
      h.push([t, { x: t.x, y: v }, e]), h.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
    for (const v of $) h.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  }
  const a = he(h, n);
  if (o === "elbow") return a;
  if (o === "reverse") {
    const v = Ee(a), Y = he(h.filter((w) => Ee(w) !== v), n);
    return Y.length > 1 ? Y : a;
  }
  const s = mo(t, e, o, l, p), f = he([s], n);
  return f.length > 1 ? f : a;
}
function an(t) {
  return t.length < 2 ? 0 : Gt(t[t.length - 2], t[t.length - 1]);
}
const { PI: go } = Math, Rt = go + 1e-4, Fe = 0.5, Te = [1, 1];
function Ae(t, e, n, o = (r) => r) {
  return t * o(0.5 - e * (0.5 - n));
}
const { min: xe } = Math;
function cn(t, e, n) {
  let o = xe(1, e / n);
  return xe(1, t + (xe(1, 1 - o) - t) * (o * 0.275));
}
function yo(t) {
  return [-t[0], -t[1]];
}
function Xt(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function De(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function Et(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function ye(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function Lt(t, e) {
  return [t[0] * e, t[1] * e];
}
function fe(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function wo(t, e) {
  return [t[0] / e, t[1] / e];
}
function sn(t) {
  return [t[1], -t[0]];
}
function ve(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function We(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function bo(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function ko(t) {
  return Math.hypot(t[0], t[1]);
}
function Oe(t, e) {
  let n = t[0] - e[0], o = t[1] - e[1];
  return n * n + o * o;
}
function ln(t) {
  return wo(t, ko(t));
}
function $o(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function Me(t, e, n) {
  let o = Math.sin(n), r = Math.cos(n), i = t[0] - e[0], c = t[1] - e[1], l = i * r - c * o, p = i * o + c * r;
  return [l + e[0], p + e[1]];
}
function He(t, e, n, o) {
  let r = Math.sin(o), i = Math.cos(o), c = e[0] - n[0], l = e[1] - n[1], p = c * i - l * r, $ = c * r + l * i;
  return t[0] = p + n[0], t[1] = $ + n[1], t;
}
function _e(t, e, n) {
  return Xt(t, Lt(Et(e, t), n));
}
function Mo(t, e, n, o) {
  let r = n[0] - e[0], i = n[1] - e[1];
  return t[0] = e[0] + r * o, t[1] = e[1] + i * o, t;
}
function dn(t, e, n) {
  return Xt(t, Lt(e, n));
}
const at = [0, 0], Yt = [0, 0], Nt = [0, 0];
function zo(t, e) {
  let n = dn(t, ln(sn(Et(t, Xt(t, [1, 1])))), -e), o = [], r = 1 / 13;
  for (let i = r; i <= 1; i += r) o.push(Me(n, t, Rt * 2 * i));
  return o;
}
function Co(t, e, n) {
  let o = [], r = 1 / n;
  for (let i = r; i <= 1; i += r) o.push(Me(e, t, Rt * i));
  return o;
}
function Xo(t, e, n) {
  let o = Et(e, n), r = Lt(o, 0.5), i = Lt(o, 0.51);
  return [Et(t, r), Et(t, i), Xt(t, i), Xt(t, r)];
}
function So(t, e, n, o) {
  let r = [], i = dn(t, e, n), c = 1 / o;
  for (let l = c; l < 1; l += c) r.push(Me(i, t, Rt * 3 * l));
  return r;
}
function Yo(t, e, n) {
  return [Xt(t, Lt(e, n)), Xt(t, Lt(e, n * 0.99)), Et(t, Lt(e, n * 0.99)), Et(t, Lt(e, n))];
}
function Be(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function No(t, e, n) {
  return t.slice(0, 10).reduce((o, r) => {
    let i = r.pressure;
    return e && (i = cn(o, r.distance, n)), (o + i) / 2;
  }, t[0].pressure);
}
function Io(t, e = {}) {
  let { size: n = 16, smoothing: o = 0.5, thinning: r = 0.5, simulatePressure: i = !0, easing: c = (T) => T, start: l = {}, end: p = {}, last: $ = !1 } = e, { cap: u = !0, easing: h = (T) => T * (2 - T) } = l, { cap: a = !0, easing: s = (T) => --T * T * T + 1 } = p;
  if (t.length === 0 || n <= 0) return [];
  let f = t[t.length - 1].runningLength, v = Be(l.taper, n, f), Y = Be(p.taper, n, f), w = (n * o) ** 2, m = [], b = [], d = No(t, i, n), z = Ae(n, r, t[t.length - 1].pressure, c), y, M = t[0].vector, X = t[0].point, C = X, x = X, k = C, S = !1;
  for (let T = 0; T < t.length; T++) {
    let { pressure: N } = t[T], { point: E, vector: F, distance: O, runningLength: U } = t[T], _ = T === t.length - 1;
    if (!_ && f - U < 3) continue;
    r ? (i && (N = cn(d, O, n)), z = Ae(n, r, N, c)) : z = n / 2, y === void 0 && (y = z);
    let Q = U < v ? h(U / v) : 1, et = f - U < Y ? s((f - U) / Y) : 1;
    z = Math.max(0.01, z * Math.min(Q, et));
    let R = (_ ? t[T] : t[T + 1]).vector, st = _ ? 1 : We(F, R), ft = We(F, M) < 0 && !S, vt = st !== null && st < 0;
    if (ft || vt) {
      ve(at, M), fe(at, at, z);
      for (let K = 0; K <= 1; K += 0.07692307692307693) ye(Yt, E, at), He(Yt, Yt, E, Rt * K), x = [Yt[0], Yt[1]], m.push(x), De(Nt, E, at), He(Nt, Nt, E, Rt * -K), k = [Nt[0], Nt[1]], b.push(k);
      X = x, C = k, vt && (S = !0);
      continue;
    }
    if (S = !1, _) {
      ve(at, F), fe(at, at, z), m.push(Et(E, at)), b.push(Xt(E, at));
      continue;
    }
    Mo(at, R, F, st), ve(at, at), fe(at, at, z), ye(Yt, E, at), x = [Yt[0], Yt[1]], (T <= 1 || Oe(X, x) > w) && (m.push(x), X = x), De(Nt, E, at), k = [Nt[0], Nt[1]], (T <= 1 || Oe(C, k) > w) && (b.push(k), C = k), d = N, M = F;
  }
  let I = [t[0].point[0], t[0].point[1]], P = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : Xt(t[0].point, [1, 1]), W = [], A = [];
  if (t.length === 1) {
    if (!(v || Y) || $) return zo(I, y || z);
  } else {
    v || Y && t.length === 1 || (u ? W.push(...Co(I, b[0], 13)) : W.push(...Xo(I, m[0], b[0])));
    let T = sn(yo(t[t.length - 1].vector));
    Y || v && t.length === 1 ? A.push(P) : a ? A.push(...So(P, T, z, 29)) : A.push(...Yo(P, T, z));
  }
  return m.concat(A, b.reverse(), W);
}
const je = [0, 0];
function Ke(t) {
  return t != null && t >= 0;
}
function Po(t, e = {}) {
  var a;
  let { streamline: n = 0.5, size: o = 16, last: r = !1 } = e;
  if (t.length === 0) return [];
  let i = 0.15 + (1 - n) * 0.85, c = Array.isArray(t[0]) ? t : t.map(({ x: s, y: f, pressure: v = Fe }) => [s, f, v]);
  if (c.length === 2) {
    let s = c[1];
    c = c.slice(0, -1);
    for (let f = 1; f < 5; f++) c.push(_e(c[0], s, f / 4));
  }
  c.length === 1 && (c = [...c, [...Xt(c[0], Te), ...c[0].slice(2)]]);
  let l = [{ point: [c[0][0], c[0][1]], pressure: Ke(c[0][2]) ? c[0][2] : 0.25, vector: [...Te], distance: 0, runningLength: 0 }], p = !1, $ = 0, u = l[0], h = c.length - 1;
  for (let s = 1; s < c.length; s++) {
    let f = r && s === h ? [c[s][0], c[s][1]] : _e(u.point, c[s], i);
    if (bo(u.point, f)) continue;
    let v = $o(f, u.point);
    if ($ += v, s < h && !p) {
      if ($ < o) continue;
      p = !0;
    }
    ye(je, u.point, f), u = { point: f, pressure: Ke(c[s][2]) ? c[s][2] : Fe, vector: ln(je), distance: v, runningLength: $ }, l.push(u);
  }
  return l[0].vector = ((a = l[1]) == null ? void 0 : a.vector) || [0, 0], l;
}
function Lo(t, e = {}) {
  return Io(Po(t, e), e);
}
var Eo = Lo;
function ie(t) {
  if (t.fillColor)
    try {
      return ke(t.fillColor);
    } catch {
      return t.color ? rt[t.color].bg : rt.blue.bg;
    }
  return t.color ? rt[t.color].bg : rt.blue.bg;
}
function un(t) {
  if (t.strokeColor)
    try {
      return ke(t.strokeColor);
    } catch {
      return t.color ? rt[t.color].border : "#2563eb";
    }
  return t.color ? rt[t.color].border : "#2563eb";
}
function hn(t) {
  return un(t);
}
function Dt(t) {
  if (t.textColor)
    try {
      return ke(t.textColor);
    } catch {
      return t.color ? rt[t.color].text : "#0f172a";
    }
  return t.color ? rt[t.color].text : "#0f172a";
}
function xn(t, e, n) {
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
      const o = e / 2, r = n / 2, i = Math.min(e, n) / 2, c = i * 0.4, l = [];
      for (let p = 0; p < 10; p++) {
        const $ = Math.PI / 5 * p - Math.PI / 2, u = p % 2 === 0 ? i : c;
        l.push(`${o + u * Math.cos($)},${r + u * Math.sin($)}`);
      }
      return l.join(" ");
    }
    default:
      return "";
  }
}
function fn(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [r, i] = t[o], [c, l] = t[o + 1];
    e += ` Q ${r} ${i} ${(r + c) / 2} ${(i + l) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function vn(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [i, c] = t[0], l = n === "highlighter" ? e * 1.25 : e / 2;
    return `M ${i - l} ${c} A ${l} ${l} 0 1 0 ${i + l} ${c} A ${l} ${l} 0 1 0 ${i - l} ${c} Z`;
  }
  const o = n === "highlighter" ? { size: e * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: e, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 }, r = Eo(t, o);
  return r.length === 0 ? "" : r.reduce(
    (i, [c, l], p) => i + (p === 0 ? `M ${c} ${l}` : ` L ${c} ${l}`),
    ""
  ) + " Z";
}
function It(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function pn(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], o = (r, i) => {
    r.childNodes.forEach((c) => {
      if (c.nodeType === Node.TEXT_NODE) {
        const u = c.textContent ?? "";
        u && n[n.length - 1].push({ text: u, ...i });
        return;
      }
      if (c.nodeType !== Node.ELEMENT_NODE) return;
      const l = c;
      if (l.tagName === "BR") {
        n.push([]);
        return;
      }
      const p = { bold: i.bold || l.tagName === "B" || l.tagName === "STRONG", italic: i.italic || l.tagName === "I" || l.tagName === "EM", underline: i.underline || l.tagName === "U" }, $ = l.tagName === "DIV" || l.tagName === "P" || l.tagName === "LI";
      $ && n[n.length - 1].length > 0 && n.push([]), o(l, p), $ && n.push([]);
    });
  };
  return o(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((r) => r.length > 0);
}
const Ue = /* @__PURE__ */ new WeakMap();
function se(t) {
  const e = Ue.get(t);
  if (e !== void 0) return e;
  const n = t.html ? be(t.html) : t.text ? It(t.text).replace(/\n/g, "<br>") : "";
  return Ue.set(t, n), n;
}
function we(t) {
  if (t)
    try {
      return Gn(t);
    } catch {
      return;
    }
}
function mn(t) {
  try {
    return Vn(t);
  } catch {
    return null;
  }
}
function le(t) {
  return t.html ? pn(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const ne = 12;
function Ft(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function kt(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function ct(t) {
  const e = t.rotation ?? 0, n = Ft(t);
  if (!e) return n;
  const o = kt(t), r = Math.cos(e), i = Math.sin(e), c = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([$, u]) => {
    const h = $ - o.x, a = u - o.y;
    return [o.x + h * r - a * i, o.y + h * i + a * r];
  }), l = c.map(($) => $[0]), p = c.map(($) => $[1]);
  return { minX: Math.min(...l), minY: Math.min(...p), maxX: Math.max(...l), maxY: Math.max(...p) };
}
function gn(t, e, n) {
  const o = t.rotation ?? 0;
  if (!o) return { x: e, y: n };
  const r = kt(t), i = Math.cos(-o), c = Math.sin(-o), l = e - r.x, p = n - r.y;
  return { x: r.x + l * i - p * c, y: r.y + l * c + p * i };
}
function oe(t, e, n, o, r, i) {
  const c = r - n, l = i - o, p = c * c + l * l, $ = p === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * c + (e - o) * l) / p));
  return Math.hypot(t - (n + $ * c), e - (o + $ * l));
}
function ce(t, e, n, o, r, i) {
  const c = 8 / o;
  if (t.type === "arrow") {
    const $ = (t.strokeWidth ?? 2.5) / o / 2 + c, u = Ct(t, r ?? /* @__PURE__ */ new Map(), i);
    if (u.routing === "orthogonal" && u.pathPoints && u.pathPoints.length > 1) {
      for (let a = 1; a < u.pathPoints.length; a++) {
        const s = u.pathPoints[a - 1], f = u.pathPoints[a];
        if (oe(e, n, s.x, s.y, f.x, f.y) <= $) return !0;
      }
      return !1;
    }
    if (u.bend === 0) return oe(e, n, u.start.x, u.start.y, u.end.x, u.end.y) <= $;
    let h = u.start;
    for (let a = 1; a <= 16; a++) {
      const s = qt(a / 16, u.start, u.control, u.end);
      if (oe(e, n, h.x, h.y, s.x, s.y) <= $) return !0;
      h = s;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const h = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / o / 2 + c;
    if (t.points.length === 1) {
      const [a, s] = t.points[0];
      return Math.hypot(e - a, n - s) <= h;
    }
    for (let a = 1; a < t.points.length; a++) {
      const [s, f] = t.points[a - 1], [v, Y] = t.points[a];
      if (oe(e, n, s, f, v, Y) <= h) return !0;
    }
    return !1;
  }
  const l = gn(t, e, n), p = Ft(t);
  if (t.type === "frame") {
    const $ = l.x >= p.minX - c && l.x <= p.maxX + c && l.y >= p.minY - c && l.y <= p.maxY + c && (l.x <= p.minX + c || l.x >= p.maxX - c || l.y <= p.minY + c || l.y >= p.maxY - c), u = l.x >= p.minX - c && l.x <= p.maxX + c && l.y >= p.minY - 28 / o && l.y <= p.minY;
    return $ || u;
  }
  return l.x >= p.minX - c && l.x <= p.maxX + c && l.y >= p.minY - c && l.y <= p.maxY + c;
}
function Wt(t, e, n) {
  const o = Ft(t), r = (o.minX + o.maxX) / 2, i = (o.minY + o.maxY) / 2, c = e - r, l = n - i;
  if (c === 0 && l === 0) return { x: r, y: i, side: "e" };
  const p = (o.maxX - o.minX) / 2, $ = (o.maxY - o.minY) / 2, u = p === 0 ? 1 / 0 : Math.abs(p / c), h = $ === 0 ? 1 / 0 : Math.abs($ / l);
  return u <= h ? { x: r + c * u, y: i + l * u, side: c >= 0 ? "e" : "w" } : { x: r + c * h, y: i + l * h, side: l >= 0 ? "s" : "n" };
}
function yn(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([e.id, n, o]);
  return t.filter((i) => !r.has(i.id)).map((i) => {
    const c = ct(i);
    return { minX: c.minX - ne, minY: c.minY - ne, maxX: c.maxX + ne, maxY: c.maxY + ne };
  }).filter((i) => i.maxX > i.minX && i.maxY > i.minY);
}
function Ct(t, e, n = []) {
  const o = t.fromId ? e.get(t.fromId) : void 0, r = t.toId ? e.get(t.toId) : void 0;
  let i = { x: t.x, y: t.y }, c = { x: t.x + t.w, y: t.y + t.h };
  if (o && r) {
    const f = kt(o), v = kt(r);
    i = Wt(o, v.x, v.y), c = Wt(r, f.x, f.y);
  } else o ? i = Wt(o, c.x, c.y) : r && (c = Wt(r, i.x, i.y));
  const l = (i.x + c.x) / 2, p = (i.y + c.y) / 2, $ = t.bend ?? 0;
  let u = { x: l, y: p };
  if ($ !== 0) {
    const f = c.x - i.x, v = c.y - i.y, Y = Math.hypot(f, v) || 1;
    u = { x: l + -v / Y * $, y: p + f / Y * $ };
  }
  const h = !!(o || r), a = t.routing ?? (h ? "orthogonal" : $ !== 0 ? "curved" : "straight");
  if (a !== "orthogonal") return { start: i, end: c, control: u, bend: $, routing: a };
  const s = yn(n, t, o == null ? void 0 : o.id, r == null ? void 0 : r.id);
  return {
    start: i,
    end: c,
    control: u,
    bend: $,
    routing: a,
    pathPoints: nn(rn(i, c, s, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function qt(t, e, n, o) {
  const r = 1 - t;
  return { x: r * r * e.x + 2 * r * t * n.x + t * t * o.x, y: r * r * e.y + 2 * r * t * n.y + t * t * o.y };
}
function wn(t, e, n, o, r) {
  const i = [];
  let c = 0;
  for (const l of t) {
    if (l.type !== "draw" || !l.points) {
      if (ce(l, e, n, r)) continue;
      i.push(l);
      continue;
    }
    const p = [];
    let $ = [];
    for (const [h, a] of l.points)
      Math.hypot(h - e, a - n) <= o / r ? ($.length > 1 && p.push($), $ = []) : $.push([h, a]);
    if ($.length > 1 && p.push($), p.length === 0) continue;
    const u = Ft(l);
    p.forEach((h) => i.push({ ...l, id: `${l.id}-e${c++}`, points: h, x: u.minX, y: u.minY, w: u.maxX - u.minX, h: u.maxY - u.minY }));
  }
  return i;
}
function Fo(t, e, n) {
  const o = 6 / n;
  let r = null, i = null;
  const c = [], l = [t.minX, (t.minX + t.maxX) / 2, t.maxX], p = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const $ of e) {
    const u = ct($), h = [u.minX, (u.minX + u.maxX) / 2, u.maxX], a = [u.minY, (u.minY + u.maxY) / 2, u.maxY];
    for (const s of l) for (const f of h) {
      const v = f - s;
      Math.abs(v) <= o && (!r || Math.abs(v) < Math.abs(r.delta)) && (r = { delta: v, at: f });
    }
    for (const s of p) for (const f of a) {
      const v = f - s;
      Math.abs(v) <= o && (!i || Math.abs(v) < Math.abs(i.delta)) && (i = { delta: v, at: f });
    }
  }
  return r && c.push({ x1: r.at, y1: t.minY - 1e3, x2: r.at, y2: t.maxY + 1e3 }), i && c.push({ x1: t.minX - 1e3, y1: i.at, x2: t.maxX + 1e3, y2: i.at }), { dx: (r == null ? void 0 : r.delta) ?? 0, dy: (i == null ? void 0 : i.delta) ?? 0, guides: c };
}
const To = Vt.memo(function({
  shape: e,
  cameraZoom: n,
  color: o,
  isActive: r
}) {
  if (!e.points) return null;
  const i = e.drawMode ?? "pen", c = e.strokeWidth ?? 3, l = !r && e.points.length >= 2 ? vn(e.points, c, i) : "";
  return /* @__PURE__ */ L(
    "path",
    {
      "data-canvas-vector-shape-id": e.id,
      "data-canvas-vector-shape-type": "draw",
      "data-canvas-draw-mode": i,
      "data-canvas-stroke-width": c,
      d: l || fn(e.points),
      fill: l ? o : "none",
      stroke: l ? "none" : o,
      strokeWidth: c / n,
      strokeOpacity: i === "highlighter" ? 0.35 : void 0,
      fillOpacity: i === "highlighter" ? 0.35 : void 0,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  );
}), Ao = 14;
function Do({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: o,
  camera: r,
  interaction: i,
  eraserPos: c,
  guides: l,
  marquee: p,
  strokeColorOf: $
}) {
  return /* @__PURE__ */ L("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ j("g", { transform: `scale(${r.z}) translate(${-r.x}, ${-r.y})`, children: [
    t.map((u) => {
      if (u.type === "draw" && u.points) {
        const x = e.has(u.id), k = i.kind === "drawing" && i.id === u.id;
        return /* @__PURE__ */ L(
          To,
          {
            shape: u,
            cameraZoom: r.z,
            color: x ? B.blue : $(u),
            isActive: k
          },
          u.id
        );
      }
      if (u.type !== "arrow") return null;
      const h = e.has(u.id) ? B.blue : $(u), a = Ct(u, n, o), s = u.strokeWidth ?? 2.5, f = s / r.z, v = Math.max(10, 8 + s * 2), Y = Math.max(4, 2 + s), w = v / r.z, m = Y / r.z, b = a.routing === "orthogonal" && a.pathPoints ? a.pathPoints : null, d = b && b.length > 1;
      let z, y;
      if (d)
        z = me(b), y = an(b);
      else if (a.routing === "curved") {
        z = `M ${a.start.x} ${a.start.y} Q ${a.control.x} ${a.control.y} ${a.end.x} ${a.end.y}`;
        const x = qt(0.94, a.start, a.control, a.end);
        y = Math.atan2(a.end.y - x.y, a.end.x - x.x);
      } else
        z = `M ${a.start.x} ${a.start.y} L ${a.end.x} ${a.end.y}`, y = Math.atan2(a.end.y - a.start.y, a.end.x - a.start.x);
      const M = d && b.length >= 2 ? Gt(b[0], b[1]) : a.routing === "orthogonal" && a.start.side ? a.start.side === "e" ? 0 : a.start.side === "w" ? Math.PI : a.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Gt(a.start, a.end), X = u.strokeStyle === "dashed" ? `${8 / r.z} ${5 / r.z}` : u.strokeStyle === "dotted" ? `${1.5 / r.z} ${4 / r.z}` : void 0, C = (x, k, S, I) => x === "dot" ? /* @__PURE__ */ L("circle", { "data-canvas-arrow-dot-radius": Y, cx: k, cy: S, r: m, fill: h }) : x === "none" ? null : /* @__PURE__ */ L(
        "polygon",
        {
          "data-canvas-arrowhead-size": v,
          points: `${k},${S} ${k - w * Math.cos(I - 0.4)},${S - w * Math.sin(I - 0.4)} ${k - w * Math.cos(I + 0.4)},${S - w * Math.sin(I + 0.4)}`,
          fill: h
        }
      );
      return /* @__PURE__ */ j("g", { "data-canvas-vector-shape-id": u.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": a.routing, "data-canvas-stroke-width": s, children: [
        /* @__PURE__ */ L("path", { d: z, fill: "none", stroke: h, strokeWidth: f, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: X }),
        C(u.arrowEnd ?? "arrow", a.end.x, a.end.y, y),
        C(u.arrowStart ?? "none", a.start.x, a.start.y, M + Math.PI)
      ] }, u.id);
    }),
    i.kind === "connect" && i.fromId !== void 0 && i.toX !== void 0 && i.toY !== void 0 && (() => {
      const u = n.get(i.fromId);
      if (!u) return null;
      const h = Wt(u, i.toX, i.toY), a = i.hoverId ? n.get(i.hoverId) : null, s = a ? Wt(a, h.x, h.y) : { x: i.toX, y: i.toY }, f = a ? rn(h, s, yn(o, { id: "__preview" }, u.id, a.id)) : [h, s];
      return /* @__PURE__ */ j("g", { children: [
        /* @__PURE__ */ L("path", { d: me(f), stroke: B.blue, strokeWidth: 2 / r.z, strokeDasharray: `${5 / r.z} ${4 / r.z}` }),
        a ? /* @__PURE__ */ L("rect", { x: ct(a).minX - 3 / r.z, y: ct(a).minY - 3 / r.z, width: ct(a).maxX - ct(a).minX + 6 / r.z, height: ct(a).maxY - ct(a).minY + 6 / r.z, fill: "none", stroke: B.blue, strokeWidth: 2 / r.z, rx: 6 / r.z }) : /* @__PURE__ */ L("circle", { cx: s.x, cy: s.y, r: 5 / r.z, fill: B.blue })
      ] });
    })(),
    c && /* @__PURE__ */ L("circle", { cx: c.x, cy: c.y, r: Ao / r.z, fill: B.roseSoft, stroke: B.rose, strokeWidth: 1 / r.z }),
    l.map((u, h) => /* @__PURE__ */ L("line", { x1: u.x1, y1: u.y1, x2: u.x2, y2: u.y2, stroke: B.pink, strokeWidth: 1 / r.z, strokeDasharray: `${4 / r.z} ${4 / r.z}` }, `guide-${h}`)),
    p && /* @__PURE__ */ L("rect", { x: Math.min(p.startX, p.curX), y: Math.min(p.startY, p.curY), width: Math.abs(p.curX - p.startX), height: Math.abs(p.curY - p.startY), fill: B.marqueeFill, stroke: B.blue, strokeWidth: 1 / r.z })
  ] }) });
}
const Wo = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], Oo = /* @__PURE__ */ new Set([
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
]), Ho = [
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
function de(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function bn(t) {
  return Oo.has(t.trim().toLowerCase());
}
function kn(t) {
  const e = de(t);
  return e ? bn(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function _o(t) {
  return de(t).split(",").map((e) => e.trim()).filter(Boolean).map(kn).filter(Boolean).join(", ");
}
function $n(t) {
  return de(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Kt(t) {
  return t.split(",").map((e) => de(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !bn(e));
}
const re = Array.from(/* @__PURE__ */ new Set([
  ...Ho,
  ...Kt(zt.sans.stack),
  ...Kt(zt.serif.stack),
  ...Kt(zt.mono.stack),
  ...Kt(zt.gothic.stack),
  ...Kt(zt.korean.stack)
]));
function Bo() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return re;
  const t = re.filter((e) => {
    const n = kn(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : re;
}
const jo = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, Ko = 24, Uo = 28, Mn = 720;
function ht(t) {
  return t.fontSize ?? jo[t.type] ?? 14;
}
function xt(t) {
  var e;
  if (!t.fontFamily) return zt.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = $n(Rn(t.customFontFamily ?? ""));
    } catch {
    }
    return _o(n) || zt.sans.stack;
  }
  return ((e = zt[t.fontFamily]) == null ? void 0 : e.stack) ?? zt.sans.stack;
}
function wt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function Vo(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function Go(t) {
  var e, n, o;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((o = t.html) != null && o.includes("<ol>")) return "number";
}
function Ro(t, e) {
  return {
    w: Math.min(Mn, Math.max(Ko, Math.ceil(t))),
    h: Math.max(Uo, Math.ceil(e))
  };
}
function qo(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = be(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${Mn}px`,
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
    fontSize: `${ht(e)}px`,
    fontFamily: xt(e)
  }), document.body.appendChild(n);
  const o = n.getBoundingClientRect();
  return n.remove(), Ro(o.width, o.height);
}
const Zo = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), Qo = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function Jo({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: o,
  shapeById: r,
  allShapes: i,
  peerCursors: c,
  isDarkMode: l,
  renderEditor: p,
  renderShapeBody: $,
  setEditingId: u,
  onBendHandleDown: h,
  onOrthogonalSegmentHandleDown: a,
  onResizeHandleDown: s,
  onRotateHandleDown: f,
  onConnectHandleDown: v,
  onArrowEndpointDown: Y
}) {
  return /* @__PURE__ */ j(At, { children: [
    /* @__PURE__ */ L("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((w) => {
      if (w.type === "draw") return null;
      if (w.type === "arrow") {
        const d = Ct(w, r, i), z = d.routing === "orthogonal" && d.pathPoints ? $e(d.pathPoints) : d.routing === "curved" ? qt(0.5, d.start, d.control, d.end) : { x: (d.start.x + d.end.x) / 2, y: (d.start.y + d.end.y) / 2 }, y = n === w.id, M = se(w), X = e.has(w.id), C = le(w).trim(), x = M || (X ? "관계 입력" : "");
        return !x && !y ? null : /* @__PURE__ */ L(Vt.Fragment, { children: /* @__PURE__ */ L("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: z.x - 90, top: z.y - 18, width: 180, height: 36 }, onDoubleClick: (k) => {
          k.stopPropagation(), u(w.id);
        }, children: (x || y) && /* @__PURE__ */ L(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": C ? `관계 설명: ${C}` : "관계 설명 입력",
            title: y ? void 0 : C ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${l ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: ht(w),
              fontFamily: xt(w),
              maxWidth: "100%",
              minWidth: y ? 120 / o.z : void 0,
              minHeight: y ? 28 / o.z : void 0,
              color: w.textColor
            },
            children: y ? p("text-center whitespace-nowrap") : /* @__PURE__ */ L("span", { dangerouslySetInnerHTML: { __html: x } }, "canvas-view")
          }
        ) }) }, w.id);
      }
      const m = e.has(w.id), b = Ft(w);
      return /* @__PURE__ */ j(
        "div",
        {
          "data-canvas-shape-id": w.id,
          "data-canvas-shape-type": w.type,
          "data-canvas-selected": m ? "true" : void 0,
          "data-canvas-text-align": wt(w),
          "data-canvas-text-color": w.textColor,
          "data-canvas-font-size": ht(w),
          "data-canvas-font-family": w.fontFamily === "custom" ? w.customFontFamily ?? "custom" : w.fontFamily ?? "sans",
          "data-canvas-manual-size": w.manualSize ? "true" : void 0,
          "data-canvas-group-id": w.groupId,
          "data-canvas-list-kind": Go(w),
          "data-canvas-x": w.x,
          "data-canvas-y": w.y,
          "data-canvas-width": w.w,
          "data-canvas-height": w.h,
          className: "absolute",
          style: { left: b.minX, top: b.minY, width: b.maxX - b.minX, height: b.maxY - b.minY, transform: w.rotation ? `rotate(${w.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (d) => {
            d.stopPropagation(), Zo.has(w.type) && u(w.id);
          },
          children: [
            $(w),
            m && /* @__PURE__ */ j(At, { children: [
              /* @__PURE__ */ L("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${B.blue}` } }),
              e.size === 1 && /* @__PURE__ */ j(At, { children: [
                ["nw", "ne", "sw", "se"].map((d) => /* @__PURE__ */ L("div", { "data-canvas-resize-handle": d, onPointerDown: (z) => s(z, w, d), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${d}-resize`, left: d.includes("w") ? -5 / o.z : void 0, right: d.includes("e") ? -5 / o.z : void 0, top: d.includes("n") ? -5 / o.z : void 0, bottom: d.includes("s") ? -5 / o.z : void 0 } }, d)),
                /* @__PURE__ */ L("div", { onPointerDown: (d) => f(d, w), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                Qo.has(w.type) && ["n", "s", "w", "e"].map((d) => /* @__PURE__ */ L("div", { onPointerDown: (z) => v(z, w), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...d === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : d === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : d === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${d}`))
              ] })
            ] })
          ]
        },
        w.id
      );
    }) }),
    e.size === 1 && i.filter((w) => w.type === "arrow" && e.has(w.id)).map((w) => {
      const m = Ct(w, r, i), b = (d, z) => ({
        left: (d.x - o.x) * o.z - z / 2,
        top: (d.y - o.y) * o.z - z / 2
      });
      return /* @__PURE__ */ j(Vt.Fragment, { children: [
        m.routing === "orthogonal" && m.pathPoints && m.pathPoints.length > 2 ? m.pathPoints.slice(0, -1).map((d, z) => {
          var X;
          const y = (X = m.pathPoints) == null ? void 0 : X[z + 1];
          if (!y) return null;
          const M = { x: (d.x + y.x) / 2, y: (d.y + y.y) / 2 };
          return /* @__PURE__ */ L("div", { "data-canvas-arrow-segment-handle": z, onPointerDown: (C) => a(C, w, z), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...b(M, 12), cursor: d.x === y.x ? "ew-resize" : "ns-resize" } }, `segment-${z}`);
        }) : m.routing === "curved" && /* @__PURE__ */ L("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (d) => h(d, w), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (m.start.x + m.end.x) / 2 * o.z - o.x * o.z - 5, top: (m.start.y + m.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map((d) => {
          const z = d === "start" ? m.start : m.end;
          return /* @__PURE__ */ L("div", { "data-canvas-arrow-endpoint": d, onPointerDown: (y) => Y(y, w, d), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...b(z, 12), cursor: "grab" } }, d);
        })
      ] }, `arrow-handles-${w.id}`);
    }),
    c == null ? void 0 : c.map((w) => /* @__PURE__ */ j("div", { className: "absolute pointer-events-none z-40", style: { left: (w.x - o.x) * o.z, top: (w.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ L("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ L("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: w.color, stroke: B.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ L("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: w.color }, children: w.name })
    ] }, w.id))
  ] });
}
function zn(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function tr(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), zn(t) && e.push("diagram"), e;
}
function Hr(t) {
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
const er = "#3b82f6";
function Tt(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function ae(t) {
  return Math.round(Tt(t, 0, 255)).toString(16).padStart(2, "0");
}
function nr(t) {
  const e = t.trim().endsWith("%"), n = Number.parseFloat(t);
  return Number.isFinite(n) ? e ? n * 2.55 : n : 0;
}
function Ut(t) {
  var i, c;
  const e = t.trim().toLowerCase(), n = (i = e.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : i[1];
  if (n)
    return n.length === 3 || n.length === 4 ? `#${n.slice(0, 3).split("").map((l) => `${l}${l}`).join("")}` : `#${n.slice(0, 6)}`;
  const o = (c = e.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : c[1];
  if (o) {
    const l = o.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(nr);
    if (l.length === 3) return `#${l.map(ae).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? er;
}
function Ve(t) {
  const e = Ut(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, o = Number.parseInt(e.slice(2, 4), 16) / 255, r = Number.parseInt(e.slice(4, 6), 16) / 255, i = Math.max(n, o, r), c = Math.min(n, o, r), l = i - c;
  let p = 0;
  return l !== 0 && (i === n ? p = 60 * ((o - r) / l % 6) : i === o ? p = 60 * ((r - n) / l + 2) : p = 60 * ((n - o) / l + 4)), p < 0 && (p += 360), { hue: p, saturation: i === 0 ? 0 : l / i, value: i };
}
function Ge({ hue: t, saturation: e, value: n }) {
  const o = (t % 360 + 360) % 360, r = n * e, i = r * (1 - Math.abs(o / 60 % 2 - 1)), c = n - r;
  let l = 0, p = 0, $ = 0;
  return o < 60 ? [l, p, $] = [r, i, 0] : o < 120 ? [l, p, $] = [i, r, 0] : o < 180 ? [l, p, $] = [0, r, i] : o < 240 ? [l, p, $] = [0, i, r] : o < 300 ? [l, p, $] = [i, 0, r] : [l, p, $] = [r, 0, i], `#${ae((l + c) * 255)}${ae((p + c) * 255)}${ae(($ + c) * 255)}`;
}
function or(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function rr({ value: t, onChange: e }) {
  const [n, o] = ot(() => Ve(t)), r = G(null), i = G(null), c = G(null);
  bt(() => {
    const m = Ve(t);
    o((b) => or(b, m) ? b : m);
  }, [t]);
  const l = (m) => {
    o(m), e(Ge(m));
  }, p = (m) => {
    var M;
    const b = (M = r.current) == null ? void 0 : M.getBoundingClientRect();
    if (!b) return;
    const d = m.clientX - (b.left + b.width / 2), z = m.clientY - (b.top + b.height / 2), y = Math.atan2(z, d) * 180 / Math.PI + 90;
    l({ ...n, hue: (y + 360) % 360 });
  }, $ = (m) => {
    var d;
    const b = (d = i.current) == null ? void 0 : d.getBoundingClientRect();
    b && l({
      ...n,
      saturation: Tt((m.clientX - b.left) / b.width, 0, 1),
      value: Tt(1 - (m.clientY - b.top) / b.height, 0, 1)
    });
  }, u = (m, b) => {
    var d, z;
    b.button !== 0 && b.pointerType !== "touch" || (b.preventDefault(), b.stopPropagation(), c.current = m, (z = (d = b.currentTarget).setPointerCapture) == null || z.call(d, b.pointerId), m === "hue" ? p(b) : $(b));
  }, h = (m) => {
    c.current && (m.preventDefault(), c.current === "hue" ? p(m) : $(m));
  }, a = (m) => {
    var b, d;
    c.current = null;
    try {
      (d = (b = m.currentTarget).releasePointerCapture) == null || d.call(b, m.pointerId);
    } catch {
      return;
    }
  }, s = (n.hue - 90) * Math.PI / 180, f = 53, v = {
    left: 66 + Math.cos(s) * f,
    top: 66 + Math.sin(s) * f
  }, Y = Ge({ hue: n.hue, saturation: 1, value: 1 }), w = (m) => l({ ...n, hue: (n.hue + m + 360) % 360 });
  return /* @__PURE__ */ j("div", { className: "canvas-color-wheel", "data-canvas-color-wheel": !0, children: [
    /* @__PURE__ */ j(
      "div",
      {
        ref: r,
        className: "canvas-color-wheel-hue",
        role: "slider",
        "aria-label": "색상 색상환",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(n.hue),
        tabIndex: 0,
        onPointerDown: (m) => u("hue", m),
        onPointerMove: h,
        onPointerUp: a,
        onKeyDown: (m) => {
          (m.key === "ArrowLeft" || m.key === "ArrowDown") && (m.preventDefault(), w(-1)), (m.key === "ArrowRight" || m.key === "ArrowUp") && (m.preventDefault(), w(1));
        },
        children: [
          /* @__PURE__ */ L("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ L("span", { className: "canvas-color-wheel-hue-marker", style: { left: v.left, top: v.top } })
        ]
      }
    ),
    /* @__PURE__ */ L(
      "div",
      {
        ref: i,
        className: "canvas-color-wheel-sv",
        role: "slider",
        "aria-label": "채도와 밝기",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(n.saturation * n.value * 100),
        tabIndex: 0,
        style: { backgroundColor: Y },
        onPointerDown: (m) => u("sv", m),
        onPointerMove: h,
        onPointerUp: a,
        onKeyDown: (m) => {
          const b = m.shiftKey ? 0.1 : 0.02;
          m.key === "ArrowLeft" && (m.preventDefault(), l({ ...n, saturation: Tt(n.saturation - b, 0, 1) })), m.key === "ArrowRight" && (m.preventDefault(), l({ ...n, saturation: Tt(n.saturation + b, 0, 1) })), m.key === "ArrowDown" && (m.preventDefault(), l({ ...n, value: Tt(n.value - b, 0, 1) })), m.key === "ArrowUp" && (m.preventDefault(), l({ ...n, value: Tt(n.value + b, 0, 1) }));
        },
        children: /* @__PURE__ */ L("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${n.saturation * 100}%`, top: `${(1 - n.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ j("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ L("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ L("span", { children: Ut(t).toUpperCase() })
    ] })
  ] });
}
const ar = [2, 4, 6, 8];
function ir(t) {
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
      return Cn(t);
  }
}
function cr(t) {
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
      return Cn(t);
  }
}
function Cn(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function pe(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Re(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function sr({
  shape: t,
  shapes: e,
  camera: n,
  canvasSize: o,
  isDarkMode: r,
  editing: i,
  showPalette: c,
  installedFontFamilies: l,
  setShowPalette: p,
  setActiveColor: $,
  patchSelected: u,
  applyFormat: h,
  applyList: a,
  applyCustomFontFamily: s
}) {
  var Ot, St;
  const f = r ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", v = t.type === "draw", Y = v || Re(t) && !pe(t) ? "stroke" : pe(t) ? "fill" : "text", [w, m] = ot(Y), [b, d] = ot("");
  _t(() => m(Y), [Y, t.id]);
  const z = w === "text" ? Dt(t) : w === "stroke" ? t.strokeColor ?? (t.color ? rt[t.color].border : B.ink) : ie(t);
  _t(() => d(Ut(z).toUpperCase()), [z]);
  const y = Ut(z), M = (g) => {
    u(v || w === "stroke" ? { strokeColor: g } : w === "text" ? { textColor: g } : { fillColor: g });
  }, X = (g) => {
    $(g), u(v || w === "stroke" ? { color: g, strokeColor: void 0 } : w === "text" ? { textColor: rt[g].text } : { color: g, fillColor: void 0 }), p(!1);
  }, C = G(null), [x, k] = ot({ width: 380, height: 260 });
  _t(() => {
    const g = C.current;
    if (!g) return;
    const D = () => {
      const V = Math.max(1, Math.ceil(g.getBoundingClientRect().width)), it = Math.max(1, Math.ceil(g.getBoundingClientRect().height));
      k((gt) => gt.width === V && gt.height === it ? gt : { width: V, height: it });
    };
    if (D(), typeof ResizeObserver > "u") return;
    const H = new ResizeObserver(D);
    return H.observe(g), () => H.disconnect();
  }, [i, l.length, r, t, c]);
  const S = x.width, I = x.height, P = ct(t), W = (P.minX - n.x) * n.z, A = (P.minY - n.y) * n.z, T = (P.maxX - n.x) * n.z, N = (P.maxY - n.y) * n.z, E = Math.max(8, o.width - S - 8), F = Math.max(8, o.height - I - 8), O = (g, D) => ({ left: Math.min(Math.max(8, g), E), top: Math.min(Math.max(8, D), F) }), U = [
    O((W + T) / 2 - S / 2, A - I - 12),
    O((W + T) / 2 - S / 2, N + 12),
    O((o.width - S) / 2, 12),
    O(W - S - 12, A + (N - A - I) / 2),
    O(T + 12, A + (N - A - I) / 2)
  ], _ = e.map((g) => {
    const D = ct(g);
    return { left: (D.minX - n.x) * n.z, top: (D.minY - n.y) * n.z, right: (D.maxX - n.x) * n.z, bottom: (D.maxY - n.y) * n.z };
  });
  if (t.type === "arrow") {
    const g = Ct(t, new Map(e.map((it) => [it.id, it])), e), D = g.routing === "orthogonal" && g.pathPoints ? $e(g.pathPoints) : { x: (g.start.x + g.end.x) / 2, y: (g.start.y + g.end.y) / 2 }, H = 180 * n.z, V = 36 * n.z;
    _.push({
      left: (D.x - n.x) * n.z - H / 2,
      top: (D.y - n.y) * n.z - V / 2,
      right: (D.x - n.x) * n.z + H / 2,
      bottom: (D.y - n.y) * n.z + V / 2
    });
  }
  const Q = U[0], et = (g, D) => {
    const H = Math.max(0, Math.min(g.left + S, D.right) - Math.max(g.left, D.left)), V = Math.max(0, Math.min(g.top + I, D.bottom) - Math.max(g.top, D.top));
    return H * V;
  }, R = ((Ot = U.map((g) => ({
    candidate: g,
    overlap: _.reduce((D, H) => D + et(g, H), 0),
    distance: Math.hypot(g.left - Q.left, g.top - Q.top)
  })).sort((g, D) => g.overlap - D.overlap || g.distance - D.distance)[0]) == null ? void 0 : Ot.candidate) ?? Q, st = ht(t), ft = cr(t), vt = ir(t), K = tr(t), Z = t.type === "arrow" ? "arrow" : K[0] ?? "color", [q, mt] = ot(Z);
  _t(() => {
    K.includes(q) || mt(Z);
  }, [Z, K, q]);
  const $t = t.type === "arrow" && !!((St = t.orthogonalWaypoints) != null && St.length), nt = t.type === "arrow" ? t.arrowStart ?? "none" : "none", J = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", tt = (g, D, H, V, it = V) => /* @__PURE__ */ L("button", { type: "button", title: V, "aria-label": it, onClick: H, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${D ? "bg-blue-600 text-white" : f}`, children: g }), lt = (g) => /* @__PURE__ */ L("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: g }), Mt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ j("div", { ref: C, "data-canvas-inspector": v ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${r ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: R.left, top: R.top }, onPointerDown: (g) => {
    g.stopPropagation();
    const D = g.target instanceof Element ? g.target : null;
    D != null && D.closest("input, select, textarea") || g.preventDefault();
  }, onClick: (g) => g.stopPropagation(), children: [
    /* @__PURE__ */ L("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: K.map((g) => /* @__PURE__ */ L("button", { type: "button", role: "tab", "aria-selected": q === g, onClick: () => mt(g), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${q === g ? "bg-blue-600 text-white" : f}`, children: Mt[g] }, g)) }),
    /* @__PURE__ */ j("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: q === "color" || v ? void 0 : "none" }, children: [
      /* @__PURE__ */ L("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: v ? "그리기" : "색상" }),
      /* @__PURE__ */ L("button", { type: "button", title: v ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": v ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => p((g) => !g), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${r ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ L("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ L("span", { className: "canvas-color-wheel-trigger-dot", style: { background: y } }) }) }),
      c && /* @__PURE__ */ j("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${r ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !v && /* @__PURE__ */ j("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          pe(t) && /* @__PURE__ */ L("button", { type: "button", role: "tab", "aria-selected": w === "fill", onClick: () => m("fill"), className: w === "fill" ? "is-active" : "", children: "배경" }),
          Re(t) && /* @__PURE__ */ L("button", { type: "button", role: "tab", "aria-selected": w === "stroke", onClick: () => m("stroke"), className: w === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ L("button", { type: "button", role: "tab", "aria-selected": w === "text", onClick: () => m("text"), className: w === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ L("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: qn.map((g) => /* @__PURE__ */ L("button", { type: "button", title: rt[g].label, "aria-label": `색 ${rt[g].label}`, onClick: () => X(g), className: "canvas-color-preset", style: { background: rt[g].bg, borderColor: rt[g].border, outline: t.color === g && !t.fillColor && !t.strokeColor ? `2px solid ${B.blue}` : void 0, outlineOffset: 1 } }, g)) }),
        /* @__PURE__ */ L(rr, { value: z, onChange: M }),
        /* @__PURE__ */ j("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ L("span", { children: "#" }),
          /* @__PURE__ */ L(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: b.replace(/^#/, ""),
              onChange: (g) => {
                const D = g.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                d(`#${D}`.toUpperCase()), D.length === 6 && M(`#${D}`);
              },
              onBlur: () => d(Ut(z).toUpperCase()),
              onPointerDown: (g) => g.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    q !== "color" && !v && /* @__PURE__ */ j(At, { children: [
      /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ L("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ j("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: Dt(t), color: B.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ L("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ L("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? Dt(t), onChange: (g) => u({ textColor: g.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ j("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${r ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ L("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ L("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => u({ fontSize: Math.max(8, st - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${f}`, children: /* @__PURE__ */ L(to, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ L("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: st }),
          /* @__PURE__ */ L("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => u({ fontSize: Math.min(96, st + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${f}`, children: /* @__PURE__ */ L(eo, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ j("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${r ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ L("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (g) => {
            const D = Vo(g.target.value);
            u(D === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: D, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${r ? "text-slate-200" : "text-slate-700"}`, children: Wo.map((g) => /* @__PURE__ */ L("option", { value: g, className: r ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: zt[g].label }, g)) }),
          /* @__PURE__ */ L(no, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ j(At, { children: [
          /* @__PURE__ */ L("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (g) => s(g.target.value), onChange: (g) => g.currentTarget.value && s(g.currentTarget.value), onKeyDown: (g) => {
            g.key === "Enter" && (g.preventDefault(), s(g.currentTarget.value));
          }, onDoubleClick: (g) => g.stopPropagation(), onPointerDown: (g) => g.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${r ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ L("datalist", { id: `canvas-font-families-${t.id}`, children: l.map((g) => /* @__PURE__ */ L("option", { value: g }, g)) })
        ] })
      ] }),
      /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${r ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ L("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ L("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", oo, "왼쪽 정렬"], ["center", ro, "가운데 정렬"], ["right", ao, "오른쪽 정렬"]].map(([g, D, H]) => /* @__PURE__ */ L("button", { type: "button", "aria-label": H, title: H, onClick: () => u({ textAlign: g }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${wt(t) === g ? "bg-blue-600 text-white shadow-sm" : f}`, children: /* @__PURE__ */ L(D, { className: "w-4 h-4" }) }, g)) }),
        i && /* @__PURE__ */ j(At, { children: [
          /* @__PURE__ */ L("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ L("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", io, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", co, "번호 목록"]].map(([g, D, H]) => /* @__PURE__ */ L("button", { type: "button", onClick: () => a(g), "aria-label": H, title: H, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${f}`, children: D ? /* @__PURE__ */ L(D, { className: "w-4 h-4" }) : /* @__PURE__ */ L("span", { className: "text-base leading-none", children: "–" }) }, g)) }),
          /* @__PURE__ */ L("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${r ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: so, label: "굵게" }, { cmd: "italic", Icon: lo, label: "기울임" }, { cmd: "underline", Icon: uo, label: "밑줄" }].map(({ cmd: g, Icon: D, label: H }) => /* @__PURE__ */ L("button", { type: "button", onClick: () => h(g), "aria-label": H, title: H, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${f}`, children: /* @__PURE__ */ L(D, { className: "w-4 h-4" }) }, g)) })
        ] })
      ] }),
      (q === "arrange" && t.type === "card" || q === "arrow" && t.type === "arrow") && /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${r ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ j(At, { children: [
          /* @__PURE__ */ L("div", { className: `w-px h-6 ${r ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ L("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (g) => g.stopPropagation(), onChange: (g) => u({ category: g.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${r ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            lt("경로"),
            tt("직선", (t.routing ?? "straight") === "straight", () => u({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            tt("직각", t.routing === "orthogonal", () => u({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            tt("곡선", (t.routing ?? "") === "curved", () => u({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            $t && tt("자동", !1, () => u({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            lt("선"),
            tt("—", (t.strokeStyle ?? "solid") === "solid", () => u({ strokeStyle: "solid" }), "실선"),
            tt("- -", t.strokeStyle === "dashed", () => u({ strokeStyle: "dashed" }), "파선"),
            tt("···", t.strokeStyle === "dotted", () => u({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            lt("시작"),
            tt(nt === "none" ? "○" : nt === "dot" ? "●" : "◀", nt !== "none", () => u({ arrowStart: nt === "none" ? "arrow" : nt === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${nt === "none" ? "없음" : nt === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            lt("끝"),
            tt(J === "none" ? "○" : J === "dot" ? "●" : "▶", J !== "none", () => u({ arrowEnd: J === "arrow" ? "dot" : J === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${J === "none" ? "없음" : J === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      q === "diagram" && /* @__PURE__ */ L("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${r ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    vt && /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-none ${r ? "border-slate-700" : "border-slate-100"}`, children: [
      lt("굵기"),
      ar.map((g) => /* @__PURE__ */ L(Vt.Fragment, { children: tt(String(g), ft === g, () => u({ strokeWidth: g }), `굵기 ${g}`) }, g))
    ] })
  ] });
}
function lr({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: o,
  commitEditorHtml: r,
  onEditorKeyDown: i,
  setShapes: c,
  onDirty: l,
  renderDiagram: p
}) {
  const $ = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", u = (a, s) => /* @__PURE__ */ L(
    "div",
    {
      ref: o,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": "텍스트 편집",
      "data-canvas-editor": !0,
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onInput: r,
      onBlur: r,
      onDoubleClick: (f) => f.stopPropagation(),
      onKeyDown: i,
      className: `${$} ${a}`,
      style: s
    },
    "canvas-editor"
  );
  return { renderEditor: u, renderShapeBody: (a) => {
    const s = rt[a.color ?? "blue"], f = e === a.id, v = se(a);
    if (a.type === "frame") {
      const y = a.strokeWidth ?? 2;
      return /* @__PURE__ */ L(
        "div",
        {
          "data-canvas-stroke-width": y,
          className: "w-full h-full rounded",
          style: { border: `${y / t.z}px solid ${n ? B.slate600 : B.slate400}` },
          children: /* @__PURE__ */ L(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? B.slate400 : B.muted
              },
              children: f ? u("", { fontSize: 13 / t.z }) : le(a) || "프레임"
            }
          )
        }
      );
    }
    if (a.type === "note")
      return /* @__PURE__ */ L(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: ie(a), borderTop: `6px solid ${s.border}`, color: s.text },
          children: f ? u("font-medium", { color: Dt(a), fontSize: ht(a), fontFamily: xt(a), textAlign: wt(a) }) : v ? /* @__PURE__ */ L("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Dt(a), fontSize: ht(a), fontFamily: xt(a), textAlign: wt(a) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") : /* @__PURE__ */ L("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Dt(a), fontSize: ht(a), fontFamily: xt(a), textAlign: wt(a) }, children: /* @__PURE__ */ L("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (a.type === "card") {
      const y = a.cardStyle === "glass";
      return zn(a) && p && !f ? /* @__PURE__ */ L("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: p(a) }) : /* @__PURE__ */ j(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: y ? B.glassFill : a.fillColor ?? B.slateCard,
            backdropFilter: y ? "blur(12px)" : void 0,
            WebkitBackdropFilter: y ? "blur(12px)" : void 0,
            border: `1px solid ${y ? B.glassBorder : B.darkBorder}`,
            boxShadow: y ? B.glassShadow : B.cardShadow
          },
          children: [
            /* @__PURE__ */ j(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (M) => M.stopPropagation(),
                onDoubleClick: (M) => M.stopPropagation(),
                onBlur: (M) => {
                  const C = (M.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  c((x) => x.map((k) => k.id === a.id ? { ...k, category: C } : k)), l();
                },
                onKeyDown: (M) => {
                  M.key === "Enter" && (M.preventDefault(), M.currentTarget.blur());
                },
                children: [
                  "[ ",
                  a.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            f ? u("flex-1 font-medium", { color: a.textColor ?? B.white, fontSize: ht(a), fontFamily: xt(a), textAlign: wt(a) }) : /* @__PURE__ */ L("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: a.textColor ?? B.white, fontSize: ht(a), fontFamily: xt(a), textAlign: wt(a) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view"),
            /* @__PURE__ */ j("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              a.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (a.type === "text") {
      const y = n ? "text-slate-100" : "text-slate-900", M = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${y}`,
        style: { color: a.textColor, fontSize: ht(a), fontFamily: xt(a), textAlign: wt(a) }
      };
      return f ? u(`font-medium ${y}`, M.style) : v ? /* @__PURE__ */ L(
        "div",
        {
          "data-canvas-text-view": !0,
          ...M,
          dangerouslySetInnerHTML: { __html: v }
        },
        "canvas-view"
      ) : /* @__PURE__ */ L("div", { "data-canvas-text-view": !0, ...M, children: /* @__PURE__ */ L("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (a.type === "image") {
      const y = we(a.src);
      return y ? /* @__PURE__ */ L(
        "img",
        {
          src: y,
          alt: a.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const Y = ie(a), w = hn(a), m = Dt(a);
    if (a.type === "triangle" || a.type === "diamond" || a.type === "hexagon" || a.type === "star") {
      const y = a.strokeWidth ?? 2;
      return /* @__PURE__ */ j("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ L("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${a.w} ${a.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ L("polygon", { "data-canvas-stroke-width": y, points: xn(a.type, a.w, a.h), fill: Y, stroke: w, strokeWidth: y / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ L("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: m }, children: f ? u("font-medium", { color: m, fontSize: ht(a), fontFamily: xt(a), textAlign: wt(a) }) : /* @__PURE__ */ L("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: ht(a), fontFamily: xt(a), textAlign: wt(a) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") })
      ] });
    }
    const d = we(a.src), z = a.type === "rect" || a.type === "ellipse" ? a.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ L(
      "div",
      {
        "data-canvas-stroke-width": z,
        className: `w-full h-full flex items-center justify-center p-3 ${a.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: Y, border: `${z / t.z}px solid ${w}`, color: m },
        children: f ? u("font-medium", { color: m, fontSize: ht(a), fontFamily: xt(a), textAlign: wt(a) }) : /* @__PURE__ */ j("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: ht(a), fontFamily: xt(a), textAlign: wt(a) }, children: [
          /* @__PURE__ */ L("div", { dangerouslySetInnerHTML: { __html: v } }),
          d && /* @__PURE__ */ L(
            "a",
            {
              href: d,
              target: "_blank",
              rel: "noreferrer",
              onPointerDown: (y) => y.stopPropagation(),
              className: "block mt-1 text-[11px] underline opacity-70",
              children: "파일 열기"
            }
          )
        ] }, "canvas-view")
      }
    );
  } };
}
function dr({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: o,
  selected: r,
  editingId: i,
  boardIdentity: c
}) {
  const [l, p] = ot({ width: 0, height: 0 });
  bt(() => {
    const f = t.current;
    if (!f) return;
    let v = -1, Y = -1;
    const w = (b = f.clientWidth, d = f.clientHeight) => {
      b === v && d === Y || (v = b, Y = d, p({ width: b, height: d }));
    };
    if (w(), typeof ResizeObserver < "u") {
      const b = new ResizeObserver((d) => {
        var y;
        const z = (y = d[0]) == null ? void 0 : y.contentRect;
        w((z == null ? void 0 : z.width) ?? f.clientWidth, (z == null ? void 0 : z.height) ?? f.clientHeight);
      });
      return b.observe(f), () => b.disconnect();
    }
    const m = () => w();
    return window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, [c, t]);
  const $ = Pt(() => new Map(n.map((f) => [f.id, f])), [n]), u = Pt(
    () => [...n].sort((f, v) => (f.type === "frame" ? -1 : 0) - (v.type === "frame" ? -1 : 0)),
    [n]
  ), h = Pt(() => {
    if (!t.current || l.width <= 0 || l.height <= 0) return null;
    const f = 200 / o.z;
    return {
      minX: o.x - f,
      minY: o.y - f,
      maxX: o.x + l.width / o.z + f,
      maxY: o.y + l.height / o.z + f
    };
  }, [o, t, l]), a = ut((f) => {
    if (!h) return !1;
    if (f.id === i || r.has(f.id)) return !0;
    if (f.type === "arrow") {
      const Y = Ct(f, $, e.current), m = (Y.routing === "orthogonal" ? Y.pathPoints : null) ?? [Y.start, Y.end], b = Math.min(...m.map((M) => M.x)), d = Math.max(...m.map((M) => M.x)), z = Math.min(...m.map((M) => M.y)), y = Math.max(...m.map((M) => M.y));
      return d >= h.minX && b <= h.maxX && y >= h.minY && z <= h.maxY;
    }
    const v = ct(f);
    return v.maxX >= h.minX && v.minX <= h.maxX && v.maxY >= h.minY && v.minY <= h.maxY;
  }, [i, r, $, e, h]), s = Pt(
    () => u.filter(a),
    [a, u]
  );
  return { shapeById: $, visiblePaintOrder: s };
}
function ur({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: o,
  onDirty: r,
  patchSelected: i
}) {
  const c = ut(() => {
    const s = t.current;
    if (!s || !e) return;
    let f;
    try {
      f = be(s.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const v = s.scrollHeight;
    n((Y) => Y.map((w) => {
      if (w.id !== e) return w;
      const m = { ...w, html: f, text: void 0 };
      if (w.type === "text")
        return w.manualSize ? m : { ...m, ...qo(s, w) };
      if (w.type === "arrow") return m;
      const b = w.type === "note" ? 32 : w.type === "card" ? 96 : (
        // category header + type footer
        (w.type === "frame", 24)
      ), d = Math.max(w.h, v + b);
      return { ...m, h: d };
    })), r();
  }, [e, r]), l = (s) => {
    var f;
    (f = t.current) == null || f.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(s), c();
  }, p = () => {
    var Y;
    const s = (Y = window.getSelection()) == null ? void 0 : Y.anchorNode, f = s instanceof Element ? s : s == null ? void 0 : s.parentElement, v = f == null ? void 0 : f.closest("ul, ol");
    return v instanceof HTMLElement ? v : null;
  }, $ = (s, f, v) => {
    const Y = document.createElement(f);
    for (; s.firstChild; ) Y.append(s.firstChild);
    return s.replaceWith(Y), Y;
  }, u = (s) => {
    const f = t.current;
    if (!f) return;
    f.focus();
    const v = p();
    if (s === "number")
      if ((v == null ? void 0 : v.tagName) === "OL")
        v.removeAttribute("data-list-style");
      else if ((v == null ? void 0 : v.tagName) === "UL")
        $(v, "ol");
      else {
        document.execCommand("insertOrderedList");
        const Y = p();
        Y == null || Y.removeAttribute("data-list-style");
      }
    else if ((v == null ? void 0 : v.tagName) === "UL") {
      const Y = v.dataset.listStyle;
      s === Y ? document.execCommand("insertUnorderedList") : v.dataset.listStyle = s;
    } else {
      (v == null ? void 0 : v.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const Y = p();
      Y && (Y.dataset.listStyle = s);
    }
    c();
  };
  return { commitEditorHtml: c, applyFormat: l, applyList: u, onEditorKeyDown: (s) => {
    if (s.key === "Tab") {
      s.preventDefault(), document.execCommand(s.shiftKey ? "outdent" : "indent"), c();
      return;
    }
    if (s.key === " ") {
      const f = window.getSelection();
      if (f && f.isCollapsed && f.anchorNode) {
        const v = f.anchorNode, Y = v.textContent || "", w = f.anchorOffset, m = Y.slice(0, w).trim();
        if (!p()) {
          if (m === "-" || m === "–") {
            s.preventDefault(), v.textContent = Y.slice(w), u("dash");
            return;
          }
          if (m === "*") {
            s.preventDefault(), v.textContent = Y.slice(w), u("bullet");
            return;
          }
          if (m === "1.") {
            s.preventDefault(), v.textContent = Y.slice(w), u("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (s) => {
    const f = $n(s);
    if (!f) {
      i({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    i({
      fontFamily: "custom",
      customFontFamily: f
    });
  } };
}
function hr({
  boardIdentity: t,
  tool: e,
  controlledShapes: n,
  onShapesChange: o,
  onDirty: r
}) {
  const i = G(null), c = G(null), [l, p] = ot([]), $ = n !== void 0 && o !== void 0, u = G(/* @__PURE__ */ new WeakMap()), h = Pt(() => {
    const g = u.current;
    return ($ ? n ?? [] : l).map((D) => {
      let H = g.get(D);
      return H === void 0 && (H = mn(D), g.set(D, H)), H;
    }).filter((D) => D !== null);
  }, [$, n, l]), a = G(o);
  a.current = o;
  const s = ut((g) => {
    const D = a.current;
    if (!D) {
      p(g);
      return;
    }
    D(typeof g == "function" ? g : () => g);
  }, []), [f, v] = ot({ x: -400, y: -300, z: 1 }), [Y, w] = ot(/* @__PURE__ */ new Set()), [m, b] = ot(null), [d, z] = ot({ kind: "none" }), [y, M] = ot(!1), [X, C] = ot([]), [x, k] = ot(""), [S, I] = ot(!1), [P, W] = ot(null), [A, T] = ot("blue"), [N, E] = ot(re), F = G(A);
  F.current = A;
  const O = G([]), U = G([]), _ = G(null), Q = G(/* @__PURE__ */ new Map()), et = G(h), R = G(f), st = G(e), ft = G(Y), vt = G(m);
  et.current = h, R.current = f, st.current = e, ft.current = Y, vt.current = m;
  const K = G({ kind: "none" }), Z = ut((g) => {
    K.current = g, z(g);
  }, []), q = ut((g) => {
    ft.current = g, w(g);
  }, []);
  _t(() => {
    var D;
    const g = /* @__PURE__ */ new Set();
    ft.current = g, vt.current = null, Q.current.clear(), O.current = [], U.current = [], _.current = null, Z({ kind: "none" }), w(g), b(null), M(!1), C([]), W(null), k(""), (D = i.current) == null || D.focus();
  }, [Z, t]), bt(() => {
    let g = !1;
    const D = () => {
      const V = Bo();
      g || E(V);
    };
    if (D(), typeof document > "u" || !("fonts" in document)) return;
    const H = () => D();
    return document.fonts.addEventListener("loadingdone", H), () => {
      g = !0, document.fonts.removeEventListener("loadingdone", H);
    };
  }, [t]);
  const $t = (m ? h.find((g) => g.id === m) : void 0) !== void 0;
  _t(() => {
    if (!m || !$t) return;
    const g = () => {
      const H = c.current, V = et.current.find((ue) => ue.id === m);
      if (!H || !V || (H.dataset.seeded !== m && (H.innerHTML = se(V), H.dataset.seeded = m), document.activeElement === H)) return;
      H.focus();
      const it = document.createRange();
      it.selectNodeContents(H), it.collapse(!1);
      const gt = window.getSelection();
      gt == null || gt.removeAllRanges(), gt == null || gt.addRange(it);
    };
    g();
    const D = requestAnimationFrame(g);
    return () => cancelAnimationFrame(D);
  }, [m, $t]);
  const nt = ut((g) => {
    s((D) => {
      const H = typeof g == "function" ? g(D) : g;
      return O.current.push(D), O.current.length > 100 && O.current.shift(), U.current = [], H;
    }), r();
  }, [r]), J = ut((g) => g.size === 0 ? !1 : (nt((D) => D.filter((H) => g.has(H.id) ? !1 : H.type !== "arrow" ? !0 : !(H.fromId && g.has(H.fromId)) && !(H.toId && g.has(H.toId)))), q(/* @__PURE__ */ new Set()), k(`${g.size}개 삭제됨`), !0), [nt, q]), tt = ut(() => {
    _.current = et.current;
  }, []), lt = ut(() => {
    const g = _.current;
    _.current = null, !(!g || g === et.current) && (O.current.push(g), O.current.length > 100 && O.current.shift(), U.current = [], r());
  }, [r]), Mt = ut((g, D) => {
    var it;
    const H = (it = i.current) == null ? void 0 : it.getBoundingClientRect(), V = R.current;
    return H ? { x: (g - H.left) / V.z + V.x, y: (D - H.top) / V.z + V.y } : { x: 0, y: 0 };
  }, []), Ot = ut(() => {
    var H;
    const g = (H = i.current) == null ? void 0 : H.getBoundingClientRect(), D = R.current;
    return g ? { x: D.x + g.width / 2 / D.z, y: D.y + g.height / 2 / D.z } : { x: 0, y: 0 };
  }, []), St = ut((g) => {
    const D = new Set(et.current.filter((V) => g.has(V.id) && V.groupId).map((V) => V.groupId));
    if (D.size === 0) return g;
    const H = new Set(g);
    for (const V of et.current) V.groupId && D.has(V.groupId) && H.add(V.id);
    return H;
  }, []);
  return {
    containerRef: i,
    editorRef: c,
    localShapes: l,
    setLocalShapes: p,
    controlled: $,
    shapes: h,
    setShapes: s,
    camera: f,
    setCamera: v,
    cameraRef: R,
    selected: Y,
    setSelected: w,
    selectedRef: ft,
    editingId: m,
    setEditingId: b,
    editingIdRef: vt,
    interaction: d,
    interactionRef: K,
    applyInteraction: Z,
    isSpaceDown: y,
    setIsSpaceDown: M,
    guides: X,
    setGuides: C,
    announcement: x,
    setAnnouncement: k,
    showInspectorPalette: S,
    setShowInspectorPalette: I,
    eraserPos: P,
    setEraserPos: W,
    activeColor: A,
    setActiveColor: T,
    activeColorRef: F,
    installedFontFamilies: N,
    pointers: Q,
    past: O,
    future: U,
    selectNow: q,
    commit: nt,
    deleteSelection: J,
    beginHistory: tt,
    endHistory: lt,
    toPage: Mt,
    viewportCentre: Ot,
    expandToGroups: St,
    toolRef: st,
    shapesRef: et
  };
}
function xr({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: o,
  maxZoom: r,
  shapes: i,
  selected: c,
  editingId: l,
  textualTypes: p,
  onZoomChange: $,
  onSelectionChange: u,
  onLocalCursor: h,
  toPage: a
}) {
  bt(() => {
    $ == null || $(e.z);
  }, [e.z, $]), bt(() => {
    const m = t.current;
    if (!m) return;
    const b = (d) => {
      if (d.preventDefault(), d.ctrlKey || d.metaKey) {
        const z = m.getBoundingClientRect();
        n((y) => {
          const M = Math.min(r, Math.max(o, y.z * Math.exp(-d.deltaY * 0.01))), X = d.clientX - z.left, C = d.clientY - z.top;
          return { x: y.x + X / y.z - X / M, y: y.y + C / y.z - C / M, z: M };
        });
      } else
        n((z) => ({ ...z, x: z.x + d.deltaX / z.z, y: z.y + d.deltaY / z.z }));
    };
    return m.addEventListener("wheel", b, { passive: !1 }), () => m.removeEventListener("wheel", b);
  }, [t, r, o, n]);
  const s = Pt(() => {
    const m = i.filter((b) => c.has(b.id));
    return {
      count: m.length,
      canGroup: m.length > 1,
      canUngroup: m.some((b) => !!b.groupId),
      isTextual: m.length === 1 && p.includes(m[0].type),
      selectedIds: m.map((b) => b.id)
    };
  }, [c, i, p]);
  bt(() => {
    u == null || u(s);
  }, [u, s]);
  const f = Pt(() => {
    if (l) {
      const d = i.find((z) => z.id === l);
      return d && d.type !== "image" && d.type !== "draw" ? d : null;
    }
    const m = i.filter((d) => c.has(d.id));
    if (m.length > 1 && m.every((d) => d.type === "draw")) return m[0] ?? null;
    if (m.length !== 1) return null;
    const b = m[0];
    return b && b.type !== "image" ? b : null;
  }, [l, c, i]), v = G(0);
  return { selectionInfo: s, inspectorShape: f, onContainerPointerMove: h ? (m) => {
    const b = performance.now();
    b - v.current < 60 || (v.current = b, h(a(m.clientX, m.clientY)));
  } : void 0, onContainerPointerLeave: h ? () => h(null) : void 0 };
}
function fr(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, o = 1 / 0, r = -1 / 0, i = -1 / 0;
  for (const h of t) {
    const a = ct(h);
    n = Math.min(n, a.minX), o = Math.min(o, a.minY), r = Math.max(r, a.maxX), i = Math.max(i, a.maxY);
  }
  const c = 40, l = r - n + c * 2, p = i - o + c * 2;
  if (!Number.isFinite(l) || !Number.isFinite(p) || l > Bt.maxExportDimension || p > Bt.maxExportDimension || l * p > Bt.maxExportPixels) return null;
  const $ = (h, a, s, f, v) => {
    const Y = h.fontSize ?? s, w = xt(h), m = pn(se(h));
    if (m.length === 0) return "";
    const b = Ft(h), d = h.textAlign === "right" ? "end" : h.textAlign === "center" ? "middle" : h.textAlign === "left" ? "start" : v, z = d === "end" ? b.maxX - 12 : d === "middle" ? (b.minX + b.maxX) / 2 : b.minX + 12, y = b.minY + Y + 12;
    return m.map((M, X) => {
      const C = M.map((x) => `<tspan style="${[
        x.bold ? "font-weight:700" : `font-weight:${f}`,
        x.italic ? "font-style:italic" : "",
        x.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${It(x.text)}</tspan>`).join("");
      return `<text x="${z}" y="${y + X * Y * 1.4}" font-family="${It(w)}" font-size="${Y}" fill="${a}" text-anchor="${d}">${C}</text>`;
    }).join("");
  }, u = t.map((h) => {
    const a = rt[h.color ?? "blue"], s = Ft(h), f = kt(h), v = h.rotation ? ` transform="rotate(${h.rotation * 180 / Math.PI} ${f.x} ${f.y})"` : "", Y = h.color ? rt[h.color].border : B.ink;
    if (h.type === "draw" && h.points) {
      const M = h.drawMode ?? "pen", X = h.strokeWidth ?? 3, C = h.points.length >= 2 ? vn(h.points, X, M) : "";
      if (C)
        return `<path d="${C}" fill="${Y}"${M === "highlighter" ? ' fill-opacity="0.35"' : ""} fill-rule="evenodd" stroke="none"/>`;
      const x = M === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${fn(h.points)}" fill="none" stroke="${Y}" stroke-width="${X}"${x} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (h.type === "arrow") {
      const M = Ct(h, new Map(t.map((O) => [O.id, O])), t), X = h.strokeWidth ?? 2.5, C = Math.max(10, 8 + X * 2), x = Math.max(4, 2 + X), k = M.routing === "orthogonal" && M.pathPoints ? M.pathPoints : null, S = k && k.length > 1, I = S ? me(k) : M.routing === "curved" ? `M ${M.start.x} ${M.start.y} Q ${M.control.x} ${M.control.y} ${M.end.x} ${M.end.y}` : `M ${M.start.x} ${M.start.y} L ${M.end.x} ${M.end.y}`, P = S ? an(k) : M.routing === "curved" ? (() => {
        const O = qt(0.94, M.start, M.control, M.end);
        return Math.atan2(M.end.y - O.y, M.end.x - O.x);
      })() : Math.atan2(M.end.y - M.start.y, M.end.x - M.start.x), W = S ? Gt(k[0], k[1]) : M.routing === "orthogonal" && M.start.side ? M.start.side === "e" ? 0 : M.start.side === "w" ? Math.PI : M.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Gt(M.start, M.end), A = h.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : h.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", T = (O, U, _, Q) => {
        if (O === "dot") return `<circle cx="${U}" cy="${_}" r="${x}" fill="${Y}"/>`;
        if (O === "none") return "";
        const et = `${U - C * Math.cos(Q - 0.4)},${_ - C * Math.sin(Q - 0.4)}`, R = `${U - C * Math.cos(Q + 0.4)},${_ - C * Math.sin(Q + 0.4)}`;
        return `<polygon points="${U},${_} ${et} ${R}" fill="${Y}"/>`;
      }, N = M.routing === "orthogonal" && M.pathPoints ? $e(M.pathPoints) : M.bend === 0 ? { x: (M.start.x + M.end.x) / 2, y: (M.start.y + M.end.y) / 2 } : qt(0.5, M.start, M.control, M.end), E = le(h), F = E ? `<text x="${N.x}" y="${N.y - 6}" text-anchor="middle" font-family="${It(xt(h))}" font-size="${h.fontSize ?? 12}" fill="${Y}">${It(E)}</text>` : "";
      return `<path d="${I}" fill="none" stroke="${Y}" stroke-width="${X}" stroke-linecap="round" stroke-linejoin="round"${A}/>` + T(h.arrowEnd ?? "arrow", M.end.x, M.end.y, P) + T(h.arrowStart ?? "none", M.start.x, M.start.y, W + Math.PI) + F;
    }
    if (h.type === "image" && h.src) {
      const M = we(h.src);
      return M ? `<image href="${It(M)}" x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}"${v}/>` : "";
    }
    if (h.type === "frame")
      return `<g${v}><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" fill="none" stroke="${B.slate400}" stroke-width="${h.strokeWidth ?? 2}" rx="4"/><text x="${s.minX}" y="${s.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${B.muted}">${It(h.text ?? "프레임")}</text></g>`;
    if (h.type === "note")
      return `<g${v}><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" fill="${a.bg}"/><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="6" fill="${a.border}"/>` + $(h, a.text, 14, "600", "start") + "</g>";
    if (h.type === "card") {
      const M = h.cardStyle === "glass";
      return `<g${v}><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" rx="16" fill="${M ? B.glassFill : B.slateCard}"/><text x="${s.minX + 16}" y="${s.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${B.slate400}">[ ${It(h.category ?? "ENTITY")} ]</text>` + $(h, B.white, 16, "700", "start") + "</g>";
    }
    const w = h.type === "rect" || h.type === "ellipse" || h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star" ? h.strokeWidth ?? 2 : 2, m = ie(h), b = hn(h), d = h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star", z = d ? xn(h.type, s.maxX - s.minX, s.maxY - s.minY).split(" ").map((M) => {
      const [X, C] = M.split(",").map(Number);
      return `${X + s.minX},${C + s.minY}`;
    }).join(" ") : "", y = h.type === "ellipse" ? `<ellipse cx="${(s.minX + s.maxX) / 2}" cy="${(s.minY + s.maxY) / 2}" rx="${(s.maxX - s.minX) / 2}" ry="${(s.maxY - s.minY) / 2}" fill="${m}" stroke="${b}" stroke-width="${w}"/>` : d ? `<polygon points="${z}" fill="${m}" stroke="${b}" stroke-width="${w}" stroke-linejoin="round"/>` : `<rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" rx="12" fill="${m}" stroke="${b}" stroke-width="${w}"/>`;
    return `<g${v}>${y}${$(h, a.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${p}" viewBox="${n - c} ${o - c} ${l} ${p}"><rect x="${n - c}" y="${o - c}" width="${l}" height="${p}" fill="${e ? B.canvasDark : B.canvasLight}"/>` + u + "</svg>";
}
async function vr(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), o = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), r = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), i = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, c = new Image();
  c.crossOrigin = "anonymous";
  try {
    await new Promise((a, s) => {
      c.onload = () => a(), c.onerror = () => s(new Error("svg rasterise failed")), c.src = i;
    });
  } catch {
    return null;
  }
  const l = 2, p = o * l, $ = r * l;
  if (!Number.isSafeInteger(p) || !Number.isSafeInteger($) || p > Bt.maxExportDimension || $ > Bt.maxExportDimension || p * $ > Bt.maxExportPixels) return null;
  const u = document.createElement("canvas");
  u.width = p, u.height = $;
  const h = u.getContext("2d");
  return h ? (h.scale(l, l), h.drawImage(c, 0, 0), new Promise((a) => {
    try {
      u.toBlob((s) => a(s), "image/png");
    } catch {
      a(null);
    }
  })) : null;
}
function pr(t, e, n) {
  if (t.length < 2) return;
  const o = t.filter(
    (a) => a.type !== "draw" && a.type !== "arrow" && a.type !== "frame" && a.type !== "image"
  );
  if (o.length < 2) return;
  const r = o.map((a, s) => ({
    id: a.id,
    i: s,
    x: kt(a).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: kt(a).y,
    vx: 0,
    vy: 0
  }));
  for (let a = 0; a < r.length; a++)
    for (let s = 0; s < a; s++)
      if (Math.abs(r[a].x - r[s].x) < 1 && Math.abs(r[a].y - r[s].y) < 1) {
        const f = 2 * Math.PI * a / r.length;
        r[a].x += Math.cos(f) * 10, r[a].y += Math.sin(f) * 10;
        break;
      }
  const i = new Map(r.map((a) => [a.id, a])), c = [];
  for (const a of t) {
    if (a.type !== "arrow") continue;
    const s = a.fromId ? i.get(a.fromId) : null, f = a.toId ? i.get(a.toId) : null;
    s && f && c.push([s, f]);
  }
  const l = 220, p = l * l, $ = 80;
  let u = 400;
  const h = u / $;
  for (let a = 0; a < $; a++) {
    for (let s = 0; s < r.length; s++)
      r[s].vx = 0, r[s].vy = 0;
    for (let s = 0; s < r.length; s++)
      for (let f = s + 1; f < r.length; f++) {
        const v = r[s], Y = r[f], w = v.x - Y.x, m = v.y - Y.y, b = Math.hypot(w, m) || 0.01, d = p / b, z = w / b * d, y = m / b * d;
        v.vx += z, v.vy += y, Y.vx -= z, Y.vy -= y;
      }
    for (const [s, f] of c) {
      const v = s.x - f.x, Y = s.y - f.y, w = Math.hypot(v, Y) || 0.01, m = w * w / l, b = v / w * m, d = Y / w * m;
      s.vx -= b, s.vy -= d, f.vx += b, f.vy += d;
    }
    for (const s of r) {
      const f = Math.hypot(s.vx, s.vy) || 0.01, v = Math.min(f, u);
      s.x += s.vx / f * v, s.y += s.vy / f * v;
    }
    u = Math.max(0.5, u - h);
  }
  e((a) => a.map((s) => {
    const f = i.get(s.id);
    return f ? { ...s, x: f.x - s.w / 2, y: f.y - s.h / 2 } : s;
  })), n();
}
function mr(t, {
  controlled: e,
  past: n,
  future: o,
  setLocalShapes: r,
  setCamera: i,
  selectNow: c,
  setEditingId: l
}) {
  let p;
  try {
    p = Zn(t);
  } catch {
    return;
  }
  e || (n.current = [], o.current = [], r(p.shapes.map(gr))), i(p.camera), c(/* @__PURE__ */ new Set()), l(null);
}
function gr(t) {
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
      return yr(t);
  }
}
function yr(t) {
  throw new Qn(`Unhandled canvas shape type: ${String(t)}.`);
}
function wr({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: o,
  selectedRef: r,
  past: i,
  future: c,
  controlled: l,
  isDarkMode: p,
  minZoom: $,
  maxZoom: u,
  onToolChange: h,
  setSelectedStrokeWidth: a,
  onDirty: s,
  commit: f,
  deleteSelection: v,
  selectNow: Y,
  viewportCentre: w,
  setShapes: m,
  setLocalShapes: b,
  setCamera: d,
  setEditingId: z,
  setAnnouncement: y,
  createId: M
}) {
  const X = ut((x) => {
    const k = w(), S = mn({
      id: M(),
      x: x.x ?? k.x - x.w / 2,
      y: x.y ?? k.y - x.h / 2,
      ...x
    });
    if (!S) throw new Error("Canvas could not create a valid shape.");
    return f((I) => [...I, S]), Y(/* @__PURE__ */ new Set([S.id])), h("select"), y(`${S.type} 추가됨`), S;
  }, [f, M, h, Y, y, w]), C = ut(() => fr(n.current, p), [p, n]);
  Kn(t, () => ({
    addNote: (x) => {
      const k = X({ type: "note", w: 180, h: 180, color: x, text: "" });
      z(k.id);
    },
    addCard: (x, k, S, I) => {
      X({ type: "card", w: 260, h: 150, text: x, category: k, cardStyle: S, color: I });
    },
    addText: () => {
      const x = X({ type: "text", w: 220, h: 44, text: "" });
      z(x.id);
    },
    addShape: (x, k, S) => {
      X({
        type: x,
        w: x === "ellipse" ? 220 : 200,
        h: x === "ellipse" ? 110 : 140,
        color: k,
        text: S ?? ""
      });
    },
    addArrow: () => {
      const x = w(), k = { id: M(), type: "arrow", x: x.x - 140, y: x.y, w: 280, h: 0 };
      f((S) => [...S, k]), Y(/* @__PURE__ */ new Set([k.id])), h("select");
    },
    addImage: (x, k, S, I) => {
      X({ type: "image", w: S, h: I, src: x, fileName: k });
    },
    addFileCard: (x, k, S) => {
      X({ type: "rect", w: 260, h: 120, color: "purple", text: S, src: k, fileName: x });
    },
    updateShapeText: (x, k) => {
      f((S) => S.map((I) => I.id === x ? { ...I, text: k, html: void 0 } : I));
    },
    setSelectedStrokeWidth: a,
    setTool: h,
    undo: () => {
      const x = i.current.pop();
      x && (c.current.push(n.current), m(x), Y(/* @__PURE__ */ new Set()), z(null), s(), y("실행 취소"));
    },
    redo: () => {
      const x = c.current.pop();
      x && (i.current.push(n.current), m(x), Y(/* @__PURE__ */ new Set()), z(null), s(), y("다시 실행"));
    },
    deleteSelected: () => {
      v(r.current);
    },
    duplicateSelected: () => {
      var I;
      const x = r.current;
      if (x.size === 0) return;
      const k = [], S = /* @__PURE__ */ new Map();
      for (const P of n.current) {
        if (!x.has(P.id)) continue;
        let W = P.groupId;
        W && (S.has(W) || S.set(W, M("g")), W = S.get(W)), k.push({
          ...P,
          id: M(),
          x: P.x + 24,
          y: P.y + 24,
          groupId: W,
          points: (I = P.points) == null ? void 0 : I.map(([A, T]) => [A + 24, T + 24]),
          orthogonalWaypoints: P.type === "arrow" && P.orthogonalWaypoints ? P.orthogonalWaypoints.map((A) => ({ x: A.x + 24, y: A.y + 24 })) : void 0
        });
      }
      f((P) => [...P, ...k]), Y(new Set(k.map((P) => P.id))), y(`${k.length}개 복제됨`);
    },
    group: () => {
      var S;
      const x = r.current;
      if (x.size < 2) return;
      const k = M("g");
      f((I) => I.map((P) => x.has(P.id) ? { ...P, groupId: k } : P)), y(`${x.size}개 그룹화됨`), (S = e.current) == null || S.focus();
    },
    ungroup: () => {
      var k;
      const x = r.current;
      x.size !== 0 && (f((S) => S.map((I) => x.has(I.id) ? { ...I, groupId: void 0 } : I)), y("그룹 해제됨"), (k = e.current) == null || k.focus());
    },
    zoomBy: (x) => {
      d((k) => {
        var A;
        const S = (A = e.current) == null ? void 0 : A.getBoundingClientRect(), I = Math.min(u, Math.max($, k.z * x));
        if (!S) return { ...k, z: I };
        const P = k.x + S.width / 2 / k.z, W = k.y + S.height / 2 / k.z;
        return { x: P - S.width / 2 / I, y: W - S.height / 2 / I, z: I };
      });
    },
    zoomTo: (x) => {
      d((k) => {
        var A;
        const S = (A = e.current) == null ? void 0 : A.getBoundingClientRect(), I = Math.min(u, Math.max($, x));
        if (!S) return { ...k, z: I };
        const P = k.x + S.width / 2 / k.z, W = k.y + S.height / 2 / k.z;
        return { x: P - S.width / 2 / I, y: W - S.height / 2 / I, z: I };
      });
    },
    resetZoom: () => {
      d((x) => {
        var P;
        const k = (P = e.current) == null ? void 0 : P.getBoundingClientRect();
        if (!k) return { ...x, z: 1 };
        const S = x.x + k.width / 2 / x.z, I = x.y + k.height / 2 / x.z;
        return { x: S - k.width / 2, y: I - k.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var N;
      const x = n.current, k = (N = e.current) == null ? void 0 : N.getBoundingClientRect();
      if (x.length === 0 || !k) return;
      let S = 1 / 0, I = 1 / 0, P = -1 / 0, W = -1 / 0;
      for (const E of x) {
        const F = ct(E);
        S = Math.min(S, F.minX), I = Math.min(I, F.minY), P = Math.max(P, F.maxX), W = Math.max(W, F.maxY);
      }
      const A = 80, T = Math.min(u, Math.max(
        $,
        Math.min(k.width / (P - S + A * 2), k.height / (W - I + A * 2))
      ));
      d({
        x: (S + P) / 2 - k.width / 2 / T,
        y: (I + W) / 2 - k.height / 2 / T,
        z: T
      });
    },
    autoLayout: () => pr(n.current, f, () => y("자동 배치 완료")),
    exportSvg: C,
    exportPng: () => vr(C),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (x) => mr(x, {
      controlled: l,
      past: i,
      future: c,
      setLocalShapes: b,
      setCamera: d,
      selectNow: Y,
      setEditingId: z
    })
  }), [
    X,
    C,
    f,
    M,
    v,
    p,
    u,
    $,
    s,
    h,
    Y,
    d,
    z,
    b,
    a,
    m,
    y,
    w,
    l
  ]);
}
function br(t) {
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
function kr({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: o,
  editingIdRef: r,
  toolRef: i,
  past: c,
  future: l,
  textualTypes: p,
  setIsSpaceDown: $,
  setEditingId: u,
  setShapes: h,
  setAnnouncement: a,
  commit: s,
  deleteSelection: f,
  selectNow: v,
  onDirty: Y,
  onToolChange: w,
  createId: m
}) {
  const b = ut((d, z) => {
    const y = o.current;
    y.size !== 0 && s((M) => M.map((X) => {
      var C;
      return y.has(X.id) ? {
        ...X,
        x: X.x + d,
        y: X.y + z,
        points: (C = X.points) == null ? void 0 : C.map(([x, k]) => [x + d, k + z])
      } : X;
    }));
  }, [s, o]);
  bt(() => {
    const d = (X) => {
      const C = X;
      return !!C && (C.tagName === "INPUT" || C.tagName === "TEXTAREA" || C.isContentEditable);
    }, z = (X) => X instanceof Element && !!X.closest("input, select, button, textarea, option, label, [data-canvas-control]"), y = (X) => {
      var A, T, N, E;
      const C = t.current, x = document.activeElement, k = X.target instanceof Node && !!(C != null && C.contains(X.target)), S = !!C && (x === C || C.contains(x));
      if (!k && !S || z(X.target)) return;
      if (X.code === "Space" && !d(X.target)) {
        $(!0), X.preventDefault();
        return;
      }
      if (d(X.target)) {
        if (X.key === "Escape")
          X.preventDefault(), u(null), (A = e.current) == null || A.blur(), (T = t.current) == null || T.focus();
        else if ((X.key === "Delete" || X.key === "Backspace") && !r.current) {
          const F = o.current;
          f(F) && X.preventDefault();
        }
        return;
      }
      const I = X.metaKey || X.ctrlKey, P = o.current;
      if (I && X.key.toLowerCase() === "z") {
        if (X.preventDefault(), X.shiftKey) {
          const F = l.current.pop();
          F && (c.current.push(n.current), h(F), Y());
        } else {
          const F = c.current.pop();
          F && (l.current.push(n.current), h(F), Y());
        }
        v(/* @__PURE__ */ new Set());
        return;
      }
      if (I && X.key.toLowerCase() === "g") {
        if (X.preventDefault(), X.shiftKey)
          P.size > 0 && (s((F) => F.map((O) => P.has(O.id) ? { ...O, groupId: void 0 } : O)), a("그룹 해제됨"));
        else if (P.size > 1) {
          const F = m("g");
          s((O) => O.map((U) => P.has(U.id) ? { ...U, groupId: F } : U)), a(`${P.size}개 그룹화됨`);
        }
        return;
      }
      if (I && X.key.toLowerCase() === "a") {
        X.preventDefault(), v(new Set(n.current.map((F) => F.id))), a(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (X.key === "Delete" || X.key === "Backspace") {
        f(P) && X.preventDefault();
        return;
      }
      if (X.key.startsWith("Arrow")) {
        X.preventDefault();
        const F = X.shiftKey ? 10 : 1;
        X.key === "ArrowLeft" && b(-F, 0), X.key === "ArrowRight" && b(F, 0), X.key === "ArrowUp" && b(0, -F), X.key === "ArrowDown" && b(0, F);
        return;
      }
      if (X.key === "Tab" && n.current.length > 0) {
        X.preventDefault();
        const F = n.current, O = F.findIndex((Q) => P.has(Q.id)), U = X.shiftKey ? O <= 0 ? F.length - 1 : O - 1 : O === -1 || O === F.length - 1 ? 0 : O + 1, _ = F[U];
        v(/* @__PURE__ */ new Set([_.id])), a(`${_.type} 선택됨: ${le(_) || "내용 없음"}`);
        return;
      }
      if (X.key === "Enter" && P.size === 1) {
        const F = n.current.find((O) => P.has(O.id));
        F && p.includes(F.type) && (X.preventDefault(), u(F.id));
        return;
      }
      if (X.key === "Escape") {
        if (r.current) {
          X.preventDefault(), u(null), (N = e.current) == null || N.blur(), (E = t.current) == null || E.focus(), w("select");
          return;
        }
        v(/* @__PURE__ */ new Set()), w("select");
        return;
      }
      const W = br(X);
      W && (X.preventDefault(), i.current = W, w(W));
    }, M = (X) => {
      const C = t.current;
      !C || !(document.activeElement === C || C.contains(document.activeElement)) || X.code === "Space" && $(!1);
    };
    return window.addEventListener("keydown", y), window.addEventListener("keyup", M), () => {
      window.removeEventListener("keydown", y), window.removeEventListener("keyup", M);
    };
  }, [
    s,
    t,
    m,
    f,
    r,
    e,
    l,
    b,
    Y,
    w,
    c,
    v,
    o,
    a,
    u,
    $,
    h,
    n,
    p,
    i
  ]);
}
const $r = 400;
function Mr({
  containerRef: t,
  editorRef: e,
  pointers: n,
  cameraRef: o,
  shapesRef: r,
  editingIdRef: i,
  toolRef: c,
  activeColorRef: l,
  drawStrokeWidth: p,
  camera: $,
  shapes: u,
  selected: h,
  isSpaceDown: a,
  textualTypes: s,
  setShapes: f,
  setEditingId: v,
  applyInteraction: Y,
  selectNow: w,
  beginHistory: m,
  commit: b,
  onToolChange: d,
  expandToGroups: z,
  toPage: y,
  createId: M
}) {
  const X = M, C = G(null), x = (N, E) => {
    var _;
    const F = ((_ = t.current) == null ? void 0 : _.dataset.canvasActiveTool) === "text" ? "text" : c.current;
    if (F !== "note" && F !== "text") return;
    const O = y(N, E), U = F === "note" ? { id: X(), type: "note", x: O.x - 90, y: O.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: X(), type: "text", x: O.x, y: O.y - 22, w: 220, h: 44, text: "" };
    b((Q) => [...Q, U]), w(/* @__PURE__ */ new Set([U.id])), v(U.id), d("select");
  };
  return bt(() => {
    const N = (E) => {
      var F;
      (F = t.current) != null && F.contains(E.target) && (E.target instanceof Element && E.target.closest('[role="textbox"], [data-canvas-inspector]') || x(E.clientX, E.clientY));
    };
    return window.addEventListener("click", N, !0), () => window.removeEventListener("click", N, !0);
  }), { onPointerDown: (N) => {
    var st, ft, vt;
    const E = c.current, F = N.target instanceof Element ? N.target : null, O = !!(F != null && F.closest("[data-canvas-editor]")) && i.current !== null;
    n.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), !O && N.cancelable && N.preventDefault();
    const U = N.currentTarget;
    try {
      U.setPointerCapture(N.pointerId);
    } catch {
    }
    if (n.current.size === 2) {
      const [K, Z] = [...n.current.values()], q = o.current;
      Y({
        kind: "pinch",
        startDist: Math.hypot(Z.x - K.x, Z.y - K.y) || 1,
        startZoom: q.z,
        startMidX: (K.x + Z.x) / 2,
        startMidY: (K.y + Z.y) / 2,
        camX: q.x,
        camY: q.y
      });
      return;
    }
    if (n.current.size > 2) return;
    if (N.button === 1 || a || E === "hand" || N.button === 0 && E === "select" && N.altKey) {
      Y({ kind: "pan", startX: N.clientX, startY: N.clientY, camX: $.x, camY: $.y });
      return;
    }
    if (N.button !== 0) return;
    const _ = y(N.clientX, N.clientY);
    if (O || (v(null), (st = e.current) == null || st.blur(), (ft = t.current) == null || ft.focus()), E === "draw" || E === "highlighter") {
      const K = {
        id: X(),
        type: "draw",
        x: _.x,
        y: _.y,
        w: 0,
        h: 0,
        points: [[_.x, _.y]],
        color: l.current,
        strokeWidth: p,
        drawMode: E === "highlighter" ? "highlighter" : "pen"
      };
      m(), f((Z) => [...Z, K]), Y({ kind: "drawing", id: K.id });
      return;
    }
    if (E === "arrow" || E === "frame" || Jn.includes(E)) {
      const K = E, Z = E === "arrow" ? { id: X(), type: "arrow", x: _.x, y: _.y, w: 0, h: 0, color: l.current } : E === "frame" ? { id: X(), type: "frame", x: _.x, y: _.y, w: 0, h: 0, text: "프레임" } : { id: X(), type: K, x: _.x, y: _.y, w: 0, h: 0, color: l.current, text: "" };
      m(), f((q) => [...q, Z]), Y({ kind: "creating", id: Z.id, startX: _.x, startY: _.y });
      return;
    }
    if (E === "note" || E === "text") return;
    if (E === "eraser") {
      m(), f((K) => wn(K, _.x, _.y, 14 / $.z, $.z)), Y({ kind: "erasing" });
      return;
    }
    const Q = new Map(u.map((K) => [K.id, K])), et = i.current ? u.find((K) => K.id === i.current) : void 0, R = O && et ? et : [...u].reverse().find((K) => ce(K, _.x, _.y, $.z, Q, u));
    if (!R)
      C.current = null;
    else {
      const K = Date.now(), Z = !N.shiftKey && s.includes(R.type) && ((vt = C.current) == null ? void 0 : vt.id) === R.id && K - C.current.time < $r, q = Z ? R.id : void 0;
      C.current = Z ? null : { id: R.id, time: K };
      const mt = N.shiftKey ? new Set(h).add(R.id) : h.has(R.id) ? h : /* @__PURE__ */ new Set([R.id]), $t = z(mt);
      w($t);
      const nt = /* @__PURE__ */ new Map();
      for (const J of u) $t.has(J.id) && nt.set(J.id, J);
      for (const J of u) {
        if (J.type !== "frame" || !$t.has(J.id)) continue;
        const tt = ct(J);
        for (const lt of u) {
          if (lt.id === J.id || nt.has(lt.id)) continue;
          const Mt = kt(lt);
          Mt.x >= tt.minX && Mt.x <= tt.maxX && Mt.y >= tt.minY && Mt.y <= tt.maxY && nt.set(lt.id, lt);
        }
      }
      m(), Y({ kind: "move", startX: _.x, startY: _.y, origin: nt, editOnReleaseId: q });
      return;
    }
    N.shiftKey || w(/* @__PURE__ */ new Set()), Y({
      kind: "marquee",
      startX: _.x,
      startY: _.y,
      curX: _.x,
      curY: _.y,
      screenStartX: N.clientX,
      screenStartY: N.clientY
    });
  }, onResizeHandleDown: (N, E, F) => {
    N.stopPropagation(), n.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), m(), Y({ kind: "resize", id: E.id, handle: F, start: E });
  }, onRotateHandleDown: (N, E) => {
    N.stopPropagation(), n.current.set(N.pointerId, { x: N.clientX, y: N.clientY });
    const F = y(N.clientX, N.clientY), O = kt(E);
    m(), Y({
      kind: "rotate",
      id: E.id,
      startAngle: Math.atan2(F.y - O.y, F.x - O.x),
      startRotation: E.rotation ?? 0
    });
  }, onConnectHandleDown: (N, E) => {
    N.stopPropagation(), n.current.set(N.pointerId, { x: N.clientX, y: N.clientY });
    const F = y(N.clientX, N.clientY);
    Y({ kind: "connect", fromId: E.id, toX: F.x, toY: F.y, hoverId: null });
  }, onBendHandleDown: (N, E) => {
    N.stopPropagation(), n.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), m(), Y({ kind: "bend", id: E.id });
  }, onOrthogonalSegmentHandleDown: (N, E, F) => {
    N.stopPropagation(), n.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), m(), Y({ kind: "orthogonal-segment", id: E.id, segmentIndex: F });
  }, onArrowEndpointDown: (N, E, F) => {
    N.stopPropagation(), n.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), m(), Y({ kind: "arrow-endpoint", id: E.id, endpoint: F, hoverId: null });
  } };
}
const zr = 0.1, Cr = 4, Xr = 14, Sr = 4, qe = ["note", "card", "rect", "ellipse", "text", "image"];
function Yr({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: o,
  shapesRef: r,
  setShapes: i,
  setEditingId: c,
  setEraserPos: l,
  setGuides: p,
  setAnnouncement: $,
  applyInteraction: u,
  selectNow: h,
  endHistory: a,
  commit: s,
  onToolChange: f,
  createId: v,
  pendingDrawPointsRef: Y,
  drawRafRef: w,
  rawDrawPointerIdsRef: m
}) {
  const b = v;
  bt(() => {
    const d = (z) => {
      var M, X;
      t.current.delete(z.pointerId), m.current.delete(z.pointerId);
      try {
        (X = (M = z.target) == null ? void 0 : M.releasePointerCapture) == null || X.call(M, z.pointerId);
      } catch {
      }
      const y = e.current;
      if (y.kind !== "none") {
        if (y.kind === "pinch") {
          t.current.size < 2 && u({ kind: "none" });
          return;
        }
        if (p([]), y.kind === "erasing") {
          l(null), a(), u({ kind: "none" });
          return;
        }
        if (y.kind === "connect") {
          const x = r.current.find((A) => A.id === y.fromId);
          if (u({ kind: "none" }), !x) return;
          const k = { x: y.toX, y: y.toY }, S = kt(x);
          if (!y.hoverId && Math.hypot(k.x - S.x, k.y - S.y) < 30) return;
          const I = [];
          let P = y.hoverId;
          if (!P) {
            const A = x.type === "note" ? 180 : 200, T = x.type === "note" ? 180 : 120, N = {
              ...x,
              id: b(),
              x: k.x - A / 2,
              y: k.y - T / 2,
              w: A,
              h: T,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            I.push(N), P = N.id;
          }
          const W = {
            id: b(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: x.id,
            toId: P,
            text: ""
          };
          I.push(W), s((A) => [...A, ...I]), h(/* @__PURE__ */ new Set([W.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => c(W.id)) : c(W.id), $("연결 생성됨");
          return;
        }
        if (y.kind === "bend") {
          a(), u({ kind: "none" });
          return;
        }
        if (y.kind === "drawing") {
          w.current !== null && (cancelAnimationFrame(w.current), w.current = null);
          const C = o(z.clientX, z.clientY);
          Y.current.push([C.x, C.y]);
          const x = Y.current.splice(0);
          i((k) => k.map((S) => {
            if (S.id !== y.id || !S.points) return S;
            const I = [...S.points];
            let P = I[I.length - 1];
            for (const E of x)
              (!P || Math.hypot(E[0] - P[0], E[1] - P[1]) >= 1 / n.current.z) && (I.push(E), P = E);
            const W = I.map((E) => E[0]), A = I.map((E) => E[1]), T = Math.min(...W), N = Math.min(...A);
            return { ...S, points: I, x: T, y: N, w: Math.max(...W) - T, h: Math.max(...A) - N };
          })), a(), u({ kind: "none" });
          return;
        }
        if (y.kind === "creating") {
          i((C) => C.map((x) => {
            if (x.id !== y.id) return x;
            const k = Math.abs(x.w) < 4 && Math.abs(x.h) < 4 ? {
              ...x,
              w: x.type === "arrow" ? 200 : x.type === "frame" ? 480 : 180,
              h: x.type === "arrow" ? 0 : x.type === "frame" ? 320 : 120
            } : x;
            if (k.type === "arrow") return k;
            const S = Ft(k);
            return { ...k, x: S.minX, y: S.minY, w: S.maxX - S.minX, h: S.maxY - S.minY };
          })), a(), h(/* @__PURE__ */ new Set([y.id])), f("select"), u({ kind: "none" });
          return;
        }
        if ((y.kind === "move" || y.kind === "resize" || y.kind === "rotate" || y.kind === "orthogonal-segment" || y.kind === "arrow-endpoint") && a(), y.kind === "move" && y.editOnReleaseId && z.type === "pointerup") {
          const C = o(z.clientX, z.clientY);
          Math.hypot(C.x - y.startX, C.y - y.startY) * n.current.z <= Sr && c(y.editOnReleaseId);
        }
        u({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", d), window.addEventListener("pointercancel", d), () => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d);
    };
  }, [
    u,
    n,
    s,
    v,
    w,
    a,
    e,
    f,
    Y,
    t,
    m,
    h,
    $,
    c,
    l,
    p,
    i,
    r,
    o
  ]);
}
function Nr({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: o,
  shapesRef: r,
  setCamera: i,
  setShapes: c,
  setEraserPos: l,
  setGuides: p,
  applyInteraction: $,
  selectNow: u,
  expandToGroups: h,
  toPage: a,
  pendingDrawPointsRef: s,
  drawRafRef: f,
  rawDrawPointerIdsRef: v
}) {
  bt(() => () => {
    f.current !== null && cancelAnimationFrame(f.current);
  }, [f]), bt(() => {
    const Y = (b, d) => {
      const z = a(b.clientX, b.clientY);
      if (b.shiftKey) {
        c((M) => M.map((X) => {
          if (X.id !== d || !X.points) return X;
          const C = X.points[0];
          return C ? { ...X, points: [C, [z.x, z.y]] } : X;
        }));
        return;
      }
      const y = typeof b.getCoalescedEvents == "function" ? b.getCoalescedEvents() : [];
      if (y.length > 0)
        for (const M of y) {
          const X = a(M.clientX, M.clientY);
          s.current.push([X.x, X.y]);
        }
      s.current.push([z.x, z.y]), f.current === null && (f.current = requestAnimationFrame(() => {
        f.current = null;
        const M = s.current;
        if (M.length === 0) return;
        s.current = [];
        const X = o.current.z;
        c((C) => C.map((x) => {
          if (x.id !== d || !x.points) return x;
          let k = x.points[x.points.length - 1][0], S = x.points[x.points.length - 1][1];
          const I = [...x.points];
          for (const [P, W] of M)
            Math.hypot(P - k, W - S) < 1 / X || (I.push([P, W]), k = P, S = W);
          return I.length === x.points.length ? x : { ...x, points: I };
        }));
      }));
    }, w = (b) => {
      var M, X;
      e.current.has(b.pointerId) && e.current.set(b.pointerId, { x: b.clientX, y: b.clientY });
      const d = n.current;
      if (d.kind === "none") return;
      const z = o.current;
      if (d.kind === "pinch") {
        if (e.current.size < 2) return;
        const [C, x] = [...e.current.values()], k = Math.hypot(x.x - C.x, x.y - C.y) || 1, S = (C.x + x.x) / 2, I = (C.y + x.y) / 2, P = (M = t.current) == null ? void 0 : M.getBoundingClientRect();
        if (!P) return;
        const W = Math.min(Cr, Math.max(zr, d.startZoom * (k / d.startDist))), A = d.camX + (d.startMidX - P.left) / d.startZoom, T = d.camY + (d.startMidY - P.top) / d.startZoom;
        i({ x: A - (S - P.left) / W, y: T - (I - P.top) / W, z: W });
        return;
      }
      if (d.kind === "pan") {
        i({
          x: d.camX - (b.clientX - d.startX) / z.z,
          y: d.camY - (b.clientY - d.startY) / z.z,
          z: z.z
        });
        return;
      }
      const y = a(b.clientX, b.clientY);
      if (d.kind === "erasing") {
        c((C) => wn(C, y.x, y.y, Xr / z.z, z.z)), l({ x: y.x, y: y.y });
        return;
      }
      if (d.kind === "connect") {
        const C = r.current, x = new Map(C.map((S) => [S.id, S])), k = [...C].reverse().find((S) => S.id !== d.fromId && qe.includes(S.type) && ce(S, y.x, y.y, z.z, x, C));
        $({ ...d, toX: y.x, toY: y.y, hoverId: (k == null ? void 0 : k.id) ?? null });
        return;
      }
      if (d.kind === "bend") {
        const C = r.current, x = C.find((N) => N.id === d.id);
        if (!x) return;
        const k = Ct(x, new Map(C.map((N) => [N.id, N])), C), S = k.end.x - k.start.x, I = k.end.y - k.start.y, P = Math.hypot(S, I) || 1, W = (k.start.x + k.end.x) / 2, A = (k.start.y + k.end.y) / 2, T = (y.x - W) * (-I / P) + (y.y - A) * (S / P);
        c((N) => N.map((E) => E.id === d.id ? { ...E, bend: T } : E));
        return;
      }
      if (d.kind === "orthogonal-segment") {
        const C = r.current, x = C.find((T) => T.id === d.id);
        if (!x) return;
        const k = Ct(x, new Map(C.map((T) => [T.id, T])), C), S = k.routing === "orthogonal" ? k.pathPoints : void 0;
        if (!S || S.length < 2) return;
        const I = S[d.segmentIndex], P = S[d.segmentIndex + 1];
        if (!I || !P) return;
        const W = I.x === P.x ? y.x : y.y, A = po(S, d.segmentIndex, W);
        c((T) => T.map((N) => N.id === d.id ? { ...N, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: A.slice(1, -1).map((E) => ({ x: E.x, y: E.y })) } : N));
        return;
      }
      if (d.kind === "arrow-endpoint") {
        const C = r.current, x = C.find((A) => A.id === d.id);
        if (!x) return;
        const k = new Map(C.map((A) => [A.id, A])), S = Ct(x, k, C), I = d.endpoint === "start" ? S.end : S.start, P = [...C].reverse().find((A) => A.id !== x.id && qe.includes(A.type) && ce(A, y.x, y.y, z.z, k, C)), W = P ? Wt(P, I.x, I.y) : { x: y.x, y: y.y };
        $({ ...d, hoverId: (P == null ? void 0 : P.id) ?? null }), c((A) => A.map((T) => {
          if (T.id !== x.id) return T;
          const N = d.endpoint === "start" ? W : I, E = d.endpoint === "end" ? W : I;
          return {
            ...T,
            x: N.x,
            y: N.y,
            w: E.x - N.x,
            h: E.y - N.y,
            fromId: d.endpoint === "start" ? P == null ? void 0 : P.id : T.fromId,
            toId: d.endpoint === "end" ? P == null ? void 0 : P.id : T.toId
          };
        }));
        return;
      }
      if (d.kind === "marquee") {
        $({ ...d, curX: y.x, curY: y.y });
        const C = Math.min(d.startX, y.x), x = Math.max(d.startX, y.x), k = Math.min(d.startY, y.y), S = Math.max(d.startY, y.y), I = Math.min(d.screenStartX, b.clientX), P = Math.max(d.screenStartX, b.clientX), W = Math.min(d.screenStartY, b.clientY), A = Math.max(d.screenStartY, b.clientY), T = /* @__PURE__ */ new Map();
        (X = t.current) == null || X.querySelectorAll("[data-canvas-shape-id]").forEach((E) => {
          const F = E.dataset.canvasShapeId;
          F && T.set(F, E.getBoundingClientRect());
        });
        const N = r.current.filter((E) => {
          const F = T.get(E.id);
          if (F)
            return F.right >= I && F.left <= P && F.bottom >= W && F.top <= A;
          const O = ct(E);
          return O.maxX >= C && O.minX <= x && O.maxY >= k && O.minY <= S;
        }).map((E) => E.id);
        u(h(new Set(N)));
        return;
      }
      if (d.kind === "move") {
        let C = y.x - d.startX, x = y.y - d.startY;
        const k = d.origin, S = (() => {
          let W = 1 / 0, A = 1 / 0, T = -1 / 0, N = -1 / 0;
          return k.forEach((E) => {
            const F = ct({ ...E, x: E.x + C, y: E.y + x });
            W = Math.min(W, F.minX), A = Math.min(A, F.minY), T = Math.max(T, F.maxX), N = Math.max(N, F.maxY);
          }), { minX: W, minY: A, maxX: T, maxY: N };
        })(), I = r.current.filter((W) => !k.has(W.id)), P = Fo(S, I, z.z);
        C += P.dx, x += P.dy, p(P.guides), c((W) => W.map((A) => {
          var N;
          const T = k.get(A.id);
          return T ? {
            ...A,
            x: T.x + C,
            y: T.y + x,
            points: (N = T.points) == null ? void 0 : N.map(([E, F]) => [E + C, F + x]),
            ...T.type === "arrow" && T.orthogonalWaypoints ? { orthogonalWaypoints: T.orthogonalWaypoints.map((E) => ({ x: E.x + C, y: E.y + x })) } : {}
          } : A;
        }));
        return;
      }
      if (d.kind === "drawing") {
        v.current.has(b.pointerId) || Y(b, d.id);
        return;
      }
      if (d.kind === "creating") {
        c((C) => C.map((x) => x.id === d.id ? { ...x, w: y.x - d.startX, h: y.y - d.startY } : x));
        return;
      }
      if (d.kind === "rotate") {
        const C = r.current.find((I) => I.id === d.id);
        if (!C) return;
        const x = kt(C), k = Math.atan2(y.y - x.y, y.x - x.x);
        let S = d.startRotation + (k - d.startAngle);
        b.shiftKey && (S = Math.round(S / (Math.PI / 12)) * (Math.PI / 12)), c((I) => I.map((P) => P.id === d.id ? { ...P, rotation: S } : P));
        return;
      }
      if (d.kind === "resize") {
        const { start: C, handle: x } = d, k = gn(C, y.x, y.y);
        c((S) => S.map((I) => {
          if (I.id !== C.id) return I;
          let { x: P, y: W, w: A, h: T } = C;
          if (x.includes("e") && (A = Math.max(20, k.x - C.x)), x.includes("s") && (T = Math.max(20, k.y - C.y)), x.includes("w")) {
            const N = C.x + C.w;
            P = Math.min(k.x, N - 20), A = N - P;
          }
          if (x.includes("n")) {
            const N = C.y + C.h;
            W = Math.min(k.y, N - 20), T = N - W;
          }
          return { ...I, x: P, y: W, w: A, h: T, manualSize: I.type === "text" ? !0 : I.manualSize };
        }));
      }
    }, m = (b) => {
      if (!(b instanceof PointerEvent)) return;
      const d = b, z = n.current;
      z.kind === "drawing" && (e.current.has(d.pointerId) && e.current.set(d.pointerId, { x: d.clientX, y: d.clientY }), v.current.add(d.pointerId), Y(d, z.id));
    };
    return window.addEventListener("pointermove", w), window.addEventListener("pointerrawupdate", m), () => {
      window.removeEventListener("pointermove", w), window.removeEventListener("pointerrawupdate", m);
    };
  }, [
    $,
    o,
    t,
    f,
    h,
    n,
    s,
    e,
    v,
    u,
    i,
    l,
    p,
    c,
    r,
    a
  ]);
}
function Ir(t) {
  const e = G([]), n = G(null), o = G(/* @__PURE__ */ new Set()), r = { ...t, pendingDrawPointsRef: e, drawRafRef: n, rawDrawPointerIdsRef: o };
  Nr(r), Yr(r);
}
function Pr({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: o,
  cameraRef: r,
  shapesRef: i,
  editingIdRef: c,
  toolRef: l,
  activeColorRef: p,
  drawStrokeWidth: $,
  camera: u,
  shapes: h,
  selected: a,
  isSpaceDown: s,
  textualTypes: f,
  setCamera: v,
  setShapes: Y,
  setEditingId: w,
  setEraserPos: m,
  setGuides: b,
  setAnnouncement: d,
  applyInteraction: z,
  selectNow: y,
  beginHistory: M,
  endHistory: X,
  commit: C,
  onToolChange: x,
  expandToGroups: k,
  toPage: S,
  createId: I
}) {
  const P = Mr({
    containerRef: t,
    editorRef: e,
    pointers: n,
    cameraRef: r,
    shapesRef: i,
    editingIdRef: c,
    toolRef: l,
    activeColorRef: p,
    drawStrokeWidth: $,
    camera: u,
    shapes: h,
    selected: a,
    isSpaceDown: s,
    textualTypes: f,
    setShapes: Y,
    setEditingId: w,
    applyInteraction: z,
    selectNow: y,
    beginHistory: M,
    commit: C,
    onToolChange: x,
    expandToGroups: k,
    toPage: S,
    createId: I
  });
  return Ir({
    containerRef: t,
    pointers: n,
    interactionRef: o,
    cameraRef: r,
    shapesRef: i,
    setCamera: v,
    setShapes: Y,
    setEditingId: w,
    setEraserPos: m,
    setGuides: b,
    setAnnouncement: d,
    applyInteraction: z,
    selectNow: y,
    endHistory: X,
    commit: C,
    onToolChange: x,
    expandToGroups: k,
    toPage: S,
    createId: I
  }), P;
}
function Lr(t) {
  wr(t);
  const e = Pt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return kr({ ...t, toolRef: e }), Pr(t);
}
function Er({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: o,
  zoom: r
}) {
  const i = n || o.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", c = t ? B.gridDark : B.gridLight, l = 40 * r;
  return { cursor: i, gridColor: c, gridSize: l, strokeColorOf: ($) => $.strokeColor ? un($) : $.color ? rt[$.color].border : t ? "var(--canvas-slate-200)" : B.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = ho, document.head.appendChild(t);
}
const Ze = 0.1, Qe = 4, Je = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function Xn(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function tn(t, e, n) {
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
        return Xn(o);
    }
  });
}
function Fr(t, e, n) {
  return t.map((o) => e.has(o.id) && o.type === "draw" ? { ...o, ...n } : o);
}
function Tr(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const _r = Un(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: o,
  drawStrokeWidth: r = 4,
  onToolChange: i,
  onDirty: c,
  onZoomChange: l,
  onSelectionChange: p,
  shapes: $,
  onShapesChange: u,
  peerCursors: h,
  onLocalCursor: a,
  renderDiagram: s
}, f) {
  var Ye, Ne;
  const {
    containerRef: v,
    editorRef: Y,
    setLocalShapes: w,
    controlled: m,
    shapes: b,
    setShapes: d,
    camera: z,
    setCamera: y,
    cameraRef: M,
    selected: X,
    selectedRef: C,
    editingId: x,
    setEditingId: k,
    editingIdRef: S,
    interaction: I,
    interactionRef: P,
    applyInteraction: W,
    isSpaceDown: A,
    setIsSpaceDown: T,
    guides: N,
    setGuides: E,
    announcement: F,
    setAnnouncement: O,
    showInspectorPalette: U,
    setShowInspectorPalette: _,
    eraserPos: Q,
    setEraserPos: et,
    setActiveColor: R,
    activeColorRef: st,
    installedFontFamilies: ft,
    pointers: vt,
    past: K,
    future: Z,
    selectNow: q,
    commit: mt,
    deleteSelection: $t,
    beginHistory: nt,
    endHistory: J,
    toPage: tt,
    viewportCentre: lt,
    expandToGroups: Mt,
    toolRef: Ot,
    shapesRef: St
  } = hr({ boardIdentity: e, tool: o, controlledShapes: $, onShapesChange: u, onDirty: c }), {
    inspectorShape: g,
    onContainerPointerMove: D,
    onContainerPointerLeave: H
  } = xr({
    containerRef: v,
    camera: z,
    setCamera: y,
    minZoom: Ze,
    maxZoom: Qe,
    shapes: b,
    selected: X,
    editingId: x,
    textualTypes: Je,
    onZoomChange: l,
    onSelectionChange: p,
    onLocalCursor: a,
    toPage: tt
  }), V = Vt.useCallback((dt) => {
    const Zt = new Set(C.current);
    Zt.size !== 0 && mt((Qt) => tn(Qt, Zt, dt));
  }, [mt, C]), {
    onPointerDown: it,
    onResizeHandleDown: gt,
    onRotateHandleDown: ue,
    onConnectHandleDown: Sn,
    onBendHandleDown: Yn,
    onOrthogonalSegmentHandleDown: Nn,
    onArrowEndpointDown: In
  } = Lr({
    ref: f,
    containerRef: v,
    editorRef: Y,
    pointers: vt,
    interactionRef: P,
    cameraRef: M,
    shapesRef: St,
    toolRef: Ot,
    activeColorRef: st,
    drawStrokeWidth: r,
    setSelectedStrokeWidth: V,
    camera: z,
    shapes: b,
    selected: X,
    isSpaceDown: A,
    setCamera: y,
    setShapes: d,
    setEditingId: k,
    setEraserPos: et,
    setGuides: E,
    setAnnouncement: O,
    applyInteraction: W,
    selectNow: q,
    past: K,
    future: Z,
    beginHistory: nt,
    endHistory: J,
    commit: mt,
    deleteSelection: $t,
    onDirty: c,
    onToolChange: i,
    controlled: m,
    isDarkMode: n,
    minZoom: Ze,
    maxZoom: Qe,
    textualTypes: Je,
    selectedRef: C,
    editingIdRef: S,
    setIsSpaceDown: T,
    viewportCentre: lt,
    setLocalShapes: w,
    expandToGroups: Mt,
    toPage: tt,
    createId: Tr
  }), { cursor: Pn, gridColor: Ln, gridSize: ze, strokeColorOf: En } = Er({
    isDarkMode: n,
    tool: o === "highlighter" ? "draw" : o,
    isSpaceDown: A,
    interaction: I,
    zoom: z.z
  }), Ce = (dt) => {
    const Zt = C.current, Qt = S.current, jt = new Set(Zt);
    if (Qt && jt.add(Qt), jt.size === 0) return;
    const Ie = "strokeWidth" in dt, Bn = Object.keys(dt).every((yt) => yt === "color" || yt === "fillColor" || yt === "strokeColor" || yt === "strokeWidth");
    if ((g == null ? void 0 : g.type) === "draw" && Bn) {
      const yt = "color" in dt ? dt.color : void 0, pt = "strokeWidth" in dt ? dt.strokeWidth : void 0, Pe = "strokeColor" in dt ? dt.strokeColor : void 0;
      mt((jn) => Fr(jn, jt, {
        ...yt !== void 0 ? { color: yt } : {},
        ...pt !== void 0 ? { strokeWidth: pt } : {},
        ...Pe !== void 0 ? { strokeColor: Pe } : {}
      }));
      return;
    }
    if (Ie) {
      const yt = dt.strokeWidth;
      if (yt !== void 0 && Object.keys(dt).length === 1) {
        mt((pt) => tn(pt, jt, yt));
        return;
      }
    }
    mt((yt) => yt.map((pt) => {
      if (!jt.has(pt.id)) return pt;
      if (!Ie) return { ...pt, ...dt };
      switch (pt.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...pt, ...dt };
        case "note":
        case "card":
        case "text":
        case "image":
          return pt;
        case "draw":
          return { ...pt, ...dt };
        default:
          return Xn(pt);
      }
    }));
  }, {
    commitEditorHtml: Fn,
    applyFormat: Tn,
    applyList: An,
    onEditorKeyDown: Dn,
    applyCustomFontFamily: Wn
  } = ur({
    editorRef: Y,
    editingId: x,
    setShapes: d,
    setAnnouncement: O,
    onDirty: c,
    patchSelected: Ce
  }), { renderEditor: On, renderShapeBody: Hn } = lr({
    camera: z,
    editingId: x,
    isDarkMode: n,
    editorRef: Y,
    commitEditorHtml: Fn,
    onEditorKeyDown: Dn,
    setShapes: d,
    onDirty: c,
    renderDiagram: s
  }), _n = I.kind === "marquee" ? I : null, { shapeById: Xe, visiblePaintOrder: Se } = dr({
    containerRef: v,
    shapesRef: St,
    shapes: b,
    camera: z,
    selected: X,
    editingId: x,
    boardIdentity: e
  });
  return /* @__PURE__ */ j(
    "div",
    {
      ref: v,
      onPointerDown: it,
      onPointerMove: D,
      onPointerLeave: H,
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
        cursor: Pn,
        background: n ? B.canvasDark : B.canvasLight,
        backgroundImage: `radial-gradient(${Ln} 1px, transparent 1px)`,
        backgroundSize: `${ze}px ${ze}px`,
        backgroundPosition: `${-z.x * z.z}px ${-z.y * z.z}px`
      },
      children: [
        /* @__PURE__ */ L("style", { children: '.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas .canvas-rich-text ul>li::before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style="dash"]>li::before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li::before{content:counter(canvas-list-item) ". "}' }),
        /* @__PURE__ */ L(
          "div",
          {
            "aria-live": "polite",
            role: "status",
            className: "absolute w-px h-px overflow-hidden whitespace-nowrap",
            style: { clip: "rect(0 0 0 0)", clipPath: "inset(50%)" },
            children: F
          }
        ),
        /* @__PURE__ */ L(
          Do,
          {
            visiblePaintOrder: Se,
            selected: X,
            shapeById: Xe,
            allShapes: St.current,
            camera: z,
            interaction: I,
            eraserPos: Q,
            guides: N,
            marquee: _n,
            strokeColorOf: En
          }
        ),
        /* @__PURE__ */ L(
          Jo,
          {
            visiblePaintOrder: Se,
            selected: X,
            editingId: x,
            camera: z,
            shapeById: Xe,
            allShapes: St.current,
            peerCursors: h,
            isDarkMode: n,
            renderEditor: On,
            renderShapeBody: Hn,
            setEditingId: k,
            onBendHandleDown: Yn,
            onOrthogonalSegmentHandleDown: Nn,
            onResizeHandleDown: gt,
            onRotateHandleDown: ue,
            onConnectHandleDown: Sn,
            onArrowEndpointDown: In
          }
        ),
        g && /* @__PURE__ */ L(
          sr,
          {
            shape: g,
            shapes: b,
            camera: z,
            canvasSize: { width: ((Ye = v.current) == null ? void 0 : Ye.clientWidth) ?? 380, height: ((Ne = v.current) == null ? void 0 : Ne.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!x,
            showPalette: U,
            installedFontFamilies: ft,
            setShowPalette: _,
            setActiveColor: R,
            patchSelected: Ce,
            applyFormat: Tn,
            applyList: An,
            applyCustomFontFamily: Wn
          }
        )
      ]
    }
  );
});
export {
  rt as CANVAS_COLORS,
  qn as CANVAS_COLOR_KEYS,
  zt as CANVAS_FONTS,
  _r as InfiniteCanvas,
  Jn as SHAPE_TOOLS,
  Fr as applySelectedDrawStyle,
  tn as applySelectedStrokeWidth,
  Hr as diagramTemplate,
  tr as getInspectorGroups,
  zn as isDiagramShape
};
