import type { CanvasShape } from '../core/model.ts';

type CanvasShapeLike = Pick<CanvasShape, 'type' | 'category'>;

export type DiagramTemplateKind = 'flowchart' | 'sequence' | 'class';
export type InspectorGroup = 'color' | 'text' | 'arrow' | 'arrange' | 'diagram';

export function isDiagramShape(shape: CanvasShapeLike): boolean {
  return shape.type === 'card' && shape.category?.toLowerCase() === 'diagram';
}

export function getInspectorGroups(shape: CanvasShapeLike): readonly InspectorGroup[] {
  const groups: InspectorGroup[] = ['color'];
  if (shape.type === 'arrow') groups.push('arrow');
  else if (shape.type !== 'image' && shape.type !== 'draw') groups.push('text');
  groups.push('arrange');
  if (isDiagramShape(shape)) groups.push('diagram');
  return groups;
}

export function diagramTemplate(kind: DiagramTemplateKind): string {
  switch (kind) {
    case 'sequence':
      return `sequenceDiagram
  participant User
  participant App
  User->>App: Open canvas
  App-->>User: Render diagram`;
    case 'class':
      return `classDiagram
  class Canvas {
    +addShape()
    +saveSnapshot()
  }
  class Diagram {
    +source: string
  }
  Canvas --> Diagram`;
    case 'flowchart':
    default:
      return `flowchart TD
  Start([Start]) --> Compose[Compose diagram]
  Compose --> Review{Review}
  Review -->|Yes| Share[Share]
  Review -->|Edit| Compose`;
  }
}
