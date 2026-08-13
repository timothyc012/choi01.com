import '../packages/canvas/tests/helpers/canvasDom.mjs';

import { after, before, it } from 'node:test';
import assert from 'node:assert/strict';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { createServer } from 'vite';

let canvasElement;
let container;
let root;
let server;

for (const proto of [window.HTMLElement.prototype, window.SVGElement.prototype]) {
  Object.defineProperty(proto, 'clientWidth', { get: () => 1280, configurable: true });
  Object.defineProperty(proto, 'clientHeight', { get: () => 800, configurable: true });
  proto.getBoundingClientRect = function getBoundingClientRect() {
    return { x: 0, y: 0, left: 0, top: 0, right: 1280, bottom: 800, width: 1280, height: 800, toJSON: () => ({}) };
  };
}

function button(label) {
  return container.querySelector(`button[aria-label="${label}"]`)
    ?? container.querySelector(`button[title="${label}"]`)
    ?? [...container.querySelectorAll('button')].find(candidate => candidate.textContent?.trim() === label);
}

function toolbarButton(label) {
  return container.querySelector(`.gc-toolbar button[aria-label="${label}"]`)
    ?? container.querySelector(`.gc-toolbar button[title="${label}"]`);
}

function pointer(type, clientX, clientY) {
  const EventCtor = window.PointerEvent ?? window.MouseEvent;
  const event = new EventCtor(type, { bubbles: true, cancelable: true, clientX, clientY, button: 0 });
  Object.defineProperty(event, 'pointerId', { value: 1 });
  return event;
}

async function dispatch(target, event) {
  await act(async () => { target.dispatchEvent(event); });
}

async function drag(from, to) {
  await dispatch(canvasElement, pointer('pointerdown', from.x, from.y));
  await dispatch(window, pointer('pointermove', to.x, to.y));
  await dispatch(window, pointer('pointerup', to.x, to.y));
}

async function click(target) {
  assert.ok(target, 'expected toolbar control to exist');
  await act(async () => { target.click(); });
}

before(async () => {
  server = await createServer({
    logLevel: 'silent',
    server: { middlewareMode: true },
    appType: 'custom',
    optimizeDeps: { noDiscovery: true },
  });
  const { GuestCanvasPage } = await server.ssrLoadModule('/src/GuestCanvasPage.tsx');
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
  await act(async () => { root.render(React.createElement(GuestCanvasPage)); });
  canvasElement = container.querySelector('[data-canvas-board-id]');
});

after(async () => {
  await act(async () => { root.unmount(); });
  container.remove();
  await server.close();
});

it('applies a toolbar width to the selected stroke and the next stroke', async () => {
  await click(button('알겠어요'));
  await click(toolbarButton('펜'));
  await click(toolbarButton('선 굵기'));
  await click(toolbarButton('굵기 2'));
  await drag({ x: 200, y: 200 }, { x: 440, y: 200 });

  await click(toolbarButton('선택 / 이동'));
  await drag({ x: 160, y: 160 }, { x: 480, y: 240 });
  await click(toolbarButton('선 굵기'));
  await click(toolbarButton('굵기 8'));

  const firstStroke = container.querySelector('[data-canvas-vector-shape-type="draw"]');
  assert.equal(firstStroke?.getAttribute('data-canvas-stroke-width'), '8');

  await click(toolbarButton('펜'));
  await drag({ x: 200, y: 320 }, { x: 440, y: 320 });
  const widths = [...container.querySelectorAll('[data-canvas-vector-shape-type="draw"]')]
    .map(path => path.getAttribute('data-canvas-stroke-width'));
  assert.deepEqual(widths, ['8', '8']);
});
