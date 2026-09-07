import { it } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(resolve(here, '../src/guest-canvas.css'), 'utf8');

// iPadOS WebKit은 Apple Pencil의 빠른 탭-드래그를 텍스트 선택 제스처로 해석한다.
// 캔버스 자체는 선택 불가라서 WebKit이 가장 가까운 선택 가능한 내용, 즉 왼쪽 아래
// 확대 도구(돋보기~AI 버튼)를 잡아 파란 핸들과 복사·번역 메뉴가 떴다. 캔버스
// 패키지의 selectstart 차단은 iPad에서 통하지 않았으므로 호스트 페이지 루트를
// 통째로 선택 불가로 둔다. 입력창과 캔버스 텍스트 편집은 user-select의 영향을 받지 않는다.
it('gc-root가 텍스트 선택과 iOS 콜아웃을 막는다', () => {
  const block = css.match(/\.gc-root \{[^}]*\}/);
  assert.ok(block, '.gc-root 규칙이 있어야 한다');
  assert.match(block[0], /(^|\s)user-select:\s*none;/);
  assert.match(block[0], /-webkit-user-select:\s*none;/);
  assert.match(block[0], /-webkit-touch-callout:\s*none;/);
});
