import { useCallback, useEffect, useState } from 'react';

export interface CanvasUser {
  /** Verified email from Cloudflare Access; also the board owner id. */
  readonly id: string;
  readonly email: string | null;
  readonly name: string | null;
  readonly avatarUrl: string | null;
}

export interface CanvasAuth {
  /** False when `/api/me` does not exist (plain `vite dev`); login controls stay hidden. */
  readonly configured: boolean;
  readonly loading: boolean;
  readonly user: CanvasUser | null;
  readonly notice: string | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface MeResponse {
  email?: string;
  logoutUrl?: string;
}

export function authNoticeForStatus(status: number): string | null {
  return status === 403
    ? '이 Google 계정은 이 캔버스에 접근할 권한이 없습니다. 허용된 Google 계정으로 다시 로그인해 주세요.'
    : null;
}

/**
 * Login state from the Access session. Login and logout are navigations:
 * `/api/login` is the one Access-protected path, so visiting it runs the
 * Google login and comes back with the session cookie set.
 */
export function useCanvasAuth(): CanvasAuth {
  const [configured, setConfigured] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<CanvasUser | null>(null);
  const [logoutUrl, setLogoutUrl] = useState<string>('/canvas/');
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch('/api/me', { credentials: 'same-origin', headers: { accept: 'application/json' } });
        if (!active) return;
        if (res.status === 404) {
          setConfigured(false);
          return;
        }
        setConfigured(true);
        const me = (await res.json().catch(() => ({}))) as MeResponse;
        if (res.ok) {
          if (!me.email) throw new Error('missing authenticated email');
          setUser({ id: me.email, email: me.email, name: null, avatarUrl: null });
          if (me.logoutUrl) setLogoutUrl(me.logoutUrl);
          setNotice(null);
        } else {
          setUser(null);
          if (me.logoutUrl) setLogoutUrl(me.logoutUrl);
          setNotice(authNoticeForStatus(res.status));
        }
      } catch {
        if (active) setConfigured(false);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  const signIn = useCallback(async () => {
    setNotice(null);
    window.location.assign('/api/login');
  }, []);

  const signOut = useCallback(async () => {
    setUser(null);
    window.location.assign(logoutUrl);
  }, [logoutUrl]);

  return { configured, loading, user, notice, signIn, signOut };
}
