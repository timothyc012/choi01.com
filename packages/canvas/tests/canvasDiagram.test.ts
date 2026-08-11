import assert from 'node:assert/strict';
import test from 'node:test';

import { diagramTemplate, getInspectorGroups, isDiagramShape } from '../src/react/canvasDiagram.ts';
import type { CanvasShape } from '../src/core/model.ts';

const card = (overrides: Partial<CanvasShape> = {}): CanvasShape => ({
  id: 'diagram-test',
  type: 'card',
  x: 0,
  y: 0,
  w: 260,
  h: 150,
  text: 'flowchart TD\n  A --> B',
  category: 'diagram',
  ...overrides,
});

test('recognises diagram cards and exposes compact inspector groups', () => {
  assert.equal(isDiagramShape(card()), true);
  assert.equal(isDiagramShape(card({ category: 'entity' })), false);
  assert.deepEqual(getInspectorGroups(card()), ['color', 'text', 'arrange', 'diagram']);
});

test('provides deterministic Mermaid starter templates', () => {
  assert.match(diagramTemplate('flowchart'), /^flowchart TD/m);
  assert.match(diagramTemplate('sequence'), /^sequenceDiagram/m);
  assert.match(diagramTemplate('class'), /^classDiagram/m);
});
