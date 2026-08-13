import { after, before, describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { mountCanvas } from './helpers/canvasHarness.mjs';

let cv;

before(async () => { cv = await mountCanvas(); });

after(async () => {
  await cv.unmount();
  await cv.closeServer();
});

describe('stroke width controls', () => {
  it('updates the selected stroke when the toolbar chooses a width', async () => {
    await cv.act(async () => {
      cv.hostApi.canvasRef.current.loadSnapshot({
        version: 'canvas-v1',
        shapes: [{
          id: 'stroke-1',
          type: 'draw',
          x: 100,
          y: 100,
          w: 120,
          h: 0,
          points: [[100, 100], [220, 100]],
          strokeWidth: 2,
        }],
        camera: { x: -400, y: -300, z: 1 },
      });
    });

    await cv.click({ x: 160, y: 100 });
    await cv.act(async () => {
      cv.hostApi.canvasRef.current.setSelectedStrokeWidth(8);
    });

    assert.equal(cv.shapes()[0].strokeWidth, 8);
  });
});
