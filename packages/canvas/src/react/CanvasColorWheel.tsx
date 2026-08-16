import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';

export interface CanvasColorWheelProps {
  value: string;
  onChange: (value: string) => void;
}

interface HsvColor {
  hue: number;
  saturation: number;
  value: number;
}

type WheelDrag = 'hue' | 'sv' | null;

const FALLBACK_COLOR = '#3b82f6';

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function channelToHex(value: number): string {
  return Math.round(clamp(value, 0, 255)).toString(16).padStart(2, '0');
}

function parseRgbChannel(value: string): number {
  const isPercent = value.trim().endsWith('%');
  const numeric = Number.parseFloat(value);
  if (!Number.isFinite(numeric)) return 0;
  return isPercent ? numeric * 2.55 : numeric;
}

export function colorToHex(value: string): string {
  const candidate = value.trim().toLowerCase();
  const hex = candidate.match(/^#([0-9a-f]{3,8})$/i)?.[1];
  if (hex) {
    if (hex.length === 3 || hex.length === 4) {
      return `#${hex.slice(0, 3).split('').map(channel => `${channel}${channel}`).join('')}`;
    }
    return `#${hex.slice(0, 6)}`;
  }
  const rgb = candidate.match(/^rgba?\(([^)]+)\)$/)?.[1];
  if (rgb) {
    const channels = rgb.split(/[,/\s]+/).filter(Boolean).slice(0, 3).map(parseRgbChannel);
    if (channels.length === 3) return `#${channels.map(channelToHex).join('')}`;
  }
  const named: Record<string, string> = {
    black: '#000000',
    blue: '#0000ff',
    green: '#008000',
    red: '#ff0000',
    white: '#ffffff',
    yellow: '#ffff00',
  };
  return named[candidate] ?? FALLBACK_COLOR;
}

function hexToHsv(value: string): HsvColor {
  const hex = colorToHex(value).slice(1);
  const red = Number.parseInt(hex.slice(0, 2), 16) / 255;
  const green = Number.parseInt(hex.slice(2, 4), 16) / 255;
  const blue = Number.parseInt(hex.slice(4, 6), 16) / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  let hue = 0;
  if (delta !== 0) {
    if (max === red) hue = 60 * (((green - blue) / delta) % 6);
    else if (max === green) hue = 60 * ((blue - red) / delta + 2);
    else hue = 60 * ((red - green) / delta + 4);
  }
  if (hue < 0) hue += 360;
  return { hue, saturation: max === 0 ? 0 : delta / max, value: max };
}

function hsvToHex({ hue, saturation, value }: HsvColor): string {
  const h = ((hue % 360) + 360) % 360;
  const c = value * saturation;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = value - c;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (h < 60) [red, green, blue] = [c, x, 0];
  else if (h < 120) [red, green, blue] = [x, c, 0];
  else if (h < 180) [red, green, blue] = [0, c, x];
  else if (h < 240) [red, green, blue] = [0, x, c];
  else if (h < 300) [red, green, blue] = [x, 0, c];
  else [red, green, blue] = [c, 0, x];
  return `#${channelToHex((red + m) * 255)}${channelToHex((green + m) * 255)}${channelToHex((blue + m) * 255)}`;
}

function sameHsv(a: HsvColor, b: HsvColor): boolean {
  return Math.abs(a.hue - b.hue) < 0.01
    && Math.abs(a.saturation - b.saturation) < 0.001
    && Math.abs(a.value - b.value) < 0.001;
}

