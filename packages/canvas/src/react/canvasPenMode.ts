export interface CanvasPointerDeviceInput {
  readonly pointerType: string;
}

export function isPenPointer(input: CanvasPointerDeviceInput): boolean {
  return input.pointerType === 'pen';
}

export function hasDirectTouchInput(): boolean {
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) return true;
  return typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && window.matchMedia('(any-pointer: coarse)').matches;
}

export function shouldEnterPenMode(
  input: CanvasPointerDeviceInput,
  directTouchInput: boolean,
): boolean {
  return directTouchInput && isPenPointer(input);
}

export function pointerAllowedInPenMode(
  penMode: boolean,
  input: CanvasPointerDeviceInput,
): boolean {
  return !penMode || isPenPointer(input);
}
