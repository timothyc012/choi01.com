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

const DATA_COLUMNS: string[] = [
  'Umsatz (ohne Soll/Haben-Kz)',
  'Soll/Haben-Kennzeichen',
  'WKZ Umsatz',
  'Kurs',
  'Basis-Umsatz',
  'WKZ Basis-Umsatz',
  'Konto',
  'Gegenkonto (ohne BU-Schlüssel)',
  'BU-Schlüssel',
  'Belegdatum',
  'Belegfeld 1',
  'Belegfeld 2',
  'Skonto',
  'Buchungstext',
  'Postensperre',
  'Diverse Adressnummer',
  'Geschäftspartnerbank',
  'Sachverhalt',
  'Zinssperre',
  'Beleglink',
  'Beleginfo - Art 1',
  'Beleginfo - Inhalt 1',
  'Beleginfo - Art 2',
  'Beleginfo - Inhalt 2',
  'Beleginfo - Art 3',
  'Beleginfo - Inhalt 3',
  'Beleginfo - Art 4',
  'Beleginfo - Inhalt 4',
  'Beleginfo - Art 5',
  'Beleginfo - Inhalt 5',
  'Beleginfo - Art 6',
  'Beleginfo - Inhalt 6',
  'Beleginfo - Art 7',
  'Beleginfo - Inhalt 7',
  'Beleginfo - Art 8',
  'Beleginfo - Inhalt 8',
  'KOST1 - Kostenstelle',
  'KOST2 - Kostenstelle',
  'Kost-Menge',
  'EU-Land u. UStID (Bestimmung)',
  'EU-Steuersatz (Bestimmung)',
  'Abw. Versteuerungsart',
  'Sachverhalt L+L',
  'Funktionsergänzung L+L',
  'BU 49 Hauptfunktionstyp',
  'BU 49 Hauptfunktionsnummer',
  'BU 49 Funktionsergänzung',
  'Zusatzinformation - Art 1',
  'Zusatzinformation- Inhalt 1',
  'Zusatzinformation - Art 2',
  'Zusatzinformation- Inhalt 2',
  'Zusatzinformation - Art 3',
  'Zusatzinformation- Inhalt 3',
  'Zusatzinformation - Art 4',
  'Zusatzinformation- Inhalt 4',
  'Zusatzinformation - Art 5',
  'Zusatzinformation- Inhalt 5',
  'Zusatzinformation - Art 6',
  'Zusatzinformation- Inhalt 6',
  'Zusatzinformation - Art 7',
  'Zusatzinformation- Inhalt 7',
  'Zusatzinformation - Art 8',
  'Zusatzinformation- Inhalt 8',
  'Zusatzinformation - Art 9',
  'Zusatzinformation- Inhalt 9',
  'Zusatzinformation - Art 10',
  'Zusatzinformation- Inhalt 10',
  'Zusatzinformation - Art 11',
  'Zusatzinformation- Inhalt 11',
  'Zusatzinformation - Art 12',
  'Zusatzinformation- Inhalt 12',
  'Zusatzinformation - Art 13',
  'Zusatzinformation- Inhalt 13',
  'Zusatzinformation - Art 14',
  'Zusatzinformation- Inhalt 14',
  'Zusatzinformation - Art 15',
  'Zusatzinformation- Inhalt 15',
  'Zusatzinformation - Art 16',
  'Zusatzinformation- Inhalt 16',
  'Zusatzinformation - Art 17',
  'Zusatzinformation- Inhalt 17',
  'Zusatzinformation - Art 18',
  'Zusatzinformation- Inhalt 18',
  'Zusatzinformation - Art 19',
  'Zusatzinformation- Inhalt 19',
  'Zusatzinformation - Art 20',
  'Zusatzinformation- Inhalt 20',
  'Stück',
  'Gewicht',
  'Zahlweise',
  'Forderungsart',
  'Veranlagungsjahr',
  'Zugeordnete Fälligkeit',
  'Skontotyp',
  'Auftragsnummer',
  'Buchungstyp',
  'USt-Schlüssel (Anzahlungen)',
  'EU-Land (Anzahlungen)',
  'Sachverhalt L+L (Anzahlungen)',
  'EU-Steuersatz (Anzahlungen)',
  'Erlöskonto (Anzahlungen)',
  'Herkunft-Kz',
  'Buchungs GUID',
  'KOST-Datum',
  'SEPA-Mandatsreferenz',
  'Skontosperre',
  'Gesellschaftername',
  'Beteiligtennummer',
  'Identifikationsnummer',
  'Zeichnernummer',
  'Postensperre bis',
  'Bezeichnung SoBil-Sachverhalt',
  'Kennzeichen SoBil-Buchung',
  'Festschreibung',
  'Leistungsdatum',
  'Datum Zuord. Steuerperiode',
  'Fälligkeit',
  'Generalumkehr (GU)',
  'Steuersatz',
  'Land',
  'Abrechnungsreferenz',
  'BVV-Position',
  'EU-Land u. UStID (Ursprung)',
  'EU-Steuersatz (Ursprung)',
];

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function decDE(n: number): string {
  return n.toFixed(2).replace('.', ',');
}

function csvText(s: string, maxLen: number): string {
  const t = s.replace(/[\r\n;]/g, ' ').trim().slice(0, maxLen);
  return `"${t.replace(/"/g, '""')}"`;
}

export interface DatevOptions {
  beraterNr?: string;
  mandantNr?: string;
}

export function datevFileName(month: string): string {
  return `EXTF_Buchungsstapel_${month.replace('-', '')}01.csv`;
}

export function buildDatevFile(bookings: Booking[], month: string, opts: DatevOptions = {}): string {
  const [yearStr, monthStr] = month.split('-');
  const year = Number(yearStr);
  const mon = Number(monthStr);
  const lastDay = new Date(year, mon, 0).getDate();
  const von = `${yearStr}${monthStr}01`;
  const bis = `${yearStr}${monthStr}${pad2(lastDay)}`;

  const now = new Date();
  const created =
    `${now.getFullYear()}${pad2(now.getMonth() + 1)}${pad2(now.getDate())}` +
    `${pad2(now.getHours())}${pad2(now.getMinutes())}${pad2(now.getSeconds())}` +
    String(now.getMilliseconds()).padStart(3, '0');

  const metadata = [
    '"EXTF"',
    '700',
    '21',
    '"Buchungsstapel"',
    '12',
    created,
    '',
    '""',
    '""',
    '""',
    opts.beraterNr ?? '',
    opts.mandantNr ?? '',
    `${yearStr}0101`,
    '4',
    von,
    bis,
    `"Buchungsstapel ${von}"`,
    '""',
    '1',
    '0',
    '0',
    '"EUR"',
    '',
    '""',
    '',
    '',
    '',
    '',
    '',
    '""',
    '""',
  ];

  const sorted = [...bookings].sort((a, b) => a.date.localeCompare(b.date));
  const rows = sorted.map((b) => {
    const f = new Array<string>(DATA_COLUMNS.length).fill('');
    f[0] = decDE(b.amount);
    f[1] = '"S"';
    f[2] = '"EUR"';
    f[6] = b.soll;
    f[7] = b.haben;
    f[8] = '""';
    f[9] = b.date.slice(8, 10) + b.date.slice(5, 7);
    f[10] = csvText(b.beleg, 36);
    f[13] = csvText(b.text, 60);
    return f.join(';');
  });

  return '\uFEFF' + [metadata.join(';'), DATA_COLUMNS.join(';'), ...rows].join('\r\n') + '\r\n';
}
