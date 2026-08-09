import assert from 'node:assert/strict';
import test from 'node:test';

import {
  applyCanvasCommand,
  createCanvasDocument,
  createCanvasShapeId,
  parseCanvasShape,
  parseCanvasSnapshot,
  serializeCanvasSnapshot,
  sanitizeCanvasHtml,
  validateCanvasAssetUrl,
  type CanvasShape,
} from '../src/core/index.ts';
import { moveOrthogonalSegment, orthogonalPathPoints } from '../src/react/canvasRouting.ts';

const rectangle = (id: string): CanvasShape => ({
  id: createCanvasShapeId(id),
  type: 'rect',
  x: 10,
  y: 20,
  w: 120,
  h: 80,
  color: 'blue',
});

test('creates a serializable document from a shape list', () => {
  const shape = rectangle('shape-1');
  const document = createCanvasDocument({ shapes: [shape] });

  const snapshot = serializeCanvasSnapshot(document, { x: 0, y: 0, z: 1 });

  assert.equal(snapshot.version, 'canvas-v1');
  assert.deepEqual(snapshot.shapes, [shape]);
  assert.deepEqual(snapshot.camera, { x: 0, y: 0, z: 1 });
});

test('moves and deletes shapes without mutating the source document', () => {
  const shape = rectangle('shape-1');
  const document = createCanvasDocument({ shapes: [shape] });

  const moved = applyCanvasCommand(document, {
    type: 'moveShapes',
    ids: [shape.id],
    dx: 25,
    dy: -5,
  });

  assert.deepEqual(moved.shapes[0], { ...shape, x: 35, y: 15 });
  assert.deepEqual(document.shapes[0], shape);

  const deleted = applyCanvasCommand(moved, {
    type: 'deleteShapes',
    ids: [shape.id],
  });

  assert.equal(deleted.shapes.length, 0);
});

test('deleting a connected node also removes its relationship line', () => {
  const source = rectangle('source');
  const target = rectangle('target');
  const connector: CanvasShape = {
    id: createCanvasShapeId('connector'),
    type: 'arrow',
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    fromId: source.id,
    toId: target.id,
  };
  const freeArrow: CanvasShape = {
    id: createCanvasShapeId('free-arrow'),
    type: 'arrow',
    x: 10,
    y: 10,
    w: 80,
    h: 0,
  };
  const document = createCanvasDocument({ shapes: [source, target, connector, freeArrow] });

  const deleted = applyCanvasCommand(document, {
    type: 'deleteShapes',
    ids: [source.id],
  });

  assert.deepEqual(deleted.shapes.map(shape => shape.id), [target.id, freeArrow.id]);
  assert.deepEqual(document.shapes.map(shape => shape.id), [source.id, target.id, connector.id, freeArrow.id]);
});

test('orthogonal connector routing detours around a blocking shape', () => {
  const path = orthogonalPathPoints(
    { x: 0, y: 50, side: 'e' },
    { x: 200, y: 50, side: 'w' },
    [{ minX: 80, minY: 20, maxX: 120, maxY: 80 }],
  );

  assert.ok(path.length >= 4, 'A horizontal connector crossing an obstacle needs a detour bend.');
  assert.ok(path.some(point => point.y < 20 || point.y > 80), 'The detour must leave the obstacle vertical range.');
  for (let i = 1; i < path.length; i++) {
    assert.ok(path[i - 1].x === path[i].x || path[i - 1].y === path[i].y, 'Orthogonal route segments must stay axis-aligned.');
  }
});

test('orthogonal connector variants expose distinct elbow, reverse, U, and zigzag paths', () => {
  const start = { x: 0, y: 50, side: 'e' as const };
  const end = { x: 200, y: 150, side: 'w' as const };
  const elbow = orthogonalPathPoints(start, end, [], 'elbow');
  const reverse = orthogonalPathPoints(start, end, [], 'reverse');
  const u = orthogonalPathPoints(start, end, [], 'u');
  const zigzag = orthogonalPathPoints(start, end, [], 'zigzag');

  assert.notDeepEqual(reverse, elbow, 'reverse routing should choose the alternate elbow direction');
  assert.ok(u.length >= 4, 'U routing should have at least two bends');
  assert.ok(zigzag.length >= 5, 'zigzag routing should have at least three bends');
  for (const path of [elbow, reverse, u, zigzag]) {
    for (let i = 1; i < path.length; i++) {
      assert.ok(path[i - 1].x === path[i].x || path[i - 1].y === path[i].y, 'variant segments must stay axis-aligned');
    }
  }
});

