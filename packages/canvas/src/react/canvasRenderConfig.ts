import {
  CANVAS_COLORS,
  type CanvasTool,
} from '../core/index.ts';
import type { CanvasShape } from './InfiniteCanvas';
import type { Interaction } from './canvasPointerTypes';
import { CANVAS_UI_COLORS } from './theme';

interface CanvasRenderConfigOptions {
  isDarkMode: boolean;
  tool: CanvasTool;
  isSpaceDown: boolean;
  interaction: Interaction;
  zoom: number;
}

export function getCanvasRenderConfig({
  isDarkMode,
  tool,
  isSpaceDown,
  interaction,
  zoom,
}: CanvasRenderConfigOptions) {
  const cursor = isSpaceDown || interaction.kind === 'pan'
    ? 'grabbing'
    : tool === 'hand' ? 'grab'
    : tool === 'draw' ? 'crosshair'
    : tool === 'eraser' ? 'cell'
    : tool === 'select' ? 'default'
    : 'crosshair';
  const gridColor = isDarkMode ? CANVAS_UI_COLORS.gridDark : CANVAS_UI_COLORS.gridLight;
  const gridSize = 40 * zoom;
  /** Strokes and arrows use the saturated edge of the palette entry. */
  const strokeColorOf = (s: CanvasShape) =>
    s.color ? CANVAS_COLORS[s.color].border : (isDarkMode ? 'var(--canvas-slate-200)' : CANVAS_UI_COLORS.ink);
  return { cursor, gridColor, gridSize, strokeColorOf };
}
