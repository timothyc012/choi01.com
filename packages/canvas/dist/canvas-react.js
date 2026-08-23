import { jsx as N, jsxs as B, Fragment as At } from "react/jsx-runtime";
import Gt, { useRef as R, useState as nt, useEffect as Xt, useLayoutEffect as Ht, useMemo as Pt, useCallback as dt, useImperativeHandle as kn, forwardRef as $n } from "react";
import { p as Mn, i as me, k as ge, a as ot, v as zn, c as It, s as Cn, b as Xn, d as Bt, h as Sn, C as Yn, S as Nn } from "./document-CLNFlHux.js";
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
}), He = 12;
function fe(t) {
  return t.map((n, e) => `${e === 0 ? "M" : "L"} ${n.x} ${n.y}`).join(" ");
}
function te(t, n, e) {
  return !(Math.min(t.x, e.x) > n.x || n.x > Math.max(t.x, e.x) || Math.min(t.y, e.y) > n.y || n.y > Math.max(t.y, e.y));
}
function ee(t, n, e) {
  return (n.y - t.y) * (e.x - n.x) - (n.x - t.x) * (e.y - n.y);
}
function ne(t, n, e, o) {
  const s = ee(t, n, e), c = ee(t, n, o), u = ee(e, o, t), v = ee(e, o, n);
  return Math.abs(s) < 1e-6 && te(t, e, n) || Math.abs(c) < 1e-6 && te(t, o, n) || Math.abs(u) < 1e-6 && te(e, t, o) || Math.abs(v) < 1e-6 && te(e, n, o) ? !0 : s > 0 != c > 0 && u > 0 != v > 0;
}
function Vn(t, n, e) {
  const o = Math.min(t.x, n.x), r = Math.max(t.x, n.x), s = Math.min(t.y, n.y), c = Math.max(t.y, n.y);
  if (r < e.minX || o > e.maxX || c < e.minY || s > e.maxY) return !1;
  if (t.x >= e.minX && t.x <= e.maxX && t.y >= e.minY && t.y <= e.maxY || n.x >= e.minX && n.x <= e.maxX && n.y >= e.minY && n.y <= e.maxY) return !0;
  const u = { x: e.minX, y: e.minY }, v = { x: e.maxX, y: e.minY }, k = { x: e.maxX, y: e.maxY }, y = { x: e.minX, y: e.maxY };
  return ne(t, n, u, v) || ne(t, n, v, k) || ne(t, n, k, y) || ne(t, n, y, u);
}
function Gn(t, n) {
  for (let e = 1; e < t.length; e++)
    for (const o of n)
      if (Vn(t[e - 1], t[e], o)) return !0;
  return !1;
}
function ve(t) {
  let n = 0;
  for (let e = 1; e < t.length; e++) n += Math.hypot(t[e].x - t[e - 1].x, t[e].y - t[e - 1].y);
  return n;
}
function ye(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const n = ve(t);
  if (n === 0) return t[0];
  const e = n / 2;
  let o = 0;
  for (let s = 1; s < t.length; s++) {
    const c = Math.hypot(t[s].x - t[s - 1].x, t[s].y - t[s - 1].y);
    if (o + c >= e) {
      const u = (e - o) / c;
      return { x: t[s - 1].x + (t[s].x - t[s - 1].x) * u, y: t[s - 1].y + (t[s].y - t[s - 1].y) * u };
    }
    o += c;
  }
  const r = t[t.length - 1];
  return { x: r.x, y: r.y };
}
function qt(t, n) {
  return Math.atan2(n.y - t.y, n.x - t.x);
}
function Ye(t, n, e, o) {
  const r = /* @__PURE__ */ new Set([t, n]), s = Math.min(t, n), c = Math.max(t, n), u = He * 1.2;
  for (const v of e) {
    const k = (o === "x" ? v.minX : v.minY) - u, y = (o === "x" ? v.maxX : v.maxY) + u, l = (a) => a >= s - u * 4 && a <= c + u * 4;
    l(k) && r.add(k), l(y) && r.add(y);
  }
  return [...r].sort((v, k) => Math.abs(v - t) - Math.abs(k - t));
}
function Be(t) {
  const n = [];
  for (const e of t) {
    const o = n[n.length - 1];
    (!o || o.x !== e.x || o.y !== e.y) && n.push(e);
  }
  return n;
}
function je(t) {
  const n = [];
  for (const e of t) {
    const o = n[n.length - 1];
    if (o && o.x === e.x && o.y === e.y) continue;
    const r = n[n.length - 2];
    if (r && o && (r.x === o.x && o.x === e.x || r.y === o.y && o.y === e.y)) {
      n[n.length - 1] = e;
      continue;
    }
    n.push(e);
  }
  return n;
}
function qn(t, n, e) {
  const o = [t];
  for (const r of [...e, n]) {
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
  return je(o);
}
function Rn(t, n, e) {
  const o = t[n], r = t[n + 1];
  if (!o || !r || !Number.isFinite(e) || o.x !== r.x && o.y !== r.y) return [...t];
  const s = o.x === r.x ? [o, { x: e, y: o.y }, { x: e, y: r.y }, r] : [o, { x: o.x, y: e }, { x: r.x, y: e }, r];
  return je([
    ...t.slice(0, n),
    ...s,
    ...t.slice(n + 2)
  ]);
}
function xe(t, n) {
  const e = [], o = [];
  for (const s of t) {
    const c = Be(s);
    c.length < 2 || (Gn(c, n) ? o.push(c) : e.push(c));
  }
  const r = e.length > 0 ? e : o;
  return r.length === 0 ? [] : r.reduce((s, c) => ve(c) < ve(s) ? c : s);
}
function Ne(t) {
  for (let n = 1; n < t.length; n++) {
    if (t[n - 1].x !== t[n].x) return "x";
    if (t[n - 1].y !== t[n].y) return "y";
  }
}
function Ot(t, n, e, o) {
  const r = Math.min(t, n), s = Math.max(t, n), c = Math.max(48, Math.abs(n - t) * 0.35, He * 4);
  if (o === "x") {
    if (e === "e") return s + c;
    if (e === "w") return r - c;
  } else {
    if (e === "s") return s + c;
    if (e === "n") return r - c;
  }
  return t <= n ? r - c : s + c;
}
function Qn(t, n, e, o, r) {
  const s = (t.x + n.x) / 2, c = (t.y + n.y) / 2;
  if (e === "u") {
    if (o) {
      const v = Ot(t.x, n.x, t.side, "x");
      return [t, { x: v, y: t.y }, { x: v, y: n.y }, n];
    }
    const u = Ot(t.y, n.y, t.side, "y");
    return [t, { x: t.x, y: u }, { x: n.x, y: u }, n];
  }
  if (e === "zigzag") {
    if (o) {
      const k = Ot(t.x, n.x, t.side, "x"), y = Ot(t.y, n.y, t.side, "y");
      return r ? [t, { x: k, y: t.y }, { x: k, y }, { x: s, y }, { x: s, y: n.y }, n] : [t, { x: k, y: t.y }, { x: k, y }, { x: n.x, y }, n];
    }
    const u = Ot(t.y, n.y, t.side, "y"), v = Ot(t.x, n.x, t.side, "x");
    return r ? [t, { x: t.x, y: u }, { x: v, y: u }, { x: v, y: n.y }, n] : [t, { x: t.x, y: u }, { x: v, y: u }, { x: v, y: c }, { x: n.x, y: c }, n];
  }
  return [];
}
function Ke(t, n, e = [], o = "elbow", r = []) {
  if (r.length > 0) return qn(t, n, r);
  const s = t.side ?? (Math.abs(n.x - t.x) >= Math.abs(n.y - t.y) ? "e" : "s"), c = n.side ?? (s === "e" || s === "w" ? "w" : "n"), u = s === "e" || s === "w", v = c === "e" || c === "w", k = Ye(t.x, n.x, e, "x"), y = Ye(t.y, n.y, e, "y"), l = [];
  if (u && v) {
    for (const g of k) l.push([t, { x: g, y: t.y }, { x: g, y: n.y }, n]);
    for (const g of y) l.push([t, { x: t.x, y: g }, { x: n.x, y: g }, n]);
  } else if (!u && !v) {
    for (const g of y) l.push([t, { x: t.x, y: g }, { x: n.x, y: g }, n]);
    for (const g of k) l.push([t, { x: g, y: t.y }, { x: g, y: n.y }, n]);
  } else if (u) {
    l.push([t, { x: n.x, y: t.y }, n]);
    for (const g of y)
      l.push([t, { x: t.x, y: g }, { x: n.x, y: g }, n]), l.push([t, { x: t.x, y: g }, n]);
    for (const g of k) l.push([t, { x: g, y: t.y }, { x: g, y: n.y }, n]);
  } else {
    l.push([t, { x: t.x, y: n.y }, n]);
    for (const g of y)
      l.push([t, { x: t.x, y: g }, n]), l.push([t, { x: t.x, y: g }, { x: n.x, y: g }, n]);
    for (const g of k) l.push([t, { x: g, y: t.y }, { x: g, y: n.y }, n]);
  }
  const a = xe(l, e);
  if (o === "elbow") return a;
  if (o === "reverse") {
    const g = Ne(a), S = xe(l.filter((p) => Ne(p) !== g), e);
    return S.length > 1 ? S : a;
  }
  const i = Qn(t, n, o, u, v), m = xe([i], e);
  return m.length > 1 ? m : a;
}
function Ue(t) {
  return t.length < 2 ? 0 : qt(t[t.length - 2], t[t.length - 1]);
}
function se(t) {
  if (t.fillColor)
    try {
      return ge(t.fillColor);
    } catch {
      return t.color ? ot[t.color].bg : ot.blue.bg;
    }
  return t.color ? ot[t.color].bg : ot.blue.bg;
}
function Ve(t) {
  if (t.strokeColor)
    try {
      return ge(t.strokeColor);
    } catch {
      return t.color ? ot[t.color].border : "#2563eb";
    }
  return t.color ? ot[t.color].border : "#2563eb";
}
function Ge(t) {
  return Ve(t);
}
function Dt(t) {
  if (t.textColor)
    try {
      return ge(t.textColor);
    } catch {
      return t.color ? ot[t.color].text : "#0f172a";
    }
  return t.color ? ot[t.color].text : "#0f172a";
}
function qe(t, n, e) {
  switch (t) {
    case "triangle":
      return `${n / 2},0 ${n},${e} 0,${e}`;
    case "diamond":
      return `${n / 2},0 ${n},${e / 2} ${n / 2},${e} 0,${e / 2}`;
    case "hexagon": {
      const o = n * 0.25;
      return `${o},0 ${n - o},0 ${n},${e / 2} ${n - o},${e} ${o},${e} 0,${e / 2}`;
    }
    case "star": {
      const o = n / 2, r = e / 2, s = Math.min(n, e) / 2, c = s * 0.4, u = [];
      for (let v = 0; v < 10; v++) {
        const k = Math.PI / 5 * v - Math.PI / 2, y = v % 2 === 0 ? s : c;
        u.push(`${o + y * Math.cos(k)},${r + y * Math.sin(k)}`);
      }
      return u.join(" ");
    }
    default:
      return "";
  }
}
function ae(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let n = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [r, s] = t[o], [c, u] = t[o + 1];
    n += ` Q ${r} ${s} ${(r + c) / 2} ${(s + u) / 2}`;
  }
  const e = t[t.length - 1];
  return `${n} L ${e[0]} ${e[1]}`;
}
function Ft(t) {
  return t.replace(/[&<>\"]/g, (n) => n === "&" ? "&amp;" : n === "<" ? "&lt;" : n === ">" ? "&gt;" : "&quot;");
}
function Re(t) {
  const n = document.createElement("template");
  n.innerHTML = t;
  const e = [[]], o = (r, s) => {
    r.childNodes.forEach((c) => {
      if (c.nodeType === Node.TEXT_NODE) {
        const y = c.textContent ?? "";
        y && e[e.length - 1].push({ text: y, ...s });
        return;
      }
      if (c.nodeType !== Node.ELEMENT_NODE) return;
      const u = c;
      if (u.tagName === "BR") {
        e.push([]);
        return;
      }
      const v = { bold: s.bold || u.tagName === "B" || u.tagName === "STRONG", italic: s.italic || u.tagName === "I" || u.tagName === "EM", underline: s.underline || u.tagName === "U" }, k = u.tagName === "DIV" || u.tagName === "P" || u.tagName === "LI";
      k && e[e.length - 1].length > 0 && e.push([]), o(u, v), k && e.push([]);
    });
  };
  return o(n.content, { bold: !1, italic: !1, underline: !1 }), e.filter((r) => r.length > 0);
}
const Ie = /* @__PURE__ */ new WeakMap();
function de(t) {
  const n = Ie.get(t);
  if (n !== void 0) return n;
  const e = t.html ? me(t.html) : t.text ? Ft(t.text).replace(/\n/g, "<br>") : "";
  return Ie.set(t, e), e;
}
function pe(t) {
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
  return t.html ? Re(t.html).map((n) => n.map((e) => e.text).join("")).join(`
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
  const n = t.rotation ?? 0, e = Lt(t);
  if (!n) return e;
  const o = St(t), r = Math.cos(n), s = Math.sin(n), c = [
    [e.minX, e.minY],
    [e.maxX, e.minY],
    [e.maxX, e.maxY],
    [e.minX, e.maxY]
  ].map(([k, y]) => {
    const l = k - o.x, a = y - o.y;
    return [o.x + l * r - a * s, o.y + l * s + a * r];
  }), u = c.map((k) => k[0]), v = c.map((k) => k[1]);
  return { minX: Math.min(...u), minY: Math.min(...v), maxX: Math.max(...u), maxY: Math.max(...v) };
}
function Ze(t, n, e) {
  const o = t.rotation ?? 0;
  if (!o) return { x: n, y: e };
  const r = St(t), s = Math.cos(-o), c = Math.sin(-o), u = n - r.x, v = e - r.y;
  return { x: r.x + u * s - v * c, y: r.y + u * c + v * s };
}
function re(t, n, e, o, r, s) {
  const c = r - e, u = s - o, v = c * c + u * u, k = v === 0 ? 0 : Math.max(0, Math.min(1, ((t - e) * c + (n - o) * u) / v));
  return Math.hypot(t - (e + k * c), n - (o + k * u));
}
function le(t, n, e, o, r, s) {
  const c = 8 / o;
  if (t.type === "arrow") {
    const k = (t.strokeWidth ?? 2.5) / o / 2 + c, y = Et(t, r ?? /* @__PURE__ */ new Map(), s);
    if (y.routing === "orthogonal" && y.pathPoints && y.pathPoints.length > 1) {
      for (let a = 1; a < y.pathPoints.length; a++) {
        const i = y.pathPoints[a - 1], m = y.pathPoints[a];
        if (re(n, e, i.x, i.y, m.x, m.y) <= k) return !0;
      }
      return !1;
    }
    if (y.bend === 0) return re(n, e, y.start.x, y.start.y, y.end.x, y.end.y) <= k;
    let l = y.start;
    for (let a = 1; a <= 16; a++) {
      const i = Rt(a / 16, y.start, y.control, y.end);
      if (re(n, e, l.x, l.y, i.x, i.y) <= k) return !0;
      l = i;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    const l = ((t.drawMode ?? "pen") === "highlighter" ? (t.strokeWidth ?? 3) * 2.5 : t.strokeWidth ?? 3) / o / 2 + c;
    if (t.points.length === 1) {
      const [a, i] = t.points[0];
      return Math.hypot(n - a, e - i) <= l;
    }
    for (let a = 1; a < t.points.length; a++) {
      const [i, m] = t.points[a - 1], [g, S] = t.points[a];
      if (re(n, e, i, m, g, S) <= l) return !0;
    }
    return !1;
  }
  const u = Ze(t, n, e), v = Lt(t);
  if (t.type === "frame") {
    const k = u.x >= v.minX - c && u.x <= v.maxX + c && u.y >= v.minY - c && u.y <= v.maxY + c && (u.x <= v.minX + c || u.x >= v.maxX - c || u.y <= v.minY + c || u.y >= v.maxY - c), y = u.x >= v.minX - c && u.x <= v.maxX + c && u.y >= v.minY - 28 / o && u.y <= v.minY;
    return k || y;
  }
  return u.x >= v.minX - c && u.x <= v.maxX + c && u.y >= v.minY - c && u.y <= v.maxY + c;
}
function Wt(t, n, e) {
  const o = Lt(t), r = (o.minX + o.maxX) / 2, s = (o.minY + o.maxY) / 2, c = n - r, u = e - s;
  if (c === 0 && u === 0) return { x: r, y: s, side: "e" };
  const v = (o.maxX - o.minX) / 2, k = (o.maxY - o.minY) / 2, y = v === 0 ? 1 / 0 : Math.abs(v / c), l = k === 0 ? 1 / 0 : Math.abs(k / u);
  return y <= l ? { x: r + c * y, y: s + u * y, side: c >= 0 ? "e" : "w" } : { x: r + c * l, y: s + u * l, side: u >= 0 ? "s" : "n" };
}
function Je(t, n, e, o) {
  const r = /* @__PURE__ */ new Set([n.id, e, o]);
  return t.filter((s) => !r.has(s.id)).map((s) => {
    const c = at(s);
    return { minX: c.minX - oe, minY: c.minY - oe, maxX: c.maxX + oe, maxY: c.maxY + oe };
  }).filter((s) => s.maxX > s.minX && s.maxY > s.minY);
}
function Et(t, n, e = []) {
  const o = t.fromId ? n.get(t.fromId) : void 0, r = t.toId ? n.get(t.toId) : void 0;
  let s = { x: t.x, y: t.y }, c = { x: t.x + t.w, y: t.y + t.h };
  if (o && r) {
    const m = St(o), g = St(r);
    s = Wt(o, g.x, g.y), c = Wt(r, m.x, m.y);
  } else o ? s = Wt(o, c.x, c.y) : r && (c = Wt(r, s.x, s.y));
  const u = (s.x + c.x) / 2, v = (s.y + c.y) / 2, k = t.bend ?? 0;
  let y = { x: u, y: v };
  if (k !== 0) {
    const m = c.x - s.x, g = c.y - s.y, S = Math.hypot(m, g) || 1;
    y = { x: u + -g / S * k, y: v + m / S * k };
  }
  const l = !!(o || r), a = t.routing ?? (l ? "orthogonal" : k !== 0 ? "curved" : "straight");
  if (a !== "orthogonal") return { start: s, end: c, control: y, bend: k, routing: a };
  const i = Je(e, t, o == null ? void 0 : o.id, r == null ? void 0 : r.id);
  return {
    start: s,
    end: c,
    control: y,
    bend: k,
    routing: a,
    pathPoints: Be(Ke(s, c, i, t.orthogonalVariant, t.orthogonalWaypoints))
  };
}
function Rt(t, n, e, o) {
  const r = 1 - t;
  return { x: r * r * n.x + 2 * r * t * e.x + t * t * o.x, y: r * r * n.y + 2 * r * t * e.y + t * t * o.y };
}
function tn(t, n, e, o, r) {
  const s = [];
  let c = 0;
  for (const u of t) {
    if (u.type !== "draw" || !u.points) {
      if (le(u, n, e, r)) continue;
      s.push(u);
      continue;
    }
    const v = [];
    let k = [];
    for (const [l, a] of u.points)
      Math.hypot(l - n, a - e) <= o / r ? (k.length > 1 && v.push(k), k = []) : k.push([l, a]);
    if (k.length > 1 && v.push(k), v.length === 0) continue;
    const y = Lt(u);
    v.forEach((l) => s.push({ ...u, id: `${u.id}-e${c++}`, points: l, x: y.minX, y: y.minY, w: y.maxX - y.minX, h: y.maxY - y.minY }));
  }
  return s;
}
function Zn(t, n, e) {
  const o = 6 / e;
  let r = null, s = null;
  const c = [], u = [t.minX, (t.minX + t.maxX) / 2, t.maxX], v = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const k of n) {
    const y = at(k), l = [y.minX, (y.minX + y.maxX) / 2, y.maxX], a = [y.minY, (y.minY + y.maxY) / 2, y.maxY];
    for (const i of u) for (const m of l) {
      const g = m - i;
      Math.abs(g) <= o && (!r || Math.abs(g) < Math.abs(r.delta)) && (r = { delta: g, at: m });
    }
    for (const i of v) for (const m of a) {
      const g = m - i;
      Math.abs(g) <= o && (!s || Math.abs(g) < Math.abs(s.delta)) && (s = { delta: g, at: m });
    }
  }
  return r && c.push({ x1: r.at, y1: t.minY - 1e3, x2: r.at, y2: t.maxY + 1e3 }), s && c.push({ x1: t.minX - 1e3, y1: s.at, x2: t.maxX + 1e3, y2: s.at }), { dx: (r == null ? void 0 : r.delta) ?? 0, dy: (s == null ? void 0 : s.delta) ?? 0, guides: c };
}
function Jn(t, n) {
  var u, v, k, y;
  const e = t.points, o = n.get(t.id);
  if (!o || o.count > e.length) {
    const l = ae(e);
    return n.set(t.id, { count: e.length, lastX: ((u = e.at(-1)) == null ? void 0 : u[0]) ?? 0, lastY: ((v = e.at(-1)) == null ? void 0 : v[1]) ?? 0, d: l }), l;
  }
  const r = e[e.length - 1];
  if (o.count === e.length) {
    if (r && o.lastX === r[0] && o.lastY === r[1]) return o.d;
    const l = ae(e);
    return n.set(t.id, { count: e.length, lastX: (r == null ? void 0 : r[0]) ?? 0, lastY: (r == null ? void 0 : r[1]) ?? 0, d: l }), l;
  }
  let s = o.d;
  const c = s.lastIndexOf(" L ");
  if (c < 0)
    s = ae(e);
  else {
    s = s.slice(0, c);
    for (let a = o.count - 1; a < e.length - 1; a++) {
      const [i, m] = e[a], [g, S] = e[a + 1];
      s += ` Q ${i} ${m} ${(i + g) / 2} ${(m + S) / 2}`;
    }
    const l = e[e.length - 1];
    s += ` L ${l[0]} ${l[1]}`;
  }
  return n.set(t.id, { count: e.length, lastX: ((k = e.at(-1)) == null ? void 0 : k[0]) ?? 0, lastY: ((y = e.at(-1)) == null ? void 0 : y[1]) ?? 0, d: s }), s;
}
const to = Gt.memo(function({
  shape: n,
  cameraZoom: e,
  color: o,
  pathD: r
}) {
  if (!n.points) return null;
  const s = n.drawMode ?? "pen", c = n.strokeWidth ?? 3;
  return /* @__PURE__ */ N(
    "path",
    {
      "data-canvas-vector-shape-id": n.id,
      "data-canvas-vector-shape-type": "draw",
      "data-canvas-draw-mode": s,
      "data-canvas-stroke-width": c,
      d: r,
      fill: "none",
      stroke: o,
      strokeWidth: c / e,
      strokeOpacity: s === "highlighter" ? 0.35 : void 0,
      fillOpacity: s === "highlighter" ? 0.35 : void 0,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  );
}), eo = 14;
function no({
  visiblePaintOrder: t,
  selected: n,
  shapeById: e,
  allShapes: o,
  camera: r,
  interaction: s,
  eraserPos: c,
  guides: u,
  marquee: v,
  strokeColorOf: k
}) {
  const y = R(/* @__PURE__ */ new Map());
  return /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ B("g", { transform: `scale(${r.z}) translate(${-r.x}, ${-r.y})`, children: [
    t.map((l) => {
      if (l.type === "draw" && l.points) {
        const C = n.has(l.id);
        return /* @__PURE__ */ N(
          to,
          {
            shape: l,
            cameraZoom: r.z,
            color: C ? j.blue : k(l),
            pathD: Jn(l, y.current)
          },
          l.id
        );
      }
      if (l.type !== "arrow") return null;
      const a = n.has(l.id) ? j.blue : k(l), i = Et(l, e, o), m = l.strokeWidth ?? 2.5, g = m / r.z, S = Math.max(10, 8 + m * 2), p = Math.max(4, 2 + m), d = S / r.z, w = p / r.z, h = i.routing === "orthogonal" && i.pathPoints ? i.pathPoints : null, X = h && h.length > 1;
      let M, x;
      if (X)
        M = fe(h), x = Ue(h);
      else if (i.routing === "curved") {
        M = `M ${i.start.x} ${i.start.y} Q ${i.control.x} ${i.control.y} ${i.end.x} ${i.end.y}`;
        const C = Rt(0.94, i.start, i.control, i.end);
        x = Math.atan2(i.end.y - C.y, i.end.x - C.x);
      } else
        M = `M ${i.start.x} ${i.start.y} L ${i.end.x} ${i.end.y}`, x = Math.atan2(i.end.y - i.start.y, i.end.x - i.start.x);
      const b = X && h.length >= 2 ? qt(h[0], h[1]) : i.routing === "orthogonal" && i.start.side ? i.start.side === "e" ? 0 : i.start.side === "w" ? Math.PI : i.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : qt(i.start, i.end), f = l.strokeStyle === "dashed" ? `${8 / r.z} ${5 / r.z}` : l.strokeStyle === "dotted" ? `${1.5 / r.z} ${4 / r.z}` : void 0, $ = (C, Y, E, P) => C === "dot" ? /* @__PURE__ */ N("circle", { "data-canvas-arrow-dot-radius": p, cx: Y, cy: E, r: w, fill: a }) : C === "none" ? null : /* @__PURE__ */ N(
        "polygon",
        {
          "data-canvas-arrowhead-size": S,
          points: `${Y},${E} ${Y - d * Math.cos(P - 0.4)},${E - d * Math.sin(P - 0.4)} ${Y - d * Math.cos(P + 0.4)},${E - d * Math.sin(P + 0.4)}`,
          fill: a
        }
      );
      return /* @__PURE__ */ B("g", { "data-canvas-vector-shape-id": l.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": i.routing, "data-canvas-stroke-width": m, children: [
        /* @__PURE__ */ N("path", { d: M, fill: "none", stroke: a, strokeWidth: g, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: f }),
        $(l.arrowEnd ?? "arrow", i.end.x, i.end.y, x),
        $(l.arrowStart ?? "none", i.start.x, i.start.y, b + Math.PI)
      ] }, l.id);
    }),
    s.kind === "connect" && s.fromId !== void 0 && s.toX !== void 0 && s.toY !== void 0 && (() => {
      const l = e.get(s.fromId);
      if (!l) return null;
      const a = Wt(l, s.toX, s.toY), i = s.hoverId ? e.get(s.hoverId) : null, m = i ? Wt(i, a.x, a.y) : { x: s.toX, y: s.toY }, g = i ? Ke(a, m, Je(o, { id: "__preview" }, l.id, i.id)) : [a, m];
      return /* @__PURE__ */ B("g", { children: [
        /* @__PURE__ */ N("path", { d: fe(g), stroke: j.blue, strokeWidth: 2 / r.z, strokeDasharray: `${5 / r.z} ${4 / r.z}` }),
        i ? /* @__PURE__ */ N("rect", { x: at(i).minX - 3 / r.z, y: at(i).minY - 3 / r.z, width: at(i).maxX - at(i).minX + 6 / r.z, height: at(i).maxY - at(i).minY + 6 / r.z, fill: "none", stroke: j.blue, strokeWidth: 2 / r.z, rx: 6 / r.z }) : /* @__PURE__ */ N("circle", { cx: m.x, cy: m.y, r: 5 / r.z, fill: j.blue })
      ] });
    })(),
    c && /* @__PURE__ */ N("circle", { cx: c.x, cy: c.y, r: eo / r.z, fill: j.roseSoft, stroke: j.rose, strokeWidth: 1 / r.z }),
    u.map((l, a) => /* @__PURE__ */ N("line", { x1: l.x1, y1: l.y1, x2: l.x2, y2: l.y2, stroke: j.pink, strokeWidth: 1 / r.z, strokeDasharray: `${4 / r.z} ${4 / r.z}` }, `guide-${a}`)),
    v && /* @__PURE__ */ N("rect", { x: Math.min(v.startX, v.curX), y: Math.min(v.startY, v.curY), width: Math.abs(v.curX - v.startX), height: Math.abs(v.curY - v.startY), fill: j.marqueeFill, stroke: j.blue, strokeWidth: 1 / r.z })
  ] }) });
}
const oo = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], ro = /* @__PURE__ */ new Set([
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
]), ao = [
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
function ue(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function en(t) {
  return ro.has(t.trim().toLowerCase());
}
function nn(t) {
  const n = ue(t);
  return n ? en(n) ? n : `"${n.replace(/"/g, '\\"')}"` : "";
}
function io(t) {
  return ue(t).split(",").map((n) => n.trim()).filter(Boolean).map(nn).filter(Boolean).join(", ");
}
function on(t) {
  return ue(t).split(",").map((n) => n.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Ut(t) {
  return t.split(",").map((n) => ue(n).replace(/^["']|["']$/g, "")).filter(Boolean).filter((n) => !en(n));
}
const ie = Array.from(/* @__PURE__ */ new Set([
  ...ao,
  ...Ut(It.sans.stack),
  ...Ut(It.serif.stack),
  ...Ut(It.mono.stack),
  ...Ut(It.gothic.stack),
  ...Ut(It.korean.stack)
]));
function co() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return ie;
  const t = ie.filter((n) => {
    const e = nn(n);
    return e ? document.fonts.check(`12px ${e}`) : !1;
  });
  return t.length > 0 ? t : ie;
}
const so = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, lo = 24, uo = 28, rn = 720;
function vt(t) {
  return t.fontSize ?? so[t.type] ?? 14;
}
function pt(t) {
  var n;
  if (!t.fontFamily) return It.sans.stack;
  if (t.fontFamily === "custom") {
    let e = "";
    try {
      e = on(Cn(t.customFontFamily ?? ""));
    } catch {
    }
    return io(e) || It.sans.stack;
  }
  return ((n = It[t.fontFamily]) == null ? void 0 : n.stack) ?? It.sans.stack;
}
function bt(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function xo(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function ho(t) {
  var n, e, o;
  if ((n = t.html) != null && n.includes('<ul data-list-style="dash">')) return "dash";
  if ((e = t.html) != null && e.includes("<ul>")) return "bullet";
  if ((o = t.html) != null && o.includes("<ol>")) return "number";
}
function fo(t, n) {
  return {
    w: Math.min(rn, Math.max(lo, Math.ceil(t))),
    h: Math.max(uo, Math.ceil(n))
  };
}
function vo(t, n) {
  const e = t.cloneNode(!0);
  e.removeAttribute("id"), e.removeAttribute("role"), e.removeAttribute("aria-label"), e.removeAttribute("aria-multiline"), e.removeAttribute("contenteditable"), e.removeAttribute("data-seeded"), e.innerHTML = me(t.innerHTML), (e.textContent || "").length === 0 && (e.innerHTML = "&nbsp;"), Object.assign(e.style, {
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
    fontSize: `${vt(n)}px`,
    fontFamily: pt(n)
  }), document.body.appendChild(e);
  const o = e.getBoundingClientRect();
  return e.remove(), fo(o.width, o.height);
}
const po = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), mo = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function go({
  visiblePaintOrder: t,
  selected: n,
  editingId: e,
  camera: o,
  shapeById: r,
  allShapes: s,
  peerCursors: c,
  isDarkMode: u,
  renderEditor: v,
  renderShapeBody: k,
  setEditingId: y,
  onBendHandleDown: l,
  onOrthogonalSegmentHandleDown: a,
  onResizeHandleDown: i,
  onRotateHandleDown: m,
  onConnectHandleDown: g,
  onArrowEndpointDown: S
}) {
  return /* @__PURE__ */ B(At, { children: [
    /* @__PURE__ */ N("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((p) => {
      if (p.type === "draw") return null;
      if (p.type === "arrow") {
        const h = Et(p, r, s), X = h.routing === "orthogonal" && h.pathPoints ? ye(h.pathPoints) : h.routing === "curved" ? Rt(0.5, h.start, h.control, h.end) : { x: (h.start.x + h.end.x) / 2, y: (h.start.y + h.end.y) / 2 }, M = e === p.id, x = de(p), b = n.has(p.id), f = Qt(p).trim(), $ = x || (b ? "관계 입력" : "");
        return !$ && !M ? null : /* @__PURE__ */ N(Gt.Fragment, { children: /* @__PURE__ */ N("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: X.x - 90, top: X.y - 18, width: 180, height: 36 }, onDoubleClick: (C) => {
          C.stopPropagation(), y(p.id);
        }, children: ($ || M) && /* @__PURE__ */ N(
          "div",
          {
            "data-canvas-arrow-label": "true",
            "aria-label": f ? `관계 설명: ${f}` : "관계 설명 입력",
            title: M ? void 0 : f ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
            className: `px-3 py-1 rounded-full border-2 shadow-sm ${u ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
            style: {
              fontSize: vt(p),
              fontFamily: pt(p),
              maxWidth: "100%",
              minWidth: M ? 120 / o.z : void 0,
              minHeight: M ? 28 / o.z : void 0,
              color: p.textColor
            },
            children: M ? v("text-center whitespace-nowrap") : /* @__PURE__ */ N("span", { dangerouslySetInnerHTML: { __html: $ } }, "canvas-view")
          }
        ) }) }, p.id);
      }
      const d = n.has(p.id), w = Lt(p);
      return /* @__PURE__ */ B(
        "div",
        {
          "data-canvas-shape-id": p.id,
          "data-canvas-shape-type": p.type,
          "data-canvas-selected": d ? "true" : void 0,
          "data-canvas-text-align": bt(p),
          "data-canvas-text-color": p.textColor,
          "data-canvas-font-size": vt(p),
          "data-canvas-font-family": p.fontFamily === "custom" ? p.customFontFamily ?? "custom" : p.fontFamily ?? "sans",
          "data-canvas-manual-size": p.manualSize ? "true" : void 0,
          "data-canvas-group-id": p.groupId,
          "data-canvas-list-kind": ho(p),
          "data-canvas-x": p.x,
          "data-canvas-y": p.y,
          "data-canvas-width": p.w,
          "data-canvas-height": p.h,
          className: "absolute",
          style: { left: w.minX, top: w.minY, width: w.maxX - w.minX, height: w.maxY - w.minY, transform: p.rotation ? `rotate(${p.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (h) => {
            h.stopPropagation(), po.has(p.type) && y(p.id);
          },
          children: [
            k(p),
            d && /* @__PURE__ */ B(At, { children: [
              /* @__PURE__ */ N("div", { "data-canvas-selection-box": "true", className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${j.blue}` } }),
              n.size === 1 && /* @__PURE__ */ B(At, { children: [
                ["nw", "ne", "sw", "se"].map((h) => /* @__PURE__ */ N("div", { "data-canvas-resize-handle": h, onPointerDown: (X) => i(X, p, h), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${h}-resize`, left: h.includes("w") ? -5 / o.z : void 0, right: h.includes("e") ? -5 / o.z : void 0, top: h.includes("n") ? -5 / o.z : void 0, bottom: h.includes("s") ? -5 / o.z : void 0 } }, h)),
                /* @__PURE__ */ N("div", { onPointerDown: (h) => m(h, p), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                mo.has(p.type) && ["n", "s", "w", "e"].map((h) => /* @__PURE__ */ N("div", { onPointerDown: (X) => g(X, p), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...h === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : h === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : h === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${h}`))
              ] })
            ] })
          ]
        },
        p.id
      );
    }) }),
    n.size === 1 && s.filter((p) => p.type === "arrow" && n.has(p.id)).map((p) => {
      const d = Et(p, r, s), w = (h, X) => ({
        left: (h.x - o.x) * o.z - X / 2,
        top: (h.y - o.y) * o.z - X / 2
      });
      return /* @__PURE__ */ B(Gt.Fragment, { children: [
        d.routing === "orthogonal" && d.pathPoints && d.pathPoints.length > 2 ? d.pathPoints.slice(0, -1).map((h, X) => {
          var b;
          const M = (b = d.pathPoints) == null ? void 0 : b[X + 1];
          if (!M) return null;
          const x = { x: (h.x + M.x) / 2, y: (h.y + M.y) / 2 };
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-segment-handle": X, onPointerDown: (f) => a(f, p, X), title: "드래그해서 직각선 구간 이동", className: "absolute z-50 pointer-events-auto rounded-sm bg-white border-2 border-blue-600", style: { width: 12, height: 12, ...w(x, 12), cursor: h.x === M.x ? "ew-resize" : "ns-resize" } }, `segment-${X}`);
        }) : d.routing === "curved" && /* @__PURE__ */ N("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (h) => l(h, p), title: "드래그해서 곡선 휘기", className: "absolute z-50 pointer-events-auto rounded-full bg-white border-2 border-blue-600", style: { width: 10, height: 10, left: (d.start.x + d.end.x) / 2 * o.z - o.x * o.z - 5, top: (d.start.y + d.end.y) / 2 * o.z - o.y * o.z - 10, cursor: "grab" } }),
        ["start", "end"].map((h) => {
          const X = h === "start" ? d.start : d.end;
          return /* @__PURE__ */ N("div", { "data-canvas-arrow-endpoint": h, onPointerDown: (M) => S(M, p, h), title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)", className: "absolute z-50 pointer-events-auto bg-white border-2 border-blue-600 rounded-full", style: { width: 12, height: 12, ...w(X, 12), cursor: "grab" } }, h);
        })
      ] }, `arrow-handles-${p.id}`);
    }),
    c == null ? void 0 : c.map((p) => /* @__PURE__ */ B("div", { className: "absolute pointer-events-none z-40", style: { left: (p.x - o.x) * o.z, top: (p.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ N("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ N("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: p.color, stroke: j.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ N("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: p.color }, children: p.name })
    ] }, p.id))
  ] });
}
function we(t) {
  var n;
  return t.type === "card" && ((n = t.category) == null ? void 0 : n.toLowerCase()) === "diagram";
}
function yo(t) {
  const n = ["color"];
  return t.type === "arrow" ? n.push("arrow") : t.type !== "image" && t.type !== "draw" && n.push("text"), n.push("arrange"), we(t) && n.push("diagram"), n;
}
function ir(t) {
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
const wo = "#3b82f6";
function Tt(t, n, e) {
  return Math.min(e, Math.max(n, t));
}
function ce(t) {
  return Math.round(Tt(t, 0, 255)).toString(16).padStart(2, "0");
}
function bo(t) {
  const n = t.trim().endsWith("%"), e = Number.parseFloat(t);
  return Number.isFinite(e) ? n ? e * 2.55 : e : 0;
}
function Vt(t) {
  var s, c;
  const n = t.trim().toLowerCase(), e = (s = n.match(/^#([0-9a-f]{3,8})$/i)) == null ? void 0 : s[1];
  if (e)
    return e.length === 3 || e.length === 4 ? `#${e.slice(0, 3).split("").map((u) => `${u}${u}`).join("")}` : `#${e.slice(0, 6)}`;
  const o = (c = n.match(/^rgba?\(([^)]+)\)$/)) == null ? void 0 : c[1];
  if (o) {
    const u = o.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(bo);
    if (u.length === 3) return `#${u.map(ce).join("")}`;
  }
  return {
    black: "#000000",
    blue: "#0000ff",
    green: "#008000",
    red: "#ff0000",
    white: "#ffffff",
    yellow: "#ffff00"
  }[n] ?? wo;
}
function Pe(t) {
  const n = Vt(t).slice(1), e = Number.parseInt(n.slice(0, 2), 16) / 255, o = Number.parseInt(n.slice(2, 4), 16) / 255, r = Number.parseInt(n.slice(4, 6), 16) / 255, s = Math.max(e, o, r), c = Math.min(e, o, r), u = s - c;
  let v = 0;
  return u !== 0 && (s === e ? v = 60 * ((o - r) / u % 6) : s === o ? v = 60 * ((r - e) / u + 2) : v = 60 * ((e - o) / u + 4)), v < 0 && (v += 360), { hue: v, saturation: s === 0 ? 0 : u / s, value: s };
}
function Ee({ hue: t, saturation: n, value: e }) {
  const o = (t % 360 + 360) % 360, r = e * n, s = r * (1 - Math.abs(o / 60 % 2 - 1)), c = e - r;
  let u = 0, v = 0, k = 0;
  return o < 60 ? [u, v, k] = [r, s, 0] : o < 120 ? [u, v, k] = [s, r, 0] : o < 180 ? [u, v, k] = [0, r, s] : o < 240 ? [u, v, k] = [0, s, r] : o < 300 ? [u, v, k] = [s, 0, r] : [u, v, k] = [r, 0, s], `#${ce((u + c) * 255)}${ce((v + c) * 255)}${ce((k + c) * 255)}`;
}
function ko(t, n) {
  return Math.abs(t.hue - n.hue) < 0.01 && Math.abs(t.saturation - n.saturation) < 1e-3 && Math.abs(t.value - n.value) < 1e-3;
}
function $o({ value: t, onChange: n }) {
  const [e, o] = nt(() => Pe(t)), r = R(null), s = R(null), c = R(null);
  Xt(() => {
    const d = Pe(t);
    o((w) => ko(w, d) ? w : d);
  }, [t]);
  const u = (d) => {
    o(d), n(Ee(d));
  }, v = (d) => {
    var x;
    const w = (x = r.current) == null ? void 0 : x.getBoundingClientRect();
    if (!w) return;
    const h = d.clientX - (w.left + w.width / 2), X = d.clientY - (w.top + w.height / 2), M = Math.atan2(X, h) * 180 / Math.PI + 90;
    u({ ...e, hue: (M + 360) % 360 });
  }, k = (d) => {
    var h;
    const w = (h = s.current) == null ? void 0 : h.getBoundingClientRect();
    w && u({
      ...e,
      saturation: Tt((d.clientX - w.left) / w.width, 0, 1),
      value: Tt(1 - (d.clientY - w.top) / w.height, 0, 1)
    });
  }, y = (d, w) => {
    var h, X;
    w.button !== 0 && w.pointerType !== "touch" || (w.preventDefault(), w.stopPropagation(), c.current = d, (X = (h = w.currentTarget).setPointerCapture) == null || X.call(h, w.pointerId), d === "hue" ? v(w) : k(w));
  }, l = (d) => {
    c.current && (d.preventDefault(), c.current === "hue" ? v(d) : k(d));
  }, a = (d) => {
    var w, h;
    c.current = null;
    try {
      (h = (w = d.currentTarget).releasePointerCapture) == null || h.call(w, d.pointerId);
    } catch {
      return;
    }
  }, i = (e.hue - 90) * Math.PI / 180, m = 53, g = {
    left: 66 + Math.cos(i) * m,
    top: 66 + Math.sin(i) * m
  }, S = Ee({ hue: e.hue, saturation: 1, value: 1 }), p = (d) => u({ ...e, hue: (e.hue + d + 360) % 360 });
  return /* @__PURE__ */ B("div", { className: "canvas-color-wheel", "data-canvas-color-wheel": !0, children: [
    /* @__PURE__ */ B(
      "div",
      {
        ref: r,
        className: "canvas-color-wheel-hue",
        role: "slider",
        "aria-label": "색상 색상환",
        "aria-valuemin": 0,
        "aria-valuemax": 360,
        "aria-valuenow": Math.round(e.hue),
        tabIndex: 0,
        onPointerDown: (d) => y("hue", d),
        onPointerMove: l,
        onPointerUp: a,
        onKeyDown: (d) => {
          (d.key === "ArrowLeft" || d.key === "ArrowDown") && (d.preventDefault(), p(-1)), (d.key === "ArrowRight" || d.key === "ArrowUp") && (d.preventDefault(), p(1));
        },
        children: [
          /* @__PURE__ */ N("div", { className: "canvas-color-wheel-core", style: { background: t } }),
          /* @__PURE__ */ N("span", { className: "canvas-color-wheel-hue-marker", style: { left: g.left, top: g.top } })
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
        "aria-valuenow": Math.round(e.saturation * e.value * 100),
        tabIndex: 0,
        style: { backgroundColor: S },
        onPointerDown: (d) => y("sv", d),
        onPointerMove: l,
        onPointerUp: a,
        onKeyDown: (d) => {
          const w = d.shiftKey ? 0.1 : 0.02;
          d.key === "ArrowLeft" && (d.preventDefault(), u({ ...e, saturation: Tt(e.saturation - w, 0, 1) })), d.key === "ArrowRight" && (d.preventDefault(), u({ ...e, saturation: Tt(e.saturation + w, 0, 1) })), d.key === "ArrowDown" && (d.preventDefault(), u({ ...e, value: Tt(e.value - w, 0, 1) })), d.key === "ArrowUp" && (d.preventDefault(), u({ ...e, value: Tt(e.value + w, 0, 1) }));
        },
        children: /* @__PURE__ */ N("span", { className: "canvas-color-wheel-sv-marker", style: { left: `${e.saturation * 100}%`, top: `${(1 - e.value) * 100}%` } })
      }
    ),
    /* @__PURE__ */ B("div", { className: "canvas-color-wheel-value", "aria-live": "polite", children: [
      /* @__PURE__ */ N("span", { className: "canvas-color-wheel-preview", style: { background: t }, "aria-hidden": "true" }),
      /* @__PURE__ */ N("span", { children: Vt(t).toUpperCase() })
    ] })
  ] });
}
const Mo = [2, 4, 6, 8];
function zo(t) {
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
function Fe(t) {
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
function he(t) {
  return t.type === "note" || t.type === "card" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Le(t) {
  return t.type === "draw" || t.type === "arrow" || t.type === "frame" || t.type === "rect" || t.type === "ellipse" || t.type === "triangle" || t.type === "diamond" || t.type === "hexagon" || t.type === "star";
}
function Co({
  shape: t,
  selection: n,
  selectionActions: e,
  shapes: o,
  camera: r,
  canvasSize: s,
  isDarkMode: c,
  editing: u,
  showPalette: v,
  installedFontFamilies: k,
  setShowPalette: y,
  setActiveColor: l,
  patchSelected: a,
  applyFormat: i,
  applyList: m,
  applyCustomFontFamily: g
}) {
  var Mt, zt;
  const S = c ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", p = n.length > 1, d = n.some((z) => !!z.groupId), w = t.type === "draw", h = w || Le(t) && !he(t) ? "stroke" : he(t) ? "fill" : "text", [X, M] = nt(h), [x, b] = nt("");
  Ht(() => M(h), [h, t.id]);
  const f = X === "text" ? Dt(t) : X === "stroke" ? t.strokeColor ?? (t.color ? ot[t.color].border : j.ink) : se(t);
  Ht(() => b(Vt(f).toUpperCase()), [f]);
  const $ = Vt(f), C = (z) => {
    a(w || X === "stroke" ? { strokeColor: z } : X === "text" ? { textColor: z } : { fillColor: z });
  }, Y = (z) => {
    l(z), a(w || X === "stroke" ? { color: z, strokeColor: void 0 } : X === "text" ? { textColor: ot[z].text } : { color: z, fillColor: void 0 }), y(!1);
  }, E = R(null), [P, L] = nt({ width: 380, height: 260 });
  Ht(() => {
    const z = E.current;
    if (!z) return;
    const O = () => {
      const ht = Math.max(1, Math.ceil(z.getBoundingClientRect().width)), Ct = Math.max(1, Math.ceil(z.getBoundingClientRect().height));
      L((jt) => jt.width === ht && jt.height === Ct ? jt : { width: ht, height: Ct });
    };
    if (O(), typeof ResizeObserver > "u") return;
    const q = new ResizeObserver(O);
    return q.observe(z), () => q.disconnect();
  }, [u, k.length, c, t, v]);
  const T = P.width, W = P.height, K = n.reduce((z, O) => {
    const q = at(O);
    return {
      minX: Math.min(z.minX, q.minX),
      minY: Math.min(z.minY, q.minY),
      maxX: Math.max(z.maxX, q.maxX),
      maxY: Math.max(z.maxY, q.maxY)
    };
  }, at(t)), I = (K.minX - r.x) * r.z, F = (K.minY - r.y) * r.z, A = (K.maxX - r.x) * r.z, V = (K.maxY - r.y) * r.z, Q = Math.max(8, s.width - T - 8), U = Math.max(8, s.height - W - 8), tt = (z, O) => ({ left: Math.min(Math.max(8, z), Q), top: Math.min(Math.max(8, O), U) }), ut = [
    tt((I + A) / 2 - T / 2, F - W - 12),
    tt((I + A) / 2 - T / 2, V + 12),
    tt((s.width - T) / 2, 12),
    tt(I - T - 12, F + (V - F - W) / 2),
    tt(A + 12, F + (V - F - W) / 2)
  ], it = o.map((z) => {
    const O = at(z);
    return { left: (O.minX - r.x) * r.z, top: (O.minY - r.y) * r.z, right: (O.maxX - r.x) * r.z, bottom: (O.maxY - r.y) * r.z };
  });
  if (t.type === "arrow") {
    const z = Et(t, new Map(o.map((Ct) => [Ct.id, Ct])), o), O = z.routing === "orthogonal" && z.pathPoints ? ye(z.pathPoints) : { x: (z.start.x + z.end.x) / 2, y: (z.start.y + z.end.y) / 2 }, q = 180 * r.z, ht = 36 * r.z;
    it.push({
      left: (O.x - r.x) * r.z - q / 2,
      top: (O.y - r.y) * r.z - ht / 2,
      right: (O.x - r.x) * r.z + q / 2,
      bottom: (O.y - r.y) * r.z + ht / 2
    });
  }
  const mt = ut[0], Yt = (z, O) => {
    const q = Math.max(0, Math.min(z.left + T, O.right) - Math.max(z.left, O.left)), ht = Math.max(0, Math.min(z.top + W, O.bottom) - Math.max(z.top, O.top));
    return q * ht;
  }, Nt = ((Mt = ut.map((z) => ({
    candidate: z,
    overlap: it.reduce((O, q) => O + Yt(z, q), 0),
    distance: Math.hypot(z.left - mt.left, z.top - mt.top)
  })).sort((z, O) => z.overlap - O.overlap || z.distance - O.distance)[0]) == null ? void 0 : Mt.candidate) ?? mt, G = vt(t), et = n.every(zo), yt = new Set(n.map(Fe)).size === 1 ? Fe(t) : void 0, xt = yo(t), wt = t.type === "arrow" ? "arrow" : xt[0] ?? "color", [Z, kt] = nt(wt);
  Ht(() => {
    xt.includes(Z) || kt(wt);
  }, [wt, xt, Z]);
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
  return /* @__PURE__ */ B("div", { ref: E, "data-canvas-inspector": w ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${c ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: Nt.left, top: Nt.top }, onPointerDown: (z) => {
    z.stopPropagation();
    const O = z.target instanceof Element ? z.target : null;
    O != null && O.closest("input, select, textarea") || z.preventDefault();
  }, onClick: (z) => z.stopPropagation(), children: [
    p ? /* @__PURE__ */ B("div", { className: "flex items-center gap-1 px-1 text-[11px] font-semibold opacity-70", children: [
      n.length,
      "개 선택됨"
    ] }) : /* @__PURE__ */ N("div", { className: "flex flex-wrap items-center gap-1 pointer-events-auto", role: "tablist", "aria-label": "선택 개체 도구 그룹", children: xt.map((z) => /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": Z === z, onClick: () => kt(z), className: `h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors ${Z === z ? "bg-blue-600 text-white" : S}`, children: J[z] }, z)) }),
    /* @__PURE__ */ B("div", { className: "relative flex items-center gap-1.5 pointer-events-none", style: { display: p || Z === "color" || w ? void 0 : "none" }, children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: w ? "그리기" : "색상" }),
      /* @__PURE__ */ N("button", { type: "button", title: w ? "그리기 무지개 컬러휠" : "무지개 컬러휠", "aria-label": w ? "그리기 무지개 컬러휠" : "무지개 컬러휠", onClick: () => y((z) => !z), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${c ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ N("span", { className: "canvas-color-wheel-trigger", "aria-hidden": "true", children: /* @__PURE__ */ N("span", { className: "canvas-color-wheel-trigger-dot", style: { background: $ } }) }) }),
      v && /* @__PURE__ */ B("div", { "data-canvas-color-popover": !0, className: `pointer-events-auto absolute left-0 top-10 z-50 flex flex-col gap-2 p-2.5 rounded-xl border shadow-xl ${c ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        !w && /* @__PURE__ */ B("div", { className: "canvas-color-targets", role: "tablist", "aria-label": "세부 색상 대상", children: [
          he(t) && /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": X === "fill", onClick: () => M("fill"), className: X === "fill" ? "is-active" : "", children: "배경" }),
          Le(t) && /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": X === "stroke", onClick: () => M("stroke"), className: X === "stroke" ? "is-active" : "", children: "선" }),
          /* @__PURE__ */ N("button", { type: "button", role: "tab", "aria-selected": X === "text", onClick: () => M("text"), className: X === "text" ? "is-active" : "", children: "글씨" })
        ] }),
        /* @__PURE__ */ N("div", { className: "canvas-color-presets", "aria-label": "기본 색상", children: Xn.map((z) => /* @__PURE__ */ N("button", { type: "button", title: ot[z].label, "aria-label": `색 ${ot[z].label}`, onClick: () => Y(z), className: "canvas-color-preset", style: { background: ot[z].bg, borderColor: ot[z].border, outline: t.color === z && !t.fillColor && !t.strokeColor ? `2px solid ${j.blue}` : void 0, outlineOffset: 1 } }, z)) }),
        /* @__PURE__ */ N($o, { value: f, onChange: C }),
        /* @__PURE__ */ B("label", { className: "canvas-color-hex", children: [
          /* @__PURE__ */ N("span", { children: "#" }),
          /* @__PURE__ */ N(
            "input",
            {
              "data-canvas-control": "color-hex",
              type: "text",
              inputMode: "text",
              "aria-label": "HEX 색상",
              value: x.replace(/^#/, ""),
              onChange: (z) => {
                const O = z.currentTarget.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
                b(`#${O}`.toUpperCase()), O.length === 6 && C(`#${O}`);
              },
              onBlur: () => b(Vt(f).toUpperCase()),
              onPointerDown: (z) => z.stopPropagation(),
              className: "canvas-color-hex-input"
            }
          )
        ] })
      ] })
    ] }),
    !p && Z !== "color" && !w && /* @__PURE__ */ B(At, { children: [
      /* @__PURE__ */ B("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ B("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: Dt(t), color: j.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ N("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ N("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? Dt(t), onChange: (z) => a({ textColor: z.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ B("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${c ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => a({ fontSize: Math.max(8, G - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${S}`, children: /* @__PURE__ */ N(In, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ N("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: G }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => a({ fontSize: Math.min(96, G + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${S}`, children: /* @__PURE__ */ N(Pn, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ B("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${c ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ N("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (z) => {
            const O = xo(z.target.value);
            a(O === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: O, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${c ? "text-slate-200" : "text-slate-700"}`, children: oo.map((z) => /* @__PURE__ */ N("option", { value: z, className: c ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: It[z].label }, z)) }),
          /* @__PURE__ */ N(En, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ B(At, { children: [
          /* @__PURE__ */ N("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (z) => g(z.target.value), onChange: (z) => z.currentTarget.value && g(z.currentTarget.value), onKeyDown: (z) => {
            z.key === "Enter" && (z.preventDefault(), g(z.currentTarget.value));
          }, onDoubleClick: (z) => z.stopPropagation(), onPointerDown: (z) => z.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${c ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ N("datalist", { id: `canvas-font-families-${t.id}`, children: k.map((z) => /* @__PURE__ */ N("option", { value: z }, z)) })
        ] })
      ] }),
      /* @__PURE__ */ B("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${c ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", Fn, "왼쪽 정렬"], ["center", Ln, "가운데 정렬"], ["right", Tn, "오른쪽 정렬"]].map(([z, O, q]) => /* @__PURE__ */ N("button", { type: "button", "aria-label": q, title: q, onClick: () => a({ textAlign: z }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${bt(t) === z ? "bg-blue-600 text-white shadow-sm" : S}`, children: /* @__PURE__ */ N(O, { className: "w-4 h-4" }) }, z)) }),
        u && /* @__PURE__ */ B(At, { children: [
          /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", An, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", Dn, "번호 목록"]].map(([z, O, q]) => /* @__PURE__ */ N("button", { type: "button", onClick: () => m(z), "aria-label": q, title: q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${S}`, children: O ? /* @__PURE__ */ N(O, { className: "w-4 h-4" }) : /* @__PURE__ */ N("span", { className: "text-base leading-none", children: "–" }) }, z)) }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: Wn, label: "굵게" }, { cmd: "italic", Icon: On, label: "기울임" }, { cmd: "underline", Icon: _n, label: "밑줄" }].map(({ cmd: z, Icon: O, label: q }) => /* @__PURE__ */ N("button", { type: "button", onClick: () => i(z), "aria-label": q, title: q, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${S}`, children: /* @__PURE__ */ N(O, { className: "w-4 h-4" }) }, z)) })
        ] })
      ] }),
      (Z === "arrange" && t.type === "card" || Z === "arrow" && t.type === "arrow") && /* @__PURE__ */ B("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${c ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ B(At, { children: [
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${c ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ N("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (z) => z.stopPropagation(), onChange: (z) => a({ category: z.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${c ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ B("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ B("div", { className: "flex items-center gap-1", children: [
            _("경로"),
            D("직선", (t.routing ?? "straight") === "straight", () => a({ routing: "straight", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직선"),
            D("직각", t.routing === "orthogonal", () => a({ routing: "orthogonal", bend: 0, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각: 자동으로 장애물 회피"),
            D("곡선", (t.routing ?? "") === "curved", () => a({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "곡선"),
            $t && D("자동", !1, () => a({ routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: void 0 }), "직각 경로를 자동으로 다시 계산")
          ] }),
          /* @__PURE__ */ B("div", { className: "flex items-center gap-1", children: [
            _("선"),
            D("—", (t.strokeStyle ?? "solid") === "solid", () => a({ strokeStyle: "solid" }), "실선"),
            D("- -", t.strokeStyle === "dashed", () => a({ strokeStyle: "dashed" }), "파선"),
            D("···", t.strokeStyle === "dotted", () => a({ strokeStyle: "dotted" }), "점선")
          ] }),
          /* @__PURE__ */ B("div", { className: "flex items-center gap-1", children: [
            _("시작"),
            D(ct === "none" ? "○" : ct === "dot" ? "●" : "◀", ct !== "none", () => a({ arrowStart: ct === "none" ? "arrow" : ct === "arrow" ? "dot" : "none" }), "시작점 표식", `시작점 표식: ${ct === "none" ? "없음" : ct === "dot" ? "점" : "화살표"}`)
          ] }),
          /* @__PURE__ */ B("div", { className: "flex items-center gap-1", children: [
            _("끝"),
            D(st === "none" ? "○" : st === "dot" ? "●" : "▶", st !== "none", () => a({ arrowEnd: st === "arrow" ? "dot" : st === "dot" ? "none" : "arrow" }), "끝점 표식", `끝점 표식: ${st === "none" ? "없음" : st === "dot" ? "점" : "화살표"}`)
          ] })
        ] })
      ] }),
      Z === "diagram" && /* @__PURE__ */ N("div", { className: `pt-1.5 border-t text-[11px] opacity-70 ${c ? "border-slate-700" : "border-slate-100"}`, children: "Mermaid 소스는 오른쪽 Diagram 편집기에서 수정할 수 있습니다." })
    ] }),
    et && /* @__PURE__ */ B("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-none ${c ? "border-slate-700" : "border-slate-100"}`, children: [
      _("굵기"),
      Mo.map((z) => /* @__PURE__ */ N(Gt.Fragment, { children: D(String(z), yt === z, () => a({ strokeWidth: z }), `굵기 ${z}`) }, z))
    ] }),
    /* @__PURE__ */ B("div", { className: `flex flex-wrap items-center gap-1 pt-1.5 border-t pointer-events-auto ${c ? "border-slate-700" : "border-slate-100"}`, children: [
      _("선택"),
      H(Hn, "그룹 (Ctrl+G)", e.group, p),
      H(Bn, "그룹 해제 (Ctrl+Shift+G)", e.ungroup, d),
      H(jn, "복제", e.duplicateSelected, !0),
      H(Kn, "삭제 (Delete)", e.deleteSelected, !0, !0)
    ] })
  ] });
}
function Xo({
  camera: t,
  editingId: n,
  isDarkMode: e,
  editorRef: o,
  commitEditorHtml: r,
  onEditorKeyDown: s,
  setShapes: c,
  onDirty: u,
  renderDiagram: v
}) {
  const k = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", y = (a, i) => /* @__PURE__ */ N(
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
      onDoubleClick: (m) => m.stopPropagation(),
      onKeyDown: s,
      className: `${k} ${a}`,
      style: i
    },
    "canvas-editor"
  );
  return { renderEditor: y, renderShapeBody: (a) => {
    const i = ot[a.color ?? "blue"], m = n === a.id, g = de(a);
    if (a.type === "frame") {
      const M = a.strokeWidth ?? 2;
      return /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-stroke-width": M,
          className: "w-full h-full rounded",
          style: { border: `${M / t.z}px solid ${e ? j.slate600 : j.slate400}` },
          children: /* @__PURE__ */ N(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: e ? j.slate400 : j.muted
              },
              children: m ? y("", { fontSize: 13 / t.z }) : Qt(a) || "프레임"
            }
          )
        }
      );
    }
    if (a.type === "note")
      return /* @__PURE__ */ N(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: se(a), borderTop: `6px solid ${i.border}`, color: i.text },
          children: m ? y("font-medium", { color: Dt(a), fontSize: vt(a), fontFamily: pt(a), textAlign: bt(a) }) : g ? /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Dt(a), fontSize: vt(a), fontFamily: pt(a), textAlign: bt(a) }, dangerouslySetInnerHTML: { __html: g } }, "canvas-view") : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: Dt(a), fontSize: vt(a), fontFamily: pt(a), textAlign: bt(a) }, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (a.type === "card") {
      const M = a.cardStyle === "glass";
      return we(a) && v && !m ? /* @__PURE__ */ N("div", { className: "w-full h-full overflow-hidden rounded-2xl", "data-canvas-diagram": !0, children: v(a) }) : /* @__PURE__ */ B(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: M ? j.glassFill : a.fillColor ?? j.slateCard,
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
                onPointerDown: (x) => x.stopPropagation(),
                onDoubleClick: (x) => x.stopPropagation(),
                onBlur: (x) => {
                  const f = (x.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  c(($) => $.map((C) => C.id === a.id ? { ...C, category: f } : C)), u();
                },
                onKeyDown: (x) => {
                  x.key === "Enter" && (x.preventDefault(), x.currentTarget.blur());
                },
                children: [
                  "[ ",
                  a.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            m ? y("flex-1 font-medium", { color: a.textColor ?? j.white, fontSize: vt(a), fontFamily: pt(a), textAlign: bt(a) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: a.textColor ?? j.white, fontSize: vt(a), fontFamily: pt(a), textAlign: bt(a) }, dangerouslySetInnerHTML: { __html: g } }, "canvas-view"),
            /* @__PURE__ */ B("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              a.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (a.type === "text") {
      const M = e ? "text-slate-100" : "text-slate-900", x = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${M}`,
        style: { color: a.textColor, fontSize: vt(a), fontFamily: pt(a), textAlign: bt(a) }
      };
      return m ? y(`font-medium ${M}`, x.style) : g ? /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-text-view": !0,
          ...x,
          dangerouslySetInnerHTML: { __html: g }
        },
        "canvas-view"
      ) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, ...x, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (a.type === "image") {
      const M = pe(a.src);
      return M ? /* @__PURE__ */ N(
        "img",
        {
          src: M,
          alt: a.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const S = se(a), p = Ge(a), d = Dt(a);
    if (a.type === "triangle" || a.type === "diamond" || a.type === "hexagon" || a.type === "star") {
      const M = a.strokeWidth ?? 2;
      return /* @__PURE__ */ B("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${a.w} ${a.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ N("polygon", { "data-canvas-stroke-width": M, points: qe(a.type, a.w, a.h), fill: S, stroke: p, strokeWidth: M / t.z, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ N("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: d }, children: m ? y("font-medium", { color: d, fontSize: vt(a), fontFamily: pt(a), textAlign: bt(a) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: vt(a), fontFamily: pt(a), textAlign: bt(a) }, dangerouslySetInnerHTML: { __html: g } }, "canvas-view") })
      ] });
    }
    const h = pe(a.src), X = a.type === "rect" || a.type === "ellipse" ? a.strokeWidth ?? 2 : 2;
    return /* @__PURE__ */ N(
      "div",
      {
        "data-canvas-stroke-width": X,
        className: `w-full h-full flex items-center justify-center p-3 ${a.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: S, border: `${X / t.z}px solid ${p}`, color: d },
        children: m ? y("font-medium", { color: d, fontSize: vt(a), fontFamily: pt(a), textAlign: bt(a) }) : /* @__PURE__ */ B("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: vt(a), fontFamily: pt(a), textAlign: bt(a) }, children: [
          /* @__PURE__ */ N("div", { dangerouslySetInnerHTML: { __html: g } }),
          h && /* @__PURE__ */ N(
            "a",
            {
              href: h,
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
function So({
  containerRef: t,
  shapesRef: n,
  shapes: e,
  camera: o,
  selected: r,
  editingId: s,
  boardIdentity: c
}) {
  const [u, v] = nt({ width: 0, height: 0 });
  Xt(() => {
    const m = t.current;
    if (!m) return;
    let g = -1, S = -1;
    const p = (w = m.clientWidth, h = m.clientHeight) => {
      w === g && h === S || (g = w, S = h, v({ width: w, height: h }));
    };
    if (p(), typeof ResizeObserver < "u") {
      const w = new ResizeObserver((h) => {
        var M;
        const X = (M = h[0]) == null ? void 0 : M.contentRect;
        p((X == null ? void 0 : X.width) ?? m.clientWidth, (X == null ? void 0 : X.height) ?? m.clientHeight);
      });
      return w.observe(m), () => w.disconnect();
    }
    const d = () => p();
    return window.addEventListener("resize", d), () => window.removeEventListener("resize", d);
  }, [c, t]);
  const k = Pt(() => new Map(e.map((m) => [m.id, m])), [e]), y = Pt(
    () => [...e].sort((m, g) => (m.type === "frame" ? -1 : 0) - (g.type === "frame" ? -1 : 0)),
    [e]
  ), l = Pt(() => {
    if (!t.current || u.width <= 0 || u.height <= 0) return null;
    const m = 200 / o.z;
    return {
      minX: o.x - m,
      minY: o.y - m,
      maxX: o.x + u.width / o.z + m,
      maxY: o.y + u.height / o.z + m
    };
  }, [o, t, u]), a = dt((m) => {
    if (!l) return !1;
    if (m.id === s || r.has(m.id)) return !0;
    if (m.type === "arrow") {
      const S = Et(m, k, n.current), d = (S.routing === "orthogonal" ? S.pathPoints : null) ?? [S.start, S.end], w = Math.min(...d.map((x) => x.x)), h = Math.max(...d.map((x) => x.x)), X = Math.min(...d.map((x) => x.y)), M = Math.max(...d.map((x) => x.y));
      return h >= l.minX && w <= l.maxX && M >= l.minY && X <= l.maxY;
    }
    const g = at(m);
    return g.maxX >= l.minX && g.minX <= l.maxX && g.maxY >= l.minY && g.minY <= l.maxY;
  }, [s, r, k, n, l]), i = Pt(
    () => y.filter(a),
    [a, y]
  );
  return { shapeById: k, visiblePaintOrder: i };
}
function Yo({
  editorRef: t,
  editingId: n,
  setShapes: e,
  setAnnouncement: o,
  onDirty: r,
  patchSelected: s
}) {
  const c = dt(() => {
    const i = t.current;
    if (!i || !n) return;
    let m;
    try {
      m = me(i.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const g = i.scrollHeight;
    e((S) => S.map((p) => {
      if (p.id !== n) return p;
      const d = we(p) ? { ...p, text: Qt({ ...p, html: m, text: void 0 }), html: void 0 } : { ...p, html: m, text: void 0 };
      if (p.type === "text")
        return p.manualSize ? d : { ...d, ...vo(i, p) };
      if (p.type === "arrow") return d;
      const w = p.type === "note" ? 32 : p.type === "card" ? 96 : (
        // category header + type footer
        (p.type === "frame", 24)
      ), h = Math.max(p.h, g + w);
      return { ...d, h };
    })), r();
  }, [n, r]), u = (i) => {
    var m;
    (m = t.current) == null || m.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(i), c();
  }, v = () => {
    var S;
    const i = (S = window.getSelection()) == null ? void 0 : S.anchorNode, m = i instanceof Element ? i : i == null ? void 0 : i.parentElement, g = m == null ? void 0 : m.closest("ul, ol");
    return g instanceof HTMLElement ? g : null;
  }, k = (i, m, g) => {
    const S = document.createElement(m);
    for (; i.firstChild; ) S.append(i.firstChild);
    return i.replaceWith(S), S;
  }, y = (i) => {
    const m = t.current;
    if (!m) return;
    m.focus();
    const g = v();
    if (i === "number")
      if ((g == null ? void 0 : g.tagName) === "OL")
        g.removeAttribute("data-list-style");
      else if ((g == null ? void 0 : g.tagName) === "UL")
        k(g, "ol");
      else {
        document.execCommand("insertOrderedList");
        const S = v();
        S == null || S.removeAttribute("data-list-style");
      }
    else if ((g == null ? void 0 : g.tagName) === "UL") {
      const S = g.dataset.listStyle;
      i === S ? document.execCommand("insertUnorderedList") : g.dataset.listStyle = i;
    } else {
      (g == null ? void 0 : g.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const S = v();
      S && (S.dataset.listStyle = i);
    }
    c();
  };
  return { commitEditorHtml: c, applyFormat: u, applyList: y, onEditorKeyDown: (i) => {
    if (i.key === "Tab") {
      i.preventDefault(), document.execCommand(i.shiftKey ? "outdent" : "indent"), c();
      return;
    }
    if (i.key === " ") {
      const m = window.getSelection();
      if (m && m.isCollapsed && m.anchorNode) {
        const g = m.anchorNode, S = g.textContent || "", p = m.anchorOffset, d = S.slice(0, p).trim();
        if (!v()) {
          if (d === "-" || d === "–") {
            i.preventDefault(), g.textContent = S.slice(p), y("dash");
            return;
          }
          if (d === "*") {
            i.preventDefault(), g.textContent = S.slice(p), y("bullet");
            return;
          }
          if (d === "1.") {
            i.preventDefault(), g.textContent = S.slice(p), y("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (i) => {
    const m = on(i);
    if (!m) {
      s({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    s({
      fontFamily: "custom",
      customFontFamily: m
    });
  } };
}
function No({
  boardIdentity: t,
  tool: n,
  controlledShapes: e,
  onShapesChange: o,
  onDirty: r
}) {
  const s = R(null), c = R(null), [u, v] = nt([]), k = e !== void 0 && o !== void 0, y = R(/* @__PURE__ */ new WeakMap()), l = Pt(() => {
    const D = y.current;
    return (k ? e ?? [] : u).map((_) => {
      let H = D.get(_);
      return H === void 0 && (H = Qe(_), D.set(_, H)), H;
    }).filter((_) => _ !== null);
  }, [k, e, u]), a = R(o);
  a.current = o;
  const i = dt((D) => {
    const _ = a.current;
    if (!_) {
      v(D);
      return;
    }
    _(typeof D == "function" ? D : () => D);
  }, []), [m, g] = nt({ x: -400, y: -300, z: 1 }), [S, p] = nt(/* @__PURE__ */ new Set()), [d, w] = nt(null), [h, X] = nt({ kind: "none" }), [M, x] = nt(!1), [b, f] = nt([]), [$, C] = nt(""), [Y, E] = nt(!1), [P, L] = nt(null), [T, W] = nt("blue"), [K, I] = nt(ie), F = R(T);
  F.current = T;
  const A = R([]), V = R([]), Q = R(null), U = R(/* @__PURE__ */ new Map()), tt = R(l), ut = R(m), it = R(n), mt = R(S), Yt = R(d);
  tt.current = l, ut.current = m, it.current = n, mt.current = S, Yt.current = d;
  const Nt = R({ kind: "none" }), G = dt((D) => {
    Nt.current = D, X(D);
  }, []), et = dt((D) => {
    mt.current = D, p(D);
  }, []);
  Ht(() => {
    var _;
    const D = /* @__PURE__ */ new Set();
    mt.current = D, Yt.current = null, U.current.clear(), A.current = [], V.current = [], Q.current = null, G({ kind: "none" }), p(D), w(null), x(!1), f([]), L(null), C(""), (_ = s.current) == null || _.focus();
  }, [G, t]), Xt(() => {
    let D = !1;
    const _ = () => {
      const J = co();
      D || I(J);
    };
    if (_(), typeof document > "u" || !("fonts" in document)) return;
    const H = () => _();
    return document.fonts.addEventListener("loadingdone", H), () => {
      D = !0, document.fonts.removeEventListener("loadingdone", H);
    };
  }, [t]);
  const yt = (d ? l.find((D) => D.id === d) : void 0) !== void 0;
  Ht(() => {
    if (!d || !yt) return;
    const D = () => {
      const H = c.current, J = tt.current.find((z) => z.id === d);
      if (!H || !J || (H.dataset.seeded !== d && (H.innerHTML = de(J), H.dataset.seeded = d), document.activeElement === H)) return;
      H.focus();
      const Mt = document.createRange();
      Mt.selectNodeContents(H), Mt.collapse(!1);
      const zt = window.getSelection();
      zt == null || zt.removeAllRanges(), zt == null || zt.addRange(Mt);
    };
    D();
    const _ = requestAnimationFrame(D);
    return () => cancelAnimationFrame(_);
  }, [d, yt]);
  const xt = dt((D) => {
    i((_) => {
      const H = typeof D == "function" ? D(_) : D;
      return A.current.push(_), A.current.length > 100 && A.current.shift(), V.current = [], H;
    }), r();
  }, [r]), wt = dt((D) => D.size === 0 ? !1 : (xt((_) => _.filter((H) => D.has(H.id) ? !1 : H.type !== "arrow" ? !0 : !(H.fromId && D.has(H.fromId)) && !(H.toId && D.has(H.toId)))), et(/* @__PURE__ */ new Set()), C(`${D.size}개 삭제됨`), !0), [xt, et]), Z = dt(() => {
    Q.current = tt.current;
  }, []), kt = dt(() => {
    const D = Q.current;
    Q.current = null, !(!D || D === tt.current) && (A.current.push(D), A.current.length > 100 && A.current.shift(), V.current = [], r());
  }, [r]), $t = dt((D, _) => {
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
    editorRef: c,
    localShapes: u,
    setLocalShapes: v,
    controlled: k,
    shapes: l,
    setShapes: i,
    camera: m,
    setCamera: g,
    cameraRef: ut,
    selected: S,
    setSelected: p,
    selectedRef: mt,
    editingId: d,
    setEditingId: w,
    editingIdRef: Yt,
    interaction: h,
    interactionRef: Nt,
    applyInteraction: G,
    isSpaceDown: M,
    setIsSpaceDown: x,
    guides: b,
    setGuides: f,
    announcement: $,
    setAnnouncement: C,
    showInspectorPalette: Y,
    setShowInspectorPalette: E,
    eraserPos: P,
    setEraserPos: L,
    activeColor: T,
    setActiveColor: W,
    activeColorRef: F,
    installedFontFamilies: K,
    pointers: U,
    past: A,
    future: V,
    selectNow: et,
    commit: xt,
    deleteSelection: wt,
    beginHistory: Z,
    endHistory: kt,
    toPage: $t,
    viewportCentre: ct,
    expandToGroups: st,
    toolRef: it,
    shapesRef: tt
  };
}
function Io({
  containerRef: t,
  camera: n,
  setCamera: e,
  minZoom: o,
  maxZoom: r,
  shapes: s,
  selected: c,
  editingId: u,
  textualTypes: v,
  onZoomChange: k,
  onSelectionChange: y,
  onLocalCursor: l,
  toPage: a
}) {
  Xt(() => {
    k == null || k(n.z);
  }, [n.z, k]), Xt(() => {
    const w = t.current;
    if (!w) return;
    const h = (X) => {
      if (X.preventDefault(), X.ctrlKey || X.metaKey) {
        const M = w.getBoundingClientRect();
        e((x) => {
          const b = Math.min(r, Math.max(o, x.z * Math.exp(-X.deltaY * 0.01))), f = X.clientX - M.left, $ = X.clientY - M.top;
          return { x: x.x + f / x.z - f / b, y: x.y + $ / x.z - $ / b, z: b };
        });
      } else
        e((M) => ({ ...M, x: M.x + X.deltaX / M.z, y: M.y + X.deltaY / M.z }));
    };
    return w.addEventListener("wheel", h, { passive: !1 }), () => w.removeEventListener("wheel", h);
  }, [t, r, o, e]);
  const i = Pt(() => {
    const w = s.filter((h) => c.has(h.id));
    return {
      count: w.length,
      canGroup: w.length > 1,
      canUngroup: w.some((h) => !!h.groupId),
      isTextual: w.length === 1 && v.includes(w[0].type),
      selectedIds: w.map((h) => h.id)
    };
  }, [c, s, v]);
  Xt(() => {
    y == null || y(i);
  }, [y, i]);
  const m = Pt(() => {
    if (u) {
      const h = s.find((X) => X.id === u);
      return h && h.type !== "image" && h.type !== "draw" ? [h] : [];
    }
    const w = s.filter((h) => c.has(h.id));
    return w.length === 1 && w[0].type === "image" ? [] : w;
  }, [u, c, s]), g = Pt(() => m.length === 0 ? null : m.find((w) => w.type !== "image") ?? null, [m]), S = R(0);
  return { selectionInfo: i, inspectorSelection: m, inspectorShape: g, onContainerPointerMove: l ? (w) => {
    const h = performance.now();
    h - S.current < 60 || (S.current = h, l(a(w.clientX, w.clientY)));
  } : void 0, onContainerPointerLeave: l ? () => l(null) : void 0 };
}
const _t = 24;
function Po({
  containerRef: t,
  shapesRef: n,
  selectedRef: e,
  commit: o,
  deleteSelection: r,
  selectNow: s,
  setAnnouncement: c,
  createId: u
}) {
  return Pt(() => ({
    deleteSelected: () => {
      r(e.current);
    },
    duplicateSelected: () => {
      var l;
      const v = e.current;
      if (v.size === 0) return;
      const k = [], y = /* @__PURE__ */ new Map();
      for (const a of n.current) {
        if (!v.has(a.id)) continue;
        let i = a.groupId;
        i && (y.has(i) || y.set(i, u("g")), i = y.get(i)), k.push({
          ...a,
          id: u(),
          x: a.x + _t,
          y: a.y + _t,
          groupId: i,
          points: (l = a.points) == null ? void 0 : l.map(([m, g]) => [m + _t, g + _t]),
          orthogonalWaypoints: a.type === "arrow" && a.orthogonalWaypoints ? a.orthogonalWaypoints.map((m) => ({ x: m.x + _t, y: m.y + _t })) : void 0
        });
      }
      o((a) => [...a, ...k]), s(new Set(k.map((a) => a.id))), c(`${k.length}개 복제됨`);
    },
    group: () => {
      var y;
      const v = e.current;
      if (v.size < 2) return;
      const k = u("g");
      o((l) => l.map((a) => v.has(a.id) ? { ...a, groupId: k } : a)), c(`${v.size}개 그룹화됨`), (y = t.current) == null || y.focus();
    },
    ungroup: () => {
      var k;
      const v = e.current;
      v.size !== 0 && (o((y) => y.map((l) => v.has(l.id) ? { ...l, groupId: void 0 } : l)), c("그룹 해제됨"), (k = t.current) == null || k.focus());
    }
  }), [o, t, u, r, s, e, c, n]);
}
function Eo(t, n) {
  if (t.length === 0) return null;
  let e = 1 / 0, o = 1 / 0, r = -1 / 0, s = -1 / 0;
  for (const l of t) {
    const a = at(l);
    e = Math.min(e, a.minX), o = Math.min(o, a.minY), r = Math.max(r, a.maxX), s = Math.max(s, a.maxY);
  }
  const c = 40, u = r - e + c * 2, v = s - o + c * 2;
  if (!Number.isFinite(u) || !Number.isFinite(v) || u > Bt.maxExportDimension || v > Bt.maxExportDimension || u * v > Bt.maxExportPixels) return null;
  const k = (l, a, i, m, g) => {
    const S = l.fontSize ?? i, p = pt(l), d = Re(de(l));
    if (d.length === 0) return "";
    const w = Lt(l), h = l.textAlign === "right" ? "end" : l.textAlign === "center" ? "middle" : l.textAlign === "left" ? "start" : g, X = h === "end" ? w.maxX - 12 : h === "middle" ? (w.minX + w.maxX) / 2 : w.minX + 12, M = w.minY + S + 12;
    return d.map((x, b) => {
      const f = x.map(($) => `<tspan style="${[
        $.bold ? "font-weight:700" : `font-weight:${m}`,
        $.italic ? "font-style:italic" : "",
        $.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${Ft($.text)}</tspan>`).join("");
      return `<text x="${X}" y="${M + b * S * 1.4}" font-family="${Ft(p)}" font-size="${S}" fill="${a}" text-anchor="${h}">${f}</text>`;
    }).join("");
  }, y = t.map((l) => {
    const a = ot[l.color ?? "blue"], i = Lt(l), m = St(l), g = l.rotation ? ` transform="rotate(${l.rotation * 180 / Math.PI} ${m.x} ${m.y})"` : "", S = l.color ? ot[l.color].border : j.ink;
    if (l.type === "draw" && l.points) {
      const x = l.drawMode ?? "pen", b = l.strokeWidth ?? 3, f = x === "highlighter" ? ' stroke-opacity="0.35"' : "";
      return `<path d="${ae(l.points)}" fill="none" stroke="${S}" stroke-width="${b}"${f} stroke-linecap="round" stroke-linejoin="round"/>`;
    }
    if (l.type === "arrow") {
      const x = Et(l, new Map(t.map((A) => [A.id, A])), t), b = l.strokeWidth ?? 2.5, f = Math.max(10, 8 + b * 2), $ = Math.max(4, 2 + b), C = x.routing === "orthogonal" && x.pathPoints ? x.pathPoints : null, Y = C && C.length > 1, E = Y ? fe(C) : x.routing === "curved" ? `M ${x.start.x} ${x.start.y} Q ${x.control.x} ${x.control.y} ${x.end.x} ${x.end.y}` : `M ${x.start.x} ${x.start.y} L ${x.end.x} ${x.end.y}`, P = Y ? Ue(C) : x.routing === "curved" ? (() => {
        const A = Rt(0.94, x.start, x.control, x.end);
        return Math.atan2(x.end.y - A.y, x.end.x - A.x);
      })() : Math.atan2(x.end.y - x.start.y, x.end.x - x.start.x), L = Y ? qt(C[0], C[1]) : x.routing === "orthogonal" && x.start.side ? x.start.side === "e" ? 0 : x.start.side === "w" ? Math.PI : x.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : qt(x.start, x.end), T = l.strokeStyle === "dashed" ? ' stroke-dasharray="8 5"' : l.strokeStyle === "dotted" ? ' stroke-dasharray="1.5 4"' : "", W = (A, V, Q, U) => {
        if (A === "dot") return `<circle cx="${V}" cy="${Q}" r="${$}" fill="${S}"/>`;
        if (A === "none") return "";
        const tt = `${V - f * Math.cos(U - 0.4)},${Q - f * Math.sin(U - 0.4)}`, ut = `${V - f * Math.cos(U + 0.4)},${Q - f * Math.sin(U + 0.4)}`;
        return `<polygon points="${V},${Q} ${tt} ${ut}" fill="${S}"/>`;
      }, K = x.routing === "orthogonal" && x.pathPoints ? ye(x.pathPoints) : x.bend === 0 ? { x: (x.start.x + x.end.x) / 2, y: (x.start.y + x.end.y) / 2 } : Rt(0.5, x.start, x.control, x.end), I = Qt(l), F = I ? `<text x="${K.x}" y="${K.y - 6}" text-anchor="middle" font-family="${Ft(pt(l))}" font-size="${l.fontSize ?? 12}" fill="${S}">${Ft(I)}</text>` : "";
      return `<path d="${E}" fill="none" stroke="${S}" stroke-width="${b}" stroke-linecap="round" stroke-linejoin="round"${T}/>` + W(l.arrowEnd ?? "arrow", x.end.x, x.end.y, P) + W(l.arrowStart ?? "none", x.start.x, x.start.y, L + Math.PI) + F;
    }
    if (l.type === "image" && l.src) {
      const x = pe(l.src);
      return x ? `<image href="${Ft(x)}" x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}"${g}/>` : "";
    }
    if (l.type === "frame")
      return `<g${g}><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" fill="none" stroke="${j.slate400}" stroke-width="${l.strokeWidth ?? 2}" rx="4"/><text x="${i.minX}" y="${i.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${j.muted}">${Ft(l.text ?? "프레임")}</text></g>`;
    if (l.type === "note")
      return `<g${g}><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" fill="${a.bg}"/><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="6" fill="${a.border}"/>` + k(l, a.text, 14, "600", "start") + "</g>";
    if (l.type === "card") {
      const x = l.cardStyle === "glass";
      return `<g${g}><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" rx="16" fill="${x ? j.glassFill : j.slateCard}"/><text x="${i.minX + 16}" y="${i.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${j.slate400}">[ ${Ft(l.category ?? "ENTITY")} ]</text>` + k(l, j.white, 16, "700", "start") + "</g>";
    }
    const p = l.type === "rect" || l.type === "ellipse" || l.type === "triangle" || l.type === "diamond" || l.type === "hexagon" || l.type === "star" ? l.strokeWidth ?? 2 : 2, d = se(l), w = Ge(l), h = l.type === "triangle" || l.type === "diamond" || l.type === "hexagon" || l.type === "star", X = h ? qe(l.type, i.maxX - i.minX, i.maxY - i.minY).split(" ").map((x) => {
      const [b, f] = x.split(",").map(Number);
      return `${b + i.minX},${f + i.minY}`;
    }).join(" ") : "", M = l.type === "ellipse" ? `<ellipse cx="${(i.minX + i.maxX) / 2}" cy="${(i.minY + i.maxY) / 2}" rx="${(i.maxX - i.minX) / 2}" ry="${(i.maxY - i.minY) / 2}" fill="${d}" stroke="${w}" stroke-width="${p}"/>` : h ? `<polygon points="${X}" fill="${d}" stroke="${w}" stroke-width="${p}" stroke-linejoin="round"/>` : `<rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" rx="12" fill="${d}" stroke="${w}" stroke-width="${p}"/>`;
    return `<g${g}>${M}${k(l, a.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${u}" height="${v}" viewBox="${e - c} ${o - c} ${u} ${v}"><rect x="${e - c}" y="${o - c}" width="${u}" height="${v}" fill="${n ? j.canvasDark : j.canvasLight}"/>` + y + "</svg>";
}
async function Fo(t) {
  const n = t();
  if (!n) return null;
  const e = /width="([\d.]+)" height="([\d.]+)"/.exec(n), o = Math.ceil(Number((e == null ? void 0 : e[1]) ?? 1200)), r = Math.ceil(Number((e == null ? void 0 : e[2]) ?? 800)), s = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`, c = new Image();
  c.crossOrigin = "anonymous";
  try {
    await new Promise((a, i) => {
      c.onload = () => a(), c.onerror = () => i(new Error("svg rasterise failed")), c.src = s;
    });
  } catch {
    return null;
  }
  const u = 2, v = o * u, k = r * u;
  if (!Number.isSafeInteger(v) || !Number.isSafeInteger(k) || v > Bt.maxExportDimension || k > Bt.maxExportDimension || v * k > Bt.maxExportPixels) return null;
  const y = document.createElement("canvas");
  y.width = v, y.height = k;
  const l = y.getContext("2d");
  return l ? (l.scale(u, u), l.drawImage(c, 0, 0), new Promise((a) => {
    try {
      y.toBlob((i) => a(i), "image/png");
    } catch {
      a(null);
    }
  })) : null;
}
function Lo(t, n, e) {
  if (t.length < 2) return;
  const o = t.filter(
    (a) => a.type !== "draw" && a.type !== "arrow" && a.type !== "frame" && a.type !== "image"
  );
  if (o.length < 2) return;
  const r = o.map((a, i) => ({
    id: a.id,
    i,
    x: St(a).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: St(a).y,
    vx: 0,
    vy: 0
  }));
  for (let a = 0; a < r.length; a++)
    for (let i = 0; i < a; i++)
      if (Math.abs(r[a].x - r[i].x) < 1 && Math.abs(r[a].y - r[i].y) < 1) {
        const m = 2 * Math.PI * a / r.length;
        r[a].x += Math.cos(m) * 10, r[a].y += Math.sin(m) * 10;
        break;
      }
  const s = new Map(r.map((a) => [a.id, a])), c = [];
  for (const a of t) {
    if (a.type !== "arrow") continue;
    const i = a.fromId ? s.get(a.fromId) : null, m = a.toId ? s.get(a.toId) : null;
    i && m && c.push([i, m]);
  }
  const u = 220, v = u * u, k = 80;
  let y = 400;
  const l = y / k;
  for (let a = 0; a < k; a++) {
    for (let i = 0; i < r.length; i++)
      r[i].vx = 0, r[i].vy = 0;
    for (let i = 0; i < r.length; i++)
      for (let m = i + 1; m < r.length; m++) {
        const g = r[i], S = r[m], p = g.x - S.x, d = g.y - S.y, w = Math.hypot(p, d) || 0.01, h = v / w, X = p / w * h, M = d / w * h;
        g.vx += X, g.vy += M, S.vx -= X, S.vy -= M;
      }
    for (const [i, m] of c) {
      const g = i.x - m.x, S = i.y - m.y, p = Math.hypot(g, S) || 0.01, d = p * p / u, w = g / p * d, h = S / p * d;
      i.vx -= w, i.vy -= h, m.vx += w, m.vy += h;
    }
    for (const i of r) {
      const m = Math.hypot(i.vx, i.vy) || 0.01, g = Math.min(m, y);
      i.x += i.vx / m * g, i.y += i.vy / m * g;
    }
    y = Math.max(0.5, y - l);
  }
  n((a) => a.map((i) => {
    const m = s.get(i.id);
    return m ? { ...i, x: m.x - i.w / 2, y: m.y - i.h / 2 } : i;
  })), e();
}
function To(t, {
  controlled: n,
  past: e,
  future: o,
  setLocalShapes: r,
  setCamera: s,
  selectNow: c,
  setEditingId: u
}) {
  let v;
  try {
    v = Sn(t);
  } catch {
    return;
  }
  n || (e.current = [], o.current = [], r(v.shapes.map(Ao))), s(v.camera), c(/* @__PURE__ */ new Set()), u(null);
}
function Ao(t) {
  var n;
  switch (t.type) {
    case "arrow":
      return {
        ...t,
        orthogonalWaypoints: (n = t.orthogonalWaypoints) == null ? void 0 : n.map((e) => ({ x: e.x, y: e.y }))
      };
    case "draw":
      return {
        ...t,
        points: t.points.map(([e, o]) => [e, o])
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
      return Do(t);
  }
}
function Do(t) {
  throw new Yn(`Unhandled canvas shape type: ${String(t)}.`);
}
function Wo({
  ref: t,
  containerRef: n,
  shapesRef: e,
  cameraRef: o,
  past: r,
  future: s,
  controlled: c,
  isDarkMode: u,
  minZoom: v,
  maxZoom: k,
  onToolChange: y,
  setSelectedStrokeWidth: l,
  onDirty: a,
  commit: i,
  selectNow: m,
  selectionActions: g,
  viewportCentre: S,
  setShapes: p,
  setLocalShapes: d,
  setCamera: w,
  setEditingId: h,
  setAnnouncement: X,
  createId: M
}) {
  const x = dt((f) => {
    const $ = S(), C = Qe({
      id: M(),
      x: f.x ?? $.x - f.w / 2,
      y: f.y ?? $.y - f.h / 2,
      ...f
    });
    if (!C) throw new Error("Canvas could not create a valid shape.");
    return i((Y) => [...Y, C]), m(/* @__PURE__ */ new Set([C.id])), y("select"), X(`${C.type} 추가됨`), C;
  }, [i, M, y, m, X, S]), b = dt(() => Eo(e.current, u), [u, e]);
  kn(t, () => ({
    addNote: (f) => {
      const $ = x({ type: "note", w: 180, h: 180, color: f, text: "" });
      h($.id);
    },
    addCard: (f, $, C, Y) => {
      x({ type: "card", w: 260, h: 150, text: f, category: $, cardStyle: C, color: Y });
    },
    addText: () => {
      const f = x({ type: "text", w: 220, h: 44, text: "" });
      h(f.id);
    },
    addShape: (f, $, C) => {
      x({
        type: f,
        w: f === "ellipse" ? 220 : 200,
        h: f === "ellipse" ? 110 : 140,
        color: $,
        text: C ?? ""
      });
    },
    addArrow: () => {
      const f = S(), $ = { id: M(), type: "arrow", x: f.x - 140, y: f.y, w: 280, h: 0 };
      i((C) => [...C, $]), m(/* @__PURE__ */ new Set([$.id])), y("select");
    },
    addImage: (f, $, C, Y) => {
      x({ type: "image", w: C, h: Y, src: f, fileName: $ });
    },
    addFileCard: (f, $, C) => {
      x({ type: "rect", w: 260, h: 120, color: "purple", text: C, src: $, fileName: f });
    },
    updateShapeText: (f, $) => {
      i((C) => C.map((Y) => Y.id === f ? { ...Y, text: $, html: void 0 } : Y));
    },
    setSelectedStrokeWidth: l,
    setTool: y,
    undo: () => {
      const f = r.current.pop();
      f && (s.current.push(e.current), p(f), m(/* @__PURE__ */ new Set()), h(null), a(), X("실행 취소"));
    },
    redo: () => {
      const f = s.current.pop();
      f && (r.current.push(e.current), p(f), m(/* @__PURE__ */ new Set()), h(null), a(), X("다시 실행"));
    },
    deleteSelected: g.deleteSelected,
    duplicateSelected: g.duplicateSelected,
    group: g.group,
    ungroup: g.ungroup,
    zoomBy: (f) => {
      w(($) => {
        var L;
        const C = (L = n.current) == null ? void 0 : L.getBoundingClientRect(), Y = Math.min(k, Math.max(v, $.z * f));
        if (!C) return { ...$, z: Y };
        const E = $.x + C.width / 2 / $.z, P = $.y + C.height / 2 / $.z;
        return { x: E - C.width / 2 / Y, y: P - C.height / 2 / Y, z: Y };
      });
    },
    zoomTo: (f) => {
      w(($) => {
        var L;
        const C = (L = n.current) == null ? void 0 : L.getBoundingClientRect(), Y = Math.min(k, Math.max(v, f));
        if (!C) return { ...$, z: Y };
        const E = $.x + C.width / 2 / $.z, P = $.y + C.height / 2 / $.z;
        return { x: E - C.width / 2 / Y, y: P - C.height / 2 / Y, z: Y };
      });
    },
    resetZoom: () => {
      w((f) => {
        var E;
        const $ = (E = n.current) == null ? void 0 : E.getBoundingClientRect();
        if (!$) return { ...f, z: 1 };
        const C = f.x + $.width / 2 / f.z, Y = f.y + $.height / 2 / f.z;
        return { x: C - $.width / 2, y: Y - $.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var W;
      const f = e.current, $ = (W = n.current) == null ? void 0 : W.getBoundingClientRect();
      if (f.length === 0 || !$) return;
      let C = 1 / 0, Y = 1 / 0, E = -1 / 0, P = -1 / 0;
      for (const K of f) {
        const I = at(K);
        C = Math.min(C, I.minX), Y = Math.min(Y, I.minY), E = Math.max(E, I.maxX), P = Math.max(P, I.maxY);
      }
      const L = 80, T = Math.min(k, Math.max(
        v,
        Math.min($.width / (E - C + L * 2), $.height / (P - Y + L * 2))
      ));
      w({
        x: (C + E) / 2 - $.width / 2 / T,
        y: (Y + P) / 2 - $.height / 2 / T,
        z: T
      });
    },
    autoLayout: () => Lo(e.current, i, () => X("자동 배치 완료")),
    exportSvg: b,
    exportPng: () => Fo(b),
    getSnapshot: () => ({ version: "canvas-v1", shapes: e.current, camera: o.current }),
    loadSnapshot: (f) => To(f, {
      controlled: c,
      past: r,
      future: s,
      setLocalShapes: d,
      setCamera: w,
      selectNow: m,
      setEditingId: h
    })
  }), [
    x,
    b,
    i,
    M,
    u,
    k,
    v,
    a,
    y,
    g,
    m,
    w,
    h,
    d,
    l,
    p,
    X,
    S,
    c
  ]);
}
function Oo(t) {
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
function _o({
  containerRef: t,
  editorRef: n,
  shapesRef: e,
  selectedRef: o,
  editingIdRef: r,
  toolRef: s,
  past: c,
  future: u,
  textualTypes: v,
  setIsSpaceDown: k,
  setEditingId: y,
  setShapes: l,
  setAnnouncement: a,
  commit: i,
  deleteSelection: m,
  selectNow: g,
  onDirty: S,
  onToolChange: p,
  createId: d
}) {
  const w = dt((h, X) => {
    const M = o.current;
    M.size !== 0 && i((x) => x.map((b) => {
      var f;
      return M.has(b.id) ? {
        ...b,
        x: b.x + h,
        y: b.y + X,
        points: (f = b.points) == null ? void 0 : f.map(([$, C]) => [$ + h, C + X])
      } : b;
    }));
  }, [i, o]);
  Xt(() => {
    const h = (b) => {
      const f = b;
      return !!f && (f.tagName === "INPUT" || f.tagName === "TEXTAREA" || f.isContentEditable);
    }, X = (b) => b instanceof Element && !!b.closest("input, select, button, textarea, option, label, [data-canvas-control]"), M = (b) => {
      var T, W, K, I;
      const f = t.current, $ = document.activeElement, C = b.target instanceof Node && !!(f != null && f.contains(b.target)), Y = !!f && ($ === f || f.contains($));
      if (!C && !Y || X(b.target)) return;
      if (b.code === "Space" && !h(b.target)) {
        k(!0), b.preventDefault();
        return;
      }
      if (h(b.target)) {
        if (b.key === "Escape")
          b.preventDefault(), y(null), (T = n.current) == null || T.blur(), (W = t.current) == null || W.focus();
        else if ((b.key === "Delete" || b.key === "Backspace") && !r.current) {
          const F = o.current;
          m(F) && b.preventDefault();
        }
        return;
      }
      const E = b.metaKey || b.ctrlKey, P = o.current;
      if (E && b.key.toLowerCase() === "z") {
        if (b.preventDefault(), b.shiftKey) {
          const F = u.current.pop();
          F && (c.current.push(e.current), l(F), S());
        } else {
          const F = c.current.pop();
          F && (u.current.push(e.current), l(F), S());
        }
        g(/* @__PURE__ */ new Set());
        return;
      }
      if (E && b.key.toLowerCase() === "g") {
        if (b.preventDefault(), b.shiftKey)
          P.size > 0 && (i((F) => F.map((A) => P.has(A.id) ? { ...A, groupId: void 0 } : A)), a("그룹 해제됨"));
        else if (P.size > 1) {
          const F = d("g");
          i((A) => A.map((V) => P.has(V.id) ? { ...V, groupId: F } : V)), a(`${P.size}개 그룹화됨`);
        }
        return;
      }
      if (E && b.key.toLowerCase() === "a") {
        b.preventDefault(), g(new Set(e.current.map((F) => F.id))), a(`전체 ${e.current.length}개 선택됨`);
        return;
      }
      if (b.key === "Delete" || b.key === "Backspace") {
        m(P) && b.preventDefault();
        return;
      }
      if (b.key.startsWith("Arrow")) {
        b.preventDefault();
        const F = b.shiftKey ? 10 : 1;
        b.key === "ArrowLeft" && w(-F, 0), b.key === "ArrowRight" && w(F, 0), b.key === "ArrowUp" && w(0, -F), b.key === "ArrowDown" && w(0, F);
        return;
      }
      if (b.key === "Tab" && e.current.length > 0) {
        b.preventDefault();
        const F = e.current, A = F.findIndex((U) => P.has(U.id)), V = b.shiftKey ? A <= 0 ? F.length - 1 : A - 1 : A === -1 || A === F.length - 1 ? 0 : A + 1, Q = F[V];
        g(/* @__PURE__ */ new Set([Q.id])), a(`${Q.type} 선택됨: ${Qt(Q) || "내용 없음"}`);
        return;
      }
      if (b.key === "Enter" && P.size === 1) {
        const F = e.current.find((A) => P.has(A.id));
        F && v.includes(F.type) && (b.preventDefault(), y(F.id));
        return;
      }
      if (b.key === "Escape") {
        if (r.current) {
          b.preventDefault(), y(null), (K = n.current) == null || K.blur(), (I = t.current) == null || I.focus(), p("select");
          return;
        }
        g(/* @__PURE__ */ new Set()), p("select");
        return;
      }
      const L = Oo(b);
      L && (b.preventDefault(), s.current = L, p(L));
    }, x = (b) => {
      const f = t.current;
      !f || !(document.activeElement === f || f.contains(document.activeElement)) || b.code === "Space" && k(!1);
    };
    return window.addEventListener("keydown", M), window.addEventListener("keyup", x), () => {
      window.removeEventListener("keydown", M), window.removeEventListener("keyup", x);
    };
  }, [
    i,
    t,
    d,
    m,
    r,
    n,
    u,
    w,
    S,
    p,
    c,
    g,
    o,
    a,
    y,
    k,
    l,
    e,
    v,
    s
  ]);
}
const Ho = 400;
function Bo({
  containerRef: t,
  editorRef: n,
  pointers: e,
  interactionRef: o,
  cameraRef: r,
  shapesRef: s,
  editingIdRef: c,
  toolRef: u,
  activeColorRef: v,
  drawStrokeWidth: k,
  camera: y,
  shapes: l,
  selected: a,
  isSpaceDown: i,
  textualTypes: m,
  setShapes: g,
  setEditingId: S,
  applyInteraction: p,
  selectNow: d,
  beginHistory: w,
  commit: h,
  onToolChange: X,
  expandToGroups: M,
  toPage: x,
  createId: b
}) {
  const f = b, $ = R(null), C = (I, F) => {
    var U;
    const A = ((U = t.current) == null ? void 0 : U.dataset.canvasActiveTool) === "text" ? "text" : u.current;
    if (A !== "note" && A !== "text") return;
    const V = x(I, F), Q = A === "note" ? { id: f(), type: "note", x: V.x - 90, y: V.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: f(), type: "text", x: V.x, y: V.y - 22, w: 220, h: 44, text: "" };
    h((tt) => [...tt, Q]), d(/* @__PURE__ */ new Set([Q.id])), S(Q.id), X("select");
  };
  return Xt(() => {
    const I = (F) => {
      var A;
      (A = t.current) != null && A.contains(F.target) && (F.target instanceof Element && F.target.closest('[role="textbox"], [data-canvas-inspector]') || C(F.clientX, F.clientY));
    };
    return window.addEventListener("click", I, !0), () => window.removeEventListener("click", I, !0);
  }), { onPointerDown: (I) => {
    var mt, Yt, Nt;
    const F = u.current, A = I.target instanceof Element ? I.target : null, V = !!(A != null && A.closest("[data-canvas-editor]")) && c.current !== null;
    e.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), !V && I.cancelable && I.preventDefault();
    const Q = I.currentTarget;
    try {
      Q.setPointerCapture(I.pointerId);
    } catch {
    }
    if (e.current.size === 2) {
      const [G, et] = [...e.current.values()], rt = r.current, yt = o.current;
      p({
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
    if (e.current.size > 2) return;
    if (I.button === 1 || i || F === "hand" || I.button === 0 && F === "select" && I.altKey) {
      p({ kind: "pan", startX: I.clientX, startY: I.clientY, camX: y.x, camY: y.y });
      return;
    }
    if (I.button !== 0) return;
    const U = x(I.clientX, I.clientY);
    if (V || (S(null), (mt = n.current) == null || mt.blur(), (Yt = t.current) == null || Yt.focus()), F === "draw" || F === "highlighter") {
      const G = {
        id: f(),
        type: "draw",
        x: U.x,
        y: U.y,
        w: 0,
        h: 0,
        points: [[U.x, U.y]],
        color: v.current,
        strokeWidth: k,
        drawMode: F === "highlighter" ? "highlighter" : "pen"
      };
      w(), g((et) => [...et, G]), p({ kind: "drawing", id: G.id });
      return;
    }
    if (F === "arrow" || F === "frame" || Nn.includes(F)) {
      const G = F, et = F === "arrow" ? { id: f(), type: "arrow", x: U.x, y: U.y, w: 0, h: 0, color: v.current } : F === "frame" ? { id: f(), type: "frame", x: U.x, y: U.y, w: 0, h: 0, text: "프레임" } : { id: f(), type: G, x: U.x, y: U.y, w: 0, h: 0, color: v.current, text: "" };
      w(), g((rt) => [...rt, et]), p({ kind: "creating", id: et.id, startX: U.x, startY: U.y });
      return;
    }
    if (F === "note" || F === "text") return;
    if (F === "eraser") {
      w(), g((G) => tn(G, U.x, U.y, 14 / y.z, y.z)), p({ kind: "erasing" });
      return;
    }
    const tt = new Map(l.map((G) => [G.id, G])), ut = c.current ? l.find((G) => G.id === c.current) : void 0, it = V && ut ? ut : [...l].reverse().find((G) => le(G, U.x, U.y, y.z, tt, l));
    if (!it)
      $.current = null;
    else {
      const G = Date.now(), et = !I.shiftKey && m.includes(it.type) && ((Nt = $.current) == null ? void 0 : Nt.id) === it.id && G - $.current.time < Ho, rt = et ? it.id : void 0;
      $.current = et ? null : { id: it.id, time: G };
      const yt = I.shiftKey ? new Set(a).add(it.id) : a.has(it.id) ? a : /* @__PURE__ */ new Set([it.id]), xt = M(yt);
      d(xt);
      const wt = /* @__PURE__ */ new Map();
      for (const Z of l) xt.has(Z.id) && wt.set(Z.id, Z);
      for (const Z of l) {
        if (Z.type !== "frame" || !xt.has(Z.id)) continue;
        const kt = at(Z);
        for (const $t of l) {
          if ($t.id === Z.id || wt.has($t.id)) continue;
          const ct = St($t);
          ct.x >= kt.minX && ct.x <= kt.maxX && ct.y >= kt.minY && ct.y <= kt.maxY && wt.set($t.id, $t);
        }
      }
      w(), p({ kind: "move", startX: U.x, startY: U.y, origin: wt, editOnReleaseId: rt });
      return;
    }
    I.shiftKey || d(/* @__PURE__ */ new Set()), p({
      kind: "marquee",
      startX: U.x,
      startY: U.y,
      curX: U.x,
      curY: U.y,
      screenStartX: I.clientX,
      screenStartY: I.clientY
    });
  }, onResizeHandleDown: (I, F, A) => {
    I.stopPropagation(), e.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), w(), p({ kind: "resize", id: F.id, handle: A, start: F });
  }, onRotateHandleDown: (I, F) => {
    I.stopPropagation(), e.current.set(I.pointerId, { x: I.clientX, y: I.clientY });
    const A = x(I.clientX, I.clientY), V = St(F);
    w(), p({
      kind: "rotate",
      id: F.id,
      startAngle: Math.atan2(A.y - V.y, A.x - V.x),
      startRotation: F.rotation ?? 0
    });
  }, onConnectHandleDown: (I, F) => {
    I.stopPropagation(), e.current.set(I.pointerId, { x: I.clientX, y: I.clientY });
    const A = x(I.clientX, I.clientY);
    p({ kind: "connect", fromId: F.id, toX: A.x, toY: A.y, hoverId: null });
  }, onBendHandleDown: (I, F) => {
    I.stopPropagation(), e.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), w(), p({ kind: "bend", id: F.id });
  }, onOrthogonalSegmentHandleDown: (I, F, A) => {
    I.stopPropagation(), e.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), w(), p({ kind: "orthogonal-segment", id: F.id, segmentIndex: A });
  }, onArrowEndpointDown: (I, F, A) => {
    I.stopPropagation(), e.current.set(I.pointerId, { x: I.clientX, y: I.clientY }), w(), p({ kind: "arrow-endpoint", id: F.id, endpoint: A, hoverId: null });
  } };
}
const jo = 0.1, Ko = 4, Uo = 14, Vo = 4, Te = ["note", "card", "rect", "ellipse", "text", "image"];
function Go({
  pointers: t,
  interactionRef: n,
  cameraRef: e,
  toPage: o,
  shapesRef: r,
  setShapes: s,
  setEditingId: c,
  setEraserPos: u,
  setGuides: v,
  setAnnouncement: k,
  applyInteraction: y,
  selectNow: l,
  endHistory: a,
  commit: i,
  onToolChange: m,
  createId: g,
  pendingDrawPointsRef: S,
  drawRafRef: p
}) {
  const d = g;
  Xt(() => {
    const w = (X) => {
      p.current !== null && (cancelAnimationFrame(p.current), p.current = null);
      const M = S.current.splice(0);
      s((x) => x.map((b) => {
        if (b.id !== X || !b.points) return b;
        const f = [...b.points];
        let $ = f[f.length - 1];
        for (const L of M)
          (!$ || Math.hypot(L[0] - $[0], L[1] - $[1]) >= 1 / e.current.z) && (f.push(L), $ = L);
        const C = f.map((L) => L[0]), Y = f.map((L) => L[1]), E = Math.min(...C), P = Math.min(...Y);
        return { ...b, points: f, x: E, y: P, w: Math.max(...C) - E, h: Math.max(...Y) - P };
      })), a();
    }, h = (X) => {
      var x, b;
      t.current.delete(X.pointerId);
      try {
        (b = (x = X.target) == null ? void 0 : x.releasePointerCapture) == null || b.call(x, X.pointerId);
      } catch {
      }
      const M = n.current;
      if (M.kind !== "none") {
        if (M.kind === "pinch") {
          t.current.size < 2 && (M.interruptedDrawingId && w(M.interruptedDrawingId), y({ kind: "none" }));
          return;
        }
        if (v([]), M.kind === "erasing") {
          u(null), a(), y({ kind: "none" });
          return;
        }
        if (M.kind === "connect") {
          const $ = r.current.find((T) => T.id === M.fromId);
          if (y({ kind: "none" }), !$) return;
          const C = { x: M.toX, y: M.toY }, Y = St($);
          if (!M.hoverId && Math.hypot(C.x - Y.x, C.y - Y.y) < 30) return;
          const E = [];
          let P = M.hoverId;
          if (!P) {
            const T = $.type === "note" ? 180 : 200, W = $.type === "note" ? 180 : 120, K = {
              ...$,
              id: d(),
              x: C.x - T / 2,
              y: C.y - W / 2,
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
            E.push(K), P = K.id;
          }
          const L = {
            id: d(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: $.id,
            toId: P,
            text: ""
          };
          E.push(L), i((T) => [...T, ...E]), l(/* @__PURE__ */ new Set([L.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => c(L.id)) : c(L.id), k("연결 생성됨");
          return;
        }
        if (M.kind === "bend") {
          a(), y({ kind: "none" });
          return;
        }
        if (M.kind === "drawing") {
          p.current !== null && (cancelAnimationFrame(p.current), p.current = null);
          const f = o(X.clientX, X.clientY);
          S.current.push([f.x, f.y]);
          const $ = S.current.splice(0);
          s((C) => C.map((Y) => {
            if (Y.id !== M.id || !Y.points) return Y;
            const E = [...Y.points];
            let P = E[E.length - 1];
            for (const I of $)
              (!P || Math.hypot(I[0] - P[0], I[1] - P[1]) >= 1 / e.current.z) && (E.push(I), P = I);
            const L = E.map((I) => I[0]), T = E.map((I) => I[1]), W = Math.min(...L), K = Math.min(...T);
            return { ...Y, points: E, x: W, y: K, w: Math.max(...L) - W, h: Math.max(...T) - K };
          })), a(), y({ kind: "none" });
          return;
        }
        if (M.kind === "creating") {
          s((f) => f.map(($) => {
            if ($.id !== M.id) return $;
            const C = Math.abs($.w) < 4 && Math.abs($.h) < 4 ? {
              ...$,
              w: $.type === "arrow" ? 200 : $.type === "frame" ? 480 : 180,
              h: $.type === "arrow" ? 0 : $.type === "frame" ? 320 : 120
            } : $;
            if (C.type === "arrow") return C;
            const Y = Lt(C);
            return { ...C, x: Y.minX, y: Y.minY, w: Y.maxX - Y.minX, h: Y.maxY - Y.minY };
          })), a(), l(/* @__PURE__ */ new Set([M.id])), m("select"), y({ kind: "none" });
          return;
        }
        if ((M.kind === "move" || M.kind === "resize" || M.kind === "rotate" || M.kind === "orthogonal-segment" || M.kind === "arrow-endpoint") && a(), M.kind === "move" && M.editOnReleaseId && X.type === "pointerup") {
          const f = o(X.clientX, X.clientY);
          Math.hypot(f.x - M.startX, f.y - M.startY) * e.current.z <= Vo && c(M.editOnReleaseId);
        }
        y({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h), () => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h);
    };
  }, [
    y,
    e,
    i,
    g,
    p,
    a,
    n,
    m,
    S,
    t,
    l,
    k,
    c,
    u,
    v,
    s,
    r,
    o
  ]);
}
function qo({
  containerRef: t,
  pointers: n,
  interactionRef: e,
  cameraRef: o,
  shapesRef: r,
  setCamera: s,
  setShapes: c,
  setEraserPos: u,
  setGuides: v,
  applyInteraction: k,
  selectNow: y,
  expandToGroups: l,
  toPage: a,
  pendingDrawPointsRef: i,
  drawRafRef: m
}) {
  Xt(() => () => {
    m.current !== null && cancelAnimationFrame(m.current);
  }, [m]), Xt(() => {
    const g = (p, d, w = !0) => {
      const h = a(p.clientX, p.clientY);
      if (p.shiftKey) {
        m.current !== null && (cancelAnimationFrame(m.current), m.current = null), i.current = [], c((M) => M.map((x) => {
          if (x.id !== d || !x.points) return x;
          const b = x.points[0];
          return b ? { ...x, points: [b, [h.x, h.y]] } : x;
        }));
        return;
      }
      const X = w && typeof p.getCoalescedEvents == "function" ? p.getCoalescedEvents() : [];
      if (X.length > 0)
        for (const M of X) {
          const x = a(M.clientX, M.clientY);
          i.current.push([x.x, x.y]);
        }
      i.current.push([h.x, h.y]), m.current === null && (m.current = requestAnimationFrame(() => {
        m.current = null;
        const M = i.current;
        if (M.length === 0) return;
        i.current = [];
        const x = o.current.z;
        c((b) => b.map((f) => {
          if (f.id !== d || !f.points) return f;
          let $ = f.points[f.points.length - 1][0], C = f.points[f.points.length - 1][1];
          const Y = [...f.points];
          for (const [E, P] of M)
            Math.hypot(E - $, P - C) < 1 / x || (Y.push([E, P]), $ = E, C = P);
          return Y.length === f.points.length ? f : { ...f, points: Y };
        }));
      }));
    }, S = (p) => {
      var X, M;
      n.current.has(p.pointerId) && n.current.set(p.pointerId, { x: p.clientX, y: p.clientY });
      const d = e.current;
      if (d.kind === "none") return;
      const w = o.current;
      if (d.kind === "pinch") {
        if (n.current.size < 2) return;
        const [x, b] = [...n.current.values()], f = Math.hypot(b.x - x.x, b.y - x.y) || 1, $ = (x.x + b.x) / 2, C = (x.y + b.y) / 2, Y = (X = t.current) == null ? void 0 : X.getBoundingClientRect();
        if (!Y) return;
        const E = Math.min(Ko, Math.max(jo, d.startZoom * (f / d.startDist))), P = d.camX + (d.startMidX - Y.left) / d.startZoom, L = d.camY + (d.startMidY - Y.top) / d.startZoom;
        s({ x: P - ($ - Y.left) / E, y: L - (C - Y.top) / E, z: E });
        return;
      }
      if (d.kind === "pan") {
        s({
          x: d.camX - (p.clientX - d.startX) / w.z,
          y: d.camY - (p.clientY - d.startY) / w.z,
          z: w.z
        });
        return;
      }
      const h = a(p.clientX, p.clientY);
      if (d.kind === "erasing") {
        c((x) => tn(x, h.x, h.y, Uo / w.z, w.z)), u({ x: h.x, y: h.y });
        return;
      }
      if (d.kind === "connect") {
        const x = r.current, b = new Map(x.map(($) => [$.id, $])), f = [...x].reverse().find(($) => $.id !== d.fromId && Te.includes($.type) && le($, h.x, h.y, w.z, b, x));
        k({ ...d, toX: h.x, toY: h.y, hoverId: (f == null ? void 0 : f.id) ?? null });
        return;
      }
      if (d.kind === "bend") {
        const x = r.current, b = x.find((T) => T.id === d.id);
        if (!b) return;
        const f = Et(b, new Map(x.map((T) => [T.id, T])), x), $ = f.end.x - f.start.x, C = f.end.y - f.start.y, Y = Math.hypot($, C) || 1, E = (f.start.x + f.end.x) / 2, P = (f.start.y + f.end.y) / 2, L = (h.x - E) * (-C / Y) + (h.y - P) * ($ / Y);
        c((T) => T.map((W) => W.id === d.id ? { ...W, bend: L } : W));
        return;
      }
      if (d.kind === "orthogonal-segment") {
        const x = r.current, b = x.find((L) => L.id === d.id);
        if (!b) return;
        const f = Et(b, new Map(x.map((L) => [L.id, L])), x), $ = f.routing === "orthogonal" ? f.pathPoints : void 0;
        if (!$ || $.length < 2) return;
        const C = $[d.segmentIndex], Y = $[d.segmentIndex + 1];
        if (!C || !Y) return;
        const E = C.x === Y.x ? h.x : h.y, P = Rn($, d.segmentIndex, E);
        c((L) => L.map((T) => T.id === d.id ? { ...T, routing: "orthogonal", orthogonalVariant: void 0, orthogonalWaypoints: P.slice(1, -1).map((W) => ({ x: W.x, y: W.y })) } : T));
        return;
      }
      if (d.kind === "arrow-endpoint") {
        const x = r.current, b = x.find((P) => P.id === d.id);
        if (!b) return;
        const f = new Map(x.map((P) => [P.id, P])), $ = Et(b, f, x), C = d.endpoint === "start" ? $.end : $.start, Y = [...x].reverse().find((P) => P.id !== b.id && Te.includes(P.type) && le(P, h.x, h.y, w.z, f, x)), E = Y ? Wt(Y, C.x, C.y) : { x: h.x, y: h.y };
        k({ ...d, hoverId: (Y == null ? void 0 : Y.id) ?? null }), c((P) => P.map((L) => {
          if (L.id !== b.id) return L;
          const T = d.endpoint === "start" ? E : C, W = d.endpoint === "end" ? E : C;
          return {
            ...L,
            x: T.x,
            y: T.y,
            w: W.x - T.x,
            h: W.y - T.y,
            fromId: d.endpoint === "start" ? Y == null ? void 0 : Y.id : L.fromId,
            toId: d.endpoint === "end" ? Y == null ? void 0 : Y.id : L.toId
          };
        }));
        return;
      }
      if (d.kind === "marquee") {
        k({ ...d, curX: h.x, curY: h.y });
        const x = Math.min(d.startX, h.x), b = Math.max(d.startX, h.x), f = Math.min(d.startY, h.y), $ = Math.max(d.startY, h.y), C = Math.min(d.screenStartX, p.clientX), Y = Math.max(d.screenStartX, p.clientX), E = Math.min(d.screenStartY, p.clientY), P = Math.max(d.screenStartY, p.clientY), L = /* @__PURE__ */ new Map();
        (M = t.current) == null || M.querySelectorAll("[data-canvas-shape-id]").forEach((W) => {
          const K = W.dataset.canvasShapeId;
          K && L.set(K, W.getBoundingClientRect());
        });
        const T = r.current.filter((W) => {
          const K = L.get(W.id);
          if (K)
            return K.right >= C && K.left <= Y && K.bottom >= E && K.top <= P;
          const I = at(W);
          return I.maxX >= x && I.minX <= b && I.maxY >= f && I.minY <= $;
        }).map((W) => W.id);
        y(l(new Set(T)));
        return;
      }
      if (d.kind === "move") {
        let x = h.x - d.startX, b = h.y - d.startY;
        const f = d.origin, $ = (() => {
          let E = 1 / 0, P = 1 / 0, L = -1 / 0, T = -1 / 0;
          return f.forEach((W) => {
            const K = at({ ...W, x: W.x + x, y: W.y + b });
            E = Math.min(E, K.minX), P = Math.min(P, K.minY), L = Math.max(L, K.maxX), T = Math.max(T, K.maxY);
          }), { minX: E, minY: P, maxX: L, maxY: T };
        })(), C = r.current.filter((E) => !f.has(E.id)), Y = Zn($, C, w.z);
        x += Y.dx, b += Y.dy, v(Y.guides), c((E) => E.map((P) => {
          var T;
          const L = f.get(P.id);
          return L ? {
            ...P,
            x: L.x + x,
            y: L.y + b,
            points: (T = L.points) == null ? void 0 : T.map(([W, K]) => [W + x, K + b]),
            ...L.type === "arrow" && L.orthogonalWaypoints ? { orthogonalWaypoints: L.orthogonalWaypoints.map((W) => ({ x: W.x + x, y: W.y + b })) } : {}
          } : P;
        }));
        return;
      }
      if (d.kind === "drawing") {
        g(p, d.id);
        return;
      }
      if (d.kind === "creating") {
        c((x) => x.map((b) => b.id === d.id ? { ...b, w: h.x - d.startX, h: h.y - d.startY } : b));
        return;
      }
      if (d.kind === "rotate") {
        const x = r.current.find((C) => C.id === d.id);
        if (!x) return;
        const b = St(x), f = Math.atan2(h.y - b.y, h.x - b.x);
        let $ = d.startRotation + (f - d.startAngle);
        p.shiftKey && ($ = Math.round($ / (Math.PI / 12)) * (Math.PI / 12)), c((C) => C.map((Y) => Y.id === d.id ? { ...Y, rotation: $ } : Y));
        return;
      }
      if (d.kind === "resize") {
        const { start: x, handle: b } = d, f = Ze(x, h.x, h.y);
        c(($) => $.map((C) => {
          if (C.id !== x.id) return C;
          let { x: Y, y: E, w: P, h: L } = x;
          if (b.includes("e") && (P = Math.max(20, f.x - x.x)), b.includes("s") && (L = Math.max(20, f.y - x.y)), b.includes("w")) {
            const T = x.x + x.w;
            Y = Math.min(f.x, T - 20), P = T - Y;
          }
          if (b.includes("n")) {
            const T = x.y + x.h;
            E = Math.min(f.y, T - 20), L = T - E;
          }
          return { ...C, x: Y, y: E, w: P, h: L, manualSize: C.type === "text" ? !0 : C.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", S), () => {
      window.removeEventListener("pointermove", S);
    };
  }, [
    k,
    o,
    t,
    m,
    l,
    e,
    i,
    n,
    y,
    s,
    u,
    v,
    c,
    r,
    a
  ]);
}
function Ro(t) {
  const n = R([]), e = R(null), o = { ...t, pendingDrawPointsRef: n, drawRafRef: e };
  qo(o), Go(o);
}
function Qo({
  containerRef: t,
  editorRef: n,
  pointers: e,
  interactionRef: o,
  cameraRef: r,
  shapesRef: s,
  editingIdRef: c,
  toolRef: u,
  activeColorRef: v,
  drawStrokeWidth: k,
  camera: y,
  shapes: l,
  selected: a,
  isSpaceDown: i,
  textualTypes: m,
  setCamera: g,
  setShapes: S,
  setEditingId: p,
  setEraserPos: d,
  setGuides: w,
  setAnnouncement: h,
  applyInteraction: X,
  selectNow: M,
  beginHistory: x,
  endHistory: b,
  commit: f,
  onToolChange: $,
  expandToGroups: C,
  toPage: Y,
  createId: E
}) {
  const P = Bo({
    containerRef: t,
    editorRef: n,
    pointers: e,
    interactionRef: o,
    cameraRef: r,
    shapesRef: s,
    editingIdRef: c,
    toolRef: u,
    activeColorRef: v,
    drawStrokeWidth: k,
    camera: y,
    shapes: l,
    selected: a,
    isSpaceDown: i,
    textualTypes: m,
    setShapes: S,
    setEditingId: p,
    applyInteraction: X,
    selectNow: M,
    beginHistory: x,
    commit: f,
    onToolChange: $,
    expandToGroups: C,
    toPage: Y,
    createId: E
  });
  return Ro({
    containerRef: t,
    pointers: e,
    interactionRef: o,
    cameraRef: r,
    shapesRef: s,
    setCamera: g,
    setShapes: S,
    setEditingId: p,
    setEraserPos: d,
    setGuides: w,
    setAnnouncement: h,
    applyInteraction: X,
    selectNow: M,
    endHistory: b,
    commit: f,
    onToolChange: $,
    expandToGroups: C,
    toPage: Y,
    createId: E
  }), P;
}
function Zo(t) {
  Wo(t);
  const n = Pt(() => ({
    get current() {
      return t.toolRef.current === "highlighter" ? "draw" : t.toolRef.current;
    },
    set current(e) {
      t.toolRef.current = e;
    }
  }), [t.toolRef]);
  return _o({ ...t, toolRef: n }), Qo(t);
}
function Jo({
  isDarkMode: t,
  tool: n,
  isSpaceDown: e,
  interaction: o,
  zoom: r
}) {
  const s = e || o.kind === "pan" ? "grabbing" : n === "hand" ? "grab" : n === "draw" ? "crosshair" : n === "eraser" ? "cell" : n === "select" ? "default" : "crosshair", c = t ? j.gridDark : j.gridLight, u = 40 * r;
  return { cursor: s, gridColor: c, gridSize: u, strokeColorOf: (k) => k.strokeColor ? Ve(k) : k.color ? ot[k.color].border : t ? "var(--canvas-slate-200)" : j.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = Un, document.head.appendChild(t);
}
const Ae = 0.1, De = 4, We = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function cn(t) {
  throw new Error(`Unhandled canvas shape: ${String(t)}.`);
}
function Oe(t, n, e) {
  return t.map((o) => {
    if (!n.has(o.id)) return o;
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
        return { ...o, strokeWidth: e };
      case "note":
      case "card":
      case "text":
      case "image":
        return o;
      default:
        return cn(o);
    }
  });
}
function tr(t, n, e) {
  return t.map((o) => n.has(o.id) && o.type === "draw" ? { ...o, ...e } : o);
}
function _e(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const cr = $n(function({
  boardIdentity: n = "standalone",
  isDarkMode: e,
  tool: o,
  drawStrokeWidth: r = 4,
  onToolChange: s,
  onDirty: c,
  onZoomChange: u,
  onSelectionChange: v,
  shapes: k,
  onShapesChange: y,
  peerCursors: l,
  onLocalCursor: a,
  renderDiagram: i
}, m) {
  var ze, Ce;
  const {
    containerRef: g,
    editorRef: S,
    setLocalShapes: p,
    controlled: d,
    shapes: w,
    setShapes: h,
    camera: X,
    setCamera: M,
    cameraRef: x,
    selected: b,
    selectedRef: f,
    editingId: $,
    setEditingId: C,
    editingIdRef: Y,
    interaction: E,
    interactionRef: P,
    applyInteraction: L,
    isSpaceDown: T,
    setIsSpaceDown: W,
    guides: K,
    setGuides: I,
    announcement: F,
    setAnnouncement: A,
    showInspectorPalette: V,
    setShowInspectorPalette: Q,
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
    toPage: Z,
    viewportCentre: kt,
    expandToGroups: $t,
    toolRef: ct,
    shapesRef: st
  } = No({ boardIdentity: n, tool: o, controlledShapes: k, onShapesChange: y, onDirty: c }), D = Po({
    containerRef: g,
    shapesRef: st,
    selectedRef: f,
    commit: rt,
    deleteSelection: yt,
    selectNow: et,
    setAnnouncement: A,
    createId: _e
  }), {
    inspectorSelection: _,
    inspectorShape: H,
    onContainerPointerMove: J,
    onContainerPointerLeave: Mt
  } = Io({
    containerRef: g,
    camera: X,
    setCamera: M,
    minZoom: Ae,
    maxZoom: De,
    shapes: w,
    selected: b,
    editingId: $,
    textualTypes: We,
    onZoomChange: u,
    onSelectionChange: v,
    onLocalCursor: a,
    toPage: Z
  }), zt = Gt.useCallback((lt) => {
    const Zt = new Set(f.current);
    Zt.size !== 0 && rt((Jt) => Oe(Jt, Zt, lt));
  }, [rt, f]), {
    onPointerDown: z,
    onResizeHandleDown: O,
    onRotateHandleDown: q,
    onConnectHandleDown: ht,
    onBendHandleDown: Ct,
    onOrthogonalSegmentHandleDown: jt,
    onArrowEndpointDown: sn
  } = Zo({
    ref: m,
    containerRef: g,
    editorRef: S,
    pointers: Yt,
    interactionRef: P,
    cameraRef: x,
    shapesRef: st,
    toolRef: ct,
    activeColorRef: it,
    drawStrokeWidth: r,
    setSelectedStrokeWidth: zt,
    camera: X,
    shapes: w,
    selected: b,
    isSpaceDown: T,
    setCamera: M,
    setShapes: h,
    setEditingId: C,
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
    onDirty: c,
    onToolChange: s,
    controlled: d,
    isDarkMode: e,
    minZoom: Ae,
    maxZoom: De,
    textualTypes: We,
    selectedRef: f,
    editingIdRef: Y,
    setIsSpaceDown: W,
    viewportCentre: kt,
    setLocalShapes: p,
    expandToGroups: $t,
    toPage: Z,
    createId: _e
  }), { cursor: ln, gridColor: dn, gridSize: be, strokeColorOf: un } = Jo({
    isDarkMode: e,
    tool: o === "highlighter" ? "draw" : o,
    isSpaceDown: T,
    interaction: E,
    zoom: X.z
  }), ke = (lt) => {
    const Zt = f.current, Jt = Y.current, Kt = new Set(Zt);
    if (Jt && Kt.add(Jt), Kt.size === 0) return;
    const Xe = "strokeWidth" in lt, wn = Object.keys(lt).every((ft) => ft === "color" || ft === "fillColor" || ft === "strokeColor" || ft === "strokeWidth");
    if (_.length > 0 && _.every((ft) => ft.type === "draw") && wn) {
      const ft = "color" in lt ? lt.color : void 0, gt = "strokeWidth" in lt ? lt.strokeWidth : void 0, Se = "strokeColor" in lt ? lt.strokeColor : void 0;
      rt((bn) => tr(bn, Kt, {
        ...ft !== void 0 ? { color: ft } : {},
        ...gt !== void 0 ? { strokeWidth: gt } : {},
        ...Se !== void 0 ? { strokeColor: Se } : {}
      }));
      return;
    }
    if (Xe) {
      const ft = lt.strokeWidth;
      if (ft !== void 0 && Object.keys(lt).length === 1) {
        rt((gt) => Oe(gt, Kt, ft));
        return;
      }
    }
    rt((ft) => ft.map((gt) => {
      if (!Kt.has(gt.id)) return gt;
      if (!Xe) return { ...gt, ...lt };
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
  } = Yo({
    editorRef: S,
    editingId: $,
    setShapes: h,
    setAnnouncement: A,
    onDirty: c,
    patchSelected: ke
  }), { renderEditor: mn, renderShapeBody: gn } = Xo({
    camera: X,
    editingId: $,
    isDarkMode: e,
    editorRef: S,
    commitEditorHtml: xn,
    onEditorKeyDown: vn,
    setShapes: h,
    onDirty: c,
    renderDiagram: i
  }), yn = E.kind === "marquee" ? E : null, { shapeById: $e, visiblePaintOrder: Me } = So({
    containerRef: g,
    shapesRef: st,
    shapes: w,
    camera: X,
    selected: b,
    editingId: $,
    boardIdentity: n
  });
  return /* @__PURE__ */ B(
    "div",
    {
      ref: g,
      onPointerDown: z,
      onPointerMove: J,
      onPointerLeave: Mt,
      role: "application",
      "data-canvas-board-id": n,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": X.x,
      "data-canvas-camera-y": X.y,
      "data-canvas-camera-z": X.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: ln,
        background: e ? j.canvasDark : j.canvasLight,
        backgroundImage: `radial-gradient(${dn} 1px, transparent 1px)`,
        backgroundSize: `${be}px ${be}px`,
        backgroundPosition: `${-X.x * X.z}px ${-X.y * X.z}px`
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
            children: F
          }
        ),
        /* @__PURE__ */ N(
          no,
          {
            visiblePaintOrder: Me,
            selected: b,
            shapeById: $e,
            allShapes: st.current,
            camera: X,
            interaction: E,
            eraserPos: U,
            guides: K,
            marquee: yn,
            strokeColorOf: un
          }
        ),
        /* @__PURE__ */ N(
          go,
          {
            visiblePaintOrder: Me,
            selected: b,
            editingId: $,
            camera: X,
            shapeById: $e,
            allShapes: st.current,
            peerCursors: l,
            isDarkMode: e,
            renderEditor: mn,
            renderShapeBody: gn,
            setEditingId: C,
            onBendHandleDown: Ct,
            onOrthogonalSegmentHandleDown: jt,
            onResizeHandleDown: O,
            onRotateHandleDown: q,
            onConnectHandleDown: ht,
            onArrowEndpointDown: sn
          }
        ),
        H && /* @__PURE__ */ N(
          Co,
          {
            shape: H,
            selection: _,
            selectionActions: D,
            shapes: w,
            camera: X,
            canvasSize: { width: ((ze = g.current) == null ? void 0 : ze.clientWidth) ?? 380, height: ((Ce = g.current) == null ? void 0 : Ce.clientHeight) ?? 190 },
            isDarkMode: e,
            editing: !!$,
            showPalette: V,
            installedFontFamilies: mt,
            setShowPalette: Q,
            setActiveColor: ut,
            patchSelected: ke,
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
  cr as InfiniteCanvas,
  Nn as SHAPE_TOOLS,
  tr as applySelectedDrawStyle,
  Oe as applySelectedStrokeWidth,
  ir as diagramTemplate,
  yo as getInspectorGroups,
  we as isDiagramShape
};
