/**
 * Regression tests for adjusting a node's SIZE ("길이 조절") with the pointer:
 * dragging the corner handles of a selected node must change its w/h.
 */
import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { mountCanvas } from './helpers/canvasHarness.mjs';

let cv;
let noteId;

before(async () => { cv = await mountCanvas(); });

after(async () => {
  await cv.unmount();
  await cv.closeServer();
});

function resizeHandlesOf(shapeId) {
  return cv.canvasEl.querySelectorAll(`[data-canvas-shape-id="${shapeId}"] [data-canvas-resize-handle]`);
}

async function dragHandle(handle, fromPage, toPage) {
  const from = cv.pageToClient(fromPage.x, fromPage.y);
  const to = cv.pageToClient(toPage.x, toPage.y);
  await cv.dispatch(handle, cv.pointer('pointerdown', from.clientX, from.clientY));
  await cv.dispatch(window, cv.pointer('pointermove', to.clientX, to.clientY));
  await cv.dispatch(window, cv.pointer('pointerup', to.clientX, to.clientY));
}

describe('node size can be adjusted after creation', () => {
  it('shows resize handles on a selected node', async () => {
    await cv.createNoteAt(100, 100);
    const note = cv.shapes().find(s => s.type === 'note');
    assert.ok(note, 'clicking with the note tool creates a note');
    noteId = note.id;

    // Leave edit mode; select the note with a clean click.
    await cv.drag({ x: 900, y: 600 }, { x: 900, y: 600 });
    await cv.settle();
    await cv.click(cv.shapeCentre(note));

    assert.equal(resizeHandlesOf(note.id).length, 4, 'a selected node exposes four corner handles');
  });

  it('resizes a node by dragging its south-east corner handle', async () => {
    const note = cv.shapes().find(s => s.id === noteId);
    const handle = cv.canvasEl.querySelector(`[data-canvas-shape-id="${note.id}"] [data-canvas-resize-handle="se"]`);
    assert.ok(handle, 'the se handle is rendered');

    await dragHandle(handle, { x: note.x + note.w, y: note.y + note.h }, { x: note.x + note.w + 60, y: note.y + note.h + 40 });

    const resized = cv.shapes().find(s => s.id === note.id);
    assert.deepEqual(
      { x: Math.round(resized.x), y: Math.round(resized.y), w: Math.round(resized.w), h: Math.round(resized.h) },
      { x: Math.round(note.x), y: Math.round(note.y), w: Math.round(note.w + 60), h: Math.round(note.h + 40) },
      'dragging the se handle grows the node',
    );
  });

  it('resizes a node by dragging its north-west corner handle', async () => {
    const note = cv.shapes().find(s => s.id === noteId);
    const handle = cv.canvasEl.querySelector(`[data-canvas-shape-id="${note.id}"] [data-canvas-resize-handle="nw"]`);
    assert.ok(handle, 'the nw handle is rendered');

    await dragHandle(handle, { x: note.x, y: note.y }, { x: note.x - 30, y: note.y - 20 });

    const resized = cv.shapes().find(s => s.id === note.id);
    assert.deepEqual(
      { x: Math.round(resized.x), y: Math.round(resized.y), w: Math.round(resized.w), h: Math.round(resized.h) },
      { x: Math.round(note.x - 30), y: Math.round(note.y - 20), w: Math.round(note.w + 30), h: Math.round(note.h + 20) },
      'dragging the nw handle grows the node towards the top-left',
    );
  });

  it('resizes a freshly created node without leaving edit mode first', async () => {
    await cv.createNoteAt(500, 500);
    const note = cv.shapes().find(s => s.type === 'note' && s.id !== noteId);
    assert.ok(note, 'a second note is created');
    assert.ok(cv.editorOf(note.id), 'the fresh note is still in edit mode');

    const handle = cv.canvasEl.querySelector(`[data-canvas-shape-id="${note.id}"] [data-canvas-resize-handle="se"]`);
    assert.ok(handle, 'resize handles render even while the node is being edited');

    await dragHandle(handle, { x: note.x + note.w, y: note.y + note.h }, { x: note.x + note.w + 50, y: note.y + note.h + 30 });

    const resized = cv.shapes().find(s => s.id === note.id);
    assert.equal(Math.round(resized.w), Math.round(note.w + 50), 'corner drag grows the width right after creation');
    assert.equal(Math.round(resized.h), Math.round(note.h + 30), 'corner drag grows the height right after creation');
  });

  it('resizes a card node created from the toolbar', async () => {
    await cv.act(async () => { cv.hostApi.canvasRef.current.addCard('테스트', 'ENTITY', 'solid', 'blue'); });
    const card = cv.shapes().find(s => s.type === 'card');
    assert.ok(card, 'a card node is created');
    const handle = cv.canvasEl.querySelector(`[data-canvas-shape-id="${card.id}"] [data-canvas-resize-handle="se"]`);
    assert.ok(handle, 'the card exposes a resize handle once selected');

    await dragHandle(handle, { x: card.x + card.w, y: card.y + card.h }, { x: card.x + card.w + 40, y: card.y + card.h + 25 });

    const resized = cv.shapes().find(s => s.id === card.id);
    assert.equal(Math.round(resized.w), Math.round(card.w + 40), 'card width follows the handle');
    assert.equal(Math.round(resized.h), Math.round(card.h + 25), 'card height follows the handle');
  });

  it('resizes a rect node smaller, not just larger', async () => {
    await cv.act(async () => { cv.hostApi.canvasRef.current.addShape('rect', 'green', ''); });
    const rect = cv.shapes().find(s => s.type === 'rect');
    assert.ok(rect, 'a rect node is created');
    const handle = cv.canvasEl.querySelector(`[data-canvas-shape-id="${rect.id}"] [data-canvas-resize-handle="se"]`);
    assert.ok(handle, 'the rect exposes a resize handle once selected');

    await dragHandle(handle, { x: rect.x + rect.w, y: rect.y + rect.h }, { x: rect.x + 60, y: rect.y + 50 });

    const resized = cv.shapes().find(s => s.id === rect.id);
    assert.equal(Math.round(resized.w), 60, 'rect can be shrunk in width');
    assert.equal(Math.round(resized.h), 50, 'rect can be shrunk in height');
  });
});
