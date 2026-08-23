import { jsx as N, jsxs as K, Fragment as Bt } from "react/jsx-runtime";
import te, { useState as ot, useRef as Z, useEffect as Yt, useLayoutEffect as Gt, useMemo as Lt, useCallback as xt, useImperativeHandle as Rn, forwardRef as qn } from "react";
import { p as Zn, i as Se, k as Xe, a as rt, v as Qn, c as It, s as Jn, b as to, d as Rt, h as eo, C as no, S as oo } from "./document-CLNFlHux.js";
import { Minus as ro, Plus as ao, ChevronDown as io, AlignLeft as co, AlignCenter as so, AlignRight as lo, List as uo, ListOrdered as ho, Bold as xo, Italic as fo, Underline as vo, Group as po, Ungroup as mo, Copy as go, Trash2 as yo } from "lucide-react";
const wo = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', U = Object.freeze({
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
}), un = 12;
function $e(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function ce(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function se(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function le(t, e, n, o) {
  const c = se(t, e, n), i = se(t, e, o), l = se(n, o, t), v = se(n, o, e);
  return Math.abs(c) < 1e-6 && ce(t, n, e) || Math.abs(i) < 1e-6 && ce(t, o, e) || Math.abs(l) < 1e-6 && ce(n, t, o) || Math.abs(v) < 1e-6 && ce(n, e, o) ? !0 : c > 0 != i > 0 && l > 0 != v > 0;
}
function bo(t, e, n) {
  const o = Math.min(t.x, e.x), a = Math.max(t.x, e.x), c = Math.min(t.y, e.y), i = Math.max(t.y, e.y);
  if (a < n.minX || o > n.maxX || i < n.minY || c > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const l = { x: n.minX, y: n.minY }, v = { x: n.maxX, y: n.minY }, k = { x: n.maxX, y: n.maxY }, u = { x: n.minX, y: n.maxY };
  return le(t, e, l, v) || le(t, e, v, k) || le(t, e, k, u) || le(t, e, u, l);
}
function ko(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const o of e)
      if (bo(t[n - 1], t[n], o)) return !0;
  return !1;
}
function Me(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function Ye(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = Me(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let o = 0;
  for (let c = 1; c < t.length; c++) {
    const i = Math.hypot(t[c].x - t[c - 1].x, t[c].y - t[c - 1].y);
    if (o + i >= n) {
      const l = (n - o) / i;
      return { x: t[c - 1].x + (t[c].x - t[c - 1].x) * l, y: t[c - 1].y + (t[c].y - t[c - 1].y) * l };
    }
    o += i;
  }
  const a = t[t.length - 1];
  return { x: a.x, y: a.y };
}
function ee(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function Oe(t, e, n, o) {
  const a = /* @__PURE__ */ new Set([t, e]), c = Math.min(t, e), i = Math.max(t, e), l = un * 1.2;
  for (const v of n) {
    const k = (o === "x" ? v.minX : v.minY) - l, u = (o === "x" ? v.maxX : v.maxY) + l, x = (r) => r >= c - l * 4 && r <= i + l * 4;
    x(k) && a.add(k), x(u) && a.add(u);
  }
  return [...a].sort((v, k) => Math.abs(v - t) - Math.abs(k - t));
}
function hn(t) {
  const e = [];
  for (const n of t) {
    const o = e[e.length - 1];
    (!o || o.x !== n.x || o.y !== n.y) && e.push(n);
  }
  return e;
}
function xn(t) {
  const e = [];
  for (const n of t) {
    const o = e[e.length - 1];
    if (o && o.x === n.x && o.y === n.y) continue;
    const a = e[e.length - 2];
    if (a && o && (a.x === o.x && o.x === n.x || a.y === o.y && o.y === n.y)) {
      e[e.length - 1] = n;
      continue;
    }
    e.push(n);
  }
  return e;
}
function $o(t, e, n) {
  const o = [t];
  for (const a of [...n, e]) {
    const c = o[o.length - 1];
    if (!c) {
      o.push(a);
      continue;
    }
    if (c.x === a.x || c.y === a.y) {
      o.push(a);
      continue;
    }
    o.push({ x: a.x, y: c.y }, a);
  }
  return xn(o);
}
function Mo(t, e, n) {
  const o = t[e], a = t[e + 1];
  if (!o || !a || !Number.isFinite(n) || o.x !== a.x && o.y !== a.y) return [...t];
  const c = o.x === a.x ? [o, { x: n, y: o.y }, { x: n, y: a.y }, a] : [o, { x: o.x, y: n }, { x: a.x, y: n }, a];
  return xn([
    ...t.slice(0, e),
    ...c,
    ...t.slice(e + 2)
  ]);
}
function ge(t, e) {
  const n = [], o = [];
  for (const c of t) {
    const i = hn(c);
    i.length < 2 || (ko(i, e) ? o.push(i) : n.push(i));
  }
  const a = n.length > 0 ? n : o;
  return a.length === 0 ? [] : a.reduce((c, i) => Me(i) < Me(c) ? i : c);
}
function _e(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function Ut(t, e, n, o) {
  const a = Math.min(t, e), c = Math.max(t, e), i = Math.max(48, Math.abs(e - t) * 0.35, un * 4);
  if (o === "x") {
    if (n === "e") return c + i;
    if (n === "w") return a - i;
  } else {
    if (n === "s") return c + i;
    if (n === "n") return a - i;
  }
  return t <= e ? a - i : c + i;
}
function zo(t, e, n, o, a) {
  const c = (t.x + e.x) / 2, i = (t.y + e.y) / 2;
  if (n === "u") {
    if (o) {
      const v = Ut(t.x, e.x, t.side, "x");
      return [t, { x: v, y: t.y }, { x: v, y: e.y }, e];
    }
    const l = Ut(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: l }, { x: e.x, y: l }, e];
  }
  if (n === "zigzag") {
    if (o) {
      const k = Ut(t.x, e.x, t.side, "x"), u = Ut(t.y, e.y, t.side, "y");
      return a ? [t, { x: k, y: t.y }, { x: k, y: u }, { x: c, y: u }, { x: c, y: e.y }, e] : [t, { x: k, y: t.y }, { x: k, y: u }, { x: e.x, y: u }, e];
    }
    const l = Ut(t.y, e.y, t.side, "y"), v = Ut(t.x, e.x, t.side, "x");
    return a ? [t, { x: t.x, y: l }, { x: v, y: l }, { x: v, y: e.y }, e] : [t, { x: t.x, y: l }, { x: v, y: l }, { x: v, y: i }, { x: e.x, y: i }, e];
  }
  return [];
}
function fn(t, e, n = [], o = "elbow", a = []) {
  if (a.length > 0) return $o(t, e, a);
  const c = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), i = e.side ?? (c === "e" || c === "w" ? "w" : "n"), l = c === "e" || c === "w", v = i === "e" || i === "w", k = Oe(t.x, e.x, n, "x"), u = Oe(t.y, e.y, n, "y"), x = [];
  if (l && v) {
    for (const g of k) x.push([t, { x: g, y: t.y }, { x: g, y: e.y }, e]);
    for (const g of u) x.push([t, { x: t.x, y: g }, { x: e.x, y: g }, e]);
  } else if (!l && !v) {
    for (const g of u) x.push([t, { x: t.x, y: g }, { x: e.x, y: g }, e]);
    for (const g of k) x.push([t, { x: g, y: t.y }, { x: g, y: e.y }, e]);
  } else if (l) {
    x.push([t, { x: e.x, y: t.y }, e]);
    for (const g of u)
      x.push([t, { x: t.x, y: g }, { x: e.x, y: g }, e]), x.push([t, { x: t.x, y: g }, e]);
    for (const g of k) x.push([t, { x: g, y: t.y }, { x: g, y: e.y }, e]);
  } else {
    x.push([t, { x: t.x, y: e.y }, e]);
    for (const g of u)
      x.push([t, { x: t.x, y: g }, e]), x.push([t, { x: t.x, y: g }, { x: e.x, y: g }, e]);
    for (const g of k) x.push([t, { x: g, y: t.y }, { x: g, y: e.y }, e]);
  }
  const r = ge(x, n);
  if (o === "elbow") return r;
  if (o === "reverse") {
    const g = _e(r), C = ge(x.filter((y) => _e(y) !== g), n);
    return C.length > 1 ? C : r;
  }
  const s = zo(t, e, o, l, v), p = ge([s], n);
  return p.length > 1 ? p : r;
}
function vn(t) {
  return t.length < 2 ? 0 : ee(t[t.length - 2], t[t.length - 1]);
}
const { PI: Co } = Math, ne = Co + 1e-4, He = 0.5, Be = [1, 1];
function je(t, e, n, o = (a) => a) {
  return t * o(0.5 - e * (0.5 - n));
}
const { min: ye } = Math;
function pn(t, e, n) {
  let o = ye(1, e / n);
  return ye(1, t + (ye(1, 1 - o) - t) * (o * 0.275));
}
function So(t) {
  return [-t[0], -t[1]];
}
function Ft(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function Ke(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function Ot(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function ze(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function Wt(t, e) {
  return [t[0] * e, t[1] * e];
}
function we(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function Xo(t, e) {
  return [t[0] / e, t[1] / e];
}
function mn(t) {
  return [t[1], -t[0]];
}
function be(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function Ue(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function Yo(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function No(t) {
  return Math.hypot(t[0], t[1]);
}
function Ve(t, e) {
  let n = t[0] - e[0], o = t[1] - e[1];
  return n * n + o * o;
}
function gn(t) {
  return Xo(t, No(t));
}
function Po(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function Ne(t, e, n) {
  let o = Math.sin(n), a = Math.cos(n), c = t[0] - e[0], i = t[1] - e[1], l = c * a - i * o, v = c * o + i * a;
  return [l + e[0], v + e[1]];
}
function Ge(t, e, n, o) {
  let a = Math.sin(o), c = Math.cos(o), i = e[0] - n[0], l = e[1] - n[1], v = i * c - l * a, k = i * a + l * c;
  return t[0] = v + n[0], t[1] = k + n[1], t;
}
function Re(t, e, n) {
  return Ft(t, Wt(Ot(e, t), n));
}
function Io(t, e, n, o) {
  let a = n[0] - e[0], c = n[1] - e[1];
  return t[0] = e[0] + a * o, t[1] = e[1] + c * o, t;
}
function yn(t, e, n) {
  return Ft(t, Wt(e, n));
}
const at = [0, 0], Tt = [0, 0], At = [0, 0];
function Lo(t, e) {
  let n = yn(t, gn(mn(Ot(t, Ft(t, [1, 1])))), -e), o = [], a = 1 / 13;
  for (let c = a; c <= 1; c += a) o.push(Ne(n, t, ne * 2 * c));
  return o;
}
function Eo(t, e, n) {
  let o = [], a = 1 / n;
  for (let c = a; c <= 1; c += a) o.push(Ne(e, t, ne * c));
  return o;
}
function Fo(t, e, n) {
  let o = Ot(e, n), a = Wt(o, 0.5), c = Wt(o, 0.51);
  return [Ot(t, a), Ot(t, c), Ft(t, c), Ft(t, a)];
}
function To(t, e, n, o) {
  let a = [], c = yn(t, e, n), i = 1 / o;
  for (let l = i; l < 1; l += i) a.push(Ne(c, t, ne * 3 * l));
  return a;
}
function Ao(t, e, n) {
  return [Ft(t, Wt(e, n)), Ft(t, Wt(e, n * 0.99)), Ot(t, Wt(e, n * 0.99)), Ot(t, Wt(e, n))];
}
function qe(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function Do(t, e, n) {
  return t.slice(0, 10).reduce((o, a) => {
    let c = a.pressure;
    return e && (c = pn(o, a.distance, n)), (o + c) / 2;
  }, t[0].pressure);
}
function Wo(t, e = {}) {
  let { size: n = 16, smoothing: o = 0.5, thinning: a = 0.5, simulatePressure: c = !0, easing: i = (E) => E, start: l = {}, end: v = {}, last: k = !1 } = e, { cap: u = !0, easing: x = (E) => E * (2 - E) } = l, { cap: r = !0, easing: s = (E) => --E * E * E + 1 } = v;
  if (t.length === 0 || n <= 0) return [];
  let p = t[t.length - 1].runningLength, g = qe(l.taper, n, p), C = qe(v.taper, n, p), y = (n * o) ** 2, d = [], b = [], m = Do(t, c, n), $ = je(n, a, t[t.length - 1].pressure, i), X, h = t[0].vector, w = t[0].point, f = w, M = w, z = f, P = !1;
  for (let E = 0; E < t.length; E++) {
    let { pressure: Y } = t[E], { point: T, vector: A, distance: O, runningLength: G } = t[E], H = E === t.length - 1;
    if (!H && p - G < 3) continue;
    a ? (c && (Y = pn(m, O, n)), $ = je(n, a, Y, i)) : $ = n / 2, X === void 0 && (X = $);
    let et = G < g ? x(G / g) : 1, Q = p - G < C ? s((p - G) / C) : 1;
    $ = Math.max(0.01, $ * Math.min(et, Q));
    let q = (H ? t[E] : t[E + 1]).vector, ft = H ? 1 : Ue(A, q), lt = Ue(A, h) < 0 && !P, yt = ft !== null && ft < 0;
    if (lt || yt) {
      be(at, h), we(at, at, $);
      for (let V = 0; V <= 1; V += 0.07692307692307693) ze(Tt, T, at), Ge(Tt, Tt, T, ne * V), M = [Tt[0], Tt[1]], d.push(M), Ke(At, T, at), Ge(At, At, T, ne * -V), z = [At[0], At[1]], b.push(z);
      w = M, f = z, yt && (P = !0);
      continue;
    }
    if (P = !1, H) {
      be(at, A), we(at, at, $), d.push(Ot(T, at)), b.push(Ft(T, at));
      continue;
    }
    Io(at, q, A, ft), be(at, at), we(at, at, $), ze(Tt, T, at), M = [Tt[0], Tt[1]], (E <= 1 || Ve(w, M) > y) && (d.push(M), w = M), Ke(At, T, at), z = [At[0], At[1]], (E <= 1 || Ve(f, z) > y) && (b.push(z), f = z), m = Y, h = A;
  }
  let I = [t[0].point[0], t[0].point[1]], L = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : Ft(t[0].point, [1, 1]), F = [], D = [];
  if (t.length === 1) {
    if (!(g || C) || k) return Lo(I, X || $);
  } else {
    g || C && t.length === 1 || (u ? F.push(...Eo(I, b[0], 13)) : F.push(...Fo(I, d[0], b[0])));
    let E = mn(So(t[t.length - 1].vector));
    C || g && t.length === 1 ? D.push(L) : r ? D.push(...To(L, E, $, 29)) : D.push(...Ao(L, E, $));
  }
  return d.concat(D, b.reverse(), F);
}
const Ze = [0, 0];
function Qe(t) {
  return t != null && t >= 0;
}
function Oo(t, e = {}) {
  var r;
  let { streamline: n = 0.5, size: o = 16, last: a = !1 } = e;
  if (t.length === 0) return [];
  let c = 0.15 + (1 - n) * 0.85, i = Array.isArray(t[0]) ? t : t.map(({ x: s, y: p, pressure: g = He }) => [s, p, g]);
  if (i.length === 2) {
    let s = i[1];
    i = i.slice(0, -1);
    for (let p = 1; p < 5; p++) i.push(Re(i[0], s, p / 4));
  }
  i.length === 1 && (i = [...i, [...Ft(i[0], Be), ...i[0].slice(2)]]);
  let l = [{ point: [i[0][0], i[0][1]], pressure: Qe(i[0][2]) ? i[0][2] : 0.25, vector: [...Be], distance: 0, runningLength: 0 }], v = !1, k = 0, u = l[0], x = i.length - 1;
  for (let s = 1; s < i.length; s++) {
    let p = a && s === x ? [i[s][0], i[s][1]] : Re(u.point, i[s], c);
    if (Yo(u.point, p)) continue;
    let g = Po(p, u.point);
    if (k += g, s < x && !v) {
      if (k < o) continue;
      v = !0;
    }
    ze(Ze, u.point, p), u = { point: p, pressure: Qe(i[s][2]) ? i[s][2] : He, vector: gn(Ze), distance: g, runningLength: k }, l.push(u);
  }
  return l[0].vector = ((r = l[1]) == null ? void 0 : r.vector) || [0, 0], l;
}
function _o(t, e = {}) {
  return Wo(Oo(t, e), e);
}
var Ho = _o;
function fe(t) {
  if (t.fillColor)
    try {
      return Xe(t.fillColor);
    } catch {
      return t.color ? rt[t.color].bg : rt.blue.bg;
    }
  return t.color ? rt[t.color].bg : rt.blue.bg;
}
function wn(t) {
  if (t.strokeColor)
    try {
      return Xe(t.strokeColor);
    } catch {
      return t.color ? rt[t.color].border : "#2563eb";
    }
  return t.color ? rt[t.color].border : "#2563eb";
}
function bn(t) {
  return wn(t);
}
function jt(t) {
  if (t.textColor)
    try {
      return Xe(t.textColor);
    } catch {
      return t.color ? rt[t.color].text : "#0f172a";
    }
  return t.color ? rt[t.color].text : "#0f172a";
}
function kn(t, e, n) {
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
      const o = e / 2, a = n / 2, c = Math.min(e, n) / 2, i = c * 0.4, l = [];
      for (let v = 0; v < 10; v++) {
        const k = Math.PI / 5 * v - Math.PI / 2, u = v % 2 === 0 ? c : i;
        l.push(`${o + u * Math.cos(k)},${a + u * Math.sin(k)}`);
      }
      return l.join(" ");
    }
    default:
      return "";
  }
}
function $n(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [a, c] = t[o], [i, l] = t[o + 1];
    e += ` Q ${a} ${c} ${(a + i) / 2} ${(c + l) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function Bo(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [c, i] = t[0], l = n === "highlighter" ? e * 1.25 : e / 2;
    return `M ${c - l} ${i} A ${l} ${l} 0 1 0 ${c + l} ${i} A ${l} ${l} 0 1 0 ${c - l} ${i} Z`;
  }
  const o = n === "highlighter" ? { size: e * 2.5, thinning: 0, simulatePressure: !1, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: e, thinning: 0, simulatePressure: !1, smoothing: 0.62, streamline: 0.62, last: !0 }, a = Ho(t, o);
  return a.length === 0 ? "" : a.reduce(
    (c, [i, l], v) => c + (v === 0 ? `M ${i} ${l}` : ` L ${i} ${l}`),
    ""
  ) + " Z";
}
function Dt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function Mn(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], o = (a, c) => {
    a.childNodes.forEach((i) => {
      if (i.nodeType === Node.TEXT_NODE) {
        const u = i.textContent ?? "";
        u && n[n.length - 1].push({ text: u, ...c });
        return;
      }
      if (i.nodeType !== Node.ELEMENT_NODE) return;
      const l = i;
      if (l.tagName === "BR") {
        n.push([]);
        return;
      }
      const v = { bold: c.bold || l.tagName === "B" || l.tagName === "STRONG", italic: c.italic || l.tagName === "I" || l.tagName === "EM", underline: c.underline || l.tagName === "U" }, k = l.tagName === "DIV" || l.tagName === "P" || l.tagName === "LI";
      k && n[n.length - 1].length > 0 && n.push([]), o(l, v), k && n.push([]);
    });
  };
  return o(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((a) => a.length > 0);
}
const Je = /* @__PURE__ */ new WeakMap();
function pe(t) {
  const e = Je.get(t);
  if (e !== void 0) return e;
  const n = t.html ? Se(t.html) : t.text ? Dt(t.text).replace(/\n/g, "<br>") : "";
  return Je.set(t, n), n;
}
function Ce(t) {
  if (t)
    try {
      return Qn(t);
    } catch {
      return;
    }
}
function zn(t) {
  try {
    return Zn(t);
  } catch {
    return null;
  }
}
function re(t) {
  return t.html ? Mn(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const de = 12;
function _t(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function Nt(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function it(t) {
  const e = t.rotation ?? 0, n = _t(t);
  if (!e) return n;
  const o = Nt(t), a = Math.cos(e), c = Math.sin(e), i = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([k, u]) => {
    const x = k - o.x, r = u - o.y;
    return [o.x + x * a - r * c, o.y + x * c + r * a];
  }), l = i.map((k) => k[0]), v = i.map((k) => k[1]);
  return { minX: Math.min(...l), minY: Math.min(...v), maxX: Math.max(...l), maxY: Math.max(...v) };
}
function Cn(t, e, n) {
  const o = t.rotation ?? 0;
  if (!o) return { x: e, y: n };
  const a = Nt(t), c = Math.cos(-o), i = Math.sin(-o), l = e - a.x, v = n - a.y;
  return { x: a.x + l * c - v * i, y: a.y + l * i + v * c };
}
function ue(t, e, n, o, a, c) {
  const i = a - n, l = c - o, v = i * i + l * l, k = v === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * i + (e - o) * l) / v));
  return Math.hypot(t - (n + k * i), e - (o + k * l));
}
function ve(t, e, n, o, a, c) {
  const i = 8 / o;
  if (t.type === "arrow") {
    const k = (t.strokeWidth ?? 2.5) / o / 2 + i, u = Et(t, a ?? /* @__PURE__ */ new Map(), c);
    if (u.routing === "orthogonal" && u.pathPoints && u.pathPoints.length > 1) {
      for (let r = 1; r < u.pathPoints.length; r++) {
        const s = u.pathPoints[r - 1], p = u.pathPoints[r];
        if (ue(e, n, s.x, s.y, p.x, p.y) <= k) return !0;
      }
      return !1;
    }
    if (u.bend === 0) return ue(e, n, u.start.x, u.start.y, u.end.x, u.end.y) <= k;
    let x = u.start;
    for (let r = 1; r <= 16; r++) {
      const s = oe(r / 16, u.start, u.control, u.end);
      if (ue(e, n, x.x, x.y, s.x, s.y) <= k) return !0;
      x = s;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const x = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / o / 2 + i;
    if (t.points.length === 1) {
      const [r, s] = t.points[0];
      return Math.hypot(e - r, n - s) <= x;
    }
    for (let r = 1; r < t.points.length; r++) {
      const [s, p] = t.points[r - 1], [g, C] = t.points[r];
      if (ue(e, n, s, p, g, C) <= x) return !0;
    }
    return !1;
  }
  const l = Cn(t, e, n), v = _t(t);
  if (t.type === "frame") {
    const k = l.x >= v.minX - i && l.x <= v.maxX + i && l.y >= v.minY - i && l.y <= v.maxY + i && (l.x <= v.minX + i || l.x >= v.maxX - i || l.y <= v.minY + i || l.y >= v.maxY - i), u = l.x >= v.minX - i && l.x <= v.maxX + i && l.y >= v.minY - 28 / o && l.y <= v.minY;
    return k || u;
  }
  return l.x >= v.minX - i && l.x <= v.maxX + i && l.y >= v.minY - i && l.y <= v.maxY + i;
}
function Kt(t, e, n) {
  const o = _t(t), a = (o.minX + o.maxX) / 2, c = (o.minY + o.maxY) / 2, i = e - a, l = n - c;
  if (i === 0 && l === 0) return { x: a, y: c, side: "e" };
  const v = (o.maxX - o.minX) / 2, k = (o.maxY - o.minY) / 2, u = v === 0 ? 1 / 0 : Math.abs(v / i), x = k === 0 ? 1 / 0 : Math.abs(k / l);
  return u <= x ? { x: a + i * u, y: c + l * u, side: i >= 0 ? "e" : "w" } : { x: a + i * x, y: c + l * x, side: l >= 0 ? "s" : "n" };
}
function Sn(t, e, n, o) {
  const a = /* @__PURE__ */ new Set([e.id, n, o]);
  return t.filter((c) => !a.has(c.id)).map((c) => {
    const i = it(c);
    return { minX: i.minX - de, minY: i.minY - de, maxX: i.maxX + de, maxY: i.maxY + de };
  }).filter((c) => c.maxX > c.minX && c.maxY > c.minY);
}
function Et(t, e, n = []) {
  const o = t.fromId ? e.get(t.fromId) : void 0, a = t.toId ? e.get(t.toId) : void 0;
  let c = { x: t.x, y: t.y }, i = { x: t.x + t.w, y: t.y + t.h };
  if (o && a) {
    const p = Nt(o), g = Nt(a);
    c = Kt(o, g.x, g.y), i = Kt(a, p.x, p.y);
  } else o ? c = Kt(o, i.x, i.y) : a && (i = Kt(a, c.x, c.y));
  const l = (c.x + i.x) / 2, v = (c.y + i.y) / 2, k = t.bend ?? 0;
  let u = { x: l, y: v };
  if (k !== 0) {
    const p = i.x - c.x, g = i.y - c.y, C = Math.hypot(p, g) || 1;
    u = { x: l + -g / C * k, y: v + p / C * k };
  }
  const x = !!(o || a), r = t.routing ?? (x ? "orthogonal" : k !== 0 ? "curved" : "straight");
  if (r !== "orthogonal") return { start: c, end: i, control: u, bend: k, routing: r };
  const s = Sn(n, t, o == null ? void 0 : o.id, a == null ? void 0 : a.id);
  return {
    start: c,
    end: i,
    control: u,
    bend: k,
    routing: r,
    pathPoints: hn(fn(c, i, s, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function oe(t, e, n, o) {
  const a = 1 - t;
  return { x: a * a * e.x + 2 * a * t * n.x + t * t * o.x, y: a * a * e.y + 2 * a * t * n.y + t * t * o.y };
}
function Xn(t, e, n, o, a) {
  const c = [];
  let i = 0;
  for (const l of t) {
    if (l.type !== "draw" || !l.points) {
      if (ve(l, e, n, a)) continue;
      c.push(l);
      continue;
    }
    const v = [];
    let k = [];
    for (const [x, r] of l.points)
      Math.hypot(x - e, r - n) <= o / a ? (k.length > 1 && v.push(k), k = []) : k.push([x, r]);
    if (k.length > 1 && v.push(k), v.length === 0) continue;
    const u = _t(l);
    v.forEach((x) => c.push({ ...l, id: `${l.id}-e${i++}`, points: x, x: u.minX, y: u.minY, w: u.maxX - u.minX, h: u.maxY - u.minY }));
  }
  return c;
}
function jo(t, e, n) {
  const o = 6 / n;
  let a = null, c = null;
  const i = [], l = [t.minX, (t.minX + t.maxX) / 2, t.maxX], v = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const k of e) {
    const u = it(k), x = [u.minX, (u.minX + u.maxX) / 2, u.maxX], r = [u.minY, (u.minY + u.maxY) / 2, u.maxY];
    for (const s of l) for (const p of x) {
      const g = p - s;
      Math.abs(g) <= o && (!a || Math.abs(g) < Math.abs(a.delta)) && (a = { delta: g, at: p });
    }
    for (const s of v) for (const p of r) {
      const g = p - s;
      Math.abs(g) <= o && (!c || Math.abs(g) < Math.abs(c.delta)) && (c = { delta: g, at: p });
    }
  }
  return a && i.push({ x1: a.at, y1: t.minY - 1e3, x2: a.at, y2: t.maxY + 1e3 }), c && i.push({ x1: t.minX - 1e3, y1: c.at, x2: t.maxX + 1e3, y2: c.at }), { dx: (a == null ? void 0 : a.delta) ?? 0, dy: (c == null ? void 0 : c.delta) ?? 0, guides: i };
}
const Ko = te.memo(function({
  shape: e,
  cameraZoom: n,
  color: o
}) {
  if (!e.points) return null;
  const a = e.drawMode ?? "pen", c = e.strokeWidth ?? 3;
  return /* @__PURE__ */ N(
    "path",
    {
      "data-canvas-vector-shape-id": e.id,
      "data-canvas-vector-shape-type": "draw",
      "data-canvas-draw-mode": a,
      "data-canvas-stroke-width": c,
      d: $n(e.points),
      fill: "none",
      stroke: o,
      strokeWidth: c / n,
      strokeOpacity: a === "highlighter" ? 0.35 : void 0,
      fillOpacity: a === "highlighter" ? 0.35 : void 0,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  );
}), Uo = 14;
function Vo({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: o,
  camera: a,
  interaction: c,
  eraserPos: i,
  guides: l,
  marquee: v,
  strokeColorOf: k
}) {
  return /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ K("g", { transform: `scale(${a.z}) translate(${-a.x}, ${-a.y})`, children: [
    t.map((u) => {
      if (u.type === "draw" && u.points) {
        const M = e.has(u.id);
        return /* @__PURE__ */ N(
          Ko,
          {
            shape: u,
            cameraZoom: a.z,
            color: M ? U.blue : k(u)
          },
          u.id
        );
      }
      if (u.type !== "arrow") return null;
      const x = e.has(u.id) ? U.blue : k(u), r = Et(u, n, o), s = u.strokeWidth ?? 2.5, p = s / a.z, g = Math.max(10, 8 + s * 2), C = Math.max(4, 2 + s), y = g / a.z, d = C / a.z, b = r.routing === "orthogonal" && r.pathPoints ? r.pathPoints : null, m = b && b.length > 1;
      let $, X;
      if (m)
        $ = $e(b), X = vn(b);
      else if (r.routing === "curved") {
        $ = `M ${r.start.x} ${r.start.y} Q ${r.control.x} ${r.control.y} ${r.end.x} ${r.end.y}`;
        const M = oe(0.94, r.start, r.control, r.end);
        X = Math.atan2(r.end.y - M.y, r.end.x - M.x);
      } else
        $ = `M ${r.start.x} ${r.start.y} L ${r.end.x} ${r.end.y}`, X = Math.atan2(r.end.y - r.start.y, r.end.x - r.start.x);
      const h = m && b.length >= 2 ? ee(b[0], b[1]) : r.routing === "orthogonal" && r.start.side ? r.start.side === "e" ? 0 : r.start.side === "w" ? Math.PI : r.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : ee(r.start, r.end), w = u.strokeStyle === "dashed" ? `${8 / a.z} ${5 / a.z}` : u.strokeStyle === "dotted" ? `${1.5 / a.z} ${4 / a.z}` : void 0, f = (M, z, P, I) => M === "dot" ? /* @__PURE__ */ N("circle", { "data-canvas-arrow-dot-radius": C, cx: z, cy: P, r: d, fill: x }) : M === "none" ? null : /* @__PURE__ */ N(
        "polygon",
        {
          "data-canvas-arrowhead-size": g,
          points: `${z},${P} ${z - y * Math.cos(I - 0.4)},${P - y * Math.sin(I - 0.4)} ${z - y * Math.cos(I + 0.4)},${P - y * Math.sin(I + 0.4)}`,
          fill: x
        }
      );
      return /* @__PURE__ */ K("g", { "data-canvas-vector-shape-id": u.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": r.routing, "data-canvas-stroke-width": s, children: [
        /* @__PURE__ */ N("path", { d: $, fill: "none", stroke: x, strokeWidth: p, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: w }),
        f(u.arrowEnd ?? "arrow", r.end.x, r.end.y, X),
        f(u.arrowStart ?? "none", r.start.x, r.start.y, h + Math.PI)
      ] }, u.id);
    }),
    c.kind === "connect" && c.fromId !== void 0 && c.toX !== void 0 && c.toY !== void 0 && (() => {
      const u = n.get(c.fromId);
      if (!u) return null;
      const x = Kt(u, c.toX, c.toY), r = c.hoverId ? n.get(c.hoverId) : null, s = r ? Kt(r, x.x, x.y) : { x: c.toX, y: c.toY }, p = r ? fn(x, s, Sn(o, { id: "__preview" }, u.id, r.id)) : [x, s];
      return /* @__PURE__ */ K("g", { children: [
        /* @__PURE__ */ N("path", { d: $e(p), stroke: U.blue, strokeWidth: 2 / a.z, strokeDasharray: `${5 / a.z} ${4 / a.z}` }),
        r ? /* @__PURE__ */ N("rect", { x: it(r).minX - 3 / a.z, y: it(r).minY - 3 / a.z, width: it(r).maxX - it(r).minX + 6 / a.z, height: it(r).maxY - it(r).minY + 6 / a.z, fill: "none", stroke: U.blue, strokeWidth: 2 / a.z, rx: 6 / a.z }) : /* @__PURE__ */ N("circle", { cx: s.x, cy: s.y, r: 5 / a.z, fill: U.blue })
      ] });
    })(),
    i && /* @__PURE__ */ N("circle", { cx: i.x, cy: i.y, r: Uo / a.z, fill: U.roseSoft, stroke: U.rose, strokeWidth: 1 / a.z }),
    l.map((u, x) => /* @__PURE__ */ N("line", { x1: u.x1, y1: u.y1, x2: u.x2, y2: u.y2, stroke: U.pink, strokeWidth: 1 / a.z, strokeDasharray: `${4 / a.z} ${4 / a.z}` }, `guide-${x}`)),
    v && /* @__PURE__ */ N("rect", { x: Math.min(v.startX, v.curX), y: Math.min(v.startY, v.curY), width: Math.abs(v.curX - v.startX), height: Math.abs(v.curY - v.startY), fill: U.marqueeFill, stroke: U.blue, strokeWidth: 1 / a.z })
  ] }) });
}
const Go = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], Ro = /* @__PURE__ */ new Set([
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
]), qo = [
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
function me(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function Yn(t) {
  return Ro.has(t.trim().toLowerCase());
}
function Nn(t) {
  const e = me(t);
  return e ? Yn(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function Zo(t) {
  return me(t).split(",").map((e) => e.trim()).filter(Boolean).map(Nn).filter(Boolean).join(", ");
}
function Pn(t) {
  return me(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Qt(t) {
  return t.split(",").map((e) => me(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !Yn(e));
}
const he = Array.from(/* @__PURE__ */ new Set([
  ...qo,
  ...Qt(It.sans.stack),
  ...Qt(It.serif.stack),
  ...Qt(It.mono.stack),
  ...Qt(It.gothic.stack),
  ...Qt(It.korean.stack)
]));
function Qo() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return he;
  const t = he.filter((e) => {
    const n = Nn(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : he;
}
const Jo = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, tr = 24, er = 28, In = 720;
function mt(t) {
  return t.fontSize ?? Jo[t.type] ?? 14;
}
function gt(t) {
  var e;
  if (!t.fontFamily) return It.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = Pn(Jn(t.customFontFamily ?? ""));
    } catch {
    }
    return Zo(n) || It.sans.stack;
  }
  return ((e = It[t.fontFamily]) == null ? void 0 : e.stack) ?? It.sans.stack;
}
function kt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function nr(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function or(t) {
  var e, n, o;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((o = t.html) != null && o.includes("<ol>")) return "number";
}
function rr(t, e) {
  return {
    w: Math.min(In, Math.max(tr, Math.ceil(t))),
    h: Math.max(er, Math.ceil(e))
  };
}
function ar(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = Se(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
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
    fontSize: `${mt(e)}px`,
    fontFamily: gt(e)
  }), document.body.appendChild(n);
  const o = n.getBoundingClientRect();
  return n.remove(), rr(o.width, o.height);
}
const ir = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), cr = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function sr({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: o,
  shapeById: a,
  allShapes: c,
  peerCursors: i,
  isDarkMode: l,
  renderEditor: v,
  renderShapeBody: k,
  setEditingId: u,
  onBendHandleDown: x,
  onOrthogonalSegmentHandleDown: r,
  onResizeHandleDown: s,
  onRotateHandleDown: p,
  onConnectHandleDown: g,
  onArrowEndpointDown: C
}) {
  return /* @__PURE__ */ K(Bt, { children: [
    /* @__PURE__ */ N("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((y) => {
      if (y.type === "draw") return null;
      if (y.type === "arrow") {
        const m = Et(y, a, c), $ = m.routing === "orthogonal" && m.pathPoints ? Ye(m.pathPoints) : m.routing === "curved" ? oe(0.5, m.start, m.control, m.end) : { x: (m.start.x + m.end.x) / 2, y: (m.start.y + m.end.y) / 2 }, X = n === y.id, h = pe(y), w = e.has(y.id), f = re(y).trim(), M = h || (w ? "관계 입력" : "");
        return !M && !X ? null : /* @__PURE__ */ N(te.Fragment, { children: /* @__PURE__ */ N("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: $.x - 90, top: $.y - 18, width: 180, height: 36 }, onDoubleClick: (z) => {
          z.stopPropagation(), u(y.id);
        }, children: (M || X) && /* @__PURE__ */ N(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": f ? `관계 설명: ${f}` : "관계 설명 입력",
            title: X ? void 0 : f ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${l ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: mt(y),
              fontFamily: gt(y),
              maxWidth: "100%",
              minWidth: X ? 120 / o.z : void 0,
              minHeight: X ? 28 / o.z : void 0,
              color: y.textColor
            },
            children: X ? v("text-center whitespace-nowrap") : /* @__PURE__ */ N("span", { dangerouslySetInnerHTML: { __html: M } }, "canvas-view")
          }
        ) }) }, y.id);
      }
      const d = e.has(y.id), b = _t(y);
      return /* @__PURE__ */ K(
        "div",
        {
          "data-canvas-shape-id": y.id,
          "data-canvas-shape-type": y.type,
          "data-canvas-selected": d ? "true" : void 0,
          "data-canvas-text-align": kt(y),
          "data-canvas-text-color": y.textColor,
          "data-canvas-font-size": mt(y),
          "data-canvas-font-family": y.fontFamily === "custom" ? y.customFontFamily ?? "custom" : y.fontFamily ?? "sans",
          "data-canvas-manual-size": y.manualSize ? "true" : void 0,
          "data-canvas-group-id": y.groupId,
          "data-canvas-list-kind": or(y),
          "data-canvas-x": y.x,
          "data-canvas-y": y.y,
          "data-canvas-width": y.w,
          "data-canvas-height": y.h,
          className: "absolute",
          style: { left: b.minX, top: b.minY, width: b.maxX - b.minX, height: b.maxY - b.minY, transform: y.rotation ? `rotate(${y.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (m) => {
            m.stopPropagation(), ir.has(y.type) && u(y.id);
          },
          children: [
            k(y),
            d && /* @__PURE__ */ K(Bt, { children: [
              /* @__PURE__ */ N("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${U.blue}` } }),
              e.size === 1 && /* @__PURE__ */ K(Bt, { children: [
                ["nw", "ne", "sw", "se"].map((m) => /* @__PURE__ */ N("div", { "data-canvas-resize-handle": m, onPointerDown: ($) => s($, y, m), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${m}-resize`, left: m.includes("w") ? -5 / o.z : void 0, right: m.includes("e") ? -5 / o.z : void 0, top: m.includes("n") ? -5 / o.z : void 0, bottom: m.includes("s") ? -5 / o.z : void 0 } }, m)),
                /* @__PURE__ */ N("div", { onPointerDown: (m) => p(m, y), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                cr.has(y.type) && ["n", "s", "w", "e"].map((m) => /* @__PURE__ */ N("div", { onPointerDown: ($) => g($, y), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...m === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : m === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : m === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${m}`))
              ] })
            ] })
          ]
        },
        y.id
      );
    }) }),
    e.size === 1 && c.filter((y) => y.type === "arrow" && e.has(y.id)).map((y) => {
      const d = Et(y, a, c), b = (m, $) => ({
        left: (m.x - o.x) * o.z - $ / 2,
        top: (m.y - o.y) * o.z - $ / 2
      });
      return /* @__PURE__ */ K(te.Fragment, { children: [
        d.routing === "orthogonal" && d.pathPoints && d.pathPoints.length > 2 ? d.pathPoints.slice(0, -1).map((m, $) => {
          var w;
          const X = (w = d.pathPoints) == null ? void 0 : w[$ + 1];
          if (!X) return null;
          const h = { x: (m.x + X.x) / 2, y: (m.y + X.y) / 2 };
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-segment-handle": $, onPointerDown: (f) => r(f, y, $), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...b(h, 12), cursor: m.x === X.x ? "ew-resize" : "ns-resize" } }, `segment-${$}`);
        }) : d.routing === "curved" && /* @__PURE__ */ N("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (m) => x(m, y), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (d.start.x + d.end.x) / 2 * o.z - o.x * o.z - 5, top: (d.start.y + d.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map((m) => {
          const $ = m === "start" ? d.start : d.end;
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-endpoint": m, onPointerDown: (X) => C(X, y, m), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...b($, 12), cursor: "grab" } }, m);
        })
      ] }, `arrow-handles-${y.id}`);
    }),
    i == null ? void 0 : i.map((y) => /* @__PURE__ */ K("div", { className: "absolute pointer-events-none z-40", style: { left: (y.x - o.x) * o.z, top: (y.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ N("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ N("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: y.color, stroke: U.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ N("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: y.color }, children: y.name })
    ] }, y.id))
  ] });
}
function Pe(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function lr(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), Pe(t) && e.push("diagram"), e;
}
function qr(t) {
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
const dr = "#3b82f6";
function Ht(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function xe(t) {
  return Math.round(Ht(t, 0, 255)).toString(16).padStart(2, "0");
}
function ur(t) {
  const e = t.trim().endsWith("%"), n = Number.parseFloat(t);
  return Number.isFinite(n) ? e ? n * 2.55 : n : 0;
}
function Jt(t) {
  var c, i;
  const e = t.trim().toLowerCase(), n = (c = e.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : c[1];
  if (n)
    return n.length === 3 || n.length === 4 ? `#${n.slice(0, 3).split("").map((l) => `${l}${l}`).join("")}` : `#${n.slice(0, 6)}`;
  const o = (i = e.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : i[1];
  if (o) {
    const l = o.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(ur);
    if (l.length === 3) return `#${l.map(xe).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? dr;
}
function tn(t) {
  const e = Jt(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, o = Number.parseInt(e.slice(2, 4), 16) / 255, a = Number.parseInt(e.slice(4, 6), 16) / 255, c = Math.max(n, o, a), i = Math.min(n, o, a), l = c - i;
  let v = 0;
  return l !== 0 && (c === n ? v = 60 * ((o - a) / l % 6) : c === o ? v = 60 * ((a - n) / l + 2) : v = 60 * ((n - o) / l + 4)), v < 0 && (v += 360), { hue: v, saturation: c === 0 ? 0 : l / c, value: c };
}
function en({ hue: t, saturation: e, value: n }) {
  const o = (t % 360 + 360) % 360, a = n * e, c = a * (1 - Math.abs(o / 60 % 2 - 1)), i = n - a;
  let l = 0, v = 0, k = 0;
  return o < 60 ? [l, v, k] = [a, c, 0] : o < 120 ? [l, v, k] = [c, a, 0] : o < 180 ? [l, v, k] = [0, a, c] : o < 240 ? [l, v, k] = [0, c, a] : o < 300 ? [l, v, k] = [c, 0, a] : [l, v, k] = [a, 0, c], `#${xe((l + i) * 255)}${xe((v + i) * 255)}${xe((k + i) * 255)}`;
}
function hr(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function xr({ value: t, onChange: e }) {
  const [n, o] = ot(() => tn(t)), a = Z(null), c = Z(null), i = Z(null);
  Yt(() => {
    const d = tn(t);
    o((b) => hr(b, d) ? b : d);
  }, [t]);
  const l = (d) => {
    o(d), e(en(d));
  }, v = (d) => {
    var h;
    const b = (h = a.current) == null ? void 0 : h.getBoundingClientRect();
    if (!b) return;
    const m = d.clientX - (b.left + b.width / 2), $ = d.clientY - (b.top + b.height / 2), X = Math.atan2($, m) * 180 / Math.PI + 90;
    l({ ...n, hue: (X + 360) % 360 });
  }, k = (d) => {
    var m;
    const b = (m = c.current) == null ? void 0 : m.getBoundingClientRect();
    b && l({
      ...n,
      saturation: Ht((d.clientX - b.left) / b.width, 0, 1),
      value: Ht(1 - (d.clientY - b.top) / b.height, 0, 1)
    });
  }, u = (d, b) => {
    var m, $;
    b.button !== 0 && b.pointerType !== "touch" || (b.preventDefault(), b.stopPropagation(), i.current = d, ($ = (m = b.currentTarget).setPointerCapture) == null || $.call(m, b.pointerId), d === "hue" ? v(b) : k(b));
  }, x = (d) => {
    i.current && (d.preventDefault(), i.current === "hue" ? v(d) : k(d));
  }, r = (d) => {
    var b, m;
    i.current = null;
    try {
      (m = (b = d.currentTarget).releasePointerCapture) == null || m.call(b, d.pointerId);
    } catch {
      return;
    }
  }, s = (n.hue - 90) * Math.PI / 180, p = 53, g = {
    left: 66 + Math.cos(s) * p,
    top: 66 + Math.sin(s) * p
  }, C = en({ hue: n.hue, saturation: 1, value: 1 }), y = (d) => l({ ...n, hue: (n.hue + d + 360) % 360 });
  return /* @__PURE__ */ K("div", { className: "canvas-color-wheel", "data-canvas-color-wheel": !0, children: [
    /* @__PURE__ */ K(
      "div",
      {
        ref: a,
        className: "canvas-color-wheel-hue",
        role: "slider",
        "aria-label": "색상 색상환",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(n.hue),
        tabIndex: 0,
        onPointerDown: (d) => u("hue", d),
        onPointerMove: x,
        onPointerUp: r,
        onKeyDown: (d) => {
          (d.key === "ArrowLeft" || d.key === "ArrowDown") && (d.preventDefault(), y(-1)), (d.key === "ArrowRight" || d.key === "ArrowUp") && (d.preventDefault(), y(1));
        },
        children: [
          /* @__PURE__ */ N("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ N("span", { className: "canvas-color-wheel-hue-marker", style: { left: g.left, top: g.top } })
        ]
      }
    ),
    /* @__PURE__ */ N(
      "div",
      {
        ref: c,
        className: "canvas-color-wheel-sv",
        role: "slider",
        "aria-label": "채도와 밝기",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(n.saturation * n.value * 100),
        tabIndex: 0,
        style: { backgroundColor: C },
        onPointerDown: (d) => u("sv", d),
        onPointerMove: x,
        onPointerUp: r,
        onKeyDown: (d) => {
          const b = d.shiftKey ? 0.1 : 0.02;
          d.key === "ArrowLeft" && (d.preventDefault(), l({ ...n, saturation: Ht(n.saturation - b, 0, 1) })), d.key === "ArrowRight" && (d.preventDefault(), l({ ...n, saturation: Ht(n.saturation + b, 0, 1) })), d.key === "ArrowDown" && (d.preventDefault(), l({ ...n, value: Ht(n.value - b, 0, 1) })), d.key === "ArrowUp" && (d.preventDefault(), l({ ...n, value: Ht(n.value + b, 0, 1) }));
        },
        children: /* @__PURE__ */ N("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${n.saturation * 100}%`, top: `${(1 - n.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ K("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ N("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ N("span", { children: Jt(t).toUpperCase() })
    ] })
  ] });
}
const fr = [2, 4, 6, 8];
function vr(t) {
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
      return Ln(t);
  }
}
function nn(t) {
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
      return Ln(t);
  }
}
function Ln(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function ke(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function on(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function pr({
  shape: t,
  selection: e,
  selectionActions: n,
  shapes: o,
  camera: a,
  canvasSize: c,
  isDarkMode: i,
  editing: l,
  showPalette: v,
  installedFontFamilies: k,
  setShowPalette: u,
  setActiveColor: x,
  patchSelected: r,
  applyFormat: s,
  applyList: p,
  applyCustomFontFamily: g
}) {
  var Ct, St;
  const C = i ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", y = e.length > 1, d = e.some((S) => !!S.groupId), b = t.type === "draw", m = b || on(t) && !ke(t) ? "stroke" : ke(t) ? "fill" : "text", [$, X] = ot(m), [h, w] = ot("");
  Gt(() => X(m), [m, t.id]);
  const f = $ === "text" ? jt(t) : $ === "stroke" ? t.strokeColor ?? (t.color ? rt[t.color].border : U.ink) : fe(t);
  Gt(() => w(Jt(f).toUpperCase()), [f]);
  const M = Jt(f), z = (S) => {
    r(b || $ === "stroke" ? { strokeColor: S } : $ === "text" ? { textColor: S } : { fillColor: S });
  }, P = (S) => {
    x(S), r(b || $ === "stroke" ? { color: S, strokeColor: void 0 } : $ === "text" ? { textColor: rt[S].text } : { color: S, fillColor: void 0 }), u(!1);
  }, I = Z(null), [L, F] = ot({ width: 380, height: 260 });
  Gt(() => {
    const S = I.current;
    if (!S) return;
    const _ = () => {
      const vt = Math.max(1, Math.ceil(S.getBoundingClientRect().width)), Xt = Math.max(1, Math.ceil(S.getBoundingClientRect().height));
      F((qt) => qt.width === vt && qt.height === Xt ? qt : { width: vt, height: Xt });
    };
    if (_(), typeof ResizeObserver > "u") return;
    const R = new ResizeObserver(_);
    return R.observe(S), () => R.disconnect();
  }, [l, k.length, i, t, v]);
  const D = L.width, E = L.height, Y = e.reduce((S, _) => {
    const R = it(_);
    return {
      minX: Math.min(S.minX, R.minX),
      minY: Math.min(S.minY, R.minY),
      maxX: Math.max(S.maxX, R.maxX),
      maxY: Math.max(S.maxY, R.maxY)
    };
  }, it(t)), T = (Y.minX - a.x) * a.z, A = (Y.minY - a.y) * a.z, O = (Y.maxX - a.x) * a.z, G = (Y.maxY - a.y) * a.z, H = Math.max(8, c.width - D - 8), et = Math.max(8, c.height - E - 8), Q = (S, _) => ({ left: Math.min(Math.max(8, S), H), top: Math.min(Math.max(8, _), et) }), q = [
    Q((T + O) / 2 - D / 2, A - E - 12),
    Q((T + O) / 2 - D / 2, G + 12),
    Q((c.width - D) / 2, 12),
    Q(T - D - 12, A + (G - A - E) / 2),
    Q(O + 12, A + (G - A - E) / 2)
  ], ft = o.map((S) => {
    const _ = it(S);
    return { left: (_.minX - a.x) * a.z, top: (_.minY - a.y) * a.z, right: (_.maxX - a.x) * a.z, bottom: (_.maxY - a.y) * a.z };
  });
  if (t.type === "arrow") {
    const S = Et(t, new Map(o.map((Xt) => [Xt.id, Xt])), o), _ = S.routing === "orthogonal" && S.pathPoints ? Ye(S.pathPoints) : { x: (S.start.x + S.end.x) / 2, y: (S.start.y + S.end.y) / 2 }, R = 180 * a.z, vt = 36 * a.z;
    ft.push({
      left: (_.x - a.x) * a.z - R / 2,
      top: (_.y - a.y) * a.z - vt / 2,
      right: (_.x - a.x) * a.z + R / 2,
      bottom: (_.y - a.y) * a.z + vt / 2
    });
  }
  const lt = q[0], yt = (S, _) => {
    const R = Math.max(0, Math.min(S.left + D, _.right) - Math.max(S.left, _.left)), vt = Math.max(0, Math.min(S.top + E, _.bottom) - Math.max(S.top, _.top));
    return R * vt;
  }, V = ((Ct = q.map((S) => ({
    candidate: S,
    overlap: ft.reduce((_, R) => _ + yt(S, R), 0),
    distance: Math.hypot(S.left - lt.left, S.top - lt.top)
  })).sort((S, _) => S.overlap - _.overlap || S.distance - _.distance)[0]) == null ? void 0 : Ct.candidate) ?? lt, J = mt(t), ct = e.every(vr), Mt = new Set(e.map(nn)).size === 1 ? nn(t) : void 0, dt = lr(t), st = t.type === "arrow" ? "arrow" : dt[0] ?? "color", [nt, bt] = ot(st);
  Gt(() => {
    dt.includes(nt) || bt(st);
  }, [st, dt, nt]);
  const Pt = t.type === "arrow" && !!((St = t.orthogonalWaypoints) != null && St.length), zt = t.type === "arrow" ? t.arrowStart ?? "none" : "none", ut = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", W = (S, _, R, vt, Xt = vt) => /* @__PURE__ */ N("button", { type: "button", title: vt, "aria-label": Xt, onClick: R, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${_ ? "bg-blue-600 text-white" : C}`, children: S }), B = (S) => /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: S }), j = (S, _, R, vt, Xt = !1) => /* @__PURE__ */ N(
    "button",
    {
      type: "button",
      title: _,
      "aria-label": _,
      disabled: !vt,
      onClick: R,
      className: `w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default ${Xt ? "text-rose-500 hover:bg-rose-500/10" : C}`,
      children: /* @__PURE__ */ N(S, { className: "w-4 h-4" })
    }
  ), tt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ K("div", { ref: I, "data-canvas-inspector": b ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${i ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: V.left, top: V.top }, onPointerDown: (S) => {
    S.stopPropagation();
    const _ = S.target instanceof Element ? S.target : null;
    _ != null && _.closest("input, select, textarea") || S.preventDefault();
  }, onClick: (S) => S.stopPropagation(), children: [
    y ? /* @__PURE__ */ K("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      e.length,
      "개 선택됨"
    ] }) : /* @__PURE__ */ N("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: dt.map((S) => /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": nt === S, onClick: () => bt(S), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${nt === S ? "bg-blue-600 text-white" : C}`, children: tt[S] }, S)) }),
    /* @__PURE__ */ K("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: y || nt === "color" || b ? void 0 : "none" }, children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: b ? "그리기" : "색상" }),
      /* @__PURE__ */ N("button", { type: "button", title: b ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": b ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => u((S) => !S), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${i ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ N("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ N("span", { className: "canvas-color-wheel-trigger-dot", style: { background: M } }) }) }),
      v && /* @__PURE__ */ K("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${i ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !b && /* @__PURE__ */ K("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          ke(t) && /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": $ === "fill", onClick: () => X("fill"), className: $ === "fill" ? "is-active" : "", children: "배경" }),
          on(t) && /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": $ === "stroke", onClick: () => X("stroke"), className: $ === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": $ === "text", onClick: () => X("text"), className: $ === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ N("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: to.map((S) => /* @__PURE__ */ N("button", { type: "button", title: rt[S].label, "aria-label": `색 ${rt[S].label}`, onClick: () => P(S), className: "canvas-color-preset", style: { background: rt[S].bg, borderColor: rt[S].border, outline: t.color === S && !t.fillColor && !t.strokeColor ? `2px solid ${U.blue}` : void 0, outlineOffset: 1 } }, S)) }),
        /* @__PURE__ */ N(xr, { value: f, onChange: z }),
        /* @__PURE__ */ K("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ N("span", { children: "#" }),
          /* @__PURE__ */ N(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: h.replace(/^#/, ""),
              onChange: (S) => {
                const _ = S.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                w(`#${_}`.toUpperCase()), _.length === 6 && z(`#${_}`);
              },
              onBlur: () => w(Jt(f).toUpperCase()),
              onPointerDown: (S) => S.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !y && nt !== "color" && !b && /* @__PURE__ */ K(Bt, { children: [
      /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ K("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: jt(t), color: U.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ N("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ N("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? jt(t), onChange: (S) => r({ textColor: S.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ K("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${i ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => r({ fontSize: Math.max(8, J - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${C}`, children: /* @__PURE__ */ N(ro, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ N("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: J }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => r({ fontSize: Math.min(96, J + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${C}`, children: /* @__PURE__ */ N(ao, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ K("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${i ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ N("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (S) => {
            const _ = nr(S.target.value);
            r(_ === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: _, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${i ? "text-slate-200" : "text-slate-700"}`, children: Go.map((S) => /* @__PURE__ */ N("option", { value: S, className: i ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: It[S].label }, S)) }),
          /* @__PURE__ */ N(io, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ K(Bt, { children: [
          /* @__PURE__ */ N("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (S) => g(S.target.value), onChange: (S) => S.currentTarget.value && g(S.currentTarget.value), onKeyDown: (S) => {
            S.key === "Enter" && (S.preventDefault(), g(S.currentTarget.value));
          }, onDoubleClick: (S) => S.stopPropagation(), onPointerDown: (S) => S.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${i ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ N("datalist", { id: `canvas-font-families-${t.id}`, children: k.map((S) => /* @__PURE__ */ N("option", { value: S }, S)) })
        ] })
      ] }),
      /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${i ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", co, "왼쪽 정렬"], ["center", so, "가운데 정렬"], ["right", lo, "오른쪽 정렬"]].map(([S, _, R]) => /* @__PURE__ */ N("button", { type: "button", "aria-label": R, title: R, onClick: () => r({ textAlign: S }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${kt(t) === S ? "bg-blue-600 text-white shadow-sm" : C}`, children: /* @__PURE__ */ N(_, { className: "w-4 h-4" }) }, S)) }),
        l && /* @__PURE__ */ K(Bt, { children: [
          /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", uo, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", ho, "번호 목록"]].map(([S, _, R]) => /* @__PURE__ */ N("button", { type: "button", onClick: () => p(S), "aria-label": R, title: R, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${C}`, children: _ ? /* @__PURE__ */ N(_, { className: "w-4 h-4" }) : /* @__PURE__ */ N("span", { className: "text-base leading-none", children: "–" }) }, S)) }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: xo, label: "굵게" }, { cmd: "italic", Icon: fo, label: "기울임" }, { cmd: "underline", Icon: vo, label: "밑줄" }].map(({ cmd: S, Icon: _, label: R }) => /* @__PURE__ */ N("button", { type: "button", onClick: () => s(S), "aria-label": R, title: R, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${C}`, children: /* @__PURE__ */ N(_, { className: "w-4 h-4" }) }, S)) })
        ] })
      ] }),
      (nt === "arrange" && t.type === "card" || nt === "arrow" && t.type === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${i ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ K(Bt, { children: [
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${i ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ N("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (S) => S.stopPropagation(), onChange: (S) => r({ category: S.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${i ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            B("경로"),
            W("직선", (t.routing ?? "straight") === "straight", () => r({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            W("직각", t.routing === "orthogonal", () => r({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            W("곡선", (t.routing ?? "") === "curved", () => r({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            Pt && W("자동", !1, () => r({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            B("선"),
            W("—", (t.strokeStyle ?? "solid") === "solid", () => r({ strokeStyle: "solid" }), "실선"),
            W("- -", t.strokeStyle === "dashed", () => r({ strokeStyle: "dashed" }), "파선"),
            W("···", t.strokeStyle === "dotted", () => r({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            B("시작"),
            W(zt === "none" ? "○" : zt === "dot" ? "●" : "◀", zt !== "none", () => r({ arrowStart: zt === "none" ? "arrow" : zt === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${zt === "none" ? "없음" : zt === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            B("끝"),
            W(ut === "none" ? "○" : ut === "dot" ? "●" : "▶", ut !== "none", () => r({ arrowEnd: ut === "arrow" ? "dot" : ut === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${ut === "none" ? "없음" : ut === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      nt === "diagram" && /* @__PURE__ */ N("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${i ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    ct && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-none ${i ? "border-slate-700" : "border-slate-100"}`, children: [
      B("굵기"),
      fr.map((S) => /* @__PURE__ */ N(te.Fragment, { children: W(String(S), Mt === S, () => r({ strokeWidth: S }), `굵기 ${S}`) }, S))
    ] }),
    /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${i ? "border-slate-700" : "border-slate-100"}`, children: [
      B("선택"),
      j(po, "그룹 (Ctrl+G)", n.group, y),
      j(mo, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, d),
      j(go, "복제", n.duplicateSelected, !0),
      j(yo, "삭제 (Delete)", n.deleteSelected, !0, !0)
    ] })
  ] });
}
function mr({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: o,
  commitEditorHtml: a,
  onEditorKeyDown: c,
  setShapes: i,
  onDirty: l,
  renderDiagram: v
}) {
  const k = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", u = (r, s) => /* @__PURE__ */ N(
    "div",
    {
      ref: o,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": "텍스트 편집",
      "data-canvas-editor": !0,
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onInput: a,
      onBlur: a,
      onDoubleClick: (p) => p.stopPropagation(),
      onKeyDown: c,
      className: `${k} ${r}`,
      style: s
    },
    "canvas-editor"
  );
  return { renderEditor: u, renderShapeBody: (r) => {
    const s = rt[r.color ?? "blue"], p = e === r.id, g = pe(r);
    if (r.type === "frame") {
      const X = r.strokeWidth ?? 2;
      return /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-stroke-width": X,
          className: "w-full h-full rounded",
          style: { border: `${X / t.z}px solid ${n ? U.slate600 : U.slate400}` },
          children: /* @__PURE__ */ N(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? U.slate400 : U.muted
              },
              children: p ? u("", { fontSize: 13 / t.z }) : re(r) || "프레임"
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
          style: { background: fe(r), borderTop: `6px solid ${s.border}`, color: s.text },
          children: p ? u("font-medium", { color: jt(r), fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }) : g ? /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: jt(r), fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }, dangerouslySetInnerHTML: { __html: g } }, "canvas-view") : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: jt(r), fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (r.type === "card") {
      const X = r.cardStyle === "glass";
      return Pe(r) && v && !p ? /* @__PURE__ */ N("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: v(r) }) : /* @__PURE__ */ K(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: X ? U.glassFill : r.fillColor ?? U.slateCard,
            backdropFilter: X ? "blur(12px)" : void 0,
            WebkitBackdropFilter: X ? "blur(12px)" : void 0,
            border: `1px solid ${X ? U.glassBorder : U.darkBorder}`,
            boxShadow: X ? U.glassShadow : U.cardShadow
          },
          children: [
            /* @__PURE__ */ K(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (h) => h.stopPropagation(),
                onDoubleClick: (h) => h.stopPropagation(),
                onBlur: (h) => {
                  const f = (h.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  i((M) => M.map((z) => z.id === r.id ? { ...z, category: f } : z)), l();
                },
                onKeyDown: (h) => {
                  h.key === "Enter" && (h.preventDefault(), h.currentTarget.blur());
                },
                children: [
                  "[ ",
                  r.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            p ? u("flex-1 font-medium", { color: r.textColor ?? U.white, fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: r.textColor ?? U.white, fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }, dangerouslySetInnerHTML: { __html: g } }, "canvas-view"),
            /* @__PURE__ */ K("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              r.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (r.type === "text") {
      const X = n ? "text-slate-100" : "text-slate-900", h = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${X}`,
        style: { color: r.textColor, fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }
      };
      return p ? u(`font-medium ${X}`, h.style) : g ? /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-text-view": !0,
          ...h,
          dangerouslySetInnerHTML: { __html: g }
        },
        "canvas-view"
      ) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, ...h, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (r.type === "image") {
      const X = Ce(r.src);
      return X ? /* @__PURE__ */ N(
        "img",
        {
          src: X,
          alt: r.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const C = fe(r), y = bn(r), d = jt(r);
    if (r.type === "triangle" || r.type === "diamond" || r.type === "hexagon" || r.type === "star") {
      const X = r.strokeWidth ?? 2;
      return /* @__PURE__ */ K("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${r.w} ${r.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ N("polygon", { "data-canvas-stroke-width": X, points: kn(r.type, r.w, r.h), fill: C, stroke: y, strokeWidth: X / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ N("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: d }, children: p ? u("font-medium", { color: d, fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }, dangerouslySetInnerHTML: { __html: g } }, "canvas-view") })
      ] });
    }
    const m = Ce(r.src), $ = r.type === "rect" || r.type === "ellipse" ? r.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ N(
      "div",
      {
        "data-canvas-stroke-width": $,
        className: `w-full h-full flex items-center justify-center p-3 ${r.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: C, border: `${$ / t.z}px solid ${y}`, color: d },
        children: p ? u("font-medium", { color: d, fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }) : /* @__PURE__ */ K("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }, children: [
          /* @__PURE__ */ N("div", { dangerouslySetInnerHTML: { __html: g } }),
          m && /* @__PURE__ */ N(
            "a",
            {
              href: m,
              target: "_blank",
              rel: "noreferrer",
              onPointerDown: (X) => X.stopPropagation(),
              className: "block mt-1 text-[11px] underline opacity-70",
              children: "파일 열기"
            }
          )
        ] }, "canvas-view")
      }
    );
  } };
}
function gr({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: o,
  selected: a,
  editingId: c,
  boardIdentity: i
}) {
  const [l, v] = ot({ width: 0, height: 0 });
  Yt(() => {
    const p = t.current;
    if (!p) return;
    let g = -1, C = -1;
    const y = (b = p.clientWidth, m = p.clientHeight) => {
      b === g && m === C || (g = b, C = m, v({ width: b, height: m }));
    };
    if (y(), typeof ResizeObserver < "u") {
      const b = new ResizeObserver((m) => {
        var X;
        const $ = (X = m[0]) == null ? void 0 : X.contentRect;
        y(($ == null ? void 0 : $.width) ?? p.clientWidth, ($ == null ? void 0 : $.height) ?? p.clientHeight);
      });
      return b.observe(p), () => b.disconnect();
    }
    const d = () => y();
    return window.addEventListener("resize", d), () => window.removeEventListener("resize", d);
  }, [i, t]);
  const k = Lt(() => new Map(n.map((p) => [p.id, p])), [n]), u = Lt(
    () => [...n].sort((p, g) => (p.type === "frame" ? -1 : 0) - (g.type === "frame" ? -1 : 0)),
    [n]
  ), x = Lt(() => {
    if (!t.current || l.width <= 0 || l.height <= 0) return null;
    const p = 200 / o.z;
    return {
      minX: o.x - p,
      minY: o.y - p,
      maxX: o.x + l.width / o.z + p,
      maxY: o.y + l.height / o.z + p
    };
  }, [o, t, l]), r = xt((p) => {
    if (!x) return !1;
    if (p.id === c || a.has(p.id)) return !0;
    if (p.type === "arrow") {
      const C = Et(p, k, e.current), d = (C.routing === "orthogonal" ? C.pathPoints : null) ?? [C.start, C.end], b = Math.min(...d.map((h) => h.x)), m = Math.max(...d.map((h) => h.x)), $ = Math.min(...d.map((h) => h.y)), X = Math.max(...d.map((h) => h.y));
      return m >= x.minX && b <= x.maxX && X >= x.minY && $ <= x.maxY;
    }
    const g = it(p);
    return g.maxX >= x.minX && g.minX <= x.maxX && g.maxY >= x.minY && g.minY <= x.maxY;
  }, [c, a, k, e, x]), s = Lt(
    () => u.filter(r),
    [r, u]
  );
  return { shapeById: k, visiblePaintOrder: s };
}
function yr({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: o,
  onDirty: a,
  patchSelected: c
}) {
  const i = xt(() => {
    const s = t.current;
    if (!s || !e) return;
    let p;
    try {
      p = Se(s.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const g = s.scrollHeight;
    n((C) => C.map((y) => {
      if (y.id !== e) return y;
      const d = Pe(y) ? { ...y, text: re({ ...y, html: p, text: void 0 }), html: void 0 } : { ...y, html: p, text: void 0 };
      if (y.type === "text")
        return y.manualSize ? d : { ...d, ...ar(s, y) };
      if (y.type === "arrow") return d;
      const b = y.type === "note" ? 32 : y.type === "card" ? 96 : (
        // category header + type footer
        (y.type === "frame", 24)
      ), m = Math.max(y.h, g + b);
      return { ...d, h: m };
    })), a();
  }, [e, a]), l = (s) => {
    var p;
    (p = t.current) == null || p.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(s), i();
  }, v = () => {
    var C;
    const s = (C = window.getSelection()) == null ? void 0 : C.anchorNode, p = s instanceof Element ? s : s == null ? void 0 : s.parentElement, g = p == null ? void 0 : p.closest("ul, ol");
    return g instanceof HTMLElement ? g : null;
  }, k = (s, p, g) => {
    const C = document.createElement(p);
    for (; s.firstChild; ) C.append(s.firstChild);
    return s.replaceWith(C), C;
  }, u = (s) => {
    const p = t.current;
    if (!p) return;
    p.focus();
    const g = v();
    if (s === "number")
      if ((g == null ? void 0 : g.tagName) === "OL")
        g.removeAttribute("data-list-style");
      else if ((g == null ? void 0 : g.tagName) === "UL")
        k(g, "ol");
      else {
        document.execCommand("insertOrderedList");
        const C = v();
        C == null || C.removeAttribute("data-list-style");
      }
    else if ((g == null ? void 0 : g.tagName) === "UL") {
      const C = g.dataset.listStyle;
      s === C ? document.execCommand("insertUnorderedList") : g.dataset.listStyle = s;
    } else {
      (g == null ? void 0 : g.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const C = v();
      C && (C.dataset.listStyle = s);
    }
    i();
  };
  return { commitEditorHtml: i, applyFormat: l, applyList: u, onEditorKeyDown: (s) => {
    if (s.key === "Tab") {
      s.preventDefault(), document.execCommand(s.shiftKey ? "outdent" : "indent"), i();
      return;
    }
    if (s.key === " ") {
      const p = window.getSelection();
      if (p && p.isCollapsed && p.anchorNode) {
        const g = p.anchorNode, C = g.textContent || "", y = p.anchorOffset, d = C.slice(0, y).trim();
        if (!v()) {
          if (d === "-" || d === "–") {
            s.preventDefault(), g.textContent = C.slice(y), u("dash");
            return;
          }
          if (d === "*") {
            s.preventDefault(), g.textContent = C.slice(y), u("bullet");
            return;
          }
          if (d === "1.") {
            s.preventDefault(), g.textContent = C.slice(y), u("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (s) => {
    const p = Pn(s);
    if (!p) {
      c({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    c({
      fontFamily: "custom",
      customFontFamily: p
    });
  } };
}
function wr({
  boardIdentity: t,
  tool: e,
  controlledShapes: n,
  onShapesChange: o,
  onDirty: a
}) {
  const c = Z(null), i = Z(null), [l, v] = ot([]), k = n !== void 0 && o !== void 0, u = Z(/* @__PURE__ */ new WeakMap()), x = Lt(() => {
    const W = u.current;
    return (k ? n ?? [] : l).map((B) => {
      let j = W.get(B);
      return j === void 0 && (j = zn(B), W.set(B, j)), j;
    }).filter((B) => B !== null);
  }, [k, n, l]), r = Z(o);
  r.current = o;
  const s = xt((W) => {
    const B = r.current;
    if (!B) {
      v(W);
      return;
    }
    B(typeof W == "function" ? W : () => W);
  }, []), [p, g] = ot({ x: -400, y: -300, z: 1 }), [C, y] = ot(/* @__PURE__ */ new Set()), [d, b] = ot(null), [m, $] = ot({ kind: "none" }), [X, h] = ot(!1), [w, f] = ot([]), [M, z] = ot(""), [P, I] = ot(!1), [L, F] = ot(null), [D, E] = ot("blue"), [Y, T] = ot(he), A = Z(D);
  A.current = D;
  const O = Z([]), G = Z([]), H = Z(null), et = Z(/* @__PURE__ */ new Map()), Q = Z(x), q = Z(p), ft = Z(e), lt = Z(C), yt = Z(d);
  Q.current = x, q.current = p, ft.current = e, lt.current = C, yt.current = d;
  const V = Z({ kind: "none" }), J = xt((W) => {
    V.current = W, $(W);
  }, []), ct = xt((W) => {
    lt.current = W, y(W);
  }, []);
  Gt(() => {
    var B;
    const W = /* @__PURE__ */ new Set();
    lt.current = W, yt.current = null, et.current.clear(), O.current = [], G.current = [], H.current = null, J({ kind: "none" }), y(W), b(null), h(!1), f([]), F(null), z(""), (B = c.current) == null || B.focus();
  }, [J, t]), Yt(() => {
    let W = !1;
    const B = () => {
      const tt = Qo();
      W || T(tt);
    };
    if (B(), typeof document > "u" || !("fonts" in document)) return;
    const j = () => B();
    return document.fonts.addEventListener("loadingdone", j), () => {
      W = !0, document.fonts.removeEventListener("loadingdone", j);
    };
  }, [t]);
  const Mt = (d ? x.find((W) => W.id === d) : void 0) !== void 0;
  Gt(() => {
    if (!d || !Mt) return;
    const W = () => {
      const j = i.current, tt = Q.current.find((S) => S.id === d);
      if (!j || !tt || (j.dataset.seeded !== d && (j.innerHTML = pe(tt), j.dataset.seeded = d), document.activeElement === j)) return;
      j.focus();
      const Ct = document.createRange();
      Ct.selectNodeContents(j), Ct.collapse(!1);
      const St = window.getSelection();
      St == null || St.removeAllRanges(), St == null || St.addRange(Ct);
    };
    W();
    const B = requestAnimationFrame(W);
    return () => cancelAnimationFrame(B);
  }, [d, Mt]);
  const dt = xt((W) => {
    s((B) => {
      const j = typeof W == "function" ? W(B) : W;
      return O.current.push(B), O.current.length > 100 && O.current.shift(), G.current = [], j;
    }), a();
  }, [a]), st = xt((W) => W.size === 0 ? !1 : (dt((B) => B.filter((j) => W.has(j.id) ? !1 : j.type !== "arrow" ? !0 : !(j.fromId && W.has(j.fromId)) && !(j.toId && W.has(j.toId)))), ct(/* @__PURE__ */ new Set()), z(`${W.size}개 삭제됨`), !0), [dt, ct]), nt = xt(() => {
    H.current = Q.current;
  }, []), bt = xt(() => {
    const W = H.current;
    H.current = null, !(!W || W === Q.current) && (O.current.push(W), O.current.length > 100 && O.current.shift(), G.current = [], a());
  }, [a]), Pt = xt((W, B) => {
    var Ct;
    const j = (Ct = c.current) == null ? void 0 : Ct.getBoundingClientRect(), tt = q.current;
    return j ? { x: (W - j.left) / tt.z + tt.x, y: (B - j.top) / tt.z + tt.y } : { x: 0, y: 0 };
  }, []), zt = xt(() => {
    var j;
    const W = (j = c.current) == null ? void 0 : j.getBoundingClientRect(), B = q.current;
    return W ? { x: B.x + W.width / 2 / B.z, y: B.y + W.height / 2 / B.z } : { x: 0, y: 0 };
  }, []), ut = xt((W) => {
    const B = new Set(Q.current.filter((tt) => W.has(tt.id) && tt.groupId).map((tt) => tt.groupId));
    if (B.size === 0) return W;
    const j = new Set(W);
    for (const tt of Q.current) tt.groupId && B.has(tt.groupId) && j.add(tt.id);
    return j;
  }, []);
  return {
    containerRef: c,
    editorRef: i,
    localShapes: l,
    setLocalShapes: v,
    controlled: k,
    shapes: x,
    setShapes: s,
    camera: p,
    setCamera: g,
    cameraRef: q,
    selected: C,
    setSelected: y,
    selectedRef: lt,
    editingId: d,
    setEditingId: b,
    editingIdRef: yt,
    interaction: m,
    interactionRef: V,
    applyInteraction: J,
    isSpaceDown: X,
    setIsSpaceDown: h,
    guides: w,
    setGuides: f,
    announcement: M,
    setAnnouncement: z,
    showInspectorPalette: P,
    setShowInspectorPalette: I,
    eraserPos: L,
    setEraserPos: F,
    activeColor: D,
    setActiveColor: E,
    activeColorRef: A,
    installedFontFamilies: Y,
    pointers: et,
    past: O,
    future: G,
    selectNow: ct,
    commit: dt,
    deleteSelection: st,
    beginHistory: nt,
    endHistory: bt,
    toPage: Pt,
    viewportCentre: zt,
    expandToGroups: ut,
    toolRef: ft,
    shapesRef: Q
  };
}
function br({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: o,
  maxZoom: a,
  shapes: c,
  selected: i,
  editingId: l,
  textualTypes: v,
  onZoomChange: k,
  onSelectionChange: u,
  onLocalCursor: x,
  toPage: r
}) {
  Yt(() => {
    k == null || k(e.z);
  }, [e.z, k]), Yt(() => {
    const b = t.current;
    if (!b) return;
    const m = ($) => {
      if ($.preventDefault(), $.ctrlKey || $.metaKey) {
        const X = b.getBoundingClientRect();
        n((h) => {
          const w = Math.min(a, Math.max(o, h.z * Math.exp(-$.deltaY * 0.01))), f = $.clientX - X.left, M = $.clientY - X.top;
          return { x: h.x + f / h.z - f / w, y: h.y + M / h.z - M / w, z: w };
        });
      } else
        n((X) => ({ ...X, x: X.x + $.deltaX / X.z, y: X.y + $.deltaY / X.z }));
    };
    return b.addEventListener("wheel", m, { passive: !1 }), () => b.removeEventListener("wheel", m);
  }, [t, a, o, n]);
  const s = Lt(() => {
    const b = c.filter((m) => i.has(m.id));
    return {
      count: b.length,
      canGroup: b.length > 1,
      canUngroup: b.some((m) => !!m.groupId),
      isTextual: b.length === 1 && v.includes(b[0].type),
      selectedIds: b.map((m) => m.id)
    };
  }, [i, c, v]);
  Yt(() => {
    u == null || u(s);
  }, [u, s]);
  const p = Lt(() => {
    if (l) {
      const m = c.find(($) => $.id === l);
      return m && m.type !== "image" && m.type !== "draw" ? [m] : [];
    }
    const b = c.filter((m) => i.has(m.id));
    return b.length === 1 && b[0].type === "image" ? [] : b;
  }, [l, i, c]), g = Lt(() => p.length === 0 ? null : p.find((b) => b.type !== "image") ?? null, [p]), C = Z(0);
  return { selectionInfo: s, inspectorSelection: p, inspectorShape: g, onContainerPointerMove: x ? (b) => {
    const m = performance.now();
    m - C.current < 60 || (C.current = m, x(r(b.clientX, b.clientY)));
  } : void 0, onContainerPointerLeave: x ? () => x(null) : void 0 };
}
const Vt = 24;
function kr({
  containerRef: t,
  shapesRef: e,
  selectedRef: n,
  commit: o,
  deleteSelection: a,
  selectNow: c,
  setAnnouncement: i,
  createId: l
}) {
  return Lt(() => ({
    deleteSelected: () => {
      a(n.current);
    },
    duplicateSelected: () => {
      var x;
      const v = n.current;
      if (v.size === 0) return;
      const k = [], u = /* @__PURE__ */ new Map();
      for (const r of e.current) {
        if (!v.has(r.id)) continue;
        let s = r.groupId;
        s && (u.has(s) || u.set(s, l("g")), s = u.get(s)), k.push({
          ...r,
          id: l(),
          x: r.x + Vt,
          y: r.y + Vt,
          groupId: s,
          points: (x = r.points) == null ? void 0 : x.map(([p, g]) => [p + Vt, g + Vt]),
          orthogonalWaypoints: r.type === "arrow" && r.orthogonalWaypoints ? r.orthogonalWaypoints.map((p) => ({ x: p.x + Vt, y: p.y + Vt })) : void 0
        });
      }
      o((r) => [...r, ...k]), c(new Set(k.map((r) => r.id))), i(`${k.length}개 복제됨`);
    },
    group: () => {
      var u;
      const v = n.current;
      if (v.size < 2) return;
      const k = l("g");
      o((x) => x.map((r) => v.has(r.id) ? { ...r, groupId: k } : r)), i(`${v.size}개 그룹화됨`), (u = t.current) == null || u.focus();
    },
    ungroup: () => {
      var k;
      const v = n.current;
      v.size !== 0 && (o((u) => u.map((x) => v.has(x.id) ? { ...x, groupId: void 0 } : x)), i("그룹 해제됨"), (k = t.current) == null || k.focus());
    }
  }), [o, t, l, a, c, n, i, e]);
}
function $r(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, o = 1 / 0, a = -1 / 0, c = -1 / 0;
  for (const x of t) {
    const r = it(x);
    n = Math.min(n, r.minX), o = Math.min(o, r.minY), a = Math.max(a, r.maxX), c = Math.max(c, r.maxY);
  }
  const i = 40, l = a - n + i * 2, v = c - o + i * 2;
  if (!Number.isFinite(l) || !Number.isFinite(v) || l > Rt.maxExportDimension || v > Rt.maxExportDimension || l * v > Rt.maxExportPixels) return null;
  const k = (x, r, s, p, g) => {
    const C = x.fontSize ?? s, y = gt(x), d = Mn(pe(x));
    if (d.length === 0) return "";
    const b = _t(x), m = x.textAlign === "right" ? "end" : x.textAlign === "center" ? "middle" : x.textAlign === "left" ? "start" : g, $ = m === "end" ? b.maxX - 12 : m === "middle" ? (b.minX + b.maxX) / 2 : b.minX + 12, X = b.minY + C + 12;
    return d.map((h, w) => {
      const f = h.map((M) => `<tspan style="${[
        M.bold ? "font-weight:700" : `font-weight:${p}`,
        M.italic ? "font-style:italic" : "",
        M.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Dt(M.text)}</tspan>`).join("");
      return `<text x="${$}" y="${X + w * C * 1.4}" font-family="${Dt(y)}" font-size="${C}" fill="${r}" text-anchor="${m}">${f}</text>`;
    }).join("");
  }, u = t.map((x) => {
    const r = rt[x.color ?? "blue"], s = _t(x), p = Nt(x), g = x.rotation ? ` transform="rotate(${x.rotation * 180 / Math.PI} ${p.x} ${p.y})"` : "", C = x.color ? rt[x.color].border : U.ink;
    if (x.type === "draw" && x.points) {
      const h = x.drawMode ?? "pen", w = x.strokeWidth ?? 3, f = x.points.length >= 2 ? Bo(x.points, w, h) : "";
      if (f)
        return `<path d="${f}" fill="${C}"${h === "highlighter" ? ' fill-opacity="0.35"' : ""} fill-rule="evenodd" stroke="none"/>`;
      const M = h === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${$n(x.points)}" fill="none" stroke="${C}" stroke-width="${w}"${M} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (x.type === "arrow") {
      const h = Et(x, new Map(t.map((O) => [O.id, O])), t), w = x.strokeWidth ?? 2.5, f = Math.max(10, 8 + w * 2), M = Math.max(4, 2 + w), z = h.routing === "orthogonal" && h.pathPoints ? h.pathPoints : null, P = z && z.length > 1, I = P ? $e(z) : h.routing === "curved" ? `M ${h.start.x} ${h.start.y} Q ${h.control.x} ${h.control.y} ${h.end.x} ${h.end.y}` : `M ${h.start.x} ${h.start.y} L ${h.end.x} ${h.end.y}`, L = P ? vn(z) : h.routing === "curved" ? (() => {
        const O = oe(0.94, h.start, h.control, h.end);
        return Math.atan2(h.end.y - O.y, h.end.x - O.x);
      })() : Math.atan2(h.end.y - h.start.y, h.end.x - h.start.x), F = P ? ee(z[0], z[1]) : h.routing === "orthogonal" && h.start.side ? h.start.side === "e" ? 0 : h.start.side === "w" ? Math.PI : h.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : ee(h.start, h.end), D = x.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : x.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", E = (O, G, H, et) => {
        if (O === "dot") return `<circle cx="${G}" cy="${H}" r="${M}" fill="${C}"/>`;
        if (O === "none") return "";
        const Q = `${G - f * Math.cos(et - 0.4)},${H - f * Math.sin(et - 0.4)}`, q = `${G - f * Math.cos(et + 0.4)},${H - f * Math.sin(et + 0.4)}`;
        return `<polygon points="${G},${H} ${Q} ${q}" fill="${C}"/>`;
      }, Y = h.routing === "orthogonal" && h.pathPoints ? Ye(h.pathPoints) : h.bend === 0 ? { x: (h.start.x + h.end.x) / 2, y: (h.start.y + h.end.y) / 2 } : oe(0.5, h.start, h.control, h.end), T = re(x), A = T ? `<text x="${Y.x}" y="${Y.y - 6}" text-anchor="middle" font-family="${Dt(gt(x))}" font-size="${x.fontSize ?? 12}" fill="${C}">${Dt(T)}</text>` : "";
      return `<path d="${I}" fill="none" stroke="${C}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"${D}/>` + E(x.arrowEnd ?? "arrow", h.end.x, h.end.y, L) + E(x.arrowStart ?? "none", h.start.x, h.start.y, F + Math.PI) + A;
    }
    if (x.type === "image" && x.src) {
      const h = Ce(x.src);
      return h ? `<image href="${Dt(h)}" x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}"${g}/>` : "";
    }
    if (x.type === "frame")
      return `<g${g}><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" fill="none" stroke="${U.slate400}" stroke-width="${x.strokeWidth ?? 2}" rx="4"/><text x="${s.minX}" y="${s.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${U.muted}">${Dt(x.text ?? "프레임")}</text></g>`;
    if (x.type === "note")
      return `<g${g}><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" fill="${r.bg}"/><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="6" fill="${r.border}"/>` + k(x, r.text, 14, "600", "start") + "</g>";
    if (x.type === "card") {
      const h = x.cardStyle === "glass";
      return `<g${g}><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" rx="16" fill="${h ? U.glassFill : U.slateCard}"/><text x="${s.minX + 16}" y="${s.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${U.slate400}">[ ${Dt(x.category ?? "ENTITY")} ]</text>` + k(x, U.white, 16, "700", "start") + "</g>";
    }
    const y = x.type === "rect" || x.type === "ellipse" || x.type === "triangle" || x.type === "diamond" || x.type === "hexagon" || x.type === "star" ? x.strokeWidth ?? 2 : 2, d = fe(x), b = bn(x), m = x.type === "triangle" || x.type === "diamond" || x.type === "hexagon" || x.type === "star", $ = m ? kn(x.type, s.maxX - s.minX, s.maxY - s.minY).split(" ").map((h) => {
      const [w, f] = h.split(",").map(Number);
      return `${w + s.minX},${f + s.minY}`;
    }).join(" ") : "", X = x.type === "ellipse" ? `<ellipse cx="${(s.minX + s.maxX) / 2}" cy="${(s.minY + s.maxY) / 2}" rx="${(s.maxX - s.minX) / 2}" ry="${(s.maxY - s.minY) / 2}" fill="${d}" stroke="${b}" stroke-width="${y}"/>` : m ? `<polygon points="${$}" fill="${d}" stroke="${b}" stroke-width="${y}" stroke-linejoin="round"/>` : `<rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" rx="12" fill="${d}" stroke="${b}" stroke-width="${y}"/>`;
    return `<g${g}>${X}${k(x, r.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${v}" viewBox="${n - i} ${o - i} ${l} ${v}"><rect x="${n - i}" y="${o - i}" width="${l}" height="${v}" fill="${e ? U.canvasDark : U.canvasLight}"/>` + u + "</svg>";
}
async function Mr(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), o = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), a = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), c = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, i = new Image();
  i.crossOrigin = "anonymous";
  try {
    await new Promise((r, s) => {
      i.onload = () => r(), i.onerror = () => s(new Error("svg rasterise failed")), i.src = c;
    });
  } catch {
    return null;
  }
  const l = 2, v = o * l, k = a * l;
  if (!Number.isSafeInteger(v) || !Number.isSafeInteger(k) || v > Rt.maxExportDimension || k > Rt.maxExportDimension || v * k > Rt.maxExportPixels) return null;
  const u = document.createElement("canvas");
  u.width = v, u.height = k;
  const x = u.getContext("2d");
  return x ? (x.scale(l, l), x.drawImage(i, 0, 0), new Promise((r) => {
    try {
      u.toBlob((s) => r(s), "image/png");
    } catch {
      r(null);
    }
  })) : null;
}
function zr(t, e, n) {
  if (t.length < 2) return;
  const o = t.filter(
    (r) => r.type !== "draw" && r.type !== "arrow" && r.type !== "frame" && r.type !== "image"
  );
  if (o.length < 2) return;
  const a = o.map((r, s) => ({
    id: r.id,
    i: s,
    x: Nt(r).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: Nt(r).y,
    vx: 0,
    vy: 0
  }));
  for (let r = 0; r < a.length; r++)
    for (let s = 0; s < r; s++)
      if (Math.abs(a[r].x - a[s].x) < 1 && Math.abs(a[r].y - a[s].y) < 1) {
        const p = 2 * Math.PI * r / a.length;
        a[r].x += Math.cos(p) * 10, a[r].y += Math.sin(p) * 10;
        break;
      }
  const c = new Map(a.map((r) => [r.id, r])), i = [];
  for (const r of t) {
    if (r.type !== "arrow") continue;
    const s = r.fromId ? c.get(r.fromId) : null, p = r.toId ? c.get(r.toId) : null;
    s && p && i.push([s, p]);
  }
  const l = 220, v = l * l, k = 80;
  let u = 400;
  const x = u / k;
  for (let r = 0; r < k; r++) {
    for (let s = 0; s < a.length; s++)
      a[s].vx = 0, a[s].vy = 0;
    for (let s = 0; s < a.length; s++)
      for (let p = s + 1; p < a.length; p++) {
        const g = a[s], C = a[p], y = g.x - C.x, d = g.y - C.y, b = Math.hypot(y, d) || 0.01, m = v / b, $ = y / b * m, X = d / b * m;
        g.vx += $, g.vy += X, C.vx -= $, C.vy -= X;
      }
    for (const [s, p] of i) {
      const g = s.x - p.x, C = s.y - p.y, y = Math.hypot(g, C) || 0.01, d = y * y / l, b = g / y * d, m = C / y * d;
      s.vx -= b, s.vy -= m, p.vx += b, p.vy += m;
    }
    for (const s of a) {
      const p = Math.hypot(s.vx, s.vy) || 0.01, g = Math.min(p, u);
      s.x += s.vx / p * g, s.y += s.vy / p * g;
    }
    u = Math.max(0.5, u - x);
  }
  e((r) => r.map((s) => {
    const p = c.get(s.id);
    return p ? { ...s, x: p.x - s.w / 2, y: p.y - s.h / 2 } : s;
  })), n();
}
function Cr(t, {
  controlled: e,
  past: n,
  future: o,
  setLocalShapes: a,
  setCamera: c,
  selectNow: i,
  setEditingId: l
}) {
  let v;
  try {
    v = eo(t);
  } catch {
    return;
  }
  e || (n.current = [], o.current = [], a(v.shapes.map(Sr))), c(v.camera), i(/* @__PURE__ */ new Set()), l(null);
}
function Sr(t) {
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
      return Xr(t);
  }
}
function Xr(t) {
  throw new no(`Unhandled canvas shape type: ${String(t)}.`);
}
function Yr({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: o,
  past: a,
  future: c,
  controlled: i,
  isDarkMode: l,
  minZoom: v,
  maxZoom: k,
  onToolChange: u,
  setSelectedStrokeWidth: x,
  onDirty: r,
  commit: s,
  selectNow: p,
  selectionActions: g,
  viewportCentre: C,
  setShapes: y,
  setLocalShapes: d,
  setCamera: b,
  setEditingId: m,
  setAnnouncement: $,
  createId: X
}) {
  const h = xt((f) => {
    const M = C(), z = zn({
      id: X(),
      x: f.x ?? M.x - f.w / 2,
      y: f.y ?? M.y - f.h / 2,
      ...f
    });
    if (!z) throw new Error("Canvas could not create a valid shape.");
    return s((P) => [...P, z]), p(/* @__PURE__ */ new Set([z.id])), u("select"), $(`${z.type} 추가됨`), z;
  }, [s, X, u, p, $, C]), w = xt(() => $r(n.current, l), [l, n]);
  Rn(t, () => ({
    addNote: (f) => {
      const M = h({ type: "note", w: 180, h: 180, color: f, text: "" });
      m(M.id);
    },
    addCard: (f, M, z, P) => {
      h({ type: "card", w: 260, h: 150, text: f, category: M, cardStyle: z, color: P });
    },
    addText: () => {
      const f = h({ type: "text", w: 220, h: 44, text: "" });
      m(f.id);
    },
    addShape: (f, M, z) => {
      h({
        type: f,
        w: f === "ellipse" ? 220 : 200,
        h: f === "ellipse" ? 110 : 140,
        color: M,
        text: z ?? ""
      });
    },
    addArrow: () => {
      const f = C(), M = { id: X(), type: "arrow", x: f.x - 140, y: f.y, w: 280, h: 0 };
      s((z) => [...z, M]), p(/* @__PURE__ */ new Set([M.id])), u("select");
    },
    addImage: (f, M, z, P) => {
      h({ type: "image", w: z, h: P, src: f, fileName: M });
    },
    addFileCard: (f, M, z) => {
      h({ type: "rect", w: 260, h: 120, color: "purple", text: z, src: M, fileName: f });
    },
    updateShapeText: (f, M) => {
      s((z) => z.map((P) => P.id === f ? { ...P, text: M, html: void 0 } : P));
    },
    setSelectedStrokeWidth: x,
    setTool: u,
    undo: () => {
      const f = a.current.pop();
      f && (c.current.push(n.current), y(f), p(/* @__PURE__ */ new Set()), m(null), r(), $("실행 취소"));
    },
    redo: () => {
      const f = c.current.pop();
      f && (a.current.push(n.current), y(f), p(/* @__PURE__ */ new Set()), m(null), r(), $("다시 실행"));
    },
    deleteSelected: g.deleteSelected,
    duplicateSelected: g.duplicateSelected,
    group: g.group,
    ungroup: g.ungroup,
    zoomBy: (f) => {
      b((M) => {
        var F;
        const z = (F = e.current) == null ? void 0 : F.getBoundingClientRect(), P = Math.min(k, Math.max(v, M.z * f));
        if (!z) return { ...M, z: P };
        const I = M.x + z.width / 2 / M.z, L = M.y + z.height / 2 / M.z;
        return { x: I - z.width / 2 / P, y: L - z.height / 2 / P, z: P };
      });
    },
    zoomTo: (f) => {
      b((M) => {
        var F;
        const z = (F = e.current) == null ? void 0 : F.getBoundingClientRect(), P = Math.min(k, Math.max(v, f));
        if (!z) return { ...M, z: P };
        const I = M.x + z.width / 2 / M.z, L = M.y + z.height / 2 / M.z;
        return { x: I - z.width / 2 / P, y: L - z.height / 2 / P, z: P };
      });
    },
    resetZoom: () => {
      b((f) => {
        var I;
        const M = (I = e.current) == null ? void 0 : I.getBoundingClientRect();
        if (!M) return { ...f, z: 1 };
        const z = f.x + M.width / 2 / f.z, P = f.y + M.height / 2 / f.z;
        return { x: z - M.width / 2, y: P - M.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var E;
      const f = n.current, M = (E = e.current) == null ? void 0 : E.getBoundingClientRect();
      if (f.length === 0 || !M) return;
      let z = 1 / 0, P = 1 / 0, I = -1 / 0, L = -1 / 0;
      for (const Y of f) {
        const T = it(Y);
        z = Math.min(z, T.minX), P = Math.min(P, T.minY), I = Math.max(I, T.maxX), L = Math.max(L, T.maxY);
      }
      const F = 80, D = Math.min(k, Math.max(
        v,
        Math.min(M.width / (I - z + F * 2), M.height / (L - P + F * 2))
      ));
      b({
        x: (z + I) / 2 - M.width / 2 / D,
        y: (P + L) / 2 - M.height / 2 / D,
        z: D
      });
    },
    autoLayout: () => zr(n.current, s, () => $("자동 배치 완료")),
    exportSvg: w,
    exportPng: () => Mr(w),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (f) => Cr(f, {
      controlled: i,
      past: a,
      future: c,
      setLocalShapes: d,
      setCamera: b,
      selectNow: p,
      setEditingId: m
    })
  }), [
    h,
    w,
    s,
    X,
    l,
    k,
    v,
    r,
    u,
    g,
    p,
    b,
    m,
    d,
    x,
    y,
    $,
    C,
    i
  ]);
}
function Nr(t) {
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
function Pr({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: o,
  editingIdRef: a,
  toolRef: c,
  past: i,
  future: l,
  textualTypes: v,
  setIsSpaceDown: k,
  setEditingId: u,
  setShapes: x,
  setAnnouncement: r,
  commit: s,
  deleteSelection: p,
  selectNow: g,
  onDirty: C,
  onToolChange: y,
  createId: d
}) {
  const b = xt((m, $) => {
    const X = o.current;
    X.size !== 0 && s((h) => h.map((w) => {
      var f;
      return X.has(w.id) ? {
        ...w,
        x: w.x + m,
        y: w.y + $,
        points: (f = w.points) == null ? void 0 : f.map(([M, z]) => [M + m, z + $])
      } : w;
    }));
  }, [s, o]);
  Yt(() => {
    const m = (w) => {
      const f = w;
      return !!f && (f.tagName === "INPUT" || f.tagName === "TEXTAREA" || f.isContentEditable);
    }, $ = (w) => w instanceof Element && !!w.closest("input, select, button, textarea, option, label, [data-canvas-control]"), X = (w) => {
      var D, E, Y, T;
      const f = t.current, M = document.activeElement, z = w.target instanceof Node && !!(f != null && f.contains(w.target)), P = !!f && (M === f || f.contains(M));
      if (!z && !P || $(w.target)) return;
      if (w.code === "Space" && !m(w.target)) {
        k(!0), w.preventDefault();
        return;
      }
      if (m(w.target)) {
        if (w.key === "Escape")
          w.preventDefault(), u(null), (D = e.current) == null || D.blur(), (E = t.current) == null || E.focus();
        else if ((w.key === "Delete" || w.key === "Backspace") && !a.current) {
          const A = o.current;
          p(A) && w.preventDefault();
        }
        return;
      }
      const I = w.metaKey || w.ctrlKey, L = o.current;
      if (I && w.key.toLowerCase() === "z") {
        if (w.preventDefault(), w.shiftKey) {
          const A = l.current.pop();
          A && (i.current.push(n.current), x(A), C());
        } else {
          const A = i.current.pop();
          A && (l.current.push(n.current), x(A), C());
        }
        g(/* @__PURE__ */ new Set());
        return;
      }
      if (I && w.key.toLowerCase() === "g") {
        if (w.preventDefault(), w.shiftKey)
          L.size > 0 && (s((A) => A.map((O) => L.has(O.id) ? { ...O, groupId: void 0 } : O)), r("그룹 해제됨"));
        else if (L.size > 1) {
          const A = d("g");
          s((O) => O.map((G) => L.has(G.id) ? { ...G, groupId: A } : G)), r(`${L.size}개 그룹화됨`);
        }
        return;
      }
      if (I && w.key.toLowerCase() === "a") {
        w.preventDefault(), g(new Set(n.current.map((A) => A.id))), r(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (w.key === "Delete" || w.key === "Backspace") {
        p(L) && w.preventDefault();
        return;
      }
      if (w.key.startsWith("Arrow")) {
        w.preventDefault();
        const A = w.shiftKey ? 10 : 1;
        w.key === "ArrowLeft" && b(-A, 0), w.key === "ArrowRight" && b(A, 0), w.key === "ArrowUp" && b(0, -A), w.key === "ArrowDown" && b(0, A);
        return;
      }
      if (w.key === "Tab" && n.current.length > 0) {
        w.preventDefault();
        const A = n.current, O = A.findIndex((et) => L.has(et.id)), G = w.shiftKey ? O <= 0 ? A.length - 1 : O - 1 : O === -1 || O === A.length - 1 ? 0 : O + 1, H = A[G];
        g(/* @__PURE__ */ new Set([H.id])), r(`${H.type} 선택됨: ${re(H) || "내용 없음"}`);
        return;
      }
      if (w.key === "Enter" && L.size === 1) {
        const A = n.current.find((O) => L.has(O.id));
        A && v.includes(A.type) && (w.preventDefault(), u(A.id));
        return;
      }
      if (w.key === "Escape") {
        if (a.current) {
          w.preventDefault(), u(null), (Y = e.current) == null || Y.blur(), (T = t.current) == null || T.focus(), y("select");
          return;
        }
        g(/* @__PURE__ */ new Set()), y("select");
        return;
      }
      const F = Nr(w);
      F && (w.preventDefault(), c.current = F, y(F));
    }, h = (w) => {
      const f = t.current;
      !f || !(document.activeElement === f || f.contains(document.activeElement)) || w.code === "Space" && k(!1);
    };
    return window.addEventListener("keydown", X), window.addEventListener("keyup", h), () => {
      window.removeEventListener("keydown", X), window.removeEventListener("keyup", h);
    };
  }, [
    s,
    t,
    d,
    p,
    a,
    e,
    l,
    b,
    C,
    y,
    i,
    g,
    o,
    r,
    u,
    k,
    x,
    n,
    v,
    c
  ]);
}
const Ir = 400;
function Lr({
  containerRef: t,
  editorRef: e,
  pointers: n,
  cameraRef: o,
  shapesRef: a,
  editingIdRef: c,
  toolRef: i,
  activeColorRef: l,
  drawStrokeWidth: v,
  camera: k,
  shapes: u,
  selected: x,
  isSpaceDown: r,
  textualTypes: s,
  setShapes: p,
  setEditingId: g,
  applyInteraction: C,
  selectNow: y,
  beginHistory: d,
  commit: b,
  onToolChange: m,
  expandToGroups: $,
  toPage: X,
  createId: h
}) {
  const w = h, f = Z(null), M = (Y, T) => {
    var H;
    const A = ((H = t.current) == null ? void 0 : H.dataset.canvasActiveTool) === "text" ? "text" : i.current;
    if (A !== "note" && A !== "text") return;
    const O = X(Y, T), G = A === "note" ? { id: w(), type: "note", x: O.x - 90, y: O.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: w(), type: "text", x: O.x, y: O.y - 22, w: 220, h: 44, text: "" };
    b((et) => [...et, G]), y(/* @__PURE__ */ new Set([G.id])), g(G.id), m("select");
  };
  return Yt(() => {
    const Y = (T) => {
      var A;
      (A = t.current) != null && A.contains(T.target) && (T.target instanceof Element && T.target.closest('[role="textbox"], [data-canvas-inspector]') || M(T.clientX, T.clientY));
    };
    return window.addEventListener("click", Y, !0), () => window.removeEventListener("click", Y, !0);
  }), { onPointerDown: (Y) => {
    var ft, lt, yt;
    const T = i.current, A = Y.target instanceof Element ? Y.target : null, O = !!(A != null && A.closest("[data-canvas-editor]")) && c.current !== null;
    n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY }), !O && Y.cancelable && Y.preventDefault();
    const G = Y.currentTarget;
    try {
      G.setPointerCapture(Y.pointerId);
    } catch {
    }
    if (n.current.size === 2) {
      const [V, J] = [...n.current.values()], ct = o.current;
      C({
        kind: "pinch",
        startDist: Math.hypot(J.x - V.x, J.y - V.y) || 1,
        startZoom: ct.z,
        startMidX: (V.x + J.x) / 2,
        startMidY: (V.y + J.y) / 2,
        camX: ct.x,
        camY: ct.y
      });
      return;
    }
    if (n.current.size > 2) return;
    if (Y.button === 1 || r || T === "hand" || Y.button === 0 && T === "select" && Y.altKey) {
      C({ kind: "pan", startX: Y.clientX, startY: Y.clientY, camX: k.x, camY: k.y });
      return;
    }
    if (Y.button !== 0) return;
    const H = X(Y.clientX, Y.clientY);
    if (O || (g(null), (ft = e.current) == null || ft.blur(), (lt = t.current) == null || lt.focus()), T === "draw" || T === "highlighter") {
      const V = {
        id: w(),
        type: "draw",
        x: H.x,
        y: H.y,
        w: 0,
        h: 0,
        points: [[H.x, H.y]],
        color: l.current,
        strokeWidth: v,
        drawMode: T === "highlighter" ? "highlighter" : "pen"
      };
      d(), p((J) => [...J, V]), C({ kind: "drawing", id: V.id });
      return;
    }
    if (T === "arrow" || T === "frame" || oo.includes(T)) {
      const V = T, J = T === "arrow" ? { id: w(), type: "arrow", x: H.x, y: H.y, w: 0, h: 0, color: l.current } : T === "frame" ? { id: w(), type: "frame", x: H.x, y: H.y, w: 0, h: 0, text: "프레임" } : { id: w(), type: V, x: H.x, y: H.y, w: 0, h: 0, color: l.current, text: "" };
      d(), p((ct) => [...ct, J]), C({ kind: "creating", id: J.id, startX: H.x, startY: H.y });
      return;
    }
    if (T === "note" || T === "text") return;
    if (T === "eraser") {
      d(), p((V) => Xn(V, H.x, H.y, 14 / k.z, k.z)), C({ kind: "erasing" });
      return;
    }
    const et = new Map(u.map((V) => [V.id, V])), Q = c.current ? u.find((V) => V.id === c.current) : void 0, q = O && Q ? Q : [...u].reverse().find((V) => ve(V, H.x, H.y, k.z, et, u));
    if (!q)
      f.current = null;
    else {
      const V = Date.now(), J = !Y.shiftKey && s.includes(q.type) && ((yt = f.current) == null ? void 0 : yt.id) === q.id && V - f.current.time < Ir, ct = J ? q.id : void 0;
      f.current = J ? null : { id: q.id, time: V };
      const $t = Y.shiftKey ? new Set(x).add(q.id) : x.has(q.id) ? x : /* @__PURE__ */ new Set([q.id]), Mt = $($t);
      y(Mt);
      const dt = /* @__PURE__ */ new Map();
      for (const st of u) Mt.has(st.id) && dt.set(st.id, st);
      for (const st of u) {
        if (st.type !== "frame" || !Mt.has(st.id)) continue;
        const nt = it(st);
        for (const bt of u) {
          if (bt.id === st.id || dt.has(bt.id)) continue;
          const Pt = Nt(bt);
          Pt.x >= nt.minX && Pt.x <= nt.maxX && Pt.y >= nt.minY && Pt.y <= nt.maxY && dt.set(bt.id, bt);
        }
      }
      d(), C({ kind: "move", startX: H.x, startY: H.y, origin: dt, editOnReleaseId: ct });
      return;
    }
    Y.shiftKey || y(/* @__PURE__ */ new Set()), C({
      kind: "marquee",
      startX: H.x,
      startY: H.y,
      curX: H.x,
      curY: H.y,
      screenStartX: Y.clientX,
      screenStartY: Y.clientY
    });
  }, onResizeHandleDown: (Y, T, A) => {
    Y.stopPropagation(), n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY }), d(), C({ kind: "resize", id: T.id, handle: A, start: T });
  }, onRotateHandleDown: (Y, T) => {
    Y.stopPropagation(), n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY });
    const A = X(Y.clientX, Y.clientY), O = Nt(T);
    d(), C({
      kind: "rotate",
      id: T.id,
      startAngle: Math.atan2(A.y - O.y, A.x - O.x),
      startRotation: T.rotation ?? 0
    });
  }, onConnectHandleDown: (Y, T) => {
    Y.stopPropagation(), n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY });
    const A = X(Y.clientX, Y.clientY);
    C({ kind: "connect", fromId: T.id, toX: A.x, toY: A.y, hoverId: null });
  }, onBendHandleDown: (Y, T) => {
    Y.stopPropagation(), n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY }), d(), C({ kind: "bend", id: T.id });
  }, onOrthogonalSegmentHandleDown: (Y, T, A) => {
    Y.stopPropagation(), n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY }), d(), C({ kind: "orthogonal-segment", id: T.id, segmentIndex: A });
  }, onArrowEndpointDown: (Y, T, A) => {
    Y.stopPropagation(), n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY }), d(), C({ kind: "arrow-endpoint", id: T.id, endpoint: A, hoverId: null });
  } };
}
const Er = 0.1, Fr = 4, Tr = 14, Ar = 4, rn = ["note", "card", "rect", "ellipse", "text", "image"];
function Dr({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: o,
  shapesRef: a,
  setShapes: c,
  setEditingId: i,
  setEraserPos: l,
  setGuides: v,
  setAnnouncement: k,
  applyInteraction: u,
  selectNow: x,
  endHistory: r,
  commit: s,
  onToolChange: p,
  createId: g,
  pendingDrawPointsRef: C,
  drawRafRef: y
}) {
  const d = g;
  Yt(() => {
    const b = (m) => {
      var X, h;
      t.current.delete(m.pointerId);
      try {
        (h = (X = m.target) == null ? void 0 : X.releasePointerCapture) == null || h.call(X, m.pointerId);
      } catch {
      }
      const $ = e.current;
      if ($.kind !== "none") {
        if ($.kind === "pinch") {
          t.current.size < 2 && u({ kind: "none" });
          return;
        }
        if (v([]), $.kind === "erasing") {
          l(null), r(), u({ kind: "none" });
          return;
        }
        if ($.kind === "connect") {
          const f = a.current.find((F) => F.id === $.fromId);
          if (u({ kind: "none" }), !f) return;
          const M = { x: $.toX, y: $.toY }, z = Nt(f);
          if (!$.hoverId && Math.hypot(M.x - z.x, M.y - z.y) < 30) return;
          const P = [];
          let I = $.hoverId;
          if (!I) {
            const F = f.type === "note" ? 180 : 200, D = f.type === "note" ? 180 : 120, E = {
              ...f,
              id: d(),
              x: M.x - F / 2,
              y: M.y - D / 2,
              w: F,
              h: D,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            P.push(E), I = E.id;
          }
          const L = {
            id: d(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: f.id,
            toId: I,
            text: ""
          };
          P.push(L), s((F) => [...F, ...P]), x(/* @__PURE__ */ new Set([L.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => i(L.id)) : i(L.id), k("연결 생성됨");
          return;
        }
        if ($.kind === "bend") {
          r(), u({ kind: "none" });
          return;
        }
        if ($.kind === "drawing") {
          y.current !== null && (cancelAnimationFrame(y.current), y.current = null);
          const w = o(m.clientX, m.clientY);
          C.current.push([w.x, w.y]);
          const f = C.current.splice(0);
          c((M) => M.map((z) => {
            if (z.id !== $.id || !z.points) return z;
            const P = [...z.points];
            let I = P[P.length - 1];
            for (const Y of f)
              (!I || Math.hypot(Y[0] - I[0], Y[1] - I[1]) >= 1 / n.current.z) && (P.push(Y), I = Y);
            const L = P.map((Y) => Y[0]), F = P.map((Y) => Y[1]), D = Math.min(...L), E = Math.min(...F);
            return { ...z, points: P, x: D, y: E, w: Math.max(...L) - D, h: Math.max(...F) - E };
          })), r(), u({ kind: "none" });
          return;
        }
        if ($.kind === "creating") {
          c((w) => w.map((f) => {
            if (f.id !== $.id) return f;
            const M = Math.abs(f.w) < 4 && Math.abs(f.h) < 4 ? {
              ...f,
              w: f.type === "arrow" ? 200 : f.type === "frame" ? 480 : 180,
              h: f.type === "arrow" ? 0 : f.type === "frame" ? 320 : 120
            } : f;
            if (M.type === "arrow") return M;
            const z = _t(M);
            return { ...M, x: z.minX, y: z.minY, w: z.maxX - z.minX, h: z.maxY - z.minY };
          })), r(), x(/* @__PURE__ */ new Set([$.id])), p("select"), u({ kind: "none" });
          return;
        }
        if (($.kind === "move" || $.kind === "resize" || $.kind === "rotate" || $.kind === "orthogonal-segment" || $.kind === "arrow-endpoint") && r(), $.kind === "move" && $.editOnReleaseId && m.type === "pointerup") {
          const w = o(m.clientX, m.clientY);
          Math.hypot(w.x - $.startX, w.y - $.startY) * n.current.z <= Ar && i($.editOnReleaseId);
        }
        u({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", b), window.addEventListener("pointercancel", b), () => {
      window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", b);
    };
  }, [
    u,
    n,
    s,
    g,
    y,
    r,
    e,
    p,
    C,
    t,
    x,
    k,
    i,
    l,
    v,
    c,
    a,
    o
  ]);
}
function Wr({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: o,
  shapesRef: a,
  setCamera: c,
  setShapes: i,
  setEraserPos: l,
  setGuides: v,
  applyInteraction: k,
  selectNow: u,
  expandToGroups: x,
  toPage: r,
  pendingDrawPointsRef: s,
  drawRafRef: p
}) {
  Yt(() => () => {
    p.current !== null && cancelAnimationFrame(p.current);
  }, [p]), Yt(() => {
    const g = (y, d, b = !0) => {
      const m = r(y.clientX, y.clientY);
      if (y.shiftKey) {
        i((X) => X.map((h) => {
          if (h.id !== d || !h.points) return h;
          const w = h.points[0];
          return w ? { ...h, points: [w, [m.x, m.y]] } : h;
        }));
        return;
      }
      const $ = b && typeof y.getCoalescedEvents == "function" ? y.getCoalescedEvents() : [];
      if ($.length > 0)
        for (const X of $) {
          const h = r(X.clientX, X.clientY);
          s.current.push([h.x, h.y]);
        }
      s.current.push([m.x, m.y]), p.current === null && (p.current = requestAnimationFrame(() => {
        p.current = null;
        const X = s.current;
        if (X.length === 0) return;
        s.current = [];
        const h = o.current.z;
        i((w) => w.map((f) => {
          if (f.id !== d || !f.points) return f;
          let M = f.points[f.points.length - 1][0], z = f.points[f.points.length - 1][1];
          const P = [...f.points];
          for (const [I, L] of X)
            Math.hypot(I - M, L - z) < 1 / h || (P.push([I, L]), M = I, z = L);
          return P.length === f.points.length ? f : { ...f, points: P };
        }));
      }));
    }, C = (y) => {
      var $, X;
      e.current.has(y.pointerId) && e.current.set(y.pointerId, { x: y.clientX, y: y.clientY });
      const d = n.current;
      if (d.kind === "none") return;
      const b = o.current;
      if (d.kind === "pinch") {
        if (e.current.size < 2) return;
        const [h, w] = [...e.current.values()], f = Math.hypot(w.x - h.x, w.y - h.y) || 1, M = (h.x + w.x) / 2, z = (h.y + w.y) / 2, P = ($ = t.current) == null ? void 0 : $.getBoundingClientRect();
        if (!P) return;
        const I = Math.min(Fr, Math.max(Er, d.startZoom * (f / d.startDist))), L = d.camX + (d.startMidX - P.left) / d.startZoom, F = d.camY + (d.startMidY - P.top) / d.startZoom;
        c({ x: L - (M - P.left) / I, y: F - (z - P.top) / I, z: I });
        return;
      }
      if (d.kind === "pan") {
        c({
          x: d.camX - (y.clientX - d.startX) / b.z,
          y: d.camY - (y.clientY - d.startY) / b.z,
          z: b.z
        });
        return;
      }
      const m = r(y.clientX, y.clientY);
      if (d.kind === "erasing") {
        i((h) => Xn(h, m.x, m.y, Tr / b.z, b.z)), l({ x: m.x, y: m.y });
        return;
      }
      if (d.kind === "connect") {
        const h = a.current, w = new Map(h.map((M) => [M.id, M])), f = [...h].reverse().find((M) => M.id !== d.fromId && rn.includes(M.type) && ve(M, m.x, m.y, b.z, w, h));
        k({ ...d, toX: m.x, toY: m.y, hoverId: (f == null ? void 0 : f.id) ?? null });
        return;
      }
      if (d.kind === "bend") {
        const h = a.current, w = h.find((D) => D.id === d.id);
        if (!w) return;
        const f = Et(w, new Map(h.map((D) => [D.id, D])), h), M = f.end.x - f.start.x, z = f.end.y - f.start.y, P = Math.hypot(M, z) || 1, I = (f.start.x + f.end.x) / 2, L = (f.start.y + f.end.y) / 2, F = (m.x - I) * (-z / P) + (m.y - L) * (M / P);
        i((D) => D.map((E) => E.id === d.id ? { ...E, bend: F } : E));
        return;
      }
      if (d.kind === "orthogonal-segment") {
        const h = a.current, w = h.find((F) => F.id === d.id);
        if (!w) return;
        const f = Et(w, new Map(h.map((F) => [F.id, F])), h), M = f.routing === "orthogonal" ? f.pathPoints : void 0;
        if (!M || M.length < 2) return;
        const z = M[d.segmentIndex], P = M[d.segmentIndex + 1];
        if (!z || !P) return;
        const I = z.x === P.x ? m.x : m.y, L = Mo(M, d.segmentIndex, I);
        i((F) => F.map((D) => D.id === d.id ? { ...D, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: L.slice(1, -1).map((E) => ({ x: E.x, y: E.y })) } : D));
        return;
      }
      if (d.kind === "arrow-endpoint") {
        const h = a.current, w = h.find((L) => L.id === d.id);
        if (!w) return;
        const f = new Map(h.map((L) => [L.id, L])), M = Et(w, f, h), z = d.endpoint === "start" ? M.end : M.start, P = [...h].reverse().find((L) => L.id !== w.id && rn.includes(L.type) && ve(L, m.x, m.y, b.z, f, h)), I = P ? Kt(P, z.x, z.y) : { x: m.x, y: m.y };
        k({ ...d, hoverId: (P == null ? void 0 : P.id) ?? null }), i((L) => L.map((F) => {
          if (F.id !== w.id) return F;
          const D = d.endpoint === "start" ? I : z, E = d.endpoint === "end" ? I : z;
          return {
            ...F,
            x: D.x,
            y: D.y,
            w: E.x - D.x,
            h: E.y - D.y,
            fromId: d.endpoint === "start" ? P == null ? void 0 : P.id : F.fromId,
            toId: d.endpoint === "end" ? P == null ? void 0 : P.id : F.toId
          };
        }));
        return;
      }
      if (d.kind === "marquee") {
        k({ ...d, curX: m.x, curY: m.y });
        const h = Math.min(d.startX, m.x), w = Math.max(d.startX, m.x), f = Math.min(d.startY, m.y), M = Math.max(d.startY, m.y), z = Math.min(d.screenStartX, y.clientX), P = Math.max(d.screenStartX, y.clientX), I = Math.min(d.screenStartY, y.clientY), L = Math.max(d.screenStartY, y.clientY), F = /* @__PURE__ */ new Map();
        (X = t.current) == null || X.querySelectorAll("[data-canvas-shape-id]").forEach((E) => {
          const Y = E.dataset.canvasShapeId;
          Y && F.set(Y, E.getBoundingClientRect());
        });
        const D = a.current.filter((E) => {
          const Y = F.get(E.id);
          if (Y)
            return Y.right >= z && Y.left <= P && Y.bottom >= I && Y.top <= L;
          const T = it(E);
          return T.maxX >= h && T.minX <= w && T.maxY >= f && T.minY <= M;
        }).map((E) => E.id);
        u(x(new Set(D)));
        return;
      }
      if (d.kind === "move") {
        let h = m.x - d.startX, w = m.y - d.startY;
        const f = d.origin, M = (() => {
          let I = 1 / 0, L = 1 / 0, F = -1 / 0, D = -1 / 0;
          return f.forEach((E) => {
            const Y = it({ ...E, x: E.x + h, y: E.y + w });
            I = Math.min(I, Y.minX), L = Math.min(L, Y.minY), F = Math.max(F, Y.maxX), D = Math.max(D, Y.maxY);
          }), { minX: I, minY: L, maxX: F, maxY: D };
        })(), z = a.current.filter((I) => !f.has(I.id)), P = jo(M, z, b.z);
        h += P.dx, w += P.dy, v(P.guides), i((I) => I.map((L) => {
          var D;
          const F = f.get(L.id);
          return F ? {
            ...L,
            x: F.x + h,
            y: F.y + w,
            points: (D = F.points) == null ? void 0 : D.map(([E, Y]) => [E + h, Y + w]),
            ...F.type === "arrow" && F.orthogonalWaypoints ? { orthogonalWaypoints: F.orthogonalWaypoints.map((E) => ({ x: E.x + h, y: E.y + w })) } : {}
          } : L;
        }));
        return;
      }
      if (d.kind === "drawing") {
        g(y, d.id);
        return;
      }
      if (d.kind === "creating") {
        i((h) => h.map((w) => w.id === d.id ? { ...w, w: m.x - d.startX, h: m.y - d.startY } : w));
        return;
      }
      if (d.kind === "rotate") {
        const h = a.current.find((z) => z.id === d.id);
        if (!h) return;
        const w = Nt(h), f = Math.atan2(m.y - w.y, m.x - w.x);
        let M = d.startRotation + (f - d.startAngle);
        y.shiftKey && (M = Math.round(M / (Math.PI / 12)) * (Math.PI / 12)), i((z) => z.map((P) => P.id === d.id ? { ...P, rotation: M } : P));
        return;
      }
      if (d.kind === "resize") {
        const { start: h, handle: w } = d, f = Cn(h, m.x, m.y);
        i((M) => M.map((z) => {
          if (z.id !== h.id) return z;
          let { x: P, y: I, w: L, h: F } = h;
          if (w.includes("e") && (L = Math.max(20, f.x - h.x)), w.includes("s") && (F = Math.max(20, f.y - h.y)), w.includes("w")) {
            const D = h.x + h.w;
            P = Math.min(f.x, D - 20), L = D - P;
          }
          if (w.includes("n")) {
            const D = h.y + h.h;
            I = Math.min(f.y, D - 20), F = D - I;
          }
          return { ...z, x: P, y: I, w: L, h: F, manualSize: z.type === "text" ? !0 : z.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", C), () => {
      window.removeEventListener("pointermove", C);
    };
  }, [
    k,
    o,
    t,
    p,
    x,
    n,
    s,
    e,
    u,
    c,
    l,
    v,
    i,
    a,
    r
  ]);
}
function Or(t) {
  const e = Z([]), n = Z(null), o = { ...t, pendingDrawPointsRef: e, drawRafRef: n };
  Wr(o), Dr(o);
}
function _r({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: o,
  cameraRef: a,
  shapesRef: c,
  editingIdRef: i,
  toolRef: l,
  activeColorRef: v,
  drawStrokeWidth: k,
  camera: u,
  shapes: x,
  selected: r,
  isSpaceDown: s,
  textualTypes: p,
  setCamera: g,
  setShapes: C,
  setEditingId: y,
  setEraserPos: d,
  setGuides: b,
  setAnnouncement: m,
  applyInteraction: $,
  selectNow: X,
  beginHistory: h,
  endHistory: w,
  commit: f,
  onToolChange: M,
  expandToGroups: z,
  toPage: P,
  createId: I
}) {
  const L = Lr({
    containerRef: t,
    editorRef: e,
    pointers: n,
    cameraRef: a,
    shapesRef: c,
    editingIdRef: i,
    toolRef: l,
    activeColorRef: v,
    drawStrokeWidth: k,
    camera: u,
    shapes: x,
    selected: r,
    isSpaceDown: s,
    textualTypes: p,
    setShapes: C,
    setEditingId: y,
    applyInteraction: $,
    selectNow: X,
    beginHistory: h,
    commit: f,
    onToolChange: M,
    expandToGroups: z,
    toPage: P,
    createId: I
  });
  return Or({
    containerRef: t,
    pointers: n,
    interactionRef: o,
    cameraRef: a,
    shapesRef: c,
    setCamera: g,
    setShapes: C,
    setEditingId: y,
    setEraserPos: d,
    setGuides: b,
    setAnnouncement: m,
    applyInteraction: $,
    selectNow: X,
    endHistory: w,
    commit: f,
    onToolChange: M,
    expandToGroups: z,
    toPage: P,
    createId: I
  }), L;
}
function Hr(t) {
  Yr(t);
  const e = Lt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return Pr({ ...t, toolRef: e }), _r(t);
}
function Br({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: o,
  zoom: a
}) {
  const c = n || o.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", i = t ? U.gridDark : U.gridLight, l = 40 * a;
  return { cursor: c, gridColor: i, gridSize: l, strokeColorOf: (k) => k.strokeColor ? wn(k) : k.color ? rt[k.color].border : t ? "var(--canvas-slate-200)" : U.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = wo, document.head.appendChild(t);
}
const an = 0.1, cn = 4, sn = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function En(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function ln(t, e, n) {
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
        return En(o);
    }
  });
}
function jr(t, e, n) {
  return t.map((o) => e.has(o.id) && o.type === "draw" ? { ...o, ...n } : o);
}
function dn(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const Zr = qn(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: o,
  drawStrokeWidth: a = 4,
  onToolChange: c,
  onDirty: i,
  onZoomChange: l,
  onSelectionChange: v,
  shapes: k,
  onShapesChange: u,
  peerCursors: x,
  onLocalCursor: r,
  renderDiagram: s
}, p) {
  var Te, Ae;
  const {
    containerRef: g,
    editorRef: C,
    setLocalShapes: y,
    controlled: d,
    shapes: b,
    setShapes: m,
    camera: $,
    setCamera: X,
    cameraRef: h,
    selected: w,
    selectedRef: f,
    editingId: M,
    setEditingId: z,
    editingIdRef: P,
    interaction: I,
    interactionRef: L,
    applyInteraction: F,
    isSpaceDown: D,
    setIsSpaceDown: E,
    guides: Y,
    setGuides: T,
    announcement: A,
    setAnnouncement: O,
    showInspectorPalette: G,
    setShowInspectorPalette: H,
    eraserPos: et,
    setEraserPos: Q,
    setActiveColor: q,
    activeColorRef: ft,
    installedFontFamilies: lt,
    pointers: yt,
    past: V,
    future: J,
    selectNow: ct,
    commit: $t,
    deleteSelection: Mt,
    beginHistory: dt,
    endHistory: st,
    toPage: nt,
    viewportCentre: bt,
    expandToGroups: Pt,
    toolRef: zt,
    shapesRef: ut
  } = wr({ boardIdentity: e, tool: o, controlledShapes: k, onShapesChange: u, onDirty: i }), W = kr({
    containerRef: g,
    shapesRef: ut,
    selectedRef: f,
    commit: $t,
    deleteSelection: Mt,
    selectNow: ct,
    setAnnouncement: O,
    createId: dn
  }), {
    inspectorSelection: B,
    inspectorShape: j,
    onContainerPointerMove: tt,
    onContainerPointerLeave: Ct
  } = br({
    containerRef: g,
    camera: $,
    setCamera: X,
    minZoom: an,
    maxZoom: cn,
    shapes: b,
    selected: w,
    editingId: M,
    textualTypes: sn,
    onZoomChange: l,
    onSelectionChange: v,
    onLocalCursor: r,
    toPage: nt
  }), St = te.useCallback((ht) => {
    const ae = new Set(f.current);
    ae.size !== 0 && $t((ie) => ln(ie, ae, ht));
  }, [$t, f]), {
    onPointerDown: S,
    onResizeHandleDown: _,
    onRotateHandleDown: R,
    onConnectHandleDown: vt,
    onBendHandleDown: Xt,
    onOrthogonalSegmentHandleDown: qt,
    onArrowEndpointDown: Fn
  } = Hr({
    ref: p,
    containerRef: g,
    editorRef: C,
    pointers: yt,
    interactionRef: L,
    cameraRef: h,
    shapesRef: ut,
    toolRef: zt,
    activeColorRef: ft,
    drawStrokeWidth: a,
    setSelectedStrokeWidth: St,
    camera: $,
    shapes: b,
    selected: w,
    isSpaceDown: D,
    setCamera: X,
    setShapes: m,
    setEditingId: z,
    setEraserPos: Q,
    setGuides: T,
    setAnnouncement: O,
    applyInteraction: F,
    selectNow: ct,
    selectionActions: W,
    past: V,
    future: J,
    beginHistory: dt,
    endHistory: st,
    commit: $t,
    deleteSelection: Mt,
    onDirty: i,
    onToolChange: c,
    controlled: d,
    isDarkMode: n,
    minZoom: an,
    maxZoom: cn,
    textualTypes: sn,
    selectedRef: f,
    editingIdRef: P,
    setIsSpaceDown: E,
    viewportCentre: bt,
    setLocalShapes: y,
    expandToGroups: Pt,
    toPage: nt,
    createId: dn
  }), { cursor: Tn, gridColor: An, gridSize: Ie, strokeColorOf: Dn } = Br({
    isDarkMode: n,
    tool: o === "highlighter" ? "draw" : o,
    isSpaceDown: D,
    interaction: I,
    zoom: $.z
  }), Le = (ht) => {
    const ae = f.current, ie = P.current, Zt = new Set(ae);
    if (ie && Zt.add(ie), Zt.size === 0) return;
    const De = "strokeWidth" in ht, Vn = Object.keys(ht).every((pt) => pt === "color" || pt === "fillColor" || pt === "strokeColor" || pt === "strokeWidth");
    if (B.length > 0 && B.every((pt) => pt.type === "draw") && Vn) {
      const pt = "color" in ht ? ht.color : void 0, wt = "strokeWidth" in ht ? ht.strokeWidth : void 0, We = "strokeColor" in ht ? ht.strokeColor : void 0;
      $t((Gn) => jr(Gn, Zt, {
        ...pt !== void 0 ? { color: pt } : {},
        ...wt !== void 0 ? { strokeWidth: wt } : {},
        ...We !== void 0 ? { strokeColor: We } : {}
      }));
      return;
    }
    if (De) {
      const pt = ht.strokeWidth;
      if (pt !== void 0 && Object.keys(ht).length === 1) {
        $t((wt) => ln(wt, Zt, pt));
        return;
      }
    }
    $t((pt) => pt.map((wt) => {
      if (!Zt.has(wt.id)) return wt;
      if (!De) return { ...wt, ...ht };
      switch (wt.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...wt, ...ht };
        case "note":
        case "card":
        case "text":
        case "image":
          return wt;
        case "draw":
          return { ...wt, ...ht };
        default:
          return En(wt);
      }
    }));
  }, {
    commitEditorHtml: Wn,
    applyFormat: On,
    applyList: _n,
    onEditorKeyDown: Hn,
    applyCustomFontFamily: Bn
  } = yr({
    editorRef: C,
    editingId: M,
    setShapes: m,
    setAnnouncement: O,
    onDirty: i,
    patchSelected: Le
  }), { renderEditor: jn, renderShapeBody: Kn } = mr({
    camera: $,
    editingId: M,
    isDarkMode: n,
    editorRef: C,
    commitEditorHtml: Wn,
    onEditorKeyDown: Hn,
    setShapes: m,
    onDirty: i,
    renderDiagram: s
  }), Un = I.kind === "marquee" ? I : null, { shapeById: Ee, visiblePaintOrder: Fe } = gr({
    containerRef: g,
    shapesRef: ut,
    shapes: b,
    camera: $,
    selected: w,
    editingId: M,
    boardIdentity: e
  });
  return /* @__PURE__ */ K(
    "div",
    {
      ref: g,
      onPointerDown: S,
      onPointerMove: tt,
      onPointerLeave: Ct,
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
        cursor: Tn,
        background: n ? U.canvasDark : U.canvasLight,
        backgroundImage: `radial-gradient(${An} 1px, transparent 1px)`,
        backgroundSize: `${Ie}px ${Ie}px`,
        backgroundPosition: `${-$.x * $.z}px ${-$.y * $.z}px`
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
            children: A
          }
        ),
        /* @__PURE__ */ N(
          Vo,
          {
            visiblePaintOrder: Fe,
            selected: w,
            shapeById: Ee,
            allShapes: ut.current,
            camera: $,
            interaction: I,
            eraserPos: et,
            guides: Y,
            marquee: Un,
            strokeColorOf: Dn
          }
        ),
        /* @__PURE__ */ N(
          sr,
          {
            visiblePaintOrder: Fe,
            selected: w,
            editingId: M,
            camera: $,
            shapeById: Ee,
            allShapes: ut.current,
            peerCursors: x,
            isDarkMode: n,
            renderEditor: jn,
            renderShapeBody: Kn,
            setEditingId: z,
            onBendHandleDown: Xt,
            onOrthogonalSegmentHandleDown: qt,
            onResizeHandleDown: _,
            onRotateHandleDown: R,
            onConnectHandleDown: vt,
            onArrowEndpointDown: Fn
          }
        ),
        j && /* @__PURE__ */ N(
          pr,
          {
            shape: j,
            selection: B,
            selectionActions: W,
            shapes: b,
            camera: $,
            canvasSize: { width: ((Te = g.current) == null ? void 0 : Te.clientWidth) ?? 380, height: ((Ae = g.current) == null ? void 0 : Ae.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!M,
            showPalette: G,
            installedFontFamilies: lt,
            setShowPalette: H,
            setActiveColor: q,
            patchSelected: Le,
            applyFormat: On,
            applyList: _n,
            applyCustomFontFamily: Bn
          }
        )
      ]
    }
  );
});
export {
  rt as CANVAS_COLORS,
  to as CANVAS_COLOR_KEYS,
  It as CANVAS_FONTS,
  Zr as InfiniteCanvas,
  oo as SHAPE_TOOLS,
  jr as applySelectedDrawStyle,
  ln as applySelectedStrokeWidth,
  qr as diagramTemplate,
  lr as getInspectorGroups,
  Pe as isDiagramShape
};
