'use client';

import { FormEvent, useState } from 'react';

export default function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email');
    if (typeof email === 'string' && email.includes('@')) {
      setStatus('success');
      form.reset();
    }
  };

  return (
    <section className="section light">
      <div
        className="container card"
        style={{
          display: 'grid',
          gap: 32,
          background: 'linear-gradient(120deg, rgba(212,175,55,0.18), rgba(19,19,20,0.92))'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span className="tag">Collector Circle</span>
          <h2 style={{ margin: 0 }}>Receive private release dossiers.</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', maxWidth: 520 }}>
            Subscribe to access limited release previews, atelier events, and archival stories reserved for TSF collector circle members.
          </p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <input
            name="email"
            type="email"
            required
            placeholder="you@collector.com"
            style={{
              flex: '1 1 260px',
              padding: '16px 20px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(15,15,16,0.68)',
              color: 'var(--color-text)',
              fontSize: 16
            }}
          />
          <button type="submit" className="btn" style={{ paddingInline: 32 }}>
            Join the Circle
          </button>
        </form>
        {status === 'success' && (
          <span style={{ color: '#34d399', fontSize: 14 }}>
            Welcome to the circle. Our concierge will reach out with your first dossier shortly.
          </span>
        )}
      </div>
    </section>
  );
}
