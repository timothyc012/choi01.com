import { jsx as Y, jsxs as K, Fragment as Ut } from "react/jsx-runtime";
import me, { useState as st, useRef as q, useEffect as Ct, useLayoutEffect as Vt, useMemo as Pt, useCallback as mt, useImperativeHandle as so, forwardRef as lo } from "react";
import { p as uo, i as Le, k as Ee, a as it, v as ho, c as Nt, s as xo, b as fo, d as te, h as vo, C as po, S as mo } from "./document-CLNFlHux.js";
import { Minus as go, Plus as yo, ChevronDown as wo, AlignLeft as bo, AlignCenter as ko, AlignRight as $o, List as Mo, ListOrdered as zo, Bold as So, Italic as Co, Underline as Xo, Group as Yo, Ungroup as No, Copy as Po, Trash2 as Io } from "lucide-react";
const Lo = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', U = Object.freeze({
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
}), gn = 12;
function Xe(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function ue(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function de(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function he(t, e, n, o) {
  const c = de(t, e, n), a = de(t, e, o), l = de(n, o, t), x = de(n, o, e);
  return Math.abs(c) < 1e-6 && ue(t, n, e) || Math.abs(a) < 1e-6 && ue(t, o, e) || Math.abs(l) < 1e-6 && ue(n, t, o) || Math.abs(x) < 1e-6 && ue(n, e, o) ? !0 : c > 0 != a > 0 && l > 0 != x > 0;
}
function Eo(t, e, n) {
  const o = Math.min(t.x, e.x), r = Math.max(t.x, e.x), c = Math.min(t.y, e.y), a = Math.max(t.y, e.y);
  if (r < n.minX || o > n.maxX || a < n.minY || c > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const l = { x: n.minX, y: n.minY }, x = { x: n.maxX, y: n.minY }, k = { x: n.maxX, y: n.maxY }, u = { x: n.minX, y: n.maxY };
  return he(t, e, l, x) || he(t, e, x, k) || he(t, e, k, u) || he(t, e, u, l);
}
function To(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const o of e)
      if (Eo(t[n - 1], t[n], o)) return !0;
  return !1;
}
function Ye(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function Te(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = Ye(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let o = 0;
  for (let c = 1; c < t.length; c++) {
    const a = Math.hypot(t[c].x - t[c - 1].x, t[c].y - t[c - 1].y);
    if (o + a >= n) {
      const l = (n - o) / a;
      return { x: t[c - 1].x + (t[c].x - t[c - 1].x) * l, y: t[c - 1].y + (t[c].y - t[c - 1].y) * l };
    }
    o += a;
  }
  const r = t[t.length - 1];
  return { x: r.x, y: r.y };
}
function oe(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function Ke(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([t, e]), c = Math.min(t, e), a = Math.max(t, e), l = gn * 1.2;
  for (const x of n) {
    const k = (o === "x" ? x.minX : x.minY) - l, u = (o === "x" ? x.maxX : x.maxY) + l, d = (i) => i >= c - l * 4 && i <= a + l * 4;
    d(k) && r.add(k), d(u) && r.add(u);
  }
  return [...r].sort((x, k) => Math.abs(x - t) - Math.abs(k - t));
}
function yn(t) {
  const e = [];
  for (const n of t) {
    const o = e[e.length - 1];
    (!o || o.x !== n.x || o.y !== n.y) && e.push(n);
  }
  return e;
}
function wn(t) {
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
function Fo(t, e, n) {
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
  return wn(o);
}
function Ao(t, e, n) {
  const o = t[e], r = t[e + 1];
  if (!o || !r || !Number.isFinite(n) || o.x !== r.x && o.y !== r.y) return [...t];
  const c = o.x === r.x ? [o, { x: n, y: o.y }, { x: n, y: r.y }, r] : [o, { x: o.x, y: n }, { x: r.x, y: n }, r];
  return wn([
    ...t.slice(0, e),
    ...c,
    ...t.slice(e + 2)
  ]);
}
function ke(t, e) {
  const n = [], o = [];
  for (const c of t) {
    const a = yn(c);
    a.length < 2 || (To(a, e) ? o.push(a) : n.push(a));
  }
  const r = n.length > 0 ? n : o;
  return r.length === 0 ? [] : r.reduce((c, a) => Ye(a) < Ye(c) ? a : c);
}
function Ue(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function Qt(t, e, n, o) {
  const r = Math.min(t, e), c = Math.max(t, e), a = Math.max(48, Math.abs(e - t) * 0.35, gn * 4);
  if (o === "x") {
    if (n === "e") return c + a;
    if (n === "w") return r - a;
  } else {
    if (n === "s") return c + a;
    if (n === "n") return r - a;
  }
  return t <= e ? r - a : c + a;
}
function Wo(t, e, n, o, r) {
  const c = (t.x + e.x) / 2, a = (t.y + e.y) / 2;
  if (n === "u") {
    if (o) {
      const x = Qt(t.x, e.x, t.side, "x");
      return [t, { x, y: t.y }, { x, y: e.y }, e];
    }
    const l = Qt(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: l }, { x: e.x, y: l }, e];
  }
  if (n === "zigzag") {
    if (o) {
      const k = Qt(t.x, e.x, t.side, "x"), u = Qt(t.y, e.y, t.side, "y");
      return r ? [t, { x: k, y: t.y }, { x: k, y: u }, { x: c, y: u }, { x: c, y: e.y }, e] : [t, { x: k, y: t.y }, { x: k, y: u }, { x: e.x, y: u }, e];
    }
    const l = Qt(t.y, e.y, t.side, "y"), x = Qt(t.x, e.x, t.side, "x");
    return r ? [t, { x: t.x, y: l }, { x, y: l }, { x, y: e.y }, e] : [t, { x: t.x, y: l }, { x, y: l }, { x, y: a }, { x: e.x, y: a }, e];
  }
  return [];
}
function bn(t, e, n = [], o = "elbow", r = []) {
  if (r.length > 0) return Fo(t, e, r);
  const c = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), a = e.side ?? (c === "e" || c === "w" ? "w" : "n"), l = c === "e" || c === "w", x = a === "e" || a === "w", k = Ke(t.x, e.x, n, "x"), u = Ke(t.y, e.y, n, "y"), d = [];
  if (l && x) {
    for (const v of k) d.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
    for (const v of u) d.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
  } else if (!l && !x) {
    for (const v of u) d.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
    for (const v of k) d.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  } else if (l) {
    d.push([t, { x: e.x, y: t.y }, e]);
    for (const v of u)
      d.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]), d.push([t, { x: t.x, y: v }, e]);
    for (const v of k) d.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  } else {
    d.push([t, { x: t.x, y: e.y }, e]);
    for (const v of u)
      d.push([t, { x: t.x, y: v }, e]), d.push([t, { x: t.x, y: v }, { x: e.x, y: v }, e]);
    for (const v of k) d.push([t, { x: v, y: t.y }, { x: v, y: e.y }, e]);
  }
  const i = ke(d, n);
  if (o === "elbow") return i;
  if (o === "reverse") {
    const v = Ue(i), S = ke(d.filter((b) => Ue(b) !== v), n);
    return S.length > 1 ? S : i;
  }
  const s = Wo(t, e, o, l, x), f = ke([s], n);
  return f.length > 1 ? f : i;
}
function kn(t) {
  return t.length < 2 ? 0 : oe(t[t.length - 2], t[t.length - 1]);
}
const { PI: Do } = Math, re = Do + 1e-4, Ve = 0.5, Ge = [1, 1];
function Re(t, e, n, o = (r) => r) {
  return t * o(0.5 - e * (0.5 - n));
}
const { min: $e } = Math;
function $n(t, e, n) {
  let o = $e(1, e / n);
  return $e(1, t + ($e(1, 1 - o) - t) * (o * 0.275));
}
function Oo(t) {
  return [-t[0], -t[1]];
}
function Lt(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function qe(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function Ht(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function Ne(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function Ot(t, e) {
  return [t[0] * e, t[1] * e];
}
function Me(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function Ho(t, e) {
  return [t[0] / e, t[1] / e];
}
function Mn(t) {
  return [t[1], -t[0]];
}
function ze(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function Ze(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function _o(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function Bo(t) {
  return Math.hypot(t[0], t[1]);
}
function Qe(t, e) {
  let n = t[0] - e[0], o = t[1] - e[1];
  return n * n + o * o;
}
function zn(t) {
  return Ho(t, Bo(t));
}
function jo(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function Fe(t, e, n) {
  let o = Math.sin(n), r = Math.cos(n), c = t[0] - e[0], a = t[1] - e[1], l = c * r - a * o, x = c * o + a * r;
  return [l + e[0], x + e[1]];
}
function Je(t, e, n, o) {
  let r = Math.sin(o), c = Math.cos(o), a = e[0] - n[0], l = e[1] - n[1], x = a * c - l * r, k = a * r + l * c;
  return t[0] = x + n[0], t[1] = k + n[1], t;
}
function tn(t, e, n) {
  return Lt(t, Ot(Ht(e, t), n));
}
function Ko(t, e, n, o) {
  let r = n[0] - e[0], c = n[1] - e[1];
  return t[0] = e[0] + r * o, t[1] = e[1] + c * o, t;
}
function Sn(t, e, n) {
  return Lt(t, Ot(e, n));
}
const xt = [0, 0], At = [0, 0], Wt = [0, 0];
function Uo(t, e) {
  let n = Sn(t, zn(Mn(Ht(t, Lt(t, [1, 1])))), -e), o = [], r = 1 / 13;
  for (let c = r; c <= 1; c += r) o.push(Fe(n, t, re * 2 * c));
  return o;
}
function Vo(t, e, n) {
  let o = [], r = 1 / n;
  for (let c = r; c <= 1; c += r) o.push(Fe(e, t, re * c));
  return o;
}
function Go(t, e, n) {
  let o = Ht(e, n), r = Ot(o, 0.5), c = Ot(o, 0.51);
  return [Ht(t, r), Ht(t, c), Lt(t, c), Lt(t, r)];
}
function Ro(t, e, n, o) {
  let r = [], c = Sn(t, e, n), a = 1 / o;
  for (let l = a; l < 1; l += a) r.push(Fe(c, t, re * 3 * l));
  return r;
}
function qo(t, e, n) {
  return [Lt(t, Ot(e, n)), Lt(t, Ot(e, n * 0.99)), Ht(t, Ot(e, n * 0.99)), Ht(t, Ot(e, n))];
}
function en(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function Zo(t, e, n) {
  return t.slice(0, 10).reduce((o, r) => {
    let c = r.pressure;
    return e && (c = $n(o, r.distance, n)), (o + c) / 2;
  }, t[0].pressure);
}
function Qo(t, e = {}) {
  let { size: n = 16, smoothing: o = 0.5, thinning: r = 0.5, simulatePressure: c = !0, easing: a = (L) => L, start: l = {}, end: x = {}, last: k = !1 } = e, { cap: u = !0, easing: d = (L) => L * (2 - L) } = l, { cap: i = !0, easing: s = (L) => --L * L * L + 1 } = x;
  if (t.length === 0 || n <= 0) return [];
  let f = t[t.length - 1].runningLength, v = en(l.taper, n, f), S = en(x.taper, n, f), b = (n * o) ** 2, M = [], w = [], y = Zo(t, c, n), h = Re(n, r, t[t.length - 1].pressure, a), X, p = t[0].vector, C = t[0].point, z = C, m = C, $ = z, P = !1;
  for (let L = 0; L < t.length; L++) {
    let { pressure: O } = t[L], { point: H, vector: F, distance: W, runningLength: N } = t[L], _ = L === t.length - 1;
    if (!_ && f - N < 3) continue;
    r ? (c && (O = $n(y, W, n)), h = Re(n, r, O, a)) : h = n / 2, X === void 0 && (X = h);
    let V = N < v ? d(N / v) : 1, Z = f - N < S ? s((f - N) / S) : 1;
    h = Math.max(0.01, h * Math.min(V, Z));
    let ot = (_ ? t[L] : t[L + 1]).vector, vt = _ ? 1 : Ze(F, ot), G = Ze(F, p) < 0 && !P, lt = vt !== null && vt < 0;
    if (G || lt) {
      ze(xt, p), Me(xt, xt, h);
      for (let ut = 0; ut <= 1; ut += 0.07692307692307693) Ne(At, H, xt), Je(At, At, H, re * ut), m = [At[0], At[1]], M.push(m), qe(Wt, H, xt), Je(Wt, Wt, H, re * -ut), $ = [Wt[0], Wt[1]], w.push($);
      C = m, z = $, lt && (P = !0);
      continue;
    }
    if (P = !1, _) {
      ze(xt, F), Me(xt, xt, h), M.push(Ht(H, xt)), w.push(Lt(H, xt));
      continue;
    }
    Ko(xt, ot, F, vt), ze(xt, xt), Me(xt, xt, h), Ne(At, H, xt), m = [At[0], At[1]], (L <= 1 || Qe(C, m) > b) && (M.push(m), C = m), qe(Wt, H, xt), $ = [Wt[0], Wt[1]], (L <= 1 || Qe(z, $) > b) && (w.push($), z = $), y = O, p = F;
  }
  let T = [t[0].point[0], t[0].point[1]], A = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : Lt(t[0].point, [1, 1]), I = [], D = [];
  if (t.length === 1) {
    if (!(v || S) || k) return Uo(T, X || h);
  } else {
    v || S && t.length === 1 || (u ? I.push(...Vo(T, w[0], 13)) : I.push(...Go(T, M[0], w[0])));
    let L = Mn(Oo(t[t.length - 1].vector));
    S || v && t.length === 1 ? D.push(A) : i ? D.push(...Ro(A, L, h, 29)) : D.push(...qo(A, L, h));
  }
  return M.concat(D, w.reverse(), I);
}
const nn = [0, 0];
function on(t) {
  return t != null && t >= 0;
}
function Jo(t, e = {}) {
  var i;
  let { streamline: n = 0.5, size: o = 16, last: r = !1 } = e;
  if (t.length === 0) return [];
  let c = 0.15 + (1 - n) * 0.85, a = Array.isArray(t[0]) ? t : t.map(({ x: s, y: f, pressure: v = Ve }) => [s, f, v]);
  if (a.length === 2) {
    let s = a[1];
    a = a.slice(0, -1);
    for (let f = 1; f < 5; f++) a.push(tn(a[0], s, f / 4));
  }
  a.length === 1 && (a = [...a, [...Lt(a[0], Ge), ...a[0].slice(2)]]);
  let l = [{ point: [a[0][0], a[0][1]], pressure: on(a[0][2]) ? a[0][2] : 0.25, vector: [...Ge], distance: 0, runningLength: 0 }], x = !1, k = 0, u = l[0], d = a.length - 1;
  for (let s = 1; s < a.length; s++) {
    let f = r && s === d ? [a[s][0], a[s][1]] : tn(u.point, a[s], c);
    if (_o(u.point, f)) continue;
    let v = jo(f, u.point);
    if (k += v, s < d && !x) {
      if (k < o) continue;
      x = !0;
    }
    Ne(nn, u.point, f), u = { point: f, pressure: on(a[s][2]) ? a[s][2] : Ve, vector: zn(nn), distance: v, runningLength: k }, l.push(u);
  }
  return l[0].vector = ((i = l[1]) == null ? void 0 : i.vector) || [0, 0], l;
}
function tr(t, e = {}) {
  return Qo(Jo(t, e), e);
}
var er = tr;
function ge(t) {
  if (t.fillColor)
    try {
      return Ee(t.fillColor);
    } catch {
      return t.color ? it[t.color].bg : it.blue.bg;
    }
  return t.color ? it[t.color].bg : it.blue.bg;
}
function Cn(t) {
  if (t.strokeColor)
    try {
      return Ee(t.strokeColor);
    } catch {
      return t.color ? it[t.color].border : "#2563eb";
    }
  return t.color ? it[t.color].border : "#2563eb";
}
function Xn(t) {
  return Cn(t);
}
function Gt(t) {
  if (t.textColor)
    try {
      return Ee(t.textColor);
    } catch {
      return t.color ? it[t.color].text : "#0f172a";
    }
  return t.color ? it[t.color].text : "#0f172a";
}
function Yn(t, e, n) {
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
      const o = e / 2, r = n / 2, c = Math.min(e, n) / 2, a = c * 0.4, l = [];
      for (let x = 0; x < 10; x++) {
        const k = Math.PI / 5 * x - Math.PI / 2, u = x % 2 === 0 ? c : a;
        l.push(`${o + u * Math.cos(k)},${r + u * Math.sin(k)}`);
      }
      return l.join(" ");
    }
    default:
      return "";
  }
}
function Nn(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [r, c] = t[o], [a, l] = t[o + 1];
    e += ` Q ${r} ${c} ${(r + a) / 2} ${(c + l) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function nr(t, e) {
  return e === "highlighter" ? { size: t * 2.5, thinning: 0, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: t, thinning: 0.5, smoothing: 0.62, streamline: 0.62, last: !0 };
}
function Pn(t, e) {
  return e === "highlighter" ? t * 1.25 : t / 2;
}
function In(t, e, n) {
  return t.length < 2 ? [] : er(t, nr(e, n));
}
function or(t, e, n) {
  if (t.length === 0) return "";
  if (t.length === 1) {
    const [r, c] = t[0], a = Pn(e, n);
    return `M ${r - a} ${c} A ${a} ${a} 0 1 0 ${r + a} ${c} A ${a} ${a} 0 1 0 ${r - a} ${c} Z`;
  }
  const o = In(t, e, n);
  return o.length === 0 ? "" : o.reduce(
    (r, [c, a], l) => r + (l === 0 ? `M ${c} ${a}` : ` L ${c} ${a}`),
    ""
  ) + " Z";
}
const rn = /* @__PURE__ */ new WeakMap();
function rr(t) {
  const e = rn.get(t);
  if (e !== void 0) return e;
  const n = t.points, o = t.type === "draw" && n && n.length >= 2 ? or(n, t.strokeWidth ?? 3, t.drawMode ?? "pen") : "";
  return rn.set(t, o), o;
}
function Dt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function Ln(t) {
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
      const l = a;
      if (l.tagName === "BR") {
        n.push([]);
        return;
      }
      const x = { bold: c.bold || l.tagName === "B" || l.tagName === "STRONG", italic: c.italic || l.tagName === "I" || l.tagName === "EM", underline: c.underline || l.tagName === "U" }, k = l.tagName === "DIV" || l.tagName === "P" || l.tagName === "LI";
      k && n[n.length - 1].length > 0 && n.push([]), o(l, x), k && n.push([]);
    });
  };
  return o(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((r) => r.length > 0);
}
const an = /* @__PURE__ */ new WeakMap();
function we(t) {
  const e = an.get(t);
  if (e !== void 0) return e;
  const n = t.html ? Le(t.html) : t.text ? Dt(t.text).replace(/\n/g, "<br>") : "";
  return an.set(t, n), n;
}
function Pe(t) {
  if (t)
    try {
      return ho(t);
    } catch {
      return;
    }
}
function En(t) {
  try {
    return uo(t);
  } catch {
    return null;
  }
}
function ce(t) {
  return t.html ? Ln(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const xe = 12;
function _t(t) {
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
function ft(t) {
  const e = t.rotation ?? 0, n = _t(t);
  if (!e) return n;
  const o = Xt(t), r = Math.cos(e), c = Math.sin(e), a = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([k, u]) => {
    const d = k - o.x, i = u - o.y;
    return [o.x + d * r - i * c, o.y + d * c + i * r];
  }), l = a.map((k) => k[0]), x = a.map((k) => k[1]);
  return { minX: Math.min(...l), minY: Math.min(...x), maxX: Math.max(...l), maxY: Math.max(...x) };
}
function Tn(t, e, n) {
  const o = t.rotation ?? 0;
  if (!o) return { x: e, y: n };
  const r = Xt(t), c = Math.cos(-o), a = Math.sin(-o), l = e - r.x, x = n - r.y;
  return { x: r.x + l * c - x * a, y: r.y + l * a + x * c };
}
function fe(t, e, n, o, r, c) {
  const a = r - n, l = c - o, x = a * a + l * l, k = x === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * a + (e - o) * l) / x));
  return Math.hypot(t - (n + k * a), e - (o + k * l));
}
function ye(t, e, n, o, r, c) {
  const a = 8 / o;
  if (t.type === "arrow") {
    const k = (t.strokeWidth ?? 2.5) / o / 2 + a, u = It(t, r ?? /* @__PURE__ */ new Map(), c);
    if (u.routing === "orthogonal" && u.pathPoints && u.pathPoints.length > 1) {
      for (let i = 1; i < u.pathPoints.length; i++) {
        const s = u.pathPoints[i - 1], f = u.pathPoints[i];
        if (fe(e, n, s.x, s.y, f.x, f.y) <= k) return !0;
      }
      return !1;
    }
    if (u.bend === 0) return fe(e, n, u.start.x, u.start.y, u.end.x, u.end.y) <= k;
    let d = u.start;
    for (let i = 1; i <= 16; i++) {
      const s = ie(i / 16, u.start, u.control, u.end);
      if (fe(e, n, d.x, d.y, s.x, s.y) <= k) return !0;
      d = s;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const d = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / o / 2 + a;
    if (t.points.length === 1) {
      const [i, s] = t.points[0];
      return Math.hypot(e - i, n - s) <= d;
    }
    for (let i = 1; i < t.points.length; i++) {
      const [s, f] = t.points[i - 1], [v, S] = t.points[i];
      if (fe(e, n, s, f, v, S) <= d) return !0;
    }
    return !1;
  }
  const l = Tn(t, e, n), x = _t(t);
  if (t.type === "frame") {
    const k = l.x >= x.minX - a && l.x <= x.maxX + a && l.y >= x.minY - a && l.y <= x.maxY + a && (l.x <= x.minX + a || l.x >= x.maxX - a || l.y <= x.minY + a || l.y >= x.maxY - a), u = l.x >= x.minX - a && l.x <= x.maxX + a && l.y >= x.minY - 28 / o && l.y <= x.minY;
    return k || u;
  }
  return l.x >= x.minX - a && l.x <= x.maxX + a && l.y >= x.minY - a && l.y <= x.maxY + a;
}
function Rt(t, e, n) {
  const o = _t(t), r = (o.minX + o.maxX) / 2, c = (o.minY + o.maxY) / 2, a = e - r, l = n - c;
  if (a === 0 && l === 0) return { x: r, y: c, side: "e" };
  const x = (o.maxX - o.minX) / 2, k = (o.maxY - o.minY) / 2, u = x === 0 ? 1 / 0 : Math.abs(x / a), d = k === 0 ? 1 / 0 : Math.abs(k / l);
  return u <= d ? { x: r + a * u, y: c + l * u, side: a >= 0 ? "e" : "w" } : { x: r + a * d, y: c + l * d, side: l >= 0 ? "s" : "n" };
}
function Fn(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([e.id, n, o]);
  return t.filter((c) => !r.has(c.id)).map((c) => {
    const a = ft(c);
    return { minX: a.minX - xe, minY: a.minY - xe, maxX: a.maxX + xe, maxY: a.maxY + xe };
  }).filter((c) => c.maxX > c.minX && c.maxY > c.minY);
}
function It(t, e, n = []) {
  const o = t.fromId ? e.get(t.fromId) : void 0, r = t.toId ? e.get(t.toId) : void 0;
  let c = { x: t.x, y: t.y }, a = { x: t.x + t.w, y: t.y + t.h };
  if (o && r) {
    const f = Xt(o), v = Xt(r);
    c = Rt(o, v.x, v.y), a = Rt(r, f.x, f.y);
  } else o ? c = Rt(o, a.x, a.y) : r && (a = Rt(r, c.x, c.y));
  const l = (c.x + a.x) / 2, x = (c.y + a.y) / 2, k = t.bend ?? 0;
  let u = { x: l, y: x };
  if (k !== 0) {
    const f = a.x - c.x, v = a.y - c.y, S = Math.hypot(f, v) || 1;
    u = { x: l + -v / S * k, y: x + f / S * k };
  }
  const d = !!(o || r), i = t.routing ?? (d ? "orthogonal" : k !== 0 ? "curved" : "straight");
  if (i !== "orthogonal") return { start: c, end: a, control: u, bend: k, routing: i };
  const s = Fn(n, t, o == null ? void 0 : o.id, r == null ? void 0 : r.id);
  return {
    start: c,
    end: a,
    control: u,
    bend: k,
    routing: i,
    pathPoints: yn(bn(c, a, s, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function ie(t, e, n, o) {
  const r = 1 - t;
  return { x: r * r * e.x + 2 * r * t * n.x + t * t * o.x, y: r * r * e.y + 2 * r * t * n.y + t * t * o.y };
}
function An(t, e, n, o, r) {
  const c = [];
  let a = 0;
  for (const l of t) {
    if (l.type !== "draw" || !l.points) {
      if (ye(l, e, n, r)) continue;
      c.push(l);
      continue;
    }
    const x = [];
    let k = [];
    for (const [d, i] of l.points)
      Math.hypot(d - e, i - n) <= o / r ? (k.length > 1 && x.push(k), k = []) : k.push([d, i]);
    if (k.length > 1 && x.push(k), x.length === 0) continue;
    const u = _t(l);
    x.forEach((d) => c.push({ ...l, id: `${l.id}-e${a++}`, points: d, x: u.minX, y: u.minY, w: u.maxX - u.minX, h: u.maxY - u.minY }));
  }
  return c;
}
function ir(t, e, n) {
  const o = 6 / n;
  let r = null, c = null;
  const a = [], l = [t.minX, (t.minX + t.maxX) / 2, t.maxX], x = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const k of e) {
    const u = ft(k), d = [u.minX, (u.minX + u.maxX) / 2, u.maxX], i = [u.minY, (u.minY + u.maxY) / 2, u.maxY];
    for (const s of l) for (const f of d) {
      const v = f - s;
      Math.abs(v) <= o && (!r || Math.abs(v) < Math.abs(r.delta)) && (r = { delta: v, at: f });
    }
    for (const s of x) for (const f of i) {
      const v = f - s;
      Math.abs(v) <= o && (!c || Math.abs(v) < Math.abs(c.delta)) && (c = { delta: v, at: f });
    }
  }
  return r && a.push({ x1: r.at, y1: t.minY - 1e3, x2: r.at, y2: t.maxY + 1e3 }), c && a.push({ x1: t.minX - 1e3, y1: c.at, x2: t.maxX + 1e3, y2: c.at }), { dx: (r == null ? void 0 : r.delta) ?? 0, dy: (c == null ? void 0 : c.delta) ?? 0, guides: a };
}
const ar = 14;
function cr({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: o,
  camera: r,
  interaction: c,
  eraserPos: a,
  guides: l,
  marquee: x,
  strokeColorOf: k
}) {
  return /* @__PURE__ */ Y("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ K("g", { transform: `scale(${r.z}) translate(${-r.x}, ${-r.y})`, children: [
    t.map((u) => {
      if (u.type === "draw" && u.points) {
        const m = u.drawMode ?? "pen", $ = u.strokeWidth ?? 3, P = e.has(u.id) ? U.blue : k(u), T = rr(u);
        return /* @__PURE__ */ Y(
          "path",
          {
            "data-canvas-vector-shape-id": u.id,
            "data-canvas-vector-shape-type": "draw",
            "data-canvas-draw-mode": m,
            "data-canvas-stroke-width": $,
            d: T || Nn(u.points),
            fill: T ? P : "none",
            stroke: T ? "none" : P,
            strokeWidth: $ / r.z,
            strokeOpacity: m === "highlighter" ? 0.35 : void 0,
            fillOpacity: m === "highlighter" ? 0.35 : void 0,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          u.id
        );
      }
      if (u.type !== "arrow") return null;
      const d = e.has(u.id) ? U.blue : k(u), i = It(u, n, o), s = u.strokeWidth ?? 2.5, f = s / r.z, v = Math.max(10, 8 + s * 2), S = Math.max(4, 2 + s), b = v / r.z, M = S / r.z, w = i.routing === "orthogonal" && i.pathPoints ? i.pathPoints : null, y = w && w.length > 1;
      let h, X;
      if (y)
        h = Xe(w), X = kn(w);
      else if (i.routing === "curved") {
        h = `M ${i.start.x} ${i.start.y} Q ${i.control.x} ${i.control.y} ${i.end.x} ${i.end.y}`;
        const m = ie(0.94, i.start, i.control, i.end);
        X = Math.atan2(i.end.y - m.y, i.end.x - m.x);
      } else
        h = `M ${i.start.x} ${i.start.y} L ${i.end.x} ${i.end.y}`, X = Math.atan2(i.end.y - i.start.y, i.end.x - i.start.x);
      const p = y && w.length >= 2 ? oe(w[0], w[1]) : i.routing === "orthogonal" && i.start.side ? i.start.side === "e" ? 0 : i.start.side === "w" ? Math.PI : i.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : oe(i.start, i.end), C = u.strokeStyle === "dashed" ? `${8 / r.z} ${5 / r.z}` : u.strokeStyle === "dotted" ? `${1.5 / r.z} ${4 / r.z}` : void 0, z = (m, $, P, T) => m === "dot" ? /* @__PURE__ */ Y("circle", { "data-canvas-arrow-dot-radius": S, cx: $, cy: P, r: M, fill: d }) : m === "none" ? null : /* @__PURE__ */ Y(
        "polygon",
        {
          "data-canvas-arrowhead-size": v,
          points: `${$},${P} ${$ - b * Math.cos(T - 0.4)},${P - b * Math.sin(T - 0.4)} ${$ - b * Math.cos(T + 0.4)},${P - b * Math.sin(T + 0.4)}`,
          fill: d
        }
      );
      return /* @__PURE__ */ K("g", { "data-canvas-vector-shape-id": u.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": i.routing, "data-canvas-stroke-width": s, children: [
        /* @__PURE__ */ Y("path", { d: h, fill: "none", stroke: d, strokeWidth: f, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: C }),
        z(u.arrowEnd ?? "arrow", i.end.x, i.end.y, X),
        z(u.arrowStart ?? "none", i.start.x, i.start.y, p + Math.PI)
      ] }, u.id);
    }),
    c.kind === "connect" && c.fromId !== void 0 && c.toX !== void 0 && c.toY !== void 0 && (() => {
      const u = n.get(c.fromId);
      if (!u) return null;
      const d = Rt(u, c.toX, c.toY), i = c.hoverId ? n.get(c.hoverId) : null, s = i ? Rt(i, d.x, d.y) : { x: c.toX, y: c.toY }, f = i ? bn(d, s, Fn(o, { id: "__preview" }, u.id, i.id)) : [d, s];
      return /* @__PURE__ */ K("g", { children: [
        /* @__PURE__ */ Y("path", { d: Xe(f), stroke: U.blue, strokeWidth: 2 / r.z, strokeDasharray: `${5 / r.z} ${4 / r.z}` }),
        i ? /* @__PURE__ */ Y("rect", { x: ft(i).minX - 3 / r.z, y: ft(i).minY - 3 / r.z, width: ft(i).maxX - ft(i).minX + 6 / r.z, height: ft(i).maxY - ft(i).minY + 6 / r.z, fill: "none", stroke: U.blue, strokeWidth: 2 / r.z, rx: 6 / r.z }) : /* @__PURE__ */ Y("circle", { cx: s.x, cy: s.y, r: 5 / r.z, fill: U.blue })
      ] });
    })(),
    a && /* @__PURE__ */ Y("circle", { cx: a.x, cy: a.y, r: ar / r.z, fill: U.roseSoft, stroke: U.rose, strokeWidth: 1 / r.z }),
    l.map((u, d) => /* @__PURE__ */ Y("line", { x1: u.x1, y1: u.y1, x2: u.x2, y2: u.y2, stroke: U.pink, strokeWidth: 1 / r.z, strokeDasharray: `${4 / r.z} ${4 / r.z}` }, `guide-${d}`)),
    x && /* @__PURE__ */ Y("rect", { x: Math.min(x.startX, x.curX), y: Math.min(x.startY, x.curY), width: Math.abs(x.curX - x.startX), height: Math.abs(x.curY - x.startY), fill: U.marqueeFill, stroke: U.blue, strokeWidth: 1 / r.z })
  ] }) });
}
const sr = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], lr = /* @__PURE__ */ new Set([
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
]), ur = [
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
function be(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function Wn(t) {
  return lr.has(t.trim().toLowerCase());
}
function Dn(t) {
  const e = be(t);
  return e ? Wn(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function dr(t) {
  return be(t).split(",").map((e) => e.trim()).filter(Boolean).map(Dn).filter(Boolean).join(", ");
}
function On(t) {
  return be(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function ee(t) {
  return t.split(",").map((e) => be(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !Wn(e));
}
const ve = Array.from(/* @__PURE__ */ new Set([
  ...ur,
  ...ee(Nt.sans.stack),
  ...ee(Nt.serif.stack),
  ...ee(Nt.mono.stack),
  ...ee(Nt.gothic.stack),
  ...ee(Nt.korean.stack)
]));
function hr() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return ve;
  const t = ve.filter((e) => {
    const n = Dn(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : ve;
}
const xr = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, fr = 24, vr = 28, Hn = 720;
function wt(t) {
  return t.fontSize ?? xr[t.type] ?? 14;
}
function bt(t) {
  var e;
  if (!t.fontFamily) return Nt.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = On(xo(t.customFontFamily ?? ""));
    } catch {
    }
    return dr(n) || Nt.sans.stack;
  }
  return ((e = Nt[t.fontFamily]) == null ? void 0 : e.stack) ?? Nt.sans.stack;
}
function Mt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function pr(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function mr(t) {
  var e, n, o;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((o = t.html) != null && o.includes("<ol>")) return "number";
}
function gr(t, e) {
  return {
    w: Math.min(Hn, Math.max(fr, Math.ceil(t))),
    h: Math.max(vr, Math.ceil(e))
  };
}
function yr(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = Le(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${Hn}px`,
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
  const o = n.getBoundingClientRect();
  return n.remove(), gr(o.width, o.height);
}
const wr = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), br = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function kr({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: o,
  shapeById: r,
  allShapes: c,
  peerCursors: a,
  isDarkMode: l,
  renderEditor: x,
  renderShapeBody: k,
  setEditingId: u,
  onBendHandleDown: d,
  onOrthogonalSegmentHandleDown: i,
  onResizeHandleDown: s,
  onRotateHandleDown: f,
  onConnectHandleDown: v,
  onArrowEndpointDown: S
}) {
  return /* @__PURE__ */ K(Ut, { children: [
    /* @__PURE__ */ Y("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((b) => {
      if (b.type === "draw") return null;
      if (b.type === "arrow") {
        const y = It(b, r, c), h = y.routing === "orthogonal" && y.pathPoints ? Te(y.pathPoints) : y.routing === "curved" ? ie(0.5, y.start, y.control, y.end) : { x: (y.start.x + y.end.x) / 2, y: (y.start.y + y.end.y) / 2 }, X = n === b.id, p = we(b), C = e.has(b.id), z = ce(b).trim(), m = p || (C ? "관계 입력" : "");
        return !m && !X ? null : /* @__PURE__ */ Y(me.Fragment, { children: /* @__PURE__ */ Y("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: h.x - 90, top: h.y - 18, width: 180, height: 36 }, onDoubleClick: ($) => {
          $.stopPropagation(), u(b.id);
        }, children: (m || X) && /* @__PURE__ */ Y(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": z ? `관계 설명: ${z}` : "관계 설명 입력",
            title: X ? void 0 : z ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${l ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: wt(b),
              fontFamily: bt(b),
              maxWidth: "100%",
              minWidth: X ? 120 / o.z : void 0,
              minHeight: X ? 28 / o.z : void 0,
              color: b.textColor
            },
            children: X ? x("text-center whitespace-nowrap") : /* @__PURE__ */ Y("span", { dangerouslySetInnerHTML: { __html: m } }, "canvas-view")
          }
        ) }) }, b.id);
      }
      const M = e.has(b.id), w = _t(b);
      return /* @__PURE__ */ K(
        "div",
        {
          "data-canvas-shape-id": b.id,
          "data-canvas-shape-type": b.type,
          "data-canvas-selected": M ? "true" : void 0,
          "data-canvas-text-align": Mt(b),
          "data-canvas-text-color": b.textColor,
          "data-canvas-font-size": wt(b),
          "data-canvas-font-family": b.fontFamily === "custom" ? b.customFontFamily ?? "custom" : b.fontFamily ?? "sans",
          "data-canvas-manual-size": b.manualSize ? "true" : void 0,
          "data-canvas-group-id": b.groupId,
          "data-canvas-list-kind": mr(b),
          "data-canvas-x": b.x,
          "data-canvas-y": b.y,
          "data-canvas-width": b.w,
          "data-canvas-height": b.h,
          className: "absolute",
          style: { left: w.minX, top: w.minY, width: w.maxX - w.minX, height: w.maxY - w.minY, transform: b.rotation ? `rotate(${b.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (y) => {
            y.stopPropagation(), wr.has(b.type) && u(b.id);
          },
          children: [
            k(b),
            M && /* @__PURE__ */ K(Ut, { children: [
              /* @__PURE__ */ Y("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${U.blue}` } }),
              e.size === 1 && /* @__PURE__ */ K(Ut, { children: [
                ["nw", "ne", "sw", "se"].map((y) => /* @__PURE__ */ Y("div", { "data-canvas-resize-handle": y, onPointerDown: (h) => s(h, b, y), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${y}-resize`, left: y.includes("w") ? -5 / o.z : void 0, right: y.includes("e") ? -5 / o.z : void 0, top: y.includes("n") ? -5 / o.z : void 0, bottom: y.includes("s") ? -5 / o.z : void 0 } }, y)),
                /* @__PURE__ */ Y("div", { onPointerDown: (y) => f(y, b), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                br.has(b.type) && ["n", "s", "w", "e"].map((y) => /* @__PURE__ */ Y("div", { onPointerDown: (h) => v(h, b), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...y === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : y === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : y === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${y}`))
              ] })
            ] })
          ]
        },
        b.id
      );
    }) }),
    e.size === 1 && c.filter((b) => b.type === "arrow" && e.has(b.id)).map((b) => {
      const M = It(b, r, c), w = (y, h) => ({
        left: (y.x - o.x) * o.z - h / 2,
        top: (y.y - o.y) * o.z - h / 2
      });
      return /* @__PURE__ */ K(me.Fragment, { children: [
        M.routing === "orthogonal" && M.pathPoints && M.pathPoints.length > 2 ? M.pathPoints.slice(0, -1).map((y, h) => {
          var C;
          const X = (C = M.pathPoints) == null ? void 0 : C[h + 1];
          if (!X) return null;
          const p = { x: (y.x + X.x) / 2, y: (y.y + X.y) / 2 };
          return /* @__PURE__ */ Y("div", { "data-canvas-arrow-segment-handle": h, onPointerDown: (z) => i(z, b, h), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...w(p, 12), cursor: y.x === X.x ? "ew-resize" : "ns-resize" } }, `segment-${h}`);
        }) : M.routing === "curved" && /* @__PURE__ */ Y("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (y) => d(y, b), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (M.start.x + M.end.x) / 2 * o.z - o.x * o.z - 5, top: (M.start.y + M.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map((y) => {
          const h = y === "start" ? M.start : M.end;
          return /* @__PURE__ */ Y("div", { "data-canvas-arrow-endpoint": y, onPointerDown: (X) => S(X, b, y), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...w(h, 12), cursor: "grab" } }, y);
        })
      ] }, `arrow-handles-${b.id}`);
    }),
    a == null ? void 0 : a.map((b) => /* @__PURE__ */ K("div", { className: "absolute pointer-events-none z-40", style: { left: (b.x - o.x) * o.z, top: (b.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ Y("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ Y("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: b.color, stroke: U.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ Y("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: b.color }, children: b.name })
    ] }, b.id))
  ] });
}
function Ae(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function $r(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), Ae(t) && e.push("diagram"), e;
}
function di(t) {
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
const Mr = "#3b82f6";
function Kt(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function pe(t) {
  return Math.round(Kt(t, 0, 255)).toString(16).padStart(2, "0");
}
function zr(t) {
  const e = t.trim().endsWith("%"), n = Number.parseFloat(t);
  return Number.isFinite(n) ? e ? n * 2.55 : n : 0;
}
function ne(t) {
  var c, a;
  const e = t.trim().toLowerCase(), n = (c = e.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : c[1];
  if (n)
    return n.length === 3 || n.length === 4 ? `#${n.slice(0, 3).split("").map((l) => `${l}${l}`).join("")}` : `#${n.slice(0, 6)}`;
  const o = (a = e.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : a[1];
  if (o) {
    const l = o.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(zr);
    if (l.length === 3) return `#${l.map(pe).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? Mr;
}
function cn(t) {
  const e = ne(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, o = Number.parseInt(e.slice(2, 4), 16) / 255, r = Number.parseInt(e.slice(4, 6), 16) / 255, c = Math.max(n, o, r), a = Math.min(n, o, r), l = c - a;
  let x = 0;
  return l !== 0 && (c === n ? x = 60 * ((o - r) / l % 6) : c === o ? x = 60 * ((r - n) / l + 2) : x = 60 * ((n - o) / l + 4)), x < 0 && (x += 360), { hue: x, saturation: c === 0 ? 0 : l / c, value: c };
}
function sn({ hue: t, saturation: e, value: n }) {
  const o = (t % 360 + 360) % 360, r = n * e, c = r * (1 - Math.abs(o / 60 % 2 - 1)), a = n - r;
  let l = 0, x = 0, k = 0;
  return o < 60 ? [l, x, k] = [r, c, 0] : o < 120 ? [l, x, k] = [c, r, 0] : o < 180 ? [l, x, k] = [0, r, c] : o < 240 ? [l, x, k] = [0, c, r] : o < 300 ? [l, x, k] = [c, 0, r] : [l, x, k] = [r, 0, c], `#${pe((l + a) * 255)}${pe((x + a) * 255)}${pe((k + a) * 255)}`;
}
function Sr(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function Cr({ value: t, onChange: e }) {
  const [n, o] = st(() => cn(t)), r = q(null), c = q(null), a = q(null);
  Ct(() => {
    const M = cn(t);
    o((w) => Sr(w, M) ? w : M);
  }, [t]);
  const l = (M) => {
    o(M), e(sn(M));
  }, x = (M) => {
    var p;
    const w = (p = r.current) == null ? void 0 : p.getBoundingClientRect();
    if (!w) return;
    const y = M.clientX - (w.left + w.width / 2), h = M.clientY - (w.top + w.height / 2), X = Math.atan2(h, y) * 180 / Math.PI + 90;
    l({ ...n, hue: (X + 360) % 360 });
  }, k = (M) => {
    var y;
    const w = (y = c.current) == null ? void 0 : y.getBoundingClientRect();
    w && l({
      ...n,
      saturation: Kt((M.clientX - w.left) / w.width, 0, 1),
      value: Kt(1 - (M.clientY - w.top) / w.height, 0, 1)
    });
  }, u = (M, w) => {
    var y, h;
    w.button !== 0 && w.pointerType !== "touch" || (w.preventDefault(), w.stopPropagation(), a.current = M, (h = (y = w.currentTarget).setPointerCapture) == null || h.call(y, w.pointerId), M === "hue" ? x(w) : k(w));
  }, d = (M) => {
    a.current && (M.preventDefault(), a.current === "hue" ? x(M) : k(M));
  }, i = (M) => {
    var w, y;
    a.current = null;
    try {
      (y = (w = M.currentTarget).releasePointerCapture) == null || y.call(w, M.pointerId);
    } catch {
      return;
    }
  }, s = (n.hue - 90) * Math.PI / 180, f = 53, v = {
    left: 66 + Math.cos(s) * f,
    top: 66 + Math.sin(s) * f
  }, S = sn({ hue: n.hue, saturation: 1, value: 1 }), b = (M) => l({ ...n, hue: (n.hue + M + 360) % 360 });
  return /* @__PURE__ */ K("div", { className: "canvas-color-wheel", "data-canvas-color-wheel": !0, children: [
    /* @__PURE__ */ K(
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
        onPointerDown: (M) => u("hue", M),
        onPointerMove: d,
        onPointerUp: i,
        onKeyDown: (M) => {
          (M.key === "ArrowLeft" || M.key === "ArrowDown") && (M.preventDefault(), b(-1)), (M.key === "ArrowRight" || M.key === "ArrowUp") && (M.preventDefault(), b(1));
        },
        children: [
          /* @__PURE__ */ Y("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-hue-marker", style: { left: v.left, top: v.top } })
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
        style: { backgroundColor: S },
        onPointerDown: (M) => u("sv", M),
        onPointerMove: d,
        onPointerUp: i,
        onKeyDown: (M) => {
          const w = M.shiftKey ? 0.1 : 0.02;
          M.key === "ArrowLeft" && (M.preventDefault(), l({ ...n, saturation: Kt(n.saturation - w, 0, 1) })), M.key === "ArrowRight" && (M.preventDefault(), l({ ...n, saturation: Kt(n.saturation + w, 0, 1) })), M.key === "ArrowDown" && (M.preventDefault(), l({ ...n, value: Kt(n.value - w, 0, 1) })), M.key === "ArrowUp" && (M.preventDefault(), l({ ...n, value: Kt(n.value + w, 0, 1) }));
        },
        children: /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${n.saturation * 100}%`, top: `${(1 - n.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ K("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ Y("span", { children: ne(t).toUpperCase() })
    ] })
  ] });
}
const Xr = [2, 4, 6, 8];
function Yr(t) {
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
      return _n(t);
  }
}
function ln(t) {
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
      return _n(t);
  }
}
function _n(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Se(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function un(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Nr({
  shape: t,
  selection: e,
  selectionActions: n,
  shapes: o,
  camera: r,
  canvasSize: c,
  isDarkMode: a,
  editing: l,
  showPalette: x,
  installedFontFamilies: k,
  setShowPalette: u,
  setActiveColor: d,
  patchSelected: i,
  applyFormat: s,
  applyList: f,
  applyCustomFontFamily: v
}) {
  var qt, B;
  const S = a ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", b = e.length > 1, M = e.some((g) => !!g.groupId), w = t.type === "draw", y = w || un(t) && !Se(t) ? "stroke" : Se(t) ? "fill" : "text", [h, X] = st(y), [p, C] = st("");
  Vt(() => X(y), [y, t.id]);
  const z = h === "text" ? Gt(t) : h === "stroke" ? t.strokeColor ?? (t.color ? it[t.color].border : U.ink) : ge(t);
  Vt(() => C(ne(z).toUpperCase()), [z]);
  const m = ne(z), $ = (g) => {
    i(w || h === "stroke" ? { strokeColor: g } : h === "text" ? { textColor: g } : { fillColor: g });
  }, P = (g) => {
    d(g), i(w || h === "stroke" ? { color: g, strokeColor: void 0 } : h === "text" ? { textColor: it[g].text } : { color: g, fillColor: void 0 }), u(!1);
  }, T = q(null), [A, I] = st({ width: 380, height: 260 });
  Vt(() => {
    const g = T.current;
    if (!g) return;
    const E = () => {
      const et = Math.max(1, Math.ceil(g.getBoundingClientRect().width)), ct = Math.max(1, Math.ceil(g.getBoundingClientRect().height));
      I((jt) => jt.width === et && jt.height === ct ? jt : { width: et, height: ct });
    };
    if (E(), typeof ResizeObserver > "u") return;
    const j = new ResizeObserver(E);
    return j.observe(g), () => j.disconnect();
  }, [l, k.length, a, t, x]);
  const D = A.width, L = A.height, O = e.reduce((g, E) => {
    const j = ft(E);
    return {
      minX: Math.min(g.minX, j.minX),
      minY: Math.min(g.minY, j.minY),
      maxX: Math.max(g.maxX, j.maxX),
      maxY: Math.max(g.maxY, j.maxY)
    };
  }, ft(t)), H = (O.minX - r.x) * r.z, F = (O.minY - r.y) * r.z, W = (O.maxX - r.x) * r.z, N = (O.maxY - r.y) * r.z, _ = Math.max(8, c.width - D - 8), V = Math.max(8, c.height - L - 8), Z = (g, E) => ({ left: Math.min(Math.max(8, g), _), top: Math.min(Math.max(8, E), V) }), ot = [
    Z((H + W) / 2 - D / 2, F - L - 12),
    Z((H + W) / 2 - D / 2, N + 12),
    Z((c.width - D) / 2, 12),
    Z(H - D - 12, F + (N - F - L) / 2),
    Z(W + 12, F + (N - F - L) / 2)
  ], vt = o.map((g) => {
    const E = ft(g);
    return { left: (E.minX - r.x) * r.z, top: (E.minY - r.y) * r.z, right: (E.maxX - r.x) * r.z, bottom: (E.maxY - r.y) * r.z };
  });
  if (t.type === "arrow") {
    const g = It(t, new Map(o.map((ct) => [ct.id, ct])), o), E = g.routing === "orthogonal" && g.pathPoints ? Te(g.pathPoints) : { x: (g.start.x + g.end.x) / 2, y: (g.start.y + g.end.y) / 2 }, j = 180 * r.z, et = 36 * r.z;
    vt.push({
      left: (E.x - r.x) * r.z - j / 2,
      top: (E.y - r.y) * r.z - et / 2,
      right: (E.x - r.x) * r.z + j / 2,
      bottom: (E.y - r.y) * r.z + et / 2
    });
  }
  const G = ot[0], lt = (g, E) => {
    const j = Math.max(0, Math.min(g.left + D, E.right) - Math.max(g.left, E.left)), et = Math.max(0, Math.min(g.top + L, E.bottom) - Math.max(g.top, E.top));
    return j * et;
  }, ut = ((qt = ot.map((g) => ({
    candidate: g,
    overlap: vt.reduce((E, j) => E + lt(g, j), 0),
    distance: Math.hypot(g.left - G.left, g.top - G.top)
  })).sort((g, E) => g.overlap - E.overlap || g.distance - E.distance)[0]) == null ? void 0 : qt.candidate) ?? G, dt = wt(t), $t = e.every(Yr), Yt = new Set(e.map(ln)).size === 1 ? ln(t) : void 0, R = $r(t), nt = t.type === "arrow" ? "arrow" : R[0] ?? "color", [tt, Et] = st(nt);
  Vt(() => {
    R.includes(tt) || Et(nt);
  }, [nt, R, tt]);
  const zt = t.type === "arrow" && !!((B = t.orthogonalWaypoints) != null && B.length), pt = t.type === "arrow" ? t.arrowStart ?? "none" : "none", Q = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", J = (g, E, j, et, ct = et) => /* @__PURE__ */ Y("button", { type: "button", title: et, "aria-label": ct, onClick: j, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${E ? "bg-blue-600 text-white" : S}`, children: g }), at = (g) => /* @__PURE__ */ Y("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: g }), ht = (g, E, j, et, ct = !1) => /* @__PURE__ */ Y(
    "button",
    {
      type: "button",
      title: E,
      "aria-label": E,
      disabled: !et,
      onClick: j,
      className: `w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default ${ct ? "text-rose-500 hover:bg-rose-500/10" : S}`,
      children: /* @__PURE__ */ Y(g, { className: "w-4 h-4" })
    }
  ), Bt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ K("div", { ref: T, "data-canvas-inspector": w ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${a ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: ut.left, top: ut.top }, onPointerDown: (g) => {
    g.stopPropagation();
    const E = g.target instanceof Element ? g.target : null;
    E != null && E.closest("input, select, textarea") || g.preventDefault();
  }, onClick: (g) => g.stopPropagation(), children: [
    b ? /* @__PURE__ */ K("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      e.length,
      "개 선택됨"
    ] }) : /* @__PURE__ */ Y("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: R.map((g) => /* @__PURE__ */ Y("button", { type: "button", role: "tab", "aria-selected": tt === g, onClick: () => Et(g), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${tt === g ? "bg-blue-600 text-white" : S}`, children: Bt[g] }, g)) }),
    /* @__PURE__ */ K("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: b || tt === "color" || w ? void 0 : "none" }, children: [
      /* @__PURE__ */ Y("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: w ? "그리기" : "색상" }),
      /* @__PURE__ */ Y("button", { type: "button", title: w ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": w ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => u((g) => !g), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${a ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-trigger-dot", style: { background: m } }) }) }),
      x && /* @__PURE__ */ K("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${a ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !w && /* @__PURE__ */ K("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          Se(t) && /* @__PURE__ */ Y("button", { type: "button", role: "tab", "aria-selected": h === "fill", onClick: () => X("fill"), className: h === "fill" ? "is-active" : "", children: "배경" }),
          un(t) && /* @__PURE__ */ Y("button", { type: "button", role: "tab", "aria-selected": h === "stroke", onClick: () => X("stroke"), className: h === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ Y("button", { type: "button", role: "tab", "aria-selected": h === "text", onClick: () => X("text"), className: h === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ Y("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: fo.map((g) => /* @__PURE__ */ Y("button", { type: "button", title: it[g].label, "aria-label": `색 ${it[g].label}`, onClick: () => P(g), className: "canvas-color-preset", style: { background: it[g].bg, borderColor: it[g].border, outline: t.color === g && !t.fillColor && !t.strokeColor ? `2px solid ${U.blue}` : void 0, outlineOffset: 1 } }, g)) }),
        /* @__PURE__ */ Y(Cr, { value: z, onChange: $ }),
        /* @__PURE__ */ K("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ Y("span", { children: "#" }),
          /* @__PURE__ */ Y(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: p.replace(/^#/, ""),
              onChange: (g) => {
                const E = g.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                C(`#${E}`.toUpperCase()), E.length === 6 && $(`#${E}`);
              },
              onBlur: () => C(ne(z).toUpperCase()),
              onPointerDown: (g) => g.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !b && tt !== "color" && !w && /* @__PURE__ */ K(Ut, { children: [
      /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ Y("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ K("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: Gt(t), color: U.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ Y("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ Y("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? Gt(t), onChange: (g) => i({ textColor: g.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ K("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${a ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ Y("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ Y("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => i({ fontSize: Math.max(8, dt - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${S}`, children: /* @__PURE__ */ Y(go, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ Y("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: dt }),
          /* @__PURE__ */ Y("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => i({ fontSize: Math.min(96, dt + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${S}`, children: /* @__PURE__ */ Y(yo, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ K("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ Y("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (g) => {
            const E = pr(g.target.value);
            i(E === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: E, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${a ? "text-slate-200" : "text-slate-700"}`, children: sr.map((g) => /* @__PURE__ */ Y("option", { value: g, className: a ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: Nt[g].label }, g)) }),
          /* @__PURE__ */ Y(wo, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ K(Ut, { children: [
          /* @__PURE__ */ Y("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (g) => v(g.target.value), onChange: (g) => g.currentTarget.value && v(g.currentTarget.value), onKeyDown: (g) => {
            g.key === "Enter" && (g.preventDefault(), v(g.currentTarget.value));
          }, onDoubleClick: (g) => g.stopPropagation(), onPointerDown: (g) => g.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ Y("datalist", { id: `canvas-font-families-${t.id}`, children: k.map((g) => /* @__PURE__ */ Y("option", { value: g }, g)) })
        ] })
      ] }),
      /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ Y("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ Y("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", bo, "왼쪽 정렬"], ["center", ko, "가운데 정렬"], ["right", $o, "오른쪽 정렬"]].map(([g, E, j]) => /* @__PURE__ */ Y("button", { type: "button", "aria-label": j, title: j, onClick: () => i({ textAlign: g }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${Mt(t) === g ? "bg-blue-600 text-white shadow-sm" : S}`, children: /* @__PURE__ */ Y(E, { className: "w-4 h-4" }) }, g)) }),
        l && /* @__PURE__ */ K(Ut, { children: [
          /* @__PURE__ */ Y("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ Y("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", Mo, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", zo, "번호 목록"]].map(([g, E, j]) => /* @__PURE__ */ Y("button", { type: "button", onClick: () => f(g), "aria-label": j, title: j, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${S}`, children: E ? /* @__PURE__ */ Y(E, { className: "w-4 h-4" }) : /* @__PURE__ */ Y("span", { className: "text-base leading-none", children: "–" }) }, g)) }),
          /* @__PURE__ */ Y("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: So, label: "굵게" }, { cmd: "italic", Icon: Co, label: "기울임" }, { cmd: "underline", Icon: Xo, label: "밑줄" }].map(({ cmd: g, Icon: E, label: j }) => /* @__PURE__ */ Y("button", { type: "button", onClick: () => s(g), "aria-label": j, title: j, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${S}`, children: /* @__PURE__ */ Y(E, { className: "w-4 h-4" }) }, g)) })
        ] })
      ] }),
      (tt === "arrange" && t.type === "card" || tt === "arrow" && t.type === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ K(Ut, { children: [
          /* @__PURE__ */ Y("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ Y("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (g) => g.stopPropagation(), onChange: (g) => i({ category: g.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${a ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            at("경로"),
            J("직선", (t.routing ?? "straight") === "straight", () => i({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            J("직각", t.routing === "orthogonal", () => i({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            J("곡선", (t.routing ?? "") === "curved", () => i({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            zt && J("자동", !1, () => i({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            at("선"),
            J("—", (t.strokeStyle ?? "solid") === "solid", () => i({ strokeStyle: "solid" }), "실선"),
            J("- -", t.strokeStyle === "dashed", () => i({ strokeStyle: "dashed" }), "파선"),
            J("···", t.strokeStyle === "dotted", () => i({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            at("시작"),
            J(pt === "none" ? "○" : pt === "dot" ? "●" : "◀", pt !== "none", () => i({ arrowStart: pt === "none" ? "arrow" : pt === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${pt === "none" ? "없음" : pt === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ K("div", { className: "flex items-center gap-1", children: [
            at("끝"),
            J(Q === "none" ? "○" : Q === "dot" ? "●" : "▶", Q !== "none", () => i({ arrowEnd: Q === "arrow" ? "dot" : Q === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${Q === "none" ? "없음" : Q === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      tt === "diagram" && /* @__PURE__ */ Y("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${a ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    $t && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-none ${a ? "border-slate-700" : "border-slate-100"}`, children: [
      at("굵기"),
      Xr.map((g) => /* @__PURE__ */ Y(me.Fragment, { children: J(String(g), Yt === g, () => i({ strokeWidth: g }), `굵기 ${g}`) }, g))
    ] }),
    /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
      at("선택"),
      ht(Yo, "그룹 (Ctrl+G)", n.group, b),
      ht(No, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, M),
      ht(Po, "복제", n.duplicateSelected, !0),
      ht(Io, "삭제 (Delete)", n.deleteSelected, !0, !0)
    ] })
  ] });
}
function Pr({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: o,
  commitEditorHtml: r,
  onEditorKeyDown: c,
  setShapes: a,
  onDirty: l,
  renderDiagram: x
}) {
  const k = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", u = (i, s) => /* @__PURE__ */ Y(
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
      onDoubleClick: (f) => f.stopPropagation(),
      onKeyDown: c,
      className: `${k} ${i}`,
      style: s
    },
    "canvas-editor"
  );
  return { renderEditor: u, renderShapeBody: (i) => {
    const s = it[i.color ?? "blue"], f = e === i.id, v = we(i);
    if (i.type === "frame") {
      const X = i.strokeWidth ?? 2;
      return /* @__PURE__ */ Y(
        "div",
        {
          "data-canvas-stroke-width": X,
          className: "w-full h-full rounded",
          style: { border: `${X / t.z}px solid ${n ? U.slate600 : U.slate400}` },
          children: /* @__PURE__ */ Y(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: n ? U.slate400 : U.muted
              },
              children: f ? u("", { fontSize: 13 / t.z }) : ce(i) || "프레임"
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
          style: { background: ge(i), borderTop: `6px solid ${s.border}`, color: s.text },
          children: f ? u("font-medium", { color: Gt(i), fontSize: wt(i), fontFamily: bt(i), textAlign: Mt(i) }) : v ? /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Gt(i), fontSize: wt(i), fontFamily: bt(i), textAlign: Mt(i) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") : /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Gt(i), fontSize: wt(i), fontFamily: bt(i), textAlign: Mt(i) }, children: /* @__PURE__ */ Y("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (i.type === "card") {
      const X = i.cardStyle === "glass";
      return Ae(i) && x && !f ? /* @__PURE__ */ Y("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: x(i) }) : /* @__PURE__ */ K(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: X ? U.glassFill : i.fillColor ?? U.slateCard,
            backdropFilter: X ? "blur(12px)" : void 0,
            WebkitBackdropFilter: X ? "blur(12px)" : void 0,
            border: `1px solid ${X ? U.glassBorder : U.darkBorder}`,
            boxShadow: X ? U.glassShadow : U.cardShadow
          },
          children: [
            /* @__PURE__ */ K(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (p) => p.stopPropagation(),
                onDoubleClick: (p) => p.stopPropagation(),
                onBlur: (p) => {
                  const z = (p.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  a((m) => m.map(($) => $.id === i.id ? { ...$, category: z } : $)), l();
                },
                onKeyDown: (p) => {
                  p.key === "Enter" && (p.preventDefault(), p.currentTarget.blur());
                },
                children: [
                  "[ ",
                  i.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            f ? u("flex-1 font-medium", { color: i.textColor ?? U.white, fontSize: wt(i), fontFamily: bt(i), textAlign: Mt(i) }) : /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: i.textColor ?? U.white, fontSize: wt(i), fontFamily: bt(i), textAlign: Mt(i) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view"),
            /* @__PURE__ */ K("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              i.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (i.type === "text") {
      const X = n ? "text-slate-100" : "text-slate-900", p = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${X}`,
        style: { color: i.textColor, fontSize: wt(i), fontFamily: bt(i), textAlign: Mt(i) }
      };
      return f ? u(`font-medium ${X}`, p.style) : v ? /* @__PURE__ */ Y(
        "div",
        {
          "data-canvas-text-view": !0,
          ...p,
          dangerouslySetInnerHTML: { __html: v }
        },
        "canvas-view"
      ) : /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, ...p, children: /* @__PURE__ */ Y("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (i.type === "image") {
      const X = Pe(i.src);
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
    const S = ge(i), b = Xn(i), M = Gt(i);
    if (i.type === "triangle" || i.type === "diamond" || i.type === "hexagon" || i.type === "star") {
      const X = i.strokeWidth ?? 2;
      return /* @__PURE__ */ K("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ Y("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${i.w} ${i.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ Y("polygon", { "data-canvas-stroke-width": X, points: Yn(i.type, i.w, i.h), fill: S, stroke: b, strokeWidth: X / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ Y("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: M }, children: f ? u("font-medium", { color: M, fontSize: wt(i), fontFamily: bt(i), textAlign: Mt(i) }) : /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: wt(i), fontFamily: bt(i), textAlign: Mt(i) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") })
      ] });
    }
    const y = Pe(i.src), h = i.type === "rect" || i.type === "ellipse" ? i.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ Y(
      "div",
      {
        "data-canvas-stroke-width": h,
        className: `w-full h-full flex items-center justify-center p-3 ${i.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: S, border: `${h / t.z}px solid ${b}`, color: M },
        children: f ? u("font-medium", { color: M, fontSize: wt(i), fontFamily: bt(i), textAlign: Mt(i) }) : /* @__PURE__ */ K("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: wt(i), fontFamily: bt(i), textAlign: Mt(i) }, children: [
          /* @__PURE__ */ Y("div", { dangerouslySetInnerHTML: { __html: v } }),
          y && /* @__PURE__ */ Y(
            "a",
            {
              href: y,
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
function Ir({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: o,
  selected: r,
  editingId: c,
  boardIdentity: a
}) {
  const [l, x] = st({ width: 0, height: 0 });
  Ct(() => {
    const f = t.current;
    if (!f) return;
    let v = -1, S = -1;
    const b = (w = f.clientWidth, y = f.clientHeight) => {
      w === v && y === S || (v = w, S = y, x({ width: w, height: y }));
    };
    if (b(), typeof ResizeObserver < "u") {
      const w = new ResizeObserver((y) => {
        var X;
        const h = (X = y[0]) == null ? void 0 : X.contentRect;
        b((h == null ? void 0 : h.width) ?? f.clientWidth, (h == null ? void 0 : h.height) ?? f.clientHeight);
      });
      return w.observe(f), () => w.disconnect();
    }
    const M = () => b();
    return window.addEventListener("resize", M), () => window.removeEventListener("resize", M);
  }, [a, t]);
  const k = Pt(() => new Map(n.map((f) => [f.id, f])), [n]), u = Pt(
    () => [...n].sort((f, v) => (f.type === "frame" ? -1 : 0) - (v.type === "frame" ? -1 : 0)),
    [n]
  ), d = Pt(() => {
    if (!t.current || l.width <= 0 || l.height <= 0) return null;
    const f = 200 / o.z;
    return {
      minX: o.x - f,
      minY: o.y - f,
      maxX: o.x + l.width / o.z + f,
      maxY: o.y + l.height / o.z + f
    };
  }, [o, t, l]), i = mt((f) => {
    if (!d) return !1;
    if (f.id === c || r.has(f.id)) return !0;
    if (f.type === "arrow") {
      const S = It(f, k, e.current), M = (S.routing === "orthogonal" ? S.pathPoints : null) ?? [S.start, S.end], w = Math.min(...M.map((p) => p.x)), y = Math.max(...M.map((p) => p.x)), h = Math.min(...M.map((p) => p.y)), X = Math.max(...M.map((p) => p.y));
      return y >= d.minX && w <= d.maxX && X >= d.minY && h <= d.maxY;
    }
    const v = ft(f);
    return v.maxX >= d.minX && v.minX <= d.maxX && v.maxY >= d.minY && v.minY <= d.maxY;
  }, [c, r, k, e, d]), s = Pt(
    () => u.filter(i),
    [i, u]
  );
  return { shapeById: k, visiblePaintOrder: s };
}
function Lr({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: o,
  onDirty: r,
  patchSelected: c
}) {
  const a = mt(() => {
    const s = t.current;
    if (!s || !e) return;
    let f;
    try {
      f = Le(s.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const v = s.scrollHeight;
    n((S) => S.map((b) => {
      if (b.id !== e) return b;
      const M = Ae(b) ? { ...b, text: ce({ ...b, html: f, text: void 0 }), html: void 0 } : { ...b, html: f, text: void 0 };
      if (b.type === "text")
        return b.manualSize ? M : { ...M, ...yr(s, b) };
      if (b.type === "arrow") return M;
      const w = b.type === "note" ? 32 : b.type === "card" ? 96 : (
        // category header + type footer
        (b.type === "frame", 24)
      ), y = Math.max(b.h, v + w);
      return { ...M, h: y };
    })), r();
  }, [e, r]), l = (s) => {
    var f;
    (f = t.current) == null || f.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(s), a();
  }, x = () => {
    var S;
    const s = (S = window.getSelection()) == null ? void 0 : S.anchorNode, f = s instanceof Element ? s : s == null ? void 0 : s.parentElement, v = f == null ? void 0 : f.closest("ul, ol");
    return v instanceof HTMLElement ? v : null;
  }, k = (s, f, v) => {
    const S = document.createElement(f);
    for (; s.firstChild; ) S.append(s.firstChild);
    return s.replaceWith(S), S;
  }, u = (s) => {
    const f = t.current;
    if (!f) return;
    f.focus();
    const v = x();
    if (s === "number")
      if ((v == null ? void 0 : v.tagName) === "OL")
        v.removeAttribute("data-list-style");
      else if ((v == null ? void 0 : v.tagName) === "UL")
        k(v, "ol");
      else {
        document.execCommand("insertOrderedList");
        const S = x();
        S == null || S.removeAttribute("data-list-style");
      }
    else if ((v == null ? void 0 : v.tagName) === "UL") {
      const S = v.dataset.listStyle;
      s === S ? document.execCommand("insertUnorderedList") : v.dataset.listStyle = s;
    } else {
      (v == null ? void 0 : v.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const S = x();
      S && (S.dataset.listStyle = s);
    }
    a();
  };
  return { commitEditorHtml: a, applyFormat: l, applyList: u, onEditorKeyDown: (s) => {
    if (s.key === "Tab") {
      s.preventDefault(), document.execCommand(s.shiftKey ? "outdent" : "indent"), a();
      return;
    }
    if (s.key === " ") {
      const f = window.getSelection();
      if (f && f.isCollapsed && f.anchorNode) {
        const v = f.anchorNode, S = v.textContent || "", b = f.anchorOffset, M = S.slice(0, b).trim();
        if (!x()) {
          if (M === "-" || M === "–") {
            s.preventDefault(), v.textContent = S.slice(b), u("dash");
            return;
          }
          if (M === "*") {
            s.preventDefault(), v.textContent = S.slice(b), u("bullet");
            return;
          }
          if (M === "1.") {
            s.preventDefault(), v.textContent = S.slice(b), u("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (s) => {
    const f = On(s);
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
function Er({
  boardIdentity: t,
  tool: e,
  controlledShapes: n,
  onShapesChange: o,
  onDirty: r
}) {
  const c = q(null), a = q(null), [l, x] = st([]), k = n !== void 0 && o !== void 0, u = q(/* @__PURE__ */ new WeakMap()), d = Pt(() => {
    const B = u.current;
    return (k ? n ?? [] : l).map((g) => {
      let E = B.get(g);
      return E === void 0 && (E = En(g), B.set(g, E)), E;
    }).filter((g) => g !== null);
  }, [k, n, l]), i = q(o);
  i.current = o;
  const s = mt((B) => {
    const g = i.current;
    if (!g) {
      x(B);
      return;
    }
    g(typeof B == "function" ? B : () => B);
  }, []), [f, v] = st({ x: -400, y: -300, z: 1 }), [S, b] = st(/* @__PURE__ */ new Set()), [M, w] = st(null), [y, h] = st({ kind: "none" }), [X, p] = st(!1), [C, z] = st([]), [m, $] = st(""), [P, T] = st(!1), [A, I] = st(null), [D, L] = st("blue"), [O, H] = st(ve), F = q(D);
  F.current = D;
  const W = q([]), N = q([]), _ = q(null), V = q(/* @__PURE__ */ new Map()), Z = q(null), ot = q(null), vt = q([]), G = q(/* @__PURE__ */ new Set()), lt = q(d), ut = q(f), dt = q(e), $t = q(S), gt = q(M);
  lt.current = d, ut.current = f, dt.current = e, $t.current = S, gt.current = M;
  const Yt = q({ kind: "none" }), R = mt((B) => {
    Yt.current = B, h(B);
  }, []), nt = mt((B) => {
    $t.current = B, b(B);
  }, []);
  Vt(() => {
    var g;
    const B = /* @__PURE__ */ new Set();
    $t.current = B, gt.current = null, V.current.clear(), W.current = [], N.current = [], _.current = null, ot.current = null, vt.current = [], G.current.clear(), R({ kind: "none" }), b(B), w(null), p(!1), z([]), I(null), $(""), (g = c.current) == null || g.focus();
  }, [R, t]), Ct(() => {
    let B = !1;
    const g = () => {
      const j = hr();
      B || H(j);
    };
    if (g(), typeof document > "u" || !("fonts" in document)) return;
    const E = () => g();
    return document.fonts.addEventListener("loadingdone", E), () => {
      B = !0, document.fonts.removeEventListener("loadingdone", E);
    };
  }, [t]);
  const Et = (M ? d.find((B) => B.id === M) : void 0) !== void 0;
  Vt(() => {
    if (!M || !Et) return;
    const B = () => {
      const E = a.current, j = lt.current.find((jt) => jt.id === M);
      if (!E || !j || (E.dataset.seeded !== M && (E.innerHTML = we(j), E.dataset.seeded = M), document.activeElement === E)) return;
      E.focus();
      const et = document.createRange();
      et.selectNodeContents(E), et.collapse(!1);
      const ct = window.getSelection();
      ct == null || ct.removeAllRanges(), ct == null || ct.addRange(et);
    };
    B();
    const g = requestAnimationFrame(B);
    return () => cancelAnimationFrame(g);
  }, [M, Et]);
  const zt = mt((B) => {
    s((g) => {
      const E = typeof B == "function" ? B(g) : B;
      return W.current.push(g), W.current.length > 100 && W.current.shift(), N.current = [], E;
    }), r();
  }, [r]), pt = mt((B) => {
    if (B.length === 0) return;
    let g = lt.current;
    for (const E of B)
      W.current.push(g), g = [...g, E];
    W.current.length > 100 && W.current.splice(0, W.current.length - 100), N.current = [], s((E) => [...E, ...B]), r();
  }, [r, s]), Q = mt((B) => B.size === 0 ? !1 : (zt((g) => g.filter((E) => B.has(E.id) ? !1 : E.type !== "arrow" ? !0 : !(E.fromId && B.has(E.fromId)) && !(E.toId && B.has(E.toId)))), nt(/* @__PURE__ */ new Set()), $(`${B.size}개 삭제됨`), !0), [zt, nt]), J = mt(() => {
    _.current = lt.current;
  }, []), at = mt(() => {
    const B = _.current;
    _.current = null, !(!B || B === lt.current) && (W.current.push(B), W.current.length > 100 && W.current.shift(), N.current = [], r());
  }, [r]), ht = mt((B, g) => {
    var et;
    const E = (et = c.current) == null ? void 0 : et.getBoundingClientRect(), j = ut.current;
    return E ? { x: (B - E.left) / j.z + j.x, y: (g - E.top) / j.z + j.y } : { x: 0, y: 0 };
  }, []), Bt = mt(() => {
    var E;
    const B = (E = c.current) == null ? void 0 : E.getBoundingClientRect(), g = ut.current;
    return B ? { x: g.x + B.width / 2 / g.z, y: g.y + B.height / 2 / g.z } : { x: 0, y: 0 };
  }, []), qt = mt((B) => {
    const g = new Set(lt.current.filter((j) => B.has(j.id) && j.groupId).map((j) => j.groupId));
    if (g.size === 0) return B;
    const E = new Set(B);
    for (const j of lt.current) j.groupId && g.has(j.groupId) && E.add(j.id);
    return E;
  }, []);
  return {
    containerRef: c,
    editorRef: a,
    localShapes: l,
    setLocalShapes: x,
    controlled: k,
    shapes: d,
    setShapes: s,
    camera: f,
    setCamera: v,
    cameraRef: ut,
    selected: S,
    setSelected: b,
    selectedRef: $t,
    editingId: M,
    setEditingId: w,
    editingIdRef: gt,
    interaction: y,
    interactionRef: Yt,
    applyInteraction: R,
    isSpaceDown: X,
    setIsSpaceDown: p,
    guides: C,
    setGuides: z,
    announcement: m,
    setAnnouncement: $,
    showInspectorPalette: P,
    setShowInspectorPalette: T,
    eraserPos: A,
    setEraserPos: I,
    activeColor: D,
    setActiveColor: L,
    activeColorRef: F,
    installedFontFamilies: O,
    pointers: V,
    past: W,
    future: N,
    selectNow: nt,
    commit: zt,
    deleteSelection: Q,
    beginHistory: J,
    endHistory: at,
    toPage: ht,
    viewportCentre: Bt,
    expandToGroups: qt,
    toolRef: dt,
    shapesRef: lt,
    liveStrokeCanvasRef: Z,
    activeDrawRef: ot,
    pendingDrawsRef: vt,
    queuedDrawIdsRef: G,
    commitDrawBatch: pt
  };
}
function Tr({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: o,
  maxZoom: r,
  shapes: c,
  selected: a,
  editingId: l,
  textualTypes: x,
  onZoomChange: k,
  onSelectionChange: u,
  onLocalCursor: d,
  toPage: i
}) {
  Ct(() => {
    k == null || k(e.z);
  }, [e.z, k]), Ct(() => {
    const w = t.current;
    if (!w) return;
    const y = (h) => {
      if (h.preventDefault(), h.ctrlKey || h.metaKey) {
        const X = w.getBoundingClientRect();
        n((p) => {
          const C = Math.min(r, Math.max(o, p.z * Math.exp(-h.deltaY * 0.01))), z = h.clientX - X.left, m = h.clientY - X.top;
          return { x: p.x + z / p.z - z / C, y: p.y + m / p.z - m / C, z: C };
        });
      } else
        n((X) => ({ ...X, x: X.x + h.deltaX / X.z, y: X.y + h.deltaY / X.z }));
    };
    return w.addEventListener("wheel", y, { passive: !1 }), () => w.removeEventListener("wheel", y);
  }, [t, r, o, n]);
  const s = Pt(() => {
    const w = c.filter((y) => a.has(y.id));
    return {
      count: w.length,
      canGroup: w.length > 1,
      canUngroup: w.some((y) => !!y.groupId),
      isTextual: w.length === 1 && x.includes(w[0].type),
      selectedIds: w.map((y) => y.id)
    };
  }, [a, c, x]);
  Ct(() => {
    u == null || u(s);
  }, [u, s]);
  const f = Pt(() => {
    if (l) {
      const y = c.find((h) => h.id === l);
      return y && y.type !== "image" && y.type !== "draw" ? [y] : [];
    }
    const w = c.filter((y) => a.has(y.id));
    return w.length === 1 && w[0].type === "image" ? [] : w;
  }, [l, a, c]), v = Pt(() => f.length === 0 ? null : f.find((w) => w.type !== "image") ?? null, [f]), S = q(0);
  return { selectionInfo: s, inspectorSelection: f, inspectorShape: v, onContainerPointerMove: d ? (w) => {
    const y = performance.now();
    y - S.current < 60 || (S.current = y, d(i(w.clientX, w.clientY)));
  } : void 0, onContainerPointerLeave: d ? () => d(null) : void 0 };
}
const Jt = 24;
function Fr({
  containerRef: t,
  shapesRef: e,
  selectedRef: n,
  commit: o,
  deleteSelection: r,
  selectNow: c,
  setAnnouncement: a,
  createId: l
}) {
  return Pt(() => ({
    deleteSelected: () => {
      r(n.current);
    },
    duplicateSelected: () => {
      var d;
      const x = n.current;
      if (x.size === 0) return;
      const k = [], u = /* @__PURE__ */ new Map();
      for (const i of e.current) {
        if (!x.has(i.id)) continue;
        let s = i.groupId;
        s && (u.has(s) || u.set(s, l("g")), s = u.get(s)), k.push({
          ...i,
          id: l(),
          x: i.x + Jt,
          y: i.y + Jt,
          groupId: s,
          points: (d = i.points) == null ? void 0 : d.map(([f, v]) => [f + Jt, v + Jt]),
          orthogonalWaypoints: i.type === "arrow" && i.orthogonalWaypoints ? i.orthogonalWaypoints.map((f) => ({ x: f.x + Jt, y: f.y + Jt })) : void 0
        });
      }
      o((i) => [...i, ...k]), c(new Set(k.map((i) => i.id))), a(`${k.length}개 복제됨`);
    },
    group: () => {
      var u;
      const x = n.current;
      if (x.size < 2) return;
      const k = l("g");
      o((d) => d.map((i) => x.has(i.id) ? { ...i, groupId: k } : i)), a(`${x.size}개 그룹화됨`), (u = t.current) == null || u.focus();
    },
    ungroup: () => {
      var k;
      const x = n.current;
      x.size !== 0 && (o((u) => u.map((d) => x.has(d.id) ? { ...d, groupId: void 0 } : d)), a("그룹 해제됨"), (k = t.current) == null || k.focus());
    }
  }), [o, t, l, r, c, n, a, e]);
}
function Ar(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, o = 1 / 0, r = -1 / 0, c = -1 / 0;
  for (const d of t) {
    const i = ft(d);
    n = Math.min(n, i.minX), o = Math.min(o, i.minY), r = Math.max(r, i.maxX), c = Math.max(c, i.maxY);
  }
  const a = 40, l = r - n + a * 2, x = c - o + a * 2;
  if (!Number.isFinite(l) || !Number.isFinite(x) || l > te.maxExportDimension || x > te.maxExportDimension || l * x > te.maxExportPixels) return null;
  const k = (d, i, s, f, v) => {
    const S = d.fontSize ?? s, b = bt(d), M = Ln(we(d));
    if (M.length === 0) return "";
    const w = _t(d), y = d.textAlign === "right" ? "end" : d.textAlign === "center" ? "middle" : d.textAlign === "left" ? "start" : v, h = y === "end" ? w.maxX - 12 : y === "middle" ? (w.minX + w.maxX) / 2 : w.minX + 12, X = w.minY + S + 12;
    return M.map((p, C) => {
      const z = p.map((m) => `<tspan style="${[
        m.bold ? "font-weight:700" : `font-weight:${f}`,
        m.italic ? "font-style:italic" : "",
        m.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Dt(m.text)}</tspan>`).join("");
      return `<text x="${h}" y="${X + C * S * 1.4}" font-family="${Dt(b)}" font-size="${S}" fill="${i}" text-anchor="${y}">${z}</text>`;
    }).join("");
  }, u = t.map((d) => {
    const i = it[d.color ?? "blue"], s = _t(d), f = Xt(d), v = d.rotation ? ` transform="rotate(${d.rotation * 180 / Math.PI} ${f.x} ${f.y})"` : "", S = d.color ? it[d.color].border : U.ink;
    if (d.type === "draw" && d.points) {
      const p = d.drawMode ?? "pen", C = d.strokeWidth ?? 3, z = p === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${Nn(d.points)}" fill="none" stroke="${S}" stroke-width="${C}"${z} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (d.type === "arrow") {
      const p = It(d, new Map(t.map((W) => [W.id, W])), t), C = d.strokeWidth ?? 2.5, z = Math.max(10, 8 + C * 2), m = Math.max(4, 2 + C), $ = p.routing === "orthogonal" && p.pathPoints ? p.pathPoints : null, P = $ && $.length > 1, T = P ? Xe($) : p.routing === "curved" ? `M ${p.start.x} ${p.start.y} Q ${p.control.x} ${p.control.y} ${p.end.x} ${p.end.y}` : `M ${p.start.x} ${p.start.y} L ${p.end.x} ${p.end.y}`, A = P ? kn($) : p.routing === "curved" ? (() => {
        const W = ie(0.94, p.start, p.control, p.end);
        return Math.atan2(p.end.y - W.y, p.end.x - W.x);
      })() : Math.atan2(p.end.y - p.start.y, p.end.x - p.start.x), I = P ? oe($[0], $[1]) : p.routing === "orthogonal" && p.start.side ? p.start.side === "e" ? 0 : p.start.side === "w" ? Math.PI : p.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : oe(p.start, p.end), D = d.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : d.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", L = (W, N, _, V) => {
        if (W === "dot") return `<circle cx="${N}" cy="${_}" r="${m}" fill="${S}"/>`;
        if (W === "none") return "";
        const Z = `${N - z * Math.cos(V - 0.4)},${_ - z * Math.sin(V - 0.4)}`, ot = `${N - z * Math.cos(V + 0.4)},${_ - z * Math.sin(V + 0.4)}`;
        return `<polygon points="${N},${_} ${Z} ${ot}" fill="${S}"/>`;
      }, O = p.routing === "orthogonal" && p.pathPoints ? Te(p.pathPoints) : p.bend === 0 ? { x: (p.start.x + p.end.x) / 2, y: (p.start.y + p.end.y) / 2 } : ie(0.5, p.start, p.control, p.end), H = ce(d), F = H ? `<text x="${O.x}" y="${O.y - 6}" text-anchor="middle" font-family="${Dt(bt(d))}" font-size="${d.fontSize ?? 12}" fill="${S}">${Dt(H)}</text>` : "";
      return `<path d="${T}" fill="none" stroke="${S}" stroke-width="${C}" stroke-linecap="round" stroke-linejoin="round"${D}/>` + L(d.arrowEnd ?? "arrow", p.end.x, p.end.y, A) + L(d.arrowStart ?? "none", p.start.x, p.start.y, I + Math.PI) + F;
    }
    if (d.type === "image" && d.src) {
      const p = Pe(d.src);
      return p ? `<image href="${Dt(p)}" x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}"${v}/>` : "";
    }
    if (d.type === "frame")
      return `<g${v}><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" fill="none" stroke="${U.slate400}" stroke-width="${d.strokeWidth ?? 2}" rx="4"/><text x="${s.minX}" y="${s.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${U.muted}">${Dt(d.text ?? "프레임")}</text></g>`;
    if (d.type === "note")
      return `<g${v}><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" fill="${i.bg}"/><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="6" fill="${i.border}"/>` + k(d, i.text, 14, "600", "start") + "</g>";
    if (d.type === "card") {
      const p = d.cardStyle === "glass";
      return `<g${v}><rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" rx="16" fill="${p ? U.glassFill : U.slateCard}"/><text x="${s.minX + 16}" y="${s.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${U.slate400}">[ ${Dt(d.category ?? "ENTITY")} ]</text>` + k(d, U.white, 16, "700", "start") + "</g>";
    }
    const b = d.type === "rect" || d.type === "ellipse" || d.type === "triangle" || d.type === "diamond" || d.type === "hexagon" || d.type === "star" ? d.strokeWidth ?? 2 : 2, M = ge(d), w = Xn(d), y = d.type === "triangle" || d.type === "diamond" || d.type === "hexagon" || d.type === "star", h = y ? Yn(d.type, s.maxX - s.minX, s.maxY - s.minY).split(" ").map((p) => {
      const [C, z] = p.split(",").map(Number);
      return `${C + s.minX},${z + s.minY}`;
    }).join(" ") : "", X = d.type === "ellipse" ? `<ellipse cx="${(s.minX + s.maxX) / 2}" cy="${(s.minY + s.maxY) / 2}" rx="${(s.maxX - s.minX) / 2}" ry="${(s.maxY - s.minY) / 2}" fill="${M}" stroke="${w}" stroke-width="${b}"/>` : y ? `<polygon points="${h}" fill="${M}" stroke="${w}" stroke-width="${b}" stroke-linejoin="round"/>` : `<rect x="${s.minX}" y="${s.minY}" width="${s.maxX - s.minX}" height="${s.maxY - s.minY}" rx="12" fill="${M}" stroke="${w}" stroke-width="${b}"/>`;
    return `<g${v}>${X}${k(d, i.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${x}" viewBox="${n - a} ${o - a} ${l} ${x}"><rect x="${n - a}" y="${o - a}" width="${l}" height="${x}" fill="${e ? U.canvasDark : U.canvasLight}"/>` + u + "</svg>";
}
async function Wr(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), o = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), r = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), c = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, a = new Image();
  a.crossOrigin = "anonymous";
  try {
    await new Promise((i, s) => {
      a.onload = () => i(), a.onerror = () => s(new Error("svg rasterise failed")), a.src = c;
    });
  } catch {
    return null;
  }
  const l = 2, x = o * l, k = r * l;
  if (!Number.isSafeInteger(x) || !Number.isSafeInteger(k) || x > te.maxExportDimension || k > te.maxExportDimension || x * k > te.maxExportPixels) return null;
  const u = document.createElement("canvas");
  u.width = x, u.height = k;
  const d = u.getContext("2d");
  return d ? (d.scale(l, l), d.drawImage(a, 0, 0), new Promise((i) => {
    try {
      u.toBlob((s) => i(s), "image/png");
    } catch {
      i(null);
    }
  })) : null;
}
function Dr(t, e, n) {
  if (t.length < 2) return;
  const o = t.filter(
    (i) => i.type !== "draw" && i.type !== "arrow" && i.type !== "frame" && i.type !== "image"
  );
  if (o.length < 2) return;
  const r = o.map((i, s) => ({
    id: i.id,
    i: s,
    x: Xt(i).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: Xt(i).y,
    vx: 0,
    vy: 0
  }));
  for (let i = 0; i < r.length; i++)
    for (let s = 0; s < i; s++)
      if (Math.abs(r[i].x - r[s].x) < 1 && Math.abs(r[i].y - r[s].y) < 1) {
        const f = 2 * Math.PI * i / r.length;
        r[i].x += Math.cos(f) * 10, r[i].y += Math.sin(f) * 10;
        break;
      }
  const c = new Map(r.map((i) => [i.id, i])), a = [];
  for (const i of t) {
    if (i.type !== "arrow") continue;
    const s = i.fromId ? c.get(i.fromId) : null, f = i.toId ? c.get(i.toId) : null;
    s && f && a.push([s, f]);
  }
  const l = 220, x = l * l, k = 80;
  let u = 400;
  const d = u / k;
  for (let i = 0; i < k; i++) {
    for (let s = 0; s < r.length; s++)
      r[s].vx = 0, r[s].vy = 0;
    for (let s = 0; s < r.length; s++)
      for (let f = s + 1; f < r.length; f++) {
        const v = r[s], S = r[f], b = v.x - S.x, M = v.y - S.y, w = Math.hypot(b, M) || 0.01, y = x / w, h = b / w * y, X = M / w * y;
        v.vx += h, v.vy += X, S.vx -= h, S.vy -= X;
      }
    for (const [s, f] of a) {
      const v = s.x - f.x, S = s.y - f.y, b = Math.hypot(v, S) || 0.01, M = b * b / l, w = v / b * M, y = S / b * M;
      s.vx -= w, s.vy -= y, f.vx += w, f.vy += y;
    }
    for (const s of r) {
      const f = Math.hypot(s.vx, s.vy) || 0.01, v = Math.min(f, u);
      s.x += s.vx / f * v, s.y += s.vy / f * v;
    }
    u = Math.max(0.5, u - d);
  }
  e((i) => i.map((s) => {
    const f = c.get(s.id);
    return f ? { ...s, x: f.x - s.w / 2, y: f.y - s.h / 2 } : s;
  })), n();
}
function Or(t, {
  controlled: e,
  past: n,
  future: o,
  setLocalShapes: r,
  setCamera: c,
  selectNow: a,
  setEditingId: l
}) {
  let x;
  try {
    x = vo(t);
  } catch {
    return;
  }
  e || (n.current = [], o.current = [], r(x.shapes.map(Hr))), c(x.camera), a(/* @__PURE__ */ new Set()), l(null);
}
function Hr(t) {
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
      return _r(t);
  }
}
function _r(t) {
  throw new po(`Unhandled canvas shape type: ${String(t)}.`);
}
function Br({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: o,
  past: r,
  future: c,
  controlled: a,
  isDarkMode: l,
  minZoom: x,
  maxZoom: k,
  onToolChange: u,
  setSelectedStrokeWidth: d,
  onDirty: i,
  commit: s,
  selectNow: f,
  selectionActions: v,
  viewportCentre: S,
  setShapes: b,
  setLocalShapes: M,
  setCamera: w,
  setEditingId: y,
  setAnnouncement: h,
  createId: X
}) {
  const p = mt((z) => {
    const m = S(), $ = En({
      id: X(),
      x: z.x ?? m.x - z.w / 2,
      y: z.y ?? m.y - z.h / 2,
      ...z
    });
    if (!$) throw new Error("Canvas could not create a valid shape.");
    return s((P) => [...P, $]), f(/* @__PURE__ */ new Set([$.id])), u("select"), h(`${$.type} 추가됨`), $;
  }, [s, X, u, f, h, S]), C = mt(() => Ar(n.current, l), [l, n]);
  so(t, () => ({
    addNote: (z) => {
      const m = p({ type: "note", w: 180, h: 180, color: z, text: "" });
      y(m.id);
    },
    addCard: (z, m, $, P) => {
      p({ type: "card", w: 260, h: 150, text: z, category: m, cardStyle: $, color: P });
    },
    addText: () => {
      const z = p({ type: "text", w: 220, h: 44, text: "" });
      y(z.id);
    },
    addShape: (z, m, $) => {
      p({
        type: z,
        w: z === "ellipse" ? 220 : 200,
        h: z === "ellipse" ? 110 : 140,
        color: m,
        text: $ ?? ""
      });
    },
    addArrow: () => {
      const z = S(), m = { id: X(), type: "arrow", x: z.x - 140, y: z.y, w: 280, h: 0 };
      s(($) => [...$, m]), f(/* @__PURE__ */ new Set([m.id])), u("select");
    },
    addImage: (z, m, $, P) => {
      p({ type: "image", w: $, h: P, src: z, fileName: m });
    },
    addFileCard: (z, m, $) => {
      p({ type: "rect", w: 260, h: 120, color: "purple", text: $, src: m, fileName: z });
    },
    updateShapeText: (z, m) => {
      s(($) => $.map((P) => P.id === z ? { ...P, text: m, html: void 0 } : P));
    },
    setSelectedStrokeWidth: d,
    setTool: u,
    undo: () => {
      const z = r.current.pop();
      z && (c.current.push(n.current), b(z), f(/* @__PURE__ */ new Set()), y(null), i(), h("실행 취소"));
    },
    redo: () => {
      const z = c.current.pop();
      z && (r.current.push(n.current), b(z), f(/* @__PURE__ */ new Set()), y(null), i(), h("다시 실행"));
    },
    deleteSelected: v.deleteSelected,
    duplicateSelected: v.duplicateSelected,
    group: v.group,
    ungroup: v.ungroup,
    zoomBy: (z) => {
      w((m) => {
        var I;
        const $ = (I = e.current) == null ? void 0 : I.getBoundingClientRect(), P = Math.min(k, Math.max(x, m.z * z));
        if (!$) return { ...m, z: P };
        const T = m.x + $.width / 2 / m.z, A = m.y + $.height / 2 / m.z;
        return { x: T - $.width / 2 / P, y: A - $.height / 2 / P, z: P };
      });
    },
    zoomTo: (z) => {
      w((m) => {
        var I;
        const $ = (I = e.current) == null ? void 0 : I.getBoundingClientRect(), P = Math.min(k, Math.max(x, z));
        if (!$) return { ...m, z: P };
        const T = m.x + $.width / 2 / m.z, A = m.y + $.height / 2 / m.z;
        return { x: T - $.width / 2 / P, y: A - $.height / 2 / P, z: P };
      });
    },
    resetZoom: () => {
      w((z) => {
        var T;
        const m = (T = e.current) == null ? void 0 : T.getBoundingClientRect();
        if (!m) return { ...z, z: 1 };
        const $ = z.x + m.width / 2 / z.z, P = z.y + m.height / 2 / z.z;
        return { x: $ - m.width / 2, y: P - m.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var L;
      const z = n.current, m = (L = e.current) == null ? void 0 : L.getBoundingClientRect();
      if (z.length === 0 || !m) return;
      let $ = 1 / 0, P = 1 / 0, T = -1 / 0, A = -1 / 0;
      for (const O of z) {
        const H = ft(O);
        $ = Math.min($, H.minX), P = Math.min(P, H.minY), T = Math.max(T, H.maxX), A = Math.max(A, H.maxY);
      }
      const I = 80, D = Math.min(k, Math.max(
        x,
        Math.min(m.width / (T - $ + I * 2), m.height / (A - P + I * 2))
      ));
      w({
        x: ($ + T) / 2 - m.width / 2 / D,
        y: (P + A) / 2 - m.height / 2 / D,
        z: D
      });
    },
    autoLayout: () => Dr(n.current, s, () => h("자동 배치 완료")),
    exportSvg: C,
    exportPng: () => Wr(C),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (z) => Or(z, {
      controlled: a,
      past: r,
      future: c,
      setLocalShapes: M,
      setCamera: w,
      selectNow: f,
      setEditingId: y
    })
  }), [
    p,
    C,
    s,
    X,
    l,
    k,
    x,
    i,
    u,
    v,
    f,
    w,
    y,
    M,
    d,
    b,
    h,
    S,
    a
  ]);
}
function jr(t) {
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
function Kr({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: o,
  editingIdRef: r,
  toolRef: c,
  past: a,
  future: l,
  textualTypes: x,
  setIsSpaceDown: k,
  setEditingId: u,
  setShapes: d,
  setAnnouncement: i,
  commit: s,
  deleteSelection: f,
  selectNow: v,
  onDirty: S,
  onToolChange: b,
  createId: M
}) {
  const w = mt((y, h) => {
    const X = o.current;
    X.size !== 0 && s((p) => p.map((C) => {
      var z;
      return X.has(C.id) ? {
        ...C,
        x: C.x + y,
        y: C.y + h,
        points: (z = C.points) == null ? void 0 : z.map(([m, $]) => [m + y, $ + h])
      } : C;
    }));
  }, [s, o]);
  Ct(() => {
    const y = (C) => {
      const z = C;
      return !!z && (z.tagName === "INPUT" || z.tagName === "TEXTAREA" || z.isContentEditable);
    }, h = (C) => C instanceof Element && !!C.closest("input, select, button, textarea, option, label, [data-canvas-control]"), X = (C) => {
      var D, L, O, H;
      const z = t.current, m = document.activeElement, $ = C.target instanceof Node && !!(z != null && z.contains(C.target)), P = !!z && (m === z || z.contains(m));
      if (!$ && !P || h(C.target)) return;
      if (C.code === "Space" && !y(C.target)) {
        k(!0), C.preventDefault();
        return;
      }
      if (y(C.target)) {
        if (C.key === "Escape")
          C.preventDefault(), u(null), (D = e.current) == null || D.blur(), (L = t.current) == null || L.focus();
        else if ((C.key === "Delete" || C.key === "Backspace") && !r.current) {
          const F = o.current;
          f(F) && C.preventDefault();
        }
        return;
      }
      const T = C.metaKey || C.ctrlKey, A = o.current;
      if (T && C.key.toLowerCase() === "z") {
        if (C.preventDefault(), C.shiftKey) {
          const F = l.current.pop();
          F && (a.current.push(n.current), d(F), S());
        } else {
          const F = a.current.pop();
          F && (l.current.push(n.current), d(F), S());
        }
        v(/* @__PURE__ */ new Set());
        return;
      }
      if (T && C.key.toLowerCase() === "g") {
        if (C.preventDefault(), C.shiftKey)
          A.size > 0 && (s((F) => F.map((W) => A.has(W.id) ? { ...W, groupId: void 0 } : W)), i("그룹 해제됨"));
        else if (A.size > 1) {
          const F = M("g");
          s((W) => W.map((N) => A.has(N.id) ? { ...N, groupId: F } : N)), i(`${A.size}개 그룹화됨`);
        }
        return;
      }
      if (T && C.key.toLowerCase() === "a") {
        C.preventDefault(), v(new Set(n.current.map((F) => F.id))), i(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (C.key === "Delete" || C.key === "Backspace") {
        f(A) && C.preventDefault();
        return;
      }
      if (C.key.startsWith("Arrow")) {
        C.preventDefault();
        const F = C.shiftKey ? 10 : 1;
        C.key === "ArrowLeft" && w(-F, 0), C.key === "ArrowRight" && w(F, 0), C.key === "ArrowUp" && w(0, -F), C.key === "ArrowDown" && w(0, F);
        return;
      }
      if (C.key === "Tab" && n.current.length > 0) {
        C.preventDefault();
        const F = n.current, W = F.findIndex((V) => A.has(V.id)), N = C.shiftKey ? W <= 0 ? F.length - 1 : W - 1 : W === -1 || W === F.length - 1 ? 0 : W + 1, _ = F[N];
        v(/* @__PURE__ */ new Set([_.id])), i(`${_.type} 선택됨: ${ce(_) || "내용 없음"}`);
        return;
      }
      if (C.key === "Enter" && A.size === 1) {
        const F = n.current.find((W) => A.has(W.id));
        F && x.includes(F.type) && (C.preventDefault(), u(F.id));
        return;
      }
      if (C.key === "Escape") {
        if (r.current) {
          C.preventDefault(), u(null), (O = e.current) == null || O.blur(), (H = t.current) == null || H.focus(), b("select");
          return;
        }
        v(/* @__PURE__ */ new Set()), b("select");
        return;
      }
      const I = jr(C);
      I && (C.preventDefault(), c.current = I, b(I));
    }, p = (C) => {
      const z = t.current;
      !z || !(document.activeElement === z || z.contains(document.activeElement)) || C.code === "Space" && k(!1);
    };
    return window.addEventListener("keydown", X), window.addEventListener("keyup", p), () => {
      window.removeEventListener("keydown", X), window.removeEventListener("keyup", p);
    };
  }, [
    s,
    t,
    M,
    f,
    r,
    e,
    l,
    w,
    S,
    b,
    a,
    v,
    o,
    i,
    u,
    k,
    d,
    n,
    x,
    c
  ]);
}
function Ce(t, e) {
  return [(t[0] - e.x) * e.z, (t[1] - e.y) * e.z];
}
function Ie(t, e, n) {
  const o = 0.05 / Math.max(n, 0.1);
  let r = t[t.length - 1];
  for (const c of e)
    (!r || Math.hypot(c[0] - r[0], c[1] - r[1]) >= o) && (t.push(c), r = c);
}
function Ur(t) {
  const e = (t.points ?? []).map(([a, l]) => [a, l]);
  if (e.length === 0) return t;
  let n = e[0][0], o = e[0][1], r = n, c = o;
  for (const [a, l] of e)
    n = Math.min(n, a), o = Math.min(o, l), r = Math.max(r, a), c = Math.max(c, l);
  return { ...t, points: e, x: n, y: o, w: r - n, h: c - o };
}
function dn(t, e, n) {
  if (e.type !== "draw") return;
  const o = e.points ?? [];
  if (o.length === 0) return;
  const r = e.strokeWidth ?? 3, c = e.drawMode ?? "pen", a = e.color ? it[e.color].border : "#2563eb";
  if (t.save(), t.globalAlpha = c === "highlighter" ? 0.35 : 1, t.fillStyle = a, o.length === 1) {
    const [u, d] = Ce(o[0], n);
    t.beginPath(), t.arc(u, d, Math.max(Pn(r, c) * n.z, 0.5), 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  const l = In(o, r, c);
  if (l.length === 0) {
    t.restore();
    return;
  }
  t.beginPath();
  const [x, k] = Ce([l[0][0], l[0][1]], n);
  t.moveTo(x, k);
  for (let u = 1; u < l.length; u++) {
    const [d, i] = Ce([l[u][0], l[u][1]], n);
    t.lineTo(d, i);
  }
  t.closePath(), t.fill(), t.restore();
}
function Vr(t, e, n, o) {
  const r = Math.max(1, Math.min(2, o)), c = Math.max(1, Math.round(e * r)), a = Math.max(1, Math.round(n * r));
  return t.width !== c && (t.width = c), t.height !== a && (t.height = a), t.style.width = `${e}px`, t.style.height = `${n}px`, r;
}
function ae(t, e, n, o, r = 1) {
  var l;
  if (!t) return;
  const c = (l = t.getContext) == null ? void 0 : l.call(t, "2d");
  if (!c) return;
  const a = Math.max(1, Math.min(2, r || 1));
  c.setTransform(1, 0, 0, 1, 0, 0), c.clearRect(0, 0, t.width, t.height), c.setTransform(a, 0, 0, a, 0, 0);
  for (const x of e) dn(c, x, o);
  n && dn(c, n, o), c.setTransform(1, 0, 0, 1, 0, 0);
}
const Gr = 400;
function Rr({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: o,
  editingIdRef: r,
  cameraRef: c,
  shapesRef: a,
  toolRef: l,
  activeColorRef: x,
  drawStrokeWidth: k,
  camera: u,
  shapes: d,
  selected: i,
  isSpaceDown: s,
  textualTypes: f,
  setShapes: v,
  setEditingId: S,
  applyInteraction: b,
  selectNow: M,
  beginHistory: w,
  commit: y,
  onToolChange: h,
  expandToGroups: X,
  toPage: p,
  createId: C,
  liveStrokeCanvasRef: z,
  activeDrawRef: m,
  pendingDrawsRef: $
}) {
  const P = C, T = q(null), A = (N, _) => {
    var vt;
    const V = ((vt = t.current) == null ? void 0 : vt.dataset.canvasActiveTool) === "text" ? "text" : l.current;
    if (V !== "note" && V !== "text") return;
    const Z = p(N, _), ot = V === "note" ? { id: P(), type: "note", x: Z.x - 90, y: Z.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: P(), type: "text", x: Z.x, y: Z.y - 22, w: 220, h: 44, text: "" };
    y((G) => [...G, ot]), M(/* @__PURE__ */ new Set([ot.id])), S(ot.id), h("select");
  };
  return Ct(() => {
    const N = (_) => {
      var V;
      (V = t.current) != null && V.contains(_.target) && (_.target instanceof Element && _.target.closest('[role="textbox"], [data-canvas-inspector]') || A(_.clientX, _.clientY));
    };
    return window.addEventListener("click", N, !0), () => window.removeEventListener("click", N, !0);
  }), { onPointerDown: (N) => {
    var $t, gt, Yt;
    const _ = l.current, V = N.target instanceof Element ? N.target : null, Z = !!(V != null && V.closest("[data-canvas-editor]")) && r.current !== null;
    n.current.set(N.pointerId, { x: N.clientX, y: N.clientY });
    const ot = o.current;
    if (ot.kind === "drawing" && ot.pointerId !== N.pointerId) {
      n.current.delete(N.pointerId);
      return;
    }
    !Z && N.cancelable && N.preventDefault();
    const vt = N.currentTarget;
    try {
      vt.setPointerCapture(N.pointerId);
    } catch {
    }
    if (n.current.size === 2) {
      const [R, nt] = [...n.current.values()], tt = c.current;
      b({
        kind: "pinch",
        startDist: Math.hypot(nt.x - R.x, nt.y - R.y) || 1,
        startZoom: tt.z,
        startMidX: (R.x + nt.x) / 2,
        startMidY: (R.y + nt.y) / 2,
        camX: tt.x,
        camY: tt.y
      });
      return;
    }
    if (n.current.size > 2) return;
    if (N.button === 1 || s || _ === "hand" || N.button === 0 && _ === "select" && N.altKey) {
      b({ kind: "pan", startX: N.clientX, startY: N.clientY, camX: u.x, camY: u.y });
      return;
    }
    if (N.button !== 0) return;
    const G = p(N.clientX, N.clientY);
    if (Z || (S(null), ($t = e.current) == null || $t.blur(), (gt = t.current) == null || gt.focus()), _ === "draw" || _ === "highlighter") {
      const R = {
        id: P(),
        type: "draw",
        x: G.x,
        y: G.y,
        w: 0,
        h: 0,
        points: [[G.x, G.y]],
        color: x.current,
        strokeWidth: k,
        drawMode: _ === "highlighter" ? "highlighter" : "pen"
      };
      m.current = R, ae(z.current, $.current, R, c.current, window.devicePixelRatio || 1), b({ kind: "drawing", id: R.id, pointerId: N.pointerId });
      return;
    }
    if (_ === "arrow" || _ === "frame" || mo.includes(_)) {
      const R = _, nt = _ === "arrow" ? { id: P(), type: "arrow", x: G.x, y: G.y, w: 0, h: 0, color: x.current } : _ === "frame" ? { id: P(), type: "frame", x: G.x, y: G.y, w: 0, h: 0, text: "프레임" } : { id: P(), type: R, x: G.x, y: G.y, w: 0, h: 0, color: x.current, text: "" };
      w(), v((tt) => [...tt, nt]), b({ kind: "creating", id: nt.id, startX: G.x, startY: G.y });
      return;
    }
    if (_ === "note" || _ === "text") return;
    if (_ === "eraser") {
      w(), v((R) => An(R, G.x, G.y, 14 / u.z, u.z)), b({ kind: "erasing" });
      return;
    }
    const lt = new Map(d.map((R) => [R.id, R])), ut = r.current ? d.find((R) => R.id === r.current) : void 0, dt = Z && ut ? ut : [...d].reverse().find((R) => ye(R, G.x, G.y, u.z, lt, d));
    if (!dt)
      T.current = null;
    else {
      const R = Date.now(), nt = !N.shiftKey && f.includes(dt.type) && ((Yt = T.current) == null ? void 0 : Yt.id) === dt.id && R - T.current.time < Gr, tt = nt ? dt.id : void 0;
      T.current = nt ? null : { id: dt.id, time: R };
      const Et = N.shiftKey ? new Set(i).add(dt.id) : i.has(dt.id) ? i : /* @__PURE__ */ new Set([dt.id]), zt = X(Et);
      M(zt);
      const pt = /* @__PURE__ */ new Map();
      for (const Q of d) zt.has(Q.id) && pt.set(Q.id, Q);
      for (const Q of d) {
        if (Q.type !== "frame" || !zt.has(Q.id)) continue;
        const J = ft(Q);
        for (const at of d) {
          if (at.id === Q.id || pt.has(at.id)) continue;
          const ht = Xt(at);
          ht.x >= J.minX && ht.x <= J.maxX && ht.y >= J.minY && ht.y <= J.maxY && pt.set(at.id, at);
        }
      }
      w(), b({ kind: "move", startX: G.x, startY: G.y, origin: pt, editOnReleaseId: tt });
      return;
    }
    N.shiftKey || M(/* @__PURE__ */ new Set()), b({
      kind: "marquee",
      startX: G.x,
      startY: G.y,
      curX: G.x,
      curY: G.y,
      screenStartX: N.clientX,
      screenStartY: N.clientY
    });
  }, onResizeHandleDown: (N, _, V) => {
    N.stopPropagation(), n.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), w(), b({ kind: "resize", id: _.id, handle: V, start: _ });
  }, onRotateHandleDown: (N, _) => {
    N.stopPropagation(), n.current.set(N.pointerId, { x: N.clientX, y: N.clientY });
    const V = p(N.clientX, N.clientY), Z = Xt(_);
    w(), b({
      kind: "rotate",
      id: _.id,
      startAngle: Math.atan2(V.y - Z.y, V.x - Z.x),
      startRotation: _.rotation ?? 0
    });
  }, onConnectHandleDown: (N, _) => {
    N.stopPropagation(), n.current.set(N.pointerId, { x: N.clientX, y: N.clientY });
    const V = p(N.clientX, N.clientY);
    b({ kind: "connect", fromId: _.id, toX: V.x, toY: V.y, hoverId: null });
  }, onBendHandleDown: (N, _) => {
    N.stopPropagation(), n.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), w(), b({ kind: "bend", id: _.id });
  }, onOrthogonalSegmentHandleDown: (N, _, V) => {
    N.stopPropagation(), n.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), w(), b({ kind: "orthogonal-segment", id: _.id, segmentIndex: V });
  }, onArrowEndpointDown: (N, _, V) => {
    N.stopPropagation(), n.current.set(N.pointerId, { x: N.clientX, y: N.clientY }), w(), b({ kind: "arrow-endpoint", id: _.id, endpoint: V, hoverId: null });
  } };
}
const qr = 0.1, Zr = 4, Qr = 14, Jr = 4, hn = ["note", "card", "rect", "ellipse", "text", "image"];
function ti({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: o,
  shapesRef: r,
  setShapes: c,
  setEditingId: a,
  setEraserPos: l,
  setGuides: x,
  setAnnouncement: k,
  applyInteraction: u,
  selectNow: d,
  endHistory: i,
  commit: s,
  onToolChange: f,
  createId: v,
  pendingDrawPointsRef: S,
  drawRafRef: b,
  liveStrokeCanvasRef: M,
  activeDrawRef: w,
  pendingDrawsRef: y,
  queuedDrawIdsRef: h,
  commitDrawBatch: X
}) {
  const p = v, C = q(null);
  Ct(() => {
    const z = (m) => {
      var P, T;
      t.current.delete(m.pointerId);
      try {
        (T = (P = m.target) == null ? void 0 : P.releasePointerCapture) == null || T.call(P, m.pointerId);
      } catch {
      }
      const $ = e.current;
      if ($.kind !== "none") {
        if ($.kind === "pinch") {
          t.current.size < 2 && u({ kind: "none" });
          return;
        }
        if (x([]), $.kind === "erasing") {
          l(null), i(), u({ kind: "none" });
          return;
        }
        if ($.kind === "connect") {
          const I = r.current.find((W) => W.id === $.fromId);
          if (u({ kind: "none" }), !I) return;
          const D = { x: $.toX, y: $.toY }, L = Xt(I);
          if (!$.hoverId && Math.hypot(D.x - L.x, D.y - L.y) < 30) return;
          const O = [];
          let H = $.hoverId;
          if (!H) {
            const W = I.type === "note" ? 180 : 200, N = I.type === "note" ? 180 : 120, _ = {
              ...I,
              id: p(),
              x: D.x - W / 2,
              y: D.y - N / 2,
              w: W,
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
            O.push(_), H = _.id;
          }
          const F = {
            id: p(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: I.id,
            toId: H,
            text: ""
          };
          O.push(F), s((W) => [...W, ...O]), d(/* @__PURE__ */ new Set([F.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => a(F.id)) : a(F.id), k("연결 생성됨");
          return;
        }
        if ($.kind === "bend") {
          i(), u({ kind: "none" });
          return;
        }
        if ($.kind === "drawing") {
          if ($.pointerId !== m.pointerId) return;
          b.current !== null && (cancelAnimationFrame(b.current), b.current = null);
          const A = S.current.splice(0), I = w.current;
          if (I && I.id === $.id && I.points) {
            if (Ie(I.points, A, n.current.z), m.type === "pointerup") {
              const L = o(m.clientX, m.clientY);
              Ie(I.points, [[L.x, L.y]], n.current.z);
            }
            const D = Ur(I);
            y.current = [...y.current, D], w.current = null, ae(M.current, y.current, null, n.current, window.devicePixelRatio || 1), C.current === null && (C.current = requestAnimationFrame(() => {
              C.current = null;
              const L = y.current.filter((O) => !h.current.has(O.id));
              if (L.length !== 0) {
                for (const O of L) h.current.add(O.id);
                X(L);
              }
            }));
          }
          u({ kind: "none" });
          return;
        }
        if ($.kind === "creating") {
          c((A) => A.map((I) => {
            if (I.id !== $.id) return I;
            const D = Math.abs(I.w) < 4 && Math.abs(I.h) < 4 ? {
              ...I,
              w: I.type === "arrow" ? 200 : I.type === "frame" ? 480 : 180,
              h: I.type === "arrow" ? 0 : I.type === "frame" ? 320 : 120
            } : I;
            if (D.type === "arrow") return D;
            const L = _t(D);
            return { ...D, x: L.minX, y: L.minY, w: L.maxX - L.minX, h: L.maxY - L.minY };
          })), i(), d(/* @__PURE__ */ new Set([$.id])), f("select"), u({ kind: "none" });
          return;
        }
        if (($.kind === "move" || $.kind === "resize" || $.kind === "rotate" || $.kind === "orthogonal-segment" || $.kind === "arrow-endpoint") && i(), $.kind === "move" && $.editOnReleaseId && m.type === "pointerup") {
          const A = o(m.clientX, m.clientY);
          Math.hypot(A.x - $.startX, A.y - $.startY) * n.current.z <= Jr && a($.editOnReleaseId);
        }
        u({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", z), window.addEventListener("pointercancel", z), () => {
      window.removeEventListener("pointerup", z), window.removeEventListener("pointercancel", z);
    };
  }, [
    w,
    u,
    n,
    X,
    v,
    b,
    i,
    e,
    M,
    f,
    S,
    y,
    t,
    h,
    d,
    k,
    a,
    x,
    l,
    c,
    r,
    o,
    s
  ]);
}
function ei({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: o,
  shapesRef: r,
  setCamera: c,
  setShapes: a,
  setEraserPos: l,
  setGuides: x,
  applyInteraction: k,
  selectNow: u,
  expandToGroups: d,
  toPage: i,
  pendingDrawPointsRef: s,
  drawRafRef: f,
  liveStrokeCanvasRef: v,
  activeDrawRef: S,
  pendingDrawsRef: b
}) {
  Ct(() => () => {
    f.current !== null && cancelAnimationFrame(f.current);
  }, [f]), Ct(() => {
    const M = (y, h) => {
      const X = S.current;
      if (!X || X.id !== h || !X.points) return;
      const p = i(y.clientX, y.clientY);
      if (y.shiftKey) {
        f.current !== null && (cancelAnimationFrame(f.current), f.current = null), s.current = [];
        const z = X.points[0];
        z && (X.points = [z, [p.x, p.y]]), ae(v.current, b.current, X, o.current, window.devicePixelRatio || 1);
        return;
      }
      const C = typeof y.getCoalescedEvents == "function" ? y.getCoalescedEvents() : [];
      for (const z of C) {
        const m = i(z.clientX, z.clientY);
        s.current.push([m.x, m.y]);
      }
      s.current.push([p.x, p.y]), f.current === null && (f.current = requestAnimationFrame(() => {
        f.current = null;
        const z = s.current;
        if (z.length === 0) return;
        s.current = [];
        const m = S.current;
        !m || m.id !== h || !m.points || (Ie(m.points, z, o.current.z), ae(v.current, b.current, m, o.current, window.devicePixelRatio || 1));
      }));
    }, w = (y) => {
      var C, z;
      e.current.has(y.pointerId) && e.current.set(y.pointerId, { x: y.clientX, y: y.clientY });
      const h = n.current;
      if (h.kind === "none") return;
      const X = o.current;
      if (h.kind === "pinch") {
        if (e.current.size < 2) return;
        const [m, $] = [...e.current.values()], P = Math.hypot($.x - m.x, $.y - m.y) || 1, T = (m.x + $.x) / 2, A = (m.y + $.y) / 2, I = (C = t.current) == null ? void 0 : C.getBoundingClientRect();
        if (!I) return;
        const D = Math.min(Zr, Math.max(qr, h.startZoom * (P / h.startDist))), L = h.camX + (h.startMidX - I.left) / h.startZoom, O = h.camY + (h.startMidY - I.top) / h.startZoom;
        c({ x: L - (T - I.left) / D, y: O - (A - I.top) / D, z: D });
        return;
      }
      if (h.kind === "pan") {
        c({
          x: h.camX - (y.clientX - h.startX) / X.z,
          y: h.camY - (y.clientY - h.startY) / X.z,
          z: X.z
        });
        return;
      }
      const p = i(y.clientX, y.clientY);
      if (h.kind === "erasing") {
        a((m) => An(m, p.x, p.y, Qr / X.z, X.z)), l({ x: p.x, y: p.y });
        return;
      }
      if (h.kind === "connect") {
        const m = r.current, $ = new Map(m.map((T) => [T.id, T])), P = [...m].reverse().find((T) => T.id !== h.fromId && hn.includes(T.type) && ye(T, p.x, p.y, X.z, $, m));
        k({ ...h, toX: p.x, toY: p.y, hoverId: (P == null ? void 0 : P.id) ?? null });
        return;
      }
      if (h.kind === "bend") {
        const m = r.current, $ = m.find((H) => H.id === h.id);
        if (!$) return;
        const P = It($, new Map(m.map((H) => [H.id, H])), m), T = P.end.x - P.start.x, A = P.end.y - P.start.y, I = Math.hypot(T, A) || 1, D = (P.start.x + P.end.x) / 2, L = (P.start.y + P.end.y) / 2, O = (p.x - D) * (-A / I) + (p.y - L) * (T / I);
        a((H) => H.map((F) => F.id === h.id ? { ...F, bend: O } : F));
        return;
      }
      if (h.kind === "orthogonal-segment") {
        const m = r.current, $ = m.find((O) => O.id === h.id);
        if (!$) return;
        const P = It($, new Map(m.map((O) => [O.id, O])), m), T = P.routing === "orthogonal" ? P.pathPoints : void 0;
        if (!T || T.length < 2) return;
        const A = T[h.segmentIndex], I = T[h.segmentIndex + 1];
        if (!A || !I) return;
        const D = A.x === I.x ? p.x : p.y, L = Ao(T, h.segmentIndex, D);
        a((O) => O.map((H) => H.id === h.id ? { ...H, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: L.slice(1, -1).map((F) => ({ x: F.x, y: F.y })) } : H));
        return;
      }
      if (h.kind === "arrow-endpoint") {
        const m = r.current, $ = m.find((L) => L.id === h.id);
        if (!$) return;
        const P = new Map(m.map((L) => [L.id, L])), T = It($, P, m), A = h.endpoint === "start" ? T.end : T.start, I = [...m].reverse().find((L) => L.id !== $.id && hn.includes(L.type) && ye(L, p.x, p.y, X.z, P, m)), D = I ? Rt(I, A.x, A.y) : { x: p.x, y: p.y };
        k({ ...h, hoverId: (I == null ? void 0 : I.id) ?? null }), a((L) => L.map((O) => {
          if (O.id !== $.id) return O;
          const H = h.endpoint === "start" ? D : A, F = h.endpoint === "end" ? D : A;
          return {
            ...O,
            x: H.x,
            y: H.y,
            w: F.x - H.x,
            h: F.y - H.y,
            fromId: h.endpoint === "start" ? I == null ? void 0 : I.id : O.fromId,
            toId: h.endpoint === "end" ? I == null ? void 0 : I.id : O.toId
          };
        }));
        return;
      }
      if (h.kind === "marquee") {
        k({ ...h, curX: p.x, curY: p.y });
        const m = Math.min(h.startX, p.x), $ = Math.max(h.startX, p.x), P = Math.min(h.startY, p.y), T = Math.max(h.startY, p.y), A = Math.min(h.screenStartX, y.clientX), I = Math.max(h.screenStartX, y.clientX), D = Math.min(h.screenStartY, y.clientY), L = Math.max(h.screenStartY, y.clientY), O = /* @__PURE__ */ new Map();
        (z = t.current) == null || z.querySelectorAll("[data-canvas-shape-id]").forEach((F) => {
          const W = F.dataset.canvasShapeId;
          W && O.set(W, F.getBoundingClientRect());
        });
        const H = r.current.filter((F) => {
          const W = O.get(F.id);
          if (W)
            return W.right >= A && W.left <= I && W.bottom >= D && W.top <= L;
          const N = ft(F);
          return N.maxX >= m && N.minX <= $ && N.maxY >= P && N.minY <= T;
        }).map((F) => F.id);
        u(d(new Set(H)));
        return;
      }
      if (h.kind === "move") {
        let m = p.x - h.startX, $ = p.y - h.startY;
        const P = h.origin, T = (() => {
          let D = 1 / 0, L = 1 / 0, O = -1 / 0, H = -1 / 0;
          return P.forEach((F) => {
            const W = ft({ ...F, x: F.x + m, y: F.y + $ });
            D = Math.min(D, W.minX), L = Math.min(L, W.minY), O = Math.max(O, W.maxX), H = Math.max(H, W.maxY);
          }), { minX: D, minY: L, maxX: O, maxY: H };
        })(), A = r.current.filter((D) => !P.has(D.id)), I = ir(T, A, X.z);
        m += I.dx, $ += I.dy, x(I.guides), a((D) => D.map((L) => {
          var H;
          const O = P.get(L.id);
          return O ? {
            ...L,
            x: O.x + m,
            y: O.y + $,
            points: (H = O.points) == null ? void 0 : H.map(([F, W]) => [F + m, W + $]),
            ...O.type === "arrow" && O.orthogonalWaypoints ? { orthogonalWaypoints: O.orthogonalWaypoints.map((F) => ({ x: F.x + m, y: F.y + $ })) } : {}
          } : L;
        }));
        return;
      }
      if (h.kind === "drawing") {
        if (h.pointerId !== y.pointerId) return;
        M(y, h.id);
        return;
      }
      if (h.kind === "creating") {
        a((m) => m.map(($) => $.id === h.id ? { ...$, w: p.x - h.startX, h: p.y - h.startY } : $));
        return;
      }
      if (h.kind === "rotate") {
        const m = r.current.find((A) => A.id === h.id);
        if (!m) return;
        const $ = Xt(m), P = Math.atan2(p.y - $.y, p.x - $.x);
        let T = h.startRotation + (P - h.startAngle);
        y.shiftKey && (T = Math.round(T / (Math.PI / 12)) * (Math.PI / 12)), a((A) => A.map((I) => I.id === h.id ? { ...I, rotation: T } : I));
        return;
      }
      if (h.kind === "resize") {
        const { start: m, handle: $ } = h, P = Tn(m, p.x, p.y);
        a((T) => T.map((A) => {
          if (A.id !== m.id) return A;
          let { x: I, y: D, w: L, h: O } = m;
          if ($.includes("e") && (L = Math.max(20, P.x - m.x)), $.includes("s") && (O = Math.max(20, P.y - m.y)), $.includes("w")) {
            const H = m.x + m.w;
            I = Math.min(P.x, H - 20), L = H - I;
          }
          if ($.includes("n")) {
            const H = m.y + m.h;
            D = Math.min(P.y, H - 20), O = H - D;
          }
          return { ...A, x: I, y: D, w: L, h: O, manualSize: A.type === "text" ? !0 : A.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", w), () => window.removeEventListener("pointermove", w);
  }, [
    S,
    k,
    o,
    t,
    f,
    d,
    n,
    v,
    s,
    b,
    e,
    u,
    r,
    i
  ]);
}
function ni(t) {
  const e = q([]), n = q(null), o = { ...t, pendingDrawPointsRef: e, drawRafRef: n };
  ei(o), ti(o);
}
function oi({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: o,
  editingIdRef: r,
  cameraRef: c,
  shapesRef: a,
  toolRef: l,
  activeColorRef: x,
  drawStrokeWidth: k,
  camera: u,
  shapes: d,
  selected: i,
  isSpaceDown: s,
  textualTypes: f,
  setCamera: v,
  setShapes: S,
  setEditingId: b,
  setEraserPos: M,
  setGuides: w,
  setAnnouncement: y,
  applyInteraction: h,
  selectNow: X,
  beginHistory: p,
  endHistory: C,
  commit: z,
  onToolChange: m,
  expandToGroups: $,
  toPage: P,
  createId: T,
  liveStrokeCanvasRef: A,
  activeDrawRef: I,
  pendingDrawsRef: D,
  queuedDrawIdsRef: L,
  commitDrawBatch: O
}) {
  const H = Rr({
    containerRef: t,
    editorRef: e,
    pointers: n,
    interactionRef: o,
    editingIdRef: r,
    cameraRef: c,
    shapesRef: a,
    toolRef: l,
    activeColorRef: x,
    drawStrokeWidth: k,
    camera: u,
    shapes: d,
    selected: i,
    isSpaceDown: s,
    textualTypes: f,
    setShapes: S,
    setEditingId: b,
    applyInteraction: h,
    selectNow: X,
    beginHistory: p,
    commit: z,
    onToolChange: m,
    expandToGroups: $,
    toPage: P,
    createId: T,
    liveStrokeCanvasRef: A,
    activeDrawRef: I,
    pendingDrawsRef: D
  });
  return ni({
    containerRef: t,
    pointers: n,
    interactionRef: o,
    cameraRef: c,
    shapesRef: a,
    setCamera: v,
    setShapes: S,
    setEditingId: b,
    setEraserPos: M,
    setGuides: w,
    setAnnouncement: y,
    applyInteraction: h,
    selectNow: X,
    endHistory: C,
    commit: z,
    onToolChange: m,
    expandToGroups: $,
    toPage: P,
    createId: T,
    liveStrokeCanvasRef: A,
    activeDrawRef: I,
    pendingDrawsRef: D,
    queuedDrawIdsRef: L,
    commitDrawBatch: O
  }), H;
}
function ri(t) {
  Br(t);
  const e = Pt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return Kr({ ...t, toolRef: e }), oi(t);
}
function ii({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: o,
  zoom: r
}) {
  const c = n || o.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", a = t ? U.gridDark : U.gridLight, l = 40 * r;
  return { cursor: c, gridColor: a, gridSize: l, strokeColorOf: (k) => k.strokeColor ? Cn(k) : k.color ? it[k.color].border : t ? "var(--canvas-slate-200)" : U.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = Lo, document.head.appendChild(t);
}
const xn = 0.1, fn = 4, vn = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function Bn(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function pn(t, e, n) {
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
        return Bn(o);
    }
  });
}
function ai(t, e, n) {
  return t.map((o) => e.has(o.id) && o.type === "draw" ? { ...o, ...n } : o);
}
function mn(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const hi = lo(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: o,
  drawStrokeWidth: r = 4,
  onToolChange: c,
  onDirty: a,
  onZoomChange: l,
  onSelectionChange: x,
  shapes: k,
  onShapesChange: u,
  peerCursors: d,
  onLocalCursor: i,
  renderDiagram: s
}, f) {
  var _e, Be;
  const {
    containerRef: v,
    editorRef: S,
    setLocalShapes: b,
    controlled: M,
    shapes: w,
    setShapes: y,
    camera: h,
    setCamera: X,
    cameraRef: p,
    selected: C,
    selectedRef: z,
    editingId: m,
    setEditingId: $,
    editingIdRef: P,
    interaction: T,
    interactionRef: A,
    applyInteraction: I,
    isSpaceDown: D,
    setIsSpaceDown: L,
    guides: O,
    setGuides: H,
    announcement: F,
    setAnnouncement: W,
    showInspectorPalette: N,
    setShowInspectorPalette: _,
    eraserPos: V,
    setEraserPos: Z,
    setActiveColor: ot,
    activeColorRef: vt,
    installedFontFamilies: G,
    pointers: lt,
    past: ut,
    future: dt,
    selectNow: $t,
    commit: gt,
    deleteSelection: Yt,
    beginHistory: R,
    endHistory: nt,
    toPage: tt,
    viewportCentre: Et,
    expandToGroups: zt,
    toolRef: pt,
    shapesRef: Q,
    liveStrokeCanvasRef: J,
    activeDrawRef: at,
    pendingDrawsRef: ht,
    queuedDrawIdsRef: Bt,
    commitDrawBatch: qt
  } = Er({ boardIdentity: e, tool: o, controlledShapes: k, onShapesChange: u, onDirty: a });
  Vt(() => {
    const rt = J.current, Tt = v.current;
    if (!rt || !Tt) return;
    const St = () => {
      const se = Vr(rt, Tt.clientWidth, Tt.clientHeight, window.devicePixelRatio || 1), le = new Set(w.map((Zt) => Zt.id));
      ht.current = ht.current.filter((Zt) => !le.has(Zt.id));
      for (const Zt of le) Bt.current.delete(Zt);
      ae(rt, ht.current, at.current, p.current, se);
    };
    if (St(), typeof ResizeObserver > "u")
      return window.addEventListener("resize", St), () => window.removeEventListener("resize", St);
    const Ft = new ResizeObserver(St);
    return Ft.observe(Tt), window.addEventListener("resize", St), () => {
      Ft.disconnect(), window.removeEventListener("resize", St);
    };
  }, [at, h, p, v, J, ht, Bt, w]);
  const B = Fr({
    containerRef: v,
    shapesRef: Q,
    selectedRef: z,
    commit: gt,
    deleteSelection: Yt,
    selectNow: $t,
    setAnnouncement: W,
    createId: mn
  }), {
    inspectorSelection: g,
    inspectorShape: E,
    onContainerPointerMove: j,
    onContainerPointerLeave: et
  } = Tr({
    containerRef: v,
    camera: h,
    setCamera: X,
    minZoom: xn,
    maxZoom: fn,
    shapes: w,
    selected: C,
    editingId: m,
    textualTypes: vn,
    onZoomChange: l,
    onSelectionChange: x,
    onLocalCursor: i,
    toPage: tt
  }), ct = me.useCallback((rt) => {
    const Tt = new Set(z.current);
    Tt.size !== 0 && gt((St) => pn(St, Tt, rt));
  }, [gt, z]), {
    onPointerDown: jt,
    onResizeHandleDown: jn,
    onRotateHandleDown: Kn,
    onConnectHandleDown: Un,
    onBendHandleDown: Vn,
    onOrthogonalSegmentHandleDown: Gn,
    onArrowEndpointDown: Rn
  } = ri({
    ref: f,
    containerRef: v,
    editorRef: S,
    pointers: lt,
    interactionRef: A,
    cameraRef: p,
    shapesRef: Q,
    toolRef: pt,
    activeColorRef: vt,
    drawStrokeWidth: r,
    setSelectedStrokeWidth: ct,
    camera: h,
    shapes: w,
    selected: C,
    isSpaceDown: D,
    setCamera: X,
    setShapes: y,
    setEditingId: $,
    setEraserPos: Z,
    setGuides: H,
    setAnnouncement: W,
    applyInteraction: I,
    selectNow: $t,
    selectionActions: B,
    past: ut,
    future: dt,
    beginHistory: R,
    endHistory: nt,
    commit: gt,
    deleteSelection: Yt,
    onDirty: a,
    onToolChange: c,
    controlled: M,
    isDarkMode: n,
    minZoom: xn,
    maxZoom: fn,
    textualTypes: vn,
    selectedRef: z,
    editingIdRef: P,
    setIsSpaceDown: L,
    viewportCentre: Et,
    setLocalShapes: b,
    expandToGroups: zt,
    toPage: tt,
    createId: mn,
    liveStrokeCanvasRef: J,
    activeDrawRef: at,
    pendingDrawsRef: ht,
    queuedDrawIdsRef: Bt,
    commitDrawBatch: qt
  }), { cursor: qn, gridColor: Zn, gridSize: We, strokeColorOf: Qn } = ii({
    isDarkMode: n,
    tool: o === "highlighter" ? "draw" : o,
    isSpaceDown: D,
    interaction: T,
    zoom: h.z
  }), De = (rt) => {
    const Tt = z.current, St = P.current, Ft = new Set(Tt);
    if (St && Ft.add(St), Ft.size === 0) return;
    const se = "strokeWidth" in rt, le = Object.keys(rt).every((yt) => yt === "color" || yt === "fillColor" || yt === "strokeColor" || yt === "strokeWidth");
    if (g.length > 0 && g.every((yt) => yt.type === "draw") && le) {
      const yt = "color" in rt ? rt.color : void 0, kt = "strokeWidth" in rt ? rt.strokeWidth : void 0, je = "strokeColor" in rt ? rt.strokeColor : void 0;
      gt((co) => ai(co, Ft, {
        ...yt !== void 0 ? { color: yt } : {},
        ...kt !== void 0 ? { strokeWidth: kt } : {},
        ...je !== void 0 ? { strokeColor: je } : {}
      }));
      return;
    }
    if (se) {
      const yt = rt.strokeWidth;
      if (yt !== void 0 && Object.keys(rt).length === 1) {
        gt((kt) => pn(kt, Ft, yt));
        return;
      }
    }
    gt((yt) => yt.map((kt) => {
      if (!Ft.has(kt.id)) return kt;
      if (!se) return { ...kt, ...rt };
      switch (kt.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...kt, ...rt };
        case "note":
        case "card":
        case "text":
        case "image":
          return kt;
        case "draw":
          return { ...kt, ...rt };
        default:
          return Bn(kt);
      }
    }));
  }, {
    commitEditorHtml: Jn,
    applyFormat: to,
    applyList: eo,
    onEditorKeyDown: no,
    applyCustomFontFamily: oo
  } = Lr({
    editorRef: S,
    editingId: m,
    setShapes: y,
    setAnnouncement: W,
    onDirty: a,
    patchSelected: De
  }), { renderEditor: ro, renderShapeBody: io } = Pr({
    camera: h,
    editingId: m,
    isDarkMode: n,
    editorRef: S,
    commitEditorHtml: Jn,
    onEditorKeyDown: no,
    setShapes: y,
    onDirty: a,
    renderDiagram: s
  }), ao = T.kind === "marquee" ? T : null, { shapeById: Oe, visiblePaintOrder: He } = Ir({
    containerRef: v,
    shapesRef: Q,
    shapes: w,
    camera: h,
    selected: C,
    editingId: m,
    boardIdentity: e
  });
  return /* @__PURE__ */ K(
    "div",
    {
      ref: v,
      onPointerDown: jt,
      onPointerMove: j,
      onPointerLeave: et,
      role: "application",
      "data-canvas-board-id": e,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": h.x,
      "data-canvas-camera-y": h.y,
      "data-canvas-camera-z": h.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: qn,
        background: n ? U.canvasDark : U.canvasLight,
        backgroundImage: `radial-gradient(${Zn} 1px, transparent 1px)`,
        backgroundSize: `${We}px ${We}px`,
        backgroundPosition: `${-h.x * h.z}px ${-h.y * h.z}px`
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
            children: F
          }
        ),
        /* @__PURE__ */ Y(
          cr,
          {
            visiblePaintOrder: He,
            selected: C,
            shapeById: Oe,
            allShapes: Q.current,
            camera: h,
            interaction: T,
            eraserPos: V,
            guides: O,
            marquee: ao,
            strokeColorOf: Qn
          }
        ),
        /* @__PURE__ */ Y("canvas", { ref: J, "aria-hidden": "true", "data-canvas-live-strokes": "true", className: "absolute inset-0 w-full h-full pointer-events-none" }),
        /* @__PURE__ */ Y(
          kr,
          {
            visiblePaintOrder: He,
            selected: C,
            editingId: m,
            camera: h,
            shapeById: Oe,
            allShapes: Q.current,
            peerCursors: d,
            isDarkMode: n,
            renderEditor: ro,
            renderShapeBody: io,
            setEditingId: $,
            onBendHandleDown: Vn,
            onOrthogonalSegmentHandleDown: Gn,
            onResizeHandleDown: jn,
            onRotateHandleDown: Kn,
            onConnectHandleDown: Un,
            onArrowEndpointDown: Rn
          }
        ),
        E && /* @__PURE__ */ Y(
          Nr,
          {
            shape: E,
            selection: g,
            selectionActions: B,
            shapes: w,
            camera: h,
            canvasSize: { width: ((_e = v.current) == null ? void 0 : _e.clientWidth) ?? 380, height: ((Be = v.current) == null ? void 0 : Be.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!m,
            showPalette: N,
            installedFontFamilies: G,
            setShowPalette: _,
            setActiveColor: ot,
            patchSelected: De,
            applyFormat: to,
            applyList: eo,
            applyCustomFontFamily: oo
          }
        )
      ]
    }
  );
});
export {
  it as CANVAS_COLORS,
  fo as CANVAS_COLOR_KEYS,
  Nt as CANVAS_FONTS,
  hi as InfiniteCanvas,
  mo as SHAPE_TOOLS,
  ai as applySelectedDrawStyle,
  pn as applySelectedStrokeWidth,
  di as diagramTemplate,
  $r as getInspectorGroups,
  Ae as isDiagramShape
};
