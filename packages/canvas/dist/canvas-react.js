import { jsx as X, jsxs as K, Fragment as Qt } from "react/jsx-runtime";
import Ce, { useState as it, useRef as J, useEffect as Pt, useLayoutEffect as Jt, useMemo as Tt, useCallback as ht, useImperativeHandle as vr, forwardRef as mr } from "react";
import { p as gr, i as Ue, k as Ve, a as at, v as yr, c as Et, s as br, b as In, d as ae, h as wr, C as kr, S as $r } from "./document-CLNFlHux.js";
import { Minus as Mr, Plus as zr, ChevronDown as Cr, AlignLeft as Sr, AlignCenter as Xr, AlignRight as Yr, List as Nr, ListOrdered as Pr, Bold as Ir, Italic as Lr, Underline as Er, Group as Tr, Ungroup as Fr, Copy as Ar, Trash2 as Wr } from "lucide-react";
const Dr = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', U = Object.freeze({
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
}), Ln = 12;
function He(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function ye(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function be(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function we(t, e, n, r) {
  const c = be(t, e, n), a = be(t, e, r), s = be(n, r, t), u = be(n, r, e);
  return Math.abs(c) < 1e-6 && ye(t, n, e) || Math.abs(a) < 1e-6 && ye(t, r, e) || Math.abs(s) < 1e-6 && ye(n, t, r) || Math.abs(u) < 1e-6 && ye(n, e, r) ? !0 : c > 0 != a > 0 && s > 0 != u > 0;
}
function Or(t, e, n) {
  const r = Math.min(t.x, e.x), o = Math.max(t.x, e.x), c = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
  if (o < n.minX || r > n.maxX || a < n.minY || c > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const s = { x: n.minX, y: n.minY }, u = { x: n.maxX, y: n.minY }, m = { x: n.maxX, y: n.maxY }, d = { x: n.minX, y: n.maxY };
  return we(t, e, s, u) || we(t, e, u, m) || we(t, e, m, d) || we(t, e, d, s);
}
function Hr(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const r of e)
      if (Or(t[n - 1], t[n], r)) return !0;
  return !1;
}
function _e(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function Ge(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = _e(t);
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
  const o = t[t.length - 1];
  return { x: o.x, y: o.y };
}
function de(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function on(t, e, n, r) {
  const o = /* @__PURE__ */ new Set([t, e]), c = Math.min(t, e), a = Math.max(t, e), s = Ln * 1.2;
  for (const u of n) {
    const m = (r === "x" ? u.minX : u.minY) - s, d = (r === "x" ? u.maxX : u.maxY) + s, h = (i) => i >= c - s * 4 && i <= a + s * 4;
    h(m) && o.add(m), h(d) && o.add(d);
  }
  return [...o].sort((u, m) => Math.abs(u - t) - Math.abs(m - t));
}
function En(t) {
  const e = [];
  for (const n of t) {
    const r = e[e.length - 1];
    (!r || r.x !== n.x || r.y !== n.y) && e.push(n);
  }
  return e;
}
function Tn(t) {
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
function _r(t, e, n) {
  const r = [t];
  for (const o of [...n, e]) {
    const c = r[r.length - 1];
    if (!c) {
      r.push(o);
      continue;
    }
    if (c.x === o.x || c.y === o.y) {
      r.push(o);
      continue;
    }
    r.push({ x: o.x, y: c.y }, o);
  }
  return Tn(r);
}
function Br(t, e, n) {
  const r = t[e], o = t[e + 1];
  if (!r || !o || !Number.isFinite(n) || r.x !== o.x && r.y !== o.y) return [...t];
  const c = r.x === o.x ? [r, { x: n, y: r.y }, { x: n, y: o.y }, o] : [r, { x: r.x, y: n }, { x: o.x, y: n }, o];
  return Tn([
    ...t.slice(0, e),
    ...c,
    ...t.slice(e + 2)
  ]);
}
function Te(t, e) {
  const n = [], r = [];
  for (const c of t) {
    const a = En(c);
    a.length < 2 || (Hr(a, e) ? r.push(a) : n.push(a));
  }
  const o = n.length > 0 ? n : r;
  return o.length === 0 ? [] : o.reduce((c, a) => _e(a) < _e(c) ? a : c);
}
function an(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function oe(t, e, n, r) {
  const o = Math.min(t, e), c = Math.max(t, e), a = Math.max(48, Math.abs(e - t) * 0.35, Ln * 4);
  if (r === "x") {
    if (n === "e") return c + a;
    if (n === "w") return o - a;
  } else {
    if (n === "s") return c + a;
    if (n === "n") return o - a;
  }
  return t <= e ? o - a : c + a;
}
function jr(t, e, n, r, o) {
  const c = (t.x + e.x) / 2, a = (t.y + e.y) / 2;
  if (n === "u") {
    if (r) {
      const u = oe(t.x, e.x, t.side, "x");
      return [t, { x: u, y: t.y }, { x: u, y: e.y }, e];
    }
    const s = oe(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: s }, { x: e.x, y: s }, e];
  }
  if (n === "zigzag") {
    if (r) {
      const m = oe(t.x, e.x, t.side, "x"), d = oe(t.y, e.y, t.side, "y");
      return o ? [t, { x: m, y: t.y }, { x: m, y: d }, { x: c, y: d }, { x: c, y: e.y }, e] : [t, { x: m, y: t.y }, { x: m, y: d }, { x: e.x, y: d }, e];
    }
    const s = oe(t.y, e.y, t.side, "y"), u = oe(t.x, e.x, t.side, "x");
    return o ? [t, { x: t.x, y: s }, { x: u, y: s }, { x: u, y: e.y }, e] : [t, { x: t.x, y: s }, { x: u, y: s }, { x: u, y: a }, { x: e.x, y: a }, e];
  }
  return [];
}
function Fn(t, e, n = [], r = "elbow", o = []) {
  if (o.length > 0) return _r(t, e, o);
  const c = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), a = e.side ?? (c === "e" || c === "w" ? "w" : "n"), s = c === "e" || c === "w", u = a === "e" || a === "w", m = on(t.x, e.x, n, "x"), d = on(t.y, e.y, n, "y"), h = [];
  if (s && u) {
    for (const v of m) h.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
    for (const v of d) h.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
  } else if (!s && !u) {
    for (const v of d) h.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
    for (const v of m) h.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  } else if (s) {
    h.push([t, { x: e.x, y: t.y }, e]);
    for (const v of d)
      h.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]), h.push([t, { x: t.x, y: v }, e]);
    for (const v of m) h.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  } else {
    h.push([t, { x: t.x, y: e.y }, e]);
    for (const v of d)
      h.push([t, { x: t.x, y: v }, e]), h.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
    for (const v of m) h.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  }
  const i = Te(h, n);
  if (r === "elbow") return i;
  if (r === "reverse") {
    const v = an(i), P = Te(h.filter((w) => an(w) !== v), n);
    return P.length > 1 ? P : i;
  }
  const l = jr(t, e, r, s, u), f = Te([l], n);
  return f.length > 1 ? f : i;
}
function An(t) {
  return t.length < 2 ? 0 : de(t[t.length - 2], t[t.length - 1]);
}
const { PI: Kr } = Math, ue = Kr + 1e-4, cn = 0.5, sn = [1, 1];
function ln(t, e, n, r = (o) => o) {
  return t * r(0.5 - e * (0.5 - n));
}
const { min: Fe } = Math;
function Wn(t, e, n) {
  let r = Fe(1, e / n);
  return Fe(1, t + (Fe(1, 1 - r) - t) * (r * 0.275));
}
function Ur(t) {
  return [-t[0], -t[1]];
}
function At(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function dn(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function Rt(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function Be(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function Gt(t, e) {
  return [t[0] * e, t[1] * e];
}
function Ae(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function Vr(t, e) {
  return [t[0] / e, t[1] / e];
}
function Dn(t) {
  return [t[1], -t[0]];
}
function We(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function un(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function Gr(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function Rr(t) {
  return Math.hypot(t[0], t[1]);
}
function hn(t, e) {
  let n = t[0] - e[0], r = t[1] - e[1];
  return n * n + r * r;
}
function On(t) {
  return Vr(t, Rr(t));
}
function qr(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function Re(t, e, n) {
  let r = Math.sin(n), o = Math.cos(n), c = t[0] - e[0], a = t[1] - e[1], s = c * o - a * r, u = c * r + a * o;
  return [s + e[0], u + e[1]];
}
function xn(t, e, n, r) {
  let o = Math.sin(r), c = Math.cos(r), a = e[0] - n[0], s = e[1] - n[1], u = a * c - s * o, m = a * o + s * c;
  return t[0] = u + n[0], t[1] = m + n[1], t;
}
function fn(t, e, n) {
  return At(t, Gt(Rt(e, t), n));
}
function Zr(t, e, n, r) {
  let o = n[0] - e[0], c = n[1] - e[1];
  return t[0] = e[0] + o * r, t[1] = e[1] + c * r, t;
}
function Hn(t, e, n) {
  return At(t, Gt(e, n));
}
const xt = [0, 0], Kt = [0, 0], Ut = [0, 0];
function Qr(t, e) {
  let n = Hn(t, On(Dn(Rt(t, At(t, [1, 1])))), -e), r = [], o = 1 / 13;
  for (let c = o; c <= 1; c += o) r.push(Re(n, t, ue * 2 * c));
  return r;
}
function Jr(t, e, n) {
  let r = [], o = 1 / n;
  for (let c = o; c <= 1; c += o) r.push(Re(e, t, ue * c));
  return r;
}
function to(t, e, n) {
  let r = Rt(e, n), o = Gt(r, 0.5), c = Gt(r, 0.51);
  return [Rt(t, o), Rt(t, c), At(t, c), At(t, o)];
}
function eo(t, e, n, r) {
  let o = [], c = Hn(t, e, n), a = 1 / r;
  for (let s = a; s < 1; s += a) o.push(Re(c, t, ue * 3 * s));
  return o;
}
function no(t, e, n) {
  return [At(t, Gt(e, n)), At(t, Gt(e, n * 0.99)), Rt(t, Gt(e, n * 0.99)), Rt(t, Gt(e, n))];
}
function pn(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function ro(t, e, n) {
  return t.slice(0, 10).reduce((r, o) => {
    let c = o.pressure;
    return e && (c = Wn(r, o.distance, n)), (r + c) / 2;
  }, t[0].pressure);
}
function oo(t, e = {}) {
  let { size: n = 16, smoothing: r = 0.5, thinning: o = 0.5, simulatePressure: c = !0, easing: a = (Y) => Y, start: s = {}, end: u = {}, last: m = !1 } = e, { cap: d = !0, easing: h = (Y) => Y * (2 - Y) } = s, { cap: i = !0, easing: l = (Y) => --Y * Y * Y + 1 } = u;
  if (t.length === 0 || n <= 0) return [];
  let f = t[t.length - 1].runningLength, v = pn(s.taper, n, f), P = pn(u.taper, n, f), w = (n * r) ** 2, b = [], y = [], p = ro(t, c, n), x = ln(n, o, t[t.length - 1].pressure, a), N, g = t[0].vector, $ = t[0].point, T = $, z = $, C = T, F = !1;
  for (let Y = 0; Y < t.length; Y++) {
    let { pressure: W } = t[Y], { point: D, vector: L, distance: O, runningLength: V } = t[Y], E = Y === t.length - 1;
    if (!E && f - V < 3) continue;
    o ? (c && (W = Wn(p, O, n)), x = ln(n, o, W, a)) : x = n / 2, N === void 0 && (N = x);
    let _ = V < v ? h(V / v) : 1, q = f - V < P ? l((f - V) / P) : 1;
    x = Math.max(0.01, x * Math.min(_, q));
    let nt = (E ? t[Y] : t[Y + 1]).vector, tt = E ? 1 : un(L, nt), lt = un(L, g) < 0 && !F, R = tt !== null && tt < 0;
    if (lt || R) {
      We(xt, g), Ae(xt, xt, x);
      for (let kt = 0; kt <= 1; kt += 0.07692307692307693) Be(Kt, D, xt), xn(Kt, Kt, D, ue * kt), z = [Kt[0], Kt[1]], b.push(z), dn(Ut, D, xt), xn(Ut, Ut, D, ue * -kt), C = [Ut[0], Ut[1]], y.push(C);
      $ = z, T = C, R && (F = !0);
      continue;
    }
    if (F = !1, E) {
      We(xt, L), Ae(xt, xt, x), b.push(Rt(D, xt)), y.push(At(D, xt));
      continue;
    }
    Zr(xt, nt, L, tt), We(xt, xt), Ae(xt, xt, x), Be(Kt, D, xt), z = [Kt[0], Kt[1]], (Y <= 1 || hn($, z) > w) && (b.push(z), $ = z), dn(Ut, D, xt), C = [Ut[0], Ut[1]], (Y <= 1 || hn(T, C) > w) && (y.push(C), T = C), p = W, g = L;
  }
  let A = [t[0].point[0], t[0].point[1]], S = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : At(t[0].point, [1, 1]), M = [], I = [];
  if (t.length === 1) {
    if (!(v || P) || m) return Qr(A, N || x);
  } else {
    v || P && t.length === 1 || (d ? M.push(...Jr(A, y[0], 13)) : M.push(...to(A, b[0], y[0])));
    let Y = Dn(Ur(t[t.length - 1].vector));
    P || v && t.length === 1 ? I.push(S) : i ? I.push(...eo(S, Y, x, 29)) : I.push(...no(S, Y, x));
  }
  return b.concat(I, y.reverse(), M);
}
const vn = [0, 0];
function mn(t) {
  return t != null && t >= 0;
}
function io(t, e = {}) {
  var i;
  let { streamline: n = 0.5, size: r = 16, last: o = !1 } = e;
  if (t.length === 0) return [];
  let c = 0.15 + (1 - n) * 0.85, a = Array.isArray(t[0]) ? t : t.map(({ x: l, y: f, pressure: v = cn }) => [l, f, v]);
  if (a.length === 2) {
    let l = a[1];
    a = a.slice(0, -1);
    for (let f = 1; f < 5; f++) a.push(fn(a[0], l, f / 4));
  }
  a.length === 1 && (a = [...a, [...At(a[0], sn), ...a[0].slice(2)]]);
  let s = [{ point: [a[0][0], a[0][1]], pressure: mn(a[0][2]) ? a[0][2] : 0.25, vector: [...sn], distance: 0, runningLength: 0 }], u = !1, m = 0, d = s[0], h = a.length - 1;
  for (let l = 1; l < a.length; l++) {
    let f = o && l === h ? [a[l][0], a[l][1]] : fn(d.point, a[l], c);
    if (Gr(d.point, f)) continue;
    let v = qr(f, d.point);
    if (m += v, l < h && !u) {
      if (m < r) continue;
      u = !0;
    }
    Be(vn, d.point, f), d = { point: f, pressure: mn(a[l][2]) ? a[l][2] : cn, vector: On(vn), distance: v, runningLength: m }, s.push(d);
  }
  return s[0].vector = ((i = s[1]) == null ? void 0 : i.vector) || [0, 0], s;
}
function ao(t, e = {}) {
  return oo(io(t, e), e);
}
var co = ao;
function Se(t) {
  if (t.fillColor)
    try {
      return Ve(t.fillColor);
    } catch {
      return t.color ? at[t.color].bg : at.blue.bg;
    }
  return t.color ? at[t.color].bg : at.blue.bg;
}
function _n(t) {
  if (t.strokeColor)
    try {
      return Ve(t.strokeColor);
    } catch {
      return t.color ? at[t.color].border : "#2563eb";
    }
  return t.color ? at[t.color].border : "#2563eb";
}
function Bn(t) {
  return _n(t);
}
function te(t) {
  if (t.textColor)
    try {
      return Ve(t.textColor);
    } catch {
      return t.color ? at[t.color].text : "#0f172a";
    }
  return t.color ? at[t.color].text : "#0f172a";
}
function jn(t, e, n) {
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
      const r = e / 2, o = n / 2, c = Math.min(e, n) / 2, a = c * 0.4, s = [];
      for (let u = 0; u < 10; u++) {
        const m = Math.PI / 5 * u - Math.PI / 2, d = u % 2 === 0 ? c : a;
        s.push(`${r + d * Math.cos(m)},${o + d * Math.sin(m)}`);
      }
      return s.join(" ");
    }
    default:
      return "";
  }
}
function Kn(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let r = 1; r < t.length - 1; r++) {
    const [o, c] = t[r], [a, s] = t[r + 1];
    e += ` Q ${o} ${c} ${(o + a) / 2} ${(c + s) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function so(t, e) {
  return e === "highlighter" ? { size: t * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: t, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 };
}
function Un(t, e) {
  return e === "highlighter" ? t * 1.25 : t / 2;
}
function Vn(t, e, n) {
  return t.length < 2 ? [] : co(t, so(e, n));
}
function lo(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [o, c] = t[0], a = Un(e, n);
    return `M ${o - a} ${c} A ${a} ${a} 0 1 0 ${o + a} ${c} A ${a} ${a} 0 1 0 ${o - a} ${c} Z`;
  }
  const r = Vn(t, e, n);
  return r.length === 0 ? "" : r.reduce(
    (o, [c, a], s) => o + (s === 0 ? `M ${c} ${a}` : ` L ${c} ${a}`),
    ""
  ) + " Z";
}
const gn = /* @__PURE__ */ new WeakMap();
function uo(t) {
  const e = gn.get(t);
  if (e !== void 0) return e;
  const n = t.points, r = t.type === "draw" && n && n.length >= 2 ? lo(n, t.strokeWidth ?? 3, t.drawMode ?? "pen") : "";
  return gn.set(t, r), r;
}
function Vt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function Gn(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], r = (o, c) => {
    o.childNodes.forEach((a) => {
      if (a.nodeType === Node.TEXT_NODE) {
        const d = a.textContent ?? "";
        d && n[n.length - 1].push({ text: d, ...c });
        return;
      }
      if (a.nodeType !== Node.ELEMENT_NODE) return;
      const s = a;
      if (s.tagName === "BR") {
        n.push([]);
        return;
      }
      const u = { bold: c.bold || s.tagName === "B" || s.tagName === "STRONG", italic: c.italic || s.tagName === "I" || s.tagName === "EM", underline: c.underline || s.tagName === "U" }, m = s.tagName === "DIV" || s.tagName === "P" || s.tagName === "LI";
      m && n[n.length - 1].length > 0 && n.push([]), r(s, u), m && n.push([]);
    });
  };
  return r(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((o) => o.length > 0);
}
const yn = /* @__PURE__ */ new WeakMap();
function Ye(t) {
  const e = yn.get(t);
  if (e !== void 0) return e;
  const n = t.html ? Ue(t.html) : t.text ? Vt(t.text).replace(/\n/g, "<br>") : "";
  return yn.set(t, n), n;
}
function je(t) {
  if (t)
    try {
      return yr(t);
    } catch {
      return;
    }
}
function Rn(t) {
  try {
    return gr(t);
  } catch {
    return null;
  }
}
function fe(t) {
  return t.html ? Gn(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const ke = 12;
function qt(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function It(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function ft(t) {
  const e = t.rotation ?? 0, n = qt(t);
  if (!e) return n;
  const r = It(t), o = Math.cos(e), c = Math.sin(e), a = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([m, d]) => {
    const h = m - r.x, i = d - r.y;
    return [r.x + h * o - i * c, r.y + h * c + i * o];
  }), s = a.map((m) => m[0]), u = a.map((m) => m[1]);
  return { minX: Math.min(...s), minY: Math.min(...u), maxX: Math.max(...s), maxY: Math.max(...u) };
}
function qn(t, e, n) {
  const r = t.rotation ?? 0;
  if (!r) return { x: e, y: n };
  const o = It(t), c = Math.cos(-r), a = Math.sin(-r), s = e - o.x, u = n - o.y;
  return { x: o.x + s * c - u * a, y: o.y + s * a + u * c };
}
function $e(t, e, n, r, o, c) {
  const a = o - n, s = c - r, u = a * a + s * s, m = u === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * a + (e - r) * s) / u));
  return Math.hypot(t - (n + m * a), e - (r + m * s));
}
function Xe(t, e, n, r, o, c) {
  const a = 8 / r;
  if (t.type === "arrow") {
    const m = (t.strokeWidth ?? 2.5) / r / 2 + a, d = Ft(t, o ?? /* @__PURE__ */ new Map(), c);
    if (d.routing === "orthogonal" && d.pathPoints && d.pathPoints.length > 1) {
      for (let i = 1; i < d.pathPoints.length; i++) {
        const l = d.pathPoints[i - 1], f = d.pathPoints[i];
        if ($e(e, n, l.x, l.y, f.x, f.y) <= m) return !0;
      }
      return !1;
    }
    if (d.bend === 0) return $e(e, n, d.start.x, d.start.y, d.end.x, d.end.y) <= m;
    let h = d.start;
    for (let i = 1; i <= 16; i++) {
      const l = he(i / 16, d.start, d.control, d.end);
      if ($e(e, n, h.x, h.y, l.x, l.y) <= m) return !0;
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
      const [l, f] = t.points[i - 1], [v, P] = t.points[i];
      if ($e(e, n, l, f, v, P) <= h) return !0;
    }
    return !1;
  }
  const s = qn(t, e, n), u = qt(t);
  if (t.type === "frame") {
    const m = s.x >= u.minX - a && s.x <= u.maxX + a && s.y >= u.minY - a && s.y <= u.maxY + a && (s.x <= u.minX + a || s.x >= u.maxX - a || s.y <= u.minY + a || s.y >= u.maxY - a), d = s.x >= u.minX - a && s.x <= u.maxX + a && s.y >= u.minY - 28 / r && s.y <= u.minY;
    return m || d;
  }
  return s.x >= u.minX - a && s.x <= u.maxX + a && s.y >= u.minY - a && s.y <= u.maxY + a;
}
function ee(t, e, n) {
  const r = qt(t), o = (r.minX + r.maxX) / 2, c = (r.minY + r.maxY) / 2, a = e - o, s = n - c;
  if (a === 0 && s === 0) return { x: o, y: c, side: "e" };
  const u = (r.maxX - r.minX) / 2, m = (r.maxY - r.minY) / 2, d = u === 0 ? 1 / 0 : Math.abs(u / a), h = m === 0 ? 1 / 0 : Math.abs(m / s);
  return d <= h ? { x: o + a * d, y: c + s * d, side: a >= 0 ? "e" : "w" } : { x: o + a * h, y: c + s * h, side: s >= 0 ? "s" : "n" };
}
function Zn(t, e, n, r) {
  const o = /* @__PURE__ */ new Set([e.id, n, r]);
  return t.filter((c) => !o.has(c.id)).map((c) => {
    const a = ft(c);
    return { minX: a.minX - ke, minY: a.minY - ke, maxX: a.maxX + ke, maxY: a.maxY + ke };
  }).filter((c) => c.maxX > c.minX && c.maxY > c.minY);
}
function Ft(t, e, n = []) {
  const r = t.fromId ? e.get(t.fromId) : void 0, o = t.toId ? e.get(t.toId) : void 0;
  let c = { x: t.x, y: t.y }, a = { x: t.x + t.w, y: t.y + t.h };
  if (r && o) {
    const f = It(r), v = It(o);
    c = ee(r, v.x, v.y), a = ee(o, f.x, f.y);
  } else r ? c = ee(r, a.x, a.y) : o && (a = ee(o, c.x, c.y));
  const s = (c.x + a.x) / 2, u = (c.y + a.y) / 2, m = t.bend ?? 0;
  let d = { x: s, y: u };
  if (m !== 0) {
    const f = a.x - c.x, v = a.y - c.y, P = Math.hypot(f, v) || 1;
    d = { x: s + -v / P * m, y: u + f / P * m };
  }
  const h = !!(r || o), i = t.routing ?? (h ? "orthogonal" : m !== 0 ? "curved" : "straight");
  if (i !== "orthogonal") return { start: c, end: a, control: d, bend: m, routing: i };
  const l = Zn(n, t, r == null ? void 0 : r.id, o == null ? void 0 : o.id);
  return {
    start: c,
    end: a,
    control: d,
    bend: m,
    routing: i,
    pathPoints: En(Fn(c, a, l, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function he(t, e, n, r) {
  const o = 1 - t;
  return { x: o * o * e.x + 2 * o * t * n.x + t * t * r.x, y: o * o * e.y + 2 * o * t * n.y + t * t * r.y };
}
function Qn(t, e, n, r, o) {
  const c = [];
  let a = 0;
  for (const s of t) {
    if (s.type !== "draw" || !s.points) {
      if (Xe(s, e, n, o)) continue;
      c.push(s);
      continue;
    }
    const u = [];
    let m = [];
    for (const [h, i] of s.points)
      Math.hypot(h - e, i - n) <= r / o ? (m.length > 1 && u.push(m), m = []) : m.push([h, i]);
    if (m.length > 1 && u.push(m), u.length === 0) continue;
    const d = qt(s);
    u.forEach((h) => c.push({ ...s, id: `${s.id}-e${a++}`, points: h, x: d.minX, y: d.minY, w: d.maxX - d.minX, h: d.maxY - d.minY }));
  }
  return c;
}
function ho(t, e, n) {
  const r = 6 / n;
  let o = null, c = null;
  const a = [], s = [t.minX, (t.minX + t.maxX) / 2, t.maxX], u = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const m of e) {
    const d = ft(m), h = [d.minX, (d.minX + d.maxX) / 2, d.maxX], i = [d.minY, (d.minY + d.maxY) / 2, d.maxY];
    for (const l of s) for (const f of h) {
      const v = f - l;
      Math.abs(v) <= r && (!o || Math.abs(v) < Math.abs(o.delta)) && (o = { delta: v, at: f });
    }
    for (const l of u) for (const f of i) {
      const v = f - l;
      Math.abs(v) <= r && (!c || Math.abs(v) < Math.abs(c.delta)) && (c = { delta: v, at: f });
    }
  }
  return o && a.push({ x1: o.at, y1: t.minY - 1e3, x2: o.at, y2: t.maxY + 1e3 }), c && a.push({ x1: t.minX - 1e3, y1: c.at, x2: t.maxX + 1e3, y2: c.at }), { dx: (o == null ? void 0 : o.delta) ?? 0, dy: (c == null ? void 0 : c.delta) ?? 0, guides: a };
}
const xo = 14;
function fo({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: r,
  camera: o,
  interaction: c,
  eraserPos: a,
  guides: s,
  marquee: u,
  strokeColorOf: m
}) {
  return /* @__PURE__ */ X("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ K("g", { transform: `scale(${o.z}) translate(${-o.x}, ${-o.y})`, children: [
    t.map((d) => {
      if (d.type === "draw" && d.points) {
        const z = d.drawMode ?? "pen", C = d.strokeWidth ?? 3, F = e.has(d.id) ? U.blue : m(d), A = uo(d);
        return /* @__PURE__ */ X(
          "path",
          {
            "data-canvas-vector-shape-id": d.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": z,
            "data-canvas-stroke-width": C,
            d: A || Kn(d.points),
            fill: A ? F : "none",
            stroke: A ? "none" : F,
            strokeWidth: C / o.z,
            strokeOpacity: z === "highlighter" ? 0.35 : void 0,
            fillOpacity: z === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          d.id
        );
      }
      if (d.type !== "arrow") return null;
      const h = e.has(d.id) ? U.blue : m(d), i = Ft(d, n, r), l = d.strokeWidth ?? 2.5, f = l / o.z, v = Math.max(10, 8 + l * 2), P = Math.max(4, 2 + l), w = v / o.z, b = P / o.z, y = i.routing === "orthogonal" && i.pathPoints ? i.pathPoints : null, p = y && y.length > 1;
      let x, N;
      if (p)
        x = He(y), N = An(y);
      else if (i.routing === "curved") {
        x = `M ${i.start.x} ${i.start.y} Q ${i.control.x} ${i.control.y} ${i.end.x} ${i.end.y}`;
        const z = he(0.94, i.start, i.control, i.end);
        N = Math.atan2(i.end.y - z.y, i.end.x - z.x);
      } else
        x = `M ${i.start.x} ${i.start.y} L ${i.end.x} ${i.end.y}`, N = Math.atan2(i.end.y - i.start.y, i.end.x - i.start.x);
      const g = p && y.length >= 2 ? de(y[0], y[1]) : i.routing === "orthogonal" && i.start.side ? i.start.side === "e" ? 0 : i.start.side === "w" ? Math.PI : i.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : de(i.start, i.end), $ = d.strokeStyle === "dashed" ? `${8 / o.z} ${5 / o.z}` : d.strokeStyle === "dotted" ? `${1.5 / o.z} ${4 / o.z}` : void 0, T = (z, C, F, A) => z === "dot" ? /* @__PURE__ */ X("circle", { "data-canvas-arrow-dot-radius": P, cx: C, cy: F, r: b, fill: h }) : z === "none" ? null : /* @__PURE__ */ X(
        "polygon",
        {
          "data-canvas-arrowhead-size": v,
          points: `${C},${F} ${C - w * Math.cos(A - 0.4)},${F - w * Math.sin(A - 0.4)} ${C - w * Math.cos(A + 0.4)},${F - w * Math.sin(A + 0.4)}`,
          fill: h
        }
      );
      return /* @__PURE__ */ K("g", { "data-canvas-vector-shape-id": d.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": i.routing, "data-canvas-stroke-width": l, children: [
        /* @__PURE__ */ X("path", { d: x, fill: "none", stroke: h, strokeWidth: f, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: $ }),
        T(d.arrowEnd ?? "arrow", i.end.x, i.end.y, N),
        T(d.arrowStart ?? "none", i.start.x, i.start.y, g + Math.PI)
      ] }, d.id);
    }),
    c.kind === "connect" && c.fromId !== void 0 && c.toX !== void 0 && c.toY !== void 0 && (() => {
      const d = n.get(c.fromId);
      if (!d) return null;
      const h = ee(d, c.toX, c.toY), i = c.hoverId ? n.get(c.hoverId) : null, l = i ? ee(i, h.x, h.y) : { x: c.toX, y: c.toY }, f = i ? Fn(h, l, Zn(r, { id: "__preview" }, d.id, i.id)) : [h, l];
      return /* @__PURE__ */ K("g", { children: [
        /* @__PURE__ */ X("path", { d: He(f), stroke: U.blue, strokeWidth: 2 / o.z, strokeDasharray: `${5 / o.z} ${4 / o.z}` }),
        i ? /* @__PURE__ */ X("rect", { x: ft(i).minX - 3 / o.z, y: ft(i).minY - 3 / o.z, width: ft(i).maxX - ft(i).minX + 6 / o.z, height: ft(i).maxY - ft(i).minY + 6 / o.z, fill: "none", stroke: U.blue, strokeWidth: 2 / o.z, rx: 6 / o.z }) : /* @__PURE__ */ X("circle", { cx: l.x, cy: l.y, r: 5 / o.z, fill: U.blue })
      ] });
    })(),
    a && /* @__PURE__ */ X("circle", { cx: a.x, cy: a.y, r: xo / o.z, fill: U.roseSoft, stroke: U.rose, strokeWidth: 1 / o.z }),
    s.map((d, h) => /* @__PURE__ */ X("line", { x1: d.x1, y1: d.y1, x2: d.x2, y2: d.y2, stroke: U.pink, strokeWidth: 1 / o.z, strokeDasharray: `${4 / o.z} ${4 / o.z}` }, `guide-${h}`)),
    u && /* @__PURE__ */ X("rect", { x: Math.min(u.startX, u.curX), y: Math.min(u.startY, u.curY), width: Math.abs(u.curX - u.startX), height: Math.abs(u.curY - u.startY), fill: U.marqueeFill, stroke: U.blue, strokeWidth: 1 / o.z })
  ] }) });
}
const po = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], vo = /* @__PURE__ */ new Set([
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
]), mo = [
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
function Ne(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function Jn(t) {
  return vo.has(t.trim().toLowerCase());
}
function tr(t) {
  const e = Ne(t);
  return e ? Jn(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function go(t) {
  return Ne(t).split(",").map((e) => e.trim()).filter(Boolean).map(tr).filter(Boolean).join(", ");
}
function er(t) {
  return Ne(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function se(t) {
  return t.split(",").map((e) => Ne(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !Jn(e));
}
const Me = Array.from(/* @__PURE__ */ new Set([
  ...mo,
  ...se(Et.sans.stack),
  ...se(Et.serif.stack),
  ...se(Et.mono.stack),
  ...se(Et.gothic.stack),
  ...se(Et.korean.stack)
]));
function yo() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Me;
  const t = Me.filter((e) => {
    const n = tr(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : Me;
}
const bo = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, wo = 24, ko = 28, nr = 720;
function Mt(t) {
  return t.fontSize ?? bo[t.type] ?? 14;
}
function zt(t) {
  var e;
  if (!t.fontFamily) return Et.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = er(br(t.customFontFamily ?? ""));
    } catch {
    }
    return go(n) || Et.sans.stack;
  }
  return ((e = Et[t.fontFamily]) == null ? void 0 : e.stack) ?? Et.sans.stack;
}
function St(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function $o(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function Mo(t) {
  var e, n, r;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((r = t.html) != null && r.includes("<ol>")) return "number";
}
function zo(t, e) {
  return {
    w: Math.min(nr, Math.max(wo, Math.ceil(t))),
    h: Math.max(ko, Math.ceil(e))
  };
}
function Co(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = Ue(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${nr}px`,
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
  return n.remove(), zo(r.width, r.height);
}
const So = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), Xo = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function Yo({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: r,
  shapeById: o,
  allShapes: c,
  peerCursors: a,
  isDarkMode: s,
  renderEditor: u,
  renderShapeBody: m,
  setEditingId: d,
  onBendHandleDown: h,
  onOrthogonalSegmentHandleDown: i,
  onResizeHandleDown: l,
  onRotateHandleDown: f,
  onConnectHandleDown: v,
  onArrowEndpointDown: P
}) {
  return /* @__PURE__ */ K(Qt, { children: [
    /* @__PURE__ */ X("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` }, children: t.map((w) => {
      if (w.type === "draw") return null;
      if (w.type === "arrow") {
        const p = Ft(w, o, c), x = p.routing === "orthogonal" && p.pathPoints ? Ge(p.pathPoints) : p.routing === "curved" ? he(0.5, p.start, p.control, p.end) : { x: (p.start.x + p.end.x) / 2, y: (p.start.y + p.end.y) / 2 }, N = n === w.id, g = Ye(w), $ = e.has(w.id), T = fe(w).trim(), z = g || ($ ? "관계 입력" : "");
        return !z && !N ? null : /* @__PURE__ */ X(Ce.Fragment, { children: /* @__PURE__ */ X("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: x.x - 90, top: x.y - 18, width: 180, height: 36 }, onDoubleClick: (C) => {
          C.stopPropagation(), d(w.id);
        }, children: (z || N) && /* @__PURE__ */ X(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": T ? `관계 설명: ${T}` : "관계 설명 입력",
            title: N ? void 0 : T ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${s ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: Mt(w),
              fontFamily: zt(w),
              maxWidth: "100%",
              minWidth: N ? 120 / r.z : void 0,
              minHeight: N ? 28 / r.z : void 0,
              color: w.textColor
            },
            children: N ? u("text-center whitespace-nowrap") : /* @__PURE__ */ X("span", { dangerouslySetInnerHTML: { __html: z } }, "canvas-view")
          }
        ) }) }, w.id);
      }
      const b = e.has(w.id), y = qt(w);
      return /* @__PURE__ */ K(
        "div",
        {
          "data-canvas-shape-id": w.id,
          "data-canvas-shape-type": w.type,
          "data-canvas-selected": b ? "true" : void 0,
          "data-canvas-text-align": St(w),
          "data-canvas-text-color": w.textColor,
          "data-canvas-font-size": Mt(w),
          "data-canvas-font-family": w.fontFamily === "custom" ? w.customFontFamily ?? "custom" : w.fontFamily ?? "sans",
          "data-canvas-manual-size": w.manualSize ? "true" : void 0,
          "data-canvas-group-id": w.groupId,
          "data-canvas-list-kind": Mo(w),
          "data-canvas-x": w.x,
          "data-canvas-y": w.y,
          "data-canvas-width": w.w,
          "data-canvas-height": w.h,
          className: "absolute",
          style: { left: y.minX, top: y.minY, width: y.maxX - y.minX, height: y.maxY - y.minY, transform: w.rotation ? `rotate(${w.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (p) => {
            p.stopPropagation(), So.has(w.type) && d(w.id);
          },
          children: [
            m(w),
            b && /* @__PURE__ */ K(Qt, { children: [
              /* @__PURE__ */ X("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / r.z}px solid ${U.blue}` } }),
              e.size === 1 && /* @__PURE__ */ K(Qt, { children: [
                ["nw", "ne", "sw", "se"].map((p) => /* @__PURE__ */ X("div", { "data-canvas-resize-handle": p, onPointerDown: (x) => l(x, w, p), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / r.z, height: 10 / r.z, cursor: `${p}-resize`, left: p.includes("w") ? -5 / r.z : void 0, right: p.includes("e") ? -5 / r.z : void 0, top: p.includes("n") ? -5 / r.z : void 0, bottom: p.includes("s") ? -5 / r.z : void 0 } }, p)),
                /* @__PURE__ */ X("div", { onPointerDown: (p) => f(p, w), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / r.z, height: 12 / r.z, left: "50%", marginLeft: -6 / r.z, top: -28 / r.z, cursor: "grab" } }),
                Xo.has(w.type) && ["n", "s", "w", "e"].map((p) => /* @__PURE__ */ X("div", { onPointerDown: (x) => v(x, w), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...p === "n" ? { left: "50%", top: -30 / r.z, marginLeft: -9 / r.z } : p === "s" ? { left: "50%", bottom: -30 / r.z, marginLeft: -9 / r.z } : p === "w" ? { top: "50%", left: -30 / r.z, marginTop: -9 / r.z } : { top: "50%", right: -30 / r.z, marginTop: -9 / r.z }, width: 18 / r.z, height: 18 / r.z, fontSize: 13 / r.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${p}`))
              ] })
            ] })
          ]
        },
        w.id
      );
    }) }),
    e.size === 1 && c.filter((w) => w.type === "arrow" && e.has(w.id)).map((w) => {
      const b = Ft(w, o, c), y = (p, x) => ({
        left: (p.x - r.x) * r.z - x / 2,
        top: (p.y - r.y) * r.z - x / 2
      });
      return /* @__PURE__ */ K(Ce.Fragment, { children: [
        b.routing === "orthogonal" && b.pathPoints && b.pathPoints.length > 2 ? b.pathPoints.slice(0, -1).map((p, x) => {
          var $;
          const N = ($ = b.pathPoints) == null ? void 0 : $[x + 1];
          if (!N) return null;
          const g = { x: (p.x + N.x) / 2, y: (p.y + N.y) / 2 };
          return /* @__PURE__ */ X("div", { "data-canvas-arrow-segment-handle": x, onPointerDown: (T) => i(T, w, x), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...y(g, 12), cursor: p.x === N.x ? "ew-resize" : "ns-resize" } }, `segment-${x}`);
        }) : b.routing === "curved" && /* @__PURE__ */ X("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (p) => h(p, w), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (b.start.x + b.end.x) / 2 * r.z - r.x * r.z - 5, top: (b.start.y + b.end.y) / 2 * r.z - r.y * r.z - 10, cursor: "grab" } }),
        ["start", "end"].map((p) => {
          const x = p === "start" ? b.start : b.end;
          return /* @__PURE__ */ X("div", { "data-canvas-arrow-endpoint": p, onPointerDown: (N) => P(N, w, p), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...y(x, 12), cursor: "grab" } }, p);
        })
      ] }, `arrow-handles-${w.id}`);
    }),
    a == null ? void 0 : a.map((w) => /* @__PURE__ */ K("div", { className: "absolute pointer-events-none z-40", style: { left: (w.x - r.x) * r.z, top: (w.y - r.y) * r.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ X("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ X("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: w.color, stroke: U.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ X("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: w.color }, children: w.name })
    ] }, w.id))
  ] });
}
function qe(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function No(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), qe(t) && e.push("diagram"), e;
}
function bi(t) {
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
const Po = "#3b82f6";
function Zt(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function ze(t) {
  return Math.round(Zt(t, 0, 255)).toString(16).padStart(2, "0");
}
function Io(t) {
  const e = t.trim().endsWith("%"), n = Number.parseFloat(t);
  return Number.isFinite(n) ? e ? n * 2.55 : n : 0;
}
function le(t) {
  var c, a;
  const e = t.trim().toLowerCase(), n = (c = e.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : c[1];
  if (n)
    return n.length === 3 || n.length === 4 ? `#${n.slice(0, 3).split("").map((s) => `${s}${s}`).join("")}` : `#${n.slice(0, 6)}`;
  const r = (a = e.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : a[1];
  if (r) {
    const s = r.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(Io);
    if (s.length === 3) return `#${s.map(ze).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? Po;
}
function bn(t) {
  const e = le(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, r = Number.parseInt(e.slice(2, 4), 16) / 255, o = Number.parseInt(e.slice(4, 6), 16) / 255, c = Math.max(n, r, o), a = Math.min(n, r, o), s = c - a;
  let u = 0;
  return s !== 0 && (c === n ? u = 60 * ((r - o) / s % 6) : c === r ? u = 60 * ((o - n) / s + 2) : u = 60 * ((n - r) / s + 4)), u < 0 && (u += 360), { hue: u, saturation: c === 0 ? 0 : s / c, value: c };
}
function wn({ hue: t, saturation: e, value: n }) {
  const r = (t % 360 + 360) % 360, o = n * e, c = o * (1 - Math.abs(r / 60 % 2 - 1)), a = n - o;
  let s = 0, u = 0, m = 0;
  return r < 60 ? [s, u, m] = [o, c, 0] : r < 120 ? [s, u, m] = [c, o, 0] : r < 180 ? [s, u, m] = [0, o, c] : r < 240 ? [s, u, m] = [0, c, o] : r < 300 ? [s, u, m] = [c, 0, o] : [s, u, m] = [o, 0, c], `#${ze((s + a) * 255)}${ze((u + a) * 255)}${ze((m + a) * 255)}`;
}
function Lo(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function Eo({ value: t, onChange: e }) {
  const [n, r] = it(() => bn(t)), o = J(null), c = J(null), a = J(null);
  Pt(() => {
    const b = bn(t);
    r((y) => Lo(y, b) ? y : b);
  }, [t]);
  const s = (b) => {
    r(b), e(wn(b));
  }, u = (b) => {
    var g;
    const y = (g = o.current) == null ? void 0 : g.getBoundingClientRect();
    if (!y) return;
    const p = b.clientX - (y.left + y.width / 2), x = b.clientY - (y.top + y.height / 2), N = Math.atan2(x, p) * 180 / Math.PI + 90;
    s({ ...n, hue: (N + 360) % 360 });
  }, m = (b) => {
    var p;
    const y = (p = c.current) == null ? void 0 : p.getBoundingClientRect();
    y && s({
      ...n,
      saturation: Zt((b.clientX - y.left) / y.width, 0, 1),
      value: Zt(1 - (b.clientY - y.top) / y.height, 0, 1)
    });
  }, d = (b, y) => {
    var p, x;
    y.button !== 0 && y.pointerType !== "touch" || (y.preventDefault(), y.stopPropagation(), a.current = b, (x = (p = y.currentTarget).setPointerCapture) == null || x.call(p, y.pointerId), b === "hue" ? u(y) : m(y));
  }, h = (b) => {
    a.current && (b.preventDefault(), a.current === "hue" ? u(b) : m(b));
  }, i = (b) => {
    var y, p;
    a.current = null;
    try {
      (p = (y = b.currentTarget).releasePointerCapture) == null || p.call(y, b.pointerId);
    } catch {
      return;
    }
  }, l = (n.hue - 90) * Math.PI / 180, f = 53, v = {
    left: 66 + Math.cos(l) * f,
    top: 66 + Math.sin(l) * f
  }, P = wn({ hue: n.hue, saturation: 1, value: 1 }), w = (b) => s({ ...n, hue: (n.hue + b + 360) % 360 });
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
        onPointerDown: (b) => d("hue", b),
        onPointerMove: h,
        onPointerUp: i,
        onKeyDown: (b) => {
          (b.key === "ArrowLeft" || b.key === "ArrowDown") && (b.preventDefault(), w(-1)), (b.key === "ArrowRight" || b.key === "ArrowUp") && (b.preventDefault(), w(1));
        },
        children: [
          /* @__PURE__ */ X("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ X("span", { className: "canvas-color-wheel-hue-marker", style: { left: v.left, top: v.top } })
        ]
      }
    ),
    /* @__PURE__ */ X(
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
        style: { backgroundColor: P },
        onPointerDown: (b) => d("sv", b),
        onPointerMove: h,
        onPointerUp: i,
        onKeyDown: (b) => {
          const y = b.shiftKey ? 0.1 : 0.02;
          b.key === "ArrowLeft" && (b.preventDefault(), s({ ...n, saturation: Zt(n.saturation - y, 0, 1) })), b.key === "ArrowRight" && (b.preventDefault(), s({ ...n, saturation: Zt(n.saturation + y, 0, 1) })), b.key === "ArrowDown" && (b.preventDefault(), s({ ...n, value: Zt(n.value - y, 0, 1) })), b.key === "ArrowUp" && (b.preventDefault(), s({ ...n, value: Zt(n.value + y, 0, 1) }));
        },
        children: /* @__PURE__ */ X("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${n.saturation * 100}%`, top: `${(1 - n.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ K("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ X("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ X("span", { children: le(t).toUpperCase() })
    ] })
  ] });
}
const To = [2, 4, 6, 8];
function Fo(t) {
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
      return rr(t);
  }
}
function kn(t) {
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
      return rr(t);
  }
}
function rr(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function De(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function $n(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Ao({
  shape: t,
  selection: e,
  selectionActions: n,
  shapes: r,
  camera: o,
  canvasSize: c,
  isDarkMode: a,
  editing: s,
  showPalette: u,
  installedFontFamilies: m,
  setShowPalette: d,
  setActiveColor: h,
  patchSelected: i,
  applyFormat: l,
  applyList: f,
  applyCustomFontFamily: v
}) {
  var ne, Yt;
  const P = a ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", w = e.length > 1, b = e.some((k) => !!k.groupId), y = t.type === "draw", p = y || $n(t) && !De(t) ? "stroke" : De(t) ? "fill" : "text", [x, N] = it(p), [g, $] = it("");
  Jt(() => N(p), [p, t.id]);
  const T = x === "text" ? te(t) : x === "stroke" ? t.strokeColor ?? (t.color ? at[t.color].border : U.ink) : Se(t);
  Jt(() => $(le(T).toUpperCase()), [T]);
  const z = le(T), C = (k) => {
    i(y || x === "stroke" ? { strokeColor: k } : x === "text" ? { textColor: k } : { fillColor: k });
  }, F = (k) => {
    h(k), i(y || x === "stroke" ? { color: k, strokeColor: void 0 } : x === "text" ? { textColor: at[k].text } : { color: k, fillColor: void 0 }), d(!1);
  }, A = J(null), [S, M] = it({ width: 380, height: 260 });
  Jt(() => {
    const k = A.current;
    if (!k) return;
    const B = () => {
      const ct = Math.max(1, Math.ceil(k.getBoundingClientRect().width)), wt = Math.max(1, Math.ceil(k.getBoundingClientRect().height));
      M((Ht) => Ht.width === ct && Ht.height === wt ? Ht : { width: ct, height: wt });
    };
    if (B(), typeof ResizeObserver > "u") return;
    const Z = new ResizeObserver(B);
    return Z.observe(k), () => Z.disconnect();
  }, [s, m.length, a, t, u]);
  const I = S.width, Y = S.height, W = e.reduce((k, B) => {
    const Z = ft(B);
    return {
      minX: Math.min(k.minX, Z.minX),
      minY: Math.min(k.minY, Z.minY),
      maxX: Math.max(k.maxX, Z.maxX),
      maxY: Math.max(k.maxY, Z.maxY)
    };
  }, ft(t)), D = (W.minX - o.x) * o.z, L = (W.minY - o.y) * o.z, O = (W.maxX - o.x) * o.z, V = (W.maxY - o.y) * o.z, E = Math.max(8, c.width - I - 8), _ = Math.max(8, c.height - Y - 8), q = (k, B) => ({ left: Math.min(Math.max(8, k), E), top: Math.min(Math.max(8, B), _) }), nt = [
    q((D + O) / 2 - I / 2, L - Y - 12),
    q((D + O) / 2 - I / 2, V + 12),
    q((c.width - I) / 2, 12),
    q(D - I - 12, L + (V - L - Y) / 2),
    q(O + 12, L + (V - L - Y) / 2)
  ], tt = r.map((k) => {
    const B = ft(k);
    return { left: (B.minX - o.x) * o.z, top: (B.minY - o.y) * o.z, right: (B.maxX - o.x) * o.z, bottom: (B.maxY - o.y) * o.z };
  });
  if (t.type === "arrow") {
    const k = Ft(t, new Map(r.map((wt) => [wt.id, wt])), r), B = k.routing === "orthogonal" && k.pathPoints ? Ge(k.pathPoints) : { x: (k.start.x + k.end.x) / 2, y: (k.start.y + k.end.y) / 2 }, Z = 180 * o.z, ct = 36 * o.z;
    tt.push({
      left: (B.x - o.x) * o.z - Z / 2,
      top: (B.y - o.y) * o.z - ct / 2,
      right: (B.x - o.x) * o.z + Z / 2,
      bottom: (B.y - o.y) * o.z + ct / 2
    });
  }
  const lt = nt[0], R = (k, B) => {
    const Z = Math.max(0, Math.min(k.left + I, B.right) - Math.max(k.left, B.left)), ct = Math.max(0, Math.min(k.top + Y, B.bottom) - Math.max(k.top, B.top));
    return Z * ct;
  }, kt = ((ne = nt.map((k) => ({
    candidate: k,
    overlap: tt.reduce((B, Z) => B + R(k, Z), 0),
    distance: Math.hypot(k.left - lt.left, k.top - lt.top)
  })).sort((k, B) => k.overlap - B.overlap || k.distance - B.distance)[0]) == null ? void 0 : ne.candidate) ?? lt, Lt = Mt(t), pt = e.every(Fo), Wt = new Set(e.map(kn)).size === 1 ? kn(t) : void 0, dt = No(t), Q = t.type === "arrow" ? "arrow" : dt[0] ?? "color", [et, ut] = it(Q);
  Jt(() => {
    dt.includes(et) || ut(Q);
  }, [Q, dt, et]);
  const bt = t.type === "arrow" && !!((Yt = t.orthogonalWaypoints) != null && Yt.length), vt = t.type === "arrow" ? t.arrowStart ?? "none" : "none", mt = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", rt = (k, B, Z, ct, wt = ct) => /* @__PURE__ */ X("button", { type: "button", title: ct, "aria-label": wt, onClick: Z, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${B ? "bg-blue-600 text-white" : P}`, children: k }), gt = (k) => /* @__PURE__ */ X("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: k }), yt = (k, B, Z, ct, wt = !1) => /* @__PURE__ */ X(
    "button",
    {
      type: "button",
      title: B,
      "aria-label": B,
      disabled: !ct,
      onClick: Z,
      className: `w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default ${wt ? "text-rose-500 hover:bg-rose-500/10" : P}`,
      children: /* @__PURE__ */ X(k, { className: "w-4 h-4" })
    }
  ), Xt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ K("div", { ref: A, "data-canvas-inspector": y ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${a ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: kt.left, top: kt.top }, onPointerDown: (k) => {
    k.stopPropagation();
    const B = k.target instanceof Element ? k.target : null;
    B != null && B.closest("input, select, textarea") || k.preventDefault();
  }, onClick: (k) => k.stopPropagation(), children: [
    w ? /* @__PURE__ */ K("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      e.length,
      "개 선택됨"
    ] }) : /* @__PURE__ */ X("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: dt.map((k) => /* @__PURE__ */ X("button", { type: "button", role: "tab", "aria-selected": et === k, onClick: () => ut(k), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${et === k ? "bg-blue-600 text-white" : P}`, children: Xt[k] }, k)) }),
    /* @__PURE__ */ K("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: w || et === "color" || y ? void 0 : "none" }, children: [
      /* @__PURE__ */ X("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: y ? "그리기" : "색상" }),
      /* @__PURE__ */ X("button", { type: "button", title: y ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": y ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => d((k) => !k), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${a ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ X("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ X("span", { className: "canvas-color-wheel-trigger-dot", style: { background: z } }) }) }),
      u && /* @__PURE__ */ K("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${a ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !y && /* @__PURE__ */ K("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          De(t) && /* @__PURE__ */ X("button", { type: "button", role: "tab", "aria-selected": x === "fill", onClick: () => N("fill"), className: x === "fill" ? "is-active" : "", children: "배경" }),
          $n(t) && /* @__PURE__ */ X("button", { type: "button", role: "tab", "aria-selected": x === "stroke", onClick: () => N("stroke"), className: x === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ X("button", { type: "button", role: "tab", "aria-selected": x === "text", onClick: () => N("text"), className: x === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ X("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: In.map((k) => /* @__PURE__ */ X("button", { type: "button", title: at[k].label, "aria-label": `색 ${at[k].label}`, onClick: () => F(k), className: "canvas-color-preset", style: { background: at[k].bg, borderColor: at[k].border, outline: t.color === k && !t.fillColor && !t.strokeColor ? `2px solid ${U.blue}` : void 0, outlineOffset: 1 } }, k)) }),
        /* @__PURE__ */ X(Eo, { value: T, onChange: C }),
        /* @__PURE__ */ K("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ X("span", { children: "#" }),
          /* @__PURE__ */ X(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: g.replace(/^#/, ""),
              onChange: (k) => {
                const B = k.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                $(`#${B}`.toUpperCase()), B.length === 6 && C(`#${B}`);
              },
              onBlur: () => $(le(T).toUpperCase()),
              onPointerDown: (k) => k.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !w && et !== "color" && !y && /* @__PURE__ */ K(Qt, { children: [
      /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ X("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ K("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: te(t), color: U.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ X("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ X("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? te(t), onChange: (k) => i({ textColor: k.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ K("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${a ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ X("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ X("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => i({ fontSize: Math.max(8, Lt - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${P}`, children: /* @__PURE__ */ X(Mr, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ X("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: Lt }),
          /* @__PURE__ */ X("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => i({ fontSize: Math.min(96, Lt + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${P}`, children: /* @__PURE__ */ X(zr, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ K("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ X("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (k) => {
            const B = $o(k.target.value);
            i(B === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: B, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${a ? "text-slate-200" : "text-slate-700"}`, children: po.map((k) => /* @__PURE__ */ X("option", { value: k, className: a ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: Et[k].label }, k)) }),
          /* @__PURE__ */ X(Cr, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ K(Qt, { children: [
          /* @__PURE__ */ X("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (k) => v(k.target.value), onChange: (k) => k.currentTarget.value && v(k.currentTarget.value), onKeyDown: (k) => {
            k.key === "Enter" && (k.preventDefault(), v(k.currentTarget.value));
          }, onDoubleClick: (k) => k.stopPropagation(), onPointerDown: (k) => k.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ X("datalist", { id: `canvas-font-families-${t.id}`, children: m.map((k) => /* @__PURE__ */ X("option", { value: k }, k)) })
        ] })
      ] }),
      /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ X("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ X("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", Sr, "왼쪽 정렬"], ["center", Xr, "가운데 정렬"], ["right", Yr, "오른쪽 정렬"]].map(([k, B, Z]) => /* @__PURE__ */ X("button", { type: "button", "aria-label": Z, title: Z, onClick: () => i({ textAlign: k }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${St(t) === k ? "bg-blue-600 text-white shadow-sm" : P}`, children: /* @__PURE__ */ X(B, { className: "w-4 h-4" }) }, k)) }),
        s && /* @__PURE__ */ K(Qt, { children: [
          /* @__PURE__ */ X("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ X("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", Nr, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", Pr, "번호 목록"]].map(([k, B, Z]) => /* @__PURE__ */ X("button", { type: "button", onClick: () => f(k), "aria-label": Z, title: Z, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${P}`, children: B ? /* @__PURE__ */ X(B, { className: "w-4 h-4" }) : /* @__PURE__ */ X("span", { className: "text-base leading-none", children: "–" }) }, k)) }),
          /* @__PURE__ */ X("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: Ir, label: "굵게" }, { cmd: "italic", Icon: Lr, label: "기울임" }, { cmd: "underline", Icon: Er, label: "밑줄" }].map(({ cmd: k, Icon: B, label: Z }) => /* @__PURE__ */ X("button", { type: "button", onClick: () => l(k), "aria-label": Z, title: Z, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${P}`, children: /* @__PURE__ */ X(B, { className: "w-4 h-4" }) }, k)) })
        ] })
      ] }),
      (et === "arrange" && t.type === "card" || et === "arrow" && t.type === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ K(Qt, { children: [
          /* @__PURE__ */ X("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ X("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (k) => k.stopPropagation(), onChange: (k) => i({ category: k.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${a ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            gt("경로"),
            rt("직선", (t.routing ?? "straight") === "straight", () => i({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            rt("직각", t.routing === "orthogonal", () => i({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            rt("곡선", (t.routing ?? "") === "curved", () => i({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            bt && rt("자동", !1, () => i({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            gt("선"),
            rt("—", (t.strokeStyle ?? "solid") === "solid", () => i({ strokeStyle: "solid" }), "실선"),
            rt("- -", t.strokeStyle === "dashed", () => i({ strokeStyle: "dashed" }), "파선"),
            rt("···", t.strokeStyle === "dotted", () => i({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            gt("시작"),
            rt(vt === "none" ? "○" : vt === "dot" ? "●" : "◀", vt !== "none", () => i({ arrowStart: vt === "none" ? "arrow" : vt === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${vt === "none" ? "없음" : vt === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            gt("끝"),
            rt(mt === "none" ? "○" : mt === "dot" ? "●" : "▶", mt !== "none", () => i({ arrowEnd: mt === "arrow" ? "dot" : mt === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${mt === "none" ? "없음" : mt === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      et === "diagram" && /* @__PURE__ */ X("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${a ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    pt && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
      gt("굵기"),
      To.map((k) => /* @__PURE__ */ X(Ce.Fragment, { children: rt(String(k), Wt === k, () => i({ strokeWidth: k }), `굵기 ${k}`) }, k))
    ] }),
    /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
      gt("선택"),
      yt(Tr, "그룹 (Ctrl+G)", n.group, w),
      yt(Fr, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, b),
      yt(Ar, "복제", n.duplicateSelected, !0),
      yt(Wr, "삭제 (Delete)", n.deleteSelected, !0, !0)
    ] })
  ] });
}
const Wo = [2, 4, 6, 8];
function Do({
  tool: t,
  activeColor: e,
  drawStrokeWidth: n,
  isDarkMode: r,
  onSelectColor: o,
  onSelectStrokeWidth: c
}) {
  return t !== "draw" && t !== "highlighter" ? null : /* @__PURE__ */ K(
    "div",
    {
      "data-canvas-pen-palette": "true",
      className: `absolute top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex flex-wrap items-center gap-2 px-3 py-2 rounded-2xl border shadow-xl backdrop-blur-md transition-all ${r ? "bg-slate-900/90 border-slate-700 text-slate-200 shadow-slate-950/40" : "bg-white/90 border-slate-200 text-slate-700 shadow-slate-300/40"}`,
      onPointerDown: (s) => s.stopPropagation(),
      onClick: (s) => s.stopPropagation(),
      children: [
        /* @__PURE__ */ X("div", { className: "flex items-center gap-1.5 pr-2 border-r border-slate-300/40 dark:border-slate-700/60", children: /* @__PURE__ */ X("span", { className: "text-[11px] font-bold tracking-wide opacity-75", children: t === "highlighter" ? "형광펜" : "펜 색상" }) }),
        /* @__PURE__ */ X("div", { className: "flex items-center gap-1.5", role: "radiogroup", "aria-label": "펜 색상 선택", children: In.map((s) => {
          const u = at[s], m = e === s;
          return /* @__PURE__ */ X(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": m,
              title: `${u.label} 선택`,
              "aria-label": u.label,
              onClick: () => o(s),
              className: `group relative w-6 h-6 rounded-full transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${m ? "scale-110 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900" : "hover:scale-105 opacity-90 hover:opacity-100"}`,
              style: {
                backgroundColor: u.border,
                borderColor: u.border
              },
              children: m && /* @__PURE__ */ X("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ X("span", { className: "w-1.5 h-1.5 rounded-full bg-white shadow-sm" }) })
            },
            s
          );
        }) }),
        /* @__PURE__ */ K("div", { className: "flex items-center gap-1 pl-2 border-l border-slate-300/40 dark:border-slate-700/60", children: [
          /* @__PURE__ */ X("span", { className: "mr-1 text-[10px] font-semibold opacity-60", children: "두께" }),
          Wo.map((s) => {
            const u = n === s;
            return /* @__PURE__ */ X(
              "button",
              {
                type: "button",
                title: `두께 ${s}px`,
                "aria-label": `두께 ${s}px`,
                onClick: () => c(s),
                className: `w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-semibold transition-colors ${u ? "bg-blue-600 text-white font-bold" : r ? "hover:bg-slate-800 text-slate-300" : "hover:bg-slate-100 text-slate-700"}`,
                children: /* @__PURE__ */ X(
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
function Oo({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: r,
  commitEditorHtml: o,
  onEditorKeyDown: c,
  setShapes: a,
  onDirty: s,
  renderDiagram: u
}) {
  const m = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", d = (i, l) => /* @__PURE__ */ X(
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
      onDoubleClick: (f) => f.stopPropagation(),
      onKeyDown: c,
      className: `${m} ${i}`,
      style: l
    },
    "canvas-editor"
  );
  return { renderEditor: d, renderShapeBody: (i) => {
    const l = at[i.color ?? "blue"], f = e === i.id, v = Ye(i);
    if (i.type === "frame") {
      const N = i.strokeWidth ?? 2;
      return /* @__PURE__ */ X(
        "div",
        {
          "data-canvas-stroke-width": N,
          className: "w-full h-full rounded",
          style: { border: `${N / t.z}px solid ${n ? U.slate600 : U.slate400}` },
          children: /* @__PURE__ */ X(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? U.slate400 : U.muted
              },
              children: f ? d("", { fontSize: 13 / t.z }) : fe(i) || "프레임"
            }
          )
        }
      );
    }
    if (i.type === "note")
      return /* @__PURE__ */ X(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: Se(i), borderTop: `6px solid ${l.border}`, color: l.text },
          children: f ? d("font-medium", { color: te(i), fontSize: Mt(i), fontFamily: zt(i), textAlign: St(i) }) : v ? /* @__PURE__ */ X("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: te(i), fontSize: Mt(i), fontFamily: zt(i), textAlign: St(i) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") : /* @__PURE__ */ X("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: te(i), fontSize: Mt(i), fontFamily: zt(i), textAlign: St(i) }, children: /* @__PURE__ */ X("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (i.type === "card") {
      const N = i.cardStyle === "glass";
      return qe(i) && u && !f ? /* @__PURE__ */ X("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: u(i) }) : /* @__PURE__ */ K(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: N ? U.glassFill : i.fillColor ?? U.slateCard,
            backdropFilter: N ? "blur(12px)" : void 0,
            WebkitBackdropFilter: N ? "blur(12px)" : void 0,
            border: `1px solid ${N ? U.glassBorder : U.darkBorder}`,
            boxShadow: N ? U.glassShadow : U.cardShadow
          },
          children: [
            /* @__PURE__ */ K(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (g) => g.stopPropagation(),
                onDoubleClick: (g) => g.stopPropagation(),
                onBlur: (g) => {
                  const T = (g.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  a((z) => z.map((C) => C.id === i.id ? { ...C, category: T } : C)), s();
                },
                onKeyDown: (g) => {
                  g.key === "Enter" && (g.preventDefault(), g.currentTarget.blur());
                },
                children: [
                  "[ ",
                  i.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            f ? d("flex-1 font-medium", { color: i.textColor ?? U.white, fontSize: Mt(i), fontFamily: zt(i), textAlign: St(i) }) : /* @__PURE__ */ X("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: i.textColor ?? U.white, fontSize: Mt(i), fontFamily: zt(i), textAlign: St(i) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view"),
            /* @__PURE__ */ K("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              i.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (i.type === "text") {
      const N = n ? "text-slate-100" : "text-slate-900", g = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${N}`,
        style: { color: i.textColor, fontSize: Mt(i), fontFamily: zt(i), textAlign: St(i) }
      };
      return f ? d(`font-medium ${N}`, g.style) : v ? /* @__PURE__ */ X(
        "div",
        {
          "data-canvas-text-view": !0,
          ...g,
          dangerouslySetInnerHTML: { __html: v }
        },
        "canvas-view"
      ) : /* @__PURE__ */ X("div", { "data-canvas-text-view": !0, ...g, children: /* @__PURE__ */ X("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (i.type === "image") {
      const N = je(i.src);
      return N ? /* @__PURE__ */ X(
        "img",
        {
          src: N,
          alt: i.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const P = Se(i), w = Bn(i), b = te(i);
    if (i.type === "triangle" || i.type === "diamond" || i.type === "hexagon" || i.type === "star") {
      const N = i.strokeWidth ?? 2;
      return /* @__PURE__ */ K("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ X("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${i.w} ${i.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ X("polygon", { "data-canvas-stroke-width": N, points: jn(i.type, i.w, i.h), fill: P, stroke: w, strokeWidth: N / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ X("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: b }, children: f ? d("font-medium", { color: b, fontSize: Mt(i), fontFamily: zt(i), textAlign: St(i) }) : /* @__PURE__ */ X("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: Mt(i), fontFamily: zt(i), textAlign: St(i) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") })
      ] });
    }
    const p = je(i.src), x = i.type === "rect" || i.type === "ellipse" ? i.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ X(
      "div",
      {
        "data-canvas-stroke-width": x,
        className: `w-full h-full flex items-center justify-center p-3 ${i.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: P, border: `${x / t.z}px solid ${w}`, color: b },
        children: f ? d("font-medium", { color: b, fontSize: Mt(i), fontFamily: zt(i), textAlign: St(i) }) : /* @__PURE__ */ K("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: Mt(i), fontFamily: zt(i), textAlign: St(i) }, children: [
          /* @__PURE__ */ X("div", { dangerouslySetInnerHTML: { __html: v } }),
          p && /* @__PURE__ */ X(
            "a",
            {
              href: p,
              target: "_blank",
              rel: "noreferrer",
              onPointerDown: (N) => N.stopPropagation(),
              className: "block mt-1 text-[11px] underline opacity-70",
              children: "파일 열기"
            }
          )
        ] }, "canvas-view")
      }
    );
  } };
}
function Ho({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: r,
  selected: o,
  editingId: c,
  boardIdentity: a
}) {
  const [s, u] = it({ width: 0, height: 0 });
  Pt(() => {
    const f = t.current;
    if (!f) return;
    let v = -1, P = -1;
    const w = (y = f.clientWidth, p = f.clientHeight) => {
      y === v && p === P || (v = y, P = p, u({ width: y, height: p }));
    };
    if (w(), typeof ResizeObserver < "u") {
      const y = new ResizeObserver((p) => {
        var N;
        const x = (N = p[0]) == null ? void 0 : N.contentRect;
        w((x == null ? void 0 : x.width) ?? f.clientWidth, (x == null ? void 0 : x.height) ?? f.clientHeight);
      });
      return y.observe(f), () => y.disconnect();
    }
    const b = () => w();
    return window.addEventListener("resize", b), () => window.removeEventListener("resize", b);
  }, [a, t]);
  const m = Tt(() => new Map(n.map((f) => [f.id, f])), [n]), d = Tt(
    () => [...n].sort((f, v) => (f.type === "frame" ? -1 : 0) - (v.type === "frame" ? -1 : 0)),
    [n]
  ), h = Tt(() => {
    if (!t.current || s.width <= 0 || s.height <= 0) return null;
    const f = 200 / r.z;
    return {
      minX: r.x - f,
      minY: r.y - f,
      maxX: r.x + s.width / r.z + f,
      maxY: r.y + s.height / r.z + f
    };
  }, [r, t, s]), i = ht((f) => {
    if (!h) return !1;
    if (f.id === c || o.has(f.id)) return !0;
    if (f.type === "arrow") {
      const P = Ft(f, m, e.current), b = (P.routing === "orthogonal" ? P.pathPoints : null) ?? [P.start, P.end], y = Math.min(...b.map((g) => g.x)), p = Math.max(...b.map((g) => g.x)), x = Math.min(...b.map((g) => g.y)), N = Math.max(...b.map((g) => g.y));
      return p >= h.minX && y <= h.maxX && N >= h.minY && x <= h.maxY;
    }
    const v = ft(f);
    return v.maxX >= h.minX && v.minX <= h.maxX && v.maxY >= h.minY && v.minY <= h.maxY;
  }, [c, o, m, e, h]), l = Tt(
    () => d.filter(i),
    [i, d]
  );
  return { shapeById: m, visiblePaintOrder: l };
}
function _o({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: r,
  onDirty: o,
  patchSelected: c
}) {
  const a = ht(() => {
    const l = t.current;
    if (!l || !e) return;
    let f;
    try {
      f = Ue(l.innerHTML);
    } catch {
      r("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const v = l.scrollHeight;
    n((P) => P.map((w) => {
      if (w.id !== e) return w;
      const b = qe(w) ? { ...w, text: fe({ ...w, html: f, text: void 0 }), html: void 0 } : { ...w, html: f, text: void 0 };
      if (w.type === "text")
        return w.manualSize ? b : { ...b, ...Co(l, w) };
      if (w.type === "arrow") return b;
      const y = w.type === "note" ? 32 : w.type === "card" ? 96 : (
        // category header + type footer
        (w.type === "frame", 24)
      ), p = Math.max(w.h, v + y);
      return { ...b, h: p };
    })), o();
  }, [e, o]), s = (l) => {
    var f;
    (f = t.current) == null || f.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(l), a();
  }, u = () => {
    var P;
    const l = (P = window.getSelection()) == null ? void 0 : P.anchorNode, f = l instanceof Element ? l : l == null ? void 0 : l.parentElement, v = f == null ? void 0 : f.closest("ul, ol");
    return v instanceof HTMLElement ? v : null;
  }, m = (l, f, v) => {
    const P = document.createElement(f);
    for (; l.firstChild; ) P.append(l.firstChild);
    return l.replaceWith(P), P;
  }, d = (l) => {
    const f = t.current;
    if (!f) return;
    f.focus();
    const v = u();
    if (l === "number")
      if ((v == null ? void 0 : v.tagName) === "OL")
        v.removeAttribute("data-list-style");
      else if ((v == null ? void 0 : v.tagName) === "UL")
        m(v, "ol");
      else {
        document.execCommand("insertOrderedList");
        const P = u();
        P == null || P.removeAttribute("data-list-style");
      }
    else if ((v == null ? void 0 : v.tagName) === "UL") {
      const P = v.dataset.listStyle;
      l === P ? document.execCommand("insertUnorderedList") : v.dataset.listStyle = l;
    } else {
      (v == null ? void 0 : v.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const P = u();
      P && (P.dataset.listStyle = l);
    }
    a();
  };
  return { commitEditorHtml: a, applyFormat: s, applyList: d, onEditorKeyDown: (l) => {
    if (l.key === "Tab") {
      l.preventDefault(), document.execCommand(l.shiftKey ? "outdent" : "indent"), a();
      return;
    }
    if (l.key === " ") {
      const f = window.getSelection();
      if (f && f.isCollapsed && f.anchorNode) {
        const v = f.anchorNode, P = v.textContent || "", w = f.anchorOffset, b = P.slice(0, w).trim();
        if (!u()) {
          if (b === "-" || b === "–") {
            l.preventDefault(), v.textContent = P.slice(w), d("dash");
            return;
          }
          if (b === "*") {
            l.preventDefault(), v.textContent = P.slice(w), d("bullet");
            return;
          }
          if (b === "1.") {
            l.preventDefault(), v.textContent = P.slice(w), d("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (l) => {
    const f = er(l);
    if (!f) {
      c({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    c({
      fontFamily: "custom",
      customFontFamily: f
    });
  } };
}
function Bo({
  boardIdentity: t,
  tool: e,
  activeColor: n,
  defaultActiveColor: r,
  onActiveColorChange: o,
  controlledShapes: c,
  onShapesChange: a,
  onDirty: s
}) {
  const u = J(null), m = J(null), [d, h] = it([]), i = c !== void 0 && a !== void 0, l = J(/* @__PURE__ */ new WeakMap()), f = Tt(() => {
    const H = l.current;
    return (i ? c ?? [] : d).map((G) => {
      let j = H.get(G);
      return j === void 0 && (j = Rn(G), H.set(G, j)), j;
    }).filter((G) => G !== null);
  }, [i, c, d]), v = J(a);
  v.current = a;
  const P = ht((H) => {
    const G = v.current;
    if (!G) {
      h(H);
      return;
    }
    G(typeof H == "function" ? H : () => H);
  }, []), [w, b] = it({ x: -400, y: -300, z: 1 }), [y, p] = it(/* @__PURE__ */ new Set()), [x, N] = it(null), [g, $] = it({ kind: "none" }), [T, z] = it(!1), [C, F] = it([]), [A, S] = it(""), [M, I] = it(!1), [Y, W] = it(null), [D, L] = it(n ?? r ?? "blue"), O = n ?? D, V = J(o);
  V.current = o;
  const E = ht((H) => {
    L((G) => {
      var ot;
      const j = typeof H == "function" ? H(G) : H;
      return (ot = V.current) == null || ot.call(V, j), j;
    });
  }, []), [_, q] = it(Me), nt = J(O);
  nt.current = O;
  const tt = J([]), lt = J([]), R = J(null), kt = J(/* @__PURE__ */ new Map()), Lt = J(null), pt = J(null), Ot = J([]), Wt = J(/* @__PURE__ */ new Set()), dt = J(f), Q = J(w), et = J(e), ut = J(y), bt = J(x);
  dt.current = f, Q.current = w, et.current = e, ut.current = y, bt.current = x;
  const [vt, mt] = it("ink"), [rt, gt] = it("yellow"), yt = e === "highlighter" ? rt : vt, Xt = J(yt);
  Xt.current = yt;
  const ne = ht((H) => {
    et.current === "highlighter" ? gt(H) : mt(H);
  }, []), Yt = J({ kind: "none" }), k = ht((H) => {
    Yt.current = H, $(H);
  }, []), B = ht((H) => {
    ut.current = H, p(H);
  }, []);
  Jt(() => {
    var G;
    const H = /* @__PURE__ */ new Set();
    ut.current = H, bt.current = null, kt.current.clear(), tt.current = [], lt.current = [], R.current = null, pt.current = null, Ot.current = [], Wt.current.clear(), k({ kind: "none" }), p(H), N(null), z(!1), F([]), W(null), S(""), (G = u.current) == null || G.focus();
  }, [k, t]), Pt(() => {
    let H = !1;
    const G = () => {
      const ot = yo();
      H || q(ot);
    };
    if (G(), typeof document > "u" || !("fonts" in document)) return;
    const j = () => G();
    return document.fonts.addEventListener("loadingdone", j), () => {
      H = !0, document.fonts.removeEventListener("loadingdone", j);
    };
  }, [t]);
  const ct = (x ? f.find((H) => H.id === x) : void 0) !== void 0;
  Jt(() => {
    if (!x || !ct) return;
    const H = () => {
      const j = m.current, ot = dt.current.find((Ee) => Ee.id === x);
      if (!j || !ot || (j.dataset.seeded !== x && (j.innerHTML = Ye(ot), j.dataset.seeded = x), document.activeElement === j)) return;
      j.focus();
      const _t = document.createRange();
      _t.selectNodeContents(j), _t.collapse(!1);
      const Bt = window.getSelection();
      Bt == null || Bt.removeAllRanges(), Bt == null || Bt.addRange(_t);
    };
    H();
    const G = requestAnimationFrame(H);
    return () => cancelAnimationFrame(G);
  }, [x, ct]);
  const wt = ht((H) => {
    P((G) => {
      const j = typeof H == "function" ? H(G) : H;
      return tt.current.push(G), tt.current.length > 100 && tt.current.shift(), lt.current = [], j;
    }), s();
  }, [s]), Ht = ht((H) => {
    if (H.length === 0) return;
    let G = dt.current;
    for (const j of H)
      tt.current.push(G), G = [...G, j];
    tt.current.length > 100 && tt.current.splice(0, tt.current.length - 100), lt.current = [], P((j) => [...j, ...H]), s();
  }, [s, P]), ce = ht((H) => H.size === 0 ? !1 : (wt((G) => G.filter((j) => H.has(j.id) ? !1 : j.type !== "arrow" ? !0 : !(j.fromId && H.has(j.fromId)) && !(j.toId && H.has(j.toId)))), B(/* @__PURE__ */ new Set()), S(`${H.size}개 삭제됨`), !0), [wt, B]), pe = ht(() => {
    R.current = dt.current;
  }, []), Pe = ht(() => {
    const H = R.current;
    R.current = null, !(!H || H === dt.current) && (tt.current.push(H), tt.current.length > 100 && tt.current.shift(), lt.current = [], s());
  }, [s]), Ie = ht((H, G) => {
    var _t;
    const j = (_t = u.current) == null ? void 0 : _t.getBoundingClientRect(), ot = Q.current;
    return j ? { x: (H - j.left) / ot.z + ot.x, y: (G - j.top) / ot.z + ot.y } : { x: 0, y: 0 };
  }, []), ve = ht(() => {
    var j;
    const H = (j = u.current) == null ? void 0 : j.getBoundingClientRect(), G = Q.current;
    return H ? { x: G.x + H.width / 2 / G.z, y: G.y + H.height / 2 / G.z } : { x: 0, y: 0 };
  }, []), Le = ht((H) => {
    const G = new Set(dt.current.filter((ot) => H.has(ot.id) && ot.groupId).map((ot) => ot.groupId));
    if (G.size === 0) return H;
    const j = new Set(H);
    for (const ot of dt.current) ot.groupId && G.has(ot.groupId) && j.add(ot.id);
    return j;
  }, []);
  return {
    containerRef: u,
    editorRef: m,
    localShapes: d,
    setLocalShapes: h,
    controlled: i,
    shapes: f,
    setShapes: P,
    camera: w,
    setCamera: b,
    cameraRef: Q,
    selected: y,
    setSelected: p,
    selectedRef: ut,
    editingId: x,
    setEditingId: N,
    editingIdRef: bt,
    interaction: g,
    interactionRef: Yt,
    applyInteraction: k,
    isSpaceDown: T,
    setIsSpaceDown: z,
    guides: C,
    setGuides: F,
    announcement: A,
    setAnnouncement: S,
    showInspectorPalette: M,
    setShowInspectorPalette: I,
    eraserPos: Y,
    setEraserPos: W,
    activeColor: O,
    setActiveColor: E,
    activeColorRef: nt,
    drawColor: yt,
    setDrawColor: ne,
    drawColorRef: Xt,
    installedFontFamilies: _,
    pointers: kt,
    past: tt,
    future: lt,
    selectNow: B,
    commit: wt,
    deleteSelection: ce,
    beginHistory: pe,
    endHistory: Pe,
    toPage: Ie,
    viewportCentre: ve,
    expandToGroups: Le,
    toolRef: et,
    shapesRef: dt,
    liveStrokeCanvasRef: Lt,
    activeDrawRef: pt,
    pendingDrawsRef: Ot,
    queuedDrawIdsRef: Wt,
    commitDrawBatch: Ht
  };
}
function jo({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: r,
  maxZoom: o,
  shapes: c,
  selected: a,
  editingId: s,
  textualTypes: u,
  onZoomChange: m,
  onSelectionChange: d,
  onLocalCursor: h,
  toPage: i
}) {
  Pt(() => {
    m == null || m(e.z);
  }, [e.z, m]), Pt(() => {
    const y = t.current;
    if (!y) return;
    const p = (x) => {
      if (x.preventDefault(), x.ctrlKey || x.metaKey) {
        const N = y.getBoundingClientRect();
        n((g) => {
          const $ = Math.min(o, Math.max(r, g.z * Math.exp(-x.deltaY * 0.01))), T = x.clientX - N.left, z = x.clientY - N.top;
          return { x: g.x + T / g.z - T / $, y: g.y + z / g.z - z / $, z: $ };
        });
      } else
        n((N) => ({ ...N, x: N.x + x.deltaX / N.z, y: N.y + x.deltaY / N.z }));
    };
    return y.addEventListener("wheel", p, { passive: !1 }), () => y.removeEventListener("wheel", p);
  }, [t, o, r, n]);
  const l = Tt(() => {
    const y = c.filter((p) => a.has(p.id));
    return {
      count: y.length,
      canGroup: y.length > 1,
      canUngroup: y.some((p) => !!p.groupId),
      isTextual: y.length === 1 && u.includes(y[0].type),
      selectedIds: y.map((p) => p.id)
    };
  }, [a, c, u]);
  Pt(() => {
    d == null || d(l);
  }, [d, l]);
  const f = Tt(() => {
    if (s) {
      const p = c.find((x) => x.id === s);
      return p && p.type !== "image" && p.type !== "draw" ? [p] : [];
    }
    const y = c.filter((p) => a.has(p.id));
    return y.length === 1 && y[0].type === "image" ? [] : y;
  }, [s, a, c]), v = Tt(() => f.length === 0 ? null : f.find((y) => y.type !== "image") ?? null, [f]), P = J(0);
  return { selectionInfo: l, inspectorSelection: f, inspectorShape: v, onContainerPointerMove: h ? (y) => {
    const p = performance.now();
    p - P.current < 60 || (P.current = p, h(i(y.clientX, y.clientY)));
  } : void 0, onContainerPointerLeave: h ? () => h(null) : void 0 };
}
const ie = 24;
function Ko({
  containerRef: t,
  shapesRef: e,
  selectedRef: n,
  commit: r,
  deleteSelection: o,
  selectNow: c,
  setAnnouncement: a,
  createId: s
}) {
  return Tt(() => ({
    deleteSelected: () => {
      o(n.current);
    },
    duplicateSelected: () => {
      var h;
      const u = n.current;
      if (u.size === 0) return;
      const m = [], d = /* @__PURE__ */ new Map();
      for (const i of e.current) {
        if (!u.has(i.id)) continue;
        let l = i.groupId;
        l && (d.has(l) || d.set(l, s("g")), l = d.get(l)), m.push({
          ...i,
          id: s(),
          x: i.x + ie,
          y: i.y + ie,
          groupId: l,
          points: (h = i.points) == null ? void 0 : h.map(([f, v]) => [f + ie, v + ie]),
          orthogonalWaypoints: i.type === "arrow" && i.orthogonalWaypoints ? i.orthogonalWaypoints.map((f) => ({ x: f.x + ie, y: f.y + ie })) : void 0
        });
      }
      r((i) => [...i, ...m]), c(new Set(m.map((i) => i.id))), a(`${m.length}개 복제됨`);
    },
    group: () => {
      var d;
      const u = n.current;
      if (u.size < 2) return;
      const m = s("g");
      r((h) => h.map((i) => u.has(i.id) ? { ...i, groupId: m } : i)), a(`${u.size}개 그룹화됨`), (d = t.current) == null || d.focus();
    },
    ungroup: () => {
      var m;
      const u = n.current;
      u.size !== 0 && (r((d) => d.map((h) => u.has(h.id) ? { ...h, groupId: void 0 } : h)), a("그룹 해제됨"), (m = t.current) == null || m.focus());
    }
  }), [r, t, s, o, c, n, a, e]);
}
function Uo(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, r = 1 / 0, o = -1 / 0, c = -1 / 0;
  for (const h of t) {
    const i = ft(h);
    n = Math.min(n, i.minX), r = Math.min(r, i.minY), o = Math.max(o, i.maxX), c = Math.max(c, i.maxY);
  }
  const a = 40, s = o - n + a * 2, u = c - r + a * 2;
  if (!Number.isFinite(s) || !Number.isFinite(u) || s > ae.maxExportDimension || u > ae.maxExportDimension || s * u > ae.maxExportPixels) return null;
  const m = (h, i, l, f, v) => {
    const P = h.fontSize ?? l, w = zt(h), b = Gn(Ye(h));
    if (b.length === 0) return "";
    const y = qt(h), p = h.textAlign === "right" ? "end" : h.textAlign === "center" ? "middle" : h.textAlign === "left" ? "start" : v, x = p === "end" ? y.maxX - 12 : p === "middle" ? (y.minX + y.maxX) / 2 : y.minX + 12, N = y.minY + P + 12;
    return b.map((g, $) => {
      const T = g.map((z) => `<tspan style="${[
        z.bold ? "font-weight:700" : `font-weight:${f}`,
        z.italic ? "font-style:italic" : "",
        z.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Vt(z.text)}</tspan>`).join("");
      return `<text x="${x}" y="${N + $ * P * 1.4}" font-family="${Vt(w)}" font-size="${P}" fill="${i}" text-anchor="${p}">${T}</text>`;
    }).join("");
  }, d = t.map((h) => {
    const i = at[h.color ?? "blue"], l = qt(h), f = It(h), v = h.rotation ? ` transform="rotate(${h.rotation * 180 / Math.PI} ${f.x} ${f.y})"` : "", P = h.color ? at[h.color].border : U.ink;
    if (h.type === "draw" && h.points) {
      const g = h.drawMode ?? "pen", $ = h.strokeWidth ?? 3, T = g === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${Kn(h.points)}" fill="none" stroke="${P}" stroke-width="${$}"${T} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (h.type === "arrow") {
      const g = Ft(h, new Map(t.map((O) => [O.id, O])), t), $ = h.strokeWidth ?? 2.5, T = Math.max(10, 8 + $ * 2), z = Math.max(4, 2 + $), C = g.routing === "orthogonal" && g.pathPoints ? g.pathPoints : null, F = C && C.length > 1, A = F ? He(C) : g.routing === "curved" ? `M ${g.start.x} ${g.start.y} Q ${g.control.x} ${g.control.y} ${g.end.x} ${g.end.y}` : `M ${g.start.x} ${g.start.y} L ${g.end.x} ${g.end.y}`, S = F ? An(C) : g.routing === "curved" ? (() => {
        const O = he(0.94, g.start, g.control, g.end);
        return Math.atan2(g.end.y - O.y, g.end.x - O.x);
      })() : Math.atan2(g.end.y - g.start.y, g.end.x - g.start.x), M = F ? de(C[0], C[1]) : g.routing === "orthogonal" && g.start.side ? g.start.side === "e" ? 0 : g.start.side === "w" ? Math.PI : g.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : de(g.start, g.end), I = h.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : h.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", Y = (O, V, E, _) => {
        if (O === "dot") return `<circle cx="${V}" cy="${E}" r="${z}" fill="${P}"/>`;
        if (O === "none") return "";
        const q = `${V - T * Math.cos(_ - 0.4)},${E - T * Math.sin(_ - 0.4)}`, nt = `${V - T * Math.cos(_ + 0.4)},${E - T * Math.sin(_ + 0.4)}`;
        return `<polygon points="${V},${E} ${q} ${nt}" fill="${P}"/>`;
      }, W = g.routing === "orthogonal" && g.pathPoints ? Ge(g.pathPoints) : g.bend === 0 ? { x: (g.start.x + g.end.x) / 2, y: (g.start.y + g.end.y) / 2 } : he(0.5, g.start, g.control, g.end), D = fe(h), L = D ? `<text x="${W.x}" y="${W.y - 6}" text-anchor="middle" font-family="${Vt(zt(h))}" font-size="${h.fontSize ?? 12}" fill="${P}">${Vt(D)}</text>` : "";
      return `<path d="${A}" fill="none" stroke="${P}" stroke-width="${$}" stroke-linecap="round" stroke-linejoin="round"${I}/>` + Y(h.arrowEnd ?? "arrow", g.end.x, g.end.y, S) + Y(h.arrowStart ?? "none", g.start.x, g.start.y, M + Math.PI) + L;
    }
    if (h.type === "image" && h.src) {
      const g = je(h.src);
      return g ? `<image href="${Vt(g)}" x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}"${v}/>` : "";
    }
    if (h.type === "frame")
      return `<g${v}><rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}" fill="none" stroke="${U.slate400}" stroke-width="${h.strokeWidth ?? 2}" rx="4"/><text x="${l.minX}" y="${l.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${U.muted}">${Vt(h.text ?? "프레임")}</text></g>`;
    if (h.type === "note")
      return `<g${v}><rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}" fill="${i.bg}"/><rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="6" fill="${i.border}"/>` + m(h, i.text, 14, "600", "start") + "</g>";
    if (h.type === "card") {
      const g = h.cardStyle === "glass";
      return `<g${v}><rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}" rx="16" fill="${g ? U.glassFill : U.slateCard}"/><text x="${l.minX + 16}" y="${l.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${U.slate400}">[ ${Vt(h.category ?? "ENTITY")} ]</text>` + m(h, U.white, 16, "700", "start") + "</g>";
    }
    const w = h.type === "rect" || h.type === "ellipse" || h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star" ? h.strokeWidth ?? 2 : 2, b = Se(h), y = Bn(h), p = h.type === "triangle" || h.type === "diamond" || h.type === "hexagon" || h.type === "star", x = p ? jn(h.type, l.maxX - l.minX, l.maxY - l.minY).split(" ").map((g) => {
      const [$, T] = g.split(",").map(Number);
      return `${$ + l.minX},${T + l.minY}`;
    }).join(" ") : "", N = h.type === "ellipse" ? `<ellipse cx="${(l.minX + l.maxX) / 2}" cy="${(l.minY + l.maxY) / 2}" rx="${(l.maxX - l.minX) / 2}" ry="${(l.maxY - l.minY) / 2}" fill="${b}" stroke="${y}" stroke-width="${w}"/>` : p ? `<polygon points="${x}" fill="${b}" stroke="${y}" stroke-width="${w}" stroke-linejoin="round"/>` : `<rect x="${l.minX}" y="${l.minY}" width="${l.maxX - l.minX}" height="${l.maxY - l.minY}" rx="12" fill="${b}" stroke="${y}" stroke-width="${w}"/>`;
    return `<g${v}>${N}${m(h, i.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${u}" viewBox="${n - a} ${r - a} ${s} ${u}"><rect x="${n - a}" y="${r - a}" width="${s}" height="${u}" fill="${e ? U.canvasDark : U.canvasLight}"/>` + d + "</svg>";
}
async function Vo(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), r = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), o = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), c = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, a = new Image();
  a.crossOrigin = "anonymous";
  try {
    await new Promise((i, l) => {
      a.onload = () => i(), a.onerror = () => l(new Error("svg rasterise failed")), a.src = c;
    });
  } catch {
    return null;
  }
  const s = 2, u = r * s, m = o * s;
  if (!Number.isSafeInteger(u) || !Number.isSafeInteger(m) || u > ae.maxExportDimension || m > ae.maxExportDimension || u * m > ae.maxExportPixels) return null;
  const d = document.createElement("canvas");
  d.width = u, d.height = m;
  const h = d.getContext("2d");
  return h ? (h.scale(s, s), h.drawImage(a, 0, 0), new Promise((i) => {
    try {
      d.toBlob((l) => i(l), "image/png");
    } catch {
      i(null);
    }
  })) : null;
}
function Go(t, e, n) {
  if (t.length < 2) return;
  const r = t.filter(
    (i) => i.type !== "draw" && i.type !== "arrow" && i.type !== "frame" && i.type !== "image"
  );
  if (r.length < 2) return;
  const o = r.map((i, l) => ({
    id: i.id,
    i: l,
    x: It(i).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: It(i).y,
    vx: 0,
    vy: 0
  }));
  for (let i = 0; i < o.length; i++)
    for (let l = 0; l < i; l++)
      if (Math.abs(o[i].x - o[l].x) < 1 && Math.abs(o[i].y - o[l].y) < 1) {
        const f = 2 * Math.PI * i / o.length;
        o[i].x += Math.cos(f) * 10, o[i].y += Math.sin(f) * 10;
        break;
      }
  const c = new Map(o.map((i) => [i.id, i])), a = [];
  for (const i of t) {
    if (i.type !== "arrow") continue;
    const l = i.fromId ? c.get(i.fromId) : null, f = i.toId ? c.get(i.toId) : null;
    l && f && a.push([l, f]);
  }
  const s = 220, u = s * s, m = 80;
  let d = 400;
  const h = d / m;
  for (let i = 0; i < m; i++) {
    for (let l = 0; l < o.length; l++)
      o[l].vx = 0, o[l].vy = 0;
    for (let l = 0; l < o.length; l++)
      for (let f = l + 1; f < o.length; f++) {
        const v = o[l], P = o[f], w = v.x - P.x, b = v.y - P.y, y = Math.hypot(w, b) || 0.01, p = u / y, x = w / y * p, N = b / y * p;
        v.vx += x, v.vy += N, P.vx -= x, P.vy -= N;
      }
    for (const [l, f] of a) {
      const v = l.x - f.x, P = l.y - f.y, w = Math.hypot(v, P) || 0.01, b = w * w / s, y = v / w * b, p = P / w * b;
      l.vx -= y, l.vy -= p, f.vx += y, f.vy += p;
    }
    for (const l of o) {
      const f = Math.hypot(l.vx, l.vy) || 0.01, v = Math.min(f, d);
      l.x += l.vx / f * v, l.y += l.vy / f * v;
    }
    d = Math.max(0.5, d - h);
  }
  e((i) => i.map((l) => {
    const f = c.get(l.id);
    return f ? { ...l, x: f.x - l.w / 2, y: f.y - l.h / 2 } : l;
  })), n();
}
function Ro(t, {
  controlled: e,
  past: n,
  future: r,
  setLocalShapes: o,
  setCamera: c,
  selectNow: a,
  setEditingId: s
}) {
  let u;
  try {
    u = wr(t);
  } catch {
    return;
  }
  e || (n.current = [], r.current = [], o(u.shapes.map(qo))), c(u.camera), a(/* @__PURE__ */ new Set()), s(null);
}
function qo(t) {
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
      return Zo(t);
  }
}
function Zo(t) {
  throw new kr(`Unhandled canvas shape type: ${String(t)}.`);
}
const Mn = (t) => t === "draw" || t === "highlighter";
function Qo({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: r,
  toolRef: o,
  activeColorRef: c,
  drawColorRef: a,
  setDrawColor: s,
  setActiveColor: u,
  past: m,
  future: d,
  controlled: h,
  isDarkMode: i,
  minZoom: l,
  maxZoom: f,
  onToolChange: v,
  setSelectedStrokeWidth: P,
  onDirty: w,
  commit: b,
  selectNow: y,
  selectionActions: p,
  viewportCentre: x,
  setShapes: N,
  setLocalShapes: g,
  setCamera: $,
  setEditingId: T,
  setAnnouncement: z,
  createId: C
}) {
  const F = ht((S) => {
    const M = x(), I = Rn({
      id: C(),
      x: S.x ?? M.x - S.w / 2,
      y: S.y ?? M.y - S.h / 2,
      ...S
    });
    if (!I) throw new Error("Canvas could not create a valid shape.");
    return b((Y) => [...Y, I]), y(/* @__PURE__ */ new Set([I.id])), v("select"), z(`${I.type} 추가됨`), I;
  }, [b, C, v, y, z, x]), A = ht(() => Uo(n.current, i), [i, n]);
  vr(t, () => ({
    addNote: (S) => {
      const M = F({ type: "note", w: 180, h: 180, color: S, text: "" });
      T(M.id);
    },
    addCard: (S, M, I, Y) => {
      F({ type: "card", w: 260, h: 150, text: S, category: M, cardStyle: I, color: Y });
    },
    addText: () => {
      const S = F({ type: "text", w: 220, h: 44, text: "" });
      T(S.id);
    },
    addShape: (S, M, I) => {
      F({
        type: S,
        w: S === "ellipse" ? 220 : 200,
        h: S === "ellipse" ? 110 : 140,
        color: M,
        text: I ?? ""
      });
    },
    addArrow: () => {
      const S = x(), M = { id: C(), type: "arrow", x: S.x - 140, y: S.y, w: 280, h: 0 };
      b((I) => [...I, M]), y(/* @__PURE__ */ new Set([M.id])), v("select");
    },
    addImage: (S, M, I, Y) => {
      F({ type: "image", w: I, h: Y, src: S, fileName: M });
    },
    addFileCard: (S, M, I) => {
      F({ type: "rect", w: 260, h: 120, color: "purple", text: I, src: M, fileName: S });
    },
    updateShapeText: (S, M) => {
      b((I) => I.map((Y) => Y.id === S ? { ...Y, text: M, html: void 0 } : Y));
    },
    setSelectedStrokeWidth: P,
    // While a pen tool is active the "active colour" is the pen colour, so
    // hosts that drive the palette through the handle see the same thing the
    // user sees on the canvas. Other tools keep the note/shape colour.
    setActiveColor: (S) => {
      Mn(o.current) ? s(S) : u(S);
    },
    getActiveColor: () => Mn(o.current) ? a.current : c.current,
    setTool: v,
    undo: () => {
      const S = m.current.pop();
      S && (d.current.push(n.current), N(S), y(/* @__PURE__ */ new Set()), T(null), w(), z("실행 취소"));
    },
    redo: () => {
      const S = d.current.pop();
      S && (m.current.push(n.current), N(S), y(/* @__PURE__ */ new Set()), T(null), w(), z("다시 실행"));
    },
    deleteSelected: p.deleteSelected,
    duplicateSelected: p.duplicateSelected,
    group: p.group,
    ungroup: p.ungroup,
    zoomBy: (S) => {
      $((M) => {
        var L;
        const I = (L = e.current) == null ? void 0 : L.getBoundingClientRect(), Y = Math.min(f, Math.max(l, M.z * S));
        if (!I) return { ...M, z: Y };
        const W = M.x + I.width / 2 / M.z, D = M.y + I.height / 2 / M.z;
        return { x: W - I.width / 2 / Y, y: D - I.height / 2 / Y, z: Y };
      });
    },
    zoomTo: (S) => {
      $((M) => {
        var L;
        const I = (L = e.current) == null ? void 0 : L.getBoundingClientRect(), Y = Math.min(f, Math.max(l, S));
        if (!I) return { ...M, z: Y };
        const W = M.x + I.width / 2 / M.z, D = M.y + I.height / 2 / M.z;
        return { x: W - I.width / 2 / Y, y: D - I.height / 2 / Y, z: Y };
      });
    },
    resetZoom: () => {
      $((S) => {
        var W;
        const M = (W = e.current) == null ? void 0 : W.getBoundingClientRect();
        if (!M) return { ...S, z: 1 };
        const I = S.x + M.width / 2 / S.z, Y = S.y + M.height / 2 / S.z;
        return { x: I - M.width / 2, y: Y - M.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var V;
      const S = n.current, M = (V = e.current) == null ? void 0 : V.getBoundingClientRect();
      if (S.length === 0 || !M) return;
      let I = 1 / 0, Y = 1 / 0, W = -1 / 0, D = -1 / 0;
      for (const E of S) {
        const _ = ft(E);
        I = Math.min(I, _.minX), Y = Math.min(Y, _.minY), W = Math.max(W, _.maxX), D = Math.max(D, _.maxY);
      }
      const L = 80, O = Math.min(f, Math.max(
        l,
        Math.min(M.width / (W - I + L * 2), M.height / (D - Y + L * 2))
      ));
      $({
        x: (I + W) / 2 - M.width / 2 / O,
        y: (Y + D) / 2 - M.height / 2 / O,
        z: O
      });
    },
    autoLayout: () => Go(n.current, b, () => z("자동 배치 완료")),
    exportSvg: A,
    exportPng: () => Vo(A),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: r.current }),
    loadSnapshot: (S) => Ro(S, {
      controlled: h,
      past: m,
      future: d,
      setLocalShapes: g,
      setCamera: $,
      selectNow: y,
      setEditingId: T
    })
  }), [
    F,
    A,
    b,
    C,
    i,
    f,
    l,
    w,
    v,
    p,
    y,
    $,
    T,
    g,
    P,
    N,
    z,
    x,
    h
  ]);
}
function Jo(t) {
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
function ti({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: r,
  editingIdRef: o,
  toolRef: c,
  past: a,
  future: s,
  textualTypes: u,
  setIsSpaceDown: m,
  setEditingId: d,
  setShapes: h,
  setAnnouncement: i,
  commit: l,
  deleteSelection: f,
  selectNow: v,
  onDirty: P,
  onToolChange: w,
  createId: b
}) {
  const y = ht((p, x) => {
    const N = r.current;
    N.size !== 0 && l((g) => g.map(($) => {
      var T;
      return N.has($.id) ? {
        ...$,
        x: $.x + p,
        y: $.y + x,
        points: (T = $.points) == null ? void 0 : T.map(([z, C]) => [z + p, C + x])
      } : $;
    }));
  }, [l, r]);
  Pt(() => {
    const p = ($) => {
      const T = $;
      return !!T && (T.tagName === "INPUT" || T.tagName === "TEXTAREA" || T.isContentEditable);
    }, x = ($) => $ instanceof Element && !!$.closest("input, select, button, textarea, option, label, [data-canvas-control]"), N = ($) => {
      var I, Y, W, D;
      const T = t.current, z = document.activeElement, C = $.target instanceof Node && !!(T != null && T.contains($.target)), F = !!T && (z === T || T.contains(z));
      if (!C && !F || x($.target)) return;
      if ($.code === "Space" && !p($.target)) {
        m(!0), $.preventDefault();
        return;
      }
      if (p($.target)) {
        if ($.key === "Escape")
          $.preventDefault(), d(null), (I = e.current) == null || I.blur(), (Y = t.current) == null || Y.focus();
        else if (($.key === "Delete" || $.key === "Backspace") && !o.current) {
          const L = r.current;
          f(L) && $.preventDefault();
        }
        return;
      }
      const A = $.metaKey || $.ctrlKey, S = r.current;
      if (A && $.key.toLowerCase() === "z") {
        if ($.preventDefault(), $.shiftKey) {
          const L = s.current.pop();
          L && (a.current.push(n.current), h(L), P());
        } else {
          const L = a.current.pop();
          L && (s.current.push(n.current), h(L), P());
        }
        v(/* @__PURE__ */ new Set());
        return;
      }
      if (A && $.key.toLowerCase() === "g") {
        if ($.preventDefault(), $.shiftKey)
          S.size > 0 && (l((L) => L.map((O) => S.has(O.id) ? { ...O, groupId: void 0 } : O)), i("그룹 해제됨"));
        else if (S.size > 1) {
          const L = b("g");
          l((O) => O.map((V) => S.has(V.id) ? { ...V, groupId: L } : V)), i(`${S.size}개 그룹화됨`);
        }
        return;
      }
      if (A && $.key.toLowerCase() === "a") {
        $.preventDefault(), v(new Set(n.current.map((L) => L.id))), i(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if ($.key === "Delete" || $.key === "Backspace") {
        f(S) && $.preventDefault();
        return;
      }
      if ($.key.startsWith("Arrow")) {
        $.preventDefault();
        const L = $.shiftKey ? 10 : 1;
        $.key === "ArrowLeft" && y(-L, 0), $.key === "ArrowRight" && y(L, 0), $.key === "ArrowUp" && y(0, -L), $.key === "ArrowDown" && y(0, L);
        return;
      }
      if ($.key === "Tab" && n.current.length > 0) {
        $.preventDefault();
        const L = n.current, O = L.findIndex((_) => S.has(_.id)), V = $.shiftKey ? O <= 0 ? L.length - 1 : O - 1 : O === -1 || O === L.length - 1 ? 0 : O + 1, E = L[V];
        v(/* @__PURE__ */ new Set([E.id])), i(`${E.type} 선택됨: ${fe(E) || "내용 없음"}`);
        return;
      }
      if ($.key === "Enter" && S.size === 1) {
        const L = n.current.find((O) => S.has(O.id));
        L && u.includes(L.type) && ($.preventDefault(), d(L.id));
        return;
      }
      if ($.key === "Escape") {
        if (o.current) {
          $.preventDefault(), d(null), (W = e.current) == null || W.blur(), (D = t.current) == null || D.focus(), w("select");
          return;
        }
        v(/* @__PURE__ */ new Set()), w("select");
        return;
      }
      const M = Jo($);
      M && ($.preventDefault(), c.current = M, w(M));
    }, g = ($) => {
      const T = t.current;
      !T || !(document.activeElement === T || T.contains(document.activeElement)) || $.code === "Space" && m(!1);
    };
    return window.addEventListener("keydown", N), window.addEventListener("keyup", g), () => {
      window.removeEventListener("keydown", N), window.removeEventListener("keyup", g);
    };
  }, [
    l,
    t,
    b,
    f,
    o,
    e,
    s,
    y,
    P,
    w,
    a,
    v,
    r,
    i,
    d,
    m,
    h,
    n,
    u,
    c
  ]);
}
function Oe(t, e) {
  return [(t[0] - e.x) * e.z, (t[1] - e.y) * e.z];
}
function Ke(t, e, n) {
  const r = 0.05 / Math.max(n, 0.1);
  let o = t[t.length - 1];
  for (const c of e)
    (!o || Math.hypot(c[0] - o[0], c[1] - o[1]) >= r) && (t.push(c), o = c);
}
function ei(t) {
  const e = (t.points ?? []).map(([a, s]) => [a, s]);
  if (e.length === 0) return t;
  let n = e[0][0], r = e[0][1], o = n, c = r;
  for (const [a, s] of e)
    n = Math.min(n, a), r = Math.min(r, s), o = Math.max(o, a), c = Math.max(c, s);
  return { ...t, points: e, x: n, y: r, w: o - n, h: c - r };
}
function zn(t, e, n) {
  if (e.type !== "draw") return;
  const r = e.points ?? [];
  if (r.length === 0) return;
  const o = e.strokeWidth ?? 3, c = e.drawMode ?? "pen", a = e.color ? at[e.color].border : "#2563eb";
  if (t.save(), t.globalAlpha = c === "highlighter" ? 0.35 : 1, t.fillStyle = a, r.length === 1) {
    const [d, h] = Oe(r[0], n);
    t.beginPath(), t.arc(d, h, Math.max(Un(o, c) * n.z, 0.5), 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  const s = Vn(r, o, c);
  if (s.length === 0) {
    t.restore();
    return;
  }
  t.beginPath();
  const [u, m] = Oe([s[0][0], s[0][1]], n);
  t.moveTo(u, m);
  for (let d = 1; d < s.length; d++) {
    const [h, i] = Oe([s[d][0], s[d][1]], n);
    t.lineTo(h, i);
  }
  t.closePath(), t.fill(), t.restore();
}
function ni(t, e, n, r) {
  const o = Math.max(1, Math.min(2, r)), c = Math.max(1, Math.round(e * o)), a = Math.max(1, Math.round(n * o));
  return t.width !== c && (t.width = c), t.height !== a && (t.height = a), t.style.width = `${e}px`, t.style.height = `${n}px`, o;
}
function xe(t, e, n, r, o = 1) {
  var s;
  if (!t) return;
  const c = (s = t.getContext) == null ? void 0 : s.call(t, "2d");
  if (!c) return;
  const a = Math.max(1, Math.min(2, o || 1));
  c.setTransform(1, 0, 0, 1, 0, 0), c.clearRect(0, 0, t.width, t.height), c.setTransform(a, 0, 0, a, 0, 0);
  for (const u of e) zn(c, u, r);
  n && zn(c, n, r), c.setTransform(1, 0, 0, 1, 0, 0);
}
const ri = 400;
function oi({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: r,
  editingIdRef: o,
  cameraRef: c,
  shapesRef: a,
  toolRef: s,
  activeColorRef: u,
  drawColorRef: m,
  drawStrokeWidth: d,
  camera: h,
  shapes: i,
  selected: l,
  isSpaceDown: f,
  textualTypes: v,
  setShapes: P,
  setEditingId: w,
  applyInteraction: b,
  selectNow: y,
  beginHistory: p,
  commit: x,
  onToolChange: N,
  expandToGroups: g,
  toPage: $,
  createId: T,
  liveStrokeCanvasRef: z,
  activeDrawRef: C,
  pendingDrawsRef: F
}) {
  const A = T, S = J(null), M = (E, _) => {
    var lt;
    const q = ((lt = t.current) == null ? void 0 : lt.dataset.canvasActiveTool) === "text" ? "text" : s.current;
    if (q !== "note" && q !== "text") return;
    const nt = $(E, _), tt = q === "note" ? { id: A(), type: "note", x: nt.x - 90, y: nt.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: A(), type: "text", x: nt.x, y: nt.y - 22, w: 220, h: 44, text: "" };
    x((R) => [...R, tt]), y(/* @__PURE__ */ new Set([tt.id])), w(tt.id), N("select");
  };
  return Pt(() => {
    const E = (_) => {
      var q;
      (q = t.current) != null && q.contains(_.target) && (_.target instanceof Element && _.target.closest('[role="textbox"], [data-canvas-inspector]') || M(_.clientX, _.clientY));
    };
    return window.addEventListener("click", E, !0), () => window.removeEventListener("click", E, !0);
  }), { onPointerDown: (E) => {
    var Ot, Wt, dt;
    const _ = s.current, q = E.target instanceof Element ? E.target : null, nt = !!(q != null && q.closest("[data-canvas-editor]")) && o.current !== null;
    n.current.set(E.pointerId, { x: E.clientX, y: E.clientY });
    const tt = r.current;
    if (tt.kind === "drawing" && tt.pointerId !== E.pointerId) {
      n.current.delete(E.pointerId);
      return;
    }
    !nt && E.cancelable && E.preventDefault();
    const lt = E.currentTarget;
    try {
      lt.setPointerCapture(E.pointerId);
    } catch {
    }
    if (n.current.size === 2) {
      const [Q, et] = [...n.current.values()], ut = c.current;
      b({
        kind: "pinch",
        startDist: Math.hypot(et.x - Q.x, et.y - Q.y) || 1,
        startZoom: ut.z,
        startMidX: (Q.x + et.x) / 2,
        startMidY: (Q.y + et.y) / 2,
        camX: ut.x,
        camY: ut.y
      });
      return;
    }
    if (n.current.size > 2) return;
    if (E.button === 1 || f || _ === "hand" || E.button === 0 && _ === "select" && E.altKey) {
      b({ kind: "pan", startX: E.clientX, startY: E.clientY, camX: h.x, camY: h.y });
      return;
    }
    if (E.button !== 0) return;
    const R = $(E.clientX, E.clientY);
    if (nt || (w(null), (Ot = e.current) == null || Ot.blur(), (Wt = t.current) == null || Wt.focus()), _ === "draw" || _ === "highlighter") {
      const Q = {
        id: A(),
        type: "draw",
        x: R.x,
        y: R.y,
        w: 0,
        h: 0,
        points: [[R.x, R.y]],
        color: m.current,
        strokeWidth: d,
        drawMode: _ === "highlighter" ? "highlighter" : "pen"
      };
      C.current = Q, xe(z.current, F.current, Q, c.current, window.devicePixelRatio || 1), b({ kind: "drawing", id: Q.id, pointerId: E.pointerId });
      return;
    }
    if (_ === "arrow" || _ === "frame" || $r.includes(_)) {
      const Q = _, et = _ === "arrow" ? { id: A(), type: "arrow", x: R.x, y: R.y, w: 0, h: 0, color: u.current } : _ === "frame" ? { id: A(), type: "frame", x: R.x, y: R.y, w: 0, h: 0, text: "프레임" } : { id: A(), type: Q, x: R.x, y: R.y, w: 0, h: 0, color: u.current, text: "" };
      p(), P((ut) => [...ut, et]), b({ kind: "creating", id: et.id, startX: R.x, startY: R.y });
      return;
    }
    if (_ === "note" || _ === "text") return;
    if (_ === "eraser") {
      p(), P((Q) => Qn(Q, R.x, R.y, 14 / h.z, h.z)), b({ kind: "erasing" });
      return;
    }
    const kt = new Map(i.map((Q) => [Q.id, Q])), Lt = o.current ? i.find((Q) => Q.id === o.current) : void 0, pt = nt && Lt ? Lt : [...i].reverse().find((Q) => Xe(Q, R.x, R.y, h.z, kt, i));
    if (!pt)
      S.current = null;
    else {
      const Q = Date.now(), et = !E.shiftKey && v.includes(pt.type) && ((dt = S.current) == null ? void 0 : dt.id) === pt.id && Q - S.current.time < ri, ut = et ? pt.id : void 0;
      S.current = et ? null : { id: pt.id, time: Q };
      const bt = E.shiftKey ? new Set(l).add(pt.id) : l.has(pt.id) ? l : /* @__PURE__ */ new Set([pt.id]), vt = g(bt);
      y(vt);
      const mt = /* @__PURE__ */ new Map();
      for (const rt of i) vt.has(rt.id) && mt.set(rt.id, rt);
      for (const rt of i) {
        if (rt.type !== "frame" || !vt.has(rt.id)) continue;
        const gt = ft(rt);
        for (const yt of i) {
          if (yt.id === rt.id || mt.has(yt.id)) continue;
          const Xt = It(yt);
          Xt.x >= gt.minX && Xt.x <= gt.maxX && Xt.y >= gt.minY && Xt.y <= gt.maxY && mt.set(yt.id, yt);
        }
      }
      p(), b({ kind: "move", startX: R.x, startY: R.y, origin: mt, editOnReleaseId: ut });
      return;
    }
    E.shiftKey || y(/* @__PURE__ */ new Set()), b({
      kind: "marquee",
      startX: R.x,
      startY: R.y,
      curX: R.x,
      curY: R.y,
      screenStartX: E.clientX,
      screenStartY: E.clientY
    });
  }, onResizeHandleDown: (E, _, q) => {
    E.stopPropagation(), n.current.set(E.pointerId, { x: E.clientX, y: E.clientY }), p(), b({ kind: "resize", id: _.id, handle: q, start: _ });
  }, onRotateHandleDown: (E, _) => {
    E.stopPropagation(), n.current.set(E.pointerId, { x: E.clientX, y: E.clientY });
    const q = $(E.clientX, E.clientY), nt = It(_);
    p(), b({
      kind: "rotate",
      id: _.id,
      startAngle: Math.atan2(q.y - nt.y, q.x - nt.x),
      startRotation: _.rotation ?? 0
    });
  }, onConnectHandleDown: (E, _) => {
    E.stopPropagation(), n.current.set(E.pointerId, { x: E.clientX, y: E.clientY });
    const q = $(E.clientX, E.clientY);
    b({ kind: "connect", fromId: _.id, toX: q.x, toY: q.y, hoverId: null });
  }, onBendHandleDown: (E, _) => {
    E.stopPropagation(), n.current.set(E.pointerId, { x: E.clientX, y: E.clientY }), p(), b({ kind: "bend", id: _.id });
  }, onOrthogonalSegmentHandleDown: (E, _, q) => {
    E.stopPropagation(), n.current.set(E.pointerId, { x: E.clientX, y: E.clientY }), p(), b({ kind: "orthogonal-segment", id: _.id, segmentIndex: q });
  }, onArrowEndpointDown: (E, _, q) => {
    E.stopPropagation(), n.current.set(E.pointerId, { x: E.clientX, y: E.clientY }), p(), b({ kind: "arrow-endpoint", id: _.id, endpoint: q, hoverId: null });
  } };
}
const ii = 0.1, ai = 4, ci = 14, si = 4, Cn = ["note", "card", "rect", "ellipse", "text", "image"];
function li({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: r,
  shapesRef: o,
  setShapes: c,
  setEditingId: a,
  setEraserPos: s,
  setGuides: u,
  setAnnouncement: m,
  applyInteraction: d,
  selectNow: h,
  endHistory: i,
  commit: l,
  onToolChange: f,
  createId: v,
  pendingDrawPointsRef: P,
  drawRafRef: w,
  liveStrokeCanvasRef: b,
  activeDrawRef: y,
  pendingDrawsRef: p,
  queuedDrawIdsRef: x,
  commitDrawBatch: N
}) {
  const g = v, $ = J(null);
  Pt(() => {
    const T = (z) => {
      var F, A;
      t.current.delete(z.pointerId);
      try {
        (A = (F = z.target) == null ? void 0 : F.releasePointerCapture) == null || A.call(F, z.pointerId);
      } catch {
      }
      const C = e.current;
      if (C.kind !== "none") {
        if (C.kind === "pinch") {
          t.current.size < 2 && d({ kind: "none" });
          return;
        }
        if (u([]), C.kind === "erasing") {
          s(null), i(), d({ kind: "none" });
          return;
        }
        if (C.kind === "connect") {
          const M = o.current.find((O) => O.id === C.fromId);
          if (d({ kind: "none" }), !M) return;
          const I = { x: C.toX, y: C.toY }, Y = It(M);
          if (!C.hoverId && Math.hypot(I.x - Y.x, I.y - Y.y) < 30) return;
          const W = [];
          let D = C.hoverId;
          if (!D) {
            const O = M.type === "note" ? 180 : 200, V = M.type === "note" ? 180 : 120, E = {
              ...M,
              id: g(),
              x: I.x - O / 2,
              y: I.y - V / 2,
              w: O,
              h: V,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            W.push(E), D = E.id;
          }
          const L = {
            id: g(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: M.id,
            toId: D,
            text: ""
          };
          W.push(L), l((O) => [...O, ...W]), h(/* @__PURE__ */ new Set([L.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => a(L.id)) : a(L.id), m("연결 생성됨");
          return;
        }
        if (C.kind === "bend") {
          i(), d({ kind: "none" });
          return;
        }
        if (C.kind === "drawing") {
          if (C.pointerId !== z.pointerId) return;
          w.current !== null && (cancelAnimationFrame(w.current), w.current = null);
          const S = P.current.splice(0), M = y.current;
          if (M && M.id === C.id && M.points) {
            if (Ke(M.points, S, n.current.z), z.type === "pointerup") {
              const Y = r(z.clientX, z.clientY);
              Ke(M.points, [[Y.x, Y.y]], n.current.z);
            }
            const I = ei(M);
            p.current = [...p.current, I], y.current = null, xe(b.current, p.current, null, n.current, window.devicePixelRatio || 1), $.current === null && ($.current = requestAnimationFrame(() => {
              $.current = null;
              const Y = p.current.filter((W) => !x.current.has(W.id));
              if (Y.length !== 0) {
                for (const W of Y) x.current.add(W.id);
                N(Y);
              }
            }));
          }
          d({ kind: "none" });
          return;
        }
        if (C.kind === "creating") {
          c((S) => S.map((M) => {
            if (M.id !== C.id) return M;
            const I = Math.abs(M.w) < 4 && Math.abs(M.h) < 4 ? {
              ...M,
              w: M.type === "arrow" ? 200 : M.type === "frame" ? 480 : 180,
              h: M.type === "arrow" ? 0 : M.type === "frame" ? 320 : 120
            } : M;
            if (I.type === "arrow") return I;
            const Y = qt(I);
            return { ...I, x: Y.minX, y: Y.minY, w: Y.maxX - Y.minX, h: Y.maxY - Y.minY };
          })), i(), h(/* @__PURE__ */ new Set([C.id])), f("select"), d({ kind: "none" });
          return;
        }
        if ((C.kind === "move" || C.kind === "resize" || C.kind === "rotate" || C.kind === "orthogonal-segment" || C.kind === "arrow-endpoint") && i(), C.kind === "move" && C.editOnReleaseId && z.type === "pointerup") {
          const S = r(z.clientX, z.clientY);
          Math.hypot(S.x - C.startX, S.y - C.startY) * n.current.z <= si && a(C.editOnReleaseId);
        }
        d({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", T), window.addEventListener("pointercancel", T), () => {
      window.removeEventListener("pointerup", T), window.removeEventListener("pointercancel", T);
    };
  }, [
    y,
    d,
    n,
    N,
    v,
    w,
    i,
    e,
    b,
    f,
    P,
    p,
    t,
    x,
    h,
    m,
    a,
    u,
    s,
    c,
    o,
    r,
    l
  ]);
}
function di({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: r,
  shapesRef: o,
  setCamera: c,
  setShapes: a,
  setEraserPos: s,
  setGuides: u,
  applyInteraction: m,
  selectNow: d,
  expandToGroups: h,
  toPage: i,
  pendingDrawPointsRef: l,
  drawRafRef: f,
  liveStrokeCanvasRef: v,
  activeDrawRef: P,
  pendingDrawsRef: w
}) {
  Pt(() => () => {
    f.current !== null && cancelAnimationFrame(f.current);
  }, [f]), Pt(() => {
    const b = (p, x) => {
      const N = P.current;
      if (!N || N.id !== x || !N.points) return;
      const g = i(p.clientX, p.clientY);
      if (p.shiftKey) {
        f.current !== null && (cancelAnimationFrame(f.current), f.current = null), l.current = [];
        const T = N.points[0];
        T && (N.points = [T, [g.x, g.y]]), xe(v.current, w.current, N, r.current, window.devicePixelRatio || 1);
        return;
      }
      const $ = typeof p.getCoalescedEvents == "function" ? p.getCoalescedEvents() : [];
      for (const T of $) {
        const z = i(T.clientX, T.clientY);
        l.current.push([z.x, z.y]);
      }
      l.current.push([g.x, g.y]), f.current === null && (f.current = requestAnimationFrame(() => {
        f.current = null;
        const T = l.current;
        if (T.length === 0) return;
        l.current = [];
        const z = P.current;
        !z || z.id !== x || !z.points || (Ke(z.points, T, r.current.z), xe(v.current, w.current, z, r.current, window.devicePixelRatio || 1));
      }));
    }, y = (p) => {
      var $, T;
      e.current.has(p.pointerId) && e.current.set(p.pointerId, { x: p.clientX, y: p.clientY });
      const x = n.current;
      if (x.kind === "none") return;
      const N = r.current;
      if (x.kind === "pinch") {
        if (e.current.size < 2) return;
        const [z, C] = [...e.current.values()], F = Math.hypot(C.x - z.x, C.y - z.y) || 1, A = (z.x + C.x) / 2, S = (z.y + C.y) / 2, M = ($ = t.current) == null ? void 0 : $.getBoundingClientRect();
        if (!M) return;
        const I = Math.min(ai, Math.max(ii, x.startZoom * (F / x.startDist))), Y = x.camX + (x.startMidX - M.left) / x.startZoom, W = x.camY + (x.startMidY - M.top) / x.startZoom;
        c({ x: Y - (A - M.left) / I, y: W - (S - M.top) / I, z: I });
        return;
      }
      if (x.kind === "pan") {
        c({
          x: x.camX - (p.clientX - x.startX) / N.z,
          y: x.camY - (p.clientY - x.startY) / N.z,
          z: N.z
        });
        return;
      }
      const g = i(p.clientX, p.clientY);
      if (x.kind === "erasing") {
        a((z) => Qn(z, g.x, g.y, ci / N.z, N.z)), s({ x: g.x, y: g.y });
        return;
      }
      if (x.kind === "connect") {
        const z = o.current, C = new Map(z.map((A) => [A.id, A])), F = [...z].reverse().find((A) => A.id !== x.fromId && Cn.includes(A.type) && Xe(A, g.x, g.y, N.z, C, z));
        m({ ...x, toX: g.x, toY: g.y, hoverId: (F == null ? void 0 : F.id) ?? null });
        return;
      }
      if (x.kind === "bend") {
        const z = o.current, C = z.find((D) => D.id === x.id);
        if (!C) return;
        const F = Ft(C, new Map(z.map((D) => [D.id, D])), z), A = F.end.x - F.start.x, S = F.end.y - F.start.y, M = Math.hypot(A, S) || 1, I = (F.start.x + F.end.x) / 2, Y = (F.start.y + F.end.y) / 2, W = (g.x - I) * (-S / M) + (g.y - Y) * (A / M);
        a((D) => D.map((L) => L.id === x.id ? { ...L, bend: W } : L));
        return;
      }
      if (x.kind === "orthogonal-segment") {
        const z = o.current, C = z.find((W) => W.id === x.id);
        if (!C) return;
        const F = Ft(C, new Map(z.map((W) => [W.id, W])), z), A = F.routing === "orthogonal" ? F.pathPoints : void 0;
        if (!A || A.length < 2) return;
        const S = A[x.segmentIndex], M = A[x.segmentIndex + 1];
        if (!S || !M) return;
        const I = S.x === M.x ? g.x : g.y, Y = Br(A, x.segmentIndex, I);
        a((W) => W.map((D) => D.id === x.id ? { ...D, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: Y.slice(1, -1).map((L) => ({ x: L.x, y: L.y })) } : D));
        return;
      }
      if (x.kind === "arrow-endpoint") {
        const z = o.current, C = z.find((Y) => Y.id === x.id);
        if (!C) return;
        const F = new Map(z.map((Y) => [Y.id, Y])), A = Ft(C, F, z), S = x.endpoint === "start" ? A.end : A.start, M = [...z].reverse().find((Y) => Y.id !== C.id && Cn.includes(Y.type) && Xe(Y, g.x, g.y, N.z, F, z)), I = M ? ee(M, S.x, S.y) : { x: g.x, y: g.y };
        m({ ...x, hoverId: (M == null ? void 0 : M.id) ?? null }), a((Y) => Y.map((W) => {
          if (W.id !== C.id) return W;
          const D = x.endpoint === "start" ? I : S, L = x.endpoint === "end" ? I : S;
          return {
            ...W,
            x: D.x,
            y: D.y,
            w: L.x - D.x,
            h: L.y - D.y,
            fromId: x.endpoint === "start" ? M == null ? void 0 : M.id : W.fromId,
            toId: x.endpoint === "end" ? M == null ? void 0 : M.id : W.toId
          };
        }));
        return;
      }
      if (x.kind === "marquee") {
        m({ ...x, curX: g.x, curY: g.y });
        const z = Math.min(x.startX, g.x), C = Math.max(x.startX, g.x), F = Math.min(x.startY, g.y), A = Math.max(x.startY, g.y), S = Math.min(x.screenStartX, p.clientX), M = Math.max(x.screenStartX, p.clientX), I = Math.min(x.screenStartY, p.clientY), Y = Math.max(x.screenStartY, p.clientY), W = /* @__PURE__ */ new Map();
        (T = t.current) == null || T.querySelectorAll("[data-canvas-shape-id]").forEach((L) => {
          const O = L.dataset.canvasShapeId;
          O && W.set(O, L.getBoundingClientRect());
        });
        const D = o.current.filter((L) => {
          const O = W.get(L.id);
          if (O)
            return O.right >= S && O.left <= M && O.bottom >= I && O.top <= Y;
          const V = ft(L);
          return V.maxX >= z && V.minX <= C && V.maxY >= F && V.minY <= A;
        }).map((L) => L.id);
        d(h(new Set(D)));
        return;
      }
      if (x.kind === "move") {
        let z = g.x - x.startX, C = g.y - x.startY;
        const F = x.origin, A = (() => {
          let I = 1 / 0, Y = 1 / 0, W = -1 / 0, D = -1 / 0;
          return F.forEach((L) => {
            const O = ft({ ...L, x: L.x + z, y: L.y + C });
            I = Math.min(I, O.minX), Y = Math.min(Y, O.minY), W = Math.max(W, O.maxX), D = Math.max(D, O.maxY);
          }), { minX: I, minY: Y, maxX: W, maxY: D };
        })(), S = o.current.filter((I) => !F.has(I.id)), M = ho(A, S, N.z);
        z += M.dx, C += M.dy, u(M.guides), a((I) => I.map((Y) => {
          var D;
          const W = F.get(Y.id);
          return W ? {
            ...Y,
            x: W.x + z,
            y: W.y + C,
            points: (D = W.points) == null ? void 0 : D.map(([L, O]) => [L + z, O + C]),
            ...W.type === "arrow" && W.orthogonalWaypoints ? { orthogonalWaypoints: W.orthogonalWaypoints.map((L) => ({ x: L.x + z, y: L.y + C })) } : {}
          } : Y;
        }));
        return;
      }
      if (x.kind === "drawing") {
        if (x.pointerId !== p.pointerId) return;
        b(p, x.id);
        return;
      }
      if (x.kind === "creating") {
        a((z) => z.map((C) => C.id === x.id ? { ...C, w: g.x - x.startX, h: g.y - x.startY } : C));
        return;
      }
      if (x.kind === "rotate") {
        const z = o.current.find((S) => S.id === x.id);
        if (!z) return;
        const C = It(z), F = Math.atan2(g.y - C.y, g.x - C.x);
        let A = x.startRotation + (F - x.startAngle);
        p.shiftKey && (A = Math.round(A / (Math.PI / 12)) * (Math.PI / 12)), a((S) => S.map((M) => M.id === x.id ? { ...M, rotation: A } : M));
        return;
      }
      if (x.kind === "resize") {
        const { start: z, handle: C } = x, F = qn(z, g.x, g.y);
        a((A) => A.map((S) => {
          if (S.id !== z.id) return S;
          let { x: M, y: I, w: Y, h: W } = z;
          if (C.includes("e") && (Y = Math.max(20, F.x - z.x)), C.includes("s") && (W = Math.max(20, F.y - z.y)), C.includes("w")) {
            const D = z.x + z.w;
            M = Math.min(F.x, D - 20), Y = D - M;
          }
          if (C.includes("n")) {
            const D = z.y + z.h;
            I = Math.min(F.y, D - 20), W = D - I;
          }
          return { ...S, x: M, y: I, w: Y, h: W, manualSize: S.type === "text" ? !0 : S.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", y), () => window.removeEventListener("pointermove", y);
  }, [
    P,
    m,
    r,
    t,
    f,
    h,
    n,
    v,
    l,
    w,
    e,
    d,
    o,
    i
  ]);
}
function ui(t) {
  const e = J([]), n = J(null), r = { ...t, pendingDrawPointsRef: e, drawRafRef: n };
  di(r), li(r);
}
function hi({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: r,
  editingIdRef: o,
  cameraRef: c,
  shapesRef: a,
  toolRef: s,
  activeColorRef: u,
  drawColorRef: m,
  drawStrokeWidth: d,
  camera: h,
  shapes: i,
  selected: l,
  isSpaceDown: f,
  textualTypes: v,
  setCamera: P,
  setShapes: w,
  setEditingId: b,
  setEraserPos: y,
  setGuides: p,
  setAnnouncement: x,
  applyInteraction: N,
  selectNow: g,
  beginHistory: $,
  endHistory: T,
  commit: z,
  onToolChange: C,
  expandToGroups: F,
  toPage: A,
  createId: S,
  liveStrokeCanvasRef: M,
  activeDrawRef: I,
  pendingDrawsRef: Y,
  queuedDrawIdsRef: W,
  commitDrawBatch: D
}) {
  const L = oi({
    containerRef: t,
    editorRef: e,
    pointers: n,
    interactionRef: r,
    editingIdRef: o,
    cameraRef: c,
    shapesRef: a,
    toolRef: s,
    activeColorRef: u,
    drawColorRef: m,
    drawStrokeWidth: d,
    camera: h,
    shapes: i,
    selected: l,
    isSpaceDown: f,
    textualTypes: v,
    setShapes: w,
    setEditingId: b,
    applyInteraction: N,
    selectNow: g,
    beginHistory: $,
    commit: z,
    onToolChange: C,
    expandToGroups: F,
    toPage: A,
    createId: S,
    liveStrokeCanvasRef: M,
    activeDrawRef: I,
    pendingDrawsRef: Y
  });
  return ui({
    containerRef: t,
    pointers: n,
    interactionRef: r,
    cameraRef: c,
    shapesRef: a,
    setCamera: P,
    setShapes: w,
    setEditingId: b,
    setEraserPos: y,
    setGuides: p,
    setAnnouncement: x,
    applyInteraction: N,
    selectNow: g,
    endHistory: T,
    commit: z,
    onToolChange: C,
    expandToGroups: F,
    toPage: A,
    createId: S,
    liveStrokeCanvasRef: M,
    activeDrawRef: I,
    pendingDrawsRef: Y,
    queuedDrawIdsRef: W,
    commitDrawBatch: D
  }), L;
}
function xi(t) {
  Qo(t);
  const e = Tt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return ti({ ...t, toolRef: e }), hi(t);
}
function fi({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: r,
  zoom: o
}) {
  const c = n || r.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", a = t ? U.gridDark : U.gridLight, s = 40 * o;
  return { cursor: c, gridColor: a, gridSize: s, strokeColorOf: (m) => m.strokeColor ? _n(m) : m.color ? at[m.color].border : t ? "var(--canvas-slate-200)" : U.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = Dr, document.head.appendChild(t);
}
const Sn = 0.1, Xn = 4, Yn = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function or(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Nn(t, e, n) {
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
        return or(r);
    }
  });
}
function pi(t, e, n) {
  return t.map((r) => e.has(r.id) && r.type === "draw" ? { ...r, ...n } : r);
}
function Pn(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const wi = mr(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: r,
  activeColor: o,
  defaultActiveColor: c,
  onActiveColorChange: a,
  drawStrokeWidth: s = 4,
  onToolChange: u,
  onDirty: m,
  onZoomChange: d,
  onSelectionChange: h,
  shapes: i,
  onShapesChange: l,
  peerCursors: f,
  onLocalCursor: v,
  renderDiagram: P
}, w) {
  var en, nn;
  const {
    containerRef: b,
    editorRef: y,
    setLocalShapes: p,
    controlled: x,
    shapes: N,
    setShapes: g,
    camera: $,
    setCamera: T,
    cameraRef: z,
    selected: C,
    selectedRef: F,
    editingId: A,
    setEditingId: S,
    editingIdRef: M,
    interaction: I,
    interactionRef: Y,
    applyInteraction: W,
    isSpaceDown: D,
    setIsSpaceDown: L,
    guides: O,
    setGuides: V,
    announcement: E,
    setAnnouncement: _,
    showInspectorPalette: q,
    setShowInspectorPalette: nt,
    eraserPos: tt,
    setEraserPos: lt,
    setActiveColor: R,
    activeColorRef: kt,
    drawColor: Lt,
    setDrawColor: pt,
    drawColorRef: Ot,
    installedFontFamilies: Wt,
    pointers: dt,
    past: Q,
    future: et,
    selectNow: ut,
    commit: bt,
    deleteSelection: vt,
    beginHistory: mt,
    endHistory: rt,
    toPage: gt,
    viewportCentre: yt,
    expandToGroups: Xt,
    toolRef: ne,
    shapesRef: Yt,
    liveStrokeCanvasRef: k,
    activeDrawRef: B,
    pendingDrawsRef: Z,
    queuedDrawIdsRef: ct,
    commitDrawBatch: wt
  } = Bo({ boardIdentity: e, tool: r, activeColor: o, defaultActiveColor: c, onActiveColorChange: a, controlledShapes: i, onShapesChange: l, onDirty: m });
  Jt(() => {
    const st = k.current, Dt = b.current;
    if (!st || !Dt) return;
    const Nt = () => {
      const me = ni(st, Dt.clientWidth, Dt.clientHeight, window.devicePixelRatio || 1), ge = new Set(N.map((re) => re.id));
      Z.current = Z.current.filter((re) => !ge.has(re.id));
      for (const re of ge) ct.current.delete(re);
      xe(st, Z.current, B.current, z.current, me);
    };
    if (Nt(), typeof ResizeObserver > "u")
      return window.addEventListener("resize", Nt), () => window.removeEventListener("resize", Nt);
    const jt = new ResizeObserver(Nt);
    return jt.observe(Dt), window.addEventListener("resize", Nt), () => {
      jt.disconnect(), window.removeEventListener("resize", Nt);
    };
  }, [B, $, z, b, k, Z, ct, N]);
  const Ht = Ko({
    containerRef: b,
    shapesRef: Yt,
    selectedRef: F,
    commit: bt,
    deleteSelection: vt,
    selectNow: ut,
    setAnnouncement: _,
    createId: Pn
  }), {
    inspectorSelection: ce,
    inspectorShape: pe,
    onContainerPointerMove: Pe,
    onContainerPointerLeave: Ie
  } = jo({
    containerRef: b,
    camera: $,
    setCamera: T,
    minZoom: Sn,
    maxZoom: Xn,
    shapes: N,
    selected: C,
    editingId: A,
    textualTypes: Yn,
    onZoomChange: d,
    onSelectionChange: h,
    onLocalCursor: v,
    toPage: gt
  }), ve = Ce.useCallback((st) => {
    const Dt = new Set(F.current);
    Dt.size !== 0 && bt((Nt) => Nn(Nt, Dt, st));
  }, [bt, F]), {
    onPointerDown: Le,
    onResizeHandleDown: H,
    onRotateHandleDown: G,
    onConnectHandleDown: j,
    onBendHandleDown: ot,
    onOrthogonalSegmentHandleDown: _t,
    onArrowEndpointDown: Bt
  } = xi({
    ref: w,
    containerRef: b,
    editorRef: y,
    pointers: dt,
    interactionRef: Y,
    cameraRef: z,
    shapesRef: Yt,
    toolRef: ne,
    activeColorRef: kt,
    drawColorRef: Ot,
    setDrawColor: pt,
    setActiveColor: R,
    drawStrokeWidth: s,
    setSelectedStrokeWidth: ve,
    camera: $,
    shapes: N,
    selected: C,
    isSpaceDown: D,
    setCamera: T,
    setShapes: g,
    setEditingId: S,
    setEraserPos: lt,
    setGuides: V,
    setAnnouncement: _,
    applyInteraction: W,
    selectNow: ut,
    selectionActions: Ht,
    past: Q,
    future: et,
    beginHistory: mt,
    endHistory: rt,
    commit: bt,
    deleteSelection: vt,
    onDirty: m,
    onToolChange: u,
    controlled: x,
    isDarkMode: n,
    minZoom: Sn,
    maxZoom: Xn,
    textualTypes: Yn,
    selectedRef: F,
    editingIdRef: M,
    setIsSpaceDown: L,
    viewportCentre: yt,
    setLocalShapes: p,
    expandToGroups: Xt,
    toPage: gt,
    createId: Pn,
    liveStrokeCanvasRef: k,
    activeDrawRef: B,
    pendingDrawsRef: Z,
    queuedDrawIdsRef: ct,
    commitDrawBatch: wt
  }), { cursor: Ee, gridColor: ir, gridSize: Ze, strokeColorOf: ar } = fi({
    isDarkMode: n,
    tool: r === "highlighter" ? "draw" : r,
    isSpaceDown: D,
    interaction: I,
    zoom: $.z
  }), Qe = (st) => {
    const Dt = F.current, Nt = M.current, jt = new Set(Dt);
    if (Nt && jt.add(Nt), jt.size === 0) return;
    const me = "strokeWidth" in st, ge = Object.keys(st).every(($t) => $t === "color" || $t === "fillColor" || $t === "strokeColor" || $t === "strokeWidth");
    if (ce.length > 0 && ce.every(($t) => $t.type === "draw") && ge) {
      const $t = "color" in st ? st.color : void 0, Ct = "strokeWidth" in st ? st.strokeWidth : void 0, rn = "strokeColor" in st ? st.strokeColor : void 0;
      bt((pr) => pi(pr, jt, {
        ...$t !== void 0 ? { color: $t } : {},
        ...Ct !== void 0 ? { strokeWidth: Ct } : {},
        ...rn !== void 0 ? { strokeColor: rn } : {}
      }));
      return;
    }
    if (me) {
      const $t = st.strokeWidth;
      if ($t !== void 0 && Object.keys(st).length === 1) {
        bt((Ct) => Nn(Ct, jt, $t));
        return;
      }
    }
    bt(($t) => $t.map((Ct) => {
      if (!jt.has(Ct.id)) return Ct;
      if (!me) return { ...Ct, ...st };
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
          return or(Ct);
      }
    }));
  }, {
    commitEditorHtml: cr,
    applyFormat: sr,
    applyList: lr,
    onEditorKeyDown: dr,
    applyCustomFontFamily: ur
  } = _o({
    editorRef: y,
    editingId: A,
    setShapes: g,
    setAnnouncement: _,
    onDirty: m,
    patchSelected: Qe
  }), { renderEditor: hr, renderShapeBody: xr } = Oo({
    camera: $,
    editingId: A,
    isDarkMode: n,
    editorRef: y,
    commitEditorHtml: cr,
    onEditorKeyDown: dr,
    setShapes: g,
    onDirty: m,
    renderDiagram: P
  }), fr = I.kind === "marquee" ? I : null, { shapeById: Je, visiblePaintOrder: tn } = Ho({
    containerRef: b,
    shapesRef: Yt,
    shapes: N,
    camera: $,
    selected: C,
    editingId: A,
    boardIdentity: e
  });
  return /* @__PURE__ */ K(
    "div",
    {
      ref: b,
      onPointerDown: Le,
      onPointerMove: Pe,
      onPointerLeave: Ie,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": r,
      "data-canvas-camera-x": $.x,
      "data-canvas-camera-y": $.y,
      "data-canvas-camera-z": $.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: Ee,
        background: n ? U.canvasDark : U.canvasLight,
        backgroundImage: `radial-gradient(${ir} 1px, transparent 1px)`,
        backgroundSize: `${Ze}px ${Ze}px`,
        backgroundPosition: `${-$.x * $.z}px ${-$.y * $.z}px`
      },
      children: [
        /* @__PURE__ */ X("style", { children: '.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas .canvas-rich-text ul>li::before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style="dash"]>li::before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li::before{content:counter(canvas-list-item) ". "}' }),
        /* @__PURE__ */ X(
          "div",
          {
            "aria-live": "polite",
            role: "status",
            className: "absolute w-px h-px overflow-hidden whitespace-nowrap",
            style: { clip: "rect(0 0 0 0)", clipPath: "inset(50%)" },
            children: E
          }
        ),
        /* @__PURE__ */ X(
          fo,
          {
            visiblePaintOrder: tn,
            selected: C,
            shapeById: Je,
            allShapes: Yt.current,
            camera: $,
            interaction: I,
            eraserPos: tt,
            guides: O,
            marquee: fr,
            strokeColorOf: ar
          }
        ),
        /* @__PURE__ */ X("canvas", { ref: k, "aria-hidden": "true", "data-canvas-live-strokes": "true", className: "absolute inset-0 w-full h-full pointer-events-none" }),
        /* @__PURE__ */ X(
          Yo,
          {
            visiblePaintOrder: tn,
            selected: C,
            editingId: A,
            camera: $,
            shapeById: Je,
            allShapes: Yt.current,
            peerCursors: f,
            isDarkMode: n,
            renderEditor: hr,
            renderShapeBody: xr,
            setEditingId: S,
            onBendHandleDown: ot,
            onOrthogonalSegmentHandleDown: _t,
            onResizeHandleDown: H,
            onRotateHandleDown: G,
            onConnectHandleDown: j,
            onArrowEndpointDown: Bt
          }
        ),
        pe && /* @__PURE__ */ X(
          Ao,
          {
            shape: pe,
            selection: ce,
            selectionActions: Ht,
            shapes: N,
            camera: $,
            canvasSize: { width: ((en = b.current) == null ? void 0 : en.clientWidth) ?? 380, height: ((nn = b.current) == null ? void 0 : nn.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!A,
            showPalette: q,
            installedFontFamilies: Wt,
            setShowPalette: nt,
            setActiveColor: R,
            patchSelected: Qe,
            applyFormat: sr,
            applyList: lr,
            applyCustomFontFamily: ur
          }
        ),
        /* @__PURE__ */ X(
          Do,
          {
            tool: r,
            activeColor: Lt,
            drawStrokeWidth: s,
            isDarkMode: n,
            onSelectColor: pt,
            onSelectStrokeWidth: ve
          }
        )
      ]
    }
  );
});
export {
  at as CANVAS_COLORS,
  In as CANVAS_COLOR_KEYS,
  Et as CANVAS_FONTS,
  wi as InfiniteCanvas,
  $r as SHAPE_TOOLS,
  pi as applySelectedDrawStyle,
  Nn as applySelectedStrokeWidth,
  bi as diagramTemplate,
  No as getInspectorGroups,
  qe as isDiagramShape
};
