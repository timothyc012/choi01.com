import { jsx as N, jsxs as K, Fragment as mt } from "react/jsx-runtime";
import _e, { useRef as V, useState as J, useLayoutEffect as Rt, useEffect as xt, useMemo as yt, useCallback as Q, useImperativeHandle as Be, forwardRef as He } from "react";
import { p as je, i as Zt, k as fe, a as nt, v as Ke, c as dt, s as We, b as Re, d as wt, h as Ue, S as Ge } from "./document-BSiBzQk-.js";
import { Palette as Ve, Minus as qe, Plus as Qe, ChevronDown as Ze, AlignLeft as Je, AlignCenter as tn, AlignRight as en, List as nn, ListOrdered as on, Bold as rn, Italic as an, Underline as cn } from "lucide-react";
const sn = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover{background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover{background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', O = Object.freeze({
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
}), ln = 12;
function Ut(t) {
  return t.map((n, e) => `${e === 0 ? "M" : "L"} ${n.x} ${n.y}`).join(" ");
}
function Ct(t, n, e) {
  return !(Math.min(t.x, e.x) > n.x || n.x > Math.max(t.x, e.x) || Math.min(t.y, e.y) > n.y || n.y > Math.max(t.y, e.y));
}
function Nt(t, n, e) {
  return (n.y - t.y) * (e.x - n.x) - (n.x - t.x) * (e.y - n.y);
}
function It(t, n, e, o) {
  const u = Nt(t, n, e), d = Nt(t, n, o), y = Nt(e, o, t), w = Nt(e, o, n);
  return Math.abs(u) < 1e-6 && Ct(t, e, n) || Math.abs(d) < 1e-6 && Ct(t, o, n) || Math.abs(y) < 1e-6 && Ct(e, t, o) || Math.abs(w) < 1e-6 && Ct(e, n, o) ? !0 : u > 0 != d > 0 && y > 0 != w > 0;
}
function dn(t, n, e) {
  const o = Math.min(t.x, n.x), a = Math.max(t.x, n.x), u = Math.min(t.y, n.y), d = Math.max(t.y, n.y);
  if (a < e.minX || o > e.maxX || d < e.minY || u > e.maxY) return !1;
  if (t.x >= e.minX && t.x <= e.maxX && t.y >= e.minY && t.y <= e.maxY || n.x >= e.minX && n.x <= e.maxX && n.y >= e.minY && n.y <= e.maxY) return !0;
  const y = { x: e.minX, y: e.minY }, w = { x: e.maxX, y: e.minY }, v = { x: e.maxX, y: e.maxY }, s = { x: e.minX, y: e.maxY };
  return It(t, n, y, w) || It(t, n, w, v) || It(t, n, v, s) || It(t, n, s, y);
}
function un(t, n) {
  for (let e = 1; e < t.length; e++)
    for (const o of n)
      if (dn(t[e - 1], t[e], o)) return !0;
  return !1;
}
function Gt(t) {
  let n = 0;
  for (let e = 1; e < t.length; e++) n += Math.hypot(t[e].x - t[e - 1].x, t[e].y - t[e - 1].y);
  return n;
}
function he(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const n = Gt(t);
  if (n === 0) return t[0];
  const e = n / 2;
  let o = 0;
  for (let u = 1; u < t.length; u++) {
    const d = Math.hypot(t[u].x - t[u - 1].x, t[u].y - t[u - 1].y);
    if (o + d >= e) {
      const y = (e - o) / d;
      return { x: t[u - 1].x + (t[u].x - t[u - 1].x) * y, y: t[u - 1].y + (t[u].y - t[u - 1].y) * y };
    }
    o += d;
  }
  const a = t[t.length - 1];
  return { x: a.x, y: a.y };
}
function Vt(t, n) {
  return Math.atan2(n.y - t.y, n.x - t.x);
}
function se(t, n, e, o) {
  const a = /* @__PURE__ */ new Set([t, n]), u = Math.min(t, n), d = Math.max(t, n), y = ln * 1.2;
  for (const w of e) {
    const v = (o === "x" ? w.minX : w.minY) - y, s = (o === "x" ? w.maxX : w.maxY) + y, r = (l) => l >= u - y * 4 && l <= d + y * 4;
    r(v) && a.add(v), r(s) && a.add(s);
  }
  return [...a].sort((w, v) => Math.abs(w - t) - Math.abs(v - t));
}
function ve(t) {
  const n = [];
  for (const e of t) {
    const o = n[n.length - 1];
    (!o || o.x !== e.x || o.y !== e.y) && n.push(e);
  }
  return n;
}
function xn(t, n) {
  const e = [], o = [];
  for (const u of t) {
    const d = ve(u);
    d.length < 2 || (un(d, n) ? o.push(d) : e.push(d));
  }
  const a = e.length > 0 ? e : o;
  return a.length === 0 ? [] : a.reduce((u, d) => Gt(d) < Gt(u) ? d : u);
}
function me(t, n, e = []) {
  const o = t.side ?? (Math.abs(n.x - t.x) >= Math.abs(n.y - t.y) ? "e" : "s"), a = n.side ?? (o === "e" || o === "w" ? "w" : "n"), u = o === "e" || o === "w", d = a === "e" || a === "w", y = se(t.x, n.x, e, "x"), w = se(t.y, n.y, e, "y"), v = [];
  if (u && d) {
    for (const s of y) v.push([t, { x: s, y: t.y }, { x: s, y: n.y }, n]);
    for (const s of w) v.push([t, { x: t.x, y: s }, { x: n.x, y: s }, n]);
  } else if (!u && !d) {
    for (const s of w) v.push([t, { x: t.x, y: s }, { x: n.x, y: s }, n]);
    for (const s of y) v.push([t, { x: s, y: t.y }, { x: s, y: n.y }, n]);
  } else if (u) {
    v.push([t, { x: n.x, y: t.y }, n]);
    for (const s of w)
      v.push([t, { x: t.x, y: s }, { x: n.x, y: s }, n]), v.push([t, { x: t.x, y: s }, n]);
    for (const s of y) v.push([t, { x: s, y: t.y }, { x: s, y: n.y }, n]);
  } else {
    v.push([t, { x: t.x, y: n.y }, n]);
    for (const s of w)
      v.push([t, { x: t.x, y: s }, n]), v.push([t, { x: t.x, y: s }, { x: n.x, y: s }, n]);
    for (const s of y) v.push([t, { x: s, y: t.y }, { x: s, y: n.y }, n]);
  }
  return xn(v, e);
}
function fn(t) {
  return t.length < 2 ? 0 : Vt(t[t.length - 2], t[t.length - 1]);
}
function qt(t) {
  if (t.fillColor)
    try {
      return fe(t.fillColor);
    } catch {
    }
  return t.color ? nt[t.color].bg : nt.blue.bg;
}
function hn(t) {
  return t.color ? nt[t.color].border : "#2563eb";
}
function gt(t) {
  if (t.textColor)
    try {
      return fe(t.textColor);
    } catch {
    }
  return t.color ? nt[t.color].text : "#0f172a";
}
function vn(t, n, e) {
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
      const o = n / 2, a = e / 2, u = Math.min(n, e) / 2, d = u * 0.4, y = [];
      for (let w = 0; w < 10; w++) {
        const v = Math.PI / 5 * w - Math.PI / 2, s = w % 2 === 0 ? u : d;
        y.push(`${o + s * Math.cos(v)},${a + s * Math.sin(v)}`);
      }
      return y.join(" ");
    }
    default:
      return "";
  }
}
function pe(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let n = `M ${t[0][0]} ${t[0][1]}`;
  for (let o = 1; o < t.length - 1; o++) {
    const [a, u] = t[o], [d, y] = t[o + 1];
    n += ` Q ${a} ${u} ${(a + d) / 2} ${(u + y) / 2}`;
  }
  const e = t[t.length - 1];
  return `${n} L ${e[0]} ${e[1]}`;
}
function vt(t) {
  return t.replace(/[&<>\"]/g, (n) => n === "&" ? "&amp;" : n === "<" ? "&lt;" : n === ">" ? "&gt;" : "&quot;");
}
function ye(t) {
  const n = document.createElement("template");
  n.innerHTML = t;
  const e = [[]], o = (a, u) => {
    a.childNodes.forEach((d) => {
      if (d.nodeType === Node.TEXT_NODE) {
        const s = d.textContent ?? "";
        s && e[e.length - 1].push({ text: s, ...u });
        return;
      }
      if (d.nodeType !== Node.ELEMENT_NODE) return;
      const y = d;
      if (y.tagName === "BR") {
        e.push([]);
        return;
      }
      const w = { bold: u.bold || y.tagName === "B" || y.tagName === "STRONG", italic: u.italic || y.tagName === "I" || y.tagName === "EM", underline: u.underline || y.tagName === "U" }, v = y.tagName === "DIV" || y.tagName === "P" || y.tagName === "LI";
      v && e[e.length - 1].length > 0 && e.push([]), o(y, w), v && e.push([]);
    });
  };
  return o(n.content, { bold: !1, italic: !1, underline: !1 }), e.filter((a) => a.length > 0);
}
function Tt(t) {
  return t.html ? Zt(t.html) : t.text ? vt(t.text).replace(/\n/g, "<br>") : "";
}
function Qt(t) {
  if (t)
    try {
      return Ke(t);
    } catch {
      return;
    }
}
function Jt(t) {
  try {
    return je(t);
  } catch {
    return null;
  }
}
function At(t) {
  return t.html ? ye(t.html).map((n) => n.map((e) => e.text).join("")).join(`
`) : t.text ?? "";
}
const Et = 12;
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
  const o = st(t), a = Math.cos(n), u = Math.sin(n), d = [
    [e.minX, e.minY],
    [e.maxX, e.minY],
    [e.maxX, e.maxY],
    [e.minX, e.maxY]
  ].map(([v, s]) => {
    const r = v - o.x, l = s - o.y;
    return [o.x + r * a - l * u, o.y + r * u + l * a];
  }), y = d.map((v) => v[0]), w = d.map((v) => v[1]);
  return { minX: Math.min(...y), minY: Math.min(...w), maxX: Math.max(...y), maxY: Math.max(...w) };
}
function ge(t, n, e) {
  const o = t.rotation ?? 0;
  if (!o) return { x: n, y: e };
  const a = st(t), u = Math.cos(-o), d = Math.sin(-o), y = n - a.x, w = e - a.y;
  return { x: a.x + y * u - w * d, y: a.y + y * d + w * u };
}
function Lt(t, n, e, o, a, u) {
  const d = a - e, y = u - o, w = d * d + y * y, v = w === 0 ? 0 : Math.max(0, Math.min(1, ((t - e) * d + (n - o) * y) / w));
  return Math.hypot(t - (e + v * d), n - (o + v * y));
}
function Pt(t, n, e, o, a, u) {
  const d = 8 / o;
  if (t.type === "arrow") {
    const v = $t(t, a ?? /* @__PURE__ */ new Map(), u);
    if (v.routing === "orthogonal" && v.pathPoints && v.pathPoints.length > 1) {
      for (let r = 1; r < v.pathPoints.length; r++) {
        const l = v.pathPoints[r - 1], i = v.pathPoints[r];
        if (Lt(n, e, l.x, l.y, i.x, i.y) <= d) return !0;
      }
      return !1;
    }
    if (v.bend === 0) return Lt(n, e, v.start.x, v.start.y, v.end.x, v.end.y) <= d;
    let s = v.start;
    for (let r = 1; r <= 16; r++) {
      const l = Xt(r / 16, v.start, v.control, v.end);
      if (Lt(n, e, s.x, s.y, l.x, l.y) <= d) return !0;
      s = l;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    for (let v = 1; v < t.points.length; v++) {
      const [s, r] = t.points[v - 1], [l, i] = t.points[v];
      if (Lt(n, e, s, r, l, i) <= d) return !0;
    }
    return !1;
  }
  const y = ge(t, n, e), w = pt(t);
  if (t.type === "frame") {
    const v = y.x >= w.minX - d && y.x <= w.maxX + d && y.y >= w.minY - d && y.y <= w.maxY + d && (y.x <= w.minX + d || y.x >= w.maxX - d || y.y <= w.minY + d || y.y >= w.maxY - d), s = y.x >= w.minX - d && y.x <= w.maxX + d && y.y >= w.minY - 28 / o && y.y <= w.minY;
    return v || s;
  }
  return y.x >= w.minX - d && y.x <= w.maxX + d && y.y >= w.minY - d && y.y <= w.maxY + d;
}
function bt(t, n, e) {
  const o = pt(t), a = (o.minX + o.maxX) / 2, u = (o.minY + o.maxY) / 2, d = n - a, y = e - u;
  if (d === 0 && y === 0) return { x: a, y: u, side: "e" };
  const w = (o.maxX - o.minX) / 2, v = (o.maxY - o.minY) / 2, s = w === 0 ? 1 / 0 : Math.abs(w / d), r = v === 0 ? 1 / 0 : Math.abs(v / y);
  return s <= r ? { x: a + d * s, y: u + y * s, side: d >= 0 ? "e" : "w" } : { x: a + d * r, y: u + y * r, side: y >= 0 ? "s" : "n" };
}
function be(t, n, e, o) {
  const a = /* @__PURE__ */ new Set([n.id, e, o]);
  return t.filter((u) => !a.has(u.id)).map((u) => {
    const d = q(u);
    return { minX: d.minX - Et, minY: d.minY - Et, maxX: d.maxX + Et, maxY: d.maxY + Et };
  }).filter((u) => u.maxX > u.minX && u.maxY > u.minY);
}
function $t(t, n, e = []) {
  const o = t.fromId ? n.get(t.fromId) : void 0, a = t.toId ? n.get(t.toId) : void 0;
  let u = { x: t.x, y: t.y }, d = { x: t.x + t.w, y: t.y + t.h };
  if (o && a) {
    const x = st(o), c = st(a);
    u = bt(o, c.x, c.y), d = bt(a, x.x, x.y);
  } else o ? u = bt(o, d.x, d.y) : a && (d = bt(a, u.x, u.y));
  const y = (u.x + d.x) / 2, w = (u.y + d.y) / 2, v = t.bend ?? 0;
  let s = { x: y, y: w };
  if (v !== 0) {
    const x = d.x - u.x, c = d.y - u.y, f = Math.hypot(x, c) || 1;
    s = { x: y + -c / f * v, y: w + x / f * v };
  }
  const r = !!(o || a), l = t.routing ?? (r ? "orthogonal" : v !== 0 ? "curved" : "straight");
  if (l !== "orthogonal") return { start: u, end: d, control: s, bend: v, routing: l };
  const i = be(e, t, o == null ? void 0 : o.id, a == null ? void 0 : a.id);
  return { start: u, end: d, control: s, bend: v, routing: l, pathPoints: ve(me(u, d, i)) };
}
function Xt(t, n, e, o) {
  const a = 1 - t;
  return { x: a * a * n.x + 2 * a * t * e.x + t * t * o.x, y: a * a * n.y + 2 * a * t * e.y + t * t * o.y };
}
function we(t, n, e, o, a) {
  const u = [];
  let d = 0;
  for (const y of t) {
    if (y.type !== "draw" || !y.points) {
      if (Pt(y, n, e, a)) continue;
      u.push(y);
      continue;
    }
    const w = [];
    let v = [];
    for (const [r, l] of y.points)
      Math.hypot(r - n, l - e) <= o / a ? (v.length > 1 && w.push(v), v = []) : v.push([r, l]);
    if (v.length > 1 && w.push(v), w.length === 0) continue;
    const s = pt(y);
    w.forEach((r) => u.push({ ...y, id: `${y.id}-e${d++}`, points: r, x: s.minX, y: s.minY, w: s.maxX - s.minX, h: s.maxY - s.minY }));
  }
  return u;
}
function mn(t, n, e) {
  const o = 6 / e;
  let a = null, u = null;
  const d = [], y = [t.minX, (t.minX + t.maxX) / 2, t.maxX], w = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const v of n) {
    const s = q(v), r = [s.minX, (s.minX + s.maxX) / 2, s.maxX], l = [s.minY, (s.minY + s.maxY) / 2, s.maxY];
    for (const i of y) for (const x of r) {
      const c = x - i;
      Math.abs(c) <= o && (!a || Math.abs(c) < Math.abs(a.delta)) && (a = { delta: c, at: x });
    }
    for (const i of w) for (const x of l) {
      const c = x - i;
      Math.abs(c) <= o && (!u || Math.abs(c) < Math.abs(u.delta)) && (u = { delta: c, at: x });
    }
  }
  return a && d.push({ x1: a.at, y1: t.minY - 1e3, x2: a.at, y2: t.maxY + 1e3 }), u && d.push({ x1: t.minX - 1e3, y1: u.at, x2: t.maxX + 1e3, y2: u.at }), { dx: (a == null ? void 0 : a.delta) ?? 0, dy: (u == null ? void 0 : u.delta) ?? 0, guides: d };
}
const pn = 14;
function yn({
  visiblePaintOrder: t,
  selected: n,
  shapeById: e,
  allShapes: o,
  camera: a,
  interaction: u,
  eraserPos: d,
  guides: y,
  marquee: w,
  strokeColorOf: v
}) {
  return /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ K("g", { transform: `scale(${a.z}) translate(${-a.x}, ${-a.y})`, children: [
    t.map((s) => {
      if (s.type === "draw" && s.points)
        return /* @__PURE__ */ N(
          "path",
          {
            "data-canvas-vector-shape-id": s.id,
            "data-canvas-vector-shape-type": "draw",
            d: pe(s.points),
            fill: "none",
            stroke: n.has(s.id) ? O.blue : v(s),
            strokeWidth: 3 / a.z,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          s.id
        );
      if (s.type !== "arrow") return null;
      const r = n.has(s.id) ? O.blue : v(s), l = $t(s, e, o), i = 14 / a.z, x = 5 / a.z, c = l.routing === "orthogonal" && l.pathPoints ? l.pathPoints : null, f = c && c.length > 1;
      let z, b;
      if (f)
        z = Ut(c), b = fn(c);
      else if (l.routing === "curved") {
        z = `M ${l.start.x} ${l.start.y} Q ${l.control.x} ${l.control.y} ${l.end.x} ${l.end.y}`;
        const k = Xt(0.94, l.start, l.control, l.end);
        b = Math.atan2(l.end.y - k.y, l.end.x - k.x);
      } else
        z = `M ${l.start.x} ${l.start.y} L ${l.end.x} ${l.end.y}`, b = Math.atan2(l.end.y - l.start.y, l.end.x - l.start.x);
      const g = f && c.length >= 2 ? Vt(c[0], c[1]) : l.routing === "orthogonal" && l.start.side ? l.start.side === "e" ? 0 : l.start.side === "w" ? Math.PI : l.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Vt(l.start, l.end), p = s.strokeStyle === "dashed" ? `${8 / a.z} ${5 / a.z}` : s.strokeStyle === "dotted" ? `${1.5 / a.z} ${4 / a.z}` : void 0, m = (k, S, $, h) => k === "dot" ? /* @__PURE__ */ N("circle", { cx: S, cy: $, r: x, fill: r }) : k === "none" ? null : /* @__PURE__ */ N(
        "polygon",
        {
          points: `${S},${$} ${S - i * Math.cos(h - 0.4)},${$ - i * Math.sin(h - 0.4)} ${S - i * Math.cos(h + 0.4)},${$ - i * Math.sin(h + 0.4)}`,
          fill: r
        }
      );
      return /* @__PURE__ */ K("g", { "data-canvas-vector-shape-id": s.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": l.routing, children: [
        /* @__PURE__ */ N("path", { d: z, fill: "none", stroke: r, strokeWidth: 2.5 / a.z, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: p }),
        m(s.arrowEnd ?? "arrow", l.end.x, l.end.y, b),
        m(s.arrowStart ?? "none", l.start.x, l.start.y, g + Math.PI)
      ] }, s.id);
    }),
    u.kind === "connect" && u.fromId !== void 0 && u.toX !== void 0 && u.toY !== void 0 && (() => {
      const s = e.get(u.fromId);
      if (!s) return null;
      const r = bt(s, u.toX, u.toY), l = u.hoverId ? e.get(u.hoverId) : null, i = l ? bt(l, r.x, r.y) : { x: u.toX, y: u.toY }, x = l ? me(r, i, be(o, { id: "__preview" }, s.id, l.id)) : [r, i];
      return /* @__PURE__ */ K("g", { children: [
        /* @__PURE__ */ N("path", { d: Ut(x), stroke: O.blue, strokeWidth: 2 / a.z, strokeDasharray: `${5 / a.z} ${4 / a.z}` }),
        l ? /* @__PURE__ */ N("rect", { x: q(l).minX - 3 / a.z, y: q(l).minY - 3 / a.z, width: q(l).maxX - q(l).minX + 6 / a.z, height: q(l).maxY - q(l).minY + 6 / a.z, fill: "none", stroke: O.blue, strokeWidth: 2 / a.z, rx: 6 / a.z }) : /* @__PURE__ */ N("circle", { cx: i.x, cy: i.y, r: 5 / a.z, fill: O.blue })
      ] });
    })(),
    d && /* @__PURE__ */ N("circle", { cx: d.x, cy: d.y, r: pn / a.z, fill: O.roseSoft, stroke: O.rose, strokeWidth: 1 / a.z }),
    y.map((s, r) => /* @__PURE__ */ N("line", { x1: s.x1, y1: s.y1, x2: s.x2, y2: s.y2, stroke: O.pink, strokeWidth: 1 / a.z, strokeDasharray: `${4 / a.z} ${4 / a.z}` }, `guide-${r}`)),
    w && /* @__PURE__ */ N("rect", { x: Math.min(w.startX, w.curX), y: Math.min(w.startY, w.curY), width: Math.abs(w.curX - w.startX), height: Math.abs(w.curY - w.startY), fill: O.marqueeFill, stroke: O.blue, strokeWidth: 1 / a.z })
  ] }) });
}
const gn = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], bn = /* @__PURE__ */ new Set([
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
]), wn = [
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
function Dt(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function $e(t) {
  return bn.has(t.trim().toLowerCase());
}
function ze(t) {
  const n = Dt(t);
  return n ? $e(n) ? n : `"${n.replace(/"/g, '\\"')}"` : "";
}
function $n(t) {
  return Dt(t).split(",").map((n) => n.trim()).filter(Boolean).map(ze).filter(Boolean).join(", ");
}
function ke(t) {
  return Dt(t).split(",").map((n) => n.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Mt(t) {
  return t.split(",").map((n) => Dt(n).replace(/^["']|["']$/g, "")).filter(Boolean).filter((n) => !$e(n));
}
const Ft = Array.from(/* @__PURE__ */ new Set([
  ...wn,
  ...Mt(dt.sans.stack),
  ...Mt(dt.serif.stack),
  ...Mt(dt.mono.stack),
  ...Mt(dt.gothic.stack),
  ...Mt(dt.korean.stack)
]));
function zn() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Ft;
  const t = Ft.filter((n) => {
    const e = ze(n);
    return e ? document.fonts.check(`12px ${e}`) : !1;
  });
  return t.length > 0 ? t : Ft;
}
const kn = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, Mn = 24, Xn = 28, Me = 720;
function tt(t) {
  return t.fontSize ?? kn[t.type] ?? 14;
}
function et(t) {
  var n;
  if (!t.fontFamily) return dt.sans.stack;
  if (t.fontFamily === "custom") {
    let e = "";
    try {
      e = ke(We(t.customFontFamily ?? ""));
    } catch {
    }
    return $n(e) || dt.sans.stack;
  }
  return ((n = dt[t.fontFamily]) == null ? void 0 : n.stack) ?? dt.sans.stack;
}
function it(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function Yn(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function Sn(t) {
  var n, e, o;
  if ((n = t.html) != null && n.includes('<ul data-list-style="dash">')) return "dash";
  if ((e = t.html) != null && e.includes("<ul>")) return "bullet";
  if ((o = t.html) != null && o.includes("<ol>")) return "number";
}
function Cn(t, n) {
  return {
    w: Math.min(Me, Math.max(Mn, Math.ceil(t))),
    h: Math.max(Xn, Math.ceil(n))
  };
}
function Nn(t, n) {
  const e = t.cloneNode(!0);
  e.removeAttribute("id"), e.removeAttribute("role"), e.removeAttribute("aria-label"), e.removeAttribute("aria-multiline"), e.removeAttribute("contenteditable"), e.removeAttribute("data-seeded"), e.innerHTML = Zt(t.innerHTML), (e.textContent || "").length === 0 && (e.innerHTML = "&nbsp;"), Object.assign(e.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${Me}px`,
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
    fontSize: `${tt(n)}px`,
    fontFamily: et(n)
  }), document.body.appendChild(e);
  const o = e.getBoundingClientRect();
  return e.remove(), Cn(o.width, o.height);
}
const In = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), En = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function Ln({
  visiblePaintOrder: t,
  selected: n,
  editingId: e,
  camera: o,
  shapeById: a,
  allShapes: u,
  peerCursors: d,
  isDarkMode: y,
  renderEditor: w,
  renderShapeBody: v,
  setEditingId: s,
  onBendHandleDown: r,
  onResizeHandleDown: l,
  onRotateHandleDown: i,
  onConnectHandleDown: x,
  onArrowEndpointDown: c
}) {
  return /* @__PURE__ */ K(mt, { children: [
    /* @__PURE__ */ N("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((f) => {
      if (f.type === "draw") return null;
      if (f.type === "arrow") {
        const g = $t(f, a, u), p = g.routing === "orthogonal" && g.pathPoints ? he(g.pathPoints) : g.routing === "curved" ? Xt(0.5, g.start, g.control, g.end) : { x: (g.start.x + g.end.x) / 2, y: (g.start.y + g.end.y) / 2 }, m = e === f.id, k = Tt(f), S = n.has(f.id), $ = At(f).trim();
        return !k && !m && !S ? null : /* @__PURE__ */ K(_e.Fragment, { children: [
          /* @__PURE__ */ K("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: p.x - 90, top: p.y - 18, width: 180, height: 36 }, onDoubleClick: (h) => {
            h.stopPropagation(), s(f.id);
          }, children: [
            (k || m) && /* @__PURE__ */ N(
              "div",
              {
                "data-canvas-arrow-label": "true",
                "aria-label": $ ? `관계 설명: ${$}` : "관계 설명 입력",
                title: m ? void 0 : $ ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 설명 입력",
                className: `px-3 py-1 rounded-full border-2 shadow-sm ${y ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
                style: {
                  fontSize: tt(f),
                  fontFamily: et(f),
                  maxWidth: "100%",
                  minWidth: m ? 120 / o.z : void 0,
                  minHeight: m ? 28 / o.z : void 0,
                  color: f.textColor
                },
                children: m ? w("text-center whitespace-nowrap") : /* @__PURE__ */ N("span", { dangerouslySetInnerHTML: { __html: k } }, "canvas-view")
              }
            ),
            S && n.size === 1 && /* @__PURE__ */ N("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (h) => r(h, f), title: "드래그해서 곡선으로 (Curve)", className: "absolute z-20 rounded-full bg-white border-2 border-blue-600", style: { width: 10 / o.z, height: 10 / o.z, left: `calc(50% - ${5 / o.z}px)`, top: -10 / o.z, cursor: "grab" } })
          ] }),
          S && n.size === 1 && ["start", "end"].map((h) => {
            const M = h === "start" ? g.start : g.end;
            return /* @__PURE__ */ N(
              "div",
              {
                "data-canvas-arrow-endpoint": h,
                onPointerDown: (X) => c(X, f, h),
                title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)",
                className: "absolute z-20 bg-white border-2 border-blue-600 rounded-full",
                style: { width: 12 / o.z, height: 12 / o.z, left: M.x - 6 / o.z, top: M.y - 6 / o.z, cursor: "grab" }
              },
              h
            );
          })
        ] }, f.id);
      }
      const z = n.has(f.id), b = pt(f);
      return /* @__PURE__ */ K(
        "div",
        {
          "data-canvas-shape-id": f.id,
          "data-canvas-shape-type": f.type,
          "data-canvas-selected": z ? "true" : void 0,
          "data-canvas-text-align": it(f),
          "data-canvas-text-color": f.textColor,
          "data-canvas-font-size": tt(f),
          "data-canvas-font-family": f.fontFamily === "custom" ? f.customFontFamily ?? "custom" : f.fontFamily ?? "sans",
          "data-canvas-manual-size": f.manualSize ? "true" : void 0,
          "data-canvas-group-id": f.groupId,
          "data-canvas-list-kind": Sn(f),
          "data-canvas-x": f.x,
          "data-canvas-y": f.y,
          "data-canvas-width": f.w,
          "data-canvas-height": f.h,
          className: "absolute",
          style: { left: b.minX, top: b.minY, width: b.maxX - b.minX, height: b.maxY - b.minY, transform: f.rotation ? `rotate(${f.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (g) => {
            g.stopPropagation(), In.has(f.type) && s(f.id);
          },
          children: [
            v(f),
            z && /* @__PURE__ */ K(mt, { children: [
              /* @__PURE__ */ N("div", { className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${O.blue}` } }),
              n.size === 1 && /* @__PURE__ */ K(mt, { children: [
                ["nw", "ne", "sw", "se"].map((g) => /* @__PURE__ */ N("div", { "data-canvas-resize-handle": g, onPointerDown: (p) => l(p, f, g), className: "absolute z-20 bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${g}-resize`, left: g.includes("w") ? -5 / o.z : void 0, right: g.includes("e") ? -5 / o.z : void 0, top: g.includes("n") ? -5 / o.z : void 0, bottom: g.includes("s") ? -5 / o.z : void 0 } }, g)),
                /* @__PURE__ */ N("div", { onPointerDown: (g) => i(g, f), title: "회전 (Shift로 15도 단위)", className: "absolute z-20 bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                En.has(f.type) && ["n", "s", "w", "e"].map((g) => /* @__PURE__ */ N("div", { onPointerDown: (p) => x(p, f), title: "드래그해서 연결 (관계 생성)", className: "absolute z-20 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...g === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : g === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : g === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${g}`))
              ] })
            ] })
          ]
        },
        f.id
      );
    }) }),
    u.filter((f) => f.type === "arrow" && n.has(f.id)).map((f) => {
      const z = q(f);
      return /* @__PURE__ */ N("div", { className: "absolute pointer-events-none border-2 border-blue-600/60 rounded", style: { left: (z.minX - o.x) * o.z - 4, top: (z.minY - o.y) * o.z - 4, width: (z.maxX - z.minX) * o.z + 8, height: (z.maxY - z.minY) * o.z + 8 } }, `sel-${f.id}`);
    }),
    d == null ? void 0 : d.map((f) => /* @__PURE__ */ K("div", { className: "absolute pointer-events-none z-40", style: { left: (f.x - o.x) * o.z, top: (f.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ N("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ N("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: f.color, stroke: O.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ N("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: f.color }, children: f.name })
    ] }, f.id))
  ] });
}
function Fn({
  shape: t,
  shapes: n,
  camera: e,
  canvasSize: o,
  isDarkMode: a,
  editing: u,
  showPalette: d,
  installedFontFamilies: y,
  setShowPalette: w,
  setActiveColor: v,
  patchSelected: s,
  applyFormat: r,
  applyList: l,
  applyCustomFontFamily: i
}) {
  var j;
  const x = a ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", c = t.type === "draw", f = c ? t.color ? nt[t.color].border : O.ink : gt(t), z = V(null), [b, g] = J({ width: 380, height: 260 });
  Rt(() => {
    const Y = z.current;
    if (!Y) return;
    const L = () => {
      const R = Math.max(1, Math.ceil(Y.getBoundingClientRect().width)), at = Math.max(1, Math.ceil(Y.getBoundingClientRect().height));
      g((ot) => ot.width === R && ot.height === at ? ot : { width: R, height: at });
    };
    if (L(), typeof ResizeObserver > "u") return;
    const _ = new ResizeObserver(L);
    return _.observe(Y), () => _.disconnect();
  }, [u, y.length, a, t, d]);
  const p = b.width, m = b.height, k = q(t), S = (k.minX - e.x) * e.z, $ = (k.minY - e.y) * e.z, h = (k.maxX - e.x) * e.z, M = (k.maxY - e.y) * e.z, X = Math.max(8, o.width - p - 8), E = Math.max(8, o.height - m - 8), I = (Y, L) => ({ left: Math.min(Math.max(8, Y), X), top: Math.min(Math.max(8, L), E) }), P = [
    I((S + h) / 2 - p / 2, $ - m - 12),
    I((S + h) / 2 - p / 2, M + 12),
    I((o.width - p) / 2, 12),
    I(S - p - 12, $ + (M - $ - m) / 2),
    I(h + 12, $ + (M - $ - m) / 2)
  ], C = n.map((Y) => {
    const L = q(Y);
    return { left: (L.minX - e.x) * e.z, top: (L.minY - e.y) * e.z, right: (L.maxX - e.x) * e.z, bottom: (L.maxY - e.y) * e.z };
  }), F = P[0], T = (Y, L) => {
    const _ = Math.max(0, Math.min(Y.left + p, L.right) - Math.max(Y.left, L.left)), R = Math.max(0, Math.min(Y.top + m, L.bottom) - Math.max(Y.top, L.top));
    return _ * R;
  }, U = ((j = P.map((Y) => ({
    candidate: Y,
    overlap: C.reduce((L, _) => L + T(Y, _), 0),
    distance: Math.hypot(Y.left - F.left, Y.top - F.top)
  })).sort((Y, L) => Y.overlap - L.overlap || Y.distance - L.distance)[0]) == null ? void 0 : j.candidate) ?? F, W = tt(t), D = (Y, L, _, R) => /* @__PURE__ */ N("button", { type: "button", title: R, onClick: _, className: `h-7 px-2 rounded text-[11px] font-bold ${L ? "bg-blue-600 text-white" : x}`, children: Y });
  return /* @__PURE__ */ K("div", { ref: z, "data-canvas-inspector": c ? "draw" : "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${a ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: U.left, top: U.top }, onPointerDown: (Y) => {
    Y.stopPropagation();
    const L = Y.target instanceof Element ? Y.target : null;
    L != null && L.closest("input, select, textarea") || Y.preventDefault();
  }, onClick: (Y) => Y.stopPropagation(), children: [
    /* @__PURE__ */ K("div", { className: "relative flex items-center gap-1.5 pointer-events-none", children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: c ? "그리기" : "색상" }),
      /* @__PURE__ */ N("button", { type: "button", title: c ? "그리기 색상 팔레트" : "색상 팔레트", "aria-label": c ? "그리기 색상" : "도형 색상", onClick: () => w((Y) => !Y), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${a ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ N(Ve, { className: "w-4 h-4", style: { color: f } }) }),
      d && /* @__PURE__ */ K("div", { className: `pointer-events-auto absolute left-0 top-10 z-50 flex items-center gap-1.5 p-2 rounded-xl border shadow-xl ${a ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        Re.map((Y) => /* @__PURE__ */ N("button", { type: "button", title: nt[Y].label, "aria-label": `색 ${nt[Y].label}`, onClick: () => {
          v(Y), s({ color: Y, fillColor: void 0 }), w(!1);
        }, className: "w-5 h-5 rounded-full border", style: { background: nt[Y].bg, borderColor: nt[Y].border, outline: t.color === Y && !t.fillColor ? `2px solid ${O.blue}` : void 0, outlineOffset: 1 } }, Y)),
        !c && /* @__PURE__ */ N("label", { title: "배경 색 (자유 선택)", className: "w-5 h-5 rounded-full border relative overflow-hidden cursor-pointer flex items-center justify-center", style: { background: t.fillColor ?? qt(t), outline: t.fillColor ? `2px solid ${O.blue}` : void 0, outlineOffset: 1 }, children: /* @__PURE__ */ N("input", { type: "color", value: t.fillColor ?? qt(t), onChange: (Y) => {
          s({ fillColor: Y.target.value }), w(!1);
        }, className: "absolute inset-0 opacity-0 cursor-pointer" }) })
      ] })
    ] }),
    !c && /* @__PURE__ */ K(mt, { children: [
      /* @__PURE__ */ K("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
        /* @__PURE__ */ K("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: gt(t), color: O.white, mixBlendMode: "normal" }, children: [
          /* @__PURE__ */ N("span", { "aria-hidden": "true", children: "A" }),
          /* @__PURE__ */ N("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? gt(t), onChange: (Y) => s({ textColor: Y.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
        ] }),
        /* @__PURE__ */ K("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${a ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
          /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => s({ fontSize: Math.max(8, W - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${x}`, children: /* @__PURE__ */ N(qe, { className: "w-3.5 h-3.5" }) }),
          /* @__PURE__ */ N("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: W }),
          /* @__PURE__ */ N("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => s({ fontSize: Math.min(96, W + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${x}`, children: /* @__PURE__ */ N(Qe, { className: "w-3.5 h-3.5" }) })
        ] }),
        /* @__PURE__ */ K("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
          /* @__PURE__ */ N("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (Y) => {
            const L = Yn(Y.target.value);
            s(L === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: L, customFontFamily: void 0 });
          }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${a ? "text-slate-200" : "text-slate-700"}`, children: gn.map((Y) => /* @__PURE__ */ N("option", { value: Y, className: a ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: dt[Y].label }, Y)) }),
          /* @__PURE__ */ N(Ze, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
        ] }),
        t.fontFamily === "custom" && /* @__PURE__ */ K(mt, { children: [
          /* @__PURE__ */ N("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (Y) => i(Y.target.value), onChange: (Y) => Y.currentTarget.value && i(Y.currentTarget.value), onKeyDown: (Y) => {
            Y.key === "Enter" && (Y.preventDefault(), i(Y.currentTarget.value));
          }, onDoubleClick: (Y) => Y.stopPropagation(), onPointerDown: (Y) => Y.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
          /* @__PURE__ */ N("datalist", { id: `canvas-font-families-${t.id}`, children: y.map((Y) => /* @__PURE__ */ N("option", { value: Y }, Y)) })
        ] })
      ] }),
      /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
        /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", Je, "왼쪽 정렬"], ["center", tn, "가운데 정렬"], ["right", en, "오른쪽 정렬"]].map(([Y, L, _]) => /* @__PURE__ */ N("button", { type: "button", "aria-label": _, title: _, onClick: () => s({ textAlign: Y }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${it(t) === Y ? "bg-blue-600 text-white shadow-sm" : x}`, children: /* @__PURE__ */ N(L, { className: "w-4 h-4" }) }, Y)) }),
        u && /* @__PURE__ */ K(mt, { children: [
          /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", nn, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", on, "번호 목록"]].map(([Y, L, _]) => /* @__PURE__ */ N("button", { type: "button", onClick: () => l(Y), "aria-label": _, title: _, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${x}`, children: L ? /* @__PURE__ */ N(L, { className: "w-4 h-4" }) : /* @__PURE__ */ N("span", { className: "text-base leading-none", children: "–" }) }, Y)) }),
          /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: rn, label: "굵게" }, { cmd: "italic", Icon: an, label: "기울임" }, { cmd: "underline", Icon: cn, label: "밑줄" }].map(({ cmd: Y, Icon: L, label: _ }) => /* @__PURE__ */ N("button", { type: "button", onClick: () => r(Y), "aria-label": _, title: _, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${x}`, children: /* @__PURE__ */ N(L, { className: "w-4 h-4" }) }, Y)) })
        ] })
      ] }),
      (t.type === "card" || t.type === "arrow") && /* @__PURE__ */ K("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
        t.type === "card" && /* @__PURE__ */ K(mt, { children: [
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
          /* @__PURE__ */ N("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (Y) => Y.stopPropagation(), onChange: (Y) => s({ category: Y.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${a ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
        ] }),
        t.type === "arrow" && /* @__PURE__ */ K(mt, { children: [
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
          D("직선", (t.routing ?? "straight") === "straight", () => s({ routing: "straight", bend: 0 }), "직선"),
          D("ㄱ", (t.routing ?? "") === "orthogonal", () => s({ routing: "orthogonal", bend: 0 }), "그리드 라우팅 (ㄱ/ㄹ)"),
          D("곡선", (t.routing ?? "") === "curved", () => s({ routing: "curved", bend: t.bend || 60 }), "곡선"),
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
          D("—", (t.strokeStyle ?? "solid") === "solid", () => s({ strokeStyle: "solid" }), "실선"),
          D("- -", t.strokeStyle === "dashed", () => s({ strokeStyle: "dashed" }), "점선(dash)"),
          D("···", t.strokeStyle === "dotted", () => s({ strokeStyle: "dotted" }), "점선(dot)"),
          /* @__PURE__ */ N("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
          D((t.arrowStart ?? "none") === "none" ? "○" : t.arrowStart === "dot" ? "●" : "◀", !0, () => s({ arrowStart: (t.arrowStart ?? "none") === "none" ? "arrow" : t.arrowStart === "arrow" ? "dot" : "none" }), "시작점 표식"),
          D((t.arrowEnd ?? "arrow") === "none" ? "○" : t.arrowEnd === "dot" ? "●" : "▶", !0, () => s({ arrowEnd: (t.arrowEnd ?? "arrow") === "arrow" ? "dot" : t.arrowEnd === "dot" ? "none" : "arrow" }), "끝점 표식")
        ] })
      ] })
    ] })
  ] });
}
function Pn({
  camera: t,
  editingId: n,
  isDarkMode: e,
  editorRef: o,
  commitEditorHtml: a,
  onEditorKeyDown: u,
  setShapes: d,
  onDirty: y
}) {
  const w = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", v = (r, l) => /* @__PURE__ */ N(
    "div",
    {
      ref: o,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": "텍스트 편집",
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onInput: a,
      onBlur: a,
      onPointerDown: (i) => i.stopPropagation(),
      onDoubleClick: (i) => i.stopPropagation(),
      onKeyDown: u,
      className: `${w} ${r}`,
      style: l
    },
    "canvas-editor"
  );
  return { renderEditor: v, renderShapeBody: (r) => {
    const l = nt[r.color ?? "blue"], i = n === r.id, x = Tt(r);
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
              children: i ? v("", { fontSize: 13 / t.z }) : At(r) || "프레임"
            }
          )
        }
      );
    if (r.type === "note")
      return /* @__PURE__ */ N(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: l.bg, borderTop: `6px solid ${l.border}`, color: l.text },
          children: i ? v("font-medium", { color: gt(r), fontSize: tt(r), fontFamily: et(r), textAlign: it(r) }) : x ? /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: gt(r), fontSize: tt(r), fontFamily: et(r), textAlign: it(r) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view") : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: gt(r), fontSize: tt(r), fontFamily: et(r), textAlign: it(r) }, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (r.type === "card") {
      const p = r.cardStyle === "glass";
      return /* @__PURE__ */ K(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: p ? O.glassFill : O.slateCard,
            backdropFilter: p ? "blur(12px)" : void 0,
            WebkitBackdropFilter: p ? "blur(12px)" : void 0,
            border: `1px solid ${p ? O.glassBorder : O.darkBorder}`,
            boxShadow: p ? O.glassShadow : O.cardShadow
          },
          children: [
            /* @__PURE__ */ K(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (m) => m.stopPropagation(),
                onDoubleClick: (m) => m.stopPropagation(),
                onBlur: (m) => {
                  const S = (m.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  d(($) => $.map((h) => h.id === r.id ? { ...h, category: S } : h)), y();
                },
                onKeyDown: (m) => {
                  m.key === "Enter" && (m.preventDefault(), m.currentTarget.blur());
                },
                children: [
                  "[ ",
                  r.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            i ? v("flex-1 font-medium", { color: r.textColor ?? O.white, fontSize: tt(r), fontFamily: et(r), textAlign: it(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: r.textColor ?? O.white, fontSize: tt(r), fontFamily: et(r), textAlign: it(r) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view"),
            /* @__PURE__ */ K("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              r.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (r.type === "text") {
      const p = e ? "text-slate-100" : "text-slate-900", m = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${p}`,
        style: { color: r.textColor, fontSize: tt(r), fontFamily: et(r), textAlign: it(r) }
      };
      return i ? v(`font-medium ${p}`, m.style) : x ? /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-text-view": !0,
          ...m,
          dangerouslySetInnerHTML: { __html: x }
        },
        "canvas-view"
      ) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, ...m, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (r.type === "image") {
      const p = Qt(r.src);
      return p ? /* @__PURE__ */ N(
        "img",
        {
          src: p,
          alt: r.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const c = qt(r), f = hn(r), z = gt(r);
    if (r.type === "triangle" || r.type === "diamond" || r.type === "hexagon" || r.type === "star")
      return /* @__PURE__ */ K("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${r.w} ${r.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ N("polygon", { points: vn(r.type, r.w, r.h), fill: c, stroke: f, strokeWidth: 2, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ N("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: z }, children: i ? v("font-medium", { color: z, fontSize: tt(r), fontFamily: et(r), textAlign: it(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: tt(r), fontFamily: et(r), textAlign: it(r) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view") })
      ] });
    const g = Qt(r.src);
    return /* @__PURE__ */ N(
      "div",
      {
        className: `w-full h-full flex items-center justify-center p-3 ${r.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: c, border: `2px solid ${f}`, color: z },
        children: i ? v("font-medium", { color: z, fontSize: tt(r), fontFamily: et(r), textAlign: it(r) }) : /* @__PURE__ */ K("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: tt(r), fontFamily: et(r), textAlign: it(r) }, children: [
          /* @__PURE__ */ N("div", { dangerouslySetInnerHTML: { __html: x } }),
          g && /* @__PURE__ */ N(
            "a",
            {
              href: g,
              target: "_blank",
              rel: "noreferrer",
              onPointerDown: (p) => p.stopPropagation(),
              className: "block mt-1 text-[11px] underline opacity-70",
              children: "파일 열기"
            }
          )
        ] }, "canvas-view")
      }
    );
  } };
}
function Tn({
  containerRef: t,
  shapesRef: n,
  shapes: e,
  camera: o,
  selected: a,
  editingId: u,
  boardIdentity: d
}) {
  const [y, w] = J({ width: 0, height: 0 });
  xt(() => {
    const x = t.current;
    if (!x) return;
    let c = -1, f = -1;
    const z = (g = x.clientWidth, p = x.clientHeight) => {
      g === c && p === f || (c = g, f = p, w({ width: g, height: p }));
    };
    if (z(), typeof ResizeObserver < "u") {
      const g = new ResizeObserver((p) => {
        var k;
        const m = (k = p[0]) == null ? void 0 : k.contentRect;
        z((m == null ? void 0 : m.width) ?? x.clientWidth, (m == null ? void 0 : m.height) ?? x.clientHeight);
      });
      return g.observe(x), () => g.disconnect();
    }
    const b = () => z();
    return window.addEventListener("resize", b), () => window.removeEventListener("resize", b);
  }, [d, t]);
  const v = yt(() => new Map(e.map((x) => [x.id, x])), [e]), s = yt(
    () => [...e].sort((x, c) => (x.type === "frame" ? -1 : 0) - (c.type === "frame" ? -1 : 0)),
    [e]
  ), r = yt(() => {
    if (!t.current || y.width <= 0 || y.height <= 0) return null;
    const x = 200 / o.z;
    return {
      minX: o.x - x,
      minY: o.y - x,
      maxX: o.x + y.width / o.z + x,
      maxY: o.y + y.height / o.z + x
    };
  }, [o, t, y]), l = Q((x) => {
    if (!r) return !1;
    if (x.id === u || a.has(x.id)) return !0;
    if (x.type === "arrow") {
      const f = $t(x, v, n.current), b = (f.routing === "orthogonal" ? f.pathPoints : null) ?? [f.start, f.end], g = Math.min(...b.map((S) => S.x)), p = Math.max(...b.map((S) => S.x)), m = Math.min(...b.map((S) => S.y)), k = Math.max(...b.map((S) => S.y));
      return p >= r.minX && g <= r.maxX && k >= r.minY && m <= r.maxY;
    }
    const c = q(x);
    return c.maxX >= r.minX && c.minX <= r.maxX && c.maxY >= r.minY && c.minY <= r.maxY;
  }, [u, a, v, n, r]), i = yt(
    () => s.filter(l),
    [l, s]
  );
  return { shapeById: v, visiblePaintOrder: i };
}
function An({
  editorRef: t,
  editingId: n,
  setShapes: e,
  setAnnouncement: o,
  onDirty: a,
  patchSelected: u
}) {
  const d = Q(() => {
    const i = t.current;
    if (!i || !n) return;
    let x;
    try {
      x = Zt(i.innerHTML);
    } catch {
      o("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const c = i.scrollHeight;
    e((f) => f.map((z) => {
      if (z.id !== n) return z;
      const b = { ...z, html: x, text: void 0 };
      if (z.type === "text")
        return z.manualSize ? b : { ...b, ...Nn(i, z) };
      if (z.type === "arrow") return b;
      const g = z.type === "note" ? 32 : z.type === "card" ? 96 : (
        // category header + type footer
        (z.type === "frame", 24)
      ), p = Math.max(z.h, c + g);
      return { ...b, h: p };
    })), a();
  }, [n, a]), y = (i) => {
    var x;
    (x = t.current) == null || x.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(i), d();
  }, w = () => {
    var f;
    const i = (f = window.getSelection()) == null ? void 0 : f.anchorNode, x = i instanceof Element ? i : i == null ? void 0 : i.parentElement, c = x == null ? void 0 : x.closest("ul, ol");
    return c instanceof HTMLElement ? c : null;
  }, v = (i, x, c) => {
    const f = document.createElement(x);
    for (; i.firstChild; ) f.append(i.firstChild);
    return i.replaceWith(f), f;
  }, s = (i) => {
    const x = t.current;
    if (!x) return;
    x.focus();
    const c = w();
    if (i === "number")
      if ((c == null ? void 0 : c.tagName) === "OL")
        c.removeAttribute("data-list-style");
      else if ((c == null ? void 0 : c.tagName) === "UL")
        v(c, "ol");
      else {
        document.execCommand("insertOrderedList");
        const f = w();
        f == null || f.removeAttribute("data-list-style");
      }
    else if ((c == null ? void 0 : c.tagName) === "UL") {
      const f = c.dataset.listStyle;
      i === f ? document.execCommand("insertUnorderedList") : c.dataset.listStyle = i;
    } else {
      (c == null ? void 0 : c.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const f = w();
      f && (f.dataset.listStyle = i);
    }
    d();
  };
  return { commitEditorHtml: d, applyFormat: y, applyList: s, onEditorKeyDown: (i) => {
    if (i.key === "Tab") {
      i.preventDefault(), document.execCommand(i.shiftKey ? "outdent" : "indent"), d();
      return;
    }
    if (i.key === " ") {
      const x = window.getSelection();
      if (x && x.isCollapsed && x.anchorNode) {
        const c = x.anchorNode, f = c.textContent || "", z = x.anchorOffset, b = f.slice(0, z).trim();
        if (!w()) {
          if (b === "-" || b === "–") {
            i.preventDefault(), c.textContent = f.slice(z), s("dash");
            return;
          }
          if (b === "*") {
            i.preventDefault(), c.textContent = f.slice(z), s("bullet");
            return;
          }
          if (b === "1.") {
            i.preventDefault(), c.textContent = f.slice(z), s("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (i) => {
    const x = ke(i);
    if (!x) {
      u({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    u({
      fontFamily: "custom",
      customFontFamily: x
    });
  } };
}
function Dn({
  boardIdentity: t,
  tool: n,
  controlledShapes: e,
  onShapesChange: o,
  onDirty: a
}) {
  const u = V(null), d = V(null), [y, w] = J([]), v = e !== void 0 && o !== void 0, s = V(/* @__PURE__ */ new WeakMap()), r = yt(() => {
    const A = s.current;
    return (v ? e ?? [] : y).map((H) => {
      let B = A.get(H);
      return B === void 0 && (B = Jt(H), A.set(H, B)), B;
    }).filter((H) => H !== null);
  }, [v, e, y]), l = V(o);
  l.current = o;
  const i = Q((A) => {
    const H = l.current;
    if (!H) {
      w(A);
      return;
    }
    H(typeof A == "function" ? A : () => A);
  }, []), [x, c] = J({ x: -400, y: -300, z: 1 }), [f, z] = J(/* @__PURE__ */ new Set()), [b, g] = J(null), [p, m] = J({ kind: "none" }), [k, S] = J(!1), [$, h] = J([]), [M, X] = J(""), [E, I] = J(!1), [P, C] = J(null), [F, T] = J("blue"), [U, W] = J(Ft), D = V(F);
  D.current = F;
  const j = V([]), Y = V([]), L = V(null), _ = V(/* @__PURE__ */ new Map()), R = V(r), at = V(x), ot = V(n), ct = V(f), Z = V(b);
  R.current = r, at.current = x, ot.current = n, ct.current = f, Z.current = b;
  const ut = V({ kind: "none" }), rt = Q((A) => {
    ut.current = A, m(A);
  }, []), lt = Q((A) => {
    ct.current = A, z(A);
  }, []);
  Rt(() => {
    var H;
    const A = /* @__PURE__ */ new Set();
    ct.current = A, Z.current = null, _.current.clear(), j.current = [], Y.current = [], L.current = null, rt({ kind: "none" }), z(A), g(null), S(!1), h([]), C(null), X(""), (H = u.current) == null || H.focus();
  }, [rt, t]), xt(() => {
    let A = !1;
    const H = () => {
      const G = zn();
      A || W(G);
    };
    if (H(), typeof document > "u" || !("fonts" in document)) return;
    const B = () => H();
    return document.fonts.addEventListener("loadingdone", B), () => {
      A = !0, document.fonts.removeEventListener("loadingdone", B);
    };
  }, [t]);
  const Yt = (b ? r.find((A) => A.id === b) : void 0) !== void 0;
  Rt(() => {
    if (!b || !Yt) return;
    const A = () => {
      const B = d.current, G = R.current.find((jt) => jt.id === b);
      if (!B || !G || (B.dataset.seeded !== b && (B.innerHTML = Tt(G), B.dataset.seeded = b), document.activeElement === B)) return;
      B.focus();
      const ft = document.createRange();
      ft.selectNodeContents(B), ft.collapse(!1);
      const ht = window.getSelection();
      ht == null || ht.removeAllRanges(), ht == null || ht.addRange(ft);
    };
    A();
    const H = requestAnimationFrame(A);
    return () => cancelAnimationFrame(H);
  }, [b, Yt]);
  const zt = Q((A) => {
    i((H) => {
      const B = typeof A == "function" ? A(H) : A;
      return j.current.push(H), j.current.length > 100 && j.current.shift(), Y.current = [], B;
    }), a();
  }, [a]), Ot = Q((A) => A.size === 0 ? !1 : (zt((H) => H.filter((B) => A.has(B.id) ? !1 : B.type !== "arrow" ? !0 : !(B.fromId && A.has(B.fromId)) && !(B.toId && A.has(B.toId)))), lt(/* @__PURE__ */ new Set()), X(`${A.size}개 삭제됨`), !0), [zt, lt]), _t = Q(() => {
    L.current = R.current;
  }, []), Bt = Q(() => {
    const A = L.current;
    L.current = null, !(!A || A === R.current) && (j.current.push(A), j.current.length > 100 && j.current.shift(), Y.current = [], a());
  }, [a]), kt = Q((A, H) => {
    var ft;
    const B = (ft = u.current) == null ? void 0 : ft.getBoundingClientRect(), G = at.current;
    return B ? { x: (A - B.left) / G.z + G.x, y: (H - B.top) / G.z + G.y } : { x: 0, y: 0 };
  }, []), St = Q(() => {
    var B;
    const A = (B = u.current) == null ? void 0 : B.getBoundingClientRect(), H = at.current;
    return A ? { x: H.x + A.width / 2 / H.z, y: H.y + A.height / 2 / H.z } : { x: 0, y: 0 };
  }, []), Ht = Q((A) => {
    const H = new Set(R.current.filter((G) => A.has(G.id) && G.groupId).map((G) => G.groupId));
    if (H.size === 0) return A;
    const B = new Set(A);
    for (const G of R.current) G.groupId && H.has(G.groupId) && B.add(G.id);
    return B;
  }, []);
  return {
    containerRef: u,
    editorRef: d,
    localShapes: y,
    setLocalShapes: w,
    controlled: v,
    shapes: r,
    setShapes: i,
    camera: x,
    setCamera: c,
    cameraRef: at,
    selected: f,
    setSelected: z,
    selectedRef: ct,
    editingId: b,
    setEditingId: g,
    editingIdRef: Z,
    interaction: p,
    interactionRef: ut,
    applyInteraction: rt,
    isSpaceDown: k,
    setIsSpaceDown: S,
    guides: $,
    setGuides: h,
    announcement: M,
    setAnnouncement: X,
    showInspectorPalette: E,
    setShowInspectorPalette: I,
    eraserPos: P,
    setEraserPos: C,
    activeColor: F,
    setActiveColor: T,
    activeColorRef: D,
    installedFontFamilies: U,
    pointers: _,
    past: j,
    future: Y,
    selectNow: lt,
    commit: zt,
    deleteSelection: Ot,
    beginHistory: _t,
    endHistory: Bt,
    toPage: kt,
    viewportCentre: St,
    expandToGroups: Ht,
    toolRef: ot,
    shapesRef: R
  };
}
function On({
  containerRef: t,
  camera: n,
  setCamera: e,
  minZoom: o,
  maxZoom: a,
  shapes: u,
  selected: d,
  editingId: y,
  textualTypes: w,
  onZoomChange: v,
  onSelectionChange: s,
  onLocalCursor: r,
  toPage: l
}) {
  xt(() => {
    v == null || v(n.z);
  }, [n.z, v]), xt(() => {
    const b = t.current;
    if (!b) return;
    const g = (p) => {
      if (p.preventDefault(), p.ctrlKey || p.metaKey) {
        const m = b.getBoundingClientRect();
        e((k) => {
          const S = Math.min(a, Math.max(o, k.z * Math.exp(-p.deltaY * 0.01))), $ = p.clientX - m.left, h = p.clientY - m.top;
          return { x: k.x + $ / k.z - $ / S, y: k.y + h / k.z - h / S, z: S };
        });
      } else
        e((m) => ({ ...m, x: m.x + p.deltaX / m.z, y: m.y + p.deltaY / m.z }));
    };
    return b.addEventListener("wheel", g, { passive: !1 }), () => b.removeEventListener("wheel", g);
  }, [t, a, o, e]);
  const i = yt(() => {
    const b = u.filter((g) => d.has(g.id));
    return {
      count: b.length,
      canGroup: b.length > 1,
      canUngroup: b.some((g) => !!g.groupId),
      isTextual: b.length === 1 && w.includes(b[0].type)
    };
  }, [d, u, w]);
  xt(() => {
    s == null || s(i);
  }, [s, i]);
  const x = yt(() => {
    if (y) {
      const p = u.find((m) => m.id === y);
      return p && p.type !== "image" && p.type !== "draw" ? p : null;
    }
    const b = u.filter((p) => d.has(p.id));
    if (b.length > 1 && b.every((p) => p.type === "draw")) return b[0] ?? null;
    if (b.length !== 1) return null;
    const g = b[0];
    return g && g.type !== "image" ? g : null;
  }, [y, d, u]), c = V(0);
  return { selectionInfo: i, inspectorShape: x, onContainerPointerMove: r ? (b) => {
    const g = performance.now();
    g - c.current < 60 || (c.current = g, r(l(b.clientX, b.clientY)));
  } : void 0, onContainerPointerLeave: r ? () => r(null) : void 0 };
}
function _n(t, n) {
  if (t.length === 0) return null;
  let e = 1 / 0, o = 1 / 0, a = -1 / 0, u = -1 / 0;
  for (const r of t) {
    const l = q(r);
    e = Math.min(e, l.minX), o = Math.min(o, l.minY), a = Math.max(a, l.maxX), u = Math.max(u, l.maxY);
  }
  const d = 40, y = a - e + d * 2, w = u - o + d * 2;
  if (!Number.isFinite(y) || !Number.isFinite(w) || y > wt.maxExportDimension || w > wt.maxExportDimension || y * w > wt.maxExportPixels) return null;
  const v = (r, l, i, x, c) => {
    const f = r.fontSize ?? i, z = et(r), b = ye(Tt(r));
    if (b.length === 0) return "";
    const g = pt(r), p = r.textAlign === "right" ? "end" : r.textAlign === "center" ? "middle" : r.textAlign === "left" ? "start" : c, m = p === "end" ? g.maxX - 12 : p === "middle" ? (g.minX + g.maxX) / 2 : g.minX + 12, k = g.minY + f + 12;
    return b.map((S, $) => {
      const h = S.map((M) => `<tspan style="${[
        M.bold ? "font-weight:700" : `font-weight:${x}`,
        M.italic ? "font-style:italic" : "",
        M.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${vt(M.text)}</tspan>`).join("");
      return `<text x="${m}" y="${k + $ * f * 1.4}" font-family="${vt(z)}" font-size="${f}" fill="${l}" text-anchor="${p}">${h}</text>`;
    }).join("");
  }, s = t.map((r) => {
    const l = nt[r.color ?? "blue"], i = pt(r), x = st(r), c = r.rotation ? ` transform="rotate(${r.rotation * 180 / Math.PI} ${x.x} ${x.y})"` : "", f = r.color ? nt[r.color].border : O.ink;
    if (r.type === "draw" && r.points)
      return `<path d="${pe(r.points)}" fill="none" stroke="${f}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    if (r.type === "arrow") {
      const b = $t(r, new Map(t.map((I) => [I.id, I])), t), g = b.routing === "orthogonal" && b.pathPoints && b.pathPoints.length > 1 ? b.pathPoints[b.pathPoints.length - 2] : null, p = b.routing === "orthogonal" && g ? g : Xt(0.94, b.start, b.control, b.end), m = Math.atan2(b.end.y - p.y, b.end.x - p.x), k = 14, S = `${b.end.x - k * Math.cos(m - 0.4)},${b.end.y - k * Math.sin(m - 0.4)}`, $ = `${b.end.x - k * Math.cos(m + 0.4)},${b.end.y - k * Math.sin(m + 0.4)}`, h = b.routing === "orthogonal" && b.pathPoints ? Ut(b.pathPoints) : b.bend === 0 ? `M ${b.start.x} ${b.start.y} L ${b.end.x} ${b.end.y}` : `M ${b.start.x} ${b.start.y} Q ${b.control.x} ${b.control.y} ${b.end.x} ${b.end.y}`, M = b.routing === "orthogonal" && b.pathPoints ? he(b.pathPoints) : b.bend === 0 ? { x: (b.start.x + b.end.x) / 2, y: (b.start.y + b.end.y) / 2 } : Xt(0.5, b.start, b.control, b.end), X = At(r), E = X ? `<text x="${M.x}" y="${M.y - 6}" text-anchor="middle" font-family="${vt(et(r))}" font-size="${r.fontSize ?? 12}" fill="${f}">${vt(X)}</text>` : "";
      return `<path d="${h}" fill="none" stroke="${f}" stroke-width="2.5" stroke-linecap="round"/><polygon points="${b.end.x},${b.end.y} ${S} ${$}" fill="${f}"/>` + E;
    }
    if (r.type === "image" && r.src) {
      const b = Qt(r.src);
      return b ? `<image href="${vt(b)}" x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}"${c}/>` : "";
    }
    if (r.type === "frame")
      return `<g${c}><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" fill="none" stroke="${O.slate400}" stroke-width="2" rx="4"/><text x="${i.minX}" y="${i.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${O.muted}">${vt(r.text ?? "프레임")}</text></g>`;
    if (r.type === "note")
      return `<g${c}><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" fill="${l.bg}"/><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="6" fill="${l.border}"/>` + v(r, l.text, 14, "600", "start") + "</g>";
    if (r.type === "card") {
      const b = r.cardStyle === "glass";
      return `<g${c}><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" rx="16" fill="${b ? O.glassFill : O.slateCard}"/><text x="${i.minX + 16}" y="${i.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${O.slate400}">[ ${vt(r.category ?? "ENTITY")} ]</text>` + v(r, O.white, 16, "700", "start") + "</g>";
    }
    const z = r.type === "ellipse" ? `<ellipse cx="${(i.minX + i.maxX) / 2}" cy="${(i.minY + i.maxY) / 2}" rx="${(i.maxX - i.minX) / 2}" ry="${(i.maxY - i.minY) / 2}" fill="${l.bg}" stroke="${l.border}" stroke-width="2"/>` : `<rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" rx="12" fill="${l.bg}" stroke="${l.border}" stroke-width="2"/>`;
    return `<g${c}>${z}${v(r, l.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${y}" height="${w}" viewBox="${e - d} ${o - d} ${y} ${w}"><rect x="${e - d}" y="${o - d}" width="${y}" height="${w}" fill="${n ? O.canvasDark : O.canvasLight}"/>` + s + "</svg>";
}
async function Bn(t) {
  const n = t();
  if (!n) return null;
  const e = /width="([\d.]+)" height="([\d.]+)"/.exec(n), o = Math.ceil(Number((e == null ? void 0 : e[1]) ?? 1200)), a = Math.ceil(Number((e == null ? void 0 : e[2]) ?? 800)), u = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`, d = new Image();
  d.crossOrigin = "anonymous";
  try {
    await new Promise((l, i) => {
      d.onload = () => l(), d.onerror = () => i(new Error("svg rasterise failed")), d.src = u;
    });
  } catch {
    return null;
  }
  const y = 2, w = o * y, v = a * y;
  if (!Number.isSafeInteger(w) || !Number.isSafeInteger(v) || w > wt.maxExportDimension || v > wt.maxExportDimension || w * v > wt.maxExportPixels) return null;
  const s = document.createElement("canvas");
  s.width = w, s.height = v;
  const r = s.getContext("2d");
  return r ? (r.scale(y, y), r.drawImage(d, 0, 0), new Promise((l) => {
    try {
      s.toBlob((i) => l(i), "image/png");
    } catch {
      l(null);
    }
  })) : null;
}
function Hn(t, n, e) {
  if (t.length < 2) return;
  const o = t.filter(
    (l) => l.type !== "draw" && l.type !== "arrow" && l.type !== "frame" && l.type !== "image"
  );
  if (o.length < 2) return;
  const a = o.map((l, i) => ({
    id: l.id,
    i,
    x: st(l).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: st(l).y,
    vx: 0,
    vy: 0
  }));
  for (let l = 0; l < a.length; l++)
    for (let i = 0; i < l; i++)
      if (Math.abs(a[l].x - a[i].x) < 1 && Math.abs(a[l].y - a[i].y) < 1) {
        const x = 2 * Math.PI * l / a.length;
        a[l].x += Math.cos(x) * 10, a[l].y += Math.sin(x) * 10;
        break;
      }
  const u = new Map(a.map((l) => [l.id, l])), d = [];
  for (const l of t) {
    if (l.type !== "arrow") continue;
    const i = l.fromId ? u.get(l.fromId) : null, x = l.toId ? u.get(l.toId) : null;
    i && x && d.push([i, x]);
  }
  const y = 220, w = y * y, v = 80;
  let s = 400;
  const r = s / v;
  for (let l = 0; l < v; l++) {
    for (let i = 0; i < a.length; i++)
      a[i].vx = 0, a[i].vy = 0;
    for (let i = 0; i < a.length; i++)
      for (let x = i + 1; x < a.length; x++) {
        const c = a[i], f = a[x], z = c.x - f.x, b = c.y - f.y, g = Math.hypot(z, b) || 0.01, p = w / g, m = z / g * p, k = b / g * p;
        c.vx += m, c.vy += k, f.vx -= m, f.vy -= k;
      }
    for (const [i, x] of d) {
      const c = i.x - x.x, f = i.y - x.y, z = Math.hypot(c, f) || 0.01, b = z * z / y, g = c / z * b, p = f / z * b;
      i.vx -= g, i.vy -= p, x.vx += g, x.vy += p;
    }
    for (const i of a) {
      const x = Math.hypot(i.vx, i.vy) || 0.01, c = Math.min(x, s);
      i.x += i.vx / x * c, i.y += i.vy / x * c;
    }
    s = Math.max(0.5, s - r);
  }
  n((l) => l.map((i) => {
    const x = u.get(i.id);
    return x ? { ...i, x: x.x - i.w / 2, y: x.y - i.h / 2 } : i;
  })), e();
}
function jn(t, {
  controlled: n,
  past: e,
  future: o,
  setLocalShapes: a,
  setCamera: u,
  selectNow: d,
  setEditingId: y
}) {
  const w = t;
  if (!w || w.version !== "canvas-v1") return;
  let v;
  try {
    v = Ue({ version: "canvas-v1", shapes: [], camera: w.camera }).camera;
  } catch {
    return;
  }
  !n && Array.isArray(w.shapes) && w.shapes.length <= wt.maxShapes && (e.current = [], o.current = [], a(w.shapes.map(Jt).filter((s) => s !== null))), u(v), d(/* @__PURE__ */ new Set()), y(null);
}
function Kn({
  ref: t,
  containerRef: n,
  shapesRef: e,
  cameraRef: o,
  selectedRef: a,
  past: u,
  future: d,
  controlled: y,
  isDarkMode: w,
  minZoom: v,
  maxZoom: s,
  onToolChange: r,
  onDirty: l,
  commit: i,
  deleteSelection: x,
  selectNow: c,
  viewportCentre: f,
  setShapes: z,
  setLocalShapes: b,
  setCamera: g,
  setEditingId: p,
  setAnnouncement: m,
  createId: k
}) {
  const S = Q((h) => {
    const M = f(), X = Jt({
      id: k(),
      x: h.x ?? M.x - h.w / 2,
      y: h.y ?? M.y - h.h / 2,
      ...h
    });
    if (!X) throw new Error("Canvas could not create a valid shape.");
    return i((E) => [...E, X]), c(/* @__PURE__ */ new Set([X.id])), r("select"), m(`${X.type} 추가됨`), X;
  }, [i, k, r, c, m, f]), $ = Q(() => _n(e.current, w), [w, e]);
  Be(t, () => ({
    addNote: (h) => {
      const M = S({ type: "note", w: 180, h: 180, color: h, text: "" });
      p(M.id);
    },
    addCard: (h, M, X, E) => {
      S({ type: "card", w: 260, h: 150, text: h, category: M, cardStyle: X, color: E });
    },
    addText: () => {
      const h = S({ type: "text", w: 220, h: 44, text: "" });
      p(h.id);
    },
    addShape: (h, M, X) => {
      S({
        type: h,
        w: h === "ellipse" ? 220 : 200,
        h: h === "ellipse" ? 110 : 140,
        color: M,
        text: X ?? ""
      });
    },
    addArrow: () => {
      const h = f(), M = { id: k(), type: "arrow", x: h.x - 140, y: h.y, w: 280, h: 0 };
      i((X) => [...X, M]), c(/* @__PURE__ */ new Set([M.id])), r("select");
    },
    addImage: (h, M, X, E) => {
      S({ type: "image", w: X, h: E, src: h, fileName: M });
    },
    addFileCard: (h, M, X) => {
      S({ type: "rect", w: 260, h: 120, color: "purple", text: X, src: M, fileName: h });
    },
    setTool: r,
    undo: () => {
      const h = u.current.pop();
      h && (d.current.push(e.current), z(h), c(/* @__PURE__ */ new Set()), p(null), l(), m("실행 취소"));
    },
    redo: () => {
      const h = d.current.pop();
      h && (u.current.push(e.current), z(h), c(/* @__PURE__ */ new Set()), p(null), l(), m("다시 실행"));
    },
    deleteSelected: () => {
      x(a.current);
    },
    duplicateSelected: () => {
      var E;
      const h = a.current;
      if (h.size === 0) return;
      const M = [], X = /* @__PURE__ */ new Map();
      for (const I of e.current) {
        if (!h.has(I.id)) continue;
        let P = I.groupId;
        P && (X.has(P) || X.set(P, k("g")), P = X.get(P)), M.push({
          ...I,
          id: k(),
          x: I.x + 24,
          y: I.y + 24,
          groupId: P,
          points: (E = I.points) == null ? void 0 : E.map(([C, F]) => [C + 24, F + 24])
        });
      }
      i((I) => [...I, ...M]), c(new Set(M.map((I) => I.id))), m(`${M.length}개 복제됨`);
    },
    group: () => {
      var X;
      const h = a.current;
      if (h.size < 2) return;
      const M = k("g");
      i((E) => E.map((I) => h.has(I.id) ? { ...I, groupId: M } : I)), m(`${h.size}개 그룹화됨`), (X = n.current) == null || X.focus();
    },
    ungroup: () => {
      var M;
      const h = a.current;
      h.size !== 0 && (i((X) => X.map((E) => h.has(E.id) ? { ...E, groupId: void 0 } : E)), m("그룹 해제됨"), (M = n.current) == null || M.focus());
    },
    zoomBy: (h) => {
      g((M) => {
        var C;
        const X = (C = n.current) == null ? void 0 : C.getBoundingClientRect(), E = Math.min(s, Math.max(v, M.z * h));
        if (!X) return { ...M, z: E };
        const I = M.x + X.width / 2 / M.z, P = M.y + X.height / 2 / M.z;
        return { x: I - X.width / 2 / E, y: P - X.height / 2 / E, z: E };
      });
    },
    zoomTo: (h) => {
      g((M) => {
        var C;
        const X = (C = n.current) == null ? void 0 : C.getBoundingClientRect(), E = Math.min(s, Math.max(v, h));
        if (!X) return { ...M, z: E };
        const I = M.x + X.width / 2 / M.z, P = M.y + X.height / 2 / M.z;
        return { x: I - X.width / 2 / E, y: P - X.height / 2 / E, z: E };
      });
    },
    resetZoom: () => {
      g((h) => {
        var I;
        const M = (I = n.current) == null ? void 0 : I.getBoundingClientRect();
        if (!M) return { ...h, z: 1 };
        const X = h.x + M.width / 2 / h.z, E = h.y + M.height / 2 / h.z;
        return { x: X - M.width / 2, y: E - M.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var T;
      const h = e.current, M = (T = n.current) == null ? void 0 : T.getBoundingClientRect();
      if (h.length === 0 || !M) return;
      let X = 1 / 0, E = 1 / 0, I = -1 / 0, P = -1 / 0;
      for (const U of h) {
        const W = q(U);
        X = Math.min(X, W.minX), E = Math.min(E, W.minY), I = Math.max(I, W.maxX), P = Math.max(P, W.maxY);
      }
      const C = 80, F = Math.min(s, Math.max(
        v,
        Math.min(M.width / (I - X + C * 2), M.height / (P - E + C * 2))
      ));
      g({
        x: (X + I) / 2 - M.width / 2 / F,
        y: (E + P) / 2 - M.height / 2 / F,
        z: F
      });
    },
    autoLayout: () => Hn(e.current, i, () => m("자동 배치 완료")),
    exportSvg: $,
    exportPng: () => Bn($),
    getSnapshot: () => ({ version: "canvas-v1", shapes: e.current, camera: o.current }),
    loadSnapshot: (h) => jn(h, {
      controlled: y,
      past: u,
      future: d,
      setLocalShapes: b,
      setCamera: g,
      selectNow: c,
      setEditingId: p
    })
  }), [
    S,
    $,
    i,
    k,
    x,
    w,
    s,
    v,
    l,
    r,
    c,
    g,
    p,
    b,
    z,
    m,
    f,
    y
  ]);
}
function Wn(t) {
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
function Rn({
  containerRef: t,
  editorRef: n,
  shapesRef: e,
  selectedRef: o,
  editingIdRef: a,
  toolRef: u,
  past: d,
  future: y,
  textualTypes: w,
  setIsSpaceDown: v,
  setEditingId: s,
  setShapes: r,
  setAnnouncement: l,
  commit: i,
  deleteSelection: x,
  selectNow: c,
  onDirty: f,
  onToolChange: z,
  createId: b
}) {
  const g = Q((p, m) => {
    const k = o.current;
    k.size !== 0 && i((S) => S.map(($) => {
      var h;
      return k.has($.id) ? {
        ...$,
        x: $.x + p,
        y: $.y + m,
        points: (h = $.points) == null ? void 0 : h.map(([M, X]) => [M + p, X + m])
      } : $;
    }));
  }, [i, o]);
  xt(() => {
    const p = ($) => {
      const h = $;
      return !!h && (h.tagName === "INPUT" || h.tagName === "TEXTAREA" || h.isContentEditable);
    }, m = ($) => $ instanceof Element && !!$.closest("input, select, button, textarea, option, label, [data-canvas-control]"), k = ($) => {
      var F, T, U, W;
      const h = t.current, M = document.activeElement, X = $.target instanceof Node && !!(h != null && h.contains($.target)), E = !!h && (M === h || h.contains(M));
      if (!X && !E || m($.target)) return;
      if ($.code === "Space" && !p($.target)) {
        v(!0), $.preventDefault();
        return;
      }
      if (p($.target)) {
        if ($.key === "Escape")
          $.preventDefault(), s(null), (F = n.current) == null || F.blur(), (T = t.current) == null || T.focus();
        else if (($.key === "Delete" || $.key === "Backspace") && !a.current) {
          const D = o.current;
          x(D) && $.preventDefault();
        }
        return;
      }
      const I = $.metaKey || $.ctrlKey, P = o.current;
      if (I && $.key.toLowerCase() === "z") {
        if ($.preventDefault(), $.shiftKey) {
          const D = y.current.pop();
          D && (d.current.push(e.current), r(D), f());
        } else {
          const D = d.current.pop();
          D && (y.current.push(e.current), r(D), f());
        }
        c(/* @__PURE__ */ new Set());
        return;
      }
      if (I && $.key.toLowerCase() === "g") {
        if ($.preventDefault(), $.shiftKey)
          P.size > 0 && (i((D) => D.map((j) => P.has(j.id) ? { ...j, groupId: void 0 } : j)), l("그룹 해제됨"));
        else if (P.size > 1) {
          const D = b("g");
          i((j) => j.map((Y) => P.has(Y.id) ? { ...Y, groupId: D } : Y)), l(`${P.size}개 그룹화됨`);
        }
        return;
      }
      if (I && $.key.toLowerCase() === "a") {
        $.preventDefault(), c(new Set(e.current.map((D) => D.id))), l(`전체 ${e.current.length}개 선택됨`);
        return;
      }
      if ($.key === "Delete" || $.key === "Backspace") {
        x(P) && $.preventDefault();
        return;
      }
      if ($.key.startsWith("Arrow")) {
        $.preventDefault();
        const D = $.shiftKey ? 10 : 1;
        $.key === "ArrowLeft" && g(-D, 0), $.key === "ArrowRight" && g(D, 0), $.key === "ArrowUp" && g(0, -D), $.key === "ArrowDown" && g(0, D);
        return;
      }
      if ($.key === "Tab" && e.current.length > 0) {
        $.preventDefault();
        const D = e.current, j = D.findIndex((_) => P.has(_.id)), Y = $.shiftKey ? j <= 0 ? D.length - 1 : j - 1 : j === -1 || j === D.length - 1 ? 0 : j + 1, L = D[Y];
        c(/* @__PURE__ */ new Set([L.id])), l(`${L.type} 선택됨: ${At(L) || "내용 없음"}`);
        return;
      }
      if ($.key === "Enter" && P.size === 1) {
        const D = e.current.find((j) => P.has(j.id));
        D && w.includes(D.type) && ($.preventDefault(), s(D.id));
        return;
      }
      if ($.key === "Escape") {
        if (a.current) {
          $.preventDefault(), s(null), (U = n.current) == null || U.blur(), (W = t.current) == null || W.focus(), z("select");
          return;
        }
        c(/* @__PURE__ */ new Set()), z("select");
        return;
      }
      const C = Wn($);
      C && ($.preventDefault(), u.current = C, z(C));
    }, S = ($) => {
      const h = t.current;
      !h || !(document.activeElement === h || h.contains(document.activeElement)) || $.code === "Space" && v(!1);
    };
    return window.addEventListener("keydown", k), window.addEventListener("keyup", S), () => {
      window.removeEventListener("keydown", k), window.removeEventListener("keyup", S);
    };
  }, [
    i,
    t,
    b,
    x,
    a,
    n,
    y,
    g,
    f,
    z,
    d,
    c,
    o,
    l,
    s,
    v,
    r,
    e,
    w,
    u
  ]);
}
const Un = 400;
function Gn({
  containerRef: t,
  editorRef: n,
  pointers: e,
  cameraRef: o,
  shapesRef: a,
  toolRef: u,
  activeColorRef: d,
  camera: y,
  shapes: w,
  selected: v,
  isSpaceDown: s,
  textualTypes: r,
  setShapes: l,
  setEditingId: i,
  applyInteraction: x,
  selectNow: c,
  beginHistory: f,
  commit: z,
  onToolChange: b,
  expandToGroups: g,
  toPage: p,
  createId: m
}) {
  const k = m, S = V(null), $ = (C, F) => {
    var D;
    const T = ((D = t.current) == null ? void 0 : D.dataset.canvasActiveTool) === "text" ? "text" : u.current;
    if (T !== "note" && T !== "text") return;
    const U = p(C, F), W = T === "note" ? { id: k(), type: "note", x: U.x - 90, y: U.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: k(), type: "text", x: U.x, y: U.y - 22, w: 220, h: 44, text: "" };
    z((j) => [...j, W]), c(/* @__PURE__ */ new Set([W.id])), i(W.id), b("select");
  };
  return xt(() => {
    const C = (F) => {
      var T;
      (T = t.current) != null && T.contains(F.target) && (F.target instanceof Element && F.target.closest('[role="textbox"], [data-canvas-inspector]') || $(F.clientX, F.clientY));
    };
    return window.addEventListener("click", C, !0), () => window.removeEventListener("click", C, !0);
  }), { onPointerDown: (C) => {
    var D, j, Y;
    const F = u.current;
    if (e.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), e.current.size === 2) {
      const [L, _] = [...e.current.values()], R = o.current;
      x({
        kind: "pinch",
        startDist: Math.hypot(_.x - L.x, _.y - L.y) || 1,
        startZoom: R.z,
        startMidX: (L.x + _.x) / 2,
        startMidY: (L.y + _.y) / 2,
        camX: R.x,
        camY: R.y
      });
      return;
    }
    if (e.current.size > 2) return;
    if (C.button === 1 || s || F === "hand" || C.button === 0 && F === "select" && C.altKey) {
      x({ kind: "pan", startX: C.clientX, startY: C.clientY, camX: y.x, camY: y.y });
      return;
    }
    if (C.button !== 0) return;
    const T = p(C.clientX, C.clientY);
    if (i(null), (D = n.current) == null || D.blur(), (j = t.current) == null || j.focus(), F === "draw") {
      const L = { id: k(), type: "draw", x: T.x, y: T.y, w: 0, h: 0, points: [[T.x, T.y]], color: d.current };
      f(), l((_) => [..._, L]), x({ kind: "drawing", id: L.id });
      return;
    }
    if (F === "arrow" || F === "frame" || Ge.includes(F)) {
      const L = F, _ = F === "arrow" ? { id: k(), type: "arrow", x: T.x, y: T.y, w: 0, h: 0, color: d.current } : F === "frame" ? { id: k(), type: "frame", x: T.x, y: T.y, w: 0, h: 0, text: "프레임" } : { id: k(), type: L, x: T.x, y: T.y, w: 0, h: 0, color: d.current, text: "" };
      f(), l((R) => [...R, _]), x({ kind: "creating", id: _.id, startX: T.x, startY: T.y });
      return;
    }
    if (F === "note" || F === "text") return;
    if (F === "eraser") {
      f(), l((L) => we(L, T.x, T.y, 14 / y.z, y.z)), x({ kind: "erasing" });
      return;
    }
    const U = new Map(w.map((L) => [L.id, L])), W = [...w].reverse().find((L) => Pt(L, T.x, T.y, y.z, U, w));
    if (!W)
      S.current = null;
    else {
      const L = Date.now(), _ = !C.shiftKey && r.includes(W.type) && ((Y = S.current) == null ? void 0 : Y.id) === W.id && L - S.current.time < Un, R = _ ? W.id : void 0;
      S.current = _ ? null : { id: W.id, time: L };
      const at = C.shiftKey ? new Set(v).add(W.id) : v.has(W.id) ? v : /* @__PURE__ */ new Set([W.id]), ot = g(at);
      c(ot);
      const ct = /* @__PURE__ */ new Map();
      for (const Z of w) ot.has(Z.id) && ct.set(Z.id, Z);
      for (const Z of w) {
        if (Z.type !== "frame" || !ot.has(Z.id)) continue;
        const ut = q(Z);
        for (const rt of w) {
          if (rt.id === Z.id || ct.has(rt.id)) continue;
          const lt = st(rt);
          lt.x >= ut.minX && lt.x <= ut.maxX && lt.y >= ut.minY && lt.y <= ut.maxY && ct.set(rt.id, rt);
        }
      }
      f(), x({ kind: "move", startX: T.x, startY: T.y, origin: ct, editOnReleaseId: R });
      return;
    }
    C.shiftKey || c(/* @__PURE__ */ new Set()), x({
      kind: "marquee",
      startX: T.x,
      startY: T.y,
      curX: T.x,
      curY: T.y,
      screenStartX: C.clientX,
      screenStartY: C.clientY
    });
  }, onResizeHandleDown: (C, F, T) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), f(), x({ kind: "resize", id: F.id, handle: T, start: F });
  }, onRotateHandleDown: (C, F) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY });
    const T = p(C.clientX, C.clientY), U = st(F);
    f(), x({
      kind: "rotate",
      id: F.id,
      startAngle: Math.atan2(T.y - U.y, T.x - U.x),
      startRotation: F.rotation ?? 0
    });
  }, onConnectHandleDown: (C, F) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY });
    const T = p(C.clientX, C.clientY);
    x({ kind: "connect", fromId: F.id, toX: T.x, toY: T.y, hoverId: null });
  }, onBendHandleDown: (C, F) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), f(), x({ kind: "bend", id: F.id });
  }, onArrowEndpointDown: (C, F, T) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), f(), x({ kind: "arrow-endpoint", id: F.id, endpoint: T, hoverId: null });
  } };
}
const Vn = 0.1, qn = 4, Qn = 14, Zn = 4, le = ["note", "card", "rect", "ellipse", "text", "image"];
function Jn({
  pointers: t,
  interactionRef: n,
  cameraRef: e,
  toPage: o,
  shapesRef: a,
  setShapes: u,
  setEditingId: d,
  setEraserPos: y,
  setGuides: w,
  setAnnouncement: v,
  applyInteraction: s,
  selectNow: r,
  endHistory: l,
  commit: i,
  onToolChange: x,
  createId: c
}) {
  const f = c;
  xt(() => {
    const z = (b) => {
      t.current.delete(b.pointerId);
      const g = n.current;
      if (g.kind !== "none") {
        if (g.kind === "pinch") {
          t.current.size < 2 && s({ kind: "none" });
          return;
        }
        if (w([]), g.kind === "erasing") {
          y(null), l(), s({ kind: "none" });
          return;
        }
        if (g.kind === "connect") {
          const m = a.current.find((X) => X.id === g.fromId);
          if (s({ kind: "none" }), !m) return;
          const k = { x: g.toX, y: g.toY }, S = st(m);
          if (!g.hoverId && Math.hypot(k.x - S.x, k.y - S.y) < 30) return;
          const $ = [];
          let h = g.hoverId;
          if (!h) {
            const X = m.type === "note" ? 180 : 200, E = m.type === "note" ? 180 : 120, I = {
              ...m,
              id: f(),
              x: k.x - X / 2,
              y: k.y - E / 2,
              w: X,
              h: E,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            $.push(I), h = I.id;
          }
          const M = {
            id: f(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: m.id,
            toId: h,
            text: ""
          };
          $.push(M), i((X) => [...X, ...$]), r(/* @__PURE__ */ new Set([M.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => d(M.id)) : d(M.id), v("연결 생성됨");
          return;
        }
        if (g.kind === "bend") {
          l(), s({ kind: "none" });
          return;
        }
        if (g.kind === "drawing") {
          u((p) => p.map((m) => {
            if (m.id !== g.id || !m.points) return m;
            const k = m.points.map((M) => M[0]), S = m.points.map((M) => M[1]), $ = Math.min(...k), h = Math.min(...S);
            return { ...m, x: $, y: h, w: Math.max(...k) - $, h: Math.max(...S) - h };
          })), l(), s({ kind: "none" });
          return;
        }
        if (g.kind === "creating") {
          u((p) => p.map((m) => {
            if (m.id !== g.id) return m;
            const k = Math.abs(m.w) < 4 && Math.abs(m.h) < 4 ? {
              ...m,
              w: m.type === "arrow" ? 200 : m.type === "frame" ? 480 : 180,
              h: m.type === "arrow" ? 0 : m.type === "frame" ? 320 : 120
            } : m;
            if (k.type === "arrow") return k;
            const S = pt(k);
            return { ...k, x: S.minX, y: S.minY, w: S.maxX - S.minX, h: S.maxY - S.minY };
          })), l(), r(/* @__PURE__ */ new Set([g.id])), x("select"), s({ kind: "none" });
          return;
        }
        if ((g.kind === "move" || g.kind === "resize" || g.kind === "rotate" || g.kind === "arrow-endpoint") && l(), g.kind === "move" && g.editOnReleaseId && b.type === "pointerup") {
          const p = o(b.clientX, b.clientY);
          Math.hypot(p.x - g.startX, p.y - g.startY) * e.current.z <= Zn && d(g.editOnReleaseId);
        }
        s({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", z), window.addEventListener("pointercancel", z), () => {
      window.removeEventListener("pointerup", z), window.removeEventListener("pointercancel", z);
    };
  }, [s, e, c, l, n, x, t, r, v, d, u, a, o]);
}
function to({
  containerRef: t,
  pointers: n,
  interactionRef: e,
  cameraRef: o,
  shapesRef: a,
  setCamera: u,
  setShapes: d,
  setEraserPos: y,
  setGuides: w,
  applyInteraction: v,
  selectNow: s,
  expandToGroups: r,
  toPage: l
}) {
  xt(() => {
    const i = (x) => {
      var b, g;
      n.current.has(x.pointerId) && n.current.set(x.pointerId, { x: x.clientX, y: x.clientY });
      const c = e.current;
      if (c.kind === "none") return;
      const f = o.current;
      if (c.kind === "pinch") {
        if (n.current.size < 2) return;
        const [p, m] = [...n.current.values()], k = Math.hypot(m.x - p.x, m.y - p.y) || 1, S = (p.x + m.x) / 2, $ = (p.y + m.y) / 2, h = (b = t.current) == null ? void 0 : b.getBoundingClientRect();
        if (!h) return;
        const M = Math.min(qn, Math.max(Vn, c.startZoom * (k / c.startDist))), X = c.camX + (c.startMidX - h.left) / c.startZoom, E = c.camY + (c.startMidY - h.top) / c.startZoom;
        u({ x: X - (S - h.left) / M, y: E - ($ - h.top) / M, z: M });
        return;
      }
      if (c.kind === "pan") {
        u({
          x: c.camX - (x.clientX - c.startX) / f.z,
          y: c.camY - (x.clientY - c.startY) / f.z,
          z: f.z
        });
        return;
      }
      const z = l(x.clientX, x.clientY);
      if (c.kind === "erasing") {
        d((p) => we(p, z.x, z.y, Qn / f.z, f.z)), y({ x: z.x, y: z.y });
        return;
      }
      if (c.kind === "connect") {
        const p = a.current, m = new Map(p.map((S) => [S.id, S])), k = [...p].reverse().find((S) => S.id !== c.fromId && le.includes(S.type) && Pt(S, z.x, z.y, f.z, m, p));
        v({ ...c, toX: z.x, toY: z.y, hoverId: (k == null ? void 0 : k.id) ?? null });
        return;
      }
      if (c.kind === "bend") {
        const p = a.current, m = p.find((I) => I.id === c.id);
        if (!m) return;
        const k = $t(m, new Map(p.map((I) => [I.id, I])), p), S = k.end.x - k.start.x, $ = k.end.y - k.start.y, h = Math.hypot(S, $) || 1, M = (k.start.x + k.end.x) / 2, X = (k.start.y + k.end.y) / 2, E = (z.x - M) * (-$ / h) + (z.y - X) * (S / h);
        d((I) => I.map((P) => P.id === c.id ? { ...P, bend: E } : P));
        return;
      }
      if (c.kind === "arrow-endpoint") {
        const p = a.current, m = p.find((X) => X.id === c.id);
        if (!m) return;
        const k = new Map(p.map((X) => [X.id, X])), S = $t(m, k, p), $ = c.endpoint === "start" ? S.end : S.start, h = [...p].reverse().find((X) => X.id !== m.id && le.includes(X.type) && Pt(X, z.x, z.y, f.z, k, p)), M = h ? bt(h, $.x, $.y) : { x: z.x, y: z.y };
        v({ ...c, hoverId: (h == null ? void 0 : h.id) ?? null }), d((X) => X.map((E) => {
          if (E.id !== m.id) return E;
          const I = c.endpoint === "start" ? M : $, P = c.endpoint === "end" ? M : $;
          return {
            ...E,
            x: I.x,
            y: I.y,
            w: P.x - I.x,
            h: P.y - I.y,
            fromId: c.endpoint === "start" ? h == null ? void 0 : h.id : E.fromId,
            toId: c.endpoint === "end" ? h == null ? void 0 : h.id : E.toId
          };
        }));
        return;
      }
      if (c.kind === "marquee") {
        v({ ...c, curX: z.x, curY: z.y });
        const p = Math.min(c.startX, z.x), m = Math.max(c.startX, z.x), k = Math.min(c.startY, z.y), S = Math.max(c.startY, z.y), $ = Math.min(c.screenStartX, x.clientX), h = Math.max(c.screenStartX, x.clientX), M = Math.min(c.screenStartY, x.clientY), X = Math.max(c.screenStartY, x.clientY), E = /* @__PURE__ */ new Map();
        (g = t.current) == null || g.querySelectorAll("[data-canvas-shape-id]").forEach((P) => {
          const C = P.dataset.canvasShapeId;
          C && E.set(C, P.getBoundingClientRect());
        });
        const I = a.current.filter((P) => {
          const C = E.get(P.id);
          if (C)
            return C.right >= $ && C.left <= h && C.bottom >= M && C.top <= X;
          const F = q(P);
          return F.maxX >= p && F.minX <= m && F.maxY >= k && F.minY <= S;
        }).map((P) => P.id);
        s(r(new Set(I)));
        return;
      }
      if (c.kind === "move") {
        let p = z.x - c.startX, m = z.y - c.startY;
        const k = c.origin, S = (() => {
          let M = 1 / 0, X = 1 / 0, E = -1 / 0, I = -1 / 0;
          return k.forEach((P) => {
            const C = q({ ...P, x: P.x + p, y: P.y + m });
            M = Math.min(M, C.minX), X = Math.min(X, C.minY), E = Math.max(E, C.maxX), I = Math.max(I, C.maxY);
          }), { minX: M, minY: X, maxX: E, maxY: I };
        })(), $ = a.current.filter((M) => !k.has(M.id)), h = mn(S, $, f.z);
        p += h.dx, m += h.dy, w(h.guides), d((M) => M.map((X) => {
          var I;
          const E = k.get(X.id);
          return E ? {
            ...X,
            x: E.x + p,
            y: E.y + m,
            points: (I = E.points) == null ? void 0 : I.map(([P, C]) => [P + p, C + m])
          } : X;
        }));
        return;
      }
      if (c.kind === "drawing") {
        d((p) => p.map((m) => {
          if (m.id !== c.id || !m.points) return m;
          const k = m.points[m.points.length - 1];
          return Math.hypot(z.x - k[0], z.y - k[1]) < 2 / f.z ? m : { ...m, points: [...m.points, [z.x, z.y]] };
        }));
        return;
      }
      if (c.kind === "creating") {
        d((p) => p.map((m) => m.id === c.id ? { ...m, w: z.x - c.startX, h: z.y - c.startY } : m));
        return;
      }
      if (c.kind === "rotate") {
        const p = a.current.find(($) => $.id === c.id);
        if (!p) return;
        const m = st(p), k = Math.atan2(z.y - m.y, z.x - m.x);
        let S = c.startRotation + (k - c.startAngle);
        x.shiftKey && (S = Math.round(S / (Math.PI / 12)) * (Math.PI / 12)), d(($) => $.map((h) => h.id === c.id ? { ...h, rotation: S } : h));
        return;
      }
      if (c.kind === "resize") {
        const { start: p, handle: m } = c, k = ge(p, z.x, z.y);
        d((S) => S.map(($) => {
          if ($.id !== p.id) return $;
          let { x: h, y: M, w: X, h: E } = p;
          if (m.includes("e") && (X = Math.max(20, k.x - p.x)), m.includes("s") && (E = Math.max(20, k.y - p.y)), m.includes("w")) {
            const I = p.x + p.w;
            h = Math.min(k.x, I - 20), X = I - h;
          }
          if (m.includes("n")) {
            const I = p.y + p.h;
            M = Math.min(k.y, I - 20), E = I - M;
          }
          return { ...$, x: h, y: M, w: X, h: E, manualSize: $.type === "text" ? !0 : $.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", i), () => window.removeEventListener("pointermove", i);
  }, [v, t, r, e, n, s, a, l]);
}
function eo(t) {
  to(t), Jn(t);
}
function no({
  containerRef: t,
  editorRef: n,
  pointers: e,
  interactionRef: o,
  cameraRef: a,
  shapesRef: u,
  toolRef: d,
  activeColorRef: y,
  camera: w,
  shapes: v,
  selected: s,
  isSpaceDown: r,
  textualTypes: l,
  setCamera: i,
  setShapes: x,
  setEditingId: c,
  setEraserPos: f,
  setGuides: z,
  setAnnouncement: b,
  applyInteraction: g,
  selectNow: p,
  beginHistory: m,
  endHistory: k,
  commit: S,
  onToolChange: $,
  expandToGroups: h,
  toPage: M,
  createId: X
}) {
  const E = Gn({
    containerRef: t,
    editorRef: n,
    pointers: e,
    cameraRef: a,
    shapesRef: u,
    toolRef: d,
    activeColorRef: y,
    camera: w,
    shapes: v,
    selected: s,
    isSpaceDown: r,
    textualTypes: l,
    setShapes: x,
    setEditingId: c,
    applyInteraction: g,
    selectNow: p,
    beginHistory: m,
    commit: S,
    onToolChange: $,
    expandToGroups: h,
    toPage: M,
    createId: X
  });
  return eo({
    containerRef: t,
    pointers: e,
    interactionRef: o,
    cameraRef: a,
    shapesRef: u,
    setCamera: i,
    setShapes: x,
    setEditingId: c,
    setEraserPos: f,
    setGuides: z,
    setAnnouncement: b,
    applyInteraction: g,
    selectNow: p,
    endHistory: k,
    commit: S,
    onToolChange: $,
    expandToGroups: h,
    toPage: M,
    createId: X
  }), E;
}
function oo(t) {
  return Kn(t), Rn(t), no(t);
}
function ro({
  isDarkMode: t,
  tool: n,
  isSpaceDown: e,
  interaction: o,
  zoom: a
}) {
  const u = e || o.kind === "pan" ? "grabbing" : n === "hand" ? "grab" : n === "draw" ? "crosshair" : n === "eraser" ? "cell" : n === "select" ? "default" : "crosshair", d = t ? O.gridDark : O.gridLight, y = 40 * a;
  return { cursor: u, gridColor: d, gridSize: y, strokeColorOf: (v) => v.color ? nt[v.color].border : t ? "var(--canvas-slate-200)" : O.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = sn, document.head.appendChild(t);
}
const de = 0.1, ue = 4, xe = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function io(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const uo = He(function({
  boardIdentity: n = "standalone",
  isDarkMode: e,
  tool: o,
  onToolChange: a,
  onDirty: u,
  onZoomChange: d,
  onSelectionChange: y,
  shapes: w,
  onShapesChange: v,
  peerCursors: s,
  onLocalCursor: r
}, l) {
  var ie, ae;
  const {
    containerRef: i,
    editorRef: x,
    setLocalShapes: c,
    controlled: f,
    shapes: z,
    setShapes: b,
    camera: g,
    setCamera: p,
    cameraRef: m,
    selected: k,
    selectedRef: S,
    editingId: $,
    setEditingId: h,
    editingIdRef: M,
    interaction: X,
    interactionRef: E,
    applyInteraction: I,
    isSpaceDown: P,
    setIsSpaceDown: C,
    guides: F,
    setGuides: T,
    announcement: U,
    setAnnouncement: W,
    showInspectorPalette: D,
    setShowInspectorPalette: j,
    eraserPos: Y,
    setEraserPos: L,
    setActiveColor: _,
    activeColorRef: R,
    installedFontFamilies: at,
    pointers: ot,
    past: ct,
    future: Z,
    selectNow: ut,
    commit: rt,
    deleteSelection: lt,
    beginHistory: te,
    endHistory: Yt,
    toPage: zt,
    viewportCentre: Ot,
    expandToGroups: _t,
    toolRef: Bt,
    shapesRef: kt
  } = Dn({ boardIdentity: n, tool: o, controlledShapes: w, onShapesChange: v, onDirty: u }), {
    inspectorShape: St,
    onContainerPointerMove: Ht,
    onContainerPointerLeave: A
  } = On({
    containerRef: i,
    camera: g,
    setCamera: p,
    minZoom: de,
    maxZoom: ue,
    shapes: z,
    selected: k,
    editingId: $,
    textualTypes: xe,
    onZoomChange: d,
    onSelectionChange: y,
    onLocalCursor: r,
    toPage: zt
  }), {
    onPointerDown: H,
    onResizeHandleDown: B,
    onRotateHandleDown: G,
    onConnectHandleDown: ft,
    onBendHandleDown: ht,
    onArrowEndpointDown: jt
  } = oo({
    ref: l,
    containerRef: i,
    editorRef: x,
    pointers: ot,
    interactionRef: E,
    cameraRef: m,
    shapesRef: kt,
    toolRef: Bt,
    activeColorRef: R,
    camera: g,
    shapes: z,
    selected: k,
    isSpaceDown: P,
    setCamera: p,
    setShapes: b,
    setEditingId: h,
    setEraserPos: L,
    setGuides: T,
    setAnnouncement: W,
    applyInteraction: I,
    selectNow: ut,
    past: ct,
    future: Z,
    beginHistory: te,
    endHistory: Yt,
    commit: rt,
    deleteSelection: lt,
    onDirty: u,
    onToolChange: a,
    controlled: f,
    isDarkMode: e,
    minZoom: de,
    maxZoom: ue,
    textualTypes: xe,
    selectedRef: S,
    editingIdRef: M,
    setIsSpaceDown: C,
    viewportCentre: Ot,
    setLocalShapes: c,
    expandToGroups: _t,
    toPage: zt,
    createId: io
  }), { cursor: Xe, gridColor: Ye, gridSize: ee, strokeColorOf: Se } = ro({
    isDarkMode: e,
    tool: o,
    isSpaceDown: P,
    interaction: X,
    zoom: g.z
  }), ne = (Ae) => {
    const De = S.current, ce = M.current, Kt = new Set(De);
    ce && Kt.add(ce), Kt.size !== 0 && rt((Oe) => Oe.map((Wt) => Kt.has(Wt.id) ? { ...Wt, ...Ae } : Wt));
  }, {
    commitEditorHtml: Ce,
    applyFormat: Ne,
    applyList: Ie,
    onEditorKeyDown: Ee,
    applyCustomFontFamily: Le
  } = An({
    editorRef: x,
    editingId: $,
    setShapes: b,
    setAnnouncement: W,
    onDirty: u,
    patchSelected: ne
  }), { renderEditor: Fe, renderShapeBody: Pe } = Pn({
    camera: g,
    editingId: $,
    isDarkMode: e,
    editorRef: x,
    commitEditorHtml: Ce,
    onEditorKeyDown: Ee,
    setShapes: b,
    onDirty: u
  }), Te = X.kind === "marquee" ? X : null, { shapeById: oe, visiblePaintOrder: re } = Tn({
    containerRef: i,
    shapesRef: kt,
    shapes: z,
    camera: g,
    selected: k,
    editingId: $,
    boardIdentity: n
  });
  return /* @__PURE__ */ K(
    "div",
    {
      ref: i,
      onPointerDown: H,
      onPointerMove: Ht,
      onPointerLeave: A,
      role: "application",
      "data-canvas-board-id": n,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": g.x,
      "data-canvas-camera-y": g.y,
      "data-canvas-camera-z": g.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: Xe,
        background: e ? O.canvasDark : O.canvasLight,
        backgroundImage: `radial-gradient(${Ye} 1px, transparent 1px)`,
        backgroundSize: `${ee}px ${ee}px`,
        backgroundPosition: `${-g.x * g.z}px ${-g.y * g.z}px`
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
            children: U
          }
        ),
        /* @__PURE__ */ N(
          yn,
          {
            visiblePaintOrder: re,
            selected: k,
            shapeById: oe,
            allShapes: kt.current,
            camera: g,
            interaction: X,
            eraserPos: Y,
            guides: F,
            marquee: Te,
            strokeColorOf: Se
          }
        ),
        /* @__PURE__ */ N(
          Ln,
          {
            visiblePaintOrder: re,
            selected: k,
            editingId: $,
            camera: g,
            shapeById: oe,
            allShapes: kt.current,
            peerCursors: s,
            isDarkMode: e,
            renderEditor: Fe,
            renderShapeBody: Pe,
            setEditingId: h,
            onBendHandleDown: ht,
            onResizeHandleDown: B,
            onRotateHandleDown: G,
            onConnectHandleDown: ft,
            onArrowEndpointDown: jt
          }
        ),
        St && /* @__PURE__ */ N(
          Fn,
          {
            shape: St,
            shapes: z,
            camera: g,
            canvasSize: { width: ((ie = i.current) == null ? void 0 : ie.clientWidth) ?? 380, height: ((ae = i.current) == null ? void 0 : ae.clientHeight) ?? 190 },
            isDarkMode: e,
            editing: !!$,
            showPalette: D,
            installedFontFamilies: at,
            setShowPalette: j,
            setActiveColor: _,
            patchSelected: ne,
            applyFormat: Ne,
            applyList: Ie,
            applyCustomFontFamily: Le
          }
        )
      ]
    }
  );
});
export {
  nt as CANVAS_COLORS,
  Re as CANVAS_COLOR_KEYS,
  dt as CANVAS_FONTS,
  uo as InfiniteCanvas,
  Ge as SHAPE_TOOLS
};
