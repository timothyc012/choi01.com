import { GitBranch, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { diagramTemplate, type DiagramTemplateKind } from 'chois-canvas/react';

interface DiagramComposerProps {
  open: boolean;
  onClose: () => void;
  onCreate: (source: string) => void;
}

const TEMPLATE_LABELS: Record<DiagramTemplateKind, string> = {
  flowchart: 'Flowchart',
  sequence: 'Sequence',
  class: 'Class',
};

export function DiagramComposer({ open, onClose, onCreate }: DiagramComposerProps) {
  const [kind, setKind] = useState<DiagramTemplateKind>('flowchart');
  const [source, setSource] = useState(() => diagramTemplate('flowchart'));
  if (!open) return null;
  const chooseTemplate = (next: DiagramTemplateKind) => {
    setKind(next);
    setSource(diagramTemplate(next));
  };
  return (
    <div className="gc-modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="gc-diagram-composer" role="dialog" aria-modal="true" aria-labelledby="gc-diagram-title">
        <div className="gc-diagram-composer-head">
          <div>
            <div className="gc-kicker"><GitBranch className="gc-icon" /> Diagram composer</div>
            <h2 id="gc-diagram-title">Mermaid 다이어그램 만들기</h2>
            <p>템플릿에서 시작한 뒤 소스를 직접 다듬을 수 있습니다.</p>
          </div>
          <button type="button" className="gc-icon-button" onClick={onClose} aria-label="다이어그램 만들기 닫기"><X className="gc-icon" /></button>
        </div>
        <div className="gc-template-row" role="tablist" aria-label="다이어그램 템플릿">
          {(Object.keys(TEMPLATE_LABELS) as DiagramTemplateKind[]).map(template => <button key={template} type="button" role="tab" aria-selected={kind === template} className={`gc-template-button${kind === template ? ' is-selected' : ''}`} onClick={() => chooseTemplate(template)}>{TEMPLATE_LABELS[template]}</button>)}
        </div>
        <label className="gc-source-label" htmlFor="gc-diagram-source">Mermaid source</label>
        <textarea id="gc-diagram-source" value={source} onChange={event => setSource(event.target.value)} spellCheck={false} maxLength={100000} />
        <div className="gc-diagram-composer-actions">
          <button type="button" className="gc-button gc-button-quiet" onClick={onClose}>취소</button>
          <button type="button" className="gc-button gc-button-primary" onClick={() => { onCreate(source); onClose(); }}><Plus className="gc-icon" /> 캔버스에 추가</button>
        </div>
      </section>
    </div>
  );
}
