'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, RotateCcw, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

type Answer = 2 | 1 | 0 | null;

interface Question {
  id: string;
  source: string;
  sourcePage: string;
  text: string;
  hint: string;
}

const QUESTIONS: Question[] = [
  // CRM (3)
  { id: 'crm1', source: 'CRM', sourcePage: '/signals/crm', text: 'Do you track champion and stakeholder role changes per account?', hint: 'Title changes, sponsor departures, new economic buyers appearing.' },
  { id: 'crm2', source: 'CRM', sourcePage: '/signals/crm', text: 'Do you monitor renewal close-date pushes as a risk signal?', hint: 'A pushed close date is often the first commercial sign of trouble.' },
  { id: 'crm3', source: 'CRM', sourcePage: '/signals/crm', text: 'Do you track days since last meaningful champion activity?', hint: 'Not any activity — activity by the people who decide the renewal.' },
  // Calls (3)
  { id: 'call1', source: 'Call transcripts', sourcePage: '/signals/call-transcripts', text: 'Are your customer calls recorded and transcribed?', hint: 'Gong, Chorus, Fireflies — or any transcript pipeline.' },
  { id: 'call2', source: 'Call transcripts', sourcePage: '/signals/call-transcripts', text: 'Do you track who stops showing up to recurring calls?', hint: 'Absence patterns appear before complaints.' },
  { id: 'call3', source: 'Call transcripts', sourcePage: '/signals/call-transcripts', text: 'Do you trend sentiment per account over time?', hint: 'Tone shifts before language does — but only visible across 90 days.' },
  // Tickets (3)
  { id: 'tick1', source: 'Support tickets', sourcePage: '/signals/support-tickets', text: 'Do you track ticket sentiment, not just volume and CSAT?', hint: 'Written frustration is deliberate — volume alone misses it.' },
  { id: 'tick2', source: 'Support tickets', sourcePage: '/signals/support-tickets', text: 'Do you compare ticket volume against each account\u2019s own baseline?', hint: 'A spike means nothing without the account\u2019s normal.' },
  { id: 'tick3', source: 'Support tickets', sourcePage: '/signals/support-tickets', text: 'Do you flag cancellation-adjacent language in tickets?', hint: '\u201cWe\u2019ve asked three times\u201d, export questions, contract mentions.' },
  // Product (3)
  { id: 'prod1', source: 'Product usage', sourcePage: '/signals/product-usage', text: 'Do you track per-account usage against its own peak?', hint: 'Not logins — the account\u2019s core workflow against its best month.' },
  { id: 'prod2', source: 'Product usage', sourcePage: '/signals/product-usage', text: 'Do you monitor power-user activity individually?', hint: 'Averages hide the two users whose departure predicts churn.' },
  { id: 'prod3', source: 'Product usage', sourcePage: '/signals/product-usage', text: 'Do you track feature breadth — distinct features touched per month?', hint: 'Breadth without depth is shelfware; depth without breadth is fragile.' },
  // Billing (2)
  { id: 'bill1', source: 'Billing', sourcePage: '/signals/billing-payments', text: 'Do you track days-to-pay against each account\u2019s own history?', hint: 'Process delays vs intent changes — the history tells them apart.' },
  { id: 'bill2', source: 'Billing', sourcePage: '/signals/billing-payments', text: 'Do you monitor seat or ARR contraction before renewal?', hint: 'Contraction usually precedes the churn conversation.' },
  // Email/Slack (1)
  { id: 'rel1', source: 'Relationship', sourcePage: '/signals/email-slack', text: 'Do you track champion responsiveness — reply latency or participation patterns?', hint: 'Responsiveness is a measurable proxy for priority.' },
];

const SOURCES = ['CRM', 'Call transcripts', 'Support tickets', 'Product usage', 'Billing', 'Relationship'];

function verdictFor(total: number): { title: string; text: string; icon: 'bad' | 'warn' | 'good' } {
  if (total <= 10)
    return {
      title: 'Flying blind',
      text: 'Your stack captures almost none of the signals that precede churn. The good news: the data mostly exists already — it just isn\u2019t being read together. The gaps below are ordered by impact.',
      icon: 'bad',
    };
  if (total <= 20)
    return {
      title: 'Patchy coverage',
      text: 'You catch the loud signals and miss the quiet ones — which are the ones that arrive early enough to act on. The gaps below show where the cheapest wins are.',
      icon: 'warn',
    };
  return {
    title: 'Solid foundation',
    text: 'You\u2019re ahead of most teams. The remaining gaps are about joining the sources together — the per-source work is largely done.',
    icon: 'good',
  };
}

