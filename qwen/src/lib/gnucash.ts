import type { Booking } from './datev';

/* GnuCash CSV export (File → Import → CSV).
   Layout follows the documented generic CSV importer (GnuCash Guide ch. 3):
   - one row per split, "Multi-split" enabled → two consecutive rows form one
     balanced double-entry transaction (Soll first, Haben second)
   - Konto column carries the SKR code; the importer's account-mapping step
     links each code to a GnuCash account once, then the mapping is saved
   - semicolon separated, German decimals, DD.MM.YYYY                   */

export const GNUCASH_COLUMNS = ['Datum', 'Beleg', 'Beschreibung', 'Konto', 'Soll', 'Haben'];

function decDE(n: number): string {
  return n.toFixed(2).replace('.', ',');
}

function dateDE(iso: string): string {
  return `${iso.slice(8, 10)}.${iso.slice(5, 7)}.${iso.slice(0, 4)}`;
}

function csvField(s: string): string {
  return s.replace(/[;\r\n"]/g, ' ').trim();
}

export function buildGnucashCsv(bookings: Booking[]): string {
  const sorted = [...bookings].sort((a, b) => a.date.localeCompare(b.date));
  const rows: string[] = [];
  for (const b of sorted) {
    const datum = dateDE(b.date);
    const beleg = csvField(b.beleg);
    const text = csvField(b.text) || `${b.soll} an ${b.haben}`;
    rows.push([datum, beleg, text, b.soll, decDE(b.amount), ''].join(';'));
    rows.push([datum, beleg, text, b.haben, '', decDE(b.amount)].join(';'));
  }
  return [GNUCASH_COLUMNS.join(';'), ...rows].join('\r\n') + '\r\n';
}
