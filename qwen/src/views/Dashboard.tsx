import { useStore } from '../lib/store';
import { eur, fmtDE, todayISO } from '../lib/format';
import { CLOSING_STEPS } from '../lib/datev';
import type { ViewId } from '../App';

export function Dashboard({ onNavigate }: { onNavigate: (v: ViewId) => void }) {
  const { data } = useStore();
  const month = todayISO().slice(0, 7);
  const today = todayISO();

  const monthEntries = data.cashbook.filter((e) => e.date.startsWith(month));
  const ausgaben = monthEntries.reduce((s, e) => (e.amount < 0 ? s - e.amount : s), 0);
  const einnahmen = monthEntries.reduce((s, e) => (e.amount > 0 ? s + e.amount : 0), 0);

  const upcoming = data.events
    .filter((e) => e.date >= today)
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time))
    .slice(0, 5);

  const recentMemos = [...data.memos]
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 4);

  const done = CLOSING_STEPS.filter((_, i) => data.checklist[`${month}:${i}`]).length;
  const pct = Math.round((done / CLOSING_STEPS.length) * 100);

  const dateLong = new Date().toLocaleDateString('de-DE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <div className="page-head">
        <div>
          <div className="kicker green">Übersicht · 대시보드</div>
          <h1>{dateLong}</h1>
          <div className="sub">이번 달 회계·일정 요약</div>
        </div>
      </div>

      <div className="stats">
        <button className="stat red" onClick={() => onNavigate('cashbook')}>
          <div className="k">이번 달 지출 · Ausgaben</div>
          <div className="v neg">{eur(ausgaben)}</div>
        </button>
        <button className="stat green" onClick={() => onNavigate('cashbook')}>
          <div className="k">이번 달 수입 · Einnahmen</div>
          <div className="v pos">{eur(einnahmen)}</div>
        </button>
        <button className="stat blue" onClick={() => onNavigate('calendar')}>
          <div className="k">예정된 일정 · Termine</div>
          <div className="v blue">{upcoming.length}건</div>
        </button>
        <button className="stat amber" onClick={() => onNavigate('datev')}>
          <div className="k">월마감 · Monatsabschluss</div>
          <div className="v amber">
            {done}/{CLOSING_STEPS.length}
          </div>
        </button>
      </div>

      <div className="grid-2">
        <section className="panel">
          <div className="panel-head">
            <h3>다음 일정</h3>
            <button className="btn ghost sm" onClick={() => onNavigate('calendar')}>
              전체 보기
            </button>
          </div>
          <div className="panel-body">
            {upcoming.length === 0 && <div className="empty">예정된 일정이 없습니다.</div>}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {upcoming.map((ev) => (
                <div key={ev.id} className="row" style={{ gap: 12 }}>
                  <span className="badge info mono">{fmtDE(ev.date)}</span>
                  {ev.time && <span className="mono tiny faint">{ev.time}</span>}
                  <b style={{ fontSize: 13 }}>{ev.title}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panel-head">
            <h3>최근 메모</h3>
            <button className="btn ghost sm" onClick={() => onNavigate('memos')}>
              전체 보기
            </button>
          </div>
          <div className="panel-body">
            {recentMemos.length === 0 && <div className="empty">메모가 없습니다.</div>}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {recentMemos.map((m) => (
                <div key={m.id} className="memo-card">
                  <div style={{ whiteSpace: 'pre-wrap', fontSize: 13 }}>{m.text}</div>
                  <div className="row" style={{ marginTop: 6 }}>
                    <span className="tiny faint mono">
                      {new Date(m.createdAt).toLocaleDateString('de-DE')}
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
          </div>
        </section>
      </div>

      <section className="panel" style={{ marginTop: 16 }}>
        <div className="panel-head">
          <h3>이달의 월마감 (Monatsabschluss)</h3>
          <span className="badge warn">
            <i className="dot" />
            {pct}%
          </span>
        </div>
        <div className="panel-body">
          <div className="progress">
            <i style={{ width: `${pct}%` }} />
          </div>
        </div>
      </section>
    </>
  );
}
