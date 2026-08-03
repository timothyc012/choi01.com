import { type CanvasTool } from '../core/index.js';
import type { CanvasShape } from './InfiniteCanvas';
import type { Interaction } from './canvasPointerTypes';
interface CanvasRenderConfigOptions {
    isDarkMode: boolean;
    tool: CanvasTool;
    isSpaceDown: boolean;
    interaction: Interaction;
    zoom: number;
}
export declare function getCanvasRenderConfig({ isDarkMode, tool, isSpaceDown, interaction, zoom, }: CanvasRenderConfigOptions): {
    cursor: string;
    gridColor: "rgba(148,163,184,0.16)" | "rgba(100,116,139,0.18)";
    gridSize: number;
    strokeColorOf: (s: CanvasShape) => "#facc15" | "#f472b6" | "#c084fc" | "#38bdf8" | "#4ade80" | "#fb923c" | "#94a3b8" | "#003087" | "#ef4444" | "#0f172a" | "var(--canvas-slate-200)";
};
export {};
//# sourceMappingURL=canvasRenderConfig.d.ts.map