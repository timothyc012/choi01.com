import React from 'react';
import { LogIn, LogOut } from 'lucide-react';
import type { CanvasAuth } from './useCanvasAuth';
import type { BoardPersistence } from './useBoardPersistence';

interface Props {
  readonly auth: CanvasAuth;
  readonly persistence: BoardPersistence;
}

function statusLabel(persistence: BoardPersistence): { text: string; tone: 'ok' | 'busy' | 'warn' } {
  const time = persistence.savedAt
    ? persistence.savedAt.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    : null;
  switch (persistence.status) {
    case 'loading': return { text: '불러오는 중…', tone: 'busy' };
    case 'saving': return { text: '저장 중…', tone: 'busy' };
    case 'dirty': return { text: '변경됨 · 곧 저장', tone: 'busy' };
    case 'conflict': return { text: '다른 기기에서 저장됨', tone: 'warn' };
    case 'error': return { text: '저장 실패 · 다시 시도합니다', tone: 'warn' };
    case 'saved': return { text: time ? `저장됨 · ${time}` : '저장됨', tone: 'ok' };
    default: return { text: '', tone: 'ok' };
  }
}

/** Header controls: a Google sign-in button, or the signed-in user with save status and sign-out. */
export const AuthControls: React.FC<Props> = ({ auth, persistence }) => {
  if (!auth.configured || auth.loading) return null;

  if (!auth.user) {
    return (
      <button type="button" className="gc-button gc-button-primary" onClick={() => void auth.signIn()} title="Google 계정으로 로그인하면 작업이 자동으로 저장됩니다">
        <LogIn className="gc-icon" />
        <span>Google로 로그인</span>
      </button>
    );
  }

  const status = statusLabel(persistence);
  const label = auth.user.name ?? auth.user.email ?? '로그인됨';
  return (
    <div className="gc-auth" data-canvas-auth>
      {status.text && <span className={`gc-save-status is-${status.tone}`} role="status">{status.text}</span>}
      {auth.user.avatarUrl
        ? <img className="gc-avatar" src={auth.user.avatarUrl} alt="" referrerPolicy="no-referrer" />
        : <span className="gc-avatar gc-avatar-fallback" aria-hidden="true">{label.slice(0, 1).toUpperCase()}</span>}
      <button type="button" className="gc-button gc-button-quiet" onClick={() => void persistence.flush().then(() => auth.signOut())} title={`${label} · 로그아웃`}>
        <LogOut className="gc-icon" />
        <span>로그아웃</span>
      </button>
    </div>
  );
};
