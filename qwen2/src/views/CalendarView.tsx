import { useMemo, useState, type FormEvent } from 'react';
import { useStore } from '../lib/store';
import { fmtDE, monthTitleKR, toISO, todayISO, WEEKDAYS } from '../lib/format';
import { uid } from '../lib/data';
import type { CalEvent } from '../lib/types';

function monthCells(year: number, month: number): Date[] {
  const firstDow = (new Date(year, month, 1).getDay() + 6) % 7;
  const cells: Date[] = [];
  for (let i = 0; i < 42; i++) {
    cells.push(new Date(year, month, 1 - firstDow + i));
  }
  return cells;
}

export function CalendarView() {
  const { data, update } = useStore();
  const now = new Date();
  const [cursor, setCursor] = useState(() => ({ y: now.getFullYear(), m: now.getMonth() }));
  const [selected, setSelected] = useState(todayISO);
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const cells = useMemo(() => monthCells(cursor.y, cursor.m), [cursor]);

  const byDate = useMemo(() => {
    const map = new Map<string, CalEvent[]>();
    for (const ev of data.events) {
      const list = map.get(ev.date) ?? [];
      list.push(ev);
      map.set(ev.date, list);
    }
    for (const list of map.values()) list.sort((a, b) => a.time.localeCompare(b.time));
    return map;
  }, [data.events]);

  const dayEvents = byDate.get(selected) ?? [];
  const today = todayISO();

  function move(delta: number) {
    setCursor((c) => {
      const d = new Date(c.y, c.m + delta, 1);
      return { y: d.getFullYear(), m: d.getMonth() };
    });
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    const ev: CalEvent = {
      id: uid(),
      date: selected,
      time,
      title: title.trim(),
      notes: notes.trim(),
    };
    update((d) => ({ ...d, events: [...d.events, ev] }));
    setTitle('');
    setTime('');
    setNotes('');
  }

  function remove(id: string) {
    update((d) => ({ ...d, events: d.events.filter((e) => e.id !== id) }));
  }

  return (
    <>
      <div className="page-head">
        <div>
          <h1>일정 (Calendar)</h1>
          <div className="sub">모임·헌금·세무 신고 마감일 관리</div>
        </div>
        <div className="cal-head">
          <button className="btn sm" onClick={() => move(-1)}>
            ←
          </button>
          <b className="mono" style={{ minWidth: 110, textAlign: 'center' }}>
            {monthTitleKR(cursor.y, cursor.m)}
          </b>
          <button className="btn sm" onClick={() => move(1)}>
            →
          </button>
        </div>
      </div>

      <div className="grid-2" style={{ gridTemplateColumns: 'minmax(0, 1.7fr) minmax(280px, 1fr)' }}>
        <section className="panel">
          <div className="panel-body" style={{ padding: 10 }}>
            <div className="cal-grid">
              {WEEKDAYS.map((w) => (
                <div key={w} className="cal-dow">
                  {w}
                </div>
              ))}
              {cells.map((d) => {
                const iso = toISO(d);
                const evs = byDate.get(iso) ?? [];
                const cls = [
                  'cal-cell',
                  d.getMonth() !== cursor.m ? 'out' : '',
                  iso === selected ? 'sel' : '',
                  iso === today ? 'today' : '',
                ]
                  .filter(Boolean)
                  .join(' ');
                return (
                  <div key={iso} className={cls} onClick={() => setSelected(iso)}>
                    <span className="d">{d.getDate()}</span>
                    {evs.slice(0, 3).map((ev) => (
                      <span key={ev.id} className="chip">
                        {ev.time && `${ev.time} `}
                        {ev.title}
                      </span>
                    ))}
                    {evs.length > 3 && <span className="chip more">+{evs.length - 3}</span>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panel-head">
            <h3>{fmtDE(selected)}</h3>
            <span className="badge ok">
              <i className="dot" />
              {dayEvents.length}건
            </span>
          </div>
          <div className="panel-body">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
              {dayEvents.length === 0 && <div className="empty">일정이 없습니다.</div>}
              {dayEvents.map((ev) => (
                <div key={ev.id} className="memo-card">
                  <div className="row" style={{ justifyContent: 'space-between' }}>
                    <b style={{ fontSize: 13 }}>
                      {ev.time && <span className="mono muted">{ev.time} · </span>}
                      {ev.title}
                    </b>
                    <button className="icon-btn" onClick={() => remove(ev.id)} title="삭제">
                      ✕
                    </button>
                  </div>
                  {ev.notes && (
                    <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                      {ev.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div className="row">
                <div className="field" style={{ flex: 2 }}>
                  <label>Titel</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="일정 제목"
                  />
                </div>
                <div className="field" style={{ flex: 1 }}>
                  <label>Zeit</label>
                  <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
              </div>
              <div className="field">
                <label>Notizen</label>
                <input
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="메모 (선택)"
                />
              </div>
              <button type="submit" className="btn primary" style={{ alignSelf: 'flex-start' }}>
                일정 추가
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
