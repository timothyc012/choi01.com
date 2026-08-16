/**
 * Regression tests for Mermaid cards using the source drawer instead of the
 * generic rich-text editor.
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

async function addDiagram() {
  await cv.act(async () => {
    cv.hostApi.canvasRef.current.addCard('flowchart TD\n  A --> B', 'diagram', 'solid', 'blue');
  });
  const diagram = cv.shapes().filter(shape => shape.type === 'card' && shape.category === 'diagram').at(-1);
  assert.ok(diagram, 'the Mermaid card is created');
  return diagram;
}

describe('Mermaid cards stay draggable and keep their source', () => {
  it('keeps Mermaid source when the generic editor commits a double-click edit', async () => {
    const diagram = await addDiagram();
    const centre = cv.shapeCentre(diagram);

    await cv.click(centre);
    await cv.click(centre);

    const editor = cv.editorOf(diagram.id);
    assert.ok(editor, 'double-clicking a Mermaid card opens its editable surface');
    editor.innerHTML = 'flowchart TD<br>  A --&gt; C';
    await cv.dispatch(editor, new window.Event('input', { bubbles: true }));
    await cv.act(async () => { await new Promise(resolve => setTimeout(resolve, 30)); });

    const saved = cv.shapes().find(shape => shape.id === diagram.id);
    assert.equal(saved?.text, 'flowchart TD\n  A --> C', 'editing a Mermaid card must keep the source in text for the renderer and drawer');
    assert.equal(saved?.html, undefined, 'Mermaid source edits must not switch the card to rich-text storage');
  });

  it('moves a Mermaid card after the double-click gesture', async () => {
    await cv.drag({ x: 900, y: 600 }, { x: 900, y: 600 });
    await cv.settle();
    const diagram = await addDiagram();
    const centre = cv.shapeCentre(diagram);
    await cv.click(centre);
    await cv.click(centre);

    const editor = cv.editorOf(diagram.id);
    const target = editor ?? cv.canvasEl.querySelector(`[data-canvas-shape-id="${diagram.id}"]`);
    assert.ok(target, 'the diagram card remains a pointer target');
    const from = cv.pageToClient(centre.x, centre.y);
    const to = cv.pageToClient(centre.x + 80, centre.y + 50);
    await cv.dispatch(target, cv.pointer('pointerdown', from.clientX, from.clientY));
    await cv.dispatch(window, cv.pointer('pointermove', to.clientX, to.clientY));
    await cv.dispatch(window, cv.pointer('pointerup', to.clientX, to.clientY));

    const moved = cv.shapes().find(shape => shape.id === diagram.id);
    assert.deepEqual(
      { x: Math.round(moved.x), y: Math.round(moved.y) },
      { x: Math.round(diagram.x + 80), y: Math.round(diagram.y + 50) },
      'a Mermaid card must remain movable after the double-click gesture',
    );
  });
});
