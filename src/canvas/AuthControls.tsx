import React from 'react';
import { LogIn, LogOut } from 'lucide-react';
import type { CanvasAuth } from './useCanvasAuth';
import type { BoardPersistence } from './useBoardPersistence';

interface Props {
  readonly auth: CanvasAuth;
  readonly persistence: BoardPersistence;
}

/** Board chrome: a Google sign-in button, or the signed-in user with sign-out. The save-status badge lives in the left chrome piece. */
export const AuthControls: React.FC<Props> = ({ auth, persistence }) => {
  if (!auth.configured || auth.loading) return null;

  if (!auth.user) {
    const switchAccount = auth.notice !== null;
    return (
      <button
        type="button"
        className="gc-button gc-button-primary"
        onClick={() => void (switchAccount ? auth.signOut() : auth.signIn())}
        title={switchAccount ? '로그아웃 후 허용된 Google 계정으로 다시 로그인합니다' : 'Google 계정으로 로그인하면 작업이 자동으로 저장됩니다'}
      >
        <LogIn className="gc-icon" />
        <span>{switchAccount ? '다른 계정으로 로그인' : 'Google로 로그인'}</span>
      </button>
    );
  }

  const label = auth.user.name ?? auth.user.email ?? '로그인됨';
  return (
    <div className="gc-auth" data-canvas-auth>
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
