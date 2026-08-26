import { jsx as Y, jsxs as U, Fragment as Jt } from "react/jsx-runtime";
import Ye, { useState as it, useRef as J, useEffect as Pt, useLayoutEffect as te, useMemo as Ft, useCallback as ht, useImperativeHandle as So, forwardRef as Xo } from "react";
import { p as Yo, i as tn, k as en, a as at, v as No, c as Tt, s as Po, b as Kn, d as oe, h as Io, C as Lo, S as Eo } from "./document-CLNFlHux.js";
import { Minus as To, Plus as Fo, ChevronDown as Ao, AlignLeft as Wo, AlignCenter as Do, AlignRight as Oo, List as Ho, ListOrdered as _o, Bold as Bo, Italic as Ko, Underline as jo, Group as Uo, Ungroup as Vo, Copy as Go, Trash2 as Ro } from "lucide-react";
const qo = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', V = Object.freeze({
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
}), jn = 12;
function Ve(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function ke(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function Me(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function $e(t, e, n, o) {
  const c = Me(t, e, n), a = Me(t, e, o), s = Me(n, o, t), d = Me(n, o, e);
  return Math.abs(c) < 1e-6 && ke(t, n, e) || Math.abs(a) < 1e-6 && ke(t, o, e) || Math.abs(s) < 1e-6 && ke(n, t, o) || Math.abs(d) < 1e-6 && ke(n, e, o) ? !0 : c > 0 != a > 0 && s > 0 != d > 0;
}
function Zo(t, e, n) {
  const o = Math.min(t.x, e.x), r = Math.max(t.x, e.x), c = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
  if (r < n.minX || o > n.maxX || a < n.minY || c > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const s = { x: n.minX, y: n.minY }, d = { x: n.maxX, y: n.minY }, m = { x: n.maxX, y: n.maxY }, u = { x: n.minX, y: n.maxY };
  return $e(t, e, s, d) || $e(t, e, d, m) || $e(t, e, m, u) || $e(t, e, u, s);
}
function Qo(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const o of e)
      if (Zo(t[n - 1], t[n], o)) return !0;
  return !1;
}
function Ge(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function nn(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = Ge(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let o = 0;
  for (let c = 1; c < t.length; c++) {
    const a = Math.hypot(t[c].x - t[c - 1].x, t[c].y - t[c - 1].y);
    if (o + a >= n) {
      const s = (n - o) / a;
      return { x: t[c - 1].x + (t[c].x - t[c - 1].x) * s, y: t[c - 1].y + (t[c].y - t[c - 1].y) * s };
    }
    o += a;
  }
  const r = t[t.length - 1];
  return { x: r.x, y: r.y };
}
function fe(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function pn(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([t, e]), c = Math.min(t, e), a = Math.max(t, e), s = jn * 1.2;
  for (const d of n) {
    const m = (o === "x" ? d.minX : d.minY) - s, u = (o === "x" ? d.maxX : d.maxY) + s, h = (i) => i >= c - s * 4 && i <= a + s * 4;
    h(m) && r.add(m), h(u) && r.add(u);
  }
  return [...r].sort((d, m) => Math.abs(d - t) - Math.abs(m - t));
}
function Un(t) {
  const e = [];
  for (const n of t) {
    const o = e[e.length - 1];
    (!o || o.x !== n.x || o.y !== n.y) && e.push(n);
  }
  return e;
}
function Vn(t) {
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
function Jo(t, e, n) {
  const o = [t];
  for (const r of [...n, e]) {
    const c = o[o.length - 1];
    if (!c) {
      o.push(r);
      continue;
    }
    if (c.x === r.x || c.y === r.y) {
      o.push(r);
      continue;
    }
    o.push({ x: r.x, y: c.y }, r);
  }
  return Vn(o);
}
function tr(t, e, n) {
  const o = t[e], r = t[e + 1];
  if (!o || !r || !Number.isFinite(n) || o.x !== r.x && o.y !== r.y) return [...t];
  const c = o.x === r.x ? [o, { x: n, y: o.y }, { x: n, y: r.y }, r] : [o, { x: o.x, y: n }, { x: r.x, y: n }, r];
  return Vn([
    ...t.slice(0, e),
    ...c,
    ...t.slice(e + 2)
  ]);
}
function Oe(t, e) {
  const n = [], o = [];
  for (const c of t) {
    const a = Un(c);
    a.length < 2 || (Qo(a, e) ? o.push(a) : n.push(a));
  }
  const r = n.length > 0 ? n : o;
  return r.length === 0 ? [] : r.reduce((c, a) => Ge(a) < Ge(c) ? a : c);
}
function vn(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function ae(t, e, n, o) {
  const r = Math.min(t, e), c = Math.max(t, e), a = Math.max(48, Math.abs(e - t) * 0.35, jn * 4);
  if (o === "x") {
    if (n === "e") return c + a;
    if (n === "w") return r - a;
  } else {
    if (n === "s") return c + a;
    if (n === "n") return r - a;
  }
  return t <= e ? r - a : c + a;
}
function er(t, e, n, o, r) {
  const c = (t.x + e.x) / 2, a = (t.y + e.y) / 2;
  if (n === "u") {
    if (o) {
      const d = ae(t.x, e.x, t.side, "x");
      return [t, { x: d, y: t.y }, { x: d, y: e.y }, e];
    }
    const s = ae(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: s }, { x: e.x, y: s }, e];
  }
  if (n === "zigzag") {
    if (o) {
      const m = ae(t.x, e.x, t.side, "x"), u = ae(t.y, e.y, t.side, "y");
      return r ? [t, { x: m, y: t.y }, { x: m, y: u }, { x: c, y: u }, { x: c, y: e.y }, e] : [t, { x: m, y: t.y }, { x: m, y: u }, { x: e.x, y: u }, e];
    }
    const s = ae(t.y, e.y, t.side, "y"), d = ae(t.x, e.x, t.side, "x");
    return r ? [t, { x: t.x, y: s }, { x: d, y: s }, { x: d, y: e.y }, e] : [t, { x: t.x, y: s }, { x: d, y: s }, { x: d, y: a }, { x: e.x, y: a }, e];
  }
  return [];
}
function Gn(t, e, n = [], o = "elbow", r = []) {
  if (r.length > 0) return Jo(t, e, r);
  const c = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), a = e.side ?? (c === "e" || c === "w" ? "w" : "n"), s = c === "e" || c === "w", d = a === "e" || a === "w", m = pn(t.x, e.x, n, "x"), u = pn(t.y, e.y, n, "y"), h = [];
  if (s && d) {
    for (const p of m) h.push([t, { x: p, y: t.y }, { x: p, y: e.y }, e]);
    for (const p of u) h.push([t, { x: t.x, y: p }, { x: e.x, y: p }, e]);
  } else if (!s && !d) {
    for (const p of u) h.push([t, { x: t.x, y: p }, { x: e.x, y: p }, e]);
    for (const p of m) h.push([t, { x: p, y: t.y }, { x: p, y: e.y }, e]);
  } else if (s) {
    h.push([t, { x: e.x, y: t.y }, e]);
    for (const p of u)
      h.push([t, { x: t.x, y: p }, { x: e.x, y: p }, e]), h.push([t, { x: t.x, y: p }, e]);
    for (const p of m) h.push([t, { x: p, y: t.y }, { x: p, y: e.y }, e]);
  } else {
    h.push([t, { x: t.x, y: e.y }, e]);
    for (const p of u)
      h.push([t, { x: t.x, y: p }, e]), h.push([t, { x: t.x, y: p }, { x: e.x, y: p }, e]);
    for (const p of m) h.push([t, { x: p, y: t.y }, { x: p, y: e.y }, e]);
  }
  const i = Oe(h, n);
  if (o === "elbow") return i;
  if (o === "reverse") {
    const p = vn(i), $ = Oe(h.filter((y) => vn(y) !== p), n);
    return $.length > 1 ? $ : i;
  }
  const l = er(t, e, o, s, d), x = Oe([l], n);
  return x.length > 1 ? x : i;
}
function Rn(t) {
  return t.length < 2 ? 0 : fe(t[t.length - 2], t[t.length - 1]);
}
const { PI: nr } = Math, pe = nr + 1e-4, mn = 0.5, gn = [1, 1];
function yn(t, e, n, o = (r) => r) {
  return t * o(0.5 - e * (0.5 - n));
}
const { min: He } = Math;
function qn(t, e, n) {
  let o = He(1, e / n);
  return He(1, t + (He(1, 1 - o) - t) * (o * 0.275));
}
function or(t) {
  return [-t[0], -t[1]];
}
function At(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function wn(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function Zt(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function Re(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function qt(t, e) {
  return [t[0] * e, t[1] * e];
}
function _e(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function rr(t, e) {
  return [t[0] / e, t[1] / e];
}
function Zn(t) {
  return [t[1], -t[0]];
}
function Be(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function bn(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function ir(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function ar(t) {
  return Math.hypot(t[0], t[1]);
}
function kn(t, e) {
  let n = t[0] - e[0], o = t[1] - e[1];
  return n * n + o * o;
}
function Qn(t) {
  return rr(t, ar(t));
}
function cr(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function on(t, e, n) {
  let o = Math.sin(n), r = Math.cos(n), c = t[0] - e[0], a = t[1] - e[1], s = c * r - a * o, d = c * o + a * r;
  return [s + e[0], d + e[1]];
}
function Mn(t, e, n, o) {
  let r = Math.sin(o), c = Math.cos(o), a = e[0] - n[0], s = e[1] - n[1], d = a * c - s * r, m = a * r + s * c;
  return t[0] = d + n[0], t[1] = m + n[1], t;
}
function $n(t, e, n) {
  return At(t, qt(Zt(e, t), n));
}
function sr(t, e, n, o) {
  let r = n[0] - e[0], c = n[1] - e[1];
  return t[0] = e[0] + r * o, t[1] = e[1] + c * o, t;
}
function Jn(t, e, n) {
  return At(t, qt(e, n));
}
const xt = [0, 0], Vt = [0, 0], Gt = [0, 0];
function lr(t, e) {
  let n = Jn(t, Qn(Zn(Zt(t, At(t, [1, 1])))), -e), o = [], r = 1 / 13;
  for (let c = r; c <= 1; c += r) o.push(on(n, t, pe * 2 * c));
  return o;
}
function ur(t, e, n) {
  let o = [], r = 1 / n;
  for (let c = r; c <= 1; c += r) o.push(on(e, t, pe * c));
  return o;
}
function dr(t, e, n) {
  let o = Zt(e, n), r = qt(o, 0.5), c = qt(o, 0.51);
  return [Zt(t, r), Zt(t, c), At(t, c), At(t, r)];
}
function hr(t, e, n, o) {
  let r = [], c = Jn(t, e, n), a = 1 / o;
  for (let s = a; s < 1; s += a) r.push(on(c, t, pe * 3 * s));
  return r;
}
function xr(t, e, n) {
  return [At(t, qt(e, n)), At(t, qt(e, n * 0.99)), Zt(t, qt(e, n * 0.99)), Zt(t, qt(e, n))];
}
function zn(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function fr(t, e, n) {
  return t.slice(0, 10).reduce((o, r) => {
    let c = r.pressure;
    return e && (c = qn(o, r.distance, n)), (o + c) / 2;
  }, t[0].pressure);
}
function pr(t, e = {}) {
  let { size: n = 16, smoothing: o = 0.5, thinning: r = 0.5, simulatePressure: c = !0, easing: a = (N) => N, start: s = {}, end: d = {}, last: m = !1 } = e, { cap: u = !0, easing: h = (N) => N * (2 - N) } = s, { cap: i = !0, easing: l = (N) => --N * N * N + 1 } = d;
  if (t.length === 0 || n <= 0) return [];
  let x = t[t.length - 1].runningLength, p = zn(s.taper, n, x), $ = zn(d.taper, n, x), y = (n * o) ** 2, w = [], g = [], v = fr(t, c, n), f = yn(n, r, t[t.length - 1].pressure, a), X, b = t[0].vector, C = t[0].point, E = C, M = C, S = E, F = !1;
  for (let N = 0; N < t.length; N++) {
    let { pressure: A } = t[N], { point: D, vector: O, distance: W, runningLength: K } = t[N], L = N === t.length - 1;
    if (!L && x - K < 3) continue;
    r ? (c && (A = qn(v, W, n)), f = yn(n, r, A, a)) : f = n / 2, X === void 0 && (X = f);
    let H = K < p ? h(K / p) : 1, q = x - K < $ ? l((x - K) / $) : 1;
    f = Math.max(0.01, f * Math.min(H, q));
    let nt = (L ? t[N] : t[N + 1]).vector, tt = L ? 1 : bn(O, nt), lt = bn(O, b) < 0 && !F, G = tt !== null && tt < 0;
    if (lt || G) {
      Be(xt, b), _e(xt, xt, f);
      for (let kt = 0; kt <= 1; kt += 0.07692307692307693) Re(Vt, D, xt), Mn(Vt, Vt, D, pe * kt), M = [Vt[0], Vt[1]], w.push(M), wn(Gt, D, xt), Mn(Gt, Gt, D, pe * -kt), S = [Gt[0], Gt[1]], g.push(S);
      C = M, E = S, G && (F = !0);
      continue;
    }
    if (F = !1, L) {
      Be(xt, O), _e(xt, xt, f), w.push(Zt(D, xt)), g.push(At(D, xt));
      continue;
    }
    sr(xt, nt, O, tt), Be(xt, xt), _e(xt, xt, f), Re(Vt, D, xt), M = [Vt[0], Vt[1]], (N <= 1 || kn(C, M) > y) && (w.push(M), C = M), wn(Gt, D, xt), S = [Gt[0], Gt[1]], (N <= 1 || kn(E, S) > y) && (g.push(S), E = S), v = A, b = O;
  }
  let T = [t[0].point[0], t[0].point[1]], P = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : At(t[0].point, [1, 1]), z = [], I = [];
  if (t.length === 1) {
    if (!(p || $) || m) return lr(T, X || f);
  } else {
    p || $ && t.length === 1 || (u ? z.push(...ur(T, g[0], 13)) : z.push(...dr(T, w[0], g[0])));
    let N = Zn(or(t[t.length - 1].vector));
    $ || p && t.length === 1 ? I.push(P) : i ? I.push(...hr(P, N, f, 29)) : I.push(...xr(P, N, f));
  }
  return w.concat(I, g.reverse(), z);
}
const Cn = [0, 0];
function Sn(t) {
  return t != null && t >= 0;
}
function vr(t, e = {}) {
  var i;
  let { streamline: n = 0.5, size: o = 16, last: r = !1 } = e;
  if (t.length === 0) return [];
  let c = 0.15 + (1 - n) * 0.85, a = Array.isArray(t[0]) ? t : t.map(({ x: l, y: x, pressure: p = mn }) => [l, x, p]);
  if (a.length === 2) {
    let l = a[1];
    a = a.slice(0, -1);
    for (let x = 1; x < 5; x++) a.push($n(a[0], l, x / 4));
  }
  a.length === 1 && (a = [...a, [...At(a[0], gn), ...a[0].slice(2)]]);
  let s = [{ point: [a[0][0], a[0][1]], pressure: Sn(a[0][2]) ? a[0][2] : 0.25, vector: [...gn], distance: 0, runningLength: 0 }], d = !1, m = 0, u = s[0], h = a.length - 1;
  for (let l = 1; l < a.length; l++) {
    let x = r && l === h ? [a[l][0], a[l][1]] : $n(u.point, a[l], c);
    if (ir(u.point, x)) continue;
    let p = cr(x, u.point);
    if (m += p, l < h && !d) {
      if (m < o) continue;
      d = !0;
    }
    Re(Cn, u.point, x), u = { point: x, pressure: Sn(a[l][2]) ? a[l][2] : mn, vector: Qn(Cn), distance: p, runningLength: m }, s.push(u);
  }
  return s[0].vector = ((i = s[1]) == null ? void 0 : i.vector) || [0, 0], s;
}
function mr(t, e = {}) {
  return pr(vr(t, e), e);
}
var gr = mr;
function Ne(t) {
  if (t.fillColor)
    try {
      return en(t.fillColor);
    } catch {
      return t.color ? at[t.color].bg : at.blue.bg;
    }
  return t.color ? at[t.color].bg : at.blue.bg;
}
function to(t) {
  if (t.strokeColor)
    try {
      return en(t.strokeColor);
    } catch {
      return t.color ? at[t.color].border : "#2563eb";
    }
  return t.color ? at[t.color].border : "#2563eb";
}
function eo(t) {
  return to(t);
}
function ee(t) {
  if (t.textColor)
    try {
      return en(t.textColor);
    } catch {
      return t.color ? at[t.color].text : "#0f172a";
    }
  return t.color ? at[t.color].text : "#0f172a";
}
function no(t, e, n) {
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
      const o = e / 2, r = n / 2, c = Math.min(e, n) / 2, a = c * 0.4, s = [];
      for (let d = 0; d < 10; d++) {
        const m = Math.PI / 5 * d - Math.PI / 2, u = d % 2 === 0 ? c : a;
        s.push(`${o + u * Math.cos(m)},${r + u * Math.sin(m)}`);
      }
      return s.join(" ");
    }
    default:
      return "";
  }
}
function oo(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [r, c] = t[o], [a, s] = t[o + 1];
    e += ` Q ${r} ${c} ${(r + a) / 2} ${(c + s) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function yr(t, e) {
  return e === "highlighter" ? { size: t * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: t, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 };
}
function ro(t, e) {
  return e === "highlighter" ? t * 1.25 : t / 2;
}
function io(t, e, n) {
  return t.length < 2 ? [] : gr(t, yr(e, n));
}
function wr(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [r, c] = t[0], a = ro(e, n);
    return `M ${r - a} ${c} A ${a} ${a} 0 1 0 ${r + a} ${c} A ${a} ${a} 0 1 0 ${r - a} ${c} Z`;
  }
  const o = io(t, e, n);
  return o.length === 0 ? "" : o.reduce(
    (r, [c, a], s) => r + (s === 0 ? `M ${c} ${a}` : ` L ${c} ${a}`),
    ""
  ) + " Z";
}
const Xn = /* @__PURE__ */ new WeakMap();
function br(t) {
  const e = Xn.get(t);
  if (e !== void 0) return e;
  const n = t.points, o = t.type === "draw" && n && n.length >= 2 ? wr(n, t.strokeWidth ?? 3, t.drawMode ?? "pen") : "";
  return Xn.set(t, o), o;
}
function Rt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function ao(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], o = (r, c) => {
    r.childNodes.forEach((a) => {
      if (a.nodeType === Node.TEXT_NODE) {
        const u = a.textContent ?? "";
        u && n[n.length - 1].push({ text: u, ...c });
        return;
      }
      if (a.nodeType !== Node.ELEMENT_NODE) return;
      const s = a;
      if (s.tagName === "BR") {
        n.push([]);
        return;
      }
      const d = { bold: c.bold || s.tagName === "B" || s.tagName === "STRONG", italic: c.italic || s.tagName === "I" || s.tagName === "EM", underline: c.underline || s.tagName === "U" }, m = s.tagName === "DIV" || s.tagName === "P" || s.tagName === "LI";
      m && n[n.length - 1].length > 0 && n.push([]), o(s, d), m && n.push([]);
    });
  };
  return o(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((r) => r.length > 0);
}
const Yn = /* @__PURE__ */ new WeakMap();
function Le(t) {
  const e = Yn.get(t);
  if (e !== void 0) return e;
  const n = t.html ? tn(t.html) : t.text ? Rt(t.text).replace(/\n/g, "<br>") : "";
  return Yn.set(t, n), n;
}
function qe(t) {
  if (t)
    try {
      return No(t);
    } catch {
      return;
    }
}
function co(t) {
  try {
    return Yo(t);
  } catch {
    return null;
  }
}
function me(t) {
  return t.html ? ao(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const ze = 12;
function Ht(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function Lt(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function ft(t) {
  const e = t.rotation ?? 0, n = Ht(t);
  if (!e) return n;
  const o = Lt(t), r = Math.cos(e), c = Math.sin(e), a = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([m, u]) => {
    const h = m - o.x, i = u - o.y;
    return [o.x + h * r - i * c, o.y + h * c + i * r];
  }), s = a.map((m) => m[0]), d = a.map((m) => m[1]);
  return { minX: Math.min(...s), minY: Math.min(...d), maxX: Math.max(...s), maxY: Math.max(...d) };
}
function Pe(t, e, n) {
  const o = t.rotation ?? 0;
  if (!o) return { x: e, y: n };
  const r = Lt(t), c = Math.cos(-o), a = Math.sin(-o), s = e - r.x, d = n - r.y;
  return { x: r.x + s * c - d * a, y: r.y + s * a + d * c };
}
function Ot(t, e, n, o, r, c) {
  const a = r - n, s = c - o, d = a * a + s * s, m = d === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * a + (e - o) * s) / d));
  return Math.hypot(t - (n + m * a), e - (o + m * s));
}
function Ze(t, e, n, o, r, c) {
  const a = 8 / o;
  if (t.type === "arrow") {
    const m = (t.strokeWidth ?? 2.5) / o / 2 + a, u = It(t, r ?? /* @__PURE__ */ new Map(), c);
    if (u.routing === "orthogonal" && u.pathPoints && u.pathPoints.length > 1) {
      for (let i = 1; i < u.pathPoints.length; i++) {
        const l = u.pathPoints[i - 1], x = u.pathPoints[i];
        if (Ot(e, n, l.x, l.y, x.x, x.y) <= m) return !0;
      }
      return !1;
    }
    if (u.bend === 0) return Ot(e, n, u.start.x, u.start.y, u.end.x, u.end.y) <= m;
    let h = u.start;
    for (let i = 1; i <= 16; i++) {
      const l = le(i / 16, u.start, u.control, u.end);
      if (Ot(e, n, h.x, h.y, l.x, l.y) <= m) return !0;
      h = l;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const h = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / o / 2 + a;
    if (t.points.length === 1) {
      const [i, l] = t.points[0];
      return Math.hypot(e - i, n - l) <= h;
    }
    for (let i = 1; i < t.points.length; i++) {
      const [l, x] = t.points[i - 1], [p, $] = t.points[i];
      if (Ot(e, n, l, x, p, $) <= h) return !0;
    }
    return !1;
  }
  const s = Pe(t, e, n), d = Ht(t);
  if (t.type === "frame") {
    const m = s.x >= d.minX - a && s.x <= d.maxX + a && s.y >= d.minY - a && s.y <= d.maxY + a && (s.x <= d.minX + a || s.x >= d.maxX - a || s.y <= d.minY + a || s.y >= d.maxY - a), u = s.x >= d.minX - a && s.x <= d.maxX + a && s.y >= d.minY - 28 / o && s.y <= d.minY;
    return m || u;
  }
  return s.x >= d.minX - a && s.x <= d.maxX + a && s.y >= d.minY - a && s.y <= d.maxY + a;
}
function ne(t, e, n) {
  const o = Ht(t), r = (o.minX + o.maxX) / 2, c = (o.minY + o.maxY) / 2, a = e - r, s = n - c;
  if (a === 0 && s === 0) return { x: r, y: c, side: "e" };
  const d = (o.maxX - o.minX) / 2, m = (o.maxY - o.minY) / 2, u = d === 0 ? 1 / 0 : Math.abs(d / a), h = m === 0 ? 1 / 0 : Math.abs(m / s);
  return u <= h ? { x: r + a * u, y: c + s * u, side: a >= 0 ? "e" : "w" } : { x: r + a * h, y: c + s * h, side: s >= 0 ? "s" : "n" };
}
function so(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([e.id, n, o]);
  return t.filter((c) => !r.has(c.id)).map((c) => {
    const a = ft(c);
    return { minX: a.minX - ze, minY: a.minY - ze, maxX: a.maxX + ze, maxY: a.maxY + ze };
  }).filter((c) => c.maxX > c.minX && c.maxY > c.minY);
}
function It(t, e, n = []) {
  const o = t.fromId ? e.get(t.fromId) : void 0, r = t.toId ? e.get(t.toId) : void 0;
  let c = { x: t.x, y: t.y }, a = { x: t.x + t.w, y: t.y + t.h };
  if (o && r) {
    const x = Lt(o), p = Lt(r);
    c = ne(o, p.x, p.y), a = ne(r, x.x, x.y);
  } else o ? c = ne(o, a.x, a.y) : r && (a = ne(r, c.x, c.y));
  const s = (c.x + a.x) / 2, d = (c.y + a.y) / 2, m = t.bend ?? 0;
  let u = { x: s, y: d };
  if (m !== 0) {
    const x = a.x - c.x, p = a.y - c.y, $ = Math.hypot(x, p) || 1;
    u = { x: s + -p / $ * m, y: d + x / $ * m };
  }
  const h = !!(o || r), i = t.routing ?? (h ? "orthogonal" : m !== 0 ? "curved" : "straight");
  if (i !== "orthogonal") return { start: c, end: a, control: u, bend: m, routing: i };
  const l = so(n, t, o == null ? void 0 : o.id, r == null ? void 0 : r.id);
  return {
    start: c,
    end: a,
    control: u,
    bend: m,
    routing: i,
    pathPoints: Un(Gn(c, a, l, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function le(t, e, n, o) {
  const r = 1 - t;
  return { x: r * r * e.x + 2 * r * t * n.x + t * t * o.x, y: r * r * e.y + 2 * r * t * n.y + t * t * o.y };
}
function Ee(t, e) {
  if (!t || !e) return null;
  const n = Math.max(t.start, e.start), o = Math.min(t.end, e.end);
  return n <= o ? { start: n, end: o } : null;
}
function Ie(t, e, n, o) {
  if (Math.abs(e) < 1e-12) return t >= n && t <= o ? { start: 0, end: 1 } : null;
  const r = (n - t) / e, c = (o - t) / e;
  return Ee(
    { start: Math.min(r, c), end: Math.max(r, c) },
    { start: 0, end: 1 }
  );
}
function Ke(t, e, n, o) {
  const r = e[0] - t[0], c = e[1] - t[1], a = t[0] - n.x, s = t[1] - n.y, d = r * r + c * c;
  if (d < 1e-12)
    return a * a + s * s <= o * o ? { start: 0, end: 1 } : null;
  const m = 2 * (a * r + s * c), u = a * a + s * s - o * o, h = m * m - 4 * d * u;
  if (h < 0) return null;
  const i = Math.sqrt(h);
  return Ee(
    { start: (-m - i) / (2 * d), end: (-m + i) / (2 * d) },
    { start: 0, end: 1 }
  );
}
function kr(t, e, n, o, r) {
  const c = o.x - n.x, a = o.y - n.y, s = Math.hypot(c, a);
  if (s < 1e-12) return Ke(t, e, n, r);
  const d = c / s, m = a / s, u = e[0] - t[0], h = e[1] - t[1], i = t[0] - n.x, l = t[1] - n.y, x = i * d + l * m, p = u * d + h * m, $ = i * -m + l * d, y = u * -m + h * d, g = [
    Ee(
      Ie(x, p, 0, s),
      Ie($, y, -r, r)
    ),
    Ke(t, e, n, r),
    Ke(t, e, o, r)
  ].filter((v) => v !== null);
  return g.length === 0 ? null : {
    start: Math.min(...g.map((v) => v.start)),
    end: Math.max(...g.map((v) => v.end))
  };
}
function Nn(t, e, n) {
  return [t[0] + (e[0] - t[0]) * n, t[1] + (e[1] - t[1]) * n];
}
function ce(t, e) {
  const n = t[t.length - 1];
  (!n || Math.hypot(e[0] - n[0], e[1] - n[1]) > 1e-9) && t.push([e[0], e[1]]);
}
function Mr(t, e, n) {
  let o = n[0][0], r = n[0][1], c = o, a = r;
  for (const [s, d] of n)
    o = Math.min(o, s), r = Math.min(r, d), c = Math.max(c, s), a = Math.max(a, d);
  return { ...t, id: e, points: n, x: o, y: r, w: c - o, h: a - r };
}
function $r(t, e) {
  const n = t.slice(0, 480);
  let o = 1, r = `${n}-e${o}`;
  for (; e.has(r); ) r = `${n}-e${++o}`;
  return e.add(r), r;
}
function he(t, e, n) {
  return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x);
}
function Ce(t, e, n) {
  return Math.abs(he(e, n, t)) <= 1e-9 && t.x >= Math.min(e.x, n.x) - 1e-9 && t.x <= Math.max(e.x, n.x) + 1e-9 && t.y >= Math.min(e.y, n.y) - 1e-9 && t.y <= Math.max(e.y, n.y) + 1e-9;
}
function zr(t, e, n, o) {
  const r = he(t, e, n), c = he(t, e, o), a = he(n, o, t), s = he(n, o, e);
  return (r > 0 && c < 0 || r < 0 && c > 0) && (a > 0 && s < 0 || a < 0 && s > 0) ? !0 : Math.abs(r) <= 1e-9 && Ce(n, t, e) || Math.abs(c) <= 1e-9 && Ce(o, t, e) || Math.abs(a) <= 1e-9 && Ce(t, n, o) || Math.abs(s) <= 1e-9 && Ce(e, n, o);
}
function Pn(t, e, n, o) {
  return zr(t, e, n, o) ? 0 : Math.min(
    Ot(t.x, t.y, n.x, n.y, o.x, o.y),
    Ot(e.x, e.y, n.x, n.y, o.x, o.y),
    Ot(n.x, n.y, t.x, t.y, e.x, e.y),
    Ot(o.x, o.y, t.x, t.y, e.x, e.y)
  );
}
function Qe(t, e, n, o) {
  const r = Ie(t.x, e.x - t.x, n.minX - o, n.maxX + o), c = Ie(t.y, e.y - t.y, n.minY - o, n.maxY + o);
  return Ee(r, c) !== null;
}
function Cr(t, e, n, o, r, c, a) {
  const s = 8 / r;
  if (t.type === "arrow") {
    const x = o + (t.strokeWidth ?? 2.5) / r / 2 + s, p = It(t, c, a), $ = [];
    if (p.routing === "orthogonal" && p.pathPoints && p.pathPoints.length > 1)
      for (let y = 1; y < p.pathPoints.length; y++)
        $.push([p.pathPoints[y - 1], p.pathPoints[y]]);
    else if (p.bend === 0)
      $.push([p.start, p.end]);
    else {
      let y = p.start;
      for (let w = 1; w <= 16; w++) {
        const g = le(w / 16, p.start, p.control, p.end);
        $.push([y, g]), y = g;
      }
    }
    return $.some(([y, w]) => Pn(e, n, y, w) <= x);
  }
  const d = Pe(t, e.x, e.y), m = Pe(t, n.x, n.y), u = Ht(t);
  if (t.type !== "frame") return Qe(d, m, u, o + s);
  const h = o + s, i = [
    { x: u.minX, y: u.minY },
    { x: u.maxX, y: u.minY },
    { x: u.maxX, y: u.maxY },
    { x: u.minX, y: u.maxY }
  ];
  for (let x = 0; x < i.length; x++)
    if (Pn(d, m, i[x], i[(x + 1) % i.length]) <= h) return !0;
  const l = { minX: u.minX, minY: u.minY - 28 / r, maxX: u.maxX, maxY: u.minY };
  return Qe(d, m, l, o);
}
function rn(t, e, n, o, r) {
  const c = [], a = Math.max(r, 0.1), s = o / a, d = new Set(t.map((u) => u.id)), m = new Map(t.map((u) => [u.id, u]));
  for (const u of t) {
    if (u.type !== "draw" || !u.points) {
      if (Cr(u, e, n, s, a, m, t)) continue;
      c.push(u);
      continue;
    }
    const i = (u.drawMode ?? "pen") === "highlighter" ? (u.strokeWidth ?? 3) * 2.5 : u.strokeWidth ?? 3, l = s + i / 2, x = Ht(u);
    if (!Qe(e, n, x, l)) {
      c.push(u);
      continue;
    }
    if (u.points.length === 0) {
      c.push(u);
      continue;
    }
    if (u.points.length === 1) {
      const [g, v] = u.points[0];
      Ot(g, v, e.x, e.y, n.x, n.y) > l && c.push(u);
      continue;
    }
    const p = [];
    let $ = [], y = !1;
    const w = () => {
      $.length > 1 && p.push($), $ = [];
    };
    for (let g = 1; g < u.points.length; g++) {
      const v = u.points[g - 1], f = u.points[g], X = kr(v, f, e, n, l);
      if (!X) {
        $.length === 0 && ce($, v), ce($, f);
        continue;
      }
      y = !0, X.start > 1e-9 && ($.length === 0 && ce($, v), ce($, Nn(v, f, X.start))), w(), X.end < 1 - 1e-9 && (ce($, Nn(v, f, X.end)), ce($, f));
    }
    if (w(), !y) {
      c.push(u);
      continue;
    }
    p.forEach((g, v) => {
      const f = v === 0 ? u.id : $r(u.id, d);
      c.push(Mr(u, f, g));
    });
  }
  return c;
}
function Sr(t, e, n, o, r) {
  return rn(t, { x: e, y: n }, { x: e, y: n }, o, r);
}
function Xr(t, e, n) {
  const o = 6 / n;
  let r = null, c = null;
  const a = [], s = [t.minX, (t.minX + t.maxX) / 2, t.maxX], d = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const m of e) {
    const u = ft(m), h = [u.minX, (u.minX + u.maxX) / 2, u.maxX], i = [u.minY, (u.minY + u.maxY) / 2, u.maxY];
    for (const l of s) for (const x of h) {
      const p = x - l;
      Math.abs(p) <= o && (!r || Math.abs(p) < Math.abs(r.delta)) && (r = { delta: p, at: x });
    }
    for (const l of d) for (const x of i) {
      const p = x - l;
      Math.abs(p) <= o && (!c || Math.abs(p) < Math.abs(c.delta)) && (c = { delta: p, at: x });
    }
  }
  return r && a.push({ x1: r.at, y1: t.minY - 1e3, x2: r.at, y2: t.maxY + 1e3 }), c && a.push({ x1: t.minX - 1e3, y1: c.at, x2: t.maxX + 1e3, y2: c.at }), { dx: (r == null ? void 0 : r.delta) ?? 0, dy: (c == null ? void 0 : c.delta) ?? 0, guides: a };
}
const Yr = 14;
function Nr({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: o,
  camera: r,
  interaction: c,
  eraserPos: a,
  guides: s,
  marquee: d,
  strokeColorOf: m
}) {
  return /* @__PURE__ */ Y("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ U("g", { transform: `scale(${r.z}) translate(${-r.x}, ${-r.y})`, children: [
    t.map((u) => {
      if (u.type === "draw" && u.points) {
        const M = u.drawMode ?? "pen", S = u.strokeWidth ?? 3, F = e.has(u.id) ? V.blue : m(u), T = br(u);
        return /* @__PURE__ */ Y(
          "path",
          {
            "data-canvas-vector-shape-id": u.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": M,
            "data-canvas-stroke-width": S,
            d: T || oo(u.points),
            fill: T ? F : "none",
            stroke: T ? "none" : F,
            strokeWidth: S / r.z,
            strokeOpacity: M === "highlighter" ? 0.35 : void 0,
            fillOpacity: M === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          u.id
        );
      }
      if (u.type !== "arrow") return null;
      const h = e.has(u.id) ? V.blue : m(u), i = It(u, n, o), l = u.strokeWidth ?? 2.5, x = l / r.z, p = Math.max(10, 8 + l * 2), $ = Math.max(4, 2 + l), y = p / r.z, w = $ / r.z, g = i.routing === "orthogonal" && i.pathPoints ? i.pathPoints : null, v = g && g.length > 1;
      let f, X;
      if (v)
        f = Ve(g), X = Rn(g);
      else if (i.routing === "curved") {
        f = `M ${i.start.x} ${i.start.y} Q ${i.control.x} ${i.control.y} ${i.end.x} ${i.end.y}`;
        const M = le(0.94, i.start, i.control, i.end);
        X = Math.atan2(i.end.y - M.y, i.end.x - M.x);
      } else
        f = `M ${i.start.x} ${i.start.y} L ${i.end.x} ${i.end.y}`, X = Math.atan2(i.end.y - i.start.y, i.end.x - i.start.x);
      const b = v && g.length >= 2 ? fe(g[0], g[1]) : i.routing === "orthogonal" && i.start.side ? i.start.side === "e" ? 0 : i.start.side === "w" ? Math.PI : i.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : fe(i.start, i.end), C = u.strokeStyle === "dashed" ? `${8 / r.z} ${5 / r.z}` : u.strokeStyle === "dotted" ? `${1.5 / r.z} ${4 / r.z}` : void 0, E = (M, S, F, T) => M === "dot" ? /* @__PURE__ */ Y("circle", { "data-canvas-arrow-dot-radius": $, cx: S, cy: F, r: w, fill: h }) : M === "none" ? null : /* @__PURE__ */ Y(
        "polygon",
        {
          "data-canvas-arrowhead-size": p,
          points: `${S},${F} ${S - y * Math.cos(T - 0.4)},${F - y * Math.sin(T - 0.4)} ${S - y * Math.cos(T + 0.4)},${F - y * Math.sin(T + 0.4)}`,
          fill: h
        }
      );
      return /* @__PURE__ */ U("g", { "data-canvas-vector-shape-id": u.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": i.routing, "data-canvas-stroke-width": l, children: [
        /* @__PURE__ */ Y("path", { d: f, fill: "none", stroke: h, strokeWidth: x, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: C }),
        E(u.arrowEnd ?? "arrow", i.end.x, i.end.y, X),
        E(u.arrowStart ?? "none", i.start.x, i.start.y, b + Math.PI)
      ] }, u.id);
    }),
    c.kind === "connect" && c.fromId !== void 0 && c.toX !== void 0 && c.toY !== void 0 && (() => {
      const u = n.get(c.fromId);
      if (!u) return null;
      const h = ne(u, c.toX, c.toY), i = c.hoverId ? n.get(c.hoverId) : null, l = i ? ne(i, h.x, h.y) : { x: c.toX, y: c.toY }, x = i ? Gn(h, l, so(o, { id: "__preview" }, u.id, i.id)) : [h, l];
      return /* @__PURE__ */ U("g", { children: [
        /* @__PURE__ */ Y("path", { d: Ve(x), stroke: V.blue, strokeWidth: 2 / r.z, strokeDasharray: `${5 / r.z} ${4 / r.z}` }),
        i ? /* @__PURE__ */ Y("rect", { x: ft(i).minX - 3 / r.z, y: ft(i).minY - 3 / r.z, width: ft(i).maxX - ft(i).minX + 6 / r.z, height: ft(i).maxY - ft(i).minY + 6 / r.z, fill: "none", stroke: V.blue, strokeWidth: 2 / r.z, rx: 6 / r.z }) : /* @__PURE__ */ Y("circle", { cx: l.x, cy: l.y, r: 5 / r.z, fill: V.blue })
      ] });
    })(),
    a && /* @__PURE__ */ Y("circle", { cx: a.x, cy: a.y, r: Yr / r.z, fill: V.roseSoft, stroke: V.rose, strokeWidth: 1 / r.z }),
    s.map((u, h) => /* @__PURE__ */ Y("line", { x1: u.x1, y1: u.y1, x2: u.x2, y2: u.y2, stroke: V.pink, strokeWidth: 1 / r.z, strokeDasharray: `${4 / r.z} ${4 / r.z}` }, `guide-${h}`)),
    d && /* @__PURE__ */ Y("rect", { x: Math.min(d.startX, d.curX), y: Math.min(d.startY, d.curY), width: Math.abs(d.curX - d.startX), height: Math.abs(d.curY - d.startY), fill: V.marqueeFill, stroke: V.blue, strokeWidth: 1 / r.z })
  ] }) });
}
const Pr = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], Ir = /* @__PURE__ */ new Set([
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
]), Lr = [
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
function Te(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function lo(t) {
  return Ir.has(t.trim().toLowerCase());
}
function uo(t) {
  const e = Te(t);
  return e ? lo(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function Er(t) {
  return Te(t).split(",").map((e) => e.trim()).filter(Boolean).map(uo).filter(Boolean).join(", ");
}
function ho(t) {
  return Te(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function de(t) {
  return t.split(",").map((e) => Te(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !lo(e));
}
const Se = Array.from(/* @__PURE__ */ new Set([
  ...Lr,
  ...de(Tt.sans.stack),
  ...de(Tt.serif.stack),
  ...de(Tt.mono.stack),
  ...de(Tt.gothic.stack),
  ...de(Tt.korean.stack)
]));
function Tr() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Se;
  const t = Se.filter((e) => {
    const n = uo(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : Se;
}
const Fr = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, Ar = 24, Wr = 28, xo = 720;
function $t(t) {
  return t.fontSize ?? Fr[t.type] ?? 14;
}
function zt(t) {
  var e;
  if (!t.fontFamily) return Tt.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = ho(Po(t.customFontFamily ?? ""));
    } catch {
    }
    return Er(n) || Tt.sans.stack;
  }
  return ((e = Tt[t.fontFamily]) == null ? void 0 : e.stack) ?? Tt.sans.stack;
}
function St(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function Dr(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function Or(t) {
  var e, n, o;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((o = t.html) != null && o.includes("<ol>")) return "number";
}
function Hr(t, e) {
  return {
    w: Math.min(xo, Math.max(Ar, Math.ceil(t))),
    h: Math.max(Wr, Math.ceil(e))
  };
}
function _r(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = tn(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${xo}px`,
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
  const o = n.getBoundingClientRect();
  return n.remove(), Hr(o.width, o.height);
}
const Br = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), Kr = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function jr({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: o,
  shapeById: r,
  allShapes: c,
  peerCursors: a,
  isDarkMode: s,
  renderEditor: d,
  renderShapeBody: m,
  setEditingId: u,
  onBendHandleDown: h,
  onOrthogonalSegmentHandleDown: i,
  onResizeHandleDown: l,
  onRotateHandleDown: x,
  onConnectHandleDown: p,
  onArrowEndpointDown: $
}) {
  return /* @__PURE__ */ U(Jt, { children: [
    /* @__PURE__ */ Y("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((y) => {
      if (y.type === "draw") return null;
      if (y.type === "arrow") {
        const v = It(y, r, c), f = v.routing === "orthogonal" && v.pathPoints ? nn(v.pathPoints) : v.routing === "curved" ? le(0.5, v.start, v.control, v.end) : { x: (v.start.x + v.end.x) / 2, y: (v.start.y + v.end.y) / 2 }, X = n === y.id, b = Le(y), C = e.has(y.id), E = me(y).trim(), M = b || (C ? "관계 입력" : "");
        return !M && !X ? null : /* @__PURE__ */ Y(Ye.Fragment, { children: /* @__PURE__ */ Y("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: f.x - 90, top: f.y - 18, width: 180, height: 36 }, onDoubleClick: (S) => {
          S.stopPropagation(), u(y.id);
        }, children: (M || X) && /* @__PURE__ */ Y(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": E ? `관계 설명: ${E}` : "관계 설명 입력",
            title: X ? void 0 : E ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${s ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: $t(y),
              fontFamily: zt(y),
              maxWidth: "100%",
              minWidth: X ? 120 / o.z : void 0,
              minHeight: X ? 28 / o.z : void 0,
              color: y.textColor
            },
            children: X ? d("text-center whitespace-nowrap") : /* @__PURE__ */ Y("span", { dangerouslySetInnerHTML: { __html: M } }, "canvas-view")
          }
        ) }) }, y.id);
      }
      const w = e.has(y.id), g = Ht(y);
      return /* @__PURE__ */ U(
        "div",
        {
          "data-canvas-shape-id": y.id,
          "data-canvas-shape-type": y.type,
          "data-canvas-selected": w ? "true" : void 0,
          "data-canvas-text-align": St(y),
          "data-canvas-text-color": y.textColor,
          "data-canvas-font-size": $t(y),
          "data-canvas-font-family": y.fontFamily === "custom" ? y.customFontFamily ?? "custom" : y.fontFamily ?? "sans",
          "data-canvas-manual-size": y.manualSize ? "true" : void 0,
          "data-canvas-group-id": y.groupId,
          "data-canvas-list-kind": Or(y),
          "data-canvas-x": y.x,
          "data-canvas-y": y.y,
          "data-canvas-width": y.w,
          "data-canvas-height": y.h,
          className: "absolute",
          style: { left: g.minX, top: g.minY, width: g.maxX - g.minX, height: g.maxY - g.minY, transform: y.rotation ? `rotate(${y.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (v) => {
            v.stopPropagation(), Br.has(y.type) && u(y.id);
          },
          children: [
            m(y),
            w && /* @__PURE__ */ U(Jt, { children: [
              /* @__PURE__ */ Y("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${V.blue}` } }),
              e.size === 1 && /* @__PURE__ */ U(Jt, { children: [
                ["nw", "ne", "sw", "se"].map((v) => /* @__PURE__ */ Y("div", { "data-canvas-resize-handle": v, onPointerDown: (f) => l(f, y, v), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${v}-resize`, left: v.includes("w") ? -5 / o.z : void 0, right: v.includes("e") ? -5 / o.z : void 0, top: v.includes("n") ? -5 / o.z : void 0, bottom: v.includes("s") ? -5 / o.z : void 0 } }, v)),
                /* @__PURE__ */ Y("div", { onPointerDown: (v) => x(v, y), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                Kr.has(y.type) && ["n", "s", "w", "e"].map((v) => /* @__PURE__ */ Y("div", { onPointerDown: (f) => p(f, y), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...v === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : v === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : v === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${v}`))
              ] })
            ] })
          ]
        },
        y.id
      );
    }) }),
    e.size === 1 && c.filter((y) => y.type === "arrow" && e.has(y.id)).map((y) => {
      const w = It(y, r, c), g = (v, f) => ({
        left: (v.x - o.x) * o.z - f / 2,
        top: (v.y - o.y) * o.z - f / 2
      });
      return /* @__PURE__ */ U(Ye.Fragment, { children: [
        w.routing === "orthogonal" && w.pathPoints && w.pathPoints.length > 2 ? w.pathPoints.slice(0, -1).map((v, f) => {
          var C;
          const X = (C = w.pathPoints) == null ? void 0 : C[f + 1];
          if (!X) return null;
          const b = { x: (v.x + X.x) / 2, y: (v.y + X.y) / 2 };
          return /* @__PURE__ */ Y("div", { "data-canvas-arrow-segment-handle": f, onPointerDown: (E) => i(E, y, f), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...g(b, 12), cursor: v.x === X.x ? "ew-resize" : "ns-resize" } }, `segment-${f}`);
        }) : w.routing === "curved" && /* @__PURE__ */ Y("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (v) => h(v, y), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (w.start.x + w.end.x) / 2 * o.z - o.x * o.z - 5, top: (w.start.y + w.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map((v) => {
          const f = v === "start" ? w.start : w.end;
          return /* @__PURE__ */ Y("div", { "data-canvas-arrow-endpoint": v, onPointerDown: (X) => $(X, y, v), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...g(f, 12), cursor: "grab" } }, v);
        })
      ] }, `arrow-handles-${y.id}`);
    }),
    a == null ? void 0 : a.map((y) => /* @__PURE__ */ U("div", { className: "absolute pointer-events-none z-40", style: { left: (y.x - o.x) * o.z, top: (y.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ Y("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ Y("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: y.color, stroke: V.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ Y("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: y.color }, children: y.name })
    ] }, y.id))
  ] });
}
function an(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function Ur(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), an(t) && e.push("diagram"), e;
}
function Fi(t) {
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
const Vr = "#3b82f6";
function Qt(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function Xe(t) {
  return Math.round(Qt(t, 0, 255)).toString(16).padStart(2, "0");
}
function Gr(t) {
  const e = t.trim().endsWith("%"), n = Number.parseFloat(t);
  return Number.isFinite(n) ? e ? n * 2.55 : n : 0;
}
function xe(t) {
  var c, a;
  const e = t.trim().toLowerCase(), n = (c = e.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : c[1];
  if (n)
    return n.length === 3 || n.length === 4 ? `#${n.slice(0, 3).split("").map((s) => `${s}${s}`).join("")}` : `#${n.slice(0, 6)}`;
  const o = (a = e.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : a[1];
  if (o) {
    const s = o.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(Gr);
    if (s.length === 3) return `#${s.map(Xe).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? Vr;
}
function In(t) {
  const e = xe(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, o = Number.parseInt(e.slice(2, 4), 16) / 255, r = Number.parseInt(e.slice(4, 6), 16) / 255, c = Math.max(n, o, r), a = Math.min(n, o, r), s = c - a;
  let d = 0;
  return s !== 0 && (c === n ? d = 60 * ((o - r) / s % 6) : c === o ? d = 60 * ((r - n) / s + 2) : d = 60 * ((n - o) / s + 4)), d < 0 && (d += 360), { hue: d, saturation: c === 0 ? 0 : s / c, value: c };
}
function Ln({ hue: t, saturation: e, value: n }) {
  const o = (t % 360 + 360) % 360, r = n * e, c = r * (1 - Math.abs(o / 60 % 2 - 1)), a = n - r;
  let s = 0, d = 0, m = 0;
  return o < 60 ? [s, d, m] = [r, c, 0] : o < 120 ? [s, d, m] = [c, r, 0] : o < 180 ? [s, d, m] = [0, r, c] : o < 240 ? [s, d, m] = [0, c, r] : o < 300 ? [s, d, m] = [c, 0, r] : [s, d, m] = [r, 0, c], `#${Xe((s + a) * 255)}${Xe((d + a) * 255)}${Xe((m + a) * 255)}`;
}
function Rr(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function qr({ value: t, onChange: e }) {
  const [n, o] = it(() => In(t)), r = J(null), c = J(null), a = J(null);
  Pt(() => {
    const w = In(t);
    o((g) => Rr(g, w) ? g : w);
  }, [t]);
  const s = (w) => {
    o(w), e(Ln(w));
  }, d = (w) => {
    var b;
    const g = (b = r.current) == null ? void 0 : b.getBoundingClientRect();
    if (!g) return;
    const v = w.clientX - (g.left + g.width / 2), f = w.clientY - (g.top + g.height / 2), X = Math.atan2(f, v) * 180 / Math.PI + 90;
    s({ ...n, hue: (X + 360) % 360 });
  }, m = (w) => {
    var v;
    const g = (v = c.current) == null ? void 0 : v.getBoundingClientRect();
    g && s({
      ...n,
      saturation: Qt((w.clientX - g.left) / g.width, 0, 1),
      value: Qt(1 - (w.clientY - g.top) / g.height, 0, 1)
    });
  }, u = (w, g) => {
    var v, f;
    g.button !== 0 && g.pointerType !== "touch" || (g.preventDefault(), g.stopPropagation(), a.current = w, (f = (v = g.currentTarget).setPointerCapture) == null || f.call(v, g.pointerId), w === "hue" ? d(g) : m(g));
  }, h = (w) => {
    a.current && (w.preventDefault(), a.current === "hue" ? d(w) : m(w));
  }, i = (w) => {
    var g, v;
    a.current = null;
    try {
      (v = (g = w.currentTarget).releasePointerCapture) == null || v.call(g, w.pointerId);
    } catch {
      return;
    }
  }, l = (n.hue - 90) * Math.PI / 180, x = 53, p = {
    left: 66 + Math.cos(l) * x,
    top: 66 + Math.sin(l) * x
  }, $ = Ln({ hue: n.hue, saturation: 1, value: 1 }), y = (w) => s({ ...n, hue: (n.hue + w + 360) % 360 });
  return /* @__PURE__ */ U("div", { className: "canvas-color-wheel", "data-canvas-color-wheel": !0, children: [
    /* @__PURE__ */ U(
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
        onPointerDown: (w) => u("hue", w),
        onPointerMove: h,
        onPointerUp: i,
        onKeyDown: (w) => {
          (w.key === "ArrowLeft" || w.key === "ArrowDown") && (w.preventDefault(), y(-1)), (w.key === "ArrowRight" || w.key === "ArrowUp") && (w.preventDefault(), y(1));
        },
        children: [
          /* @__PURE__ */ Y("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-hue-marker", style: { left: p.left, top: p.top } })
        ]
      }
    ),
    /* @__PURE__ */ Y(
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
        style: { backgroundColor: $ },
        onPointerDown: (w) => u("sv", w),
        onPointerMove: h,
        onPointerUp: i,
        onKeyDown: (w) => {
          const g = w.shiftKey ? 0.1 : 0.02;
          w.key === "ArrowLeft" && (w.preventDefault(), s({ ...n, saturation: Qt(n.saturation - g, 0, 1) })), w.key === "ArrowRight" && (w.preventDefault(), s({ ...n, saturation: Qt(n.saturation + g, 0, 1) })), w.key === "ArrowDown" && (w.preventDefault(), s({ ...n, value: Qt(n.value - g, 0, 1) })), w.key === "ArrowUp" && (w.preventDefault(), s({ ...n, value: Qt(n.value + g, 0, 1) }));
        },
        children: /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${n.saturation * 100}%`, top: `${(1 - n.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ U("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ Y("span", { children: xe(t).toUpperCase() })
    ] })
  ] });
}
const Zr = [2, 4, 6, 8];
function Qr(t) {
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
      return fo(t);
  }
}
function En(t) {
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
      return fo(t);
  }
}
function fo(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function je(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Tn(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Jr({
  shape: t,
  selection: e,
  selectionActions: n,
  shapes: o,
  camera: r,
  canvasSize: c,
  isDarkMode: a,
  editing: s,
  showPalette: d,
  installedFontFamilies: m,
  setShowPalette: u,
  setActiveColor: h,
  patchSelected: i,
  applyFormat: l,
  applyList: x,
  applyCustomFontFamily: p
}) {
  var re, Yt;
  const $ = a ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", y = e.length > 1, w = e.some((k) => !!k.groupId), g = t.type === "draw", v = g || Tn(t) && !je(t) ? "stroke" : je(t) ? "fill" : "text", [f, X] = it(v), [b, C] = it("");
  te(() => X(v), [v, t.id]);
  const E = f === "text" ? ee(t) : f === "stroke" ? t.strokeColor ?? (t.color ? at[t.color].border : V.ink) : Ne(t);
  te(() => C(xe(E).toUpperCase()), [E]);
  const M = xe(E), S = (k) => {
    i(g || f === "stroke" ? { strokeColor: k } : f === "text" ? { textColor: k } : { fillColor: k });
  }, F = (k) => {
    h(k), i(g || f === "stroke" ? { color: k, strokeColor: void 0 } : f === "text" ? { textColor: at[k].text } : { color: k, fillColor: void 0 }), u(!1);
  }, T = J(null), [P, z] = it({ width: 380, height: 260 });
  te(() => {
    const k = T.current;
    if (!k) return;
    const B = () => {
      const ct = Math.max(1, Math.ceil(k.getBoundingClientRect().width)), bt = Math.max(1, Math.ceil(k.getBoundingClientRect().height));
      z((Bt) => Bt.width === ct && Bt.height === bt ? Bt : { width: ct, height: bt });
    };
    if (B(), typeof ResizeObserver > "u") return;
    const Z = new ResizeObserver(B);
    return Z.observe(k), () => Z.disconnect();
  }, [s, m.length, a, t, d]);
  const I = P.width, N = P.height, A = e.reduce((k, B) => {
    const Z = ft(B);
    return {
      minX: Math.min(k.minX, Z.minX),
      minY: Math.min(k.minY, Z.minY),
      maxX: Math.max(k.maxX, Z.maxX),
      maxY: Math.max(k.maxY, Z.maxY)
    };
  }, ft(t)), D = (A.minX - r.x) * r.z, O = (A.minY - r.y) * r.z, W = (A.maxX - r.x) * r.z, K = (A.maxY - r.y) * r.z, L = Math.max(8, c.width - I - 8), H = Math.max(8, c.height - N - 8), q = (k, B) => ({ left: Math.min(Math.max(8, k), L), top: Math.min(Math.max(8, B), H) }), nt = [
    q((D + W) / 2 - I / 2, O - N - 12),
    q((D + W) / 2 - I / 2, K + 12),
    q((c.width - I) / 2, 12),
    q(D - I - 12, O + (K - O - N) / 2),
    q(W + 12, O + (K - O - N) / 2)
  ], tt = o.map((k) => {
    const B = ft(k);
    return { left: (B.minX - r.x) * r.z, top: (B.minY - r.y) * r.z, right: (B.maxX - r.x) * r.z, bottom: (B.maxY - r.y) * r.z };
  });
  if (t.type === "arrow") {
    const k = It(t, new Map(o.map((bt) => [bt.id, bt])), o), B = k.routing === "orthogonal" && k.pathPoints ? nn(k.pathPoints) : { x: (k.start.x + k.end.x) / 2, y: (k.start.y + k.end.y) / 2 }, Z = 180 * r.z, ct = 36 * r.z;
    tt.push({
      left: (B.x - r.x) * r.z - Z / 2,
      top: (B.y - r.y) * r.z - ct / 2,
      right: (B.x - r.x) * r.z + Z / 2,
      bottom: (B.y - r.y) * r.z + ct / 2
    });
  }
  const lt = nt[0], G = (k, B) => {
    const Z = Math.max(0, Math.min(k.left + I, B.right) - Math.max(k.left, B.left)), ct = Math.max(0, Math.min(k.top + N, B.bottom) - Math.max(k.top, B.top));
    return Z * ct;
  }, kt = ((re = nt.map((k) => ({
    candidate: k,
    overlap: tt.reduce((B, Z) => B + G(k, Z), 0),
    distance: Math.hypot(k.left - lt.left, k.top - lt.top)
  })).sort((k, B) => k.overlap - B.overlap || k.distance - B.distance)[0]) == null ? void 0 : re.candidate) ?? lt, Et = $t(t), pt = e.every(Qr), Wt = new Set(e.map(En)).size === 1 ? En(t) : void 0, ut = Ur(t), Q = t.type === "arrow" ? "arrow" : ut[0] ?? "color", [et, dt] = it(Q);
  te(() => {
    ut.includes(et) || dt(Q);
  }, [Q, ut, et]);
  const wt = t.type === "arrow" && !!((Yt = t.orthogonalWaypoints) != null && Yt.length), vt = t.type === "arrow" ? t.arrowStart ?? "none" : "none", mt = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", ot = (k, B, Z, ct, bt = ct) => /* @__PURE__ */ Y("button", { type: "button", title: ct, "aria-label": bt, onClick: Z, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${B ? "bg-blue-600 text-white" : $}`, children: k }), gt = (k) => /* @__PURE__ */ Y("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: k }), yt = (k, B, Z, ct, bt = !1) => /* @__PURE__ */ Y(
    "button",
    {
      type: "button",
      title: B,
      "aria-label": B,
      disabled: !ct,
      onClick: Z,
      className: `w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default ${bt ? "text-rose-500 hover:bg-rose-500/10" : $}`,
      children: /* @__PURE__ */ Y(k, { className: "w-4 h-4" })
    }
  ), Xt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ U("div", { ref: T, "data-canvas-inspector": g ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${a ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: kt.left, top: kt.top }, onPointerDown: (k) => {
    k.stopPropagation();
    const B = k.target instanceof Element ? k.target : null;
    B != null && B.closest("input, select, textarea") || k.preventDefault();
  }, onClick: (k) => k.stopPropagation(), children: [
    y ? /* @__PURE__ */ U("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      e.length,
      "개 선택됨"
    ] }) : /* @__PURE__ */ Y("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: ut.map((k) => /* @__PURE__ */ Y("button", { type: "button", role: "tab", "aria-selected": et === k, onClick: () => dt(k), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${et === k ? "bg-blue-600 text-white" : $}`, children: Xt[k] }, k)) }),
    /* @__PURE__ */ U("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: y || et === "color" || g ? void 0 : "none" }, children: [
      /* @__PURE__ */ Y("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: g ? "그리기" : "색상" }),
      /* @__PURE__ */ Y("button", { type: "button", title: g ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": g ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => u((k) => !k), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${a ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-trigger-dot", style: { background: M } }) }) }),
      d && /* @__PURE__ */ U("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${a ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !g && /* @__PURE__ */ U("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          je(t) && /* @__PURE__ */ Y("button", { type: "button", role: "tab", "aria-selected": f === "fill", onClick: () => X("fill"), className: f === "fill" ? "is-active" : "", children: "배경" }),
          Tn(t) && /* @__PURE__ */ Y("button", { type: "button", role: "tab", "aria-selected": f === "stroke", onClick: () => X("stroke"), className: f === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ Y("button", { type: "button", role: "tab", "aria-selected": f === "text", onClick: () => X("text"), className: f === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ Y("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: Kn.map((k) => /* @__PURE__ */ Y("button", { type: "button", title: at[k].label, "aria-label": `색 ${at[k].label}`, onClick: () => F(k), className: "canvas-color-preset", style: { background: at[k].bg, borderColor: at[k].border, outline: t.color === k && !t.fillColor && !t.strokeColor ? `2px solid ${V.blue}` : void 0, outlineOffset: 1 } }, k)) }),
        /* @__PURE__ */ Y(qr, { value: E, onChange: S }),
        /* @__PURE__ */ U("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ Y("span", { children: "#" }),
          /* @__PURE__ */ Y(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: b.replace(/^#/, ""),
              onChange: (k) => {
                const B = k.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                C(`#${B}`.toUpperCase()), B.length === 6 && S(`#${B}`);
              },
              onBlur: () => C(xe(E).toUpperCase()),
              onPointerDown: (k) => k.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !y && et !== "color" && !g && /* @__PURE__ */ U(Jt, { children: [
      /* @__PURE__ */ U("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ Y("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ U("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: ee(t), color: V.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ Y("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ Y("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? ee(t), onChange: (k) => i({ textColor: k.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ U("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${a ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ Y("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ Y("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => i({ fontSize: Math.max(8, Et - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${$}`, children: /* @__PURE__ */ Y(To, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ Y("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: Et }),
          /* @__PURE__ */ Y("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => i({ fontSize: Math.min(96, Et + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${$}`, children: /* @__PURE__ */ Y(Fo, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ U("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ Y("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (k) => {
            const B = Dr(k.target.value);
            i(B === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: B, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${a ? "text-slate-200" : "text-slate-700"}`, children: Pr.map((k) => /* @__PURE__ */ Y("option", { value: k, className: a ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: Tt[k].label }, k)) }),
          /* @__PURE__ */ Y(Ao, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ U(Jt, { children: [
          /* @__PURE__ */ Y("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (k) => p(k.target.value), onChange: (k) => k.currentTarget.value && p(k.currentTarget.value), onKeyDown: (k) => {
            k.key === "Enter" && (k.preventDefault(), p(k.currentTarget.value));
          }, onDoubleClick: (k) => k.stopPropagation(), onPointerDown: (k) => k.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ Y("datalist", { id: `canvas-font-families-${t.id}`, children: m.map((k) => /* @__PURE__ */ Y("option", { value: k }, k)) })
        ] })
      ] }),
      /* @__PURE__ */ U("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ Y("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ Y("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", Wo, "왼쪽 정렬"], ["center", Do, "가운데 정렬"], ["right", Oo, "오른쪽 정렬"]].map(([k, B, Z]) => /* @__PURE__ */ Y("button", { type: "button", "aria-label": Z, title: Z, onClick: () => i({ textAlign: k }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${St(t) === k ? "bg-blue-600 text-white shadow-sm" : $}`, children: /* @__PURE__ */ Y(B, { className: "w-4 h-4" }) }, k)) }),
        s && /* @__PURE__ */ U(Jt, { children: [
          /* @__PURE__ */ Y("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ Y("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", Ho, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", _o, "번호 목록"]].map(([k, B, Z]) => /* @__PURE__ */ Y("button", { type: "button", onClick: () => x(k), "aria-label": Z, title: Z, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${$}`, children: B ? /* @__PURE__ */ Y(B, { className: "w-4 h-4" }) : /* @__PURE__ */ Y("span", { className: "text-base leading-none", children: "–" }) }, k)) }),
          /* @__PURE__ */ Y("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: Bo, label: "굵게" }, { cmd: "italic", Icon: Ko, label: "기울임" }, { cmd: "underline", Icon: jo, label: "밑줄" }].map(({ cmd: k, Icon: B, label: Z }) => /* @__PURE__ */ Y("button", { type: "button", onClick: () => l(k), "aria-label": Z, title: Z, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${$}`, children: /* @__PURE__ */ Y(B, { className: "w-4 h-4" }) }, k)) })
        ] })
      ] }),
      (et === "arrange" && t.type === "card" || et === "arrow" && t.type === "arrow") && /* @__PURE__ */ U("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ U(Jt, { children: [
          /* @__PURE__ */ Y("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ Y("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (k) => k.stopPropagation(), onChange: (k) => i({ category: k.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${a ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ U("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ U("div", { className: "flex items-center gap-1", children: [
            gt("경로"),
            ot("직선", (t.routing ?? "straight") === "straight", () => i({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            ot("직각", t.routing === "orthogonal", () => i({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            ot("곡선", (t.routing ?? "") === "curved", () => i({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            wt && ot("자동", !1, () => i({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ U("div", { className: "flex items-center gap-1", children: [
            gt("선"),
            ot("—", (t.strokeStyle ?? "solid") === "solid", () => i({ strokeStyle: "solid" }), "실선"),
            ot("- -", t.strokeStyle === "dashed", () => i({ strokeStyle: "dashed" }), "파선"),
            ot("···", t.strokeStyle === "dotted", () => i({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ U("div", { className: "flex items-center gap-1", children: [
            gt("시작"),
            ot(vt === "none" ? "○" : vt === "dot" ? "●" : "◀", vt !== "none", () => i({ arrowStart: vt === "none" ? "arrow" : vt === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${vt === "none" ? "없음" : vt === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ U("div", { className: "flex items-center gap-1", children: [
            gt("끝"),
            ot(mt === "none" ? "○" : mt === "dot" ? "●" : "▶", mt !== "none", () => i({ arrowEnd: mt === "arrow" ? "dot" : mt === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${mt === "none" ? "없음" : mt === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      et === "diagram" && /* @__PURE__ */ Y("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${a ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    pt && /* @__PURE__ */ U("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
      gt("굵기"),
      Zr.map((k) => /* @__PURE__ */ Y(Ye.Fragment, { children: ot(String(k), Wt === k, () => i({ strokeWidth: k }), `굵기 ${k}`) }, k))
    ] }),
    /* @__PURE__ */ U("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
      gt("선택"),
      yt(Uo, "그룹 (Ctrl+G)", n.group, y),
      yt(Vo, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, w),
      yt(Go, "복제", n.duplicateSelected, !0),
      yt(Ro, "삭제 (Delete)", n.deleteSelected, !0, !0)
    ] })
  ] });
}
const ti = [2, 4, 6, 8];
function ei({
  tool: t,
  activeColor: e,
  drawStrokeWidth: n,
  isDarkMode: o,
  onSelectColor: r,
  onSelectStrokeWidth: c
}) {
  return t !== "draw" && t !== "highlighter" ? null : /* @__PURE__ */ U(
    "div",
    {
      "data-canvas-pen-palette": "true",
      className: `absolute top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex flex-wrap items-center gap-2 px-3 py-2 rounded-2xl border shadow-xl backdrop-blur-md transition-all ${o ? "bg-slate-900/90 border-slate-700 text-slate-200 shadow-slate-950/40" : "bg-white/90 border-slate-200 text-slate-700 shadow-slate-300/40"}`,
      onPointerDown: (s) => s.stopPropagation(),
      onClick: (s) => s.stopPropagation(),
      children: [
        /* @__PURE__ */ Y("div", { className: "flex items-center gap-1.5 pr-2 border-r border-slate-300/40 dark:border-slate-700/60", children: /* @__PURE__ */ Y("span", { className: "text-[11px] font-bold tracking-wide opacity-75", children: t === "highlighter" ? "형광펜" : "펜 색상" }) }),
        /* @__PURE__ */ Y("div", { className: "flex items-center gap-1.5", role: "radiogroup", "aria-label": "펜 색상 선택", children: Kn.map((s) => {
          const d = at[s], m = e === s;
          return /* @__PURE__ */ Y(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": m,
              title: `${d.label} 선택`,
              "aria-label": d.label,
              onClick: () => r(s),
              className: `group relative w-6 h-6 rounded-full transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${m ? "scale-110 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900" : "hover:scale-105 opacity-90 hover:opacity-100"}`,
              style: {
                backgroundColor: d.border,
                borderColor: d.border
              },
              children: m && /* @__PURE__ */ Y("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ Y("span", { className: "w-1.5 h-1.5 rounded-full bg-white shadow-sm" }) })
            },
            s
          );
        }) }),
        /* @__PURE__ */ U("div", { className: "flex items-center gap-1 pl-2 border-l border-slate-300/40 dark:border-slate-700/60", children: [
          /* @__PURE__ */ Y("span", { className: "mr-1 text-[10px] font-semibold opacity-60", children: "두께" }),
          ti.map((s) => {
            const d = n === s;
            return /* @__PURE__ */ Y(
              "button",
              {
                type: "button",
                title: `두께 ${s}px`,
                "aria-label": `두께 ${s}px`,
                onClick: () => c(s),
                className: `w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-semibold transition-colors ${d ? "bg-blue-600 text-white font-bold" : o ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-700"}`,
                children: /* @__PURE__ */ Y(
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
function ni({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: o,
  commitEditorHtml: r,
  onEditorKeyDown: c,
  setShapes: a,
  onDirty: s,
  renderDiagram: d
}) {
  const m = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", u = (i, l) => /* @__PURE__ */ Y(
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
      onDoubleClick: (x) => x.stopPropagation(),
      onKeyDown: c,
      className: `${m} ${i}`,
      style: l
    },
    "canvas-editor"
  );
  return { renderEditor: u, renderShapeBody: (i) => {
    const l = at[i.color ?? "blue"], x = e === i.id, p = Le(i);
    if (i.type === "frame") {
      const X = i.strokeWidth ?? 2;
      return /* @__PURE__ */ Y(
        "div",
        {
          "data-canvas-stroke-width": X,
          className: "w-full h-full rounded",
          style: { border: `${X / t.z}px solid ${n ? V.slate600 : V.slate400}` },
          children: /* @__PURE__ */ Y(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? V.slate400 : V.muted
              },
              children: x ? u("", { fontSize: 13 / t.z }) : me(i) || "프레임"
            }
          )
        }
      );
    }
    if (i.type === "note")
      return /* @__PURE__ */ Y(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: Ne(i), borderTop: `6px solid ${l.border}`, color: l.text },
          children: x ? u("font-medium", { color: ee(i), fontSize: $t(i), fontFamily: zt(i), textAlign: St(i) }) : p ? /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: ee(i), fontSize: $t(i), fontFamily: zt(i), textAlign: St(i) }, dangerouslySetInnerHTML: { __html: p } }, "canvas-view") : /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: ee(i), fontSize: $t(i), fontFamily: zt(i), textAlign: St(i) }, children: /* @__PURE__ */ Y("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (i.type === "card") {
      const X = i.cardStyle === "glass";
      return an(i) && d && !x ? /* @__PURE__ */ Y("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: d(i) }) : /* @__PURE__ */ U(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: X ? V.glassFill : i.fillColor ?? V.slateCard,
            backdropFilter: X ? "blur(12px)" : void 0,
            WebkitBackdropFilter: X ? "blur(12px)" : void 0,
            border: `1px solid ${X ? V.glassBorder : V.darkBorder}`,
            boxShadow: X ? V.glassShadow : V.cardShadow
          },
          children: [
            /* @__PURE__ */ U(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (b) => b.stopPropagation(),
                onDoubleClick: (b) => b.stopPropagation(),
                onBlur: (b) => {
                  const E = (b.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  a((M) => M.map((S) => S.id === i.id ? { ...S, category: E } : S)), s();
                },
                onKeyDown: (b) => {
                  b.key === "Enter" && (b.preventDefault(), b.currentTarget.blur());
                },
                children: [
                  "[ ",
                  i.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            x ? u("flex-1 font-medium", { color: i.textColor ?? V.white, fontSize: $t(i), fontFamily: zt(i), textAlign: St(i) }) : /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: i.textColor ?? V.white, fontSize: $t(i), fontFamily: zt(i), textAlign: St(i) }, dangerouslySetInnerHTML: { __html: p } }, "canvas-view"),
            /* @__PURE__ */ U("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              i.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (i.type === "text") {
      const X = n ? "text-slate-100" : "text-slate-900", b = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${X}`,
        style: { color: i.textColor, fontSize: $t(i), fontFamily: zt(i), textAlign: St(i) }
      };
      return x ? u(`font-medium ${X}`, b.style) : p ? /* @__PURE__ */ Y(
        "div",
        {
          "data-canvas-text-view": !0,
          ...b,
          dangerouslySetInnerHTML: { __html: p }
        },
        "canvas-view"
      ) : /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, ...b, children: /* @__PURE__ */ Y("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (i.type === "image") {
      const X = qe(i.src);
      return X ? /* @__PURE__ */ Y(
        "img",
        {
          src: X,
          alt: i.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const $ = Ne(i), y = eo(i), w = ee(i);
    if (i.type === "triangle" || i.type === "diamond" || i.type === "hexagon" || i.type === "star") {
      const X = i.strokeWidth ?? 2;
      return /* @__PURE__ */ U("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ Y("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${i.w} ${i.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ Y("polygon", { "data-canvas-stroke-width": X, points: no(i.type, i.w, i.h), fill: $, stroke: y, strokeWidth: X / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ Y("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: w }, children: x ? u("font-medium", { color: w, fontSize: $t(i), fontFamily: zt(i), textAlign: St(i) }) : /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: $t(i), fontFamily: zt(i), textAlign: St(i) }, dangerouslySetInnerHTML: { __html: p } }, "canvas-view") })
      ] });
    }
    const v = qe(i.src), f = i.type === "rect" || i.type === "ellipse" ? i.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ Y(
      "div",
      {
        "data-canvas-stroke-width": f,
        className: `w-full h-full flex items-center justify-center p-3 ${i.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: $, border: `${f / t.z}px solid ${y}`, color: w },
        children: x ? u("font-medium", { color: w, fontSize: $t(i), fontFamily: zt(i), textAlign: St(i) }) : /* @__PURE__ */ U("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: $t(i), fontFamily: zt(i), textAlign: St(i) }, children: [
          /* @__PURE__ */ Y("div", { dangerouslySetInnerHTML: { __html: p } }),
          v && /* @__PURE__ */ Y(
            "a",
            {
              href: v,
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
function oi({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: o,
  selected: r,
  editingId: c,
  boardIdentity: a
}) {
  const [s, d] = it({ width: 0, height: 0 });
  Pt(() => {
    const x = t.current;
    if (!x) return;
    let p = -1, $ = -1;
    const y = (g = x.clientWidth, v = x.clientHeight) => {
      g === p && v === $ || (p = g, $ = v, d({ width: g, height: v }));
    };
    if (y(), typeof ResizeObserver < "u") {
      const g = new ResizeObserver((v) => {
        var X;
        const f = (X = v[0]) == null ? void 0 : X.contentRect;
        y((f == null ? void 0 : f.width) ?? x.clientWidth, (f == null ? void 0 : f.height) ?? x.clientHeight);
      });
      return g.observe(x), () => g.disconnect();
    }
    const w = () => y();
    return window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, [a, t]);
  const m = Ft(() => new Map(n.map((x) => [x.id, x])), [n]), u = Ft(
    () => [...n].sort((x, p) => (x.type === "frame" ? -1 : 0) - (p.type === "frame" ? -1 : 0)),
    [n]
  ), h = Ft(() => {
    if (!t.current || s.width <= 0 || s.height <= 0) return null;
    const x = 200 / o.z;
    return {
      minX: o.x - x,
      minY: o.y - x,
      maxX: o.x + s.width / o.z + x,
      maxY: o.y + s.height / o.z + x
    };
  }, [o, t, s]), i = ht((x) => {
    if (!h) return !1;
    if (x.id === c || r.has(x.id)) return !0;
    if (x.type === "arrow") {
      const $ = It(x, m, e.current), w = ($.routing === "orthogonal" ? $.pathPoints : null) ?? [$.start, $.end], g = Math.min(...w.map((b) => b.x)), v = Math.max(...w.map((b) => b.x)), f = Math.min(...w.map((b) => b.y)), X = Math.max(...w.map((b) => b.y));
      return v >= h.minX && g <= h.maxX && X >= h.minY && f <= h.maxY;
    }
    const p = ft(x);
    return p.maxX >= h.minX && p.minX <= h.maxX && p.maxY >= h.minY && p.minY <= h.maxY;
  }, [c, r, m, e, h]), l = Ft(
    () => u.filter(i),
    [i, u]
  );
  return { shapeById: m, visiblePaintOrder: l };
}
function ri({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: o,
  onDirty: r,
  patchSelected: c
}) {
  const a = ht(() => {
    const l = t.current;
    if (!l || !e) return;
    let x;
    try {
      x = tn(l.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const p = l.scrollHeight;
    n(($) => $.map((y) => {
      if (y.id !== e) return y;
      const w = an(y) ? { ...y, text: me({ ...y, html: x, text: void 0 }), html: void 0 } : { ...y, html: x, text: void 0 };
      if (y.type === "text")
        return y.manualSize ? w : { ...w, ..._r(l, y) };
      if (y.type === "arrow") return w;
      const g = y.type === "note" ? 32 : y.type === "card" ? 96 : (
        // category header + type footer
        (y.type === "frame", 24)
      ), v = Math.max(y.h, p + g);
      return { ...w, h: v };
    })), r();
  }, [e, r]), s = (l) => {
    var x;
    (x = t.current) == null || x.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(l), a();
  }, d = () => {
    var $;
    const l = ($ = window.getSelection()) == null ? void 0 : $.anchorNode, x = l instanceof Element ? l : l == null ? void 0 : l.parentElement, p = x == null ? void 0 : x.closest("ul, ol");
    return p instanceof HTMLElement ? p : null;
  }, m = (l, x, p) => {
    const $ = document.createElement(x);
    for (; l.firstChild; ) $.append(l.firstChild);
    return l.replaceWith($), $;
  }, u = (l) => {
    const x = t.current;
    if (!x) return;
    x.focus();
    const p = d();
    if (l === "number")
      if ((p == null ? void 0 : p.tagName) === "OL")
        p.removeAttribute("data-list-style");
      else if ((p == null ? void 0 : p.tagName) === "UL")
        m(p, "ol");
      else {
        document.execCommand("insertOrderedList");
        const $ = d();
        $ == null || $.removeAttribute("data-list-style");
      }
    else if ((p == null ? void 0 : p.tagName) === "UL") {
      const $ = p.dataset.listStyle;
      l === $ ? document.execCommand("insertUnorderedList") : p.dataset.listStyle = l;
    } else {
      (p == null ? void 0 : p.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const $ = d();
      $ && ($.dataset.listStyle = l);
    }
    a();
  };
  return { commitEditorHtml: a, applyFormat: s, applyList: u, onEditorKeyDown: (l) => {
    if (l.key === "Tab") {
      l.preventDefault(), document.execCommand(l.shiftKey ? "outdent" : "indent"), a();
      return;
    }
    if (l.key === " ") {
      const x = window.getSelection();
      if (x && x.isCollapsed && x.anchorNode) {
        const p = x.anchorNode, $ = p.textContent || "", y = x.anchorOffset, w = $.slice(0, y).trim();
        if (!d()) {
          if (w === "-" || w === "–") {
            l.preventDefault(), p.textContent = $.slice(y), u("dash");
            return;
          }
          if (w === "*") {
            l.preventDefault(), p.textContent = $.slice(y), u("bullet");
            return;
          }
          if (w === "1.") {
            l.preventDefault(), p.textContent = $.slice(y), u("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (l) => {
    const x = ho(l);
    if (!x) {
      c({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    c({
      fontFamily: "custom",
      customFontFamily: x
    });
  } };
}
function ii({
  boardIdentity: t,
  tool: e,
  activeColor: n,
  defaultActiveColor: o,
  onActiveColorChange: r,
  controlledShapes: c,
  onShapesChange: a,
  onDirty: s
}) {
  const d = J(null), m = J(null), [u, h] = it([]), i = c !== void 0 && a !== void 0, l = J(/* @__PURE__ */ new WeakMap()), x = Ft(() => {
    const _ = l.current;
    return (i ? c ?? [] : u).map((R) => {
      let j = _.get(R);
      return j === void 0 && (j = co(R), _.set(R, j)), j;
    }).filter((R) => R !== null);
  }, [i, c, u]), p = J(a);
  p.current = a;
  const $ = ht((_) => {
    const R = p.current;
    if (!R) {
      h(_);
      return;
    }
    R(typeof _ == "function" ? _ : () => _);
  }, []), [y, w] = it({ x: -400, y: -300, z: 1 }), [g, v] = it(/* @__PURE__ */ new Set()), [f, X] = it(null), [b, C] = it({ kind: "none" }), [E, M] = it(!1), [S, F] = it([]), [T, P] = it(""), [z, I] = it(!1), [N, A] = it(null), [D, O] = it(n ?? o ?? "blue"), W = n ?? D, K = J(r);
  K.current = r;
  const L = ht((_) => {
    O((R) => {
      var rt;
      const j = typeof _ == "function" ? _(R) : _;
      return (rt = K.current) == null || rt.call(K, j), j;
    });
  }, []), [H, q] = it(Se), nt = J(W);
  nt.current = W;
  const tt = J([]), lt = J([]), G = J(null), kt = J(/* @__PURE__ */ new Map()), Et = J(null), pt = J(null), _t = J([]), Wt = J(/* @__PURE__ */ new Set()), ut = J(x), Q = J(y), et = J(e), dt = J(g), wt = J(f);
  ut.current = x, Q.current = y, et.current = e, dt.current = g, wt.current = f;
  const [vt, mt] = it("ink"), [ot, gt] = it("yellow"), yt = e === "highlighter" ? ot : vt, Xt = J(yt);
  Xt.current = yt;
  const re = ht((_) => {
    et.current === "highlighter" ? gt(_) : mt(_);
  }, []), Yt = J({ kind: "none" }), k = ht((_) => {
    Yt.current = _, C(_);
  }, []), B = ht((_) => {
    dt.current = _, v(_);
  }, []);
  te(() => {
    var R;
    const _ = /* @__PURE__ */ new Set();
    dt.current = _, wt.current = null, kt.current.clear(), tt.current = [], lt.current = [], G.current = null, pt.current = null, _t.current = [], Wt.current.clear(), k({ kind: "none" }), v(_), X(null), M(!1), F([]), A(null), P(""), (R = d.current) == null || R.focus();
  }, [k, t]), Pt(() => {
    let _ = !1;
    const R = () => {
      const rt = Tr();
      _ || q(rt);
    };
    if (R(), typeof document > "u" || !("fonts" in document)) return;
    const j = () => R();
    return document.fonts.addEventListener("loadingdone", j), () => {
      _ = !0, document.fonts.removeEventListener("loadingdone", j);
    };
  }, [t]);
  const ct = (f ? x.find((_) => _.id === f) : void 0) !== void 0;
  te(() => {
    if (!f || !ct) return;
    const _ = () => {
      const j = m.current, rt = ut.current.find((De) => De.id === f);
      if (!j || !rt || (j.dataset.seeded !== f && (j.innerHTML = Le(rt), j.dataset.seeded = f), document.activeElement === j)) return;
      j.focus();
      const Kt = document.createRange();
      Kt.selectNodeContents(j), Kt.collapse(!1);
      const jt = window.getSelection();
      jt == null || jt.removeAllRanges(), jt == null || jt.addRange(Kt);
    };
    _();
    const R = requestAnimationFrame(_);
    return () => cancelAnimationFrame(R);
  }, [f, ct]);
  const bt = ht((_) => {
    $((R) => {
      const j = typeof _ == "function" ? _(R) : _;
      return tt.current.push(R), tt.current.length > 100 && tt.current.shift(), lt.current = [], j;
    }), s();
  }, [s]), Bt = ht((_) => {
    if (_.length === 0) return;
    let R = ut.current;
    for (const j of _)
      tt.current.push(R), R = [...R, j];
    tt.current.length > 100 && tt.current.splice(0, tt.current.length - 100), lt.current = [], $((j) => [...j, ..._]), s();
  }, [s, $]), ue = ht((_) => _.size === 0 ? !1 : (bt((R) => R.filter((j) => _.has(j.id) ? !1 : j.type !== "arrow" ? !0 : !(j.fromId && _.has(j.fromId)) && !(j.toId && _.has(j.toId)))), B(/* @__PURE__ */ new Set()), P(`${_.size}개 삭제됨`), !0), [bt, B]), ge = ht(() => {
    G.current = ut.current;
  }, []), Fe = ht(() => {
    const _ = G.current;
    G.current = null, !(!_ || _ === ut.current) && (tt.current.push(_), tt.current.length > 100 && tt.current.shift(), lt.current = [], s());
  }, [s]), Ae = ht((_, R) => {
    var Kt;
    const j = (Kt = d.current) == null ? void 0 : Kt.getBoundingClientRect(), rt = Q.current;
    return j ? { x: (_ - j.left) / rt.z + rt.x, y: (R - j.top) / rt.z + rt.y } : { x: 0, y: 0 };
  }, []), ye = ht(() => {
    var j;
    const _ = (j = d.current) == null ? void 0 : j.getBoundingClientRect(), R = Q.current;
    return _ ? { x: R.x + _.width / 2 / R.z, y: R.y + _.height / 2 / R.z } : { x: 0, y: 0 };
  }, []), We = ht((_) => {
    const R = new Set(ut.current.filter((rt) => _.has(rt.id) && rt.groupId).map((rt) => rt.groupId));
    if (R.size === 0) return _;
    const j = new Set(_);
    for (const rt of ut.current) rt.groupId && R.has(rt.groupId) && j.add(rt.id);
    return j;
  }, []);
  return {
    containerRef: d,
    editorRef: m,
    localShapes: u,
    setLocalShapes: h,
    controlled: i,
    shapes: x,
    setShapes: $,
    camera: y,
    setCamera: w,
    cameraRef: Q,
    selected: g,
    setSelected: v,
    selectedRef: dt,
    editingId: f,
    setEditingId: X,
    editingIdRef: wt,
    interaction: b,
    interactionRef: Yt,
    applyInteraction: k,
    isSpaceDown: E,
    setIsSpaceDown: M,
    guides: S,
    setGuides: F,
    announcement: T,
    setAnnouncement: P,
    showInspectorPalette: z,
    setShowInspectorPalette: I,
    eraserPos: N,
    setEraserPos: A,
    activeColor: W,
    setActiveColor: L,
    activeColorRef: nt,
    drawColor: yt,
    setDrawColor: re,
    drawColorRef: Xt,
    installedFontFamilies: H,
    pointers: kt,
    past: tt,
    future: lt,
    selectNow: B,
    commit: bt,
    deleteSelection: ue,
    beginHistory: ge,
    endHistory: Fe,
    toPage: Ae,
    viewportCentre: ye,
    expandToGroups: We,
    toolRef: et,
    shapesRef: ut,
    liveStrokeCanvasRef: Et,
    activeDrawRef: pt,
    pendingDrawsRef: _t,
    queuedDrawIdsRef: Wt,
    commitDrawBatch: Bt
  };
}
function ai({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: o,
  maxZoom: r,
  shapes: c,
  selected: a,
  editingId: s,
  textualTypes: d,
  onZoomChange: m,
  onSelectionChange: u,
  onLocalCursor: h,
  toPage: i
}) {
  Pt(() => {
    m == null || m(e.z);
  }, [e.z, m]), Pt(() => {
    const g = t.current;
    if (!g) return;
    const v = (f) => {
      if (f.preventDefault(), f.ctrlKey || f.metaKey) {
        const X = g.getBoundingClientRect();
        n((b) => {
          const C = Math.min(r, Math.max(o, b.z * Math.exp(-f.deltaY * 0.01))), E = f.clientX - X.left, M = f.clientY - X.top;
          return { x: b.x + E / b.z - E / C, y: b.y + M / b.z - M / C, z: C };
        });
      } else
        n((X) => ({ ...X, x: X.x + f.deltaX / X.z, y: X.y + f.deltaY / X.z }));
    };
    return g.addEventListener("wheel", v, { passive: !1 }), () => g.removeEventListener("wheel", v);
  }, [t, r, o, n]);
  const l = Ft(() => {
    const g = c.filter((v) => a.has(v.id));
    return {
      count: g.length,
      canGroup: g.length > 1,
      canUngroup: g.some((v) => !!v.groupId),
      isTextual: g.length === 1 && d.includes(g[0].type),
      selectedIds: g.map((v) => v.id)
    };
  }, [a, c, d]);
  Pt(() => {
    u == null || u(l);
  }, [u, l]);
  const x = Ft(() => {
    if (s) {
      const v = c.find((f) => f.id === s);
      return v && v.type !== "image" && v.type !== "draw" ? [v] : [];
    }
    const g = c.filter((v) => a.has(v.id));
    return g.length === 1 && g[0].type === "image" ? [] : g;
  }, [s, a, c]), p = Ft(() => x.length === 0 ? null : x.find((g) => g.type !== "image") ?? null, [x]), $ = J(0);
  return { selectionInfo: l, inspectorSelection: x, inspectorShape: p, onContainerPointerMove: h ? (g) => {
    const v = performance.now();
    v - $.current < 60 || ($.current = v, h(i(g.clientX, g.clientY)));
  } : void 0, onContainerPointerLeave: h ? () => h(null) : void 0 };
}
const se = 24;
function ci({
  containerRef: t,
  shapesRef: e,
  selectedRef: n,
  commit: o,
  deleteSelection: r,
  selectNow: c,
  setAnnouncement: a,
  createId: s
}) {
  return Ft(() => ({
    deleteSelected: () => {
      r(n.current);
    },
    duplicateSelected: () => {
      var h;
      const d = n.current;
      if (d.size === 0) return;
      const m = [], u = /* @__PURE__ */ new Map();
      for (const i of e.current) {
        if (!d.has(i.id)) continue;
        let l = i.groupId;
        l && (u.has(l) || u.set(l, s("g")), l = u.get(l)), m.push({
          ...i,
          id: s(),
          x: i.x + se,
          y: i.y + se,
          groupId: l,
          points: (h = i.points) == null ? void 0 : h.map(([x, p]) => [x + se, p + se]),
          orthogonalWaypoints: i.type === "arrow" && i.orthogonalWaypoints ? i.orthogonalWaypoints.map((x) => ({ x: x.x + se, y: x.y + se })) : void 0
        });
      }
      o((i) => [...i, ...m]), c(new Set(m.map((i) => i.id))), a(`${m.length}개 복제됨`);
    },
    group: () => {
      var u;
      const d = n.current;
      if (d.size < 2) return;
      const m = s("g");
      o((h) => h.map((i) => d.has(i.id) ? { ...i, groupId: m } : i)), a(`${d.size}개 그룹화됨`), (u = t.current) == null || u.focus();
    },
    ungroup: () => {
      var m;
      const d = n.current;
      d.size !== 0 && (o((u) => u.map((h) => d.has(h.id) ? { ...h, groupId: void 0 } : h)), a("그룹 해제됨"), (m = t.current) == null || m.focus());
    }
  }), [o, t, s, r, c, n, a, e]);
}
function si(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, o = 1 / 0, r = -1 / 0, c = -1 / 0;
  for (const h of t) {
    const i = ft(h);
    n = Math.min(n, i.minX), o = Math.min(o, i.minY), r = Math.max(r, i.maxX), c = Math.max(c, i.maxY);
  }
  const a = 40, s = r - n + a * 2, d = c - o + a * 2;
  if (!Number.isFinite(s) || !Number.isFinite(d) || s > oe.maxExportDimension || d > oe.maxExportDimension || s * d > oe.maxExportPixels) return null;
  const m = (h, i, l, x, p) => {
    const $ = h.fontSize ?? l, y = zt(h), w = ao(Le(h));
    if (w.length === 0) return "";
    const g = Ht(h), v = h.textAlign === "right" ? "end" : h.textAlign === "center" ? "middle" : h.textAlign === "left" ? "start" : p, f = v === "end" ? g.maxX - 12 : v === "middle" ? (g.minX + g.maxX) / 2 : g.minX + 12, X = g.minY + $ + 12;
    return w.map((b, C) => {
      const E = b.map((M) => `<tspan style="${[
        M.bold ? "font-weight:700" : `font-weight:${x}`,
        M.italic ? "font-style:italic" : "",
        M.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Rt(M.text)}</tspan>`).join("");
      return `<text x="${f}" y="${X + C * $ * 1.4}" font-family="${Rt(y)}" font-size="${$}" fill="${i}" text-anchor="${v}">${E}</text>`;
    }).join("");
  }, u = t.map((h) => {
    const i = at[h.color ?? "blue"], l = Ht(h), x = Lt(h), p = h.rotation ? ` transform="rotate(${h.rotation * 180 / Math.PI} ${x.x} ${x.y})"` : "", $ = h.color ? at[h.color].border : V.ink;
    if (h.type === "draw" && h.points) {
      const b = h.drawMode ?? "pen", C = h.strokeWidth ?? 3, E = b === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${oo(h.points)}" fill="none" stroke="${$}" stroke-width="${C}"${E} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (h.type === "arrow") {
      const b = It(h, new Map(t.map((W) => [W.id, W])), t), C = h.strokeWidth ?? 2.5, E = Math.max(10, 8 + C * 2), M = Math.max(4, 2 + C), S = b.routing === "orthogonal" && b.pathPoints ? b.pathPoints : null, F = S && S.length > 1, T = F ? Ve(S) : b.routing === "curved" ? `M ${b.start.x} ${b.start.y} Q ${b.control.x} ${b.control.y} ${b.end.x} ${b.end.y}` : `M ${b.start.x} ${b.start.y} L ${b.end.x} ${b.end.y}`, P = F ? Rn(S) : b.routing === "curved" ? (() => {
        const W = le(0.94, b.start, b.control, b.end);
        return Math.atan2(b.end.y - W.y, b.end.x - W.x);
      })() : Math.atan2(b.end.y - b.start.y, b.end.x - b.start.x), z = F ? fe(S[0], S[1]) : b.routing === "orthogonal" && b.start.side ? b.start.side === "e" ? 0 : b.start.side === "w" ? Math.PI : b.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : fe(b.start, b.end), I = h.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : h.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", N = (W, K, L, H) => {
        if (W === "dot") return `<circle cx="${K}" cy="${L}" r="${M}" fill="${$}"/>`;
        if (W === "none") return "";
        const q = `${K - E * Math.cos(H - 0.4)},${L - E * Math.sin(H - 0.4)}`, nt = `${K - E * Math.cos(H + 0.4)},${L - E * Math.sin(H + 0.4)}`;
        return `<polygon points="${K},${L} ${q} ${nt}" fill="${$}"/>`;
      }, A = b.routing === "orthogonal" && b.pathPoints ? nn(b.pathPoints) : b.bend === 0 ? { x: (b.start.x + b.end.x) / 2, y: (b.start.y + b.end.y) / 2 } : le(0.5, b.start, b.control, b.end), D = me(h), O = D ? `<text x="${A.x}" y="${A.y - 6}" text-anchor="middle" font-family="${Rt(zt(h))}" font-size="${h.fontSize ?? 12}" fill="${$}">${Rt(D)}</text>` : "";
      return `<path d="${T}" fill="none" stroke="${$}" stroke-width="${C}" stroke-linecap="round" stroke-linejoin="round"${I}/>` + N(h.arrowEnd ?? "arrow", b.end.x, b.end.y, P) + N(h.arrowStart ?? "none", b.start.x, b.start.y, z + Math.PI) + O;
    }
    if (h.type === "image" && h.src) {
      const b = qe(h.src);
      return b ? `<image href="${Rt(b)}" x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}"${p}/>` : "";
    }
    if (h.type === "frame")
      return `<g${p}><rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}" fill="none" stroke="${V.slate400}" stroke-width="${h.strokeWidth ?? 2}" rx="4"/><text x="${l.minX}" y="${l.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${V.muted}">${Rt(h.text ?? "프레임")}</text></g>`;
    if (h.type === "note")
      return `<g${p}><rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}" fill="${i.bg}"/><rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="6" fill="${i.border}"/>` + m(h, i.text, 14, "600", "start") + "</g>";
    if (h.type === "card") {
      const b = h.cardStyle === "glass";
      return `<g${p}><rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}" rx="16" fill="${b ? V.glassFill : V.slateCard}"/><text x="${l.minX + 16}" y="${l.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${V.slate400}">[ ${Rt(h.category ?? "ENTITY")} ]</text>` + m(h, V.white, 16, "700", "start") + "</g>";
    }
    const y = h.type === "rect" || h.type === "ellipse" || h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star" ? h.strokeWidth ?? 2 : 2, w = Ne(h), g = eo(h), v = h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star", f = v ? no(h.type, l.maxX - l.minX, l.maxY - l.minY).split(" ").map((b) => {
      const [C, E] = b.split(",").map(Number);
      return `${C + l.minX},${E + l.minY}`;
    }).join(" ") : "", X = h.type === "ellipse" ? `<ellipse cx="${(l.minX + l.maxX) / 2}" cy="${(l.minY + l.maxY) / 2}" rx="${(l.maxX - l.minX) / 2}" ry="${(l.maxY - l.minY) / 2}" fill="${w}" stroke="${g}" stroke-width="${y}"/>` : v ? `<polygon points="${f}" fill="${w}" stroke="${g}" stroke-width="${y}" stroke-linejoin="round"/>` : `<rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}" rx="12" fill="${w}" stroke="${g}" stroke-width="${y}"/>`;
    return `<g${p}>${X}${m(h, i.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${d}" viewBox="${n - a} ${o - a} ${s} ${d}"><rect x="${n - a}" y="${o - a}" width="${s}" height="${d}" fill="${e ? V.canvasDark : V.canvasLight}"/>` + u + "</svg>";
}
async function li(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), o = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), r = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), c = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, a = new Image();
  a.crossOrigin = "anonymous";
  try {
    await new Promise((i, l) => {
      a.onload = () => i(), a.onerror = () => l(new Error("svg rasterise failed")), a.src = c;
    });
  } catch {
    return null;
  }
  const s = 2, d = o * s, m = r * s;
  if (!Number.isSafeInteger(d) || !Number.isSafeInteger(m) || d > oe.maxExportDimension || m > oe.maxExportDimension || d * m > oe.maxExportPixels) return null;
  const u = document.createElement("canvas");
  u.width = d, u.height = m;
  const h = u.getContext("2d");
  return h ? (h.scale(s, s), h.drawImage(a, 0, 0), new Promise((i) => {
    try {
      u.toBlob((l) => i(l), "image/png");
    } catch {
      i(null);
    }
  })) : null;
}
function ui(t, e, n) {
  if (t.length < 2) return;
  const o = t.filter(
    (i) => i.type !== "draw" && i.type !== "arrow" && i.type !== "frame" && i.type !== "image"
  );
  if (o.length < 2) return;
  const r = o.map((i, l) => ({
    id: i.id,
    i: l,
    x: Lt(i).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: Lt(i).y,
    vx: 0,
    vy: 0
  }));
  for (let i = 0; i < r.length; i++)
    for (let l = 0; l < i; l++)
      if (Math.abs(r[i].x - r[l].x) < 1 && Math.abs(r[i].y - r[l].y) < 1) {
        const x = 2 * Math.PI * i / r.length;
        r[i].x += Math.cos(x) * 10, r[i].y += Math.sin(x) * 10;
        break;
      }
  const c = new Map(r.map((i) => [i.id, i])), a = [];
  for (const i of t) {
    if (i.type !== "arrow") continue;
    const l = i.fromId ? c.get(i.fromId) : null, x = i.toId ? c.get(i.toId) : null;
    l && x && a.push([l, x]);
  }
  const s = 220, d = s * s, m = 80;
  let u = 400;
  const h = u / m;
  for (let i = 0; i < m; i++) {
    for (let l = 0; l < r.length; l++)
      r[l].vx = 0, r[l].vy = 0;
    for (let l = 0; l < r.length; l++)
      for (let x = l + 1; x < r.length; x++) {
        const p = r[l], $ = r[x], y = p.x - $.x, w = p.y - $.y, g = Math.hypot(y, w) || 0.01, v = d / g, f = y / g * v, X = w / g * v;
        p.vx += f, p.vy += X, $.vx -= f, $.vy -= X;
      }
    for (const [l, x] of a) {
      const p = l.x - x.x, $ = l.y - x.y, y = Math.hypot(p, $) || 0.01, w = y * y / s, g = p / y * w, v = $ / y * w;
      l.vx -= g, l.vy -= v, x.vx += g, x.vy += v;
    }
    for (const l of r) {
      const x = Math.hypot(l.vx, l.vy) || 0.01, p = Math.min(x, u);
      l.x += l.vx / x * p, l.y += l.vy / x * p;
    }
    u = Math.max(0.5, u - h);
  }
  e((i) => i.map((l) => {
    const x = c.get(l.id);
    return x ? { ...l, x: x.x - l.w / 2, y: x.y - l.h / 2 } : l;
  })), n();
}
function di(t, {
  controlled: e,
  past: n,
  future: o,
  setLocalShapes: r,
  setCamera: c,
  selectNow: a,
  setEditingId: s
}) {
  let d;
  try {
    d = Io(t);
  } catch {
    return;
  }
  e || (n.current = [], o.current = [], r(d.shapes.map(hi))), c(d.camera), a(/* @__PURE__ */ new Set()), s(null);
}
function hi(t) {
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
      return xi(t);
  }
}
function xi(t) {
  throw new Lo(`Unhandled canvas shape type: ${String(t)}.`);
}
const Fn = (t) => t === "draw" || t === "highlighter";
function fi({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: o,
  toolRef: r,
  activeColorRef: c,
  drawColorRef: a,
  setDrawColor: s,
  setActiveColor: d,
  past: m,
  future: u,
  controlled: h,
  isDarkMode: i,
  minZoom: l,
  maxZoom: x,
  onToolChange: p,
  setSelectedStrokeWidth: $,
  onDirty: y,
  commit: w,
  selectNow: g,
  selectionActions: v,
  viewportCentre: f,
  setShapes: X,
  setLocalShapes: b,
  setCamera: C,
  setEditingId: E,
  setAnnouncement: M,
  createId: S
}) {
  const F = ht((P) => {
    const z = f(), I = co({
      id: S(),
      x: P.x ?? z.x - P.w / 2,
      y: P.y ?? z.y - P.h / 2,
      ...P
    });
    if (!I) throw new Error("Canvas could not create a valid shape.");
    return w((N) => [...N, I]), g(/* @__PURE__ */ new Set([I.id])), p("select"), M(`${I.type} 추가됨`), I;
  }, [w, S, p, g, M, f]), T = ht(() => si(n.current, i), [i, n]);
  So(t, () => ({
    addNote: (P) => {
      const z = F({ type: "note", w: 180, h: 180, color: P, text: "" });
      E(z.id);
    },
    addCard: (P, z, I, N) => {
      F({ type: "card", w: 260, h: 150, text: P, category: z, cardStyle: I, color: N });
    },
    addText: () => {
      const P = F({ type: "text", w: 220, h: 44, text: "" });
      E(P.id);
    },
    addShape: (P, z, I) => {
      F({
        type: P,
        w: P === "ellipse" ? 220 : 200,
        h: P === "ellipse" ? 110 : 140,
        color: z,
        text: I ?? ""
      });
    },
    addArrow: () => {
      const P = f(), z = { id: S(), type: "arrow", x: P.x - 140, y: P.y, w: 280, h: 0 };
      w((I) => [...I, z]), g(/* @__PURE__ */ new Set([z.id])), p("select");
    },
    addImage: (P, z, I, N) => {
      F({ type: "image", w: I, h: N, src: P, fileName: z });
    },
    addFileCard: (P, z, I) => {
      F({ type: "rect", w: 260, h: 120, color: "purple", text: I, src: z, fileName: P });
    },
    updateShapeText: (P, z) => {
      w((I) => I.map((N) => N.id === P ? { ...N, text: z, html: void 0 } : N));
    },
    setSelectedStrokeWidth: $,
    // While a pen tool is active the "active colour" is the pen colour, so
    // hosts that drive the palette through the handle see the same thing the
    // user sees on the canvas. Other tools keep the note/shape colour.
    setActiveColor: (P) => {
      Fn(r.current) ? s(P) : d(P);
    },
    getActiveColor: () => Fn(r.current) ? a.current : c.current,
    setTool: p,
    undo: () => {
      const P = m.current.pop();
      P && (u.current.push(n.current), X(P), g(/* @__PURE__ */ new Set()), E(null), y(), M("실행 취소"));
    },
    redo: () => {
      const P = u.current.pop();
      P && (m.current.push(n.current), X(P), g(/* @__PURE__ */ new Set()), E(null), y(), M("다시 실행"));
    },
    deleteSelected: v.deleteSelected,
    duplicateSelected: v.duplicateSelected,
    group: v.group,
    ungroup: v.ungroup,
    zoomBy: (P) => {
      C((z) => {
        var O;
        const I = (O = e.current) == null ? void 0 : O.getBoundingClientRect(), N = Math.min(x, Math.max(l, z.z * P));
        if (!I) return { ...z, z: N };
        const A = z.x + I.width / 2 / z.z, D = z.y + I.height / 2 / z.z;
        return { x: A - I.width / 2 / N, y: D - I.height / 2 / N, z: N };
      });
    },
    zoomTo: (P) => {
      C((z) => {
        var O;
        const I = (O = e.current) == null ? void 0 : O.getBoundingClientRect(), N = Math.min(x, Math.max(l, P));
        if (!I) return { ...z, z: N };
        const A = z.x + I.width / 2 / z.z, D = z.y + I.height / 2 / z.z;
        return { x: A - I.width / 2 / N, y: D - I.height / 2 / N, z: N };
      });
    },
    resetZoom: () => {
      C((P) => {
        var A;
        const z = (A = e.current) == null ? void 0 : A.getBoundingClientRect();
        if (!z) return { ...P, z: 1 };
        const I = P.x + z.width / 2 / P.z, N = P.y + z.height / 2 / P.z;
        return { x: I - z.width / 2, y: N - z.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var K;
      const P = n.current, z = (K = e.current) == null ? void 0 : K.getBoundingClientRect();
      if (P.length === 0 || !z) return;
      let I = 1 / 0, N = 1 / 0, A = -1 / 0, D = -1 / 0;
      for (const L of P) {
        const H = ft(L);
        I = Math.min(I, H.minX), N = Math.min(N, H.minY), A = Math.max(A, H.maxX), D = Math.max(D, H.maxY);
      }
      const O = 80, W = Math.min(x, Math.max(
        l,
        Math.min(z.width / (A - I + O * 2), z.height / (D - N + O * 2))
      ));
      C({
        x: (I + A) / 2 - z.width / 2 / W,
        y: (N + D) / 2 - z.height / 2 / W,
        z: W
      });
    },
    autoLayout: () => ui(n.current, w, () => M("자동 배치 완료")),
    exportSvg: T,
    exportPng: () => li(T),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (P) => di(P, {
      controlled: h,
      past: m,
      future: u,
      setLocalShapes: b,
      setCamera: C,
      selectNow: g,
      setEditingId: E
    })
  }), [
    F,
    T,
    w,
    S,
    i,
    x,
    l,
    y,
    p,
    v,
    g,
    C,
    E,
    b,
    $,
    X,
    M,
    f,
    h
  ]);
}
function pi(t) {
  return t.altKey || !t.ctrlKey && !t.metaKey ? null : t.code === "KeyZ" ? t.shiftKey ? "redo" : "undo" : t.code === "KeyY" ? "redo" : null;
}
function vi(t) {
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
function mi({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: o,
  editingIdRef: r,
  toolRef: c,
  past: a,
  future: s,
  textualTypes: d,
  setIsSpaceDown: m,
  setEditingId: u,
  setShapes: h,
  setAnnouncement: i,
  commit: l,
  deleteSelection: x,
  selectNow: p,
  onDirty: $,
  onToolChange: y,
  createId: w
}) {
  const g = ht((v, f) => {
    const X = o.current;
    X.size !== 0 && l((b) => b.map((C) => {
      var E;
      return X.has(C.id) ? {
        ...C,
        x: C.x + v,
        y: C.y + f,
        points: (E = C.points) == null ? void 0 : E.map(([M, S]) => [M + v, S + f])
      } : C;
    }));
  }, [l, o]);
  Pt(() => {
    const v = (C) => {
      const E = C;
      return !!E && (E.tagName === "INPUT" || E.tagName === "TEXTAREA" || E.isContentEditable);
    }, f = (C) => C instanceof Element && !!C.closest("input, select, button, textarea, option, label, [data-canvas-control]"), X = (C) => {
      var N, A, D, O;
      const E = t.current, M = document.activeElement, S = C.target instanceof Node && !!(E != null && E.contains(C.target)), F = !!E && (M === E || E.contains(M));
      if (!S && !F || f(C.target)) return;
      if (C.code === "Space" && !v(C.target)) {
        m(!0), C.preventDefault();
        return;
      }
      if (v(C.target)) {
        if (C.key === "Escape")
          C.preventDefault(), u(null), (N = e.current) == null || N.blur(), (A = t.current) == null || A.focus();
        else if ((C.key === "Delete" || C.key === "Backspace") && !r.current) {
          const W = o.current;
          x(W) && C.preventDefault();
        }
        return;
      }
      const T = o.current, P = pi(C);
      if (P) {
        if (C.preventDefault(), P === "redo") {
          const W = s.current.pop();
          W && (a.current.push(n.current), h(W), $(), i("다시 실행"));
        } else {
          const W = a.current.pop();
          W && (s.current.push(n.current), h(W), $(), i("실행 취소"));
        }
        p(/* @__PURE__ */ new Set());
        return;
      }
      const z = C.metaKey || C.ctrlKey;
      if (z && C.key.toLowerCase() === "g") {
        if (C.preventDefault(), C.shiftKey)
          T.size > 0 && (l((W) => W.map((K) => T.has(K.id) ? { ...K, groupId: void 0 } : K)), i("그룹 해제됨"));
        else if (T.size > 1) {
          const W = w("g");
          l((K) => K.map((L) => T.has(L.id) ? { ...L, groupId: W } : L)), i(`${T.size}개 그룹화됨`);
        }
        return;
      }
      if (z && C.key.toLowerCase() === "a") {
        C.preventDefault(), p(new Set(n.current.map((W) => W.id))), i(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (C.key === "Delete" || C.key === "Backspace") {
        x(T) && C.preventDefault();
        return;
      }
      if (C.key.startsWith("Arrow")) {
        C.preventDefault();
        const W = C.shiftKey ? 10 : 1;
        C.key === "ArrowLeft" && g(-W, 0), C.key === "ArrowRight" && g(W, 0), C.key === "ArrowUp" && g(0, -W), C.key === "ArrowDown" && g(0, W);
        return;
      }
      if (C.key === "Tab" && n.current.length > 0) {
        C.preventDefault();
        const W = n.current, K = W.findIndex((q) => T.has(q.id)), L = C.shiftKey ? K <= 0 ? W.length - 1 : K - 1 : K === -1 || K === W.length - 1 ? 0 : K + 1, H = W[L];
        p(/* @__PURE__ */ new Set([H.id])), i(`${H.type} 선택됨: ${me(H) || "내용 없음"}`);
        return;
      }
      if (C.key === "Enter" && T.size === 1) {
        const W = n.current.find((K) => T.has(K.id));
        W && d.includes(W.type) && (C.preventDefault(), u(W.id));
        return;
      }
      if (C.key === "Escape") {
        if (r.current) {
          C.preventDefault(), u(null), (D = e.current) == null || D.blur(), (O = t.current) == null || O.focus(), y("select");
          return;
        }
        p(/* @__PURE__ */ new Set()), y("select");
        return;
      }
      const I = vi(C);
      I && (C.preventDefault(), c.current = I, y(I));
    }, b = (C) => {
      const E = t.current;
      !E || !(document.activeElement === E || E.contains(document.activeElement)) || C.code === "Space" && m(!1);
    };
    return window.addEventListener("keydown", X), window.addEventListener("keyup", b), () => {
      window.removeEventListener("keydown", X), window.removeEventListener("keyup", b);
    };
  }, [
    l,
    t,
    w,
    x,
    r,
    e,
    s,
    g,
    $,
    y,
    a,
    p,
    o,
    i,
    u,
    m,
    h,
    n,
    d,
    c
  ]);
}
function Ue(t, e) {
  return [(t[0] - e.x) * e.z, (t[1] - e.y) * e.z];
}
function Je(t, e, n) {
  const o = Math.max(n, 0.1), r = 0.05 / o, c = 4 / o;
  let a = t[t.length - 1];
  for (const s of e) {
    if (!a) {
      t.push(s), a = s;
      continue;
    }
    const d = s[0] - a[0], m = s[1] - a[1], u = Math.hypot(d, m);
    if (u < r) continue;
    const h = Math.max(1, Math.ceil(u / c)), i = Math.min(h, oe.maxDrawPoints - t.length);
    if (i <= 0) return;
    for (let l = 1; l <= i; l++) {
      const x = [
        a[0] + d * (l / h),
        a[1] + m * (l / h)
      ];
      t.push(x);
    }
    a = t[t.length - 1];
  }
}
function gi(t) {
  const e = (t.points ?? []).map(([a, s]) => [a, s]);
  if (e.length === 0) return t;
  let n = e[0][0], o = e[0][1], r = n, c = o;
  for (const [a, s] of e)
    n = Math.min(n, a), o = Math.min(o, s), r = Math.max(r, a), c = Math.max(c, s);
  return { ...t, points: e, x: n, y: o, w: r - n, h: c - o };
}
function An(t, e, n) {
  if (e.type !== "draw") return;
  const o = e.points ?? [];
  if (o.length === 0) return;
  const r = e.strokeWidth ?? 3, c = e.drawMode ?? "pen", a = e.color ? at[e.color].border : "#2563eb";
  if (t.save(), t.globalAlpha = c === "highlighter" ? 0.35 : 1, t.fillStyle = a, o.length === 1) {
    const [u, h] = Ue(o[0], n);
    t.beginPath(), t.arc(u, h, Math.max(ro(r, c) * n.z, 0.5), 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  const s = io(o, r, c);
  if (s.length === 0) {
    t.restore();
    return;
  }
  t.beginPath();
  const [d, m] = Ue([s[0][0], s[0][1]], n);
  t.moveTo(d, m);
  for (let u = 1; u < s.length; u++) {
    const [h, i] = Ue([s[u][0], s[u][1]], n);
    t.lineTo(h, i);
  }
  t.closePath(), t.fill(), t.restore();
}
function yi(t, e, n, o) {
  const r = Math.max(1, Math.min(2, o)), c = Math.max(1, Math.round(e * r)), a = Math.max(1, Math.round(n * r));
  return t.width !== c && (t.width = c), t.height !== a && (t.height = a), t.style.width = `${e}px`, t.style.height = `${n}px`, r;
}
function ve(t, e, n, o, r = 1) {
  var s;
  if (!t) return;
  const c = (s = t.getContext) == null ? void 0 : s.call(t, "2d");
  if (!c) return;
  const a = Math.max(1, Math.min(2, r || 1));
  c.setTransform(1, 0, 0, 1, 0, 0), c.clearRect(0, 0, t.width, t.height), c.setTransform(a, 0, 0, a, 0, 0);
  for (const d of e) An(c, d, o);
  n && An(c, n, o), c.setTransform(1, 0, 0, 1, 0, 0);
}
const wi = 0.1, bi = 4, cn = 14, ki = 4, Wn = ["note", "card", "rect", "ellipse", "text", "image"], Mi = 400;
function $i({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: o,
  editingIdRef: r,
  cameraRef: c,
  shapesRef: a,
  toolRef: s,
  activeColorRef: d,
  drawColorRef: m,
  drawStrokeWidth: u,
  camera: h,
  shapes: i,
  selected: l,
  isSpaceDown: x,
  textualTypes: p,
  setShapes: $,
  setEditingId: y,
  applyInteraction: w,
  selectNow: g,
  beginHistory: v,
  commit: f,
  onToolChange: X,
  expandToGroups: b,
  toPage: C,
  createId: E,
  liveStrokeCanvasRef: M,
  activeDrawRef: S,
  pendingDrawsRef: F
}) {
  const T = E, P = J(null), z = (L, H) => {
    var lt;
    const q = ((lt = t.current) == null ? void 0 : lt.dataset.canvasActiveTool) === "text" ? "text" : s.current;
    if (q !== "note" && q !== "text") return;
    const nt = C(L, H), tt = q === "note" ? { id: T(), type: "note", x: nt.x - 90, y: nt.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: T(), type: "text", x: nt.x, y: nt.y - 22, w: 220, h: 44, text: "" };
    f((G) => [...G, tt]), g(/* @__PURE__ */ new Set([tt.id])), y(tt.id), X("select");
  };
  return Pt(() => {
    const L = (H) => {
      var q;
      (q = t.current) != null && q.contains(H.target) && (H.target instanceof Element && H.target.closest('[role="textbox"], [data-canvas-inspector]') || z(H.clientX, H.clientY));
    };
    return window.addEventListener("click", L, !0), () => window.removeEventListener("click", L, !0);
  }), { onPointerDown: (L) => {
    var _t, Wt, ut;
    const H = s.current, q = L.target instanceof Element ? L.target : null, nt = !!(q != null && q.closest("[data-canvas-editor]")) && r.current !== null;
    n.current.set(L.pointerId, { x: L.clientX, y: L.clientY });
    const tt = o.current;
    if (tt.kind === "drawing" && tt.pointerId !== L.pointerId) {
      n.current.delete(L.pointerId);
      return;
    }
    !nt && L.cancelable && L.preventDefault();
    const lt = L.currentTarget;
    try {
      lt.setPointerCapture(L.pointerId);
    } catch {
    }
    if (n.current.size === 2) {
      const [Q, et] = [...n.current.values()], dt = c.current;
      w({
        kind: "pinch",
        startDist: Math.hypot(et.x - Q.x, et.y - Q.y) || 1,
        startZoom: dt.z,
        startMidX: (Q.x + et.x) / 2,
        startMidY: (Q.y + et.y) / 2,
        camX: dt.x,
        camY: dt.y
      });
      return;
    }
    if (n.current.size > 2) return;
    if (L.button === 1 || x || H === "hand" || L.button === 0 && H === "select" && L.altKey) {
      w({ kind: "pan", startX: L.clientX, startY: L.clientY, camX: h.x, camY: h.y });
      return;
    }
    if (L.button !== 0) return;
    const G = C(L.clientX, L.clientY);
    if (nt || (y(null), (_t = e.current) == null || _t.blur(), (Wt = t.current) == null || Wt.focus()), H === "draw" || H === "highlighter") {
      const Q = {
        id: T(),
        type: "draw",
        x: G.x,
        y: G.y,
        w: 0,
        h: 0,
        points: [[G.x, G.y]],
        color: m.current,
        strokeWidth: u,
        drawMode: H === "highlighter" ? "highlighter" : "pen"
      };
      S.current = Q, ve(M.current, F.current, Q, c.current, window.devicePixelRatio || 1), w({ kind: "drawing", id: Q.id, pointerId: L.pointerId });
      return;
    }
    if (H === "arrow" || H === "frame" || Eo.includes(H)) {
      const Q = H, et = H === "arrow" ? { id: T(), type: "arrow", x: G.x, y: G.y, w: 0, h: 0, color: d.current } : H === "frame" ? { id: T(), type: "frame", x: G.x, y: G.y, w: 0, h: 0, text: "프레임" } : { id: T(), type: Q, x: G.x, y: G.y, w: 0, h: 0, color: d.current, text: "" };
      v(), $((dt) => [...dt, et]), w({ kind: "creating", id: et.id, startX: G.x, startY: G.y });
      return;
    }
    if (H === "note" || H === "text") return;
    if (H === "eraser") {
      v(), $((Q) => Sr(Q, G.x, G.y, cn, h.z)), w({ kind: "erasing", lastX: G.x, lastY: G.y });
      return;
    }
    const kt = new Map(i.map((Q) => [Q.id, Q])), Et = r.current ? i.find((Q) => Q.id === r.current) : void 0, pt = nt && Et ? Et : [...i].reverse().find((Q) => Ze(Q, G.x, G.y, h.z, kt, i));
    if (!pt)
      P.current = null;
    else {
      const Q = Date.now(), et = !L.shiftKey && p.includes(pt.type) && ((ut = P.current) == null ? void 0 : ut.id) === pt.id && Q - P.current.time < Mi, dt = et ? pt.id : void 0;
      P.current = et ? null : { id: pt.id, time: Q };
      const wt = L.shiftKey ? new Set(l).add(pt.id) : l.has(pt.id) ? l : /* @__PURE__ */ new Set([pt.id]), vt = b(wt);
      g(vt);
      const mt = /* @__PURE__ */ new Map();
      for (const ot of i) vt.has(ot.id) && mt.set(ot.id, ot);
      for (const ot of i) {
        if (ot.type !== "frame" || !vt.has(ot.id)) continue;
        const gt = ft(ot);
        for (const yt of i) {
          if (yt.id === ot.id || mt.has(yt.id)) continue;
          const Xt = Lt(yt);
          Xt.x >= gt.minX && Xt.x <= gt.maxX && Xt.y >= gt.minY && Xt.y <= gt.maxY && mt.set(yt.id, yt);
        }
      }
      v(), w({ kind: "move", startX: G.x, startY: G.y, origin: mt, editOnReleaseId: dt });
      return;
    }
    L.shiftKey || g(/* @__PURE__ */ new Set()), w({
      kind: "marquee",
      startX: G.x,
      startY: G.y,
      curX: G.x,
      curY: G.y,
      screenStartX: L.clientX,
      screenStartY: L.clientY
    });
  }, onResizeHandleDown: (L, H, q) => {
    L.stopPropagation(), n.current.set(L.pointerId, { x: L.clientX, y: L.clientY }), v(), w({ kind: "resize", id: H.id, handle: q, start: H });
  }, onRotateHandleDown: (L, H) => {
    L.stopPropagation(), n.current.set(L.pointerId, { x: L.clientX, y: L.clientY });
    const q = C(L.clientX, L.clientY), nt = Lt(H);
    v(), w({
      kind: "rotate",
      id: H.id,
      startAngle: Math.atan2(q.y - nt.y, q.x - nt.x),
      startRotation: H.rotation ?? 0
    });
  }, onConnectHandleDown: (L, H) => {
    L.stopPropagation(), n.current.set(L.pointerId, { x: L.clientX, y: L.clientY });
    const q = C(L.clientX, L.clientY);
    w({ kind: "connect", fromId: H.id, toX: q.x, toY: q.y, hoverId: null });
  }, onBendHandleDown: (L, H) => {
    L.stopPropagation(), n.current.set(L.pointerId, { x: L.clientX, y: L.clientY }), v(), w({ kind: "bend", id: H.id });
  }, onOrthogonalSegmentHandleDown: (L, H, q) => {
    L.stopPropagation(), n.current.set(L.pointerId, { x: L.clientX, y: L.clientY }), v(), w({ kind: "orthogonal-segment", id: H.id, segmentIndex: q });
  }, onArrowEndpointDown: (L, H, q) => {
    L.stopPropagation(), n.current.set(L.pointerId, { x: L.clientX, y: L.clientY }), v(), w({ kind: "arrow-endpoint", id: H.id, endpoint: q, hoverId: null });
  } };
}
function zi({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: o,
  shapesRef: r,
  setShapes: c,
  setEditingId: a,
  setEraserPos: s,
  setGuides: d,
  setAnnouncement: m,
  applyInteraction: u,
  selectNow: h,
  endHistory: i,
  commit: l,
  onToolChange: x,
  createId: p,
  pendingDrawPointsRef: $,
  drawRafRef: y,
  liveStrokeCanvasRef: w,
  activeDrawRef: g,
  pendingDrawsRef: v,
  queuedDrawIdsRef: f,
  commitDrawBatch: X
}) {
  const b = p, C = J(null);
  Pt(() => {
    const E = (M) => {
      var F, T;
      t.current.delete(M.pointerId);
      try {
        (T = (F = M.target) == null ? void 0 : F.releasePointerCapture) == null || T.call(F, M.pointerId);
      } catch {
      }
      const S = e.current;
      if (S.kind !== "none") {
        if (S.kind === "pinch") {
          t.current.size < 2 && u({ kind: "none" });
          return;
        }
        if (d([]), S.kind === "erasing") {
          if (M.type === "pointerup") {
            const P = o(M.clientX, M.clientY);
            c((z) => rn(
              z,
              { x: S.lastX, y: S.lastY },
              P,
              cn,
              n.current.z
            ));
          }
          s(null), i(), u({ kind: "none" });
          return;
        }
        if (S.kind === "connect") {
          const z = r.current.find((W) => W.id === S.fromId);
          if (u({ kind: "none" }), !z) return;
          const I = { x: S.toX, y: S.toY }, N = Lt(z);
          if (!S.hoverId && Math.hypot(I.x - N.x, I.y - N.y) < 30) return;
          const A = [];
          let D = S.hoverId;
          if (!D) {
            const W = z.type === "note" ? 180 : 200, K = z.type === "note" ? 180 : 120, L = {
              ...z,
              id: b(),
              x: I.x - W / 2,
              y: I.y - K / 2,
              w: W,
              h: K,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            A.push(L), D = L.id;
          }
          const O = {
            id: b(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: z.id,
            toId: D,
            text: ""
          };
          A.push(O), l((W) => [...W, ...A]), h(/* @__PURE__ */ new Set([O.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => a(O.id)) : a(O.id), m("연결 생성됨");
          return;
        }
        if (S.kind === "bend") {
          i(), u({ kind: "none" });
          return;
        }
        if (S.kind === "drawing") {
          if (S.pointerId !== M.pointerId) return;
          y.current !== null && (cancelAnimationFrame(y.current), y.current = null);
          const P = $.current.splice(0), z = g.current;
          if (z && z.id === S.id && z.points) {
            if (Je(z.points, P, n.current.z), M.type === "pointerup") {
              const N = o(M.clientX, M.clientY);
              Je(z.points, [[N.x, N.y]], n.current.z);
            }
            const I = gi(z);
            v.current = [...v.current, I], g.current = null, ve(w.current, v.current, null, n.current, window.devicePixelRatio || 1), C.current === null && (C.current = requestAnimationFrame(() => {
              C.current = null;
              const N = v.current.filter((A) => !f.current.has(A.id));
              if (N.length !== 0) {
                for (const A of N) f.current.add(A.id);
                X(N);
              }
            }));
          }
          u({ kind: "none" });
          return;
        }
        if (S.kind === "creating") {
          c((P) => P.map((z) => {
            if (z.id !== S.id) return z;
            const I = Math.abs(z.w) < 4 && Math.abs(z.h) < 4 ? {
              ...z,
              w: z.type === "arrow" ? 200 : z.type === "frame" ? 480 : 180,
              h: z.type === "arrow" ? 0 : z.type === "frame" ? 320 : 120
            } : z;
            if (I.type === "arrow") return I;
            const N = Ht(I);
            return { ...I, x: N.minX, y: N.minY, w: N.maxX - N.minX, h: N.maxY - N.minY };
          })), i(), h(/* @__PURE__ */ new Set([S.id])), x("select"), u({ kind: "none" });
          return;
        }
        if ((S.kind === "move" || S.kind === "resize" || S.kind === "rotate" || S.kind === "orthogonal-segment" || S.kind === "arrow-endpoint") && i(), S.kind === "move" && S.editOnReleaseId && M.type === "pointerup") {
          const P = o(M.clientX, M.clientY);
          Math.hypot(P.x - S.startX, P.y - S.startY) * n.current.z <= ki && a(S.editOnReleaseId);
        }
        u({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", E), window.addEventListener("pointercancel", E), () => {
      window.removeEventListener("pointerup", E), window.removeEventListener("pointercancel", E);
    };
  }, [
    g,
    u,
    n,
    X,
    p,
    y,
    i,
    e,
    w,
    x,
    $,
    v,
    t,
    f,
    h,
    m,
    a,
    d,
    s,
    c,
    r,
    o,
    l
  ]);
}
function Ci({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: o,
  shapesRef: r,
  setCamera: c,
  setShapes: a,
  setEraserPos: s,
  setGuides: d,
  applyInteraction: m,
  selectNow: u,
  expandToGroups: h,
  toPage: i,
  pendingDrawPointsRef: l,
  drawRafRef: x,
  liveStrokeCanvasRef: p,
  activeDrawRef: $,
  pendingDrawsRef: y
}) {
  Pt(() => () => {
    x.current !== null && cancelAnimationFrame(x.current);
  }, [x]), Pt(() => {
    const w = (v, f) => {
      const X = $.current;
      if (!X || X.id !== f || !X.points) return;
      const b = i(v.clientX, v.clientY);
      if (v.shiftKey) {
        x.current !== null && (cancelAnimationFrame(x.current), x.current = null), l.current = [];
        const E = X.points[0];
        E && (X.points = [E, [b.x, b.y]]), ve(p.current, y.current, X, o.current, window.devicePixelRatio || 1);
        return;
      }
      const C = typeof v.getCoalescedEvents == "function" ? v.getCoalescedEvents() : [];
      for (const E of C) {
        const M = i(E.clientX, E.clientY);
        l.current.push([M.x, M.y]);
      }
      l.current.push([b.x, b.y]), x.current === null && (x.current = requestAnimationFrame(() => {
        x.current = null;
        const E = l.current;
        if (E.length === 0) return;
        l.current = [];
        const M = $.current;
        !M || M.id !== f || !M.points || (Je(M.points, E, o.current.z), ve(p.current, y.current, M, o.current, window.devicePixelRatio || 1));
      }));
    }, g = (v) => {
      var C, E;
      e.current.has(v.pointerId) && e.current.set(v.pointerId, { x: v.clientX, y: v.clientY });
      const f = n.current;
      if (f.kind === "none") return;
      const X = o.current;
      if (f.kind === "pinch") {
        if (e.current.size < 2) return;
        const [M, S] = [...e.current.values()], F = Math.hypot(S.x - M.x, S.y - M.y) || 1, T = (M.x + S.x) / 2, P = (M.y + S.y) / 2, z = (C = t.current) == null ? void 0 : C.getBoundingClientRect();
        if (!z) return;
        const I = Math.min(bi, Math.max(wi, f.startZoom * (F / f.startDist))), N = f.camX + (f.startMidX - z.left) / f.startZoom, A = f.camY + (f.startMidY - z.top) / f.startZoom;
        c({ x: N - (T - z.left) / I, y: A - (P - z.top) / I, z: I });
        return;
      }
      if (f.kind === "pan") {
        c({
          x: f.camX - (v.clientX - f.startX) / X.z,
          y: f.camY - (v.clientY - f.startY) / X.z,
          z: X.z
        });
        return;
      }
      const b = i(v.clientX, v.clientY);
      if (f.kind === "erasing") {
        a((M) => rn(
          M,
          { x: f.lastX, y: f.lastY },
          b,
          cn,
          X.z
        )), s({ x: b.x, y: b.y }), m({ kind: "erasing", lastX: b.x, lastY: b.y });
        return;
      }
      if (f.kind === "connect") {
        const M = r.current, S = new Map(M.map((T) => [T.id, T])), F = [...M].reverse().find((T) => T.id !== f.fromId && Wn.includes(T.type) && Ze(T, b.x, b.y, X.z, S, M));
        m({ ...f, toX: b.x, toY: b.y, hoverId: (F == null ? void 0 : F.id) ?? null });
        return;
      }
      if (f.kind === "bend") {
        const M = r.current, S = M.find((D) => D.id === f.id);
        if (!S) return;
        const F = It(S, new Map(M.map((D) => [D.id, D])), M), T = F.end.x - F.start.x, P = F.end.y - F.start.y, z = Math.hypot(T, P) || 1, I = (F.start.x + F.end.x) / 2, N = (F.start.y + F.end.y) / 2, A = (b.x - I) * (-P / z) + (b.y - N) * (T / z);
        a((D) => D.map((O) => O.id === f.id ? { ...O, bend: A } : O));
        return;
      }
      if (f.kind === "orthogonal-segment") {
        const M = r.current, S = M.find((A) => A.id === f.id);
        if (!S) return;
        const F = It(S, new Map(M.map((A) => [A.id, A])), M), T = F.routing === "orthogonal" ? F.pathPoints : void 0;
        if (!T || T.length < 2) return;
        const P = T[f.segmentIndex], z = T[f.segmentIndex + 1];
        if (!P || !z) return;
        const I = P.x === z.x ? b.x : b.y, N = tr(T, f.segmentIndex, I);
        a((A) => A.map((D) => D.id === f.id ? { ...D, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: N.slice(1, -1).map((O) => ({ x: O.x, y: O.y })) } : D));
        return;
      }
      if (f.kind === "arrow-endpoint") {
        const M = r.current, S = M.find((N) => N.id === f.id);
        if (!S) return;
        const F = new Map(M.map((N) => [N.id, N])), T = It(S, F, M), P = f.endpoint === "start" ? T.end : T.start, z = [...M].reverse().find((N) => N.id !== S.id && Wn.includes(N.type) && Ze(N, b.x, b.y, X.z, F, M)), I = z ? ne(z, P.x, P.y) : { x: b.x, y: b.y };
        m({ ...f, hoverId: (z == null ? void 0 : z.id) ?? null }), a((N) => N.map((A) => {
          if (A.id !== S.id) return A;
          const D = f.endpoint === "start" ? I : P, O = f.endpoint === "end" ? I : P;
          return {
            ...A,
            x: D.x,
            y: D.y,
            w: O.x - D.x,
            h: O.y - D.y,
            fromId: f.endpoint === "start" ? z == null ? void 0 : z.id : A.fromId,
            toId: f.endpoint === "end" ? z == null ? void 0 : z.id : A.toId
          };
        }));
        return;
      }
      if (f.kind === "marquee") {
        m({ ...f, curX: b.x, curY: b.y });
        const M = Math.min(f.startX, b.x), S = Math.max(f.startX, b.x), F = Math.min(f.startY, b.y), T = Math.max(f.startY, b.y), P = Math.min(f.screenStartX, v.clientX), z = Math.max(f.screenStartX, v.clientX), I = Math.min(f.screenStartY, v.clientY), N = Math.max(f.screenStartY, v.clientY), A = /* @__PURE__ */ new Map();
        (E = t.current) == null || E.querySelectorAll("[data-canvas-shape-id]").forEach((O) => {
          const W = O.dataset.canvasShapeId;
          W && A.set(W, O.getBoundingClientRect());
        });
        const D = r.current.filter((O) => {
          const W = A.get(O.id);
          if (W)
            return W.right >= P && W.left <= z && W.bottom >= I && W.top <= N;
          const K = ft(O);
          return K.maxX >= M && K.minX <= S && K.maxY >= F && K.minY <= T;
        }).map((O) => O.id);
        u(h(new Set(D)));
        return;
      }
      if (f.kind === "move") {
        let M = b.x - f.startX, S = b.y - f.startY;
        const F = f.origin, T = (() => {
          let I = 1 / 0, N = 1 / 0, A = -1 / 0, D = -1 / 0;
          return F.forEach((O) => {
            const W = ft({ ...O, x: O.x + M, y: O.y + S });
            I = Math.min(I, W.minX), N = Math.min(N, W.minY), A = Math.max(A, W.maxX), D = Math.max(D, W.maxY);
          }), { minX: I, minY: N, maxX: A, maxY: D };
        })(), P = r.current.filter((I) => !F.has(I.id)), z = Xr(T, P, X.z);
        M += z.dx, S += z.dy, d(z.guides), a((I) => I.map((N) => {
          var D;
          const A = F.get(N.id);
          return A ? {
            ...N,
            x: A.x + M,
            y: A.y + S,
            points: (D = A.points) == null ? void 0 : D.map(([O, W]) => [O + M, W + S]),
            ...A.type === "arrow" && A.orthogonalWaypoints ? { orthogonalWaypoints: A.orthogonalWaypoints.map((O) => ({ x: O.x + M, y: O.y + S })) } : {}
          } : N;
        }));
        return;
      }
      if (f.kind === "drawing") {
        if (f.pointerId !== v.pointerId) return;
        w(v, f.id);
        return;
      }
      if (f.kind === "creating") {
        a((M) => M.map((S) => S.id === f.id ? { ...S, w: b.x - f.startX, h: b.y - f.startY } : S));
        return;
      }
      if (f.kind === "rotate") {
        const M = r.current.find((P) => P.id === f.id);
        if (!M) return;
        const S = Lt(M), F = Math.atan2(b.y - S.y, b.x - S.x);
        let T = f.startRotation + (F - f.startAngle);
        v.shiftKey && (T = Math.round(T / (Math.PI / 12)) * (Math.PI / 12)), a((P) => P.map((z) => z.id === f.id ? { ...z, rotation: T } : z));
        return;
      }
      if (f.kind === "resize") {
        const { start: M, handle: S } = f, F = Pe(M, b.x, b.y);
        a((T) => T.map((P) => {
          if (P.id !== M.id) return P;
          let { x: z, y: I, w: N, h: A } = M;
          if (S.includes("e") && (N = Math.max(20, F.x - M.x)), S.includes("s") && (A = Math.max(20, F.y - M.y)), S.includes("w")) {
            const D = M.x + M.w;
            z = Math.min(F.x, D - 20), N = D - z;
          }
          if (S.includes("n")) {
            const D = M.y + M.h;
            I = Math.min(F.y, D - 20), A = D - I;
          }
          return { ...P, x: z, y: I, w: N, h: A, manualSize: P.type === "text" ? !0 : P.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", g), () => window.removeEventListener("pointermove", g);
  }, [
    $,
    m,
    o,
    t,
    x,
    h,
    n,
    p,
    l,
    y,
    e,
    u,
    r,
    i
  ]);
}
function Si(t) {
  const e = J([]), n = J(null), o = { ...t, pendingDrawPointsRef: e, drawRafRef: n };
  Ci(o), zi(o);
}
function Xi({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: o,
  editingIdRef: r,
  cameraRef: c,
  shapesRef: a,
  toolRef: s,
  activeColorRef: d,
  drawColorRef: m,
  drawStrokeWidth: u,
  camera: h,
  shapes: i,
  selected: l,
  isSpaceDown: x,
  textualTypes: p,
  setCamera: $,
  setShapes: y,
  setEditingId: w,
  setEraserPos: g,
  setGuides: v,
  setAnnouncement: f,
  applyInteraction: X,
  selectNow: b,
  beginHistory: C,
  endHistory: E,
  commit: M,
  onToolChange: S,
  expandToGroups: F,
  toPage: T,
  createId: P,
  liveStrokeCanvasRef: z,
  activeDrawRef: I,
  pendingDrawsRef: N,
  queuedDrawIdsRef: A,
  commitDrawBatch: D
}) {
  const O = $i({
    containerRef: t,
    editorRef: e,
    pointers: n,
    interactionRef: o,
    editingIdRef: r,
    cameraRef: c,
    shapesRef: a,
    toolRef: s,
    activeColorRef: d,
    drawColorRef: m,
    drawStrokeWidth: u,
    camera: h,
    shapes: i,
    selected: l,
    isSpaceDown: x,
    textualTypes: p,
    setShapes: y,
    setEditingId: w,
    applyInteraction: X,
    selectNow: b,
    beginHistory: C,
    commit: M,
    onToolChange: S,
    expandToGroups: F,
    toPage: T,
    createId: P,
    liveStrokeCanvasRef: z,
    activeDrawRef: I,
    pendingDrawsRef: N
  });
  return Si({
    containerRef: t,
    pointers: n,
    interactionRef: o,
    cameraRef: c,
    shapesRef: a,
    setCamera: $,
    setShapes: y,
    setEditingId: w,
    setEraserPos: g,
    setGuides: v,
    setAnnouncement: f,
    applyInteraction: X,
    selectNow: b,
    endHistory: E,
    commit: M,
    onToolChange: S,
    expandToGroups: F,
    toPage: T,
    createId: P,
    liveStrokeCanvasRef: z,
    activeDrawRef: I,
    pendingDrawsRef: N,
    queuedDrawIdsRef: A,
    commitDrawBatch: D
  }), O;
}
function Yi(t) {
  fi(t);
  const e = Ft(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return mi({ ...t, toolRef: e }), Xi(t);
}
function Ni({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: o,
  zoom: r
}) {
  const c = n || o.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", a = t ? V.gridDark : V.gridLight, s = 40 * r;
  return { cursor: c, gridColor: a, gridSize: s, strokeColorOf: (m) => m.strokeColor ? to(m) : m.color ? at[m.color].border : t ? "var(--canvas-slate-200)" : V.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = qo, document.head.appendChild(t);
}
const Dn = 0.1, On = 4, Hn = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function po(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function _n(t, e, n) {
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
        return po(o);
    }
  });
}
function Pi(t, e, n) {
  return t.map((o) => e.has(o.id) && o.type === "draw" ? { ...o, ...n } : o);
}
function Bn(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const Ai = Xo(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: o,
  activeColor: r,
  defaultActiveColor: c,
  onActiveColorChange: a,
  drawStrokeWidth: s = 4,
  onToolChange: d,
  onDirty: m,
  onZoomChange: u,
  onSelectionChange: h,
  shapes: i,
  onShapesChange: l,
  peerCursors: x,
  onLocalCursor: p,
  renderDiagram: $
}, y) {
  var hn, xn;
  const {
    containerRef: w,
    editorRef: g,
    setLocalShapes: v,
    controlled: f,
    shapes: X,
    setShapes: b,
    camera: C,
    setCamera: E,
    cameraRef: M,
    selected: S,
    selectedRef: F,
    editingId: T,
    setEditingId: P,
    editingIdRef: z,
    interaction: I,
    interactionRef: N,
    applyInteraction: A,
    isSpaceDown: D,
    setIsSpaceDown: O,
    guides: W,
    setGuides: K,
    announcement: L,
    setAnnouncement: H,
    showInspectorPalette: q,
    setShowInspectorPalette: nt,
    eraserPos: tt,
    setEraserPos: lt,
    setActiveColor: G,
    activeColorRef: kt,
    drawColor: Et,
    setDrawColor: pt,
    drawColorRef: _t,
    installedFontFamilies: Wt,
    pointers: ut,
    past: Q,
    future: et,
    selectNow: dt,
    commit: wt,
    deleteSelection: vt,
    beginHistory: mt,
    endHistory: ot,
    toPage: gt,
    viewportCentre: yt,
    expandToGroups: Xt,
    toolRef: re,
    shapesRef: Yt,
    liveStrokeCanvasRef: k,
    activeDrawRef: B,
    pendingDrawsRef: Z,
    queuedDrawIdsRef: ct,
    commitDrawBatch: bt
  } = ii({ boardIdentity: e, tool: o, activeColor: r, defaultActiveColor: c, onActiveColorChange: a, controlledShapes: i, onShapesChange: l, onDirty: m });
  te(() => {
    const st = k.current, Dt = w.current;
    if (!st || !Dt) return;
    const Nt = () => {
      const we = yi(st, Dt.clientWidth, Dt.clientHeight, window.devicePixelRatio || 1), be = new Set(X.map((ie) => ie.id));
      Z.current = Z.current.filter((ie) => !be.has(ie.id));
      for (const ie of be) ct.current.delete(ie);
      ve(st, Z.current, B.current, M.current, we);
    };
    if (Nt(), typeof ResizeObserver > "u")
      return window.addEventListener("resize", Nt), () => window.removeEventListener("resize", Nt);
    const Ut = new ResizeObserver(Nt);
    return Ut.observe(Dt), window.addEventListener("resize", Nt), () => {
      Ut.disconnect(), window.removeEventListener("resize", Nt);
    };
  }, [B, C, M, w, k, Z, ct, X]);
  const Bt = ci({
    containerRef: w,
    shapesRef: Yt,
    selectedRef: F,
    commit: wt,
    deleteSelection: vt,
    selectNow: dt,
    setAnnouncement: H,
    createId: Bn
  }), {
    inspectorSelection: ue,
    inspectorShape: ge,
    onContainerPointerMove: Fe,
    onContainerPointerLeave: Ae
  } = ai({
    containerRef: w,
    camera: C,
    setCamera: E,
    minZoom: Dn,
    maxZoom: On,
    shapes: X,
    selected: S,
    editingId: T,
    textualTypes: Hn,
    onZoomChange: u,
    onSelectionChange: h,
    onLocalCursor: p,
    toPage: gt
  }), ye = Ye.useCallback((st) => {
    const Dt = new Set(F.current);
    Dt.size !== 0 && wt((Nt) => _n(Nt, Dt, st));
  }, [wt, F]), {
    onPointerDown: We,
    onResizeHandleDown: _,
    onRotateHandleDown: R,
    onConnectHandleDown: j,
    onBendHandleDown: rt,
    onOrthogonalSegmentHandleDown: Kt,
    onArrowEndpointDown: jt
  } = Yi({
    ref: y,
    containerRef: w,
    editorRef: g,
    pointers: ut,
    interactionRef: N,
    cameraRef: M,
    shapesRef: Yt,
    toolRef: re,
    activeColorRef: kt,
    drawColorRef: _t,
    setDrawColor: pt,
    setActiveColor: G,
    drawStrokeWidth: s,
    setSelectedStrokeWidth: ye,
    camera: C,
    shapes: X,
    selected: S,
    isSpaceDown: D,
    setCamera: E,
    setShapes: b,
    setEditingId: P,
    setEraserPos: lt,
    setGuides: K,
    setAnnouncement: H,
    applyInteraction: A,
    selectNow: dt,
    selectionActions: Bt,
    past: Q,
    future: et,
    beginHistory: mt,
    endHistory: ot,
    commit: wt,
    deleteSelection: vt,
    onDirty: m,
    onToolChange: d,
    controlled: f,
    isDarkMode: n,
    minZoom: Dn,
    maxZoom: On,
    textualTypes: Hn,
    selectedRef: F,
    editingIdRef: z,
    setIsSpaceDown: O,
    viewportCentre: yt,
    setLocalShapes: v,
    expandToGroups: Xt,
    toPage: gt,
    createId: Bn,
    liveStrokeCanvasRef: k,
    activeDrawRef: B,
    pendingDrawsRef: Z,
    queuedDrawIdsRef: ct,
    commitDrawBatch: bt
  }), { cursor: De, gridColor: vo, gridSize: sn, strokeColorOf: mo } = Ni({
    isDarkMode: n,
    tool: o === "highlighter" ? "draw" : o,
    isSpaceDown: D,
    interaction: I,
    zoom: C.z
  }), ln = (st) => {
    const Dt = F.current, Nt = z.current, Ut = new Set(Dt);
    if (Nt && Ut.add(Nt), Ut.size === 0) return;
    const we = "strokeWidth" in st, be = Object.keys(st).every((Mt) => Mt === "color" || Mt === "fillColor" || Mt === "strokeColor" || Mt === "strokeWidth");
    if (ue.length > 0 && ue.every((Mt) => Mt.type === "draw") && be) {
      const Mt = "color" in st ? st.color : void 0, Ct = "strokeWidth" in st ? st.strokeWidth : void 0, fn = "strokeColor" in st ? st.strokeColor : void 0;
      wt((Co) => Pi(Co, Ut, {
        ...Mt !== void 0 ? { color: Mt } : {},
        ...Ct !== void 0 ? { strokeWidth: Ct } : {},
        ...fn !== void 0 ? { strokeColor: fn } : {}
      }));
      return;
    }
    if (we) {
      const Mt = st.strokeWidth;
      if (Mt !== void 0 && Object.keys(st).length === 1) {
        wt((Ct) => _n(Ct, Ut, Mt));
        return;
      }
    }
    wt((Mt) => Mt.map((Ct) => {
      if (!Ut.has(Ct.id)) return Ct;
      if (!we) return { ...Ct, ...st };
      switch (Ct.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...Ct, ...st };
        case "note":
        case "card":
        case "text":
        case "image":
          return Ct;
        case "draw":
          return { ...Ct, ...st };
        default:
          return po(Ct);
      }
    }));
  }, {
    commitEditorHtml: go,
    applyFormat: yo,
    applyList: wo,
    onEditorKeyDown: bo,
    applyCustomFontFamily: ko
  } = ri({
    editorRef: g,
    editingId: T,
    setShapes: b,
    setAnnouncement: H,
    onDirty: m,
    patchSelected: ln
  }), { renderEditor: Mo, renderShapeBody: $o } = ni({
    camera: C,
    editingId: T,
    isDarkMode: n,
    editorRef: g,
    commitEditorHtml: go,
    onEditorKeyDown: bo,
    setShapes: b,
    onDirty: m,
    renderDiagram: $
  }), zo = I.kind === "marquee" ? I : null, { shapeById: un, visiblePaintOrder: dn } = oi({
    containerRef: w,
    shapesRef: Yt,
    shapes: X,
    camera: C,
    selected: S,
    editingId: T,
    boardIdentity: e
  });
  return /* @__PURE__ */ U(
    "div",
    {
      ref: w,
      onPointerDown: We,
      onPointerMove: Fe,
      onPointerLeave: Ae,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": C.x,
      "data-canvas-camera-y": C.y,
      "data-canvas-camera-z": C.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: De,
        background: n ? V.canvasDark : V.canvasLight,
        backgroundImage: `radial-gradient(${vo} 1px, transparent 1px)`,
        backgroundSize: `${sn}px ${sn}px`,
        backgroundPosition: `${-C.x * C.z}px ${-C.y * C.z}px`
      },
      children: [
        /* @__PURE__ */ Y("style", { children: '.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas .canvas-rich-text ul>li::before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style="dash"]>li::before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li::before{content:counter(canvas-list-item) ". "}' }),
        /* @__PURE__ */ Y(
          "div",
          {
            "aria-live": "polite",
            role: "status",
            className: "absolute w-px h-px overflow-hidden whitespace-nowrap",
            style: { clip: "rect(0 0 0 0)", clipPath: "inset(50%)" },
            children: L
          }
        ),
        /* @__PURE__ */ Y(
          Nr,
          {
            visiblePaintOrder: dn,
            selected: S,
            shapeById: un,
            allShapes: Yt.current,
            camera: C,
            interaction: I,
            eraserPos: tt,
            guides: W,
            marquee: zo,
            strokeColorOf: mo
          }
        ),
        /* @__PURE__ */ Y("canvas", { ref: k, "aria-hidden": "true", "data-canvas-live-strokes": "true", className: "absolute inset-0 w-full h-full pointer-events-none" }),
        /* @__PURE__ */ Y(
          jr,
          {
            visiblePaintOrder: dn,
            selected: S,
            editingId: T,
            camera: C,
            shapeById: un,
            allShapes: Yt.current,
            peerCursors: x,
            isDarkMode: n,
            renderEditor: Mo,
            renderShapeBody: $o,
            setEditingId: P,
            onBendHandleDown: rt,
            onOrthogonalSegmentHandleDown: Kt,
            onResizeHandleDown: _,
            onRotateHandleDown: R,
            onConnectHandleDown: j,
            onArrowEndpointDown: jt
          }
        ),
        ge && /* @__PURE__ */ Y(
          Jr,
          {
            shape: ge,
            selection: ue,
            selectionActions: Bt,
            shapes: X,
            camera: C,
            canvasSize: { width: ((hn = w.current) == null ? void 0 : hn.clientWidth) ?? 380, height: ((xn = w.current) == null ? void 0 : xn.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!T,
            showPalette: q,
            installedFontFamilies: Wt,
            setShowPalette: nt,
            setActiveColor: G,
            patchSelected: ln,
            applyFormat: yo,
            applyList: wo,
            applyCustomFontFamily: ko
          }
        ),
        /* @__PURE__ */ Y(
          ei,
          {
            tool: o,
            activeColor: Et,
            drawStrokeWidth: s,
            isDarkMode: n,
            onSelectColor: pt,
            onSelectStrokeWidth: ye
          }
        )
      ]
    }
  );
});
export {
  at as CANVAS_COLORS,
  Kn as CANVAS_COLOR_KEYS,
  Tt as CANVAS_FONTS,
  Ai as InfiniteCanvas,
  Eo as SHAPE_TOOLS,
  Pi as applySelectedDrawStyle,
  _n as applySelectedStrokeWidth,
  Fi as diagramTemplate,
  Ur as getInspectorGroups,
  an as isDiagramShape
};
