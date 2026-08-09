import { jsx as N, jsxs as K, Fragment as mt } from "react/jsx-runtime";
import Ke, { useRef as G, useState as et, useLayoutEffect as Ut, useEffect as xt, useMemo as yt, useCallback as J, useImperativeHandle as We, forwardRef as Ve } from "react";
import { p as Re, i as te, k as me, a as rt, v as Ue, c as dt, s as Ge, b as qe, d as wt, h as Qe, S as Ze } from "./document-CDmyw9YU.js";
import { Palette as Je, Minus as tn, Plus as en, ChevronDown as nn, AlignLeft as on, AlignCenter as rn, AlignRight as an, List as cn, ListOrdered as sn, Bold as ln, Italic as dn, Underline as un } from "lucide-react";
const xn = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover{background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover{background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', O = Object.freeze({
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
}), pe = 12;
function Gt(t) {
  return t.map((n, e) => `${e === 0 ? "M" : "L"} ${n.x} ${n.y}`).join(" ");
}
function Nt(t, n, e) {
  return !(Math.min(t.x, e.x) > n.x || n.x > Math.max(t.x, e.x) || Math.min(t.y, e.y) > n.y || n.y > Math.max(t.y, e.y));
}
function It(t, n, e) {
  return (n.y - t.y) * (e.x - n.x) - (n.x - t.x) * (e.y - n.y);
}
function Et(t, n, e, o) {
  const x = It(t, n, e), l = It(t, n, o), f = It(e, o, t), g = It(e, o, n);
  return Math.abs(x) < 1e-6 && Nt(t, e, n) || Math.abs(l) < 1e-6 && Nt(t, o, n) || Math.abs(f) < 1e-6 && Nt(e, t, o) || Math.abs(g) < 1e-6 && Nt(e, n, o) ? !0 : x > 0 != l > 0 && f > 0 != g > 0;
}
function fn(t, n, e) {
  const o = Math.min(t.x, n.x), i = Math.max(t.x, n.x), x = Math.min(t.y, n.y), l = Math.max(t.y, n.y);
  if (i < e.minX || o > e.maxX || l < e.minY || x > e.maxY) return !1;
  if (t.x >= e.minX && t.x <= e.maxX && t.y >= e.minY && t.y <= e.maxY || n.x >= e.minX && n.x <= e.maxX && n.y >= e.minY && n.y <= e.maxY) return !0;
  const f = { x: e.minX, y: e.minY }, g = { x: e.maxX, y: e.minY }, y = { x: e.maxX, y: e.maxY }, d = { x: e.minX, y: e.maxY };
  return Et(t, n, f, g) || Et(t, n, g, y) || Et(t, n, y, d) || Et(t, n, d, f);
}
function hn(t, n) {
  for (let e = 1; e < t.length; e++)
    for (const o of n)
      if (fn(t[e - 1], t[e], o)) return !0;
  return !1;
}
function qt(t) {
  let n = 0;
  for (let e = 1; e < t.length; e++) n += Math.hypot(t[e].x - t[e - 1].x, t[e].y - t[e - 1].y);
  return n;
}
function ye(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const n = qt(t);
  if (n === 0) return t[0];
  const e = n / 2;
  let o = 0;
  for (let x = 1; x < t.length; x++) {
    const l = Math.hypot(t[x].x - t[x - 1].x, t[x].y - t[x - 1].y);
    if (o + l >= e) {
      const f = (e - o) / l;
      return { x: t[x - 1].x + (t[x].x - t[x - 1].x) * f, y: t[x - 1].y + (t[x].y - t[x - 1].y) * f };
    }
    o += l;
  }
  const i = t[t.length - 1];
  return { x: i.x, y: i.y };
}
function Qt(t, n) {
  return Math.atan2(n.y - t.y, n.x - t.x);
}
function de(t, n, e, o) {
  const i = /* @__PURE__ */ new Set([t, n]), x = Math.min(t, n), l = Math.max(t, n), f = pe * 1.2;
  for (const g of e) {
    const y = (o === "x" ? g.minX : g.minY) - f, d = (o === "x" ? g.maxX : g.maxY) + f, r = (u) => u >= x - f * 4 && u <= l + f * 4;
    r(y) && i.add(y), r(d) && i.add(d);
  }
  return [...i].sort((g, y) => Math.abs(g - t) - Math.abs(y - t));
}
function ge(t) {
  const n = [];
  for (const e of t) {
    const o = n[n.length - 1];
    (!o || o.x !== e.x || o.y !== e.y) && n.push(e);
  }
  return n;
}
function Rt(t, n) {
  const e = [], o = [];
  for (const x of t) {
    const l = ge(x);
    l.length < 2 || (hn(l, n) ? o.push(l) : e.push(l));
  }
  const i = e.length > 0 ? e : o;
  return i.length === 0 ? [] : i.reduce((x, l) => qt(l) < qt(x) ? l : x);
}
function ue(t) {
  for (let n = 1; n < t.length; n++) {
    if (t[n - 1].x !== t[n].x) return "x";
    if (t[n - 1].y !== t[n].y) return "y";
  }
}
function Mt(t, n, e, o) {
  const i = Math.min(t, n), x = Math.max(t, n), l = Math.max(48, Math.abs(n - t) * 0.35, pe * 4);
  if (o === "x") {
    if (e === "e") return x + l;
    if (e === "w") return i - l;
  } else {
    if (e === "s") return x + l;
    if (e === "n") return i - l;
  }
  return t <= n ? i - l : x + l;
}
function vn(t, n, e, o, i) {
  const x = (t.x + n.x) / 2, l = (t.y + n.y) / 2;
  if (e === "u") {
    if (o) {
      const g = Mt(t.x, n.x, t.side, "x");
      return [t, { x: g, y: t.y }, { x: g, y: n.y }, n];
    }
    const f = Mt(t.y, n.y, t.side, "y");
    return [t, { x: t.x, y: f }, { x: n.x, y: f }, n];
  }
  if (e === "zigzag") {
    if (o) {
      const y = Mt(t.x, n.x, t.side, "x"), d = Mt(t.y, n.y, t.side, "y");
      return i ? [t, { x: y, y: t.y }, { x: y, y: d }, { x, y: d }, { x, y: n.y }, n] : [t, { x: y, y: t.y }, { x: y, y: d }, { x: n.x, y: d }, n];
    }
    const f = Mt(t.y, n.y, t.side, "y"), g = Mt(t.x, n.x, t.side, "x");
    return i ? [t, { x: t.x, y: f }, { x: g, y: f }, { x: g, y: n.y }, n] : [t, { x: t.x, y: f }, { x: g, y: f }, { x: g, y: l }, { x: n.x, y: l }, n];
  }
  return [];
}
function be(t, n, e = [], o = "elbow") {
  const i = t.side ?? (Math.abs(n.x - t.x) >= Math.abs(n.y - t.y) ? "e" : "s"), x = n.side ?? (i === "e" || i === "w" ? "w" : "n"), l = i === "e" || i === "w", f = x === "e" || x === "w", g = de(t.x, n.x, e, "x"), y = de(t.y, n.y, e, "y"), d = [];
  if (l && f) {
    for (const c of g) d.push([t, { x: c, y: t.y }, { x: c, y: n.y }, n]);
    for (const c of y) d.push([t, { x: t.x, y: c }, { x: n.x, y: c }, n]);
  } else if (!l && !f) {
    for (const c of y) d.push([t, { x: t.x, y: c }, { x: n.x, y: c }, n]);
    for (const c of g) d.push([t, { x: c, y: t.y }, { x: c, y: n.y }, n]);
  } else if (l) {
    d.push([t, { x: n.x, y: t.y }, n]);
    for (const c of y)
      d.push([t, { x: t.x, y: c }, { x: n.x, y: c }, n]), d.push([t, { x: t.x, y: c }, n]);
    for (const c of g) d.push([t, { x: c, y: t.y }, { x: c, y: n.y }, n]);
  } else {
    d.push([t, { x: t.x, y: n.y }, n]);
    for (const c of y)
      d.push([t, { x: t.x, y: c }, n]), d.push([t, { x: t.x, y: c }, { x: n.x, y: c }, n]);
    for (const c of g) d.push([t, { x: c, y: t.y }, { x: c, y: n.y }, n]);
  }
  const r = Rt(d, e);
  if (o === "elbow") return r;
  if (o === "reverse") {
    const c = ue(r), s = Rt(d.filter((h) => ue(h) !== c), e);
    return s.length > 1 ? s : r;
  }
  const u = vn(t, n, o, l, f), a = Rt([u], e);
  return a.length > 1 ? a : r;
}
function mn(t) {
  return t.length < 2 ? 0 : Qt(t[t.length - 2], t[t.length - 1]);
}
function Zt(t) {
  if (t.fillColor)
    try {
      return me(t.fillColor);
    } catch {
    }
  return t.color ? rt[t.color].bg : rt.blue.bg;
}
function pn(t) {
  return t.color ? rt[t.color].border : "#2563eb";
}
function gt(t) {
  if (t.textColor)
    try {
      return me(t.textColor);
    } catch {
    }
  return t.color ? rt[t.color].text : "#0f172a";
}
function yn(t, n, e) {
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
      const o = n / 2, i = e / 2, x = Math.min(n, e) / 2, l = x * 0.4, f = [];
      for (let g = 0; g < 10; g++) {
        const y = Math.PI / 5 * g - Math.PI / 2, d = g % 2 === 0 ? x : l;
        f.push(`${o + d * Math.cos(y)},${i + d * Math.sin(y)}`);
      }
      return f.join(" ");
    }
    default:
      return "";
  }
}
function we(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let n = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [i, x] = t[o], [l, f] = t[o + 1];
    n += ` Q ${i} ${x} ${(i + l) / 2} ${(x + f) / 2}`;
  }
  const e = t[t.length - 1];
  return `${n} L ${e[0]} ${e[1]}`;
}
function vt(t) {
  return t.replace(/[&<>\"]/g, (n) => n === "&" ? "&amp;" : n === "<" ? "&lt;" : n === ">" ? "&gt;" : "&quot;");
}
function $e(t) {
  const n = document.createElement("template");
  n.innerHTML = t;
  const e = [[]], o = (i, x) => {
    i.childNodes.forEach((l) => {
      if (l.nodeType === Node.TEXT_NODE) {
        const d = l.textContent ?? "";
        d && e[e.length - 1].push({ text: d, ...x });
        return;
      }
      if (l.nodeType !== Node.ELEMENT_NODE) return;
      const f = l;
      if (f.tagName === "BR") {
        e.push([]);
        return;
      }
      const g = { bold: x.bold || f.tagName === "B" || f.tagName === "STRONG", italic: x.italic || f.tagName === "I" || f.tagName === "EM", underline: x.underline || f.tagName === "U" }, y = f.tagName === "DIV" || f.tagName === "P" || f.tagName === "LI";
      y && e[e.length - 1].length > 0 && e.push([]), o(f, g), y && e.push([]);
    });
  };
  return o(n.content, { bold: !1, italic: !1, underline: !1 }), e.filter((i) => i.length > 0);
}
function Tt(t) {
  return t.html ? te(t.html) : t.text ? vt(t.text).replace(/\n/g, "<br>") : "";
}
function Jt(t) {
  if (t)
    try {
      return Ue(t);
    } catch {
      return;
    }
}
function ee(t) {
  try {
    return Re(t);
  } catch {
    return null;
  }
}
function Dt(t) {
  return t.html ? $e(t.html).map((n) => n.map((e) => e.text).join("")).join(`
`) : t.text ?? "";
}
const Lt = 12;
function pt(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function st(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function q(t) {
  const n = t.rotation ?? 0, e = pt(t);
  if (!n) return e;
  const o = st(t), i = Math.cos(n), x = Math.sin(n), l = [
    [e.minX, e.minY],
    [e.maxX, e.minY],
    [e.maxX, e.maxY],
    [e.minX, e.maxY]
  ].map(([y, d]) => {
    const r = y - o.x, u = d - o.y;
    return [o.x + r * i - u * x, o.y + r * x + u * i];
  }), f = l.map((y) => y[0]), g = l.map((y) => y[1]);
  return { minX: Math.min(...f), minY: Math.min(...g), maxX: Math.max(...f), maxY: Math.max(...g) };
}
function ze(t, n, e) {
  const o = t.rotation ?? 0;
  if (!o) return { x: n, y: e };
  const i = st(t), x = Math.cos(-o), l = Math.sin(-o), f = n - i.x, g = e - i.y;
  return { x: i.x + f * x - g * l, y: i.y + f * l + g * x };
}
function Pt(t, n, e, o, i, x) {
  const l = i - e, f = x - o, g = l * l + f * f, y = g === 0 ? 0 : Math.max(0, Math.min(1, ((t - e) * l + (n - o) * f) / g));
  return Math.hypot(t - (e + y * l), n - (o + y * f));
}
function At(t, n, e, o, i, x) {
  const l = 8 / o;
  if (t.type === "arrow") {
    const y = $t(t, i ?? /* @__PURE__ */ new Map(), x);
    if (y.routing === "orthogonal" && y.pathPoints && y.pathPoints.length > 1) {
      for (let r = 1; r < y.pathPoints.length; r++) {
        const u = y.pathPoints[r - 1], a = y.pathPoints[r];
        if (Pt(n, e, u.x, u.y, a.x, a.y) <= l) return !0;
      }
      return !1;
    }
    if (y.bend === 0) return Pt(n, e, y.start.x, y.start.y, y.end.x, y.end.y) <= l;
    let d = y.start;
    for (let r = 1; r <= 16; r++) {
      const u = Yt(r / 16, y.start, y.control, y.end);
      if (Pt(n, e, d.x, d.y, u.x, u.y) <= l) return !0;
      d = u;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    for (let y = 1; y < t.points.length; y++) {
      const [d, r] = t.points[y - 1], [u, a] = t.points[y];
      if (Pt(n, e, d, r, u, a) <= l) return !0;
    }
    return !1;
  }
  const f = ze(t, n, e), g = pt(t);
  if (t.type === "frame") {
    const y = f.x >= g.minX - l && f.x <= g.maxX + l && f.y >= g.minY - l && f.y <= g.maxY + l && (f.x <= g.minX + l || f.x >= g.maxX - l || f.y <= g.minY + l || f.y >= g.maxY - l), d = f.x >= g.minX - l && f.x <= g.maxX + l && f.y >= g.minY - 28 / o && f.y <= g.minY;
    return y || d;
  }
  return f.x >= g.minX - l && f.x <= g.maxX + l && f.y >= g.minY - l && f.y <= g.maxY + l;
}
function bt(t, n, e) {
  const o = pt(t), i = (o.minX + o.maxX) / 2, x = (o.minY + o.maxY) / 2, l = n - i, f = e - x;
  if (l === 0 && f === 0) return { x: i, y: x, side: "e" };
  const g = (o.maxX - o.minX) / 2, y = (o.maxY - o.minY) / 2, d = g === 0 ? 1 / 0 : Math.abs(g / l), r = y === 0 ? 1 / 0 : Math.abs(y / f);
  return d <= r ? { x: i + l * d, y: x + f * d, side: l >= 0 ? "e" : "w" } : { x: i + l * r, y: x + f * r, side: f >= 0 ? "s" : "n" };
}
function ke(t, n, e, o) {
  const i = /* @__PURE__ */ new Set([n.id, e, o]);
  return t.filter((x) => !i.has(x.id)).map((x) => {
    const l = q(x);
    return { minX: l.minX - Lt, minY: l.minY - Lt, maxX: l.maxX + Lt, maxY: l.maxY + Lt };
  }).filter((x) => x.maxX > x.minX && x.maxY > x.minY);
}
function $t(t, n, e = []) {
  const o = t.fromId ? n.get(t.fromId) : void 0, i = t.toId ? n.get(t.toId) : void 0;
  let x = { x: t.x, y: t.y }, l = { x: t.x + t.w, y: t.y + t.h };
  if (o && i) {
    const c = st(o), s = st(i);
    x = bt(o, s.x, s.y), l = bt(i, c.x, c.y);
  } else o ? x = bt(o, l.x, l.y) : i && (l = bt(i, x.x, x.y));
  const f = (x.x + l.x) / 2, g = (x.y + l.y) / 2, y = t.bend ?? 0;
  let d = { x: f, y: g };
  if (y !== 0) {
    const c = l.x - x.x, s = l.y - x.y, h = Math.hypot(c, s) || 1;
    d = { x: f + -s / h * y, y: g + c / h * y };
  }
  const r = !!(o || i), u = t.routing ?? (r ? "orthogonal" : y !== 0 ? "curved" : "straight");
  if (u !== "orthogonal") return { start: x, end: l, control: d, bend: y, routing: u };
  const a = ke(e, t, o == null ? void 0 : o.id, i == null ? void 0 : i.id);
  return { start: x, end: l, control: d, bend: y, routing: u, pathPoints: ge(be(x, l, a, t.orthogonalVariant)) };
}
function Yt(t, n, e, o) {
  const i = 1 - t;
  return { x: i * i * n.x + 2 * i * t * e.x + t * t * o.x, y: i * i * n.y + 2 * i * t * e.y + t * t * o.y };
}
function Me(t, n, e, o, i) {
  const x = [];
  let l = 0;
  for (const f of t) {
    if (f.type !== "draw" || !f.points) {
      if (At(f, n, e, i)) continue;
      x.push(f);
      continue;
    }
    const g = [];
    let y = [];
    for (const [r, u] of f.points)
      Math.hypot(r - n, u - e) <= o / i ? (y.length > 1 && g.push(y), y = []) : y.push([r, u]);
    if (y.length > 1 && g.push(y), g.length === 0) continue;
    const d = pt(f);
    g.forEach((r) => x.push({ ...f, id: `${f.id}-e${l++}`, points: r, x: d.minX, y: d.minY, w: d.maxX - d.minX, h: d.maxY - d.minY }));
  }
  return x;
}
function gn(t, n, e) {
  const o = 6 / e;
  let i = null, x = null;
  const l = [], f = [t.minX, (t.minX + t.maxX) / 2, t.maxX], g = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const y of n) {
    const d = q(y), r = [d.minX, (d.minX + d.maxX) / 2, d.maxX], u = [d.minY, (d.minY + d.maxY) / 2, d.maxY];
    for (const a of f) for (const c of r) {
      const s = c - a;
      Math.abs(s) <= o && (!i || Math.abs(s) < Math.abs(i.delta)) && (i = { delta: s, at: c });
    }
    for (const a of g) for (const c of u) {
      const s = c - a;
      Math.abs(s) <= o && (!x || Math.abs(s) < Math.abs(x.delta)) && (x = { delta: s, at: c });
    }
  }
  return i && l.push({ x1: i.at, y1: t.minY - 1e3, x2: i.at, y2: t.maxY + 1e3 }), x && l.push({ x1: t.minX - 1e3, y1: x.at, x2: t.maxX + 1e3, y2: x.at }), { dx: (i == null ? void 0 : i.delta) ?? 0, dy: (x == null ? void 0 : x.delta) ?? 0, guides: l };
}
const bn = 14;
function wn({
  visiblePaintOrder: t,
  selected: n,
  shapeById: e,
  allShapes: o,
  camera: i,
  interaction: x,
  eraserPos: l,
  guides: f,
  marquee: g,
  strokeColorOf: y
}) {
  return /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ K("g", { transform: `scale(${i.z}) translate(${-i.x}, ${-i.y})`, children: [
    t.map((d) => {
      if (d.type === "draw" && d.points)
        return /* @__PURE__ */ N(
          "path",
          {
            "data-canvas-vector-shape-id": d.id,
            "data-canvas-vector-shape-type": "draw",
            d: we(d.points),
            fill: "none",
            stroke: n.has(d.id) ? O.blue : y(d),
            strokeWidth: 3 / i.z,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          d.id
        );
      if (d.type !== "arrow") return null;
      const r = n.has(d.id) ? O.blue : y(d), u = $t(d, e, o), a = 14 / i.z, c = 5 / i.z, s = u.routing === "orthogonal" && u.pathPoints ? u.pathPoints : null, h = s && s.length > 1;
      let z, w;
      if (h)
        z = Gt(s), w = mn(s);
      else if (u.routing === "curved") {
        z = `M ${u.start.x} ${u.start.y} Q ${u.control.x} ${u.control.y} ${u.end.x} ${u.end.y}`;
        const M = Yt(0.94, u.start, u.control, u.end);
        w = Math.atan2(u.end.y - M.y, u.end.x - M.x);
      } else
        z = `M ${u.start.x} ${u.start.y} L ${u.end.x} ${u.end.y}`, w = Math.atan2(u.end.y - u.start.y, u.end.x - u.start.x);
      const b = h && s.length >= 2 ? Qt(s[0], s[1]) : u.routing === "orthogonal" && u.start.side ? u.start.side === "e" ? 0 : u.start.side === "w" ? Math.PI : u.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Qt(u.start, u.end), m = d.strokeStyle === "dashed" ? `${8 / i.z} ${5 / i.z}` : d.strokeStyle === "dotted" ? `${1.5 / i.z} ${4 / i.z}` : void 0, v = (M, S, $, p) => M === "dot" ? /* @__PURE__ */ N("circle", { cx: S, cy: $, r: c, fill: r }) : M === "none" ? null : /* @__PURE__ */ N(
        "polygon",
        {
          points: `${S},${$} ${S - a * Math.cos(p - 0.4)},${$ - a * Math.sin(p - 0.4)} ${S - a * Math.cos(p + 0.4)},${$ - a * Math.sin(p + 0.4)}`,
          fill: r
        }
      );
      return /* @__PURE__ */ K("g", { "data-canvas-vector-shape-id": d.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": u.routing, children: [
        /* @__PURE__ */ N("path", { d: z, fill: "none", stroke: r, strokeWidth: 2.5 / i.z, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: m }),
        v(d.arrowEnd ?? "arrow", u.end.x, u.end.y, w),
        v(d.arrowStart ?? "none", u.start.x, u.start.y, b + Math.PI)
      ] }, d.id);
    }),
    x.kind === "connect" && x.fromId !== void 0 && x.toX !== void 0 && x.toY !== void 0 && (() => {
      const d = e.get(x.fromId);
      if (!d) return null;
      const r = bt(d, x.toX, x.toY), u = x.hoverId ? e.get(x.hoverId) : null, a = u ? bt(u, r.x, r.y) : { x: x.toX, y: x.toY }, c = u ? be(r, a, ke(o, { id: "__preview" }, d.id, u.id)) : [r, a];
      return /* @__PURE__ */ K("g", { children: [
        /* @__PURE__ */ N("path", { d: Gt(c), stroke: O.blue, strokeWidth: 2 / i.z, strokeDasharray: `${5 / i.z} ${4 / i.z}` }),
        u ? /* @__PURE__ */ N("rect", { x: q(u).minX - 3 / i.z, y: q(u).minY - 3 / i.z, width: q(u).maxX - q(u).minX + 6 / i.z, height: q(u).maxY - q(u).minY + 6 / i.z, fill: "none", stroke: O.blue, strokeWidth: 2 / i.z, rx: 6 / i.z }) : /* @__PURE__ */ N("circle", { cx: a.x, cy: a.y, r: 5 / i.z, fill: O.blue })
      ] });
    })(),
    l && /* @__PURE__ */ N("circle", { cx: l.x, cy: l.y, r: bn / i.z, fill: O.roseSoft, stroke: O.rose, strokeWidth: 1 / i.z }),
    f.map((d, r) => /* @__PURE__ */ N("line", { x1: d.x1, y1: d.y1, x2: d.x2, y2: d.y2, stroke: O.pink, strokeWidth: 1 / i.z, strokeDasharray: `${4 / i.z} ${4 / i.z}` }, `guide-${r}`)),
    g && /* @__PURE__ */ N("rect", { x: Math.min(g.startX, g.curX), y: Math.min(g.startY, g.curY), width: Math.abs(g.curX - g.startX), height: Math.abs(g.curY - g.startY), fill: O.marqueeFill, stroke: O.blue, strokeWidth: 1 / i.z })
  ] }) });
}
const $n = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], zn = /* @__PURE__ */ new Set([
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
]), kn = [
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
function Ot(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function Xe(t) {
  return zn.has(t.trim().toLowerCase());
}
function Ye(t) {
  const n = Ot(t);
  return n ? Xe(n) ? n : `"${n.replace(/"/g, '\\"')}"` : "";
}
function Mn(t) {
  return Ot(t).split(",").map((n) => n.trim()).filter(Boolean).map(Ye).filter(Boolean).join(", ");
}
function Se(t) {
  return Ot(t).split(",").map((n) => n.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Xt(t) {
  return t.split(",").map((n) => Ot(n).replace(/^["']|["']$/g, "")).filter(Boolean).filter((n) => !Xe(n));
}
const Ft = Array.from(/* @__PURE__ */ new Set([
  ...kn,
  ...Xt(dt.sans.stack),
  ...Xt(dt.serif.stack),
  ...Xt(dt.mono.stack),
  ...Xt(dt.gothic.stack),
  ...Xt(dt.korean.stack)
]));
function Xn() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Ft;
  const t = Ft.filter((n) => {
    const e = Ye(n);
    return e ? document.fonts.check(`12px ${e}`) : !1;
  });
  return t.length > 0 ? t : Ft;
}
const Yn = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, Sn = 24, Cn = 28, Ce = 720;
function nt(t) {
  return t.fontSize ?? Yn[t.type] ?? 14;
}
function ot(t) {
  var n;
  if (!t.fontFamily) return dt.sans.stack;
  if (t.fontFamily === "custom") {
    let e = "";
    try {
      e = Se(Ge(t.customFontFamily ?? ""));
    } catch {
    }
    return Mn(e) || dt.sans.stack;
  }
  return ((n = dt[t.fontFamily]) == null ? void 0 : n.stack) ?? dt.sans.stack;
}
function at(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function Nn(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function In(t) {
  var n, e, o;
  if ((n = t.html) != null && n.includes('<ul data-list-style="dash">')) return "dash";
  if ((e = t.html) != null && e.includes("<ul>")) return "bullet";
  if ((o = t.html) != null && o.includes("<ol>")) return "number";
}
function En(t, n) {
  return {
    w: Math.min(Ce, Math.max(Sn, Math.ceil(t))),
    h: Math.max(Cn, Math.ceil(n))
  };
}
function Ln(t, n) {
  const e = t.cloneNode(!0);
  e.removeAttribute("id"), e.removeAttribute("role"), e.removeAttribute("aria-label"), e.removeAttribute("aria-multiline"), e.removeAttribute("contenteditable"), e.removeAttribute("data-seeded"), e.innerHTML = te(t.innerHTML), (e.textContent || "").length === 0 && (e.innerHTML = "&nbsp;"), Object.assign(e.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${Ce}px`,
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
    fontSize: `${nt(n)}px`,
    fontFamily: ot(n)
  }), document.body.appendChild(e);
  const o = e.getBoundingClientRect();
  return e.remove(), En(o.width, o.height);
}
const Pn = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), Fn = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function An({
  visiblePaintOrder: t,
  selected: n,
  editingId: e,
  camera: o,
  shapeById: i,
  allShapes: x,
  peerCursors: l,
  isDarkMode: f,
  renderEditor: g,
  renderShapeBody: y,
  setEditingId: d,
  onBendHandleDown: r,
  onResizeHandleDown: u,
  onRotateHandleDown: a,
  onConnectHandleDown: c,
  onArrowEndpointDown: s
}) {
  return /* @__PURE__ */ K(mt, { children: [
    /* @__PURE__ */ N("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((h) => {
      if (h.type === "draw") return null;
      if (h.type === "arrow") {
        const b = $t(h, i, x), m = b.routing === "orthogonal" && b.pathPoints ? ye(b.pathPoints) : b.routing === "curved" ? Yt(0.5, b.start, b.control, b.end) : { x: (b.start.x + b.end.x) / 2, y: (b.start.y + b.end.y) / 2 }, v = e === h.id, M = Tt(h), S = n.has(h.id), $ = Dt(h).trim(), p = M || (S ? "관계 입력" : "");
        return !p && !v ? null : /* @__PURE__ */ K(Ke.Fragment, { children: [
          /* @__PURE__ */ K("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: m.x - 90, top: m.y - 18, width: 180, height: 36 }, onDoubleClick: (k) => {
            k.stopPropagation(), d(h.id);
          }, children: [
            (p || v) && /* @__PURE__ */ N(
              "div",
              {
                "data-canvas-arrow-label": "true",
                "aria-label": $ ? `관계 설명: ${$}` : "관계 설명 입력",
                title: v ? void 0 : $ ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 입력",
                className: `px-3 py-1 rounded-full border-2 shadow-sm ${f ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
                style: {
                  fontSize: nt(h),
                  fontFamily: ot(h),
                  maxWidth: "100%",
                  minWidth: v ? 120 / o.z : void 0,
                  minHeight: v ? 28 / o.z : void 0,
                  color: h.textColor
                },
                children: v ? g("text-center whitespace-nowrap") : /* @__PURE__ */ N("span", { dangerouslySetInnerHTML: { __html: p } }, "canvas-view")
              }
            ),
            S && n.size === 1 && /* @__PURE__ */ N("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (k) => r(k, h), title: "드래그해서 곡선으로 (Curve)", className: "absolute z-20 rounded-full bg-white border-2 border-blue-600", style: { width: 10 / o.z, height: 10 / o.z, left: `calc(50% - ${5 / o.z}px)`, top: -10 / o.z, cursor: "grab" } })
          ] }),
          S && n.size === 1 && ["start", "end"].map((k) => {
            const Y = k === "start" ? b.start : b.end;
            return /* @__PURE__ */ N(
              "div",
              {
                "data-canvas-arrow-endpoint": k,
                onPointerDown: (I) => s(I, h, k),
                title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)",
                className: "absolute z-20 bg-white border-2 border-blue-600 rounded-full",
                style: { width: 12 / o.z, height: 12 / o.z, left: Y.x - 6 / o.z, top: Y.y - 6 / o.z, cursor: "grab" }
              },
              k
            );
          })
        ] }, h.id);
      }
      const z = n.has(h.id), w = pt(h);
      return /* @__PURE__ */ K(
        "div",
        {
          "data-canvas-shape-id": h.id,
          "data-canvas-shape-type": h.type,
          "data-canvas-selected": z ? "true" : void 0,
          "data-canvas-text-align": at(h),
          "data-canvas-text-color": h.textColor,
          "data-canvas-font-size": nt(h),
          "data-canvas-font-family": h.fontFamily === "custom" ? h.customFontFamily ?? "custom" : h.fontFamily ?? "sans",
          "data-canvas-manual-size": h.manualSize ? "true" : void 0,
          "data-canvas-group-id": h.groupId,
          "data-canvas-list-kind": In(h),
          "data-canvas-x": h.x,
          "data-canvas-y": h.y,
          "data-canvas-width": h.w,
          "data-canvas-height": h.h,
          className: "absolute",
          style: { left: w.minX, top: w.minY, width: w.maxX - w.minX, height: w.maxY - w.minY, transform: h.rotation ? `rotate(${h.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (b) => {
            b.stopPropagation(), Pn.has(h.type) && d(h.id);
          },
          children: [
            y(h),
            z && /* @__PURE__ */ K(mt, { children: [
              /* @__PURE__ */ N("div", { className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${O.blue}` } }),
              n.size === 1 && /* @__PURE__ */ K(mt, { children: [
                ["nw", "ne", "sw", "se"].map((b) => /* @__PURE__ */ N("div", { "data-canvas-resize-handle": b, onPointerDown: (m) => u(m, h, b), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${b}-resize`, left: b.includes("w") ? -5 / o.z : void 0, right: b.includes("e") ? -5 / o.z : void 0, top: b.includes("n") ? -5 / o.z : void 0, bottom: b.includes("s") ? -5 / o.z : void 0 } }, b)),
                /* @__PURE__ */ N("div", { onPointerDown: (b) => a(b, h), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                Fn.has(h.type) && ["n", "s", "w", "e"].map((b) => /* @__PURE__ */ N("div", { onPointerDown: (m) => c(m, h), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...b === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : b === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : b === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${b}`))
              ] })
            ] })
          ]
        },
        h.id
      );
    }) }),
    x.filter((h) => h.type === "arrow" && n.has(h.id)).map((h) => {
      const z = q(h);
      return /* @__PURE__ */ N("div", { className: "absolute pointer-events-none border-2 border-blue-600/60 rounded", style: { left: (z.minX - o.x) * o.z - 4, top: (z.minY - o.y) * o.z - 4, width: (z.maxX - z.minX) * o.z + 8, height: (z.maxY - z.minY) * o.z + 8 } }, `sel-${h.id}`);
    }),
    l == null ? void 0 : l.map((h) => /* @__PURE__ */ K("div", { className: "absolute pointer-events-none z-40", style: { left: (h.x - o.x) * o.z, top: (h.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ N("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ N("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: h.color, stroke: O.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ N("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: h.color }, children: h.name })
    ] }, h.id))
  ] });
}
function Tn({
  shape: t,
  shapes: n,
  camera: e,
  canvasSize: o,
  isDarkMode: i,
  editing: x,
  showPalette: l,
  installedFontFamilies: f,
  setShowPalette: g,
  setActiveColor: y,
  patchSelected: d,
  applyFormat: r,
  applyList: u,
  applyCustomFontFamily: a
}) {
  var U;
  const c = i ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", s = t.type === "draw", h = s ? t.color ? rt[t.color].border : O.ink : gt(t), z = G(null), [w, b] = et({ width: 380, height: 260 });
  Ut(() => {
    const X = z.current;
    if (!X) return;
    const F = () => {
      const Q = Math.max(1, Math.ceil(X.getBoundingClientRect().width)), ct = Math.max(1, Math.ceil(X.getBoundingClientRect().height));
      b((Z) => Z.width === Q && Z.height === ct ? Z : { width: Q, height: ct });
    };
    if (F(), typeof ResizeObserver > "u") return;
    const H = new ResizeObserver(F);
    return H.observe(X), () => H.disconnect();
  }, [x, f.length, i, t, l]);
  const m = w.width, v = w.height, M = q(t), S = (M.minX - e.x) * e.z, $ = (M.minY - e.y) * e.z, p = (M.maxX - e.x) * e.z, k = (M.maxY - e.y) * e.z, Y = Math.max(8, o.width - m - 8), I = Math.max(8, o.height - v - 8), E = (X, F) => ({ left: Math.min(Math.max(8, X), Y), top: Math.min(Math.max(8, F), I) }), P = [
    E((S + p) / 2 - m / 2, $ - v - 12),
    E((S + p) / 2 - m / 2, k + 12),
    E((o.width - m) / 2, 12),
    E(S - m - 12, $ + (k - $ - v) / 2),
    E(p + 12, $ + (k - $ - v) / 2)
  ], C = n.map((X) => {
    const F = q(X);
    return { left: (F.minX - e.x) * e.z, top: (F.minY - e.y) * e.z, right: (F.maxX - e.x) * e.z, bottom: (F.maxY - e.y) * e.z };
  }), L = P[0], A = (X, F) => {
    const H = Math.max(0, Math.min(X.left + m, F.right) - Math.max(X.left, F.left)), Q = Math.max(0, Math.min(X.top + v, F.bottom) - Math.max(X.top, F.top));
    return H * Q;
  }, V = ((U = P.map((X) => ({
    candidate: X,
    overlap: C.reduce((F, H) => F + A(X, H), 0),
    distance: Math.hypot(X.left - L.left, X.top - L.top)
  })).sort((X, F) => X.overlap - F.overlap || X.distance - F.distance)[0]) == null ? void 0 : U.candidate) ?? L, W = nt(t), D = t.type === "arrow" ? t.orthogonalVariant ?? "elbow" : "elbow", _ = (X, F, H, Q) => /* @__PURE__ */ N("button", { type: "button", title: Q, onClick: H, className: `h-7 px-2 rounded text-[11px] font-bold ${F ? "bg-blue-600 text-white" : c}`, children: X });
  return /* @__PURE__ */ K("div", { ref: z, "data-canvas-inspector": s ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${i ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: V.left, top: V.top }, onPointerDown: (X) => {
    X.stopPropagation();
    const F = X.target instanceof Element ? X.target : null;
    F != null && F.closest("input, select, textarea") || X.preventDefault();
  }, onClick: (X) => X.stopPropagation(), children: [
    /* @__PURE__ */ K("div", { className: "relative flex items-center gap-1.5 pointer-events-none", children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: s ? "그리기" : "색상" }),
      /* @__PURE__ */ N("button", { type: "button", title: s ? "그리기 색상 팔레트" : "색상 팔레트", "aria-label": s ? "그리기 색상" : "도형 색상", onClick: () => g((X) => !X), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${i ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ N(Je, { className: "w-4 h-4", style: { color: h } }) }),
      l && /* @__PURE__ */ K("div", { className: `pointer-events-auto absolute left-0 top-10 z-50 flex items-center gap-1.5 p-2 rounded-xl border shadow-xl ${i ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        qe.map((X) => /* @__PURE__ */ N("button", { type: "button", title: rt[X].label, "aria-label": `색 ${rt[X].label}`, onClick: () => {
          y(X), d({ color: X, fillColor: void 0 }), g(!1);
        }, className: "w-5 h-5 rounded-full border", style: { background: rt[X].bg, borderColor: rt[X].border, outline: t.color === X && !t.fillColor ? `2px solid ${O.blue}` : void 0, outlineOffset: 1 } }, X)),
        !s && /* @__PURE__ */ N("label", { title: "배경 색 (자유 선택)", className: "w-5 h-5 rounded-full border relative overflow-hidden cursor-pointer flex items-center justify-center", style: { background: t.fillColor ?? Zt(t), outline: t.fillColor ? `2px solid ${O.blue}` : void 0, outlineOffset: 1 }, children: /* @__PURE__ */ N("input", { type: "color", value: t.fillColor ?? Zt(t), onChange: (X) => {
          d({ fillColor: X.target.value }), g(!1);
        }, className: "absolute inset-0 opacity-0 cursor-pointer" }) })
      ] })
    ] }),
    !s && /* @__PURE__ */ K(mt, { children: [
      /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ K("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: gt(t), color: O.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ N("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ N("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? gt(t), onChange: (X) => d({ textColor: X.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ K("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${i ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => d({ fontSize: Math.max(8, W - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${c}`, children: /* @__PURE__ */ N(tn, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ N("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: W }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => d({ fontSize: Math.min(96, W + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${c}`, children: /* @__PURE__ */ N(en, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ K("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${i ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ N("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (X) => {
            const F = Nn(X.target.value);
            d(F === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: F, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${i ? "text-slate-200" : "text-slate-700"}`, children: $n.map((X) => /* @__PURE__ */ N("option", { value: X, className: i ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: dt[X].label }, X)) }),
          /* @__PURE__ */ N(nn, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ K(mt, { children: [
          /* @__PURE__ */ N("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (X) => a(X.target.value), onChange: (X) => X.currentTarget.value && a(X.currentTarget.value), onKeyDown: (X) => {
            X.key === "Enter" && (X.preventDefault(), a(X.currentTarget.value));
          }, onDoubleClick: (X) => X.stopPropagation(), onPointerDown: (X) => X.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${i ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ N("datalist", { id: `canvas-font-families-${t.id}`, children: f.map((X) => /* @__PURE__ */ N("option", { value: X }, X)) })
        ] })
      ] }),
      /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${i ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", on, "왼쪽 정렬"], ["center", rn, "가운데 정렬"], ["right", an, "오른쪽 정렬"]].map(([X, F, H]) => /* @__PURE__ */ N("button", { type: "button", "aria-label": H, title: H, onClick: () => d({ textAlign: X }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${at(t) === X ? "bg-blue-600 text-white shadow-sm" : c}`, children: /* @__PURE__ */ N(F, { className: "w-4 h-4" }) }, X)) }),
        x && /* @__PURE__ */ K(mt, { children: [
          /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", cn, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", sn, "번호 목록"]].map(([X, F, H]) => /* @__PURE__ */ N("button", { type: "button", onClick: () => u(X), "aria-label": H, title: H, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${c}`, children: F ? /* @__PURE__ */ N(F, { className: "w-4 h-4" }) : /* @__PURE__ */ N("span", { className: "text-base leading-none", children: "–" }) }, X)) }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${i ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: ln, label: "굵게" }, { cmd: "italic", Icon: dn, label: "기울임" }, { cmd: "underline", Icon: un, label: "밑줄" }].map(({ cmd: X, Icon: F, label: H }) => /* @__PURE__ */ N("button", { type: "button", onClick: () => r(X), "aria-label": H, title: H, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${c}`, children: /* @__PURE__ */ N(F, { className: "w-4 h-4" }) }, X)) })
        ] })
      ] }),
      (t.type === "card" || t.type === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${i ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ K(mt, { children: [
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${i ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ N("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (X) => X.stopPropagation(), onChange: (X) => d({ category: X.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${i ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ K(mt, { children: [
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${i ? "bg-slate-700" : "bg-slate-200"}` }),
          _("직선", (t.routing ?? "straight") === "straight", () => d({ routing: "straight", bend: 0, orthogonalVariant: void 0 }), "직선"),
          _("ㄱ", t.routing === "orthogonal" && D === "elbow", () => d({ routing: "orthogonal", bend: 0, orthogonalVariant: "elbow" }), "ㄱ자: 가장 짧은 한 번 꺾기"),
          _("ㄴ", t.routing === "orthogonal" && D === "reverse", () => d({ routing: "orthogonal", bend: 0, orthogonalVariant: "reverse" }), "ㄴ자: 반대 방향 한 번 꺾기"),
          _("ㄷ", t.routing === "orthogonal" && D === "u", () => d({ routing: "orthogonal", bend: 0, orthogonalVariant: "u" }), "ㄷ자: U형 우회"),
          _("ㄹ", t.routing === "orthogonal" && D === "zigzag", () => d({ routing: "orthogonal", bend: 0, orthogonalVariant: "zigzag" }), "ㄹ자: 지그재그 우회"),
          _("곡선", (t.routing ?? "") === "curved", () => d({ routing: "curved", bend: t.bend || 60, orthogonalVariant: void 0 }), "곡선"),
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${i ? "bg-slate-700" : "bg-slate-200"}` }),
          _("—", (t.strokeStyle ?? "solid") === "solid", () => d({ strokeStyle: "solid" }), "실선"),
          _("- -", t.strokeStyle === "dashed", () => d({ strokeStyle: "dashed" }), "점선(dash)"),
          _("···", t.strokeStyle === "dotted", () => d({ strokeStyle: "dotted" }), "점선(dot)"),
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${i ? "bg-slate-700" : "bg-slate-200"}` }),
          _((t.arrowStart ?? "none") === "none" ? "○" : t.arrowStart === "dot" ? "●" : "◀", !0, () => d({ arrowStart: (t.arrowStart ?? "none") === "none" ? "arrow" : t.arrowStart === "arrow" ? "dot" : "none" }), "시작점 표식"),
          _((t.arrowEnd ?? "arrow") === "none" ? "○" : t.arrowEnd === "dot" ? "●" : "▶", !0, () => d({ arrowEnd: (t.arrowEnd ?? "arrow") === "arrow" ? "dot" : t.arrowEnd === "dot" ? "none" : "arrow" }), "끝점 표식")
        ] })
      ] })
    ] })
  ] });
}
function Dn({
  camera: t,
  editingId: n,
  isDarkMode: e,
  editorRef: o,
  commitEditorHtml: i,
  onEditorKeyDown: x,
  setShapes: l,
  onDirty: f
}) {
  const g = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", y = (r, u) => /* @__PURE__ */ N(
    "div",
    {
      ref: o,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": "텍스트 편집",
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onInput: i,
      onBlur: i,
      onPointerDown: (a) => a.stopPropagation(),
      onDoubleClick: (a) => a.stopPropagation(),
      onKeyDown: x,
      className: `${g} ${r}`,
      style: u
    },
    "canvas-editor"
  );
  return { renderEditor: y, renderShapeBody: (r) => {
    const u = rt[r.color ?? "blue"], a = n === r.id, c = Tt(r);
    if (r.type === "frame")
      return /* @__PURE__ */ N(
        "div",
        {
          className: "w-full h-full rounded",
          style: { border: `${2 / t.z}px solid ${e ? O.slate600 : O.slate400}` },
          children: /* @__PURE__ */ N(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: e ? O.slate400 : O.muted
              },
              children: a ? y("", { fontSize: 13 / t.z }) : Dt(r) || "프레임"
            }
          )
        }
      );
    if (r.type === "note")
      return /* @__PURE__ */ N(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: u.bg, borderTop: `6px solid ${u.border}`, color: u.text },
          children: a ? y("font-medium", { color: gt(r), fontSize: nt(r), fontFamily: ot(r), textAlign: at(r) }) : c ? /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: gt(r), fontSize: nt(r), fontFamily: ot(r), textAlign: at(r) }, dangerouslySetInnerHTML: { __html: c } }, "canvas-view") : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: gt(r), fontSize: nt(r), fontFamily: ot(r), textAlign: at(r) }, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (r.type === "card") {
      const m = r.cardStyle === "glass";
      return /* @__PURE__ */ K(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: m ? O.glassFill : O.slateCard,
            backdropFilter: m ? "blur(12px)" : void 0,
            WebkitBackdropFilter: m ? "blur(12px)" : void 0,
            border: `1px solid ${m ? O.glassBorder : O.darkBorder}`,
            boxShadow: m ? O.glassShadow : O.cardShadow
          },
          children: [
            /* @__PURE__ */ K(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (v) => v.stopPropagation(),
                onDoubleClick: (v) => v.stopPropagation(),
                onBlur: (v) => {
                  const S = (v.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  l(($) => $.map((p) => p.id === r.id ? { ...p, category: S } : p)), f();
                },
                onKeyDown: (v) => {
                  v.key === "Enter" && (v.preventDefault(), v.currentTarget.blur());
                },
                children: [
                  "[ ",
                  r.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            a ? y("flex-1 font-medium", { color: r.textColor ?? O.white, fontSize: nt(r), fontFamily: ot(r), textAlign: at(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: r.textColor ?? O.white, fontSize: nt(r), fontFamily: ot(r), textAlign: at(r) }, dangerouslySetInnerHTML: { __html: c } }, "canvas-view"),
            /* @__PURE__ */ K("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              r.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (r.type === "text") {
      const m = e ? "text-slate-100" : "text-slate-900", v = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${m}`,
        style: { color: r.textColor, fontSize: nt(r), fontFamily: ot(r), textAlign: at(r) }
      };
      return a ? y(`font-medium ${m}`, v.style) : c ? /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-text-view": !0,
          ...v,
          dangerouslySetInnerHTML: { __html: c }
        },
        "canvas-view"
      ) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, ...v, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (r.type === "image") {
      const m = Jt(r.src);
      return m ? /* @__PURE__ */ N(
        "img",
        {
          src: m,
          alt: r.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const s = Zt(r), h = pn(r), z = gt(r);
    if (r.type === "triangle" || r.type === "diamond" || r.type === "hexagon" || r.type === "star")
      return /* @__PURE__ */ K("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${r.w} ${r.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ N("polygon", { points: yn(r.type, r.w, r.h), fill: s, stroke: h, strokeWidth: 2, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ N("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: z }, children: a ? y("font-medium", { color: z, fontSize: nt(r), fontFamily: ot(r), textAlign: at(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: nt(r), fontFamily: ot(r), textAlign: at(r) }, dangerouslySetInnerHTML: { __html: c } }, "canvas-view") })
      ] });
    const b = Jt(r.src);
    return /* @__PURE__ */ N(
      "div",
      {
        className: `w-full h-full flex items-center justify-center p-3 ${r.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: s, border: `2px solid ${h}`, color: z },
        children: a ? y("font-medium", { color: z, fontSize: nt(r), fontFamily: ot(r), textAlign: at(r) }) : /* @__PURE__ */ K("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: nt(r), fontFamily: ot(r), textAlign: at(r) }, children: [
          /* @__PURE__ */ N("div", { dangerouslySetInnerHTML: { __html: c } }),
          b && /* @__PURE__ */ N(
            "a",
            {
              href: b,
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
function On({
  containerRef: t,
  shapesRef: n,
  shapes: e,
  camera: o,
  selected: i,
  editingId: x,
  boardIdentity: l
}) {
  const [f, g] = et({ width: 0, height: 0 });
  xt(() => {
    const c = t.current;
    if (!c) return;
    let s = -1, h = -1;
    const z = (b = c.clientWidth, m = c.clientHeight) => {
      b === s && m === h || (s = b, h = m, g({ width: b, height: m }));
    };
    if (z(), typeof ResizeObserver < "u") {
      const b = new ResizeObserver((m) => {
        var M;
        const v = (M = m[0]) == null ? void 0 : M.contentRect;
        z((v == null ? void 0 : v.width) ?? c.clientWidth, (v == null ? void 0 : v.height) ?? c.clientHeight);
      });
      return b.observe(c), () => b.disconnect();
    }
    const w = () => z();
    return window.addEventListener("resize", w), () => window.removeEventListener("resize", w);
  }, [l, t]);
  const y = yt(() => new Map(e.map((c) => [c.id, c])), [e]), d = yt(
    () => [...e].sort((c, s) => (c.type === "frame" ? -1 : 0) - (s.type === "frame" ? -1 : 0)),
    [e]
  ), r = yt(() => {
    if (!t.current || f.width <= 0 || f.height <= 0) return null;
    const c = 200 / o.z;
    return {
      minX: o.x - c,
      minY: o.y - c,
      maxX: o.x + f.width / o.z + c,
      maxY: o.y + f.height / o.z + c
    };
  }, [o, t, f]), u = J((c) => {
    if (!r) return !1;
    if (c.id === x || i.has(c.id)) return !0;
    if (c.type === "arrow") {
      const h = $t(c, y, n.current), w = (h.routing === "orthogonal" ? h.pathPoints : null) ?? [h.start, h.end], b = Math.min(...w.map((S) => S.x)), m = Math.max(...w.map((S) => S.x)), v = Math.min(...w.map((S) => S.y)), M = Math.max(...w.map((S) => S.y));
      return m >= r.minX && b <= r.maxX && M >= r.minY && v <= r.maxY;
    }
    const s = q(c);
    return s.maxX >= r.minX && s.minX <= r.maxX && s.maxY >= r.minY && s.minY <= r.maxY;
  }, [x, i, y, n, r]), a = yt(
    () => d.filter(u),
    [u, d]
  );
  return { shapeById: y, visiblePaintOrder: a };
}
function _n({
  editorRef: t,
  editingId: n,
  setShapes: e,
  setAnnouncement: o,
  onDirty: i,
  patchSelected: x
}) {
  const l = J(() => {
    const a = t.current;
    if (!a || !n) return;
    let c;
    try {
      c = te(a.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const s = a.scrollHeight;
    e((h) => h.map((z) => {
      if (z.id !== n) return z;
      const w = { ...z, html: c, text: void 0 };
      if (z.type === "text")
        return z.manualSize ? w : { ...w, ...Ln(a, z) };
      if (z.type === "arrow") return w;
      const b = z.type === "note" ? 32 : z.type === "card" ? 96 : (
        // category header + type footer
        (z.type === "frame", 24)
      ), m = Math.max(z.h, s + b);
      return { ...w, h: m };
    })), i();
  }, [n, i]), f = (a) => {
    var c;
    (c = t.current) == null || c.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(a), l();
  }, g = () => {
    var h;
    const a = (h = window.getSelection()) == null ? void 0 : h.anchorNode, c = a instanceof Element ? a : a == null ? void 0 : a.parentElement, s = c == null ? void 0 : c.closest("ul, ol");
    return s instanceof HTMLElement ? s : null;
  }, y = (a, c, s) => {
    const h = document.createElement(c);
    for (; a.firstChild; ) h.append(a.firstChild);
    return a.replaceWith(h), h;
  }, d = (a) => {
    const c = t.current;
    if (!c) return;
    c.focus();
    const s = g();
    if (a === "number")
      if ((s == null ? void 0 : s.tagName) === "OL")
        s.removeAttribute("data-list-style");
      else if ((s == null ? void 0 : s.tagName) === "UL")
        y(s, "ol");
      else {
        document.execCommand("insertOrderedList");
        const h = g();
        h == null || h.removeAttribute("data-list-style");
      }
    else if ((s == null ? void 0 : s.tagName) === "UL") {
      const h = s.dataset.listStyle;
      a === h ? document.execCommand("insertUnorderedList") : s.dataset.listStyle = a;
    } else {
      (s == null ? void 0 : s.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const h = g();
      h && (h.dataset.listStyle = a);
    }
    l();
  };
  return { commitEditorHtml: l, applyFormat: f, applyList: d, onEditorKeyDown: (a) => {
    if (a.key === "Tab") {
      a.preventDefault(), document.execCommand(a.shiftKey ? "outdent" : "indent"), l();
      return;
    }
    if (a.key === " ") {
      const c = window.getSelection();
      if (c && c.isCollapsed && c.anchorNode) {
        const s = c.anchorNode, h = s.textContent || "", z = c.anchorOffset, w = h.slice(0, z).trim();
        if (!g()) {
          if (w === "-" || w === "–") {
            a.preventDefault(), s.textContent = h.slice(z), d("dash");
            return;
          }
          if (w === "*") {
            a.preventDefault(), s.textContent = h.slice(z), d("bullet");
            return;
          }
          if (w === "1.") {
            a.preventDefault(), s.textContent = h.slice(z), d("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (a) => {
    const c = Se(a);
    if (!c) {
      x({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    x({
      fontFamily: "custom",
      customFontFamily: c
    });
  } };
}
function Bn({
  boardIdentity: t,
  tool: n,
  controlledShapes: e,
  onShapesChange: o,
  onDirty: i
}) {
  const x = G(null), l = G(null), [f, g] = et([]), y = e !== void 0 && o !== void 0, d = G(/* @__PURE__ */ new WeakMap()), r = yt(() => {
    const T = d.current;
    return (y ? e ?? [] : f).map((j) => {
      let B = T.get(j);
      return B === void 0 && (B = ee(j), T.set(j, B)), B;
    }).filter((j) => j !== null);
  }, [y, e, f]), u = G(o);
  u.current = o;
  const a = J((T) => {
    const j = u.current;
    if (!j) {
      g(T);
      return;
    }
    j(typeof T == "function" ? T : () => T);
  }, []), [c, s] = et({ x: -400, y: -300, z: 1 }), [h, z] = et(/* @__PURE__ */ new Set()), [w, b] = et(null), [m, v] = et({ kind: "none" }), [M, S] = et(!1), [$, p] = et([]), [k, Y] = et(""), [I, E] = et(!1), [P, C] = et(null), [L, A] = et("blue"), [V, W] = et(Ft), D = G(L);
  D.current = L;
  const _ = G([]), U = G([]), X = G(null), F = G(/* @__PURE__ */ new Map()), H = G(r), Q = G(c), ct = G(n), Z = G(h), tt = G(w);
  H.current = r, Q.current = c, ct.current = n, Z.current = h, tt.current = w;
  const ut = G({ kind: "none" }), it = J((T) => {
    ut.current = T, v(T);
  }, []), lt = J((T) => {
    Z.current = T, z(T);
  }, []);
  Ut(() => {
    var j;
    const T = /* @__PURE__ */ new Set();
    Z.current = T, tt.current = null, F.current.clear(), _.current = [], U.current = [], X.current = null, it({ kind: "none" }), z(T), b(null), S(!1), p([]), C(null), Y(""), (j = x.current) == null || j.focus();
  }, [it, t]), xt(() => {
    let T = !1;
    const j = () => {
      const R = Xn();
      T || W(R);
    };
    if (j(), typeof document > "u" || !("fonts" in document)) return;
    const B = () => j();
    return document.fonts.addEventListener("loadingdone", B), () => {
      T = !0, document.fonts.removeEventListener("loadingdone", B);
    };
  }, [t]);
  const St = (w ? r.find((T) => T.id === w) : void 0) !== void 0;
  Ut(() => {
    if (!w || !St) return;
    const T = () => {
      const B = l.current, R = H.current.find((Kt) => Kt.id === w);
      if (!B || !R || (B.dataset.seeded !== w && (B.innerHTML = Tt(R), B.dataset.seeded = w), document.activeElement === B)) return;
      B.focus();
      const ft = document.createRange();
      ft.selectNodeContents(B), ft.collapse(!1);
      const ht = window.getSelection();
      ht == null || ht.removeAllRanges(), ht == null || ht.addRange(ft);
    };
    T();
    const j = requestAnimationFrame(T);
    return () => cancelAnimationFrame(j);
  }, [w, St]);
  const zt = J((T) => {
    a((j) => {
      const B = typeof T == "function" ? T(j) : T;
      return _.current.push(j), _.current.length > 100 && _.current.shift(), U.current = [], B;
    }), i();
  }, [i]), _t = J((T) => T.size === 0 ? !1 : (zt((j) => j.filter((B) => T.has(B.id) ? !1 : B.type !== "arrow" ? !0 : !(B.fromId && T.has(B.fromId)) && !(B.toId && T.has(B.toId)))), lt(/* @__PURE__ */ new Set()), Y(`${T.size}개 삭제됨`), !0), [zt, lt]), Bt = J(() => {
    X.current = H.current;
  }, []), Ht = J(() => {
    const T = X.current;
    X.current = null, !(!T || T === H.current) && (_.current.push(T), _.current.length > 100 && _.current.shift(), U.current = [], i());
  }, [i]), kt = J((T, j) => {
    var ft;
    const B = (ft = x.current) == null ? void 0 : ft.getBoundingClientRect(), R = Q.current;
    return B ? { x: (T - B.left) / R.z + R.x, y: (j - B.top) / R.z + R.y } : { x: 0, y: 0 };
  }, []), Ct = J(() => {
    var B;
    const T = (B = x.current) == null ? void 0 : B.getBoundingClientRect(), j = Q.current;
    return T ? { x: j.x + T.width / 2 / j.z, y: j.y + T.height / 2 / j.z } : { x: 0, y: 0 };
  }, []), jt = J((T) => {
    const j = new Set(H.current.filter((R) => T.has(R.id) && R.groupId).map((R) => R.groupId));
    if (j.size === 0) return T;
    const B = new Set(T);
    for (const R of H.current) R.groupId && j.has(R.groupId) && B.add(R.id);
    return B;
  }, []);
  return {
    containerRef: x,
    editorRef: l,
    localShapes: f,
    setLocalShapes: g,
    controlled: y,
    shapes: r,
    setShapes: a,
    camera: c,
    setCamera: s,
    cameraRef: Q,
    selected: h,
    setSelected: z,
    selectedRef: Z,
    editingId: w,
    setEditingId: b,
    editingIdRef: tt,
    interaction: m,
    interactionRef: ut,
    applyInteraction: it,
    isSpaceDown: M,
    setIsSpaceDown: S,
    guides: $,
    setGuides: p,
    announcement: k,
    setAnnouncement: Y,
    showInspectorPalette: I,
    setShowInspectorPalette: E,
    eraserPos: P,
    setEraserPos: C,
    activeColor: L,
    setActiveColor: A,
    activeColorRef: D,
    installedFontFamilies: V,
    pointers: F,
    past: _,
    future: U,
    selectNow: lt,
    commit: zt,
    deleteSelection: _t,
    beginHistory: Bt,
    endHistory: Ht,
    toPage: kt,
    viewportCentre: Ct,
    expandToGroups: jt,
    toolRef: ct,
    shapesRef: H
  };
}
function Hn({
  containerRef: t,
  camera: n,
  setCamera: e,
  minZoom: o,
  maxZoom: i,
  shapes: x,
  selected: l,
  editingId: f,
  textualTypes: g,
  onZoomChange: y,
  onSelectionChange: d,
  onLocalCursor: r,
  toPage: u
}) {
  xt(() => {
    y == null || y(n.z);
  }, [n.z, y]), xt(() => {
    const w = t.current;
    if (!w) return;
    const b = (m) => {
      if (m.preventDefault(), m.ctrlKey || m.metaKey) {
        const v = w.getBoundingClientRect();
        e((M) => {
          const S = Math.min(i, Math.max(o, M.z * Math.exp(-m.deltaY * 0.01))), $ = m.clientX - v.left, p = m.clientY - v.top;
          return { x: M.x + $ / M.z - $ / S, y: M.y + p / M.z - p / S, z: S };
        });
      } else
        e((v) => ({ ...v, x: v.x + m.deltaX / v.z, y: v.y + m.deltaY / v.z }));
    };
    return w.addEventListener("wheel", b, { passive: !1 }), () => w.removeEventListener("wheel", b);
  }, [t, i, o, e]);
  const a = yt(() => {
    const w = x.filter((b) => l.has(b.id));
    return {
      count: w.length,
      canGroup: w.length > 1,
      canUngroup: w.some((b) => !!b.groupId),
      isTextual: w.length === 1 && g.includes(w[0].type)
    };
  }, [l, x, g]);
  xt(() => {
    d == null || d(a);
  }, [d, a]);
  const c = yt(() => {
    if (f) {
      const m = x.find((v) => v.id === f);
      return m && m.type !== "image" && m.type !== "draw" ? m : null;
    }
    const w = x.filter((m) => l.has(m.id));
    if (w.length > 1 && w.every((m) => m.type === "draw")) return w[0] ?? null;
    if (w.length !== 1) return null;
    const b = w[0];
    return b && b.type !== "image" ? b : null;
  }, [f, l, x]), s = G(0);
  return { selectionInfo: a, inspectorShape: c, onContainerPointerMove: r ? (w) => {
    const b = performance.now();
    b - s.current < 60 || (s.current = b, r(u(w.clientX, w.clientY)));
  } : void 0, onContainerPointerLeave: r ? () => r(null) : void 0 };
}
function jn(t, n) {
  if (t.length === 0) return null;
  let e = 1 / 0, o = 1 / 0, i = -1 / 0, x = -1 / 0;
  for (const r of t) {
    const u = q(r);
    e = Math.min(e, u.minX), o = Math.min(o, u.minY), i = Math.max(i, u.maxX), x = Math.max(x, u.maxY);
  }
  const l = 40, f = i - e + l * 2, g = x - o + l * 2;
  if (!Number.isFinite(f) || !Number.isFinite(g) || f > wt.maxExportDimension || g > wt.maxExportDimension || f * g > wt.maxExportPixels) return null;
  const y = (r, u, a, c, s) => {
    const h = r.fontSize ?? a, z = ot(r), w = $e(Tt(r));
    if (w.length === 0) return "";
    const b = pt(r), m = r.textAlign === "right" ? "end" : r.textAlign === "center" ? "middle" : r.textAlign === "left" ? "start" : s, v = m === "end" ? b.maxX - 12 : m === "middle" ? (b.minX + b.maxX) / 2 : b.minX + 12, M = b.minY + h + 12;
    return w.map((S, $) => {
      const p = S.map((k) => `<tspan style="${[
        k.bold ? "font-weight:700" : `font-weight:${c}`,
        k.italic ? "font-style:italic" : "",
        k.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${vt(k.text)}</tspan>`).join("");
      return `<text x="${v}" y="${M + $ * h * 1.4}" font-family="${vt(z)}" font-size="${h}" fill="${u}" text-anchor="${m}">${p}</text>`;
    }).join("");
  }, d = t.map((r) => {
    const u = rt[r.color ?? "blue"], a = pt(r), c = st(r), s = r.rotation ? ` transform="rotate(${r.rotation * 180 / Math.PI} ${c.x} ${c.y})"` : "", h = r.color ? rt[r.color].border : O.ink;
    if (r.type === "draw" && r.points)
      return `<path d="${we(r.points)}" fill="none" stroke="${h}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    if (r.type === "arrow") {
      const w = $t(r, new Map(t.map((E) => [E.id, E])), t), b = w.routing === "orthogonal" && w.pathPoints && w.pathPoints.length > 1 ? w.pathPoints[w.pathPoints.length - 2] : null, m = w.routing === "orthogonal" && b ? b : Yt(0.94, w.start, w.control, w.end), v = Math.atan2(w.end.y - m.y, w.end.x - m.x), M = 14, S = `${w.end.x - M * Math.cos(v - 0.4)},${w.end.y - M * Math.sin(v - 0.4)}`, $ = `${w.end.x - M * Math.cos(v + 0.4)},${w.end.y - M * Math.sin(v + 0.4)}`, p = w.routing === "orthogonal" && w.pathPoints ? Gt(w.pathPoints) : w.bend === 0 ? `M ${w.start.x} ${w.start.y} L ${w.end.x} ${w.end.y}` : `M ${w.start.x} ${w.start.y} Q ${w.control.x} ${w.control.y} ${w.end.x} ${w.end.y}`, k = w.routing === "orthogonal" && w.pathPoints ? ye(w.pathPoints) : w.bend === 0 ? { x: (w.start.x + w.end.x) / 2, y: (w.start.y + w.end.y) / 2 } : Yt(0.5, w.start, w.control, w.end), Y = Dt(r), I = Y ? `<text x="${k.x}" y="${k.y - 6}" text-anchor="middle" font-family="${vt(ot(r))}" font-size="${r.fontSize ?? 12}" fill="${h}">${vt(Y)}</text>` : "";
      return `<path d="${p}" fill="none" stroke="${h}" stroke-width="2.5" stroke-linecap="round"/><polygon points="${w.end.x},${w.end.y} ${S} ${$}" fill="${h}"/>` + I;
    }
    if (r.type === "image" && r.src) {
      const w = Jt(r.src);
      return w ? `<image href="${vt(w)}" x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}"${s}/>` : "";
    }
    if (r.type === "frame")
      return `<g${s}><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" fill="none" stroke="${O.slate400}" stroke-width="2" rx="4"/><text x="${a.minX}" y="${a.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${O.muted}">${vt(r.text ?? "프레임")}</text></g>`;
    if (r.type === "note")
      return `<g${s}><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" fill="${u.bg}"/><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="6" fill="${u.border}"/>` + y(r, u.text, 14, "600", "start") + "</g>";
    if (r.type === "card") {
      const w = r.cardStyle === "glass";
      return `<g${s}><rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" rx="16" fill="${w ? O.glassFill : O.slateCard}"/><text x="${a.minX + 16}" y="${a.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${O.slate400}">[ ${vt(r.category ?? "ENTITY")} ]</text>` + y(r, O.white, 16, "700", "start") + "</g>";
    }
    const z = r.type === "ellipse" ? `<ellipse cx="${(a.minX + a.maxX) / 2}" cy="${(a.minY + a.maxY) / 2}" rx="${(a.maxX - a.minX) / 2}" ry="${(a.maxY - a.minY) / 2}" fill="${u.bg}" stroke="${u.border}" stroke-width="2"/>` : `<rect x="${a.minX}" y="${a.minY}" width="${a.maxX - a.minX}" height="${a.maxY - a.minY}" rx="12" fill="${u.bg}" stroke="${u.border}" stroke-width="2"/>`;
    return `<g${s}>${z}${y(r, u.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${f}" height="${g}" viewBox="${e - l} ${o - l} ${f} ${g}"><rect x="${e - l}" y="${o - l}" width="${f}" height="${g}" fill="${n ? O.canvasDark : O.canvasLight}"/>` + d + "</svg>";
}
async function Kn(t) {
  const n = t();
  if (!n) return null;
  const e = /width="([\d.]+)" height="([\d.]+)"/.exec(n), o = Math.ceil(Number((e == null ? void 0 : e[1]) ?? 1200)), i = Math.ceil(Number((e == null ? void 0 : e[2]) ?? 800)), x = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`, l = new Image();
  l.crossOrigin = "anonymous";
  try {
    await new Promise((u, a) => {
      l.onload = () => u(), l.onerror = () => a(new Error("svg rasterise failed")), l.src = x;
    });
  } catch {
    return null;
  }
  const f = 2, g = o * f, y = i * f;
  if (!Number.isSafeInteger(g) || !Number.isSafeInteger(y) || g > wt.maxExportDimension || y > wt.maxExportDimension || g * y > wt.maxExportPixels) return null;
  const d = document.createElement("canvas");
  d.width = g, d.height = y;
  const r = d.getContext("2d");
  return r ? (r.scale(f, f), r.drawImage(l, 0, 0), new Promise((u) => {
    try {
      d.toBlob((a) => u(a), "image/png");
    } catch {
      u(null);
    }
  })) : null;
}
function Wn(t, n, e) {
  if (t.length < 2) return;
  const o = t.filter(
    (u) => u.type !== "draw" && u.type !== "arrow" && u.type !== "frame" && u.type !== "image"
  );
  if (o.length < 2) return;
  const i = o.map((u, a) => ({
    id: u.id,
    i: a,
    x: st(u).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: st(u).y,
    vx: 0,
    vy: 0
  }));
  for (let u = 0; u < i.length; u++)
    for (let a = 0; a < u; a++)
      if (Math.abs(i[u].x - i[a].x) < 1 && Math.abs(i[u].y - i[a].y) < 1) {
        const c = 2 * Math.PI * u / i.length;
        i[u].x += Math.cos(c) * 10, i[u].y += Math.sin(c) * 10;
        break;
      }
  const x = new Map(i.map((u) => [u.id, u])), l = [];
  for (const u of t) {
    if (u.type !== "arrow") continue;
    const a = u.fromId ? x.get(u.fromId) : null, c = u.toId ? x.get(u.toId) : null;
    a && c && l.push([a, c]);
  }
  const f = 220, g = f * f, y = 80;
  let d = 400;
  const r = d / y;
  for (let u = 0; u < y; u++) {
    for (let a = 0; a < i.length; a++)
      i[a].vx = 0, i[a].vy = 0;
    for (let a = 0; a < i.length; a++)
      for (let c = a + 1; c < i.length; c++) {
        const s = i[a], h = i[c], z = s.x - h.x, w = s.y - h.y, b = Math.hypot(z, w) || 0.01, m = g / b, v = z / b * m, M = w / b * m;
        s.vx += v, s.vy += M, h.vx -= v, h.vy -= M;
      }
    for (const [a, c] of l) {
      const s = a.x - c.x, h = a.y - c.y, z = Math.hypot(s, h) || 0.01, w = z * z / f, b = s / z * w, m = h / z * w;
      a.vx -= b, a.vy -= m, c.vx += b, c.vy += m;
    }
    for (const a of i) {
      const c = Math.hypot(a.vx, a.vy) || 0.01, s = Math.min(c, d);
      a.x += a.vx / c * s, a.y += a.vy / c * s;
    }
    d = Math.max(0.5, d - r);
  }
  n((u) => u.map((a) => {
    const c = x.get(a.id);
    return c ? { ...a, x: c.x - a.w / 2, y: c.y - a.h / 2 } : a;
  })), e();
}
function Vn(t, {
  controlled: n,
  past: e,
  future: o,
  setLocalShapes: i,
  setCamera: x,
  selectNow: l,
  setEditingId: f
}) {
  const g = t;
  if (!g || g.version !== "canvas-v1") return;
  let y;
  try {
    y = Qe({ version: "canvas-v1", shapes: [], camera: g.camera }).camera;
  } catch {
    return;
  }
  !n && Array.isArray(g.shapes) && g.shapes.length <= wt.maxShapes && (e.current = [], o.current = [], i(g.shapes.map(ee).filter((d) => d !== null))), x(y), l(/* @__PURE__ */ new Set()), f(null);
}
function Rn({
  ref: t,
  containerRef: n,
  shapesRef: e,
  cameraRef: o,
  selectedRef: i,
  past: x,
  future: l,
  controlled: f,
  isDarkMode: g,
  minZoom: y,
  maxZoom: d,
  onToolChange: r,
  onDirty: u,
  commit: a,
  deleteSelection: c,
  selectNow: s,
  viewportCentre: h,
  setShapes: z,
  setLocalShapes: w,
  setCamera: b,
  setEditingId: m,
  setAnnouncement: v,
  createId: M
}) {
  const S = J((p) => {
    const k = h(), Y = ee({
      id: M(),
      x: p.x ?? k.x - p.w / 2,
      y: p.y ?? k.y - p.h / 2,
      ...p
    });
    if (!Y) throw new Error("Canvas could not create a valid shape.");
    return a((I) => [...I, Y]), s(/* @__PURE__ */ new Set([Y.id])), r("select"), v(`${Y.type} 추가됨`), Y;
  }, [a, M, r, s, v, h]), $ = J(() => jn(e.current, g), [g, e]);
  We(t, () => ({
    addNote: (p) => {
      const k = S({ type: "note", w: 180, h: 180, color: p, text: "" });
      m(k.id);
    },
    addCard: (p, k, Y, I) => {
      S({ type: "card", w: 260, h: 150, text: p, category: k, cardStyle: Y, color: I });
    },
    addText: () => {
      const p = S({ type: "text", w: 220, h: 44, text: "" });
      m(p.id);
    },
    addShape: (p, k, Y) => {
      S({
        type: p,
        w: p === "ellipse" ? 220 : 200,
        h: p === "ellipse" ? 110 : 140,
        color: k,
        text: Y ?? ""
      });
    },
    addArrow: () => {
      const p = h(), k = { id: M(), type: "arrow", x: p.x - 140, y: p.y, w: 280, h: 0 };
      a((Y) => [...Y, k]), s(/* @__PURE__ */ new Set([k.id])), r("select");
    },
    addImage: (p, k, Y, I) => {
      S({ type: "image", w: Y, h: I, src: p, fileName: k });
    },
    addFileCard: (p, k, Y) => {
      S({ type: "rect", w: 260, h: 120, color: "purple", text: Y, src: k, fileName: p });
    },
    setTool: r,
    undo: () => {
      const p = x.current.pop();
      p && (l.current.push(e.current), z(p), s(/* @__PURE__ */ new Set()), m(null), u(), v("실행 취소"));
    },
    redo: () => {
      const p = l.current.pop();
      p && (x.current.push(e.current), z(p), s(/* @__PURE__ */ new Set()), m(null), u(), v("다시 실행"));
    },
    deleteSelected: () => {
      c(i.current);
    },
    duplicateSelected: () => {
      var I;
      const p = i.current;
      if (p.size === 0) return;
      const k = [], Y = /* @__PURE__ */ new Map();
      for (const E of e.current) {
        if (!p.has(E.id)) continue;
        let P = E.groupId;
        P && (Y.has(P) || Y.set(P, M("g")), P = Y.get(P)), k.push({
          ...E,
          id: M(),
          x: E.x + 24,
          y: E.y + 24,
          groupId: P,
          points: (I = E.points) == null ? void 0 : I.map(([C, L]) => [C + 24, L + 24])
        });
      }
      a((E) => [...E, ...k]), s(new Set(k.map((E) => E.id))), v(`${k.length}개 복제됨`);
    },
    group: () => {
      var Y;
      const p = i.current;
      if (p.size < 2) return;
      const k = M("g");
      a((I) => I.map((E) => p.has(E.id) ? { ...E, groupId: k } : E)), v(`${p.size}개 그룹화됨`), (Y = n.current) == null || Y.focus();
    },
    ungroup: () => {
      var k;
      const p = i.current;
      p.size !== 0 && (a((Y) => Y.map((I) => p.has(I.id) ? { ...I, groupId: void 0 } : I)), v("그룹 해제됨"), (k = n.current) == null || k.focus());
    },
    zoomBy: (p) => {
      b((k) => {
        var C;
        const Y = (C = n.current) == null ? void 0 : C.getBoundingClientRect(), I = Math.min(d, Math.max(y, k.z * p));
        if (!Y) return { ...k, z: I };
        const E = k.x + Y.width / 2 / k.z, P = k.y + Y.height / 2 / k.z;
        return { x: E - Y.width / 2 / I, y: P - Y.height / 2 / I, z: I };
      });
    },
    zoomTo: (p) => {
      b((k) => {
        var C;
        const Y = (C = n.current) == null ? void 0 : C.getBoundingClientRect(), I = Math.min(d, Math.max(y, p));
        if (!Y) return { ...k, z: I };
        const E = k.x + Y.width / 2 / k.z, P = k.y + Y.height / 2 / k.z;
        return { x: E - Y.width / 2 / I, y: P - Y.height / 2 / I, z: I };
      });
    },
    resetZoom: () => {
      b((p) => {
        var E;
        const k = (E = n.current) == null ? void 0 : E.getBoundingClientRect();
        if (!k) return { ...p, z: 1 };
        const Y = p.x + k.width / 2 / p.z, I = p.y + k.height / 2 / p.z;
        return { x: Y - k.width / 2, y: I - k.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var A;
      const p = e.current, k = (A = n.current) == null ? void 0 : A.getBoundingClientRect();
      if (p.length === 0 || !k) return;
      let Y = 1 / 0, I = 1 / 0, E = -1 / 0, P = -1 / 0;
      for (const V of p) {
        const W = q(V);
        Y = Math.min(Y, W.minX), I = Math.min(I, W.minY), E = Math.max(E, W.maxX), P = Math.max(P, W.maxY);
      }
      const C = 80, L = Math.min(d, Math.max(
        y,
        Math.min(k.width / (E - Y + C * 2), k.height / (P - I + C * 2))
      ));
      b({
        x: (Y + E) / 2 - k.width / 2 / L,
        y: (I + P) / 2 - k.height / 2 / L,
        z: L
      });
    },
    autoLayout: () => Wn(e.current, a, () => v("자동 배치 완료")),
    exportSvg: $,
    exportPng: () => Kn($),
    getSnapshot: () => ({ version: "canvas-v1", shapes: e.current, camera: o.current }),
    loadSnapshot: (p) => Vn(p, {
      controlled: f,
      past: x,
      future: l,
      setLocalShapes: w,
      setCamera: b,
      selectNow: s,
      setEditingId: m
    })
  }), [
    S,
    $,
    a,
    M,
    c,
    g,
    d,
    y,
    u,
    r,
    s,
    b,
    m,
    w,
    z,
    v,
    h,
    f
  ]);
}
function Un(t) {
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
function Gn({
  containerRef: t,
  editorRef: n,
  shapesRef: e,
  selectedRef: o,
  editingIdRef: i,
  toolRef: x,
  past: l,
  future: f,
  textualTypes: g,
  setIsSpaceDown: y,
  setEditingId: d,
  setShapes: r,
  setAnnouncement: u,
  commit: a,
  deleteSelection: c,
  selectNow: s,
  onDirty: h,
  onToolChange: z,
  createId: w
}) {
  const b = J((m, v) => {
    const M = o.current;
    M.size !== 0 && a((S) => S.map(($) => {
      var p;
      return M.has($.id) ? {
        ...$,
        x: $.x + m,
        y: $.y + v,
        points: (p = $.points) == null ? void 0 : p.map(([k, Y]) => [k + m, Y + v])
      } : $;
    }));
  }, [a, o]);
  xt(() => {
    const m = ($) => {
      const p = $;
      return !!p && (p.tagName === "INPUT" || p.tagName === "TEXTAREA" || p.isContentEditable);
    }, v = ($) => $ instanceof Element && !!$.closest("input, select, button, textarea, option, label, [data-canvas-control]"), M = ($) => {
      var L, A, V, W;
      const p = t.current, k = document.activeElement, Y = $.target instanceof Node && !!(p != null && p.contains($.target)), I = !!p && (k === p || p.contains(k));
      if (!Y && !I || v($.target)) return;
      if ($.code === "Space" && !m($.target)) {
        y(!0), $.preventDefault();
        return;
      }
      if (m($.target)) {
        if ($.key === "Escape")
          $.preventDefault(), d(null), (L = n.current) == null || L.blur(), (A = t.current) == null || A.focus();
        else if (($.key === "Delete" || $.key === "Backspace") && !i.current) {
          const D = o.current;
          c(D) && $.preventDefault();
        }
        return;
      }
      const E = $.metaKey || $.ctrlKey, P = o.current;
      if (E && $.key.toLowerCase() === "z") {
        if ($.preventDefault(), $.shiftKey) {
          const D = f.current.pop();
          D && (l.current.push(e.current), r(D), h());
        } else {
          const D = l.current.pop();
          D && (f.current.push(e.current), r(D), h());
        }
        s(/* @__PURE__ */ new Set());
        return;
      }
      if (E && $.key.toLowerCase() === "g") {
        if ($.preventDefault(), $.shiftKey)
          P.size > 0 && (a((D) => D.map((_) => P.has(_.id) ? { ..._, groupId: void 0 } : _)), u("그룹 해제됨"));
        else if (P.size > 1) {
          const D = w("g");
          a((_) => _.map((U) => P.has(U.id) ? { ...U, groupId: D } : U)), u(`${P.size}개 그룹화됨`);
        }
        return;
      }
      if (E && $.key.toLowerCase() === "a") {
        $.preventDefault(), s(new Set(e.current.map((D) => D.id))), u(`전체 ${e.current.length}개 선택됨`);
        return;
      }
      if ($.key === "Delete" || $.key === "Backspace") {
        c(P) && $.preventDefault();
        return;
      }
      if ($.key.startsWith("Arrow")) {
        $.preventDefault();
        const D = $.shiftKey ? 10 : 1;
        $.key === "ArrowLeft" && b(-D, 0), $.key === "ArrowRight" && b(D, 0), $.key === "ArrowUp" && b(0, -D), $.key === "ArrowDown" && b(0, D);
        return;
      }
      if ($.key === "Tab" && e.current.length > 0) {
        $.preventDefault();
        const D = e.current, _ = D.findIndex((F) => P.has(F.id)), U = $.shiftKey ? _ <= 0 ? D.length - 1 : _ - 1 : _ === -1 || _ === D.length - 1 ? 0 : _ + 1, X = D[U];
        s(/* @__PURE__ */ new Set([X.id])), u(`${X.type} 선택됨: ${Dt(X) || "내용 없음"}`);
        return;
      }
      if ($.key === "Enter" && P.size === 1) {
        const D = e.current.find((_) => P.has(_.id));
        D && g.includes(D.type) && ($.preventDefault(), d(D.id));
        return;
      }
      if ($.key === "Escape") {
        if (i.current) {
          $.preventDefault(), d(null), (V = n.current) == null || V.blur(), (W = t.current) == null || W.focus(), z("select");
          return;
        }
        s(/* @__PURE__ */ new Set()), z("select");
        return;
      }
      const C = Un($);
      C && ($.preventDefault(), x.current = C, z(C));
    }, S = ($) => {
      const p = t.current;
      !p || !(document.activeElement === p || p.contains(document.activeElement)) || $.code === "Space" && y(!1);
    };
    return window.addEventListener("keydown", M), window.addEventListener("keyup", S), () => {
      window.removeEventListener("keydown", M), window.removeEventListener("keyup", S);
    };
  }, [
    a,
    t,
    w,
    c,
    i,
    n,
    f,
    b,
    h,
    z,
    l,
    s,
    o,
    u,
    d,
    y,
    r,
    e,
    g,
    x
  ]);
}
const qn = 400;
function Qn({
  containerRef: t,
  editorRef: n,
  pointers: e,
  cameraRef: o,
  shapesRef: i,
  toolRef: x,
  activeColorRef: l,
  camera: f,
  shapes: g,
  selected: y,
  isSpaceDown: d,
  textualTypes: r,
  setShapes: u,
  setEditingId: a,
  applyInteraction: c,
  selectNow: s,
  beginHistory: h,
  commit: z,
  onToolChange: w,
  expandToGroups: b,
  toPage: m,
  createId: v
}) {
  const M = v, S = G(null), $ = (C, L) => {
    var D;
    const A = ((D = t.current) == null ? void 0 : D.dataset.canvasActiveTool) === "text" ? "text" : x.current;
    if (A !== "note" && A !== "text") return;
    const V = m(C, L), W = A === "note" ? { id: M(), type: "note", x: V.x - 90, y: V.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: M(), type: "text", x: V.x, y: V.y - 22, w: 220, h: 44, text: "" };
    z((_) => [..._, W]), s(/* @__PURE__ */ new Set([W.id])), a(W.id), w("select");
  };
  return xt(() => {
    const C = (L) => {
      var A;
      (A = t.current) != null && A.contains(L.target) && (L.target instanceof Element && L.target.closest('[role="textbox"], [data-canvas-inspector]') || $(L.clientX, L.clientY));
    };
    return window.addEventListener("click", C, !0), () => window.removeEventListener("click", C, !0);
  }), { onPointerDown: (C) => {
    var D, _, U;
    const L = x.current;
    if (e.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), e.current.size === 2) {
      const [X, F] = [...e.current.values()], H = o.current;
      c({
        kind: "pinch",
        startDist: Math.hypot(F.x - X.x, F.y - X.y) || 1,
        startZoom: H.z,
        startMidX: (X.x + F.x) / 2,
        startMidY: (X.y + F.y) / 2,
        camX: H.x,
        camY: H.y
      });
      return;
    }
    if (e.current.size > 2) return;
    if (C.button === 1 || d || L === "hand" || C.button === 0 && L === "select" && C.altKey) {
      c({ kind: "pan", startX: C.clientX, startY: C.clientY, camX: f.x, camY: f.y });
      return;
    }
    if (C.button !== 0) return;
    const A = m(C.clientX, C.clientY);
    if (a(null), (D = n.current) == null || D.blur(), (_ = t.current) == null || _.focus(), L === "draw") {
      const X = { id: M(), type: "draw", x: A.x, y: A.y, w: 0, h: 0, points: [[A.x, A.y]], color: l.current };
      h(), u((F) => [...F, X]), c({ kind: "drawing", id: X.id });
      return;
    }
    if (L === "arrow" || L === "frame" || Ze.includes(L)) {
      const X = L, F = L === "arrow" ? { id: M(), type: "arrow", x: A.x, y: A.y, w: 0, h: 0, color: l.current } : L === "frame" ? { id: M(), type: "frame", x: A.x, y: A.y, w: 0, h: 0, text: "프레임" } : { id: M(), type: X, x: A.x, y: A.y, w: 0, h: 0, color: l.current, text: "" };
      h(), u((H) => [...H, F]), c({ kind: "creating", id: F.id, startX: A.x, startY: A.y });
      return;
    }
    if (L === "note" || L === "text") return;
    if (L === "eraser") {
      h(), u((X) => Me(X, A.x, A.y, 14 / f.z, f.z)), c({ kind: "erasing" });
      return;
    }
    const V = new Map(g.map((X) => [X.id, X])), W = [...g].reverse().find((X) => At(X, A.x, A.y, f.z, V, g));
    if (!W)
      S.current = null;
    else {
      const X = Date.now(), F = !C.shiftKey && r.includes(W.type) && ((U = S.current) == null ? void 0 : U.id) === W.id && X - S.current.time < qn, H = F ? W.id : void 0;
      S.current = F ? null : { id: W.id, time: X };
      const Q = C.shiftKey ? new Set(y).add(W.id) : y.has(W.id) ? y : /* @__PURE__ */ new Set([W.id]), ct = b(Q);
      s(ct);
      const Z = /* @__PURE__ */ new Map();
      for (const tt of g) ct.has(tt.id) && Z.set(tt.id, tt);
      for (const tt of g) {
        if (tt.type !== "frame" || !ct.has(tt.id)) continue;
        const ut = q(tt);
        for (const it of g) {
          if (it.id === tt.id || Z.has(it.id)) continue;
          const lt = st(it);
          lt.x >= ut.minX && lt.x <= ut.maxX && lt.y >= ut.minY && lt.y <= ut.maxY && Z.set(it.id, it);
        }
      }
      h(), c({ kind: "move", startX: A.x, startY: A.y, origin: Z, editOnReleaseId: H });
      return;
    }
    C.shiftKey || s(/* @__PURE__ */ new Set()), c({
      kind: "marquee",
      startX: A.x,
      startY: A.y,
      curX: A.x,
      curY: A.y,
      screenStartX: C.clientX,
      screenStartY: C.clientY
    });
  }, onResizeHandleDown: (C, L, A) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), h(), c({ kind: "resize", id: L.id, handle: A, start: L });
  }, onRotateHandleDown: (C, L) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY });
    const A = m(C.clientX, C.clientY), V = st(L);
    h(), c({
      kind: "rotate",
      id: L.id,
      startAngle: Math.atan2(A.y - V.y, A.x - V.x),
      startRotation: L.rotation ?? 0
    });
  }, onConnectHandleDown: (C, L) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY });
    const A = m(C.clientX, C.clientY);
    c({ kind: "connect", fromId: L.id, toX: A.x, toY: A.y, hoverId: null });
  }, onBendHandleDown: (C, L) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), h(), c({ kind: "bend", id: L.id });
  }, onArrowEndpointDown: (C, L, A) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), h(), c({ kind: "arrow-endpoint", id: L.id, endpoint: A, hoverId: null });
  } };
}
const Zn = 0.1, Jn = 4, to = 14, eo = 4, xe = ["note", "card", "rect", "ellipse", "text", "image"];
function no({
  pointers: t,
  interactionRef: n,
  cameraRef: e,
  toPage: o,
  shapesRef: i,
  setShapes: x,
  setEditingId: l,
  setEraserPos: f,
  setGuides: g,
  setAnnouncement: y,
  applyInteraction: d,
  selectNow: r,
  endHistory: u,
  commit: a,
  onToolChange: c,
  createId: s
}) {
  const h = s;
  xt(() => {
    const z = (w) => {
      t.current.delete(w.pointerId);
      const b = n.current;
      if (b.kind !== "none") {
        if (b.kind === "pinch") {
          t.current.size < 2 && d({ kind: "none" });
          return;
        }
        if (g([]), b.kind === "erasing") {
          f(null), u(), d({ kind: "none" });
          return;
        }
        if (b.kind === "connect") {
          const v = i.current.find((Y) => Y.id === b.fromId);
          if (d({ kind: "none" }), !v) return;
          const M = { x: b.toX, y: b.toY }, S = st(v);
          if (!b.hoverId && Math.hypot(M.x - S.x, M.y - S.y) < 30) return;
          const $ = [];
          let p = b.hoverId;
          if (!p) {
            const Y = v.type === "note" ? 180 : 200, I = v.type === "note" ? 180 : 120, E = {
              ...v,
              id: h(),
              x: M.x - Y / 2,
              y: M.y - I / 2,
              w: Y,
              h: I,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            $.push(E), p = E.id;
          }
          const k = {
            id: h(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: v.id,
            toId: p,
            text: ""
          };
          $.push(k), a((Y) => [...Y, ...$]), r(/* @__PURE__ */ new Set([k.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => l(k.id)) : l(k.id), y("연결 생성됨");
          return;
        }
        if (b.kind === "bend") {
          u(), d({ kind: "none" });
          return;
        }
        if (b.kind === "drawing") {
          x((m) => m.map((v) => {
            if (v.id !== b.id || !v.points) return v;
            const M = v.points.map((k) => k[0]), S = v.points.map((k) => k[1]), $ = Math.min(...M), p = Math.min(...S);
            return { ...v, x: $, y: p, w: Math.max(...M) - $, h: Math.max(...S) - p };
          })), u(), d({ kind: "none" });
          return;
        }
        if (b.kind === "creating") {
          x((m) => m.map((v) => {
            if (v.id !== b.id) return v;
            const M = Math.abs(v.w) < 4 && Math.abs(v.h) < 4 ? {
              ...v,
              w: v.type === "arrow" ? 200 : v.type === "frame" ? 480 : 180,
              h: v.type === "arrow" ? 0 : v.type === "frame" ? 320 : 120
            } : v;
            if (M.type === "arrow") return M;
            const S = pt(M);
            return { ...M, x: S.minX, y: S.minY, w: S.maxX - S.minX, h: S.maxY - S.minY };
          })), u(), r(/* @__PURE__ */ new Set([b.id])), c("select"), d({ kind: "none" });
          return;
        }
        if ((b.kind === "move" || b.kind === "resize" || b.kind === "rotate" || b.kind === "arrow-endpoint") && u(), b.kind === "move" && b.editOnReleaseId && w.type === "pointerup") {
          const m = o(w.clientX, w.clientY);
          Math.hypot(m.x - b.startX, m.y - b.startY) * e.current.z <= eo && l(b.editOnReleaseId);
        }
        d({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", z), window.addEventListener("pointercancel", z), () => {
      window.removeEventListener("pointerup", z), window.removeEventListener("pointercancel", z);
    };
  }, [d, e, s, u, n, c, t, r, y, l, x, i, o]);
}
function oo({
  containerRef: t,
  pointers: n,
  interactionRef: e,
  cameraRef: o,
  shapesRef: i,
  setCamera: x,
  setShapes: l,
  setEraserPos: f,
  setGuides: g,
  applyInteraction: y,
  selectNow: d,
  expandToGroups: r,
  toPage: u
}) {
  xt(() => {
    const a = (c) => {
      var w, b;
      n.current.has(c.pointerId) && n.current.set(c.pointerId, { x: c.clientX, y: c.clientY });
      const s = e.current;
      if (s.kind === "none") return;
      const h = o.current;
      if (s.kind === "pinch") {
        if (n.current.size < 2) return;
        const [m, v] = [...n.current.values()], M = Math.hypot(v.x - m.x, v.y - m.y) || 1, S = (m.x + v.x) / 2, $ = (m.y + v.y) / 2, p = (w = t.current) == null ? void 0 : w.getBoundingClientRect();
        if (!p) return;
        const k = Math.min(Jn, Math.max(Zn, s.startZoom * (M / s.startDist))), Y = s.camX + (s.startMidX - p.left) / s.startZoom, I = s.camY + (s.startMidY - p.top) / s.startZoom;
        x({ x: Y - (S - p.left) / k, y: I - ($ - p.top) / k, z: k });
        return;
      }
      if (s.kind === "pan") {
        x({
          x: s.camX - (c.clientX - s.startX) / h.z,
          y: s.camY - (c.clientY - s.startY) / h.z,
          z: h.z
        });
        return;
      }
      const z = u(c.clientX, c.clientY);
      if (s.kind === "erasing") {
        l((m) => Me(m, z.x, z.y, to / h.z, h.z)), f({ x: z.x, y: z.y });
        return;
      }
      if (s.kind === "connect") {
        const m = i.current, v = new Map(m.map((S) => [S.id, S])), M = [...m].reverse().find((S) => S.id !== s.fromId && xe.includes(S.type) && At(S, z.x, z.y, h.z, v, m));
        y({ ...s, toX: z.x, toY: z.y, hoverId: (M == null ? void 0 : M.id) ?? null });
        return;
      }
      if (s.kind === "bend") {
        const m = i.current, v = m.find((E) => E.id === s.id);
        if (!v) return;
        const M = $t(v, new Map(m.map((E) => [E.id, E])), m), S = M.end.x - M.start.x, $ = M.end.y - M.start.y, p = Math.hypot(S, $) || 1, k = (M.start.x + M.end.x) / 2, Y = (M.start.y + M.end.y) / 2, I = (z.x - k) * (-$ / p) + (z.y - Y) * (S / p);
        l((E) => E.map((P) => P.id === s.id ? { ...P, bend: I } : P));
        return;
      }
      if (s.kind === "arrow-endpoint") {
        const m = i.current, v = m.find((Y) => Y.id === s.id);
        if (!v) return;
        const M = new Map(m.map((Y) => [Y.id, Y])), S = $t(v, M, m), $ = s.endpoint === "start" ? S.end : S.start, p = [...m].reverse().find((Y) => Y.id !== v.id && xe.includes(Y.type) && At(Y, z.x, z.y, h.z, M, m)), k = p ? bt(p, $.x, $.y) : { x: z.x, y: z.y };
        y({ ...s, hoverId: (p == null ? void 0 : p.id) ?? null }), l((Y) => Y.map((I) => {
          if (I.id !== v.id) return I;
          const E = s.endpoint === "start" ? k : $, P = s.endpoint === "end" ? k : $;
          return {
            ...I,
            x: E.x,
            y: E.y,
            w: P.x - E.x,
            h: P.y - E.y,
            fromId: s.endpoint === "start" ? p == null ? void 0 : p.id : I.fromId,
            toId: s.endpoint === "end" ? p == null ? void 0 : p.id : I.toId
          };
        }));
        return;
      }
      if (s.kind === "marquee") {
        y({ ...s, curX: z.x, curY: z.y });
        const m = Math.min(s.startX, z.x), v = Math.max(s.startX, z.x), M = Math.min(s.startY, z.y), S = Math.max(s.startY, z.y), $ = Math.min(s.screenStartX, c.clientX), p = Math.max(s.screenStartX, c.clientX), k = Math.min(s.screenStartY, c.clientY), Y = Math.max(s.screenStartY, c.clientY), I = /* @__PURE__ */ new Map();
        (b = t.current) == null || b.querySelectorAll("[data-canvas-shape-id]").forEach((P) => {
          const C = P.dataset.canvasShapeId;
          C && I.set(C, P.getBoundingClientRect());
        });
        const E = i.current.filter((P) => {
          const C = I.get(P.id);
          if (C)
            return C.right >= $ && C.left <= p && C.bottom >= k && C.top <= Y;
          const L = q(P);
          return L.maxX >= m && L.minX <= v && L.maxY >= M && L.minY <= S;
        }).map((P) => P.id);
        d(r(new Set(E)));
        return;
      }
      if (s.kind === "move") {
        let m = z.x - s.startX, v = z.y - s.startY;
        const M = s.origin, S = (() => {
          let k = 1 / 0, Y = 1 / 0, I = -1 / 0, E = -1 / 0;
          return M.forEach((P) => {
            const C = q({ ...P, x: P.x + m, y: P.y + v });
            k = Math.min(k, C.minX), Y = Math.min(Y, C.minY), I = Math.max(I, C.maxX), E = Math.max(E, C.maxY);
          }), { minX: k, minY: Y, maxX: I, maxY: E };
        })(), $ = i.current.filter((k) => !M.has(k.id)), p = gn(S, $, h.z);
        m += p.dx, v += p.dy, g(p.guides), l((k) => k.map((Y) => {
          var E;
          const I = M.get(Y.id);
          return I ? {
            ...Y,
            x: I.x + m,
            y: I.y + v,
            points: (E = I.points) == null ? void 0 : E.map(([P, C]) => [P + m, C + v])
          } : Y;
        }));
        return;
      }
      if (s.kind === "drawing") {
        l((m) => m.map((v) => {
          if (v.id !== s.id || !v.points) return v;
          const M = v.points[v.points.length - 1];
          return Math.hypot(z.x - M[0], z.y - M[1]) < 2 / h.z ? v : { ...v, points: [...v.points, [z.x, z.y]] };
        }));
        return;
      }
      if (s.kind === "creating") {
        l((m) => m.map((v) => v.id === s.id ? { ...v, w: z.x - s.startX, h: z.y - s.startY } : v));
        return;
      }
      if (s.kind === "rotate") {
        const m = i.current.find(($) => $.id === s.id);
        if (!m) return;
        const v = st(m), M = Math.atan2(z.y - v.y, z.x - v.x);
        let S = s.startRotation + (M - s.startAngle);
        c.shiftKey && (S = Math.round(S / (Math.PI / 12)) * (Math.PI / 12)), l(($) => $.map((p) => p.id === s.id ? { ...p, rotation: S } : p));
        return;
      }
      if (s.kind === "resize") {
        const { start: m, handle: v } = s, M = ze(m, z.x, z.y);
        l((S) => S.map(($) => {
          if ($.id !== m.id) return $;
          let { x: p, y: k, w: Y, h: I } = m;
          if (v.includes("e") && (Y = Math.max(20, M.x - m.x)), v.includes("s") && (I = Math.max(20, M.y - m.y)), v.includes("w")) {
            const E = m.x + m.w;
            p = Math.min(M.x, E - 20), Y = E - p;
          }
          if (v.includes("n")) {
            const E = m.y + m.h;
            k = Math.min(M.y, E - 20), I = E - k;
          }
          return { ...$, x: p, y: k, w: Y, h: I, manualSize: $.type === "text" ? !0 : $.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", a), () => window.removeEventListener("pointermove", a);
  }, [y, t, r, e, n, d, i, u]);
}
function ro(t) {
  oo(t), no(t);
}
function io({
  containerRef: t,
  editorRef: n,
  pointers: e,
  interactionRef: o,
  cameraRef: i,
  shapesRef: x,
  toolRef: l,
  activeColorRef: f,
  camera: g,
  shapes: y,
  selected: d,
  isSpaceDown: r,
  textualTypes: u,
  setCamera: a,
  setShapes: c,
  setEditingId: s,
  setEraserPos: h,
  setGuides: z,
  setAnnouncement: w,
  applyInteraction: b,
  selectNow: m,
  beginHistory: v,
  endHistory: M,
  commit: S,
  onToolChange: $,
  expandToGroups: p,
  toPage: k,
  createId: Y
}) {
  const I = Qn({
    containerRef: t,
    editorRef: n,
    pointers: e,
    cameraRef: i,
    shapesRef: x,
    toolRef: l,
    activeColorRef: f,
    camera: g,
    shapes: y,
    selected: d,
    isSpaceDown: r,
    textualTypes: u,
    setShapes: c,
    setEditingId: s,
    applyInteraction: b,
    selectNow: m,
    beginHistory: v,
    commit: S,
    onToolChange: $,
    expandToGroups: p,
    toPage: k,
    createId: Y
  });
  return ro({
    containerRef: t,
    pointers: e,
    interactionRef: o,
    cameraRef: i,
    shapesRef: x,
    setCamera: a,
    setShapes: c,
    setEditingId: s,
    setEraserPos: h,
    setGuides: z,
    setAnnouncement: w,
    applyInteraction: b,
    selectNow: m,
    endHistory: M,
    commit: S,
    onToolChange: $,
    expandToGroups: p,
    toPage: k,
    createId: Y
  }), I;
}
function ao(t) {
  return Rn(t), Gn(t), io(t);
}
function co({
  isDarkMode: t,
  tool: n,
  isSpaceDown: e,
  interaction: o,
  zoom: i
}) {
  const x = e || o.kind === "pan" ? "grabbing" : n === "hand" ? "grab" : n === "draw" ? "crosshair" : n === "eraser" ? "cell" : n === "select" ? "default" : "crosshair", l = t ? O.gridDark : O.gridLight, f = 40 * i;
  return { cursor: x, gridColor: l, gridSize: f, strokeColorOf: (y) => y.color ? rt[y.color].border : t ? "var(--canvas-slate-200)" : O.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = xn, document.head.appendChild(t);
}
const fe = 0.1, he = 4, ve = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function so(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const ho = Ve(function({
  boardIdentity: n = "standalone",
  isDarkMode: e,
  tool: o,
  onToolChange: i,
  onDirty: x,
  onZoomChange: l,
  onSelectionChange: f,
  shapes: g,
  onShapesChange: y,
  peerCursors: d,
  onLocalCursor: r
}, u) {
  var ce, se;
  const {
    containerRef: a,
    editorRef: c,
    setLocalShapes: s,
    controlled: h,
    shapes: z,
    setShapes: w,
    camera: b,
    setCamera: m,
    cameraRef: v,
    selected: M,
    selectedRef: S,
    editingId: $,
    setEditingId: p,
    editingIdRef: k,
    interaction: Y,
    interactionRef: I,
    applyInteraction: E,
    isSpaceDown: P,
    setIsSpaceDown: C,
    guides: L,
    setGuides: A,
    announcement: V,
    setAnnouncement: W,
    showInspectorPalette: D,
    setShowInspectorPalette: _,
    eraserPos: U,
    setEraserPos: X,
    setActiveColor: F,
    activeColorRef: H,
    installedFontFamilies: Q,
    pointers: ct,
    past: Z,
    future: tt,
    selectNow: ut,
    commit: it,
    deleteSelection: lt,
    beginHistory: ne,
    endHistory: St,
    toPage: zt,
    viewportCentre: _t,
    expandToGroups: Bt,
    toolRef: Ht,
    shapesRef: kt
  } = Bn({ boardIdentity: n, tool: o, controlledShapes: g, onShapesChange: y, onDirty: x }), {
    inspectorShape: Ct,
    onContainerPointerMove: jt,
    onContainerPointerLeave: T
  } = Hn({
    containerRef: a,
    camera: b,
    setCamera: m,
    minZoom: fe,
    maxZoom: he,
    shapes: z,
    selected: M,
    editingId: $,
    textualTypes: ve,
    onZoomChange: l,
    onSelectionChange: f,
    onLocalCursor: r,
    toPage: zt
  }), {
    onPointerDown: j,
    onResizeHandleDown: B,
    onRotateHandleDown: R,
    onConnectHandleDown: ft,
    onBendHandleDown: ht,
    onArrowEndpointDown: Kt
  } = ao({
    ref: u,
    containerRef: a,
    editorRef: c,
    pointers: ct,
    interactionRef: I,
    cameraRef: v,
    shapesRef: kt,
    toolRef: Ht,
    activeColorRef: H,
    camera: b,
    shapes: z,
    selected: M,
    isSpaceDown: P,
    setCamera: m,
    setShapes: w,
    setEditingId: p,
    setEraserPos: X,
    setGuides: A,
    setAnnouncement: W,
    applyInteraction: E,
    selectNow: ut,
    past: Z,
    future: tt,
    beginHistory: ne,
    endHistory: St,
    commit: it,
    deleteSelection: lt,
    onDirty: x,
    onToolChange: i,
    controlled: h,
    isDarkMode: e,
    minZoom: fe,
    maxZoom: he,
    textualTypes: ve,
    selectedRef: S,
    editingIdRef: k,
    setIsSpaceDown: C,
    viewportCentre: _t,
    setLocalShapes: s,
    expandToGroups: Bt,
    toPage: zt,
    createId: so
  }), { cursor: Ne, gridColor: Ie, gridSize: oe, strokeColorOf: Ee } = co({
    isDarkMode: e,
    tool: o,
    isSpaceDown: P,
    interaction: Y,
    zoom: b.z
  }), re = (Be) => {
    const He = S.current, le = k.current, Wt = new Set(He);
    le && Wt.add(le), Wt.size !== 0 && it((je) => je.map((Vt) => Wt.has(Vt.id) ? { ...Vt, ...Be } : Vt));
  }, {
    commitEditorHtml: Le,
    applyFormat: Pe,
    applyList: Fe,
    onEditorKeyDown: Ae,
    applyCustomFontFamily: Te
  } = _n({
    editorRef: c,
    editingId: $,
    setShapes: w,
    setAnnouncement: W,
    onDirty: x,
    patchSelected: re
  }), { renderEditor: De, renderShapeBody: Oe } = Dn({
    camera: b,
    editingId: $,
    isDarkMode: e,
    editorRef: c,
    commitEditorHtml: Le,
    onEditorKeyDown: Ae,
    setShapes: w,
    onDirty: x
  }), _e = Y.kind === "marquee" ? Y : null, { shapeById: ie, visiblePaintOrder: ae } = On({
    containerRef: a,
    shapesRef: kt,
    shapes: z,
    camera: b,
    selected: M,
    editingId: $,
    boardIdentity: n
  });
  return /* @__PURE__ */ K(
    "div",
    {
      ref: a,
      onPointerDown: j,
      onPointerMove: jt,
      onPointerLeave: T,
      role: "application",
      "data-canvas-board-id": n,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": b.x,
      "data-canvas-camera-y": b.y,
      "data-canvas-camera-z": b.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: Ne,
        background: e ? O.canvasDark : O.canvasLight,
        backgroundImage: `radial-gradient(${Ie} 1px, transparent 1px)`,
        backgroundSize: `${oe}px ${oe}px`,
        backgroundPosition: `${-b.x * b.z}px ${-b.y * b.z}px`
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
            children: V
          }
        ),
        /* @__PURE__ */ N(
          wn,
          {
            visiblePaintOrder: ae,
            selected: M,
            shapeById: ie,
            allShapes: kt.current,
            camera: b,
            interaction: Y,
            eraserPos: U,
            guides: L,
            marquee: _e,
            strokeColorOf: Ee
          }
        ),
        /* @__PURE__ */ N(
          An,
          {
            visiblePaintOrder: ae,
            selected: M,
            editingId: $,
            camera: b,
            shapeById: ie,
            allShapes: kt.current,
            peerCursors: d,
            isDarkMode: e,
            renderEditor: De,
            renderShapeBody: Oe,
            setEditingId: p,
            onBendHandleDown: ht,
            onResizeHandleDown: B,
            onRotateHandleDown: R,
            onConnectHandleDown: ft,
            onArrowEndpointDown: Kt
          }
        ),
        Ct && /* @__PURE__ */ N(
          Tn,
          {
            shape: Ct,
            shapes: z,
            camera: b,
            canvasSize: { width: ((ce = a.current) == null ? void 0 : ce.clientWidth) ?? 380, height: ((se = a.current) == null ? void 0 : se.clientHeight) ?? 190 },
            isDarkMode: e,
            editing: !!$,
            showPalette: D,
            installedFontFamilies: Q,
            setShowPalette: _,
            setActiveColor: F,
            patchSelected: re,
            applyFormat: Pe,
            applyList: Fe,
            applyCustomFontFamily: Te
          }
        )
      ]
    }
  );
});
export {
  rt as CANVAS_COLORS,
  qe as CANVAS_COLOR_KEYS,
  dt as CANVAS_FONTS,
  ho as InfiniteCanvas,
  Ze as SHAPE_TOOLS
};
