import { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { supabase } from './supabase';
import { CashBook } from './views/CashBook';
import { Calendar } from './views/Calendar';
import { Memo } from './views/Memo';
import { DatevFibu } from './views/DatevFibu';
import { StoreProvider } from './lib/store';

function TopBar({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="topbar">
      <div className="crumbs">
        <a
          href="https://choi01.com"
          className="crumb-home"
          title="choi01.com 메인으로 돌아가기"
          aria-label="choi01 메인으로 돌아가기"
        >
          <span style={{ color: 'var(--accent)', marginRight: '6px' }}>●</span>
          <span>choi01</span>
        </a>
        <span className="crumb-sep">/</span>
        <b>DoGemeinde</b>
      </div>
      <div className="spacer" />
      <div className="row">
        <div className="badge working"><i className="dot" /> Admin Authenticated</div>
        <button onClick={onLogout} className="btn ghost sm">Logout</button>
      </div>
    </div>
  );
}

function Sidebar() {
  const location = useLocation();
  const tabs = [
    { path: '/calendar', label: '📅 일정 (Calendar)' },
    { path: '/cashbook', label: '💵 현금 출납부 (CashBook)' },
    { path: '/memo', label: '📝 회계 메모 (Memo)' },
    { path: '/datev', label: '📊 DATEV-FIBU' },
  ];

  return (
    <div className="sidebar">
      <a
        href="https://choi01.com"
        className="brand"
        title="choi01.com 메인으로 돌아가기"
        aria-label="choi01 메인으로 돌아가기"
      >
        <span className="mark">01</span>
        <span className="name">choi01 <span>/ dogemeinde</span></span>
      </a>
      <div className="nav" style={{ padding: '8px' }}>
        {tabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            className={`nav-item ${location.pathname.startsWith(tab.path) ? 'active' : ''}`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [_session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div className="empty" style={{ minHeight: '100vh', justifyContent: 'center' }}>Loading...</div>;
  }

  /*
  if (!session) {
    return <Login />;
  }
  */

  return (
    <StoreProvider>
      <div className="shell">
        <Sidebar />
        <div className="main">
          <TopBar onLogout={() => supabase.auth.signOut()} />
          <div className="content">
            <Routes>
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/cashbook" element={<CashBook />} />
              <Route path="/memo" element={<Memo />} />
              <Route path="/datev" element={<DatevFibu />} />
              <Route path="*" element={<Navigate to="/datev" />} />
            </Routes>
          </div>
        </div>
      </div>
    </StoreProvider>
  );
}
