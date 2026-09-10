import { useEffect, useState } from 'react';
import type { CanvasInkStyle } from '../core/index.ts';

const INK_STYLE_KEY = 'chois_canvas_ink_style';
const OBJECT_SNAP_KEY = 'chois_canvas_object_snap';

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
}

/** Preferences never mutate the document or the stroke already under the pen. */
export function useCanvasPreferences(options: CanvasPreferenceOptions) {
  const [localInkStyle, setLocalInkStyle] = useState<CanvasInkStyle>(() =>
    readPreference(INK_STYLE_KEY) === 'smoothed' ? 'smoothed' : 'raw');
  const [localObjectSnap, setLocalObjectSnap] = useState(() => readPreference(OBJECT_SNAP_KEY) !== 'false');
  const drawInkStyle = options.drawInkStyle ?? localInkStyle;
  const objectSnapEnabled = options.objectSnapEnabled ?? localObjectSnap;
  useEffect(() => savePreference(INK_STYLE_KEY, drawInkStyle), [drawInkStyle]);
  useEffect(() => savePreference(OBJECT_SNAP_KEY, String(objectSnapEnabled)), [objectSnapEnabled]);

  const selectInkStyle = (style: CanvasInkStyle) => {
    if (options.drawInkStyle === undefined) setLocalInkStyle(style);
    options.onDrawInkStyleChange?.(style);
  };
  const selectObjectSnap = (enabled: boolean) => {
    if (options.objectSnapEnabled === undefined) setLocalObjectSnap(enabled);
    options.onObjectSnapEnabledChange?.(enabled);
  };
  return { drawInkStyle, objectSnapEnabled, selectInkStyle, selectObjectSnap };
}