test('manual orthogonal waypoints preserve a user-shaped path and segment dragging stays axis-aligned', () => {
  const start = { x: 0, y: 50, side: 'e' as const };
  const end = { x: 200, y: 150, side: 'w' as const };
  const waypoints = [{ x: 120, y: 50 }, { x: 120, y: 150 }];
  const manual = orthogonalPathPoints(start, end, [], 'elbow', waypoints);
  assert.deepEqual(manual, [start, ...waypoints, end]);

  const moved = moveOrthogonalSegment(manual, 1, 160);
  assert.deepEqual(moved, [start, { x: 160, y: 50 }, { x: 160, y: 150 }, end]);
  for (let i = 1; i < moved.length; i++) {
    assert.ok(moved[i - 1].x === moved[i].x || moved[i - 1].y === moved[i].y, 'manual segments stay axis-aligned');
  }
});

test('rejects snapshots that do not match the public canvas contract', () => {
  assert.throws(
    () => parseCanvasSnapshot({ version: 'canvas-v0', shapes: [], camera: { x: 0, y: 0, z: 1 } }),
    /Unsupported canvas snapshot version/,
  );

  assert.throws(
    () => parseCanvasSnapshot({ version: 'canvas-v1', shapes: 'not-an-array', camera: { x: 0, y: 0, z: 1 } }),
    /Canvas snapshot shapes must be an array/,
  );
});

test('parses connector and freehand variants without dropping their typed fields', () => {
  const snapshot = parseCanvasSnapshot({
    version: 'canvas-v1',
    shapes: [
      {
        id: 'arrow-1',
        type: 'arrow',
        x: 0,
        y: 0,
        w: 100,
        h: 50,
        routing: 'orthogonal',
        orthogonalVariant: 'zigzag',
        orthogonalWaypoints: [{ x: 40, y: 0 }, { x: 40, y: 60 }],
        fromId: 'shape-1',
      },
      {
        id: 'stroke-1',
        type: 'draw',
        x: 0,
        y: 0,
        w: 20,
        h: 20,
        points: [[0, 0], [20, 20]],
      },
    ],
    camera: { x: 10, y: 20, z: 1.25 },
  });

  assert.equal(snapshot.shapes[0]?.type, 'arrow');
  assert.equal(snapshot.shapes[0]?.type === 'arrow' ? snapshot.shapes[0].orthogonalVariant : undefined, 'zigzag');
  assert.deepEqual(snapshot.shapes[0]?.type === 'arrow' ? snapshot.shapes[0].orthogonalWaypoints : [], [{ x: 40, y: 0 }, { x: 40, y: 60 }]);
  assert.equal(snapshot.shapes[1]?.type, 'draw');
  assert.deepEqual(snapshot.shapes[1]?.type === 'draw' ? snapshot.shapes[1].points : [], [[0, 0], [20, 20]]);
});

test('rejects malformed orthogonal waypoints at the snapshot boundary', () => {
  assert.throws(
    () => parseCanvasShape({ id: 'arrow-invalid-waypoint', type: 'arrow', x: 0, y: 0, w: 100, h: 40, orthogonalWaypoints: [{ x: 10, y: Number.NaN }] }),
    /orthogonalWaypoints/,
  );
});

test('sanitizes rich text and rejects active asset URL schemes at the snapshot boundary', () => {
  assert.equal(
    sanitizeCanvasHtml('<b>safe</b><img src=x onerror=alert(1)><script>alert(2)</script>'),
    '<b>safe</b>alert(2)',
  );
  assert.throws(
    () => parseCanvasSnapshot({
      version: 'canvas-v1',
      shapes: [{ id: 'image-1', type: 'image', x: 0, y: 0, w: 10, h: 10, src: 'javascript:alert(1)' }],
      camera: { x: 0, y: 0, z: 1 },
    }),
    /asset URL/,
  );
  assert.throws(
    () => parseCanvasSnapshot({
      version: 'canvas-v1',
      shapes: [{ id: 'image-2', type: 'image', x: 0, y: 0, w: 10, h: 10, src: '//attacker.invalid/pixel' }],
      camera: { x: 0, y: 0, z: 1 },
    }),
    /asset URL/,
  );
  assert.throws(
    () => parseCanvasSnapshot({
      version: 'canvas-v1',
      shapes: [{ id: 'image-3', type: 'image', x: 0, y: 0, w: 10, h: 10, src: '/api/poll-inbox' }],
      camera: { x: 0, y: 0, z: 1 },
    }),
    /explicit HTTP\(S\) or blob origin/,
  );
  assert.throws(
    () => parseCanvasSnapshot({
      version: 'canvas-v1',
      shapes: [{ id: 'image-4', type: 'image', x: 0, y: 0, w: 10, h: 10, src: 'https://app.example/api/poll-inbox' }],
      camera: { x: 0, y: 0, z: 1 },
    }),
    /API routes/,
  );
  assert.throws(
    () => parseCanvasSnapshot({
      version: 'canvas-v1',
      shapes: [{ id: 'image-5', type: 'image', x: 0, y: 0, w: 10, h: 10, src: 'https://app.example/%61pi/poll-inbox' }],
      camera: { x: 0, y: 0, z: 1 },
    }),
    /API routes/,
  );
  assert.equal(
    sanitizeCanvasHtml('<ul><ul><li>nested</li></ul></ul>'),
    '<ul><li><ul><li>nested</li></ul></li></ul>',
  );
});