export function CanvasColorWheel({ value, onChange }: CanvasColorWheelProps) {
  const [hsv, setHsv] = useState<HsvColor>(() => hexToHsv(value));
  const hueRef = useRef<HTMLDivElement>(null);
  const svRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<WheelDrag>(null);

  useEffect(() => {
    const next = hexToHsv(value);
    setHsv(previous => sameHsv(previous, next) ? previous : next);
  }, [value]);

  const emit = (next: HsvColor) => {
    setHsv(next);
    onChange(hsvToHex(next));
  };

  const updateHue = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = hueRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    const degrees = Math.atan2(y, x) * 180 / Math.PI + 90;
    emit({ ...hsv, hue: (degrees + 360) % 360 });
  };

  const updateSaturationValue = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = svRef.current?.getBoundingClientRect();
    if (!rect) return;
    emit({
      ...hsv,
      saturation: clamp((event.clientX - rect.left) / rect.width, 0, 1),
      value: clamp(1 - (event.clientY - rect.top) / rect.height, 0, 1),
    });
  };

  const handlePointerDown = (kind: Exclude<WheelDrag, null>, event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0 && event.pointerType !== 'touch') return;
    event.preventDefault();
    event.stopPropagation();
    dragRef.current = kind;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    if (kind === 'hue') updateHue(event);
    else updateSaturationValue(event);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    event.preventDefault();
    if (dragRef.current === 'hue') updateHue(event);
    else updateSaturationValue(event);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragRef.current = null;
    try { event.currentTarget.releasePointerCapture?.(event.pointerId); } catch { return; }
  };

  const hueRadians = (hsv.hue - 90) * Math.PI / 180;
  const wheelRadius = 53;
  const huePosition = {
    left: 66 + Math.cos(hueRadians) * wheelRadius,
    top: 66 + Math.sin(hueRadians) * wheelRadius,
  };
  const hueColor = hsvToHex({ hue: hsv.hue, saturation: 1, value: 1 });

  const nudgeHue = (amount: number) => emit({ ...hsv, hue: (hsv.hue + amount + 360) % 360 });

  return (
    <div className="canvas-color-wheel" data-canvas-color-wheel>
      <div
        ref={hueRef}
        className="canvas-color-wheel-hue"
        role="slider"
        aria-label="색상 색상환"
        aria-valuemin={0}
        aria-valuemax={360}
        aria-valuenow={Math.round(hsv.hue)}
        tabIndex={0}
        onPointerDown={event => handlePointerDown('hue', event)}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onKeyDown={event => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') { event.preventDefault(); nudgeHue(-1); }
          if (event.key === 'ArrowRight' || event.key === 'ArrowUp') { event.preventDefault(); nudgeHue(1); }
        }}
      >
        <div className="canvas-color-wheel-core" style={{ background: value }} />
        <span className="canvas-color-wheel-hue-marker" style={{ left: huePosition.left, top: huePosition.top }} />
      </div>
      <div
        ref={svRef}
        className="canvas-color-wheel-sv"
        role="slider"
        aria-label="채도와 밝기"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(hsv.saturation * hsv.value * 100)}
        tabIndex={0}
        style={{ backgroundColor: hueColor }}
        onPointerDown={event => handlePointerDown('sv', event)}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onKeyDown={event => {
          const step = event.shiftKey ? 0.1 : 0.02;
          if (event.key === 'ArrowLeft') { event.preventDefault(); emit({ ...hsv, saturation: clamp(hsv.saturation - step, 0, 1) }); }
          if (event.key === 'ArrowRight') { event.preventDefault(); emit({ ...hsv, saturation: clamp(hsv.saturation + step, 0, 1) }); }
          if (event.key === 'ArrowDown') { event.preventDefault(); emit({ ...hsv, value: clamp(hsv.value - step, 0, 1) }); }
          if (event.key === 'ArrowUp') { event.preventDefault(); emit({ ...hsv, value: clamp(hsv.value + step, 0, 1) }); }
        }}
      >
        <span className="canvas-color-wheel-sv-marker" style={{ left: `${hsv.saturation * 100}%`, top: `${(1 - hsv.value) * 100}%` }} />
      </div>
      <div className="canvas-color-wheel-value" aria-live="polite">
        <span className="canvas-color-wheel-preview" style={{ background: value }} aria-hidden="true" />
        <span>{colorToHex(value).toUpperCase()}</span>
      </div>
    </div>
  );
}
