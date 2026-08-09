/**
 * Regression tests for adjusting arrow endpoints after creation:
 * dragging an arrow's endpoint handles must move the free end and
 * detach/reattach connected ends.
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

function endpointHandle(endpoint) {
  return cv.canvasEl.querySelector(`[data-canvas-arrow-endpoint="${endpoint}"]`);
}

async function dragEndpointTo(handle, toPage) {
  const to = cv.pageToClient(toPage.x, toPage.y);
  await cv.dispatch(handle, cv.pointer('pointerdown', to.clientX, to.clientY));
  await cv.dispatch(window, cv.pointer('pointermove', to.clientX, to.clientY));
  await cv.dispatch(window, cv.pointer('pointerup', to.clientX, to.clientY));
}

describe('arrow endpoints can be adjusted after creation', () => {
  it('moves a free arrow endpoint by dragging its handle', async () => {
    await cv.act(async () => { cv.hostApi.canvasRef.current.addArrow(); });
    const arrow = cv.shapes().find(s => s.type === 'arrow');
    assert.ok(arrow, 'addArrow creates an arrow');
    const bend = cv.canvasEl.querySelector('[data-canvas-arrow-bend-handle]');
    assert.ok(bend, 'a selected arrow shows a bend handle');
    assert.match(bend.style.top, /^-/, 'the bend handle sits above the relation input');
    const relationLabel = cv.canvasEl.querySelector('[data-canvas-arrow-label]');
    assert.ok(relationLabel, 'a selected arrow shows an empty relation label pill');
    assert.equal(relationLabel.textContent, '관계 입력', 'the empty relation label pill explains its purpose');
    const labelHitArea = cv.canvasEl.querySelector('[data-canvas-arrow-label-hit-area]');
    assert.ok(labelHitArea, 'an empty arrow keeps a transparent relation label hit area');
    await cv.dispatch(labelHitArea, new window.MouseEvent('dblclick', { bubbles: true, cancelable: true }));
    assert.ok(cv.canvasEl.querySelector('[data-canvas-arrow-label] [role="textbox"]'), 'double-clicking the empty relation area opens the editor');
    assert.ok(endpointHandle('start'), 'a selected arrow shows a start-endpoint handle');
    assert.ok(endpointHandle('end'), 'a selected arrow shows an end-endpoint handle');

    await dragEndpointTo(endpointHandle('end'), { x: arrow.x + arrow.w + 70, y: arrow.y + 60 });

    const after = cv.shapes().find(s => s.id === arrow.id);
    assert.deepEqual(
      { x: Math.round(after.x), y: Math.round(after.y), w: Math.round(after.w), h: Math.round(after.h) },
      { x: Math.round(arrow.x), y: Math.round(arrow.y), w: Math.round(arrow.w + 70), h: 60 },
      'dragging the end handle moves the end point and keeps the start point',
    );
  });

  it('detaches a connected arrow endpoint onto empty space and reattaches it to a node', async () => {
    // Build the connect flow: note A, drag the "+" handle onto empty canvas,
    // which creates sibling note B and arrow A→B.
    await cv.createNoteAt(100, 500);
    const noteA = cv.shapes().find(s => s.type === 'note');
    await cv.drag({ x: 900, y: 600 }, { x: 900, y: 600 });
    await cv.click(cv.shapeCentre(noteA));

    const connectHandle = cv.canvasEl.querySelector('[title="드래그해서 연결 (관계 생성)"]');
    assert.ok(connectHandle, 'a selected note exposes a connect handle');
    const centre = cv.shapeCentre(noteA);
    const from = cv.pageToClient(centre.x, centre.y);
    const drop = cv.pageToClient(700, 500);
    await cv.dispatch(connectHandle, cv.pointer('pointerdown', from.clientX, from.clientY));
    await cv.dispatch(window, cv.pointer('pointermove', drop.clientX, drop.clientY));
    await cv.dispatch(window, cv.pointer('pointermove', drop.clientX, drop.clientY));
    await cv.dispatch(window, cv.pointer('pointerup', drop.clientX, drop.clientY));
    await cv.act(async () => { await new Promise(resolve => setTimeout(resolve, 60)); });

    const all = cv.shapes();
    const noteB = all.find(s => s.type === 'note' && s.id !== noteA.id);
    const arrow = all.find(s => s.type === 'arrow' && s.fromId);
    assert.ok(noteB && arrow, 'connection drop creates the sibling node and arrow');
    assert.equal(arrow.fromId, noteA.id, 'arrow starts attached to the source node');
    assert.equal(arrow.toId, noteB.id, 'arrow ends attached to the new node');

    // Drag the source-side endpoint away from both nodes: it must detach.
    assert.ok(endpointHandle('start'), 'the connected arrow exposes endpoint handles');
    await dragEndpointTo(endpointHandle('start'), { x: 400, y: 300 });

    const detached = cv.shapes().find(s => s.id === arrow.id);
    assert.equal(detached.fromId, undefined, 'dragging the endpoint off the nodes detaches it');
    assert.equal(detached.toId, noteB.id, 'the opposite endpoint stays attached');
    assert.deepEqual(
      { x: Math.round(detached.x), y: Math.round(detached.y) },
      { x: 400, y: 300 },
      'the detached endpoint follows the pointer',
    );

    // Drag it back onto note A: it must reattach.
    await dragEndpointTo(endpointHandle('start'), { x: 100, y: 500 });

    const reattached = cv.shapes().find(s => s.id === arrow.id);
    assert.equal(reattached.fromId, noteA.id, 'releasing the endpoint over a node reattaches it');
    assert.equal(reattached.toId, noteB.id, 'the opposite endpoint is untouched');
  });
});
