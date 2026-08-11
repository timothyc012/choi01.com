import type { CanvasShape } from '../core/model.js';
type CanvasShapeLike = Pick<CanvasShape, 'type' | 'category'>;
export type DiagramTemplateKind = 'flowchart' | 'sequence' | 'class';
export type InspectorGroup = 'color' | 'text' | 'arrow' | 'arrange' | 'diagram';
export declare function isDiagramShape(shape: CanvasShapeLike): boolean;
export declare function getInspectorGroups(shape: CanvasShapeLike): readonly InspectorGroup[];
export declare function diagramTemplate(kind: DiagramTemplateKind): string;
export {};
//# sourceMappingURL=canvasDiagram.d.ts.map