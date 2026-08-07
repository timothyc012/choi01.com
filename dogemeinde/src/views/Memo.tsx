import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';

interface MemoEntry {
  id: number;
  content: string;
  tags: string;
  created_at: string;
}

export function Memo() {
  const [memos, setMemos] = useState<MemoEntry[]>([]);
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const fetchMemos = async () => {
    const { data } = await supabase.from('memos').select('*').order('created_at', { ascending: false });
    if (data) setMemos(data);
  };

  useEffect(() => {
    fetchMemos();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content) return;
    
    await supabase.from('memos').insert([{ content, tags }]);
    setContent('');
    setTags('');
    fetchMemos();
  };

  return (
    <div className="panel">
      <div className="panel-head">
        <h3>회계 메모 (Memo)</h3>
      </div>
      <div className="panel-body">
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
          <div>
            <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="회계 관련 노트, 영수증 팩트 등 메모..." style={{ width: '100%', minHeight: '80px', padding: '12px', background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 'var(--r-md)', resize: 'vertical' }} />
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input type="text" value={tags} onChange={e => setTags(e.target.value)} placeholder="태그 (예: DATEV, 세금)" style={{ flex: 1, padding: '6px', background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 'var(--r-sm)' }} />
            <button type="submit" className="btn primary">메모 남기기</button>
          </div>
        </form>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
          {memos.map(memo => (
            <div key={memo.id} style={{ padding: '16px', background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 'var(--r-md)' }}>
              <div style={{ marginBottom: '8px', whiteSpace: 'pre-wrap' }}>{memo.content}</div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span className="tiny muted mono">{new Date(memo.created_at).toLocaleString()}</span>
                {memo.tags && memo.tags.split(',').map(t => (
                  <span key={t} className="badge review">{t.trim()}</span>
                ))}
              </div>
            </div>
          ))}
          {memos.length === 0 && <div className="empty">등록된 메모가 없습니다.</div>}
        </div>
      </div>
    </div>
  );
}
