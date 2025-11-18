import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="section dark" style={{ paddingTop: 120 }}>
      <div className="container" style={{ display: 'grid', gap: 64, alignItems: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span className="tag">New Collection Release · Astral Compendium</span>
          <h1
            style={{
              fontSize: 'clamp(48px, 6vw, 72px)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: 0,
              fontFamily: 'var(--font-playfair, "Playfair Display", serif)'
            }}
          >
            Mechanical poetry for the modern collector.
          </h1>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: 18, lineHeight: 1.7, maxWidth: 520 }}>
            Discover limited-edition masterpieces curated by TSF Studios. Each timepiece is a fusion of Swiss precision, avant-garde design, and rich storytelling crafted for discerning patrons.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/watches" className="btn">
              Explore Collection
            </Link>
            <Link href="/experience" className="btn secondary">
              Reserve a Consultation
            </Link>
          </div>
          <div className="badge-list">
            <span className="badge">On-site concierge delivery</span>
            <span className="badge">Ethical sourcing</span>
            <span className="badge">Lifetime care</span>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            borderRadius: 32,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
            minHeight: 520,
            background: 'linear-gradient(160deg, rgba(212,175,55,0.28) 0%, rgba(19,19,20,0.8) 60%)'
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&w=1600&q=80"
            alt="TSF Watches flagship timepiece"
            fill
            style={{ objectFit: 'cover', mixBlendMode: 'luminosity', opacity: 0.9 }}
            priority
          />
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              right: 24,
              display: 'grid',
              gap: 8,
              padding: 24,
              borderRadius: 24,
              background: 'rgba(12,12,12,0.7)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            <span style={{ letterSpacing: '0.18em', fontSize: 11, textTransform: 'uppercase', color: 'var(--color-primary)' }}>
              Atelier Release
            </span>
            <span style={{ fontSize: 20, fontWeight: 600 }}>Aurum Chronograph Lunaire</span>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text-muted)' }}>
              Each Lunaire is individually numbered and accompanied by TSF Maison concierge delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
