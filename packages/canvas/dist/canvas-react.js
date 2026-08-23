import { jsx as N, jsxs as K, Fragment as Bt } from "react/jsx-runtime";
import te, { useState as ot, useRef as q, useEffect as Yt, useLayoutEffect as Gt, useMemo as Lt, useCallback as xt, useImperativeHandle as qn, forwardRef as Zn } from "react";
import { p as Qn, i as Se, k as Xe, a as rt, v as Jn, c as Pt, s as to, b as eo, d as Rt, h as no, C as oo, S as ro } from "./document-CLNFlHux.js";
import { Minus as ao, Plus as io, ChevronDown as co, AlignLeft as so, AlignCenter as lo, AlignRight as uo, List as ho, ListOrdered as xo, Bold as fo, Italic as vo, Underline as po, Group as mo, Ungroup as go, Copy as yo, Trash2 as wo } from "lucide-react";
const bo = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', U = Object.freeze({
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
  const c = se(t, e, n), i = se(t, e, o), l = se(n, o, t), f = se(n, o, e);
  return Math.abs(c) < 1e-6 && ce(t, n, e) || Math.abs(i) < 1e-6 && ce(t, o, e) || Math.abs(l) < 1e-6 && ce(n, t, o) || Math.abs(f) < 1e-6 && ce(n, e, o) ? !0 : c > 0 != i > 0 && l > 0 != f > 0;
}
function ko(t, e, n) {
  const o = Math.min(t.x, e.x), a = Math.max(t.x, e.x), c = Math.min(t.y, e.y), i = Math.max(t.y, e.y);
  if (a < n.minX || o > n.maxX || i < n.minY || c > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const l = { x: n.minX, y: n.minY }, f = { x: n.maxX, y: n.minY }, y = { x: n.maxX, y: n.maxY }, u = { x: n.minX, y: n.maxY };
  return le(t, e, l, f) || le(t, e, f, y) || le(t, e, y, u) || le(t, e, u, l);
}
function $o(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const o of e)
      if (ko(t[n - 1], t[n], o)) return !0;
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
  for (const f of n) {
    const y = (o === "x" ? f.minX : f.minY) - l, u = (o === "x" ? f.maxX : f.maxY) + l, x = (r) => r >= c - l * 4 && r <= i + l * 4;
    x(y) && a.add(y), x(u) && a.add(u);
  }
  return [...a].sort((f, y) => Math.abs(f - t) - Math.abs(y - t));
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
function Mo(t, e, n) {
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
function zo(t, e, n) {
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
    i.length < 2 || ($o(i, e) ? o.push(i) : n.push(i));
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
function Co(t, e, n, o, a) {
  const c = (t.x + e.x) / 2, i = (t.y + e.y) / 2;
  if (n === "u") {
    if (o) {
      const f = Ut(t.x, e.x, t.side, "x");
      return [t, { x: f, y: t.y }, { x: f, y: e.y }, e];
    }
    const l = Ut(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: l }, { x: e.x, y: l }, e];
  }
  if (n === "zigzag") {
    if (o) {
      const y = Ut(t.x, e.x, t.side, "x"), u = Ut(t.y, e.y, t.side, "y");
      return a ? [t, { x: y, y: t.y }, { x: y, y: u }, { x: c, y: u }, { x: c, y: e.y }, e] : [t, { x: y, y: t.y }, { x: y, y: u }, { x: e.x, y: u }, e];
    }
    const l = Ut(t.y, e.y, t.side, "y"), f = Ut(t.x, e.x, t.side, "x");
    return a ? [t, { x: t.x, y: l }, { x: f, y: l }, { x: f, y: e.y }, e] : [t, { x: t.x, y: l }, { x: f, y: l }, { x: f, y: i }, { x: e.x, y: i }, e];
  }
  return [];
}
function fn(t, e, n = [], o = "elbow", a = []) {
  if (a.length > 0) return Mo(t, e, a);
  const c = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), i = e.side ?? (c === "e" || c === "w" ? "w" : "n"), l = c === "e" || c === "w", f = i === "e" || i === "w", y = Oe(t.x, e.x, n, "x"), u = Oe(t.y, e.y, n, "y"), x = [];
  if (l && f) {
    for (const m of y) x.push([t, { x: m, y: t.y }, { x: m, y: e.y }, e]);
    for (const m of u) x.push([t, { x: t.x, y: m }, { x: e.x, y: m }, e]);
  } else if (!l && !f) {
    for (const m of u) x.push([t, { x: t.x, y: m }, { x: e.x, y: m }, e]);
    for (const m of y) x.push([t, { x: m, y: t.y }, { x: m, y: e.y }, e]);
  } else if (l) {
    x.push([t, { x: e.x, y: t.y }, e]);
    for (const m of u)
      x.push([t, { x: t.x, y: m }, { x: e.x, y: m }, e]), x.push([t, { x: t.x, y: m }, e]);
    for (const m of y) x.push([t, { x: m, y: t.y }, { x: m, y: e.y }, e]);
  } else {
    x.push([t, { x: t.x, y: e.y }, e]);
    for (const m of u)
      x.push([t, { x: t.x, y: m }, e]), x.push([t, { x: t.x, y: m }, { x: e.x, y: m }, e]);
    for (const m of y) x.push([t, { x: m, y: t.y }, { x: m, y: e.y }, e]);
  }
  const r = ge(x, n);
  if (o === "elbow") return r;
  if (o === "reverse") {
    const m = _e(r), C = ge(x.filter((b) => _e(b) !== m), n);
    return C.length > 1 ? C : r;
  }
  const s = Co(t, e, o, l, f), v = ge([s], n);
  return v.length > 1 ? v : r;
}
function vn(t) {
  return t.length < 2 ? 0 : ee(t[t.length - 2], t[t.length - 1]);
}
const { PI: So } = Math, ne = So + 1e-4, He = 0.5, Be = [1, 1];
function je(t, e, n, o = (a) => a) {
  return t * o(0.5 - e * (0.5 - n));
}
const { min: ye } = Math;
function pn(t, e, n) {
  let o = ye(1, e / n);
  return ye(1, t + (ye(1, 1 - o) - t) * (o * 0.275));
}
function Xo(t) {
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
function Yo(t, e) {
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
function No(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function Io(t) {
  return Math.hypot(t[0], t[1]);
}
function Ve(t, e) {
  let n = t[0] - e[0], o = t[1] - e[1];
  return n * n + o * o;
}
function gn(t) {
  return Yo(t, Io(t));
}
function Po(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function Ne(t, e, n) {
  let o = Math.sin(n), a = Math.cos(n), c = t[0] - e[0], i = t[1] - e[1], l = c * a - i * o, f = c * o + i * a;
  return [l + e[0], f + e[1]];
}
function Ge(t, e, n, o) {
  let a = Math.sin(o), c = Math.cos(o), i = e[0] - n[0], l = e[1] - n[1], f = i * c - l * a, y = i * a + l * c;
  return t[0] = f + n[0], t[1] = y + n[1], t;
}
function Re(t, e, n) {
  return Ft(t, Wt(Ot(e, t), n));
}
function Lo(t, e, n, o) {
  let a = n[0] - e[0], c = n[1] - e[1];
  return t[0] = e[0] + a * o, t[1] = e[1] + c * o, t;
}
function yn(t, e, n) {
  return Ft(t, Wt(e, n));
}
const at = [0, 0], Tt = [0, 0], At = [0, 0];
function Eo(t, e) {
  let n = yn(t, gn(mn(Ot(t, Ft(t, [1, 1])))), -e), o = [], a = 1 / 13;
  for (let c = a; c <= 1; c += a) o.push(Ne(n, t, ne * 2 * c));
  return o;
}
function Fo(t, e, n) {
  let o = [], a = 1 / n;
  for (let c = a; c <= 1; c += a) o.push(Ne(e, t, ne * c));
  return o;
}
function To(t, e, n) {
  let o = Ot(e, n), a = Wt(o, 0.5), c = Wt(o, 0.51);
  return [Ot(t, a), Ot(t, c), Ft(t, c), Ft(t, a)];
}
function Ao(t, e, n, o) {
  let a = [], c = yn(t, e, n), i = 1 / o;
  for (let l = i; l < 1; l += i) a.push(Ne(c, t, ne * 3 * l));
  return a;
}
function Do(t, e, n) {
  return [Ft(t, Wt(e, n)), Ft(t, Wt(e, n * 0.99)), Ot(t, Wt(e, n * 0.99)), Ot(t, Wt(e, n))];
}
function qe(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function Wo(t, e, n) {
  return t.slice(0, 10).reduce((o, a) => {
    let c = a.pressure;
    return e && (c = pn(o, a.distance, n)), (o + c) / 2;
  }, t[0].pressure);
}
function Oo(t, e = {}) {
  let { size: n = 16, smoothing: o = 0.5, thinning: a = 0.5, simulatePressure: c = !0, easing: i = (F) => F, start: l = {}, end: f = {}, last: y = !1 } = e, { cap: u = !0, easing: x = (F) => F * (2 - F) } = l, { cap: r = !0, easing: s = (F) => --F * F * F + 1 } = f;
  if (t.length === 0 || n <= 0) return [];
  let v = t[t.length - 1].runningLength, m = qe(l.taper, n, v), C = qe(f.taper, n, v), b = (n * o) ** 2, k = [], p = [], d = Wo(t, c, n), M = je(n, a, t[t.length - 1].pressure, i), w, z = t[0].vector, X = t[0].point, h = X, g = X, $ = h, I = !1;
  for (let F = 0; F < t.length; F++) {
    let { pressure: Y } = t[F], { point: P, vector: E, distance: O, runningLength: G } = t[F], H = F === t.length - 1;
    if (!H && v - G < 3) continue;
    a ? (c && (Y = pn(d, O, n)), M = je(n, a, Y, i)) : M = n / 2, w === void 0 && (w = M);
    let et = G < m ? x(G / m) : 1, Q = v - G < C ? s((v - G) / C) : 1;
    M = Math.max(0.01, M * Math.min(et, Q));
    let Z = (H ? t[F] : t[F + 1]).vector, ft = H ? 1 : Ue(E, Z), lt = Ue(E, z) < 0 && !I, yt = ft !== null && ft < 0;
    if (lt || yt) {
      be(at, z), we(at, at, M);
      for (let V = 0; V <= 1; V += 0.07692307692307693) ze(Tt, P, at), Ge(Tt, Tt, P, ne * V), g = [Tt[0], Tt[1]], k.push(g), Ke(At, P, at), Ge(At, At, P, ne * -V), $ = [At[0], At[1]], p.push($);
      X = g, h = $, yt && (I = !0);
      continue;
    }
    if (I = !1, H) {
      be(at, E), we(at, at, M), k.push(Ot(P, at)), p.push(Ft(P, at));
      continue;
    }
    Lo(at, Z, E, ft), be(at, at), we(at, at, M), ze(Tt, P, at), g = [Tt[0], Tt[1]], (F <= 1 || Ve(X, g) > b) && (k.push(g), X = g), Ke(At, P, at), $ = [At[0], At[1]], (F <= 1 || Ve(h, $) > b) && (p.push($), h = $), d = Y, z = E;
  }
  let T = [t[0].point[0], t[0].point[1]], L = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : Ft(t[0].point, [1, 1]), D = [], A = [];
  if (t.length === 1) {
    if (!(m || C) || y) return Eo(T, w || M);
  } else {
    m || C && t.length === 1 || (u ? D.push(...Fo(T, p[0], 13)) : D.push(...To(T, k[0], p[0])));
    let F = mn(Xo(t[t.length - 1].vector));
    C || m && t.length === 1 ? A.push(L) : r ? A.push(...Ao(L, F, M, 29)) : A.push(...Do(L, F, M));
  }
  return k.concat(A, p.reverse(), D);
}
const Ze = [0, 0];
function Qe(t) {
  return t != null && t >= 0;
}
function _o(t, e = {}) {
  var r;
  let { streamline: n = 0.5, size: o = 16, last: a = !1 } = e;
  if (t.length === 0) return [];
  let c = 0.15 + (1 - n) * 0.85, i = Array.isArray(t[0]) ? t : t.map(({ x: s, y: v, pressure: m = He }) => [s, v, m]);
  if (i.length === 2) {
    let s = i[1];
    i = i.slice(0, -1);
    for (let v = 1; v < 5; v++) i.push(Re(i[0], s, v / 4));
  }
  i.length === 1 && (i = [...i, [...Ft(i[0], Be), ...i[0].slice(2)]]);
  let l = [{ point: [i[0][0], i[0][1]], pressure: Qe(i[0][2]) ? i[0][2] : 0.25, vector: [...Be], distance: 0, runningLength: 0 }], f = !1, y = 0, u = l[0], x = i.length - 1;
  for (let s = 1; s < i.length; s++) {
    let v = a && s === x ? [i[s][0], i[s][1]] : Re(u.point, i[s], c);
    if (No(u.point, v)) continue;
    let m = Po(v, u.point);
    if (y += m, s < x && !f) {
      if (y < o) continue;
      f = !0;
    }
    ze(Ze, u.point, v), u = { point: v, pressure: Qe(i[s][2]) ? i[s][2] : He, vector: gn(Ze), distance: m, runningLength: y }, l.push(u);
  }
  return l[0].vector = ((r = l[1]) == null ? void 0 : r.vector) || [0, 0], l;
}
function Ho(t, e = {}) {
  return Oo(_o(t, e), e);
}
var Bo = Ho;
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
      for (let f = 0; f < 10; f++) {
        const y = Math.PI / 5 * f - Math.PI / 2, u = f % 2 === 0 ? c : i;
        l.push(`${o + u * Math.cos(y)},${a + u * Math.sin(y)}`);
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
function Mn(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [c, i] = t[0], l = n === "highlighter" ? e * 1.25 : e / 2;
    return `M ${c - l} ${i} A ${l} ${l} 0 1 0 ${c + l} ${i} A ${l} ${l} 0 1 0 ${c - l} ${i} Z`;
  }
  const o = n === "highlighter" ? { size: e * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: e, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 }, a = Bo(t, o);
  return a.length === 0 ? "" : a.reduce(
    (c, [i, l], f) => c + (f === 0 ? `M ${i} ${l}` : ` L ${i} ${l}`),
    ""
  ) + " Z";
}
function Dt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function zn(t) {
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
      const f = { bold: c.bold || l.tagName === "B" || l.tagName === "STRONG", italic: c.italic || l.tagName === "I" || l.tagName === "EM", underline: c.underline || l.tagName === "U" }, y = l.tagName === "DIV" || l.tagName === "P" || l.tagName === "LI";
      y && n[n.length - 1].length > 0 && n.push([]), o(l, f), y && n.push([]);
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
      return Jn(t);
    } catch {
      return;
    }
}
function Cn(t) {
  try {
    return Qn(t);
  } catch {
    return null;
  }
}
function re(t) {
  return t.html ? zn(t.html).map((e) => e.map((n) => n.text).join("")).join(`
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
  ].map(([y, u]) => {
    const x = y - o.x, r = u - o.y;
    return [o.x + x * a - r * c, o.y + x * c + r * a];
  }), l = i.map((y) => y[0]), f = i.map((y) => y[1]);
  return { minX: Math.min(...l), minY: Math.min(...f), maxX: Math.max(...l), maxY: Math.max(...f) };
}
function Sn(t, e, n) {
  const o = t.rotation ?? 0;
  if (!o) return { x: e, y: n };
  const a = Nt(t), c = Math.cos(-o), i = Math.sin(-o), l = e - a.x, f = n - a.y;
  return { x: a.x + l * c - f * i, y: a.y + l * i + f * c };
}
function ue(t, e, n, o, a, c) {
  const i = a - n, l = c - o, f = i * i + l * l, y = f === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * i + (e - o) * l) / f));
  return Math.hypot(t - (n + y * i), e - (o + y * l));
}
function ve(t, e, n, o, a, c) {
  const i = 8 / o;
  if (t.type === "arrow") {
    const y = (t.strokeWidth ?? 2.5) / o / 2 + i, u = Et(t, a ?? /* @__PURE__ */ new Map(), c);
    if (u.routing === "orthogonal" && u.pathPoints && u.pathPoints.length > 1) {
      for (let r = 1; r < u.pathPoints.length; r++) {
        const s = u.pathPoints[r - 1], v = u.pathPoints[r];
        if (ue(e, n, s.x, s.y, v.x, v.y) <= y) return !0;
      }
      return !1;
    }
    if (u.bend === 0) return ue(e, n, u.start.x, u.start.y, u.end.x, u.end.y) <= y;
    let x = u.start;
    for (let r = 1; r <= 16; r++) {
      const s = oe(r / 16, u.start, u.control, u.end);
      if (ue(e, n, x.x, x.y, s.x, s.y) <= y) return !0;
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
      const [s, v] = t.points[r - 1], [m, C] = t.points[r];
      if (ue(e, n, s, v, m, C) <= x) return !0;
    }
    return !1;
  }
  const l = Sn(t, e, n), f = _t(t);
  if (t.type === "frame") {
    const y = l.x >= f.minX - i && l.x <= f.maxX + i && l.y >= f.minY - i && l.y <= f.maxY + i && (l.x <= f.minX + i || l.x >= f.maxX - i || l.y <= f.minY + i || l.y >= f.maxY - i), u = l.x >= f.minX - i && l.x <= f.maxX + i && l.y >= f.minY - 28 / o && l.y <= f.minY;
    return y || u;
  }
  return l.x >= f.minX - i && l.x <= f.maxX + i && l.y >= f.minY - i && l.y <= f.maxY + i;
}
function Kt(t, e, n) {
  const o = _t(t), a = (o.minX + o.maxX) / 2, c = (o.minY + o.maxY) / 2, i = e - a, l = n - c;
  if (i === 0 && l === 0) return { x: a, y: c, side: "e" };
  const f = (o.maxX - o.minX) / 2, y = (o.maxY - o.minY) / 2, u = f === 0 ? 1 / 0 : Math.abs(f / i), x = y === 0 ? 1 / 0 : Math.abs(y / l);
  return u <= x ? { x: a + i * u, y: c + l * u, side: i >= 0 ? "e" : "w" } : { x: a + i * x, y: c + l * x, side: l >= 0 ? "s" : "n" };
}
function Xn(t, e, n, o) {
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
    const v = Nt(o), m = Nt(a);
    c = Kt(o, m.x, m.y), i = Kt(a, v.x, v.y);
  } else o ? c = Kt(o, i.x, i.y) : a && (i = Kt(a, c.x, c.y));
  const l = (c.x + i.x) / 2, f = (c.y + i.y) / 2, y = t.bend ?? 0;
  let u = { x: l, y: f };
  if (y !== 0) {
    const v = i.x - c.x, m = i.y - c.y, C = Math.hypot(v, m) || 1;
    u = { x: l + -m / C * y, y: f + v / C * y };
  }
  const x = !!(o || a), r = t.routing ?? (x ? "orthogonal" : y !== 0 ? "curved" : "straight");
  if (r !== "orthogonal") return { start: c, end: i, control: u, bend: y, routing: r };
  const s = Xn(n, t, o == null ? void 0 : o.id, a == null ? void 0 : a.id);
  return {
    start: c,
    end: i,
    control: u,
    bend: y,
    routing: r,
    pathPoints: hn(fn(c, i, s, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function oe(t, e, n, o) {
  const a = 1 - t;
  return { x: a * a * e.x + 2 * a * t * n.x + t * t * o.x, y: a * a * e.y + 2 * a * t * n.y + t * t * o.y };
}
function Yn(t, e, n, o, a) {
  const c = [];
  let i = 0;
  for (const l of t) {
    if (l.type !== "draw" || !l.points) {
      if (ve(l, e, n, a)) continue;
      c.push(l);
      continue;
    }
    const f = [];
    let y = [];
    for (const [x, r] of l.points)
      Math.hypot(x - e, r - n) <= o / a ? (y.length > 1 && f.push(y), y = []) : y.push([x, r]);
    if (y.length > 1 && f.push(y), f.length === 0) continue;
    const u = _t(l);
    f.forEach((x) => c.push({ ...l, id: `${l.id}-e${i++}`, points: x, x: u.minX, y: u.minY, w: u.maxX - u.minX, h: u.maxY - u.minY }));
  }
  return c;
}
function jo(t, e, n) {
  const o = 6 / n;
  let a = null, c = null;
  const i = [], l = [t.minX, (t.minX + t.maxX) / 2, t.maxX], f = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const y of e) {
    const u = it(y), x = [u.minX, (u.minX + u.maxX) / 2, u.maxX], r = [u.minY, (u.minY + u.maxY) / 2, u.maxY];
    for (const s of l) for (const v of x) {
      const m = v - s;
      Math.abs(m) <= o && (!a || Math.abs(m) < Math.abs(a.delta)) && (a = { delta: m, at: v });
    }
    for (const s of f) for (const v of r) {
      const m = v - s;
      Math.abs(m) <= o && (!c || Math.abs(m) < Math.abs(c.delta)) && (c = { delta: m, at: v });
    }
  }
  return a && i.push({ x1: a.at, y1: t.minY - 1e3, x2: a.at, y2: t.maxY + 1e3 }), c && i.push({ x1: t.minX - 1e3, y1: c.at, x2: t.maxX + 1e3, y2: c.at }), { dx: (a == null ? void 0 : a.delta) ?? 0, dy: (c == null ? void 0 : c.delta) ?? 0, guides: i };
}
const Ko = te.memo(function({
  shape: e,
  cameraZoom: n,
  color: o,
  isActive: a
}) {
  if (!e.points) return null;
  const c = e.drawMode ?? "pen", i = e.strokeWidth ?? 3, l = !a && e.points.length >= 2 ? Mn(e.points, i, c) : "";
  return /* @__PURE__ */ N(
    "path",
    {
      "data-canvas-vector-shape-id": e.id,
      "data-canvas-vector-shape-type": "draw",
      "data-canvas-draw-mode": c,
      "data-canvas-stroke-width": i,
      d: l || $n(e.points),
      fill: l ? o : "none",
      stroke: l ? "none" : o,
      strokeWidth: i / n,
      strokeOpacity: c === "highlighter" ? 0.35 : void 0,
      fillOpacity: c === "highlighter" ? 0.35 : void 0,
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
  marquee: f,
  strokeColorOf: y
}) {
  return /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ K("g", { transform: `scale(${a.z}) translate(${-a.x}, ${-a.y})`, children: [
    t.map((u) => {
      if (u.type === "draw" && u.points) {
        const g = e.has(u.id), $ = c.kind === "drawing" && c.id === u.id;
        return /* @__PURE__ */ N(
          Ko,
          {
            shape: u,
            cameraZoom: a.z,
            color: g ? U.blue : y(u),
            isActive: $
          },
          u.id
        );
      }
      if (u.type !== "arrow") return null;
      const x = e.has(u.id) ? U.blue : y(u), r = Et(u, n, o), s = u.strokeWidth ?? 2.5, v = s / a.z, m = Math.max(10, 8 + s * 2), C = Math.max(4, 2 + s), b = m / a.z, k = C / a.z, p = r.routing === "orthogonal" && r.pathPoints ? r.pathPoints : null, d = p && p.length > 1;
      let M, w;
      if (d)
        M = $e(p), w = vn(p);
      else if (r.routing === "curved") {
        M = `M ${r.start.x} ${r.start.y} Q ${r.control.x} ${r.control.y} ${r.end.x} ${r.end.y}`;
        const g = oe(0.94, r.start, r.control, r.end);
        w = Math.atan2(r.end.y - g.y, r.end.x - g.x);
      } else
        M = `M ${r.start.x} ${r.start.y} L ${r.end.x} ${r.end.y}`, w = Math.atan2(r.end.y - r.start.y, r.end.x - r.start.x);
      const z = d && p.length >= 2 ? ee(p[0], p[1]) : r.routing === "orthogonal" && r.start.side ? r.start.side === "e" ? 0 : r.start.side === "w" ? Math.PI : r.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : ee(r.start, r.end), X = u.strokeStyle === "dashed" ? `${8 / a.z} ${5 / a.z}` : u.strokeStyle === "dotted" ? `${1.5 / a.z} ${4 / a.z}` : void 0, h = (g, $, I, T) => g === "dot" ? /* @__PURE__ */ N("circle", { "data-canvas-arrow-dot-radius": C, cx: $, cy: I, r: k, fill: x }) : g === "none" ? null : /* @__PURE__ */ N(
        "polygon",
        {
          "data-canvas-arrowhead-size": m,
          points: `${$},${I} ${$ - b * Math.cos(T - 0.4)},${I - b * Math.sin(T - 0.4)} ${$ - b * Math.cos(T + 0.4)},${I - b * Math.sin(T + 0.4)}`,
          fill: x
        }
      );
      return /* @__PURE__ */ K("g", { "data-canvas-vector-shape-id": u.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": r.routing, "data-canvas-stroke-width": s, children: [
        /* @__PURE__ */ N("path", { d: M, fill: "none", stroke: x, strokeWidth: v, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: X }),
        h(u.arrowEnd ?? "arrow", r.end.x, r.end.y, w),
        h(u.arrowStart ?? "none", r.start.x, r.start.y, z + Math.PI)
      ] }, u.id);
    }),
    c.kind === "connect" && c.fromId !== void 0 && c.toX !== void 0 && c.toY !== void 0 && (() => {
      const u = n.get(c.fromId);
      if (!u) return null;
      const x = Kt(u, c.toX, c.toY), r = c.hoverId ? n.get(c.hoverId) : null, s = r ? Kt(r, x.x, x.y) : { x: c.toX, y: c.toY }, v = r ? fn(x, s, Xn(o, { id: "__preview" }, u.id, r.id)) : [x, s];
      return /* @__PURE__ */ K("g", { children: [
        /* @__PURE__ */ N("path", { d: $e(v), stroke: U.blue, strokeWidth: 2 / a.z, strokeDasharray: `${5 / a.z} ${4 / a.z}` }),
        r ? /* @__PURE__ */ N("rect", { x: it(r).minX - 3 / a.z, y: it(r).minY - 3 / a.z, width: it(r).maxX - it(r).minX + 6 / a.z, height: it(r).maxY - it(r).minY + 6 / a.z, fill: "none", stroke: U.blue, strokeWidth: 2 / a.z, rx: 6 / a.z }) : /* @__PURE__ */ N("circle", { cx: s.x, cy: s.y, r: 5 / a.z, fill: U.blue })
      ] });
    })(),
    i && /* @__PURE__ */ N("circle", { cx: i.x, cy: i.y, r: Uo / a.z, fill: U.roseSoft, stroke: U.rose, strokeWidth: 1 / a.z }),
    l.map((u, x) => /* @__PURE__ */ N("line", { x1: u.x1, y1: u.y1, x2: u.x2, y2: u.y2, stroke: U.pink, strokeWidth: 1 / a.z, strokeDasharray: `${4 / a.z} ${4 / a.z}` }, `guide-${x}`)),
    f && /* @__PURE__ */ N("rect", { x: Math.min(f.startX, f.curX), y: Math.min(f.startY, f.curY), width: Math.abs(f.curX - f.startX), height: Math.abs(f.curY - f.startY), fill: U.marqueeFill, stroke: U.blue, strokeWidth: 1 / a.z })
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
function Nn(t) {
  return Ro.has(t.trim().toLowerCase());
}
function In(t) {
  const e = me(t);
  return e ? Nn(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function Zo(t) {
  return me(t).split(",").map((e) => e.trim()).filter(Boolean).map(In).filter(Boolean).join(", ");
}
function Pn(t) {
  return me(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Qt(t) {
  return t.split(",").map((e) => me(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !Nn(e));
}
const he = Array.from(/* @__PURE__ */ new Set([
  ...qo,
  ...Qt(Pt.sans.stack),
  ...Qt(Pt.serif.stack),
  ...Qt(Pt.mono.stack),
  ...Qt(Pt.gothic.stack),
  ...Qt(Pt.korean.stack)
]));
function Qo() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return he;
  const t = he.filter((e) => {
    const n = In(e);
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
}, tr = 24, er = 28, Ln = 720;
function mt(t) {
  return t.fontSize ?? Jo[t.type] ?? 14;
}
function gt(t) {
  var e;
  if (!t.fontFamily) return Pt.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = Pn(to(t.customFontFamily ?? ""));
    } catch {
    }
    return Zo(n) || Pt.sans.stack;
  }
  return ((e = Pt[t.fontFamily]) == null ? void 0 : e.stack) ?? Pt.sans.stack;
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
    w: Math.min(Ln, Math.max(tr, Math.ceil(t))),
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
    maxWidth: `${Ln}px`,
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
  renderEditor: f,
  renderShapeBody: y,
  setEditingId: u,
  onBendHandleDown: x,
  onOrthogonalSegmentHandleDown: r,
  onResizeHandleDown: s,
  onRotateHandleDown: v,
  onConnectHandleDown: m,
  onArrowEndpointDown: C
}) {
  return /* @__PURE__ */ K(Bt, { children: [
    /* @__PURE__ */ N("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((b) => {
      if (b.type === "draw") return null;
      if (b.type === "arrow") {
        const d = Et(b, a, c), M = d.routing === "orthogonal" && d.pathPoints ? Ye(d.pathPoints) : d.routing === "curved" ? oe(0.5, d.start, d.control, d.end) : { x: (d.start.x + d.end.x) / 2, y: (d.start.y + d.end.y) / 2 }, w = n === b.id, z = pe(b), X = e.has(b.id), h = re(b).trim(), g = z || (X ? "관계 입력" : "");
        return !g && !w ? null : /* @__PURE__ */ N(te.Fragment, { children: /* @__PURE__ */ N("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: M.x - 90, top: M.y - 18, width: 180, height: 36 }, onDoubleClick: ($) => {
          $.stopPropagation(), u(b.id);
        }, children: (g || w) && /* @__PURE__ */ N(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": h ? `관계 설명: ${h}` : "관계 설명 입력",
            title: w ? void 0 : h ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${l ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: mt(b),
              fontFamily: gt(b),
              maxWidth: "100%",
              minWidth: w ? 120 / o.z : void 0,
              minHeight: w ? 28 / o.z : void 0,
              color: b.textColor
            },
            children: w ? f("text-center whitespace-nowrap") : /* @__PURE__ */ N("span", { dangerouslySetInnerHTML: { __html: g } }, "canvas-view")
          }
        ) }) }, b.id);
      }
      const k = e.has(b.id), p = _t(b);
      return /* @__PURE__ */ K(
        "div",
        {
          "data-canvas-shape-id": b.id,
          "data-canvas-shape-type": b.type,
          "data-canvas-selected": k ? "true" : void 0,
          "data-canvas-text-align": kt(b),
          "data-canvas-text-color": b.textColor,
          "data-canvas-font-size": mt(b),
          "data-canvas-font-family": b.fontFamily === "custom" ? b.customFontFamily ?? "custom" : b.fontFamily ?? "sans",
          "data-canvas-manual-size": b.manualSize ? "true" : void 0,
          "data-canvas-group-id": b.groupId,
          "data-canvas-list-kind": or(b),
          "data-canvas-x": b.x,
          "data-canvas-y": b.y,
          "data-canvas-width": b.w,
          "data-canvas-height": b.h,
          className: "absolute",
          style: { left: p.minX, top: p.minY, width: p.maxX - p.minX, height: p.maxY - p.minY, transform: b.rotation ? `rotate(${b.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (d) => {
            d.stopPropagation(), ir.has(b.type) && u(b.id);
          },
          children: [
            y(b),
            k && /* @__PURE__ */ K(Bt, { children: [
              /* @__PURE__ */ N("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${U.blue}` } }),
              e.size === 1 && /* @__PURE__ */ K(Bt, { children: [
                ["nw", "ne", "sw", "se"].map((d) => /* @__PURE__ */ N("div", { "data-canvas-resize-handle": d, onPointerDown: (M) => s(M, b, d), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${d}-resize`, left: d.includes("w") ? -5 / o.z : void 0, right: d.includes("e") ? -5 / o.z : void 0, top: d.includes("n") ? -5 / o.z : void 0, bottom: d.includes("s") ? -5 / o.z : void 0 } }, d)),
                /* @__PURE__ */ N("div", { onPointerDown: (d) => v(d, b), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                cr.has(b.type) && ["n", "s", "w", "e"].map((d) => /* @__PURE__ */ N("div", { onPointerDown: (M) => m(M, b), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...d === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : d === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : d === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${d}`))
              ] })
            ] })
          ]
        },
        b.id
      );
    }) }),
    e.size === 1 && c.filter((b) => b.type === "arrow" && e.has(b.id)).map((b) => {
      const k = Et(b, a, c), p = (d, M) => ({
        left: (d.x - o.x) * o.z - M / 2,
        top: (d.y - o.y) * o.z - M / 2
      });
      return /* @__PURE__ */ K(te.Fragment, { children: [
        k.routing === "orthogonal" && k.pathPoints && k.pathPoints.length > 2 ? k.pathPoints.slice(0, -1).map((d, M) => {
          var X;
          const w = (X = k.pathPoints) == null ? void 0 : X[M + 1];
          if (!w) return null;
          const z = { x: (d.x + w.x) / 2, y: (d.y + w.y) / 2 };
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-segment-handle": M, onPointerDown: (h) => r(h, b, M), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...p(z, 12), cursor: d.x === w.x ? "ew-resize" : "ns-resize" } }, `segment-${M}`);
        }) : k.routing === "curved" && /* @__PURE__ */ N("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (d) => x(d, b), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (k.start.x + k.end.x) / 2 * o.z - o.x * o.z - 5, top: (k.start.y + k.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map((d) => {
          const M = d === "start" ? k.start : k.end;
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-endpoint": d, onPointerDown: (w) => C(w, b, d), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...p(M, 12), cursor: "grab" } }, d);
        })
      ] }, `arrow-handles-${b.id}`);
    }),
    i == null ? void 0 : i.map((b) => /* @__PURE__ */ K("div", { className: "absolute pointer-events-none z-40", style: { left: (b.x - o.x) * o.z, top: (b.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ N("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ N("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: b.color, stroke: U.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ N("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: b.color }, children: b.name })
    ] }, b.id))
  ] });
}
function Ie(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function lr(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), Ie(t) && e.push("diagram"), e;
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
  let f = 0;
  return l !== 0 && (c === n ? f = 60 * ((o - a) / l % 6) : c === o ? f = 60 * ((a - n) / l + 2) : f = 60 * ((n - o) / l + 4)), f < 0 && (f += 360), { hue: f, saturation: c === 0 ? 0 : l / c, value: c };
}
function en({ hue: t, saturation: e, value: n }) {
  const o = (t % 360 + 360) % 360, a = n * e, c = a * (1 - Math.abs(o / 60 % 2 - 1)), i = n - a;
  let l = 0, f = 0, y = 0;
  return o < 60 ? [l, f, y] = [a, c, 0] : o < 120 ? [l, f, y] = [c, a, 0] : o < 180 ? [l, f, y] = [0, a, c] : o < 240 ? [l, f, y] = [0, c, a] : o < 300 ? [l, f, y] = [c, 0, a] : [l, f, y] = [a, 0, c], `#${xe((l + i) * 255)}${xe((f + i) * 255)}${xe((y + i) * 255)}`;
}
function hr(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function xr({ value: t, onChange: e }) {
  const [n, o] = ot(() => tn(t)), a = q(null), c = q(null), i = q(null);
  Yt(() => {
    const k = tn(t);
    o((p) => hr(p, k) ? p : k);
  }, [t]);
  const l = (k) => {
    o(k), e(en(k));
  }, f = (k) => {
    var z;
    const p = (z = a.current) == null ? void 0 : z.getBoundingClientRect();
    if (!p) return;
    const d = k.clientX - (p.left + p.width / 2), M = k.clientY - (p.top + p.height / 2), w = Math.atan2(M, d) * 180 / Math.PI + 90;
    l({ ...n, hue: (w + 360) % 360 });
  }, y = (k) => {
    var d;
    const p = (d = c.current) == null ? void 0 : d.getBoundingClientRect();
    p && l({
      ...n,
      saturation: Ht((k.clientX - p.left) / p.width, 0, 1),
      value: Ht(1 - (k.clientY - p.top) / p.height, 0, 1)
    });
  }, u = (k, p) => {
    var d, M;
    p.button !== 0 && p.pointerType !== "touch" || (p.preventDefault(), p.stopPropagation(), i.current = k, (M = (d = p.currentTarget).setPointerCapture) == null || M.call(d, p.pointerId), k === "hue" ? f(p) : y(p));
  }, x = (k) => {
    i.current && (k.preventDefault(), i.current === "hue" ? f(k) : y(k));
  }, r = (k) => {
    var p, d;
    i.current = null;
    try {
      (d = (p = k.currentTarget).releasePointerCapture) == null || d.call(p, k.pointerId);
    } catch {
      return;
    }
  }, s = (n.hue - 90) * Math.PI / 180, v = 53, m = {
    left: 66 + Math.cos(s) * v,
    top: 66 + Math.sin(s) * v
  }, C = en({ hue: n.hue, saturation: 1, value: 1 }), b = (k) => l({ ...n, hue: (n.hue + k + 360) % 360 });
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
        onPointerDown: (k) => u("hue", k),
        onPointerMove: x,
        onPointerUp: r,
        onKeyDown: (k) => {
          (k.key === "ArrowLeft" || k.key === "ArrowDown") && (k.preventDefault(), b(-1)), (k.key === "ArrowRight" || k.key === "ArrowUp") && (k.preventDefault(), b(1));
        },
        children: [
          /* @__PURE__ */ N("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ N("span", { className: "canvas-color-wheel-hue-marker", style: { left: m.left, top: m.top } })
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
        onPointerDown: (k) => u("sv", k),
        onPointerMove: x,
        onPointerUp: r,
        onKeyDown: (k) => {
          const p = k.shiftKey ? 0.1 : 0.02;
          k.key === "ArrowLeft" && (k.preventDefault(), l({ ...n, saturation: Ht(n.saturation - p, 0, 1) })), k.key === "ArrowRight" && (k.preventDefault(), l({ ...n, saturation: Ht(n.saturation + p, 0, 1) })), k.key === "ArrowDown" && (k.preventDefault(), l({ ...n, value: Ht(n.value - p, 0, 1) })), k.key === "ArrowUp" && (k.preventDefault(), l({ ...n, value: Ht(n.value + p, 0, 1) }));
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
      return En(t);
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
      return En(t);
  }
}
function En(t) {
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
  showPalette: f,
  installedFontFamilies: y,
  setShowPalette: u,
  setActiveColor: x,
  patchSelected: r,
  applyFormat: s,
  applyList: v,
  applyCustomFontFamily: m
}) {
  var Ct, St;
  const C = i ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", b = e.length > 1, k = e.some((S) => !!S.groupId), p = t.type === "draw", d = p || on(t) && !ke(t) ? "stroke" : ke(t) ? "fill" : "text", [M, w] = ot(d), [z, X] = ot("");
  Gt(() => w(d), [d, t.id]);
  const h = M === "text" ? jt(t) : M === "stroke" ? t.strokeColor ?? (t.color ? rt[t.color].border : U.ink) : fe(t);
  Gt(() => X(Jt(h).toUpperCase()), [h]);
  const g = Jt(h), $ = (S) => {
    r(p || M === "stroke" ? { strokeColor: S } : M === "text" ? { textColor: S } : { fillColor: S });
  }, I = (S) => {
    x(S), r(p || M === "stroke" ? { color: S, strokeColor: void 0 } : M === "text" ? { textColor: rt[S].text } : { color: S, fillColor: void 0 }), u(!1);
  }, T = q(null), [L, D] = ot({ width: 380, height: 260 });
  Gt(() => {
    const S = T.current;
    if (!S) return;
    const _ = () => {
      const vt = Math.max(1, Math.ceil(S.getBoundingClientRect().width)), Xt = Math.max(1, Math.ceil(S.getBoundingClientRect().height));
      D((qt) => qt.width === vt && qt.height === Xt ? qt : { width: vt, height: Xt });
    };
    if (_(), typeof ResizeObserver > "u") return;
    const R = new ResizeObserver(_);
    return R.observe(S), () => R.disconnect();
  }, [l, y.length, i, t, f]);
  const A = L.width, F = L.height, Y = e.reduce((S, _) => {
    const R = it(_);
    return {
      minX: Math.min(S.minX, R.minX),
      minY: Math.min(S.minY, R.minY),
      maxX: Math.max(S.maxX, R.maxX),
      maxY: Math.max(S.maxY, R.maxY)
    };
  }, it(t)), P = (Y.minX - a.x) * a.z, E = (Y.minY - a.y) * a.z, O = (Y.maxX - a.x) * a.z, G = (Y.maxY - a.y) * a.z, H = Math.max(8, c.width - A - 8), et = Math.max(8, c.height - F - 8), Q = (S, _) => ({ left: Math.min(Math.max(8, S), H), top: Math.min(Math.max(8, _), et) }), Z = [
    Q((P + O) / 2 - A / 2, E - F - 12),
    Q((P + O) / 2 - A / 2, G + 12),
    Q((c.width - A) / 2, 12),
    Q(P - A - 12, E + (G - E - F) / 2),
    Q(O + 12, E + (G - E - F) / 2)
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
  const lt = Z[0], yt = (S, _) => {
    const R = Math.max(0, Math.min(S.left + A, _.right) - Math.max(S.left, _.left)), vt = Math.max(0, Math.min(S.top + F, _.bottom) - Math.max(S.top, _.top));
    return R * vt;
  }, V = ((Ct = Z.map((S) => ({
    candidate: S,
    overlap: ft.reduce((_, R) => _ + yt(S, R), 0),
    distance: Math.hypot(S.left - lt.left, S.top - lt.top)
  })).sort((S, _) => S.overlap - _.overlap || S.distance - _.distance)[0]) == null ? void 0 : Ct.candidate) ?? lt, J = mt(t), ct = e.every(vr), Mt = new Set(e.map(nn)).size === 1 ? nn(t) : void 0, dt = lr(t), st = t.type === "arrow" ? "arrow" : dt[0] ?? "color", [nt, bt] = ot(st);
  Gt(() => {
    dt.includes(nt) || bt(st);
  }, [st, dt, nt]);
  const It = t.type === "arrow" && !!((St = t.orthogonalWaypoints) != null && St.length), zt = t.type === "arrow" ? t.arrowStart ?? "none" : "none", ut = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", W = (S, _, R, vt, Xt = vt) => /* @__PURE__ */ N("button", { type: "button", title: vt, "aria-label": Xt, onClick: R, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${_ ? "bg-blue-600 text-white" : C}`, children: S }), B = (S) => /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: S }), j = (S, _, R, vt, Xt = !1) => /* @__PURE__ */ N(
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
  return /* @__PURE__ */ K("div", { ref: T, "data-canvas-inspector": p ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${i ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: V.left, top: V.top }, onPointerDown: (S) => {
    S.stopPropagation();
    const _ = S.target instanceof Element ? S.target : null;
    _ != null && _.closest("input, select, textarea") || S.preventDefault();
  }, onClick: (S) => S.stopPropagation(), children: [
    b ? /* @__PURE__ */ K("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      e.length,
      "개 선택됨"
    ] }) : /* @__PURE__ */ N("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: dt.map((S) => /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": nt === S, onClick: () => bt(S), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${nt === S ? "bg-blue-600 text-white" : C}`, children: tt[S] }, S)) }),
    /* @__PURE__ */ K("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: b || nt === "color" || p ? void 0 : "none" }, children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: p ? "그리기" : "색상" }),
      /* @__PURE__ */ N("button", { type: "button", title: p ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": p ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => u((S) => !S), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${i ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ N("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ N("span", { className: "canvas-color-wheel-trigger-dot", style: { background: g } }) }) }),
      f && /* @__PURE__ */ K("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${i ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !p && /* @__PURE__ */ K("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          ke(t) && /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": M === "fill", onClick: () => w("fill"), className: M === "fill" ? "is-active" : "", children: "배경" }),
          on(t) && /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": M === "stroke", onClick: () => w("stroke"), className: M === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": M === "text", onClick: () => w("text"), className: M === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ N("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: eo.map((S) => /* @__PURE__ */ N("button", { type: "button", title: rt[S].label, "aria-label": `색 ${rt[S].label}`, onClick: () => I(S), className: "canvas-color-preset", style: { background: rt[S].bg, borderColor: rt[S].border, outline: t.color === S && !t.fillColor && !t.strokeColor ? `2px solid ${U.blue}` : void 0, outlineOffset: 1 } }, S)) }),
        /* @__PURE__ */ N(xr, { value: h, onChange: $ }),
        /* @__PURE__ */ K("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ N("span", { children: "#" }),
          /* @__PURE__ */ N(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: z.replace(/^#/, ""),
              onChange: (S) => {
                const _ = S.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                X(`#${_}`.toUpperCase()), _.length === 6 && $(`#${_}`);
              },
              onBlur: () => X(Jt(h).toUpperCase()),
              onPointerDown: (S) => S.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !b && nt !== "color" && !p && /* @__PURE__ */ K(Bt, { children: [
      /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ K("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: jt(t), color: U.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ N("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ N("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? jt(t), onChange: (S) => r({ textColor: S.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ K("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${i ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => r({ fontSize: Math.max(8, J - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${C}`, children: /* @__PURE__ */ N(ao, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ N("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: J }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => r({ fontSize: Math.min(96, J + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${C}`, children: /* @__PURE__ */ N(io, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ K("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${i ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ N("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (S) => {
            const _ = nr(S.target.value);
            r(_ === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: _, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${i ? "text-slate-200" : "text-slate-700"}`, children: Go.map((S) => /* @__PURE__ */ N("option", { value: S, className: i ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: Pt[S].label }, S)) }),
          /* @__PURE__ */ N(co, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ K(Bt, { children: [
          /* @__PURE__ */ N("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (S) => m(S.target.value), onChange: (S) => S.currentTarget.value && m(S.currentTarget.value), onKeyDown: (S) => {
            S.key === "Enter" && (S.preventDefault(), m(S.currentTarget.value));
          }, onDoubleClick: (S) => S.stopPropagation(), onPointerDown: (S) => S.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${i ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ N("datalist", { id: `canvas-font-families-${t.id}`, children: y.map((S) => /* @__PURE__ */ N("option", { value: S }, S)) })
        ] })
      ] }),
      /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${i ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", so, "왼쪽 정렬"], ["center", lo, "가운데 정렬"], ["right", uo, "오른쪽 정렬"]].map(([S, _, R]) => /* @__PURE__ */ N("button", { type: "button", "aria-label": R, title: R, onClick: () => r({ textAlign: S }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${kt(t) === S ? "bg-blue-600 text-white shadow-sm" : C}`, children: /* @__PURE__ */ N(_, { className: "w-4 h-4" }) }, S)) }),
        l && /* @__PURE__ */ K(Bt, { children: [
          /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", ho, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", xo, "번호 목록"]].map(([S, _, R]) => /* @__PURE__ */ N("button", { type: "button", onClick: () => v(S), "aria-label": R, title: R, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${C}`, children: _ ? /* @__PURE__ */ N(_, { className: "w-4 h-4" }) : /* @__PURE__ */ N("span", { className: "text-base leading-none", children: "–" }) }, S)) }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: fo, label: "굵게" }, { cmd: "italic", Icon: vo, label: "기울임" }, { cmd: "underline", Icon: po, label: "밑줄" }].map(({ cmd: S, Icon: _, label: R }) => /* @__PURE__ */ N("button", { type: "button", onClick: () => s(S), "aria-label": R, title: R, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${C}`, children: /* @__PURE__ */ N(_, { className: "w-4 h-4" }) }, S)) })
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
            It && W("자동", !1, () => r({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
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
      j(mo, "그룹 (Ctrl+G)", n.group, b),
      j(go, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, k),
      j(yo, "복제", n.duplicateSelected, !0),
      j(wo, "삭제 (Delete)", n.deleteSelected, !0, !0)
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
  renderDiagram: f
}) {
  const y = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", u = (r, s) => /* @__PURE__ */ N(
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
      onDoubleClick: (v) => v.stopPropagation(),
      onKeyDown: c,
      className: `${y} ${r}`,
      style: s
    },
    "canvas-editor"
  );
  return { renderEditor: u, renderShapeBody: (r) => {
    const s = rt[r.color ?? "blue"], v = e === r.id, m = pe(r);
    if (r.type === "frame") {
      const w = r.strokeWidth ?? 2;
      return /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-stroke-width": w,
          className: "w-full h-full rounded",
          style: { border: `${w / t.z}px solid ${n ? U.slate600 : U.slate400}` },
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
              children: v ? u("", { fontSize: 13 / t.z }) : re(r) || "프레임"
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
          children: v ? u("font-medium", { color: jt(r), fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }) : m ? /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: jt(r), fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }, dangerouslySetInnerHTML: { __html: m } }, "canvas-view") : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: jt(r), fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (r.type === "card") {
      const w = r.cardStyle === "glass";
      return Ie(r) && f && !v ? /* @__PURE__ */ N("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: f(r) }) : /* @__PURE__ */ K(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: w ? U.glassFill : r.fillColor ?? U.slateCard,
            backdropFilter: w ? "blur(12px)" : void 0,
            WebkitBackdropFilter: w ? "blur(12px)" : void 0,
            border: `1px solid ${w ? U.glassBorder : U.darkBorder}`,
            boxShadow: w ? U.glassShadow : U.cardShadow
          },
          children: [
            /* @__PURE__ */ K(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (z) => z.stopPropagation(),
                onDoubleClick: (z) => z.stopPropagation(),
                onBlur: (z) => {
                  const h = (z.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  i((g) => g.map(($) => $.id === r.id ? { ...$, category: h } : $)), l();
                },
                onKeyDown: (z) => {
                  z.key === "Enter" && (z.preventDefault(), z.currentTarget.blur());
                },
                children: [
                  "[ ",
                  r.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            v ? u("flex-1 font-medium", { color: r.textColor ?? U.white, fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: r.textColor ?? U.white, fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }, dangerouslySetInnerHTML: { __html: m } }, "canvas-view"),
            /* @__PURE__ */ K("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              r.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (r.type === "text") {
      const w = n ? "text-slate-100" : "text-slate-900", z = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${w}`,
        style: { color: r.textColor, fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }
      };
      return v ? u(`font-medium ${w}`, z.style) : m ? /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-text-view": !0,
          ...z,
          dangerouslySetInnerHTML: { __html: m }
        },
        "canvas-view"
      ) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, ...z, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (r.type === "image") {
      const w = Ce(r.src);
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
    const C = fe(r), b = bn(r), k = jt(r);
    if (r.type === "triangle" || r.type === "diamond" || r.type === "hexagon" || r.type === "star") {
      const w = r.strokeWidth ?? 2;
      return /* @__PURE__ */ K("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${r.w} ${r.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ N("polygon", { "data-canvas-stroke-width": w, points: kn(r.type, r.w, r.h), fill: C, stroke: b, strokeWidth: w / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ N("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: k }, children: v ? u("font-medium", { color: k, fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }, dangerouslySetInnerHTML: { __html: m } }, "canvas-view") })
      ] });
    }
    const d = Ce(r.src), M = r.type === "rect" || r.type === "ellipse" ? r.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ N(
      "div",
      {
        "data-canvas-stroke-width": M,
        className: `w-full h-full flex items-center justify-center p-3 ${r.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: C, border: `${M / t.z}px solid ${b}`, color: k },
        children: v ? u("font-medium", { color: k, fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }) : /* @__PURE__ */ K("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: mt(r), fontFamily: gt(r), textAlign: kt(r) }, children: [
          /* @__PURE__ */ N("div", { dangerouslySetInnerHTML: { __html: m } }),
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
function gr({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: o,
  selected: a,
  editingId: c,
  boardIdentity: i
}) {
  const [l, f] = ot({ width: 0, height: 0 });
  Yt(() => {
    const v = t.current;
    if (!v) return;
    let m = -1, C = -1;
    const b = (p = v.clientWidth, d = v.clientHeight) => {
      p === m && d === C || (m = p, C = d, f({ width: p, height: d }));
    };
    if (b(), typeof ResizeObserver < "u") {
      const p = new ResizeObserver((d) => {
        var w;
        const M = (w = d[0]) == null ? void 0 : w.contentRect;
        b((M == null ? void 0 : M.width) ?? v.clientWidth, (M == null ? void 0 : M.height) ?? v.clientHeight);
      });
      return p.observe(v), () => p.disconnect();
    }
    const k = () => b();
    return window.addEventListener("resize", k), () => window.removeEventListener("resize", k);
  }, [i, t]);
  const y = Lt(() => new Map(n.map((v) => [v.id, v])), [n]), u = Lt(
    () => [...n].sort((v, m) => (v.type === "frame" ? -1 : 0) - (m.type === "frame" ? -1 : 0)),
    [n]
  ), x = Lt(() => {
    if (!t.current || l.width <= 0 || l.height <= 0) return null;
    const v = 200 / o.z;
    return {
      minX: o.x - v,
      minY: o.y - v,
      maxX: o.x + l.width / o.z + v,
      maxY: o.y + l.height / o.z + v
    };
  }, [o, t, l]), r = xt((v) => {
    if (!x) return !1;
    if (v.id === c || a.has(v.id)) return !0;
    if (v.type === "arrow") {
      const C = Et(v, y, e.current), k = (C.routing === "orthogonal" ? C.pathPoints : null) ?? [C.start, C.end], p = Math.min(...k.map((z) => z.x)), d = Math.max(...k.map((z) => z.x)), M = Math.min(...k.map((z) => z.y)), w = Math.max(...k.map((z) => z.y));
      return d >= x.minX && p <= x.maxX && w >= x.minY && M <= x.maxY;
    }
    const m = it(v);
    return m.maxX >= x.minX && m.minX <= x.maxX && m.maxY >= x.minY && m.minY <= x.maxY;
  }, [c, a, y, e, x]), s = Lt(
    () => u.filter(r),
    [r, u]
  );
  return { shapeById: y, visiblePaintOrder: s };
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
    let v;
    try {
      v = Se(s.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const m = s.scrollHeight;
    n((C) => C.map((b) => {
      if (b.id !== e) return b;
      const k = Ie(b) ? { ...b, text: re({ ...b, html: v, text: void 0 }), html: void 0 } : { ...b, html: v, text: void 0 };
      if (b.type === "text")
        return b.manualSize ? k : { ...k, ...ar(s, b) };
      if (b.type === "arrow") return k;
      const p = b.type === "note" ? 32 : b.type === "card" ? 96 : (
        // category header + type footer
        (b.type === "frame", 24)
      ), d = Math.max(b.h, m + p);
      return { ...k, h: d };
    })), a();
  }, [e, a]), l = (s) => {
    var v;
    (v = t.current) == null || v.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(s), i();
  }, f = () => {
    var C;
    const s = (C = window.getSelection()) == null ? void 0 : C.anchorNode, v = s instanceof Element ? s : s == null ? void 0 : s.parentElement, m = v == null ? void 0 : v.closest("ul, ol");
    return m instanceof HTMLElement ? m : null;
  }, y = (s, v, m) => {
    const C = document.createElement(v);
    for (; s.firstChild; ) C.append(s.firstChild);
    return s.replaceWith(C), C;
  }, u = (s) => {
    const v = t.current;
    if (!v) return;
    v.focus();
    const m = f();
    if (s === "number")
      if ((m == null ? void 0 : m.tagName) === "OL")
        m.removeAttribute("data-list-style");
      else if ((m == null ? void 0 : m.tagName) === "UL")
        y(m, "ol");
      else {
        document.execCommand("insertOrderedList");
        const C = f();
        C == null || C.removeAttribute("data-list-style");
      }
    else if ((m == null ? void 0 : m.tagName) === "UL") {
      const C = m.dataset.listStyle;
      s === C ? document.execCommand("insertUnorderedList") : m.dataset.listStyle = s;
    } else {
      (m == null ? void 0 : m.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const C = f();
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
      const v = window.getSelection();
      if (v && v.isCollapsed && v.anchorNode) {
        const m = v.anchorNode, C = m.textContent || "", b = v.anchorOffset, k = C.slice(0, b).trim();
        if (!f()) {
          if (k === "-" || k === "–") {
            s.preventDefault(), m.textContent = C.slice(b), u("dash");
            return;
          }
          if (k === "*") {
            s.preventDefault(), m.textContent = C.slice(b), u("bullet");
            return;
          }
          if (k === "1.") {
            s.preventDefault(), m.textContent = C.slice(b), u("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (s) => {
    const v = Pn(s);
    if (!v) {
      c({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    c({
      fontFamily: "custom",
      customFontFamily: v
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
  const c = q(null), i = q(null), [l, f] = ot([]), y = n !== void 0 && o !== void 0, u = q(/* @__PURE__ */ new WeakMap()), x = Lt(() => {
    const W = u.current;
    return (y ? n ?? [] : l).map((B) => {
      let j = W.get(B);
      return j === void 0 && (j = Cn(B), W.set(B, j)), j;
    }).filter((B) => B !== null);
  }, [y, n, l]), r = q(o);
  r.current = o;
  const s = xt((W) => {
    const B = r.current;
    if (!B) {
      f(W);
      return;
    }
    B(typeof W == "function" ? W : () => W);
  }, []), [v, m] = ot({ x: -400, y: -300, z: 1 }), [C, b] = ot(/* @__PURE__ */ new Set()), [k, p] = ot(null), [d, M] = ot({ kind: "none" }), [w, z] = ot(!1), [X, h] = ot([]), [g, $] = ot(""), [I, T] = ot(!1), [L, D] = ot(null), [A, F] = ot("blue"), [Y, P] = ot(he), E = q(A);
  E.current = A;
  const O = q([]), G = q([]), H = q(null), et = q(/* @__PURE__ */ new Map()), Q = q(x), Z = q(v), ft = q(e), lt = q(C), yt = q(k);
  Q.current = x, Z.current = v, ft.current = e, lt.current = C, yt.current = k;
  const V = q({ kind: "none" }), J = xt((W) => {
    V.current = W, M(W);
  }, []), ct = xt((W) => {
    lt.current = W, b(W);
  }, []);
  Gt(() => {
    var B;
    const W = /* @__PURE__ */ new Set();
    lt.current = W, yt.current = null, et.current.clear(), O.current = [], G.current = [], H.current = null, J({ kind: "none" }), b(W), p(null), z(!1), h([]), D(null), $(""), (B = c.current) == null || B.focus();
  }, [J, t]), Yt(() => {
    let W = !1;
    const B = () => {
      const tt = Qo();
      W || P(tt);
    };
    if (B(), typeof document > "u" || !("fonts" in document)) return;
    const j = () => B();
    return document.fonts.addEventListener("loadingdone", j), () => {
      W = !0, document.fonts.removeEventListener("loadingdone", j);
    };
  }, [t]);
  const Mt = (k ? x.find((W) => W.id === k) : void 0) !== void 0;
  Gt(() => {
    if (!k || !Mt) return;
    const W = () => {
      const j = i.current, tt = Q.current.find((S) => S.id === k);
      if (!j || !tt || (j.dataset.seeded !== k && (j.innerHTML = pe(tt), j.dataset.seeded = k), document.activeElement === j)) return;
      j.focus();
      const Ct = document.createRange();
      Ct.selectNodeContents(j), Ct.collapse(!1);
      const St = window.getSelection();
      St == null || St.removeAllRanges(), St == null || St.addRange(Ct);
    };
    W();
    const B = requestAnimationFrame(W);
    return () => cancelAnimationFrame(B);
  }, [k, Mt]);
  const dt = xt((W) => {
    s((B) => {
      const j = typeof W == "function" ? W(B) : W;
      return O.current.push(B), O.current.length > 100 && O.current.shift(), G.current = [], j;
    }), a();
  }, [a]), st = xt((W) => W.size === 0 ? !1 : (dt((B) => B.filter((j) => W.has(j.id) ? !1 : j.type !== "arrow" ? !0 : !(j.fromId && W.has(j.fromId)) && !(j.toId && W.has(j.toId)))), ct(/* @__PURE__ */ new Set()), $(`${W.size}개 삭제됨`), !0), [dt, ct]), nt = xt(() => {
    H.current = Q.current;
  }, []), bt = xt(() => {
    const W = H.current;
    H.current = null, !(!W || W === Q.current) && (O.current.push(W), O.current.length > 100 && O.current.shift(), G.current = [], a());
  }, [a]), It = xt((W, B) => {
    var Ct;
    const j = (Ct = c.current) == null ? void 0 : Ct.getBoundingClientRect(), tt = Z.current;
    return j ? { x: (W - j.left) / tt.z + tt.x, y: (B - j.top) / tt.z + tt.y } : { x: 0, y: 0 };
  }, []), zt = xt(() => {
    var j;
    const W = (j = c.current) == null ? void 0 : j.getBoundingClientRect(), B = Z.current;
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
    setLocalShapes: f,
    controlled: y,
    shapes: x,
    setShapes: s,
    camera: v,
    setCamera: m,
    cameraRef: Z,
    selected: C,
    setSelected: b,
    selectedRef: lt,
    editingId: k,
    setEditingId: p,
    editingIdRef: yt,
    interaction: d,
    interactionRef: V,
    applyInteraction: J,
    isSpaceDown: w,
    setIsSpaceDown: z,
    guides: X,
    setGuides: h,
    announcement: g,
    setAnnouncement: $,
    showInspectorPalette: I,
    setShowInspectorPalette: T,
    eraserPos: L,
    setEraserPos: D,
    activeColor: A,
    setActiveColor: F,
    activeColorRef: E,
    installedFontFamilies: Y,
    pointers: et,
    past: O,
    future: G,
    selectNow: ct,
    commit: dt,
    deleteSelection: st,
    beginHistory: nt,
    endHistory: bt,
    toPage: It,
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
  textualTypes: f,
  onZoomChange: y,
  onSelectionChange: u,
  onLocalCursor: x,
  toPage: r
}) {
  Yt(() => {
    y == null || y(e.z);
  }, [e.z, y]), Yt(() => {
    const p = t.current;
    if (!p) return;
    const d = (M) => {
      if (M.preventDefault(), M.ctrlKey || M.metaKey) {
        const w = p.getBoundingClientRect();
        n((z) => {
          const X = Math.min(a, Math.max(o, z.z * Math.exp(-M.deltaY * 0.01))), h = M.clientX - w.left, g = M.clientY - w.top;
          return { x: z.x + h / z.z - h / X, y: z.y + g / z.z - g / X, z: X };
        });
      } else
        n((w) => ({ ...w, x: w.x + M.deltaX / w.z, y: w.y + M.deltaY / w.z }));
    };
    return p.addEventListener("wheel", d, { passive: !1 }), () => p.removeEventListener("wheel", d);
  }, [t, a, o, n]);
  const s = Lt(() => {
    const p = c.filter((d) => i.has(d.id));
    return {
      count: p.length,
      canGroup: p.length > 1,
      canUngroup: p.some((d) => !!d.groupId),
      isTextual: p.length === 1 && f.includes(p[0].type),
      selectedIds: p.map((d) => d.id)
    };
  }, [i, c, f]);
  Yt(() => {
    u == null || u(s);
  }, [u, s]);
  const v = Lt(() => {
    if (l) {
      const d = c.find((M) => M.id === l);
      return d && d.type !== "image" && d.type !== "draw" ? [d] : [];
    }
    const p = c.filter((d) => i.has(d.id));
    return p.length === 1 && p[0].type === "image" ? [] : p;
  }, [l, i, c]), m = Lt(() => v.length === 0 ? null : v.find((p) => p.type !== "image") ?? null, [v]), C = q(0);
  return { selectionInfo: s, inspectorSelection: v, inspectorShape: m, onContainerPointerMove: x ? (p) => {
    const d = performance.now();
    d - C.current < 60 || (C.current = d, x(r(p.clientX, p.clientY)));
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
      const f = n.current;
      if (f.size === 0) return;
      const y = [], u = /* @__PURE__ */ new Map();
      for (const r of e.current) {
        if (!f.has(r.id)) continue;
        let s = r.groupId;
        s && (u.has(s) || u.set(s, l("g")), s = u.get(s)), y.push({
          ...r,
          id: l(),
          x: r.x + Vt,
          y: r.y + Vt,
          groupId: s,
          points: (x = r.points) == null ? void 0 : x.map(([v, m]) => [v + Vt, m + Vt]),
          orthogonalWaypoints: r.type === "arrow" && r.orthogonalWaypoints ? r.orthogonalWaypoints.map((v) => ({ x: v.x + Vt, y: v.y + Vt })) : void 0
        });
      }
      o((r) => [...r, ...y]), c(new Set(y.map((r) => r.id))), i(`${y.length}개 복제됨`);
    },
    group: () => {
      var u;
      const f = n.current;
      if (f.size < 2) return;
      const y = l("g");
      o((x) => x.map((r) => f.has(r.id) ? { ...r, groupId: y } : r)), i(`${f.size}개 그룹화됨`), (u = t.current) == null || u.focus();
    },
    ungroup: () => {
      var y;
      const f = n.current;
      f.size !== 0 && (o((u) => u.map((x) => f.has(x.id) ? { ...x, groupId: void 0 } : x)), i("그룹 해제됨"), (y = t.current) == null || y.focus());
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
  const i = 40, l = a - n + i * 2, f = c - o + i * 2;
  if (!Number.isFinite(l) || !Number.isFinite(f) || l > Rt.maxExportDimension || f > Rt.maxExportDimension || l * f > Rt.maxExportPixels) return null;
  const y = (x, r, s, v, m) => {
    const C = x.fontSize ?? s, b = gt(x), k = zn(pe(x));
    if (k.length === 0) return "";
    const p = _t(x), d = x.textAlign === "right" ? "end" : x.textAlign === "center" ? "middle" : x.textAlign === "left" ? "start" : m, M = d === "end" ? p.maxX - 12 : d === "middle" ? (p.minX + p.maxX) / 2 : p.minX + 12, w = p.minY + C + 12;
    return k.map((z, X) => {
      const h = z.map((g) => `<tspan style="${[
        g.bold ? "font-weight:700" : `font-weight:${v}`,
        g.italic ? "font-style:italic" : "",
        g.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Dt(g.text)}</tspan>`).join("");
      return `<text x="${M}" y="${w + X * C * 1.4}" font-family="${Dt(b)}" font-size="${C}" fill="${r}" text-anchor="${d}">${h}</text>`;
    }).join("");
  }, u = t.map((x) => {
    const r = rt[x.color ?? "blue"], s = _t(x), v = Nt(x), m = x.rotation ? ` transform="rotate(${x.rotation * 180 / Math.PI} ${v.x} ${v.y})"` : "", C = x.color ? rt[x.color].border : U.ink;
    if (x.type === "draw" && x.points) {
      const z = x.drawMode ?? "pen", X = x.strokeWidth ?? 3, h = x.points.length >= 2 ? Mn(x.points, X, z) : "";
      if (h)
        return `<path d="${h}" fill="${C}"${z === "highlighter" ? ' fill-opacity="0.35"' : ""} fill-rule="evenodd" stroke="none"/>`;
      const g = z === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${$n(x.points)}" fill="none" stroke="${C}" stroke-width="${X}"${g} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (x.type === "arrow") {
      const z = Et(x, new Map(t.map((O) => [O.id, O])), t), X = x.strokeWidth ?? 2.5, h = Math.max(10, 8 + X * 2), g = Math.max(4, 2 + X), $ = z.routing === "orthogonal" && z.pathPoints ? z.pathPoints : null, I = $ && $.length > 1, T = I ? $e($) : z.routing === "curved" ? `M ${z.start.x} ${z.start.y} Q ${z.control.x} ${z.control.y} ${z.end.x} ${z.end.y}` : `M ${z.start.x} ${z.start.y} L ${z.end.x} ${z.end.y}`, L = I ? vn($) : z.routing === "curved" ? (() => {
        const O = oe(0.94, z.start, z.control, z.end);
        return Math.atan2(z.end.y - O.y, z.end.x - O.x);
      })() : Math.atan2(z.end.y - z.start.y, z.end.x - z.start.x), D = I ? ee($[0], $[1]) : z.routing === "orthogonal" && z.start.side ? z.start.side === "e" ? 0 : z.start.side === "w" ? Math.PI : z.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : ee(z.start, z.end), A = x.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : x.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", F = (O, G, H, et) => {
        if (O === "dot") return `<circle cx="${G}" cy="${H}" r="${g}" fill="${C}"/>`;
        if (O === "none") return "";
        const Q = `${G - h * Math.cos(et - 0.4)},${H - h * Math.sin(et - 0.4)}`, Z = `${G - h * Math.cos(et + 0.4)},${H - h * Math.sin(et + 0.4)}`;
        return `<polygon points="${G},${H} ${Q} ${Z}" fill="${C}"/>`;
      }, Y = z.routing === "orthogonal" && z.pathPoints ? Ye(z.pathPoints) : z.bend === 0 ? { x: (z.start.x + z.end.x) / 2, y: (z.start.y + z.end.y) / 2 } : oe(0.5, z.start, z.control, z.end), P = re(x), E = P ? `<text x="${Y.x}" y="${Y.y - 6}" text-anchor="middle" font-family="${Dt(gt(x))}" font-size="${x.fontSize ?? 12}" fill="${C}">${Dt(P)}</text>` : "";
      return `<path d="${T}" fill="none" stroke="${C}" stroke-width="${X}" stroke-linecap="round" stroke-linejoin="round"${A}/>` + F(x.arrowEnd ?? "arrow", z.end.x, z.end.y, L) + F(x.arrowStart ?? "none", z.start.x, z.start.y, D + Math.PI) + E;
    }
    if (x.type === "image" && x.src) {
      const z = Ce(x.src);
      return z ? `<image href="${Dt(z)}" x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}"${m}/>` : "";
    }
    if (x.type === "frame")
      return `<g${m}><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" fill="none" stroke="${U.slate400}" stroke-width="${x.strokeWidth ?? 2}" rx="4"/><text x="${s.minX}" y="${s.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${U.muted}">${Dt(x.text ?? "프레임")}</text></g>`;
    if (x.type === "note")
      return `<g${m}><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" fill="${r.bg}"/><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="6" fill="${r.border}"/>` + y(x, r.text, 14, "600", "start") + "</g>";
    if (x.type === "card") {
      const z = x.cardStyle === "glass";
      return `<g${m}><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" rx="16" fill="${z ? U.glassFill : U.slateCard}"/><text x="${s.minX + 16}" y="${s.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${U.slate400}">[ ${Dt(x.category ?? "ENTITY")} ]</text>` + y(x, U.white, 16, "700", "start") + "</g>";
    }
    const b = x.type === "rect" || x.type === "ellipse" || x.type === "triangle" || x.type === "diamond" || x.type === "hexagon" || x.type === "star" ? x.strokeWidth ?? 2 : 2, k = fe(x), p = bn(x), d = x.type === "triangle" || x.type === "diamond" || x.type === "hexagon" || x.type === "star", M = d ? kn(x.type, s.maxX - s.minX, s.maxY - s.minY).split(" ").map((z) => {
      const [X, h] = z.split(",").map(Number);
      return `${X + s.minX},${h + s.minY}`;
    }).join(" ") : "", w = x.type === "ellipse" ? `<ellipse cx="${(s.minX + s.maxX) / 2}" cy="${(s.minY + s.maxY) / 2}" rx="${(s.maxX - s.minX) / 2}" ry="${(s.maxY - s.minY) / 2}" fill="${k}" stroke="${p}" stroke-width="${b}"/>` : d ? `<polygon points="${M}" fill="${k}" stroke="${p}" stroke-width="${b}" stroke-linejoin="round"/>` : `<rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" rx="12" fill="${k}" stroke="${p}" stroke-width="${b}"/>`;
    return `<g${m}>${w}${y(x, r.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${f}" viewBox="${n - i} ${o - i} ${l} ${f}"><rect x="${n - i}" y="${o - i}" width="${l}" height="${f}" fill="${e ? U.canvasDark : U.canvasLight}"/>` + u + "</svg>";
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
  const l = 2, f = o * l, y = a * l;
  if (!Number.isSafeInteger(f) || !Number.isSafeInteger(y) || f > Rt.maxExportDimension || y > Rt.maxExportDimension || f * y > Rt.maxExportPixels) return null;
  const u = document.createElement("canvas");
  u.width = f, u.height = y;
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
        const v = 2 * Math.PI * r / a.length;
        a[r].x += Math.cos(v) * 10, a[r].y += Math.sin(v) * 10;
        break;
      }
  const c = new Map(a.map((r) => [r.id, r])), i = [];
  for (const r of t) {
    if (r.type !== "arrow") continue;
    const s = r.fromId ? c.get(r.fromId) : null, v = r.toId ? c.get(r.toId) : null;
    s && v && i.push([s, v]);
  }
  const l = 220, f = l * l, y = 80;
  let u = 400;
  const x = u / y;
  for (let r = 0; r < y; r++) {
    for (let s = 0; s < a.length; s++)
      a[s].vx = 0, a[s].vy = 0;
    for (let s = 0; s < a.length; s++)
      for (let v = s + 1; v < a.length; v++) {
        const m = a[s], C = a[v], b = m.x - C.x, k = m.y - C.y, p = Math.hypot(b, k) || 0.01, d = f / p, M = b / p * d, w = k / p * d;
        m.vx += M, m.vy += w, C.vx -= M, C.vy -= w;
      }
    for (const [s, v] of i) {
      const m = s.x - v.x, C = s.y - v.y, b = Math.hypot(m, C) || 0.01, k = b * b / l, p = m / b * k, d = C / b * k;
      s.vx -= p, s.vy -= d, v.vx += p, v.vy += d;
    }
    for (const s of a) {
      const v = Math.hypot(s.vx, s.vy) || 0.01, m = Math.min(v, u);
      s.x += s.vx / v * m, s.y += s.vy / v * m;
    }
    u = Math.max(0.5, u - x);
  }
  e((r) => r.map((s) => {
    const v = c.get(s.id);
    return v ? { ...s, x: v.x - s.w / 2, y: v.y - s.h / 2 } : s;
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
  let f;
  try {
    f = no(t);
  } catch {
    return;
  }
  e || (n.current = [], o.current = [], a(f.shapes.map(Sr))), c(f.camera), i(/* @__PURE__ */ new Set()), l(null);
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
  throw new oo(`Unhandled canvas shape type: ${String(t)}.`);
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
  minZoom: f,
  maxZoom: y,
  onToolChange: u,
  setSelectedStrokeWidth: x,
  onDirty: r,
  commit: s,
  selectNow: v,
  selectionActions: m,
  viewportCentre: C,
  setShapes: b,
  setLocalShapes: k,
  setCamera: p,
  setEditingId: d,
  setAnnouncement: M,
  createId: w
}) {
  const z = xt((h) => {
    const g = C(), $ = Cn({
      id: w(),
      x: h.x ?? g.x - h.w / 2,
      y: h.y ?? g.y - h.h / 2,
      ...h
    });
    if (!$) throw new Error("Canvas could not create a valid shape.");
    return s((I) => [...I, $]), v(/* @__PURE__ */ new Set([$.id])), u("select"), M(`${$.type} 추가됨`), $;
  }, [s, w, u, v, M, C]), X = xt(() => $r(n.current, l), [l, n]);
  qn(t, () => ({
    addNote: (h) => {
      const g = z({ type: "note", w: 180, h: 180, color: h, text: "" });
      d(g.id);
    },
    addCard: (h, g, $, I) => {
      z({ type: "card", w: 260, h: 150, text: h, category: g, cardStyle: $, color: I });
    },
    addText: () => {
      const h = z({ type: "text", w: 220, h: 44, text: "" });
      d(h.id);
    },
    addShape: (h, g, $) => {
      z({
        type: h,
        w: h === "ellipse" ? 220 : 200,
        h: h === "ellipse" ? 110 : 140,
        color: g,
        text: $ ?? ""
      });
    },
    addArrow: () => {
      const h = C(), g = { id: w(), type: "arrow", x: h.x - 140, y: h.y, w: 280, h: 0 };
      s(($) => [...$, g]), v(/* @__PURE__ */ new Set([g.id])), u("select");
    },
    addImage: (h, g, $, I) => {
      z({ type: "image", w: $, h: I, src: h, fileName: g });
    },
    addFileCard: (h, g, $) => {
      z({ type: "rect", w: 260, h: 120, color: "purple", text: $, src: g, fileName: h });
    },
    updateShapeText: (h, g) => {
      s(($) => $.map((I) => I.id === h ? { ...I, text: g, html: void 0 } : I));
    },
    setSelectedStrokeWidth: x,
    setTool: u,
    undo: () => {
      const h = a.current.pop();
      h && (c.current.push(n.current), b(h), v(/* @__PURE__ */ new Set()), d(null), r(), M("실행 취소"));
    },
    redo: () => {
      const h = c.current.pop();
      h && (a.current.push(n.current), b(h), v(/* @__PURE__ */ new Set()), d(null), r(), M("다시 실행"));
    },
    deleteSelected: m.deleteSelected,
    duplicateSelected: m.duplicateSelected,
    group: m.group,
    ungroup: m.ungroup,
    zoomBy: (h) => {
      p((g) => {
        var D;
        const $ = (D = e.current) == null ? void 0 : D.getBoundingClientRect(), I = Math.min(y, Math.max(f, g.z * h));
        if (!$) return { ...g, z: I };
        const T = g.x + $.width / 2 / g.z, L = g.y + $.height / 2 / g.z;
        return { x: T - $.width / 2 / I, y: L - $.height / 2 / I, z: I };
      });
    },
    zoomTo: (h) => {
      p((g) => {
        var D;
        const $ = (D = e.current) == null ? void 0 : D.getBoundingClientRect(), I = Math.min(y, Math.max(f, h));
        if (!$) return { ...g, z: I };
        const T = g.x + $.width / 2 / g.z, L = g.y + $.height / 2 / g.z;
        return { x: T - $.width / 2 / I, y: L - $.height / 2 / I, z: I };
      });
    },
    resetZoom: () => {
      p((h) => {
        var T;
        const g = (T = e.current) == null ? void 0 : T.getBoundingClientRect();
        if (!g) return { ...h, z: 1 };
        const $ = h.x + g.width / 2 / h.z, I = h.y + g.height / 2 / h.z;
        return { x: $ - g.width / 2, y: I - g.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var F;
      const h = n.current, g = (F = e.current) == null ? void 0 : F.getBoundingClientRect();
      if (h.length === 0 || !g) return;
      let $ = 1 / 0, I = 1 / 0, T = -1 / 0, L = -1 / 0;
      for (const Y of h) {
        const P = it(Y);
        $ = Math.min($, P.minX), I = Math.min(I, P.minY), T = Math.max(T, P.maxX), L = Math.max(L, P.maxY);
      }
      const D = 80, A = Math.min(y, Math.max(
        f,
        Math.min(g.width / (T - $ + D * 2), g.height / (L - I + D * 2))
      ));
      p({
        x: ($ + T) / 2 - g.width / 2 / A,
        y: (I + L) / 2 - g.height / 2 / A,
        z: A
      });
    },
    autoLayout: () => zr(n.current, s, () => M("자동 배치 완료")),
    exportSvg: X,
    exportPng: () => Mr(X),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (h) => Cr(h, {
      controlled: i,
      past: a,
      future: c,
      setLocalShapes: k,
      setCamera: p,
      selectNow: v,
      setEditingId: d
    })
  }), [
    z,
    X,
    s,
    w,
    l,
    y,
    f,
    r,
    u,
    m,
    v,
    p,
    d,
    k,
    x,
    b,
    M,
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
function Ir({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: o,
  editingIdRef: a,
  toolRef: c,
  past: i,
  future: l,
  textualTypes: f,
  setIsSpaceDown: y,
  setEditingId: u,
  setShapes: x,
  setAnnouncement: r,
  commit: s,
  deleteSelection: v,
  selectNow: m,
  onDirty: C,
  onToolChange: b,
  createId: k
}) {
  const p = xt((d, M) => {
    const w = o.current;
    w.size !== 0 && s((z) => z.map((X) => {
      var h;
      return w.has(X.id) ? {
        ...X,
        x: X.x + d,
        y: X.y + M,
        points: (h = X.points) == null ? void 0 : h.map(([g, $]) => [g + d, $ + M])
      } : X;
    }));
  }, [s, o]);
  Yt(() => {
    const d = (X) => {
      const h = X;
      return !!h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA" || h.isContentEditable);
    }, M = (X) => X instanceof Element && !!X.closest("input, select, button, textarea, option, label, [data-canvas-control]"), w = (X) => {
      var A, F, Y, P;
      const h = t.current, g = document.activeElement, $ = X.target instanceof Node && !!(h != null && h.contains(X.target)), I = !!h && (g === h || h.contains(g));
      if (!$ && !I || M(X.target)) return;
      if (X.code === "Space" && !d(X.target)) {
        y(!0), X.preventDefault();
        return;
      }
      if (d(X.target)) {
        if (X.key === "Escape")
          X.preventDefault(), u(null), (A = e.current) == null || A.blur(), (F = t.current) == null || F.focus();
        else if ((X.key === "Delete" || X.key === "Backspace") && !a.current) {
          const E = o.current;
          v(E) && X.preventDefault();
        }
        return;
      }
      const T = X.metaKey || X.ctrlKey, L = o.current;
      if (T && X.key.toLowerCase() === "z") {
        if (X.preventDefault(), X.shiftKey) {
          const E = l.current.pop();
          E && (i.current.push(n.current), x(E), C());
        } else {
          const E = i.current.pop();
          E && (l.current.push(n.current), x(E), C());
        }
        m(/* @__PURE__ */ new Set());
        return;
      }
      if (T && X.key.toLowerCase() === "g") {
        if (X.preventDefault(), X.shiftKey)
          L.size > 0 && (s((E) => E.map((O) => L.has(O.id) ? { ...O, groupId: void 0 } : O)), r("그룹 해제됨"));
        else if (L.size > 1) {
          const E = k("g");
          s((O) => O.map((G) => L.has(G.id) ? { ...G, groupId: E } : G)), r(`${L.size}개 그룹화됨`);
        }
        return;
      }
      if (T && X.key.toLowerCase() === "a") {
        X.preventDefault(), m(new Set(n.current.map((E) => E.id))), r(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (X.key === "Delete" || X.key === "Backspace") {
        v(L) && X.preventDefault();
        return;
      }
      if (X.key.startsWith("Arrow")) {
        X.preventDefault();
        const E = X.shiftKey ? 10 : 1;
        X.key === "ArrowLeft" && p(-E, 0), X.key === "ArrowRight" && p(E, 0), X.key === "ArrowUp" && p(0, -E), X.key === "ArrowDown" && p(0, E);
        return;
      }
      if (X.key === "Tab" && n.current.length > 0) {
        X.preventDefault();
        const E = n.current, O = E.findIndex((et) => L.has(et.id)), G = X.shiftKey ? O <= 0 ? E.length - 1 : O - 1 : O === -1 || O === E.length - 1 ? 0 : O + 1, H = E[G];
        m(/* @__PURE__ */ new Set([H.id])), r(`${H.type} 선택됨: ${re(H) || "내용 없음"}`);
        return;
      }
      if (X.key === "Enter" && L.size === 1) {
        const E = n.current.find((O) => L.has(O.id));
        E && f.includes(E.type) && (X.preventDefault(), u(E.id));
        return;
      }
      if (X.key === "Escape") {
        if (a.current) {
          X.preventDefault(), u(null), (Y = e.current) == null || Y.blur(), (P = t.current) == null || P.focus(), b("select");
          return;
        }
        m(/* @__PURE__ */ new Set()), b("select");
        return;
      }
      const D = Nr(X);
      D && (X.preventDefault(), c.current = D, b(D));
    }, z = (X) => {
      const h = t.current;
      !h || !(document.activeElement === h || h.contains(document.activeElement)) || X.code === "Space" && y(!1);
    };
    return window.addEventListener("keydown", w), window.addEventListener("keyup", z), () => {
      window.removeEventListener("keydown", w), window.removeEventListener("keyup", z);
    };
  }, [
    s,
    t,
    k,
    v,
    a,
    e,
    l,
    p,
    C,
    b,
    i,
    m,
    o,
    r,
    u,
    y,
    x,
    n,
    f,
    c
  ]);
}
const Pr = 400;
function Lr({
  containerRef: t,
  editorRef: e,
  pointers: n,
  cameraRef: o,
  shapesRef: a,
  editingIdRef: c,
  toolRef: i,
  activeColorRef: l,
  drawStrokeWidth: f,
  camera: y,
  shapes: u,
  selected: x,
  isSpaceDown: r,
  textualTypes: s,
  setShapes: v,
  setEditingId: m,
  applyInteraction: C,
  selectNow: b,
  beginHistory: k,
  commit: p,
  onToolChange: d,
  expandToGroups: M,
  toPage: w,
  createId: z
}) {
  const X = z, h = q(null), g = (Y, P) => {
    var H;
    const E = ((H = t.current) == null ? void 0 : H.dataset.canvasActiveTool) === "text" ? "text" : i.current;
    if (E !== "note" && E !== "text") return;
    const O = w(Y, P), G = E === "note" ? { id: X(), type: "note", x: O.x - 90, y: O.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: X(), type: "text", x: O.x, y: O.y - 22, w: 220, h: 44, text: "" };
    p((et) => [...et, G]), b(/* @__PURE__ */ new Set([G.id])), m(G.id), d("select");
  };
  return Yt(() => {
    const Y = (P) => {
      var E;
      (E = t.current) != null && E.contains(P.target) && (P.target instanceof Element && P.target.closest('[role="textbox"], [data-canvas-inspector]') || g(P.clientX, P.clientY));
    };
    return window.addEventListener("click", Y, !0), () => window.removeEventListener("click", Y, !0);
  }), { onPointerDown: (Y) => {
    var ft, lt, yt;
    const P = i.current, E = Y.target instanceof Element ? Y.target : null, O = !!(E != null && E.closest("[data-canvas-editor]")) && c.current !== null;
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
    if (Y.button === 1 || r || P === "hand" || Y.button === 0 && P === "select" && Y.altKey) {
      C({ kind: "pan", startX: Y.clientX, startY: Y.clientY, camX: y.x, camY: y.y });
      return;
    }
    if (Y.button !== 0) return;
    const H = w(Y.clientX, Y.clientY);
    if (O || (m(null), (ft = e.current) == null || ft.blur(), (lt = t.current) == null || lt.focus()), P === "draw" || P === "highlighter") {
      const V = {
        id: X(),
        type: "draw",
        x: H.x,
        y: H.y,
        w: 0,
        h: 0,
        points: [[H.x, H.y]],
        color: l.current,
        strokeWidth: f,
        drawMode: P === "highlighter" ? "highlighter" : "pen"
      };
      k(), v((J) => [...J, V]), C({ kind: "drawing", id: V.id });
      return;
    }
    if (P === "arrow" || P === "frame" || ro.includes(P)) {
      const V = P, J = P === "arrow" ? { id: X(), type: "arrow", x: H.x, y: H.y, w: 0, h: 0, color: l.current } : P === "frame" ? { id: X(), type: "frame", x: H.x, y: H.y, w: 0, h: 0, text: "프레임" } : { id: X(), type: V, x: H.x, y: H.y, w: 0, h: 0, color: l.current, text: "" };
      k(), v((ct) => [...ct, J]), C({ kind: "creating", id: J.id, startX: H.x, startY: H.y });
      return;
    }
    if (P === "note" || P === "text") return;
    if (P === "eraser") {
      k(), v((V) => Yn(V, H.x, H.y, 14 / y.z, y.z)), C({ kind: "erasing" });
      return;
    }
    const et = new Map(u.map((V) => [V.id, V])), Q = c.current ? u.find((V) => V.id === c.current) : void 0, Z = O && Q ? Q : [...u].reverse().find((V) => ve(V, H.x, H.y, y.z, et, u));
    if (!Z)
      h.current = null;
    else {
      const V = Date.now(), J = !Y.shiftKey && s.includes(Z.type) && ((yt = h.current) == null ? void 0 : yt.id) === Z.id && V - h.current.time < Pr, ct = J ? Z.id : void 0;
      h.current = J ? null : { id: Z.id, time: V };
      const $t = Y.shiftKey ? new Set(x).add(Z.id) : x.has(Z.id) ? x : /* @__PURE__ */ new Set([Z.id]), Mt = M($t);
      b(Mt);
      const dt = /* @__PURE__ */ new Map();
      for (const st of u) Mt.has(st.id) && dt.set(st.id, st);
      for (const st of u) {
        if (st.type !== "frame" || !Mt.has(st.id)) continue;
        const nt = it(st);
        for (const bt of u) {
          if (bt.id === st.id || dt.has(bt.id)) continue;
          const It = Nt(bt);
          It.x >= nt.minX && It.x <= nt.maxX && It.y >= nt.minY && It.y <= nt.maxY && dt.set(bt.id, bt);
        }
      }
      k(), C({ kind: "move", startX: H.x, startY: H.y, origin: dt, editOnReleaseId: ct });
      return;
    }
    Y.shiftKey || b(/* @__PURE__ */ new Set()), C({
      kind: "marquee",
      startX: H.x,
      startY: H.y,
      curX: H.x,
      curY: H.y,
      screenStartX: Y.clientX,
      screenStartY: Y.clientY
    });
  }, onResizeHandleDown: (Y, P, E) => {
    Y.stopPropagation(), n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY }), k(), C({ kind: "resize", id: P.id, handle: E, start: P });
  }, onRotateHandleDown: (Y, P) => {
    Y.stopPropagation(), n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY });
    const E = w(Y.clientX, Y.clientY), O = Nt(P);
    k(), C({
      kind: "rotate",
      id: P.id,
      startAngle: Math.atan2(E.y - O.y, E.x - O.x),
      startRotation: P.rotation ?? 0
    });
  }, onConnectHandleDown: (Y, P) => {
    Y.stopPropagation(), n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY });
    const E = w(Y.clientX, Y.clientY);
    C({ kind: "connect", fromId: P.id, toX: E.x, toY: E.y, hoverId: null });
  }, onBendHandleDown: (Y, P) => {
    Y.stopPropagation(), n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY }), k(), C({ kind: "bend", id: P.id });
  }, onOrthogonalSegmentHandleDown: (Y, P, E) => {
    Y.stopPropagation(), n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY }), k(), C({ kind: "orthogonal-segment", id: P.id, segmentIndex: E });
  }, onArrowEndpointDown: (Y, P, E) => {
    Y.stopPropagation(), n.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY }), k(), C({ kind: "arrow-endpoint", id: P.id, endpoint: E, hoverId: null });
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
  setGuides: f,
  setAnnouncement: y,
  applyInteraction: u,
  selectNow: x,
  endHistory: r,
  commit: s,
  onToolChange: v,
  createId: m,
  pendingDrawPointsRef: C,
  drawRafRef: b,
  rawDrawPointerIdsRef: k
}) {
  const p = m;
  Yt(() => {
    const d = (M) => {
      var z, X;
      t.current.delete(M.pointerId), k.current.delete(M.pointerId);
      try {
        (X = (z = M.target) == null ? void 0 : z.releasePointerCapture) == null || X.call(z, M.pointerId);
      } catch {
      }
      const w = e.current;
      if (w.kind !== "none") {
        if (w.kind === "pinch") {
          t.current.size < 2 && u({ kind: "none" });
          return;
        }
        if (f([]), w.kind === "erasing") {
          l(null), r(), u({ kind: "none" });
          return;
        }
        if (w.kind === "connect") {
          const g = a.current.find((A) => A.id === w.fromId);
          if (u({ kind: "none" }), !g) return;
          const $ = { x: w.toX, y: w.toY }, I = Nt(g);
          if (!w.hoverId && Math.hypot($.x - I.x, $.y - I.y) < 30) return;
          const T = [];
          let L = w.hoverId;
          if (!L) {
            const A = g.type === "note" ? 180 : 200, F = g.type === "note" ? 180 : 120, Y = {
              ...g,
              id: p(),
              x: $.x - A / 2,
              y: $.y - F / 2,
              w: A,
              h: F,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            T.push(Y), L = Y.id;
          }
          const D = {
            id: p(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: g.id,
            toId: L,
            text: ""
          };
          T.push(D), s((A) => [...A, ...T]), x(/* @__PURE__ */ new Set([D.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => i(D.id)) : i(D.id), y("연결 생성됨");
          return;
        }
        if (w.kind === "bend") {
          r(), u({ kind: "none" });
          return;
        }
        if (w.kind === "drawing") {
          b.current !== null && (cancelAnimationFrame(b.current), b.current = null);
          const h = o(M.clientX, M.clientY);
          C.current.push([h.x, h.y]);
          const g = C.current.splice(0);
          c(($) => $.map((I) => {
            if (I.id !== w.id || !I.points) return I;
            const T = [...I.points];
            let L = T[T.length - 1];
            for (const P of g)
              (!L || Math.hypot(P[0] - L[0], P[1] - L[1]) >= 1 / n.current.z) && (T.push(P), L = P);
            const D = T.map((P) => P[0]), A = T.map((P) => P[1]), F = Math.min(...D), Y = Math.min(...A);
            return { ...I, points: T, x: F, y: Y, w: Math.max(...D) - F, h: Math.max(...A) - Y };
          })), r(), u({ kind: "none" });
          return;
        }
        if (w.kind === "creating") {
          c((h) => h.map((g) => {
            if (g.id !== w.id) return g;
            const $ = Math.abs(g.w) < 4 && Math.abs(g.h) < 4 ? {
              ...g,
              w: g.type === "arrow" ? 200 : g.type === "frame" ? 480 : 180,
              h: g.type === "arrow" ? 0 : g.type === "frame" ? 320 : 120
            } : g;
            if ($.type === "arrow") return $;
            const I = _t($);
            return { ...$, x: I.minX, y: I.minY, w: I.maxX - I.minX, h: I.maxY - I.minY };
          })), r(), x(/* @__PURE__ */ new Set([w.id])), v("select"), u({ kind: "none" });
          return;
        }
        if ((w.kind === "move" || w.kind === "resize" || w.kind === "rotate" || w.kind === "orthogonal-segment" || w.kind === "arrow-endpoint") && r(), w.kind === "move" && w.editOnReleaseId && M.type === "pointerup") {
          const h = o(M.clientX, M.clientY);
          Math.hypot(h.x - w.startX, h.y - w.startY) * n.current.z <= Ar && i(w.editOnReleaseId);
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
    m,
    b,
    r,
    e,
    v,
    C,
    t,
    k,
    x,
    y,
    i,
    l,
    f,
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
  setGuides: f,
  applyInteraction: y,
  selectNow: u,
  expandToGroups: x,
  toPage: r,
  pendingDrawPointsRef: s,
  drawRafRef: v,
  rawDrawPointerIdsRef: m
}) {
  Yt(() => () => {
    v.current !== null && cancelAnimationFrame(v.current);
  }, [v]), Yt(() => {
    const C = (p, d, M = !0) => {
      const w = r(p.clientX, p.clientY);
      if (p.shiftKey) {
        i((X) => X.map((h) => {
          if (h.id !== d || !h.points) return h;
          const g = h.points[0];
          return g ? { ...h, points: [g, [w.x, w.y]] } : h;
        }));
        return;
      }
      const z = M && typeof p.getCoalescedEvents == "function" ? p.getCoalescedEvents() : [];
      if (z.length > 0)
        for (const X of z) {
          const h = r(X.clientX, X.clientY);
          s.current.push([h.x, h.y]);
        }
      s.current.push([w.x, w.y]), v.current === null && (v.current = requestAnimationFrame(() => {
        v.current = null;
        const X = s.current;
        if (X.length === 0) return;
        s.current = [];
        const h = o.current.z;
        i((g) => g.map(($) => {
          if ($.id !== d || !$.points) return $;
          let I = $.points[$.points.length - 1][0], T = $.points[$.points.length - 1][1];
          const L = [...$.points];
          for (const [D, A] of X)
            Math.hypot(D - I, A - T) < 1 / h || (L.push([D, A]), I = D, T = A);
          return L.length === $.points.length ? $ : { ...$, points: L };
        }));
      }));
    }, b = (p) => {
      var z, X;
      e.current.has(p.pointerId) && e.current.set(p.pointerId, { x: p.clientX, y: p.clientY });
      const d = n.current;
      if (d.kind === "none") return;
      const M = o.current;
      if (d.kind === "pinch") {
        if (e.current.size < 2) return;
        const [h, g] = [...e.current.values()], $ = Math.hypot(g.x - h.x, g.y - h.y) || 1, I = (h.x + g.x) / 2, T = (h.y + g.y) / 2, L = (z = t.current) == null ? void 0 : z.getBoundingClientRect();
        if (!L) return;
        const D = Math.min(Fr, Math.max(Er, d.startZoom * ($ / d.startDist))), A = d.camX + (d.startMidX - L.left) / d.startZoom, F = d.camY + (d.startMidY - L.top) / d.startZoom;
        c({ x: A - (I - L.left) / D, y: F - (T - L.top) / D, z: D });
        return;
      }
      if (d.kind === "pan") {
        c({
          x: d.camX - (p.clientX - d.startX) / M.z,
          y: d.camY - (p.clientY - d.startY) / M.z,
          z: M.z
        });
        return;
      }
      const w = r(p.clientX, p.clientY);
      if (d.kind === "erasing") {
        i((h) => Yn(h, w.x, w.y, Tr / M.z, M.z)), l({ x: w.x, y: w.y });
        return;
      }
      if (d.kind === "connect") {
        const h = a.current, g = new Map(h.map((I) => [I.id, I])), $ = [...h].reverse().find((I) => I.id !== d.fromId && rn.includes(I.type) && ve(I, w.x, w.y, M.z, g, h));
        y({ ...d, toX: w.x, toY: w.y, hoverId: ($ == null ? void 0 : $.id) ?? null });
        return;
      }
      if (d.kind === "bend") {
        const h = a.current, g = h.find((Y) => Y.id === d.id);
        if (!g) return;
        const $ = Et(g, new Map(h.map((Y) => [Y.id, Y])), h), I = $.end.x - $.start.x, T = $.end.y - $.start.y, L = Math.hypot(I, T) || 1, D = ($.start.x + $.end.x) / 2, A = ($.start.y + $.end.y) / 2, F = (w.x - D) * (-T / L) + (w.y - A) * (I / L);
        i((Y) => Y.map((P) => P.id === d.id ? { ...P, bend: F } : P));
        return;
      }
      if (d.kind === "orthogonal-segment") {
        const h = a.current, g = h.find((F) => F.id === d.id);
        if (!g) return;
        const $ = Et(g, new Map(h.map((F) => [F.id, F])), h), I = $.routing === "orthogonal" ? $.pathPoints : void 0;
        if (!I || I.length < 2) return;
        const T = I[d.segmentIndex], L = I[d.segmentIndex + 1];
        if (!T || !L) return;
        const D = T.x === L.x ? w.x : w.y, A = zo(I, d.segmentIndex, D);
        i((F) => F.map((Y) => Y.id === d.id ? { ...Y, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: A.slice(1, -1).map((P) => ({ x: P.x, y: P.y })) } : Y));
        return;
      }
      if (d.kind === "arrow-endpoint") {
        const h = a.current, g = h.find((A) => A.id === d.id);
        if (!g) return;
        const $ = new Map(h.map((A) => [A.id, A])), I = Et(g, $, h), T = d.endpoint === "start" ? I.end : I.start, L = [...h].reverse().find((A) => A.id !== g.id && rn.includes(A.type) && ve(A, w.x, w.y, M.z, $, h)), D = L ? Kt(L, T.x, T.y) : { x: w.x, y: w.y };
        y({ ...d, hoverId: (L == null ? void 0 : L.id) ?? null }), i((A) => A.map((F) => {
          if (F.id !== g.id) return F;
          const Y = d.endpoint === "start" ? D : T, P = d.endpoint === "end" ? D : T;
          return {
            ...F,
            x: Y.x,
            y: Y.y,
            w: P.x - Y.x,
            h: P.y - Y.y,
            fromId: d.endpoint === "start" ? L == null ? void 0 : L.id : F.fromId,
            toId: d.endpoint === "end" ? L == null ? void 0 : L.id : F.toId
          };
        }));
        return;
      }
      if (d.kind === "marquee") {
        y({ ...d, curX: w.x, curY: w.y });
        const h = Math.min(d.startX, w.x), g = Math.max(d.startX, w.x), $ = Math.min(d.startY, w.y), I = Math.max(d.startY, w.y), T = Math.min(d.screenStartX, p.clientX), L = Math.max(d.screenStartX, p.clientX), D = Math.min(d.screenStartY, p.clientY), A = Math.max(d.screenStartY, p.clientY), F = /* @__PURE__ */ new Map();
        (X = t.current) == null || X.querySelectorAll("[data-canvas-shape-id]").forEach((P) => {
          const E = P.dataset.canvasShapeId;
          E && F.set(E, P.getBoundingClientRect());
        });
        const Y = a.current.filter((P) => {
          const E = F.get(P.id);
          if (E)
            return E.right >= T && E.left <= L && E.bottom >= D && E.top <= A;
          const O = it(P);
          return O.maxX >= h && O.minX <= g && O.maxY >= $ && O.minY <= I;
        }).map((P) => P.id);
        u(x(new Set(Y)));
        return;
      }
      if (d.kind === "move") {
        let h = w.x - d.startX, g = w.y - d.startY;
        const $ = d.origin, I = (() => {
          let D = 1 / 0, A = 1 / 0, F = -1 / 0, Y = -1 / 0;
          return $.forEach((P) => {
            const E = it({ ...P, x: P.x + h, y: P.y + g });
            D = Math.min(D, E.minX), A = Math.min(A, E.minY), F = Math.max(F, E.maxX), Y = Math.max(Y, E.maxY);
          }), { minX: D, minY: A, maxX: F, maxY: Y };
        })(), T = a.current.filter((D) => !$.has(D.id)), L = jo(I, T, M.z);
        h += L.dx, g += L.dy, f(L.guides), i((D) => D.map((A) => {
          var Y;
          const F = $.get(A.id);
          return F ? {
            ...A,
            x: F.x + h,
            y: F.y + g,
            points: (Y = F.points) == null ? void 0 : Y.map(([P, E]) => [P + h, E + g]),
            ...F.type === "arrow" && F.orthogonalWaypoints ? { orthogonalWaypoints: F.orthogonalWaypoints.map((P) => ({ x: P.x + h, y: P.y + g })) } : {}
          } : A;
        }));
        return;
      }
      if (d.kind === "drawing") {
        m.current.has(p.pointerId) || C(p, d.id);
        return;
      }
      if (d.kind === "creating") {
        i((h) => h.map((g) => g.id === d.id ? { ...g, w: w.x - d.startX, h: w.y - d.startY } : g));
        return;
      }
      if (d.kind === "rotate") {
        const h = a.current.find((T) => T.id === d.id);
        if (!h) return;
        const g = Nt(h), $ = Math.atan2(w.y - g.y, w.x - g.x);
        let I = d.startRotation + ($ - d.startAngle);
        p.shiftKey && (I = Math.round(I / (Math.PI / 12)) * (Math.PI / 12)), i((T) => T.map((L) => L.id === d.id ? { ...L, rotation: I } : L));
        return;
      }
      if (d.kind === "resize") {
        const { start: h, handle: g } = d, $ = Sn(h, w.x, w.y);
        i((I) => I.map((T) => {
          if (T.id !== h.id) return T;
          let { x: L, y: D, w: A, h: F } = h;
          if (g.includes("e") && (A = Math.max(20, $.x - h.x)), g.includes("s") && (F = Math.max(20, $.y - h.y)), g.includes("w")) {
            const Y = h.x + h.w;
            L = Math.min($.x, Y - 20), A = Y - L;
          }
          if (g.includes("n")) {
            const Y = h.y + h.h;
            D = Math.min($.y, Y - 20), F = Y - D;
          }
          return { ...T, x: L, y: D, w: A, h: F, manualSize: T.type === "text" ? !0 : T.manualSize };
        }));
      }
    }, k = (p) => {
      if (!(p instanceof PointerEvent)) return;
      const d = p, M = n.current;
      M.kind === "drawing" && (e.current.has(d.pointerId) && e.current.set(d.pointerId, { x: d.clientX, y: d.clientY }), m.current.add(d.pointerId), C(d, M.id, !1));
    };
    return window.addEventListener("pointermove", b), window.addEventListener("pointerrawupdate", k), () => {
      window.removeEventListener("pointermove", b), window.removeEventListener("pointerrawupdate", k);
    };
  }, [
    y,
    o,
    t,
    v,
    x,
    n,
    s,
    e,
    m,
    u,
    c,
    l,
    f,
    i,
    a,
    r
  ]);
}
function Or(t) {
  const e = q([]), n = q(null), o = q(/* @__PURE__ */ new Set()), a = { ...t, pendingDrawPointsRef: e, drawRafRef: n, rawDrawPointerIdsRef: o };
  Wr(a), Dr(a);
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
  activeColorRef: f,
  drawStrokeWidth: y,
  camera: u,
  shapes: x,
  selected: r,
  isSpaceDown: s,
  textualTypes: v,
  setCamera: m,
  setShapes: C,
  setEditingId: b,
  setEraserPos: k,
  setGuides: p,
  setAnnouncement: d,
  applyInteraction: M,
  selectNow: w,
  beginHistory: z,
  endHistory: X,
  commit: h,
  onToolChange: g,
  expandToGroups: $,
  toPage: I,
  createId: T
}) {
  const L = Lr({
    containerRef: t,
    editorRef: e,
    pointers: n,
    cameraRef: a,
    shapesRef: c,
    editingIdRef: i,
    toolRef: l,
    activeColorRef: f,
    drawStrokeWidth: y,
    camera: u,
    shapes: x,
    selected: r,
    isSpaceDown: s,
    textualTypes: v,
    setShapes: C,
    setEditingId: b,
    applyInteraction: M,
    selectNow: w,
    beginHistory: z,
    commit: h,
    onToolChange: g,
    expandToGroups: $,
    toPage: I,
    createId: T
  });
  return Or({
    containerRef: t,
    pointers: n,
    interactionRef: o,
    cameraRef: a,
    shapesRef: c,
    setCamera: m,
    setShapes: C,
    setEditingId: b,
    setEraserPos: k,
    setGuides: p,
    setAnnouncement: d,
    applyInteraction: M,
    selectNow: w,
    endHistory: X,
    commit: h,
    onToolChange: g,
    expandToGroups: $,
    toPage: I,
    createId: T
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
  return Ir({ ...t, toolRef: e }), _r(t);
}
function Br({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: o,
  zoom: a
}) {
  const c = n || o.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", i = t ? U.gridDark : U.gridLight, l = 40 * a;
  return { cursor: c, gridColor: i, gridSize: l, strokeColorOf: (y) => y.strokeColor ? wn(y) : y.color ? rt[y.color].border : t ? "var(--canvas-slate-200)" : U.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = bo, document.head.appendChild(t);
}
const an = 0.1, cn = 4, sn = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function Fn(t) {
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
        return Fn(o);
    }
  });
}
function jr(t, e, n) {
  return t.map((o) => e.has(o.id) && o.type === "draw" ? { ...o, ...n } : o);
}
function dn(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const Zr = Zn(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: o,
  drawStrokeWidth: a = 4,
  onToolChange: c,
  onDirty: i,
  onZoomChange: l,
  onSelectionChange: f,
  shapes: y,
  onShapesChange: u,
  peerCursors: x,
  onLocalCursor: r,
  renderDiagram: s
}, v) {
  var Te, Ae;
  const {
    containerRef: m,
    editorRef: C,
    setLocalShapes: b,
    controlled: k,
    shapes: p,
    setShapes: d,
    camera: M,
    setCamera: w,
    cameraRef: z,
    selected: X,
    selectedRef: h,
    editingId: g,
    setEditingId: $,
    editingIdRef: I,
    interaction: T,
    interactionRef: L,
    applyInteraction: D,
    isSpaceDown: A,
    setIsSpaceDown: F,
    guides: Y,
    setGuides: P,
    announcement: E,
    setAnnouncement: O,
    showInspectorPalette: G,
    setShowInspectorPalette: H,
    eraserPos: et,
    setEraserPos: Q,
    setActiveColor: Z,
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
    expandToGroups: It,
    toolRef: zt,
    shapesRef: ut
  } = wr({ boardIdentity: e, tool: o, controlledShapes: y, onShapesChange: u, onDirty: i }), W = kr({
    containerRef: m,
    shapesRef: ut,
    selectedRef: h,
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
    containerRef: m,
    camera: M,
    setCamera: w,
    minZoom: an,
    maxZoom: cn,
    shapes: p,
    selected: X,
    editingId: g,
    textualTypes: sn,
    onZoomChange: l,
    onSelectionChange: f,
    onLocalCursor: r,
    toPage: nt
  }), St = te.useCallback((ht) => {
    const ae = new Set(h.current);
    ae.size !== 0 && $t((ie) => ln(ie, ae, ht));
  }, [$t, h]), {
    onPointerDown: S,
    onResizeHandleDown: _,
    onRotateHandleDown: R,
    onConnectHandleDown: vt,
    onBendHandleDown: Xt,
    onOrthogonalSegmentHandleDown: qt,
    onArrowEndpointDown: Tn
  } = Hr({
    ref: v,
    containerRef: m,
    editorRef: C,
    pointers: yt,
    interactionRef: L,
    cameraRef: z,
    shapesRef: ut,
    toolRef: zt,
    activeColorRef: ft,
    drawStrokeWidth: a,
    setSelectedStrokeWidth: St,
    camera: M,
    shapes: p,
    selected: X,
    isSpaceDown: A,
    setCamera: w,
    setShapes: d,
    setEditingId: $,
    setEraserPos: Q,
    setGuides: P,
    setAnnouncement: O,
    applyInteraction: D,
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
    controlled: k,
    isDarkMode: n,
    minZoom: an,
    maxZoom: cn,
    textualTypes: sn,
    selectedRef: h,
    editingIdRef: I,
    setIsSpaceDown: F,
    viewportCentre: bt,
    setLocalShapes: b,
    expandToGroups: It,
    toPage: nt,
    createId: dn
  }), { cursor: An, gridColor: Dn, gridSize: Pe, strokeColorOf: Wn } = Br({
    isDarkMode: n,
    tool: o === "highlighter" ? "draw" : o,
    isSpaceDown: A,
    interaction: T,
    zoom: M.z
  }), Le = (ht) => {
    const ae = h.current, ie = I.current, Zt = new Set(ae);
    if (ie && Zt.add(ie), Zt.size === 0) return;
    const De = "strokeWidth" in ht, Gn = Object.keys(ht).every((pt) => pt === "color" || pt === "fillColor" || pt === "strokeColor" || pt === "strokeWidth");
    if (B.length > 0 && B.every((pt) => pt.type === "draw") && Gn) {
      const pt = "color" in ht ? ht.color : void 0, wt = "strokeWidth" in ht ? ht.strokeWidth : void 0, We = "strokeColor" in ht ? ht.strokeColor : void 0;
      $t((Rn) => jr(Rn, Zt, {
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
          return Fn(wt);
      }
    }));
  }, {
    commitEditorHtml: On,
    applyFormat: _n,
    applyList: Hn,
    onEditorKeyDown: Bn,
    applyCustomFontFamily: jn
  } = yr({
    editorRef: C,
    editingId: g,
    setShapes: d,
    setAnnouncement: O,
    onDirty: i,
    patchSelected: Le
  }), { renderEditor: Kn, renderShapeBody: Un } = mr({
    camera: M,
    editingId: g,
    isDarkMode: n,
    editorRef: C,
    commitEditorHtml: On,
    onEditorKeyDown: Bn,
    setShapes: d,
    onDirty: i,
    renderDiagram: s
  }), Vn = T.kind === "marquee" ? T : null, { shapeById: Ee, visiblePaintOrder: Fe } = gr({
    containerRef: m,
    shapesRef: ut,
    shapes: p,
    camera: M,
    selected: X,
    editingId: g,
    boardIdentity: e
  });
  return /* @__PURE__ */ K(
    "div",
    {
      ref: m,
      onPointerDown: S,
      onPointerMove: tt,
      onPointerLeave: Ct,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": M.x,
      "data-canvas-camera-y": M.y,
      "data-canvas-camera-z": M.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: An,
        background: n ? U.canvasDark : U.canvasLight,
        backgroundImage: `radial-gradient(${Dn} 1px, transparent 1px)`,
        backgroundSize: `${Pe}px ${Pe}px`,
        backgroundPosition: `${-M.x * M.z}px ${-M.y * M.z}px`
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
            children: E
          }
        ),
        /* @__PURE__ */ N(
          Vo,
          {
            visiblePaintOrder: Fe,
            selected: X,
            shapeById: Ee,
            allShapes: ut.current,
            camera: M,
            interaction: T,
            eraserPos: et,
            guides: Y,
            marquee: Vn,
            strokeColorOf: Wn
          }
        ),
        /* @__PURE__ */ N(
          sr,
          {
            visiblePaintOrder: Fe,
            selected: X,
            editingId: g,
            camera: M,
            shapeById: Ee,
            allShapes: ut.current,
            peerCursors: x,
            isDarkMode: n,
            renderEditor: Kn,
            renderShapeBody: Un,
            setEditingId: $,
            onBendHandleDown: Xt,
            onOrthogonalSegmentHandleDown: qt,
            onResizeHandleDown: _,
            onRotateHandleDown: R,
            onConnectHandleDown: vt,
            onArrowEndpointDown: Tn
          }
        ),
        j && /* @__PURE__ */ N(
          pr,
          {
            shape: j,
            selection: B,
            selectionActions: W,
            shapes: p,
            camera: M,
            canvasSize: { width: ((Te = m.current) == null ? void 0 : Te.clientWidth) ?? 380, height: ((Ae = m.current) == null ? void 0 : Ae.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!g,
            showPalette: G,
            installedFontFamilies: lt,
            setShowPalette: H,
            setActiveColor: Z,
            patchSelected: Le,
            applyFormat: _n,
            applyList: Hn,
            applyCustomFontFamily: jn
          }
        )
      ]
    }
  );
});
export {
  rt as CANVAS_COLORS,
  eo as CANVAS_COLOR_KEYS,
  Pt as CANVAS_FONTS,
  Zr as InfiniteCanvas,
  ro as SHAPE_TOOLS,
  jr as applySelectedDrawStyle,
  ln as applySelectedStrokeWidth,
  qr as diagramTemplate,
  lr as getInspectorGroups,
  Ie as isDiagramShape
};
