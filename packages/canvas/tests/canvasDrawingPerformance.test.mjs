/**
 * Regression test for freehand-drawing fluidity.
 *
 * Reported symptom: while drawing, the stroke advances for a moment and then
 * stalls for about a second, repeatedly ("1초 그리고 1초 끊기고"). Cause: every
 * pointermove re-render re-sanitized EVERY shape on the board through the
 * full parse/HTML-sanitize boundary, so on a dense board each stroke sample
 * stalled the main thread long enough for input to pile up.
 */
import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { mountCanvas } from './helpers/canvasHarness.mjs';

let cv;

before(async () => { cv = await mountCanvas(); });

after(async () => {
  await cv.unmount();
  await cv.closeServer();
});

describe('freehand drawing stays responsive on a dense board', () => {
  it('streams stroke samples without re-paying the whole-board sanitize cost', async () => {
    // Seed a board dense with rich-text shapes, like a real diagram.
    const html = '<p><b>관계 설명</b>과 노드 상세 내용을 담은 리치 텍스트</p>'.repeat(24);
    const seeded = [];
    for (let i = 0; i < 120; i++) {
      seeded.push({
        id: `seed-${i}`,
        type: 'rect',
        x: (i % 12) * 260,
        y: Math.floor(i / 12) * 200,
        w: 200,
        h: 120,
        color: 'blue',
        html,
      });
    }
    await cv.act(async () => {
      cv.hostApi.canvasRef.current.loadSnapshot({
        version: 'canvas-v1',
        shapes: seeded,
        camera: { x: -400, y: -300, z: 1 },
      });
    });
    await cv.act(async () => { cv.hostApi.setTool('draw'); });

    const start = cv.pageToClient(100, 100);
    await cv.dispatch(cv.canvasEl, cv.pointer('pointerdown', start.clientX, start.clientY));

    const moves = 40;
    const started = performance.now();
    for (let i = 1; i <= moves; i++) {
      const p = cv.pageToClient(100 + i * 8, 100 + i * 4);
      await cv.dispatch(window, cv.pointer('pointermove', p.clientX, p.clientY));
    }
    const elapsedMs = performance.now() - started;
    await cv.dispatch(window, cv.pointer('pointerup', ...Object.values(cv.pageToClient(100 + moves * 8, 100 + moves * 4))));

    const stroke = cv.shapes().find(s => s.type === 'draw');
    assert.ok(stroke && stroke.points.length > 10, 'the stroke accumulates points');

    const perMoveMs = elapsedMs / moves;
    assert.ok(
      perMoveMs < 25,
      `each stroke sample must stay fluid even on a dense board, took ${perMoveMs.toFixed(1)}ms/move (${elapsedMs.toFixed(0)}ms for ${moves} moves)`,
    );
  });
});
