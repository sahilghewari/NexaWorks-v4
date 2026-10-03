'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Upload, Play, RotateCcw } from 'lucide-react';

type ParsedRow = { account: string; score: number; churned: boolean };

const SCORE_ALIASES = ['health_score', 'healthscore', 'score', 'health', 'rating', 'health score'];
const ACCOUNT_ALIASES = ['account_id', 'accountid', 'account', 'customer_id', 'customer', 'company', 'account_name', 'account name'];
const STATUS_ALIASES = ['status', 'churned', 'churn', 'outcome', 'result', 'lost', 'renewed'];

function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let cur = '', row: string[] = [], inQ = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"') {
        if (text[i + 1] === '"') { cur += '"'; i++; }
        else inQ = false;
      } else cur += c;
    } else if (c === '"') inQ = true;
    else if (c === ',') { row.push(cur); cur = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(cur); cur = '';
      if (row.some((v) => v.trim() !== '')) rows.push(row);
      row = [];
    } else cur += c;
  }
  row.push(cur);
  if (row.some((v) => v.trim() !== '')) rows.push(row);
  return rows;
}

function normScore(v: string): number | null {
  const t = v.trim().toLowerCase();
  if (['red', 'at risk', 'at-risk', 'critical', 'poor', 'unhealthy'].includes(t)) return 25;
  if (['yellow', 'amber', 'watch', 'moderate', 'neutral'].includes(t)) return 60;
  if (['green', 'healthy', 'good', 'strong'].includes(t)) return 90;
  const n = parseFloat(t.replace('%', ''));
  if (isNaN(n)) return null;
  return Math.max(0, Math.min(100, n));
}

function normStatus(v: string): boolean | null {
  const t = v.trim().toLowerCase();
  if (['churned', 'churn', 'yes', 'true', '1', 'lost', 'cancelled', 'canceled', 'inactive', 'did not renew'].includes(t)) return true;
  if (['active', 'no', 'false', '0', 'retained', 'renewed', 'healthy', 'current', 'expanded'].includes(t)) return false;
  return null;
}

function detectColumn(headers: string[], aliases: string[]): number {
  const lower = headers.map((h) => h.trim().toLowerCase());
  for (const a of aliases) {
    const i = lower.indexOf(a);
    if (i >= 0) return i;
  }
  return -1;
}

function mulberry32(seed: number) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function sampleCSV(): string {
  const rnd = mulberry32(42);
  const lines = ['account_id,health_score,status'];
  // 12 churned accounts: scores skew low but noisy (some "green then gone")
  for (let i = 1; i <= 12; i++) {
    const s = i <= 4 ? 55 + Math.floor(rnd() * 35) : 15 + Math.floor(rnd() * 40);
    lines.push(`acct-churn-${String(i).padStart(2, '0')},${s},churned`);
  }
  // 48 healthy accounts: scores skew high with some false alarms
  for (let i = 1; i <= 48; i++) {
    const s = i <= 6 ? 20 + Math.floor(rnd() * 25) : 55 + Math.floor(rnd() * 45);
    lines.push(`acct-active-${String(i).padStart(2, '0')},${Math.min(100, s)},active`);
  }
  return lines.join('\n');
}

