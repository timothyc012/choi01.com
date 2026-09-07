// iPad에서 필기 획이 중간에 끊기는 원인을 기기에서 직접 보기 위한 진단 도구.
// URL에 ?pendebug=1 을 붙이면 GuestCanvasPage가 포인터 이벤트 로그 오버레이를
// 띄운다. 어느 시점에 pointercancel이 오는지, pointerId가 바뀌는지, 이벤트가
// 아예 끊기는지를 구분하기 위한 것이며 일반 사용자에게는 보이지 않는다.

export function isPenDebugEnabled(search: string): boolean {
  return new URLSearchParams(search).get('pendebug') === '1';
}

export interface PointerEventLike {
  readonly type: string;
  readonly pointerType: string;
  readonly pointerId: number;
  readonly buttons: number;
  readonly pressure: number;
  readonly target: unknown;
}

export function describePointerEvent(event: PointerEventLike, timeMs: number): string {
  const node = event.target as { tagName?: string; className?: unknown } | null;
  const tag = node?.tagName ? node.tagName.toLowerCase() : '?';
  const cls = typeof node?.className === 'string' && node.className
    ? `.${node.className.split(/\s+/)[0]}`
    : '';
  const target = tag === '?' ? '?' : `${tag}${cls}`;
  return `${Math.round(timeMs)} ${event.type} ${event.pointerType}#${event.pointerId} b${event.buttons} p${event.pressure.toFixed(2)} ${target}`;
}
