import { jsx as N, jsxs as B, Fragment as vt } from "react/jsx-runtime";
import { useRef as G, useState as J, useLayoutEffect as Kt, useEffect as dt, useMemo as mt, useCallback as Q, useImperativeHandle as Oe, forwardRef as De } from "react";
import { p as _e, i as qt, k as ue, a as ot, v as Be, c as st, s as He, b as je, d as yt, h as Ke, S as We } from "./document-BSiBzQk-.js";
import { Palette as Re, Minus as Ue, Plus as Ge, ChevronDown as Ve, AlignLeft as qe, AlignCenter as Qe, AlignRight as Ze, List as Je, ListOrdered as tn, Bold as en, Italic as nn, Underline as on } from "lucide-react";
const rn = '.invoicex-canvas{position:relative;width:100%;height:100%;min-height:240px;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none;outline:none;--canvas-slate-50: #f8fafc;--canvas-slate-100: #f1f5f9;--canvas-slate-200: #e2e8f0;--canvas-slate-300: #cbd5e1;--canvas-slate-400: #94a3b8;--canvas-slate-500: #64748b;--canvas-slate-600: #475569;--canvas-slate-700: #334155;--canvas-slate-800: #1e293b;--canvas-slate-900: #0f172a;--canvas-slate-950: #020617;--canvas-blue-50: #eff6ff;--canvas-blue-500: #3b82f6;--canvas-blue-600: #2563eb;--canvas-white: #fff;--canvas-slate-900-95: rgba(15,23,42,.95);--canvas-slate-950-60: rgba(2,6,23,.6);--canvas-slate-950-70: rgba(2,6,23,.7);--canvas-white-95: rgba(255,255,255,.95);--canvas-white-10: rgba(255,255,255,.1);--canvas-blue-600-60: rgba(37,99,235,.6);--canvas-grid-dark: rgba(148,163,184,.16);--canvas-grid-light: rgba(100,116,139,.18);--canvas-shadow-sm: 0 1px 2px rgba(15,23,42,.12);--canvas-shadow-md: 0 4px 6px -1px rgba(15,23,42,.15);--canvas-shadow-lg: 0 10px 15px -3px rgba(15,23,42,.2);--canvas-shadow-xl: 0 20px 25px -5px rgba(15,23,42,.2), 0 8px 10px -6px rgba(15,23,42,.1)}.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{box-sizing:border-box}.invoicex-canvas .absolute{position:absolute}.invoicex-canvas .relative{position:relative}.invoicex-canvas .inset-0{top:0;right:0;bottom:0;left:0}.invoicex-canvas .top-0{top:0}.invoicex-canvas .left-0{left:0}.invoicex-canvas .right-0{right:0}.invoicex-canvas .bottom-0{bottom:0}.invoicex-canvas .w-full{width:100%}.invoicex-canvas .h-full{height:100%}.invoicex-canvas .w-px{width:1px}.invoicex-canvas .h-px{height:1px}.invoicex-canvas .w-5{width:1.25rem}.invoicex-canvas .h-5{height:1.25rem}.invoicex-canvas .w-6{width:1.5rem}.invoicex-canvas .w-7{width:1.75rem}.invoicex-canvas .w-24{width:6rem}.invoicex-canvas .flex{display:flex}.invoicex-canvas .flex-1{flex:1 1 0%}.invoicex-canvas .flex-col{flex-direction:column}.invoicex-canvas .flex-wrap{flex-wrap:wrap}.invoicex-canvas .items-center{align-items:center}.invoicex-canvas .justify-center{justify-content:center}.invoicex-canvas .gap-0\\.5{gap:.125rem}.invoicex-canvas .gap-1{gap:.25rem}.invoicex-canvas .gap-1\\.5{gap:.375rem}.invoicex-canvas .gap-2{gap:.5rem}.invoicex-canvas .block{display:block}.invoicex-canvas .hidden{display:none}.invoicex-canvas .p-1{padding:.25rem}.invoicex-canvas .p-0\\.5{padding:.125rem}.invoicex-canvas .p-2{padding:.5rem}.invoicex-canvas .p-3{padding:.75rem}.invoicex-canvas .p-4{padding:1rem}.invoicex-canvas .px-1{padding-left:.25rem;padding-right:.25rem}.invoicex-canvas .px-1\\.5{padding-left:.375rem;padding-right:.375rem}.invoicex-canvas .px-2{padding-left:.5rem;padding-right:.5rem}.invoicex-canvas .px-3{padding-left:.75rem;padding-right:.75rem}.invoicex-canvas .py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.invoicex-canvas .py-1{padding-top:.25rem;padding-bottom:.25rem}.invoicex-canvas .pt-1\\.5{padding-top:.375rem}.invoicex-canvas .pt-2{padding-top:.5rem}.invoicex-canvas .pl-2{padding-left:.5rem}.invoicex-canvas .pr-7{padding-right:1.75rem}.invoicex-canvas .mt-1{margin-top:.25rem}.invoicex-canvas .mb-2{margin-bottom:.5rem}.invoicex-canvas .right-1\\.5{right:.375rem}.invoicex-canvas .top-10{top:2.5rem}.invoicex-canvas .overflow-hidden{overflow:hidden}.invoicex-canvas .overflow-visible{overflow:visible}.invoicex-canvas .overflow-x-auto{overflow-x:auto}.invoicex-canvas .whitespace-nowrap{white-space:nowrap}.invoicex-canvas .whitespace-pre-wrap{white-space:pre-wrap}.invoicex-canvas .break-words{overflow-wrap:break-word}.invoicex-canvas .touch-none{touch-action:none}.invoicex-canvas .select-none{-webkit-user-select:none;user-select:none}.invoicex-canvas .pointer-events-none{pointer-events:none}.invoicex-canvas .cursor-pointer{cursor:pointer}.invoicex-canvas .origin-top-left{transform-origin:top left}.invoicex-canvas .object-contain{object-fit:contain}.invoicex-canvas .outline-none{outline:none}.invoicex-canvas .opacity-0{opacity:0}.invoicex-canvas .opacity-40{opacity:.4}.invoicex-canvas .opacity-70{opacity:.7}.invoicex-canvas .opacity-60{opacity:.6}.invoicex-canvas .font-medium{font-weight:500}.invoicex-canvas .font-semibold{font-weight:600}.invoicex-canvas .font-bold{font-weight:700}.invoicex-canvas .uppercase{text-transform:uppercase}.invoicex-canvas .tracking-widest{letter-spacing:.1em}.invoicex-canvas .tracking-wide{letter-spacing:.025em}.invoicex-canvas .text-center{text-align:center}.invoicex-canvas .tabular-nums{font-variant-numeric:tabular-nums}.invoicex-canvas .underline{text-decoration:underline}.invoicex-canvas .italic{font-style:italic}.invoicex-canvas .text-white{color:var(--canvas-white)}.invoicex-canvas .text-slate-100{color:var(--canvas-slate-100)}.invoicex-canvas .text-slate-200{color:var(--canvas-slate-200)}.invoicex-canvas .text-slate-300{color:var(--canvas-slate-300)}.invoicex-canvas .text-slate-400{color:var(--canvas-slate-400)}.invoicex-canvas .text-slate-500{color:var(--canvas-slate-500)}.invoicex-canvas .text-slate-700{color:var(--canvas-slate-700)}.invoicex-canvas .text-slate-800{color:var(--canvas-slate-800)}.invoicex-canvas .text-slate-900{color:var(--canvas-slate-900)}.invoicex-canvas .text-xs{font-size:.75rem;line-height:1rem}.invoicex-canvas .text-base{font-size:1rem;line-height:1.5rem}.invoicex-canvas .text-\\[10px\\]{font-size:10px;line-height:1.1}.invoicex-canvas .text-\\[11px\\]{font-size:11px;line-height:1.25rem}.invoicex-canvas .bg-white{background-color:var(--canvas-white)}.invoicex-canvas .bg-transparent{background-color:transparent}.invoicex-canvas .bg-blue-600{background-color:var(--canvas-blue-600)}.invoicex-canvas .bg-blue-500{background-color:var(--canvas-blue-500)}.invoicex-canvas .bg-blue-50{background-color:var(--canvas-blue-50)}.invoicex-canvas .bg-slate-50{background-color:var(--canvas-slate-50)}.invoicex-canvas .bg-slate-900\\/95{background-color:var(--canvas-slate-900-95)}.invoicex-canvas .bg-slate-950\\/60{background-color:var(--canvas-slate-950-60)}.invoicex-canvas .bg-slate-950\\/70{background-color:var(--canvas-slate-950-70)}.invoicex-canvas .bg-white\\/95{background-color:var(--canvas-white-95)}.invoicex-canvas .bg-slate-200{background-color:var(--canvas-slate-200)}.invoicex-canvas .bg-slate-700{background-color:var(--canvas-slate-700)}.invoicex-canvas .bg-slate-800{background-color:var(--canvas-slate-800)}.invoicex-canvas .bg-slate-900{background-color:var(--canvas-slate-900)}.invoicex-canvas .bg-slate-950{background-color:var(--canvas-slate-950)}.invoicex-canvas .border{border-width:1px;border-style:solid}.invoicex-canvas .border-2{border-width:2px;border-style:solid}.invoicex-canvas .border-t{border-top-width:1px;border-top-style:solid}.invoicex-canvas .border-white\\/10{border-color:var(--canvas-white-10)}.invoicex-canvas .border-slate-200{border-color:var(--canvas-slate-200)}.invoicex-canvas .border-slate-100{border-color:var(--canvas-slate-100)}.invoicex-canvas .border-slate-300{border-color:var(--canvas-slate-300)}.invoicex-canvas .border-slate-600{border-color:var(--canvas-slate-600)}.invoicex-canvas .border-slate-700{border-color:var(--canvas-slate-700)}.invoicex-canvas .border-blue-600{border-color:var(--canvas-blue-600)}.invoicex-canvas .border-blue-600\\/60{border-color:var(--canvas-blue-600-60)}.invoicex-canvas .rounded{border-radius:.25rem}.invoicex-canvas .rounded-sm{border-radius:.125rem}.invoicex-canvas .rounded-md{border-radius:.375rem}.invoicex-canvas .rounded-lg{border-radius:.5rem}.invoicex-canvas .rounded-xl{border-radius:.75rem}.invoicex-canvas .rounded-2xl{border-radius:1rem}.invoicex-canvas .rounded-full{border-radius:9999px}.invoicex-canvas .shadow-sm{box-shadow:var(--canvas-shadow-sm)}.invoicex-canvas .shadow-md{box-shadow:var(--canvas-shadow-md)}.invoicex-canvas .shadow-lg{box-shadow:var(--canvas-shadow-lg)}.invoicex-canvas .shadow-xl{box-shadow:var(--canvas-shadow-xl)}.invoicex-canvas .z-40{z-index:40}.invoicex-canvas .z-50{z-index:50}.invoicex-canvas .h-7{height:1.75rem}.invoicex-canvas .h-6{height:1.5rem}.invoicex-canvas .text-decoration-underline{text-decoration:underline}.invoicex-canvas .hover\\:bg-blue-500:hover{background-color:var(--canvas-blue-500)}.invoicex-canvas .hover\\:bg-blue-50:hover{background-color:var(--canvas-blue-50)}.invoicex-canvas .hover\\:bg-slate-800:hover{background-color:var(--canvas-slate-800)}.invoicex-canvas .hover\\:bg-slate-100:hover{background-color:var(--canvas-slate-100)}.invoicex-canvas .hover\\:bg-slate-50:hover{background-color:var(--canvas-slate-50)}.invoicex-canvas .focus\\:outline-none:focus{outline:none}.invoicex-canvas .-inset-0\\.5{top:-.125rem;right:-.125rem;bottom:-.125rem;left:-.125rem}.invoicex-canvas .w-3\\.5{width:.875rem}.invoicex-canvas .h-3\\.5{height:.875rem}.invoicex-canvas .w-4{width:1rem}.invoicex-canvas .h-4{height:1rem}.invoicex-canvas .w-8{width:2rem}.invoicex-canvas .h-8{height:2rem}.invoicex-canvas .w-44{width:11rem}.invoicex-canvas .min-w-20{min-width:5rem}.invoicex-canvas .max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.invoicex-canvas .leading-none{line-height:1}.invoicex-canvas .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.invoicex-canvas .pointer-events-auto{pointer-events:auto}.invoicex-canvas .backdrop-blur-sm{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.invoicex-canvas .transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-duration:.15s}.invoicex-canvas .canvas-rich-text ul,.invoicex-canvas .canvas-rich-text ol{margin:0;padding-left:0;list-style:none}.invoicex-canvas [data-canvas-text-view] ul,.invoicex-canvas [data-canvas-text-view] ol,.invoicex-canvas [data-canvas-text-view] li{pointer-events:none}.invoicex-canvas [data-canvas-text-view] li a{pointer-events:auto}.invoicex-canvas .canvas-rich-text ul>li:before{content:"• "}.invoicex-canvas .canvas-rich-text ul[data-list-style=dash]>li:before{content:"– "}.invoicex-canvas .canvas-rich-text ol{counter-reset:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li{counter-increment:canvas-list-item}.invoicex-canvas .canvas-rich-text ol>li:before{content:counter(canvas-list-item) ". "}@media(prefers-reduced-motion:reduce){.invoicex-canvas,.invoicex-canvas *,.invoicex-canvas *:before,.invoicex-canvas *:after{scroll-behavior:auto!important;transition-duration:.01ms!important}}', O = Object.freeze({
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
  const u = Nt(t, n, e), d = Nt(t, n, i), v = Nt(e, i, t), m = Nt(e, i, n);
  return Math.abs(u) < 1e-6 && Ct(t, e, n) || Math.abs(d) < 1e-6 && Ct(t, i, n) || Math.abs(v) < 1e-6 && Ct(e, t, i) || Math.abs(m) < 1e-6 && Ct(e, n, i) ? !0 : u > 0 != d > 0 && v > 0 != m > 0;
}
function cn(t, n, e) {
  const i = Math.min(t.x, n.x), c = Math.max(t.x, n.x), u = Math.min(t.y, n.y), d = Math.max(t.y, n.y);
  if (c < e.minX || i > e.maxX || d < e.minY || u > e.maxY) return !1;
  if (t.x >= e.minX && t.x <= e.maxX && t.y >= e.minY && t.y <= e.maxY || n.x >= e.minX && n.x <= e.maxX && n.y >= e.minY && n.y <= e.maxY) return !0;
  const v = { x: e.minX, y: e.minY }, m = { x: e.maxX, y: e.minY }, h = { x: e.maxX, y: e.maxY }, s = { x: e.minX, y: e.maxY };
  return It(t, n, v, m) || It(t, n, m, h) || It(t, n, h, s) || It(t, n, s, v);
}
function sn(t, n) {
  for (let e = 1; e < t.length; e++)
    for (const i of n)
      if (cn(t[e - 1], t[e], i)) return !0;
  return !1;
}
function Rt(t) {
  let n = 0;
  for (let e = 1; e < t.length; e++) n += Math.hypot(t[e].x - t[e - 1].x, t[e].y - t[e - 1].y);
  return n;
}
function xe(t) {
  if (t.length === 0) return { x: 0, y: 0 };
  if (t.length === 1) return { x: t[0].x, y: t[0].y };
  const n = Rt(t);
  if (n === 0) return t[0];
  const e = n / 2;
  let i = 0;
  for (let u = 1; u < t.length; u++) {
    const d = Math.hypot(t[u].x - t[u - 1].x, t[u].y - t[u - 1].y);
    if (i + d >= e) {
      const v = (e - i) / d;
      return { x: t[u - 1].x + (t[u].x - t[u - 1].x) * v, y: t[u - 1].y + (t[u].y - t[u - 1].y) * v };
    }
    i += d;
  }
  const c = t[t.length - 1];
  return { x: c.x, y: c.y };
}
function Ut(t, n) {
  return Math.atan2(n.y - t.y, n.x - t.x);
}
function ce(t, n, e, i) {
  const c = /* @__PURE__ */ new Set([t, n]), u = Math.min(t, n), d = Math.max(t, n), v = an * 1.2;
  for (const m of e) {
    const h = (i === "x" ? m.minX : m.minY) - v, s = (i === "x" ? m.maxX : m.maxY) + v, a = (l) => l >= u - v * 4 && l <= d + v * 4;
    a(h) && c.add(h), a(s) && c.add(s);
  }
  return [...c].sort((m, h) => Math.abs(m - t) - Math.abs(h - t));
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
  return c.length === 0 ? [] : c.reduce((u, d) => Rt(d) < Rt(u) ? d : u);
}
function he(t, n, e = []) {
  const i = t.side ?? (Math.abs(n.x - t.x) >= Math.abs(n.y - t.y) ? "e" : "s"), c = n.side ?? (i === "e" || i === "w" ? "w" : "n"), u = i === "e" || i === "w", d = c === "e" || c === "w", v = ce(t.x, n.x, e, "x"), m = ce(t.y, n.y, e, "y"), h = [];
  if (u && d) {
    for (const s of v) h.push([t, { x: s, y: t.y }, { x: s, y: n.y }, n]);
    for (const s of m) h.push([t, { x: t.x, y: s }, { x: n.x, y: s }, n]);
  } else if (!u && !d) {
    for (const s of m) h.push([t, { x: t.x, y: s }, { x: n.x, y: s }, n]);
    for (const s of v) h.push([t, { x: s, y: t.y }, { x: s, y: n.y }, n]);
  } else if (u) {
    h.push([t, { x: n.x, y: t.y }, n]);
    for (const s of m)
      h.push([t, { x: t.x, y: s }, { x: n.x, y: s }, n]), h.push([t, { x: t.x, y: s }, n]);
    for (const s of v) h.push([t, { x: s, y: t.y }, { x: s, y: n.y }, n]);
  } else {
    h.push([t, { x: t.x, y: n.y }, n]);
    for (const s of m)
      h.push([t, { x: t.x, y: s }, n]), h.push([t, { x: t.x, y: s }, { x: n.x, y: s }, n]);
    for (const s of v) h.push([t, { x: s, y: t.y }, { x: s, y: n.y }, n]);
  }
  return ln(h, e);
}
function dn(t) {
  return t.length < 2 ? 0 : Ut(t[t.length - 2], t[t.length - 1]);
}
function Gt(t) {
  if (t.fillColor)
    try {
      return ue(t.fillColor);
    } catch {
    }
  return t.color ? ot[t.color].bg : ot.blue.bg;
}
function un(t) {
  return t.color ? ot[t.color].border : "#2563eb";
}
function pt(t) {
  if (t.textColor)
    try {
      return ue(t.textColor);
    } catch {
    }
  return t.color ? ot[t.color].text : "#0f172a";
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
      const i = n / 2, c = e / 2, u = Math.min(n, e) / 2, d = u * 0.4, v = [];
      for (let m = 0; m < 10; m++) {
        const h = Math.PI / 5 * m - Math.PI / 2, s = m % 2 === 0 ? u : d;
        v.push(`${i + s * Math.cos(h)},${c + s * Math.sin(h)}`);
      }
      return v.join(" ");
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
    const [c, u] = t[i], [d, v] = t[i + 1];
    n += ` Q ${c} ${u} ${(c + d) / 2} ${(u + v) / 2}`;
  }
  const e = t[t.length - 1];
  return `${n} L ${e[0]} ${e[1]}`;
}
function ft(t) {
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
      const v = d;
      if (v.tagName === "BR") {
        e.push([]);
        return;
      }
      const m = { bold: u.bold || v.tagName === "B" || v.tagName === "STRONG", italic: u.italic || v.tagName === "I" || v.tagName === "EM", underline: u.underline || v.tagName === "U" }, h = v.tagName === "DIV" || v.tagName === "P" || v.tagName === "LI";
      h && e[e.length - 1].length > 0 && e.push([]), i(v, m), h && e.push([]);
    });
  };
  return i(n.content, { bold: !1, italic: !1, underline: !1 }), e.filter((c) => c.length > 0);
}
function Pt(t) {
  return t.html ? qt(t.html) : t.text ? ft(t.text).replace(/\n/g, "<br>") : "";
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
function ht(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function rt(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function V(t) {
  const n = t.rotation ?? 0, e = ht(t);
  if (!n) return e;
  const i = rt(t), c = Math.cos(n), u = Math.sin(n), d = [
    [e.minX, e.minY],
    [e.maxX, e.minY],
    [e.maxX, e.maxY],
    [e.minX, e.maxY]
  ].map(([h, s]) => {
    const a = h - i.x, l = s - i.y;
    return [i.x + a * c - l * u, i.y + a * u + l * c];
  }), v = d.map((h) => h[0]), m = d.map((h) => h[1]);
  return { minX: Math.min(...v), minY: Math.min(...m), maxX: Math.max(...v), maxY: Math.max(...m) };
}
function pe(t, n, e) {
  const i = t.rotation ?? 0;
  if (!i) return { x: n, y: e };
  const c = rt(t), u = Math.cos(-i), d = Math.sin(-i), v = n - c.x, m = e - c.y;
  return { x: c.x + v * u - m * d, y: c.y + v * d + m * u };
}
function Lt(t, n, e, i, c, u) {
  const d = c - e, v = u - i, m = d * d + v * v, h = m === 0 ? 0 : Math.max(0, Math.min(1, ((t - e) * d + (n - i) * v) / m));
  return Math.hypot(t - (e + h * d), n - (i + h * v));
}
function Zt(t, n, e, i, c, u) {
  const d = 8 / i;
  if (t.type === "arrow") {
    const h = $t(t, c ?? /* @__PURE__ */ new Map(), u);
    if (h.routing === "orthogonal" && h.pathPoints && h.pathPoints.length > 1) {
      for (let a = 1; a < h.pathPoints.length; a++) {
        const l = h.pathPoints[a - 1], r = h.pathPoints[a];
        if (Lt(n, e, l.x, l.y, r.x, r.y) <= d) return !0;
      }
      return !1;
    }
    if (h.bend === 0) return Lt(n, e, h.start.x, h.start.y, h.end.x, h.end.y) <= d;
    let s = h.start;
    for (let a = 1; a <= 16; a++) {
      const l = Mt(a / 16, h.start, h.control, h.end);
      if (Lt(n, e, s.x, s.y, l.x, l.y) <= d) return !0;
      s = l;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    for (let h = 1; h < t.points.length; h++) {
      const [s, a] = t.points[h - 1], [l, r] = t.points[h];
      if (Lt(n, e, s, a, l, r) <= d) return !0;
    }
    return !1;
  }
  const v = pe(t, n, e), m = ht(t);
  if (t.type === "frame") {
    const h = v.x >= m.minX - d && v.x <= m.maxX + d && v.y >= m.minY - d && v.y <= m.maxY + d && (v.x <= m.minX + d || v.x >= m.maxX - d || v.y <= m.minY + d || v.y >= m.maxY - d), s = v.x >= m.minX - d && v.x <= m.maxX + d && v.y >= m.minY - 28 / i && v.y <= m.minY;
    return h || s;
  }
  return v.x >= m.minX - d && v.x <= m.maxX + d && v.y >= m.minY - d && v.y <= m.maxY + d;
}
function wt(t, n, e) {
  const i = ht(t), c = (i.minX + i.maxX) / 2, u = (i.minY + i.maxY) / 2, d = n - c, v = e - u;
  if (d === 0 && v === 0) return { x: c, y: u, side: "e" };
  const m = (i.maxX - i.minX) / 2, h = (i.maxY - i.minY) / 2, s = m === 0 ? 1 / 0 : Math.abs(m / d), a = h === 0 ? 1 / 0 : Math.abs(h / v);
  return s <= a ? { x: c + d * s, y: u + v * s, side: d >= 0 ? "e" : "w" } : { x: c + d * a, y: u + v * a, side: v >= 0 ? "s" : "n" };
}
function ye(t, n, e, i) {
  const c = /* @__PURE__ */ new Set([n.id, e, i]);
  return t.filter((u) => !c.has(u.id)).map((u) => {
    const d = V(u);
    return { minX: d.minX - Et, minY: d.minY - Et, maxX: d.maxX + Et, maxY: d.maxY + Et };
  }).filter((u) => u.maxX > u.minX && u.maxY > u.minY);
}
function $t(t, n, e = []) {
  const i = t.fromId ? n.get(t.fromId) : void 0, c = t.toId ? n.get(t.toId) : void 0;
  let u = { x: t.x, y: t.y }, d = { x: t.x + t.w, y: t.y + t.h };
  if (i && c) {
    const f = rt(i), o = rt(c);
    u = wt(i, o.x, o.y), d = wt(c, f.x, f.y);
  } else i ? u = wt(i, d.x, d.y) : c && (d = wt(c, u.x, u.y));
  const v = (u.x + d.x) / 2, m = (u.y + d.y) / 2, h = t.bend ?? 0;
  let s = { x: v, y: m };
  if (h !== 0) {
    const f = d.x - u.x, o = d.y - u.y, M = Math.hypot(f, o) || 1;
    s = { x: v + -o / M * h, y: m + f / M * h };
  }
  const a = !!(i || c), l = t.routing ?? (a ? "orthogonal" : h !== 0 ? "curved" : "straight");
  if (l !== "orthogonal") return { start: u, end: d, control: s, bend: h, routing: l };
  const r = ye(e, t, i == null ? void 0 : i.id, c == null ? void 0 : c.id);
  return { start: u, end: d, control: s, bend: h, routing: l, pathPoints: fe(he(u, d, r)) };
}
function Mt(t, n, e, i) {
  const c = 1 - t;
  return { x: c * c * n.x + 2 * c * t * e.x + t * t * i.x, y: c * c * n.y + 2 * c * t * e.y + t * t * i.y };
}
function ge(t, n, e, i, c) {
  const u = [];
  let d = 0;
  for (const v of t) {
    if (v.type !== "draw" || !v.points) {
      if (Zt(v, n, e, c)) continue;
      u.push(v);
      continue;
    }
    const m = [];
    let h = [];
    for (const [a, l] of v.points)
      Math.hypot(a - n, l - e) <= i / c ? (h.length > 1 && m.push(h), h = []) : h.push([a, l]);
    if (h.length > 1 && m.push(h), m.length === 0) continue;
    const s = ht(v);
    m.forEach((a) => u.push({ ...v, id: `${v.id}-e${d++}`, points: a, x: s.minX, y: s.minY, w: s.maxX - s.minX, h: s.maxY - s.minY }));
  }
  return u;
}
function fn(t, n, e) {
  const i = 6 / e;
  let c = null, u = null;
  const d = [], v = [t.minX, (t.minX + t.maxX) / 2, t.maxX], m = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const h of n) {
    const s = V(h), a = [s.minX, (s.minX + s.maxX) / 2, s.maxX], l = [s.minY, (s.minY + s.maxY) / 2, s.maxY];
    for (const r of v) for (const f of a) {
      const o = f - r;
      Math.abs(o) <= i && (!c || Math.abs(o) < Math.abs(c.delta)) && (c = { delta: o, at: f });
    }
    for (const r of m) for (const f of l) {
      const o = f - r;
      Math.abs(o) <= i && (!u || Math.abs(o) < Math.abs(u.delta)) && (u = { delta: o, at: f });
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
  guides: v,
  marquee: m,
  strokeColorOf: h
}) {
  return /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ B("g", { transform: `scale(${c.z}) translate(${-c.x}, ${-c.y})`, children: [
    t.map((s) => {
      if (s.type === "draw" && s.points)
        return /* @__PURE__ */ N(
          "path",
          {
            "data-canvas-vector-shape-id": s.id,
            "data-canvas-vector-shape-type": "draw",
            d: ve(s.points),
            fill: "none",
            stroke: n.has(s.id) ? O.blue : h(s),
            strokeWidth: 3 / c.z,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          s.id
        );
      if (s.type !== "arrow") return null;
      const a = n.has(s.id) ? O.blue : h(s), l = $t(s, e, i), r = 14 / c.z, f = 5 / c.z, o = l.routing === "orthogonal" && l.pathPoints ? l.pathPoints : null, M = o && o.length > 1;
      let g, x;
      if (M)
        g = Wt(o), x = dn(o);
      else if (l.routing === "curved") {
        g = `M ${l.start.x} ${l.start.y} Q ${l.control.x} ${l.control.y} ${l.end.x} ${l.end.y}`;
        const k = Mt(0.94, l.start, l.control, l.end);
        x = Math.atan2(l.end.y - k.y, l.end.x - k.x);
      } else
        g = `M ${l.start.x} ${l.start.y} L ${l.end.x} ${l.end.y}`, x = Math.atan2(l.end.y - l.start.y, l.end.x - l.start.x);
      const z = M && o.length >= 2 ? Ut(o[0], o[1]) : l.routing === "orthogonal" && l.start.side ? l.start.side === "e" ? 0 : l.start.side === "w" ? Math.PI : l.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Ut(l.start, l.end), p = s.strokeStyle === "dashed" ? `${8 / c.z} ${5 / c.z}` : s.strokeStyle === "dotted" ? `${1.5 / c.z} ${4 / c.z}` : void 0, b = (k, S, $, y) => k === "dot" ? /* @__PURE__ */ N("circle", { cx: S, cy: $, r: f, fill: a }) : k === "none" ? null : /* @__PURE__ */ N(
        "polygon",
        {
          points: `${S},${$} ${S - r * Math.cos(y - 0.4)},${$ - r * Math.sin(y - 0.4)} ${S - r * Math.cos(y + 0.4)},${$ - r * Math.sin(y + 0.4)}`,
          fill: a
        }
      );
      return /* @__PURE__ */ B("g", { "data-canvas-vector-shape-id": s.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": l.routing, children: [
        /* @__PURE__ */ N("path", { d: g, fill: "none", stroke: a, strokeWidth: 2.5 / c.z, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: p }),
        b(s.arrowEnd ?? "arrow", l.end.x, l.end.y, x),
        b(s.arrowStart ?? "none", l.start.x, l.start.y, z + Math.PI)
      ] }, s.id);
    }),
    u.kind === "connect" && u.fromId !== void 0 && u.toX !== void 0 && u.toY !== void 0 && (() => {
      const s = e.get(u.fromId);
      if (!s) return null;
      const a = wt(s, u.toX, u.toY), l = u.hoverId ? e.get(u.hoverId) : null, r = l ? wt(l, a.x, a.y) : { x: u.toX, y: u.toY }, f = l ? he(a, r, ye(i, { id: "__preview" }, s.id, l.id)) : [a, r];
      return /* @__PURE__ */ B("g", { children: [
        /* @__PURE__ */ N("path", { d: Wt(f), stroke: O.blue, strokeWidth: 2 / c.z, strokeDasharray: `${5 / c.z} ${4 / c.z}` }),
        l ? /* @__PURE__ */ N("rect", { x: V(l).minX - 3 / c.z, y: V(l).minY - 3 / c.z, width: V(l).maxX - V(l).minX + 6 / c.z, height: V(l).maxY - V(l).minY + 6 / c.z, fill: "none", stroke: O.blue, strokeWidth: 2 / c.z, rx: 6 / c.z }) : /* @__PURE__ */ N("circle", { cx: r.x, cy: r.y, r: 5 / c.z, fill: O.blue })
      ] });
    })(),
    d && /* @__PURE__ */ N("circle", { cx: d.x, cy: d.y, r: hn / c.z, fill: O.roseSoft, stroke: O.rose, strokeWidth: 1 / c.z }),
    v.map((s, a) => /* @__PURE__ */ N("line", { x1: s.x1, y1: s.y1, x2: s.x2, y2: s.y2, stroke: O.pink, strokeWidth: 1 / c.z, strokeDasharray: `${4 / c.z} ${4 / c.z}` }, `guide-${a}`)),
    m && /* @__PURE__ */ N("rect", { x: Math.min(m.startX, m.curX), y: Math.min(m.startY, m.curY), width: Math.abs(m.curX - m.startX), height: Math.abs(m.curY - m.startY), fill: O.marqueeFill, stroke: O.blue, strokeWidth: 1 / c.z })
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
function kt(t) {
  return t.split(",").map((n) => At(n).replace(/^["']|["']$/g, "")).filter(Boolean).filter((n) => !be(n));
}
const Ft = Array.from(/* @__PURE__ */ new Set([
  ...yn,
  ...kt(st.sans.stack),
  ...kt(st.serif.stack),
  ...kt(st.mono.stack),
  ...kt(st.gothic.stack),
  ...kt(st.korean.stack)
]));
function bn() {
  if (typeof document > "u" || !("fonts" in document) || typeof document.fonts.check != "function")
    return Ft;
  const t = Ft.filter((n) => {
    const e = we(n);
    return e ? document.fonts.check(`12px ${e}`) : !1;
  });
  return t.length > 0 ? t : Ft;
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
function tt(t) {
  return t.fontSize ?? wn[t.type] ?? 14;
}
function et(t) {
  var n;
  if (!t.fontFamily) return st.sans.stack;
  if (t.fontFamily === "custom") {
    let e = "";
    try {
      e = $e(He(t.customFontFamily ?? ""));
    } catch {
    }
    return gn(e) || st.sans.stack;
  }
  return ((n = st[t.fontFamily]) == null ? void 0 : n.stack) ?? st.sans.stack;
}
function nt(t) {
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
    fontSize: `${tt(n)}px`,
    fontFamily: et(n)
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
  isDarkMode: v,
  renderEditor: m,
  renderShapeBody: h,
  setEditingId: s,
  onBendHandleDown: a,
  onResizeHandleDown: l,
  onRotateHandleDown: r,
  onConnectHandleDown: f
}) {
  return /* @__PURE__ */ B(vt, { children: [
    /* @__PURE__ */ N("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${i.z}) translate(${-i.x}px, ${-i.y}px)` }, children: t.map((o) => {
      if (o.type === "draw") return null;
      if (o.type === "arrow") {
        const x = $t(o, c, u), z = x.routing === "orthogonal" && x.pathPoints ? xe(x.pathPoints) : x.routing === "curved" ? Mt(0.5, x.start, x.control, x.end) : { x: (x.start.x + x.end.x) / 2, y: (x.start.y + x.end.y) / 2 }, p = e === o.id, b = Pt(o), k = n.has(o.id), S = k && !p && !b, $ = Tt(o).trim();
        return !b && !p && !k ? null : /* @__PURE__ */ B("div", { className: "absolute flex items-center justify-center", style: { left: z.x - 90, top: z.y - 18, width: 180, height: 36 }, onDoubleClick: (y) => {
          y.stopPropagation(), s(o.id);
        }, children: [
          (b || p || S) && /* @__PURE__ */ N(
            "div",
            {
              "data-canvas-arrow-label": "true",
              "data-canvas-arrow-label-placeholder": S ? "true" : void 0,
              "aria-label": $ ? `관계 설명: ${$}` : "관계 설명 입력",
              title: p ? void 0 : $ ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 설명 입력",
              className: `px-3 py-1 rounded-full border-2 shadow-sm ${S ? "border-dashed" : ""} ${v ? `bg-slate-900 border-slate-600 ${S ? "text-slate-400" : "text-slate-100"}` : `bg-white border-slate-300 ${S ? "text-slate-500" : "text-slate-800"}`}`,
              style: {
                fontSize: tt(o),
                fontFamily: et(o),
                maxWidth: "100%",
                minWidth: p ? 120 / i.z : void 0,
                minHeight: p ? 28 / i.z : void 0,
                color: S ? void 0 : o.textColor
              },
              children: p ? m("text-center whitespace-nowrap") : b ? /* @__PURE__ */ N("span", { dangerouslySetInnerHTML: { __html: b } }, "canvas-view") : /* @__PURE__ */ N("span", { className: "whitespace-nowrap", children: "관계 입력" })
            }
          ),
          k && n.size === 1 && /* @__PURE__ */ N("div", { onPointerDown: (y) => a(y, o), title: "드래그해서 곡선으로 (Curve)", className: "absolute rounded-full bg-white border-2 border-blue-600", style: { width: 10 / i.z, height: 10 / i.z, left: `calc(50% - ${5 / i.z}px)`, top: `calc(50% - ${5 / i.z}px)`, cursor: "grab" } })
        ] }, o.id);
      }
      const M = n.has(o.id), g = ht(o);
      return /* @__PURE__ */ B(
        "div",
        {
          "data-canvas-shape-id": o.id,
          "data-canvas-shape-type": o.type,
          "data-canvas-selected": M ? "true" : void 0,
          "data-canvas-text-align": nt(o),
          "data-canvas-text-color": o.textColor,
          "data-canvas-font-size": tt(o),
          "data-canvas-font-family": o.fontFamily === "custom" ? o.customFontFamily ?? "custom" : o.fontFamily ?? "sans",
          "data-canvas-manual-size": o.manualSize ? "true" : void 0,
          "data-canvas-group-id": o.groupId,
          "data-canvas-list-kind": Mn(o),
          "data-canvas-x": o.x,
          "data-canvas-y": o.y,
          "data-canvas-width": o.w,
          "data-canvas-height": o.h,
          className: "absolute",
          style: { left: g.minX, top: g.minY, width: g.maxX - g.minX, height: g.maxY - g.minY, transform: o.rotation ? `rotate(${o.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (x) => {
            x.stopPropagation(), Sn.has(o.type) && s(o.id);
          },
          children: [
            h(o),
            M && /* @__PURE__ */ B(vt, { children: [
              /* @__PURE__ */ N("div", { className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / i.z}px solid ${O.blue}` } }),
              n.size === 1 && /* @__PURE__ */ B(vt, { children: [
                ["nw", "ne", "sw", "se"].map((x) => /* @__PURE__ */ N("div", { "data-canvas-resize-handle": x, onPointerDown: (z) => l(z, o, x), className: "absolute bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / i.z, height: 10 / i.z, cursor: `${x}-resize`, left: x.includes("w") ? -5 / i.z : void 0, right: x.includes("e") ? -5 / i.z : void 0, top: x.includes("n") ? -5 / i.z : void 0, bottom: x.includes("s") ? -5 / i.z : void 0 } }, x)),
                /* @__PURE__ */ N("div", { onPointerDown: (x) => r(x, o), title: "회전 (Shift로 15도 단위)", className: "absolute bg-blue-600 rounded-full", style: { width: 12 / i.z, height: 12 / i.z, left: "50%", marginLeft: -6 / i.z, top: -28 / i.z, cursor: "grab" } }),
                Cn.has(o.type) && ["n", "s", "w", "e"].map((x) => /* @__PURE__ */ N("div", { onPointerDown: (z) => f(z, o), title: "드래그해서 연결 (관계 생성)", className: "absolute flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...x === "n" ? { left: "50%", top: -30 / i.z, marginLeft: -9 / i.z } : x === "s" ? { left: "50%", bottom: -30 / i.z, marginLeft: -9 / i.z } : x === "w" ? { top: "50%", left: -30 / i.z, marginTop: -9 / i.z } : { top: "50%", right: -30 / i.z, marginTop: -9 / i.z }, width: 18 / i.z, height: 18 / i.z, fontSize: 13 / i.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${x}`))
              ] })
            ] })
          ]
        },
        o.id
      );
    }) }),
    u.filter((o) => (o.type === "draw" || o.type === "arrow") && n.has(o.id)).map((o) => {
      const M = V(o);
      return /* @__PURE__ */ N("div", { className: "absolute pointer-events-none border-2 border-blue-600/60 rounded", style: { left: (M.minX - i.x) * i.z - 4, top: (M.minY - i.y) * i.z - 4, width: (M.maxX - M.minX) * i.z + 8, height: (M.maxY - M.minY) * i.z + 8 } }, `sel-${o.id}`);
    }),
    d == null ? void 0 : d.map((o) => /* @__PURE__ */ B("div", { className: "absolute pointer-events-none z-40", style: { left: (o.x - i.x) * i.z, top: (o.y - i.y) * i.z, transform: "translate(-2px, -2px)" }, children: [
      /* @__PURE__ */ N("svg", { width: "20", height: "24", viewBox: "0 0 20 24", children: /* @__PURE__ */ N("path", { d: "M 1 1 L 1 18 L 6 13 L 9 20 L 12 19 L 9 12 L 15 12 Z", fill: o.color, stroke: O.white, strokeWidth: "1.5", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ N("div", { className: "mt-1 px-1.5 py-0.5 rounded text-[11px] font-medium text-white whitespace-nowrap", style: { background: o.color }, children: o.name })
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
  installedFontFamilies: v,
  setShowPalette: m,
  setActiveColor: h,
  patchSelected: s,
  applyFormat: a,
  applyList: l,
  applyCustomFontFamily: r
}) {
  var W;
  const f = c ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", o = G(null), [M, g] = J({ width: 380, height: 260 });
  Kt(() => {
    const w = o.current;
    if (!w) return;
    const F = () => {
      const H = Math.max(1, Math.ceil(w.getBoundingClientRect().width)), R = Math.max(1, Math.ceil(w.getBoundingClientRect().height));
      g((Z) => Z.width === H && Z.height === R ? Z : { width: H, height: R });
    };
    if (F(), typeof ResizeObserver > "u") return;
    const T = new ResizeObserver(F);
    return T.observe(w), () => T.disconnect();
  }, [u, v.length, c, t, d]);
  const x = M.width, z = M.height, p = V(t), b = (p.minX - e.x) * e.z, k = (p.minY - e.y) * e.z, S = (p.maxX - e.x) * e.z, $ = (p.maxY - e.y) * e.z, y = Math.max(8, i.width - x - 8), X = Math.max(8, i.height - z - 8), C = (w, F) => ({ left: Math.min(Math.max(8, w), y), top: Math.min(Math.max(8, F), X) }), E = [
    C((b + S) / 2 - x / 2, k - z - 12),
    C((b + S) / 2 - x / 2, $ + 12),
    C((i.width - x) / 2, 12),
    C(b - x - 12, k + ($ - k - z) / 2),
    C(S + 12, k + ($ - k - z) / 2)
  ], L = n.map((w) => {
    const F = V(w);
    return { left: (F.minX - e.x) * e.z, top: (F.minY - e.y) * e.z, right: (F.maxX - e.x) * e.z, bottom: (F.maxY - e.y) * e.z };
  }), Y = E[0], I = (w, F) => {
    const T = Math.max(0, Math.min(w.left + x, F.right) - Math.max(w.left, F.left)), H = Math.max(0, Math.min(w.top + z, F.bottom) - Math.max(w.top, F.top));
    return T * H;
  }, P = ((W = E.map((w) => ({
    candidate: w,
    overlap: L.reduce((F, T) => F + I(w, T), 0),
    distance: Math.hypot(w.left - Y.left, w.top - Y.top)
  })).sort((w, F) => w.overlap - F.overlap || w.distance - F.distance)[0]) == null ? void 0 : W.candidate) ?? Y, K = tt(t), D = (w, F, T, H) => /* @__PURE__ */ N("button", { type: "button", title: H, onClick: T, className: `h-7 px-2 rounded text-[11px] font-bold ${F ? "bg-blue-600 text-white" : f}`, children: w });
  return /* @__PURE__ */ B("div", { ref: o, "data-canvas-inspector": "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${c ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: P.left, top: P.top }, onPointerDown: (w) => {
    w.stopPropagation();
    const F = w.target instanceof Element ? w.target : null;
    F != null && F.closest("input, select, textarea") || w.preventDefault();
  }, onClick: (w) => w.stopPropagation(), children: [
    /* @__PURE__ */ B("div", { className: "relative flex items-center gap-1.5 pointer-events-none", children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "색상" }),
      /* @__PURE__ */ N("button", { type: "button", title: "색상 팔레트", "aria-label": "도형 색상", onClick: () => m((w) => !w), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${c ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ N(Re, { className: "w-4 h-4", style: { color: pt(t) } }) }),
      d && /* @__PURE__ */ B("div", { className: `pointer-events-auto absolute left-0 top-10 z-50 flex items-center gap-1.5 p-2 rounded-xl border shadow-xl ${c ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        je.map((w) => /* @__PURE__ */ N("button", { type: "button", title: ot[w].label, "aria-label": `색 ${ot[w].label}`, onClick: () => {
          h(w), s({ color: w, fillColor: void 0 }), m(!1);
        }, className: "w-5 h-5 rounded-full border", style: { background: ot[w].bg, borderColor: ot[w].border, outline: t.color === w && !t.fillColor ? `2px solid ${O.blue}` : void 0, outlineOffset: 1 } }, w)),
        /* @__PURE__ */ N("label", { title: "배경 색 (자유 선택)", className: "w-5 h-5 rounded-full border relative overflow-hidden cursor-pointer flex items-center justify-center", style: { background: t.fillColor ?? Gt(t), outline: t.fillColor ? `2px solid ${O.blue}` : void 0, outlineOffset: 1 }, children: /* @__PURE__ */ N("input", { type: "color", value: t.fillColor ?? Gt(t), onChange: (w) => {
          s({ fillColor: w.target.value }), m(!1);
        }, className: "absolute inset-0 opacity-0 cursor-pointer" }) })
      ] })
    ] }),
    /* @__PURE__ */ B("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
      /* @__PURE__ */ B("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: pt(t), color: O.white, mixBlendMode: "normal" }, children: [
        /* @__PURE__ */ N("span", { "aria-hidden": "true", children: "A" }),
        /* @__PURE__ */ N("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? pt(t), onChange: (w) => s({ textColor: w.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
      ] }),
      /* @__PURE__ */ B("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${c ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
        /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
        /* @__PURE__ */ N("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => s({ fontSize: Math.max(8, K - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${f}`, children: /* @__PURE__ */ N(Ue, { className: "w-3.5 h-3.5" }) }),
        /* @__PURE__ */ N("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: K }),
        /* @__PURE__ */ N("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => s({ fontSize: Math.min(96, K + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${f}`, children: /* @__PURE__ */ N(Ge, { className: "w-3.5 h-3.5" }) })
      ] }),
      /* @__PURE__ */ B("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${c ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
        /* @__PURE__ */ N("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (w) => {
          const F = kn(w.target.value);
          s(F === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: F, customFontFamily: void 0 });
        }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${c ? "text-slate-200" : "text-slate-700"}`, children: mn.map((w) => /* @__PURE__ */ N("option", { value: w, className: c ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: st[w].label }, w)) }),
        /* @__PURE__ */ N(Ve, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
      ] }),
      t.fontFamily === "custom" && /* @__PURE__ */ B(vt, { children: [
        /* @__PURE__ */ N("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (w) => r(w.target.value), onChange: (w) => w.currentTarget.value && r(w.currentTarget.value), onKeyDown: (w) => {
          w.key === "Enter" && (w.preventDefault(), r(w.currentTarget.value));
        }, onDoubleClick: (w) => w.stopPropagation(), onPointerDown: (w) => w.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${c ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
        /* @__PURE__ */ N("datalist", { id: `canvas-font-families-${t.id}`, children: v.map((w) => /* @__PURE__ */ N("option", { value: w }, w)) })
      ] })
    ] }),
    /* @__PURE__ */ B("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${c ? "border-slate-700" : "border-slate-100"}`, children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
      /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", qe, "왼쪽 정렬"], ["center", Qe, "가운데 정렬"], ["right", Ze, "오른쪽 정렬"]].map(([w, F, T]) => /* @__PURE__ */ N("button", { type: "button", "aria-label": T, title: T, onClick: () => s({ textAlign: w }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${nt(t) === w ? "bg-blue-600 text-white shadow-sm" : f}`, children: /* @__PURE__ */ N(F, { className: "w-4 h-4" }) }, w)) }),
      u && /* @__PURE__ */ B(vt, { children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
        /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", Je, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", tn, "번호 목록"]].map(([w, F, T]) => /* @__PURE__ */ N("button", { type: "button", onClick: () => l(w), "aria-label": T, title: T, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${f}`, children: F ? /* @__PURE__ */ N(F, { className: "w-4 h-4" }) : /* @__PURE__ */ N("span", { className: "text-base leading-none", children: "–" }) }, w)) }),
        /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${c ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: en, label: "굵게" }, { cmd: "italic", Icon: nn, label: "기울임" }, { cmd: "underline", Icon: on, label: "밑줄" }].map(({ cmd: w, Icon: F, label: T }) => /* @__PURE__ */ N("button", { type: "button", onClick: () => a(w), "aria-label": T, title: T, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${f}`, children: /* @__PURE__ */ N(F, { className: "w-4 h-4" }) }, w)) })
      ] })
    ] }),
    (t.type === "card" || t.type === "arrow") && /* @__PURE__ */ B("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${c ? "border-slate-700" : "border-slate-100"}`, children: [
      t.type === "card" && /* @__PURE__ */ B(vt, { children: [
        /* @__PURE__ */ N("div", { className: `w-px h-6 ${c ? "bg-slate-700" : "bg-slate-200"}` }),
        /* @__PURE__ */ N("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (w) => w.stopPropagation(), onChange: (w) => s({ category: w.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${c ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
      ] }),
      t.type === "arrow" && /* @__PURE__ */ B(vt, { children: [
        /* @__PURE__ */ N("div", { className: `w-px h-6 ${c ? "bg-slate-700" : "bg-slate-200"}` }),
        D("직선", (t.routing ?? "straight") === "straight", () => s({ routing: "straight", bend: 0 }), "직선"),
        D("ㄱ", (t.routing ?? "") === "orthogonal", () => s({ routing: "orthogonal", bend: 0 }), "그리드 라우팅 (ㄱ/ㄹ)"),
        D("곡선", (t.routing ?? "") === "curved", () => s({ routing: "curved", bend: t.bend || 60 }), "곡선"),
        /* @__PURE__ */ N("div", { className: `w-px h-6 ${c ? "bg-slate-700" : "bg-slate-200"}` }),
        D("—", (t.strokeStyle ?? "solid") === "solid", () => s({ strokeStyle: "solid" }), "실선"),
        D("- -", t.strokeStyle === "dashed", () => s({ strokeStyle: "dashed" }), "점선(dash)"),
        D("···", t.strokeStyle === "dotted", () => s({ strokeStyle: "dotted" }), "점선(dot)"),
        /* @__PURE__ */ N("div", { className: `w-px h-6 ${c ? "bg-slate-700" : "bg-slate-200"}` }),
        D((t.arrowStart ?? "none") === "none" ? "○" : t.arrowStart === "dot" ? "●" : "◀", !0, () => s({ arrowStart: (t.arrowStart ?? "none") === "none" ? "arrow" : t.arrowStart === "arrow" ? "dot" : "none" }), "시작점 표식"),
        D((t.arrowEnd ?? "arrow") === "none" ? "○" : t.arrowEnd === "dot" ? "●" : "▶", !0, () => s({ arrowEnd: (t.arrowEnd ?? "arrow") === "arrow" ? "dot" : t.arrowEnd === "dot" ? "none" : "arrow" }), "끝점 표식")
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
  onDirty: v
}) {
  const m = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", h = (a, l) => /* @__PURE__ */ N(
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
  return { renderEditor: h, renderShapeBody: (a) => {
    const l = ot[a.color ?? "blue"], r = n === a.id, f = Pt(a);
    if (a.type === "frame")
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
              children: r ? h("", { fontSize: 13 / t.z }) : Tt(a) || "프레임"
            }
          )
        }
      );
    if (a.type === "note")
      return /* @__PURE__ */ N(
        "div",
        {
          className: "w-full h-full flex p-3 shadow-md",
          style: { background: l.bg, borderTop: `6px solid ${l.border}`, color: l.text },
          children: r ? h("font-medium", { color: pt(a), fontSize: tt(a), fontFamily: et(a), textAlign: nt(a) }) : f ? /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: pt(a), fontSize: tt(a), fontFamily: et(a), textAlign: nt(a) }, dangerouslySetInnerHTML: { __html: f } }, "canvas-view") : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: pt(a), fontSize: tt(a), fontFamily: et(a), textAlign: nt(a) }, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (a.type === "card") {
      const p = a.cardStyle === "glass";
      return /* @__PURE__ */ B(
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
            /* @__PURE__ */ B(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (b) => b.stopPropagation(),
                onDoubleClick: (b) => b.stopPropagation(),
                onBlur: (b) => {
                  const S = (b.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  d(($) => $.map((y) => y.id === a.id ? { ...y, category: S } : y)), v();
                },
                onKeyDown: (b) => {
                  b.key === "Enter" && (b.preventDefault(), b.currentTarget.blur());
                },
                children: [
                  "[ ",
                  a.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            r ? h("flex-1 font-medium", { color: a.textColor ?? O.white, fontSize: tt(a), fontFamily: et(a), textAlign: nt(a) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: a.textColor ?? O.white, fontSize: tt(a), fontFamily: et(a), textAlign: nt(a) }, dangerouslySetInnerHTML: { __html: f } }, "canvas-view"),
            /* @__PURE__ */ B("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              a.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (a.type === "text") {
      const p = e ? "text-slate-100" : "text-slate-900", b = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${p}`,
        style: { color: a.textColor, fontSize: tt(a), fontFamily: et(a), textAlign: nt(a) }
      };
      return r ? h(`font-medium ${p}`, b.style) : f ? /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-text-view": !0,
          ...b,
          dangerouslySetInnerHTML: { __html: f }
        },
        "canvas-view"
      ) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, ...b, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (a.type === "image") {
      const p = Vt(a.src);
      return p ? /* @__PURE__ */ N(
        "img",
        {
          src: p,
          alt: a.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const o = Gt(a), M = un(a), g = pt(a);
    if (a.type === "triangle" || a.type === "diamond" || a.type === "hexagon" || a.type === "star")
      return /* @__PURE__ */ B("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${a.w} ${a.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ N("polygon", { points: xn(a.type, a.w, a.h), fill: o, stroke: M, strokeWidth: 2, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ N("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: g }, children: r ? h("font-medium", { color: g, fontSize: tt(a), fontFamily: et(a), textAlign: nt(a) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: tt(a), fontFamily: et(a), textAlign: nt(a) }, dangerouslySetInnerHTML: { __html: f } }, "canvas-view") })
      ] });
    const z = Vt(a.src);
    return /* @__PURE__ */ N(
      "div",
      {
        className: `w-full h-full flex items-center justify-center p-3 ${a.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: o, border: `2px solid ${M}`, color: g },
        children: r ? h("font-medium", { color: g, fontSize: tt(a), fontFamily: et(a), textAlign: nt(a) }) : /* @__PURE__ */ B("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: tt(a), fontFamily: et(a), textAlign: nt(a) }, children: [
          /* @__PURE__ */ N("div", { dangerouslySetInnerHTML: { __html: f } }),
          z && /* @__PURE__ */ N(
            "a",
            {
              href: z,
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
function Ln({
  containerRef: t,
  shapesRef: n,
  shapes: e,
  camera: i,
  selected: c,
  editingId: u,
  boardIdentity: d
}) {
  const [v, m] = J({ width: 0, height: 0 });
  dt(() => {
    const f = t.current;
    if (!f) return;
    let o = -1, M = -1;
    const g = (z = f.clientWidth, p = f.clientHeight) => {
      z === o && p === M || (o = z, M = p, m({ width: z, height: p }));
    };
    if (g(), typeof ResizeObserver < "u") {
      const z = new ResizeObserver((p) => {
        var k;
        const b = (k = p[0]) == null ? void 0 : k.contentRect;
        g((b == null ? void 0 : b.width) ?? f.clientWidth, (b == null ? void 0 : b.height) ?? f.clientHeight);
      });
      return z.observe(f), () => z.disconnect();
    }
    const x = () => g();
    return window.addEventListener("resize", x), () => window.removeEventListener("resize", x);
  }, [d, t]);
  const h = mt(() => new Map(e.map((f) => [f.id, f])), [e]), s = mt(
    () => [...e].sort((f, o) => (f.type === "frame" ? -1 : 0) - (o.type === "frame" ? -1 : 0)),
    [e]
  ), a = mt(() => {
    if (!t.current || v.width <= 0 || v.height <= 0) return null;
    const f = 200 / i.z;
    return {
      minX: i.x - f,
      minY: i.y - f,
      maxX: i.x + v.width / i.z + f,
      maxY: i.y + v.height / i.z + f
    };
  }, [i, t, v]), l = Q((f) => {
    if (!a) return !1;
    if (f.id === u || c.has(f.id)) return !0;
    if (f.type === "arrow") {
      const M = $t(f, h, n.current), x = (M.routing === "orthogonal" ? M.pathPoints : null) ?? [M.start, M.end], z = Math.min(...x.map((S) => S.x)), p = Math.max(...x.map((S) => S.x)), b = Math.min(...x.map((S) => S.y)), k = Math.max(...x.map((S) => S.y));
      return p >= a.minX && z <= a.maxX && k >= a.minY && b <= a.maxY;
    }
    const o = V(f);
    return o.maxX >= a.minX && o.minX <= a.maxX && o.maxY >= a.minY && o.minY <= a.maxY;
  }, [u, c, h, n, a]), r = mt(
    () => s.filter(l),
    [l, s]
  );
  return { shapeById: h, visiblePaintOrder: r };
}
function Fn({
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
    let f;
    try {
      f = qt(r.innerHTML);
    } catch {
      i("입력 내용이 너무 깊거나 깁니다. 일부 내용을 줄인 뒤 다시 시도해 주세요.");
      return;
    }
    const o = r.scrollHeight;
    e((M) => M.map((g) => {
      if (g.id !== n) return g;
      const x = { ...g, html: f, text: void 0 };
      if (g.type === "text")
        return g.manualSize ? x : { ...x, ...Yn(r, g) };
      if (g.type === "arrow") return x;
      const z = g.type === "note" ? 32 : g.type === "card" ? 96 : (
        // category header + type footer
        (g.type === "frame", 24)
      ), p = Math.max(g.h, o + z);
      return { ...x, h: p };
    })), c();
  }, [n, c]), v = (r) => {
    var f;
    (f = t.current) == null || f.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(r), d();
  }, m = () => {
    var M;
    const r = (M = window.getSelection()) == null ? void 0 : M.anchorNode, f = r instanceof Element ? r : r == null ? void 0 : r.parentElement, o = f == null ? void 0 : f.closest("ul, ol");
    return o instanceof HTMLElement ? o : null;
  }, h = (r, f, o) => {
    const M = document.createElement(f);
    for (; r.firstChild; ) M.append(r.firstChild);
    return r.replaceWith(M), M;
  }, s = (r) => {
    const f = t.current;
    if (!f) return;
    f.focus();
    const o = m();
    if (r === "number")
      if ((o == null ? void 0 : o.tagName) === "OL")
        o.removeAttribute("data-list-style");
      else if ((o == null ? void 0 : o.tagName) === "UL")
        h(o, "ol");
      else {
        document.execCommand("insertOrderedList");
        const M = m();
        M == null || M.removeAttribute("data-list-style");
      }
    else if ((o == null ? void 0 : o.tagName) === "UL") {
      const M = o.dataset.listStyle;
      r === M ? document.execCommand("insertUnorderedList") : o.dataset.listStyle = r;
    } else {
      (o == null ? void 0 : o.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const M = m();
      M && (M.dataset.listStyle = r);
    }
    d();
  };
  return { commitEditorHtml: d, applyFormat: v, applyList: s, onEditorKeyDown: (r) => {
    if (r.key === "Tab") {
      r.preventDefault(), document.execCommand(r.shiftKey ? "outdent" : "indent"), d();
      return;
    }
    if (r.key === " ") {
      const f = window.getSelection();
      if (f && f.isCollapsed && f.anchorNode) {
        const o = f.anchorNode, M = o.textContent || "", g = f.anchorOffset, x = M.slice(0, g).trim();
        if (!m()) {
          if (x === "-" || x === "–") {
            r.preventDefault(), o.textContent = M.slice(g), s("dash");
            return;
          }
          if (x === "*") {
            r.preventDefault(), o.textContent = M.slice(g), s("bullet");
            return;
          }
          if (x === "1.") {
            r.preventDefault(), o.textContent = M.slice(g), s("number");
            return;
          }
        }
      }
    }
  }, applyCustomFontFamily: (r) => {
    const f = $e(r);
    if (!f) {
      u({
        fontFamily: "sans",
        customFontFamily: void 0
      });
      return;
    }
    u({
      fontFamily: "custom",
      customFontFamily: f
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
  const u = G(null), d = G(null), [v, m] = J([]), h = e !== void 0 && i !== void 0, s = mt(
    () => (h ? e ?? [] : v).map(Qt).filter((A) => A !== null),
    [h, e, v]
  ), a = G(i);
  a.current = i;
  const l = Q((A) => {
    const j = a.current;
    if (!j) {
      m(A);
      return;
    }
    j(typeof A == "function" ? A : () => A);
  }, []), [r, f] = J({ x: -400, y: -300, z: 1 }), [o, M] = J(/* @__PURE__ */ new Set()), [g, x] = J(null), [z, p] = J({ kind: "none" }), [b, k] = J(!1), [S, $] = J([]), [y, X] = J(""), [C, E] = J(!1), [L, Y] = J(null), [I, P] = J("blue"), [K, D] = J(Ft), W = G(I);
  W.current = I;
  const w = G([]), F = G([]), T = G(null), H = G(/* @__PURE__ */ new Map()), R = G(s), Z = G(r), lt = G(n), q = G(o), it = G(g);
  R.current = s, Z.current = r, lt.current = n, q.current = o, it.current = g;
  const at = G({ kind: "none" }), ct = Q((A) => {
    at.current = A, p(A);
  }, []), gt = Q((A) => {
    q.current = A, M(A);
  }, []);
  Kt(() => {
    var j;
    const A = /* @__PURE__ */ new Set();
    q.current = A, it.current = null, H.current.clear(), w.current = [], F.current = [], T.current = null, ct({ kind: "none" }), M(A), x(null), k(!1), $([]), Y(null), X(""), (j = u.current) == null || j.focus();
  }, [ct, t]), dt(() => {
    let A = !1;
    const j = () => {
      const U = bn();
      A || D(U);
    };
    if (j(), typeof document > "u" || !("fonts" in document)) return;
    const _ = () => j();
    return document.fonts.addEventListener("loadingdone", _), () => {
      A = !0, document.fonts.removeEventListener("loadingdone", _);
    };
  }, [t]);
  const Xt = (g ? s.find((A) => A.id === g) : void 0) !== void 0;
  Kt(() => {
    if (!g || !Xt) return;
    const A = () => {
      const _ = d.current, U = R.current.find((Bt) => Bt.id === g);
      if (!_ || !U || (_.dataset.seeded !== g && (_.innerHTML = Pt(U), _.dataset.seeded = g), document.activeElement === _)) return;
      _.focus();
      const ut = document.createRange();
      ut.selectNodeContents(_), ut.collapse(!1);
      const xt = window.getSelection();
      xt == null || xt.removeAllRanges(), xt == null || xt.addRange(ut);
    };
    A();
    const j = requestAnimationFrame(A);
    return () => cancelAnimationFrame(j);
  }, [g, Xt]);
  const zt = Q((A) => {
    l((j) => {
      const _ = typeof A == "function" ? A(j) : A;
      return w.current.push(j), w.current.length > 100 && w.current.shift(), F.current = [], _;
    }), c();
  }, [c]), Yt = Q((A) => A.size === 0 ? !1 : (zt((j) => j.filter((_) => A.has(_.id) ? !1 : _.type !== "arrow" ? !0 : !(_.fromId && A.has(_.fromId)) && !(_.toId && A.has(_.toId)))), gt(/* @__PURE__ */ new Set()), X(`${A.size}개 삭제됨`), !0), [zt, gt]), Ot = Q(() => {
    T.current = R.current;
  }, []), Dt = Q(() => {
    const A = T.current;
    T.current = null, !(!A || A === R.current) && (w.current.push(A), w.current.length > 100 && w.current.shift(), F.current = [], c());
  }, [c]), _t = Q((A, j) => {
    var ut;
    const _ = (ut = u.current) == null ? void 0 : ut.getBoundingClientRect(), U = Z.current;
    return _ ? { x: (A - _.left) / U.z + U.x, y: (j - _.top) / U.z + U.y } : { x: 0, y: 0 };
  }, []), bt = Q(() => {
    var _;
    const A = (_ = u.current) == null ? void 0 : _.getBoundingClientRect(), j = Z.current;
    return A ? { x: j.x + A.width / 2 / j.z, y: j.y + A.height / 2 / j.z } : { x: 0, y: 0 };
  }, []), St = Q((A) => {
    const j = new Set(R.current.filter((U) => A.has(U.id) && U.groupId).map((U) => U.groupId));
    if (j.size === 0) return A;
    const _ = new Set(A);
    for (const U of R.current) U.groupId && j.has(U.groupId) && _.add(U.id);
    return _;
  }, []);
  return {
    containerRef: u,
    editorRef: d,
    localShapes: v,
    setLocalShapes: m,
    controlled: h,
    shapes: s,
    setShapes: l,
    camera: r,
    setCamera: f,
    cameraRef: Z,
    selected: o,
    setSelected: M,
    selectedRef: q,
    editingId: g,
    setEditingId: x,
    editingIdRef: it,
    interaction: z,
    interactionRef: at,
    applyInteraction: ct,
    isSpaceDown: b,
    setIsSpaceDown: k,
    guides: S,
    setGuides: $,
    announcement: y,
    setAnnouncement: X,
    showInspectorPalette: C,
    setShowInspectorPalette: E,
    eraserPos: L,
    setEraserPos: Y,
    activeColor: I,
    setActiveColor: P,
    activeColorRef: W,
    installedFontFamilies: K,
    pointers: H,
    past: w,
    future: F,
    selectNow: gt,
    commit: zt,
    deleteSelection: Yt,
    beginHistory: Ot,
    endHistory: Dt,
    toPage: _t,
    viewportCentre: bt,
    expandToGroups: St,
    toolRef: lt,
    shapesRef: R
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
  editingId: v,
  textualTypes: m,
  onZoomChange: h,
  onSelectionChange: s,
  onLocalCursor: a,
  toPage: l
}) {
  dt(() => {
    h == null || h(n.z);
  }, [n.z, h]), dt(() => {
    const x = t.current;
    if (!x) return;
    const z = (p) => {
      if (p.preventDefault(), p.ctrlKey || p.metaKey) {
        const b = x.getBoundingClientRect();
        e((k) => {
          const S = Math.min(c, Math.max(i, k.z * Math.exp(-p.deltaY * 0.01))), $ = p.clientX - b.left, y = p.clientY - b.top;
          return { x: k.x + $ / k.z - $ / S, y: k.y + y / k.z - y / S, z: S };
        });
      } else
        e((b) => ({ ...b, x: b.x + p.deltaX / b.z, y: b.y + p.deltaY / b.z }));
    };
    return x.addEventListener("wheel", z, { passive: !1 }), () => x.removeEventListener("wheel", z);
  }, [t, c, i, e]);
  const r = mt(() => {
    const x = u.filter((z) => d.has(z.id));
    return {
      count: x.length,
      canGroup: x.length > 1,
      canUngroup: x.some((z) => !!z.groupId),
      isTextual: x.length === 1 && m.includes(x[0].type)
    };
  }, [d, u, m]);
  dt(() => {
    s == null || s(r);
  }, [s, r]);
  const f = mt(() => {
    if (v) return u.find((z) => z.id === v) ?? null;
    if (d.size !== 1) return null;
    const x = u.find((z) => d.has(z.id));
    return x && x.type !== "image" ? x : null;
  }, [v, d, u]), o = G(0);
  return { selectionInfo: r, inspectorShape: f, onContainerPointerMove: a ? (x) => {
    const z = performance.now();
    z - o.current < 60 || (o.current = z, a(l(x.clientX, x.clientY)));
  } : void 0, onContainerPointerLeave: a ? () => a(null) : void 0 };
}
function An(t, n) {
  if (t.length === 0) return null;
  let e = 1 / 0, i = 1 / 0, c = -1 / 0, u = -1 / 0;
  for (const a of t) {
    const l = V(a);
    e = Math.min(e, l.minX), i = Math.min(i, l.minY), c = Math.max(c, l.maxX), u = Math.max(u, l.maxY);
  }
  const d = 40, v = c - e + d * 2, m = u - i + d * 2;
  if (!Number.isFinite(v) || !Number.isFinite(m) || v > yt.maxExportDimension || m > yt.maxExportDimension || v * m > yt.maxExportPixels) return null;
  const h = (a, l, r, f, o) => {
    const M = a.fontSize ?? r, g = et(a), x = me(Pt(a));
    if (x.length === 0) return "";
    const z = ht(a), p = a.textAlign === "right" ? "end" : a.textAlign === "center" ? "middle" : a.textAlign === "left" ? "start" : o, b = p === "end" ? z.maxX - 12 : p === "middle" ? (z.minX + z.maxX) / 2 : z.minX + 12, k = z.minY + M + 12;
    return x.map((S, $) => {
      const y = S.map((X) => `<tspan style="${[
        X.bold ? "font-weight:700" : `font-weight:${f}`,
        X.italic ? "font-style:italic" : "",
        X.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${ft(X.text)}</tspan>`).join("");
      return `<text x="${b}" y="${k + $ * M * 1.4}" font-family="${ft(g)}" font-size="${M}" fill="${l}" text-anchor="${p}">${y}</text>`;
    }).join("");
  }, s = t.map((a) => {
    const l = ot[a.color ?? "blue"], r = ht(a), f = rt(a), o = a.rotation ? ` transform="rotate(${a.rotation * 180 / Math.PI} ${f.x} ${f.y})"` : "", M = a.color ? ot[a.color].border : O.ink;
    if (a.type === "draw" && a.points)
      return `<path d="${ve(a.points)}" fill="none" stroke="${M}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    if (a.type === "arrow") {
      const x = $t(a, new Map(t.map((L) => [L.id, L])), t), z = x.routing === "orthogonal" && x.pathPoints && x.pathPoints.length > 1 ? x.pathPoints[x.pathPoints.length - 2] : null, p = x.routing === "orthogonal" && z ? z : Mt(0.94, x.start, x.control, x.end), b = Math.atan2(x.end.y - p.y, x.end.x - p.x), k = 14, S = `${x.end.x - k * Math.cos(b - 0.4)},${x.end.y - k * Math.sin(b - 0.4)}`, $ = `${x.end.x - k * Math.cos(b + 0.4)},${x.end.y - k * Math.sin(b + 0.4)}`, y = x.routing === "orthogonal" && x.pathPoints ? Wt(x.pathPoints) : x.bend === 0 ? `M ${x.start.x} ${x.start.y} L ${x.end.x} ${x.end.y}` : `M ${x.start.x} ${x.start.y} Q ${x.control.x} ${x.control.y} ${x.end.x} ${x.end.y}`, X = x.routing === "orthogonal" && x.pathPoints ? xe(x.pathPoints) : x.bend === 0 ? { x: (x.start.x + x.end.x) / 2, y: (x.start.y + x.end.y) / 2 } : Mt(0.5, x.start, x.control, x.end), C = Tt(a), E = C ? `<text x="${X.x}" y="${X.y - 6}" text-anchor="middle" font-family="${ft(et(a))}" font-size="${a.fontSize ?? 12}" fill="${M}">${ft(C)}</text>` : "";
      return `<path d="${y}" fill="none" stroke="${M}" stroke-width="2.5" stroke-linecap="round"/><polygon points="${x.end.x},${x.end.y} ${S} ${$}" fill="${M}"/>` + E;
    }
    if (a.type === "image" && a.src) {
      const x = Vt(a.src);
      return x ? `<image href="${ft(x)}" x="${r.minX}" y="${r.minY}" width="${r.maxX - r.minX}" height="${r.maxY - r.minY}"${o}/>` : "";
    }
    if (a.type === "frame")
      return `<g${o}><rect x="${r.minX}" y="${r.minY}" width="${r.maxX - r.minX}" height="${r.maxY - r.minY}" fill="none" stroke="${O.slate400}" stroke-width="2" rx="4"/><text x="${r.minX}" y="${r.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${O.muted}">${ft(a.text ?? "프레임")}</text></g>`;
    if (a.type === "note")
      return `<g${o}><rect x="${r.minX}" y="${r.minY}" width="${r.maxX - r.minX}" height="${r.maxY - r.minY}" fill="${l.bg}"/><rect x="${r.minX}" y="${r.minY}" width="${r.maxX - r.minX}" height="6" fill="${l.border}"/>` + h(a, l.text, 14, "600", "start") + "</g>";
    if (a.type === "card") {
      const x = a.cardStyle === "glass";
      return `<g${o}><rect x="${r.minX}" y="${r.minY}" width="${r.maxX - r.minX}" height="${r.maxY - r.minY}" rx="16" fill="${x ? O.glassFill : O.slateCard}"/><text x="${r.minX + 16}" y="${r.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${O.slate400}">[ ${ft(a.category ?? "ENTITY")} ]</text>` + h(a, O.white, 16, "700", "start") + "</g>";
    }
    const g = a.type === "ellipse" ? `<ellipse cx="${(r.minX + r.maxX) / 2}" cy="${(r.minY + r.maxY) / 2}" rx="${(r.maxX - r.minX) / 2}" ry="${(r.maxY - r.minY) / 2}" fill="${l.bg}" stroke="${l.border}" stroke-width="2"/>` : `<rect x="${r.minX}" y="${r.minY}" width="${r.maxX - r.minX}" height="${r.maxY - r.minY}" rx="12" fill="${l.bg}" stroke="${l.border}" stroke-width="2"/>`;
    return `<g${o}>${g}${h(a, l.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${v}" height="${m}" viewBox="${e - d} ${i - d} ${v} ${m}"><rect x="${e - d}" y="${i - d}" width="${v}" height="${m}" fill="${n ? O.canvasDark : O.canvasLight}"/>` + s + "</svg>";
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
  const v = 2, m = i * v, h = c * v;
  if (!Number.isSafeInteger(m) || !Number.isSafeInteger(h) || m > yt.maxExportDimension || h > yt.maxExportDimension || m * h > yt.maxExportPixels) return null;
  const s = document.createElement("canvas");
  s.width = m, s.height = h;
  const a = s.getContext("2d");
  return a ? (a.scale(v, v), a.drawImage(d, 0, 0), new Promise((l) => {
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
    x: rt(l).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: rt(l).y,
    vx: 0,
    vy: 0
  }));
  for (let l = 0; l < c.length; l++)
    for (let r = 0; r < l; r++)
      if (Math.abs(c[l].x - c[r].x) < 1 && Math.abs(c[l].y - c[r].y) < 1) {
        const f = 2 * Math.PI * l / c.length;
        c[l].x += Math.cos(f) * 10, c[l].y += Math.sin(f) * 10;
        break;
      }
  const u = new Map(c.map((l) => [l.id, l])), d = [];
  for (const l of t) {
    if (l.type !== "arrow") continue;
    const r = l.fromId ? u.get(l.fromId) : null, f = l.toId ? u.get(l.toId) : null;
    r && f && d.push([r, f]);
  }
  const v = 220, m = v * v, h = 80;
  let s = 400;
  const a = s / h;
  for (let l = 0; l < h; l++) {
    for (let r = 0; r < c.length; r++)
      c[r].vx = 0, c[r].vy = 0;
    for (let r = 0; r < c.length; r++)
      for (let f = r + 1; f < c.length; f++) {
        const o = c[r], M = c[f], g = o.x - M.x, x = o.y - M.y, z = Math.hypot(g, x) || 0.01, p = m / z, b = g / z * p, k = x / z * p;
        o.vx += b, o.vy += k, M.vx -= b, M.vy -= k;
      }
    for (const [r, f] of d) {
      const o = r.x - f.x, M = r.y - f.y, g = Math.hypot(o, M) || 0.01, x = g * g / v, z = o / g * x, p = M / g * x;
      r.vx -= z, r.vy -= p, f.vx += z, f.vy += p;
    }
    for (const r of c) {
      const f = Math.hypot(r.vx, r.vy) || 0.01, o = Math.min(f, s);
      r.x += r.vx / f * o, r.y += r.vy / f * o;
    }
    s = Math.max(0.5, s - a);
  }
  n((l) => l.map((r) => {
    const f = u.get(r.id);
    return f ? { ...r, x: f.x - r.w / 2, y: f.y - r.h / 2 } : r;
  })), e();
}
function _n(t, {
  controlled: n,
  past: e,
  future: i,
  setLocalShapes: c,
  setCamera: u,
  selectNow: d,
  setEditingId: v
}) {
  const m = t;
  if (!m || m.version !== "canvas-v1") return;
  let h;
  try {
    h = Ke({ version: "canvas-v1", shapes: [], camera: m.camera }).camera;
  } catch {
    return;
  }
  !n && Array.isArray(m.shapes) && m.shapes.length <= yt.maxShapes && (e.current = [], i.current = [], c(m.shapes.map(Qt).filter((s) => s !== null))), u(h), d(/* @__PURE__ */ new Set()), v(null);
}
function Bn({
  ref: t,
  containerRef: n,
  shapesRef: e,
  cameraRef: i,
  selectedRef: c,
  past: u,
  future: d,
  controlled: v,
  isDarkMode: m,
  minZoom: h,
  maxZoom: s,
  onToolChange: a,
  onDirty: l,
  commit: r,
  deleteSelection: f,
  selectNow: o,
  viewportCentre: M,
  setShapes: g,
  setLocalShapes: x,
  setCamera: z,
  setEditingId: p,
  setAnnouncement: b,
  createId: k
}) {
  const S = Q((y) => {
    const X = M(), C = Qt({
      id: k(),
      x: y.x ?? X.x - y.w / 2,
      y: y.y ?? X.y - y.h / 2,
      ...y
    });
    if (!C) throw new Error("Canvas could not create a valid shape.");
    return r((E) => [...E, C]), o(/* @__PURE__ */ new Set([C.id])), a("select"), b(`${C.type} 추가됨`), C;
  }, [r, k, a, o, b, M]), $ = Q(() => An(e.current, m), [m, e]);
  Oe(t, () => ({
    addNote: (y) => {
      const X = S({ type: "note", w: 180, h: 180, color: y, text: "" });
      p(X.id);
    },
    addCard: (y, X, C, E) => {
      S({ type: "card", w: 260, h: 150, text: y, category: X, cardStyle: C, color: E });
    },
    addText: () => {
      const y = S({ type: "text", w: 220, h: 44, text: "" });
      p(y.id);
    },
    addShape: (y, X, C) => {
      S({
        type: y,
        w: y === "ellipse" ? 220 : 200,
        h: y === "ellipse" ? 110 : 140,
        color: X,
        text: C ?? ""
      });
    },
    addArrow: () => {
      const y = M(), X = { id: k(), type: "arrow", x: y.x - 140, y: y.y, w: 280, h: 0 };
      r((C) => [...C, X]), o(/* @__PURE__ */ new Set([X.id])), a("select");
    },
    addImage: (y, X, C, E) => {
      S({ type: "image", w: C, h: E, src: y, fileName: X });
    },
    addFileCard: (y, X, C) => {
      S({ type: "rect", w: 260, h: 120, color: "purple", text: C, src: X, fileName: y });
    },
    setTool: a,
    undo: () => {
      const y = u.current.pop();
      y && (d.current.push(e.current), g(y), o(/* @__PURE__ */ new Set()), p(null), l(), b("실행 취소"));
    },
    redo: () => {
      const y = d.current.pop();
      y && (u.current.push(e.current), g(y), o(/* @__PURE__ */ new Set()), p(null), l(), b("다시 실행"));
    },
    deleteSelected: () => {
      f(c.current);
    },
    duplicateSelected: () => {
      var E;
      const y = c.current;
      if (y.size === 0) return;
      const X = [], C = /* @__PURE__ */ new Map();
      for (const L of e.current) {
        if (!y.has(L.id)) continue;
        let Y = L.groupId;
        Y && (C.has(Y) || C.set(Y, k("g")), Y = C.get(Y)), X.push({
          ...L,
          id: k(),
          x: L.x + 24,
          y: L.y + 24,
          groupId: Y,
          points: (E = L.points) == null ? void 0 : E.map(([I, P]) => [I + 24, P + 24])
        });
      }
      r((L) => [...L, ...X]), o(new Set(X.map((L) => L.id))), b(`${X.length}개 복제됨`);
    },
    group: () => {
      var C;
      const y = c.current;
      if (y.size < 2) return;
      const X = k("g");
      r((E) => E.map((L) => y.has(L.id) ? { ...L, groupId: X } : L)), b(`${y.size}개 그룹화됨`), (C = n.current) == null || C.focus();
    },
    ungroup: () => {
      var X;
      const y = c.current;
      y.size !== 0 && (r((C) => C.map((E) => y.has(E.id) ? { ...E, groupId: void 0 } : E)), b("그룹 해제됨"), (X = n.current) == null || X.focus());
    },
    zoomBy: (y) => {
      z((X) => {
        var I;
        const C = (I = n.current) == null ? void 0 : I.getBoundingClientRect(), E = Math.min(s, Math.max(h, X.z * y));
        if (!C) return { ...X, z: E };
        const L = X.x + C.width / 2 / X.z, Y = X.y + C.height / 2 / X.z;
        return { x: L - C.width / 2 / E, y: Y - C.height / 2 / E, z: E };
      });
    },
    zoomTo: (y) => {
      z((X) => {
        var I;
        const C = (I = n.current) == null ? void 0 : I.getBoundingClientRect(), E = Math.min(s, Math.max(h, y));
        if (!C) return { ...X, z: E };
        const L = X.x + C.width / 2 / X.z, Y = X.y + C.height / 2 / X.z;
        return { x: L - C.width / 2 / E, y: Y - C.height / 2 / E, z: E };
      });
    },
    resetZoom: () => {
      z((y) => {
        var L;
        const X = (L = n.current) == null ? void 0 : L.getBoundingClientRect();
        if (!X) return { ...y, z: 1 };
        const C = y.x + X.width / 2 / y.z, E = y.y + X.height / 2 / y.z;
        return { x: C - X.width / 2, y: E - X.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var K;
      const y = e.current, X = (K = n.current) == null ? void 0 : K.getBoundingClientRect();
      if (y.length === 0 || !X) return;
      let C = 1 / 0, E = 1 / 0, L = -1 / 0, Y = -1 / 0;
      for (const D of y) {
        const W = V(D);
        C = Math.min(C, W.minX), E = Math.min(E, W.minY), L = Math.max(L, W.maxX), Y = Math.max(Y, W.maxY);
      }
      const I = 80, P = Math.min(s, Math.max(
        h,
        Math.min(X.width / (L - C + I * 2), X.height / (Y - E + I * 2))
      ));
      z({
        x: (C + L) / 2 - X.width / 2 / P,
        y: (E + Y) / 2 - X.height / 2 / P,
        z: P
      });
    },
    autoLayout: () => Dn(e.current, r, () => b("자동 배치 완료")),
    exportSvg: $,
    exportPng: () => On($),
    getSnapshot: () => ({ version: "canvas-v1", shapes: e.current, camera: i.current }),
    loadSnapshot: (y) => _n(y, {
      controlled: v,
      past: u,
      future: d,
      setLocalShapes: x,
      setCamera: z,
      selectNow: o,
      setEditingId: p
    })
  }), [
    S,
    $,
    r,
    k,
    f,
    m,
    s,
    h,
    l,
    a,
    o,
    z,
    p,
    x,
    g,
    b,
    M,
    v
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
  future: v,
  textualTypes: m,
  setIsSpaceDown: h,
  setEditingId: s,
  setShapes: a,
  setAnnouncement: l,
  commit: r,
  deleteSelection: f,
  selectNow: o,
  onDirty: M,
  onToolChange: g,
  createId: x
}) {
  const z = Q((p, b) => {
    const k = i.current;
    k.size !== 0 && r((S) => S.map(($) => {
      var y;
      return k.has($.id) ? {
        ...$,
        x: $.x + p,
        y: $.y + b,
        points: (y = $.points) == null ? void 0 : y.map(([X, C]) => [X + p, C + b])
      } : $;
    }));
  }, [r, i]);
  dt(() => {
    const p = ($) => {
      const y = $;
      return !!y && (y.tagName === "INPUT" || y.tagName === "TEXTAREA" || y.isContentEditable);
    }, b = ($) => $ instanceof Element && !!$.closest("input, select, button, textarea, option, label, [data-canvas-control]"), k = ($) => {
      var P, K, D, W;
      const y = t.current, X = document.activeElement, C = $.target instanceof Node && !!(y != null && y.contains($.target)), E = !!y && (X === y || y.contains(X));
      if (!C && !E || b($.target)) return;
      if ($.code === "Space" && !p($.target)) {
        h(!0), $.preventDefault();
        return;
      }
      if (p($.target)) {
        if ($.key === "Escape")
          $.preventDefault(), s(null), (P = n.current) == null || P.blur(), (K = t.current) == null || K.focus();
        else if (($.key === "Delete" || $.key === "Backspace") && !c.current) {
          const w = i.current;
          f(w) && $.preventDefault();
        }
        return;
      }
      const L = $.metaKey || $.ctrlKey, Y = i.current;
      if (L && $.key.toLowerCase() === "z") {
        if ($.preventDefault(), $.shiftKey) {
          const w = v.current.pop();
          w && (d.current.push(e.current), a(w), M());
        } else {
          const w = d.current.pop();
          w && (v.current.push(e.current), a(w), M());
        }
        o(/* @__PURE__ */ new Set());
        return;
      }
      if (L && $.key.toLowerCase() === "g") {
        if ($.preventDefault(), $.shiftKey)
          Y.size > 0 && (r((w) => w.map((F) => Y.has(F.id) ? { ...F, groupId: void 0 } : F)), l("그룹 해제됨"));
        else if (Y.size > 1) {
          const w = x("g");
          r((F) => F.map((T) => Y.has(T.id) ? { ...T, groupId: w } : T)), l(`${Y.size}개 그룹화됨`);
        }
        return;
      }
      if (L && $.key.toLowerCase() === "a") {
        $.preventDefault(), o(new Set(e.current.map((w) => w.id))), l(`전체 ${e.current.length}개 선택됨`);
        return;
      }
      if ($.key === "Delete" || $.key === "Backspace") {
        f(Y) && $.preventDefault();
        return;
      }
      if ($.key.startsWith("Arrow")) {
        $.preventDefault();
        const w = $.shiftKey ? 10 : 1;
        $.key === "ArrowLeft" && z(-w, 0), $.key === "ArrowRight" && z(w, 0), $.key === "ArrowUp" && z(0, -w), $.key === "ArrowDown" && z(0, w);
        return;
      }
      if ($.key === "Tab" && e.current.length > 0) {
        $.preventDefault();
        const w = e.current, F = w.findIndex((R) => Y.has(R.id)), T = $.shiftKey ? F <= 0 ? w.length - 1 : F - 1 : F === -1 || F === w.length - 1 ? 0 : F + 1, H = w[T];
        o(/* @__PURE__ */ new Set([H.id])), l(`${H.type} 선택됨: ${Tt(H) || "내용 없음"}`);
        return;
      }
      if ($.key === "Enter" && Y.size === 1) {
        const w = e.current.find((F) => Y.has(F.id));
        w && m.includes(w.type) && ($.preventDefault(), s(w.id));
        return;
      }
      if ($.key === "Escape") {
        if (c.current) {
          $.preventDefault(), s(null), (D = n.current) == null || D.blur(), (W = t.current) == null || W.focus(), g("select");
          return;
        }
        o(/* @__PURE__ */ new Set()), g("select");
        return;
      }
      const I = Hn($);
      I && ($.preventDefault(), u.current = I, g(I));
    }, S = ($) => {
      const y = t.current;
      !y || !(document.activeElement === y || y.contains(document.activeElement)) || $.code === "Space" && h(!1);
    };
    return window.addEventListener("keydown", k), window.addEventListener("keyup", S), () => {
      window.removeEventListener("keydown", k), window.removeEventListener("keyup", S);
    };
  }, [
    r,
    t,
    x,
    f,
    c,
    n,
    v,
    z,
    M,
    g,
    d,
    o,
    i,
    l,
    s,
    h,
    a,
    e,
    m,
    u
  ]);
}
const Kn = 400;
function Wn({
  containerRef: t,
  editorRef: n,
  pointers: e,
  cameraRef: i,
  shapesRef: c,
  toolRef: u,
  activeColorRef: d,
  camera: v,
  shapes: m,
  selected: h,
  isSpaceDown: s,
  textualTypes: a,
  setShapes: l,
  setEditingId: r,
  applyInteraction: f,
  selectNow: o,
  beginHistory: M,
  commit: g,
  onToolChange: x,
  expandToGroups: z,
  toPage: p,
  createId: b
}) {
  const k = b, S = G(null), $ = (Y, I) => {
    var W;
    const P = ((W = t.current) == null ? void 0 : W.dataset.canvasActiveTool) === "text" ? "text" : u.current;
    if (P !== "note" && P !== "text") return;
    const K = p(Y, I), D = P === "note" ? { id: k(), type: "note", x: K.x - 90, y: K.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: k(), type: "text", x: K.x, y: K.y - 22, w: 220, h: 44, text: "" };
    g((w) => [...w, D]), o(/* @__PURE__ */ new Set([D.id])), r(D.id), x("select");
  };
  return dt(() => {
    const Y = (I) => {
      var P;
      (P = t.current) != null && P.contains(I.target) && (I.target instanceof Element && I.target.closest('[role="textbox"], [data-canvas-inspector]') || $(I.clientX, I.clientY));
    };
    return window.addEventListener("click", Y, !0), () => window.removeEventListener("click", Y, !0);
  }), { onPointerDown: (Y) => {
    var W, w, F;
    const I = u.current;
    if (e.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY }), e.current.size === 2) {
      const [T, H] = [...e.current.values()], R = i.current;
      f({
        kind: "pinch",
        startDist: Math.hypot(H.x - T.x, H.y - T.y) || 1,
        startZoom: R.z,
        startMidX: (T.x + H.x) / 2,
        startMidY: (T.y + H.y) / 2,
        camX: R.x,
        camY: R.y
      });
      return;
    }
    if (e.current.size > 2) return;
    if (Y.button === 1 || s || I === "hand" || Y.button === 0 && I === "select" && Y.altKey) {
      f({ kind: "pan", startX: Y.clientX, startY: Y.clientY, camX: v.x, camY: v.y });
      return;
    }
    if (Y.button !== 0) return;
    const P = p(Y.clientX, Y.clientY);
    if (r(null), (W = n.current) == null || W.blur(), (w = t.current) == null || w.focus(), I === "draw") {
      const T = { id: k(), type: "draw", x: P.x, y: P.y, w: 0, h: 0, points: [[P.x, P.y]], color: d.current };
      M(), l((H) => [...H, T]), f({ kind: "drawing", id: T.id });
      return;
    }
    if (I === "arrow" || I === "frame" || We.includes(I)) {
      const T = I, H = I === "arrow" ? { id: k(), type: "arrow", x: P.x, y: P.y, w: 0, h: 0, color: d.current } : I === "frame" ? { id: k(), type: "frame", x: P.x, y: P.y, w: 0, h: 0, text: "프레임" } : { id: k(), type: T, x: P.x, y: P.y, w: 0, h: 0, color: d.current, text: "" };
      M(), l((R) => [...R, H]), f({ kind: "creating", id: H.id, startX: P.x, startY: P.y });
      return;
    }
    if (I === "note" || I === "text") return;
    if (I === "eraser") {
      M(), l((T) => ge(T, P.x, P.y, 14 / v.z, v.z)), f({ kind: "erasing" });
      return;
    }
    const K = new Map(m.map((T) => [T.id, T])), D = [...m].reverse().find((T) => Zt(T, P.x, P.y, v.z, K, m));
    if (!D)
      S.current = null;
    else {
      const T = Date.now(), H = !Y.shiftKey && a.includes(D.type) && ((F = S.current) == null ? void 0 : F.id) === D.id && T - S.current.time < Kn;
      if (S.current = { id: D.id, time: T }, H) {
        o(/* @__PURE__ */ new Set([D.id])), r(D.id), S.current = null;
        return;
      }
      const R = Y.shiftKey ? new Set(h).add(D.id) : h.has(D.id) ? h : /* @__PURE__ */ new Set([D.id]), Z = z(R);
      o(Z);
      const lt = /* @__PURE__ */ new Map();
      for (const q of m) Z.has(q.id) && lt.set(q.id, q);
      for (const q of m) {
        if (q.type !== "frame" || !Z.has(q.id)) continue;
        const it = V(q);
        for (const at of m) {
          if (at.id === q.id || lt.has(at.id)) continue;
          const ct = rt(at);
          ct.x >= it.minX && ct.x <= it.maxX && ct.y >= it.minY && ct.y <= it.maxY && lt.set(at.id, at);
        }
      }
      M(), f({ kind: "move", startX: P.x, startY: P.y, origin: lt });
      return;
    }
    Y.shiftKey || o(/* @__PURE__ */ new Set()), f({
      kind: "marquee",
      startX: P.x,
      startY: P.y,
      curX: P.x,
      curY: P.y,
      screenStartX: Y.clientX,
      screenStartY: Y.clientY
    });
  }, onResizeHandleDown: (Y, I, P) => {
    Y.stopPropagation(), e.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY }), M(), f({ kind: "resize", id: I.id, handle: P, start: I });
  }, onRotateHandleDown: (Y, I) => {
    Y.stopPropagation(), e.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY });
    const P = p(Y.clientX, Y.clientY), K = rt(I);
    M(), f({
      kind: "rotate",
      id: I.id,
      startAngle: Math.atan2(P.y - K.y, P.x - K.x),
      startRotation: I.rotation ?? 0
    });
  }, onConnectHandleDown: (Y, I) => {
    Y.stopPropagation(), e.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY });
    const P = p(Y.clientX, Y.clientY);
    f({ kind: "connect", fromId: I.id, toX: P.x, toY: P.y, hoverId: null });
  }, onBendHandleDown: (Y, I) => {
    Y.stopPropagation(), e.current.set(Y.pointerId, { x: Y.clientX, y: Y.clientY }), M(), f({ kind: "bend", id: I.id });
  } };
}
function Rn({
  pointers: t,
  interactionRef: n,
  shapesRef: e,
  setShapes: i,
  setEditingId: c,
  setEraserPos: u,
  setGuides: d,
  setAnnouncement: v,
  applyInteraction: m,
  selectNow: h,
  endHistory: s,
  commit: a,
  onToolChange: l,
  createId: r
}) {
  const f = r;
  dt(() => {
    const o = (M) => {
      t.current.delete(M.pointerId);
      const g = n.current;
      if (g.kind !== "none") {
        if (g.kind === "pinch") {
          t.current.size < 2 && m({ kind: "none" });
          return;
        }
        if (d([]), g.kind === "erasing") {
          u(null), s(), m({ kind: "none" });
          return;
        }
        if (g.kind === "connect") {
          const z = e.current.find((y) => y.id === g.fromId);
          if (m({ kind: "none" }), !z) return;
          const p = { x: g.toX, y: g.toY }, b = rt(z);
          if (!g.hoverId && Math.hypot(p.x - b.x, p.y - b.y) < 30) return;
          const k = [];
          let S = g.hoverId;
          if (!S) {
            const y = z.type === "note" ? 180 : 200, X = z.type === "note" ? 180 : 120, C = {
              ...z,
              id: f(),
              x: p.x - y / 2,
              y: p.y - X / 2,
              w: y,
              h: X,
              html: void 0,
              text: "",
              rotation: 0,
              groupId: void 0,
              points: void 0,
              fromId: void 0,
              toId: void 0,
              bend: void 0
            };
            k.push(C), S = C.id;
          }
          const $ = {
            id: f(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: z.id,
            toId: S,
            text: ""
          };
          k.push($), a((y) => [...y, ...k]), h(/* @__PURE__ */ new Set([$.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => c($.id)) : c($.id), v("연결 생성됨");
          return;
        }
        if (g.kind === "bend") {
          s(), m({ kind: "none" });
          return;
        }
        if (g.kind === "drawing") {
          i((x) => x.map((z) => {
            if (z.id !== g.id || !z.points) return z;
            const p = z.points.map(($) => $[0]), b = z.points.map(($) => $[1]), k = Math.min(...p), S = Math.min(...b);
            return { ...z, x: k, y: S, w: Math.max(...p) - k, h: Math.max(...b) - S };
          })), s(), m({ kind: "none" });
          return;
        }
        if (g.kind === "creating") {
          i((x) => x.map((z) => {
            if (z.id !== g.id) return z;
            const p = Math.abs(z.w) < 4 && Math.abs(z.h) < 4 ? {
              ...z,
              w: z.type === "arrow" ? 200 : z.type === "frame" ? 480 : 180,
              h: z.type === "arrow" ? 0 : z.type === "frame" ? 320 : 120
            } : z;
            if (p.type === "arrow") return p;
            const b = ht(p);
            return { ...p, x: b.minX, y: b.minY, w: b.maxX - b.minX, h: b.maxY - b.minY };
          })), s(), h(/* @__PURE__ */ new Set([g.id])), l("select"), m({ kind: "none" });
          return;
        }
        (g.kind === "move" || g.kind === "resize" || g.kind === "rotate") && s(), m({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", o), window.addEventListener("pointercancel", o), () => {
      window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o);
    };
  }, [m, r, s, n, l, t, h, v, c, i, e]);
}
const Un = 0.1, Gn = 4, Vn = 14, qn = ["note", "card", "rect", "ellipse", "text", "image"];
function Qn({
  containerRef: t,
  pointers: n,
  interactionRef: e,
  cameraRef: i,
  shapesRef: c,
  setCamera: u,
  setShapes: d,
  setEraserPos: v,
  setGuides: m,
  applyInteraction: h,
  selectNow: s,
  expandToGroups: a,
  toPage: l
}) {
  dt(() => {
    const r = (f) => {
      var x, z;
      n.current.has(f.pointerId) && n.current.set(f.pointerId, { x: f.clientX, y: f.clientY });
      const o = e.current;
      if (o.kind === "none") return;
      const M = i.current;
      if (o.kind === "pinch") {
        if (n.current.size < 2) return;
        const [p, b] = [...n.current.values()], k = Math.hypot(b.x - p.x, b.y - p.y) || 1, S = (p.x + b.x) / 2, $ = (p.y + b.y) / 2, y = (x = t.current) == null ? void 0 : x.getBoundingClientRect();
        if (!y) return;
        const X = Math.min(Gn, Math.max(Un, o.startZoom * (k / o.startDist))), C = o.camX + (o.startMidX - y.left) / o.startZoom, E = o.camY + (o.startMidY - y.top) / o.startZoom;
        u({ x: C - (S - y.left) / X, y: E - ($ - y.top) / X, z: X });
        return;
      }
      if (o.kind === "pan") {
        u({
          x: o.camX - (f.clientX - o.startX) / M.z,
          y: o.camY - (f.clientY - o.startY) / M.z,
          z: M.z
        });
        return;
      }
      const g = l(f.clientX, f.clientY);
      if (o.kind === "erasing") {
        d((p) => ge(p, g.x, g.y, Vn / M.z, M.z)), v({ x: g.x, y: g.y });
        return;
      }
      if (o.kind === "connect") {
        const p = c.current, b = new Map(p.map((S) => [S.id, S])), k = [...p].reverse().find((S) => S.id !== o.fromId && qn.includes(S.type) && Zt(S, g.x, g.y, M.z, b, p));
        h({ ...o, toX: g.x, toY: g.y, hoverId: (k == null ? void 0 : k.id) ?? null });
        return;
      }
      if (o.kind === "bend") {
        const p = c.current, b = p.find((L) => L.id === o.id);
        if (!b) return;
        const k = $t(b, new Map(p.map((L) => [L.id, L])), p), S = k.end.x - k.start.x, $ = k.end.y - k.start.y, y = Math.hypot(S, $) || 1, X = (k.start.x + k.end.x) / 2, C = (k.start.y + k.end.y) / 2, E = (g.x - X) * (-$ / y) + (g.y - C) * (S / y);
        d((L) => L.map((Y) => Y.id === o.id ? { ...Y, bend: E } : Y));
        return;
      }
      if (o.kind === "marquee") {
        h({ ...o, curX: g.x, curY: g.y });
        const p = Math.min(o.startX, g.x), b = Math.max(o.startX, g.x), k = Math.min(o.startY, g.y), S = Math.max(o.startY, g.y), $ = Math.min(o.screenStartX, f.clientX), y = Math.max(o.screenStartX, f.clientX), X = Math.min(o.screenStartY, f.clientY), C = Math.max(o.screenStartY, f.clientY), E = /* @__PURE__ */ new Map();
        (z = t.current) == null || z.querySelectorAll("[data-canvas-shape-id]").forEach((Y) => {
          const I = Y.dataset.canvasShapeId;
          I && E.set(I, Y.getBoundingClientRect());
        });
        const L = c.current.filter((Y) => {
          const I = E.get(Y.id);
          if (I)
            return I.right >= $ && I.left <= y && I.bottom >= X && I.top <= C;
          const P = V(Y);
          return P.maxX >= p && P.minX <= b && P.maxY >= k && P.minY <= S;
        }).map((Y) => Y.id);
        s(a(new Set(L)));
        return;
      }
      if (o.kind === "move") {
        let p = g.x - o.startX, b = g.y - o.startY;
        const k = o.origin, S = (() => {
          let X = 1 / 0, C = 1 / 0, E = -1 / 0, L = -1 / 0;
          return k.forEach((Y) => {
            const I = V({ ...Y, x: Y.x + p, y: Y.y + b });
            X = Math.min(X, I.minX), C = Math.min(C, I.minY), E = Math.max(E, I.maxX), L = Math.max(L, I.maxY);
          }), { minX: X, minY: C, maxX: E, maxY: L };
        })(), $ = c.current.filter((X) => !k.has(X.id)), y = fn(S, $, M.z);
        p += y.dx, b += y.dy, m(y.guides), d((X) => X.map((C) => {
          var L;
          const E = k.get(C.id);
          return E ? {
            ...C,
            x: E.x + p,
            y: E.y + b,
            points: (L = E.points) == null ? void 0 : L.map(([Y, I]) => [Y + p, I + b])
          } : C;
        }));
        return;
      }
      if (o.kind === "drawing") {
        d((p) => p.map((b) => {
          if (b.id !== o.id || !b.points) return b;
          const k = b.points[b.points.length - 1];
          return Math.hypot(g.x - k[0], g.y - k[1]) < 2 / M.z ? b : { ...b, points: [...b.points, [g.x, g.y]] };
        }));
        return;
      }
      if (o.kind === "creating") {
        d((p) => p.map((b) => b.id === o.id ? { ...b, w: g.x - o.startX, h: g.y - o.startY } : b));
        return;
      }
      if (o.kind === "rotate") {
        const p = c.current.find(($) => $.id === o.id);
        if (!p) return;
        const b = rt(p), k = Math.atan2(g.y - b.y, g.x - b.x);
        let S = o.startRotation + (k - o.startAngle);
        f.shiftKey && (S = Math.round(S / (Math.PI / 12)) * (Math.PI / 12)), d(($) => $.map((y) => y.id === o.id ? { ...y, rotation: S } : y));
        return;
      }
      if (o.kind === "resize") {
        const { start: p, handle: b } = o, k = pe(p, g.x, g.y);
        d((S) => S.map(($) => {
          if ($.id !== p.id) return $;
          let { x: y, y: X, w: C, h: E } = p;
          if (b.includes("e") && (C = Math.max(20, k.x - p.x)), b.includes("s") && (E = Math.max(20, k.y - p.y)), b.includes("w")) {
            const L = p.x + p.w;
            y = Math.min(k.x, L - 20), C = L - y;
          }
          if (b.includes("n")) {
            const L = p.y + p.h;
            X = Math.min(k.y, L - 20), E = L - X;
          }
          return { ...$, x: y, y: X, w: C, h: E, manualSize: $.type === "text" ? !0 : $.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", r), () => window.removeEventListener("pointermove", r);
  }, [h, t, a, e, n, s, c, l]);
}
function Zn(t) {
  Qn(t), Rn(t);
}
function Jn({
  containerRef: t,
  editorRef: n,
  pointers: e,
  interactionRef: i,
  cameraRef: c,
  shapesRef: u,
  toolRef: d,
  activeColorRef: v,
  camera: m,
  shapes: h,
  selected: s,
  isSpaceDown: a,
  textualTypes: l,
  setCamera: r,
  setShapes: f,
  setEditingId: o,
  setEraserPos: M,
  setGuides: g,
  setAnnouncement: x,
  applyInteraction: z,
  selectNow: p,
  beginHistory: b,
  endHistory: k,
  commit: S,
  onToolChange: $,
  expandToGroups: y,
  toPage: X,
  createId: C
}) {
  const E = Wn({
    containerRef: t,
    editorRef: n,
    pointers: e,
    cameraRef: c,
    shapesRef: u,
    toolRef: d,
    activeColorRef: v,
    camera: m,
    shapes: h,
    selected: s,
    isSpaceDown: a,
    textualTypes: l,
    setShapes: f,
    setEditingId: o,
    applyInteraction: z,
    selectNow: p,
    beginHistory: b,
    commit: S,
    onToolChange: $,
    expandToGroups: y,
    toPage: X,
    createId: C
  });
  return Zn({
    containerRef: t,
    pointers: e,
    interactionRef: i,
    cameraRef: c,
    shapesRef: u,
    setCamera: r,
    setShapes: f,
    setEditingId: o,
    setEraserPos: M,
    setGuides: g,
    setAnnouncement: x,
    applyInteraction: z,
    selectNow: p,
    endHistory: k,
    commit: S,
    onToolChange: $,
    expandToGroups: y,
    toPage: X,
    createId: C
  }), E;
}
function to(t) {
  return Bn(t), jn(t), Jn(t);
}
function eo({
  isDarkMode: t,
  tool: n,
  isSpaceDown: e,
  interaction: i,
  zoom: c
}) {
  const u = e || i.kind === "pan" ? "grabbing" : n === "hand" ? "grab" : n === "draw" ? "crosshair" : n === "eraser" ? "cell" : n === "select" ? "default" : "crosshair", d = t ? O.gridDark : O.gridLight, v = 40 * c;
  return { cursor: u, gridColor: d, gridSize: v, strokeColorOf: (h) => h.color ? ot[h.color].border : t ? "var(--canvas-slate-200)" : O.ink };
}
if (typeof document < "u" && !document.querySelector("style[data-invoicex-canvas]")) {
  const t = document.createElement("style");
  t.setAttribute("data-invoicex-canvas", ""), t.textContent = rn, document.head.appendChild(t);
}
const se = 0.1, le = 4, de = ["note", "card", "text", "rect", "ellipse", "triangle", "diamond", "hexagon", "star", "frame", "arrow"];
function no(t = "s") {
  return `${t}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}
const co = De(function({
  boardIdentity: n = "standalone",
  isDarkMode: e,
  tool: i,
  onToolChange: c,
  onDirty: u,
  onZoomChange: d,
  onSelectionChange: v,
  shapes: m,
  onShapesChange: h,
  peerCursors: s,
  onLocalCursor: a
}, l) {
  var re, ie;
  const {
    containerRef: r,
    editorRef: f,
    setLocalShapes: o,
    controlled: M,
    shapes: g,
    setShapes: x,
    camera: z,
    setCamera: p,
    cameraRef: b,
    selected: k,
    selectedRef: S,
    editingId: $,
    setEditingId: y,
    editingIdRef: X,
    interaction: C,
    interactionRef: E,
    applyInteraction: L,
    isSpaceDown: Y,
    setIsSpaceDown: I,
    guides: P,
    setGuides: K,
    announcement: D,
    setAnnouncement: W,
    showInspectorPalette: w,
    setShowInspectorPalette: F,
    eraserPos: T,
    setEraserPos: H,
    setActiveColor: R,
    activeColorRef: Z,
    installedFontFamilies: lt,
    pointers: q,
    past: it,
    future: at,
    selectNow: ct,
    commit: gt,
    deleteSelection: Jt,
    beginHistory: Xt,
    endHistory: zt,
    toPage: Yt,
    viewportCentre: Ot,
    expandToGroups: Dt,
    toolRef: _t,
    shapesRef: bt
  } = Pn({ boardIdentity: n, tool: i, controlledShapes: m, onShapesChange: h, onDirty: u }), {
    inspectorShape: St,
    onContainerPointerMove: A,
    onContainerPointerLeave: j
  } = Tn({
    containerRef: r,
    camera: z,
    setCamera: p,
    minZoom: se,
    maxZoom: le,
    shapes: g,
    selected: k,
    editingId: $,
    textualTypes: de,
    onZoomChange: d,
    onSelectionChange: v,
    onLocalCursor: a,
    toPage: Yt
  }), {
    onPointerDown: _,
    onResizeHandleDown: U,
    onRotateHandleDown: ut,
    onConnectHandleDown: xt,
    onBendHandleDown: Bt
  } = to({
    ref: l,
    containerRef: r,
    editorRef: f,
    pointers: q,
    interactionRef: E,
    cameraRef: b,
    shapesRef: bt,
    toolRef: _t,
    activeColorRef: Z,
    camera: z,
    shapes: g,
    selected: k,
    isSpaceDown: Y,
    setCamera: p,
    setShapes: x,
    setEditingId: y,
    setEraserPos: H,
    setGuides: K,
    setAnnouncement: W,
    applyInteraction: L,
    selectNow: ct,
    past: it,
    future: at,
    beginHistory: Xt,
    endHistory: zt,
    commit: gt,
    deleteSelection: Jt,
    onDirty: u,
    onToolChange: c,
    controlled: M,
    isDarkMode: e,
    minZoom: se,
    maxZoom: le,
    textualTypes: de,
    selectedRef: S,
    editingIdRef: X,
    setIsSpaceDown: I,
    viewportCentre: Ot,
    setLocalShapes: o,
    expandToGroups: Dt,
    toPage: Yt,
    createId: no
  }), { cursor: ke, gridColor: Me, gridSize: te, strokeColorOf: Xe } = eo({
    isDarkMode: e,
    tool: i,
    isSpaceDown: Y,
    interaction: C,
    zoom: z.z
  }), ee = (Pe) => {
    const Te = S.current, ae = X.current, Ht = new Set(Te);
    ae && Ht.add(ae), Ht.size !== 0 && gt((Ae) => Ae.map((jt) => Ht.has(jt.id) ? { ...jt, ...Pe } : jt));
  }, {
    commitEditorHtml: Ye,
    applyFormat: Se,
    applyList: Ce,
    onEditorKeyDown: Ne,
    applyCustomFontFamily: Ie
  } = Fn({
    editorRef: f,
    editingId: $,
    setShapes: x,
    setAnnouncement: W,
    onDirty: u,
    patchSelected: ee
  }), { renderEditor: Ee, renderShapeBody: Le } = En({
    camera: z,
    editingId: $,
    isDarkMode: e,
    editorRef: f,
    commitEditorHtml: Ye,
    onEditorKeyDown: Ne,
    setShapes: x,
    onDirty: u
  }), Fe = C.kind === "marquee" ? C : null, { shapeById: ne, visiblePaintOrder: oe } = Ln({
    containerRef: r,
    shapesRef: bt,
    shapes: g,
    camera: z,
    selected: k,
    editingId: $,
    boardIdentity: n
  });
  return /* @__PURE__ */ B(
    "div",
    {
      ref: r,
      onPointerDown: _,
      onPointerMove: A,
      onPointerLeave: j,
      role: "application",
      "data-canvas-board-id": n,
      "data-canvas-active-tool": i,
      "data-canvas-camera-x": z.x,
      "data-canvas-camera-y": z.y,
      "data-canvas-camera-z": z.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: ke,
        background: e ? O.canvasDark : O.canvasLight,
        backgroundImage: `radial-gradient(${Me} 1px, transparent 1px)`,
        backgroundSize: `${te}px ${te}px`,
        backgroundPosition: `${-z.x * z.z}px ${-z.y * z.z}px`
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
            children: D
          }
        ),
        /* @__PURE__ */ N(
          vn,
          {
            visiblePaintOrder: oe,
            selected: k,
            shapeById: ne,
            allShapes: bt.current,
            camera: z,
            interaction: C,
            eraserPos: T,
            guides: P,
            marquee: Fe,
            strokeColorOf: Xe
          }
        ),
        /* @__PURE__ */ N(
          Nn,
          {
            visiblePaintOrder: oe,
            selected: k,
            editingId: $,
            camera: z,
            shapeById: ne,
            allShapes: bt.current,
            peerCursors: s,
            isDarkMode: e,
            renderEditor: Ee,
            renderShapeBody: Le,
            setEditingId: y,
            onBendHandleDown: Bt,
            onResizeHandleDown: U,
            onRotateHandleDown: ut,
            onConnectHandleDown: xt
          }
        ),
        St && /* @__PURE__ */ N(
          In,
          {
            shape: St,
            shapes: g,
            camera: z,
            canvasSize: { width: ((re = r.current) == null ? void 0 : re.clientWidth) ?? 380, height: ((ie = r.current) == null ? void 0 : ie.clientHeight) ?? 190 },
            isDarkMode: e,
            editing: !!$,
            showPalette: w,
            installedFontFamilies: lt,
            setShowPalette: F,
            setActiveColor: R,
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
  ot as CANVAS_COLORS,
  je as CANVAS_COLOR_KEYS,
  st as CANVAS_FONTS,
  co as InfiniteCanvas,
  We as SHAPE_TOOLS
};
