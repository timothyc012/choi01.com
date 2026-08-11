import { useEffect, useState } from 'react';

interface MermaidDiagramProps {
  source: string;
  diagramId: string;
}

type MermaidApi = typeof import('mermaid').default;
let mermaidApiPromise: Promise<MermaidApi> | null = null;
let configuredApi: MermaidApi | null = null;

function loadMermaid(): Promise<MermaidApi> {
  mermaidApiPromise ??= import('mermaid').then(module => module.default);
  return mermaidApiPromise;
}

function configureMermaid(mermaid: MermaidApi): void {
  if (configuredApi === mermaid) return;
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: 'base',
    themeVariables: {
      primaryColor: '#e6f0ff',
      primaryTextColor: '#15201b',
      primaryBorderColor: '#2769b4',
      lineColor: '#58625d',
      secondaryColor: '#f4f7f5',
      tertiaryColor: '#ffffff',
    },
  });
  configuredApi = mermaid;
}

export function MermaidDiagram({ source, diagramId }: MermaidDiagramProps) {
  const [svg, setSvg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    const render = async () => {
      const trimmed = source.trim();
      if (!trimmed) {
        setSvg('');
        setError('Diagram source is empty.');
        return;
      }
      try {
        const mermaid = await loadMermaid();
        configureMermaid(mermaid);
        const result = await mermaid.render(`choi-diagram-${diagramId.replace(/[^a-zA-Z0-9_-]/g, '')}`, trimmed);
        if (cancelled) return;
        setSvg(result.svg);
        setError('');
      } catch (cause) {
        if (cancelled) return;
        setSvg('');
        setError(cause instanceof Error ? cause.message : 'Mermaid could not parse this source.');
      }
    };
    void render();
    return () => { cancelled = true; };
  }, [diagramId, source]);

  if (error) return <div className="gc-diagram-error" role="alert">{error}</div>;
  if (!svg) return <div className="gc-diagram-loading" role="status">Rendering diagram…</div>;
  return <div className="gc-diagram-svg" dangerouslySetInnerHTML={{ __html: svg }} />;
}
