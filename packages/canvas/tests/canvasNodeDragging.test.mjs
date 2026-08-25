/**
 * Regression tests for moving ("positioning") nodes with the pointer.
 *
 * Reported symptom: after creating a node, its describing pill/label stays
 * editable, but the node itself cannot be dragged to a new position. Root
 * cause: the quick-second-click → edit-mode path decided at pointer-down, so
 * any click-then-drag within the double-click window opened the editor
 * instead of starting a move gesture.
 */
import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { mountCanvas } from './helpers/canvasHarness.mjs';

let cv;
let firstNoteId;

before(async () => { cv = await mountCanvas(); });

after(async () => {
  await cv.unmount();
  await cv.closeServer();
});

describe('node position can be adjusted after creation', () => {
  it('moves a freshly created note when it is dragged right away', async () => {
    await cv.createNoteAt(100, 100);
    const created = cv.shapes().find(s => s.type === 'note');
    assert.ok(created, 'clicking with the note tool creates a note');
    assert.deepEqual({ x: created.x, y: created.y }, { x: 10, y: 10 });
    firstNoteId = created.id;

    // The user immediately grabs the new node to position it.
    await cv.drag({ x: 100, y: 100 }, { x: 180, y: 140 });

    const moved = cv.shapes().find(s => s.id === created.id);
    assert.deepEqual(
      { x: Math.round(moved.x), y: Math.round(moved.y) },
      { x: 90, y: 50 },
      'dragging a freshly created node must move it',
    );
  });

  it('moves a node when the grab follows a quick select click', async () => {
    await cv.settle();
    const note = cv.shapes().find(s => s.id === firstNoteId);
    const centre = cv.shapeCentre(note);

    // Click once to select, then grab-and-drag — the everyday
    // "select, then position" sequence.
    await cv.click(centre);
    await cv.drag(centre, { x: centre.x + 40, y: centre.y });

    const after = cv.shapes().find(s => s.id === note.id);
    assert.equal(
      Math.round(after.x),
      Math.round(note.x + 40),
      'a grab right after selecting must move the node, not open the editor',
    );
    assert.equal(cv.editorOf(note.id), null, 'the editor must not open during a drag');
  });

  it('still opens the editor on two quick stationary clicks', async () => {
    await cv.settle();
    const note = cv.shapes().find(s => s.id === firstNoteId);
    const centre = cv.shapeCentre(note);

    await cv.click(centre);
    await cv.click(centre);

    assert.ok(cv.editorOf(note.id), 'a double-click without movement still opens the text editor');
    // Leave edit mode so later gestures are not swallowed by the editor.
    await cv.drag({ x: 900, y: 600 }, { x: 900, y: 600 });
  });

  it('moves a node created through a connection drop', async () => {
    await cv.settle();
    // Connect flow: drag the "+" handle of the existing note onto empty
    // canvas. The engine creates a sibling node plus an arrow whose relation
    // label (the pill) opens for editing.
    const source = cv.shapes().find(s => s.id === firstNoteId);
    // Deselect/edit-off first: press on empty space.
    await cv.drag({ x: 900, y: 600 }, { x: 900, y: 600 });
    await cv.click(cv.shapeCentre(source));

    const handle = cv.canvasEl.querySelector('[title="드래그해서 연결 (관계 생성)"]');
    assert.ok(handle, 'a selected node exposes a connect handle');

    const sourceCentre = cv.shapeCentre(source);
    const from = cv.pageToClient(sourceCentre.x, sourceCentre.y);
    const drop = cv.pageToClient(700, 100);
    await cv.dispatch(handle, cv.pointer('pointerdown', from.clientX, from.clientY));
    await cv.dispatch(window, cv.pointer('pointermove', drop.clientX, drop.clientY));
    await cv.dispatch(window, cv.pointer('pointermove', drop.clientX, drop.clientY));
    await cv.dispatch(window, cv.pointer('pointerup', drop.clientX, drop.clientY));
    // Let the deferred setEditingId(arrow) on requestAnimationFrame flush.
    await cv.act(async () => { await new Promise(resolve => setTimeout(resolve, 60)); });

    const all = cv.shapes();
    assert.equal(all.filter(s => s.type === 'arrow').length, 1, 'connection drop creates an arrow');
    const sibling = all.find(s => s.type === 'note' && s.id !== source.id);
    assert.ok(sibling, 'connection drop on empty canvas creates a sibling node');

    // The relation label editor may be open now; grabbing the sibling node
    // must still move it.
    const centre = cv.shapeCentre(sibling);
    await cv.drag(centre, { x: centre.x + 120, y: centre.y - 60 });

    const movedSibling = cv.shapes().find(s => s.id === sibling.id);
    assert.deepEqual(
      { x: Math.round(movedSibling.x), y: Math.round(movedSibling.y) },
      { x: Math.round(sibling.x + 120), y: Math.round(sibling.y - 60) },
      'the connected node must be draggable to a new position',
    );
  });

  it('moves a text node directly from its active editor', async () => {
    await cv.settle();
    await cv.act(async () => { cv.hostApi.canvasRef.current.addText(); });
    const created = cv.shapes().find(s => s.type === 'text');
    assert.ok(created, 'the text tool creates a text node');
    const editor = cv.canvasEl.querySelector(`[data-canvas-shape-id="${created.id}"] [data-canvas-editor]`);
    assert.ok(editor, 'the active text editor is rendered inside the node');

    const centre = cv.shapeCentre(created);
    const from = cv.pageToClient(centre.x, centre.y);
    const to = cv.pageToClient(centre.x + 72, centre.y + 36);
    await cv.dispatch(editor, cv.pointer('pointerdown', from.clientX, from.clientY));
    await cv.dispatch(window, cv.pointer('pointermove', to.clientX, to.clientY));
    await cv.dispatch(window, cv.pointer('pointerup', to.clientX, to.clientY));

    const moved = cv.shapes().find(s => s.id === created.id);
    assert.ok(Math.abs(moved.x - (created.x + 72)) <= 4 && Math.abs(moved.y - (created.y + 36)) <= 4,
      'dragging from an active editor must reposition the text node within DOM rounding tolerance');
    assert.ok(cv.editorOf(created.id), 'moving text does not discard its active editor');
  });

  it('moves a freehand stroke after direct selection', async () => {
    await cv.settle();
    await cv.act(async () => { cv.hostApi.setTool('draw'); });
    await cv.drag({ x: 120, y: 220 }, { x: 240, y: 270 });
    await new Promise(resolve => setTimeout(resolve, 30));
    const created = cv.shapes().find(s => s.type === 'draw');
    assert.ok(created, 'the pen creates a freehand stroke');
    await cv.act(async () => { cv.hostApi.setTool('select'); });

    const centre = cv.shapeCentre(created);
    await cv.click(centre);
    assert.ok(cv.canvasEl.querySelector('[data-canvas-inspector="draw"]'), 'direct selection exposes the stroke inspector');
    await cv.drag(centre, { x: centre.x + 48, y: centre.y - 24 });
    const moved = cv.shapes().find(s => s.id === created.id);
    assert.deepEqual(
      { x: Math.round(moved.x), y: Math.round(moved.y) },
      { x: Math.round(created.x + 48), y: Math.round(created.y - 24) },
      'a marquee-selected stroke must remain movable as a normal object',
    );
  });
});
