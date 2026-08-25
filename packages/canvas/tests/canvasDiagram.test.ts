import assert from 'node:assert/strict';
import test from 'node:test';

import {
  diagramTemplate,
  getInspectorGroups,
  isDiagramShape,
} from '../src/react/canvasDiagram.ts';
import { createCanvasShapeId, type CanvasUnoutlinedShape } from '../src/core/model.ts';

const card = (overrides: Omit<Partial<CanvasUnoutlinedShape>, 'type'> = {}): CanvasUnoutlinedShape => ({
  id: createCanvasShapeId('diagram-test'),
  type: 'card',
  x: 0,
  y: 0,
  w: 260,
  h: 150,
  text: 'flowchart TD\n  A --> B',
  category: 'diagram',
  ...overrides,
});

test('recognises diagram cards without changing the canvas shape contract', () => {
  assert.equal(isDiagramShape(card()), true);
  assert.equal(isDiagramShape(card({ category: 'entity' })), false);
  assert.equal(isDiagramShape({ ...card(), type: 'note' }), false);
});

test('returns the compact inspector groups relevant to each selection', () => {
  assert.deepEqual(getInspectorGroups(card()), ['color', 'text', 'arrange', 'diagram']);
  assert.deepEqual(getInspectorGroups({ ...card(), type: 'arrow' }), ['color', 'arrow', 'arrange']);
  assert.deepEqual(getInspectorGroups({ ...card(), type: 'text', category: undefined }), ['color', 'text', 'arrange']);
});

test('provides deterministic Mermaid starter templates', () => {
  assert.match(diagramTemplate('flowchart'), /^flowchart TD/m);
  assert.match(diagramTemplate('sequence'), /^sequenceDiagram/m);
  assert.match(diagramTemplate('class'), /^classDiagram/m);
  assert.equal(diagramTemplate('flowchart'), diagramTemplate('flowchart'));
});
