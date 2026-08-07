import { useMemo, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { useStore } from '../lib/store';
import { downloadFile, eur, fmtDE, monthLabelDE, todayISO } from '../lib/format';
import {
  buildBuchungsstapel,
  cashToBooking,
  CLOSING_STEPS,
  journalToBooking,
  KASSE_KONTO,
} from '../lib/datev';
import { parseBackup, seedData, uid } from '../lib/data';

export function DatevFibu() {
  const { data, update, mode } = useStore();
  const [month, setMonth] = useState(() => todayISO().slice(0, 7));
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const [jDate, setJDate] = useState(todayISO);
  const [jBeleg, setJBeleg] = useState('');
  const [jSoll, setJSoll] = useState('4930');
  const [jHaben, setJHaben] = useState(KASSE_KONTO);
  const [jAmount, setJAmount] = useState('');
  const [jText, setJText] = useState('');

  const done = CLOSING_STEPS.filter((_, i) => data.checklist[`${month}:${i}`]).length;
  const pct = Math.round((done / CLOSING_STEPS.length) * 100);

  const journal = useMemo(
    () =>
      data.journal
        .filter((e) => e.date.startsWith(month))
        .sort((a, b) => b.date.localeCompare(a.date) || b.createdAt.localeCompare(a.createdAt)),
    [data.journal, month],
  );

  const kontoLabel = (c: string) => {
    const k = data.kontos.find((x) => x.code === c);
    return k ? `${k.code} ${k.name}` : c;
  };

  function toggle(i: number) {
    const key = `${month}:${i}`;
    update((d) => ({ ...d, checklist: { ...d.checklist, [key]: !d.checklist[key] } }));
  }

  function submitJournal(e: FormEvent) {
    e.preventDefault();
    const value = parseFloat(jAmount.replace(',', '.'));
    if (
      !jSoll.trim() ||
      !jHaben.trim() ||
      jSoll === jHaben ||
      !jText.trim() ||
      !Number.isFinite(value) ||
      value <= 0
    ) {
      return;
    }
    const entry = {
      id: uid(),
      date: jDate,
      beleg: jBeleg.trim(),
      soll: jSoll.trim(),
      haben: jHaben.trim(),
      amount: value,
      text: jText.trim(),
      createdAt: new Date().toISOString(),
    };
    update((d) => ({ ...d, journal: [...d.journal, entry] }));
    setJBeleg('');
    setJAmount('');
    setJText('');
  }

  function removeJournal(id: string) {
    update((d) => ({ ...d, journal: d.journal.filter((e) => e.id !== id) }));
  }

  function addKonto(e: FormEvent) {
    e.preventDefault();
    const c = code.trim();
    if (!c) return;
    update((d) => ({
      ...d,
      kontos: [...d.kontos.filter((k) => k.code !== c), { code: c, name: name.trim() }].sort(
        (a, b) => a.code.localeCompare(b.code),
      ),
    }));
    setCode('');
    setName('');
  }

  function removeKonto(c: string) {
    update((d) => ({ ...d, kontos: d.kontos.filter((k) => k.code !== c) }));
  }

  function exportCsv() {
    const cash = data.cashbook.filter((e) => e.date.startsWith(month)).map(cashToBooking);
    const book = data.journal.filter((e) => e.date.startsWith(month)).map(journalToBooking);
    downloadFile(
      `datev-buchungsstapel-${month}.csv`,
      buildBuchungsstapel([...cash, ...book]),
      'text/csv;charset=utf-8',
    );
  }

  function exportBackup() {
    downloadFile(
      `dogemeinde-backup-${todayISO()}.json`,
      JSON.stringify(data, null, 2),
      'application/json',
    );
  }

  async function importBackup(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    const parsed = parseBackup(await file.text());
    if (!parsed) {
      alert('백업 파일을 읽을 수 없습니다. 형식을 확인하세요.');
      return;
    }
    update(() => parsed);
  }

  function reset() {
    if (confirm('모든 데이터를 초기화할까요? 이 작업은 되돌릴 수 없습니다.')) {
      update(() => seedData());
    }
  }

  return (
    <>
      <div className="page-head">
        <div>
          <div className="kicker amber">DATEV-FIBU · Finanzbuchführung</div>
          <h1>기장 · 월마감</h1>
          <div className="sub">기장(분개) · 월마감 체크리스트 · 계정과목 · DATEV 내보내기</div>
        </div>
        <input
          type="month"
          value={month}
          onChange={(e) => setMonth(e.target.value || todayISO().slice(0, 7))}
          style={{ width: 160 }}
        />
      </div>

      <section className="panel">
        <div className="panel-head">
          <h3>Buchungserfassung — 기장</h3>
          <span className="badge warn">
            <i className="dot" />
            {journal.length} Buchungen
          </span>
        </div>
        <div className="panel-body">
          <form className="form-row" onSubmit={submitJournal} style={{ marginBottom: 14 }}>
            <div className="field" style={{ width: 140, flex: 'none' }}>
              <label>Datum</label>
              <input type="date" value={jDate} onChange={(e) => setJDate(e.target.value)} />
            </div>
            <div className="field" style={{ width: 90, flex: 'none' }}>
              <label>Beleg</label>
              <input value={jBeleg} onChange={(e) => setJBeleg(e.target.value)} placeholder="Nr." />
            </div>
            <div className="field" style={{ flex: 1 }}>
              <label>Soll</label>
              <select value={jSoll} onChange={(e) => setJSoll(e.target.value)}>
                {data.kontos.map((k) => (
                  <option key={k.code} value={k.code}>
                    {k.code} {k.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="field" style={{ flex: 1 }}>
              <label>Haben</label>
              <select value={jHaben} onChange={(e) => setJHaben(e.target.value)}>
                {data.kontos.map((k) => (
                  <option key={k.code} value={k.code}>
                    {k.code} {k.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="field" style={{ width: 110, flex: 'none' }}>
              <label>Betrag €</label>
              <input
                value={jAmount}
                onChange={(e) => setJAmount(e.target.value)}
                placeholder="15,00"
                inputMode="decimal"
              />
            </div>
            <div className="field" style={{ flex: 2 }}>
              <label>Buchungstext</label>
              <input value={jText} onChange={(e) => setJText(e.target.value)} placeholder="분기 내용" />
            </div>
            <button type="submit" className="btn primary" style={{ height: 35, flex: 'none' }}>
              기장
            </button>
          </form>

          {journal.length === 0 ? (
            <div className="empty">
              이 달의 기장 내역이 없습니다. 현금 출납부 기록은 내보내기 시 자동으로 포함됩니다.
            </div>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>Beleg</th>
                  <th>Soll</th>
                  <th>Haben</th>
                  <th style={{ textAlign: 'right' }}>Betrag</th>
                  <th>Buchungstext</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {journal.map((e) => (
                  <tr key={e.id}>
                    <td className="mono">{fmtDE(e.date)}</td>
                    <td className="mono muted">{e.beleg || '—'}</td>
                    <td>
                      <span className="konto-pill">{kontoLabel(e.soll)}</span>
                    </td>
                    <td>
                      <span className="konto-pill">{kontoLabel(e.haben)}</span>
                    </td>
                    <td className="num">{eur(e.amount)}</td>
                    <td>{e.text}</td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="icon-btn" onClick={() => removeJournal(e.id)} title="삭제">
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h3>Monatsabschluss — {monthLabelDE(month)}</h3>
          <div className="row">
            <span className="badge warn">
              <i className="dot" />
              {done}/{CLOSING_STEPS.length}
            </span>
            <button className="btn amber sm" onClick={exportCsv}>
              Buchungsstapel CSV (출납부+기장)
            </button>
          </div>
        </div>
        <div className="panel-body">
          <div className="progress" style={{ marginBottom: 14 }}>
            <i style={{ width: `${pct}%` }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {CLOSING_STEPS.map((step, i) => {
              const checked = !!data.checklist[`${month}:${i}`];
              return (
                <label key={i} className={`check-item ${checked ? 'done' : ''}`}>
                  <input type="checkbox" checked={checked} onChange={() => toggle(i)} />
                  <span className="idx mono">{String(i + 1).padStart(2, '0')}</span>
                  <span className="t">{step}</span>
                </label>
              );
            })}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h3>Kontenplan (계정과목)</h3>
          <span className="panel-tag">SKR03 기반 — 수정 가능</span>
        </div>
        <div className="panel-body">
          <form className="form-row" onSubmit={addKonto} style={{ marginBottom: 14 }}>
            <div className="field" style={{ width: 120, flex: 'none' }}>
              <label>Kontonr.</label>
              <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="4900" />
            </div>
            <div className="field" style={{ flex: 1 }}>
              <label>Bezeichnung</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="계정 이름" />
            </div>
            <button type="submit" className="btn" style={{ height: 35, flex: 'none' }}>
              추가
            </button>
          </form>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: 110 }}>Konto</th>
                <th>Bezeichnung</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {data.kontos.map((k) => (
                <tr key={k.code}>
                  <td className="mono">{k.code}</td>
                  <td>{k.name}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="icon-btn" onClick={() => removeKonto(k.code)} title="삭제">
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h3>Daten &amp; Backup</h3>
          <span className={`badge ${mode === 'local' ? 'warn' : 'ok'}`}>
            <i className="dot" />
            {mode === 'local' ? '브라우저 로컬 저장' : 'Supabase 동기화'}
          </span>
        </div>
        <div className="panel-body">
          <p className="muted" style={{ marginTop: 0, fontSize: 12.5 }}>
            {mode === 'local'
              ? '현재 데이터는 이 브라우저에만 저장됩니다. 아래에서 JSON 백업을 내보내고, 다른 기기에서는 가져오기로 이동할 수 있습니다. Supabase 환경변수(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)를 추가하면 자동으로 클라우드 동기화로 전환됩니다.'
              : '데이터가 Supabase의 dogemeinde_state 테이블에 저장됩니다. JSON 백업도 병행하는 것을 권장합니다.'}
          </p>
          <div className="row">
            <button className="btn" onClick={exportBackup}>
              JSON 백업 내보내기
            </button>
            <button className="btn" onClick={() => fileRef.current?.click()}>
              JSON 백업 가져오기
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              style={{ display: 'none' }}
              onChange={importBackup}
            />
            <button className="btn danger" onClick={reset}>
              초기화
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
