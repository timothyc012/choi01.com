import React, { useState } from 'react';
import { supabase } from '../supabase';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="empty" style={{ minHeight: '100vh', justifyContent: 'center' }}>
      <div className="panel" style={{ width: '100%', maxWidth: '320px', padding: '24px' }}>
        <h2 style={{ marginTop: 0, marginBottom: '24px', textAlign: 'center' }}>DoGemeinde Admin</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <label className="tiny muted" style={{ display: 'block', marginBottom: '4px' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%', padding: '8px 10px',
                background: 'var(--bg-2)', border: '1px solid var(--line)',
                borderRadius: 'var(--r-sm)', color: 'var(--tx-0)'
              }}
            />
          </div>
          <div>
            <label className="tiny muted" style={{ display: 'block', marginBottom: '4px' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%', padding: '8px 10px',
                background: 'var(--bg-2)', border: '1px solid var(--line)',
                borderRadius: 'var(--r-sm)', color: 'var(--tx-0)'
              }}
            />
          </div>
          {error && <div className="tiny" style={{ color: 'var(--st-blocked)' }}>{error}</div>}
          <button type="submit" className="btn primary" style={{ marginTop: '12px', justifyContent: 'center' }} disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
