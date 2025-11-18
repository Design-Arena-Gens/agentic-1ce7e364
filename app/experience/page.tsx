import Image from 'next/image';
import Link from 'next/link';

const experiences = [
  {
    id: 'atelier',
    title: 'Atelier Immersion',
    description:
      'Step inside TSF Atelier for a private horological journey. Experience live movement assembly, dial enamelling, and archival sketch reviews with our master artisans.',
    image: 'https://images.unsplash.com/photo-1522199996660-7b1cba83ce5a?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Movement assembly session', 'Dial enamelling demonstration', 'Champagne salon debrief']
  },
  {
    id: 'bespoke',
    title: 'Bespoke Commission',
    description:
      'Collaborate with our design studio to craft a personalised complication. From material selection to engraving, your signature piece is meticulously curated.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Design charrette with creative director', 'Material lab consultation', 'Custom strap atelier fitting']
  },
  {
    id: 'heritage',
    title: 'Heritage Programme',
    description:
      'Reimagine heirloom timepieces with TSF restoration artisans. Receive a digital provenance passport and cinematic documentation for your family archives.',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Parts restoration sourcing', 'Hand-finishing workshop', 'Digital provenance passport']
  }
];

export default function ExperiencePage() {
  return (
    <section className="section dark" style={{ paddingTop: 120 }}>
      <div className="container" style={{ display: 'grid', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <span className="tag">Maison Experiences</span>
          <h1 style={{ margin: 0 }}>Beyond the dial.</h1>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', maxWidth: 680 }}>
            TSF Watches curates immersive experiences that celebrate horological artistry. From atelier immersions to bespoke commissions, our team orchestrates memorable journeys for every collector.
          </p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {experiences.map((experience) => (
            <article key={experience.id} id={experience.id} className="card" style={{ display: 'grid', gap: 20 }}>
              <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', minHeight: 220 }}>
                <Image src={experience.image} alt={experience.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h2 style={{ margin: 0 }}>{experience.title}</h2>
                <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                  {experience.description}
                </p>
                <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <Link href="/contact" className="btn" style={{ alignSelf: 'flex-start' }}>
                  Reserve Experience
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div id="care" className="card" style={{ display: 'grid', gap: 16 }}>
          <h2 style={{ margin: 0 }}>Care & Services</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', maxWidth: 640 }}>
            Our care programme includes complimentary annual regulation, ultrasonic cleaning, strap refreshes, and movement servicing orchestrated by our master watchmakers.
          </p>
        </div>
        <div id="warranty" className="card" style={{ display: 'grid', gap: 16 }}>
          <h2 style={{ margin: 0 }}>Maison Warranty</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', maxWidth: 640 }}>
            Every TSF timepiece is backed by a seven-year global warranty that covers manufacturing defects, accuracy standards, and concierge-level customer support.
          </p>
        </div>
        <div id="press" className="card" style={{ display: 'grid', gap: 16 }}>
          <h2 style={{ margin: 0 }}>Press & Partnerships</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', maxWidth: 640 }}>
            TSF collaborates with design houses, art fairs, and philanthropic initiatives worldwide. Request our press dossier or explore partnership opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