export default function SignalStackAudit() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showResults, setShowResults] = useState(false);

  const answered = Object.values(answers).filter((a) => a !== null && a !== undefined).length;
  const total = useMemo(
    () => Object.values(answers).reduce<number>((s, a) => s + (a ?? 0), 0),
    [answers]
  );

  const perSource = useMemo(() => {
    return SOURCES.map((source) => {
      const qs = QUESTIONS.filter((q) => q.source === source);
      const max = qs.length * 2;
      const got = qs.reduce((s, q) => s + (answers[q.id] ?? 0), 0);
      const page = qs[0].sourcePage;
      return { source, page, got, max, pct: Math.round((got / max) * 100) };
    }).sort((a, b) => a.pct - b.pct);
  }, [answers]);

  const verdict = verdictFor(total);
  const VerdictIcon = verdict.icon === 'bad' ? XCircle : verdict.icon === 'warn' ? AlertTriangle : CheckCircle2;
  const verdictColor = verdict.icon === 'bad' ? '#dc2626' : verdict.icon === 'warn' ? '#b45309' : '#15803d';

  const reset = () => {
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const blindSpots = perSource.slice(0, 3);
    return (
      <div>
        <div className="rounded-xl p-8 md:p-10 mb-8" style={{ backgroundColor: 'white', border: '1px solid var(--nw-line-light)' }}>
          <div className="flex items-center gap-4 mb-4">
            <VerdictIcon size={32} style={{ color: verdictColor }} />
            <div>
              <p className="eyebrow" style={{ color: 'var(--nw-dark-soft)' }}>
                Your score: {total} / 30
              </p>
              <h3 className="text-2xl" style={{ color: 'var(--nw-ink)' }}>{verdict.title}</h3>
            </div>
          </div>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--nw-ink-soft)' }}>{verdict.text}</p>
        </div>

        <h3 className="text-xl mb-6" style={{ color: 'var(--nw-ink)' }}>Coverage by source</h3>
        <div className="space-y-4 mb-10">
          {perSource.map((s) => (
            <div key={s.source}>
              <div className="flex justify-between text-sm mb-1">
                <Link href={s.page} className="underline" style={{ color: 'var(--nw-ink)' }}>{s.source}</Link>
                <span style={{ color: 'var(--nw-ink-soft)' }}>{s.got}/{s.max}</span>
              </div>
              <div className="h-3 rounded-full" style={{ backgroundColor: 'var(--nw-line-light)' }}>
                <div
                  className="h-3 rounded-full transition-all"
                  style={{
                    width: `${s.pct}%`,
                    backgroundColor: s.pct < 34 ? '#dc2626' : s.pct < 67 ? '#b45309' : '#15803d',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl mb-6" style={{ color: 'var(--nw-ink)' }}>Your three biggest blind spots</h3>
        <div className="space-y-4 mb-10">
          {blindSpots.map((s, i) => (
            <div
              key={s.source}
              className="rounded-xl p-6"
              style={{ backgroundColor: 'white', border: '1px solid var(--nw-line-light)' }}
            >
              <p className="eyebrow mb-2" style={{ color: 'var(--nw-accent)' }}>Blind spot {i + 1}</p>
              <p className="text-lg mb-2" style={{ color: 'var(--nw-ink)' }}>
                <Link href={s.page} className="underline">{s.source}</Link> — {s.pct}% covered
              </p>
              <p style={{ color: 'var(--nw-ink-soft)' }}>
                The signals hiding here are the ones your team discovers in churn post-mortems.
                Start with the detection logic in the{' '}
                <Link href={s.page} className="underline" style={{ color: 'var(--nw-accent)' }}>
                  {s.source} signal guide
                </Link>.
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-8 md:p-10"
          style={{ backgroundColor: 'var(--nw-dark)', color: 'white' }}
        >
          <h3 className="text-2xl mb-4 text-white">Want the full audit, done for you?</h3>
          <p className="mb-8" style={{ color: 'var(--nw-dark-soft)' }}>
            The Signal Stack Audit is a $1,500 fixed-price engagement: we review your actual
            stack — not a questionnaire — and deliver a written report on the signals
            you&apos;re capturing, the ones you&apos;re blind to, and the three
            highest-leverage fixes. Delivered in 3 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white"
              style={{ backgroundColor: 'var(--nw-accent)' }}
            >
              Get the audit — $1,500 <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/account-risk-snapshot"
              className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium text-white"
              style={{ border: '1px solid var(--nw-line-dark)' }}
            >
              Or start free with the Snapshot
            </Link>
          </div>
        </div>

        <button
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 text-sm underline"
          style={{ color: 'var(--nw-ink-soft)' }}
        >
          <RotateCcw size={16} /> Retake the audit
        </button>
        <p className="mt-6 text-xs" style={{ color: 'var(--nw-dark-soft)' }}>
          Runs entirely in your browser. Nothing is sent anywhere.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-8 text-sm" style={{ color: 'var(--nw-ink-soft)' }}>
        {answered} of {QUESTIONS.length} answered · Be honest — this only works if you are.
      </p>
      <div className="space-y-6">
        {QUESTIONS.map((q, i) => (
          <div
            key={q.id}
            className="rounded-xl p-6"
            style={{ backgroundColor: 'white', border: '1px solid var(--nw-line-light)' }}
          >
            <p className="eyebrow mb-2" style={{ color: 'var(--nw-accent)' }}>
              {i + 1} · {q.source}
            </p>
            <p className="text-lg mb-1" style={{ color: 'var(--nw-ink)' }}>{q.text}</p>
            <p className="text-sm mb-4" style={{ color: 'var(--nw-dark-soft)' }}>{q.hint}</p>
            <div className="flex gap-3">
              {[
                { v: 2 as Answer, label: 'Yes' },
                { v: 1 as Answer, label: 'Partially' },
                { v: 0 as Answer, label: 'No' },
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt.v }))}
                  className="px-5 py-2 rounded-full text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: answers[q.id] === opt.v ? 'var(--nw-ink)' : 'transparent',
                    color: answers[q.id] === opt.v ? 'white' : 'var(--nw-ink)',
                    border: '1px solid var(--nw-line-light)',
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => answered === QUESTIONS.length && setShowResults(true)}
        disabled={answered !== QUESTIONS.length}
        className="mt-10 inline-flex h-14 items-center justify-center rounded-full px-10 text-sm font-medium text-white transition-colors disabled:opacity-40"
        style={{ backgroundColor: 'var(--nw-ink)' }}
      >
        Show my signal map <ArrowRight size={18} className="ml-2" />
      </button>
      {answered !== QUESTIONS.length && (
        <p className="mt-4 text-sm" style={{ color: 'var(--nw-dark-soft)' }}>
          Answer all {QUESTIONS.length} questions to see your results.
        </p>
      )}
    </div>
  );
}
