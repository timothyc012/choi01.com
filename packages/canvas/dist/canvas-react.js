import { jsx as C, jsxs as _, Fragment as ae } from "react/jsx-runtime";
import Kt, { useState as at, useRef as Q, useEffect as wt, useLayoutEffect as ce, useMemo as Tt, useCallback as dt, useImperativeHandle as to, forwardRef as eo } from "react";
import { p as no, i as un, k as dn, a as ft, v as ro, c as Ot, s as oo, b as sr, d as ne, h as io, C as ao, S as co } from "./document-CwLumMU9.js";
import { Minus as so, Plus as lo, ChevronDown as uo, AlignLeft as fo, AlignCenter as ho, AlignRight as xo, List as po, ListOrdered as vo, Bold as mo, Italic as go, Underline as yo, Group as wo, Ungroup as bo, Copy as ko, Trash2 as $o, MousePointer2 as Mo } from "lucide-react";
const So = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-900-90: rgba(15,23,42,.9);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-90: rgba(255,255,255,.9);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas *{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}.invoicex-canvas input,.invoicex-canvas textarea,.invoicex-canvas [contenteditable=true],.invoicex-canvas [contenteditable=true] *{-webkit-user-select:text;user-select:text}.invoicex-canvas a{-webkit-touch-callout:initial}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .top-4{top:1rem}.invoicex-canvas .left-0{left:0}.invoicex-canvas .left-1\\/2{left:50%}.invoicex-canvas .right-0{right:0}.invoicex-canvas .right-4{right:1rem}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .bottom-4{bottom:1rem}.invoicex-canvas .right-safe-4{right:max(1rem,env(safe-area-inset-right))}.invoicex-canvas .bottom-safe-4{bottom:max(1rem,env(safe-area-inset-bottom))}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .min-h-11{min-height:2.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .inline-flex{display:inline-flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .px-3\\.5{padding-left:.875rem;padding-right:.875rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .py-2{padding-top:.5rem;padding-bottom:.5rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-2{padding-right:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .mr-1{margin-right:.25rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{user-select:none;-webkit-user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .-translate-x-1\\/2{transform:translate(-50%)}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-sm{font-size:.875rem;line-height:1.25rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-900\\/90{background-color:var(--canvas-slate-900-90)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-white\\/90{background-color:var(--canvas-white-90)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-l{border-left-width:1px;border-left-style:solid}.invoicex-canvas .border-r{border-right-width:1px;border-right-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .focus-visible\\:outline:focus-visible{outline-style:solid}.invoicex-canvas .focus-visible\\:outline-2:focus-visible{outline-width:2px}.invoicex-canvas .focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.invoicex-canvas .focus-visible\\:outline-blue-500:focus-visible{outline-color:var(--canvas-blue-500)}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .backdrop-blur-md{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.invoicex-canvas .transition-all{transition-property:all;transition-duration:.15s}.invoicex-canvas .transition-transform{transition-property:transform;transition-duration:.15s}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', V = Object.freeze({
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
}), lr = 12;
function nn(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function ze(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function Xe(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function Ye(t, e, n, r) {
  const a = Xe(t, e, n), c = Xe(t, e, r), l = Xe(n, r, t), f = Xe(n, r, e);
  return Math.abs(a) < 1e-6 && ze(t, n, e) || Math.abs(c) < 1e-6 && ze(t, r, e) || Math.abs(l) < 1e-6 && ze(n, t, r) || Math.abs(f) < 1e-6 && ze(n, e, r) ? !0 : a > 0 != c > 0 && l > 0 != f > 0;
}
function Co(t, e, n) {
  const r = Math.min(t.x, e.x), i = Math.max(t.x, e.x), a = Math.min(t.y, e.y), c = Math.max(t.y, e.y);
  if (i < n.minX || r > n.maxX || c < n.minY || a > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const l = { x: n.minX, y: n.minY }, f = { x: n.maxX, y: n.minY }, v = { x: n.maxX, y: n.maxY }, s = { x: n.minX, y: n.maxY };
  return Ye(t, e, l, f) || Ye(t, e, f, v) || Ye(t, e, v, s) || Ye(t, e, s, l);
}
function zo(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const r of e)
      if (Co(t[n - 1], t[n], r)) return !0;
  return !1;
}
function rn(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function fn(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = rn(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let r = 0;
  for (let a = 1; a < t.length; a++) {
    const c = Math.hypot(t[a].x - t[a - 1].x, t[a].y - t[a - 1].y);
    if (r + c >= n) {
      const l = (n - r) / c;
      return { x: t[a - 1].x + (t[a].x - t[a - 1].x) * l, y: t[a - 1].y + (t[a].y - t[a - 1].y) * l };
    }
    r += c;
  }
  const i = t[t.length - 1];
  return { x: i.x, y: i.y };
}
function we(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function Cn(t, e, n, r) {
  const i = /* @__PURE__ */ new Set([t, e]), a = Math.min(t, e), c = Math.max(t, e), l = lr * 1.2;
  for (const f of n) {
    const v = (r === "x" ? f.minX : f.minY) - l, s = (r === "x" ? f.maxX : f.maxY) + l, p = (o) => o >= a - l * 4 && o <= c + l * 4;
    p(v) && i.add(v), p(s) && i.add(s);
  }
  return [...i].sort((f, v) => Math.abs(f - t) - Math.abs(v - t));
}
function ur(t) {
  const e = [];
  for (const n of t) {
    const r = e[e.length - 1];
    (!r || r.x !== n.x || r.y !== n.y) && e.push(n);
  }
  return e;
}
function dr(t) {
  const e = [];
  for (const n of t) {
    const r = e[e.length - 1];
    if (r && r.x === n.x && r.y === n.y) continue;
    const i = e[e.length - 2];
    if (i && r && (i.x === r.x && r.x === n.x || i.y === r.y && r.y === n.y)) {
      e[e.length - 1] = n;
      continue;
    }
    e.push(n);
  }
  return e;
}
function Xo(t, e, n) {
  const r = [t];
  for (const i of [...n, e]) {
    const a = r[r.length - 1];
    if (!a) {
      r.push(i);
      continue;
    }
    if (a.x === i.x || a.y === i.y) {
      r.push(i);
      continue;
    }
    r.push({ x: i.x, y: a.y }, i);
  }
  return dr(r);
}
function Yo(t, e, n) {
  const r = t[e], i = t[e + 1];
  if (!r || !i || !Number.isFinite(n) || r.x !== i.x && r.y !== i.y) return [...t];
  const a = r.x === i.x ? [r, { x: n, y: r.y }, { x: n, y: i.y }, i] : [r, { x: r.x, y: n }, { x: i.x, y: n }, i];
  return dr([
    ...t.slice(0, e),
    ...a,
    ...t.slice(e + 2)
  ]);
}
function Ge(t, e) {
  const n = [], r = [];
  for (const a of t) {
    const c = ur(a);
    c.length < 2 || (zo(c, e) ? r.push(c) : n.push(c));
  }
  const i = n.length > 0 ? n : r;
  return i.length === 0 ? [] : i.reduce((a, c) => rn(c) < rn(a) ? c : a);
}
function zn(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function de(t, e, n, r) {
  const i = Math.min(t, e), a = Math.max(t, e), c = Math.max(48, Math.abs(e - t) * 0.35, lr * 4);
  if (r === "x") {
    if (n === "e") return a + c;
    if (n === "w") return i - c;
  } else {
    if (n === "s") return a + c;
    if (n === "n") return i - c;
  }
  return t <= e ? i - c : a + c;
}
function Io(t, e, n, r, i) {
  const a = (t.x + e.x) / 2, c = (t.y + e.y) / 2;
  if (n === "u") {
    if (r) {
      const f = de(t.x, e.x, t.side, "x");
      return [t, { x: f, y: t.y }, { x: f, y: e.y }, e];
    }
    const l = de(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: l }, { x: e.x, y: l }, e];
  }
  if (n === "zigzag") {
    if (r) {
      const v = de(t.x, e.x, t.side, "x"), s = de(t.y, e.y, t.side, "y");
      return i ? [t, { x: v, y: t.y }, { x: v, y: s }, { x: a, y: s }, { x: a, y: e.y }, e] : [t, { x: v, y: t.y }, { x: v, y: s }, { x: e.x, y: s }, e];
    }
    const l = de(t.y, e.y, t.side, "y"), f = de(t.x, e.x, t.side, "x");
    return i ? [t, { x: t.x, y: l }, { x: f, y: l }, { x: f, y: e.y }, e] : [t, { x: t.x, y: l }, { x: f, y: l }, { x: f, y: c }, { x: e.x, y: c }, e];
  }
  return [];
}
function fr(t, e, n = [], r = "elbow", i = []) {
  if (i.length > 0) return Xo(t, e, i);
  const a = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), c = e.side ?? (a === "e" || a === "w" ? "w" : "n"), l = a === "e" || a === "w", f = c === "e" || c === "w", v = Cn(t.x, e.x, n, "x"), s = Cn(t.y, e.y, n, "y"), p = [];
  if (l && f) {
    for (const x of v) p.push([t, { x, y: t.y }, { x, y: e.y }, e]);
    for (const x of s) p.push([t, { x: t.x, y: x }, { x: e.x, y: x }, e]);
  } else if (!l && !f) {
    for (const x of s) p.push([t, { x: t.x, y: x }, { x: e.x, y: x }, e]);
    for (const x of v) p.push([t, { x, y: t.y }, { x, y: e.y }, e]);
  } else if (l) {
    p.push([t, { x: e.x, y: t.y }, e]);
    for (const x of s)
      p.push([t, { x: t.x, y: x }, { x: e.x, y: x }, e]), p.push([t, { x: t.x, y: x }, e]);
    for (const x of v) p.push([t, { x, y: t.y }, { x, y: e.y }, e]);
  } else {
    p.push([t, { x: t.x, y: e.y }, e]);
    for (const x of s)
      p.push([t, { x: t.x, y: x }, e]), p.push([t, { x: t.x, y: x }, { x: e.x, y: x }, e]);
    for (const x of v) p.push([t, { x, y: t.y }, { x, y: e.y }, e]);
  }
  const o = Ge(p, n);
  if (r === "elbow") return o;
  if (r === "reverse") {
    const x = zn(o), w = Ge(p.filter((h) => zn(h) !== x), n);
    return w.length > 1 ? w : o;
  }
  const u = Io(t, e, r, l, f), d = Ge([u], n);
  return d.length > 1 ? d : o;
}
function hr(t) {
  return t.length < 2 ? 0 : we(t[t.length - 2], t[t.length - 1]);
}
const { PI: Po } = Math, be = Po + 1e-4, Xn = 0.5, Yn = [1, 1];
function In(t, e, n, r = (i) => i) {
  return t * r(0.5 - e * (0.5 - n));
}
const { min: qe } = Math;
function xr(t, e, n) {
  let r = qe(1, e / n);
  return qe(1, t + (qe(1, 1 - r) - t) * (r * 0.275));
}
function No(t) {
  return [-t[0], -t[1]];
}
function Rt(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function Pn(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function re(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function on(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function ee(t, e) {
  return [t[0] * e, t[1] * e];
}
function Ze(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function Eo(t, e) {
  return [t[0] / e, t[1] / e];
}
function pr(t) {
  return [t[1], -t[0]];
}
function Qe(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function Nn(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function Lo(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function To(t) {
  return Math.hypot(t[0], t[1]);
}
function En(t, e) {
  let n = t[0] - e[0], r = t[1] - e[1];
  return n * n + r * r;
}
function vr(t) {
  return Eo(t, To(t));
}
function Do(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function hn(t, e, n) {
  let r = Math.sin(n), i = Math.cos(n), a = t[0] - e[0], c = t[1] - e[1], l = a * i - c * r, f = a * r + c * i;
  return [l + e[0], f + e[1]];
}
function Ln(t, e, n, r) {
  let i = Math.sin(r), a = Math.cos(r), c = e[0] - n[0], l = e[1] - n[1], f = c * a - l * i, v = c * i + l * a;
  return t[0] = f + n[0], t[1] = v + n[1], t;
}
function Tn(t, e, n) {
  return Rt(t, ee(re(e, t), n));
}
function Fo(t, e, n, r) {
  let i = n[0] - e[0], a = n[1] - e[1];
  return t[0] = e[0] + i * r, t[1] = e[1] + a * r, t;
}
function mr(t, e, n) {
  return Rt(t, ee(e, n));
}
const pt = [0, 0], Jt = [0, 0], te = [0, 0];
function Ao(t, e) {
  let n = mr(t, vr(pr(re(t, Rt(t, [1, 1])))), -e), r = [], i = 1 / 13;
  for (let a = i; a <= 1; a += i) r.push(hn(n, t, be * 2 * a));
  return r;
}
function Wo(t, e, n) {
  let r = [], i = 1 / n;
  for (let a = i; a <= 1; a += i) r.push(hn(e, t, be * a));
  return r;
}
function Oo(t, e, n) {
  let r = re(e, n), i = ee(r, 0.5), a = ee(r, 0.51);
  return [re(t, i), re(t, a), Rt(t, a), Rt(t, i)];
}
function Ro(t, e, n, r) {
  let i = [], a = mr(t, e, n), c = 1 / r;
  for (let l = c; l < 1; l += c) i.push(hn(a, t, be * 3 * l));
  return i;
}
function Ho(t, e, n) {
  return [Rt(t, ee(e, n)), Rt(t, ee(e, n * 0.99)), re(t, ee(e, n * 0.99)), re(t, ee(e, n))];
}
function Dn(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function _o(t, e, n) {
  return t.slice(0, 10).reduce((r, i) => {
    let a = i.pressure;
    return e && (a = xr(r, i.distance, n)), (r + a) / 2;
  }, t[0].pressure);
}
function jo(t, e = {}) {
  let { size: n = 16, smoothing: r = 0.5, thinning: i = 0.5, simulatePressure: a = !0, easing: c = (L) => L, start: l = {}, end: f = {}, last: v = !1 } = e, { cap: s = !0, easing: p = (L) => L * (2 - L) } = l, { cap: o = !0, easing: u = (L) => --L * L * L + 1 } = f;
  if (t.length === 0 || n <= 0) return [];
  let d = t[t.length - 1].runningLength, x = Dn(l.taper, n, d), w = Dn(f.taper, n, d), h = (n * r) ** 2, k = [], m = [], g = _o(t, a, n), M = In(n, i, t[t.length - 1].pressure, c), $, y = t[0].vector, b = t[0].point, z = b, I = b, P = z, T = !1;
  for (let L = 0; L < t.length; L++) {
    let { pressure: A } = t[L], { point: G, vector: Z, distance: W, runningLength: j } = t[L], J = L === t.length - 1;
    if (!J && d - j < 3) continue;
    i ? (a && (A = xr(g, W, n)), M = In(n, i, A, c)) : M = n / 2, $ === void 0 && ($ = M);
    let et = j < x ? p(j / x) : 1, lt = d - j < w ? u((d - j) / w) : 1;
    M = Math.max(0.01, M * Math.min(et, lt));
    let xt = (J ? t[L] : t[L + 1]).vector, Et = J ? 1 : Nn(Z, xt), St = Nn(Z, y) < 0 && !T, X = Et !== null && Et < 0;
    if (St || X) {
      Qe(pt, y), Ze(pt, pt, M);
      for (let O = 0; O <= 1; O += 0.07692307692307693) on(Jt, G, pt), Ln(Jt, Jt, G, be * O), I = [Jt[0], Jt[1]], k.push(I), Pn(te, G, pt), Ln(te, te, G, be * -O), P = [te[0], te[1]], m.push(P);
      b = I, z = P, X && (T = !0);
      continue;
    }
    if (T = !1, J) {
      Qe(pt, Z), Ze(pt, pt, M), k.push(re(G, pt)), m.push(Rt(G, pt));
      continue;
    }
    Fo(pt, xt, Z, Et), Qe(pt, pt), Ze(pt, pt, M), on(Jt, G, pt), I = [Jt[0], Jt[1]], (L <= 1 || En(b, I) > h) && (k.push(I), b = I), Pn(te, G, pt), P = [te[0], te[1]], (L <= 1 || En(z, P) > h) && (m.push(P), z = P), g = A, y = Z;
  }
  let D = [t[0].point[0], t[0].point[1]], Y = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : Rt(t[0].point, [1, 1]), N = [], E = [];
  if (t.length === 1) {
    if (!(x || w) || v) return Ao(D, $ || M);
  } else {
    x || w && t.length === 1 || (s ? N.push(...Wo(D, m[0], 13)) : N.push(...Oo(D, k[0], m[0])));
    let L = pr(No(t[t.length - 1].vector));
    w || x && t.length === 1 ? E.push(Y) : o ? E.push(...Ro(Y, L, M, 29)) : E.push(...Ho(Y, L, M));
  }
  return k.concat(E, m.reverse(), N);
}
const Fn = [0, 0];
function An(t) {
  return t != null && t >= 0;
}
function Bo(t, e = {}) {
  var o;
  let { streamline: n = 0.5, size: r = 16, last: i = !1 } = e;
  if (t.length === 0) return [];
  let a = 0.15 + (1 - n) * 0.85, c = Array.isArray(t[0]) ? t : t.map(({ x: u, y: d, pressure: x = Xn }) => [u, d, x]);
  if (c.length === 2) {
    let u = c[1];
    c = c.slice(0, -1);
    for (let d = 1; d < 5; d++) c.push(Tn(c[0], u, d / 4));
  }
  c.length === 1 && (c = [...c, [...Rt(c[0], Yn), ...c[0].slice(2)]]);
  let l = [{ point: [c[0][0], c[0][1]], pressure: An(c[0][2]) ? c[0][2] : 0.25, vector: [...Yn], distance: 0, runningLength: 0 }], f = !1, v = 0, s = l[0], p = c.length - 1;
  for (let u = 1; u < c.length; u++) {
    let d = i && u === p ? [c[u][0], c[u][1]] : Tn(s.point, c[u], a);
    if (Lo(s.point, d)) continue;
    let x = Do(d, s.point);
    if (v += x, u < p && !f) {
      if (v < r) continue;
      f = !0;
    }
    on(Fn, s.point, d), s = { point: d, pressure: An(c[u][2]) ? c[u][2] : Xn, vector: vr(Fn), distance: x, runningLength: v }, l.push(s);
  }
  return l[0].vector = ((o = l[1]) == null ? void 0 : o.vector) || [0, 0], l;
}
function Ko(t, e = {}) {
  return jo(Bo(t, e), e);
}
var Uo = Ko;
function Te(t) {
  if (t.fillColor)
    try {
      return dn(t.fillColor);
    } catch {
      return t.color ? ft[t.color].bg : ft.blue.bg;
    }
  return t.color ? ft[t.color].bg : ft.blue.bg;
}
function Oe(t) {
  if (t.strokeColor)
    try {
      return dn(t.strokeColor);
    } catch {
      return t.color ? ft[t.color].border : "#2563eb";
    }
  return t.color ? ft[t.color].border : "#2563eb";
}
function gr(t) {
  return Oe(t);
}
function se(t) {
  if (t.textColor)
    try {
      return dn(t.textColor);
    } catch {
      return t.color ? ft[t.color].text : "#0f172a";
    }
  return t.color ? ft[t.color].text : "#0f172a";
}
function yr(t, e, n) {
  switch (t) {
    case "triangle":
      return `${e / 2},0 ${e},${n} 0,${n}`;
    case "diamond":
      return `${e / 2},0 ${e},${n / 2} ${e / 2},${n} 0,${n / 2}`;
    case "hexagon": {
      const r = e * 0.25;
      return `${r},0 ${e - r},0 ${e},${n / 2} ${e - r},${n} ${r},${n} 0,${n / 2}`;
    }
    case "star": {
      const r = e / 2, i = n / 2, a = Math.min(e, n) / 2, c = a * 0.4, l = [];
      for (let f = 0; f < 10; f++) {
        const v = Math.PI / 5 * f - Math.PI / 2, s = f % 2 === 0 ? a : c;
        l.push(`${r + s * Math.cos(v)},${i + s * Math.sin(v)}`);
      }
      return l.join(" ");
    }
    default:
      return "";
  }
}
function Vo(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let r = 1; r < t.length - 1; r++) {
    const [i, a] = t[r], [c, l] = t[r + 1];
    e += ` Q ${i} ${a} ${(i + c) / 2} ${(a + l) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function Go(t, e) {
  return e === "highlighter" ? { size: t * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: t, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 };
}
function Ne(t, e) {
  return e === "highlighter" ? t * 1.25 : t / 2;
}
function wr(t, e, n) {
  return t.length < 2 ? [] : Uo(t, Go(e, n));
}
function Wn(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [f, v] = t[0], s = Ne(e, n);
    return `M ${f - s} ${v} A ${s} ${s} 0 1 0 ${f + s} ${v} A ${s} ${s} 0 1 0 ${f - s} ${v} Z`;
  }
  const r = wr(t, e, n);
  if (r.length === 0) return "";
  if (r.length < 4)
    return r.reduce(
      (f, [v, s], p) => f + (p === 0 ? `M ${v} ${s}` : ` L ${v} ${s}`),
      ""
    ) + " Z";
  const i = r[0], a = r[1], c = r[2];
  let l = `M ${i[0]} ${i[1]} Q ${a[0]} ${a[1]} ${(a[0] + c[0]) / 2} ${(a[1] + c[1]) / 2} T `;
  for (let f = 2; f < r.length - 1; f += 1) {
    const v = r[f], s = r[f + 1];
    l += `${(v[0] + s[0]) / 2} ${(v[1] + s[1]) / 2} `;
  }
  return `${l}Z`;
}
function qo(t) {
  return t.map(([e, n], r) => `${r === 0 ? "M" : "L"} ${e} ${n}`).join(" ");
}
const On = /* @__PURE__ */ new WeakMap();
function an(t, e = 1) {
  if (t.type !== "draw") return { d: "", filled: !1, width: 0, opacity: 1 };
  const n = t.points ?? [], r = t.strokeWidth ?? 3, i = t.drawMode ?? "pen", a = i === "highlighter" ? 0.35 : 1;
  if (t.inkStyle === void 0 && n.length === 1)
    return { d: Vo(n), filled: !1, width: r / e, opacity: a };
  const c = t.inkStyle === "raw", l = n.length > 0 && (n.length === 1 || c && n.every(([v, s]) => v === n[0][0] && s === n[0][1]));
  return {
    d: l ? Wn([n[0]], r, i) : c ? qo(n) : Wn(n, r, i),
    filled: l || !c,
    width: i === "highlighter" ? r * 2.5 : r,
    opacity: a
  };
}
function br(t, e = 1) {
  var i;
  if (t.type !== "draw" || t.inkStyle === void 0 && ((i = t.points) == null ? void 0 : i.length) === 1) return an(t, e);
  const n = On.get(t);
  if (n) return n;
  const r = an(t);
  return On.set(t, r), r;
}
function Bt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function kr(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], r = (i, a) => {
    i.childNodes.forEach((c) => {
      if (c.nodeType === Node.TEXT_NODE) {
        const s = c.textContent ?? "";
        s && n[n.length - 1].push({ text: s, ...a });
        return;
      }
      if (c.nodeType !== Node.ELEMENT_NODE) return;
      const l = c;
      if (l.tagName === "BR") {
        n.push([]);
        return;
      }
      const f = { bold: a.bold || l.tagName === "B" || l.tagName === "STRONG", italic: a.italic || l.tagName === "I" || l.tagName === "EM", underline: a.underline || l.tagName === "U" }, v = l.tagName === "DIV" || l.tagName === "P" || l.tagName === "LI";
      v && n[n.length - 1].length > 0 && n.push([]), r(l, f), v && n.push([]);
    });
  };
  return r(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((i) => i.length > 0);
}
const Rn = /* @__PURE__ */ new WeakMap();
function Re(t) {
  const e = Rn.get(t);
  if (e !== void 0) return e;
  const n = t.html ? un(t.html) : t.text ? Bt(t.text).replace(/\n/g, "<br>") : "";
  return Rn.set(t, n), n;
}
function cn(t) {
  if (t)
    try {
      return ro(t);
    } catch {
      return;
    }
}
function $r(t) {
  try {
    return no(t);
  } catch {
    return null;
  }
}
function ke(t) {
  return t.html ? kr(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const Ie = 12;
function Vt(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function Ft(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function vt(t) {
  const e = t.rotation ?? 0, n = Vt(t);
  if (!e) return n;
  const r = Ft(t), i = Math.cos(e), a = Math.sin(e), c = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([v, s]) => {
    const p = v - r.x, o = s - r.y;
    return [r.x + p * i - o * a, r.y + p * a + o * i];
  }), l = c.map((v) => v[0]), f = c.map((v) => v[1]);
  return { minX: Math.min(...l), minY: Math.min(...f), maxX: Math.max(...l), maxY: Math.max(...f) };
}
function De(t, e, n) {
  const r = t.rotation ?? 0;
  if (!r) return { x: e, y: n };
  const i = Ft(t), a = Math.cos(-r), c = Math.sin(-r), l = e - i.x, f = n - i.y;
  return { x: i.x + l * a - f * c, y: i.y + l * c + f * a };
}
function Ut(t, e, n, r, i, a) {
  const c = i - n, l = a - r, f = c * c + l * l, v = f === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * c + (e - r) * l) / f));
  return Math.hypot(t - (n + v * c), e - (r + v * l));
}
function sn(t, e, n, r, i, a) {
  const c = 8 / r;
  if (t.type === "arrow") {
    const v = (t.strokeWidth ?? 2.5) / r / 2 + c, s = Dt(t, i ?? /* @__PURE__ */ new Map(), a);
    if (s.routing === "orthogonal" && s.pathPoints && s.pathPoints.length > 1) {
      for (let o = 1; o < s.pathPoints.length; o++) {
        const u = s.pathPoints[o - 1], d = s.pathPoints[o];
        if (Ut(e, n, u.x, u.y, d.x, d.y) <= v) return !0;
      }
      return !1;
    }
    if (s.bend === 0) return Ut(e, n, s.start.x, s.start.y, s.end.x, s.end.y) <= v;
    let p = s.start;
    for (let o = 1; o <= 16; o++) {
      const u = pe(o / 16, s.start, s.control, s.end);
      if (Ut(e, n, p.x, p.y, u.x, u.y) <= v) return !0;
      p = u;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const p = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / r / 2 + c;
    if (t.points.length === 1) {
      const [o, u] = t.points[0];
      return Math.hypot(e - o, n - u) <= p;
    }
    for (let o = 1; o < t.points.length; o++) {
      const [u, d] = t.points[o - 1], [x, w] = t.points[o];
      if (Ut(e, n, u, d, x, w) <= p) return !0;
    }
    return !1;
  }
  const l = De(t, e, n), f = Vt(t);
  if (t.type === "frame") {
    const v = l.x >= f.minX - c && l.x <= f.maxX + c && l.y >= f.minY - c && l.y <= f.maxY + c && (l.x <= f.minX + c || l.x >= f.maxX - c || l.y <= f.minY + c || l.y >= f.maxY - c), s = l.x >= f.minX - c && l.x <= f.maxX + c && l.y >= f.minY - 28 / r && l.y <= f.minY;
    return v || s;
  }
  return l.x >= f.minX - c && l.x <= f.maxX + c && l.y >= f.minY - c && l.y <= f.maxY + c;
}
function le(t, e, n) {
  const r = Vt(t), i = (r.minX + r.maxX) / 2, a = (r.minY + r.maxY) / 2, c = e - i, l = n - a;
  if (c === 0 && l === 0) return { x: i, y: a, side: "e" };
  const f = (r.maxX - r.minX) / 2, v = (r.maxY - r.minY) / 2, s = f === 0 ? 1 / 0 : Math.abs(f / c), p = v === 0 ? 1 / 0 : Math.abs(v / l);
  return s <= p ? { x: i + c * s, y: a + l * s, side: c >= 0 ? "e" : "w" } : { x: i + c * p, y: a + l * p, side: l >= 0 ? "s" : "n" };
}
function Mr(t, e, n, r) {
  const i = /* @__PURE__ */ new Set([e.id, n, r]);
  return t.filter((a) => !i.has(a.id)).map((a) => {
    const c = vt(a);
    return { minX: c.minX - Ie, minY: c.minY - Ie, maxX: c.maxX + Ie, maxY: c.maxY + Ie };
  }).filter((a) => a.maxX > a.minX && a.maxY > a.minY);
}
function Dt(t, e, n = []) {
  const r = t.fromId ? e.get(t.fromId) : void 0, i = t.toId ? e.get(t.toId) : void 0;
  let a = { x: t.x, y: t.y }, c = { x: t.x + t.w, y: t.y + t.h };
  if (r && i) {
    const d = Ft(r), x = Ft(i);
    a = le(r, x.x, x.y), c = le(i, d.x, d.y);
  } else r ? a = le(r, c.x, c.y) : i && (c = le(i, a.x, a.y));
  const l = (a.x + c.x) / 2, f = (a.y + c.y) / 2, v = t.bend ?? 0;
  let s = { x: l, y: f };
  if (v !== 0) {
    const d = c.x - a.x, x = c.y - a.y, w = Math.hypot(d, x) || 1;
    s = { x: l + -x / w * v, y: f + d / w * v };
  }
  const p = !!(r || i), o = t.routing ?? (p ? "orthogonal" : v !== 0 ? "curved" : "straight");
  if (o !== "orthogonal") return { start: a, end: c, control: s, bend: v, routing: o };
  const u = Mr(n, t, r == null ? void 0 : r.id, i == null ? void 0 : i.id);
  return {
    start: a,
    end: c,
    control: s,
    bend: v,
    routing: o,
    pathPoints: ur(fr(a, c, u, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function pe(t, e, n, r) {
  const i = 1 - t;
  return { x: i * i * e.x + 2 * i * t * n.x + t * t * r.x, y: i * i * e.y + 2 * i * t * n.y + t * t * r.y };
}
function He(t, e) {
  if (!t || !e) return null;
  const n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n <= r ? { start: n, end: r } : null;
}
function Fe(t, e, n, r) {
  if (Math.abs(e) < 1e-12) return t >= n && t <= r ? { start: 0, end: 1 } : null;
  const i = (n - t) / e, a = (r - t) / e;
  return He(
    { start: Math.min(i, a), end: Math.max(i, a) },
    { start: 0, end: 1 }
  );
}
function Je(t, e, n, r) {
  const i = e[0] - t[0], a = e[1] - t[1], c = t[0] - n.x, l = t[1] - n.y, f = i * i + a * a;
  if (f < 1e-12)
    return c * c + l * l <= r * r ? { start: 0, end: 1 } : null;
  const v = 2 * (c * i + l * a), s = c * c + l * l - r * r, p = v * v - 4 * f * s;
  if (p < 0) return null;
  const o = Math.sqrt(p);
  return He(
    { start: (-v - o) / (2 * f), end: (-v + o) / (2 * f) },
    { start: 0, end: 1 }
  );
}
function Zo(t, e, n, r, i) {
  const a = r.x - n.x, c = r.y - n.y, l = Math.hypot(a, c);
  if (l < 1e-12) return Je(t, e, n, i);
  const f = a / l, v = c / l, s = e[0] - t[0], p = e[1] - t[1], o = t[0] - n.x, u = t[1] - n.y, d = o * f + u * v, x = s * f + p * v, w = o * -v + u * f, h = s * -v + p * f, m = [
    He(
      Fe(d, x, 0, l),
      Fe(w, h, -i, i)
    ),
    Je(t, e, n, i),
    Je(t, e, r, i)
  ].filter((g) => g !== null);
  return m.length === 0 ? null : {
    start: Math.min(...m.map((g) => g.start)),
    end: Math.max(...m.map((g) => g.end))
  };
}
function Hn(t, e, n) {
  return [t[0] + (e[0] - t[0]) * n, t[1] + (e[1] - t[1]) * n];
}
function fe(t, e) {
  const n = t[t.length - 1];
  (!n || Math.hypot(e[0] - n[0], e[1] - n[1]) > 1e-9) && t.push([e[0], e[1]]);
}
function Qo(t, e, n) {
  let r = n[0][0], i = n[0][1], a = r, c = i;
  for (const [l, f] of n)
    r = Math.min(r, l), i = Math.min(i, f), a = Math.max(a, l), c = Math.max(c, f);
  return { ...t, id: e, points: n, x: r, y: i, w: a - r, h: c - i };
}
function Jo(t, e) {
  const n = t.slice(0, 480);
  let r = 1, i = `${n}-e${r}`;
  for (; e.has(i); ) i = `${n}-e${++r}`;
  return e.add(i), i;
}
function ge(t, e, n) {
  return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
}
function Pe(t, e, n) {
  return Math.abs(ge(e, n, t)) <= 1e-9 && t.x >= Math.min(e.x, n.x) - 1e-9 && t.x <= Math.max(e.x, n.x) + 1e-9 && t.y >= Math.min(e.y, n.y) - 1e-9 && t.y <= Math.max(e.y, n.y) + 1e-9;
}
function ti(t, e, n, r) {
  const i = ge(t, e, n), a = ge(t, e, r), c = ge(n, r, t), l = ge(n, r, e);
  return (i > 0 && a < 0 || i < 0 && a > 0) && (c > 0 && l < 0 || c < 0 && l > 0) ? !0 : Math.abs(i) <= 1e-9 && Pe(n, t, e) || Math.abs(a) <= 1e-9 && Pe(r, t, e) || Math.abs(c) <= 1e-9 && Pe(t, n, r) || Math.abs(l) <= 1e-9 && Pe(e, n, r);
}
function _n(t, e, n, r) {
  return ti(t, e, n, r) ? 0 : Math.min(
    Ut(t.x, t.y, n.x, n.y, r.x, r.y),
    Ut(e.x, e.y, n.x, n.y, r.x, r.y),
    Ut(n.x, n.y, t.x, t.y, e.x, e.y),
    Ut(r.x, r.y, t.x, t.y, e.x, e.y)
  );
}
function ln(t, e, n, r) {
  const i = Fe(t.x, e.x - t.x, n.minX - r, n.maxX + r), a = Fe(t.y, e.y - t.y, n.minY - r, n.maxY + r);
  return He(i, a) !== null;
}
function ei(t, e, n, r, i, a, c) {
  const l = 8 / i;
  if (t.type === "arrow") {
    const d = r + (t.strokeWidth ?? 2.5) / i / 2 + l, x = Dt(t, a, c), w = [];
    if (x.routing === "orthogonal" && x.pathPoints && x.pathPoints.length > 1)
      for (let h = 1; h < x.pathPoints.length; h++)
        w.push([x.pathPoints[h - 1], x.pathPoints[h]]);
    else if (x.bend === 0)
      w.push([x.start, x.end]);
    else {
      let h = x.start;
      for (let k = 1; k <= 16; k++) {
        const m = pe(k / 16, x.start, x.control, x.end);
        w.push([h, m]), h = m;
      }
    }
    return w.some(([h, k]) => _n(e, n, h, k) <= d);
  }
  const f = De(t, e.x, e.y), v = De(t, n.x, n.y), s = Vt(t);
  if (t.type !== "frame") return ln(f, v, s, r + l);
  const p = r + l, o = [
    { x: s.minX, y: s.minY },
    { x: s.maxX, y: s.minY },
    { x: s.maxX, y: s.maxY },
    { x: s.minX, y: s.maxY }
  ];
  for (let d = 0; d < o.length; d++)
    if (_n(f, v, o[d], o[(d + 1) % o.length]) <= p) return !0;
  const u = { minX: s.minX, minY: s.minY - 28 / i, maxX: s.maxX, maxY: s.minY };
  return ln(f, v, u, r);
}
function xn(t, e, n, r, i) {
  const a = [], c = Math.max(i, 0.1), l = r / c, f = new Set(t.map((s) => s.id)), v = new Map(t.map((s) => [s.id, s]));
  for (const s of t) {
    if (s.type !== "draw" || !s.points) {
      if (ei(s, e, n, l, c, v, t)) continue;
      a.push(s);
      continue;
    }
    const o = (s.drawMode ?? "pen") === "highlighter" ? (s.strokeWidth ?? 3) * 2.5 : s.strokeWidth ?? 3, u = l + o / 2, d = Vt(s);
    if (!ln(e, n, d, u)) {
      a.push(s);
      continue;
    }
    if (s.points.length === 0) {
      a.push(s);
      continue;
    }
    if (s.points.length === 1) {
      const [m, g] = s.points[0];
      Ut(m, g, e.x, e.y, n.x, n.y) > u && a.push(s);
      continue;
    }
    const x = [];
    let w = [], h = !1;
    const k = () => {
      w.length > 1 && x.push(w), w = [];
    };
    for (let m = 1; m < s.points.length; m++) {
      const g = s.points[m - 1], M = s.points[m], $ = Zo(g, M, e, n, u);
      if (!$) {
        w.length === 0 && fe(w, g), fe(w, M);
        continue;
      }
      h = !0, $.start > 1e-9 && (w.length === 0 && fe(w, g), fe(w, Hn(g, M, $.start))), k(), $.end < 1 - 1e-9 && (fe(w, Hn(g, M, $.end)), fe(w, M));
    }
    if (k(), !h) {
      a.push(s);
      continue;
    }
    x.forEach((m, g) => {
      const M = g === 0 ? s.id : Jo(s.id, f);
      a.push(Qo(s, M, m));
    });
  }
  return a;
}
function ni(t, e, n, r, i) {
  return xn(t, { x: e, y: n }, { x: e, y: n }, r, i);
}
function ri(t, e, n) {
  const r = 6 / n;
  let i = null, a = null;
  const c = [], l = [t.minX, (t.minX + t.maxX) / 2, t.maxX], f = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const v of e) {
    const s = vt(v), p = [s.minX, (s.minX + s.maxX) / 2, s.maxX], o = [s.minY, (s.minY + s.maxY) / 2, s.maxY];
    for (const u of l) for (const d of p) {
      const x = d - u;
      Math.abs(x) <= r && (!i || Math.abs(x) < Math.abs(i.delta)) && (i = { delta: x, at: d });
    }
    for (const u of f) for (const d of o) {
      const x = d - u;
      Math.abs(x) <= r && (!a || Math.abs(x) < Math.abs(a.delta)) && (a = { delta: x, at: d });
    }
  }
  return i && c.push({ x1: i.at, y1: t.minY - 1e3, x2: i.at, y2: t.maxY + 1e3 }), a && c.push({ x1: t.minX - 1e3, y1: a.at, x2: t.maxX + 1e3, y2: a.at }), { dx: (i == null ? void 0 : i.delta) ?? 0, dy: (a == null ? void 0 : a.delta) ?? 0, guides: c };
}
const oi = 14;
function ii({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: r,
  camera: i,
  interaction: a,
  eraserPos: c,
  guides: l,
  marquee: f,
  strokeColorOf: v
}) {
  return /* @__PURE__ */ C("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ _("g", { transform: `scale(${i.z}) translate(${-i.x}, ${-i.y})`, children: [
    t.map((s) => {
      if (s.type === "draw" && s.points) {
        const I = s.drawMode ?? "pen", P = s.strokeWidth ?? 3, T = e.has(s.id) ? V.blue : v(s), D = br(s, i.z);
        return /* @__PURE__ */ C(
          "path",
          {
            "data-canvas-vector-shape-id": s.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": I,
            "data-canvas-stroke-width": P,
            "data-canvas-ink-style": s.inkStyle ?? "smoothed",
            d: D.d,
            fill: D.filled ? T : "none",
            stroke: D.filled ? "none" : T,
            strokeWidth: D.width,
            strokeOpacity: I === "highlighter" ? 0.35 : void 0,
            fillOpacity: I === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          s.id
        );
      }
      if (s.type !== "arrow") return null;
      const p = e.has(s.id) ? V.blue : v(s), o = Dt(s, n, r), u = s.strokeWidth ?? 2.5, d = u / i.z, x = Math.max(10, 8 + u * 2), w = Math.max(4, 2 + u), h = x / i.z, k = w / i.z, m = o.routing === "orthogonal" && o.pathPoints ? o.pathPoints : null, g = m && m.length > 1;
      let M, $;
      if (g)
        M = nn(m), $ = hr(m);
      else if (o.routing === "curved") {
        M = `M ${o.start.x} ${o.start.y} Q ${o.control.x} ${o.control.y} ${o.end.x} ${o.end.y}`;
        const I = pe(0.94, o.start, o.control, o.end);
        $ = Math.atan2(o.end.y - I.y, o.end.x - I.x);
      } else
        M = `M ${o.start.x} ${o.start.y} L ${o.end.x} ${o.end.y}`, $ = Math.atan2(o.end.y - o.start.y, o.end.x - o.start.x);
      const y = g && m.length >= 2 ? we(m[0], m[1]) : o.routing === "orthogonal" && o.start.side ? o.start.side === "e" ? 0 : o.start.side === "w" ? Math.PI : o.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : we(o.start, o.end), b = s.strokeStyle === "dashed" ? `${8 / i.z} ${5 / i.z}` : s.strokeStyle === "dotted" ? `${1.5 / i.z} ${4 / i.z}` : void 0, z = (I, P, T, D) => I === "dot" ? /* @__PURE__ */ C("circle", { "data-canvas-arrow-dot-radius": w, cx: P, cy: T, r: k, fill: p }) : I === "none" ? null : /* @__PURE__ */ C(
        "polygon",
        {
          "data-canvas-arrowhead-size": x,
          points: `${P},${T} ${P - h * Math.cos(D - 0.4)},${T - h * Math.sin(D - 0.4)} ${P - h * Math.cos(D + 0.4)},${T - h * Math.sin(D + 0.4)}`,
          fill: p
        }
      );
      return /* @__PURE__ */ _("g", { "data-canvas-vector-shape-id": s.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": o.routing, "data-canvas-stroke-width": u, children: [
        /* @__PURE__ */ C("path", { d: M, fill: "none", stroke: p, strokeWidth: d, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: b }),
        z(s.arrowEnd ?? "arrow", o.end.x, o.end.y, $),
        z(s.arrowStart ?? "none", o.start.x, o.start.y, y + Math.PI)
      ] }, s.id);
    }),
    a.kind === "connect" && a.fromId !== void 0 && a.toX !== void 0 && a.toY !== void 0 && (() => {
      const s = n.get(a.fromId);
      if (!s) return null;
      const p = le(s, a.toX, a.toY), o = a.hoverId ? n.get(a.hoverId) : null, u = o ? le(o, p.x, p.y) : { x: a.toX, y: a.toY }, d = o ? fr(p, u, Mr(r, { id: "__preview" }, s.id, o.id)) : [p, u];
      return /* @__PURE__ */ _("g", { children: [
        /* @__PURE__ */ C("path", { d: nn(d), stroke: V.blue, strokeWidth: 2 / i.z, strokeDasharray: `${5 / i.z} ${4 / i.z}` }),
        o ? /* @__PURE__ */ C("rect", { x: vt(o).minX - 3 / i.z, y: vt(o).minY - 3 / i.z, width: vt(o).maxX - vt(o).minX + 6 / i.z, height: vt(o).maxY - vt(o).minY + 6 / i.z, fill: "none", stroke: V.blue, strokeWidth: 2 / i.z, rx: 6 / i.z }) : /* @__PURE__ */ C("circle", { cx: u.x, cy: u.y, r: 5 / i.z, fill: V.blue })
      ] });
    })(),
    c && /* @__PURE__ */ C("circle", { cx: c.x, cy: c.y, r: oi / i.z, fill: V.roseSoft, stroke: V.rose, strokeWidth: 1 / i.z }),
    l.map((s, p) => /* @__PURE__ */ C("line", { x1: s.x1, y1: s.y1, x2: s.x2, y2: s.y2, stroke: V.pink, strokeWidth: 1 / i.z, strokeDasharray: `${4 / i.z} ${4 / i.z}` }, `guide-${p}`)),
    f && /* @__PURE__ */ C("rect", { x: Math.min(f.startX, f.curX), y: Math.min(f.startY, f.curY), width: Math.abs(f.curX - f.startX), height: Math.abs(f.curY - f.startY), fill: V.marqueeFill, stroke: V.blue, strokeWidth: 1 / i.z })
  ] }) });
}
const ai = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], ci = /* @__PURE__ */ new Set([
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
]), si = [
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
function _e(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function Sr(t) {
  return ci.has(t.trim().toLowerCase());
}
function Cr(t) {
  const e = _e(t);
  return e ? Sr(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function li(t) {
  return _e(t).split(",").map((e) => e.trim()).filter(Boolean).map(Cr).filter(Boolean).join(", ");
}
function zr(t) {
  return _e(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function me(t) {
  return t.split(",").map((e) => _e(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !Sr(e));
}
const Ee = Array.from(/* @__PURE__ */ new Set([
  ...si,
  ...me(Ot.sans.stack),
  ...me(Ot.serif.stack),
  ...me(Ot.mono.stack),
  ...me(Ot.gothic.stack),
  ...me(Ot.korean.stack)
]));
function ui() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Ee;
  const t = Ee.filter((e) => {
    const n = Cr(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : Ee;
}
const di = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, fi = 24, hi = 28, Xr = 720;
function $t(t) {
  return t.fontSize ?? di[t.type] ?? 14;
}
function Mt(t) {
  var e;
  if (!t.fontFamily) return Ot.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = zr(oo(t.customFontFamily ?? ""));
    } catch {
    }
    return li(n) || Ot.sans.stack;
  }
  return ((e = Ot[t.fontFamily]) == null ? void 0 : e.stack) ?? Ot.sans.stack;
}
function Nt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function xi(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function pi(t) {
  var e, n, r;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((r = t.html) != null && r.includes("<ol>")) return "number";
}
function vi(t, e) {
  return {
    w: Math.min(Xr, Math.max(fi, Math.ceil(t))),
    h: Math.max(hi, Math.ceil(e))
  };
}
function mi(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = un(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${Xr}px`,
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
    fontSize: `${$t(e)}px`,
    fontFamily: Mt(e)
  }), document.body.appendChild(n);
  const r = n.getBoundingClientRect();
  return n.remove(), vi(r.width, r.height);
}
const gi = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), yi = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function wi({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: r,
  shapeById: i,
  allShapes: a,
  peerCursors: c,
  isDarkMode: l,
  renderEditor: f,
  renderShapeBody: v,
  setEditingId: s,
  onBendHandleDown: p,
  onOrthogonalSegmentHandleDown: o,
  onResizeHandleDown: u,
  onRotateHandleDown: d,
  onConnectHandleDown: x,
  onArrowEndpointDown: w
}) {
  return /* @__PURE__ */ _(ae, { children: [
    /* @__PURE__ */ C("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` }, children: t.map((h) => {
      if (h.type === "draw") return null;
      if (h.type === "arrow") {
        const g = Dt(h, i, a), M = g.routing === "orthogonal" && g.pathPoints ? fn(g.pathPoints) : g.routing === "curved" ? pe(0.5, g.start, g.control, g.end) : { x: (g.start.x + g.end.x) / 2, y: (g.start.y + g.end.y) / 2 }, $ = n === h.id, y = Re(h), b = e.has(h.id), z = ke(h).trim(), I = y || (b ? "관계 입력" : "");
        return !I && !$ ? null : /* @__PURE__ */ C(Kt.Fragment, { children: /* @__PURE__ */ C("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: M.x - 90, top: M.y - 18, width: 180, height: 36 }, onDoubleClick: (P) => {
          P.stopPropagation(), s(h.id);
        }, children: (I || $) && /* @__PURE__ */ C(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": z ? `관계 설명: ${z}` : "관계 설명 입력",
            title: $ ? void 0 : z ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${l ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: $t(h),
              fontFamily: Mt(h),
              maxWidth: "100%",
              minWidth: $ ? 120 / r.z : void 0,
              minHeight: $ ? 28 / r.z : void 0,
              color: h.textColor
            },
            children: $ ? f("text-center whitespace-nowrap") : /* @__PURE__ */ C("span", { dangerouslySetInnerHTML: { __html: I } }, "canvas-view")
          }
        ) }) }, h.id);
      }
      const k = e.has(h.id), m = Vt(h);
      return /* @__PURE__ */ _(
        "div",
        {
          "data-canvas-shape-id": h.id,
          "data-canvas-shape-type": h.type,
          "data-canvas-selected": k ? "true" : void 0,
          "data-canvas-text-align": Nt(h),
          "data-canvas-text-color": h.textColor,
          "data-canvas-font-size": $t(h),
          "data-canvas-font-family": h.fontFamily === "custom" ? h.customFontFamily ?? "custom" : h.fontFamily ?? "sans",
          "data-canvas-manual-size": h.manualSize ? "true" : void 0,
          "data-canvas-group-id": h.groupId,
          "data-canvas-list-kind": pi(h),
          "data-canvas-x": h.x,
          "data-canvas-y": h.y,
          "data-canvas-width": h.w,
          "data-canvas-height": h.h,
          className: "absolute",
          style: { left: m.minX, top: m.minY, width: m.maxX - m.minX, height: m.maxY - m.minY, transform: h.rotation ? `rotate(${h.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (g) => {
            g.stopPropagation(), gi.has(h.type) && s(h.id);
          },
          children: [
            v(h),
            k && /* @__PURE__ */ _(ae, { children: [
              /* @__PURE__ */ C("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / r.z}px solid ${V.blue}` } }),
              e.size === 1 && /* @__PURE__ */ _(ae, { children: [
                ["nw", "ne", "sw", "se"].map((g) => /* @__PURE__ */ C("div", { "data-canvas-resize-handle": g, onPointerDown: (M) => u(M, h, g), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / r.z, height: 10 / r.z, cursor: `${g}-resize`, left: g.includes("w") ? -5 / r.z : void 0, right: g.includes("e") ? -5 / r.z : void 0, top: g.includes("n") ? -5 / r.z : void 0, bottom: g.includes("s") ? -5 / r.z : void 0 } }, g)),
                /* @__PURE__ */ C("div", { onPointerDown: (g) => d(g, h), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / r.z, height: 12 / r.z, left: "50%", marginLeft: -6 / r.z, top: -28 / r.z, cursor: "grab" } }),
                yi.has(h.type) && ["n", "s", "w", "e"].map((g) => /* @__PURE__ */ C("div", { onPointerDown: (M) => x(M, h), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...g === "n" ? { left: "50%", top: -30 / r.z, marginLeft: -9 / r.z } : g === "s" ? { left: "50%", bottom: -30 / r.z, marginLeft: -9 / r.z } : g === "w" ? { top: "50%", left: -30 / r.z, marginTop: -9 / r.z } : { top: "50%", right: -30 / r.z, marginTop: -9 / r.z }, width: 18 / r.z, height: 18 / r.z, fontSize: 13 / r.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${g}`))
              ] })
            ] })
          ]
        },
        h.id
      );
    }) }),
    e.size === 1 && a.filter((h) => h.type === "arrow" && e.has(h.id)).map((h) => {
      const k = Dt(h, i, a), m = (g, M) => ({
        left: (g.x - r.x) * r.z - M / 2,
        top: (g.y - r.y) * r.z - M / 2
      });
      return /* @__PURE__ */ _(Kt.Fragment, { children: [
        k.routing === "orthogonal" && k.pathPoints && k.pathPoints.length > 2 ? k.pathPoints.slice(0, -1).map((g, M) => {
          var b;
          const $ = (b = k.pathPoints) == null ? void 0 : b[M + 1];
          if (!$) return null;
          const y = { x: (g.x + $.x) / 2, y: (g.y + $.y) / 2 };
          return /* @__PURE__ */ C("div", { "data-canvas-arrow-segment-handle": M, onPointerDown: (z) => o(z, h, M), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...m(y, 12), cursor: g.x === $.x ? "ew-resize" : "ns-resize" } }, `segment-${M}`);
        }) : k.routing === "curved" && /* @__PURE__ */ C("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (g) => p(g, h), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (k.start.x + k.end.x) / 2 * r.z - r.x * r.z - 5, top: (k.start.y + k.end.y) / 2 * r.z - r.y * r.z - 10, cursor: "grab" } }),
        ["start", "end"].map((g) => {
          const M = g === "start" ? k.start : k.end;
          return /* @__PURE__ */ C("div", { "data-canvas-arrow-endpoint": g, onPointerDown: ($) => w($, h, g), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...m(M, 12), cursor: "grab" } }, g);
        })
      ] }, `arrow-handles-${h.id}`);
    }),
    c == null ? void 0 : c.map((h) => /* @__PURE__ */ _("div", { className: "absolute pointer-events-none z-40", style: { left: (h.x - r.x) * r.z, top: (h.y - r.y) * r.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ C("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ C("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: h.color, stroke: V.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ C("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: h.color }, children: h.name })
    ] }, h.id))
  ] });
}
function pn(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function bi(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), pn(t) && e.push("diagram"), e;
}
function ga(t) {
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
const ki = "#3b82f6";
function ie(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function Le(t) {
  return Math.round(ie(t, 0, 255)).toString(16).padStart(2, "0");
}
function $i(t) {
  const e = t.trim().endsWith("%"), n = Number.parseFloat(t);
  return Number.isFinite(n) ? e ? n * 2.55 : n : 0;
}
function ye(t) {
  var a, c;
  const e = t.trim().toLowerCase(), n = (a = e.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : a[1];
  if (n)
    return n.length === 3 || n.length === 4 ? `#${n.slice(0, 3).split("").map((l) => `${l}${l}`).join("")}` : `#${n.slice(0, 6)}`;
  const r = (c = e.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : c[1];
  if (r) {
    const l = r.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map($i);
    if (l.length === 3) return `#${l.map(Le).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? ki;
}
function jn(t) {
  const e = ye(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, r = Number.parseInt(e.slice(2, 4), 16) / 255, i = Number.parseInt(e.slice(4, 6), 16) / 255, a = Math.max(n, r, i), c = Math.min(n, r, i), l = a - c;
  let f = 0;
  return l !== 0 && (a === n ? f = 60 * ((r - i) / l % 6) : a === r ? f = 60 * ((i - n) / l + 2) : f = 60 * ((n - r) / l + 4)), f < 0 && (f += 360), { hue: f, saturation: a === 0 ? 0 : l / a, value: a };
}
function Bn({ hue: t, saturation: e, value: n }) {
  const r = (t % 360 + 360) % 360, i = n * e, a = i * (1 - Math.abs(r / 60 % 2 - 1)), c = n - i;
  let l = 0, f = 0, v = 0;
  return r < 60 ? [l, f, v] = [i, a, 0] : r < 120 ? [l, f, v] = [a, i, 0] : r < 180 ? [l, f, v] = [0, i, a] : r < 240 ? [l, f, v] = [0, a, i] : r < 300 ? [l, f, v] = [a, 0, i] : [l, f, v] = [i, 0, a], `#${Le((l + c) * 255)}${Le((f + c) * 255)}${Le((v + c) * 255)}`;
}
function Mi(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function Si({ value: t, onChange: e }) {
  const [n, r] = at(() => jn(t)), i = Q(null), a = Q(null), c = Q(null);
  wt(() => {
    const k = jn(t);
    r((m) => Mi(m, k) ? m : k);
  }, [t]);
  const l = (k) => {
    r(k), e(Bn(k));
  }, f = (k) => {
    var y;
    const m = (y = i.current) == null ? void 0 : y.getBoundingClientRect();
    if (!m) return;
    const g = k.clientX - (m.left + m.width / 2), M = k.clientY - (m.top + m.height / 2), $ = Math.atan2(M, g) * 180 / Math.PI + 90;
    l({ ...n, hue: ($ + 360) % 360 });
  }, v = (k) => {
    var g;
    const m = (g = a.current) == null ? void 0 : g.getBoundingClientRect();
    m && l({
      ...n,
      saturation: ie((k.clientX - m.left) / m.width, 0, 1),
      value: ie(1 - (k.clientY - m.top) / m.height, 0, 1)
    });
  }, s = (k, m) => {
    var g, M;
    m.button !== 0 && m.pointerType !== "touch" || (m.preventDefault(), m.stopPropagation(), c.current = k, (M = (g = m.currentTarget).setPointerCapture) == null || M.call(g, m.pointerId), k === "hue" ? f(m) : v(m));
  }, p = (k) => {
    c.current && (k.preventDefault(), c.current === "hue" ? f(k) : v(k));
  }, o = (k) => {
    var m, g;
    c.current = null;
    try {
      (g = (m = k.currentTarget).releasePointerCapture) == null || g.call(m, k.pointerId);
    } catch {
      return;
    }
  }, u = (n.hue - 90) * Math.PI / 180, d = 53, x = {
    left: 66 + Math.cos(u) * d,
    top: 66 + Math.sin(u) * d
  }, w = Bn({ hue: n.hue, saturation: 1, value: 1 }), h = (k) => l({ ...n, hue: (n.hue + k + 360) % 360 });
  return /* @__PURE__ */ _("div", { className: "canvas-color-wheel", "data-canvas-color-wheel": !0, children: [
    /* @__PURE__ */ _(
      "div",
      {
        ref: i,
        className: "canvas-color-wheel-hue",
        role: "slider",
        "aria-label": "색상 색상환",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(n.hue),
        tabIndex: 0,
        onPointerDown: (k) => s("hue", k),
        onPointerMove: p,
        onPointerUp: o,
        onKeyDown: (k) => {
          (k.key === "ArrowLeft" || k.key === "ArrowDown") && (k.preventDefault(), h(-1)), (k.key === "ArrowRight" || k.key === "ArrowUp") && (k.preventDefault(), h(1));
        },
        children: [
          /* @__PURE__ */ C("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ C("span", { className: "canvas-color-wheel-hue-marker", style: { left: x.left, top: x.top } })
        ]
      }
    ),
    /* @__PURE__ */ C(
      "div",
      {
        ref: a,
        className: "canvas-color-wheel-sv",
        role: "slider",
        "aria-label": "채도와 밝기",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(n.saturation * n.value * 100),
        tabIndex: 0,
        style: { backgroundColor: w },
        onPointerDown: (k) => s("sv", k),
        onPointerMove: p,
        onPointerUp: o,
        onKeyDown: (k) => {
          const m = k.shiftKey ? 0.1 : 0.02;
          k.key === "ArrowLeft" && (k.preventDefault(), l({ ...n, saturation: ie(n.saturation - m, 0, 1) })), k.key === "ArrowRight" && (k.preventDefault(), l({ ...n, saturation: ie(n.saturation + m, 0, 1) })), k.key === "ArrowDown" && (k.preventDefault(), l({ ...n, value: ie(n.value - m, 0, 1) })), k.key === "ArrowUp" && (k.preventDefault(), l({ ...n, value: ie(n.value + m, 0, 1) }));
        },
        children: /* @__PURE__ */ C("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${n.saturation * 100}%`, top: `${(1 - n.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ _("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ C("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ C("span", { children: ye(t).toUpperCase() })
    ] })
  ] });
}
const Ci = [2, 4, 6, 8];
function zi(t) {
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
      return Yr(t);
  }
}
function Kn(t) {
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
      return Yr(t);
  }
}
function Yr(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function tn(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Un(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Xi({
  shape: t,
  selection: e,
  selectionActions: n,
  shapes: r,
  camera: i,
  canvasSize: a,
  isDarkMode: c,
  editing: l,
  showPalette: f,
  installedFontFamilies: v,
  setShowPalette: s,
  setActiveColor: p,
  patchSelected: o,
  applyFormat: u,
  applyList: d,
  applyCustomFontFamily: x
}) {
  var Wt, Gt;
  const w = c ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", h = e.length > 1, k = e.some((S) => !!S.groupId), m = t.type === "draw", g = m || Un(t) && !tn(t) ? "stroke" : tn(t) ? "fill" : "text", [M, $] = at(g), [y, b] = at("");
  ce(() => $(g), [g, t.id]);
  const z = M === "text" ? se(t) : M === "stroke" ? t.strokeColor ?? (t.color ? ft[t.color].border : V.ink) : Te(t);
  ce(() => b(ye(z).toUpperCase()), [z]);
  const I = ye(z), P = (S) => {
    o(m || M === "stroke" ? { strokeColor: S } : M === "text" ? { textColor: S } : { fillColor: S });
  }, T = (S) => {
    p(S), o(m || M === "stroke" ? { color: S, strokeColor: void 0 } : M === "text" ? { textColor: ft[S].text } : { color: S, fillColor: void 0 }), s(!1);
  }, D = Q(null), [Y, N] = at({ width: 380, height: 260 });
  ce(() => {
    const S = D.current;
    if (!S) return;
    const R = () => {
      const ct = Math.max(1, Math.ceil(S.getBoundingClientRect().width)), tt = Math.max(1, Math.ceil(S.getBoundingClientRect().height));
      N((yt) => yt.width === ct && yt.height === tt ? yt : { width: ct, height: tt });
    };
    if (R(), typeof ResizeObserver > "u") return;
    const q = new ResizeObserver(R);
    return q.observe(S), () => q.disconnect();
  }, [l, v.length, c, t, f]);
  const E = Y.width, L = Y.height, A = e.reduce((S, R) => {
    const q = vt(R);
    return {
      minX: Math.min(S.minX, q.minX),
      minY: Math.min(S.minY, q.minY),
      maxX: Math.max(S.maxX, q.maxX),
      maxY: Math.max(S.maxY, q.maxY)
    };
  }, vt(t)), G = (A.minX - i.x) * i.z, Z = (A.minY - i.y) * i.z, W = (A.maxX - i.x) * i.z, j = (A.maxY - i.y) * i.z, J = Math.max(8, a.width - E - 8), et = Math.max(8, a.height - L - 8), lt = (S, R) => ({ left: Math.min(Math.max(8, S), J), top: Math.min(Math.max(8, R), et) }), xt = [
    lt((G + W) / 2 - E / 2, Z - L - 12),
    lt((G + W) / 2 - E / 2, j + 12),
    lt((a.width - E) / 2, 12),
    lt(G - E - 12, Z + (j - Z - L) / 2),
    lt(W + 12, Z + (j - Z - L) / 2)
  ], Et = r.map((S) => {
    const R = vt(S);
    return { left: (R.minX - i.x) * i.z, top: (R.minY - i.y) * i.z, right: (R.maxX - i.x) * i.z, bottom: (R.maxY - i.y) * i.z };
  });
  if (t.type === "arrow") {
    const S = Dt(t, new Map(r.map((tt) => [tt.id, tt])), r), R = S.routing === "orthogonal" && S.pathPoints ? fn(S.pathPoints) : { x: (S.start.x + S.end.x) / 2, y: (S.start.y + S.end.y) / 2 }, q = 180 * i.z, ct = 36 * i.z;
    Et.push({
      left: (R.x - i.x) * i.z - q / 2,
      top: (R.y - i.y) * i.z - ct / 2,
      right: (R.x - i.x) * i.z + q / 2,
      bottom: (R.y - i.y) * i.z + ct / 2
    });
  }
  const St = xt[0], X = (S, R) => {
    const q = Math.max(0, Math.min(S.left + E, R.right) - Math.max(S.left, R.left)), ct = Math.max(0, Math.min(S.top + L, R.bottom) - Math.max(S.top, R.top));
    return q * ct;
  }, O = ((Wt = xt.map((S) => ({
    candidate: S,
    overlap: Et.reduce((R, q) => R + X(S, q), 0),
    distance: Math.hypot(S.left - St.left, S.top - St.top)
  })).sort((S, R) => S.overlap - R.overlap || S.distance - R.distance)[0]) == null ? void 0 : Wt.candidate) ?? St, K = $t(t), st = e.every(zi), gt = new Set(e.map(Kn)).size === 1 ? Kn(t) : void 0, bt = bi(t), At = t.type === "arrow" ? "arrow" : bt[0] ?? "color", [H, Lt] = at(At);
  ce(() => {
    bt.includes(H) || Lt(At);
  }, [At, bt, H]);
  const It = t.type === "arrow" && !!((Gt = t.orthogonalWaypoints) != null && Gt.length), rt = t.type === "arrow" ? t.arrowStart ?? "none" : "none", mt = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", ut = (S, R, q, ct, tt = ct) => /* @__PURE__ */ C("button", { type: "button", title: ct, "aria-label": tt, onClick: q, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${R ? "bg-blue-600 text-white" : w}`, children: S }), Ct = (S) => /* @__PURE__ */ C("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: S }), it = (S, R, q, ct, tt = !1) => /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      title: R,
      "aria-label": R,
      disabled: !ct,
      onClick: q,
      className: `w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default ${tt ? "text-rose-500 hover:bg-rose-500/10" : w}`,
      children: /* @__PURE__ */ C(S, { className: "w-4 h-4" })
    }
  ), zt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ _("div", { ref: D, "data-canvas-inspector": m ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${c ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: O.left, top: O.top }, onPointerDown: (S) => {
    S.stopPropagation();
    const R = S.target instanceof Element ? S.target : null;
    R != null && R.closest("input, select, textarea") || S.preventDefault();
  }, onClick: (S) => S.stopPropagation(), children: [
    h ? /* @__PURE__ */ _("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      e.length,
      "개 선택됨"
    ] }) : /* @__PURE__ */ C("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: bt.map((S) => /* @__PURE__ */ C("button", { type: "button", role: "tab", "aria-selected": H === S, onClick: () => Lt(S), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${H === S ? "bg-blue-600 text-white" : w}`, children: zt[S] }, S)) }),
    /* @__PURE__ */ _("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: h || H === "color" || m ? void 0 : "none" }, children: [
      /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: m ? "그리기" : "색상" }),
      /* @__PURE__ */ C("button", { type: "button", title: m ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": m ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => s((S) => !S), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${c ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ C("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ C("span", { className: "canvas-color-wheel-trigger-dot", style: { background: I } }) }) }),
      f && /* @__PURE__ */ _("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${c ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !m && /* @__PURE__ */ _("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          tn(t) && /* @__PURE__ */ C("button", { type: "button", role: "tab", "aria-selected": M === "fill", onClick: () => $("fill"), className: M === "fill" ? "is-active" : "", children: "배경" }),
          Un(t) && /* @__PURE__ */ C("button", { type: "button", role: "tab", "aria-selected": M === "stroke", onClick: () => $("stroke"), className: M === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ C("button", { type: "button", role: "tab", "aria-selected": M === "text", onClick: () => $("text"), className: M === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ C("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: sr.map((S) => /* @__PURE__ */ C("button", { type: "button", title: ft[S].label, "aria-label": `색 ${ft[S].label}`, onClick: () => T(S), className: "canvas-color-preset", style: { background: ft[S].bg, borderColor: ft[S].border, outline: t.color === S && !t.fillColor && !t.strokeColor ? `2px solid ${V.blue}` : void 0, outlineOffset: 1 } }, S)) }),
        /* @__PURE__ */ C(Si, { value: z, onChange: P }),
        /* @__PURE__ */ _("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ C("span", { children: "#" }),
          /* @__PURE__ */ C(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: y.replace(/^#/, ""),
              onChange: (S) => {
                const R = S.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                b(`#${R}`.toUpperCase()), R.length === 6 && P(`#${R}`);
              },
              onBlur: () => b(ye(z).toUpperCase()),
              onPointerDown: (S) => S.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !h && H !== "color" && !m && /* @__PURE__ */ _(ae, { children: [
      /* @__PURE__ */ _("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ _("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: se(t), color: V.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ C("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ C("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? se(t), onChange: (S) => o({ textColor: S.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ _("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${c ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ C("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ C("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => o({ fontSize: Math.max(8, K - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${w}`, children: /* @__PURE__ */ C(so, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ C("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: K }),
          /* @__PURE__ */ C("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => o({ fontSize: Math.min(96, K + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${w}`, children: /* @__PURE__ */ C(lo, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ _("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${c ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ C("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (S) => {
            const R = xi(S.target.value);
            o(R === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: R, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${c ? "text-slate-200" : "text-slate-700"}`, children: ai.map((S) => /* @__PURE__ */ C("option", { value: S, className: c ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: Ot[S].label }, S)) }),
          /* @__PURE__ */ C(uo, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ _(ae, { children: [
          /* @__PURE__ */ C("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (S) => x(S.target.value), onChange: (S) => S.currentTarget.value && x(S.currentTarget.value), onKeyDown: (S) => {
            S.key === "Enter" && (S.preventDefault(), x(S.currentTarget.value));
          }, onDoubleClick: (S) => S.stopPropagation(), onPointerDown: (S) => S.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${c ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ C("datalist", { id: `canvas-font-families-${t.id}`, children: v.map((S) => /* @__PURE__ */ C("option", { value: S }, S)) })
        ] })
      ] }),
      /* @__PURE__ */ _("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${c ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ C("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", fo, "왼쪽 정렬"], ["center", ho, "가운데 정렬"], ["right", xo, "오른쪽 정렬"]].map(([S, R, q]) => /* @__PURE__ */ C("button", { type: "button", "aria-label": q, title: q, onClick: () => o({ textAlign: S }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${Nt(t) === S ? "bg-blue-600 text-white shadow-sm" : w}`, children: /* @__PURE__ */ C(R, { className: "w-4 h-4" }) }, S)) }),
        l && /* @__PURE__ */ _(ae, { children: [
          /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ C("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", po, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", vo, "번호 목록"]].map(([S, R, q]) => /* @__PURE__ */ C("button", { type: "button", onClick: () => d(S), "aria-label": q, title: q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${w}`, children: R ? /* @__PURE__ */ C(R, { className: "w-4 h-4" }) : /* @__PURE__ */ C("span", { className: "text-base leading-none", children: "–" }) }, S)) }),
          /* @__PURE__ */ C("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: mo, label: "굵게" }, { cmd: "italic", Icon: go, label: "기울임" }, { cmd: "underline", Icon: yo, label: "밑줄" }].map(({ cmd: S, Icon: R, label: q }) => /* @__PURE__ */ C("button", { type: "button", onClick: () => u(S), "aria-label": q, title: q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${w}`, children: /* @__PURE__ */ C(R, { className: "w-4 h-4" }) }, S)) })
        ] })
      ] }),
      (H === "arrange" && t.type === "card" || H === "arrow" && t.type === "arrow") && /* @__PURE__ */ _("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${c ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ _(ae, { children: [
          /* @__PURE__ */ C("div", { className: `w-px h-6 ${c ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ C("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (S) => S.stopPropagation(), onChange: (S) => o({ category: S.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${c ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ _("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ _("div", { className: "flex items-center gap-1", children: [
            Ct("경로"),
            ut("직선", (t.routing ?? "straight") === "straight", () => o({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            ut("직각", t.routing === "orthogonal", () => o({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            ut("곡선", (t.routing ?? "") === "curved", () => o({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            It && ut("자동", !1, () => o({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ _("div", { className: "flex items-center gap-1", children: [
            Ct("선"),
            ut("—", (t.strokeStyle ?? "solid") === "solid", () => o({ strokeStyle: "solid" }), "실선"),
            ut("- -", t.strokeStyle === "dashed", () => o({ strokeStyle: "dashed" }), "파선"),
            ut("···", t.strokeStyle === "dotted", () => o({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ _("div", { className: "flex items-center gap-1", children: [
            Ct("시작"),
            ut(rt === "none" ? "○" : rt === "dot" ? "●" : "◀", rt !== "none", () => o({ arrowStart: rt === "none" ? "arrow" : rt === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${rt === "none" ? "없음" : rt === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ _("div", { className: "flex items-center gap-1", children: [
            Ct("끝"),
            ut(mt === "none" ? "○" : mt === "dot" ? "●" : "▶", mt !== "none", () => o({ arrowEnd: mt === "arrow" ? "dot" : mt === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${mt === "none" ? "없음" : mt === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      H === "diagram" && /* @__PURE__ */ C("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${c ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    st && /* @__PURE__ */ _("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${c ? "border-slate-700" : "border-slate-100"}`, children: [
      Ct("굵기"),
      Ci.map((S) => /* @__PURE__ */ C(Kt.Fragment, { children: ut(String(S), gt === S, () => o({ strokeWidth: S }), `굵기 ${S}`) }, S))
    ] }),
    /* @__PURE__ */ _("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${c ? "border-slate-700" : "border-slate-100"}`, children: [
      Ct("선택"),
      it(wo, "그룹 (Ctrl+G)", n.group, h),
      it(bo, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, k),
      it(ko, "복제", n.duplicateSelected, !0),
      it($o, "삭제 (Delete)", n.deleteSelected, !0, !0)
    ] })
  ] });
}
const Yi = [2, 4, 6, 8];
function Ii({
  tool: t,
  activeColor: e,
  drawStrokeWidth: n,
  drawInkStyle: r,
  objectSnapEnabled: i,
  onSelectInkStyle: a,
  onSelectObjectSnap: c,
  isDarkMode: l,
  onSelectColor: f,
  onSelectStrokeWidth: v
}) {
  const s = t === "draw" || t === "highlighter", p = `rounded-lg px-2 py-1 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${l ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-700"}`, o = /* @__PURE__ */ _(
    "button",
    {
      type: "button",
      "aria-label": "개체 정렬",
      "aria-pressed": i,
      title: "개체 이동 시 주변 개체에 자동 정렬",
      className: p,
      style: { minHeight: 28, whiteSpace: "nowrap" },
      onClick: () => c(!i),
      children: [
        "개체 정렬 ",
        i ? "켬" : "끔"
      ]
    }
  );
  return s ? /* @__PURE__ */ _(
    "div",
    {
      "data-canvas-pen-palette": "true",
      "aria-label": t === "highlighter" ? "형광펜 설정" : "펜 설정",
      style: { left: "50%", transform: "translateX(-50%)", width: 340, maxWidth: "calc(100% - 32px)", boxSizing: "border-box", justifyContent: "center" },
      className: `absolute top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex flex-wrap items-center gap-2 px-3 py-2 rounded-2xl border shadow-xl backdrop-blur-md ${l ? "bg-slate-900/90 border-slate-700 text-slate-200 shadow-slate-950/40" : "bg-white/90 border-slate-200 text-slate-700 shadow-slate-300/40"}`,
      onPointerDown: (d) => d.stopPropagation(),
      onClick: (d) => d.stopPropagation(),
      children: [
        /* @__PURE__ */ C("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }, role: "radiogroup", "aria-label": "펜 색상 선택", children: sr.map((d) => {
          const x = ft[d], w = e === d;
          return /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": w,
              title: `${x.label} 선택`,
              "aria-label": x.label,
              onClick: () => f(d),
              className: `group relative w-6 h-6 rounded-full transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${w ? "scale-110 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900" : "hover:scale-105 opacity-90 hover:opacity-100"}`,
              style: {
                backgroundColor: x.border,
                borderColor: x.border
              },
              children: w && /* @__PURE__ */ C("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ C("span", { className: "w-1.5 h-1.5 rounded-full bg-white shadow-sm" }) })
            },
            d
          );
        }) }),
        /* @__PURE__ */ _("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ C("span", { className: `mr-1 text-xs font-semibold ${l ? "text-slate-300" : "text-slate-500"}`, children: "두께" }),
          Yi.map((d) => {
            const x = n === d;
            return /* @__PURE__ */ C(
              "button",
              {
                type: "button",
                title: `두께 ${d}px`,
                "aria-label": `두께 ${d}px`,
                "aria-pressed": x,
                onClick: () => v(d),
                className: `w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-semibold transition-colors ${x ? "bg-blue-600 text-white font-bold" : l ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-700"}`,
                children: /* @__PURE__ */ C(
                  "span",
                  {
                    className: "rounded-full bg-current",
                    style: { width: `${Math.max(3, d + 1)}px`, height: `${Math.max(3, d + 1)}px` }
                  }
                )
              },
              d
            );
          })
        ] }),
        /* @__PURE__ */ C("div", { role: "group", "aria-label": "새 획 보정", style: { display: "flex", gap: 2 }, children: ["raw", "smoothed"].map((d) => /* @__PURE__ */ C(
          "button",
          {
            type: "button",
            "aria-label": d === "raw" ? "보정 끔" : "보정 켬",
            "aria-pressed": r === d,
            title: "새로 그리는 획에 적용",
            onClick: () => a(d),
            className: p,
            style: { minHeight: 28, whiteSpace: "nowrap", ...r === d ? { background: "#2563eb", color: "#ffffff" } : {} },
            children: d === "raw" ? "보정 끔" : "보정 켬"
          },
          d
        )) }),
        /* @__PURE__ */ C("div", { style: { width: "100%", display: "flex", justifyContent: "center" }, children: o })
      ]
    }
  ) : null;
}
function Pi({ isDarkMode: t, onExit: e }) {
  return /* @__PURE__ */ _(
    "button",
    {
      type: "button",
      "data-canvas-pen-mode-exit": "true",
      "aria-label": "펜 모드 종료 후 선택 도구로 전환",
      onPointerDown: (n) => n.stopPropagation(),
      onClick: (n) => {
        n.stopPropagation(), e();
      },
      className: `absolute right-safe-4 bottom-safe-4 z-50 pointer-events-auto inline-flex min-h-11 items-center gap-2 rounded-2xl border px-3.5 py-2 text-sm font-semibold shadow-xl backdrop-blur-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${t ? "border-slate-700 bg-slate-900/90 text-slate-100 shadow-slate-950/40 hover:bg-slate-800" : "border-slate-200 bg-white/90 text-slate-700 shadow-slate-300/40 hover:bg-slate-50"}`,
      children: [
        /* @__PURE__ */ C(Mo, { "aria-hidden": "true", className: "h-4 w-4" }),
        /* @__PURE__ */ C("span", { children: "펜 모드 종료" })
      ]
    }
  );
}
function en(t) {
  const e = t.closest("[data-canvas-board-id]");
  return (e == null ? void 0 : e.getAttribute("data-canvas-pen-mode")) === "true" || ["draw", "highlighter", "eraser"].includes((e == null ? void 0 : e.getAttribute("data-canvas-active-tool")) ?? "");
}
function Ni({ category: t, onCommit: e }) {
  const [n, r] = at(!1), i = Q(null);
  return wt(() => {
    var a;
    n && ((a = i.current) == null || a.focus());
  }, [n]), /* @__PURE__ */ _(
    "div",
    {
      ref: i,
      "data-canvas-card-type": !0,
      role: n ? "textbox" : "button",
      "aria-label": "카드 유형 편집",
      tabIndex: 0,
      className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
      contentEditable: n,
      suppressContentEditableWarning: !0,
      onPointerDown: (a) => {
        a.pointerType === "pen" || en(a.currentTarget) || a.stopPropagation();
      },
      onDoubleClick: (a) => a.stopPropagation(),
      onClick: (a) => {
        n || en(a.currentTarget) || r(!0);
      },
      onBlur: (a) => {
        if (!n) return;
        const c = (a.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim();
        e(c.toUpperCase() || "ENTITY"), r(!1);
      },
      onKeyDown: (a) => {
        !n && (a.key === "Enter" || a.key === " ") ? (a.preventDefault(), a.stopPropagation(), en(a.currentTarget) || r(!0)) : n && a.key === "Enter" && (a.preventDefault(), a.stopPropagation(), a.currentTarget.blur());
      },
      children: [
        "[ ",
        t || "ENTITY",
        " ]"
      ]
    },
    n ? "edit" : "view"
  );
}
function Ei({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: r,
  commitEditorHtml: i,
  onEditorKeyDown: a,
  setShapes: c,
  onDirty: l,
  renderDiagram: f
}) {
  const v = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", s = (o, u) => /* @__PURE__ */ C(
    "div",
    {
      ref: r,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": "텍스트 편집",
      "data-canvas-editor": !0,
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onInput: i,
      onBlur: i,
      onDoubleClick: (d) => d.stopPropagation(),
      onKeyDown: a,
      className: `${v} ${o}`,
      style: u
    },
    "canvas-editor"
  );
  return { renderEditor: s, renderShapeBody: (o) => {
    const u = ft[o.color ?? "blue"], d = e === o.id, x = Re(o);
    if (o.type === "frame") {
      const $ = o.strokeWidth ?? 2;
      return /* @__PURE__ */ C(
        "div",
        {
          "data-canvas-stroke-width": $,
          className: "w-full h-full rounded",
          style: { border: `${$ / t.z}px solid ${n ? V.slate600 : V.slate400}` },
          children: /* @__PURE__ */ C(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? V.slate400 : V.muted
              },
              children: d ? s("", { fontSize: 13 / t.z }) : ke(o) || "프레임"
            }
          )
        }
      );
    }
    if (o.type === "note")
      return /* @__PURE__ */ C(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: Te(o), borderTop: `6px solid ${u.border}`, color: u.text },
          children: d ? s("font-medium", { color: se(o), fontSize: $t(o), fontFamily: Mt(o), textAlign: Nt(o) }) : x ? /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: se(o), fontSize: $t(o), fontFamily: Mt(o), textAlign: Nt(o) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view") : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: se(o), fontSize: $t(o), fontFamily: Mt(o), textAlign: Nt(o) }, children: /* @__PURE__ */ C("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (o.type === "card") {
      const $ = o.cardStyle === "glass";
      return pn(o) && f && !d ? /* @__PURE__ */ C("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: f(o) }) : /* @__PURE__ */ _(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: $ ? V.glassFill : o.fillColor ?? V.slateCard,
            backdropFilter: $ ? "blur(12px)" : void 0,
            WebkitBackdropFilter: $ ? "blur(12px)" : void 0,
            border: `1px solid ${$ ? V.glassBorder : V.darkBorder}`,
            boxShadow: $ ? V.glassShadow : V.cardShadow
          },
          children: [
            /* @__PURE__ */ C(
              Ni,
              {
                category: o.category,
                onCommit: (y) => {
                  c((b) => b.map((z) => z.id === o.id ? { ...z, category: y } : z)), l();
                }
              }
            ),
            d ? s("flex-1 font-medium", { color: o.textColor ?? V.white, fontSize: $t(o), fontFamily: Mt(o), textAlign: Nt(o) }) : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: o.textColor ?? V.white, fontSize: $t(o), fontFamily: Mt(o), textAlign: Nt(o) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view"),
            /* @__PURE__ */ _("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              o.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (o.type === "text") {
      const $ = n ? "text-slate-100" : "text-slate-900", y = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${$}`,
        style: { color: o.textColor, fontSize: $t(o), fontFamily: Mt(o), textAlign: Nt(o) }
      };
      return d ? s(`font-medium ${$}`, y.style) : x ? /* @__PURE__ */ C(
        "div",
        {
          "data-canvas-text-view": !0,
          ...y,
          dangerouslySetInnerHTML: { __html: x }
        },
        "canvas-view"
      ) : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, ...y, children: /* @__PURE__ */ C("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (o.type === "image") {
      const $ = cn(o.src);
      return $ ? /* @__PURE__ */ C(
        "img",
        {
          src: $,
          alt: o.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const w = Te(o), h = gr(o), k = se(o);
    if (o.type === "triangle" || o.type === "diamond" || o.type === "hexagon" || o.type === "star") {
      const $ = o.strokeWidth ?? 2;
      return /* @__PURE__ */ _("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ C("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${o.w} ${o.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ C("polygon", { "data-canvas-stroke-width": $, points: yr(o.type, o.w, o.h), fill: w, stroke: h, strokeWidth: $ / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ C("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: k }, children: d ? s("font-medium", { color: k, fontSize: $t(o), fontFamily: Mt(o), textAlign: Nt(o) }) : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: $t(o), fontFamily: Mt(o), textAlign: Nt(o) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view") })
      ] });
    }
    const g = cn(o.src), M = o.type === "rect" || o.type === "ellipse" ? o.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ C(
      "div",
      {
        "data-canvas-stroke-width": M,
        className: `w-full h-full flex items-center justify-center p-3 ${o.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: w, border: `${M / t.z}px solid ${h}`, color: k },
        children: d ? s("font-medium", { color: k, fontSize: $t(o), fontFamily: Mt(o), textAlign: Nt(o) }) : /* @__PURE__ */ _("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: $t(o), fontFamily: Mt(o), textAlign: Nt(o) }, children: [
          /* @__PURE__ */ C("div", { dangerouslySetInnerHTML: { __html: x } }),
          g && /* @__PURE__ */ C(
            "a",
            {
              href: g,
              target: "_blank",
              rel: "noreferrer",
              onPointerDown: ($) => $.stopPropagation(),
              className: "block mt-1 text-[11px] underline opacity-70",
              children: "파일 열기"
            }
          )
        ] }, "canvas-view")
      }
    );
  } };
}
function Li({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: r,
  selected: i,
  editingId: a,
  boardIdentity: c
}) {
  const [l, f] = at({ width: 0, height: 0 });
  wt(() => {
    const d = t.current;
    if (!d) return;
    let x = -1, w = -1;
    const h = (m = d.clientWidth, g = d.clientHeight) => {
      m === x && g === w || (x = m, w = g, f({ width: m, height: g }));
    };
    if (h(), typeof ResizeObserver < "u") {
      const m = new ResizeObserver((g) => {
        var $;
        const M = ($ = g[0]) == null ? void 0 : $.contentRect;
        h((M == null ? void 0 : M.width) ?? d.clientWidth, (M == null ? void 0 : M.height) ?? d.clientHeight);
      });
      return m.observe(d), () => m.disconnect();
    }
    const k = () => h();
    return window.addEventListener("resize", k), () => window.removeEventListener("resize", k);
  }, [c, t]);
  const v = Tt(() => new Map(n.map((d) => [d.id, d])), [n]), s = Tt(
    () => [...n].sort((d, x) => (d.type === "frame" ? -1 : 0) - (x.type === "frame" ? -1 : 0)),
    [n]
  ), p = Tt(() => {
    if (!t.current || l.width <= 0 || l.height <= 0) return null;
    const d = 200 / r.z;
    return {
      minX: r.x - d,
      minY: r.y - d,
      maxX: r.x + l.width / r.z + d,
      maxY: r.y + l.height / r.z + d
    };
  }, [r, t, l]), o = dt((d) => {
    if (!p) return !1;
    if (d.id === a || i.has(d.id)) return !0;
    if (d.type === "arrow") {
      const w = Dt(d, v, e.current), k = (w.routing === "orthogonal" ? w.pathPoints : null) ?? [w.start, w.end], m = Math.min(...k.map((y) => y.x)), g = Math.max(...k.map((y) => y.x)), M = Math.min(...k.map((y) => y.y)), $ = Math.max(...k.map((y) => y.y));
      return g >= p.minX && m <= p.maxX && $ >= p.minY && M <= p.maxY;
    }
    const x = vt(d);
    return x.maxX >= p.minX && x.minX <= p.maxX && x.maxY >= p.minY && x.minY <= p.maxY;
  }, [a, i, v, e, p]), u = Tt(
    () => s.filter(o),
    [o, s]
  );
  return { shapeById: v, visiblePaintOrder: u };
}
function Ti({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: r,
  onDirty: i,
  patchSelected: a
}) {
  const c = dt(() => {
    const u = t.current;
    if (!u || !e) return;
    let d;
    try {
      d = un(u.innerHTML);
    } catch {
      r("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const x = u.scrollHeight;
    n((w) => w.map((h) => {
      if (h.id !== e) return h;
      const k = pn(h) ? { ...h, text: ke({ ...h, html: d, text: void 0 }), html: void 0 } : { ...h, html: d, text: void 0 };
      if (h.type === "text")
        return h.manualSize ? k : { ...k, ...mi(u, h) };
      if (h.type === "arrow") return k;
      const m = h.type === "note" ? 32 : h.type === "card" ? 96 : (
        // category header + type footer
        (h.type === "frame", 24)
      ), g = Math.max(h.h, x + m);
      return { ...k, h: g };
    })), i();
  }, [e, i]), l = (u) => {
    var d;
    (d = t.current) == null || d.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(u), c();
  }, f = () => {
    var w;
    const u = (w = window.getSelection()) == null ? void 0 : w.anchorNode, d = u instanceof Element ? u : u == null ? void 0 : u.parentElement, x = d == null ? void 0 : d.closest("ul, ol");
    return x instanceof HTMLElement ? x : null;
  }, v = (u, d, x) => {
    const w = document.createElement(d);
    for (; u.firstChild; ) w.append(u.firstChild);
    return u.replaceWith(w), w;
  }, s = (u) => {
    const d = t.current;
    if (!d) return;
    d.focus();
    const x = f();
    if (u === "number")
      if ((x == null ? void 0 : x.tagName) === "OL")
        x.removeAttribute("data-list-style");
      else if ((x == null ? void 0 : x.tagName) === "UL")
        v(x, "ol");
      else {
        document.execCommand("insertOrderedList");
        const w = f();
        w == null || w.removeAttribute("data-list-style");
      }
    else if ((x == null ? void 0 : x.tagName) === "UL") {
      const w = x.dataset.listStyle;
      u === w ? document.execCommand("insertUnorderedList") : x.dataset.listStyle = u;
    } else {
      (x == null ? void 0 : x.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const w = f();
      w && (w.dataset.listStyle = u);
    }
    c();
  };
  return { commitEditorHtml: c, applyFormat: l, applyList: s, onEditorKeyDown: (u) => {
    if (u.key === "Tab") {
      u.preventDefault(), document.execCommand(u.shiftKey ? "outdent" : "indent"), c();
      return;
    }
    if (u.key === " ") {
      const d = window.getSelection();
      if (d && d.isCollapsed && d.anchorNode) {
        const x = d.anchorNode, w = x.textContent || "", h = d.anchorOffset, k = w.slice(0, h).trim();
        if (!f()) {
          if (k === "-" || k === "–") {
            u.preventDefault(), x.textContent = w.slice(h), s("dash");
            return;
          }
          if (k === "*") {
            u.preventDefault(), x.textContent = w.slice(h), s("bullet");
            return;
          }
          if (k === "1.") {
            u.preventDefault(), x.textContent = w.slice(h), s("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (u) => {
    const d = zr(u);
    if (!d) {
      a({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    a({
      fontFamily: "custom",
      customFontFamily: d
    });
  } };
}
const Vn = "chois_canvas_ink_style", Gn = "chois_canvas_object_snap";
function qn(t) {
  try {
    return typeof window > "u" ? null : window.localStorage.getItem(t);
  } catch {
    return null;
  }
}
function Zn(t, e) {
  try {
    typeof window < "u" && window.localStorage.setItem(t, e);
  } catch {
  }
}
function Di(t) {
  const [e, n] = at(() => qn(Vn) === "smoothed" ? "smoothed" : "raw"), [r, i] = at(() => qn(Gn) !== "false"), a = t.drawInkStyle ?? e, c = t.objectSnapEnabled ?? r;
  return wt(() => Zn(Vn, a), [a]), wt(() => Zn(Gn, String(c)), [c]), { drawInkStyle: a, objectSnapEnabled: c, selectInkStyle: (v) => {
    var s;
    t.drawInkStyle === void 0 && n(v), (s = t.onDrawInkStyleChange) == null || s.call(t, v);
  }, selectObjectSnap: (v) => {
    var s;
    t.objectSnapEnabled === void 0 && i(v), (s = t.onObjectSnapEnabledChange) == null || s.call(t, v);
  } };
}
function Fi({
  boardIdentity: t,
  tool: e,
  activeColor: n,
  defaultActiveColor: r,
  onActiveColorChange: i,
  controlledShapes: a,
  onShapesChange: c,
  onDirty: l
}) {
  const f = Q(null), v = Q(null), [s, p] = at([]), o = a !== void 0 && c !== void 0, u = Q(/* @__PURE__ */ new WeakMap()), d = Tt(() => {
    const F = u.current;
    return (o ? a ?? [] : s).map((U) => {
      let B = F.get(U);
      return B === void 0 && (B = $r(U), F.set(U, B)), B;
    }).filter((U) => U !== null);
  }, [o, a, s]), x = Q(c);
  x.current = c;
  const w = dt((F) => {
    const U = x.current;
    if (!U) {
      p(F);
      return;
    }
    U(typeof F == "function" ? F : () => F);
  }, []), [h, k] = at({ x: -400, y: -300, z: 1 }), [m, g] = at(/* @__PURE__ */ new Set()), [M, $] = at(null), [y, b] = at({ kind: "none" }), [z, I] = at(!1), [P, T] = at([]), [D, Y] = at(""), [N, E] = at(!1), [L, A] = at(null), [G, Z] = at(!1), [W, j] = at(n ?? r ?? "blue"), J = n ?? W, et = Q(i);
  et.current = i;
  const lt = dt((F) => {
    j((U) => {
      var ot;
      const B = typeof F == "function" ? F(U) : F;
      return (ot = et.current) == null || ot.call(et, B), B;
    });
  }, []), [xt, Et] = at(Ee), St = Q(J);
  St.current = J;
  const X = Q([]), O = Q([]), K = Q(null), st = Q(/* @__PURE__ */ new Map()), Yt = Q(null), gt = Q(null), bt = Q([]), At = Q(/* @__PURE__ */ new Set()), H = Q(d), Lt = Q(h), It = Q(e), rt = Q(m), mt = Q(M), ut = Q(!1);
  H.current = d, Lt.current = h, It.current = e, rt.current = m, mt.current = M;
  const Ct = dt((F) => {
    var U;
    ut.current = F, F && typeof window < "u" && ((U = window.getSelection()) == null || U.removeAllRanges()), Z(F);
  }, []), [it, zt] = at("ink"), [Wt, Gt] = at("yellow"), S = e === "highlighter" ? Wt : it, R = Q(S);
  R.current = S;
  const q = dt((F) => {
    It.current === "highlighter" ? Gt(F) : zt(F);
  }, []), ct = Q({ kind: "none" }), tt = dt((F) => {
    ct.current = F, b(F);
  }, []), yt = dt((F) => {
    rt.current = F, g(F);
  }, []);
  ce(() => {
    var U;
    const F = /* @__PURE__ */ new Set();
    rt.current = F, mt.current = null, st.current.clear(), X.current = [], O.current = [], K.current = null, gt.current = null, bt.current = [], At.current.clear(), ut.current = !1, tt({ kind: "none" }), g(F), $(null), I(!1), T([]), A(null), Z(!1), Y(""), (U = f.current) == null || U.focus();
  }, [tt, t]), wt(() => {
    let F = !1;
    const U = () => {
      const ot = ui();
      F || Et(ot);
    };
    if (U(), typeof document > "u" || !("fonts" in document)) return;
    const B = () => U();
    return document.fonts.addEventListener("loadingdone", B), () => {
      F = !0, document.fonts.removeEventListener("loadingdone", B);
    };
  }, [t]);
  const $e = (M ? d.find((F) => F.id === M) : void 0) !== void 0;
  ce(() => {
    if (!M || !$e) return;
    const F = () => {
      const B = v.current, ot = H.current.find((Ue) => Ue.id === M);
      if (!B || !ot || (B.dataset.seeded !== M && (B.innerHTML = Re(ot), B.dataset.seeded = M), document.activeElement === B)) return;
      B.focus();
      const jt = document.createRange();
      jt.selectNodeContents(B), jt.collapse(!1);
      const Zt = window.getSelection();
      Zt == null || Zt.removeAllRanges(), Zt == null || Zt.addRange(jt);
    };
    F();
    const U = requestAnimationFrame(F);
    return () => cancelAnimationFrame(U);
  }, [M, $e]);
  const ve = dt((F) => {
    w((U) => {
      const B = typeof F == "function" ? F(U) : F;
      return X.current.push(U), X.current.length > 100 && X.current.shift(), O.current = [], B;
    }), l();
  }, [l]), Me = dt((F) => {
    if (F.length === 0) return;
    let U = H.current;
    for (const B of F)
      X.current.push(U), U = [...U, B];
    X.current.length > 100 && X.current.splice(0, X.current.length - 100), O.current = [], w((B) => [...B, ...F]), l();
  }, [l, w]), je = dt((F) => F.size === 0 ? !1 : (ve((U) => U.filter((B) => F.has(B.id) ? !1 : B.type !== "arrow" ? !0 : !(B.fromId && F.has(B.fromId)) && !(B.toId && F.has(B.toId)))), yt(/* @__PURE__ */ new Set()), Y(`${F.size}개 삭제됨`), !0), [ve, yt]), Be = dt(() => {
    K.current = H.current;
  }, []), Ke = dt(() => {
    const F = K.current;
    K.current = null, !(!F || F === H.current) && (X.current.push(F), X.current.length > 100 && X.current.shift(), O.current = [], l());
  }, [l]), Ht = dt(() => {
    const F = K.current;
    K.current = null, !(!F || F === H.current) && (H.current = F, w(F));
  }, [w]), qt = dt((F, U) => {
    var jt;
    const B = (jt = f.current) == null ? void 0 : jt.getBoundingClientRect(), ot = Lt.current;
    return B ? { x: (F - B.left) / ot.z + ot.x, y: (U - B.top) / ot.z + ot.y } : { x: 0, y: 0 };
  }, []), oe = dt(() => {
    var B;
    const F = (B = f.current) == null ? void 0 : B.getBoundingClientRect(), U = Lt.current;
    return F ? { x: U.x + F.width / 2 / U.z, y: U.y + F.height / 2 / U.z } : { x: 0, y: 0 };
  }, []), _t = dt((F) => {
    const U = new Set(H.current.filter((ot) => F.has(ot.id) && ot.groupId).map((ot) => ot.groupId));
    if (U.size === 0) return F;
    const B = new Set(F);
    for (const ot of H.current) ot.groupId && U.has(ot.groupId) && B.add(ot.id);
    return B;
  }, []);
  return {
    containerRef: f,
    editorRef: v,
    localShapes: s,
    setLocalShapes: p,
    controlled: o,
    shapes: d,
    setShapes: w,
    camera: h,
    setCamera: k,
    cameraRef: Lt,
    selected: m,
    setSelected: g,
    selectedRef: rt,
    editingId: M,
    setEditingId: $,
    editingIdRef: mt,
    interaction: y,
    interactionRef: ct,
    applyInteraction: tt,
    isSpaceDown: z,
    setIsSpaceDown: I,
    guides: P,
    setGuides: T,
    announcement: D,
    setAnnouncement: Y,
    showInspectorPalette: N,
    setShowInspectorPalette: E,
    eraserPos: L,
    setEraserPos: A,
    isPenMode: G,
    setIsPenMode: Ct,
    penModeRef: ut,
    activeColor: J,
    setActiveColor: lt,
    activeColorRef: St,
    drawColor: S,
    setDrawColor: q,
    drawColorRef: R,
    installedFontFamilies: xt,
    pointers: st,
    past: X,
    future: O,
    selectNow: yt,
    commit: ve,
    deleteSelection: je,
    beginHistory: Be,
    endHistory: Ke,
    cancelHistory: Ht,
    toPage: qt,
    viewportCentre: oe,
    expandToGroups: _t,
    toolRef: It,
    shapesRef: H,
    liveStrokeCanvasRef: Yt,
    activeDrawRef: gt,
    pendingDrawsRef: bt,
    queuedDrawIdsRef: At,
    commitDrawBatch: Me
  };
}
function Ai({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: r,
  maxZoom: i,
  shapes: a,
  selected: c,
  editingId: l,
  textualTypes: f,
  onZoomChange: v,
  onSelectionChange: s,
  onLocalCursor: p,
  toPage: o
}) {
  wt(() => {
    v == null || v(e.z);
  }, [e.z, v]), wt(() => {
    const m = t.current;
    if (!m) return;
    const g = (M) => {
      if (M.preventDefault(), M.ctrlKey || M.metaKey) {
        const $ = m.getBoundingClientRect();
        n((y) => {
          const b = Math.min(i, Math.max(r, y.z * Math.exp(-M.deltaY * 0.01))), z = M.clientX - $.left, I = M.clientY - $.top;
          return { x: y.x + z / y.z - z / b, y: y.y + I / y.z - I / b, z: b };
        });
      } else
        n(($) => ({ ...$, x: $.x + M.deltaX / $.z, y: $.y + M.deltaY / $.z }));
    };
    return m.addEventListener("wheel", g, { passive: !1 }), () => m.removeEventListener("wheel", g);
  }, [t, i, r, n]);
  const u = Tt(() => {
    const m = a.filter((g) => c.has(g.id));
    return {
      count: m.length,
      canGroup: m.length > 1,
      canUngroup: m.some((g) => !!g.groupId),
      isTextual: m.length === 1 && f.includes(m[0].type),
      selectedIds: m.map((g) => g.id)
    };
  }, [c, a, f]);
  wt(() => {
    s == null || s(u);
  }, [s, u]);
  const d = Tt(() => {
    if (l) {
      const g = a.find((M) => M.id === l);
      return g && g.type !== "image" && g.type !== "draw" ? [g] : [];
    }
    const m = a.filter((g) => c.has(g.id));
    return m.length === 1 && m[0].type === "image" ? [] : m;
  }, [l, c, a]), x = Tt(() => d.length === 0 ? null : d.find((m) => m.type !== "image") ?? null, [d]), w = Q(0);
  return { selectionInfo: u, inspectorSelection: d, inspectorShape: x, onContainerPointerMove: p ? (m) => {
    const g = performance.now();
    g - w.current < 60 || (w.current = g, p(o(m.clientX, m.clientY)));
  } : void 0, onContainerPointerLeave: p ? () => p(null) : void 0 };
}
const he = 24;
function Wi({
  containerRef: t,
  shapesRef: e,
  selectedRef: n,
  commit: r,
  deleteSelection: i,
  selectNow: a,
  setAnnouncement: c,
  createId: l
}) {
  return Tt(() => ({
    deleteSelected: () => {
      i(n.current);
    },
    duplicateSelected: () => {
      var p;
      const f = n.current;
      if (f.size === 0) return;
      const v = [], s = /* @__PURE__ */ new Map();
      for (const o of e.current) {
        if (!f.has(o.id)) continue;
        let u = o.groupId;
        u && (s.has(u) || s.set(u, l("g")), u = s.get(u)), v.push({
          ...o,
          id: l(),
          x: o.x + he,
          y: o.y + he,
          groupId: u,
          points: (p = o.points) == null ? void 0 : p.map(([d, x]) => [d + he, x + he]),
          orthogonalWaypoints: o.type === "arrow" && o.orthogonalWaypoints ? o.orthogonalWaypoints.map((d) => ({ x: d.x + he, y: d.y + he })) : void 0
        });
      }
      r((o) => [...o, ...v]), a(new Set(v.map((o) => o.id))), c(`${v.length}개 복제됨`);
    },
    group: () => {
      var s;
      const f = n.current;
      if (f.size < 2) return;
      const v = l("g");
      r((p) => p.map((o) => f.has(o.id) ? { ...o, groupId: v } : o)), c(`${f.size}개 그룹화됨`), (s = t.current) == null || s.focus();
    },
    ungroup: () => {
      var v;
      const f = n.current;
      f.size !== 0 && (r((s) => s.map((p) => f.has(p.id) ? { ...p, groupId: void 0 } : p)), c("그룹 해제됨"), (v = t.current) == null || v.focus());
    }
  }), [r, t, l, i, a, n, c, e]);
}
function Oi(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, r = 1 / 0, i = -1 / 0, a = -1 / 0;
  for (const p of t) {
    const o = vt(p);
    n = Math.min(n, o.minX), r = Math.min(r, o.minY), i = Math.max(i, o.maxX), a = Math.max(a, o.maxY);
  }
  const c = 40, l = i - n + c * 2, f = a - r + c * 2;
  if (!Number.isFinite(l) || !Number.isFinite(f) || l > ne.maxExportDimension || f > ne.maxExportDimension || l * f > ne.maxExportPixels) return null;
  const v = (p, o, u, d, x) => {
    const w = p.fontSize ?? u, h = Mt(p), k = kr(Re(p));
    if (k.length === 0) return "";
    const m = Vt(p), g = p.textAlign === "right" ? "end" : p.textAlign === "center" ? "middle" : p.textAlign === "left" ? "start" : x, M = g === "end" ? m.maxX - 12 : g === "middle" ? (m.minX + m.maxX) / 2 : m.minX + 12, $ = m.minY + w + 12;
    return k.map((y, b) => {
      const z = y.map((I) => `<tspan style="${[
        I.bold ? "font-weight:700" : `font-weight:${d}`,
        I.italic ? "font-style:italic" : "",
        I.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Bt(I.text)}</tspan>`).join("");
      return `<text x="${M}" y="${$ + b * w * 1.4}" font-family="${Bt(h)}" font-size="${w}" fill="${o}" text-anchor="${g}">${z}</text>`;
    }).join("");
  }, s = t.map((p) => {
    const o = ft[p.color ?? "blue"], u = Vt(p), d = Ft(p), x = p.rotation ? ` transform="rotate(${p.rotation * 180 / Math.PI} ${d.x} ${d.y})"` : "", w = p.color ? ft[p.color].border : V.ink;
    if (p.type === "draw" && p.points) {
      const y = br(p), b = Bt(Oe(p)), z = y.opacity === 1 ? "" : ` stroke-opacity="${y.opacity}" fill-opacity="${y.opacity}"`;
      return `<path d="${y.d}" fill="${y.filled ? b : "none"}" stroke="${y.filled ? "none" : b}" stroke-width="${y.width}"${z} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (p.type === "arrow") {
      const y = Dt(p, new Map(t.map((W) => [W.id, W])), t), b = p.strokeWidth ?? 2.5, z = Math.max(10, 8 + b * 2), I = Math.max(4, 2 + b), P = y.routing === "orthogonal" && y.pathPoints ? y.pathPoints : null, T = P && P.length > 1, D = T ? nn(P) : y.routing === "curved" ? `M ${y.start.x} ${y.start.y} Q ${y.control.x} ${y.control.y} ${y.end.x} ${y.end.y}` : `M ${y.start.x} ${y.start.y} L ${y.end.x} ${y.end.y}`, Y = T ? hr(P) : y.routing === "curved" ? (() => {
        const W = pe(0.94, y.start, y.control, y.end);
        return Math.atan2(y.end.y - W.y, y.end.x - W.x);
      })() : Math.atan2(y.end.y - y.start.y, y.end.x - y.start.x), N = T ? we(P[0], P[1]) : y.routing === "orthogonal" && y.start.side ? y.start.side === "e" ? 0 : y.start.side === "w" ? Math.PI : y.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : we(y.start, y.end), E = p.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : p.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", L = (W, j, J, et) => {
        if (W === "dot") return `<circle cx="${j}" cy="${J}" r="${I}" fill="${w}"/>`;
        if (W === "none") return "";
        const lt = `${j - z * Math.cos(et - 0.4)},${J - z * Math.sin(et - 0.4)}`, xt = `${j - z * Math.cos(et + 0.4)},${J - z * Math.sin(et + 0.4)}`;
        return `<polygon points="${j},${J} ${lt} ${xt}" fill="${w}"/>`;
      }, A = y.routing === "orthogonal" && y.pathPoints ? fn(y.pathPoints) : y.bend === 0 ? { x: (y.start.x + y.end.x) / 2, y: (y.start.y + y.end.y) / 2 } : pe(0.5, y.start, y.control, y.end), G = ke(p), Z = G ? `<text x="${A.x}" y="${A.y - 6}" text-anchor="middle" font-family="${Bt(Mt(p))}" font-size="${p.fontSize ?? 12}" fill="${w}">${Bt(G)}</text>` : "";
      return `<path d="${D}" fill="none" stroke="${w}" stroke-width="${b}" stroke-linecap="round" stroke-linejoin="round"${E}/>` + L(p.arrowEnd ?? "arrow", y.end.x, y.end.y, Y) + L(p.arrowStart ?? "none", y.start.x, y.start.y, N + Math.PI) + Z;
    }
    if (p.type === "image" && p.src) {
      const y = cn(p.src);
      return y ? `<image href="${Bt(y)}" x="${u.minX}" y="${u.minY}" width="${u.maxX - u.minX}" height="${u.maxY - u.minY}"${x}/>` : "";
    }
    if (p.type === "frame")
      return `<g${x}><rect x="${u.minX}" y="${u.minY}" width="${u.maxX - u.minX}" height="${u.maxY - u.minY}" fill="none" stroke="${V.slate400}" stroke-width="${p.strokeWidth ?? 2}" rx="4"/><text x="${u.minX}" y="${u.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${V.muted}">${Bt(p.text ?? "프레임")}</text></g>`;
    if (p.type === "note")
      return `<g${x}><rect x="${u.minX}" y="${u.minY}" width="${u.maxX - u.minX}" height="${u.maxY - u.minY}" fill="${o.bg}"/><rect x="${u.minX}" y="${u.minY}" width="${u.maxX - u.minX}" height="6" fill="${o.border}"/>` + v(p, o.text, 14, "600", "start") + "</g>";
    if (p.type === "card") {
      const y = p.cardStyle === "glass";
      return `<g${x}><rect x="${u.minX}" y="${u.minY}" width="${u.maxX - u.minX}" height="${u.maxY - u.minY}" rx="16" fill="${y ? V.glassFill : V.slateCard}"/><text x="${u.minX + 16}" y="${u.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${V.slate400}">[ ${Bt(p.category ?? "ENTITY")} ]</text>` + v(p, V.white, 16, "700", "start") + "</g>";
    }
    const h = p.type === "rect" || p.type === "ellipse" || p.type === "triangle" || p.type === "diamond" || p.type === "hexagon" || p.type === "star" ? p.strokeWidth ?? 2 : 2, k = Te(p), m = gr(p), g = p.type === "triangle" || p.type === "diamond" || p.type === "hexagon" || p.type === "star", M = g ? yr(p.type, u.maxX - u.minX, u.maxY - u.minY).split(" ").map((y) => {
      const [b, z] = y.split(",").map(Number);
      return `${b + u.minX},${z + u.minY}`;
    }).join(" ") : "", $ = p.type === "ellipse" ? `<ellipse cx="${(u.minX + u.maxX) / 2}" cy="${(u.minY + u.maxY) / 2}" rx="${(u.maxX - u.minX) / 2}" ry="${(u.maxY - u.minY) / 2}" fill="${k}" stroke="${m}" stroke-width="${h}"/>` : g ? `<polygon points="${M}" fill="${k}" stroke="${m}" stroke-width="${h}" stroke-linejoin="round"/>` : `<rect x="${u.minX}" y="${u.minY}" width="${u.maxX - u.minX}" height="${u.maxY - u.minY}" rx="12" fill="${k}" stroke="${m}" stroke-width="${h}"/>`;
    return `<g${x}>${$}${v(p, o.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${f}" viewBox="${n - c} ${r - c} ${l} ${f}"><rect x="${n - c}" y="${r - c}" width="${l}" height="${f}" fill="${e ? V.canvasDark : V.canvasLight}"/>` + s + "</svg>";
}
async function Ri(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), r = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), i = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), a = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, c = new Image();
  c.crossOrigin = "anonymous";
  try {
    await new Promise((o, u) => {
      c.onload = () => o(), c.onerror = () => u(new Error("svg rasterise failed")), c.src = a;
    });
  } catch {
    return null;
  }
  const l = 2, f = r * l, v = i * l;
  if (!Number.isSafeInteger(f) || !Number.isSafeInteger(v) || f > ne.maxExportDimension || v > ne.maxExportDimension || f * v > ne.maxExportPixels) return null;
  const s = document.createElement("canvas");
  s.width = f, s.height = v;
  const p = s.getContext("2d");
  return p ? (p.scale(l, l), p.drawImage(c, 0, 0), new Promise((o) => {
    try {
      s.toBlob((u) => o(u), "image/png");
    } catch {
      o(null);
    }
  })) : null;
}
function Hi(t, e, n) {
  if (t.length < 2) return;
  const r = t.filter(
    (o) => o.type !== "draw" && o.type !== "arrow" && o.type !== "frame" && o.type !== "image"
  );
  if (r.length < 2) return;
  const i = r.map((o, u) => ({
    id: o.id,
    i: u,
    x: Ft(o).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: Ft(o).y,
    vx: 0,
    vy: 0
  }));
  for (let o = 0; o < i.length; o++)
    for (let u = 0; u < o; u++)
      if (Math.abs(i[o].x - i[u].x) < 1 && Math.abs(i[o].y - i[u].y) < 1) {
        const d = 2 * Math.PI * o / i.length;
        i[o].x += Math.cos(d) * 10, i[o].y += Math.sin(d) * 10;
        break;
      }
  const a = new Map(i.map((o) => [o.id, o])), c = [];
  for (const o of t) {
    if (o.type !== "arrow") continue;
    const u = o.fromId ? a.get(o.fromId) : null, d = o.toId ? a.get(o.toId) : null;
    u && d && c.push([u, d]);
  }
  const l = 220, f = l * l, v = 80;
  let s = 400;
  const p = s / v;
  for (let o = 0; o < v; o++) {
    for (let u = 0; u < i.length; u++)
      i[u].vx = 0, i[u].vy = 0;
    for (let u = 0; u < i.length; u++)
      for (let d = u + 1; d < i.length; d++) {
        const x = i[u], w = i[d], h = x.x - w.x, k = x.y - w.y, m = Math.hypot(h, k) || 0.01, g = f / m, M = h / m * g, $ = k / m * g;
        x.vx += M, x.vy += $, w.vx -= M, w.vy -= $;
      }
    for (const [u, d] of c) {
      const x = u.x - d.x, w = u.y - d.y, h = Math.hypot(x, w) || 0.01, k = h * h / l, m = x / h * k, g = w / h * k;
      u.vx -= m, u.vy -= g, d.vx += m, d.vy += g;
    }
    for (const u of i) {
      const d = Math.hypot(u.vx, u.vy) || 0.01, x = Math.min(d, s);
      u.x += u.vx / d * x, u.y += u.vy / d * x;
    }
    s = Math.max(0.5, s - p);
  }
  e((o) => o.map((u) => {
    const d = a.get(u.id);
    return d ? { ...u, x: d.x - u.w / 2, y: d.y - u.h / 2 } : u;
  })), n();
}
function _i(t, {
  controlled: e,
  past: n,
  future: r,
  setLocalShapes: i,
  setCamera: a,
  selectNow: c,
  setEditingId: l
}) {
  let f;
  try {
    f = io(t);
  } catch {
    return;
  }
  e || (n.current = [], r.current = [], i(f.shapes.map(ji))), a(f.camera), c(/* @__PURE__ */ new Set()), l(null);
}
function ji(t) {
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
        points: t.points.map(([n, r]) => [n, r])
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
      return Bi(t);
  }
}
function Bi(t) {
  throw new ao(`Unhandled canvas shape type: ${String(t)}.`);
}
const Qn = (t) => t === "draw" || t === "highlighter";
function Ki({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: r,
  toolRef: i,
  activeColorRef: a,
  drawColorRef: c,
  setDrawColor: l,
  setActiveColor: f,
  past: v,
  future: s,
  controlled: p,
  isDarkMode: o,
  minZoom: u,
  maxZoom: d,
  onToolChange: x,
  setSelectedStrokeWidth: w,
  onDirty: h,
  commit: k,
  selectNow: m,
  selectionActions: g,
  viewportCentre: M,
  setShapes: $,
  setLocalShapes: y,
  setCamera: b,
  setEditingId: z,
  setAnnouncement: I,
  createId: P
}) {
  const T = dt((Y) => {
    const N = M(), E = $r({
      id: P(),
      x: Y.x ?? N.x - Y.w / 2,
      y: Y.y ?? N.y - Y.h / 2,
      ...Y
    });
    if (!E) throw new Error("Canvas could not create a valid shape.");
    return k((L) => [...L, E]), m(/* @__PURE__ */ new Set([E.id])), x("select"), I(`${E.type} 추가됨`), E;
  }, [k, P, x, m, I, M]), D = dt(() => Oi(n.current, o), [o, n]);
  to(t, () => ({
    addNote: (Y) => {
      const N = T({ type: "note", w: 180, h: 180, color: Y, text: "" });
      z(N.id);
    },
    addCard: (Y, N, E, L) => {
      T({ type: "card", w: 260, h: 150, text: Y, category: N, cardStyle: E, color: L });
    },
    addText: () => {
      const Y = T({ type: "text", w: 220, h: 44, text: "" });
      z(Y.id);
    },
    addShape: (Y, N, E) => {
      T({
        type: Y,
        w: Y === "ellipse" ? 220 : 200,
        h: Y === "ellipse" ? 110 : 140,
        color: N,
        text: E ?? ""
      });
    },
    addArrow: () => {
      const Y = M(), N = { id: P(), type: "arrow", x: Y.x - 140, y: Y.y, w: 280, h: 0 };
      k((E) => [...E, N]), m(/* @__PURE__ */ new Set([N.id])), x("select");
    },
    addImage: (Y, N, E, L) => {
      T({ type: "image", w: E, h: L, src: Y, fileName: N });
    },
    addFileCard: (Y, N, E) => {
      T({ type: "rect", w: 260, h: 120, color: "purple", text: E, src: N, fileName: Y });
    },
    updateShapeText: (Y, N) => {
      k((E) => E.map((L) => L.id === Y ? { ...L, text: N, html: void 0 } : L));
    },
    setSelectedStrokeWidth: w,
    // While a pen tool is active the "active colour" is the pen colour, so
    // hosts that drive the palette through the handle see the same thing the
    // user sees on the canvas. Other tools keep the note/shape colour.
    setActiveColor: (Y) => {
      Qn(i.current) ? l(Y) : f(Y);
    },
    getActiveColor: () => Qn(i.current) ? c.current : a.current,
    setTool: x,
    undo: () => {
      const Y = v.current.pop();
      Y && (s.current.push(n.current), $(Y), m(/* @__PURE__ */ new Set()), z(null), h(), I("실행 취소"));
    },
    redo: () => {
      const Y = s.current.pop();
      Y && (v.current.push(n.current), $(Y), m(/* @__PURE__ */ new Set()), z(null), h(), I("다시 실행"));
    },
    deleteSelected: g.deleteSelected,
    duplicateSelected: g.duplicateSelected,
    group: g.group,
    ungroup: g.ungroup,
    zoomBy: (Y) => {
      b((N) => {
        var Z;
        const E = (Z = e.current) == null ? void 0 : Z.getBoundingClientRect(), L = Math.min(d, Math.max(u, N.z * Y));
        if (!E) return { ...N, z: L };
        const A = N.x + E.width / 2 / N.z, G = N.y + E.height / 2 / N.z;
        return { x: A - E.width / 2 / L, y: G - E.height / 2 / L, z: L };
      });
    },
    zoomTo: (Y) => {
      b((N) => {
        var Z;
        const E = (Z = e.current) == null ? void 0 : Z.getBoundingClientRect(), L = Math.min(d, Math.max(u, Y));
        if (!E) return { ...N, z: L };
        const A = N.x + E.width / 2 / N.z, G = N.y + E.height / 2 / N.z;
        return { x: A - E.width / 2 / L, y: G - E.height / 2 / L, z: L };
      });
    },
    resetZoom: () => {
      b((Y) => {
        var A;
        const N = (A = e.current) == null ? void 0 : A.getBoundingClientRect();
        if (!N) return { ...Y, z: 1 };
        const E = Y.x + N.width / 2 / Y.z, L = Y.y + N.height / 2 / Y.z;
        return { x: E - N.width / 2, y: L - N.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var j;
      const Y = n.current, N = (j = e.current) == null ? void 0 : j.getBoundingClientRect();
      if (Y.length === 0 || !N) return;
      let E = 1 / 0, L = 1 / 0, A = -1 / 0, G = -1 / 0;
      for (const J of Y) {
        const et = vt(J);
        E = Math.min(E, et.minX), L = Math.min(L, et.minY), A = Math.max(A, et.maxX), G = Math.max(G, et.maxY);
      }
      const Z = 80, W = Math.min(d, Math.max(
        u,
        Math.min(N.width / (A - E + Z * 2), N.height / (G - L + Z * 2))
      ));
      b({
        x: (E + A) / 2 - N.width / 2 / W,
        y: (L + G) / 2 - N.height / 2 / W,
        z: W
      });
    },
    autoLayout: () => Hi(n.current, k, () => I("자동 배치 완료")),
    exportSvg: D,
    exportPng: () => Ri(D),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: r.current }),
    loadSnapshot: (Y) => _i(Y, {
      controlled: p,
      past: v,
      future: s,
      setLocalShapes: y,
      setCamera: b,
      selectNow: m,
      setEditingId: z
    })
  }), [
    T,
    D,
    k,
    P,
    o,
    d,
    u,
    h,
    x,
    g,
    m,
    b,
    z,
    y,
    w,
    $,
    I,
    M,
    p
  ]);
}
function Ui(t) {
  return t.altKey || !t.ctrlKey && !t.metaKey ? null : t.code === "KeyZ" ? t.shiftKey ? "redo" : "undo" : t.code === "KeyY" ? "redo" : null;
}
function Vi(t) {
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
function Gi({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: r,
  editingIdRef: i,
  toolRef: a,
  past: c,
  future: l,
  textualTypes: f,
  setIsSpaceDown: v,
  setEditingId: s,
  setShapes: p,
  setAnnouncement: o,
  commit: u,
  deleteSelection: d,
  selectNow: x,
  onDirty: w,
  onToolChange: h,
  createId: k
}) {
  const m = dt((g, M) => {
    const $ = r.current;
    $.size !== 0 && u((y) => y.map((b) => {
      var z;
      return $.has(b.id) ? {
        ...b,
        x: b.x + g,
        y: b.y + M,
        points: (z = b.points) == null ? void 0 : z.map(([I, P]) => [I + g, P + M])
      } : b;
    }));
  }, [u, r]);
  wt(() => {
    const g = (b) => {
      const z = b;
      return !!z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA" || z.isContentEditable);
    }, M = (b) => b instanceof Element && !!b.closest("input, select, button, textarea, option, label, [data-canvas-control]"), $ = (b) => {
      var L, A, G, Z;
      const z = t.current, I = document.activeElement, P = b.target instanceof Node && !!(z != null && z.contains(b.target)), T = !!z && (I === z || z.contains(I));
      if (!P && !T || M(b.target)) return;
      if (b.code === "Space" && !g(b.target)) {
        v(!0), b.preventDefault();
        return;
      }
      if (g(b.target)) {
        if (b.key === "Escape")
          b.preventDefault(), s(null), (L = e.current) == null || L.blur(), (A = t.current) == null || A.focus();
        else if ((b.key === "Delete" || b.key === "Backspace") && !i.current) {
          const W = r.current;
          d(W) && b.preventDefault();
        }
        return;
      }
      const D = r.current, Y = Ui(b);
      if (Y) {
        if (b.preventDefault(), Y === "redo") {
          const W = l.current.pop();
          W && (c.current.push(n.current), p(W), w(), o("다시 실행"));
        } else {
          const W = c.current.pop();
          W && (l.current.push(n.current), p(W), w(), o("실행 취소"));
        }
        x(/* @__PURE__ */ new Set());
        return;
      }
      const N = b.metaKey || b.ctrlKey;
      if (N && b.key.toLowerCase() === "g") {
        if (b.preventDefault(), b.shiftKey)
          D.size > 0 && (u((W) => W.map((j) => D.has(j.id) ? { ...j, groupId: void 0 } : j)), o("그룹 해제됨"));
        else if (D.size > 1) {
          const W = k("g");
          u((j) => j.map((J) => D.has(J.id) ? { ...J, groupId: W } : J)), o(`${D.size}개 그룹화됨`);
        }
        return;
      }
      if (N && b.key.toLowerCase() === "a") {
        b.preventDefault(), x(new Set(n.current.map((W) => W.id))), o(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (b.key === "Delete" || b.key === "Backspace") {
        d(D) && b.preventDefault();
        return;
      }
      if (b.key.startsWith("Arrow")) {
        b.preventDefault();
        const W = b.shiftKey ? 10 : 1;
        b.key === "ArrowLeft" && m(-W, 0), b.key === "ArrowRight" && m(W, 0), b.key === "ArrowUp" && m(0, -W), b.key === "ArrowDown" && m(0, W);
        return;
      }
      if (b.key === "Tab" && n.current.length > 0) {
        b.preventDefault();
        const W = n.current, j = W.findIndex((lt) => D.has(lt.id)), J = b.shiftKey ? j <= 0 ? W.length - 1 : j - 1 : j === -1 || j === W.length - 1 ? 0 : j + 1, et = W[J];
        x(/* @__PURE__ */ new Set([et.id])), o(`${et.type} 선택됨: ${ke(et) || "내용 없음"}`);
        return;
      }
      if (b.key === "Enter" && D.size === 1) {
        const W = n.current.find((j) => D.has(j.id));
        W && f.includes(W.type) && (b.preventDefault(), s(W.id));
        return;
      }
      if (b.key === "Escape") {
        if (i.current) {
          b.preventDefault(), s(null), (G = e.current) == null || G.blur(), (Z = t.current) == null || Z.focus(), h("select");
          return;
        }
        x(/* @__PURE__ */ new Set()), h("select");
        return;
      }
      const E = Vi(b);
      E && (b.preventDefault(), a.current = E, h(E));
    }, y = (b) => {
      const z = t.current;
      !z || !(document.activeElement === z || z.contains(document.activeElement)) || b.code === "Space" && v(!1);
    };
    return window.addEventListener("keydown", $), window.addEventListener("keyup", y), () => {
      window.removeEventListener("keydown", $), window.removeEventListener("keyup", y);
    };
  }, [
    u,
    t,
    k,
    d,
    i,
    e,
    l,
    m,
    w,
    h,
    c,
    x,
    r,
    o,
    s,
    v,
    p,
    n,
    f,
    a
  ]);
}
function Ae(t) {
  return t.pointerType === "pen";
}
function qi() {
  return typeof navigator < "u" && navigator.maxTouchPoints > 0 ? !0 : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(any-pointer: coarse)").matches;
}
function Zi(t, e) {
  return e && Ae(t);
}
function Qi(t, e) {
  return !t || Ae(e);
}
function xe(t, e) {
  return [(t[0] - e.x) * e.z, (t[1] - e.y) * e.z];
}
function Jn(t, e, n, r) {
  if (r === "raw") {
    let f = t[t.length - 1];
    for (const v of e) {
      if (t.length >= ne.maxDrawPoints) return;
      f && v[0] === f[0] && v[1] === f[1] || (t.push(v), f = v);
    }
    return;
  }
  const i = Math.max(n, 0.1), a = 0.05 / i, c = 4 / i;
  let l = t[t.length - 1];
  for (const f of e) {
    if (!l) {
      t.push(f), l = f;
      continue;
    }
    const v = f[0] - l[0], s = f[1] - l[1], p = Math.hypot(v, s);
    if (p < a) continue;
    const o = Math.max(1, Math.ceil(p / c)), u = Math.min(o, ne.maxDrawPoints - t.length);
    if (u <= 0) return;
    for (let d = 1; d <= u; d++) {
      const x = [
        l[0] + v * (d / o),
        l[1] + s * (d / o)
      ];
      t.push(x);
    }
    l = t[t.length - 1];
  }
}
function Ji(t) {
  const e = (t.points ?? []).map(([c, l]) => [c, l]);
  if (e.length === 0) return t;
  let n = e[0][0], r = e[0][1], i = n, a = r;
  for (const [c, l] of e)
    n = Math.min(n, c), r = Math.min(r, l), i = Math.max(i, c), a = Math.max(a, l);
  return { ...t, points: e, x: n, y: r, w: i - n, h: a - r };
}
function tr(t, e, n) {
  if (e.type !== "draw") return;
  const r = e.points ?? [];
  if (r.length === 0) return;
  const i = e.strokeWidth ?? 3, a = e.drawMode ?? "pen", c = Oe(e);
  if (t.save(), t.globalAlpha = a === "highlighter" ? 0.35 : 1, t.fillStyle = c, r.length === 1 && e.inkStyle === void 0) {
    const [s, p] = xe(r[0], n);
    t.beginPath(), t.arc(s, p, Math.max(Ne(i, a) * n.z, 0.5), 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  if (typeof Path2D == "function") {
    const s = an(e);
    t.scale(n.z, n.z), t.translate(-n.x, -n.y);
    const p = new Path2D(s.d);
    s.filled ? t.fill(p) : (t.strokeStyle = c, t.lineWidth = s.width, t.lineCap = "round", t.lineJoin = "round", t.stroke(p)), t.restore();
    return;
  }
  if (r.length === 1 || e.inkStyle === "raw" && r.every(([s, p]) => s === r[0][0] && p === r[0][1])) {
    const [s, p] = xe(r[0], n);
    t.beginPath(), t.arc(s, p, Ne(i, a) * n.z, 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  if (e.inkStyle === "raw") {
    t.beginPath();
    const [s, p] = xe(r[0], n);
    t.moveTo(s, p);
    for (let o = 1; o < r.length; o++) {
      const [u, d] = xe(r[o], n);
      t.lineTo(u, d);
    }
    t.strokeStyle = c, t.lineWidth = Ne(i, a) * 2 * n.z, t.lineCap = "round", t.lineJoin = "round", t.stroke(), t.restore();
    return;
  }
  const l = wr(r, i, a);
  if (l.length === 0) {
    t.restore();
    return;
  }
  t.beginPath();
  const [f, v] = xe([l[0][0], l[0][1]], n);
  t.moveTo(f, v);
  for (let s = 1; s < l.length; s++) {
    const [p, o] = xe([l[s][0], l[s][1]], n);
    t.lineTo(p, o);
  }
  t.closePath(), t.fill(), t.restore();
}
function ta(t, e, n, r) {
  const i = Math.max(1, Math.min(2, r)), a = Math.max(1, Math.round(e * i)), c = Math.max(1, Math.round(n * i));
  return t.width !== a && (t.width = a), t.height !== c && (t.height = c), t.style.width = `${e}px`, t.style.height = `${n}px`, i;
}
function We(t, e, n, r, i = 1) {
  var l;
  if (!t) return;
  const a = (l = t.getContext) == null ? void 0 : l.call(t, "2d");
  if (!a) return;
  const c = Math.max(1, Math.min(2, i || 1));
  a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, t.width, t.height), a.setTransform(c, 0, 0, c, 0, 0);
  for (const f of e) tr(a, f, r);
  n && tr(a, n, r), a.setTransform(1, 0, 0, 1, 0, 0);
}
const ea = 0.1, na = 4, vn = 14, ra = 4, er = ["note", "card", "rect", "ellipse", "text", "image"], oa = 400;
function ia({
  drawing: t,
  containerRef: e,
  editorRef: n,
  pointers: r,
  interactionRef: i,
  editingIdRef: a,
  cameraRef: c,
  shapesRef: l,
  toolRef: f,
  penModeRef: v,
  activeColorRef: s,
  drawColorRef: p,
  drawStrokeWidth: o,
  drawInkStyle: u,
  camera: d,
  shapes: x,
  selected: w,
  isSpaceDown: h,
  textualTypes: k,
  setShapes: m,
  setEditingId: g,
  applyInteraction: M,
  selectNow: $,
  beginHistory: y,
  cancelHistory: b,
  commit: z,
  onToolChange: I,
  expandToGroups: P,
  toPage: T,
  createId: D,
  liveStrokeCanvasRef: Y,
  activeDrawRef: N,
  pendingDrawsRef: E,
  setIsPenMode: L
}) {
  const A = D, G = Q(null), Z = (X, O) => {
    var gt;
    const K = ((gt = e.current) == null ? void 0 : gt.dataset.canvasActiveTool) === "text" ? "text" : f.current;
    if (K !== "note" && K !== "text") return;
    const st = T(X, O), Yt = K === "note" ? { id: A(), type: "note", x: st.x - 90, y: st.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: A(), type: "text", x: st.x, y: st.y - 22, w: 220, h: 44, text: "" };
    z((bt) => [...bt, Yt]), $(/* @__PURE__ */ new Set([Yt.id])), g(Yt.id), I("select");
  };
  wt(() => {
    const X = (K) => {
      var st;
      (st = e.current) != null && st.contains(K.target) && (K.target instanceof Element && K.target.closest('[role="textbox"], [data-canvas-inspector]') || Z(K.clientX, K.clientY));
    }, O = (K) => {
      var st;
      v.current && (K.preventDefault(), (st = window.getSelection()) == null || st.removeAllRanges());
    };
    return window.addEventListener("click", X, !0), document.addEventListener("selectstart", O, !0), () => {
      window.removeEventListener("click", X, !0), document.removeEventListener("selectstart", O, !0);
    };
  }, [e, v]);
  const W = () => {
    const [X, O] = [...r.current.values()], K = c.current;
    M({
      kind: "pinch",
      startDist: Math.hypot(O.x - X.x, O.y - X.y) || 1,
      startZoom: K.z,
      startMidX: (X.x + O.x) / 2,
      startMidY: (X.y + O.y) / 2,
      camX: K.x,
      camY: K.y
    });
  };
  return { onPointerDown: (X) => {
    var mt, ut, Ct;
    let O = f.current;
    const K = X.target instanceof Element ? X.target : X.currentTarget, st = X.currentTarget.hasPointerCapture(X.pointerId) || K.hasPointerCapture(X.pointerId);
    if (!v.current && Zi(X, st || qi()) && (b(), r.current.clear(), N.current = null, We(
      Y.current,
      E.current,
      null,
      c.current,
      window.devicePixelRatio || 1
    ), M({ kind: "none" }), O !== "draw" && O !== "highlighter" && O !== "eraser" && (O = "draw", f.current = "draw", I("draw")), L(!0)), v.current && X.pointerType === "touch") {
      if (X.cancelable && X.preventDefault(), i.current.kind !== "none") return;
      r.current.set(X.pointerId, { x: X.clientX, y: X.clientY });
      try {
        X.currentTarget.setPointerCapture(X.pointerId);
      } catch {
      }
      r.current.size === 2 && W();
      return;
    }
    if (!Qi(v.current, X)) {
      X.cancelable && X.preventDefault();
      return;
    }
    Ae(X) && i.current.kind === "drawing" && t.finish(), v.current && Ae(X) && (i.current.kind === "none" || i.current.kind === "pinch") && (r.current.clear(), M({ kind: "none" }));
    const Yt = X.target instanceof Element ? X.target : null, gt = !!(Yt != null && Yt.closest("[data-canvas-editor]")) && a.current !== null;
    r.current.set(X.pointerId, { x: X.clientX, y: X.clientY });
    const bt = i.current;
    if (bt.kind === "drawing" && bt.pointerId !== X.pointerId) {
      r.current.delete(X.pointerId);
      return;
    }
    !gt && X.cancelable && X.preventDefault();
    const At = X.currentTarget;
    try {
      At.setPointerCapture(X.pointerId);
    } catch {
    }
    if (r.current.size === 2) {
      W();
      return;
    }
    if (r.current.size > 2) return;
    if (X.button === 1 || h || O === "hand" || X.button === 0 && O === "select" && X.altKey) {
      M({ kind: "pan", startX: X.clientX, startY: X.clientY, camX: d.x, camY: d.y });
      return;
    }
    if (X.button !== 0) return;
    const H = T(X.clientX, X.clientY);
    if (gt || (g(null), (mt = n.current) == null || mt.blur(), (ut = e.current) == null || ut.focus()), O === "draw" || O === "highlighter") {
      const it = {
        id: A(),
        type: "draw",
        x: H.x,
        y: H.y,
        w: 0,
        h: 0,
        points: [[H.x, H.y]],
        color: p.current,
        strokeWidth: o,
        inkStyle: u,
        drawMode: O === "highlighter" ? "highlighter" : "pen"
      };
      t.start(it, X);
      return;
    }
    if (O === "arrow" || O === "frame" || co.includes(O)) {
      const it = O, zt = O === "arrow" ? { id: A(), type: "arrow", x: H.x, y: H.y, w: 0, h: 0, color: s.current } : O === "frame" ? { id: A(), type: "frame", x: H.x, y: H.y, w: 0, h: 0, text: "프레임" } : { id: A(), type: it, x: H.x, y: H.y, w: 0, h: 0, color: s.current, text: "" };
      y(), m((Wt) => [...Wt, zt]), M({ kind: "creating", id: zt.id, startX: H.x, startY: H.y });
      return;
    }
    if (O === "note" || O === "text") return;
    if (O === "eraser") {
      y(), m((it) => ni(it, H.x, H.y, vn, d.z)), M({ kind: "erasing", lastX: H.x, lastY: H.y });
      return;
    }
    const Lt = new Map(x.map((it) => [it.id, it])), It = a.current ? x.find((it) => it.id === a.current) : void 0, rt = gt && It ? It : [...x].reverse().find((it) => sn(it, H.x, H.y, d.z, Lt, x));
    if (!rt)
      G.current = null;
    else {
      const it = Date.now(), zt = !X.shiftKey && k.includes(rt.type) && ((Ct = G.current) == null ? void 0 : Ct.id) === rt.id && it - G.current.time < oa, Wt = zt ? rt.id : void 0;
      G.current = zt ? null : { id: rt.id, time: it };
      const Gt = X.shiftKey ? new Set(w).add(rt.id) : w.has(rt.id) ? w : /* @__PURE__ */ new Set([rt.id]), S = P(Gt);
      $(S);
      const R = /* @__PURE__ */ new Map();
      for (const q of x) S.has(q.id) && R.set(q.id, q);
      for (const q of x) {
        if (q.type !== "frame" || !S.has(q.id)) continue;
        const ct = vt(q);
        for (const tt of x) {
          if (tt.id === q.id || R.has(tt.id)) continue;
          const yt = Ft(tt);
          yt.x >= ct.minX && yt.x <= ct.maxX && yt.y >= ct.minY && yt.y <= ct.maxY && R.set(tt.id, tt);
        }
      }
      y(), M({ kind: "move", startX: H.x, startY: H.y, origin: R, editOnReleaseId: Wt });
      return;
    }
    X.shiftKey || $(/* @__PURE__ */ new Set()), M({
      kind: "marquee",
      startX: H.x,
      startY: H.y,
      curX: H.x,
      curY: H.y,
      screenStartX: X.clientX,
      screenStartY: X.clientY
    });
  }, onResizeHandleDown: (X, O, K) => {
    X.stopPropagation(), r.current.set(X.pointerId, { x: X.clientX, y: X.clientY }), y(), M({ kind: "resize", id: O.id, handle: K, start: O });
  }, onRotateHandleDown: (X, O) => {
    X.stopPropagation(), r.current.set(X.pointerId, { x: X.clientX, y: X.clientY });
    const K = T(X.clientX, X.clientY), st = Ft(O);
    y(), M({
      kind: "rotate",
      id: O.id,
      startAngle: Math.atan2(K.y - st.y, K.x - st.x),
      startRotation: O.rotation ?? 0
    });
  }, onConnectHandleDown: (X, O) => {
    X.stopPropagation(), r.current.set(X.pointerId, { x: X.clientX, y: X.clientY });
    const K = T(X.clientX, X.clientY);
    M({ kind: "connect", fromId: O.id, toX: K.x, toY: K.y, hoverId: null });
  }, onBendHandleDown: (X, O) => {
    X.stopPropagation(), r.current.set(X.pointerId, { x: X.clientX, y: X.clientY }), y(), M({ kind: "bend", id: O.id });
  }, onOrthogonalSegmentHandleDown: (X, O, K) => {
    X.stopPropagation(), r.current.set(X.pointerId, { x: X.clientX, y: X.clientY }), y(), M({ kind: "orthogonal-segment", id: O.id, segmentIndex: K });
  }, onArrowEndpointDown: (X, O, K) => {
    X.stopPropagation(), r.current.set(X.pointerId, { x: X.clientX, y: X.clientY }), y(), M({ kind: "arrow-endpoint", id: O.id, endpoint: K, hoverId: null });
  } };
}
function aa({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: r,
  shapesRef: i,
  setShapes: a,
  setEditingId: c,
  setEraserPos: l,
  setGuides: f,
  setAnnouncement: v,
  applyInteraction: s,
  selectNow: p,
  endHistory: o,
  commit: u,
  onToolChange: d,
  createId: x,
  drawing: w
}) {
  const h = x;
  wt(() => {
    const k = (m) => {
      var M, $;
      if (!t.current.delete(m.pointerId)) return;
      try {
        ($ = (M = m.target) == null ? void 0 : M.releasePointerCapture) == null || $.call(M, m.pointerId);
      } catch {
      }
      const g = e.current;
      if (g.kind !== "none") {
        if (g.kind === "pinch") {
          t.current.size < 2 && s({ kind: "none" });
          return;
        }
        if (f([]), g.kind === "erasing") {
          if (m.type === "pointerup") {
            const y = r(m.clientX, m.clientY);
            a((b) => xn(
              b,
              { x: g.lastX, y: g.lastY },
              y,
              vn,
              n.current.z
            ));
          }
          l(null), o(), s({ kind: "none" });
          return;
        }
        if (g.kind === "connect") {
          const b = i.current.find((Y) => Y.id === g.fromId);
          if (s({ kind: "none" }), !b) return;
          const z = { x: g.toX, y: g.toY }, I = Ft(b);
          if (!g.hoverId && Math.hypot(z.x - I.x, z.y - I.y) < 30) return;
          const P = [];
          let T = g.hoverId;
          if (!T) {
            const Y = b.type === "note" ? 180 : 200, N = b.type === "note" ? 180 : 120, E = {
              ...b,
              id: h(),
              x: z.x - Y / 2,
              y: z.y - N / 2,
              w: Y,
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
            P.push(E), T = E.id;
          }
          const D = {
            id: h(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: b.id,
            toId: T,
            text: ""
          };
          P.push(D), u((Y) => [...Y, ...P]), p(/* @__PURE__ */ new Set([D.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => c(D.id)) : c(D.id), v("연결 생성됨");
          return;
        }
        if (g.kind === "bend") {
          o(), s({ kind: "none" });
          return;
        }
        if (g.kind === "drawing") {
          w.finish(m);
          return;
        }
        if (g.kind === "creating") {
          a((y) => y.map((b) => {
            if (b.id !== g.id) return b;
            const z = Math.abs(b.w) < 4 && Math.abs(b.h) < 4 ? {
              ...b,
              w: b.type === "arrow" ? 200 : b.type === "frame" ? 480 : 180,
              h: b.type === "arrow" ? 0 : b.type === "frame" ? 320 : 120
            } : b;
            if (z.type === "arrow") return z;
            const I = Vt(z);
            return { ...z, x: I.minX, y: I.minY, w: I.maxX - I.minX, h: I.maxY - I.minY };
          })), o(), p(/* @__PURE__ */ new Set([g.id])), d("select"), s({ kind: "none" });
          return;
        }
        if ((g.kind === "move" || g.kind === "resize" || g.kind === "rotate" || g.kind === "orthogonal-segment" || g.kind === "arrow-endpoint") && o(), g.kind === "move" && g.editOnReleaseId && m.type === "pointerup") {
          const y = r(m.clientX, m.clientY);
          Math.hypot(y.x - g.startX, y.y - g.startY) * n.current.z <= ra && c(g.editOnReleaseId);
        }
        s({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", k), window.addEventListener("pointercancel", k), () => {
      window.removeEventListener("pointerup", k), window.removeEventListener("pointercancel", k);
    };
  }, [
    s,
    n,
    x,
    w,
    o,
    e,
    d,
    t,
    p,
    v,
    c,
    f,
    l,
    a,
    i,
    r,
    u
  ]);
}
function mn() {
  return typeof navigator > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
function Ir(t) {
  let e = [];
  if (!mn() && typeof t.getCoalescedEvents == "function")
    try {
      e = t.getCoalescedEvents();
    } catch {
    }
  return [...e, t].filter((n) => Number.isFinite(n.clientX) && Number.isFinite(n.clientY));
}
function ca({
  objectSnapEnabled: t,
  containerRef: e,
  pointers: n,
  interactionRef: r,
  cameraRef: i,
  shapesRef: a,
  setCamera: c,
  setShapes: l,
  setEraserPos: f,
  setGuides: v,
  applyInteraction: s,
  selectNow: p,
  expandToGroups: o,
  toPage: u,
  drawing: d
}) {
  wt(() => {
    const x = (w) => {
      var g, M;
      if (!n.current.has(w.pointerId)) return;
      n.current.set(w.pointerId, { x: w.clientX, y: w.clientY });
      const h = r.current;
      if (h.kind === "none") return;
      const k = i.current;
      if (h.kind === "pinch") {
        if (n.current.size < 2) return;
        const [$, y] = [...n.current.values()], b = Math.hypot(y.x - $.x, y.y - $.y) || 1, z = ($.x + y.x) / 2, I = ($.y + y.y) / 2, P = (g = e.current) == null ? void 0 : g.getBoundingClientRect();
        if (!P) return;
        const T = Math.min(na, Math.max(ea, h.startZoom * (b / h.startDist))), D = h.camX + (h.startMidX - P.left) / h.startZoom, Y = h.camY + (h.startMidY - P.top) / h.startZoom;
        c({ x: D - (z - P.left) / T, y: Y - (I - P.top) / T, z: T });
        return;
      }
      if (h.kind === "pan") {
        c({
          x: h.camX - (w.clientX - h.startX) / k.z,
          y: h.camY - (w.clientY - h.startY) / k.z,
          z: k.z
        });
        return;
      }
      const m = u(w.clientX, w.clientY);
      if (h.kind === "erasing") {
        const $ = Ir(w).map((z) => u(z.clientX, z.clientY)), y = [{ x: h.lastX, y: h.lastY }, ...$];
        l((z) => {
          let I = z;
          for (let P = 1; P < y.length; P++)
            I = xn(I, y[P - 1], y[P], vn, k.z);
          return I;
        });
        const b = $.at(-1);
        b && (f(b), s({ kind: "erasing", lastX: b.x, lastY: b.y }));
        return;
      }
      if (h.kind === "connect") {
        const $ = a.current, y = new Map($.map((z) => [z.id, z])), b = [...$].reverse().find((z) => z.id !== h.fromId && er.includes(z.type) && sn(z, m.x, m.y, k.z, y, $));
        s({ ...h, toX: m.x, toY: m.y, hoverId: (b == null ? void 0 : b.id) ?? null });
        return;
      }
      if (h.kind === "bend") {
        const $ = a.current, y = $.find((N) => N.id === h.id);
        if (!y) return;
        const b = Dt(y, new Map($.map((N) => [N.id, N])), $), z = b.end.x - b.start.x, I = b.end.y - b.start.y, P = Math.hypot(z, I) || 1, T = (b.start.x + b.end.x) / 2, D = (b.start.y + b.end.y) / 2, Y = (m.x - T) * (-I / P) + (m.y - D) * (z / P);
        l((N) => N.map((E) => E.id === h.id ? { ...E, bend: Y } : E));
        return;
      }
      if (h.kind === "orthogonal-segment") {
        const $ = a.current, y = $.find((Y) => Y.id === h.id);
        if (!y) return;
        const b = Dt(y, new Map($.map((Y) => [Y.id, Y])), $), z = b.routing === "orthogonal" ? b.pathPoints : void 0;
        if (!z || z.length < 2) return;
        const I = z[h.segmentIndex], P = z[h.segmentIndex + 1];
        if (!I || !P) return;
        const T = I.x === P.x ? m.x : m.y, D = Yo(z, h.segmentIndex, T);
        l((Y) => Y.map((N) => N.id === h.id ? { ...N, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: D.slice(1, -1).map((E) => ({ x: E.x, y: E.y })) } : N));
        return;
      }
      if (h.kind === "arrow-endpoint") {
        const $ = a.current, y = $.find((D) => D.id === h.id);
        if (!y) return;
        const b = new Map($.map((D) => [D.id, D])), z = Dt(y, b, $), I = h.endpoint === "start" ? z.end : z.start, P = [...$].reverse().find((D) => D.id !== y.id && er.includes(D.type) && sn(D, m.x, m.y, k.z, b, $)), T = P ? le(P, I.x, I.y) : { x: m.x, y: m.y };
        s({ ...h, hoverId: (P == null ? void 0 : P.id) ?? null }), l((D) => D.map((Y) => {
          if (Y.id !== y.id) return Y;
          const N = h.endpoint === "start" ? T : I, E = h.endpoint === "end" ? T : I;
          return {
            ...Y,
            x: N.x,
            y: N.y,
            w: E.x - N.x,
            h: E.y - N.y,
            fromId: h.endpoint === "start" ? P == null ? void 0 : P.id : Y.fromId,
            toId: h.endpoint === "end" ? P == null ? void 0 : P.id : Y.toId
          };
        }));
        return;
      }
      if (h.kind === "marquee") {
        s({ ...h, curX: m.x, curY: m.y });
        const $ = Math.min(h.startX, m.x), y = Math.max(h.startX, m.x), b = Math.min(h.startY, m.y), z = Math.max(h.startY, m.y), I = Math.min(h.screenStartX, w.clientX), P = Math.max(h.screenStartX, w.clientX), T = Math.min(h.screenStartY, w.clientY), D = Math.max(h.screenStartY, w.clientY), Y = /* @__PURE__ */ new Map();
        (M = e.current) == null || M.querySelectorAll("[data-canvas-shape-id]").forEach((E) => {
          const L = E.dataset.canvasShapeId;
          L && Y.set(L, E.getBoundingClientRect());
        });
        const N = a.current.filter((E) => {
          const L = Y.get(E.id);
          if (L)
            return L.right >= I && L.left <= P && L.bottom >= T && L.top <= D;
          const A = vt(E);
          return A.maxX >= $ && A.minX <= y && A.maxY >= b && A.minY <= z;
        }).map((E) => E.id);
        p(o(new Set(N)));
        return;
      }
      if (h.kind === "move") {
        let $ = m.x - h.startX, y = m.y - h.startY;
        const b = h.origin;
        if (t) {
          const z = (() => {
            let T = 1 / 0, D = 1 / 0, Y = -1 / 0, N = -1 / 0;
            return b.forEach((E) => {
              const L = vt({ ...E, x: E.x + $, y: E.y + y });
              T = Math.min(T, L.minX), D = Math.min(D, L.minY), Y = Math.max(Y, L.maxX), N = Math.max(N, L.maxY);
            }), { minX: T, minY: D, maxX: Y, maxY: N };
          })(), I = a.current.filter((T) => !b.has(T.id)), P = ri(z, I, k.z);
          $ += P.dx, y += P.dy, v(P.guides);
        } else
          v([]);
        l((z) => z.map((I) => {
          var T;
          const P = b.get(I.id);
          return P ? {
            ...I,
            x: P.x + $,
            y: P.y + y,
            points: (T = P.points) == null ? void 0 : T.map(([D, Y]) => [D + $, Y + y]),
            ...P.type === "arrow" && P.orthogonalWaypoints ? { orthogonalWaypoints: P.orthogonalWaypoints.map((D) => ({ x: D.x + $, y: D.y + y })) } : {}
          } : I;
        }));
        return;
      }
      if (h.kind === "drawing") {
        if (h.pointerId !== w.pointerId) return;
        d.move(w);
        return;
      }
      if (h.kind === "creating") {
        l(($) => $.map((y) => y.id === h.id ? { ...y, w: m.x - h.startX, h: m.y - h.startY } : y));
        return;
      }
      if (h.kind === "rotate") {
        const $ = a.current.find((I) => I.id === h.id);
        if (!$) return;
        const y = Ft($), b = Math.atan2(m.y - y.y, m.x - y.x);
        let z = h.startRotation + (b - h.startAngle);
        w.shiftKey && (z = Math.round(z / (Math.PI / 12)) * (Math.PI / 12)), l((I) => I.map((P) => P.id === h.id ? { ...P, rotation: z } : P));
        return;
      }
      if (h.kind === "resize") {
        const { start: $, handle: y } = h, b = De($, m.x, m.y);
        l((z) => z.map((I) => {
          if (I.id !== $.id) return I;
          let { x: P, y: T, w: D, h: Y } = $;
          if (y.includes("e") && (D = Math.max(20, b.x - $.x)), y.includes("s") && (Y = Math.max(20, b.y - $.y)), y.includes("w")) {
            const N = $.x + $.w;
            P = Math.min(b.x, N - 20), D = N - P;
          }
          if (y.includes("n")) {
            const N = $.y + $.h;
            T = Math.min(b.y, N - 20), Y = N - T;
          }
          return { ...I, x: P, y: T, w: D, h: Y, manualSize: I.type === "text" ? !0 : I.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", x), () => {
      window.removeEventListener("pointermove", x);
    };
  }, [
    s,
    i,
    e,
    d,
    o,
    r,
    t,
    n,
    p,
    a,
    u
  ]);
}
function sa(t) {
  ca(t), aa(t);
}
function la(t) {
  const e = Q(t);
  e.current = t;
  const n = Q([]), r = Q(null), i = Q(null), a = Q(null), c = Tt(() => {
    const l = () => {
      const o = e.current;
      We(
        o.liveStrokeCanvasRef.current,
        o.pendingDrawsRef.current,
        o.activeDrawRef.current,
        o.cameraRef.current,
        window.devicePixelRatio || 1
      );
    }, f = () => {
      r.current !== null && cancelAnimationFrame(r.current), r.current = null;
    }, v = () => {
      var x;
      const o = e.current, u = o.activeDrawRef.current, d = n.current.splice(0);
      (u == null ? void 0 : u.id) === ((x = a.current) == null ? void 0 : x.shapeId) && (u != null && u.points) && Jn(u.points, d, o.cameraRef.current.z, u.type === "draw" ? u.inkStyle : void 0);
    }, s = () => {
      i.current = null;
      const o = e.current, u = o.pendingDrawsRef.current.filter((d) => !o.queuedDrawIdsRef.current.has(d.id));
      if (u.length !== 0) {
        for (const d of u) o.queuedDrawIdsRef.current.add(d.id);
        o.commitDrawBatch(u);
      }
    };
    return {
      start(o, u) {
        f(), n.current = [], a.current = { shapeId: o.id, pointerId: u.pointerId, raw: !1 }, e.current.activeDrawRef.current = o, e.current.applyInteraction({ kind: "drawing", id: o.id, pointerId: u.pointerId }), l();
      },
      move(o) {
        const u = e.current, d = a.current, x = u.activeDrawRef.current;
        if (!(!d || d.pointerId !== o.pointerId || (x == null ? void 0 : x.id) !== d.shapeId || !x.points || u.interactionRef.current.kind !== "drawing")) {
          if (o.type === "pointerrawupdate") {
            if (mn()) return;
            d.raw = !0;
          } else if (d.raw)
            return;
          if (o.shiftKey) {
            f(), n.current = [];
            const w = u.toPage(o.clientX, o.clientY);
            x.points = [x.points[0], [w.x, w.y]], l();
            return;
          }
          for (const w of Ir(o)) {
            const h = u.toPage(w.clientX, w.clientY);
            n.current.push([h.x, h.y]);
          }
          r.current === null && (r.current = requestAnimationFrame(() => {
            r.current = null, v(), l();
          }));
        }
      },
      finish: (o, u = !1) => {
        const d = a.current;
        if (o && (d == null ? void 0 : d.pointerId) !== o.pointerId) return;
        const x = e.current;
        f(), v();
        const w = x.activeDrawRef.current;
        if (d && (w == null ? void 0 : w.id) === d.shapeId && w.points) {
          if ((o == null ? void 0 : o.type) === "pointerup" && Number.isFinite(o.clientX) && Number.isFinite(o.clientY)) {
            const h = x.toPage(o.clientX, o.clientY);
            Jn(w.points, [[h.x, h.y]], x.cameraRef.current.z, w.type === "draw" ? w.inkStyle : void 0);
          }
          x.pendingDrawsRef.current.push(Ji(w)), x.activeDrawRef.current = null, x.pointers.current.delete(d.pointerId), x.interactionRef.current.kind === "drawing" && x.applyInteraction({ kind: "none" }), l();
        }
        a.current = null, u ? (i.current !== null && cancelAnimationFrame(i.current), s()) : i.current === null && (i.current = requestAnimationFrame(s));
      },
      cancel() {
        var d;
        f(), n.current = [];
        const o = e.current, u = a.current;
        u && ((d = o.activeDrawRef.current) == null ? void 0 : d.id) === u.shapeId && (o.activeDrawRef.current = null, o.pointers.current.delete(u.pointerId), o.interactionRef.current.kind === "drawing" && o.applyInteraction({ kind: "none" }), l()), a.current = null;
      }
    };
  }, []);
  return wt(() => {
    const l = t.containerRef.current, f = (o) => {
      o.target === l && e.current.pointers.current.has(o.pointerId) && !(l != null && l.hasPointerCapture(o.pointerId)) && c.finish(o);
    }, v = () => {
      c.finish(void 0, !0);
      const o = e.current;
      o.interactionRef.current.kind === "pinch" && o.applyInteraction({ kind: "none" }), o.interactionRef.current.kind === "none" && o.pointers.current.clear();
    }, s = () => {
      document.visibilityState === "hidden" && v();
    }, p = (o) => {
      o.key === "Escape" && a.current && o.target instanceof Node && (l != null && l.contains(o.target)) && (o.preventDefault(), c.cancel());
    };
    return window.addEventListener("pointerrawupdate", c.move), window.addEventListener("blur", v), window.addEventListener("keydown", p), document.addEventListener("visibilitychange", s), l == null || l.addEventListener("lostpointercapture", f), () => {
      window.removeEventListener("pointerrawupdate", c.move), window.removeEventListener("blur", v), window.removeEventListener("keydown", p), document.removeEventListener("visibilitychange", s), l == null || l.removeEventListener("lostpointercapture", f), r.current !== null && cancelAnimationFrame(r.current), i.current !== null && cancelAnimationFrame(i.current), r.current = null, i.current = null, n.current = [], a.current = null;
    };
  }, [c, t.containerRef]), c;
}
function ua({ containerRef: t, penModeRef: e, toolRef: n }) {
  wt(() => {
    const r = t.current;
    if (!r) return;
    const i = r.ownerDocument, a = i.defaultView, c = /* @__PURE__ */ new Set(), l = (s) => {
      const p = Array.from(s.changedTouches), o = s.type !== "touchstart" && p.some((k) => c.has(k.identifier));
      if (s.type !== "touchstart")
        for (const k of p) c.delete(k.identifier);
      if (s.type === "touchcancel") return;
      const u = s.target instanceof Element ? s.target : null;
      if (u != null && u.closest("button, input, textarea, select, a, [data-canvas-inspector], [data-canvas-pen-palette]")) return;
      const d = n.current, x = d === "draw" || d === "highlighter" || d === "eraser", w = p.some((k) => k.touchType === "stylus"), h = s.type === "touchstart" && mn() && d !== "note" && d !== "text" && !(u != null && u.closest('[contenteditable="true"]')) && p.some((k) => {
        const m = k.radiusX || 0;
        return k.clientX - m < 10 || k.clientX + m > ((a == null ? void 0 : a.innerWidth) ?? 1 / 0) - 10;
      });
      if (!(!o && !e.current && !x && !w && !h)) {
        if (s.type === "touchstart")
          for (const k of p)
            Number.isFinite(k.identifier) && c.add(k.identifier);
        s.cancelable && s.preventDefault();
      }
    }, f = (s) => {
      const p = s.target instanceof Node && r.contains(s.target), o = i.activeElement && r.contains(i.activeElement);
      (p || o) && s.cancelable && s.preventDefault();
    }, v = { passive: !1, capture: !0 };
    for (const s of ["touchstart", "touchend", "touchcancel"])
      r.addEventListener(s, l, v);
    for (const s of ["gesturestart", "gesturechange", "gestureend"])
      i.addEventListener(s, f, v);
    return () => {
      for (const s of ["touchstart", "touchend", "touchcancel"])
        r.removeEventListener(s, l, !0);
      for (const s of ["gesturestart", "gesturechange", "gestureend"])
        i.removeEventListener(s, f, !0);
    };
  }, [t, e, n]);
}
function da({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: r,
  editingIdRef: i,
  cameraRef: a,
  shapesRef: c,
  toolRef: l,
  penModeRef: f,
  activeColorRef: v,
  drawColorRef: s,
  drawStrokeWidth: p,
  drawInkStyle: o,
  objectSnapEnabled: u,
  camera: d,
  shapes: x,
  selected: w,
  isSpaceDown: h,
  textualTypes: k,
  setCamera: m,
  setShapes: g,
  setEditingId: M,
  setEraserPos: $,
  setGuides: y,
  setAnnouncement: b,
  applyInteraction: z,
  selectNow: I,
  beginHistory: P,
  endHistory: T,
  cancelHistory: D,
  commit: Y,
  onToolChange: N,
  expandToGroups: E,
  toPage: L,
  createId: A,
  liveStrokeCanvasRef: G,
  activeDrawRef: Z,
  pendingDrawsRef: W,
  queuedDrawIdsRef: j,
  commitDrawBatch: J,
  setIsPenMode: et
}) {
  ua({ containerRef: t, penModeRef: f, toolRef: l });
  const lt = la({
    containerRef: t,
    pointers: n,
    interactionRef: r,
    cameraRef: a,
    toPage: L,
    applyInteraction: z,
    liveStrokeCanvasRef: G,
    activeDrawRef: Z,
    pendingDrawsRef: W,
    queuedDrawIdsRef: j,
    commitDrawBatch: J
  }), xt = ia({
    drawing: lt,
    containerRef: t,
    editorRef: e,
    pointers: n,
    interactionRef: r,
    editingIdRef: i,
    cameraRef: a,
    shapesRef: c,
    toolRef: l,
    penModeRef: f,
    activeColorRef: v,
    drawColorRef: s,
    drawStrokeWidth: p,
    drawInkStyle: o,
    camera: d,
    shapes: x,
    selected: w,
    isSpaceDown: h,
    textualTypes: k,
    setShapes: g,
    setEditingId: M,
    applyInteraction: z,
    selectNow: I,
    beginHistory: P,
    cancelHistory: D,
    commit: Y,
    onToolChange: N,
    expandToGroups: E,
    toPage: L,
    createId: A,
    liveStrokeCanvasRef: G,
    activeDrawRef: Z,
    pendingDrawsRef: W,
    setIsPenMode: et
  });
  return sa({
    objectSnapEnabled: u,
    drawing: lt,
    containerRef: t,
    pointers: n,
    interactionRef: r,
    cameraRef: a,
    shapesRef: c,
    setCamera: m,
    setShapes: g,
    setEditingId: M,
    setEraserPos: $,
    setGuides: y,
    setAnnouncement: b,
    applyInteraction: z,
    selectNow: I,
    endHistory: T,
    commit: Y,
    onToolChange: N,
    expandToGroups: E,
    toPage: L,
    createId: A
  }), xt;
}
function fa(t) {
  Ki(t);
  const e = Tt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return Gi({ ...t, toolRef: e }), da(t);
}
function ha({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: r,
  zoom: i
}) {
  const a = n || r.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", c = t ? V.gridDark : V.gridLight, l = 40 * i;
  return { cursor: a, gridColor: c, gridSize: l, strokeColorOf: (v) => v.strokeColor ? Oe(v) : v.color ? ft[v.color].border : t ? "var(--canvas-slate-200)" : V.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = So, document.head.appendChild(t);
}
const nr = 0.1, rr = 4, or = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function Pr(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function ir(t, e, n) {
  return t.map((r) => {
    if (!e.has(r.id)) return r;
    switch (r.type) {
      case "arrow":
      case "frame":
      case "rect":
      case "ellipse":
      case "triangle":
      case "diamond":
      case "hexagon":
      case "star":
      case "draw":
        return { ...r, strokeWidth: n };
      case "note":
      case "card":
      case "text":
      case "image":
        return r;
      default:
        return Pr(r);
    }
  });
}
function ar(t, e, n) {
  return t.map((r) => e.has(r.id) && r.type === "draw" ? { ...r, ...n } : r);
}
function cr(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const ya = eo(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: r,
  activeColor: i,
  defaultActiveColor: a,
  onActiveColorChange: c,
  drawStrokeWidth: l = 4,
  onToolChange: f,
  onDirty: v,
  onZoomChange: s,
  onSelectionChange: p,
  shapes: o,
  onShapesChange: u,
  peerCursors: d,
  onLocalCursor: x,
  renderDiagram: w,
  drawInkStyle: h,
  onDrawInkStyleChange: k,
  objectSnapEnabled: m,
  onObjectSnapEnabledChange: g
}, M) {
  var $n, Mn;
  const { drawInkStyle: $, objectSnapEnabled: y, selectInkStyle: b, selectObjectSnap: z } = Di({
    drawInkStyle: h,
    onDrawInkStyleChange: k,
    objectSnapEnabled: m,
    onObjectSnapEnabledChange: g
  }), [I, P] = Kt.useState(l);
  Kt.useEffect(() => P(l), [l]);
  const {
    containerRef: T,
    editorRef: D,
    setLocalShapes: Y,
    controlled: N,
    shapes: E,
    setShapes: L,
    camera: A,
    setCamera: G,
    cameraRef: Z,
    selected: W,
    selectedRef: j,
    editingId: J,
    setEditingId: et,
    editingIdRef: lt,
    interaction: xt,
    interactionRef: Et,
    applyInteraction: St,
    isSpaceDown: X,
    setIsSpaceDown: O,
    guides: K,
    setGuides: st,
    announcement: Yt,
    setAnnouncement: gt,
    showInspectorPalette: bt,
    setShowInspectorPalette: At,
    eraserPos: H,
    setEraserPos: Lt,
    isPenMode: It,
    setIsPenMode: rt,
    penModeRef: mt,
    setActiveColor: ut,
    activeColorRef: Ct,
    drawColor: it,
    setDrawColor: zt,
    drawColorRef: Wt,
    installedFontFamilies: Gt,
    pointers: S,
    past: R,
    future: q,
    selectNow: ct,
    commit: tt,
    deleteSelection: yt,
    beginHistory: gn,
    endHistory: $e,
    cancelHistory: ve,
    toPage: Me,
    viewportCentre: je,
    expandToGroups: Be,
    toolRef: Ke,
    shapesRef: Ht,
    liveStrokeCanvasRef: qt,
    activeDrawRef: oe,
    pendingDrawsRef: _t,
    queuedDrawIdsRef: F,
    commitDrawBatch: U
  } = Fi({ boardIdentity: e, tool: r, activeColor: i, defaultActiveColor: a, onActiveColorChange: c, controlledShapes: o, onShapesChange: u, onDirty: v });
  ce(() => {
    const nt = qt.current, Pt = T.current;
    if (!nt || !Pt) return;
    const ht = () => {
      const Se = ta(nt, Pt.clientWidth, Pt.clientHeight, window.devicePixelRatio || 1), Ce = new Set(E.map((ue) => ue.id));
      _t.current = _t.current.filter((ue) => !Ce.has(ue.id));
      for (const ue of Ce) F.current.delete(ue);
      We(nt, _t.current, oe.current, Z.current, Se);
    };
    if (ht(), typeof ResizeObserver > "u")
      return window.addEventListener("resize", ht), () => window.removeEventListener("resize", ht);
    const Qt = new ResizeObserver(ht);
    return Qt.observe(Pt), window.addEventListener("resize", ht), () => {
      Qt.disconnect(), window.removeEventListener("resize", ht);
    };
  }, [oe, A, Z, T, qt, _t, F, E]);
  const B = Wi({
    containerRef: T,
    shapesRef: Ht,
    selectedRef: j,
    commit: tt,
    deleteSelection: yt,
    selectNow: ct,
    setAnnouncement: gt,
    createId: cr
  }), {
    inspectorSelection: ot,
    inspectorShape: jt,
    onContainerPointerMove: Zt,
    onContainerPointerLeave: Ue
  } = Ai({
    containerRef: T,
    camera: A,
    setCamera: G,
    minZoom: nr,
    maxZoom: rr,
    shapes: E,
    selected: W,
    editingId: J,
    textualTypes: or,
    onZoomChange: s,
    onSelectionChange: p,
    onLocalCursor: x,
    toPage: Me
  }), Ve = Kt.useCallback((nt) => {
    const Pt = new Set(j.current);
    Pt.size !== 0 && tt((ht) => ir(ht, Pt, nt));
  }, [tt, j]), Nr = Kt.useCallback((nt) => {
    P(nt), Ve(nt);
  }, [Ve]), Er = Kt.useCallback((nt) => {
    zt(nt);
    const Pt = new Set(
      Ht.current.filter((ht) => ht.type === "draw" && j.current.has(ht.id)).map((ht) => ht.id)
    );
    Pt.size > 0 && tt((ht) => ar(ht, Pt, { color: nt }));
  }, [tt, j, zt, Ht]), {
    onPointerDown: Lr,
    onResizeHandleDown: Tr,
    onRotateHandleDown: Dr,
    onConnectHandleDown: Fr,
    onBendHandleDown: Ar,
    onOrthogonalSegmentHandleDown: Wr,
    onArrowEndpointDown: Or
  } = fa({
    ref: M,
    containerRef: T,
    editorRef: D,
    pointers: S,
    interactionRef: Et,
    cameraRef: Z,
    shapesRef: Ht,
    toolRef: Ke,
    penModeRef: mt,
    activeColorRef: Ct,
    drawColorRef: Wt,
    setDrawColor: zt,
    setActiveColor: ut,
    drawStrokeWidth: I,
    drawInkStyle: $,
    objectSnapEnabled: y,
    setSelectedStrokeWidth: Ve,
    camera: A,
    shapes: E,
    selected: W,
    isSpaceDown: X,
    setCamera: G,
    setShapes: L,
    setEditingId: et,
    setEraserPos: Lt,
    setGuides: st,
    setAnnouncement: gt,
    applyInteraction: St,
    selectNow: ct,
    selectionActions: B,
    past: R,
    future: q,
    beginHistory: gn,
    endHistory: $e,
    cancelHistory: ve,
    commit: tt,
    deleteSelection: yt,
    onDirty: v,
    onToolChange: f,
    controlled: N,
    isDarkMode: n,
    minZoom: nr,
    maxZoom: rr,
    textualTypes: or,
    selectedRef: j,
    editingIdRef: lt,
    setIsSpaceDown: O,
    viewportCentre: je,
    setLocalShapes: Y,
    expandToGroups: Be,
    toPage: Me,
    createId: cr,
    liveStrokeCanvasRef: qt,
    activeDrawRef: oe,
    pendingDrawsRef: _t,
    queuedDrawIdsRef: F,
    commitDrawBatch: U,
    setIsPenMode: rt
  }), { cursor: Rr, gridColor: Hr, gridSize: yn, strokeColorOf: _r } = ha({
    isDarkMode: n,
    tool: r === "highlighter" ? "draw" : r,
    isSpaceDown: X,
    interaction: xt,
    zoom: A.z
  }), wn = (nt) => {
    const Pt = j.current, ht = lt.current, Qt = new Set(Pt);
    if (ht && Qt.add(ht), Qt.size === 0) return;
    const Se = "strokeWidth" in nt, Ce = Object.keys(nt).every((kt) => kt === "color" || kt === "fillColor" || kt === "strokeColor" || kt === "strokeWidth");
    if (ot.length > 0 && ot.every((kt) => kt.type === "draw") && Ce) {
      const kt = "color" in nt ? nt.color : void 0, Xt = "strokeWidth" in nt ? nt.strokeWidth : void 0, Sn = "strokeColor" in nt ? nt.strokeColor : void 0;
      tt((Jr) => ar(Jr, Qt, {
        ...kt !== void 0 ? { color: kt } : {},
        ...Xt !== void 0 ? { strokeWidth: Xt } : {},
        ...Sn !== void 0 ? { strokeColor: Sn } : {}
      }));
      return;
    }
    if (Se) {
      const kt = nt.strokeWidth;
      if (kt !== void 0 && Object.keys(nt).length === 1) {
        tt((Xt) => ir(Xt, Qt, kt));
        return;
      }
    }
    tt((kt) => kt.map((Xt) => {
      if (!Qt.has(Xt.id)) return Xt;
      if (!Se) return { ...Xt, ...nt };
      switch (Xt.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...Xt, ...nt };
        case "note":
        case "card":
        case "text":
        case "image":
          return Xt;
        case "draw":
          return { ...Xt, ...nt };
        default:
          return Pr(Xt);
      }
    }));
  }, {
    commitEditorHtml: jr,
    applyFormat: Br,
    applyList: Kr,
    onEditorKeyDown: Ur,
    applyCustomFontFamily: Vr
  } = Ti({
    editorRef: D,
    editingId: J,
    setShapes: L,
    setAnnouncement: gt,
    onDirty: v,
    patchSelected: wn
  }), { renderEditor: Gr, renderShapeBody: qr } = Ei({
    camera: A,
    editingId: J,
    isDarkMode: n,
    editorRef: D,
    commitEditorHtml: jr,
    onEditorKeyDown: Ur,
    setShapes: L,
    onDirty: v,
    renderDiagram: w
  }), Zr = xt.kind === "marquee" ? xt : null, Qr = Kt.useCallback(() => {
    var nt;
    S.current.clear(), oe.current = null, St({ kind: "none" }), We(
      qt.current,
      _t.current,
      null,
      Z.current,
      window.devicePixelRatio || 1
    ), rt(!1), f("select"), (nt = T.current) == null || nt.focus();
  }, [
    oe,
    St,
    Z,
    T,
    qt,
    f,
    _t,
    S,
    rt
  ]), { shapeById: bn, visiblePaintOrder: kn } = Li({
    containerRef: T,
    shapesRef: Ht,
    shapes: E,
    camera: A,
    selected: W,
    editingId: J,
    boardIdentity: e
  });
  return /* @__PURE__ */ _(
    "div",
    {
      ref: T,
      onPointerDown: Lr,
      onPointerMove: Zt,
      onPointerLeave: Ue,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": r,
      "data-canvas-pen-mode": It ? "true" : "false",
      "data-canvas-camera-x": A.x,
      "data-canvas-camera-y": A.y,
      "data-canvas-camera-z": A.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
        cursor: Rr,
        background: n ? V.canvasDark : V.canvasLight,
        backgroundImage: `radial-gradient(${Hr} 1px, transparent 1px)`,
        backgroundSize: `${yn}px ${yn}px`,
        backgroundPosition: `${-A.x * A.z}px ${-A.y * A.z}px`
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
            children: Yt
          }
        ),
        /* @__PURE__ */ C(
          ii,
          {
            visiblePaintOrder: kn,
            selected: W,
            shapeById: bn,
            allShapes: Ht.current,
            camera: A,
            interaction: xt,
            eraserPos: H,
            guides: y ? K : [],
            marquee: Zr,
            strokeColorOf: _r
          }
        ),
        /* @__PURE__ */ C("canvas", { ref: qt, "aria-hidden": "true", "data-canvas-live-strokes": "true", className: "absolute inset-0 w-full h-full pointer-events-none" }),
        /* @__PURE__ */ C(
          wi,
          {
            visiblePaintOrder: kn,
            selected: W,
            editingId: J,
            camera: A,
            shapeById: bn,
            allShapes: Ht.current,
            peerCursors: d,
            isDarkMode: n,
            renderEditor: Gr,
            renderShapeBody: qr,
            setEditingId: et,
            onBendHandleDown: Ar,
            onOrthogonalSegmentHandleDown: Wr,
            onResizeHandleDown: Tr,
            onRotateHandleDown: Dr,
            onConnectHandleDown: Fr,
            onArrowEndpointDown: Or
          }
        ),
        jt && !It && /* @__PURE__ */ C(
          Xi,
          {
            shape: jt,
            selection: ot,
            selectionActions: B,
            shapes: E,
            camera: A,
            canvasSize: { width: (($n = T.current) == null ? void 0 : $n.clientWidth) ?? 380, height: ((Mn = T.current) == null ? void 0 : Mn.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!J,
            showPalette: bt,
            installedFontFamilies: Gt,
            setShowPalette: At,
            setActiveColor: ut,
            patchSelected: wn,
            applyFormat: Br,
            applyList: Kr,
            applyCustomFontFamily: Vr
          }
        ),
        It && /* @__PURE__ */ C(Pi, { isDarkMode: n, onExit: Qr }),
        /* @__PURE__ */ C(
          Ii,
          {
            tool: r,
            activeColor: it,
            drawStrokeWidth: I,
            drawInkStyle: $,
            objectSnapEnabled: y,
            onSelectInkStyle: b,
            onSelectObjectSnap: z,
            isDarkMode: n,
            onSelectColor: Er,
            onSelectStrokeWidth: Nr
          }
        )
      ]
    }
  );
});
export {
  ft as CANVAS_COLORS,
  sr as CANVAS_COLOR_KEYS,
  Ot as CANVAS_FONTS,
  ya as InfiniteCanvas,
  co as SHAPE_TOOLS,
  ar as applySelectedDrawStyle,
  ir as applySelectedStrokeWidth,
  ga as diagramTemplate,
  bi as getInspectorGroups,
  pn as isDiagramShape
};
