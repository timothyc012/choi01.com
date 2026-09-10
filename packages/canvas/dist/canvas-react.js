import { jsx as z, jsxs as K, Fragment as ie } from "react/jsx-runtime";
import Vt, { useState as ct, useRef as Q, useEffect as Mt, useLayoutEffect as ae, useMemo as Wt, useCallback as ft, useImperativeHandle as so, forwardRef as co } from "react";
import { p as lo, i as xn, k as pn, a as pt, v as uo, c as _t, s as fo, b as fr, d as ne, h as ho, C as xo, S as po } from "./document-CwLumMU9.js";
import { Minus as vo, Plus as mo, ChevronDown as go, AlignLeft as yo, AlignCenter as wo, AlignRight as bo, List as ko, ListOrdered as $o, Bold as Mo, Italic as So, Underline as Co, Group as zo, Ungroup as Xo, Copy as Yo, Trash2 as Po, MousePointer2 as Io } from "lucide-react";
const No = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-900-90: rgba(15,23,42,.9);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-90: rgba(255,255,255,.9);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas *{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}.invoicex-canvas input,.invoicex-canvas textarea,.invoicex-canvas [contenteditable=true],.invoicex-canvas [contenteditable=true] *{-webkit-user-select:text;user-select:text}.invoicex-canvas a{-webkit-touch-callout:initial}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .top-4{top:1rem}.invoicex-canvas .left-0{left:0}.invoicex-canvas .left-1\\/2{left:50%}.invoicex-canvas .right-0{right:0}.invoicex-canvas .right-4{right:1rem}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .bottom-4{bottom:1rem}.invoicex-canvas .right-safe-4{right:max(1rem,env(safe-area-inset-right))}.invoicex-canvas .bottom-safe-4{bottom:max(1rem,env(safe-area-inset-bottom))}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .min-h-11{min-height:2.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .inline-flex{display:inline-flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .px-3\\.5{padding-left:.875rem;padding-right:.875rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .py-2{padding-top:.5rem;padding-bottom:.5rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-2{padding-right:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .mr-1{margin-right:.25rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{user-select:none;-webkit-user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .-translate-x-1\\/2{transform:translate(-50%)}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-sm{font-size:.875rem;line-height:1.25rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-900\\/90{background-color:var(--canvas-slate-900-90)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-white\\/90{background-color:var(--canvas-white-90)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-l{border-left-width:1px;border-left-style:solid}.invoicex-canvas .border-r{border-right-width:1px;border-right-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .focus-visible\\:outline:focus-visible{outline-style:solid}.invoicex-canvas .focus-visible\\:outline-2:focus-visible{outline-width:2px}.invoicex-canvas .focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.invoicex-canvas .focus-visible\\:outline-blue-500:focus-visible{outline-color:var(--canvas-blue-500)}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .backdrop-blur-md{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.invoicex-canvas .transition-all{transition-property:all;transition-duration:.15s}.invoicex-canvas .transition-transform{transition-property:transform;transition-duration:.15s}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', G = Object.freeze({
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
}), hr = 12;
function an(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function Ce(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function ze(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function Xe(t, e, n, r) {
  const i = ze(t, e, n), s = ze(t, e, r), c = ze(n, r, t), h = ze(n, r, e);
  return Math.abs(i) < 1e-6 && Ce(t, n, e) || Math.abs(s) < 1e-6 && Ce(t, r, e) || Math.abs(c) < 1e-6 && Ce(n, t, r) || Math.abs(h) < 1e-6 && Ce(n, e, r) ? !0 : i > 0 != s > 0 && c > 0 != h > 0;
}
function Eo(t, e, n) {
  const r = Math.min(t.x, e.x), o = Math.max(t.x, e.x), i = Math.min(t.y, e.y), s = Math.max(t.y, e.y);
  if (o < n.minX || r > n.maxX || s < n.minY || i > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const c = { x: n.minX, y: n.minY }, h = { x: n.maxX, y: n.minY }, m = { x: n.maxX, y: n.maxY }, l = { x: n.minX, y: n.maxY };
  return Xe(t, e, c, h) || Xe(t, e, h, m) || Xe(t, e, m, l) || Xe(t, e, l, c);
}
function Lo(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const r of e)
      if (Eo(t[n - 1], t[n], r)) return !0;
  return !1;
}
function sn(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function vn(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = sn(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let r = 0;
  for (let i = 1; i < t.length; i++) {
    const s = Math.hypot(t[i].x - t[i - 1].x, t[i].y - t[i - 1].y);
    if (r + s >= n) {
      const c = (n - r) / s;
      return { x: t[i - 1].x + (t[i].x - t[i - 1].x) * c, y: t[i - 1].y + (t[i].y - t[i - 1].y) * c };
    }
    r += s;
  }
  const o = t[t.length - 1];
  return { x: o.x, y: o.y };
}
function we(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function Pn(t, e, n, r) {
  const o = /* @__PURE__ */ new Set([t, e]), i = Math.min(t, e), s = Math.max(t, e), c = hr * 1.2;
  for (const h of n) {
    const m = (r === "x" ? h.minX : h.minY) - c, l = (r === "x" ? h.maxX : h.maxY) + c, g = (a) => a >= i - c * 4 && a <= s + c * 4;
    g(m) && o.add(m), g(l) && o.add(l);
  }
  return [...o].sort((h, m) => Math.abs(h - t) - Math.abs(m - t));
}
function xr(t) {
  const e = [];
  for (const n of t) {
    const r = e[e.length - 1];
    (!r || r.x !== n.x || r.y !== n.y) && e.push(n);
  }
  return e;
}
function pr(t) {
  const e = [];
  for (const n of t) {
    const r = e[e.length - 1];
    if (r && r.x === n.x && r.y === n.y) continue;
    const o = e[e.length - 2];
    if (o && r && (o.x === r.x && r.x === n.x || o.y === r.y && r.y === n.y)) {
      e[e.length - 1] = n;
      continue;
    }
    e.push(n);
  }
  return e;
}
function To(t, e, n) {
  const r = [t];
  for (const o of [...n, e]) {
    const i = r[r.length - 1];
    if (!i) {
      r.push(o);
      continue;
    }
    if (i.x === o.x || i.y === o.y) {
      r.push(o);
      continue;
    }
    r.push({ x: o.x, y: i.y }, o);
  }
  return pr(r);
}
function Do(t, e, n) {
  const r = t[e], o = t[e + 1];
  if (!r || !o || !Number.isFinite(n) || r.x !== o.x && r.y !== o.y) return [...t];
  const i = r.x === o.x ? [r, { x: n, y: r.y }, { x: n, y: o.y }, o] : [r, { x: r.x, y: n }, { x: o.x, y: n }, o];
  return pr([
    ...t.slice(0, e),
    ...i,
    ...t.slice(e + 2)
  ]);
}
function qe(t, e) {
  const n = [], r = [];
  for (const i of t) {
    const s = xr(i);
    s.length < 2 || (Lo(s, e) ? r.push(s) : n.push(s));
  }
  const o = n.length > 0 ? n : r;
  return o.length === 0 ? [] : o.reduce((i, s) => sn(s) < sn(i) ? s : i);
}
function In(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function de(t, e, n, r) {
  const o = Math.min(t, e), i = Math.max(t, e), s = Math.max(48, Math.abs(e - t) * 0.35, hr * 4);
  if (r === "x") {
    if (n === "e") return i + s;
    if (n === "w") return o - s;
  } else {
    if (n === "s") return i + s;
    if (n === "n") return o - s;
  }
  return t <= e ? o - s : i + s;
}
function Fo(t, e, n, r, o) {
  const i = (t.x + e.x) / 2, s = (t.y + e.y) / 2;
  if (n === "u") {
    if (r) {
      const h = de(t.x, e.x, t.side, "x");
      return [t, { x: h, y: t.y }, { x: h, y: e.y }, e];
    }
    const c = de(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: c }, { x: e.x, y: c }, e];
  }
  if (n === "zigzag") {
    if (r) {
      const m = de(t.x, e.x, t.side, "x"), l = de(t.y, e.y, t.side, "y");
      return o ? [t, { x: m, y: t.y }, { x: m, y: l }, { x: i, y: l }, { x: i, y: e.y }, e] : [t, { x: m, y: t.y }, { x: m, y: l }, { x: e.x, y: l }, e];
    }
    const c = de(t.y, e.y, t.side, "y"), h = de(t.x, e.x, t.side, "x");
    return o ? [t, { x: t.x, y: c }, { x: h, y: c }, { x: h, y: e.y }, e] : [t, { x: t.x, y: c }, { x: h, y: c }, { x: h, y: s }, { x: e.x, y: s }, e];
  }
  return [];
}
function vr(t, e, n = [], r = "elbow", o = []) {
  if (o.length > 0) return To(t, e, o);
  const i = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), s = e.side ?? (i === "e" || i === "w" ? "w" : "n"), c = i === "e" || i === "w", h = s === "e" || s === "w", m = Pn(t.x, e.x, n, "x"), l = Pn(t.y, e.y, n, "y"), g = [];
  if (c && h) {
    for (const v of m) g.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
    for (const v of l) g.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
  } else if (!c && !h) {
    for (const v of l) g.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
    for (const v of m) g.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  } else if (c) {
    g.push([t, { x: e.x, y: t.y }, e]);
    for (const v of l)
      g.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]), g.push([t, { x: t.x, y: v }, e]);
    for (const v of m) g.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  } else {
    g.push([t, { x: t.x, y: e.y }, e]);
    for (const v of l)
      g.push([t, { x: t.x, y: v }, e]), g.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
    for (const v of m) g.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  }
  const a = qe(g, n);
  if (r === "elbow") return a;
  if (r === "reverse") {
    const v = In(a), x = qe(g.filter((f) => In(f) !== v), n);
    return x.length > 1 ? x : a;
  }
  const u = Fo(t, e, r, c, h), d = qe([u], n);
  return d.length > 1 ? d : a;
}
function mr(t) {
  return t.length < 2 ? 0 : we(t[t.length - 2], t[t.length - 1]);
}
const { PI: Ao } = Math, be = Ao + 1e-4, Nn = 0.5, En = [1, 1];
function Ln(t, e, n, r = (o) => o) {
  return t * r(0.5 - e * (0.5 - n));
}
const { min: Ze } = Math;
function gr(t, e, n) {
  let r = Ze(1, e / n);
  return Ze(1, t + (Ze(1, 1 - r) - t) * (r * 0.275));
}
function Wo(t) {
  return [-t[0], -t[1]];
}
function jt(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function Tn(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function re(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function cn(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function ee(t, e) {
  return [t[0] * e, t[1] * e];
}
function Qe(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function Oo(t, e) {
  return [t[0] / e, t[1] / e];
}
function yr(t) {
  return [t[1], -t[0]];
}
function Je(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function Dn(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function _o(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function Ho(t) {
  return Math.hypot(t[0], t[1]);
}
function Fn(t, e) {
  let n = t[0] - e[0], r = t[1] - e[1];
  return n * n + r * r;
}
function wr(t) {
  return Oo(t, Ho(t));
}
function jo(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function mn(t, e, n) {
  let r = Math.sin(n), o = Math.cos(n), i = t[0] - e[0], s = t[1] - e[1], c = i * o - s * r, h = i * r + s * o;
  return [c + e[0], h + e[1]];
}
function An(t, e, n, r) {
  let o = Math.sin(r), i = Math.cos(r), s = e[0] - n[0], c = e[1] - n[1], h = s * i - c * o, m = s * o + c * i;
  return t[0] = h + n[0], t[1] = m + n[1], t;
}
function Wn(t, e, n) {
  return jt(t, ee(re(e, t), n));
}
function Ro(t, e, n, r) {
  let o = n[0] - e[0], i = n[1] - e[1];
  return t[0] = e[0] + o * r, t[1] = e[1] + i * r, t;
}
function br(t, e, n) {
  return jt(t, ee(e, n));
}
const yt = [0, 0], Jt = [0, 0], te = [0, 0];
function Bo(t, e) {
  let n = br(t, wr(yr(re(t, jt(t, [1, 1])))), -e), r = [], o = 1 / 13;
  for (let i = o; i <= 1; i += o) r.push(mn(n, t, be * 2 * i));
  return r;
}
function Ko(t, e, n) {
  let r = [], o = 1 / n;
  for (let i = o; i <= 1; i += o) r.push(mn(e, t, be * i));
  return r;
}
function Uo(t, e, n) {
  let r = re(e, n), o = ee(r, 0.5), i = ee(r, 0.51);
  return [re(t, o), re(t, i), jt(t, i), jt(t, o)];
}
function Go(t, e, n, r) {
  let o = [], i = br(t, e, n), s = 1 / r;
  for (let c = s; c < 1; c += s) o.push(mn(i, t, be * 3 * c));
  return o;
}
function Vo(t, e, n) {
  return [jt(t, ee(e, n)), jt(t, ee(e, n * 0.99)), re(t, ee(e, n * 0.99)), re(t, ee(e, n))];
}
function On(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function qo(t, e, n) {
  return t.slice(0, 10).reduce((r, o) => {
    let i = o.pressure;
    return e && (i = gr(r, o.distance, n)), (r + i) / 2;
  }, t[0].pressure);
}
function Zo(t, e = {}) {
  let { size: n = 16, smoothing: r = 0.5, thinning: o = 0.5, simulatePressure: i = !0, easing: s = (N) => N, start: c = {}, end: h = {}, last: m = !1 } = e, { cap: l = !0, easing: g = (N) => N * (2 - N) } = c, { cap: a = !0, easing: u = (N) => --N * N * N + 1 } = h;
  if (t.length === 0 || n <= 0) return [];
  let d = t[t.length - 1].runningLength, v = On(c.taper, n, d), x = On(h.taper, n, d), f = (n * r) ** 2, p = [], y = [], w = qo(t, i, n), $ = Ln(n, o, t[t.length - 1].pressure, s), b, X = t[0].vector, k = t[0].point, M = k, E = k, Y = M, C = !1;
  for (let N = 0; N < t.length; N++) {
    let { pressure: W } = t[N], { point: O, vector: U, distance: A, runningLength: R } = t[N], J = N === t.length - 1;
    if (!J && d - R < 3) continue;
    o ? (i && (W = gr(w, A, n)), $ = Ln(n, o, W, s)) : $ = n / 2, b === void 0 && (b = $);
    let rt = R < v ? g(R / v) : 1, it = d - R < x ? u((d - R) / x) : 1;
    $ = Math.max(0.01, $ * Math.min(rt, it));
    let et = (J ? t[N] : t[N + 1]).vector, xt = J ? 1 : Dn(U, et), mt = Dn(U, X) < 0 && !C, tt = xt !== null && xt < 0;
    if (mt || tt) {
      Je(yt, X), Qe(yt, yt, $);
      for (let I = 0; I <= 1; I += 0.07692307692307693) cn(Jt, O, yt), An(Jt, Jt, O, be * I), E = [Jt[0], Jt[1]], p.push(E), Tn(te, O, yt), An(te, te, O, be * -I), Y = [te[0], te[1]], y.push(Y);
      k = E, M = Y, tt && (C = !0);
      continue;
    }
    if (C = !1, J) {
      Je(yt, U), Qe(yt, yt, $), p.push(re(O, yt)), y.push(jt(O, yt));
      continue;
    }
    Ro(yt, et, U, xt), Je(yt, yt), Qe(yt, yt, $), cn(Jt, O, yt), E = [Jt[0], Jt[1]], (N <= 1 || Fn(k, E) > f) && (p.push(E), k = E), Tn(te, O, yt), Y = [te[0], te[1]], (N <= 1 || Fn(M, Y) > f) && (y.push(Y), M = Y), w = W, X = U;
  }
  let L = [t[0].point[0], t[0].point[1]], T = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : jt(t[0].point, [1, 1]), F = [], P = [];
  if (t.length === 1) {
    if (!(v || x) || m) return Bo(L, b || $);
  } else {
    v || x && t.length === 1 || (l ? F.push(...Ko(L, y[0], 13)) : F.push(...Uo(L, p[0], y[0])));
    let N = yr(Wo(t[t.length - 1].vector));
    x || v && t.length === 1 ? P.push(T) : a ? P.push(...Go(T, N, $, 29)) : P.push(...Vo(T, N, $));
  }
  return p.concat(P, y.reverse(), F);
}
const _n = [0, 0];
function Hn(t) {
  return t != null && t >= 0;
}
function Qo(t, e = {}) {
  var a;
  let { streamline: n = 0.5, size: r = 16, last: o = !1 } = e;
  if (t.length === 0) return [];
  let i = 0.15 + (1 - n) * 0.85, s = Array.isArray(t[0]) ? t : t.map(({ x: u, y: d, pressure: v = Nn }) => [u, d, v]);
  if (s.length === 2) {
    let u = s[1];
    s = s.slice(0, -1);
    for (let d = 1; d < 5; d++) s.push(Wn(s[0], u, d / 4));
  }
  s.length === 1 && (s = [...s, [...jt(s[0], En), ...s[0].slice(2)]]);
  let c = [{ point: [s[0][0], s[0][1]], pressure: Hn(s[0][2]) ? s[0][2] : 0.25, vector: [...En], distance: 0, runningLength: 0 }], h = !1, m = 0, l = c[0], g = s.length - 1;
  for (let u = 1; u < s.length; u++) {
    let d = o && u === g ? [s[u][0], s[u][1]] : Wn(l.point, s[u], i);
    if (_o(l.point, d)) continue;
    let v = jo(d, l.point);
    if (m += v, u < g && !h) {
      if (m < r) continue;
      h = !0;
    }
    cn(_n, l.point, d), l = { point: d, pressure: Hn(s[u][2]) ? s[u][2] : Nn, vector: wr(_n), distance: v, runningLength: m }, c.push(l);
  }
  return c[0].vector = ((a = c[1]) == null ? void 0 : a.vector) || [0, 0], c;
}
function Jo(t, e = {}) {
  return Zo(Qo(t, e), e);
}
var ti = Jo;
function Le(t) {
  if (t.fillColor)
    try {
      return pn(t.fillColor);
    } catch {
      return t.color ? pt[t.color].bg : pt.blue.bg;
    }
  return t.color ? pt[t.color].bg : pt.blue.bg;
}
function We(t) {
  if (t.strokeColor)
    try {
      return pn(t.strokeColor);
    } catch {
      return t.color ? pt[t.color].border : "#2563eb";
    }
  return t.color ? pt[t.color].border : "#2563eb";
}
function kr(t) {
  return We(t);
}
function se(t) {
  if (t.textColor)
    try {
      return pn(t.textColor);
    } catch {
      return t.color ? pt[t.color].text : "#0f172a";
    }
  return t.color ? pt[t.color].text : "#0f172a";
}
function $r(t, e, n) {
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
      const r = e / 2, o = n / 2, i = Math.min(e, n) / 2, s = i * 0.4, c = [];
      for (let h = 0; h < 10; h++) {
        const m = Math.PI / 5 * h - Math.PI / 2, l = h % 2 === 0 ? i : s;
        c.push(`${r + l * Math.cos(m)},${o + l * Math.sin(m)}`);
      }
      return c.join(" ");
    }
    default:
      return "";
  }
}
function ei(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let r = 1; r < t.length - 1; r++) {
    const [o, i] = t[r], [s, c] = t[r + 1];
    e += ` Q ${o} ${i} ${(o + s) / 2} ${(i + c) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function ni(t, e) {
  return e === "highlighter" ? { size: t * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: t, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 };
}
function Ie(t, e) {
  return e === "highlighter" ? t * 1.25 : t / 2;
}
function Mr(t, e, n) {
  return t.length < 2 ? [] : ti(t, ni(e, n));
}
function jn(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [h, m] = t[0], l = Ie(e, n);
    return `M ${h - l} ${m} A ${l} ${l} 0 1 0 ${h + l} ${m} A ${l} ${l} 0 1 0 ${h - l} ${m} Z`;
  }
  const r = Mr(t, e, n);
  if (r.length === 0) return "";
  if (r.length < 4)
    return r.reduce(
      (h, [m, l], g) => h + (g === 0 ? `M ${m} ${l}` : ` L ${m} ${l}`),
      ""
    ) + " Z";
  const o = r[0], i = r[1], s = r[2];
  let c = `M ${o[0]} ${o[1]} Q ${i[0]} ${i[1]} ${(i[0] + s[0]) / 2} ${(i[1] + s[1]) / 2} T `;
  for (let h = 2; h < r.length - 1; h += 1) {
    const m = r[h], l = r[h + 1];
    c += `${(m[0] + l[0]) / 2} ${(m[1] + l[1]) / 2} `;
  }
  return `${c}Z`;
}
function ri(t) {
  return t.map(([e, n], r) => `${r === 0 ? "M" : "L"} ${e} ${n}`).join(" ");
}
const Rn = /* @__PURE__ */ new WeakMap();
function ln(t, e = 1) {
  if (t.type !== "draw") return { d: "", filled: !1, width: 0, opacity: 1 };
  const n = t.points ?? [], r = t.strokeWidth ?? 3, o = t.drawMode ?? "pen", i = o === "highlighter" ? 0.35 : 1;
  if (t.inkStyle === void 0 && n.length === 1)
    return { d: ei(n), filled: !1, width: r / e, opacity: i };
  const s = t.inkStyle === "raw", c = n.length > 0 && (n.length === 1 || s && n.every(([m, l]) => m === n[0][0] && l === n[0][1]));
  return {
    d: c ? jn([n[0]], r, o) : s ? ri(n) : jn(n, r, o),
    filled: c || !s,
    width: o === "highlighter" ? r * 2.5 : r,
    opacity: i
  };
}
function Sr(t, e = 1) {
  var o;
  if (t.type !== "draw" || t.inkStyle === void 0 && ((o = t.points) == null ? void 0 : o.length) === 1) return ln(t, e);
  const n = Rn.get(t);
  if (n) return n;
  const r = ln(t);
  return Rn.set(t, r), r;
}
function Gt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function Cr(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], r = (o, i) => {
    o.childNodes.forEach((s) => {
      if (s.nodeType === Node.TEXT_NODE) {
        const l = s.textContent ?? "";
        l && n[n.length - 1].push({ text: l, ...i });
        return;
      }
      if (s.nodeType !== Node.ELEMENT_NODE) return;
      const c = s;
      if (c.tagName === "BR") {
        n.push([]);
        return;
      }
      const h = { bold: i.bold || c.tagName === "B" || c.tagName === "STRONG", italic: i.italic || c.tagName === "I" || c.tagName === "EM", underline: i.underline || c.tagName === "U" }, m = c.tagName === "DIV" || c.tagName === "P" || c.tagName === "LI";
      m && n[n.length - 1].length > 0 && n.push([]), r(c, h), m && n.push([]);
    });
  };
  return r(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((o) => o.length > 0);
}
const Bn = /* @__PURE__ */ new WeakMap();
function Oe(t) {
  const e = Bn.get(t);
  if (e !== void 0) return e;
  const n = t.html ? xn(t.html) : t.text ? Gt(t.text).replace(/\n/g, "<br>") : "";
  return Bn.set(t, n), n;
}
function un(t) {
  if (t)
    try {
      return uo(t);
    } catch {
      return;
    }
}
function zr(t) {
  try {
    return lo(t);
  } catch {
    return null;
  }
}
function ke(t) {
  return t.html ? Cr(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const Ye = 12;
function qt(t) {
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
function oi(t, e) {
  if (e.length < 3) return !1;
  let n = !1;
  for (let r = 0, o = e.length - 1; r < e.length; o = r++) {
    const i = e[r], s = e[o];
    if (!i || !s) continue;
    if (Ht(t.x, t.y, i.x, i.y, s.x, s.y) <= 1e-9)
      return !0;
    i.y > t.y != s.y > t.y && t.x < (s.x - i.x) * (t.y - i.y) / (s.y - i.y) + i.x && (n = !n);
  }
  return n;
}
function wt(t) {
  const e = t.rotation ?? 0, n = qt(t);
  if (!e) return n;
  const r = Ft(t), o = Math.cos(e), i = Math.sin(e), s = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([m, l]) => {
    const g = m - r.x, a = l - r.y;
    return [r.x + g * o - a * i, r.y + g * i + a * o];
  }), c = s.map((m) => m[0]), h = s.map((m) => m[1]);
  return { minX: Math.min(...c), minY: Math.min(...h), maxX: Math.max(...c), maxY: Math.max(...h) };
}
function Te(t, e, n) {
  const r = t.rotation ?? 0;
  if (!r) return { x: e, y: n };
  const o = Ft(t), i = Math.cos(-r), s = Math.sin(-r), c = e - o.x, h = n - o.y;
  return { x: o.x + c * i - h * s, y: o.y + c * s + h * i };
}
function Ht(t, e, n, r, o, i) {
  const s = o - n, c = i - r, h = s * s + c * c, m = h === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * s + (e - r) * c) / h));
  return Math.hypot(t - (n + m * s), e - (r + m * c));
}
function dn(t, e, n, r, o, i) {
  const s = 8 / r;
  if (t.type === "arrow") {
    const m = (t.strokeWidth ?? 2.5) / r / 2 + s, l = Ot(t, o ?? /* @__PURE__ */ new Map(), i);
    if (l.routing === "orthogonal" && l.pathPoints && l.pathPoints.length > 1) {
      for (let a = 1; a < l.pathPoints.length; a++) {
        const u = l.pathPoints[a - 1], d = l.pathPoints[a];
        if (Ht(e, n, u.x, u.y, d.x, d.y) <= m) return !0;
      }
      return !1;
    }
    if (l.bend === 0) return Ht(e, n, l.start.x, l.start.y, l.end.x, l.end.y) <= m;
    let g = l.start;
    for (let a = 1; a <= 16; a++) {
      const u = pe(a / 16, l.start, l.control, l.end);
      if (Ht(e, n, g.x, g.y, u.x, u.y) <= m) return !0;
      g = u;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const g = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / r / 2 + s;
    if (t.points.length === 1) {
      const [a, u] = t.points[0];
      return Math.hypot(e - a, n - u) <= g;
    }
    for (let a = 1; a < t.points.length; a++) {
      const [u, d] = t.points[a - 1], [v, x] = t.points[a];
      if (Ht(e, n, u, d, v, x) <= g) return !0;
    }
    return !1;
  }
  const c = Te(t, e, n), h = qt(t);
  if (t.type === "frame") {
    const m = c.x >= h.minX - s && c.x <= h.maxX + s && c.y >= h.minY - s && c.y <= h.maxY + s && (c.x <= h.minX + s || c.x >= h.maxX - s || c.y <= h.minY + s || c.y >= h.maxY - s), l = c.x >= h.minX - s && c.x <= h.maxX + s && c.y >= h.minY - 28 / r && c.y <= h.minY;
    return m || l;
  }
  return c.x >= h.minX - s && c.x <= h.maxX + s && c.y >= h.minY - s && c.y <= h.maxY + s;
}
function ce(t, e, n) {
  const r = qt(t), o = (r.minX + r.maxX) / 2, i = (r.minY + r.maxY) / 2, s = e - o, c = n - i;
  if (s === 0 && c === 0) return { x: o, y: i, side: "e" };
  const h = (r.maxX - r.minX) / 2, m = (r.maxY - r.minY) / 2, l = h === 0 ? 1 / 0 : Math.abs(h / s), g = m === 0 ? 1 / 0 : Math.abs(m / c);
  return l <= g ? { x: o + s * l, y: i + c * l, side: s >= 0 ? "e" : "w" } : { x: o + s * g, y: i + c * g, side: c >= 0 ? "s" : "n" };
}
function Xr(t, e, n, r) {
  const o = /* @__PURE__ */ new Set([e.id, n, r]);
  return t.filter((i) => !o.has(i.id)).map((i) => {
    const s = wt(i);
    return { minX: s.minX - Ye, minY: s.minY - Ye, maxX: s.maxX + Ye, maxY: s.maxY + Ye };
  }).filter((i) => i.maxX > i.minX && i.maxY > i.minY);
}
function Ot(t, e, n = []) {
  const r = t.fromId ? e.get(t.fromId) : void 0, o = t.toId ? e.get(t.toId) : void 0;
  let i = { x: t.x, y: t.y }, s = { x: t.x + t.w, y: t.y + t.h };
  if (r && o) {
    const d = Ft(r), v = Ft(o);
    i = ce(r, v.x, v.y), s = ce(o, d.x, d.y);
  } else r ? i = ce(r, s.x, s.y) : o && (s = ce(o, i.x, i.y));
  const c = (i.x + s.x) / 2, h = (i.y + s.y) / 2, m = t.bend ?? 0;
  let l = { x: c, y: h };
  if (m !== 0) {
    const d = s.x - i.x, v = s.y - i.y, x = Math.hypot(d, v) || 1;
    l = { x: c + -v / x * m, y: h + d / x * m };
  }
  const g = !!(r || o), a = t.routing ?? (g ? "orthogonal" : m !== 0 ? "curved" : "straight");
  if (a !== "orthogonal") return { start: i, end: s, control: l, bend: m, routing: a };
  const u = Xr(n, t, r == null ? void 0 : r.id, o == null ? void 0 : o.id);
  return {
    start: i,
    end: s,
    control: l,
    bend: m,
    routing: a,
    pathPoints: xr(vr(i, s, u, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function pe(t, e, n, r) {
  const o = 1 - t;
  return { x: o * o * e.x + 2 * o * t * n.x + t * t * r.x, y: o * o * e.y + 2 * o * t * n.y + t * t * r.y };
}
function _e(t, e) {
  if (!t || !e) return null;
  const n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n <= r ? { start: n, end: r } : null;
}
function De(t, e, n, r) {
  if (Math.abs(e) < 1e-12) return t >= n && t <= r ? { start: 0, end: 1 } : null;
  const o = (n - t) / e, i = (r - t) / e;
  return _e(
    { start: Math.min(o, i), end: Math.max(o, i) },
    { start: 0, end: 1 }
  );
}
function tn(t, e, n, r) {
  const o = e[0] - t[0], i = e[1] - t[1], s = t[0] - n.x, c = t[1] - n.y, h = o * o + i * i;
  if (h < 1e-12)
    return s * s + c * c <= r * r ? { start: 0, end: 1 } : null;
  const m = 2 * (s * o + c * i), l = s * s + c * c - r * r, g = m * m - 4 * h * l;
  if (g < 0) return null;
  const a = Math.sqrt(g);
  return _e(
    { start: (-m - a) / (2 * h), end: (-m + a) / (2 * h) },
    { start: 0, end: 1 }
  );
}
function ii(t, e, n, r, o) {
  const i = r.x - n.x, s = r.y - n.y, c = Math.hypot(i, s);
  if (c < 1e-12) return tn(t, e, n, o);
  const h = i / c, m = s / c, l = e[0] - t[0], g = e[1] - t[1], a = t[0] - n.x, u = t[1] - n.y, d = a * h + u * m, v = l * h + g * m, x = a * -m + u * h, f = l * -m + g * h, y = [
    _e(
      De(d, v, 0, c),
      De(x, f, -o, o)
    ),
    tn(t, e, n, o),
    tn(t, e, r, o)
  ].filter((w) => w !== null);
  return y.length === 0 ? null : {
    start: Math.min(...y.map((w) => w.start)),
    end: Math.max(...y.map((w) => w.end))
  };
}
function Kn(t, e, n) {
  return [t[0] + (e[0] - t[0]) * n, t[1] + (e[1] - t[1]) * n];
}
function fe(t, e) {
  const n = t[t.length - 1];
  (!n || Math.hypot(e[0] - n[0], e[1] - n[1]) > 1e-9) && t.push([e[0], e[1]]);
}
function ai(t, e, n) {
  let r = n[0][0], o = n[0][1], i = r, s = o;
  for (const [c, h] of n)
    r = Math.min(r, c), o = Math.min(o, h), i = Math.max(i, c), s = Math.max(s, h);
  return { ...t, id: e, points: n, x: r, y: o, w: i - r, h: s - o };
}
function si(t, e) {
  const n = t.slice(0, 480);
  let r = 1, o = `${n}-e${r}`;
  for (; e.has(o); ) o = `${n}-e${++r}`;
  return e.add(o), o;
}
function ge(t, e, n) {
  return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
}
function Pe(t, e, n) {
  return Math.abs(ge(e, n, t)) <= 1e-9 && t.x >= Math.min(e.x, n.x) - 1e-9 && t.x <= Math.max(e.x, n.x) + 1e-9 && t.y >= Math.min(e.y, n.y) - 1e-9 && t.y <= Math.max(e.y, n.y) + 1e-9;
}
function ci(t, e, n, r) {
  const o = ge(t, e, n), i = ge(t, e, r), s = ge(n, r, t), c = ge(n, r, e);
  return (o > 0 && i < 0 || o < 0 && i > 0) && (s > 0 && c < 0 || s < 0 && c > 0) ? !0 : Math.abs(o) <= 1e-9 && Pe(n, t, e) || Math.abs(i) <= 1e-9 && Pe(r, t, e) || Math.abs(s) <= 1e-9 && Pe(t, n, r) || Math.abs(c) <= 1e-9 && Pe(e, n, r);
}
function Un(t, e, n, r) {
  return ci(t, e, n, r) ? 0 : Math.min(
    Ht(t.x, t.y, n.x, n.y, r.x, r.y),
    Ht(e.x, e.y, n.x, n.y, r.x, r.y),
    Ht(n.x, n.y, t.x, t.y, e.x, e.y),
    Ht(r.x, r.y, t.x, t.y, e.x, e.y)
  );
}
function fn(t, e, n, r) {
  const o = De(t.x, e.x - t.x, n.minX - r, n.maxX + r), i = De(t.y, e.y - t.y, n.minY - r, n.maxY + r);
  return _e(o, i) !== null;
}
function li(t, e, n, r, o, i, s) {
  const c = 8 / o;
  if (t.type === "arrow") {
    const d = r + (t.strokeWidth ?? 2.5) / o / 2 + c, v = Ot(t, i, s), x = [];
    if (v.routing === "orthogonal" && v.pathPoints && v.pathPoints.length > 1)
      for (let f = 1; f < v.pathPoints.length; f++)
        x.push([v.pathPoints[f - 1], v.pathPoints[f]]);
    else if (v.bend === 0)
      x.push([v.start, v.end]);
    else {
      let f = v.start;
      for (let p = 1; p <= 16; p++) {
        const y = pe(p / 16, v.start, v.control, v.end);
        x.push([f, y]), f = y;
      }
    }
    return x.some(([f, p]) => Un(e, n, f, p) <= d);
  }
  const h = Te(t, e.x, e.y), m = Te(t, n.x, n.y), l = qt(t);
  if (t.type !== "frame") return fn(h, m, l, r + c);
  const g = r + c, a = [
    { x: l.minX, y: l.minY },
    { x: l.maxX, y: l.minY },
    { x: l.maxX, y: l.maxY },
    { x: l.minX, y: l.maxY }
  ];
  for (let d = 0; d < a.length; d++)
    if (Un(h, m, a[d], a[(d + 1) % a.length]) <= g) return !0;
  const u = { minX: l.minX, minY: l.minY - 28 / o, maxX: l.maxX, maxY: l.minY };
  return fn(h, m, u, r);
}
function gn(t, e, n, r, o) {
  const i = [], s = Math.max(o, 0.1), c = r / s, h = new Set(t.map((l) => l.id)), m = new Map(t.map((l) => [l.id, l]));
  for (const l of t) {
    if (l.type !== "draw" || !l.points) {
      if (li(l, e, n, c, s, m, t)) continue;
      i.push(l);
      continue;
    }
    const a = (l.drawMode ?? "pen") === "highlighter" ? (l.strokeWidth ?? 3) * 2.5 : l.strokeWidth ?? 3, u = c + a / 2, d = qt(l);
    if (!fn(e, n, d, u)) {
      i.push(l);
      continue;
    }
    if (l.points.length === 0) {
      i.push(l);
      continue;
    }
    if (l.points.length === 1) {
      const [y, w] = l.points[0];
      Ht(y, w, e.x, e.y, n.x, n.y) > u && i.push(l);
      continue;
    }
    const v = [];
    let x = [], f = !1;
    const p = () => {
      x.length > 1 && v.push(x), x = [];
    };
    for (let y = 1; y < l.points.length; y++) {
      const w = l.points[y - 1], $ = l.points[y], b = ii(w, $, e, n, u);
      if (!b) {
        x.length === 0 && fe(x, w), fe(x, $);
        continue;
      }
      f = !0, b.start > 1e-9 && (x.length === 0 && fe(x, w), fe(x, Kn(w, $, b.start))), p(), b.end < 1 - 1e-9 && (fe(x, Kn(w, $, b.end)), fe(x, $));
    }
    if (p(), !f) {
      i.push(l);
      continue;
    }
    v.forEach((y, w) => {
      const $ = w === 0 ? l.id : si(l.id, h);
      i.push(ai(l, $, y));
    });
  }
  return i;
}
function ui(t, e, n, r, o) {
  return gn(t, { x: e, y: n }, { x: e, y: n }, r, o);
}
function di(t, e, n) {
  const r = 6 / n;
  let o = null, i = null;
  const s = [], c = [t.minX, (t.minX + t.maxX) / 2, t.maxX], h = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const m of e) {
    const l = wt(m), g = [l.minX, (l.minX + l.maxX) / 2, l.maxX], a = [l.minY, (l.minY + l.maxY) / 2, l.maxY];
    for (const u of c) for (const d of g) {
      const v = d - u;
      Math.abs(v) <= r && (!o || Math.abs(v) < Math.abs(o.delta)) && (o = { delta: v, at: d });
    }
    for (const u of h) for (const d of a) {
      const v = d - u;
      Math.abs(v) <= r && (!i || Math.abs(v) < Math.abs(i.delta)) && (i = { delta: v, at: d });
    }
  }
  return o && s.push({ x1: o.at, y1: t.minY - 1e3, x2: o.at, y2: t.maxY + 1e3 }), i && s.push({ x1: t.minX - 1e3, y1: i.at, x2: t.maxX + 1e3, y2: i.at }), { dx: (o == null ? void 0 : o.delta) ?? 0, dy: (i == null ? void 0 : i.delta) ?? 0, guides: s };
}
const fi = 14;
function hi({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: r,
  camera: o,
  interaction: i,
  eraserPos: s,
  guides: c,
  marquee: h,
  lasso: m,
  strokeColorOf: l
}) {
  return /* @__PURE__ */ z("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ K("g", { transform: `scale(${o.z}) translate(${-o.x}, ${-o.y})`, children: [
    t.map((g) => {
      if (g.type === "draw" && g.points) {
        const Y = g.drawMode ?? "pen", C = g.strokeWidth ?? 3, L = e.has(g.id) ? G.blue : l(g), T = Sr(g, o.z);
        return /* @__PURE__ */ z(
          "path",
          {
            "data-canvas-vector-shape-id": g.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": Y,
            "data-canvas-stroke-width": C,
            "data-canvas-ink-style": g.inkStyle ?? "smoothed",
            d: T.d,
            fill: T.filled ? L : "none",
            stroke: T.filled ? "none" : L,
            strokeWidth: T.width,
            strokeOpacity: Y === "highlighter" ? 0.35 : void 0,
            fillOpacity: Y === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          g.id
        );
      }
      if (g.type !== "arrow") return null;
      const a = e.has(g.id) ? G.blue : l(g), u = Ot(g, n, r), d = g.strokeWidth ?? 2.5, v = d / o.z, x = Math.max(10, 8 + d * 2), f = Math.max(4, 2 + d), p = x / o.z, y = f / o.z, w = u.routing === "orthogonal" && u.pathPoints ? u.pathPoints : null, $ = w && w.length > 1;
      let b, X;
      if ($)
        b = an(w), X = mr(w);
      else if (u.routing === "curved") {
        b = `M ${u.start.x} ${u.start.y} Q ${u.control.x} ${u.control.y} ${u.end.x} ${u.end.y}`;
        const Y = pe(0.94, u.start, u.control, u.end);
        X = Math.atan2(u.end.y - Y.y, u.end.x - Y.x);
      } else
        b = `M ${u.start.x} ${u.start.y} L ${u.end.x} ${u.end.y}`, X = Math.atan2(u.end.y - u.start.y, u.end.x - u.start.x);
      const k = $ && w.length >= 2 ? we(w[0], w[1]) : u.routing === "orthogonal" && u.start.side ? u.start.side === "e" ? 0 : u.start.side === "w" ? Math.PI : u.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : we(u.start, u.end), M = g.strokeStyle === "dashed" ? `${8 / o.z} ${5 / o.z}` : g.strokeStyle === "dotted" ? `${1.5 / o.z} ${4 / o.z}` : void 0, E = (Y, C, L, T) => Y === "dot" ? /* @__PURE__ */ z("circle", { "data-canvas-arrow-dot-radius": f, cx: C, cy: L, r: y, fill: a }) : Y === "none" ? null : /* @__PURE__ */ z(
        "polygon",
        {
          "data-canvas-arrowhead-size": x,
          points: `${C},${L} ${C - p * Math.cos(T - 0.4)},${L - p * Math.sin(T - 0.4)} ${C - p * Math.cos(T + 0.4)},${L - p * Math.sin(T + 0.4)}`,
          fill: a
        }
      );
      return /* @__PURE__ */ K("g", { "data-canvas-vector-shape-id": g.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": u.routing, "data-canvas-stroke-width": d, children: [
        /* @__PURE__ */ z("path", { d: b, fill: "none", stroke: a, strokeWidth: v, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: M }),
        E(g.arrowEnd ?? "arrow", u.end.x, u.end.y, X),
        E(g.arrowStart ?? "none", u.start.x, u.start.y, k + Math.PI)
      ] }, g.id);
    }),
    i.kind === "connect" && i.fromId !== void 0 && i.toX !== void 0 && i.toY !== void 0 && (() => {
      const g = n.get(i.fromId);
      if (!g) return null;
      const a = ce(g, i.toX, i.toY), u = i.hoverId ? n.get(i.hoverId) : null, d = u ? ce(u, a.x, a.y) : { x: i.toX, y: i.toY }, v = u ? vr(a, d, Xr(r, { id: "__preview" }, g.id, u.id)) : [a, d];
      return /* @__PURE__ */ K("g", { children: [
        /* @__PURE__ */ z("path", { d: an(v), stroke: G.blue, strokeWidth: 2 / o.z, strokeDasharray: `${5 / o.z} ${4 / o.z}` }),
        u ? /* @__PURE__ */ z("rect", { x: wt(u).minX - 3 / o.z, y: wt(u).minY - 3 / o.z, width: wt(u).maxX - wt(u).minX + 6 / o.z, height: wt(u).maxY - wt(u).minY + 6 / o.z, fill: "none", stroke: G.blue, strokeWidth: 2 / o.z, rx: 6 / o.z }) : /* @__PURE__ */ z("circle", { cx: d.x, cy: d.y, r: 5 / o.z, fill: G.blue })
      ] });
    })(),
    s && /* @__PURE__ */ z("circle", { cx: s.x, cy: s.y, r: fi / o.z, fill: G.roseSoft, stroke: G.rose, strokeWidth: 1 / o.z }),
    c.map((g, a) => /* @__PURE__ */ z("line", { x1: g.x1, y1: g.y1, x2: g.x2, y2: g.y2, stroke: G.pink, strokeWidth: 1 / o.z, strokeDasharray: `${4 / o.z} ${4 / o.z}` }, `guide-${a}`)),
    h && /* @__PURE__ */ z("rect", { x: Math.min(h.startX, h.curX), y: Math.min(h.startY, h.curY), width: Math.abs(h.curX - h.startX), height: Math.abs(h.curY - h.startY), fill: G.marqueeFill, stroke: G.blue, strokeWidth: 1 / o.z }),
    m && m.points.length > 1 && /* @__PURE__ */ z(
      "polygon",
      {
        "data-canvas-lasso": "true",
        points: m.points.map((g) => `${g.x},${g.y}`).join(" "),
        fill: G.marqueeFill,
        stroke: G.blue,
        strokeWidth: 1.5 / o.z,
        strokeDasharray: `${5 / o.z} ${4 / o.z}`,
        strokeLinejoin: "round"
      }
    )
  ] }) });
}
const xi = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], pi = /* @__PURE__ */ new Set([
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
]), vi = [
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
function He(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function Yr(t) {
  return pi.has(t.trim().toLowerCase());
}
function Pr(t) {
  const e = He(t);
  return e ? Yr(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function mi(t) {
  return He(t).split(",").map((e) => e.trim()).filter(Boolean).map(Pr).filter(Boolean).join(", ");
}
function Ir(t) {
  return He(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function me(t) {
  return t.split(",").map((e) => He(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !Yr(e));
}
const Ne = Array.from(/* @__PURE__ */ new Set([
  ...vi,
  ...me(_t.sans.stack),
  ...me(_t.serif.stack),
  ...me(_t.mono.stack),
  ...me(_t.gothic.stack),
  ...me(_t.korean.stack)
]));
function gi() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Ne;
  const t = Ne.filter((e) => {
    const n = Pr(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : Ne;
}
const yi = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, wi = 24, bi = 28, Nr = 720;
function Yt(t) {
  return t.fontSize ?? yi[t.type] ?? 14;
}
function Pt(t) {
  var e;
  if (!t.fontFamily) return _t.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = Ir(fo(t.customFontFamily ?? ""));
    } catch {
    }
    return mi(n) || _t.sans.stack;
  }
  return ((e = _t[t.fontFamily]) == null ? void 0 : e.stack) ?? _t.sans.stack;
}
function Dt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function ki(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function $i(t) {
  var e, n, r;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((r = t.html) != null && r.includes("<ol>")) return "number";
}
function Mi(t, e) {
  return {
    w: Math.min(Nr, Math.max(wi, Math.ceil(t))),
    h: Math.max(bi, Math.ceil(e))
  };
}
function Si(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = xn(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${Nr}px`,
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
    fontSize: `${Yt(e)}px`,
    fontFamily: Pt(e)
  }), document.body.appendChild(n);
  const r = n.getBoundingClientRect();
  return n.remove(), Mi(r.width, r.height);
}
const Ci = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), zi = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function Xi({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: r,
  shapeById: o,
  allShapes: i,
  peerCursors: s,
  isDarkMode: c,
  renderEditor: h,
  renderShapeBody: m,
  setEditingId: l,
  onBendHandleDown: g,
  onOrthogonalSegmentHandleDown: a,
  onResizeHandleDown: u,
  onRotateHandleDown: d,
  onConnectHandleDown: v,
  onArrowEndpointDown: x
}) {
  return /* @__PURE__ */ K(ie, { children: [
    /* @__PURE__ */ z("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` }, children: t.map((f) => {
      if (f.type === "draw") return null;
      if (f.type === "arrow") {
        const w = Ot(f, o, i), $ = w.routing === "orthogonal" && w.pathPoints ? vn(w.pathPoints) : w.routing === "curved" ? pe(0.5, w.start, w.control, w.end) : { x: (w.start.x + w.end.x) / 2, y: (w.start.y + w.end.y) / 2 }, b = n === f.id, X = Oe(f), k = e.has(f.id), M = ke(f).trim(), E = X || (k ? "관계 입력" : "");
        return !E && !b ? null : /* @__PURE__ */ z(Vt.Fragment, { children: /* @__PURE__ */ z("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: $.x - 90, top: $.y - 18, width: 180, height: 36 }, onDoubleClick: (Y) => {
          Y.stopPropagation(), l(f.id);
        }, children: (E || b) && /* @__PURE__ */ z(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": M ? `관계 설명: ${M}` : "관계 설명 입력",
            title: b ? void 0 : M ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${c ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: Yt(f),
              fontFamily: Pt(f),
              maxWidth: "100%",
              minWidth: b ? 120 / r.z : void 0,
              minHeight: b ? 28 / r.z : void 0,
              color: f.textColor
            },
            children: b ? h("text-center whitespace-nowrap") : /* @__PURE__ */ z("span", { dangerouslySetInnerHTML: { __html: E } }, "canvas-view")
          }
        ) }) }, f.id);
      }
      const p = e.has(f.id), y = qt(f);
      return /* @__PURE__ */ K(
        "div",
        {
          "data-canvas-shape-id": f.id,
          "data-canvas-shape-type": f.type,
          "data-canvas-selected": p ? "true" : void 0,
          "data-canvas-text-align": Dt(f),
          "data-canvas-text-color": f.textColor,
          "data-canvas-font-size": Yt(f),
          "data-canvas-font-family": f.fontFamily === "custom" ? f.customFontFamily ?? "custom" : f.fontFamily ?? "sans",
          "data-canvas-manual-size": f.manualSize ? "true" : void 0,
          "data-canvas-group-id": f.groupId,
          "data-canvas-list-kind": $i(f),
          "data-canvas-x": f.x,
          "data-canvas-y": f.y,
          "data-canvas-width": f.w,
          "data-canvas-height": f.h,
          className: "absolute",
          style: { left: y.minX, top: y.minY, width: y.maxX - y.minX, height: y.maxY - y.minY, transform: f.rotation ? `rotate(${f.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (w) => {
            w.stopPropagation(), Ci.has(f.type) && l(f.id);
          },
          children: [
            m(f),
            p && /* @__PURE__ */ K(ie, { children: [
              /* @__PURE__ */ z("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / r.z}px solid ${G.blue}` } }),
              e.size === 1 && /* @__PURE__ */ K(ie, { children: [
                ["nw", "ne", "sw", "se"].map((w) => /* @__PURE__ */ z("div", { "data-canvas-resize-handle": w, onPointerDown: ($) => u($, f, w), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / r.z, height: 10 / r.z, cursor: `${w}-resize`, left: w.includes("w") ? -5 / r.z : void 0, right: w.includes("e") ? -5 / r.z : void 0, top: w.includes("n") ? -5 / r.z : void 0, bottom: w.includes("s") ? -5 / r.z : void 0 } }, w)),
                /* @__PURE__ */ z("div", { onPointerDown: (w) => d(w, f), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / r.z, height: 12 / r.z, left: "50%", marginLeft: -6 / r.z, top: -28 / r.z, cursor: "grab" } }),
                zi.has(f.type) && ["n", "s", "w", "e"].map((w) => /* @__PURE__ */ z("div", { onPointerDown: ($) => v($, f), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...w === "n" ? { left: "50%", top: -30 / r.z, marginLeft: -9 / r.z } : w === "s" ? { left: "50%", bottom: -30 / r.z, marginLeft: -9 / r.z } : w === "w" ? { top: "50%", left: -30 / r.z, marginTop: -9 / r.z } : { top: "50%", right: -30 / r.z, marginTop: -9 / r.z }, width: 18 / r.z, height: 18 / r.z, fontSize: 13 / r.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${w}`))
              ] })
            ] })
          ]
        },
        f.id
      );
    }) }),
    e.size === 1 && i.filter((f) => f.type === "arrow" && e.has(f.id)).map((f) => {
      const p = Ot(f, o, i), y = (w, $) => ({
        left: (w.x - r.x) * r.z - $ / 2,
        top: (w.y - r.y) * r.z - $ / 2
      });
      return /* @__PURE__ */ K(Vt.Fragment, { children: [
        p.routing === "orthogonal" && p.pathPoints && p.pathPoints.length > 2 ? p.pathPoints.slice(0, -1).map((w, $) => {
          var k;
          const b = (k = p.pathPoints) == null ? void 0 : k[$ + 1];
          if (!b) return null;
          const X = { x: (w.x + b.x) / 2, y: (w.y + b.y) / 2 };
          return /* @__PURE__ */ z("div", { "data-canvas-arrow-segment-handle": $, onPointerDown: (M) => a(M, f, $), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...y(X, 12), cursor: w.x === b.x ? "ew-resize" : "ns-resize" } }, `segment-${$}`);
        }) : p.routing === "curved" && /* @__PURE__ */ z("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (w) => g(w, f), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (p.start.x + p.end.x) / 2 * r.z - r.x * r.z - 5, top: (p.start.y + p.end.y) / 2 * r.z - r.y * r.z - 10, cursor: "grab" } }),
        ["start", "end"].map((w) => {
          const $ = w === "start" ? p.start : p.end;
          return /* @__PURE__ */ z("div", { "data-canvas-arrow-endpoint": w, onPointerDown: (b) => x(b, f, w), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...y($, 12), cursor: "grab" } }, w);
        })
      ] }, `arrow-handles-${f.id}`);
    }),
    s == null ? void 0 : s.map((f) => /* @__PURE__ */ K("div", { className: "absolute pointer-events-none z-40", style: { left: (f.x - r.x) * r.z, top: (f.y - r.y) * r.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ z("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ z("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: f.color, stroke: G.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ z("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: f.color }, children: f.name })
    ] }, f.id))
  ] });
}
function yn(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function Yi(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), yn(t) && e.push("diagram"), e;
}
function Ca(t) {
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
const Pi = "#3b82f6";
function oe(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function Ee(t) {
  return Math.round(oe(t, 0, 255)).toString(16).padStart(2, "0");
}
function Ii(t) {
  const e = t.trim().endsWith("%"), n = Number.parseFloat(t);
  return Number.isFinite(n) ? e ? n * 2.55 : n : 0;
}
function ye(t) {
  var i, s;
  const e = t.trim().toLowerCase(), n = (i = e.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : i[1];
  if (n)
    return n.length === 3 || n.length === 4 ? `#${n.slice(0, 3).split("").map((c) => `${c}${c}`).join("")}` : `#${n.slice(0, 6)}`;
  const r = (s = e.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : s[1];
  if (r) {
    const c = r.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(Ii);
    if (c.length === 3) return `#${c.map(Ee).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? Pi;
}
function Gn(t) {
  const e = ye(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, r = Number.parseInt(e.slice(2, 4), 16) / 255, o = Number.parseInt(e.slice(4, 6), 16) / 255, i = Math.max(n, r, o), s = Math.min(n, r, o), c = i - s;
  let h = 0;
  return c !== 0 && (i === n ? h = 60 * ((r - o) / c % 6) : i === r ? h = 60 * ((o - n) / c + 2) : h = 60 * ((n - r) / c + 4)), h < 0 && (h += 360), { hue: h, saturation: i === 0 ? 0 : c / i, value: i };
}
function Vn({ hue: t, saturation: e, value: n }) {
  const r = (t % 360 + 360) % 360, o = n * e, i = o * (1 - Math.abs(r / 60 % 2 - 1)), s = n - o;
  let c = 0, h = 0, m = 0;
  return r < 60 ? [c, h, m] = [o, i, 0] : r < 120 ? [c, h, m] = [i, o, 0] : r < 180 ? [c, h, m] = [0, o, i] : r < 240 ? [c, h, m] = [0, i, o] : r < 300 ? [c, h, m] = [i, 0, o] : [c, h, m] = [o, 0, i], `#${Ee((c + s) * 255)}${Ee((h + s) * 255)}${Ee((m + s) * 255)}`;
}
function Ni(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function Ei({ value: t, onChange: e }) {
  const [n, r] = ct(() => Gn(t)), o = Q(null), i = Q(null), s = Q(null);
  Mt(() => {
    const p = Gn(t);
    r((y) => Ni(y, p) ? y : p);
  }, [t]);
  const c = (p) => {
    r(p), e(Vn(p));
  }, h = (p) => {
    var X;
    const y = (X = o.current) == null ? void 0 : X.getBoundingClientRect();
    if (!y) return;
    const w = p.clientX - (y.left + y.width / 2), $ = p.clientY - (y.top + y.height / 2), b = Math.atan2($, w) * 180 / Math.PI + 90;
    c({ ...n, hue: (b + 360) % 360 });
  }, m = (p) => {
    var w;
    const y = (w = i.current) == null ? void 0 : w.getBoundingClientRect();
    y && c({
      ...n,
      saturation: oe((p.clientX - y.left) / y.width, 0, 1),
      value: oe(1 - (p.clientY - y.top) / y.height, 0, 1)
    });
  }, l = (p, y) => {
    var w, $;
    y.button !== 0 && y.pointerType !== "touch" || (y.preventDefault(), y.stopPropagation(), s.current = p, ($ = (w = y.currentTarget).setPointerCapture) == null || $.call(w, y.pointerId), p === "hue" ? h(y) : m(y));
  }, g = (p) => {
    s.current && (p.preventDefault(), s.current === "hue" ? h(p) : m(p));
  }, a = (p) => {
    var y, w;
    s.current = null;
    try {
      (w = (y = p.currentTarget).releasePointerCapture) == null || w.call(y, p.pointerId);
    } catch {
      return;
    }
  }, u = (n.hue - 90) * Math.PI / 180, d = 53, v = {
    left: 66 + Math.cos(u) * d,
    top: 66 + Math.sin(u) * d
  }, x = Vn({ hue: n.hue, saturation: 1, value: 1 }), f = (p) => c({ ...n, hue: (n.hue + p + 360) % 360 });
  return /* @__PURE__ */ K("div", { className: "canvas-color-wheel", "data-canvas-color-wheel": !0, children: [
    /* @__PURE__ */ K(
      "div",
      {
        ref: o,
        className: "canvas-color-wheel-hue",
        role: "slider",
        "aria-label": "색상 색상환",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(n.hue),
        tabIndex: 0,
        onPointerDown: (p) => l("hue", p),
        onPointerMove: g,
        onPointerUp: a,
        onKeyDown: (p) => {
          (p.key === "ArrowLeft" || p.key === "ArrowDown") && (p.preventDefault(), f(-1)), (p.key === "ArrowRight" || p.key === "ArrowUp") && (p.preventDefault(), f(1));
        },
        children: [
          /* @__PURE__ */ z("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ z("span", { className: "canvas-color-wheel-hue-marker", style: { left: v.left, top: v.top } })
        ]
      }
    ),
    /* @__PURE__ */ z(
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
        style: { backgroundColor: x },
        onPointerDown: (p) => l("sv", p),
        onPointerMove: g,
        onPointerUp: a,
        onKeyDown: (p) => {
          const y = p.shiftKey ? 0.1 : 0.02;
          p.key === "ArrowLeft" && (p.preventDefault(), c({ ...n, saturation: oe(n.saturation - y, 0, 1) })), p.key === "ArrowRight" && (p.preventDefault(), c({ ...n, saturation: oe(n.saturation + y, 0, 1) })), p.key === "ArrowDown" && (p.preventDefault(), c({ ...n, value: oe(n.value - y, 0, 1) })), p.key === "ArrowUp" && (p.preventDefault(), c({ ...n, value: oe(n.value + y, 0, 1) }));
        },
        children: /* @__PURE__ */ z("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${n.saturation * 100}%`, top: `${(1 - n.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ K("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ z("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ z("span", { children: ye(t).toUpperCase() })
    ] })
  ] });
}
const Li = [2, 4, 6, 8];
function Ti(t) {
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
      return Er(t);
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
      return Er(t);
  }
}
function Er(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function en(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Zn(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Di({
  shape: t,
  selection: e,
  selectionActions: n,
  shapes: r,
  camera: o,
  canvasSize: i,
  isDarkMode: s,
  editing: c,
  showPalette: h,
  installedFontFamilies: m,
  setShowPalette: l,
  setActiveColor: g,
  patchSelected: a,
  applyFormat: u,
  applyList: d,
  applyCustomFontFamily: v
}) {
  var dt, Lt;
  const x = s ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", f = e.length > 1, p = e.some((S) => !!S.groupId), y = t.type === "draw", w = y || Zn(t) && !en(t) ? "stroke" : en(t) ? "fill" : "text", [$, b] = ct(w), [X, k] = ct("");
  ae(() => b(w), [w, t.id]);
  const M = $ === "text" ? se(t) : $ === "stroke" ? t.strokeColor ?? (t.color ? pt[t.color].border : G.ink) : Le(t);
  ae(() => k(ye(M).toUpperCase()), [M]);
  const E = ye(M), Y = (S) => {
    a(y || $ === "stroke" ? { strokeColor: S } : $ === "text" ? { textColor: S } : { fillColor: S });
  }, C = (S) => {
    g(S), a(y || $ === "stroke" ? { color: S, strokeColor: void 0 } : $ === "text" ? { textColor: pt[S].text } : { color: S, fillColor: void 0 }), l(!1);
  }, L = Q(null), [T, F] = ct({ width: 380, height: 260 });
  ae(() => {
    const S = L.current;
    if (!S) return;
    const H = () => {
      const lt = Math.max(1, Math.ceil(S.getBoundingClientRect().width)), ut = Math.max(1, Math.ceil(S.getBoundingClientRect().height));
      F((zt) => zt.width === lt && zt.height === ut ? zt : { width: lt, height: ut });
    };
    if (H(), typeof ResizeObserver > "u") return;
    const Z = new ResizeObserver(H);
    return Z.observe(S), () => Z.disconnect();
  }, [c, m.length, s, t, h]);
  const P = T.width, N = T.height, W = e.reduce((S, H) => {
    const Z = wt(H);
    return {
      minX: Math.min(S.minX, Z.minX),
      minY: Math.min(S.minY, Z.minY),
      maxX: Math.max(S.maxX, Z.maxX),
      maxY: Math.max(S.maxY, Z.maxY)
    };
  }, wt(t)), O = (W.minX - o.x) * o.z, U = (W.minY - o.y) * o.z, A = (W.maxX - o.x) * o.z, R = (W.maxY - o.y) * o.z, J = Math.max(8, i.width - P - 8), rt = Math.max(8, i.height - N - 8), it = (S, H) => ({ left: Math.min(Math.max(8, S), J), top: Math.min(Math.max(8, H), rt) }), et = [
    it((O + A) / 2 - P / 2, U - N - 12),
    it((O + A) / 2 - P / 2, R + 12),
    it((i.width - P) / 2, 12),
    it(O - P - 12, U + (R - U - N) / 2),
    it(A + 12, U + (R - U - N) / 2)
  ], xt = r.map((S) => {
    const H = wt(S);
    return { left: (H.minX - o.x) * o.z, top: (H.minY - o.y) * o.z, right: (H.maxX - o.x) * o.z, bottom: (H.maxY - o.y) * o.z };
  });
  if (t.type === "arrow") {
    const S = Ot(t, new Map(r.map((ut) => [ut.id, ut])), r), H = S.routing === "orthogonal" && S.pathPoints ? vn(S.pathPoints) : { x: (S.start.x + S.end.x) / 2, y: (S.start.y + S.end.y) / 2 }, Z = 180 * o.z, lt = 36 * o.z;
    xt.push({
      left: (H.x - o.x) * o.z - Z / 2,
      top: (H.y - o.y) * o.z - lt / 2,
      right: (H.x - o.x) * o.z + Z / 2,
      bottom: (H.y - o.y) * o.z + lt / 2
    });
  }
  const mt = et[0], tt = (S, H) => {
    const Z = Math.max(0, Math.min(S.left + P, H.right) - Math.max(S.left, H.left)), lt = Math.max(0, Math.min(S.top + N, H.bottom) - Math.max(S.top, H.top));
    return Z * lt;
  }, I = ((dt = et.map((S) => ({
    candidate: S,
    overlap: xt.reduce((H, Z) => H + tt(S, Z), 0),
    distance: Math.hypot(S.left - mt.left, S.top - mt.top)
  })).sort((S, H) => S.overlap - H.overlap || S.distance - H.distance)[0]) == null ? void 0 : dt.candidate) ?? mt, _ = Yt(t), V = e.every(Ti), Ct = new Set(e.map(qn)).size === 1 ? qn(t) : void 0, bt = Yi(t), It = t.type === "arrow" ? "arrow" : bt[0] ?? "color", [at, q] = ct(It);
  ae(() => {
    bt.includes(at) || q(It);
  }, [It, bt, at]);
  const Et = t.type === "arrow" && !!((Lt = t.orthogonalWaypoints) != null && Lt.length), kt = t.type === "arrow" ? t.arrowStart ?? "none" : "none", $t = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", ot = (S, H, Z, lt, ut = lt) => /* @__PURE__ */ z("button", { type: "button", title: lt, "aria-label": ut, onClick: Z, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${H ? "bg-blue-600 text-white" : x}`, children: S }), St = (S) => /* @__PURE__ */ z("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: S }), At = (S, H, Z, lt, ut = !1) => /* @__PURE__ */ z(
    "button",
    {
      type: "button",
      title: H,
      "aria-label": H,
      disabled: !lt,
      onClick: Z,
      className: `w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default ${ut ? "text-rose-500 hover:bg-rose-500/10" : x}`,
      children: /* @__PURE__ */ z(S, { className: "w-4 h-4" })
    }
  ), Rt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ K("div", { ref: L, "data-canvas-inspector": y ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${s ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: I.left, top: I.top }, onPointerDown: (S) => {
    S.stopPropagation();
    const H = S.target instanceof Element ? S.target : null;
    H != null && H.closest("input, select, textarea") || S.preventDefault();
  }, onClick: (S) => S.stopPropagation(), children: [
    f ? /* @__PURE__ */ K("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      e.length,
      "개 선택됨"
    ] }) : /* @__PURE__ */ z("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: bt.map((S) => /* @__PURE__ */ z("button", { type: "button", role: "tab", "aria-selected": at === S, onClick: () => q(S), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${at === S ? "bg-blue-600 text-white" : x}`, children: Rt[S] }, S)) }),
    /* @__PURE__ */ K("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: f || at === "color" || y ? void 0 : "none" }, children: [
      /* @__PURE__ */ z("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: y ? "그리기" : "색상" }),
      /* @__PURE__ */ z("button", { type: "button", title: y ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": y ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => l((S) => !S), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${s ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ z("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ z("span", { className: "canvas-color-wheel-trigger-dot", style: { background: E } }) }) }),
      h && /* @__PURE__ */ K("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${s ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !y && /* @__PURE__ */ K("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          en(t) && /* @__PURE__ */ z("button", { type: "button", role: "tab", "aria-selected": $ === "fill", onClick: () => b("fill"), className: $ === "fill" ? "is-active" : "", children: "배경" }),
          Zn(t) && /* @__PURE__ */ z("button", { type: "button", role: "tab", "aria-selected": $ === "stroke", onClick: () => b("stroke"), className: $ === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ z("button", { type: "button", role: "tab", "aria-selected": $ === "text", onClick: () => b("text"), className: $ === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ z("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: fr.map((S) => /* @__PURE__ */ z("button", { type: "button", title: pt[S].label, "aria-label": `색 ${pt[S].label}`, onClick: () => C(S), className: "canvas-color-preset", style: { background: pt[S].bg, borderColor: pt[S].border, outline: t.color === S && !t.fillColor && !t.strokeColor ? `2px solid ${G.blue}` : void 0, outlineOffset: 1 } }, S)) }),
        /* @__PURE__ */ z(Ei, { value: M, onChange: Y }),
        /* @__PURE__ */ K("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ z("span", { children: "#" }),
          /* @__PURE__ */ z(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: X.replace(/^#/, ""),
              onChange: (S) => {
                const H = S.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                k(`#${H}`.toUpperCase()), H.length === 6 && Y(`#${H}`);
              },
              onBlur: () => k(ye(M).toUpperCase()),
              onPointerDown: (S) => S.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !f && at !== "color" && !y && /* @__PURE__ */ K(ie, { children: [
      /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ z("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ K("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: se(t), color: G.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ z("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ z("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? se(t), onChange: (S) => a({ textColor: S.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ K("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${s ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ z("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ z("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => a({ fontSize: Math.max(8, _ - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${x}`, children: /* @__PURE__ */ z(vo, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ z("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: _ }),
          /* @__PURE__ */ z("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => a({ fontSize: Math.min(96, _ + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${x}`, children: /* @__PURE__ */ z(mo, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ K("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${s ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ z("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (S) => {
            const H = ki(S.target.value);
            a(H === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: H, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${s ? "text-slate-200" : "text-slate-700"}`, children: xi.map((S) => /* @__PURE__ */ z("option", { value: S, className: s ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: _t[S].label }, S)) }),
          /* @__PURE__ */ z(go, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ K(ie, { children: [
          /* @__PURE__ */ z("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (S) => v(S.target.value), onChange: (S) => S.currentTarget.value && v(S.currentTarget.value), onKeyDown: (S) => {
            S.key === "Enter" && (S.preventDefault(), v(S.currentTarget.value));
          }, onDoubleClick: (S) => S.stopPropagation(), onPointerDown: (S) => S.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${s ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ z("datalist", { id: `canvas-font-families-${t.id}`, children: m.map((S) => /* @__PURE__ */ z("option", { value: S }, S)) })
        ] })
      ] }),
      /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${s ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ z("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ z("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${s ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", yo, "왼쪽 정렬"], ["center", wo, "가운데 정렬"], ["right", bo, "오른쪽 정렬"]].map(([S, H, Z]) => /* @__PURE__ */ z("button", { type: "button", "aria-label": Z, title: Z, onClick: () => a({ textAlign: S }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${Dt(t) === S ? "bg-blue-600 text-white shadow-sm" : x}`, children: /* @__PURE__ */ z(H, { className: "w-4 h-4" }) }, S)) }),
        c && /* @__PURE__ */ K(ie, { children: [
          /* @__PURE__ */ z("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ z("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${s ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", ko, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", $o, "번호 목록"]].map(([S, H, Z]) => /* @__PURE__ */ z("button", { type: "button", onClick: () => d(S), "aria-label": Z, title: Z, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${x}`, children: H ? /* @__PURE__ */ z(H, { className: "w-4 h-4" }) : /* @__PURE__ */ z("span", { className: "text-base leading-none", children: "–" }) }, S)) }),
          /* @__PURE__ */ z("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${s ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: Mo, label: "굵게" }, { cmd: "italic", Icon: So, label: "기울임" }, { cmd: "underline", Icon: Co, label: "밑줄" }].map(({ cmd: S, Icon: H, label: Z }) => /* @__PURE__ */ z("button", { type: "button", onClick: () => u(S), "aria-label": Z, title: Z, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${x}`, children: /* @__PURE__ */ z(H, { className: "w-4 h-4" }) }, S)) })
        ] })
      ] }),
      (at === "arrange" && t.type === "card" || at === "arrow" && t.type === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${s ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ K(ie, { children: [
          /* @__PURE__ */ z("div", { className: `w-px h-6 ${s ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ z("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (S) => S.stopPropagation(), onChange: (S) => a({ category: S.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${s ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            St("경로"),
            ot("직선", (t.routing ?? "straight") === "straight", () => a({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            ot("직각", t.routing === "orthogonal", () => a({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            ot("곡선", (t.routing ?? "") === "curved", () => a({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            Et && ot("자동", !1, () => a({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            St("선"),
            ot("—", (t.strokeStyle ?? "solid") === "solid", () => a({ strokeStyle: "solid" }), "실선"),
            ot("- -", t.strokeStyle === "dashed", () => a({ strokeStyle: "dashed" }), "파선"),
            ot("···", t.strokeStyle === "dotted", () => a({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            St("시작"),
            ot(kt === "none" ? "○" : kt === "dot" ? "●" : "◀", kt !== "none", () => a({ arrowStart: kt === "none" ? "arrow" : kt === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${kt === "none" ? "없음" : kt === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            St("끝"),
            ot($t === "none" ? "○" : $t === "dot" ? "●" : "▶", $t !== "none", () => a({ arrowEnd: $t === "arrow" ? "dot" : $t === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${$t === "none" ? "없음" : $t === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      at === "diagram" && /* @__PURE__ */ z("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${s ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    V && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${s ? "border-slate-700" : "border-slate-100"}`, children: [
      St("굵기"),
      Li.map((S) => /* @__PURE__ */ z(Vt.Fragment, { children: ot(String(S), Ct === S, () => a({ strokeWidth: S }), `굵기 ${S}`) }, S))
    ] }),
    /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${s ? "border-slate-700" : "border-slate-100"}`, children: [
      St("선택"),
      At(zo, "그룹 (Ctrl+G)", n.group, f),
      At(Xo, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, p),
      At(Yo, "복제", n.duplicateSelected, !0),
      At(Po, "삭제 (Delete)", n.deleteSelected, !0, !0)
    ] })
  ] });
}
const Fi = [2, 4, 6, 8];
function Ai({
  tool: t,
  activeColor: e,
  drawStrokeWidth: n,
  drawInkStyle: r,
  objectSnapEnabled: o,
  onSelectInkStyle: i,
  onSelectObjectSnap: s,
  isDarkMode: c,
  onSelectColor: h,
  onSelectStrokeWidth: m
}) {
  const l = t === "draw" || t === "highlighter", g = `rounded-lg px-2 py-1 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${c ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-700"}`, a = /* @__PURE__ */ K(
    "button",
    {
      type: "button",
      "aria-label": "개체 정렬",
      "aria-pressed": o,
      title: "개체 이동 시 주변 개체에 자동 정렬",
      className: g,
      style: { minHeight: 28, whiteSpace: "nowrap" },
      onClick: () => s(!o),
      children: [
        "개체 정렬 ",
        o ? "켬" : "끔"
      ]
    }
  );
  return l ? /* @__PURE__ */ K(
    "div",
    {
      "data-canvas-pen-palette": "true",
      "aria-label": t === "highlighter" ? "형광펜 설정" : "펜 설정",
      style: { left: "50%", transform: "translateX(-50%)", width: 340, maxWidth: "calc(100% - 32px)", boxSizing: "border-box", justifyContent: "center" },
      className: `absolute top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex flex-wrap items-center gap-2 px-3 py-2 rounded-2xl border shadow-xl backdrop-blur-md ${c ? "bg-slate-900/90 border-slate-700 text-slate-200 shadow-slate-950/40" : "bg-white/90 border-slate-200 text-slate-700 shadow-slate-300/40"}`,
      onPointerDown: (d) => d.stopPropagation(),
      onClick: (d) => d.stopPropagation(),
      children: [
        /* @__PURE__ */ z("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }, role: "radiogroup", "aria-label": "펜 색상 선택", children: fr.map((d) => {
          const v = pt[d], x = e === d;
          return /* @__PURE__ */ z(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": x,
              title: `${v.label} 선택`,
              "aria-label": v.label,
              onClick: () => h(d),
              className: `group relative w-6 h-6 rounded-full transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${x ? "scale-110 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900" : "hover:scale-105 opacity-90 hover:opacity-100"}`,
              style: {
                backgroundColor: v.border,
                borderColor: v.border
              },
              children: x && /* @__PURE__ */ z("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ z("span", { className: "w-1.5 h-1.5 rounded-full bg-white shadow-sm" }) })
            },
            d
          );
        }) }),
        /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ z("span", { className: `mr-1 text-xs font-semibold ${c ? "text-slate-300" : "text-slate-500"}`, children: "두께" }),
          Fi.map((d) => {
            const v = n === d;
            return /* @__PURE__ */ z(
              "button",
              {
                type: "button",
                title: `두께 ${d}px`,
                "aria-label": `두께 ${d}px`,
                "aria-pressed": v,
                onClick: () => m(d),
                className: `w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-semibold transition-colors ${v ? "bg-blue-600 text-white font-bold" : c ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-700"}`,
                children: /* @__PURE__ */ z(
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
        /* @__PURE__ */ z("div", { role: "group", "aria-label": "새 획 보정", style: { display: "flex", gap: 2 }, children: ["raw", "smoothed"].map((d) => /* @__PURE__ */ z(
          "button",
          {
            type: "button",
            "aria-label": d === "raw" ? "보정 끔" : "보정 켬",
            "aria-pressed": r === d,
            title: "새로 그리는 획에 적용",
            onClick: () => i(d),
            className: g,
            style: { minHeight: 28, whiteSpace: "nowrap", ...r === d ? { background: "#2563eb", color: "#ffffff" } : {} },
            children: d === "raw" ? "보정 끔" : "보정 켬"
          },
          d
        )) }),
        /* @__PURE__ */ z("div", { style: { width: "100%", display: "flex", justifyContent: "center" }, children: a })
      ]
    }
  ) : null;
}
function Wi({ isDarkMode: t, onExit: e }) {
  return /* @__PURE__ */ K(
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
        /* @__PURE__ */ z(Io, { "aria-hidden": "true", className: "h-4 w-4" }),
        /* @__PURE__ */ z("span", { children: "펜 모드 종료" })
      ]
    }
  );
}
function nn(t) {
  const e = t.closest("[data-canvas-board-id]");
  return (e == null ? void 0 : e.getAttribute("data-canvas-pen-mode")) === "true" || ["draw", "highlighter", "eraser"].includes((e == null ? void 0 : e.getAttribute("data-canvas-active-tool")) ?? "");
}
function Oi({ category: t, onCommit: e }) {
  const [n, r] = ct(!1), o = Q(null);
  return Mt(() => {
    var i;
    n && ((i = o.current) == null || i.focus());
  }, [n]), /* @__PURE__ */ K(
    "div",
    {
      ref: o,
      "data-canvas-card-type": !0,
      role: n ? "textbox" : "button",
      "aria-label": "카드 유형 편집",
      tabIndex: 0,
      className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
      contentEditable: n,
      suppressContentEditableWarning: !0,
      onPointerDown: (i) => {
        i.pointerType === "pen" || nn(i.currentTarget) || i.stopPropagation();
      },
      onDoubleClick: (i) => i.stopPropagation(),
      onClick: (i) => {
        n || nn(i.currentTarget) || r(!0);
      },
      onBlur: (i) => {
        if (!n) return;
        const s = (i.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim();
        e(s.toUpperCase() || "ENTITY"), r(!1);
      },
      onKeyDown: (i) => {
        !n && (i.key === "Enter" || i.key === " ") ? (i.preventDefault(), i.stopPropagation(), nn(i.currentTarget) || r(!0)) : n && i.key === "Enter" && (i.preventDefault(), i.stopPropagation(), i.currentTarget.blur());
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
function _i({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: r,
  commitEditorHtml: o,
  onEditorKeyDown: i,
  setShapes: s,
  onDirty: c,
  renderDiagram: h
}) {
  const m = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", l = (a, u) => /* @__PURE__ */ z(
    "div",
    {
      ref: r,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": "텍스트 편집",
      "data-canvas-editor": !0,
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onInput: o,
      onBlur: o,
      onDoubleClick: (d) => d.stopPropagation(),
      onKeyDown: i,
      className: `${m} ${a}`,
      style: u
    },
    "canvas-editor"
  );
  return { renderEditor: l, renderShapeBody: (a) => {
    const u = pt[a.color ?? "blue"], d = e === a.id, v = Oe(a);
    if (a.type === "frame") {
      const b = a.strokeWidth ?? 2;
      return /* @__PURE__ */ z(
        "div",
        {
          "data-canvas-stroke-width": b,
          className: "w-full h-full rounded",
          style: { border: `${b / t.z}px solid ${n ? G.slate600 : G.slate400}` },
          children: /* @__PURE__ */ z(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? G.slate400 : G.muted
              },
              children: d ? l("", { fontSize: 13 / t.z }) : ke(a) || "프레임"
            }
          )
        }
      );
    }
    if (a.type === "note")
      return /* @__PURE__ */ z(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: Le(a), borderTop: `6px solid ${u.border}`, color: u.text },
          children: d ? l("font-medium", { color: se(a), fontSize: Yt(a), fontFamily: Pt(a), textAlign: Dt(a) }) : v ? /* @__PURE__ */ z("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: se(a), fontSize: Yt(a), fontFamily: Pt(a), textAlign: Dt(a) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") : /* @__PURE__ */ z("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: se(a), fontSize: Yt(a), fontFamily: Pt(a), textAlign: Dt(a) }, children: /* @__PURE__ */ z("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (a.type === "card") {
      const b = a.cardStyle === "glass";
      return yn(a) && h && !d ? /* @__PURE__ */ z("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: h(a) }) : /* @__PURE__ */ K(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: b ? G.glassFill : a.fillColor ?? G.slateCard,
            backdropFilter: b ? "blur(12px)" : void 0,
            WebkitBackdropFilter: b ? "blur(12px)" : void 0,
            border: `1px solid ${b ? G.glassBorder : G.darkBorder}`,
            boxShadow: b ? G.glassShadow : G.cardShadow
          },
          children: [
            /* @__PURE__ */ z(
              Oi,
              {
                category: a.category,
                onCommit: (X) => {
                  s((k) => k.map((M) => M.id === a.id ? { ...M, category: X } : M)), c();
                }
              }
            ),
            d ? l("flex-1 font-medium", { color: a.textColor ?? G.white, fontSize: Yt(a), fontFamily: Pt(a), textAlign: Dt(a) }) : /* @__PURE__ */ z("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: a.textColor ?? G.white, fontSize: Yt(a), fontFamily: Pt(a), textAlign: Dt(a) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view"),
            /* @__PURE__ */ K("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              a.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (a.type === "text") {
      const b = n ? "text-slate-100" : "text-slate-900", X = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${b}`,
        style: { color: a.textColor, fontSize: Yt(a), fontFamily: Pt(a), textAlign: Dt(a) }
      };
      return d ? l(`font-medium ${b}`, X.style) : v ? /* @__PURE__ */ z(
        "div",
        {
          "data-canvas-text-view": !0,
          ...X,
          dangerouslySetInnerHTML: { __html: v }
        },
        "canvas-view"
      ) : /* @__PURE__ */ z("div", { "data-canvas-text-view": !0, ...X, children: /* @__PURE__ */ z("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (a.type === "image") {
      const b = un(a.src);
      return b ? /* @__PURE__ */ z(
        "img",
        {
          src: b,
          alt: a.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const x = Le(a), f = kr(a), p = se(a);
    if (a.type === "triangle" || a.type === "diamond" || a.type === "hexagon" || a.type === "star") {
      const b = a.strokeWidth ?? 2;
      return /* @__PURE__ */ K("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ z("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${a.w} ${a.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ z("polygon", { "data-canvas-stroke-width": b, points: $r(a.type, a.w, a.h), fill: x, stroke: f, strokeWidth: b / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ z("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: p }, children: d ? l("font-medium", { color: p, fontSize: Yt(a), fontFamily: Pt(a), textAlign: Dt(a) }) : /* @__PURE__ */ z("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: Yt(a), fontFamily: Pt(a), textAlign: Dt(a) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") })
      ] });
    }
    const w = un(a.src), $ = a.type === "rect" || a.type === "ellipse" ? a.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ z(
      "div",
      {
        "data-canvas-stroke-width": $,
        className: `w-full h-full flex items-center justify-center p-3 ${a.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: x, border: `${$ / t.z}px solid ${f}`, color: p },
        children: d ? l("font-medium", { color: p, fontSize: Yt(a), fontFamily: Pt(a), textAlign: Dt(a) }) : /* @__PURE__ */ K("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: Yt(a), fontFamily: Pt(a), textAlign: Dt(a) }, children: [
          /* @__PURE__ */ z("div", { dangerouslySetInnerHTML: { __html: v } }),
          w && /* @__PURE__ */ z(
            "a",
            {
              href: w,
              target: "_blank",
              rel: "noreferrer",
              onPointerDown: (b) => b.stopPropagation(),
              className: "block mt-1 text-[11px] underline opacity-70",
              children: "파일 열기"
            }
          )
        ] }, "canvas-view")
      }
    );
  } };
}
function Hi({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: r,
  selected: o,
  editingId: i,
  boardIdentity: s
}) {
  const [c, h] = ct({ width: 0, height: 0 });
  Mt(() => {
    const d = t.current;
    if (!d) return;
    let v = -1, x = -1;
    const f = (y = d.clientWidth, w = d.clientHeight) => {
      y === v && w === x || (v = y, x = w, h({ width: y, height: w }));
    };
    if (f(), typeof ResizeObserver < "u") {
      const y = new ResizeObserver((w) => {
        var b;
        const $ = (b = w[0]) == null ? void 0 : b.contentRect;
        f(($ == null ? void 0 : $.width) ?? d.clientWidth, ($ == null ? void 0 : $.height) ?? d.clientHeight);
      });
      return y.observe(d), () => y.disconnect();
    }
    const p = () => f();
    return window.addEventListener("resize", p), () => window.removeEventListener("resize", p);
  }, [s, t]);
  const m = Wt(() => new Map(n.map((d) => [d.id, d])), [n]), l = Wt(
    () => [...n].sort((d, v) => (d.type === "frame" ? -1 : 0) - (v.type === "frame" ? -1 : 0)),
    [n]
  ), g = Wt(() => {
    if (!t.current || c.width <= 0 || c.height <= 0) return null;
    const d = 200 / r.z;
    return {
      minX: r.x - d,
      minY: r.y - d,
      maxX: r.x + c.width / r.z + d,
      maxY: r.y + c.height / r.z + d
    };
  }, [r, t, c]), a = ft((d) => {
    if (!g) return !1;
    if (d.id === i || o.has(d.id)) return !0;
    if (d.type === "arrow") {
      const x = Ot(d, m, e.current), p = (x.routing === "orthogonal" ? x.pathPoints : null) ?? [x.start, x.end], y = Math.min(...p.map((X) => X.x)), w = Math.max(...p.map((X) => X.x)), $ = Math.min(...p.map((X) => X.y)), b = Math.max(...p.map((X) => X.y));
      return w >= g.minX && y <= g.maxX && b >= g.minY && $ <= g.maxY;
    }
    const v = wt(d);
    return v.maxX >= g.minX && v.minX <= g.maxX && v.maxY >= g.minY && v.minY <= g.maxY;
  }, [i, o, m, e, g]), u = Wt(
    () => l.filter(a),
    [a, l]
  );
  return { shapeById: m, visiblePaintOrder: u };
}
function ji({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: r,
  onDirty: o,
  patchSelected: i
}) {
  const s = ft(() => {
    const u = t.current;
    if (!u || !e) return;
    let d;
    try {
      d = xn(u.innerHTML);
    } catch {
      r("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const v = u.scrollHeight;
    n((x) => x.map((f) => {
      if (f.id !== e) return f;
      const p = yn(f) ? { ...f, text: ke({ ...f, html: d, text: void 0 }), html: void 0 } : { ...f, html: d, text: void 0 };
      if (f.type === "text")
        return f.manualSize ? p : { ...p, ...Si(u, f) };
      if (f.type === "arrow") return p;
      const y = f.type === "note" ? 32 : f.type === "card" ? 96 : (
        // category header + type footer
        (f.type === "frame", 24)
      ), w = Math.max(f.h, v + y);
      return { ...p, h: w };
    })), o();
  }, [e, o]), c = (u) => {
    var d;
    (d = t.current) == null || d.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(u), s();
  }, h = () => {
    var x;
    const u = (x = window.getSelection()) == null ? void 0 : x.anchorNode, d = u instanceof Element ? u : u == null ? void 0 : u.parentElement, v = d == null ? void 0 : d.closest("ul, ol");
    return v instanceof HTMLElement ? v : null;
  }, m = (u, d, v) => {
    const x = document.createElement(d);
    for (; u.firstChild; ) x.append(u.firstChild);
    return u.replaceWith(x), x;
  }, l = (u) => {
    const d = t.current;
    if (!d) return;
    d.focus();
    const v = h();
    if (u === "number")
      if ((v == null ? void 0 : v.tagName) === "OL")
        v.removeAttribute("data-list-style");
      else if ((v == null ? void 0 : v.tagName) === "UL")
        m(v, "ol");
      else {
        document.execCommand("insertOrderedList");
        const x = h();
        x == null || x.removeAttribute("data-list-style");
      }
    else if ((v == null ? void 0 : v.tagName) === "UL") {
      const x = v.dataset.listStyle;
      u === x ? document.execCommand("insertUnorderedList") : v.dataset.listStyle = u;
    } else {
      (v == null ? void 0 : v.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const x = h();
      x && (x.dataset.listStyle = u);
    }
    s();
  };
  return { commitEditorHtml: s, applyFormat: c, applyList: l, onEditorKeyDown: (u) => {
    if (u.key === "Tab") {
      u.preventDefault(), document.execCommand(u.shiftKey ? "outdent" : "indent"), s();
      return;
    }
    if (u.key === " ") {
      const d = window.getSelection();
      if (d && d.isCollapsed && d.anchorNode) {
        const v = d.anchorNode, x = v.textContent || "", f = d.anchorOffset, p = x.slice(0, f).trim();
        if (!h()) {
          if (p === "-" || p === "–") {
            u.preventDefault(), v.textContent = x.slice(f), l("dash");
            return;
          }
          if (p === "*") {
            u.preventDefault(), v.textContent = x.slice(f), l("bullet");
            return;
          }
          if (p === "1.") {
            u.preventDefault(), v.textContent = x.slice(f), l("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (u) => {
    const d = Ir(u);
    if (!d) {
      i({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    i({
      fontFamily: "custom",
      customFontFamily: d
    });
  } };
}
const Qn = "chois_canvas_ink_style", Jn = "chois_canvas_object_snap", tr = "chois_canvas_show_grid";
function rn(t) {
  try {
    return typeof window > "u" ? null : window.localStorage.getItem(t);
  } catch {
    return null;
  }
}
function on(t, e) {
  try {
    typeof window < "u" && window.localStorage.setItem(t, e);
  } catch {
  }
}
function Ri(t) {
  const [e, n] = ct(() => rn(Qn) === "smoothed" ? "smoothed" : "raw"), [r, o] = ct(() => rn(Jn) !== "false"), [i, s] = ct(() => rn(tr) !== "false"), c = t.drawInkStyle ?? e, h = t.objectSnapEnabled ?? r, m = t.showGrid ?? i;
  return Mt(() => on(Qn, c), [c]), Mt(() => on(Jn, String(h)), [h]), Mt(() => on(tr, String(m)), [m]), { drawInkStyle: c, objectSnapEnabled: h, showGrid: m, selectInkStyle: (u) => {
    var d;
    t.drawInkStyle === void 0 && n(u), (d = t.onDrawInkStyleChange) == null || d.call(t, u);
  }, selectObjectSnap: (u) => {
    var d;
    t.objectSnapEnabled === void 0 && o(u), (d = t.onObjectSnapEnabledChange) == null || d.call(t, u);
  }, selectShowGrid: (u) => {
    var d;
    t.showGrid === void 0 && s(u), (d = t.onShowGridChange) == null || d.call(t, u);
  } };
}
function Bi({
  boardIdentity: t,
  tool: e,
  activeColor: n,
  defaultActiveColor: r,
  onActiveColorChange: o,
  controlledShapes: i,
  onShapesChange: s,
  onDirty: c
}) {
  const h = Q(null), m = Q(null), [l, g] = ct([]), a = i !== void 0 && s !== void 0, u = Q(/* @__PURE__ */ new WeakMap()), d = Wt(() => {
    const D = u.current;
    return (a ? i ?? [] : l).map((B) => {
      let j = D.get(B);
      return j === void 0 && (j = zr(B), D.set(B, j)), j;
    }).filter((B) => B !== null);
  }, [a, i, l]), v = Q(s);
  v.current = s;
  const x = ft((D) => {
    const B = v.current;
    if (!B) {
      g(D);
      return;
    }
    B(typeof D == "function" ? D : () => D);
  }, []), [f, p] = ct({ x: -400, y: -300, z: 1 }), [y, w] = ct(/* @__PURE__ */ new Set()), [$, b] = ct(null), [X, k] = ct({ kind: "none" }), [M, E] = ct(!1), [Y, C] = ct([]), [L, T] = ct(""), [F, P] = ct(!1), [N, W] = ct(null), [O, U] = ct(!1), [A, R] = ct(n ?? r ?? "blue"), J = n ?? A, rt = Q(o);
  rt.current = o;
  const it = ft((D) => {
    R((B) => {
      var st;
      const j = typeof D == "function" ? D(B) : D;
      return (st = rt.current) == null || st.call(rt, j), j;
    });
  }, []), [et, xt] = ct(Ne), mt = Q(J);
  mt.current = J;
  const tt = Q([]), I = Q([]), _ = Q(null), V = Q(/* @__PURE__ */ new Map()), ht = Q(null), Ct = Q(null), bt = Q([]), It = Q(/* @__PURE__ */ new Set()), at = Q(d), q = Q(f), Et = Q(e), kt = Q(y), $t = Q($), ot = Q(!1);
  at.current = d, q.current = f, Et.current = e, kt.current = y, $t.current = $;
  const St = ft((D) => {
    var B;
    ot.current = D, D && typeof window < "u" && ((B = window.getSelection()) == null || B.removeAllRanges()), U(D);
  }, []), [At, Rt] = ct("ink"), [dt, Lt] = ct("yellow"), S = e === "highlighter" ? dt : At, H = Q(S);
  H.current = S;
  const Z = ft((D) => {
    Et.current === "highlighter" ? Lt(D) : Rt(D);
  }, []), lt = Q({ kind: "none" }), ut = ft((D) => {
    lt.current = D, k(D);
  }, []), zt = ft((D) => {
    kt.current = D, w(D);
  }, []);
  ae(() => {
    var B;
    const D = /* @__PURE__ */ new Set();
    kt.current = D, $t.current = null, V.current.clear(), tt.current = [], I.current = [], _.current = null, Ct.current = null, bt.current = [], It.current.clear(), ot.current = !1, ut({ kind: "none" }), w(D), b(null), E(!1), C([]), W(null), U(!1), T(""), (B = h.current) == null || B.focus();
  }, [ut, t]), Mt(() => {
    let D = !1;
    const B = () => {
      const st = gi();
      D || xt(st);
    };
    if (B(), typeof document > "u" || !("fonts" in document)) return;
    const j = () => B();
    return document.fonts.addEventListener("loadingdone", j), () => {
      D = !0, document.fonts.removeEventListener("loadingdone", j);
    };
  }, [t]);
  const gt = ($ ? d.find((D) => D.id === $) : void 0) !== void 0;
  ae(() => {
    if (!$ || !gt) return;
    const D = () => {
      const j = m.current, st = at.current.find((ve) => ve.id === $);
      if (!j || !st || (j.dataset.seeded !== $ && (j.innerHTML = Oe(st), j.dataset.seeded = $), document.activeElement === j)) return;
      j.focus();
      const Zt = document.createRange();
      Zt.selectNodeContents(j), Zt.collapse(!1);
      const Ut = window.getSelection();
      Ut == null || Ut.removeAllRanges(), Ut == null || Ut.addRange(Zt);
    };
    D();
    const B = requestAnimationFrame(D);
    return () => cancelAnimationFrame(B);
  }, [$, gt]);
  const le = ft((D) => {
    x((B) => {
      const j = typeof D == "function" ? D(B) : D;
      return tt.current.push(B), tt.current.length > 100 && tt.current.shift(), I.current = [], j;
    }), c();
  }, [c]), je = ft((D) => {
    if (D.length === 0) return;
    let B = at.current;
    for (const j of D)
      tt.current.push(B), B = [...B, j];
    tt.current.length > 100 && tt.current.splice(0, tt.current.length - 100), I.current = [], x((j) => [...j, ...D]), c();
  }, [c, x]), Re = ft((D) => D.size === 0 ? !1 : (le((B) => B.filter((j) => D.has(j.id) ? !1 : j.type !== "arrow" ? !0 : !(j.fromId && D.has(j.fromId)) && !(j.toId && D.has(j.toId)))), zt(/* @__PURE__ */ new Set()), T(`${D.size}개 삭제됨`), !0), [le, zt]), Be = ft(() => {
    _.current = at.current;
  }, []), $e = ft(() => {
    const D = _.current;
    _.current = null, !(!D || D === at.current) && (tt.current.push(D), tt.current.length > 100 && tt.current.shift(), I.current = [], c());
  }, [c]), Ke = ft(() => {
    const D = _.current;
    _.current = null, !(!D || D === at.current) && (at.current = D, x(D));
  }, [x]), Ue = ft((D, B) => {
    var Zt;
    const j = (Zt = h.current) == null ? void 0 : Zt.getBoundingClientRect(), st = q.current;
    return j ? { x: (D - j.left) / st.z + st.x, y: (B - j.top) / st.z + st.y } : { x: 0, y: 0 };
  }, []), Ge = ft(() => {
    var j;
    const D = (j = h.current) == null ? void 0 : j.getBoundingClientRect(), B = q.current;
    return D ? { x: B.x + D.width / 2 / B.z, y: B.y + D.height / 2 / B.z } : { x: 0, y: 0 };
  }, []), Kt = ft((D) => {
    const B = new Set(at.current.filter((st) => D.has(st.id) && st.groupId).map((st) => st.groupId));
    if (B.size === 0) return D;
    const j = new Set(D);
    for (const st of at.current) st.groupId && B.has(st.groupId) && j.add(st.id);
    return j;
  }, []);
  return {
    containerRef: h,
    editorRef: m,
    localShapes: l,
    setLocalShapes: g,
    controlled: a,
    shapes: d,
    setShapes: x,
    camera: f,
    setCamera: p,
    cameraRef: q,
    selected: y,
    setSelected: w,
    selectedRef: kt,
    editingId: $,
    setEditingId: b,
    editingIdRef: $t,
    interaction: X,
    interactionRef: lt,
    applyInteraction: ut,
    isSpaceDown: M,
    setIsSpaceDown: E,
    guides: Y,
    setGuides: C,
    announcement: L,
    setAnnouncement: T,
    showInspectorPalette: F,
    setShowInspectorPalette: P,
    eraserPos: N,
    setEraserPos: W,
    isPenMode: O,
    setIsPenMode: St,
    penModeRef: ot,
    activeColor: J,
    setActiveColor: it,
    activeColorRef: mt,
    drawColor: S,
    setDrawColor: Z,
    drawColorRef: H,
    installedFontFamilies: et,
    pointers: V,
    past: tt,
    future: I,
    selectNow: zt,
    commit: le,
    deleteSelection: Re,
    beginHistory: Be,
    endHistory: $e,
    cancelHistory: Ke,
    toPage: Ue,
    viewportCentre: Ge,
    expandToGroups: Kt,
    toolRef: Et,
    shapesRef: at,
    liveStrokeCanvasRef: ht,
    activeDrawRef: Ct,
    pendingDrawsRef: bt,
    queuedDrawIdsRef: It,
    commitDrawBatch: je
  };
}
function Ki({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: r,
  maxZoom: o,
  shapes: i,
  selected: s,
  editingId: c,
  textualTypes: h,
  onZoomChange: m,
  onSelectionChange: l,
  onLocalCursor: g,
  toPage: a
}) {
  Mt(() => {
    m == null || m(e.z);
  }, [e.z, m]), Mt(() => {
    const y = t.current;
    if (!y) return;
    const w = ($) => {
      if ($.preventDefault(), $.ctrlKey || $.metaKey) {
        const b = y.getBoundingClientRect();
        n((X) => {
          const k = Math.min(o, Math.max(r, X.z * Math.exp(-$.deltaY * 0.01))), M = $.clientX - b.left, E = $.clientY - b.top;
          return { x: X.x + M / X.z - M / k, y: X.y + E / X.z - E / k, z: k };
        });
      } else
        n((b) => ({ ...b, x: b.x + $.deltaX / b.z, y: b.y + $.deltaY / b.z }));
    };
    return y.addEventListener("wheel", w, { passive: !1 }), () => y.removeEventListener("wheel", w);
  }, [t, o, r, n]);
  const u = Wt(() => {
    const y = i.filter((w) => s.has(w.id));
    return {
      count: y.length,
      canGroup: y.length > 1,
      canUngroup: y.some((w) => !!w.groupId),
      isTextual: y.length === 1 && h.includes(y[0].type),
      selectedIds: y.map((w) => w.id)
    };
  }, [s, i, h]);
  Mt(() => {
    l == null || l(u);
  }, [l, u]);
  const d = Wt(() => {
    if (c) {
      const w = i.find(($) => $.id === c);
      return w && w.type !== "image" && w.type !== "draw" ? [w] : [];
    }
    const y = i.filter((w) => s.has(w.id));
    return y.length === 1 && y[0].type === "image" ? [] : y;
  }, [c, s, i]), v = Wt(() => d.length === 0 ? null : d.find((y) => y.type !== "image") ?? null, [d]), x = Q(0);
  return { selectionInfo: u, inspectorSelection: d, inspectorShape: v, onContainerPointerMove: g ? (y) => {
    const w = performance.now();
    w - x.current < 60 || (x.current = w, g(a(y.clientX, y.clientY)));
  } : void 0, onContainerPointerLeave: g ? () => g(null) : void 0 };
}
const he = 24;
function Ui({
  containerRef: t,
  shapesRef: e,
  selectedRef: n,
  commit: r,
  deleteSelection: o,
  selectNow: i,
  setAnnouncement: s,
  createId: c
}) {
  return Wt(() => ({
    deleteSelected: () => {
      o(n.current);
    },
    duplicateSelected: () => {
      var g;
      const h = n.current;
      if (h.size === 0) return;
      const m = [], l = /* @__PURE__ */ new Map();
      for (const a of e.current) {
        if (!h.has(a.id)) continue;
        let u = a.groupId;
        u && (l.has(u) || l.set(u, c("g")), u = l.get(u)), m.push({
          ...a,
          id: c(),
          x: a.x + he,
          y: a.y + he,
          groupId: u,
          points: (g = a.points) == null ? void 0 : g.map(([d, v]) => [d + he, v + he]),
          orthogonalWaypoints: a.type === "arrow" && a.orthogonalWaypoints ? a.orthogonalWaypoints.map((d) => ({ x: d.x + he, y: d.y + he })) : void 0
        });
      }
      r((a) => [...a, ...m]), i(new Set(m.map((a) => a.id))), s(`${m.length}개 복제됨`);
    },
    group: () => {
      var l;
      const h = n.current;
      if (h.size < 2) return;
      const m = c("g");
      r((g) => g.map((a) => h.has(a.id) ? { ...a, groupId: m } : a)), s(`${h.size}개 그룹화됨`), (l = t.current) == null || l.focus();
    },
    ungroup: () => {
      var m;
      const h = n.current;
      h.size !== 0 && (r((l) => l.map((g) => h.has(g.id) ? { ...g, groupId: void 0 } : g)), s("그룹 해제됨"), (m = t.current) == null || m.focus());
    }
  }), [r, t, c, o, i, n, s, e]);
}
function Lr(t, e, n = t) {
  if (t.length === 0) return null;
  const r = new Map(n.map((x) => [x.id, x])), o = /* @__PURE__ */ new Map(), i = (x) => {
    const f = o.get(x.id);
    if (f) return f;
    const p = Ot(x, r, n);
    return o.set(x.id, p), p;
  }, s = (x) => {
    var y;
    if (x.type !== "arrow") return wt(x);
    const f = i(x), p = (y = f.pathPoints) != null && y.length ? f.pathPoints : f.routing === "curved" ? [f.start, f.control, f.end] : [f.start, f.end];
    return {
      minX: Math.min(...p.map((w) => w.x)),
      minY: Math.min(...p.map((w) => w.y)),
      maxX: Math.max(...p.map((w) => w.x)),
      maxY: Math.max(...p.map((w) => w.y))
    };
  };
  let c = 1 / 0, h = 1 / 0, m = -1 / 0, l = -1 / 0;
  for (const x of t) {
    const f = s(x);
    c = Math.min(c, f.minX), h = Math.min(h, f.minY), m = Math.max(m, f.maxX), l = Math.max(l, f.maxY);
  }
  const g = 40, a = m - c + g * 2, u = l - h + g * 2;
  if (!Number.isFinite(a) || !Number.isFinite(u) || a > ne.maxExportDimension || u > ne.maxExportDimension || a * u > ne.maxExportPixels) return null;
  const d = (x, f, p, y, w) => {
    const $ = x.fontSize ?? p, b = Pt(x), X = Cr(Oe(x));
    if (X.length === 0) return "";
    const k = qt(x), M = x.textAlign === "right" ? "end" : x.textAlign === "center" ? "middle" : x.textAlign === "left" ? "start" : w, E = M === "end" ? k.maxX - 12 : M === "middle" ? (k.minX + k.maxX) / 2 : k.minX + 12, Y = k.minY + $ + 12;
    return X.map((C, L) => {
      const T = C.map((F) => `<tspan style="${[
        F.bold ? "font-weight:700" : `font-weight:${y}`,
        F.italic ? "font-style:italic" : "",
        F.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Gt(F.text)}</tspan>`).join("");
      return `<text x="${E}" y="${Y + L * $ * 1.4}" font-family="${Gt(b)}" font-size="${$}" fill="${f}" text-anchor="${M}">${T}</text>`;
    }).join("");
  }, v = t.map((x) => {
    const f = pt[x.color ?? "blue"], p = qt(x), y = Ft(x), w = x.rotation ? ` transform="rotate(${x.rotation * 180 / Math.PI} ${y.x} ${y.y})"` : "", $ = x.color ? pt[x.color].border : G.ink;
    if (x.type === "draw" && x.points) {
      const C = Sr(x), L = Gt(We(x)), T = C.opacity === 1 ? "" : ` stroke-opacity="${C.opacity}" fill-opacity="${C.opacity}"`;
      return `<path d="${C.d}" fill="${C.filled ? L : "none"}" stroke="${C.filled ? "none" : L}" stroke-width="${C.width}"${T} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (x.type === "arrow") {
      const C = i(x), L = x.strokeWidth ?? 2.5, T = Math.max(10, 8 + L * 2), F = Math.max(4, 2 + L), P = C.routing === "orthogonal" && C.pathPoints ? C.pathPoints : null, N = P && P.length > 1, W = N ? an(P) : C.routing === "curved" ? `M ${C.start.x} ${C.start.y} Q ${C.control.x} ${C.control.y} ${C.end.x} ${C.end.y}` : `M ${C.start.x} ${C.start.y} L ${C.end.x} ${C.end.y}`, O = N ? mr(P) : C.routing === "curved" ? (() => {
        const et = pe(0.94, C.start, C.control, C.end);
        return Math.atan2(C.end.y - et.y, C.end.x - et.x);
      })() : Math.atan2(C.end.y - C.start.y, C.end.x - C.start.x), U = N ? we(P[0], P[1]) : C.routing === "orthogonal" && C.start.side ? C.start.side === "e" ? 0 : C.start.side === "w" ? Math.PI : C.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : we(C.start, C.end), A = x.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : x.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", R = (et, xt, mt, tt) => {
        if (et === "dot") return `<circle cx="${xt}" cy="${mt}" r="${F}" fill="${$}"/>`;
        if (et === "none") return "";
        const I = `${xt - T * Math.cos(tt - 0.4)},${mt - T * Math.sin(tt - 0.4)}`, _ = `${xt - T * Math.cos(tt + 0.4)},${mt - T * Math.sin(tt + 0.4)}`;
        return `<polygon points="${xt},${mt} ${I} ${_}" fill="${$}"/>`;
      }, J = C.routing === "orthogonal" && C.pathPoints ? vn(C.pathPoints) : C.bend === 0 ? { x: (C.start.x + C.end.x) / 2, y: (C.start.y + C.end.y) / 2 } : pe(0.5, C.start, C.control, C.end), rt = ke(x), it = rt ? `<text x="${J.x}" y="${J.y - 6}" text-anchor="middle" font-family="${Gt(Pt(x))}" font-size="${x.fontSize ?? 12}" fill="${$}">${Gt(rt)}</text>` : "";
      return `<path d="${W}" fill="none" stroke="${$}" stroke-width="${L}" stroke-linecap="round" stroke-linejoin="round"${A}/>` + R(x.arrowEnd ?? "arrow", C.end.x, C.end.y, O) + R(x.arrowStart ?? "none", C.start.x, C.start.y, U + Math.PI) + it;
    }
    if (x.type === "image" && x.src) {
      const C = un(x.src);
      return C ? `<image href="${Gt(C)}" x="${p.minX}" y="${p.minY}" width="${p.maxX - p.minX}" height="${p.maxY - p.minY}"${w}/>` : "";
    }
    if (x.type === "frame")
      return `<g${w}><rect x="${p.minX}" y="${p.minY}" width="${p.maxX - p.minX}" height="${p.maxY - p.minY}" fill="none" stroke="${G.slate400}" stroke-width="${x.strokeWidth ?? 2}" rx="4"/><text x="${p.minX}" y="${p.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${G.muted}">${Gt(x.text ?? "프레임")}</text></g>`;
    if (x.type === "note")
      return `<g${w}><rect x="${p.minX}" y="${p.minY}" width="${p.maxX - p.minX}" height="${p.maxY - p.minY}" fill="${f.bg}"/><rect x="${p.minX}" y="${p.minY}" width="${p.maxX - p.minX}" height="6" fill="${f.border}"/>` + d(x, f.text, 14, "600", "start") + "</g>";
    if (x.type === "card") {
      const C = x.cardStyle === "glass";
      return `<g${w}><rect x="${p.minX}" y="${p.minY}" width="${p.maxX - p.minX}" height="${p.maxY - p.minY}" rx="16" fill="${C ? G.glassFill : G.slateCard}"/><text x="${p.minX + 16}" y="${p.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${G.slate400}">[ ${Gt(x.category ?? "ENTITY")} ]</text>` + d(x, G.white, 16, "700", "start") + "</g>";
    }
    const b = x.type === "rect" || x.type === "ellipse" || x.type === "triangle" || x.type === "diamond" || x.type === "hexagon" || x.type === "star" ? x.strokeWidth ?? 2 : 2, X = Le(x), k = kr(x), M = x.type === "triangle" || x.type === "diamond" || x.type === "hexagon" || x.type === "star", E = M ? $r(x.type, p.maxX - p.minX, p.maxY - p.minY).split(" ").map((C) => {
      const [L, T] = C.split(",").map(Number);
      return `${L + p.minX},${T + p.minY}`;
    }).join(" ") : "", Y = x.type === "ellipse" ? `<ellipse cx="${(p.minX + p.maxX) / 2}" cy="${(p.minY + p.maxY) / 2}" rx="${(p.maxX - p.minX) / 2}" ry="${(p.maxY - p.minY) / 2}" fill="${X}" stroke="${k}" stroke-width="${b}"/>` : M ? `<polygon points="${E}" fill="${X}" stroke="${k}" stroke-width="${b}" stroke-linejoin="round"/>` : `<rect x="${p.minX}" y="${p.minY}" width="${p.maxX - p.minX}" height="${p.maxY - p.minY}" rx="12" fill="${X}" stroke="${k}" stroke-width="${b}"/>`;
    return `<g${w}>${Y}${d(x, f.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${a}" height="${u}" viewBox="${c - g} ${h - g} ${a} ${u}"><rect x="${c - g}" y="${h - g}" width="${a}" height="${u}" fill="${e ? G.canvasDark : G.canvasLight}"/>` + v + "</svg>";
}
function Gi(t, e) {
  return Lr(t, e);
}
function Vi(t, e, n) {
  return Lr(
    t.filter((r) => e.has(r.id)),
    n,
    t
  );
}
async function er(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), r = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), o = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), i = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, s = new Image();
  s.crossOrigin = "anonymous";
  try {
    await new Promise((a, u) => {
      s.onload = () => a(), s.onerror = () => u(new Error("svg rasterise failed")), s.src = i;
    });
  } catch {
    return null;
  }
  const c = 2, h = r * c, m = o * c;
  if (!Number.isSafeInteger(h) || !Number.isSafeInteger(m) || h > ne.maxExportDimension || m > ne.maxExportDimension || h * m > ne.maxExportPixels) return null;
  const l = document.createElement("canvas");
  l.width = h, l.height = m;
  const g = l.getContext("2d");
  return g ? (g.scale(c, c), g.drawImage(s, 0, 0), new Promise((a) => {
    try {
      l.toBlob((u) => a(u), "image/png");
    } catch {
      a(null);
    }
  })) : null;
}
function qi(t, e, n) {
  if (t.length < 2) return;
  const r = t.filter(
    (a) => a.type !== "draw" && a.type !== "arrow" && a.type !== "frame" && a.type !== "image"
  );
  if (r.length < 2) return;
  const o = r.map((a, u) => ({
    id: a.id,
    i: u,
    x: Ft(a).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: Ft(a).y,
    vx: 0,
    vy: 0
  }));
  for (let a = 0; a < o.length; a++)
    for (let u = 0; u < a; u++)
      if (Math.abs(o[a].x - o[u].x) < 1 && Math.abs(o[a].y - o[u].y) < 1) {
        const d = 2 * Math.PI * a / o.length;
        o[a].x += Math.cos(d) * 10, o[a].y += Math.sin(d) * 10;
        break;
      }
  const i = new Map(o.map((a) => [a.id, a])), s = [];
  for (const a of t) {
    if (a.type !== "arrow") continue;
    const u = a.fromId ? i.get(a.fromId) : null, d = a.toId ? i.get(a.toId) : null;
    u && d && s.push([u, d]);
  }
  const c = 220, h = c * c, m = 80;
  let l = 400;
  const g = l / m;
  for (let a = 0; a < m; a++) {
    for (let u = 0; u < o.length; u++)
      o[u].vx = 0, o[u].vy = 0;
    for (let u = 0; u < o.length; u++)
      for (let d = u + 1; d < o.length; d++) {
        const v = o[u], x = o[d], f = v.x - x.x, p = v.y - x.y, y = Math.hypot(f, p) || 0.01, w = h / y, $ = f / y * w, b = p / y * w;
        v.vx += $, v.vy += b, x.vx -= $, x.vy -= b;
      }
    for (const [u, d] of s) {
      const v = u.x - d.x, x = u.y - d.y, f = Math.hypot(v, x) || 0.01, p = f * f / c, y = v / f * p, w = x / f * p;
      u.vx -= y, u.vy -= w, d.vx += y, d.vy += w;
    }
    for (const u of o) {
      const d = Math.hypot(u.vx, u.vy) || 0.01, v = Math.min(d, l);
      u.x += u.vx / d * v, u.y += u.vy / d * v;
    }
    l = Math.max(0.5, l - g);
  }
  e((a) => a.map((u) => {
    const d = i.get(u.id);
    return d ? { ...u, x: d.x - u.w / 2, y: d.y - u.h / 2 } : u;
  })), n();
}
function Zi(t, {
  controlled: e,
  past: n,
  future: r,
  setLocalShapes: o,
  setCamera: i,
  selectNow: s,
  setEditingId: c
}) {
  let h;
  try {
    h = ho(t);
  } catch {
    return;
  }
  e || (n.current = [], r.current = [], o(h.shapes.map(Qi))), i(h.camera), s(/* @__PURE__ */ new Set()), c(null);
}
function Qi(t) {
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
      return Ji(t);
  }
}
function Ji(t) {
  throw new xo(`Unhandled canvas shape type: ${String(t)}.`);
}
const nr = (t) => t === "draw" || t === "highlighter";
function ta({
  ref: t,
  containerRef: e,
  shapesRef: n,
  selectedRef: r,
  cameraRef: o,
  toolRef: i,
  activeColorRef: s,
  drawColorRef: c,
  setDrawColor: h,
  setActiveColor: m,
  past: l,
  future: g,
  controlled: a,
  isDarkMode: u,
  minZoom: d,
  maxZoom: v,
  onToolChange: x,
  setSelectedStrokeWidth: f,
  onDirty: p,
  commit: y,
  selectNow: w,
  selectionActions: $,
  viewportCentre: b,
  setShapes: X,
  setLocalShapes: k,
  setCamera: M,
  setEditingId: E,
  setAnnouncement: Y,
  createId: C
}) {
  const L = ft((P) => {
    const N = b(), W = zr({
      id: C(),
      x: P.x ?? N.x - P.w / 2,
      y: P.y ?? N.y - P.h / 2,
      ...P
    });
    if (!W) throw new Error("Canvas could not create a valid shape.");
    return y((O) => [...O, W]), w(/* @__PURE__ */ new Set([W.id])), x("select"), Y(`${W.type} 추가됨`), W;
  }, [y, C, x, w, Y, b]), T = ft(() => Gi(n.current, u), [u, n]), F = ft(() => Vi(
    n.current,
    (r == null ? void 0 : r.current) ?? /* @__PURE__ */ new Set(),
    u
  ), [u, r, n]);
  so(t, () => ({
    addNote: (P) => {
      const N = L({ type: "note", w: 180, h: 180, color: P, text: "" });
      E(N.id);
    },
    addCard: (P, N, W, O) => {
      L({ type: "card", w: 260, h: 150, text: P, category: N, cardStyle: W, color: O });
    },
    addText: () => {
      const P = L({ type: "text", w: 220, h: 44, text: "" });
      E(P.id);
    },
    addShape: (P, N, W) => {
      L({
        type: P,
        w: P === "ellipse" ? 220 : 200,
        h: P === "ellipse" ? 110 : 140,
        color: N,
        text: W ?? ""
      });
    },
    addArrow: () => {
      const P = b(), N = { id: C(), type: "arrow", x: P.x - 140, y: P.y, w: 280, h: 0 };
      y((W) => [...W, N]), w(/* @__PURE__ */ new Set([N.id])), x("select");
    },
    addImage: (P, N, W, O) => {
      L({ type: "image", w: W, h: O, src: P, fileName: N });
    },
    addFileCard: (P, N, W) => {
      L({ type: "rect", w: 260, h: 120, color: "purple", text: W, src: N, fileName: P });
    },
    updateShapeText: (P, N) => {
      y((W) => W.map((O) => O.id === P ? { ...O, text: N, html: void 0 } : O));
    },
    setSelectedStrokeWidth: f,
    // While a pen tool is active the "active colour" is the pen colour, so
    // hosts that drive the palette through the handle see the same thing the
    // user sees on the canvas. Other tools keep the note/shape colour.
    setActiveColor: (P) => {
      nr(i.current) ? h(P) : m(P);
    },
    getActiveColor: () => nr(i.current) ? c.current : s.current,
    setTool: x,
    undo: () => {
      const P = l.current.pop();
      P && (g.current.push(n.current), X(P), w(/* @__PURE__ */ new Set()), E(null), p(), Y("실행 취소"));
    },
    redo: () => {
      const P = g.current.pop();
      P && (l.current.push(n.current), X(P), w(/* @__PURE__ */ new Set()), E(null), p(), Y("다시 실행"));
    },
    deleteSelected: $.deleteSelected,
    duplicateSelected: $.duplicateSelected,
    group: $.group,
    ungroup: $.ungroup,
    zoomBy: (P) => {
      M((N) => {
        var R;
        const W = (R = e.current) == null ? void 0 : R.getBoundingClientRect(), O = Math.min(v, Math.max(d, N.z * P));
        if (!W) return { ...N, z: O };
        const U = N.x + W.width / 2 / N.z, A = N.y + W.height / 2 / N.z;
        return { x: U - W.width / 2 / O, y: A - W.height / 2 / O, z: O };
      });
    },
    zoomTo: (P) => {
      M((N) => {
        var R;
        const W = (R = e.current) == null ? void 0 : R.getBoundingClientRect(), O = Math.min(v, Math.max(d, P));
        if (!W) return { ...N, z: O };
        const U = N.x + W.width / 2 / N.z, A = N.y + W.height / 2 / N.z;
        return { x: U - W.width / 2 / O, y: A - W.height / 2 / O, z: O };
      });
    },
    resetZoom: () => {
      M((P) => {
        var U;
        const N = (U = e.current) == null ? void 0 : U.getBoundingClientRect();
        if (!N) return { ...P, z: 1 };
        const W = P.x + N.width / 2 / P.z, O = P.y + N.height / 2 / P.z;
        return { x: W - N.width / 2, y: O - N.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var rt;
      const P = n.current, N = (rt = e.current) == null ? void 0 : rt.getBoundingClientRect();
      if (P.length === 0 || !N) return;
      let W = 1 / 0, O = 1 / 0, U = -1 / 0, A = -1 / 0;
      for (const it of P) {
        const et = wt(it);
        W = Math.min(W, et.minX), O = Math.min(O, et.minY), U = Math.max(U, et.maxX), A = Math.max(A, et.maxY);
      }
      const R = 80, J = Math.min(v, Math.max(
        d,
        Math.min(N.width / (U - W + R * 2), N.height / (A - O + R * 2))
      ));
      M({
        x: (W + U) / 2 - N.width / 2 / J,
        y: (O + A) / 2 - N.height / 2 / J,
        z: J
      });
    },
    autoLayout: () => qi(n.current, y, () => Y("자동 배치 완료")),
    exportSvg: T,
    exportPng: () => er(T),
    exportSvgForSelection: F,
    exportPngForSelection: () => er(F),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (P) => Zi(P, {
      controlled: a,
      past: l,
      future: g,
      setLocalShapes: k,
      setCamera: M,
      selectNow: w,
      setEditingId: E
    })
  }), [
    L,
    T,
    F,
    y,
    C,
    u,
    v,
    d,
    p,
    x,
    $,
    w,
    M,
    E,
    k,
    f,
    X,
    Y,
    b,
    a
  ]);
}
function ea(t) {
  return t.altKey || !t.ctrlKey && !t.metaKey ? null : t.code === "KeyZ" ? t.shiftKey ? "redo" : "undo" : t.code === "KeyY" ? "redo" : null;
}
function na(t) {
  if (t.altKey || t.ctrlKey || t.metaKey) return null;
  switch (t.code) {
    case "KeyV":
      return "select";
    case "KeyL":
      return "lasso";
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
function ra({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: r,
  editingIdRef: o,
  toolRef: i,
  past: s,
  future: c,
  textualTypes: h,
  setIsSpaceDown: m,
  setEditingId: l,
  setShapes: g,
  setAnnouncement: a,
  commit: u,
  deleteSelection: d,
  selectNow: v,
  onDirty: x,
  onToolChange: f,
  createId: p
}) {
  const y = ft((w, $) => {
    const b = r.current;
    b.size !== 0 && u((X) => X.map((k) => {
      var M;
      return b.has(k.id) ? {
        ...k,
        x: k.x + w,
        y: k.y + $,
        points: (M = k.points) == null ? void 0 : M.map(([E, Y]) => [E + w, Y + $])
      } : k;
    }));
  }, [u, r]);
  Mt(() => {
    const w = (k) => {
      const M = k;
      return !!M && (M.tagName === "INPUT" || M.tagName === "TEXTAREA" || M.isContentEditable);
    }, $ = (k) => k instanceof Element && !!k.closest("input, select, button, textarea, option, label, [data-canvas-control]"), b = (k) => {
      var N, W, O, U;
      const M = t.current, E = document.activeElement, Y = k.target instanceof Node && !!(M != null && M.contains(k.target)), C = !!M && (E === M || M.contains(E));
      if (!Y && !C || $(k.target)) return;
      if (k.code === "Space" && !w(k.target)) {
        m(!0), k.preventDefault();
        return;
      }
      if (w(k.target)) {
        if (k.key === "Escape")
          k.preventDefault(), l(null), (N = e.current) == null || N.blur(), (W = t.current) == null || W.focus();
        else if ((k.key === "Delete" || k.key === "Backspace") && !o.current) {
          const A = r.current;
          d(A) && k.preventDefault();
        }
        return;
      }
      const L = r.current, T = ea(k);
      if (T) {
        if (k.preventDefault(), T === "redo") {
          const A = c.current.pop();
          A && (s.current.push(n.current), g(A), x(), a("다시 실행"));
        } else {
          const A = s.current.pop();
          A && (c.current.push(n.current), g(A), x(), a("실행 취소"));
        }
        v(/* @__PURE__ */ new Set());
        return;
      }
      const F = k.metaKey || k.ctrlKey;
      if (F && k.key.toLowerCase() === "g") {
        if (k.preventDefault(), k.shiftKey)
          L.size > 0 && (u((A) => A.map((R) => L.has(R.id) ? { ...R, groupId: void 0 } : R)), a("그룹 해제됨"));
        else if (L.size > 1) {
          const A = p("g");
          u((R) => R.map((J) => L.has(J.id) ? { ...J, groupId: A } : J)), a(`${L.size}개 그룹화됨`);
        }
        return;
      }
      if (F && k.key.toLowerCase() === "a") {
        k.preventDefault(), v(new Set(n.current.map((A) => A.id))), a(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (k.key === "Delete" || k.key === "Backspace") {
        d(L) && k.preventDefault();
        return;
      }
      if (k.key.startsWith("Arrow")) {
        k.preventDefault();
        const A = k.shiftKey ? 10 : 1;
        k.key === "ArrowLeft" && y(-A, 0), k.key === "ArrowRight" && y(A, 0), k.key === "ArrowUp" && y(0, -A), k.key === "ArrowDown" && y(0, A);
        return;
      }
      if (k.key === "Tab" && n.current.length > 0) {
        k.preventDefault();
        const A = n.current, R = A.findIndex((it) => L.has(it.id)), J = k.shiftKey ? R <= 0 ? A.length - 1 : R - 1 : R === -1 || R === A.length - 1 ? 0 : R + 1, rt = A[J];
        v(/* @__PURE__ */ new Set([rt.id])), a(`${rt.type} 선택됨: ${ke(rt) || "내용 없음"}`);
        return;
      }
      if (k.key === "Enter" && L.size === 1) {
        const A = n.current.find((R) => L.has(R.id));
        A && h.includes(A.type) && (k.preventDefault(), l(A.id));
        return;
      }
      if (k.key === "Escape") {
        if (o.current) {
          k.preventDefault(), l(null), (O = e.current) == null || O.blur(), (U = t.current) == null || U.focus(), f("select");
          return;
        }
        v(/* @__PURE__ */ new Set()), f("select");
        return;
      }
      const P = na(k);
      P && (k.preventDefault(), i.current = P, f(P));
    }, X = (k) => {
      const M = t.current;
      !M || !(document.activeElement === M || M.contains(document.activeElement)) || k.code === "Space" && m(!1);
    };
    return window.addEventListener("keydown", b), window.addEventListener("keyup", X), () => {
      window.removeEventListener("keydown", b), window.removeEventListener("keyup", X);
    };
  }, [
    u,
    t,
    p,
    d,
    o,
    e,
    c,
    y,
    x,
    f,
    s,
    v,
    r,
    a,
    l,
    m,
    g,
    n,
    h,
    i
  ]);
}
function Fe(t) {
  return t.pointerType === "pen";
}
function oa() {
  return typeof navigator < "u" && navigator.maxTouchPoints > 0 ? !0 : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(any-pointer: coarse)").matches;
}
function ia(t, e) {
  return e && Fe(t);
}
function aa(t, e) {
  return !t || Fe(e);
}
function xe(t, e) {
  return [(t[0] - e.x) * e.z, (t[1] - e.y) * e.z];
}
function rr(t, e, n, r) {
  if (r === "raw") {
    let h = t[t.length - 1];
    for (const m of e) {
      if (t.length >= ne.maxDrawPoints) return;
      h && m[0] === h[0] && m[1] === h[1] || (t.push(m), h = m);
    }
    return;
  }
  const o = Math.max(n, 0.1), i = 0.05 / o, s = 4 / o;
  let c = t[t.length - 1];
  for (const h of e) {
    if (!c) {
      t.push(h), c = h;
      continue;
    }
    const m = h[0] - c[0], l = h[1] - c[1], g = Math.hypot(m, l);
    if (g < i) continue;
    const a = Math.max(1, Math.ceil(g / s)), u = Math.min(a, ne.maxDrawPoints - t.length);
    if (u <= 0) return;
    for (let d = 1; d <= u; d++) {
      const v = [
        c[0] + m * (d / a),
        c[1] + l * (d / a)
      ];
      t.push(v);
    }
    c = t[t.length - 1];
  }
}
function sa(t) {
  const e = (t.points ?? []).map(([s, c]) => [s, c]);
  if (e.length === 0) return t;
  let n = e[0][0], r = e[0][1], o = n, i = r;
  for (const [s, c] of e)
    n = Math.min(n, s), r = Math.min(r, c), o = Math.max(o, s), i = Math.max(i, c);
  return { ...t, points: e, x: n, y: r, w: o - n, h: i - r };
}
function or(t, e, n) {
  if (e.type !== "draw") return;
  const r = e.points ?? [];
  if (r.length === 0) return;
  const o = e.strokeWidth ?? 3, i = e.drawMode ?? "pen", s = We(e);
  if (t.save(), t.globalAlpha = i === "highlighter" ? 0.35 : 1, t.fillStyle = s, r.length === 1 && e.inkStyle === void 0) {
    const [l, g] = xe(r[0], n);
    t.beginPath(), t.arc(l, g, Math.max(Ie(o, i) * n.z, 0.5), 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  if (typeof Path2D == "function") {
    const l = ln(e);
    t.scale(n.z, n.z), t.translate(-n.x, -n.y);
    const g = new Path2D(l.d);
    l.filled ? t.fill(g) : (t.strokeStyle = s, t.lineWidth = l.width, t.lineCap = "round", t.lineJoin = "round", t.stroke(g)), t.restore();
    return;
  }
  if (r.length === 1 || e.inkStyle === "raw" && r.every(([l, g]) => l === r[0][0] && g === r[0][1])) {
    const [l, g] = xe(r[0], n);
    t.beginPath(), t.arc(l, g, Ie(o, i) * n.z, 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  if (e.inkStyle === "raw") {
    t.beginPath();
    const [l, g] = xe(r[0], n);
    t.moveTo(l, g);
    for (let a = 1; a < r.length; a++) {
      const [u, d] = xe(r[a], n);
      t.lineTo(u, d);
    }
    t.strokeStyle = s, t.lineWidth = Ie(o, i) * 2 * n.z, t.lineCap = "round", t.lineJoin = "round", t.stroke(), t.restore();
    return;
  }
  const c = Mr(r, o, i);
  if (c.length === 0) {
    t.restore();
    return;
  }
  t.beginPath();
  const [h, m] = xe([c[0][0], c[0][1]], n);
  t.moveTo(h, m);
  for (let l = 1; l < c.length; l++) {
    const [g, a] = xe([c[l][0], c[l][1]], n);
    t.lineTo(g, a);
  }
  t.closePath(), t.fill(), t.restore();
}
function ca(t, e, n, r) {
  const o = Math.max(1, Math.min(2, r)), i = Math.max(1, Math.round(e * o)), s = Math.max(1, Math.round(n * o));
  return t.width !== i && (t.width = i), t.height !== s && (t.height = s), t.style.width = `${e}px`, t.style.height = `${n}px`, o;
}
function Ae(t, e, n, r, o = 1) {
  var c;
  if (!t) return;
  const i = (c = t.getContext) == null ? void 0 : c.call(t, "2d");
  if (!i) return;
  const s = Math.max(1, Math.min(2, o || 1));
  i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, t.width, t.height), i.setTransform(s, 0, 0, s, 0, 0);
  for (const h of e) or(i, h, r);
  n && or(i, n, r), i.setTransform(1, 0, 0, 1, 0, 0);
}
const la = 0.1, ua = 4, wn = 14, da = 4, ir = ["note", "card", "rect", "ellipse", "text", "image"], fa = 400;
function ha({
  drawing: t,
  containerRef: e,
  editorRef: n,
  pointers: r,
  interactionRef: o,
  editingIdRef: i,
  cameraRef: s,
  shapesRef: c,
  selectedRef: h,
  toolRef: m,
  penModeRef: l,
  activeColorRef: g,
  drawColorRef: a,
  drawStrokeWidth: u,
  drawInkStyle: d,
  camera: v,
  shapes: x,
  selected: f,
  isSpaceDown: p,
  textualTypes: y,
  setShapes: w,
  setEditingId: $,
  applyInteraction: b,
  selectNow: X,
  beginHistory: k,
  cancelHistory: M,
  commit: E,
  onToolChange: Y,
  expandToGroups: C,
  toPage: L,
  createId: T,
  liveStrokeCanvasRef: F,
  activeDrawRef: P,
  pendingDrawsRef: N,
  setIsPenMode: W
}) {
  const O = T, U = Q(null), A = (I, _) => {
    var bt;
    const V = ((bt = e.current) == null ? void 0 : bt.dataset.canvasActiveTool) === "text" ? "text" : m.current;
    if (V !== "note" && V !== "text") return;
    const ht = L(I, _), Ct = V === "note" ? { id: O(), type: "note", x: ht.x - 90, y: ht.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: O(), type: "text", x: ht.x, y: ht.y - 22, w: 220, h: 44, text: "" };
    E((It) => [...It, Ct]), X(/* @__PURE__ */ new Set([Ct.id])), $(Ct.id), Y("select");
  };
  Mt(() => {
    const I = (V) => {
      var ht;
      (ht = e.current) != null && ht.contains(V.target) && (V.target instanceof Element && V.target.closest('[role="textbox"], [data-canvas-inspector]') || A(V.clientX, V.clientY));
    }, _ = (V) => {
      var ht;
      l.current && (V.preventDefault(), (ht = window.getSelection()) == null || ht.removeAllRanges());
    };
    return window.addEventListener("click", I, !0), document.addEventListener("selectstart", _, !0), () => {
      window.removeEventListener("click", I, !0), document.removeEventListener("selectstart", _, !0);
    };
  }, [e, l]);
  const R = () => {
    const [I, _] = [...r.current.values()], V = s.current;
    b({
      kind: "pinch",
      startDist: Math.hypot(_.x - I.x, _.y - I.y) || 1,
      startZoom: V.z,
      startMidX: (I.x + _.x) / 2,
      startMidY: (I.y + _.y) / 2,
      camX: V.x,
      camY: V.y
    });
  };
  return { onPointerDown: (I) => {
    var St, At, Rt;
    let _ = m.current;
    const V = I.target instanceof Element ? I.target : I.currentTarget, ht = I.currentTarget.hasPointerCapture(I.pointerId) || V.hasPointerCapture(I.pointerId);
    if (!l.current && ia(I, ht || oa()) && (M(), r.current.clear(), P.current = null, Ae(
      F.current,
      N.current,
      null,
      s.current,
      window.devicePixelRatio || 1
    ), b({ kind: "none" }), _ !== "draw" && _ !== "highlighter" && _ !== "eraser" && (_ = "draw", m.current = "draw", Y("draw")), W(!0)), l.current && I.pointerType === "touch") {
      if (I.cancelable && I.preventDefault(), o.current.kind !== "none") return;
      r.current.set(I.pointerId, { x: I.clientX, y: I.clientY });
      try {
        I.currentTarget.setPointerCapture(I.pointerId);
      } catch {
      }
      r.current.size === 2 && R();
      return;
    }
    if (!aa(l.current, I)) {
      I.cancelable && I.preventDefault();
      return;
    }
    Fe(I) && o.current.kind === "drawing" && t.finish(), l.current && Fe(I) && (o.current.kind === "none" || o.current.kind === "pinch") && (r.current.clear(), b({ kind: "none" }));
    const Ct = I.target instanceof Element ? I.target : null, bt = !!(Ct != null && Ct.closest("[data-canvas-editor]")) && i.current !== null;
    r.current.set(I.pointerId, { x: I.clientX, y: I.clientY });
    const It = o.current;
    if (It.kind === "drawing" && It.pointerId !== I.pointerId) {
      r.current.delete(I.pointerId);
      return;
    }
    !bt && I.cancelable && I.preventDefault();
    const at = I.currentTarget;
    try {
      at.setPointerCapture(I.pointerId);
    } catch {
    }
    if (r.current.size === 2) {
      R();
      return;
    }
    if (r.current.size > 2) return;
    if (I.button === 1 || p || _ === "hand" || I.button === 0 && _ === "select" && I.altKey) {
      b({ kind: "pan", startX: I.clientX, startY: I.clientY, camX: v.x, camY: v.y });
      return;
    }
    if (I.button !== 0) return;
    const q = L(I.clientX, I.clientY), Et = h.current;
    if (bt || ($(null), (St = n.current) == null || St.blur(), (At = e.current) == null || At.focus()), _ === "draw" || _ === "highlighter") {
      const dt = {
        id: O(),
        type: "draw",
        x: q.x,
        y: q.y,
        w: 0,
        h: 0,
        points: [[q.x, q.y]],
        color: a.current,
        strokeWidth: u,
        inkStyle: d,
        drawMode: _ === "highlighter" ? "highlighter" : "pen"
      };
      t.start(dt, I);
      return;
    }
    if (_ === "arrow" || _ === "frame" || po.includes(_)) {
      const dt = _, Lt = _ === "arrow" ? { id: O(), type: "arrow", x: q.x, y: q.y, w: 0, h: 0, color: g.current } : _ === "frame" ? { id: O(), type: "frame", x: q.x, y: q.y, w: 0, h: 0, text: "프레임" } : { id: O(), type: dt, x: q.x, y: q.y, w: 0, h: 0, color: g.current, text: "" };
      k(), w((S) => [...S, Lt]), b({ kind: "creating", id: Lt.id, startX: q.x, startY: q.y });
      return;
    }
    if (_ === "note" || _ === "text") return;
    if (_ === "eraser") {
      k(), w((dt) => ui(dt, q.x, q.y, wn, v.z)), b({ kind: "erasing", lastX: q.x, lastY: q.y });
      return;
    }
    if (_ === "lasso") {
      U.current = null, b({
        kind: "lasso",
        points: [{ x: q.x, y: q.y }],
        baseSelection: [...Et],
        additive: I.shiftKey
      });
      return;
    }
    const kt = new Map(x.map((dt) => [dt.id, dt])), $t = i.current ? x.find((dt) => dt.id === i.current) : void 0, ot = bt && $t ? $t : [...x].reverse().find((dt) => dn(dt, q.x, q.y, v.z, kt, x));
    if (!ot)
      U.current = null;
    else {
      const dt = Date.now(), Lt = !I.shiftKey && y.includes(ot.type) && ((Rt = U.current) == null ? void 0 : Rt.id) === ot.id && dt - U.current.time < fa, S = Lt ? ot.id : void 0;
      U.current = Lt ? null : { id: ot.id, time: dt };
      const H = I.shiftKey ? new Set(Et).add(ot.id) : Et.has(ot.id) ? Et : /* @__PURE__ */ new Set([ot.id]), Z = C(H);
      X(Z);
      const lt = /* @__PURE__ */ new Map();
      for (const ut of x) Z.has(ut.id) && lt.set(ut.id, ut);
      for (const ut of x) {
        if (ut.type !== "frame" || !Z.has(ut.id)) continue;
        const zt = wt(ut);
        for (const Bt of x) {
          if (Bt.id === ut.id || lt.has(Bt.id)) continue;
          const gt = Ft(Bt);
          gt.x >= zt.minX && gt.x <= zt.maxX && gt.y >= zt.minY && gt.y <= zt.maxY && lt.set(Bt.id, Bt);
        }
      }
      k(), b({ kind: "move", startX: q.x, startY: q.y, origin: lt, editOnReleaseId: S });
      return;
    }
    I.shiftKey || X(/* @__PURE__ */ new Set()), b({
      kind: "marquee",
      startX: q.x,
      startY: q.y,
      curX: q.x,
      curY: q.y,
      screenStartX: I.clientX,
      screenStartY: I.clientY
    });
  }, onResizeHandleDown: (I, _, V) => {
    I.stopPropagation(), r.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), k(), b({ kind: "resize", id: _.id, handle: V, start: _ });
  }, onRotateHandleDown: (I, _) => {
    I.stopPropagation(), r.current.set(I.pointerId, { x: I.clientX, y: I.clientY });
    const V = L(I.clientX, I.clientY), ht = Ft(_);
    k(), b({
      kind: "rotate",
      id: _.id,
      startAngle: Math.atan2(V.y - ht.y, V.x - ht.x),
      startRotation: _.rotation ?? 0
    });
  }, onConnectHandleDown: (I, _) => {
    I.stopPropagation(), r.current.set(I.pointerId, { x: I.clientX, y: I.clientY });
    const V = L(I.clientX, I.clientY);
    b({ kind: "connect", fromId: _.id, toX: V.x, toY: V.y, hoverId: null });
  }, onBendHandleDown: (I, _) => {
    I.stopPropagation(), r.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), k(), b({ kind: "bend", id: _.id });
  }, onOrthogonalSegmentHandleDown: (I, _, V) => {
    I.stopPropagation(), r.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), k(), b({ kind: "orthogonal-segment", id: _.id, segmentIndex: V });
  }, onArrowEndpointDown: (I, _, V) => {
    I.stopPropagation(), r.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), k(), b({ kind: "arrow-endpoint", id: _.id, endpoint: V, hoverId: null });
  } };
}
function xa({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: r,
  shapesRef: o,
  setShapes: i,
  setEditingId: s,
  setEraserPos: c,
  setGuides: h,
  setAnnouncement: m,
  applyInteraction: l,
  selectNow: g,
  expandToGroups: a,
  endHistory: u,
  commit: d,
  onToolChange: v,
  createId: x,
  drawing: f
}) {
  const p = x;
  Mt(() => {
    const y = (w) => {
      var b, X;
      if (!t.current.delete(w.pointerId)) return;
      try {
        (X = (b = w.target) == null ? void 0 : b.releasePointerCapture) == null || X.call(b, w.pointerId);
      } catch {
      }
      const $ = e.current;
      if ($.kind !== "none") {
        if ($.kind === "pinch") {
          t.current.size < 2 && l({ kind: "none" });
          return;
        }
        if (h([]), $.kind === "lasso") {
          if (w.type === "pointerup") {
            const k = r(w.clientX, w.clientY), M = $.points[$.points.length - 1], E = M && Math.hypot(k.x - M.x, k.y - M.y) > 1e-9 ? [...$.points, k] : $.points, Y = E.length >= 3 ? o.current.filter((L) => oi(Ft(L), E)).map((L) => L.id) : [], C = $.additive ? $.baseSelection : [];
            g(a(/* @__PURE__ */ new Set([...C, ...Y]))), m(Y.length > 0 ? `${Y.length}개 올가미 선택됨` : "올가미 안에 선택할 항목이 없습니다");
          }
          l({ kind: "none" });
          return;
        }
        if ($.kind === "erasing") {
          if (w.type === "pointerup") {
            const k = r(w.clientX, w.clientY);
            i((M) => gn(
              M,
              { x: $.lastX, y: $.lastY },
              k,
              wn,
              n.current.z
            ));
          }
          c(null), u(), l({ kind: "none" });
          return;
        }
        if ($.kind === "connect") {
          const M = o.current.find((F) => F.id === $.fromId);
          if (l({ kind: "none" }), !M) return;
          const E = { x: $.toX, y: $.toY }, Y = Ft(M);
          if (!$.hoverId && Math.hypot(E.x - Y.x, E.y - Y.y) < 30) return;
          const C = [];
          let L = $.hoverId;
          if (!L) {
            const F = M.type === "note" ? 180 : 200, P = M.type === "note" ? 180 : 120, N = {
              ...M,
              id: p(),
              x: E.x - F / 2,
              y: E.y - P / 2,
              w: F,
              h: P,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            C.push(N), L = N.id;
          }
          const T = {
            id: p(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: M.id,
            toId: L,
            text: ""
          };
          C.push(T), d((F) => [...F, ...C]), g(/* @__PURE__ */ new Set([T.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => s(T.id)) : s(T.id), m("연결 생성됨");
          return;
        }
        if ($.kind === "bend") {
          u(), l({ kind: "none" });
          return;
        }
        if ($.kind === "drawing") {
          f.finish(w);
          return;
        }
        if ($.kind === "creating") {
          i((k) => k.map((M) => {
            if (M.id !== $.id) return M;
            const E = Math.abs(M.w) < 4 && Math.abs(M.h) < 4 ? {
              ...M,
              w: M.type === "arrow" ? 200 : M.type === "frame" ? 480 : 180,
              h: M.type === "arrow" ? 0 : M.type === "frame" ? 320 : 120
            } : M;
            if (E.type === "arrow") return E;
            const Y = qt(E);
            return { ...E, x: Y.minX, y: Y.minY, w: Y.maxX - Y.minX, h: Y.maxY - Y.minY };
          })), u(), g(/* @__PURE__ */ new Set([$.id])), v("select"), l({ kind: "none" });
          return;
        }
        if (($.kind === "move" || $.kind === "resize" || $.kind === "rotate" || $.kind === "orthogonal-segment" || $.kind === "arrow-endpoint") && u(), $.kind === "move" && $.editOnReleaseId && w.type === "pointerup") {
          const k = r(w.clientX, w.clientY);
          Math.hypot(k.x - $.startX, k.y - $.startY) * n.current.z <= da && s($.editOnReleaseId);
        }
        l({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", y), window.addEventListener("pointercancel", y), () => {
      window.removeEventListener("pointerup", y), window.removeEventListener("pointercancel", y);
    };
  }, [
    l,
    n,
    x,
    f,
    u,
    e,
    v,
    t,
    g,
    a,
    m,
    s,
    h,
    c,
    i,
    o,
    r,
    d
  ]);
}
function bn() {
  return typeof navigator > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
function hn(t) {
  let e = [];
  if (!bn() && typeof t.getCoalescedEvents == "function")
    try {
      e = t.getCoalescedEvents();
    } catch {
    }
  return [...e, t].filter((n) => Number.isFinite(n.clientX) && Number.isFinite(n.clientY));
}
function pa({
  objectSnapEnabled: t,
  containerRef: e,
  pointers: n,
  interactionRef: r,
  cameraRef: o,
  shapesRef: i,
  setCamera: s,
  setShapes: c,
  setEraserPos: h,
  setGuides: m,
  applyInteraction: l,
  selectNow: g,
  expandToGroups: a,
  toPage: u,
  drawing: d
}) {
  Mt(() => {
    const v = (x) => {
      var w, $;
      if (!n.current.has(x.pointerId)) return;
      n.current.set(x.pointerId, { x: x.clientX, y: x.clientY });
      const f = r.current;
      if (f.kind === "none") return;
      const p = o.current;
      if (f.kind === "pinch") {
        if (n.current.size < 2) return;
        const [b, X] = [...n.current.values()], k = Math.hypot(X.x - b.x, X.y - b.y) || 1, M = (b.x + X.x) / 2, E = (b.y + X.y) / 2, Y = (w = e.current) == null ? void 0 : w.getBoundingClientRect();
        if (!Y) return;
        const C = Math.min(ua, Math.max(la, f.startZoom * (k / f.startDist))), L = f.camX + (f.startMidX - Y.left) / f.startZoom, T = f.camY + (f.startMidY - Y.top) / f.startZoom;
        s({ x: L - (M - Y.left) / C, y: T - (E - Y.top) / C, z: C });
        return;
      }
      if (f.kind === "pan") {
        s({
          x: f.camX - (x.clientX - f.startX) / p.z,
          y: f.camY - (x.clientY - f.startY) / p.z,
          z: p.z
        });
        return;
      }
      const y = u(x.clientX, x.clientY);
      if (f.kind === "erasing") {
        const b = hn(x).map((M) => u(M.clientX, M.clientY)), X = [{ x: f.lastX, y: f.lastY }, ...b];
        c((M) => {
          let E = M;
          for (let Y = 1; Y < X.length; Y++)
            E = gn(E, X[Y - 1], X[Y], wn, p.z);
          return E;
        });
        const k = b.at(-1);
        k && (h(k), l({ kind: "erasing", lastX: k.x, lastY: k.y }));
        return;
      }
      if (f.kind === "connect") {
        const b = i.current, X = new Map(b.map((M) => [M.id, M])), k = [...b].reverse().find((M) => M.id !== f.fromId && ir.includes(M.type) && dn(M, y.x, y.y, p.z, X, b));
        l({ ...f, toX: y.x, toY: y.y, hoverId: (k == null ? void 0 : k.id) ?? null });
        return;
      }
      if (f.kind === "bend") {
        const b = i.current, X = b.find((F) => F.id === f.id);
        if (!X) return;
        const k = Ot(X, new Map(b.map((F) => [F.id, F])), b), M = k.end.x - k.start.x, E = k.end.y - k.start.y, Y = Math.hypot(M, E) || 1, C = (k.start.x + k.end.x) / 2, L = (k.start.y + k.end.y) / 2, T = (y.x - C) * (-E / Y) + (y.y - L) * (M / Y);
        c((F) => F.map((P) => P.id === f.id ? { ...P, bend: T } : P));
        return;
      }
      if (f.kind === "orthogonal-segment") {
        const b = i.current, X = b.find((T) => T.id === f.id);
        if (!X) return;
        const k = Ot(X, new Map(b.map((T) => [T.id, T])), b), M = k.routing === "orthogonal" ? k.pathPoints : void 0;
        if (!M || M.length < 2) return;
        const E = M[f.segmentIndex], Y = M[f.segmentIndex + 1];
        if (!E || !Y) return;
        const C = E.x === Y.x ? y.x : y.y, L = Do(M, f.segmentIndex, C);
        c((T) => T.map((F) => F.id === f.id ? { ...F, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: L.slice(1, -1).map((P) => ({ x: P.x, y: P.y })) } : F));
        return;
      }
      if (f.kind === "arrow-endpoint") {
        const b = i.current, X = b.find((L) => L.id === f.id);
        if (!X) return;
        const k = new Map(b.map((L) => [L.id, L])), M = Ot(X, k, b), E = f.endpoint === "start" ? M.end : M.start, Y = [...b].reverse().find((L) => L.id !== X.id && ir.includes(L.type) && dn(L, y.x, y.y, p.z, k, b)), C = Y ? ce(Y, E.x, E.y) : { x: y.x, y: y.y };
        l({ ...f, hoverId: (Y == null ? void 0 : Y.id) ?? null }), c((L) => L.map((T) => {
          if (T.id !== X.id) return T;
          const F = f.endpoint === "start" ? C : E, P = f.endpoint === "end" ? C : E;
          return {
            ...T,
            x: F.x,
            y: F.y,
            w: P.x - F.x,
            h: P.y - F.y,
            fromId: f.endpoint === "start" ? Y == null ? void 0 : Y.id : T.fromId,
            toId: f.endpoint === "end" ? Y == null ? void 0 : Y.id : T.toId
          };
        }));
        return;
      }
      if (f.kind === "marquee") {
        l({ ...f, curX: y.x, curY: y.y });
        const b = Math.min(f.startX, y.x), X = Math.max(f.startX, y.x), k = Math.min(f.startY, y.y), M = Math.max(f.startY, y.y), E = Math.min(f.screenStartX, x.clientX), Y = Math.max(f.screenStartX, x.clientX), C = Math.min(f.screenStartY, x.clientY), L = Math.max(f.screenStartY, x.clientY), T = /* @__PURE__ */ new Map();
        ($ = e.current) == null || $.querySelectorAll("[data-canvas-shape-id]").forEach((P) => {
          const N = P.dataset.canvasShapeId;
          N && T.set(N, P.getBoundingClientRect());
        });
        const F = i.current.filter((P) => {
          const N = T.get(P.id);
          if (N)
            return N.right >= E && N.left <= Y && N.bottom >= C && N.top <= L;
          const W = wt(P);
          return W.maxX >= b && W.minX <= X && W.maxY >= k && W.minY <= M;
        }).map((P) => P.id);
        g(a(new Set(F)));
        return;
      }
      if (f.kind === "lasso") {
        const b = 2 / Math.max(p.z, 0.1);
        let X = f.points;
        for (const k of hn(x)) {
          const M = u(k.clientX, k.clientY), E = X[X.length - 1];
          (!E || Math.hypot(M.x - E.x, M.y - E.y) >= b) && (X = [...X, M]);
        }
        X !== f.points && l({ ...f, points: X });
        return;
      }
      if (f.kind === "move") {
        let b = y.x - f.startX, X = y.y - f.startY;
        const k = f.origin;
        if (t) {
          const M = (() => {
            let C = 1 / 0, L = 1 / 0, T = -1 / 0, F = -1 / 0;
            return k.forEach((P) => {
              const N = wt({ ...P, x: P.x + b, y: P.y + X });
              C = Math.min(C, N.minX), L = Math.min(L, N.minY), T = Math.max(T, N.maxX), F = Math.max(F, N.maxY);
            }), { minX: C, minY: L, maxX: T, maxY: F };
          })(), E = i.current.filter((C) => !k.has(C.id)), Y = di(M, E, p.z);
          b += Y.dx, X += Y.dy, m(Y.guides);
        } else
          m([]);
        c((M) => M.map((E) => {
          var C;
          const Y = k.get(E.id);
          return Y ? {
            ...E,
            x: Y.x + b,
            y: Y.y + X,
            points: (C = Y.points) == null ? void 0 : C.map(([L, T]) => [L + b, T + X]),
            ...Y.type === "arrow" && Y.orthogonalWaypoints ? { orthogonalWaypoints: Y.orthogonalWaypoints.map((L) => ({ x: L.x + b, y: L.y + X })) } : {}
          } : E;
        }));
        return;
      }
      if (f.kind === "drawing") {
        if (f.pointerId !== x.pointerId) return;
        d.move(x);
        return;
      }
      if (f.kind === "creating") {
        c((b) => b.map((X) => X.id === f.id ? { ...X, w: y.x - f.startX, h: y.y - f.startY } : X));
        return;
      }
      if (f.kind === "rotate") {
        const b = i.current.find((E) => E.id === f.id);
        if (!b) return;
        const X = Ft(b), k = Math.atan2(y.y - X.y, y.x - X.x);
        let M = f.startRotation + (k - f.startAngle);
        x.shiftKey && (M = Math.round(M / (Math.PI / 12)) * (Math.PI / 12)), c((E) => E.map((Y) => Y.id === f.id ? { ...Y, rotation: M } : Y));
        return;
      }
      if (f.kind === "resize") {
        const { start: b, handle: X } = f, k = Te(b, y.x, y.y);
        c((M) => M.map((E) => {
          if (E.id !== b.id) return E;
          let { x: Y, y: C, w: L, h: T } = b;
          if (X.includes("e") && (L = Math.max(20, k.x - b.x)), X.includes("s") && (T = Math.max(20, k.y - b.y)), X.includes("w")) {
            const F = b.x + b.w;
            Y = Math.min(k.x, F - 20), L = F - Y;
          }
          if (X.includes("n")) {
            const F = b.y + b.h;
            C = Math.min(k.y, F - 20), T = F - C;
          }
          return { ...E, x: Y, y: C, w: L, h: T, manualSize: E.type === "text" ? !0 : E.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", v), () => {
      window.removeEventListener("pointermove", v);
    };
  }, [
    l,
    o,
    e,
    d,
    a,
    r,
    t,
    n,
    g,
    i,
    u
  ]);
}
function va(t) {
  pa(t), xa(t);
}
function ma(t) {
  const e = Q(t);
  e.current = t;
  const n = Q([]), r = Q(null), o = Q(null), i = Q(null), s = Wt(() => {
    const c = () => {
      const a = e.current;
      Ae(
        a.liveStrokeCanvasRef.current,
        a.pendingDrawsRef.current,
        a.activeDrawRef.current,
        a.cameraRef.current,
        window.devicePixelRatio || 1
      );
    }, h = () => {
      r.current !== null && cancelAnimationFrame(r.current), r.current = null;
    }, m = () => {
      var v;
      const a = e.current, u = a.activeDrawRef.current, d = n.current.splice(0);
      (u == null ? void 0 : u.id) === ((v = i.current) == null ? void 0 : v.shapeId) && (u != null && u.points) && rr(u.points, d, a.cameraRef.current.z, u.type === "draw" ? u.inkStyle : void 0);
    }, l = () => {
      o.current = null;
      const a = e.current, u = a.pendingDrawsRef.current.filter((d) => !a.queuedDrawIdsRef.current.has(d.id));
      if (u.length !== 0) {
        for (const d of u) a.queuedDrawIdsRef.current.add(d.id);
        a.commitDrawBatch(u);
      }
    };
    return {
      start(a, u) {
        h(), n.current = [], i.current = { shapeId: a.id, pointerId: u.pointerId, raw: !1 }, e.current.activeDrawRef.current = a, e.current.applyInteraction({ kind: "drawing", id: a.id, pointerId: u.pointerId }), c();
      },
      move(a) {
        const u = e.current, d = i.current, v = u.activeDrawRef.current;
        if (!(!d || d.pointerId !== a.pointerId || (v == null ? void 0 : v.id) !== d.shapeId || !v.points || u.interactionRef.current.kind !== "drawing")) {
          if (a.type === "pointerrawupdate") {
            if (bn()) return;
            d.raw = !0;
          } else if (d.raw)
            return;
          if (a.shiftKey) {
            h(), n.current = [];
            const x = u.toPage(a.clientX, a.clientY);
            v.points = [v.points[0], [x.x, x.y]], c();
            return;
          }
          for (const x of hn(a)) {
            const f = u.toPage(x.clientX, x.clientY);
            n.current.push([f.x, f.y]);
          }
          r.current === null && (r.current = requestAnimationFrame(() => {
            r.current = null, m(), c();
          }));
        }
      },
      finish: (a, u = !1) => {
        const d = i.current;
        if (a && (d == null ? void 0 : d.pointerId) !== a.pointerId) return;
        const v = e.current;
        h(), m();
        const x = v.activeDrawRef.current;
        if (d && (x == null ? void 0 : x.id) === d.shapeId && x.points) {
          if ((a == null ? void 0 : a.type) === "pointerup" && Number.isFinite(a.clientX) && Number.isFinite(a.clientY)) {
            const f = v.toPage(a.clientX, a.clientY);
            rr(x.points, [[f.x, f.y]], v.cameraRef.current.z, x.type === "draw" ? x.inkStyle : void 0);
          }
          v.pendingDrawsRef.current.push(sa(x)), v.activeDrawRef.current = null, v.pointers.current.delete(d.pointerId), v.interactionRef.current.kind === "drawing" && v.applyInteraction({ kind: "none" }), c();
        }
        i.current = null, u ? (o.current !== null && cancelAnimationFrame(o.current), l()) : o.current === null && (o.current = requestAnimationFrame(l));
      },
      cancel() {
        var d;
        h(), n.current = [];
        const a = e.current, u = i.current;
        u && ((d = a.activeDrawRef.current) == null ? void 0 : d.id) === u.shapeId && (a.activeDrawRef.current = null, a.pointers.current.delete(u.pointerId), a.interactionRef.current.kind === "drawing" && a.applyInteraction({ kind: "none" }), c()), i.current = null;
      }
    };
  }, []);
  return Mt(() => {
    const c = t.containerRef.current, h = (a) => {
      a.target === c && e.current.pointers.current.has(a.pointerId) && !(c != null && c.hasPointerCapture(a.pointerId)) && s.finish(a);
    }, m = () => {
      s.finish(void 0, !0);
      const a = e.current;
      a.interactionRef.current.kind === "pinch" && a.applyInteraction({ kind: "none" }), a.interactionRef.current.kind === "none" && a.pointers.current.clear();
    }, l = () => {
      document.visibilityState === "hidden" && m();
    }, g = (a) => {
      a.key === "Escape" && i.current && a.target instanceof Node && (c != null && c.contains(a.target)) && (a.preventDefault(), s.cancel());
    };
    return window.addEventListener("pointerrawupdate", s.move), window.addEventListener("blur", m), window.addEventListener("keydown", g), document.addEventListener("visibilitychange", l), c == null || c.addEventListener("lostpointercapture", h), () => {
      window.removeEventListener("pointerrawupdate", s.move), window.removeEventListener("blur", m), window.removeEventListener("keydown", g), document.removeEventListener("visibilitychange", l), c == null || c.removeEventListener("lostpointercapture", h), r.current !== null && cancelAnimationFrame(r.current), o.current !== null && cancelAnimationFrame(o.current), r.current = null, o.current = null, n.current = [], i.current = null;
    };
  }, [s, t.containerRef]), s;
}
function ga({ containerRef: t, penModeRef: e, toolRef: n }) {
  Mt(() => {
    const r = t.current;
    if (!r) return;
    const o = r.ownerDocument, i = o.defaultView, s = /* @__PURE__ */ new Set(), c = (l) => {
      const g = Array.from(l.changedTouches), a = l.type !== "touchstart" && g.some((p) => s.has(p.identifier));
      if (l.type !== "touchstart")
        for (const p of g) s.delete(p.identifier);
      if (l.type === "touchcancel") return;
      const u = l.target instanceof Element ? l.target : null;
      if (u != null && u.closest("button, input, textarea, select, a, [data-canvas-inspector], [data-canvas-pen-palette]")) return;
      const d = n.current, v = d === "draw" || d === "highlighter" || d === "eraser", x = g.some((p) => p.touchType === "stylus"), f = l.type === "touchstart" && bn() && d !== "note" && d !== "text" && !(u != null && u.closest('[contenteditable="true"]')) && g.some((p) => {
        const y = p.radiusX || 0;
        return p.clientX - y < 10 || p.clientX + y > ((i == null ? void 0 : i.innerWidth) ?? 1 / 0) - 10;
      });
      if (!(!a && !e.current && !v && !x && !f)) {
        if (l.type === "touchstart")
          for (const p of g)
            Number.isFinite(p.identifier) && s.add(p.identifier);
        l.cancelable && l.preventDefault();
      }
    }, h = (l) => {
      const g = l.target instanceof Node && r.contains(l.target), a = o.activeElement && r.contains(o.activeElement);
      (g || a) && l.cancelable && l.preventDefault();
    }, m = { passive: !1, capture: !0 };
    for (const l of ["touchstart", "touchend", "touchcancel"])
      r.addEventListener(l, c, m);
    for (const l of ["gesturestart", "gesturechange", "gestureend"])
      o.addEventListener(l, h, m);
    return () => {
      for (const l of ["touchstart", "touchend", "touchcancel"])
        r.removeEventListener(l, c, !0);
      for (const l of ["gesturestart", "gesturechange", "gestureend"])
        o.removeEventListener(l, h, !0);
    };
  }, [t, e, n]);
}
function ya({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: r,
  editingIdRef: o,
  cameraRef: i,
  shapesRef: s,
  selectedRef: c,
  toolRef: h,
  penModeRef: m,
  activeColorRef: l,
  drawColorRef: g,
  drawStrokeWidth: a,
  drawInkStyle: u,
  objectSnapEnabled: d,
  camera: v,
  shapes: x,
  selected: f,
  isSpaceDown: p,
  textualTypes: y,
  setCamera: w,
  setShapes: $,
  setEditingId: b,
  setEraserPos: X,
  setGuides: k,
  setAnnouncement: M,
  applyInteraction: E,
  selectNow: Y,
  beginHistory: C,
  endHistory: L,
  cancelHistory: T,
  commit: F,
  onToolChange: P,
  expandToGroups: N,
  toPage: W,
  createId: O,
  liveStrokeCanvasRef: U,
  activeDrawRef: A,
  pendingDrawsRef: R,
  queuedDrawIdsRef: J,
  commitDrawBatch: rt,
  setIsPenMode: it
}) {
  ga({ containerRef: t, penModeRef: m, toolRef: h });
  const et = ma({
    containerRef: t,
    pointers: n,
    interactionRef: r,
    cameraRef: i,
    toPage: W,
    applyInteraction: E,
    liveStrokeCanvasRef: U,
    activeDrawRef: A,
    pendingDrawsRef: R,
    queuedDrawIdsRef: J,
    commitDrawBatch: rt
  }), xt = ha({
    drawing: et,
    containerRef: t,
    editorRef: e,
    pointers: n,
    interactionRef: r,
    editingIdRef: o,
    cameraRef: i,
    shapesRef: s,
    selectedRef: c,
    toolRef: h,
    penModeRef: m,
    activeColorRef: l,
    drawColorRef: g,
    drawStrokeWidth: a,
    drawInkStyle: u,
    camera: v,
    shapes: x,
    selected: f,
    isSpaceDown: p,
    textualTypes: y,
    setShapes: $,
    setEditingId: b,
    applyInteraction: E,
    selectNow: Y,
    beginHistory: C,
    cancelHistory: T,
    commit: F,
    onToolChange: P,
    expandToGroups: N,
    toPage: W,
    createId: O,
    liveStrokeCanvasRef: U,
    activeDrawRef: A,
    pendingDrawsRef: R,
    setIsPenMode: it
  });
  return va({
    objectSnapEnabled: d,
    drawing: et,
    containerRef: t,
    pointers: n,
    interactionRef: r,
    cameraRef: i,
    shapesRef: s,
    setCamera: w,
    setShapes: $,
    setEditingId: b,
    setEraserPos: X,
    setGuides: k,
    setAnnouncement: M,
    applyInteraction: E,
    selectNow: Y,
    endHistory: L,
    commit: F,
    onToolChange: P,
    expandToGroups: N,
    toPage: W,
    createId: O
  }), xt;
}
function wa(t) {
  ta(t);
  const e = Wt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return ra({ ...t, toolRef: e }), ya(t);
}
function ba({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: r,
  zoom: o
}) {
  const i = n || r.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" || e === "lasso" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", s = t ? G.gridDark : G.gridLight, c = 40 * o;
  return { cursor: i, gridColor: s, gridSize: c, strokeColorOf: (m) => m.strokeColor ? We(m) : m.color ? pt[m.color].border : t ? "var(--canvas-slate-200)" : G.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = No, document.head.appendChild(t);
}
const ar = 0.1, sr = 4, cr = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function Tr(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function lr(t, e, n) {
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
        return Tr(r);
    }
  });
}
function ur(t, e, n) {
  return t.map((r) => e.has(r.id) && r.type === "draw" ? { ...r, ...n } : r);
}
function dr(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const za = co(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: r,
  activeColor: o,
  defaultActiveColor: i,
  onActiveColorChange: s,
  drawStrokeWidth: c = 4,
  onToolChange: h,
  onDirty: m,
  onZoomChange: l,
  onSelectionChange: g,
  shapes: a,
  onShapesChange: u,
  peerCursors: d,
  onLocalCursor: v,
  renderDiagram: x,
  drawInkStyle: f,
  onDrawInkStyleChange: p,
  objectSnapEnabled: y,
  onObjectSnapEnabledChange: w,
  showGrid: $,
  onShowGridChange: b
}, X) {
  var zn, Xn;
  const { drawInkStyle: k, objectSnapEnabled: M, showGrid: E, selectInkStyle: Y, selectObjectSnap: C } = Ri({
    drawInkStyle: f,
    onDrawInkStyleChange: p,
    objectSnapEnabled: y,
    onObjectSnapEnabledChange: w,
    showGrid: $,
    onShowGridChange: b
  }), [L, T] = Vt.useState(c);
  Vt.useEffect(() => T(c), [c]);
  const {
    containerRef: F,
    editorRef: P,
    setLocalShapes: N,
    controlled: W,
    shapes: O,
    setShapes: U,
    camera: A,
    setCamera: R,
    cameraRef: J,
    selected: rt,
    selectedRef: it,
    editingId: et,
    setEditingId: xt,
    editingIdRef: mt,
    interaction: tt,
    interactionRef: I,
    applyInteraction: _,
    isSpaceDown: V,
    setIsSpaceDown: ht,
    guides: Ct,
    setGuides: bt,
    announcement: It,
    setAnnouncement: at,
    showInspectorPalette: q,
    setShowInspectorPalette: Et,
    eraserPos: kt,
    setEraserPos: $t,
    isPenMode: ot,
    setIsPenMode: St,
    penModeRef: At,
    setActiveColor: Rt,
    activeColorRef: dt,
    drawColor: Lt,
    setDrawColor: S,
    drawColorRef: H,
    installedFontFamilies: Z,
    pointers: lt,
    past: ut,
    future: zt,
    selectNow: Bt,
    commit: gt,
    deleteSelection: le,
    beginHistory: je,
    endHistory: Re,
    cancelHistory: Be,
    toPage: $e,
    viewportCentre: Ke,
    expandToGroups: Ue,
    toolRef: Ge,
    shapesRef: Kt,
    liveStrokeCanvasRef: D,
    activeDrawRef: B,
    pendingDrawsRef: j,
    queuedDrawIdsRef: st,
    commitDrawBatch: Zt
  } = Bi({ boardIdentity: e, tool: r, activeColor: o, defaultActiveColor: i, onActiveColorChange: s, controlledShapes: a, onShapesChange: u, onDirty: m });
  ae(() => {
    const nt = D.current, Tt = F.current;
    if (!nt || !Tt) return;
    const vt = () => {
      const Me = ca(nt, Tt.clientWidth, Tt.clientHeight, window.devicePixelRatio || 1), Se = new Set(O.map((ue) => ue.id));
      j.current = j.current.filter((ue) => !Se.has(ue.id));
      for (const ue of Se) st.current.delete(ue);
      Ae(nt, j.current, B.current, J.current, Me);
    };
    if (vt(), typeof ResizeObserver > "u")
      return window.addEventListener("resize", vt), () => window.removeEventListener("resize", vt);
    const Qt = new ResizeObserver(vt);
    return Qt.observe(Tt), window.addEventListener("resize", vt), () => {
      Qt.disconnect(), window.removeEventListener("resize", vt);
    };
  }, [B, A, J, F, D, j, st, O]);
  const Ut = Ui({
    containerRef: F,
    shapesRef: Kt,
    selectedRef: it,
    commit: gt,
    deleteSelection: le,
    selectNow: Bt,
    setAnnouncement: at,
    createId: dr
  }), {
    inspectorSelection: ve,
    inspectorShape: kn,
    onContainerPointerMove: Dr,
    onContainerPointerLeave: Fr
  } = Ki({
    containerRef: F,
    camera: A,
    setCamera: R,
    minZoom: ar,
    maxZoom: sr,
    shapes: O,
    selected: rt,
    editingId: et,
    textualTypes: cr,
    onZoomChange: l,
    onSelectionChange: g,
    onLocalCursor: v,
    toPage: $e
  }), Ve = Vt.useCallback((nt) => {
    const Tt = new Set(it.current);
    Tt.size !== 0 && gt((vt) => lr(vt, Tt, nt));
  }, [gt, it]), Ar = Vt.useCallback((nt) => {
    T(nt), Ve(nt);
  }, [Ve]), Wr = Vt.useCallback((nt) => {
    S(nt);
    const Tt = new Set(
      Kt.current.filter((vt) => vt.type === "draw" && it.current.has(vt.id)).map((vt) => vt.id)
    );
    Tt.size > 0 && gt((vt) => ur(vt, Tt, { color: nt }));
  }, [gt, it, S, Kt]), {
    onPointerDown: Or,
    onResizeHandleDown: _r,
    onRotateHandleDown: Hr,
    onConnectHandleDown: jr,
    onBendHandleDown: Rr,
    onOrthogonalSegmentHandleDown: Br,
    onArrowEndpointDown: Kr
  } = wa({
    ref: X,
    containerRef: F,
    editorRef: P,
    pointers: lt,
    interactionRef: I,
    cameraRef: J,
    shapesRef: Kt,
    toolRef: Ge,
    penModeRef: At,
    activeColorRef: dt,
    drawColorRef: H,
    setDrawColor: S,
    setActiveColor: Rt,
    drawStrokeWidth: L,
    drawInkStyle: k,
    objectSnapEnabled: M,
    setSelectedStrokeWidth: Ve,
    camera: A,
    shapes: O,
    selected: rt,
    isSpaceDown: V,
    setCamera: R,
    setShapes: U,
    setEditingId: xt,
    setEraserPos: $t,
    setGuides: bt,
    setAnnouncement: at,
    applyInteraction: _,
    selectNow: Bt,
    selectionActions: Ut,
    past: ut,
    future: zt,
    beginHistory: je,
    endHistory: Re,
    cancelHistory: Be,
    commit: gt,
    deleteSelection: le,
    onDirty: m,
    onToolChange: h,
    controlled: W,
    isDarkMode: n,
    minZoom: ar,
    maxZoom: sr,
    textualTypes: cr,
    selectedRef: it,
    editingIdRef: mt,
    setIsSpaceDown: ht,
    viewportCentre: Ke,
    setLocalShapes: N,
    expandToGroups: Ue,
    toPage: $e,
    createId: dr,
    liveStrokeCanvasRef: D,
    activeDrawRef: B,
    pendingDrawsRef: j,
    queuedDrawIdsRef: st,
    commitDrawBatch: Zt,
    setIsPenMode: St
  }), { cursor: Ur, gridColor: Gr, gridSize: $n, strokeColorOf: Vr } = ba({
    isDarkMode: n,
    tool: r === "highlighter" ? "draw" : r,
    isSpaceDown: V,
    interaction: tt,
    zoom: A.z
  }), Mn = (nt) => {
    const Tt = it.current, vt = mt.current, Qt = new Set(Tt);
    if (vt && Qt.add(vt), Qt.size === 0) return;
    const Me = "strokeWidth" in nt, Se = Object.keys(nt).every((Xt) => Xt === "color" || Xt === "fillColor" || Xt === "strokeColor" || Xt === "strokeWidth");
    if (ve.length > 0 && ve.every((Xt) => Xt.type === "draw") && Se) {
      const Xt = "color" in nt ? nt.color : void 0, Nt = "strokeWidth" in nt ? nt.strokeWidth : void 0, Yn = "strokeColor" in nt ? nt.strokeColor : void 0;
      gt((ao) => ur(ao, Qt, {
        ...Xt !== void 0 ? { color: Xt } : {},
        ...Nt !== void 0 ? { strokeWidth: Nt } : {},
        ...Yn !== void 0 ? { strokeColor: Yn } : {}
      }));
      return;
    }
    if (Me) {
      const Xt = nt.strokeWidth;
      if (Xt !== void 0 && Object.keys(nt).length === 1) {
        gt((Nt) => lr(Nt, Qt, Xt));
        return;
      }
    }
    gt((Xt) => Xt.map((Nt) => {
      if (!Qt.has(Nt.id)) return Nt;
      if (!Me) return { ...Nt, ...nt };
      switch (Nt.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...Nt, ...nt };
        case "note":
        case "card":
        case "text":
        case "image":
          return Nt;
        case "draw":
          return { ...Nt, ...nt };
        default:
          return Tr(Nt);
      }
    }));
  }, {
    commitEditorHtml: qr,
    applyFormat: Zr,
    applyList: Qr,
    onEditorKeyDown: Jr,
    applyCustomFontFamily: to
  } = ji({
    editorRef: P,
    editingId: et,
    setShapes: U,
    setAnnouncement: at,
    onDirty: m,
    patchSelected: Mn
  }), { renderEditor: eo, renderShapeBody: no } = _i({
    camera: A,
    editingId: et,
    isDarkMode: n,
    editorRef: P,
    commitEditorHtml: qr,
    onEditorKeyDown: Jr,
    setShapes: U,
    onDirty: m,
    renderDiagram: x
  }), ro = tt.kind === "marquee" ? tt : null, oo = tt.kind === "lasso" ? tt : null, io = Vt.useCallback(() => {
    var nt;
    lt.current.clear(), B.current = null, _({ kind: "none" }), Ae(
      D.current,
      j.current,
      null,
      J.current,
      window.devicePixelRatio || 1
    ), St(!1), h("select"), (nt = F.current) == null || nt.focus();
  }, [
    B,
    _,
    J,
    F,
    D,
    h,
    j,
    lt,
    St
  ]), { shapeById: Sn, visiblePaintOrder: Cn } = Hi({
    containerRef: F,
    shapesRef: Kt,
    shapes: O,
    camera: A,
    selected: rt,
    editingId: et,
    boardIdentity: e
  });
  return /* @__PURE__ */ K(
    "div",
    {
      ref: F,
      onPointerDown: Or,
      onPointerMove: Dr,
      onPointerLeave: Fr,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": r,
      "data-canvas-pen-mode": ot ? "true" : "false",
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
        cursor: Ur,
        background: n ? G.canvasDark : G.canvasLight,
        backgroundImage: E ? `radial-gradient(${Gr} 1px, transparent 1px)` : "none",
        backgroundSize: `${$n}px ${$n}px`,
        backgroundPosition: `${-A.x * A.z}px ${-A.y * A.z}px`
      },
      children: [
        /* @__PURE__ */ z("style", { children: '.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas .canvas-rich-text ul>li::before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style="dash"]>li::before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li::before{content:counter(canvas-list-item) ". "}' }),
        /* @__PURE__ */ z(
          "div",
          {
            "aria-live": "polite",
            role: "status",
            className: "absolute w-px h-px overflow-hidden whitespace-nowrap",
            style: { clip: "rect(0 0 0 0)", clipPath: "inset(50%)" },
            children: It
          }
        ),
        /* @__PURE__ */ z(
          hi,
          {
            visiblePaintOrder: Cn,
            selected: rt,
            shapeById: Sn,
            allShapes: Kt.current,
            camera: A,
            interaction: tt,
            eraserPos: kt,
            guides: M ? Ct : [],
            marquee: ro,
            lasso: oo,
            strokeColorOf: Vr
          }
        ),
        /* @__PURE__ */ z("canvas", { ref: D, "aria-hidden": "true", "data-canvas-live-strokes": "true", className: "absolute inset-0 w-full h-full pointer-events-none" }),
        /* @__PURE__ */ z(
          Xi,
          {
            visiblePaintOrder: Cn,
            selected: rt,
            editingId: et,
            camera: A,
            shapeById: Sn,
            allShapes: Kt.current,
            peerCursors: d,
            isDarkMode: n,
            renderEditor: eo,
            renderShapeBody: no,
            setEditingId: xt,
            onBendHandleDown: Rr,
            onOrthogonalSegmentHandleDown: Br,
            onResizeHandleDown: _r,
            onRotateHandleDown: Hr,
            onConnectHandleDown: jr,
            onArrowEndpointDown: Kr
          }
        ),
        kn && !ot && /* @__PURE__ */ z(
          Di,
          {
            shape: kn,
            selection: ve,
            selectionActions: Ut,
            shapes: O,
            camera: A,
            canvasSize: { width: ((zn = F.current) == null ? void 0 : zn.clientWidth) ?? 380, height: ((Xn = F.current) == null ? void 0 : Xn.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!et,
            showPalette: q,
            installedFontFamilies: Z,
            setShowPalette: Et,
            setActiveColor: Rt,
            patchSelected: Mn,
            applyFormat: Zr,
            applyList: Qr,
            applyCustomFontFamily: to
          }
        ),
        ot && /* @__PURE__ */ z(Wi, { isDarkMode: n, onExit: io }),
        /* @__PURE__ */ z(
          Ai,
          {
            tool: r,
            activeColor: Lt,
            drawStrokeWidth: L,
            drawInkStyle: k,
            objectSnapEnabled: M,
            onSelectInkStyle: Y,
            onSelectObjectSnap: C,
            isDarkMode: n,
            onSelectColor: Wr,
            onSelectStrokeWidth: Ar
          }
        )
      ]
    }
  );
});
export {
  pt as CANVAS_COLORS,
  fr as CANVAS_COLOR_KEYS,
  _t as CANVAS_FONTS,
  za as InfiniteCanvas,
  po as SHAPE_TOOLS,
  ur as applySelectedDrawStyle,
  lr as applySelectedStrokeWidth,
  Ca as diagramTemplate,
  Yi as getInspectorGroups,
  yn as isDiagramShape
};
