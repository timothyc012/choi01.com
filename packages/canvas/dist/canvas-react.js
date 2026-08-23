import { jsx as N, jsxs as B, Fragment as At } from "react/jsx-runtime";
import Gt, { useState as nt, useRef as Z, useEffect as Xt, useLayoutEffect as Ht, useMemo as Pt, useCallback as dt, useImperativeHandle as kn, forwardRef as $n } from "react";
import { p as Mn, i as pe, k as me, a as ot, v as zn, c as It, s as Cn, b as Xn, d as Bt, h as Sn, C as Yn, S as Nn } from "./document-CLNFlHux.js";
import { Minus as In, Plus as Pn, ChevronDown as En, AlignLeft as Fn, AlignCenter as Ln, AlignRight as Tn, List as An, ListOrdered as Dn, Bold as Wn, Italic as On, Underline as _n, Group as Hn, Ungroup as Bn, Copy as jn, Trash2 as Kn } from "lucide-react";
const Un = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', j = Object.freeze({
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
}), _e = 12;
function he(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function te(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function ee(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function ne(t, e, n, r) {
  const s = ee(t, e, n), i = ee(t, e, r), d = ee(n, r, t), p = ee(n, r, e);
  return Math.abs(s) < 1e-6 && te(t, n, e) || Math.abs(i) < 1e-6 && te(t, r, e) || Math.abs(d) < 1e-6 && te(n, t, r) || Math.abs(p) < 1e-6 && te(n, e, r) ? !0 : s > 0 != i > 0 && d > 0 != p > 0;
}
function Vn(t, e, n) {
  const r = Math.min(t.x, e.x), a = Math.max(t.x, e.x), s = Math.min(t.y, e.y), i = Math.max(t.y, e.y);
  if (a < n.minX || r > n.maxX || i < n.minY || s > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const d = { x: n.minX, y: n.minY }, p = { x: n.maxX, y: n.minY }, $ = { x: n.maxX, y: n.maxY }, h = { x: n.minX, y: n.maxY };
  return ne(t, e, d, p) || ne(t, e, p, $) || ne(t, e, $, h) || ne(t, e, h, d);
}
function Gn(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const r of e)
      if (Vn(t[n - 1], t[n], r)) return !0;
  return !1;
}
function fe(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function ge(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = fe(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let r = 0;
  for (let s = 1; s < t.length; s++) {
    const i = Math.hypot(t[s].x - t[s - 1].x, t[s].y - t[s - 1].y);
    if (r + i >= n) {
      const d = (n - r) / i;
      return { x: t[s - 1].x + (t[s].x - t[s - 1].x) * d, y: t[s - 1].y + (t[s].y - t[s - 1].y) * d };
    }
    r += i;
  }
  const a = t[t.length - 1];
  return { x: a.x, y: a.y };
}
function qt(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function Se(t, e, n, r) {
  const a = /* @__PURE__ */ new Set([t, e]), s = Math.min(t, e), i = Math.max(t, e), d = _e * 1.2;
  for (const p of n) {
    const $ = (r === "x" ? p.minX : p.minY) - d, h = (r === "x" ? p.maxX : p.maxY) + d, x = (o) => o >= s - d * 4 && o <= i + d * 4;
    x($) && a.add($), x(h) && a.add(h);
  }
  return [...a].sort((p, $) => Math.abs(p - t) - Math.abs($ - t));
}
function He(t) {
  const e = [];
  for (const n of t) {
    const r = e[e.length - 1];
    (!r || r.x !== n.x || r.y !== n.y) && e.push(n);
  }
  return e;
}
function Be(t) {
  const e = [];
  for (const n of t) {
    const r = e[e.length - 1];
    if (r && r.x === n.x && r.y === n.y) continue;
    const a = e[e.length - 2];
    if (a && r && (a.x === r.x && r.x === n.x || a.y === r.y && r.y === n.y)) {
      e[e.length - 1] = n;
      continue;
    }
    e.push(n);
  }
  return e;
}
function qn(t, e, n) {
  const r = [t];
  for (const a of [...n, e]) {
    const s = r[r.length - 1];
    if (!s) {
      r.push(a);
      continue;
    }
    if (s.x === a.x || s.y === a.y) {
      r.push(a);
      continue;
    }
    r.push({ x: a.x, y: s.y }, a);
  }
  return Be(r);
}
function Rn(t, e, n) {
  const r = t[e], a = t[e + 1];
  if (!r || !a || !Number.isFinite(n) || r.x !== a.x && r.y !== a.y) return [...t];
  const s = r.x === a.x ? [r, { x: n, y: r.y }, { x: n, y: a.y }, a] : [r, { x: r.x, y: n }, { x: a.x, y: n }, a];
  return Be([
    ...t.slice(0, e),
    ...s,
    ...t.slice(e + 2)
  ]);
}
function ue(t, e) {
  const n = [], r = [];
  for (const s of t) {
    const i = He(s);
    i.length < 2 || (Gn(i, e) ? r.push(i) : n.push(i));
  }
  const a = n.length > 0 ? n : r;
  return a.length === 0 ? [] : a.reduce((s, i) => fe(i) < fe(s) ? i : s);
}
function Ye(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function Ot(t, e, n, r) {
  const a = Math.min(t, e), s = Math.max(t, e), i = Math.max(48, Math.abs(e - t) * 0.35, _e * 4);
  if (r === "x") {
    if (n === "e") return s + i;
    if (n === "w") return a - i;
  } else {
    if (n === "s") return s + i;
    if (n === "n") return a - i;
  }
  return t <= e ? a - i : s + i;
}
function Qn(t, e, n, r, a) {
  const s = (t.x + e.x) / 2, i = (t.y + e.y) / 2;
  if (n === "u") {
    if (r) {
      const p = Ot(t.x, e.x, t.side, "x");
      return [t, { x: p, y: t.y }, { x: p, y: e.y }, e];
    }
    const d = Ot(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: d }, { x: e.x, y: d }, e];
  }
  if (n === "zigzag") {
    if (r) {
      const $ = Ot(t.x, e.x, t.side, "x"), h = Ot(t.y, e.y, t.side, "y");
      return a ? [t, { x: $, y: t.y }, { x: $, y: h }, { x: s, y: h }, { x: s, y: e.y }, e] : [t, { x: $, y: t.y }, { x: $, y: h }, { x: e.x, y: h }, e];
    }
    const d = Ot(t.y, e.y, t.side, "y"), p = Ot(t.x, e.x, t.side, "x");
    return a ? [t, { x: t.x, y: d }, { x: p, y: d }, { x: p, y: e.y }, e] : [t, { x: t.x, y: d }, { x: p, y: d }, { x: p, y: i }, { x: e.x, y: i }, e];
  }
  return [];
}
function je(t, e, n = [], r = "elbow", a = []) {
  if (a.length > 0) return qn(t, e, a);
  const s = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), i = e.side ?? (s === "e" || s === "w" ? "w" : "n"), d = s === "e" || s === "w", p = i === "e" || i === "w", $ = Se(t.x, e.x, n, "x"), h = Se(t.y, e.y, n, "y"), x = [];
  if (d && p) {
    for (const y of $) x.push([t, { x: y, y: t.y }, { x: y, y: e.y }, e]);
    for (const y of h) x.push([t, { x: t.x, y }, { x: e.x, y }, e]);
  } else if (!d && !p) {
    for (const y of h) x.push([t, { x: t.x, y }, { x: e.x, y }, e]);
    for (const y of $) x.push([t, { x: y, y: t.y }, { x: y, y: e.y }, e]);
  } else if (d) {
    x.push([t, { x: e.x, y: t.y }, e]);
    for (const y of h)
      x.push([t, { x: t.x, y }, { x: e.x, y }, e]), x.push([t, { x: t.x, y }, e]);
    for (const y of $) x.push([t, { x: y, y: t.y }, { x: y, y: e.y }, e]);
  } else {
    x.push([t, { x: t.x, y: e.y }, e]);
    for (const y of h)
      x.push([t, { x: t.x, y }, e]), x.push([t, { x: t.x, y }, { x: e.x, y }, e]);
    for (const y of $) x.push([t, { x: y, y: t.y }, { x: y, y: e.y }, e]);
  }
  const o = ue(x, n);
  if (r === "elbow") return o;
  if (r === "reverse") {
    const y = Ye(o), S = ue(x.filter((v) => Ye(v) !== y), n);
    return S.length > 1 ? S : o;
  }
  const c = Qn(t, e, r, d, p), g = ue([c], n);
  return g.length > 1 ? g : o;
}
function Ke(t) {
  return t.length < 2 ? 0 : qt(t[t.length - 2], t[t.length - 1]);
}
function ce(t) {
  if (t.fillColor)
    try {
      return me(t.fillColor);
    } catch {
      return t.color ? ot[t.color].bg : ot.blue.bg;
    }
  return t.color ? ot[t.color].bg : ot.blue.bg;
}
function Ue(t) {
  if (t.strokeColor)
    try {
      return me(t.strokeColor);
    } catch {
      return t.color ? ot[t.color].border : "#2563eb";
    }
  return t.color ? ot[t.color].border : "#2563eb";
}
function Ve(t) {
  return Ue(t);
}
function Dt(t) {
  if (t.textColor)
    try {
      return me(t.textColor);
    } catch {
      return t.color ? ot[t.color].text : "#0f172a";
    }
  return t.color ? ot[t.color].text : "#0f172a";
}
function Ge(t, e, n) {
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
      const r = e / 2, a = n / 2, s = Math.min(e, n) / 2, i = s * 0.4, d = [];
      for (let p = 0; p < 10; p++) {
        const $ = Math.PI / 5 * p - Math.PI / 2, h = p % 2 === 0 ? s : i;
        d.push(`${r + h * Math.cos($)},${a + h * Math.sin($)}`);
      }
      return d.join(" ");
    }
    default:
      return "";
  }
}
function qe(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let r = 1; r < t.length - 1; r++) {
    const [a, s] = t[r], [i, d] = t[r + 1];
    e += ` Q ${a} ${s} ${(a + i) / 2} ${(s + d) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function Ft(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function Re(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], r = (a, s) => {
    a.childNodes.forEach((i) => {
      if (i.nodeType === Node.TEXT_NODE) {
        const h = i.textContent ?? "";
        h && n[n.length - 1].push({ text: h, ...s });
        return;
      }
      if (i.nodeType !== Node.ELEMENT_NODE) return;
      const d = i;
      if (d.tagName === "BR") {
        n.push([]);
        return;
      }
      const p = { bold: s.bold || d.tagName === "B" || d.tagName === "STRONG", italic: s.italic || d.tagName === "I" || d.tagName === "EM", underline: s.underline || d.tagName === "U" }, $ = d.tagName === "DIV" || d.tagName === "P" || d.tagName === "LI";
      $ && n[n.length - 1].length > 0 && n.push([]), r(d, p), $ && n.push([]);
    });
  };
  return r(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((a) => a.length > 0);
}
const Ne = /* @__PURE__ */ new WeakMap();
function le(t) {
  const e = Ne.get(t);
  if (e !== void 0) return e;
  const n = t.html ? pe(t.html) : t.text ? Ft(t.text).replace(/\n/g, "<br>") : "";
  return Ne.set(t, n), n;
}
function ve(t) {
  if (t)
    try {
      return zn(t);
    } catch {
      return;
    }
}
function Qe(t) {
  try {
    return Mn(t);
  } catch {
    return null;
  }
}
function Qt(t) {
  return t.html ? Re(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const oe = 12;
function Lt(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function St(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function at(t) {
  const e = t.rotation ?? 0, n = Lt(t);
  if (!e) return n;
  const r = St(t), a = Math.cos(e), s = Math.sin(e), i = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([$, h]) => {
    const x = $ - r.x, o = h - r.y;
    return [r.x + x * a - o * s, r.y + x * s + o * a];
  }), d = i.map(($) => $[0]), p = i.map(($) => $[1]);
  return { minX: Math.min(...d), minY: Math.min(...p), maxX: Math.max(...d), maxY: Math.max(...p) };
}
function Ze(t, e, n) {
  const r = t.rotation ?? 0;
  if (!r) return { x: e, y: n };
  const a = St(t), s = Math.cos(-r), i = Math.sin(-r), d = e - a.x, p = n - a.y;
  return { x: a.x + d * s - p * i, y: a.y + d * i + p * s };
}
function re(t, e, n, r, a, s) {
  const i = a - n, d = s - r, p = i * i + d * d, $ = p === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * i + (e - r) * d) / p));
  return Math.hypot(t - (n + $ * i), e - (r + $ * d));
}
function se(t, e, n, r, a, s) {
  const i = 8 / r;
  if (t.type === "arrow") {
    const $ = (t.strokeWidth ?? 2.5) / r / 2 + i, h = Et(t, a ?? /* @__PURE__ */ new Map(), s);
    if (h.routing === "orthogonal" && h.pathPoints && h.pathPoints.length > 1) {
      for (let o = 1; o < h.pathPoints.length; o++) {
        const c = h.pathPoints[o - 1], g = h.pathPoints[o];
        if (re(e, n, c.x, c.y, g.x, g.y) <= $) return !0;
      }
      return !1;
    }
    if (h.bend === 0) return re(e, n, h.start.x, h.start.y, h.end.x, h.end.y) <= $;
    let x = h.start;
    for (let o = 1; o <= 16; o++) {
      const c = Rt(o / 16, h.start, h.control, h.end);
      if (re(e, n, x.x, x.y, c.x, c.y) <= $) return !0;
      x = c;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const x = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / r / 2 + i;
    if (t.points.length === 1) {
      const [o, c] = t.points[0];
      return Math.hypot(e - o, n - c) <= x;
    }
    for (let o = 1; o < t.points.length; o++) {
      const [c, g] = t.points[o - 1], [y, S] = t.points[o];
      if (re(e, n, c, g, y, S) <= x) return !0;
    }
    return !1;
  }
  const d = Ze(t, e, n), p = Lt(t);
  if (t.type === "frame") {
    const $ = d.x >= p.minX - i && d.x <= p.maxX + i && d.y >= p.minY - i && d.y <= p.maxY + i && (d.x <= p.minX + i || d.x >= p.maxX - i || d.y <= p.minY + i || d.y >= p.maxY - i), h = d.x >= p.minX - i && d.x <= p.maxX + i && d.y >= p.minY - 28 / r && d.y <= p.minY;
    return $ || h;
  }
  return d.x >= p.minX - i && d.x <= p.maxX + i && d.y >= p.minY - i && d.y <= p.maxY + i;
}
function Wt(t, e, n) {
  const r = Lt(t), a = (r.minX + r.maxX) / 2, s = (r.minY + r.maxY) / 2, i = e - a, d = n - s;
  if (i === 0 && d === 0) return { x: a, y: s, side: "e" };
  const p = (r.maxX - r.minX) / 2, $ = (r.maxY - r.minY) / 2, h = p === 0 ? 1 / 0 : Math.abs(p / i), x = $ === 0 ? 1 / 0 : Math.abs($ / d);
  return h <= x ? { x: a + i * h, y: s + d * h, side: i >= 0 ? "e" : "w" } : { x: a + i * x, y: s + d * x, side: d >= 0 ? "s" : "n" };
}
function Je(t, e, n, r) {
  const a = /* @__PURE__ */ new Set([e.id, n, r]);
  return t.filter((s) => !a.has(s.id)).map((s) => {
    const i = at(s);
    return { minX: i.minX - oe, minY: i.minY - oe, maxX: i.maxX + oe, maxY: i.maxY + oe };
  }).filter((s) => s.maxX > s.minX && s.maxY > s.minY);
}
function Et(t, e, n = []) {
  const r = t.fromId ? e.get(t.fromId) : void 0, a = t.toId ? e.get(t.toId) : void 0;
  let s = { x: t.x, y: t.y }, i = { x: t.x + t.w, y: t.y + t.h };
  if (r && a) {
    const g = St(r), y = St(a);
    s = Wt(r, y.x, y.y), i = Wt(a, g.x, g.y);
  } else r ? s = Wt(r, i.x, i.y) : a && (i = Wt(a, s.x, s.y));
  const d = (s.x + i.x) / 2, p = (s.y + i.y) / 2, $ = t.bend ?? 0;
  let h = { x: d, y: p };
  if ($ !== 0) {
    const g = i.x - s.x, y = i.y - s.y, S = Math.hypot(g, y) || 1;
    h = { x: d + -y / S * $, y: p + g / S * $ };
  }
  const x = !!(r || a), o = t.routing ?? (x ? "orthogonal" : $ !== 0 ? "curved" : "straight");
  if (o !== "orthogonal") return { start: s, end: i, control: h, bend: $, routing: o };
  const c = Je(n, t, r == null ? void 0 : r.id, a == null ? void 0 : a.id);
  return {
    start: s,
    end: i,
    control: h,
    bend: $,
    routing: o,
    pathPoints: He(je(s, i, c, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function Rt(t, e, n, r) {
  const a = 1 - t;
  return { x: a * a * e.x + 2 * a * t * n.x + t * t * r.x, y: a * a * e.y + 2 * a * t * n.y + t * t * r.y };
}
function tn(t, e, n, r, a) {
  const s = [];
  let i = 0;
  for (const d of t) {
    if (d.type !== "draw" || !d.points) {
      if (se(d, e, n, a)) continue;
      s.push(d);
      continue;
    }
    const p = [];
    let $ = [];
    for (const [x, o] of d.points)
      Math.hypot(x - e, o - n) <= r / a ? ($.length > 1 && p.push($), $ = []) : $.push([x, o]);
    if ($.length > 1 && p.push($), p.length === 0) continue;
    const h = Lt(d);
    p.forEach((x) => s.push({ ...d, id: `${d.id}-e${i++}`, points: x, x: h.minX, y: h.minY, w: h.maxX - h.minX, h: h.maxY - h.minY }));
  }
  return s;
}
function Zn(t, e, n) {
  const r = 6 / n;
  let a = null, s = null;
  const i = [], d = [t.minX, (t.minX + t.maxX) / 2, t.maxX], p = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const $ of e) {
    const h = at($), x = [h.minX, (h.minX + h.maxX) / 2, h.maxX], o = [h.minY, (h.minY + h.maxY) / 2, h.maxY];
    for (const c of d) for (const g of x) {
      const y = g - c;
      Math.abs(y) <= r && (!a || Math.abs(y) < Math.abs(a.delta)) && (a = { delta: y, at: g });
    }
    for (const c of p) for (const g of o) {
      const y = g - c;
      Math.abs(y) <= r && (!s || Math.abs(y) < Math.abs(s.delta)) && (s = { delta: y, at: g });
    }
  }
  return a && i.push({ x1: a.at, y1: t.minY - 1e3, x2: a.at, y2: t.maxY + 1e3 }), s && i.push({ x1: t.minX - 1e3, y1: s.at, x2: t.maxX + 1e3, y2: s.at }), { dx: (a == null ? void 0 : a.delta) ?? 0, dy: (s == null ? void 0 : s.delta) ?? 0, guides: i };
}
const Jn = Gt.memo(function({
  shape: e,
  cameraZoom: n,
  color: r
}) {
  if (!e.points) return null;
  const a = e.drawMode ?? "pen", s = e.strokeWidth ?? 3;
  return /* @__PURE__ */ N(
    "path",
    {
      "data-canvas-vector-shape-id": e.id,
      "data-canvas-vector-shape-type": "draw",
      "data-canvas-draw-mode": a,
      "data-canvas-stroke-width": s,
      d: qe(e.points),
      fill: "none",
      stroke: r,
      strokeWidth: s / n,
      strokeOpacity: a === "highlighter" ? 0.35 : void 0,
      fillOpacity: a === "highlighter" ? 0.35 : void 0,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  );
}), to = 14;
function eo({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: r,
  camera: a,
  interaction: s,
  eraserPos: i,
  guides: d,
  marquee: p,
  strokeColorOf: $
}) {
  return /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ B("g", { transform: `scale(${a.z}) translate(${-a.x}, ${-a.y})`, children: [
    t.map((h) => {
      if (h.type === "draw" && h.points) {
        const b = e.has(h.id);
        return /* @__PURE__ */ N(
          Jn,
          {
            shape: h,
            cameraZoom: a.z,
            color: b ? j.blue : $(h)
          },
          h.id
        );
      }
      if (h.type !== "arrow") return null;
      const x = e.has(h.id) ? j.blue : $(h), o = Et(h, n, r), c = h.strokeWidth ?? 2.5, g = c / a.z, y = Math.max(10, 8 + c * 2), S = Math.max(4, 2 + c), v = y / a.z, l = S / a.z, w = o.routing === "orthogonal" && o.pathPoints ? o.pathPoints : null, m = w && w.length > 1;
      let C, M;
      if (m)
        C = he(w), M = Ke(w);
      else if (o.routing === "curved") {
        C = `M ${o.start.x} ${o.start.y} Q ${o.control.x} ${o.control.y} ${o.end.x} ${o.end.y}`;
        const b = Rt(0.94, o.start, o.control, o.end);
        M = Math.atan2(o.end.y - b.y, o.end.x - b.x);
      } else
        C = `M ${o.start.x} ${o.start.y} L ${o.end.x} ${o.end.y}`, M = Math.atan2(o.end.y - o.start.y, o.end.x - o.start.x);
      const u = m && w.length >= 2 ? qt(w[0], w[1]) : o.routing === "orthogonal" && o.start.side ? o.start.side === "e" ? 0 : o.start.side === "w" ? Math.PI : o.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : qt(o.start, o.end), k = h.strokeStyle === "dashed" ? `${8 / a.z} ${5 / a.z}` : h.strokeStyle === "dotted" ? `${1.5 / a.z} ${4 / a.z}` : void 0, f = (b, X, Y, P) => b === "dot" ? /* @__PURE__ */ N("circle", { "data-canvas-arrow-dot-radius": S, cx: X, cy: Y, r: l, fill: x }) : b === "none" ? null : /* @__PURE__ */ N(
        "polygon",
        {
          "data-canvas-arrowhead-size": y,
          points: `${X},${Y} ${X - v * Math.cos(P - 0.4)},${Y - v * Math.sin(P - 0.4)} ${X - v * Math.cos(P + 0.4)},${Y - v * Math.sin(P + 0.4)}`,
          fill: x
        }
      );
      return /* @__PURE__ */ B("g", { "data-canvas-vector-shape-id": h.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": o.routing, "data-canvas-stroke-width": c, children: [
        /* @__PURE__ */ N("path", { d: C, fill: "none", stroke: x, strokeWidth: g, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: k }),
        f(h.arrowEnd ?? "arrow", o.end.x, o.end.y, M),
        f(h.arrowStart ?? "none", o.start.x, o.start.y, u + Math.PI)
      ] }, h.id);
    }),
    s.kind === "connect" && s.fromId !== void 0 && s.toX !== void 0 && s.toY !== void 0 && (() => {
      const h = n.get(s.fromId);
      if (!h) return null;
      const x = Wt(h, s.toX, s.toY), o = s.hoverId ? n.get(s.hoverId) : null, c = o ? Wt(o, x.x, x.y) : { x: s.toX, y: s.toY }, g = o ? je(x, c, Je(r, { id: "__preview" }, h.id, o.id)) : [x, c];
      return /* @__PURE__ */ B("g", { children: [
        /* @__PURE__ */ N("path", { d: he(g), stroke: j.blue, strokeWidth: 2 / a.z, strokeDasharray: `${5 / a.z} ${4 / a.z}` }),
        o ? /* @__PURE__ */ N("rect", { x: at(o).minX - 3 / a.z, y: at(o).minY - 3 / a.z, width: at(o).maxX - at(o).minX + 6 / a.z, height: at(o).maxY - at(o).minY + 6 / a.z, fill: "none", stroke: j.blue, strokeWidth: 2 / a.z, rx: 6 / a.z }) : /* @__PURE__ */ N("circle", { cx: c.x, cy: c.y, r: 5 / a.z, fill: j.blue })
      ] });
    })(),
    i && /* @__PURE__ */ N("circle", { cx: i.x, cy: i.y, r: to / a.z, fill: j.roseSoft, stroke: j.rose, strokeWidth: 1 / a.z }),
    d.map((h, x) => /* @__PURE__ */ N("line", { x1: h.x1, y1: h.y1, x2: h.x2, y2: h.y2, stroke: j.pink, strokeWidth: 1 / a.z, strokeDasharray: `${4 / a.z} ${4 / a.z}` }, `guide-${x}`)),
    p && /* @__PURE__ */ N("rect", { x: Math.min(p.startX, p.curX), y: Math.min(p.startY, p.curY), width: Math.abs(p.curX - p.startX), height: Math.abs(p.curY - p.startY), fill: j.marqueeFill, stroke: j.blue, strokeWidth: 1 / a.z })
  ] }) });
}
const no = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], oo = /* @__PURE__ */ new Set([
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
]), ro = [
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
function de(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function en(t) {
  return oo.has(t.trim().toLowerCase());
}
function nn(t) {
  const e = de(t);
  return e ? en(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function ao(t) {
  return de(t).split(",").map((e) => e.trim()).filter(Boolean).map(nn).filter(Boolean).join(", ");
}
function on(t) {
  return de(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Ut(t) {
  return t.split(",").map((e) => de(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !en(e));
}
const ae = Array.from(/* @__PURE__ */ new Set([
  ...ro,
  ...Ut(It.sans.stack),
  ...Ut(It.serif.stack),
  ...Ut(It.mono.stack),
  ...Ut(It.gothic.stack),
  ...Ut(It.korean.stack)
]));
function io() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return ae;
  const t = ae.filter((e) => {
    const n = nn(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : ae;
}
const co = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, so = 24, lo = 28, rn = 720;
function vt(t) {
  return t.fontSize ?? co[t.type] ?? 14;
}
function pt(t) {
  var e;
  if (!t.fontFamily) return It.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = on(Cn(t.customFontFamily ?? ""));
    } catch {
    }
    return ao(n) || It.sans.stack;
  }
  return ((e = It[t.fontFamily]) == null ? void 0 : e.stack) ?? It.sans.stack;
}
function bt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function uo(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function xo(t) {
  var e, n, r;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((r = t.html) != null && r.includes("<ol>")) return "number";
}
function ho(t, e) {
  return {
    w: Math.min(rn, Math.max(so, Math.ceil(t))),
    h: Math.max(lo, Math.ceil(e))
  };
}
function fo(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = pe(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${rn}px`,
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
    fontSize: `${vt(e)}px`,
    fontFamily: pt(e)
  }), document.body.appendChild(n);
  const r = n.getBoundingClientRect();
  return n.remove(), ho(r.width, r.height);
}
const vo = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), po = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function mo({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: r,
  shapeById: a,
  allShapes: s,
  peerCursors: i,
  isDarkMode: d,
  renderEditor: p,
  renderShapeBody: $,
  setEditingId: h,
  onBendHandleDown: x,
  onOrthogonalSegmentHandleDown: o,
  onResizeHandleDown: c,
  onRotateHandleDown: g,
  onConnectHandleDown: y,
  onArrowEndpointDown: S
}) {
  return /* @__PURE__ */ B(At, { children: [
    /* @__PURE__ */ N("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${r.z}) translate(${-r.x}px, ${-r.y}px)` }, children: t.map((v) => {
      if (v.type === "draw") return null;
      if (v.type === "arrow") {
        const m = Et(v, a, s), C = m.routing === "orthogonal" && m.pathPoints ? ge(m.pathPoints) : m.routing === "curved" ? Rt(0.5, m.start, m.control, m.end) : { x: (m.start.x + m.end.x) / 2, y: (m.start.y + m.end.y) / 2 }, M = n === v.id, u = le(v), k = e.has(v.id), f = Qt(v).trim(), b = u || (k ? "관계 입력" : "");
        return !b && !M ? null : /* @__PURE__ */ N(Gt.Fragment, { children: /* @__PURE__ */ N("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: C.x - 90, top: C.y - 18, width: 180, height: 36 }, onDoubleClick: (X) => {
          X.stopPropagation(), h(v.id);
        }, children: (b || M) && /* @__PURE__ */ N(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": f ? `관계 설명: ${f}` : "관계 설명 입력",
            title: M ? void 0 : f ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${d ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: vt(v),
              fontFamily: pt(v),
              maxWidth: "100%",
              minWidth: M ? 120 / r.z : void 0,
              minHeight: M ? 28 / r.z : void 0,
              color: v.textColor
            },
            children: M ? p("text-center whitespace-nowrap") : /* @__PURE__ */ N("span", { dangerouslySetInnerHTML: { __html: b } }, "canvas-view")
          }
        ) }) }, v.id);
      }
      const l = e.has(v.id), w = Lt(v);
      return /* @__PURE__ */ B(
        "div",
        {
          "data-canvas-shape-id": v.id,
          "data-canvas-shape-type": v.type,
          "data-canvas-selected": l ? "true" : void 0,
          "data-canvas-text-align": bt(v),
          "data-canvas-text-color": v.textColor,
          "data-canvas-font-size": vt(v),
          "data-canvas-font-family": v.fontFamily === "custom" ? v.customFontFamily ?? "custom" : v.fontFamily ?? "sans",
          "data-canvas-manual-size": v.manualSize ? "true" : void 0,
          "data-canvas-group-id": v.groupId,
          "data-canvas-list-kind": xo(v),
          "data-canvas-x": v.x,
          "data-canvas-y": v.y,
          "data-canvas-width": v.w,
          "data-canvas-height": v.h,
          className: "absolute",
          style: { left: w.minX, top: w.minY, width: w.maxX - w.minX, height: w.maxY - w.minY, transform: v.rotation ? `rotate(${v.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (m) => {
            m.stopPropagation(), vo.has(v.type) && h(v.id);
          },
          children: [
            $(v),
            l && /* @__PURE__ */ B(At, { children: [
              /* @__PURE__ */ N("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / r.z}px solid ${j.blue}` } }),
              e.size === 1 && /* @__PURE__ */ B(At, { children: [
                ["nw", "ne", "sw", "se"].map((m) => /* @__PURE__ */ N("div", { "data-canvas-resize-handle": m, onPointerDown: (C) => c(C, v, m), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / r.z, height: 10 / r.z, cursor: `${m}-resize`, left: m.includes("w") ? -5 / r.z : void 0, right: m.includes("e") ? -5 / r.z : void 0, top: m.includes("n") ? -5 / r.z : void 0, bottom: m.includes("s") ? -5 / r.z : void 0 } }, m)),
                /* @__PURE__ */ N("div", { onPointerDown: (m) => g(m, v), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / r.z, height: 12 / r.z, left: "50%", marginLeft: -6 / r.z, top: -28 / r.z, cursor: "grab" } }),
                po.has(v.type) && ["n", "s", "w", "e"].map((m) => /* @__PURE__ */ N("div", { onPointerDown: (C) => y(C, v), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...m === "n" ? { left: "50%", top: -30 / r.z, marginLeft: -9 / r.z } : m === "s" ? { left: "50%", bottom: -30 / r.z, marginLeft: -9 / r.z } : m === "w" ? { top: "50%", left: -30 / r.z, marginTop: -9 / r.z } : { top: "50%", right: -30 / r.z, marginTop: -9 / r.z }, width: 18 / r.z, height: 18 / r.z, fontSize: 13 / r.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${m}`))
              ] })
            ] })
          ]
        },
        v.id
      );
    }) }),
    e.size === 1 && s.filter((v) => v.type === "arrow" && e.has(v.id)).map((v) => {
      const l = Et(v, a, s), w = (m, C) => ({
        left: (m.x - r.x) * r.z - C / 2,
        top: (m.y - r.y) * r.z - C / 2
      });
      return /* @__PURE__ */ B(Gt.Fragment, { children: [
        l.routing === "orthogonal" && l.pathPoints && l.pathPoints.length > 2 ? l.pathPoints.slice(0, -1).map((m, C) => {
          var k;
          const M = (k = l.pathPoints) == null ? void 0 : k[C + 1];
          if (!M) return null;
          const u = { x: (m.x + M.x) / 2, y: (m.y + M.y) / 2 };
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-segment-handle": C, onPointerDown: (f) => o(f, v, C), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...w(u, 12), cursor: m.x === M.x ? "ew-resize" : "ns-resize" } }, `segment-${C}`);
        }) : l.routing === "curved" && /* @__PURE__ */ N("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (m) => x(m, v), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (l.start.x + l.end.x) / 2 * r.z - r.x * r.z - 5, top: (l.start.y + l.end.y) / 2 * r.z - r.y * r.z - 10, cursor: "grab" } }),
        ["start", "end"].map((m) => {
          const C = m === "start" ? l.start : l.end;
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-endpoint": m, onPointerDown: (M) => S(M, v, m), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...w(C, 12), cursor: "grab" } }, m);
        })
      ] }, `arrow-handles-${v.id}`);
    }),
    i == null ? void 0 : i.map((v) => /* @__PURE__ */ B("div", { className: "absolute pointer-events-none z-40", style: { left: (v.x - r.x) * r.z, top: (v.y - r.y) * r.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ N("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ N("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: v.color, stroke: j.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ N("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: v.color }, children: v.name })
    ] }, v.id))
  ] });
}
function ye(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function go(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), ye(t) && e.push("diagram"), e;
}
function ar(t) {
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
const yo = "#3b82f6";
function Tt(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function ie(t) {
  return Math.round(Tt(t, 0, 255)).toString(16).padStart(2, "0");
}
function wo(t) {
  const e = t.trim().endsWith("%"), n = Number.parseFloat(t);
  return Number.isFinite(n) ? e ? n * 2.55 : n : 0;
}
function Vt(t) {
  var s, i;
  const e = t.trim().toLowerCase(), n = (s = e.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : s[1];
  if (n)
    return n.length === 3 || n.length === 4 ? `#${n.slice(0, 3).split("").map((d) => `${d}${d}`).join("")}` : `#${n.slice(0, 6)}`;
  const r = (i = e.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : i[1];
  if (r) {
    const d = r.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(wo);
    if (d.length === 3) return `#${d.map(ie).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? yo;
}
function Ie(t) {
  const e = Vt(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, r = Number.parseInt(e.slice(2, 4), 16) / 255, a = Number.parseInt(e.slice(4, 6), 16) / 255, s = Math.max(n, r, a), i = Math.min(n, r, a), d = s - i;
  let p = 0;
  return d !== 0 && (s === n ? p = 60 * ((r - a) / d % 6) : s === r ? p = 60 * ((a - n) / d + 2) : p = 60 * ((n - r) / d + 4)), p < 0 && (p += 360), { hue: p, saturation: s === 0 ? 0 : d / s, value: s };
}
function Pe({ hue: t, saturation: e, value: n }) {
  const r = (t % 360 + 360) % 360, a = n * e, s = a * (1 - Math.abs(r / 60 % 2 - 1)), i = n - a;
  let d = 0, p = 0, $ = 0;
  return r < 60 ? [d, p, $] = [a, s, 0] : r < 120 ? [d, p, $] = [s, a, 0] : r < 180 ? [d, p, $] = [0, a, s] : r < 240 ? [d, p, $] = [0, s, a] : r < 300 ? [d, p, $] = [s, 0, a] : [d, p, $] = [a, 0, s], `#${ie((d + i) * 255)}${ie((p + i) * 255)}${ie(($ + i) * 255)}`;
}
function bo(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function ko({ value: t, onChange: e }) {
  const [n, r] = nt(() => Ie(t)), a = Z(null), s = Z(null), i = Z(null);
  Xt(() => {
    const l = Ie(t);
    r((w) => bo(w, l) ? w : l);
  }, [t]);
  const d = (l) => {
    r(l), e(Pe(l));
  }, p = (l) => {
    var u;
    const w = (u = a.current) == null ? void 0 : u.getBoundingClientRect();
    if (!w) return;
    const m = l.clientX - (w.left + w.width / 2), C = l.clientY - (w.top + w.height / 2), M = Math.atan2(C, m) * 180 / Math.PI + 90;
    d({ ...n, hue: (M + 360) % 360 });
  }, $ = (l) => {
    var m;
    const w = (m = s.current) == null ? void 0 : m.getBoundingClientRect();
    w && d({
      ...n,
      saturation: Tt((l.clientX - w.left) / w.width, 0, 1),
      value: Tt(1 - (l.clientY - w.top) / w.height, 0, 1)
    });
  }, h = (l, w) => {
    var m, C;
    w.button !== 0 && w.pointerType !== "touch" || (w.preventDefault(), w.stopPropagation(), i.current = l, (C = (m = w.currentTarget).setPointerCapture) == null || C.call(m, w.pointerId), l === "hue" ? p(w) : $(w));
  }, x = (l) => {
    i.current && (l.preventDefault(), i.current === "hue" ? p(l) : $(l));
  }, o = (l) => {
    var w, m;
    i.current = null;
    try {
      (m = (w = l.currentTarget).releasePointerCapture) == null || m.call(w, l.pointerId);
    } catch {
      return;
    }
  }, c = (n.hue - 90) * Math.PI / 180, g = 53, y = {
    left: 66 + Math.cos(c) * g,
    top: 66 + Math.sin(c) * g
  }, S = Pe({ hue: n.hue, saturation: 1, value: 1 }), v = (l) => d({ ...n, hue: (n.hue + l + 360) % 360 });
  return /* @__PURE__ */ B("div", { className: "canvas-color-wheel", "data-canvas-color-wheel": !0, children: [
    /* @__PURE__ */ B(
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
        onPointerDown: (l) => h("hue", l),
        onPointerMove: x,
        onPointerUp: o,
        onKeyDown: (l) => {
          (l.key === "ArrowLeft" || l.key === "ArrowDown") && (l.preventDefault(), v(-1)), (l.key === "ArrowRight" || l.key === "ArrowUp") && (l.preventDefault(), v(1));
        },
        children: [
          /* @__PURE__ */ N("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ N("span", { className: "canvas-color-wheel-hue-marker", style: { left: y.left, top: y.top } })
        ]
      }
    ),
    /* @__PURE__ */ N(
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
        style: { backgroundColor: S },
        onPointerDown: (l) => h("sv", l),
        onPointerMove: x,
        onPointerUp: o,
        onKeyDown: (l) => {
          const w = l.shiftKey ? 0.1 : 0.02;
          l.key === "ArrowLeft" && (l.preventDefault(), d({ ...n, saturation: Tt(n.saturation - w, 0, 1) })), l.key === "ArrowRight" && (l.preventDefault(), d({ ...n, saturation: Tt(n.saturation + w, 0, 1) })), l.key === "ArrowDown" && (l.preventDefault(), d({ ...n, value: Tt(n.value - w, 0, 1) })), l.key === "ArrowUp" && (l.preventDefault(), d({ ...n, value: Tt(n.value + w, 0, 1) }));
        },
        children: /* @__PURE__ */ N("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${n.saturation * 100}%`, top: `${(1 - n.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ B("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ N("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ N("span", { children: Vt(t).toUpperCase() })
    ] })
  ] });
}
const $o = [2, 4, 6, 8];
function Mo(t) {
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
      return an(t);
  }
}
function Ee(t) {
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
      return an(t);
  }
}
function an(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function xe(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Fe(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function zo({
  shape: t,
  selection: e,
  selectionActions: n,
  shapes: r,
  camera: a,
  canvasSize: s,
  isDarkMode: i,
  editing: d,
  showPalette: p,
  installedFontFamilies: $,
  setShowPalette: h,
  setActiveColor: x,
  patchSelected: o,
  applyFormat: c,
  applyList: g,
  applyCustomFontFamily: y
}) {
  var Mt, zt;
  const S = i ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", v = e.length > 1, l = e.some((z) => !!z.groupId), w = t.type === "draw", m = w || Fe(t) && !xe(t) ? "stroke" : xe(t) ? "fill" : "text", [C, M] = nt(m), [u, k] = nt("");
  Ht(() => M(m), [m, t.id]);
  const f = C === "text" ? Dt(t) : C === "stroke" ? t.strokeColor ?? (t.color ? ot[t.color].border : j.ink) : ce(t);
  Ht(() => k(Vt(f).toUpperCase()), [f]);
  const b = Vt(f), X = (z) => {
    o(w || C === "stroke" ? { strokeColor: z } : C === "text" ? { textColor: z } : { fillColor: z });
  }, Y = (z) => {
    x(z), o(w || C === "stroke" ? { color: z, strokeColor: void 0 } : C === "text" ? { textColor: ot[z].text } : { color: z, fillColor: void 0 }), h(!1);
  }, P = Z(null), [F, L] = nt({ width: 380, height: 260 });
  Ht(() => {
    const z = P.current;
    if (!z) return;
    const O = () => {
      const ht = Math.max(1, Math.ceil(z.getBoundingClientRect().width)), Ct = Math.max(1, Math.ceil(z.getBoundingClientRect().height));
      L((jt) => jt.width === ht && jt.height === Ct ? jt : { width: ht, height: Ct });
    };
    if (O(), typeof ResizeObserver > "u") return;
    const q = new ResizeObserver(O);
    return q.observe(z), () => q.disconnect();
  }, [d, $.length, i, t, p]);
  const T = F.width, W = F.height, K = e.reduce((z, O) => {
    const q = at(O);
    return {
      minX: Math.min(z.minX, q.minX),
      minY: Math.min(z.minY, q.minY),
      maxX: Math.max(z.maxX, q.maxX),
      maxY: Math.max(z.maxY, q.maxY)
    };
  }, at(t)), I = (K.minX - a.x) * a.z, E = (K.minY - a.y) * a.z, A = (K.maxX - a.x) * a.z, V = (K.maxY - a.y) * a.z, R = Math.max(8, s.width - T - 8), U = Math.max(8, s.height - W - 8), tt = (z, O) => ({ left: Math.min(Math.max(8, z), R), top: Math.min(Math.max(8, O), U) }), ut = [
    tt((I + A) / 2 - T / 2, E - W - 12),
    tt((I + A) / 2 - T / 2, V + 12),
    tt((s.width - T) / 2, 12),
    tt(I - T - 12, E + (V - E - W) / 2),
    tt(A + 12, E + (V - E - W) / 2)
  ], it = r.map((z) => {
    const O = at(z);
    return { left: (O.minX - a.x) * a.z, top: (O.minY - a.y) * a.z, right: (O.maxX - a.x) * a.z, bottom: (O.maxY - a.y) * a.z };
  });
  if (t.type === "arrow") {
    const z = Et(t, new Map(r.map((Ct) => [Ct.id, Ct])), r), O = z.routing === "orthogonal" && z.pathPoints ? ge(z.pathPoints) : { x: (z.start.x + z.end.x) / 2, y: (z.start.y + z.end.y) / 2 }, q = 180 * a.z, ht = 36 * a.z;
    it.push({
      left: (O.x - a.x) * a.z - q / 2,
      top: (O.y - a.y) * a.z - ht / 2,
      right: (O.x - a.x) * a.z + q / 2,
      bottom: (O.y - a.y) * a.z + ht / 2
    });
  }
  const mt = ut[0], Yt = (z, O) => {
    const q = Math.max(0, Math.min(z.left + T, O.right) - Math.max(z.left, O.left)), ht = Math.max(0, Math.min(z.top + W, O.bottom) - Math.max(z.top, O.top));
    return q * ht;
  }, Nt = ((Mt = ut.map((z) => ({
    candidate: z,
    overlap: it.reduce((O, q) => O + Yt(z, q), 0),
    distance: Math.hypot(z.left - mt.left, z.top - mt.top)
  })).sort((z, O) => z.overlap - O.overlap || z.distance - O.distance)[0]) == null ? void 0 : Mt.candidate) ?? mt, G = vt(t), et = e.every(Mo), yt = new Set(e.map(Ee)).size === 1 ? Ee(t) : void 0, xt = go(t), wt = t.type === "arrow" ? "arrow" : xt[0] ?? "color", [Q, kt] = nt(wt);
  Ht(() => {
    xt.includes(Q) || kt(wt);
  }, [wt, xt, Q]);
  const $t = t.type === "arrow" && !!((zt = t.orthogonalWaypoints) != null && zt.length), ct = t.type === "arrow" ? t.arrowStart ?? "none" : "none", st = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", D = (z, O, q, ht, Ct = ht) => /* @__PURE__ */ N("button", { type: "button", title: ht, "aria-label": Ct, onClick: q, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${O ? "bg-blue-600 text-white" : S}`, children: z }), _ = (z) => /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: z }), H = (z, O, q, ht, Ct = !1) => /* @__PURE__ */ N(
    "button",
    {
      type: "button",
      title: O,
      "aria-label": O,
      disabled: !ht,
      onClick: q,
      className: `w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default ${Ct ? "text-rose-500 hover:bg-rose-500/10" : S}`,
      children: /* @__PURE__ */ N(z, { className: "w-4 h-4" })
    }
  ), J = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ B("div", { ref: P, "data-canvas-inspector": w ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${i ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: Nt.left, top: Nt.top }, onPointerDown: (z) => {
    z.stopPropagation();
    const O = z.target instanceof Element ? z.target : null;
    O != null && O.closest("input, select, textarea") || z.preventDefault();
  }, onClick: (z) => z.stopPropagation(), children: [
    v ? /* @__PURE__ */ B("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      e.length,
      "개 선택됨"
    ] }) : /* @__PURE__ */ N("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: xt.map((z) => /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": Q === z, onClick: () => kt(z), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${Q === z ? "bg-blue-600 text-white" : S}`, children: J[z] }, z)) }),
    /* @__PURE__ */ B("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: v || Q === "color" || w ? void 0 : "none" }, children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: w ? "그리기" : "색상" }),
      /* @__PURE__ */ N("button", { type: "button", title: w ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": w ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => h((z) => !z), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${i ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ N("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ N("span", { className: "canvas-color-wheel-trigger-dot", style: { background: b } }) }) }),
      p && /* @__PURE__ */ B("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${i ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !w && /* @__PURE__ */ B("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          xe(t) && /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": C === "fill", onClick: () => M("fill"), className: C === "fill" ? "is-active" : "", children: "배경" }),
          Fe(t) && /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": C === "stroke", onClick: () => M("stroke"), className: C === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": C === "text", onClick: () => M("text"), className: C === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ N("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: Xn.map((z) => /* @__PURE__ */ N("button", { type: "button", title: ot[z].label, "aria-label": `색 ${ot[z].label}`, onClick: () => Y(z), className: "canvas-color-preset", style: { background: ot[z].bg, borderColor: ot[z].border, outline: t.color === z && !t.fillColor && !t.strokeColor ? `2px solid ${j.blue}` : void 0, outlineOffset: 1 } }, z)) }),
        /* @__PURE__ */ N(ko, { value: f, onChange: X }),
        /* @__PURE__ */ B("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ N("span", { children: "#" }),
          /* @__PURE__ */ N(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: u.replace(/^#/, ""),
              onChange: (z) => {
                const O = z.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                k(`#${O}`.toUpperCase()), O.length === 6 && X(`#${O}`);
              },
              onBlur: () => k(Vt(f).toUpperCase()),
              onPointerDown: (z) => z.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !v && Q !== "color" && !w && /* @__PURE__ */ B(At, { children: [
      /* @__PURE__ */ B("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ B("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: Dt(t), color: j.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ N("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ N("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? Dt(t), onChange: (z) => o({ textColor: z.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ B("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${i ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => o({ fontSize: Math.max(8, G - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${S}`, children: /* @__PURE__ */ N(In, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ N("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: G }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => o({ fontSize: Math.min(96, G + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${S}`, children: /* @__PURE__ */ N(Pn, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ B("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${i ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ N("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (z) => {
            const O = uo(z.target.value);
            o(O === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: O, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${i ? "text-slate-200" : "text-slate-700"}`, children: no.map((z) => /* @__PURE__ */ N("option", { value: z, className: i ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: It[z].label }, z)) }),
          /* @__PURE__ */ N(En, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ B(At, { children: [
          /* @__PURE__ */ N("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (z) => y(z.target.value), onChange: (z) => z.currentTarget.value && y(z.currentTarget.value), onKeyDown: (z) => {
            z.key === "Enter" && (z.preventDefault(), y(z.currentTarget.value));
          }, onDoubleClick: (z) => z.stopPropagation(), onPointerDown: (z) => z.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${i ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ N("datalist", { id: `canvas-font-families-${t.id}`, children: $.map((z) => /* @__PURE__ */ N("option", { value: z }, z)) })
        ] })
      ] }),
      /* @__PURE__ */ B("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${i ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", Fn, "왼쪽 정렬"], ["center", Ln, "가운데 정렬"], ["right", Tn, "오른쪽 정렬"]].map(([z, O, q]) => /* @__PURE__ */ N("button", { type: "button", "aria-label": q, title: q, onClick: () => o({ textAlign: z }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${bt(t) === z ? "bg-blue-600 text-white shadow-sm" : S}`, children: /* @__PURE__ */ N(O, { className: "w-4 h-4" }) }, z)) }),
        d && /* @__PURE__ */ B(At, { children: [
          /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", An, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", Dn, "번호 목록"]].map(([z, O, q]) => /* @__PURE__ */ N("button", { type: "button", onClick: () => g(z), "aria-label": q, title: q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${S}`, children: O ? /* @__PURE__ */ N(O, { className: "w-4 h-4" }) : /* @__PURE__ */ N("span", { className: "text-base leading-none", children: "–" }) }, z)) }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: Wn, label: "굵게" }, { cmd: "italic", Icon: On, label: "기울임" }, { cmd: "underline", Icon: _n, label: "밑줄" }].map(({ cmd: z, Icon: O, label: q }) => /* @__PURE__ */ N("button", { type: "button", onClick: () => c(z), "aria-label": q, title: q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${S}`, children: /* @__PURE__ */ N(O, { className: "w-4 h-4" }) }, z)) })
        ] })
      ] }),
      (Q === "arrange" && t.type === "card" || Q === "arrow" && t.type === "arrow") && /* @__PURE__ */ B("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${i ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ B(At, { children: [
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${i ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ N("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (z) => z.stopPropagation(), onChange: (z) => o({ category: z.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${i ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ B("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ B("div", { className: "flex items-center gap-1", children: [
            _("경로"),
            D("직선", (t.routing ?? "straight") === "straight", () => o({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            D("직각", t.routing === "orthogonal", () => o({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            D("곡선", (t.routing ?? "") === "curved", () => o({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            $t && D("자동", !1, () => o({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ B("div", { className: "flex items-center gap-1", children: [
            _("선"),
            D("—", (t.strokeStyle ?? "solid") === "solid", () => o({ strokeStyle: "solid" }), "실선"),
            D("- -", t.strokeStyle === "dashed", () => o({ strokeStyle: "dashed" }), "파선"),
            D("···", t.strokeStyle === "dotted", () => o({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ B("div", { className: "flex items-center gap-1", children: [
            _("시작"),
            D(ct === "none" ? "○" : ct === "dot" ? "●" : "◀", ct !== "none", () => o({ arrowStart: ct === "none" ? "arrow" : ct === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${ct === "none" ? "없음" : ct === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ B("div", { className: "flex items-center gap-1", children: [
            _("끝"),
            D(st === "none" ? "○" : st === "dot" ? "●" : "▶", st !== "none", () => o({ arrowEnd: st === "arrow" ? "dot" : st === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${st === "none" ? "없음" : st === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      Q === "diagram" && /* @__PURE__ */ N("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${i ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    et && /* @__PURE__ */ B("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-none ${i ? "border-slate-700" : "border-slate-100"}`, children: [
      _("굵기"),
      $o.map((z) => /* @__PURE__ */ N(Gt.Fragment, { children: D(String(z), yt === z, () => o({ strokeWidth: z }), `굵기 ${z}`) }, z))
    ] }),
    /* @__PURE__ */ B("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${i ? "border-slate-700" : "border-slate-100"}`, children: [
      _("선택"),
      H(Hn, "그룹 (Ctrl+G)", n.group, v),
      H(Bn, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, l),
      H(jn, "복제", n.duplicateSelected, !0),
      H(Kn, "삭제 (Delete)", n.deleteSelected, !0, !0)
    ] })
  ] });
}
function Co({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: r,
  commitEditorHtml: a,
  onEditorKeyDown: s,
  setShapes: i,
  onDirty: d,
  renderDiagram: p
}) {
  const $ = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", h = (o, c) => /* @__PURE__ */ N(
    "div",
    {
      ref: r,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": "텍스트 편집",
      "data-canvas-editor": !0,
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onInput: a,
      onBlur: a,
      onDoubleClick: (g) => g.stopPropagation(),
      onKeyDown: s,
      className: `${$} ${o}`,
      style: c
    },
    "canvas-editor"
  );
  return { renderEditor: h, renderShapeBody: (o) => {
    const c = ot[o.color ?? "blue"], g = e === o.id, y = le(o);
    if (o.type === "frame") {
      const M = o.strokeWidth ?? 2;
      return /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-stroke-width": M,
          className: "w-full h-full rounded",
          style: { border: `${M / t.z}px solid ${n ? j.slate600 : j.slate400}` },
          children: /* @__PURE__ */ N(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? j.slate400 : j.muted
              },
              children: g ? h("", { fontSize: 13 / t.z }) : Qt(o) || "프레임"
            }
          )
        }
      );
    }
    if (o.type === "note")
      return /* @__PURE__ */ N(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: ce(o), borderTop: `6px solid ${c.border}`, color: c.text },
          children: g ? h("font-medium", { color: Dt(o), fontSize: vt(o), fontFamily: pt(o), textAlign: bt(o) }) : y ? /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Dt(o), fontSize: vt(o), fontFamily: pt(o), textAlign: bt(o) }, dangerouslySetInnerHTML: { __html: y } }, "canvas-view") : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Dt(o), fontSize: vt(o), fontFamily: pt(o), textAlign: bt(o) }, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (o.type === "card") {
      const M = o.cardStyle === "glass";
      return ye(o) && p && !g ? /* @__PURE__ */ N("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: p(o) }) : /* @__PURE__ */ B(
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
            /* @__PURE__ */ B(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (u) => u.stopPropagation(),
                onDoubleClick: (u) => u.stopPropagation(),
                onBlur: (u) => {
                  const f = (u.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  i((b) => b.map((X) => X.id === o.id ? { ...X, category: f } : X)), d();
                },
                onKeyDown: (u) => {
                  u.key === "Enter" && (u.preventDefault(), u.currentTarget.blur());
                },
                children: [
                  "[ ",
                  o.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            g ? h("flex-1 font-medium", { color: o.textColor ?? j.white, fontSize: vt(o), fontFamily: pt(o), textAlign: bt(o) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: o.textColor ?? j.white, fontSize: vt(o), fontFamily: pt(o), textAlign: bt(o) }, dangerouslySetInnerHTML: { __html: y } }, "canvas-view"),
            /* @__PURE__ */ B("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              o.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (o.type === "text") {
      const M = n ? "text-slate-100" : "text-slate-900", u = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${M}`,
        style: { color: o.textColor, fontSize: vt(o), fontFamily: pt(o), textAlign: bt(o) }
      };
      return g ? h(`font-medium ${M}`, u.style) : y ? /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-text-view": !0,
          ...u,
          dangerouslySetInnerHTML: { __html: y }
        },
        "canvas-view"
      ) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, ...u, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (o.type === "image") {
      const M = ve(o.src);
      return M ? /* @__PURE__ */ N(
        "img",
        {
          src: M,
          alt: o.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const S = ce(o), v = Ve(o), l = Dt(o);
    if (o.type === "triangle" || o.type === "diamond" || o.type === "hexagon" || o.type === "star") {
      const M = o.strokeWidth ?? 2;
      return /* @__PURE__ */ B("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${o.w} ${o.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ N("polygon", { "data-canvas-stroke-width": M, points: Ge(o.type, o.w, o.h), fill: S, stroke: v, strokeWidth: M / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ N("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: l }, children: g ? h("font-medium", { color: l, fontSize: vt(o), fontFamily: pt(o), textAlign: bt(o) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: vt(o), fontFamily: pt(o), textAlign: bt(o) }, dangerouslySetInnerHTML: { __html: y } }, "canvas-view") })
      ] });
    }
    const m = ve(o.src), C = o.type === "rect" || o.type === "ellipse" ? o.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ N(
      "div",
      {
        "data-canvas-stroke-width": C,
        className: `w-full h-full flex items-center justify-center p-3 ${o.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: S, border: `${C / t.z}px solid ${v}`, color: l },
        children: g ? h("font-medium", { color: l, fontSize: vt(o), fontFamily: pt(o), textAlign: bt(o) }) : /* @__PURE__ */ B("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: vt(o), fontFamily: pt(o), textAlign: bt(o) }, children: [
          /* @__PURE__ */ N("div", { dangerouslySetInnerHTML: { __html: y } }),
          m && /* @__PURE__ */ N(
            "a",
            {
              href: m,
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
function Xo({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: r,
  selected: a,
  editingId: s,
  boardIdentity: i
}) {
  const [d, p] = nt({ width: 0, height: 0 });
  Xt(() => {
    const g = t.current;
    if (!g) return;
    let y = -1, S = -1;
    const v = (w = g.clientWidth, m = g.clientHeight) => {
      w === y && m === S || (y = w, S = m, p({ width: w, height: m }));
    };
    if (v(), typeof ResizeObserver < "u") {
      const w = new ResizeObserver((m) => {
        var M;
        const C = (M = m[0]) == null ? void 0 : M.contentRect;
        v((C == null ? void 0 : C.width) ?? g.clientWidth, (C == null ? void 0 : C.height) ?? g.clientHeight);
      });
      return w.observe(g), () => w.disconnect();
    }
    const l = () => v();
    return window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, [i, t]);
  const $ = Pt(() => new Map(n.map((g) => [g.id, g])), [n]), h = Pt(
    () => [...n].sort((g, y) => (g.type === "frame" ? -1 : 0) - (y.type === "frame" ? -1 : 0)),
    [n]
  ), x = Pt(() => {
    if (!t.current || d.width <= 0 || d.height <= 0) return null;
    const g = 200 / r.z;
    return {
      minX: r.x - g,
      minY: r.y - g,
      maxX: r.x + d.width / r.z + g,
      maxY: r.y + d.height / r.z + g
    };
  }, [r, t, d]), o = dt((g) => {
    if (!x) return !1;
    if (g.id === s || a.has(g.id)) return !0;
    if (g.type === "arrow") {
      const S = Et(g, $, e.current), l = (S.routing === "orthogonal" ? S.pathPoints : null) ?? [S.start, S.end], w = Math.min(...l.map((u) => u.x)), m = Math.max(...l.map((u) => u.x)), C = Math.min(...l.map((u) => u.y)), M = Math.max(...l.map((u) => u.y));
      return m >= x.minX && w <= x.maxX && M >= x.minY && C <= x.maxY;
    }
    const y = at(g);
    return y.maxX >= x.minX && y.minX <= x.maxX && y.maxY >= x.minY && y.minY <= x.maxY;
  }, [s, a, $, e, x]), c = Pt(
    () => h.filter(o),
    [o, h]
  );
  return { shapeById: $, visiblePaintOrder: c };
}
function So({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: r,
  onDirty: a,
  patchSelected: s
}) {
  const i = dt(() => {
    const c = t.current;
    if (!c || !e) return;
    let g;
    try {
      g = pe(c.innerHTML);
    } catch {
      r("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const y = c.scrollHeight;
    n((S) => S.map((v) => {
      if (v.id !== e) return v;
      const l = ye(v) ? { ...v, text: Qt({ ...v, html: g, text: void 0 }), html: void 0 } : { ...v, html: g, text: void 0 };
      if (v.type === "text")
        return v.manualSize ? l : { ...l, ...fo(c, v) };
      if (v.type === "arrow") return l;
      const w = v.type === "note" ? 32 : v.type === "card" ? 96 : (
        // category header + type footer
        (v.type === "frame", 24)
      ), m = Math.max(v.h, y + w);
      return { ...l, h: m };
    })), a();
  }, [e, a]), d = (c) => {
    var g;
    (g = t.current) == null || g.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(c), i();
  }, p = () => {
    var S;
    const c = (S = window.getSelection()) == null ? void 0 : S.anchorNode, g = c instanceof Element ? c : c == null ? void 0 : c.parentElement, y = g == null ? void 0 : g.closest("ul, ol");
    return y instanceof HTMLElement ? y : null;
  }, $ = (c, g, y) => {
    const S = document.createElement(g);
    for (; c.firstChild; ) S.append(c.firstChild);
    return c.replaceWith(S), S;
  }, h = (c) => {
    const g = t.current;
    if (!g) return;
    g.focus();
    const y = p();
    if (c === "number")
      if ((y == null ? void 0 : y.tagName) === "OL")
        y.removeAttribute("data-list-style");
      else if ((y == null ? void 0 : y.tagName) === "UL")
        $(y, "ol");
      else {
        document.execCommand("insertOrderedList");
        const S = p();
        S == null || S.removeAttribute("data-list-style");
      }
    else if ((y == null ? void 0 : y.tagName) === "UL") {
      const S = y.dataset.listStyle;
      c === S ? document.execCommand("insertUnorderedList") : y.dataset.listStyle = c;
    } else {
      (y == null ? void 0 : y.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const S = p();
      S && (S.dataset.listStyle = c);
    }
    i();
  };
  return { commitEditorHtml: i, applyFormat: d, applyList: h, onEditorKeyDown: (c) => {
    if (c.key === "Tab") {
      c.preventDefault(), document.execCommand(c.shiftKey ? "outdent" : "indent"), i();
      return;
    }
    if (c.key === " ") {
      const g = window.getSelection();
      if (g && g.isCollapsed && g.anchorNode) {
        const y = g.anchorNode, S = y.textContent || "", v = g.anchorOffset, l = S.slice(0, v).trim();
        if (!p()) {
          if (l === "-" || l === "–") {
            c.preventDefault(), y.textContent = S.slice(v), h("dash");
            return;
          }
          if (l === "*") {
            c.preventDefault(), y.textContent = S.slice(v), h("bullet");
            return;
          }
          if (l === "1.") {
            c.preventDefault(), y.textContent = S.slice(v), h("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (c) => {
    const g = on(c);
    if (!g) {
      s({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    s({
      fontFamily: "custom",
      customFontFamily: g
    });
  } };
}
function Yo({
  boardIdentity: t,
  tool: e,
  controlledShapes: n,
  onShapesChange: r,
  onDirty: a
}) {
  const s = Z(null), i = Z(null), [d, p] = nt([]), $ = n !== void 0 && r !== void 0, h = Z(/* @__PURE__ */ new WeakMap()), x = Pt(() => {
    const D = h.current;
    return ($ ? n ?? [] : d).map((_) => {
      let H = D.get(_);
      return H === void 0 && (H = Qe(_), D.set(_, H)), H;
    }).filter((_) => _ !== null);
  }, [$, n, d]), o = Z(r);
  o.current = r;
  const c = dt((D) => {
    const _ = o.current;
    if (!_) {
      p(D);
      return;
    }
    _(typeof D == "function" ? D : () => D);
  }, []), [g, y] = nt({ x: -400, y: -300, z: 1 }), [S, v] = nt(/* @__PURE__ */ new Set()), [l, w] = nt(null), [m, C] = nt({ kind: "none" }), [M, u] = nt(!1), [k, f] = nt([]), [b, X] = nt(""), [Y, P] = nt(!1), [F, L] = nt(null), [T, W] = nt("blue"), [K, I] = nt(ae), E = Z(T);
  E.current = T;
  const A = Z([]), V = Z([]), R = Z(null), U = Z(/* @__PURE__ */ new Map()), tt = Z(x), ut = Z(g), it = Z(e), mt = Z(S), Yt = Z(l);
  tt.current = x, ut.current = g, it.current = e, mt.current = S, Yt.current = l;
  const Nt = Z({ kind: "none" }), G = dt((D) => {
    Nt.current = D, C(D);
  }, []), et = dt((D) => {
    mt.current = D, v(D);
  }, []);
  Ht(() => {
    var _;
    const D = /* @__PURE__ */ new Set();
    mt.current = D, Yt.current = null, U.current.clear(), A.current = [], V.current = [], R.current = null, G({ kind: "none" }), v(D), w(null), u(!1), f([]), L(null), X(""), (_ = s.current) == null || _.focus();
  }, [G, t]), Xt(() => {
    let D = !1;
    const _ = () => {
      const J = io();
      D || I(J);
    };
    if (_(), typeof document > "u" || !("fonts" in document)) return;
    const H = () => _();
    return document.fonts.addEventListener("loadingdone", H), () => {
      D = !0, document.fonts.removeEventListener("loadingdone", H);
    };
  }, [t]);
  const yt = (l ? x.find((D) => D.id === l) : void 0) !== void 0;
  Ht(() => {
    if (!l || !yt) return;
    const D = () => {
      const H = i.current, J = tt.current.find((z) => z.id === l);
      if (!H || !J || (H.dataset.seeded !== l && (H.innerHTML = le(J), H.dataset.seeded = l), document.activeElement === H)) return;
      H.focus();
      const Mt = document.createRange();
      Mt.selectNodeContents(H), Mt.collapse(!1);
      const zt = window.getSelection();
      zt == null || zt.removeAllRanges(), zt == null || zt.addRange(Mt);
    };
    D();
    const _ = requestAnimationFrame(D);
    return () => cancelAnimationFrame(_);
  }, [l, yt]);
  const xt = dt((D) => {
    c((_) => {
      const H = typeof D == "function" ? D(_) : D;
      return A.current.push(_), A.current.length > 100 && A.current.shift(), V.current = [], H;
    }), a();
  }, [a]), wt = dt((D) => D.size === 0 ? !1 : (xt((_) => _.filter((H) => D.has(H.id) ? !1 : H.type !== "arrow" ? !0 : !(H.fromId && D.has(H.fromId)) && !(H.toId && D.has(H.toId)))), et(/* @__PURE__ */ new Set()), X(`${D.size}개 삭제됨`), !0), [xt, et]), Q = dt(() => {
    R.current = tt.current;
  }, []), kt = dt(() => {
    const D = R.current;
    R.current = null, !(!D || D === tt.current) && (A.current.push(D), A.current.length > 100 && A.current.shift(), V.current = [], a());
  }, [a]), $t = dt((D, _) => {
    var Mt;
    const H = (Mt = s.current) == null ? void 0 : Mt.getBoundingClientRect(), J = ut.current;
    return H ? { x: (D - H.left) / J.z + J.x, y: (_ - H.top) / J.z + J.y } : { x: 0, y: 0 };
  }, []), ct = dt(() => {
    var H;
    const D = (H = s.current) == null ? void 0 : H.getBoundingClientRect(), _ = ut.current;
    return D ? { x: _.x + D.width / 2 / _.z, y: _.y + D.height / 2 / _.z } : { x: 0, y: 0 };
  }, []), st = dt((D) => {
    const _ = new Set(tt.current.filter((J) => D.has(J.id) && J.groupId).map((J) => J.groupId));
    if (_.size === 0) return D;
    const H = new Set(D);
    for (const J of tt.current) J.groupId && _.has(J.groupId) && H.add(J.id);
    return H;
  }, []);
  return {
    containerRef: s,
    editorRef: i,
    localShapes: d,
    setLocalShapes: p,
    controlled: $,
    shapes: x,
    setShapes: c,
    camera: g,
    setCamera: y,
    cameraRef: ut,
    selected: S,
    setSelected: v,
    selectedRef: mt,
    editingId: l,
    setEditingId: w,
    editingIdRef: Yt,
    interaction: m,
    interactionRef: Nt,
    applyInteraction: G,
    isSpaceDown: M,
    setIsSpaceDown: u,
    guides: k,
    setGuides: f,
    announcement: b,
    setAnnouncement: X,
    showInspectorPalette: Y,
    setShowInspectorPalette: P,
    eraserPos: F,
    setEraserPos: L,
    activeColor: T,
    setActiveColor: W,
    activeColorRef: E,
    installedFontFamilies: K,
    pointers: U,
    past: A,
    future: V,
    selectNow: et,
    commit: xt,
    deleteSelection: wt,
    beginHistory: Q,
    endHistory: kt,
    toPage: $t,
    viewportCentre: ct,
    expandToGroups: st,
    toolRef: it,
    shapesRef: tt
  };
}
function No({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: r,
  maxZoom: a,
  shapes: s,
  selected: i,
  editingId: d,
  textualTypes: p,
  onZoomChange: $,
  onSelectionChange: h,
  onLocalCursor: x,
  toPage: o
}) {
  Xt(() => {
    $ == null || $(e.z);
  }, [e.z, $]), Xt(() => {
    const w = t.current;
    if (!w) return;
    const m = (C) => {
      if (C.preventDefault(), C.ctrlKey || C.metaKey) {
        const M = w.getBoundingClientRect();
        n((u) => {
          const k = Math.min(a, Math.max(r, u.z * Math.exp(-C.deltaY * 0.01))), f = C.clientX - M.left, b = C.clientY - M.top;
          return { x: u.x + f / u.z - f / k, y: u.y + b / u.z - b / k, z: k };
        });
      } else
        n((M) => ({ ...M, x: M.x + C.deltaX / M.z, y: M.y + C.deltaY / M.z }));
    };
    return w.addEventListener("wheel", m, { passive: !1 }), () => w.removeEventListener("wheel", m);
  }, [t, a, r, n]);
  const c = Pt(() => {
    const w = s.filter((m) => i.has(m.id));
    return {
      count: w.length,
      canGroup: w.length > 1,
      canUngroup: w.some((m) => !!m.groupId),
      isTextual: w.length === 1 && p.includes(w[0].type),
      selectedIds: w.map((m) => m.id)
    };
  }, [i, s, p]);
  Xt(() => {
    h == null || h(c);
  }, [h, c]);
  const g = Pt(() => {
    if (d) {
      const m = s.find((C) => C.id === d);
      return m && m.type !== "image" && m.type !== "draw" ? [m] : [];
    }
    const w = s.filter((m) => i.has(m.id));
    return w.length === 1 && w[0].type === "image" ? [] : w;
  }, [d, i, s]), y = Pt(() => g.length === 0 ? null : g.find((w) => w.type !== "image") ?? null, [g]), S = Z(0);
  return { selectionInfo: c, inspectorSelection: g, inspectorShape: y, onContainerPointerMove: x ? (w) => {
    const m = performance.now();
    m - S.current < 60 || (S.current = m, x(o(w.clientX, w.clientY)));
  } : void 0, onContainerPointerLeave: x ? () => x(null) : void 0 };
}
const _t = 24;
function Io({
  containerRef: t,
  shapesRef: e,
  selectedRef: n,
  commit: r,
  deleteSelection: a,
  selectNow: s,
  setAnnouncement: i,
  createId: d
}) {
  return Pt(() => ({
    deleteSelected: () => {
      a(n.current);
    },
    duplicateSelected: () => {
      var x;
      const p = n.current;
      if (p.size === 0) return;
      const $ = [], h = /* @__PURE__ */ new Map();
      for (const o of e.current) {
        if (!p.has(o.id)) continue;
        let c = o.groupId;
        c && (h.has(c) || h.set(c, d("g")), c = h.get(c)), $.push({
          ...o,
          id: d(),
          x: o.x + _t,
          y: o.y + _t,
          groupId: c,
          points: (x = o.points) == null ? void 0 : x.map(([g, y]) => [g + _t, y + _t]),
          orthogonalWaypoints: o.type === "arrow" && o.orthogonalWaypoints ? o.orthogonalWaypoints.map((g) => ({ x: g.x + _t, y: g.y + _t })) : void 0
        });
      }
      r((o) => [...o, ...$]), s(new Set($.map((o) => o.id))), i(`${$.length}개 복제됨`);
    },
    group: () => {
      var h;
      const p = n.current;
      if (p.size < 2) return;
      const $ = d("g");
      r((x) => x.map((o) => p.has(o.id) ? { ...o, groupId: $ } : o)), i(`${p.size}개 그룹화됨`), (h = t.current) == null || h.focus();
    },
    ungroup: () => {
      var $;
      const p = n.current;
      p.size !== 0 && (r((h) => h.map((x) => p.has(x.id) ? { ...x, groupId: void 0 } : x)), i("그룹 해제됨"), ($ = t.current) == null || $.focus());
    }
  }), [r, t, d, a, s, n, i, e]);
}
function Po(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, r = 1 / 0, a = -1 / 0, s = -1 / 0;
  for (const x of t) {
    const o = at(x);
    n = Math.min(n, o.minX), r = Math.min(r, o.minY), a = Math.max(a, o.maxX), s = Math.max(s, o.maxY);
  }
  const i = 40, d = a - n + i * 2, p = s - r + i * 2;
  if (!Number.isFinite(d) || !Number.isFinite(p) || d > Bt.maxExportDimension || p > Bt.maxExportDimension || d * p > Bt.maxExportPixels) return null;
  const $ = (x, o, c, g, y) => {
    const S = x.fontSize ?? c, v = pt(x), l = Re(le(x));
    if (l.length === 0) return "";
    const w = Lt(x), m = x.textAlign === "right" ? "end" : x.textAlign === "center" ? "middle" : x.textAlign === "left" ? "start" : y, C = m === "end" ? w.maxX - 12 : m === "middle" ? (w.minX + w.maxX) / 2 : w.minX + 12, M = w.minY + S + 12;
    return l.map((u, k) => {
      const f = u.map((b) => `<tspan style="${[
        b.bold ? "font-weight:700" : `font-weight:${g}`,
        b.italic ? "font-style:italic" : "",
        b.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Ft(b.text)}</tspan>`).join("");
      return `<text x="${C}" y="${M + k * S * 1.4}" font-family="${Ft(v)}" font-size="${S}" fill="${o}" text-anchor="${m}">${f}</text>`;
    }).join("");
  }, h = t.map((x) => {
    const o = ot[x.color ?? "blue"], c = Lt(x), g = St(x), y = x.rotation ? ` transform="rotate(${x.rotation * 180 / Math.PI} ${g.x} ${g.y})"` : "", S = x.color ? ot[x.color].border : j.ink;
    if (x.type === "draw" && x.points) {
      const u = x.drawMode ?? "pen", k = x.strokeWidth ?? 3, f = u === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${qe(x.points)}" fill="none" stroke="${S}" stroke-width="${k}"${f} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (x.type === "arrow") {
      const u = Et(x, new Map(t.map((A) => [A.id, A])), t), k = x.strokeWidth ?? 2.5, f = Math.max(10, 8 + k * 2), b = Math.max(4, 2 + k), X = u.routing === "orthogonal" && u.pathPoints ? u.pathPoints : null, Y = X && X.length > 1, P = Y ? he(X) : u.routing === "curved" ? `M ${u.start.x} ${u.start.y} Q ${u.control.x} ${u.control.y} ${u.end.x} ${u.end.y}` : `M ${u.start.x} ${u.start.y} L ${u.end.x} ${u.end.y}`, F = Y ? Ke(X) : u.routing === "curved" ? (() => {
        const A = Rt(0.94, u.start, u.control, u.end);
        return Math.atan2(u.end.y - A.y, u.end.x - A.x);
      })() : Math.atan2(u.end.y - u.start.y, u.end.x - u.start.x), L = Y ? qt(X[0], X[1]) : u.routing === "orthogonal" && u.start.side ? u.start.side === "e" ? 0 : u.start.side === "w" ? Math.PI : u.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : qt(u.start, u.end), T = x.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : x.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", W = (A, V, R, U) => {
        if (A === "dot") return `<circle cx="${V}" cy="${R}" r="${b}" fill="${S}"/>`;
        if (A === "none") return "";
        const tt = `${V - f * Math.cos(U - 0.4)},${R - f * Math.sin(U - 0.4)}`, ut = `${V - f * Math.cos(U + 0.4)},${R - f * Math.sin(U + 0.4)}`;
        return `<polygon points="${V},${R} ${tt} ${ut}" fill="${S}"/>`;
      }, K = u.routing === "orthogonal" && u.pathPoints ? ge(u.pathPoints) : u.bend === 0 ? { x: (u.start.x + u.end.x) / 2, y: (u.start.y + u.end.y) / 2 } : Rt(0.5, u.start, u.control, u.end), I = Qt(x), E = I ? `<text x="${K.x}" y="${K.y - 6}" text-anchor="middle" font-family="${Ft(pt(x))}" font-size="${x.fontSize ?? 12}" fill="${S}">${Ft(I)}</text>` : "";
      return `<path d="${P}" fill="none" stroke="${S}" stroke-width="${k}" stroke-linecap="round" stroke-linejoin="round"${T}/>` + W(x.arrowEnd ?? "arrow", u.end.x, u.end.y, F) + W(x.arrowStart ?? "none", u.start.x, u.start.y, L + Math.PI) + E;
    }
    if (x.type === "image" && x.src) {
      const u = ve(x.src);
      return u ? `<image href="${Ft(u)}" x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}"${y}/>` : "";
    }
    if (x.type === "frame")
      return `<g${y}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" fill="none" stroke="${j.slate400}" stroke-width="${x.strokeWidth ?? 2}" rx="4"/><text x="${c.minX}" y="${c.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${j.muted}">${Ft(x.text ?? "프레임")}</text></g>`;
    if (x.type === "note")
      return `<g${y}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" fill="${o.bg}"/><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="6" fill="${o.border}"/>` + $(x, o.text, 14, "600", "start") + "</g>";
    if (x.type === "card") {
      const u = x.cardStyle === "glass";
      return `<g${y}><rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" rx="16" fill="${u ? j.glassFill : j.slateCard}"/><text x="${c.minX + 16}" y="${c.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${j.slate400}">[ ${Ft(x.category ?? "ENTITY")} ]</text>` + $(x, j.white, 16, "700", "start") + "</g>";
    }
    const v = x.type === "rect" || x.type === "ellipse" || x.type === "triangle" || x.type === "diamond" || x.type === "hexagon" || x.type === "star" ? x.strokeWidth ?? 2 : 2, l = ce(x), w = Ve(x), m = x.type === "triangle" || x.type === "diamond" || x.type === "hexagon" || x.type === "star", C = m ? Ge(x.type, c.maxX - c.minX, c.maxY - c.minY).split(" ").map((u) => {
      const [k, f] = u.split(",").map(Number);
      return `${k + c.minX},${f + c.minY}`;
    }).join(" ") : "", M = x.type === "ellipse" ? `<ellipse cx="${(c.minX + c.maxX) / 2}" cy="${(c.minY + c.maxY) / 2}" rx="${(c.maxX - c.minX) / 2}" ry="${(c.maxY - c.minY) / 2}" fill="${l}" stroke="${w}" stroke-width="${v}"/>` : m ? `<polygon points="${C}" fill="${l}" stroke="${w}" stroke-width="${v}" stroke-linejoin="round"/>` : `<rect x="${c.minX}" y="${c.minY}" width="${c.maxX - c.minX}" height="${c.maxY - c.minY}" rx="12" fill="${l}" stroke="${w}" stroke-width="${v}"/>`;
    return `<g${y}>${M}${$(x, o.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${d}" height="${p}" viewBox="${n - i} ${r - i} ${d} ${p}"><rect x="${n - i}" y="${r - i}" width="${d}" height="${p}" fill="${e ? j.canvasDark : j.canvasLight}"/>` + h + "</svg>";
}
async function Eo(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), r = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), a = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), s = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, i = new Image();
  i.crossOrigin = "anonymous";
  try {
    await new Promise((o, c) => {
      i.onload = () => o(), i.onerror = () => c(new Error("svg rasterise failed")), i.src = s;
    });
  } catch {
    return null;
  }
  const d = 2, p = r * d, $ = a * d;
  if (!Number.isSafeInteger(p) || !Number.isSafeInteger($) || p > Bt.maxExportDimension || $ > Bt.maxExportDimension || p * $ > Bt.maxExportPixels) return null;
  const h = document.createElement("canvas");
  h.width = p, h.height = $;
  const x = h.getContext("2d");
  return x ? (x.scale(d, d), x.drawImage(i, 0, 0), new Promise((o) => {
    try {
      h.toBlob((c) => o(c), "image/png");
    } catch {
      o(null);
    }
  })) : null;
}
function Fo(t, e, n) {
  if (t.length < 2) return;
  const r = t.filter(
    (o) => o.type !== "draw" && o.type !== "arrow" && o.type !== "frame" && o.type !== "image"
  );
  if (r.length < 2) return;
  const a = r.map((o, c) => ({
    id: o.id,
    i: c,
    x: St(o).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: St(o).y,
    vx: 0,
    vy: 0
  }));
  for (let o = 0; o < a.length; o++)
    for (let c = 0; c < o; c++)
      if (Math.abs(a[o].x - a[c].x) < 1 && Math.abs(a[o].y - a[c].y) < 1) {
        const g = 2 * Math.PI * o / a.length;
        a[o].x += Math.cos(g) * 10, a[o].y += Math.sin(g) * 10;
        break;
      }
  const s = new Map(a.map((o) => [o.id, o])), i = [];
  for (const o of t) {
    if (o.type !== "arrow") continue;
    const c = o.fromId ? s.get(o.fromId) : null, g = o.toId ? s.get(o.toId) : null;
    c && g && i.push([c, g]);
  }
  const d = 220, p = d * d, $ = 80;
  let h = 400;
  const x = h / $;
  for (let o = 0; o < $; o++) {
    for (let c = 0; c < a.length; c++)
      a[c].vx = 0, a[c].vy = 0;
    for (let c = 0; c < a.length; c++)
      for (let g = c + 1; g < a.length; g++) {
        const y = a[c], S = a[g], v = y.x - S.x, l = y.y - S.y, w = Math.hypot(v, l) || 0.01, m = p / w, C = v / w * m, M = l / w * m;
        y.vx += C, y.vy += M, S.vx -= C, S.vy -= M;
      }
    for (const [c, g] of i) {
      const y = c.x - g.x, S = c.y - g.y, v = Math.hypot(y, S) || 0.01, l = v * v / d, w = y / v * l, m = S / v * l;
      c.vx -= w, c.vy -= m, g.vx += w, g.vy += m;
    }
    for (const c of a) {
      const g = Math.hypot(c.vx, c.vy) || 0.01, y = Math.min(g, h);
      c.x += c.vx / g * y, c.y += c.vy / g * y;
    }
    h = Math.max(0.5, h - x);
  }
  e((o) => o.map((c) => {
    const g = s.get(c.id);
    return g ? { ...c, x: g.x - c.w / 2, y: g.y - c.h / 2 } : c;
  })), n();
}
function Lo(t, {
  controlled: e,
  past: n,
  future: r,
  setLocalShapes: a,
  setCamera: s,
  selectNow: i,
  setEditingId: d
}) {
  let p;
  try {
    p = Sn(t);
  } catch {
    return;
  }
  e || (n.current = [], r.current = [], a(p.shapes.map(To))), s(p.camera), i(/* @__PURE__ */ new Set()), d(null);
}
function To(t) {
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
      return Ao(t);
  }
}
function Ao(t) {
  throw new Yn(`Unhandled canvas shape type: ${String(t)}.`);
}
function Do({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: r,
  past: a,
  future: s,
  controlled: i,
  isDarkMode: d,
  minZoom: p,
  maxZoom: $,
  onToolChange: h,
  setSelectedStrokeWidth: x,
  onDirty: o,
  commit: c,
  selectNow: g,
  selectionActions: y,
  viewportCentre: S,
  setShapes: v,
  setLocalShapes: l,
  setCamera: w,
  setEditingId: m,
  setAnnouncement: C,
  createId: M
}) {
  const u = dt((f) => {
    const b = S(), X = Qe({
      id: M(),
      x: f.x ?? b.x - f.w / 2,
      y: f.y ?? b.y - f.h / 2,
      ...f
    });
    if (!X) throw new Error("Canvas could not create a valid shape.");
    return c((Y) => [...Y, X]), g(/* @__PURE__ */ new Set([X.id])), h("select"), C(`${X.type} 추가됨`), X;
  }, [c, M, h, g, C, S]), k = dt(() => Po(n.current, d), [d, n]);
  kn(t, () => ({
    addNote: (f) => {
      const b = u({ type: "note", w: 180, h: 180, color: f, text: "" });
      m(b.id);
    },
    addCard: (f, b, X, Y) => {
      u({ type: "card", w: 260, h: 150, text: f, category: b, cardStyle: X, color: Y });
    },
    addText: () => {
      const f = u({ type: "text", w: 220, h: 44, text: "" });
      m(f.id);
    },
    addShape: (f, b, X) => {
      u({
        type: f,
        w: f === "ellipse" ? 220 : 200,
        h: f === "ellipse" ? 110 : 140,
        color: b,
        text: X ?? ""
      });
    },
    addArrow: () => {
      const f = S(), b = { id: M(), type: "arrow", x: f.x - 140, y: f.y, w: 280, h: 0 };
      c((X) => [...X, b]), g(/* @__PURE__ */ new Set([b.id])), h("select");
    },
    addImage: (f, b, X, Y) => {
      u({ type: "image", w: X, h: Y, src: f, fileName: b });
    },
    addFileCard: (f, b, X) => {
      u({ type: "rect", w: 260, h: 120, color: "purple", text: X, src: b, fileName: f });
    },
    updateShapeText: (f, b) => {
      c((X) => X.map((Y) => Y.id === f ? { ...Y, text: b, html: void 0 } : Y));
    },
    setSelectedStrokeWidth: x,
    setTool: h,
    undo: () => {
      const f = a.current.pop();
      f && (s.current.push(n.current), v(f), g(/* @__PURE__ */ new Set()), m(null), o(), C("실행 취소"));
    },
    redo: () => {
      const f = s.current.pop();
      f && (a.current.push(n.current), v(f), g(/* @__PURE__ */ new Set()), m(null), o(), C("다시 실행"));
    },
    deleteSelected: y.deleteSelected,
    duplicateSelected: y.duplicateSelected,
    group: y.group,
    ungroup: y.ungroup,
    zoomBy: (f) => {
      w((b) => {
        var L;
        const X = (L = e.current) == null ? void 0 : L.getBoundingClientRect(), Y = Math.min($, Math.max(p, b.z * f));
        if (!X) return { ...b, z: Y };
        const P = b.x + X.width / 2 / b.z, F = b.y + X.height / 2 / b.z;
        return { x: P - X.width / 2 / Y, y: F - X.height / 2 / Y, z: Y };
      });
    },
    zoomTo: (f) => {
      w((b) => {
        var L;
        const X = (L = e.current) == null ? void 0 : L.getBoundingClientRect(), Y = Math.min($, Math.max(p, f));
        if (!X) return { ...b, z: Y };
        const P = b.x + X.width / 2 / b.z, F = b.y + X.height / 2 / b.z;
        return { x: P - X.width / 2 / Y, y: F - X.height / 2 / Y, z: Y };
      });
    },
    resetZoom: () => {
      w((f) => {
        var P;
        const b = (P = e.current) == null ? void 0 : P.getBoundingClientRect();
        if (!b) return { ...f, z: 1 };
        const X = f.x + b.width / 2 / f.z, Y = f.y + b.height / 2 / f.z;
        return { x: X - b.width / 2, y: Y - b.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var W;
      const f = n.current, b = (W = e.current) == null ? void 0 : W.getBoundingClientRect();
      if (f.length === 0 || !b) return;
      let X = 1 / 0, Y = 1 / 0, P = -1 / 0, F = -1 / 0;
      for (const K of f) {
        const I = at(K);
        X = Math.min(X, I.minX), Y = Math.min(Y, I.minY), P = Math.max(P, I.maxX), F = Math.max(F, I.maxY);
      }
      const L = 80, T = Math.min($, Math.max(
        p,
        Math.min(b.width / (P - X + L * 2), b.height / (F - Y + L * 2))
      ));
      w({
        x: (X + P) / 2 - b.width / 2 / T,
        y: (Y + F) / 2 - b.height / 2 / T,
        z: T
      });
    },
    autoLayout: () => Fo(n.current, c, () => C("자동 배치 완료")),
    exportSvg: k,
    exportPng: () => Eo(k),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: r.current }),
    loadSnapshot: (f) => Lo(f, {
      controlled: i,
      past: a,
      future: s,
      setLocalShapes: l,
      setCamera: w,
      selectNow: g,
      setEditingId: m
    })
  }), [
    u,
    k,
    c,
    M,
    d,
    $,
    p,
    o,
    h,
    y,
    g,
    w,
    m,
    l,
    x,
    v,
    C,
    S,
    i
  ]);
}
function Wo(t) {
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
function Oo({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: r,
  editingIdRef: a,
  toolRef: s,
  past: i,
  future: d,
  textualTypes: p,
  setIsSpaceDown: $,
  setEditingId: h,
  setShapes: x,
  setAnnouncement: o,
  commit: c,
  deleteSelection: g,
  selectNow: y,
  onDirty: S,
  onToolChange: v,
  createId: l
}) {
  const w = dt((m, C) => {
    const M = r.current;
    M.size !== 0 && c((u) => u.map((k) => {
      var f;
      return M.has(k.id) ? {
        ...k,
        x: k.x + m,
        y: k.y + C,
        points: (f = k.points) == null ? void 0 : f.map(([b, X]) => [b + m, X + C])
      } : k;
    }));
  }, [c, r]);
  Xt(() => {
    const m = (k) => {
      const f = k;
      return !!f && (f.tagName === "INPUT" || f.tagName === "TEXTAREA" || f.isContentEditable);
    }, C = (k) => k instanceof Element && !!k.closest("input, select, button, textarea, option, label, [data-canvas-control]"), M = (k) => {
      var T, W, K, I;
      const f = t.current, b = document.activeElement, X = k.target instanceof Node && !!(f != null && f.contains(k.target)), Y = !!f && (b === f || f.contains(b));
      if (!X && !Y || C(k.target)) return;
      if (k.code === "Space" && !m(k.target)) {
        $(!0), k.preventDefault();
        return;
      }
      if (m(k.target)) {
        if (k.key === "Escape")
          k.preventDefault(), h(null), (T = e.current) == null || T.blur(), (W = t.current) == null || W.focus();
        else if ((k.key === "Delete" || k.key === "Backspace") && !a.current) {
          const E = r.current;
          g(E) && k.preventDefault();
        }
        return;
      }
      const P = k.metaKey || k.ctrlKey, F = r.current;
      if (P && k.key.toLowerCase() === "z") {
        if (k.preventDefault(), k.shiftKey) {
          const E = d.current.pop();
          E && (i.current.push(n.current), x(E), S());
        } else {
          const E = i.current.pop();
          E && (d.current.push(n.current), x(E), S());
        }
        y(/* @__PURE__ */ new Set());
        return;
      }
      if (P && k.key.toLowerCase() === "g") {
        if (k.preventDefault(), k.shiftKey)
          F.size > 0 && (c((E) => E.map((A) => F.has(A.id) ? { ...A, groupId: void 0 } : A)), o("그룹 해제됨"));
        else if (F.size > 1) {
          const E = l("g");
          c((A) => A.map((V) => F.has(V.id) ? { ...V, groupId: E } : V)), o(`${F.size}개 그룹화됨`);
        }
        return;
      }
      if (P && k.key.toLowerCase() === "a") {
        k.preventDefault(), y(new Set(n.current.map((E) => E.id))), o(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (k.key === "Delete" || k.key === "Backspace") {
        g(F) && k.preventDefault();
        return;
      }
      if (k.key.startsWith("Arrow")) {
        k.preventDefault();
        const E = k.shiftKey ? 10 : 1;
        k.key === "ArrowLeft" && w(-E, 0), k.key === "ArrowRight" && w(E, 0), k.key === "ArrowUp" && w(0, -E), k.key === "ArrowDown" && w(0, E);
        return;
      }
      if (k.key === "Tab" && n.current.length > 0) {
        k.preventDefault();
        const E = n.current, A = E.findIndex((U) => F.has(U.id)), V = k.shiftKey ? A <= 0 ? E.length - 1 : A - 1 : A === -1 || A === E.length - 1 ? 0 : A + 1, R = E[V];
        y(/* @__PURE__ */ new Set([R.id])), o(`${R.type} 선택됨: ${Qt(R) || "내용 없음"}`);
        return;
      }
      if (k.key === "Enter" && F.size === 1) {
        const E = n.current.find((A) => F.has(A.id));
        E && p.includes(E.type) && (k.preventDefault(), h(E.id));
        return;
      }
      if (k.key === "Escape") {
        if (a.current) {
          k.preventDefault(), h(null), (K = e.current) == null || K.blur(), (I = t.current) == null || I.focus(), v("select");
          return;
        }
        y(/* @__PURE__ */ new Set()), v("select");
        return;
      }
      const L = Wo(k);
      L && (k.preventDefault(), s.current = L, v(L));
    }, u = (k) => {
      const f = t.current;
      !f || !(document.activeElement === f || f.contains(document.activeElement)) || k.code === "Space" && $(!1);
    };
    return window.addEventListener("keydown", M), window.addEventListener("keyup", u), () => {
      window.removeEventListener("keydown", M), window.removeEventListener("keyup", u);
    };
  }, [
    c,
    t,
    l,
    g,
    a,
    e,
    d,
    w,
    S,
    v,
    i,
    y,
    r,
    o,
    h,
    $,
    x,
    n,
    p,
    s
  ]);
}
const _o = 400;
function Ho({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: r,
  cameraRef: a,
  shapesRef: s,
  editingIdRef: i,
  toolRef: d,
  activeColorRef: p,
  drawStrokeWidth: $,
  camera: h,
  shapes: x,
  selected: o,
  isSpaceDown: c,
  textualTypes: g,
  setShapes: y,
  setEditingId: S,
  applyInteraction: v,
  selectNow: l,
  beginHistory: w,
  commit: m,
  onToolChange: C,
  expandToGroups: M,
  toPage: u,
  createId: k
}) {
  const f = k, b = Z(null), X = (I, E) => {
    var U;
    const A = ((U = t.current) == null ? void 0 : U.dataset.canvasActiveTool) === "text" ? "text" : d.current;
    if (A !== "note" && A !== "text") return;
    const V = u(I, E), R = A === "note" ? { id: f(), type: "note", x: V.x - 90, y: V.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: f(), type: "text", x: V.x, y: V.y - 22, w: 220, h: 44, text: "" };
    m((tt) => [...tt, R]), l(/* @__PURE__ */ new Set([R.id])), S(R.id), C("select");
  };
  return Xt(() => {
    const I = (E) => {
      var A;
      (A = t.current) != null && A.contains(E.target) && (E.target instanceof Element && E.target.closest('[role="textbox"], [data-canvas-inspector]') || X(E.clientX, E.clientY));
    };
    return window.addEventListener("click", I, !0), () => window.removeEventListener("click", I, !0);
  }), { onPointerDown: (I) => {
    var mt, Yt, Nt;
    const E = d.current, A = I.target instanceof Element ? I.target : null, V = !!(A != null && A.closest("[data-canvas-editor]")) && i.current !== null;
    n.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), !V && I.cancelable && I.preventDefault();
    const R = I.currentTarget;
    try {
      R.setPointerCapture(I.pointerId);
    } catch {
    }
    if (n.current.size === 2) {
      const [G, et] = [...n.current.values()], rt = a.current, yt = r.current;
      v({
        kind: "pinch",
        startDist: Math.hypot(et.x - G.x, et.y - G.y) || 1,
        startZoom: rt.z,
        startMidX: (G.x + et.x) / 2,
        startMidY: (G.y + et.y) / 2,
        camX: rt.x,
        camY: rt.y,
        ...yt.kind === "drawing" ? { interruptedDrawingId: yt.id } : {}
      });
      return;
    }
    if (n.current.size > 2) return;
    if (I.button === 1 || c || E === "hand" || I.button === 0 && E === "select" && I.altKey) {
      v({ kind: "pan", startX: I.clientX, startY: I.clientY, camX: h.x, camY: h.y });
      return;
    }
    if (I.button !== 0) return;
    const U = u(I.clientX, I.clientY);
    if (V || (S(null), (mt = e.current) == null || mt.blur(), (Yt = t.current) == null || Yt.focus()), E === "draw" || E === "highlighter") {
      const G = {
        id: f(),
        type: "draw",
        x: U.x,
        y: U.y,
        w: 0,
        h: 0,
        points: [[U.x, U.y]],
        color: p.current,
        strokeWidth: $,
        drawMode: E === "highlighter" ? "highlighter" : "pen"
      };
      w(), y((et) => [...et, G]), v({ kind: "drawing", id: G.id });
      return;
    }
    if (E === "arrow" || E === "frame" || Nn.includes(E)) {
      const G = E, et = E === "arrow" ? { id: f(), type: "arrow", x: U.x, y: U.y, w: 0, h: 0, color: p.current } : E === "frame" ? { id: f(), type: "frame", x: U.x, y: U.y, w: 0, h: 0, text: "프레임" } : { id: f(), type: G, x: U.x, y: U.y, w: 0, h: 0, color: p.current, text: "" };
      w(), y((rt) => [...rt, et]), v({ kind: "creating", id: et.id, startX: U.x, startY: U.y });
      return;
    }
    if (E === "note" || E === "text") return;
    if (E === "eraser") {
      w(), y((G) => tn(G, U.x, U.y, 14 / h.z, h.z)), v({ kind: "erasing" });
      return;
    }
    const tt = new Map(x.map((G) => [G.id, G])), ut = i.current ? x.find((G) => G.id === i.current) : void 0, it = V && ut ? ut : [...x].reverse().find((G) => se(G, U.x, U.y, h.z, tt, x));
    if (!it)
      b.current = null;
    else {
      const G = Date.now(), et = !I.shiftKey && g.includes(it.type) && ((Nt = b.current) == null ? void 0 : Nt.id) === it.id && G - b.current.time < _o, rt = et ? it.id : void 0;
      b.current = et ? null : { id: it.id, time: G };
      const yt = I.shiftKey ? new Set(o).add(it.id) : o.has(it.id) ? o : /* @__PURE__ */ new Set([it.id]), xt = M(yt);
      l(xt);
      const wt = /* @__PURE__ */ new Map();
      for (const Q of x) xt.has(Q.id) && wt.set(Q.id, Q);
      for (const Q of x) {
        if (Q.type !== "frame" || !xt.has(Q.id)) continue;
        const kt = at(Q);
        for (const $t of x) {
          if ($t.id === Q.id || wt.has($t.id)) continue;
          const ct = St($t);
          ct.x >= kt.minX && ct.x <= kt.maxX && ct.y >= kt.minY && ct.y <= kt.maxY && wt.set($t.id, $t);
        }
      }
      w(), v({ kind: "move", startX: U.x, startY: U.y, origin: wt, editOnReleaseId: rt });
      return;
    }
    I.shiftKey || l(/* @__PURE__ */ new Set()), v({
      kind: "marquee",
      startX: U.x,
      startY: U.y,
      curX: U.x,
      curY: U.y,
      screenStartX: I.clientX,
      screenStartY: I.clientY
    });
  }, onResizeHandleDown: (I, E, A) => {
    I.stopPropagation(), n.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), w(), v({ kind: "resize", id: E.id, handle: A, start: E });
  }, onRotateHandleDown: (I, E) => {
    I.stopPropagation(), n.current.set(I.pointerId, { x: I.clientX, y: I.clientY });
    const A = u(I.clientX, I.clientY), V = St(E);
    w(), v({
      kind: "rotate",
      id: E.id,
      startAngle: Math.atan2(A.y - V.y, A.x - V.x),
      startRotation: E.rotation ?? 0
    });
  }, onConnectHandleDown: (I, E) => {
    I.stopPropagation(), n.current.set(I.pointerId, { x: I.clientX, y: I.clientY });
    const A = u(I.clientX, I.clientY);
    v({ kind: "connect", fromId: E.id, toX: A.x, toY: A.y, hoverId: null });
  }, onBendHandleDown: (I, E) => {
    I.stopPropagation(), n.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), w(), v({ kind: "bend", id: E.id });
  }, onOrthogonalSegmentHandleDown: (I, E, A) => {
    I.stopPropagation(), n.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), w(), v({ kind: "orthogonal-segment", id: E.id, segmentIndex: A });
  }, onArrowEndpointDown: (I, E, A) => {
    I.stopPropagation(), n.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), w(), v({ kind: "arrow-endpoint", id: E.id, endpoint: A, hoverId: null });
  } };
}
const Bo = 0.1, jo = 4, Ko = 14, Uo = 4, Le = ["note", "card", "rect", "ellipse", "text", "image"];
function Vo({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: r,
  shapesRef: a,
  setShapes: s,
  setEditingId: i,
  setEraserPos: d,
  setGuides: p,
  setAnnouncement: $,
  applyInteraction: h,
  selectNow: x,
  endHistory: o,
  commit: c,
  onToolChange: g,
  createId: y,
  pendingDrawPointsRef: S,
  drawRafRef: v
}) {
  const l = y;
  Xt(() => {
    const w = (C) => {
      v.current !== null && (cancelAnimationFrame(v.current), v.current = null);
      const M = S.current.splice(0);
      s((u) => u.map((k) => {
        if (k.id !== C || !k.points) return k;
        const f = [...k.points];
        let b = f[f.length - 1];
        for (const L of M)
          (!b || Math.hypot(L[0] - b[0], L[1] - b[1]) >= 1 / n.current.z) && (f.push(L), b = L);
        const X = f.map((L) => L[0]), Y = f.map((L) => L[1]), P = Math.min(...X), F = Math.min(...Y);
        return { ...k, points: f, x: P, y: F, w: Math.max(...X) - P, h: Math.max(...Y) - F };
      })), o();
    }, m = (C) => {
      var u, k;
      t.current.delete(C.pointerId);
      try {
        (k = (u = C.target) == null ? void 0 : u.releasePointerCapture) == null || k.call(u, C.pointerId);
      } catch {
      }
      const M = e.current;
      if (M.kind !== "none") {
        if (M.kind === "pinch") {
          t.current.size < 2 && (M.interruptedDrawingId && w(M.interruptedDrawingId), h({ kind: "none" }));
          return;
        }
        if (p([]), M.kind === "erasing") {
          d(null), o(), h({ kind: "none" });
          return;
        }
        if (M.kind === "connect") {
          const b = a.current.find((T) => T.id === M.fromId);
          if (h({ kind: "none" }), !b) return;
          const X = { x: M.toX, y: M.toY }, Y = St(b);
          if (!M.hoverId && Math.hypot(X.x - Y.x, X.y - Y.y) < 30) return;
          const P = [];
          let F = M.hoverId;
          if (!F) {
            const T = b.type === "note" ? 180 : 200, W = b.type === "note" ? 180 : 120, K = {
              ...b,
              id: l(),
              x: X.x - T / 2,
              y: X.y - W / 2,
              w: T,
              h: W,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            P.push(K), F = K.id;
          }
          const L = {
            id: l(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: b.id,
            toId: F,
            text: ""
          };
          P.push(L), c((T) => [...T, ...P]), x(/* @__PURE__ */ new Set([L.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => i(L.id)) : i(L.id), $("연결 생성됨");
          return;
        }
        if (M.kind === "bend") {
          o(), h({ kind: "none" });
          return;
        }
        if (M.kind === "drawing") {
          v.current !== null && (cancelAnimationFrame(v.current), v.current = null);
          const f = r(C.clientX, C.clientY);
          S.current.push([f.x, f.y]);
          const b = S.current.splice(0);
          s((X) => X.map((Y) => {
            if (Y.id !== M.id || !Y.points) return Y;
            const P = [...Y.points];
            let F = P[P.length - 1];
            for (const I of b)
              (!F || Math.hypot(I[0] - F[0], I[1] - F[1]) >= 1 / n.current.z) && (P.push(I), F = I);
            const L = P.map((I) => I[0]), T = P.map((I) => I[1]), W = Math.min(...L), K = Math.min(...T);
            return { ...Y, points: P, x: W, y: K, w: Math.max(...L) - W, h: Math.max(...T) - K };
          })), o(), h({ kind: "none" });
          return;
        }
        if (M.kind === "creating") {
          s((f) => f.map((b) => {
            if (b.id !== M.id) return b;
            const X = Math.abs(b.w) < 4 && Math.abs(b.h) < 4 ? {
              ...b,
              w: b.type === "arrow" ? 200 : b.type === "frame" ? 480 : 180,
              h: b.type === "arrow" ? 0 : b.type === "frame" ? 320 : 120
            } : b;
            if (X.type === "arrow") return X;
            const Y = Lt(X);
            return { ...X, x: Y.minX, y: Y.minY, w: Y.maxX - Y.minX, h: Y.maxY - Y.minY };
          })), o(), x(/* @__PURE__ */ new Set([M.id])), g("select"), h({ kind: "none" });
          return;
        }
        if ((M.kind === "move" || M.kind === "resize" || M.kind === "rotate" || M.kind === "orthogonal-segment" || M.kind === "arrow-endpoint") && o(), M.kind === "move" && M.editOnReleaseId && C.type === "pointerup") {
          const f = r(C.clientX, C.clientY);
          Math.hypot(f.x - M.startX, f.y - M.startY) * n.current.z <= Uo && i(M.editOnReleaseId);
        }
        h({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", m), window.addEventListener("pointercancel", m), () => {
      window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", m);
    };
  }, [
    h,
    n,
    c,
    y,
    v,
    o,
    e,
    g,
    S,
    t,
    x,
    $,
    i,
    d,
    p,
    s,
    a,
    r
  ]);
}
function Go({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: r,
  shapesRef: a,
  setCamera: s,
  setShapes: i,
  setEraserPos: d,
  setGuides: p,
  applyInteraction: $,
  selectNow: h,
  expandToGroups: x,
  toPage: o,
  pendingDrawPointsRef: c,
  drawRafRef: g
}) {
  Xt(() => () => {
    g.current !== null && cancelAnimationFrame(g.current);
  }, [g]), Xt(() => {
    const y = (v, l, w = !0) => {
      const m = o(v.clientX, v.clientY);
      if (v.shiftKey) {
        g.current !== null && (cancelAnimationFrame(g.current), g.current = null), c.current = [], i((M) => M.map((u) => {
          if (u.id !== l || !u.points) return u;
          const k = u.points[0];
          return k ? { ...u, points: [k, [m.x, m.y]] } : u;
        }));
        return;
      }
      const C = w && typeof v.getCoalescedEvents == "function" ? v.getCoalescedEvents() : [];
      if (C.length > 0)
        for (const M of C) {
          const u = o(M.clientX, M.clientY);
          c.current.push([u.x, u.y]);
        }
      c.current.push([m.x, m.y]), g.current === null && (g.current = requestAnimationFrame(() => {
        g.current = null;
        const M = c.current;
        if (M.length === 0) return;
        c.current = [];
        const u = r.current.z;
        i((k) => k.map((f) => {
          if (f.id !== l || !f.points) return f;
          let b = f.points[f.points.length - 1][0], X = f.points[f.points.length - 1][1];
          const Y = [...f.points];
          for (const [P, F] of M)
            Math.hypot(P - b, F - X) < 1 / u || (Y.push([P, F]), b = P, X = F);
          return Y.length === f.points.length ? f : { ...f, points: Y };
        }));
      }));
    }, S = (v) => {
      var C, M;
      e.current.has(v.pointerId) && e.current.set(v.pointerId, { x: v.clientX, y: v.clientY });
      const l = n.current;
      if (l.kind === "none") return;
      const w = r.current;
      if (l.kind === "pinch") {
        if (e.current.size < 2) return;
        const [u, k] = [...e.current.values()], f = Math.hypot(k.x - u.x, k.y - u.y) || 1, b = (u.x + k.x) / 2, X = (u.y + k.y) / 2, Y = (C = t.current) == null ? void 0 : C.getBoundingClientRect();
        if (!Y) return;
        const P = Math.min(jo, Math.max(Bo, l.startZoom * (f / l.startDist))), F = l.camX + (l.startMidX - Y.left) / l.startZoom, L = l.camY + (l.startMidY - Y.top) / l.startZoom;
        s({ x: F - (b - Y.left) / P, y: L - (X - Y.top) / P, z: P });
        return;
      }
      if (l.kind === "pan") {
        s({
          x: l.camX - (v.clientX - l.startX) / w.z,
          y: l.camY - (v.clientY - l.startY) / w.z,
          z: w.z
        });
        return;
      }
      const m = o(v.clientX, v.clientY);
      if (l.kind === "erasing") {
        i((u) => tn(u, m.x, m.y, Ko / w.z, w.z)), d({ x: m.x, y: m.y });
        return;
      }
      if (l.kind === "connect") {
        const u = a.current, k = new Map(u.map((b) => [b.id, b])), f = [...u].reverse().find((b) => b.id !== l.fromId && Le.includes(b.type) && se(b, m.x, m.y, w.z, k, u));
        $({ ...l, toX: m.x, toY: m.y, hoverId: (f == null ? void 0 : f.id) ?? null });
        return;
      }
      if (l.kind === "bend") {
        const u = a.current, k = u.find((T) => T.id === l.id);
        if (!k) return;
        const f = Et(k, new Map(u.map((T) => [T.id, T])), u), b = f.end.x - f.start.x, X = f.end.y - f.start.y, Y = Math.hypot(b, X) || 1, P = (f.start.x + f.end.x) / 2, F = (f.start.y + f.end.y) / 2, L = (m.x - P) * (-X / Y) + (m.y - F) * (b / Y);
        i((T) => T.map((W) => W.id === l.id ? { ...W, bend: L } : W));
        return;
      }
      if (l.kind === "orthogonal-segment") {
        const u = a.current, k = u.find((L) => L.id === l.id);
        if (!k) return;
        const f = Et(k, new Map(u.map((L) => [L.id, L])), u), b = f.routing === "orthogonal" ? f.pathPoints : void 0;
        if (!b || b.length < 2) return;
        const X = b[l.segmentIndex], Y = b[l.segmentIndex + 1];
        if (!X || !Y) return;
        const P = X.x === Y.x ? m.x : m.y, F = Rn(b, l.segmentIndex, P);
        i((L) => L.map((T) => T.id === l.id ? { ...T, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: F.slice(1, -1).map((W) => ({ x: W.x, y: W.y })) } : T));
        return;
      }
      if (l.kind === "arrow-endpoint") {
        const u = a.current, k = u.find((F) => F.id === l.id);
        if (!k) return;
        const f = new Map(u.map((F) => [F.id, F])), b = Et(k, f, u), X = l.endpoint === "start" ? b.end : b.start, Y = [...u].reverse().find((F) => F.id !== k.id && Le.includes(F.type) && se(F, m.x, m.y, w.z, f, u)), P = Y ? Wt(Y, X.x, X.y) : { x: m.x, y: m.y };
        $({ ...l, hoverId: (Y == null ? void 0 : Y.id) ?? null }), i((F) => F.map((L) => {
          if (L.id !== k.id) return L;
          const T = l.endpoint === "start" ? P : X, W = l.endpoint === "end" ? P : X;
          return {
            ...L,
            x: T.x,
            y: T.y,
            w: W.x - T.x,
            h: W.y - T.y,
            fromId: l.endpoint === "start" ? Y == null ? void 0 : Y.id : L.fromId,
            toId: l.endpoint === "end" ? Y == null ? void 0 : Y.id : L.toId
          };
        }));
        return;
      }
      if (l.kind === "marquee") {
        $({ ...l, curX: m.x, curY: m.y });
        const u = Math.min(l.startX, m.x), k = Math.max(l.startX, m.x), f = Math.min(l.startY, m.y), b = Math.max(l.startY, m.y), X = Math.min(l.screenStartX, v.clientX), Y = Math.max(l.screenStartX, v.clientX), P = Math.min(l.screenStartY, v.clientY), F = Math.max(l.screenStartY, v.clientY), L = /* @__PURE__ */ new Map();
        (M = t.current) == null || M.querySelectorAll("[data-canvas-shape-id]").forEach((W) => {
          const K = W.dataset.canvasShapeId;
          K && L.set(K, W.getBoundingClientRect());
        });
        const T = a.current.filter((W) => {
          const K = L.get(W.id);
          if (K)
            return K.right >= X && K.left <= Y && K.bottom >= P && K.top <= F;
          const I = at(W);
          return I.maxX >= u && I.minX <= k && I.maxY >= f && I.minY <= b;
        }).map((W) => W.id);
        h(x(new Set(T)));
        return;
      }
      if (l.kind === "move") {
        let u = m.x - l.startX, k = m.y - l.startY;
        const f = l.origin, b = (() => {
          let P = 1 / 0, F = 1 / 0, L = -1 / 0, T = -1 / 0;
          return f.forEach((W) => {
            const K = at({ ...W, x: W.x + u, y: W.y + k });
            P = Math.min(P, K.minX), F = Math.min(F, K.minY), L = Math.max(L, K.maxX), T = Math.max(T, K.maxY);
          }), { minX: P, minY: F, maxX: L, maxY: T };
        })(), X = a.current.filter((P) => !f.has(P.id)), Y = Zn(b, X, w.z);
        u += Y.dx, k += Y.dy, p(Y.guides), i((P) => P.map((F) => {
          var T;
          const L = f.get(F.id);
          return L ? {
            ...F,
            x: L.x + u,
            y: L.y + k,
            points: (T = L.points) == null ? void 0 : T.map(([W, K]) => [W + u, K + k]),
            ...L.type === "arrow" && L.orthogonalWaypoints ? { orthogonalWaypoints: L.orthogonalWaypoints.map((W) => ({ x: W.x + u, y: W.y + k })) } : {}
          } : F;
        }));
        return;
      }
      if (l.kind === "drawing") {
        y(v, l.id);
        return;
      }
      if (l.kind === "creating") {
        i((u) => u.map((k) => k.id === l.id ? { ...k, w: m.x - l.startX, h: m.y - l.startY } : k));
        return;
      }
      if (l.kind === "rotate") {
        const u = a.current.find((X) => X.id === l.id);
        if (!u) return;
        const k = St(u), f = Math.atan2(m.y - k.y, m.x - k.x);
        let b = l.startRotation + (f - l.startAngle);
        v.shiftKey && (b = Math.round(b / (Math.PI / 12)) * (Math.PI / 12)), i((X) => X.map((Y) => Y.id === l.id ? { ...Y, rotation: b } : Y));
        return;
      }
      if (l.kind === "resize") {
        const { start: u, handle: k } = l, f = Ze(u, m.x, m.y);
        i((b) => b.map((X) => {
          if (X.id !== u.id) return X;
          let { x: Y, y: P, w: F, h: L } = u;
          if (k.includes("e") && (F = Math.max(20, f.x - u.x)), k.includes("s") && (L = Math.max(20, f.y - u.y)), k.includes("w")) {
            const T = u.x + u.w;
            Y = Math.min(f.x, T - 20), F = T - Y;
          }
          if (k.includes("n")) {
            const T = u.y + u.h;
            P = Math.min(f.y, T - 20), L = T - P;
          }
          return { ...X, x: Y, y: P, w: F, h: L, manualSize: X.type === "text" ? !0 : X.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", S), () => {
      window.removeEventListener("pointermove", S);
    };
  }, [
    $,
    r,
    t,
    g,
    x,
    n,
    c,
    e,
    h,
    s,
    d,
    p,
    i,
    a,
    o
  ]);
}
function qo(t) {
  const e = Z([]), n = Z(null), r = { ...t, pendingDrawPointsRef: e, drawRafRef: n };
  Go(r), Vo(r);
}
function Ro({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: r,
  cameraRef: a,
  shapesRef: s,
  editingIdRef: i,
  toolRef: d,
  activeColorRef: p,
  drawStrokeWidth: $,
  camera: h,
  shapes: x,
  selected: o,
  isSpaceDown: c,
  textualTypes: g,
  setCamera: y,
  setShapes: S,
  setEditingId: v,
  setEraserPos: l,
  setGuides: w,
  setAnnouncement: m,
  applyInteraction: C,
  selectNow: M,
  beginHistory: u,
  endHistory: k,
  commit: f,
  onToolChange: b,
  expandToGroups: X,
  toPage: Y,
  createId: P
}) {
  const F = Ho({
    containerRef: t,
    editorRef: e,
    pointers: n,
    interactionRef: r,
    cameraRef: a,
    shapesRef: s,
    editingIdRef: i,
    toolRef: d,
    activeColorRef: p,
    drawStrokeWidth: $,
    camera: h,
    shapes: x,
    selected: o,
    isSpaceDown: c,
    textualTypes: g,
    setShapes: S,
    setEditingId: v,
    applyInteraction: C,
    selectNow: M,
    beginHistory: u,
    commit: f,
    onToolChange: b,
    expandToGroups: X,
    toPage: Y,
    createId: P
  });
  return qo({
    containerRef: t,
    pointers: n,
    interactionRef: r,
    cameraRef: a,
    shapesRef: s,
    setCamera: y,
    setShapes: S,
    setEditingId: v,
    setEraserPos: l,
    setGuides: w,
    setAnnouncement: m,
    applyInteraction: C,
    selectNow: M,
    endHistory: k,
    commit: f,
    onToolChange: b,
    expandToGroups: X,
    toPage: Y,
    createId: P
  }), F;
}
function Qo(t) {
  Do(t);
  const e = Pt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return Oo({ ...t, toolRef: e }), Ro(t);
}
function Zo({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: r,
  zoom: a
}) {
  const s = n || r.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", i = t ? j.gridDark : j.gridLight, d = 40 * a;
  return { cursor: s, gridColor: i, gridSize: d, strokeColorOf: ($) => $.strokeColor ? Ue($) : $.color ? ot[$.color].border : t ? "var(--canvas-slate-200)" : j.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = Un, document.head.appendChild(t);
}
const Te = 0.1, Ae = 4, De = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function cn(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function We(t, e, n) {
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
        return cn(r);
    }
  });
}
function Jo(t, e, n) {
  return t.map((r) => e.has(r.id) && r.type === "draw" ? { ...r, ...n } : r);
}
function Oe(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const ir = $n(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: r,
  drawStrokeWidth: a = 4,
  onToolChange: s,
  onDirty: i,
  onZoomChange: d,
  onSelectionChange: p,
  shapes: $,
  onShapesChange: h,
  peerCursors: x,
  onLocalCursor: o,
  renderDiagram: c
}, g) {
  var Me, ze;
  const {
    containerRef: y,
    editorRef: S,
    setLocalShapes: v,
    controlled: l,
    shapes: w,
    setShapes: m,
    camera: C,
    setCamera: M,
    cameraRef: u,
    selected: k,
    selectedRef: f,
    editingId: b,
    setEditingId: X,
    editingIdRef: Y,
    interaction: P,
    interactionRef: F,
    applyInteraction: L,
    isSpaceDown: T,
    setIsSpaceDown: W,
    guides: K,
    setGuides: I,
    announcement: E,
    setAnnouncement: A,
    showInspectorPalette: V,
    setShowInspectorPalette: R,
    eraserPos: U,
    setEraserPos: tt,
    setActiveColor: ut,
    activeColorRef: it,
    installedFontFamilies: mt,
    pointers: Yt,
    past: Nt,
    future: G,
    selectNow: et,
    commit: rt,
    deleteSelection: yt,
    beginHistory: xt,
    endHistory: wt,
    toPage: Q,
    viewportCentre: kt,
    expandToGroups: $t,
    toolRef: ct,
    shapesRef: st
  } = Yo({ boardIdentity: e, tool: r, controlledShapes: $, onShapesChange: h, onDirty: i }), D = Io({
    containerRef: y,
    shapesRef: st,
    selectedRef: f,
    commit: rt,
    deleteSelection: yt,
    selectNow: et,
    setAnnouncement: A,
    createId: Oe
  }), {
    inspectorSelection: _,
    inspectorShape: H,
    onContainerPointerMove: J,
    onContainerPointerLeave: Mt
  } = No({
    containerRef: y,
    camera: C,
    setCamera: M,
    minZoom: Te,
    maxZoom: Ae,
    shapes: w,
    selected: k,
    editingId: b,
    textualTypes: De,
    onZoomChange: d,
    onSelectionChange: p,
    onLocalCursor: o,
    toPage: Q
  }), zt = Gt.useCallback((lt) => {
    const Zt = new Set(f.current);
    Zt.size !== 0 && rt((Jt) => We(Jt, Zt, lt));
  }, [rt, f]), {
    onPointerDown: z,
    onResizeHandleDown: O,
    onRotateHandleDown: q,
    onConnectHandleDown: ht,
    onBendHandleDown: Ct,
    onOrthogonalSegmentHandleDown: jt,
    onArrowEndpointDown: sn
  } = Qo({
    ref: g,
    containerRef: y,
    editorRef: S,
    pointers: Yt,
    interactionRef: F,
    cameraRef: u,
    shapesRef: st,
    toolRef: ct,
    activeColorRef: it,
    drawStrokeWidth: a,
    setSelectedStrokeWidth: zt,
    camera: C,
    shapes: w,
    selected: k,
    isSpaceDown: T,
    setCamera: M,
    setShapes: m,
    setEditingId: X,
    setEraserPos: tt,
    setGuides: I,
    setAnnouncement: A,
    applyInteraction: L,
    selectNow: et,
    selectionActions: D,
    past: Nt,
    future: G,
    beginHistory: xt,
    endHistory: wt,
    commit: rt,
    deleteSelection: yt,
    onDirty: i,
    onToolChange: s,
    controlled: l,
    isDarkMode: n,
    minZoom: Te,
    maxZoom: Ae,
    textualTypes: De,
    selectedRef: f,
    editingIdRef: Y,
    setIsSpaceDown: W,
    viewportCentre: kt,
    setLocalShapes: v,
    expandToGroups: $t,
    toPage: Q,
    createId: Oe
  }), { cursor: ln, gridColor: dn, gridSize: we, strokeColorOf: un } = Zo({
    isDarkMode: n,
    tool: r === "highlighter" ? "draw" : r,
    isSpaceDown: T,
    interaction: P,
    zoom: C.z
  }), be = (lt) => {
    const Zt = f.current, Jt = Y.current, Kt = new Set(Zt);
    if (Jt && Kt.add(Jt), Kt.size === 0) return;
    const Ce = "strokeWidth" in lt, wn = Object.keys(lt).every((ft) => ft === "color" || ft === "fillColor" || ft === "strokeColor" || ft === "strokeWidth");
    if (_.length > 0 && _.every((ft) => ft.type === "draw") && wn) {
      const ft = "color" in lt ? lt.color : void 0, gt = "strokeWidth" in lt ? lt.strokeWidth : void 0, Xe = "strokeColor" in lt ? lt.strokeColor : void 0;
      rt((bn) => Jo(bn, Kt, {
        ...ft !== void 0 ? { color: ft } : {},
        ...gt !== void 0 ? { strokeWidth: gt } : {},
        ...Xe !== void 0 ? { strokeColor: Xe } : {}
      }));
      return;
    }
    if (Ce) {
      const ft = lt.strokeWidth;
      if (ft !== void 0 && Object.keys(lt).length === 1) {
        rt((gt) => We(gt, Kt, ft));
        return;
      }
    }
    rt((ft) => ft.map((gt) => {
      if (!Kt.has(gt.id)) return gt;
      if (!Ce) return { ...gt, ...lt };
      switch (gt.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...gt, ...lt };
        case "note":
        case "card":
        case "text":
        case "image":
          return gt;
        case "draw":
          return { ...gt, ...lt };
        default:
          return cn(gt);
      }
    }));
  }, {
    commitEditorHtml: xn,
    applyFormat: hn,
    applyList: fn,
    onEditorKeyDown: vn,
    applyCustomFontFamily: pn
  } = So({
    editorRef: S,
    editingId: b,
    setShapes: m,
    setAnnouncement: A,
    onDirty: i,
    patchSelected: be
  }), { renderEditor: mn, renderShapeBody: gn } = Co({
    camera: C,
    editingId: b,
    isDarkMode: n,
    editorRef: S,
    commitEditorHtml: xn,
    onEditorKeyDown: vn,
    setShapes: m,
    onDirty: i,
    renderDiagram: c
  }), yn = P.kind === "marquee" ? P : null, { shapeById: ke, visiblePaintOrder: $e } = Xo({
    containerRef: y,
    shapesRef: st,
    shapes: w,
    camera: C,
    selected: k,
    editingId: b,
    boardIdentity: e
  });
  return /* @__PURE__ */ B(
    "div",
    {
      ref: y,
      onPointerDown: z,
      onPointerMove: J,
      onPointerLeave: Mt,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": r,
      "data-canvas-camera-x": C.x,
      "data-canvas-camera-y": C.y,
      "data-canvas-camera-z": C.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: ln,
        background: n ? j.canvasDark : j.canvasLight,
        backgroundImage: `radial-gradient(${dn} 1px, transparent 1px)`,
        backgroundSize: `${we}px ${we}px`,
        backgroundPosition: `${-C.x * C.z}px ${-C.y * C.z}px`
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
          eo,
          {
            visiblePaintOrder: $e,
            selected: k,
            shapeById: ke,
            allShapes: st.current,
            camera: C,
            interaction: P,
            eraserPos: U,
            guides: K,
            marquee: yn,
            strokeColorOf: un
          }
        ),
        /* @__PURE__ */ N(
          mo,
          {
            visiblePaintOrder: $e,
            selected: k,
            editingId: b,
            camera: C,
            shapeById: ke,
            allShapes: st.current,
            peerCursors: x,
            isDarkMode: n,
            renderEditor: mn,
            renderShapeBody: gn,
            setEditingId: X,
            onBendHandleDown: Ct,
            onOrthogonalSegmentHandleDown: jt,
            onResizeHandleDown: O,
            onRotateHandleDown: q,
            onConnectHandleDown: ht,
            onArrowEndpointDown: sn
          }
        ),
        H && /* @__PURE__ */ N(
          zo,
          {
            shape: H,
            selection: _,
            selectionActions: D,
            shapes: w,
            camera: C,
            canvasSize: { width: ((Me = y.current) == null ? void 0 : Me.clientWidth) ?? 380, height: ((ze = y.current) == null ? void 0 : ze.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!b,
            showPalette: V,
            installedFontFamilies: mt,
            setShowPalette: R,
            setActiveColor: ut,
            patchSelected: be,
            applyFormat: hn,
            applyList: fn,
            applyCustomFontFamily: pn
          }
        )
      ]
    }
  );
});
export {
  ot as CANVAS_COLORS,
  Xn as CANVAS_COLOR_KEYS,
  It as CANVAS_FONTS,
  ir as InfiniteCanvas,
  Nn as SHAPE_TOOLS,
  Jo as applySelectedDrawStyle,
  We as applySelectedStrokeWidth,
  ar as diagramTemplate,
  go as getInspectorGroups,
  ye as isDiagramShape
};
