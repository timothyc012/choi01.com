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
  it('keeps the active stroke out of React state until pointerup', async () => {
    await cv.act(async () => {
      cv.hostApi.canvasRef.current.loadSnapshot({ version: 'canvas-v1', shapes: [], camera: { x: -400, y: -300, z: 1 } });
      cv.hostApi.setTool('draw');
    });
    const start = cv.pageToClient(40, 40);
    await cv.dispatch(cv.canvasEl, cv.pointer('pointerdown', start.clientX, start.clientY));
    const move = cv.pageToClient(80, 60);
    await cv.dispatch(window, cv.pointer('pointermove', move.clientX, move.clientY));
    assert.equal(cv.shapes().filter(shape => shape.type === 'draw').length, 0);
    await cv.dispatch(window, cv.pointer('pointerup', move.clientX, move.clientY));
    await new Promise(resolve => setTimeout(resolve, 30));
    assert.equal(cv.shapes().filter(shape => shape.type === 'draw').length, 1);
  });

  it('commits zero-gap repeated handwriting strokes without panning', async () => {
    await cv.act(async () => {
      cv.hostApi.canvasRef.current.loadSnapshot({ version: 'canvas-v1', shapes: [], camera: { x: -400, y: -300, z: 1 } });
      cv.hostApi.setTool('draw');
    });
    const cameraBefore = cv.hostApi.canvasRef.current.getSnapshot().camera;
    await cv.act(async () => {
      for (let stroke = 0; stroke < 50; stroke += 1) {
        const start = cv.pageToClient(100 + (stroke % 10) * 20, 120 + Math.floor(stroke / 10) * 16);
        cv.canvasEl.dispatchEvent(cv.pointer('pointerdown', start.clientX, start.clientY, stroke + 1));
        const end = cv.pageToClient(108 + (stroke % 10) * 20, 124 + Math.floor(stroke / 10) * 16);
        window.dispatchEvent(cv.pointer('pointermove', end.clientX, end.clientY, stroke + 1));
        window.dispatchEvent(cv.pointer('pointerup', end.clientX, end.clientY, stroke + 1));
      }
    });
    await new Promise(resolve => setTimeout(resolve, 40));
    assert.equal(cv.shapes().filter(shape => shape.type === 'draw').length, 50);
    assert.deepEqual(cv.hostApi.canvasRef.current.getSnapshot().camera, cameraBefore);
  });

  it('starts the next stroke immediately after pointerup', async () => {
    await cv.act(async () => {
      cv.hostApi.canvasRef.current.loadSnapshot({
        version: 'canvas-v1',
        shapes: [],
        camera: { x: -400, y: -300, z: 1 },
      });
    });
    await cv.act(async () => { cv.hostApi.setTool('draw'); });

    const firstStart = cv.pageToClient(100, 100);
    const firstEnd = cv.pageToClient(150, 120);
    await cv.dispatch(cv.canvasEl, cv.pointer('pointerdown', firstStart.clientX, firstStart.clientY));
    await cv.dispatch(window, cv.pointer('pointermove', firstEnd.clientX, firstEnd.clientY));
    await cv.dispatch(window, cv.pointer('pointerup', firstEnd.clientX, firstEnd.clientY));

    const secondStart = cv.pageToClient(200, 160);
    const secondEnd = cv.pageToClient(260, 190);
    await cv.dispatch(cv.canvasEl, cv.pointer('pointerdown', secondStart.clientX, secondStart.clientY));
    await cv.dispatch(window, cv.pointer('pointermove', secondEnd.clientX, secondEnd.clientY));
    await cv.dispatch(window, cv.pointer('pointerup', secondEnd.clientX, secondEnd.clientY));

    const strokes = cv.shapes().filter(shape => shape.type === 'draw');
    assert.equal(strokes.length, 2, 'a second stroke starts without waiting for outline conversion');
    assert.ok(strokes.every(stroke => stroke.points.length >= 2), 'both strokes retain their points');
  });

  it('captures a fast curved stroke delivered before the next pointermove', async () => {
    await cv.act(async () => {
      cv.hostApi.canvasRef.current.loadSnapshot({
        version: 'canvas-v1',
        shapes: [],
        camera: { x: -400, y: -300, z: 1 },
      });
    });
    await cv.act(async () => { cv.hostApi.setTool('draw'); });

    const start = cv.pageToClient(180, 180);
    await cv.dispatch(cv.canvasEl, cv.pointer('pointerdown', start.clientX, start.clientY));

    // A short, fast pen stroke may arrive as one display-aligned pointermove
    // carrying several coalesced hardware samples, including a curve that
    // returns near its start point.
    const rawPoints = [
      [220, 140], [280, 130], [340, 170], [350, 230],
      [300, 270], [240, 260], [190, 220], [180, 180],
    ];
    const finalPoint = cv.pageToClient(...rawPoints.at(-1));
    const move = cv.pointer('pointermove', finalPoint.clientX, finalPoint.clientY);
    Object.defineProperty(move, 'getCoalescedEvents', { value: () => rawPoints.map(([x, y]) => {
      const point = cv.pageToClient(x, y);
      return { clientX: point.clientX, clientY: point.clientY };
    }) });
    await cv.dispatch(window, move);
    await cv.dispatch(window, cv.pointer('pointerup', start.clientX, start.clientY));

    const stroke = cv.shapes().find(s => s.type === 'draw');
    assert.ok(stroke, 'the fast stroke is created');
    assert.ok(
      stroke.points.length >= rawPoints.length,
      `the coalesced samples must survive in one pointermove, captured ${stroke.points.length} of ${rawPoints.length}`,
    );
    assert.ok(stroke.w > 150 && stroke.h > 100, 'the captured stroke keeps the full curved gesture bounds');
  });

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

  it('keeps finished freehand outlines from re-rendering during the next stroke', async () => {
    const pointsPerStroke = 600;
    const seeded = Array.from({ length: 80 }, (_, shapeIndex) => {
      const originX = (shapeIndex % 10) * 90;
      const originY = Math.floor(shapeIndex / 10) * 55;
      const points = Array.from({ length: pointsPerStroke }, (_, pointIndex) => [
        originX + pointIndex * 0.35,
        originY + Math.sin(pointIndex / 12) * 8,
      ]);
      return {
        id: `dense-${shapeIndex}`,
        type: 'draw',
        x: originX,
        y: originY - 8,
        w: points.at(-1)[0] - originX,
        h: 16,
        points,
        color: 'blue',
        strokeWidth: 4,
        drawMode: 'pen',
      };
    });

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
    const moves = 24;
    const started = performance.now();
    for (let i = 1; i <= moves; i++) {
      const p = cv.pageToClient(100 + i * 8, 100 + i * 4);
      await cv.dispatch(window, cv.pointer('pointermove', p.clientX, p.clientY));
    }
    const elapsedMs = performance.now() - started;
    await cv.dispatch(window, cv.pointer('pointerup', ...Object.values(cv.pageToClient(100 + moves * 8, 100 + moves * 4))));

    assert.ok(
      elapsedMs / moves < 5,
      `finished freehand paths must not make each new sample stall, took ${(elapsedMs / moves).toFixed(1)}ms/move (${elapsedMs.toFixed(0)}ms total)`,
    );
  });
});
