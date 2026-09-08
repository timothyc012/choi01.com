/**
 * Installs a jsdom browser environment on the Node globals for the markdown
 * preview tests.
 *
 * Why jsdom here and happy-dom everywhere else: DOMPurify caches accessors off
 * `Node.prototype` (`nodeName`, `textContent`, ...) so a clobbering child
 * cannot shadow them. happy-dom defines those on its subclasses instead, so the
 * cached `nodeName` getter returns '' and every element reads as a disallowed
 * unnamed tag — the sanitiser silently unwraps valid HTML. Browsers and jsdom
 * both put the accessors on Node.prototype, so jsdom is the environment that
 * actually tells us what ships. `node --test` runs each file in its own
 * process, so the two DOM implementations never meet.
 */
import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'https://choi01.com/markdown/',
});

globalThis.window = window;
globalThis.document = window.document;

for (const key of Object.getOwnPropertyNames(window)) {
  if (key === 'undefined' || key in globalThis) continue;
  try {
    globalThis[key] = window[key];
  } catch {
    // Getter-only globals (navigator on newer Node) keep their Node-native copy.
  }
}

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// jsdom ships no matchMedia. The page asks it two questions at mount — narrow
// layout and preferred colour scheme — so answer both with the desktop/light
// defaults the tests assume.
if (typeof window.matchMedia !== 'function') {
  window.matchMedia = query => ({
    media: query,
    matches: false,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent: () => false,
  });
  globalThis.matchMedia = window.matchMedia;
}
