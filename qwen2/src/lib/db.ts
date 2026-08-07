import { createClient } from '@supabase/supabase-js';
import type { AppData } from './types';
import { sanitizeData } from './data';

export type DbMode = 'local' | 'supabase';

export interface DbAdapter {
  kind: DbMode;
  load(): Promise<AppData | null>;
  save(data: AppData): Promise<void>;
}

const LOCAL_KEY = 'dogemeinde.qwen2.v1';

function createLocalAdapter(): DbAdapter {
  return {
    kind: 'local',
    async load() {
      try {
        const raw = localStorage.getItem(LOCAL_KEY);
        return raw ? sanitizeData(JSON.parse(raw)) : null;
      } catch {
        return null;
      }
    },
    async save(data) {
      try {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
      } catch {
        /* quota exceeded — keep running in memory */
      }
    },
  };
}

function createSupabaseAdapter(url: string, anonKey: string): DbAdapter {
  const client = createClient(url, anonKey);
  return {
    kind: 'supabase',
    async load() {
      try {
        const { data: row } = await client
          .from('dogemeinde_state')
          .select('data')
          .eq('id', 1)
          .maybeSingle();
        const payload = (row as { data?: unknown } | null)?.data;
        return payload ? sanitizeData(payload) : null;
      } catch {
        return null;
      }
    },
    async save(data) {
      try {
        await client.from('dogemeinde_state').upsert({
          id: 1,
          data,
          updated_at: new Date().toISOString(),
        });
      } catch {
        /* offline — next save retries */
      }
    },
  };
}

export function createAdapter(): DbAdapter {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
  if (url && anonKey) return createSupabaseAdapter(url, anonKey);
  return createLocalAdapter();
}
