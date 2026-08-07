import type { CashEntry, JournalEntry, Konto } from './types';

export const KASSE_KONTO = '1000';

export const DEFAULT_KONTOS: Konto[] = [
  { code: '1000', name: 'Kasse' },
  { code: '1200', name: 'Bank' },
  { code: '4210', name: 'Miete' },
  { code: '4250', name: 'Gas/Strom/Wasser' },
  { code: '4600', name: 'Werbekosten' },
  { code: '4910', name: 'Telefon/Internet' },
  { code: '4930', name: 'Büromaterial' },
  { code: '4940', name: 'Zeitschriften/Bücher' },
  { code: '4955', name: 'Buchführungskosten' },
  { code: '8400', name: 'Spenden' },
];

export const CLOSING_STEPS: string[] = [
  'Kassenbestand zählen — Kassenbuch mit Ist-Bestand abstimmen',
  'Alle Belege erfasst, nummeriert und abgelegt',
  'Bankkonto abgestimmt (Kontoauszüge vollständig gebucht)',
  'Offene Posten (OPOS) geprüft',
  'USt-Voranmeldung erstellt und übermittelt (falls erforderlich)',
  'BWA erstellt und geprüft',
  'DATEV-Buchungsstapel exportiert → DATEV-FIBU / Kanzlei',
  'Monatsabschluss mit Vorstand/Kanzlei abgestimmt',
];

const DATEV_COLUMNS = [
  'Umsatz',
  'Soll/Haben',
  'WKZ',
  'Kurs',
  'BasisUmsatz',
  'WKZBasis',
  'Konto',
  'Gegenkonto',
  'Datum',
  'Belegfeld1',
  'Belegfeld2',
  'Skonto',
  'Buchungstext',
  'Postensperre',
  'DiverseAdressNr',
  'Geschäftspartnerbank',
  'Sachverhalt',
  'Zinssperre',
  'Beleglink',
];

function decDE(n: number): string {
  return n.toFixed(2).replace('.', ',');
}

function csvField(s: string): string {
  return s.replace(/[;\r\n"]/g, ' ').trim();
}

export interface Booking {
  date: string;
  beleg: string;
  soll: string;
  haben: string;
  amount: number;
  text: string;
}

export function cashToBooking(e: CashEntry): Booking {
  const ausgabe = e.amount < 0;
  return {
    date: e.date,
    beleg: e.beleg,
    soll: ausgabe ? e.konto : KASSE_KONTO,
    haben: ausgabe ? KASSE_KONTO : e.konto,
    amount: Math.abs(e.amount),
    text: e.text,
  };
}

export function journalToBooking(e: JournalEntry): Booking {
  return {
    date: e.date,
    beleg: e.beleg,
    soll: e.soll,
    haben: e.haben,
    amount: Math.abs(e.amount),
    text: e.text,
  };
}

export function buildBuchungsstapel(bookings: Booking[]): string {
  const sorted = [...bookings].sort((a, b) => a.date.localeCompare(b.date));
  const rows = sorted.map((b) => {
    const datum = b.date.slice(8, 10) + b.date.slice(5, 7);
    return [
      decDE(b.amount),
      'S',
      'EUR',
      '',
      '',
      '',
      b.soll,
      b.haben,
      datum,
      csvField(b.beleg),
      '',
      '',
      csvField(b.text),
      '',
      '',
      '',
      '',
      '',
      '',
    ].join(';');
  });
  return [DATEV_COLUMNS.join(';'), ...rows].join('\r\n') + '\r\n';
}
