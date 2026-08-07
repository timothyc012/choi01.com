import { useMemo, useState, type FormEvent } from 'react';
import { useStore } from '../lib/store';
import { uid } from '../lib/data';

export function Memos() {
  const { data, update } = useStore();
  const [text, setText] = useState('');
  const [tags, setTags] = useState('');
  const [filter, setFilter] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const allTags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const m of data.memos) {
      for (const t of m.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
    }
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [data.memos]);

  const memos = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...data.memos]
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .filter((m) => (filter ? m.tags.includes(filter) : true))
      .filter((m) => (q ? m.text.toLowerCase().includes(q) : true));
  }, [data.memos, filter, query]);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    const tagList = tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
    update((d) => ({
      ...d,
      memos: [
        ...d.memos,
        { id: uid(), text: text.trim(), tags: tagList, createdAt: new Date().toISOString() },
      ],
    }));
    setText('');
    setTags('');
  }

  function remove(id: string) {
    update((d) => ({ ...d, memos: d.memos.filter((m) => m.id !== id) }));
  }

  return (
    <>
      <div className="page-head">
        <div>
          <div className="kicker amber">Notizen · 회계 메모</div>
          <h1>회계 메모</h1>
          <div className="sub">현금 지출 사유, 영수증 노트, 세무 관련 기억할 사항</div>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="검색…"
          style={{ width: 210 }}
        />
      </div>

      <section className="panel">
        <div className="panel-head">
          <h3>새 메모</h3>
          <span className="panel-tag">Neue Notiz</span>
        </div>
        <div className="panel-body">
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="예: 8월 첫째 주 헌금 중 20€는 별도 지정헌금 — DATEV에서 8400로 분리 기장 필요"
            />
            <div className="row">
              <input
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="태그 (쉼표 구분, 예: DATEV, 세금, 영수증)"
                style={{ flex: 1 }}
              />
              <button type="submit" className="btn primary">
                메모 남기기
              </button>
            </div>
          </form>
        </div>
      </section>

      {allTags.length > 0 && (
        <div className="row" style={{ margin: '16px 0', flexWrap: 'wrap' }}>
          {allTags.map(([t, n]) => (
            <span
              key={t}
              className={`tag ${filter === t ? 'on' : ''}`}
              onClick={() => setFilter(filter === t ? null : t)}
            >
              {t} ({n})
            </span>
          ))}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {memos.length === 0 && <div className="empty">메모가 없습니다.</div>}
        {memos.map((m) => (
          <div key={m.id} className="memo-card">
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ whiteSpace: 'pre-wrap', fontSize: 13.5 }}>{m.text}</div>
              <button className="icon-btn" onClick={() => remove(m.id)} title="삭제">
                ✕
              </button>
            </div>
            <div className="row" style={{ marginTop: 8 }}>
              <span className="tiny faint mono">
                {new Date(m.createdAt).toLocaleString('de-DE', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </span>
              {m.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
