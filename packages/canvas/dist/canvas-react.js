import { jsx as P, jsxs as j, Fragment as re } from "react/jsx-runtime";
import Bt, { useState as ct, useRef as nt, useEffect as Tt, useLayoutEffect as oe, useMemo as Ht, useCallback as ut, useImperativeHandle as Wr, forwardRef as Dr } from "react";
import { p as Or, i as an, k as sn, a as dt, v as Hr, c as Ot, s as _r, b as Zn, d as se, h as Br, C as Kr, S as jr } from "./document-CLNFlHux.js";
import { Minus as Ur, Plus as Vr, ChevronDown as Gr, AlignLeft as Rr, AlignCenter as qr, AlignRight as Zr, List as Qr, ListOrdered as Jr, Bold as to, Italic as eo, Underline as no, Group as ro, Ungroup as oo, Copy as io, Trash2 as ao, MousePointer2 as so } from "lucide-react";
const co = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-900-90: rgba(15,23,42,.9);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-90: rgba(255,255,255,.9);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .top-4{top:1rem}.invoicex-canvas .left-0{left:0}.invoicex-canvas .left-1\\/2{left:50%}.invoicex-canvas .right-0{right:0}.invoicex-canvas .right-4{right:1rem}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .bottom-4{bottom:1rem}.invoicex-canvas .right-safe-4{right:max(1rem,env(safe-area-inset-right))}.invoicex-canvas .bottom-safe-4{bottom:max(1rem,env(safe-area-inset-bottom))}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .min-h-11{min-height:2.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .inline-flex{display:inline-flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .px-3\\.5{padding-left:.875rem;padding-right:.875rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .py-2{padding-top:.5rem;padding-bottom:.5rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-2{padding-right:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .mr-1{margin-right:.25rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{user-select:none;-webkit-user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .-translate-x-1\\/2{transform:translate(-50%)}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-sm{font-size:.875rem;line-height:1.25rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-900\\/90{background-color:var(--canvas-slate-900-90)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-white\\/90{background-color:var(--canvas-white-90)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-l{border-left-width:1px;border-left-style:solid}.invoicex-canvas .border-r{border-right-width:1px;border-right-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .focus-visible\\:outline:focus-visible{outline-style:solid}.invoicex-canvas .focus-visible\\:outline-2:focus-visible{outline-width:2px}.invoicex-canvas .focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.invoicex-canvas .focus-visible\\:outline-blue-500:focus-visible{outline-color:var(--canvas-blue-500)}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .backdrop-blur-md{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.invoicex-canvas .transition-all{transition-property:all;transition-duration:.15s}.invoicex-canvas .transition-transform{transition-property:transform;transition-duration:.15s}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', G = Object.freeze({
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
}), Qn = 12;
function Qe(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function Xe(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function Ye(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function Ne(t, e, n, r) {
  const s = Ye(t, e, n), a = Ye(t, e, r), c = Ye(n, r, t), d = Ye(n, r, e);
  return Math.abs(s) < 1e-6 && Xe(t, n, e) || Math.abs(a) < 1e-6 && Xe(t, r, e) || Math.abs(c) < 1e-6 && Xe(n, t, r) || Math.abs(d) < 1e-6 && Xe(n, e, r) ? !0 : s > 0 != a > 0 && c > 0 != d > 0;
}
function lo(t, e, n) {
  const r = Math.min(t.x, e.x), o = Math.max(t.x, e.x), s = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
  if (o < n.minX || r > n.maxX || a < n.minY || s > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const c = { x: n.minX, y: n.minY }, d = { x: n.maxX, y: n.minY }, f = { x: n.maxX, y: n.maxY }, u = { x: n.minX, y: n.maxY };
  return Ne(t, e, c, d) || Ne(t, e, d, f) || Ne(t, e, f, u) || Ne(t, e, u, c);
}
function uo(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const r of e)
      if (lo(t[n - 1], t[n], r)) return !0;
  return !1;
}
function Je(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function cn(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = Je(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let r = 0;
  for (let s = 1; s < t.length; s++) {
    const a = Math.hypot(t[s].x - t[s - 1].x, t[s].y - t[s - 1].y);
    if (r + a >= n) {
      const c = (n - r) / a;
      return { x: t[s - 1].x + (t[s].x - t[s - 1].x) * c, y: t[s - 1].y + (t[s].y - t[s - 1].y) * c };
    }
    r += a;
  }
  const o = t[t.length - 1];
  return { x: o.x, y: o.y };
}
function we(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function wn(t, e, n, r) {
  const o = /* @__PURE__ */ new Set([t, e]), s = Math.min(t, e), a = Math.max(t, e), c = Qn * 1.2;
  for (const d of n) {
    const f = (r === "x" ? d.minX : d.minY) - c, u = (r === "x" ? d.maxX : d.maxY) + c, h = (i) => i >= s - c * 4 && i <= a + c * 4;
    h(f) && o.add(f), h(u) && o.add(u);
  }
  return [...o].sort((d, f) => Math.abs(d - t) - Math.abs(f - t));
}
function Jn(t) {
  const e = [];
  for (const n of t) {
    const r = e[e.length - 1];
    (!r || r.x !== n.x || r.y !== n.y) && e.push(n);
  }
  return e;
}
function tr(t) {
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
function ho(t, e, n) {
  const r = [t];
  for (const o of [...n, e]) {
    const s = r[r.length - 1];
    if (!s) {
      r.push(o);
      continue;
    }
    if (s.x === o.x || s.y === o.y) {
      r.push(o);
      continue;
    }
    r.push({ x: o.x, y: s.y }, o);
  }
  return tr(r);
}
function xo(t, e, n) {
  const r = t[e], o = t[e + 1];
  if (!r || !o || !Number.isFinite(n) || r.x !== o.x && r.y !== o.y) return [...t];
  const s = r.x === o.x ? [r, { x: n, y: r.y }, { x: n, y: o.y }, o] : [r, { x: r.x, y: n }, { x: o.x, y: n }, o];
  return tr([
    ...t.slice(0, e),
    ...s,
    ...t.slice(e + 2)
  ]);
}
function je(t, e) {
  const n = [], r = [];
  for (const s of t) {
    const a = Jn(s);
    a.length < 2 || (uo(a, e) ? r.push(a) : n.push(a));
  }
  const o = n.length > 0 ? n : r;
  return o.length === 0 ? [] : o.reduce((s, a) => Je(a) < Je(s) ? a : s);
}
function kn(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function de(t, e, n, r) {
  const o = Math.min(t, e), s = Math.max(t, e), a = Math.max(48, Math.abs(e - t) * 0.35, Qn * 4);
  if (r === "x") {
    if (n === "e") return s + a;
    if (n === "w") return o - a;
  } else {
    if (n === "s") return s + a;
    if (n === "n") return o - a;
  }
  return t <= e ? o - a : s + a;
}
function fo(t, e, n, r, o) {
  const s = (t.x + e.x) / 2, a = (t.y + e.y) / 2;
  if (n === "u") {
    if (r) {
      const d = de(t.x, e.x, t.side, "x");
      return [t, { x: d, y: t.y }, { x: d, y: e.y }, e];
    }
    const c = de(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: c }, { x: e.x, y: c }, e];
  }
  if (n === "zigzag") {
    if (r) {
      const f = de(t.x, e.x, t.side, "x"), u = de(t.y, e.y, t.side, "y");
      return o ? [t, { x: f, y: t.y }, { x: f, y: u }, { x: s, y: u }, { x: s, y: e.y }, e] : [t, { x: f, y: t.y }, { x: f, y: u }, { x: e.x, y: u }, e];
    }
    const c = de(t.y, e.y, t.side, "y"), d = de(t.x, e.x, t.side, "x");
    return o ? [t, { x: t.x, y: c }, { x: d, y: c }, { x: d, y: e.y }, e] : [t, { x: t.x, y: c }, { x: d, y: c }, { x: d, y: a }, { x: e.x, y: a }, e];
  }
  return [];
}
function er(t, e, n = [], r = "elbow", o = []) {
  if (o.length > 0) return ho(t, e, o);
  const s = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), a = e.side ?? (s === "e" || s === "w" ? "w" : "n"), c = s === "e" || s === "w", d = a === "e" || a === "w", f = wn(t.x, e.x, n, "x"), u = wn(t.y, e.y, n, "y"), h = [];
  if (c && d) {
    for (const v of f) h.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
    for (const v of u) h.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
  } else if (!c && !d) {
    for (const v of u) h.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
    for (const v of f) h.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  } else if (c) {
    h.push([t, { x: e.x, y: t.y }, e]);
    for (const v of u)
      h.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]), h.push([t, { x: t.x, y: v }, e]);
    for (const v of f) h.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  } else {
    h.push([t, { x: t.x, y: e.y }, e]);
    for (const v of u)
      h.push([t, { x: t.x, y: v }, e]), h.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
    for (const v of f) h.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  }
  const i = je(h, n);
  if (r === "elbow") return i;
  if (r === "reverse") {
    const v = kn(i), C = je(h.filter((y) => kn(y) !== v), n);
    return C.length > 1 ? C : i;
  }
  const l = fo(t, e, r, c, d), x = je([l], n);
  return x.length > 1 ? x : i;
}
function nr(t) {
  return t.length < 2 ? 0 : we(t[t.length - 2], t[t.length - 1]);
}
const { PI: vo } = Math, ke = vo + 1e-4, Mn = 0.5, $n = [1, 1];
function zn(t, e, n, r = (o) => o) {
  return t * r(0.5 - e * (0.5 - n));
}
const { min: Ue } = Math;
function rr(t, e, n) {
  let r = Ue(1, e / n);
  return Ue(1, t + (Ue(1, 1 - r) - t) * (r * 0.275));
}
function po(t) {
  return [-t[0], -t[1]];
}
function _t(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function Cn(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function te(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function tn(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function Jt(t, e) {
  return [t[0] * e, t[1] * e];
}
function Ve(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function mo(t, e) {
  return [t[0] / e, t[1] / e];
}
function or(t) {
  return [t[1], -t[0]];
}
function Ge(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function Sn(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function go(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function yo(t) {
  return Math.hypot(t[0], t[1]);
}
function Xn(t, e) {
  let n = t[0] - e[0], r = t[1] - e[1];
  return n * n + r * r;
}
function ir(t) {
  return mo(t, yo(t));
}
function bo(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function ln(t, e, n) {
  let r = Math.sin(n), o = Math.cos(n), s = t[0] - e[0], a = t[1] - e[1], c = s * o - a * r, d = s * r + a * o;
  return [c + e[0], d + e[1]];
}
function Yn(t, e, n, r) {
  let o = Math.sin(r), s = Math.cos(r), a = e[0] - n[0], c = e[1] - n[1], d = a * s - c * o, f = a * o + c * s;
  return t[0] = d + n[0], t[1] = f + n[1], t;
}
function Nn(t, e, n) {
  return _t(t, Jt(te(e, t), n));
}
function wo(t, e, n, r) {
  let o = n[0] - e[0], s = n[1] - e[1];
  return t[0] = e[0] + o * r, t[1] = e[1] + s * r, t;
}
function ar(t, e, n) {
  return _t(t, Jt(e, n));
}
const mt = [0, 0], qt = [0, 0], Zt = [0, 0];
function ko(t, e) {
  let n = ar(t, ir(or(te(t, _t(t, [1, 1])))), -e), r = [], o = 1 / 13;
  for (let s = o; s <= 1; s += o) r.push(ln(n, t, ke * 2 * s));
  return r;
}
function Mo(t, e, n) {
  let r = [], o = 1 / n;
  for (let s = o; s <= 1; s += o) r.push(ln(e, t, ke * s));
  return r;
}
function $o(t, e, n) {
  let r = te(e, n), o = Jt(r, 0.5), s = Jt(r, 0.51);
  return [te(t, o), te(t, s), _t(t, s), _t(t, o)];
}
function zo(t, e, n, r) {
  let o = [], s = ar(t, e, n), a = 1 / r;
  for (let c = a; c < 1; c += a) o.push(ln(s, t, ke * 3 * c));
  return o;
}
function Co(t, e, n) {
  return [_t(t, Jt(e, n)), _t(t, Jt(e, n * 0.99)), te(t, Jt(e, n * 0.99)), te(t, Jt(e, n))];
}
function Pn(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function So(t, e, n) {
  return t.slice(0, 10).reduce((r, o) => {
    let s = o.pressure;
    return e && (s = rr(r, o.distance, n)), (r + s) / 2;
  }, t[0].pressure);
}
function Xo(t, e = {}) {
  let { size: n = 16, smoothing: r = 0.5, thinning: o = 0.5, simulatePressure: s = !0, easing: a = (N) => N, start: c = {}, end: d = {}, last: f = !1 } = e, { cap: u = !0, easing: h = (N) => N * (2 - N) } = c, { cap: i = !0, easing: l = (N) => --N * N * N + 1 } = d;
  if (t.length === 0 || n <= 0) return [];
  let x = t[t.length - 1].runningLength, v = Pn(c.taper, n, x), C = Pn(d.taper, n, x), y = (n * r) ** 2, k = [], p = [], g = So(t, s, n), b = zn(n, o, t[t.length - 1].pressure, a), m, M = t[0].vector, w = t[0].point, A = w, I = w, $ = A, E = !1;
  for (let N = 0; N < t.length; N++) {
    let { pressure: W } = t[N], { point: D, vector: O, distance: T, runningLength: B } = t[N], R = N === t.length - 1;
    if (!R && x - B < 3) continue;
    o ? (s && (W = rr(g, T, n)), b = zn(n, o, W, a)) : b = n / 2, m === void 0 && (m = b);
    let it = B < v ? h(B / v) : 1, yt = x - B < C ? l((x - B) / C) : 1;
    b = Math.max(0.01, b * Math.min(it, yt));
    let L = (R ? t[N] : t[N + 1]).vector, K = R ? 1 : Sn(O, L), q = Sn(O, M) < 0 && !E, J = K !== null && K < 0;
    if (q || J) {
      Ge(mt, M), Ve(mt, mt, b);
      for (let at = 0; at <= 1; at += 0.07692307692307693) tn(qt, D, mt), Yn(qt, qt, D, ke * at), I = [qt[0], qt[1]], k.push(I), Cn(Zt, D, mt), Yn(Zt, Zt, D, ke * -at), $ = [Zt[0], Zt[1]], p.push($);
      w = I, A = $, J && (E = !0);
      continue;
    }
    if (E = !1, R) {
      Ge(mt, O), Ve(mt, mt, b), k.push(te(D, mt)), p.push(_t(D, mt));
      continue;
    }
    wo(mt, L, O, K), Ge(mt, mt), Ve(mt, mt, b), tn(qt, D, mt), I = [qt[0], qt[1]], (N <= 1 || Xn(w, I) > y) && (k.push(I), w = I), Cn(Zt, D, mt), $ = [Zt[0], Zt[1]], (N <= 1 || Xn(A, $) > y) && (p.push($), A = $), g = W, M = O;
  }
  let F = [t[0].point[0], t[0].point[1]], X = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : _t(t[0].point, [1, 1]), S = [], Y = [];
  if (t.length === 1) {
    if (!(v || C) || f) return ko(F, m || b);
  } else {
    v || C && t.length === 1 || (u ? S.push(...Mo(F, p[0], 13)) : S.push(...$o(F, k[0], p[0])));
    let N = or(po(t[t.length - 1].vector));
    C || v && t.length === 1 ? Y.push(X) : i ? Y.push(...zo(X, N, b, 29)) : Y.push(...Co(X, N, b));
  }
  return k.concat(Y, p.reverse(), S);
}
const In = [0, 0];
function En(t) {
  return t != null && t >= 0;
}
function Yo(t, e = {}) {
  var i;
  let { streamline: n = 0.5, size: r = 16, last: o = !1 } = e;
  if (t.length === 0) return [];
  let s = 0.15 + (1 - n) * 0.85, a = Array.isArray(t[0]) ? t : t.map(({ x: l, y: x, pressure: v = Mn }) => [l, x, v]);
  if (a.length === 2) {
    let l = a[1];
    a = a.slice(0, -1);
    for (let x = 1; x < 5; x++) a.push(Nn(a[0], l, x / 4));
  }
  a.length === 1 && (a = [...a, [..._t(a[0], $n), ...a[0].slice(2)]]);
  let c = [{ point: [a[0][0], a[0][1]], pressure: En(a[0][2]) ? a[0][2] : 0.25, vector: [...$n], distance: 0, runningLength: 0 }], d = !1, f = 0, u = c[0], h = a.length - 1;
  for (let l = 1; l < a.length; l++) {
    let x = o && l === h ? [a[l][0], a[l][1]] : Nn(u.point, a[l], s);
    if (go(u.point, x)) continue;
    let v = bo(x, u.point);
    if (f += v, l < h && !d) {
      if (f < r) continue;
      d = !0;
    }
    tn(In, u.point, x), u = { point: x, pressure: En(a[l][2]) ? a[l][2] : Mn, vector: ir(In), distance: v, runningLength: f }, c.push(u);
  }
  return c[0].vector = ((i = c[1]) == null ? void 0 : i.vector) || [0, 0], c;
}
function No(t, e = {}) {
  return Xo(Yo(t, e), e);
}
var Po = No;
function Te(t) {
  if (t.fillColor)
    try {
      return sn(t.fillColor);
    } catch {
      return t.color ? dt[t.color].bg : dt.blue.bg;
    }
  return t.color ? dt[t.color].bg : dt.blue.bg;
}
function sr(t) {
  if (t.strokeColor)
    try {
      return sn(t.strokeColor);
    } catch {
      return t.color ? dt[t.color].border : "#2563eb";
    }
  return t.color ? dt[t.color].border : "#2563eb";
}
function cr(t) {
  return sr(t);
}
function ie(t) {
  if (t.textColor)
    try {
      return sn(t.textColor);
    } catch {
      return t.color ? dt[t.color].text : "#0f172a";
    }
  return t.color ? dt[t.color].text : "#0f172a";
}
function lr(t, e, n) {
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
      const r = e / 2, o = n / 2, s = Math.min(e, n) / 2, a = s * 0.4, c = [];
      for (let d = 0; d < 10; d++) {
        const f = Math.PI / 5 * d - Math.PI / 2, u = d % 2 === 0 ? s : a;
        c.push(`${r + u * Math.cos(f)},${o + u * Math.sin(f)}`);
      }
      return c.join(" ");
    }
    default:
      return "";
  }
}
function ur(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let r = 1; r < t.length - 1; r++) {
    const [o, s] = t[r], [a, c] = t[r + 1];
    e += ` Q ${o} ${s} ${(o + a) / 2} ${(s + c) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function Io(t, e) {
  return e === "highlighter" ? { size: t * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: t, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 };
}
function dr(t, e) {
  return e === "highlighter" ? t * 1.25 : t / 2;
}
function hr(t, e, n) {
  return t.length < 2 ? [] : Po(t, Io(e, n));
}
function xr(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [d, f] = t[0], u = dr(e, n);
    return `M ${d - u} ${f} A ${u} ${u} 0 1 0 ${d + u} ${f} A ${u} ${u} 0 1 0 ${d - u} ${f} Z`;
  }
  const r = hr(t, e, n);
  if (r.length === 0) return "";
  if (r.length < 4)
    return r.reduce(
      (d, [f, u], h) => d + (h === 0 ? `M ${f} ${u}` : ` L ${f} ${u}`),
      ""
    ) + " Z";
  const o = r[0], s = r[1], a = r[2];
  let c = `M ${o[0]} ${o[1]} Q ${s[0]} ${s[1]} ${(s[0] + a[0]) / 2} ${(s[1] + a[1]) / 2} T `;
  for (let d = 2; d < r.length - 1; d += 1) {
    const f = r[d], u = r[d + 1];
    c += `${(f[0] + u[0]) / 2} ${(f[1] + u[1]) / 2} `;
  }
  return `${c}Z`;
}
const Ln = /* @__PURE__ */ new WeakMap();
function Eo(t) {
  const e = Ln.get(t);
  if (e !== void 0) return e;
  const n = t.points, r = t.type === "draw" && n && n.length >= 2 ? xr(n, t.strokeWidth ?? 3, t.drawMode ?? "pen") : "";
  return Ln.set(t, r), r;
}
function Qt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function fr(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], r = (o, s) => {
    o.childNodes.forEach((a) => {
      if (a.nodeType === Node.TEXT_NODE) {
        const u = a.textContent ?? "";
        u && n[n.length - 1].push({ text: u, ...s });
        return;
      }
      if (a.nodeType !== Node.ELEMENT_NODE) return;
      const c = a;
      if (c.tagName === "BR") {
        n.push([]);
        return;
      }
      const d = { bold: s.bold || c.tagName === "B" || c.tagName === "STRONG", italic: s.italic || c.tagName === "I" || c.tagName === "EM", underline: s.underline || c.tagName === "U" }, f = c.tagName === "DIV" || c.tagName === "P" || c.tagName === "LI";
      f && n[n.length - 1].length > 0 && n.push([]), r(c, d), f && n.push([]);
    });
  };
  return r(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((o) => o.length > 0);
}
const Tn = /* @__PURE__ */ new WeakMap();
function We(t) {
  const e = Tn.get(t);
  if (e !== void 0) return e;
  const n = t.html ? an(t.html) : t.text ? Qt(t.text).replace(/\n/g, "<br>") : "";
  return Tn.set(t, n), n;
}
function en(t) {
  if (t)
    try {
      return Hr(t);
    } catch {
      return;
    }
}
function vr(t) {
  try {
    return Or(t);
  } catch {
    return null;
  }
}
function Me(t) {
  return t.html ? fr(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const Pe = 12;
function jt(t) {
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
function gt(t) {
  const e = t.rotation ?? 0, n = jt(t);
  if (!e) return n;
  const r = At(t), o = Math.cos(e), s = Math.sin(e), a = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([f, u]) => {
    const h = f - r.x, i = u - r.y;
    return [r.x + h * o - i * s, r.y + h * s + i * o];
  }), c = a.map((f) => f[0]), d = a.map((f) => f[1]);
  return { minX: Math.min(...c), minY: Math.min(...d), maxX: Math.max(...c), maxY: Math.max(...d) };
}
function Fe(t, e, n) {
  const r = t.rotation ?? 0;
  if (!r) return { x: e, y: n };
  const o = At(t), s = Math.cos(-r), a = Math.sin(-r), c = e - o.x, d = n - o.y;
  return { x: o.x + c * s - d * a, y: o.y + c * a + d * s };
}
function Kt(t, e, n, r, o, s) {
  const a = o - n, c = s - r, d = a * a + c * c, f = d === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * a + (e - r) * c) / d));
  return Math.hypot(t - (n + f * a), e - (r + f * c));
}
function nn(t, e, n, r, o, s) {
  const a = 8 / r;
  if (t.type === "arrow") {
    const f = (t.strokeWidth ?? 2.5) / r / 2 + a, u = Ft(t, o ?? /* @__PURE__ */ new Map(), s);
    if (u.routing === "orthogonal" && u.pathPoints && u.pathPoints.length > 1) {
      for (let i = 1; i < u.pathPoints.length; i++) {
        const l = u.pathPoints[i - 1], x = u.pathPoints[i];
        if (Kt(e, n, l.x, l.y, x.x, x.y) <= f) return !0;
      }
      return !1;
    }
    if (u.bend === 0) return Kt(e, n, u.start.x, u.start.y, u.end.x, u.end.y) <= f;
    let h = u.start;
    for (let i = 1; i <= 16; i++) {
      const l = fe(i / 16, u.start, u.control, u.end);
      if (Kt(e, n, h.x, h.y, l.x, l.y) <= f) return !0;
      h = l;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const h = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / r / 2 + a;
    if (t.points.length === 1) {
      const [i, l] = t.points[0];
      return Math.hypot(e - i, n - l) <= h;
    }
    for (let i = 1; i < t.points.length; i++) {
      const [l, x] = t.points[i - 1], [v, C] = t.points[i];
      if (Kt(e, n, l, x, v, C) <= h) return !0;
    }
    return !1;
  }
  const c = Fe(t, e, n), d = jt(t);
  if (t.type === "frame") {
    const f = c.x >= d.minX - a && c.x <= d.maxX + a && c.y >= d.minY - a && c.y <= d.maxY + a && (c.x <= d.minX + a || c.x >= d.maxX - a || c.y <= d.minY + a || c.y >= d.maxY - a), u = c.x >= d.minX - a && c.x <= d.maxX + a && c.y >= d.minY - 28 / r && c.y <= d.minY;
    return f || u;
  }
  return c.x >= d.minX - a && c.x <= d.maxX + a && c.y >= d.minY - a && c.y <= d.maxY + a;
}
function ae(t, e, n) {
  const r = jt(t), o = (r.minX + r.maxX) / 2, s = (r.minY + r.maxY) / 2, a = e - o, c = n - s;
  if (a === 0 && c === 0) return { x: o, y: s, side: "e" };
  const d = (r.maxX - r.minX) / 2, f = (r.maxY - r.minY) / 2, u = d === 0 ? 1 / 0 : Math.abs(d / a), h = f === 0 ? 1 / 0 : Math.abs(f / c);
  return u <= h ? { x: o + a * u, y: s + c * u, side: a >= 0 ? "e" : "w" } : { x: o + a * h, y: s + c * h, side: c >= 0 ? "s" : "n" };
}
function pr(t, e, n, r) {
  const o = /* @__PURE__ */ new Set([e.id, n, r]);
  return t.filter((s) => !o.has(s.id)).map((s) => {
    const a = gt(s);
    return { minX: a.minX - Pe, minY: a.minY - Pe, maxX: a.maxX + Pe, maxY: a.maxY + Pe };
  }).filter((s) => s.maxX > s.minX && s.maxY > s.minY);
}
function Ft(t, e, n = []) {
  const r = t.fromId ? e.get(t.fromId) : void 0, o = t.toId ? e.get(t.toId) : void 0;
  let s = { x: t.x, y: t.y }, a = { x: t.x + t.w, y: t.y + t.h };
  if (r && o) {
    const x = At(r), v = At(o);
    s = ae(r, v.x, v.y), a = ae(o, x.x, x.y);
  } else r ? s = ae(r, a.x, a.y) : o && (a = ae(o, s.x, s.y));
  const c = (s.x + a.x) / 2, d = (s.y + a.y) / 2, f = t.bend ?? 0;
  let u = { x: c, y: d };
  if (f !== 0) {
    const x = a.x - s.x, v = a.y - s.y, C = Math.hypot(x, v) || 1;
    u = { x: c + -v / C * f, y: d + x / C * f };
  }
  const h = !!(r || o), i = t.routing ?? (h ? "orthogonal" : f !== 0 ? "curved" : "straight");
  if (i !== "orthogonal") return { start: s, end: a, control: u, bend: f, routing: i };
  const l = pr(n, t, r == null ? void 0 : r.id, o == null ? void 0 : o.id);
  return {
    start: s,
    end: a,
    control: u,
    bend: f,
    routing: i,
    pathPoints: Jn(er(s, a, l, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function fe(t, e, n, r) {
  const o = 1 - t;
  return { x: o * o * e.x + 2 * o * t * n.x + t * t * r.x, y: o * o * e.y + 2 * o * t * n.y + t * t * r.y };
}
function De(t, e) {
  if (!t || !e) return null;
  const n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
  return n <= r ? { start: n, end: r } : null;
}
function Ae(t, e, n, r) {
  if (Math.abs(e) < 1e-12) return t >= n && t <= r ? { start: 0, end: 1 } : null;
  const o = (n - t) / e, s = (r - t) / e;
  return De(
    { start: Math.min(o, s), end: Math.max(o, s) },
    { start: 0, end: 1 }
  );
}
function Re(t, e, n, r) {
  const o = e[0] - t[0], s = e[1] - t[1], a = t[0] - n.x, c = t[1] - n.y, d = o * o + s * s;
  if (d < 1e-12)
    return a * a + c * c <= r * r ? { start: 0, end: 1 } : null;
  const f = 2 * (a * o + c * s), u = a * a + c * c - r * r, h = f * f - 4 * d * u;
  if (h < 0) return null;
  const i = Math.sqrt(h);
  return De(
    { start: (-f - i) / (2 * d), end: (-f + i) / (2 * d) },
    { start: 0, end: 1 }
  );
}
function Lo(t, e, n, r, o) {
  const s = r.x - n.x, a = r.y - n.y, c = Math.hypot(s, a);
  if (c < 1e-12) return Re(t, e, n, o);
  const d = s / c, f = a / c, u = e[0] - t[0], h = e[1] - t[1], i = t[0] - n.x, l = t[1] - n.y, x = i * d + l * f, v = u * d + h * f, C = i * -f + l * d, y = u * -f + h * d, p = [
    De(
      Ae(x, v, 0, c),
      Ae(C, y, -o, o)
    ),
    Re(t, e, n, o),
    Re(t, e, r, o)
  ].filter((g) => g !== null);
  return p.length === 0 ? null : {
    start: Math.min(...p.map((g) => g.start)),
    end: Math.max(...p.map((g) => g.end))
  };
}
function Fn(t, e, n) {
  return [t[0] + (e[0] - t[0]) * n, t[1] + (e[1] - t[1]) * n];
}
function he(t, e) {
  const n = t[t.length - 1];
  (!n || Math.hypot(e[0] - n[0], e[1] - n[1]) > 1e-9) && t.push([e[0], e[1]]);
}
function To(t, e, n) {
  let r = n[0][0], o = n[0][1], s = r, a = o;
  for (const [c, d] of n)
    r = Math.min(r, c), o = Math.min(o, d), s = Math.max(s, c), a = Math.max(a, d);
  return { ...t, id: e, points: n, x: r, y: o, w: s - r, h: a - o };
}
function Fo(t, e) {
  const n = t.slice(0, 480);
  let r = 1, o = `${n}-e${r}`;
  for (; e.has(o); ) o = `${n}-e${++r}`;
  return e.add(o), o;
}
function ye(t, e, n) {
  return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
}
function Ie(t, e, n) {
  return Math.abs(ye(e, n, t)) <= 1e-9 && t.x >= Math.min(e.x, n.x) - 1e-9 && t.x <= Math.max(e.x, n.x) + 1e-9 && t.y >= Math.min(e.y, n.y) - 1e-9 && t.y <= Math.max(e.y, n.y) + 1e-9;
}
function Ao(t, e, n, r) {
  const o = ye(t, e, n), s = ye(t, e, r), a = ye(n, r, t), c = ye(n, r, e);
  return (o > 0 && s < 0 || o < 0 && s > 0) && (a > 0 && c < 0 || a < 0 && c > 0) ? !0 : Math.abs(o) <= 1e-9 && Ie(n, t, e) || Math.abs(s) <= 1e-9 && Ie(r, t, e) || Math.abs(a) <= 1e-9 && Ie(t, n, r) || Math.abs(c) <= 1e-9 && Ie(e, n, r);
}
function An(t, e, n, r) {
  return Ao(t, e, n, r) ? 0 : Math.min(
    Kt(t.x, t.y, n.x, n.y, r.x, r.y),
    Kt(e.x, e.y, n.x, n.y, r.x, r.y),
    Kt(n.x, n.y, t.x, t.y, e.x, e.y),
    Kt(r.x, r.y, t.x, t.y, e.x, e.y)
  );
}
function rn(t, e, n, r) {
  const o = Ae(t.x, e.x - t.x, n.minX - r, n.maxX + r), s = Ae(t.y, e.y - t.y, n.minY - r, n.maxY + r);
  return De(o, s) !== null;
}
function Wo(t, e, n, r, o, s, a) {
  const c = 8 / o;
  if (t.type === "arrow") {
    const x = r + (t.strokeWidth ?? 2.5) / o / 2 + c, v = Ft(t, s, a), C = [];
    if (v.routing === "orthogonal" && v.pathPoints && v.pathPoints.length > 1)
      for (let y = 1; y < v.pathPoints.length; y++)
        C.push([v.pathPoints[y - 1], v.pathPoints[y]]);
    else if (v.bend === 0)
      C.push([v.start, v.end]);
    else {
      let y = v.start;
      for (let k = 1; k <= 16; k++) {
        const p = fe(k / 16, v.start, v.control, v.end);
        C.push([y, p]), y = p;
      }
    }
    return C.some(([y, k]) => An(e, n, y, k) <= x);
  }
  const d = Fe(t, e.x, e.y), f = Fe(t, n.x, n.y), u = jt(t);
  if (t.type !== "frame") return rn(d, f, u, r + c);
  const h = r + c, i = [
    { x: u.minX, y: u.minY },
    { x: u.maxX, y: u.minY },
    { x: u.maxX, y: u.maxY },
    { x: u.minX, y: u.maxY }
  ];
  for (let x = 0; x < i.length; x++)
    if (An(d, f, i[x], i[(x + 1) % i.length]) <= h) return !0;
  const l = { minX: u.minX, minY: u.minY - 28 / o, maxX: u.maxX, maxY: u.minY };
  return rn(d, f, l, r);
}
function un(t, e, n, r, o) {
  const s = [], a = Math.max(o, 0.1), c = r / a, d = new Set(t.map((u) => u.id)), f = new Map(t.map((u) => [u.id, u]));
  for (const u of t) {
    if (u.type !== "draw" || !u.points) {
      if (Wo(u, e, n, c, a, f, t)) continue;
      s.push(u);
      continue;
    }
    const i = (u.drawMode ?? "pen") === "highlighter" ? (u.strokeWidth ?? 3) * 2.5 : u.strokeWidth ?? 3, l = c + i / 2, x = jt(u);
    if (!rn(e, n, x, l)) {
      s.push(u);
      continue;
    }
    if (u.points.length === 0) {
      s.push(u);
      continue;
    }
    if (u.points.length === 1) {
      const [p, g] = u.points[0];
      Kt(p, g, e.x, e.y, n.x, n.y) > l && s.push(u);
      continue;
    }
    const v = [];
    let C = [], y = !1;
    const k = () => {
      C.length > 1 && v.push(C), C = [];
    };
    for (let p = 1; p < u.points.length; p++) {
      const g = u.points[p - 1], b = u.points[p], m = Lo(g, b, e, n, l);
      if (!m) {
        C.length === 0 && he(C, g), he(C, b);
        continue;
      }
      y = !0, m.start > 1e-9 && (C.length === 0 && he(C, g), he(C, Fn(g, b, m.start))), k(), m.end < 1 - 1e-9 && (he(C, Fn(g, b, m.end)), he(C, b));
    }
    if (k(), !y) {
      s.push(u);
      continue;
    }
    v.forEach((p, g) => {
      const b = g === 0 ? u.id : Fo(u.id, d);
      s.push(To(u, b, p));
    });
  }
  return s;
}
function Do(t, e, n, r, o) {
  return un(t, { x: e, y: n }, { x: e, y: n }, r, o);
}
function Oo(t, e, n) {
  const r = 6 / n;
  let o = null, s = null;
  const a = [], c = [t.minX, (t.minX + t.maxX) / 2, t.maxX], d = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const f of e) {
    const u = gt(f), h = [u.minX, (u.minX + u.maxX) / 2, u.maxX], i = [u.minY, (u.minY + u.maxY) / 2, u.maxY];
    for (const l of c) for (const x of h) {
      const v = x - l;
      Math.abs(v) <= r && (!o || Math.abs(v) < Math.abs(o.delta)) && (o = { delta: v, at: x });
    }
    for (const l of d) for (const x of i) {
      const v = x - l;
      Math.abs(v) <= r && (!s || Math.abs(v) < Math.abs(s.delta)) && (s = { delta: v, at: x });
    }
  }
  return o && a.push({ x1: o.at, y1: t.minY - 1e3, x2: o.at, y2: t.maxY + 1e3 }), s && a.push({ x1: t.minX - 1e3, y1: s.at, x2: t.maxX + 1e3, y2: s.at }), { dx: (o == null ? void 0 : o.delta) ?? 0, dy: (s == null ? void 0 : s.delta) ?? 0, guides: a };
}
const Ho = 14;
function _o({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: r,
  camera: o,
  interaction: s,
  eraserPos: a,
  guides: c,
  marquee: d,
  strokeColorOf: f
}) {
  return /* @__PURE__ */ P("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ j("g", { transform: `scale(${o.z}) translate(${-o.x}, ${-o.y})`, children: [
    t.map((u) => {
      if (u.type === "draw" && u.points) {
        const I = u.drawMode ?? "pen", $ = u.strokeWidth ?? 3, E = e.has(u.id) ? G.blue : f(u), F = Eo(u);
        return /* @__PURE__ */ P(
          "path",
          {
            "data-canvas-vector-shape-id": u.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": I,
            "data-canvas-stroke-width": $,
            d: F || ur(u.points),
            fill: F ? E : "none",
            stroke: F ? "none" : E,
            strokeWidth: $ / o.z,
            strokeOpacity: I === "highlighter" ? 0.35 : void 0,
            fillOpacity: I === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          u.id
        );
      }
      if (u.type !== "arrow") return null;
      const h = e.has(u.id) ? G.blue : f(u), i = Ft(u, n, r), l = u.strokeWidth ?? 2.5, x = l / o.z, v = Math.max(10, 8 + l * 2), C = Math.max(4, 2 + l), y = v / o.z, k = C / o.z, p = i.routing === "orthogonal" && i.pathPoints ? i.pathPoints : null, g = p && p.length > 1;
      let b, m;
      if (g)
        b = Qe(p), m = nr(p);
      else if (i.routing === "curved") {
        b = `M ${i.start.x} ${i.start.y} Q ${i.control.x} ${i.control.y} ${i.end.x} ${i.end.y}`;
        const I = fe(0.94, i.start, i.control, i.end);
        m = Math.atan2(i.end.y - I.y, i.end.x - I.x);
      } else
        b = `M ${i.start.x} ${i.start.y} L ${i.end.x} ${i.end.y}`, m = Math.atan2(i.end.y - i.start.y, i.end.x - i.start.x);
      const M = g && p.length >= 2 ? we(p[0], p[1]) : i.routing === "orthogonal" && i.start.side ? i.start.side === "e" ? 0 : i.start.side === "w" ? Math.PI : i.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : we(i.start, i.end), w = u.strokeStyle === "dashed" ? `${8 / o.z} ${5 / o.z}` : u.strokeStyle === "dotted" ? `${1.5 / o.z} ${4 / o.z}` : void 0, A = (I, $, E, F) => I === "dot" ? /* @__PURE__ */ P("circle", { "data-canvas-arrow-dot-radius": C, cx: $, cy: E, r: k, fill: h }) : I === "none" ? null : /* @__PURE__ */ P(
        "polygon",
        {
          "data-canvas-arrowhead-size": v,
          points: `${$},${E} ${$ - y * Math.cos(F - 0.4)},${E - y * Math.sin(F - 0.4)} ${$ - y * Math.cos(F + 0.4)},${E - y * Math.sin(F + 0.4)}`,
          fill: h
        }
      );
      return /* @__PURE__ */ j("g", { "data-canvas-vector-shape-id": u.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": i.routing, "data-canvas-stroke-width": l, children: [
        /* @__PURE__ */ P("path", { d: b, fill: "none", stroke: h, strokeWidth: x, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: w }),
        A(u.arrowEnd ?? "arrow", i.end.x, i.end.y, m),
        A(u.arrowStart ?? "none", i.start.x, i.start.y, M + Math.PI)
      ] }, u.id);
    }),
    s.kind === "connect" && s.fromId !== void 0 && s.toX !== void 0 && s.toY !== void 0 && (() => {
      const u = n.get(s.fromId);
      if (!u) return null;
      const h = ae(u, s.toX, s.toY), i = s.hoverId ? n.get(s.hoverId) : null, l = i ? ae(i, h.x, h.y) : { x: s.toX, y: s.toY }, x = i ? er(h, l, pr(r, { id: "__preview" }, u.id, i.id)) : [h, l];
      return /* @__PURE__ */ j("g", { children: [
        /* @__PURE__ */ P("path", { d: Qe(x), stroke: G.blue, strokeWidth: 2 / o.z, strokeDasharray: `${5 / o.z} ${4 / o.z}` }),
        i ? /* @__PURE__ */ P("rect", { x: gt(i).minX - 3 / o.z, y: gt(i).minY - 3 / o.z, width: gt(i).maxX - gt(i).minX + 6 / o.z, height: gt(i).maxY - gt(i).minY + 6 / o.z, fill: "none", stroke: G.blue, strokeWidth: 2 / o.z, rx: 6 / o.z }) : /* @__PURE__ */ P("circle", { cx: l.x, cy: l.y, r: 5 / o.z, fill: G.blue })
      ] });
    })(),
    a && /* @__PURE__ */ P("circle", { cx: a.x, cy: a.y, r: Ho / o.z, fill: G.roseSoft, stroke: G.rose, strokeWidth: 1 / o.z }),
    c.map((u, h) => /* @__PURE__ */ P("line", { x1: u.x1, y1: u.y1, x2: u.x2, y2: u.y2, stroke: G.pink, strokeWidth: 1 / o.z, strokeDasharray: `${4 / o.z} ${4 / o.z}` }, `guide-${h}`)),
    d && /* @__PURE__ */ P("rect", { x: Math.min(d.startX, d.curX), y: Math.min(d.startY, d.curY), width: Math.abs(d.curX - d.startX), height: Math.abs(d.curY - d.startY), fill: G.marqueeFill, stroke: G.blue, strokeWidth: 1 / o.z })
  ] }) });
}
const Bo = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], Ko = /* @__PURE__ */ new Set([
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
]), jo = [
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
function Oe(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function mr(t) {
  return Ko.has(t.trim().toLowerCase());
}
function gr(t) {
  const e = Oe(t);
  return e ? mr(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function Uo(t) {
  return Oe(t).split(",").map((e) => e.trim()).filter(Boolean).map(gr).filter(Boolean).join(", ");
}
function yr(t) {
  return Oe(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function ge(t) {
  return t.split(",").map((e) => Oe(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !mr(e));
}
const Ee = Array.from(/* @__PURE__ */ new Set([
  ...jo,
  ...ge(Ot.sans.stack),
  ...ge(Ot.serif.stack),
  ...ge(Ot.mono.stack),
  ...ge(Ot.gothic.stack),
  ...ge(Ot.korean.stack)
]));
function Vo() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Ee;
  const t = Ee.filter((e) => {
    const n = gr(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : Ee;
}
const Go = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, Ro = 24, qo = 28, br = 720;
function $t(t) {
  return t.fontSize ?? Go[t.type] ?? 14;
}
function zt(t) {
  var e;
  if (!t.fontFamily) return Ot.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = yr(_r(t.customFontFamily ?? ""));
    } catch {
    }
    return Uo(n) || Ot.sans.stack;
  }
  return ((e = Ot[t.fontFamily]) == null ? void 0 : e.stack) ?? Ot.sans.stack;
}
function Nt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function Zo(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function Qo(t) {
  var e, n, r;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((r = t.html) != null && r.includes("<ol>")) return "number";
}
function Jo(t, e) {
  return {
    w: Math.min(br, Math.max(Ro, Math.ceil(t))),
    h: Math.max(qo, Math.ceil(e))
  };
}
function ti(t, e) {
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
    fontSize: `${$t(e)}px`,
    fontFamily: zt(e)
  }), document.body.appendChild(n);
  const r = n.getBoundingClientRect();
  return n.remove(), Jo(r.width, r.height);
}
const ei = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), ni = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function ri({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: r,
  shapeById: o,
  allShapes: s,
  peerCursors: a,
  isDarkMode: c,
  renderEditor: d,
  renderShapeBody: f,
  setEditingId: u,
  onBendHandleDown: h,
  onOrthogonalSegmentHandleDown: i,
  onResizeHandleDown: l,
  onRotateHandleDown: x,
  onConnectHandleDown: v,
  onArrowEndpointDown: C
}) {
  return /* @__PURE__ */ j(re, { children: [
    /* @__PURE__ */ P("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` }, children: t.map((y) => {
      if (y.type === "draw") return null;
      if (y.type === "arrow") {
        const g = Ft(y, o, s), b = g.routing === "orthogonal" && g.pathPoints ? cn(g.pathPoints) : g.routing === "curved" ? fe(0.5, g.start, g.control, g.end) : { x: (g.start.x + g.end.x) / 2, y: (g.start.y + g.end.y) / 2 }, m = n === y.id, M = We(y), w = e.has(y.id), A = Me(y).trim(), I = M || (w ? "관계 입력" : "");
        return !I && !m ? null : /* @__PURE__ */ P(Bt.Fragment, { children: /* @__PURE__ */ P("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: b.x - 90, top: b.y - 18, width: 180, height: 36 }, onDoubleClick: ($) => {
          $.stopPropagation(), u(y.id);
        }, children: (I || m) && /* @__PURE__ */ P(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": A ? `관계 설명: ${A}` : "관계 설명 입력",
            title: m ? void 0 : A ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${c ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: $t(y),
              fontFamily: zt(y),
              maxWidth: "100%",
              minWidth: m ? 120 / r.z : void 0,
              minHeight: m ? 28 / r.z : void 0,
              color: y.textColor
            },
            children: m ? d("text-center whitespace-nowrap") : /* @__PURE__ */ P("span", { dangerouslySetInnerHTML: { __html: I } }, "canvas-view")
          }
        ) }) }, y.id);
      }
      const k = e.has(y.id), p = jt(y);
      return /* @__PURE__ */ j(
        "div",
        {
          "data-canvas-shape-id": y.id,
          "data-canvas-shape-type": y.type,
          "data-canvas-selected": k ? "true" : void 0,
          "data-canvas-text-align": Nt(y),
          "data-canvas-text-color": y.textColor,
          "data-canvas-font-size": $t(y),
          "data-canvas-font-family": y.fontFamily === "custom" ? y.customFontFamily ?? "custom" : y.fontFamily ?? "sans",
          "data-canvas-manual-size": y.manualSize ? "true" : void 0,
          "data-canvas-group-id": y.groupId,
          "data-canvas-list-kind": Qo(y),
          "data-canvas-x": y.x,
          "data-canvas-y": y.y,
          "data-canvas-width": y.w,
          "data-canvas-height": y.h,
          className: "absolute",
          style: { left: p.minX, top: p.minY, width: p.maxX - p.minX, height: p.maxY - p.minY, transform: y.rotation ? `rotate(${y.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (g) => {
            g.stopPropagation(), ei.has(y.type) && u(y.id);
          },
          children: [
            f(y),
            k && /* @__PURE__ */ j(re, { children: [
              /* @__PURE__ */ P("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / r.z}px solid ${G.blue}` } }),
              e.size === 1 && /* @__PURE__ */ j(re, { children: [
                ["nw", "ne", "sw", "se"].map((g) => /* @__PURE__ */ P("div", { "data-canvas-resize-handle": g, onPointerDown: (b) => l(b, y, g), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / r.z, height: 10 / r.z, cursor: `${g}-resize`, left: g.includes("w") ? -5 / r.z : void 0, right: g.includes("e") ? -5 / r.z : void 0, top: g.includes("n") ? -5 / r.z : void 0, bottom: g.includes("s") ? -5 / r.z : void 0 } }, g)),
                /* @__PURE__ */ P("div", { onPointerDown: (g) => x(g, y), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / r.z, height: 12 / r.z, left: "50%", marginLeft: -6 / r.z, top: -28 / r.z, cursor: "grab" } }),
                ni.has(y.type) && ["n", "s", "w", "e"].map((g) => /* @__PURE__ */ P("div", { onPointerDown: (b) => v(b, y), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...g === "n" ? { left: "50%", top: -30 / r.z, marginLeft: -9 / r.z } : g === "s" ? { left: "50%", bottom: -30 / r.z, marginLeft: -9 / r.z } : g === "w" ? { top: "50%", left: -30 / r.z, marginTop: -9 / r.z } : { top: "50%", right: -30 / r.z, marginTop: -9 / r.z }, width: 18 / r.z, height: 18 / r.z, fontSize: 13 / r.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${g}`))
              ] })
            ] })
          ]
        },
        y.id
      );
    }) }),
    e.size === 1 && s.filter((y) => y.type === "arrow" && e.has(y.id)).map((y) => {
      const k = Ft(y, o, s), p = (g, b) => ({
        left: (g.x - r.x) * r.z - b / 2,
        top: (g.y - r.y) * r.z - b / 2
      });
      return /* @__PURE__ */ j(Bt.Fragment, { children: [
        k.routing === "orthogonal" && k.pathPoints && k.pathPoints.length > 2 ? k.pathPoints.slice(0, -1).map((g, b) => {
          var w;
          const m = (w = k.pathPoints) == null ? void 0 : w[b + 1];
          if (!m) return null;
          const M = { x: (g.x + m.x) / 2, y: (g.y + m.y) / 2 };
          return /* @__PURE__ */ P("div", { "data-canvas-arrow-segment-handle": b, onPointerDown: (A) => i(A, y, b), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...p(M, 12), cursor: g.x === m.x ? "ew-resize" : "ns-resize" } }, `segment-${b}`);
        }) : k.routing === "curved" && /* @__PURE__ */ P("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (g) => h(g, y), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (k.start.x + k.end.x) / 2 * r.z - r.x * r.z - 5, top: (k.start.y + k.end.y) / 2 * r.z - r.y * r.z - 10, cursor: "grab" } }),
        ["start", "end"].map((g) => {
          const b = g === "start" ? k.start : k.end;
          return /* @__PURE__ */ P("div", { "data-canvas-arrow-endpoint": g, onPointerDown: (m) => C(m, y, g), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...p(b, 12), cursor: "grab" } }, g);
        })
      ] }, `arrow-handles-${y.id}`);
    }),
    a == null ? void 0 : a.map((y) => /* @__PURE__ */ j("div", { className: "absolute pointer-events-none z-40", style: { left: (y.x - r.x) * r.z, top: (y.y - r.y) * r.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ P("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ P("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: y.color, stroke: G.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ P("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: y.color }, children: y.name })
    ] }, y.id))
  ] });
}
function dn(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function oi(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), dn(t) && e.push("diagram"), e;
}
function Zi(t) {
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
const ii = "#3b82f6";
function ne(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function Le(t) {
  return Math.round(ne(t, 0, 255)).toString(16).padStart(2, "0");
}
function ai(t) {
  const e = t.trim().endsWith("%"), n = Number.parseFloat(t);
  return Number.isFinite(n) ? e ? n * 2.55 : n : 0;
}
function be(t) {
  var s, a;
  const e = t.trim().toLowerCase(), n = (s = e.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : s[1];
  if (n)
    return n.length === 3 || n.length === 4 ? `#${n.slice(0, 3).split("").map((c) => `${c}${c}`).join("")}` : `#${n.slice(0, 6)}`;
  const r = (a = e.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : a[1];
  if (r) {
    const c = r.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(ai);
    if (c.length === 3) return `#${c.map(Le).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? ii;
}
function Wn(t) {
  const e = be(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, r = Number.parseInt(e.slice(2, 4), 16) / 255, o = Number.parseInt(e.slice(4, 6), 16) / 255, s = Math.max(n, r, o), a = Math.min(n, r, o), c = s - a;
  let d = 0;
  return c !== 0 && (s === n ? d = 60 * ((r - o) / c % 6) : s === r ? d = 60 * ((o - n) / c + 2) : d = 60 * ((n - r) / c + 4)), d < 0 && (d += 360), { hue: d, saturation: s === 0 ? 0 : c / s, value: s };
}
function Dn({ hue: t, saturation: e, value: n }) {
  const r = (t % 360 + 360) % 360, o = n * e, s = o * (1 - Math.abs(r / 60 % 2 - 1)), a = n - o;
  let c = 0, d = 0, f = 0;
  return r < 60 ? [c, d, f] = [o, s, 0] : r < 120 ? [c, d, f] = [s, o, 0] : r < 180 ? [c, d, f] = [0, o, s] : r < 240 ? [c, d, f] = [0, s, o] : r < 300 ? [c, d, f] = [s, 0, o] : [c, d, f] = [o, 0, s], `#${Le((c + a) * 255)}${Le((d + a) * 255)}${Le((f + a) * 255)}`;
}
function si(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function ci({ value: t, onChange: e }) {
  const [n, r] = ct(() => Wn(t)), o = nt(null), s = nt(null), a = nt(null);
  Tt(() => {
    const k = Wn(t);
    r((p) => si(p, k) ? p : k);
  }, [t]);
  const c = (k) => {
    r(k), e(Dn(k));
  }, d = (k) => {
    var M;
    const p = (M = o.current) == null ? void 0 : M.getBoundingClientRect();
    if (!p) return;
    const g = k.clientX - (p.left + p.width / 2), b = k.clientY - (p.top + p.height / 2), m = Math.atan2(b, g) * 180 / Math.PI + 90;
    c({ ...n, hue: (m + 360) % 360 });
  }, f = (k) => {
    var g;
    const p = (g = s.current) == null ? void 0 : g.getBoundingClientRect();
    p && c({
      ...n,
      saturation: ne((k.clientX - p.left) / p.width, 0, 1),
      value: ne(1 - (k.clientY - p.top) / p.height, 0, 1)
    });
  }, u = (k, p) => {
    var g, b;
    p.button !== 0 && p.pointerType !== "touch" || (p.preventDefault(), p.stopPropagation(), a.current = k, (b = (g = p.currentTarget).setPointerCapture) == null || b.call(g, p.pointerId), k === "hue" ? d(p) : f(p));
  }, h = (k) => {
    a.current && (k.preventDefault(), a.current === "hue" ? d(k) : f(k));
  }, i = (k) => {
    var p, g;
    a.current = null;
    try {
      (g = (p = k.currentTarget).releasePointerCapture) == null || g.call(p, k.pointerId);
    } catch {
      return;
    }
  }, l = (n.hue - 90) * Math.PI / 180, x = 53, v = {
    left: 66 + Math.cos(l) * x,
    top: 66 + Math.sin(l) * x
  }, C = Dn({ hue: n.hue, saturation: 1, value: 1 }), y = (k) => c({ ...n, hue: (n.hue + k + 360) % 360 });
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
        onPointerDown: (k) => u("hue", k),
        onPointerMove: h,
        onPointerUp: i,
        onKeyDown: (k) => {
          (k.key === "ArrowLeft" || k.key === "ArrowDown") && (k.preventDefault(), y(-1)), (k.key === "ArrowRight" || k.key === "ArrowUp") && (k.preventDefault(), y(1));
        },
        children: [
          /* @__PURE__ */ P("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ P("span", { className: "canvas-color-wheel-hue-marker", style: { left: v.left, top: v.top } })
        ]
      }
    ),
    /* @__PURE__ */ P(
      "div",
      {
        ref: s,
        className: "canvas-color-wheel-sv",
        role: "slider",
        "aria-label": "채도와 밝기",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(n.saturation * n.value * 100),
        tabIndex: 0,
        style: { backgroundColor: C },
        onPointerDown: (k) => u("sv", k),
        onPointerMove: h,
        onPointerUp: i,
        onKeyDown: (k) => {
          const p = k.shiftKey ? 0.1 : 0.02;
          k.key === "ArrowLeft" && (k.preventDefault(), c({ ...n, saturation: ne(n.saturation - p, 0, 1) })), k.key === "ArrowRight" && (k.preventDefault(), c({ ...n, saturation: ne(n.saturation + p, 0, 1) })), k.key === "ArrowDown" && (k.preventDefault(), c({ ...n, value: ne(n.value - p, 0, 1) })), k.key === "ArrowUp" && (k.preventDefault(), c({ ...n, value: ne(n.value + p, 0, 1) }));
        },
        children: /* @__PURE__ */ P("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${n.saturation * 100}%`, top: `${(1 - n.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ j("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ P("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ P("span", { children: be(t).toUpperCase() })
    ] })
  ] });
}
const li = [2, 4, 6, 8];
function ui(t) {
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
      return wr(t);
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
      return wr(t);
  }
}
function wr(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function qe(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Hn(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function di({
  shape: t,
  selection: e,
  selectionActions: n,
  shapes: r,
  camera: o,
  canvasSize: s,
  isDarkMode: a,
  editing: c,
  showPalette: d,
  installedFontFamilies: f,
  setShowPalette: u,
  setActiveColor: h,
  patchSelected: i,
  applyFormat: l,
  applyList: x,
  applyCustomFontFamily: v
}) {
  var Et, bt;
  const C = a ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", y = e.length > 1, k = e.some((z) => !!z.groupId), p = t.type === "draw", g = p || Hn(t) && !qe(t) ? "stroke" : qe(t) ? "fill" : "text", [b, m] = ct(g), [M, w] = ct("");
  oe(() => m(g), [g, t.id]);
  const A = b === "text" ? ie(t) : b === "stroke" ? t.strokeColor ?? (t.color ? dt[t.color].border : G.ink) : Te(t);
  oe(() => w(be(A).toUpperCase()), [A]);
  const I = be(A), $ = (z) => {
    i(p || b === "stroke" ? { strokeColor: z } : b === "text" ? { textColor: z } : { fillColor: z });
  }, E = (z) => {
    h(z), i(p || b === "stroke" ? { color: z, strokeColor: void 0 } : b === "text" ? { textColor: dt[z].text } : { color: z, fillColor: void 0 }), u(!1);
  }, F = nt(null), [X, S] = ct({ width: 380, height: 260 });
  oe(() => {
    const z = F.current;
    if (!z) return;
    const _ = () => {
      const pt = Math.max(1, Math.ceil(z.getBoundingClientRect().width)), wt = Math.max(1, Math.ceil(z.getBoundingClientRect().height));
      S((kt) => kt.width === pt && kt.height === wt ? kt : { width: pt, height: wt });
    };
    if (_(), typeof ResizeObserver > "u") return;
    const Q = new ResizeObserver(_);
    return Q.observe(z), () => Q.disconnect();
  }, [c, f.length, a, t, d]);
  const Y = X.width, N = X.height, W = e.reduce((z, _) => {
    const Q = gt(_);
    return {
      minX: Math.min(z.minX, Q.minX),
      minY: Math.min(z.minY, Q.minY),
      maxX: Math.max(z.maxX, Q.maxX),
      maxY: Math.max(z.maxY, Q.maxY)
    };
  }, gt(t)), D = (W.minX - o.x) * o.z, O = (W.minY - o.y) * o.z, T = (W.maxX - o.x) * o.z, B = (W.maxY - o.y) * o.z, R = Math.max(8, s.width - Y - 8), it = Math.max(8, s.height - N - 8), yt = (z, _) => ({ left: Math.min(Math.max(8, z), R), top: Math.min(Math.max(8, _), it) }), L = [
    yt((D + T) / 2 - Y / 2, O - N - 12),
    yt((D + T) / 2 - Y / 2, B + 12),
    yt((s.width - Y) / 2, 12),
    yt(D - Y - 12, O + (B - O - N) / 2),
    yt(T + 12, O + (B - O - N) / 2)
  ], K = r.map((z) => {
    const _ = gt(z);
    return { left: (_.minX - o.x) * o.z, top: (_.minY - o.y) * o.z, right: (_.maxX - o.x) * o.z, bottom: (_.maxY - o.y) * o.z };
  });
  if (t.type === "arrow") {
    const z = Ft(t, new Map(r.map((wt) => [wt.id, wt])), r), _ = z.routing === "orthogonal" && z.pathPoints ? cn(z.pathPoints) : { x: (z.start.x + z.end.x) / 2, y: (z.start.y + z.end.y) / 2 }, Q = 180 * o.z, pt = 36 * o.z;
    K.push({
      left: (_.x - o.x) * o.z - Q / 2,
      top: (_.y - o.y) * o.z - pt / 2,
      right: (_.x - o.x) * o.z + Q / 2,
      bottom: (_.y - o.y) * o.z + pt / 2
    });
  }
  const q = L[0], J = (z, _) => {
    const Q = Math.max(0, Math.min(z.left + Y, _.right) - Math.max(z.left, _.left)), pt = Math.max(0, Math.min(z.top + N, _.bottom) - Math.max(z.top, _.top));
    return Q * pt;
  }, at = ((Et = L.map((z) => ({
    candidate: z,
    overlap: K.reduce((_, Q) => _ + J(z, Q), 0),
    distance: Math.hypot(z.left - q.left, z.top - q.top)
  })).sort((z, _) => z.overlap - _.overlap || z.distance - _.distance)[0]) == null ? void 0 : Et.candidate) ?? q, lt = $t(t), Ct = e.every(ui), et = new Set(e.map(On)).size === 1 ? On(t) : void 0, Pt = oi(t), It = t.type === "arrow" ? "arrow" : Pt[0] ?? "color", [tt, Xt] = ct(It);
  oe(() => {
    Pt.includes(tt) || Xt(It);
  }, [It, Pt, tt]);
  const Wt = t.type === "arrow" && !!((bt = t.orthogonalWaypoints) != null && bt.length), ht = t.type === "arrow" ? t.arrowStart ?? "none" : "none", Z = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", ot = (z, _, Q, pt, wt = pt) => /* @__PURE__ */ P("button", { type: "button", title: pt, "aria-label": wt, onClick: Q, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${_ ? "bg-blue-600 text-white" : C}`, children: z }), xt = (z) => /* @__PURE__ */ P("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: z }), ft = (z, _, Q, pt, wt = !1) => /* @__PURE__ */ P(
    "button",
    {
      type: "button",
      title: _,
      "aria-label": _,
      disabled: !pt,
      onClick: Q,
      className: `w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default ${wt ? "text-rose-500 hover:bg-rose-500/10" : C}`,
      children: /* @__PURE__ */ P(z, { className: "w-4 h-4" })
    }
  ), Dt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ j("div", { ref: F, "data-canvas-inspector": p ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${a ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: at.left, top: at.top }, onPointerDown: (z) => {
    z.stopPropagation();
    const _ = z.target instanceof Element ? z.target : null;
    _ != null && _.closest("input, select, textarea") || z.preventDefault();
  }, onClick: (z) => z.stopPropagation(), children: [
    y ? /* @__PURE__ */ j("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      e.length,
      "개 선택됨"
    ] }) : /* @__PURE__ */ P("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: Pt.map((z) => /* @__PURE__ */ P("button", { type: "button", role: "tab", "aria-selected": tt === z, onClick: () => Xt(z), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${tt === z ? "bg-blue-600 text-white" : C}`, children: Dt[z] }, z)) }),
    /* @__PURE__ */ j("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: y || tt === "color" || p ? void 0 : "none" }, children: [
      /* @__PURE__ */ P("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: p ? "그리기" : "색상" }),
      /* @__PURE__ */ P("button", { type: "button", title: p ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": p ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => u((z) => !z), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${a ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ P("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ P("span", { className: "canvas-color-wheel-trigger-dot", style: { background: I } }) }) }),
      d && /* @__PURE__ */ j("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${a ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !p && /* @__PURE__ */ j("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          qe(t) && /* @__PURE__ */ P("button", { type: "button", role: "tab", "aria-selected": b === "fill", onClick: () => m("fill"), className: b === "fill" ? "is-active" : "", children: "배경" }),
          Hn(t) && /* @__PURE__ */ P("button", { type: "button", role: "tab", "aria-selected": b === "stroke", onClick: () => m("stroke"), className: b === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ P("button", { type: "button", role: "tab", "aria-selected": b === "text", onClick: () => m("text"), className: b === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ P("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: Zn.map((z) => /* @__PURE__ */ P("button", { type: "button", title: dt[z].label, "aria-label": `색 ${dt[z].label}`, onClick: () => E(z), className: "canvas-color-preset", style: { background: dt[z].bg, borderColor: dt[z].border, outline: t.color === z && !t.fillColor && !t.strokeColor ? `2px solid ${G.blue}` : void 0, outlineOffset: 1 } }, z)) }),
        /* @__PURE__ */ P(ci, { value: A, onChange: $ }),
        /* @__PURE__ */ j("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ P("span", { children: "#" }),
          /* @__PURE__ */ P(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: M.replace(/^#/, ""),
              onChange: (z) => {
                const _ = z.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                w(`#${_}`.toUpperCase()), _.length === 6 && $(`#${_}`);
              },
              onBlur: () => w(be(A).toUpperCase()),
              onPointerDown: (z) => z.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !y && tt !== "color" && !p && /* @__PURE__ */ j(re, { children: [
      /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ P("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ j("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: ie(t), color: G.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ P("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ P("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? ie(t), onChange: (z) => i({ textColor: z.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ j("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${a ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ P("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ P("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => i({ fontSize: Math.max(8, lt - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${C}`, children: /* @__PURE__ */ P(Ur, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ P("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: lt }),
          /* @__PURE__ */ P("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => i({ fontSize: Math.min(96, lt + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${C}`, children: /* @__PURE__ */ P(Vr, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ j("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ P("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (z) => {
            const _ = Zo(z.target.value);
            i(_ === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: _, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${a ? "text-slate-200" : "text-slate-700"}`, children: Bo.map((z) => /* @__PURE__ */ P("option", { value: z, className: a ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: Ot[z].label }, z)) }),
          /* @__PURE__ */ P(Gr, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ j(re, { children: [
          /* @__PURE__ */ P("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (z) => v(z.target.value), onChange: (z) => z.currentTarget.value && v(z.currentTarget.value), onKeyDown: (z) => {
            z.key === "Enter" && (z.preventDefault(), v(z.currentTarget.value));
          }, onDoubleClick: (z) => z.stopPropagation(), onPointerDown: (z) => z.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ P("datalist", { id: `canvas-font-families-${t.id}`, children: f.map((z) => /* @__PURE__ */ P("option", { value: z }, z)) })
        ] })
      ] }),
      /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ P("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ P("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", Rr, "왼쪽 정렬"], ["center", qr, "가운데 정렬"], ["right", Zr, "오른쪽 정렬"]].map(([z, _, Q]) => /* @__PURE__ */ P("button", { type: "button", "aria-label": Q, title: Q, onClick: () => i({ textAlign: z }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${Nt(t) === z ? "bg-blue-600 text-white shadow-sm" : C}`, children: /* @__PURE__ */ P(_, { className: "w-4 h-4" }) }, z)) }),
        c && /* @__PURE__ */ j(re, { children: [
          /* @__PURE__ */ P("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ P("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", Qr, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", Jr, "번호 목록"]].map(([z, _, Q]) => /* @__PURE__ */ P("button", { type: "button", onClick: () => x(z), "aria-label": Q, title: Q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${C}`, children: _ ? /* @__PURE__ */ P(_, { className: "w-4 h-4" }) : /* @__PURE__ */ P("span", { className: "text-base leading-none", children: "–" }) }, z)) }),
          /* @__PURE__ */ P("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: to, label: "굵게" }, { cmd: "italic", Icon: eo, label: "기울임" }, { cmd: "underline", Icon: no, label: "밑줄" }].map(({ cmd: z, Icon: _, label: Q }) => /* @__PURE__ */ P("button", { type: "button", onClick: () => l(z), "aria-label": Q, title: Q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${C}`, children: /* @__PURE__ */ P(_, { className: "w-4 h-4" }) }, z)) })
        ] })
      ] }),
      (tt === "arrange" && t.type === "card" || tt === "arrow" && t.type === "arrow") && /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ j(re, { children: [
          /* @__PURE__ */ P("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ P("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (z) => z.stopPropagation(), onChange: (z) => i({ category: z.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${a ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            xt("경로"),
            ot("직선", (t.routing ?? "straight") === "straight", () => i({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            ot("직각", t.routing === "orthogonal", () => i({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            ot("곡선", (t.routing ?? "") === "curved", () => i({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            Wt && ot("자동", !1, () => i({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            xt("선"),
            ot("—", (t.strokeStyle ?? "solid") === "solid", () => i({ strokeStyle: "solid" }), "실선"),
            ot("- -", t.strokeStyle === "dashed", () => i({ strokeStyle: "dashed" }), "파선"),
            ot("···", t.strokeStyle === "dotted", () => i({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            xt("시작"),
            ot(ht === "none" ? "○" : ht === "dot" ? "●" : "◀", ht !== "none", () => i({ arrowStart: ht === "none" ? "arrow" : ht === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${ht === "none" ? "없음" : ht === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ j("div", { className: "flex items-center gap-1", children: [
            xt("끝"),
            ot(Z === "none" ? "○" : Z === "dot" ? "●" : "▶", Z !== "none", () => i({ arrowEnd: Z === "arrow" ? "dot" : Z === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${Z === "none" ? "없음" : Z === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      tt === "diagram" && /* @__PURE__ */ P("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${a ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    Ct && /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
      xt("굵기"),
      li.map((z) => /* @__PURE__ */ P(Bt.Fragment, { children: ot(String(z), et === z, () => i({ strokeWidth: z }), `굵기 ${z}`) }, z))
    ] }),
    /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
      xt("선택"),
      ft(ro, "그룹 (Ctrl+G)", n.group, y),
      ft(oo, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, k),
      ft(io, "복제", n.duplicateSelected, !0),
      ft(ao, "삭제 (Delete)", n.deleteSelected, !0, !0)
    ] })
  ] });
}
const hi = [2, 4, 6, 8];
function xi({
  tool: t,
  activeColor: e,
  drawStrokeWidth: n,
  isDarkMode: r,
  onSelectColor: o,
  onSelectStrokeWidth: s
}) {
  return t !== "draw" && t !== "highlighter" ? null : /* @__PURE__ */ j(
    "div",
    {
      "data-canvas-pen-palette": "true",
      className: `absolute top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex flex-wrap items-center gap-2 px-3 py-2 rounded-2xl border shadow-xl backdrop-blur-md ${r ? "bg-slate-900/90 border-slate-700 text-slate-200 shadow-slate-950/40" : "bg-white/90 border-slate-200 text-slate-700 shadow-slate-300/40"}`,
      onPointerDown: (c) => c.stopPropagation(),
      onClick: (c) => c.stopPropagation(),
      children: [
        /* @__PURE__ */ P("div", { className: "flex items-center gap-1.5 pr-2 border-r border-slate-300/40 dark:border-slate-700/60", children: /* @__PURE__ */ P("span", { className: "text-[11px] font-bold tracking-wide opacity-75", children: t === "highlighter" ? "형광펜" : "펜 색상" }) }),
        /* @__PURE__ */ P("div", { className: "flex items-center gap-1.5", role: "radiogroup", "aria-label": "펜 색상 선택", children: Zn.map((c) => {
          const d = dt[c], f = e === c;
          return /* @__PURE__ */ P(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": f,
              title: `${d.label} 선택`,
              "aria-label": d.label,
              onClick: () => o(c),
              className: `group relative w-6 h-6 rounded-full transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${f ? "scale-110 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900" : "hover:scale-105 opacity-90 hover:opacity-100"}`,
              style: {
                backgroundColor: d.border,
                borderColor: d.border
              },
              children: f && /* @__PURE__ */ P("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ P("span", { className: "w-1.5 h-1.5 rounded-full bg-white shadow-sm" }) })
            },
            c
          );
        }) }),
        /* @__PURE__ */ j("div", { className: "flex items-center gap-1 pl-2 border-l border-slate-300/40 dark:border-slate-700/60", children: [
          /* @__PURE__ */ P("span", { className: `mr-1 text-xs font-semibold ${r ? "text-slate-300" : "text-slate-500"}`, children: "두께" }),
          hi.map((c) => {
            const d = n === c;
            return /* @__PURE__ */ P(
              "button",
              {
                type: "button",
                title: `두께 ${c}px`,
                "aria-label": `두께 ${c}px`,
                onClick: () => s(c),
                className: `w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-semibold transition-colors ${d ? "bg-blue-600 text-white font-bold" : r ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-700"}`,
                children: /* @__PURE__ */ P(
                  "span",
                  {
                    className: "rounded-full bg-current",
                    style: { width: `${Math.max(3, c + 1)}px`, height: `${Math.max(3, c + 1)}px` }
                  }
                )
              },
              c
            );
          })
        ] })
      ]
    }
  );
}
function fi({ isDarkMode: t, onExit: e }) {
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
        /* @__PURE__ */ P(so, { "aria-hidden": "true", className: "h-4 w-4" }),
        /* @__PURE__ */ P("span", { children: "펜 모드 종료" })
      ]
    }
  );
}
function vi({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: r,
  commitEditorHtml: o,
  onEditorKeyDown: s,
  setShapes: a,
  onDirty: c,
  renderDiagram: d
}) {
  const f = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", u = (i, l) => /* @__PURE__ */ P(
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
      onDoubleClick: (x) => x.stopPropagation(),
      onKeyDown: s,
      className: `${f} ${i}`,
      style: l
    },
    "canvas-editor"
  );
  return { renderEditor: u, renderShapeBody: (i) => {
    const l = dt[i.color ?? "blue"], x = e === i.id, v = We(i);
    if (i.type === "frame") {
      const m = i.strokeWidth ?? 2;
      return /* @__PURE__ */ P(
        "div",
        {
          "data-canvas-stroke-width": m,
          className: "w-full h-full rounded",
          style: { border: `${m / t.z}px solid ${n ? G.slate600 : G.slate400}` },
          children: /* @__PURE__ */ P(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? G.slate400 : G.muted
              },
              children: x ? u("", { fontSize: 13 / t.z }) : Me(i) || "프레임"
            }
          )
        }
      );
    }
    if (i.type === "note")
      return /* @__PURE__ */ P(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: Te(i), borderTop: `6px solid ${l.border}`, color: l.text },
          children: x ? u("font-medium", { color: ie(i), fontSize: $t(i), fontFamily: zt(i), textAlign: Nt(i) }) : v ? /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: ie(i), fontSize: $t(i), fontFamily: zt(i), textAlign: Nt(i) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") : /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: ie(i), fontSize: $t(i), fontFamily: zt(i), textAlign: Nt(i) }, children: /* @__PURE__ */ P("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (i.type === "card") {
      const m = i.cardStyle === "glass";
      return dn(i) && d && !x ? /* @__PURE__ */ P("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: d(i) }) : /* @__PURE__ */ j(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: m ? G.glassFill : i.fillColor ?? G.slateCard,
            backdropFilter: m ? "blur(12px)" : void 0,
            WebkitBackdropFilter: m ? "blur(12px)" : void 0,
            border: `1px solid ${m ? G.glassBorder : G.darkBorder}`,
            boxShadow: m ? G.glassShadow : G.cardShadow
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
                  const A = (M.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  a((I) => I.map(($) => $.id === i.id ? { ...$, category: A } : $)), c();
                },
                onKeyDown: (M) => {
                  M.key === "Enter" && (M.preventDefault(), M.currentTarget.blur());
                },
                children: [
                  "[ ",
                  i.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            x ? u("flex-1 font-medium", { color: i.textColor ?? G.white, fontSize: $t(i), fontFamily: zt(i), textAlign: Nt(i) }) : /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: i.textColor ?? G.white, fontSize: $t(i), fontFamily: zt(i), textAlign: Nt(i) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view"),
            /* @__PURE__ */ j("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              i.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (i.type === "text") {
      const m = n ? "text-slate-100" : "text-slate-900", M = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${m}`,
        style: { color: i.textColor, fontSize: $t(i), fontFamily: zt(i), textAlign: Nt(i) }
      };
      return x ? u(`font-medium ${m}`, M.style) : v ? /* @__PURE__ */ P(
        "div",
        {
          "data-canvas-text-view": !0,
          ...M,
          dangerouslySetInnerHTML: { __html: v }
        },
        "canvas-view"
      ) : /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, ...M, children: /* @__PURE__ */ P("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (i.type === "image") {
      const m = en(i.src);
      return m ? /* @__PURE__ */ P(
        "img",
        {
          src: m,
          alt: i.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const C = Te(i), y = cr(i), k = ie(i);
    if (i.type === "triangle" || i.type === "diamond" || i.type === "hexagon" || i.type === "star") {
      const m = i.strokeWidth ?? 2;
      return /* @__PURE__ */ j("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ P("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${i.w} ${i.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ P("polygon", { "data-canvas-stroke-width": m, points: lr(i.type, i.w, i.h), fill: C, stroke: y, strokeWidth: m / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ P("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: k }, children: x ? u("font-medium", { color: k, fontSize: $t(i), fontFamily: zt(i), textAlign: Nt(i) }) : /* @__PURE__ */ P("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: $t(i), fontFamily: zt(i), textAlign: Nt(i) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") })
      ] });
    }
    const g = en(i.src), b = i.type === "rect" || i.type === "ellipse" ? i.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ P(
      "div",
      {
        "data-canvas-stroke-width": b,
        className: `w-full h-full flex items-center justify-center p-3 ${i.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: C, border: `${b / t.z}px solid ${y}`, color: k },
        children: x ? u("font-medium", { color: k, fontSize: $t(i), fontFamily: zt(i), textAlign: Nt(i) }) : /* @__PURE__ */ j("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: $t(i), fontFamily: zt(i), textAlign: Nt(i) }, children: [
          /* @__PURE__ */ P("div", { dangerouslySetInnerHTML: { __html: v } }),
          g && /* @__PURE__ */ P(
            "a",
            {
              href: g,
              target: "_blank",
              rel: "noreferrer",
              onPointerDown: (m) => m.stopPropagation(),
              className: "block mt-1 text-[11px] underline opacity-70",
              children: "파일 열기"
            }
          )
        ] }, "canvas-view")
      }
    );
  } };
}
function pi({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: r,
  selected: o,
  editingId: s,
  boardIdentity: a
}) {
  const [c, d] = ct({ width: 0, height: 0 });
  Tt(() => {
    const x = t.current;
    if (!x) return;
    let v = -1, C = -1;
    const y = (p = x.clientWidth, g = x.clientHeight) => {
      p === v && g === C || (v = p, C = g, d({ width: p, height: g }));
    };
    if (y(), typeof ResizeObserver < "u") {
      const p = new ResizeObserver((g) => {
        var m;
        const b = (m = g[0]) == null ? void 0 : m.contentRect;
        y((b == null ? void 0 : b.width) ?? x.clientWidth, (b == null ? void 0 : b.height) ?? x.clientHeight);
      });
      return p.observe(x), () => p.disconnect();
    }
    const k = () => y();
    return window.addEventListener("resize", k), () => window.removeEventListener("resize", k);
  }, [a, t]);
  const f = Ht(() => new Map(n.map((x) => [x.id, x])), [n]), u = Ht(
    () => [...n].sort((x, v) => (x.type === "frame" ? -1 : 0) - (v.type === "frame" ? -1 : 0)),
    [n]
  ), h = Ht(() => {
    if (!t.current || c.width <= 0 || c.height <= 0) return null;
    const x = 200 / r.z;
    return {
      minX: r.x - x,
      minY: r.y - x,
      maxX: r.x + c.width / r.z + x,
      maxY: r.y + c.height / r.z + x
    };
  }, [r, t, c]), i = ut((x) => {
    if (!h) return !1;
    if (x.id === s || o.has(x.id)) return !0;
    if (x.type === "arrow") {
      const C = Ft(x, f, e.current), k = (C.routing === "orthogonal" ? C.pathPoints : null) ?? [C.start, C.end], p = Math.min(...k.map((M) => M.x)), g = Math.max(...k.map((M) => M.x)), b = Math.min(...k.map((M) => M.y)), m = Math.max(...k.map((M) => M.y));
      return g >= h.minX && p <= h.maxX && m >= h.minY && b <= h.maxY;
    }
    const v = gt(x);
    return v.maxX >= h.minX && v.minX <= h.maxX && v.maxY >= h.minY && v.minY <= h.maxY;
  }, [s, o, f, e, h]), l = Ht(
    () => u.filter(i),
    [i, u]
  );
  return { shapeById: f, visiblePaintOrder: l };
}
function mi({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: r,
  onDirty: o,
  patchSelected: s
}) {
  const a = ut(() => {
    const l = t.current;
    if (!l || !e) return;
    let x;
    try {
      x = an(l.innerHTML);
    } catch {
      r("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const v = l.scrollHeight;
    n((C) => C.map((y) => {
      if (y.id !== e) return y;
      const k = dn(y) ? { ...y, text: Me({ ...y, html: x, text: void 0 }), html: void 0 } : { ...y, html: x, text: void 0 };
      if (y.type === "text")
        return y.manualSize ? k : { ...k, ...ti(l, y) };
      if (y.type === "arrow") return k;
      const p = y.type === "note" ? 32 : y.type === "card" ? 96 : (
        // category header + type footer
        (y.type === "frame", 24)
      ), g = Math.max(y.h, v + p);
      return { ...k, h: g };
    })), o();
  }, [e, o]), c = (l) => {
    var x;
    (x = t.current) == null || x.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(l), a();
  }, d = () => {
    var C;
    const l = (C = window.getSelection()) == null ? void 0 : C.anchorNode, x = l instanceof Element ? l : l == null ? void 0 : l.parentElement, v = x == null ? void 0 : x.closest("ul, ol");
    return v instanceof HTMLElement ? v : null;
  }, f = (l, x, v) => {
    const C = document.createElement(x);
    for (; l.firstChild; ) C.append(l.firstChild);
    return l.replaceWith(C), C;
  }, u = (l) => {
    const x = t.current;
    if (!x) return;
    x.focus();
    const v = d();
    if (l === "number")
      if ((v == null ? void 0 : v.tagName) === "OL")
        v.removeAttribute("data-list-style");
      else if ((v == null ? void 0 : v.tagName) === "UL")
        f(v, "ol");
      else {
        document.execCommand("insertOrderedList");
        const C = d();
        C == null || C.removeAttribute("data-list-style");
      }
    else if ((v == null ? void 0 : v.tagName) === "UL") {
      const C = v.dataset.listStyle;
      l === C ? document.execCommand("insertUnorderedList") : v.dataset.listStyle = l;
    } else {
      (v == null ? void 0 : v.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const C = d();
      C && (C.dataset.listStyle = l);
    }
    a();
  };
  return { commitEditorHtml: a, applyFormat: c, applyList: u, onEditorKeyDown: (l) => {
    if (l.key === "Tab") {
      l.preventDefault(), document.execCommand(l.shiftKey ? "outdent" : "indent"), a();
      return;
    }
    if (l.key === " ") {
      const x = window.getSelection();
      if (x && x.isCollapsed && x.anchorNode) {
        const v = x.anchorNode, C = v.textContent || "", y = x.anchorOffset, k = C.slice(0, y).trim();
        if (!d()) {
          if (k === "-" || k === "–") {
            l.preventDefault(), v.textContent = C.slice(y), u("dash");
            return;
          }
          if (k === "*") {
            l.preventDefault(), v.textContent = C.slice(y), u("bullet");
            return;
          }
          if (k === "1.") {
            l.preventDefault(), v.textContent = C.slice(y), u("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (l) => {
    const x = yr(l);
    if (!x) {
      s({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    s({
      fontFamily: "custom",
      customFontFamily: x
    });
  } };
}
function gi({
  boardIdentity: t,
  tool: e,
  activeColor: n,
  defaultActiveColor: r,
  onActiveColorChange: o,
  controlledShapes: s,
  onShapesChange: a,
  onDirty: c
}) {
  const d = nt(null), f = nt(null), [u, h] = ct([]), i = s !== void 0 && a !== void 0, l = nt(/* @__PURE__ */ new WeakMap()), x = Ht(() => {
    const H = l.current;
    return (i ? s ?? [] : u).map((V) => {
      let U = H.get(V);
      return U === void 0 && (U = vr(V), H.set(V, U)), U;
    }).filter((V) => V !== null);
  }, [i, s, u]), v = nt(a);
  v.current = a;
  const C = ut((H) => {
    const V = v.current;
    if (!V) {
      h(H);
      return;
    }
    V(typeof H == "function" ? H : () => H);
  }, []), [y, k] = ct({ x: -400, y: -300, z: 1 }), [p, g] = ct(/* @__PURE__ */ new Set()), [b, m] = ct(null), [M, w] = ct({ kind: "none" }), [A, I] = ct(!1), [$, E] = ct([]), [F, X] = ct(""), [S, Y] = ct(!1), [N, W] = ct(null), [D, O] = ct(!1), [T, B] = ct(n ?? r ?? "blue"), R = n ?? T, it = nt(o);
  it.current = o;
  const yt = ut((H) => {
    B((V) => {
      var st;
      const U = typeof H == "function" ? H(V) : H;
      return (st = it.current) == null || st.call(it, U), U;
    });
  }, []), [L, K] = ct(Ee), q = nt(R);
  q.current = R;
  const J = nt([]), at = nt([]), lt = nt(null), Ct = nt(/* @__PURE__ */ new Map()), le = nt(null), et = nt(null), Pt = nt([]), It = nt(/* @__PURE__ */ new Set()), tt = nt(x), Xt = nt(y), Wt = nt(e), ht = nt(p), Z = nt(b), ot = nt(!1);
  tt.current = x, Xt.current = y, Wt.current = e, ht.current = p, Z.current = b;
  const xt = ut((H) => {
    var V;
    ot.current = H, H && typeof window < "u" && ((V = window.getSelection()) == null || V.removeAllRanges()), O(H);
  }, []), [ft, Dt] = ct("ink"), [Et, bt] = ct("yellow"), z = e === "highlighter" ? Et : ft, _ = nt(z);
  _.current = z;
  const Q = ut((H) => {
    Wt.current === "highlighter" ? bt(H) : Dt(H);
  }, []), pt = nt({ kind: "none" }), wt = ut((H) => {
    pt.current = H, w(H);
  }, []), kt = ut((H) => {
    ht.current = H, g(H);
  }, []);
  oe(() => {
    var V;
    const H = /* @__PURE__ */ new Set();
    ht.current = H, Z.current = null, Ct.current.clear(), J.current = [], at.current = [], lt.current = null, et.current = null, Pt.current = [], It.current.clear(), ot.current = !1, wt({ kind: "none" }), g(H), m(null), I(!1), E([]), W(null), O(!1), X(""), (V = d.current) == null || V.focus();
  }, [wt, t]), Tt(() => {
    let H = !1;
    const V = () => {
      const st = Vo();
      H || K(st);
    };
    if (V(), typeof document > "u" || !("fonts" in document)) return;
    const U = () => V();
    return document.fonts.addEventListener("loadingdone", U), () => {
      H = !0, document.fonts.removeEventListener("loadingdone", U);
    };
  }, [t]);
  const Ut = (b ? x.find((H) => H.id === b) : void 0) !== void 0;
  oe(() => {
    if (!b || !Ut) return;
    const H = () => {
      const U = f.current, st = tt.current.find((Ke) => Ke.id === b);
      if (!U || !st || (U.dataset.seeded !== b && (U.innerHTML = We(st), U.dataset.seeded = b), document.activeElement === U)) return;
      U.focus();
      const Vt = document.createRange();
      Vt.selectNodeContents(U), Vt.collapse(!1);
      const Gt = window.getSelection();
      Gt == null || Gt.removeAllRanges(), Gt == null || Gt.addRange(Vt);
    };
    H();
    const V = requestAnimationFrame(H);
    return () => cancelAnimationFrame(V);
  }, [b, Ut]);
  const Lt = ut((H) => {
    C((V) => {
      const U = typeof H == "function" ? H(V) : H;
      return J.current.push(V), J.current.length > 100 && J.current.shift(), at.current = [], U;
    }), c();
  }, [c]), ve = ut((H) => {
    if (H.length === 0) return;
    let V = tt.current;
    for (const U of H)
      J.current.push(V), V = [...V, U];
    J.current.length > 100 && J.current.splice(0, J.current.length - 100), at.current = [], C((U) => [...U, ...H]), c();
  }, [c, C]), He = ut((H) => H.size === 0 ? !1 : (Lt((V) => V.filter((U) => H.has(U.id) ? !1 : U.type !== "arrow" ? !0 : !(U.fromId && H.has(U.fromId)) && !(U.toId && H.has(U.toId)))), kt(/* @__PURE__ */ new Set()), X(`${H.size}개 삭제됨`), !0), [Lt, kt]), $e = ut(() => {
    lt.current = tt.current;
  }, []), pe = ut(() => {
    const H = lt.current;
    lt.current = null, !(!H || H === tt.current) && (J.current.push(H), J.current.length > 100 && J.current.shift(), at.current = [], c());
  }, [c]), ze = ut(() => {
    const H = lt.current;
    lt.current = null, !(!H || H === tt.current) && (tt.current = H, C(H));
  }, [C]), _e = ut((H, V) => {
    var Vt;
    const U = (Vt = d.current) == null ? void 0 : Vt.getBoundingClientRect(), st = Xt.current;
    return U ? { x: (H - U.left) / st.z + st.x, y: (V - U.top) / st.z + st.y } : { x: 0, y: 0 };
  }, []), Be = ut(() => {
    var U;
    const H = (U = d.current) == null ? void 0 : U.getBoundingClientRect(), V = Xt.current;
    return H ? { x: V.x + H.width / 2 / V.z, y: V.y + H.height / 2 / V.z } : { x: 0, y: 0 };
  }, []), me = ut((H) => {
    const V = new Set(tt.current.filter((st) => H.has(st.id) && st.groupId).map((st) => st.groupId));
    if (V.size === 0) return H;
    const U = new Set(H);
    for (const st of tt.current) st.groupId && V.has(st.groupId) && U.add(st.id);
    return U;
  }, []);
  return {
    containerRef: d,
    editorRef: f,
    localShapes: u,
    setLocalShapes: h,
    controlled: i,
    shapes: x,
    setShapes: C,
    camera: y,
    setCamera: k,
    cameraRef: Xt,
    selected: p,
    setSelected: g,
    selectedRef: ht,
    editingId: b,
    setEditingId: m,
    editingIdRef: Z,
    interaction: M,
    interactionRef: pt,
    applyInteraction: wt,
    isSpaceDown: A,
    setIsSpaceDown: I,
    guides: $,
    setGuides: E,
    announcement: F,
    setAnnouncement: X,
    showInspectorPalette: S,
    setShowInspectorPalette: Y,
    eraserPos: N,
    setEraserPos: W,
    isPenMode: D,
    setIsPenMode: xt,
    penModeRef: ot,
    activeColor: R,
    setActiveColor: yt,
    activeColorRef: q,
    drawColor: z,
    setDrawColor: Q,
    drawColorRef: _,
    installedFontFamilies: L,
    pointers: Ct,
    past: J,
    future: at,
    selectNow: kt,
    commit: Lt,
    deleteSelection: He,
    beginHistory: $e,
    endHistory: pe,
    cancelHistory: ze,
    toPage: _e,
    viewportCentre: Be,
    expandToGroups: me,
    toolRef: Wt,
    shapesRef: tt,
    liveStrokeCanvasRef: le,
    activeDrawRef: et,
    pendingDrawsRef: Pt,
    queuedDrawIdsRef: It,
    commitDrawBatch: ve
  };
}
function yi({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: r,
  maxZoom: o,
  shapes: s,
  selected: a,
  editingId: c,
  textualTypes: d,
  onZoomChange: f,
  onSelectionChange: u,
  onLocalCursor: h,
  toPage: i
}) {
  Tt(() => {
    f == null || f(e.z);
  }, [e.z, f]), Tt(() => {
    const p = t.current;
    if (!p) return;
    const g = (b) => {
      if (b.preventDefault(), b.ctrlKey || b.metaKey) {
        const m = p.getBoundingClientRect();
        n((M) => {
          const w = Math.min(o, Math.max(r, M.z * Math.exp(-b.deltaY * 0.01))), A = b.clientX - m.left, I = b.clientY - m.top;
          return { x: M.x + A / M.z - A / w, y: M.y + I / M.z - I / w, z: w };
        });
      } else
        n((m) => ({ ...m, x: m.x + b.deltaX / m.z, y: m.y + b.deltaY / m.z }));
    };
    return p.addEventListener("wheel", g, { passive: !1 }), () => p.removeEventListener("wheel", g);
  }, [t, o, r, n]);
  const l = Ht(() => {
    const p = s.filter((g) => a.has(g.id));
    return {
      count: p.length,
      canGroup: p.length > 1,
      canUngroup: p.some((g) => !!g.groupId),
      isTextual: p.length === 1 && d.includes(p[0].type),
      selectedIds: p.map((g) => g.id)
    };
  }, [a, s, d]);
  Tt(() => {
    u == null || u(l);
  }, [u, l]);
  const x = Ht(() => {
    if (c) {
      const g = s.find((b) => b.id === c);
      return g && g.type !== "image" && g.type !== "draw" ? [g] : [];
    }
    const p = s.filter((g) => a.has(g.id));
    return p.length === 1 && p[0].type === "image" ? [] : p;
  }, [c, a, s]), v = Ht(() => x.length === 0 ? null : x.find((p) => p.type !== "image") ?? null, [x]), C = nt(0);
  return { selectionInfo: l, inspectorSelection: x, inspectorShape: v, onContainerPointerMove: h ? (p) => {
    const g = performance.now();
    g - C.current < 60 || (C.current = g, h(i(p.clientX, p.clientY)));
  } : void 0, onContainerPointerLeave: h ? () => h(null) : void 0 };
}
const xe = 24;
function bi({
  containerRef: t,
  shapesRef: e,
  selectedRef: n,
  commit: r,
  deleteSelection: o,
  selectNow: s,
  setAnnouncement: a,
  createId: c
}) {
  return Ht(() => ({
    deleteSelected: () => {
      o(n.current);
    },
    duplicateSelected: () => {
      var h;
      const d = n.current;
      if (d.size === 0) return;
      const f = [], u = /* @__PURE__ */ new Map();
      for (const i of e.current) {
        if (!d.has(i.id)) continue;
        let l = i.groupId;
        l && (u.has(l) || u.set(l, c("g")), l = u.get(l)), f.push({
          ...i,
          id: c(),
          x: i.x + xe,
          y: i.y + xe,
          groupId: l,
          points: (h = i.points) == null ? void 0 : h.map(([x, v]) => [x + xe, v + xe]),
          orthogonalWaypoints: i.type === "arrow" && i.orthogonalWaypoints ? i.orthogonalWaypoints.map((x) => ({ x: x.x + xe, y: x.y + xe })) : void 0
        });
      }
      r((i) => [...i, ...f]), s(new Set(f.map((i) => i.id))), a(`${f.length}개 복제됨`);
    },
    group: () => {
      var u;
      const d = n.current;
      if (d.size < 2) return;
      const f = c("g");
      r((h) => h.map((i) => d.has(i.id) ? { ...i, groupId: f } : i)), a(`${d.size}개 그룹화됨`), (u = t.current) == null || u.focus();
    },
    ungroup: () => {
      var f;
      const d = n.current;
      d.size !== 0 && (r((u) => u.map((h) => d.has(h.id) ? { ...h, groupId: void 0 } : h)), a("그룹 해제됨"), (f = t.current) == null || f.focus());
    }
  }), [r, t, c, o, s, n, a, e]);
}
function wi(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, r = 1 / 0, o = -1 / 0, s = -1 / 0;
  for (const h of t) {
    const i = gt(h);
    n = Math.min(n, i.minX), r = Math.min(r, i.minY), o = Math.max(o, i.maxX), s = Math.max(s, i.maxY);
  }
  const a = 40, c = o - n + a * 2, d = s - r + a * 2;
  if (!Number.isFinite(c) || !Number.isFinite(d) || c > se.maxExportDimension || d > se.maxExportDimension || c * d > se.maxExportPixels) return null;
  const f = (h, i, l, x, v) => {
    const C = h.fontSize ?? l, y = zt(h), k = fr(We(h));
    if (k.length === 0) return "";
    const p = jt(h), g = h.textAlign === "right" ? "end" : h.textAlign === "center" ? "middle" : h.textAlign === "left" ? "start" : v, b = g === "end" ? p.maxX - 12 : g === "middle" ? (p.minX + p.maxX) / 2 : p.minX + 12, m = p.minY + C + 12;
    return k.map((M, w) => {
      const A = M.map((I) => `<tspan style="${[
        I.bold ? "font-weight:700" : `font-weight:${x}`,
        I.italic ? "font-style:italic" : "",
        I.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Qt(I.text)}</tspan>`).join("");
      return `<text x="${b}" y="${m + w * C * 1.4}" font-family="${Qt(y)}" font-size="${C}" fill="${i}" text-anchor="${g}">${A}</text>`;
    }).join("");
  }, u = t.map((h) => {
    const i = dt[h.color ?? "blue"], l = jt(h), x = At(h), v = h.rotation ? ` transform="rotate(${h.rotation * 180 / Math.PI} ${x.x} ${x.y})"` : "", C = h.color ? dt[h.color].border : G.ink;
    if (h.type === "draw" && h.points) {
      const M = h.drawMode ?? "pen", w = h.strokeWidth ?? 3, A = M === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${ur(h.points)}" fill="none" stroke="${C}" stroke-width="${w}"${A} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (h.type === "arrow") {
      const M = Ft(h, new Map(t.map((T) => [T.id, T])), t), w = h.strokeWidth ?? 2.5, A = Math.max(10, 8 + w * 2), I = Math.max(4, 2 + w), $ = M.routing === "orthogonal" && M.pathPoints ? M.pathPoints : null, E = $ && $.length > 1, F = E ? Qe($) : M.routing === "curved" ? `M ${M.start.x} ${M.start.y} Q ${M.control.x} ${M.control.y} ${M.end.x} ${M.end.y}` : `M ${M.start.x} ${M.start.y} L ${M.end.x} ${M.end.y}`, X = E ? nr($) : M.routing === "curved" ? (() => {
        const T = fe(0.94, M.start, M.control, M.end);
        return Math.atan2(M.end.y - T.y, M.end.x - T.x);
      })() : Math.atan2(M.end.y - M.start.y, M.end.x - M.start.x), S = E ? we($[0], $[1]) : M.routing === "orthogonal" && M.start.side ? M.start.side === "e" ? 0 : M.start.side === "w" ? Math.PI : M.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : we(M.start, M.end), Y = h.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : h.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", N = (T, B, R, it) => {
        if (T === "dot") return `<circle cx="${B}" cy="${R}" r="${I}" fill="${C}"/>`;
        if (T === "none") return "";
        const yt = `${B - A * Math.cos(it - 0.4)},${R - A * Math.sin(it - 0.4)}`, L = `${B - A * Math.cos(it + 0.4)},${R - A * Math.sin(it + 0.4)}`;
        return `<polygon points="${B},${R} ${yt} ${L}" fill="${C}"/>`;
      }, W = M.routing === "orthogonal" && M.pathPoints ? cn(M.pathPoints) : M.bend === 0 ? { x: (M.start.x + M.end.x) / 2, y: (M.start.y + M.end.y) / 2 } : fe(0.5, M.start, M.control, M.end), D = Me(h), O = D ? `<text x="${W.x}" y="${W.y - 6}" text-anchor="middle" font-family="${Qt(zt(h))}" font-size="${h.fontSize ?? 12}" fill="${C}">${Qt(D)}</text>` : "";
      return `<path d="${F}" fill="none" stroke="${C}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"${Y}/>` + N(h.arrowEnd ?? "arrow", M.end.x, M.end.y, X) + N(h.arrowStart ?? "none", M.start.x, M.start.y, S + Math.PI) + O;
    }
    if (h.type === "image" && h.src) {
      const M = en(h.src);
      return M ? `<image href="${Qt(M)}" x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}"${v}/>` : "";
    }
    if (h.type === "frame")
      return `<g${v}><rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}" fill="none" stroke="${G.slate400}" stroke-width="${h.strokeWidth ?? 2}" rx="4"/><text x="${l.minX}" y="${l.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${G.muted}">${Qt(h.text ?? "프레임")}</text></g>`;
    if (h.type === "note")
      return `<g${v}><rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}" fill="${i.bg}"/><rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="6" fill="${i.border}"/>` + f(h, i.text, 14, "600", "start") + "</g>";
    if (h.type === "card") {
      const M = h.cardStyle === "glass";
      return `<g${v}><rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}" rx="16" fill="${M ? G.glassFill : G.slateCard}"/><text x="${l.minX + 16}" y="${l.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${G.slate400}">[ ${Qt(h.category ?? "ENTITY")} ]</text>` + f(h, G.white, 16, "700", "start") + "</g>";
    }
    const y = h.type === "rect" || h.type === "ellipse" || h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star" ? h.strokeWidth ?? 2 : 2, k = Te(h), p = cr(h), g = h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star", b = g ? lr(h.type, l.maxX - l.minX, l.maxY - l.minY).split(" ").map((M) => {
      const [w, A] = M.split(",").map(Number);
      return `${w + l.minX},${A + l.minY}`;
    }).join(" ") : "", m = h.type === "ellipse" ? `<ellipse cx="${(l.minX + l.maxX) / 2}" cy="${(l.minY + l.maxY) / 2}" rx="${(l.maxX - l.minX) / 2}" ry="${(l.maxY - l.minY) / 2}" fill="${k}" stroke="${p}" stroke-width="${y}"/>` : g ? `<polygon points="${b}" fill="${k}" stroke="${p}" stroke-width="${y}" stroke-linejoin="round"/>` : `<rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}" rx="12" fill="${k}" stroke="${p}" stroke-width="${y}"/>`;
    return `<g${v}>${m}${f(h, i.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${c}" height="${d}" viewBox="${n - a} ${r - a} ${c} ${d}"><rect x="${n - a}" y="${r - a}" width="${c}" height="${d}" fill="${e ? G.canvasDark : G.canvasLight}"/>` + u + "</svg>";
}
async function ki(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), r = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), o = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), s = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, a = new Image();
  a.crossOrigin = "anonymous";
  try {
    await new Promise((i, l) => {
      a.onload = () => i(), a.onerror = () => l(new Error("svg rasterise failed")), a.src = s;
    });
  } catch {
    return null;
  }
  const c = 2, d = r * c, f = o * c;
  if (!Number.isSafeInteger(d) || !Number.isSafeInteger(f) || d > se.maxExportDimension || f > se.maxExportDimension || d * f > se.maxExportPixels) return null;
  const u = document.createElement("canvas");
  u.width = d, u.height = f;
  const h = u.getContext("2d");
  return h ? (h.scale(c, c), h.drawImage(a, 0, 0), new Promise((i) => {
    try {
      u.toBlob((l) => i(l), "image/png");
    } catch {
      i(null);
    }
  })) : null;
}
function Mi(t, e, n) {
  if (t.length < 2) return;
  const r = t.filter(
    (i) => i.type !== "draw" && i.type !== "arrow" && i.type !== "frame" && i.type !== "image"
  );
  if (r.length < 2) return;
  const o = r.map((i, l) => ({
    id: i.id,
    i: l,
    x: At(i).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: At(i).y,
    vx: 0,
    vy: 0
  }));
  for (let i = 0; i < o.length; i++)
    for (let l = 0; l < i; l++)
      if (Math.abs(o[i].x - o[l].x) < 1 && Math.abs(o[i].y - o[l].y) < 1) {
        const x = 2 * Math.PI * i / o.length;
        o[i].x += Math.cos(x) * 10, o[i].y += Math.sin(x) * 10;
        break;
      }
  const s = new Map(o.map((i) => [i.id, i])), a = [];
  for (const i of t) {
    if (i.type !== "arrow") continue;
    const l = i.fromId ? s.get(i.fromId) : null, x = i.toId ? s.get(i.toId) : null;
    l && x && a.push([l, x]);
  }
  const c = 220, d = c * c, f = 80;
  let u = 400;
  const h = u / f;
  for (let i = 0; i < f; i++) {
    for (let l = 0; l < o.length; l++)
      o[l].vx = 0, o[l].vy = 0;
    for (let l = 0; l < o.length; l++)
      for (let x = l + 1; x < o.length; x++) {
        const v = o[l], C = o[x], y = v.x - C.x, k = v.y - C.y, p = Math.hypot(y, k) || 0.01, g = d / p, b = y / p * g, m = k / p * g;
        v.vx += b, v.vy += m, C.vx -= b, C.vy -= m;
      }
    for (const [l, x] of a) {
      const v = l.x - x.x, C = l.y - x.y, y = Math.hypot(v, C) || 0.01, k = y * y / c, p = v / y * k, g = C / y * k;
      l.vx -= p, l.vy -= g, x.vx += p, x.vy += g;
    }
    for (const l of o) {
      const x = Math.hypot(l.vx, l.vy) || 0.01, v = Math.min(x, u);
      l.x += l.vx / x * v, l.y += l.vy / x * v;
    }
    u = Math.max(0.5, u - h);
  }
  e((i) => i.map((l) => {
    const x = s.get(l.id);
    return x ? { ...l, x: x.x - l.w / 2, y: x.y - l.h / 2 } : l;
  })), n();
}
function $i(t, {
  controlled: e,
  past: n,
  future: r,
  setLocalShapes: o,
  setCamera: s,
  selectNow: a,
  setEditingId: c
}) {
  let d;
  try {
    d = Br(t);
  } catch {
    return;
  }
  e || (n.current = [], r.current = [], o(d.shapes.map(zi))), s(d.camera), a(/* @__PURE__ */ new Set()), c(null);
}
function zi(t) {
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
      return Ci(t);
  }
}
function Ci(t) {
  throw new Kr(`Unhandled canvas shape type: ${String(t)}.`);
}
const _n = (t) => t === "draw" || t === "highlighter";
function Si({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: r,
  toolRef: o,
  activeColorRef: s,
  drawColorRef: a,
  setDrawColor: c,
  setActiveColor: d,
  past: f,
  future: u,
  controlled: h,
  isDarkMode: i,
  minZoom: l,
  maxZoom: x,
  onToolChange: v,
  setSelectedStrokeWidth: C,
  onDirty: y,
  commit: k,
  selectNow: p,
  selectionActions: g,
  viewportCentre: b,
  setShapes: m,
  setLocalShapes: M,
  setCamera: w,
  setEditingId: A,
  setAnnouncement: I,
  createId: $
}) {
  const E = ut((X) => {
    const S = b(), Y = vr({
      id: $(),
      x: X.x ?? S.x - X.w / 2,
      y: X.y ?? S.y - X.h / 2,
      ...X
    });
    if (!Y) throw new Error("Canvas could not create a valid shape.");
    return k((N) => [...N, Y]), p(/* @__PURE__ */ new Set([Y.id])), v("select"), I(`${Y.type} 추가됨`), Y;
  }, [k, $, v, p, I, b]), F = ut(() => wi(n.current, i), [i, n]);
  Wr(t, () => ({
    addNote: (X) => {
      const S = E({ type: "note", w: 180, h: 180, color: X, text: "" });
      A(S.id);
    },
    addCard: (X, S, Y, N) => {
      E({ type: "card", w: 260, h: 150, text: X, category: S, cardStyle: Y, color: N });
    },
    addText: () => {
      const X = E({ type: "text", w: 220, h: 44, text: "" });
      A(X.id);
    },
    addShape: (X, S, Y) => {
      E({
        type: X,
        w: X === "ellipse" ? 220 : 200,
        h: X === "ellipse" ? 110 : 140,
        color: S,
        text: Y ?? ""
      });
    },
    addArrow: () => {
      const X = b(), S = { id: $(), type: "arrow", x: X.x - 140, y: X.y, w: 280, h: 0 };
      k((Y) => [...Y, S]), p(/* @__PURE__ */ new Set([S.id])), v("select");
    },
    addImage: (X, S, Y, N) => {
      E({ type: "image", w: Y, h: N, src: X, fileName: S });
    },
    addFileCard: (X, S, Y) => {
      E({ type: "rect", w: 260, h: 120, color: "purple", text: Y, src: S, fileName: X });
    },
    updateShapeText: (X, S) => {
      k((Y) => Y.map((N) => N.id === X ? { ...N, text: S, html: void 0 } : N));
    },
    setSelectedStrokeWidth: C,
    // While a pen tool is active the "active colour" is the pen colour, so
    // hosts that drive the palette through the handle see the same thing the
    // user sees on the canvas. Other tools keep the note/shape colour.
    setActiveColor: (X) => {
      _n(o.current) ? c(X) : d(X);
    },
    getActiveColor: () => _n(o.current) ? a.current : s.current,
    setTool: v,
    undo: () => {
      const X = f.current.pop();
      X && (u.current.push(n.current), m(X), p(/* @__PURE__ */ new Set()), A(null), y(), I("실행 취소"));
    },
    redo: () => {
      const X = u.current.pop();
      X && (f.current.push(n.current), m(X), p(/* @__PURE__ */ new Set()), A(null), y(), I("다시 실행"));
    },
    deleteSelected: g.deleteSelected,
    duplicateSelected: g.duplicateSelected,
    group: g.group,
    ungroup: g.ungroup,
    zoomBy: (X) => {
      w((S) => {
        var O;
        const Y = (O = e.current) == null ? void 0 : O.getBoundingClientRect(), N = Math.min(x, Math.max(l, S.z * X));
        if (!Y) return { ...S, z: N };
        const W = S.x + Y.width / 2 / S.z, D = S.y + Y.height / 2 / S.z;
        return { x: W - Y.width / 2 / N, y: D - Y.height / 2 / N, z: N };
      });
    },
    zoomTo: (X) => {
      w((S) => {
        var O;
        const Y = (O = e.current) == null ? void 0 : O.getBoundingClientRect(), N = Math.min(x, Math.max(l, X));
        if (!Y) return { ...S, z: N };
        const W = S.x + Y.width / 2 / S.z, D = S.y + Y.height / 2 / S.z;
        return { x: W - Y.width / 2 / N, y: D - Y.height / 2 / N, z: N };
      });
    },
    resetZoom: () => {
      w((X) => {
        var W;
        const S = (W = e.current) == null ? void 0 : W.getBoundingClientRect();
        if (!S) return { ...X, z: 1 };
        const Y = X.x + S.width / 2 / X.z, N = X.y + S.height / 2 / X.z;
        return { x: Y - S.width / 2, y: N - S.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var B;
      const X = n.current, S = (B = e.current) == null ? void 0 : B.getBoundingClientRect();
      if (X.length === 0 || !S) return;
      let Y = 1 / 0, N = 1 / 0, W = -1 / 0, D = -1 / 0;
      for (const R of X) {
        const it = gt(R);
        Y = Math.min(Y, it.minX), N = Math.min(N, it.minY), W = Math.max(W, it.maxX), D = Math.max(D, it.maxY);
      }
      const O = 80, T = Math.min(x, Math.max(
        l,
        Math.min(S.width / (W - Y + O * 2), S.height / (D - N + O * 2))
      ));
      w({
        x: (Y + W) / 2 - S.width / 2 / T,
        y: (N + D) / 2 - S.height / 2 / T,
        z: T
      });
    },
    autoLayout: () => Mi(n.current, k, () => I("자동 배치 완료")),
    exportSvg: F,
    exportPng: () => ki(F),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: r.current }),
    loadSnapshot: (X) => $i(X, {
      controlled: h,
      past: f,
      future: u,
      setLocalShapes: M,
      setCamera: w,
      selectNow: p,
      setEditingId: A
    })
  }), [
    E,
    F,
    k,
    $,
    i,
    x,
    l,
    y,
    v,
    g,
    p,
    w,
    A,
    M,
    C,
    m,
    I,
    b,
    h
  ]);
}
function Xi(t) {
  return t.altKey || !t.ctrlKey && !t.metaKey ? null : t.code === "KeyZ" ? t.shiftKey ? "redo" : "undo" : t.code === "KeyY" ? "redo" : null;
}
function Yi(t) {
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
function Ni({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: r,
  editingIdRef: o,
  toolRef: s,
  past: a,
  future: c,
  textualTypes: d,
  setIsSpaceDown: f,
  setEditingId: u,
  setShapes: h,
  setAnnouncement: i,
  commit: l,
  deleteSelection: x,
  selectNow: v,
  onDirty: C,
  onToolChange: y,
  createId: k
}) {
  const p = ut((g, b) => {
    const m = r.current;
    m.size !== 0 && l((M) => M.map((w) => {
      var A;
      return m.has(w.id) ? {
        ...w,
        x: w.x + g,
        y: w.y + b,
        points: (A = w.points) == null ? void 0 : A.map(([I, $]) => [I + g, $ + b])
      } : w;
    }));
  }, [l, r]);
  Tt(() => {
    const g = (w) => {
      const A = w;
      return !!A && (A.tagName === "INPUT" || A.tagName === "TEXTAREA" || A.isContentEditable);
    }, b = (w) => w instanceof Element && !!w.closest("input, select, button, textarea, option, label, [data-canvas-control]"), m = (w) => {
      var N, W, D, O;
      const A = t.current, I = document.activeElement, $ = w.target instanceof Node && !!(A != null && A.contains(w.target)), E = !!A && (I === A || A.contains(I));
      if (!$ && !E || b(w.target)) return;
      if (w.code === "Space" && !g(w.target)) {
        f(!0), w.preventDefault();
        return;
      }
      if (g(w.target)) {
        if (w.key === "Escape")
          w.preventDefault(), u(null), (N = e.current) == null || N.blur(), (W = t.current) == null || W.focus();
        else if ((w.key === "Delete" || w.key === "Backspace") && !o.current) {
          const T = r.current;
          x(T) && w.preventDefault();
        }
        return;
      }
      const F = r.current, X = Xi(w);
      if (X) {
        if (w.preventDefault(), X === "redo") {
          const T = c.current.pop();
          T && (a.current.push(n.current), h(T), C(), i("다시 실행"));
        } else {
          const T = a.current.pop();
          T && (c.current.push(n.current), h(T), C(), i("실행 취소"));
        }
        v(/* @__PURE__ */ new Set());
        return;
      }
      const S = w.metaKey || w.ctrlKey;
      if (S && w.key.toLowerCase() === "g") {
        if (w.preventDefault(), w.shiftKey)
          F.size > 0 && (l((T) => T.map((B) => F.has(B.id) ? { ...B, groupId: void 0 } : B)), i("그룹 해제됨"));
        else if (F.size > 1) {
          const T = k("g");
          l((B) => B.map((R) => F.has(R.id) ? { ...R, groupId: T } : R)), i(`${F.size}개 그룹화됨`);
        }
        return;
      }
      if (S && w.key.toLowerCase() === "a") {
        w.preventDefault(), v(new Set(n.current.map((T) => T.id))), i(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (w.key === "Delete" || w.key === "Backspace") {
        x(F) && w.preventDefault();
        return;
      }
      if (w.key.startsWith("Arrow")) {
        w.preventDefault();
        const T = w.shiftKey ? 10 : 1;
        w.key === "ArrowLeft" && p(-T, 0), w.key === "ArrowRight" && p(T, 0), w.key === "ArrowUp" && p(0, -T), w.key === "ArrowDown" && p(0, T);
        return;
      }
      if (w.key === "Tab" && n.current.length > 0) {
        w.preventDefault();
        const T = n.current, B = T.findIndex((yt) => F.has(yt.id)), R = w.shiftKey ? B <= 0 ? T.length - 1 : B - 1 : B === -1 || B === T.length - 1 ? 0 : B + 1, it = T[R];
        v(/* @__PURE__ */ new Set([it.id])), i(`${it.type} 선택됨: ${Me(it) || "내용 없음"}`);
        return;
      }
      if (w.key === "Enter" && F.size === 1) {
        const T = n.current.find((B) => F.has(B.id));
        T && d.includes(T.type) && (w.preventDefault(), u(T.id));
        return;
      }
      if (w.key === "Escape") {
        if (o.current) {
          w.preventDefault(), u(null), (D = e.current) == null || D.blur(), (O = t.current) == null || O.focus(), y("select");
          return;
        }
        v(/* @__PURE__ */ new Set()), y("select");
        return;
      }
      const Y = Yi(w);
      Y && (w.preventDefault(), s.current = Y, y(Y));
    }, M = (w) => {
      const A = t.current;
      !A || !(document.activeElement === A || A.contains(document.activeElement)) || w.code === "Space" && f(!1);
    };
    return window.addEventListener("keydown", m), window.addEventListener("keyup", M), () => {
      window.removeEventListener("keydown", m), window.removeEventListener("keyup", M);
    };
  }, [
    l,
    t,
    k,
    x,
    o,
    e,
    c,
    p,
    C,
    y,
    a,
    v,
    r,
    i,
    u,
    f,
    h,
    n,
    d,
    s
  ]);
}
function hn(t) {
  return t.pointerType === "pen";
}
function Pi() {
  return typeof navigator < "u" && navigator.maxTouchPoints > 0 ? !0 : typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(any-pointer: coarse)").matches;
}
function Ii(t, e) {
  return e && hn(t);
}
function Ei(t, e) {
  return !t || hn(e);
}
function Ze(t, e) {
  return [(t[0] - e.x) * e.z, (t[1] - e.y) * e.z];
}
function on(t, e, n) {
  const r = Math.max(n, 0.1), o = 0.05 / r, s = 4 / r;
  let a = t[t.length - 1];
  for (const c of e) {
    if (!a) {
      t.push(c), a = c;
      continue;
    }
    const d = c[0] - a[0], f = c[1] - a[1], u = Math.hypot(d, f);
    if (u < o) continue;
    const h = Math.max(1, Math.ceil(u / s)), i = Math.min(h, se.maxDrawPoints - t.length);
    if (i <= 0) return;
    for (let l = 1; l <= i; l++) {
      const x = [
        a[0] + d * (l / h),
        a[1] + f * (l / h)
      ];
      t.push(x);
    }
    a = t[t.length - 1];
  }
}
function Li(t) {
  const e = (t.points ?? []).map(([a, c]) => [a, c]);
  if (e.length === 0) return t;
  let n = e[0][0], r = e[0][1], o = n, s = r;
  for (const [a, c] of e)
    n = Math.min(n, a), r = Math.min(r, c), o = Math.max(o, a), s = Math.max(s, c);
  return { ...t, points: e, x: n, y: r, w: o - n, h: s - r };
}
function Bn(t, e, n) {
  if (e.type !== "draw") return;
  const r = e.points ?? [];
  if (r.length === 0) return;
  const o = e.strokeWidth ?? 3, s = e.drawMode ?? "pen", a = e.color ? dt[e.color].border : "#2563eb";
  if (t.save(), t.globalAlpha = s === "highlighter" ? 0.35 : 1, t.fillStyle = a, r.length === 1) {
    const [h, i] = Ze(r[0], n);
    t.beginPath(), t.arc(h, i, Math.max(dr(o, s) * n.z, 0.5), 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  const c = typeof Path2D == "function" ? xr(r, o, s) : "";
  if (c && typeof Path2D == "function") {
    t.scale(n.z, n.z), t.translate(-n.x, -n.y), t.fill(new Path2D(c)), t.restore();
    return;
  }
  const d = hr(r, o, s);
  if (d.length === 0) {
    t.restore();
    return;
  }
  t.beginPath();
  const [f, u] = Ze([d[0][0], d[0][1]], n);
  t.moveTo(f, u);
  for (let h = 1; h < d.length; h++) {
    const [i, l] = Ze([d[h][0], d[h][1]], n);
    t.lineTo(i, l);
  }
  t.closePath(), t.fill(), t.restore();
}
function Ti(t, e, n, r) {
  const o = Math.max(1, Math.min(2, r)), s = Math.max(1, Math.round(e * o)), a = Math.max(1, Math.round(n * o));
  return t.width !== s && (t.width = s), t.height !== a && (t.height = a), t.style.width = `${e}px`, t.style.height = `${n}px`, o;
}
function ce(t, e, n, r, o = 1) {
  var c;
  if (!t) return;
  const s = (c = t.getContext) == null ? void 0 : c.call(t, "2d");
  if (!s) return;
  const a = Math.max(1, Math.min(2, o || 1));
  s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, t.width, t.height), s.setTransform(a, 0, 0, a, 0, 0);
  for (const d of e) Bn(s, d, r);
  n && Bn(s, n, r), s.setTransform(1, 0, 0, 1, 0, 0);
}
const Fi = 0.1, Ai = 4, xn = 14, Wi = 4, Kn = ["note", "card", "rect", "ellipse", "text", "image"], Di = 400;
function Oi({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: r,
  editingIdRef: o,
  cameraRef: s,
  shapesRef: a,
  toolRef: c,
  penModeRef: d,
  activeColorRef: f,
  drawColorRef: u,
  drawStrokeWidth: h,
  camera: i,
  shapes: l,
  selected: x,
  isSpaceDown: v,
  textualTypes: C,
  setShapes: y,
  setEditingId: k,
  applyInteraction: p,
  selectNow: g,
  beginHistory: b,
  cancelHistory: m,
  commit: M,
  onToolChange: w,
  expandToGroups: A,
  toPage: I,
  createId: $,
  liveStrokeCanvasRef: E,
  activeDrawRef: F,
  pendingDrawsRef: X,
  setIsPenMode: S
}) {
  const Y = $, N = nt(null), W = (L, K) => {
    var lt;
    const q = ((lt = t.current) == null ? void 0 : lt.dataset.canvasActiveTool) === "text" ? "text" : c.current;
    if (q !== "note" && q !== "text") return;
    const J = I(L, K), at = q === "note" ? { id: Y(), type: "note", x: J.x - 90, y: J.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: Y(), type: "text", x: J.x, y: J.y - 22, w: 220, h: 44, text: "" };
    M((Ct) => [...Ct, at]), g(/* @__PURE__ */ new Set([at.id])), k(at.id), w("select");
  };
  return Tt(() => {
    const L = (q) => {
      var J;
      (J = t.current) != null && J.contains(q.target) && (q.target instanceof Element && q.target.closest('[role="textbox"], [data-canvas-inspector]') || W(q.clientX, q.clientY));
    }, K = (q) => {
      var J;
      d.current && (q.preventDefault(), (J = window.getSelection()) == null || J.removeAllRanges());
    };
    return window.addEventListener("click", L, !0), document.addEventListener("selectstart", K, !0), () => {
      window.removeEventListener("click", L, !0), document.removeEventListener("selectstart", K, !0);
    };
  }, [t, d]), { onPointerDown: (L) => {
    var Xt, Wt, ht;
    let K = c.current;
    const q = L.target instanceof Element ? L.target : L.currentTarget, J = L.currentTarget.hasPointerCapture(L.pointerId) || q.hasPointerCapture(L.pointerId);
    if (!d.current && Ii(L, J || Pi()) && (m(), n.current.clear(), F.current = null, ce(
      E.current,
      X.current,
      null,
      s.current,
      window.devicePixelRatio || 1
    ), p({ kind: "none" }), K !== "draw" && K !== "highlighter" && K !== "eraser" && (K = "draw", c.current = "draw", w("draw")), S(!0)), !Ei(d.current, L)) {
      L.cancelable && L.preventDefault();
      return;
    }
    if (d.current && !hn(L)) return;
    const at = L.target instanceof Element ? L.target : null, lt = !!(at != null && at.closest("[data-canvas-editor]")) && o.current !== null;
    n.current.set(L.pointerId, { x: L.clientX, y: L.clientY });
    const Ct = r.current;
    if (Ct.kind === "drawing" && Ct.pointerId !== L.pointerId) {
      n.current.delete(L.pointerId);
      return;
    }
    !lt && L.cancelable && L.preventDefault();
    const le = L.currentTarget;
    try {
      le.setPointerCapture(L.pointerId);
    } catch {
    }
    if (n.current.size === 2) {
      const [Z, ot] = [...n.current.values()], xt = s.current;
      p({
        kind: "pinch",
        startDist: Math.hypot(ot.x - Z.x, ot.y - Z.y) || 1,
        startZoom: xt.z,
        startMidX: (Z.x + ot.x) / 2,
        startMidY: (Z.y + ot.y) / 2,
        camX: xt.x,
        camY: xt.y
      });
      return;
    }
    if (n.current.size > 2) return;
    if (L.button === 1 || v || K === "hand" || L.button === 0 && K === "select" && L.altKey) {
      p({ kind: "pan", startX: L.clientX, startY: L.clientY, camX: i.x, camY: i.y });
      return;
    }
    if (L.button !== 0) return;
    const et = I(L.clientX, L.clientY);
    if (lt || (k(null), (Xt = e.current) == null || Xt.blur(), (Wt = t.current) == null || Wt.focus()), K === "draw" || K === "highlighter") {
      const Z = {
        id: Y(),
        type: "draw",
        x: et.x,
        y: et.y,
        w: 0,
        h: 0,
        points: [[et.x, et.y]],
        color: u.current,
        strokeWidth: h,
        drawMode: K === "highlighter" ? "highlighter" : "pen"
      };
      F.current = Z, ce(E.current, X.current, Z, s.current, window.devicePixelRatio || 1), p({ kind: "drawing", id: Z.id, pointerId: L.pointerId });
      return;
    }
    if (K === "arrow" || K === "frame" || jr.includes(K)) {
      const Z = K, ot = K === "arrow" ? { id: Y(), type: "arrow", x: et.x, y: et.y, w: 0, h: 0, color: f.current } : K === "frame" ? { id: Y(), type: "frame", x: et.x, y: et.y, w: 0, h: 0, text: "프레임" } : { id: Y(), type: Z, x: et.x, y: et.y, w: 0, h: 0, color: f.current, text: "" };
      b(), y((xt) => [...xt, ot]), p({ kind: "creating", id: ot.id, startX: et.x, startY: et.y });
      return;
    }
    if (K === "note" || K === "text") return;
    if (K === "eraser") {
      b(), y((Z) => Do(Z, et.x, et.y, xn, i.z)), p({ kind: "erasing", lastX: et.x, lastY: et.y });
      return;
    }
    const Pt = new Map(l.map((Z) => [Z.id, Z])), It = o.current ? l.find((Z) => Z.id === o.current) : void 0, tt = lt && It ? It : [...l].reverse().find((Z) => nn(Z, et.x, et.y, i.z, Pt, l));
    if (!tt)
      N.current = null;
    else {
      const Z = Date.now(), ot = !L.shiftKey && C.includes(tt.type) && ((ht = N.current) == null ? void 0 : ht.id) === tt.id && Z - N.current.time < Di, xt = ot ? tt.id : void 0;
      N.current = ot ? null : { id: tt.id, time: Z };
      const ft = L.shiftKey ? new Set(x).add(tt.id) : x.has(tt.id) ? x : /* @__PURE__ */ new Set([tt.id]), Dt = A(ft);
      g(Dt);
      const Et = /* @__PURE__ */ new Map();
      for (const bt of l) Dt.has(bt.id) && Et.set(bt.id, bt);
      for (const bt of l) {
        if (bt.type !== "frame" || !Dt.has(bt.id)) continue;
        const z = gt(bt);
        for (const _ of l) {
          if (_.id === bt.id || Et.has(_.id)) continue;
          const Q = At(_);
          Q.x >= z.minX && Q.x <= z.maxX && Q.y >= z.minY && Q.y <= z.maxY && Et.set(_.id, _);
        }
      }
      b(), p({ kind: "move", startX: et.x, startY: et.y, origin: Et, editOnReleaseId: xt });
      return;
    }
    L.shiftKey || g(/* @__PURE__ */ new Set()), p({
      kind: "marquee",
      startX: et.x,
      startY: et.y,
      curX: et.x,
      curY: et.y,
      screenStartX: L.clientX,
      screenStartY: L.clientY
    });
  }, onResizeHandleDown: (L, K, q) => {
    L.stopPropagation(), n.current.set(L.pointerId, { x: L.clientX, y: L.clientY }), b(), p({ kind: "resize", id: K.id, handle: q, start: K });
  }, onRotateHandleDown: (L, K) => {
    L.stopPropagation(), n.current.set(L.pointerId, { x: L.clientX, y: L.clientY });
    const q = I(L.clientX, L.clientY), J = At(K);
    b(), p({
      kind: "rotate",
      id: K.id,
      startAngle: Math.atan2(q.y - J.y, q.x - J.x),
      startRotation: K.rotation ?? 0
    });
  }, onConnectHandleDown: (L, K) => {
    L.stopPropagation(), n.current.set(L.pointerId, { x: L.clientX, y: L.clientY });
    const q = I(L.clientX, L.clientY);
    p({ kind: "connect", fromId: K.id, toX: q.x, toY: q.y, hoverId: null });
  }, onBendHandleDown: (L, K) => {
    L.stopPropagation(), n.current.set(L.pointerId, { x: L.clientX, y: L.clientY }), b(), p({ kind: "bend", id: K.id });
  }, onOrthogonalSegmentHandleDown: (L, K, q) => {
    L.stopPropagation(), n.current.set(L.pointerId, { x: L.clientX, y: L.clientY }), b(), p({ kind: "orthogonal-segment", id: K.id, segmentIndex: q });
  }, onArrowEndpointDown: (L, K, q) => {
    L.stopPropagation(), n.current.set(L.pointerId, { x: L.clientX, y: L.clientY }), b(), p({ kind: "arrow-endpoint", id: K.id, endpoint: q, hoverId: null });
  } };
}
function Hi({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: r,
  shapesRef: o,
  setShapes: s,
  setEditingId: a,
  setEraserPos: c,
  setGuides: d,
  setAnnouncement: f,
  applyInteraction: u,
  selectNow: h,
  endHistory: i,
  commit: l,
  onToolChange: x,
  createId: v,
  pendingDrawPointsRef: C,
  drawRafRef: y,
  liveStrokeCanvasRef: k,
  activeDrawRef: p,
  pendingDrawsRef: g,
  queuedDrawIdsRef: b,
  commitDrawBatch: m
}) {
  const M = v, w = nt(null);
  Tt(() => {
    const A = (I) => {
      var E, F;
      t.current.delete(I.pointerId);
      try {
        (F = (E = I.target) == null ? void 0 : E.releasePointerCapture) == null || F.call(E, I.pointerId);
      } catch {
      }
      const $ = e.current;
      if ($.kind !== "none") {
        if ($.kind === "pinch") {
          t.current.size < 2 && u({ kind: "none" });
          return;
        }
        if (d([]), $.kind === "erasing") {
          if (I.type === "pointerup") {
            const X = r(I.clientX, I.clientY);
            s((S) => un(
              S,
              { x: $.lastX, y: $.lastY },
              X,
              xn,
              n.current.z
            ));
          }
          c(null), i(), u({ kind: "none" });
          return;
        }
        if ($.kind === "connect") {
          const S = o.current.find((T) => T.id === $.fromId);
          if (u({ kind: "none" }), !S) return;
          const Y = { x: $.toX, y: $.toY }, N = At(S);
          if (!$.hoverId && Math.hypot(Y.x - N.x, Y.y - N.y) < 30) return;
          const W = [];
          let D = $.hoverId;
          if (!D) {
            const T = S.type === "note" ? 180 : 200, B = S.type === "note" ? 180 : 120, R = {
              ...S,
              id: M(),
              x: Y.x - T / 2,
              y: Y.y - B / 2,
              w: T,
              h: B,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            W.push(R), D = R.id;
          }
          const O = {
            id: M(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: S.id,
            toId: D,
            text: ""
          };
          W.push(O), l((T) => [...T, ...W]), h(/* @__PURE__ */ new Set([O.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => a(O.id)) : a(O.id), f("연결 생성됨");
          return;
        }
        if ($.kind === "bend") {
          i(), u({ kind: "none" });
          return;
        }
        if ($.kind === "drawing") {
          if ($.pointerId !== I.pointerId) return;
          y.current !== null && (cancelAnimationFrame(y.current), y.current = null);
          const X = C.current.splice(0), S = p.current;
          if (S && S.id === $.id && S.points) {
            if (on(S.points, X, n.current.z), I.type === "pointerup") {
              const N = r(I.clientX, I.clientY);
              on(S.points, [[N.x, N.y]], n.current.z);
            }
            const Y = Li(S);
            g.current = [...g.current, Y], p.current = null, ce(k.current, g.current, null, n.current, window.devicePixelRatio || 1), w.current === null && (w.current = requestAnimationFrame(() => {
              w.current = null;
              const N = g.current.filter((W) => !b.current.has(W.id));
              if (N.length !== 0) {
                for (const W of N) b.current.add(W.id);
                m(N);
              }
            }));
          }
          u({ kind: "none" });
          return;
        }
        if ($.kind === "creating") {
          s((X) => X.map((S) => {
            if (S.id !== $.id) return S;
            const Y = Math.abs(S.w) < 4 && Math.abs(S.h) < 4 ? {
              ...S,
              w: S.type === "arrow" ? 200 : S.type === "frame" ? 480 : 180,
              h: S.type === "arrow" ? 0 : S.type === "frame" ? 320 : 120
            } : S;
            if (Y.type === "arrow") return Y;
            const N = jt(Y);
            return { ...Y, x: N.minX, y: N.minY, w: N.maxX - N.minX, h: N.maxY - N.minY };
          })), i(), h(/* @__PURE__ */ new Set([$.id])), x("select"), u({ kind: "none" });
          return;
        }
        if (($.kind === "move" || $.kind === "resize" || $.kind === "rotate" || $.kind === "orthogonal-segment" || $.kind === "arrow-endpoint") && i(), $.kind === "move" && $.editOnReleaseId && I.type === "pointerup") {
          const X = r(I.clientX, I.clientY);
          Math.hypot(X.x - $.startX, X.y - $.startY) * n.current.z <= Wi && a($.editOnReleaseId);
        }
        u({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", A), window.addEventListener("pointercancel", A), () => {
      window.removeEventListener("pointerup", A), window.removeEventListener("pointercancel", A);
    };
  }, [
    p,
    u,
    n,
    m,
    v,
    y,
    i,
    e,
    k,
    x,
    C,
    g,
    t,
    b,
    h,
    f,
    a,
    d,
    c,
    s,
    o,
    r,
    l
  ]);
}
function _i({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: r,
  shapesRef: o,
  setCamera: s,
  setShapes: a,
  setEraserPos: c,
  setGuides: d,
  applyInteraction: f,
  selectNow: u,
  expandToGroups: h,
  toPage: i,
  pendingDrawPointsRef: l,
  drawRafRef: x,
  liveStrokeCanvasRef: v,
  activeDrawRef: C,
  pendingDrawsRef: y
}) {
  Tt(() => () => {
    x.current !== null && cancelAnimationFrame(x.current);
  }, [x]), Tt(() => {
    const k = (b, m) => {
      const M = C.current;
      if (!M || M.id !== m || !M.points) return;
      const w = i(b.clientX, b.clientY);
      if (b.shiftKey) {
        x.current !== null && (cancelAnimationFrame(x.current), x.current = null), l.current = [];
        const I = M.points[0];
        I && (M.points = [I, [w.x, w.y]]), ce(v.current, y.current, M, r.current, window.devicePixelRatio || 1);
        return;
      }
      const A = typeof b.getCoalescedEvents == "function" ? b.getCoalescedEvents() : [];
      for (const I of A) {
        const $ = i(I.clientX, I.clientY);
        l.current.push([$.x, $.y]);
      }
      l.current.push([w.x, w.y]), x.current === null && (x.current = requestAnimationFrame(() => {
        x.current = null;
        const I = l.current;
        if (I.length === 0) return;
        l.current = [];
        const $ = C.current;
        !$ || $.id !== m || !$.points || (on($.points, I, r.current.z), ce(v.current, y.current, $, r.current, window.devicePixelRatio || 1));
      }));
    }, p = (b) => {
      var A, I;
      e.current.has(b.pointerId) && e.current.set(b.pointerId, { x: b.clientX, y: b.clientY });
      const m = n.current;
      if (m.kind === "none") return;
      const M = r.current;
      if (m.kind === "pinch") {
        if (e.current.size < 2) return;
        const [$, E] = [...e.current.values()], F = Math.hypot(E.x - $.x, E.y - $.y) || 1, X = ($.x + E.x) / 2, S = ($.y + E.y) / 2, Y = (A = t.current) == null ? void 0 : A.getBoundingClientRect();
        if (!Y) return;
        const N = Math.min(Ai, Math.max(Fi, m.startZoom * (F / m.startDist))), W = m.camX + (m.startMidX - Y.left) / m.startZoom, D = m.camY + (m.startMidY - Y.top) / m.startZoom;
        s({ x: W - (X - Y.left) / N, y: D - (S - Y.top) / N, z: N });
        return;
      }
      if (m.kind === "pan") {
        s({
          x: m.camX - (b.clientX - m.startX) / M.z,
          y: m.camY - (b.clientY - m.startY) / M.z,
          z: M.z
        });
        return;
      }
      const w = i(b.clientX, b.clientY);
      if (m.kind === "erasing") {
        const E = (typeof b.getCoalescedEvents == "function" ? b.getCoalescedEvents() : []).map((S) => i(S.clientX, S.clientY));
        E.push(w);
        const F = [{ x: m.lastX, y: m.lastY }, ...E];
        a((S) => {
          let Y = S;
          for (let N = 1; N < F.length; N++)
            Y = un(Y, F[N - 1], F[N], xn, M.z);
          return Y;
        });
        const X = E.at(-1);
        X && (c(X), f({ kind: "erasing", lastX: X.x, lastY: X.y }));
        return;
      }
      if (m.kind === "connect") {
        const $ = o.current, E = new Map($.map((X) => [X.id, X])), F = [...$].reverse().find((X) => X.id !== m.fromId && Kn.includes(X.type) && nn(X, w.x, w.y, M.z, E, $));
        f({ ...m, toX: w.x, toY: w.y, hoverId: (F == null ? void 0 : F.id) ?? null });
        return;
      }
      if (m.kind === "bend") {
        const $ = o.current, E = $.find((O) => O.id === m.id);
        if (!E) return;
        const F = Ft(E, new Map($.map((O) => [O.id, O])), $), X = F.end.x - F.start.x, S = F.end.y - F.start.y, Y = Math.hypot(X, S) || 1, N = (F.start.x + F.end.x) / 2, W = (F.start.y + F.end.y) / 2, D = (w.x - N) * (-S / Y) + (w.y - W) * (X / Y);
        a((O) => O.map((T) => T.id === m.id ? { ...T, bend: D } : T));
        return;
      }
      if (m.kind === "orthogonal-segment") {
        const $ = o.current, E = $.find((D) => D.id === m.id);
        if (!E) return;
        const F = Ft(E, new Map($.map((D) => [D.id, D])), $), X = F.routing === "orthogonal" ? F.pathPoints : void 0;
        if (!X || X.length < 2) return;
        const S = X[m.segmentIndex], Y = X[m.segmentIndex + 1];
        if (!S || !Y) return;
        const N = S.x === Y.x ? w.x : w.y, W = xo(X, m.segmentIndex, N);
        a((D) => D.map((O) => O.id === m.id ? { ...O, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: W.slice(1, -1).map((T) => ({ x: T.x, y: T.y })) } : O));
        return;
      }
      if (m.kind === "arrow-endpoint") {
        const $ = o.current, E = $.find((W) => W.id === m.id);
        if (!E) return;
        const F = new Map($.map((W) => [W.id, W])), X = Ft(E, F, $), S = m.endpoint === "start" ? X.end : X.start, Y = [...$].reverse().find((W) => W.id !== E.id && Kn.includes(W.type) && nn(W, w.x, w.y, M.z, F, $)), N = Y ? ae(Y, S.x, S.y) : { x: w.x, y: w.y };
        f({ ...m, hoverId: (Y == null ? void 0 : Y.id) ?? null }), a((W) => W.map((D) => {
          if (D.id !== E.id) return D;
          const O = m.endpoint === "start" ? N : S, T = m.endpoint === "end" ? N : S;
          return {
            ...D,
            x: O.x,
            y: O.y,
            w: T.x - O.x,
            h: T.y - O.y,
            fromId: m.endpoint === "start" ? Y == null ? void 0 : Y.id : D.fromId,
            toId: m.endpoint === "end" ? Y == null ? void 0 : Y.id : D.toId
          };
        }));
        return;
      }
      if (m.kind === "marquee") {
        f({ ...m, curX: w.x, curY: w.y });
        const $ = Math.min(m.startX, w.x), E = Math.max(m.startX, w.x), F = Math.min(m.startY, w.y), X = Math.max(m.startY, w.y), S = Math.min(m.screenStartX, b.clientX), Y = Math.max(m.screenStartX, b.clientX), N = Math.min(m.screenStartY, b.clientY), W = Math.max(m.screenStartY, b.clientY), D = /* @__PURE__ */ new Map();
        (I = t.current) == null || I.querySelectorAll("[data-canvas-shape-id]").forEach((T) => {
          const B = T.dataset.canvasShapeId;
          B && D.set(B, T.getBoundingClientRect());
        });
        const O = o.current.filter((T) => {
          const B = D.get(T.id);
          if (B)
            return B.right >= S && B.left <= Y && B.bottom >= N && B.top <= W;
          const R = gt(T);
          return R.maxX >= $ && R.minX <= E && R.maxY >= F && R.minY <= X;
        }).map((T) => T.id);
        u(h(new Set(O)));
        return;
      }
      if (m.kind === "move") {
        let $ = w.x - m.startX, E = w.y - m.startY;
        const F = m.origin, X = (() => {
          let N = 1 / 0, W = 1 / 0, D = -1 / 0, O = -1 / 0;
          return F.forEach((T) => {
            const B = gt({ ...T, x: T.x + $, y: T.y + E });
            N = Math.min(N, B.minX), W = Math.min(W, B.minY), D = Math.max(D, B.maxX), O = Math.max(O, B.maxY);
          }), { minX: N, minY: W, maxX: D, maxY: O };
        })(), S = o.current.filter((N) => !F.has(N.id)), Y = Oo(X, S, M.z);
        $ += Y.dx, E += Y.dy, d(Y.guides), a((N) => N.map((W) => {
          var O;
          const D = F.get(W.id);
          return D ? {
            ...W,
            x: D.x + $,
            y: D.y + E,
            points: (O = D.points) == null ? void 0 : O.map(([T, B]) => [T + $, B + E]),
            ...D.type === "arrow" && D.orthogonalWaypoints ? { orthogonalWaypoints: D.orthogonalWaypoints.map((T) => ({ x: T.x + $, y: T.y + E })) } : {}
          } : W;
        }));
        return;
      }
      if (m.kind === "drawing") {
        if (m.pointerId !== b.pointerId) return;
        k(b, m.id);
        return;
      }
      if (m.kind === "creating") {
        a(($) => $.map((E) => E.id === m.id ? { ...E, w: w.x - m.startX, h: w.y - m.startY } : E));
        return;
      }
      if (m.kind === "rotate") {
        const $ = o.current.find((S) => S.id === m.id);
        if (!$) return;
        const E = At($), F = Math.atan2(w.y - E.y, w.x - E.x);
        let X = m.startRotation + (F - m.startAngle);
        b.shiftKey && (X = Math.round(X / (Math.PI / 12)) * (Math.PI / 12)), a((S) => S.map((Y) => Y.id === m.id ? { ...Y, rotation: X } : Y));
        return;
      }
      if (m.kind === "resize") {
        const { start: $, handle: E } = m, F = Fe($, w.x, w.y);
        a((X) => X.map((S) => {
          if (S.id !== $.id) return S;
          let { x: Y, y: N, w: W, h: D } = $;
          if (E.includes("e") && (W = Math.max(20, F.x - $.x)), E.includes("s") && (D = Math.max(20, F.y - $.y)), E.includes("w")) {
            const O = $.x + $.w;
            Y = Math.min(F.x, O - 20), W = O - Y;
          }
          if (E.includes("n")) {
            const O = $.y + $.h;
            N = Math.min(F.y, O - 20), D = O - N;
          }
          return { ...S, x: Y, y: N, w: W, h: D, manualSize: S.type === "text" ? !0 : S.manualSize };
        }));
      }
    }, g = (b) => {
      const m = n.current;
      m.kind !== "drawing" || m.pointerId !== b.pointerId || k(b, m.id);
    };
    return window.addEventListener("pointermove", p), window.addEventListener("pointerrawupdate", g), () => {
      window.removeEventListener("pointermove", p), window.removeEventListener("pointerrawupdate", g);
    };
  }, [
    C,
    f,
    r,
    t,
    x,
    h,
    n,
    v,
    l,
    y,
    e,
    u,
    o,
    i
  ]);
}
function Bi(t) {
  const e = nt([]), n = nt(null), r = { ...t, pendingDrawPointsRef: e, drawRafRef: n };
  _i(r), Hi(r);
}
function Ki({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: r,
  editingIdRef: o,
  cameraRef: s,
  shapesRef: a,
  toolRef: c,
  penModeRef: d,
  activeColorRef: f,
  drawColorRef: u,
  drawStrokeWidth: h,
  camera: i,
  shapes: l,
  selected: x,
  isSpaceDown: v,
  textualTypes: C,
  setCamera: y,
  setShapes: k,
  setEditingId: p,
  setEraserPos: g,
  setGuides: b,
  setAnnouncement: m,
  applyInteraction: M,
  selectNow: w,
  beginHistory: A,
  endHistory: I,
  cancelHistory: $,
  commit: E,
  onToolChange: F,
  expandToGroups: X,
  toPage: S,
  createId: Y,
  liveStrokeCanvasRef: N,
  activeDrawRef: W,
  pendingDrawsRef: D,
  queuedDrawIdsRef: O,
  commitDrawBatch: T,
  setIsPenMode: B
}) {
  const R = Oi({
    containerRef: t,
    editorRef: e,
    pointers: n,
    interactionRef: r,
    editingIdRef: o,
    cameraRef: s,
    shapesRef: a,
    toolRef: c,
    penModeRef: d,
    activeColorRef: f,
    drawColorRef: u,
    drawStrokeWidth: h,
    camera: i,
    shapes: l,
    selected: x,
    isSpaceDown: v,
    textualTypes: C,
    setShapes: k,
    setEditingId: p,
    applyInteraction: M,
    selectNow: w,
    beginHistory: A,
    cancelHistory: $,
    commit: E,
    onToolChange: F,
    expandToGroups: X,
    toPage: S,
    createId: Y,
    liveStrokeCanvasRef: N,
    activeDrawRef: W,
    pendingDrawsRef: D,
    setIsPenMode: B
  });
  return Bi({
    containerRef: t,
    pointers: n,
    interactionRef: r,
    cameraRef: s,
    shapesRef: a,
    setCamera: y,
    setShapes: k,
    setEditingId: p,
    setEraserPos: g,
    setGuides: b,
    setAnnouncement: m,
    applyInteraction: M,
    selectNow: w,
    endHistory: I,
    commit: E,
    onToolChange: F,
    expandToGroups: X,
    toPage: S,
    createId: Y,
    liveStrokeCanvasRef: N,
    activeDrawRef: W,
    pendingDrawsRef: D,
    queuedDrawIdsRef: O,
    commitDrawBatch: T
  }), R;
}
function ji(t) {
  Si(t);
  const e = Ht(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return Ni({ ...t, toolRef: e }), Ki(t);
}
function Ui({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: r,
  zoom: o
}) {
  const s = n || r.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", a = t ? G.gridDark : G.gridLight, c = 40 * o;
  return { cursor: s, gridColor: a, gridSize: c, strokeColorOf: (f) => f.strokeColor ? sr(f) : f.color ? dt[f.color].border : t ? "var(--canvas-slate-200)" : G.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = co, document.head.appendChild(t);
}
const jn = 0.1, Un = 4, Vn = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function kr(t) {
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
        return kr(r);
    }
  });
}
function Rn(t, e, n) {
  return t.map((r) => e.has(r.id) && r.type === "draw" ? { ...r, ...n } : r);
}
function qn(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const Qi = Dr(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: r,
  activeColor: o,
  defaultActiveColor: s,
  onActiveColorChange: a,
  drawStrokeWidth: c = 4,
  onToolChange: d,
  onDirty: f,
  onZoomChange: u,
  onSelectionChange: h,
  shapes: i,
  onShapesChange: l,
  peerCursors: x,
  onLocalCursor: v,
  renderDiagram: C
}, y) {
  var gn, yn;
  const [k, p] = Bt.useState(c);
  Bt.useEffect(() => p(c), [c]);
  const {
    containerRef: g,
    editorRef: b,
    setLocalShapes: m,
    controlled: M,
    shapes: w,
    setShapes: A,
    camera: I,
    setCamera: $,
    cameraRef: E,
    selected: F,
    selectedRef: X,
    editingId: S,
    setEditingId: Y,
    editingIdRef: N,
    interaction: W,
    interactionRef: D,
    applyInteraction: O,
    isSpaceDown: T,
    setIsSpaceDown: B,
    guides: R,
    setGuides: it,
    announcement: yt,
    setAnnouncement: L,
    showInspectorPalette: K,
    setShowInspectorPalette: q,
    eraserPos: J,
    setEraserPos: at,
    isPenMode: lt,
    setIsPenMode: Ct,
    penModeRef: le,
    setActiveColor: et,
    activeColorRef: Pt,
    drawColor: It,
    setDrawColor: tt,
    drawColorRef: Xt,
    installedFontFamilies: Wt,
    pointers: ht,
    past: Z,
    future: ot,
    selectNow: xt,
    commit: ft,
    deleteSelection: Dt,
    beginHistory: Et,
    endHistory: bt,
    cancelHistory: z,
    toPage: _,
    viewportCentre: Q,
    expandToGroups: pt,
    toolRef: wt,
    shapesRef: kt,
    liveStrokeCanvasRef: ee,
    activeDrawRef: Ut,
    pendingDrawsRef: Lt,
    queuedDrawIdsRef: ve,
    commitDrawBatch: He
  } = gi({ boardIdentity: e, tool: r, activeColor: o, defaultActiveColor: s, onActiveColorChange: a, controlledShapes: i, onShapesChange: l, onDirty: f });
  oe(() => {
    const rt = ee.current, Yt = g.current;
    if (!rt || !Yt) return;
    const vt = () => {
      const Ce = Ti(rt, Yt.clientWidth, Yt.clientHeight, window.devicePixelRatio || 1), Se = new Set(w.map((ue) => ue.id));
      Lt.current = Lt.current.filter((ue) => !Se.has(ue.id));
      for (const ue of Se) ve.current.delete(ue);
      ce(rt, Lt.current, Ut.current, E.current, Ce);
    };
    if (vt(), typeof ResizeObserver > "u")
      return window.addEventListener("resize", vt), () => window.removeEventListener("resize", vt);
    const Rt = new ResizeObserver(vt);
    return Rt.observe(Yt), window.addEventListener("resize", vt), () => {
      Rt.disconnect(), window.removeEventListener("resize", vt);
    };
  }, [Ut, I, E, g, ee, Lt, ve, w]);
  const $e = bi({
    containerRef: g,
    shapesRef: kt,
    selectedRef: X,
    commit: ft,
    deleteSelection: Dt,
    selectNow: xt,
    setAnnouncement: L,
    createId: qn
  }), {
    inspectorSelection: pe,
    inspectorShape: ze,
    onContainerPointerMove: _e,
    onContainerPointerLeave: Be
  } = yi({
    containerRef: g,
    camera: I,
    setCamera: $,
    minZoom: jn,
    maxZoom: Un,
    shapes: w,
    selected: F,
    editingId: S,
    textualTypes: Vn,
    onZoomChange: u,
    onSelectionChange: h,
    onLocalCursor: v,
    toPage: _
  }), me = Bt.useCallback((rt) => {
    const Yt = new Set(X.current);
    Yt.size !== 0 && ft((vt) => Gn(vt, Yt, rt));
  }, [ft, X]), H = Bt.useCallback((rt) => {
    p(rt), me(rt);
  }, [me]), V = Bt.useCallback((rt) => {
    tt(rt);
    const Yt = new Set(
      kt.current.filter((vt) => vt.type === "draw" && X.current.has(vt.id)).map((vt) => vt.id)
    );
    Yt.size > 0 && ft((vt) => Rn(vt, Yt, { color: rt }));
  }, [ft, X, tt, kt]), {
    onPointerDown: U,
    onResizeHandleDown: st,
    onRotateHandleDown: Vt,
    onConnectHandleDown: Gt,
    onBendHandleDown: Ke,
    onOrthogonalSegmentHandleDown: Mr,
    onArrowEndpointDown: $r
  } = ji({
    ref: y,
    containerRef: g,
    editorRef: b,
    pointers: ht,
    interactionRef: D,
    cameraRef: E,
    shapesRef: kt,
    toolRef: wt,
    penModeRef: le,
    activeColorRef: Pt,
    drawColorRef: Xt,
    setDrawColor: tt,
    setActiveColor: et,
    drawStrokeWidth: k,
    setSelectedStrokeWidth: me,
    camera: I,
    shapes: w,
    selected: F,
    isSpaceDown: T,
    setCamera: $,
    setShapes: A,
    setEditingId: Y,
    setEraserPos: at,
    setGuides: it,
    setAnnouncement: L,
    applyInteraction: O,
    selectNow: xt,
    selectionActions: $e,
    past: Z,
    future: ot,
    beginHistory: Et,
    endHistory: bt,
    cancelHistory: z,
    commit: ft,
    deleteSelection: Dt,
    onDirty: f,
    onToolChange: d,
    controlled: M,
    isDarkMode: n,
    minZoom: jn,
    maxZoom: Un,
    textualTypes: Vn,
    selectedRef: X,
    editingIdRef: N,
    setIsSpaceDown: B,
    viewportCentre: Q,
    setLocalShapes: m,
    expandToGroups: pt,
    toPage: _,
    createId: qn,
    liveStrokeCanvasRef: ee,
    activeDrawRef: Ut,
    pendingDrawsRef: Lt,
    queuedDrawIdsRef: ve,
    commitDrawBatch: He,
    setIsPenMode: Ct
  }), { cursor: zr, gridColor: Cr, gridSize: fn, strokeColorOf: Sr } = Ui({
    isDarkMode: n,
    tool: r === "highlighter" ? "draw" : r,
    isSpaceDown: T,
    interaction: W,
    zoom: I.z
  }), vn = (rt) => {
    const Yt = X.current, vt = N.current, Rt = new Set(Yt);
    if (vt && Rt.add(vt), Rt.size === 0) return;
    const Ce = "strokeWidth" in rt, Se = Object.keys(rt).every((Mt) => Mt === "color" || Mt === "fillColor" || Mt === "strokeColor" || Mt === "strokeWidth");
    if (pe.length > 0 && pe.every((Mt) => Mt.type === "draw") && Se) {
      const Mt = "color" in rt ? rt.color : void 0, St = "strokeWidth" in rt ? rt.strokeWidth : void 0, bn = "strokeColor" in rt ? rt.strokeColor : void 0;
      ft((Ar) => Rn(Ar, Rt, {
        ...Mt !== void 0 ? { color: Mt } : {},
        ...St !== void 0 ? { strokeWidth: St } : {},
        ...bn !== void 0 ? { strokeColor: bn } : {}
      }));
      return;
    }
    if (Ce) {
      const Mt = rt.strokeWidth;
      if (Mt !== void 0 && Object.keys(rt).length === 1) {
        ft((St) => Gn(St, Rt, Mt));
        return;
      }
    }
    ft((Mt) => Mt.map((St) => {
      if (!Rt.has(St.id)) return St;
      if (!Ce) return { ...St, ...rt };
      switch (St.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...St, ...rt };
        case "note":
        case "card":
        case "text":
        case "image":
          return St;
        case "draw":
          return { ...St, ...rt };
        default:
          return kr(St);
      }
    }));
  }, {
    commitEditorHtml: Xr,
    applyFormat: Yr,
    applyList: Nr,
    onEditorKeyDown: Pr,
    applyCustomFontFamily: Ir
  } = mi({
    editorRef: b,
    editingId: S,
    setShapes: A,
    setAnnouncement: L,
    onDirty: f,
    patchSelected: vn
  }), { renderEditor: Er, renderShapeBody: Lr } = vi({
    camera: I,
    editingId: S,
    isDarkMode: n,
    editorRef: b,
    commitEditorHtml: Xr,
    onEditorKeyDown: Pr,
    setShapes: A,
    onDirty: f,
    renderDiagram: C
  }), Tr = W.kind === "marquee" ? W : null, Fr = Bt.useCallback(() => {
    var rt;
    ht.current.clear(), Ut.current = null, O({ kind: "none" }), ce(
      ee.current,
      Lt.current,
      null,
      E.current,
      window.devicePixelRatio || 1
    ), Ct(!1), d("select"), (rt = g.current) == null || rt.focus();
  }, [
    Ut,
    O,
    E,
    g,
    ee,
    d,
    Lt,
    ht,
    Ct
  ]), { shapeById: pn, visiblePaintOrder: mn } = pi({
    containerRef: g,
    shapesRef: kt,
    shapes: w,
    camera: I,
    selected: F,
    editingId: S,
    boardIdentity: e
  });
  return /* @__PURE__ */ j(
    "div",
    {
      ref: g,
      onPointerDown: U,
      onPointerMove: _e,
      onPointerLeave: Be,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": r,
      "data-canvas-pen-mode": lt ? "true" : "false",
      "data-canvas-camera-x": I.x,
      "data-canvas-camera-y": I.y,
      "data-canvas-camera-z": I.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
        cursor: zr,
        background: n ? G.canvasDark : G.canvasLight,
        backgroundImage: `radial-gradient(${Cr} 1px, transparent 1px)`,
        backgroundSize: `${fn}px ${fn}px`,
        backgroundPosition: `${-I.x * I.z}px ${-I.y * I.z}px`
      },
      children: [
        /* @__PURE__ */ P("style", { children: '.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas .canvas-rich-text ul>li::before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style="dash"]>li::before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li::before{content:counter(canvas-list-item) ". "}' }),
        /* @__PURE__ */ P(
          "div",
          {
            "aria-live": "polite",
            role: "status",
            className: "absolute w-px h-px overflow-hidden whitespace-nowrap",
            style: { clip: "rect(0 0 0 0)", clipPath: "inset(50%)" },
            children: yt
          }
        ),
        /* @__PURE__ */ P(
          _o,
          {
            visiblePaintOrder: mn,
            selected: F,
            shapeById: pn,
            allShapes: kt.current,
            camera: I,
            interaction: W,
            eraserPos: J,
            guides: R,
            marquee: Tr,
            strokeColorOf: Sr
          }
        ),
        /* @__PURE__ */ P("canvas", { ref: ee, "aria-hidden": "true", "data-canvas-live-strokes": "true", className: "absolute inset-0 w-full h-full pointer-events-none" }),
        /* @__PURE__ */ P(
          ri,
          {
            visiblePaintOrder: mn,
            selected: F,
            editingId: S,
            camera: I,
            shapeById: pn,
            allShapes: kt.current,
            peerCursors: x,
            isDarkMode: n,
            renderEditor: Er,
            renderShapeBody: Lr,
            setEditingId: Y,
            onBendHandleDown: Ke,
            onOrthogonalSegmentHandleDown: Mr,
            onResizeHandleDown: st,
            onRotateHandleDown: Vt,
            onConnectHandleDown: Gt,
            onArrowEndpointDown: $r
          }
        ),
        ze && /* @__PURE__ */ P(
          di,
          {
            shape: ze,
            selection: pe,
            selectionActions: $e,
            shapes: w,
            camera: I,
            canvasSize: { width: ((gn = g.current) == null ? void 0 : gn.clientWidth) ?? 380, height: ((yn = g.current) == null ? void 0 : yn.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!S,
            showPalette: K,
            installedFontFamilies: Wt,
            setShowPalette: q,
            setActiveColor: et,
            patchSelected: vn,
            applyFormat: Yr,
            applyList: Nr,
            applyCustomFontFamily: Ir
          }
        ),
        lt && /* @__PURE__ */ P(fi, { isDarkMode: n, onExit: Fr }),
        /* @__PURE__ */ P(
          xi,
          {
            tool: r,
            activeColor: It,
            drawStrokeWidth: k,
            isDarkMode: n,
            onSelectColor: V,
            onSelectStrokeWidth: H
          }
        )
      ]
    }
  );
});
export {
  dt as CANVAS_COLORS,
  Zn as CANVAS_COLOR_KEYS,
  Ot as CANVAS_FONTS,
  Qi as InfiniteCanvas,
  jr as SHAPE_TOOLS,
  Rn as applySelectedDrawStyle,
  Gn as applySelectedStrokeWidth,
  Zi as diagramTemplate,
  oi as getInspectorGroups,
  dn as isDiagramShape
};
