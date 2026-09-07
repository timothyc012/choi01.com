import { it } from 'node:test';
import assert from 'node:assert/strict';
import { isPenDebugEnabled, describePointerEvent } from '../src/penDebug.ts';

// iPad에서 필기 획이 중간에 끊기는 원인을 기기에서 직접 보기 위한 진단 오버레이.
// URL에 ?pendebug=1 이 있을 때만 켜지고, 포인터 이벤트를 한 줄씩 요약한다.
it('pendebug 쿼리가 있을 때만 켜진다', () => {
  assert.equal(isPenDebugEnabled('?pendebug=1'), true);
  assert.equal(isPenDebugEnabled('?foo=1&pendebug=1'), true);
  assert.equal(isPenDebugEnabled('?pendebug=0'), false);
  assert.equal(isPenDebugEnabled(''), false);
});

it('포인터 이벤트를 종류·장치·id·버튼·압력·대상으로 요약한다', () => {
  const line = describePointerEvent({
    type: 'pointercancel', pointerType: 'pen', pointerId: 7, buttons: 1, pressure: 0.42,
    target: { tagName: 'DIV', className: 'gc-toolbar' },
  }, 1234);
  assert.equal(line, '1234 pointercancel pen#7 b1 p0.42 div.gc-toolbar');
});

it('대상이 없거나 className이 문자열이 아니어도 깨지지 않는다', () => {
  const line = describePointerEvent({ type: 'pointerup', pointerType: 'touch', pointerId: 3, buttons: 0, pressure: 0, target: null }, 5);
  assert.equal(line, '5 pointerup touch#3 b0 p0.00 ?');
});
