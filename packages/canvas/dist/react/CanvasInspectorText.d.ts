import React from 'react';
import type { CanvasShape } from './InfiniteCanvas';
interface Props {
    s: CanvasShape;
    isDarkMode: boolean;
    editing: boolean;
    installedFontFamilies: readonly string[];
    patchSelected: (patch: Partial<CanvasShape>) => void;
    applyFormat: (command: 'bold' | 'italic' | 'underline') => void;
    applyList: (kind: 'bullet' | 'dash' | 'number') => void;
    applyCustomFontFamily: (value: string) => void;
}
export declare function CanvasInspectorText({ s, isDarkMode, editing, installedFontFamilies, patchSelected, applyFormat, applyList, applyCustomFontFamily }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=CanvasInspectorText.d.ts.map