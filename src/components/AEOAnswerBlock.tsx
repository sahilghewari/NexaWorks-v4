import React from 'react';

interface AEOAnswerBlockProps {
  question: string;
  answer: string;
}

export default function AEOAnswerBlock({ question, answer }: AEOAnswerBlockProps) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <h2 className="heading-lg" style={{ marginBottom: '16px' }}>
        {question}
      </h2>
      <p className="body-lg" style={{ color: 'var(--color-ink-secondary)', maxWidth: '800px', lineHeight: 1.6 }}>
        {/* The answer string should be strictly 30-words, definitive and declarative. */}
        {answer}
      </p>
    </div>
  );
}
