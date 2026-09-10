import { useEffect, useState } from 'react';
import type { CanvasInkStyle } from '../core/index.ts';

const INK_STYLE_KEY = 'chois_canvas_ink_style';
const OBJECT_SNAP_KEY = 'chois_canvas_object_snap';
const SHOW_GRID_KEY = 'chois_canvas_show_grid';

function readPreference(key: string): string | null {
  try { return typeof window === 'undefined' ? null : window.localStorage.getItem(key); }
  catch { return null; }
}

function savePreference(key: string, value: string): void {
  try { if (typeof window !== 'undefined') window.localStorage.setItem(key, value); }
  catch { /* The editor remains usable when browser storage is unavailable. */ }
}

export interface CanvasPreferenceOptions {
  /** Style for newly created strokes; omitted values restore the local choice, initially raw. */
  drawInkStyle?: CanvasInkStyle;
  onDrawInkStyleChange?: (style: CanvasInkStyle) => void;
  /** Align moved objects to neighbours; enabled by default, independently of pen correction. */
  objectSnapEnabled?: boolean;
  onObjectSnapEnabledChange?: (enabled: boolean) => void;
  /** View-only dot grid; exports deliberately remain background-stable. */
  showGrid?: boolean;
  onShowGridChange?: (enabled: boolean) => void;
}

/** Preferences never mutate the document or the stroke already under the pen. */
export function useCanvasPreferences(options: CanvasPreferenceOptions) {
  const [localInkStyle, setLocalInkStyle] = useState<CanvasInkStyle>(() =>
    readPreference(INK_STYLE_KEY) === 'smoothed' ? 'smoothed' : 'raw');
  const [localObjectSnap, setLocalObjectSnap] = useState(() => readPreference(OBJECT_SNAP_KEY) !== 'false');
  const [localShowGrid, setLocalShowGrid] = useState(() => readPreference(SHOW_GRID_KEY) !== 'false');
  const drawInkStyle = options.drawInkStyle ?? localInkStyle;
  const objectSnapEnabled = options.objectSnapEnabled ?? localObjectSnap;
  const showGrid = options.showGrid ?? localShowGrid;
  useEffect(() => savePreference(INK_STYLE_KEY, drawInkStyle), [drawInkStyle]);
  useEffect(() => savePreference(OBJECT_SNAP_KEY, String(objectSnapEnabled)), [objectSnapEnabled]);
  useEffect(() => savePreference(SHOW_GRID_KEY, String(showGrid)), [showGrid]);

  const selectInkStyle = (style: CanvasInkStyle) => {
    if (options.drawInkStyle === undefined) setLocalInkStyle(style);
    options.onDrawInkStyleChange?.(style);
  };
  const selectObjectSnap = (enabled: boolean) => {
    if (options.objectSnapEnabled === undefined) setLocalObjectSnap(enabled);
    options.onObjectSnapEnabledChange?.(enabled);
  };
  const selectShowGrid = (enabled: boolean) => {
    if (options.showGrid === undefined) setLocalShowGrid(enabled);
    options.onShowGridChange?.(enabled);
  };
  return { drawInkStyle, objectSnapEnabled, showGrid, selectInkStyle, selectObjectSnap, selectShowGrid };
}
