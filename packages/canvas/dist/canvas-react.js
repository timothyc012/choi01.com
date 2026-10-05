import { jsx as I, jsxs as j, Fragment as ce } from "react/jsx-runtime";
import Bt, { useRef as J, useState as it, useLayoutEffect as se, useEffect as vt, useMemo as Wt, useCallback as at, useImperativeHandle as xo, forwardRef as po } from "react";
import { p as mr, i as gn, k as yn, a as lt, v as vo, c as Dt, s as mo, b as gr, d as ne, h as go, C as yo, S as wo } from "./document-BnozfPyY.js";
import { Minus as bo, Plus as ko, ChevronDown as So, AlignLeft as $o, AlignCenter as Mo, AlignRight as Co, List as zo, ListOrdered as Io, Bold as Xo, Italic as Yo, Underline as Po, Group as No, Ungroup as Eo, Clipboard as Lo, Copy as To, Trash2 as Do, ChevronsUp as Fo, ArrowUp as Wo, ArrowDown as Ao, ChevronsDown as Oo, ClipboardPaste as _o, RotateCcw as Ho, RotateCw as jo, Undo2 as Bo, MousePointer2 as Ko } from "lucide-react";
const Ro = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-900-90: rgba(15,23,42,.9);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-90: rgba(255,255,255,.9);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas *{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}.invoicex-canvas input,.invoicex-canvas textarea,.invoicex-canvas [contenteditable=true],.invoicex-canvas [contenteditable=true] *{-webkit-user-select:text;user-select:text}.invoicex-canvas a{-webkit-touch-callout:initial}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .top-4{top:1rem}.invoicex-canvas .left-0{left:0}.invoicex-canvas .left-1\\/2{left:50%}.invoicex-canvas .right-0{right:0}.invoicex-canvas .right-4{right:1rem}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .bottom-4{bottom:1rem}.invoicex-canvas .right-safe-4{right:max(1rem,env(safe-area-inset-right))}.invoicex-canvas .bottom-safe-4{bottom:max(1rem,env(safe-area-inset-bottom))}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .min-h-11{min-height:2.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .inline-flex{display:inline-flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .px-3\\.5{padding-left:.875rem;padding-right:.875rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .py-2{padding-top:.5rem;padding-bottom:.5rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-2{padding-right:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .mr-1{margin-right:.25rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{user-select:none;-webkit-user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .-translate-x-1\\/2{transform:translate(-50%)}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-sm{font-size:.875rem;line-height:1.25rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-900\\/90{background-color:var(--canvas-slate-900-90)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-white\\/90{background-color:var(--canvas-white-90)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-l{border-left-width:1px;border-left-style:solid}.invoicex-canvas .border-r{border-right-width:1px;border-right-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .focus-visible\\:outline:focus-visible{outline-style:solid}.invoicex-canvas .focus-visible\\:outline-2:focus-visible{outline-width:2px}.invoicex-canvas .focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.invoicex-canvas .focus-visible\\:outline-blue-500:focus-visible{outline-color:var(--canvas-blue-500)}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .backdrop-blur-md{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.invoicex-canvas .transition-all{transition-property:all;transition-duration:.15s}.invoicex-canvas .transition-transform{transition-property:transform;transition-duration:.15s}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-selection-action-buttons{min-width:0}.invoicex-canvas .canvas-selection-action-buttons>button{flex:0 0 auto}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(max-width:400px){.invoicex-canvas .canvas-selection-actions{flex-direction:column;align-items:stretch;gap:.25rem}.invoicex-canvas .canvas-selection-label{padding-left:.25rem}.invoicex-canvas .canvas-selection-action-buttons{flex-wrap:nowrap;gap:.125rem;overflow-x:auto;scrollbar-width:none}.invoicex-canvas .canvas-selection-action-buttons::-webkit-scrollbar{display:none}}@media(max-width:360px){.invoicex-canvas .canvas-selection-action-buttons>button{width:1.75rem;height:1.75rem;flex-basis:1.75rem}}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}:where(.invoicex-canvas) button{border:0 solid;background-color:transparent;font-family:inherit;cursor:pointer}:where(.invoicex-canvas) .bg-current{background-color:currentColor}', U = Object.freeze({
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
}), yr = 12;
function un(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function Ie(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function Xe(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function Ye(t, e, n, r) {
  const i = Xe(t, e, n), l = Xe(t, e, r), s = Xe(n, r, t), x = Xe(n, r, e);
  return Math.abs(i) < 1e-6 && Ie(t, n, e) || Math.abs(l) < 1e-6 && Ie(t, r, e) || Math.abs(s) < 1e-6 && Ie(n, t, r) || Math.abs(x) < 1e-6 && Ie(n, e, r) ? !0 : i > 0 != l > 0 && s > 0 != x > 0;
}
function Uo(t, e, n) {
  const r = Math.min(t.x, e.x), o = Math.max(t.x, e.x), i = Math.min(t.y, e.y), l = Math.max(t.y, e.y);
  if (o < n.minX || r > n.maxX || l < n.minY || i > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const s = { x: n.minX, y: n.minY }, x = { x: n.maxX, y: n.minY }, p = { x: n.maxX, y: n.maxY }, c = { x: n.minX, y: n.maxY };
  return Ye(t, e, s, x) || Ye(t, e, x, p) || Ye(t, e, p, c) || Ye(t, e, c, s);
}
function Go(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const r of e)
      if (Uo(t[n - 1], t[n], r)) return !0;
  return !1;
}
function dn(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function wn(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = dn(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let r = 0;
  for (let i = 1; i < t.length; i++) {
    const l = Math.hypot(t[i].x - t[i - 1].x, t[i].y - t[i - 1].y);
    if (r + l >= n) {
      const s = (n - r) / l;
      return { x: t[i - 1].x + (t[i].x - t[i - 1].x) * s, y: t[i - 1].y + (t[i].y - t[i - 1].y) * s };
    }
    r += l;
  }
  const o = t[t.length - 1];
  return { x: o.x, y: o.y };
}
function we(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function En(t, e, n, r) {
  const o = /* @__PURE__ */ new Set([t, e]), i = Math.min(t, e), l = Math.max(t, e), s = yr * 1.2;
  for (const x of n) {
    const p = (r === "x" ? x.minX : x.minY) - s, c = (r === "x" ? x.maxX : x.maxY) + s, g = (a) => a >= i - s * 4 && a <= l + s * 4;
    g(p) && o.add(p), g(c) && o.add(c);
  }
  return [...o].sort((x, p) => Math.abs(x - t) - Math.abs(p - t));
}
function wr(t) {
  const e = [];
  for (const n of t) {
    const r = e[e.length - 1];
    (!r || r.x !== n.x || r.y !== n.y) && e.push(n);
  }
  return e;
}
function br(t) {
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
function Vo(t, e, n) {
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
  return br(r);
}
function qo(t, e, n) {
  const r = t[e], o = t[e + 1];
  if (!r || !o || !Number.isFinite(n) || r.x !== o.x && r.y !== o.y) return [...t];
  const i = r.x === o.x ? [r, { x: n, y: r.y }, { x: n, y: o.y }, o] : [r, { x: r.x, y: n }, { x: o.x, y: n }, o];
  return br([
    ...t.slice(0, e),
    ...i,
    ...t.slice(e + 2)
  ]);
}
function tn(t, e) {
  const n = [], r = [];
  for (const i of t) {
    const l = wr(i);
    l.length < 2 || (Go(l, e) ? r.push(l) : n.push(l));
  }
  const o = n.length > 0 ? n : r;
  return o.length === 0 ? [] : o.reduce((i, l) => dn(l) < dn(i) ? l : i);
}
function Ln(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function fe(t, e, n, r) {
  const o = Math.min(t, e), i = Math.max(t, e), l = Math.max(48, Math.abs(e - t) * 0.35, yr * 4);
  if (r === "x") {
    if (n === "e") return i + l;
    if (n === "w") return o - l;
  } else {
    if (n === "s") return i + l;
    if (n === "n") return o - l;
  }
  return t <= e ? o - l : i + l;
}
function Zo(t, e, n, r, o) {
  const i = (t.x + e.x) / 2, l = (t.y + e.y) / 2;
  if (n === "u") {
    if (r) {
      const x = fe(t.x, e.x, t.side, "x");
      return [t, { x, y: t.y }, { x, y: e.y }, e];
    }
    const s = fe(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: s }, { x: e.x, y: s }, e];
  }
  if (n === "zigzag") {
    if (r) {
      const p = fe(t.x, e.x, t.side, "x"), c = fe(t.y, e.y, t.side, "y");
      return o ? [t, { x: p, y: t.y }, { x: p, y: c }, { x: i, y: c }, { x: i, y: e.y }, e] : [t, { x: p, y: t.y }, { x: p, y: c }, { x: e.x, y: c }, e];
    }
    const s = fe(t.y, e.y, t.side, "y"), x = fe(t.x, e.x, t.side, "x");
    return o ? [t, { x: t.x, y: s }, { x, y: s }, { x, y: e.y }, e] : [t, { x: t.x, y: s }, { x, y: s }, { x, y: l }, { x: e.x, y: l }, e];
  }
  return [];
}
function kr(t, e, n = [], r = "elbow", o = []) {
  if (o.length > 0) return Vo(t, e, o);
  const i = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), l = e.side ?? (i === "e" || i === "w" ? "w" : "n"), s = i === "e" || i === "w", x = l === "e" || l === "w", p = En(t.x, e.x, n, "x"), c = En(t.y, e.y, n, "y"), g = [];
  if (s && x) {
    for (const m of p) g.push([t, { x: m, y: t.y }, { x: m, y: e.y }, e]);
    for (const m of c) g.push([t, { x: t.x, y: m }, { x: e.x, y: m }, e]);
  } else if (!s && !x) {
    for (const m of c) g.push([t, { x: t.x, y: m }, { x: e.x, y: m }, e]);
    for (const m of p) g.push([t, { x: m, y: t.y }, { x: m, y: e.y }, e]);
  } else if (s) {
    g.push([t, { x: e.x, y: t.y }, e]);
    for (const m of c)
      g.push([t, { x: t.x, y: m }, { x: e.x, y: m }, e]), g.push([t, { x: t.x, y: m }, e]);
    for (const m of p) g.push([t, { x: m, y: t.y }, { x: m, y: e.y }, e]);
  } else {
    g.push([t, { x: t.x, y: e.y }, e]);
    for (const m of c)
      g.push([t, { x: t.x, y: m }, e]), g.push([t, { x: t.x, y: m }, { x: e.x, y: m }, e]);
    for (const m of p) g.push([t, { x: m, y: t.y }, { x: m, y: e.y }, e]);
  }
  const a = tn(g, n);
  if (r === "elbow") return a;
  if (r === "reverse") {
    const m = Ln(a), h = tn(g.filter((f) => Ln(f) !== m), n);
    return h.length > 1 ? h : a;
  }
  const d = Zo(t, e, r, s, x), u = tn([d], n);
  return u.length > 1 ? u : a;
}
function Sr(t) {
  return t.length < 2 ? 0 : we(t[t.length - 2], t[t.length - 1]);
}
const { PI: Jo } = Math, be = Jo + 1e-4, Tn = 0.5, Dn = [1, 1];
function Fn(t, e, n, r = (o) => o) {
  return t * r(0.5 - e * (0.5 - n));
}
const { min: en } = Math;
function $r(t, e, n) {
  let r = en(1, e / n);
  return en(1, t + (en(1, 1 - r) - t) * (r * 0.275));
}
function Qo(t) {
  return [-t[0], -t[1]];
}
function At(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function Wn(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function re(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function fn(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function te(t, e) {
  return [t[0] * e, t[1] * e];
}
function nn(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function ti(t, e) {
  return [t[0] / e, t[1] / e];
}
function Mr(t) {
  return [t[1], -t[0]];
}
function rn(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function An(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function ei(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function ni(t) {
  return Math.hypot(t[0], t[1]);
}
function On(t, e) {
  let n = t[0] - e[0], r = t[1] - e[1];
  return n * n + r * r;
}
function Cr(t) {
  return ti(t, ni(t));
}
function ri(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function bn(t, e, n) {
  let r = Math.sin(n), o = Math.cos(n), i = t[0] - e[0], l = t[1] - e[1], s = i * o - l * r, x = i * r + l * o;
  return [s + e[0], x + e[1]];
}
function _n(t, e, n, r) {
  let o = Math.sin(r), i = Math.cos(r), l = e[0] - n[0], s = e[1] - n[1], x = l * i - s * o, p = l * o + s * i;
  return t[0] = x + n[0], t[1] = p + n[1], t;
}
function Hn(t, e, n) {
  return At(t, te(re(e, t), n));
}
function oi(t, e, n, r) {
  let o = n[0] - e[0], i = n[1] - e[1];
  return t[0] = e[0] + o * r, t[1] = e[1] + i * r, t;
}
function zr(t, e, n) {
  return At(t, te(e, n));
}
const ft = [0, 0], Jt = [0, 0], Qt = [0, 0];
function ii(t, e) {
  let n = zr(t, Cr(Mr(re(t, At(t, [1, 1])))), -e), r = [], o = 1 / 13;
  for (let i = o; i <= 1; i += o) r.push(bn(n, t, be * 2 * i));
  return r;
}
function ai(t, e, n) {
  let r = [], o = 1 / n;
  for (let i = o; i <= 1; i += o) r.push(bn(e, t, be * i));
  return r;
}
function ci(t, e, n) {
  let r = re(e, n), o = te(r, 0.5), i = te(r, 0.51);
  return [re(t, o), re(t, i), At(t, i), At(t, o)];
}
function si(t, e, n, r) {
  let o = [], i = zr(t, e, n), l = 1 / r;
  for (let s = l; s < 1; s += l) o.push(bn(i, t, be * 3 * s));
  return o;
}
function li(t, e, n) {
  return [At(t, te(e, n)), At(t, te(e, n * 0.99)), re(t, te(e, n * 0.99)), re(t, te(e, n))];
}
function jn(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function ui(t, e, n) {
  return t.slice(0, 10).reduce((r, o) => {
    let i = o.pressure;
    return e && (i = $r(r, o.distance, n)), (r + i) / 2;
  }, t[0].pressure);
}
function di(t, e = {}) {
  let { size: n = 16, smoothing: r = 0.5, thinning: o = 0.5, simulatePressure: i = !0, easing: l = (N) => N, start: s = {}, end: x = {}, last: p = !1 } = e, { cap: c = !0, easing: g = (N) => N * (2 - N) } = s, { cap: a = !0, easing: d = (N) => --N * N * N + 1 } = x;
  if (t.length === 0 || n <= 0) return [];
  let u = t[t.length - 1].runningLength, m = jn(s.taper, n, u), h = jn(x.taper, n, u), f = (n * r) ** 2, v = [], w = [], S = ui(t, i, n), k = Fn(n, o, t[t.length - 1].pressure, l), b, Y = t[0].vector, M = t[0].point, y = M, z = M, X = y, C = !1;
  for (let N = 0; N < t.length; N++) {
    let { pressure: W } = t[N], { point: A, vector: O, distance: B, runningLength: _ } = t[N], K = N === t.length - 1;
    if (!K && u - _ < 3) continue;
    o ? (i && (W = $r(S, B, n)), k = Fn(n, o, W, l)) : k = n / 2, b === void 0 && (b = k);
    let q = _ < m ? g(_ / m) : 1, Q = u - _ < h ? d((u - _) / h) : 1;
    k = Math.max(0.01, k * Math.min(q, Q));
    let Z = (K ? t[N] : t[N + 1]).vector, et = K ? 1 : An(O, Z), mt = An(O, Y) < 0 && !C, tt = et !== null && et < 0;
    if (mt || tt) {
      rn(ft, Y), nn(ft, ft, k);
      for (let $ = 0; $ <= 1; $ += 0.07692307692307693) fn(Jt, A, ft), _n(Jt, Jt, A, be * $), z = [Jt[0], Jt[1]], v.push(z), Wn(Qt, A, ft), _n(Qt, Qt, A, be * -$), X = [Qt[0], Qt[1]], w.push(X);
      M = z, y = X, tt && (C = !0);
      continue;
    }
    if (C = !1, K) {
      rn(ft, O), nn(ft, ft, k), v.push(re(A, ft)), w.push(At(A, ft));
      continue;
    }
    oi(ft, Z, O, et), rn(ft, ft), nn(ft, ft, k), fn(Jt, A, ft), z = [Jt[0], Jt[1]], (N <= 1 || On(M, z) > f) && (v.push(z), M = z), Wn(Qt, A, ft), X = [Qt[0], Qt[1]], (N <= 1 || On(y, X) > f) && (w.push(X), y = X), S = W, Y = O;
  }
  let E = [t[0].point[0], t[0].point[1]], L = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : At(t[0].point, [1, 1]), D = [], P = [];
  if (t.length === 1) {
    if (!(m || h) || p) return ii(E, b || k);
  } else {
    m || h && t.length === 1 || (c ? D.push(...ai(E, w[0], 13)) : D.push(...ci(E, v[0], w[0])));
    let N = Mr(Qo(t[t.length - 1].vector));
    h || m && t.length === 1 ? P.push(L) : a ? P.push(...si(L, N, k, 29)) : P.push(...li(L, N, k));
  }
  return v.concat(P, w.reverse(), D);
}
const Bn = [0, 0];
function Kn(t) {
  return t != null && t >= 0;
}
function fi(t, e = {}) {
  var a;
  let { streamline: n = 0.5, size: r = 16, last: o = !1 } = e;
  if (t.length === 0) return [];
  let i = 0.15 + (1 - n) * 0.85, l = Array.isArray(t[0]) ? t : t.map(({ x: d, y: u, pressure: m = Tn }) => [d, u, m]);
  if (l.length === 2) {
    let d = l[1];
    l = l.slice(0, -1);
    for (let u = 1; u < 5; u++) l.push(Hn(l[0], d, u / 4));
  }
  l.length === 1 && (l = [...l, [...At(l[0], Dn), ...l[0].slice(2)]]);
  let s = [{ point: [l[0][0], l[0][1]], pressure: Kn(l[0][2]) ? l[0][2] : 0.25, vector: [...Dn], distance: 0, runningLength: 0 }], x = !1, p = 0, c = s[0], g = l.length - 1;
  for (let d = 1; d < l.length; d++) {
    let u = o && d === g ? [l[d][0], l[d][1]] : Hn(c.point, l[d], i);
    if (ei(c.point, u)) continue;
    let m = ri(u, c.point);
    if (p += m, d < g && !x) {
      if (p < r) continue;
      x = !0;
    }
    fn(Bn, c.point, u), c = { point: u, pressure: Kn(l[d][2]) ? l[d][2] : Tn, vector: Cr(Bn), distance: m, runningLength: p }, s.push(c);
  }
  return s[0].vector = ((a = s[1]) == null ? void 0 : a.vector) || [0, 0], s;
}
function hi(t, e = {}) {
  return di(fi(t, e), e);
}
var xi = hi;
function ke(t) {
  if (t.fillColor)
    try {
      return yn(t.fillColor);
    } catch {
      return t.color ? lt[t.color].bg : lt.blue.bg;
    }
  return t.color ? lt[t.color].bg : lt.blue.bg;
}
function _e(t) {
  if (t.strokeColor)
    try {
      return yn(t.strokeColor);
    } catch {
      return t.color ? lt[t.color].border : "#2563eb";
    }
  return t.color ? lt[t.color].border : "#2563eb";
}
function Ir(t) {
  return _e(t);
}
function ee(t) {
  if (t.textColor)
    try {
      return yn(t.textColor);
    } catch {
      return t.color ? lt[t.color].text : "#0f172a";
    }
  return t.color ? lt[t.color].text : "#0f172a";
}
function Xr(t, e, n) {
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
      const r = e / 2, o = n / 2, i = Math.min(e, n) / 2, l = i * 0.4, s = [];
      for (let x = 0; x < 10; x++) {
        const p = Math.PI / 5 * x - Math.PI / 2, c = x % 2 === 0 ? i : l;
        s.push(`${r + c * Math.cos(p)},${o + c * Math.sin(p)}`);
      }
      return s.join(" ");
    }
    default:
      return "";
  }
}
function pi(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let r = 1; r < t.length - 1; r++) {
    const [o, i] = t[r], [l, s] = t[r + 1];
    e += ` Q ${o} ${i} ${(o + l) / 2} ${(i + s) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function vi(t, e) {
  return e === "highlighter" ? { size: t * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: t, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 };
}
function Ee(t, e) {
  return e === "highlighter" ? t * 1.25 : t / 2;
}
function Yr(t, e, n) {
  return t.length < 2 ? [] : xi(t, vi(e, n));
}
function Rn(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [x, p] = t[0], c = Ee(e, n);
    return `M ${x - c} ${p} A ${c} ${c} 0 1 0 ${x + c} ${p} A ${c} ${c} 0 1 0 ${x - c} ${p} Z`;
  }
  const r = Yr(t, e, n);
  if (r.length === 0) return "";
  if (r.length < 4)
    return r.reduce(
      (x, [p, c], g) => x + (g === 0 ? `M ${p} ${c}` : ` L ${p} ${c}`),
      ""
    ) + " Z";
  const o = r[0], i = r[1], l = r[2];
  let s = `M ${o[0]} ${o[1]} Q ${i[0]} ${i[1]} ${(i[0] + l[0]) / 2} ${(i[1] + l[1]) / 2} T `;
  for (let x = 2; x < r.length - 1; x += 1) {
    const p = r[x], c = r[x + 1];
    s += `${(p[0] + c[0]) / 2} ${(p[1] + c[1]) / 2} `;
  }
  return `${s}Z`;
}
function mi(t) {
  return t.map(([e, n], r) => `${r === 0 ? "M" : "L"} ${e} ${n}`).join(" ");
}
const Un = /* @__PURE__ */ new WeakMap();
function hn(t, e = 1) {
  if (t.type !== "draw") return { d: "", filled: !1, width: 0, opacity: 1 };
  const n = t.points ?? [], r = t.strokeWidth ?? 3, o = t.drawMode ?? "pen", i = o === "highlighter" ? 0.35 : 1;
  if (t.inkStyle === void 0 && n.length === 1)
    return { d: pi(n), filled: !1, width: r / e, opacity: i };
  const l = t.inkStyle === "raw", s = n.length > 0 && (n.length === 1 || l && n.every(([p, c]) => p === n[0][0] && c === n[0][1]));
  return {
    d: s ? Rn([n[0]], r, o) : l ? mi(n) : Rn(n, r, o),
    filled: s || !l,
    width: o === "highlighter" ? r * 2.5 : r,
    opacity: i
  };
}
function Pr(t, e = 1) {
  var o;
  if (t.type !== "draw" || t.inkStyle === void 0 && ((o = t.points) == null ? void 0 : o.length) === 1) return hn(t, e);
  const n = Un.get(t);
  if (n) return n;
  const r = hn(t);
  return Un.set(t, r), r;
}
function jt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function Nr(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], r = (o, i) => {
    o.childNodes.forEach((l) => {
      if (l.nodeType === Node.TEXT_NODE) {
        const c = l.textContent ?? "";
        c && n[n.length - 1].push({ text: c, ...i });
        return;
      }
      if (l.nodeType !== Node.ELEMENT_NODE) return;
      const s = l;
      if (s.tagName === "BR") {
        n.push([]);
        return;
      }
      const x = { bold: i.bold || s.tagName === "B" || s.tagName === "STRONG", italic: i.italic || s.tagName === "I" || s.tagName === "EM", underline: i.underline || s.tagName === "U" }, p = s.tagName === "DIV" || s.tagName === "P" || s.tagName === "LI";
      p && n[n.length - 1].length > 0 && n.push([]), r(s, x), p && n.push([]);
    });
  };
  return r(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((o) => o.length > 0);
}
const Gn = /* @__PURE__ */ new WeakMap();
function He(t) {
  const e = Gn.get(t);
  if (e !== void 0) return e;
  const n = t.html ? gn(t.html) : t.text ? jt(t.text).replace(/\n/g, "<br>") : "";
  return Gn.set(t, n), n;
}
function xn(t) {
  if (t)
    try {
      return vo(t);
    } catch {
      return;
    }
}
function pn(t) {
  try {
    return mr(t);
  } catch {
    return null;
  }
}
function Se(t) {
  return t.html ? Nr(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const Pe = 12;
function Ot(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function Xt(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function gi(t, e) {
  if (e.length < 3) return !1;
  let n = !1;
  for (let r = 0, o = e.length - 1; r < e.length; o = r++) {
    const i = e[r], l = e[o];
    if (!i || !l) continue;
    if (Ft(t.x, t.y, i.x, i.y, l.x, l.y) <= 1e-9)
      return !0;
    i.y > t.y != l.y > t.y && t.x < (l.x - i.x) * (t.y - i.y) / (l.y - i.y) + i.x && (n = !n);
  }
  return n;
}
function ht(t) {
  const e = t.rotation ?? 0, n = Ot(t);
  if (!e) return n;
  const r = Xt(t), o = Math.cos(e), i = Math.sin(e), l = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([p, c]) => {
    const g = p - r.x, a = c - r.y;
    return [r.x + g * o - a * i, r.y + g * i + a * o];
  }), s = l.map((p) => p[0]), x = l.map((p) => p[1]);
  return { minX: Math.min(...s), minY: Math.min(...x), maxX: Math.max(...s), maxY: Math.max(...x) };
}
function De(t, e, n) {
  const r = t.rotation ?? 0;
  if (!r) return { x: e, y: n };
  const o = Xt(t), i = Math.cos(-r), l = Math.sin(-r), s = e - o.x, x = n - o.y;
  return { x: o.x + s * i - x * l, y: o.y + s * l + x * i };
}
function Ft(t, e, n, r, o, i) {
  const l = o - n, s = i - r, x = l * l + s * s, p = x === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * l + (e - r) * s) / x));
  return Math.hypot(t - (n + p * l), e - (r + p * s));
}
function ge(t, e, n, r, o, i) {
  const l = 8 / r;
  if (t.type === "arrow") {
    const p = (t.strokeWidth ?? 2.5) / r / 2 + l, c = Et(t, o ?? /* @__PURE__ */ new Map(), i);
    if (c.routing === "orthogonal" && c.pathPoints && c.pathPoints.length > 1) {
      for (let a = 1; a < c.pathPoints.length; a++) {
        const d = c.pathPoints[a - 1], u = c.pathPoints[a];
        if (Ft(e, n, d.x, d.y, u.x, u.y) <= p) return !0;
      }
      return !1;
    }
    if (c.bend === 0) return Ft(e, n, c.start.x, c.start.y, c.end.x, c.end.y) <= p;
    let g = c.start;
    for (let a = 1; a <= 16; a++) {
      const d = pe(a / 16, c.start, c.control, c.end);
      if (Ft(e, n, g.x, g.y, d.x, d.y) <= p) return !0;
      g = d;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const g = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / r / 2 + l;
    if (t.points.length === 1) {
      const [a, d] = t.points[0];
      return Math.hypot(e - a, n - d) <= g;
    }
    for (let a = 1; a < t.points.length; a++) {
      const [d, u] = t.points[a - 1], [m, h] = t.points[a];
      if (Ft(e, n, d, u, m, h) <= g) return !0;
    }
    return !1;
  }
  const s = De(t, e, n), x = Ot(t);
  if (t.type === "frame") {
    const p = s.x >= x.minX - l && s.x <= x.maxX + l && s.y >= x.minY - l && s.y <= x.maxY + l && (s.x <= x.minX + l || s.x >= x.maxX - l || s.y <= x.minY + l || s.y >= x.maxY - l), c = s.x >= x.minX - l && s.x <= x.maxX + l && s.y >= x.minY - 28 / r && s.y <= x.minY;
    return p || c;
  }
  return s.x >= x.minX - l && s.x <= x.maxX + l && s.y >= x.minY - l && s.y <= x.maxY + l;
}
function ae(t, e, n) {
  const r = Ot(t), o = (r.minX + r.maxX) / 2, i = (r.minY + r.maxY) / 2, l = e - o, s = n - i;
  if (l === 0 && s === 0) return { x: o, y: i, side: "e" };
  const x = (r.maxX - r.minX) / 2, p = (r.maxY - r.minY) / 2, c = x === 0 ? 1 / 0 : Math.abs(x / l), g = p === 0 ? 1 / 0 : Math.abs(p / s);
  return c <= g ? { x: o + l * c, y: i + s * c, side: l >= 0 ? "e" : "w" } : { x: o + l * g, y: i + s * g, side: s >= 0 ? "s" : "n" };
}
function Er(t, e, n, r) {
  const o = /* @__PURE__ */ new Set([e.id, n, r]);
  return t.filter((i) => !o.has(i.id)).map((i) => {
    const l = ht(i);
    return { minX: l.minX - Pe, minY: l.minY - Pe, maxX: l.maxX + Pe, maxY: l.maxY + Pe };
  }).filter((i) => i.maxX > i.minX && i.maxY > i.minY);
}
function Et(t, e, n = []) {
  const r = t.fromId ? e.get(t.fromId) : void 0, o = t.toId ? e.get(t.toId) : void 0;
  let i = { x: t.x, y: t.y }, l = { x: t.x + t.w, y: t.y + t.h };
  if (r && o) {
    const u = Xt(r), m = Xt(o);
    i = ae(r, m.x, m.y), l = ae(o, u.x, u.y);
  } else r ? i = ae(r, l.x, l.y) : o && (l = ae(o, i.x, i.y));
  const s = (i.x + l.x) / 2, x = (i.y + l.y) / 2, p = t.bend ?? 0;
  let c = { x: s, y: x };
  if (p !== 0) {
    const u = l.x - i.x, m = l.y - i.y, h = Math.hypot(u, m) || 1;
    c = { x: s + -m / h * p, y: x + u / h * p };
  }
  const g = !!(r || o), a = t.routing ?? (g ? "orthogonal" : p !== 0 ? "curved" : "straight");
  if (a !== "orthogonal") return { start: i, end: l, control: c, bend: p, routing: a };
  const d = Er(n, t, r == null ? void 0 : r.id, o == null ? void 0 : o.id);
  return {
    start: i,
    end: l,
    control: c,
    bend: p,
    routing: a,
    pathPoints: wr(kr(i, l, d, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function pe(t, e, n, r) {
  const o = 1 - t;
  return { x: o * o * e.x + 2 * o * t * n.x + t * t * r.x, y: o * o * e.y + 2 * o * t * n.y + t * t * r.y };
}
function je(t, e) {
  if (!t || !e) return null;
  const n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n <= r ? { start: n, end: r } : null;
}
function Fe(t, e, n, r) {
  if (Math.abs(e) < 1e-12) return t >= n && t <= r ? { start: 0, end: 1 } : null;
  const o = (n - t) / e, i = (r - t) / e;
  return je(
    { start: Math.min(o, i), end: Math.max(o, i) },
    { start: 0, end: 1 }
  );
}
function on(t, e, n, r) {
  const o = e[0] - t[0], i = e[1] - t[1], l = t[0] - n.x, s = t[1] - n.y, x = o * o + i * i;
  if (x < 1e-12)
    return l * l + s * s <= r * r ? { start: 0, end: 1 } : null;
  const p = 2 * (l * o + s * i), c = l * l + s * s - r * r, g = p * p - 4 * x * c;
  if (g < 0) return null;
  const a = Math.sqrt(g);
  return je(
    { start: (-p - a) / (2 * x), end: (-p + a) / (2 * x) },
    { start: 0, end: 1 }
  );
}
function yi(t, e, n, r, o) {
  const i = r.x - n.x, l = r.y - n.y, s = Math.hypot(i, l);
  if (s < 1e-12) return on(t, e, n, o);
  const x = i / s, p = l / s, c = e[0] - t[0], g = e[1] - t[1], a = t[0] - n.x, d = t[1] - n.y, u = a * x + d * p, m = c * x + g * p, h = a * -p + d * x, f = c * -p + g * x, w = [
    je(
      Fe(u, m, 0, s),
      Fe(h, f, -o, o)
    ),
    on(t, e, n, o),
    on(t, e, r, o)
  ].filter((S) => S !== null);
  return w.length === 0 ? null : {
    start: Math.min(...w.map((S) => S.start)),
    end: Math.max(...w.map((S) => S.end))
  };
}
function Vn(t, e, n) {
  return [t[0] + (e[0] - t[0]) * n, t[1] + (e[1] - t[1]) * n];
}
function he(t, e) {
  const n = t[t.length - 1];
  (!n || Math.hypot(e[0] - n[0], e[1] - n[1]) > 1e-9) && t.push([e[0], e[1]]);
}
function wi(t, e, n) {
  let r = n[0][0], o = n[0][1], i = r, l = o;
  for (const [s, x] of n)
    r = Math.min(r, s), o = Math.min(o, x), i = Math.max(i, s), l = Math.max(l, x);
  return { ...t, id: e, points: n, x: r, y: o, w: i - r, h: l - o };
}
function bi(t, e) {
  const n = t.slice(0, 480);
  let r = 1, o = `${n}-e${r}`;
  for (; e.has(o); ) o = `${n}-e${++r}`;
  return e.add(o), o;
}
function me(t, e, n) {
  return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
}
function Ne(t, e, n) {
  return Math.abs(me(e, n, t)) <= 1e-9 && t.x >= Math.min(e.x, n.x) - 1e-9 && t.x <= Math.max(e.x, n.x) + 1e-9 && t.y >= Math.min(e.y, n.y) - 1e-9 && t.y <= Math.max(e.y, n.y) + 1e-9;
}
function ki(t, e, n, r) {
  const o = me(t, e, n), i = me(t, e, r), l = me(n, r, t), s = me(n, r, e);
  return (o > 0 && i < 0 || o < 0 && i > 0) && (l > 0 && s < 0 || l < 0 && s > 0) ? !0 : Math.abs(o) <= 1e-9 && Ne(n, t, e) || Math.abs(i) <= 1e-9 && Ne(r, t, e) || Math.abs(l) <= 1e-9 && Ne(t, n, r) || Math.abs(s) <= 1e-9 && Ne(e, n, r);
}
function qn(t, e, n, r) {
  return ki(t, e, n, r) ? 0 : Math.min(
    Ft(t.x, t.y, n.x, n.y, r.x, r.y),
    Ft(e.x, e.y, n.x, n.y, r.x, r.y),
    Ft(n.x, n.y, t.x, t.y, e.x, e.y),
    Ft(r.x, r.y, t.x, t.y, e.x, e.y)
  );
}
function vn(t, e, n, r) {
  const o = Fe(t.x, e.x - t.x, n.minX - r, n.maxX + r), i = Fe(t.y, e.y - t.y, n.minY - r, n.maxY + r);
  return je(o, i) !== null;
}
function Si(t, e, n, r, o, i, l) {
  const s = 8 / o;
  if (t.type === "arrow") {
    const u = r + (t.strokeWidth ?? 2.5) / o / 2 + s, m = Et(t, i, l), h = [];
    if (m.routing === "orthogonal" && m.pathPoints && m.pathPoints.length > 1)
      for (let f = 1; f < m.pathPoints.length; f++)
        h.push([m.pathPoints[f - 1], m.pathPoints[f]]);
    else if (m.bend === 0)
      h.push([m.start, m.end]);
    else {
      let f = m.start;
      for (let v = 1; v <= 16; v++) {
        const w = pe(v / 16, m.start, m.control, m.end);
        h.push([f, w]), f = w;
      }
    }
    return h.some(([f, v]) => qn(e, n, f, v) <= u);
  }
  const x = De(t, e.x, e.y), p = De(t, n.x, n.y), c = Ot(t);
  if (t.type !== "frame") return vn(x, p, c, r + s);
  const g = r + s, a = [
    { x: c.minX, y: c.minY },
    { x: c.maxX, y: c.minY },
    { x: c.maxX, y: c.maxY },
    { x: c.minX, y: c.maxY }
  ];
  for (let u = 0; u < a.length; u++)
    if (qn(x, p, a[u], a[(u + 1) % a.length]) <= g) return !0;
  const d = { minX: c.minX, minY: c.minY - 28 / o, maxX: c.maxX, maxY: c.minY };
  return vn(x, p, d, r);
}
function kn(t, e, n, r, o) {
  const i = [], l = Math.max(o, 0.1), s = r / l, x = new Set(t.map((c) => c.id)), p = new Map(t.map((c) => [c.id, c]));
  for (const c of t) {
    if (c.type !== "draw" || !c.points) {
      if (Si(c, e, n, s, l, p, t)) continue;
      i.push(c);
      continue;
    }
    const a = (c.drawMode ?? "pen") === "highlighter" ? (c.strokeWidth ?? 3) * 2.5 : c.strokeWidth ?? 3, d = s + a / 2, u = Ot(c);
    if (!vn(e, n, u, d)) {
      i.push(c);
      continue;
    }
    if (c.points.length === 0) {
      i.push(c);
      continue;
    }
    if (c.points.length === 1) {
      const [w, S] = c.points[0];
      Ft(w, S, e.x, e.y, n.x, n.y) > d && i.push(c);
      continue;
    }
    const m = [];
    let h = [], f = !1;
    const v = () => {
      h.length > 1 && m.push(h), h = [];
    };
    for (let w = 1; w < c.points.length; w++) {
      const S = c.points[w - 1], k = c.points[w], b = yi(S, k, e, n, d);
      if (!b) {
        h.length === 0 && he(h, S), he(h, k);
        continue;
      }
      f = !0, b.start > 1e-9 && (h.length === 0 && he(h, S), he(h, Vn(S, k, b.start))), v(), b.end < 1 - 1e-9 && (he(h, Vn(S, k, b.end)), he(h, k));
    }
    if (v(), !f) {
      i.push(c);
      continue;
    }
    m.forEach((w, S) => {
      const k = S === 0 ? c.id : bi(c.id, x);
      i.push(wi(c, k, w));
    });
  }
  return i;
}
function $i(t, e, n, r, o) {
  return kn(t, { x: e, y: n }, { x: e, y: n }, r, o);
}
function Mi(t, e, n) {
  const r = 6 / n;
  let o = null, i = null;
  const l = [], s = [t.minX, (t.minX + t.maxX) / 2, t.maxX], x = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const p of e) {
    const c = ht(p), g = [c.minX, (c.minX + c.maxX) / 2, c.maxX], a = [c.minY, (c.minY + c.maxY) / 2, c.maxY];
    for (const d of s) for (const u of g) {
      const m = u - d;
      Math.abs(m) <= r && (!o || Math.abs(m) < Math.abs(o.delta)) && (o = { delta: m, at: u });
    }
    for (const d of x) for (const u of a) {
      const m = u - d;
      Math.abs(m) <= r && (!i || Math.abs(m) < Math.abs(i.delta)) && (i = { delta: m, at: u });
    }
  }
  return o && l.push({ x1: o.at, y1: t.minY - 1e3, x2: o.at, y2: t.maxY + 1e3 }), i && l.push({ x1: t.minX - 1e3, y1: i.at, x2: t.maxX + 1e3, y2: i.at }), { dx: (o == null ? void 0 : o.delta) ?? 0, dy: (i == null ? void 0 : i.delta) ?? 0, guides: l };
}
const Ci = 14;
function zi({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: r,
  camera: o,
  interaction: i,
  eraserPos: l,
  guides: s,
  marquee: x,
  lasso: p,
  strokeColorOf: c
}) {
  return /* @__PURE__ */ I("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ j("g", { transform: `scale(${o.z}) translate(${-o.x}, ${-o.y})`, children: [
    t.map((g) => {
      if (g.type === "draw" && g.points) {
        const X = g.drawMode ?? "pen", C = g.strokeWidth ?? 3, E = e.has(g.id) ? U.blue : c(g), L = Pr(g, o.z);
        return /* @__PURE__ */ I(
          "path",
          {
            "data-canvas-vector-shape-id": g.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": X,
            "data-canvas-stroke-width": C,
            "data-canvas-ink-style": g.inkStyle ?? "smoothed",
            d: L.d,
            fill: L.filled ? E : "none",
            stroke: L.filled ? "none" : E,
            strokeWidth: L.width,
            strokeOpacity: X === "highlighter" ? 0.35 : void 0,
            fillOpacity: X === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          g.id
        );
      }
      if (g.type !== "arrow") return null;
      const a = e.has(g.id) ? U.blue : c(g), d = Et(g, n, r), u = g.strokeWidth ?? 2.5, m = u / o.z, h = Math.max(10, 8 + u * 2), f = Math.max(4, 2 + u), v = h / o.z, w = f / o.z, S = d.routing === "orthogonal" && d.pathPoints ? d.pathPoints : null, k = S && S.length > 1;
      let b, Y;
      if (k)
        b = un(S), Y = Sr(S);
      else if (d.routing === "curved") {
        b = `M ${d.start.x} ${d.start.y} Q ${d.control.x} ${d.control.y} ${d.end.x} ${d.end.y}`;
        const X = pe(0.94, d.start, d.control, d.end);
        Y = Math.atan2(d.end.y - X.y, d.end.x - X.x);
      } else
        b = `M ${d.start.x} ${d.start.y} L ${d.end.x} ${d.end.y}`, Y = Math.atan2(d.end.y - d.start.y, d.end.x - d.start.x);
      const M = k && S.length >= 2 ? we(S[0], S[1]) : d.routing === "orthogonal" && d.start.side ? d.start.side === "e" ? 0 : d.start.side === "w" ? Math.PI : d.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : we(d.start, d.end), y = g.strokeStyle === "dashed" ? `${8 / o.z} ${5 / o.z}` : g.strokeStyle === "dotted" ? `${1.5 / o.z} ${4 / o.z}` : void 0, z = (X, C, E, L) => X === "dot" ? /* @__PURE__ */ I("circle", { "data-canvas-arrow-dot-radius": f, cx: C, cy: E, r: w, fill: a }) : X === "none" ? null : /* @__PURE__ */ I(
        "polygon",
        {
          "data-canvas-arrowhead-size": h,
          points: `${C},${E} ${C - v * Math.cos(L - 0.4)},${E - v * Math.sin(L - 0.4)} ${C - v * Math.cos(L + 0.4)},${E - v * Math.sin(L + 0.4)}`,
          fill: a
        }
      );
      return /* @__PURE__ */ j("g", { "data-canvas-vector-shape-id": g.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": d.routing, "data-canvas-stroke-width": u, children: [
        /* @__PURE__ */ I("path", { d: b, fill: "none", stroke: a, strokeWidth: m, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: y }),
        z(g.arrowEnd ?? "arrow", d.end.x, d.end.y, Y),
        z(g.arrowStart ?? "none", d.start.x, d.start.y, M + Math.PI)
      ] }, g.id);
    }),
    i.kind === "connect" && i.fromId !== void 0 && i.toX !== void 0 && i.toY !== void 0 && (() => {
      const g = n.get(i.fromId);
      if (!g) return null;
      const a = ae(g, i.toX, i.toY), d = i.hoverId ? n.get(i.hoverId) : null, u = d ? ae(d, a.x, a.y) : { x: i.toX, y: i.toY }, m = d ? kr(a, u, Er(r, { id: "__preview" }, g.id, d.id)) : [a, u];
      return /* @__PURE__ */ j("g", { children: [
        /* @__PURE__ */ I("path", { d: un(m), stroke: U.blue, strokeWidth: 2 / o.z, strokeDasharray: `${5 / o.z} ${4 / o.z}` }),
        d ? /* @__PURE__ */ I("rect", { x: ht(d).minX - 3 / o.z, y: ht(d).minY - 3 / o.z, width: ht(d).maxX - ht(d).minX + 6 / o.z, height: ht(d).maxY - ht(d).minY + 6 / o.z, fill: "none", stroke: U.blue, strokeWidth: 2 / o.z, rx: 6 / o.z }) : /* @__PURE__ */ I("circle", { cx: u.x, cy: u.y, r: 5 / o.z, fill: U.blue })
      ] });
    })(),
    l && /* @__PURE__ */ I("circle", { cx: l.x, cy: l.y, r: Ci / o.z, fill: U.roseSoft, stroke: U.rose, strokeWidth: 1 / o.z }),
    s.map((g, a) => /* @__PURE__ */ I("line", { x1: g.x1, y1: g.y1, x2: g.x2, y2: g.y2, stroke: U.pink, strokeWidth: 1 / o.z, strokeDasharray: `${4 / o.z} ${4 / o.z}` }, `guide-${a}`)),
    x && /* @__PURE__ */ I("rect", { x: Math.min(x.startX, x.curX), y: Math.min(x.startY, x.curY), width: Math.abs(x.curX - x.startX), height: Math.abs(x.curY - x.startY), fill: U.marqueeFill, stroke: U.blue, strokeWidth: 1 / o.z }),
    p && p.points.length > 1 && /* @__PURE__ */ I(
      "polygon",
      {
        "data-canvas-lasso": "true",
        points: p.points.map((g) => `${g.x},${g.y}`).join(" "),
        fill: U.marqueeFill,
        stroke: U.blue,
        strokeWidth: 1.5 / o.z,
        strokeDasharray: `${5 / o.z} ${4 / o.z}`,
        strokeLinejoin: "round"
      }
    )
  ] }) });
}
const Ii = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], Xi = /* @__PURE__ */ new Set([
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
]), Yi = [
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
function Be(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function Lr(t) {
  return Xi.has(t.trim().toLowerCase());
}
function Tr(t) {
  const e = Be(t);
  return e ? Lr(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function Pi(t) {
  return Be(t).split(",").map((e) => e.trim()).filter(Boolean).map(Tr).filter(Boolean).join(", ");
}
function Dr(t) {
  return Be(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function ve(t) {
  return t.split(",").map((e) => Be(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !Lr(e));
}
const Le = Array.from(/* @__PURE__ */ new Set([
  ...Yi,
  ...ve(Dt.sans.stack),
  ...ve(Dt.serif.stack),
  ...ve(Dt.mono.stack),
  ...ve(Dt.gothic.stack),
  ...ve(Dt.korean.stack)
]));
function Ni() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Le;
  const t = Le.filter((e) => {
    const n = Tr(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : Le;
}
const Ei = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, Li = 24, Ti = 28, Fr = 720;
function wt(t) {
  return t.fontSize ?? Ei[t.type] ?? 14;
}
function bt(t) {
  var e;
  if (!t.fontFamily) return Dt.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = Dr(mo(t.customFontFamily ?? ""));
    } catch {
    }
    return Pi(n) || Dt.sans.stack;
  }
  return ((e = Dt[t.fontFamily]) == null ? void 0 : e.stack) ?? Dt.sans.stack;
}
function It(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function Di(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function Fi(t) {
  var e, n, r;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((r = t.html) != null && r.includes("<ol>")) return "number";
}
function Wi(t, e) {
  return {
    w: Math.min(Fr, Math.max(Li, Math.ceil(t))),
    h: Math.max(Ti, Math.ceil(e))
  };
}
function Ai(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = gn(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${Fr}px`,
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
    fontSize: `${wt(e)}px`,
    fontFamily: bt(e)
  }), document.body.appendChild(n);
  const r = n.getBoundingClientRect();
  return n.remove(), Wi(r.width, r.height);
}
const Oi = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), _i = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function Hi({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: r,
  shapeById: o,
  allShapes: i,
  peerCursors: l,
  isDarkMode: s,
  renderEditor: x,
  renderShapeBody: p,
  setEditingId: c,
  onBendHandleDown: g,
  onOrthogonalSegmentHandleDown: a,
  onResizeHandleDown: d,
  onRotateHandleDown: u,
  onConnectHandleDown: m,
  onArrowEndpointDown: h
}) {
  return /* @__PURE__ */ j(ce, { children: [
    t.map((f, v) => {
      const w = { zIndex: v + 1, transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` };
      if (f.type === "draw") return null;
      if (f.type === "arrow") {
        const b = Et(f, o, i), Y = b.routing === "orthogonal" && b.pathPoints ? wn(b.pathPoints) : b.routing === "curved" ? pe(0.5, b.start, b.control, b.end) : { x: (b.start.x + b.end.x) / 2, y: (b.start.y + b.end.y) / 2 }, M = n === f.id, y = He(f), z = e.has(f.id), X = Se(f).trim(), C = y || (z ? "관계 입력" : "");
        return !C && !M ? null : /* @__PURE__ */ I("div", { "data-canvas-paint-id": f.id, className: "absolute top-0 left-0 origin-top-left", style: w, children: /* @__PURE__ */ I("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: Y.x - 90, top: Y.y - 18, width: 180, height: 36 }, onDoubleClick: (E) => {
          E.stopPropagation(), c(f.id);
        }, children: (C || M) && /* @__PURE__ */ I(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": X ? `관계 설명: ${X}` : "관계 설명 입력",
            title: M ? void 0 : X ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${s ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: wt(f),
              fontFamily: bt(f),
              maxWidth: "100%",
              minWidth: M ? 120 / r.z : void 0,
              minHeight: M ? 28 / r.z : void 0,
              color: f.textColor
            },
            children: M ? x("text-center whitespace-nowrap") : /* @__PURE__ */ I("span", { dangerouslySetInnerHTML: { __html: C } }, "canvas-view")
          }
        ) }) }, f.id);
      }
      const S = e.has(f.id), k = Ot(f);
      return /* @__PURE__ */ I("div", { "data-canvas-paint-id": f.id, className: "absolute top-0 left-0 origin-top-left", style: w, children: /* @__PURE__ */ I(
        "div",
        {
          "data-canvas-shape-id": f.id,
          "data-canvas-shape-type": f.type,
          "data-canvas-selected": S ? "true" : void 0,
          "data-canvas-text-align": It(f),
          "data-canvas-text-color": f.textColor,
          "data-canvas-font-size": wt(f),
          "data-canvas-font-family": f.fontFamily === "custom" ? f.customFontFamily ?? "custom" : f.fontFamily ?? "sans",
          "data-canvas-manual-size": f.manualSize ? "true" : void 0,
          "data-canvas-group-id": f.groupId,
          "data-canvas-list-kind": Fi(f),
          "data-canvas-x": f.x,
          "data-canvas-y": f.y,
          "data-canvas-width": f.w,
          "data-canvas-height": f.h,
          className: "absolute",
          style: { left: k.minX, top: k.minY, width: k.maxX - k.minX, height: k.maxY - k.minY, transform: f.rotation ? `rotate(${f.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (b) => {
            b.stopPropagation(), Oi.has(f.type) && c(f.id);
          },
          children: p(f)
        }
      ) }, f.id);
    }),
    t.filter((f) => f.type !== "draw" && f.type !== "arrow" && e.has(f.id)).map((f) => {
      const v = Ot(f);
      return /* @__PURE__ */ I("div", { "data-canvas-selection-id": f.id, className: "absolute top-0 left-0 origin-top-left pointer-events-none", style: { zIndex: t.length + 3, transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` }, children: /* @__PURE__ */ j("div", { className: "absolute", style: { left: v.minX, top: v.minY, width: v.maxX - v.minX, height: v.maxY - v.minY, transform: f.rotation ? `rotate(${f.rotation}rad)` : void 0, transformOrigin: "center" }, children: [
        /* @__PURE__ */ I("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / r.z}px solid ${U.blue}` } }),
        e.size === 1 && /* @__PURE__ */ j(ce, { children: [
          ["nw", "ne", "sw", "se"].map((w) => /* @__PURE__ */ I("div", { "data-canvas-resize-handle": w, onPointerDown: (S) => d(S, f, w), className: "absolute pointer-events-auto z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / r.z, height: 10 / r.z, cursor: `${w}-resize`, left: w.includes("w") ? -5 / r.z : void 0, right: w.includes("e") ? -5 / r.z : void 0, top: w.includes("n") ? -5 / r.z : void 0, bottom: w.includes("s") ? -5 / r.z : void 0 } }, w)),
          /* @__PURE__ */ I("div", { onPointerDown: (w) => u(w, f), title: "회전 (Shift로 15도 단위)", className: "absolute pointer-events-auto z-20 bg-blue-600 rounded-full", style: { width: 12 / r.z, height: 12 / r.z, left: "50%", marginLeft: -6 / r.z, top: -28 / r.z, cursor: "grab" } }),
          _i.has(f.type) && ["n", "s", "w", "e"].map((w) => /* @__PURE__ */ I("div", { onPointerDown: (S) => m(S, f), title: "드래그해서 연결 (관계 생성)", className: "absolute pointer-events-auto z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...w === "n" ? { left: "50%", top: -30 / r.z, marginLeft: -9 / r.z } : w === "s" ? { left: "50%", bottom: -30 / r.z, marginLeft: -9 / r.z } : w === "w" ? { top: "50%", left: -30 / r.z, marginTop: -9 / r.z } : { top: "50%", right: -30 / r.z, marginTop: -9 / r.z }, width: 18 / r.z, height: 18 / r.z, fontSize: 13 / r.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${w}`))
        ] })
      ] }) }, `selection-${f.id}`);
    }),
    e.size === 1 && i.filter((f) => f.type === "arrow" && e.has(f.id)).map((f) => {
      const v = Et(f, o, i), w = (S, k) => ({
        left: (S.x - r.x) * r.z - k / 2,
        top: (S.y - r.y) * r.z - k / 2
      });
      return /* @__PURE__ */ j(Bt.Fragment, { children: [
        v.routing === "orthogonal" && v.pathPoints && v.pathPoints.length > 2 ? v.pathPoints.slice(0, -1).map((S, k) => {
          var M;
          const b = (M = v.pathPoints) == null ? void 0 : M[k + 1];
          if (!b) return null;
          const Y = { x: (S.x + b.x) / 2, y: (S.y + b.y) / 2 };
          return /* @__PURE__ */ I("div", { "data-canvas-arrow-segment-handle": k, onPointerDown: (y) => a(y, f, k), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { zIndex: t.length + 3, width: 12, height: 12, ...w(Y, 12), cursor: S.x === b.x ? "ew-resize" : "ns-resize" } }, `segment-${k}`);
        }) : v.routing === "curved" && /* @__PURE__ */ I("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (S) => g(S, f), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { zIndex: t.length + 3, width: 10, height: 10, left: (v.start.x + v.end.x) / 2 * r.z - r.x * r.z - 5, top: (v.start.y + v.end.y) / 2 * r.z - r.y * r.z - 10, cursor: "grab" } }),
        ["start", "end"].map((S) => {
          const k = S === "start" ? v.start : v.end;
          return /* @__PURE__ */ I("div", { "data-canvas-arrow-endpoint": S, onPointerDown: (b) => h(b, f, S), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { zIndex: t.length + 3, width: 12, height: 12, ...w(k, 12), cursor: "grab" } }, S);
        })
      ] }, `arrow-handles-${f.id}`);
    }),
    l == null ? void 0 : l.map((f) => /* @__PURE__ */ j("div", { className: "absolute pointer-events-none z-40", style: { zIndex: t.length + 4, left: (f.x - r.x) * r.z, top: (f.y - r.y) * r.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ I("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ I("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: f.color, stroke: U.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ I("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: f.color }, children: f.name })
    ] }, f.id))
  ] });
}
function ji(t, e, n, r, o) {
  var Y;
  const i = J(null), [l, s] = it({ width: 380, height: 260 });
  se(() => {
    const M = i.current;
    if (!M) return;
    const y = () => {
      const X = Math.max(1, Math.ceil(M.getBoundingClientRect().width)), C = Math.max(1, Math.ceil(M.getBoundingClientRect().height));
      s((E) => E.width === X && E.height === C ? E : { width: X, height: C });
    };
    if (y(), typeof ResizeObserver > "u") return;
    const z = new ResizeObserver(y);
    return z.observe(M), () => z.disconnect();
  }, [t, n, e]);
  const x = l.width, p = l.height, c = e.reduce((M, y) => {
    const z = ht(y);
    return {
      minX: Math.min(M.minX, z.minX),
      minY: Math.min(M.minY, z.minY),
      maxX: Math.max(M.maxX, z.maxX),
      maxY: Math.max(M.maxY, z.maxY)
    };
  }, ht(t)), g = (c.minX - r.x) * r.z, a = (c.minY - r.y) * r.z, d = (c.maxX - r.x) * r.z, u = (c.maxY - r.y) * r.z, m = Math.max(8, o.width - x - 8), h = Math.max(8, o.height - p - 8), f = (M, y) => ({ left: Math.min(Math.max(8, M), m), top: Math.min(Math.max(8, y), h) }), v = [
    f((g + d) / 2 - x / 2, a - p - 12),
    f((g + d) / 2 - x / 2, u + 12),
    f((o.width - x) / 2, 12),
    f(g - x - 12, a + (u - a - p) / 2),
    f(d + 12, a + (u - a - p) / 2)
  ], w = n.map((M) => {
    const y = ht(M);
    return { left: (y.minX - r.x) * r.z, top: (y.minY - r.y) * r.z, right: (y.maxX - r.x) * r.z, bottom: (y.maxY - r.y) * r.z };
  });
  if (t.type === "arrow") {
    const M = Et(t, new Map(n.map((C) => [C.id, C])), n), y = M.routing === "orthogonal" && M.pathPoints ? wn(M.pathPoints) : { x: (M.start.x + M.end.x) / 2, y: (M.start.y + M.end.y) / 2 }, z = 180 * r.z, X = 36 * r.z;
    w.push({
      left: (y.x - r.x) * r.z - z / 2,
      top: (y.y - r.y) * r.z - X / 2,
      right: (y.x - r.x) * r.z + z / 2,
      bottom: (y.y - r.y) * r.z + X / 2
    });
  }
  const S = v[0], k = (M, y) => {
    const z = Math.max(0, Math.min(M.left + x, y.right) - Math.max(M.left, y.left)), X = Math.max(0, Math.min(M.top + p, y.bottom) - Math.max(M.top, y.top));
    return z * X;
  }, b = ((Y = v.map((M) => ({
    candidate: M,
    overlap: w.reduce((y, z) => y + k(M, z), 0),
    distance: Math.hypot(M.left - S.left, M.top - S.top)
  })).sort((M, y) => M.overlap - y.overlap || M.distance - y.distance)[0]) == null ? void 0 : Y.candidate) ?? S;
  return { inspectorRef: i, position: b };
}
function Sn(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function Bi(t) {
  const e = t.type === "image" ? [] : ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), Sn(t) && e.push("diagram"), e;
}
function Ka(t) {
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
const Ki = "#3b82f6";
function ie(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function Te(t) {
  return Math.round(ie(t, 0, 255)).toString(16).padStart(2, "0");
}
function Ri(t) {
  const e = t.trim().endsWith("%"), n = Number.parseFloat(t);
  return Number.isFinite(n) ? e ? n * 2.55 : n : 0;
}
function ye(t) {
  var i, l;
  const e = t.trim().toLowerCase(), n = (i = e.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : i[1];
  if (n)
    return n.length === 3 || n.length === 4 ? `#${n.slice(0, 3).split("").map((s) => `${s}${s}`).join("")}` : `#${n.slice(0, 6)}`;
  const r = (l = e.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : l[1];
  if (r) {
    const s = r.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(Ri);
    if (s.length === 3) return `#${s.map(Te).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? Ki;
}
function Zn(t) {
  const e = ye(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, r = Number.parseInt(e.slice(2, 4), 16) / 255, o = Number.parseInt(e.slice(4, 6), 16) / 255, i = Math.max(n, r, o), l = Math.min(n, r, o), s = i - l;
  let x = 0;
  return s !== 0 && (i === n ? x = 60 * ((r - o) / s % 6) : i === r ? x = 60 * ((o - n) / s + 2) : x = 60 * ((n - r) / s + 4)), x < 0 && (x += 360), { hue: x, saturation: i === 0 ? 0 : s / i, value: i };
}
function Jn({ hue: t, saturation: e, value: n }) {
  const r = (t % 360 + 360) % 360, o = n * e, i = o * (1 - Math.abs(r / 60 % 2 - 1)), l = n - o;
  let s = 0, x = 0, p = 0;
  return r < 60 ? [s, x, p] = [o, i, 0] : r < 120 ? [s, x, p] = [i, o, 0] : r < 180 ? [s, x, p] = [0, o, i] : r < 240 ? [s, x, p] = [0, i, o] : r < 300 ? [s, x, p] = [i, 0, o] : [s, x, p] = [o, 0, i], `#${Te((s + l) * 255)}${Te((x + l) * 255)}${Te((p + l) * 255)}`;
}
function Ui(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function Gi({ value: t, onChange: e }) {
  const [n, r] = it(() => Zn(t)), o = J(null), i = J(null), l = J(null);
  vt(() => {
    const v = Zn(t);
    r((w) => Ui(w, v) ? w : v);
  }, [t]);
  const s = (v) => {
    r(v), e(Jn(v));
  }, x = (v) => {
    var Y;
    const w = (Y = o.current) == null ? void 0 : Y.getBoundingClientRect();
    if (!w) return;
    const S = v.clientX - (w.left + w.width / 2), k = v.clientY - (w.top + w.height / 2), b = Math.atan2(k, S) * 180 / Math.PI + 90;
    s({ ...n, hue: (b + 360) % 360 });
  }, p = (v) => {
    var S;
    const w = (S = i.current) == null ? void 0 : S.getBoundingClientRect();
    w && s({
      ...n,
      saturation: ie((v.clientX - w.left) / w.width, 0, 1),
      value: ie(1 - (v.clientY - w.top) / w.height, 0, 1)
    });
  }, c = (v, w) => {
    var S, k;
    w.button !== 0 && w.pointerType !== "touch" || (w.preventDefault(), w.stopPropagation(), l.current = v, (k = (S = w.currentTarget).setPointerCapture) == null || k.call(S, w.pointerId), v === "hue" ? x(w) : p(w));
  }, g = (v) => {
    l.current && (v.preventDefault(), l.current === "hue" ? x(v) : p(v));
  }, a = (v) => {
    var w, S;
    l.current = null;
    try {
      (S = (w = v.currentTarget).releasePointerCapture) == null || S.call(w, v.pointerId);
    } catch {
      return;
    }
  }, d = (n.hue - 90) * Math.PI / 180, u = 53, m = {
    left: 66 + Math.cos(d) * u,
    top: 66 + Math.sin(d) * u
  }, h = Jn({ hue: n.hue, saturation: 1, value: 1 }), f = (v) => s({ ...n, hue: (n.hue + v + 360) % 360 });
  return /* @__PURE__ */ j("div", { className: "canvas-color-wheel", "data-canvas-color-wheel": !0, children: [
    /* @__PURE__ */ j(
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
        onPointerDown: (v) => c("hue", v),
        onPointerMove: g,
        onPointerUp: a,
        onKeyDown: (v) => {
          (v.key === "ArrowLeft" || v.key === "ArrowDown") && (v.preventDefault(), f(-1)), (v.key === "ArrowRight" || v.key === "ArrowUp") && (v.preventDefault(), f(1));
        },
        children: [
          /* @__PURE__ */ I("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ I("span", { className: "canvas-color-wheel-hue-marker", style: { left: m.left, top: m.top } })
        ]
      }
    ),
    /* @__PURE__ */ I(
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
        onPointerDown: (v) => c("sv", v),
        onPointerMove: g,
        onPointerUp: a,
        onKeyDown: (v) => {
          const w = v.shiftKey ? 0.1 : 0.02;
          v.key === "ArrowLeft" && (v.preventDefault(), s({ ...n, saturation: ie(n.saturation - w, 0, 1) })), v.key === "ArrowRight" && (v.preventDefault(), s({ ...n, saturation: ie(n.saturation + w, 0, 1) })), v.key === "ArrowDown" && (v.preventDefault(), s({ ...n, value: ie(n.value - w, 0, 1) })), v.key === "ArrowUp" && (v.preventDefault(), s({ ...n, value: ie(n.value + w, 0, 1) }));
        },
        children: /* @__PURE__ */ I("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${n.saturation * 100}%`, top: `${(1 - n.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ j("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ I("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ I("span", { children: ye(t).toUpperCase() })
    ] })
  ] });
}
function Vi({ s: t, isDarkMode: e, editing: n, installedFontFamilies: r, patchSelected: o, applyFormat: i, applyList: l, applyCustomFontFamily: s }) {
  const x = wt(t), p = e ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100";
  return /* @__PURE__ */ j(ce, { children: [
    "      ",
    /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
      /* @__PURE__ */ I("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
      /* @__PURE__ */ j("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: ee(t), color: U.white, mixBlendMode: "normal" }, children: [
        /* @__PURE__ */ I("span", { "aria-hidden": "true", children: "A" }),
        /* @__PURE__ */ I("input", { "data-canvas-control": "text-color", type: "color", "aria-label": "글씨 색", value: t.textColor ?? ee(t), onChange: (c) => o({ textColor: c.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
      ] }),
      /* @__PURE__ */ j("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${e ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
        /* @__PURE__ */ I("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
        /* @__PURE__ */ I("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => o({ fontSize: Math.max(8, x - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${p}`, children: /* @__PURE__ */ I(bo, { className: "w-3.5 h-3.5" }) }),
        /* @__PURE__ */ I("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: x }),
        /* @__PURE__ */ I("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => o({ fontSize: Math.min(96, x + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${p}`, children: /* @__PURE__ */ I(ko, { className: "w-3.5 h-3.5" }) })
      ] }),
      /* @__PURE__ */ j("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${e ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
        /* @__PURE__ */ I("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (c) => {
          const g = Di(c.target.value);
          o(g === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: g, customFontFamily: void 0 });
        }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${e ? "text-slate-200" : "text-slate-700"}`, children: Ii.map((c) => /* @__PURE__ */ I("option", { value: c, className: e ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: Dt[c].label }, c)) }),
        /* @__PURE__ */ I(So, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
      ] }),
      t.fontFamily === "custom" && /* @__PURE__ */ j(ce, { children: [
        /* @__PURE__ */ I("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (c) => s(c.target.value), onChange: (c) => c.currentTarget.value && s(c.currentTarget.value), onKeyDown: (c) => {
          c.key === "Enter" && (c.preventDefault(), s(c.currentTarget.value));
        }, onDoubleClick: (c) => c.stopPropagation(), onPointerDown: (c) => c.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${e ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
        /* @__PURE__ */ I("datalist", { id: `canvas-font-families-${t.id}`, children: r.map((c) => /* @__PURE__ */ I("option", { value: c }, c)) })
      ] })
    ] }),
    /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${e ? "border-slate-700" : "border-slate-100"}`, children: [
      /* @__PURE__ */ I("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
      /* @__PURE__ */ I("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${e ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", $o, "왼쪽 정렬"], ["center", Mo, "가운데 정렬"], ["right", Co, "오른쪽 정렬"]].map(([c, g, a]) => /* @__PURE__ */ I("button", { type: "button", "aria-label": a, title: a, onClick: () => o({ textAlign: c }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${It(t) === c ? "bg-blue-600 text-white shadow-sm" : p}`, children: /* @__PURE__ */ I(g, { className: "w-4 h-4" }) }, c)) }),
      n && /* @__PURE__ */ j(ce, { children: [
        /* @__PURE__ */ I("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
        /* @__PURE__ */ I("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${e ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", zo, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", Io, "번호 목록"]].map(([c, g, a]) => /* @__PURE__ */ I("button", { type: "button", onClick: () => l(c), "aria-label": a, title: a, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${p}`, children: g ? /* @__PURE__ */ I(g, { className: "w-4 h-4" }) : /* @__PURE__ */ I("span", { className: "text-base leading-none", children: "–" }) }, c)) }),
        /* @__PURE__ */ I("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${e ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: Xo, label: "굵게" }, { cmd: "italic", Icon: Yo, label: "기울임" }, { cmd: "underline", Icon: Po, label: "밑줄" }].map(({ cmd: c, Icon: g, label: a }) => /* @__PURE__ */ I("button", { type: "button", onClick: () => i(c), "aria-label": a, title: a, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${p}`, children: /* @__PURE__ */ I(g, { className: "w-4 h-4" }) }, c)) })
      ] })
    ] })
  ] });
}
const qi = [2, 4, 6, 8], Qn = Math.PI / 12;
function Zi(t) {
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
      return Wr(t);
  }
}
function tr(t) {
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
      return Wr(t);
  }
}
function Wr(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function an(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function er(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Ji({
  shape: t,
  selection: e,
  selectionActions: n,
  shapes: r,
  camera: o,
  canvasSize: i,
  isDarkMode: l,
  editing: s,
  showPalette: x,
  installedFontFamilies: p,
  setShowPalette: c,
  setActiveColor: g,
  patchSelected: a,
  applyFormat: d,
  applyList: u,
  applyCustomFontFamily: m
}) {
  var tt;
  const h = l ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", f = e.length > 1, v = e.some(($) => !!$.groupId), w = t.type === "draw", S = w || er(t) && !an(t) ? "stroke" : an(t) ? "fill" : "text", [k, b] = it(S), [Y, M] = it("");
  se(() => b(S), [S, t.id]);
  const y = k === "text" ? ee(t) : k === "stroke" ? t.strokeColor ?? (t.color ? lt[t.color].border : U.ink) : ke(t);
  se(() => M(ye(y).toUpperCase()), [y]);
  const z = ye(y), X = ($) => {
    a(w || k === "stroke" ? { strokeColor: $ } : k === "text" ? { textColor: $ } : { fillColor: $ });
  }, C = ($) => {
    g($), a(w || k === "stroke" ? { color: $, strokeColor: void 0 } : k === "text" ? { textColor: lt[$].text } : { color: $, fillColor: void 0 }), c(!1);
  }, { inspectorRef: E, position: L } = ji(t, e, r, o, i), D = e.every(Zi), N = new Set(e.map(tr)).size === 1 ? tr(t) : void 0, W = Bi(t), A = t.type === "image" ? "arrange" : t.type === "arrow" ? "arrow" : W[0] ?? "color", [O, B] = it(A);
  se(() => {
    W.includes(O) || B(A);
  }, [A, W, O]);
  const _ = t.type === "arrow" && !!((tt = t.orthogonalWaypoints) != null && tt.length), K = t.type === "arrow" ? t.arrowStart ?? "none" : "none", q = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", Q = ($, F, G, rt, xt = rt) => /* @__PURE__ */ I("button", { type: "button", title: rt, "aria-label": xt, onClick: G, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${F ? "bg-blue-600 text-white" : h}`, children: $ }), Z = ($, F = "") => /* @__PURE__ */ I("span", { className: `px-1 text-[10px] font-semibold tracking-wide opacity-60 ${F}`, children: $ }), et = ($, F, G, rt, xt = !1) => /* @__PURE__ */ I(
    "button",
    {
      type: "button",
      title: F,
      "aria-label": F,
      disabled: !rt,
      onClick: G,
      className: `w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default ${xt ? "text-rose-500 hover:bg-rose-500/10" : h}`,
      children: /* @__PURE__ */ I($, { className: "w-4 h-4" })
    }
  ), mt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ j("div", { ref: E, "data-canvas-inspector": w ? "draw" : "text", className: `absolute z-40 pointer-events-auto flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${l ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: L.left, top: L.top }, onPointerDown: ($) => {
    $.stopPropagation();
    const F = $.target instanceof Element ? $.target : null;
    F != null && F.closest("input, select, textarea") || $.preventDefault();
  }, onClick: ($) => $.stopPropagation(), children: [
    f ? /* @__PURE__ */ j("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      e.length,
      "개 선택됨"
    ] }) : /* @__PURE__ */ I("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: W.map(($) => /* @__PURE__ */ I("button", { type: "button", role: "tab", "aria-selected": O === $, onClick: () => B($), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${O === $ ? "bg-blue-600 text-white" : h}`, children: mt[$] }, $)) }),
    /* @__PURE__ */ j("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: f || O === "color" ? void 0 : "none" }, children: [
      /* @__PURE__ */ I("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: w ? "그리기" : "색상" }),
      /* @__PURE__ */ I("button", { type: "button", title: w ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": w ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => c(($) => !$), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${l ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ I("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ I("span", { className: "canvas-color-wheel-trigger-dot", style: { background: z } }) }) }),
      x && /* @__PURE__ */ j("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${l ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !w && /* @__PURE__ */ j("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          an(t) && /* @__PURE__ */ I("button", { type: "button", role: "tab", "aria-selected": k === "fill", onClick: () => b("fill"), className: k === "fill" ? "is-active" : "", children: "배경" }),
          er(t) && /* @__PURE__ */ I("button", { type: "button", role: "tab", "aria-selected": k === "stroke", onClick: () => b("stroke"), className: k === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ I("button", { type: "button", role: "tab", "aria-selected": k === "text", onClick: () => b("text"), className: k === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ I("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: gr.map(($) => /* @__PURE__ */ I("button", { type: "button", title: lt[$].label, "aria-label": `색 ${lt[$].label}`, onClick: () => C($), className: "canvas-color-preset", style: { background: lt[$].bg, borderColor: lt[$].border, outline: t.color === $ && !t.fillColor && !t.strokeColor ? `2px solid ${U.blue}` : void 0, outlineOffset: 1 } }, $)) }),
        /* @__PURE__ */ I(Gi, { value: y, onChange: X }),
        /* @__PURE__ */ j("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ I("span", { children: "#" }),
          /* @__PURE__ */ I(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: Y.replace(/^#/, ""),
              onChange: ($) => {
                const F = $.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                M(`#${F}`.toUpperCase()), F.length === 6 && X(`#${F}`);
              },
              onBlur: () => M(ye(y).toUpperCase()),
              onPointerDown: ($) => $.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !f && O !== "color" && !w && /* @__PURE__ */ j(ce, { children: [
      O === "text" && /* @__PURE__ */ I(Vi, { s: t, isDarkMode: l, editing: s, installedFontFamilies: p, patchSelected: a, applyFormat: d, applyList: u, applyCustomFontFamily: m }),
      (O === "arrange" && t.type === "card" || O === "arrow" && t.type === "arrow") && /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${l ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ j(ce, { children: [
          /* @__PURE__ */ I("div", { className: `w-px h-6 ${l ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ I("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: ($) => $.stopPropagation(), onChange: ($) => a({ category: $.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${l ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            Z("경로"),
            Q("직선", (t.routing ?? "straight") === "straight", () => a({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            Q("직각", t.routing === "orthogonal", () => a({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            Q("곡선", (t.routing ?? "") === "curved", () => a({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            _ && Q("자동", !1, () => a({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            Z("선"),
            Q("—", (t.strokeStyle ?? "solid") === "solid", () => a({ strokeStyle: "solid" }), "실선"),
            Q("- -", t.strokeStyle === "dashed", () => a({ strokeStyle: "dashed" }), "파선"),
            Q("···", t.strokeStyle === "dotted", () => a({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            Z("시작"),
            Q(K === "none" ? "○" : K === "dot" ? "●" : "◀", K !== "none", () => a({ arrowStart: K === "none" ? "arrow" : K === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${K === "none" ? "없음" : K === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            Z("끝"),
            Q(q === "none" ? "○" : q === "dot" ? "●" : "▶", q !== "none", () => a({ arrowEnd: q === "arrow" ? "dot" : q === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${q === "none" ? "없음" : q === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      O === "diagram" && /* @__PURE__ */ I("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${l ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    (f || O === "arrange") && /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", children: [
      et(Fo, "맨 앞으로", () => n.reorderSelected("front"), !0),
      et(Wo, "앞으로", () => n.reorderSelected("forward"), !0),
      et(Ao, "뒤로", () => n.reorderSelected("backward"), !0),
      et(Oo, "맨 뒤로", () => n.reorderSelected("back"), !0)
    ] }),
    D && (f || O === "color" || O === "arrow") && /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${l ? "border-slate-700" : "border-slate-100"}`, children: [
      Z("굵기"),
      qi.map(($) => /* @__PURE__ */ I(Bt.Fragment, { children: Q(String($), N === $, () => a({ strokeWidth: $ }), `굵기 ${$}`) }, $))
    ] }),
    /* @__PURE__ */ j("div", { className: `canvas-selection-actions flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${l ? "border-slate-700" : "border-slate-100"}`, children: [
      Z("선택", "canvas-selection-label"),
      /* @__PURE__ */ j("div", { className: "canvas-selection-action-buttons flex flex-wrap items-center gap-1 pointer-events-auto", children: [
        et(No, "그룹 (Ctrl+G)", n.group, f),
        et(Eo, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, v),
        et(Lo, "복사 (Ctrl+C)", n.copySelected, !0),
        et(_o, "붙여넣기 (Ctrl+V)", () => {
          n.pasteClipboard();
        }, !0),
        et(To, "복제", n.duplicateSelected, !0),
        et(Ho, "왼쪽으로 15도 회전", () => n.rotateSelected(-Qn), !0),
        et(jo, "오른쪽으로 15도 회전", () => n.rotateSelected(Qn), !0),
        et(Bo, "회전 초기화", () => n.rotateSelected(0), !0),
        et(Do, "삭제 (Delete)", n.deleteSelected, !0, !0)
      ] })
    ] })
  ] });
}
const Qi = [2, 4, 6, 8];
function ta({
  tool: t,
  activeColor: e,
  drawStrokeWidth: n,
  drawInkStyle: r,
  objectSnapEnabled: o,
  onSelectInkStyle: i,
  onSelectObjectSnap: l,
  isDarkMode: s,
  onSelectColor: x,
  onSelectStrokeWidth: p
}) {
  const c = t === "draw" || t === "highlighter", g = `rounded-lg px-2 py-1 text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${s ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-700"}`, a = /* @__PURE__ */ j(
    "button",
    {
      type: "button",
      "aria-label": "개체 정렬",
      "aria-pressed": o,
      title: "개체 이동 시 주변 개체에 자동 정렬",
      className: g,
      style: { minHeight: 28, whiteSpace: "nowrap" },
      onClick: () => l(!o),
      children: [
        "개체 정렬 ",
        o ? "켬" : "끔"
      ]
    }
  );
  return c ? /* @__PURE__ */ j(
    "div",
    {
      "data-canvas-pen-palette": "true",
      "aria-label": t === "highlighter" ? "형광펜 설정" : "펜 설정",
      style: { left: "50%", transform: "translateX(-50%)", width: 340, maxWidth: "calc(100% - 32px)", boxSizing: "border-box", justifyContent: "center" },
      className: `absolute top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex flex-wrap items-center gap-2 px-3 py-2 rounded-2xl border shadow-xl backdrop-blur-md ${s ? "bg-slate-900/90 border-slate-700 text-slate-200 shadow-slate-950/40" : "bg-white/90 border-slate-200 text-slate-700 shadow-slate-300/40"}`,
      onPointerDown: (u) => u.stopPropagation(),
      onClick: (u) => u.stopPropagation(),
      children: [
        /* @__PURE__ */ I("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }, role: "radiogroup", "aria-label": "펜 색상 선택", children: gr.map((u) => {
          const m = lt[u], h = e === u;
          return /* @__PURE__ */ I(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": h,
              title: `${m.label} 선택`,
              "aria-label": m.label,
              onClick: () => x(u),
              className: `group relative w-6 h-6 rounded-full transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${h ? "scale-110 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900" : "hover:scale-105 opacity-90 hover:opacity-100"}`,
              style: {
                backgroundColor: m.border,
                borderColor: m.border
              },
              children: h && /* @__PURE__ */ I("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ I("span", { className: "w-1.5 h-1.5 rounded-full bg-white shadow-sm" }) })
            },
            u
          );
        }) }),
        /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ I("span", { className: `mr-1 text-xs font-semibold ${s ? "text-slate-300" : "text-slate-500"}`, children: "두께" }),
          Qi.map((u) => {
            const m = n === u;
            return /* @__PURE__ */ I(
              "button",
              {
                type: "button",
                title: `두께 ${u}px`,
                "aria-label": `두께 ${u}px`,
                "aria-pressed": m,
                onClick: () => p(u),
                className: `w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-semibold transition-colors ${m ? "bg-blue-600 text-white font-bold" : s ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-700"}`,
                children: /* @__PURE__ */ I(
                  "span",
                  {
                    className: "rounded-full bg-current",
                    style: { width: `${Math.max(3, u + 1)}px`, height: `${Math.max(3, u + 1)}px` }
                  }
                )
              },
              u
            );
          })
        ] }),
        /* @__PURE__ */ I("div", { role: "group", "aria-label": "새 획 보정", style: { display: "flex", gap: 2 }, children: ["raw", "smoothed"].map((u) => /* @__PURE__ */ I(
          "button",
          {
            type: "button",
            "aria-label": u === "raw" ? "보정 끔" : "보정 켬",
            "aria-pressed": r === u,
            title: "새로 그리는 획에 적용",
            onClick: () => i(u),
            className: g,
            style: { minHeight: 28, whiteSpace: "nowrap", ...r === u ? { background: "#2563eb", color: "#ffffff" } : {} },
            children: u === "raw" ? "보정 끔" : "보정 켬"
          },
          u
        )) }),
        /* @__PURE__ */ I("div", { style: { width: "100%", display: "flex", justifyContent: "center" }, children: a })
      ]
    }
  ) : null;
}
function ea({ isDarkMode: t, onExit: e }) {
  return /* @__PURE__ */ j(
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
        /* @__PURE__ */ I(Ko, { "aria-hidden": "true", className: "h-4 w-4" }),
        /* @__PURE__ */ I("span", { children: "펜 모드 종료" })
      ]
    }
  );
}
function cn(t) {
  const e = t.closest("[data-canvas-board-id]");
  return (e == null ? void 0 : e.getAttribute("data-canvas-pen-mode")) === "true" || ["draw", "highlighter", "eraser"].includes((e == null ? void 0 : e.getAttribute("data-canvas-active-tool")) ?? "");
}
function na({ category: t, onCommit: e }) {
  const [n, r] = it(!1), o = J(null);
  return vt(() => {
    var i;
    n && ((i = o.current) == null || i.focus());
  }, [n]), /* @__PURE__ */ j(
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
        i.pointerType === "pen" || cn(i.currentTarget) || i.stopPropagation();
      },
      onDoubleClick: (i) => i.stopPropagation(),
      onClick: (i) => {
        n || cn(i.currentTarget) || r(!0);
      },
      onBlur: (i) => {
        if (!n) return;
        const l = (i.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim();
        e(l.toUpperCase() || "ENTITY"), r(!1);
      },
      onKeyDown: (i) => {
        !n && (i.key === "Enter" || i.key === " ") ? (i.preventDefault(), i.stopPropagation(), cn(i.currentTarget) || r(!0)) : n && i.key === "Enter" && (i.preventDefault(), i.stopPropagation(), i.currentTarget.blur());
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
function ra({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: r,
  commitEditorHtml: o,
  onEditorKeyDown: i,
  setShapes: l,
  onDirty: s,
  renderDiagram: x
}) {
  const p = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", c = (a, d) => /* @__PURE__ */ I(
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
      onDoubleClick: (u) => u.stopPropagation(),
      onKeyDown: i,
      className: `${p} ${a}`,
      style: d
    },
    "canvas-editor"
  );
  return { renderEditor: c, renderShapeBody: (a) => {
    const d = lt[a.color ?? "blue"], u = e === a.id, m = He(a);
    if (a.type === "frame") {
      const b = a.strokeWidth ?? 2;
      return /* @__PURE__ */ I(
        "div",
        {
          "data-canvas-stroke-width": b,
          className: "w-full h-full rounded",
          style: { border: `${b / t.z}px solid ${n ? U.slate600 : U.slate400}` },
          children: /* @__PURE__ */ I(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? U.slate400 : U.muted
              },
              children: u ? c("", { fontSize: 13 / t.z }) : Se(a) || "프레임"
            }
          )
        }
      );
    }
    if (a.type === "note")
      return /* @__PURE__ */ I(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: ke(a), borderTop: `6px solid ${d.border}`, color: d.text },
          children: u ? c("font-medium", { color: ee(a), fontSize: wt(a), fontFamily: bt(a), textAlign: It(a) }) : m ? /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: ee(a), fontSize: wt(a), fontFamily: bt(a), textAlign: It(a) }, dangerouslySetInnerHTML: { __html: m } }, "canvas-view") : /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: ee(a), fontSize: wt(a), fontFamily: bt(a), textAlign: It(a) }, children: /* @__PURE__ */ I("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (a.type === "card") {
      const b = a.cardStyle === "glass";
      return Sn(a) && x && !u ? /* @__PURE__ */ I("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: x(a) }) : /* @__PURE__ */ j(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: b ? U.glassFill : a.fillColor ?? U.slateCard,
            backdropFilter: b ? "blur(12px)" : void 0,
            WebkitBackdropFilter: b ? "blur(12px)" : void 0,
            border: `1px solid ${b ? U.glassBorder : U.darkBorder}`,
            boxShadow: b ? U.glassShadow : U.cardShadow
          },
          children: [
            /* @__PURE__ */ I(
              na,
              {
                category: a.category,
                onCommit: (Y) => {
                  l((M) => M.map((y) => y.id === a.id ? { ...y, category: Y } : y)), s();
                }
              }
            ),
            u ? c("flex-1 font-medium", { color: a.textColor ?? U.white, fontSize: wt(a), fontFamily: bt(a), textAlign: It(a) }) : /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: a.textColor ?? U.white, fontSize: wt(a), fontFamily: bt(a), textAlign: It(a) }, dangerouslySetInnerHTML: { __html: m } }, "canvas-view"),
            /* @__PURE__ */ j("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              a.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (a.type === "text") {
      const b = n ? "text-slate-100" : "text-slate-900", Y = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${b}`,
        style: { color: a.textColor, fontSize: wt(a), fontFamily: bt(a), textAlign: It(a) }
      };
      return u ? c(`font-medium ${b}`, Y.style) : m ? /* @__PURE__ */ I(
        "div",
        {
          "data-canvas-text-view": !0,
          ...Y,
          dangerouslySetInnerHTML: { __html: m }
        },
        "canvas-view"
      ) : /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, ...Y, children: /* @__PURE__ */ I("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (a.type === "image") {
      const b = xn(a.src);
      return b ? /* @__PURE__ */ I(
        "img",
        {
          src: b,
          alt: a.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const h = ke(a), f = Ir(a), v = ee(a);
    if (a.type === "triangle" || a.type === "diamond" || a.type === "hexagon" || a.type === "star") {
      const b = a.strokeWidth ?? 2;
      return /* @__PURE__ */ j("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ I("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${a.w} ${a.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ I("polygon", { "data-canvas-stroke-width": b, points: Xr(a.type, a.w, a.h), fill: h, stroke: f, strokeWidth: b / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ I("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: v }, children: u ? c("font-medium", { color: v, fontSize: wt(a), fontFamily: bt(a), textAlign: It(a) }) : /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: wt(a), fontFamily: bt(a), textAlign: It(a) }, dangerouslySetInnerHTML: { __html: m } }, "canvas-view") })
      ] });
    }
    const S = xn(a.src), k = a.type === "rect" || a.type === "ellipse" ? a.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ I(
      "div",
      {
        "data-canvas-stroke-width": k,
        className: `w-full h-full flex items-center justify-center p-3 ${a.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: h, border: `${k / t.z}px solid ${f}`, color: v },
        children: u ? c("font-medium", { color: v, fontSize: wt(a), fontFamily: bt(a), textAlign: It(a) }) : /* @__PURE__ */ j("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: wt(a), fontFamily: bt(a), textAlign: It(a) }, children: [
          /* @__PURE__ */ I("div", { dangerouslySetInnerHTML: { __html: m } }),
          S && /* @__PURE__ */ I(
            "a",
            {
              href: S,
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
function oa({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: r,
  selected: o,
  editingId: i,
  boardIdentity: l
}) {
  const [s, x] = it({ width: 0, height: 0 });
  vt(() => {
    const u = t.current;
    if (!u) return;
    let m = -1, h = -1;
    const f = (w = u.clientWidth, S = u.clientHeight) => {
      w === m && S === h || (m = w, h = S, x({ width: w, height: S }));
    };
    if (f(), typeof ResizeObserver < "u") {
      const w = new ResizeObserver((S) => {
        var b;
        const k = (b = S[0]) == null ? void 0 : b.contentRect;
        f((k == null ? void 0 : k.width) ?? u.clientWidth, (k == null ? void 0 : k.height) ?? u.clientHeight);
      });
      return w.observe(u), () => w.disconnect();
    }
    const v = () => f();
    return window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, [l, t]);
  const p = Wt(() => new Map(n.map((u) => [u.id, u])), [n]), c = n, g = Wt(() => {
    if (!t.current || s.width <= 0 || s.height <= 0) return null;
    const u = 200 / r.z;
    return {
      minX: r.x - u,
      minY: r.y - u,
      maxX: r.x + s.width / r.z + u,
      maxY: r.y + s.height / r.z + u
    };
  }, [r, t, s]), a = at((u) => {
    if (!g) return !1;
    if (u.id === i || o.has(u.id)) return !0;
    if (u.type === "arrow") {
      const h = Et(u, p, e.current), v = (h.routing === "orthogonal" ? h.pathPoints : null) ?? [h.start, h.end], w = Math.min(...v.map((Y) => Y.x)), S = Math.max(...v.map((Y) => Y.x)), k = Math.min(...v.map((Y) => Y.y)), b = Math.max(...v.map((Y) => Y.y));
      return S >= g.minX && w <= g.maxX && b >= g.minY && k <= g.maxY;
    }
    const m = ht(u);
    return m.maxX >= g.minX && m.minX <= g.maxX && m.maxY >= g.minY && m.minY <= g.maxY;
  }, [i, o, p, e, g]), d = Wt(
    () => c.filter(a),
    [a, c]
  );
  return { shapeById: p, visiblePaintOrder: d };
}
function ia({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: r,
  onDirty: o,
  patchSelected: i
}) {
  const l = at(() => {
    const d = t.current;
    if (!d || !e) return;
    let u;
    try {
      u = gn(d.innerHTML);
    } catch {
      r("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const m = d.scrollHeight;
    n((h) => h.map((f) => {
      if (f.id !== e) return f;
      const v = Sn(f) ? { ...f, text: Se({ ...f, html: u, text: void 0 }), html: void 0 } : { ...f, html: u, text: void 0 };
      if (f.type === "text")
        return f.manualSize ? v : { ...v, ...Ai(d, f) };
      if (f.type === "arrow") return v;
      const w = f.type === "note" ? 32 : f.type === "card" ? 96 : (
        // category header + type footer
        (f.type === "frame", 24)
      ), S = Math.max(f.h, m + w);
      return { ...v, h: S };
    })), o();
  }, [e, o]), s = (d) => {
    var u;
    (u = t.current) == null || u.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(d), l();
  }, x = () => {
    var h;
    const d = (h = window.getSelection()) == null ? void 0 : h.anchorNode, u = d instanceof Element ? d : d == null ? void 0 : d.parentElement, m = u == null ? void 0 : u.closest("ul, ol");
    return m instanceof HTMLElement ? m : null;
  }, p = (d, u, m) => {
    const h = document.createElement(u);
    for (; d.firstChild; ) h.append(d.firstChild);
    return d.replaceWith(h), h;
  }, c = (d) => {
    const u = t.current;
    if (!u) return;
    u.focus();
    const m = x();
    if (d === "number")
      if ((m == null ? void 0 : m.tagName) === "OL")
        m.removeAttribute("data-list-style");
      else if ((m == null ? void 0 : m.tagName) === "UL")
        p(m, "ol");
      else {
        document.execCommand("insertOrderedList");
        const h = x();
        h == null || h.removeAttribute("data-list-style");
      }
    else if ((m == null ? void 0 : m.tagName) === "UL") {
      const h = m.dataset.listStyle;
      d === h ? document.execCommand("insertUnorderedList") : m.dataset.listStyle = d;
    } else {
      (m == null ? void 0 : m.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const h = x();
      h && (h.dataset.listStyle = d);
    }
    l();
  };
  return { commitEditorHtml: l, applyFormat: s, applyList: c, onEditorKeyDown: (d) => {
    if (d.key === "Tab") {
      d.preventDefault(), document.execCommand(d.shiftKey ? "outdent" : "indent"), l();
      return;
    }
    if (d.key === " ") {
      const u = window.getSelection();
      if (u && u.isCollapsed && u.anchorNode) {
        const m = u.anchorNode, h = m.textContent || "", f = u.anchorOffset, v = h.slice(0, f).trim();
        if (!x()) {
          if (v === "-" || v === "–") {
            d.preventDefault(), m.textContent = h.slice(f), c("dash");
            return;
          }
          if (v === "*") {
            d.preventDefault(), m.textContent = h.slice(f), c("bullet");
            return;
          }
          if (v === "1.") {
            d.preventDefault(), m.textContent = h.slice(f), c("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (d) => {
    const u = Dr(d);
    if (!u) {
      i({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    i({
      fontFamily: "custom",
      customFontFamily: u
    });
  } };
}
const nr = "chois_canvas_ink_style", rr = "chois_canvas_object_snap", or = "chois_canvas_show_grid";
function sn(t) {
  try {
    return typeof window > "u" ? null : window.localStorage.getItem(t);
  } catch {
    return null;
  }
}
function ln(t, e) {
  try {
    typeof window < "u" && window.localStorage.setItem(t, e);
  } catch {
  }
}
function aa(t) {
  const [e, n] = it(() => sn(nr) === "smoothed" ? "smoothed" : "raw"), [r, o] = it(() => sn(rr) !== "false"), [i, l] = it(() => sn(or) !== "false"), s = t.drawInkStyle ?? e, x = t.objectSnapEnabled ?? r, p = t.showGrid ?? i;
  return vt(() => ln(nr, s), [s]), vt(() => ln(rr, String(x)), [x]), vt(() => ln(or, String(p)), [p]), { drawInkStyle: s, objectSnapEnabled: x, showGrid: p, selectInkStyle: (d) => {
    var u;
    t.drawInkStyle === void 0 && n(d), (u = t.onDrawInkStyleChange) == null || u.call(t, d);
  }, selectObjectSnap: (d) => {
    var u;
    t.objectSnapEnabled === void 0 && o(d), (u = t.onObjectSnapEnabledChange) == null || u.call(t, d);
  }, selectShowGrid: (d) => {
    var u;
    t.showGrid === void 0 && l(d), (u = t.onShowGridChange) == null || u.call(t, d);
  } };
}
function ca({
  boardIdentity: t,
  tool: e,
  activeColor: n,
  defaultActiveColor: r,
  onActiveColorChange: o,
  controlledShapes: i,
  onShapesChange: l,
  onDirty: s
}) {
  const x = J(null), p = J(null), [c, g] = it([]), a = i !== void 0 && l !== void 0, d = J(/* @__PURE__ */ new WeakMap()), u = Wt(() => {
    const T = d.current;
    return (a ? i ?? [] : c).map((R) => {
      let H = T.get(R);
      return H === void 0 && (H = pn(R), T.set(R, H)), H;
    }).filter((R) => R !== null);
  }, [a, i, c]), m = J(l);
  m.current = l;
  const h = at((T) => {
    const R = m.current;
    if (!R) {
      g(T);
      return;
    }
    R(typeof T == "function" ? T : () => T);
  }, []), [f, v] = it({ x: -400, y: -300, z: 1 }), [w, S] = it(/* @__PURE__ */ new Set()), [k, b] = it(null), [Y, M] = it({ kind: "none" }), [y, z] = it(!1), [X, C] = it([]), [E, L] = it(""), [D, P] = it(!1), [N, W] = it(null), [A, O] = it(!1), [B, _] = it(n ?? r ?? "blue"), K = n ?? B, q = J(o);
  q.current = o;
  const Q = at((T) => {
    _((R) => {
      var ot;
      const H = typeof T == "function" ? T(R) : T;
      return (ot = q.current) == null || ot.call(q, H), H;
    });
  }, []), [Z, et] = it(Le), mt = J(K);
  mt.current = K;
  const tt = J([]), $ = J([]), F = J(null), G = J(/* @__PURE__ */ new Map()), rt = J(null), xt = J(null), Yt = J([]), Pt = J(/* @__PURE__ */ new Set()), ct = J(u), V = J(f), Lt = J(e), Kt = J(w), Rt = J(k), gt = J(!1);
  ct.current = u, V.current = f, Lt.current = e, Kt.current = w, Rt.current = k;
  const Ut = at((T) => {
    var R;
    gt.current = T, T && typeof window < "u" && ((R = window.getSelection()) == null || R.removeAllRanges()), O(T);
  }, []), [le, oe] = it("ink"), [st, $t] = it("yellow"), kt = e === "highlighter" ? st : le, Mt = J(kt);
  Mt.current = kt;
  const Gt = at((T) => {
    Lt.current === "highlighter" ? $t(T) : oe(T);
  }, []), Nt = J({ kind: "none" }), pt = at((T) => {
    Nt.current = T, M(T);
  }, []), Tt = at((T) => {
    Kt.current = T, S(T);
  }, []);
  se(() => {
    var R;
    const T = /* @__PURE__ */ new Set();
    Kt.current = T, Rt.current = null, G.current.clear(), tt.current = [], $.current = [], F.current = null, xt.current = null, Yt.current = [], Pt.current.clear(), gt.current = !1, pt({ kind: "none" }), S(T), b(null), z(!1), C([]), W(null), O(!1), L(""), (R = x.current) == null || R.focus();
  }, [pt, t]), vt(() => {
    let T = !1;
    const R = () => {
      const ot = Ni();
      T || et(ot);
    };
    if (R(), typeof document > "u" || !("fonts" in document)) return;
    const H = () => R();
    return document.fonts.addEventListener("loadingdone", H), () => {
      T = !0, document.fonts.removeEventListener("loadingdone", H);
    };
  }, [t]);
  const dt = (k ? u.find((T) => T.id === k) : void 0) !== void 0;
  se(() => {
    if (!k || !dt) return;
    const T = () => {
      const H = p.current, ot = ct.current.find((Me) => Me.id === k);
      if (!H || !ot || (H.dataset.seeded !== k && (H.innerHTML = He(ot), H.dataset.seeded = k), document.activeElement === H)) return;
      H.focus();
      const Vt = document.createRange();
      Vt.selectNodeContents(H), Vt.collapse(!1);
      const qt = window.getSelection();
      qt == null || qt.removeAllRanges(), qt == null || qt.addRange(Vt);
    };
    T();
    const R = requestAnimationFrame(T);
    return () => cancelAnimationFrame(R);
  }, [k, dt]);
  const ue = at((T) => {
    h((R) => {
      const H = typeof T == "function" ? T(R) : T;
      return tt.current.push(R), tt.current.length > 100 && tt.current.shift(), $.current = [], H;
    }), s();
  }, [s]), Ke = at((T) => {
    if (T.length === 0) return;
    let R = ct.current;
    for (const H of T)
      tt.current.push(R), R = [...R, H];
    tt.current.length > 100 && tt.current.splice(0, tt.current.length - 100), $.current = [], h((H) => [...H, ...T]), s();
  }, [s, h]), Re = at((T) => T.size === 0 ? !1 : (ue((R) => R.filter((H) => T.has(H.id) || H.parentId && T.has(H.parentId) ? !1 : H.type !== "arrow" ? !0 : !(H.fromId && T.has(H.fromId)) && !(H.toId && T.has(H.toId)))), Tt(/* @__PURE__ */ new Set()), L(`${T.size}개 삭제됨`), !0), [ue, Tt]), Ue = at(() => {
    F.current = ct.current;
  }, []), $e = at(() => {
    const T = F.current;
    F.current = null, !(!T || T === ct.current) && (tt.current.push(T), tt.current.length > 100 && tt.current.shift(), $.current = [], s());
  }, [s]), Ge = at(() => {
    const T = F.current;
    F.current = null, !(!T || T === ct.current) && (ct.current = T, h(T));
  }, [h]), Ve = at((T, R) => {
    var Vt;
    const H = (Vt = x.current) == null ? void 0 : Vt.getBoundingClientRect(), ot = V.current;
    return H ? { x: (T - H.left) / ot.z + ot.x, y: (R - H.top) / ot.z + ot.y } : { x: 0, y: 0 };
  }, []), qe = at(() => {
    var H;
    const T = (H = x.current) == null ? void 0 : H.getBoundingClientRect(), R = V.current;
    return T ? { x: R.x + T.width / 2 / R.z, y: R.y + T.height / 2 / R.z } : { x: 0, y: 0 };
  }, []), Ht = at((T) => {
    const R = new Set(ct.current.filter((ot) => T.has(ot.id) && ot.groupId).map((ot) => ot.groupId));
    if (R.size === 0) return T;
    const H = new Set(T);
    for (const ot of ct.current) ot.groupId && R.has(ot.groupId) && H.add(ot.id);
    return H;
  }, []);
  return {
    containerRef: x,
    editorRef: p,
    localShapes: c,
    setLocalShapes: g,
    controlled: a,
    shapes: u,
    setShapes: h,
    camera: f,
    setCamera: v,
    cameraRef: V,
    selected: w,
    setSelected: S,
    selectedRef: Kt,
    editingId: k,
    setEditingId: b,
    editingIdRef: Rt,
    interaction: Y,
    interactionRef: Nt,
    applyInteraction: pt,
    isSpaceDown: y,
    setIsSpaceDown: z,
    guides: X,
    setGuides: C,
    announcement: E,
    setAnnouncement: L,
    showInspectorPalette: D,
    setShowInspectorPalette: P,
    eraserPos: N,
    setEraserPos: W,
    isPenMode: A,
    setIsPenMode: Ut,
    penModeRef: gt,
    activeColor: K,
    setActiveColor: Q,
    activeColorRef: mt,
    drawColor: kt,
    setDrawColor: Gt,
    drawColorRef: Mt,
    installedFontFamilies: Z,
    pointers: G,
    past: tt,
    future: $,
    selectNow: Tt,
    commit: ue,
    deleteSelection: Re,
    beginHistory: Ue,
    endHistory: $e,
    cancelHistory: Ge,
    toPage: Ve,
    viewportCentre: qe,
    expandToGroups: Ht,
    toolRef: Lt,
    shapesRef: ct,
    liveStrokeCanvasRef: rt,
    activeDrawRef: xt,
    pendingDrawsRef: Yt,
    queuedDrawIdsRef: Pt,
    commitDrawBatch: Ke
  };
}
function sa({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: r,
  maxZoom: o,
  shapes: i,
  selected: l,
  editingId: s,
  textualTypes: x,
  onZoomChange: p,
  onSelectionChange: c,
  onLocalCursor: g,
  toPage: a
}) {
  vt(() => {
    p == null || p(e.z);
  }, [e.z, p]), vt(() => {
    const w = t.current;
    if (!w) return;
    const S = (k) => {
      if (k.preventDefault(), k.ctrlKey || k.metaKey) {
        const b = w.getBoundingClientRect();
        n((Y) => {
          const M = Math.min(o, Math.max(r, Y.z * Math.exp(-k.deltaY * 0.01))), y = k.clientX - b.left, z = k.clientY - b.top;
          return { x: Y.x + y / Y.z - y / M, y: Y.y + z / Y.z - z / M, z: M };
        });
      } else
        n((b) => ({ ...b, x: b.x + k.deltaX / b.z, y: b.y + k.deltaY / b.z }));
    };
    return w.addEventListener("wheel", S, { passive: !1 }), () => w.removeEventListener("wheel", S);
  }, [t, o, r, n]);
  const d = Wt(() => {
    const w = i.filter((S) => l.has(S.id));
    return {
      count: w.length,
      canGroup: w.length > 1,
      canUngroup: w.some((S) => !!S.groupId),
      isTextual: w.length === 1 && x.includes(w[0].type),
      selectedIds: w.map((S) => S.id)
    };
  }, [l, i, x]);
  vt(() => {
    c == null || c(d);
  }, [c, d]);
  const u = Wt(() => {
    if (s) {
      const S = i.find((k) => k.id === s);
      return S && S.type !== "image" && S.type !== "draw" ? [S] : [];
    }
    const w = i.filter((S) => l.has(S.id));
    return w.length === 1, w;
  }, [s, l, i]), m = Wt(() => u.length === 0 ? null : u[0] ?? null, [u]), h = J(0);
  return { selectionInfo: d, inspectorSelection: u, inspectorShape: m, onContainerPointerMove: g ? (w) => {
    const S = performance.now();
    S - h.current < 60 || (h.current = S, g(a(w.clientX, w.clientY)));
  } : void 0, onContainerPointerLeave: g ? () => g(null) : void 0 };
}
function We(t, e) {
  const n = new Set(e);
  for (const r of t) r.parentId && e.has(r.parentId) && n.add(r.id);
  return n;
}
function la(t, e, n) {
  const r = We(t, e);
  return t.map((o) => r.has(o.id) ? n === 0 ? { ...o, rotation: void 0 } : { ...o, rotation: (o.rotation ?? 0) + n } : o);
}
function ua(t, e, n) {
  const r = We(t, e), o = [...t];
  switch (n) {
    case "front":
      return [...t.filter((i) => !r.has(i.id)), ...t.filter((i) => r.has(i.id))];
    case "back":
      return [...t.filter((i) => r.has(i.id)), ...t.filter((i) => !r.has(i.id))];
    case "forward":
      for (let i = o.length - 2; i >= 0; i--) {
        const l = o[i], s = o[i + 1];
        l && s && r.has(l.id) && !r.has(s.id) && (o[i] = s, o[i + 1] = l);
      }
      return o;
    case "backward":
      for (let i = 1; i < o.length; i++) {
        const l = o[i], s = o[i - 1];
        l && s && r.has(l.id) && !r.has(s.id) && (o[i] = s, o[i - 1] = l);
      }
      return o;
    default: {
      const i = n;
      throw new Error(String(i));
    }
  }
}
const zt = 24, Ar = "choi01-canvas-selection";
function ir(t) {
  var e;
  return {
    ...t,
    points: (e = t.points) == null ? void 0 : e.map(([n, r]) => [n, r]),
    orthogonalWaypoints: t.type === "arrow" && t.orthogonalWaypoints ? t.orthogonalWaypoints.map((n) => ({ ...n })) : void 0
  };
}
function da(t) {
  try {
    const e = JSON.parse(t);
    return !e || typeof e != "object" || !("marker" in e) || e.marker !== Ar || !("shapes" in e) || !Array.isArray(e.shapes) ? null : e.shapes.map((n) => mr(n));
  } catch {
    return null;
  }
}
function fa({
  containerRef: t,
  shapesRef: e,
  clipboardRef: n,
  selectedRef: r,
  commit: o,
  deleteSelection: i,
  selectNow: l,
  setAnnouncement: s,
  createId: x
}) {
  return Wt(() => ({
    copySelected: () => {
      var g;
      const p = We(e.current, r.current), c = e.current.filter((a) => p.has(a.id)).map(ir);
      c.length !== 0 && (n.current = c, typeof navigator < "u" && ((g = navigator.clipboard) != null && g.writeText) && navigator.clipboard.writeText(JSON.stringify({ marker: Ar, shapes: c })).catch(() => {
      }), s(String(c.length) + "개 복사됨"));
    },
    pasteClipboard: async () => {
      var d;
      let p = n.current;
      if (!p && typeof navigator < "u" && ((d = navigator.clipboard) != null && d.readText))
        try {
          p = da(await navigator.clipboard.readText());
        } catch {
          p = null;
        }
      if (!p || p.length === 0) {
        s("붙여넣을 개체가 없습니다");
        return;
      }
      const c = new Map(p.map((u) => [u.id, x()])), g = /* @__PURE__ */ new Map(), a = p.map((u) => {
        var h;
        let m = u.groupId;
        return m && (g.has(m) || g.set(m, x("g")), m = g.get(m)), {
          ...ir(u),
          id: c.get(u.id) ?? x(),
          parentId: u.parentId ? c.get(u.parentId) ?? u.parentId : void 0,
          fromId: u.fromId ? c.get(u.fromId) ?? u.fromId : void 0,
          toId: u.toId ? c.get(u.toId) ?? u.toId : void 0,
          x: u.x + zt,
          y: u.y + zt,
          groupId: m,
          points: (h = u.points) == null ? void 0 : h.map(([f, v]) => [f + zt, v + zt]),
          orthogonalWaypoints: u.type === "arrow" && u.orthogonalWaypoints ? u.orthogonalWaypoints.map((f) => ({ x: f.x + zt, y: f.y + zt })) : void 0
        };
      });
      o((u) => [...u, ...a]), l(new Set(a.map((u) => u.id))), s(String(a.length) + "개 붙여넣음");
    },
    rotateSelected: (p) => {
      const c = r.current;
      c.size !== 0 && (o((g) => la(g, c, p)), s(p === 0 ? "회전 초기화됨" : "회전됨"));
    },
    reorderSelected: (p) => {
      const c = r.current;
      c.size !== 0 && (o((g) => ua(g, c, p)), s("레이어 순서 변경됨"));
    },
    deleteSelected: () => {
      i(r.current);
    },
    duplicateSelected: () => {
      var d;
      const p = We(e.current, r.current);
      if (p.size === 0) return;
      const c = [], g = /* @__PURE__ */ new Map(), a = new Map(e.current.filter((u) => p.has(u.id)).map((u) => [u.id, x()]));
      for (const u of e.current) {
        if (!p.has(u.id)) continue;
        let m = u.groupId;
        m && (g.has(m) || g.set(m, x("g")), m = g.get(m)), c.push({
          ...u,
          id: a.get(u.id) ?? x(),
          parentId: u.parentId ? a.get(u.parentId) ?? u.parentId : void 0,
          fromId: u.fromId ? a.get(u.fromId) ?? u.fromId : void 0,
          toId: u.toId ? a.get(u.toId) ?? u.toId : void 0,
          x: u.x + zt,
          y: u.y + zt,
          groupId: m,
          points: (d = u.points) == null ? void 0 : d.map(([h, f]) => [h + zt, f + zt]),
          orthogonalWaypoints: u.type === "arrow" && u.orthogonalWaypoints ? u.orthogonalWaypoints.map((h) => ({ x: h.x + zt, y: h.y + zt })) : void 0
        });
      }
      o((u) => [...u, ...c]), l(new Set(c.map((u) => u.id))), s(`${c.length}개 복제됨`);
    },
    group: () => {
      var g;
      const p = r.current;
      if (p.size < 2) return;
      const c = x("g");
      o((a) => a.map((d) => p.has(d.id) ? { ...d, groupId: c } : d)), s(`${p.size}개 그룹화됨`), (g = t.current) == null || g.focus();
    },
    ungroup: () => {
      var c;
      const p = r.current;
      p.size !== 0 && (o((g) => g.map((a) => p.has(a.id) ? { ...a, groupId: void 0 } : a)), s("그룹 해제됨"), (c = t.current) == null || c.focus());
    }
  }), [n, o, t, x, i, l, r, s, e]);
}
function Or(t, e, n = t) {
  if (t.length === 0) return null;
  const r = new Map(n.map((h) => [h.id, h])), o = /* @__PURE__ */ new Map(), i = (h) => {
    const f = o.get(h.id);
    if (f) return f;
    const v = Et(h, r, n);
    return o.set(h.id, v), v;
  }, l = (h) => {
    var w;
    if (h.type !== "arrow") return ht(h);
    const f = i(h), v = (w = f.pathPoints) != null && w.length ? f.pathPoints : f.routing === "curved" ? [f.start, f.control, f.end] : [f.start, f.end];
    return {
      minX: Math.min(...v.map((S) => S.x)),
      minY: Math.min(...v.map((S) => S.y)),
      maxX: Math.max(...v.map((S) => S.x)),
      maxY: Math.max(...v.map((S) => S.y))
    };
  };
  let s = 1 / 0, x = 1 / 0, p = -1 / 0, c = -1 / 0;
  for (const h of t) {
    const f = l(h);
    s = Math.min(s, f.minX), x = Math.min(x, f.minY), p = Math.max(p, f.maxX), c = Math.max(c, f.maxY);
  }
  const g = 40, a = p - s + g * 2, d = c - x + g * 2;
  if (!Number.isFinite(a) || !Number.isFinite(d) || a > ne.maxExportDimension || d > ne.maxExportDimension || a * d > ne.maxExportPixels) return null;
  const u = (h, f, v, w, S) => {
    const k = h.fontSize ?? v, b = bt(h), Y = Nr(He(h));
    if (Y.length === 0) return "";
    const M = Ot(h), y = h.textAlign === "right" ? "end" : h.textAlign === "center" ? "middle" : h.textAlign === "left" ? "start" : S, z = y === "end" ? M.maxX - 12 : y === "middle" ? (M.minX + M.maxX) / 2 : M.minX + 12, X = M.minY + k + 12;
    return Y.map((C, E) => {
      const L = C.map((D) => `<tspan style="${[
        D.bold ? "font-weight:700" : `font-weight:${w}`,
        D.italic ? "font-style:italic" : "",
        D.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${jt(D.text)}</tspan>`).join("");
      return `<text x="${z}" y="${X + E * k * 1.4}" font-family="${jt(b)}" font-size="${k}" fill="${f}" text-anchor="${y}">${L}</text>`;
    }).join("");
  }, m = t.map((h) => {
    const f = lt[h.color ?? "blue"], v = Ot(h), w = Xt(h), S = h.rotation ? ` transform="rotate(${h.rotation * 180 / Math.PI} ${w.x} ${w.y})"` : "", k = h.strokeColor ?? (h.color ? lt[h.color].border : U.ink);
    if (h.type === "draw" && h.points) {
      const C = Pr(h), E = jt(_e(h)), L = C.opacity === 1 ? "" : ` stroke-opacity="${C.opacity}" fill-opacity="${C.opacity}"`;
      return `<path d="${C.d}" fill="${C.filled ? E : "none"}" stroke="${C.filled ? "none" : E}" stroke-width="${C.width}"${L} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (h.type === "arrow") {
      const C = i(h), E = h.strokeWidth ?? 2.5, L = Math.max(10, 8 + E * 2), D = Math.max(4, 2 + E), P = C.routing === "orthogonal" && C.pathPoints ? C.pathPoints : null, N = P && P.length > 1, W = N ? un(P) : C.routing === "curved" ? `M ${C.start.x} ${C.start.y} Q ${C.control.x} ${C.control.y} ${C.end.x} ${C.end.y}` : `M ${C.start.x} ${C.start.y} L ${C.end.x} ${C.end.y}`, A = N ? Sr(P) : C.routing === "curved" ? (() => {
        const Z = pe(0.94, C.start, C.control, C.end);
        return Math.atan2(C.end.y - Z.y, C.end.x - Z.x);
      })() : Math.atan2(C.end.y - C.start.y, C.end.x - C.start.x), O = N ? we(P[0], P[1]) : C.routing === "orthogonal" && C.start.side ? C.start.side === "e" ? 0 : C.start.side === "w" ? Math.PI : C.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : we(C.start, C.end), B = h.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : h.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", _ = (Z, et, mt, tt) => {
        if (Z === "dot") return `<circle cx="${et}" cy="${mt}" r="${D}" fill="${k}"/>`;
        if (Z === "none") return "";
        const $ = `${et - L * Math.cos(tt - 0.4)},${mt - L * Math.sin(tt - 0.4)}`, F = `${et - L * Math.cos(tt + 0.4)},${mt - L * Math.sin(tt + 0.4)}`;
        return `<polygon points="${et},${mt} ${$} ${F}" fill="${k}"/>`;
      }, K = C.routing === "orthogonal" && C.pathPoints ? wn(C.pathPoints) : C.bend === 0 ? { x: (C.start.x + C.end.x) / 2, y: (C.start.y + C.end.y) / 2 } : pe(0.5, C.start, C.control, C.end), q = Se(h), Q = q ? `<text x="${K.x}" y="${K.y - 6}" text-anchor="middle" font-family="${jt(bt(h))}" font-size="${h.fontSize ?? 12}" fill="${k}">${jt(q)}</text>` : "";
      return `<path d="${W}" fill="none" stroke="${k}" stroke-width="${E}" stroke-linecap="round" stroke-linejoin="round"${B}/>` + _(h.arrowEnd ?? "arrow", C.end.x, C.end.y, A) + _(h.arrowStart ?? "none", C.start.x, C.start.y, O + Math.PI) + Q;
    }
    if (h.type === "image" && h.src) {
      const C = xn(h.src);
      return C ? `<image href="${jt(C)}" x="${v.minX}" y="${v.minY}" width="${v.maxX - v.minX}" height="${v.maxY - v.minY}"${S}/>` : "";
    }
    if (h.type === "frame")
      return `<g${S}><rect x="${v.minX}" y="${v.minY}" width="${v.maxX - v.minX}" height="${v.maxY - v.minY}" fill="none" stroke="${U.slate400}" stroke-width="${h.strokeWidth ?? 2}" rx="4"/><text x="${v.minX}" y="${v.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${U.muted}">${jt(h.text ?? "프레임")}</text></g>`;
    if (h.type === "note")
      return `<g${S}><rect x="${v.minX}" y="${v.minY}" width="${v.maxX - v.minX}" height="${v.maxY - v.minY}" fill="${ke(h)}"/><rect x="${v.minX}" y="${v.minY}" width="${v.maxX - v.minX}" height="6" fill="${f.border}"/>` + u(h, ee(h), 14, "600", "start") + "</g>";
    if (h.type === "card") {
      const C = h.cardStyle === "glass";
      return `<g${S}><rect x="${v.minX}" y="${v.minY}" width="${v.maxX - v.minX}" height="${v.maxY - v.minY}" rx="16" fill="${C ? U.glassFill : U.slateCard}"/><text x="${v.minX + 16}" y="${v.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${U.slate400}">[ ${jt(h.category ?? "ENTITY")} ]</text>` + u(h, U.white, 16, "700", "start") + "</g>";
    }
    const b = h.type === "rect" || h.type === "ellipse" || h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star" ? h.strokeWidth ?? 2 : 2, Y = ke(h), M = Ir(h), y = h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star", z = y ? Xr(h.type, v.maxX - v.minX, v.maxY - v.minY).split(" ").map((C) => {
      const [E, L] = C.split(",").map(Number);
      return `${E + v.minX},${L + v.minY}`;
    }).join(" ") : "", X = h.type === "ellipse" ? `<ellipse cx="${(v.minX + v.maxX) / 2}" cy="${(v.minY + v.maxY) / 2}" rx="${(v.maxX - v.minX) / 2}" ry="${(v.maxY - v.minY) / 2}" fill="${Y}" stroke="${M}" stroke-width="${b}"/>` : y ? `<polygon points="${z}" fill="${Y}" stroke="${M}" stroke-width="${b}" stroke-linejoin="round"/>` : `<rect x="${v.minX}" y="${v.minY}" width="${v.maxX - v.minX}" height="${v.maxY - v.minY}" rx="12" fill="${Y}" stroke="${M}" stroke-width="${b}"/>`;
    return `<g${S}>${X}${u(h, f.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${a}" height="${d}" viewBox="${s - g} ${x - g} ${a} ${d}"><rect x="${s - g}" y="${x - g}" width="${a}" height="${d}" fill="${e ? U.canvasDark : U.canvasLight}"/>` + m + "</svg>";
}
function ha(t, e) {
  return Or(t, e);
}
function xa(t, e, n) {
  return Or(
    t.filter((r) => e.has(r.id)),
    n,
    t
  );
}
async function ar(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), r = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), o = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), i = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, l = new Image();
  l.crossOrigin = "anonymous";
  try {
    await new Promise((a, d) => {
      l.onload = () => a(), l.onerror = () => d(new Error("svg rasterise failed")), l.src = i;
    });
  } catch {
    return null;
  }
  const s = 2, x = r * s, p = o * s;
  if (!Number.isSafeInteger(x) || !Number.isSafeInteger(p) || x > ne.maxExportDimension || p > ne.maxExportDimension || x * p > ne.maxExportPixels) return null;
  const c = document.createElement("canvas");
  c.width = x, c.height = p;
  const g = c.getContext("2d");
  return g ? (g.scale(s, s), g.drawImage(l, 0, 0), new Promise((a) => {
    try {
      c.toBlob((d) => a(d), "image/png");
    } catch {
      a(null);
    }
  })) : null;
}
function pa(t, e, n) {
  if (t.length < 2) return;
  const r = t.filter(
    (a) => a.type !== "draw" && a.type !== "arrow" && a.type !== "frame" && a.type !== "image"
  );
  if (r.length < 2) return;
  const o = r.map((a, d) => ({
    id: a.id,
    i: d,
    x: Xt(a).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: Xt(a).y,
    vx: 0,
    vy: 0
  }));
  for (let a = 0; a < o.length; a++)
    for (let d = 0; d < a; d++)
      if (Math.abs(o[a].x - o[d].x) < 1 && Math.abs(o[a].y - o[d].y) < 1) {
        const u = 2 * Math.PI * a / o.length;
        o[a].x += Math.cos(u) * 10, o[a].y += Math.sin(u) * 10;
        break;
      }
  const i = new Map(o.map((a) => [a.id, a])), l = [];
  for (const a of t) {
    if (a.type !== "arrow") continue;
    const d = a.fromId ? i.get(a.fromId) : null, u = a.toId ? i.get(a.toId) : null;
    d && u && l.push([d, u]);
  }
  const s = 220, x = s * s, p = 80;
  let c = 400;
  const g = c / p;
  for (let a = 0; a < p; a++) {
    for (let d = 0; d < o.length; d++)
      o[d].vx = 0, o[d].vy = 0;
    for (let d = 0; d < o.length; d++)
      for (let u = d + 1; u < o.length; u++) {
        const m = o[d], h = o[u], f = m.x - h.x, v = m.y - h.y, w = Math.hypot(f, v) || 0.01, S = x / w, k = f / w * S, b = v / w * S;
        m.vx += k, m.vy += b, h.vx -= k, h.vy -= b;
      }
    for (const [d, u] of l) {
      const m = d.x - u.x, h = d.y - u.y, f = Math.hypot(m, h) || 0.01, v = f * f / s, w = m / f * v, S = h / f * v;
      d.vx -= w, d.vy -= S, u.vx += w, u.vy += S;
    }
    for (const d of o) {
      const u = Math.hypot(d.vx, d.vy) || 0.01, m = Math.min(u, c);
      d.x += d.vx / u * m, d.y += d.vy / u * m;
    }
    c = Math.max(0.5, c - g);
  }
  e((a) => a.map((d) => {
    const u = i.get(d.id);
    return u ? { ...d, x: u.x - d.w / 2, y: u.y - d.h / 2 } : d;
  })), n();
}
function va(t, {
  controlled: e,
  past: n,
  future: r,
  setLocalShapes: o,
  setCamera: i,
  selectNow: l,
  setEditingId: s
}) {
  let x;
  try {
    x = go(t);
  } catch {
    return;
  }
  e || (n.current = [], r.current = [], o(x.shapes.map(ma))), i(x.camera), l(/* @__PURE__ */ new Set()), s(null);
}
function ma(t) {
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
      return ga(t);
  }
}
function ga(t) {
  throw new yo(`Unhandled canvas shape type: ${String(t)}.`);
}
const cr = (t) => t === "draw" || t === "highlighter";
function ya({
  ref: t,
  containerRef: e,
  shapesRef: n,
  selectedRef: r,
  cameraRef: o,
  toolRef: i,
  activeColorRef: l,
  drawColorRef: s,
  setDrawColor: x,
  setActiveColor: p,
  past: c,
  future: g,
  controlled: a,
  isDarkMode: d,
  minZoom: u,
  maxZoom: m,
  onToolChange: h,
  setSelectedStrokeWidth: f,
  onDirty: v,
  commit: w,
  selectNow: S,
  selectionActions: k,
  viewportCentre: b,
  setShapes: Y,
  setLocalShapes: M,
  setCamera: y,
  setEditingId: z,
  setAnnouncement: X,
  createId: C
}) {
  const E = at((P) => {
    const N = b(), W = pn({
      id: C(),
      x: P.x ?? N.x - P.w / 2,
      y: P.y ?? N.y - P.h / 2,
      ...P
    });
    if (!W) throw new Error("Canvas could not create a valid shape.");
    return w((A) => [...A, W]), S(/* @__PURE__ */ new Set([W.id])), h("select"), X(`${W.type} 추가됨`), W;
  }, [w, C, h, S, X, b]), L = at(() => ha(n.current, d), [d, n]), D = at(() => xa(
    n.current,
    (r == null ? void 0 : r.current) ?? /* @__PURE__ */ new Set(),
    d
  ), [d, r, n]);
  xo(t, () => ({
    addNote: (P) => {
      E({ type: "note", w: 180, h: 180, color: P, text: "" }), z(null);
    },
    addCard: (P, N, W, A) => {
      E({ type: "card", w: 260, h: 150, text: P, category: N, cardStyle: W, color: A });
    },
    addText: () => {
      const P = E({ type: "text", w: 220, h: 44, text: "" });
      z(P.id);
    },
    addShape: (P, N, W) => {
      E({
        type: P,
        w: P === "ellipse" ? 220 : 200,
        h: P === "ellipse" ? 110 : 140,
        color: N,
        text: W ?? ""
      });
    },
    addArrow: () => {
      const P = b(), N = { id: C(), type: "arrow", x: P.x - 140, y: P.y, w: 280, h: 0 };
      w((W) => [...W, N]), S(/* @__PURE__ */ new Set([N.id])), h("select");
    },
    addImages: (P) => {
      const N = b();
      let W = N.y;
      const A = P.map((O) => {
        const B = pn({ id: C(), type: "image", ...O, x: N.x - O.w / 2, y: W });
        if (!B) throw new Error("Invalid canvas image.");
        return W += O.h + 32, B;
      });
      w((O) => [...O, ...A]), n.current = [...n.current, ...A], S(new Set(A.map((O) => O.id))), z(null), h("select");
    },
    addImage: (P, N, W, A) => {
      E({ type: "image", w: W, h: A, src: P, fileName: N });
    },
    addFileCard: (P, N, W) => {
      E({ type: "rect", w: 260, h: 120, color: "purple", text: W, src: N, fileName: P });
    },
    updateShapeText: (P, N) => {
      w((W) => W.map((A) => A.id === P ? { ...A, text: N, html: void 0 } : A));
    },
    setSelectedStrokeWidth: f,
    // While a pen tool is active the "active colour" is the pen colour, so
    // hosts that drive the palette through the handle see the same thing the
    // user sees on the canvas. Other tools keep the note/shape colour.
    setActiveColor: (P) => {
      cr(i.current) ? x(P) : p(P);
    },
    getActiveColor: () => cr(i.current) ? s.current : l.current,
    setTool: h,
    undo: () => {
      const P = c.current.pop();
      P && (g.current.push(n.current), Y(P), S(/* @__PURE__ */ new Set()), z(null), v(), X("실행 취소"));
    },
    redo: () => {
      const P = g.current.pop();
      P && (c.current.push(n.current), Y(P), S(/* @__PURE__ */ new Set()), z(null), v(), X("다시 실행"));
    },
    copySelected: k.copySelected,
    pasteClipboard: k.pasteClipboard,
    deleteSelected: k.deleteSelected,
    duplicateSelected: k.duplicateSelected,
    rotateSelected: k.rotateSelected,
    group: k.group,
    ungroup: k.ungroup,
    reorderSelected: k.reorderSelected,
    zoomBy: (P) => {
      y((N) => {
        var _;
        const W = (_ = e.current) == null ? void 0 : _.getBoundingClientRect(), A = Math.min(m, Math.max(u, N.z * P));
        if (!W) return { ...N, z: A };
        const O = N.x + W.width / 2 / N.z, B = N.y + W.height / 2 / N.z;
        return { x: O - W.width / 2 / A, y: B - W.height / 2 / A, z: A };
      });
    },
    zoomTo: (P) => {
      y((N) => {
        var _;
        const W = (_ = e.current) == null ? void 0 : _.getBoundingClientRect(), A = Math.min(m, Math.max(u, P));
        if (!W) return { ...N, z: A };
        const O = N.x + W.width / 2 / N.z, B = N.y + W.height / 2 / N.z;
        return { x: O - W.width / 2 / A, y: B - W.height / 2 / A, z: A };
      });
    },
    resetZoom: () => {
      y((P) => {
        var O;
        const N = (O = e.current) == null ? void 0 : O.getBoundingClientRect();
        if (!N) return { ...P, z: 1 };
        const W = P.x + N.width / 2 / P.z, A = P.y + N.height / 2 / P.z;
        return { x: W - N.width / 2, y: A - N.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var q;
      const P = n.current, N = (q = e.current) == null ? void 0 : q.getBoundingClientRect();
      if (P.length === 0 || !N) return;
      let W = 1 / 0, A = 1 / 0, O = -1 / 0, B = -1 / 0;
      for (const Q of P) {
        const Z = ht(Q);
        W = Math.min(W, Z.minX), A = Math.min(A, Z.minY), O = Math.max(O, Z.maxX), B = Math.max(B, Z.maxY);
      }
      const _ = 80, K = Math.min(m, Math.max(
        u,
        Math.min(N.width / (O - W + _ * 2), N.height / (B - A + _ * 2))
      ));
      y({
        x: (W + O) / 2 - N.width / 2 / K,
        y: (A + B) / 2 - N.height / 2 / K,
        z: K
      });
    },
    autoLayout: () => pa(n.current, w, () => X("자동 배치 완료")),
    exportSvg: L,
    exportPng: () => ar(L),
    exportSvgForSelection: D,
    exportPngForSelection: () => ar(D),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (P) => va(P, {
      controlled: a,
      past: c,
      future: g,
      setLocalShapes: M,
      setCamera: y,
      selectNow: S,
      setEditingId: z
    })
  }), [
    E,
    L,
    D,
    w,
    C,
    d,
    m,
    u,
    v,
    h,
    k,
    S,
    y,
    z,
    M,
    f,
    Y,
    X,
    b,
    a
  ]);
}
function wa(t) {
  return t.altKey || !t.ctrlKey && !t.metaKey ? null : t.code === "KeyZ" ? t.shiftKey ? "redo" : "undo" : t.code === "KeyY" ? "redo" : null;
}
function ba(t) {
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
function ka({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: r,
  editingIdRef: o,
  toolRef: i,
  past: l,
  future: s,
  textualTypes: x,
  setIsSpaceDown: p,
  setEditingId: c,
  setShapes: g,
  setAnnouncement: a,
  commit: d,
  deleteSelection: u,
  selectNow: m,
  onDirty: h,
  onToolChange: f,
  createId: v,
  selectionActions: w
}) {
  const S = at((k, b) => {
    const Y = r.current;
    Y.size !== 0 && d((M) => M.map((y) => {
      var z;
      return Y.has(y.id) ? {
        ...y,
        x: y.x + k,
        y: y.y + b,
        points: (z = y.points) == null ? void 0 : z.map(([X, C]) => [X + k, C + b])
      } : y;
    }));
  }, [d, r]);
  vt(() => {
    const k = (y) => {
      const z = y;
      return !!z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA" || z.isContentEditable);
    }, b = (y) => y instanceof Element && !!y.closest("input, select, button, textarea, option, label, [data-canvas-control]"), Y = (y) => {
      var W, A, O, B;
      const z = t.current, X = document.activeElement, C = y.target instanceof Node && !!(z != null && z.contains(y.target)), E = !!z && (X === z || z.contains(X));
      if (!C && !E || b(y.target)) return;
      if (y.code === "Space" && !k(y.target)) {
        p(!0), y.preventDefault();
        return;
      }
      if (k(y.target)) {
        if (y.key === "Escape")
          y.preventDefault(), c(null), (W = e.current) == null || W.blur(), (A = t.current) == null || A.focus();
        else if ((y.key === "Delete" || y.key === "Backspace") && !o.current) {
          const _ = r.current;
          u(_) && y.preventDefault();
        }
        return;
      }
      const L = r.current, D = wa(y);
      if (D) {
        if (y.preventDefault(), D === "redo") {
          const _ = s.current.pop();
          _ && (l.current.push(n.current), g(_), h(), a("다시 실행"));
        } else {
          const _ = l.current.pop();
          _ && (s.current.push(n.current), g(_), h(), a("실행 취소"));
        }
        m(/* @__PURE__ */ new Set());
        return;
      }
      const P = y.metaKey || y.ctrlKey;
      if (P && y.key.toLowerCase() === "c") {
        y.preventDefault(), w.copySelected();
        return;
      }
      if (P && y.key.toLowerCase() === "v") {
        y.preventDefault(), w.pasteClipboard();
        return;
      }
      if (P && y.key.toLowerCase() === "d") {
        y.preventDefault(), w.duplicateSelected();
        return;
      }
      if (P && y.key.toLowerCase() === "g") {
        if (y.preventDefault(), y.shiftKey)
          L.size > 0 && (d((_) => _.map((K) => L.has(K.id) ? { ...K, groupId: void 0 } : K)), a("그룹 해제됨"));
        else if (L.size > 1) {
          const _ = v("g");
          d((K) => K.map((q) => L.has(q.id) ? { ...q, groupId: _ } : q)), a(`${L.size}개 그룹화됨`);
        }
        return;
      }
      if (P && y.key.toLowerCase() === "a") {
        y.preventDefault(), m(new Set(n.current.map((_) => _.id))), a(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (y.key === "Delete" || y.key === "Backspace") {
        u(L) && y.preventDefault();
        return;
      }
      if (y.key.startsWith("Arrow")) {
        y.preventDefault();
        const _ = y.shiftKey ? 10 : 1;
        y.key === "ArrowLeft" && S(-_, 0), y.key === "ArrowRight" && S(_, 0), y.key === "ArrowUp" && S(0, -_), y.key === "ArrowDown" && S(0, _);
        return;
      }
      if (y.key === "Tab" && n.current.length > 0) {
        y.preventDefault();
        const _ = n.current, K = _.findIndex((Z) => L.has(Z.id)), q = y.shiftKey ? K <= 0 ? _.length - 1 : K - 1 : K === -1 || K === _.length - 1 ? 0 : K + 1, Q = _[q];
        m(/* @__PURE__ */ new Set([Q.id])), a(`${Q.type} 선택됨: ${Se(Q) || "내용 없음"}`);
        return;
      }
      if (y.key === "Enter" && L.size === 1) {
        const _ = n.current.find((K) => L.has(K.id));
        _ && x.includes(_.type) && (y.preventDefault(), c(_.id));
        return;
      }
      if (y.key === "Escape") {
        if (o.current) {
          y.preventDefault(), c(null), (O = e.current) == null || O.blur(), (B = t.current) == null || B.focus(), f("select");
          return;
        }
        m(/* @__PURE__ */ new Set()), f("select");
        return;
      }
      const N = ba(y);
      N && (y.preventDefault(), i.current = N, f(N));
    }, M = (y) => {
      const z = t.current;
      !z || !(document.activeElement === z || z.contains(document.activeElement)) || y.code === "Space" && p(!1);
    };
    return window.addEventListener("keydown", Y), window.addEventListener("keyup", M), () => {
      window.removeEventListener("keydown", Y), window.removeEventListener("keyup", M);
    };
  }, [
    d,
    t,
    v,
    u,
    o,
    e,
    s,
    S,
    h,
    f,
    l,
    m,
    r,
    a,
    c,
    p,
    g,
    w,
    n,
    x,
    i
  ]);
}
function Ae(t) {
  return t.pointerType === "pen";
}
function Sa() {
  return typeof navigator < "u" && navigator.maxTouchPoints > 0 ? !0 : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(any-pointer: coarse)").matches;
}
function $a(t, e) {
  return e && Ae(t);
}
function Ma(t, e) {
  return !t || Ae(e);
}
function xe(t, e) {
  return [(t[0] - e.x) * e.z, (t[1] - e.y) * e.z];
}
function sr(t, e, n, r) {
  if (r === "raw") {
    let x = t[t.length - 1];
    for (const p of e) {
      if (t.length >= ne.maxDrawPoints) return;
      x && p[0] === x[0] && p[1] === x[1] || (t.push(p), x = p);
    }
    return;
  }
  const o = Math.max(n, 0.1), i = 0.05 / o, l = 4 / o;
  let s = t[t.length - 1];
  for (const x of e) {
    if (!s) {
      t.push(x), s = x;
      continue;
    }
    const p = x[0] - s[0], c = x[1] - s[1], g = Math.hypot(p, c);
    if (g < i) continue;
    const a = Math.max(1, Math.ceil(g / l)), d = Math.min(a, ne.maxDrawPoints - t.length);
    if (d <= 0) return;
    for (let u = 1; u <= d; u++) {
      const m = [
        s[0] + p * (u / a),
        s[1] + c * (u / a)
      ];
      t.push(m);
    }
    s = t[t.length - 1];
  }
}
function Ca(t) {
  const e = (t.points ?? []).map(([l, s]) => [l, s]);
  if (e.length === 0) return t;
  let n = e[0][0], r = e[0][1], o = n, i = r;
  for (const [l, s] of e)
    n = Math.min(n, l), r = Math.min(r, s), o = Math.max(o, l), i = Math.max(i, s);
  return { ...t, points: e, x: n, y: r, w: o - n, h: i - r };
}
function lr(t, e, n) {
  if (e.type !== "draw") return;
  const r = e.points ?? [];
  if (r.length === 0) return;
  const o = e.strokeWidth ?? 3, i = e.drawMode ?? "pen", l = _e(e);
  if (t.save(), t.globalAlpha = i === "highlighter" ? 0.35 : 1, t.fillStyle = l, r.length === 1 && e.inkStyle === void 0) {
    const [c, g] = xe(r[0], n);
    t.beginPath(), t.arc(c, g, Math.max(Ee(o, i) * n.z, 0.5), 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  if (typeof Path2D == "function") {
    const c = hn(e);
    t.scale(n.z, n.z), t.translate(-n.x, -n.y);
    const g = new Path2D(c.d);
    c.filled ? t.fill(g) : (t.strokeStyle = l, t.lineWidth = c.width, t.lineCap = "round", t.lineJoin = "round", t.stroke(g)), t.restore();
    return;
  }
  if (r.length === 1 || e.inkStyle === "raw" && r.every(([c, g]) => c === r[0][0] && g === r[0][1])) {
    const [c, g] = xe(r[0], n);
    t.beginPath(), t.arc(c, g, Ee(o, i) * n.z, 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  if (e.inkStyle === "raw") {
    t.beginPath();
    const [c, g] = xe(r[0], n);
    t.moveTo(c, g);
    for (let a = 1; a < r.length; a++) {
      const [d, u] = xe(r[a], n);
      t.lineTo(d, u);
    }
    t.strokeStyle = l, t.lineWidth = Ee(o, i) * 2 * n.z, t.lineCap = "round", t.lineJoin = "round", t.stroke(), t.restore();
    return;
  }
  const s = Yr(r, o, i);
  if (s.length === 0) {
    t.restore();
    return;
  }
  t.beginPath();
  const [x, p] = xe([s[0][0], s[0][1]], n);
  t.moveTo(x, p);
  for (let c = 1; c < s.length; c++) {
    const [g, a] = xe([s[c][0], s[c][1]], n);
    t.lineTo(g, a);
  }
  t.closePath(), t.fill(), t.restore();
}
function za(t, e, n, r) {
  const o = Math.max(1, Math.min(2, r)), i = Math.max(1, Math.round(e * o)), l = Math.max(1, Math.round(n * o));
  return t.width !== i && (t.width = i), t.height !== l && (t.height = l), t.style.width = `${e}px`, t.style.height = `${n}px`, o;
}
function Oe(t, e, n, r, o = 1) {
  var s;
  if (!t) return;
  const i = (s = t.getContext) == null ? void 0 : s.call(t, "2d");
  if (!i) return;
  const l = Math.max(1, Math.min(2, o || 1));
  i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, t.width, t.height), i.setTransform(l, 0, 0, l, 0, 0);
  for (const x of e) lr(i, x, r);
  n && lr(i, n, r), i.setTransform(1, 0, 0, 1, 0, 0);
}
const Ia = 0.1, Xa = 4, $n = 14, Ya = 4, ur = ["note", "card", "rect", "ellipse", "text", "image"], Pa = 400;
function Na({
  drawing: t,
  containerRef: e,
  editorRef: n,
  pointers: r,
  interactionRef: o,
  editingIdRef: i,
  cameraRef: l,
  shapesRef: s,
  selectedRef: x,
  toolRef: p,
  penModeRef: c,
  activeColorRef: g,
  drawColorRef: a,
  drawStrokeWidth: d,
  drawInkStyle: u,
  camera: m,
  shapes: h,
  selected: f,
  isSpaceDown: v,
  textualTypes: w,
  setShapes: S,
  setEditingId: k,
  applyInteraction: b,
  selectNow: Y,
  beginHistory: M,
  cancelHistory: y,
  commit: z,
  onToolChange: X,
  expandToGroups: C,
  toPage: E,
  createId: L,
  liveStrokeCanvasRef: D,
  activeDrawRef: P,
  pendingDrawsRef: N,
  setIsPenMode: W
}) {
  const A = L, O = J(null), B = ($, F) => {
    var Yt;
    const G = ((Yt = e.current) == null ? void 0 : Yt.dataset.canvasActiveTool) === "text" ? "text" : p.current;
    if (G !== "note" && G !== "text") return;
    const rt = E($, F);
    if (G === "text") {
      const Pt = new Map(s.current.map((V) => [V.id, V])), ct = [...s.current].reverse().find((V) => w.includes(V.type) && ge(V, rt.x, rt.y, l.current.z, Pt, s.current));
      if (ct) {
        Y(/* @__PURE__ */ new Set([ct.id])), k(ct.id), p.current = "select", X("select");
        return;
      }
    }
    const xt = G === "note" ? { id: A(), type: "note", x: rt.x - 90, y: rt.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: A(), type: "text", x: rt.x, y: rt.y - 22, w: 220, h: 44, text: "" };
    z((Pt) => [...Pt, xt]), Y(/* @__PURE__ */ new Set([xt.id])), k(xt.id), p.current = "select", X("select");
  };
  vt(() => {
    const $ = (G) => {
      var rt;
      c.current || (rt = e.current) != null && rt.contains(G.target) && (G.target instanceof Element && G.target.closest('[role="textbox"], [data-canvas-inspector]') || B(G.clientX, G.clientY));
    }, F = (G) => {
      var rt;
      c.current && (G.target instanceof Element && G.target.closest("[data-canvas-editor]") || (G.preventDefault(), (rt = window.getSelection()) == null || rt.removeAllRanges()));
    };
    return window.addEventListener("click", $, !0), document.addEventListener("selectstart", F, !0), () => {
      window.removeEventListener("click", $, !0), document.removeEventListener("selectstart", F, !0);
    };
  }, [e, c]);
  const _ = () => {
    const [$, F] = [...r.current.values()], G = l.current;
    b({
      kind: "pinch",
      startDist: Math.hypot(F.x - $.x, F.y - $.y) || 1,
      startZoom: G.z,
      startMidX: ($.x + F.x) / 2,
      startMidY: ($.y + F.y) / 2,
      camX: G.x,
      camY: G.y
    });
  };
  return { onPointerDown: ($) => {
    var Ut, le, oe;
    let F = p.current;
    const G = $.target instanceof Element ? $.target : $.currentTarget, rt = $.currentTarget.hasPointerCapture($.pointerId) || G.hasPointerCapture($.pointerId);
    if (!c.current && $a($, rt || Sa()) && (y(), r.current.clear(), P.current = null, Oe(
      D.current,
      N.current,
      null,
      l.current,
      window.devicePixelRatio || 1
    ), b({ kind: "none" }), F !== "draw" && F !== "highlighter" && F !== "eraser" && (F = "draw", p.current = "draw", X("draw")), W(!0)), c.current && $.pointerType === "touch") {
      if ($.cancelable && $.preventDefault(), o.current.kind !== "none") return;
      r.current.set($.pointerId, { x: $.clientX, y: $.clientY });
      try {
        $.currentTarget.setPointerCapture($.pointerId);
      } catch {
      }
      r.current.size === 2 && _();
      return;
    }
    if (!Ma(c.current, $)) {
      $.cancelable && $.preventDefault();
      return;
    }
    Ae($) && o.current.kind === "drawing" && t.finish(), c.current && Ae($) && (o.current.kind === "none" || o.current.kind === "pinch") && (r.current.clear(), b({ kind: "none" }));
    const xt = $.target instanceof Element ? $.target : null, Yt = !!(xt != null && xt.closest("[data-canvas-editor]")) && i.current !== null;
    r.current.set($.pointerId, { x: $.clientX, y: $.clientY });
    const Pt = o.current;
    if (Pt.kind === "drawing" && Pt.pointerId !== $.pointerId) {
      r.current.delete($.pointerId);
      return;
    }
    !Yt && $.cancelable && $.preventDefault();
    const ct = $.currentTarget;
    try {
      ct.setPointerCapture($.pointerId);
    } catch {
    }
    if (r.current.size === 2) {
      _();
      return;
    }
    if (r.current.size > 2) return;
    if ($.button === 1 || v || F === "hand" || $.button === 0 && F === "select" && $.altKey) {
      b({ kind: "pan", startX: $.clientX, startY: $.clientY, camX: m.x, camY: m.y });
      return;
    }
    if ($.button !== 0) return;
    const V = E($.clientX, $.clientY), Lt = x.current;
    if (Yt || (k(null), (Ut = n.current) == null || Ut.blur(), (le = e.current) == null || le.focus()), F === "draw" || F === "highlighter") {
      const st = new Map(h.map((Mt) => [Mt.id, Mt])), $t = [...h].reverse().find((Mt) => Mt.type === "note" && ge(Mt, V.x, V.y, m.z, st, h)), kt = {
        id: A(),
        type: "draw",
        x: V.x,
        y: V.y,
        w: 0,
        h: 0,
        points: [[V.x, V.y]],
        color: a.current,
        strokeWidth: d,
        inkStyle: u,
        drawMode: F === "highlighter" ? "highlighter" : "pen",
        ...$t ? { parentId: $t.id } : {}
      };
      t.start(kt, $);
      return;
    }
    if (F === "arrow" || F === "frame" || wo.includes(F)) {
      const st = F, $t = F === "arrow" ? { id: A(), type: "arrow", x: V.x, y: V.y, w: 0, h: 0, color: g.current } : F === "frame" ? { id: A(), type: "frame", x: V.x, y: V.y, w: 0, h: 0, text: "프레임" } : { id: A(), type: st, x: V.x, y: V.y, w: 0, h: 0, color: g.current, text: "" };
      M(), S((kt) => [...kt, $t]), b({ kind: "creating", id: $t.id, startX: V.x, startY: V.y });
      return;
    }
    if (F === "note" || F === "text") {
      B($.clientX, $.clientY);
      return;
    }
    if (F === "eraser") {
      M(), S((st) => $i(st, V.x, V.y, $n, m.z)), b({ kind: "erasing", lastX: V.x, lastY: V.y });
      return;
    }
    if (F === "lasso") {
      O.current = null, b({
        kind: "lasso",
        points: [{ x: V.x, y: V.y }],
        baseSelection: [...Lt],
        additive: $.shiftKey
      });
      return;
    }
    const Kt = new Map(h.map((st) => [st.id, st])), Rt = i.current ? h.find((st) => st.id === i.current) : void 0, gt = Yt && Rt ? Rt : [...h].reverse().find((st) => ge(st, V.x, V.y, m.z, Kt, h));
    if (!gt)
      O.current = null;
    else {
      const st = Date.now(), $t = !$.shiftKey && w.includes(gt.type) && ((oe = O.current) == null ? void 0 : oe.id) === gt.id && st - O.current.time < Pa, kt = $t ? gt.id : void 0;
      O.current = $t ? null : { id: gt.id, time: st };
      const Mt = $.shiftKey ? new Set(Lt).add(gt.id) : Lt.has(gt.id) ? Lt : /* @__PURE__ */ new Set([gt.id]), Gt = C(Mt);
      Y(Gt);
      const Nt = /* @__PURE__ */ new Map();
      for (const pt of h)
        (Gt.has(pt.id) || pt.parentId && Gt.has(pt.parentId)) && Nt.set(pt.id, pt);
      for (const pt of h) {
        if (pt.type !== "frame" || !Gt.has(pt.id)) continue;
        const Tt = ht(pt);
        for (const _t of h) {
          if (_t.id === pt.id || Nt.has(_t.id)) continue;
          const dt = Xt(_t);
          dt.x >= Tt.minX && dt.x <= Tt.maxX && dt.y >= Tt.minY && dt.y <= Tt.maxY && Nt.set(_t.id, _t);
        }
      }
      M(), b({ kind: "move", startX: V.x, startY: V.y, origin: Nt, editOnReleaseId: kt });
      return;
    }
    $.shiftKey || Y(/* @__PURE__ */ new Set()), b({
      kind: "marquee",
      startX: V.x,
      startY: V.y,
      curX: V.x,
      curY: V.y,
      screenStartX: $.clientX,
      screenStartY: $.clientY
    });
  }, onResizeHandleDown: ($, F, G) => {
    $.stopPropagation(), r.current.set($.pointerId, { x: $.clientX, y: $.clientY }), M(), b({ kind: "resize", id: F.id, handle: G, start: F });
  }, onRotateHandleDown: ($, F) => {
    $.stopPropagation(), r.current.set($.pointerId, { x: $.clientX, y: $.clientY });
    const G = E($.clientX, $.clientY), rt = Xt(F);
    M(), b({
      kind: "rotate",
      id: F.id,
      startAngle: Math.atan2(G.y - rt.y, G.x - rt.x),
      startRotation: F.rotation ?? 0
    });
  }, onConnectHandleDown: ($, F) => {
    $.stopPropagation(), r.current.set($.pointerId, { x: $.clientX, y: $.clientY });
    const G = E($.clientX, $.clientY);
    b({ kind: "connect", fromId: F.id, toX: G.x, toY: G.y, hoverId: null });
  }, onBendHandleDown: ($, F) => {
    $.stopPropagation(), r.current.set($.pointerId, { x: $.clientX, y: $.clientY }), M(), b({ kind: "bend", id: F.id });
  }, onOrthogonalSegmentHandleDown: ($, F, G) => {
    $.stopPropagation(), r.current.set($.pointerId, { x: $.clientX, y: $.clientY }), M(), b({ kind: "orthogonal-segment", id: F.id, segmentIndex: G });
  }, onArrowEndpointDown: ($, F, G) => {
    $.stopPropagation(), r.current.set($.pointerId, { x: $.clientX, y: $.clientY }), M(), b({ kind: "arrow-endpoint", id: F.id, endpoint: G, hoverId: null });
  } };
}
function Ea({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: r,
  shapesRef: o,
  setShapes: i,
  setEditingId: l,
  setEraserPos: s,
  setGuides: x,
  setAnnouncement: p,
  applyInteraction: c,
  selectNow: g,
  expandToGroups: a,
  endHistory: d,
  commit: u,
  onToolChange: m,
  createId: h,
  drawing: f
}) {
  const v = h;
  vt(() => {
    const w = (S) => {
      var b, Y;
      if (!t.current.delete(S.pointerId)) return;
      try {
        (Y = (b = S.target) == null ? void 0 : b.releasePointerCapture) == null || Y.call(b, S.pointerId);
      } catch {
      }
      const k = e.current;
      if (k.kind !== "none") {
        if (k.kind === "pinch") {
          t.current.size < 2 && c({ kind: "none" });
          return;
        }
        if (x([]), k.kind === "lasso") {
          if (S.type === "pointerup") {
            const M = r(S.clientX, S.clientY), y = k.points[k.points.length - 1], z = y && Math.hypot(M.x - y.x, M.y - y.y) > 1e-9 ? [...k.points, M] : k.points, X = z.length >= 3 ? o.current.filter((E) => gi(Xt(E), z)).map((E) => E.id) : [], C = k.additive ? k.baseSelection : [];
            g(a(/* @__PURE__ */ new Set([...C, ...X]))), p(X.length > 0 ? `${X.length}개 올가미 선택됨` : "올가미 안에 선택할 항목이 없습니다");
          }
          c({ kind: "none" });
          return;
        }
        if (k.kind === "erasing") {
          if (S.type === "pointerup") {
            const M = r(S.clientX, S.clientY);
            i((y) => kn(
              y,
              { x: k.lastX, y: k.lastY },
              M,
              $n,
              n.current.z
            ));
          }
          s(null), d(), c({ kind: "none" });
          return;
        }
        if (k.kind === "connect") {
          const y = o.current.find((D) => D.id === k.fromId);
          if (c({ kind: "none" }), !y) return;
          const z = { x: k.toX, y: k.toY }, X = Xt(y);
          if (!k.hoverId && Math.hypot(z.x - X.x, z.y - X.y) < 30) return;
          const C = [];
          let E = k.hoverId;
          if (!E) {
            const D = y.type === "note" ? 180 : 200, P = y.type === "note" ? 180 : 120, N = {
              ...y,
              id: v(),
              x: z.x - D / 2,
              y: z.y - P / 2,
              w: D,
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
            C.push(N), E = N.id;
          }
          const L = {
            id: v(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: y.id,
            toId: E,
            text: ""
          };
          C.push(L), u((D) => [...D, ...C]), g(/* @__PURE__ */ new Set([L.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => l(L.id)) : l(L.id), p("연결 생성됨");
          return;
        }
        if (k.kind === "bend") {
          d(), c({ kind: "none" });
          return;
        }
        if (k.kind === "drawing") {
          f.finish(S);
          return;
        }
        if (k.kind === "creating") {
          i((M) => M.map((y) => {
            if (y.id !== k.id) return y;
            const z = Math.abs(y.w) < 4 && Math.abs(y.h) < 4 ? {
              ...y,
              w: y.type === "arrow" ? 200 : y.type === "frame" ? 480 : 180,
              h: y.type === "arrow" ? 0 : y.type === "frame" ? 320 : 120
            } : y;
            if (z.type === "arrow") return z;
            const X = Ot(z);
            return { ...z, x: X.minX, y: X.minY, w: X.maxX - X.minX, h: X.maxY - X.minY };
          })), d(), g(/* @__PURE__ */ new Set([k.id])), m("select"), c({ kind: "none" });
          return;
        }
        if ((k.kind === "move" || k.kind === "resize" || k.kind === "rotate" || k.kind === "orthogonal-segment" || k.kind === "arrow-endpoint") && d(), k.kind === "move" && k.editOnReleaseId && S.type === "pointerup") {
          const M = r(S.clientX, S.clientY);
          Math.hypot(M.x - k.startX, M.y - k.startY) * n.current.z <= Ya && l(k.editOnReleaseId);
        }
        c({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", w), window.addEventListener("pointercancel", w), () => {
      window.removeEventListener("pointerup", w), window.removeEventListener("pointercancel", w);
    };
  }, [
    c,
    n,
    h,
    f,
    d,
    e,
    m,
    t,
    g,
    a,
    p,
    l,
    x,
    s,
    i,
    o,
    r,
    u
  ]);
}
function Mn() {
  return typeof navigator > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
function mn(t) {
  let e = [];
  if (!Mn() && typeof t.getCoalescedEvents == "function")
    try {
      e = t.getCoalescedEvents();
    } catch {
    }
  return [...e, t].filter((n) => Number.isFinite(n.clientX) && Number.isFinite(n.clientY));
}
function La({
  objectSnapEnabled: t,
  containerRef: e,
  pointers: n,
  interactionRef: r,
  cameraRef: o,
  shapesRef: i,
  setCamera: l,
  setShapes: s,
  setEraserPos: x,
  setGuides: p,
  applyInteraction: c,
  selectNow: g,
  expandToGroups: a,
  toPage: d,
  drawing: u
}) {
  vt(() => {
    const m = (h) => {
      var S, k;
      if (!n.current.has(h.pointerId)) return;
      n.current.set(h.pointerId, { x: h.clientX, y: h.clientY });
      const f = r.current;
      if (f.kind === "none") return;
      const v = o.current;
      if (f.kind === "pinch") {
        if (n.current.size < 2) return;
        const [b, Y] = [...n.current.values()], M = Math.hypot(Y.x - b.x, Y.y - b.y) || 1, y = (b.x + Y.x) / 2, z = (b.y + Y.y) / 2, X = (S = e.current) == null ? void 0 : S.getBoundingClientRect();
        if (!X) return;
        const C = Math.min(Xa, Math.max(Ia, f.startZoom * (M / f.startDist))), E = f.camX + (f.startMidX - X.left) / f.startZoom, L = f.camY + (f.startMidY - X.top) / f.startZoom;
        l({ x: E - (y - X.left) / C, y: L - (z - X.top) / C, z: C });
        return;
      }
      if (f.kind === "pan") {
        l({
          x: f.camX - (h.clientX - f.startX) / v.z,
          y: f.camY - (h.clientY - f.startY) / v.z,
          z: v.z
        });
        return;
      }
      const w = d(h.clientX, h.clientY);
      if (f.kind === "erasing") {
        const b = mn(h).map((y) => d(y.clientX, y.clientY)), Y = [{ x: f.lastX, y: f.lastY }, ...b];
        s((y) => {
          let z = y;
          for (let X = 1; X < Y.length; X++)
            z = kn(z, Y[X - 1], Y[X], $n, v.z);
          return z;
        });
        const M = b.at(-1);
        M && (x(M), c({ kind: "erasing", lastX: M.x, lastY: M.y }));
        return;
      }
      if (f.kind === "connect") {
        const b = i.current, Y = new Map(b.map((y) => [y.id, y])), M = [...b].reverse().find((y) => y.id !== f.fromId && ur.includes(y.type) && ge(y, w.x, w.y, v.z, Y, b));
        c({ ...f, toX: w.x, toY: w.y, hoverId: (M == null ? void 0 : M.id) ?? null });
        return;
      }
      if (f.kind === "bend") {
        const b = i.current, Y = b.find((D) => D.id === f.id);
        if (!Y) return;
        const M = Et(Y, new Map(b.map((D) => [D.id, D])), b), y = M.end.x - M.start.x, z = M.end.y - M.start.y, X = Math.hypot(y, z) || 1, C = (M.start.x + M.end.x) / 2, E = (M.start.y + M.end.y) / 2, L = (w.x - C) * (-z / X) + (w.y - E) * (y / X);
        s((D) => D.map((P) => P.id === f.id ? { ...P, bend: L } : P));
        return;
      }
      if (f.kind === "orthogonal-segment") {
        const b = i.current, Y = b.find((L) => L.id === f.id);
        if (!Y) return;
        const M = Et(Y, new Map(b.map((L) => [L.id, L])), b), y = M.routing === "orthogonal" ? M.pathPoints : void 0;
        if (!y || y.length < 2) return;
        const z = y[f.segmentIndex], X = y[f.segmentIndex + 1];
        if (!z || !X) return;
        const C = z.x === X.x ? w.x : w.y, E = qo(y, f.segmentIndex, C);
        s((L) => L.map((D) => D.id === f.id ? { ...D, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: E.slice(1, -1).map((P) => ({ x: P.x, y: P.y })) } : D));
        return;
      }
      if (f.kind === "arrow-endpoint") {
        const b = i.current, Y = b.find((E) => E.id === f.id);
        if (!Y) return;
        const M = new Map(b.map((E) => [E.id, E])), y = Et(Y, M, b), z = f.endpoint === "start" ? y.end : y.start, X = [...b].reverse().find((E) => E.id !== Y.id && ur.includes(E.type) && ge(E, w.x, w.y, v.z, M, b)), C = X ? ae(X, z.x, z.y) : { x: w.x, y: w.y };
        c({ ...f, hoverId: (X == null ? void 0 : X.id) ?? null }), s((E) => E.map((L) => {
          if (L.id !== Y.id) return L;
          const D = f.endpoint === "start" ? C : z, P = f.endpoint === "end" ? C : z;
          return {
            ...L,
            x: D.x,
            y: D.y,
            w: P.x - D.x,
            h: P.y - D.y,
            fromId: f.endpoint === "start" ? X == null ? void 0 : X.id : L.fromId,
            toId: f.endpoint === "end" ? X == null ? void 0 : X.id : L.toId
          };
        }));
        return;
      }
      if (f.kind === "marquee") {
        c({ ...f, curX: w.x, curY: w.y });
        const b = Math.min(f.startX, w.x), Y = Math.max(f.startX, w.x), M = Math.min(f.startY, w.y), y = Math.max(f.startY, w.y), z = Math.min(f.screenStartX, h.clientX), X = Math.max(f.screenStartX, h.clientX), C = Math.min(f.screenStartY, h.clientY), E = Math.max(f.screenStartY, h.clientY), L = /* @__PURE__ */ new Map();
        (k = e.current) == null || k.querySelectorAll("[data-canvas-shape-id]").forEach((P) => {
          const N = P.dataset.canvasShapeId;
          N && L.set(N, P.getBoundingClientRect());
        });
        const D = i.current.filter((P) => {
          const N = L.get(P.id);
          if (N)
            return N.right >= z && N.left <= X && N.bottom >= C && N.top <= E;
          const W = ht(P);
          return W.maxX >= b && W.minX <= Y && W.maxY >= M && W.minY <= y;
        }).map((P) => P.id);
        g(a(new Set(D)));
        return;
      }
      if (f.kind === "lasso") {
        const b = 2 / Math.max(v.z, 0.1);
        let Y = f.points;
        for (const M of mn(h)) {
          const y = d(M.clientX, M.clientY), z = Y[Y.length - 1];
          (!z || Math.hypot(y.x - z.x, y.y - z.y) >= b) && (Y = [...Y, y]);
        }
        Y !== f.points && c({ ...f, points: Y });
        return;
      }
      if (f.kind === "move") {
        let b = w.x - f.startX, Y = w.y - f.startY;
        const M = f.origin;
        if (t) {
          const y = (() => {
            let C = 1 / 0, E = 1 / 0, L = -1 / 0, D = -1 / 0;
            return M.forEach((P) => {
              const N = ht({ ...P, x: P.x + b, y: P.y + Y });
              C = Math.min(C, N.minX), E = Math.min(E, N.minY), L = Math.max(L, N.maxX), D = Math.max(D, N.maxY);
            }), { minX: C, minY: E, maxX: L, maxY: D };
          })(), z = i.current.filter((C) => !M.has(C.id)), X = Mi(y, z, v.z);
          b += X.dx, Y += X.dy, p(X.guides);
        } else
          p([]);
        s((y) => y.map((z) => {
          var C;
          const X = M.get(z.id);
          return X ? {
            ...z,
            x: X.x + b,
            y: X.y + Y,
            points: (C = X.points) == null ? void 0 : C.map(([E, L]) => [E + b, L + Y]),
            ...X.type === "arrow" && X.orthogonalWaypoints ? { orthogonalWaypoints: X.orthogonalWaypoints.map((E) => ({ x: E.x + b, y: E.y + Y })) } : {}
          } : z;
        }));
        return;
      }
      if (f.kind === "drawing") {
        if (f.pointerId !== h.pointerId) return;
        u.move(h);
        return;
      }
      if (f.kind === "creating") {
        s((b) => b.map((Y) => Y.id === f.id ? { ...Y, w: w.x - f.startX, h: w.y - f.startY } : Y));
        return;
      }
      if (f.kind === "rotate") {
        const b = i.current.find((z) => z.id === f.id);
        if (!b) return;
        const Y = Xt(b), M = Math.atan2(w.y - Y.y, w.x - Y.x);
        let y = f.startRotation + (M - f.startAngle);
        h.shiftKey && (y = Math.round(y / (Math.PI / 12)) * (Math.PI / 12)), s((z) => z.map((X) => X.id === f.id ? { ...X, rotation: y } : X));
        return;
      }
      if (f.kind === "resize") {
        const { start: b, handle: Y } = f, M = De(b, w.x, w.y);
        s((y) => y.map((z) => {
          if (z.id !== b.id) return z;
          let { x: X, y: C, w: E, h: L } = b;
          if (Y.includes("e") && (E = Math.max(20, M.x - b.x)), Y.includes("s") && (L = Math.max(20, M.y - b.y)), Y.includes("w")) {
            const D = b.x + b.w;
            X = Math.min(M.x, D - 20), E = D - X;
          }
          if (Y.includes("n")) {
            const D = b.y + b.h;
            C = Math.min(M.y, D - 20), L = D - C;
          }
          return { ...z, x: X, y: C, w: E, h: L, manualSize: z.type === "text" ? !0 : z.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", m), () => {
      window.removeEventListener("pointermove", m);
    };
  }, [
    c,
    o,
    e,
    u,
    a,
    r,
    t,
    n,
    g,
    i,
    d
  ]);
}
function Ta(t) {
  La(t), Ea(t);
}
function Da(t) {
  const e = J(t);
  e.current = t;
  const n = J([]), r = J(null), o = J(null), i = J(null), l = Wt(() => {
    const s = () => {
      const a = e.current;
      Oe(
        a.liveStrokeCanvasRef.current,
        a.pendingDrawsRef.current,
        a.activeDrawRef.current,
        a.cameraRef.current,
        window.devicePixelRatio || 1
      );
    }, x = () => {
      r.current !== null && cancelAnimationFrame(r.current), r.current = null;
    }, p = () => {
      var m;
      const a = e.current, d = a.activeDrawRef.current, u = n.current.splice(0);
      (d == null ? void 0 : d.id) === ((m = i.current) == null ? void 0 : m.shapeId) && (d != null && d.points) && sr(d.points, u, a.cameraRef.current.z, d.type === "draw" ? d.inkStyle : void 0);
    }, c = () => {
      o.current = null;
      const a = e.current, d = a.pendingDrawsRef.current.filter((u) => !a.queuedDrawIdsRef.current.has(u.id));
      if (d.length !== 0) {
        for (const u of d) a.queuedDrawIdsRef.current.add(u.id);
        a.commitDrawBatch(d);
      }
    };
    return {
      start(a, d) {
        x(), n.current = [], i.current = { shapeId: a.id, pointerId: d.pointerId, raw: !1 }, e.current.activeDrawRef.current = a, e.current.applyInteraction({ kind: "drawing", id: a.id, pointerId: d.pointerId }), s();
      },
      move(a) {
        const d = e.current, u = i.current, m = d.activeDrawRef.current;
        if (!(!u || u.pointerId !== a.pointerId || (m == null ? void 0 : m.id) !== u.shapeId || !m.points || d.interactionRef.current.kind !== "drawing")) {
          if (a.type === "pointerrawupdate") {
            if (Mn()) return;
            u.raw = !0;
          } else if (u.raw)
            return;
          if (a.shiftKey) {
            x(), n.current = [];
            const h = d.toPage(a.clientX, a.clientY);
            m.points = [m.points[0], [h.x, h.y]], s();
            return;
          }
          for (const h of mn(a)) {
            const f = d.toPage(h.clientX, h.clientY);
            n.current.push([f.x, f.y]);
          }
          r.current === null && (r.current = requestAnimationFrame(() => {
            r.current = null, p(), s();
          }));
        }
      },
      finish: (a, d = !1) => {
        const u = i.current;
        if (a && (u == null ? void 0 : u.pointerId) !== a.pointerId) return;
        const m = e.current;
        x(), p();
        const h = m.activeDrawRef.current;
        if (u && (h == null ? void 0 : h.id) === u.shapeId && h.points) {
          if ((a == null ? void 0 : a.type) === "pointerup" && Number.isFinite(a.clientX) && Number.isFinite(a.clientY)) {
            const f = m.toPage(a.clientX, a.clientY);
            sr(h.points, [[f.x, f.y]], m.cameraRef.current.z, h.type === "draw" ? h.inkStyle : void 0);
          }
          m.pendingDrawsRef.current.push(Ca(h)), m.activeDrawRef.current = null, m.pointers.current.delete(u.pointerId), m.interactionRef.current.kind === "drawing" && m.applyInteraction({ kind: "none" }), s();
        }
        i.current = null, d ? (o.current !== null && cancelAnimationFrame(o.current), c()) : o.current === null && (o.current = requestAnimationFrame(c));
      },
      cancel() {
        var u;
        x(), n.current = [];
        const a = e.current, d = i.current;
        d && ((u = a.activeDrawRef.current) == null ? void 0 : u.id) === d.shapeId && (a.activeDrawRef.current = null, a.pointers.current.delete(d.pointerId), a.interactionRef.current.kind === "drawing" && a.applyInteraction({ kind: "none" }), s()), i.current = null;
      }
    };
  }, []);
  return vt(() => {
    const s = t.containerRef.current, x = (a) => {
      a.target === s && e.current.pointers.current.has(a.pointerId) && !(s != null && s.hasPointerCapture(a.pointerId)) && l.finish(a);
    }, p = () => {
      l.finish(void 0, !0);
      const a = e.current;
      a.interactionRef.current.kind === "pinch" && a.applyInteraction({ kind: "none" }), a.interactionRef.current.kind === "none" && a.pointers.current.clear();
    }, c = () => {
      document.visibilityState === "hidden" && p();
    }, g = (a) => {
      a.key === "Escape" && i.current && a.target instanceof Node && (s != null && s.contains(a.target)) && (a.preventDefault(), l.cancel());
    };
    return window.addEventListener("pointerrawupdate", l.move), window.addEventListener("blur", p), window.addEventListener("keydown", g), document.addEventListener("visibilitychange", c), s == null || s.addEventListener("lostpointercapture", x), () => {
      window.removeEventListener("pointerrawupdate", l.move), window.removeEventListener("blur", p), window.removeEventListener("keydown", g), document.removeEventListener("visibilitychange", c), s == null || s.removeEventListener("lostpointercapture", x), r.current !== null && cancelAnimationFrame(r.current), o.current !== null && cancelAnimationFrame(o.current), r.current = null, o.current = null, n.current = [], i.current = null;
    };
  }, [l, t.containerRef]), l;
}
function Fa({ containerRef: t, penModeRef: e, toolRef: n }) {
  vt(() => {
    const r = t.current;
    if (!r) return;
    const o = r.ownerDocument, i = o.defaultView, l = /* @__PURE__ */ new Set(), s = (c) => {
      const g = Array.from(c.changedTouches), a = c.type !== "touchstart" && g.some((v) => l.has(v.identifier));
      if (c.type !== "touchstart")
        for (const v of g) l.delete(v.identifier);
      if (c.type === "touchcancel") return;
      const d = c.target instanceof Element ? c.target : null;
      if (d != null && d.closest("button, input, textarea, select, a, [data-canvas-inspector], [data-canvas-pen-palette]")) return;
      const u = n.current, m = u === "draw" || u === "highlighter" || u === "eraser", h = g.some((v) => v.touchType === "stylus"), f = c.type === "touchstart" && Mn() && u !== "note" && u !== "text" && !(d != null && d.closest('[contenteditable="true"]')) && g.some((v) => {
        const w = v.radiusX || 0;
        return v.clientX - w < 10 || v.clientX + w > ((i == null ? void 0 : i.innerWidth) ?? 1 / 0) - 10;
      });
      if (!(!a && !e.current && !m && !h && !f)) {
        if (c.type === "touchstart")
          for (const v of g)
            Number.isFinite(v.identifier) && l.add(v.identifier);
        c.cancelable && c.preventDefault();
      }
    }, x = (c) => {
      const g = c.target instanceof Node && r.contains(c.target), a = o.activeElement && r.contains(o.activeElement);
      (g || a) && c.cancelable && c.preventDefault();
    }, p = { passive: !1, capture: !0 };
    for (const c of ["touchstart", "touchend", "touchcancel"])
      r.addEventListener(c, s, p);
    for (const c of ["gesturestart", "gesturechange", "gestureend"])
      o.addEventListener(c, x, p);
    return () => {
      for (const c of ["touchstart", "touchend", "touchcancel"])
        r.removeEventListener(c, s, !0);
      for (const c of ["gesturestart", "gesturechange", "gestureend"])
        o.removeEventListener(c, x, !0);
    };
  }, [t, e, n]);
}
function Wa({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: r,
  editingIdRef: o,
  cameraRef: i,
  shapesRef: l,
  selectedRef: s,
  toolRef: x,
  penModeRef: p,
  activeColorRef: c,
  drawColorRef: g,
  drawStrokeWidth: a,
  drawInkStyle: d,
  objectSnapEnabled: u,
  camera: m,
  shapes: h,
  selected: f,
  isSpaceDown: v,
  textualTypes: w,
  setCamera: S,
  setShapes: k,
  setEditingId: b,
  setEraserPos: Y,
  setGuides: M,
  setAnnouncement: y,
  applyInteraction: z,
  selectNow: X,
  beginHistory: C,
  endHistory: E,
  cancelHistory: L,
  commit: D,
  onToolChange: P,
  expandToGroups: N,
  toPage: W,
  createId: A,
  liveStrokeCanvasRef: O,
  activeDrawRef: B,
  pendingDrawsRef: _,
  queuedDrawIdsRef: K,
  commitDrawBatch: q,
  setIsPenMode: Q
}) {
  Fa({ containerRef: t, penModeRef: p, toolRef: x });
  const Z = Da({
    containerRef: t,
    pointers: n,
    interactionRef: r,
    cameraRef: i,
    toPage: W,
    applyInteraction: z,
    liveStrokeCanvasRef: O,
    activeDrawRef: B,
    pendingDrawsRef: _,
    queuedDrawIdsRef: K,
    commitDrawBatch: q
  }), et = Na({
    drawing: Z,
    containerRef: t,
    editorRef: e,
    pointers: n,
    interactionRef: r,
    editingIdRef: o,
    cameraRef: i,
    shapesRef: l,
    selectedRef: s,
    toolRef: x,
    penModeRef: p,
    activeColorRef: c,
    drawColorRef: g,
    drawStrokeWidth: a,
    drawInkStyle: d,
    camera: m,
    shapes: h,
    selected: f,
    isSpaceDown: v,
    textualTypes: w,
    setShapes: k,
    setEditingId: b,
    applyInteraction: z,
    selectNow: X,
    beginHistory: C,
    cancelHistory: L,
    commit: D,
    onToolChange: P,
    expandToGroups: N,
    toPage: W,
    createId: A,
    liveStrokeCanvasRef: O,
    activeDrawRef: B,
    pendingDrawsRef: _,
    setIsPenMode: Q
  });
  return Ta({
    objectSnapEnabled: u,
    drawing: Z,
    containerRef: t,
    pointers: n,
    interactionRef: r,
    cameraRef: i,
    shapesRef: l,
    setCamera: S,
    setShapes: k,
    setEditingId: b,
    setEraserPos: Y,
    setGuides: M,
    setAnnouncement: y,
    applyInteraction: z,
    selectNow: X,
    endHistory: E,
    commit: D,
    onToolChange: P,
    expandToGroups: N,
    toPage: W,
    createId: A
  }), et;
}
function Aa(t) {
  ya(t);
  const e = Wt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return ka({ ...t, toolRef: e }), Wa(t);
}
function Oa({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: r,
  zoom: o
}) {
  const i = n || r.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" || e === "lasso" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", l = t ? U.gridDark : U.gridLight, s = 40 * o;
  return { cursor: i, gridColor: l, gridSize: s, strokeColorOf: (p) => p.strokeColor ? _e(p) : p.color ? lt[p.color].border : t ? "var(--canvas-slate-200)" : U.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = Ro, document.head.appendChild(t);
}
const dr = 0.1, fr = 4, hr = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function _r(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function xr(t, e, n) {
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
        return _r(r);
    }
  });
}
function pr(t, e, n) {
  return t.map((r) => e.has(r.id) && r.type === "draw" ? { ...r, ...n } : r);
}
function vr(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const Ra = po(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: r,
  activeColor: o,
  defaultActiveColor: i,
  onActiveColorChange: l,
  drawStrokeWidth: s = 4,
  onToolChange: x,
  onDirty: p,
  onZoomChange: c,
  onSelectionChange: g,
  shapes: a,
  onShapesChange: d,
  peerCursors: u,
  onLocalCursor: m,
  renderDiagram: h,
  drawInkStyle: f,
  onDrawInkStyleChange: v,
  objectSnapEnabled: w,
  onObjectSnapEnabledChange: S,
  showGrid: k,
  onShowGridChange: b
}, Y) {
  var Yn, Pn;
  const { drawInkStyle: M, objectSnapEnabled: y, showGrid: z, selectInkStyle: X, selectObjectSnap: C } = aa({
    drawInkStyle: f,
    onDrawInkStyleChange: v,
    objectSnapEnabled: w,
    onObjectSnapEnabledChange: S,
    showGrid: k,
    onShowGridChange: b
  }), [E, L] = Bt.useState(s);
  Bt.useEffect(() => L(s), [s]);
  const {
    containerRef: D,
    editorRef: P,
    setLocalShapes: N,
    controlled: W,
    shapes: A,
    setShapes: O,
    camera: B,
    setCamera: _,
    cameraRef: K,
    selected: q,
    selectedRef: Q,
    editingId: Z,
    setEditingId: et,
    editingIdRef: mt,
    interaction: tt,
    interactionRef: $,
    applyInteraction: F,
    isSpaceDown: G,
    setIsSpaceDown: rt,
    guides: xt,
    setGuides: Yt,
    announcement: Pt,
    setAnnouncement: ct,
    showInspectorPalette: V,
    setShowInspectorPalette: Lt,
    eraserPos: Kt,
    setEraserPos: Rt,
    isPenMode: gt,
    setIsPenMode: Ut,
    penModeRef: le,
    setActiveColor: oe,
    activeColorRef: st,
    drawColor: $t,
    setDrawColor: kt,
    drawColorRef: Mt,
    installedFontFamilies: Gt,
    pointers: Nt,
    past: pt,
    future: Tt,
    selectNow: _t,
    commit: dt,
    deleteSelection: ue,
    beginHistory: Ke,
    endHistory: Re,
    cancelHistory: Ue,
    toPage: $e,
    viewportCentre: Ge,
    expandToGroups: Ve,
    toolRef: qe,
    shapesRef: Ht,
    liveStrokeCanvasRef: T,
    activeDrawRef: R,
    pendingDrawsRef: H,
    queuedDrawIdsRef: ot,
    commitDrawBatch: Vt
  } = ca({ boardIdentity: e, tool: r, activeColor: o, defaultActiveColor: i, onActiveColorChange: l, controlledShapes: a, onShapesChange: d, onDirty: p }), qt = Bt.useRef(null);
  se(() => {
    const nt = T.current, Ct = D.current;
    if (!nt || !Ct) return;
    const ut = () => {
      const Ce = za(nt, Ct.clientWidth, Ct.clientHeight, window.devicePixelRatio || 1), ze = new Set(A.map((de) => de.id));
      H.current = H.current.filter((de) => !ze.has(de.id));
      for (const de of ze) ot.current.delete(de);
      Oe(nt, H.current, R.current, K.current, Ce);
    };
    if (ut(), typeof ResizeObserver > "u")
      return window.addEventListener("resize", ut), () => window.removeEventListener("resize", ut);
    const Zt = new ResizeObserver(ut);
    return Zt.observe(Ct), window.addEventListener("resize", ut), () => {
      Zt.disconnect(), window.removeEventListener("resize", ut);
    };
  }, [R, B, K, D, T, H, ot, A]);
  const Me = fa({
    containerRef: D,
    shapesRef: Ht,
    clipboardRef: qt,
    selectedRef: Q,
    commit: dt,
    deleteSelection: ue,
    selectNow: _t,
    setAnnouncement: ct,
    createId: vr
  }), {
    inspectorSelection: Ze,
    inspectorShape: Cn,
    onContainerPointerMove: Hr,
    onContainerPointerLeave: jr
  } = sa({
    containerRef: D,
    camera: B,
    setCamera: _,
    minZoom: dr,
    maxZoom: fr,
    shapes: A,
    selected: q,
    editingId: Z,
    textualTypes: hr,
    onZoomChange: c,
    onSelectionChange: g,
    onLocalCursor: m,
    toPage: $e
  }), Je = Bt.useCallback((nt) => {
    const Ct = new Set(Q.current);
    Ct.size !== 0 && dt((ut) => xr(ut, Ct, nt));
  }, [dt, Q]), Br = Bt.useCallback((nt) => {
    L(nt), Je(nt);
  }, [Je]), Kr = Bt.useCallback((nt) => {
    kt(nt);
    const Ct = new Set(
      Ht.current.filter((ut) => ut.type === "draw" && Q.current.has(ut.id)).map((ut) => ut.id)
    );
    Ct.size > 0 && dt((ut) => pr(ut, Ct, { color: nt }));
  }, [dt, Q, kt, Ht]), {
    onPointerDown: Rr,
    onResizeHandleDown: Ur,
    onRotateHandleDown: Gr,
    onConnectHandleDown: Vr,
    onBendHandleDown: qr,
    onOrthogonalSegmentHandleDown: Zr,
    onArrowEndpointDown: Jr
  } = Aa({
    ref: Y,
    containerRef: D,
    editorRef: P,
    pointers: Nt,
    interactionRef: $,
    cameraRef: K,
    shapesRef: Ht,
    toolRef: qe,
    penModeRef: le,
    activeColorRef: st,
    drawColorRef: Mt,
    setDrawColor: kt,
    setActiveColor: oe,
    drawStrokeWidth: E,
    drawInkStyle: M,
    objectSnapEnabled: y,
    setSelectedStrokeWidth: Je,
    camera: B,
    shapes: A,
    selected: q,
    isSpaceDown: G,
    setCamera: _,
    setShapes: O,
    setEditingId: et,
    setEraserPos: Rt,
    setGuides: Yt,
    setAnnouncement: ct,
    applyInteraction: F,
    selectNow: _t,
    selectionActions: Me,
    past: pt,
    future: Tt,
    beginHistory: Ke,
    endHistory: Re,
    cancelHistory: Ue,
    commit: dt,
    deleteSelection: ue,
    onDirty: p,
    onToolChange: x,
    controlled: W,
    isDarkMode: n,
    minZoom: dr,
    maxZoom: fr,
    textualTypes: hr,
    selectedRef: Q,
    editingIdRef: mt,
    setIsSpaceDown: rt,
    viewportCentre: Ge,
    setLocalShapes: N,
    expandToGroups: Ve,
    toPage: $e,
    createId: vr,
    liveStrokeCanvasRef: T,
    activeDrawRef: R,
    pendingDrawsRef: H,
    queuedDrawIdsRef: ot,
    commitDrawBatch: Vt,
    setIsPenMode: Ut
  }), { cursor: Qr, gridColor: to, gridSize: zn, strokeColorOf: eo } = Oa({
    isDarkMode: n,
    tool: r === "highlighter" ? "draw" : r,
    isSpaceDown: G,
    interaction: tt,
    zoom: B.z
  }), In = (nt) => {
    const Ct = Q.current, ut = mt.current, Zt = new Set(Ct);
    if (ut && Zt.add(ut), Zt.size === 0) return;
    const Ce = "strokeWidth" in nt, ze = Object.keys(nt).every((yt) => yt === "color" || yt === "fillColor" || yt === "strokeColor" || yt === "strokeWidth");
    if (Ze.length > 0 && Ze.every((yt) => yt.type === "draw") && ze) {
      const yt = "color" in nt ? nt.color : void 0, St = "strokeWidth" in nt ? nt.strokeWidth : void 0, Nn = "strokeColor" in nt ? nt.strokeColor : void 0;
      dt((ho) => pr(ho, Zt, {
        ...yt !== void 0 ? { color: yt } : {},
        ...St !== void 0 ? { strokeWidth: St } : {},
        ...Nn !== void 0 ? { strokeColor: Nn } : {}
      }));
      return;
    }
    if (Ce) {
      const yt = nt.strokeWidth;
      if (yt !== void 0 && Object.keys(nt).length === 1) {
        dt((St) => xr(St, Zt, yt));
        return;
      }
    }
    dt((yt) => yt.map((St) => {
      if (!Zt.has(St.id)) return St;
      if (!Ce) return { ...St, ...nt };
      switch (St.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...St, ...nt };
        case "note":
        case "card":
        case "text":
        case "image":
          return St;
        case "draw":
          return { ...St, ...nt };
        default:
          return _r(St);
      }
    }));
  }, {
    commitEditorHtml: no,
    applyFormat: ro,
    applyList: oo,
    onEditorKeyDown: io,
    applyCustomFontFamily: ao
  } = ia({
    editorRef: P,
    editingId: Z,
    setShapes: O,
    setAnnouncement: ct,
    onDirty: p,
    patchSelected: In
  }), { renderEditor: co, renderShapeBody: so } = ra({
    camera: B,
    editingId: Z,
    isDarkMode: n,
    editorRef: P,
    commitEditorHtml: no,
    onEditorKeyDown: io,
    setShapes: O,
    onDirty: p,
    renderDiagram: h
  }), lo = tt.kind === "marquee" ? tt : null, uo = tt.kind === "lasso" ? tt : null, fo = Bt.useCallback(() => {
    var nt;
    Nt.current.clear(), R.current = null, F({ kind: "none" }), Oe(
      T.current,
      H.current,
      null,
      K.current,
      window.devicePixelRatio || 1
    ), Ut(!1), x("select"), (nt = D.current) == null || nt.focus();
  }, [
    R,
    F,
    K,
    D,
    T,
    x,
    H,
    Nt,
    Ut
  ]), { shapeById: Xn, visiblePaintOrder: Qe } = oa({
    containerRef: D,
    shapesRef: Ht,
    shapes: A,
    camera: B,
    selected: q,
    editingId: Z,
    boardIdentity: e
  });
  return /* @__PURE__ */ j(
    "div",
    {
      ref: D,
      onPointerDown: Rr,
      onPointerMove: Hr,
      onPointerLeave: jr,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": r,
      "data-canvas-pen-mode": gt ? "true" : "false",
      "data-canvas-camera-x": B.x,
      "data-canvas-camera-y": B.y,
      "data-canvas-camera-z": B.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
        cursor: Qr,
        background: n ? U.canvasDark : U.canvasLight,
        backgroundImage: z ? `radial-gradient(${to} 1px, transparent 1px)` : "none",
        backgroundSize: `${zn}px ${zn}px`,
        backgroundPosition: `${-B.x * B.z}px ${-B.y * B.z}px`
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
            children: Pt
          }
        ),
        /* @__PURE__ */ j("div", { className: "absolute inset-0", style: { isolation: "isolate", zIndex: 0 }, children: [
          /* @__PURE__ */ I(
            zi,
            {
              visiblePaintOrder: Qe,
              selected: q,
              shapeById: Xn,
              allShapes: Ht.current,
              camera: B,
              interaction: tt,
              eraserPos: Kt,
              guides: y ? xt : [],
              marquee: lo,
              lasso: uo,
              strokeColorOf: eo
            }
          ),
          /* @__PURE__ */ I("canvas", { style: { zIndex: Qe.length + 1 }, ref: T, "aria-hidden": "true", "data-canvas-live-strokes": "true", className: "absolute inset-0 w-full h-full pointer-events-none" }),
          /* @__PURE__ */ I(
            Hi,
            {
              visiblePaintOrder: Qe,
              selected: q,
              editingId: Z,
              camera: B,
              shapeById: Xn,
              allShapes: Ht.current,
              peerCursors: u,
              isDarkMode: n,
              renderEditor: co,
              renderShapeBody: so,
              setEditingId: et,
              onBendHandleDown: qr,
              onOrthogonalSegmentHandleDown: Zr,
              onResizeHandleDown: Ur,
              onRotateHandleDown: Gr,
              onConnectHandleDown: Vr,
              onArrowEndpointDown: Jr
            }
          )
        ] }),
        Cn && r !== "draw" && r !== "highlighter" && r !== "eraser" && /* @__PURE__ */ I(
          Ji,
          {
            shape: Cn,
            selection: Ze,
            selectionActions: Me,
            shapes: A,
            camera: B,
            canvasSize: { width: ((Yn = D.current) == null ? void 0 : Yn.clientWidth) ?? 380, height: ((Pn = D.current) == null ? void 0 : Pn.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!Z,
            showPalette: V,
            installedFontFamilies: Gt,
            setShowPalette: Lt,
            setActiveColor: oe,
            patchSelected: In,
            applyFormat: ro,
            applyList: oo,
            applyCustomFontFamily: ao
          }
        ),
        gt && /* @__PURE__ */ I(ea, { isDarkMode: n, onExit: fo }),
        /* @__PURE__ */ I(
          ta,
          {
            tool: r,
            activeColor: $t,
            drawStrokeWidth: E,
            drawInkStyle: M,
            objectSnapEnabled: y,
            onSelectInkStyle: X,
            onSelectObjectSnap: C,
            isDarkMode: n,
            onSelectColor: Kr,
            onSelectStrokeWidth: Br
          }
        )
      ]
    }
  );
});
export {
  lt as CANVAS_COLORS,
  gr as CANVAS_COLOR_KEYS,
  Dt as CANVAS_FONTS,
  Ra as InfiniteCanvas,
  wo as SHAPE_TOOLS,
  pr as applySelectedDrawStyle,
  xr as applySelectedStrokeWidth,
  Ka as diagramTemplate,
  Bi as getInspectorGroups,
  Sn as isDiagramShape
};
