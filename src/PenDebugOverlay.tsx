import React, { useEffect, useState } from 'react';
import { describePointerEvent } from './penDebug';

const MAX_LINES = 40;
// pointermove는 초당 수백 번 오므로 전부 찍지 않고, 상태가 바뀌는 순간
// (버튼/압력 0 전환, 다른 포인터) 과 50번째마다 한 줄만 남긴다.
const MOVE_SAMPLE_EVERY = 50;

export const PenDebugOverlay: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const started = performance.now();
    let moveCount = 0;
    let lastMoveKey = '';
    const push = (line: string) => setLines(prev => [...prev.slice(-(MAX_LINES - 1)), line]);
    const stamp = () => performance.now() - started;

    const onPointer = (event: PointerEvent) => {
      if (event.type === 'pointermove') {
        moveCount += 1;
        const key = `${event.pointerId}:${event.buttons}:${event.pressure > 0 ? 1 : 0}`;
        if (key === lastMoveKey && moveCount % MOVE_SAMPLE_EVERY !== 0) return;
        lastMoveKey = key;
      }
      push(describePointerEvent(event, stamp()));
    };
    const onPlain = (event: Event) => push(`${Math.round(stamp())} ${event.type}`);

    const pointerTypes = ['pointerdown', 'pointerup', 'pointercancel', 'pointermove', 'lostpointercapture'] as const;
    const plainTypes = ['touchcancel', 'selectionchange', 'blur', 'visibilitychange', 'contextmenu'] as const;
    for (const type of pointerTypes) window.addEventListener(type, onPointer, true);
    for (const type of plainTypes) window.addEventListener(type, onPlain, true);
    document.addEventListener('selectionchange', onPlain, true);
    return () => {
      for (const type of pointerTypes) window.removeEventListener(type, onPointer, true);
      for (const type of plainTypes) window.removeEventListener(type, onPlain, true);
      document.removeEventListener('selectionchange', onPlain, true);
    };
  }, []);

  return (
    <pre
      aria-label="펜 입력 진단 로그"
      style={{
        position: 'fixed', right: 8, top: 56, zIndex: 9999, margin: 0, padding: '6px 8px',
        width: 360, maxHeight: '70vh', overflow: 'hidden', pointerEvents: 'none',
        font: '11px/1.35 ui-monospace, Menlo, monospace', color: '#e2e8f0',
        background: 'rgba(15, 23, 42, 0.85)', borderRadius: 8, whiteSpace: 'pre-wrap',
      }}
    >
      {`pendebug · ${navigator.userAgent.includes('iPad') ? 'iPad' : navigator.platform} · maxTouchPoints ${navigator.maxTouchPoints}\n`}
      {lines.join('\n')}
    </pre>
  );
};
