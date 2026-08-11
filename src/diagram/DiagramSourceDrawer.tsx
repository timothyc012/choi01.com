import { Code2, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface DiagramSourceDrawerProps {
  source: string;
  onChange: (source: string) => void;
  onClose: () => void;
}

export function DiagramSourceDrawer({ source, onChange, onClose }: DiagramSourceDrawerProps) {
  const [draft, setDraft] = useState(source);
  useEffect(() => setDraft(source), [source]);
  return (
    <aside className="gc-diagram-drawer" aria-label="Diagram source editor">
      <div className="gc-diagram-drawer-head">
        <div><div className="gc-kicker"><Code2 className="gc-icon" /> Source editor</div><h2>Diagram source</h2></div>
        <button type="button" className="gc-icon-button" onClick={onClose} aria-label="소스 편집기 닫기"><X className="gc-icon" /></button>
      </div>
      <p className="gc-diagram-drawer-copy">Mermaid 문법으로 수정하면 캔버스의 미리보기가 즉시 갱신됩니다.</p>
      <label className="gc-source-label" htmlFor="gc-diagram-drawer-source">Mermaid source</label>
      <textarea id="gc-diagram-drawer-source" value={draft} onChange={event => { const next = event.target.value; setDraft(next); onChange(next); }} spellCheck={false} maxLength={100000} />
      <div className="gc-diagram-drawer-meta">{draft.length.toLocaleString()} / 100,000</div>
    </aside>
  );
}
