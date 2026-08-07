import { useMemo, useState, type FormEvent } from 'react';
import { useStore } from '../lib/store';
import { downloadFile, eur, fmtDE, todayISO } from '../lib/format';
import { buildBuchungsstapel, cashToBooking, journalToBooking } from '../lib/datev';
import { uid } from '../lib/data';

export function CashBook() {
  const { data, update } = useStore();
  const [month, setMonth] = useState(() => todayISO().slice(0, 7));
  const [date, setDate] = useState(todayISO);
  const [dir, setDir] = useState<'aus' | 'ein'>('aus');
  const [konto, setKonto] = useState('4930');
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [beleg, setBeleg] = useState('');

  const entries = useMemo(
    () =>
      data.cashbook
        .filter((e) => e.date.startsWith(month))
        .sort((a, b) => b.date.localeCompare(a.date) || b.createdAt.localeCompare(a.createdAt)),
    [data.cashbook, month],
  );

  const ausgaben = entries.reduce((s, e) => (e.amount < 0 ? s - e.amount : s), 0);
  const einnahmen = entries.reduce((s, e) => (e.amount > 0 ? s + e.amount : 0), 0);
  const saldo = einnahmen - ausgaben;

  const kontoName = (code: string) => data.kontos.find((k) => k.code === code)?.name ?? '';

  function submit(e: FormEvent) {
    e.preventDefault();
    const value = parseFloat(amount.replace(',', '.'));
    if (!text.trim() || !konto.trim() || !Number.isFinite(value) || value <= 0) return;
    const entry = {
      id: uid(),
      date,
      konto: konto.trim(),
      text: text.trim(),
      amount: dir === 'aus' ? -value : value,
      beleg: beleg.trim(),
      createdAt: new Date().toISOString(),
    };
    update((d) => ({ ...d, cashbook: [...d.cashbook, entry] }));
    setText('');
    setAmount('');
    setBeleg('');
  }

  function remove(id: string) {
    update((d) => ({ ...d, cashbook: d.cashbook.filter((e) => e.id !== id) }));
  }

  function exportCsv() {
    const cash = entries.map(cashToBooking);
    const book = data.journal.filter((e) => e.date.startsWith(month)).map(journalToBooking);
    downloadFile(
      `datev-buchungsstapel-${month}.csv`,
      buildBuchungsstapel([...cash, ...book]),
      'text/csv;charset=utf-8',
    );
  }

  return (
    <>
      <div className="page-head">
        <div>
          <div className="kicker amber">Kassenbuch · 출납부</div>
          <h1>현금 출납부</h1>
          <div className="sub">현금 지출·수입 기록 — DATEV-FIBU 계정에 연결</div>
        </div>
        <div className="row">
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value || todayISO().slice(0, 7))}
            style={{ width: 165 }}
          />
          <button className="btn amber" onClick={exportCsv} disabled={entries.length === 0}>
            DATEV CSV 내보내기
          </button>
        </div>
      </div>

      <div className="stats">
        <div className="stat red">
          <div className="k">지출 · Ausgaben</div>
          <div className="v neg">{eur(ausgaben)}</div>
        </div>
        <div className="stat green">
          <div className="k">수입 · Einnahmen</div>
          <div className="v pos">{eur(einnahmen)}</div>
        </div>
        <div className="stat amber">
          <div className="k">잔액 · Saldo</div>
          <div className={`v ${saldo < 0 ? 'neg' : 'pos'}`}>{eur(saldo)}</div>
        </div>
        <div className="stat">
          <div className="k">기록 · Buchungen</div>
          <div className="v">{entries.length}</div>
        </div>
      </div>

      <section className="panel">
        <div className="panel-head">
          <h3>새 기록</h3>
          <span className="panel-tag">Neue Buchung</span>
        </div>
        <div className="panel-body">
          <form className="form-row" onSubmit={submit}>
            <div className="field" style={{ width: 150, flex: 'none' }}>
              <label>Datum</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="field" style={{ flex: 'none' }}>
              <label>Art</label>
              <div className="seg">
                <button
                  type="button"
                  className={dir === 'aus' ? 'on neg' : ''}
                  onClick={() => setDir('aus')}
                >
                  지출
                </button>
                <button
                  type="button"
                  className={dir === 'ein' ? 'on pos' : ''}
                  onClick={() => setDir('ein')}
                >
                  수입
                </button>
              </div>
            </div>
            <div className="field" style={{ width: 200, flex: 'none' }}>
              <label>Konto</label>
              <input
                list="kontenliste"
                value={konto}
                onChange={(e) => setKonto(e.target.value)}
                placeholder="4930"
              />
              <datalist id="kontenliste">
                {data.kontos.map((k) => (
                  <option key={k.code} value={k.code} label={`${k.name}`} />
                ))}
              </datalist>
            </div>
            <div className="field" style={{ flex: 3, minWidth: 180 }}>
              <label>Buchungstext</label>
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="예: 사무용품 구입 (Büromaterial)"
              />
            </div>
            <div className="field" style={{ width: 110, flex: 'none' }}>
              <label>Betrag €</label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="15,00"
                inputMode="decimal"
              />
            </div>
            <div className="field" style={{ width: 100, flex: 'none' }}>
              <label>Beleg</label>
              <input value={beleg} onChange={(e) => setBeleg(e.target.value)} placeholder="Nr." />
            </div>
            <button type="submit" className="btn primary" style={{ height: 37, flex: 'none' }}>
              추가
            </button>
          </form>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h3>Buchungsjournal</h3>
          <span className="panel-tag">{fmtDE(`${month}-01`).slice(3)}</span>
        </div>
        {entries.length === 0 ? (
          <div className="empty">이 달의 기록이 없습니다.</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Datum</th>
                <th>Beleg</th>
                <th>Konto</th>
                <th>Buchungstext</th>
                <th style={{ textAlign: 'right' }}>Betrag</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={e.id}>
                  <td className="mono">{fmtDE(e.date)}</td>
                  <td className="mono faint">{e.beleg || '—'}</td>
                  <td>
                    <span className="konto-pill">
                      {e.konto}
                      {kontoName(e.konto) && <span className="konto-name">{kontoName(e.konto)}</span>}
                    </span>
                  </td>
                  <td>{e.text}</td>
                  <td className={`num ${e.amount < 0 ? 'neg' : 'pos'}`}>{eur(e.amount)}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="icon-btn" onClick={() => remove(e.id)} title="삭제">
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
}
