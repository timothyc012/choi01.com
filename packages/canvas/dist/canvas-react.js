import { jsx as Y, jsxs as U, Fragment as Ut } from "react/jsx-runtime";
import ie, { useRef as Q, useState as ut, useEffect as Xt, useLayoutEffect as Vt, useMemo as Pt, useCallback as vt, useImperativeHandle as io, forwardRef as ao } from "react";
import { p as co, i as Fe, k as Te, a as it, v as so, c as Nt, s as lo, b as uo, d as te, h as ho, C as xo, S as fo } from "./document-CLNFlHux.js";
import { Minus as vo, Plus as po, ChevronDown as mo, AlignLeft as go, AlignCenter as yo, AlignRight as wo, List as bo, ListOrdered as ko, Bold as $o, Italic as Mo, Underline as zo, Group as So, Ungroup as Co, Copy as Xo, Trash2 as Yo } from "lucide-react";
const No = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-rose-500: #f43f5e;--canvas-rose-500-10: rgba(244,63,94,.1);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover:not(:disabled){background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover:not(:disabled){background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .text-rose-500{color:var(--canvas-rose-500)}.invoicex-canvas .hover\\:bg-rose-500\\/10:hover:not(:disabled){background-color:var(--canvas-rose-500-10)}.invoicex-canvas .disabled\\:opacity-30:disabled{opacity:.3}.invoicex-canvas .disabled\\:cursor-default:disabled{cursor:default}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-color-targets{display:flex;gap:3px;padding:3px;border-radius:8px;background:var(--canvas-slate-100)}.invoicex-canvas .canvas-color-targets button{min-width:48px;height:26px;padding:0 7px;border:0;border-radius:6px;background:transparent;color:var(--canvas-slate-600);font:600 11px/1 inherit;cursor:pointer}.invoicex-canvas .canvas-color-targets button:hover{background:var(--canvas-white);color:var(--canvas-slate-900)}.invoicex-canvas .canvas-color-targets button.is-active{background:var(--canvas-blue-600);color:var(--canvas-white)}.invoicex-canvas .canvas-color-presets{display:flex;flex-wrap:wrap;gap:6px;max-width:286px;padding:2px 1px}.invoicex-canvas .canvas-color-preset{width:20px;height:20px;border:1px solid;border-radius:999px;cursor:pointer}.invoicex-canvas .canvas-color-wheel-trigger{display:inline-flex;width:21px;height:21px;padding:3px;border-radius:999px;background:conic-gradient(from -30deg,#ff3b30,#fc0,#34c759,#00c7be,#007aff,#af52de,#ff2d55,#ff3b30);box-shadow:0 0 0 1px #0f172a24}.invoicex-canvas .canvas-color-wheel-trigger-dot{display:block;width:100%;height:100%;border:1.5px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a29}.invoicex-canvas .canvas-color-preset:focus-visible,.invoicex-canvas .canvas-color-targets button:focus-visible,.invoicex-canvas .canvas-color-hex-input:focus-visible,.invoicex-canvas .canvas-color-wheel-hue:focus-visible,.invoicex-canvas .canvas-color-wheel-sv:focus-visible{outline:2px solid var(--canvas-blue-600);outline-offset:2px}.invoicex-canvas .canvas-color-wheel{display:grid;grid-template-columns:132px 132px;gap:8px;align-items:center}.invoicex-canvas .canvas-color-wheel-hue,.invoicex-canvas .canvas-color-wheel-sv{position:relative;width:132px;height:132px;border-radius:999px;touch-action:none;cursor:crosshair}.invoicex-canvas .canvas-color-wheel-hue{background:conic-gradient(red,#ff0,#0f0,#0ff,#00f,#f0f,red)}.invoicex-canvas .canvas-color-wheel-core{position:absolute;top:23px;right:23px;bottom:23px;left:23px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:inset 0 0 0 1px #0f172a38,0 1px 3px #0f172a2e}.invoicex-canvas .canvas-color-wheel-hue-marker,.invoicex-canvas .canvas-color-wheel-sv-marker{position:absolute;width:14px;height:14px;border:2px solid var(--canvas-white);border-radius:999px;box-shadow:0 0 0 1px #0f172ab8,0 1px 3px #0f172a47;transform:translate(-50%,-50%);pointer-events:none}.invoicex-canvas .canvas-color-wheel-sv{border-radius:8px;background-image:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent)}.invoicex-canvas .canvas-color-wheel-sv-marker{left:0;top:0}.invoicex-canvas .canvas-color-wheel-value{grid-column:1 / -1;display:flex;align-items:center;gap:7px;min-height:26px;color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-wheel-preview{width:22px;height:22px;border:1px solid var(--canvas-slate-300);border-radius:6px}.invoicex-canvas .canvas-color-hex{grid-column:1 / -1;display:flex;align-items:center;gap:5px;height:30px;padding:0 8px;border:1px solid var(--canvas-slate-200);border-radius:7px;background:var(--canvas-white);color:var(--canvas-slate-500);font:700 11px/1 ui-monospace,monospace}.invoicex-canvas .canvas-color-hex-input{min-width:0;flex:1;height:26px;border:0;outline:0;background:transparent;color:var(--canvas-slate-800);font:inherit;letter-spacing:.08em}.invoicex-canvas .canvas-color-hex-input:focus-visible{outline-offset:-1px}.invoicex-canvas .bg-slate-100{background-color:var(--canvas-slate-100)}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', V = Object.freeze({
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
function Ye(t) {
  return t.map((e, n) => `${n === 0 ? "M" : "L"} ${e.x} ${e.y}`).join(" ");
}
function de(t, e, n) {
  return !(Math.min(t.x, n.x) > e.x || e.x > Math.max(t.x, n.x) || Math.min(t.y, n.y) > e.y || e.y > Math.max(t.y, n.y));
}
function he(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function xe(t, e, n, o) {
  const s = he(t, e, n), c = he(t, e, o), l = he(n, o, t), x = he(n, o, e);
  return Math.abs(s) < 1e-6 && de(t, n, e) || Math.abs(c) < 1e-6 && de(t, o, e) || Math.abs(l) < 1e-6 && de(n, t, o) || Math.abs(x) < 1e-6 && de(n, e, o) ? !0 : s > 0 != c > 0 && l > 0 != x > 0;
}
function Po(t, e, n) {
  const o = Math.min(t.x, e.x), r = Math.max(t.x, e.x), s = Math.min(t.y, e.y), c = Math.max(t.y, e.y);
  if (r < n.minX || o > n.maxX || c < n.minY || s > n.maxY) return !1;
  if (t.x >= n.minX && t.x <= n.maxX && t.y >= n.minY && t.y <= n.maxY || e.x >= n.minX && e.x <= n.maxX && e.y >= n.minY && e.y <= n.maxY) return !0;
  const l = { x: n.minX, y: n.minY }, x = { x: n.maxX, y: n.minY }, y = { x: n.maxX, y: n.maxY }, p = { x: n.minX, y: n.maxY };
  return xe(t, e, l, x) || xe(t, e, x, y) || xe(t, e, y, p) || xe(t, e, p, l);
}
function Io(t, e) {
  for (let n = 1; n < t.length; n++)
    for (const o of e)
      if (Po(t[n - 1], t[n], o)) return !0;
  return !1;
}
function Ne(t) {
  let e = 0;
  for (let n = 1; n < t.length; n++) e += Math.hypot(t[n].x - t[n - 1].x, t[n].y - t[n - 1].y);
  return e;
}
function Ee(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const e = Ne(t);
  if (e === 0) return t[0];
  const n = e / 2;
  let o = 0;
  for (let s = 1; s < t.length; s++) {
    const c = Math.hypot(t[s].x - t[s - 1].x, t[s].y - t[s - 1].y);
    if (o + c >= n) {
      const l = (n - o) / c;
      return { x: t[s - 1].x + (t[s].x - t[s - 1].x) * l, y: t[s - 1].y + (t[s].y - t[s - 1].y) * l };
    }
    o += c;
  }
  const r = t[t.length - 1];
  return { x: r.x, y: r.y };
}
function ae(t, e) {
  return Math.atan2(e.y - t.y, e.x - t.x);
}
function Ue(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([t, e]), s = Math.min(t, e), c = Math.max(t, e), l = gn * 1.2;
  for (const x of n) {
    const y = (o === "x" ? x.minX : x.minY) - l, p = (o === "x" ? x.maxX : x.maxY) + l, u = (a) => a >= s - l * 4 && a <= c + l * 4;
    u(y) && r.add(y), u(p) && r.add(p);
  }
  return [...r].sort((x, y) => Math.abs(x - t) - Math.abs(y - t));
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
function Lo(t, e, n) {
  const o = [t];
  for (const r of [...n, e]) {
    const s = o[o.length - 1];
    if (!s) {
      o.push(r);
      continue;
    }
    if (s.x === r.x || s.y === r.y) {
      o.push(r);
      continue;
    }
    o.push({ x: r.x, y: s.y }, r);
  }
  return wn(o);
}
function Fo(t, e, n) {
  const o = t[e], r = t[e + 1];
  if (!o || !r || !Number.isFinite(n) || o.x !== r.x && o.y !== r.y) return [...t];
  const s = o.x === r.x ? [o, { x: n, y: o.y }, { x: n, y: r.y }, r] : [o, { x: o.x, y: n }, { x: r.x, y: n }, r];
  return wn([
    ...t.slice(0, e),
    ...s,
    ...t.slice(e + 2)
  ]);
}
function $e(t, e) {
  const n = [], o = [];
  for (const s of t) {
    const c = yn(s);
    c.length < 2 || (Io(c, e) ? o.push(c) : n.push(c));
  }
  const r = n.length > 0 ? n : o;
  return r.length === 0 ? [] : r.reduce((s, c) => Ne(c) < Ne(s) ? c : s);
}
function Ve(t) {
  for (let e = 1; e < t.length; e++) {
    if (t[e - 1].x !== t[e].x) return "x";
    if (t[e - 1].y !== t[e].y) return "y";
  }
}
function Jt(t, e, n, o) {
  const r = Math.min(t, e), s = Math.max(t, e), c = Math.max(48, Math.abs(e - t) * 0.35, gn * 4);
  if (o === "x") {
    if (n === "e") return s + c;
    if (n === "w") return r - c;
  } else {
    if (n === "s") return s + c;
    if (n === "n") return r - c;
  }
  return t <= e ? r - c : s + c;
}
function To(t, e, n, o, r) {
  const s = (t.x + e.x) / 2, c = (t.y + e.y) / 2;
  if (n === "u") {
    if (o) {
      const x = Jt(t.x, e.x, t.side, "x");
      return [t, { x, y: t.y }, { x, y: e.y }, e];
    }
    const l = Jt(t.y, e.y, t.side, "y");
    return [t, { x: t.x, y: l }, { x: e.x, y: l }, e];
  }
  if (n === "zigzag") {
    if (o) {
      const y = Jt(t.x, e.x, t.side, "x"), p = Jt(t.y, e.y, t.side, "y");
      return r ? [t, { x: y, y: t.y }, { x: y, y: p }, { x: s, y: p }, { x: s, y: e.y }, e] : [t, { x: y, y: t.y }, { x: y, y: p }, { x: e.x, y: p }, e];
    }
    const l = Jt(t.y, e.y, t.side, "y"), x = Jt(t.x, e.x, t.side, "x");
    return r ? [t, { x: t.x, y: l }, { x, y: l }, { x, y: e.y }, e] : [t, { x: t.x, y: l }, { x, y: l }, { x, y: c }, { x: e.x, y: c }, e];
  }
  return [];
}
function bn(t, e, n = [], o = "elbow", r = []) {
  if (r.length > 0) return Lo(t, e, r);
  const s = t.side ?? (Math.abs(e.x - t.x) >= Math.abs(e.y - t.y) ? "e" : "s"), c = e.side ?? (s === "e" || s === "w" ? "w" : "n"), l = s === "e" || s === "w", x = c === "e" || c === "w", y = Ue(t.x, e.x, n, "x"), p = Ue(t.y, e.y, n, "y"), u = [];
  if (l && x) {
    for (const f of y) u.push([t, { x: f, y: t.y }, { x: f, y: e.y }, e]);
    for (const f of p) u.push([t, { x: t.x, y: f }, { x: e.x, y: f }, e]);
  } else if (!l && !x) {
    for (const f of p) u.push([t, { x: t.x, y: f }, { x: e.x, y: f }, e]);
    for (const f of y) u.push([t, { x: f, y: t.y }, { x: f, y: e.y }, e]);
  } else if (l) {
    u.push([t, { x: e.x, y: t.y }, e]);
    for (const f of p)
      u.push([t, { x: t.x, y: f }, { x: e.x, y: f }, e]), u.push([t, { x: t.x, y: f }, e]);
    for (const f of y) u.push([t, { x: f, y: t.y }, { x: f, y: e.y }, e]);
  } else {
    u.push([t, { x: t.x, y: e.y }, e]);
    for (const f of p)
      u.push([t, { x: t.x, y: f }, e]), u.push([t, { x: t.x, y: f }, { x: e.x, y: f }, e]);
    for (const f of y) u.push([t, { x: f, y: t.y }, { x: f, y: e.y }, e]);
  }
  const a = $e(u, n);
  if (o === "elbow") return a;
  if (o === "reverse") {
    const f = Ve(a), X = $e(u.filter((w) => Ve(w) !== f), n);
    return X.length > 1 ? X : a;
  }
  const i = To(t, e, o, l, x), d = $e([i], n);
  return d.length > 1 ? d : a;
}
function kn(t) {
  return t.length < 2 ? 0 : ae(t[t.length - 2], t[t.length - 1]);
}
const { PI: Eo } = Math, ce = Eo + 1e-4, Ge = 0.5, qe = [1, 1];
function Qe(t, e, n, o = (r) => r) {
  return t * o(0.5 - e * (0.5 - n));
}
const { min: Me } = Math;
function $n(t, e, n) {
  let o = Me(1, e / n);
  return Me(1, t + (Me(1, 1 - o) - t) * (o * 0.275));
}
function Ao(t) {
  return [-t[0], -t[1]];
}
function Lt(t, e) {
  return [t[0] + e[0], t[1] + e[1]];
}
function Ze(t, e, n) {
  return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
}
function Ht(t, e) {
  return [t[0] - e[0], t[1] - e[1]];
}
function Pe(t, e, n) {
  return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
}
function Ot(t, e) {
  return [t[0] * e, t[1] * e];
}
function ze(t, e, n) {
  return t[0] = e[0] * n, t[1] = e[1] * n, t;
}
function Wo(t, e) {
  return [t[0] / e, t[1] / e];
}
function Mn(t) {
  return [t[1], -t[0]];
}
function Se(t, e) {
  let n = e[0];
  return t[0] = e[1], t[1] = -n, t;
}
function Je(t, e) {
  return t[0] * e[0] + t[1] * e[1];
}
function Do(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}
function Oo(t) {
  return Math.hypot(t[0], t[1]);
}
function Re(t, e) {
  let n = t[0] - e[0], o = t[1] - e[1];
  return n * n + o * o;
}
function zn(t) {
  return Wo(t, Oo(t));
}
function Ho(t, e) {
  return Math.hypot(t[1] - e[1], t[0] - e[0]);
}
function Ae(t, e, n) {
  let o = Math.sin(n), r = Math.cos(n), s = t[0] - e[0], c = t[1] - e[1], l = s * r - c * o, x = s * o + c * r;
  return [l + e[0], x + e[1]];
}
function tn(t, e, n, o) {
  let r = Math.sin(o), s = Math.cos(o), c = e[0] - n[0], l = e[1] - n[1], x = c * s - l * r, y = c * r + l * s;
  return t[0] = x + n[0], t[1] = y + n[1], t;
}
function en(t, e, n) {
  return Lt(t, Ot(Ht(e, t), n));
}
function _o(t, e, n, o) {
  let r = n[0] - e[0], s = n[1] - e[1];
  return t[0] = e[0] + r * o, t[1] = e[1] + s * o, t;
}
function Sn(t, e, n) {
  return Lt(t, Ot(e, n));
}
const xt = [0, 0], At = [0, 0], Wt = [0, 0];
function Bo(t, e) {
  let n = Sn(t, zn(Mn(Ht(t, Lt(t, [1, 1])))), -e), o = [], r = 1 / 13;
  for (let s = r; s <= 1; s += r) o.push(Ae(n, t, ce * 2 * s));
  return o;
}
function jo(t, e, n) {
  let o = [], r = 1 / n;
  for (let s = r; s <= 1; s += r) o.push(Ae(e, t, ce * s));
  return o;
}
function Ko(t, e, n) {
  let o = Ht(e, n), r = Ot(o, 0.5), s = Ot(o, 0.51);
  return [Ht(t, r), Ht(t, s), Lt(t, s), Lt(t, r)];
}
function Uo(t, e, n, o) {
  let r = [], s = Sn(t, e, n), c = 1 / o;
  for (let l = c; l < 1; l += c) r.push(Ae(s, t, ce * 3 * l));
  return r;
}
function Vo(t, e, n) {
  return [Lt(t, Ot(e, n)), Lt(t, Ot(e, n * 0.99)), Ht(t, Ot(e, n * 0.99)), Ht(t, Ot(e, n))];
}
function nn(t, e, n) {
  return t === !1 || t === void 0 ? 0 : t === !0 ? Math.max(e, n) : t;
}
function Go(t, e, n) {
  return t.slice(0, 10).reduce((o, r) => {
    let s = r.pressure;
    return e && (s = $n(o, r.distance, n)), (o + s) / 2;
  }, t[0].pressure);
}
function qo(t, e = {}) {
  let { size: n = 16, smoothing: o = 0.5, thinning: r = 0.5, simulatePressure: s = !0, easing: c = (L) => L, start: l = {}, end: x = {}, last: y = !1 } = e, { cap: p = !0, easing: u = (L) => L * (2 - L) } = l, { cap: a = !0, easing: i = (L) => --L * L * L + 1 } = x;
  if (t.length === 0 || n <= 0) return [];
  let d = t[t.length - 1].runningLength, f = nn(l.taper, n, d), X = nn(x.taper, n, d), w = (n * o) ** 2, M = [], b = [], m = Go(t, s, n), h = Qe(n, r, t[t.length - 1].pressure, c), N, v = t[0].vector, C = t[0].point, S = C, k = C, $ = S, z = !1;
  for (let L = 0; L < t.length; L++) {
    let { pressure: W } = t[L], { point: O, vector: T, distance: H, runningLength: P } = t[L], _ = L === t.length - 1;
    if (!_ && d - P < 3) continue;
    r ? (s && (W = $n(m, H, n)), h = Qe(n, r, W, c)) : h = n / 2, N === void 0 && (N = h);
    let K = P < f ? u(P / f) : 1, Z = d - P < X ? i((d - P) / X) : 1;
    h = Math.max(0.01, h * Math.min(K, Z));
    let at = (_ ? t[L] : t[L + 1]).vector, G = _ ? 1 : Je(T, at), mt = Je(T, v) < 0 && !z, ct = G !== null && G < 0;
    if (mt || ct) {
      Se(xt, v), ze(xt, xt, h);
      for (let J = 0; J <= 1; J += 0.07692307692307693) Pe(At, O, xt), tn(At, At, O, ce * J), k = [At[0], At[1]], M.push(k), Ze(Wt, O, xt), tn(Wt, Wt, O, ce * -J), $ = [Wt[0], Wt[1]], b.push($);
      C = k, S = $, ct && (z = !0);
      continue;
    }
    if (z = !1, _) {
      Se(xt, T), ze(xt, xt, h), M.push(Ht(O, xt)), b.push(Lt(O, xt));
      continue;
    }
    _o(xt, at, T, G), Se(xt, xt), ze(xt, xt, h), Pe(At, O, xt), k = [At[0], At[1]], (L <= 1 || Re(C, k) > w) && (M.push(k), C = k), Ze(Wt, O, xt), $ = [Wt[0], Wt[1]], (L <= 1 || Re(S, $) > w) && (b.push($), S = $), m = W, v = T;
  }
  let E = [t[0].point[0], t[0].point[1]], D = t.length > 1 ? [t[t.length - 1].point[0], t[t.length - 1].point[1]] : Lt(t[0].point, [1, 1]), A = [], F = [];
  if (t.length === 1) {
    if (!(f || X) || y) return Bo(E, N || h);
  } else {
    f || X && t.length === 1 || (p ? A.push(...jo(E, b[0], 13)) : A.push(...Ko(E, M[0], b[0])));
    let L = Mn(Ao(t[t.length - 1].vector));
    X || f && t.length === 1 ? F.push(D) : a ? F.push(...Uo(D, L, h, 29)) : F.push(...Vo(D, L, h));
  }
  return M.concat(F, b.reverse(), A);
}
const on = [0, 0];
function rn(t) {
  return t != null && t >= 0;
}
function Qo(t, e = {}) {
  var a;
  let { streamline: n = 0.5, size: o = 16, last: r = !1 } = e;
  if (t.length === 0) return [];
  let s = 0.15 + (1 - n) * 0.85, c = Array.isArray(t[0]) ? t : t.map(({ x: i, y: d, pressure: f = Ge }) => [i, d, f]);
  if (c.length === 2) {
    let i = c[1];
    c = c.slice(0, -1);
    for (let d = 1; d < 5; d++) c.push(en(c[0], i, d / 4));
  }
  c.length === 1 && (c = [...c, [...Lt(c[0], qe), ...c[0].slice(2)]]);
  let l = [{ point: [c[0][0], c[0][1]], pressure: rn(c[0][2]) ? c[0][2] : 0.25, vector: [...qe], distance: 0, runningLength: 0 }], x = !1, y = 0, p = l[0], u = c.length - 1;
  for (let i = 1; i < c.length; i++) {
    let d = r && i === u ? [c[i][0], c[i][1]] : en(p.point, c[i], s);
    if (Do(p.point, d)) continue;
    let f = Ho(d, p.point);
    if (y += f, i < u && !x) {
      if (y < o) continue;
      x = !0;
    }
    Pe(on, p.point, d), p = { point: d, pressure: rn(c[i][2]) ? c[i][2] : Ge, vector: zn(on), distance: f, runningLength: y }, l.push(p);
  }
  return l[0].vector = ((a = l[1]) == null ? void 0 : a.vector) || [0, 0], l;
}
function Zo(t, e = {}) {
  return qo(Qo(t, e), e);
}
var Jo = Zo;
function ye(t) {
  if (t.fillColor)
    try {
      return Te(t.fillColor);
    } catch {
      return t.color ? it[t.color].bg : it.blue.bg;
    }
  return t.color ? it[t.color].bg : it.blue.bg;
}
function Cn(t) {
  if (t.strokeColor)
    try {
      return Te(t.strokeColor);
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
      return Te(t.textColor);
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
      const o = e / 2, r = n / 2, s = Math.min(e, n) / 2, c = s * 0.4, l = [];
      for (let x = 0; x < 10; x++) {
        const y = Math.PI / 5 * x - Math.PI / 2, p = x % 2 === 0 ? s : c;
        l.push(`${o + p * Math.cos(y)},${r + p * Math.sin(y)}`);
      }
      return l.join(" ");
    }
    default:
      return "";
  }
}
function pe(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let e = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [r, s] = t[o], [c, l] = t[o + 1];
    e += ` Q ${r} ${s} ${(r + c) / 2} ${(s + l) / 2}`;
  }
  const n = t[t.length - 1];
  return `${e} L ${n[0]} ${n[1]}`;
}
function Ro(t, e, n) {
  const o = n === "highlighter" ? { size: e * 2.5, thinning: 0, simulatePressure: !1, smoothing: 0.5, streamline: 0.5, last: !0 } : { size: e, thinning: 0, simulatePressure: !1, smoothing: 0.62, streamline: 0.62, last: !0 };
  return Jo(t, o);
}
function Dt(t) {
  return t.replace(/[&<>\"]/g, (e) => e === "&" ? "&amp;" : e === "<" ? "&lt;" : e === ">" ? "&gt;" : "&quot;");
}
function Nn(t) {
  const e = document.createElement("template");
  e.innerHTML = t;
  const n = [[]], o = (r, s) => {
    r.childNodes.forEach((c) => {
      if (c.nodeType === Node.TEXT_NODE) {
        const p = c.textContent ?? "";
        p && n[n.length - 1].push({ text: p, ...s });
        return;
      }
      if (c.nodeType !== Node.ELEMENT_NODE) return;
      const l = c;
      if (l.tagName === "BR") {
        n.push([]);
        return;
      }
      const x = { bold: s.bold || l.tagName === "B" || l.tagName === "STRONG", italic: s.italic || l.tagName === "I" || l.tagName === "EM", underline: s.underline || l.tagName === "U" }, y = l.tagName === "DIV" || l.tagName === "P" || l.tagName === "LI";
      y && n[n.length - 1].length > 0 && n.push([]), o(l, x), y && n.push([]);
    });
  };
  return o(e.content, { bold: !1, italic: !1, underline: !1 }), n.filter((r) => r.length > 0);
}
const an = /* @__PURE__ */ new WeakMap();
function be(t) {
  const e = an.get(t);
  if (e !== void 0) return e;
  const n = t.html ? Fe(t.html) : t.text ? Dt(t.text).replace(/\n/g, "<br>") : "";
  return an.set(t, n), n;
}
function Ie(t) {
  if (t)
    try {
      return so(t);
    } catch {
      return;
    }
}
function Pn(t) {
  try {
    return co(t);
  } catch {
    return null;
  }
}
function le(t) {
  return t.html ? Nn(t.html).map((e) => e.map((n) => n.text).join("")).join(`
`) : t.text ?? "";
}
const fe = 12;
function _t(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function Yt(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function ft(t) {
  const e = t.rotation ?? 0, n = _t(t);
  if (!e) return n;
  const o = Yt(t), r = Math.cos(e), s = Math.sin(e), c = [
    [n.minX, n.minY],
    [n.maxX, n.minY],
    [n.maxX, n.maxY],
    [n.minX, n.maxY]
  ].map(([y, p]) => {
    const u = y - o.x, a = p - o.y;
    return [o.x + u * r - a * s, o.y + u * s + a * r];
  }), l = c.map((y) => y[0]), x = c.map((y) => y[1]);
  return { minX: Math.min(...l), minY: Math.min(...x), maxX: Math.max(...l), maxY: Math.max(...x) };
}
function In(t, e, n) {
  const o = t.rotation ?? 0;
  if (!o) return { x: e, y: n };
  const r = Yt(t), s = Math.cos(-o), c = Math.sin(-o), l = e - r.x, x = n - r.y;
  return { x: r.x + l * s - x * c, y: r.y + l * c + x * s };
}
function ve(t, e, n, o, r, s) {
  const c = r - n, l = s - o, x = c * c + l * l, y = x === 0 ? 0 : Math.max(0, Math.min(1, ((t - n) * c + (e - o) * l) / x));
  return Math.hypot(t - (n + y * c), e - (o + y * l));
}
function we(t, e, n, o, r, s) {
  const c = 8 / o;
  if (t.type === "arrow") {
    const y = (t.strokeWidth ?? 2.5) / o / 2 + c, p = It(t, r ?? /* @__PURE__ */ new Map(), s);
    if (p.routing === "orthogonal" && p.pathPoints && p.pathPoints.length > 1) {
      for (let a = 1; a < p.pathPoints.length; a++) {
        const i = p.pathPoints[a - 1], d = p.pathPoints[a];
        if (ve(e, n, i.x, i.y, d.x, d.y) <= y) return !0;
      }
      return !1;
    }
    if (p.bend === 0) return ve(e, n, p.start.x, p.start.y, p.end.x, p.end.y) <= y;
    let u = p.start;
    for (let a = 1; a <= 16; a++) {
      const i = se(a / 16, p.start, p.control, p.end);
      if (ve(e, n, u.x, u.y, i.x, i.y) <= y) return !0;
      u = i;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const u = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / o / 2 + c;
    if (t.points.length === 1) {
      const [a, i] = t.points[0];
      return Math.hypot(e - a, n - i) <= u;
    }
    for (let a = 1; a < t.points.length; a++) {
      const [i, d] = t.points[a - 1], [f, X] = t.points[a];
      if (ve(e, n, i, d, f, X) <= u) return !0;
    }
    return !1;
  }
  const l = In(t, e, n), x = _t(t);
  if (t.type === "frame") {
    const y = l.x >= x.minX - c && l.x <= x.maxX + c && l.y >= x.minY - c && l.y <= x.maxY + c && (l.x <= x.minX + c || l.x >= x.maxX - c || l.y <= x.minY + c || l.y >= x.maxY - c), p = l.x >= x.minX - c && l.x <= x.maxX + c && l.y >= x.minY - 28 / o && l.y <= x.minY;
    return y || p;
  }
  return l.x >= x.minX - c && l.x <= x.maxX + c && l.y >= x.minY - c && l.y <= x.maxY + c;
}
function qt(t, e, n) {
  const o = _t(t), r = (o.minX + o.maxX) / 2, s = (o.minY + o.maxY) / 2, c = e - r, l = n - s;
  if (c === 0 && l === 0) return { x: r, y: s, side: "e" };
  const x = (o.maxX - o.minX) / 2, y = (o.maxY - o.minY) / 2, p = x === 0 ? 1 / 0 : Math.abs(x / c), u = y === 0 ? 1 / 0 : Math.abs(y / l);
  return p <= u ? { x: r + c * p, y: s + l * p, side: c >= 0 ? "e" : "w" } : { x: r + c * u, y: s + l * u, side: l >= 0 ? "s" : "n" };
}
function Ln(t, e, n, o) {
  const r = /* @__PURE__ */ new Set([e.id, n, o]);
  return t.filter((s) => !r.has(s.id)).map((s) => {
    const c = ft(s);
    return { minX: c.minX - fe, minY: c.minY - fe, maxX: c.maxX + fe, maxY: c.maxY + fe };
  }).filter((s) => s.maxX > s.minX && s.maxY > s.minY);
}
function It(t, e, n = []) {
  const o = t.fromId ? e.get(t.fromId) : void 0, r = t.toId ? e.get(t.toId) : void 0;
  let s = { x: t.x, y: t.y }, c = { x: t.x + t.w, y: t.y + t.h };
  if (o && r) {
    const d = Yt(o), f = Yt(r);
    s = qt(o, f.x, f.y), c = qt(r, d.x, d.y);
  } else o ? s = qt(o, c.x, c.y) : r && (c = qt(r, s.x, s.y));
  const l = (s.x + c.x) / 2, x = (s.y + c.y) / 2, y = t.bend ?? 0;
  let p = { x: l, y: x };
  if (y !== 0) {
    const d = c.x - s.x, f = c.y - s.y, X = Math.hypot(d, f) || 1;
    p = { x: l + -f / X * y, y: x + d / X * y };
  }
  const u = !!(o || r), a = t.routing ?? (u ? "orthogonal" : y !== 0 ? "curved" : "straight");
  if (a !== "orthogonal") return { start: s, end: c, control: p, bend: y, routing: a };
  const i = Ln(n, t, o == null ? void 0 : o.id, r == null ? void 0 : r.id);
  return {
    start: s,
    end: c,
    control: p,
    bend: y,
    routing: a,
    pathPoints: yn(bn(s, c, i, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function se(t, e, n, o) {
  const r = 1 - t;
  return { x: r * r * e.x + 2 * r * t * n.x + t * t * o.x, y: r * r * e.y + 2 * r * t * n.y + t * t * o.y };
}
function Fn(t, e, n, o, r) {
  const s = [];
  let c = 0;
  for (const l of t) {
    if (l.type !== "draw" || !l.points) {
      if (we(l, e, n, r)) continue;
      s.push(l);
      continue;
    }
    const x = [];
    let y = [];
    for (const [u, a] of l.points)
      Math.hypot(u - e, a - n) <= o / r ? (y.length > 1 && x.push(y), y = []) : y.push([u, a]);
    if (y.length > 1 && x.push(y), x.length === 0) continue;
    const p = _t(l);
    x.forEach((u) => s.push({ ...l, id: `${l.id}-e${c++}`, points: u, x: p.minX, y: p.minY, w: p.maxX - p.minX, h: p.maxY - p.minY }));
  }
  return s;
}
function tr(t, e, n) {
  const o = 6 / n;
  let r = null, s = null;
  const c = [], l = [t.minX, (t.minX + t.maxX) / 2, t.maxX], x = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const y of e) {
    const p = ft(y), u = [p.minX, (p.minX + p.maxX) / 2, p.maxX], a = [p.minY, (p.minY + p.maxY) / 2, p.maxY];
    for (const i of l) for (const d of u) {
      const f = d - i;
      Math.abs(f) <= o && (!r || Math.abs(f) < Math.abs(r.delta)) && (r = { delta: f, at: d });
    }
    for (const i of x) for (const d of a) {
      const f = d - i;
      Math.abs(f) <= o && (!s || Math.abs(f) < Math.abs(s.delta)) && (s = { delta: f, at: d });
    }
  }
  return r && c.push({ x1: r.at, y1: t.minY - 1e3, x2: r.at, y2: t.maxY + 1e3 }), s && c.push({ x1: t.minX - 1e3, y1: s.at, x2: t.maxX + 1e3, y2: s.at }), { dx: (r == null ? void 0 : r.delta) ?? 0, dy: (s == null ? void 0 : s.delta) ?? 0, guides: c };
}
function er(t, e) {
  var l, x, y, p;
  const n = t.points, o = e.get(t.id);
  if (!o || o.count > n.length) {
    const u = pe(n);
    return e.set(t.id, { count: n.length, lastX: ((l = n.at(-1)) == null ? void 0 : l[0]) ?? 0, lastY: ((x = n.at(-1)) == null ? void 0 : x[1]) ?? 0, d: u }), u;
  }
  const r = n[n.length - 1];
  if (o.count === n.length) {
    if (r && o.lastX === r[0] && o.lastY === r[1]) return o.d;
    const u = pe(n);
    return e.set(t.id, { count: n.length, lastX: (r == null ? void 0 : r[0]) ?? 0, lastY: (r == null ? void 0 : r[1]) ?? 0, d: u }), u;
  }
  let s = o.d;
  const c = s.lastIndexOf(" L ");
  if (c < 0)
    s = pe(n);
  else {
    s = s.slice(0, c);
    for (let a = o.count - 1; a < n.length - 1; a++) {
      const [i, d] = n[a], [f, X] = n[a + 1];
      s += ` Q ${i} ${d} ${(i + f) / 2} ${(d + X) / 2}`;
    }
    const u = n[n.length - 1];
    s += ` L ${u[0]} ${u[1]}`;
  }
  return e.set(t.id, { count: n.length, lastX: ((y = n.at(-1)) == null ? void 0 : y[0]) ?? 0, lastY: ((p = n.at(-1)) == null ? void 0 : p[1]) ?? 0, d: s }), s;
}
const nr = ie.memo(function({
  shape: e,
  cameraZoom: n,
  color: o,
  pathD: r
}) {
  if (!e.points) return null;
  const s = e.drawMode ?? "pen", c = e.strokeWidth ?? 3;
  return /* @__PURE__ */ Y(
    "path",
    {
      "data-canvas-vector-shape-id": e.id,
      "data-canvas-vector-shape-type": "draw",
      "data-canvas-draw-mode": s,
      "data-canvas-stroke-width": c,
      d: r,
      fill: "none",
      stroke: o,
      strokeWidth: c / n,
      strokeOpacity: s === "highlighter" ? 0.35 : void 0,
      fillOpacity: s === "highlighter" ? 0.35 : void 0,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  );
}), or = 14;
function rr({
  visiblePaintOrder: t,
  selected: e,
  shapeById: n,
  allShapes: o,
  camera: r,
  interaction: s,
  eraserPos: c,
  guides: l,
  marquee: x,
  strokeColorOf: y
}) {
  const p = Q(/* @__PURE__ */ new Map());
  return /* @__PURE__ */ Y("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ U("g", { transform: `scale(${r.z}) translate(${-r.x}, ${-r.y})`, children: [
    t.map((u) => {
      if (u.type === "draw" && u.points) {
        const $ = e.has(u.id);
        return /* @__PURE__ */ Y(
          nr,
          {
            shape: u,
            cameraZoom: r.z,
            color: $ ? V.blue : y(u),
            pathD: er(u, p.current)
          },
          u.id
        );
      }
      if (u.type !== "arrow") return null;
      const a = e.has(u.id) ? V.blue : y(u), i = It(u, n, o), d = u.strokeWidth ?? 2.5, f = d / r.z, X = Math.max(10, 8 + d * 2), w = Math.max(4, 2 + d), M = X / r.z, b = w / r.z, m = i.routing === "orthogonal" && i.pathPoints ? i.pathPoints : null, h = m && m.length > 1;
      let N, v;
      if (h)
        N = Ye(m), v = kn(m);
      else if (i.routing === "curved") {
        N = `M ${i.start.x} ${i.start.y} Q ${i.control.x} ${i.control.y} ${i.end.x} ${i.end.y}`;
        const $ = se(0.94, i.start, i.control, i.end);
        v = Math.atan2(i.end.y - $.y, i.end.x - $.x);
      } else
        N = `M ${i.start.x} ${i.start.y} L ${i.end.x} ${i.end.y}`, v = Math.atan2(i.end.y - i.start.y, i.end.x - i.start.x);
      const C = h && m.length >= 2 ? ae(m[0], m[1]) : i.routing === "orthogonal" && i.start.side ? i.start.side === "e" ? 0 : i.start.side === "w" ? Math.PI : i.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : ae(i.start, i.end), S = u.strokeStyle === "dashed" ? `${8 / r.z} ${5 / r.z}` : u.strokeStyle === "dotted" ? `${1.5 / r.z} ${4 / r.z}` : void 0, k = ($, z, E, D) => $ === "dot" ? /* @__PURE__ */ Y("circle", { "data-canvas-arrow-dot-radius": w, cx: z, cy: E, r: b, fill: a }) : $ === "none" ? null : /* @__PURE__ */ Y(
        "polygon",
        {
          "data-canvas-arrowhead-size": X,
          points: `${z},${E} ${z - M * Math.cos(D - 0.4)},${E - M * Math.sin(D - 0.4)} ${z - M * Math.cos(D + 0.4)},${E - M * Math.sin(D + 0.4)}`,
          fill: a
        }
      );
      return /* @__PURE__ */ U("g", { "data-canvas-vector-shape-id": u.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": i.routing, "data-canvas-stroke-width": d, children: [
        /* @__PURE__ */ Y("path", { d: N, fill: "none", stroke: a, strokeWidth: f, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: S }),
        k(u.arrowEnd ?? "arrow", i.end.x, i.end.y, v),
        k(u.arrowStart ?? "none", i.start.x, i.start.y, C + Math.PI)
      ] }, u.id);
    }),
    s.kind === "connect" && s.fromId !== void 0 && s.toX !== void 0 && s.toY !== void 0 && (() => {
      const u = n.get(s.fromId);
      if (!u) return null;
      const a = qt(u, s.toX, s.toY), i = s.hoverId ? n.get(s.hoverId) : null, d = i ? qt(i, a.x, a.y) : { x: s.toX, y: s.toY }, f = i ? bn(a, d, Ln(o, { id: "__preview" }, u.id, i.id)) : [a, d];
      return /* @__PURE__ */ U("g", { children: [
        /* @__PURE__ */ Y("path", { d: Ye(f), stroke: V.blue, strokeWidth: 2 / r.z, strokeDasharray: `${5 / r.z} ${4 / r.z}` }),
        i ? /* @__PURE__ */ Y("rect", { x: ft(i).minX - 3 / r.z, y: ft(i).minY - 3 / r.z, width: ft(i).maxX - ft(i).minX + 6 / r.z, height: ft(i).maxY - ft(i).minY + 6 / r.z, fill: "none", stroke: V.blue, strokeWidth: 2 / r.z, rx: 6 / r.z }) : /* @__PURE__ */ Y("circle", { cx: d.x, cy: d.y, r: 5 / r.z, fill: V.blue })
      ] });
    })(),
    c && /* @__PURE__ */ Y("circle", { cx: c.x, cy: c.y, r: or / r.z, fill: V.roseSoft, stroke: V.rose, strokeWidth: 1 / r.z }),
    l.map((u, a) => /* @__PURE__ */ Y("line", { x1: u.x1, y1: u.y1, x2: u.x2, y2: u.y2, stroke: V.pink, strokeWidth: 1 / r.z, strokeDasharray: `${4 / r.z} ${4 / r.z}` }, `guide-${a}`)),
    x && /* @__PURE__ */ Y("rect", { x: Math.min(x.startX, x.curX), y: Math.min(x.startY, x.curY), width: Math.abs(x.curX - x.startX), height: Math.abs(x.curY - x.startY), fill: V.marqueeFill, stroke: V.blue, strokeWidth: 1 / r.z })
  ] }) });
}
const ir = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], ar = /* @__PURE__ */ new Set([
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
]), cr = [
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
function ke(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function Tn(t) {
  return ar.has(t.trim().toLowerCase());
}
function En(t) {
  const e = ke(t);
  return e ? Tn(e) ? e : `"${e.replace(/"/g, '\\"')}"` : "";
}
function sr(t) {
  return ke(t).split(",").map((e) => e.trim()).filter(Boolean).map(En).filter(Boolean).join(", ");
}
function An(t) {
  return ke(t).split(",").map((e) => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function oe(t) {
  return t.split(",").map((e) => ke(e).replace(/^["']|["']$/g, "")).filter(Boolean).filter((e) => !Tn(e));
}
const me = Array.from(/* @__PURE__ */ new Set([
  ...cr,
  ...oe(Nt.sans.stack),
  ...oe(Nt.serif.stack),
  ...oe(Nt.mono.stack),
  ...oe(Nt.gothic.stack),
  ...oe(Nt.korean.stack)
]));
function lr() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return me;
  const t = me.filter((e) => {
    const n = En(e);
    return n ? document.fonts.check(`12px ${n}`) : !1;
  });
  return t.length > 0 ? t : me;
}
const ur = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, dr = 24, hr = 28, Wn = 720;
function yt(t) {
  return t.fontSize ?? ur[t.type] ?? 14;
}
function wt(t) {
  var e;
  if (!t.fontFamily) return Nt.sans.stack;
  if (t.fontFamily === "custom") {
    let n = "";
    try {
      n = An(lo(t.customFontFamily ?? ""));
    } catch {
    }
    return sr(n) || Nt.sans.stack;
  }
  return ((e = Nt[t.fontFamily]) == null ? void 0 : e.stack) ?? Nt.sans.stack;
}
function zt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function xr(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function fr(t) {
  var e, n, o;
  if ((e = t.html) != null && e.includes('<ul data-list-style="dash">')) return "dash";
  if ((n = t.html) != null && n.includes("<ul>")) return "bullet";
  if ((o = t.html) != null && o.includes("<ol>")) return "number";
}
function vr(t, e) {
  return {
    w: Math.min(Wn, Math.max(dr, Math.ceil(t))),
    h: Math.max(hr, Math.ceil(e))
  };
}
function pr(t, e) {
  const n = t.cloneNode(!0);
  n.removeAttribute("id"), n.removeAttribute("role"), n.removeAttribute("aria-label"), n.removeAttribute("aria-multiline"), n.removeAttribute("contenteditable"), n.removeAttribute("data-seeded"), n.innerHTML = Fe(t.innerHTML), (n.textContent || "").length === 0 && (n.innerHTML = "&nbsp;"), Object.assign(n.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${Wn}px`,
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
    fontSize: `${yt(e)}px`,
    fontFamily: wt(e)
  }), document.body.appendChild(n);
  const o = n.getBoundingClientRect();
  return n.remove(), vr(o.width, o.height);
}
const mr = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), gr = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function yr({
  visiblePaintOrder: t,
  selected: e,
  editingId: n,
  camera: o,
  shapeById: r,
  allShapes: s,
  peerCursors: c,
  isDarkMode: l,
  renderEditor: x,
  renderShapeBody: y,
  setEditingId: p,
  onBendHandleDown: u,
  onOrthogonalSegmentHandleDown: a,
  onResizeHandleDown: i,
  onRotateHandleDown: d,
  onConnectHandleDown: f,
  onArrowEndpointDown: X
}) {
  return /* @__PURE__ */ U(Ut, { children: [
    /* @__PURE__ */ Y("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((w) => {
      if (w.type === "draw") return null;
      if (w.type === "arrow") {
        const m = It(w, r, s), h = m.routing === "orthogonal" && m.pathPoints ? Ee(m.pathPoints) : m.routing === "curved" ? se(0.5, m.start, m.control, m.end) : { x: (m.start.x + m.end.x) / 2, y: (m.start.y + m.end.y) / 2 }, N = n === w.id, v = be(w), C = e.has(w.id), S = le(w).trim(), k = v || (C ? "관계 입력" : "");
        return !k && !N ? null : /* @__PURE__ */ Y(ie.Fragment, { children: /* @__PURE__ */ Y("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: h.x - 90, top: h.y - 18, width: 180, height: 36 }, onDoubleClick: ($) => {
          $.stopPropagation(), p(w.id);
        }, children: (k || N) && /* @__PURE__ */ Y(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": S ? `관계 설명: ${S}` : "관계 설명 입력",
            title: N ? void 0 : S ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${l ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: yt(w),
              fontFamily: wt(w),
              maxWidth: "100%",
              minWidth: N ? 120 / o.z : void 0,
              minHeight: N ? 28 / o.z : void 0,
              color: w.textColor
            },
            children: N ? x("text-center whitespace-nowrap") : /* @__PURE__ */ Y("span", { dangerouslySetInnerHTML: { __html: k } }, "canvas-view")
          }
        ) }) }, w.id);
      }
      const M = e.has(w.id), b = _t(w);
      return /* @__PURE__ */ U(
        "div",
        {
          "data-canvas-shape-id": w.id,
          "data-canvas-shape-type": w.type,
          "data-canvas-selected": M ? "true" : void 0,
          "data-canvas-text-align": zt(w),
          "data-canvas-text-color": w.textColor,
          "data-canvas-font-size": yt(w),
          "data-canvas-font-family": w.fontFamily === "custom" ? w.customFontFamily ?? "custom" : w.fontFamily ?? "sans",
          "data-canvas-manual-size": w.manualSize ? "true" : void 0,
          "data-canvas-group-id": w.groupId,
          "data-canvas-list-kind": fr(w),
          "data-canvas-x": w.x,
          "data-canvas-y": w.y,
          "data-canvas-width": w.w,
          "data-canvas-height": w.h,
          className: "absolute",
          style: { left: b.minX, top: b.minY, width: b.maxX - b.minX, height: b.maxY - b.minY, transform: w.rotation ? `rotate(${w.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (m) => {
            m.stopPropagation(), mr.has(w.type) && p(w.id);
          },
          children: [
            y(w),
            M && /* @__PURE__ */ U(Ut, { children: [
              /* @__PURE__ */ Y("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${V.blue}` } }),
              e.size === 1 && /* @__PURE__ */ U(Ut, { children: [
                ["nw", "ne", "sw", "se"].map((m) => /* @__PURE__ */ Y("div", { "data-canvas-resize-handle": m, onPointerDown: (h) => i(h, w, m), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${m}-resize`, left: m.includes("w") ? -5 / o.z : void 0, right: m.includes("e") ? -5 / o.z : void 0, top: m.includes("n") ? -5 / o.z : void 0, bottom: m.includes("s") ? -5 / o.z : void 0 } }, m)),
                /* @__PURE__ */ Y("div", { onPointerDown: (m) => d(m, w), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                gr.has(w.type) && ["n", "s", "w", "e"].map((m) => /* @__PURE__ */ Y("div", { onPointerDown: (h) => f(h, w), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...m === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : m === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : m === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${m}`))
              ] })
            ] })
          ]
        },
        w.id
      );
    }) }),
    e.size === 1 && s.filter((w) => w.type === "arrow" && e.has(w.id)).map((w) => {
      const M = It(w, r, s), b = (m, h) => ({
        left: (m.x - o.x) * o.z - h / 2,
        top: (m.y - o.y) * o.z - h / 2
      });
      return /* @__PURE__ */ U(ie.Fragment, { children: [
        M.routing === "orthogonal" && M.pathPoints && M.pathPoints.length > 2 ? M.pathPoints.slice(0, -1).map((m, h) => {
          var C;
          const N = (C = M.pathPoints) == null ? void 0 : C[h + 1];
          if (!N) return null;
          const v = { x: (m.x + N.x) / 2, y: (m.y + N.y) / 2 };
          return /* @__PURE__ */ Y("div", { "data-canvas-arrow-segment-handle": h, onPointerDown: (S) => a(S, w, h), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...b(v, 12), cursor: m.x === N.x ? "ew-resize" : "ns-resize" } }, `segment-${h}`);
        }) : M.routing === "curved" && /* @__PURE__ */ Y("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (m) => u(m, w), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (M.start.x + M.end.x) / 2 * o.z - o.x * o.z - 5, top: (M.start.y + M.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map((m) => {
          const h = m === "start" ? M.start : M.end;
          return /* @__PURE__ */ Y("div", { "data-canvas-arrow-endpoint": m, onPointerDown: (N) => X(N, w, m), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...b(h, 12), cursor: "grab" } }, m);
        })
      ] }, `arrow-handles-${w.id}`);
    }),
    c == null ? void 0 : c.map((w) => /* @__PURE__ */ U("div", { className: "absolute pointer-events-none z-40", style: { left: (w.x - o.x) * o.z, top: (w.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ Y("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ Y("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: w.color, stroke: V.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ Y("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: w.color }, children: w.name })
    ] }, w.id))
  ] });
}
function We(t) {
  var e;
  return t.type === "card" && ((e = t.category) == null ? void 0 : e.toLowerCase()) === "diagram";
}
function wr(t) {
  const e = ["color"];
  return t.type === "arrow" ? e.push("arrow") : t.type !== "image" && t.type !== "draw" && e.push("text"), e.push("arrange"), We(t) && e.push("diagram"), e;
}
function si(t) {
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
const br = "#3b82f6";
function Kt(t, e, n) {
  return Math.min(n, Math.max(e, t));
}
function ge(t) {
  return Math.round(Kt(t, 0, 255)).toString(16).padStart(2, "0");
}
function kr(t) {
  const e = t.trim().endsWith("%"), n = Number.parseFloat(t);
  return Number.isFinite(n) ? e ? n * 2.55 : n : 0;
}
function re(t) {
  var s, c;
  const e = t.trim().toLowerCase(), n = (s = e.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : s[1];
  if (n)
    return n.length === 3 || n.length === 4 ? `#${n.slice(0, 3).split("").map((l) => `${l}${l}`).join("")}` : `#${n.slice(0, 6)}`;
  const o = (c = e.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : c[1];
  if (o) {
    const l = o.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(kr);
    if (l.length === 3) return `#${l.map(ge).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[e] ?? br;
}
function cn(t) {
  const e = re(t).slice(1), n = Number.parseInt(e.slice(0, 2), 16) / 255, o = Number.parseInt(e.slice(2, 4), 16) / 255, r = Number.parseInt(e.slice(4, 6), 16) / 255, s = Math.max(n, o, r), c = Math.min(n, o, r), l = s - c;
  let x = 0;
  return l !== 0 && (s === n ? x = 60 * ((o - r) / l % 6) : s === o ? x = 60 * ((r - n) / l + 2) : x = 60 * ((n - o) / l + 4)), x < 0 && (x += 360), { hue: x, saturation: s === 0 ? 0 : l / s, value: s };
}
function sn({ hue: t, saturation: e, value: n }) {
  const o = (t % 360 + 360) % 360, r = n * e, s = r * (1 - Math.abs(o / 60 % 2 - 1)), c = n - r;
  let l = 0, x = 0, y = 0;
  return o < 60 ? [l, x, y] = [r, s, 0] : o < 120 ? [l, x, y] = [s, r, 0] : o < 180 ? [l, x, y] = [0, r, s] : o < 240 ? [l, x, y] = [0, s, r] : o < 300 ? [l, x, y] = [s, 0, r] : [l, x, y] = [r, 0, s], `#${ge((l + c) * 255)}${ge((x + c) * 255)}${ge((y + c) * 255)}`;
}
function $r(t, e) {
  return Math.abs(t.hue - e.hue) < 0.01 && Math.abs(t.saturation - e.saturation) < 1e-3 && Math.abs(t.value - e.value) < 1e-3;
}
function Mr({ value: t, onChange: e }) {
  const [n, o] = ut(() => cn(t)), r = Q(null), s = Q(null), c = Q(null);
  Xt(() => {
    const M = cn(t);
    o((b) => $r(b, M) ? b : M);
  }, [t]);
  const l = (M) => {
    o(M), e(sn(M));
  }, x = (M) => {
    var v;
    const b = (v = r.current) == null ? void 0 : v.getBoundingClientRect();
    if (!b) return;
    const m = M.clientX - (b.left + b.width / 2), h = M.clientY - (b.top + b.height / 2), N = Math.atan2(h, m) * 180 / Math.PI + 90;
    l({ ...n, hue: (N + 360) % 360 });
  }, y = (M) => {
    var m;
    const b = (m = s.current) == null ? void 0 : m.getBoundingClientRect();
    b && l({
      ...n,
      saturation: Kt((M.clientX - b.left) / b.width, 0, 1),
      value: Kt(1 - (M.clientY - b.top) / b.height, 0, 1)
    });
  }, p = (M, b) => {
    var m, h;
    b.button !== 0 && b.pointerType !== "touch" || (b.preventDefault(), b.stopPropagation(), c.current = M, (h = (m = b.currentTarget).setPointerCapture) == null || h.call(m, b.pointerId), M === "hue" ? x(b) : y(b));
  }, u = (M) => {
    c.current && (M.preventDefault(), c.current === "hue" ? x(M) : y(M));
  }, a = (M) => {
    var b, m;
    c.current = null;
    try {
      (m = (b = M.currentTarget).releasePointerCapture) == null || m.call(b, M.pointerId);
    } catch {
      return;
    }
  }, i = (n.hue - 90) * Math.PI / 180, d = 53, f = {
    left: 66 + Math.cos(i) * d,
    top: 66 + Math.sin(i) * d
  }, X = sn({ hue: n.hue, saturation: 1, value: 1 }), w = (M) => l({ ...n, hue: (n.hue + M + 360) % 360 });
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
        onPointerDown: (M) => p("hue", M),
        onPointerMove: u,
        onPointerUp: a,
        onKeyDown: (M) => {
          (M.key === "ArrowLeft" || M.key === "ArrowDown") && (M.preventDefault(), w(-1)), (M.key === "ArrowRight" || M.key === "ArrowUp") && (M.preventDefault(), w(1));
        },
        children: [
          /* @__PURE__ */ Y("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-hue-marker", style: { left: f.left, top: f.top } })
        ]
      }
    ),
    /* @__PURE__ */ Y(
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
        style: { backgroundColor: X },
        onPointerDown: (M) => p("sv", M),
        onPointerMove: u,
        onPointerUp: a,
        onKeyDown: (M) => {
          const b = M.shiftKey ? 0.1 : 0.02;
          M.key === "ArrowLeft" && (M.preventDefault(), l({ ...n, saturation: Kt(n.saturation - b, 0, 1) })), M.key === "ArrowRight" && (M.preventDefault(), l({ ...n, saturation: Kt(n.saturation + b, 0, 1) })), M.key === "ArrowDown" && (M.preventDefault(), l({ ...n, value: Kt(n.value - b, 0, 1) })), M.key === "ArrowUp" && (M.preventDefault(), l({ ...n, value: Kt(n.value + b, 0, 1) }));
        },
        children: /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${n.saturation * 100}%`, top: `${(1 - n.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ U("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ Y("span", { children: re(t).toUpperCase() })
    ] })
  ] });
}
const zr = [2, 4, 6, 8];
function Sr(t) {
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
      return Dn(t);
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
      return Dn(t);
  }
}
function Dn(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Ce(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function un(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Cr({
  shape: t,
  selection: e,
  selectionActions: n,
  shapes: o,
  camera: r,
  canvasSize: s,
  isDarkMode: c,
  editing: l,
  showPalette: x,
  installedFontFamilies: y,
  setShowPalette: p,
  setActiveColor: u,
  patchSelected: a,
  applyFormat: i,
  applyList: d,
  applyCustomFontFamily: f
}) {
  var Qt, B;
  const X = c ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", w = e.length > 1, M = e.some((g) => !!g.groupId), b = t.type === "draw", m = b || un(t) && !Ce(t) ? "stroke" : Ce(t) ? "fill" : "text", [h, N] = ut(m), [v, C] = ut("");
  Vt(() => N(m), [m, t.id]);
  const S = h === "text" ? Gt(t) : h === "stroke" ? t.strokeColor ?? (t.color ? it[t.color].border : V.ink) : ye(t);
  Vt(() => C(re(S).toUpperCase()), [S]);
  const k = re(S), $ = (g) => {
    a(b || h === "stroke" ? { strokeColor: g } : h === "text" ? { textColor: g } : { fillColor: g });
  }, z = (g) => {
    u(g), a(b || h === "stroke" ? { color: g, strokeColor: void 0 } : h === "text" ? { textColor: it[g].text } : { color: g, fillColor: void 0 }), p(!1);
  }, E = Q(null), [D, A] = ut({ width: 380, height: 260 });
  Vt(() => {
    const g = E.current;
    if (!g) return;
    const I = () => {
      const et = Math.max(1, Math.ceil(g.getBoundingClientRect().width)), lt = Math.max(1, Math.ceil(g.getBoundingClientRect().height));
      A((jt) => jt.width === et && jt.height === lt ? jt : { width: et, height: lt });
    };
    if (I(), typeof ResizeObserver > "u") return;
    const j = new ResizeObserver(I);
    return j.observe(g), () => j.disconnect();
  }, [l, y.length, c, t, x]);
  const F = D.width, L = D.height, W = e.reduce((g, I) => {
    const j = ft(I);
    return {
      minX: Math.min(g.minX, j.minX),
      minY: Math.min(g.minY, j.minY),
      maxX: Math.max(g.maxX, j.maxX),
      maxY: Math.max(g.maxY, j.maxY)
    };
  }, ft(t)), O = (W.minX - r.x) * r.z, T = (W.minY - r.y) * r.z, H = (W.maxX - r.x) * r.z, P = (W.maxY - r.y) * r.z, _ = Math.max(8, s.width - F - 8), K = Math.max(8, s.height - L - 8), Z = (g, I) => ({ left: Math.min(Math.max(8, g), _), top: Math.min(Math.max(8, I), K) }), at = [
    Z((O + H) / 2 - F / 2, T - L - 12),
    Z((O + H) / 2 - F / 2, P + 12),
    Z((s.width - F) / 2, 12),
    Z(O - F - 12, T + (P - T - L) / 2),
    Z(H + 12, T + (P - T - L) / 2)
  ], G = o.map((g) => {
    const I = ft(g);
    return { left: (I.minX - r.x) * r.z, top: (I.minY - r.y) * r.z, right: (I.maxX - r.x) * r.z, bottom: (I.maxY - r.y) * r.z };
  });
  if (t.type === "arrow") {
    const g = It(t, new Map(o.map((lt) => [lt.id, lt])), o), I = g.routing === "orthogonal" && g.pathPoints ? Ee(g.pathPoints) : { x: (g.start.x + g.end.x) / 2, y: (g.start.y + g.end.y) / 2 }, j = 180 * r.z, et = 36 * r.z;
    G.push({
      left: (I.x - r.x) * r.z - j / 2,
      top: (I.y - r.y) * r.z - et / 2,
      right: (I.x - r.x) * r.z + j / 2,
      bottom: (I.y - r.y) * r.z + et / 2
    });
  }
  const mt = at[0], ct = (g, I) => {
    const j = Math.max(0, Math.min(g.left + F, I.right) - Math.max(g.left, I.left)), et = Math.max(0, Math.min(g.top + L, I.bottom) - Math.max(g.top, I.top));
    return j * et;
  }, J = ((Qt = at.map((g) => ({
    candidate: g,
    overlap: G.reduce((I, j) => I + ct(g, j), 0),
    distance: Math.hypot(g.left - mt.left, g.top - mt.top)
  })).sort((g, I) => g.overlap - I.overlap || g.distance - I.distance)[0]) == null ? void 0 : Qt.candidate) ?? mt, St = yt(t), kt = e.every(Sr), q = new Set(e.map(ln)).size === 1 ? ln(t) : void 0, tt = wr(t), dt = t.type === "arrow" ? "arrow" : tt[0] ?? "color", [st, Ct] = ut(dt);
  Vt(() => {
    tt.includes(st) || Ct(dt);
  }, [dt, tt, st]);
  const $t = t.type === "arrow" && !!((B = t.orthogonalWaypoints) != null && B.length), nt = t.type === "arrow" ? t.arrowStart ?? "none" : "none", ot = t.type === "arrow" ? t.arrowEnd ?? "arrow" : "arrow", R = (g, I, j, et, lt = et) => /* @__PURE__ */ Y("button", { type: "button", title: et, "aria-label": lt, onClick: j, className: `h-7 min-w-9 px-2 rounded text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600 ${I ? "bg-blue-600 text-white" : X}`, children: g }), ht = (g) => /* @__PURE__ */ Y("span", { className: "px-1 text-[10px] font-semibold tracking-wide opacity-60", children: g }), Mt = (g, I, j, et, lt = !1) => /* @__PURE__ */ Y(
    "button",
    {
      type: "button",
      title: I,
      "aria-label": I,
      disabled: !et,
      onClick: j,
      className: `w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-default ${lt ? "text-rose-500 hover:bg-rose-500/10" : X}`,
      children: /* @__PURE__ */ Y(g, { className: "w-4 h-4" })
    }
  ), Bt = { color: "색상", text: "텍스트", arrow: "선", arrange: "정렬", diagram: "Diagram" };
  return /* @__PURE__ */ U("div", { ref: E, "data-canvas-inspector": b ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${c ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: J.left, top: J.top }, onPointerDown: (g) => {
    g.stopPropagation();
    const I = g.target instanceof Element ? g.target : null;
    I != null && I.closest("input, select, textarea") || g.preventDefault();
  }, onClick: (g) => g.stopPropagation(), children: [
    w ? /* @__PURE__ */ U("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      e.length,
      "개 선택됨"
    ] }) : /* @__PURE__ */ Y("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: tt.map((g) => /* @__PURE__ */ Y("button", { type: "button", role: "tab", "aria-selected": st === g, onClick: () => Ct(g), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${st === g ? "bg-blue-600 text-white" : X}`, children: Bt[g] }, g)) }),
    /* @__PURE__ */ U("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: w || st === "color" || b ? void 0 : "none" }, children: [
      /* @__PURE__ */ Y("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: b ? "그리기" : "색상" }),
      /* @__PURE__ */ Y("button", { type: "button", title: b ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": b ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => p((g) => !g), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${c ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ Y("span", { className: "canvas-color-wheel-trigger-dot", style: { background: k } }) }) }),
      x && /* @__PURE__ */ U("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${c ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !b && /* @__PURE__ */ U("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          Ce(t) && /* @__PURE__ */ Y("button", { type: "button", role: "tab", "aria-selected": h === "fill", onClick: () => N("fill"), className: h === "fill" ? "is-active" : "", children: "배경" }),
          un(t) && /* @__PURE__ */ Y("button", { type: "button", role: "tab", "aria-selected": h === "stroke", onClick: () => N("stroke"), className: h === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ Y("button", { type: "button", role: "tab", "aria-selected": h === "text", onClick: () => N("text"), className: h === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ Y("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: uo.map((g) => /* @__PURE__ */ Y("button", { type: "button", title: it[g].label, "aria-label": `색 ${it[g].label}`, onClick: () => z(g), className: "canvas-color-preset", style: { background: it[g].bg, borderColor: it[g].border, outline: t.color === g && !t.fillColor && !t.strokeColor ? `2px solid ${V.blue}` : void 0, outlineOffset: 1 } }, g)) }),
        /* @__PURE__ */ Y(Mr, { value: S, onChange: $ }),
        /* @__PURE__ */ U("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ Y("span", { children: "#" }),
          /* @__PURE__ */ Y(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: v.replace(/^#/, ""),
              onChange: (g) => {
                const I = g.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                C(`#${I}`.toUpperCase()), I.length === 6 && $(`#${I}`);
              },
              onBlur: () => C(re(S).toUpperCase()),
              onPointerDown: (g) => g.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !w && st !== "color" && !b && /* @__PURE__ */ U(Ut, { children: [
      /* @__PURE__ */ U("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ Y("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ U("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: Gt(t), color: V.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ Y("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ Y("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? Gt(t), onChange: (g) => a({ textColor: g.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ U("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${c ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ Y("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ Y("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => a({ fontSize: Math.max(8, St - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${X}`, children: /* @__PURE__ */ Y(vo, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ Y("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: St }),
          /* @__PURE__ */ Y("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => a({ fontSize: Math.min(96, St + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${X}`, children: /* @__PURE__ */ Y(po, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ U("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${c ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ Y("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (g) => {
            const I = xr(g.target.value);
            a(I === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: I, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${c ? "text-slate-200" : "text-slate-700"}`, children: ir.map((g) => /* @__PURE__ */ Y("option", { value: g, className: c ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: Nt[g].label }, g)) }),
          /* @__PURE__ */ Y(mo, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ U(Ut, { children: [
          /* @__PURE__ */ Y("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (g) => f(g.target.value), onChange: (g) => g.currentTarget.value && f(g.currentTarget.value), onKeyDown: (g) => {
            g.key === "Enter" && (g.preventDefault(), f(g.currentTarget.value));
          }, onDoubleClick: (g) => g.stopPropagation(), onPointerDown: (g) => g.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${c ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ Y("datalist", { id: `canvas-font-families-${t.id}`, children: y.map((g) => /* @__PURE__ */ Y("option", { value: g }, g)) })
        ] })
      ] }),
      /* @__PURE__ */ U("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${c ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ Y("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ Y("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", go, "왼쪽 정렬"], ["center", yo, "가운데 정렬"], ["right", wo, "오른쪽 정렬"]].map(([g, I, j]) => /* @__PURE__ */ Y("button", { type: "button", "aria-label": j, title: j, onClick: () => a({ textAlign: g }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${zt(t) === g ? "bg-blue-600 text-white shadow-sm" : X}`, children: /* @__PURE__ */ Y(I, { className: "w-4 h-4" }) }, g)) }),
        l && /* @__PURE__ */ U(Ut, { children: [
          /* @__PURE__ */ Y("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ Y("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", bo, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", ko, "번호 목록"]].map(([g, I, j]) => /* @__PURE__ */ Y("button", { type: "button", onClick: () => d(g), "aria-label": j, title: j, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${X}`, children: I ? /* @__PURE__ */ Y(I, { className: "w-4 h-4" }) : /* @__PURE__ */ Y("span", { className: "text-base leading-none", children: "–" }) }, g)) }),
          /* @__PURE__ */ Y("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: $o, label: "굵게" }, { cmd: "italic", Icon: Mo, label: "기울임" }, { cmd: "underline", Icon: zo, label: "밑줄" }].map(({ cmd: g, Icon: I, label: j }) => /* @__PURE__ */ Y("button", { type: "button", onClick: () => i(g), "aria-label": j, title: j, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${X}`, children: /* @__PURE__ */ Y(I, { className: "w-4 h-4" }) }, g)) })
        ] })
      ] }),
      (st === "arrange" && t.type === "card" || st === "arrow" && t.type === "arrow") && /* @__PURE__ */ U("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${c ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ U(Ut, { children: [
          /* @__PURE__ */ Y("div", { className: `w-px h-6 ${c ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ Y("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (g) => g.stopPropagation(), onChange: (g) => a({ category: g.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${c ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ U("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ U("div", { className: "flex items-center gap-1", children: [
            ht("경로"),
            R("직선", (t.routing ?? "straight") === "straight", () => a({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            R("직각", t.routing === "orthogonal", () => a({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            R("곡선", (t.routing ?? "") === "curved", () => a({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            $t && R("자동", !1, () => a({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ U("div", { className: "flex items-center gap-1", children: [
            ht("선"),
            R("—", (t.strokeStyle ?? "solid") === "solid", () => a({ strokeStyle: "solid" }), "실선"),
            R("- -", t.strokeStyle === "dashed", () => a({ strokeStyle: "dashed" }), "파선"),
            R("···", t.strokeStyle === "dotted", () => a({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ U("div", { className: "flex items-center gap-1", children: [
            ht("시작"),
            R(nt === "none" ? "○" : nt === "dot" ? "●" : "◀", nt !== "none", () => a({ arrowStart: nt === "none" ? "arrow" : nt === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${nt === "none" ? "없음" : nt === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ U("div", { className: "flex items-center gap-1", children: [
            ht("끝"),
            R(ot === "none" ? "○" : ot === "dot" ? "●" : "▶", ot !== "none", () => a({ arrowEnd: ot === "arrow" ? "dot" : ot === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${ot === "none" ? "없음" : ot === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      st === "diagram" && /* @__PURE__ */ Y("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${c ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    kt && /* @__PURE__ */ U("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-none ${c ? "border-slate-700" : "border-slate-100"}`, children: [
      ht("굵기"),
      zr.map((g) => /* @__PURE__ */ Y(ie.Fragment, { children: R(String(g), q === g, () => a({ strokeWidth: g }), `굵기 ${g}`) }, g))
    ] }),
    /* @__PURE__ */ U("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${c ? "border-slate-700" : "border-slate-100"}`, children: [
      ht("선택"),
      Mt(So, "그룹 (Ctrl+G)", n.group, w),
      Mt(Co, "그룹 해제 (Ctrl+Shift+G)", n.ungroup, M),
      Mt(Xo, "복제", n.duplicateSelected, !0),
      Mt(Yo, "삭제 (Delete)", n.deleteSelected, !0, !0)
    ] })
  ] });
}
function Xr({
  camera: t,
  editingId: e,
  isDarkMode: n,
  editorRef: o,
  commitEditorHtml: r,
  onEditorKeyDown: s,
  setShapes: c,
  onDirty: l,
  renderDiagram: x
}) {
  const y = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", p = (a, i) => /* @__PURE__ */ Y(
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
      onDoubleClick: (d) => d.stopPropagation(),
      onKeyDown: s,
      className: `${y} ${a}`,
      style: i
    },
    "canvas-editor"
  );
  return { renderEditor: p, renderShapeBody: (a) => {
    const i = it[a.color ?? "blue"], d = e === a.id, f = be(a);
    if (a.type === "frame") {
      const N = a.strokeWidth ?? 2;
      return /* @__PURE__ */ Y(
        "div",
        {
          "data-canvas-stroke-width": N,
          className: "w-full h-full rounded",
          style: { border: `${N / t.z}px solid ${n ? V.slate600 : V.slate400}` },
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
              children: d ? p("", { fontSize: 13 / t.z }) : le(a) || "프레임"
            }
          )
        }
      );
    }
    if (a.type === "note")
      return /* @__PURE__ */ Y(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: ye(a), borderTop: `6px solid ${i.border}`, color: i.text },
          children: d ? p("font-medium", { color: Gt(a), fontSize: yt(a), fontFamily: wt(a), textAlign: zt(a) }) : f ? /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Gt(a), fontSize: yt(a), fontFamily: wt(a), textAlign: zt(a) }, dangerouslySetInnerHTML: { __html: f } }, "canvas-view") : /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Gt(a), fontSize: yt(a), fontFamily: wt(a), textAlign: zt(a) }, children: /* @__PURE__ */ Y("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (a.type === "card") {
      const N = a.cardStyle === "glass";
      return We(a) && x && !d ? /* @__PURE__ */ Y("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: x(a) }) : /* @__PURE__ */ U(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: N ? V.glassFill : a.fillColor ?? V.slateCard,
            backdropFilter: N ? "blur(12px)" : void 0,
            WebkitBackdropFilter: N ? "blur(12px)" : void 0,
            border: `1px solid ${N ? V.glassBorder : V.darkBorder}`,
            boxShadow: N ? V.glassShadow : V.cardShadow
          },
          children: [
            /* @__PURE__ */ U(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (v) => v.stopPropagation(),
                onDoubleClick: (v) => v.stopPropagation(),
                onBlur: (v) => {
                  const S = (v.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  c((k) => k.map(($) => $.id === a.id ? { ...$, category: S } : $)), l();
                },
                onKeyDown: (v) => {
                  v.key === "Enter" && (v.preventDefault(), v.currentTarget.blur());
                },
                children: [
                  "[ ",
                  a.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            d ? p("flex-1 font-medium", { color: a.textColor ?? V.white, fontSize: yt(a), fontFamily: wt(a), textAlign: zt(a) }) : /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: a.textColor ?? V.white, fontSize: yt(a), fontFamily: wt(a), textAlign: zt(a) }, dangerouslySetInnerHTML: { __html: f } }, "canvas-view"),
            /* @__PURE__ */ U("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              a.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (a.type === "text") {
      const N = n ? "text-slate-100" : "text-slate-900", v = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${N}`,
        style: { color: a.textColor, fontSize: yt(a), fontFamily: wt(a), textAlign: zt(a) }
      };
      return d ? p(`font-medium ${N}`, v.style) : f ? /* @__PURE__ */ Y(
        "div",
        {
          "data-canvas-text-view": !0,
          ...v,
          dangerouslySetInnerHTML: { __html: f }
        },
        "canvas-view"
      ) : /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, ...v, children: /* @__PURE__ */ Y("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (a.type === "image") {
      const N = Ie(a.src);
      return N ? /* @__PURE__ */ Y(
        "img",
        {
          src: N,
          alt: a.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const X = ye(a), w = Xn(a), M = Gt(a);
    if (a.type === "triangle" || a.type === "diamond" || a.type === "hexagon" || a.type === "star") {
      const N = a.strokeWidth ?? 2;
      return /* @__PURE__ */ U("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ Y("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${a.w} ${a.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ Y("polygon", { "data-canvas-stroke-width": N, points: Yn(a.type, a.w, a.h), fill: X, stroke: w, strokeWidth: N / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ Y("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: M }, children: d ? p("font-medium", { color: M, fontSize: yt(a), fontFamily: wt(a), textAlign: zt(a) }) : /* @__PURE__ */ Y("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: yt(a), fontFamily: wt(a), textAlign: zt(a) }, dangerouslySetInnerHTML: { __html: f } }, "canvas-view") })
      ] });
    }
    const m = Ie(a.src), h = a.type === "rect" || a.type === "ellipse" ? a.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ Y(
      "div",
      {
        "data-canvas-stroke-width": h,
        className: `w-full h-full flex items-center justify-center p-3 ${a.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: X, border: `${h / t.z}px solid ${w}`, color: M },
        children: d ? p("font-medium", { color: M, fontSize: yt(a), fontFamily: wt(a), textAlign: zt(a) }) : /* @__PURE__ */ U("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: yt(a), fontFamily: wt(a), textAlign: zt(a) }, children: [
          /* @__PURE__ */ Y("div", { dangerouslySetInnerHTML: { __html: f } }),
          m && /* @__PURE__ */ Y(
            "a",
            {
              href: m,
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
function Yr({
  containerRef: t,
  shapesRef: e,
  shapes: n,
  camera: o,
  selected: r,
  editingId: s,
  boardIdentity: c
}) {
  const [l, x] = ut({ width: 0, height: 0 });
  Xt(() => {
    const d = t.current;
    if (!d) return;
    let f = -1, X = -1;
    const w = (b = d.clientWidth, m = d.clientHeight) => {
      b === f && m === X || (f = b, X = m, x({ width: b, height: m }));
    };
    if (w(), typeof ResizeObserver < "u") {
      const b = new ResizeObserver((m) => {
        var N;
        const h = (N = m[0]) == null ? void 0 : N.contentRect;
        w((h == null ? void 0 : h.width) ?? d.clientWidth, (h == null ? void 0 : h.height) ?? d.clientHeight);
      });
      return b.observe(d), () => b.disconnect();
    }
    const M = () => w();
    return window.addEventListener("resize", M), () => window.removeEventListener("resize", M);
  }, [c, t]);
  const y = Pt(() => new Map(n.map((d) => [d.id, d])), [n]), p = Pt(
    () => [...n].sort((d, f) => (d.type === "frame" ? -1 : 0) - (f.type === "frame" ? -1 : 0)),
    [n]
  ), u = Pt(() => {
    if (!t.current || l.width <= 0 || l.height <= 0) return null;
    const d = 200 / o.z;
    return {
      minX: o.x - d,
      minY: o.y - d,
      maxX: o.x + l.width / o.z + d,
      maxY: o.y + l.height / o.z + d
    };
  }, [o, t, l]), a = vt((d) => {
    if (!u) return !1;
    if (d.id === s || r.has(d.id)) return !0;
    if (d.type === "arrow") {
      const X = It(d, y, e.current), M = (X.routing === "orthogonal" ? X.pathPoints : null) ?? [X.start, X.end], b = Math.min(...M.map((v) => v.x)), m = Math.max(...M.map((v) => v.x)), h = Math.min(...M.map((v) => v.y)), N = Math.max(...M.map((v) => v.y));
      return m >= u.minX && b <= u.maxX && N >= u.minY && h <= u.maxY;
    }
    const f = ft(d);
    return f.maxX >= u.minX && f.minX <= u.maxX && f.maxY >= u.minY && f.minY <= u.maxY;
  }, [s, r, y, e, u]), i = Pt(
    () => p.filter(a),
    [a, p]
  );
  return { shapeById: y, visiblePaintOrder: i };
}
function Nr({
  editorRef: t,
  editingId: e,
  setShapes: n,
  setAnnouncement: o,
  onDirty: r,
  patchSelected: s
}) {
  const c = vt(() => {
    const i = t.current;
    if (!i || !e) return;
    let d;
    try {
      d = Fe(i.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const f = i.scrollHeight;
    n((X) => X.map((w) => {
      if (w.id !== e) return w;
      const M = We(w) ? { ...w, text: le({ ...w, html: d, text: void 0 }), html: void 0 } : { ...w, html: d, text: void 0 };
      if (w.type === "text")
        return w.manualSize ? M : { ...M, ...pr(i, w) };
      if (w.type === "arrow") return M;
      const b = w.type === "note" ? 32 : w.type === "card" ? 96 : (
        // category header + type footer
        (w.type === "frame", 24)
      ), m = Math.max(w.h, f + b);
      return { ...M, h: m };
    })), r();
  }, [e, r]), l = (i) => {
    var d;
    (d = t.current) == null || d.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(i), c();
  }, x = () => {
    var X;
    const i = (X = window.getSelection()) == null ? void 0 : X.anchorNode, d = i instanceof Element ? i : i == null ? void 0 : i.parentElement, f = d == null ? void 0 : d.closest("ul, ol");
    return f instanceof HTMLElement ? f : null;
  }, y = (i, d, f) => {
    const X = document.createElement(d);
    for (; i.firstChild; ) X.append(i.firstChild);
    return i.replaceWith(X), X;
  }, p = (i) => {
    const d = t.current;
    if (!d) return;
    d.focus();
    const f = x();
    if (i === "number")
      if ((f == null ? void 0 : f.tagName) === "OL")
        f.removeAttribute("data-list-style");
      else if ((f == null ? void 0 : f.tagName) === "UL")
        y(f, "ol");
      else {
        document.execCommand("insertOrderedList");
        const X = x();
        X == null || X.removeAttribute("data-list-style");
      }
    else if ((f == null ? void 0 : f.tagName) === "UL") {
      const X = f.dataset.listStyle;
      i === X ? document.execCommand("insertUnorderedList") : f.dataset.listStyle = i;
    } else {
      (f == null ? void 0 : f.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const X = x();
      X && (X.dataset.listStyle = i);
    }
    c();
  };
  return { commitEditorHtml: c, applyFormat: l, applyList: p, onEditorKeyDown: (i) => {
    if (i.key === "Tab") {
      i.preventDefault(), document.execCommand(i.shiftKey ? "outdent" : "indent"), c();
      return;
    }
    if (i.key === " ") {
      const d = window.getSelection();
      if (d && d.isCollapsed && d.anchorNode) {
        const f = d.anchorNode, X = f.textContent || "", w = d.anchorOffset, M = X.slice(0, w).trim();
        if (!x()) {
          if (M === "-" || M === "–") {
            i.preventDefault(), f.textContent = X.slice(w), p("dash");
            return;
          }
          if (M === "*") {
            i.preventDefault(), f.textContent = X.slice(w), p("bullet");
            return;
          }
          if (M === "1.") {
            i.preventDefault(), f.textContent = X.slice(w), p("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (i) => {
    const d = An(i);
    if (!d) {
      s({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    s({
      fontFamily: "custom",
      customFontFamily: d
    });
  } };
}
function Pr({
  boardIdentity: t,
  tool: e,
  controlledShapes: n,
  onShapesChange: o,
  onDirty: r
}) {
  const s = Q(null), c = Q(null), [l, x] = ut([]), y = n !== void 0 && o !== void 0, p = Q(/* @__PURE__ */ new WeakMap()), u = Pt(() => {
    const B = p.current;
    return (y ? n ?? [] : l).map((g) => {
      let I = B.get(g);
      return I === void 0 && (I = Pn(g), B.set(g, I)), I;
    }).filter((g) => g !== null);
  }, [y, n, l]), a = Q(o);
  a.current = o;
  const i = vt((B) => {
    const g = a.current;
    if (!g) {
      x(B);
      return;
    }
    g(typeof B == "function" ? B : () => B);
  }, []), [d, f] = ut({ x: -400, y: -300, z: 1 }), [X, w] = ut(/* @__PURE__ */ new Set()), [M, b] = ut(null), [m, h] = ut({ kind: "none" }), [N, v] = ut(!1), [C, S] = ut([]), [k, $] = ut(""), [z, E] = ut(!1), [D, A] = ut(null), [F, L] = ut("blue"), [W, O] = ut(me), T = Q(F);
  T.current = F;
  const H = Q([]), P = Q([]), _ = Q(null), K = Q(/* @__PURE__ */ new Map()), Z = Q(null), at = Q(null), G = Q([]), mt = Q(/* @__PURE__ */ new Set()), ct = Q(u), J = Q(d), St = Q(e), kt = Q(X), pt = Q(M);
  ct.current = u, J.current = d, St.current = e, kt.current = X, pt.current = M;
  const q = Q({ kind: "none" }), tt = vt((B) => {
    q.current = B, h(B);
  }, []), dt = vt((B) => {
    kt.current = B, w(B);
  }, []);
  Vt(() => {
    var g;
    const B = /* @__PURE__ */ new Set();
    kt.current = B, pt.current = null, K.current.clear(), H.current = [], P.current = [], _.current = null, at.current = null, G.current = [], mt.current.clear(), tt({ kind: "none" }), w(B), b(null), v(!1), S([]), A(null), $(""), (g = s.current) == null || g.focus();
  }, [tt, t]), Xt(() => {
    let B = !1;
    const g = () => {
      const j = lr();
      B || O(j);
    };
    if (g(), typeof document > "u" || !("fonts" in document)) return;
    const I = () => g();
    return document.fonts.addEventListener("loadingdone", I), () => {
      B = !0, document.fonts.removeEventListener("loadingdone", I);
    };
  }, [t]);
  const Ct = (M ? u.find((B) => B.id === M) : void 0) !== void 0;
  Vt(() => {
    if (!M || !Ct) return;
    const B = () => {
      const I = c.current, j = ct.current.find((jt) => jt.id === M);
      if (!I || !j || (I.dataset.seeded !== M && (I.innerHTML = be(j), I.dataset.seeded = M), document.activeElement === I)) return;
      I.focus();
      const et = document.createRange();
      et.selectNodeContents(I), et.collapse(!1);
      const lt = window.getSelection();
      lt == null || lt.removeAllRanges(), lt == null || lt.addRange(et);
    };
    B();
    const g = requestAnimationFrame(B);
    return () => cancelAnimationFrame(g);
  }, [M, Ct]);
  const $t = vt((B) => {
    i((g) => {
      const I = typeof B == "function" ? B(g) : B;
      return H.current.push(g), H.current.length > 100 && H.current.shift(), P.current = [], I;
    }), r();
  }, [r]), nt = vt((B) => {
    if (B.length === 0) return;
    let g = ct.current;
    for (const I of B)
      H.current.push(g), g = [...g, I];
    H.current.length > 100 && H.current.splice(0, H.current.length - 100), P.current = [], i((I) => [...I, ...B]), r();
  }, [r]), ot = vt((B) => B.size === 0 ? !1 : ($t((g) => g.filter((I) => B.has(I.id) ? !1 : I.type !== "arrow" ? !0 : !(I.fromId && B.has(I.fromId)) && !(I.toId && B.has(I.toId)))), dt(/* @__PURE__ */ new Set()), $(`${B.size}개 삭제됨`), !0), [$t, dt]), R = vt(() => {
    _.current = ct.current;
  }, []), ht = vt(() => {
    const B = _.current;
    _.current = null, !(!B || B === ct.current) && (H.current.push(B), H.current.length > 100 && H.current.shift(), P.current = [], r());
  }, [r]), Mt = vt((B, g) => {
    var et;
    const I = (et = s.current) == null ? void 0 : et.getBoundingClientRect(), j = J.current;
    return I ? { x: (B - I.left) / j.z + j.x, y: (g - I.top) / j.z + j.y } : { x: 0, y: 0 };
  }, []), Bt = vt(() => {
    var I;
    const B = (I = s.current) == null ? void 0 : I.getBoundingClientRect(), g = J.current;
    return B ? { x: g.x + B.width / 2 / g.z, y: g.y + B.height / 2 / g.z } : { x: 0, y: 0 };
  }, []), Qt = vt((B) => {
    const g = new Set(ct.current.filter((j) => B.has(j.id) && j.groupId).map((j) => j.groupId));
    if (g.size === 0) return B;
    const I = new Set(B);
    for (const j of ct.current) j.groupId && g.has(j.groupId) && I.add(j.id);
    return I;
  }, []);
  return {
    containerRef: s,
    editorRef: c,
    localShapes: l,
    setLocalShapes: x,
    controlled: y,
    shapes: u,
    setShapes: i,
    camera: d,
    setCamera: f,
    cameraRef: J,
    selected: X,
    setSelected: w,
    selectedRef: kt,
    editingId: M,
    setEditingId: b,
    editingIdRef: pt,
    interaction: m,
    interactionRef: q,
    applyInteraction: tt,
    isSpaceDown: N,
    setIsSpaceDown: v,
    guides: C,
    setGuides: S,
    announcement: k,
    setAnnouncement: $,
    showInspectorPalette: z,
    setShowInspectorPalette: E,
    eraserPos: D,
    setEraserPos: A,
    activeColor: F,
    setActiveColor: L,
    activeColorRef: T,
    installedFontFamilies: W,
    pointers: K,
    past: H,
    future: P,
    selectNow: dt,
    commit: $t,
    deleteSelection: ot,
    beginHistory: R,
    endHistory: ht,
    toPage: Mt,
    viewportCentre: Bt,
    expandToGroups: Qt,
    toolRef: St,
    shapesRef: ct,
    liveStrokeCanvasRef: Z,
    activeDrawRef: at,
    pendingDrawsRef: G,
    queuedDrawIdsRef: mt,
    commitDrawBatch: nt
  };
}
function Ir({
  containerRef: t,
  camera: e,
  setCamera: n,
  minZoom: o,
  maxZoom: r,
  shapes: s,
  selected: c,
  editingId: l,
  textualTypes: x,
  onZoomChange: y,
  onSelectionChange: p,
  onLocalCursor: u,
  toPage: a
}) {
  Xt(() => {
    y == null || y(e.z);
  }, [e.z, y]), Xt(() => {
    const b = t.current;
    if (!b) return;
    const m = (h) => {
      if (h.preventDefault(), h.ctrlKey || h.metaKey) {
        const N = b.getBoundingClientRect();
        n((v) => {
          const C = Math.min(r, Math.max(o, v.z * Math.exp(-h.deltaY * 0.01))), S = h.clientX - N.left, k = h.clientY - N.top;
          return { x: v.x + S / v.z - S / C, y: v.y + k / v.z - k / C, z: C };
        });
      } else
        n((N) => ({ ...N, x: N.x + h.deltaX / N.z, y: N.y + h.deltaY / N.z }));
    };
    return b.addEventListener("wheel", m, { passive: !1 }), () => b.removeEventListener("wheel", m);
  }, [t, r, o, n]);
  const i = Pt(() => {
    const b = s.filter((m) => c.has(m.id));
    return {
      count: b.length,
      canGroup: b.length > 1,
      canUngroup: b.some((m) => !!m.groupId),
      isTextual: b.length === 1 && x.includes(b[0].type),
      selectedIds: b.map((m) => m.id)
    };
  }, [c, s, x]);
  Xt(() => {
    p == null || p(i);
  }, [p, i]);
  const d = Pt(() => {
    if (l) {
      const m = s.find((h) => h.id === l);
      return m && m.type !== "image" && m.type !== "draw" ? [m] : [];
    }
    const b = s.filter((m) => c.has(m.id));
    return b.length === 1 && b[0].type === "image" ? [] : b;
  }, [l, c, s]), f = Pt(() => d.length === 0 ? null : d.find((b) => b.type !== "image") ?? null, [d]), X = Q(0);
  return { selectionInfo: i, inspectorSelection: d, inspectorShape: f, onContainerPointerMove: u ? (b) => {
    const m = performance.now();
    m - X.current < 60 || (X.current = m, u(a(b.clientX, b.clientY)));
  } : void 0, onContainerPointerLeave: u ? () => u(null) : void 0 };
}
const Rt = 24;
function Lr({
  containerRef: t,
  shapesRef: e,
  selectedRef: n,
  commit: o,
  deleteSelection: r,
  selectNow: s,
  setAnnouncement: c,
  createId: l
}) {
  return Pt(() => ({
    deleteSelected: () => {
      r(n.current);
    },
    duplicateSelected: () => {
      var u;
      const x = n.current;
      if (x.size === 0) return;
      const y = [], p = /* @__PURE__ */ new Map();
      for (const a of e.current) {
        if (!x.has(a.id)) continue;
        let i = a.groupId;
        i && (p.has(i) || p.set(i, l("g")), i = p.get(i)), y.push({
          ...a,
          id: l(),
          x: a.x + Rt,
          y: a.y + Rt,
          groupId: i,
          points: (u = a.points) == null ? void 0 : u.map(([d, f]) => [d + Rt, f + Rt]),
          orthogonalWaypoints: a.type === "arrow" && a.orthogonalWaypoints ? a.orthogonalWaypoints.map((d) => ({ x: d.x + Rt, y: d.y + Rt })) : void 0
        });
      }
      o((a) => [...a, ...y]), s(new Set(y.map((a) => a.id))), c(`${y.length}개 복제됨`);
    },
    group: () => {
      var p;
      const x = n.current;
      if (x.size < 2) return;
      const y = l("g");
      o((u) => u.map((a) => x.has(a.id) ? { ...a, groupId: y } : a)), c(`${x.size}개 그룹화됨`), (p = t.current) == null || p.focus();
    },
    ungroup: () => {
      var y;
      const x = n.current;
      x.size !== 0 && (o((p) => p.map((u) => x.has(u.id) ? { ...u, groupId: void 0 } : u)), c("그룹 해제됨"), (y = t.current) == null || y.focus());
    }
  }), [o, t, l, r, s, n, c, e]);
}
function Fr(t, e) {
  if (t.length === 0) return null;
  let n = 1 / 0, o = 1 / 0, r = -1 / 0, s = -1 / 0;
  for (const u of t) {
    const a = ft(u);
    n = Math.min(n, a.minX), o = Math.min(o, a.minY), r = Math.max(r, a.maxX), s = Math.max(s, a.maxY);
  }
  const c = 40, l = r - n + c * 2, x = s - o + c * 2;
  if (!Number.isFinite(l) || !Number.isFinite(x) || l > te.maxExportDimension || x > te.maxExportDimension || l * x > te.maxExportPixels) return null;
  const y = (u, a, i, d, f) => {
    const X = u.fontSize ?? i, w = wt(u), M = Nn(be(u));
    if (M.length === 0) return "";
    const b = _t(u), m = u.textAlign === "right" ? "end" : u.textAlign === "center" ? "middle" : u.textAlign === "left" ? "start" : f, h = m === "end" ? b.maxX - 12 : m === "middle" ? (b.minX + b.maxX) / 2 : b.minX + 12, N = b.minY + X + 12;
    return M.map((v, C) => {
      const S = v.map((k) => `<tspan style="${[
        k.bold ? "font-weight:700" : `font-weight:${d}`,
        k.italic ? "font-style:italic" : "",
        k.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Dt(k.text)}</tspan>`).join("");
      return `<text x="${h}" y="${N + C * X * 1.4}" font-family="${Dt(w)}" font-size="${X}" fill="${a}" text-anchor="${m}">${S}</text>`;
    }).join("");
  }, p = t.map((u) => {
    const a = it[u.color ?? "blue"], i = _t(u), d = Yt(u), f = u.rotation ? ` transform="rotate(${u.rotation * 180 / Math.PI} ${d.x} ${d.y})"` : "", X = u.color ? it[u.color].border : V.ink;
    if (u.type === "draw" && u.points) {
      const v = u.drawMode ?? "pen", C = u.strokeWidth ?? 3, S = v === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${pe(u.points)}" fill="none" stroke="${X}" stroke-width="${C}"${S} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (u.type === "arrow") {
      const v = It(u, new Map(t.map((H) => [H.id, H])), t), C = u.strokeWidth ?? 2.5, S = Math.max(10, 8 + C * 2), k = Math.max(4, 2 + C), $ = v.routing === "orthogonal" && v.pathPoints ? v.pathPoints : null, z = $ && $.length > 1, E = z ? Ye($) : v.routing === "curved" ? `M ${v.start.x} ${v.start.y} Q ${v.control.x} ${v.control.y} ${v.end.x} ${v.end.y}` : `M ${v.start.x} ${v.start.y} L ${v.end.x} ${v.end.y}`, D = z ? kn($) : v.routing === "curved" ? (() => {
        const H = se(0.94, v.start, v.control, v.end);
        return Math.atan2(v.end.y - H.y, v.end.x - H.x);
      })() : Math.atan2(v.end.y - v.start.y, v.end.x - v.start.x), A = z ? ae($[0], $[1]) : v.routing === "orthogonal" && v.start.side ? v.start.side === "e" ? 0 : v.start.side === "w" ? Math.PI : v.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : ae(v.start, v.end), F = u.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : u.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", L = (H, P, _, K) => {
        if (H === "dot") return `<circle cx="${P}" cy="${_}" r="${k}" fill="${X}"/>`;
        if (H === "none") return "";
        const Z = `${P - S * Math.cos(K - 0.4)},${_ - S * Math.sin(K - 0.4)}`, at = `${P - S * Math.cos(K + 0.4)},${_ - S * Math.sin(K + 0.4)}`;
        return `<polygon points="${P},${_} ${Z} ${at}" fill="${X}"/>`;
      }, W = v.routing === "orthogonal" && v.pathPoints ? Ee(v.pathPoints) : v.bend === 0 ? { x: (v.start.x + v.end.x) / 2, y: (v.start.y + v.end.y) / 2 } : se(0.5, v.start, v.control, v.end), O = le(u), T = O ? `<text x="${W.x}" y="${W.y - 6}" text-anchor="middle" font-family="${Dt(wt(u))}" font-size="${u.fontSize ?? 12}" fill="${X}">${Dt(O)}</text>` : "";
      return `<path d="${E}" fill="none" stroke="${X}" stroke-width="${C}" stroke-linecap="round" stroke-linejoin="round"${F}/>` + L(u.arrowEnd ?? "arrow", v.end.x, v.end.y, D) + L(u.arrowStart ?? "none", v.start.x, v.start.y, A + Math.PI) + T;
    }
    if (u.type === "image" && u.src) {
      const v = Ie(u.src);
      return v ? `<image href="${Dt(v)}" x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}"${f}/>` : "";
    }
    if (u.type === "frame")
      return `<g${f}><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" fill="none" stroke="${V.slate400}" stroke-width="${u.strokeWidth ?? 2}" rx="4"/><text x="${i.minX}" y="${i.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${V.muted}">${Dt(u.text ?? "프레임")}</text></g>`;
    if (u.type === "note")
      return `<g${f}><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" fill="${a.bg}"/><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="6" fill="${a.border}"/>` + y(u, a.text, 14, "600", "start") + "</g>";
    if (u.type === "card") {
      const v = u.cardStyle === "glass";
      return `<g${f}><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" rx="16" fill="${v ? V.glassFill : V.slateCard}"/><text x="${i.minX + 16}" y="${i.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${V.slate400}">[ ${Dt(u.category ?? "ENTITY")} ]</text>` + y(u, V.white, 16, "700", "start") + "</g>";
    }
    const w = u.type === "rect" || u.type === "ellipse" || u.type === "triangle" || u.type === "diamond" || u.type === "hexagon" || u.type === "star" ? u.strokeWidth ?? 2 : 2, M = ye(u), b = Xn(u), m = u.type === "triangle" || u.type === "diamond" || u.type === "hexagon" || u.type === "star", h = m ? Yn(u.type, i.maxX - i.minX, i.maxY - i.minY).split(" ").map((v) => {
      const [C, S] = v.split(",").map(Number);
      return `${C + i.minX},${S + i.minY}`;
    }).join(" ") : "", N = u.type === "ellipse" ? `<ellipse cx="${(i.minX + i.maxX) / 2}" cy="${(i.minY + i.maxY) / 2}" rx="${(i.maxX - i.minX) / 2}" ry="${(i.maxY - i.minY) / 2}" fill="${M}" stroke="${b}" stroke-width="${w}"/>` : m ? `<polygon points="${h}" fill="${M}" stroke="${b}" stroke-width="${w}" stroke-linejoin="round"/>` : `<rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" rx="12" fill="${M}" stroke="${b}" stroke-width="${w}"/>`;
    return `<g${f}>${N}${y(u, a.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${l}" height="${x}" viewBox="${n - c} ${o - c} ${l} ${x}"><rect x="${n - c}" y="${o - c}" width="${l}" height="${x}" fill="${e ? V.canvasDark : V.canvasLight}"/>` + p + "</svg>";
}
async function Tr(t) {
  const e = t();
  if (!e) return null;
  const n = /width="([\d.]+)" height="([\d.]+)"/.exec(e), o = Math.ceil(Number((n == null ? void 0 : n[1]) ?? 1200)), r = Math.ceil(Number((n == null ? void 0 : n[2]) ?? 800)), s = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`, c = new Image();
  c.crossOrigin = "anonymous";
  try {
    await new Promise((a, i) => {
      c.onload = () => a(), c.onerror = () => i(new Error("svg rasterise failed")), c.src = s;
    });
  } catch {
    return null;
  }
  const l = 2, x = o * l, y = r * l;
  if (!Number.isSafeInteger(x) || !Number.isSafeInteger(y) || x > te.maxExportDimension || y > te.maxExportDimension || x * y > te.maxExportPixels) return null;
  const p = document.createElement("canvas");
  p.width = x, p.height = y;
  const u = p.getContext("2d");
  return u ? (u.scale(l, l), u.drawImage(c, 0, 0), new Promise((a) => {
    try {
      p.toBlob((i) => a(i), "image/png");
    } catch {
      a(null);
    }
  })) : null;
}
function Er(t, e, n) {
  if (t.length < 2) return;
  const o = t.filter(
    (a) => a.type !== "draw" && a.type !== "arrow" && a.type !== "frame" && a.type !== "image"
  );
  if (o.length < 2) return;
  const r = o.map((a, i) => ({
    id: a.id,
    i,
    x: Yt(a).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: Yt(a).y,
    vx: 0,
    vy: 0
  }));
  for (let a = 0; a < r.length; a++)
    for (let i = 0; i < a; i++)
      if (Math.abs(r[a].x - r[i].x) < 1 && Math.abs(r[a].y - r[i].y) < 1) {
        const d = 2 * Math.PI * a / r.length;
        r[a].x += Math.cos(d) * 10, r[a].y += Math.sin(d) * 10;
        break;
      }
  const s = new Map(r.map((a) => [a.id, a])), c = [];
  for (const a of t) {
    if (a.type !== "arrow") continue;
    const i = a.fromId ? s.get(a.fromId) : null, d = a.toId ? s.get(a.toId) : null;
    i && d && c.push([i, d]);
  }
  const l = 220, x = l * l, y = 80;
  let p = 400;
  const u = p / y;
  for (let a = 0; a < y; a++) {
    for (let i = 0; i < r.length; i++)
      r[i].vx = 0, r[i].vy = 0;
    for (let i = 0; i < r.length; i++)
      for (let d = i + 1; d < r.length; d++) {
        const f = r[i], X = r[d], w = f.x - X.x, M = f.y - X.y, b = Math.hypot(w, M) || 0.01, m = x / b, h = w / b * m, N = M / b * m;
        f.vx += h, f.vy += N, X.vx -= h, X.vy -= N;
      }
    for (const [i, d] of c) {
      const f = i.x - d.x, X = i.y - d.y, w = Math.hypot(f, X) || 0.01, M = w * w / l, b = f / w * M, m = X / w * M;
      i.vx -= b, i.vy -= m, d.vx += b, d.vy += m;
    }
    for (const i of r) {
      const d = Math.hypot(i.vx, i.vy) || 0.01, f = Math.min(d, p);
      i.x += i.vx / d * f, i.y += i.vy / d * f;
    }
    p = Math.max(0.5, p - u);
  }
  e((a) => a.map((i) => {
    const d = s.get(i.id);
    return d ? { ...i, x: d.x - i.w / 2, y: d.y - i.h / 2 } : i;
  })), n();
}
function Ar(t, {
  controlled: e,
  past: n,
  future: o,
  setLocalShapes: r,
  setCamera: s,
  selectNow: c,
  setEditingId: l
}) {
  let x;
  try {
    x = ho(t);
  } catch {
    return;
  }
  e || (n.current = [], o.current = [], r(x.shapes.map(Wr))), s(x.camera), c(/* @__PURE__ */ new Set()), l(null);
}
function Wr(t) {
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
      return Dr(t);
  }
}
function Dr(t) {
  throw new xo(`Unhandled canvas shape type: ${String(t)}.`);
}
function Or({
  ref: t,
  containerRef: e,
  shapesRef: n,
  cameraRef: o,
  past: r,
  future: s,
  controlled: c,
  isDarkMode: l,
  minZoom: x,
  maxZoom: y,
  onToolChange: p,
  setSelectedStrokeWidth: u,
  onDirty: a,
  commit: i,
  selectNow: d,
  selectionActions: f,
  viewportCentre: X,
  setShapes: w,
  setLocalShapes: M,
  setCamera: b,
  setEditingId: m,
  setAnnouncement: h,
  createId: N
}) {
  const v = vt((S) => {
    const k = X(), $ = Pn({
      id: N(),
      x: S.x ?? k.x - S.w / 2,
      y: S.y ?? k.y - S.h / 2,
      ...S
    });
    if (!$) throw new Error("Canvas could not create a valid shape.");
    return i((z) => [...z, $]), d(/* @__PURE__ */ new Set([$.id])), p("select"), h(`${$.type} 추가됨`), $;
  }, [i, N, p, d, h, X]), C = vt(() => Fr(n.current, l), [l, n]);
  io(t, () => ({
    addNote: (S) => {
      const k = v({ type: "note", w: 180, h: 180, color: S, text: "" });
      m(k.id);
    },
    addCard: (S, k, $, z) => {
      v({ type: "card", w: 260, h: 150, text: S, category: k, cardStyle: $, color: z });
    },
    addText: () => {
      const S = v({ type: "text", w: 220, h: 44, text: "" });
      m(S.id);
    },
    addShape: (S, k, $) => {
      v({
        type: S,
        w: S === "ellipse" ? 220 : 200,
        h: S === "ellipse" ? 110 : 140,
        color: k,
        text: $ ?? ""
      });
    },
    addArrow: () => {
      const S = X(), k = { id: N(), type: "arrow", x: S.x - 140, y: S.y, w: 280, h: 0 };
      i(($) => [...$, k]), d(/* @__PURE__ */ new Set([k.id])), p("select");
    },
    addImage: (S, k, $, z) => {
      v({ type: "image", w: $, h: z, src: S, fileName: k });
    },
    addFileCard: (S, k, $) => {
      v({ type: "rect", w: 260, h: 120, color: "purple", text: $, src: k, fileName: S });
    },
    updateShapeText: (S, k) => {
      i(($) => $.map((z) => z.id === S ? { ...z, text: k, html: void 0 } : z));
    },
    setSelectedStrokeWidth: u,
    setTool: p,
    undo: () => {
      const S = r.current.pop();
      S && (s.current.push(n.current), w(S), d(/* @__PURE__ */ new Set()), m(null), a(), h("실행 취소"));
    },
    redo: () => {
      const S = s.current.pop();
      S && (r.current.push(n.current), w(S), d(/* @__PURE__ */ new Set()), m(null), a(), h("다시 실행"));
    },
    deleteSelected: f.deleteSelected,
    duplicateSelected: f.duplicateSelected,
    group: f.group,
    ungroup: f.ungroup,
    zoomBy: (S) => {
      b((k) => {
        var A;
        const $ = (A = e.current) == null ? void 0 : A.getBoundingClientRect(), z = Math.min(y, Math.max(x, k.z * S));
        if (!$) return { ...k, z };
        const E = k.x + $.width / 2 / k.z, D = k.y + $.height / 2 / k.z;
        return { x: E - $.width / 2 / z, y: D - $.height / 2 / z, z };
      });
    },
    zoomTo: (S) => {
      b((k) => {
        var A;
        const $ = (A = e.current) == null ? void 0 : A.getBoundingClientRect(), z = Math.min(y, Math.max(x, S));
        if (!$) return { ...k, z };
        const E = k.x + $.width / 2 / k.z, D = k.y + $.height / 2 / k.z;
        return { x: E - $.width / 2 / z, y: D - $.height / 2 / z, z };
      });
    },
    resetZoom: () => {
      b((S) => {
        var E;
        const k = (E = e.current) == null ? void 0 : E.getBoundingClientRect();
        if (!k) return { ...S, z: 1 };
        const $ = S.x + k.width / 2 / S.z, z = S.y + k.height / 2 / S.z;
        return { x: $ - k.width / 2, y: z - k.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var L;
      const S = n.current, k = (L = e.current) == null ? void 0 : L.getBoundingClientRect();
      if (S.length === 0 || !k) return;
      let $ = 1 / 0, z = 1 / 0, E = -1 / 0, D = -1 / 0;
      for (const W of S) {
        const O = ft(W);
        $ = Math.min($, O.minX), z = Math.min(z, O.minY), E = Math.max(E, O.maxX), D = Math.max(D, O.maxY);
      }
      const A = 80, F = Math.min(y, Math.max(
        x,
        Math.min(k.width / (E - $ + A * 2), k.height / (D - z + A * 2))
      ));
      b({
        x: ($ + E) / 2 - k.width / 2 / F,
        y: (z + D) / 2 - k.height / 2 / F,
        z: F
      });
    },
    autoLayout: () => Er(n.current, i, () => h("자동 배치 완료")),
    exportSvg: C,
    exportPng: () => Tr(C),
    getSnapshot: () => ({ version: "canvas-v1", shapes: n.current, camera: o.current }),
    loadSnapshot: (S) => Ar(S, {
      controlled: c,
      past: r,
      future: s,
      setLocalShapes: M,
      setCamera: b,
      selectNow: d,
      setEditingId: m
    })
  }), [
    v,
    C,
    i,
    N,
    l,
    y,
    x,
    a,
    p,
    f,
    d,
    b,
    m,
    M,
    u,
    w,
    h,
    X,
    c
  ]);
}
function Hr(t) {
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
function _r({
  containerRef: t,
  editorRef: e,
  shapesRef: n,
  selectedRef: o,
  editingIdRef: r,
  toolRef: s,
  past: c,
  future: l,
  textualTypes: x,
  setIsSpaceDown: y,
  setEditingId: p,
  setShapes: u,
  setAnnouncement: a,
  commit: i,
  deleteSelection: d,
  selectNow: f,
  onDirty: X,
  onToolChange: w,
  createId: M
}) {
  const b = vt((m, h) => {
    const N = o.current;
    N.size !== 0 && i((v) => v.map((C) => {
      var S;
      return N.has(C.id) ? {
        ...C,
        x: C.x + m,
        y: C.y + h,
        points: (S = C.points) == null ? void 0 : S.map(([k, $]) => [k + m, $ + h])
      } : C;
    }));
  }, [i, o]);
  Xt(() => {
    const m = (C) => {
      const S = C;
      return !!S && (S.tagName === "INPUT" || S.tagName === "TEXTAREA" || S.isContentEditable);
    }, h = (C) => C instanceof Element && !!C.closest("input, select, button, textarea, option, label, [data-canvas-control]"), N = (C) => {
      var F, L, W, O;
      const S = t.current, k = document.activeElement, $ = C.target instanceof Node && !!(S != null && S.contains(C.target)), z = !!S && (k === S || S.contains(k));
      if (!$ && !z || h(C.target)) return;
      if (C.code === "Space" && !m(C.target)) {
        y(!0), C.preventDefault();
        return;
      }
      if (m(C.target)) {
        if (C.key === "Escape")
          C.preventDefault(), p(null), (F = e.current) == null || F.blur(), (L = t.current) == null || L.focus();
        else if ((C.key === "Delete" || C.key === "Backspace") && !r.current) {
          const T = o.current;
          d(T) && C.preventDefault();
        }
        return;
      }
      const E = C.metaKey || C.ctrlKey, D = o.current;
      if (E && C.key.toLowerCase() === "z") {
        if (C.preventDefault(), C.shiftKey) {
          const T = l.current.pop();
          T && (c.current.push(n.current), u(T), X());
        } else {
          const T = c.current.pop();
          T && (l.current.push(n.current), u(T), X());
        }
        f(/* @__PURE__ */ new Set());
        return;
      }
      if (E && C.key.toLowerCase() === "g") {
        if (C.preventDefault(), C.shiftKey)
          D.size > 0 && (i((T) => T.map((H) => D.has(H.id) ? { ...H, groupId: void 0 } : H)), a("그룹 해제됨"));
        else if (D.size > 1) {
          const T = M("g");
          i((H) => H.map((P) => D.has(P.id) ? { ...P, groupId: T } : P)), a(`${D.size}개 그룹화됨`);
        }
        return;
      }
      if (E && C.key.toLowerCase() === "a") {
        C.preventDefault(), f(new Set(n.current.map((T) => T.id))), a(`전체 ${n.current.length}개 선택됨`);
        return;
      }
      if (C.key === "Delete" || C.key === "Backspace") {
        d(D) && C.preventDefault();
        return;
      }
      if (C.key.startsWith("Arrow")) {
        C.preventDefault();
        const T = C.shiftKey ? 10 : 1;
        C.key === "ArrowLeft" && b(-T, 0), C.key === "ArrowRight" && b(T, 0), C.key === "ArrowUp" && b(0, -T), C.key === "ArrowDown" && b(0, T);
        return;
      }
      if (C.key === "Tab" && n.current.length > 0) {
        C.preventDefault();
        const T = n.current, H = T.findIndex((K) => D.has(K.id)), P = C.shiftKey ? H <= 0 ? T.length - 1 : H - 1 : H === -1 || H === T.length - 1 ? 0 : H + 1, _ = T[P];
        f(/* @__PURE__ */ new Set([_.id])), a(`${_.type} 선택됨: ${le(_) || "내용 없음"}`);
        return;
      }
      if (C.key === "Enter" && D.size === 1) {
        const T = n.current.find((H) => D.has(H.id));
        T && x.includes(T.type) && (C.preventDefault(), p(T.id));
        return;
      }
      if (C.key === "Escape") {
        if (r.current) {
          C.preventDefault(), p(null), (W = e.current) == null || W.blur(), (O = t.current) == null || O.focus(), w("select");
          return;
        }
        f(/* @__PURE__ */ new Set()), w("select");
        return;
      }
      const A = Hr(C);
      A && (C.preventDefault(), s.current = A, w(A));
    }, v = (C) => {
      const S = t.current;
      !S || !(document.activeElement === S || S.contains(document.activeElement)) || C.code === "Space" && y(!1);
    };
    return window.addEventListener("keydown", N), window.addEventListener("keyup", v), () => {
      window.removeEventListener("keydown", N), window.removeEventListener("keyup", v);
    };
  }, [
    i,
    t,
    M,
    d,
    r,
    e,
    l,
    b,
    X,
    w,
    c,
    f,
    o,
    a,
    p,
    y,
    u,
    n,
    x,
    s
  ]);
}
function Xe(t, e) {
  return [(t[0] - e.x) * e.z, (t[1] - e.y) * e.z];
}
function Le(t, e, n) {
  const o = 0.05 / Math.max(n, 0.1);
  let r = t[t.length - 1];
  for (const s of e)
    (!r || Math.hypot(s[0] - r[0], s[1] - r[1]) >= o) && (t.push(s), r = s);
}
function Br(t) {
  const e = (t.points ?? []).map(([c, l]) => [c, l]);
  if (e.length === 0) return t;
  let n = e[0][0], o = e[0][1], r = n, s = o;
  for (const [c, l] of e.slice(1))
    n = Math.min(n, c), o = Math.min(o, l), r = Math.max(r, c), s = Math.max(s, l);
  return { ...t, points: e, x: n, y: o, w: r - n, h: s - o };
}
function dn(t, e, n) {
  if (e.type !== "draw") return;
  const o = e.points ?? [];
  if (o.length === 0) return;
  const r = (e.strokeWidth ?? 4) * n.z, s = e.drawMode === "highlighter" ? 0.35 : 1, [c, l] = Xe(o[0], n);
  t.save(), t.globalAlpha = s;
  const x = e.color ? it[e.color].border : "#2563eb";
  if (t.strokeStyle = x, t.fillStyle = x, o.length === 1) {
    t.beginPath(), t.arc(c, l, Math.max(r / 2, 1), 0, Math.PI * 2), t.fill(), t.restore();
    return;
  }
  const y = Ro(o, e.strokeWidth ?? 4, e.drawMode ?? "pen");
  if (y.length === 0) {
    t.restore();
    return;
  }
  t.beginPath();
  const [p, u] = Xe([y[0][0], y[0][1]], n);
  t.moveTo(p, u);
  for (const a of y.slice(1)) {
    const [i, d] = Xe([a[0], a[1]], n);
    t.lineTo(i, d);
  }
  t.closePath(), t.fill(), t.restore();
}
function jr(t, e, n, o) {
  const r = Math.max(1, Math.min(2, o)), s = Math.max(1, Math.round(e * r)), c = Math.max(1, Math.round(n * r));
  return t.width !== s && (t.width = s), t.height !== c && (t.height = c), t.style.width = `${e}px`, t.style.height = `${n}px`, r;
}
function ee(t, e, n, o, r = 1) {
  if (!t) return;
  const s = t.getContext("2d");
  if (!s) return;
  const c = Math.max(1, Math.min(2, r || 1));
  s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, t.width, t.height), s.setTransform(c, 0, 0, c, 0, 0);
  for (const l of e) dn(s, l, o);
  n && dn(s, n, o), s.setTransform(1, 0, 0, 1, 0, 0);
}
const Kr = 400;
function Ur({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: o,
  cameraRef: r,
  shapesRef: s,
  editingIdRef: c,
  toolRef: l,
  activeColorRef: x,
  drawStrokeWidth: y,
  camera: p,
  shapes: u,
  selected: a,
  isSpaceDown: i,
  textualTypes: d,
  setShapes: f,
  setEditingId: X,
  applyInteraction: w,
  selectNow: M,
  beginHistory: b,
  commit: m,
  onToolChange: h,
  expandToGroups: N,
  toPage: v,
  createId: C,
  liveStrokeCanvasRef: S,
  activeDrawRef: k,
  pendingDrawsRef: $
}) {
  const z = C, E = Q(null), D = (P, _) => {
    var G;
    const K = ((G = t.current) == null ? void 0 : G.dataset.canvasActiveTool) === "text" ? "text" : l.current;
    if (K !== "note" && K !== "text") return;
    const Z = v(P, _), at = K === "note" ? { id: z(), type: "note", x: Z.x - 90, y: Z.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: z(), type: "text", x: Z.x, y: Z.y - 22, w: 220, h: 44, text: "" };
    m((mt) => [...mt, at]), M(/* @__PURE__ */ new Set([at.id])), X(at.id), h("select");
  };
  return Xt(() => {
    const P = (_) => {
      var K;
      (K = t.current) != null && K.contains(_.target) && (_.target instanceof Element && _.target.closest('[role="textbox"], [data-canvas-inspector]') || D(_.clientX, _.clientY));
    };
    return window.addEventListener("click", P, !0), () => window.removeEventListener("click", P, !0);
  }), { onPointerDown: (P) => {
    var St, kt, pt;
    const _ = l.current, K = P.target instanceof Element ? P.target : null, Z = !!(K != null && K.closest("[data-canvas-editor]")) && c.current !== null;
    if (n.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), o.current.kind === "drawing" && o.current.pointerId !== P.pointerId) {
      n.current.delete(P.pointerId);
      return;
    }
    !Z && P.cancelable && P.preventDefault();
    const at = P.currentTarget;
    try {
      at.setPointerCapture(P.pointerId);
    } catch {
    }
    if (n.current.size === 2) {
      const [q, tt] = [...n.current.values()], dt = r.current, st = o.current;
      w({
        kind: "pinch",
        startDist: Math.hypot(tt.x - q.x, tt.y - q.y) || 1,
        startZoom: dt.z,
        startMidX: (q.x + tt.x) / 2,
        startMidY: (q.y + tt.y) / 2,
        camX: dt.x,
        camY: dt.y,
        ...st.kind === "drawing" ? { interruptedDrawingId: st.id } : {}
      });
      return;
    }
    if (n.current.size > 2) return;
    if (P.button === 1 || i || _ === "hand" || P.button === 0 && _ === "select" && P.altKey) {
      w({ kind: "pan", startX: P.clientX, startY: P.clientY, camX: p.x, camY: p.y });
      return;
    }
    if (P.button !== 0) return;
    const G = v(P.clientX, P.clientY);
    if (Z || (X(null), (St = e.current) == null || St.blur(), (kt = t.current) == null || kt.focus()), _ === "draw" || _ === "highlighter") {
      const q = {
        id: z(),
        type: "draw",
        x: G.x,
        y: G.y,
        w: 0,
        h: 0,
        points: [[G.x, G.y]],
        color: x.current,
        strokeWidth: y,
        drawMode: _ === "highlighter" ? "highlighter" : "pen"
      };
      k.current = q, ee(S.current, $.current, q, r.current, window.devicePixelRatio || 1), w({ kind: "drawing", id: q.id, pointerId: P.pointerId });
      return;
    }
    if (_ === "arrow" || _ === "frame" || fo.includes(_)) {
      const q = _, tt = _ === "arrow" ? { id: z(), type: "arrow", x: G.x, y: G.y, w: 0, h: 0, color: x.current } : _ === "frame" ? { id: z(), type: "frame", x: G.x, y: G.y, w: 0, h: 0, text: "프레임" } : { id: z(), type: q, x: G.x, y: G.y, w: 0, h: 0, color: x.current, text: "" };
      b(), f((dt) => [...dt, tt]), w({ kind: "creating", id: tt.id, startX: G.x, startY: G.y });
      return;
    }
    if (_ === "note" || _ === "text") return;
    if (_ === "eraser") {
      b(), f((q) => Fn(q, G.x, G.y, 14 / p.z, p.z)), w({ kind: "erasing" });
      return;
    }
    const mt = new Map(u.map((q) => [q.id, q])), ct = c.current ? u.find((q) => q.id === c.current) : void 0, J = Z && ct ? ct : [...u].reverse().find((q) => we(q, G.x, G.y, p.z, mt, u));
    if (!J)
      E.current = null;
    else {
      const q = Date.now(), tt = !P.shiftKey && d.includes(J.type) && ((pt = E.current) == null ? void 0 : pt.id) === J.id && q - E.current.time < Kr, dt = tt ? J.id : void 0;
      E.current = tt ? null : { id: J.id, time: q };
      const st = P.shiftKey ? new Set(a).add(J.id) : a.has(J.id) ? a : /* @__PURE__ */ new Set([J.id]), Ct = N(st);
      M(Ct);
      const $t = /* @__PURE__ */ new Map();
      for (const nt of u) Ct.has(nt.id) && $t.set(nt.id, nt);
      for (const nt of u) {
        if (nt.type !== "frame" || !Ct.has(nt.id)) continue;
        const ot = ft(nt);
        for (const R of u) {
          if (R.id === nt.id || $t.has(R.id)) continue;
          const ht = Yt(R);
          ht.x >= ot.minX && ht.x <= ot.maxX && ht.y >= ot.minY && ht.y <= ot.maxY && $t.set(R.id, R);
        }
      }
      b(), w({ kind: "move", startX: G.x, startY: G.y, origin: $t, editOnReleaseId: dt });
      return;
    }
    P.shiftKey || M(/* @__PURE__ */ new Set()), w({
      kind: "marquee",
      startX: G.x,
      startY: G.y,
      curX: G.x,
      curY: G.y,
      screenStartX: P.clientX,
      screenStartY: P.clientY
    });
  }, onResizeHandleDown: (P, _, K) => {
    P.stopPropagation(), n.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), b(), w({ kind: "resize", id: _.id, handle: K, start: _ });
  }, onRotateHandleDown: (P, _) => {
    P.stopPropagation(), n.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
    const K = v(P.clientX, P.clientY), Z = Yt(_);
    b(), w({
      kind: "rotate",
      id: _.id,
      startAngle: Math.atan2(K.y - Z.y, K.x - Z.x),
      startRotation: _.rotation ?? 0
    });
  }, onConnectHandleDown: (P, _) => {
    P.stopPropagation(), n.current.set(P.pointerId, { x: P.clientX, y: P.clientY });
    const K = v(P.clientX, P.clientY);
    w({ kind: "connect", fromId: _.id, toX: K.x, toY: K.y, hoverId: null });
  }, onBendHandleDown: (P, _) => {
    P.stopPropagation(), n.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), b(), w({ kind: "bend", id: _.id });
  }, onOrthogonalSegmentHandleDown: (P, _, K) => {
    P.stopPropagation(), n.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), b(), w({ kind: "orthogonal-segment", id: _.id, segmentIndex: K });
  }, onArrowEndpointDown: (P, _, K) => {
    P.stopPropagation(), n.current.set(P.pointerId, { x: P.clientX, y: P.clientY }), b(), w({ kind: "arrow-endpoint", id: _.id, endpoint: K, hoverId: null });
  } };
}
const Vr = 0.1, Gr = 4, qr = 14, Qr = 4, hn = ["note", "card", "rect", "ellipse", "text", "image"];
function Zr({
  pointers: t,
  interactionRef: e,
  cameraRef: n,
  toPage: o,
  shapesRef: r,
  setShapes: s,
  setEditingId: c,
  setEraserPos: l,
  setGuides: x,
  setAnnouncement: y,
  applyInteraction: p,
  selectNow: u,
  endHistory: a,
  commit: i,
  onToolChange: d,
  createId: f,
  pendingDrawPointsRef: X,
  drawRafRef: w,
  liveStrokeCanvasRef: M,
  activeDrawRef: b,
  pendingDrawsRef: m,
  queuedDrawIdsRef: h,
  commitDrawBatch: N
}) {
  const v = f, C = Q(null);
  Xt(() => {
    const S = ($) => {
      w.current !== null && (cancelAnimationFrame(w.current), w.current = null);
      const z = X.current.splice(0);
      s((E) => E.map((D) => {
        if (D.id !== $ || !D.points) return D;
        const A = [...D.points];
        let F = A[A.length - 1];
        for (const H of z)
          (!F || Math.hypot(H[0] - F[0], H[1] - F[1]) >= 1 / n.current.z) && (A.push(H), F = H);
        const L = A.map((H) => H[0]), W = A.map((H) => H[1]), O = Math.min(...L), T = Math.min(...W);
        return { ...D, points: A, x: O, y: T, w: Math.max(...L) - O, h: Math.max(...W) - T };
      })), a();
    }, k = ($) => {
      var E, D;
      t.current.delete($.pointerId);
      try {
        (D = (E = $.target) == null ? void 0 : E.releasePointerCapture) == null || D.call(E, $.pointerId);
      } catch {
      }
      const z = e.current;
      if (z.kind !== "none") {
        if (z.kind === "pinch") {
          t.current.size < 2 && (z.interruptedDrawingId && S(z.interruptedDrawingId), p({ kind: "none" }));
          return;
        }
        if (x([]), z.kind === "erasing") {
          l(null), a(), p({ kind: "none" });
          return;
        }
        if (z.kind === "connect") {
          const F = r.current.find((P) => P.id === z.fromId);
          if (p({ kind: "none" }), !F) return;
          const L = { x: z.toX, y: z.toY }, W = Yt(F);
          if (!z.hoverId && Math.hypot(L.x - W.x, L.y - W.y) < 30) return;
          const O = [];
          let T = z.hoverId;
          if (!T) {
            const P = F.type === "note" ? 180 : 200, _ = F.type === "note" ? 180 : 120, K = {
              ...F,
              id: v(),
              x: L.x - P / 2,
              y: L.y - _ / 2,
              w: P,
              h: _,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            O.push(K), T = K.id;
          }
          const H = {
            id: v(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: F.id,
            toId: T,
            text: ""
          };
          O.push(H), i((P) => [...P, ...O]), u(/* @__PURE__ */ new Set([H.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => c(H.id)) : c(H.id), y("연결 생성됨");
          return;
        }
        if (z.kind === "bend") {
          a(), p({ kind: "none" });
          return;
        }
        if (z.kind === "drawing") {
          if (z.pointerId !== $.pointerId) return;
          w.current !== null && (cancelAnimationFrame(w.current), w.current = null);
          const A = X.current.splice(0), F = b.current;
          if (F && F.id === z.id && F.points) {
            if (Le(F.points, A, n.current.z), $.type === "pointerup") {
              const W = o($.clientX, $.clientY);
              Le(F.points, [[W.x, W.y]], n.current.z);
            }
            const L = Br(F);
            m.current = [...m.current, L], b.current = null, ee(M.current, m.current, null, n.current, window.devicePixelRatio || 1), C.current === null && (C.current = requestAnimationFrame(() => {
              C.current = null;
              const W = m.current.filter((O) => !h.current.has(O.id));
              for (const O of W) h.current.add(O.id);
              N(W);
              for (const O of W) window.setTimeout(() => {
                h.current.has(O.id) && (m.current = m.current.filter((T) => T.id !== O.id), h.current.delete(O.id), ee(M.current, m.current, b.current, n.current, window.devicePixelRatio || 1));
              }, 5e3);
            }));
          }
          p({ kind: "none" });
          return;
        }
        if (z.kind === "creating") {
          s((A) => A.map((F) => {
            if (F.id !== z.id) return F;
            const L = Math.abs(F.w) < 4 && Math.abs(F.h) < 4 ? {
              ...F,
              w: F.type === "arrow" ? 200 : F.type === "frame" ? 480 : 180,
              h: F.type === "arrow" ? 0 : F.type === "frame" ? 320 : 120
            } : F;
            if (L.type === "arrow") return L;
            const W = _t(L);
            return { ...L, x: W.minX, y: W.minY, w: W.maxX - W.minX, h: W.maxY - W.minY };
          })), a(), u(/* @__PURE__ */ new Set([z.id])), d("select"), p({ kind: "none" });
          return;
        }
        if ((z.kind === "move" || z.kind === "resize" || z.kind === "rotate" || z.kind === "orthogonal-segment" || z.kind === "arrow-endpoint") && a(), z.kind === "move" && z.editOnReleaseId && $.type === "pointerup") {
          const A = o($.clientX, $.clientY);
          Math.hypot(A.x - z.startX, A.y - z.startY) * n.current.z <= Qr && c(z.editOnReleaseId);
        }
        p({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", k), window.addEventListener("pointercancel", k), () => {
      C.current !== null && cancelAnimationFrame(C.current), window.removeEventListener("pointerup", k), window.removeEventListener("pointercancel", k);
    };
  }, [
    p,
    b,
    n,
    N,
    i,
    f,
    w,
    a,
    e,
    M,
    d,
    X,
    m,
    t,
    h,
    u,
    y,
    c,
    l,
    x,
    s,
    r,
    o
  ]);
}
function Jr({
  containerRef: t,
  pointers: e,
  interactionRef: n,
  cameraRef: o,
  shapesRef: r,
  setCamera: s,
  setShapes: c,
  setEraserPos: l,
  setGuides: x,
  applyInteraction: y,
  selectNow: p,
  expandToGroups: u,
  toPage: a,
  pendingDrawPointsRef: i,
  drawRafRef: d,
  liveStrokeCanvasRef: f,
  activeDrawRef: X,
  pendingDrawsRef: w
}) {
  Xt(() => () => {
    d.current !== null && cancelAnimationFrame(d.current);
  }, [d]), Xt(() => {
    const M = (m, h, N = !0) => {
      const v = a(m.clientX, m.clientY), C = X.current;
      if (!C || C.id !== h || !C.points) return;
      if (m.shiftKey) {
        d.current !== null && (cancelAnimationFrame(d.current), d.current = null), i.current = [];
        const k = C.points[0];
        k && (C.points = [k, [v.x, v.y]]), ee(f.current, w.current, C, o.current, window.devicePixelRatio || 1);
        return;
      }
      const S = N && typeof m.getCoalescedEvents == "function" ? m.getCoalescedEvents() : [];
      if (S.length > 0)
        for (const k of S) {
          const $ = a(k.clientX, k.clientY);
          i.current.push([$.x, $.y]);
        }
      i.current.push([v.x, v.y]), d.current === null && (d.current = requestAnimationFrame(() => {
        d.current = null;
        const k = i.current;
        if (k.length === 0) return;
        i.current = [];
        const $ = X.current;
        !$ || $.id !== h || !$.points || (Le($.points, k, o.current.z), ee(f.current, w.current, $, o.current, window.devicePixelRatio || 1));
      }));
    }, b = (m) => {
      var C, S;
      e.current.has(m.pointerId) && e.current.set(m.pointerId, { x: m.clientX, y: m.clientY });
      const h = n.current;
      if (h.kind === "none") return;
      const N = o.current;
      if (h.kind === "pinch") {
        if (e.current.size < 2) return;
        const [k, $] = [...e.current.values()], z = Math.hypot($.x - k.x, $.y - k.y) || 1, E = (k.x + $.x) / 2, D = (k.y + $.y) / 2, A = (C = t.current) == null ? void 0 : C.getBoundingClientRect();
        if (!A) return;
        const F = Math.min(Gr, Math.max(Vr, h.startZoom * (z / h.startDist))), L = h.camX + (h.startMidX - A.left) / h.startZoom, W = h.camY + (h.startMidY - A.top) / h.startZoom;
        s({ x: L - (E - A.left) / F, y: W - (D - A.top) / F, z: F });
        return;
      }
      if (h.kind === "pan") {
        s({
          x: h.camX - (m.clientX - h.startX) / N.z,
          y: h.camY - (m.clientY - h.startY) / N.z,
          z: N.z
        });
        return;
      }
      const v = a(m.clientX, m.clientY);
      if (h.kind === "erasing") {
        c((k) => Fn(k, v.x, v.y, qr / N.z, N.z)), l({ x: v.x, y: v.y });
        return;
      }
      if (h.kind === "connect") {
        const k = r.current, $ = new Map(k.map((E) => [E.id, E])), z = [...k].reverse().find((E) => E.id !== h.fromId && hn.includes(E.type) && we(E, v.x, v.y, N.z, $, k));
        y({ ...h, toX: v.x, toY: v.y, hoverId: (z == null ? void 0 : z.id) ?? null });
        return;
      }
      if (h.kind === "bend") {
        const k = r.current, $ = k.find((O) => O.id === h.id);
        if (!$) return;
        const z = It($, new Map(k.map((O) => [O.id, O])), k), E = z.end.x - z.start.x, D = z.end.y - z.start.y, A = Math.hypot(E, D) || 1, F = (z.start.x + z.end.x) / 2, L = (z.start.y + z.end.y) / 2, W = (v.x - F) * (-D / A) + (v.y - L) * (E / A);
        c((O) => O.map((T) => T.id === h.id ? { ...T, bend: W } : T));
        return;
      }
      if (h.kind === "orthogonal-segment") {
        const k = r.current, $ = k.find((W) => W.id === h.id);
        if (!$) return;
        const z = It($, new Map(k.map((W) => [W.id, W])), k), E = z.routing === "orthogonal" ? z.pathPoints : void 0;
        if (!E || E.length < 2) return;
        const D = E[h.segmentIndex], A = E[h.segmentIndex + 1];
        if (!D || !A) return;
        const F = D.x === A.x ? v.x : v.y, L = Fo(E, h.segmentIndex, F);
        c((W) => W.map((O) => O.id === h.id ? { ...O, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: L.slice(1, -1).map((T) => ({ x: T.x, y: T.y })) } : O));
        return;
      }
      if (h.kind === "arrow-endpoint") {
        const k = r.current, $ = k.find((L) => L.id === h.id);
        if (!$) return;
        const z = new Map(k.map((L) => [L.id, L])), E = It($, z, k), D = h.endpoint === "start" ? E.end : E.start, A = [...k].reverse().find((L) => L.id !== $.id && hn.includes(L.type) && we(L, v.x, v.y, N.z, z, k)), F = A ? qt(A, D.x, D.y) : { x: v.x, y: v.y };
        y({ ...h, hoverId: (A == null ? void 0 : A.id) ?? null }), c((L) => L.map((W) => {
          if (W.id !== $.id) return W;
          const O = h.endpoint === "start" ? F : D, T = h.endpoint === "end" ? F : D;
          return {
            ...W,
            x: O.x,
            y: O.y,
            w: T.x - O.x,
            h: T.y - O.y,
            fromId: h.endpoint === "start" ? A == null ? void 0 : A.id : W.fromId,
            toId: h.endpoint === "end" ? A == null ? void 0 : A.id : W.toId
          };
        }));
        return;
      }
      if (h.kind === "marquee") {
        y({ ...h, curX: v.x, curY: v.y });
        const k = Math.min(h.startX, v.x), $ = Math.max(h.startX, v.x), z = Math.min(h.startY, v.y), E = Math.max(h.startY, v.y), D = Math.min(h.screenStartX, m.clientX), A = Math.max(h.screenStartX, m.clientX), F = Math.min(h.screenStartY, m.clientY), L = Math.max(h.screenStartY, m.clientY), W = /* @__PURE__ */ new Map();
        (S = t.current) == null || S.querySelectorAll("[data-canvas-shape-id]").forEach((T) => {
          const H = T.dataset.canvasShapeId;
          H && W.set(H, T.getBoundingClientRect());
        });
        const O = r.current.filter((T) => {
          const H = W.get(T.id);
          if (H)
            return H.right >= D && H.left <= A && H.bottom >= F && H.top <= L;
          const P = ft(T);
          return P.maxX >= k && P.minX <= $ && P.maxY >= z && P.minY <= E;
        }).map((T) => T.id);
        p(u(new Set(O)));
        return;
      }
      if (h.kind === "move") {
        let k = v.x - h.startX, $ = v.y - h.startY;
        const z = h.origin, E = (() => {
          let F = 1 / 0, L = 1 / 0, W = -1 / 0, O = -1 / 0;
          return z.forEach((T) => {
            const H = ft({ ...T, x: T.x + k, y: T.y + $ });
            F = Math.min(F, H.minX), L = Math.min(L, H.minY), W = Math.max(W, H.maxX), O = Math.max(O, H.maxY);
          }), { minX: F, minY: L, maxX: W, maxY: O };
        })(), D = r.current.filter((F) => !z.has(F.id)), A = tr(E, D, N.z);
        k += A.dx, $ += A.dy, x(A.guides), c((F) => F.map((L) => {
          var O;
          const W = z.get(L.id);
          return W ? {
            ...L,
            x: W.x + k,
            y: W.y + $,
            points: (O = W.points) == null ? void 0 : O.map(([T, H]) => [T + k, H + $]),
            ...W.type === "arrow" && W.orthogonalWaypoints ? { orthogonalWaypoints: W.orthogonalWaypoints.map((T) => ({ x: T.x + k, y: T.y + $ })) } : {}
          } : L;
        }));
        return;
      }
      if (h.kind === "drawing") {
        M(m, h.id);
        return;
      }
      if (h.kind === "creating") {
        c((k) => k.map(($) => $.id === h.id ? { ...$, w: v.x - h.startX, h: v.y - h.startY } : $));
        return;
      }
      if (h.kind === "rotate") {
        const k = r.current.find((D) => D.id === h.id);
        if (!k) return;
        const $ = Yt(k), z = Math.atan2(v.y - $.y, v.x - $.x);
        let E = h.startRotation + (z - h.startAngle);
        m.shiftKey && (E = Math.round(E / (Math.PI / 12)) * (Math.PI / 12)), c((D) => D.map((A) => A.id === h.id ? { ...A, rotation: E } : A));
        return;
      }
      if (h.kind === "resize") {
        const { start: k, handle: $ } = h, z = In(k, v.x, v.y);
        c((E) => E.map((D) => {
          if (D.id !== k.id) return D;
          let { x: A, y: F, w: L, h: W } = k;
          if ($.includes("e") && (L = Math.max(20, z.x - k.x)), $.includes("s") && (W = Math.max(20, z.y - k.y)), $.includes("w")) {
            const O = k.x + k.w;
            A = Math.min(z.x, O - 20), L = O - A;
          }
          if ($.includes("n")) {
            const O = k.y + k.h;
            F = Math.min(z.y, O - 20), W = O - F;
          }
          return { ...D, x: A, y: F, w: L, h: W, manualSize: D.type === "text" ? !0 : D.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", b), () => {
      window.removeEventListener("pointermove", b);
    };
  }, [
    y,
    o,
    t,
    d,
    u,
    n,
    i,
    e,
    p,
    s,
    l,
    x,
    c,
    r,
    a
  ]);
}
function Rr(t) {
  const e = Q([]), n = Q(null), o = { ...t, pendingDrawPointsRef: e, drawRafRef: n };
  Jr(o), Zr(o);
}
function ti({
  containerRef: t,
  editorRef: e,
  pointers: n,
  interactionRef: o,
  cameraRef: r,
  shapesRef: s,
  editingIdRef: c,
  toolRef: l,
  activeColorRef: x,
  drawStrokeWidth: y,
  camera: p,
  shapes: u,
  selected: a,
  isSpaceDown: i,
  textualTypes: d,
  setCamera: f,
  setShapes: X,
  setEditingId: w,
  setEraserPos: M,
  setGuides: b,
  setAnnouncement: m,
  applyInteraction: h,
  selectNow: N,
  beginHistory: v,
  endHistory: C,
  commit: S,
  onToolChange: k,
  expandToGroups: $,
  toPage: z,
  createId: E,
  liveStrokeCanvasRef: D,
  activeDrawRef: A,
  pendingDrawsRef: F,
  queuedDrawIdsRef: L,
  commitDrawBatch: W
}) {
  const O = Ur({
    containerRef: t,
    editorRef: e,
    pointers: n,
    interactionRef: o,
    cameraRef: r,
    shapesRef: s,
    editingIdRef: c,
    toolRef: l,
    activeColorRef: x,
    drawStrokeWidth: y,
    camera: p,
    shapes: u,
    selected: a,
    isSpaceDown: i,
    textualTypes: d,
    setShapes: X,
    setEditingId: w,
    applyInteraction: h,
    selectNow: N,
    beginHistory: v,
    commit: S,
    onToolChange: k,
    expandToGroups: $,
    toPage: z,
    createId: E,
    liveStrokeCanvasRef: D,
    activeDrawRef: A,
    pendingDrawsRef: F
  });
  return Rr({
    containerRef: t,
    pointers: n,
    interactionRef: o,
    cameraRef: r,
    shapesRef: s,
    setCamera: f,
    setShapes: X,
    setEditingId: w,
    setEraserPos: M,
    setGuides: b,
    setAnnouncement: m,
    applyInteraction: h,
    selectNow: N,
    endHistory: C,
    commit: S,
    onToolChange: k,
    expandToGroups: $,
    toPage: z,
    createId: E,
    liveStrokeCanvasRef: D,
    activeDrawRef: A,
    pendingDrawsRef: F,
    queuedDrawIdsRef: L,
    commitDrawBatch: W
  }), O;
}
function ei(t) {
  Or(t);
  const e = Pt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(n) {
      t.toolRef.current = n;
    }
  }), [t.toolRef]);
  return _r({ ...t, toolRef: e }), ti(t);
}
function ni({
  isDarkMode: t,
  tool: e,
  isSpaceDown: n,
  interaction: o,
  zoom: r
}) {
  const s = n || o.kind === "pan" ? "grabbing" : e === "hand" ? "grab" : e === "draw" ? "crosshair" : e === "eraser" ? "cell" : e === "select" ? "default" : "crosshair", c = t ? V.gridDark : V.gridLight, l = 40 * r;
  return { cursor: s, gridColor: c, gridSize: l, strokeColorOf: (y) => y.strokeColor ? Cn(y) : y.color ? it[y.color].border : t ? "var(--canvas-slate-200)" : V.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = No, document.head.appendChild(t);
}
const xn = 0.1, fn = 4, vn = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function On(t) {
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
        return On(o);
    }
  });
}
function oi(t, e, n) {
  return t.map((o) => e.has(o.id) && o.type === "draw" ? { ...o, ...n } : o);
}
function mn(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const li = ao(function({
  boardIdentity: e = "standalone",
  isDarkMode: n,
  tool: o,
  drawStrokeWidth: r = 4,
  onToolChange: s,
  onDirty: c,
  onZoomChange: l,
  onSelectionChange: x,
  shapes: y,
  onShapesChange: p,
  peerCursors: u,
  onLocalCursor: a,
  renderDiagram: i
}, d) {
  var Be, je;
  const {
    containerRef: f,
    editorRef: X,
    setLocalShapes: w,
    controlled: M,
    shapes: b,
    setShapes: m,
    camera: h,
    setCamera: N,
    cameraRef: v,
    selected: C,
    selectedRef: S,
    editingId: k,
    setEditingId: $,
    editingIdRef: z,
    interaction: E,
    interactionRef: D,
    applyInteraction: A,
    isSpaceDown: F,
    setIsSpaceDown: L,
    guides: W,
    setGuides: O,
    announcement: T,
    setAnnouncement: H,
    showInspectorPalette: P,
    setShowInspectorPalette: _,
    eraserPos: K,
    setEraserPos: Z,
    setActiveColor: at,
    activeColorRef: G,
    installedFontFamilies: mt,
    pointers: ct,
    past: J,
    future: St,
    selectNow: kt,
    commit: pt,
    deleteSelection: q,
    beginHistory: tt,
    endHistory: dt,
    toPage: st,
    viewportCentre: Ct,
    expandToGroups: $t,
    toolRef: nt,
    shapesRef: ot,
    liveStrokeCanvasRef: R,
    activeDrawRef: ht,
    pendingDrawsRef: Mt,
    queuedDrawIdsRef: Bt,
    commitDrawBatch: Qt
  } = Pr({ boardIdentity: e, tool: o, controlledShapes: y, onShapesChange: p, onDirty: c });
  Vt(() => {
    const rt = R.current, Ft = f.current;
    if (!rt || !Ft) return;
    const Tt = () => {
      const ne = window.devicePixelRatio || 1;
      jr(rt, Ft.clientWidth, Ft.clientHeight, ne);
      const ue = new Set(b.map((Zt) => Zt.id));
      Mt.current = Mt.current.filter((Zt) => !ue.has(Zt.id));
      for (const Zt of ue) Bt.current.delete(Zt);
      ee(rt, Mt.current, ht.current, v.current, ne);
    };
    Tt();
    const Et = new ResizeObserver(Tt);
    return Et.observe(Ft), window.addEventListener("resize", Tt), () => {
      Et.disconnect(), window.removeEventListener("resize", Tt);
    };
  }, [ht, h, v, f, R, Mt, Bt, b]);
  const B = Lr({
    containerRef: f,
    shapesRef: ot,
    selectedRef: S,
    commit: pt,
    deleteSelection: q,
    selectNow: kt,
    setAnnouncement: H,
    createId: mn
  }), {
    inspectorSelection: g,
    inspectorShape: I,
    onContainerPointerMove: j,
    onContainerPointerLeave: et
  } = Ir({
    containerRef: f,
    camera: h,
    setCamera: N,
    minZoom: xn,
    maxZoom: fn,
    shapes: b,
    selected: C,
    editingId: k,
    textualTypes: vn,
    onZoomChange: l,
    onSelectionChange: x,
    onLocalCursor: a,
    toPage: st
  }), lt = ie.useCallback((rt) => {
    const Ft = new Set(S.current);
    Ft.size !== 0 && pt((Tt) => pn(Tt, Ft, rt));
  }, [pt, S]), {
    onPointerDown: jt,
    onResizeHandleDown: Hn,
    onRotateHandleDown: _n,
    onConnectHandleDown: Bn,
    onBendHandleDown: jn,
    onOrthogonalSegmentHandleDown: Kn,
    onArrowEndpointDown: Un
  } = ei({
    ref: d,
    containerRef: f,
    editorRef: X,
    pointers: ct,
    interactionRef: D,
    cameraRef: v,
    shapesRef: ot,
    toolRef: nt,
    activeColorRef: G,
    drawStrokeWidth: r,
    setSelectedStrokeWidth: lt,
    camera: h,
    shapes: b,
    selected: C,
    isSpaceDown: F,
    setCamera: N,
    setShapes: m,
    setEditingId: $,
    setEraserPos: Z,
    setGuides: O,
    setAnnouncement: H,
    applyInteraction: A,
    selectNow: kt,
    selectionActions: B,
    past: J,
    future: St,
    beginHistory: tt,
    endHistory: dt,
    commit: pt,
    deleteSelection: q,
    onDirty: c,
    onToolChange: s,
    controlled: M,
    isDarkMode: n,
    minZoom: xn,
    maxZoom: fn,
    textualTypes: vn,
    selectedRef: S,
    editingIdRef: z,
    setIsSpaceDown: L,
    viewportCentre: Ct,
    setLocalShapes: w,
    expandToGroups: $t,
    toPage: st,
    createId: mn,
    liveStrokeCanvasRef: R,
    activeDrawRef: ht,
    pendingDrawsRef: Mt,
    queuedDrawIdsRef: Bt,
    commitDrawBatch: Qt
  }), { cursor: Vn, gridColor: Gn, gridSize: De, strokeColorOf: qn } = ni({
    isDarkMode: n,
    tool: o === "highlighter" ? "draw" : o,
    isSpaceDown: F,
    interaction: E,
    zoom: h.z
  }), Oe = (rt) => {
    const Ft = S.current, Tt = z.current, Et = new Set(Ft);
    if (Tt && Et.add(Tt), Et.size === 0) return;
    const ne = "strokeWidth" in rt, ue = Object.keys(rt).every((gt) => gt === "color" || gt === "fillColor" || gt === "strokeColor" || gt === "strokeWidth");
    if (g.length > 0 && g.every((gt) => gt.type === "draw") && ue) {
      const gt = "color" in rt ? rt.color : void 0, bt = "strokeWidth" in rt ? rt.strokeWidth : void 0, Ke = "strokeColor" in rt ? rt.strokeColor : void 0;
      pt((ro) => oi(ro, Et, {
        ...gt !== void 0 ? { color: gt } : {},
        ...bt !== void 0 ? { strokeWidth: bt } : {},
        ...Ke !== void 0 ? { strokeColor: Ke } : {}
      }));
      return;
    }
    if (ne) {
      const gt = rt.strokeWidth;
      if (gt !== void 0 && Object.keys(rt).length === 1) {
        pt((bt) => pn(bt, Et, gt));
        return;
      }
    }
    pt((gt) => gt.map((bt) => {
      if (!Et.has(bt.id)) return bt;
      if (!ne) return { ...bt, ...rt };
      switch (bt.type) {
        case "arrow":
        case "frame":
        case "rect":
        case "ellipse":
        case "triangle":
        case "diamond":
        case "hexagon":
        case "star":
          return { ...bt, ...rt };
        case "note":
        case "card":
        case "text":
        case "image":
          return bt;
        case "draw":
          return { ...bt, ...rt };
        default:
          return On(bt);
      }
    }));
  }, {
    commitEditorHtml: Qn,
    applyFormat: Zn,
    applyList: Jn,
    onEditorKeyDown: Rn,
    applyCustomFontFamily: to
  } = Nr({
    editorRef: X,
    editingId: k,
    setShapes: m,
    setAnnouncement: H,
    onDirty: c,
    patchSelected: Oe
  }), { renderEditor: eo, renderShapeBody: no } = Xr({
    camera: h,
    editingId: k,
    isDarkMode: n,
    editorRef: X,
    commitEditorHtml: Qn,
    onEditorKeyDown: Rn,
    setShapes: m,
    onDirty: c,
    renderDiagram: i
  }), oo = E.kind === "marquee" ? E : null, { shapeById: He, visiblePaintOrder: _e } = Yr({
    containerRef: f,
    shapesRef: ot,
    shapes: b,
    camera: h,
    selected: C,
    editingId: k,
    boardIdentity: e
  });
  return /* @__PURE__ */ U(
    "div",
    {
      ref: f,
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
        cursor: Vn,
        background: n ? V.canvasDark : V.canvasLight,
        backgroundImage: `radial-gradient(${Gn} 1px, transparent 1px)`,
        backgroundSize: `${De}px ${De}px`,
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
            children: T
          }
        ),
        /* @__PURE__ */ Y(
          rr,
          {
            visiblePaintOrder: _e,
            selected: C,
            shapeById: He,
            allShapes: ot.current,
            camera: h,
            interaction: E,
            eraserPos: K,
            guides: W,
            marquee: oo,
            strokeColorOf: qn
          }
        ),
        /* @__PURE__ */ Y("canvas", { ref: R, "aria-hidden": "true", "data-canvas-live-strokes": "true", className: "absolute inset-0 w-full h-full pointer-events-none" }),
        /* @__PURE__ */ Y(
          yr,
          {
            visiblePaintOrder: _e,
            selected: C,
            editingId: k,
            camera: h,
            shapeById: He,
            allShapes: ot.current,
            peerCursors: u,
            isDarkMode: n,
            renderEditor: eo,
            renderShapeBody: no,
            setEditingId: $,
            onBendHandleDown: jn,
            onOrthogonalSegmentHandleDown: Kn,
            onResizeHandleDown: Hn,
            onRotateHandleDown: _n,
            onConnectHandleDown: Bn,
            onArrowEndpointDown: Un
          }
        ),
        I && /* @__PURE__ */ Y(
          Cr,
          {
            shape: I,
            selection: g,
            selectionActions: B,
            shapes: b,
            camera: h,
            canvasSize: { width: ((Be = f.current) == null ? void 0 : Be.clientWidth) ?? 380, height: ((je = f.current) == null ? void 0 : je.clientHeight) ?? 190 },
            isDarkMode: n,
            editing: !!k,
            showPalette: P,
            installedFontFamilies: mt,
            setShowPalette: _,
            setActiveColor: at,
            patchSelected: Oe,
            applyFormat: Zn,
            applyList: Jn,
            applyCustomFontFamily: to
          }
        )
      ]
    }
  );
});
export {
  it as CANVAS_COLORS,
  uo as CANVAS_COLOR_KEYS,
  Nt as CANVAS_FONTS,
  li as InfiniteCanvas,
  fo as SHAPE_TOOLS,
  oi as applySelectedDrawStyle,
  pn as applySelectedStrokeWidth,
  si as diagramTemplate,
  wr as getInspectorGroups,
  We as isDiagramShape
};
