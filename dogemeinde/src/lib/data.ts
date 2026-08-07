import type { AppData, CalEvent, CashEntry, JournalEntry, Konto, Memo } from './types';
import { DEFAULT_KONTOS } from './datev';

export function uid(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function seedData(): AppData {
  return {
    version: 1,
    cashbook: [],
    journal: [],
    events: [],
    memos: [],
    kontos: [...DEFAULT_KONTOS],
    checklist: {},
  };
}

function isObj(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null;
}

function str(v: unknown, fallback = ''): string {
  return typeof v === 'string' ? v : fallback;
}

function sanitizeCash(v: unknown): CashEntry | null {
  if (!isObj(v) || typeof v.id !== 'string' || typeof v.date !== 'string' || typeof v.amount !== 'number') return null;
  return {
    id: v.id,
    date: v.date,
    konto: str(v.konto),
    text: str(v.text),
    amount: v.amount,
    beleg: str(v.beleg),
    createdAt: str(v.createdAt, new Date().toISOString()),
  };
}

function sanitizeEvent(v: unknown): CalEvent | null {
  if (!isObj(v) || typeof v.id !== 'string' || typeof v.date !== 'string') return null;
  return {
    id: v.id,
    date: v.date,
    time: str(v.time),
    title: str(v.title),
    notes: str(v.notes),
  };
}

function sanitizeJournal(v: unknown): JournalEntry | null {
  if (
    !isObj(v) ||
    typeof v.id !== 'string' ||
    typeof v.date !== 'string' ||
    typeof v.amount !== 'number'
  ) {
    return null;
  }
  return {
    id: v.id,
    date: v.date,
    beleg: str(v.beleg),
    soll: str(v.soll),
    haben: str(v.haben),
    amount: Math.abs(v.amount),
    text: str(v.text),
    createdAt: str(v.createdAt, new Date().toISOString()),
  };
}

function sanitizeMemo(v: unknown): Memo | null {
  if (!isObj(v) || typeof v.id !== 'string') return null;
  return {
    id: v.id,
    text: str(v.text),
    tags: Array.isArray(v.tags) ? v.tags.filter((t): t is string => typeof t === 'string') : [],
    createdAt: str(v.createdAt, new Date().toISOString()),
  };
}

function sanitizeKonto(v: unknown): Konto | null {
  if (!isObj(v) || typeof v.code !== 'string') return null;
  return { code: v.code, name: str(v.name) };
}

export function sanitizeData(raw: unknown): AppData | null {
  if (!isObj(raw) || raw.version !== 1) return null;
  if (!Array.isArray(raw.cashbook) || !Array.isArray(raw.events) || !Array.isArray(raw.memos) || !Array.isArray(raw.kontos)) {
    return null;
  }
  if (raw.journal !== undefined && !Array.isArray(raw.journal)) return null;

  const checklist: Record<string, boolean> = {};
  if (isObj(raw.checklist)) {
    for (const [k, v] of Object.entries(raw.checklist)) {
      if (typeof v === 'boolean') checklist[k] = v;
    }
  }

  const kontos = raw.kontos.map(sanitizeKonto).filter((k): k is Konto => k !== null);

  return {
    version: 1,
    cashbook: raw.cashbook.map(sanitizeCash).filter((e): e is CashEntry => e !== null),
    journal: (raw.journal ?? []).map(sanitizeJournal).filter((e): e is JournalEntry => e !== null),
    events: raw.events.map(sanitizeEvent).filter((e): e is CalEvent => e !== null),
    memos: raw.memos.map(sanitizeMemo).filter((m): m is Memo => m !== null),
    kontos: kontos.length > 0 ? kontos : [...DEFAULT_KONTOS],
    checklist,
  };
}

export function parseBackup(raw: string): AppData | null {
  try {
    return sanitizeData(JSON.parse(raw));
  } catch {
    return null;
  }
}
