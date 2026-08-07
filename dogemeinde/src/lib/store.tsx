import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { AppData } from './types';
import { seedData } from './data';
import { createAdapter, type DbMode } from './db';

interface StoreValue {
  data: AppData;
  ready: boolean;
  mode: DbMode;
  update: (fn: (d: AppData) => AppData) => void;
}

const StoreCtx = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const adapter = useMemo(createAdapter, []);
  const [data, setData] = useState<AppData>(seedData);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;
    void adapter.load().then((loaded) => {
      if (!alive) return;
      if (loaded) setData(loaded);
      setReady(true);
    });
    return () => {
      alive = false;
    };
  }, [adapter]);

  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => void adapter.save(data), 400);
    return () => clearTimeout(t);
  }, [adapter, data, ready]);

  const value = useMemo<StoreValue>(
    () => ({
      data,
      ready,
      mode: adapter.kind,
      update: (fn) => setData((d) => fn(d)),
    }),
    [adapter, data, ready],
  );

  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}

export function useStore(): StoreValue {
  const v = useContext(StoreCtx);
  if (!v) throw new Error('useStore must be used within StoreProvider');
  return v;
}
