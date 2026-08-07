import { useEffect, useState } from 'react';
import { StoreProvider, useStore } from './lib/store';
import { fmtDE, todayISO } from './lib/format';
import { Dashboard } from './views/Dashboard';
import { CashBook } from './views/CashBook';
import { CalendarView } from './views/CalendarView';
import { Memos } from './views/Memos';
import { DatevFibu } from './views/DatevFibu';

export type ViewId = 'dashboard' | 'cashbook' | 'calendar' | 'memos' | 'datev';

type Accent = 'green' | 'blue' | 'amber';

interface NavDef {
  id: ViewId;
  code: string;
  group: string;
  label: string;
  sub: string;
  path: string;
  accent: Accent;
}

const NAV: NavDef[] = [
  { id: 'dashboard', code: '01', group: 'System', label: '대시보드', sub: 'Übersicht', path: 'uebersicht', accent: 'green' },
  { id: 'cashbook', code: '02', group: 'Arbeit', label: '현금 출납부', sub: 'Kassenbuch', path: 'kassenbuch', accent: 'amber' },
  { id: 'calendar', code: '03', group: 'Arbeit', label: '일정', sub: 'Kalender', path: 'kalender', accent: 'blue' },
  { id: 'memos', code: '04', group: 'Arbeit', label: '회계 메모', sub: 'Notizen', path: 'notizen', accent: 'amber' },
  { id: 'datev', code: '05', group: 'Abschluss', label: 'DATEV-FIBU', sub: 'Monatsabschluss', path: 'datev-fibu', accent: 'amber' },
];

const GROUPS = ['System', 'Arbeit', 'Abschluss'];

function Clock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="clock">
      {fmtDE(todayISO())} ·{' '}
      {now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
    </span>
  );
}

function Shell() {
  const { ready, mode, data } = useStore();
  const [view, setView] = useState<ViewId>('dashboard');

  if (!ready) return <div className="boot">MERIDIAN OS · START…</div>;

  const current = NAV.find((n) => n.id === view)!;

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <span className="mark" aria-hidden="true">
            D
          </span>
          <div>
            <b>DoGemeinde</b>
            <small>Meridian OS</small>
          </div>
        </div>

        <nav className="nav" aria-label="Hauptnavigation">
          {GROUPS.map((group) => (
            <div key={group}>
              <div className="nav-group">{group}</div>
              {NAV.filter((n) => n.group === group).map((n) => (
                <button
                  key={n.id}
                  className={`nav-item accent-${n.accent} ${view === n.id ? 'active' : ''}`}
                  onClick={() => setView(n.id)}
                >
                  <span className="code">{n.code}</span>
                  <span>
                    <span className="label">{n.label}</span>
                    <span className="sub">{n.sub}</span>
                  </span>
                </button>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-foot">
          {mode === 'local'
            ? '데이터가 이 브라우저에 저장됩니다. DATEV-FIBU 탭에서 JSON 백업을 정기적으로 내보내세요.'
            : '데이터가 Supabase와 동기화됩니다.'}
        </div>
      </aside>

      <div className="maincol">
        <header className="topbar">
          <span className="crumbs">
            meridian://dogemeinde/<b>{current.path}</b>
          </span>
          <div className="spacer" />
          <Clock />
          <span className={`badge ${mode === 'local' ? 'warn' : 'ok'}`}>
            <i className="dot" />
            {mode === 'local' ? 'Local Store' : 'Supabase'}
          </span>
        </header>

        <main className="main">
          {view === 'dashboard' && <Dashboard onNavigate={setView} />}
          {view === 'cashbook' && <CashBook />}
          {view === 'calendar' && <CalendarView />}
          {view === 'memos' && <Memos />}
          {view === 'datev' && <DatevFibu />}
        </main>

        <footer className="statusbar">
          <span>Meridian OS 1.0</span>
          <span className="seg-line">·</span>
          <span className={mode === 'local' ? 'warn' : 'ok'}>
            <i className="dot" />
            {mode === 'local' ? 'Lokaler Speicher' : 'Supabase'}
          </span>
          <span className="seg-line hide-sm">·</span>
          <span className="hide-sm">
            {data.cashbook.length + data.journal.length} Buchungen / {data.events.length}{' '}
            Termine / {data.memos.length} Notizen
          </span>
          <div className="spacer" />
          <span className="hide-sm">dogemeinde.choi01.com</span>
        </footer>
      </div>
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
