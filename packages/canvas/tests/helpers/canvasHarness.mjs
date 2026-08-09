/**
 * Shared mounting harness for pointer-interaction tests: installs the
 * happy-dom environment (via canvasDom.mjs), loads the real InfiniteCanvas
 * through Vite, and exposes gesture helpers in page coordinates.
 *
 * Camera starts at { x: -400, y: -300, z: 1 } and the fake layout box starts
 * at the origin, so page = client + camera offset.
 */
import './canvasDom.mjs';

const React = await import('react');
const { act } = React;
const h = React.createElement;
const { createRoot } = await import('react-dom/client');

// Give every element a stable 1280x800 box at the origin so viewport
// culling, coordinate transforms, and handle rendering behave predictably.
for (const proto of [window.HTMLElement.prototype, window.SVGElement.prototype]) {
  Object.defineProperty(proto, 'clientWidth', { get: () => 1280, configurable: true });
  Object.defineProperty(proto, 'clientHeight', { get: () => 800, configurable: true });
  proto.getBoundingClientRect = function getBoundingClientRect() {
    return { x: 0, y: 0, left: 0, top: 0, right: 1280, bottom: 800, width: 1280, height: 800, toJSON: () => ({}) };
  };
}

const { createServer } = await import('vite');
let serverPromise;
function viteServer() {
  serverPromise ??= createServer({
    logLevel: 'silent',
    server: { middlewareMode: true },
    appType: 'custom',
    optimizeDeps: { noDiscovery: true },
  });
  return serverPromise;
}

let modulePromise;
function canvasModule(server) {
  modulePromise ??= server.ssrLoadModule('/src/react/InfiniteCanvas.tsx');
  return modulePromise;
}

export async function mountCanvas() {
  const server = await viteServer();
  const { InfiniteCanvas } = await canvasModule(server);

  const hostApi = {};
  function Host() {
    const [tool, setTool] = React.useState('select');
    const canvasRef = React.useRef(null);
    hostApi.setTool = setTool;
    hostApi.canvasRef = canvasRef;
    return h(InfiniteCanvas, { isDarkMode: false, tool, onToolChange: setTool, onDirty: () => {}, ref: canvasRef });
  }

  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  await act(async () => { root.render(h(Host)); });
  const canvasEl = container.querySelector('[data-canvas-board-id]');

  const pageToClient = (x, y) => ({ clientX: x + 400, clientY: y + 300 });

  function pointer(type, clientX, clientY, pointerId = 1) {
    const EventCtor = window.PointerEvent ?? window.MouseEvent;
    const event = new EventCtor(type, { bubbles: true, cancelable: true, clientX, clientY, button: 0 });
    Object.defineProperty(event, 'pointerId', { value: pointerId });
    return event;
  }

  async function dispatch(el, event) {
    await act(async () => { el.dispatchEvent(event); });
  }

  async function press(page) {
    const { clientX, clientY } = pageToClient(page.x, page.y);
    await dispatch(canvasEl, pointer('pointerdown', clientX, clientY));
  }

  async function movePointer(page) {
    const { clientX, clientY } = pageToClient(page.x, page.y);
    await dispatch(window, pointer('pointermove', clientX, clientY));
  }

  async function release(page) {
    const { clientX, clientY } = pageToClient(page.x, page.y);
    await dispatch(window, pointer('pointerup', clientX, clientY));
  }

  async function click(page) {
    await press(page);
    await release(page);
  }

  /** Press on a page point, drag to another page point, release. */
  async function drag(fromPage, toPage) {
    await press(fromPage);
    await movePointer(toPage);
    await release(toPage);
  }

  /** Wait long enough for the quick-second-click window to expire. */
  async function settle() {
    await act(async () => { await new Promise(resolve => setTimeout(resolve, 450)); });
  }

  const shapes = () => hostApi.canvasRef.current.getSnapshot().shapes;
  const shapeCentre = s => ({ x: s.x + s.w / 2, y: s.y + s.h / 2 });
  const editorOf = shapeId => canvasEl.querySelector(`[data-canvas-shape-id="${shapeId}"] [role="textbox"]`);

  async function createNoteAt(pageX, pageY) {
    await act(async () => { hostApi.setTool('note'); });
    const { clientX, clientY } = pageToClient(pageX, pageY);
    await dispatch(canvasEl, new window.MouseEvent('click', { bubbles: true, clientX, clientY }));
    // Creation switches the tool back to select via onToolChange.
    await act(async () => { await new Promise(resolve => setTimeout(resolve, 60)); });
  }

  async function unmount() {
    await act(async () => { root.unmount(); });
    container.remove();
  }

  return {
    React,
    act,
    hostApi,
    canvasEl,
    pointer,
    dispatch,
    press,
    movePointer,
    release,
    click,
    drag,
    settle,
    shapes,
    shapeCentre,
    editorOf,
    createNoteAt,
    pageToClient,
    unmount,
    closeServer: () => server.close(),
  };
}
