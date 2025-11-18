import Image from 'next/image';
import Link from 'next/link';

export default function StorySection() {
  return (
    <section className="section light">
      <div className="container two-column">
        <div style={{ position: 'relative', borderRadius: 32, overflow: 'hidden', minHeight: 420, border: '1px solid rgba(255,255,255,0.1)' }}>
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
            alt="Watchmaker at TSF Atelier"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span className="tag">Inside the Maison</span>
          <h2 style={{ margin: 0 }}>Where heritage meets the future.</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            TSF Studios unites master watchmakers, material scientists, and digital storytellers under one roof. Every collection is born from archival research, prototyping, and immersive narrative design to honour both history and innovation.
          </p>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
            {[{
              title: '72-hour provenance audit',
              detail: 'Comprehensive authentication with digital passport handoff.'
            },
            {
              title: 'Private atelier viewing',
              detail: 'Book an appointment in Le Brassus or at our travelling salons.'
            },
            {
              title: 'Collector dossier',
              detail: 'Receive bespoke documentation, sketches, and behind-the-scenes film.'
            }].map((item) => (
              <div key={item.title} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontWeight: 600 }}>{item.title}</span>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text-muted)' }}>{item.detail}</p>
              </div>
            ))}
          </div>
          <Link href="/experience" className="btn" style={{ alignSelf: 'flex-start' }}>
            Explore the Maison Experience
          </Link>
        </div>
      </div>
    </section>
  );
}
