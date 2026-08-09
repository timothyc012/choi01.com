import { jsx as N, jsxs as j, Fragment as pt } from "react/jsx-runtime";
import _e, { useRef as V, useState as J, useLayoutEffect as Rt, useEffect as dt, useMemo as yt, useCallback as Q, useImperativeHandle as Be, forwardRef as He } from "react";
import { p as je, i as Zt, k as fe, a as rt, v as Ke, c as st, s as We, b as Re, d as wt, h as Ue, S as Ge } from "./document-BSiBzQk-.js";
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
  const u = Nt(t, n, e), d = Nt(t, n, o), m = Nt(e, o, t), b = Nt(e, o, n);
  return Math.abs(u) < 1e-6 && Ct(t, e, n) || Math.abs(d) < 1e-6 && Ct(t, o, n) || Math.abs(m) < 1e-6 && Ct(e, t, o) || Math.abs(b) < 1e-6 && Ct(e, n, o) ? !0 : u > 0 != d > 0 && m > 0 != b > 0;
}
function dn(t, n, e) {
  const o = Math.min(t.x, n.x), a = Math.max(t.x, n.x), u = Math.min(t.y, n.y), d = Math.max(t.y, n.y);
  if (a < e.minX || o > e.maxX || d < e.minY || u > e.maxY) return !1;
  if (t.x >= e.minX && t.x <= e.maxX && t.y >= e.minY && t.y <= e.maxY || n.x >= e.minX && n.x <= e.maxX && n.y >= e.minY && n.y <= e.maxY) return !0;
  const m = { x: e.minX, y: e.minY }, b = { x: e.maxX, y: e.minY }, h = { x: e.maxX, y: e.maxY }, c = { x: e.minX, y: e.maxY };
  return It(t, n, m, b) || It(t, n, b, h) || It(t, n, h, c) || It(t, n, c, m);
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
      const m = (e - o) / d;
      return { x: t[u - 1].x + (t[u].x - t[u - 1].x) * m, y: t[u - 1].y + (t[u].y - t[u - 1].y) * m };
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
  const a = /* @__PURE__ */ new Set([t, n]), u = Math.min(t, n), d = Math.max(t, n), m = ln * 1.2;
  for (const b of e) {
    const h = (o === "x" ? b.minX : b.minY) - m, c = (o === "x" ? b.maxX : b.maxY) + m, r = (l) => l >= u - m * 4 && l <= d + m * 4;
    r(h) && a.add(h), r(c) && a.add(c);
  }
  return [...a].sort((b, h) => Math.abs(b - t) - Math.abs(h - t));
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
  const o = t.side ?? (Math.abs(n.x - t.x) >= Math.abs(n.y - t.y) ? "e" : "s"), a = n.side ?? (o === "e" || o === "w" ? "w" : "n"), u = o === "e" || o === "w", d = a === "e" || a === "w", m = se(t.x, n.x, e, "x"), b = se(t.y, n.y, e, "y"), h = [];
  if (u && d) {
    for (const c of m) h.push([t, { x: c, y: t.y }, { x: c, y: n.y }, n]);
    for (const c of b) h.push([t, { x: t.x, y: c }, { x: n.x, y: c }, n]);
  } else if (!u && !d) {
    for (const c of b) h.push([t, { x: t.x, y: c }, { x: n.x, y: c }, n]);
    for (const c of m) h.push([t, { x: c, y: t.y }, { x: c, y: n.y }, n]);
  } else if (u) {
    h.push([t, { x: n.x, y: t.y }, n]);
    for (const c of b)
      h.push([t, { x: t.x, y: c }, { x: n.x, y: c }, n]), h.push([t, { x: t.x, y: c }, n]);
    for (const c of m) h.push([t, { x: c, y: t.y }, { x: c, y: n.y }, n]);
  } else {
    h.push([t, { x: t.x, y: n.y }, n]);
    for (const c of b)
      h.push([t, { x: t.x, y: c }, n]), h.push([t, { x: t.x, y: c }, { x: n.x, y: c }, n]);
    for (const c of m) h.push([t, { x: c, y: t.y }, { x: c, y: n.y }, n]);
  }
  return xn(h, e);
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
  return t.color ? rt[t.color].bg : rt.blue.bg;
}
function hn(t) {
  return t.color ? rt[t.color].border : "#2563eb";
}
function gt(t) {
  if (t.textColor)
    try {
      return fe(t.textColor);
    } catch {
    }
  return t.color ? rt[t.color].text : "#0f172a";
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
      const o = n / 2, a = e / 2, u = Math.min(n, e) / 2, d = u * 0.4, m = [];
      for (let b = 0; b < 10; b++) {
        const h = Math.PI / 5 * b - Math.PI / 2, c = b % 2 === 0 ? u : d;
        m.push(`${o + c * Math.cos(h)},${a + c * Math.sin(h)}`);
      }
      return m.join(" ");
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
    const [a, u] = t[o], [d, m] = t[o + 1];
    n += ` Q ${a} ${u} ${(a + d) / 2} ${(u + m) / 2}`;
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
        const c = d.textContent ?? "";
        c && e[e.length - 1].push({ text: c, ...u });
        return;
      }
      if (d.nodeType !== Node.ELEMENT_NODE) return;
      const m = d;
      if (m.tagName === "BR") {
        e.push([]);
        return;
      }
      const b = { bold: u.bold || m.tagName === "B" || m.tagName === "STRONG", italic: u.italic || m.tagName === "I" || m.tagName === "EM", underline: u.underline || m.tagName === "U" }, h = m.tagName === "DIV" || m.tagName === "P" || m.tagName === "LI";
      h && e[e.length - 1].length > 0 && e.push([]), o(m, b), h && e.push([]);
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
function mt(t) {
  return {
    minX: Math.min(t.x, t.x + t.w),
    minY: Math.min(t.y, t.y + t.h),
    maxX: Math.max(t.x, t.x + t.w),
    maxY: Math.max(t.y, t.y + t.h)
  };
}
function at(t) {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}
function q(t) {
  const n = t.rotation ?? 0, e = mt(t);
  if (!n) return e;
  const o = at(t), a = Math.cos(n), u = Math.sin(n), d = [
    [e.minX, e.minY],
    [e.maxX, e.minY],
    [e.maxX, e.maxY],
    [e.minX, e.maxY]
  ].map(([h, c]) => {
    const r = h - o.x, l = c - o.y;
    return [o.x + r * a - l * u, o.y + r * u + l * a];
  }), m = d.map((h) => h[0]), b = d.map((h) => h[1]);
  return { minX: Math.min(...m), minY: Math.min(...b), maxX: Math.max(...m), maxY: Math.max(...b) };
}
function ge(t, n, e) {
  const o = t.rotation ?? 0;
  if (!o) return { x: n, y: e };
  const a = at(t), u = Math.cos(-o), d = Math.sin(-o), m = n - a.x, b = e - a.y;
  return { x: a.x + m * u - b * d, y: a.y + m * d + b * u };
}
function Lt(t, n, e, o, a, u) {
  const d = a - e, m = u - o, b = d * d + m * m, h = b === 0 ? 0 : Math.max(0, Math.min(1, ((t - e) * d + (n - o) * m) / b));
  return Math.hypot(t - (e + h * d), n - (o + h * m));
}
function Pt(t, n, e, o, a, u) {
  const d = 8 / o;
  if (t.type === "arrow") {
    const h = $t(t, a ?? /* @__PURE__ */ new Map(), u);
    if (h.routing === "orthogonal" && h.pathPoints && h.pathPoints.length > 1) {
      for (let r = 1; r < h.pathPoints.length; r++) {
        const l = h.pathPoints[r - 1], i = h.pathPoints[r];
        if (Lt(n, e, l.x, l.y, i.x, i.y) <= d) return !0;
      }
      return !1;
    }
    if (h.bend === 0) return Lt(n, e, h.start.x, h.start.y, h.end.x, h.end.y) <= d;
    let c = h.start;
    for (let r = 1; r <= 16; r++) {
      const l = Xt(r / 16, h.start, h.control, h.end);
      if (Lt(n, e, c.x, c.y, l.x, l.y) <= d) return !0;
      c = l;
    }
    return !1;
  }
  if (t.type === "draw" && t.points) {
    for (let h = 1; h < t.points.length; h++) {
      const [c, r] = t.points[h - 1], [l, i] = t.points[h];
      if (Lt(n, e, c, r, l, i) <= d) return !0;
    }
    return !1;
  }
  const m = ge(t, n, e), b = mt(t);
  if (t.type === "frame") {
    const h = m.x >= b.minX - d && m.x <= b.maxX + d && m.y >= b.minY - d && m.y <= b.maxY + d && (m.x <= b.minX + d || m.x >= b.maxX - d || m.y <= b.minY + d || m.y >= b.maxY - d), c = m.x >= b.minX - d && m.x <= b.maxX + d && m.y >= b.minY - 28 / o && m.y <= b.minY;
    return h || c;
  }
  return m.x >= b.minX - d && m.x <= b.maxX + d && m.y >= b.minY - d && m.y <= b.maxY + d;
}
function bt(t, n, e) {
  const o = mt(t), a = (o.minX + o.maxX) / 2, u = (o.minY + o.maxY) / 2, d = n - a, m = e - u;
  if (d === 0 && m === 0) return { x: a, y: u, side: "e" };
  const b = (o.maxX - o.minX) / 2, h = (o.maxY - o.minY) / 2, c = b === 0 ? 1 / 0 : Math.abs(b / d), r = h === 0 ? 1 / 0 : Math.abs(h / m);
  return c <= r ? { x: a + d * c, y: u + m * c, side: d >= 0 ? "e" : "w" } : { x: a + d * r, y: u + m * r, side: m >= 0 ? "s" : "n" };
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
    const x = at(o), s = at(a);
    u = bt(o, s.x, s.y), d = bt(a, x.x, x.y);
  } else o ? u = bt(o, d.x, d.y) : a && (d = bt(a, u.x, u.y));
  const m = (u.x + d.x) / 2, b = (u.y + d.y) / 2, h = t.bend ?? 0;
  let c = { x: m, y: b };
  if (h !== 0) {
    const x = d.x - u.x, s = d.y - u.y, f = Math.hypot(x, s) || 1;
    c = { x: m + -s / f * h, y: b + x / f * h };
  }
  const r = !!(o || a), l = t.routing ?? (r ? "orthogonal" : h !== 0 ? "curved" : "straight");
  if (l !== "orthogonal") return { start: u, end: d, control: c, bend: h, routing: l };
  const i = be(e, t, o == null ? void 0 : o.id, a == null ? void 0 : a.id);
  return { start: u, end: d, control: c, bend: h, routing: l, pathPoints: ve(me(u, d, i)) };
}
function Xt(t, n, e, o) {
  const a = 1 - t;
  return { x: a * a * n.x + 2 * a * t * e.x + t * t * o.x, y: a * a * n.y + 2 * a * t * e.y + t * t * o.y };
}
function we(t, n, e, o, a) {
  const u = [];
  let d = 0;
  for (const m of t) {
    if (m.type !== "draw" || !m.points) {
      if (Pt(m, n, e, a)) continue;
      u.push(m);
      continue;
    }
    const b = [];
    let h = [];
    for (const [r, l] of m.points)
      Math.hypot(r - n, l - e) <= o / a ? (h.length > 1 && b.push(h), h = []) : h.push([r, l]);
    if (h.length > 1 && b.push(h), b.length === 0) continue;
    const c = mt(m);
    b.forEach((r) => u.push({ ...m, id: `${m.id}-e${d++}`, points: r, x: c.minX, y: c.minY, w: c.maxX - c.minX, h: c.maxY - c.minY }));
  }
  return u;
}
function mn(t, n, e) {
  const o = 6 / e;
  let a = null, u = null;
  const d = [], m = [t.minX, (t.minX + t.maxX) / 2, t.maxX], b = [t.minY, (t.minY + t.maxY) / 2, t.maxY];
  for (const h of n) {
    const c = q(h), r = [c.minX, (c.minX + c.maxX) / 2, c.maxX], l = [c.minY, (c.minY + c.maxY) / 2, c.maxY];
    for (const i of m) for (const x of r) {
      const s = x - i;
      Math.abs(s) <= o && (!a || Math.abs(s) < Math.abs(a.delta)) && (a = { delta: s, at: x });
    }
    for (const i of b) for (const x of l) {
      const s = x - i;
      Math.abs(s) <= o && (!u || Math.abs(s) < Math.abs(u.delta)) && (u = { delta: s, at: x });
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
  guides: m,
  marquee: b,
  strokeColorOf: h
}) {
  return /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible", children: /* @__PURE__ */ j("g", { transform: `scale(${a.z}) translate(${-a.x}, ${-a.y})`, children: [
    t.map((c) => {
      if (c.type === "draw" && c.points)
        return /* @__PURE__ */ N(
          "path",
          {
            "data-canvas-vector-shape-id": c.id,
            "data-canvas-vector-shape-type": "draw",
            d: pe(c.points),
            fill: "none",
            stroke: n.has(c.id) ? O.blue : h(c),
            strokeWidth: 3 / a.z,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          c.id
        );
      if (c.type !== "arrow") return null;
      const r = n.has(c.id) ? O.blue : h(c), l = $t(c, e, o), i = 14 / a.z, x = 5 / a.z, s = l.routing === "orthogonal" && l.pathPoints ? l.pathPoints : null, f = s && s.length > 1;
      let k, g;
      if (f)
        k = Ut(s), g = fn(s);
      else if (l.routing === "curved") {
        k = `M ${l.start.x} ${l.start.y} Q ${l.control.x} ${l.control.y} ${l.end.x} ${l.end.y}`;
        const M = Xt(0.94, l.start, l.control, l.end);
        g = Math.atan2(l.end.y - M.y, l.end.x - M.x);
      } else
        k = `M ${l.start.x} ${l.start.y} L ${l.end.x} ${l.end.y}`, g = Math.atan2(l.end.y - l.start.y, l.end.x - l.start.x);
      const p = f && s.length >= 2 ? Vt(s[0], s[1]) : l.routing === "orthogonal" && l.start.side ? l.start.side === "e" ? 0 : l.start.side === "w" ? Math.PI : l.start.side === "s" ? Math.PI / 2 : -Math.PI / 2 : Vt(l.start, l.end), w = c.strokeStyle === "dashed" ? `${8 / a.z} ${5 / a.z}` : c.strokeStyle === "dotted" ? `${1.5 / a.z} ${4 / a.z}` : void 0, y = (M, S, $, v) => M === "dot" ? /* @__PURE__ */ N("circle", { cx: S, cy: $, r: x, fill: r }) : M === "none" ? null : /* @__PURE__ */ N(
        "polygon",
        {
          points: `${S},${$} ${S - i * Math.cos(v - 0.4)},${$ - i * Math.sin(v - 0.4)} ${S - i * Math.cos(v + 0.4)},${$ - i * Math.sin(v + 0.4)}`,
          fill: r
        }
      );
      return /* @__PURE__ */ j("g", { "data-canvas-vector-shape-id": c.id, "data-canvas-vector-shape-type": "arrow", "data-canvas-routing": l.routing, children: [
        /* @__PURE__ */ N("path", { d: k, fill: "none", stroke: r, strokeWidth: 2.5 / a.z, strokeLinecap: "round", strokeLinejoin: "round", strokeDasharray: w }),
        y(c.arrowEnd ?? "arrow", l.end.x, l.end.y, g),
        y(c.arrowStart ?? "none", l.start.x, l.start.y, p + Math.PI)
      ] }, c.id);
    }),
    u.kind === "connect" && u.fromId !== void 0 && u.toX !== void 0 && u.toY !== void 0 && (() => {
      const c = e.get(u.fromId);
      if (!c) return null;
      const r = bt(c, u.toX, u.toY), l = u.hoverId ? e.get(u.hoverId) : null, i = l ? bt(l, r.x, r.y) : { x: u.toX, y: u.toY }, x = l ? me(r, i, be(o, { id: "__preview" }, c.id, l.id)) : [r, i];
      return /* @__PURE__ */ j("g", { children: [
        /* @__PURE__ */ N("path", { d: Ut(x), stroke: O.blue, strokeWidth: 2 / a.z, strokeDasharray: `${5 / a.z} ${4 / a.z}` }),
        l ? /* @__PURE__ */ N("rect", { x: q(l).minX - 3 / a.z, y: q(l).minY - 3 / a.z, width: q(l).maxX - q(l).minX + 6 / a.z, height: q(l).maxY - q(l).minY + 6 / a.z, fill: "none", stroke: O.blue, strokeWidth: 2 / a.z, rx: 6 / a.z }) : /* @__PURE__ */ N("circle", { cx: i.x, cy: i.y, r: 5 / a.z, fill: O.blue })
      ] });
    })(),
    d && /* @__PURE__ */ N("circle", { cx: d.x, cy: d.y, r: pn / a.z, fill: O.roseSoft, stroke: O.rose, strokeWidth: 1 / a.z }),
    m.map((c, r) => /* @__PURE__ */ N("line", { x1: c.x1, y1: c.y1, x2: c.x2, y2: c.y2, stroke: O.pink, strokeWidth: 1 / a.z, strokeDasharray: `${4 / a.z} ${4 / a.z}` }, `guide-${r}`)),
    b && /* @__PURE__ */ N("rect", { x: Math.min(b.startX, b.curX), y: Math.min(b.startY, b.curY), width: Math.abs(b.curX - b.startX), height: Math.abs(b.curY - b.startY), fill: O.marqueeFill, stroke: O.blue, strokeWidth: 1 / a.z })
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
function Ot(t) {
  return t.replace(/[\u0000-\u001f\u007f]/g, "").replace(/[{}\\]/g, "").trim().slice(0, 120);
}
function $e(t) {
  return bn.has(t.trim().toLowerCase());
}
function ze(t) {
  const n = Ot(t);
  return n ? $e(n) ? n : `"${n.replace(/"/g, '\\"')}"` : "";
}
function $n(t) {
  return Ot(t).split(",").map((n) => n.trim()).filter(Boolean).map(ze).filter(Boolean).join(", ");
}
function ke(t) {
  return Ot(t).split(",").map((n) => n.trim().replace(/^["']|["']$/g, "")).filter(Boolean).join(", ").slice(0, 120);
}
function Mt(t) {
  return t.split(",").map((n) => Ot(n).replace(/^["']|["']$/g, "")).filter(Boolean).filter((n) => !$e(n));
}
const Ft = Array.from(/* @__PURE__ */ new Set([
  ...wn,
  ...Mt(st.sans.stack),
  ...Mt(st.serif.stack),
  ...Mt(st.mono.stack),
  ...Mt(st.gothic.stack),
  ...Mt(st.korean.stack)
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
  if (!t.fontFamily) return st.sans.stack;
  if (t.fontFamily === "custom") {
    let e = "";
    try {
      e = ke(We(t.customFontFamily ?? ""));
    } catch {
    }
    return $n(e) || st.sans.stack;
  }
  return ((n = st[t.fontFamily]) == null ? void 0 : n.stack) ?? st.sans.stack;
}
function ot(t) {
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
  isDarkMode: m,
  renderEditor: b,
  renderShapeBody: h,
  setEditingId: c,
  onBendHandleDown: r,
  onResizeHandleDown: l,
  onRotateHandleDown: i,
  onConnectHandleDown: x,
  onArrowEndpointDown: s
}) {
  return /* @__PURE__ */ j(pt, { children: [
    /* @__PURE__ */ N("div", { className: "absolute top-0 left-0 origin-top-left", style: { transform: `scale(${o.z}) translate(${-o.x}px, ${-o.y}px)` }, children: t.map((f) => {
      if (f.type === "draw") return null;
      if (f.type === "arrow") {
        const p = $t(f, a, u), w = p.routing === "orthogonal" && p.pathPoints ? he(p.pathPoints) : p.routing === "curved" ? Xt(0.5, p.start, p.control, p.end) : { x: (p.start.x + p.end.x) / 2, y: (p.start.y + p.end.y) / 2 }, y = e === f.id, M = Tt(f), S = n.has(f.id), $ = At(f).trim();
        return !M && !y && !S ? null : /* @__PURE__ */ j(_e.Fragment, { children: [
          /* @__PURE__ */ j("div", { "data-canvas-arrow-label-hit-area": !0, className: "absolute flex items-center justify-center", style: { left: w.x - 90, top: w.y - 18, width: 180, height: 36 }, onDoubleClick: (v) => {
            v.stopPropagation(), c(f.id);
          }, children: [
            (M || y) && /* @__PURE__ */ N(
              "div",
              {
                "data-canvas-arrow-label": "true",
                "aria-label": $ ? `관계 설명: ${$}` : "관계 설명 입력",
                title: y ? void 0 : $ ? "더블클릭하여 관계 설명 편집" : "더블클릭하여 관계 설명 입력",
                className: `px-3 py-1 rounded-full border-2 shadow-sm ${m ? "bg-slate-900 border-slate-600 text-slate-100" : "bg-white border-slate-300 text-slate-800"}`,
                style: {
                  fontSize: tt(f),
                  fontFamily: et(f),
                  maxWidth: "100%",
                  minWidth: y ? 120 / o.z : void 0,
                  minHeight: y ? 28 / o.z : void 0,
                  color: f.textColor
                },
                children: y ? b("text-center whitespace-nowrap") : /* @__PURE__ */ N("span", { dangerouslySetInnerHTML: { __html: M } }, "canvas-view")
              }
            ),
            S && n.size === 1 && /* @__PURE__ */ N("div", { "data-canvas-arrow-bend-handle": !0, onPointerDown: (v) => r(v, f), title: "드래그해서 곡선으로 (Curve)", className: "absolute rounded-full bg-white border-2 border-blue-600", style: { width: 10 / o.z, height: 10 / o.z, left: `calc(50% - ${5 / o.z}px)`, top: -10 / o.z, cursor: "grab" } })
          ] }),
          S && n.size === 1 && ["start", "end"].map((v) => {
            const X = v === "start" ? p.start : p.end;
            return /* @__PURE__ */ N(
              "div",
              {
                "data-canvas-arrow-endpoint": v,
                onPointerDown: (Y) => s(Y, f, v),
                title: "드래그해서 끝점 이동 (노드 위에 놓으면 연결)",
                className: "absolute bg-white border-2 border-blue-600 rounded-full",
                style: { width: 12 / o.z, height: 12 / o.z, left: X.x - 6 / o.z, top: X.y - 6 / o.z, cursor: "grab" }
              },
              v
            );
          })
        ] }, f.id);
      }
      const k = n.has(f.id), g = mt(f);
      return /* @__PURE__ */ j(
        "div",
        {
          "data-canvas-shape-id": f.id,
          "data-canvas-shape-type": f.type,
          "data-canvas-selected": k ? "true" : void 0,
          "data-canvas-text-align": ot(f),
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
          style: { left: g.minX, top: g.minY, width: g.maxX - g.minX, height: g.maxY - g.minY, transform: f.rotation ? `rotate(${f.rotation}rad)` : void 0, transformOrigin: "center" },
          onDoubleClick: (p) => {
            p.stopPropagation(), In.has(f.type) && c(f.id);
          },
          children: [
            h(f),
            k && /* @__PURE__ */ j(pt, { children: [
              /* @__PURE__ */ N("div", { className: "absolute -inset-0.5 pointer-events-none", style: { outline: `${2 / o.z}px solid ${O.blue}` } }),
              n.size === 1 && /* @__PURE__ */ j(pt, { children: [
                ["nw", "ne", "sw", "se"].map((p) => /* @__PURE__ */ N("div", { "data-canvas-resize-handle": p, onPointerDown: (w) => l(w, f, p), className: "absolute bg-white border-2 border-blue-600 rounded-sm", style: { width: 10 / o.z, height: 10 / o.z, cursor: `${p}-resize`, left: p.includes("w") ? -5 / o.z : void 0, right: p.includes("e") ? -5 / o.z : void 0, top: p.includes("n") ? -5 / o.z : void 0, bottom: p.includes("s") ? -5 / o.z : void 0 } }, p)),
                /* @__PURE__ */ N("div", { onPointerDown: (p) => i(p, f), title: "회전 (Shift로 15도 단위)", className: "absolute bg-blue-600 rounded-full", style: { width: 12 / o.z, height: 12 / o.z, left: "50%", marginLeft: -6 / o.z, top: -28 / o.z, cursor: "grab" } }),
                En.has(f.type) && ["n", "s", "w", "e"].map((p) => /* @__PURE__ */ N("div", { onPointerDown: (w) => x(w, f), title: "드래그해서 연결 (관계 생성)", className: "absolute flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500", style: { ...p === "n" ? { left: "50%", top: -30 / o.z, marginLeft: -9 / o.z } : p === "s" ? { left: "50%", bottom: -30 / o.z, marginLeft: -9 / o.z } : p === "w" ? { top: "50%", left: -30 / o.z, marginTop: -9 / o.z } : { top: "50%", right: -30 / o.z, marginTop: -9 / o.z }, width: 18 / o.z, height: 18 / o.z, fontSize: 13 / o.z, lineHeight: 1, cursor: "crosshair" }, children: "+" }, `plus-${p}`))
              ] })
            ] })
          ]
        },
        f.id
      );
    }) }),
    u.filter((f) => (f.type === "draw" || f.type === "arrow") && n.has(f.id)).map((f) => {
      const k = q(f);
      return /* @__PURE__ */ N("div", { className: "absolute pointer-events-none border-2 border-blue-600/60 rounded", style: { left: (k.minX - o.x) * o.z - 4, top: (k.minY - o.y) * o.z - 4, width: (k.maxX - k.minX) * o.z + 8, height: (k.maxY - k.minY) * o.z + 8 } }, `sel-${f.id}`);
    }),
    d == null ? void 0 : d.map((f) => /* @__PURE__ */ j("div", { className: "absolute pointer-events-none z-40", style: { left: (f.x - o.x) * o.z, top: (f.y - o.y) * o.z, transform: "translate(-2px, -2px)" }, children: [
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
  installedFontFamilies: m,
  setShowPalette: b,
  setActiveColor: h,
  patchSelected: c,
  applyFormat: r,
  applyList: l,
  applyCustomFontFamily: i
}) {
  var K;
  const x = a ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100", s = V(null), [f, k] = J({ width: 380, height: 260 });
  Rt(() => {
    const z = s.current;
    if (!z) return;
    const L = () => {
      const D = Math.max(1, Math.ceil(z.getBoundingClientRect().width)), R = Math.max(1, Math.ceil(z.getBoundingClientRect().height));
      k((U) => U.width === D && U.height === R ? U : { width: D, height: R });
    };
    if (L(), typeof ResizeObserver > "u") return;
    const B = new ResizeObserver(L);
    return B.observe(z), () => B.disconnect();
  }, [u, m.length, a, t, d]);
  const g = f.width, p = f.height, w = q(t), y = (w.minX - e.x) * e.z, M = (w.minY - e.y) * e.z, S = (w.maxX - e.x) * e.z, $ = (w.maxY - e.y) * e.z, v = Math.max(8, o.width - g - 8), X = Math.max(8, o.height - p - 8), Y = (z, L) => ({ left: Math.min(Math.max(8, z), v), top: Math.min(Math.max(8, L), X) }), I = [
    Y((y + S) / 2 - g / 2, M - p - 12),
    Y((y + S) / 2 - g / 2, $ + 12),
    Y((o.width - g) / 2, 12),
    Y(y - g - 12, M + ($ - M - p) / 2),
    Y(S + 12, M + ($ - M - p) / 2)
  ], E = n.map((z) => {
    const L = q(z);
    return { left: (L.minX - e.x) * e.z, top: (L.minY - e.y) * e.z, right: (L.maxX - e.x) * e.z, bottom: (L.maxY - e.y) * e.z };
  }), F = I[0], C = (z, L) => {
    const B = Math.max(0, Math.min(z.left + g, L.right) - Math.max(z.left, L.left)), D = Math.max(0, Math.min(z.top + p, L.bottom) - Math.max(z.top, L.top));
    return B * D;
  }, P = ((K = I.map((z) => ({
    candidate: z,
    overlap: E.reduce((L, B) => L + C(z, B), 0),
    distance: Math.hypot(z.left - F.left, z.top - F.top)
  })).sort((z, L) => z.overlap - L.overlap || z.distance - L.distance)[0]) == null ? void 0 : K.candidate) ?? F, T = tt(t), W = (z, L, B, D) => /* @__PURE__ */ N("button", { type: "button", title: D, onClick: B, className: `h-7 px-2 rounded text-[11px] font-bold ${L ? "bg-blue-600 text-white" : x}`, children: z });
  return /* @__PURE__ */ j("div", { ref: s, "data-canvas-inspector": "text", className: `absolute z-40 pointer-events-none flex flex-col gap-1.5 p-2 rounded-xl border shadow-xl backdrop-blur-sm max-w-[calc(100vw-2rem)] ${a ? "bg-slate-900/95 border-slate-700 text-slate-200" : "bg-white/95 border-slate-200 text-slate-700"}`, style: { left: P.left, top: P.top }, onPointerDown: (z) => {
    z.stopPropagation();
    const L = z.target instanceof Element ? z.target : null;
    L != null && L.closest("input, select, textarea") || z.preventDefault();
  }, onClick: (z) => z.stopPropagation(), children: [
    /* @__PURE__ */ j("div", { className: "relative flex items-center gap-1.5 pointer-events-none", children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "색상" }),
      /* @__PURE__ */ N("button", { type: "button", title: "색상 팔레트", "aria-label": "도형 색상", onClick: () => b((z) => !z), className: `pointer-events-auto w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${a ? "border-slate-700 hover:bg-slate-800" : "border-slate-200 hover:bg-slate-50"}`, children: /* @__PURE__ */ N(Ve, { className: "w-4 h-4", style: { color: gt(t) } }) }),
      d && /* @__PURE__ */ j("div", { className: `pointer-events-auto absolute left-0 top-10 z-50 flex items-center gap-1.5 p-2 rounded-xl border shadow-xl ${a ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`, children: [
        Re.map((z) => /* @__PURE__ */ N("button", { type: "button", title: rt[z].label, "aria-label": `색 ${rt[z].label}`, onClick: () => {
          h(z), c({ color: z, fillColor: void 0 }), b(!1);
        }, className: "w-5 h-5 rounded-full border", style: { background: rt[z].bg, borderColor: rt[z].border, outline: t.color === z && !t.fillColor ? `2px solid ${O.blue}` : void 0, outlineOffset: 1 } }, z)),
        /* @__PURE__ */ N("label", { title: "배경 색 (자유 선택)", className: "w-5 h-5 rounded-full border relative overflow-hidden cursor-pointer flex items-center justify-center", style: { background: t.fillColor ?? qt(t), outline: t.fillColor ? `2px solid ${O.blue}` : void 0, outlineOffset: 1 }, children: /* @__PURE__ */ N("input", { type: "color", value: t.fillColor ?? qt(t), onChange: (z) => {
          c({ fillColor: z.target.value }), b(!1);
        }, className: "absolute inset-0 opacity-0 cursor-pointer" }) })
      ] })
    ] }),
    /* @__PURE__ */ j("div", { className: "flex flex-wrap items-center gap-2 pointer-events-none", children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "텍스트" }),
      /* @__PURE__ */ j("label", { title: "글씨 색", className: "pointer-events-auto w-8 h-8 rounded-lg border relative overflow-hidden cursor-pointer flex items-center justify-center text-[11px] font-bold shadow-sm", style: { background: gt(t), color: O.white, mixBlendMode: "normal" }, children: [
        /* @__PURE__ */ N("span", { "aria-hidden": "true", children: "A" }),
        /* @__PURE__ */ N("input", { "data-canvas-control": "text-color", type: "color", value: t.textColor ?? gt(t), onChange: (z) => c({ textColor: z.target.value }), className: "absolute inset-0 opacity-0 cursor-pointer" })
      ] }),
      /* @__PURE__ */ j("div", { className: `pointer-events-none flex items-center gap-0.5 px-1 rounded-lg border ${a ? "border-slate-700 bg-slate-950/60" : "border-slate-200 bg-slate-50"}`, children: [
        /* @__PURE__ */ N("span", { className: "px-1 text-[10px] font-medium opacity-60", children: "크기" }),
        /* @__PURE__ */ N("button", { type: "button", title: "글씨 작게", "aria-label": "글씨 작게", onClick: () => c({ fontSize: Math.max(8, T - 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${x}`, children: /* @__PURE__ */ N(qe, { className: "w-3.5 h-3.5" }) }),
        /* @__PURE__ */ N("span", { className: "pointer-events-none w-8 text-center text-xs font-semibold tabular-nums", children: T }),
        /* @__PURE__ */ N("button", { type: "button", title: "글씨 크게", "aria-label": "글씨 크게", onClick: () => c({ fontSize: Math.min(96, T + 2) }), className: `pointer-events-auto w-7 h-7 rounded-md flex items-center justify-center ${x}`, children: /* @__PURE__ */ N(Qe, { className: "w-3.5 h-3.5" }) })
      ] }),
      /* @__PURE__ */ j("label", { className: `pointer-events-auto relative flex items-center h-8 rounded-lg border ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}`, children: [
        /* @__PURE__ */ N("select", { title: "글꼴", "aria-label": "글꼴", value: t.fontFamily ?? "sans", onChange: (z) => {
          const L = Yn(z.target.value);
          c(L === "custom" ? { fontFamily: "custom", customFontFamily: t.customFontFamily } : { fontFamily: L, customFontFamily: void 0 });
        }, className: `h-full min-w-20 appearance-none bg-transparent rounded-lg text-xs font-medium pl-2 pr-7 outline-none ${a ? "text-slate-200" : "text-slate-700"}`, children: gn.map((z) => /* @__PURE__ */ N("option", { value: z, className: a ? "bg-slate-900 text-slate-200" : "bg-white text-slate-800", children: st[z].label }, z)) }),
        /* @__PURE__ */ N(Ze, { className: "pointer-events-none absolute right-1.5 w-3.5 h-3.5 opacity-60" })
      ] }),
      t.fontFamily === "custom" && /* @__PURE__ */ j(pt, { children: [
        /* @__PURE__ */ N("input", { type: "text", list: `canvas-font-families-${t.id}`, title: "폰트 직접입력", "aria-label": "폰트 직접입력", defaultValue: t.customFontFamily ?? "", onBlur: (z) => i(z.target.value), onChange: (z) => z.currentTarget.value && i(z.currentTarget.value), onKeyDown: (z) => {
          z.key === "Enter" && (z.preventDefault(), i(z.currentTarget.value));
        }, onDoubleClick: (z) => z.stopPropagation(), onPointerDown: (z) => z.stopPropagation(), placeholder: "Noto Sans KR", className: `pointer-events-auto h-8 w-44 rounded-lg border px-2 text-xs ${a ? "bg-slate-950 border-slate-700" : "bg-white border-slate-200"}` }),
        /* @__PURE__ */ N("datalist", { id: `canvas-font-families-${t.id}`, children: m.map((z) => /* @__PURE__ */ N("option", { value: z }, z)) })
      ] })
    ] }),
    /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-none ${a ? "border-slate-700" : "border-slate-100"}`, children: [
      /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "문단" }),
      /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["left", Je, "왼쪽 정렬"], ["center", tn, "가운데 정렬"], ["right", en, "오른쪽 정렬"]].map(([z, L, B]) => /* @__PURE__ */ N("button", { type: "button", "aria-label": B, title: B, onClick: () => c({ textAlign: z }), className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${ot(t) === z ? "bg-blue-600 text-white shadow-sm" : x}`, children: /* @__PURE__ */ N(L, { className: "w-4 h-4" }) }, z)) }),
      u && /* @__PURE__ */ j(pt, { children: [
        /* @__PURE__ */ N("span", { className: "pointer-events-none px-1 text-[10px] font-semibold tracking-wide opacity-60", children: "목록" }),
        /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [["bullet", nn, "글머리표 목록"], ["dash", null, "대시 목록"], ["number", on, "번호 목록"]].map(([z, L, B]) => /* @__PURE__ */ N("button", { type: "button", onClick: () => l(z), "aria-label": B, title: B, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${x}`, children: L ? /* @__PURE__ */ N(L, { className: "w-4 h-4" }) : /* @__PURE__ */ N("span", { className: "text-base leading-none", children: "–" }) }, z)) }),
        /* @__PURE__ */ N("div", { className: `pointer-events-none flex items-center gap-0.5 p-0.5 rounded-lg ${a ? "bg-slate-950/70" : "bg-slate-50"}`, children: [{ cmd: "bold", Icon: rn, label: "굵게" }, { cmd: "italic", Icon: an, label: "기울임" }, { cmd: "underline", Icon: cn, label: "밑줄" }].map(({ cmd: z, Icon: L, label: B }) => /* @__PURE__ */ N("button", { type: "button", onClick: () => r(z), "aria-label": B, title: B, className: `pointer-events-auto w-8 h-8 rounded-md flex items-center justify-center ${x}`, children: /* @__PURE__ */ N(L, { className: "w-4 h-4" }) }, z)) })
      ] })
    ] }),
    (t.type === "card" || t.type === "arrow") && /* @__PURE__ */ j("div", { className: `flex flex-wrap items-center gap-2 pt-1.5 border-t pointer-events-auto ${a ? "border-slate-700" : "border-slate-100"}`, children: [
      t.type === "card" && /* @__PURE__ */ j(pt, { children: [
        /* @__PURE__ */ N("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
        /* @__PURE__ */ N("input", { type: "text", title: "카드 Type", "aria-label": "카드 Type", value: t.category ?? "", placeholder: "TYPE", onPointerDown: (z) => z.stopPropagation(), onChange: (z) => c({ category: z.target.value.toUpperCase() }), className: `h-7 w-24 rounded text-[11px] px-1.5 border uppercase ${a ? "bg-slate-950 border-slate-700 text-slate-200" : "bg-white border-slate-200 text-slate-700"}` })
      ] }),
      t.type === "arrow" && /* @__PURE__ */ j(pt, { children: [
        /* @__PURE__ */ N("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
        W("직선", (t.routing ?? "straight") === "straight", () => c({ routing: "straight", bend: 0 }), "직선"),
        W("ㄱ", (t.routing ?? "") === "orthogonal", () => c({ routing: "orthogonal", bend: 0 }), "그리드 라우팅 (ㄱ/ㄹ)"),
        W("곡선", (t.routing ?? "") === "curved", () => c({ routing: "curved", bend: t.bend || 60 }), "곡선"),
        /* @__PURE__ */ N("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
        W("—", (t.strokeStyle ?? "solid") === "solid", () => c({ strokeStyle: "solid" }), "실선"),
        W("- -", t.strokeStyle === "dashed", () => c({ strokeStyle: "dashed" }), "점선(dash)"),
        W("···", t.strokeStyle === "dotted", () => c({ strokeStyle: "dotted" }), "점선(dot)"),
        /* @__PURE__ */ N("div", { className: `w-px h-6 ${a ? "bg-slate-700" : "bg-slate-200"}` }),
        W((t.arrowStart ?? "none") === "none" ? "○" : t.arrowStart === "dot" ? "●" : "◀", !0, () => c({ arrowStart: (t.arrowStart ?? "none") === "none" ? "arrow" : t.arrowStart === "arrow" ? "dot" : "none" }), "시작점 표식"),
        W((t.arrowEnd ?? "arrow") === "none" ? "○" : t.arrowEnd === "dot" ? "●" : "▶", !0, () => c({ arrowEnd: (t.arrowEnd ?? "arrow") === "arrow" ? "dot" : t.arrowEnd === "dot" ? "none" : "arrow" }), "끝점 표식")
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
  onDirty: m
}) {
  const b = "canvas-rich-text w-full h-full outline-none whitespace-pre-wrap break-words overflow-hidden", h = (r, l) => /* @__PURE__ */ N(
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
      className: `${b} ${r}`,
      style: l
    },
    "canvas-editor"
  );
  return { renderEditor: h, renderShapeBody: (r) => {
    const l = rt[r.color ?? "blue"], i = n === r.id, x = Tt(r);
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
              children: i ? h("", { fontSize: 13 / t.z }) : At(r) || "프레임"
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
          children: i ? h("font-medium", { color: gt(r), fontSize: tt(r), fontFamily: et(r), textAlign: ot(r) }) : x ? /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: gt(r), fontSize: tt(r), fontFamily: et(r), textAlign: ot(r) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view") : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words overflow-hidden", style: { color: gt(r), fontSize: tt(r), fontFamily: et(r), textAlign: ot(r) }, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "메모 입력..." }) }, "canvas-view")
        }
      );
    if (r.type === "card") {
      const w = r.cardStyle === "glass";
      return /* @__PURE__ */ j(
        "div",
        {
          className: "w-full h-full flex flex-col p-4 rounded-2xl text-white overflow-hidden",
          style: {
            background: w ? O.glassFill : O.slateCard,
            backdropFilter: w ? "blur(12px)" : void 0,
            WebkitBackdropFilter: w ? "blur(12px)" : void 0,
            border: `1px solid ${w ? O.glassBorder : O.darkBorder}`,
            boxShadow: w ? O.glassShadow : O.cardShadow
          },
          children: [
            /* @__PURE__ */ j(
              "div",
              {
                className: "text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2 outline-none",
                contentEditable: !0,
                suppressContentEditableWarning: !0,
                onPointerDown: (y) => y.stopPropagation(),
                onDoubleClick: (y) => y.stopPropagation(),
                onBlur: (y) => {
                  const S = (y.currentTarget.textContent || "").replace(/^\[\s*|\s*\]$/g, "").trim().toUpperCase() || "ENTITY";
                  d(($) => $.map((v) => v.id === r.id ? { ...v, category: S } : v)), m();
                },
                onKeyDown: (y) => {
                  y.key === "Enter" && (y.preventDefault(), y.currentTarget.blur());
                },
                children: [
                  "[ ",
                  r.category || "ENTITY",
                  " ]"
                ]
              }
            ),
            i ? h("flex-1 font-medium", { color: r.textColor ?? O.white, fontSize: tt(r), fontFamily: et(r), textAlign: ot(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text flex-1 font-medium break-words overflow-hidden", style: { color: r.textColor ?? O.white, fontSize: tt(r), fontFamily: et(r), textAlign: ot(r) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view"),
            /* @__PURE__ */ j("div", { className: "text-[11px] text-slate-300 border-t border-white/10 pt-2 mt-1", children: [
              "• Type: ",
              r.category || "Entity"
            ] })
          ]
        }
      );
    }
    if (r.type === "text") {
      const w = e ? "text-slate-100" : "text-slate-900", y = {
        className: `canvas-rich-text w-full h-full font-medium whitespace-pre-wrap break-words ${w}`,
        style: { color: r.textColor, fontSize: tt(r), fontFamily: et(r), textAlign: ot(r) }
      };
      return i ? h(`font-medium ${w}`, y.style) : x ? /* @__PURE__ */ N(
        "div",
        {
          "data-canvas-text-view": !0,
          ...y,
          dangerouslySetInnerHTML: { __html: x }
        },
        "canvas-view"
      ) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, ...y, children: /* @__PURE__ */ N("span", { className: "opacity-40", children: "텍스트 입력..." }) }, "canvas-view");
    }
    if (r.type === "image") {
      const w = Qt(r.src);
      return w ? /* @__PURE__ */ N(
        "img",
        {
          src: w,
          alt: r.fileName || "캔버스 이미지",
          className: "w-full h-full object-contain pointer-events-none rounded-lg",
          draggable: !1
        }
      ) : null;
    }
    const s = qt(r), f = hn(r), k = gt(r);
    if (r.type === "triangle" || r.type === "diamond" || r.type === "hexagon" || r.type === "star")
      return /* @__PURE__ */ j("div", { className: "relative w-full h-full", children: [
        /* @__PURE__ */ N("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", viewBox: `0 0 ${r.w} ${r.h}`, preserveAspectRatio: "none", children: /* @__PURE__ */ N("polygon", { points: vn(r.type, r.w, r.h), fill: s, stroke: f, strokeWidth: 2, strokeLinejoin: "round" }) }),
        /* @__PURE__ */ N("div", { className: "absolute inset-0 flex items-center justify-center p-3", style: { color: k }, children: i ? h("font-medium", { color: k, fontSize: tt(r), fontFamily: et(r), textAlign: ot(r) }) : /* @__PURE__ */ N("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: tt(r), fontFamily: et(r), textAlign: ot(r) }, dangerouslySetInnerHTML: { __html: x } }, "canvas-view") })
      ] });
    const p = Qt(r.src);
    return /* @__PURE__ */ N(
      "div",
      {
        className: `w-full h-full flex items-center justify-center p-3 ${r.type === "ellipse" ? "rounded-full" : "rounded-xl"}`,
        style: { background: s, border: `2px solid ${f}`, color: k },
        children: i ? h("font-medium", { color: k, fontSize: tt(r), fontFamily: et(r), textAlign: ot(r) }) : /* @__PURE__ */ j("div", { "data-canvas-text-view": !0, className: "canvas-rich-text font-medium whitespace-pre-wrap break-words overflow-hidden", style: { fontSize: tt(r), fontFamily: et(r), textAlign: ot(r) }, children: [
          /* @__PURE__ */ N("div", { dangerouslySetInnerHTML: { __html: x } }),
          p && /* @__PURE__ */ N(
            "a",
            {
              href: p,
              target: "_blank",
              rel: "noreferrer",
              onPointerDown: (w) => w.stopPropagation(),
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
  const [m, b] = J({ width: 0, height: 0 });
  dt(() => {
    const x = t.current;
    if (!x) return;
    let s = -1, f = -1;
    const k = (p = x.clientWidth, w = x.clientHeight) => {
      p === s && w === f || (s = p, f = w, b({ width: p, height: w }));
    };
    if (k(), typeof ResizeObserver < "u") {
      const p = new ResizeObserver((w) => {
        var M;
        const y = (M = w[0]) == null ? void 0 : M.contentRect;
        k((y == null ? void 0 : y.width) ?? x.clientWidth, (y == null ? void 0 : y.height) ?? x.clientHeight);
      });
      return p.observe(x), () => p.disconnect();
    }
    const g = () => k();
    return window.addEventListener("resize", g), () => window.removeEventListener("resize", g);
  }, [d, t]);
  const h = yt(() => new Map(e.map((x) => [x.id, x])), [e]), c = yt(
    () => [...e].sort((x, s) => (x.type === "frame" ? -1 : 0) - (s.type === "frame" ? -1 : 0)),
    [e]
  ), r = yt(() => {
    if (!t.current || m.width <= 0 || m.height <= 0) return null;
    const x = 200 / o.z;
    return {
      minX: o.x - x,
      minY: o.y - x,
      maxX: o.x + m.width / o.z + x,
      maxY: o.y + m.height / o.z + x
    };
  }, [o, t, m]), l = Q((x) => {
    if (!r) return !1;
    if (x.id === u || a.has(x.id)) return !0;
    if (x.type === "arrow") {
      const f = $t(x, h, n.current), g = (f.routing === "orthogonal" ? f.pathPoints : null) ?? [f.start, f.end], p = Math.min(...g.map((S) => S.x)), w = Math.max(...g.map((S) => S.x)), y = Math.min(...g.map((S) => S.y)), M = Math.max(...g.map((S) => S.y));
      return w >= r.minX && p <= r.maxX && M >= r.minY && y <= r.maxY;
    }
    const s = q(x);
    return s.maxX >= r.minX && s.minX <= r.maxX && s.maxY >= r.minY && s.minY <= r.maxY;
  }, [u, a, h, n, r]), i = yt(
    () => c.filter(l),
    [l, c]
  );
  return { shapeById: h, visiblePaintOrder: i };
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
    const s = i.scrollHeight;
    e((f) => f.map((k) => {
      if (k.id !== n) return k;
      const g = { ...k, html: x, text: void 0 };
      if (k.type === "text")
        return k.manualSize ? g : { ...g, ...Nn(i, k) };
      if (k.type === "arrow") return g;
      const p = k.type === "note" ? 32 : k.type === "card" ? 96 : (
        // category header + type footer
        (k.type === "frame", 24)
      ), w = Math.max(k.h, s + p);
      return { ...g, h: w };
    })), a();
  }, [n, a]), m = (i) => {
    var x;
    (x = t.current) == null || x.focus(), document.execCommand("styleWithCSS", !1, "false"), document.execCommand(i), d();
  }, b = () => {
    var f;
    const i = (f = window.getSelection()) == null ? void 0 : f.anchorNode, x = i instanceof Element ? i : i == null ? void 0 : i.parentElement, s = x == null ? void 0 : x.closest("ul, ol");
    return s instanceof HTMLElement ? s : null;
  }, h = (i, x, s) => {
    const f = document.createElement(x);
    for (; i.firstChild; ) f.append(i.firstChild);
    return i.replaceWith(f), f;
  }, c = (i) => {
    const x = t.current;
    if (!x) return;
    x.focus();
    const s = b();
    if (i === "number")
      if ((s == null ? void 0 : s.tagName) === "OL")
        s.removeAttribute("data-list-style");
      else if ((s == null ? void 0 : s.tagName) === "UL")
        h(s, "ol");
      else {
        document.execCommand("insertOrderedList");
        const f = b();
        f == null || f.removeAttribute("data-list-style");
      }
    else if ((s == null ? void 0 : s.tagName) === "UL") {
      const f = s.dataset.listStyle;
      i === f ? document.execCommand("insertUnorderedList") : s.dataset.listStyle = i;
    } else {
      (s == null ? void 0 : s.tagName) === "OL" && document.execCommand("insertOrderedList"), document.execCommand("insertUnorderedList");
      const f = b();
      f && (f.dataset.listStyle = i);
    }
    d();
  };
  return { commitEditorHtml: d, applyFormat: m, applyList: c, onEditorKeyDown: (i) => {
    if (i.key === "Tab") {
      i.preventDefault(), document.execCommand(i.shiftKey ? "outdent" : "indent"), d();
      return;
    }
    if (i.key === " ") {
      const x = window.getSelection();
      if (x && x.isCollapsed && x.anchorNode) {
        const s = x.anchorNode, f = s.textContent || "", k = x.anchorOffset, g = f.slice(0, k).trim();
        if (!b()) {
          if (g === "-" || g === "–") {
            i.preventDefault(), s.textContent = f.slice(k), c("dash");
            return;
          }
          if (g === "*") {
            i.preventDefault(), s.textContent = f.slice(k), c("bullet");
            return;
          }
          if (g === "1.") {
            i.preventDefault(), s.textContent = f.slice(k), c("number");
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
function On({
  boardIdentity: t,
  tool: n,
  controlledShapes: e,
  onShapesChange: o,
  onDirty: a
}) {
  const u = V(null), d = V(null), [m, b] = J([]), h = e !== void 0 && o !== void 0, c = V(/* @__PURE__ */ new WeakMap()), r = yt(() => {
    const A = c.current;
    return (h ? e ?? [] : m).map((H) => {
      let _ = A.get(H);
      return _ === void 0 && (_ = Jt(H), A.set(H, _)), _;
    }).filter((H) => H !== null);
  }, [h, e, m]), l = V(o);
  l.current = o;
  const i = Q((A) => {
    const H = l.current;
    if (!H) {
      b(A);
      return;
    }
    H(typeof A == "function" ? A : () => A);
  }, []), [x, s] = J({ x: -400, y: -300, z: 1 }), [f, k] = J(/* @__PURE__ */ new Set()), [g, p] = J(null), [w, y] = J({ kind: "none" }), [M, S] = J(!1), [$, v] = J([]), [X, Y] = J(""), [I, E] = J(!1), [F, C] = J(null), [P, T] = J("blue"), [W, K] = J(Ft), z = V(P);
  z.current = P;
  const L = V([]), B = V([]), D = V(null), R = V(/* @__PURE__ */ new Map()), U = V(r), ut = V(x), xt = V(n), it = V(f), Z = V(g);
  U.current = r, ut.current = x, xt.current = n, it.current = f, Z.current = g;
  const lt = V({ kind: "none" }), nt = Q((A) => {
    lt.current = A, y(A);
  }, []), ct = Q((A) => {
    it.current = A, k(A);
  }, []);
  Rt(() => {
    var H;
    const A = /* @__PURE__ */ new Set();
    it.current = A, Z.current = null, R.current.clear(), L.current = [], B.current = [], D.current = null, nt({ kind: "none" }), k(A), p(null), S(!1), v([]), C(null), Y(""), (H = u.current) == null || H.focus();
  }, [nt, t]), dt(() => {
    let A = !1;
    const H = () => {
      const G = zn();
      A || K(G);
    };
    if (H(), typeof document > "u" || !("fonts" in document)) return;
    const _ = () => H();
    return document.fonts.addEventListener("loadingdone", _), () => {
      A = !0, document.fonts.removeEventListener("loadingdone", _);
    };
  }, [t]);
  const Yt = (g ? r.find((A) => A.id === g) : void 0) !== void 0;
  Rt(() => {
    if (!g || !Yt) return;
    const A = () => {
      const _ = d.current, G = U.current.find((jt) => jt.id === g);
      if (!_ || !G || (_.dataset.seeded !== g && (_.innerHTML = Tt(G), _.dataset.seeded = g), document.activeElement === _)) return;
      _.focus();
      const ft = document.createRange();
      ft.selectNodeContents(_), ft.collapse(!1);
      const ht = window.getSelection();
      ht == null || ht.removeAllRanges(), ht == null || ht.addRange(ft);
    };
    A();
    const H = requestAnimationFrame(A);
    return () => cancelAnimationFrame(H);
  }, [g, Yt]);
  const zt = Q((A) => {
    i((H) => {
      const _ = typeof A == "function" ? A(H) : A;
      return L.current.push(H), L.current.length > 100 && L.current.shift(), B.current = [], _;
    }), a();
  }, [a]), Dt = Q((A) => A.size === 0 ? !1 : (zt((H) => H.filter((_) => A.has(_.id) ? !1 : _.type !== "arrow" ? !0 : !(_.fromId && A.has(_.fromId)) && !(_.toId && A.has(_.toId)))), ct(/* @__PURE__ */ new Set()), Y(`${A.size}개 삭제됨`), !0), [zt, ct]), _t = Q(() => {
    D.current = U.current;
  }, []), Bt = Q(() => {
    const A = D.current;
    D.current = null, !(!A || A === U.current) && (L.current.push(A), L.current.length > 100 && L.current.shift(), B.current = [], a());
  }, [a]), kt = Q((A, H) => {
    var ft;
    const _ = (ft = u.current) == null ? void 0 : ft.getBoundingClientRect(), G = ut.current;
    return _ ? { x: (A - _.left) / G.z + G.x, y: (H - _.top) / G.z + G.y } : { x: 0, y: 0 };
  }, []), St = Q(() => {
    var _;
    const A = (_ = u.current) == null ? void 0 : _.getBoundingClientRect(), H = ut.current;
    return A ? { x: H.x + A.width / 2 / H.z, y: H.y + A.height / 2 / H.z } : { x: 0, y: 0 };
  }, []), Ht = Q((A) => {
    const H = new Set(U.current.filter((G) => A.has(G.id) && G.groupId).map((G) => G.groupId));
    if (H.size === 0) return A;
    const _ = new Set(A);
    for (const G of U.current) G.groupId && H.has(G.groupId) && _.add(G.id);
    return _;
  }, []);
  return {
    containerRef: u,
    editorRef: d,
    localShapes: m,
    setLocalShapes: b,
    controlled: h,
    shapes: r,
    setShapes: i,
    camera: x,
    setCamera: s,
    cameraRef: ut,
    selected: f,
    setSelected: k,
    selectedRef: it,
    editingId: g,
    setEditingId: p,
    editingIdRef: Z,
    interaction: w,
    interactionRef: lt,
    applyInteraction: nt,
    isSpaceDown: M,
    setIsSpaceDown: S,
    guides: $,
    setGuides: v,
    announcement: X,
    setAnnouncement: Y,
    showInspectorPalette: I,
    setShowInspectorPalette: E,
    eraserPos: F,
    setEraserPos: C,
    activeColor: P,
    setActiveColor: T,
    activeColorRef: z,
    installedFontFamilies: W,
    pointers: R,
    past: L,
    future: B,
    selectNow: ct,
    commit: zt,
    deleteSelection: Dt,
    beginHistory: _t,
    endHistory: Bt,
    toPage: kt,
    viewportCentre: St,
    expandToGroups: Ht,
    toolRef: xt,
    shapesRef: U
  };
}
function Dn({
  containerRef: t,
  camera: n,
  setCamera: e,
  minZoom: o,
  maxZoom: a,
  shapes: u,
  selected: d,
  editingId: m,
  textualTypes: b,
  onZoomChange: h,
  onSelectionChange: c,
  onLocalCursor: r,
  toPage: l
}) {
  dt(() => {
    h == null || h(n.z);
  }, [n.z, h]), dt(() => {
    const g = t.current;
    if (!g) return;
    const p = (w) => {
      if (w.preventDefault(), w.ctrlKey || w.metaKey) {
        const y = g.getBoundingClientRect();
        e((M) => {
          const S = Math.min(a, Math.max(o, M.z * Math.exp(-w.deltaY * 0.01))), $ = w.clientX - y.left, v = w.clientY - y.top;
          return { x: M.x + $ / M.z - $ / S, y: M.y + v / M.z - v / S, z: S };
        });
      } else
        e((y) => ({ ...y, x: y.x + w.deltaX / y.z, y: y.y + w.deltaY / y.z }));
    };
    return g.addEventListener("wheel", p, { passive: !1 }), () => g.removeEventListener("wheel", p);
  }, [t, a, o, e]);
  const i = yt(() => {
    const g = u.filter((p) => d.has(p.id));
    return {
      count: g.length,
      canGroup: g.length > 1,
      canUngroup: g.some((p) => !!p.groupId),
      isTextual: g.length === 1 && b.includes(g[0].type)
    };
  }, [d, u, b]);
  dt(() => {
    c == null || c(i);
  }, [c, i]);
  const x = yt(() => {
    if (m) return u.find((p) => p.id === m) ?? null;
    if (d.size !== 1) return null;
    const g = u.find((p) => d.has(p.id));
    return g && g.type !== "image" ? g : null;
  }, [m, d, u]), s = V(0);
  return { selectionInfo: i, inspectorShape: x, onContainerPointerMove: r ? (g) => {
    const p = performance.now();
    p - s.current < 60 || (s.current = p, r(l(g.clientX, g.clientY)));
  } : void 0, onContainerPointerLeave: r ? () => r(null) : void 0 };
}
function _n(t, n) {
  if (t.length === 0) return null;
  let e = 1 / 0, o = 1 / 0, a = -1 / 0, u = -1 / 0;
  for (const r of t) {
    const l = q(r);
    e = Math.min(e, l.minX), o = Math.min(o, l.minY), a = Math.max(a, l.maxX), u = Math.max(u, l.maxY);
  }
  const d = 40, m = a - e + d * 2, b = u - o + d * 2;
  if (!Number.isFinite(m) || !Number.isFinite(b) || m > wt.maxExportDimension || b > wt.maxExportDimension || m * b > wt.maxExportPixels) return null;
  const h = (r, l, i, x, s) => {
    const f = r.fontSize ?? i, k = et(r), g = ye(Tt(r));
    if (g.length === 0) return "";
    const p = mt(r), w = r.textAlign === "right" ? "end" : r.textAlign === "center" ? "middle" : r.textAlign === "left" ? "start" : s, y = w === "end" ? p.maxX - 12 : w === "middle" ? (p.minX + p.maxX) / 2 : p.minX + 12, M = p.minY + f + 12;
    return g.map((S, $) => {
      const v = S.map((X) => `<tspan style="${[
        X.bold ? "font-weight:700" : `font-weight:${x}`,
        X.italic ? "font-style:italic" : "",
        X.underline ? "text-decoration:underline" : ""
      ].filter(Boolean).join(";")}">${vt(X.text)}</tspan>`).join("");
      return `<text x="${y}" y="${M + $ * f * 1.4}" font-family="${vt(k)}" font-size="${f}" fill="${l}" text-anchor="${w}">${v}</text>`;
    }).join("");
  }, c = t.map((r) => {
    const l = rt[r.color ?? "blue"], i = mt(r), x = at(r), s = r.rotation ? ` transform="rotate(${r.rotation * 180 / Math.PI} ${x.x} ${x.y})"` : "", f = r.color ? rt[r.color].border : O.ink;
    if (r.type === "draw" && r.points)
      return `<path d="${pe(r.points)}" fill="none" stroke="${f}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
    if (r.type === "arrow") {
      const g = $t(r, new Map(t.map((E) => [E.id, E])), t), p = g.routing === "orthogonal" && g.pathPoints && g.pathPoints.length > 1 ? g.pathPoints[g.pathPoints.length - 2] : null, w = g.routing === "orthogonal" && p ? p : Xt(0.94, g.start, g.control, g.end), y = Math.atan2(g.end.y - w.y, g.end.x - w.x), M = 14, S = `${g.end.x - M * Math.cos(y - 0.4)},${g.end.y - M * Math.sin(y - 0.4)}`, $ = `${g.end.x - M * Math.cos(y + 0.4)},${g.end.y - M * Math.sin(y + 0.4)}`, v = g.routing === "orthogonal" && g.pathPoints ? Ut(g.pathPoints) : g.bend === 0 ? `M ${g.start.x} ${g.start.y} L ${g.end.x} ${g.end.y}` : `M ${g.start.x} ${g.start.y} Q ${g.control.x} ${g.control.y} ${g.end.x} ${g.end.y}`, X = g.routing === "orthogonal" && g.pathPoints ? he(g.pathPoints) : g.bend === 0 ? { x: (g.start.x + g.end.x) / 2, y: (g.start.y + g.end.y) / 2 } : Xt(0.5, g.start, g.control, g.end), Y = At(r), I = Y ? `<text x="${X.x}" y="${X.y - 6}" text-anchor="middle" font-family="${vt(et(r))}" font-size="${r.fontSize ?? 12}" fill="${f}">${vt(Y)}</text>` : "";
      return `<path d="${v}" fill="none" stroke="${f}" stroke-width="2.5" stroke-linecap="round"/><polygon points="${g.end.x},${g.end.y} ${S} ${$}" fill="${f}"/>` + I;
    }
    if (r.type === "image" && r.src) {
      const g = Qt(r.src);
      return g ? `<image href="${vt(g)}" x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}"${s}/>` : "";
    }
    if (r.type === "frame")
      return `<g${s}><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" fill="none" stroke="${O.slate400}" stroke-width="2" rx="4"/><text x="${i.minX}" y="${i.minY - 8}" font-family="Inter, system-ui, sans-serif" font-size="13" fill="${O.muted}">${vt(r.text ?? "프레임")}</text></g>`;
    if (r.type === "note")
      return `<g${s}><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" fill="${l.bg}"/><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="6" fill="${l.border}"/>` + h(r, l.text, 14, "600", "start") + "</g>";
    if (r.type === "card") {
      const g = r.cardStyle === "glass";
      return `<g${s}><rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" rx="16" fill="${g ? O.glassFill : O.slateCard}"/><text x="${i.minX + 16}" y="${i.minY + 24}" font-family="Inter, system-ui, sans-serif" font-size="10" fill="${O.slate400}">[ ${vt(r.category ?? "ENTITY")} ]</text>` + h(r, O.white, 16, "700", "start") + "</g>";
    }
    const k = r.type === "ellipse" ? `<ellipse cx="${(i.minX + i.maxX) / 2}" cy="${(i.minY + i.maxY) / 2}" rx="${(i.maxX - i.minX) / 2}" ry="${(i.maxY - i.minY) / 2}" fill="${l.bg}" stroke="${l.border}" stroke-width="2"/>` : `<rect x="${i.minX}" y="${i.minY}" width="${i.maxX - i.minX}" height="${i.maxY - i.minY}" rx="12" fill="${l.bg}" stroke="${l.border}" stroke-width="2"/>`;
    return `<g${s}>${k}${h(r, l.text, 14, "700", "middle")}</g>`;
  }).join(`
`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${m}" height="${b}" viewBox="${e - d} ${o - d} ${m} ${b}"><rect x="${e - d}" y="${o - d}" width="${m}" height="${b}" fill="${n ? O.canvasDark : O.canvasLight}"/>` + c + "</svg>";
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
  const m = 2, b = o * m, h = a * m;
  if (!Number.isSafeInteger(b) || !Number.isSafeInteger(h) || b > wt.maxExportDimension || h > wt.maxExportDimension || b * h > wt.maxExportPixels) return null;
  const c = document.createElement("canvas");
  c.width = b, c.height = h;
  const r = c.getContext("2d");
  return r ? (r.scale(m, m), r.drawImage(d, 0, 0), new Promise((l) => {
    try {
      c.toBlob((i) => l(i), "image/png");
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
    x: at(l).x,
    // Deterministic jitter breaks the singularity when nodes start at
    // identical positions — otherwise every unit vector is (0, 0) and no
    // force ever separates them.
    y: at(l).y,
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
  const m = 220, b = m * m, h = 80;
  let c = 400;
  const r = c / h;
  for (let l = 0; l < h; l++) {
    for (let i = 0; i < a.length; i++)
      a[i].vx = 0, a[i].vy = 0;
    for (let i = 0; i < a.length; i++)
      for (let x = i + 1; x < a.length; x++) {
        const s = a[i], f = a[x], k = s.x - f.x, g = s.y - f.y, p = Math.hypot(k, g) || 0.01, w = b / p, y = k / p * w, M = g / p * w;
        s.vx += y, s.vy += M, f.vx -= y, f.vy -= M;
      }
    for (const [i, x] of d) {
      const s = i.x - x.x, f = i.y - x.y, k = Math.hypot(s, f) || 0.01, g = k * k / m, p = s / k * g, w = f / k * g;
      i.vx -= p, i.vy -= w, x.vx += p, x.vy += w;
    }
    for (const i of a) {
      const x = Math.hypot(i.vx, i.vy) || 0.01, s = Math.min(x, c);
      i.x += i.vx / x * s, i.y += i.vy / x * s;
    }
    c = Math.max(0.5, c - r);
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
  setEditingId: m
}) {
  const b = t;
  if (!b || b.version !== "canvas-v1") return;
  let h;
  try {
    h = Ue({ version: "canvas-v1", shapes: [], camera: b.camera }).camera;
  } catch {
    return;
  }
  !n && Array.isArray(b.shapes) && b.shapes.length <= wt.maxShapes && (e.current = [], o.current = [], a(b.shapes.map(Jt).filter((c) => c !== null))), u(h), d(/* @__PURE__ */ new Set()), m(null);
}
function Kn({
  ref: t,
  containerRef: n,
  shapesRef: e,
  cameraRef: o,
  selectedRef: a,
  past: u,
  future: d,
  controlled: m,
  isDarkMode: b,
  minZoom: h,
  maxZoom: c,
  onToolChange: r,
  onDirty: l,
  commit: i,
  deleteSelection: x,
  selectNow: s,
  viewportCentre: f,
  setShapes: k,
  setLocalShapes: g,
  setCamera: p,
  setEditingId: w,
  setAnnouncement: y,
  createId: M
}) {
  const S = Q((v) => {
    const X = f(), Y = Jt({
      id: M(),
      x: v.x ?? X.x - v.w / 2,
      y: v.y ?? X.y - v.h / 2,
      ...v
    });
    if (!Y) throw new Error("Canvas could not create a valid shape.");
    return i((I) => [...I, Y]), s(/* @__PURE__ */ new Set([Y.id])), r("select"), y(`${Y.type} 추가됨`), Y;
  }, [i, M, r, s, y, f]), $ = Q(() => _n(e.current, b), [b, e]);
  Be(t, () => ({
    addNote: (v) => {
      const X = S({ type: "note", w: 180, h: 180, color: v, text: "" });
      w(X.id);
    },
    addCard: (v, X, Y, I) => {
      S({ type: "card", w: 260, h: 150, text: v, category: X, cardStyle: Y, color: I });
    },
    addText: () => {
      const v = S({ type: "text", w: 220, h: 44, text: "" });
      w(v.id);
    },
    addShape: (v, X, Y) => {
      S({
        type: v,
        w: v === "ellipse" ? 220 : 200,
        h: v === "ellipse" ? 110 : 140,
        color: X,
        text: Y ?? ""
      });
    },
    addArrow: () => {
      const v = f(), X = { id: M(), type: "arrow", x: v.x - 140, y: v.y, w: 280, h: 0 };
      i((Y) => [...Y, X]), s(/* @__PURE__ */ new Set([X.id])), r("select");
    },
    addImage: (v, X, Y, I) => {
      S({ type: "image", w: Y, h: I, src: v, fileName: X });
    },
    addFileCard: (v, X, Y) => {
      S({ type: "rect", w: 260, h: 120, color: "purple", text: Y, src: X, fileName: v });
    },
    setTool: r,
    undo: () => {
      const v = u.current.pop();
      v && (d.current.push(e.current), k(v), s(/* @__PURE__ */ new Set()), w(null), l(), y("실행 취소"));
    },
    redo: () => {
      const v = d.current.pop();
      v && (u.current.push(e.current), k(v), s(/* @__PURE__ */ new Set()), w(null), l(), y("다시 실행"));
    },
    deleteSelected: () => {
      x(a.current);
    },
    duplicateSelected: () => {
      var I;
      const v = a.current;
      if (v.size === 0) return;
      const X = [], Y = /* @__PURE__ */ new Map();
      for (const E of e.current) {
        if (!v.has(E.id)) continue;
        let F = E.groupId;
        F && (Y.has(F) || Y.set(F, M("g")), F = Y.get(F)), X.push({
          ...E,
          id: M(),
          x: E.x + 24,
          y: E.y + 24,
          groupId: F,
          points: (I = E.points) == null ? void 0 : I.map(([C, P]) => [C + 24, P + 24])
        });
      }
      i((E) => [...E, ...X]), s(new Set(X.map((E) => E.id))), y(`${X.length}개 복제됨`);
    },
    group: () => {
      var Y;
      const v = a.current;
      if (v.size < 2) return;
      const X = M("g");
      i((I) => I.map((E) => v.has(E.id) ? { ...E, groupId: X } : E)), y(`${v.size}개 그룹화됨`), (Y = n.current) == null || Y.focus();
    },
    ungroup: () => {
      var X;
      const v = a.current;
      v.size !== 0 && (i((Y) => Y.map((I) => v.has(I.id) ? { ...I, groupId: void 0 } : I)), y("그룹 해제됨"), (X = n.current) == null || X.focus());
    },
    zoomBy: (v) => {
      p((X) => {
        var C;
        const Y = (C = n.current) == null ? void 0 : C.getBoundingClientRect(), I = Math.min(c, Math.max(h, X.z * v));
        if (!Y) return { ...X, z: I };
        const E = X.x + Y.width / 2 / X.z, F = X.y + Y.height / 2 / X.z;
        return { x: E - Y.width / 2 / I, y: F - Y.height / 2 / I, z: I };
      });
    },
    zoomTo: (v) => {
      p((X) => {
        var C;
        const Y = (C = n.current) == null ? void 0 : C.getBoundingClientRect(), I = Math.min(c, Math.max(h, v));
        if (!Y) return { ...X, z: I };
        const E = X.x + Y.width / 2 / X.z, F = X.y + Y.height / 2 / X.z;
        return { x: E - Y.width / 2 / I, y: F - Y.height / 2 / I, z: I };
      });
    },
    resetZoom: () => {
      p((v) => {
        var E;
        const X = (E = n.current) == null ? void 0 : E.getBoundingClientRect();
        if (!X) return { ...v, z: 1 };
        const Y = v.x + X.width / 2 / v.z, I = v.y + X.height / 2 / v.z;
        return { x: Y - X.width / 2, y: I - X.height / 2, z: 1 };
      });
    },
    zoomToFit: () => {
      var T;
      const v = e.current, X = (T = n.current) == null ? void 0 : T.getBoundingClientRect();
      if (v.length === 0 || !X) return;
      let Y = 1 / 0, I = 1 / 0, E = -1 / 0, F = -1 / 0;
      for (const W of v) {
        const K = q(W);
        Y = Math.min(Y, K.minX), I = Math.min(I, K.minY), E = Math.max(E, K.maxX), F = Math.max(F, K.maxY);
      }
      const C = 80, P = Math.min(c, Math.max(
        h,
        Math.min(X.width / (E - Y + C * 2), X.height / (F - I + C * 2))
      ));
      p({
        x: (Y + E) / 2 - X.width / 2 / P,
        y: (I + F) / 2 - X.height / 2 / P,
        z: P
      });
    },
    autoLayout: () => Hn(e.current, i, () => y("자동 배치 완료")),
    exportSvg: $,
    exportPng: () => Bn($),
    getSnapshot: () => ({ version: "canvas-v1", shapes: e.current, camera: o.current }),
    loadSnapshot: (v) => jn(v, {
      controlled: m,
      past: u,
      future: d,
      setLocalShapes: g,
      setCamera: p,
      selectNow: s,
      setEditingId: w
    })
  }), [
    S,
    $,
    i,
    M,
    x,
    b,
    c,
    h,
    l,
    r,
    s,
    p,
    w,
    g,
    k,
    y,
    f,
    m
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
  future: m,
  textualTypes: b,
  setIsSpaceDown: h,
  setEditingId: c,
  setShapes: r,
  setAnnouncement: l,
  commit: i,
  deleteSelection: x,
  selectNow: s,
  onDirty: f,
  onToolChange: k,
  createId: g
}) {
  const p = Q((w, y) => {
    const M = o.current;
    M.size !== 0 && i((S) => S.map(($) => {
      var v;
      return M.has($.id) ? {
        ...$,
        x: $.x + w,
        y: $.y + y,
        points: (v = $.points) == null ? void 0 : v.map(([X, Y]) => [X + w, Y + y])
      } : $;
    }));
  }, [i, o]);
  dt(() => {
    const w = ($) => {
      const v = $;
      return !!v && (v.tagName === "INPUT" || v.tagName === "TEXTAREA" || v.isContentEditable);
    }, y = ($) => $ instanceof Element && !!$.closest("input, select, button, textarea, option, label, [data-canvas-control]"), M = ($) => {
      var P, T, W, K;
      const v = t.current, X = document.activeElement, Y = $.target instanceof Node && !!(v != null && v.contains($.target)), I = !!v && (X === v || v.contains(X));
      if (!Y && !I || y($.target)) return;
      if ($.code === "Space" && !w($.target)) {
        h(!0), $.preventDefault();
        return;
      }
      if (w($.target)) {
        if ($.key === "Escape")
          $.preventDefault(), c(null), (P = n.current) == null || P.blur(), (T = t.current) == null || T.focus();
        else if (($.key === "Delete" || $.key === "Backspace") && !a.current) {
          const z = o.current;
          x(z) && $.preventDefault();
        }
        return;
      }
      const E = $.metaKey || $.ctrlKey, F = o.current;
      if (E && $.key.toLowerCase() === "z") {
        if ($.preventDefault(), $.shiftKey) {
          const z = m.current.pop();
          z && (d.current.push(e.current), r(z), f());
        } else {
          const z = d.current.pop();
          z && (m.current.push(e.current), r(z), f());
        }
        s(/* @__PURE__ */ new Set());
        return;
      }
      if (E && $.key.toLowerCase() === "g") {
        if ($.preventDefault(), $.shiftKey)
          F.size > 0 && (i((z) => z.map((L) => F.has(L.id) ? { ...L, groupId: void 0 } : L)), l("그룹 해제됨"));
        else if (F.size > 1) {
          const z = g("g");
          i((L) => L.map((B) => F.has(B.id) ? { ...B, groupId: z } : B)), l(`${F.size}개 그룹화됨`);
        }
        return;
      }
      if (E && $.key.toLowerCase() === "a") {
        $.preventDefault(), s(new Set(e.current.map((z) => z.id))), l(`전체 ${e.current.length}개 선택됨`);
        return;
      }
      if ($.key === "Delete" || $.key === "Backspace") {
        x(F) && $.preventDefault();
        return;
      }
      if ($.key.startsWith("Arrow")) {
        $.preventDefault();
        const z = $.shiftKey ? 10 : 1;
        $.key === "ArrowLeft" && p(-z, 0), $.key === "ArrowRight" && p(z, 0), $.key === "ArrowUp" && p(0, -z), $.key === "ArrowDown" && p(0, z);
        return;
      }
      if ($.key === "Tab" && e.current.length > 0) {
        $.preventDefault();
        const z = e.current, L = z.findIndex((R) => F.has(R.id)), B = $.shiftKey ? L <= 0 ? z.length - 1 : L - 1 : L === -1 || L === z.length - 1 ? 0 : L + 1, D = z[B];
        s(/* @__PURE__ */ new Set([D.id])), l(`${D.type} 선택됨: ${At(D) || "내용 없음"}`);
        return;
      }
      if ($.key === "Enter" && F.size === 1) {
        const z = e.current.find((L) => F.has(L.id));
        z && b.includes(z.type) && ($.preventDefault(), c(z.id));
        return;
      }
      if ($.key === "Escape") {
        if (a.current) {
          $.preventDefault(), c(null), (W = n.current) == null || W.blur(), (K = t.current) == null || K.focus(), k("select");
          return;
        }
        s(/* @__PURE__ */ new Set()), k("select");
        return;
      }
      const C = Wn($);
      C && ($.preventDefault(), u.current = C, k(C));
    }, S = ($) => {
      const v = t.current;
      !v || !(document.activeElement === v || v.contains(document.activeElement)) || $.code === "Space" && h(!1);
    };
    return window.addEventListener("keydown", M), window.addEventListener("keyup", S), () => {
      window.removeEventListener("keydown", M), window.removeEventListener("keyup", S);
    };
  }, [
    i,
    t,
    g,
    x,
    a,
    n,
    m,
    p,
    f,
    k,
    d,
    s,
    o,
    l,
    c,
    h,
    r,
    e,
    b,
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
  camera: m,
  shapes: b,
  selected: h,
  isSpaceDown: c,
  textualTypes: r,
  setShapes: l,
  setEditingId: i,
  applyInteraction: x,
  selectNow: s,
  beginHistory: f,
  commit: k,
  onToolChange: g,
  expandToGroups: p,
  toPage: w,
  createId: y
}) {
  const M = y, S = V(null), $ = (C, P) => {
    var z;
    const T = ((z = t.current) == null ? void 0 : z.dataset.canvasActiveTool) === "text" ? "text" : u.current;
    if (T !== "note" && T !== "text") return;
    const W = w(C, P), K = T === "note" ? { id: M(), type: "note", x: W.x - 90, y: W.y - 90, w: 180, h: 180, color: "yellow", text: "" } : { id: M(), type: "text", x: W.x, y: W.y - 22, w: 220, h: 44, text: "" };
    k((L) => [...L, K]), s(/* @__PURE__ */ new Set([K.id])), i(K.id), g("select");
  };
  return dt(() => {
    const C = (P) => {
      var T;
      (T = t.current) != null && T.contains(P.target) && (P.target instanceof Element && P.target.closest('[role="textbox"], [data-canvas-inspector]') || $(P.clientX, P.clientY));
    };
    return window.addEventListener("click", C, !0), () => window.removeEventListener("click", C, !0);
  }), { onPointerDown: (C) => {
    var z, L, B;
    const P = u.current;
    if (e.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), e.current.size === 2) {
      const [D, R] = [...e.current.values()], U = o.current;
      x({
        kind: "pinch",
        startDist: Math.hypot(R.x - D.x, R.y - D.y) || 1,
        startZoom: U.z,
        startMidX: (D.x + R.x) / 2,
        startMidY: (D.y + R.y) / 2,
        camX: U.x,
        camY: U.y
      });
      return;
    }
    if (e.current.size > 2) return;
    if (C.button === 1 || c || P === "hand" || C.button === 0 && P === "select" && C.altKey) {
      x({ kind: "pan", startX: C.clientX, startY: C.clientY, camX: m.x, camY: m.y });
      return;
    }
    if (C.button !== 0) return;
    const T = w(C.clientX, C.clientY);
    if (i(null), (z = n.current) == null || z.blur(), (L = t.current) == null || L.focus(), P === "draw") {
      const D = { id: M(), type: "draw", x: T.x, y: T.y, w: 0, h: 0, points: [[T.x, T.y]], color: d.current };
      f(), l((R) => [...R, D]), x({ kind: "drawing", id: D.id });
      return;
    }
    if (P === "arrow" || P === "frame" || Ge.includes(P)) {
      const D = P, R = P === "arrow" ? { id: M(), type: "arrow", x: T.x, y: T.y, w: 0, h: 0, color: d.current } : P === "frame" ? { id: M(), type: "frame", x: T.x, y: T.y, w: 0, h: 0, text: "프레임" } : { id: M(), type: D, x: T.x, y: T.y, w: 0, h: 0, color: d.current, text: "" };
      f(), l((U) => [...U, R]), x({ kind: "creating", id: R.id, startX: T.x, startY: T.y });
      return;
    }
    if (P === "note" || P === "text") return;
    if (P === "eraser") {
      f(), l((D) => we(D, T.x, T.y, 14 / m.z, m.z)), x({ kind: "erasing" });
      return;
    }
    const W = new Map(b.map((D) => [D.id, D])), K = [...b].reverse().find((D) => Pt(D, T.x, T.y, m.z, W, b));
    if (!K)
      S.current = null;
    else {
      const D = Date.now(), R = !C.shiftKey && r.includes(K.type) && ((B = S.current) == null ? void 0 : B.id) === K.id && D - S.current.time < Un, U = R ? K.id : void 0;
      S.current = R ? null : { id: K.id, time: D };
      const ut = C.shiftKey ? new Set(h).add(K.id) : h.has(K.id) ? h : /* @__PURE__ */ new Set([K.id]), xt = p(ut);
      s(xt);
      const it = /* @__PURE__ */ new Map();
      for (const Z of b) xt.has(Z.id) && it.set(Z.id, Z);
      for (const Z of b) {
        if (Z.type !== "frame" || !xt.has(Z.id)) continue;
        const lt = q(Z);
        for (const nt of b) {
          if (nt.id === Z.id || it.has(nt.id)) continue;
          const ct = at(nt);
          ct.x >= lt.minX && ct.x <= lt.maxX && ct.y >= lt.minY && ct.y <= lt.maxY && it.set(nt.id, nt);
        }
      }
      f(), x({ kind: "move", startX: T.x, startY: T.y, origin: it, editOnReleaseId: U });
      return;
    }
    C.shiftKey || s(/* @__PURE__ */ new Set()), x({
      kind: "marquee",
      startX: T.x,
      startY: T.y,
      curX: T.x,
      curY: T.y,
      screenStartX: C.clientX,
      screenStartY: C.clientY
    });
  }, onResizeHandleDown: (C, P, T) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), f(), x({ kind: "resize", id: P.id, handle: T, start: P });
  }, onRotateHandleDown: (C, P) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY });
    const T = w(C.clientX, C.clientY), W = at(P);
    f(), x({
      kind: "rotate",
      id: P.id,
      startAngle: Math.atan2(T.y - W.y, T.x - W.x),
      startRotation: P.rotation ?? 0
    });
  }, onConnectHandleDown: (C, P) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY });
    const T = w(C.clientX, C.clientY);
    x({ kind: "connect", fromId: P.id, toX: T.x, toY: T.y, hoverId: null });
  }, onBendHandleDown: (C, P) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), f(), x({ kind: "bend", id: P.id });
  }, onArrowEndpointDown: (C, P, T) => {
    C.stopPropagation(), e.current.set(C.pointerId, { x: C.clientX, y: C.clientY }), f(), x({ kind: "arrow-endpoint", id: P.id, endpoint: T, hoverId: null });
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
  setEraserPos: m,
  setGuides: b,
  setAnnouncement: h,
  applyInteraction: c,
  selectNow: r,
  endHistory: l,
  commit: i,
  onToolChange: x,
  createId: s
}) {
  const f = s;
  dt(() => {
    const k = (g) => {
      t.current.delete(g.pointerId);
      const p = n.current;
      if (p.kind !== "none") {
        if (p.kind === "pinch") {
          t.current.size < 2 && c({ kind: "none" });
          return;
        }
        if (b([]), p.kind === "erasing") {
          m(null), l(), c({ kind: "none" });
          return;
        }
        if (p.kind === "connect") {
          const y = a.current.find((Y) => Y.id === p.fromId);
          if (c({ kind: "none" }), !y) return;
          const M = { x: p.toX, y: p.toY }, S = at(y);
          if (!p.hoverId && Math.hypot(M.x - S.x, M.y - S.y) < 30) return;
          const $ = [];
          let v = p.hoverId;
          if (!v) {
            const Y = y.type === "note" ? 180 : 200, I = y.type === "note" ? 180 : 120, E = {
              ...y,
              id: f(),
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
            $.push(E), v = E.id;
          }
          const X = {
            id: f(),
            type: "arrow",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            fromId: y.id,
            toId: v,
            text: ""
          };
          $.push(X), i((Y) => [...Y, ...$]), r(/* @__PURE__ */ new Set([X.id])), typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => d(X.id)) : d(X.id), h("연결 생성됨");
          return;
        }
        if (p.kind === "bend") {
          l(), c({ kind: "none" });
          return;
        }
        if (p.kind === "drawing") {
          u((w) => w.map((y) => {
            if (y.id !== p.id || !y.points) return y;
            const M = y.points.map((X) => X[0]), S = y.points.map((X) => X[1]), $ = Math.min(...M), v = Math.min(...S);
            return { ...y, x: $, y: v, w: Math.max(...M) - $, h: Math.max(...S) - v };
          })), l(), c({ kind: "none" });
          return;
        }
        if (p.kind === "creating") {
          u((w) => w.map((y) => {
            if (y.id !== p.id) return y;
            const M = Math.abs(y.w) < 4 && Math.abs(y.h) < 4 ? {
              ...y,
              w: y.type === "arrow" ? 200 : y.type === "frame" ? 480 : 180,
              h: y.type === "arrow" ? 0 : y.type === "frame" ? 320 : 120
            } : y;
            if (M.type === "arrow") return M;
            const S = mt(M);
            return { ...M, x: S.minX, y: S.minY, w: S.maxX - S.minX, h: S.maxY - S.minY };
          })), l(), r(/* @__PURE__ */ new Set([p.id])), x("select"), c({ kind: "none" });
          return;
        }
        if ((p.kind === "move" || p.kind === "resize" || p.kind === "rotate" || p.kind === "arrow-endpoint") && l(), p.kind === "move" && p.editOnReleaseId && g.type === "pointerup") {
          const w = o(g.clientX, g.clientY);
          Math.hypot(w.x - p.startX, w.y - p.startY) * e.current.z <= Zn && d(p.editOnReleaseId);
        }
        c({ kind: "none" });
      }
    };
    return window.addEventListener("pointerup", k), window.addEventListener("pointercancel", k), () => {
      window.removeEventListener("pointerup", k), window.removeEventListener("pointercancel", k);
    };
  }, [c, e, s, l, n, x, t, r, h, d, u, a, o]);
}
function to({
  containerRef: t,
  pointers: n,
  interactionRef: e,
  cameraRef: o,
  shapesRef: a,
  setCamera: u,
  setShapes: d,
  setEraserPos: m,
  setGuides: b,
  applyInteraction: h,
  selectNow: c,
  expandToGroups: r,
  toPage: l
}) {
  dt(() => {
    const i = (x) => {
      var g, p;
      n.current.has(x.pointerId) && n.current.set(x.pointerId, { x: x.clientX, y: x.clientY });
      const s = e.current;
      if (s.kind === "none") return;
      const f = o.current;
      if (s.kind === "pinch") {
        if (n.current.size < 2) return;
        const [w, y] = [...n.current.values()], M = Math.hypot(y.x - w.x, y.y - w.y) || 1, S = (w.x + y.x) / 2, $ = (w.y + y.y) / 2, v = (g = t.current) == null ? void 0 : g.getBoundingClientRect();
        if (!v) return;
        const X = Math.min(qn, Math.max(Vn, s.startZoom * (M / s.startDist))), Y = s.camX + (s.startMidX - v.left) / s.startZoom, I = s.camY + (s.startMidY - v.top) / s.startZoom;
        u({ x: Y - (S - v.left) / X, y: I - ($ - v.top) / X, z: X });
        return;
      }
      if (s.kind === "pan") {
        u({
          x: s.camX - (x.clientX - s.startX) / f.z,
          y: s.camY - (x.clientY - s.startY) / f.z,
          z: f.z
        });
        return;
      }
      const k = l(x.clientX, x.clientY);
      if (s.kind === "erasing") {
        d((w) => we(w, k.x, k.y, Qn / f.z, f.z)), m({ x: k.x, y: k.y });
        return;
      }
      if (s.kind === "connect") {
        const w = a.current, y = new Map(w.map((S) => [S.id, S])), M = [...w].reverse().find((S) => S.id !== s.fromId && le.includes(S.type) && Pt(S, k.x, k.y, f.z, y, w));
        h({ ...s, toX: k.x, toY: k.y, hoverId: (M == null ? void 0 : M.id) ?? null });
        return;
      }
      if (s.kind === "bend") {
        const w = a.current, y = w.find((E) => E.id === s.id);
        if (!y) return;
        const M = $t(y, new Map(w.map((E) => [E.id, E])), w), S = M.end.x - M.start.x, $ = M.end.y - M.start.y, v = Math.hypot(S, $) || 1, X = (M.start.x + M.end.x) / 2, Y = (M.start.y + M.end.y) / 2, I = (k.x - X) * (-$ / v) + (k.y - Y) * (S / v);
        d((E) => E.map((F) => F.id === s.id ? { ...F, bend: I } : F));
        return;
      }
      if (s.kind === "arrow-endpoint") {
        const w = a.current, y = w.find((Y) => Y.id === s.id);
        if (!y) return;
        const M = new Map(w.map((Y) => [Y.id, Y])), S = $t(y, M, w), $ = s.endpoint === "start" ? S.end : S.start, v = [...w].reverse().find((Y) => Y.id !== y.id && le.includes(Y.type) && Pt(Y, k.x, k.y, f.z, M, w)), X = v ? bt(v, $.x, $.y) : { x: k.x, y: k.y };
        h({ ...s, hoverId: (v == null ? void 0 : v.id) ?? null }), d((Y) => Y.map((I) => {
          if (I.id !== y.id) return I;
          const E = s.endpoint === "start" ? X : $, F = s.endpoint === "end" ? X : $;
          return {
            ...I,
            x: E.x,
            y: E.y,
            w: F.x - E.x,
            h: F.y - E.y,
            fromId: s.endpoint === "start" ? v == null ? void 0 : v.id : I.fromId,
            toId: s.endpoint === "end" ? v == null ? void 0 : v.id : I.toId
          };
        }));
        return;
      }
      if (s.kind === "marquee") {
        h({ ...s, curX: k.x, curY: k.y });
        const w = Math.min(s.startX, k.x), y = Math.max(s.startX, k.x), M = Math.min(s.startY, k.y), S = Math.max(s.startY, k.y), $ = Math.min(s.screenStartX, x.clientX), v = Math.max(s.screenStartX, x.clientX), X = Math.min(s.screenStartY, x.clientY), Y = Math.max(s.screenStartY, x.clientY), I = /* @__PURE__ */ new Map();
        (p = t.current) == null || p.querySelectorAll("[data-canvas-shape-id]").forEach((F) => {
          const C = F.dataset.canvasShapeId;
          C && I.set(C, F.getBoundingClientRect());
        });
        const E = a.current.filter((F) => {
          const C = I.get(F.id);
          if (C)
            return C.right >= $ && C.left <= v && C.bottom >= X && C.top <= Y;
          const P = q(F);
          return P.maxX >= w && P.minX <= y && P.maxY >= M && P.minY <= S;
        }).map((F) => F.id);
        c(r(new Set(E)));
        return;
      }
      if (s.kind === "move") {
        let w = k.x - s.startX, y = k.y - s.startY;
        const M = s.origin, S = (() => {
          let X = 1 / 0, Y = 1 / 0, I = -1 / 0, E = -1 / 0;
          return M.forEach((F) => {
            const C = q({ ...F, x: F.x + w, y: F.y + y });
            X = Math.min(X, C.minX), Y = Math.min(Y, C.minY), I = Math.max(I, C.maxX), E = Math.max(E, C.maxY);
          }), { minX: X, minY: Y, maxX: I, maxY: E };
        })(), $ = a.current.filter((X) => !M.has(X.id)), v = mn(S, $, f.z);
        w += v.dx, y += v.dy, b(v.guides), d((X) => X.map((Y) => {
          var E;
          const I = M.get(Y.id);
          return I ? {
            ...Y,
            x: I.x + w,
            y: I.y + y,
            points: (E = I.points) == null ? void 0 : E.map(([F, C]) => [F + w, C + y])
          } : Y;
        }));
        return;
      }
      if (s.kind === "drawing") {
        d((w) => w.map((y) => {
          if (y.id !== s.id || !y.points) return y;
          const M = y.points[y.points.length - 1];
          return Math.hypot(k.x - M[0], k.y - M[1]) < 2 / f.z ? y : { ...y, points: [...y.points, [k.x, k.y]] };
        }));
        return;
      }
      if (s.kind === "creating") {
        d((w) => w.map((y) => y.id === s.id ? { ...y, w: k.x - s.startX, h: k.y - s.startY } : y));
        return;
      }
      if (s.kind === "rotate") {
        const w = a.current.find(($) => $.id === s.id);
        if (!w) return;
        const y = at(w), M = Math.atan2(k.y - y.y, k.x - y.x);
        let S = s.startRotation + (M - s.startAngle);
        x.shiftKey && (S = Math.round(S / (Math.PI / 12)) * (Math.PI / 12)), d(($) => $.map((v) => v.id === s.id ? { ...v, rotation: S } : v));
        return;
      }
      if (s.kind === "resize") {
        const { start: w, handle: y } = s, M = ge(w, k.x, k.y);
        d((S) => S.map(($) => {
          if ($.id !== w.id) return $;
          let { x: v, y: X, w: Y, h: I } = w;
          if (y.includes("e") && (Y = Math.max(20, M.x - w.x)), y.includes("s") && (I = Math.max(20, M.y - w.y)), y.includes("w")) {
            const E = w.x + w.w;
            v = Math.min(M.x, E - 20), Y = E - v;
          }
          if (y.includes("n")) {
            const E = w.y + w.h;
            X = Math.min(M.y, E - 20), I = E - X;
          }
          return { ...$, x: v, y: X, w: Y, h: I, manualSize: $.type === "text" ? !0 : $.manualSize };
        }));
      }
    };
    return window.addEventListener("pointermove", i), () => window.removeEventListener("pointermove", i);
  }, [h, t, r, e, n, c, a, l]);
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
  activeColorRef: m,
  camera: b,
  shapes: h,
  selected: c,
  isSpaceDown: r,
  textualTypes: l,
  setCamera: i,
  setShapes: x,
  setEditingId: s,
  setEraserPos: f,
  setGuides: k,
  setAnnouncement: g,
  applyInteraction: p,
  selectNow: w,
  beginHistory: y,
  endHistory: M,
  commit: S,
  onToolChange: $,
  expandToGroups: v,
  toPage: X,
  createId: Y
}) {
  const I = Gn({
    containerRef: t,
    editorRef: n,
    pointers: e,
    cameraRef: a,
    shapesRef: u,
    toolRef: d,
    activeColorRef: m,
    camera: b,
    shapes: h,
    selected: c,
    isSpaceDown: r,
    textualTypes: l,
    setShapes: x,
    setEditingId: s,
    applyInteraction: p,
    selectNow: w,
    beginHistory: y,
    commit: S,
    onToolChange: $,
    expandToGroups: v,
    toPage: X,
    createId: Y
  });
  return eo({
    containerRef: t,
    pointers: e,
    interactionRef: o,
    cameraRef: a,
    shapesRef: u,
    setCamera: i,
    setShapes: x,
    setEditingId: s,
    setEraserPos: f,
    setGuides: k,
    setAnnouncement: g,
    applyInteraction: p,
    selectNow: w,
    endHistory: M,
    commit: S,
    onToolChange: $,
    expandToGroups: v,
    toPage: X,
    createId: Y
  }), I;
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
  const u = e || o.kind === "pan" ? "grabbing" : n === "hand" ? "grab" : n === "draw" ? "crosshair" : n === "eraser" ? "cell" : n === "select" ? "default" : "crosshair", d = t ? O.gridDark : O.gridLight, m = 40 * a;
  return { cursor: u, gridColor: d, gridSize: m, strokeColorOf: (h) => h.color ? rt[h.color].border : t ? "var(--canvas-slate-200)" : O.ink };
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
  onSelectionChange: m,
  shapes: b,
  onShapesChange: h,
  peerCursors: c,
  onLocalCursor: r
}, l) {
  var ie, ae;
  const {
    containerRef: i,
    editorRef: x,
    setLocalShapes: s,
    controlled: f,
    shapes: k,
    setShapes: g,
    camera: p,
    setCamera: w,
    cameraRef: y,
    selected: M,
    selectedRef: S,
    editingId: $,
    setEditingId: v,
    editingIdRef: X,
    interaction: Y,
    interactionRef: I,
    applyInteraction: E,
    isSpaceDown: F,
    setIsSpaceDown: C,
    guides: P,
    setGuides: T,
    announcement: W,
    setAnnouncement: K,
    showInspectorPalette: z,
    setShowInspectorPalette: L,
    eraserPos: B,
    setEraserPos: D,
    setActiveColor: R,
    activeColorRef: U,
    installedFontFamilies: ut,
    pointers: xt,
    past: it,
    future: Z,
    selectNow: lt,
    commit: nt,
    deleteSelection: ct,
    beginHistory: te,
    endHistory: Yt,
    toPage: zt,
    viewportCentre: Dt,
    expandToGroups: _t,
    toolRef: Bt,
    shapesRef: kt
  } = On({ boardIdentity: n, tool: o, controlledShapes: b, onShapesChange: h, onDirty: u }), {
    inspectorShape: St,
    onContainerPointerMove: Ht,
    onContainerPointerLeave: A
  } = Dn({
    containerRef: i,
    camera: p,
    setCamera: w,
    minZoom: de,
    maxZoom: ue,
    shapes: k,
    selected: M,
    editingId: $,
    textualTypes: xe,
    onZoomChange: d,
    onSelectionChange: m,
    onLocalCursor: r,
    toPage: zt
  }), {
    onPointerDown: H,
    onResizeHandleDown: _,
    onRotateHandleDown: G,
    onConnectHandleDown: ft,
    onBendHandleDown: ht,
    onArrowEndpointDown: jt
  } = oo({
    ref: l,
    containerRef: i,
    editorRef: x,
    pointers: xt,
    interactionRef: I,
    cameraRef: y,
    shapesRef: kt,
    toolRef: Bt,
    activeColorRef: U,
    camera: p,
    shapes: k,
    selected: M,
    isSpaceDown: F,
    setCamera: w,
    setShapes: g,
    setEditingId: v,
    setEraserPos: D,
    setGuides: T,
    setAnnouncement: K,
    applyInteraction: E,
    selectNow: lt,
    past: it,
    future: Z,
    beginHistory: te,
    endHistory: Yt,
    commit: nt,
    deleteSelection: ct,
    onDirty: u,
    onToolChange: a,
    controlled: f,
    isDarkMode: e,
    minZoom: de,
    maxZoom: ue,
    textualTypes: xe,
    selectedRef: S,
    editingIdRef: X,
    setIsSpaceDown: C,
    viewportCentre: Dt,
    setLocalShapes: s,
    expandToGroups: _t,
    toPage: zt,
    createId: io
  }), { cursor: Xe, gridColor: Ye, gridSize: ee, strokeColorOf: Se } = ro({
    isDarkMode: e,
    tool: o,
    isSpaceDown: F,
    interaction: Y,
    zoom: p.z
  }), ne = (Ae) => {
    const Oe = S.current, ce = X.current, Kt = new Set(Oe);
    ce && Kt.add(ce), Kt.size !== 0 && nt((De) => De.map((Wt) => Kt.has(Wt.id) ? { ...Wt, ...Ae } : Wt));
  }, {
    commitEditorHtml: Ce,
    applyFormat: Ne,
    applyList: Ie,
    onEditorKeyDown: Ee,
    applyCustomFontFamily: Le
  } = An({
    editorRef: x,
    editingId: $,
    setShapes: g,
    setAnnouncement: K,
    onDirty: u,
    patchSelected: ne
  }), { renderEditor: Fe, renderShapeBody: Pe } = Pn({
    camera: p,
    editingId: $,
    isDarkMode: e,
    editorRef: x,
    commitEditorHtml: Ce,
    onEditorKeyDown: Ee,
    setShapes: g,
    onDirty: u
  }), Te = Y.kind === "marquee" ? Y : null, { shapeById: oe, visiblePaintOrder: re } = Tn({
    containerRef: i,
    shapesRef: kt,
    shapes: k,
    camera: p,
    selected: M,
    editingId: $,
    boardIdentity: n
  });
  return /* @__PURE__ */ j(
    "div",
    {
      ref: i,
      onPointerDown: H,
      onPointerMove: Ht,
      onPointerLeave: A,
      role: "application",
      "data-canvas-board-id": n,
      "data-canvas-active-tool": o,
      "data-canvas-camera-x": p.x,
      "data-canvas-camera-y": p.y,
      "data-canvas-camera-z": p.z,
      "aria-label": "무한 캔버스. Tab으로 개체 이동, Enter로 편집, 방향키로 위치 조정.",
      tabIndex: 0,
      className: "invoicex-canvas absolute inset-0 overflow-hidden touch-none select-none focus:outline-none",
      style: {
        cursor: Xe,
        background: e ? O.canvasDark : O.canvasLight,
        backgroundImage: `radial-gradient(${Ye} 1px, transparent 1px)`,
        backgroundSize: `${ee}px ${ee}px`,
        backgroundPosition: `${-p.x * p.z}px ${-p.y * p.z}px`
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
            children: W
          }
        ),
        /* @__PURE__ */ N(
          yn,
          {
            visiblePaintOrder: re,
            selected: M,
            shapeById: oe,
            allShapes: kt.current,
            camera: p,
            interaction: Y,
            eraserPos: B,
            guides: P,
            marquee: Te,
            strokeColorOf: Se
          }
        ),
        /* @__PURE__ */ N(
          Ln,
          {
            visiblePaintOrder: re,
            selected: M,
            editingId: $,
            camera: p,
            shapeById: oe,
            allShapes: kt.current,
            peerCursors: c,
            isDarkMode: e,
            renderEditor: Fe,
            renderShapeBody: Pe,
            setEditingId: v,
            onBendHandleDown: ht,
            onResizeHandleDown: _,
            onRotateHandleDown: G,
            onConnectHandleDown: ft,
            onArrowEndpointDown: jt
          }
        ),
        St && /* @__PURE__ */ N(
          Fn,
          {
            shape: St,
            shapes: k,
            camera: p,
            canvasSize: { width: ((ie = i.current) == null ? void 0 : ie.clientWidth) ?? 380, height: ((ae = i.current) == null ? void 0 : ae.clientHeight) ?? 190 },
            isDarkMode: e,
            editing: !!$,
            showPalette: z,
            installedFontFamilies: ut,
            setShowPalette: L,
            setActiveColor: R,
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
  rt as CANVAS_COLORS,
  Re as CANVAS_COLOR_KEYS,
  st as CANVAS_FONTS,
  uo as InfiniteCanvas,
  Ge as SHAPE_TOOLS
};
