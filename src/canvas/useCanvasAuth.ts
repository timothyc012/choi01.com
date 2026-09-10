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
  email: string;
  logoutUrl: string;
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
        if (res.ok) {
          const me = (await res.json()) as MeResponse;
          setUser({ id: me.email, email: me.email, name: null, avatarUrl: null });
          setLogoutUrl(me.logoutUrl);
        } else {
          setUser(null);
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
