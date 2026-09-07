/** Includes iPad browsers requesting a desktop user agent. */
export function isIosInput(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

/** The dispatched event remains usable when high-frequency samples are absent. */
export function pointerSamples(event: PointerEvent): readonly PointerEvent[] {
  let samples: PointerEvent[] = [];
  // tldraw deliberately uses dispatched points on iOS (PR #6917).
  if (!isIosInput() && typeof event.getCoalescedEvents === 'function') {
    try { samples = event.getCoalescedEvents(); } catch { /* use the dispatched point */ }
  }
  return [...samples, event].filter(sample => Number.isFinite(sample.clientX) && Number.isFinite(sample.clientY));
}
