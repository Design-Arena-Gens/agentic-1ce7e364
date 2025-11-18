'use client';

import { FormEvent, useState } from 'react';

interface FormState {
  fullName: string;
  email: string;
  interest: string;
  message: string;
}

const initialFormState: FormState = {
  fullName: '',
  email: '',
  interest: 'consultation',
  message: ''
};

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormState(initialFormState);
  };

  return (
    <section className="section dark" style={{ paddingTop: 120 }}>
      <div className="container" style={{ display: 'grid', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span className="tag">Contact Concierge</span>
          <h1 style={{ margin: 0 }}>Your private horological liaison.</h1>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', maxWidth: 680 }}>
            Whether you&rsquo;re requesting a bespoke commission, scheduling an atelier visit, or inquiring about care services, our concierge will respond within one business day.
          </p>
        </div>
        <div className="card" style={{ display: 'grid', gap: 24 }}>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 20 }}>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                  Full name
                </span>
                <input
                  value={formState.fullName}
                  onChange={handleChange('fullName')}
                  required
                  placeholder="Amelia Laurent"
                  style={{
                    padding: '14px 18px',
                    borderRadius: 16,
                    border: '1px solid rgba(255,255,255,0.14)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'var(--color-text)'
                  }}
                />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                  Email
                </span>
                <input
                  type="email"
                  value={formState.email}
                  onChange={handleChange('email')}
                  required
                  placeholder="you@collector.com"
                  style={{
                    padding: '14px 18px',
                    borderRadius: 16,
                    border: '1px solid rgba(255,255,255,0.14)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'var(--color-text)'
                  }}
                />
              </label>
            </div>
            <label id="interest" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                Area of interest
              </span>
              <select
                value={formState.interest}
                onChange={handleChange('interest')}
                style={{
                  padding: '14px 18px',
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.14)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--color-text)'
                }}
              >
                <option value="consultation">Private consultation</option>
                <option value="experience">Maison experience</option>
                <option value="service">Care & servicing</option>
                <option value="press">Press inquiry</option>
              </select>
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                Message
              </span>
              <textarea
                value={formState.message}
                onChange={handleChange('message')}
                required
                rows={5}
                placeholder="Share your request, timeline, or desired complication."
                style={{
                  padding: '18px',
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.14)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--color-text)',
                  resize: 'vertical'
                }}
              />
            </label>
            <button type="submit" className="btn" style={{ width: 'fit-content', paddingInline: 36 }}>
              Submit Inquiry
            </button>
          </form>
          {submitted && (
            <div style={{ color: '#34d399', fontSize: 14 }}>
              Thank you. Our concierge will respond within 24 hours with next steps tailored to your request.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
