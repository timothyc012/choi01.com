import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';

interface EventEntry {
  id: number;
  title: string;
  event_date: string;
  details: string;
}

export function Calendar() {
  const [events, setEvents] = useState<EventEntry[]>([]);
  const [title, setTitle] = useState('');
  const [eventDate, setEventDate] = useState(new Date().toISOString().split('T')[0]);
  const [details, setDetails] = useState('');

  const fetchEvents = async () => {
    const { data } = await supabase.from('events').select('*').order('event_date', { ascending: true });
    if (data) setEvents(data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    
    await supabase.from('events').insert([{ title, event_date: eventDate, details }]);
    setTitle('');
    setDetails('');
    fetchEvents();
  };

  return (
    <div className="panel">
      <div className="panel-head">
        <h3>일정 관리 (Calendar)</h3>
      </div>
      <div className="panel-body">
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '24px', alignItems: 'flex-end' }}>
          <div style={{ flex: 1 }}>
            <label className="tiny muted">Date</label>
            <input type="date" value={eventDate} onChange={e => setEventDate(e.target.value)} style={{ width: '100%', padding: '6px', background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 'var(--r-sm)' }} />
          </div>
          <div style={{ flex: 2 }}>
            <label className="tiny muted">Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="약속, 세금 신고 마감 등" style={{ width: '100%', padding: '6px', background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 'var(--r-sm)' }} />
          </div>
          <div style={{ flex: 2 }}>
            <label className="tiny muted">Details</label>
            <input type="text" value={details} onChange={e => setDetails(e.target.value)} placeholder="메모" style={{ width: '100%', padding: '6px', background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 'var(--r-sm)' }} />
          </div>
          <button type="submit" className="btn primary" style={{ height: '31px' }}>추가</button>
        </form>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {events.map(ev => (
            <div key={ev.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', background: 'var(--bg-2)', border: '1px solid var(--line)', borderRadius: 'var(--r-md)' }}>
              <div className="mono badge accent">{ev.event_date}</div>
              <div style={{ fontWeight: 600 }}>{ev.title}</div>
              <div className="muted">{ev.details}</div>
            </div>
          ))}
          {events.length === 0 && <div className="empty">예정된 일정이 없습니다.</div>}
        </div>
      </div>
    </div>
  );
}
