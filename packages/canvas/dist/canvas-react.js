import { jsx as S, jsxs as R, Fragment as oe } from "react/jsx-runtime";
import Bt, { useState as st, useRef as Q, useEffect as Nt, useLayoutEffect as ie, useMemo as Tt, useCallback as ut, useImperativeHandle as Or, forwardRef as Hr } from "react";
import { p as Rr, i as an, k as cn, a as dt, v as Br, c as Ht, s as _r, b as Qn, d as se, h as Kr, C as jr, S as Ur } from "./document-CLNFlHux.js";
import { Minus as Vr, Plus as Gr, ChevronDown as qr, AlignLeft as Zr, AlignCenter as Qr, AlignRight as Jr, List as to, ListOrdered as eo, Bold as no, Italic as ro, Underline as oo, Group as io, Ungroup as ao, Copy as co, Trash2 as so, MousePointer2 as lo } from "lucide-react";
const uo = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-900-90: rgba(15,23,42,.9);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-90: rgba(255,255,255,.9);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas *{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}.invoicex-canvas input,.invoicex-canvas textarea,.invoicex-canvas [contenteditable=true],.invoicex-canvas [contenteditable=true] *{-webkit-user-select:text;user-select:text}.invoicex-canvas a{-webkit-touch-callout:initial}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .top-4{top:1rem}.invoicex-canvas .left-0{left:0}.invoicex-canvas .left-1\\/2{left:50%}.invoicex-canvas .right-0{right:0}.invoicex-canvas .right-4{right:1rem}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .bottom-4{bottom:1rem}.invoicex-canvas .right-safe-4{right:max(1rem,env(safe-area-inset-right))}.invoicex-canvas .bottom-safe-4{bottom:max(1rem,env(safe-area-inset-bottom))}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .min-h-11{min-height:2.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .inline-flex{display:inline-flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .px-3\\.5{padding-left:.875rem;padding-right:.875rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .py-2{padding-top:.5rem;padding-bottom:.5rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-2{padding-right:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .mr-1{margin-right:.25rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{user-select:none;-webkit-user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .-translate-x-1\\/2{transform:translate(-50%)}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-sm{font-size:.875rem;line-height:1.25rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-900\\/90{background-color:var(--canvas-slate-900-90)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-white\\/90{background-color:var(--canvas-white-90)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-l{border-left-width:1px;border-left-style:solid}.invoicex-canvas .border-r{border-right-width:1px;border-right-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .focus-visible\\:outline:focus-visible{outline-style:solid}.invoicex-canvas .focus-visible\\:outline-2:focus-visible{outline-width:2px}.invoicex-canvas .focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.invoicex-canvas .focus-visible\\:outline-blue-500:focus-visible{outline-color:var(--canvas-blue-500)}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .backdrop-blur-md{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.invoicex-canvas .transition-all{transition-property:all;transition-duration:.15s}.invoicex-canvas .transition-transform{transition-property:transform;transition-duration:.15s}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', j = Object.freeze({
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
}), Jn = 12;
function Je(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function Se(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function Xe(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function Ye(t, e, n, r) {
  const c = Xe(t, e, n), a = Xe(t, e, r), s = Xe(n, r, t), d = Xe(n, r, e);
  return Math.abs(c) < 1e-6 && Se(t, n, e) || Math.abs(a) < 1e-6 && Se(t, r, e) || Math.abs(s) < 1e-6 && Se(n, t, r) || Math.abs(d) < 1e-6 && Se(n, e, r) ? !0 : c > 0 != a > 0 && s > 0 != d > 0;
}
function fo(t, e, n) {
  const r = Math.min(t.x, e.x), i = Math.max(t.x, e.x), c = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
  if (i < n.minX || r > n.maxX || a < n.minY || c > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const s = { x: n.minX, y: n.minY }, d = { x: n.maxX, y: n.minY }, m = { x: n.maxX, y: n.maxY }, l = { x: n.minX, y: n.maxY };
  return Ye(t, e, s, d) || Ye(t, e, d, m) || Ye(t, e, m, l) || Ye(t, e, l, s);
}
function ho(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const r of e)
      if (fo(t[n - 1], t[n], r)) return !0;
  return !1;
}
function tn(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function sn(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = tn(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let r = 0;
  for (let c = 1; c < t.length; c++) {
    const a = Math.hypot(t[c].x - t[c - 1].x, t[c].y - t[c - 1].y);
    if (r + a >= n) {
      const s = (n - r) / a;
      return { x: t[c - 1].x + (t[c].x - t[c - 1].x) * s, y: t[c - 1].y + (t[c].y - t[c - 1].y) * s };
    }
    r += a;
  }
  const i = t[t.length - 1];
  return { x: i.x, y: i.y };
}
function we(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function bn(t, e, n, r) {
  const i = /* @__PURE__ */ new Set([t, e]), c = Math.min(t, e), a = Math.max(t, e), s = Jn * 1.2;
  for (const d of n) {
    const m = (r === "x" ? d.minX : d.minY) - s, l = (r === "x" ? d.maxX : d.maxY) + s, x = (o) => o >= c - s * 4 && o <= a + s * 4;
    x(m) && i.add(m), x(l) && i.add(l);
  }
  return [...i].sort((d, m) => Math.abs(d - t) - Math.abs(m - t));
}
function tr(t) {
  const e = [];
  for (const n of t) {
    const r = e[e.length - 1];
    (!r || r.x !== n.x || r.y !== n.y) && e.push(n);
  }
  return e;
}
function er(t) {
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
function xo(t, e, n) {
  const r = [t];
  for (const i of [...n, e]) {
    const c = r[r.length - 1];
    if (!c) {
      r.push(i);
      continue;
    }
    if (c.x === i.x || c.y === i.y) {
      r.push(i);
      continue;
    }
    r.push({ x: i.x, y: c.y }, i);
  }
  return er(r);
}
function po(t, e, n) {
  const r = t[e], i = t[e + 1];
  if (!r || !i || !Number.isFinite(n) || r.x !== i.x && r.y !== i.y) return [...t];
  const c = r.x === i.x ? [r, { x: n, y: r.y }, { x: n, y: i.y }, i] : [r, { x: r.x, y: n }, { x: i.x, y: n }, i];
  return er([
    ...t.slice(0, e),
    ...c,
    ...t.slice(e + 2)
  ]);
}
function je(t, e) {
  const n = [], r = [];
  for (const c of t) {
    const a = tr(c);
    a.length < 2 || (ho(a, e) ? r.push(a) : n.push(a));
  }
  const i = n.length > 0 ? n : r;
  return i.length === 0 ? [] : i.reduce((c, a) => tn(a) < tn(c) ? a : c);
}
function kn(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function ue(t, e, n, r) {
  const i = Math.min(t, e), c = Math.max(t, e), a = Math.max(48, Math.abs(e - t) * 0.35, Jn * 4);
  if (r === "x") {
    if (n === "e") return c + a;
    if (n === "w") return i - a;
  } else {
    if (n === "s") return c + a;
    if (n === "n") return i - a;
  }
  return t <= e ? i - a : c + a;
}
function vo(t, e, n, r, i) {
  const c = (t.x + e.x) / 2, a = (t.y + e.y) / 2;
  if (n === "u") {
    if (r) {
      const d = ue(t.x, e.x, t.side, "x");
      return [t, { x: d, y: t.y }, { x: d, y: e.y }, e];
    }
    const s = ue(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: s }, { x: e.x, y: s }, e];
  }
  if (n === "zigzag") {
    if (r) {
      const m = ue(t.x, e.x, t.side, "x"), l = ue(t.y, e.y, t.side, "y");
      return i ? [t, { x: m, y: t.y }, { x: m, y: l }, { x: c, y: l }, { x: c, y: e.y }, e] : [t, { x: m, y: t.y }, { x: m, y: l }, { x: e.x, y: l }, e];
    }
    const s = ue(t.y, e.y, t.side, "y"), d = ue(t.x, e.x, t.side, "x");
    return i ? [t, { x: t.x, y: s }, { x: d, y: s }, { x: d, y: e.y }, e] : [t, { x: t.x, y: s }, { x: d, y: s }, { x: d, y: a }, { x: e.x, y: a }, e];
  }
  return [];
}
function nr(t, e, n = [], r = "elbow", i = []) {
  if (i.length > 0) return xo(t, e, i);
  const c = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), a = e.side ?? (c === "e" || c === "w" ? "w" : "n"), s = c === "e" || c === "w", d = a === "e" || a === "w", m = bn(t.x, e.x, n, "x"), l = bn(t.y, e.y, n, "y"), x = [];
  if (s && d) {
    for (const f of m) x.push([t, { x: f, y: t.y }, { x: f, y: e.y }, e]);
    for (const f of l) x.push([t, { x: t.x, y: f }, { x: e.x, y: f }, e]);
  } else if (!s && !d) {
    for (const f of l) x.push([t, { x: t.x, y: f }, { x: e.x, y: f }, e]);
    for (const f of m) x.push([t, { x: f, y: t.y }, { x: f, y: e.y }, e]);
  } else if (s) {
    x.push([t, { x: e.x, y: t.y }, e]);
    for (const f of l)
      x.push([t, { x: t.x, y: f }, { x: e.x, y: f }, e]), x.push([t, { x: t.x, y: f }, e]);
    for (const f of m) x.push([t, { x: f, y: t.y }, { x: f, y: e.y }, e]);
  } else {
    x.push([t, { x: t.x, y: e.y }, e]);
    for (const f of l)
      x.push([t, { x: t.x, y: f }, e]), x.push([t, { x: t.x, y: f }, { x: e.x, y: f }, e]);
    for (const f of m) x.push([t, { x: f, y: t.y }, { x: f, y: e.y }, e]);
  }
  const o = je(x, n);
  if (r === "elbow") return o;
  if (r === "reverse") {
    const f = kn(o), p = je(x.filter((b) => kn(b) !== f), n);
    return p.length > 1 ? p : o;
  }
  const u = vo(t, e, r, s, d), h = je([u], n);
  return h.length > 1 ? h : o;
}
function rr(t) {
  return t.length < 2 ? 0 : we(t[t.length - 2], t[t.length - 1]);
}
const { PI: mo } = Math, be = mo + 1e-4, $n = 0.5, Mn = [1, 1];
function zn(t, e, n, r = (i) => i) {
  return t * r(0.5 - e * (0.5 - n));
}
const { min: Ue } = Math;
function or(t, e, n) {
  let r = Ue(1, e / n);
  return Ue(1, t + (Ue(1, 1 - r) - t) * (r * 0.275));
}
function go(t) {
  return [-t[0], -t[1]];
}
function Rt(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function Cn(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function ee(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function en(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function te(t, e) {
  return [t[0] * e, t[1] * e];
}
function Ve(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function yo(t, e) {
  return [t[0] / e, t[1] / e];
}
function ir(t) {
  return [t[1], -t[0]];
}
function Ge(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function Sn(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function wo(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function bo(t) {
  return Math.hypot(t[0], t[1]);
}
function Xn(t, e) {
  let n = t[0] - e[0], r = t[1] - e[1];
  return n * n + r * r;
}
function ar(t) {
  return yo(t, bo(t));
}
function ko(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function ln(t, e, n) {
  let r = Math.sin(n), i = Math.cos(n), c = t[0] - e[0], a = t[1] - e[1], s = c * i - a * r, d = c * r + a * i;
  return [s + e[0], d + e[1]];
}
function Yn(t, e, n, r) {
  let i = Math.sin(r), c = Math.cos(r), a = e[0] - n[0], s = e[1] - n[1], d = a * c - s * i, m = a * i + s * c;
  return t[0] = d + n[0], t[1] = m + n[1], t;
}
function Pn(t, e, n) {
  return Rt(t, te(ee(e, t), n));
}
function $o(t, e, n, r) {
  let i = n[0] - e[0], c = n[1] - e[1];
  return t[0] = e[0] + i * r, t[1] = e[1] + c * r, t;
}
function cr(t, e, n) {
  return Rt(t, te(e, n));
}
const pt = [0, 0], Zt = [0, 0], Qt = [0, 0];
function Mo(t, e) {
  let n = cr(t, ar(ir(ee(t, Rt(t, [1, 1])))), -e), r = [], i = 1 / 13;
  for (let c = i; c <= 1; c += i) r.push(ln(n, t, be * 2 * c));
  return r;
}
function zo(t, e, n) {
  let r = [], i = 1 / n;
  for (let c = i; c <= 1; c += i) r.push(ln(e, t, be * c));
  return r;
}
function Co(t, e, n) {
  let r = ee(e, n), i = te(r, 0.5), c = te(r, 0.51);
  return [ee(t, i), ee(t, c), Rt(t, c), Rt(t, i)];
}
function So(t, e, n, r) {
  let i = [], c = cr(t, e, n), a = 1 / r;
  for (let s = a; s < 1; s += a) i.push(ln(c, t, be * 3 * s));
  return i;
}
function Xo(t, e, n) {
  return [Rt(t, te(e, n)), Rt(t, te(e, n * 0.99)), ee(t, te(e, n * 0.99)), ee(t, te(e, n))];
}
function Nn(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function Yo(t, e, n) {
  return t.slice(0, 10).reduce((r, i) => {
    let c = i.pressure;
    return e && (c = or(r, i.distance, n)), (r + c) / 2;
  }, t[0].pressure);
}
function Po(t, e = {}) {
  let { size: n = 16, smoothing: r = 0.5, thinning: i = 0.5, simulatePressure: c = !0, easing: a = (D) => D, start: s = {}, end: d = {}, last: m = !1 } = e, { cap: l = !0, easing: x = (D) => D * (2 - D) } = s, { cap: o = !0, easing: u = (D) => --D * D * D + 1 } = d;
  if (t.length === 0 || n <= 0) return [];
  let h = t[t.length - 1].runningLength, f = Nn(s.taper, n, h), p = Nn(d.taper, n, h), b = (n * r) ** 2, g = [], y = [], v = Yo(t, c, n), w = zn(n, i, t[t.length - 1].pressure, a), M, k = t[0].vector, $ = t[0].point, Y = $, C = $, L = Y, T = !1;
  for (let D = 0; D < t.length; D++) {
    let { pressure: _ } = t[D], { point: G, vector: V, distance: O, runningLength: U } = t[D], J = D === t.length - 1;
    if (!J && h - U < 3) continue;
    i ? (c && (_ = or(v, O, n)), w = zn(n, i, _, a)) : w = n / 2, M === void 0 && (M = w);
    let nt = U < f ? x(U / f) : 1, mt = h - U < p ? u((h - U) / p) : 1;
    w = Math.max(0.01, w * Math.min(nt, mt));
    let kt = (J ? t[D] : t[D + 1]).vector, It = J ? 1 : Sn(V, kt), P = Sn(V, k) < 0 && !T, W = It !== null && It < 0;
    if (P || W) {
      Ge(pt, k), Ve(pt, pt, w);
      for (let H = 0; H <= 1; H += 0.07692307692307693) en(Zt, G, pt), Yn(Zt, Zt, G, be * H), C = [Zt[0], Zt[1]], g.push(C), Cn(Qt, G, pt), Yn(Qt, Qt, G, be * -H), L = [Qt[0], Qt[1]], y.push(L);
      $ = C, Y = L, W && (T = !0);
      continue;
    }
    if (T = !1, J) {
      Ge(pt, V), Ve(pt, pt, w), g.push(ee(G, pt)), y.push(Rt(G, pt));
      continue;
    }
    $o(pt, kt, V, It), Ge(pt, pt), Ve(pt, pt, w), en(Zt, G, pt), C = [Zt[0], Zt[1]], (D <= 1 || Xn($, C) > b) && (g.push(C), $ = C), Cn(Qt, G, pt), L = [Qt[0], Qt[1]], (D <= 1 || Xn(Y, L) > b) && (y.push(L), Y = L), v = _, k = V;
  }
  let I = [t[0].point[0], t[0].point[1]], X = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : Rt(t[0].point, [1, 1]), N = [], E = [];
  if (t.length === 1) {
    if (!(f || p) || m) return Mo(I, M || w);
  } else {
    f || p && t.length === 1 || (l ? N.push(...zo(I, y[0], 13)) : N.push(...Co(I, g[0], y[0])));
    let D = ir(go(t[t.length - 1].vector));
    p || f && t.length === 1 ? E.push(X) : o ? E.push(...So(X, D, w, 29)) : E.push(...Xo(X, D, w));
  }
  return g.concat(E, y.reverse(), N);
}
const In = [0, 0];
function En(t) {
  return t != null && t >= 0;
}
function No(t, e = {}) {
  var o;
  let { streamline: n = 0.5, size: r = 16, last: i = !1 } = e;
  if (t.length === 0) return [];
  let c = 0.15 + (1 - n) * 0.85, a = Array.isArray(t[0]) ? t : t.map(({ x: u, y: h, pressure: f = $n }) => [u, h, f]);
  if (a.length === 2) {
    let u = a[1];
    a = a.slice(0, -1);
    for (let h = 1; h < 5; h++) a.push(Pn(a[0], u, h / 4));
  }
  a.length === 1 && (a = [...a, [...Rt(a[0], Mn), ...a[0].slice(2)]]);
  let s = [{ point: [a[0][0], a[0][1]], pressure: En(a[0][2]) ? a[0][2] : 0.25, vector: [...Mn], distance: 0, runningLength: 0 }], d = !1, m = 0, l = s[0], x = a.length - 1;
  for (let u = 1; u < a.length; u++) {
    let h = i && u === x ? [a[u][0], a[u][1]] : Pn(l.point, a[u], c);
    if (wo(l.point, h)) continue;
    let f = ko(h, l.point);
    if (m += f, u < x && !d) {
      if (m < r) continue;
      d = !0;
    }
    en(In, l.point, h), l = { point: h, pressure: En(a[u][2]) ? a[u][2] : $n, vector: ar(In), distance: f, runningLength: m }, s.push(l);
  }
  return s[0].vector = ((o = s[1]) == null ? void 0 : o.vector) || [0, 0], s;
}
function Io(t, e = {}) {
  return Po(No(t, e), e);
}
var Eo = Io;
function Le(t) {
  if (t.fillColor)
    try {
      return cn(t.fillColor);
    } catch {
      return t.color ? dt[t.color].bg : dt.blue.bg;
    }
  return t.color ? dt[t.color].bg : dt.blue.bg;
}
function sr(t) {
  if (t.strokeColor)
    try {
      return cn(t.strokeColor);
    } catch {
      return t.color ? dt[t.color].border : "#2563eb";
    }
  return t.color ? dt[t.color].border : "#2563eb";
}
function lr(t) {
  return sr(t);
}
function ae(t) {
  if (t.textColor)
    try {
      return cn(t.textColor);
    } catch {
      return t.color ? dt[t.color].text : "#0f172a";
    }
  return t.color ? dt[t.color].text : "#0f172a";
}
function ur(t, e, n) {
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
      const r = e / 2, i = n / 2, c = Math.min(e, n) / 2, a = c * 0.4, s = [];
      for (let d = 0; d < 10; d++) {
        const m = Math.PI / 5 * d - Math.PI / 2, l = d % 2 === 0 ? c : a;
        s.push(`${r + l * Math.cos(m)},${i + l * Math.sin(m)}`);
      }
      return s.join(" ");
    }
    default:
      return "";
  }
}
function dr(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let r = 1; r < t.length - 1; r++) {
    const [i, c] = t[r], [a, s] = t[r + 1];
    e += ` Q ${i} ${c} ${(i + a) / 2} ${(c + s) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function Lo(t, e) {
  return e === "highlighter" ? { size: t * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: t, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 };
}
function fr(t, e) {
  return e === "highlighter" ? t * 1.25 : t / 2;
}
function hr(t, e, n) {
  return t.length < 2 ? [] : Eo(t, Lo(e, n));
}
function xr(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [d, m] = t[0], l = fr(e, n);
    return `M ${d - l} ${m} A ${l} ${l} 0 1 0 ${d + l} ${m} A ${l} ${l} 0 1 0 ${d - l} ${m} Z`;
  }
  const r = hr(t, e, n);
  if (r.length === 0) return "";
  if (r.length < 4)
    return r.reduce(
      (d, [m, l], x) => d + (x === 0 ? `M ${m} ${l}` : ` L ${m} ${l}`),
      ""
    ) + " Z";
  const i = r[0], c = r[1], a = r[2];
  let s = `M ${i[0]} ${i[1]} Q ${c[0]} ${c[1]} ${(c[0] + a[0]) / 2} ${(c[1] + a[1]) / 2} T `;
  for (let d = 2; d < r.length - 1; d += 1) {
    const m = r[d], l = r[d + 1];
    s += `${(m[0] + l[0]) / 2} ${(m[1] + l[1]) / 2} `;
  }
  return `${s}Z`;
}
const Ln = /* @__PURE__ */ new WeakMap();
function Do(t) {
  const e = Ln.get(t);
  if (e !== void 0) return e;
  const n = t.points, r = t.type === "draw" && n && n.length >= 2 ? xr(n, t.strokeWidth ?? 3, t.drawMode ?? "pen") : "";
  return Ln.set(t, r), r;
}
function Jt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function pr(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], r = (i, c) => {
    i.childNodes.forEach((a) => {
      if (a.nodeType === Node.TEXT_NODE) {
        const l = a.textContent ?? "";
        l && n[n.length - 1].push({ text: l, ...c });
        return;
      }
      if (a.nodeType !== Node.ELEMENT_NODE) return;
      const s = a;
      if (s.tagName === "BR") {
        n.push([]);
        return;
      }
      const d = { bold: c.bold || s.tagName === "B" || s.tagName === "STRONG", italic: c.italic || s.tagName === "I" || s.tagName === "EM", underline: c.underline || s.tagName === "U" }, m = s.tagName === "DIV" || s.tagName === "P" || s.tagName === "LI";
      m && n[n.length - 1].length > 0 && n.push([]), r(s, d), m && n.push([]);
    });
  };
  return r(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((i) => i.length > 0);
}
const Dn = /* @__PURE__ */ new WeakMap();
function We(t) {
  const e = Dn.get(t);
  if (e !== void 0) return e;
  const n = t.html ? an(t.html) : t.text ? Jt(t.text).replace(/\n/g, "<br>") : "";
  return Dn.set(t, n), n;
}
function nn(t) {
  if (t)
    try {
      return Br(t);
    } catch {
      return;
    }
}
function vr(t) {
  try {
    return Rr(t);
  } catch {
    return null;
  }
}
function ke(t) {
  return t.html ? pr(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const Pe = 12;
function Kt(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function At(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function vt(t) {
  const e = t.rotation ?? 0, n = Kt(t);
  if (!e) return n;
  const r = At(t), i = Math.cos(e), c = Math.sin(e), a = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([m, l]) => {
    const x = m - r.x, o = l - r.y;
    return [r.x + x * i - o * c, r.y + x * c + o * i];
  }), s = a.map((m) => m[0]), d = a.map((m) => m[1]);
  return { minX: Math.min(...s), minY: Math.min(...d), maxX: Math.max(...s), maxY: Math.max(...d) };
}
function De(t, e, n) {
  const r = t.rotation ?? 0;
  if (!r) return { x: e, y: n };
  const i = At(t), c = Math.cos(-r), a = Math.sin(-r), s = e - i.x, d = n - i.y;
  return { x: i.x + s * c - d * a, y: i.y + s * a + d * c };
}
function _t(t, e, n, r, i, c) {
  const a = i - n, s = c - r, d = a * a + s * s, m = d === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * a + (e - r) * s) / d));
  return Math.hypot(t - (n + m * a), e - (r + m * s));
}
function rn(t, e, n, r, i, c) {
  const a = 8 / r;
  if (t.type === "arrow") {
    const m = (t.strokeWidth ?? 2.5) / r / 2 + a, l = Ft(t, i ?? /* @__PURE__ */ new Map(), c);
    if (l.routing === "orthogonal" && l.pathPoints && l.pathPoints.length > 1) {
      for (let o = 1; o < l.pathPoints.length; o++) {
        const u = l.pathPoints[o - 1], h = l.pathPoints[o];
        if (_t(e, n, u.x, u.y, h.x, h.y) <= m) return !0;
      }
      return !1;
    }
    if (l.bend === 0) return _t(e, n, l.start.x, l.start.y, l.end.x, l.end.y) <= m;
    let x = l.start;
    for (let o = 1; o <= 16; o++) {
      const u = he(o / 16, l.start, l.control, l.end);
      if (_t(e, n, x.x, x.y, u.x, u.y) <= m) return !0;
      x = u;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const x = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / r / 2 + a;
    if (t.points.length === 1) {
      const [o, u] = t.points[0];
      return Math.hypot(e - o, n - u) <= x;
    }
    for (let o = 1; o < t.points.length; o++) {
      const [u, h] = t.points[o - 1], [f, p] = t.points[o];
      if (_t(e, n, u, h, f, p) <= x) return !0;
    }
    return !1;
  }
  const s = De(t, e, n), d = Kt(t);
  if (t.type === "frame") {
    const m = s.x >= d.minX - a && s.x <= d.maxX + a && s.y >= d.minY - a && s.y <= d.maxY + a && (s.x <= d.minX + a || s.x >= d.maxX - a || s.y <= d.minY + a || s.y >= d.maxY - a), l = s.x >= d.minX - a && s.x <= d.maxX + a && s.y >= d.minY - 28 / r && s.y <= d.minY;
    return m || l;
  }
  return s.x >= d.minX - a && s.x <= d.maxX + a && s.y >= d.minY - a && s.y <= d.maxY + a;
}
function ce(t, e, n) {
  const r = Kt(t), i = (r.minX + r.maxX) / 2, c = (r.minY + r.maxY) / 2, a = e - i, s = n - c;
  if (a === 0 && s === 0) return { x: i, y: c, side: "e" };
  const d = (r.maxX - r.minX) / 2, m = (r.maxY - r.minY) / 2, l = d === 0 ? 1 / 0 : Math.abs(d / a), x = m === 0 ? 1 / 0 : Math.abs(m / s);
  return l <= x ? { x: i + a * l, y: c + s * l, side: a >= 0 ? "e" : "w" } : { x: i + a * x, y: c + s * x, side: s >= 0 ? "s" : "n" };
}
function mr(t, e, n, r) {
  const i = /* @__PURE__ */ new Set([e.id, n, r]);
  return t.filter((c) => !i.has(c.id)).map((c) => {
    const a = vt(c);
    return { minX: a.minX - Pe, minY: a.minY - Pe, maxX: a.maxX + Pe, maxY: a.maxY + Pe };
  }).filter((c) => c.maxX > c.minX && c.maxY > c.minY);
}
function Ft(t, e, n = []) {
  const r = t.fromId ? e.get(t.fromId) : void 0, i = t.toId ? e.get(t.toId) : void 0;
  let c = { x: t.x, y: t.y }, a = { x: t.x + t.w, y: t.y + t.h };
  if (r && i) {
    const h = At(r), f = At(i);
    c = ce(r, f.x, f.y), a = ce(i, h.x, h.y);
  } else r ? c = ce(r, a.x, a.y) : i && (a = ce(i, c.x, c.y));
  const s = (c.x + a.x) / 2, d = (c.y + a.y) / 2, m = t.bend ?? 0;
  let l = { x: s, y: d };
  if (m !== 0) {
    const h = a.x - c.x, f = a.y - c.y, p = Math.hypot(h, f) || 1;
    l = { x: s + -f / p * m, y: d + h / p * m };
  }
  const x = !!(r || i), o = t.routing ?? (x ? "orthogonal" : m !== 0 ? "curved" : "straight");
  if (o !== "orthogonal") return { start: c, end: a, control: l, bend: m, routing: o };
  const u = mr(n, t, r == null ? void 0 : r.id, i == null ? void 0 : i.id);
  return {
    start: c,
    end: a,
    control: l,
    bend: m,
    routing: o,
    pathPoints: tr(nr(c, a, u, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function he(t, e, n, r) {
  const i = 1 - t;
  return { x: i * i * e.x + 2 * i * t * n.x + t * t * r.x, y: i * i * e.y + 2 * i * t * n.y + t * t * r.y };
}
function Oe(t, e) {
  if (!t || !e) return null;
  const n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n <= r ? { start: n, end: r } : null;
}
function Te(t, e, n, r) {
  if (Math.abs(e) < 1e-12) return t >= n && t <= r ? { start: 0, end: 1 } : null;
  const i = (n - t) / e, c = (r - t) / e;
  return Oe(
    { start: Math.min(i, c), end: Math.max(i, c) },
    { start: 0, end: 1 }
  );
}
function qe(t, e, n, r) {
  const i = e[0] - t[0], c = e[1] - t[1], a = t[0] - n.x, s = t[1] - n.y, d = i * i + c * c;
  if (d < 1e-12)
    return a * a + s * s <= r * r ? { start: 0, end: 1 } : null;
  const m = 2 * (a * i + s * c), l = a * a + s * s - r * r, x = m * m - 4 * d * l;
  if (x < 0) return null;
  const o = Math.sqrt(x);
  return Oe(
    { start: (-m - o) / (2 * d), end: (-m + o) / (2 * d) },
    { start: 0, end: 1 }
  );
}
function To(t, e, n, r, i) {
  const c = r.x - n.x, a = r.y - n.y, s = Math.hypot(c, a);
  if (s < 1e-12) return qe(t, e, n, i);
  const d = c / s, m = a / s, l = e[0] - t[0], x = e[1] - t[1], o = t[0] - n.x, u = t[1] - n.y, h = o * d + u * m, f = l * d + x * m, p = o * -m + u * d, b = l * -m + x * d, y = [
    Oe(
      Te(h, f, 0, s),
      Te(p, b, -i, i)
    ),
    qe(t, e, n, i),
    qe(t, e, r, i)
  ].filter((v) => v !== null);
  return y.length === 0 ? null : {
    start: Math.min(...y.map((v) => v.start)),
    end: Math.max(...y.map((v) => v.end))
  };
}
function Tn(t, e, n) {
  return [t[0] + (e[0] - t[0]) * n, t[1] + (e[1] - t[1]) * n];
}
function de(t, e) {
  const n = t[t.length - 1];
  (!n || Math.hypot(e[0] - n[0], e[1] - n[1]) > 1e-9) && t.push([e[0], e[1]]);
}
function Fo(t, e, n) {
  let r = n[0][0], i = n[0][1], c = r, a = i;
  for (const [s, d] of n)
    r = Math.min(r, s), i = Math.min(i, d), c = Math.max(c, s), a = Math.max(a, d);
  return { ...t, id: e, points: n, x: r, y: i, w: c - r, h: a - i };
}
function Ao(t, e) {
  const n = t.slice(0, 480);
  let r = 1, i = `${n}-e${r}`;
  for (; e.has(i); ) i = `${n}-e${++r}`;
  return e.add(i), i;
}
function ge(t, e, n) {
  return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
}
function Ne(t, e, n) {
  return Math.abs(ge(e, n, t)) <= 1e-9 && t.x >= Math.min(e.x, n.x) - 1e-9 && t.x <= Math.max(e.x, n.x) + 1e-9 && t.y >= Math.min(e.y, n.y) - 1e-9 && t.y <= Math.max(e.y, n.y) + 1e-9;
}
function Wo(t, e, n, r) {
  const i = ge(t, e, n), c = ge(t, e, r), a = ge(n, r, t), s = ge(n, r, e);
  return (i > 0 && c < 0 || i < 0 && c > 0) && (a > 0 && s < 0 || a < 0 && s > 0) ? !0 : Math.abs(i) <= 1e-9 && Ne(n, t, e) || Math.abs(c) <= 1e-9 && Ne(r, t, e) || Math.abs(a) <= 1e-9 && Ne(t, n, r) || Math.abs(s) <= 1e-9 && Ne(e, n, r);
}
function Fn(t, e, n, r) {
  return Wo(t, e, n, r) ? 0 : Math.min(
    _t(t.x, t.y, n.x, n.y, r.x, r.y),
    _t(e.x, e.y, n.x, n.y, r.x, r.y),
    _t(n.x, n.y, t.x, t.y, e.x, e.y),
    _t(r.x, r.y, t.x, t.y, e.x, e.y)
  );
}
function on(t, e, n, r) {
  const i = Te(t.x, e.x - t.x, n.minX - r, n.maxX + r), c = Te(t.y, e.y - t.y, n.minY - r, n.maxY + r);
  return Oe(i, c) !== null;
}
function Oo(t, e, n, r, i, c, a) {
  const s = 8 / i;
  if (t.type === "arrow") {
    const h = r + (t.strokeWidth ?? 2.5) / i / 2 + s, f = Ft(t, c, a), p = [];
    if (f.routing === "orthogonal" && f.pathPoints && f.pathPoints.length > 1)
      for (let b = 1; b < f.pathPoints.length; b++)
        p.push([f.pathPoints[b - 1], f.pathPoints[b]]);
    else if (f.bend === 0)
      p.push([f.start, f.end]);
    else {
      let b = f.start;
      for (let g = 1; g <= 16; g++) {
        const y = he(g / 16, f.start, f.control, f.end);
        p.push([b, y]), b = y;
      }
    }
    return p.some(([b, g]) => Fn(e, n, b, g) <= h);
  }
  const d = De(t, e.x, e.y), m = De(t, n.x, n.y), l = Kt(t);
  if (t.type !== "frame") return on(d, m, l, r + s);
  const x = r + s, o = [
    { x: l.minX, y: l.minY },
    { x: l.maxX, y: l.minY },
    { x: l.maxX, y: l.maxY },
    { x: l.minX, y: l.maxY }
  ];
  for (let h = 0; h < o.length; h++)
    if (Fn(d, m, o[h], o[(h + 1) % o.length]) <= x) return !0;
  const u = { minX: l.minX, minY: l.minY - 28 / i, maxX: l.maxX, maxY: l.minY };
  return on(d, m, u, r);
}
function un(t, e, n, r, i) {
  const c = [], a = Math.max(i, 0.1), s = r / a, d = new Set(t.map((l) => l.id)), m = new Map(t.map((l) => [l.id, l]));
  for (const l of t) {
    if (l.type !== "draw" || !l.points) {
      if (Oo(l, e, n, s, a, m, t)) continue;
      c.push(l);
      continue;
    }
    const o = (l.drawMode ?? "pen") === "highlighter" ? (l.strokeWidth ?? 3) * 2.5 : l.strokeWidth ?? 3, u = s + o / 2, h = Kt(l);
    if (!on(e, n, h, u)) {
      c.push(l);
      continue;
    }
    if (l.points.length === 0) {
      c.push(l);
      continue;
    }
    if (l.points.length === 1) {
      const [y, v] = l.points[0];
      _t(y, v, e.x, e.y, n.x, n.y) > u && c.push(l);
      continue;
    }
    const f = [];
    let p = [], b = !1;
    const g = () => {
      p.length > 1 && f.push(p), p = [];
    };
    for (let y = 1; y < l.points.length; y++) {
      const v = l.points[y - 1], w = l.points[y], M = To(v, w, e, n, u);
      if (!M) {
        p.length === 0 && de(p, v), de(p, w);
        continue;
      }
      b = !0, M.start > 1e-9 && (p.length === 0 && de(p, v), de(p, Tn(v, w, M.start))), g(), M.end < 1 - 1e-9 && (de(p, Tn(v, w, M.end)), de(p, w));
    }
    if (g(), !b) {
      c.push(l);
      continue;
    }
    f.forEach((y, v) => {
      const w = v === 0 ? l.id : Ao(l.id, d);
      c.push(Fo(l, w, y));
    });
  }
  return c;
}
function Ho(t, e, n, r, i) {
  return un(t, { x: e, y: n }, { x: e, y: n }, r, i);
}
function Ro(t, e, n) {
  const r = 6 / n;
  let i = null, c = null;
  const a = [], s = [t.minX, (t.minX + t.maxX) / 2, t.maxX], d = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const m of e) {
    const l = vt(m), x = [l.minX, (l.minX + l.maxX) / 2, l.maxX], o = [l.minY, (l.minY + l.maxY) / 2, l.maxY];
    for (const u of s) for (const h of x) {
      const f = h - u;
      Math.abs(f) <= r && (!i || Math.abs(f) < Math.abs(i.delta)) && (i = { delta: f, at: h });
    }
    for (const u of d) for (const h of o) {
      const f = h - u;
      Math.abs(f) <= r && (!c || Math.abs(f) < Math.abs(c.delta)) && (c = { delta: f, at: h });
    }
  }
  return i && a.push({ x1: i.at, y1: t.minY - 1e3, x2: i.at, y2: t.maxY + 1e3 }), c && a.push({ x1: t.minX - 1e3, y1: c.at, x2: t.maxX + 1e3, y2: c.at }), { dx: (i == null ? void 0 : i.delta) ?? 0, dy: (c == null ? void 0 : c.delta) ?? 0, guides: a };
}
const Bo = 14;
function _o({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: r,
  camera: i,
  interaction: c,
  eraserPos: a,
  guides: s,
  marquee: d,
  strokeColorOf: m
}) {
  return /* @__PURE__ */ S("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ R("g", { transform: `scale(${i.z}) translate(${-i.x}, ${-i.y})`, children: [
    t.map((l) => {
      if (l.type === "draw" && l.points) {
        const C = l.drawMode ?? "pen", L = l.strokeWidth ?? 3, T = e.has(l.id) ? j.blue : m(l), I = Do(l);
        return /* @__PURE__ */ S(
          "path",
          {
            "data-canvas-vector-shape-id": l.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": C,
            "data-canvas-stroke-width": L,
            d: I || dr(l.points),
            fill: I ? T : "none",
            stroke: I ? "none" : T,
            strokeWidth: L / i.z,
            strokeOpacity: C === "highlighter" ? 0.35 : void 0,
            fillOpacity: C === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          l.id
        );
      }
      if (l.type !== "arrow") return null;
      const x = e.has(l.id) ? j.blue : m(l), o = Ft(l, n, r), u = l.strokeWidth ?? 2.5, h = u / i.z, f = Math.max(10, 8 + u * 2), p = Math.max(4, 2 + u), b = f / i.z, g = p / i.z, y = o.routing === "orthogonal" && o.pathPoints ? o.pathPoints : null, v = y && y.length > 1;
      let w, M;
      if (v)
        w = Je(y), M = rr(y);
      else if (o.routing === "curved") {
        w = `M ${o.start.x} ${o.start.y} Q ${o.control.x} ${o.control.y} ${o.end.x} ${o.end.y}`;
        const C = he(0.94, o.start, o.control, o.end);
        M = Math.atan2(o.end.y - C.y, o.end.x - C.x);
      } else
        w = `M ${o.start.x} ${o.start.y} L ${o.end.x} ${o.end.y}`, M = Math.atan2(o.end.y - o.start.y, o.end.x - o.start.x);
      const k = v && y.length >= 2 ? we(y[0], y[1]) : o.routing === "orthogonal" && o.start.side ? o.start.side === "e" ? 0 : o.start.side === "w" ? Math.PI : o.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : we(o.start, o.end), $ = l.strokeStyle === "dashed" ? `${8 / i.z} ${5 / i.z}` : l.strokeStyle === "dotted" ? `${1.5 / i.z} ${4 / i.z}` : void 0, Y = (C, L, T, I) => C === "dot" ? /* @__PURE__ */ S("circle", { "data-canvas-arrow-dot-radius": p, cx: L, cy: T, r: g, fill: x }) : C === "none" ? null : /* @__PURE__ */ S(
        "polygon",
        {
          "data-canvas-arrowhead-size": f,
          points: `${L},${T} ${L - b * Math.cos(I - 0.4)},${T - b * Math.sin(I - 0.4)} ${L - b * Math.cos(I + 0.4)},${T - b * Math.sin(I + 0.4)}`,
          fill: x
        }
      );
      return /* @__PURE__ */ R("g", { "data-canvas-vector-shape-id": l.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": o.routing, "data-canvas-stroke-width": u, children: [
        /* @__PURE__ */ S("path", { d: w, fill: "none", stroke: x, strokeWidth: h, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: $ }),
        Y(l.arrowEnd ?? "arrow", o.end.x, o.end.y, M),
        Y(l.arrowStart ?? "none", o.start.x, o.start.y, k + Math.PI)
      ] }, l.id);
    }),
    c.kind === "connect" && c.fromId !== void 0 && c.toX !== void 0 && c.toY !== void 0 && (() => {
      const l = n.get(c.fromId);
      if (!l) return null;
      const x = ce(l, c.toX, c.toY), o = c.hoverId ? n.get(c.hoverId) : null, u = o ? ce(o, x.x, x.y) : { x: c.toX, y: c.toY }, h = o ? nr(x, u, mr(r, { id: "__preview" }, l.id, o.id)) : [x, u];
      return /* @__PURE__ */ R("g", { children: [
        /* @__PURE__ */ S("path", { d: Je(h), stroke: j.blue, strokeWidth: 2 / i.z, strokeDasharray: `${5 / i.z} ${4 / i.z}` }),
        o ? /* @__PURE__ */ S("rect", { x: vt(o).minX - 3 / i.z, y: vt(o).minY - 3 / i.z, width: vt(o).maxX - vt(o).minX + 6 / i.z, height: vt(o).maxY - vt(o).minY + 6 / i.z, fill: "none", stroke: j.blue, strokeWidth: 2 / i.z, rx: 6 / i.z }) : /* @__PURE__ */ S("circle", { cx: u.x, cy: u.y, r: 5 / i.z, fill: j.blue })
      ] });
    })(),
    a && /* @__PURE__ */ S("circle", { cx: a.x, cy: a.y, r: Bo / i.z, fill: j.roseSoft, stroke: j.rose, strokeWidth: 1 / i.z }),
    s.map((l, x) => /* @__PURE__ */ S("line", { x1: l.x1, y1: l.y1, x2: l.x2, y2: l.y2, stroke: j.pink, strokeWidth: 1 / i.z, strokeDasharray: `${4 / i.z} ${4 / i.z}` }, `guide-${x}`)),
    d && /* @__PURE__ */ S("rect", { x: Math.min(d.startX, d.curX), y: Math.min(d.startY, d.curY), width: Math.abs(d.curX - d.startX), height: Math.abs(d.curY - d.startY), fill: j.marqueeFill, stroke: j.blue, strokeWidth: 1 / i.z })
  ] }) });
}
const Ko = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], jo = /* @__PURE__ */ new Set([
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
]), Uo = [
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
function gr(t) {
  return jo.has(t.trim().toLowerCase());
}
function yr(t) {
  const e = He(t);
  return e ? gr(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function Vo(t) {
  return He(t).split(",").map((e) => e.trim()).filter(Boolean).map(yr).filter(Boolean).join(", ");
}
function wr(t) {
  return He(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function me(t) {
  return t.split(",").map((e) => He(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !gr(e));
}
const Ie = Array.from(/* @__PURE__ */ new Set([
  ...Uo,
  ...me(Ht.sans.stack),
  ...me(Ht.serif.stack),
  ...me(Ht.mono.stack),
  ...me(Ht.gothic.stack),
  ...me(Ht.korean.stack)
]));
function Go() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Ie;
  const t = Ie.filter((e) => {
    const n = yr(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : Ie;
}
const qo = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, Zo = 24, Qo = 28, br = 720;
function Mt(t) {
  return t.fontSize ?? qo[t.type] ?? 14;
}
function zt(t) {
  var e;
  if (!t.fontFamily) return Ht.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = wr(_r(t.customFontFamily ?? ""));
    } catch {
    }
    return Vo(n) || Ht.sans.stack;
  }
  return ((e = Ht[t.fontFamily]) == null ? void 0 : e.stack) ?? Ht.sans.stack;
}
function Pt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function Jo(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function ti(t) {
  var e, n, r;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((r = t.html) != null && r.includes("<ol>")) return "number";
}
function ei(t, e) {
  return {
    w: Math.min(br, Math.max(Zo, Math.ceil(t))),
    h: Math.max(Qo, Math.ceil(e))
  };
}
function ni(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = an(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${br}px`,
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
    fontSize: `${Mt(e)}px`,
    fontFamily: zt(e)
  }), document.body.appendChild(n);
  const r = n.getBoundingClientRect();
  return n.remove(), ei(r.width, r.height);
}
const ri = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), oi = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function ii({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: r,
  shapeById: i,
  allShapes: c,
  peerCursors: a,
  isDarkMode: s,
  renderEditor: d,
  renderShapeBody: m,
  setEditingId: l,
  onBendHandleDown: x,
  onOrthogonalSegmentHandleDown: o,
  onResizeHandleDown: u,
  onRotateHandleDown: h,
  onConnectHandleDown: f,
  onArrowEndpointDown: p
}) {
  return /* @__PURE__ */ R(oe, { children: [
    /* @__PURE__ */ S("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` }, children: t.map((b) => {
      if (b.type === "draw") return null;
      if (b.type === "arrow") {
        const v = Ft(b, i, c), w = v.routing === "orthogonal" && v.pathPoints ? sn(v.pathPoints) : v.routing === "curved" ? he(0.5, v.start, v.control, v.end) : { x: (v.start.x + v.end.x) / 2, y: (v.start.y + v.end.y) / 2 }, M = n === b.id, k = We(b), $ = e.has(b.id), Y = ke(b).trim(), C = k || ($ ? "관계 입력" : "");
        return !C && !M ? null : /* @__PURE__ */ S(Bt.Fragment, { children: /* @__PURE__ */ S("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: w.x - 90, top: w.y - 18, width: 180, height: 36 }, onDoubleClick: (L) => {
          L.stopPropagation(), l(b.id);
        }, children: (C || M) && /* @__PURE__ */ S(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": Y ? `관계 설명: ${Y}` : "관계 설명 입력",
            title: M ? void 0 : Y ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${s ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: Mt(b),
              fontFamily: zt(b),
              maxWidth: "100%",
              minWidth: M ? 120 / r.z : void 0,
              minHeight: M ? 28 / r.z : void 0,
              color: b.textColor
            },
            children: M ? d("text-center whitespace-nowrap") : /* @__PURE__ */ S("span", { dangerouslySetInnerHTML: { __html: C } }, "canvas-view")
          }
        ) }) }, b.id);
      }
      const g = e.has(b.id), y = Kt(b);
      return /* @__PURE__ */ R(
        "div",
        {
          "data-canvas-shape-id": b.id,
          "data-canvas-shape-type": b.type,
          "data-canvas-selected": g ? "true" : void 0,
          "data-canvas-text-align": Pt(b),
          "data-canvas-text-color": b.textColor,
          "data-canvas-font-size": Mt(b),
          "data-canvas-font-family": b.fontFamily === "custom" ? b.customFontFamily ?? "custom" : b.fontFamily ?? "sans",
          "data-canvas-manual-size": b.manualSize ? "true" : void 0,
          "data-canvas-group-id": b.groupId,
          "data-canvas-list-kind": ti(b),
          "data-canvas-x": b.x,
          "data-canvas-y": b.y,
          "data-canvas-width": b.w,
          "data-canvas-height": b.h,
          className: "absolute",
          style: { left: y.minX, top: y.minY, width: y.maxX - y.minX, height: y.maxY - y.minY, transform: b.rotation ? `rotate(${b.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (v) => {
            v.stopPropagation(), ri.has(b.type) && l(b.id);
          },
          children: [
            m(b),
            g && /* @__PURE__ */ R(oe, { children: [
              /* @__PURE__ */ S("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / r.z}px solid ${j.blue}` } }),
              e.size === 1 && /* @__PURE__ */ R(oe, { children: [
                ["nw", "ne", "sw", "se"].map((v) => /* @__PURE__ */ S("div", { "data-canvas-resize-handle": v, onPointerDown: (w) => u(w, b, v), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / r.z, height: 10 / r.z, cursor: `${v}-resize`, left: v.includes("w") ? -5 / r.z : void 0, right: v.includes("e") ? -5 / r.z : void 0, top: v.includes("n") ? -5 / r.z : void 0, bottom: v.includes("s") ? -5 / r.z : void 0 } }, v)),
                /* @__PURE__ */ S("div", { onPointerDown: (v) => h(v, b), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / r.z, height: 12 / r.z, left: "50%", marginLeft: -6 / r.z, top: -28 / r.z, cursor: "grab" } }),
                oi.has(b.type) && ["n", "s", "w", "e"].map((v) => /* @__PURE__ */ S("div", { onPointerDown: (w) => f(w, b), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...v === "n" ? { left: "50%", top: -30 / r.z, marginLeft: -9 / r.z } : v === "s" ? { left: "50%", bottom: -30 / r.z, marginLeft: -9 / r.z } : v === "w" ? { top: "50%", left: -30 / r.z, marginTop: -9 / r.z } : { top: "50%", right: -30 / r.z, marginTop: -9 / r.z }, width: 18 / r.z, height: 18 / r.z, fontSize: 13 / r.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${v}`))
              ] })
            ] })
          ]
        },
        b.id
      );
    }) }),
    e.size === 1 && c.filter((b) => b.type === "arrow" && e.has(b.id)).map((b) => {
      const g = Ft(b, i, c), y = (v, w) => ({
        left: (v.x - r.x) * r.z - w / 2,
        top: (v.y - r.y) * r.z - w / 2
      });
      return /* @__PURE__ */ R(Bt.Fragment, { children: [
        g.routing === "orthogonal" && g.pathPoints && g.pathPoints.length > 2 ? g.pathPoints.slice(0, -1).map((v, w) => {
          var $;
          const M = ($ = g.pathPoints) == null ? void 0 : $[w + 1];
          if (!M) return null;
          const k = { x: (v.x + M.x) / 2, y: (v.y + M.y) / 2 };
          return /* @__PURE__ */ S("div", { "data-canvas-arrow-segment-handle": w, onPointerDown: (Y) => o(Y, b, w), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...y(k, 12), cursor: v.x === M.x ? "ew-resize" : "ns-resize" } }, `segment-${w}`);
        }) : g.routing === "curved" && /* @__PURE__ */ S("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (v) => x(v, b), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (g.start.x + g.end.x) / 2 * r.z - r.x * r.z - 5, top: (g.start.y + g.end.y) / 2 * r.z - r.y * r.z - 10, cursor: "grab" } }),
        ["start", "end"].map((v) => {
          const w = v === "start" ? g.start : g.end;
          return /* @__PURE__ */ S("div", { "data-canvas-arrow-endpoint": v, onPointerDown: (M) => p(M, b, v), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...y(w, 12), cursor: "grab" } }, v);
        })
      ] }, `arrow-handles-${b.id}`);
    }),
    a == null ? void 0 : a.map((b) => /* @__PURE__ */ R("div", { className: "absolute pointer-events-none z-40", style: { left: (b.x - r.x) * r.z, top: (b.y - r.y) * r.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ S("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ S("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: b.color, stroke: j.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ S("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: b.color }, children: b.name })
    ] }, b.id))
  ] });
}
function dn(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function ai(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), dn(t) && e.push("diagram"), e;
}
function ea(t) {
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
const ci = "#3b82f6";
function re(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function Ee(t) {
  return Math.round(re(t, 0, 255)).toString(16).padStart(2, "0");
}
function si(t) {
  const e = t.trim().endsWith("%"), n = Number.parseFloat(t);
  return Number.isFinite(n) ? e ? n * 2.55 : n : 0;
}
function ye(t) {
  var c, a;
  const e = t.trim().toLowerCase(), n = (c = e.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : c[1];
  if (n)
    return n.length === 3 || n.length === 4 ? `#${n.slice(0, 3).split("").map((s) => `${s}${s}`).join("")}` : `#${n.slice(0, 6)}`;
  const r = (a = e.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : a[1];
  if (r) {
    const s = r.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(si);
    if (s.length === 3) return `#${s.map(Ee).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? ci;
}
function An(t) {
  const e = ye(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, r = Number.parseInt(e.slice(2, 4), 16) / 255, i = Number.parseInt(e.slice(4, 6), 16) / 255, c = Math.max(n, r, i), a = Math.min(n, r, i), s = c - a;
  let d = 0;
  return s !== 0 && (c === n ? d = 60 * ((r - i) / s % 6) : c === r ? d = 60 * ((i - n) / s + 2) : d = 60 * ((n - r) / s + 4)), d < 0 && (d += 360), { hue: d, saturation: c === 0 ? 0 : s / c, value: c };
}
function Wn({ hue: t, saturation: e, value: n }) {
  const r = (t % 360 + 360) % 360, i = n * e, c = i * (1 - Math.abs(r / 60 % 2 - 1)), a = n - i;
  let s = 0, d = 0, m = 0;
  return r < 60 ? [s, d, m] = [i, c, 0] : r < 120 ? [s, d, m] = [c, i, 0] : r < 180 ? [s, d, m] = [0, i, c] : r < 240 ? [s, d, m] = [0, c, i] : r < 300 ? [s, d, m] = [c, 0, i] : [s, d, m] = [i, 0, c], `#${Ee((s + a) * 255)}${Ee((d + a) * 255)}${Ee((m + a) * 255)}`;
}
function li(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function ui({ value: t, onChange: e }) {
  const [n, r] = st(() => An(t)), i = Q(null), c = Q(null), a = Q(null);
  Nt(() => {
    const g = An(t);
    r((y) => li(y, g) ? y : g);
  }, [t]);
  const s = (g) => {
    r(g), e(Wn(g));
  }, d = (g) => {
    var k;
    const y = (k = i.current) == null ? void 0 : k.getBoundingClientRect();
    if (!y) return;
    const v = g.clientX - (y.left + y.width / 2), w = g.clientY - (y.top + y.height / 2), M = Math.atan2(w, v) * 180 / Math.PI + 90;
    s({ ...n, hue: (M + 360) % 360 });
  }, m = (g) => {
    var v;
    const y = (v = c.current) == null ? void 0 : v.getBoundingClientRect();
    y && s({
      ...n,
      saturation: re((g.clientX - y.left) / y.width, 0, 1),
      value: re(1 - (g.clientY - y.top) / y.height, 0, 1)
    });
  }, l = (g, y) => {
    var v, w;
    y.button !== 0 && y.pointerType !== "touch" || (y.preventDefault(), y.stopPropagation(), a.current = g, (w = (v = y.currentTarget).setPointerCapture) == null || w.call(v, y.pointerId), g === "hue" ? d(y) : m(y));
  }, x = (g) => {
    a.current && (g.preventDefault(), a.current === "hue" ? d(g) : m(g));
  }, o = (g) => {
    var y, v;
    a.current = null;
    try {
      (v = (y = g.currentTarget).releasePointerCapture) == null || v.call(y, g.pointerId);
    } catch {
      return;
    }
  }, u = (n.hue - 90) * Math.PI / 180, h = 53, f = {
    left: 66 + Math.cos(u) * h,
    top: 66 + Math.sin(u) * h
  }, p = Wn({ hue: n.hue, saturation: 1, value: 1 }), b = (g) => s({ ...n, hue: (n.hue + g + 360) % 360 });
  return /* @__PURE__ */ R("div", { className: "canvas-color-wheel", "data-canvas-color-wheel": !0, children: [
    /* @__PURE__ */ R(
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
        onPointerDown: (g) => l("hue", g),
        onPointerMove: x,
        onPointerUp: o,
        onKeyDown: (g) => {
          (g.key === "ArrowLeft" || g.key === "ArrowDown") && (g.preventDefault(), b(-1)), (g.key === "ArrowRight" || g.key === "ArrowUp") && (g.preventDefault(), b(1));
        },
        children: [
          /* @__PURE__ */ S("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ S("span", { className: "canvas-color-wheel-hue-marker", style: { left: f.left, top: f.top } })
        ]
      }
    ),
    /* @__PURE__ */ S(
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
        style: { backgroundColor: p },
        onPointerDown: (g) => l("sv", g),
        onPointerMove: x,
        onPointerUp: o,
        onKeyDown: (g) => {
          const y = g.shiftKey ? 0.1 : 0.02;
          g.key === "ArrowLeft" && (g.preventDefault(), s({ ...n, saturation: re(n.saturation - y, 0, 1) })), g.key === "ArrowRight" && (g.preventDefault(), s({ ...n, saturation: re(n.saturation + y, 0, 1) })), g.key === "ArrowDown" && (g.preventDefault(), s({ ...n, value: re(n.value - y, 0, 1) })), g.key === "ArrowUp" && (g.preventDefault(), s({ ...n, value: re(n.value + y, 0, 1) }));
        },
        children: /* @__PURE__ */ S("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${n.saturation * 100}%`, top: `${(1 - n.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ R("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ S("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ S("span", { children: ye(t).toUpperCase() })
    ] })
  ] });
}
const di = [2, 4, 6, 8];
function fi(t) {
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
      return kr(t);
  }
}
function On(t) {
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
      return kr(t);
  }
}
function kr(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Ze(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Hn(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function hi({
  shape: t,
  selection: e,
  selectionActions: n,
  shapes: r,
  camera: i,
  canvasSize: c,
  isDarkMode: a,
  editing: s,
  showPalette: d,
  installedFontFamilies: m,
  setShowPalette: l,
  setActiveColor: x,
  patchSelected: o,
  applyFormat: u,
  applyList: h,
  applyCustomFontFamily: f
}) {
  var jt, Ot;
  const p = a ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", b = e.length > 1, g = e.some((z) => !!z.groupId), y = t.type === "draw", v = y || Hn(t) && !Ze(t) ? "stroke" : Ze(t) ? "fill" : "text", [w, M] = st(v), [k, $] = st("");
  ie(() => M(v), [v, t.id]);
  const Y = w === "text" ? ae(t) : w === "stroke" ? t.strokeColor ?? (t.color ? dt[t.color].border : j.ink) : Le(t);
  ie(() => $(ye(Y).toUpperCase()), [Y]);
  const C = ye(Y), L = (z) => {
    o(y || w === "stroke" ? { strokeColor: z } : w === "text" ? { textColor: z } : { fillColor: z });
  }, T = (z) => {
    x(z), o(y || w === "stroke" ? { color: z, strokeColor: void 0 } : w === "text" ? { textColor: dt[z].text } : { color: z, fillColor: void 0 }), l(!1);
  }, I = Q(null), [X, N] = st({ width: 380, height: 260 });
  ie(() => {
    const z = I.current;
    if (!z) return;
    const A = () => {
      const it = Math.max(1, Math.ceil(z.getBoundingClientRect().width)), lt = Math.max(1, Math.ceil(z.getBoundingClientRect().height));
      N((bt) => bt.width === it && bt.height === lt ? bt : { width: it, height: lt });
    };
    if (A(), typeof ResizeObserver > "u") return;
    const q = new ResizeObserver(A);
    return q.observe(z), () => q.disconnect();
  }, [s, m.length, a, t, d]);
  const E = X.width, D = X.height, _ = e.reduce((z, A) => {
    const q = vt(A);
    return {
      minX: Math.min(z.minX, q.minX),
      minY: Math.min(z.minY, q.minY),
      maxX: Math.max(z.maxX, q.maxX),
      maxY: Math.max(z.maxY, q.maxY)
    };
  }, vt(t)), G = (_.minX - i.x) * i.z, V = (_.minY - i.y) * i.z, O = (_.maxX - i.x) * i.z, U = (_.maxY - i.y) * i.z, J = Math.max(8, c.width - E - 8), nt = Math.max(8, c.height - D - 8), mt = (z, A) => ({ left: Math.min(Math.max(8, z), J), top: Math.min(Math.max(8, A), nt) }), kt = [
    mt((G + O) / 2 - E / 2, V - D - 12),
    mt((G + O) / 2 - E / 2, U + 12),
    mt((c.width - E) / 2, 12),
    mt(G - E - 12, V + (U - V - D) / 2),
    mt(O + 12, V + (U - V - D) / 2)
  ], It = r.map((z) => {
    const A = vt(z);
    return { left: (A.minX - i.x) * i.z, top: (A.minY - i.y) * i.z, right: (A.maxX - i.x) * i.z, bottom: (A.maxY - i.y) * i.z };
  });
  if (t.type === "arrow") {
    const z = Ft(t, new Map(r.map((lt) => [lt.id, lt])), r), A = z.routing === "orthogonal" && z.pathPoints ? sn(z.pathPoints) : { x: (z.start.x + z.end.x) / 2, y: (z.start.y + z.end.y) / 2 }, q = 180 * i.z, it = 36 * i.z;
    It.push({
      left: (A.x - i.x) * i.z - q / 2,
      top: (A.y - i.y) * i.z - it / 2,
      right: (A.x - i.x) * i.z + q / 2,
      bottom: (A.y - i.y) * i.z + it / 2
    });
  }
  const P = kt[0], W = (z, A) => {
    const q = Math.max(0, Math.min(z.left + E, A.right) - Math.max(z.left, A.left)), it = Math.max(0, Math.min(z.top + D, A.bottom) - Math.max(z.top, A.top));
    return q * it;
  }, H = ((jt = kt.map((z) => ({
    candidate: z,
    overlap: It.reduce((A, q) => A + W(z, q), 0),
    distance: Math.hypot(z.left - P.left, z.top - P.top)
  })).sort((z, A) => z.overlap - A.overlap || z.distance - A.distance)[0]) == null ? void 0 : jt.candidate) ?? P, tt = Mt(t), gt = e.every(fi), St = new Set(e.map(On)).size === 1 ? On(t) : void 0, Lt = ai(t), Z = t.type === "arrow" ? "arrow" : Lt[0] ?? "color", [ot, Xt] = st(Z);
  ie(() => {
    Lt.includes(ot) || Xt(Z);
  }, [Z, Lt, ot]);
  const yt = t.type === "arrow" && !!((Ot = t.orthogonalWaypoints) != null && Ot.length), ft = t.type === "arrow" ? t.arrowStart ?? "none" : "none", wt = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", ht = (z, A, q, it, lt = it) => /* @__PURE__ */ S("button", { type: "button", title: it, "aria-label": lt, onClick: q, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${A ? "bg-blue-600 text-white" : p}`, children: z }), rt = (z) => /* @__PURE__ */ S("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: z }), ct = (z, A, q, it, lt = !1) => /* @__PURE__ */ S(
    "button",
    {
      type: "button",
      title: A,
      "aria-label": A,
      disabled: !it,
      onClick: q,
      className: `w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default ${lt ? "text-rose-500 hover:bg-rose-500/10" : p}`,
      children: /* @__PURE__ */ S(z, { className: "w-4 h-4" })
    }
  ), Wt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ R("div", { ref: I, "data-canvas-inspector": y ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${a ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: H.left, top: H.top }, onPointerDown: (z) => {
    z.stopPropagation();
    const A = z.target instanceof Element ? z.target : null;
    A != null && A.closest("input, select, textarea") || z.preventDefault();
  }, onClick: (z) => z.stopPropagation(), children: [
    b ? /* @__PURE__ */ R("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      e.length,
      "개 선택됨"
    ] }) : /* @__PURE__ */ S("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: Lt.map((z) => /* @__PURE__ */ S("button", { type: "button", role: "tab", "aria-selected": ot === z, onClick: () => Xt(z), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${ot === z ? "bg-blue-600 text-white" : p}`, children: Wt[z] }, z)) }),
    /* @__PURE__ */ R("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: b || ot === "color" || y ? void 0 : "none" }, children: [
      /* @__PURE__ */ S("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: y ? "그리기" : "색상" }),
      /* @__PURE__ */ S("button", { type: "button", title: y ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": y ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => l((z) => !z), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${a ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ S("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ S("span", { className: "canvas-color-wheel-trigger-dot", style: { background: C } }) }) }),
      d && /* @__PURE__ */ R("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${a ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !y && /* @__PURE__ */ R("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          Ze(t) && /* @__PURE__ */ S("button", { type: "button", role: "tab", "aria-selected": w === "fill", onClick: () => M("fill"), className: w === "fill" ? "is-active" : "", children: "배경" }),
          Hn(t) && /* @__PURE__ */ S("button", { type: "button", role: "tab", "aria-selected": w === "stroke", onClick: () => M("stroke"), className: w === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ S("button", { type: "button", role: "tab", "aria-selected": w === "text", onClick: () => M("text"), className: w === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ S("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: Qn.map((z) => /* @__PURE__ */ S("button", { type: "button", title: dt[z].label, "aria-label": `색 ${dt[z].label}`, onClick: () => T(z), className: "canvas-color-preset", style: { background: dt[z].bg, borderColor: dt[z].border, outline: t.color === z && !t.fillColor && !t.strokeColor ? `2px solid ${j.blue}` : void 0, outlineOffset: 1 } }, z)) }),
        /* @__PURE__ */ S(ui, { value: Y, onChange: L }),
        /* @__PURE__ */ R("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ S("span", { children: "#" }),
          /* @__PURE__ */ S(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: k.replace(/^#/, ""),
              onChange: (z) => {
                const A = z.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                $(`#${A}`.toUpperCase()), A.length === 6 && L(`#${A}`);
              },
              onBlur: () => $(ye(Y).toUpperCase()),
              onPointerDown: (z) => z.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !b && ot !== "color" && !y && /* @__PURE__ */ R(oe, { children: [
      /* @__PURE__ */ R("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ S("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ R("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: ae(t), color: j.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ S("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ S("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? ae(t), onChange: (z) => o({ textColor: z.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ R("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${a ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ S("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ S("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => o({ fontSize: Math.max(8, tt - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${p}`, children: /* @__PURE__ */ S(Vr, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ S("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: tt }),
          /* @__PURE__ */ S("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => o({ fontSize: Math.min(96, tt + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${p}`, children: /* @__PURE__ */ S(Gr, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ R("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ S("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (z) => {
            const A = Jo(z.target.value);
            o(A === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: A, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${a ? "text-slate-200" : "text-slate-700"}`, children: Ko.map((z) => /* @__PURE__ */ S("option", { value: z, className: a ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: Ht[z].label }, z)) }),
          /* @__PURE__ */ S(qr, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ R(oe, { children: [
          /* @__PURE__ */ S("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (z) => f(z.target.value), onChange: (z) => z.currentTarget.value && f(z.currentTarget.value), onKeyDown: (z) => {
            z.key === "Enter" && (z.preventDefault(), f(z.currentTarget.value));
          }, onDoubleClick: (z) => z.stopPropagation(), onPointerDown: (z) => z.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ S("datalist", { id: `canvas-font-families-${t.id}`, children: m.map((z) => /* @__PURE__ */ S("option", { value: z }, z)) })
        ] })
      ] }),
      /* @__PURE__ */ R("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ S("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ S("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", Zr, "왼쪽 정렬"], ["center", Qr, "가운데 정렬"], ["right", Jr, "오른쪽 정렬"]].map(([z, A, q]) => /* @__PURE__ */ S("button", { type: "button", "aria-label": q, title: q, onClick: () => o({ textAlign: z }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${Pt(t) === z ? "bg-blue-600 text-white shadow-sm" : p}`, children: /* @__PURE__ */ S(A, { className: "w-4 h-4" }) }, z)) }),
        s && /* @__PURE__ */ R(oe, { children: [
          /* @__PURE__ */ S("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ S("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", to, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", eo, "번호 목록"]].map(([z, A, q]) => /* @__PURE__ */ S("button", { type: "button", onClick: () => h(z), "aria-label": q, title: q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${p}`, children: A ? /* @__PURE__ */ S(A, { className: "w-4 h-4" }) : /* @__PURE__ */ S("span", { className: "text-base leading-none", children: "–" }) }, z)) }),
          /* @__PURE__ */ S("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: no, label: "굵게" }, { cmd: "italic", Icon: ro, label: "기울임" }, { cmd: "underline", Icon: oo, label: "밑줄" }].map(({ cmd: z, Icon: A, label: q }) => /* @__PURE__ */ S("button", { type: "button", onClick: () => u(z), "aria-label": q, title: q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${p}`, children: /* @__PURE__ */ S(A, { className: "w-4 h-4" }) }, z)) })
        ] })
      ] }),
      (ot === "arrange" && t.type === "card" || ot === "arrow" && t.type === "arrow") && /* @__PURE__ */ R("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ R(oe, { children: [
          /* @__PURE__ */ S("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ S("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (z) => z.stopPropagation(), onChange: (z) => o({ category: z.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${a ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ R("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ R("div", { className: "flex items-center gap-1", children: [
            rt("경로"),
            ht("직선", (t.routing ?? "straight") === "straight", () => o({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            ht("직각", t.routing === "orthogonal", () => o({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            ht("곡선", (t.routing ?? "") === "curved", () => o({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            yt && ht("자동", !1, () => o({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ R("div", { className: "flex items-center gap-1", children: [
            rt("선"),
            ht("—", (t.strokeStyle ?? "solid") === "solid", () => o({ strokeStyle: "solid" }), "실선"),
            ht("- -", t.strokeStyle === "dashed", () => o({ strokeStyle: "dashed" }), "파선"),
            ht("···", t.strokeStyle === "dotted", () => o({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ R("div", { className: "flex items-center gap-1", children: [
            rt("시작"),
            ht(ft === "none" ? "○" : ft === "dot" ? "●" : "◀", ft !== "none", () => o({ arrowStart: ft === "none" ? "arrow" : ft === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${ft === "none" ? "없음" : ft === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ R("div", { className: "flex items-center gap-1", children: [
            rt("끝"),
            ht(wt === "none" ? "○" : wt === "dot" ? "●" : "▶", wt !== "none", () => o({ arrowEnd: wt === "arrow" ? "dot" : wt === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${wt === "none" ? "없음" : wt === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      ot === "diagram" && /* @__PURE__ */ S("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${a ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    gt && /* @__PURE__ */ R("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
      rt("굵기"),
      di.map((z) => /* @__PURE__ */ S(Bt.Fragment, { children: ht(String(z), St === z, () => o({ strokeWidth: z }), `굵기 ${z}`) }, z))
    ] }),
    /* @__PURE__ */ R("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
      rt("선택"),
      ct(io, "그룹 (Ctrl+G)", n.group, b),
      ct(ao, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, g),
      ct(co, "복제", n.duplicateSelected, !0),
      ct(so, "삭제 (Delete)", n.deleteSelected, !0, !0)
    ] })
  ] });
}
const xi = [2, 4, 6, 8];
function pi({
  tool: t,
  activeColor: e,
  drawStrokeWidth: n,
  isDarkMode: r,
  onSelectColor: i,
  onSelectStrokeWidth: c
}) {
  return t !== "draw" && t !== "highlighter" ? null : /* @__PURE__ */ R(
    "div",
    {
      "data-canvas-pen-palette": "true",
      className: `absolute top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex flex-wrap items-center gap-2 px-3 py-2 rounded-2xl border shadow-xl backdrop-blur-md ${r ? "bg-slate-900/90 border-slate-700 text-slate-200 shadow-slate-950/40" : "bg-white/90 border-slate-200 text-slate-700 shadow-slate-300/40"}`,
      onPointerDown: (s) => s.stopPropagation(),
      onClick: (s) => s.stopPropagation(),
      children: [
        /* @__PURE__ */ S("div", { className: "flex items-center gap-1.5 pr-2 border-r border-slate-300/40 dark:border-slate-700/60", children: /* @__PURE__ */ S("span", { className: "text-[11px] font-bold tracking-wide opacity-75", children: t === "highlighter" ? "형광펜" : "펜 색상" }) }),
        /* @__PURE__ */ S("div", { className: "flex items-center gap-1.5", role: "radiogroup", "aria-label": "펜 색상 선택", children: Qn.map((s) => {
          const d = dt[s], m = e === s;
          return /* @__PURE__ */ S(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": m,
              title: `${d.label} 선택`,
              "aria-label": d.label,
              onClick: () => i(s),
              className: `group relative w-6 h-6 rounded-full transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${m ? "scale-110 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900" : "hover:scale-105 opacity-90 hover:opacity-100"}`,
              style: {
                backgroundColor: d.border,
                borderColor: d.border
              },
              children: m && /* @__PURE__ */ S("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ S("span", { className: "w-1.5 h-1.5 rounded-full bg-white shadow-sm" }) })
            },
            s
          );
        }) }),
        /* @__PURE__ */ R("div", { className: "flex items-center gap-1 pl-2 border-l border-slate-300/40 dark:border-slate-700/60", children: [
          /* @__PURE__ */ S("span", { className: `mr-1 text-xs font-semibold ${r ? "text-slate-300" : "text-slate-500"}`, children: "두께" }),
          xi.map((s) => {
            const d = n === s;
            return /* @__PURE__ */ S(
              "button",
              {
                type: "button",
                title: `두께 ${s}px`,
                "aria-label": `두께 ${s}px`,
                onClick: () => c(s),
                className: `w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-semibold transition-colors ${d ? "bg-blue-600 text-white font-bold" : r ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-700"}`,
                children: /* @__PURE__ */ S(
                  "span",
                  {
                    className: "rounded-full bg-current",
                    style: { width: `${Math.max(3, s + 1)}px`, height: `${Math.max(3, s + 1)}px` }
                  }
                )
              },
              s
            );
          })
        ] })
      ]
    }
  );
}
function vi({ isDarkMode: t, onExit: e }) {
  return /* @__PURE__ */ R(
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
        /* @__PURE__ */ S(lo, { "aria-hidden": "true", className: "h-4 w-4" }),
        /* @__PURE__ */ S("span", { children: "펜 모드 종료" })
      ]
    }
  );
}
function mi({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: r,
  commitEditorHtml: i,
  onEditorKeyDown: c,
  setShapes: a,
  onDirty: s,
  renderDiagram: d
}) {
  const m = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", l = (o, u) => /* @__PURE__ */ S(
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
      onDoubleClick: (h) => h.stopPropagation(),
      onKeyDown: c,
      className: `${m} ${o}`,
      style: u
    },
    "canvas-editor"
  );
  return { renderEditor: l, renderShapeBody: (o) => {
    const u = dt[o.color ?? "blue"], h = e === o.id, f = We(o);
    if (o.type === "frame") {
      const M = o.strokeWidth ?? 2;
      return /* @__PURE__ */ S(
        "div",
        {
          "data-canvas-stroke-width": M,
          className: "w-full h-full rounded",
          style: { border: `${M / t.z}px solid ${n ? j.slate600 : j.slate400}` },
          children: /* @__PURE__ */ S(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? j.slate400 : j.muted
              },
              children: h ? l("", { fontSize: 13 / t.z }) : ke(o) || "프레임"
            }
          )
        }
      );
    }
    if (o.type === "note")
      return /* @__PURE__ */ S(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: Le(o), borderTop: `6px solid ${u.border}`, color: u.text },
          children: h ? l("font-medium", { color: ae(o), fontSize: Mt(o), fontFamily: zt(o), textAlign: Pt(o) }) : f ? /* @__PURE__ */ S("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: ae(o), fontSize: Mt(o), fontFamily: zt(o), textAlign: Pt(o) }, dangerouslySetInnerHTML: { __html: f } }, "canvas-view") : /* @__PURE__ */ S("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: ae(o), fontSize: Mt(o), fontFamily: zt(o), textAlign: Pt(o) }, children: /* @__PURE__ */ S("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (o.type === "card") {
      const M = o.cardStyle === "glass";
      return dn(o) && d && !h ? /* @__PURE__ */ S("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: d(o) }) : /* @__PURE__ */ R(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: M ? j.glassFill : o.fillColor ?? j.slateCard,
            backdropFilter: M ? "blur(12px)" : void 0,
            WebkitBackdropFilter: M ? "blur(12px)" : void 0,
            border: `1px solid ${M ? j.glassBorder : j.darkBorder}`,
            boxShadow: M ? j.glassShadow : j.cardShadow
          },
          children: [
            /* @__PURE__ */ R(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (k) => k.stopPropagation(),
                onDoubleClick: (k) => k.stopPropagation(),
                onBlur: (k) => {
                  const Y = (k.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  a((C) => C.map((L) => L.id === o.id ? { ...L, category: Y } : L)), s();
                },
                onKeyDown: (k) => {
                  k.key === "Enter" && (k.preventDefault(), k.currentTarget.blur());
                },
                children: [
                  "[ ",
                  o.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            h ? l("flex-1 font-medium", { color: o.textColor ?? j.white, fontSize: Mt(o), fontFamily: zt(o), textAlign: Pt(o) }) : /* @__PURE__ */ S("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: o.textColor ?? j.white, fontSize: Mt(o), fontFamily: zt(o), textAlign: Pt(o) }, dangerouslySetInnerHTML: { __html: f } }, "canvas-view"),
            /* @__PURE__ */ R("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              o.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (o.type === "text") {
      const M = n ? "text-slate-100" : "text-slate-900", k = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${M}`,
        style: { color: o.textColor, fontSize: Mt(o), fontFamily: zt(o), textAlign: Pt(o) }
      };
      return h ? l(`font-medium ${M}`, k.style) : f ? /* @__PURE__ */ S(
        "div",
        {
          "data-canvas-text-view": !0,
          ...k,
          dangerouslySetInnerHTML: { __html: f }
        },
        "canvas-view"
      ) : /* @__PURE__ */ S("div", { "data-canvas-text-view": !0, ...k, children: /* @__PURE__ */ S("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (o.type === "image") {
      const M = nn(o.src);
      return M ? /* @__PURE__ */ S(
        "img",
        {
          src: M,
          alt: o.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const p = Le(o), b = lr(o), g = ae(o);
    if (o.type === "triangle" || o.type === "diamond" || o.type === "hexagon" || o.type === "star") {
      const M = o.strokeWidth ?? 2;
      return /* @__PURE__ */ R("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ S("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${o.w} ${o.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ S("polygon", { "data-canvas-stroke-width": M, points: ur(o.type, o.w, o.h), fill: p, stroke: b, strokeWidth: M / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ S("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: g }, children: h ? l("font-medium", { color: g, fontSize: Mt(o), fontFamily: zt(o), textAlign: Pt(o) }) : /* @__PURE__ */ S("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: Mt(o), fontFamily: zt(o), textAlign: Pt(o) }, dangerouslySetInnerHTML: { __html: f } }, "canvas-view") })
      ] });
    }
    const v = nn(o.src), w = o.type === "rect" || o.type === "ellipse" ? o.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ S(
      "div",
      {
        "data-canvas-stroke-width": w,
        className: `w-full h-full flex items-center justify-center p-3 ${o.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: p, border: `${w / t.z}px solid ${b}`, color: g },
        children: h ? l("font-medium", { color: g, fontSize: Mt(o), fontFamily: zt(o), textAlign: Pt(o) }) : /* @__PURE__ */ R("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: Mt(o), fontFamily: zt(o), textAlign: Pt(o) }, children: [
          /* @__PURE__ */ S("div", { dangerouslySetInnerHTML: { __html: f } }),
          v && /* @__PURE__ */ S(
            "a",
            {
              href: v,
              target: "_blank",
              rel: "noreferrer",
              onPointerDown: (M) => M.stopPropagation(),
              className: "block mt-1 text-[11px] underline opacity-70",
              children: "파일 열기"
            }
          )
        ] }, "canvas-view")
      }
    );
  } };
}
function gi({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: r,
  selected: i,
  editingId: c,
  boardIdentity: a
}) {
  const [s, d] = st({ width: 0, height: 0 });
  Nt(() => {
    const h = t.current;
    if (!h) return;
    let f = -1, p = -1;
    const b = (y = h.clientWidth, v = h.clientHeight) => {
      y === f && v === p || (f = y, p = v, d({ width: y, height: v }));
    };
    if (b(), typeof ResizeObserver < "u") {
      const y = new ResizeObserver((v) => {
        var M;
        const w = (M = v[0]) == null ? void 0 : M.contentRect;
        b((w == null ? void 0 : w.width) ?? h.clientWidth, (w == null ? void 0 : w.height) ?? h.clientHeight);
      });
      return y.observe(h), () => y.disconnect();
    }
    const g = () => b();
    return window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, [a, t]);
  const m = Tt(() => new Map(n.map((h) => [h.id, h])), [n]), l = Tt(
    () => [...n].sort((h, f) => (h.type === "frame" ? -1 : 0) - (f.type === "frame" ? -1 : 0)),
    [n]
  ), x = Tt(() => {
    if (!t.current || s.width <= 0 || s.height <= 0) return null;
    const h = 200 / r.z;
    return {
      minX: r.x - h,
      minY: r.y - h,
      maxX: r.x + s.width / r.z + h,
      maxY: r.y + s.height / r.z + h
    };
  }, [r, t, s]), o = ut((h) => {
    if (!x) return !1;
    if (h.id === c || i.has(h.id)) return !0;
    if (h.type === "arrow") {
      const p = Ft(h, m, e.current), g = (p.routing === "orthogonal" ? p.pathPoints : null) ?? [p.start, p.end], y = Math.min(...g.map((k) => k.x)), v = Math.max(...g.map((k) => k.x)), w = Math.min(...g.map((k) => k.y)), M = Math.max(...g.map((k) => k.y));
      return v >= x.minX && y <= x.maxX && M >= x.minY && w <= x.maxY;
    }
    const f = vt(h);
    return f.maxX >= x.minX && f.minX <= x.maxX && f.maxY >= x.minY && f.minY <= x.maxY;
  }, [c, i, m, e, x]), u = Tt(
    () => l.filter(o),
    [o, l]
  );
  return { shapeById: m, visiblePaintOrder: u };
}
function yi({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: r,
  onDirty: i,
  patchSelected: c
}) {
  const a = ut(() => {
    const u = t.current;
    if (!u || !e) return;
    let h;
    try {
      h = an(u.innerHTML);
    } catch {
      r("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const f = u.scrollHeight;
    n((p) => p.map((b) => {
      if (b.id !== e) return b;
      const g = dn(b) ? { ...b, text: ke({ ...b, html: h, text: void 0 }), html: void 0 } : { ...b, html: h, text: void 0 };
      if (b.type === "text")
        return b.manualSize ? g : { ...g, ...ni(u, b) };
      if (b.type === "arrow") return g;
      const y = b.type === "note" ? 32 : b.type === "card" ? 96 : (
        // category header + type footer
        (b.type === "frame", 24)
      ), v = Math.max(b.h, f + y);
      return { ...g, h: v };
    })), i();
  }, [e, i]), s = (u) => {
    var h;
    (h = t.current) == null || h.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(u), a();
  }, d = () => {
    var p;
    const u = (p = window.getSelection()) == null ? void 0 : p.anchorNode, h = u instanceof Element ? u : u == null ? void 0 : u.parentElement, f = h == null ? void 0 : h.closest("ul, ol");
    return f instanceof HTMLElement ? f : null;
  }, m = (u, h, f) => {
    const p = document.createElement(h);
    for (; u.firstChild; ) p.append(u.firstChild);
    return u.replaceWith(p), p;
  }, l = (u) => {
    const h = t.current;
    if (!h) return;
    h.focus();
    const f = d();
    if (u === "number")
      if ((f == null ? void 0 : f.tagName) === "OL")
        f.removeAttribute("data-list-style");
      else if ((f == null ? void 0 : f.tagName) === "UL")
        m(f, "ol");
      else {
        document.execCommand("insertOrderedList");
        const p = d();
        p == null || p.removeAttribute("data-list-style");
      }
    else if ((f == null ? void 0 : f.tagName) === "UL") {
      const p = f.dataset.listStyle;
      u === p ? document.execCommand("insertUnorderedList") : f.dataset.listStyle = u;
    } else {
      (f == null ? void 0 : f.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const p = d();
      p && (p.dataset.listStyle = u);
    }
    a();
  };
  return { commitEditorHtml: a, applyFormat: s, applyList: l, onEditorKeyDown: (u) => {
    if (u.key === "Tab") {
      u.preventDefault(), document.execCommand(u.shiftKey ? "outdent" : "indent"), a();
      return;
    }
    if (u.key === " ") {
      const h = window.getSelection();
      if (h && h.isCollapsed && h.anchorNode) {
        const f = h.anchorNode, p = f.textContent || "", b = h.anchorOffset, g = p.slice(0, b).trim();
        if (!d()) {
          if (g === "-" || g === "–") {
            u.preventDefault(), f.textContent = p.slice(b), l("dash");
            return;
          }
          if (g === "*") {
            u.preventDefault(), f.textContent = p.slice(b), l("bullet");
            return;
          }
          if (g === "1.") {
            u.preventDefault(), f.textContent = p.slice(b), l("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (u) => {
    const h = wr(u);
    if (!h) {
      c({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    c({
      fontFamily: "custom",
      customFontFamily: h
    });
  } };
}
function wi({
  boardIdentity: t,
  tool: e,
  activeColor: n,
  defaultActiveColor: r,
  onActiveColorChange: i,
  controlledShapes: c,
  onShapesChange: a,
  onDirty: s
}) {
  const d = Q(null), m = Q(null), [l, x] = st([]), o = c !== void 0 && a !== void 0, u = Q(/* @__PURE__ */ new WeakMap()), h = Tt(() => {
    const F = u.current;
    return (o ? c ?? [] : l).map((K) => {
      let B = F.get(K);
      return B === void 0 && (B = vr(K), F.set(K, B)), B;
    }).filter((K) => K !== null);
  }, [o, c, l]), f = Q(a);
  f.current = a;
  const p = ut((F) => {
    const K = f.current;
    if (!K) {
      x(F);
      return;
    }
    K(typeof F == "function" ? F : () => F);
  }, []), [b, g] = st({ x: -400, y: -300, z: 1 }), [y, v] = st(/* @__PURE__ */ new Set()), [w, M] = st(null), [k, $] = st({ kind: "none" }), [Y, C] = st(!1), [L, T] = st([]), [I, X] = st(""), [N, E] = st(!1), [D, _] = st(null), [G, V] = st(!1), [O, U] = st(n ?? r ?? "blue"), J = n ?? O, nt = Q(i);
  nt.current = i;
  const mt = ut((F) => {
    U((K) => {
      var at;
      const B = typeof F == "function" ? F(K) : F;
      return (at = nt.current) == null || at.call(nt, B), B;
    });
  }, []), [kt, It] = st(Ie), P = Q(J);
  P.current = J;
  const W = Q([]), H = Q([]), tt = Q(null), gt = Q(/* @__PURE__ */ new Map()), Et = Q(null), St = Q(null), Lt = Q([]), Z = Q(/* @__PURE__ */ new Set()), ot = Q(h), Xt = Q(b), yt = Q(e), ft = Q(y), wt = Q(w), ht = Q(!1);
  ot.current = h, Xt.current = b, yt.current = e, ft.current = y, wt.current = w;
  const rt = ut((F) => {
    var K;
    ht.current = F, F && typeof window < "u" && ((K = window.getSelection()) == null || K.removeAllRanges()), V(F);
  }, []), [ct, Wt] = st("ink"), [jt, Ot] = st("yellow"), z = e === "highlighter" ? jt : ct, A = Q(z);
  A.current = z;
  const q = ut((F) => {
    yt.current === "highlighter" ? Ot(F) : Wt(F);
  }, []), it = Q({ kind: "none" }), lt = ut((F) => {
    it.current = F, $(F);
  }, []), bt = ut((F) => {
    ft.current = F, v(F);
  }, []);
  ie(() => {
    var K;
    const F = /* @__PURE__ */ new Set();
    ft.current = F, wt.current = null, gt.current.clear(), W.current = [], H.current = [], tt.current = null, St.current = null, Lt.current = [], Z.current.clear(), ht.current = !1, lt({ kind: "none" }), v(F), M(null), C(!1), T([]), _(null), V(!1), X(""), (K = d.current) == null || K.focus();
  }, [lt, t]), Nt(() => {
    let F = !1;
    const K = () => {
      const at = Go();
      F || It(at);
    };
    if (K(), typeof document > "u" || !("fonts" in document)) return;
    const B = () => K();
    return document.fonts.addEventListener("loadingdone", B), () => {
      F = !0, document.fonts.removeEventListener("loadingdone", B);
    };
  }, [t]);
  const Ut = (w ? h.find((F) => F.id === w) : void 0) !== void 0;
  ie(() => {
    if (!w || !Ut) return;
    const F = () => {
      const B = m.current, at = ot.current.find((Ke) => Ke.id === w);
      if (!B || !at || (B.dataset.seeded !== w && (B.innerHTML = We(at), B.dataset.seeded = w), document.activeElement === B)) return;
      B.focus();
      const Vt = document.createRange();
      Vt.selectNodeContents(B), Vt.collapse(!1);
      const Gt = window.getSelection();
      Gt == null || Gt.removeAllRanges(), Gt == null || Gt.addRange(Vt);
    };
    F();
    const K = requestAnimationFrame(F);
    return () => cancelAnimationFrame(K);
  }, [w, Ut]);
  const Dt = ut((F) => {
    p((K) => {
      const B = typeof F == "function" ? F(K) : F;
      return W.current.push(K), W.current.length > 100 && W.current.shift(), H.current = [], B;
    }), s();
  }, [s]), xe = ut((F) => {
    if (F.length === 0) return;
    let K = ot.current;
    for (const B of F)
      W.current.push(K), K = [...K, B];
    W.current.length > 100 && W.current.splice(0, W.current.length - 100), H.current = [], p((B) => [...B, ...F]), s();
  }, [s, p]), Re = ut((F) => F.size === 0 ? !1 : (Dt((K) => K.filter((B) => F.has(B.id) ? !1 : B.type !== "arrow" ? !0 : !(B.fromId && F.has(B.fromId)) && !(B.toId && F.has(B.toId)))), bt(/* @__PURE__ */ new Set()), X(`${F.size}개 삭제됨`), !0), [Dt, bt]), $e = ut(() => {
    tt.current = ot.current;
  }, []), pe = ut(() => {
    const F = tt.current;
    tt.current = null, !(!F || F === ot.current) && (W.current.push(F), W.current.length > 100 && W.current.shift(), H.current = [], s());
  }, [s]), Me = ut(() => {
    const F = tt.current;
    tt.current = null, !(!F || F === ot.current) && (ot.current = F, p(F));
  }, [p]), Be = ut((F, K) => {
    var Vt;
    const B = (Vt = d.current) == null ? void 0 : Vt.getBoundingClientRect(), at = Xt.current;
    return B ? { x: (F - B.left) / at.z + at.x, y: (K - B.top) / at.z + at.y } : { x: 0, y: 0 };
  }, []), _e = ut(() => {
    var B;
    const F = (B = d.current) == null ? void 0 : B.getBoundingClientRect(), K = Xt.current;
    return F ? { x: K.x + F.width / 2 / K.z, y: K.y + F.height / 2 / K.z } : { x: 0, y: 0 };
  }, []), ve = ut((F) => {
    const K = new Set(ot.current.filter((at) => F.has(at.id) && at.groupId).map((at) => at.groupId));
    if (K.size === 0) return F;
    const B = new Set(F);
    for (const at of ot.current) at.groupId && K.has(at.groupId) && B.add(at.id);
    return B;
  }, []);
  return {
    containerRef: d,
    editorRef: m,
    localShapes: l,
    setLocalShapes: x,
    controlled: o,
    shapes: h,
    setShapes: p,
    camera: b,
    setCamera: g,
    cameraRef: Xt,
    selected: y,
    setSelected: v,
    selectedRef: ft,
    editingId: w,
    setEditingId: M,
    editingIdRef: wt,
    interaction: k,
    interactionRef: it,
    applyInteraction: lt,
    isSpaceDown: Y,
    setIsSpaceDown: C,
    guides: L,
    setGuides: T,
    announcement: I,
    setAnnouncement: X,
    showInspectorPalette: N,
    setShowInspectorPalette: E,
    eraserPos: D,
    setEraserPos: _,
    isPenMode: G,
    setIsPenMode: rt,
    penModeRef: ht,
    activeColor: J,
    setActiveColor: mt,
    activeColorRef: P,
    drawColor: z,
    setDrawColor: q,
    drawColorRef: A,
    installedFontFamilies: kt,
    pointers: gt,
    past: W,
    future: H,
    selectNow: bt,
    commit: Dt,
    deleteSelection: Re,
    beginHistory: $e,
    endHistory: pe,
    cancelHistory: Me,
    toPage: Be,
    viewportCentre: _e,
    expandToGroups: ve,
    toolRef: yt,
    shapesRef: ot,
    liveStrokeCanvasRef: Et,
    activeDrawRef: St,
    pendingDrawsRef: Lt,
    queuedDrawIdsRef: Z,
    commitDrawBatch: xe
  };
}
function bi({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: r,
  maxZoom: i,
  shapes: c,
  selected: a,
  editingId: s,
  textualTypes: d,
  onZoomChange: m,
  onSelectionChange: l,
  onLocalCursor: x,
  toPage: o
}) {
  Nt(() => {
    m == null || m(e.z);
  }, [e.z, m]), Nt(() => {
    const y = t.current;
    if (!y) return;
    const v = (w) => {
      if (w.preventDefault(), w.ctrlKey || w.metaKey) {
        const M = y.getBoundingClientRect();
        n((k) => {
          const $ = Math.min(i, Math.max(r, k.z * Math.exp(-w.deltaY * 0.01))), Y = w.clientX - M.left, C = w.clientY - M.top;
          return { x: k.x + Y / k.z - Y / $, y: k.y + C / k.z - C / $, z: $ };
        });
      } else
        n((M) => ({ ...M, x: M.x + w.deltaX / M.z, y: M.y + w.deltaY / M.z }));
    };
    return y.addEventListener("wheel", v, { passive: !1 }), () => y.removeEventListener("wheel", v);
  }, [t, i, r, n]);
  const u = Tt(() => {
    const y = c.filter((v) => a.has(v.id));
    return {
      count: y.length,
      canGroup: y.length > 1,
      canUngroup: y.some((v) => !!v.groupId),
      isTextual: y.length === 1 && d.includes(y[0].type),
      selectedIds: y.map((v) => v.id)
    };
  }, [a, c, d]);
  Nt(() => {
    l == null || l(u);
  }, [l, u]);
  const h = Tt(() => {
    if (s) {
      const v = c.find((w) => w.id === s);
      return v && v.type !== "image" && v.type !== "draw" ? [v] : [];
    }
    const y = c.filter((v) => a.has(v.id));
    return y.length === 1 && y[0].type === "image" ? [] : y;
  }, [s, a, c]), f = Tt(() => h.length === 0 ? null : h.find((y) => y.type !== "image") ?? null, [h]), p = Q(0);
  return { selectionInfo: u, inspectorSelection: h, inspectorShape: f, onContainerPointerMove: x ? (y) => {
    const v = performance.now();
    v - p.current < 60 || (p.current = v, x(o(y.clientX, y.clientY)));
  } : void 0, onContainerPointerLeave: x ? () => x(null) : void 0 };
}
const fe = 24;
function ki({
  containerRef: t,
  shapesRef: e,
  selectedRef: n,
  commit: r,
  deleteSelection: i,
  selectNow: c,
  setAnnouncement: a,
  createId: s
}) {
  return Tt(() => ({
    deleteSelected: () => {
      i(n.current);
    },
    duplicateSelected: () => {
      var x;
      const d = n.current;
      if (d.size === 0) return;
      const m = [], l = /* @__PURE__ */ new Map();
      for (const o of e.current) {
        if (!d.has(o.id)) continue;
        let u = o.groupId;
        u && (l.has(u) || l.set(u, s("g")), u = l.get(u)), m.push({
          ...o,
          id: s(),
          x: o.x + fe,
          y: o.y + fe,
          groupId: u,
          points: (x = o.points) == null ? void 0 : x.map(([h, f]) => [h + fe, f + fe]),
          orthogonalWaypoints: o.type === "arrow" && o.orthogonalWaypoints ? o.orthogonalWaypoints.map((h) => ({ x: h.x + fe, y: h.y + fe })) : void 0
        });
      }
      r((o) => [...o, ...m]), c(new Set(m.map((o) => o.id))), a(`${m.length}개 복제됨`);
    },
    group: () => {
      var l;
      const d = n.current;
      if (d.size < 2) return;
      const m = s("g");
      r((x) => x.map((o) => d.has(o.id) ? { ...o, groupId: m } : o)), a(`${d.size}개 그룹화됨`), (l = t.current) == null || l.focus();
    },
    ungroup: () => {
      var m;
      const d = n.current;
      d.size !== 0 && (r((l) => l.map((x) => d.has(x.id) ? { ...x, groupId: void 0 } : x)), a("그룹 해제됨"), (m = t.current) == null || m.focus());
    }
  }), [r, t, s, i, c, n, a, e]);
}
function $i(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, r = 1 / 0, i = -1 / 0, c = -1 / 0;
  for (const x of t) {
    const o = vt(x);
    n = Math.min(n, o.minX), r = Math.min(r, o.minY), i = Math.max(i, o.maxX), c = Math.max(c, o.maxY);
  }
  const a = 40, s = i - n + a * 2, d = c - r + a * 2;
  if (!Number.isFinite(s) || !Number.isFinite(d) || s > se.maxExportDimension || d > se.maxExportDimension || s * d > se.maxExportPixels) return null;
  const m = (x, o, u, h, f) => {
    const p = x.fontSize ?? u, b = zt(x), g = pr(We(x));
    if (g.length === 0) return "";
    const y = Kt(x), v = x.textAlign === "right" ? "end" : x.textAlign === "center" ? "middle" : x.textAlign === "left" ? "start" : f, w = v === "end" ? y.maxX - 12 : v === "middle" ? (y.minX + y.maxX) / 2 : y.minX + 12, M = y.minY + p + 12;
    return g.map((k, $) => {
      const Y = k.map((C) => `<tspan style="${[
        C.bold ? "font-weight:700" : `font-weight:${h}`,
        C.italic ? "font-style:italic" : "",
        C.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Jt(C.text)}</tspan>`).join("");
      return `<text x="${w}" y="${M + $ * p * 1.4}" font-family="${Jt(b)}" font-size="${p}" fill="${o}" text-anchor="${v}">${Y}</text>`;
    }).join("");
  }, l = t.map((x) => {
    const o = dt[x.color ?? "blue"], u = Kt(x), h = At(x), f = x.rotation ? ` transform="rotate(${x.rotation * 180 / Math.PI} ${h.x} ${h.y})"` : "", p = x.color ? dt[x.color].border : j.ink;
    if (x.type === "draw" && x.points) {
      const k = x.drawMode ?? "pen", $ = x.strokeWidth ?? 3, Y = k === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${dr(x.points)}" fill="none" stroke="${p}" stroke-width="${$}"${Y} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (x.type === "arrow") {
      const k = Ft(x, new Map(t.map((O) => [O.id, O])), t), $ = x.strokeWidth ?? 2.5, Y = Math.max(10, 8 + $ * 2), C = Math.max(4, 2 + $), L = k.routing === "orthogonal" && k.pathPoints ? k.pathPoints : null, T = L && L.length > 1, I = T ? Je(L) : k.routing === "curved" ? `M ${k.start.x} ${k.start.y} Q ${k.control.x} ${k.control.y} ${k.end.x} ${k.end.y}` : `M ${k.start.x} ${k.start.y} L ${k.end.x} ${k.end.y}`, X = T ? rr(L) : k.routing === "curved" ? (() => {
        const O = he(0.94, k.start, k.control, k.end);
        return Math.atan2(k.end.y - O.y, k.end.x - O.x);
      })() : Math.atan2(k.end.y - k.start.y, k.end.x - k.start.x), N = T ? we(L[0], L[1]) : k.routing === "orthogonal" && k.start.side ? k.start.side === "e" ? 0 : k.start.side === "w" ? Math.PI : k.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : we(k.start, k.end), E = x.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : x.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", D = (O, U, J, nt) => {
        if (O === "dot") return `<circle cx="${U}" cy="${J}" r="${C}" fill="${p}"/>`;
        if (O === "none") return "";
        const mt = `${U - Y * Math.cos(nt - 0.4)},${J - Y * Math.sin(nt - 0.4)}`, kt = `${U - Y * Math.cos(nt + 0.4)},${J - Y * Math.sin(nt + 0.4)}`;
        return `<polygon points="${U},${J} ${mt} ${kt}" fill="${p}"/>`;
      }, _ = k.routing === "orthogonal" && k.pathPoints ? sn(k.pathPoints) : k.bend === 0 ? { x: (k.start.x + k.end.x) / 2, y: (k.start.y + k.end.y) / 2 } : he(0.5, k.start, k.control, k.end), G = ke(x), V = G ? `<text x="${_.x}" y="${_.y - 6}" text-anchor="middle" font-family="${Jt(zt(x))}" font-size="${x.fontSize ?? 12}" fill="${p}">${Jt(G)}</text>` : "";
      return `<path d="${I}" fill="none" stroke="${p}" stroke-width="${$}" stroke-linecap="round" stroke-linejoin="round"${E}/>` + D(x.arrowEnd ?? "arrow", k.end.x, k.end.y, X) + D(x.arrowStart ?? "none", k.start.x, k.start.y, N + Math.PI) + V;
    }
    if (x.type === "image" && x.src) {
      const k = nn(x.src);
      return k ? `<image href="${Jt(k)}" x="${u.minX}" y="${u.minY}" width="${u.maxX - u.minX}" height="${u.maxY - u.minY}"${f}/>` : "";
    }
    if (x.type === "frame")
      return `<g${f}><rect x="${u.minX}" y="${u.minY}" width="${u.maxX - u.minX}" height="${u.maxY - u.minY}" fill="none" stroke="${j.slate400}" stroke-width="${x.strokeWidth ?? 2}" rx="4"/><text x="${u.minX}" y="${u.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${j.muted}">${Jt(x.text ?? "프레임")}</text></g>`;
    if (x.type === "note")
      return `<g${f}><rect x="${u.minX}" y="${u.minY}" width="${u.maxX - u.minX}" height="${u.maxY - u.minY}" fill="${o.bg}"/><rect x="${u.minX}" y="${u.minY}" width="${u.maxX - u.minX}" height="6" fill="${o.border}"/>` + m(x, o.text, 14, "600", "start") + "</g>";
    if (x.type === "card") {
      const k = x.cardStyle === "glass";
      return `<g${f}><rect x="${u.minX}" y="${u.minY}" width="${u.maxX - u.minX}" height="${u.maxY - u.minY}" rx="16" fill="${k ? j.glassFill : j.slateCard}"/><text x="${u.minX + 16}" y="${u.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${j.slate400}">[ ${Jt(x.category ?? "ENTITY")} ]</text>` + m(x, j.white, 16, "700", "start") + "</g>";
    }
    const b = x.type === "rect" || x.type === "ellipse" || x.type === "triangle" || x.type === "diamond" || x.type === "hexagon" || x.type === "star" ? x.strokeWidth ?? 2 : 2, g = Le(x), y = lr(x), v = x.type === "triangle" || x.type === "diamond" || x.type === "hexagon" || x.type === "star", w = v ? ur(x.type, u.maxX - u.minX, u.maxY - u.minY).split(" ").map((k) => {
      const [$, Y] = k.split(",").map(Number);
      return `${$ + u.minX},${Y + u.minY}`;
    }).join(" ") : "", M = x.type === "ellipse" ? `<ellipse cx="${(u.minX + u.maxX) / 2}" cy="${(u.minY + u.maxY) / 2}" rx="${(u.maxX - u.minX) / 2}" ry="${(u.maxY - u.minY) / 2}" fill="${g}" stroke="${y}" stroke-width="${b}"/>` : v ? `<polygon points="${w}" fill="${g}" stroke="${y}" stroke-width="${b}" stroke-linejoin="round"/>` : `<rect x="${u.minX}" y="${u.minY}" width="${u.maxX - u.minX}" height="${u.maxY - u.minY}" rx="12" fill="${g}" stroke="${y}" stroke-width="${b}"/>`;
    return `<g${f}>${M}${m(x, o.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${d}" viewBox="${n - a} ${r - a} ${s} ${d}"><rect x="${n - a}" y="${r - a}" width="${s}" height="${d}" fill="${e ? j.canvasDark : j.canvasLight}"/>` + l + "</svg>";
}
async function Mi(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), r = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), i = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), c = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, a = new Image();
  a.crossOrigin = "anonymous";
  try {
    await new Promise((o, u) => {
      a.onload = () => o(), a.onerror = () => u(new Error("svg rasterise failed")), a.src = c;
    });
  } catch {
    return null;
  }
  const s = 2, d = r * s, m = i * s;
  if (!Number.isSafeInteger(d) || !Number.isSafeInteger(m) || d > se.maxExportDimension || m > se.maxExportDimension || d * m > se.maxExportPixels) return null;
  const l = document.createElement("canvas");
  l.width = d, l.height = m;
  const x = l.getContext("2d");
  return x ? (x.scale(s, s), x.drawImage(a, 0, 0), new Promise((o) => {
    try {
      l.toBlob((u) => o(u), "image/png");
    } catch {
      o(null);
    }
  })) : null;
}
function zi(t, e, n) {
  if (t.length < 2) return;
  const r = t.filter(
    (o) => o.type !== "draw" && o.type !== "arrow" && o.type !== "frame" && o.type !== "image"
  );
  if (r.length < 2) return;
  const i = r.map((o, u) => ({
    id: o.id,
    i: u,
    x: At(o).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: At(o).y,
    vx: 0,
    vy: 0
  }));
  for (let o = 0; o < i.length; o++)
    for (let u = 0; u < o; u++)
      if (Math.abs(i[o].x - i[u].x) < 1 && Math.abs(i[o].y - i[u].y) < 1) {
        const h = 2 * Math.PI * o / i.length;
        i[o].x += Math.cos(h) * 10, i[o].y += Math.sin(h) * 10;
        break;
      }
  const c = new Map(i.map((o) => [o.id, o])), a = [];
  for (const o of t) {
    if (o.type !== "arrow") continue;
    const u = o.fromId ? c.get(o.fromId) : null, h = o.toId ? c.get(o.toId) : null;
    u && h && a.push([u, h]);
  }
  const s = 220, d = s * s, m = 80;
  let l = 400;
  const x = l / m;
  for (let o = 0; o < m; o++) {
    for (let u = 0; u < i.length; u++)
      i[u].vx = 0, i[u].vy = 0;
    for (let u = 0; u < i.length; u++)
      for (let h = u + 1; h < i.length; h++) {
        const f = i[u], p = i[h], b = f.x - p.x, g = f.y - p.y, y = Math.hypot(b, g) || 0.01, v = d / y, w = b / y * v, M = g / y * v;
        f.vx += w, f.vy += M, p.vx -= w, p.vy -= M;
      }
    for (const [u, h] of a) {
      const f = u.x - h.x, p = u.y - h.y, b = Math.hypot(f, p) || 0.01, g = b * b / s, y = f / b * g, v = p / b * g;
      u.vx -= y, u.vy -= v, h.vx += y, h.vy += v;
    }
    for (const u of i) {
      const h = Math.hypot(u.vx, u.vy) || 0.01, f = Math.min(h, l);
      u.x += u.vx / h * f, u.y += u.vy / h * f;
    }
    l = Math.max(0.5, l - x);
  }
  e((o) => o.map((u) => {
    const h = c.get(u.id);
    return h ? { ...u, x: h.x - u.w / 2, y: h.y - u.h / 2 } : u;
  })), n();
}
function Ci(t, {
  controlled: e,
  past: n,
  future: r,
  setLocalShapes: i,
  setCamera: c,
  selectNow: a,
  setEditingId: s
}) {
  let d;
  try {
    d = Kr(t);
  } catch {
    return;
  }
  e || (n.current = [], r.current = [], i(d.shapes.map(Si))), c(d.camera), a(/* @__PURE__ */ new Set()), s(null);
}
function Si(t) {
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
      return Xi(t);
  }
}
function Xi(t) {
  throw new jr(`Unhandled canvas shape type: ${String(t)}.`);
}
const Rn = (t) => t === "draw" || t === "highlighter";
function Yi({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: r,
  toolRef: i,
  activeColorRef: c,
  drawColorRef: a,
  setDrawColor: s,
  setActiveColor: d,
  past: m,
  future: l,
  controlled: x,
  isDarkMode: o,
  minZoom: u,
  maxZoom: h,
  onToolChange: f,
  setSelectedStrokeWidth: p,
  onDirty: b,
  commit: g,
  selectNow: y,
  selectionActions: v,
  viewportCentre: w,
  setShapes: M,
  setLocalShapes: k,
  setCamera: $,
  setEditingId: Y,
  setAnnouncement: C,
  createId: L
}) {
  const T = ut((X) => {
    const N = w(), E = vr({
      id: L(),
      x: X.x ?? N.x - X.w / 2,
      y: X.y ?? N.y - X.h / 2,
      ...X
    });
    if (!E) throw new Error("Canvas could not create a valid shape.");
    return g((D) => [...D, E]), y(/* @__PURE__ */ new Set([E.id])), f("select"), C(`${E.type} 추가됨`), E;
  }, [g, L, f, y, C, w]), I = ut(() => $i(n.current, o), [o, n]);
  Or(t, () => ({
    addNote: (X) => {
      const N = T({ type: "note", w: 180, h: 180, color: X, text: "" });
      Y(N.id);
    },
    addCard: (X, N, E, D) => {
      T({ type: "card", w: 260, h: 150, text: X, category: N, cardStyle: E, color: D });
    },
    addText: () => {
      const X = T({ type: "text", w: 220, h: 44, text: "" });
      Y(X.id);
    },
    addShape: (X, N, E) => {
      T({
        type: X,
        w: X === "ellipse" ? 220 : 200,
        h: X === "ellipse" ? 110 : 140,
        color: N,
        text: E ?? ""
      });
    },
    addArrow: () => {
      const X = w(), N = { id: L(), type: "arrow", x: X.x - 140, y: X.y, w: 280, h: 0 };
      g((E) => [...E, N]), y(/* @__PURE__ */ new Set([N.id])), f("select");
    },
    addImage: (X, N, E, D) => {
      T({ type: "image", w: E, h: D, src: X, fileName: N });
    },
    addFileCard: (X, N, E) => {
      T({ type: "rect", w: 260, h: 120, color: "purple", text: E, src: N, fileName: X });
    },
    updateShapeText: (X, N) => {
      g((E) => E.map((D) => D.id === X ? { ...D, text: N, html: void 0 } : D));
    },
    setSelectedStrokeWidth: p,
    // While a pen tool is active the "active colour" is the pen colour, so
    // hosts that drive the palette through the handle see the same thing the
    // user sees on the canvas. Other tools keep the note/shape colour.
    setActiveColor: (X) => {
      Rn(i.current) ? s(X) : d(X);
    },
    getActiveColor: () => Rn(i.current) ? a.current : c.current,
    setTool: f,
    undo: () => {
      const X = m.current.pop();
      X && (l.current.push(n.current), M(X), y(/* @__PURE__ */ new Set()), Y(null), b(), C("실행 취소"));
    },
    redo: () => {
      const X = l.current.pop();
      X && (m.current.push(n.current), M(X), y(/* @__PURE__ */ new Set()), Y(null), b(), C("다시 실행"));
    },
    deleteSelected: v.deleteSelected,
    duplicateSelected: v.duplicateSelected,
    group: v.group,
    ungroup: v.ungroup,
    zoomBy: (X) => {
      $((N) => {
        var V;
        const E = (V = e.current) == null ? void 0 : V.getBoundingClientRect(), D = Math.min(h, Math.max(u, N.z * X));
        if (!E) return { ...N, z: D };
        const _ = N.x + E.width / 2 / N.z, G = N.y + E.height / 2 / N.z;
        return { x: _ - E.width / 2 / D, y: G - E.height / 2 / D, z: D };
      });
    },
    zoomTo: (X) => {
      $((N) => {
        var V;
        const E = (V = e.current) == null ? void 0 : V.getBoundingClientRect(), D = Math.min(h, Math.max(u, X));
        if (!E) return { ...N, z: D };
        const _ = N.x + E.width / 2 / N.z, G = N.y + E.height / 2 / N.z;
        return { x: _ - E.width / 2 / D, y: G - E.height / 2 / D, z: D };
      });
    },
    resetZoom: () => {
      $((X) => {
        var _;
        const N = (_ = e.current) == null ? void 0 : _.getBoundingClientRect();
        if (!N) return { ...X, z: 1 };
        const E = X.x + N.width / 2 / X.z, D = X.y + N.height / 2 / X.z;
        return { x: E - N.width / 2, y: D - N.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var U;
      const X = n.current, N = (U = e.current) == null ? void 0 : U.getBoundingClientRect();
      if (X.length === 0 || !N) return;
      let E = 1 / 0, D = 1 / 0, _ = -1 / 0, G = -1 / 0;
      for (const J of X) {
        const nt = vt(J);
        E = Math.min(E, nt.minX), D = Math.min(D, nt.minY), _ = Math.max(_, nt.maxX), G = Math.max(G, nt.maxY);
      }
      const V = 80, O = Math.min(h, Math.max(
        u,
        Math.min(N.width / (_ - E + V * 2), N.height / (G - D + V * 2))
      ));
      $({
        x: (E + _) / 2 - N.width / 2 / O,
        y: (D + G) / 2 - N.height / 2 / O,
        z: O
      });
    },
    autoLayout: () => zi(n.current, g, () => C("자동 배치 완료")),
    exportSvg: I,
    exportPng: () => Mi(I),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: r.current }),
    loadSnapshot: (X) => Ci(X, {
      controlled: x,
      past: m,
      future: l,
      setLocalShapes: k,
      setCamera: $,
      selectNow: y,
      setEditingId: Y
    })
  }), [
    T,
    I,
    g,
    L,
    o,
    h,
    u,
    b,
    f,
    v,
    y,
    $,
    Y,
    k,
    p,
    M,
    C,
    w,
    x
  ]);
}
function Pi(t) {
  return t.altKey || !t.ctrlKey && !t.metaKey ? null : t.code === "KeyZ" ? t.shiftKey ? "redo" : "undo" : t.code === "KeyY" ? "redo" : null;
}
function Ni(t) {
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
function Ii({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: r,
  editingIdRef: i,
  toolRef: c,
  past: a,
  future: s,
  textualTypes: d,
  setIsSpaceDown: m,
  setEditingId: l,
  setShapes: x,
  setAnnouncement: o,
  commit: u,
  deleteSelection: h,
  selectNow: f,
  onDirty: p,
  onToolChange: b,
  createId: g
}) {
  const y = ut((v, w) => {
    const M = r.current;
    M.size !== 0 && u((k) => k.map(($) => {
      var Y;
      return M.has($.id) ? {
        ...$,
        x: $.x + v,
        y: $.y + w,
        points: (Y = $.points) == null ? void 0 : Y.map(([C, L]) => [C + v, L + w])
      } : $;
    }));
  }, [u, r]);
  Nt(() => {
    const v = ($) => {
      const Y = $;
      return !!Y && (Y.tagName === "INPUT" || Y.tagName === "TEXTAREA" || Y.isContentEditable);
    }, w = ($) => $ instanceof Element && !!$.closest("input, select, button, textarea, option, label, [data-canvas-control]"), M = ($) => {
      var D, _, G, V;
      const Y = t.current, C = document.activeElement, L = $.target instanceof Node && !!(Y != null && Y.contains($.target)), T = !!Y && (C === Y || Y.contains(C));
      if (!L && !T || w($.target)) return;
      if ($.code === "Space" && !v($.target)) {
        m(!0), $.preventDefault();
        return;
      }
      if (v($.target)) {
        if ($.key === "Escape")
          $.preventDefault(), l(null), (D = e.current) == null || D.blur(), (_ = t.current) == null || _.focus();
        else if (($.key === "Delete" || $.key === "Backspace") && !i.current) {
          const O = r.current;
          h(O) && $.preventDefault();
        }
        return;
      }
      const I = r.current, X = Pi($);
      if (X) {
        if ($.preventDefault(), X === "redo") {
          const O = s.current.pop();
          O && (a.current.push(n.current), x(O), p(), o("다시 실행"));
        } else {
          const O = a.current.pop();
          O && (s.current.push(n.current), x(O), p(), o("실행 취소"));
        }
        f(/* @__PURE__ */ new Set());
        return;
      }
      const N = $.metaKey || $.ctrlKey;
      if (N && $.key.toLowerCase() === "g") {
        if ($.preventDefault(), $.shiftKey)
          I.size > 0 && (u((O) => O.map((U) => I.has(U.id) ? { ...U, groupId: void 0 } : U)), o("그룹 해제됨"));
        else if (I.size > 1) {
          const O = g("g");
          u((U) => U.map((J) => I.has(J.id) ? { ...J, groupId: O } : J)), o(`${I.size}개 그룹화됨`);
        }
        return;
      }
      if (N && $.key.toLowerCase() === "a") {
        $.preventDefault(), f(new Set(n.current.map((O) => O.id))), o(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if ($.key === "Delete" || $.key === "Backspace") {
        h(I) && $.preventDefault();
        return;
      }
      if ($.key.startsWith("Arrow")) {
        $.preventDefault();
        const O = $.shiftKey ? 10 : 1;
        $.key === "ArrowLeft" && y(-O, 0), $.key === "ArrowRight" && y(O, 0), $.key === "ArrowUp" && y(0, -O), $.key === "ArrowDown" && y(0, O);
        return;
      }
      if ($.key === "Tab" && n.current.length > 0) {
        $.preventDefault();
        const O = n.current, U = O.findIndex((mt) => I.has(mt.id)), J = $.shiftKey ? U <= 0 ? O.length - 1 : U - 1 : U === -1 || U === O.length - 1 ? 0 : U + 1, nt = O[J];
        f(/* @__PURE__ */ new Set([nt.id])), o(`${nt.type} 선택됨: ${ke(nt) || "내용 없음"}`);
        return;
      }
      if ($.key === "Enter" && I.size === 1) {
        const O = n.current.find((U) => I.has(U.id));
        O && d.includes(O.type) && ($.preventDefault(), l(O.id));
        return;
      }
      if ($.key === "Escape") {
        if (i.current) {
          $.preventDefault(), l(null), (G = e.current) == null || G.blur(), (V = t.current) == null || V.focus(), b("select");
          return;
        }
        f(/* @__PURE__ */ new Set()), b("select");
        return;
      }
      const E = Ni($);
      E && ($.preventDefault(), c.current = E, b(E));
    }, k = ($) => {
      const Y = t.current;
      !Y || !(document.activeElement === Y || Y.contains(document.activeElement)) || $.code === "Space" && m(!1);
    };
    return window.addEventListener("keydown", M), window.addEventListener("keyup", k), () => {
      window.removeEventListener("keydown", M), window.removeEventListener("keyup", k);
    };
  }, [
    u,
    t,
    g,
    h,
    i,
    e,
    s,
    y,
    p,
    b,
    a,
    f,
    r,
    o,
    l,
    m,
    x,
    n,
    d,
    c
  ]);
}
function Fe(t) {
  return t.pointerType === "pen";
}
function Ei() {
  return typeof navigator < "u" && navigator.maxTouchPoints > 0 ? !0 : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(any-pointer: coarse)").matches;
}
function Li(t, e) {
  return e && Fe(t);
}
function Di(t, e) {
  return !t || Fe(e);
}
function Qe(t, e) {
  return [(t[0] - e.x) * e.z, (t[1] - e.y) * e.z];
}
function Bn(t, e, n) {
  const r = Math.max(n, 0.1), i = 0.05 / r, c = 4 / r;
  let a = t[t.length - 1];
  for (const s of e) {
    if (!a) {
      t.push(s), a = s;
      continue;
    }
    const d = s[0] - a[0], m = s[1] - a[1], l = Math.hypot(d, m);
    if (l < i) continue;
    const x = Math.max(1, Math.ceil(l / c)), o = Math.min(x, se.maxDrawPoints - t.length);
    if (o <= 0) return;
    for (let u = 1; u <= o; u++) {
      const h = [
        a[0] + d * (u / x),
        a[1] + m * (u / x)
      ];
      t.push(h);
    }
    a = t[t.length - 1];
  }
}
function Ti(t) {
  const e = (t.points ?? []).map(([a, s]) => [a, s]);
  if (e.length === 0) return t;
  let n = e[0][0], r = e[0][1], i = n, c = r;
  for (const [a, s] of e)
    n = Math.min(n, a), r = Math.min(r, s), i = Math.max(i, a), c = Math.max(c, s);
  return { ...t, points: e, x: n, y: r, w: i - n, h: c - r };
}
function _n(t, e, n) {
  if (e.type !== "draw") return;
  const r = e.points ?? [];
  if (r.length === 0) return;
  const i = e.strokeWidth ?? 3, c = e.drawMode ?? "pen", a = e.color ? dt[e.color].border : "#2563eb";
  if (t.save(), t.globalAlpha = c === "highlighter" ? 0.35 : 1, t.fillStyle = a, r.length === 1) {
    const [x, o] = Qe(r[0], n);
    t.beginPath(), t.arc(x, o, Math.max(fr(i, c) * n.z, 0.5), 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  const s = typeof Path2D == "function" ? xr(r, i, c) : "";
  if (s && typeof Path2D == "function") {
    t.scale(n.z, n.z), t.translate(-n.x, -n.y), t.fill(new Path2D(s)), t.restore();
    return;
  }
  const d = hr(r, i, c);
  if (d.length === 0) {
    t.restore();
    return;
  }
  t.beginPath();
  const [m, l] = Qe([d[0][0], d[0][1]], n);
  t.moveTo(m, l);
  for (let x = 1; x < d.length; x++) {
    const [o, u] = Qe([d[x][0], d[x][1]], n);
    t.lineTo(o, u);
  }
  t.closePath(), t.fill(), t.restore();
}
function Fi(t, e, n, r) {
  const i = Math.max(1, Math.min(2, r)), c = Math.max(1, Math.round(e * i)), a = Math.max(1, Math.round(n * i));
  return t.width !== c && (t.width = c), t.height !== a && (t.height = a), t.style.width = `${e}px`, t.style.height = `${n}px`, i;
}
function Ae(t, e, n, r, i = 1) {
  var s;
  if (!t) return;
  const c = (s = t.getContext) == null ? void 0 : s.call(t, "2d");
  if (!c) return;
  const a = Math.max(1, Math.min(2, i || 1));
  c.setTransform(1, 0, 0, 1, 0, 0), c.clearRect(0, 0, t.width, t.height), c.setTransform(a, 0, 0, a, 0, 0);
  for (const d of e) _n(c, d, r);
  n && _n(c, n, r), c.setTransform(1, 0, 0, 1, 0, 0);
}
const Ai = 0.1, Wi = 4, fn = 14, Oi = 4, Kn = ["note", "card", "rect", "ellipse", "text", "image"], Hi = 400;
function Ri({
  drawing: t,
  containerRef: e,
  editorRef: n,
  pointers: r,
  interactionRef: i,
  editingIdRef: c,
  cameraRef: a,
  shapesRef: s,
  toolRef: d,
  penModeRef: m,
  activeColorRef: l,
  drawColorRef: x,
  drawStrokeWidth: o,
  camera: u,
  shapes: h,
  selected: f,
  isSpaceDown: p,
  textualTypes: b,
  setShapes: g,
  setEditingId: y,
  applyInteraction: v,
  selectNow: w,
  beginHistory: M,
  cancelHistory: k,
  commit: $,
  onToolChange: Y,
  expandToGroups: C,
  toPage: L,
  createId: T,
  liveStrokeCanvasRef: I,
  activeDrawRef: X,
  pendingDrawsRef: N,
  setIsPenMode: E
}) {
  const D = T, _ = Q(null), G = (P, W) => {
    var Et;
    const H = ((Et = e.current) == null ? void 0 : Et.dataset.canvasActiveTool) === "text" ? "text" : d.current;
    if (H !== "note" && H !== "text") return;
    const tt = L(P, W), gt = H === "note" ? { id: D(), type: "note", x: tt.x - 90, y: tt.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: D(), type: "text", x: tt.x, y: tt.y - 22, w: 220, h: 44, text: "" };
    $((St) => [...St, gt]), w(/* @__PURE__ */ new Set([gt.id])), y(gt.id), Y("select");
  };
  Nt(() => {
    const P = (H) => {
      var tt;
      (tt = e.current) != null && tt.contains(H.target) && (H.target instanceof Element && H.target.closest('[role="textbox"], [data-canvas-inspector]') || G(H.clientX, H.clientY));
    }, W = (H) => {
      var tt;
      m.current && (H.preventDefault(), (tt = window.getSelection()) == null || tt.removeAllRanges());
    };
    return window.addEventListener("click", P, !0), document.addEventListener("selectstart", W, !0), () => {
      window.removeEventListener("click", P, !0), document.removeEventListener("selectstart", W, !0);
    };
  }, [e, m]);
  const V = () => {
    const [P, W] = [...r.current.values()], H = a.current;
    v({
      kind: "pinch",
      startDist: Math.hypot(W.x - P.x, W.y - P.y) || 1,
      startZoom: H.z,
      startMidX: (P.x + W.x) / 2,
      startMidY: (P.y + W.y) / 2,
      camX: H.x,
      camY: H.y
    });
  };
  return { onPointerDown: (P) => {
    var ft, wt, ht;
    let W = d.current;
    const H = P.target instanceof Element ? P.target : P.currentTarget, tt = P.currentTarget.hasPointerCapture(P.pointerId) || H.hasPointerCapture(P.pointerId);
    if (!m.current && Li(P, tt || Ei()) && (k(), r.current.clear(), X.current = null, Ae(
      I.current,
      N.current,
      null,
      a.current,
      window.devicePixelRatio || 1
    ), v({ kind: "none" }), W !== "draw" && W !== "highlighter" && W !== "eraser" && (W = "draw", d.current = "draw", Y("draw")), E(!0)), m.current && P.pointerType === "touch") {
      if (P.cancelable && P.preventDefault(), i.current.kind !== "none") return;
      r.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
      try {
        P.currentTarget.setPointerCapture(P.pointerId);
      } catch {
      }
      r.current.size === 2 && V();
      return;
    }
    if (!Di(m.current, P)) {
      P.cancelable && P.preventDefault();
      return;
    }
    Fe(P) && i.current.kind === "drawing" && t.finish(), m.current && Fe(P) && (i.current.kind === "none" || i.current.kind === "pinch") && (r.current.clear(), v({ kind: "none" }));
    const gt = P.target instanceof Element ? P.target : null, Et = !!(gt != null && gt.closest("[data-canvas-editor]")) && c.current !== null;
    r.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
    const St = i.current;
    if (St.kind === "drawing" && St.pointerId !== P.pointerId) {
      r.current.delete(P.pointerId);
      return;
    }
    !Et && P.cancelable && P.preventDefault();
    const Lt = P.currentTarget;
    try {
      Lt.setPointerCapture(P.pointerId);
    } catch {
    }
    if (r.current.size === 2) {
      V();
      return;
    }
    if (r.current.size > 2) return;
    if (P.button === 1 || p || W === "hand" || P.button === 0 && W === "select" && P.altKey) {
      v({ kind: "pan", startX: P.clientX, startY: P.clientY, camX: u.x, camY: u.y });
      return;
    }
    if (P.button !== 0) return;
    const Z = L(P.clientX, P.clientY);
    if (Et || (y(null), (ft = n.current) == null || ft.blur(), (wt = e.current) == null || wt.focus()), W === "draw" || W === "highlighter") {
      const rt = {
        id: D(),
        type: "draw",
        x: Z.x,
        y: Z.y,
        w: 0,
        h: 0,
        points: [[Z.x, Z.y]],
        color: x.current,
        strokeWidth: o,
        drawMode: W === "highlighter" ? "highlighter" : "pen"
      };
      t.start(rt, P);
      return;
    }
    if (W === "arrow" || W === "frame" || Ur.includes(W)) {
      const rt = W, ct = W === "arrow" ? { id: D(), type: "arrow", x: Z.x, y: Z.y, w: 0, h: 0, color: l.current } : W === "frame" ? { id: D(), type: "frame", x: Z.x, y: Z.y, w: 0, h: 0, text: "프레임" } : { id: D(), type: rt, x: Z.x, y: Z.y, w: 0, h: 0, color: l.current, text: "" };
      M(), g((Wt) => [...Wt, ct]), v({ kind: "creating", id: ct.id, startX: Z.x, startY: Z.y });
      return;
    }
    if (W === "note" || W === "text") return;
    if (W === "eraser") {
      M(), g((rt) => Ho(rt, Z.x, Z.y, fn, u.z)), v({ kind: "erasing", lastX: Z.x, lastY: Z.y });
      return;
    }
    const ot = new Map(h.map((rt) => [rt.id, rt])), Xt = c.current ? h.find((rt) => rt.id === c.current) : void 0, yt = Et && Xt ? Xt : [...h].reverse().find((rt) => rn(rt, Z.x, Z.y, u.z, ot, h));
    if (!yt)
      _.current = null;
    else {
      const rt = Date.now(), ct = !P.shiftKey && b.includes(yt.type) && ((ht = _.current) == null ? void 0 : ht.id) === yt.id && rt - _.current.time < Hi, Wt = ct ? yt.id : void 0;
      _.current = ct ? null : { id: yt.id, time: rt };
      const jt = P.shiftKey ? new Set(f).add(yt.id) : f.has(yt.id) ? f : /* @__PURE__ */ new Set([yt.id]), Ot = C(jt);
      w(Ot);
      const z = /* @__PURE__ */ new Map();
      for (const A of h) Ot.has(A.id) && z.set(A.id, A);
      for (const A of h) {
        if (A.type !== "frame" || !Ot.has(A.id)) continue;
        const q = vt(A);
        for (const it of h) {
          if (it.id === A.id || z.has(it.id)) continue;
          const lt = At(it);
          lt.x >= q.minX && lt.x <= q.maxX && lt.y >= q.minY && lt.y <= q.maxY && z.set(it.id, it);
        }
      }
      M(), v({ kind: "move", startX: Z.x, startY: Z.y, origin: z, editOnReleaseId: Wt });
      return;
    }
    P.shiftKey || w(/* @__PURE__ */ new Set()), v({
      kind: "marquee",
      startX: Z.x,
      startY: Z.y,
      curX: Z.x,
      curY: Z.y,
      screenStartX: P.clientX,
      screenStartY: P.clientY
    });
  }, onResizeHandleDown: (P, W, H) => {
    P.stopPropagation(), r.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), M(), v({ kind: "resize", id: W.id, handle: H, start: W });
  }, onRotateHandleDown: (P, W) => {
    P.stopPropagation(), r.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
    const H = L(P.clientX, P.clientY), tt = At(W);
    M(), v({
      kind: "rotate",
      id: W.id,
      startAngle: Math.atan2(H.y - tt.y, H.x - tt.x),
      startRotation: W.rotation ?? 0
    });
  }, onConnectHandleDown: (P, W) => {
    P.stopPropagation(), r.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
    const H = L(P.clientX, P.clientY);
    v({ kind: "connect", fromId: W.id, toX: H.x, toY: H.y, hoverId: null });
  }, onBendHandleDown: (P, W) => {
    P.stopPropagation(), r.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), M(), v({ kind: "bend", id: W.id });
  }, onOrthogonalSegmentHandleDown: (P, W, H) => {
    P.stopPropagation(), r.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), M(), v({ kind: "orthogonal-segment", id: W.id, segmentIndex: H });
  }, onArrowEndpointDown: (P, W, H) => {
    P.stopPropagation(), r.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), M(), v({ kind: "arrow-endpoint", id: W.id, endpoint: H, hoverId: null });
  } };
}
function Bi({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: r,
  shapesRef: i,
  setShapes: c,
  setEditingId: a,
  setEraserPos: s,
  setGuides: d,
  setAnnouncement: m,
  applyInteraction: l,
  selectNow: x,
  endHistory: o,
  commit: u,
  onToolChange: h,
  createId: f,
  drawing: p
}) {
  const b = f;
  Nt(() => {
    const g = (y) => {
      var w, M;
      if (!t.current.delete(y.pointerId)) return;
      try {
        (M = (w = y.target) == null ? void 0 : w.releasePointerCapture) == null || M.call(w, y.pointerId);
      } catch {
      }
      const v = e.current;
      if (v.kind !== "none") {
        if (v.kind === "pinch") {
          t.current.size < 2 && l({ kind: "none" });
          return;
        }
        if (d([]), v.kind === "erasing") {
          if (y.type === "pointerup") {
            const k = r(y.clientX, y.clientY);
            c(($) => un(
              $,
              { x: v.lastX, y: v.lastY },
              k,
              fn,
              n.current.z
            ));
          }
          s(null), o(), l({ kind: "none" });
          return;
        }
        if (v.kind === "connect") {
          const $ = i.current.find((X) => X.id === v.fromId);
          if (l({ kind: "none" }), !$) return;
          const Y = { x: v.toX, y: v.toY }, C = At($);
          if (!v.hoverId && Math.hypot(Y.x - C.x, Y.y - C.y) < 30) return;
          const L = [];
          let T = v.hoverId;
          if (!T) {
            const X = $.type === "note" ? 180 : 200, N = $.type === "note" ? 180 : 120, E = {
              ...$,
              id: b(),
              x: Y.x - X / 2,
              y: Y.y - N / 2,
              w: X,
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
            L.push(E), T = E.id;
          }
          const I = {
            id: b(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: $.id,
            toId: T,
            text: ""
          };
          L.push(I), u((X) => [...X, ...L]), x(/* @__PURE__ */ new Set([I.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => a(I.id)) : a(I.id), m("연결 생성됨");
          return;
        }
        if (v.kind === "bend") {
          o(), l({ kind: "none" });
          return;
        }
        if (v.kind === "drawing") {
          p.finish(y);
          return;
        }
        if (v.kind === "creating") {
          c((k) => k.map(($) => {
            if ($.id !== v.id) return $;
            const Y = Math.abs($.w) < 4 && Math.abs($.h) < 4 ? {
              ...$,
              w: $.type === "arrow" ? 200 : $.type === "frame" ? 480 : 180,
              h: $.type === "arrow" ? 0 : $.type === "frame" ? 320 : 120
            } : $;
            if (Y.type === "arrow") return Y;
            const C = Kt(Y);
            return { ...Y, x: C.minX, y: C.minY, w: C.maxX - C.minX, h: C.maxY - C.minY };
          })), o(), x(/* @__PURE__ */ new Set([v.id])), h("select"), l({ kind: "none" });
          return;
        }
        if ((v.kind === "move" || v.kind === "resize" || v.kind === "rotate" || v.kind === "orthogonal-segment" || v.kind === "arrow-endpoint") && o(), v.kind === "move" && v.editOnReleaseId && y.type === "pointerup") {
          const k = r(y.clientX, y.clientY);
          Math.hypot(k.x - v.startX, k.y - v.startY) * n.current.z <= Oi && a(v.editOnReleaseId);
        }
        l({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", g), window.addEventListener("pointercancel", g), () => {
      window.removeEventListener("pointerup", g), window.removeEventListener("pointercancel", g);
    };
  }, [
    l,
    n,
    f,
    p,
    o,
    e,
    h,
    t,
    x,
    m,
    a,
    d,
    s,
    c,
    i,
    r,
    u
  ]);
}
function hn() {
  return typeof navigator > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
function $r(t) {
  let e = [];
  if (!hn() && typeof t.getCoalescedEvents == "function")
    try {
      e = t.getCoalescedEvents();
    } catch {
    }
  return [...e, t].filter((n) => Number.isFinite(n.clientX) && Number.isFinite(n.clientY));
}
function _i({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: r,
  shapesRef: i,
  setCamera: c,
  setShapes: a,
  setEraserPos: s,
  setGuides: d,
  applyInteraction: m,
  selectNow: l,
  expandToGroups: x,
  toPage: o,
  drawing: u
}) {
  Nt(() => {
    const h = (f) => {
      var y, v;
      if (!e.current.has(f.pointerId)) return;
      e.current.set(f.pointerId, { x: f.clientX, y: f.clientY });
      const p = n.current;
      if (p.kind === "none") return;
      const b = r.current;
      if (p.kind === "pinch") {
        if (e.current.size < 2) return;
        const [w, M] = [...e.current.values()], k = Math.hypot(M.x - w.x, M.y - w.y) || 1, $ = (w.x + M.x) / 2, Y = (w.y + M.y) / 2, C = (y = t.current) == null ? void 0 : y.getBoundingClientRect();
        if (!C) return;
        const L = Math.min(Wi, Math.max(Ai, p.startZoom * (k / p.startDist))), T = p.camX + (p.startMidX - C.left) / p.startZoom, I = p.camY + (p.startMidY - C.top) / p.startZoom;
        c({ x: T - ($ - C.left) / L, y: I - (Y - C.top) / L, z: L });
        return;
      }
      if (p.kind === "pan") {
        c({
          x: p.camX - (f.clientX - p.startX) / b.z,
          y: p.camY - (f.clientY - p.startY) / b.z,
          z: b.z
        });
        return;
      }
      const g = o(f.clientX, f.clientY);
      if (p.kind === "erasing") {
        const w = $r(f).map(($) => o($.clientX, $.clientY)), M = [{ x: p.lastX, y: p.lastY }, ...w];
        a(($) => {
          let Y = $;
          for (let C = 1; C < M.length; C++)
            Y = un(Y, M[C - 1], M[C], fn, b.z);
          return Y;
        });
        const k = w.at(-1);
        k && (s(k), m({ kind: "erasing", lastX: k.x, lastY: k.y }));
        return;
      }
      if (p.kind === "connect") {
        const w = i.current, M = new Map(w.map(($) => [$.id, $])), k = [...w].reverse().find(($) => $.id !== p.fromId && Kn.includes($.type) && rn($, g.x, g.y, b.z, M, w));
        m({ ...p, toX: g.x, toY: g.y, hoverId: (k == null ? void 0 : k.id) ?? null });
        return;
      }
      if (p.kind === "bend") {
        const w = i.current, M = w.find((X) => X.id === p.id);
        if (!M) return;
        const k = Ft(M, new Map(w.map((X) => [X.id, X])), w), $ = k.end.x - k.start.x, Y = k.end.y - k.start.y, C = Math.hypot($, Y) || 1, L = (k.start.x + k.end.x) / 2, T = (k.start.y + k.end.y) / 2, I = (g.x - L) * (-Y / C) + (g.y - T) * ($ / C);
        a((X) => X.map((N) => N.id === p.id ? { ...N, bend: I } : N));
        return;
      }
      if (p.kind === "orthogonal-segment") {
        const w = i.current, M = w.find((I) => I.id === p.id);
        if (!M) return;
        const k = Ft(M, new Map(w.map((I) => [I.id, I])), w), $ = k.routing === "orthogonal" ? k.pathPoints : void 0;
        if (!$ || $.length < 2) return;
        const Y = $[p.segmentIndex], C = $[p.segmentIndex + 1];
        if (!Y || !C) return;
        const L = Y.x === C.x ? g.x : g.y, T = po($, p.segmentIndex, L);
        a((I) => I.map((X) => X.id === p.id ? { ...X, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: T.slice(1, -1).map((N) => ({ x: N.x, y: N.y })) } : X));
        return;
      }
      if (p.kind === "arrow-endpoint") {
        const w = i.current, M = w.find((T) => T.id === p.id);
        if (!M) return;
        const k = new Map(w.map((T) => [T.id, T])), $ = Ft(M, k, w), Y = p.endpoint === "start" ? $.end : $.start, C = [...w].reverse().find((T) => T.id !== M.id && Kn.includes(T.type) && rn(T, g.x, g.y, b.z, k, w)), L = C ? ce(C, Y.x, Y.y) : { x: g.x, y: g.y };
        m({ ...p, hoverId: (C == null ? void 0 : C.id) ?? null }), a((T) => T.map((I) => {
          if (I.id !== M.id) return I;
          const X = p.endpoint === "start" ? L : Y, N = p.endpoint === "end" ? L : Y;
          return {
            ...I,
            x: X.x,
            y: X.y,
            w: N.x - X.x,
            h: N.y - X.y,
            fromId: p.endpoint === "start" ? C == null ? void 0 : C.id : I.fromId,
            toId: p.endpoint === "end" ? C == null ? void 0 : C.id : I.toId
          };
        }));
        return;
      }
      if (p.kind === "marquee") {
        m({ ...p, curX: g.x, curY: g.y });
        const w = Math.min(p.startX, g.x), M = Math.max(p.startX, g.x), k = Math.min(p.startY, g.y), $ = Math.max(p.startY, g.y), Y = Math.min(p.screenStartX, f.clientX), C = Math.max(p.screenStartX, f.clientX), L = Math.min(p.screenStartY, f.clientY), T = Math.max(p.screenStartY, f.clientY), I = /* @__PURE__ */ new Map();
        (v = t.current) == null || v.querySelectorAll("[data-canvas-shape-id]").forEach((N) => {
          const E = N.dataset.canvasShapeId;
          E && I.set(E, N.getBoundingClientRect());
        });
        const X = i.current.filter((N) => {
          const E = I.get(N.id);
          if (E)
            return E.right >= Y && E.left <= C && E.bottom >= L && E.top <= T;
          const D = vt(N);
          return D.maxX >= w && D.minX <= M && D.maxY >= k && D.minY <= $;
        }).map((N) => N.id);
        l(x(new Set(X)));
        return;
      }
      if (p.kind === "move") {
        let w = g.x - p.startX, M = g.y - p.startY;
        const k = p.origin, $ = (() => {
          let L = 1 / 0, T = 1 / 0, I = -1 / 0, X = -1 / 0;
          return k.forEach((N) => {
            const E = vt({ ...N, x: N.x + w, y: N.y + M });
            L = Math.min(L, E.minX), T = Math.min(T, E.minY), I = Math.max(I, E.maxX), X = Math.max(X, E.maxY);
          }), { minX: L, minY: T, maxX: I, maxY: X };
        })(), Y = i.current.filter((L) => !k.has(L.id)), C = Ro($, Y, b.z);
        w += C.dx, M += C.dy, d(C.guides), a((L) => L.map((T) => {
          var X;
          const I = k.get(T.id);
          return I ? {
            ...T,
            x: I.x + w,
            y: I.y + M,
            points: (X = I.points) == null ? void 0 : X.map(([N, E]) => [N + w, E + M]),
            ...I.type === "arrow" && I.orthogonalWaypoints ? { orthogonalWaypoints: I.orthogonalWaypoints.map((N) => ({ x: N.x + w, y: N.y + M })) } : {}
          } : T;
        }));
        return;
      }
      if (p.kind === "drawing") {
        if (p.pointerId !== f.pointerId) return;
        u.move(f);
        return;
      }
      if (p.kind === "creating") {
        a((w) => w.map((M) => M.id === p.id ? { ...M, w: g.x - p.startX, h: g.y - p.startY } : M));
        return;
      }
      if (p.kind === "rotate") {
        const w = i.current.find((Y) => Y.id === p.id);
        if (!w) return;
        const M = At(w), k = Math.atan2(g.y - M.y, g.x - M.x);
        let $ = p.startRotation + (k - p.startAngle);
        f.shiftKey && ($ = Math.round($ / (Math.PI / 12)) * (Math.PI / 12)), a((Y) => Y.map((C) => C.id === p.id ? { ...C, rotation: $ } : C));
        return;
      }
      if (p.kind === "resize") {
        const { start: w, handle: M } = p, k = De(w, g.x, g.y);
        a(($) => $.map((Y) => {
          if (Y.id !== w.id) return Y;
          let { x: C, y: L, w: T, h: I } = w;
          if (M.includes("e") && (T = Math.max(20, k.x - w.x)), M.includes("s") && (I = Math.max(20, k.y - w.y)), M.includes("w")) {
            const X = w.x + w.w;
            C = Math.min(k.x, X - 20), T = X - C;
          }
          if (M.includes("n")) {
            const X = w.y + w.h;
            L = Math.min(k.y, X - 20), I = X - L;
          }
          return { ...Y, x: C, y: L, w: T, h: I, manualSize: Y.type === "text" ? !0 : Y.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", h), () => {
      window.removeEventListener("pointermove", h);
    };
  }, [
    m,
    r,
    t,
    u,
    x,
    n,
    e,
    l,
    i,
    o
  ]);
}
function Ki(t) {
  _i(t), Bi(t);
}
function ji(t) {
  const e = Q(t);
  e.current = t;
  const n = Q([]), r = Q(null), i = Q(null), c = Q(null), a = Tt(() => {
    const s = () => {
      const o = e.current;
      Ae(
        o.liveStrokeCanvasRef.current,
        o.pendingDrawsRef.current,
        o.activeDrawRef.current,
        o.cameraRef.current,
        window.devicePixelRatio || 1
      );
    }, d = () => {
      r.current !== null && cancelAnimationFrame(r.current), r.current = null;
    }, m = () => {
      var f;
      const o = e.current, u = o.activeDrawRef.current, h = n.current.splice(0);
      (u == null ? void 0 : u.id) === ((f = c.current) == null ? void 0 : f.shapeId) && (u != null && u.points) && Bn(u.points, h, o.cameraRef.current.z);
    }, l = () => {
      i.current = null;
      const o = e.current, u = o.pendingDrawsRef.current.filter((h) => !o.queuedDrawIdsRef.current.has(h.id));
      if (u.length !== 0) {
        for (const h of u) o.queuedDrawIdsRef.current.add(h.id);
        o.commitDrawBatch(u);
      }
    };
    return {
      start(o, u) {
        d(), n.current = [], c.current = { shapeId: o.id, pointerId: u.pointerId, raw: !1 }, e.current.activeDrawRef.current = o, e.current.applyInteraction({ kind: "drawing", id: o.id, pointerId: u.pointerId }), s();
      },
      move(o) {
        const u = e.current, h = c.current, f = u.activeDrawRef.current;
        if (!(!h || h.pointerId !== o.pointerId || (f == null ? void 0 : f.id) !== h.shapeId || !f.points || u.interactionRef.current.kind !== "drawing")) {
          if (o.type === "pointerrawupdate") {
            if (hn()) return;
            h.raw = !0;
          } else if (h.raw)
            return;
          if (o.shiftKey) {
            d(), n.current = [];
            const p = u.toPage(o.clientX, o.clientY);
            f.points = [f.points[0], [p.x, p.y]], s();
            return;
          }
          for (const p of $r(o)) {
            const b = u.toPage(p.clientX, p.clientY);
            n.current.push([b.x, b.y]);
          }
          r.current === null && (r.current = requestAnimationFrame(() => {
            r.current = null, m(), s();
          }));
        }
      },
      finish: (o, u = !1) => {
        const h = c.current;
        if (o && (h == null ? void 0 : h.pointerId) !== o.pointerId) return;
        const f = e.current;
        d(), m();
        const p = f.activeDrawRef.current;
        if (h && (p == null ? void 0 : p.id) === h.shapeId && p.points) {
          if ((o == null ? void 0 : o.type) === "pointerup" && Number.isFinite(o.clientX) && Number.isFinite(o.clientY)) {
            const b = f.toPage(o.clientX, o.clientY);
            Bn(p.points, [[b.x, b.y]], f.cameraRef.current.z);
          }
          f.pendingDrawsRef.current.push(Ti(p)), f.activeDrawRef.current = null, f.pointers.current.delete(h.pointerId), f.interactionRef.current.kind === "drawing" && f.applyInteraction({ kind: "none" }), s();
        }
        c.current = null, u ? (i.current !== null && cancelAnimationFrame(i.current), l()) : i.current === null && (i.current = requestAnimationFrame(l));
      },
      cancel() {
        var h;
        d(), n.current = [];
        const o = e.current, u = c.current;
        u && ((h = o.activeDrawRef.current) == null ? void 0 : h.id) === u.shapeId && (o.activeDrawRef.current = null, o.pointers.current.delete(u.pointerId), o.interactionRef.current.kind === "drawing" && o.applyInteraction({ kind: "none" }), s()), c.current = null;
      }
    };
  }, []);
  return Nt(() => {
    const s = t.containerRef.current, d = (o) => {
      o.target === s && e.current.pointers.current.has(o.pointerId) && !(s != null && s.hasPointerCapture(o.pointerId)) && a.finish(o);
    }, m = () => {
      a.finish(void 0, !0);
      const o = e.current;
      o.interactionRef.current.kind === "pinch" && o.applyInteraction({ kind: "none" }), o.interactionRef.current.kind === "none" && o.pointers.current.clear();
    }, l = () => {
      document.visibilityState === "hidden" && m();
    }, x = (o) => {
      o.key === "Escape" && c.current && o.target instanceof Node && (s != null && s.contains(o.target)) && (o.preventDefault(), a.cancel());
    };
    return window.addEventListener("pointerrawupdate", a.move), window.addEventListener("blur", m), window.addEventListener("keydown", x), document.addEventListener("visibilitychange", l), s == null || s.addEventListener("lostpointercapture", d), () => {
      window.removeEventListener("pointerrawupdate", a.move), window.removeEventListener("blur", m), window.removeEventListener("keydown", x), document.removeEventListener("visibilitychange", l), s == null || s.removeEventListener("lostpointercapture", d), r.current !== null && cancelAnimationFrame(r.current), i.current !== null && cancelAnimationFrame(i.current), r.current = null, i.current = null, n.current = [], c.current = null;
    };
  }, [a, t.containerRef]), a;
}
function Ui({ containerRef: t, penModeRef: e, toolRef: n }) {
  Nt(() => {
    const r = t.current;
    if (!r) return;
    const i = r.ownerDocument, c = i.defaultView, a = /* @__PURE__ */ new Set(), s = (l) => {
      const x = Array.from(l.changedTouches), o = l.type !== "touchstart" && x.some((g) => a.has(g.identifier));
      if (l.type !== "touchstart")
        for (const g of x) a.delete(g.identifier);
      if (l.type === "touchcancel") return;
      const u = l.target instanceof Element ? l.target : null;
      if (u != null && u.closest("button, input, textarea, select, a, [data-canvas-inspector], [data-canvas-pen-palette]")) return;
      const h = n.current, f = h === "draw" || h === "highlighter" || h === "eraser", p = x.some((g) => g.touchType === "stylus"), b = l.type === "touchstart" && hn() && h !== "note" && h !== "text" && !(u != null && u.closest('[contenteditable="true"]')) && x.some((g) => {
        const y = g.radiusX || 0;
        return g.clientX - y < 10 || g.clientX + y > ((c == null ? void 0 : c.innerWidth) ?? 1 / 0) - 10;
      });
      if (!(!o && !e.current && !f && !p && !b)) {
        if (l.type === "touchstart")
          for (const g of x)
            Number.isFinite(g.identifier) && a.add(g.identifier);
        l.cancelable && l.preventDefault();
      }
    }, d = (l) => {
      const x = l.target instanceof Node && r.contains(l.target), o = i.activeElement && r.contains(i.activeElement);
      (x || o) && l.cancelable && l.preventDefault();
    }, m = { passive: !1, capture: !0 };
    for (const l of ["touchstart", "touchend", "touchcancel"])
      r.addEventListener(l, s, m);
    for (const l of ["gesturestart", "gesturechange", "gestureend"])
      i.addEventListener(l, d, m);
    return () => {
      for (const l of ["touchstart", "touchend", "touchcancel"])
        r.removeEventListener(l, s, !0);
      for (const l of ["gesturestart", "gesturechange", "gestureend"])
        i.removeEventListener(l, d, !0);
    };
  }, [t, e, n]);
}
function Vi({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: r,
  editingIdRef: i,
  cameraRef: c,
  shapesRef: a,
  toolRef: s,
  penModeRef: d,
  activeColorRef: m,
  drawColorRef: l,
  drawStrokeWidth: x,
  camera: o,
  shapes: u,
  selected: h,
  isSpaceDown: f,
  textualTypes: p,
  setCamera: b,
  setShapes: g,
  setEditingId: y,
  setEraserPos: v,
  setGuides: w,
  setAnnouncement: M,
  applyInteraction: k,
  selectNow: $,
  beginHistory: Y,
  endHistory: C,
  cancelHistory: L,
  commit: T,
  onToolChange: I,
  expandToGroups: X,
  toPage: N,
  createId: E,
  liveStrokeCanvasRef: D,
  activeDrawRef: _,
  pendingDrawsRef: G,
  queuedDrawIdsRef: V,
  commitDrawBatch: O,
  setIsPenMode: U
}) {
  Ui({ containerRef: t, penModeRef: d, toolRef: s });
  const J = ji({
    containerRef: t,
    pointers: n,
    interactionRef: r,
    cameraRef: c,
    toPage: N,
    applyInteraction: k,
    liveStrokeCanvasRef: D,
    activeDrawRef: _,
    pendingDrawsRef: G,
    queuedDrawIdsRef: V,
    commitDrawBatch: O
  }), nt = Ri({
    drawing: J,
    containerRef: t,
    editorRef: e,
    pointers: n,
    interactionRef: r,
    editingIdRef: i,
    cameraRef: c,
    shapesRef: a,
    toolRef: s,
    penModeRef: d,
    activeColorRef: m,
    drawColorRef: l,
    drawStrokeWidth: x,
    camera: o,
    shapes: u,
    selected: h,
    isSpaceDown: f,
    textualTypes: p,
    setShapes: g,
    setEditingId: y,
    applyInteraction: k,
    selectNow: $,
    beginHistory: Y,
    cancelHistory: L,
    commit: T,
    onToolChange: I,
    expandToGroups: X,
    toPage: N,
    createId: E,
    liveStrokeCanvasRef: D,
    activeDrawRef: _,
    pendingDrawsRef: G,
    setIsPenMode: U
  });
  return Ki({
    drawing: J,
    containerRef: t,
    pointers: n,
    interactionRef: r,
    cameraRef: c,
    shapesRef: a,
    setCamera: b,
    setShapes: g,
    setEditingId: y,
    setEraserPos: v,
    setGuides: w,
    setAnnouncement: M,
    applyInteraction: k,
    selectNow: $,
    endHistory: C,
    commit: T,
    onToolChange: I,
    expandToGroups: X,
    toPage: N,
    createId: E
  }), nt;
}
function Gi(t) {
  Yi(t);
  const e = Tt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return Ii({ ...t, toolRef: e }), Vi(t);
}
function qi({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: r,
  zoom: i
}) {
  const c = n || r.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", a = t ? j.gridDark : j.gridLight, s = 40 * i;
  return { cursor: c, gridColor: a, gridSize: s, strokeColorOf: (m) => m.strokeColor ? sr(m) : m.color ? dt[m.color].border : t ? "var(--canvas-slate-200)" : j.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = uo, document.head.appendChild(t);
}
const jn = 0.1, Un = 4, Vn = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function Mr(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Gn(t, e, n) {
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
        return Mr(r);
    }
  });
}
function qn(t, e, n) {
  return t.map((r) => e.has(r.id) && r.type === "draw" ? { ...r, ...n } : r);
}
function Zn(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const na = Hr(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: r,
  activeColor: i,
  defaultActiveColor: c,
  onActiveColorChange: a,
  drawStrokeWidth: s = 4,
  onToolChange: d,
  onDirty: m,
  onZoomChange: l,
  onSelectionChange: x,
  shapes: o,
  onShapesChange: u,
  peerCursors: h,
  onLocalCursor: f,
  renderDiagram: p
}, b) {
  var gn, yn;
  const [g, y] = Bt.useState(s);
  Bt.useEffect(() => y(s), [s]);
  const {
    containerRef: v,
    editorRef: w,
    setLocalShapes: M,
    controlled: k,
    shapes: $,
    setShapes: Y,
    camera: C,
    setCamera: L,
    cameraRef: T,
    selected: I,
    selectedRef: X,
    editingId: N,
    setEditingId: E,
    editingIdRef: D,
    interaction: _,
    interactionRef: G,
    applyInteraction: V,
    isSpaceDown: O,
    setIsSpaceDown: U,
    guides: J,
    setGuides: nt,
    announcement: mt,
    setAnnouncement: kt,
    showInspectorPalette: It,
    setShowInspectorPalette: P,
    eraserPos: W,
    setEraserPos: H,
    isPenMode: tt,
    setIsPenMode: gt,
    penModeRef: Et,
    setActiveColor: St,
    activeColorRef: Lt,
    drawColor: Z,
    setDrawColor: ot,
    drawColorRef: Xt,
    installedFontFamilies: yt,
    pointers: ft,
    past: wt,
    future: ht,
    selectNow: rt,
    commit: ct,
    deleteSelection: Wt,
    beginHistory: jt,
    endHistory: Ot,
    cancelHistory: z,
    toPage: A,
    viewportCentre: q,
    expandToGroups: it,
    toolRef: lt,
    shapesRef: bt,
    liveStrokeCanvasRef: ne,
    activeDrawRef: Ut,
    pendingDrawsRef: Dt,
    queuedDrawIdsRef: xe,
    commitDrawBatch: Re
  } = wi({ boardIdentity: e, tool: r, activeColor: i, defaultActiveColor: c, onActiveColorChange: a, controlledShapes: o, onShapesChange: u, onDirty: m });
  ie(() => {
    const et = ne.current, Yt = v.current;
    if (!et || !Yt) return;
    const xt = () => {
      const ze = Fi(et, Yt.clientWidth, Yt.clientHeight, window.devicePixelRatio || 1), Ce = new Set($.map((le) => le.id));
      Dt.current = Dt.current.filter((le) => !Ce.has(le.id));
      for (const le of Ce) xe.current.delete(le);
      Ae(et, Dt.current, Ut.current, T.current, ze);
    };
    if (xt(), typeof ResizeObserver > "u")
      return window.addEventListener("resize", xt), () => window.removeEventListener("resize", xt);
    const qt = new ResizeObserver(xt);
    return qt.observe(Yt), window.addEventListener("resize", xt), () => {
      qt.disconnect(), window.removeEventListener("resize", xt);
    };
  }, [Ut, C, T, v, ne, Dt, xe, $]);
  const $e = ki({
    containerRef: v,
    shapesRef: bt,
    selectedRef: X,
    commit: ct,
    deleteSelection: Wt,
    selectNow: rt,
    setAnnouncement: kt,
    createId: Zn
  }), {
    inspectorSelection: pe,
    inspectorShape: Me,
    onContainerPointerMove: Be,
    onContainerPointerLeave: _e
  } = bi({
    containerRef: v,
    camera: C,
    setCamera: L,
    minZoom: jn,
    maxZoom: Un,
    shapes: $,
    selected: I,
    editingId: N,
    textualTypes: Vn,
    onZoomChange: l,
    onSelectionChange: x,
    onLocalCursor: f,
    toPage: A
  }), ve = Bt.useCallback((et) => {
    const Yt = new Set(X.current);
    Yt.size !== 0 && ct((xt) => Gn(xt, Yt, et));
  }, [ct, X]), F = Bt.useCallback((et) => {
    y(et), ve(et);
  }, [ve]), K = Bt.useCallback((et) => {
    ot(et);
    const Yt = new Set(
      bt.current.filter((xt) => xt.type === "draw" && X.current.has(xt.id)).map((xt) => xt.id)
    );
    Yt.size > 0 && ct((xt) => qn(xt, Yt, { color: et }));
  }, [ct, X, ot, bt]), {
    onPointerDown: B,
    onResizeHandleDown: at,
    onRotateHandleDown: Vt,
    onConnectHandleDown: Gt,
    onBendHandleDown: Ke,
    onOrthogonalSegmentHandleDown: zr,
    onArrowEndpointDown: Cr
  } = Gi({
    ref: b,
    containerRef: v,
    editorRef: w,
    pointers: ft,
    interactionRef: G,
    cameraRef: T,
    shapesRef: bt,
    toolRef: lt,
    penModeRef: Et,
    activeColorRef: Lt,
    drawColorRef: Xt,
    setDrawColor: ot,
    setActiveColor: St,
    drawStrokeWidth: g,
    setSelectedStrokeWidth: ve,
    camera: C,
    shapes: $,
    selected: I,
    isSpaceDown: O,
    setCamera: L,
    setShapes: Y,
    setEditingId: E,
    setEraserPos: H,
    setGuides: nt,
    setAnnouncement: kt,
    applyInteraction: V,
    selectNow: rt,
    selectionActions: $e,
    past: wt,
    future: ht,
    beginHistory: jt,
    endHistory: Ot,
    cancelHistory: z,
    commit: ct,
    deleteSelection: Wt,
    onDirty: m,
    onToolChange: d,
    controlled: k,
    isDarkMode: n,
    minZoom: jn,
    maxZoom: Un,
    textualTypes: Vn,
    selectedRef: X,
    editingIdRef: D,
    setIsSpaceDown: U,
    viewportCentre: q,
    setLocalShapes: M,
    expandToGroups: it,
    toPage: A,
    createId: Zn,
    liveStrokeCanvasRef: ne,
    activeDrawRef: Ut,
    pendingDrawsRef: Dt,
    queuedDrawIdsRef: xe,
    commitDrawBatch: Re,
    setIsPenMode: gt
  }), { cursor: Sr, gridColor: Xr, gridSize: xn, strokeColorOf: Yr } = qi({
    isDarkMode: n,
    tool: r === "highlighter" ? "draw" : r,
    isSpaceDown: O,
    interaction: _,
    zoom: C.z
  }), pn = (et) => {
    const Yt = X.current, xt = D.current, qt = new Set(Yt);
    if (xt && qt.add(xt), qt.size === 0) return;
    const ze = "strokeWidth" in et, Ce = Object.keys(et).every(($t) => $t === "color" || $t === "fillColor" || $t === "strokeColor" || $t === "strokeWidth");
    if (pe.length > 0 && pe.every(($t) => $t.type === "draw") && Ce) {
      const $t = "color" in et ? et.color : void 0, Ct = "strokeWidth" in et ? et.strokeWidth : void 0, wn = "strokeColor" in et ? et.strokeColor : void 0;
      ct((Wr) => qn(Wr, qt, {
        ...$t !== void 0 ? { color: $t } : {},
        ...Ct !== void 0 ? { strokeWidth: Ct } : {},
        ...wn !== void 0 ? { strokeColor: wn } : {}
      }));
      return;
    }
    if (ze) {
      const $t = et.strokeWidth;
      if ($t !== void 0 && Object.keys(et).length === 1) {
        ct((Ct) => Gn(Ct, qt, $t));
        return;
      }
    }
    ct(($t) => $t.map((Ct) => {
      if (!qt.has(Ct.id)) return Ct;
      if (!ze) return { ...Ct, ...et };
      switch (Ct.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...Ct, ...et };
        case "note":
        case "card":
        case "text":
        case "image":
          return Ct;
        case "draw":
          return { ...Ct, ...et };
        default:
          return Mr(Ct);
      }
    }));
  }, {
    commitEditorHtml: Pr,
    applyFormat: Nr,
    applyList: Ir,
    onEditorKeyDown: Er,
    applyCustomFontFamily: Lr
  } = yi({
    editorRef: w,
    editingId: N,
    setShapes: Y,
    setAnnouncement: kt,
    onDirty: m,
    patchSelected: pn
  }), { renderEditor: Dr, renderShapeBody: Tr } = mi({
    camera: C,
    editingId: N,
    isDarkMode: n,
    editorRef: w,
    commitEditorHtml: Pr,
    onEditorKeyDown: Er,
    setShapes: Y,
    onDirty: m,
    renderDiagram: p
  }), Fr = _.kind === "marquee" ? _ : null, Ar = Bt.useCallback(() => {
    var et;
    ft.current.clear(), Ut.current = null, V({ kind: "none" }), Ae(
      ne.current,
      Dt.current,
      null,
      T.current,
      window.devicePixelRatio || 1
    ), gt(!1), d("select"), (et = v.current) == null || et.focus();
  }, [
    Ut,
    V,
    T,
    v,
    ne,
    d,
    Dt,
    ft,
    gt
  ]), { shapeById: vn, visiblePaintOrder: mn } = gi({
    containerRef: v,
    shapesRef: bt,
    shapes: $,
    camera: C,
    selected: I,
    editingId: N,
    boardIdentity: e
  });
  return /* @__PURE__ */ R(
    "div",
    {
      ref: v,
      onPointerDown: B,
      onPointerMove: Be,
      onPointerLeave: _e,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": r,
      "data-canvas-pen-mode": tt ? "true" : "false",
      "data-canvas-camera-x": C.x,
      "data-canvas-camera-y": C.y,
      "data-canvas-camera-z": C.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
        cursor: Sr,
        background: n ? j.canvasDark : j.canvasLight,
        backgroundImage: `radial-gradient(${Xr} 1px, transparent 1px)`,
        backgroundSize: `${xn}px ${xn}px`,
        backgroundPosition: `${-C.x * C.z}px ${-C.y * C.z}px`
      },
      children: [
        /* @__PURE__ */ S("style", { children: '.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas .canvas-rich-text ul>li::before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style="dash"]>li::before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li::before{content:counter(canvas-list-item) ". "}' }),
        /* @__PURE__ */ S(
          "div",
          {
            "aria-live": "polite",
            role: "status",
            className: "absolute w-px h-px overflow-hidden whitespace-nowrap",
            style: { clip: "rect(0 0 0 0)", clipPath: "inset(50%)" },
            children: mt
          }
        ),
        /* @__PURE__ */ S(
          _o,
          {
            visiblePaintOrder: mn,
            selected: I,
            shapeById: vn,
            allShapes: bt.current,
            camera: C,
            interaction: _,
            eraserPos: W,
            guides: J,
            marquee: Fr,
            strokeColorOf: Yr
          }
        ),
        /* @__PURE__ */ S("canvas", { ref: ne, "aria-hidden": "true", "data-canvas-live-strokes": "true", className: "absolute inset-0 w-full h-full pointer-events-none" }),
        /* @__PURE__ */ S(
          ii,
          {
            visiblePaintOrder: mn,
            selected: I,
            editingId: N,
            camera: C,
            shapeById: vn,
            allShapes: bt.current,
            peerCursors: h,
            isDarkMode: n,
            renderEditor: Dr,
            renderShapeBody: Tr,
            setEditingId: E,
            onBendHandleDown: Ke,
            onOrthogonalSegmentHandleDown: zr,
            onResizeHandleDown: at,
            onRotateHandleDown: Vt,
            onConnectHandleDown: Gt,
            onArrowEndpointDown: Cr
          }
        ),
        Me && /* @__PURE__ */ S(
          hi,
          {
            shape: Me,
            selection: pe,
            selectionActions: $e,
            shapes: $,
            camera: C,
            canvasSize: { width: ((gn = v.current) == null ? void 0 : gn.clientWidth) ?? 380, height: ((yn = v.current) == null ? void 0 : yn.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!N,
            showPalette: It,
            installedFontFamilies: yt,
            setShowPalette: P,
            setActiveColor: St,
            patchSelected: pn,
            applyFormat: Nr,
            applyList: Ir,
            applyCustomFontFamily: Lr
          }
        ),
        tt && /* @__PURE__ */ S(vi, { isDarkMode: n, onExit: Ar }),
        /* @__PURE__ */ S(
          pi,
          {
            tool: r,
            activeColor: Z,
            drawStrokeWidth: g,
            isDarkMode: n,
            onSelectColor: K,
            onSelectStrokeWidth: F
          }
        )
      ]
    }
  );
});
export {
  dt as CANVAS_COLORS,
  Qn as CANVAS_COLOR_KEYS,
  Ht as CANVAS_FONTS,
  na as InfiniteCanvas,
  Ur as SHAPE_TOOLS,
  qn as applySelectedDrawStyle,
  Gn as applySelectedStrokeWidth,
  ea as diagramTemplate,
  ai as getInspectorGroups,
  dn as isDiagramShape
};
