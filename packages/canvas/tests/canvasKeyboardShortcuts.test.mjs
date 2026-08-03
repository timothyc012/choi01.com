import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

async function loadShortcutModule() {
  const sourceUrl = new URL('../src/react/keyboardShortcuts.ts', import.meta.url);
  const source = await readFile(sourceUrl, 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2022,
      target: ts.ScriptTarget.ES2022,
    },
  });
  const dataUrl = `data:text/javascript;base64,${Buffer.from(transpiled.outputText).toString('base64')}`;
  return import(dataUrl);
}

describe('canvas keyboard shortcuts', () => {
  it('uses the physical T key when a Korean keyboard layout reports a Hangul key value', async () => {
    // Given: a Korean-layout browser event for the physical T key.
    const { toolShortcutFromKeyboardEvent } = await loadShortcutModule();

    // When: the shortcut is resolved from the physical key code.
    const tool = toolShortcutFromKeyboardEvent({ key: 'ㅅ', code: 'KeyT' });

    // Then: the text tool is selected even though `key` is not the Latin "t".
    assert.equal(tool, 'text');
  });

  it('does not steal browser or system modified shortcuts', async () => {
    // Given: a modified physical T key chord such as Ctrl+T.
    const { toolShortcutFromKeyboardEvent } = await loadShortcutModule();

    // When: the shortcut resolver sees a browser-reserved modifier.
    const tool = toolShortcutFromKeyboardEvent({ key: 't', code: 'KeyT', ctrlKey: true });

    // Then: the canvas does not consume it as a drawing-tool shortcut.
    assert.equal(tool, null);
  });
});
