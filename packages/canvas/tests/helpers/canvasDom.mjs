/**
 * Installs a happy-dom browser environment on the Node globals so the React
 * editor surface can mount inside plain `node --test`. Import this module
 * before react/react-dom so both libraries observe the same DOM.
 */
import { Window } from 'happy-dom';

const window = new Window({ width: 1280, height: 800 });

globalThis.window = window;
globalThis.document = window.document;
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// Mirror every constructor/utility happy-dom exposes (Element, MouseEvent,
// requestAnimationFrame, getComputedStyle, ...) onto globalThis without
// clobbering Node built-ins that React does not need replaced.
for (const key of Object.getOwnPropertyNames(window)) {
  if (key === 'undefined' || key in globalThis) continue;
  try {
    globalThis[key] = window[key];
  } catch {
    // Some globals (e.g. navigator on newer Node) are getter-only; those
    // Node-native versions are acceptable to React.
  }
}

// React and the canvas hooks specifically rely on these resolving to the
// happy-dom implementations even when Node ships its own (getter-only) copies.
for (const key of ['document', 'navigator', 'CustomEvent', 'Event', 'MouseEvent', 'KeyboardEvent', 'requestAnimationFrame', 'cancelAnimationFrame', 'getComputedStyle']) {
  try {
    Object.defineProperty(globalThis, key, { value: window[key], configurable: true, writable: true });
  } catch {
    // Best effort; the copy loop above already covered the simple cases.
  }
}

export { window };
