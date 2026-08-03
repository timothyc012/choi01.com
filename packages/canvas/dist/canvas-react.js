import { jsx as I, jsxs as B, Fragment as dt } from "react/jsx-runtime";
import { useRef as V, useState as Z, useLayoutEffect as Kt, useEffect as it, useMemo as ut, useCallback as Q, useImperativeHandle as Oe, forwardRef as De } from "react";
import { p as _e, i as qt, k as ue, a as nt, v as Be, c as rt, s as He, b as je, d as ft, h as Ke, S as We } from "./document-BSiBzQk-.js";
import { Palette as Ue, Minus as Ge, Plus as Re, ChevronDown as Ve, AlignLeft as qe, AlignCenter as Qe, AlignRight as Ze, List as Je, ListOrdered as tn, Bold as en, Italic as nn, Underline as on } from "lucide-react";
const rn = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover{background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover{background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', T = Object.freeze({
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
}), an = 12;
function Wt(t) {
  return t.map((n, e) => `${e === 0 ? "M" : "L"} ${n.x} ${n.y}`).join(" ");
}
function Ct(t, n, e) {
  return !(Math.min(t.x, e.x) > n.x || n.x > Math.max(t.x, e.x) || Math.min(t.y, e.y) > n.y || n.y > Math.max(t.y, e.y));
}
function Nt(t, n, e) {
  return (n.y - t.y) * (e.x - n.x) - (n.x - t.x) * (e.y - n.y);
}
function It(t, n, e, i) {
  const u = Nt(t, n, e), d = Nt(t, n, i), h = Nt(e, i, t), m = Nt(e, i, n);
  return Math.abs(u) < 1e-6 && Ct(t, e, n) || Math.abs(d) < 1e-6 && Ct(t, i, n) || Math.abs(h) < 1e-6 && Ct(e, t, i) || Math.abs(m) < 1e-6 && Ct(e, n, i) ? !0 : u > 0 != d > 0 && h > 0 != m > 0;
}
function cn(t, n, e) {
  const i = Math.min(t.x, n.x), c = Math.max(t.x, n.x), u = Math.min(t.y, n.y), d = Math.max(t.y, n.y);
  if (c < e.minX || i > e.maxX || d < e.minY || u > e.maxY) return !1;
  if (t.x >= e.minX && t.x <= e.maxX && t.y >= e.minY && t.y <= e.maxY || n.x >= e.minX && n.x <= e.maxX && n.y >= e.minY && n.y <= e.maxY) return !0;
  const h = { x: e.minX, y: e.minY }, m = { x: e.maxX, y: e.minY }, f = { x: e.maxX, y: e.maxY }, s = { x: e.minX, y: e.maxY };
  return It(t, n, h, m) || It(t, n, m, f) || It(t, n, f, s) || It(t, n, s, h);
}
function sn(t, n) {
  for (let e = 1; e < t.length; e++)
    for (const i of n)
      if (cn(t[e - 1], t[e], i)) return !0;
  return !1;
}
function Ut(t) {
  let n = 0;
  for (let e = 1; e < t.length; e++) n += Math.hypot(t[e].x - t[e - 1].x, t[e].y - t[e - 1].y);
  return n;
}
function xe(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const n = Ut(t);
  if (n === 0) return t[0];
  const e = n / 2;
  let i = 0;
  for (let u = 1; u < t.length; u++) {
    const d = Math.hypot(t[u].x - t[u - 1].x, t[u].y - t[u - 1].y);
    if (i + d >= e) {
      const h = (e - i) / d;
      return { x: t[u - 1].x + (t[u].x - t[u - 1].x) * h, y: t[u - 1].y + (t[u].y - t[u - 1].y) * h };
    }
    i += d;
  }
  const c = t[t.length - 1];
  return { x: c.x, y: c.y };
}
function Gt(t, n) {
  return Math.atan2(n.y - t.y, n.x - t.x);
}
function ce(t, n, e, i) {
  const c = /* @__PURE__ */ new Set([t, n]), u = Math.min(t, n), d = Math.max(t, n), h = an * 1.2;
  for (const m of e) {
    const f = (i === "x" ? m.minX : m.minY) - h, s = (i === "x" ? m.maxX : m.maxY) + h, a = (l) => l >= u - h * 4 && l <= d + h * 4;
    a(f) && c.add(f), a(s) && c.add(s);
  }
  return [...c].sort((m, f) => Math.abs(m - t) - Math.abs(f - t));
}
function fe(t) {
  const n = [];
  for (const e of t) {
    const i = n[n.length - 1];
    (!i || i.x !== e.x || i.y !== e.y) && n.push(e);
  }
  return n;
}
function ln(t, n) {
  const e = [], i = [];
  for (const u of t) {
    const d = fe(u);
    d.length < 2 || (sn(d, n) ? i.push(d) : e.push(d));
  }
  const c = e.length > 0 ? e : i;
  return c.length === 0 ? [] : c.reduce((u, d) => Ut(d) < Ut(u) ? d : u);
}
function he(t, n, e = []) {
  const i = t.side ?? (Math.abs(n.x - t.x) >= Math.abs(n.y - t.y) ? "e" : "s"), c = n.side ?? (i === "e" || i === "w" ? "w" : "n"), u = i === "e" || i === "w", d = c === "e" || c === "w", h = ce(t.x, n.x, e, "x"), m = ce(t.y, n.y, e, "y"), f = [];
  if (u && d) {
    for (const s of h) f.push([t, { x: s, y: t.y }, { x: s, y: n.y }, n]);
    for (const s of m) f.push([t, { x: t.x, y: s }, { x: n.x, y: s }, n]);
  } else if (!u && !d) {
    for (const s of m) f.push([t, { x: t.x, y: s }, { x: n.x, y: s }, n]);
    for (const s of h) f.push([t, { x: s, y: t.y }, { x: s, y: n.y }, n]);
  } else if (u) {
    f.push([t, { x: n.x, y: t.y }, n]);
    for (const s of m)
      f.push([t, { x: t.x, y: s }, { x: n.x, y: s }, n]), f.push([t, { x: t.x, y: s }, n]);
    for (const s of h) f.push([t, { x: s, y: t.y }, { x: s, y: n.y }, n]);
  } else {
    f.push([t, { x: t.x, y: n.y }, n]);
    for (const s of m)
      f.push([t, { x: t.x, y: s }, n]), f.push([t, { x: t.x, y: s }, { x: n.x, y: s }, n]);
    for (const s of h) f.push([t, { x: s, y: t.y }, { x: s, y: n.y }, n]);
  }
  return ln(f, e);
}
function dn(t) {
  return t.length < 2 ? 0 : Gt(t[t.length - 2], t[t.length - 1]);
}
function Rt(t) {
  if (t.fillColor)
    try {
      return ue(t.fillColor);
    } catch {
    }
  return t.color ? nt[t.color].bg : nt.blue.bg;
}
function un(t) {
  return t.color ? nt[t.color].border : "#2563eb";
}
function xt(t) {
  if (t.textColor)
    try {
      return ue(t.textColor);
    } catch {
    }
  return t.color ? nt[t.color].text : "#0f172a";
}
function xn(t, n, e) {
  switch (t) {
    case "triangle":
      return `${n / 2},0 ${n},${e} 0,${e}`;
    case "diamond":
      return `${n / 2},0 ${n},${e / 2} ${n / 2},${e} 0,${e / 2}`;
    case "hexagon": {
      const i = n * 0.25;
      return `${i},0 ${n - i},0 ${n},${e / 2} ${n - i},${e} ${i},${e} 0,${e / 2}`;
    }
    case "star": {
      const i = n / 2, c = e / 2, u = Math.min(n, e) / 2, d = u * 0.4, h = [];
      for (let m = 0; m < 10; m++) {
        const f = Math.PI / 5 * m - Math.PI / 2, s = m % 2 === 0 ? u : d;
        h.push(`${i + s * Math.cos(f)},${c + s * Math.sin(f)}`);
      }
      return h.join(" ");
    }
    default:
      return "";
  }
}
function ve(t) {
  if (t.length === 0) return "";
  if (t.length === 1) return `M ${t[0][0]} ${t[0][1]} L ${t[0][0] + 0.1} ${t[0][1]}`;
  let n = `M ${t[0][0]} ${t[0][1]}`;
  for (let i = 1; i < t.length - 1; i++) {
    const [c, u] = t[i], [d, h] = t[i + 1];
    n += ` Q ${c} ${u} ${(c + d) / 2} ${(u + h) / 2}`;
  }
  const e = t[t.length - 1];
  return `${n} L ${e[0]} ${e[1]}`;
}
function st(t) {
  return t.replace(/[&<>\"]/g, (n) => n === "&" ? "&amp;" : n === "<" ? "&lt;" : n === ">" ? "&gt;" : "&quot;");
}
function me(t) {
  const n = document.createElement("template");
  n.innerHTML = t;
  const e = [[]], i = (c, u) => {
    c.childNodes.forEach((d) => {
      if (d.nodeType === Node.TEXT_NODE) {
        const s = d.textContent ?? "";
        s && e[e.length - 1].push({ text: s, ...u });
        return;
      }
      if (d.nodeType !== Node.ELEMENT_NODE) return;
      const h = d;
      if (h.tagName === "BR") {
        e.push([]);
        return;
      }
      const m = { bold: u.bold || h.tagName === "B" || h.tagName === "STRONG", italic: u.italic || h.tagName === "I" || h.tagName === "EM", underline: u.underline || h.tagName === "U" }, f = h.tagName === "DIV" || h.tagName === "P" || h.tagName === "LI";
      f && e[e.length - 1].length > 0 && e.push([]), i(h, m), f && e.push([]);
    });
  };
  return i(n.content, { bold: !1, italic: !1, underline: !1 }), e.filter((c) => c.length > 0);
}
function Pt(t) {
  return t.html ? qt(t.html) : t.text ? st(t.text).replace(/\n/g, "<br>") : "";
}
function Vt(t) {
  if (t)
    try {
      return Be(t);
    } catch {
      return;
    }
}
function Qt(t) {
  try {
    return _e(t);
  } catch {
    return null;
  }
}
function Tt(t) {
  return t.html ? me(t.html).map((n) => n.map((e) => e.text).join("")).join(`
`) : t.text ?? "";
}
const Et = 12;
function lt(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function ot(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function R(t) {
  const n = t.rotation ?? 0, e = lt(t);
  if (!n) return e;
  const i = ot(t), c = Math.cos(n), u = Math.sin(n), d = [
    [e.minX, e.minY],
    [e.maxX, e.minY],
    [e.maxX, e.maxY],
    [e.minX, e.maxY]
  ].map(([f, s]) => {
    const a = f - i.x, l = s - i.y;
    return [i.x + a * c - l * u, i.y + a * u + l * c];
  }), h = d.map((f) => f[0]), m = d.map((f) => f[1]);
  return { minX: Math.min(...h), minY: Math.min(...m), maxX: Math.max(...h), maxY: Math.max(...m) };
}
function pe(t, n, e) {
  const i = t.rotation ?? 0;
  if (!i) return { x: n, y: e };
  const c = ot(t), u = Math.cos(-i), d = Math.sin(-i), h = n - c.x, m = e - c.y;
  return { x: c.x + h * u - m * d, y: c.y + h * d + m * u };
}
function Ft(t, n, e, i, c, u) {
  const d = c - e, h = u - i, m = d * d + h * h, f = m === 0 ? 0 : Math.max(0, Math.min(1, ((t - e) * d + (n - i) * h) / m));
  return Math.hypot(t - (e + f * d), n - (i + f * h));
}
function Zt(t, n, e, i, c, u) {
  const d = 8 / i;
  if (t.type === "arrow") {
    const f = yt(t, c ?? /* @__PURE__ */ new Map(), u);
    if (f.routing === "orthogonal" && f.pathPoints && f.pathPoints.length > 1) {
      for (let a = 1; a < f.pathPoints.length; a++) {
        const l = f.pathPoints[a - 1], r = f.pathPoints[a];
        if (Ft(n, e, l.x, l.y, r.x, r.y) <= d) return !0;
      }
      return !1;
    }
    if (f.bend === 0) return Ft(n, e, f.start.x, f.start.y, f.end.x, f.end.y) <= d;
    let s = f.start;
    for (let a = 1; a <= 16; a++) {
      const l = zt(a / 16, f.start, f.control, f.end);
      if (Ft(n, e, s.x, s.y, l.x, l.y) <= d) return !0;
      s = l;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    for (let f = 1; f < t.points.length; f++) {
      const [s, a] = t.points[f - 1], [l, r] = t.points[f];
      if (Ft(n, e, s, a, l, r) <= d) return !0;
    }
    return !1;
  }
  const h = pe(t, n, e), m = lt(t);
  if (t.type === "frame") {
    const f = h.x >= m.minX - d && h.x <= m.maxX + d && h.y >= m.minY - d && h.y <= m.maxY + d && (h.x <= m.minX + d || h.x >= m.maxX - d || h.y <= m.minY + d || h.y >= m.maxY - d), s = h.x >= m.minX - d && h.x <= m.maxX + d && h.y >= m.minY - 28 / i && h.y <= m.minY;
    return f || s;
  }
  return h.x >= m.minX - d && h.x <= m.maxX + d && h.y >= m.minY - d && h.y <= m.maxY + d;
}
function pt(t, n, e) {
  const i = lt(t), c = (i.minX + i.maxX) / 2, u = (i.minY + i.maxY) / 2, d = n - c, h = e - u;
  if (d === 0 && h === 0) return { x: c, y: u, side: "e" };
  const m = (i.maxX - i.minX) / 2, f = (i.maxY - i.minY) / 2, s = m === 0 ? 1 / 0 : Math.abs(m / d), a = f === 0 ? 1 / 0 : Math.abs(f / h);
  return s <= a ? { x: c + d * s, y: u + h * s, side: d >= 0 ? "e" : "w" } : { x: c + d * a, y: u + h * a, side: h >= 0 ? "s" : "n" };
}
function ye(t, n, e, i) {
  const c = /* @__PURE__ */ new Set([n.id, e, i]);
  return t.filter((u) => !c.has(u.id)).map((u) => {
    const d = R(u);
    return { minX: d.minX - Et, minY: d.minY - Et, maxX: d.maxX + Et, maxY: d.maxY + Et };
  }).filter((u) => u.maxX > u.minX && u.maxY > u.minY);
}
function yt(t, n, e = []) {
  const i = t.fromId ? n.get(t.fromId) : void 0, c = t.toId ? n.get(t.toId) : void 0;
  let u = { x: t.x, y: t.y }, d = { x: t.x + t.w, y: t.y + t.h };
  if (i && c) {
    const v = ot(i), o = ot(c);
    u = pt(i, o.x, o.y), d = pt(c, v.x, v.y);
  } else i ? u = pt(i, d.x, d.y) : c && (d = pt(c, u.x, u.y));
  const h = (u.x + d.x) / 2, m = (u.y + d.y) / 2, f = t.bend ?? 0;
  let s = { x: h, y: m };
  if (f !== 0) {
    const v = d.x - u.x, o = d.y - u.y, X = Math.hypot(v, o) || 1;
    s = { x: h + -o / X * f, y: m + v / X * f };
  }
  const a = !!(i || c), l = t.routing ?? (a ? "orthogonal" : f !== 0 ? "curved" : "straight");
  if (l !== "orthogonal") return { start: u, end: d, control: s, bend: f, routing: l };
  const r = ye(e, t, i == null ? void 0 : i.id, c == null ? void 0 : c.id);
  return { start: u, end: d, control: s, bend: f, routing: l, pathPoints: fe(he(u, d, r)) };
}
function zt(t, n, e, i) {
  const c = 1 - t;
  return { x: c * c * n.x + 2 * c * t * e.x + t * t * i.x, y: c * c * n.y + 2 * c * t * e.y + t * t * i.y };
}
function ge(t, n, e, i, c) {
  const u = [];
  let d = 0;
  for (const h of t) {
    if (h.type !== "draw" || !h.points) {
      if (Zt(h, n, e, c)) continue;
      u.push(h);
      continue;
    }
    const m = [];
    let f = [];
    for (const [a, l] of h.points)
      Math.hypot(a - n, l - e) <= i / c ? (f.length > 1 && m.push(f), f = []) : f.push([a, l]);
    if (f.length > 1 && m.push(f), m.length === 0) continue;
    const s = lt(h);
    m.forEach((a) => u.push({ ...h, id: `${h.id}-e${d++}`, points: a, x: s.minX, y: s.minY, w: s.maxX - s.minX, h: s.maxY - s.minY }));
  }
  return u;
}
function fn(t, n, e) {
  const i = 6 / e;
  let c = null, u = null;
  const d = [], h = [t.minX, (t.minX + t.maxX) / 2, t.maxX], m = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const f of n) {
    const s = R(f), a = [s.minX, (s.minX + s.maxX) / 2, s.maxX], l = [s.minY, (s.minY + s.maxY) / 2, s.maxY];
    for (const r of h) for (const v of a) {
      const o = v - r;
      Math.abs(o) <= i && (!c || Math.abs(o) < Math.abs(c.delta)) && (c = { delta: o, at: v });
    }
    for (const r of m) for (const v of l) {
      const o = v - r;
      Math.abs(o) <= i && (!u || Math.abs(o) < Math.abs(u.delta)) && (u = { delta: o, at: v });
    }
  }
  return c && d.push({ x1: c.at, y1: t.minY - 1e3, x2: c.at, y2: t.maxY + 1e3 }), u && d.push({ x1: t.minX - 1e3, y1: u.at, x2: t.maxX + 1e3, y2: u.at }), { dx: (c == null ? void 0 : c.delta) ?? 0, dy: (u == null ? void 0 : u.delta) ?? 0, guides: d };
}
const hn = 14;
function vn({
  visiblePaintOrder: t,
  selected: n,
  shapeById: e,
  allShapes: i,
  camera: c,
  interaction: u,
  eraserPos: d,
  guides: h,
  marquee: m,
  strokeColorOf: f
}) {
  return /* @__PURE__ */ I("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ B("g", { transform: `scale(${c.z}) translate(${-c.x}, ${-c.y})`, children: [
    t.map((s) => {
      if (s.type === "draw" && s.points)
        return /* @__PURE__ */ I(
          "path",
          {
            "data-canvas-vector-shape-id": s.id,
            "data-canvas-vector-shape-type": "draw",
            d: ve(s.points),
            fill: "none",
            stroke: n.has(s.id) ? T.blue : f(s),
            strokeWidth: 3 / c.z,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          s.id
        );
      if (s.type !== "arrow") return null;
      const a = n.has(s.id) ? T.blue : f(s), l = yt(s, e, i), r = 14 / c.z, v = 5 / c.z, o = l.routing === "orthogonal" && l.pathPoints ? l.pathPoints : null, X = o && o.length > 1;
      let w, x;
      if (X)
        w = Wt(o), x = dn(o);
      else if (l.routing === "curved") {
        w = `M ${l.start.x} ${l.start.y} Q ${l.control.x} ${l.control.y} ${l.end.x} ${l.end.y}`;
        const M = zt(0.94, l.start, l.control, l.end);
        x = Math.atan2(l.end.y - M.y, l.end.x - M.x);
      } else
        w = `M ${l.start.x} ${l.start.y} L ${l.end.x} ${l.end.y}`, x = Math.atan2(l.end.y - l.start.y, l.end.x - l.start.x);
      const $ = X && o.length >= 2 ? Gt(o[0], o[1]) : l.routing === "orthogonal" && l.start.side ? l.start.side === "e" ? 0 : l.start.side === "w" ? Math.PI : l.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Gt(l.start, l.end), p = s.strokeStyle === "dashed" ? `${8 / c.z} ${5 / c.z}` : s.strokeStyle === "dotted" ? `${1.5 / c.z} ${4 / c.z}` : void 0, g = (M, E, z, b) => M === "dot" ? /* @__PURE__ */ I("circle", { cx: E, cy: z, r: v, fill: a }) : M === "none" ? null : /* @__PURE__ */ I(
        "polygon",
        {
          points: `${E},${z} ${E - r * Math.cos(b - 0.4)},${z - r * Math.sin(b - 0.4)} ${E - r * Math.cos(b + 0.4)},${z - r * Math.sin(b + 0.4)}`,
          fill: a
        }
      );
      return /* @__PURE__ */ B("g", { "data-canvas-vector-shape-id": s.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": l.routing, children: [
        /* @__PURE__ */ I("path", { d: w, fill: "none", stroke: a, strokeWidth: 2.5 / c.z, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: p }),
        g(s.arrowEnd ?? "arrow", l.end.x, l.end.y, x),
        g(s.arrowStart ?? "none", l.start.x, l.start.y, $ + Math.PI)
      ] }, s.id);
    }),
    u.kind === "connect" && u.fromId !== void 0 && u.toX !== void 0 && u.toY !== void 0 && (() => {
      const s = e.get(u.fromId);
      if (!s) return null;
      const a = pt(s, u.toX, u.toY), l = u.hoverId ? e.get(u.hoverId) : null, r = l ? pt(l, a.x, a.y) : { x: u.toX, y: u.toY }, v = l ? he(a, r, ye(i, { id: "__preview" }, s.id, l.id)) : [a, r];
      return /* @__PURE__ */ B("g", { children: [
        /* @__PURE__ */ I("path", { d: Wt(v), stroke: T.blue, strokeWidth: 2 / c.z, strokeDasharray: `${5 / c.z} ${4 / c.z}` }),
        l ? /* @__PURE__ */ I("rect", { x: R(l).minX - 3 / c.z, y: R(l).minY - 3 / c.z, width: R(l).maxX - R(l).minX + 6 / c.z, height: R(l).maxY - R(l).minY + 6 / c.z, fill: "none", stroke: T.blue, strokeWidth: 2 / c.z, rx: 6 / c.z }) : /* @__PURE__ */ I("circle", { cx: r.x, cy: r.y, r: 5 / c.z, fill: T.blue })
      ] });
    })(),
    d && /* @__PURE__ */ I("circle", { cx: d.x, cy: d.y, r: hn / c.z, fill: T.roseSoft, stroke: T.rose, strokeWidth: 1 / c.z }),
    h.map((s, a) => /* @__PURE__ */ I("line", { x1: s.x1, y1: s.y1, x2: s.x2, y2: s.y2, stroke: T.pink, strokeWidth: 1 / c.z, strokeDasharray: `${4 / c.z} ${4 / c.z}` }, `guide-${a}`)),
    m && /* @__PURE__ */ I("rect", { x: Math.min(m.startX, m.curX), y: Math.min(m.startY, m.curY), width: Math.abs(m.curX - m.startX), height: Math.abs(m.curY - m.startY), fill: T.marqueeFill, stroke: T.blue, strokeWidth: 1 / c.z })
  ] }) });
}
const mn = ["sans", "serif", "mono", "gothic", "korean", "chosunmyjo", "hdhyundai", "custom"], pn = /* @__PURE__ */ new Set([
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
]), yn = [
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
function At(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function be(t) {
  return pn.has(t.trim().toLowerCase());
}
function we(t) {
  const n = At(t);
  return n ? be(n) ? n : `"${n.replace(/"/g, '\\"')}"` : "";
}
function gn(t) {
  return At(t).split(",").map((n) => n.trim()).filter(Boolean).map(we).filter(Boolean).join(", ");
}
function $e(t) {
  return At(t).split(",").map((n) => n.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function $t(t) {
  return t.split(",").map((n) => At(n).replace(/^["']|["']$/g, "")).filter(Boolean).filter((n) => !be(n));
}
const Lt = Array.from(/* @__PURE__ */ new Set([
  ...yn,
  ...$t(rt.sans.stack),
  ...$t(rt.serif.stack),
  ...$t(rt.mono.stack),
  ...$t(rt.gothic.stack),
  ...$t(rt.korean.stack)
]));
function bn() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Lt;
  const t = Lt.filter((n) => {
    const e = we(n);
    return e ? document.fonts.check(`12px ${e}`) : !1;
  });
  return t.length > 0 ? t : Lt;
}
const wn = {
  note: 14,
  card: 16,
  text: 20,
  rect: 14,
  ellipse: 14,
  frame: 13,
  arrow: 12
}, $n = 24, zn = 28, ze = 720;
function J(t) {
  return t.fontSize ?? wn[t.type] ?? 14;
}
function tt(t) {
  var n;
  if (!t.fontFamily) return rt.sans.stack;
  if (t.fontFamily === "custom") {
    let e = "";
    try {
      e = $e(He(t.customFontFamily ?? ""));
    } catch {
    }
    return gn(e) || rt.sans.stack;
  }
  return ((n = rt[t.fontFamily]) == null ? void 0 : n.stack) ?? rt.sans.stack;
}
function et(t) {
  return t.textAlign ? t.textAlign : ["rect", "ellipse", "triangle", "diamond", "hexagon", "star"].includes(t.type) ? "center" : "left";
}
function kn(t) {
  return t === "serif" || t === "mono" || t === "sans" || t === "custom" || t === "gothic" || t === "korean" || t === "chosunmyjo" || t === "hdhyundai" ? t : "sans";
}
function Mn(t) {
  var n, e, i;
  if ((n = t.html) != null && n.includes('<ul data-list-style="dash">')) return "dash";
  if ((e = t.html) != null && e.includes("<ul>")) return "bullet";
  if ((i = t.html) != null && i.includes("<ol>")) return "number";
}
function Xn(t, n) {
  return {
    w: Math.min(ze, Math.max($n, Math.ceil(t))),
    h: Math.max(zn, Math.ceil(n))
  };
}
function Yn(t, n) {
  const e = t.cloneNode(!0);
  e.removeAttribute("id"), e.removeAttribute("role"), e.removeAttribute("aria-label"), e.removeAttribute("aria-multiline"), e.removeAttribute("contenteditable"), e.removeAttribute("data-seeded"), e.innerHTML = qt(t.innerHTML), (e.textContent || "").length === 0 && (e.innerHTML = "&nbsp;"), Object.assign(e.style, {
    position: "absolute",
    left: "-10000px",
    top: "-10000px",
    width: "max-content",
    minWidth: "0",
    maxWidth: `${ze}px`,
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
    fontSize: `${J(n)}px`,
    fontFamily: tt(n)
  }), document.body.appendChild(e);
  const i = e.getBoundingClientRect();
  return e.remove(), Xn(i.width, i.height);
}
const Sn = /* @__PURE__ */ new Set(["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"]), Cn = /* @__PURE__ */ new Set(["note", "card", "rect", "ellipse", "text", "image"]);
function Nn({
  visiblePaintOrder: t,
  selected: n,
  editingId: e,
  camera: i,
  shapeById: c,
  allShapes: u,
  peerCursors: d,
  isDarkMode: h,
  renderEditor: m,
  renderShapeBody: f,
  setEditingId: s,
  onBendHandleDown: a,
  onResizeHandleDown: l,
  onRotateHandleDown: r,
  onConnectHandleDown: v
}) {
  return /* @__PURE__ */ B(dt, { children: [
    /* @__PURE__ */ I("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${i.z}) translate(${-i.x}px, ${-i.y}px)` }, children: t.map((o) => {
      if (o.type === "draw") return null;
      if (o.type === "arrow") {
        const x = yt(o, c, u), $ = x.routing === "orthogonal" && x.pathPoints ? xe(x.pathPoints) : x.routing === "curved" ? zt(0.5, x.start, x.control, x.end) : { x: (x.start.x + x.end.x) / 2, y: (x.start.y + x.end.y) / 2 }, p = e === o.id, g = Pt(o), M = n.has(o.id), E = M && !p && !g, z = Tt(o).trim();
        return !g && !p && !M ? null : /* @__PURE__ */ B("div", { className: "absolute flex items-center justify-center", style: { left: $.x - 90, top: $.y - 18, width: 180, height: 36 }, onDoubleClick: (b) => {
          b.stopPropagation(), s(o.id);
        }, children: [
          (g || p || E) && /* @__PURE__ */ I(
            "div",
            {
              "data-canvas-arrow-label": "true",
              "data-canvas-arrow-label-placeholder": E ? "true" : void 0,
              "aria-label": z ? `관계 설명: ${z}` : "관계 설명 입력",
              title: p ? void 0 : z ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 설명 입력",
              className: `px-3 py-1 rounded-full border-2 shadow-sm ${E ? "border-dashed" : ""} ${h ? `bg-slate-900 border-slate-600 ${E ? "text-slate-400" : "text-slate-100"}` : `bg-white border-slate-300 ${E ? "text-slate-500" : "text-slate-800"}`}`,
              style: {
                fontSize: J(o),
                fontFamily: tt(o),
                maxWidth: "100%",
                minWidth: p ? 120 / i.z : void 0,
                minHeight: p ? 28 / i.z : void 0,
                color: E ? void 0 : o.textColor
              },
              children: p ? m("text-center whitespace-nowrap") : g ? /* @__PURE__ */ I("span", { dangerouslySetInnerHTML: { __html: g } }, "canvas-view") : /* @__PURE__ */ I("span", { className: "whitespace-nowrap", children: "관계 입력" })
            }
          ),
          M && n.size === 1 && /* @__PURE__ */ I("div", { onPointerDown: (b) => a(b, o), title: "드래그해서 곡선으로 (Curve)", className: "absolute rounded-full bg-white border-2 border-blue-600", style: { width: 10 / i.z, height: 10 / i.z, left: `calc(50% - ${5 / i.z}px)`, top: `calc(50% - ${5 / i.z}px)`, cursor: "grab" } })
        ] }, o.id);
      }
      const X = n.has(o.id), w = lt(o);
      return /* @__PURE__ */ B(
        "div",
        {
          "data-canvas-shape-id": o.id,
          "data-canvas-shape-type": o.type,
          "data-canvas-selected": X ? "true" : void 0,
          "data-canvas-text-align": et(o),
          "data-canvas-text-color": o.textColor,
          "data-canvas-font-size": J(o),
          "data-canvas-font-family": o.fontFamily === "custom" ? o.customFontFamily ?? "custom" : o.fontFamily ?? "sans",
          "data-canvas-manual-size": o.manualSize ? "true" : void 0,
          "data-canvas-group-id": o.groupId,
          "data-canvas-list-kind": Mn(o),
          "data-canvas-x": o.x,
          "data-canvas-y": o.y,
          "data-canvas-width": o.w,
          "data-canvas-height": o.h,
          className: "absolute",
          style: { left: w.minX, top: w.minY, width: w.maxX - w.minX, height: w.maxY - w.minY, transform: o.rotation ? `rotate(${o.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (x) => {
            x.stopPropagation(), Sn.has(o.type) && s(o.id);
          },
          children: [
            f(o),
            X && /* @__PURE__ */ B(dt, { children: [
              /* @__PURE__ */ I("div", { className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / i.z}px solid ${T.blue}` } }),
              n.size === 1 && /* @__PURE__ */ B(dt, { children: [
                ["nw", "ne", "sw", "se"].map((x) => /* @__PURE__ */ I("div", { "data-canvas-resize-handle": x, onPointerDown: ($) => l($, o, x), className: "absolute bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / i.z, height: 10 / i.z, cursor: `${x}-resize`, left: x.includes("w") ? -5 / i.z : void 0, right: x.includes("e") ? -5 / i.z : void 0, top: x.includes("n") ? -5 / i.z : void 0, bottom: x.includes("s") ? -5 / i.z : void 0 } }, x)),
                /* @__PURE__ */ I("div", { onPointerDown: (x) => r(x, o), title: "회전 (Shift로 15도 단위)", className: "absolute bg-blue-600 rounded-full", style: { width: 12 / i.z, height: 12 / i.z, left: "50%", marginLeft: -6 / i.z, top: -28 / i.z, cursor: "grab" } }),
                Cn.has(o.type) && ["n", "s", "w", "e"].map((x) => /* @__PURE__ */ I("div", { onPointerDown: ($) => v($, o), title: "드래그해서 연결 (관계 생성)", className: "absolute flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...x === "n" ? { left: "50%", top: -30 / i.z, marginLeft: -9 / i.z } : x === "s" ? { left: "50%", bottom: -30 / i.z, marginLeft: -9 / i.z } : x === "w" ? { top: "50%", left: -30 / i.z, marginTop: -9 / i.z } : { top: "50%", right: -30 / i.z, marginTop: -9 / i.z }, width: 18 / i.z, height: 18 / i.z, fontSize: 13 / i.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${x}`))
              ] })
            ] })
          ]
        },
        o.id
      );
    }) }),
    u.filter((o) => (o.type === "draw" || o.type === "arrow") && n.has(o.id)).map((o) => {
      const X = R(o);
      return /* @__PURE__ */ I("div", { className: "absolute pointer-events-none border-2 border-blue-600/60 rounded", style: { left: (X.minX - i.x) * i.z - 4, top: (X.minY - i.y) * i.z - 4, width: (X.maxX - X.minX) * i.z + 8, height: (X.maxY - X.minY) * i.z + 8 } }, `sel-${o.id}`);
    }),
    d == null ? void 0 : d.map((o) => /* @__PURE__ */ B("div", { className: "absolute pointer-events-none z-40", style: { left: (o.x - i.x) * i.z, top: (o.y - i.y) * i.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ I("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ I("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: o.color, stroke: T.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ I("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: o.color }, children: o.name })
    ] }, o.id))
  ] });
}
function In({
  shape: t,
  shapes: n,
  camera: e,
  canvasSize: i,
  isDarkMode: c,
  editing: u,
  showPalette: d,
  installedFontFamilies: h,
  setShowPalette: m,
  setActiveColor: f,
  patchSelected: s,
  applyFormat: a,
  applyList: l,
  applyCustomFontFamily: r
}) {
  var O;
  const v = c ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", o = V(null), [X, w] = Z({ width: 380, height: 260 });
  Kt(() => {
    const y = o.current;
    if (!y) return;
    const F = () => {
      const K = Math.max(1, Math.ceil(y.getBoundingClientRect().width)), W = Math.max(1, Math.ceil(y.getBoundingClientRect().height));
      w((q) => q.width === K && q.height === W ? q : { width: K, height: W });
    };
    if (F(), typeof ResizeObserver > "u") return;
    const A = new ResizeObserver(F);
    return A.observe(y), () => A.disconnect();
  }, [u, h.length, c, t, d]);
  const x = X.width, $ = X.height, p = R(t), g = (p.minX - e.x) * e.z, M = (p.minY - e.y) * e.z, E = (p.maxX - e.x) * e.z, z = (p.maxY - e.y) * e.z, b = Math.max(8, i.width - x - 8), Y = Math.max(8, i.height - $ - 8), N = (y, F) => ({ left: Math.min(Math.max(8, y), b), top: Math.min(Math.max(8, F), Y) }), k = [
    N((g + E) / 2 - x / 2, M - $ - 12),
    N((g + E) / 2 - x / 2, z + 12),
    N((i.width - x) / 2, 12),
    N(g - x - 12, M + (z - M - $) / 2),
    N(E + 12, M + (z - M - $) / 2)
  ], S = n.map((y) => {
    const F = R(y);
    return { left: (F.minX - e.x) * e.z, top: (F.minY - e.y) * e.z, right: (F.maxX - e.x) * e.z, bottom: (F.maxY - e.y) * e.z };
  }), C = k[0], P = (y, F) => {
    const A = Math.max(0, Math.min(y.left + x, F.right) - Math.max(y.left, F.left)), K = Math.max(0, Math.min(y.top + $, F.bottom) - Math.max(y.top, F.top));
    return A * K;
  }, _ = ((O = k.map((y) => ({
    candidate: y,
    overlap: S.reduce((F, A) => F + P(y, A), 0),
    distance: Math.hypot(y.left - C.left, y.top - C.top)
  })).sort((y, F) => y.overlap - F.overlap || y.distance - F.distance)[0]) == null ? void 0 : O.candidate) ?? C, G = J(t), j = (y, F, A, K) => /* @__PURE__ */ I("button", { type: "button", title: K, onClick: A, className: `h-7 px-2 rounded text-[11px] font-bold ${F ? "bg-blue-600 text-white" : v}`, children: y });
  return /* @__PURE__ */ B("div", { ref: o, "data-canvas-inspector": "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${c ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: _.left, top: _.top }, onPointerDown: (y) => {
    y.stopPropagation();
    const F = y.target instanceof Element ? y.target : null;
    F != null && F.closest("input, select, textarea") || y.preventDefault();
  }, onClick: (y) => y.stopPropagation(), children: [
    /* @__PURE__ */ B("div", { className: "relative flex items-center gap-1.5 pointer-events-none", children: [
      /* @__PURE__ */ I("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "색상" }),
      /* @__PURE__ */ I("button", { type: "button", title: "색상 팔레트", "aria-label": "도형 색상", onClick: () => m((y) => !y), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${c ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ I(Ue, { className: "w-4 h-4", style: { color: xt(t) } }) }),
      d && /* @__PURE__ */ B("div", { className: `pointer-events-auto absolute left-0 top-10 z-50 flex items-center gap-1.5 p-2 rounded-xl border shadow-xl ${c ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        je.map((y) => /* @__PURE__ */ I("button", { type: "button", title: nt[y].label, "aria-label": `색 ${nt[y].label}`, onClick: () => {
          f(y), s({ color: y, fillColor: void 0 }), m(!1);
        }, className: "w-5 h-5 rounded-full border", style: { background: nt[y].bg, borderColor: nt[y].border, outline: t.color === y && !t.fillColor ? `2px solid ${T.blue}` : void 0, outlineOffset: 1 } }, y)),
        /* @__PURE__ */ I("label", { title: "배경 색 (자유 선택)", className: "w-5 h-5 rounded-full border relative overflow-hidden cursor-pointer flex items-center justify-center", style: { background: t.fillColor ?? Rt(t), outline: t.fillColor ? `2px solid ${T.blue}` : void 0, outlineOffset: 1 }, children: /* @__PURE__ */ I("input", { type: "color", value: t.fillColor ?? Rt(t), onChange: (y) => {
          s({ fillColor: y.target.value }), m(!1);
        }, className: "absolute inset-0 opacity-0 cursor-pointer" }) })
      ] })
    ] }),
    /* @__PURE__ */ B("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
      /* @__PURE__ */ I("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
      /* @__PURE__ */ B("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: xt(t), color: T.white, mixBlendMode: "normal" }, children: [
        /* @__PURE__ */ I("span", { "aria-hidden": "true", children: "A" }),
        /* @__PURE__ */ I("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? xt(t), onChange: (y) => s({ textColor: y.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
      ] }),
      /* @__PURE__ */ B("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${c ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
        /* @__PURE__ */ I("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
        /* @__PURE__ */ I("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => s({ fontSize: Math.max(8, G - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ I(Ge, { className: "w-3.5 h-3.5" }) }),
        /* @__PURE__ */ I("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: G }),
        /* @__PURE__ */ I("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => s({ fontSize: Math.min(96, G + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ I(Re, { className: "w-3.5 h-3.5" }) })
      ] }),
      /* @__PURE__ */ B("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${c ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
        /* @__PURE__ */ I("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (y) => {
          const F = kn(y.target.value);
          s(F === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: F, customFontFamily: void 0 });
        }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${c ? "text-slate-200" : "text-slate-700"}`, children: mn.map((y) => /* @__PURE__ */ I("option", { value: y, className: c ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: rt[y].label }, y)) }),
        /* @__PURE__ */ I(Ve, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
      ] }),
      t.fontFamily === "custom" && /* @__PURE__ */ B(dt, { children: [
        /* @__PURE__ */ I("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (y) => r(y.target.value), onChange: (y) => y.currentTarget.value && r(y.currentTarget.value), onKeyDown: (y) => {
          y.key === "Enter" && (y.preventDefault(), r(y.currentTarget.value));
        }, onDoubleClick: (y) => y.stopPropagation(), onPointerDown: (y) => y.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${c ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
        /* @__PURE__ */ I("datalist", { id: `canvas-font-families-${t.id}`, children: h.map((y) => /* @__PURE__ */ I("option", { value: y }, y)) })
      ] })
    ] }),
    /* @__PURE__ */ B("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${c ? "border-slate-700" : "border-slate-100"}`, children: [
      /* @__PURE__ */ I("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
      /* @__PURE__ */ I("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", qe, "왼쪽 정렬"], ["center", Qe, "가운데 정렬"], ["right", Ze, "오른쪽 정렬"]].map(([y, F, A]) => /* @__PURE__ */ I("button", { type: "button", "aria-label": A, title: A, onClick: () => s({ textAlign: y }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${et(t) === y ? "bg-blue-600 text-white shadow-sm" : v}`, children: /* @__PURE__ */ I(F, { className: "w-4 h-4" }) }, y)) }),
      u && /* @__PURE__ */ B(dt, { children: [
        /* @__PURE__ */ I("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
        /* @__PURE__ */ I("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", Je, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", tn, "번호 목록"]].map(([y, F, A]) => /* @__PURE__ */ I("button", { type: "button", onClick: () => l(y), "aria-label": A, title: A, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: F ? /* @__PURE__ */ I(F, { className: "w-4 h-4" }) : /* @__PURE__ */ I("span", { className: "text-base leading-none", children: "–" }) }, y)) }),
        /* @__PURE__ */ I("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: en, label: "굵게" }, { cmd: "italic", Icon: nn, label: "기울임" }, { cmd: "underline", Icon: on, label: "밑줄" }].map(({ cmd: y, Icon: F, label: A }) => /* @__PURE__ */ I("button", { type: "button", onClick: () => a(y), "aria-label": A, title: A, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${v}`, children: /* @__PURE__ */ I(F, { className: "w-4 h-4" }) }, y)) })
      ] })
    ] }),
    (t.type === "card" || t.type === "arrow") && /* @__PURE__ */ B("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${c ? "border-slate-700" : "border-slate-100"}`, children: [
      t.type === "card" && /* @__PURE__ */ B(dt, { children: [
        /* @__PURE__ */ I("div", { className: `w-px h-6 ${c ? "bg-slate-700" : "bg-slate-200"}` }),
        /* @__PURE__ */ I("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (y) => y.stopPropagation(), onChange: (y) => s({ category: y.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${c ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
      ] }),
      t.type === "arrow" && /* @__PURE__ */ B(dt, { children: [
        /* @__PURE__ */ I("div", { className: `w-px h-6 ${c ? "bg-slate-700" : "bg-slate-200"}` }),
        j("직선", (t.routing ?? "straight") === "straight", () => s({ routing: "straight", bend: 0 }), "직선"),
        j("ㄱ", (t.routing ?? "") === "orthogonal", () => s({ routing: "orthogonal", bend: 0 }), "그리드 라우팅 (ㄱ/ㄹ)"),
        j("곡선", (t.routing ?? "") === "curved", () => s({ routing: "curved", bend: t.bend || 60 }), "곡선"),
        /* @__PURE__ */ I("div", { className: `w-px h-6 ${c ? "bg-slate-700" : "bg-slate-200"}` }),
        j("—", (t.strokeStyle ?? "solid") === "solid", () => s({ strokeStyle: "solid" }), "실선"),
        j("- -", t.strokeStyle === "dashed", () => s({ strokeStyle: "dashed" }), "점선(dash)"),
        j("···", t.strokeStyle === "dotted", () => s({ strokeStyle: "dotted" }), "점선(dot)"),
        /* @__PURE__ */ I("div", { className: `w-px h-6 ${c ? "bg-slate-700" : "bg-slate-200"}` }),
        j((t.arrowStart ?? "none") === "none" ? "○" : t.arrowStart === "dot" ? "●" : "◀", !0, () => s({ arrowStart: (t.arrowStart ?? "none") === "none" ? "arrow" : t.arrowStart === "arrow" ? "dot" : "none" }), "시작점 표식"),
        j((t.arrowEnd ?? "arrow") === "none" ? "○" : t.arrowEnd === "dot" ? "●" : "▶", !0, () => s({ arrowEnd: (t.arrowEnd ?? "arrow") === "arrow" ? "dot" : t.arrowEnd === "dot" ? "none" : "arrow" }), "끝점 표식")
      ] })
    ] })
  ] });
}
function En({
  camera: t,
  editingId: n,
  isDarkMode: e,
  editorRef: i,
  commitEditorHtml: c,
  onEditorKeyDown: u,
  setShapes: d,
  onDirty: h
}) {
  const m = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", f = (a, l) => /* @__PURE__ */ I(
    "div",
    {
      ref: i,
      role: "textbox",
      "aria-multiline": "true",
      "aria-label": "텍스트 편집",
      contentEditable: !0,
      suppressContentEditableWarning: !0,
      onInput: c,
      onBlur: c,
      onPointerDown: (r) => r.stopPropagation(),
      onDoubleClick: (r) => r.stopPropagation(),
      onKeyDown: u,
      className: `${m} ${a}`,
      style: l
    },
    "canvas-editor"
  );
  return { renderEditor: f, renderShapeBody: (a) => {
    const l = nt[a.color ?? "blue"], r = n === a.id, v = Pt(a);
    if (a.type === "frame")
      return /* @__PURE__ */ I(
        "div",
        {
          className: "w-full h-full rounded",
          style: { border: `${2 / t.z}px solid ${e ? T.slate600 : T.slate400}` },
          children: /* @__PURE__ */ I(
            "div",
            {
              className: "absolute font-semibold",
              style: {
                top: -22 / t.z,
                left: 0,
                fontSize: 13 / t.z,
                color: e ? T.slate400 : T.muted
              },
              children: r ? f("", { fontSize: 13 / t.z }) : Tt(a) || "프레임"
            }
          )
        }
      );
    if (a.type === "note")
      return /* @__PURE__ */ I(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: l.bg, borderTop: `6px solid ${l.border}`, color: l.text },
          children: r ? f("font-medium", { color: xt(a), fontSize: J(a), fontFamily: tt(a), textAlign: et(a) }) : v ? /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: xt(a), fontSize: J(a), fontFamily: tt(a), textAlign: et(a) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") : /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: xt(a), fontSize: J(a), fontFamily: tt(a), textAlign: et(a) }, children: /* @__PURE__ */ I("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (a.type === "card") {
      const p = a.cardStyle === "glass";
      return /* @__PURE__ */ B(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: p ? T.glassFill : T.slateCard,
            backdropFilter: p ? "blur(12px)" : void 0,
            WebkitBackdropFilter: p ? "blur(12px)" : void 0,
            border: `1px solid ${p ? T.glassBorder : T.darkBorder}`,
            boxShadow: p ? T.glassShadow : T.cardShadow
          },
          children: [
            /* @__PURE__ */ B(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (g) => g.stopPropagation(),
                onDoubleClick: (g) => g.stopPropagation(),
                onBlur: (g) => {
                  const E = (g.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  d((z) => z.map((b) => b.id === a.id ? { ...b, category: E } : b)), h();
                },
                onKeyDown: (g) => {
                  g.key === "Enter" && (g.preventDefault(), g.currentTarget.blur());
                },
                children: [
                  "[ ",
                  a.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            r ? f("flex-1 font-medium", { color: a.textColor ?? T.white, fontSize: J(a), fontFamily: tt(a), textAlign: et(a) }) : /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: a.textColor ?? T.white, fontSize: J(a), fontFamily: tt(a), textAlign: et(a) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view"),
            /* @__PURE__ */ B("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              a.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (a.type === "text") {
      const p = e ? "text-slate-100" : "text-slate-900", g = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${p}`,
        style: { color: a.textColor, fontSize: J(a), fontFamily: tt(a), textAlign: et(a) }
      };
      return r ? f(`font-medium ${p}`, g.style) : v ? /* @__PURE__ */ I(
        "div",
        {
          "data-canvas-text-view": !0,
          ...g,
          dangerouslySetInnerHTML: { __html: v }
        },
        "canvas-view"
      ) : /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, ...g, children: /* @__PURE__ */ I("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (a.type === "image") {
      const p = Vt(a.src);
      return p ? /* @__PURE__ */ I(
        "img",
        {
          src: p,
          alt: a.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const o = Rt(a), X = un(a), w = xt(a);
    if (a.type === "triangle" || a.type === "diamond" || a.type === "hexagon" || a.type === "star")
      return /* @__PURE__ */ B("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ I("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${a.w} ${a.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ I("polygon", { points: xn(a.type, a.w, a.h), fill: o, stroke: X, strokeWidth: 2, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ I("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: w }, children: r ? f("font-medium", { color: w, fontSize: J(a), fontFamily: tt(a), textAlign: et(a) }) : /* @__PURE__ */ I("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: J(a), fontFamily: tt(a), textAlign: et(a) }, dangerouslySetInnerHTML: { __html: v } }, "canvas-view") })
      ] });
    const $ = Vt(a.src);
    return /* @__PURE__ */ I(
      "div",
      {
        className: `w-full h-full flex items-center justify-center p-3 ${a.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: o, border: `2px solid ${X}`, color: w },
        children: r ? f("font-medium", { color: w, fontSize: J(a), fontFamily: tt(a), textAlign: et(a) }) : /* @__PURE__ */ B("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: J(a), fontFamily: tt(a), textAlign: et(a) }, children: [
          /* @__PURE__ */ I("div", { dangerouslySetInnerHTML: { __html: v } }),
          $ && /* @__PURE__ */ I(
            "a",
            {
              href: $,
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
function Fn({
  containerRef: t,
  shapesRef: n,
  shapes: e,
  camera: i,
  selected: c,
  editingId: u,
  boardIdentity: d
}) {
  const [h, m] = Z({ width: 0, height: 0 });
  it(() => {
    const v = t.current;
    if (!v) return;
    let o = -1, X = -1;
    const w = ($ = v.clientWidth, p = v.clientHeight) => {
      $ === o && p === X || (o = $, X = p, m({ width: $, height: p }));
    };
    if (w(), typeof ResizeObserver < "u") {
      const $ = new ResizeObserver((p) => {
        var M;
        const g = (M = p[0]) == null ? void 0 : M.contentRect;
        w((g == null ? void 0 : g.width) ?? v.clientWidth, (g == null ? void 0 : g.height) ?? v.clientHeight);
      });
      return $.observe(v), () => $.disconnect();
    }
    const x = () => w();
    return window.addEventListener("resize", x), () => window.removeEventListener("resize", x);
  }, [d, t]);
  const f = ut(() => new Map(e.map((v) => [v.id, v])), [e]), s = ut(
    () => [...e].sort((v, o) => (v.type === "frame" ? -1 : 0) - (o.type === "frame" ? -1 : 0)),
    [e]
  ), a = ut(() => {
    if (!t.current || h.width <= 0 || h.height <= 0) return null;
    const v = 200 / i.z;
    return {
      minX: i.x - v,
      minY: i.y - v,
      maxX: i.x + h.width / i.z + v,
      maxY: i.y + h.height / i.z + v
    };
  }, [i, t, h]), l = Q((v) => {
    if (!a) return !1;
    if (v.id === u || c.has(v.id)) return !0;
    if (v.type === "arrow") {
      const X = yt(v, f, n.current), x = (X.routing === "orthogonal" ? X.pathPoints : null) ?? [X.start, X.end], $ = Math.min(...x.map((E) => E.x)), p = Math.max(...x.map((E) => E.x)), g = Math.min(...x.map((E) => E.y)), M = Math.max(...x.map((E) => E.y));
      return p >= a.minX && $ <= a.maxX && M >= a.minY && g <= a.maxY;
    }
    const o = R(v);
    return o.maxX >= a.minX && o.minX <= a.maxX && o.maxY >= a.minY && o.minY <= a.maxY;
  }, [u, c, f, n, a]), r = ut(
    () => s.filter(l),
    [l, s]
  );
  return { shapeById: f, visiblePaintOrder: r };
}
function Ln({
  editorRef: t,
  editingId: n,
  setShapes: e,
  setAnnouncement: i,
  onDirty: c,
  patchSelected: u
}) {
  const d = Q(() => {
    const r = t.current;
    if (!r || !n) return;
    let v;
    try {
      v = qt(r.innerHTML);
    } catch {
      i("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const o = r.scrollHeight;
    e((X) => X.map((w) => {
      if (w.id !== n) return w;
      const x = { ...w, html: v, text: void 0 };
      if (w.type === "text")
        return w.manualSize ? x : { ...x, ...Yn(r, w) };
      if (w.type === "arrow") return x;
      const $ = w.type === "note" ? 32 : w.type === "card" ? 96 : (
        // category header + type footer
        (w.type === "frame", 24)
      ), p = Math.max(w.h, o + $);
      return { ...x, h: p };
    })), c();
  }, [n, c]), h = (r) => {
    var v;
    (v = t.current) == null || v.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(r), d();
  }, m = () => {
    var X;
    const r = (X = window.getSelection()) == null ? void 0 : X.anchorNode, v = r instanceof Element ? r : r == null ? void 0 : r.parentElement, o = v == null ? void 0 : v.closest("ul, ol");
    return o instanceof HTMLElement ? o : null;
  }, f = (r, v, o) => {
    const X = document.createElement(v);
    for (; r.firstChild; ) X.append(r.firstChild);
    return r.replaceWith(X), X;
  }, s = (r) => {
    const v = t.current;
    if (!v) return;
    v.focus();
    const o = m();
    if (r === "number")
      if ((o == null ? void 0 : o.tagName) === "OL")
        o.removeAttribute("data-list-style");
      else if ((o == null ? void 0 : o.tagName) === "UL")
        f(o, "ol");
      else {
        document.execCommand("insertOrderedList");
        const X = m();
        X == null || X.removeAttribute("data-list-style");
      }
    else if ((o == null ? void 0 : o.tagName) === "UL") {
      const X = o.dataset.listStyle;
      r === X ? document.execCommand("insertUnorderedList") : o.dataset.listStyle = r;
    } else {
      (o == null ? void 0 : o.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const X = m();
      X && (X.dataset.listStyle = r);
    }
    d();
  };
  return { commitEditorHtml: d, applyFormat: h, applyList: s, onEditorKeyDown: (r) => {
    if (r.key === "Tab") {
      r.preventDefault(), document.execCommand(r.shiftKey ? "outdent" : "indent"), d();
      return;
    }
    if (r.key === " ") {
      const v = window.getSelection();
      if (v && v.isCollapsed && v.anchorNode) {
        const o = v.anchorNode, X = o.textContent || "", w = v.anchorOffset, x = X.slice(0, w).trim();
        if (!m()) {
          if (x === "-" || x === "–") {
            r.preventDefault(), o.textContent = X.slice(w), s("dash");
            return;
          }
          if (x === "*") {
            r.preventDefault(), o.textContent = X.slice(w), s("bullet");
            return;
          }
          if (x === "1.") {
            r.preventDefault(), o.textContent = X.slice(w), s("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (r) => {
    const v = $e(r);
    if (!v) {
      u({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    u({
      fontFamily: "custom",
      customFontFamily: v
    });
  } };
}
function Pn({
  boardIdentity: t,
  tool: n,
  controlledShapes: e,
  onShapesChange: i,
  onDirty: c
}) {
  const u = V(null), d = V(null), [h, m] = Z([]), f = e !== void 0 && i !== void 0, s = ut(
    () => (f ? e ?? [] : h).map(Qt).filter((L) => L !== null),
    [f, e, h]
  ), a = V(i);
  a.current = i;
  const l = Q((L) => {
    const H = a.current;
    if (!H) {
      m(L);
      return;
    }
    H(typeof L == "function" ? L : () => L);
  }, []), [r, v] = Z({ x: -400, y: -300, z: 1 }), [o, X] = Z(/* @__PURE__ */ new Set()), [w, x] = Z(null), [$, p] = Z({ kind: "none" }), [g, M] = Z(!1), [E, z] = Z([]), [b, Y] = Z(""), [N, k] = Z(!1), [S, C] = Z(null), [P, _] = Z("blue"), [G, j] = Z(Lt), O = V(P);
  O.current = P;
  const y = V([]), F = V([]), A = V(null), K = V(/* @__PURE__ */ new Map()), W = V(s), q = V(r), kt = V(n), ht = V(o), gt = V(w);
  W.current = s, q.current = r, kt.current = n, ht.current = o, gt.current = w;
  const Mt = V({ kind: "none" }), bt = Q((L) => {
    Mt.current = L, p(L);
  }, []), vt = Q((L) => {
    ht.current = L, X(L);
  }, []);
  Kt(() => {
    var H;
    const L = /* @__PURE__ */ new Set();
    ht.current = L, gt.current = null, K.current.clear(), y.current = [], F.current = [], A.current = null, bt({ kind: "none" }), X(L), x(null), M(!1), z([]), C(null), Y(""), (H = u.current) == null || H.focus();
  }, [bt, t]), it(() => {
    let L = !1;
    const H = () => {
      const U = bn();
      L || j(U);
    };
    if (H(), typeof document > "u" || !("fonts" in document)) return;
    const D = () => H();
    return document.fonts.addEventListener("loadingdone", D), () => {
      L = !0, document.fonts.removeEventListener("loadingdone", D);
    };
  }, [t]);
  const Xt = (w ? s.find((L) => L.id === w) : void 0) !== void 0;
  Kt(() => {
    if (!w || !Xt) return;
    const L = () => {
      const D = d.current, U = W.current.find((Bt) => Bt.id === w);
      if (!D || !U || (D.dataset.seeded !== w && (D.innerHTML = Pt(U), D.dataset.seeded = w), document.activeElement === D)) return;
      D.focus();
      const at = document.createRange();
      at.selectNodeContents(D), at.collapse(!1);
      const ct = window.getSelection();
      ct == null || ct.removeAllRanges(), ct == null || ct.addRange(at);
    };
    L();
    const H = requestAnimationFrame(L);
    return () => cancelAnimationFrame(H);
  }, [w, Xt]);
  const wt = Q((L) => {
    l((H) => {
      const D = typeof L == "function" ? L(H) : L;
      return y.current.push(H), y.current.length > 100 && y.current.shift(), F.current = [], D;
    }), c();
  }, [c]), Yt = Q((L) => L.size === 0 ? !1 : (wt((H) => H.filter((D) => L.has(D.id) ? !1 : D.type !== "arrow" ? !0 : !(D.fromId && L.has(D.fromId)) && !(D.toId && L.has(D.toId)))), vt(/* @__PURE__ */ new Set()), Y(`${L.size}개 삭제됨`), !0), [wt, vt]), Ot = Q(() => {
    A.current = W.current;
  }, []), Dt = Q(() => {
    const L = A.current;
    A.current = null, !(!L || L === W.current) && (y.current.push(L), y.current.length > 100 && y.current.shift(), F.current = [], c());
  }, [c]), _t = Q((L, H) => {
    var at;
    const D = (at = u.current) == null ? void 0 : at.getBoundingClientRect(), U = q.current;
    return D ? { x: (L - D.left) / U.z + U.x, y: (H - D.top) / U.z + U.y } : { x: 0, y: 0 };
  }, []), mt = Q(() => {
    var D;
    const L = (D = u.current) == null ? void 0 : D.getBoundingClientRect(), H = q.current;
    return L ? { x: H.x + L.width / 2 / H.z, y: H.y + L.height / 2 / H.z } : { x: 0, y: 0 };
  }, []), St = Q((L) => {
    const H = new Set(W.current.filter((U) => L.has(U.id) && U.groupId).map((U) => U.groupId));
    if (H.size === 0) return L;
    const D = new Set(L);
    for (const U of W.current) U.groupId && H.has(U.groupId) && D.add(U.id);
    return D;
  }, []);
  return {
    containerRef: u,
    editorRef: d,
    localShapes: h,
    setLocalShapes: m,
    controlled: f,
    shapes: s,
    setShapes: l,
    camera: r,
    setCamera: v,
    cameraRef: q,
    selected: o,
    setSelected: X,
    selectedRef: ht,
    editingId: w,
    setEditingId: x,
    editingIdRef: gt,
    interaction: $,
    interactionRef: Mt,
    applyInteraction: bt,
    isSpaceDown: g,
    setIsSpaceDown: M,
    guides: E,
    setGuides: z,
    announcement: b,
    setAnnouncement: Y,
    showInspectorPalette: N,
    setShowInspectorPalette: k,
    eraserPos: S,
    setEraserPos: C,
    activeColor: P,
    setActiveColor: _,
    activeColorRef: O,
    installedFontFamilies: G,
    pointers: K,
    past: y,
    future: F,
    selectNow: vt,
    commit: wt,
    deleteSelection: Yt,
    beginHistory: Ot,
    endHistory: Dt,
    toPage: _t,
    viewportCentre: mt,
    expandToGroups: St,
    toolRef: kt,
    shapesRef: W
  };
}
function Tn({
  containerRef: t,
  camera: n,
  setCamera: e,
  minZoom: i,
  maxZoom: c,
  shapes: u,
  selected: d,
  editingId: h,
  textualTypes: m,
  onZoomChange: f,
  onSelectionChange: s,
  onLocalCursor: a,
  toPage: l
}) {
  it(() => {
    f == null || f(n.z);
  }, [n.z, f]), it(() => {
    const x = t.current;
    if (!x) return;
    const $ = (p) => {
      if (p.preventDefault(), p.ctrlKey || p.metaKey) {
        const g = x.getBoundingClientRect();
        e((M) => {
          const E = Math.min(c, Math.max(i, M.z * Math.exp(-p.deltaY * 0.01))), z = p.clientX - g.left, b = p.clientY - g.top;
          return { x: M.x + z / M.z - z / E, y: M.y + b / M.z - b / E, z: E };
        });
      } else
        e((g) => ({ ...g, x: g.x + p.deltaX / g.z, y: g.y + p.deltaY / g.z }));
    };
    return x.addEventListener("wheel", $, { passive: !1 }), () => x.removeEventListener("wheel", $);
  }, [t, c, i, e]);
  const r = ut(() => {
    const x = u.filter(($) => d.has($.id));
    return {
      count: x.length,
      canGroup: x.length > 1,
      canUngroup: x.some(($) => !!$.groupId),
      isTextual: x.length === 1 && m.includes(x[0].type)
    };
  }, [d, u, m]);
  it(() => {
    s == null || s(r);
  }, [s, r]);
  const v = ut(() => {
    if (h) return u.find(($) => $.id === h) ?? null;
    if (d.size !== 1) return null;
    const x = u.find(($) => d.has($.id));
    return x && x.type !== "image" ? x : null;
  }, [h, d, u]), o = V(0);
  return { selectionInfo: r, inspectorShape: v, onContainerPointerMove: a ? (x) => {
    const $ = performance.now();
    $ - o.current < 60 || (o.current = $, a(l(x.clientX, x.clientY)));
  } : void 0, onContainerPointerLeave: a ? () => a(null) : void 0 };
}
function An(t, n) {
  if (t.length === 0) return null;
  let e = 1 / 0, i = 1 / 0, c = -1 / 0, u = -1 / 0;
  for (const a of t) {
    const l = R(a);
    e = Math.min(e, l.minX), i = Math.min(i, l.minY), c = Math.max(c, l.maxX), u = Math.max(u, l.maxY);
  }
  const d = 40, h = c - e + d * 2, m = u - i + d * 2;
  if (!Number.isFinite(h) || !Number.isFinite(m) || h > ft.maxExportDimension || m > ft.maxExportDimension || h * m > ft.maxExportPixels) return null;
  const f = (a, l, r, v, o) => {
    const X = a.fontSize ?? r, w = tt(a), x = me(Pt(a));
    if (x.length === 0) return "";
    const $ = lt(a), p = a.textAlign === "right" ? "end" : a.textAlign === "center" ? "middle" : a.textAlign === "left" ? "start" : o, g = p === "end" ? $.maxX - 12 : p === "middle" ? ($.minX + $.maxX) / 2 : $.minX + 12, M = $.minY + X + 12;
    return x.map((E, z) => {
      const b = E.map((Y) => `<tspan style="${[
        Y.bold ? "font-weight:700" : `font-weight:${v}`,
        Y.italic ? "font-style:italic" : "",
        Y.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${st(Y.text)}</tspan>`).join("");
      return `<text x="${g}" y="${M + z * X * 1.4}" font-family="${st(w)}" font-size="${X}" fill="${l}" text-anchor="${p}">${b}</text>`;
    }).join("");
  }, s = t.map((a) => {
    const l = nt[a.color ?? "blue"], r = lt(a), v = ot(a), o = a.rotation ? ` transform="rotate(${a.rotation * 180 / Math.PI} ${v.x} ${v.y})"` : "", X = a.color ? nt[a.color].border : T.ink;
    if (a.type === "draw" && a.points)
      return `<path d="${ve(a.points)}" fill="none" stroke="${X}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    if (a.type === "arrow") {
      const x = yt(a, new Map(t.map((S) => [S.id, S])), t), $ = x.routing === "orthogonal" && x.pathPoints && x.pathPoints.length > 1 ? x.pathPoints[x.pathPoints.length - 2] : null, p = x.routing === "orthogonal" && $ ? $ : zt(0.94, x.start, x.control, x.end), g = Math.atan2(x.end.y - p.y, x.end.x - p.x), M = 14, E = `${x.end.x - M * Math.cos(g - 0.4)},${x.end.y - M * Math.sin(g - 0.4)}`, z = `${x.end.x - M * Math.cos(g + 0.4)},${x.end.y - M * Math.sin(g + 0.4)}`, b = x.routing === "orthogonal" && x.pathPoints ? Wt(x.pathPoints) : x.bend === 0 ? `M ${x.start.x} ${x.start.y} L ${x.end.x} ${x.end.y}` : `M ${x.start.x} ${x.start.y} Q ${x.control.x} ${x.control.y} ${x.end.x} ${x.end.y}`, Y = x.routing === "orthogonal" && x.pathPoints ? xe(x.pathPoints) : x.bend === 0 ? { x: (x.start.x + x.end.x) / 2, y: (x.start.y + x.end.y) / 2 } : zt(0.5, x.start, x.control, x.end), N = Tt(a), k = N ? `<text x="${Y.x}" y="${Y.y - 6}" text-anchor="middle" font-family="${st(tt(a))}" font-size="${a.fontSize ?? 12}" fill="${X}">${st(N)}</text>` : "";
      return `<path d="${b}" fill="none" stroke="${X}" stroke-width="2.5" stroke-linecap="round"/><polygon points="${x.end.x},${x.end.y} ${E} ${z}" fill="${X}"/>` + k;
    }
    if (a.type === "image" && a.src) {
      const x = Vt(a.src);
      return x ? `<image href="${st(x)}" x="${r.minX}" y="${r.minY}" width="${r.maxX - r.minX}" height="${r.maxY - r.minY}"${o}/>` : "";
    }
    if (a.type === "frame")
      return `<g${o}><rect x="${r.minX}" y="${r.minY}" width="${r.maxX - r.minX}" height="${r.maxY - r.minY}" fill="none" stroke="${T.slate400}" stroke-width="2" rx="4"/><text x="${r.minX}" y="${r.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${T.muted}">${st(a.text ?? "프레임")}</text></g>`;
    if (a.type === "note")
      return `<g${o}><rect x="${r.minX}" y="${r.minY}" width="${r.maxX - r.minX}" height="${r.maxY - r.minY}" fill="${l.bg}"/><rect x="${r.minX}" y="${r.minY}" width="${r.maxX - r.minX}" height="6" fill="${l.border}"/>` + f(a, l.text, 14, "600", "start") + "</g>";
    if (a.type === "card") {
      const x = a.cardStyle === "glass";
      return `<g${o}><rect x="${r.minX}" y="${r.minY}" width="${r.maxX - r.minX}" height="${r.maxY - r.minY}" rx="16" fill="${x ? T.glassFill : T.slateCard}"/><text x="${r.minX + 16}" y="${r.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${T.slate400}">[ ${st(a.category ?? "ENTITY")} ]</text>` + f(a, T.white, 16, "700", "start") + "</g>";
    }
    const w = a.type === "ellipse" ? `<ellipse cx="${(r.minX + r.maxX) / 2}" cy="${(r.minY + r.maxY) / 2}" rx="${(r.maxX - r.minX) / 2}" ry="${(r.maxY - r.minY) / 2}" fill="${l.bg}" stroke="${l.border}" stroke-width="2"/>` : `<rect x="${r.minX}" y="${r.minY}" width="${r.maxX - r.minX}" height="${r.maxY - r.minY}" rx="12" fill="${l.bg}" stroke="${l.border}" stroke-width="2"/>`;
    return `<g${o}>${w}${f(a, l.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${h}" height="${m}" viewBox="${e - d} ${i - d} ${h} ${m}"><rect x="${e - d}" y="${i - d}" width="${h}" height="${m}" fill="${n ? T.canvasDark : T.canvasLight}"/>` + s + "</svg>";
}
async function On(t) {
  const n = t();
  if (!n) return null;
  const e = /width="([\d.]+)" height="([\d.]+)"/.exec(n), i = Math.ceil(Number((e == null ? void 0 : e[1]) ?? 1200)), c = Math.ceil(Number((e == null ? void 0 : e[2]) ?? 800)), u = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(n)}`, d = new Image();
  d.crossOrigin = "anonymous";
  try {
    await new Promise((l, r) => {
      d.onload = () => l(), d.onerror = () => r(new Error("svg rasterise failed")), d.src = u;
    });
  } catch {
    return null;
  }
  const h = 2, m = i * h, f = c * h;
  if (!Number.isSafeInteger(m) || !Number.isSafeInteger(f) || m > ft.maxExportDimension || f > ft.maxExportDimension || m * f > ft.maxExportPixels) return null;
  const s = document.createElement("canvas");
  s.width = m, s.height = f;
  const a = s.getContext("2d");
  return a ? (a.scale(h, h), a.drawImage(d, 0, 0), new Promise((l) => {
    try {
      s.toBlob((r) => l(r), "image/png");
    } catch {
      l(null);
    }
  })) : null;
}
function Dn(t, n, e) {
  if (t.length < 2) return;
  const i = t.filter(
    (l) => l.type !== "draw" && l.type !== "arrow" && l.type !== "frame" && l.type !== "image"
  );
  if (i.length < 2) return;
  const c = i.map((l, r) => ({
    id: l.id,
    i: r,
    x: ot(l).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: ot(l).y,
    vx: 0,
    vy: 0
  }));
  for (let l = 0; l < c.length; l++)
    for (let r = 0; r < l; r++)
      if (Math.abs(c[l].x - c[r].x) < 1 && Math.abs(c[l].y - c[r].y) < 1) {
        const v = 2 * Math.PI * l / c.length;
        c[l].x += Math.cos(v) * 10, c[l].y += Math.sin(v) * 10;
        break;
      }
  const u = new Map(c.map((l) => [l.id, l])), d = [];
  for (const l of t) {
    if (l.type !== "arrow") continue;
    const r = l.fromId ? u.get(l.fromId) : null, v = l.toId ? u.get(l.toId) : null;
    r && v && d.push([r, v]);
  }
  const h = 220, m = h * h, f = 80;
  let s = 400;
  const a = s / f;
  for (let l = 0; l < f; l++) {
    for (let r = 0; r < c.length; r++)
      c[r].vx = 0, c[r].vy = 0;
    for (let r = 0; r < c.length; r++)
      for (let v = r + 1; v < c.length; v++) {
        const o = c[r], X = c[v], w = o.x - X.x, x = o.y - X.y, $ = Math.hypot(w, x) || 0.01, p = m / $, g = w / $ * p, M = x / $ * p;
        o.vx += g, o.vy += M, X.vx -= g, X.vy -= M;
      }
    for (const [r, v] of d) {
      const o = r.x - v.x, X = r.y - v.y, w = Math.hypot(o, X) || 0.01, x = w * w / h, $ = o / w * x, p = X / w * x;
      r.vx -= $, r.vy -= p, v.vx += $, v.vy += p;
    }
    for (const r of c) {
      const v = Math.hypot(r.vx, r.vy) || 0.01, o = Math.min(v, s);
      r.x += r.vx / v * o, r.y += r.vy / v * o;
    }
    s = Math.max(0.5, s - a);
  }
  n((l) => l.map((r) => {
    const v = u.get(r.id);
    return v ? { ...r, x: v.x - r.w / 2, y: v.y - r.h / 2 } : r;
  })), e();
}
function _n(t, {
  controlled: n,
  past: e,
  future: i,
  setLocalShapes: c,
  setCamera: u,
  selectNow: d,
  setEditingId: h
}) {
  const m = t;
  if (!m || m.version !== "canvas-v1") return;
  let f;
  try {
    f = Ke({ version: "canvas-v1", shapes: [], camera: m.camera }).camera;
  } catch {
    return;
  }
  !n && Array.isArray(m.shapes) && m.shapes.length <= ft.maxShapes && (e.current = [], i.current = [], c(m.shapes.map(Qt).filter((s) => s !== null))), u(f), d(/* @__PURE__ */ new Set()), h(null);
}
function Bn({
  ref: t,
  containerRef: n,
  shapesRef: e,
  cameraRef: i,
  selectedRef: c,
  past: u,
  future: d,
  controlled: h,
  isDarkMode: m,
  minZoom: f,
  maxZoom: s,
  onToolChange: a,
  onDirty: l,
  commit: r,
  deleteSelection: v,
  selectNow: o,
  viewportCentre: X,
  setShapes: w,
  setLocalShapes: x,
  setCamera: $,
  setEditingId: p,
  setAnnouncement: g,
  createId: M
}) {
  const E = Q((b) => {
    const Y = X(), N = Qt({
      id: M(),
      x: b.x ?? Y.x - b.w / 2,
      y: b.y ?? Y.y - b.h / 2,
      ...b
    });
    if (!N) throw new Error("Canvas could not create a valid shape.");
    return r((k) => [...k, N]), o(/* @__PURE__ */ new Set([N.id])), a("select"), g(`${N.type} 추가됨`), N;
  }, [r, M, a, o, g, X]), z = Q(() => An(e.current, m), [m, e]);
  Oe(t, () => ({
    addNote: (b) => {
      const Y = E({ type: "note", w: 180, h: 180, color: b, text: "" });
      p(Y.id);
    },
    addCard: (b, Y, N, k) => {
      E({ type: "card", w: 260, h: 150, text: b, category: Y, cardStyle: N, color: k });
    },
    addText: () => {
      const b = E({ type: "text", w: 220, h: 44, text: "" });
      p(b.id);
    },
    addShape: (b, Y, N) => {
      E({
        type: b,
        w: b === "ellipse" ? 220 : 200,
        h: b === "ellipse" ? 110 : 140,
        color: Y,
        text: N ?? ""
      });
    },
    addArrow: () => {
      const b = X(), Y = { id: M(), type: "arrow", x: b.x - 140, y: b.y, w: 280, h: 0 };
      r((N) => [...N, Y]), o(/* @__PURE__ */ new Set([Y.id])), a("select");
    },
    addImage: (b, Y, N, k) => {
      E({ type: "image", w: N, h: k, src: b, fileName: Y });
    },
    addFileCard: (b, Y, N) => {
      E({ type: "rect", w: 260, h: 120, color: "purple", text: N, src: Y, fileName: b });
    },
    setTool: a,
    undo: () => {
      const b = u.current.pop();
      b && (d.current.push(e.current), w(b), o(/* @__PURE__ */ new Set()), p(null), l(), g("실행 취소"));
    },
    redo: () => {
      const b = d.current.pop();
      b && (u.current.push(e.current), w(b), o(/* @__PURE__ */ new Set()), p(null), l(), g("다시 실행"));
    },
    deleteSelected: () => {
      v(c.current);
    },
    duplicateSelected: () => {
      var k;
      const b = c.current;
      if (b.size === 0) return;
      const Y = [], N = /* @__PURE__ */ new Map();
      for (const S of e.current) {
        if (!b.has(S.id)) continue;
        let C = S.groupId;
        C && (N.has(C) || N.set(C, M("g")), C = N.get(C)), Y.push({
          ...S,
          id: M(),
          x: S.x + 24,
          y: S.y + 24,
          groupId: C,
          points: (k = S.points) == null ? void 0 : k.map(([P, _]) => [P + 24, _ + 24])
        });
      }
      r((S) => [...S, ...Y]), o(new Set(Y.map((S) => S.id))), g(`${Y.length}개 복제됨`);
    },
    group: () => {
      var N;
      const b = c.current;
      if (b.size < 2) return;
      const Y = M("g");
      r((k) => k.map((S) => b.has(S.id) ? { ...S, groupId: Y } : S)), g(`${b.size}개 그룹화됨`), (N = n.current) == null || N.focus();
    },
    ungroup: () => {
      var Y;
      const b = c.current;
      b.size !== 0 && (r((N) => N.map((k) => b.has(k.id) ? { ...k, groupId: void 0 } : k)), g("그룹 해제됨"), (Y = n.current) == null || Y.focus());
    },
    zoomBy: (b) => {
      $((Y) => {
        var P;
        const N = (P = n.current) == null ? void 0 : P.getBoundingClientRect(), k = Math.min(s, Math.max(f, Y.z * b));
        if (!N) return { ...Y, z: k };
        const S = Y.x + N.width / 2 / Y.z, C = Y.y + N.height / 2 / Y.z;
        return { x: S - N.width / 2 / k, y: C - N.height / 2 / k, z: k };
      });
    },
    zoomTo: (b) => {
      $((Y) => {
        var P;
        const N = (P = n.current) == null ? void 0 : P.getBoundingClientRect(), k = Math.min(s, Math.max(f, b));
        if (!N) return { ...Y, z: k };
        const S = Y.x + N.width / 2 / Y.z, C = Y.y + N.height / 2 / Y.z;
        return { x: S - N.width / 2 / k, y: C - N.height / 2 / k, z: k };
      });
    },
    resetZoom: () => {
      $((b) => {
        var S;
        const Y = (S = n.current) == null ? void 0 : S.getBoundingClientRect();
        if (!Y) return { ...b, z: 1 };
        const N = b.x + Y.width / 2 / b.z, k = b.y + Y.height / 2 / b.z;
        return { x: N - Y.width / 2, y: k - Y.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var G;
      const b = e.current, Y = (G = n.current) == null ? void 0 : G.getBoundingClientRect();
      if (b.length === 0 || !Y) return;
      let N = 1 / 0, k = 1 / 0, S = -1 / 0, C = -1 / 0;
      for (const j of b) {
        const O = R(j);
        N = Math.min(N, O.minX), k = Math.min(k, O.minY), S = Math.max(S, O.maxX), C = Math.max(C, O.maxY);
      }
      const P = 80, _ = Math.min(s, Math.max(
        f,
        Math.min(Y.width / (S - N + P * 2), Y.height / (C - k + P * 2))
      ));
      $({
        x: (N + S) / 2 - Y.width / 2 / _,
        y: (k + C) / 2 - Y.height / 2 / _,
        z: _
      });
    },
    autoLayout: () => Dn(e.current, r, () => g("자동 배치 완료")),
    exportSvg: z,
    exportPng: () => On(z),
    getSnapshot: () => ({ version: "canvas-v1", shapes: e.current, camera: i.current }),
    loadSnapshot: (b) => _n(b, {
      controlled: h,
      past: u,
      future: d,
      setLocalShapes: x,
      setCamera: $,
      selectNow: o,
      setEditingId: p
    })
  }), [
    E,
    z,
    r,
    M,
    v,
    m,
    s,
    f,
    l,
    a,
    o,
    $,
    p,
    x,
    w,
    g,
    X,
    h
  ]);
}
function Hn(t) {
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
function jn({
  containerRef: t,
  editorRef: n,
  shapesRef: e,
  selectedRef: i,
  editingIdRef: c,
  toolRef: u,
  past: d,
  future: h,
  textualTypes: m,
  setIsSpaceDown: f,
  setEditingId: s,
  setShapes: a,
  setAnnouncement: l,
  commit: r,
  deleteSelection: v,
  selectNow: o,
  onDirty: X,
  onToolChange: w,
  createId: x
}) {
  const $ = Q((p, g) => {
    const M = i.current;
    M.size !== 0 && r((E) => E.map((z) => {
      var b;
      return M.has(z.id) ? {
        ...z,
        x: z.x + p,
        y: z.y + g,
        points: (b = z.points) == null ? void 0 : b.map(([Y, N]) => [Y + p, N + g])
      } : z;
    }));
  }, [r, i]);
  it(() => {
    const p = (z) => {
      const b = z;
      return !!b && (b.tagName === "INPUT" || b.tagName === "TEXTAREA" || b.isContentEditable);
    }, g = (z) => z instanceof Element && !!z.closest("input, select, button, textarea, option, label, [data-canvas-control]"), M = (z) => {
      var _, G, j, O;
      const b = t.current, Y = document.activeElement, N = z.target instanceof Node && !!(b != null && b.contains(z.target)), k = !!b && (Y === b || b.contains(Y));
      if (!N && !k || g(z.target)) return;
      if (z.code === "Space" && !p(z.target)) {
        f(!0), z.preventDefault();
        return;
      }
      if (p(z.target)) {
        if (z.key === "Escape")
          z.preventDefault(), s(null), (_ = n.current) == null || _.blur(), (G = t.current) == null || G.focus();
        else if ((z.key === "Delete" || z.key === "Backspace") && !c.current) {
          const y = i.current;
          v(y) && z.preventDefault();
        }
        return;
      }
      const S = z.metaKey || z.ctrlKey, C = i.current;
      if (S && z.key.toLowerCase() === "z") {
        if (z.preventDefault(), z.shiftKey) {
          const y = h.current.pop();
          y && (d.current.push(e.current), a(y), X());
        } else {
          const y = d.current.pop();
          y && (h.current.push(e.current), a(y), X());
        }
        o(/* @__PURE__ */ new Set());
        return;
      }
      if (S && z.key.toLowerCase() === "g") {
        if (z.preventDefault(), z.shiftKey)
          C.size > 0 && (r((y) => y.map((F) => C.has(F.id) ? { ...F, groupId: void 0 } : F)), l("그룹 해제됨"));
        else if (C.size > 1) {
          const y = x("g");
          r((F) => F.map((A) => C.has(A.id) ? { ...A, groupId: y } : A)), l(`${C.size}개 그룹화됨`);
        }
        return;
      }
      if (S && z.key.toLowerCase() === "a") {
        z.preventDefault(), o(new Set(e.current.map((y) => y.id))), l(`전체 ${e.current.length}개 선택됨`);
        return;
      }
      if (z.key === "Delete" || z.key === "Backspace") {
        v(C) && z.preventDefault();
        return;
      }
      if (z.key.startsWith("Arrow")) {
        z.preventDefault();
        const y = z.shiftKey ? 10 : 1;
        z.key === "ArrowLeft" && $(-y, 0), z.key === "ArrowRight" && $(y, 0), z.key === "ArrowUp" && $(0, -y), z.key === "ArrowDown" && $(0, y);
        return;
      }
      if (z.key === "Tab" && e.current.length > 0) {
        z.preventDefault();
        const y = e.current, F = y.findIndex((W) => C.has(W.id)), A = z.shiftKey ? F <= 0 ? y.length - 1 : F - 1 : F === -1 || F === y.length - 1 ? 0 : F + 1, K = y[A];
        o(/* @__PURE__ */ new Set([K.id])), l(`${K.type} 선택됨: ${Tt(K) || "내용 없음"}`);
        return;
      }
      if (z.key === "Enter" && C.size === 1) {
        const y = e.current.find((F) => C.has(F.id));
        y && m.includes(y.type) && (z.preventDefault(), s(y.id));
        return;
      }
      if (z.key === "Escape") {
        if (c.current) {
          z.preventDefault(), s(null), (j = n.current) == null || j.blur(), (O = t.current) == null || O.focus(), w("select");
          return;
        }
        o(/* @__PURE__ */ new Set()), w("select");
        return;
      }
      const P = Hn(z);
      P && (z.preventDefault(), u.current = P, w(P));
    }, E = (z) => {
      const b = t.current;
      !b || !(document.activeElement === b || b.contains(document.activeElement)) || z.code === "Space" && f(!1);
    };
    return window.addEventListener("keydown", M), window.addEventListener("keyup", E), () => {
      window.removeEventListener("keydown", M), window.removeEventListener("keyup", E);
    };
  }, [
    r,
    t,
    x,
    v,
    c,
    n,
    h,
    $,
    X,
    w,
    d,
    o,
    i,
    l,
    s,
    f,
    a,
    e,
    m,
    u
  ]);
}
function Kn({
  containerRef: t,
  editorRef: n,
  pointers: e,
  cameraRef: i,
  shapesRef: c,
  toolRef: u,
  activeColorRef: d,
  camera: h,
  shapes: m,
  selected: f,
  isSpaceDown: s,
  setShapes: a,
  setEditingId: l,
  applyInteraction: r,
  selectNow: v,
  beginHistory: o,
  commit: X,
  onToolChange: w,
  expandToGroups: x,
  toPage: $,
  createId: p
}) {
  const g = p, M = (k, S) => {
    var G;
    const C = ((G = t.current) == null ? void 0 : G.dataset.canvasActiveTool) === "text" ? "text" : u.current;
    if (C !== "note" && C !== "text") return;
    const P = $(k, S), _ = C === "note" ? { id: g(), type: "note", x: P.x - 90, y: P.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: g(), type: "text", x: P.x, y: P.y - 22, w: 220, h: 44, text: "" };
    X((j) => [...j, _]), v(/* @__PURE__ */ new Set([_.id])), l(_.id), w("select");
  };
  return it(() => {
    const k = (S) => {
      var C;
      (C = t.current) != null && C.contains(S.target) && (S.target instanceof Element && S.target.closest('[role="textbox"], [data-canvas-inspector]') || M(S.clientX, S.clientY));
    };
    return window.addEventListener("click", k, !0), () => window.removeEventListener("click", k, !0);
  }), { onPointerDown: (k) => {
    var G, j;
    const S = u.current;
    if (e.current.set(k.pointerId, { x: k.clientX, y: k.clientY }), e.current.size === 2) {
      const [O, y] = [...e.current.values()], F = i.current;
      r({
        kind: "pinch",
        startDist: Math.hypot(y.x - O.x, y.y - O.y) || 1,
        startZoom: F.z,
        startMidX: (O.x + y.x) / 2,
        startMidY: (O.y + y.y) / 2,
        camX: F.x,
        camY: F.y
      });
      return;
    }
    if (e.current.size > 2) return;
    if (k.button === 1 || s || S === "hand" || k.button === 0 && S === "select" && k.altKey) {
      r({ kind: "pan", startX: k.clientX, startY: k.clientY, camX: h.x, camY: h.y });
      return;
    }
    if (k.button !== 0) return;
    const C = $(k.clientX, k.clientY);
    if (l(null), (G = n.current) == null || G.blur(), (j = t.current) == null || j.focus(), S === "draw") {
      const O = { id: g(), type: "draw", x: C.x, y: C.y, w: 0, h: 0, points: [[C.x, C.y]], color: d.current };
      o(), a((y) => [...y, O]), r({ kind: "drawing", id: O.id });
      return;
    }
    if (S === "arrow" || S === "frame" || We.includes(S)) {
      const O = S, y = S === "arrow" ? { id: g(), type: "arrow", x: C.x, y: C.y, w: 0, h: 0, color: d.current } : S === "frame" ? { id: g(), type: "frame", x: C.x, y: C.y, w: 0, h: 0, text: "프레임" } : { id: g(), type: O, x: C.x, y: C.y, w: 0, h: 0, color: d.current, text: "" };
      o(), a((F) => [...F, y]), r({ kind: "creating", id: y.id, startX: C.x, startY: C.y });
      return;
    }
    if (S === "note" || S === "text") return;
    if (S === "eraser") {
      o(), a((O) => ge(O, C.x, C.y, 14 / h.z, h.z)), r({ kind: "erasing" });
      return;
    }
    const P = new Map(m.map((O) => [O.id, O])), _ = [...m].reverse().find((O) => Zt(O, C.x, C.y, h.z, P, m));
    if (_) {
      const O = k.shiftKey ? new Set(f).add(_.id) : f.has(_.id) ? f : /* @__PURE__ */ new Set([_.id]), y = x(O);
      v(y);
      const F = /* @__PURE__ */ new Map();
      for (const A of m) y.has(A.id) && F.set(A.id, A);
      for (const A of m) {
        if (A.type !== "frame" || !y.has(A.id)) continue;
        const K = R(A);
        for (const W of m) {
          if (W.id === A.id || F.has(W.id)) continue;
          const q = ot(W);
          q.x >= K.minX && q.x <= K.maxX && q.y >= K.minY && q.y <= K.maxY && F.set(W.id, W);
        }
      }
      o(), r({ kind: "move", startX: C.x, startY: C.y, origin: F });
      return;
    }
    k.shiftKey || v(/* @__PURE__ */ new Set()), r({
      kind: "marquee",
      startX: C.x,
      startY: C.y,
      curX: C.x,
      curY: C.y,
      screenStartX: k.clientX,
      screenStartY: k.clientY
    });
  }, onResizeHandleDown: (k, S, C) => {
    k.stopPropagation(), e.current.set(k.pointerId, { x: k.clientX, y: k.clientY }), o(), r({ kind: "resize", id: S.id, handle: C, start: S });
  }, onRotateHandleDown: (k, S) => {
    k.stopPropagation(), e.current.set(k.pointerId, { x: k.clientX, y: k.clientY });
    const C = $(k.clientX, k.clientY), P = ot(S);
    o(), r({
      kind: "rotate",
      id: S.id,
      startAngle: Math.atan2(C.y - P.y, C.x - P.x),
      startRotation: S.rotation ?? 0
    });
  }, onConnectHandleDown: (k, S) => {
    k.stopPropagation(), e.current.set(k.pointerId, { x: k.clientX, y: k.clientY });
    const C = $(k.clientX, k.clientY);
    r({ kind: "connect", fromId: S.id, toX: C.x, toY: C.y, hoverId: null });
  }, onBendHandleDown: (k, S) => {
    k.stopPropagation(), e.current.set(k.pointerId, { x: k.clientX, y: k.clientY }), o(), r({ kind: "bend", id: S.id });
  } };
}
function Wn({
  pointers: t,
  interactionRef: n,
  shapesRef: e,
  setShapes: i,
  setEditingId: c,
  setEraserPos: u,
  setGuides: d,
  setAnnouncement: h,
  applyInteraction: m,
  selectNow: f,
  endHistory: s,
  commit: a,
  onToolChange: l,
  createId: r
}) {
  const v = r;
  it(() => {
    const o = (X) => {
      t.current.delete(X.pointerId);
      const w = n.current;
      if (w.kind !== "none") {
        if (w.kind === "pinch") {
          t.current.size < 2 && m({ kind: "none" });
          return;
        }
        if (d([]), w.kind === "erasing") {
          u(null), s(), m({ kind: "none" });
          return;
        }
        if (w.kind === "connect") {
          const $ = e.current.find((b) => b.id === w.fromId);
          if (m({ kind: "none" }), !$) return;
          const p = { x: w.toX, y: w.toY }, g = ot($);
          if (!w.hoverId && Math.hypot(p.x - g.x, p.y - g.y) < 30) return;
          const M = [];
          let E = w.hoverId;
          if (!E) {
            const b = $.type === "note" ? 180 : 200, Y = $.type === "note" ? 180 : 120, N = {
              ...$,
              id: v(),
              x: p.x - b / 2,
              y: p.y - Y / 2,
              w: b,
              h: Y,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            M.push(N), E = N.id;
          }
          const z = {
            id: v(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: $.id,
            toId: E,
            text: ""
          };
          M.push(z), a((b) => [...b, ...M]), f(/* @__PURE__ */ new Set([z.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => c(z.id)) : c(z.id), h("연결 생성됨");
          return;
        }
        if (w.kind === "bend") {
          s(), m({ kind: "none" });
          return;
        }
        if (w.kind === "drawing") {
          i((x) => x.map(($) => {
            if ($.id !== w.id || !$.points) return $;
            const p = $.points.map((z) => z[0]), g = $.points.map((z) => z[1]), M = Math.min(...p), E = Math.min(...g);
            return { ...$, x: M, y: E, w: Math.max(...p) - M, h: Math.max(...g) - E };
          })), s(), m({ kind: "none" });
          return;
        }
        if (w.kind === "creating") {
          i((x) => x.map(($) => {
            if ($.id !== w.id) return $;
            const p = Math.abs($.w) < 4 && Math.abs($.h) < 4 ? {
              ...$,
              w: $.type === "arrow" ? 200 : $.type === "frame" ? 480 : 180,
              h: $.type === "arrow" ? 0 : $.type === "frame" ? 320 : 120
            } : $;
            if (p.type === "arrow") return p;
            const g = lt(p);
            return { ...p, x: g.minX, y: g.minY, w: g.maxX - g.minX, h: g.maxY - g.minY };
          })), s(), f(/* @__PURE__ */ new Set([w.id])), l("select"), m({ kind: "none" });
          return;
        }
        (w.kind === "move" || w.kind === "resize" || w.kind === "rotate") && s(), m({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", o), window.addEventListener("pointercancel", o), () => {
      window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o);
    };
  }, [m, r, s, n, l, t, f, h, c, i, e]);
}
const Un = 0.1, Gn = 4, Rn = 14, Vn = ["note", "card", "rect", "ellipse", "text", "image"];
function qn({
  containerRef: t,
  pointers: n,
  interactionRef: e,
  cameraRef: i,
  shapesRef: c,
  setCamera: u,
  setShapes: d,
  setEraserPos: h,
  setGuides: m,
  applyInteraction: f,
  selectNow: s,
  expandToGroups: a,
  toPage: l
}) {
  it(() => {
    const r = (v) => {
      var x, $;
      n.current.has(v.pointerId) && n.current.set(v.pointerId, { x: v.clientX, y: v.clientY });
      const o = e.current;
      if (o.kind === "none") return;
      const X = i.current;
      if (o.kind === "pinch") {
        if (n.current.size < 2) return;
        const [p, g] = [...n.current.values()], M = Math.hypot(g.x - p.x, g.y - p.y) || 1, E = (p.x + g.x) / 2, z = (p.y + g.y) / 2, b = (x = t.current) == null ? void 0 : x.getBoundingClientRect();
        if (!b) return;
        const Y = Math.min(Gn, Math.max(Un, o.startZoom * (M / o.startDist))), N = o.camX + (o.startMidX - b.left) / o.startZoom, k = o.camY + (o.startMidY - b.top) / o.startZoom;
        u({ x: N - (E - b.left) / Y, y: k - (z - b.top) / Y, z: Y });
        return;
      }
      if (o.kind === "pan") {
        u({
          x: o.camX - (v.clientX - o.startX) / X.z,
          y: o.camY - (v.clientY - o.startY) / X.z,
          z: X.z
        });
        return;
      }
      const w = l(v.clientX, v.clientY);
      if (o.kind === "erasing") {
        d((p) => ge(p, w.x, w.y, Rn / X.z, X.z)), h({ x: w.x, y: w.y });
        return;
      }
      if (o.kind === "connect") {
        const p = c.current, g = new Map(p.map((E) => [E.id, E])), M = [...p].reverse().find((E) => E.id !== o.fromId && Vn.includes(E.type) && Zt(E, w.x, w.y, X.z, g, p));
        f({ ...o, toX: w.x, toY: w.y, hoverId: (M == null ? void 0 : M.id) ?? null });
        return;
      }
      if (o.kind === "bend") {
        const p = c.current, g = p.find((S) => S.id === o.id);
        if (!g) return;
        const M = yt(g, new Map(p.map((S) => [S.id, S])), p), E = M.end.x - M.start.x, z = M.end.y - M.start.y, b = Math.hypot(E, z) || 1, Y = (M.start.x + M.end.x) / 2, N = (M.start.y + M.end.y) / 2, k = (w.x - Y) * (-z / b) + (w.y - N) * (E / b);
        d((S) => S.map((C) => C.id === o.id ? { ...C, bend: k } : C));
        return;
      }
      if (o.kind === "marquee") {
        f({ ...o, curX: w.x, curY: w.y });
        const p = Math.min(o.startX, w.x), g = Math.max(o.startX, w.x), M = Math.min(o.startY, w.y), E = Math.max(o.startY, w.y), z = Math.min(o.screenStartX, v.clientX), b = Math.max(o.screenStartX, v.clientX), Y = Math.min(o.screenStartY, v.clientY), N = Math.max(o.screenStartY, v.clientY), k = /* @__PURE__ */ new Map();
        ($ = t.current) == null || $.querySelectorAll("[data-canvas-shape-id]").forEach((C) => {
          const P = C.dataset.canvasShapeId;
          P && k.set(P, C.getBoundingClientRect());
        });
        const S = c.current.filter((C) => {
          const P = k.get(C.id);
          if (P)
            return P.right >= z && P.left <= b && P.bottom >= Y && P.top <= N;
          const _ = R(C);
          return _.maxX >= p && _.minX <= g && _.maxY >= M && _.minY <= E;
        }).map((C) => C.id);
        s(a(new Set(S)));
        return;
      }
      if (o.kind === "move") {
        let p = w.x - o.startX, g = w.y - o.startY;
        const M = o.origin, E = (() => {
          let Y = 1 / 0, N = 1 / 0, k = -1 / 0, S = -1 / 0;
          return M.forEach((C) => {
            const P = R({ ...C, x: C.x + p, y: C.y + g });
            Y = Math.min(Y, P.minX), N = Math.min(N, P.minY), k = Math.max(k, P.maxX), S = Math.max(S, P.maxY);
          }), { minX: Y, minY: N, maxX: k, maxY: S };
        })(), z = c.current.filter((Y) => !M.has(Y.id)), b = fn(E, z, X.z);
        p += b.dx, g += b.dy, m(b.guides), d((Y) => Y.map((N) => {
          var S;
          const k = M.get(N.id);
          return k ? {
            ...N,
            x: k.x + p,
            y: k.y + g,
            points: (S = k.points) == null ? void 0 : S.map(([C, P]) => [C + p, P + g])
          } : N;
        }));
        return;
      }
      if (o.kind === "drawing") {
        d((p) => p.map((g) => {
          if (g.id !== o.id || !g.points) return g;
          const M = g.points[g.points.length - 1];
          return Math.hypot(w.x - M[0], w.y - M[1]) < 2 / X.z ? g : { ...g, points: [...g.points, [w.x, w.y]] };
        }));
        return;
      }
      if (o.kind === "creating") {
        d((p) => p.map((g) => g.id === o.id ? { ...g, w: w.x - o.startX, h: w.y - o.startY } : g));
        return;
      }
      if (o.kind === "rotate") {
        const p = c.current.find((z) => z.id === o.id);
        if (!p) return;
        const g = ot(p), M = Math.atan2(w.y - g.y, w.x - g.x);
        let E = o.startRotation + (M - o.startAngle);
        v.shiftKey && (E = Math.round(E / (Math.PI / 12)) * (Math.PI / 12)), d((z) => z.map((b) => b.id === o.id ? { ...b, rotation: E } : b));
        return;
      }
      if (o.kind === "resize") {
        const { start: p, handle: g } = o, M = pe(p, w.x, w.y);
        d((E) => E.map((z) => {
          if (z.id !== p.id) return z;
          let { x: b, y: Y, w: N, h: k } = p;
          if (g.includes("e") && (N = Math.max(20, M.x - p.x)), g.includes("s") && (k = Math.max(20, M.y - p.y)), g.includes("w")) {
            const S = p.x + p.w;
            b = Math.min(M.x, S - 20), N = S - b;
          }
          if (g.includes("n")) {
            const S = p.y + p.h;
            Y = Math.min(M.y, S - 20), k = S - Y;
          }
          return { ...z, x: b, y: Y, w: N, h: k, manualSize: z.type === "text" ? !0 : z.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", r), () => window.removeEventListener("pointermove", r);
  }, [f, t, a, e, n, s, c, l]);
}
function Qn(t) {
  qn(t), Wn(t);
}
function Zn({
  containerRef: t,
  editorRef: n,
  pointers: e,
  interactionRef: i,
  cameraRef: c,
  shapesRef: u,
  toolRef: d,
  activeColorRef: h,
  camera: m,
  shapes: f,
  selected: s,
  isSpaceDown: a,
  setCamera: l,
  setShapes: r,
  setEditingId: v,
  setEraserPos: o,
  setGuides: X,
  setAnnouncement: w,
  applyInteraction: x,
  selectNow: $,
  beginHistory: p,
  endHistory: g,
  commit: M,
  onToolChange: E,
  expandToGroups: z,
  toPage: b,
  createId: Y
}) {
  const N = Kn({
    containerRef: t,
    editorRef: n,
    pointers: e,
    cameraRef: c,
    shapesRef: u,
    toolRef: d,
    activeColorRef: h,
    camera: m,
    shapes: f,
    selected: s,
    isSpaceDown: a,
    setShapes: r,
    setEditingId: v,
    applyInteraction: x,
    selectNow: $,
    beginHistory: p,
    commit: M,
    onToolChange: E,
    expandToGroups: z,
    toPage: b,
    createId: Y
  });
  return Qn({
    containerRef: t,
    pointers: e,
    interactionRef: i,
    cameraRef: c,
    shapesRef: u,
    setCamera: l,
    setShapes: r,
    setEditingId: v,
    setEraserPos: o,
    setGuides: X,
    setAnnouncement: w,
    applyInteraction: x,
    selectNow: $,
    endHistory: g,
    commit: M,
    onToolChange: E,
    expandToGroups: z,
    toPage: b,
    createId: Y
  }), N;
}
function Jn(t) {
  return Bn(t), jn(t), Zn(t);
}
function to({
  isDarkMode: t,
  tool: n,
  isSpaceDown: e,
  interaction: i,
  zoom: c
}) {
  const u = e || i.kind === "pan" ? "grabbing" : n === "hand" ? "grab" : n === "draw" ? "crosshair" : n === "eraser" ? "cell" : n === "select" ? "default" : "crosshair", d = t ? T.gridDark : T.gridLight, h = 40 * c;
  return { cursor: u, gridColor: d, gridSize: h, strokeColorOf: (f) => f.color ? nt[f.color].border : t ? "var(--canvas-slate-200)" : T.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = rn, document.head.appendChild(t);
}
const se = 0.1, le = 4, de = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function eo(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const ao = De(function({
  boardIdentity: n = "standalone",
  isDarkMode: e,
  tool: i,
  onToolChange: c,
  onDirty: u,
  onZoomChange: d,
  onSelectionChange: h,
  shapes: m,
  onShapesChange: f,
  peerCursors: s,
  onLocalCursor: a
}, l) {
  var re, ie;
  const {
    containerRef: r,
    editorRef: v,
    setLocalShapes: o,
    controlled: X,
    shapes: w,
    setShapes: x,
    camera: $,
    setCamera: p,
    cameraRef: g,
    selected: M,
    selectedRef: E,
    editingId: z,
    setEditingId: b,
    editingIdRef: Y,
    interaction: N,
    interactionRef: k,
    applyInteraction: S,
    isSpaceDown: C,
    setIsSpaceDown: P,
    guides: _,
    setGuides: G,
    announcement: j,
    setAnnouncement: O,
    showInspectorPalette: y,
    setShowInspectorPalette: F,
    eraserPos: A,
    setEraserPos: K,
    setActiveColor: W,
    activeColorRef: q,
    installedFontFamilies: kt,
    pointers: ht,
    past: gt,
    future: Mt,
    selectNow: bt,
    commit: vt,
    deleteSelection: Jt,
    beginHistory: Xt,
    endHistory: wt,
    toPage: Yt,
    viewportCentre: Ot,
    expandToGroups: Dt,
    toolRef: _t,
    shapesRef: mt
  } = Pn({ boardIdentity: n, tool: i, controlledShapes: m, onShapesChange: f, onDirty: u }), {
    inspectorShape: St,
    onContainerPointerMove: L,
    onContainerPointerLeave: H
  } = Tn({
    containerRef: r,
    camera: $,
    setCamera: p,
    minZoom: se,
    maxZoom: le,
    shapes: w,
    selected: M,
    editingId: z,
    textualTypes: de,
    onZoomChange: d,
    onSelectionChange: h,
    onLocalCursor: a,
    toPage: Yt
  }), {
    onPointerDown: D,
    onResizeHandleDown: U,
    onRotateHandleDown: at,
    onConnectHandleDown: ct,
    onBendHandleDown: Bt
  } = Jn({
    ref: l,
    containerRef: r,
    editorRef: v,
    pointers: ht,
    interactionRef: k,
    cameraRef: g,
    shapesRef: mt,
    toolRef: _t,
    activeColorRef: q,
    camera: $,
    shapes: w,
    selected: M,
    isSpaceDown: C,
    setCamera: p,
    setShapes: x,
    setEditingId: b,
    setEraserPos: K,
    setGuides: G,
    setAnnouncement: O,
    applyInteraction: S,
    selectNow: bt,
    past: gt,
    future: Mt,
    beginHistory: Xt,
    endHistory: wt,
    commit: vt,
    deleteSelection: Jt,
    onDirty: u,
    onToolChange: c,
    controlled: X,
    isDarkMode: e,
    minZoom: se,
    maxZoom: le,
    textualTypes: de,
    selectedRef: E,
    editingIdRef: Y,
    setIsSpaceDown: P,
    viewportCentre: Ot,
    setLocalShapes: o,
    expandToGroups: Dt,
    toPage: Yt,
    createId: eo
  }), { cursor: ke, gridColor: Me, gridSize: te, strokeColorOf: Xe } = to({
    isDarkMode: e,
    tool: i,
    isSpaceDown: C,
    interaction: N,
    zoom: $.z
  }), ee = (Pe) => {
    const Te = E.current, ae = Y.current, Ht = new Set(Te);
    ae && Ht.add(ae), Ht.size !== 0 && vt((Ae) => Ae.map((jt) => Ht.has(jt.id) ? { ...jt, ...Pe } : jt));
  }, {
    commitEditorHtml: Ye,
    applyFormat: Se,
    applyList: Ce,
    onEditorKeyDown: Ne,
    applyCustomFontFamily: Ie
  } = Ln({
    editorRef: v,
    editingId: z,
    setShapes: x,
    setAnnouncement: O,
    onDirty: u,
    patchSelected: ee
  }), { renderEditor: Ee, renderShapeBody: Fe } = En({
    camera: $,
    editingId: z,
    isDarkMode: e,
    editorRef: v,
    commitEditorHtml: Ye,
    onEditorKeyDown: Ne,
    setShapes: x,
    onDirty: u
  }), Le = N.kind === "marquee" ? N : null, { shapeById: ne, visiblePaintOrder: oe } = Fn({
    containerRef: r,
    shapesRef: mt,
    shapes: w,
    camera: $,
    selected: M,
    editingId: z,
    boardIdentity: n
  });
  return /* @__PURE__ */ B(
    "div",
    {
      ref: r,
      onPointerDown: D,
      onPointerMove: L,
      onPointerLeave: H,
      role: "application",
      "data-canvas-board-id": n,
      "data-canvas-active-tool": i,
      "data-canvas-camera-x": $.x,
      "data-canvas-camera-y": $.y,
      "data-canvas-camera-z": $.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: ke,
        background: e ? T.canvasDark : T.canvasLight,
        backgroundImage: `radial-gradient(${Me} 1px, transparent 1px)`,
        backgroundSize: `${te}px ${te}px`,
        backgroundPosition: `${-$.x * $.z}px ${-$.y * $.z}px`
      },
      children: [
        /* @__PURE__ */ I("style", { children: '.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas .canvas-rich-text ul>li::before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style="dash"]>li::before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li::before{content:counter(canvas-list-item) ". "}' }),
        /* @__PURE__ */ I(
          "div",
          {
            "aria-live": "polite",
            role: "status",
            className: "absolute w-px h-px overflow-hidden whitespace-nowrap",
            style: { clip: "rect(0 0 0 0)", clipPath: "inset(50%)" },
            children: j
          }
        ),
        /* @__PURE__ */ I(
          vn,
          {
            visiblePaintOrder: oe,
            selected: M,
            shapeById: ne,
            allShapes: mt.current,
            camera: $,
            interaction: N,
            eraserPos: A,
            guides: _,
            marquee: Le,
            strokeColorOf: Xe
          }
        ),
        /* @__PURE__ */ I(
          Nn,
          {
            visiblePaintOrder: oe,
            selected: M,
            editingId: z,
            camera: $,
            shapeById: ne,
            allShapes: mt.current,
            peerCursors: s,
            isDarkMode: e,
            renderEditor: Ee,
            renderShapeBody: Fe,
            setEditingId: b,
            onBendHandleDown: Bt,
            onResizeHandleDown: U,
            onRotateHandleDown: at,
            onConnectHandleDown: ct
          }
        ),
        St && /* @__PURE__ */ I(
          In,
          {
            shape: St,
            shapes: w,
            camera: $,
            canvasSize: { width: ((re = r.current) == null ? void 0 : re.clientWidth) ?? 380, height: ((ie = r.current) == null ? void 0 : ie.clientHeight) ?? 190 },
            isDarkMode: e,
            editing: !!z,
            showPalette: y,
            installedFontFamilies: kt,
            setShowPalette: F,
            setActiveColor: W,
            patchSelected: ee,
            applyFormat: Se,
            applyList: Ce,
            applyCustomFontFamily: Ie
          }
        )
      ]
    }
  );
});
export {
  nt as CANVAS_COLORS,
  je as CANVAS_COLOR_KEYS,
  rt as CANVAS_FONTS,
  ao as InfiniteCanvas,
  We as SHAPE_TOOLS
};
