import { useState } from 'react';
import { StoreProvider, useStore } from './lib/store';
import { fmtDE, todayISO } from './lib/format';
import { Dashboard } from './views/Dashboard';
import { CashBook } from './views/CashBook';
import { CalendarView } from './views/CalendarView';
import { Memos } from './views/Memos';
import { DatevFibu } from './views/DatevFibu';

export type ViewId = 'dashboard' | 'cashbook' | 'calendar' | 'memos' | 'datev';

const NAV: { id: ViewId; label: string; sub: string }[] = [
  { id: 'dashboard', label: '대시보드', sub: 'Overview' },
  { id: 'cashbook', label: '현금 출납부', sub: 'CashBook' },
  { id: 'calendar', label: '일정', sub: 'Calendar' },
  { id: 'memos', label: '회계 메모', sub: 'Memos' },
  { id: 'datev', label: 'DATEV-FIBU', sub: 'Buchungserfassung' },
];

function Shell() {
  const { ready, mode, data } = useStore();
  const [view, setView] = useState<ViewId>('dashboard');

  if (!ready) return <div className="boot">MERIDIAN OS · LOADING…</div>;

  const current = NAV.find((n) => n.id === view)!;
  const totalBookings = data.cashbook.length + data.journal.length;

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="mark" />
          <div>
            <b>DoGemeinde</b>
            <small>Meridian OS</small>
          </div>
        </div>
        <nav className="nav">
          {NAV.map((n) => (
            <button
              key={n.id}
              className={`nav-item ${view === n.id ? 'active' : ''}`}
              onClick={() => setView(n.id)}
            >
              <span>{n.label}</span>
              <small>{n.sub}</small>
            </button>
          ))}
        </nav>
        <div className="sidebar-foot">
          {mode === 'local'
            ? '데이터가 이 브라우저에 저장됩니다. DATEV-FIBU 탭에서 JSON 백업을 정기적으로 내보내세요.'
            : 'Supabase 프로젝트와 동기화됩니다.'}
        </div>
      </aside>

      <header className="topbar">
        <div className="crumbs">
          DoGemeinde / <b>{current.label}</b>
        </div>
        <div className="spacer" />
        <span className="mono tiny muted">{fmtDE(todayISO())}</span>
        <span className={`badge ${mode === 'local' ? 'warn' : 'ok'}`}>
          <i className="dot" />
          {mode === 'local' ? 'Local Store' : 'Supabase'}
        </span>
        <span className="badge ok">
          <i className="dot" />
          {totalBookings} Buchungen
        </span>
      </header>

      <main className="main">
        {view === 'dashboard' && <Dashboard onNavigate={setView} />}
        {view === 'cashbook' && <CashBook />}
        {view === 'calendar' && <CalendarView />}
        {view === 'memos' && <Memos />}
        {view === 'datev' && <DatevFibu />}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Shell />
    </StoreProvider>
  );
}