export default function HealthScoreBacktester() {
  const [input, setInput] = useState('');
  const [ran, setRan] = useState(false);
  const [error, setError] = useState('');
  const [rows, setRows] = useState<ParsedRow[]>([]);
  const [colMap, setColMap] = useState({ account: -1, score: -1, status: -1 });
  const [headers, setHeaders] = useState<string[]>([]);
  const [threshold, setThreshold] = useState(50);

  const loadFile = (f: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setInput(String(reader.result || ''));
      setRan(false);
      setError('');
    };
    reader.readAsText(f);
  };

  const runTest = (csvText: string) => {
    setError('');
    const grid = parseCSV(csvText.trim());
    if (grid.length < 2) {
      setError('No data rows found. Paste a CSV with a header row plus at least a few accounts.');
      return;
    }
    const hdrs = grid[0];
    if (hdrs.length < 3) {
      setError(`Only ${hdrs.length} column(s) detected — the tool needs three: account, health score, and status. Check your commas.`);
      return;
    }
    const a = detectColumn(hdrs, ACCOUNT_ALIASES);
    const s = detectColumn(hdrs, SCORE_ALIASES);
    const st = detectColumn(hdrs, STATUS_ALIASES);
    if (a < 0 || s < 0 || st < 0) {
      setError('Could not auto-detect all three columns. Use headers like: account_id, health_score, status.');
      return;
    }
    const parsed: ParsedRow[] = [];
    const skipped: number[] = [];
    grid.slice(1).forEach((r, i) => {
      const score = normScore(r[s] ?? '');
      const churned = normStatus(r[st] ?? '');
      if (score === null || churned === null) { skipped.push(i + 2); return; }
      parsed.push({ account: (r[a] ?? `row-${i + 2}`).trim(), score, churned });
    });
    if (parsed.length === 0) {
      setError('No usable rows — scores must be 0–100 (or red/yellow/green) and status must read churned/active (or yes/no).');
      return;
    }
    if (skipped.length > 0 && parsed.length < 5) {
      setError(`${skipped.length} row(s) could not be read and too few valid rows remain (need at least 5).`);
      return;
    }
    setHeaders(hdrs);
    setColMap({ account: a, score: s, status: st });
    setRows(parsed);
    setRan(true);
  };

  const stats = useMemo(() => {
    if (!ran || rows.length === 0) return null;
    const churned = rows.filter((r) => r.churned);
    const healthy = rows.filter((r) => !r.churned);
    const caught = churned.filter((r) => r.score <= threshold).length;
    const falseAlarms = healthy.filter((r) => r.score <= threshold).length;
    return {
      total: rows.length,
      churned: churned.length,
      healthy: healthy.length,
      caught,
      missed: churned.length - caught,
      falseAlarms,
      catchRate: churned.length ? caught / churned.length : null,
      falseAlarmRate: healthy.length ? falseAlarms / healthy.length : null,
    };
  }, [ran, rows, threshold]);

  const verdict = useMemo(() => {
    if (!stats || stats.catchRate === null) return null;
    const pct = Math.round(stats.catchRate * 100);
    if (stats.churned < 3) return { tone: 'neutral', text: `Only ${stats.churned} churned account(s) in this data — the catch rate needs more history to mean anything. Feed it 12+ months if you can.` };
    if (stats.catchRate >= 0.75) return { tone: 'good', text: `Strong. Your score flagged ${pct}% of churn in advance — well ahead of the 82% of CS leaders whose scores catch less than half. The remaining ${stats.missed} slipped through; worth asking what those accounts had in common.` };
    if (stats.catchRate >= 0.5) return { tone: 'mid', text: `Middle of the pack: your score caught ${pct}% of churn, but ${stats.missed} of ${stats.churned} churned accounts walked out unflagged. The misses are where the money is — that is exactly what a back-tested rebuild targets.` };
    return { tone: 'bad', text: `Your score caught ${pct}% of churn — ${stats.missed} of ${stats.churned} churned accounts looked fine until they left. This is the "green then gone" problem, and it is fixable: the score is measuring the wrong things.` };
  }, [stats]);

  const reset = () => {
    setInput(''); setRan(false); setError(''); setRows([]); setThreshold(50);
  };

  return (
    <div className="rounded-2xl p-8 md:p-12" style={{ backgroundColor: 'var(--nw-dark-mid)', border: '1px solid var(--nw-line-dark)' }}>
      {!ran ? (
        <>
          <p className="eyebrow mb-4" style={{ color: 'var(--nw-accent-glow)' }}>Step 1 — Your data</p>
          <h3 className="text-white text-2xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Paste your score history
          </h3>
          <p className="mb-6 leading-relaxed" style={{ color: 'var(--nw-dark-soft)' }}>
            Three columns: <strong className="text-white">account</strong>,{' '}
            <strong className="text-white">health score</strong> (0–100, or red/yellow/green),{' '}
            <strong className="text-white">status</strong> (churned or active). Use the score as it
            stood ~90 days before each outcome. Everything runs in your browser — your data
            never leaves this page.
          </p>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={'account_id,health_score,status\nacme-corp,72,active\ninitech,34,churned\numbrella,81,active'}
            rows={7}
            className="w-full rounded-xl p-4 mb-4 font-mono text-sm"
            style={{ backgroundColor: 'var(--nw-dark)', color: 'var(--nw-warm-400)', border: '1px solid var(--nw-line-dark)' }}
          />
          {error && (
            <p className="mb-4 text-sm" style={{ color: '#f87171' }}>{error}</p>
          )}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => runTest(input)}
              disabled={!input.trim()}
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors disabled:opacity-40"
              style={{ backgroundColor: 'var(--nw-accent)' }}
            >
              <Play size={16} className="mr-2" /> Run back-test
            </button>
            <label
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white cursor-pointer transition-colors"
              style={{ border: '1px solid var(--nw-line-dark)' }}
            >
              <Upload size={16} className="mr-2" /> Upload CSV
              <input type="file" accept=".csv,text/csv" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) loadFile(f); }} />
            </label>
            <button
              onClick={() => { const s = sampleCSV(); setInput(s); setError(''); runTest(s); }}
              className="text-sm underline"
              style={{ color: 'var(--nw-accent-glow)' }}
            >
              Try with sample data
            </button>
          </div>
        </>
      ) : (
        stats && (
          <>
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="eyebrow mb-4" style={{ color: 'var(--nw-accent-glow)' }}>Step 2 — Your result</p>
                <h3 className="text-white text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                  {stats.total} accounts · {stats.churned} churned · {stats.healthy} healthy
                </h3>
              </div>
              <button onClick={reset} className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--nw-dark-soft)' }}>
                <RotateCcw size={14} /> Start over
              </button>
            </div>

            <div className="mb-8">
              <label className="eyebrow mb-3 block" style={{ color: 'var(--nw-dark-soft)' }}>
                At-risk threshold: score ≤ {threshold}
              </label>
              <input
                type="range" min={10} max={90} step={5} value={threshold}
                onChange={(e) => setThreshold(Number(e.target.value))}
                className="w-full" aria-label="At-risk threshold"
              />
              <p className="text-sm mt-2" style={{ color: 'var(--nw-dark-soft)' }}>
                Move it to see the trade-off every score makes: catch more churn, or cry wolf less.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--nw-dark)' }}>
                <p className="eyebrow mb-3" style={{ color: 'var(--nw-dark-soft)', fontSize: '11px' }}>Catch rate</p>
                <p className="text-5xl font-bold mb-3" style={{ color: stats.catchRate !== null && stats.catchRate >= 0.5 ? 'var(--nw-accent-glow)' : '#f87171' }}>
                  {stats.catchRate !== null ? `${Math.round(stats.catchRate * 100)}%` : '—'}
                </p>
                <div className="h-2 rounded-full mb-3 overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="h-full rounded-full" style={{ width: `${(stats.catchRate ?? 0) * 100}%`, backgroundColor: 'var(--nw-accent)' }} />
                </div>
                <p className="text-sm" style={{ color: 'var(--nw-dark-soft)' }}>
                  {stats.caught} of {stats.churned} churned accounts were flagged at-risk in time. {stats.missed} walked out unflagged.
                </p>
              </div>
              <div className="rounded-xl p-8" style={{ backgroundColor: 'var(--nw-dark)' }}>
                <p className="eyebrow mb-3" style={{ color: 'var(--nw-dark-soft)', fontSize: '11px' }}>False alarm rate</p>
                <p className="text-5xl font-bold mb-3 text-white">
                  {stats.falseAlarmRate !== null ? `${Math.round(stats.falseAlarmRate * 100)}%` : '—'}
                </p>
                <div className="h-2 rounded-full mb-3 overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="h-full rounded-full" style={{ width: `${(stats.falseAlarmRate ?? 0) * 100}%`, backgroundColor: 'var(--nw-dark-soft)' }} />
                </div>
                <p className="text-sm" style={{ color: 'var(--nw-dark-soft)' }}>
                  {stats.falseAlarms} of {stats.healthy} healthy accounts were flagged — the noise your CSMs learn to ignore.
                </p>
              </div>
            </div>

            {verdict && (
              <div className="rounded-xl p-8 mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid var(--nw-line-dark)' }}>
                <p className="eyebrow mb-3" style={{ color: 'var(--nw-accent-glow)', fontSize: '11px' }}>The read</p>
                <p className="text-lg leading-relaxed text-white">{verdict.text}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between rounded-xl p-8" style={{ backgroundColor: 'var(--nw-dark)' }}>
              <p className="text-lg text-white max-w-md">
                Want a score that passes this test? We design and back-test health scores on your stack.
              </p>
              <Link
                href="/customer-health-score-consultant"
                className="inline-flex h-12 flex-shrink-0 items-center justify-center rounded-full px-8 text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: 'var(--nw-accent)' }}
              >
                How we build scores <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </>
        )
      )}
    </div>
  );
}
