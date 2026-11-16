import { jsx as C, jsxs as K, Fragment as At } from "react/jsx-runtime";
import lt, { useRef as it, useState as st, useLayoutEffect as re, useEffect as St, useMemo as Zt, useCallback as yt, useImperativeHandle as ui, forwardRef as hi } from "react";
import { j as Zr, k as an, q as Kn, a as ft, v as fi, d as Vt, s as xi, b as jn, h as pi, n as mi, e as de, p as vi, C as gi, S as yi, m as wi, o as bi } from "./navigation-CJfchp2F.js";
import { Minus as ki, Plus as Mi, ChevronDown as Si, AlignLeft as Qr, AlignCenter as Jr, AlignRight as to, List as $i, ListOrdered as Ci, Bold as zi, Italic as Xi, Underline as Yi, Group as eo, Ungroup as Ii, Clipboard as Ni, Copy as Tn, Lock as no, Trash2 as Pi, ChevronsUp as Ei, ArrowUp as ro, ArrowDown as oo, ChevronsDown as Li, ClipboardPaste as Ti, RotateCcw as Fi, RotateCw as Di, Undo2 as Wi, LockOpen as dr, MoreHorizontal as ur, MousePointer2 as Oi } from "lucide-react";
const _i = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-900-90: rgba(15,23,42,.9);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-90: rgba(255,255,255,.9);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas *{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}.invoicex-canvas input,.invoicex-canvas textarea,.invoicex-canvas [contenteditable=true],.invoicex-canvas [contenteditable=true] *{-webkit-user-select:text;user-select:text}.invoicex-canvas a{-webkit-touch-callout:initial}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .top-4{top:1rem}.invoicex-canvas .left-0{left:0}.invoicex-canvas .left-1\\/2{left:50%}.invoicex-canvas .right-0{right:0}.invoicex-canvas .right-4{right:1rem}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .bottom-4{bottom:1rem}.invoicex-canvas .right-safe-4{right:max(1rem,env(safe-area-inset-right))}.invoicex-canvas .bottom-safe-4{bottom:max(1rem,env(safe-area-inset-bottom))}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .min-h-11{min-height:2.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .inline-flex{display:inline-flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .px-3\\.5{padding-left:.875rem;padding-right:.875rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .py-2{padding-top:.5rem;padding-bottom:.5rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-2{padding-right:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .mr-1{margin-right:.25rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{user-select:none;-webkit-user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .-translate-x-1\\/2{transform:translate(-50%)}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-sm{font-size:.875rem;line-height:1.25rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-900\\/90{background-color:var(--canvas-slate-900-90)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-white\\/90{background-color:var(--canvas-white-90)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-l{border-left-width:1px;border-left-style:solid}.invoicex-canvas .border-r{border-right-width:1px;border-right-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .focus-visible\\:outline:focus-visible{outline-style:solid}.invoicex-canvas .focus-visible\\:outline-2:focus-visible{outline-width:2px}.invoicex-canvas .focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.invoicex-canvas .focus-visible\\:outline-blue-500:focus-visible{outline-color:var(--canvas-blue-500)}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .w-10{width:2.5rem}.invoicex-canvas .min-w-10{min-width:2.5rem}.invoicex-canvas .shrink-0{flex-shrink:0}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .h-10{height:2.5rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .backdrop-blur-md{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.invoicex-canvas .transition-all{transition-property:all;transition-duration:.15s}.invoicex-canvas .transition-transform{transition-property:transform;transition-duration:.15s}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-selection-action-buttons{min-width:0}.invoicex-canvas .canvas-selection-action-buttons>button{flex:0 0 auto}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(max-width:400px){.invoicex-canvas .canvas-selection-actions{flex-direction:column;align-items:stretch;gap:.25rem}.invoicex-canvas .canvas-selection-label{padding-left:.25rem}.invoicex-canvas .canvas-selection-action-buttons{flex-wrap:nowrap;gap:.125rem;overflow-x:auto;scrollbar-width:none}.invoicex-canvas .canvas-selection-action-buttons::-webkit-scrollbar{display:none}}@media(max-width:360px){.invoicex-canvas .canvas-selection-action-buttons>button{width:1.75rem;height:1.75rem;flex-basis:1.75rem}}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}:where(.invoicex-canvas) button{border:0 solid;background-color:transparent;font-family:inherit;cursor:pointer}:where(.invoicex-canvas) .bg-current{background-color:currentColor}', V = Object.freeze({
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
}), io = 12;
function Fn(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function Ae(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function Be(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function He(t, e, n, r) {
  const i = Be(t, e, n), s = Be(t, e, r), l = Be(n, r, t), p = Be(n, r, e);
  return Math.abs(i) < 1e-6 && Ae(t, n, e) || Math.abs(s) < 1e-6 && Ae(t, r, e) || Math.abs(l) < 1e-6 && Ae(n, t, r) || Math.abs(p) < 1e-6 && Ae(n, e, r) ? !0 : i > 0 != s > 0 && l > 0 != p > 0;
}
function Ai(t, e, n) {
  const r = Math.min(t.x, e.x), o = Math.max(t.x, e.x), i = Math.min(t.y, e.y), s = Math.max(t.y, e.y);
  if (o < n.minX || r > n.maxX || s < n.minY || i > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const l = { x: n.minX, y: n.minY }, p = { x: n.maxX, y: n.minY }, v = { x: n.maxX, y: n.maxY }, c = { x: n.minX, y: n.maxY };
  return He(t, e, l, p) || He(t, e, p, v) || He(t, e, v, c) || He(t, e, c, l);
}
function Bi(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const r of e)
      if (Ai(t[n - 1], t[n], r)) return !0;
  return !1;
}
function Dn(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function Un(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = Dn(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let r = 0;
  for (let i = 1; i < t.length; i++) {
    const s = Math.hypot(t[i].x - t[i - 1].x, t[i].y - t[i - 1].y);
    if (r + s >= n) {
      const l = (n - r) / s;
      return { x: t[i - 1].x + (t[i].x - t[i - 1].x) * l, y: t[i - 1].y + (t[i].y - t[i - 1].y) * l };
    }
    r += s;
  }
  const o = t[t.length - 1];
  return { x: o.x, y: o.y };
}
function Te(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function hr(t, e, n, r) {
  const o = /* @__PURE__ */ new Set([t, e]), i = Math.min(t, e), s = Math.max(t, e), l = io * 1.2;
  for (const p of n) {
    const v = (r === "x" ? p.minX : p.minY) - l, c = (r === "x" ? p.maxX : p.maxY) + l, y = (a) => a >= i - l * 4 && a <= s + l * 4;
    y(v) && o.add(v), y(c) && o.add(c);
  }
  return [...o].sort((p, v) => Math.abs(p - t) - Math.abs(v - t));
}
function ao(t) {
  const e = [];
  for (const n of t) {
    const r = e[e.length - 1];
    (!r || r.x !== n.x || r.y !== n.y) && e.push(n);
  }
  return e;
}
function co(t) {
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
function Hi(t, e, n) {
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
  return co(r);
}
function Ki(t, e, n) {
  const r = t[e], o = t[e + 1];
  if (!r || !o || !Number.isFinite(n) || r.x !== o.x && r.y !== o.y) return [...t];
  const i = r.x === o.x ? [r, { x: n, y: r.y }, { x: n, y: o.y }, o] : [r, { x: r.x, y: n }, { x: o.x, y: n }, o];
  return co([
    ...t.slice(0, e),
    ...i,
    ...t.slice(e + 2)
  ]);
}
function zn(t, e) {
  const n = [], r = [];
  for (const i of t) {
    const s = ao(i);
    s.length < 2 || (Bi(s, e) ? r.push(s) : n.push(s));
  }
  const o = n.length > 0 ? n : r;
  return o.length === 0 ? [] : o.reduce((i, s) => Dn(s) < Dn(i) ? s : i);
}
function fr(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function ke(t, e, n, r) {
  const o = Math.min(t, e), i = Math.max(t, e), s = Math.max(48, Math.abs(e - t) * 0.35, io * 4);
  if (r === "x") {
    if (n === "e") return i + s;
    if (n === "w") return o - s;
  } else {
    if (n === "s") return i + s;
    if (n === "n") return o - s;
  }
  return t <= e ? o - s : i + s;
}
function ji(t, e, n, r, o) {
  const i = (t.x + e.x) / 2, s = (t.y + e.y) / 2;
  if (n === "u") {
    if (r) {
      const p = ke(t.x, e.x, t.side, "x");
      return [t, { x: p, y: t.y }, { x: p, y: e.y }, e];
    }
    const l = ke(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: l }, { x: e.x, y: l }, e];
  }
  if (n === "zigzag") {
    if (r) {
      const v = ke(t.x, e.x, t.side, "x"), c = ke(t.y, e.y, t.side, "y");
      return o ? [t, { x: v, y: t.y }, { x: v, y: c }, { x: i, y: c }, { x: i, y: e.y }, e] : [t, { x: v, y: t.y }, { x: v, y: c }, { x: e.x, y: c }, e];
    }
    const l = ke(t.y, e.y, t.side, "y"), p = ke(t.x, e.x, t.side, "x");
    return o ? [t, { x: t.x, y: l }, { x: p, y: l }, { x: p, y: e.y }, e] : [t, { x: t.x, y: l }, { x: p, y: l }, { x: p, y: s }, { x: e.x, y: s }, e];
  }
  return [];
}
function so(t, e, n = [], r = "elbow", o = []) {
  if (o.length > 0) return Hi(t, e, o);
  const i = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), s = e.side ?? (i === "e" || i === "w" ? "w" : "n"), l = i === "e" || i === "w", p = s === "e" || s === "w", v = hr(t.x, e.x, n, "x"), c = hr(t.y, e.y, n, "y"), y = [];
  if (l && p) {
    const w = (t.x + e.x) / 2;
    t.y !== e.y && y.push([t, { x: w, y: t.y }, { x: w, y: e.y }, e]);
    for (const h of v) y.push([t, { x: h, y: t.y }, { x: h, y: e.y }, e]);
    for (const h of c) y.push([t, { x: t.x, y: h }, { x: e.x, y: h }, e]);
  } else if (!l && !p) {
    const w = (t.y + e.y) / 2;
    t.x !== e.x && y.push([t, { x: t.x, y: w }, { x: e.x, y: w }, e]);
    for (const h of c) y.push([t, { x: t.x, y: h }, { x: e.x, y: h }, e]);
    for (const h of v) y.push([t, { x: h, y: t.y }, { x: h, y: e.y }, e]);
  } else if (l) {
    y.push([t, { x: e.x, y: t.y }, e]);
    for (const w of c)
      y.push([t, { x: t.x, y: w }, { x: e.x, y: w }, e]), y.push([t, { x: t.x, y: w }, e]);
    for (const w of v) y.push([t, { x: w, y: t.y }, { x: w, y: e.y }, e]);
  } else {
    y.push([t, { x: t.x, y: e.y }, e]);
    for (const w of c)
      y.push([t, { x: t.x, y: w }, e]), y.push([t, { x: t.x, y: w }, { x: e.x, y: w }, e]);
    for (const w of v) y.push([t, { x: w, y: t.y }, { x: w, y: e.y }, e]);
  }
  const a = zn(y, n);
  if (r === "elbow") return a;
  if (r === "reverse") {
    const w = fr(a), h = zn(y.filter((x) => fr(x) !== w), n);
    return h.length > 1 ? h : a;
  }
  const u = ji(t, e, r, l, p), d = zn([u], n);
  return d.length > 1 ? d : a;
}
function lo(t) {
  return t.length < 2 ? 0 : Te(t[t.length - 2], t[t.length - 1]);
}
const { PI: Ui } = Math, Fe = Ui + 1e-4, xr = 0.5, pr = [1, 1];
function mr(t, e, n, r = (o) => o) {
  return t * r(0.5 - e * (0.5 - n));
}
const { min: Xn } = Math;
function uo(t, e, n) {
  let r = Xn(1, e / n);
  return Xn(1, t + (Xn(1, 1 - r) - t) * (r * 0.275));
}
function Ri(t) {
  return [-t[0], -t[1]];
}
function Qt(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function vr(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function ue(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function Wn(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function se(t, e) {
  return [t[0] * e, t[1] * e];
}
function Yn(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function Gi(t, e) {
  return [t[0] / e, t[1] / e];
}
function ho(t) {
  return [t[1], -t[0]];
}
function In(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function gr(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function Vi(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function qi(t) {
  return Math.hypot(t[0], t[1]);
}
function yr(t, e) {
  let n = t[0] - e[0], r = t[1] - e[1];
  return n * n + r * r;
}
function fo(t) {
  return Gi(t, qi(t));
}
function Zi(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function Rn(t, e, n) {
  let r = Math.sin(n), o = Math.cos(n), i = t[0] - e[0], s = t[1] - e[1], l = i * o - s * r, p = i * r + s * o;
  return [l + e[0], p + e[1]];
}
function wr(t, e, n, r) {
  let o = Math.sin(r), i = Math.cos(r), s = e[0] - n[0], l = e[1] - n[1], p = s * i - l * o, v = s * o + l * i;
  return t[0] = p + n[0], t[1] = v + n[1], t;
}
function br(t, e, n) {
  return Qt(t, se(ue(e, t), n));
}
function Qi(t, e, n, r) {
  let o = n[0] - e[0], i = n[1] - e[1];
  return t[0] = e[0] + o * r, t[1] = e[1] + i * r, t;
}
function xo(t, e, n) {
  return Qt(t, se(e, n));
}
const Mt = [0, 0], ae = [0, 0], ce = [0, 0];
function Ji(t, e) {
  let n = xo(t, fo(ho(ue(t, Qt(t, [1, 1])))), -e), r = [], o = 1 / 13;
  for (let i = o; i <= 1; i += o) r.push(Rn(n, t, Fe * 2 * i));
  return r;
}
function ta(t, e, n) {
  let r = [], o = 1 / n;
  for (let i = o; i <= 1; i += o) r.push(Rn(e, t, Fe * i));
  return r;
}
function ea(t, e, n) {
  let r = ue(e, n), o = se(r, 0.5), i = se(r, 0.51);
  return [ue(t, o), ue(t, i), Qt(t, i), Qt(t, o)];
}
function na(t, e, n, r) {
  let o = [], i = xo(t, e, n), s = 1 / r;
  for (let l = s; l < 1; l += s) o.push(Rn(i, t, Fe * 3 * l));
  return o;
}
function ra(t, e, n) {
  return [Qt(t, se(e, n)), Qt(t, se(e, n * 0.99)), ue(t, se(e, n * 0.99)), ue(t, se(e, n))];
}
function kr(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function oa(t, e, n) {
  return t.slice(0, 10).reduce((r, o) => {
    let i = o.pressure;
    return e && (i = uo(r, o.distance, n)), (r + i) / 2;
  }, t[0].pressure);
}
function ia(t, e = {}) {
  let { size: n = 16, smoothing: r = 0.5, thinning: o = 0.5, simulatePressure: i = !0, easing: s = (L) => L, start: l = {}, end: p = {}, last: v = !1 } = e, { cap: c = !0, easing: y = (L) => L * (2 - L) } = l, { cap: a = !0, easing: u = (L) => --L * L * L + 1 } = p;
  if (t.length === 0 || n <= 0) return [];
  let d = t[t.length - 1].runningLength, w = kr(l.taper, n, d), h = kr(p.taper, n, d), x = (n * r) ** 2, f = [], m = [], k = oa(t, i, n), $ = mr(n, o, t[t.length - 1].pressure, s), b, z = t[0].vector, S = t[0].point, M = S, X = S, Y = M, g = !1;
  for (let L = 0; L < t.length; L++) {
    let { pressure: O } = t[L], { point: D, vector: T, distance: H, runningLength: R } = t[L], tt = L === t.length - 1;
    if (!tt && d - R < 3) continue;
    o ? (i && (O = uo(k, H, n)), $ = mr(n, o, O, s)) : $ = n / 2, b === void 0 && (b = $);
    let ot = R < w ? y(R / w) : 1, Q = d - R < h ? u((d - R) / h) : 1;
    $ = Math.max(0.01, $ * Math.min(ot, Q));
    let U = (tt ? t[L] : t[L + 1]).vector, et = tt ? 1 : gr(T, U), at = gr(T, z) < 0 && !g, nt = et !== null && et < 0;
    if (at || nt) {
      In(Mt, z), Yn(Mt, Mt, $);
      for (let N = 0; N <= 1; N += 0.07692307692307693) Wn(ae, D, Mt), wr(ae, ae, D, Fe * N), X = [ae[0], ae[1]], f.push(X), vr(ce, D, Mt), wr(ce, ce, D, Fe * -N), Y = [ce[0], ce[1]], m.push(Y);
      S = X, M = Y, nt && (g = !0);
      continue;
    }
    if (g = !1, tt) {
      In(Mt, T), Yn(Mt, Mt, $), f.push(ue(D, Mt)), m.push(Qt(D, Mt));
      continue;
    }
    Qi(Mt, U, T, et), In(Mt, Mt), Yn(Mt, Mt, $), Wn(ae, D, Mt), X = [ae[0], ae[1]], (L <= 1 || yr(S, X) > x) && (f.push(X), S = X), vr(ce, D, Mt), Y = [ce[0], ce[1]], (L <= 1 || yr(M, Y) > x) && (m.push(Y), M = Y), k = O, z = T;
  }
  let I = [t[0].point[0], t[0].point[1]], F = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : Qt(t[0].point, [1, 1]), W = [], P = [];
  if (t.length === 1) {
    if (!(w || h) || v) return Ji(I, b || $);
  } else {
    w || h && t.length === 1 || (c ? W.push(...ta(I, m[0], 13)) : W.push(...ea(I, f[0], m[0])));
    let L = ho(Ri(t[t.length - 1].vector));
    h || w && t.length === 1 ? P.push(F) : a ? P.push(...na(F, L, $, 29)) : P.push(...ra(F, L, $));
  }
  return f.concat(P, m.reverse(), W);
}
const Mr = [0, 0];
function Sr(t) {
  return t != null && t >= 0;
}
function aa(t, e = {}) {
  var a;
  let { streamline: n = 0.5, size: r = 16, last: o = !1 } = e;
  if (t.length === 0) return [];
  let i = 0.15 + (1 - n) * 0.85, s = Array.isArray(t[0]) ? t : t.map(({ x: u, y: d, pressure: w = xr }) => [u, d, w]);
  if (s.length === 2) {
    let u = s[1];
    s = s.slice(0, -1);
    for (let d = 1; d < 5; d++) s.push(br(s[0], u, d / 4));
  }
  s.length === 1 && (s = [...s, [...Qt(s[0], pr), ...s[0].slice(2)]]);
  let l = [{ point: [s[0][0], s[0][1]], pressure: Sr(s[0][2]) ? s[0][2] : 0.25, vector: [...pr], distance: 0, runningLength: 0 }], p = !1, v = 0, c = l[0], y = s.length - 1;
  for (let u = 1; u < s.length; u++) {
    let d = o && u === y ? [s[u][0], s[u][1]] : br(c.point, s[u], i);
    if (Vi(c.point, d)) continue;
    let w = Zi(d, c.point);
    if (v += w, u < y && !p) {
      if (v < r) continue;
      p = !0;
    }
    Wn(Mr, c.point, d), c = { point: d, pressure: Sr(s[u][2]) ? s[u][2] : xr, vector: fo(Mr), distance: w, runningLength: v }, l.push(c);
  }
  return l[0].vector = ((a = l[1]) == null ? void 0 : a.vector) || [0, 0], l;
}
function ca(t, e = {}) {
  return ia(aa(t, e), e);
}
var sa = ca;
function Ce(t) {
  if (t.fillColor)
    try {
      return Kn(t.fillColor);
    } catch {
      return t.color ? ft[t.color].bg : ft.blue.bg;
    }
  return t.color ? ft[t.color].bg : ft.blue.bg;
}
function De(t) {
  if (t.strokeColor)
    try {
      return Kn(t.strokeColor);
    } catch {
      return t.color ? ft[t.color].border : "#2563eb";
    }
  return t.color ? ft[t.color].border : "#2563eb";
}
function po(t) {
  return De(t);
}
function le(t) {
  if (t.textColor)
    try {
      return Kn(t.textColor);
    } catch {
      return t.color ? ft[t.color].text : "#0f172a";
    }
  return t.color ? ft[t.color].text : "#0f172a";
}
function mo(t, e, n) {
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
      const r = e / 2, o = n / 2, i = Math.min(e, n) / 2, s = i * 0.4, l = [];
      for (let p = 0; p < 10; p++) {
        const v = Math.PI / 5 * p - Math.PI / 2, c = p % 2 === 0 ? i : s;
        l.push(`${r + c * Math.cos(v)},${o + c * Math.sin(v)}`);
      }
      return l.join(" ");
    }
    default:
      return "";
  }
}
function la(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let r = 1; r < t.length - 1; r++) {
    const [o, i] = t[r], [s, l] = t[r + 1];
    e += ` Q ${o} ${i} ${(o + s) / 2} ${(i + l) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function da(t, e) {
  return e === "highlighter" ? { size: t * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: t, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 };
}
function qe(t, e) {
  return e === "highlighter" ? t * 1.25 : t / 2;
}
function vo(t, e, n) {
  return t.length < 2 ? [] : sa(t, da(e, n));
}
function $r(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [p, v] = t[0], c = qe(e, n);
    return `M ${p - c} ${v} A ${c} ${c} 0 1 0 ${p + c} ${v} A ${c} ${c} 0 1 0 ${p - c} ${v} Z`;
  }
  const r = vo(t, e, n);
  if (r.length === 0) return "";
  if (r.length < 4)
    return r.reduce(
      (p, [v, c], y) => p + (y === 0 ? `M ${v} ${c}` : ` L ${v} ${c}`),
      ""
    ) + " Z";
  const o = r[0], i = r[1], s = r[2];
  let l = `M ${o[0]} ${o[1]} Q ${i[0]} ${i[1]} ${(i[0] + s[0]) / 2} ${(i[1] + s[1]) / 2} T `;
  for (let p = 2; p < r.length - 1; p += 1) {
    const v = r[p], c = r[p + 1];
    l += `${(v[0] + c[0]) / 2} ${(v[1] + c[1]) / 2} `;
  }
  return `${l}Z`;
}
function ua(t) {
  return t.map(([e, n], r) => `${r === 0 ? "M" : "L"} ${e} ${n}`).join(" ");
}
const Cr = /* @__PURE__ */ new WeakMap();
function On(t, e = 1) {
  if (t.type !== "draw") return { d: "", filled: !1, width: 0, opacity: 1 };
  const n = t.points ?? [], r = t.strokeWidth ?? 3, o = t.drawMode ?? "pen", i = o === "highlighter" ? 0.35 : 1;
  if (t.inkStyle === void 0 && n.length === 1)
    return { d: la(n), filled: !1, width: r / e, opacity: i };
  const s = t.inkStyle === "raw", l = n.length > 0 && (n.length === 1 || s && n.every(([v, c]) => v === n[0][0] && c === n[0][1]));
  return {
    d: l ? $r([n[0]], r, o) : s ? ua(n) : $r(n, r, o),
    filled: l || !s,
    width: o === "highlighter" ? r * 2.5 : r,
    opacity: i
  };
}
function go(t, e = 1) {
  var o;
  if (t.type !== "draw" || t.inkStyle === void 0 && ((o = t.points) == null ? void 0 : o.length) === 1) return On(t, e);
  const n = Cr.get(t);
  if (n) return n;
  const r = On(t);
  return Cr.set(t, r), r;
}
function Gt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function yo(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], r = (o, i) => {
    o.childNodes.forEach((s) => {
      if (s.nodeType === Node.TEXT_NODE) {
        const c = s.textContent ?? "";
        c && n[n.length - 1].push({ text: c, ...i });
        return;
      }
      if (s.nodeType !== Node.ELEMENT_NODE) return;
      const l = s;
      if (l.tagName === "BR") {
        n.push([]);
        return;
      }
      const p = { bold: i.bold || l.tagName === "B" || l.tagName === "STRONG", italic: i.italic || l.tagName === "I" || l.tagName === "EM", underline: i.underline || l.tagName === "U" }, v = l.tagName === "DIV" || l.tagName === "P" || l.tagName === "LI";
      v && n[n.length - 1].length > 0 && n.push([]), r(l, p), v && n.push([]);
    });
  };
  return r(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((o) => o.length > 0);
}
const zr = /* @__PURE__ */ new WeakMap();
function cn(t) {
  const e = zr.get(t);
  if (e !== void 0) return e;
  const n = t.html ? an(t.html) : t.text ? Gt(t.text).replace(/\n/g, "<br>") : "";
  return zr.set(t, n), n;
}
function _n(t) {
  if (t)
    try {
      return fi(t);
    } catch {
      return;
    }
}
function An(t) {
  try {
    return Zr(t);
  } catch {
    return null;
  }
}
function Xe(t) {
  return t.html ? yo(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const Ke = 12;
function Dt(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function Bt(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function ha(t, e) {
  if (e.length < 3) return !1;
  let n = !1;
  for (let r = 0, o = e.length - 1; r < e.length; o = r++) {
    const i = e[r], s = e[o];
    if (!i || !s) continue;
    if (qt(t.x, t.y, i.x, i.y, s.x, s.y) <= 1e-9)
      return !0;
    i.y > t.y != s.y > t.y && t.x < (s.x - i.x) * (t.y - i.y) / (s.y - i.y) + i.x && (n = !n);
  }
  return n;
}
function dt(t) {
  const e = t.rotation ?? 0, n = Dt(t);
  if (!e) return n;
  const r = Bt(t), o = Math.cos(e), i = Math.sin(e), s = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([v, c]) => {
    const y = v - r.x, a = c - r.y;
    return [r.x + y * o - a * i, r.y + y * i + a * o];
  }), l = s.map((v) => v[0]), p = s.map((v) => v[1]);
  return { minX: Math.min(...l), minY: Math.min(...p), maxX: Math.max(...l), maxY: Math.max(...p) };
}
function Je(t, e, n) {
  const r = t.rotation ?? 0;
  if (!r) return { x: e, y: n };
  const o = Bt(t), i = Math.cos(-r), s = Math.sin(-r), l = e - o.x, p = n - o.y;
  return { x: o.x + l * i - p * s, y: o.y + l * s + p * i };
}
function qt(t, e, n, r, o, i) {
  const s = o - n, l = i - r, p = s * s + l * l, v = p === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * s + (e - r) * l) / p));
  return Math.hypot(t - (n + v * s), e - (r + v * l));
}
function $e(t, e, n, r, o, i) {
  const s = 8 / r;
  if (t.type === "arrow") {
    const v = (t.strokeWidth ?? 2.5) / r / 2 + s, c = jt(t, o ?? /* @__PURE__ */ new Map(), i);
    if (c.routing === "orthogonal" && c.pathPoints && c.pathPoints.length > 1) {
      for (let a = 1; a < c.pathPoints.length; a++) {
        const u = c.pathPoints[a - 1], d = c.pathPoints[a];
        if (qt(e, n, u.x, u.y, d.x, d.y) <= v) return !0;
      }
      return !1;
    }
    if (c.bend === 0) return qt(e, n, c.start.x, c.start.y, c.end.x, c.end.y) <= v;
    let y = c.start;
    for (let a = 1; a <= 16; a++) {
      const u = ze(a / 16, c.start, c.control, c.end);
      if (qt(e, n, y.x, y.y, u.x, u.y) <= v) return !0;
      y = u;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const y = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / r / 2 + s;
    if (t.points.length === 1) {
      const [a, u] = t.points[0];
      return Math.hypot(e - a, n - u) <= y;
    }
    for (let a = 1; a < t.points.length; a++) {
      const [u, d] = t.points[a - 1], [w, h] = t.points[a];
      if (qt(e, n, u, d, w, h) <= y) return !0;
    }
    return !1;
  }
  const l = Je(t, e, n), p = Dt(t);
  if (t.type === "frame") {
    const v = l.x >= p.minX - s && l.x <= p.maxX + s && l.y >= p.minY - s && l.y <= p.maxY + s && (l.x <= p.minX + s || l.x >= p.maxX - s || l.y <= p.minY + s || l.y >= p.maxY - s), c = l.x >= p.minX - s && l.x <= p.maxX + s && l.y >= p.minY - 28 / r && l.y <= p.minY;
    return v || c;
  }
  return l.x >= p.minX - s && l.x <= p.maxX + s && l.y >= p.minY - s && l.y <= p.maxY + s;
}
function me(t, e, n) {
  const r = Dt(t), o = (r.minX + r.maxX) / 2, i = (r.minY + r.maxY) / 2, s = e - o, l = n - i;
  if (s === 0 && l === 0) return { x: o, y: i, side: "e" };
  const p = (r.maxX - r.minX) / 2, v = (r.maxY - r.minY) / 2, c = p === 0 ? 1 / 0 : Math.abs(p / s), y = v === 0 ? 1 / 0 : Math.abs(v / l);
  return c <= y ? { x: o + s * c, y: i + l * c, side: s >= 0 ? "e" : "w" } : { x: o + s * y, y: i + l * y, side: l >= 0 ? "s" : "n" };
}
function Xr(t, e) {
  const n = Dt(t), r = (n.minX + n.maxX) / 2, o = (n.minY + n.maxY) / 2;
  return e === "w" ? { x: n.minX, y: o, side: e } : e === "n" ? { x: r, y: n.minY, side: e } : e === "s" ? { x: r, y: n.maxY, side: e } : { x: n.maxX, y: o, side: "e" };
}
function wo(t, e, n, r) {
  const o = /* @__PURE__ */ new Set([e.id, n, r]);
  return t.filter((i) => !o.has(i.id)).map((i) => {
    const s = dt(i);
    return { minX: s.minX - Ke, minY: s.minY - Ke, maxX: s.maxX + Ke, maxY: s.maxY + Ke };
  }).filter((i) => i.maxX > i.minX && i.maxY > i.minY);
}
function jt(t, e, n = []) {
  const r = t.fromId ? e.get(t.fromId) : void 0, o = t.toId ? e.get(t.toId) : void 0;
  let i = { x: t.x, y: t.y }, s = { x: t.x + t.w, y: t.y + t.h };
  if (r && o) {
    const d = Bt(r), w = Bt(o);
    i = me(r, w.x, w.y), s = me(o, d.x, d.y);
  } else r ? i = me(r, s.x, s.y) : o && (s = me(o, i.x, i.y));
  const l = (i.x + s.x) / 2, p = (i.y + s.y) / 2, v = t.bend ?? 0;
  let c = { x: l, y: p };
  if (v !== 0) {
    const d = s.x - i.x, w = s.y - i.y, h = Math.hypot(d, w) || 1;
    c = { x: l + -w / h * v, y: p + d / h * v };
  }
  const y = !!(r || o), a = t.routing ?? (y ? "orthogonal" : v !== 0 ? "curved" : "straight");
  if (a !== "orthogonal") return { start: i, end: s, control: c, bend: v, routing: a };
  r && (i = Xr(r, i.side)), o && (s = Xr(o, s.side));
  const u = wo(n, t, r == null ? void 0 : r.id, o == null ? void 0 : o.id);
  return {
    start: i,
    end: s,
    control: c,
    bend: v,
    routing: a,
    pathPoints: ao(so(i, s, u, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function ze(t, e, n, r) {
  const o = 1 - t;
  return { x: o * o * e.x + 2 * o * t * n.x + t * t * r.x, y: o * o * e.y + 2 * o * t * n.y + t * t * r.y };
}
function sn(t, e) {
  if (!t || !e) return null;
  const n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n <= r ? { start: n, end: r } : null;
}
function tn(t, e, n, r) {
  if (Math.abs(e) < 1e-12) return t >= n && t <= r ? { start: 0, end: 1 } : null;
  const o = (n - t) / e, i = (r - t) / e;
  return sn(
    { start: Math.min(o, i), end: Math.max(o, i) },
    { start: 0, end: 1 }
  );
}
function Nn(t, e, n, r) {
  const o = e[0] - t[0], i = e[1] - t[1], s = t[0] - n.x, l = t[1] - n.y, p = o * o + i * i;
  if (p < 1e-12)
    return s * s + l * l <= r * r ? { start: 0, end: 1 } : null;
  const v = 2 * (s * o + l * i), c = s * s + l * l - r * r, y = v * v - 4 * p * c;
  if (y < 0) return null;
  const a = Math.sqrt(y);
  return sn(
    { start: (-v - a) / (2 * p), end: (-v + a) / (2 * p) },
    { start: 0, end: 1 }
  );
}
function fa(t, e, n, r, o) {
  const i = r.x - n.x, s = r.y - n.y, l = Math.hypot(i, s);
  if (l < 1e-12) return Nn(t, e, n, o);
  const p = i / l, v = s / l, c = e[0] - t[0], y = e[1] - t[1], a = t[0] - n.x, u = t[1] - n.y, d = a * p + u * v, w = c * p + y * v, h = a * -v + u * p, x = c * -v + y * p, m = [
    sn(
      tn(d, w, 0, l),
      tn(h, x, -o, o)
    ),
    Nn(t, e, n, o),
    Nn(t, e, r, o)
  ].filter((k) => k !== null);
  return m.length === 0 ? null : {
    start: Math.min(...m.map((k) => k.start)),
    end: Math.max(...m.map((k) => k.end))
  };
}
function Yr(t, e, n) {
  return [t[0] + (e[0] - t[0]) * n, t[1] + (e[1] - t[1]) * n];
}
function Me(t, e) {
  const n = t[t.length - 1];
  (!n || Math.hypot(e[0] - n[0], e[1] - n[1]) > 1e-9) && t.push([e[0], e[1]]);
}
function xa(t, e, n) {
  let r = n[0][0], o = n[0][1], i = r, s = o;
  for (const [l, p] of n)
    r = Math.min(r, l), o = Math.min(o, p), i = Math.max(i, l), s = Math.max(s, p);
  return { ...t, id: e, points: n, x: r, y: o, w: i - r, h: s - o };
}
function pa(t, e) {
  const n = t.slice(0, 480);
  let r = 1, o = `${n}-e${r}`;
  for (; e.has(o); ) o = `${n}-e${++r}`;
  return e.add(o), o;
}
function Pe(t, e, n) {
  return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
}
function je(t, e, n) {
  return Math.abs(Pe(e, n, t)) <= 1e-9 && t.x >= Math.min(e.x, n.x) - 1e-9 && t.x <= Math.max(e.x, n.x) + 1e-9 && t.y >= Math.min(e.y, n.y) - 1e-9 && t.y <= Math.max(e.y, n.y) + 1e-9;
}
function ma(t, e, n, r) {
  const o = Pe(t, e, n), i = Pe(t, e, r), s = Pe(n, r, t), l = Pe(n, r, e);
  return (o > 0 && i < 0 || o < 0 && i > 0) && (s > 0 && l < 0 || s < 0 && l > 0) ? !0 : Math.abs(o) <= 1e-9 && je(n, t, e) || Math.abs(i) <= 1e-9 && je(r, t, e) || Math.abs(s) <= 1e-9 && je(t, n, r) || Math.abs(l) <= 1e-9 && je(e, n, r);
}
function Ir(t, e, n, r) {
  return ma(t, e, n, r) ? 0 : Math.min(
    qt(t.x, t.y, n.x, n.y, r.x, r.y),
    qt(e.x, e.y, n.x, n.y, r.x, r.y),
    qt(n.x, n.y, t.x, t.y, e.x, e.y),
    qt(r.x, r.y, t.x, t.y, e.x, e.y)
  );
}
function Bn(t, e, n, r) {
  const o = tn(t.x, e.x - t.x, n.minX - r, n.maxX + r), i = tn(t.y, e.y - t.y, n.minY - r, n.maxY + r);
  return sn(o, i) !== null;
}
function va(t, e, n, r, o, i, s) {
  const l = 8 / o;
  if (t.type === "arrow") {
    const d = r + (t.strokeWidth ?? 2.5) / o / 2 + l, w = jt(t, i, s), h = [];
    if (w.routing === "orthogonal" && w.pathPoints && w.pathPoints.length > 1)
      for (let x = 1; x < w.pathPoints.length; x++)
        h.push([w.pathPoints[x - 1], w.pathPoints[x]]);
    else if (w.bend === 0)
      h.push([w.start, w.end]);
    else {
      let x = w.start;
      for (let f = 1; f <= 16; f++) {
        const m = ze(f / 16, w.start, w.control, w.end);
        h.push([x, m]), x = m;
      }
    }
    return h.some(([x, f]) => Ir(e, n, x, f) <= d);
  }
  const p = Je(t, e.x, e.y), v = Je(t, n.x, n.y), c = Dt(t);
  if (t.type !== "frame") return Bn(p, v, c, r + l);
  const y = r + l, a = [
    { x: c.minX, y: c.minY },
    { x: c.maxX, y: c.minY },
    { x: c.maxX, y: c.maxY },
    { x: c.minX, y: c.maxY }
  ];
  for (let d = 0; d < a.length; d++)
    if (Ir(p, v, a[d], a[(d + 1) % a.length]) <= y) return !0;
  const u = { minX: c.minX, minY: c.minY - 28 / o, maxX: c.maxX, maxY: c.minY };
  return Bn(p, v, u, r);
}
function Gn(t, e, n, r, o) {
  const i = [], s = Math.max(o, 0.1), l = r / s, p = new Set(t.map((c) => c.id)), v = new Map(t.map((c) => [c.id, c]));
  for (const c of t) {
    if (c.locked) {
      i.push(c);
      continue;
    }
    if (c.type !== "draw" || !c.points) {
      if (va(c, e, n, l, s, v, t)) continue;
      i.push(c);
      continue;
    }
    const a = (c.drawMode ?? "pen") === "highlighter" ? (c.strokeWidth ?? 3) * 2.5 : c.strokeWidth ?? 3, u = l + a / 2, d = Dt(c);
    if (!Bn(e, n, d, u)) {
      i.push(c);
      continue;
    }
    if (c.points.length === 0) {
      i.push(c);
      continue;
    }
    if (c.points.length === 1) {
      const [m, k] = c.points[0];
      qt(m, k, e.x, e.y, n.x, n.y) > u && i.push(c);
      continue;
    }
    const w = [];
    let h = [], x = !1;
    const f = () => {
      h.length > 1 && w.push(h), h = [];
    };
    for (let m = 1; m < c.points.length; m++) {
      const k = c.points[m - 1], $ = c.points[m], b = fa(k, $, e, n, u);
      if (!b) {
        h.length === 0 && Me(h, k), Me(h, $);
        continue;
      }
      x = !0, b.start > 1e-9 && (h.length === 0 && Me(h, k), Me(h, Yr(k, $, b.start))), f(), b.end < 1 - 1e-9 && (Me(h, Yr(k, $, b.end)), Me(h, $));
    }
    if (f(), !x) {
      i.push(c);
      continue;
    }
    w.forEach((m, k) => {
      const $ = k === 0 ? c.id : pa(c.id, p);
      i.push(xa(c, $, m));
    });
  }
  return i;
}
function ga(t, e, n, r, o) {
  return Gn(t, { x: e, y: n }, { x: e, y: n }, r, o);
}
function ya(t, e, n) {
  const r = 6 / n;
  let o = null, i = null;
  const s = [], l = [t.minX, (t.minX + t.maxX) / 2, t.maxX], p = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const v of e) {
    const c = dt(v), y = [c.minX, (c.minX + c.maxX) / 2, c.maxX], a = [c.minY, (c.minY + c.maxY) / 2, c.maxY];
    for (const u of l) for (const d of y) {
      const w = d - u;
      Math.abs(w) <= r && (!o || Math.abs(w) < Math.abs(o.delta)) && (o = { delta: w, at: d });
    }
    for (const u of p) for (const d of a) {
      const w = d - u;
      Math.abs(w) <= r && (!i || Math.abs(w) < Math.abs(i.delta)) && (i = { delta: w, at: d });
    }
  }
  return o && s.push({ x1: o.at, y1: t.minY - 1e3, x2: o.at, y2: t.maxY + 1e3 }), i && s.push({ x1: t.minX - 1e3, y1: i.at, x2: t.maxX + 1e3, y2: i.at }), { dx: (o == null ? void 0 : o.delta) ?? 0, dy: (i == null ? void 0 : i.delta) ?? 0, guides: s };
}
const wa = 14;
function ba({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: r,
  camera: o,
  interaction: i,
  eraserPos: s,
  guides: l,
  marquee: p,
  lasso: v,
  strokeColorOf: c
}) {
  return /* @__PURE__ */ C("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ K("g", { transform: `scale(${o.z}) translate(${-o.x}, ${-o.y})`, children: [
    t.map((y) => {
      if (y.type === "draw" && y.points) {
        const Y = y.drawMode ?? "pen", g = y.strokeWidth ?? 3, I = e.has(y.id) ? V.blue : c(y), F = go(y, o.z);
        return /* @__PURE__ */ C(
          "path",
          {
            "data-canvas-vector-shape-id": y.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": Y,
            "data-canvas-stroke-width": g,
            "data-canvas-ink-style": y.inkStyle ?? "smoothed",
            d: F.d,
            fill: F.filled ? I : "none",
            stroke: F.filled ? "none" : I,
            strokeWidth: F.width,
            strokeOpacity: Y === "highlighter" ? 0.35 : void 0,
            fillOpacity: Y === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          y.id
        );
      }
      if (y.type !== "arrow") return null;
      const a = e.has(y.id) ? V.blue : c(y), u = jt(y, n, r), d = y.strokeWidth ?? 2.5, w = d / o.z, h = Math.max(10, 8 + d * 2), x = Math.max(4, 2 + d), f = h / o.z, m = x / o.z, k = u.routing === "orthogonal" && u.pathPoints ? u.pathPoints : null, $ = k && k.length > 1;
      let b, z;
      if ($)
        b = Fn(k), z = lo(k);
      else if (u.routing === "curved") {
        b = `M ${u.start.x} ${u.start.y} Q ${u.control.x} ${u.control.y} ${u.end.x} ${u.end.y}`;
        const Y = ze(0.94, u.start, u.control, u.end);
        z = Math.atan2(u.end.y - Y.y, u.end.x - Y.x);
      } else
        b = `M ${u.start.x} ${u.start.y} L ${u.end.x} ${u.end.y}`, z = Math.atan2(u.end.y - u.start.y, u.end.x - u.start.x);
      const S = $ && k.length >= 2 ? Te(k[0], k[1]) : u.routing === "orthogonal" && u.start.side ? u.start.side === "e" ? 0 : u.start.side === "w" ? Math.PI : u.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Te(u.start, u.end), M = y.strokeStyle === "dashed" ? `${8 / o.z} ${5 / o.z}` : y.strokeStyle === "dotted" ? `${1.5 / o.z} ${4 / o.z}` : void 0, X = (Y, g, I, F) => Y === "dot" ? /* @__PURE__ */ C("circle", { "data-canvas-arrow-dot-radius": x, cx: g, cy: I, r: m, fill: a }) : Y === "none" ? null : /* @__PURE__ */ C(
        "polygon",
        {
          "data-canvas-arrowhead-size": h,
          points: `${g},${I} ${g - f * Math.cos(F - 0.4)},${I - f * Math.sin(F - 0.4)} ${g - f * Math.cos(F + 0.4)},${I - f * Math.sin(F + 0.4)}`,
          fill: a
        }
      );
      return /* @__PURE__ */ K("g", { "data-canvas-vector-shape-id": y.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": u.routing, "data-canvas-stroke-width": d, children: [
        /* @__PURE__ */ C("path", { d: b, fill: "none", stroke: a, strokeWidth: w, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: M }),
        X(y.arrowEnd ?? "arrow", u.end.x, u.end.y, z),
        X(y.arrowStart ?? "none", u.start.x, u.start.y, S + Math.PI)
      ] }, y.id);
    }),
    i.kind === "connect" && i.fromId !== void 0 && i.toX !== void 0 && i.toY !== void 0 && (() => {
      const y = n.get(i.fromId);
      if (!y) return null;
      const a = me(y, i.toX, i.toY), u = i.hoverId ? n.get(i.hoverId) : null, d = u ? me(u, a.x, a.y) : { x: i.toX, y: i.toY }, w = u ? so(a, d, wo(r, { id: "__preview" }, y.id, u.id)) : [a, d];
      return /* @__PURE__ */ K("g", { children: [
        /* @__PURE__ */ C("path", { d: Fn(w), stroke: V.blue, strokeWidth: 2 / o.z, strokeDasharray: `${5 / o.z} ${4 / o.z}` }),
        u ? /* @__PURE__ */ C("rect", { x: dt(u).minX - 3 / o.z, y: dt(u).minY - 3 / o.z, width: dt(u).maxX - dt(u).minX + 6 / o.z, height: dt(u).maxY - dt(u).minY + 6 / o.z, fill: "none", stroke: V.blue, strokeWidth: 2 / o.z, rx: 6 / o.z }) : /* @__PURE__ */ C("circle", { cx: d.x, cy: d.y, r: 5 / o.z, fill: V.blue })
      ] });
    })(),
    s && /* @__PURE__ */ C("circle", { cx: s.x, cy: s.y, r: wa / o.z, fill: V.roseSoft, stroke: V.rose, strokeWidth: 1 / o.z }),
    l.map((y, a) => /* @__PURE__ */ C("line", { x1: y.x1, y1: y.y1, x2: y.x2, y2: y.y2, stroke: V.pink, strokeWidth: 1 / o.z, strokeDasharray: `${4 / o.z} ${4 / o.z}` }, `guide-${a}`)),
    p && /* @__PURE__ */ C("rect", { x: Math.min(p.startX, p.curX), y: Math.min(p.startY, p.curY), width: Math.abs(p.curX - p.startX), height: Math.abs(p.curY - p.startY), fill: V.marqueeFill, stroke: V.blue, strokeWidth: 1 / o.z }),
    v && v.points.length > 1 && /* @__PURE__ */ C(
      "polygon",
      {
        "data-canvas-lasso": "true",
        points: v.points.map((y) => `${y.x},${y.y}`).join(" "),
        fill: V.marqueeFill,
        stroke: V.blue,
        strokeWidth: 1.5 / o.z,
        strokeDasharray: `${5 / o.z} ${4 / o.z}`,
        strokeLinejoin: "round"
      }
    )
  ] }) });
}
const ka = 0.1, Ma = 4, Vn = 14, Sa = 4, en = ["note", "card", "rect", "ellipse", "text", "image", "triangle", "diamond", "hexagon", "star", "frame"], $a = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], Ca = /* @__PURE__ */ new Set([
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
]), za = [
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
function ln(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function bo(t) {
  return Ca.has(t.trim().toLowerCase());
}
function ko(t) {
  const e = ln(t);
  return e ? bo(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function Xa(t) {
  return ln(t).split(",").map((e) => e.trim()).filter(Boolean).map(ko).filter(Boolean).join(", ");
}
function Mo(t) {
  return ln(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Ne(t) {
  return t.split(",").map((e) => ln(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !bo(e));
}
const Ze = Array.from(/* @__PURE__ */ new Set([
  ...za,
  ...Ne(Vt.sans.stack),
  ...Ne(Vt.serif.stack),
  ...Ne(Vt.mono.stack),
  ...Ne(Vt.gothic.stack),
  ...Ne(Vt.korean.stack)
]));
function Ya() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Ze;
  const t = Ze.filter((e) => {
    const n = ko(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : Ze;
}
const Ia = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, Na = 24, Pa = 28, So = 720;
function Ft(t) {
  return t.fontSize ?? Ia[t.type] ?? 14;
}
function Yt(t) {
  var e;
  if (!t.fontFamily) return Vt.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = Mo(xi(t.customFontFamily ?? ""));
    } catch {
    }
    return Xa(n) || Vt.sans.stack;
  }
  return ((e = Vt[t.fontFamily]) == null ? void 0 : e.stack) ?? Vt.sans.stack;
}
function Tt(t) {
  return t.textAlign ? t.textAlign : ["note", "rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function Ea(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function La(t) {
  var e, n, r;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((r = t.html) != null && r.includes("<ol>")) return "number";
}
function Ta(t, e) {
  return {
    w: Math.min(So, Math.max(Na, Math.ceil(t))),
    h: Math.max(Pa, Math.ceil(e))
  };
}
function Fa(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = an(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${So}px`,
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
    fontSize: `${Ft(e)}px`,
    fontFamily: Yt(e)
  }), document.body.appendChild(n);
  const r = n.getBoundingClientRect();
  return n.remove(), Ta(r.width, r.height);
}
const $o = 11;
function Da(t, e, n, r, o) {
  const i = Math.max(1, r);
  if (e.width <= 0 || e.height <= 0 || t.trim() === "") return n;
  const s = (v) => {
    const c = o(t, e.width, v);
    return c.width <= e.width && c.height <= e.height;
  };
  if (s(n)) return n;
  if (!s(i)) return i;
  let l = i, p = n;
  for (; p - l > 0.5; ) {
    const v = (l + p) / 2;
    s(v) ? l = v : p = v;
  }
  return Math.floor(l * 10) / 10;
}
const Wa = 200, Ue = /* @__PURE__ */ new Map();
function Oa(t, e, n, r) {
  if (typeof document > "u") return { width: 0, height: 0 };
  const o = document.createElement("div");
  o.className = "canvas-rich-text", Object.assign(o.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: `${n}px`,
    height: "auto",
    margin: "0",
    padding: "0",
    border: "0",
    boxSizing: "content-box",
    visibility: "hidden",
    pointerEvents: "none",
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
    fontSize: `${r}px`,
    fontFamily: e,
    lineHeight: "1.35"
  });
  try {
    o.innerHTML = t ? an(t) : "&nbsp;";
  } catch {
    o.innerHTML = "&nbsp;";
  }
  document.body.appendChild(o);
  const i = o.getBoundingClientRect();
  return o.remove(), { width: i.width, height: i.height };
}
function Co(t) {
  const e = Ft(t);
  if (t.type !== "note") return e;
  const n = Math.max(0, t.w - 24), r = Math.max(0, t.h - 24), o = `${t.fontFamily ?? "sans"}|${t.customFontFamily ?? ""}|${t.textAlign ?? ""}|${t.html ?? ""}|${t.text ?? ""}|${t.w}x${t.h}|${e}`, i = Ue.get(o);
  if (i !== void 0) return i;
  const s = Yt(t), l = t.html ? t.html : Gt(t.text ?? "").replace(/\n/g, "<br>"), p = Da(
    l,
    { width: n, height: r },
    e,
    $o,
    (v, c, y) => Oa(v, s, c, y)
  );
  return Ue.size >= Wa && Ue.clear(), Ue.set(o, p), p;
}
const _a = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]);
function Aa({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: r,
  shapeById: o,
  allShapes: i,
  peerCursors: s,
  hoveredShapeId: l,
  dotsEnabled: p,
  isDarkMode: v,
  renderEditor: c,
  renderShapeBody: y,
  setEditingId: a,
  onBendHandleDown: u,
  onOrthogonalSegmentHandleDown: d,
  onResizeHandleDown: w,
  onRotateHandleDown: h,
  onConnectHandleDown: x,
  onArrowEndpointDown: f
}) {
  return /* @__PURE__ */ K(At, { children: [
    t.map((m, k) => {
      const $ = { zIndex: k + 1, transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` };
      if (m.type === "draw") return null;
      if (m.type === "arrow") {
        const S = jt(m, o, i), M = S.routing === "orthogonal" && S.pathPoints ? Un(S.pathPoints) : S.routing === "curved" ? ze(0.5, S.start, S.control, S.end) : { x: (S.start.x + S.end.x) / 2, y: (S.start.y + S.end.y) / 2 }, X = n === m.id, Y = cn(m), g = e.has(m.id), I = Xe(m).trim(), F = Y || (g ? "관계 입력" : "");
        return !F && !X ? null : /* @__PURE__ */ C("div", { "data-canvas-paint-id": m.id, className: "absolute top-0 left-0 origin-top-left", style: $, children: /* @__PURE__ */ C("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: M.x - 90, top: M.y - 18, width: 180, height: 36 }, onDoubleClick: (W) => {
          W.stopPropagation(), a(m.id);
        }, children: (F || X) && /* @__PURE__ */ C(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": I ? `관계 설명: ${I}` : "관계 설명 입력",
            title: X ? void 0 : I ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${v ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: Ft(m),
              fontFamily: Yt(m),
              maxWidth: "100%",
              minWidth: X ? 120 / r.z : void 0,
              minHeight: X ? 28 / r.z : void 0,
              color: m.textColor
            },
            children: X ? c("text-center whitespace-nowrap") : /* @__PURE__ */ C("span", { dangerouslySetInnerHTML: { __html: F } }, "canvas-view")
          }
        ) }) }, m.id);
      }
      const b = e.has(m.id), z = Dt(m);
      return /* @__PURE__ */ C("div", { "data-canvas-paint-id": m.id, className: "absolute top-0 left-0 origin-top-left", style: $, children: /* @__PURE__ */ C(
        "div",
        {
          "data-canvas-locked": m.locked ? "true" : void 0,
          "data-canvas-shape-id": m.id,
          "data-canvas-shape-type": m.type,
          "data-canvas-selected": b ? "true" : void 0,
          "data-canvas-text-align": Tt(m),
          "data-canvas-text-color": m.textColor,
          "data-canvas-font-size": Ft(m),
          "data-canvas-font-family": m.fontFamily === "custom" ? m.customFontFamily ?? "custom" : m.fontFamily ?? "sans",
          "data-canvas-manual-size": m.manualSize ? "true" : void 0,
          "data-canvas-group-id": m.groupId,
          "data-canvas-list-kind": La(m),
          onDoubleClick: (S) => {
            S.stopPropagation(), !m.locked && _a.has(m.type) && a(m.id);
          },
          "data-canvas-x": m.x,
          "data-canvas-y": m.y,
          "data-canvas-width": m.w,
          "data-canvas-height": m.h,
          className: "absolute",
          style: { left: z.minX, top: z.minY, width: z.maxX - z.minX, height: z.maxY - z.minY, transform: m.rotation ? `rotate(${m.rotation}rad)` : void 0, transformOrigin: "center" },
          children: y(m)
        }
      ) }, m.id);
    }),
    e.size === 1 && t.filter((m) => m.type !== "draw" && m.type !== "arrow" && !m.locked && e.has(m.id)).map((m) => {
      const k = Dt(m);
      return /* @__PURE__ */ C("div", { "data-canvas-selection-id": m.id, className: "absolute top-0 left-0 origin-top-left pointer-events-none", style: { zIndex: t.length + 3, transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` }, children: /* @__PURE__ */ K("div", { className: "absolute", style: { left: k.minX, top: k.minY, width: k.maxX - k.minX, height: k.maxY - k.minY, transform: m.rotation ? `rotate(${m.rotation}rad)` : void 0, transformOrigin: "center" }, children: [
        /* @__PURE__ */ C("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / r.z}px solid ${V.blue}` } }),
        /* @__PURE__ */ K(At, { children: [
          ["nw", "ne", "sw", "se"].map(($) => /* @__PURE__ */ C("div", { "data-canvas-resize-handle": $, onPointerDown: (b) => w(b, m, $), className: "absolute pointer-events-auto z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / r.z, height: 10 / r.z, cursor: `${$}-resize`, left: $.includes("w") ? -5 / r.z : void 0, right: $.includes("e") ? -5 / r.z : void 0, top: $.includes("n") ? -5 / r.z : void 0, bottom: $.includes("s") ? -5 / r.z : void 0 } }, $)),
          /* @__PURE__ */ C("div", { onPointerDown: ($) => h($, m), title: "회전 (Shift로 15도 단위)", className: "absolute pointer-events-auto z-20 bg-blue-600 rounded-full", style: { width: 12 / r.z, height: 12 / r.z, left: "50%", marginLeft: -6 / r.z, top: -28 / r.z, cursor: "grab" } })
        ] })
      ] }) }, `selection-${m.id}`);
    }),
    e.size > 1 && (() => {
      const m = i.filter(($) => e.has($.id));
      if (m.length === 0) return null;
      const k = m.reduce(($, b) => {
        const z = dt(b);
        return {
          minX: Math.min($.minX, z.minX),
          minY: Math.min($.minY, z.minY),
          maxX: Math.max($.maxX, z.maxX),
          maxY: Math.max($.maxY, z.maxY)
        };
      }, dt(m[0]));
      return /* @__PURE__ */ C("div", { "data-canvas-selection-group": "true", className: "absolute top-0 left-0 origin-top-left pointer-events-none", style: { zIndex: t.length + 3, transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` }, children: /* @__PURE__ */ C("div", { className: "absolute", style: { left: k.minX, top: k.minY, width: k.maxX - k.minX, height: k.maxY - k.minY, outline: `${2 / r.z}px solid ${V.blue}` } }) });
    })(),
    p !== !1 && t.filter((m) => en.includes(m.type) && (e.has(m.id) || m.id === l || m.locked)).map((m) => {
      const k = Dt(m), $ = k.maxX - k.minX, b = k.maxY - k.minY, z = Math.min(40 / r.z, Math.max(16 / r.z, Math.min($, b) * 0.6)), S = 10 / r.z;
      return /* @__PURE__ */ C("div", { className: "absolute top-0 left-0 origin-top-left pointer-events-none", style: { zIndex: t.length + 3, transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` }, children: /* @__PURE__ */ C("div", { className: "absolute", style: { left: k.minX, top: k.minY, width: $, height: b, transform: m.rotation ? `rotate(${m.rotation}rad)` : void 0, transformOrigin: "center" }, children: ["n", "s", "w", "e"].map((M) => {
        const X = M === "n" ? { left: "50%", top: -z / 2, marginLeft: -z / 2 } : M === "s" ? { left: "50%", bottom: -z / 2, marginLeft: -z / 2 } : M === "w" ? { top: "50%", left: -z / 2, marginTop: -z / 2 } : { top: "50%", right: -z / 2, marginTop: -z / 2 };
        return /* @__PURE__ */ C(
          "div",
          {
            "data-canvas-connect-dot": M,
            onPointerDown: (Y) => x(Y, m),
            title: "드래그해서 연결 (관계 생성)",
            className: "absolute pointer-events-auto z-20 flex items-center justify-center",
            style: { ...X, width: z, height: z, cursor: "crosshair" },
            children: /* @__PURE__ */ C("div", { className: "rounded-full bg-blue-600 border-2 border-white shadow-sm", style: { width: S, height: S } })
          },
          `dot-${M}`
        );
      }) }) }, `connect-${m.id}`);
    }),
    e.size === 1 && i.filter((m) => m.type === "arrow" && !m.locked && e.has(m.id)).map((m) => {
      const k = jt(m, o, i), $ = (b, z) => ({
        left: (b.x - r.x) * r.z - z / 2,
        top: (b.y - r.y) * r.z - z / 2
      });
      return /* @__PURE__ */ K(lt.Fragment, { children: [
        k.routing === "orthogonal" && k.pathPoints && k.pathPoints.length > 2 ? k.pathPoints.slice(0, -1).map((b, z) => {
          var X;
          const S = (X = k.pathPoints) == null ? void 0 : X[z + 1];
          if (!S) return null;
          const M = { x: (b.x + S.x) / 2, y: (b.y + S.y) / 2 };
          return /* @__PURE__ */ C("div", { "data-canvas-arrow-segment-handle": z, onPointerDown: (Y) => d(Y, m, z), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { zIndex: t.length + 3, width: 12, height: 12, ...$(M, 12), cursor: b.x === S.x ? "ew-resize" : "ns-resize" } }, `segment-${z}`);
        }) : k.routing === "curved" && /* @__PURE__ */ C("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (b) => u(b, m), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { zIndex: t.length + 3, width: 10, height: 10, left: (k.start.x + k.end.x) / 2 * r.z - r.x * r.z - 5, top: (k.start.y + k.end.y) / 2 * r.z - r.y * r.z - 10, cursor: "grab" } }),
        ["start", "end"].map((b) => {
          const z = b === "start" ? k.start : k.end;
          return /* @__PURE__ */ C("div", { "data-canvas-arrow-endpoint": b, onPointerDown: (S) => f(S, m, b), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { zIndex: t.length + 3, width: 12, height: 12, ...$(z, 12), cursor: "grab" } }, b);
        })
      ] }, `arrow-handles-${m.id}`);
    }),
    i.filter((m) => m.locked).map((m) => {
      const k = Dt(m);
      return /* @__PURE__ */ C("div", { "data-canvas-lock-badge": m.id, title: "잠김", "aria-label": "잠긴 개체", className: "absolute pointer-events-none z-40", style: { zIndex: t.length + 4, left: (k.maxX - r.x) * r.z - 18, top: (k.minY - r.y) * r.z + 2 }, children: /* @__PURE__ */ K("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: v ? "#cbd5e1" : "#475569", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
        /* @__PURE__ */ C("rect", { x: "5", y: "11", width: "14", height: "9", rx: "2", fill: v ? "#1e293b" : "#fff" }),
        /* @__PURE__ */ C("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
      ] }) }, `lock-badge-${m.id}`);
    }),
    s == null ? void 0 : s.map((m) => /* @__PURE__ */ K("div", { className: "absolute pointer-events-none z-40", style: { zIndex: t.length + 4, left: (m.x - r.x) * r.z, top: (m.y - r.y) * r.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ C("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ C("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: m.color, stroke: V.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ C("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: m.color }, children: m.name })
    ] }, m.id))
  ] });
}
function Ba(t, e, n, r, o) {
  var z;
  const i = it(null), [s, l] = st({ width: 380, height: 260 });
  re(() => {
    const S = i.current;
    if (!S) return;
    const M = () => {
      const Y = Math.max(1, Math.ceil(S.getBoundingClientRect().width)), g = Math.max(1, Math.ceil(S.getBoundingClientRect().height));
      l((I) => I.width === Y && I.height === g ? I : { width: Y, height: g });
    };
    if (M(), typeof ResizeObserver > "u") return;
    const X = new ResizeObserver(M);
    return X.observe(S), () => X.disconnect();
  }, [t, n, e]);
  const p = s.width, v = s.height, c = e.reduce((S, M) => {
    const X = dt(M);
    return {
      minX: Math.min(S.minX, X.minX),
      minY: Math.min(S.minY, X.minY),
      maxX: Math.max(S.maxX, X.maxX),
      maxY: Math.max(S.maxY, X.maxY)
    };
  }, dt(t)), y = (c.minX - r.x) * r.z, a = (c.minY - r.y) * r.z, u = (c.maxX - r.x) * r.z, d = (c.maxY - r.y) * r.z, w = Math.max(8, o.width - p - 8), h = Math.max(8, o.height - v - 8), x = (S, M) => ({ left: Math.min(Math.max(8, S), w), top: Math.min(Math.max(8, M), h) }), f = [
    x((y + u) / 2 - p / 2, a - v - 12),
    x((y + u) / 2 - p / 2, d + 12),
    x((o.width - p) / 2, 12),
    x(y - p - 12, a + (d - a - v) / 2),
    x(u + 12, a + (d - a - v) / 2)
  ], m = n.map((S) => {
    const M = dt(S);
    return { left: (M.minX - r.x) * r.z, top: (M.minY - r.y) * r.z, right: (M.maxX - r.x) * r.z, bottom: (M.maxY - r.y) * r.z };
  });
  if (t.type === "arrow") {
    const S = jt(t, new Map(n.map((g) => [g.id, g])), n), M = S.routing === "orthogonal" && S.pathPoints ? Un(S.pathPoints) : { x: (S.start.x + S.end.x) / 2, y: (S.start.y + S.end.y) / 2 }, X = 180 * r.z, Y = 36 * r.z;
    m.push({
      left: (M.x - r.x) * r.z - X / 2,
      top: (M.y - r.y) * r.z - Y / 2,
      right: (M.x - r.x) * r.z + X / 2,
      bottom: (M.y - r.y) * r.z + Y / 2
    });
  }
  const k = f[0], $ = (S, M) => {
    const X = Math.max(0, Math.min(S.left + p, M.right) - Math.max(S.left, M.left)), Y = Math.max(0, Math.min(S.top + v, M.bottom) - Math.max(S.top, M.top));
    return X * Y;
  }, b = ((z = f.map((S) => ({
    candidate: S,
    overlap: m.reduce((M, X) => M + $(S, X), 0),
    distance: Math.hypot(S.left - k.left, S.top - k.top)
  })).sort((S, M) => S.overlap - M.overlap || S.distance - M.distance)[0]) == null ? void 0 : z.candidate) ?? k;
  return { inspectorRef: i, position: b };
}
function qn(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function Ha(t) {
  const e = t.type === "image" ? [] : ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), qn(t) && e.push("diagram"), e;
}
function qc(t) {
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
const Ka = "#3b82f6";
function pe(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function Qe(t) {
  return Math.round(pe(t, 0, 255)).toString(16).padStart(2, "0");
}
function ja(t) {
  const e = t.trim().endsWith("%"), n = Number.parseFloat(t);
  return Number.isFinite(n) ? e ? n * 2.55 : n : 0;
}
function Le(t) {
  var i, s;
  const e = t.trim().toLowerCase(), n = (i = e.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : i[1];
  if (n)
    return n.length === 3 || n.length === 4 ? `#${n.slice(0, 3).split("").map((l) => `${l}${l}`).join("")}` : `#${n.slice(0, 6)}`;
  const r = (s = e.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : s[1];
  if (r) {
    const l = r.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(ja);
    if (l.length === 3) return `#${l.map(Qe).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? Ka;
}
function Nr(t) {
  const e = Le(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, r = Number.parseInt(e.slice(2, 4), 16) / 255, o = Number.parseInt(e.slice(4, 6), 16) / 255, i = Math.max(n, r, o), s = Math.min(n, r, o), l = i - s;
  let p = 0;
  return l !== 0 && (i === n ? p = 60 * ((r - o) / l % 6) : i === r ? p = 60 * ((o - n) / l + 2) : p = 60 * ((n - r) / l + 4)), p < 0 && (p += 360), { hue: p, saturation: i === 0 ? 0 : l / i, value: i };
}
function Pr({ hue: t, saturation: e, value: n }) {
  const r = (t % 360 + 360) % 360, o = n * e, i = o * (1 - Math.abs(r / 60 % 2 - 1)), s = n - o;
  let l = 0, p = 0, v = 0;
  return r < 60 ? [l, p, v] = [o, i, 0] : r < 120 ? [l, p, v] = [i, o, 0] : r < 180 ? [l, p, v] = [0, o, i] : r < 240 ? [l, p, v] = [0, i, o] : r < 300 ? [l, p, v] = [i, 0, o] : [l, p, v] = [o, 0, i], `#${Qe((l + s) * 255)}${Qe((p + s) * 255)}${Qe((v + s) * 255)}`;
}
function Ua(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function Ra({ value: t, onChange: e }) {
  const [n, r] = st(() => Nr(t)), o = it(null), i = it(null), s = it(null);
  St(() => {
    const f = Nr(t);
    r((m) => Ua(m, f) ? m : f);
  }, [t]);
  const l = (f) => {
    r(f), e(Pr(f));
  }, p = (f) => {
    var z;
    const m = (z = o.current) == null ? void 0 : z.getBoundingClientRect();
    if (!m) return;
    const k = f.clientX - (m.left + m.width / 2), $ = f.clientY - (m.top + m.height / 2), b = Math.atan2($, k) * 180 / Math.PI + 90;
    l({ ...n, hue: (b + 360) % 360 });
  }, v = (f) => {
    var k;
    const m = (k = i.current) == null ? void 0 : k.getBoundingClientRect();
    m && l({
      ...n,
      saturation: pe((f.clientX - m.left) / m.width, 0, 1),
      value: pe(1 - (f.clientY - m.top) / m.height, 0, 1)
    });
  }, c = (f, m) => {
    var k, $;
    m.button !== 0 && m.pointerType !== "touch" || (m.preventDefault(), m.stopPropagation(), s.current = f, ($ = (k = m.currentTarget).setPointerCapture) == null || $.call(k, m.pointerId), f === "hue" ? p(m) : v(m));
  }, y = (f) => {
    s.current && (f.preventDefault(), s.current === "hue" ? p(f) : v(f));
  }, a = (f) => {
    var m, k;
    s.current = null;
    try {
      (k = (m = f.currentTarget).releasePointerCapture) == null || k.call(m, f.pointerId);
    } catch {
      return;
    }
  }, u = (n.hue - 90) * Math.PI / 180, d = 53, w = {
    left: 66 + Math.cos(u) * d,
    top: 66 + Math.sin(u) * d
  }, h = Pr({ hue: n.hue, saturation: 1, value: 1 }), x = (f) => l({ ...n, hue: (n.hue + f + 360) % 360 });
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
        onPointerDown: (f) => c("hue", f),
        onPointerMove: y,
        onPointerUp: a,
        onKeyDown: (f) => {
          (f.key === "ArrowLeft" || f.key === "ArrowDown") && (f.preventDefault(), x(-1)), (f.key === "ArrowRight" || f.key === "ArrowUp") && (f.preventDefault(), x(1));
        },
        children: [
          /* @__PURE__ */ C("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ C("span", { className: "canvas-color-wheel-hue-marker", style: { left: w.left, top: w.top } })
        ]
      }
    ),
    /* @__PURE__ */ C(
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
        style: { backgroundColor: h },
        onPointerDown: (f) => c("sv", f),
        onPointerMove: y,
        onPointerUp: a,
        onKeyDown: (f) => {
          const m = f.shiftKey ? 0.1 : 0.02;
          f.key === "ArrowLeft" && (f.preventDefault(), l({ ...n, saturation: pe(n.saturation - m, 0, 1) })), f.key === "ArrowRight" && (f.preventDefault(), l({ ...n, saturation: pe(n.saturation + m, 0, 1) })), f.key === "ArrowDown" && (f.preventDefault(), l({ ...n, value: pe(n.value - m, 0, 1) })), f.key === "ArrowUp" && (f.preventDefault(), l({ ...n, value: pe(n.value + m, 0, 1) }));
        },
        children: /* @__PURE__ */ C("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${n.saturation * 100}%`, top: `${(1 - n.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ K("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ C("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ C("span", { children: Le(t).toUpperCase() })
    ] })
  ] });
}
function Ga({ s: t, isDarkMode: e, editing: n, installedFontFamilies: r, patchSelected: o, applyFormat: i, applyList: s, applyCustomFontFamily: l }) {
  const p = Ft(t), v = e ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100";
  return /* @__PURE__ */ K(At, { children: [
    "      ",
    /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
      /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
      /* @__PURE__ */ K("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: le(t), color: V.white, mixBlendMode: "normal" }, children: [
        /* @__PURE__ */ C("span", { "aria-hidden": "true", children: "A" }),
        /* @__PURE__ */ C("input", { "data-canvas-control": "text-color", type: "color", "aria-label": "글씨 색", value: t.textColor ?? le(t), onChange: (c) => o({ textColor: c.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
      ] }),
      /* @__PURE__ */ K("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${e ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
        /* @__PURE__ */ C("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
        /* @__PURE__ */ C("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => o({ fontSize: Math.max(8, p - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ C(ki, { className: "w-3.5 h-3.5" }) }),
        /* @__PURE__ */ C("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: p }),
        /* @__PURE__ */ C("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => o({ fontSize: Math.min(96, p + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ C(Mi, { className: "w-3.5 h-3.5" }) })
      ] }),
      /* @__PURE__ */ K("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${e ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
        /* @__PURE__ */ C("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (c) => {
          const y = Ea(c.target.value);
          o(y === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: y, customFontFamily: void 0 });
        }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${e ? "text-slate-200" : "text-slate-700"}`, children: $a.map((c) => /* @__PURE__ */ C("option", { value: c, className: e ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: Vt[c].label }, c)) }),
        /* @__PURE__ */ C(Si, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
      ] }),
      t.fontFamily === "custom" && /* @__PURE__ */ K(At, { children: [
        /* @__PURE__ */ C("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (c) => l(c.target.value), onChange: (c) => c.currentTarget.value && l(c.currentTarget.value), onKeyDown: (c) => {
          c.key === "Enter" && (c.preventDefault(), l(c.currentTarget.value));
        }, onDoubleClick: (c) => c.stopPropagation(), onPointerDown: (c) => c.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${e ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
        /* @__PURE__ */ C("datalist", { id: `canvas-font-families-${t.id}`, children: r.map((c) => /* @__PURE__ */ C("option", { value: c }, c)) })
      ] })
    ] }),
    /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${e ? "border-slate-700" : "border-slate-100"}`, children: [
      /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
      /* @__PURE__ */ C("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${e ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", Qr, "왼쪽 정렬"], ["center", Jr, "가운데 정렬"], ["right", to, "오른쪽 정렬"]].map(([c, y, a]) => /* @__PURE__ */ C("button", { type: "button", "aria-label": a, title: a, onClick: () => o({ textAlign: c }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${Tt(t) === c ? "bg-blue-600 text-white shadow-sm" : v}`, children: /* @__PURE__ */ C(y, { className: "w-4 h-4" }) }, c)) }),
      n && /* @__PURE__ */ K(At, { children: [
        /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
        /* @__PURE__ */ C("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${e ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", $i, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", Ci, "번호 목록"]].map(([c, y, a]) => /* @__PURE__ */ C("button", { type: "button", onClick: () => s(c), "aria-label": a, title: a, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: y ? /* @__PURE__ */ C(y, { className: "w-4 h-4" }) : /* @__PURE__ */ C("span", { className: "text-base leading-none", children: "–" }) }, c)) }),
        /* @__PURE__ */ C("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${e ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: zi, label: "굵게" }, { cmd: "italic", Icon: Xi, label: "기울임" }, { cmd: "underline", Icon: Yi, label: "밑줄" }].map(({ cmd: c, Icon: y, label: a }) => /* @__PURE__ */ C("button", { type: "button", onClick: () => i(c), "aria-label": a, title: a, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ C(y, { className: "w-4 h-4" }) }, c)) })
      ] })
    ] })
  ] });
}
const Va = [2, 4, 6, 8], Er = Math.PI / 12;
function qa(t) {
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
      return zo(t);
  }
}
function Lr(t) {
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
      return zo(t);
  }
}
function zo(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Pn(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Tr(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Za({
  shape: t,
  selection: e,
  selectionActions: n,
  shapes: r,
  camera: o,
  canvasSize: i,
  isDarkMode: s,
  editing: l,
  showPalette: p,
  installedFontFamilies: v,
  setShowPalette: c,
  setActiveColor: y,
  patchSelected: a,
  applyFormat: u,
  applyList: d,
  applyCustomFontFamily: w,
  onClose: h
}) {
  var N;
  const x = s ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", f = e.length > 1, m = e.some((E) => !!E.groupId), k = t.type === "draw", $ = k || Tr(t) && !Pn(t) ? "stroke" : Pn(t) ? "fill" : "text", [b, z] = st($), [S, M] = st("");
  re(() => z($), [$, t.id]);
  const X = b === "text" ? le(t) : b === "stroke" ? t.strokeColor ?? (t.color ? ft[t.color].border : V.ink) : Ce(t);
  re(() => M(Le(X).toUpperCase()), [X]);
  const Y = Le(X), g = (E) => {
    a(k || b === "stroke" ? { strokeColor: E } : b === "text" ? { textColor: E } : { fillColor: E });
  }, I = (E) => {
    y(E), a(k || b === "stroke" ? { color: E, strokeColor: void 0 } : b === "text" ? { textColor: ft[E].text } : { color: E, fillColor: void 0 }), c(!1);
  }, { inspectorRef: F, position: W } = Ba(t, e, r, o, i), P = e.every(qa), O = new Set(e.map(Lr)).size === 1 ? Lr(t) : void 0, D = Ha(t), T = t.type === "image" ? "arrange" : t.type === "arrow" ? "arrow" : D[0] ?? "color", [H, R] = st(T);
  re(() => {
    D.includes(H) || R(T);
  }, [T, D, H]);
  const tt = t.type === "arrow" && !!((N = t.orthogonalWaypoints) != null && N.length), ot = t.type === "arrow" ? t.arrowStart ?? "none" : "none", Q = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", U = (E, j, ct, xt, wt = xt) => /* @__PURE__ */ C("button", { type: "button", title: xt, "aria-label": wt, onClick: ct, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${j ? "bg-blue-600 text-white" : x}`, children: E }), et = (E, j = "") => /* @__PURE__ */ C("span", { className: `px-1 text-[10px] font-semibold tracking-wide opacity-60 ${j}`, children: E }), at = (E, j, ct, xt, wt = !1) => /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      title: j,
      "aria-label": j,
      disabled: !xt,
      onClick: ct,
      className: `w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default ${wt ? "text-rose-500 hover:bg-rose-500/10" : x}`,
      children: /* @__PURE__ */ C(E, { className: "w-4 h-4" })
    }
  ), nt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ K("div", { ref: F, "data-canvas-inspector": k ? "draw" : "text", className: `absolute z-40 pointer-events-auto flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${s ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: W.left, top: W.top }, onPointerDown: (E) => {
    E.stopPropagation();
    const j = E.target instanceof Element ? E.target : null;
    j != null && j.closest("input, select, textarea") || E.preventDefault();
  }, onClick: (E) => E.stopPropagation(), children: [
    f ? /* @__PURE__ */ K("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      /* @__PURE__ */ K("span", { className: "flex-1", children: [
        e.length,
        "개 선택됨"
      ] }),
      h && /* @__PURE__ */ C("button", { type: "button", title: "설정 닫기", "aria-label": "설정 닫기", onClick: h, className: `w-10 h-10 rounded-lg flex items-center justify-center ${x}`, children: "×" })
    ] }) : /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ C("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto flex-1", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: D.map((E) => /* @__PURE__ */ C("button", { type: "button", role: "tab", "aria-selected": H === E, onClick: () => R(E), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${H === E ? "bg-blue-600 text-white" : x}`, children: nt[E] }, E)) }),
      h && /* @__PURE__ */ C("button", { type: "button", title: "설정 닫기", "aria-label": "설정 닫기", onClick: h, className: `w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${x}`, children: "×" })
    ] }),
    /* @__PURE__ */ K("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: f || H === "color" ? void 0 : "none" }, children: [
      /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: k ? "그리기" : "색상" }),
      /* @__PURE__ */ C("button", { type: "button", title: k ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": k ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => c((E) => !E), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${s ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ C("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ C("span", { className: "canvas-color-wheel-trigger-dot", style: { background: Y } }) }) }),
      p && /* @__PURE__ */ K("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${s ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !k && /* @__PURE__ */ K("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          Pn(t) && /* @__PURE__ */ C("button", { type: "button", role: "tab", "aria-selected": b === "fill", onClick: () => z("fill"), className: b === "fill" ? "is-active" : "", children: "배경" }),
          Tr(t) && /* @__PURE__ */ C("button", { type: "button", role: "tab", "aria-selected": b === "stroke", onClick: () => z("stroke"), className: b === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ C("button", { type: "button", role: "tab", "aria-selected": b === "text", onClick: () => z("text"), className: b === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ C("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: jn.map((E) => /* @__PURE__ */ C("button", { type: "button", title: ft[E].label, "aria-label": `색 ${ft[E].label}`, onClick: () => I(E), className: "canvas-color-preset", style: { background: ft[E].bg, borderColor: ft[E].border, outline: t.color === E && !t.fillColor && !t.strokeColor ? `2px solid ${V.blue}` : void 0, outlineOffset: 1 } }, E)) }),
        /* @__PURE__ */ C(Ra, { value: X, onChange: g }),
        /* @__PURE__ */ K("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ C("span", { children: "#" }),
          /* @__PURE__ */ C(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: S.replace(/^#/, ""),
              onChange: (E) => {
                const j = E.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                M(`#${j}`.toUpperCase()), j.length === 6 && g(`#${j}`);
              },
              onBlur: () => M(Le(X).toUpperCase()),
              onPointerDown: (E) => E.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !f && H !== "color" && !k && /* @__PURE__ */ K(At, { children: [
      H === "text" && /* @__PURE__ */ C(Ga, { s: t, isDarkMode: s, editing: l, installedFontFamilies: v, patchSelected: a, applyFormat: u, applyList: d, applyCustomFontFamily: w }),
      (H === "arrange" && t.type === "card" || H === "arrow" && t.type === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${s ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ K(At, { children: [
          /* @__PURE__ */ C("div", { className: `w-px h-6 ${s ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ C("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (E) => E.stopPropagation(), onChange: (E) => a({ category: E.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${s ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            et("경로"),
            U("직선", (t.routing ?? "straight") === "straight", () => a({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            U("직각", t.routing === "orthogonal", () => a({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            U("곡선", (t.routing ?? "") === "curved", () => a({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            tt && U("자동", !1, () => a({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            et("선"),
            U("—", (t.strokeStyle ?? "solid") === "solid", () => a({ strokeStyle: "solid" }), "실선"),
            U("- -", t.strokeStyle === "dashed", () => a({ strokeStyle: "dashed" }), "파선"),
            U("···", t.strokeStyle === "dotted", () => a({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            et("시작"),
            U(ot === "none" ? "○" : ot === "dot" ? "●" : "◀", ot !== "none", () => a({ arrowStart: ot === "none" ? "arrow" : ot === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${ot === "none" ? "없음" : ot === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            et("끝"),
            U(Q === "none" ? "○" : Q === "dot" ? "●" : "▶", Q !== "none", () => a({ arrowEnd: Q === "arrow" ? "dot" : Q === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${Q === "none" ? "없음" : Q === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      H === "diagram" && /* @__PURE__ */ C("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${s ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    (f || H === "arrange") && /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", children: [
      at(Ei, "맨 앞으로", () => n.reorderSelected("front"), !0),
      at(ro, "앞으로", () => n.reorderSelected("forward"), !0),
      at(oo, "뒤로", () => n.reorderSelected("backward"), !0),
      at(Li, "맨 뒤로", () => n.reorderSelected("back"), !0)
    ] }),
    P && (f || H === "color" || H === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${s ? "border-slate-700" : "border-slate-100"}`, children: [
      et("굵기"),
      Va.map((E) => /* @__PURE__ */ C(lt.Fragment, { children: U(String(E), O === E, () => a({ strokeWidth: E }), `굵기 ${E}`) }, E))
    ] }),
    /* @__PURE__ */ K("div", { className: `canvas-selection-actions flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${s ? "border-slate-700" : "border-slate-100"}`, children: [
      et("선택", "canvas-selection-label"),
      /* @__PURE__ */ K("div", { className: "canvas-selection-action-buttons flex flex-wrap items-center gap-1 pointer-events-auto", children: [
        at(eo, "그룹 (Ctrl+G)", n.group, f),
        at(Ii, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, m),
        at(Ni, "복사 (Ctrl+C)", n.copySelected, !0),
        at(Ti, "붙여넣기 (Ctrl+V)", () => {
          n.pasteClipboard();
        }, !0),
        at(Tn, "복제", n.duplicateSelected, !0),
        at(no, "잠금/잠금 해제 (⇧⌘L)", n.toggleLocked, !0),
        at(Fi, "왼쪽으로 15도 회전", () => n.rotateSelected(-Er), !0),
        at(Di, "오른쪽으로 15도 회전", () => n.rotateSelected(Er), !0),
        at(Wi, "회전 초기화", () => n.rotateSelected(0), !0),
        at(Pi, "삭제 (Delete)", n.deleteSelected, !0, !0)
      ] })
    ] })
  ] });
}
const Fr = 12, he = 8;
function Qa(t, e, n) {
  const r = (t.minX + t.maxX) / 2, o = t.minY - Fr - n.height, i = o >= he ? "above" : "below", s = i === "above" ? o : t.maxY + Fr, l = Math.max(he, e.width - n.width - he), p = Math.max(he, e.height - n.height - he);
  return {
    placement: i,
    left: Math.min(Math.max(he, r - n.width / 2), l),
    top: Math.min(Math.max(he, s), p)
  };
}
const Ja = [2, 4, 6, 8], tc = {
  note: !0,
  card: !0,
  text: !0,
  rect: !0,
  ellipse: !0,
  triangle: !0,
  diamond: !0,
  hexagon: !0,
  star: !0
};
function ec(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Dr(t) {
  switch (t.type) {
    case "arrow":
    case "draw":
    case "frame":
    case "rect":
    case "ellipse":
    case "triangle":
    case "diamond":
    case "hexagon":
    case "star":
      return !0;
    case "note":
    case "card":
    case "text":
    case "image":
      return !1;
    default:
      return ec(t);
  }
}
function nc({
  selection: t,
  selectionActions: e,
  camera: n,
  canvasSize: r,
  isDarkMode: o,
  setActiveColor: i,
  patchSelected: s,
  onOpenInspector: l
}) {
  const p = it(null), [v, c] = st({ width: 320, height: 44 });
  re(() => {
    const T = p.current;
    if (!T) return;
    const H = () => {
      const tt = T.getBoundingClientRect(), ot = Math.max(1, Math.ceil(tt.width)), Q = Math.max(1, Math.ceil(tt.height));
      c((U) => U.width === ot && U.height === Q ? U : { width: ot, height: Q });
    };
    if (H(), typeof ResizeObserver > "u") return;
    const R = new ResizeObserver(H);
    return R.observe(T), () => R.disconnect();
  }, [t]);
  const y = t.every((T) => !!T.locked), a = t.every((T) => T.type === "draw"), u = t.length === 1 ? t[0] : null, d = t.length > 1, w = u !== null && tc[u.type] === !0, h = t.every(Dr), x = t.reduce(
    (T, H) => {
      const R = dt(H);
      return {
        minX: Math.min(T.minX, R.minX),
        minY: Math.min(T.minY, R.minY),
        maxX: Math.max(T.maxX, R.maxX),
        maxY: Math.max(T.maxY, R.maxY)
      };
    },
    dt(t[0])
  ), f = {
    minX: (x.minX - n.x) * n.z,
    minY: (x.minY - n.y) * n.z,
    maxX: (x.maxX - n.x) * n.z,
    maxY: (x.maxY - n.y) * n.z
  }, m = Qa(f, r, v), [k, $] = st(!1);
  re(() => {
    $(!1);
  }, [t]);
  const b = o ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", z = (T, H, R, tt = {}) => /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      title: T,
      "aria-label": T,
      disabled: tt.disabled,
      onClick: H,
      className: `w-10 h-10 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${tt.active ? "bg-blue-600 text-white" : b}`,
      children: /* @__PURE__ */ C(R, { className: "w-4 h-4" })
    },
    T
  ), S = (T, H, R, tt = !1, ot = !1) => /* @__PURE__ */ C(
    "button",
    {
      type: "button",
      title: H,
      "aria-label": H,
      disabled: ot,
      onClick: R,
      className: `h-10 min-w-10 px-2 rounded-lg text-[11px] font-bold transition-colors disabled:opacity-30 disabled:cursor-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 ${tt ? "bg-blue-600 text-white" : b}`,
      children: T
    },
    `${H}-${T}`
  ), M = (T) => {
    i(T), s(a ? { color: T, strokeColor: void 0 } : { color: T, fillColor: void 0 }), $(!1);
  }, X = a ? De(t[0]) : Ce(t[0]), Y = u ? Ft(u) : 14, g = (u == null ? void 0 : u.type) === "arrow" ? u : null, I = g ? g.arrowStart ?? "none" : "none", F = g ? g.arrowEnd ?? "arrow" : "arrow", W = (g == null ? void 0 : g.routing) ?? "straight", P = new Set(t.filter(Dr).map((T) => T.strokeWidth)), L = P.size === 1 ? [...P][0] : void 0, O = /* @__PURE__ */ K("div", { className: "relative", children: [
    /* @__PURE__ */ C(
      "button",
      {
        type: "button",
        title: "색상",
        "aria-label": "색상",
        disabled: y,
        onClick: () => $((T) => !T),
        className: `w-10 h-10 rounded-lg flex items-center justify-center disabled:opacity-30 ${b}`,
        children: /* @__PURE__ */ C(
          "span",
          {
            "aria-hidden": "true",
            className: "block w-5 h-5 rounded-full border",
            style: {
              background: X,
              borderColor: o ? V.slate600 : V.slate300
            }
          }
        )
      }
    ),
    k && !y && /* @__PURE__ */ C(
      "div",
      {
        "data-canvas-color-popover": !0,
        className: `absolute left-0 z-50 p-2 rounded-xl border shadow-xl ${o ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`,
        style: { top: m.placement === "above" ? "100%" : void 0, bottom: m.placement === "below" ? "100%" : void 0 },
        children: /* @__PURE__ */ C("div", { className: "canvas-color-presets", "aria-label": "기본 색상", style: { width: 180 }, children: jn.map((T) => /* @__PURE__ */ C(
          "button",
          {
            type: "button",
            title: ft[T].label,
            "aria-label": `색 ${ft[T].label}`,
            onClick: () => M(T),
            className: "canvas-color-preset",
            style: { background: ft[T].bg, borderColor: ft[T].border }
          },
          T
        )) })
      }
    )
  ] }), D = h && /* @__PURE__ */ C(At, { children: Ja.map((T) => S(
    String(T),
    `굵기 ${T}`,
    () => s({ strokeWidth: T }),
    L === T,
    y
  )) });
  return /* @__PURE__ */ C(
    "div",
    {
      ref: p,
      "data-canvas-floating-bar": !0,
      role: "toolbar",
      "aria-label": "선택 개체 도구",
      className: `absolute z-40 pointer-events-auto flex items-center gap-1 px-1 rounded-xl border shadow-xl backdrop-blur-sm ${o ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`,
      style: { left: m.left, top: m.top },
      onPointerDown: (T) => {
        T.stopPropagation();
        const H = T.target instanceof Element ? T.target : null;
        H != null && H.closest("input, select, textarea") || T.preventDefault();
      },
      onClick: (T) => T.stopPropagation(),
      children: y ? /* @__PURE__ */ K(At, { children: [
        z("잠금 해제", e.toggleLocked, dr),
        O,
        z("복제", () => {
        }, Tn, { disabled: !0 }),
        z("자세한 설정", () => {
        }, ur, { disabled: !0 })
      ] }) : /* @__PURE__ */ K(At, { children: [
        O,
        w && /* @__PURE__ */ K(At, { children: [
          S("−", "글씨 작게", () => s({ fontSize: Math.max(8, Y - 2) })),
          /* @__PURE__ */ C("span", { className: "w-8 text-center text-xs font-semibold tabular-nums", children: Y }),
          S("＋", "글씨 크게", () => s({ fontSize: Math.min(96, Y + 2) })),
          [
            ["left", Qr, "왼쪽 정렬"],
            ["center", Jr, "가운데 정렬"],
            ["right", to, "오른쪽 정렬"]
          ].map(([T, H, R]) => /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              title: R,
              "aria-label": R,
              onClick: () => s({ textAlign: T }),
              className: `w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${Tt(u) === T ? "bg-blue-600 text-white" : b}`,
              children: /* @__PURE__ */ C(H, { className: "w-4 h-4" })
            },
            T
          ))
        ] }),
        g && /* @__PURE__ */ K(At, { children: [
          S("직선", "직선", () => s({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), W === "straight"),
          S("곡선", "곡선", () => s({ routing: "curved", bend: g.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), W === "curved"),
          S("꺾임", "꺾임", () => s({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), W === "orthogonal"),
          S(
            I === "none" ? "○" : I === "dot" ? "●" : "◀",
            "시작점 표식",
            () => s({ arrowStart: I === "none" ? "arrow" : I === "arrow" ? "dot" : "none" }),
            I !== "none"
          ),
          S(
            F === "none" ? "○" : F === "dot" ? "●" : "▶",
            "끝점 표식",
            () => s({ arrowEnd: F === "arrow" ? "dot" : F === "dot" ? "none" : "arrow" }),
            F !== "none"
          )
        ] }),
        D,
        z(y ? "잠금 해제" : "잠금", e.toggleLocked, y ? dr : no),
        z("복제", e.duplicateSelected, Tn),
        z("앞으로", () => e.reorderSelected("forward"), ro),
        z("뒤로", () => e.reorderSelected("backward"), oo),
        d && z("그룹", e.group, eo),
        z("자세한 설정", l, ur)
      ] })
    }
  );
}
const rc = [2, 4, 6, 8];
function oc({
  tool: t,
  activeColor: e,
  drawStrokeWidth: n,
  drawInkStyle: r,
  objectSnapEnabled: o,
  onSelectInkStyle: i,
  onSelectObjectSnap: s,
  isDarkMode: l,
  onSelectColor: p,
  onSelectStrokeWidth: v
}) {
  const c = t === "draw" || t === "highlighter", y = `rounded-lg px-2 py-1 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${l ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-700"}`, a = /* @__PURE__ */ K(
    "button",
    {
      type: "button",
      "aria-label": "개체 정렬",
      "aria-pressed": o,
      title: "개체 이동 시 주변 개체에 자동 정렬",
      className: y,
      style: { minHeight: 28, whiteSpace: "nowrap" },
      onClick: () => s(!o),
      children: [
        "개체 정렬 ",
        o ? "켬" : "끔"
      ]
    }
  );
  return c ? /* @__PURE__ */ K(
    "div",
    {
      "data-canvas-pen-palette": "true",
      "aria-label": t === "highlighter" ? "형광펜 설정" : "펜 설정",
      style: { left: "50%", transform: "translateX(-50%)", width: 340, maxWidth: "calc(100% - 32px)", boxSizing: "border-box", justifyContent: "center" },
      className: `absolute top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex flex-wrap items-center gap-2 px-3 py-2 rounded-2xl border shadow-xl backdrop-blur-md ${l ? "bg-slate-900/90 border-slate-700 text-slate-200 shadow-slate-950/40" : "bg-white/90 border-slate-200 text-slate-700 shadow-slate-300/40"}`,
      onPointerDown: (d) => d.stopPropagation(),
      onClick: (d) => d.stopPropagation(),
      children: [
        /* @__PURE__ */ C("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }, role: "radiogroup", "aria-label": "펜 색상 선택", children: jn.map((d) => {
          const w = ft[d], h = e === d;
          return /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": h,
              title: `${w.label} 선택`,
              "aria-label": w.label,
              onClick: () => p(d),
              className: `group relative w-6 h-6 rounded-full transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${h ? "scale-110 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900" : "hover:scale-105 opacity-90 hover:opacity-100"}`,
              style: {
                backgroundColor: w.border,
                borderColor: w.border
              },
              children: h && /* @__PURE__ */ C("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ C("span", { className: "w-1.5 h-1.5 rounded-full bg-white shadow-sm" }) })
            },
            d
          );
        }) }),
        /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ C("span", { className: `mr-1 text-xs font-semibold ${l ? "text-slate-300" : "text-slate-500"}`, children: "두께" }),
          rc.map((d) => {
            const w = n === d;
            return /* @__PURE__ */ C(
              "button",
              {
                type: "button",
                title: `두께 ${d}px`,
                "aria-label": `두께 ${d}px`,
                "aria-pressed": w,
                onClick: () => v(d),
                className: `w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-semibold transition-colors ${w ? "bg-blue-600 text-white font-bold" : l ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-700"}`,
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
            onClick: () => i(d),
            className: y,
            style: { minHeight: 28, whiteSpace: "nowrap", ...r === d ? { background: "#2563eb", color: "#ffffff" } : {} },
            children: d === "raw" ? "보정 끔" : "보정 켬"
          },
          d
        )) }),
        /* @__PURE__ */ C("div", { style: { width: "100%", display: "flex", justifyContent: "center" }, children: a })
      ]
    }
  ) : null;
}
function ic({ isDarkMode: t, onExit: e }) {
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
        /* @__PURE__ */ C(Oi, { "aria-hidden": "true", className: "h-4 w-4" }),
        /* @__PURE__ */ C("span", { children: "펜 모드 종료" })
      ]
    }
  );
}
function En(t) {
  const e = t.closest("[data-canvas-board-id]");
  return (e == null ? void 0 : e.getAttribute("data-canvas-pen-mode")) === "true" || ["draw", "highlighter", "eraser"].includes((e == null ? void 0 : e.getAttribute("data-canvas-active-tool")) ?? "");
}
function ac({ category: t, onCommit: e }) {
  const [n, r] = st(!1), o = it(null);
  return St(() => {
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
        i.pointerType === "pen" || En(i.currentTarget) || i.stopPropagation();
      },
      onDoubleClick: (i) => i.stopPropagation(),
      onClick: (i) => {
        n || En(i.currentTarget) || r(!0);
      },
      onBlur: (i) => {
        if (!n) return;
        const s = (i.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim();
        e(s.toUpperCase() || "ENTITY"), r(!1);
      },
      onKeyDown: (i) => {
        !n && (i.key === "Enter" || i.key === " ") ? (i.preventDefault(), i.stopPropagation(), En(i.currentTarget) || r(!0)) : n && i.key === "Enter" && (i.preventDefault(), i.stopPropagation(), i.currentTarget.blur());
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
function cc({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: r,
  commitEditorHtml: o,
  onEditorKeyDown: i,
  setShapes: s,
  onDirty: l,
  renderDiagram: p
}) {
  const v = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", c = (a, u) => /* @__PURE__ */ C(
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
      className: `${v} ${a}`,
      style: u
    },
    "canvas-editor"
  );
  return { renderEditor: c, renderShapeBody: (a) => {
    const u = ft[a.color ?? "blue"], d = e === a.id, w = cn(a);
    if (a.type === "frame") {
      const b = a.strokeWidth ?? 2;
      return /* @__PURE__ */ C(
        "div",
        {
          "data-canvas-stroke-width": b,
          className: "w-full h-full rounded",
          style: { border: `${b / t.z}px solid ${n ? V.slate600 : V.slate400}` },
          children: /* @__PURE__ */ C(
            "div",
            {
              "data-canvas-frame-label": a.id,
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? V.slate400 : V.muted
              },
              children: d ? c("", { fontSize: 13 / t.z }) : Xe(a) || "프레임"
            }
          )
        }
      );
    }
    if (a.type === "note") {
      const b = Co(a);
      return /* @__PURE__ */ C(
        "div",
        {
          className: "w-full h-full flex items-center p-3",
          style: {
            background: Ce(a),
            color: u.text,
            borderRadius: 2,
            boxShadow: `0 ${3 / t.z}px ${10 / t.z}px rgba(15,23,42,0.18)`
          },
          children: d ? c("font-medium", { color: le(a), fontSize: b, fontFamily: Yt(a), textAlign: Tt(a) }) : w ? /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { maxHeight: "100%", color: le(a), fontSize: b, fontFamily: Yt(a), textAlign: Tt(a) }, dangerouslySetInnerHTML: { __html: w } }, "canvas-view") : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: le(a), fontSize: b, fontFamily: Yt(a), textAlign: Tt(a) }, children: /* @__PURE__ */ C("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    }
    if (a.type === "card") {
      const b = a.cardStyle === "glass";
      return qn(a) && p && !d ? /* @__PURE__ */ C("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: p(a) }) : /* @__PURE__ */ K(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: b ? V.glassFill : a.fillColor ?? V.slateCard,
            backdropFilter: b ? "blur(12px)" : void 0,
            WebkitBackdropFilter: b ? "blur(12px)" : void 0,
            border: `1px solid ${b ? V.glassBorder : V.darkBorder}`,
            boxShadow: b ? V.glassShadow : V.cardShadow
          },
          children: [
            /* @__PURE__ */ C(
              ac,
              {
                category: a.category,
                onCommit: (z) => {
                  s((S) => S.map((M) => M.id === a.id ? { ...M, category: z } : M)), l();
                }
              }
            ),
            d ? c("flex-1 font-medium", { color: a.textColor ?? V.white, fontSize: Ft(a), fontFamily: Yt(a), textAlign: Tt(a) }) : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: a.textColor ?? V.white, fontSize: Ft(a), fontFamily: Yt(a), textAlign: Tt(a) }, dangerouslySetInnerHTML: { __html: w } }, "canvas-view"),
            /* @__PURE__ */ K("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              a.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (a.type === "text") {
      const b = n ? "text-slate-100" : "text-slate-900", z = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${b}`,
        style: { color: a.textColor, fontSize: Ft(a), fontFamily: Yt(a), textAlign: Tt(a) }
      };
      return d ? c(`font-medium ${b}`, z.style) : w ? /* @__PURE__ */ C(
        "div",
        {
          "data-canvas-text-view": !0,
          ...z,
          dangerouslySetInnerHTML: { __html: w }
        },
        "canvas-view"
      ) : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, ...z, children: /* @__PURE__ */ C("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (a.type === "image") {
      const b = _n(a.src);
      return b ? /* @__PURE__ */ C(
        "img",
        {
          src: b,
          alt: a.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const h = Ce(a), x = po(a), f = le(a);
    if (a.type === "triangle" || a.type === "diamond" || a.type === "hexagon" || a.type === "star") {
      const b = a.strokeWidth ?? 2;
      return /* @__PURE__ */ K("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ C("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${a.w} ${a.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ C("polygon", { "data-canvas-stroke-width": b, points: mo(a.type, a.w, a.h), fill: h, stroke: x, strokeWidth: b / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ C("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: f }, children: d ? c("font-medium", { color: f, fontSize: Ft(a), fontFamily: Yt(a), textAlign: Tt(a) }) : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: Ft(a), fontFamily: Yt(a), textAlign: Tt(a) }, dangerouslySetInnerHTML: { __html: w } }, "canvas-view") })
      ] });
    }
    const k = _n(a.src), $ = a.type === "rect" || a.type === "ellipse" ? a.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ C(
      "div",
      {
        "data-canvas-stroke-width": $,
        className: `w-full h-full flex items-center justify-center p-3 ${a.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: h, border: `${$ / t.z}px solid ${x}`, color: f },
        children: d ? c("font-medium", { color: f, fontSize: Ft(a), fontFamily: Yt(a), textAlign: Tt(a) }) : /* @__PURE__ */ K("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: Ft(a), fontFamily: Yt(a), textAlign: Tt(a) }, children: [
          /* @__PURE__ */ C("div", { dangerouslySetInnerHTML: { __html: w } }),
          k && /* @__PURE__ */ C(
            "a",
            {
              href: k,
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
function sc({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: r,
  selected: o,
  editingId: i,
  boardIdentity: s
}) {
  const [l, p] = st({ width: 0, height: 0 });
  St(() => {
    const d = t.current;
    if (!d) return;
    let w = -1, h = -1;
    const x = (m = d.clientWidth, k = d.clientHeight) => {
      m === w && k === h || (w = m, h = k, p({ width: m, height: k }));
    };
    if (x(), typeof ResizeObserver < "u") {
      const m = new ResizeObserver((k) => {
        var b;
        const $ = (b = k[0]) == null ? void 0 : b.contentRect;
        x(($ == null ? void 0 : $.width) ?? d.clientWidth, ($ == null ? void 0 : $.height) ?? d.clientHeight);
      });
      return m.observe(d), () => m.disconnect();
    }
    const f = () => x();
    return window.addEventListener("resize", f), () => window.removeEventListener("resize", f);
  }, [s, t]);
  const v = Zt(() => new Map(n.map((d) => [d.id, d])), [n]), c = n, y = Zt(() => {
    if (!t.current || l.width <= 0 || l.height <= 0) return null;
    const d = 200 / r.z;
    return {
      minX: r.x - d,
      minY: r.y - d,
      maxX: r.x + l.width / r.z + d,
      maxY: r.y + l.height / r.z + d
    };
  }, [r, t, l]), a = yt((d) => {
    if (!y) return !1;
    if (d.id === i || o.has(d.id)) return !0;
    if (d.type === "arrow") {
      const h = jt(d, v, e.current), f = (h.routing === "orthogonal" ? h.pathPoints : null) ?? [h.start, h.end], m = Math.min(...f.map((z) => z.x)), k = Math.max(...f.map((z) => z.x)), $ = Math.min(...f.map((z) => z.y)), b = Math.max(...f.map((z) => z.y));
      return k >= y.minX && m <= y.maxX && b >= y.minY && $ <= y.maxY;
    }
    const w = dt(d);
    return w.maxX >= y.minX && w.minX <= y.maxX && w.maxY >= y.minY && w.minY <= y.maxY;
  }, [i, o, v, e, y]), u = Zt(
    () => c.filter(a),
    [a, c]
  );
  return { shapeById: v, visiblePaintOrder: u };
}
function lc({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: r,
  onDirty: o,
  patchSelected: i
}) {
  const s = yt(() => {
    const u = t.current;
    if (!u || !e) return;
    let d;
    try {
      d = an(u.innerHTML);
    } catch {
      r("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const w = u.scrollHeight;
    n((h) => h.map((x) => {
      if (x.id !== e) return x;
      const f = qn(x) ? { ...x, text: Xe({ ...x, html: d, text: void 0 }), html: void 0 } : { ...x, html: d, text: void 0 };
      if (x.type === "text")
        return x.manualSize ? f : { ...f, ...Fa(u, x) };
      if (x.type === "arrow") return f;
      const m = x.type === "note" ? 32 : x.type === "card" ? 96 : (
        // category header + type footer
        (x.type === "frame", 24)
      );
      if (x.type === "note" && Co(f) > $o) return f;
      const k = Math.max(x.h, w + m);
      return { ...f, h: k };
    })), o();
  }, [e, o]), l = (u) => {
    var d;
    (d = t.current) == null || d.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(u), s();
  }, p = () => {
    var h;
    const u = (h = window.getSelection()) == null ? void 0 : h.anchorNode, d = u instanceof Element ? u : u == null ? void 0 : u.parentElement, w = d == null ? void 0 : d.closest("ul, ol");
    return w instanceof HTMLElement ? w : null;
  }, v = (u, d, w) => {
    const h = document.createElement(d);
    for (; u.firstChild; ) h.append(u.firstChild);
    return u.replaceWith(h), h;
  }, c = (u) => {
    const d = t.current;
    if (!d) return;
    d.focus();
    const w = p();
    if (u === "number")
      if ((w == null ? void 0 : w.tagName) === "OL")
        w.removeAttribute("data-list-style");
      else if ((w == null ? void 0 : w.tagName) === "UL")
        v(w, "ol");
      else {
        document.execCommand("insertOrderedList");
        const h = p();
        h == null || h.removeAttribute("data-list-style");
      }
    else if ((w == null ? void 0 : w.tagName) === "UL") {
      const h = w.dataset.listStyle;
      u === h ? document.execCommand("insertUnorderedList") : w.dataset.listStyle = u;
    } else {
      (w == null ? void 0 : w.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const h = p();
      h && (h.dataset.listStyle = u);
    }
    s();
  };
  return { commitEditorHtml: s, applyFormat: l, applyList: c, onEditorKeyDown: (u) => {
    if (u.key === "Tab") {
      u.preventDefault(), document.execCommand(u.shiftKey ? "outdent" : "indent"), s();
      return;
    }
    if (u.key === " ") {
      const d = window.getSelection();
      if (d && d.isCollapsed && d.anchorNode) {
        const w = d.anchorNode, h = w.textContent || "", x = d.anchorOffset, f = h.slice(0, x).trim();
        if (!p()) {
          if (f === "-" || f === "–") {
            u.preventDefault(), w.textContent = h.slice(x), c("dash");
            return;
          }
          if (f === "*") {
            u.preventDefault(), w.textContent = h.slice(x), c("bullet");
            return;
          }
          if (f === "1.") {
            u.preventDefault(), w.textContent = h.slice(x), c("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (u) => {
    const d = Mo(u);
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
const Wr = "chois_canvas_ink_style", Or = "chois_canvas_object_snap", _r = "chois_canvas_show_grid", Ar = "chois_canvas_show_minimap";
function Re(t) {
  try {
    return typeof window > "u" ? null : window.localStorage.getItem(t);
  } catch {
    return null;
  }
}
function Ge(t, e) {
  try {
    typeof window < "u" && window.localStorage.setItem(t, e);
  } catch {
  }
}
function dc(t) {
  const [e, n] = st(() => Re(Wr) === "smoothed" ? "smoothed" : "raw"), [r, o] = st(() => Re(Or) !== "false"), [i, s] = st(() => Re(_r) !== "false"), [l, p] = st(() => Re(Ar) !== "false"), v = t.drawInkStyle ?? e, c = t.objectSnapEnabled ?? r, y = t.showGrid ?? i, a = t.showMinimap ?? l;
  return St(() => Ge(Wr, v), [v]), St(() => Ge(Or, String(c)), [c]), St(() => Ge(_r, String(y)), [y]), St(() => Ge(Ar, String(a)), [a]), { drawInkStyle: v, objectSnapEnabled: c, showGrid: y, minimapEnabled: a, selectInkStyle: (x) => {
    var f;
    t.drawInkStyle === void 0 && n(x), (f = t.onDrawInkStyleChange) == null || f.call(t, x);
  }, selectObjectSnap: (x) => {
    var f;
    t.objectSnapEnabled === void 0 && o(x), (f = t.onObjectSnapEnabledChange) == null || f.call(t, x);
  }, selectShowGrid: (x) => {
    var f;
    t.showGrid === void 0 && s(x), (f = t.onShowGridChange) == null || f.call(t, x);
  }, selectMinimap: (x) => {
    var f;
    t.showMinimap === void 0 && p(x), (f = t.onShowMinimapChange) == null || f.call(t, x);
  } };
}
function uc({
  boardIdentity: t,
  tool: e,
  activeColor: n,
  defaultActiveColor: r,
  onActiveColorChange: o,
  controlledShapes: i,
  onShapesChange: s,
  onDirty: l
}) {
  const p = it(null), v = it(null), [c, y] = st([]), a = i !== void 0 && s !== void 0, u = it(/* @__PURE__ */ new WeakMap()), d = Zt(() => {
    const B = u.current;
    return (a ? i ?? [] : c).map((q) => {
      let Z = B.get(q);
      return Z === void 0 && (Z = An(q), B.set(q, Z)), Z;
    }).filter((q) => q !== null);
  }, [a, i, c]), w = it(s);
  w.current = s;
  const h = yt((B) => {
    const q = w.current;
    if (!q) {
      y(B);
      return;
    }
    q(typeof B == "function" ? B : () => B);
  }, []), [x, f] = st({ x: -400, y: -300, z: 1 }), [m, k] = st(/* @__PURE__ */ new Set()), [$, b] = st(null), [z, S] = st({ kind: "none" }), [M, X] = st(!1), [Y, g] = st([]), [I, F] = st(""), [W, P] = st(!1), [L, O] = st(null), [D, T] = st(!1), [H, R] = st(n ?? r ?? "blue"), tt = n ?? H, ot = it(o);
  ot.current = o;
  const Q = yt((B) => {
    R((q) => {
      var G;
      const Z = typeof B == "function" ? B(q) : B;
      return (G = ot.current) == null || G.call(ot, Z), Z;
    });
  }, []), [U, et] = st(Ze), at = it(tt);
  at.current = tt;
  const nt = it([]), N = it([]), E = it(null), j = it(/* @__PURE__ */ new Map()), ct = it(null), xt = it(null), wt = it([]), zt = it(/* @__PURE__ */ new Set()), vt = it(d), A = it(x), pt = it(e), $t = it(m), Ct = it($), Xt = it(!1);
  vt.current = d, A.current = x, pt.current = e, $t.current = m, Ct.current = $;
  const ve = yt((B) => {
    var q;
    Xt.current = B, B && typeof window < "u" && ((q = window.getSelection()) == null || q.removeAllRanges()), T(B);
  }, []), [ge, ye] = st("ink"), [bt, It] = st("yellow"), Ht = e === "highlighter" ? bt : ge, Nt = it(Ht);
  Nt.current = Ht;
  const oe = yt((B) => {
    pt.current === "highlighter" ? It(B) : ye(B);
  }, []), Ut = it({ kind: "none" }), Jt = yt((B) => {
    Ut.current = B, S(B);
  }, []), mt = yt((B) => {
    $t.current = B, k(B);
  }, []);
  re(() => {
    var q;
    const B = /* @__PURE__ */ new Set();
    $t.current = B, Ct.current = null, j.current.clear(), nt.current = [], N.current = [], E.current = null, xt.current = null, wt.current = [], zt.current.clear(), Xt.current = !1, Jt({ kind: "none" }), k(B), b(null), X(!1), g([]), O(null), T(!1), F(""), (q = p.current) == null || q.focus();
  }, [Jt, t]), St(() => {
    let B = !1;
    const q = () => {
      const G = Ya();
      B || et(G);
    };
    if (q(), typeof document > "u" || !("fonts" in document)) return;
    const Z = () => q();
    return document.fonts.addEventListener("loadingdone", Z), () => {
      B = !0, document.fonts.removeEventListener("loadingdone", Z);
    };
  }, [t]);
  const Pt = ($ ? d.find((B) => B.id === $) : void 0) !== void 0;
  re(() => {
    if (!$ || !Pt) return;
    const B = () => {
      const Z = v.current, G = vt.current.find((ee) => ee.id === $);
      if (!Z || !G || (Z.dataset.seeded !== $ && (Z.innerHTML = cn(G), Z.dataset.seeded = $), document.activeElement === Z)) return;
      Z.focus();
      const Et = document.createRange();
      Et.selectNodeContents(Z), Et.collapse(!1);
      const Wt = window.getSelection();
      Wt == null || Wt.removeAllRanges(), Wt == null || Wt.addRange(Et);
    };
    B();
    const q = requestAnimationFrame(B);
    return () => cancelAnimationFrame(q);
  }, [$, Pt]);
  const Rt = yt((B) => {
    h((q) => {
      const Z = typeof B == "function" ? B(q) : B;
      return nt.current.push(q), nt.current.length > 100 && nt.current.shift(), N.current = [], Z;
    }), l();
  }, [l]), dn = yt((B) => {
    if (B.length === 0) return;
    let q = vt.current;
    for (const Z of B)
      nt.current.push(q), q = [...q, Z];
    nt.current.length > 100 && nt.current.splice(0, nt.current.length - 100), N.current = [], h((Z) => [...Z, ...B]), l();
  }, [l, h]), we = yt((B) => {
    const q = new Set(vt.current.filter((Z) => !Z.locked && B.has(Z.id)).map((Z) => Z.id));
    return q.size === 0 ? !1 : (Rt((Z) => Z.filter((G) => q.has(G.id) || G.parentId && q.has(G.parentId) ? !1 : G.type !== "arrow" ? !0 : !(G.fromId && q.has(G.fromId)) && !(G.toId && q.has(G.toId)))), mt(/* @__PURE__ */ new Set()), F(`${q.size}개 삭제됨`), !0);
  }, [Rt, mt]), Kt = yt(() => {
    E.current = vt.current;
  }, []), We = yt(() => {
    const B = E.current;
    E.current = null, !(!B || B === vt.current) && (nt.current.push(B), nt.current.length > 100 && nt.current.shift(), N.current = [], l());
  }, [l]), un = yt(() => {
    const B = E.current;
    E.current = null, !(!B || B === vt.current) && (vt.current = B, h(B));
  }, [h]), hn = yt((B, q) => {
    var Et;
    const Z = (Et = p.current) == null ? void 0 : Et.getBoundingClientRect(), G = A.current;
    return Z ? { x: (B - Z.left) / G.z + G.x, y: (q - Z.top) / G.z + G.y } : { x: 0, y: 0 };
  }, []), fn = yt(() => {
    var Z;
    const B = (Z = p.current) == null ? void 0 : Z.getBoundingClientRect(), q = A.current;
    return B ? { x: q.x + B.width / 2 / q.z, y: q.y + B.height / 2 / q.z } : { x: 0, y: 0 };
  }, []), Oe = yt((B) => {
    const q = new Set(vt.current.filter((G) => B.has(G.id) && G.groupId).map((G) => G.groupId));
    if (q.size === 0) return B;
    const Z = new Set(B);
    for (const G of vt.current) G.groupId && q.has(G.groupId) && Z.add(G.id);
    return Z;
  }, []);
  return {
    containerRef: p,
    editorRef: v,
    localShapes: c,
    setLocalShapes: y,
    controlled: a,
    shapes: d,
    setShapes: h,
    camera: x,
    setCamera: f,
    cameraRef: A,
    selected: m,
    setSelected: k,
    selectedRef: $t,
    editingId: $,
    setEditingId: b,
    editingIdRef: Ct,
    interaction: z,
    interactionRef: Ut,
    applyInteraction: Jt,
    isSpaceDown: M,
    setIsSpaceDown: X,
    guides: Y,
    setGuides: g,
    announcement: I,
    setAnnouncement: F,
    showInspectorPalette: W,
    setShowInspectorPalette: P,
    eraserPos: L,
    setEraserPos: O,
    isPenMode: D,
    setIsPenMode: ve,
    penModeRef: Xt,
    activeColor: tt,
    setActiveColor: Q,
    activeColorRef: at,
    drawColor: Ht,
    setDrawColor: oe,
    drawColorRef: Nt,
    installedFontFamilies: U,
    pointers: j,
    past: nt,
    future: N,
    selectNow: mt,
    commit: Rt,
    deleteSelection: we,
    beginHistory: Kt,
    endHistory: We,
    cancelHistory: un,
    toPage: hn,
    viewportCentre: fn,
    expandToGroups: Oe,
    toolRef: pt,
    shapesRef: vt,
    liveStrokeCanvasRef: ct,
    activeDrawRef: xt,
    pendingDrawsRef: wt,
    queuedDrawIdsRef: zt,
    commitDrawBatch: dn
  };
}
function hc({
  containerRef: t,
  camera: e,
  interactionRef: n,
  toolRef: r,
  pointers: o,
  shapesRef: i,
  setCamera: s,
  minZoom: l,
  maxZoom: p,
  shapes: v,
  selected: c,
  editingId: y,
  textualTypes: a,
  onZoomChange: u,
  onSelectionChange: d,
  onLocalCursor: w,
  toPage: h
}) {
  St(() => {
    u == null || u(e.z);
  }, [e.z, u]), St(() => {
    const M = t.current;
    if (!M) return;
    const X = (Y) => {
      if (Y.preventDefault(), Y.ctrlKey || Y.metaKey) {
        const g = M.getBoundingClientRect();
        s((I) => {
          const F = Math.min(p, Math.max(l, I.z * Math.exp(-Y.deltaY * 0.01))), W = Y.clientX - g.left, P = Y.clientY - g.top;
          return { x: I.x + W / I.z - W / F, y: I.y + P / I.z - P / F, z: F };
        });
      } else
        s((g) => ({ ...g, x: g.x + Y.deltaX / g.z, y: g.y + Y.deltaY / g.z }));
    };
    return M.addEventListener("wheel", X, { passive: !1 }), () => M.removeEventListener("wheel", X);
  }, [t, p, l, s]);
  const x = Zt(() => {
    const M = v.filter((X) => c.has(X.id));
    return {
      count: M.length,
      canGroup: M.length > 1,
      canUngroup: M.some((X) => !!X.groupId),
      isTextual: M.length === 1 && a.includes(M[0].type),
      selectedIds: M.map((X) => X.id)
    };
  }, [c, v, a]);
  St(() => {
    d == null || d(x);
  }, [d, x]);
  const f = Zt(() => {
    if (y) {
      const X = v.find((Y) => Y.id === y);
      return X && X.type !== "image" && X.type !== "draw" ? [X] : [];
    }
    const M = v.filter((X) => c.has(X.id));
    return M.length === 1, M;
  }, [y, c, v]), m = Zt(() => f.length === 0 ? null : f[0] ?? null, [f]), k = it(0), [$, b] = st(null);
  return { selectionInfo: x, inspectorSelection: f, inspectorShape: m, hoveredShapeId: $, onContainerPointerMove: (M) => {
    if (r.current === "select" && n.current.kind === "none" && o.current.size === 0 && M.pointerType !== "touch") {
      const X = h(M.clientX, M.clientY), Y = i.current, g = new Map(Y.map((W) => [W.id, W])), I = [...Y].reverse().find((W) => en.includes(W.type) && $e(W, X.x, X.y, e.z, g, Y)), F = (I == null ? void 0 : I.id) ?? null;
      F !== $ && b(F);
    } else $ !== null && b(null);
    if (w) {
      const X = performance.now();
      if (X - k.current < 60) return;
      k.current = X, w(h(M.clientX, M.clientY));
    }
  }, onContainerPointerLeave: () => {
    $ !== null && b(null), w == null || w(null);
  } };
}
function nn(t, e) {
  const n = new Set(e);
  for (const r of t) r.parentId && e.has(r.parentId) && n.add(r.id);
  return n;
}
function fc(t, e, n) {
  const r = nn(t, e);
  return t.map((o) => !r.has(o.id) || o.locked ? o : n === 0 ? { ...o, rotation: void 0 } : { ...o, rotation: (o.rotation ?? 0) + n });
}
function xc(t, e, n) {
  const r = nn(t, e), o = [...t];
  switch (n) {
    case "front":
      return [...t.filter((i) => !r.has(i.id)), ...t.filter((i) => r.has(i.id))];
    case "back":
      return [...t.filter((i) => r.has(i.id)), ...t.filter((i) => !r.has(i.id))];
    case "forward":
      for (let i = o.length - 2; i >= 0; i--) {
        const s = o[i], l = o[i + 1];
        s && l && r.has(s.id) && !r.has(l.id) && (o[i] = l, o[i + 1] = s);
      }
      return o;
    case "backward":
      for (let i = 1; i < o.length; i++) {
        const s = o[i], l = o[i - 1];
        s && l && r.has(s.id) && !r.has(l.id) && (o[i] = l, o[i - 1] = s);
      }
      return o;
    default: {
      const i = n;
      throw new Error(String(i));
    }
  }
}
const _t = 24, Xo = "choi01-canvas-selection";
function Br(t) {
  var e;
  return {
    ...t,
    points: (e = t.points) == null ? void 0 : e.map(([n, r]) => [n, r]),
    orthogonalWaypoints: t.type === "arrow" && t.orthogonalWaypoints ? t.orthogonalWaypoints.map((n) => ({ ...n })) : void 0
  };
}
function pc(t) {
  try {
    const e = JSON.parse(t);
    return !e || typeof e != "object" || !("marker" in e) || e.marker !== Xo || !("shapes" in e) || !Array.isArray(e.shapes) ? null : e.shapes.map((n) => Zr(n));
  } catch {
    return null;
  }
}
function mc({
  containerRef: t,
  shapesRef: e,
  clipboardRef: n,
  selectedRef: r,
  commit: o,
  deleteSelection: i,
  selectNow: s,
  setAnnouncement: l,
  createId: p
}) {
  return Zt(() => ({
    copySelected: () => {
      var y;
      const v = nn(e.current, r.current), c = e.current.filter((a) => v.has(a.id)).map(Br);
      c.length !== 0 && (n.current = c, typeof navigator < "u" && ((y = navigator.clipboard) != null && y.writeText) && navigator.clipboard.writeText(JSON.stringify({ marker: Xo, shapes: c })).catch(() => {
      }), l(String(c.length) + "개 복사됨"));
    },
    pasteClipboard: async () => {
      var u;
      let v = n.current;
      if (!v && typeof navigator < "u" && ((u = navigator.clipboard) != null && u.readText))
        try {
          v = pc(await navigator.clipboard.readText());
        } catch {
          v = null;
        }
      if (!v || v.length === 0) {
        l("붙여넣을 개체가 없습니다");
        return;
      }
      const c = new Map(v.map((d) => [d.id, p()])), y = /* @__PURE__ */ new Map(), a = v.map((d) => {
        var h;
        let w = d.groupId;
        return w && (y.has(w) || y.set(w, p("g")), w = y.get(w)), {
          ...Br(d),
          id: c.get(d.id) ?? p(),
          parentId: d.parentId ? c.get(d.parentId) ?? d.parentId : void 0,
          fromId: d.fromId ? c.get(d.fromId) ?? d.fromId : void 0,
          toId: d.toId ? c.get(d.toId) ?? d.toId : void 0,
          x: d.x + _t,
          y: d.y + _t,
          groupId: w,
          locked: void 0,
          points: (h = d.points) == null ? void 0 : h.map(([x, f]) => [x + _t, f + _t]),
          orthogonalWaypoints: d.type === "arrow" && d.orthogonalWaypoints ? d.orthogonalWaypoints.map((x) => ({ x: x.x + _t, y: x.y + _t })) : void 0
        };
      });
      o((d) => [...d, ...a]), s(new Set(a.map((d) => d.id))), l(String(a.length) + "개 붙여넣음");
    },
    rotateSelected: (v) => {
      const c = r.current;
      c.size !== 0 && (o((y) => fc(y, c, v)), l(v === 0 ? "회전 초기화됨" : "회전됨"));
    },
    reorderSelected: (v) => {
      const c = r.current;
      c.size !== 0 && (o((y) => xc(y, c, v)), l("레이어 순서 변경됨"));
    },
    deleteSelected: () => {
      i(r.current);
    },
    toggleLocked: () => {
      const v = r.current;
      if (v.size === 0) return;
      const c = e.current.filter((y) => v.has(y.id)).every((y) => y.locked);
      o((y) => y.map((a) => v.has(a.id) ? { ...a, locked: !c || void 0 } : a)), l(c ? "잠금 해제됨" : "잠김");
    },
    duplicateSelected: () => {
      var u;
      const v = nn(e.current, r.current);
      if (v.size === 0) return;
      const c = [], y = /* @__PURE__ */ new Map(), a = new Map(e.current.filter((d) => v.has(d.id)).map((d) => [d.id, p()]));
      for (const d of e.current) {
        if (!v.has(d.id)) continue;
        let w = d.groupId;
        w && (y.has(w) || y.set(w, p("g")), w = y.get(w)), c.push({
          ...d,
          id: a.get(d.id) ?? p(),
          parentId: d.parentId ? a.get(d.parentId) ?? d.parentId : void 0,
          fromId: d.fromId ? a.get(d.fromId) ?? d.fromId : void 0,
          locked: void 0,
          toId: d.toId ? a.get(d.toId) ?? d.toId : void 0,
          x: d.x + _t,
          y: d.y + _t,
          groupId: w,
          points: (u = d.points) == null ? void 0 : u.map(([h, x]) => [h + _t, x + _t]),
          orthogonalWaypoints: d.type === "arrow" && d.orthogonalWaypoints ? d.orthogonalWaypoints.map((h) => ({ x: h.x + _t, y: h.y + _t })) : void 0
        });
      }
      o((d) => [...d, ...c]), s(new Set(c.map((d) => d.id))), l(`${c.length}개 복제됨`);
    },
    group: () => {
      var y;
      const v = r.current;
      if (v.size < 2) return;
      const c = p("g");
      o((a) => a.map((u) => v.has(u.id) ? { ...u, groupId: c } : u)), l(`${v.size}개 그룹화됨`), (y = t.current) == null || y.focus();
    },
    ungroup: () => {
      var c;
      const v = r.current;
      v.size !== 0 && (o((y) => y.map((a) => v.has(a.id) ? { ...a, groupId: void 0 } : a)), l("그룹 해제됨"), (c = t.current) == null || c.focus());
    }
  }), [n, o, t, p, i, s, r, l, e]);
}
function Ve(t) {
  if (t.length === 0) return null;
  let e = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (const i of t) {
    const s = dt(i);
    e = Math.min(e, s.minX), n = Math.min(n, s.minY), r = Math.max(r, s.maxX), o = Math.max(o, s.maxY);
  }
  return { minX: e, minY: n, maxX: r, maxY: o };
}
function Ee(t, e, n, r, o) {
  const s = Math.min(o, Math.max(
    r,
    Math.min(e / (t.maxX - t.minX + 160), n / (t.maxY - t.minY + 160))
  ));
  return {
    x: (t.minX + t.maxX) / 2 - e / 2 / s,
    y: (t.minY + t.maxY) / 2 - n / 2 / s,
    z: s
  };
}
function Ln(t, e, n, r) {
  return { x: t.x - e / 2 / r, y: t.y - n / 2 / r, z: r };
}
function vc(t, e, n, r) {
  return t.minX >= e.x && t.maxX <= e.x + n / e.z && t.minY >= e.y && t.maxY <= e.y + r / e.z;
}
const Yo = (t) => ({
  id: "view",
  version: 1,
  shapes: t
});
function gc(t, e) {
  return pi(Yo(t), e);
}
function yc(t, e, n) {
  return mi(Yo(t), e, n);
}
function Io(t, e, n = t) {
  if (t.length === 0) return null;
  const r = new Map(n.map((h) => [h.id, h])), o = /* @__PURE__ */ new Map(), i = (h) => {
    const x = o.get(h.id);
    if (x) return x;
    const f = jt(h, r, n);
    return o.set(h.id, f), f;
  }, s = (h) => {
    var m;
    if (h.type !== "arrow") return dt(h);
    const x = i(h), f = (m = x.pathPoints) != null && m.length ? x.pathPoints : x.routing === "curved" ? [x.start, x.control, x.end] : [x.start, x.end];
    return {
      minX: Math.min(...f.map((k) => k.x)),
      minY: Math.min(...f.map((k) => k.y)),
      maxX: Math.max(...f.map((k) => k.x)),
      maxY: Math.max(...f.map((k) => k.y))
    };
  };
  let l = 1 / 0, p = 1 / 0, v = -1 / 0, c = -1 / 0;
  for (const h of t) {
    const x = s(h);
    l = Math.min(l, x.minX), p = Math.min(p, x.minY), v = Math.max(v, x.maxX), c = Math.max(c, x.maxY);
  }
  const y = 40, a = v - l + y * 2, u = c - p + y * 2;
  if (!Number.isFinite(a) || !Number.isFinite(u) || a > de.maxExportDimension || u > de.maxExportDimension || a * u > de.maxExportPixels) return null;
  const d = (h, x, f, m, k) => {
    const $ = h.fontSize ?? f, b = Yt(h), z = yo(cn(h));
    if (z.length === 0) return "";
    const S = Dt(h), M = h.textAlign === "right" ? "end" : h.textAlign === "center" ? "middle" : h.textAlign === "left" ? "start" : k, X = M === "end" ? S.maxX - 12 : M === "middle" ? (S.minX + S.maxX) / 2 : S.minX + 12, Y = S.minY + $ + 12;
    return z.map((g, I) => {
      const F = g.map((W) => `<tspan style="${[
        W.bold ? "font-weight:700" : `font-weight:${m}`,
        W.italic ? "font-style:italic" : "",
        W.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Gt(W.text)}</tspan>`).join("");
      return `<text x="${X}" y="${Y + I * $ * 1.4}" font-family="${Gt(b)}" font-size="${$}" fill="${x}" text-anchor="${M}">${F}</text>`;
    }).join("");
  }, w = t.map((h) => {
    const x = ft[h.color ?? "blue"], f = Dt(h), m = Bt(h), k = h.rotation ? ` transform="rotate(${h.rotation * 180 / Math.PI} ${m.x} ${m.y})"` : "", $ = h.strokeColor ?? (h.color ? ft[h.color].border : V.ink);
    if (h.type === "draw" && h.points) {
      const g = go(h), I = Gt(De(h)), F = g.opacity === 1 ? "" : ` stroke-opacity="${g.opacity}" fill-opacity="${g.opacity}"`;
      return `<path d="${g.d}" fill="${g.filled ? I : "none"}" stroke="${g.filled ? "none" : I}" stroke-width="${g.width}"${F} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (h.type === "arrow") {
      const g = i(h), I = h.strokeWidth ?? 2.5, F = Math.max(10, 8 + I * 2), W = Math.max(4, 2 + I), P = g.routing === "orthogonal" && g.pathPoints ? g.pathPoints : null, L = P && P.length > 1, O = L ? Fn(P) : g.routing === "curved" ? `M ${g.start.x} ${g.start.y} Q ${g.control.x} ${g.control.y} ${g.end.x} ${g.end.y}` : `M ${g.start.x} ${g.start.y} L ${g.end.x} ${g.end.y}`, D = L ? lo(P) : g.routing === "curved" ? (() => {
        const U = ze(0.94, g.start, g.control, g.end);
        return Math.atan2(g.end.y - U.y, g.end.x - U.x);
      })() : Math.atan2(g.end.y - g.start.y, g.end.x - g.start.x), T = L ? Te(P[0], P[1]) : g.routing === "orthogonal" && g.start.side ? g.start.side === "e" ? 0 : g.start.side === "w" ? Math.PI : g.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Te(g.start, g.end), H = h.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : h.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", R = (U, et, at, nt) => {
        if (U === "dot") return `<circle cx="${et}" cy="${at}" r="${W}" fill="${$}"/>`;
        if (U === "none") return "";
        const N = `${et - F * Math.cos(nt - 0.4)},${at - F * Math.sin(nt - 0.4)}`, E = `${et - F * Math.cos(nt + 0.4)},${at - F * Math.sin(nt + 0.4)}`;
        return `<polygon points="${et},${at} ${N} ${E}" fill="${$}"/>`;
      }, tt = g.routing === "orthogonal" && g.pathPoints ? Un(g.pathPoints) : g.bend === 0 ? { x: (g.start.x + g.end.x) / 2, y: (g.start.y + g.end.y) / 2 } : ze(0.5, g.start, g.control, g.end), ot = Xe(h), Q = ot ? `<text x="${tt.x}" y="${tt.y - 6}" text-anchor="middle" font-family="${Gt(Yt(h))}" font-size="${h.fontSize ?? 12}" fill="${$}">${Gt(ot)}</text>` : "";
      return `<path d="${O}" fill="none" stroke="${$}" stroke-width="${I}" stroke-linecap="round" stroke-linejoin="round"${H}/>` + R(h.arrowEnd ?? "arrow", g.end.x, g.end.y, D) + R(h.arrowStart ?? "none", g.start.x, g.start.y, T + Math.PI) + Q;
    }
    if (h.type === "image" && h.src) {
      const g = _n(h.src);
      return g ? `<image href="${Gt(g)}" x="${f.minX}" y="${f.minY}" width="${f.maxX - f.minX}" height="${f.maxY - f.minY}"${k}/>` : "";
    }
    if (h.type === "frame")
      return `<g${k}><rect x="${f.minX}" y="${f.minY}" width="${f.maxX - f.minX}" height="${f.maxY - f.minY}" fill="none" stroke="${V.slate400}" stroke-width="${h.strokeWidth ?? 2}" rx="4"/><text x="${f.minX}" y="${f.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${V.muted}">${Gt(h.text ?? "프레임")}</text></g>`;
    if (h.type === "note")
      return `<g${k}><rect x="${f.minX}" y="${f.minY}" width="${f.maxX - f.minX}" height="${f.maxY - f.minY}" fill="${Ce(h)}"/><rect x="${f.minX}" y="${f.minY}" width="${f.maxX - f.minX}" height="6" fill="${x.border}"/>` + d(h, le(h), 14, "600", "start") + "</g>";
    if (h.type === "card") {
      const g = h.cardStyle === "glass";
      return `<g${k}><rect x="${f.minX}" y="${f.minY}" width="${f.maxX - f.minX}" height="${f.maxY - f.minY}" rx="16" fill="${g ? V.glassFill : V.slateCard}"/><text x="${f.minX + 16}" y="${f.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${V.slate400}">[ ${Gt(h.category ?? "ENTITY")} ]</text>` + d(h, V.white, 16, "700", "start") + "</g>";
    }
    const b = h.type === "rect" || h.type === "ellipse" || h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star" ? h.strokeWidth ?? 2 : 2, z = Ce(h), S = po(h), M = h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star", X = M ? mo(h.type, f.maxX - f.minX, f.maxY - f.minY).split(" ").map((g) => {
      const [I, F] = g.split(",").map(Number);
      return `${I + f.minX},${F + f.minY}`;
    }).join(" ") : "", Y = h.type === "ellipse" ? `<ellipse cx="${(f.minX + f.maxX) / 2}" cy="${(f.minY + f.maxY) / 2}" rx="${(f.maxX - f.minX) / 2}" ry="${(f.maxY - f.minY) / 2}" fill="${z}" stroke="${S}" stroke-width="${b}"/>` : M ? `<polygon points="${X}" fill="${z}" stroke="${S}" stroke-width="${b}" stroke-linejoin="round"/>` : `<rect x="${f.minX}" y="${f.minY}" width="${f.maxX - f.minX}" height="${f.maxY - f.minY}" rx="12" fill="${z}" stroke="${S}" stroke-width="${b}"/>`;
    return `<g${k}>${Y}${d(h, x.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${a}" height="${u}" viewBox="${l - y} ${p - y} ${a} ${u}"><rect x="${l - y}" y="${p - y}" width="${a}" height="${u}" fill="${e ? V.canvasDark : V.canvasLight}"/>` + w + "</svg>";
}
function wc(t, e) {
  return Io(t, e);
}
function bc(t, e, n) {
  return Io(
    t.filter((r) => e.has(r.id)),
    n,
    t
  );
}
async function Hr(t) {
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
  const l = 2, p = r * l, v = o * l;
  if (!Number.isSafeInteger(p) || !Number.isSafeInteger(v) || p > de.maxExportDimension || v > de.maxExportDimension || p * v > de.maxExportPixels) return null;
  const c = document.createElement("canvas");
  c.width = p, c.height = v;
  const y = c.getContext("2d");
  return y ? (y.scale(l, l), y.drawImage(s, 0, 0), new Promise((a) => {
    try {
      c.toBlob((u) => a(u), "image/png");
    } catch {
      a(null);
    }
  })) : null;
}
function kc(t, e, n) {
  if (t.length < 2) return;
  const r = t.filter(
    (a) => a.type !== "draw" && a.type !== "arrow" && a.type !== "frame" && a.type !== "image"
  );
  if (r.length < 2) return;
  const o = r.map((a, u) => ({
    id: a.id,
    i: u,
    x: Bt(a).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: Bt(a).y,
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
  const l = 220, p = l * l, v = 80;
  let c = 400;
  const y = c / v;
  for (let a = 0; a < v; a++) {
    for (let u = 0; u < o.length; u++)
      o[u].vx = 0, o[u].vy = 0;
    for (let u = 0; u < o.length; u++)
      for (let d = u + 1; d < o.length; d++) {
        const w = o[u], h = o[d], x = w.x - h.x, f = w.y - h.y, m = Math.hypot(x, f) || 0.01, k = p / m, $ = x / m * k, b = f / m * k;
        w.vx += $, w.vy += b, h.vx -= $, h.vy -= b;
      }
    for (const [u, d] of s) {
      const w = u.x - d.x, h = u.y - d.y, x = Math.hypot(w, h) || 0.01, f = x * x / l, m = w / x * f, k = h / x * f;
      u.vx -= m, u.vy -= k, d.vx += m, d.vy += k;
    }
    for (const u of o) {
      const d = Math.hypot(u.vx, u.vy) || 0.01, w = Math.min(d, c);
      u.x += u.vx / d * w, u.y += u.vy / d * w;
    }
    c = Math.max(0.5, c - y);
  }
  e((a) => a.map((u) => {
    const d = i.get(u.id);
    return d ? { ...u, x: d.x - u.w / 2, y: d.y - u.h / 2 } : u;
  })), n();
}
function Mc(t, {
  controlled: e,
  past: n,
  future: r,
  setLocalShapes: o,
  setCamera: i,
  selectNow: s,
  setEditingId: l
}) {
  let p;
  try {
    p = vi(t);
  } catch {
    return;
  }
  e || (n.current = [], r.current = [], o(p.shapes.map(Sc))), i(p.camera), s(/* @__PURE__ */ new Set()), l(null);
}
function Sc(t) {
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
      return $c(t);
  }
}
function $c(t) {
  throw new gi(`Unhandled canvas shape type: ${String(t)}.`);
}
const Kr = (t) => t === "draw" || t === "highlighter";
function Cc({
  ref: t,
  containerRef: e,
  shapesRef: n,
  selectedRef: r,
  cameraRef: o,
  toolRef: i,
  activeColorRef: s,
  drawColorRef: l,
  setDrawColor: p,
  setActiveColor: v,
  past: c,
  future: y,
  controlled: a,
  isDarkMode: u,
  minZoom: d,
  maxZoom: w,
  onToolChange: h,
  setSelectedStrokeWidth: x,
  onDirty: f,
  commit: m,
  selectNow: k,
  selectionActions: $,
  viewportCentre: b,
  setShapes: z,
  setLocalShapes: S,
  setCamera: M,
  setEditingId: X,
  setAnnouncement: Y,
  createId: g
}) {
  const I = yt((P) => {
    const L = b(), O = An({
      id: g(),
      x: P.x ?? L.x - P.w / 2,
      y: P.y ?? L.y - P.h / 2,
      ...P
    });
    if (!O) throw new Error("Canvas could not create a valid shape.");
    return m((D) => [...D, O]), k(/* @__PURE__ */ new Set([O.id])), h("select"), Y(`${O.type} 추가됨`), O;
  }, [m, g, h, k, Y, b]), F = yt(() => wc(n.current, u), [u, n]), W = yt(() => bc(
    n.current,
    (r == null ? void 0 : r.current) ?? /* @__PURE__ */ new Set(),
    u
  ), [u, r, n]);
  ui(t, () => ({
    addNote: (P) => {
      I({ type: "note", w: 180, h: 180, color: P, text: "" }), X(null);
    },
    addCard: (P, L, O, D) => {
      I({ type: "card", w: 260, h: 150, text: P, category: L, cardStyle: O, color: D });
    },
    addText: () => {
      const P = I({ type: "text", w: 220, h: 44, text: "" });
      X(P.id);
    },
    addShape: (P, L, O) => {
      I({
        type: P,
        w: P === "ellipse" ? 220 : 200,
        h: P === "ellipse" ? 110 : 140,
        color: L,
        text: O ?? ""
      });
    },
    addArrow: () => {
      const P = b(), L = { id: g(), type: "arrow", x: P.x - 140, y: P.y, w: 280, h: 0 };
      m((O) => [...O, L]), k(/* @__PURE__ */ new Set([L.id])), h("select");
    },
    addImages: (P) => {
      const L = b();
      let O = L.y;
      const D = P.map((T) => {
        const H = An({ id: g(), type: "image", ...T, x: L.x - T.w / 2, y: O });
        if (!H) throw new Error("Invalid canvas image.");
        return O += T.h + 32, H;
      });
      m((T) => [...T, ...D]), n.current = [...n.current, ...D], k(new Set(D.map((T) => T.id))), X(null), h("select");
    },
    addImage: (P, L, O, D) => {
      I({ type: "image", w: O, h: D, src: P, fileName: L });
    },
    addFileCard: (P, L, O) => {
      I({ type: "rect", w: 260, h: 120, color: "purple", text: O, src: L, fileName: P });
    },
    updateShapeText: (P, L) => {
      m((O) => O.map((D) => D.id === P && !D.locked ? { ...D, text: L, html: void 0 } : D));
    },
    setSelectedStrokeWidth: x,
    // While a pen tool is active the "active colour" is the pen colour, so
    // hosts that drive the palette through the handle see the same thing the
    // user sees on the canvas. Other tools keep the note/shape colour.
    setActiveColor: (P) => {
      Kr(i.current) ? p(P) : v(P);
    },
    getActiveColor: () => Kr(i.current) ? l.current : s.current,
    setTool: h,
    undo: () => {
      const P = c.current.pop();
      P && (y.current.push(n.current), z(P), k(/* @__PURE__ */ new Set()), X(null), f(), Y("실행 취소"));
    },
    redo: () => {
      const P = y.current.pop();
      P && (c.current.push(n.current), z(P), k(/* @__PURE__ */ new Set()), X(null), f(), Y("다시 실행"));
    },
    copySelected: $.copySelected,
    pasteClipboard: $.pasteClipboard,
    deleteSelected: $.deleteSelected,
    duplicateSelected: $.duplicateSelected,
    rotateSelected: $.rotateSelected,
    group: $.group,
    ungroup: $.ungroup,
    reorderSelected: $.reorderSelected,
    zoomBy: (P) => {
      M((L) => {
        var R;
        const O = (R = e.current) == null ? void 0 : R.getBoundingClientRect(), D = Math.min(w, Math.max(d, L.z * P));
        if (!O) return { ...L, z: D };
        const T = L.x + O.width / 2 / L.z, H = L.y + O.height / 2 / L.z;
        return { x: T - O.width / 2 / D, y: H - O.height / 2 / D, z: D };
      });
    },
    zoomTo: (P) => {
      M((L) => {
        var R;
        const O = (R = e.current) == null ? void 0 : R.getBoundingClientRect(), D = Math.min(w, Math.max(d, P));
        if (!O) return { ...L, z: D };
        const T = L.x + O.width / 2 / L.z, H = L.y + O.height / 2 / L.z;
        return { x: T - O.width / 2 / D, y: H - O.height / 2 / D, z: D };
      });
    },
    resetZoom: () => {
      M((P) => {
        var T;
        const L = (T = e.current) == null ? void 0 : T.getBoundingClientRect();
        if (!L) return { ...P, z: 1 };
        const O = P.x + L.width / 2 / P.z, D = P.y + L.height / 2 / P.z;
        return { x: O - L.width / 2, y: D - L.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var ot;
      const P = n.current, L = (ot = e.current) == null ? void 0 : ot.getBoundingClientRect();
      if (P.length === 0 || !L) return;
      let O = 1 / 0, D = 1 / 0, T = -1 / 0, H = -1 / 0;
      for (const Q of P) {
        const U = dt(Q);
        O = Math.min(O, U.minX), D = Math.min(D, U.minY), T = Math.max(T, U.maxX), H = Math.max(H, U.maxY);
      }
      const R = 80, tt = Math.min(w, Math.max(
        d,
        Math.min(L.width / (T - O + R * 2), L.height / (H - D + R * 2))
      ));
      M({
        x: (O + T) / 2 - L.width / 2 / tt,
        y: (D + H) / 2 - L.height / 2 / tt,
        z: tt
      });
    },
    listFrames: () => n.current.filter((P) => P.type === "frame").map((P) => ({ id: P.id, name: Xe(P) })),
    focusShape: (P) => {
      var H;
      const L = n.current.find((R) => R.id === P), O = (H = e.current) == null ? void 0 : H.getBoundingClientRect();
      if (!L || !O) return;
      const D = dt(L), T = Ee(D, O.width, O.height, d, w);
      M({ ...T, z: Math.min(T.z, 1) });
    },
    autoLayout: () => kc(n.current, m, () => Y("자동 배치 완료")),
    exportSvg: F,
    exportPng: () => Hr(F),
    exportSvgForSelection: W,
    exportPngForSelection: () => Hr(W),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (P) => Mc(P, {
      controlled: a,
      past: c,
      future: y,
      setLocalShapes: S,
      setCamera: M,
      selectNow: k,
      setEditingId: X
    })
  }), [
    I,
    F,
    W,
    m,
    g,
    u,
    w,
    d,
    f,
    h,
    $,
    k,
    M,
    X,
    S,
    x,
    z,
    Y,
    b,
    a
  ]);
}
function zc(t) {
  return t.altKey || !t.ctrlKey && !t.metaKey ? null : t.code === "KeyZ" ? t.shiftKey ? "redo" : "undo" : t.code === "KeyY" ? "redo" : null;
}
function Xc(t) {
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
function Yc({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: r,
  editingIdRef: o,
  interactionRef: i,
  applyInteraction: s,
  toolRef: l,
  past: p,
  future: v,
  textualTypes: c,
  setIsSpaceDown: y,
  setEditingId: a,
  setShapes: u,
  setAnnouncement: d,
  commit: w,
  deleteSelection: h,
  selectNow: x,
  onDirty: f,
  onToolChange: m,
  viewActionsRef: k,
  createId: $,
  selectionActions: b
}) {
  const z = yt((S, M) => {
    const X = r.current;
    X.size !== 0 && w((Y) => Y.map((g) => {
      var I;
      return X.has(g.id) && !g.locked ? {
        ...g,
        x: g.x + S,
        y: g.y + M,
        points: (I = g.points) == null ? void 0 : I.map(([F, W]) => [F + S, W + M])
      } : g;
    }));
  }, [w, r]);
  St(() => {
    const S = (g) => {
      const I = g;
      return !!I && (I.tagName === "INPUT" || I.tagName === "TEXTAREA" || I.isContentEditable);
    }, M = (g) => g instanceof Element && !!g.closest("input, select, button, textarea, option, label, [data-canvas-control]"), X = (g) => {
      var H, R, tt, ot, Q, U, et, at, nt, N, E, j, ct, xt, wt, zt, vt;
      const I = t.current, F = document.activeElement, W = g.target instanceof Node && !!(I != null && I.contains(g.target)), P = !!I && (F === I || I.contains(F));
      if (!W && !P || M(g.target)) return;
      if (g.code === "Space" && !S(g.target)) {
        y(!0), g.preventDefault();
        return;
      }
      if (S(g.target)) {
        if (g.key === "Escape")
          g.preventDefault(), a(null), (H = e.current) == null || H.blur(), (R = t.current) == null || R.focus();
        else if ((g.key === "Delete" || g.key === "Backspace") && !o.current) {
          const A = r.current;
          h(A) && g.preventDefault();
        }
        return;
      }
      const L = r.current, O = zc(g);
      if (O) {
        if (g.preventDefault(), O === "redo") {
          const A = v.current.pop();
          A && (p.current.push(n.current), u(A), f(), d("다시 실행"));
        } else {
          const A = p.current.pop();
          A && (v.current.push(n.current), u(A), f(), d("실행 취소"));
        }
        x(/* @__PURE__ */ new Set());
        return;
      }
      const D = g.metaKey || g.ctrlKey;
      if (D && g.key.toLowerCase() === "c") {
        g.preventDefault(), b.copySelected();
        return;
      }
      if (D && g.key.toLowerCase() === "v") {
        g.preventDefault(), b.pasteClipboard();
        return;
      }
      if (D && g.key.toLowerCase() === "d") {
        g.preventDefault(), b.duplicateSelected();
        return;
      }
      if (D && g.key.toLowerCase() === "g") {
        if (g.preventDefault(), g.shiftKey)
          L.size > 0 && (w((A) => A.map((pt) => L.has(pt.id) ? { ...pt, groupId: void 0 } : pt)), d("그룹 해제됨"));
        else if (L.size > 1) {
          const A = $("g");
          w((pt) => pt.map(($t) => L.has($t.id) ? { ...$t, groupId: A } : $t)), d(`${L.size}개 그룹화됨`);
        }
        return;
      }
      if (D && g.shiftKey && g.code === "KeyL") {
        g.preventDefault(), L.size > 0 && b.toggleLocked();
        return;
      }
      if (D && g.key.toLowerCase() === "a") {
        g.preventDefault(), x(new Set(n.current.map((A) => A.id))), d(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (g.key === "Delete" || g.key === "Backspace") {
        h(L) && g.preventDefault();
        return;
      }
      if (g.key.startsWith("Arrow")) {
        g.preventDefault();
        const A = g.shiftKey ? 10 : 1;
        g.key === "ArrowLeft" && z(-A, 0), g.key === "ArrowRight" && z(A, 0), g.key === "ArrowUp" && z(0, -A), g.key === "ArrowDown" && z(0, A);
        return;
      }
      if (g.key === "Tab" && !o.current && n.current.length > 0) {
        g.preventDefault();
        const A = ((tt = n.current.find((Ct) => L.has(Ct.id))) == null ? void 0 : tt.id) ?? null, pt = yc(n.current, A, g.shiftKey ? -1 : 1);
        if (!pt) return;
        x(/* @__PURE__ */ new Set([pt])), (Q = (ot = k == null ? void 0 : k.current) == null ? void 0 : ot.revealShape) == null || Q.call(ot, pt);
        const $t = n.current.find((Ct) => Ct.id === pt);
        $t && d(`${$t.type} 선택됨: ${Xe($t) || "내용 없음"}`);
        return;
      }
      if ((g.metaKey || g.ctrlKey) && !g.altKey && g.code === "KeyF") {
        g.preventDefault(), (et = (U = k == null ? void 0 : k.current) == null ? void 0 : U.openFind) == null || et.call(U);
        return;
      }
      if (g.altKey && !g.metaKey && !g.ctrlKey && g.code === "Digit1") {
        g.preventDefault(), (nt = (at = k == null ? void 0 : k.current) == null ? void 0 : at.fitAll) == null || nt.call(at);
        return;
      }
      if (g.altKey && !g.metaKey && !g.ctrlKey && g.code === "Digit2") {
        g.preventDefault(), (E = (N = k == null ? void 0 : k.current) == null ? void 0 : N.fitSelection) == null || E.call(N);
        return;
      }
      if (g.altKey && !g.metaKey && !g.ctrlKey && g.code === "Digit3") {
        g.preventDefault(), (ct = (j = k == null ? void 0 : k.current) == null ? void 0 : j.zoomMax) == null || ct.call(j);
        return;
      }
      if (!o.current && (g.code === "BracketRight" || g.code === "BracketLeft") && !g.metaKey && !g.ctrlKey && !g.altKey) {
        g.preventDefault(), (wt = (xt = k == null ? void 0 : k.current) == null ? void 0 : xt.smartZoom) == null || wt.call(xt, g.code === "BracketRight" ? 1 : -1);
        return;
      }
      if (g.key === "Enter" && L.size === 1) {
        const A = n.current.find((pt) => L.has(pt.id));
        A && !A.locked && c.includes(A.type) && (g.preventDefault(), a(A.id));
        return;
      }
      if (g.key === "Escape") {
        if (i.current.kind === "connect") {
          g.preventDefault(), s({ kind: "none" });
          return;
        }
        if (o.current) {
          g.preventDefault(), a(null), (zt = e.current) == null || zt.blur(), (vt = t.current) == null || vt.focus(), m("select");
          return;
        }
        x(/* @__PURE__ */ new Set()), m("select");
        return;
      }
      const T = Xc(g);
      T && (g.preventDefault(), l.current = T, m(T));
    }, Y = (g) => {
      const I = t.current;
      !I || !(document.activeElement === I || I.contains(document.activeElement)) || g.code === "Space" && y(!1);
    };
    return window.addEventListener("keydown", X), window.addEventListener("keyup", Y), () => {
      window.removeEventListener("keydown", X), window.removeEventListener("keyup", Y);
    };
  }, [
    w,
    t,
    $,
    h,
    o,
    e,
    v,
    z,
    f,
    m,
    p,
    x,
    r,
    d,
    a,
    y,
    u,
    b,
    n,
    c,
    l
  ]);
}
function rn(t) {
  return t.pointerType === "pen";
}
function Ic() {
  return typeof navigator < "u" && navigator.maxTouchPoints > 0 ? !0 : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(any-pointer: coarse)").matches;
}
function Nc(t, e) {
  return e && rn(t);
}
function Pc(t, e) {
  return !t || rn(e);
}
function Se(t, e) {
  return [(t[0] - e.x) * e.z, (t[1] - e.y) * e.z];
}
function jr(t, e, n, r) {
  if (r === "raw") {
    let p = t[t.length - 1];
    for (const v of e) {
      if (t.length >= de.maxDrawPoints) return;
      p && v[0] === p[0] && v[1] === p[1] || (t.push(v), p = v);
    }
    return;
  }
  const o = Math.max(n, 0.1), i = 0.05 / o, s = 4 / o;
  let l = t[t.length - 1];
  for (const p of e) {
    if (!l) {
      t.push(p), l = p;
      continue;
    }
    const v = p[0] - l[0], c = p[1] - l[1], y = Math.hypot(v, c);
    if (y < i) continue;
    const a = Math.max(1, Math.ceil(y / s)), u = Math.min(a, de.maxDrawPoints - t.length);
    if (u <= 0) return;
    for (let d = 1; d <= u; d++) {
      const w = [
        l[0] + v * (d / a),
        l[1] + c * (d / a)
      ];
      t.push(w);
    }
    l = t[t.length - 1];
  }
}
function Ec(t) {
  const e = (t.points ?? []).map(([s, l]) => [s, l]);
  if (e.length === 0) return t;
  let n = e[0][0], r = e[0][1], o = n, i = r;
  for (const [s, l] of e)
    n = Math.min(n, s), r = Math.min(r, l), o = Math.max(o, s), i = Math.max(i, l);
  return { ...t, points: e, x: n, y: r, w: o - n, h: i - r };
}
function Ur(t, e, n) {
  if (e.type !== "draw") return;
  const r = e.points ?? [];
  if (r.length === 0) return;
  const o = e.strokeWidth ?? 3, i = e.drawMode ?? "pen", s = De(e);
  if (t.save(), t.globalAlpha = i === "highlighter" ? 0.35 : 1, t.fillStyle = s, r.length === 1 && e.inkStyle === void 0) {
    const [c, y] = Se(r[0], n);
    t.beginPath(), t.arc(c, y, Math.max(qe(o, i) * n.z, 0.5), 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  if (typeof Path2D == "function") {
    const c = On(e);
    t.scale(n.z, n.z), t.translate(-n.x, -n.y);
    const y = new Path2D(c.d);
    c.filled ? t.fill(y) : (t.strokeStyle = s, t.lineWidth = c.width, t.lineCap = "round", t.lineJoin = "round", t.stroke(y)), t.restore();
    return;
  }
  if (r.length === 1 || e.inkStyle === "raw" && r.every(([c, y]) => c === r[0][0] && y === r[0][1])) {
    const [c, y] = Se(r[0], n);
    t.beginPath(), t.arc(c, y, qe(o, i) * n.z, 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  if (e.inkStyle === "raw") {
    t.beginPath();
    const [c, y] = Se(r[0], n);
    t.moveTo(c, y);
    for (let a = 1; a < r.length; a++) {
      const [u, d] = Se(r[a], n);
      t.lineTo(u, d);
    }
    t.strokeStyle = s, t.lineWidth = qe(o, i) * 2 * n.z, t.lineCap = "round", t.lineJoin = "round", t.stroke(), t.restore();
    return;
  }
  const l = vo(r, o, i);
  if (l.length === 0) {
    t.restore();
    return;
  }
  t.beginPath();
  const [p, v] = Se([l[0][0], l[0][1]], n);
  t.moveTo(p, v);
  for (let c = 1; c < l.length; c++) {
    const [y, a] = Se([l[c][0], l[c][1]], n);
    t.lineTo(y, a);
  }
  t.closePath(), t.fill(), t.restore();
}
function Lc(t, e, n, r) {
  const o = Math.max(1, Math.min(2, r)), i = Math.max(1, Math.round(e * o)), s = Math.max(1, Math.round(n * o));
  return t.width !== i && (t.width = i), t.height !== s && (t.height = s), t.style.width = `${e}px`, t.style.height = `${n}px`, o;
}
function on(t, e, n, r, o = 1) {
  var l;
  if (!t) return;
  const i = (l = t.getContext) == null ? void 0 : l.call(t, "2d");
  if (!i) return;
  const s = Math.max(1, Math.min(2, o || 1));
  i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, t.width, t.height), i.setTransform(s, 0, 0, s, 0, 0);
  for (const p of e) Ur(i, p, r);
  n && Ur(i, n, r), i.setTransform(1, 0, 0, 1, 0, 0);
}
const Tc = 400;
function Fc({
  drawing: t,
  containerRef: e,
  editorRef: n,
  pointers: r,
  interactionRef: o,
  editingIdRef: i,
  cameraRef: s,
  shapesRef: l,
  selectedRef: p,
  toolRef: v,
  penModeRef: c,
  activeColorRef: y,
  drawColorRef: a,
  drawStrokeWidth: u,
  drawInkStyle: d,
  camera: w,
  shapes: h,
  selected: x,
  isSpaceDown: f,
  textualTypes: m,
  setShapes: k,
  setEditingId: $,
  applyInteraction: b,
  selectNow: z,
  beginHistory: S,
  cancelHistory: M,
  commit: X,
  onToolChange: Y,
  expandToGroups: g,
  toPage: I,
  createId: F,
  liveStrokeCanvasRef: W,
  activeDrawRef: P,
  pendingDrawsRef: L,
  setIsPenMode: O
}) {
  const D = F, T = it(null), H = (N, E) => {
    var wt;
    const j = ((wt = e.current) == null ? void 0 : wt.dataset.canvasActiveTool) === "text" ? "text" : v.current;
    if (j !== "note" && j !== "text") return;
    const ct = I(N, E);
    if (j === "text") {
      const zt = new Map(l.current.map((A) => [A.id, A])), vt = [...l.current].reverse().find((A) => m.includes(A.type) && $e(A, ct.x, ct.y, s.current.z, zt, l.current));
      if (vt) {
        z(/* @__PURE__ */ new Set([vt.id])), $(vt.id), v.current = "select", Y("select");
        return;
      }
    }
    const xt = j === "note" ? { id: D(), type: "note", x: ct.x - 90, y: ct.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: D(), type: "text", x: ct.x, y: ct.y - 22, w: 220, h: 44, text: "" };
    X((zt) => [...zt, xt]), z(/* @__PURE__ */ new Set([xt.id])), $(xt.id), v.current = "select", Y("select");
  };
  St(() => {
    const N = (j) => {
      var ct;
      c.current || j.target instanceof Element && j.target.closest('[role="textbox"], [data-canvas-inspector], [data-canvas-find], [data-canvas-minimap], [data-canvas-floating-bar]') || (ct = e.current) != null && ct.contains(j.target) && H(j.clientX, j.clientY);
    }, E = (j) => {
      var ct;
      c.current && (j.target instanceof Element && j.target.closest("[data-canvas-editor]") || (j.preventDefault(), (ct = window.getSelection()) == null || ct.removeAllRanges()));
    };
    return window.addEventListener("click", N, !0), document.addEventListener("selectstart", E, !0), () => {
      window.removeEventListener("click", N, !0), document.removeEventListener("selectstart", E, !0);
    };
  }, [e, c]);
  const R = () => {
    const [N, E] = [...r.current.values()], j = s.current;
    b({
      kind: "pinch",
      startDist: Math.hypot(E.x - N.x, E.y - N.y) || 1,
      startZoom: j.z,
      startMidX: (N.x + E.x) / 2,
      startMidY: (N.y + E.y) / 2,
      camX: j.x,
      camY: j.y
    });
  };
  return { onPointerDown: (N) => {
    var ve, ge, ye;
    let E = v.current;
    const j = N.target instanceof Element ? N.target : N.currentTarget, ct = N.currentTarget.hasPointerCapture(N.pointerId) || j.hasPointerCapture(N.pointerId);
    if (!c.current && Nc(N, ct || Ic()) && (M(), r.current.clear(), P.current = null, on(
      W.current,
      L.current,
      null,
      s.current,
      window.devicePixelRatio || 1
    ), b({ kind: "none" }), E !== "draw" && E !== "highlighter" && E !== "eraser" && (E = "draw", v.current = "draw", Y("draw")), O(!0)), c.current && N.pointerType === "touch") {
      if (N.cancelable && N.preventDefault(), o.current.kind !== "none") return;
      r.current.set(N.pointerId, { x: N.clientX, y: N.clientY });
      try {
        N.currentTarget.setPointerCapture(N.pointerId);
      } catch {
      }
      r.current.size === 2 && R();
      return;
    }
    if (!Pc(c.current, N)) {
      N.cancelable && N.preventDefault();
      return;
    }
    rn(N) && o.current.kind === "drawing" && t.finish(), c.current && rn(N) && (o.current.kind === "none" || o.current.kind === "pinch") && (r.current.clear(), b({ kind: "none" }));
    const xt = N.target instanceof Element ? N.target : null, wt = !!(xt != null && xt.closest("[data-canvas-editor]")) && i.current !== null;
    r.current.set(N.pointerId, { x: N.clientX, y: N.clientY });
    const zt = o.current;
    if (zt.kind === "drawing" && zt.pointerId !== N.pointerId) {
      r.current.delete(N.pointerId);
      return;
    }
    !wt && N.cancelable && N.preventDefault();
    const vt = N.currentTarget;
    try {
      vt.setPointerCapture(N.pointerId);
    } catch {
    }
    if (r.current.size === 2) {
      R();
      return;
    }
    if (r.current.size > 2) return;
    if (N.button === 1 || f || E === "hand" || N.button === 0 && E === "select" && N.altKey) {
      b({ kind: "pan", startX: N.clientX, startY: N.clientY, camX: w.x, camY: w.y });
      return;
    }
    if (N.button !== 0) return;
    const A = I(N.clientX, N.clientY), pt = p.current;
    if (wt || ($(null), (ve = n.current) == null || ve.blur(), (ge = e.current) == null || ge.focus()), E === "draw" || E === "highlighter") {
      const bt = new Map(h.map((Nt) => [Nt.id, Nt])), It = [...h].reverse().find((Nt) => Nt.type === "note" && $e(Nt, A.x, A.y, w.z, bt, h)), Ht = {
        id: D(),
        type: "draw",
        x: A.x,
        y: A.y,
        w: 0,
        h: 0,
        points: [[A.x, A.y]],
        color: a.current,
        strokeWidth: u,
        inkStyle: d,
        drawMode: E === "highlighter" ? "highlighter" : "pen",
        ...It ? { parentId: It.id } : {}
      };
      t.start(Ht, N);
      return;
    }
    if (E === "arrow" || E === "frame" || yi.includes(E)) {
      const bt = E, It = E === "arrow" ? { id: D(), type: "arrow", x: A.x, y: A.y, w: 0, h: 0, color: y.current } : E === "frame" ? { id: D(), type: "frame", x: A.x, y: A.y, w: 0, h: 0, text: "프레임" } : { id: D(), type: bt, x: A.x, y: A.y, w: 0, h: 0, color: y.current, text: "" };
      S(), k((Ht) => [...Ht, It]), b({ kind: "creating", id: It.id, startX: A.x, startY: A.y });
      return;
    }
    if (E === "note" || E === "text") {
      H(N.clientX, N.clientY);
      return;
    }
    if (E === "eraser") {
      S(), k((bt) => ga(bt, A.x, A.y, Vn, w.z)), b({ kind: "erasing", lastX: A.x, lastY: A.y });
      return;
    }
    if (E === "lasso") {
      T.current = null, b({
        kind: "lasso",
        points: [{ x: A.x, y: A.y }],
        baseSelection: [...pt],
        additive: N.shiftKey
      });
      return;
    }
    const $t = new Map(h.map((bt) => [bt.id, bt])), Ct = i.current ? h.find((bt) => bt.id === i.current) : void 0, Xt = wt && Ct ? Ct : [...h].reverse().find((bt) => $e(bt, A.x, A.y, w.z, $t, h));
    if (!Xt)
      T.current = null;
    else {
      const bt = Date.now(), It = !N.shiftKey && m.includes(Xt.type) && ((ye = T.current) == null ? void 0 : ye.id) === Xt.id && bt - T.current.time < Tc, Ht = It && !Xt.locked ? Xt.id : void 0;
      T.current = It ? null : { id: Xt.id, time: bt };
      const Nt = N.shiftKey ? new Set(pt).add(Xt.id) : pt.has(Xt.id) ? pt : /* @__PURE__ */ new Set([Xt.id]), oe = g(Nt);
      z(oe);
      const Ut = /* @__PURE__ */ new Map(), Jt = new Set(h.filter((mt) => !mt.locked).map((mt) => mt.id));
      for (const mt of h) {
        if (mt.locked) continue;
        const te = mt.parentId !== void 0 && oe.has(mt.parentId) && Jt.has(mt.parentId);
        (oe.has(mt.id) || te) && Ut.set(mt.id, mt);
      }
      for (const mt of h) {
        if (mt.type !== "frame" || mt.locked || !oe.has(mt.id)) continue;
        const te = dt(mt);
        for (const Pt of h) {
          if (Pt.id === mt.id || Pt.locked || Ut.has(Pt.id)) continue;
          const Rt = Bt(Pt);
          Rt.x >= te.minX && Rt.x <= te.maxX && Rt.y >= te.minY && Rt.y <= te.maxY && Ut.set(Pt.id, Pt);
        }
      }
      if (Ut.size === 0) return;
      S(), b({ kind: "move", startX: A.x, startY: A.y, origin: Ut, editOnReleaseId: Ht });
      return;
    }
    N.shiftKey || z(/* @__PURE__ */ new Set()), b({
      kind: "marquee",
      startX: A.x,
      startY: A.y,
      curX: A.x,
      curY: A.y,
      screenStartX: N.clientX,
      screenStartY: N.clientY
    });
  }, onResizeHandleDown: (N, E, j) => {
    E.locked || (N.stopPropagation(), r.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), S(), b({ kind: "resize", id: E.id, handle: j, start: E }));
  }, onRotateHandleDown: (N, E) => {
    if (N.stopPropagation(), E.locked) return;
    r.current.set(N.pointerId, { x: N.clientX, y: N.clientY });
    const j = I(N.clientX, N.clientY), ct = Bt(E);
    S(), b({
      kind: "rotate",
      id: E.id,
      startAngle: Math.atan2(j.y - ct.y, j.x - ct.x),
      startRotation: E.rotation ?? 0
    });
  }, onConnectHandleDown: (N, E) => {
    N.stopPropagation(), r.current.set(N.pointerId, { x: N.clientX, y: N.clientY });
    const j = I(N.clientX, N.clientY);
    b({ kind: "connect", fromId: E.id, toX: j.x, toY: j.y, hoverId: null });
  }, onBendHandleDown: (N, E) => {
    N.stopPropagation(), !E.locked && (r.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), S(), b({ kind: "bend", id: E.id }));
  }, onOrthogonalSegmentHandleDown: (N, E, j) => {
    N.stopPropagation(), r.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), !E.locked && (S(), b({ kind: "orthogonal-segment", id: E.id, segmentIndex: j }));
  }, onArrowEndpointDown: (N, E, j) => {
    N.stopPropagation(), !E.locked && (r.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), S(), b({ kind: "arrow-endpoint", id: E.id, endpoint: j, hoverId: null }));
  } };
}
function Dc({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: r,
  shapesRef: o,
  setShapes: i,
  setEditingId: s,
  setEraserPos: l,
  setGuides: p,
  setAnnouncement: v,
  applyInteraction: c,
  selectNow: y,
  expandToGroups: a,
  endHistory: u,
  commit: d,
  onToolChange: w,
  createId: h,
  drawing: x
}) {
  const f = h;
  St(() => {
    const m = (k) => {
      var b, z;
      if (!t.current.delete(k.pointerId)) return;
      try {
        (z = (b = k.target) == null ? void 0 : b.releasePointerCapture) == null || z.call(b, k.pointerId);
      } catch {
      }
      const $ = e.current;
      if ($.kind !== "none") {
        if ($.kind === "pinch") {
          t.current.size < 2 && c({ kind: "none" });
          return;
        }
        if (p([]), $.kind === "lasso") {
          if (k.type === "pointerup") {
            const S = r(k.clientX, k.clientY), M = $.points[$.points.length - 1], X = M && Math.hypot(S.x - M.x, S.y - M.y) > 1e-9 ? [...$.points, S] : $.points, Y = X.length >= 3 ? o.current.filter((I) => !I.locked && ha(Bt(I), X)).map((I) => I.id) : [], g = $.additive ? $.baseSelection : [];
            y(a(/* @__PURE__ */ new Set([...g, ...Y]))), v(Y.length > 0 ? `${Y.length}개 올가미 선택됨` : "올가미 안에 선택할 항목이 없습니다");
          }
          c({ kind: "none" });
          return;
        }
        if ($.kind === "erasing") {
          if (k.type === "pointerup") {
            const S = r(k.clientX, k.clientY);
            i((M) => Gn(
              M,
              { x: $.lastX, y: $.lastY },
              S,
              Vn,
              n.current.z
            ));
          }
          l(null), u(), c({ kind: "none" });
          return;
        }
        if ($.kind === "connect") {
          const M = o.current.find((P) => P.id === $.fromId);
          if (c({ kind: "none" }), !M) return;
          const X = { x: $.toX, y: $.toY }, Y = Bt(M);
          if (!$.hoverId && Math.hypot(X.x - Y.x, X.y - Y.y) < 30) return;
          const g = [];
          let I = $.hoverId, F = null;
          if (!I) {
            const P = {
              ...M,
              id: f(),
              x: X.x - Math.abs(M.w) / 2,
              y: X.y - Math.abs(M.h) / 2,
              w: M.w,
              h: M.h,
              locked: void 0,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              parentId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            g.push(P), F = P, I = P.id;
          }
          const W = {
            id: f(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: M.id,
            toId: I,
            routing: "orthogonal",
            arrowEnd: "arrow",
            text: ""
          };
          g.push(W), d((P) => [...P, ...g]), F ? (y(/* @__PURE__ */ new Set([F.id])), (typeof requestAnimationFrame == "function" ? requestAnimationFrame : (L) => {
            L();
          })(() => s(F.type === "image" ? null : F.id)), v("개체 생성 및 연결됨")) : (y(/* @__PURE__ */ new Set([W.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => s(W.id)) : s(W.id), v("연결 생성됨"));
          return;
        }
        if ($.kind === "bend") {
          u(), c({ kind: "none" });
          return;
        }
        if ($.kind === "drawing") {
          x.finish(k);
          return;
        }
        if ($.kind === "creating") {
          i((S) => S.map((M) => {
            if (M.id !== $.id) return M;
            const X = Math.abs(M.w) < 4 && Math.abs(M.h) < 4 ? {
              ...M,
              w: M.type === "arrow" ? 200 : M.type === "frame" ? 480 : 180,
              h: M.type === "arrow" ? 0 : M.type === "frame" ? 320 : 120
            } : M;
            if (X.type === "arrow") return X;
            const Y = Dt(X);
            return { ...X, x: Y.minX, y: Y.minY, w: Y.maxX - Y.minX, h: Y.maxY - Y.minY };
          })), u(), y(/* @__PURE__ */ new Set([$.id])), w("select"), c({ kind: "none" });
          return;
        }
        if (($.kind === "move" || $.kind === "resize" || $.kind === "rotate" || $.kind === "orthogonal-segment" || $.kind === "arrow-endpoint") && u(), $.kind === "move" && $.editOnReleaseId && k.type === "pointerup") {
          const S = r(k.clientX, k.clientY);
          Math.hypot(S.x - $.startX, S.y - $.startY) * n.current.z <= Sa && s($.editOnReleaseId);
        }
        c({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", m), window.addEventListener("pointercancel", m), () => {
      window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", m);
    };
  }, [
    c,
    n,
    h,
    x,
    u,
    e,
    w,
    t,
    y,
    a,
    v,
    s,
    p,
    l,
    i,
    o,
    r,
    d
  ]);
}
function Zn() {
  return typeof navigator > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
function Hn(t) {
  let e = [];
  if (!Zn() && typeof t.getCoalescedEvents == "function")
    try {
      e = t.getCoalescedEvents();
    } catch {
    }
  return [...e, t].filter((n) => Number.isFinite(n.clientX) && Number.isFinite(n.clientY));
}
function Wc({
  objectSnapEnabled: t,
  containerRef: e,
  pointers: n,
  interactionRef: r,
  cameraRef: o,
  shapesRef: i,
  setCamera: s,
  setShapes: l,
  setEraserPos: p,
  setGuides: v,
  applyInteraction: c,
  selectNow: y,
  expandToGroups: a,
  toPage: u,
  drawing: d
}) {
  St(() => {
    const w = (h) => {
      var k, $;
      if (!n.current.has(h.pointerId)) return;
      n.current.set(h.pointerId, { x: h.clientX, y: h.clientY });
      const x = r.current;
      if (x.kind === "none") return;
      const f = o.current;
      if (x.kind === "pinch") {
        if (n.current.size < 2) return;
        const [b, z] = [...n.current.values()], S = Math.hypot(z.x - b.x, z.y - b.y) || 1, M = (b.x + z.x) / 2, X = (b.y + z.y) / 2, Y = (k = e.current) == null ? void 0 : k.getBoundingClientRect();
        if (!Y) return;
        const g = Math.min(Ma, Math.max(ka, x.startZoom * (S / x.startDist))), I = x.camX + (x.startMidX - Y.left) / x.startZoom, F = x.camY + (x.startMidY - Y.top) / x.startZoom;
        s({ x: I - (M - Y.left) / g, y: F - (X - Y.top) / g, z: g });
        return;
      }
      if (x.kind === "pan") {
        s({
          x: x.camX - (h.clientX - x.startX) / f.z,
          y: x.camY - (h.clientY - x.startY) / f.z,
          z: f.z
        });
        return;
      }
      const m = u(h.clientX, h.clientY);
      if (x.kind === "erasing") {
        const b = Hn(h).map((M) => u(M.clientX, M.clientY)), z = [{ x: x.lastX, y: x.lastY }, ...b];
        l((M) => {
          let X = M;
          for (let Y = 1; Y < z.length; Y++)
            X = Gn(X, z[Y - 1], z[Y], Vn, f.z);
          return X;
        });
        const S = b.at(-1);
        S && (p(S), c({ kind: "erasing", lastX: S.x, lastY: S.y }));
        return;
      }
      if (x.kind === "connect") {
        const b = i.current, z = new Map(b.map((M) => [M.id, M])), S = [...b].reverse().find((M) => M.id !== x.fromId && en.includes(M.type) && $e(M, m.x, m.y, f.z, z, b));
        c({ ...x, toX: m.x, toY: m.y, hoverId: (S == null ? void 0 : S.id) ?? null });
        return;
      }
      if (x.kind === "bend") {
        const b = i.current, z = b.find((W) => W.id === x.id);
        if (!z) return;
        const S = jt(z, new Map(b.map((W) => [W.id, W])), b), M = S.end.x - S.start.x, X = S.end.y - S.start.y, Y = Math.hypot(M, X) || 1, g = (S.start.x + S.end.x) / 2, I = (S.start.y + S.end.y) / 2, F = (m.x - g) * (-X / Y) + (m.y - I) * (M / Y);
        l((W) => W.map((P) => P.id === x.id ? { ...P, bend: F } : P));
        return;
      }
      if (x.kind === "orthogonal-segment") {
        const b = i.current, z = b.find((F) => F.id === x.id);
        if (!z) return;
        const S = jt(z, new Map(b.map((F) => [F.id, F])), b), M = S.routing === "orthogonal" ? S.pathPoints : void 0;
        if (!M || M.length < 2) return;
        const X = M[x.segmentIndex], Y = M[x.segmentIndex + 1];
        if (!X || !Y) return;
        const g = X.x === Y.x ? m.x : m.y, I = Ki(M, x.segmentIndex, g);
        l((F) => F.map((W) => W.id === x.id ? { ...W, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: I.slice(1, -1).map((P) => ({ x: P.x, y: P.y })) } : W));
        return;
      }
      if (x.kind === "arrow-endpoint") {
        const b = i.current, z = b.find((I) => I.id === x.id);
        if (!z) return;
        const S = new Map(b.map((I) => [I.id, I])), M = jt(z, S, b), X = x.endpoint === "start" ? M.end : M.start, Y = [...b].reverse().find((I) => I.id !== z.id && en.includes(I.type) && $e(I, m.x, m.y, f.z, S, b)), g = Y ? me(Y, X.x, X.y) : { x: m.x, y: m.y };
        c({ ...x, hoverId: (Y == null ? void 0 : Y.id) ?? null }), l((I) => I.map((F) => {
          if (F.id !== z.id) return F;
          const W = x.endpoint === "start" ? g : X, P = x.endpoint === "end" ? g : X;
          return {
            ...F,
            x: W.x,
            y: W.y,
            w: P.x - W.x,
            h: P.y - W.y,
            fromId: x.endpoint === "start" ? Y == null ? void 0 : Y.id : F.fromId,
            toId: x.endpoint === "end" ? Y == null ? void 0 : Y.id : F.toId
          };
        }));
        return;
      }
      if (x.kind === "marquee") {
        c({ ...x, curX: m.x, curY: m.y });
        const b = Math.min(x.startX, m.x), z = Math.max(x.startX, m.x), S = Math.min(x.startY, m.y), M = Math.max(x.startY, m.y), X = Math.min(x.screenStartX, h.clientX), Y = Math.max(x.screenStartX, h.clientX), g = Math.min(x.screenStartY, h.clientY), I = Math.max(x.screenStartY, h.clientY), F = /* @__PURE__ */ new Map();
        ($ = e.current) == null || $.querySelectorAll("[data-canvas-shape-id]").forEach((P) => {
          const L = P.dataset.canvasShapeId;
          L && F.set(L, P.getBoundingClientRect());
        });
        const W = i.current.filter((P) => {
          if (P.locked) return !1;
          const L = F.get(P.id);
          if (L)
            return L.right >= X && L.left <= Y && L.bottom >= g && L.top <= I;
          const O = dt(P);
          return O.maxX >= b && O.minX <= z && O.maxY >= S && O.minY <= M;
        }).map((P) => P.id);
        y(a(new Set(W)));
        return;
      }
      if (x.kind === "lasso") {
        const b = 2 / Math.max(f.z, 0.1);
        let z = x.points;
        for (const S of Hn(h)) {
          const M = u(S.clientX, S.clientY), X = z[z.length - 1];
          (!X || Math.hypot(M.x - X.x, M.y - X.y) >= b) && (z = [...z, M]);
        }
        z !== x.points && c({ ...x, points: z });
        return;
      }
      if (x.kind === "move") {
        let b = m.x - x.startX, z = m.y - x.startY;
        const S = x.origin;
        if (t) {
          const M = (() => {
            let g = 1 / 0, I = 1 / 0, F = -1 / 0, W = -1 / 0;
            return S.forEach((P) => {
              const L = dt({ ...P, x: P.x + b, y: P.y + z });
              g = Math.min(g, L.minX), I = Math.min(I, L.minY), F = Math.max(F, L.maxX), W = Math.max(W, L.maxY);
            }), { minX: g, minY: I, maxX: F, maxY: W };
          })(), X = i.current.filter((g) => !S.has(g.id)), Y = ya(M, X, f.z);
          b += Y.dx, z += Y.dy, v(Y.guides);
        } else
          v([]);
        l((M) => M.map((X) => {
          var g;
          const Y = S.get(X.id);
          return Y ? {
            ...X,
            x: Y.x + b,
            y: Y.y + z,
            points: (g = Y.points) == null ? void 0 : g.map(([I, F]) => [I + b, F + z]),
            ...Y.type === "arrow" && Y.orthogonalWaypoints ? { orthogonalWaypoints: Y.orthogonalWaypoints.map((I) => ({ x: I.x + b, y: I.y + z })) } : {}
          } : X;
        }));
        return;
      }
      if (x.kind === "drawing") {
        if (x.pointerId !== h.pointerId) return;
        d.move(h);
        return;
      }
      if (x.kind === "creating") {
        l((b) => b.map((z) => z.id === x.id ? { ...z, w: m.x - x.startX, h: m.y - x.startY } : z));
        return;
      }
      if (x.kind === "rotate") {
        const b = i.current.find((X) => X.id === x.id);
        if (!b) return;
        const z = Bt(b), S = Math.atan2(m.y - z.y, m.x - z.x);
        let M = x.startRotation + (S - x.startAngle);
        h.shiftKey && (M = Math.round(M / (Math.PI / 12)) * (Math.PI / 12)), l((X) => X.map((Y) => Y.id === x.id ? { ...Y, rotation: M } : Y));
        return;
      }
      if (x.kind === "resize") {
        const { start: b, handle: z } = x, S = Je(b, m.x, m.y);
        l((M) => M.map((X) => {
          if (X.id !== b.id) return X;
          let { x: Y, y: g, w: I, h: F } = b;
          if (z.includes("e") && (I = Math.max(20, S.x - b.x)), z.includes("s") && (F = Math.max(20, S.y - b.y)), z.includes("w")) {
            const W = b.x + b.w;
            Y = Math.min(S.x, W - 20), I = W - Y;
          }
          if (z.includes("n")) {
            const W = b.y + b.h;
            g = Math.min(S.y, W - 20), F = W - g;
          }
          return { ...X, x: Y, y: g, w: I, h: F, manualSize: X.type === "text" ? !0 : X.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", w), () => {
      window.removeEventListener("pointermove", w);
    };
  }, [
    c,
    o,
    e,
    d,
    a,
    r,
    t,
    n,
    y,
    i,
    u
  ]);
}
function Oc(t) {
  Wc(t), Dc(t);
}
function _c(t) {
  const e = it(t);
  e.current = t;
  const n = it([]), r = it(null), o = it(null), i = it(null), s = Zt(() => {
    const l = () => {
      const a = e.current;
      on(
        a.liveStrokeCanvasRef.current,
        a.pendingDrawsRef.current,
        a.activeDrawRef.current,
        a.cameraRef.current,
        window.devicePixelRatio || 1
      );
    }, p = () => {
      r.current !== null && cancelAnimationFrame(r.current), r.current = null;
    }, v = () => {
      var w;
      const a = e.current, u = a.activeDrawRef.current, d = n.current.splice(0);
      (u == null ? void 0 : u.id) === ((w = i.current) == null ? void 0 : w.shapeId) && (u != null && u.points) && jr(u.points, d, a.cameraRef.current.z, u.type === "draw" ? u.inkStyle : void 0);
    }, c = () => {
      o.current = null;
      const a = e.current, u = a.pendingDrawsRef.current.filter((d) => !a.queuedDrawIdsRef.current.has(d.id));
      if (u.length !== 0) {
        for (const d of u) a.queuedDrawIdsRef.current.add(d.id);
        a.commitDrawBatch(u);
      }
    };
    return {
      start(a, u) {
        p(), n.current = [], i.current = { shapeId: a.id, pointerId: u.pointerId, raw: !1 }, e.current.activeDrawRef.current = a, e.current.applyInteraction({ kind: "drawing", id: a.id, pointerId: u.pointerId }), l();
      },
      move(a) {
        const u = e.current, d = i.current, w = u.activeDrawRef.current;
        if (!(!d || d.pointerId !== a.pointerId || (w == null ? void 0 : w.id) !== d.shapeId || !w.points || u.interactionRef.current.kind !== "drawing")) {
          if (a.type === "pointerrawupdate") {
            if (Zn()) return;
            d.raw = !0;
          } else if (d.raw)
            return;
          if (a.shiftKey) {
            p(), n.current = [];
            const h = u.toPage(a.clientX, a.clientY);
            w.points = [w.points[0], [h.x, h.y]], l();
            return;
          }
          for (const h of Hn(a)) {
            const x = u.toPage(h.clientX, h.clientY);
            n.current.push([x.x, x.y]);
          }
          r.current === null && (r.current = requestAnimationFrame(() => {
            r.current = null, v(), l();
          }));
        }
      },
      finish: (a, u = !1) => {
        const d = i.current;
        if (a && (d == null ? void 0 : d.pointerId) !== a.pointerId) return;
        const w = e.current;
        p(), v();
        const h = w.activeDrawRef.current;
        if (d && (h == null ? void 0 : h.id) === d.shapeId && h.points) {
          if ((a == null ? void 0 : a.type) === "pointerup" && Number.isFinite(a.clientX) && Number.isFinite(a.clientY)) {
            const x = w.toPage(a.clientX, a.clientY);
            jr(h.points, [[x.x, x.y]], w.cameraRef.current.z, h.type === "draw" ? h.inkStyle : void 0);
          }
          w.pendingDrawsRef.current.push(Ec(h)), w.activeDrawRef.current = null, w.pointers.current.delete(d.pointerId), w.interactionRef.current.kind === "drawing" && w.applyInteraction({ kind: "none" }), l();
        }
        i.current = null, u ? (o.current !== null && cancelAnimationFrame(o.current), c()) : o.current === null && (o.current = requestAnimationFrame(c));
      },
      cancel() {
        var d;
        p(), n.current = [];
        const a = e.current, u = i.current;
        u && ((d = a.activeDrawRef.current) == null ? void 0 : d.id) === u.shapeId && (a.activeDrawRef.current = null, a.pointers.current.delete(u.pointerId), a.interactionRef.current.kind === "drawing" && a.applyInteraction({ kind: "none" }), l()), i.current = null;
      }
    };
  }, []);
  return St(() => {
    const l = t.containerRef.current, p = (a) => {
      a.target === l && e.current.pointers.current.has(a.pointerId) && !(l != null && l.hasPointerCapture(a.pointerId)) && s.finish(a);
    }, v = () => {
      s.finish(void 0, !0);
      const a = e.current;
      a.interactionRef.current.kind === "pinch" && a.applyInteraction({ kind: "none" }), a.interactionRef.current.kind === "none" && a.pointers.current.clear();
    }, c = () => {
      document.visibilityState === "hidden" && v();
    }, y = (a) => {
      a.key === "Escape" && i.current && a.target instanceof Node && (l != null && l.contains(a.target)) && (a.preventDefault(), s.cancel());
    };
    return window.addEventListener("pointerrawupdate", s.move), window.addEventListener("blur", v), window.addEventListener("keydown", y), document.addEventListener("visibilitychange", c), l == null || l.addEventListener("lostpointercapture", p), () => {
      window.removeEventListener("pointerrawupdate", s.move), window.removeEventListener("blur", v), window.removeEventListener("keydown", y), document.removeEventListener("visibilitychange", c), l == null || l.removeEventListener("lostpointercapture", p), r.current !== null && cancelAnimationFrame(r.current), o.current !== null && cancelAnimationFrame(o.current), r.current = null, o.current = null, n.current = [], i.current = null;
    };
  }, [s, t.containerRef]), s;
}
function Ac({ containerRef: t, penModeRef: e, toolRef: n }) {
  St(() => {
    const r = t.current;
    if (!r) return;
    const o = r.ownerDocument, i = o.defaultView, s = /* @__PURE__ */ new Set(), l = (c) => {
      const y = Array.from(c.changedTouches), a = c.type !== "touchstart" && y.some((f) => s.has(f.identifier));
      if (c.type !== "touchstart")
        for (const f of y) s.delete(f.identifier);
      if (c.type === "touchcancel") return;
      const u = c.target instanceof Element ? c.target : null;
      if (u != null && u.closest("button, input, textarea, select, a, [data-canvas-inspector], [data-canvas-pen-palette]")) return;
      const d = n.current, w = d === "draw" || d === "highlighter" || d === "eraser", h = y.some((f) => f.touchType === "stylus"), x = c.type === "touchstart" && Zn() && d !== "note" && d !== "text" && !(u != null && u.closest('[contenteditable="true"]')) && y.some((f) => {
        const m = f.radiusX || 0;
        return f.clientX - m < 10 || f.clientX + m > ((i == null ? void 0 : i.innerWidth) ?? 1 / 0) - 10;
      });
      if (!(!a && !e.current && !w && !h && !x)) {
        if (c.type === "touchstart")
          for (const f of y)
            Number.isFinite(f.identifier) && s.add(f.identifier);
        c.cancelable && c.preventDefault();
      }
    }, p = (c) => {
      const y = c.target instanceof Node && r.contains(c.target), a = o.activeElement && r.contains(o.activeElement);
      (y || a) && c.cancelable && c.preventDefault();
    }, v = { passive: !1, capture: !0 };
    for (const c of ["touchstart", "touchend", "touchcancel"])
      r.addEventListener(c, l, v);
    for (const c of ["gesturestart", "gesturechange", "gestureend"])
      o.addEventListener(c, p, v);
    return () => {
      for (const c of ["touchstart", "touchend", "touchcancel"])
        r.removeEventListener(c, l, !0);
      for (const c of ["gesturestart", "gesturechange", "gestureend"])
        o.removeEventListener(c, p, !0);
    };
  }, [t, e, n]);
}
function Bc({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: r,
  editingIdRef: o,
  cameraRef: i,
  shapesRef: s,
  selectedRef: l,
  toolRef: p,
  penModeRef: v,
  activeColorRef: c,
  drawColorRef: y,
  drawStrokeWidth: a,
  drawInkStyle: u,
  objectSnapEnabled: d,
  camera: w,
  shapes: h,
  selected: x,
  isSpaceDown: f,
  textualTypes: m,
  setCamera: k,
  setShapes: $,
  setEditingId: b,
  setEraserPos: z,
  setGuides: S,
  setAnnouncement: M,
  applyInteraction: X,
  selectNow: Y,
  beginHistory: g,
  endHistory: I,
  cancelHistory: F,
  commit: W,
  onToolChange: P,
  expandToGroups: L,
  toPage: O,
  createId: D,
  liveStrokeCanvasRef: T,
  activeDrawRef: H,
  pendingDrawsRef: R,
  queuedDrawIdsRef: tt,
  commitDrawBatch: ot,
  setIsPenMode: Q
}) {
  Ac({ containerRef: t, penModeRef: v, toolRef: p });
  const U = _c({
    containerRef: t,
    pointers: n,
    interactionRef: r,
    cameraRef: i,
    toPage: O,
    applyInteraction: X,
    liveStrokeCanvasRef: T,
    activeDrawRef: H,
    pendingDrawsRef: R,
    queuedDrawIdsRef: tt,
    commitDrawBatch: ot
  }), et = Fc({
    drawing: U,
    containerRef: t,
    editorRef: e,
    pointers: n,
    interactionRef: r,
    editingIdRef: o,
    cameraRef: i,
    shapesRef: s,
    selectedRef: l,
    toolRef: p,
    penModeRef: v,
    activeColorRef: c,
    drawColorRef: y,
    drawStrokeWidth: a,
    drawInkStyle: u,
    camera: w,
    shapes: h,
    selected: x,
    isSpaceDown: f,
    textualTypes: m,
    setShapes: $,
    setEditingId: b,
    applyInteraction: X,
    selectNow: Y,
    beginHistory: g,
    cancelHistory: F,
    commit: W,
    onToolChange: P,
    expandToGroups: L,
    toPage: O,
    createId: D,
    liveStrokeCanvasRef: T,
    activeDrawRef: H,
    pendingDrawsRef: R,
    setIsPenMode: Q
  });
  return Oc({
    objectSnapEnabled: d,
    drawing: U,
    containerRef: t,
    pointers: n,
    interactionRef: r,
    cameraRef: i,
    shapesRef: s,
    setCamera: k,
    setShapes: $,
    setEditingId: b,
    setEraserPos: z,
    setGuides: S,
    setAnnouncement: M,
    applyInteraction: X,
    selectNow: Y,
    endHistory: I,
    commit: W,
    onToolChange: P,
    expandToGroups: L,
    toPage: O,
    createId: D
  }), et;
}
function Hc(t) {
  Cc(t);
  const e = Zt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return Yc({ ...t, toolRef: e }), Bc(t);
}
function Kc({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: r,
  zoom: o
}) {
  const i = n || r.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" || e === "lasso" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", s = t ? V.gridDark : V.gridLight, l = 40 * o;
  return { cursor: i, gridColor: s, gridSize: l, strokeColorOf: (v) => v.strokeColor ? De(v) : v.color ? ft[v.color].border : t ? "var(--canvas-slate-200)" : V.ink };
}
const fe = { width: 180, height: 120 };
function jc({ shapes: t, camera: e, isDarkMode: n, viewSize: r, onCenter: o }) {
  const i = it(null), s = it(!1), l = (x) => {
    const f = dt(x);
    return { x: f.minX, y: f.minY, width: f.maxX - f.minX, height: f.maxY - f.minY };
  }, p = t.length > 0 ? t.map(l).reduce((x, f) => ({
    x: Math.min(x.x, f.x),
    y: Math.min(x.y, f.y),
    width: Math.max(x.x + x.width, f.x + f.width) - Math.min(x.x, f.x),
    height: Math.max(x.y + x.height, f.y + f.height) - Math.min(x.y, f.y)
  })) : { x: 0, y: 0, width: 0, height: 0 }, v = {
    x: e.x,
    y: e.y,
    width: r.width / e.z,
    height: r.height / e.z
  }, c = wi(p, v, fe), y = (x) => {
    const f = i.current;
    if (!f) return null;
    const m = f.getBoundingClientRect(), k = m.width > 0 ? fe.width / m.width : 1, $ = m.height > 0 ? fe.height / m.height : 1;
    return c.toWorld({
      x: (x.clientX - m.left) * k,
      y: (x.clientY - m.top) * $
    });
  }, a = (x) => {
    x.stopPropagation(), x.preventDefault(), s.current = !0;
    try {
      x.currentTarget.setPointerCapture(x.pointerId);
    } catch {
    }
    const f = y(x);
    f && o(f);
  }, u = (x) => {
    if (!s.current) return;
    x.stopPropagation();
    const f = y(x);
    f && o(f);
  }, d = (x) => {
    x.stopPropagation(), s.current = !1;
  }, w = c.toMinimap(v);
  return /* @__PURE__ */ C(
    "div",
    {
      ref: i,
      "data-canvas-minimap": "true",
      role: "presentation",
      className: `absolute z-30 border rounded-lg overflow-hidden shadow-md cursor-crosshair ${n ? "bg-slate-900/90 border-slate-700" : "bg-white/90 border-slate-300"}`,
      style: { right: 12, bottom: 12, width: fe.width, height: fe.height },
      onPointerDown: a,
      onPointerMove: u,
      onPointerUp: d,
      onClick: (x) => x.stopPropagation(),
      children: /* @__PURE__ */ K("svg", { width: fe.width, height: fe.height, className: "block", children: [
        t.map((x) => {
          const f = l(x), m = c.toMinimap(f), k = x.color ? ft[x.color].bg : V.marqueeFill;
          return /* @__PURE__ */ C(
            "rect",
            {
              "data-canvas-minimap-shape": x.id,
              x: m.x,
              y: m.y,
              width: Math.max(1.5, m.width),
              height: Math.max(1.5, m.height),
              fill: k,
              stroke: n ? "#475569" : "#94a3b8",
              strokeWidth: 0.5,
              rx: 1
            },
            x.id
          );
        }),
        /* @__PURE__ */ C(
          "rect",
          {
            "data-canvas-minimap-view": "true",
            x: w.x,
            y: w.y,
            width: Math.max(2, w.width),
            height: Math.max(2, w.height),
            fill: "none",
            stroke: V.blue,
            strokeWidth: 1.2
          }
        )
      ] })
    }
  );
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = _i, document.head.appendChild(t);
}
const xe = 0.1, ne = 4, Rr = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function No(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Gr(t, e, n) {
  return t.map((r) => {
    if (!e.has(r.id) || r.locked) return r;
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
        return No(r);
    }
  });
}
function Vr(t, e, n) {
  return t.map((r) => e.has(r.id) && r.type === "draw" && !r.locked ? { ...r, ...n } : r);
}
function qr(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const Zc = hi(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: r,
  activeColor: o,
  defaultActiveColor: i,
  onActiveColorChange: s,
  drawStrokeWidth: l = 4,
  onToolChange: p,
  onDirty: v,
  onZoomChange: c,
  onSelectionChange: y,
  shapes: a,
  onShapesChange: u,
  peerCursors: d,
  onLocalCursor: w,
  renderDiagram: h,
  drawInkStyle: x,
  onDrawInkStyleChange: f,
  objectSnapEnabled: m,
  onObjectSnapEnabledChange: k,
  showGrid: $,
  onShowGridChange: b,
  showMinimap: z,
  onShowMinimapChange: S
}, M) {
  var ar, cr, sr, lr;
  const { drawInkStyle: X, objectSnapEnabled: Y, showGrid: g, minimapEnabled: I, selectInkStyle: F, selectObjectSnap: W, selectMinimap: P } = dc({
    drawInkStyle: x,
    onDrawInkStyleChange: f,
    objectSnapEnabled: m,
    onObjectSnapEnabledChange: k,
    showGrid: $,
    onShowGridChange: b,
    showMinimap: z,
    onShowMinimapChange: S
  }), [L, O] = lt.useState(l);
  lt.useEffect(() => O(l), [l]);
  const {
    containerRef: D,
    editorRef: T,
    setLocalShapes: H,
    controlled: R,
    shapes: tt,
    setShapes: ot,
    camera: Q,
    setCamera: U,
    cameraRef: et,
    selected: at,
    selectedRef: nt,
    editingId: N,
    setEditingId: E,
    editingIdRef: j,
    interaction: ct,
    interactionRef: xt,
    applyInteraction: wt,
    isSpaceDown: zt,
    setIsSpaceDown: vt,
    guides: A,
    setGuides: pt,
    announcement: $t,
    setAnnouncement: Ct,
    showInspectorPalette: Xt,
    setShowInspectorPalette: ve,
    eraserPos: ge,
    setEraserPos: ye,
    isPenMode: bt,
    setIsPenMode: It,
    penModeRef: Ht,
    setActiveColor: Nt,
    activeColorRef: oe,
    drawColor: Ut,
    setDrawColor: Jt,
    drawColorRef: mt,
    installedFontFamilies: te,
    pointers: Pt,
    past: Rt,
    future: dn,
    selectNow: we,
    commit: Kt,
    deleteSelection: We,
    beginHistory: un,
    endHistory: hn,
    cancelHistory: fn,
    toPage: Oe,
    viewportCentre: B,
    expandToGroups: q,
    toolRef: Z,
    shapesRef: G,
    liveStrokeCanvasRef: Et,
    activeDrawRef: Wt,
    pendingDrawsRef: ee,
    queuedDrawIdsRef: xn,
    commitDrawBatch: Po
  } = uc({ boardIdentity: e, tool: r, activeColor: o, defaultActiveColor: i, onActiveColorChange: s, controlledShapes: a, onShapesChange: u, onDirty: v }), Eo = lt.useRef(null), [pn, Qn] = lt.useState(!1), [mn, Lo] = lt.useState(""), [vn, gn] = lt.useState(-1), Jn = lt.useRef(null), Ye = lt.useMemo(() => gc(tt, mn), [tt, mn]);
  lt.useEffect(() => {
    var _;
    pn && ((_ = Jn.current) == null || _.focus());
  }, [pn]);
  const ie = () => {
    var rt;
    const _ = (rt = D.current) == null ? void 0 : rt.getBoundingClientRect();
    return { width: (_ == null ? void 0 : _.width) ?? 0, height: (_ == null ? void 0 : _.height) ?? 0 };
  }, tr = lt.useCallback((_, rt) => {
    if (rt.length === 0) return;
    const J = (_ % rt.length + rt.length) % rt.length;
    gn(J);
    const ut = rt[J];
    we(/* @__PURE__ */ new Set([ut]));
    const gt = G.current.find((be) => be.id === ut);
    if (!gt) return;
    const { width: Ot, height: Lt } = ie();
    if (Ot <= 0 || Lt <= 0) return;
    const ht = dt(gt), kt = Math.min(
      1,
      et.current.z,
      Math.max(xe, Math.min(Ot / (ht.maxX - ht.minX + 160), Lt / (ht.maxY - ht.minY + 160)))
    );
    U(Ln(
      { x: (ht.minX + ht.maxX) / 2, y: (ht.minY + ht.maxY) / 2 },
      Ot,
      Lt,
      kt
    )), Ct(`${ut}로 이동`);
  }, [et, we, Ct, U, G]), To = lt.useCallback((_) => {
    tr(vn + _, Ye);
  }, [vn, Ye, tr]), er = lt.useCallback(() => {
    var _;
    Qn(!1), (_ = D.current) == null || _.focus();
  }, [D]), yn = lt.useCallback(() => {
    const _ = Ve(G.current), { width: rt, height: J } = ie();
    !_ || rt <= 0 || J <= 0 || U(Ee(_, rt, J, xe, ne));
  }, [U, G]), wn = lt.useCallback(() => {
    const _ = nt.current, rt = Ve(G.current.filter((gt) => _.has(gt.id))), { width: J, height: ut } = ie();
    !rt || J <= 0 || ut <= 0 || U(Ee(rt, J, ut, xe, ne));
  }, [nt, U, G]), bn = lt.useCallback(() => {
    const { width: _, height: rt } = ie(), J = et.current, ut = J.x + _ / 2 / J.z, gt = J.y + rt / 2 / J.z;
    U({ x: ut - _ / 2 / ne, y: gt - rt / 2 / ne, z: ne });
  }, [et, U]), Fo = lt.useCallback((_) => {
    const rt = nt.current, J = G.current, { width: ut, height: gt } = ie();
    if (J.length === 0 || ut <= 0 || gt <= 0) return;
    const Ot = Ee(Ve(J), ut, gt, xe, ne).z, Lt = Ve(J.filter((be) => rt.has(be.id))), ht = Lt ? Ee(Lt, ut, gt, xe, ne).z : null, kt = bi(et.current.z, Ot, ht, _);
    kt && (kt === "all" ? yn() : kt === "selection" ? wn() : bn());
  }, [et, yn, wn, nt, G, bn]), Do = lt.useCallback((_) => {
    const rt = G.current.find((Ot) => Ot.id === _), { width: J, height: ut } = ie();
    if (!rt || J <= 0 || ut <= 0) return;
    const gt = dt(rt);
    vc(gt, et.current, J, ut) || U(Ln(
      { x: (gt.minX + gt.maxX) / 2, y: (gt.minY + gt.maxY) / 2 },
      J,
      ut,
      et.current.z
    ));
  }, [et, U, G]), Wo = lt.useCallback((_) => {
    const { width: rt, height: J } = ie();
    rt <= 0 || J <= 0 || U(Ln(_, rt, J, et.current.z));
  }, [et, U]), nr = lt.useRef(void 0);
  nr.current = {
    openFind: () => {
      gn(-1), Qn(!0);
    },
    fitAll: yn,
    fitSelection: wn,
    zoomMax: bn,
    smartZoom: Fo,
    revealShape: Do
  }, re(() => {
    const _ = Et.current, rt = D.current;
    if (!_ || !rt) return;
    const J = () => {
      const gt = Lc(_, rt.clientWidth, rt.clientHeight, window.devicePixelRatio || 1), Ot = new Set(tt.map((Lt) => Lt.id));
      ee.current = ee.current.filter((Lt) => !Ot.has(Lt.id));
      for (const Lt of Ot) xn.current.delete(Lt);
      on(_, ee.current, Wt.current, et.current, gt);
    };
    if (J(), typeof ResizeObserver > "u")
      return window.addEventListener("resize", J), () => window.removeEventListener("resize", J);
    const ut = new ResizeObserver(J);
    return ut.observe(rt), window.addEventListener("resize", J), () => {
      ut.disconnect(), window.removeEventListener("resize", J);
    };
  }, [Wt, Q, et, D, Et, ee, xn, tt]);
  const kn = mc({
    containerRef: D,
    shapesRef: G,
    clipboardRef: Eo,
    selectedRef: nt,
    commit: Kt,
    deleteSelection: We,
    selectNow: we,
    setAnnouncement: Ct,
    createId: qr
  }), {
    inspectorSelection: _e,
    inspectorShape: Ie,
    hoveredShapeId: Oo,
    onContainerPointerMove: _o,
    onContainerPointerLeave: Ao
  } = hc({
    containerRef: D,
    camera: Q,
    interactionRef: xt,
    toolRef: Z,
    pointers: Pt,
    shapesRef: G,
    setCamera: U,
    minZoom: xe,
    maxZoom: ne,
    shapes: tt,
    selected: at,
    editingId: N,
    textualTypes: Rr,
    onZoomChange: c,
    onSelectionChange: y,
    onLocalCursor: w,
    toPage: Oe
  }), [rr, Mn] = lt.useState(!1);
  lt.useEffect(() => {
    Ie || Mn(!1);
  }, [Ie]);
  const Sn = lt.useCallback((_) => {
    const rt = new Set(nt.current);
    rt.size !== 0 && Kt((J) => Gr(J, rt, _));
  }, [Kt, nt]), Bo = lt.useCallback((_) => {
    O(_), Sn(_);
  }, [Sn]), Ho = lt.useCallback((_) => {
    Jt(_);
    const rt = new Set(
      G.current.filter((J) => J.type === "draw" && nt.current.has(J.id)).map((J) => J.id)
    );
    rt.size > 0 && Kt((J) => Vr(J, rt, { color: _ }));
  }, [Kt, nt, Jt, G]), {
    onPointerDown: Ko,
    onResizeHandleDown: jo,
    onRotateHandleDown: Uo,
    onConnectHandleDown: Ro,
    onBendHandleDown: Go,
    onOrthogonalSegmentHandleDown: Vo,
    onArrowEndpointDown: qo
  } = Hc({
    ref: M,
    containerRef: D,
    viewActionsRef: nr,
    editorRef: T,
    pointers: Pt,
    interactionRef: xt,
    cameraRef: et,
    shapesRef: G,
    toolRef: Z,
    penModeRef: Ht,
    activeColorRef: oe,
    drawColorRef: mt,
    setDrawColor: Jt,
    setActiveColor: Nt,
    drawStrokeWidth: L,
    drawInkStyle: X,
    objectSnapEnabled: Y,
    setSelectedStrokeWidth: Sn,
    camera: Q,
    shapes: tt,
    selected: at,
    isSpaceDown: zt,
    setCamera: U,
    setShapes: ot,
    setEditingId: E,
    setEraserPos: ye,
    setGuides: pt,
    setAnnouncement: Ct,
    applyInteraction: wt,
    selectNow: we,
    selectionActions: kn,
    past: Rt,
    future: dn,
    beginHistory: un,
    endHistory: hn,
    cancelHistory: fn,
    commit: Kt,
    deleteSelection: We,
    onDirty: v,
    onToolChange: p,
    controlled: R,
    isDarkMode: n,
    minZoom: xe,
    maxZoom: ne,
    textualTypes: Rr,
    selectedRef: nt,
    editingIdRef: j,
    setIsSpaceDown: vt,
    viewportCentre: B,
    setLocalShapes: H,
    expandToGroups: q,
    toPage: Oe,
    createId: qr,
    liveStrokeCanvasRef: Et,
    activeDrawRef: Wt,
    pendingDrawsRef: ee,
    queuedDrawIdsRef: xn,
    commitDrawBatch: Po,
    setIsPenMode: It
  }), { cursor: Zo, gridColor: Qo, gridSize: or, strokeColorOf: Jo } = Kc({
    isDarkMode: n,
    tool: r === "highlighter" ? "draw" : r,
    isSpaceDown: zt,
    interaction: ct,
    zoom: Q.z
  }), $n = (_) => {
    const rt = nt.current, J = j.current, ut = new Set(rt);
    if (J && ut.add(J), ut.size === 0) return;
    const gt = "strokeWidth" in _, Ot = Object.keys(_).every((ht) => ht === "color" || ht === "fillColor" || ht === "strokeColor" || ht === "strokeWidth");
    if (_e.length > 0 && _e.every((ht) => ht.type === "draw") && Ot) {
      const ht = "color" in _ ? _.color : void 0, kt = "strokeWidth" in _ ? _.strokeWidth : void 0, be = "strokeColor" in _ ? _.strokeColor : void 0;
      Kt((di) => Vr(di, ut, {
        ...ht !== void 0 ? { color: ht } : {},
        ...kt !== void 0 ? { strokeWidth: kt } : {},
        ...be !== void 0 ? { strokeColor: be } : {}
      }));
      return;
    }
    if (gt) {
      const ht = _.strokeWidth;
      if (ht !== void 0 && Object.keys(_).length === 1) {
        Kt((kt) => Gr(kt, ut, ht));
        return;
      }
    }
    Kt((ht) => ht.map((kt) => {
      if (!ut.has(kt.id) || kt.locked) return kt;
      if (!gt) return { ...kt, ..._ };
      switch (kt.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...kt, ..._ };
        case "note":
        case "card":
        case "text":
        case "image":
          return kt;
        case "draw":
          return { ...kt, ..._ };
        default:
          return No(kt);
      }
    }));
  }, {
    commitEditorHtml: ti,
    applyFormat: ei,
    applyList: ni,
    onEditorKeyDown: ri,
    applyCustomFontFamily: oi
  } = lc({
    editorRef: T,
    editingId: N,
    setShapes: ot,
    setAnnouncement: Ct,
    onDirty: v,
    patchSelected: $n
  }), { renderEditor: ii, renderShapeBody: ai } = cc({
    camera: Q,
    editingId: N,
    isDarkMode: n,
    editorRef: T,
    commitEditorHtml: ti,
    onEditorKeyDown: ri,
    setShapes: ot,
    onDirty: v,
    renderDiagram: h
  }), ci = ct.kind === "marquee" ? ct : null, si = ct.kind === "lasso" ? ct : null, li = lt.useCallback(() => {
    var _;
    Pt.current.clear(), Wt.current = null, wt({ kind: "none" }), on(
      Et.current,
      ee.current,
      null,
      et.current,
      window.devicePixelRatio || 1
    ), It(!1), p("select"), (_ = D.current) == null || _.focus();
  }, [
    Wt,
    wt,
    et,
    D,
    Et,
    p,
    ee,
    Pt,
    It
  ]), { shapeById: ir, visiblePaintOrder: Cn } = sc({
    containerRef: D,
    shapesRef: G,
    shapes: tt,
    camera: Q,
    selected: at,
    editingId: N,
    boardIdentity: e
  });
  return /* @__PURE__ */ K(
    "div",
    {
      ref: D,
      onPointerDown: Ko,
      onPointerMove: _o,
      onPointerLeave: Ao,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": r,
      "data-canvas-pen-mode": bt ? "true" : "false",
      "data-canvas-camera-x": Q.x,
      "data-canvas-camera-y": Q.y,
      "data-canvas-camera-z": Q.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
        cursor: Zo,
        background: n ? V.canvasDark : V.canvasLight,
        backgroundImage: g ? `radial-gradient(${Qo} 1px, transparent 1px)` : "none",
        backgroundSize: `${or}px ${or}px`,
        backgroundPosition: `${-Q.x * Q.z}px ${-Q.y * Q.z}px`
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
            children: $t
          }
        ),
        /* @__PURE__ */ K("div", { className: "absolute inset-0", style: { isolation: "isolate", zIndex: 0 }, children: [
          /* @__PURE__ */ C(
            ba,
            {
              visiblePaintOrder: Cn,
              selected: at,
              shapeById: ir,
              allShapes: G.current,
              camera: Q,
              interaction: ct,
              eraserPos: ge,
              guides: Y ? A : [],
              marquee: ci,
              lasso: si,
              strokeColorOf: Jo
            }
          ),
          /* @__PURE__ */ C("canvas", { style: { zIndex: Cn.length + 1 }, ref: Et, "aria-hidden": "true", "data-canvas-live-strokes": "true", className: "absolute inset-0 w-full h-full pointer-events-none" }),
          /* @__PURE__ */ C(
            Aa,
            {
              visiblePaintOrder: Cn,
              selected: at,
              editingId: N,
              camera: Q,
              shapeById: ir,
              allShapes: G.current,
              peerCursors: d,
              hoveredShapeId: Oo,
              dotsEnabled: r === "select" && ct.kind === "none",
              isDarkMode: n,
              renderEditor: ii,
              renderShapeBody: ai,
              setEditingId: E,
              onBendHandleDown: Go,
              onOrthogonalSegmentHandleDown: Vo,
              onResizeHandleDown: jo,
              onRotateHandleDown: Uo,
              onConnectHandleDown: Ro,
              onArrowEndpointDown: qo
            }
          )
        ] }),
        Ie && (rr || !!N) && r !== "draw" && r !== "highlighter" && r !== "eraser" && /* @__PURE__ */ C(
          Za,
          {
            shape: Ie,
            selection: _e,
            selectionActions: kn,
            shapes: tt,
            camera: Q,
            canvasSize: { width: ((ar = D.current) == null ? void 0 : ar.clientWidth) ?? 380, height: ((cr = D.current) == null ? void 0 : cr.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!N,
            showPalette: Xt,
            installedFontFamilies: te,
            setShowPalette: ve,
            setActiveColor: Nt,
            patchSelected: $n,
            applyFormat: ei,
            applyList: ni,
            applyCustomFontFamily: oi,
            onClose: () => Mn(!1)
          }
        ),
        Ie && !rr && !N && ct.kind === "none" && r !== "draw" && r !== "highlighter" && r !== "eraser" && /* @__PURE__ */ C(
          nc,
          {
            selection: _e,
            selectionActions: kn,
            camera: Q,
            canvasSize: { width: ((sr = D.current) == null ? void 0 : sr.clientWidth) ?? 380, height: ((lr = D.current) == null ? void 0 : lr.clientHeight) ?? 190 },
            isDarkMode: n,
            setActiveColor: Nt,
            patchSelected: $n,
            onOpenInspector: () => Mn(!0)
          }
        ),
        bt && /* @__PURE__ */ C(ic, { isDarkMode: n, onExit: li }),
        /* @__PURE__ */ C(
          oc,
          {
            tool: r,
            activeColor: Ut,
            drawStrokeWidth: L,
            drawInkStyle: X,
            objectSnapEnabled: Y,
            onSelectInkStyle: F,
            onSelectObjectSnap: W,
            isDarkMode: n,
            onSelectColor: Ho,
            onSelectStrokeWidth: Bo
          }
        ),
        pn && /* @__PURE__ */ K(
          "div",
          {
            "data-canvas-find": "true",
            className: `absolute z-40 top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-xl border shadow-lg backdrop-blur-sm ${n ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-300 text-slate-800"}`,
            onPointerDown: (_) => _.stopPropagation(),
            onClick: (_) => _.stopPropagation(),
            children: [
              /* @__PURE__ */ C(
                "input",
                {
                  ref: Jn,
                  "data-canvas-find-input": "true",
                  type: "text",
                  value: mn,
                  onChange: (_) => {
                    Lo(_.target.value), gn(-1);
                  },
                  onKeyDown: (_) => {
                    _.key === "Enter" ? (_.preventDefault(), To(_.shiftKey ? -1 : 1)) : _.key === "Escape" && (_.preventDefault(), er());
                  },
                  placeholder: "찾기",
                  "aria-label": "캔버스에서 찾기",
                  className: `w-56 bg-transparent outline-none text-sm ${n ? "placeholder-slate-500" : "placeholder-slate-400"}`
                }
              ),
              /* @__PURE__ */ C("span", { "data-canvas-find-count": "true", className: "text-xs opacity-60 tabular-nums min-w-8 text-center", children: Ye.length === 0 ? "0/0" : `${Math.min(vn + 1, Ye.length)}/${Ye.length}` }),
              /* @__PURE__ */ C(
                "button",
                {
                  type: "button",
                  onClick: er,
                  "aria-label": "찾기 닫기",
                  className: "w-6 h-6 rounded text-sm opacity-60 hover:opacity-100",
                  children: "×"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ K("div", { className: "absolute z-30 right-3 bottom-3 flex flex-col items-end gap-1.5", children: [
          I && tt.length > 0 && /* @__PURE__ */ C(
            jc,
            {
              shapes: tt,
              camera: Q,
              isDarkMode: n,
              onCenter: Wo,
              viewSize: ie()
            }
          ),
          /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              "data-canvas-minimap-toggle": "true",
              onClick: () => P(!I),
              "aria-pressed": I,
              title: "미니맵 켜기/끄기",
              className: `h-6 px-2 rounded-md text-[10px] font-semibold border shadow-sm ${n ? "bg-slate-900/90 border-slate-700 text-slate-300 hover:bg-slate-800" : "bg-white/90 border-slate-300 text-slate-600 hover:bg-slate-50"} ${I ? "" : "opacity-60"}`,
              children: "미니맵"
            }
          )
        ] })
      ]
    }
  );
});
export {
  ft as CANVAS_COLORS,
  jn as CANVAS_COLOR_KEYS,
  Vt as CANVAS_FONTS,
  Zc as InfiniteCanvas,
  yi as SHAPE_TOOLS,
  Vr as applySelectedDrawStyle,
  Gr as applySelectedStrokeWidth,
  qc as diagramTemplate,
  Ha as getInspectorGroups,
  qn as isDiagramShape
};