test('rejects multi-encoded and slash-normalized API asset paths while allowing storage URLs', () => {
  for (const value of [
    'https://app.example/%2561pi/poll-inbox',
    'https://app.example/%252Fapi/poll-inbox',
    'https://app.example/%2F%2Fapi/poll-inbox',
    'https://app.example//api/poll-inbox',
    'https://app.example/API/poll-inbox',
    'https://app.example/assets/%2e%2e/%61pi/poll-inbox',
    'https://app.example/%2fAPI%2fpoll-inbox',
    'https://app.example/%5cAPI%5cpoll-inbox',
    'https://app.example/assets/%2e%2e%2f%41PI/poll-inbox',
    'https://app.example/assets/%2e%2e%5c%41PI%5cpoll-inbox',
  ]) {
    assert.throws(() => validateCanvasAssetUrl(value), /API routes/);
  }

  assert.equal(
    validateCanvasAssetUrl('https://cdn.example/assets/%2520invoice.pdf'),
    'https://cdn.example/assets/%2520invoice.pdf',
  );
  assert.equal(
    validateCanvasAssetUrl('https://cdn.example/assets/%2e%2e/invoice.pdf'),
    'https://cdn.example/invoice.pdf',
  );
  assert.equal(
    validateCanvasAssetUrl('https://cdn.example/assets/%5cimages%5cinvoice.pdf'),
    'https://cdn.example/assets/%5cimages%5cinvoice.pdf',
  );
});

test('rejects CSS injection fields and preserves supported text presentation fields', () => {
  assert.throws(
    () => parseCanvasShape({
      id: 'shape-unsafe-color', type: 'rect', x: 0, y: 0, w: 10, h: 10,
      fillColor: 'red" onload="alert(1)',
    }),
    /simple CSS color/,
  );
  assert.throws(
    () => parseCanvasShape({
      id: 'shape-unsafe-font', type: 'text', x: 0, y: 0, w: 10, h: 10,
      customFontFamily: 'Arial; color: red',
    }),
    /font families/,
  );
  const parsed = parseCanvasShape({
    id: 'shape-rich', type: 'text', x: 0, y: 0, w: 10, h: 10,
    fontFamily: 'custom', customFontFamily: 'Arial', textAlign: 'right', manualSize: true,
  });
  assert.equal(parsed.type, 'text');
  assert.equal(parsed.textAlign, 'right');
  assert.equal(parsed.manualSize, true);
});

test('bounds hostile canvas resource values before rendering', () => {
  assert.throws(
    () => parseCanvasShape({ id: 'huge', type: 'rect', x: Number.MAX_VALUE, y: 0, w: 10, h: 10 }),
    /within supported limits/,
  );
  assert.throws(
    () => parseCanvasShape({ id: 'huge-font', type: 'text', x: 0, y: 0, w: 10, h: 10, fontSize: 10_000 }),
    /within supported limits/,
  );
  assert.throws(
    () => parseCanvasShape({
      id: 'long-stroke', type: 'draw', x: 0, y: 0, w: 10, h: 10,
      points: Array.from({ length: 50_001 }, () => [0, 0]),
    }),
    /more than 50000 points/,
  );
  assert.throws(
    () => parseCanvasSnapshot({
      version: 'canvas-v1', shapes: [], camera: { x: 0, y: 0, z: 1e100 },
    }),
    /within supported limits/,
  );
});

test('rejects pathological rich-text nesting before recursive sanitization overflows', () => {
  const deeplyNested = `${'<b>'.repeat(300)}x${'</b>'.repeat(300)}`;
  assert.throws(() => sanitizeCanvasHtml(deeplyNested), /nesting is too deep/);
});
