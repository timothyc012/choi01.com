export interface CashEntry {
  id: string;
  date: string;
  konto: string;
  text: string;
  amount: number;
  beleg: string;
  createdAt: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  beleg: string;
  soll: string;
  haben: string;
  amount: number;
  text: string;
  createdAt: string;
}

export interface CalEvent {
  id: string;
  date: string;
  time: string;
  title: string;
  notes: string;
}

export interface Memo {
  id: string;
  text: string;
  tags: string[];
  createdAt: string;
}

export interface Konto {
  code: string;
  name: string;
}

export interface AppData {
  version: 1;
  cashbook: CashEntry[];
  journal: JournalEntry[];
  events: CalEvent[];
  memos: Memo[];
  kontos: Konto[];
  checklist: Record<string, boolean>;
}
