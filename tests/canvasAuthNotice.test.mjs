import assert from 'node:assert/strict';
import test from 'node:test';
import { authNoticeForStatus } from '../src/canvas/useCanvasAuth.ts';

test('identifies a verified but unallowlisted account without mislabeling an ordinary signed-out state', () => {
  assert.equal(authNoticeForStatus(403), '이 Google 계정은 이 캔버스에 접근할 권한이 없습니다. 허용된 Google 계정으로 다시 로그인해 주세요.');
  assert.equal(authNoticeForStatus(401), null);
});
