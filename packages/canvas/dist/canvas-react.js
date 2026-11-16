import { jsx as C, jsxs as K, Fragment as _t } from "react/jsx-runtime";
import lt, { useRef as it, useState as st, useLayoutEffect as re, useEffect as St, useMemo as Zt, useCallback as yt, useImperativeHandle as si, forwardRef as li } from "react";
import { j as qr, k as an, q as Kn, a as ft, v as di, d as Vt, s as ui, b as jn, h as hi, n as fi, e as de, p as xi, C as pi, S as mi, m as vi, o as gi } from "./navigation-CJfchp2F.js";
import { Minus as yi, Plus as wi, ChevronDown as bi, AlignLeft as Zr, AlignCenter as Qr, AlignRight as Jr, List as ki, ListOrdered as Mi, Bold as Si, Italic as $i, Underline as Ci, Group as to, Ungroup as zi, Clipboard as Xi, Copy as Tn, Lock as eo, Trash2 as Ii, ChevronsUp as Yi, ArrowUp as no, ArrowDown as ro, ChevronsDown as Ni, ClipboardPaste as Pi, RotateCcw as Ei, RotateCw as Li, Undo2 as Ti, LockOpen as dr, MoreHorizontal as ur, MousePointer2 as Fi } from "lucide-react";
const Di = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-900-90: rgba(15,23,42,.9);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-90: rgba(255,255,255,.9);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas *{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}.invoicex-canvas input,.invoicex-canvas textarea,.invoicex-canvas [contenteditable=true],.invoicex-canvas [contenteditable=true] *{-webkit-user-select:text;user-select:text}.invoicex-canvas a{-webkit-touch-callout:initial}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .top-4{top:1rem}.invoicex-canvas .left-0{left:0}.invoicex-canvas .left-1\\/2{left:50%}.invoicex-canvas .right-0{right:0}.invoicex-canvas .right-4{right:1rem}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .bottom-4{bottom:1rem}.invoicex-canvas .right-safe-4{right:max(1rem,env(safe-area-inset-right))}.invoicex-canvas .bottom-safe-4{bottom:max(1rem,env(safe-area-inset-bottom))}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .min-h-11{min-height:2.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .inline-flex{display:inline-flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .px-3\\.5{padding-left:.875rem;padding-right:.875rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .py-2{padding-top:.5rem;padding-bottom:.5rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-2{padding-right:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .mr-1{margin-right:.25rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{user-select:none;-webkit-user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .-translate-x-1\\/2{transform:translate(-50%)}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-sm{font-size:.875rem;line-height:1.25rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-900\\/90{background-color:var(--canvas-slate-900-90)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-white\\/90{background-color:var(--canvas-white-90)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-l{border-left-width:1px;border-left-style:solid}.invoicex-canvas .border-r{border-right-width:1px;border-right-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .focus-visible\\:outline:focus-visible{outline-style:solid}.invoicex-canvas .focus-visible\\:outline-2:focus-visible{outline-width:2px}.invoicex-canvas .focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.invoicex-canvas .focus-visible\\:outline-blue-500:focus-visible{outline-color:var(--canvas-blue-500)}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .w-10{width:2.5rem}.invoicex-canvas .min-w-10{min-width:2.5rem}.invoicex-canvas .shrink-0{flex-shrink:0}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .h-10{height:2.5rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .backdrop-blur-md{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.invoicex-canvas .transition-all{transition-property:all;transition-duration:.15s}.invoicex-canvas .transition-transform{transition-property:transform;transition-duration:.15s}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-selection-action-buttons{min-width:0}.invoicex-canvas .canvas-selection-action-buttons>button{flex:0 0 auto}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(max-width:400px){.invoicex-canvas .canvas-selection-actions{flex-direction:column;align-items:stretch;gap:.25rem}.invoicex-canvas .canvas-selection-label{padding-left:.25rem}.invoicex-canvas .canvas-selection-action-buttons{flex-wrap:nowrap;gap:.125rem;overflow-x:auto;scrollbar-width:none}.invoicex-canvas .canvas-selection-action-buttons::-webkit-scrollbar{display:none}}@media(max-width:360px){.invoicex-canvas .canvas-selection-action-buttons>button{width:1.75rem;height:1.75rem;flex-basis:1.75rem}}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}:where(.invoicex-canvas) button{border:0 solid;background-color:transparent;font-family:inherit;cursor:pointer}:where(.invoicex-canvas) .bg-current{background-color:currentColor}', V = Object.freeze({
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
}), oo = 12;
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
  const i = Be(t, e, n), s = Be(t, e, r), l = Be(n, r, t), f = Be(n, r, e);
  return Math.abs(i) < 1e-6 && Ae(t, n, e) || Math.abs(s) < 1e-6 && Ae(t, r, e) || Math.abs(l) < 1e-6 && Ae(n, t, r) || Math.abs(f) < 1e-6 && Ae(n, e, r) ? !0 : i > 0 != s > 0 && l > 0 != f > 0;
}
function Wi(t, e, n) {
  const r = Math.min(t.x, e.x), o = Math.max(t.x, e.x), i = Math.min(t.y, e.y), s = Math.max(t.y, e.y);
  if (o < n.minX || r > n.maxX || s < n.minY || i > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const l = { x: n.minX, y: n.minY }, f = { x: n.maxX, y: n.minY }, v = { x: n.maxX, y: n.maxY }, c = { x: n.minX, y: n.maxY };
  return He(t, e, l, f) || He(t, e, f, v) || He(t, e, v, c) || He(t, e, c, l);
}
function Oi(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const r of e)
      if (Wi(t[n - 1], t[n], r)) return !0;
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
  const o = /* @__PURE__ */ new Set([t, e]), i = Math.min(t, e), s = Math.max(t, e), l = oo * 1.2;
  for (const f of n) {
    const v = (r === "x" ? f.minX : f.minY) - l, c = (r === "x" ? f.maxX : f.maxY) + l, y = (a) => a >= i - l * 4 && a <= s + l * 4;
    y(v) && o.add(v), y(c) && o.add(c);
  }
  return [...o].sort((f, v) => Math.abs(f - t) - Math.abs(v - t));
}
function io(t) {
  const e = [];
  for (const n of t) {
    const r = e[e.length - 1];
    (!r || r.x !== n.x || r.y !== n.y) && e.push(n);
  }
  return e;
}
function ao(t) {
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
function _i(t, e, n) {
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
  return ao(r);
}
function Ai(t, e, n) {
  const r = t[e], o = t[e + 1];
  if (!r || !o || !Number.isFinite(n) || r.x !== o.x && r.y !== o.y) return [...t];
  const i = r.x === o.x ? [r, { x: n, y: r.y }, { x: n, y: o.y }, o] : [r, { x: r.x, y: n }, { x: o.x, y: n }, o];
  return ao([
    ...t.slice(0, e),
    ...i,
    ...t.slice(e + 2)
  ]);
}
function zn(t, e) {
  const n = [], r = [];
  for (const i of t) {
    const s = io(i);
    s.length < 2 || (Oi(s, e) ? r.push(s) : n.push(s));
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
  const o = Math.min(t, e), i = Math.max(t, e), s = Math.max(48, Math.abs(e - t) * 0.35, oo * 4);
  if (r === "x") {
    if (n === "e") return i + s;
    if (n === "w") return o - s;
  } else {
    if (n === "s") return i + s;
    if (n === "n") return o - s;
  }
  return t <= e ? o - s : i + s;
}
function Bi(t, e, n, r, o) {
  const i = (t.x + e.x) / 2, s = (t.y + e.y) / 2;
  if (n === "u") {
    if (r) {
      const f = ke(t.x, e.x, t.side, "x");
      return [t, { x: f, y: t.y }, { x: f, y: e.y }, e];
    }
    const l = ke(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: l }, { x: e.x, y: l }, e];
  }
  if (n === "zigzag") {
    if (r) {
      const v = ke(t.x, e.x, t.side, "x"), c = ke(t.y, e.y, t.side, "y");
      return o ? [t, { x: v, y: t.y }, { x: v, y: c }, { x: i, y: c }, { x: i, y: e.y }, e] : [t, { x: v, y: t.y }, { x: v, y: c }, { x: e.x, y: c }, e];
    }
    const l = ke(t.y, e.y, t.side, "y"), f = ke(t.x, e.x, t.side, "x");
    return o ? [t, { x: t.x, y: l }, { x: f, y: l }, { x: f, y: e.y }, e] : [t, { x: t.x, y: l }, { x: f, y: l }, { x: f, y: s }, { x: e.x, y: s }, e];
  }
  return [];
}
function co(t, e, n = [], r = "elbow", o = []) {
  if (o.length > 0) return _i(t, e, o);
  const i = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), s = e.side ?? (i === "e" || i === "w" ? "w" : "n"), l = i === "e" || i === "w", f = s === "e" || s === "w", v = hr(t.x, e.x, n, "x"), c = hr(t.y, e.y, n, "y"), y = [];
  if (l && f) {
    for (const w of v) y.push([t, { x: w, y: t.y }, { x: w, y: e.y }, e]);
    for (const w of c) y.push([t, { x: t.x, y: w }, { x: e.x, y: w }, e]);
  } else if (!l && !f) {
    for (const w of c) y.push([t, { x: t.x, y: w }, { x: e.x, y: w }, e]);
    for (const w of v) y.push([t, { x: w, y: t.y }, { x: w, y: e.y }, e]);
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
    const w = fr(a), m = zn(y.filter((x) => fr(x) !== w), n);
    return m.length > 1 ? m : a;
  }
  const u = Bi(t, e, r, l, f), d = zn([u], n);
  return d.length > 1 ? d : a;
}
function so(t) {
  return t.length < 2 ? 0 : Te(t[t.length - 2], t[t.length - 1]);
}
const { PI: Hi } = Math, Fe = Hi + 1e-4, xr = 0.5, pr = [1, 1];
function mr(t, e, n, r = (o) => o) {
  return t * r(0.5 - e * (0.5 - n));
}
const { min: Xn } = Math;
function lo(t, e, n) {
  let r = Xn(1, e / n);
  return Xn(1, t + (Xn(1, 1 - r) - t) * (r * 0.275));
}
function Ki(t) {
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
function In(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function ji(t, e) {
  return [t[0] / e, t[1] / e];
}
function uo(t) {
  return [t[1], -t[0]];
}
function Yn(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function gr(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function Ui(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function Ri(t) {
  return Math.hypot(t[0], t[1]);
}
function yr(t, e) {
  let n = t[0] - e[0], r = t[1] - e[1];
  return n * n + r * r;
}
function ho(t) {
  return ji(t, Ri(t));
}
function Gi(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function Rn(t, e, n) {
  let r = Math.sin(n), o = Math.cos(n), i = t[0] - e[0], s = t[1] - e[1], l = i * o - s * r, f = i * r + s * o;
  return [l + e[0], f + e[1]];
}
function wr(t, e, n, r) {
  let o = Math.sin(r), i = Math.cos(r), s = e[0] - n[0], l = e[1] - n[1], f = s * i - l * o, v = s * o + l * i;
  return t[0] = f + n[0], t[1] = v + n[1], t;
}
function br(t, e, n) {
  return Qt(t, se(ue(e, t), n));
}
function Vi(t, e, n, r) {
  let o = n[0] - e[0], i = n[1] - e[1];
  return t[0] = e[0] + o * r, t[1] = e[1] + i * r, t;
}
function fo(t, e, n) {
  return Qt(t, se(e, n));
}
const Mt = [0, 0], ae = [0, 0], ce = [0, 0];
function qi(t, e) {
  let n = fo(t, ho(uo(ue(t, Qt(t, [1, 1])))), -e), r = [], o = 1 / 13;
  for (let i = o; i <= 1; i += o) r.push(Rn(n, t, Fe * 2 * i));
  return r;
}
function Zi(t, e, n) {
  let r = [], o = 1 / n;
  for (let i = o; i <= 1; i += o) r.push(Rn(e, t, Fe * i));
  return r;
}
function Qi(t, e, n) {
  let r = ue(e, n), o = se(r, 0.5), i = se(r, 0.51);
  return [ue(t, o), ue(t, i), Qt(t, i), Qt(t, o)];
}
function Ji(t, e, n, r) {
  let o = [], i = fo(t, e, n), s = 1 / r;
  for (let l = s; l < 1; l += s) o.push(Rn(i, t, Fe * 3 * l));
  return o;
}
function ta(t, e, n) {
  return [Qt(t, se(e, n)), Qt(t, se(e, n * 0.99)), ue(t, se(e, n * 0.99)), ue(t, se(e, n))];
}
function kr(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function ea(t, e, n) {
  return t.slice(0, 10).reduce((r, o) => {
    let i = o.pressure;
    return e && (i = lo(r, o.distance, n)), (r + i) / 2;
  }, t[0].pressure);
}
function na(t, e = {}) {
  let { size: n = 16, smoothing: r = 0.5, thinning: o = 0.5, simulatePressure: i = !0, easing: s = (L) => L, start: l = {}, end: f = {}, last: v = !1 } = e, { cap: c = !0, easing: y = (L) => L * (2 - L) } = l, { cap: a = !0, easing: u = (L) => --L * L * L + 1 } = f;
  if (t.length === 0 || n <= 0) return [];
  let d = t[t.length - 1].runningLength, w = kr(l.taper, n, d), m = kr(f.taper, n, d), x = (n * r) ** 2, h = [], p = [], k = ea(t, i, n), $ = mr(n, o, t[t.length - 1].pressure, s), b, z = t[0].vector, S = t[0].point, M = S, X = S, I = M, g = !1;
  for (let L = 0; L < t.length; L++) {
    let { pressure: O } = t[L], { point: D, vector: T, distance: H, runningLength: R } = t[L], tt = L === t.length - 1;
    if (!tt && d - R < 3) continue;
    o ? (i && (O = lo(k, H, n)), $ = mr(n, o, O, s)) : $ = n / 2, b === void 0 && (b = $);
    let ot = R < w ? y(R / w) : 1, Q = d - R < m ? u((d - R) / m) : 1;
    $ = Math.max(0.01, $ * Math.min(ot, Q));
    let U = (tt ? t[L] : t[L + 1]).vector, et = tt ? 1 : gr(T, U), at = gr(T, z) < 0 && !g, nt = et !== null && et < 0;
    if (at || nt) {
      Yn(Mt, z), In(Mt, Mt, $);
      for (let N = 0; N <= 1; N += 0.07692307692307693) Wn(ae, D, Mt), wr(ae, ae, D, Fe * N), X = [ae[0], ae[1]], h.push(X), vr(ce, D, Mt), wr(ce, ce, D, Fe * -N), I = [ce[0], ce[1]], p.push(I);
      S = X, M = I, nt && (g = !0);
      continue;
    }
    if (g = !1, tt) {
      Yn(Mt, T), In(Mt, Mt, $), h.push(ue(D, Mt)), p.push(Qt(D, Mt));
      continue;
    }
    Vi(Mt, U, T, et), Yn(Mt, Mt), In(Mt, Mt, $), Wn(ae, D, Mt), X = [ae[0], ae[1]], (L <= 1 || yr(S, X) > x) && (h.push(X), S = X), vr(ce, D, Mt), I = [ce[0], ce[1]], (L <= 1 || yr(M, I) > x) && (p.push(I), M = I), k = O, z = T;
  }
  let Y = [t[0].point[0], t[0].point[1]], F = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : Qt(t[0].point, [1, 1]), W = [], P = [];
  if (t.length === 1) {
    if (!(w || m) || v) return qi(Y, b || $);
  } else {
    w || m && t.length === 1 || (c ? W.push(...Zi(Y, p[0], 13)) : W.push(...Qi(Y, h[0], p[0])));
    let L = uo(Ki(t[t.length - 1].vector));
    m || w && t.length === 1 ? P.push(F) : a ? P.push(...Ji(F, L, $, 29)) : P.push(...ta(F, L, $));
  }
  return h.concat(P, p.reverse(), W);
}
const Mr = [0, 0];
function Sr(t) {
  return t != null && t >= 0;
}
function ra(t, e = {}) {
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
  let l = [{ point: [s[0][0], s[0][1]], pressure: Sr(s[0][2]) ? s[0][2] : 0.25, vector: [...pr], distance: 0, runningLength: 0 }], f = !1, v = 0, c = l[0], y = s.length - 1;
  for (let u = 1; u < s.length; u++) {
    let d = o && u === y ? [s[u][0], s[u][1]] : br(c.point, s[u], i);
    if (Ui(c.point, d)) continue;
    let w = Gi(d, c.point);
    if (v += w, u < y && !f) {
      if (v < r) continue;
      f = !0;
    }
    Wn(Mr, c.point, d), c = { point: d, pressure: Sr(s[u][2]) ? s[u][2] : xr, vector: ho(Mr), distance: w, runningLength: v }, l.push(c);
  }
  return l[0].vector = ((a = l[1]) == null ? void 0 : a.vector) || [0, 0], l;
}
function oa(t, e = {}) {
  return na(ra(t, e), e);
}
var ia = oa;
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
function xo(t) {
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
function po(t, e, n) {
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
      for (let f = 0; f < 10; f++) {
        const v = Math.PI / 5 * f - Math.PI / 2, c = f % 2 === 0 ? i : s;
        l.push(`${r + c * Math.cos(v)},${o + c * Math.sin(v)}`);
      }
      return l.join(" ");
    }
    default:
      return "";
  }
}
function aa(t) {
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
function ca(t, e) {
  return e === "highlighter" ? { size: t * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: t, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 };
}
function qe(t, e) {
  return e === "highlighter" ? t * 1.25 : t / 2;
}
function mo(t, e, n) {
  return t.length < 2 ? [] : ia(t, ca(e, n));
}
function $r(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [f, v] = t[0], c = qe(e, n);
    return `M ${f - c} ${v} A ${c} ${c} 0 1 0 ${f + c} ${v} A ${c} ${c} 0 1 0 ${f - c} ${v} Z`;
  }
  const r = mo(t, e, n);
  if (r.length === 0) return "";
  if (r.length < 4)
    return r.reduce(
      (f, [v, c], y) => f + (y === 0 ? `M ${v} ${c}` : ` L ${v} ${c}`),
      ""
    ) + " Z";
  const o = r[0], i = r[1], s = r[2];
  let l = `M ${o[0]} ${o[1]} Q ${i[0]} ${i[1]} ${(i[0] + s[0]) / 2} ${(i[1] + s[1]) / 2} T `;
  for (let f = 2; f < r.length - 1; f += 1) {
    const v = r[f], c = r[f + 1];
    l += `${(v[0] + c[0]) / 2} ${(v[1] + c[1]) / 2} `;
  }
  return `${l}Z`;
}
function sa(t) {
  return t.map(([e, n], r) => `${r === 0 ? "M" : "L"} ${e} ${n}`).join(" ");
}
const Cr = /* @__PURE__ */ new WeakMap();
function On(t, e = 1) {
  if (t.type !== "draw") return { d: "", filled: !1, width: 0, opacity: 1 };
  const n = t.points ?? [], r = t.strokeWidth ?? 3, o = t.drawMode ?? "pen", i = o === "highlighter" ? 0.35 : 1;
  if (t.inkStyle === void 0 && n.length === 1)
    return { d: aa(n), filled: !1, width: r / e, opacity: i };
  const s = t.inkStyle === "raw", l = n.length > 0 && (n.length === 1 || s && n.every(([v, c]) => v === n[0][0] && c === n[0][1]));
  return {
    d: l ? $r([n[0]], r, o) : s ? sa(n) : $r(n, r, o),
    filled: l || !s,
    width: o === "highlighter" ? r * 2.5 : r,
    opacity: i
  };
}
function vo(t, e = 1) {
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
function go(t) {
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
      const f = { bold: i.bold || l.tagName === "B" || l.tagName === "STRONG", italic: i.italic || l.tagName === "I" || l.tagName === "EM", underline: i.underline || l.tagName === "U" }, v = l.tagName === "DIV" || l.tagName === "P" || l.tagName === "LI";
      v && n[n.length - 1].length > 0 && n.push([]), r(l, f), v && n.push([]);
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
      return di(t);
    } catch {
      return;
    }
}
function An(t) {
  try {
    return qr(t);
  } catch {
    return null;
  }
}
function Xe(t) {
  return t.html ? go(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const Ke = 12;
function At(t) {
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
function la(t, e) {
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
  const e = t.rotation ?? 0, n = At(t);
  if (!e) return n;
  const r = Bt(t), o = Math.cos(e), i = Math.sin(e), s = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([v, c]) => {
    const y = v - r.x, a = c - r.y;
    return [r.x + y * o - a * i, r.y + y * i + a * o];
  }), l = s.map((v) => v[0]), f = s.map((v) => v[1]);
  return { minX: Math.min(...l), minY: Math.min(...f), maxX: Math.max(...l), maxY: Math.max(...f) };
}
function Je(t, e, n) {
  const r = t.rotation ?? 0;
  if (!r) return { x: e, y: n };
  const o = Bt(t), i = Math.cos(-r), s = Math.sin(-r), l = e - o.x, f = n - o.y;
  return { x: o.x + l * i - f * s, y: o.y + l * s + f * i };
}
function qt(t, e, n, r, o, i) {
  const s = o - n, l = i - r, f = s * s + l * l, v = f === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * s + (e - r) * l) / f));
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
      const [u, d] = t.points[a - 1], [w, m] = t.points[a];
      if (qt(e, n, u, d, w, m) <= y) return !0;
    }
    return !1;
  }
  const l = Je(t, e, n), f = At(t);
  if (t.type === "frame") {
    const v = l.x >= f.minX - s && l.x <= f.maxX + s && l.y >= f.minY - s && l.y <= f.maxY + s && (l.x <= f.minX + s || l.x >= f.maxX - s || l.y <= f.minY + s || l.y >= f.maxY - s), c = l.x >= f.minX - s && l.x <= f.maxX + s && l.y >= f.minY - 28 / r && l.y <= f.minY;
    return v || c;
  }
  return l.x >= f.minX - s && l.x <= f.maxX + s && l.y >= f.minY - s && l.y <= f.maxY + s;
}
function me(t, e, n) {
  const r = At(t), o = (r.minX + r.maxX) / 2, i = (r.minY + r.maxY) / 2, s = e - o, l = n - i;
  if (s === 0 && l === 0) return { x: o, y: i, side: "e" };
  const f = (r.maxX - r.minX) / 2, v = (r.maxY - r.minY) / 2, c = f === 0 ? 1 / 0 : Math.abs(f / s), y = v === 0 ? 1 / 0 : Math.abs(v / l);
  return c <= y ? { x: o + s * c, y: i + l * c, side: s >= 0 ? "e" : "w" } : { x: o + s * y, y: i + l * y, side: l >= 0 ? "s" : "n" };
}
function yo(t, e, n, r) {
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
  const l = (i.x + s.x) / 2, f = (i.y + s.y) / 2, v = t.bend ?? 0;
  let c = { x: l, y: f };
  if (v !== 0) {
    const d = s.x - i.x, w = s.y - i.y, m = Math.hypot(d, w) || 1;
    c = { x: l + -w / m * v, y: f + d / m * v };
  }
  const y = !!(r || o), a = t.routing ?? (y ? "orthogonal" : v !== 0 ? "curved" : "straight");
  if (a !== "orthogonal") return { start: i, end: s, control: c, bend: v, routing: a };
  const u = yo(n, t, r == null ? void 0 : r.id, o == null ? void 0 : o.id);
  return {
    start: i,
    end: s,
    control: c,
    bend: v,
    routing: a,
    pathPoints: io(co(i, s, u, t.orthogonalVariant, t.orthogonalWaypoints))
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
  const o = e[0] - t[0], i = e[1] - t[1], s = t[0] - n.x, l = t[1] - n.y, f = o * o + i * i;
  if (f < 1e-12)
    return s * s + l * l <= r * r ? { start: 0, end: 1 } : null;
  const v = 2 * (s * o + l * i), c = s * s + l * l - r * r, y = v * v - 4 * f * c;
  if (y < 0) return null;
  const a = Math.sqrt(y);
  return sn(
    { start: (-v - a) / (2 * f), end: (-v + a) / (2 * f) },
    { start: 0, end: 1 }
  );
}
function da(t, e, n, r, o) {
  const i = r.x - n.x, s = r.y - n.y, l = Math.hypot(i, s);
  if (l < 1e-12) return Nn(t, e, n, o);
  const f = i / l, v = s / l, c = e[0] - t[0], y = e[1] - t[1], a = t[0] - n.x, u = t[1] - n.y, d = a * f + u * v, w = c * f + y * v, m = a * -v + u * f, x = c * -v + y * f, p = [
    sn(
      tn(d, w, 0, l),
      tn(m, x, -o, o)
    ),
    Nn(t, e, n, o),
    Nn(t, e, r, o)
  ].filter((k) => k !== null);
  return p.length === 0 ? null : {
    start: Math.min(...p.map((k) => k.start)),
    end: Math.max(...p.map((k) => k.end))
  };
}
function Xr(t, e, n) {
  return [t[0] + (e[0] - t[0]) * n, t[1] + (e[1] - t[1]) * n];
}
function Me(t, e) {
  const n = t[t.length - 1];
  (!n || Math.hypot(e[0] - n[0], e[1] - n[1]) > 1e-9) && t.push([e[0], e[1]]);
}
function ua(t, e, n) {
  let r = n[0][0], o = n[0][1], i = r, s = o;
  for (const [l, f] of n)
    r = Math.min(r, l), o = Math.min(o, f), i = Math.max(i, l), s = Math.max(s, f);
  return { ...t, id: e, points: n, x: r, y: o, w: i - r, h: s - o };
}
function ha(t, e) {
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
function fa(t, e, n, r) {
  const o = Pe(t, e, n), i = Pe(t, e, r), s = Pe(n, r, t), l = Pe(n, r, e);
  return (o > 0 && i < 0 || o < 0 && i > 0) && (s > 0 && l < 0 || s < 0 && l > 0) ? !0 : Math.abs(o) <= 1e-9 && je(n, t, e) || Math.abs(i) <= 1e-9 && je(r, t, e) || Math.abs(s) <= 1e-9 && je(t, n, r) || Math.abs(l) <= 1e-9 && je(e, n, r);
}
function Ir(t, e, n, r) {
  return fa(t, e, n, r) ? 0 : Math.min(
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
function xa(t, e, n, r, o, i, s) {
  const l = 8 / o;
  if (t.type === "arrow") {
    const d = r + (t.strokeWidth ?? 2.5) / o / 2 + l, w = jt(t, i, s), m = [];
    if (w.routing === "orthogonal" && w.pathPoints && w.pathPoints.length > 1)
      for (let x = 1; x < w.pathPoints.length; x++)
        m.push([w.pathPoints[x - 1], w.pathPoints[x]]);
    else if (w.bend === 0)
      m.push([w.start, w.end]);
    else {
      let x = w.start;
      for (let h = 1; h <= 16; h++) {
        const p = ze(h / 16, w.start, w.control, w.end);
        m.push([x, p]), x = p;
      }
    }
    return m.some(([x, h]) => Ir(e, n, x, h) <= d);
  }
  const f = Je(t, e.x, e.y), v = Je(t, n.x, n.y), c = At(t);
  if (t.type !== "frame") return Bn(f, v, c, r + l);
  const y = r + l, a = [
    { x: c.minX, y: c.minY },
    { x: c.maxX, y: c.minY },
    { x: c.maxX, y: c.maxY },
    { x: c.minX, y: c.maxY }
  ];
  for (let d = 0; d < a.length; d++)
    if (Ir(f, v, a[d], a[(d + 1) % a.length]) <= y) return !0;
  const u = { minX: c.minX, minY: c.minY - 28 / o, maxX: c.maxX, maxY: c.minY };
  return Bn(f, v, u, r);
}
function Gn(t, e, n, r, o) {
  const i = [], s = Math.max(o, 0.1), l = r / s, f = new Set(t.map((c) => c.id)), v = new Map(t.map((c) => [c.id, c]));
  for (const c of t) {
    if (c.locked) {
      i.push(c);
      continue;
    }
    if (c.type !== "draw" || !c.points) {
      if (xa(c, e, n, l, s, v, t)) continue;
      i.push(c);
      continue;
    }
    const a = (c.drawMode ?? "pen") === "highlighter" ? (c.strokeWidth ?? 3) * 2.5 : c.strokeWidth ?? 3, u = l + a / 2, d = At(c);
    if (!Bn(e, n, d, u)) {
      i.push(c);
      continue;
    }
    if (c.points.length === 0) {
      i.push(c);
      continue;
    }
    if (c.points.length === 1) {
      const [p, k] = c.points[0];
      qt(p, k, e.x, e.y, n.x, n.y) > u && i.push(c);
      continue;
    }
    const w = [];
    let m = [], x = !1;
    const h = () => {
      m.length > 1 && w.push(m), m = [];
    };
    for (let p = 1; p < c.points.length; p++) {
      const k = c.points[p - 1], $ = c.points[p], b = da(k, $, e, n, u);
      if (!b) {
        m.length === 0 && Me(m, k), Me(m, $);
        continue;
      }
      x = !0, b.start > 1e-9 && (m.length === 0 && Me(m, k), Me(m, Xr(k, $, b.start))), h(), b.end < 1 - 1e-9 && (Me(m, Xr(k, $, b.end)), Me(m, $));
    }
    if (h(), !x) {
      i.push(c);
      continue;
    }
    w.forEach((p, k) => {
      const $ = k === 0 ? c.id : ha(c.id, f);
      i.push(ua(c, $, p));
    });
  }
  return i;
}
function pa(t, e, n, r, o) {
  return Gn(t, { x: e, y: n }, { x: e, y: n }, r, o);
}
function ma(t, e, n) {
  const r = 6 / n;
  let o = null, i = null;
  const s = [], l = [t.minX, (t.minX + t.maxX) / 2, t.maxX], f = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const v of e) {
    const c = dt(v), y = [c.minX, (c.minX + c.maxX) / 2, c.maxX], a = [c.minY, (c.minY + c.maxY) / 2, c.maxY];
    for (const u of l) for (const d of y) {
      const w = d - u;
      Math.abs(w) <= r && (!o || Math.abs(w) < Math.abs(o.delta)) && (o = { delta: w, at: d });
    }
    for (const u of f) for (const d of a) {
      const w = d - u;
      Math.abs(w) <= r && (!i || Math.abs(w) < Math.abs(i.delta)) && (i = { delta: w, at: d });
    }
  }
  return o && s.push({ x1: o.at, y1: t.minY - 1e3, x2: o.at, y2: t.maxY + 1e3 }), i && s.push({ x1: t.minX - 1e3, y1: i.at, x2: t.maxX + 1e3, y2: i.at }), { dx: (o == null ? void 0 : o.delta) ?? 0, dy: (i == null ? void 0 : i.delta) ?? 0, guides: s };
}
const va = 14;
function ga({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: r,
  camera: o,
  interaction: i,
  eraserPos: s,
  guides: l,
  marquee: f,
  lasso: v,
  strokeColorOf: c
}) {
  return /* @__PURE__ */ C("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ K("g", { transform: `scale(${o.z}) translate(${-o.x}, ${-o.y})`, children: [
    t.map((y) => {
      if (y.type === "draw" && y.points) {
        const I = y.drawMode ?? "pen", g = y.strokeWidth ?? 3, Y = e.has(y.id) ? V.blue : c(y), F = vo(y, o.z);
        return /* @__PURE__ */ C(
          "path",
          {
            "data-canvas-vector-shape-id": y.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": I,
            "data-canvas-stroke-width": g,
            "data-canvas-ink-style": y.inkStyle ?? "smoothed",
            d: F.d,
            fill: F.filled ? Y : "none",
            stroke: F.filled ? "none" : Y,
            strokeWidth: F.width,
            strokeOpacity: I === "highlighter" ? 0.35 : void 0,
            fillOpacity: I === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          y.id
        );
      }
      if (y.type !== "arrow") return null;
      const a = e.has(y.id) ? V.blue : c(y), u = jt(y, n, r), d = y.strokeWidth ?? 2.5, w = d / o.z, m = Math.max(10, 8 + d * 2), x = Math.max(4, 2 + d), h = m / o.z, p = x / o.z, k = u.routing === "orthogonal" && u.pathPoints ? u.pathPoints : null, $ = k && k.length > 1;
      let b, z;
      if ($)
        b = Fn(k), z = so(k);
      else if (u.routing === "curved") {
        b = `M ${u.start.x} ${u.start.y} Q ${u.control.x} ${u.control.y} ${u.end.x} ${u.end.y}`;
        const I = ze(0.94, u.start, u.control, u.end);
        z = Math.atan2(u.end.y - I.y, u.end.x - I.x);
      } else
        b = `M ${u.start.x} ${u.start.y} L ${u.end.x} ${u.end.y}`, z = Math.atan2(u.end.y - u.start.y, u.end.x - u.start.x);
      const S = $ && k.length >= 2 ? Te(k[0], k[1]) : u.routing === "orthogonal" && u.start.side ? u.start.side === "e" ? 0 : u.start.side === "w" ? Math.PI : u.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Te(u.start, u.end), M = y.strokeStyle === "dashed" ? `${8 / o.z} ${5 / o.z}` : y.strokeStyle === "dotted" ? `${1.5 / o.z} ${4 / o.z}` : void 0, X = (I, g, Y, F) => I === "dot" ? /* @__PURE__ */ C("circle", { "data-canvas-arrow-dot-radius": x, cx: g, cy: Y, r: p, fill: a }) : I === "none" ? null : /* @__PURE__ */ C(
        "polygon",
        {
          "data-canvas-arrowhead-size": m,
          points: `${g},${Y} ${g - h * Math.cos(F - 0.4)},${Y - h * Math.sin(F - 0.4)} ${g - h * Math.cos(F + 0.4)},${Y - h * Math.sin(F + 0.4)}`,
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
      const a = me(y, i.toX, i.toY), u = i.hoverId ? n.get(i.hoverId) : null, d = u ? me(u, a.x, a.y) : { x: i.toX, y: i.toY }, w = u ? co(a, d, yo(r, { id: "__preview" }, y.id, u.id)) : [a, d];
      return /* @__PURE__ */ K("g", { children: [
        /* @__PURE__ */ C("path", { d: Fn(w), stroke: V.blue, strokeWidth: 2 / o.z, strokeDasharray: `${5 / o.z} ${4 / o.z}` }),
        u ? /* @__PURE__ */ C("rect", { x: dt(u).minX - 3 / o.z, y: dt(u).minY - 3 / o.z, width: dt(u).maxX - dt(u).minX + 6 / o.z, height: dt(u).maxY - dt(u).minY + 6 / o.z, fill: "none", stroke: V.blue, strokeWidth: 2 / o.z, rx: 6 / o.z }) : /* @__PURE__ */ C("circle", { cx: d.x, cy: d.y, r: 5 / o.z, fill: V.blue })
      ] });
    })(),
    s && /* @__PURE__ */ C("circle", { cx: s.x, cy: s.y, r: va / o.z, fill: V.roseSoft, stroke: V.rose, strokeWidth: 1 / o.z }),
    l.map((y, a) => /* @__PURE__ */ C("line", { x1: y.x1, y1: y.y1, x2: y.x2, y2: y.y2, stroke: V.pink, strokeWidth: 1 / o.z, strokeDasharray: `${4 / o.z} ${4 / o.z}` }, `guide-${a}`)),
    f && /* @__PURE__ */ C("rect", { x: Math.min(f.startX, f.curX), y: Math.min(f.startY, f.curY), width: Math.abs(f.curX - f.startX), height: Math.abs(f.curY - f.startY), fill: V.marqueeFill, stroke: V.blue, strokeWidth: 1 / o.z }),
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
const ya = 0.1, wa = 4, Vn = 14, ba = 4, en = ["note", "card", "rect", "ellipse", "text", "image", "triangle", "diamond", "hexagon", "star", "frame"], ka = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], Ma = /* @__PURE__ */ new Set([
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
]), Sa = [
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
function wo(t) {
  return Ma.has(t.trim().toLowerCase());
}
function bo(t) {
  const e = ln(t);
  return e ? wo(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function $a(t) {
  return ln(t).split(",").map((e) => e.trim()).filter(Boolean).map(bo).filter(Boolean).join(", ");
}
function ko(t) {
  return ln(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Ne(t) {
  return t.split(",").map((e) => ln(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !wo(e));
}
const Ze = Array.from(/* @__PURE__ */ new Set([
  ...Sa,
  ...Ne(Vt.sans.stack),
  ...Ne(Vt.serif.stack),
  ...Ne(Vt.mono.stack),
  ...Ne(Vt.gothic.stack),
  ...Ne(Vt.korean.stack)
]));
function Ca() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Ze;
  const t = Ze.filter((e) => {
    const n = bo(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : Ze;
}
const za = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, Xa = 24, Ia = 28, Mo = 720;
function Et(t) {
  return t.fontSize ?? za[t.type] ?? 14;
}
function It(t) {
  var e;
  if (!t.fontFamily) return Vt.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = ko(ui(t.customFontFamily ?? ""));
    } catch {
    }
    return $a(n) || Vt.sans.stack;
  }
  return ((e = Vt[t.fontFamily]) == null ? void 0 : e.stack) ?? Vt.sans.stack;
}
function Ft(t) {
  return t.textAlign ? t.textAlign : ["note", "rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function Ya(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function Na(t) {
  var e, n, r;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((r = t.html) != null && r.includes("<ol>")) return "number";
}
function Pa(t, e) {
  return {
    w: Math.min(Mo, Math.max(Xa, Math.ceil(t))),
    h: Math.max(Ia, Math.ceil(e))
  };
}
function Ea(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = an(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${Mo}px`,
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
    fontSize: `${Et(e)}px`,
    fontFamily: It(e)
  }), document.body.appendChild(n);
  const r = n.getBoundingClientRect();
  return n.remove(), Pa(r.width, r.height);
}
const La = 11;
function Ta(t, e, n, r, o) {
  const i = Math.max(1, r);
  if (e.width <= 0 || e.height <= 0 || t.trim() === "") return n;
  const s = (v) => {
    const c = o(t, e.width, v);
    return c.width <= e.width && c.height <= e.height;
  };
  if (s(n)) return n;
  if (!s(i)) return i;
  let l = i, f = n;
  for (; f - l > 0.5; ) {
    const v = (l + f) / 2;
    s(v) ? l = v : f = v;
  }
  return Math.floor(l * 10) / 10;
}
const Fa = 200, Ue = /* @__PURE__ */ new Map();
function Da(t, e, n, r) {
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
function Wa(t) {
  const e = Et(t);
  if (t.type !== "note") return e;
  const n = Math.max(0, t.w - 24), r = Math.max(0, t.h - 24), o = `${t.fontFamily ?? "sans"}|${t.customFontFamily ?? ""}|${t.textAlign ?? ""}|${t.html ?? ""}|${t.text ?? ""}|${t.w}x${t.h}|${e}`, i = Ue.get(o);
  if (i !== void 0) return i;
  const s = It(t), l = t.html ? t.html : Gt(t.text ?? "").replace(/\n/g, "<br>"), f = Ta(
    l,
    { width: n, height: r },
    e,
    La,
    (v, c, y) => Da(v, s, c, y)
  );
  return Ue.size >= Fa && Ue.clear(), Ue.set(o, f), f;
}
const Oa = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]);
function _a({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: r,
  shapeById: o,
  allShapes: i,
  peerCursors: s,
  hoveredShapeId: l,
  dotsEnabled: f,
  isDarkMode: v,
  renderEditor: c,
  renderShapeBody: y,
  setEditingId: a,
  onBendHandleDown: u,
  onOrthogonalSegmentHandleDown: d,
  onResizeHandleDown: w,
  onRotateHandleDown: m,
  onConnectHandleDown: x,
  onArrowEndpointDown: h
}) {
  return /* @__PURE__ */ K(_t, { children: [
    t.map((p, k) => {
      const $ = { zIndex: k + 1, transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` };
      if (p.type === "draw") return null;
      if (p.type === "arrow") {
        const S = jt(p, o, i), M = S.routing === "orthogonal" && S.pathPoints ? Un(S.pathPoints) : S.routing === "curved" ? ze(0.5, S.start, S.control, S.end) : { x: (S.start.x + S.end.x) / 2, y: (S.start.y + S.end.y) / 2 }, X = n === p.id, I = cn(p), g = e.has(p.id), Y = Xe(p).trim(), F = I || (g ? "관계 입력" : "");
        return !F && !X ? null : /* @__PURE__ */ C("div", { "data-canvas-paint-id": p.id, className: "absolute top-0 left-0 origin-top-left", style: $, children: /* @__PURE__ */ C("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: M.x - 90, top: M.y - 18, width: 180, height: 36 }, onDoubleClick: (W) => {
          W.stopPropagation(), a(p.id);
        }, children: (F || X) && /* @__PURE__ */ C(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": Y ? `관계 설명: ${Y}` : "관계 설명 입력",
            title: X ? void 0 : Y ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${v ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: Et(p),
              fontFamily: It(p),
              maxWidth: "100%",
              minWidth: X ? 120 / r.z : void 0,
              minHeight: X ? 28 / r.z : void 0,
              color: p.textColor
            },
            children: X ? c("text-center whitespace-nowrap") : /* @__PURE__ */ C("span", { dangerouslySetInnerHTML: { __html: F } }, "canvas-view")
          }
        ) }) }, p.id);
      }
      const b = e.has(p.id), z = At(p);
      return /* @__PURE__ */ C("div", { "data-canvas-paint-id": p.id, className: "absolute top-0 left-0 origin-top-left", style: $, children: /* @__PURE__ */ C(
        "div",
        {
          "data-canvas-locked": p.locked ? "true" : void 0,
          "data-canvas-shape-id": p.id,
          "data-canvas-shape-type": p.type,
          "data-canvas-selected": b ? "true" : void 0,
          "data-canvas-text-align": Ft(p),
          "data-canvas-text-color": p.textColor,
          "data-canvas-font-size": Et(p),
          "data-canvas-font-family": p.fontFamily === "custom" ? p.customFontFamily ?? "custom" : p.fontFamily ?? "sans",
          "data-canvas-manual-size": p.manualSize ? "true" : void 0,
          "data-canvas-group-id": p.groupId,
          "data-canvas-list-kind": Na(p),
          onDoubleClick: (S) => {
            S.stopPropagation(), !p.locked && Oa.has(p.type) && a(p.id);
          },
          "data-canvas-x": p.x,
          "data-canvas-y": p.y,
          "data-canvas-width": p.w,
          "data-canvas-height": p.h,
          className: "absolute",
          style: { left: z.minX, top: z.minY, width: z.maxX - z.minX, height: z.maxY - z.minY, transform: p.rotation ? `rotate(${p.rotation}rad)` : void 0, transformOrigin: "center" },
          children: y(p)
        }
      ) }, p.id);
    }),
    e.size === 1 && t.filter((p) => p.type !== "draw" && p.type !== "arrow" && !p.locked && e.has(p.id)).map((p) => {
      const k = At(p);
      return /* @__PURE__ */ C("div", { "data-canvas-selection-id": p.id, className: "absolute top-0 left-0 origin-top-left pointer-events-none", style: { zIndex: t.length + 3, transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` }, children: /* @__PURE__ */ K("div", { className: "absolute", style: { left: k.minX, top: k.minY, width: k.maxX - k.minX, height: k.maxY - k.minY, transform: p.rotation ? `rotate(${p.rotation}rad)` : void 0, transformOrigin: "center" }, children: [
        /* @__PURE__ */ C("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / r.z}px solid ${V.blue}` } }),
        /* @__PURE__ */ K(_t, { children: [
          ["nw", "ne", "sw", "se"].map(($) => /* @__PURE__ */ C("div", { "data-canvas-resize-handle": $, onPointerDown: (b) => w(b, p, $), className: "absolute pointer-events-auto z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / r.z, height: 10 / r.z, cursor: `${$}-resize`, left: $.includes("w") ? -5 / r.z : void 0, right: $.includes("e") ? -5 / r.z : void 0, top: $.includes("n") ? -5 / r.z : void 0, bottom: $.includes("s") ? -5 / r.z : void 0 } }, $)),
          /* @__PURE__ */ C("div", { onPointerDown: ($) => m($, p), title: "회전 (Shift로 15도 단위)", className: "absolute pointer-events-auto z-20 bg-blue-600 rounded-full", style: { width: 12 / r.z, height: 12 / r.z, left: "50%", marginLeft: -6 / r.z, top: -28 / r.z, cursor: "grab" } })
        ] })
      ] }) }, `selection-${p.id}`);
    }),
    e.size > 1 && (() => {
      const p = i.filter(($) => e.has($.id));
      if (p.length === 0) return null;
      const k = p.reduce(($, b) => {
        const z = dt(b);
        return {
          minX: Math.min($.minX, z.minX),
          minY: Math.min($.minY, z.minY),
          maxX: Math.max($.maxX, z.maxX),
          maxY: Math.max($.maxY, z.maxY)
        };
      }, dt(p[0]));
      return /* @__PURE__ */ C("div", { "data-canvas-selection-group": "true", className: "absolute top-0 left-0 origin-top-left pointer-events-none", style: { zIndex: t.length + 3, transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` }, children: /* @__PURE__ */ C("div", { className: "absolute", style: { left: k.minX, top: k.minY, width: k.maxX - k.minX, height: k.maxY - k.minY, outline: `${2 / r.z}px solid ${V.blue}` } }) });
    })(),
    f !== !1 && t.filter((p) => en.includes(p.type) && (e.has(p.id) || p.id === l || p.locked)).map((p) => {
      const k = At(p), $ = k.maxX - k.minX, b = k.maxY - k.minY, z = Math.min(40 / r.z, Math.max(16 / r.z, Math.min($, b) * 0.6)), S = 10 / r.z;
      return /* @__PURE__ */ C("div", { className: "absolute top-0 left-0 origin-top-left pointer-events-none", style: { zIndex: t.length + 3, transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` }, children: /* @__PURE__ */ C("div", { className: "absolute", style: { left: k.minX, top: k.minY, width: $, height: b, transform: p.rotation ? `rotate(${p.rotation}rad)` : void 0, transformOrigin: "center" }, children: ["n", "s", "w", "e"].map((M) => {
        const X = M === "n" ? { left: "50%", top: -z / 2, marginLeft: -z / 2 } : M === "s" ? { left: "50%", bottom: -z / 2, marginLeft: -z / 2 } : M === "w" ? { top: "50%", left: -z / 2, marginTop: -z / 2 } : { top: "50%", right: -z / 2, marginTop: -z / 2 };
        return /* @__PURE__ */ C(
          "div",
          {
            "data-canvas-connect-dot": M,
            onPointerDown: (I) => x(I, p),
            title: "드래그해서 연결 (관계 생성)",
            className: "absolute pointer-events-auto z-20 flex items-center justify-center",
            style: { ...X, width: z, height: z, cursor: "crosshair" },
            children: /* @__PURE__ */ C("div", { className: "rounded-full bg-blue-600 border-2 border-white shadow-sm", style: { width: S, height: S } })
          },
          `dot-${M}`
        );
      }) }) }, `connect-${p.id}`);
    }),
    e.size === 1 && i.filter((p) => p.type === "arrow" && !p.locked && e.has(p.id)).map((p) => {
      const k = jt(p, o, i), $ = (b, z) => ({
        left: (b.x - r.x) * r.z - z / 2,
        top: (b.y - r.y) * r.z - z / 2
      });
      return /* @__PURE__ */ K(lt.Fragment, { children: [
        k.routing === "orthogonal" && k.pathPoints && k.pathPoints.length > 2 ? k.pathPoints.slice(0, -1).map((b, z) => {
          var X;
          const S = (X = k.pathPoints) == null ? void 0 : X[z + 1];
          if (!S) return null;
          const M = { x: (b.x + S.x) / 2, y: (b.y + S.y) / 2 };
          return /* @__PURE__ */ C("div", { "data-canvas-arrow-segment-handle": z, onPointerDown: (I) => d(I, p, z), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { zIndex: t.length + 3, width: 12, height: 12, ...$(M, 12), cursor: b.x === S.x ? "ew-resize" : "ns-resize" } }, `segment-${z}`);
        }) : k.routing === "curved" && /* @__PURE__ */ C("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (b) => u(b, p), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { zIndex: t.length + 3, width: 10, height: 10, left: (k.start.x + k.end.x) / 2 * r.z - r.x * r.z - 5, top: (k.start.y + k.end.y) / 2 * r.z - r.y * r.z - 10, cursor: "grab" } }),
        ["start", "end"].map((b) => {
          const z = b === "start" ? k.start : k.end;
          return /* @__PURE__ */ C("div", { "data-canvas-arrow-endpoint": b, onPointerDown: (S) => h(S, p, b), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { zIndex: t.length + 3, width: 12, height: 12, ...$(z, 12), cursor: "grab" } }, b);
        })
      ] }, `arrow-handles-${p.id}`);
    }),
    i.filter((p) => p.locked).map((p) => {
      const k = At(p);
      return /* @__PURE__ */ C("div", { "data-canvas-lock-badge": p.id, title: "잠김", "aria-label": "잠긴 개체", className: "absolute pointer-events-none z-40", style: { zIndex: t.length + 4, left: (k.maxX - r.x) * r.z - 18, top: (k.minY - r.y) * r.z + 2 }, children: /* @__PURE__ */ K("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: v ? "#cbd5e1" : "#475569", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
        /* @__PURE__ */ C("rect", { x: "5", y: "11", width: "14", height: "9", rx: "2", fill: v ? "#1e293b" : "#fff" }),
        /* @__PURE__ */ C("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
      ] }) }, `lock-badge-${p.id}`);
    }),
    s == null ? void 0 : s.map((p) => /* @__PURE__ */ K("div", { className: "absolute pointer-events-none z-40", style: { zIndex: t.length + 4, left: (p.x - r.x) * r.z, top: (p.y - r.y) * r.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ C("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ C("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: p.color, stroke: V.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ C("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: p.color }, children: p.name })
    ] }, p.id))
  ] });
}
function Aa(t, e, n, r, o) {
  var z;
  const i = it(null), [s, l] = st({ width: 380, height: 260 });
  re(() => {
    const S = i.current;
    if (!S) return;
    const M = () => {
      const I = Math.max(1, Math.ceil(S.getBoundingClientRect().width)), g = Math.max(1, Math.ceil(S.getBoundingClientRect().height));
      l((Y) => Y.width === I && Y.height === g ? Y : { width: I, height: g });
    };
    if (M(), typeof ResizeObserver > "u") return;
    const X = new ResizeObserver(M);
    return X.observe(S), () => X.disconnect();
  }, [t, n, e]);
  const f = s.width, v = s.height, c = e.reduce((S, M) => {
    const X = dt(M);
    return {
      minX: Math.min(S.minX, X.minX),
      minY: Math.min(S.minY, X.minY),
      maxX: Math.max(S.maxX, X.maxX),
      maxY: Math.max(S.maxY, X.maxY)
    };
  }, dt(t)), y = (c.minX - r.x) * r.z, a = (c.minY - r.y) * r.z, u = (c.maxX - r.x) * r.z, d = (c.maxY - r.y) * r.z, w = Math.max(8, o.width - f - 8), m = Math.max(8, o.height - v - 8), x = (S, M) => ({ left: Math.min(Math.max(8, S), w), top: Math.min(Math.max(8, M), m) }), h = [
    x((y + u) / 2 - f / 2, a - v - 12),
    x((y + u) / 2 - f / 2, d + 12),
    x((o.width - f) / 2, 12),
    x(y - f - 12, a + (d - a - v) / 2),
    x(u + 12, a + (d - a - v) / 2)
  ], p = n.map((S) => {
    const M = dt(S);
    return { left: (M.minX - r.x) * r.z, top: (M.minY - r.y) * r.z, right: (M.maxX - r.x) * r.z, bottom: (M.maxY - r.y) * r.z };
  });
  if (t.type === "arrow") {
    const S = jt(t, new Map(n.map((g) => [g.id, g])), n), M = S.routing === "orthogonal" && S.pathPoints ? Un(S.pathPoints) : { x: (S.start.x + S.end.x) / 2, y: (S.start.y + S.end.y) / 2 }, X = 180 * r.z, I = 36 * r.z;
    p.push({
      left: (M.x - r.x) * r.z - X / 2,
      top: (M.y - r.y) * r.z - I / 2,
      right: (M.x - r.x) * r.z + X / 2,
      bottom: (M.y - r.y) * r.z + I / 2
    });
  }
  const k = h[0], $ = (S, M) => {
    const X = Math.max(0, Math.min(S.left + f, M.right) - Math.max(S.left, M.left)), I = Math.max(0, Math.min(S.top + v, M.bottom) - Math.max(S.top, M.top));
    return X * I;
  }, b = ((z = h.map((S) => ({
    candidate: S,
    overlap: p.reduce((M, X) => M + $(S, X), 0),
    distance: Math.hypot(S.left - k.left, S.top - k.top)
  })).sort((S, M) => S.overlap - M.overlap || S.distance - M.distance)[0]) == null ? void 0 : z.candidate) ?? k;
  return { inspectorRef: i, position: b };
}
function qn(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function Ba(t) {
  const e = t.type === "image" ? [] : ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), qn(t) && e.push("diagram"), e;
}
function Vc(t) {
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
const Ha = "#3b82f6";
function pe(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function Qe(t) {
  return Math.round(pe(t, 0, 255)).toString(16).padStart(2, "0");
}
function Ka(t) {
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
    const l = r.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(Ka);
    if (l.length === 3) return `#${l.map(Qe).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? Ha;
}
function Yr(t) {
  const e = Le(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, r = Number.parseInt(e.slice(2, 4), 16) / 255, o = Number.parseInt(e.slice(4, 6), 16) / 255, i = Math.max(n, r, o), s = Math.min(n, r, o), l = i - s;
  let f = 0;
  return l !== 0 && (i === n ? f = 60 * ((r - o) / l % 6) : i === r ? f = 60 * ((o - n) / l + 2) : f = 60 * ((n - r) / l + 4)), f < 0 && (f += 360), { hue: f, saturation: i === 0 ? 0 : l / i, value: i };
}
function Nr({ hue: t, saturation: e, value: n }) {
  const r = (t % 360 + 360) % 360, o = n * e, i = o * (1 - Math.abs(r / 60 % 2 - 1)), s = n - o;
  let l = 0, f = 0, v = 0;
  return r < 60 ? [l, f, v] = [o, i, 0] : r < 120 ? [l, f, v] = [i, o, 0] : r < 180 ? [l, f, v] = [0, o, i] : r < 240 ? [l, f, v] = [0, i, o] : r < 300 ? [l, f, v] = [i, 0, o] : [l, f, v] = [o, 0, i], `#${Qe((l + s) * 255)}${Qe((f + s) * 255)}${Qe((v + s) * 255)}`;
}
function ja(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function Ua({ value: t, onChange: e }) {
  const [n, r] = st(() => Yr(t)), o = it(null), i = it(null), s = it(null);
  St(() => {
    const h = Yr(t);
    r((p) => ja(p, h) ? p : h);
  }, [t]);
  const l = (h) => {
    r(h), e(Nr(h));
  }, f = (h) => {
    var z;
    const p = (z = o.current) == null ? void 0 : z.getBoundingClientRect();
    if (!p) return;
    const k = h.clientX - (p.left + p.width / 2), $ = h.clientY - (p.top + p.height / 2), b = Math.atan2($, k) * 180 / Math.PI + 90;
    l({ ...n, hue: (b + 360) % 360 });
  }, v = (h) => {
    var k;
    const p = (k = i.current) == null ? void 0 : k.getBoundingClientRect();
    p && l({
      ...n,
      saturation: pe((h.clientX - p.left) / p.width, 0, 1),
      value: pe(1 - (h.clientY - p.top) / p.height, 0, 1)
    });
  }, c = (h, p) => {
    var k, $;
    p.button !== 0 && p.pointerType !== "touch" || (p.preventDefault(), p.stopPropagation(), s.current = h, ($ = (k = p.currentTarget).setPointerCapture) == null || $.call(k, p.pointerId), h === "hue" ? f(p) : v(p));
  }, y = (h) => {
    s.current && (h.preventDefault(), s.current === "hue" ? f(h) : v(h));
  }, a = (h) => {
    var p, k;
    s.current = null;
    try {
      (k = (p = h.currentTarget).releasePointerCapture) == null || k.call(p, h.pointerId);
    } catch {
      return;
    }
  }, u = (n.hue - 90) * Math.PI / 180, d = 53, w = {
    left: 66 + Math.cos(u) * d,
    top: 66 + Math.sin(u) * d
  }, m = Nr({ hue: n.hue, saturation: 1, value: 1 }), x = (h) => l({ ...n, hue: (n.hue + h + 360) % 360 });
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
        onPointerDown: (h) => c("hue", h),
        onPointerMove: y,
        onPointerUp: a,
        onKeyDown: (h) => {
          (h.key === "ArrowLeft" || h.key === "ArrowDown") && (h.preventDefault(), x(-1)), (h.key === "ArrowRight" || h.key === "ArrowUp") && (h.preventDefault(), x(1));
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
        style: { backgroundColor: m },
        onPointerDown: (h) => c("sv", h),
        onPointerMove: y,
        onPointerUp: a,
        onKeyDown: (h) => {
          const p = h.shiftKey ? 0.1 : 0.02;
          h.key === "ArrowLeft" && (h.preventDefault(), l({ ...n, saturation: pe(n.saturation - p, 0, 1) })), h.key === "ArrowRight" && (h.preventDefault(), l({ ...n, saturation: pe(n.saturation + p, 0, 1) })), h.key === "ArrowDown" && (h.preventDefault(), l({ ...n, value: pe(n.value - p, 0, 1) })), h.key === "ArrowUp" && (h.preventDefault(), l({ ...n, value: pe(n.value + p, 0, 1) }));
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
function Ra({ s: t, isDarkMode: e, editing: n, installedFontFamilies: r, patchSelected: o, applyFormat: i, applyList: s, applyCustomFontFamily: l }) {
  const f = Et(t), v = e ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100";
  return /* @__PURE__ */ K(_t, { children: [
    "      ",
    /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
      /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
      /* @__PURE__ */ K("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: le(t), color: V.white, mixBlendMode: "normal" }, children: [
        /* @__PURE__ */ C("span", { "aria-hidden": "true", children: "A" }),
        /* @__PURE__ */ C("input", { "data-canvas-control": "text-color", type: "color", "aria-label": "글씨 색", value: t.textColor ?? le(t), onChange: (c) => o({ textColor: c.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
      ] }),
      /* @__PURE__ */ K("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${e ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
        /* @__PURE__ */ C("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
        /* @__PURE__ */ C("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => o({ fontSize: Math.max(8, f - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ C(yi, { className: "w-3.5 h-3.5" }) }),
        /* @__PURE__ */ C("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: f }),
        /* @__PURE__ */ C("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => o({ fontSize: Math.min(96, f + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ C(wi, { className: "w-3.5 h-3.5" }) })
      ] }),
      /* @__PURE__ */ K("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${e ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
        /* @__PURE__ */ C("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (c) => {
          const y = Ya(c.target.value);
          o(y === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: y, customFontFamily: void 0 });
        }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${e ? "text-slate-200" : "text-slate-700"}`, children: ka.map((c) => /* @__PURE__ */ C("option", { value: c, className: e ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: Vt[c].label }, c)) }),
        /* @__PURE__ */ C(bi, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
      ] }),
      t.fontFamily === "custom" && /* @__PURE__ */ K(_t, { children: [
        /* @__PURE__ */ C("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (c) => l(c.target.value), onChange: (c) => c.currentTarget.value && l(c.currentTarget.value), onKeyDown: (c) => {
          c.key === "Enter" && (c.preventDefault(), l(c.currentTarget.value));
        }, onDoubleClick: (c) => c.stopPropagation(), onPointerDown: (c) => c.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${e ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
        /* @__PURE__ */ C("datalist", { id: `canvas-font-families-${t.id}`, children: r.map((c) => /* @__PURE__ */ C("option", { value: c }, c)) })
      ] })
    ] }),
    /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${e ? "border-slate-700" : "border-slate-100"}`, children: [
      /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
      /* @__PURE__ */ C("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${e ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", Zr, "왼쪽 정렬"], ["center", Qr, "가운데 정렬"], ["right", Jr, "오른쪽 정렬"]].map(([c, y, a]) => /* @__PURE__ */ C("button", { type: "button", "aria-label": a, title: a, onClick: () => o({ textAlign: c }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${Ft(t) === c ? "bg-blue-600 text-white shadow-sm" : v}`, children: /* @__PURE__ */ C(y, { className: "w-4 h-4" }) }, c)) }),
      n && /* @__PURE__ */ K(_t, { children: [
        /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
        /* @__PURE__ */ C("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${e ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", ki, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", Mi, "번호 목록"]].map(([c, y, a]) => /* @__PURE__ */ C("button", { type: "button", onClick: () => s(c), "aria-label": a, title: a, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: y ? /* @__PURE__ */ C(y, { className: "w-4 h-4" }) : /* @__PURE__ */ C("span", { className: "text-base leading-none", children: "–" }) }, c)) }),
        /* @__PURE__ */ C("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${e ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: Si, label: "굵게" }, { cmd: "italic", Icon: $i, label: "기울임" }, { cmd: "underline", Icon: Ci, label: "밑줄" }].map(({ cmd: c, Icon: y, label: a }) => /* @__PURE__ */ C("button", { type: "button", onClick: () => i(c), "aria-label": a, title: a, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ C(y, { className: "w-4 h-4" }) }, c)) })
      ] })
    ] })
  ] });
}
const Ga = [2, 4, 6, 8], Pr = Math.PI / 12;
function Va(t) {
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
      return So(t);
  }
}
function Er(t) {
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
      return So(t);
  }
}
function So(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Pn(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Lr(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function qa({
  shape: t,
  selection: e,
  selectionActions: n,
  shapes: r,
  camera: o,
  canvasSize: i,
  isDarkMode: s,
  editing: l,
  showPalette: f,
  installedFontFamilies: v,
  setShowPalette: c,
  setActiveColor: y,
  patchSelected: a,
  applyFormat: u,
  applyList: d,
  applyCustomFontFamily: w,
  onClose: m
}) {
  var N;
  const x = s ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", h = e.length > 1, p = e.some((E) => !!E.groupId), k = t.type === "draw", $ = k || Lr(t) && !Pn(t) ? "stroke" : Pn(t) ? "fill" : "text", [b, z] = st($), [S, M] = st("");
  re(() => z($), [$, t.id]);
  const X = b === "text" ? le(t) : b === "stroke" ? t.strokeColor ?? (t.color ? ft[t.color].border : V.ink) : Ce(t);
  re(() => M(Le(X).toUpperCase()), [X]);
  const I = Le(X), g = (E) => {
    a(k || b === "stroke" ? { strokeColor: E } : b === "text" ? { textColor: E } : { fillColor: E });
  }, Y = (E) => {
    y(E), a(k || b === "stroke" ? { color: E, strokeColor: void 0 } : b === "text" ? { textColor: ft[E].text } : { color: E, fillColor: void 0 }), c(!1);
  }, { inspectorRef: F, position: W } = Aa(t, e, r, o, i), P = e.every(Va), O = new Set(e.map(Er)).size === 1 ? Er(t) : void 0, D = Ba(t), T = t.type === "image" ? "arrange" : t.type === "arrow" ? "arrow" : D[0] ?? "color", [H, R] = st(T);
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
    h ? /* @__PURE__ */ K("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      /* @__PURE__ */ K("span", { className: "flex-1", children: [
        e.length,
        "개 선택됨"
      ] }),
      m && /* @__PURE__ */ C("button", { type: "button", title: "설정 닫기", "aria-label": "설정 닫기", onClick: m, className: `w-10 h-10 rounded-lg flex items-center justify-center ${x}`, children: "×" })
    ] }) : /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ C("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto flex-1", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: D.map((E) => /* @__PURE__ */ C("button", { type: "button", role: "tab", "aria-selected": H === E, onClick: () => R(E), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${H === E ? "bg-blue-600 text-white" : x}`, children: nt[E] }, E)) }),
      m && /* @__PURE__ */ C("button", { type: "button", title: "설정 닫기", "aria-label": "설정 닫기", onClick: m, className: `w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${x}`, children: "×" })
    ] }),
    /* @__PURE__ */ K("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: h || H === "color" ? void 0 : "none" }, children: [
      /* @__PURE__ */ C("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: k ? "그리기" : "색상" }),
      /* @__PURE__ */ C("button", { type: "button", title: k ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": k ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => c((E) => !E), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${s ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ C("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ C("span", { className: "canvas-color-wheel-trigger-dot", style: { background: I } }) }) }),
      f && /* @__PURE__ */ K("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${s ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !k && /* @__PURE__ */ K("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          Pn(t) && /* @__PURE__ */ C("button", { type: "button", role: "tab", "aria-selected": b === "fill", onClick: () => z("fill"), className: b === "fill" ? "is-active" : "", children: "배경" }),
          Lr(t) && /* @__PURE__ */ C("button", { type: "button", role: "tab", "aria-selected": b === "stroke", onClick: () => z("stroke"), className: b === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ C("button", { type: "button", role: "tab", "aria-selected": b === "text", onClick: () => z("text"), className: b === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ C("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: jn.map((E) => /* @__PURE__ */ C("button", { type: "button", title: ft[E].label, "aria-label": `색 ${ft[E].label}`, onClick: () => Y(E), className: "canvas-color-preset", style: { background: ft[E].bg, borderColor: ft[E].border, outline: t.color === E && !t.fillColor && !t.strokeColor ? `2px solid ${V.blue}` : void 0, outlineOffset: 1 } }, E)) }),
        /* @__PURE__ */ C(Ua, { value: X, onChange: g }),
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
    !h && H !== "color" && !k && /* @__PURE__ */ K(_t, { children: [
      H === "text" && /* @__PURE__ */ C(Ra, { s: t, isDarkMode: s, editing: l, installedFontFamilies: v, patchSelected: a, applyFormat: u, applyList: d, applyCustomFontFamily: w }),
      (H === "arrange" && t.type === "card" || H === "arrow" && t.type === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${s ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ K(_t, { children: [
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
    (h || H === "arrange") && /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", children: [
      at(Yi, "맨 앞으로", () => n.reorderSelected("front"), !0),
      at(no, "앞으로", () => n.reorderSelected("forward"), !0),
      at(ro, "뒤로", () => n.reorderSelected("backward"), !0),
      at(Ni, "맨 뒤로", () => n.reorderSelected("back"), !0)
    ] }),
    P && (h || H === "color" || H === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${s ? "border-slate-700" : "border-slate-100"}`, children: [
      et("굵기"),
      Ga.map((E) => /* @__PURE__ */ C(lt.Fragment, { children: U(String(E), O === E, () => a({ strokeWidth: E }), `굵기 ${E}`) }, E))
    ] }),
    /* @__PURE__ */ K("div", { className: `canvas-selection-actions flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${s ? "border-slate-700" : "border-slate-100"}`, children: [
      et("선택", "canvas-selection-label"),
      /* @__PURE__ */ K("div", { className: "canvas-selection-action-buttons flex flex-wrap items-center gap-1 pointer-events-auto", children: [
        at(to, "그룹 (Ctrl+G)", n.group, h),
        at(zi, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, p),
        at(Xi, "복사 (Ctrl+C)", n.copySelected, !0),
        at(Pi, "붙여넣기 (Ctrl+V)", () => {
          n.pasteClipboard();
        }, !0),
        at(Tn, "복제", n.duplicateSelected, !0),
        at(eo, "잠금/잠금 해제 (⇧⌘L)", n.toggleLocked, !0),
        at(Ei, "왼쪽으로 15도 회전", () => n.rotateSelected(-Pr), !0),
        at(Li, "오른쪽으로 15도 회전", () => n.rotateSelected(Pr), !0),
        at(Ti, "회전 초기화", () => n.rotateSelected(0), !0),
        at(Ii, "삭제 (Delete)", n.deleteSelected, !0, !0)
      ] })
    ] })
  ] });
}
const Tr = 12, he = 8;
function Za(t, e, n) {
  const r = (t.minX + t.maxX) / 2, o = t.minY - Tr - n.height, i = o >= he ? "above" : "below", s = i === "above" ? o : t.maxY + Tr, l = Math.max(he, e.width - n.width - he), f = Math.max(he, e.height - n.height - he);
  return {
    placement: i,
    left: Math.min(Math.max(he, r - n.width / 2), l),
    top: Math.min(Math.max(he, s), f)
  };
}
const Qa = [2, 4, 6, 8], Ja = {
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
function tc(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Fr(t) {
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
      return tc(t);
  }
}
function ec({
  selection: t,
  selectionActions: e,
  camera: n,
  canvasSize: r,
  isDarkMode: o,
  setActiveColor: i,
  patchSelected: s,
  onOpenInspector: l
}) {
  const f = it(null), [v, c] = st({ width: 320, height: 44 });
  re(() => {
    const T = f.current;
    if (!T) return;
    const H = () => {
      const tt = T.getBoundingClientRect(), ot = Math.max(1, Math.ceil(tt.width)), Q = Math.max(1, Math.ceil(tt.height));
      c((U) => U.width === ot && U.height === Q ? U : { width: ot, height: Q });
    };
    if (H(), typeof ResizeObserver > "u") return;
    const R = new ResizeObserver(H);
    return R.observe(T), () => R.disconnect();
  }, [t]);
  const y = t.every((T) => !!T.locked), a = t.every((T) => T.type === "draw"), u = t.length === 1 ? t[0] : null, d = t.length > 1, w = u !== null && Ja[u.type] === !0, m = t.every(Fr), x = t.reduce(
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
  ), h = {
    minX: (x.minX - n.x) * n.z,
    minY: (x.minY - n.y) * n.z,
    maxX: (x.maxX - n.x) * n.z,
    maxY: (x.maxY - n.y) * n.z
  }, p = Za(h, r, v), [k, $] = st(!1);
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
  }, X = a ? De(t[0]) : Ce(t[0]), I = u ? Et(u) : 14, g = (u == null ? void 0 : u.type) === "arrow" ? u : null, Y = g ? g.arrowStart ?? "none" : "none", F = g ? g.arrowEnd ?? "arrow" : "arrow", W = (g == null ? void 0 : g.routing) ?? "straight", P = new Set(t.filter(Fr).map((T) => T.strokeWidth)), L = P.size === 1 ? [...P][0] : void 0, O = /* @__PURE__ */ K("div", { className: "relative", children: [
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
        style: { top: p.placement === "above" ? "100%" : void 0, bottom: p.placement === "below" ? "100%" : void 0 },
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
  ] }), D = m && /* @__PURE__ */ C(_t, { children: Qa.map((T) => S(
    String(T),
    `굵기 ${T}`,
    () => s({ strokeWidth: T }),
    L === T,
    y
  )) });
  return /* @__PURE__ */ C(
    "div",
    {
      ref: f,
      "data-canvas-floating-bar": !0,
      role: "toolbar",
      "aria-label": "선택 개체 도구",
      className: `absolute z-40 pointer-events-auto flex items-center gap-1 px-1 rounded-xl border shadow-xl backdrop-blur-sm ${o ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`,
      style: { left: p.left, top: p.top },
      onPointerDown: (T) => {
        T.stopPropagation();
        const H = T.target instanceof Element ? T.target : null;
        H != null && H.closest("input, select, textarea") || T.preventDefault();
      },
      onClick: (T) => T.stopPropagation(),
      children: y ? /* @__PURE__ */ K(_t, { children: [
        z("잠금 해제", e.toggleLocked, dr),
        O,
        z("복제", () => {
        }, Tn, { disabled: !0 }),
        z("자세한 설정", () => {
        }, ur, { disabled: !0 })
      ] }) : /* @__PURE__ */ K(_t, { children: [
        O,
        w && /* @__PURE__ */ K(_t, { children: [
          S("−", "글씨 작게", () => s({ fontSize: Math.max(8, I - 2) })),
          /* @__PURE__ */ C("span", { className: "w-8 text-center text-xs font-semibold tabular-nums", children: I }),
          S("＋", "글씨 크게", () => s({ fontSize: Math.min(96, I + 2) })),
          [
            ["left", Zr, "왼쪽 정렬"],
            ["center", Qr, "가운데 정렬"],
            ["right", Jr, "오른쪽 정렬"]
          ].map(([T, H, R]) => /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              title: R,
              "aria-label": R,
              onClick: () => s({ textAlign: T }),
              className: `w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${Ft(u) === T ? "bg-blue-600 text-white" : b}`,
              children: /* @__PURE__ */ C(H, { className: "w-4 h-4" })
            },
            T
          ))
        ] }),
        g && /* @__PURE__ */ K(_t, { children: [
          S("직선", "직선", () => s({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), W === "straight"),
          S("곡선", "곡선", () => s({ routing: "curved", bend: g.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), W === "curved"),
          S("꺾임", "꺾임", () => s({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), W === "orthogonal"),
          S(
            Y === "none" ? "○" : Y === "dot" ? "●" : "◀",
            "시작점 표식",
            () => s({ arrowStart: Y === "none" ? "arrow" : Y === "arrow" ? "dot" : "none" }),
            Y !== "none"
          ),
          S(
            F === "none" ? "○" : F === "dot" ? "●" : "▶",
            "끝점 표식",
            () => s({ arrowEnd: F === "arrow" ? "dot" : F === "dot" ? "none" : "arrow" }),
            F !== "none"
          )
        ] }),
        D,
        z(y ? "잠금 해제" : "잠금", e.toggleLocked, y ? dr : eo),
        z("복제", e.duplicateSelected, Tn),
        z("앞으로", () => e.reorderSelected("forward"), no),
        z("뒤로", () => e.reorderSelected("backward"), ro),
        d && z("그룹", e.group, to),
        z("자세한 설정", l, ur)
      ] })
    }
  );
}
const nc = [2, 4, 6, 8];
function rc({
  tool: t,
  activeColor: e,
  drawStrokeWidth: n,
  drawInkStyle: r,
  objectSnapEnabled: o,
  onSelectInkStyle: i,
  onSelectObjectSnap: s,
  isDarkMode: l,
  onSelectColor: f,
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
          const w = ft[d], m = e === d;
          return /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": m,
              title: `${w.label} 선택`,
              "aria-label": w.label,
              onClick: () => f(d),
              className: `group relative w-6 h-6 rounded-full transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${m ? "scale-110 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900" : "hover:scale-105 opacity-90 hover:opacity-100"}`,
              style: {
                backgroundColor: w.border,
                borderColor: w.border
              },
              children: m && /* @__PURE__ */ C("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ C("span", { className: "w-1.5 h-1.5 rounded-full bg-white shadow-sm" }) })
            },
            d
          );
        }) }),
        /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ C("span", { className: `mr-1 text-xs font-semibold ${l ? "text-slate-300" : "text-slate-500"}`, children: "두께" }),
          nc.map((d) => {
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
function oc({ isDarkMode: t, onExit: e }) {
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
        /* @__PURE__ */ C(Fi, { "aria-hidden": "true", className: "h-4 w-4" }),
        /* @__PURE__ */ C("span", { children: "펜 모드 종료" })
      ]
    }
  );
}
function En(t) {
  const e = t.closest("[data-canvas-board-id]");
  return (e == null ? void 0 : e.getAttribute("data-canvas-pen-mode")) === "true" || ["draw", "highlighter", "eraser"].includes((e == null ? void 0 : e.getAttribute("data-canvas-active-tool")) ?? "");
}
function ic({ category: t, onCommit: e }) {
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
function ac({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: r,
  commitEditorHtml: o,
  onEditorKeyDown: i,
  setShapes: s,
  onDirty: l,
  renderDiagram: f
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
      const b = Wa(a);
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
          children: d ? c("font-medium", { color: le(a), fontSize: Et(a), fontFamily: It(a), textAlign: Ft(a) }) : w ? /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { maxHeight: "100%", color: le(a), fontSize: b, fontFamily: It(a), textAlign: Ft(a) }, dangerouslySetInnerHTML: { __html: w } }, "canvas-view") : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: le(a), fontSize: b, fontFamily: It(a), textAlign: Ft(a) }, children: /* @__PURE__ */ C("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    }
    if (a.type === "card") {
      const b = a.cardStyle === "glass";
      return qn(a) && f && !d ? /* @__PURE__ */ C("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: f(a) }) : /* @__PURE__ */ K(
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
              ic,
              {
                category: a.category,
                onCommit: (z) => {
                  s((S) => S.map((M) => M.id === a.id ? { ...M, category: z } : M)), l();
                }
              }
            ),
            d ? c("flex-1 font-medium", { color: a.textColor ?? V.white, fontSize: Et(a), fontFamily: It(a), textAlign: Ft(a) }) : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: a.textColor ?? V.white, fontSize: Et(a), fontFamily: It(a), textAlign: Ft(a) }, dangerouslySetInnerHTML: { __html: w } }, "canvas-view"),
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
        style: { color: a.textColor, fontSize: Et(a), fontFamily: It(a), textAlign: Ft(a) }
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
    const m = Ce(a), x = xo(a), h = le(a);
    if (a.type === "triangle" || a.type === "diamond" || a.type === "hexagon" || a.type === "star") {
      const b = a.strokeWidth ?? 2;
      return /* @__PURE__ */ K("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ C("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${a.w} ${a.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ C("polygon", { "data-canvas-stroke-width": b, points: po(a.type, a.w, a.h), fill: m, stroke: x, strokeWidth: b / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ C("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: h }, children: d ? c("font-medium", { color: h, fontSize: Et(a), fontFamily: It(a), textAlign: Ft(a) }) : /* @__PURE__ */ C("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: Et(a), fontFamily: It(a), textAlign: Ft(a) }, dangerouslySetInnerHTML: { __html: w } }, "canvas-view") })
      ] });
    }
    const k = _n(a.src), $ = a.type === "rect" || a.type === "ellipse" ? a.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ C(
      "div",
      {
        "data-canvas-stroke-width": $,
        className: `w-full h-full flex items-center justify-center p-3 ${a.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: m, border: `${$ / t.z}px solid ${x}`, color: h },
        children: d ? c("font-medium", { color: h, fontSize: Et(a), fontFamily: It(a), textAlign: Ft(a) }) : /* @__PURE__ */ K("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: Et(a), fontFamily: It(a), textAlign: Ft(a) }, children: [
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
function cc({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: r,
  selected: o,
  editingId: i,
  boardIdentity: s
}) {
  const [l, f] = st({ width: 0, height: 0 });
  St(() => {
    const d = t.current;
    if (!d) return;
    let w = -1, m = -1;
    const x = (p = d.clientWidth, k = d.clientHeight) => {
      p === w && k === m || (w = p, m = k, f({ width: p, height: k }));
    };
    if (x(), typeof ResizeObserver < "u") {
      const p = new ResizeObserver((k) => {
        var b;
        const $ = (b = k[0]) == null ? void 0 : b.contentRect;
        x(($ == null ? void 0 : $.width) ?? d.clientWidth, ($ == null ? void 0 : $.height) ?? d.clientHeight);
      });
      return p.observe(d), () => p.disconnect();
    }
    const h = () => x();
    return window.addEventListener("resize", h), () => window.removeEventListener("resize", h);
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
      const m = jt(d, v, e.current), h = (m.routing === "orthogonal" ? m.pathPoints : null) ?? [m.start, m.end], p = Math.min(...h.map((z) => z.x)), k = Math.max(...h.map((z) => z.x)), $ = Math.min(...h.map((z) => z.y)), b = Math.max(...h.map((z) => z.y));
      return k >= y.minX && p <= y.maxX && b >= y.minY && $ <= y.maxY;
    }
    const w = dt(d);
    return w.maxX >= y.minX && w.minX <= y.maxX && w.maxY >= y.minY && w.minY <= y.maxY;
  }, [i, o, v, e, y]), u = Zt(
    () => c.filter(a),
    [a, c]
  );
  return { shapeById: v, visiblePaintOrder: u };
}
function sc({
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
    n((m) => m.map((x) => {
      if (x.id !== e) return x;
      const h = qn(x) ? { ...x, text: Xe({ ...x, html: d, text: void 0 }), html: void 0 } : { ...x, html: d, text: void 0 };
      if (x.type === "text")
        return x.manualSize ? h : { ...h, ...Ea(u, x) };
      if (x.type === "arrow") return h;
      const p = x.type === "note" ? 32 : x.type === "card" ? 96 : (
        // category header + type footer
        (x.type === "frame", 24)
      ), k = Math.max(x.h, w + p);
      return { ...h, h: k };
    })), o();
  }, [e, o]), l = (u) => {
    var d;
    (d = t.current) == null || d.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(u), s();
  }, f = () => {
    var m;
    const u = (m = window.getSelection()) == null ? void 0 : m.anchorNode, d = u instanceof Element ? u : u == null ? void 0 : u.parentElement, w = d == null ? void 0 : d.closest("ul, ol");
    return w instanceof HTMLElement ? w : null;
  }, v = (u, d, w) => {
    const m = document.createElement(d);
    for (; u.firstChild; ) m.append(u.firstChild);
    return u.replaceWith(m), m;
  }, c = (u) => {
    const d = t.current;
    if (!d) return;
    d.focus();
    const w = f();
    if (u === "number")
      if ((w == null ? void 0 : w.tagName) === "OL")
        w.removeAttribute("data-list-style");
      else if ((w == null ? void 0 : w.tagName) === "UL")
        v(w, "ol");
      else {
        document.execCommand("insertOrderedList");
        const m = f();
        m == null || m.removeAttribute("data-list-style");
      }
    else if ((w == null ? void 0 : w.tagName) === "UL") {
      const m = w.dataset.listStyle;
      u === m ? document.execCommand("insertUnorderedList") : w.dataset.listStyle = u;
    } else {
      (w == null ? void 0 : w.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const m = f();
      m && (m.dataset.listStyle = u);
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
        const w = d.anchorNode, m = w.textContent || "", x = d.anchorOffset, h = m.slice(0, x).trim();
        if (!f()) {
          if (h === "-" || h === "–") {
            u.preventDefault(), w.textContent = m.slice(x), c("dash");
            return;
          }
          if (h === "*") {
            u.preventDefault(), w.textContent = m.slice(x), c("bullet");
            return;
          }
          if (h === "1.") {
            u.preventDefault(), w.textContent = m.slice(x), c("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (u) => {
    const d = ko(u);
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
const Dr = "chois_canvas_ink_style", Wr = "chois_canvas_object_snap", Or = "chois_canvas_show_grid", _r = "chois_canvas_show_minimap";
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
function lc(t) {
  const [e, n] = st(() => Re(Dr) === "smoothed" ? "smoothed" : "raw"), [r, o] = st(() => Re(Wr) !== "false"), [i, s] = st(() => Re(Or) !== "false"), [l, f] = st(() => Re(_r) !== "false"), v = t.drawInkStyle ?? e, c = t.objectSnapEnabled ?? r, y = t.showGrid ?? i, a = t.showMinimap ?? l;
  return St(() => Ge(Dr, v), [v]), St(() => Ge(Wr, String(c)), [c]), St(() => Ge(Or, String(y)), [y]), St(() => Ge(_r, String(a)), [a]), { drawInkStyle: v, objectSnapEnabled: c, showGrid: y, minimapEnabled: a, selectInkStyle: (x) => {
    var h;
    t.drawInkStyle === void 0 && n(x), (h = t.onDrawInkStyleChange) == null || h.call(t, x);
  }, selectObjectSnap: (x) => {
    var h;
    t.objectSnapEnabled === void 0 && o(x), (h = t.onObjectSnapEnabledChange) == null || h.call(t, x);
  }, selectShowGrid: (x) => {
    var h;
    t.showGrid === void 0 && s(x), (h = t.onShowGridChange) == null || h.call(t, x);
  }, selectMinimap: (x) => {
    var h;
    t.showMinimap === void 0 && f(x), (h = t.onShowMinimapChange) == null || h.call(t, x);
  } };
}
function dc({
  boardIdentity: t,
  tool: e,
  activeColor: n,
  defaultActiveColor: r,
  onActiveColorChange: o,
  controlledShapes: i,
  onShapesChange: s,
  onDirty: l
}) {
  const f = it(null), v = it(null), [c, y] = st([]), a = i !== void 0 && s !== void 0, u = it(/* @__PURE__ */ new WeakMap()), d = Zt(() => {
    const B = u.current;
    return (a ? i ?? [] : c).map((q) => {
      let Z = B.get(q);
      return Z === void 0 && (Z = An(q), B.set(q, Z)), Z;
    }).filter((q) => q !== null);
  }, [a, i, c]), w = it(s);
  w.current = s;
  const m = yt((B) => {
    const q = w.current;
    if (!q) {
      y(B);
      return;
    }
    q(typeof B == "function" ? B : () => B);
  }, []), [x, h] = st({ x: -400, y: -300, z: 1 }), [p, k] = st(/* @__PURE__ */ new Set()), [$, b] = st(null), [z, S] = st({ kind: "none" }), [M, X] = st(!1), [I, g] = st([]), [Y, F] = st(""), [W, P] = st(!1), [L, O] = st(null), [D, T] = st(!1), [H, R] = st(n ?? r ?? "blue"), tt = n ?? H, ot = it(o);
  ot.current = o;
  const Q = yt((B) => {
    R((q) => {
      var G;
      const Z = typeof B == "function" ? B(q) : B;
      return (G = ot.current) == null || G.call(ot, Z), Z;
    });
  }, []), [U, et] = st(Ze), at = it(tt);
  at.current = tt;
  const nt = it([]), N = it([]), E = it(null), j = it(/* @__PURE__ */ new Map()), ct = it(null), xt = it(null), wt = it([]), zt = it(/* @__PURE__ */ new Set()), vt = it(d), A = it(x), pt = it(e), $t = it(p), Ct = it($), Xt = it(!1);
  vt.current = d, A.current = x, pt.current = e, $t.current = p, Ct.current = $;
  const ve = yt((B) => {
    var q;
    Xt.current = B, B && typeof window < "u" && ((q = window.getSelection()) == null || q.removeAllRanges()), T(B);
  }, []), [ge, ye] = st("ink"), [bt, Yt] = st("yellow"), Ht = e === "highlighter" ? bt : ge, Nt = it(Ht);
  Nt.current = Ht;
  const oe = yt((B) => {
    pt.current === "highlighter" ? Yt(B) : ye(B);
  }, []), Ut = it({ kind: "none" }), Jt = yt((B) => {
    Ut.current = B, S(B);
  }, []), mt = yt((B) => {
    $t.current = B, k(B);
  }, []);
  re(() => {
    var q;
    const B = /* @__PURE__ */ new Set();
    $t.current = B, Ct.current = null, j.current.clear(), nt.current = [], N.current = [], E.current = null, xt.current = null, wt.current = [], zt.current.clear(), Xt.current = !1, Jt({ kind: "none" }), k(B), b(null), X(!1), g([]), O(null), T(!1), F(""), (q = f.current) == null || q.focus();
  }, [Jt, t]), St(() => {
    let B = !1;
    const q = () => {
      const G = Ca();
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
      const Lt = document.createRange();
      Lt.selectNodeContents(Z), Lt.collapse(!1);
      const Dt = window.getSelection();
      Dt == null || Dt.removeAllRanges(), Dt == null || Dt.addRange(Lt);
    };
    B();
    const q = requestAnimationFrame(B);
    return () => cancelAnimationFrame(q);
  }, [$, Pt]);
  const Rt = yt((B) => {
    m((q) => {
      const Z = typeof B == "function" ? B(q) : B;
      return nt.current.push(q), nt.current.length > 100 && nt.current.shift(), N.current = [], Z;
    }), l();
  }, [l]), dn = yt((B) => {
    if (B.length === 0) return;
    let q = vt.current;
    for (const Z of B)
      nt.current.push(q), q = [...q, Z];
    nt.current.length > 100 && nt.current.splice(0, nt.current.length - 100), N.current = [], m((Z) => [...Z, ...B]), l();
  }, [l, m]), we = yt((B) => {
    const q = new Set(vt.current.filter((Z) => !Z.locked && B.has(Z.id)).map((Z) => Z.id));
    return q.size === 0 ? !1 : (Rt((Z) => Z.filter((G) => q.has(G.id) || G.parentId && q.has(G.parentId) ? !1 : G.type !== "arrow" ? !0 : !(G.fromId && q.has(G.fromId)) && !(G.toId && q.has(G.toId)))), mt(/* @__PURE__ */ new Set()), F(`${q.size}개 삭제됨`), !0);
  }, [Rt, mt]), Kt = yt(() => {
    E.current = vt.current;
  }, []), We = yt(() => {
    const B = E.current;
    E.current = null, !(!B || B === vt.current) && (nt.current.push(B), nt.current.length > 100 && nt.current.shift(), N.current = [], l());
  }, [l]), un = yt(() => {
    const B = E.current;
    E.current = null, !(!B || B === vt.current) && (vt.current = B, m(B));
  }, [m]), hn = yt((B, q) => {
    var Lt;
    const Z = (Lt = f.current) == null ? void 0 : Lt.getBoundingClientRect(), G = A.current;
    return Z ? { x: (B - Z.left) / G.z + G.x, y: (q - Z.top) / G.z + G.y } : { x: 0, y: 0 };
  }, []), fn = yt(() => {
    var Z;
    const B = (Z = f.current) == null ? void 0 : Z.getBoundingClientRect(), q = A.current;
    return B ? { x: q.x + B.width / 2 / q.z, y: q.y + B.height / 2 / q.z } : { x: 0, y: 0 };
  }, []), Oe = yt((B) => {
    const q = new Set(vt.current.filter((G) => B.has(G.id) && G.groupId).map((G) => G.groupId));
    if (q.size === 0) return B;
    const Z = new Set(B);
    for (const G of vt.current) G.groupId && q.has(G.groupId) && Z.add(G.id);
    return Z;
  }, []);
  return {
    containerRef: f,
    editorRef: v,
    localShapes: c,
    setLocalShapes: y,
    controlled: a,
    shapes: d,
    setShapes: m,
    camera: x,
    setCamera: h,
    cameraRef: A,
    selected: p,
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
    guides: I,
    setGuides: g,
    announcement: Y,
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
function uc({
  containerRef: t,
  camera: e,
  interactionRef: n,
  toolRef: r,
  pointers: o,
  shapesRef: i,
  setCamera: s,
  minZoom: l,
  maxZoom: f,
  shapes: v,
  selected: c,
  editingId: y,
  textualTypes: a,
  onZoomChange: u,
  onSelectionChange: d,
  onLocalCursor: w,
  toPage: m
}) {
  St(() => {
    u == null || u(e.z);
  }, [e.z, u]), St(() => {
    const M = t.current;
    if (!M) return;
    const X = (I) => {
      if (I.preventDefault(), I.ctrlKey || I.metaKey) {
        const g = M.getBoundingClientRect();
        s((Y) => {
          const F = Math.min(f, Math.max(l, Y.z * Math.exp(-I.deltaY * 0.01))), W = I.clientX - g.left, P = I.clientY - g.top;
          return { x: Y.x + W / Y.z - W / F, y: Y.y + P / Y.z - P / F, z: F };
        });
      } else
        s((g) => ({ ...g, x: g.x + I.deltaX / g.z, y: g.y + I.deltaY / g.z }));
    };
    return M.addEventListener("wheel", X, { passive: !1 }), () => M.removeEventListener("wheel", X);
  }, [t, f, l, s]);
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
  const h = Zt(() => {
    if (y) {
      const X = v.find((I) => I.id === y);
      return X && X.type !== "image" && X.type !== "draw" ? [X] : [];
    }
    const M = v.filter((X) => c.has(X.id));
    return M.length === 1, M;
  }, [y, c, v]), p = Zt(() => h.length === 0 ? null : h[0] ?? null, [h]), k = it(0), [$, b] = st(null);
  return { selectionInfo: x, inspectorSelection: h, inspectorShape: p, hoveredShapeId: $, onContainerPointerMove: (M) => {
    if (r.current === "select" && n.current.kind === "none" && o.current.size === 0 && M.pointerType !== "touch") {
      const X = m(M.clientX, M.clientY), I = i.current, g = new Map(I.map((W) => [W.id, W])), Y = [...I].reverse().find((W) => en.includes(W.type) && $e(W, X.x, X.y, e.z, g, I)), F = (Y == null ? void 0 : Y.id) ?? null;
      F !== $ && b(F);
    } else $ !== null && b(null);
    if (w) {
      const X = performance.now();
      if (X - k.current < 60) return;
      k.current = X, w(m(M.clientX, M.clientY));
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
function hc(t, e, n) {
  const r = nn(t, e);
  return t.map((o) => !r.has(o.id) || o.locked ? o : n === 0 ? { ...o, rotation: void 0 } : { ...o, rotation: (o.rotation ?? 0) + n });
}
function fc(t, e, n) {
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
const Ot = 24, $o = "choi01-canvas-selection";
function Ar(t) {
  var e;
  return {
    ...t,
    points: (e = t.points) == null ? void 0 : e.map(([n, r]) => [n, r]),
    orthogonalWaypoints: t.type === "arrow" && t.orthogonalWaypoints ? t.orthogonalWaypoints.map((n) => ({ ...n })) : void 0
  };
}
function xc(t) {
  try {
    const e = JSON.parse(t);
    return !e || typeof e != "object" || !("marker" in e) || e.marker !== $o || !("shapes" in e) || !Array.isArray(e.shapes) ? null : e.shapes.map((n) => qr(n));
  } catch {
    return null;
  }
}
function pc({
  containerRef: t,
  shapesRef: e,
  clipboardRef: n,
  selectedRef: r,
  commit: o,
  deleteSelection: i,
  selectNow: s,
  setAnnouncement: l,
  createId: f
}) {
  return Zt(() => ({
    copySelected: () => {
      var y;
      const v = nn(e.current, r.current), c = e.current.filter((a) => v.has(a.id)).map(Ar);
      c.length !== 0 && (n.current = c, typeof navigator < "u" && ((y = navigator.clipboard) != null && y.writeText) && navigator.clipboard.writeText(JSON.stringify({ marker: $o, shapes: c })).catch(() => {
      }), l(String(c.length) + "개 복사됨"));
    },
    pasteClipboard: async () => {
      var u;
      let v = n.current;
      if (!v && typeof navigator < "u" && ((u = navigator.clipboard) != null && u.readText))
        try {
          v = xc(await navigator.clipboard.readText());
        } catch {
          v = null;
        }
      if (!v || v.length === 0) {
        l("붙여넣을 개체가 없습니다");
        return;
      }
      const c = new Map(v.map((d) => [d.id, f()])), y = /* @__PURE__ */ new Map(), a = v.map((d) => {
        var m;
        let w = d.groupId;
        return w && (y.has(w) || y.set(w, f("g")), w = y.get(w)), {
          ...Ar(d),
          id: c.get(d.id) ?? f(),
          parentId: d.parentId ? c.get(d.parentId) ?? d.parentId : void 0,
          fromId: d.fromId ? c.get(d.fromId) ?? d.fromId : void 0,
          toId: d.toId ? c.get(d.toId) ?? d.toId : void 0,
          x: d.x + Ot,
          y: d.y + Ot,
          groupId: w,
          locked: void 0,
          points: (m = d.points) == null ? void 0 : m.map(([x, h]) => [x + Ot, h + Ot]),
          orthogonalWaypoints: d.type === "arrow" && d.orthogonalWaypoints ? d.orthogonalWaypoints.map((x) => ({ x: x.x + Ot, y: x.y + Ot })) : void 0
        };
      });
      o((d) => [...d, ...a]), s(new Set(a.map((d) => d.id))), l(String(a.length) + "개 붙여넣음");
    },
    rotateSelected: (v) => {
      const c = r.current;
      c.size !== 0 && (o((y) => hc(y, c, v)), l(v === 0 ? "회전 초기화됨" : "회전됨"));
    },
    reorderSelected: (v) => {
      const c = r.current;
      c.size !== 0 && (o((y) => fc(y, c, v)), l("레이어 순서 변경됨"));
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
      const c = [], y = /* @__PURE__ */ new Map(), a = new Map(e.current.filter((d) => v.has(d.id)).map((d) => [d.id, f()]));
      for (const d of e.current) {
        if (!v.has(d.id)) continue;
        let w = d.groupId;
        w && (y.has(w) || y.set(w, f("g")), w = y.get(w)), c.push({
          ...d,
          id: a.get(d.id) ?? f(),
          parentId: d.parentId ? a.get(d.parentId) ?? d.parentId : void 0,
          fromId: d.fromId ? a.get(d.fromId) ?? d.fromId : void 0,
          locked: void 0,
          toId: d.toId ? a.get(d.toId) ?? d.toId : void 0,
          x: d.x + Ot,
          y: d.y + Ot,
          groupId: w,
          points: (u = d.points) == null ? void 0 : u.map(([m, x]) => [m + Ot, x + Ot]),
          orthogonalWaypoints: d.type === "arrow" && d.orthogonalWaypoints ? d.orthogonalWaypoints.map((m) => ({ x: m.x + Ot, y: m.y + Ot })) : void 0
        });
      }
      o((d) => [...d, ...c]), s(new Set(c.map((d) => d.id))), l(`${c.length}개 복제됨`);
    },
    group: () => {
      var y;
      const v = r.current;
      if (v.size < 2) return;
      const c = f("g");
      o((a) => a.map((u) => v.has(u.id) ? { ...u, groupId: c } : u)), l(`${v.size}개 그룹화됨`), (y = t.current) == null || y.focus();
    },
    ungroup: () => {
      var c;
      const v = r.current;
      v.size !== 0 && (o((y) => y.map((a) => v.has(a.id) ? { ...a, groupId: void 0 } : a)), l("그룹 해제됨"), (c = t.current) == null || c.focus());
    }
  }), [n, o, t, f, i, s, r, l, e]);
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
function mc(t, e, n, r) {
  return t.minX >= e.x && t.maxX <= e.x + n / e.z && t.minY >= e.y && t.maxY <= e.y + r / e.z;
}
const Co = (t) => ({
  id: "view",
  version: 1,
  shapes: t
});
function vc(t, e) {
  return hi(Co(t), e);
}
function gc(t, e, n) {
  return fi(Co(t), e, n);
}
function zo(t, e, n = t) {
  if (t.length === 0) return null;
  const r = new Map(n.map((m) => [m.id, m])), o = /* @__PURE__ */ new Map(), i = (m) => {
    const x = o.get(m.id);
    if (x) return x;
    const h = jt(m, r, n);
    return o.set(m.id, h), h;
  }, s = (m) => {
    var p;
    if (m.type !== "arrow") return dt(m);
    const x = i(m), h = (p = x.pathPoints) != null && p.length ? x.pathPoints : x.routing === "curved" ? [x.start, x.control, x.end] : [x.start, x.end];
    return {
      minX: Math.min(...h.map((k) => k.x)),
      minY: Math.min(...h.map((k) => k.y)),
      maxX: Math.max(...h.map((k) => k.x)),
      maxY: Math.max(...h.map((k) => k.y))
    };
  };
  let l = 1 / 0, f = 1 / 0, v = -1 / 0, c = -1 / 0;
  for (const m of t) {
    const x = s(m);
    l = Math.min(l, x.minX), f = Math.min(f, x.minY), v = Math.max(v, x.maxX), c = Math.max(c, x.maxY);
  }
  const y = 40, a = v - l + y * 2, u = c - f + y * 2;
  if (!Number.isFinite(a) || !Number.isFinite(u) || a > de.maxExportDimension || u > de.maxExportDimension || a * u > de.maxExportPixels) return null;
  const d = (m, x, h, p, k) => {
    const $ = m.fontSize ?? h, b = It(m), z = go(cn(m));
    if (z.length === 0) return "";
    const S = At(m), M = m.textAlign === "right" ? "end" : m.textAlign === "center" ? "middle" : m.textAlign === "left" ? "start" : k, X = M === "end" ? S.maxX - 12 : M === "middle" ? (S.minX + S.maxX) / 2 : S.minX + 12, I = S.minY + $ + 12;
    return z.map((g, Y) => {
      const F = g.map((W) => `<tspan style="${[
        W.bold ? "font-weight:700" : `font-weight:${p}`,
        W.italic ? "font-style:italic" : "",
        W.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Gt(W.text)}</tspan>`).join("");
      return `<text x="${X}" y="${I + Y * $ * 1.4}" font-family="${Gt(b)}" font-size="${$}" fill="${x}" text-anchor="${M}">${F}</text>`;
    }).join("");
  }, w = t.map((m) => {
    const x = ft[m.color ?? "blue"], h = At(m), p = Bt(m), k = m.rotation ? ` transform="rotate(${m.rotation * 180 / Math.PI} ${p.x} ${p.y})"` : "", $ = m.strokeColor ?? (m.color ? ft[m.color].border : V.ink);
    if (m.type === "draw" && m.points) {
      const g = vo(m), Y = Gt(De(m)), F = g.opacity === 1 ? "" : ` stroke-opacity="${g.opacity}" fill-opacity="${g.opacity}"`;
      return `<path d="${g.d}" fill="${g.filled ? Y : "none"}" stroke="${g.filled ? "none" : Y}" stroke-width="${g.width}"${F} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (m.type === "arrow") {
      const g = i(m), Y = m.strokeWidth ?? 2.5, F = Math.max(10, 8 + Y * 2), W = Math.max(4, 2 + Y), P = g.routing === "orthogonal" && g.pathPoints ? g.pathPoints : null, L = P && P.length > 1, O = L ? Fn(P) : g.routing === "curved" ? `M ${g.start.x} ${g.start.y} Q ${g.control.x} ${g.control.y} ${g.end.x} ${g.end.y}` : `M ${g.start.x} ${g.start.y} L ${g.end.x} ${g.end.y}`, D = L ? so(P) : g.routing === "curved" ? (() => {
        const U = ze(0.94, g.start, g.control, g.end);
        return Math.atan2(g.end.y - U.y, g.end.x - U.x);
      })() : Math.atan2(g.end.y - g.start.y, g.end.x - g.start.x), T = L ? Te(P[0], P[1]) : g.routing === "orthogonal" && g.start.side ? g.start.side === "e" ? 0 : g.start.side === "w" ? Math.PI : g.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Te(g.start, g.end), H = m.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : m.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", R = (U, et, at, nt) => {
        if (U === "dot") return `<circle cx="${et}" cy="${at}" r="${W}" fill="${$}"/>`;
        if (U === "none") return "";
        const N = `${et - F * Math.cos(nt - 0.4)},${at - F * Math.sin(nt - 0.4)}`, E = `${et - F * Math.cos(nt + 0.4)},${at - F * Math.sin(nt + 0.4)}`;
        return `<polygon points="${et},${at} ${N} ${E}" fill="${$}"/>`;
      }, tt = g.routing === "orthogonal" && g.pathPoints ? Un(g.pathPoints) : g.bend === 0 ? { x: (g.start.x + g.end.x) / 2, y: (g.start.y + g.end.y) / 2 } : ze(0.5, g.start, g.control, g.end), ot = Xe(m), Q = ot ? `<text x="${tt.x}" y="${tt.y - 6}" text-anchor="middle" font-family="${Gt(It(m))}" font-size="${m.fontSize ?? 12}" fill="${$}">${Gt(ot)}</text>` : "";
      return `<path d="${O}" fill="none" stroke="${$}" stroke-width="${Y}" stroke-linecap="round" stroke-linejoin="round"${H}/>` + R(m.arrowEnd ?? "arrow", g.end.x, g.end.y, D) + R(m.arrowStart ?? "none", g.start.x, g.start.y, T + Math.PI) + Q;
    }
    if (m.type === "image" && m.src) {
      const g = _n(m.src);
      return g ? `<image href="${Gt(g)}" x="${h.minX}" y="${h.minY}" width="${h.maxX - h.minX}" height="${h.maxY - h.minY}"${k}/>` : "";
    }
    if (m.type === "frame")
      return `<g${k}><rect x="${h.minX}" y="${h.minY}" width="${h.maxX - h.minX}" height="${h.maxY - h.minY}" fill="none" stroke="${V.slate400}" stroke-width="${m.strokeWidth ?? 2}" rx="4"/><text x="${h.minX}" y="${h.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${V.muted}">${Gt(m.text ?? "프레임")}</text></g>`;
    if (m.type === "note")
      return `<g${k}><rect x="${h.minX}" y="${h.minY}" width="${h.maxX - h.minX}" height="${h.maxY - h.minY}" fill="${Ce(m)}"/><rect x="${h.minX}" y="${h.minY}" width="${h.maxX - h.minX}" height="6" fill="${x.border}"/>` + d(m, le(m), 14, "600", "start") + "</g>";
    if (m.type === "card") {
      const g = m.cardStyle === "glass";
      return `<g${k}><rect x="${h.minX}" y="${h.minY}" width="${h.maxX - h.minX}" height="${h.maxY - h.minY}" rx="16" fill="${g ? V.glassFill : V.slateCard}"/><text x="${h.minX + 16}" y="${h.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${V.slate400}">[ ${Gt(m.category ?? "ENTITY")} ]</text>` + d(m, V.white, 16, "700", "start") + "</g>";
    }
    const b = m.type === "rect" || m.type === "ellipse" || m.type === "triangle" || m.type === "diamond" || m.type === "hexagon" || m.type === "star" ? m.strokeWidth ?? 2 : 2, z = Ce(m), S = xo(m), M = m.type === "triangle" || m.type === "diamond" || m.type === "hexagon" || m.type === "star", X = M ? po(m.type, h.maxX - h.minX, h.maxY - h.minY).split(" ").map((g) => {
      const [Y, F] = g.split(",").map(Number);
      return `${Y + h.minX},${F + h.minY}`;
    }).join(" ") : "", I = m.type === "ellipse" ? `<ellipse cx="${(h.minX + h.maxX) / 2}" cy="${(h.minY + h.maxY) / 2}" rx="${(h.maxX - h.minX) / 2}" ry="${(h.maxY - h.minY) / 2}" fill="${z}" stroke="${S}" stroke-width="${b}"/>` : M ? `<polygon points="${X}" fill="${z}" stroke="${S}" stroke-width="${b}" stroke-linejoin="round"/>` : `<rect x="${h.minX}" y="${h.minY}" width="${h.maxX - h.minX}" height="${h.maxY - h.minY}" rx="12" fill="${z}" stroke="${S}" stroke-width="${b}"/>`;
    return `<g${k}>${I}${d(m, x.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${a}" height="${u}" viewBox="${l - y} ${f - y} ${a} ${u}"><rect x="${l - y}" y="${f - y}" width="${a}" height="${u}" fill="${e ? V.canvasDark : V.canvasLight}"/>` + w + "</svg>";
}
function yc(t, e) {
  return zo(t, e);
}
function wc(t, e, n) {
  return zo(
    t.filter((r) => e.has(r.id)),
    n,
    t
  );
}
async function Br(t) {
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
  const l = 2, f = r * l, v = o * l;
  if (!Number.isSafeInteger(f) || !Number.isSafeInteger(v) || f > de.maxExportDimension || v > de.maxExportDimension || f * v > de.maxExportPixels) return null;
  const c = document.createElement("canvas");
  c.width = f, c.height = v;
  const y = c.getContext("2d");
  return y ? (y.scale(l, l), y.drawImage(s, 0, 0), new Promise((a) => {
    try {
      c.toBlob((u) => a(u), "image/png");
    } catch {
      a(null);
    }
  })) : null;
}
function bc(t, e, n) {
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
  const l = 220, f = l * l, v = 80;
  let c = 400;
  const y = c / v;
  for (let a = 0; a < v; a++) {
    for (let u = 0; u < o.length; u++)
      o[u].vx = 0, o[u].vy = 0;
    for (let u = 0; u < o.length; u++)
      for (let d = u + 1; d < o.length; d++) {
        const w = o[u], m = o[d], x = w.x - m.x, h = w.y - m.y, p = Math.hypot(x, h) || 0.01, k = f / p, $ = x / p * k, b = h / p * k;
        w.vx += $, w.vy += b, m.vx -= $, m.vy -= b;
      }
    for (const [u, d] of s) {
      const w = u.x - d.x, m = u.y - d.y, x = Math.hypot(w, m) || 0.01, h = x * x / l, p = w / x * h, k = m / x * h;
      u.vx -= p, u.vy -= k, d.vx += p, d.vy += k;
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
function kc(t, {
  controlled: e,
  past: n,
  future: r,
  setLocalShapes: o,
  setCamera: i,
  selectNow: s,
  setEditingId: l
}) {
  let f;
  try {
    f = xi(t);
  } catch {
    return;
  }
  e || (n.current = [], r.current = [], o(f.shapes.map(Mc))), i(f.camera), s(/* @__PURE__ */ new Set()), l(null);
}
function Mc(t) {
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
      return Sc(t);
  }
}
function Sc(t) {
  throw new pi(`Unhandled canvas shape type: ${String(t)}.`);
}
const Hr = (t) => t === "draw" || t === "highlighter";
function $c({
  ref: t,
  containerRef: e,
  shapesRef: n,
  selectedRef: r,
  cameraRef: o,
  toolRef: i,
  activeColorRef: s,
  drawColorRef: l,
  setDrawColor: f,
  setActiveColor: v,
  past: c,
  future: y,
  controlled: a,
  isDarkMode: u,
  minZoom: d,
  maxZoom: w,
  onToolChange: m,
  setSelectedStrokeWidth: x,
  onDirty: h,
  commit: p,
  selectNow: k,
  selectionActions: $,
  viewportCentre: b,
  setShapes: z,
  setLocalShapes: S,
  setCamera: M,
  setEditingId: X,
  setAnnouncement: I,
  createId: g
}) {
  const Y = yt((P) => {
    const L = b(), O = An({
      id: g(),
      x: P.x ?? L.x - P.w / 2,
      y: P.y ?? L.y - P.h / 2,
      ...P
    });
    if (!O) throw new Error("Canvas could not create a valid shape.");
    return p((D) => [...D, O]), k(/* @__PURE__ */ new Set([O.id])), m("select"), I(`${O.type} 추가됨`), O;
  }, [p, g, m, k, I, b]), F = yt(() => yc(n.current, u), [u, n]), W = yt(() => wc(
    n.current,
    (r == null ? void 0 : r.current) ?? /* @__PURE__ */ new Set(),
    u
  ), [u, r, n]);
  si(t, () => ({
    addNote: (P) => {
      Y({ type: "note", w: 180, h: 180, color: P, text: "" }), X(null);
    },
    addCard: (P, L, O, D) => {
      Y({ type: "card", w: 260, h: 150, text: P, category: L, cardStyle: O, color: D });
    },
    addText: () => {
      const P = Y({ type: "text", w: 220, h: 44, text: "" });
      X(P.id);
    },
    addShape: (P, L, O) => {
      Y({
        type: P,
        w: P === "ellipse" ? 220 : 200,
        h: P === "ellipse" ? 110 : 140,
        color: L,
        text: O ?? ""
      });
    },
    addArrow: () => {
      const P = b(), L = { id: g(), type: "arrow", x: P.x - 140, y: P.y, w: 280, h: 0 };
      p((O) => [...O, L]), k(/* @__PURE__ */ new Set([L.id])), m("select");
    },
    addImages: (P) => {
      const L = b();
      let O = L.y;
      const D = P.map((T) => {
        const H = An({ id: g(), type: "image", ...T, x: L.x - T.w / 2, y: O });
        if (!H) throw new Error("Invalid canvas image.");
        return O += T.h + 32, H;
      });
      p((T) => [...T, ...D]), n.current = [...n.current, ...D], k(new Set(D.map((T) => T.id))), X(null), m("select");
    },
    addImage: (P, L, O, D) => {
      Y({ type: "image", w: O, h: D, src: P, fileName: L });
    },
    addFileCard: (P, L, O) => {
      Y({ type: "rect", w: 260, h: 120, color: "purple", text: O, src: L, fileName: P });
    },
    updateShapeText: (P, L) => {
      p((O) => O.map((D) => D.id === P && !D.locked ? { ...D, text: L, html: void 0 } : D));
    },
    setSelectedStrokeWidth: x,
    // While a pen tool is active the "active colour" is the pen colour, so
    // hosts that drive the palette through the handle see the same thing the
    // user sees on the canvas. Other tools keep the note/shape colour.
    setActiveColor: (P) => {
      Hr(i.current) ? f(P) : v(P);
    },
    getActiveColor: () => Hr(i.current) ? l.current : s.current,
    setTool: m,
    undo: () => {
      const P = c.current.pop();
      P && (y.current.push(n.current), z(P), k(/* @__PURE__ */ new Set()), X(null), h(), I("실행 취소"));
    },
    redo: () => {
      const P = y.current.pop();
      P && (c.current.push(n.current), z(P), k(/* @__PURE__ */ new Set()), X(null), h(), I("다시 실행"));
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
    autoLayout: () => bc(n.current, p, () => I("자동 배치 완료")),
    exportSvg: F,
    exportPng: () => Br(F),
    exportSvgForSelection: W,
    exportPngForSelection: () => Br(W),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (P) => kc(P, {
      controlled: a,
      past: c,
      future: y,
      setLocalShapes: S,
      setCamera: M,
      selectNow: k,
      setEditingId: X
    })
  }), [
    Y,
    F,
    W,
    p,
    g,
    u,
    w,
    d,
    h,
    m,
    $,
    k,
    M,
    X,
    S,
    x,
    z,
    I,
    b,
    a
  ]);
}
function Cc(t) {
  return t.altKey || !t.ctrlKey && !t.metaKey ? null : t.code === "KeyZ" ? t.shiftKey ? "redo" : "undo" : t.code === "KeyY" ? "redo" : null;
}
function zc(t) {
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
function Xc({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: r,
  editingIdRef: o,
  interactionRef: i,
  applyInteraction: s,
  toolRef: l,
  past: f,
  future: v,
  textualTypes: c,
  setIsSpaceDown: y,
  setEditingId: a,
  setShapes: u,
  setAnnouncement: d,
  commit: w,
  deleteSelection: m,
  selectNow: x,
  onDirty: h,
  onToolChange: p,
  viewActionsRef: k,
  createId: $,
  selectionActions: b
}) {
  const z = yt((S, M) => {
    const X = r.current;
    X.size !== 0 && w((I) => I.map((g) => {
      var Y;
      return X.has(g.id) && !g.locked ? {
        ...g,
        x: g.x + S,
        y: g.y + M,
        points: (Y = g.points) == null ? void 0 : Y.map(([F, W]) => [F + S, W + M])
      } : g;
    }));
  }, [w, r]);
  St(() => {
    const S = (g) => {
      const Y = g;
      return !!Y && (Y.tagName === "INPUT" || Y.tagName === "TEXTAREA" || Y.isContentEditable);
    }, M = (g) => g instanceof Element && !!g.closest("input, select, button, textarea, option, label, [data-canvas-control]"), X = (g) => {
      var H, R, tt, ot, Q, U, et, at, nt, N, E, j, ct, xt, wt, zt, vt;
      const Y = t.current, F = document.activeElement, W = g.target instanceof Node && !!(Y != null && Y.contains(g.target)), P = !!Y && (F === Y || Y.contains(F));
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
          m(A) && g.preventDefault();
        }
        return;
      }
      const L = r.current, O = Cc(g);
      if (O) {
        if (g.preventDefault(), O === "redo") {
          const A = v.current.pop();
          A && (f.current.push(n.current), u(A), h(), d("다시 실행"));
        } else {
          const A = f.current.pop();
          A && (v.current.push(n.current), u(A), h(), d("실행 취소"));
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
        m(L) && g.preventDefault();
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
        const A = ((tt = n.current.find((Ct) => L.has(Ct.id))) == null ? void 0 : tt.id) ?? null, pt = gc(n.current, A, g.shiftKey ? -1 : 1);
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
          g.preventDefault(), a(null), (zt = e.current) == null || zt.blur(), (vt = t.current) == null || vt.focus(), p("select");
          return;
        }
        x(/* @__PURE__ */ new Set()), p("select");
        return;
      }
      const T = zc(g);
      T && (g.preventDefault(), l.current = T, p(T));
    }, I = (g) => {
      const Y = t.current;
      !Y || !(document.activeElement === Y || Y.contains(document.activeElement)) || g.code === "Space" && y(!1);
    };
    return window.addEventListener("keydown", X), window.addEventListener("keyup", I), () => {
      window.removeEventListener("keydown", X), window.removeEventListener("keyup", I);
    };
  }, [
    w,
    t,
    $,
    m,
    o,
    e,
    v,
    z,
    h,
    p,
    f,
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
function Yc(t, e) {
  return e && rn(t);
}
function Nc(t, e) {
  return !t || rn(e);
}
function Se(t, e) {
  return [(t[0] - e.x) * e.z, (t[1] - e.y) * e.z];
}
function Kr(t, e, n, r) {
  if (r === "raw") {
    let f = t[t.length - 1];
    for (const v of e) {
      if (t.length >= de.maxDrawPoints) return;
      f && v[0] === f[0] && v[1] === f[1] || (t.push(v), f = v);
    }
    return;
  }
  const o = Math.max(n, 0.1), i = 0.05 / o, s = 4 / o;
  let l = t[t.length - 1];
  for (const f of e) {
    if (!l) {
      t.push(f), l = f;
      continue;
    }
    const v = f[0] - l[0], c = f[1] - l[1], y = Math.hypot(v, c);
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
function Pc(t) {
  const e = (t.points ?? []).map(([s, l]) => [s, l]);
  if (e.length === 0) return t;
  let n = e[0][0], r = e[0][1], o = n, i = r;
  for (const [s, l] of e)
    n = Math.min(n, s), r = Math.min(r, l), o = Math.max(o, s), i = Math.max(i, l);
  return { ...t, points: e, x: n, y: r, w: o - n, h: i - r };
}
function jr(t, e, n) {
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
  const l = mo(r, o, i);
  if (l.length === 0) {
    t.restore();
    return;
  }
  t.beginPath();
  const [f, v] = Se([l[0][0], l[0][1]], n);
  t.moveTo(f, v);
  for (let c = 1; c < l.length; c++) {
    const [y, a] = Se([l[c][0], l[c][1]], n);
    t.lineTo(y, a);
  }
  t.closePath(), t.fill(), t.restore();
}
function Ec(t, e, n, r) {
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
  for (const f of e) jr(i, f, r);
  n && jr(i, n, r), i.setTransform(1, 0, 0, 1, 0, 0);
}
const Lc = 400;
function Tc({
  drawing: t,
  containerRef: e,
  editorRef: n,
  pointers: r,
  interactionRef: o,
  editingIdRef: i,
  cameraRef: s,
  shapesRef: l,
  selectedRef: f,
  toolRef: v,
  penModeRef: c,
  activeColorRef: y,
  drawColorRef: a,
  drawStrokeWidth: u,
  drawInkStyle: d,
  camera: w,
  shapes: m,
  selected: x,
  isSpaceDown: h,
  textualTypes: p,
  setShapes: k,
  setEditingId: $,
  applyInteraction: b,
  selectNow: z,
  beginHistory: S,
  cancelHistory: M,
  commit: X,
  onToolChange: I,
  expandToGroups: g,
  toPage: Y,
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
    const ct = Y(N, E);
    if (j === "text") {
      const zt = new Map(l.current.map((A) => [A.id, A])), vt = [...l.current].reverse().find((A) => p.includes(A.type) && $e(A, ct.x, ct.y, s.current.z, zt, l.current));
      if (vt) {
        z(/* @__PURE__ */ new Set([vt.id])), $(vt.id), v.current = "select", I("select");
        return;
      }
    }
    const xt = j === "note" ? { id: D(), type: "note", x: ct.x - 90, y: ct.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: D(), type: "text", x: ct.x, y: ct.y - 22, w: 220, h: 44, text: "" };
    X((zt) => [...zt, xt]), z(/* @__PURE__ */ new Set([xt.id])), $(xt.id), v.current = "select", I("select");
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
    if (!c.current && Yc(N, ct || Ic()) && (M(), r.current.clear(), P.current = null, on(
      W.current,
      L.current,
      null,
      s.current,
      window.devicePixelRatio || 1
    ), b({ kind: "none" }), E !== "draw" && E !== "highlighter" && E !== "eraser" && (E = "draw", v.current = "draw", I("draw")), O(!0)), c.current && N.pointerType === "touch") {
      if (N.cancelable && N.preventDefault(), o.current.kind !== "none") return;
      r.current.set(N.pointerId, { x: N.clientX, y: N.clientY });
      try {
        N.currentTarget.setPointerCapture(N.pointerId);
      } catch {
      }
      r.current.size === 2 && R();
      return;
    }
    if (!Nc(c.current, N)) {
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
    if (N.button === 1 || h || E === "hand" || N.button === 0 && E === "select" && N.altKey) {
      b({ kind: "pan", startX: N.clientX, startY: N.clientY, camX: w.x, camY: w.y });
      return;
    }
    if (N.button !== 0) return;
    const A = Y(N.clientX, N.clientY), pt = f.current;
    if (wt || ($(null), (ve = n.current) == null || ve.blur(), (ge = e.current) == null || ge.focus()), E === "draw" || E === "highlighter") {
      const bt = new Map(m.map((Nt) => [Nt.id, Nt])), Yt = [...m].reverse().find((Nt) => Nt.type === "note" && $e(Nt, A.x, A.y, w.z, bt, m)), Ht = {
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
        ...Yt ? { parentId: Yt.id } : {}
      };
      t.start(Ht, N);
      return;
    }
    if (E === "arrow" || E === "frame" || mi.includes(E)) {
      const bt = E, Yt = E === "arrow" ? { id: D(), type: "arrow", x: A.x, y: A.y, w: 0, h: 0, color: y.current } : E === "frame" ? { id: D(), type: "frame", x: A.x, y: A.y, w: 0, h: 0, text: "프레임" } : { id: D(), type: bt, x: A.x, y: A.y, w: 0, h: 0, color: y.current, text: "" };
      S(), k((Ht) => [...Ht, Yt]), b({ kind: "creating", id: Yt.id, startX: A.x, startY: A.y });
      return;
    }
    if (E === "note" || E === "text") {
      H(N.clientX, N.clientY);
      return;
    }
    if (E === "eraser") {
      S(), k((bt) => pa(bt, A.x, A.y, Vn, w.z)), b({ kind: "erasing", lastX: A.x, lastY: A.y });
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
    const $t = new Map(m.map((bt) => [bt.id, bt])), Ct = i.current ? m.find((bt) => bt.id === i.current) : void 0, Xt = wt && Ct ? Ct : [...m].reverse().find((bt) => $e(bt, A.x, A.y, w.z, $t, m));
    if (!Xt)
      T.current = null;
    else {
      const bt = Date.now(), Yt = !N.shiftKey && p.includes(Xt.type) && ((ye = T.current) == null ? void 0 : ye.id) === Xt.id && bt - T.current.time < Lc, Ht = Yt && !Xt.locked ? Xt.id : void 0;
      T.current = Yt ? null : { id: Xt.id, time: bt };
      const Nt = N.shiftKey ? new Set(pt).add(Xt.id) : pt.has(Xt.id) ? pt : /* @__PURE__ */ new Set([Xt.id]), oe = g(Nt);
      z(oe);
      const Ut = /* @__PURE__ */ new Map(), Jt = new Set(m.filter((mt) => !mt.locked).map((mt) => mt.id));
      for (const mt of m) {
        if (mt.locked) continue;
        const te = mt.parentId !== void 0 && oe.has(mt.parentId) && Jt.has(mt.parentId);
        (oe.has(mt.id) || te) && Ut.set(mt.id, mt);
      }
      for (const mt of m) {
        if (mt.type !== "frame" || mt.locked || !oe.has(mt.id)) continue;
        const te = dt(mt);
        for (const Pt of m) {
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
    const j = Y(N.clientX, N.clientY), ct = Bt(E);
    S(), b({
      kind: "rotate",
      id: E.id,
      startAngle: Math.atan2(j.y - ct.y, j.x - ct.x),
      startRotation: E.rotation ?? 0
    });
  }, onConnectHandleDown: (N, E) => {
    N.stopPropagation(), r.current.set(N.pointerId, { x: N.clientX, y: N.clientY });
    const j = Y(N.clientX, N.clientY);
    b({ kind: "connect", fromId: E.id, toX: j.x, toY: j.y, hoverId: null });
  }, onBendHandleDown: (N, E) => {
    N.stopPropagation(), !E.locked && (r.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), S(), b({ kind: "bend", id: E.id }));
  }, onOrthogonalSegmentHandleDown: (N, E, j) => {
    N.stopPropagation(), r.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), !E.locked && (S(), b({ kind: "orthogonal-segment", id: E.id, segmentIndex: j }));
  }, onArrowEndpointDown: (N, E, j) => {
    N.stopPropagation(), !E.locked && (r.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), S(), b({ kind: "arrow-endpoint", id: E.id, endpoint: j, hoverId: null }));
  } };
}
function Fc({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: r,
  shapesRef: o,
  setShapes: i,
  setEditingId: s,
  setEraserPos: l,
  setGuides: f,
  setAnnouncement: v,
  applyInteraction: c,
  selectNow: y,
  expandToGroups: a,
  endHistory: u,
  commit: d,
  onToolChange: w,
  createId: m,
  drawing: x
}) {
  const h = m;
  St(() => {
    const p = (k) => {
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
        if (f([]), $.kind === "lasso") {
          if (k.type === "pointerup") {
            const S = r(k.clientX, k.clientY), M = $.points[$.points.length - 1], X = M && Math.hypot(S.x - M.x, S.y - M.y) > 1e-9 ? [...$.points, S] : $.points, I = X.length >= 3 ? o.current.filter((Y) => !Y.locked && la(Bt(Y), X)).map((Y) => Y.id) : [], g = $.additive ? $.baseSelection : [];
            y(a(/* @__PURE__ */ new Set([...g, ...I]))), v(I.length > 0 ? `${I.length}개 올가미 선택됨` : "올가미 안에 선택할 항목이 없습니다");
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
          const X = { x: $.toX, y: $.toY }, I = Bt(M);
          if (!$.hoverId && Math.hypot(X.x - I.x, X.y - I.y) < 30) return;
          const g = [];
          let Y = $.hoverId, F = null;
          if (!Y) {
            const P = {
              ...M,
              id: h(),
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
            g.push(P), F = P, Y = P.id;
          }
          const W = {
            id: h(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: M.id,
            toId: Y,
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
            const I = At(X);
            return { ...X, x: I.minX, y: I.minY, w: I.maxX - I.minX, h: I.maxY - I.minY };
          })), u(), y(/* @__PURE__ */ new Set([$.id])), w("select"), c({ kind: "none" });
          return;
        }
        if (($.kind === "move" || $.kind === "resize" || $.kind === "rotate" || $.kind === "orthogonal-segment" || $.kind === "arrow-endpoint") && u(), $.kind === "move" && $.editOnReleaseId && k.type === "pointerup") {
          const S = r(k.clientX, k.clientY);
          Math.hypot(S.x - $.startX, S.y - $.startY) * n.current.z <= ba && s($.editOnReleaseId);
        }
        c({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p), () => {
      window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p);
    };
  }, [
    c,
    n,
    m,
    x,
    u,
    e,
    w,
    t,
    y,
    a,
    v,
    s,
    f,
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
function Dc({
  objectSnapEnabled: t,
  containerRef: e,
  pointers: n,
  interactionRef: r,
  cameraRef: o,
  shapesRef: i,
  setCamera: s,
  setShapes: l,
  setEraserPos: f,
  setGuides: v,
  applyInteraction: c,
  selectNow: y,
  expandToGroups: a,
  toPage: u,
  drawing: d
}) {
  St(() => {
    const w = (m) => {
      var k, $;
      if (!n.current.has(m.pointerId)) return;
      n.current.set(m.pointerId, { x: m.clientX, y: m.clientY });
      const x = r.current;
      if (x.kind === "none") return;
      const h = o.current;
      if (x.kind === "pinch") {
        if (n.current.size < 2) return;
        const [b, z] = [...n.current.values()], S = Math.hypot(z.x - b.x, z.y - b.y) || 1, M = (b.x + z.x) / 2, X = (b.y + z.y) / 2, I = (k = e.current) == null ? void 0 : k.getBoundingClientRect();
        if (!I) return;
        const g = Math.min(wa, Math.max(ya, x.startZoom * (S / x.startDist))), Y = x.camX + (x.startMidX - I.left) / x.startZoom, F = x.camY + (x.startMidY - I.top) / x.startZoom;
        s({ x: Y - (M - I.left) / g, y: F - (X - I.top) / g, z: g });
        return;
      }
      if (x.kind === "pan") {
        s({
          x: x.camX - (m.clientX - x.startX) / h.z,
          y: x.camY - (m.clientY - x.startY) / h.z,
          z: h.z
        });
        return;
      }
      const p = u(m.clientX, m.clientY);
      if (x.kind === "erasing") {
        const b = Hn(m).map((M) => u(M.clientX, M.clientY)), z = [{ x: x.lastX, y: x.lastY }, ...b];
        l((M) => {
          let X = M;
          for (let I = 1; I < z.length; I++)
            X = Gn(X, z[I - 1], z[I], Vn, h.z);
          return X;
        });
        const S = b.at(-1);
        S && (f(S), c({ kind: "erasing", lastX: S.x, lastY: S.y }));
        return;
      }
      if (x.kind === "connect") {
        const b = i.current, z = new Map(b.map((M) => [M.id, M])), S = [...b].reverse().find((M) => M.id !== x.fromId && en.includes(M.type) && $e(M, p.x, p.y, h.z, z, b));
        c({ ...x, toX: p.x, toY: p.y, hoverId: (S == null ? void 0 : S.id) ?? null });
        return;
      }
      if (x.kind === "bend") {
        const b = i.current, z = b.find((W) => W.id === x.id);
        if (!z) return;
        const S = jt(z, new Map(b.map((W) => [W.id, W])), b), M = S.end.x - S.start.x, X = S.end.y - S.start.y, I = Math.hypot(M, X) || 1, g = (S.start.x + S.end.x) / 2, Y = (S.start.y + S.end.y) / 2, F = (p.x - g) * (-X / I) + (p.y - Y) * (M / I);
        l((W) => W.map((P) => P.id === x.id ? { ...P, bend: F } : P));
        return;
      }
      if (x.kind === "orthogonal-segment") {
        const b = i.current, z = b.find((F) => F.id === x.id);
        if (!z) return;
        const S = jt(z, new Map(b.map((F) => [F.id, F])), b), M = S.routing === "orthogonal" ? S.pathPoints : void 0;
        if (!M || M.length < 2) return;
        const X = M[x.segmentIndex], I = M[x.segmentIndex + 1];
        if (!X || !I) return;
        const g = X.x === I.x ? p.x : p.y, Y = Ai(M, x.segmentIndex, g);
        l((F) => F.map((W) => W.id === x.id ? { ...W, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: Y.slice(1, -1).map((P) => ({ x: P.x, y: P.y })) } : W));
        return;
      }
      if (x.kind === "arrow-endpoint") {
        const b = i.current, z = b.find((Y) => Y.id === x.id);
        if (!z) return;
        const S = new Map(b.map((Y) => [Y.id, Y])), M = jt(z, S, b), X = x.endpoint === "start" ? M.end : M.start, I = [...b].reverse().find((Y) => Y.id !== z.id && en.includes(Y.type) && $e(Y, p.x, p.y, h.z, S, b)), g = I ? me(I, X.x, X.y) : { x: p.x, y: p.y };
        c({ ...x, hoverId: (I == null ? void 0 : I.id) ?? null }), l((Y) => Y.map((F) => {
          if (F.id !== z.id) return F;
          const W = x.endpoint === "start" ? g : X, P = x.endpoint === "end" ? g : X;
          return {
            ...F,
            x: W.x,
            y: W.y,
            w: P.x - W.x,
            h: P.y - W.y,
            fromId: x.endpoint === "start" ? I == null ? void 0 : I.id : F.fromId,
            toId: x.endpoint === "end" ? I == null ? void 0 : I.id : F.toId
          };
        }));
        return;
      }
      if (x.kind === "marquee") {
        c({ ...x, curX: p.x, curY: p.y });
        const b = Math.min(x.startX, p.x), z = Math.max(x.startX, p.x), S = Math.min(x.startY, p.y), M = Math.max(x.startY, p.y), X = Math.min(x.screenStartX, m.clientX), I = Math.max(x.screenStartX, m.clientX), g = Math.min(x.screenStartY, m.clientY), Y = Math.max(x.screenStartY, m.clientY), F = /* @__PURE__ */ new Map();
        ($ = e.current) == null || $.querySelectorAll("[data-canvas-shape-id]").forEach((P) => {
          const L = P.dataset.canvasShapeId;
          L && F.set(L, P.getBoundingClientRect());
        });
        const W = i.current.filter((P) => {
          if (P.locked) return !1;
          const L = F.get(P.id);
          if (L)
            return L.right >= X && L.left <= I && L.bottom >= g && L.top <= Y;
          const O = dt(P);
          return O.maxX >= b && O.minX <= z && O.maxY >= S && O.minY <= M;
        }).map((P) => P.id);
        y(a(new Set(W)));
        return;
      }
      if (x.kind === "lasso") {
        const b = 2 / Math.max(h.z, 0.1);
        let z = x.points;
        for (const S of Hn(m)) {
          const M = u(S.clientX, S.clientY), X = z[z.length - 1];
          (!X || Math.hypot(M.x - X.x, M.y - X.y) >= b) && (z = [...z, M]);
        }
        z !== x.points && c({ ...x, points: z });
        return;
      }
      if (x.kind === "move") {
        let b = p.x - x.startX, z = p.y - x.startY;
        const S = x.origin;
        if (t) {
          const M = (() => {
            let g = 1 / 0, Y = 1 / 0, F = -1 / 0, W = -1 / 0;
            return S.forEach((P) => {
              const L = dt({ ...P, x: P.x + b, y: P.y + z });
              g = Math.min(g, L.minX), Y = Math.min(Y, L.minY), F = Math.max(F, L.maxX), W = Math.max(W, L.maxY);
            }), { minX: g, minY: Y, maxX: F, maxY: W };
          })(), X = i.current.filter((g) => !S.has(g.id)), I = ma(M, X, h.z);
          b += I.dx, z += I.dy, v(I.guides);
        } else
          v([]);
        l((M) => M.map((X) => {
          var g;
          const I = S.get(X.id);
          return I ? {
            ...X,
            x: I.x + b,
            y: I.y + z,
            points: (g = I.points) == null ? void 0 : g.map(([Y, F]) => [Y + b, F + z]),
            ...I.type === "arrow" && I.orthogonalWaypoints ? { orthogonalWaypoints: I.orthogonalWaypoints.map((Y) => ({ x: Y.x + b, y: Y.y + z })) } : {}
          } : X;
        }));
        return;
      }
      if (x.kind === "drawing") {
        if (x.pointerId !== m.pointerId) return;
        d.move(m);
        return;
      }
      if (x.kind === "creating") {
        l((b) => b.map((z) => z.id === x.id ? { ...z, w: p.x - x.startX, h: p.y - x.startY } : z));
        return;
      }
      if (x.kind === "rotate") {
        const b = i.current.find((X) => X.id === x.id);
        if (!b) return;
        const z = Bt(b), S = Math.atan2(p.y - z.y, p.x - z.x);
        let M = x.startRotation + (S - x.startAngle);
        m.shiftKey && (M = Math.round(M / (Math.PI / 12)) * (Math.PI / 12)), l((X) => X.map((I) => I.id === x.id ? { ...I, rotation: M } : I));
        return;
      }
      if (x.kind === "resize") {
        const { start: b, handle: z } = x, S = Je(b, p.x, p.y);
        l((M) => M.map((X) => {
          if (X.id !== b.id) return X;
          let { x: I, y: g, w: Y, h: F } = b;
          if (z.includes("e") && (Y = Math.max(20, S.x - b.x)), z.includes("s") && (F = Math.max(20, S.y - b.y)), z.includes("w")) {
            const W = b.x + b.w;
            I = Math.min(S.x, W - 20), Y = W - I;
          }
          if (z.includes("n")) {
            const W = b.y + b.h;
            g = Math.min(S.y, W - 20), F = W - g;
          }
          return { ...X, x: I, y: g, w: Y, h: F, manualSize: X.type === "text" ? !0 : X.manualSize };
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
function Wc(t) {
  Dc(t), Fc(t);
}
function Oc(t) {
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
    }, f = () => {
      r.current !== null && cancelAnimationFrame(r.current), r.current = null;
    }, v = () => {
      var w;
      const a = e.current, u = a.activeDrawRef.current, d = n.current.splice(0);
      (u == null ? void 0 : u.id) === ((w = i.current) == null ? void 0 : w.shapeId) && (u != null && u.points) && Kr(u.points, d, a.cameraRef.current.z, u.type === "draw" ? u.inkStyle : void 0);
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
        f(), n.current = [], i.current = { shapeId: a.id, pointerId: u.pointerId, raw: !1 }, e.current.activeDrawRef.current = a, e.current.applyInteraction({ kind: "drawing", id: a.id, pointerId: u.pointerId }), l();
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
            f(), n.current = [];
            const m = u.toPage(a.clientX, a.clientY);
            w.points = [w.points[0], [m.x, m.y]], l();
            return;
          }
          for (const m of Hn(a)) {
            const x = u.toPage(m.clientX, m.clientY);
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
        f(), v();
        const m = w.activeDrawRef.current;
        if (d && (m == null ? void 0 : m.id) === d.shapeId && m.points) {
          if ((a == null ? void 0 : a.type) === "pointerup" && Number.isFinite(a.clientX) && Number.isFinite(a.clientY)) {
            const x = w.toPage(a.clientX, a.clientY);
            Kr(m.points, [[x.x, x.y]], w.cameraRef.current.z, m.type === "draw" ? m.inkStyle : void 0);
          }
          w.pendingDrawsRef.current.push(Pc(m)), w.activeDrawRef.current = null, w.pointers.current.delete(d.pointerId), w.interactionRef.current.kind === "drawing" && w.applyInteraction({ kind: "none" }), l();
        }
        i.current = null, u ? (o.current !== null && cancelAnimationFrame(o.current), c()) : o.current === null && (o.current = requestAnimationFrame(c));
      },
      cancel() {
        var d;
        f(), n.current = [];
        const a = e.current, u = i.current;
        u && ((d = a.activeDrawRef.current) == null ? void 0 : d.id) === u.shapeId && (a.activeDrawRef.current = null, a.pointers.current.delete(u.pointerId), a.interactionRef.current.kind === "drawing" && a.applyInteraction({ kind: "none" }), l()), i.current = null;
      }
    };
  }, []);
  return St(() => {
    const l = t.containerRef.current, f = (a) => {
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
    return window.addEventListener("pointerrawupdate", s.move), window.addEventListener("blur", v), window.addEventListener("keydown", y), document.addEventListener("visibilitychange", c), l == null || l.addEventListener("lostpointercapture", f), () => {
      window.removeEventListener("pointerrawupdate", s.move), window.removeEventListener("blur", v), window.removeEventListener("keydown", y), document.removeEventListener("visibilitychange", c), l == null || l.removeEventListener("lostpointercapture", f), r.current !== null && cancelAnimationFrame(r.current), o.current !== null && cancelAnimationFrame(o.current), r.current = null, o.current = null, n.current = [], i.current = null;
    };
  }, [s, t.containerRef]), s;
}
function _c({ containerRef: t, penModeRef: e, toolRef: n }) {
  St(() => {
    const r = t.current;
    if (!r) return;
    const o = r.ownerDocument, i = o.defaultView, s = /* @__PURE__ */ new Set(), l = (c) => {
      const y = Array.from(c.changedTouches), a = c.type !== "touchstart" && y.some((h) => s.has(h.identifier));
      if (c.type !== "touchstart")
        for (const h of y) s.delete(h.identifier);
      if (c.type === "touchcancel") return;
      const u = c.target instanceof Element ? c.target : null;
      if (u != null && u.closest("button, input, textarea, select, a, [data-canvas-inspector], [data-canvas-pen-palette]")) return;
      const d = n.current, w = d === "draw" || d === "highlighter" || d === "eraser", m = y.some((h) => h.touchType === "stylus"), x = c.type === "touchstart" && Zn() && d !== "note" && d !== "text" && !(u != null && u.closest('[contenteditable="true"]')) && y.some((h) => {
        const p = h.radiusX || 0;
        return h.clientX - p < 10 || h.clientX + p > ((i == null ? void 0 : i.innerWidth) ?? 1 / 0) - 10;
      });
      if (!(!a && !e.current && !w && !m && !x)) {
        if (c.type === "touchstart")
          for (const h of y)
            Number.isFinite(h.identifier) && s.add(h.identifier);
        c.cancelable && c.preventDefault();
      }
    }, f = (c) => {
      const y = c.target instanceof Node && r.contains(c.target), a = o.activeElement && r.contains(o.activeElement);
      (y || a) && c.cancelable && c.preventDefault();
    }, v = { passive: !1, capture: !0 };
    for (const c of ["touchstart", "touchend", "touchcancel"])
      r.addEventListener(c, l, v);
    for (const c of ["gesturestart", "gesturechange", "gestureend"])
      o.addEventListener(c, f, v);
    return () => {
      for (const c of ["touchstart", "touchend", "touchcancel"])
        r.removeEventListener(c, l, !0);
      for (const c of ["gesturestart", "gesturechange", "gestureend"])
        o.removeEventListener(c, f, !0);
    };
  }, [t, e, n]);
}
function Ac({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: r,
  editingIdRef: o,
  cameraRef: i,
  shapesRef: s,
  selectedRef: l,
  toolRef: f,
  penModeRef: v,
  activeColorRef: c,
  drawColorRef: y,
  drawStrokeWidth: a,
  drawInkStyle: u,
  objectSnapEnabled: d,
  camera: w,
  shapes: m,
  selected: x,
  isSpaceDown: h,
  textualTypes: p,
  setCamera: k,
  setShapes: $,
  setEditingId: b,
  setEraserPos: z,
  setGuides: S,
  setAnnouncement: M,
  applyInteraction: X,
  selectNow: I,
  beginHistory: g,
  endHistory: Y,
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
  _c({ containerRef: t, penModeRef: v, toolRef: f });
  const U = Oc({
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
  }), et = Tc({
    drawing: U,
    containerRef: t,
    editorRef: e,
    pointers: n,
    interactionRef: r,
    editingIdRef: o,
    cameraRef: i,
    shapesRef: s,
    selectedRef: l,
    toolRef: f,
    penModeRef: v,
    activeColorRef: c,
    drawColorRef: y,
    drawStrokeWidth: a,
    drawInkStyle: u,
    camera: w,
    shapes: m,
    selected: x,
    isSpaceDown: h,
    textualTypes: p,
    setShapes: $,
    setEditingId: b,
    applyInteraction: X,
    selectNow: I,
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
  return Wc({
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
    selectNow: I,
    endHistory: Y,
    commit: W,
    onToolChange: P,
    expandToGroups: L,
    toPage: O,
    createId: D
  }), et;
}
function Bc(t) {
  $c(t);
  const e = Zt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return Xc({ ...t, toolRef: e }), Ac(t);
}
function Hc({
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
function Kc({ shapes: t, camera: e, isDarkMode: n, viewSize: r, onCenter: o }) {
  const i = it(null), s = it(!1), l = (x) => {
    const h = dt(x);
    return { x: h.minX, y: h.minY, width: h.maxX - h.minX, height: h.maxY - h.minY };
  }, f = t.length > 0 ? t.map(l).reduce((x, h) => ({
    x: Math.min(x.x, h.x),
    y: Math.min(x.y, h.y),
    width: Math.max(x.x + x.width, h.x + h.width) - Math.min(x.x, h.x),
    height: Math.max(x.y + x.height, h.y + h.height) - Math.min(x.y, h.y)
  })) : { x: 0, y: 0, width: 0, height: 0 }, v = {
    x: e.x,
    y: e.y,
    width: r.width / e.z,
    height: r.height / e.z
  }, c = vi(f, v, fe), y = (x) => {
    const h = i.current;
    if (!h) return null;
    const p = h.getBoundingClientRect(), k = p.width > 0 ? fe.width / p.width : 1, $ = p.height > 0 ? fe.height / p.height : 1;
    return c.toWorld({
      x: (x.clientX - p.left) * k,
      y: (x.clientY - p.top) * $
    });
  }, a = (x) => {
    x.stopPropagation(), x.preventDefault(), s.current = !0;
    try {
      x.currentTarget.setPointerCapture(x.pointerId);
    } catch {
    }
    const h = y(x);
    h && o(h);
  }, u = (x) => {
    if (!s.current) return;
    x.stopPropagation();
    const h = y(x);
    h && o(h);
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
          const h = l(x), p = c.toMinimap(h), k = x.color ? ft[x.color].bg : V.marqueeFill;
          return /* @__PURE__ */ C(
            "rect",
            {
              "data-canvas-minimap-shape": x.id,
              x: p.x,
              y: p.y,
              width: Math.max(1.5, p.width),
              height: Math.max(1.5, p.height),
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
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = Di, document.head.appendChild(t);
}
const xe = 0.1, ne = 4, Ur = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function Xo(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Rr(t, e, n) {
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
        return Xo(r);
    }
  });
}
function Gr(t, e, n) {
  return t.map((r) => e.has(r.id) && r.type === "draw" && !r.locked ? { ...r, ...n } : r);
}
function Vr(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const qc = li(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: r,
  activeColor: o,
  defaultActiveColor: i,
  onActiveColorChange: s,
  drawStrokeWidth: l = 4,
  onToolChange: f,
  onDirty: v,
  onZoomChange: c,
  onSelectionChange: y,
  shapes: a,
  onShapesChange: u,
  peerCursors: d,
  onLocalCursor: w,
  renderDiagram: m,
  drawInkStyle: x,
  onDrawInkStyleChange: h,
  objectSnapEnabled: p,
  onObjectSnapEnabledChange: k,
  showGrid: $,
  onShowGridChange: b,
  showMinimap: z,
  onShowMinimapChange: S
}, M) {
  var ar, cr, sr, lr;
  const { drawInkStyle: X, objectSnapEnabled: I, showGrid: g, minimapEnabled: Y, selectInkStyle: F, selectObjectSnap: W, selectMinimap: P } = lc({
    drawInkStyle: x,
    onDrawInkStyleChange: h,
    objectSnapEnabled: p,
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
    setIsPenMode: Yt,
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
    liveStrokeCanvasRef: Lt,
    activeDrawRef: Dt,
    pendingDrawsRef: ee,
    queuedDrawIdsRef: xn,
    commitDrawBatch: Io
  } = dc({ boardIdentity: e, tool: r, activeColor: o, defaultActiveColor: i, onActiveColorChange: s, controlledShapes: a, onShapesChange: u, onDirty: v }), Yo = lt.useRef(null), [pn, Qn] = lt.useState(!1), [mn, No] = lt.useState(""), [vn, gn] = lt.useState(-1), Jn = lt.useRef(null), Ie = lt.useMemo(() => vc(tt, mn), [tt, mn]);
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
    const { width: Wt, height: Tt } = ie();
    if (Wt <= 0 || Tt <= 0) return;
    const ht = dt(gt), kt = Math.min(
      1,
      et.current.z,
      Math.max(xe, Math.min(Wt / (ht.maxX - ht.minX + 160), Tt / (ht.maxY - ht.minY + 160)))
    );
    U(Ln(
      { x: (ht.minX + ht.maxX) / 2, y: (ht.minY + ht.maxY) / 2 },
      Wt,
      Tt,
      kt
    )), Ct(`${ut}로 이동`);
  }, [et, we, Ct, U, G]), Po = lt.useCallback((_) => {
    tr(vn + _, Ie);
  }, [vn, Ie, tr]), er = lt.useCallback(() => {
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
  }, [et, U]), Eo = lt.useCallback((_) => {
    const rt = nt.current, J = G.current, { width: ut, height: gt } = ie();
    if (J.length === 0 || ut <= 0 || gt <= 0) return;
    const Wt = Ee(Ve(J), ut, gt, xe, ne).z, Tt = Ve(J.filter((be) => rt.has(be.id))), ht = Tt ? Ee(Tt, ut, gt, xe, ne).z : null, kt = gi(et.current.z, Wt, ht, _);
    kt && (kt === "all" ? yn() : kt === "selection" ? wn() : bn());
  }, [et, yn, wn, nt, G, bn]), Lo = lt.useCallback((_) => {
    const rt = G.current.find((Wt) => Wt.id === _), { width: J, height: ut } = ie();
    if (!rt || J <= 0 || ut <= 0) return;
    const gt = dt(rt);
    mc(gt, et.current, J, ut) || U(Ln(
      { x: (gt.minX + gt.maxX) / 2, y: (gt.minY + gt.maxY) / 2 },
      J,
      ut,
      et.current.z
    ));
  }, [et, U, G]), To = lt.useCallback((_) => {
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
    smartZoom: Eo,
    revealShape: Lo
  }, re(() => {
    const _ = Lt.current, rt = D.current;
    if (!_ || !rt) return;
    const J = () => {
      const gt = Ec(_, rt.clientWidth, rt.clientHeight, window.devicePixelRatio || 1), Wt = new Set(tt.map((Tt) => Tt.id));
      ee.current = ee.current.filter((Tt) => !Wt.has(Tt.id));
      for (const Tt of Wt) xn.current.delete(Tt);
      on(_, ee.current, Dt.current, et.current, gt);
    };
    if (J(), typeof ResizeObserver > "u")
      return window.addEventListener("resize", J), () => window.removeEventListener("resize", J);
    const ut = new ResizeObserver(J);
    return ut.observe(rt), window.addEventListener("resize", J), () => {
      ut.disconnect(), window.removeEventListener("resize", J);
    };
  }, [Dt, Q, et, D, Lt, ee, xn, tt]);
  const kn = pc({
    containerRef: D,
    shapesRef: G,
    clipboardRef: Yo,
    selectedRef: nt,
    commit: Kt,
    deleteSelection: We,
    selectNow: we,
    setAnnouncement: Ct,
    createId: Vr
  }), {
    inspectorSelection: _e,
    inspectorShape: Ye,
    hoveredShapeId: Fo,
    onContainerPointerMove: Do,
    onContainerPointerLeave: Wo
  } = uc({
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
    textualTypes: Ur,
    onZoomChange: c,
    onSelectionChange: y,
    onLocalCursor: w,
    toPage: Oe
  }), [rr, Mn] = lt.useState(!1);
  lt.useEffect(() => {
    Ye || Mn(!1);
  }, [Ye]);
  const Sn = lt.useCallback((_) => {
    const rt = new Set(nt.current);
    rt.size !== 0 && Kt((J) => Rr(J, rt, _));
  }, [Kt, nt]), Oo = lt.useCallback((_) => {
    O(_), Sn(_);
  }, [Sn]), _o = lt.useCallback((_) => {
    Jt(_);
    const rt = new Set(
      G.current.filter((J) => J.type === "draw" && nt.current.has(J.id)).map((J) => J.id)
    );
    rt.size > 0 && Kt((J) => Gr(J, rt, { color: _ }));
  }, [Kt, nt, Jt, G]), {
    onPointerDown: Ao,
    onResizeHandleDown: Bo,
    onRotateHandleDown: Ho,
    onConnectHandleDown: Ko,
    onBendHandleDown: jo,
    onOrthogonalSegmentHandleDown: Uo,
    onArrowEndpointDown: Ro
  } = Bc({
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
    objectSnapEnabled: I,
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
    onToolChange: f,
    controlled: R,
    isDarkMode: n,
    minZoom: xe,
    maxZoom: ne,
    textualTypes: Ur,
    selectedRef: nt,
    editingIdRef: j,
    setIsSpaceDown: vt,
    viewportCentre: B,
    setLocalShapes: H,
    expandToGroups: q,
    toPage: Oe,
    createId: Vr,
    liveStrokeCanvasRef: Lt,
    activeDrawRef: Dt,
    pendingDrawsRef: ee,
    queuedDrawIdsRef: xn,
    commitDrawBatch: Io,
    setIsPenMode: Yt
  }), { cursor: Go, gridColor: Vo, gridSize: or, strokeColorOf: qo } = Hc({
    isDarkMode: n,
    tool: r === "highlighter" ? "draw" : r,
    isSpaceDown: zt,
    interaction: ct,
    zoom: Q.z
  }), $n = (_) => {
    const rt = nt.current, J = j.current, ut = new Set(rt);
    if (J && ut.add(J), ut.size === 0) return;
    const gt = "strokeWidth" in _, Wt = Object.keys(_).every((ht) => ht === "color" || ht === "fillColor" || ht === "strokeColor" || ht === "strokeWidth");
    if (_e.length > 0 && _e.every((ht) => ht.type === "draw") && Wt) {
      const ht = "color" in _ ? _.color : void 0, kt = "strokeWidth" in _ ? _.strokeWidth : void 0, be = "strokeColor" in _ ? _.strokeColor : void 0;
      Kt((ci) => Gr(ci, ut, {
        ...ht !== void 0 ? { color: ht } : {},
        ...kt !== void 0 ? { strokeWidth: kt } : {},
        ...be !== void 0 ? { strokeColor: be } : {}
      }));
      return;
    }
    if (gt) {
      const ht = _.strokeWidth;
      if (ht !== void 0 && Object.keys(_).length === 1) {
        Kt((kt) => Rr(kt, ut, ht));
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
          return Xo(kt);
      }
    }));
  }, {
    commitEditorHtml: Zo,
    applyFormat: Qo,
    applyList: Jo,
    onEditorKeyDown: ti,
    applyCustomFontFamily: ei
  } = sc({
    editorRef: T,
    editingId: N,
    setShapes: ot,
    setAnnouncement: Ct,
    onDirty: v,
    patchSelected: $n
  }), { renderEditor: ni, renderShapeBody: ri } = ac({
    camera: Q,
    editingId: N,
    isDarkMode: n,
    editorRef: T,
    commitEditorHtml: Zo,
    onEditorKeyDown: ti,
    setShapes: ot,
    onDirty: v,
    renderDiagram: m
  }), oi = ct.kind === "marquee" ? ct : null, ii = ct.kind === "lasso" ? ct : null, ai = lt.useCallback(() => {
    var _;
    Pt.current.clear(), Dt.current = null, wt({ kind: "none" }), on(
      Lt.current,
      ee.current,
      null,
      et.current,
      window.devicePixelRatio || 1
    ), Yt(!1), f("select"), (_ = D.current) == null || _.focus();
  }, [
    Dt,
    wt,
    et,
    D,
    Lt,
    f,
    ee,
    Pt,
    Yt
  ]), { shapeById: ir, visiblePaintOrder: Cn } = cc({
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
      onPointerDown: Ao,
      onPointerMove: Do,
      onPointerLeave: Wo,
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
        cursor: Go,
        background: n ? V.canvasDark : V.canvasLight,
        backgroundImage: g ? `radial-gradient(${Vo} 1px, transparent 1px)` : "none",
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
            ga,
            {
              visiblePaintOrder: Cn,
              selected: at,
              shapeById: ir,
              allShapes: G.current,
              camera: Q,
              interaction: ct,
              eraserPos: ge,
              guides: I ? A : [],
              marquee: oi,
              lasso: ii,
              strokeColorOf: qo
            }
          ),
          /* @__PURE__ */ C("canvas", { style: { zIndex: Cn.length + 1 }, ref: Lt, "aria-hidden": "true", "data-canvas-live-strokes": "true", className: "absolute inset-0 w-full h-full pointer-events-none" }),
          /* @__PURE__ */ C(
            _a,
            {
              visiblePaintOrder: Cn,
              selected: at,
              editingId: N,
              camera: Q,
              shapeById: ir,
              allShapes: G.current,
              peerCursors: d,
              hoveredShapeId: Fo,
              dotsEnabled: r === "select" && ct.kind === "none",
              isDarkMode: n,
              renderEditor: ni,
              renderShapeBody: ri,
              setEditingId: E,
              onBendHandleDown: jo,
              onOrthogonalSegmentHandleDown: Uo,
              onResizeHandleDown: Bo,
              onRotateHandleDown: Ho,
              onConnectHandleDown: Ko,
              onArrowEndpointDown: Ro
            }
          )
        ] }),
        Ye && (rr || !!N) && r !== "draw" && r !== "highlighter" && r !== "eraser" && /* @__PURE__ */ C(
          qa,
          {
            shape: Ye,
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
            applyFormat: Qo,
            applyList: Jo,
            applyCustomFontFamily: ei,
            onClose: () => Mn(!1)
          }
        ),
        Ye && !rr && !N && ct.kind === "none" && r !== "draw" && r !== "highlighter" && r !== "eraser" && /* @__PURE__ */ C(
          ec,
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
        bt && /* @__PURE__ */ C(oc, { isDarkMode: n, onExit: ai }),
        /* @__PURE__ */ C(
          rc,
          {
            tool: r,
            activeColor: Ut,
            drawStrokeWidth: L,
            drawInkStyle: X,
            objectSnapEnabled: I,
            onSelectInkStyle: F,
            onSelectObjectSnap: W,
            isDarkMode: n,
            onSelectColor: _o,
            onSelectStrokeWidth: Oo
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
                    No(_.target.value), gn(-1);
                  },
                  onKeyDown: (_) => {
                    _.key === "Enter" ? (_.preventDefault(), Po(_.shiftKey ? -1 : 1)) : _.key === "Escape" && (_.preventDefault(), er());
                  },
                  placeholder: "찾기",
                  "aria-label": "캔버스에서 찾기",
                  className: `w-56 bg-transparent outline-none text-sm ${n ? "placeholder-slate-500" : "placeholder-slate-400"}`
                }
              ),
              /* @__PURE__ */ C("span", { "data-canvas-find-count": "true", className: "text-xs opacity-60 tabular-nums min-w-8 text-center", children: Ie.length === 0 ? "0/0" : `${Math.min(vn + 1, Ie.length)}/${Ie.length}` }),
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
          Y && tt.length > 0 && /* @__PURE__ */ C(
            Kc,
            {
              shapes: tt,
              camera: Q,
              isDarkMode: n,
              onCenter: To,
              viewSize: ie()
            }
          ),
          /* @__PURE__ */ C(
            "button",
            {
              type: "button",
              "data-canvas-minimap-toggle": "true",
              onClick: () => P(!Y),
              "aria-pressed": Y,
              title: "미니맵 켜기/끄기",
              className: `h-6 px-2 rounded-md text-[10px] font-semibold border shadow-sm ${n ? "bg-slate-900/90 border-slate-700 text-slate-300 hover:bg-slate-800" : "bg-white/90 border-slate-300 text-slate-600 hover:bg-slate-50"} ${Y ? "" : "opacity-60"}`,
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
  qc as InfiniteCanvas,
  mi as SHAPE_TOOLS,
  Gr as applySelectedDrawStyle,
  Rr as applySelectedStrokeWidth,
  Vc as diagramTemplate,
  Ba as getInspectorGroups,
  qn as isDiagramShape
};
