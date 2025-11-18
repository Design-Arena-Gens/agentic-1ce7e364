import Image from 'next/image';

const milestones = [
  {
    year: '1998',
    title: 'Foundation of TSF Atelier',
    description:
      'TSF Studios opens its first atelier in Le Brassus with four master watchmakers dedicated to limited bespoke commissions.'
  },
  {
    year: '2006',
    title: 'Launch of Astral Compendium',
    description:
      'The first Astral moonphase chronographs debut, winning multiple design accolades for narrative-driven horology.'
  },
  {
    year: '2015',
    title: 'Digital Collector Circle',
    description:
      'TSF introduces immersive storytelling, virtual atelier tours, and blockchain provenance passports.'
  },
  {
    year: '2024',
    title: 'Maison Expansion',
    description:
      'Third atelier wing opens with integrated material science lab and collector event salon.'
  }
];

export default function AboutPage() {
  return (
    <div className="section dark" style={{ paddingTop: 120 }}>
      <div className="container" style={{ display: 'grid', gap: 64 }}>
        <div className="two-column">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span className="tag">Our Maison</span>
            <h1 style={{ margin: 0 }}>Crafting time with reverence.</h1>
            <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
              TSF Watches was born from a pursuit of emotional horology—timepieces that do more than measure moments; they tell stories. Our maison merges centuries-old techniques with modern technology, enabling each collector to experience the soul of Swiss watchmaking.
            </p>
          </div>
          <div style={{ position: 'relative', minHeight: 400, borderRadius: 28, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
            <Image
              src="https://images.unsplash.com/photo-1543165796-5426273eaab1?auto=format&fit=crop&w=1200&q=80"
              alt="TSF Atelier"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <section className="card" style={{ display: 'grid', gap: 24 }}>
          <h2 style={{ margin: 0 }}>Maison manifesto</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {[{
              title: 'Heritage',
              detail: 'We honour the provenance of classical watchmaking while embracing bold material experimentation.'
            },
            {
              title: 'Sustainability',
              detail: 'Our supply chain prioritises ethical sourcing, recycled precious metals, and responsible sapphire cultivation.'
            },
            {
              title: 'Community',
              detail: 'Collectors are collaborators. Feedback from our circle influences design, functionality, and service.'
            }].map((value) => (
              <div key={value.title} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <span style={{ fontWeight: 600 }}>{value.title}</span>
                <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{value.detail}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="card" style={{ display: 'grid', gap: 24 }}>
          <h2 style={{ margin: 0 }}>Milestones</h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {milestones.map((milestone) => (
              <div key={milestone.year} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ letterSpacing: '0.18em', fontSize: 12, textTransform: 'uppercase', color: 'var(--color-primary)' }}>
                  {milestone.year}
                </span>
                <span style={{ fontSize: 18, fontWeight: 600 }}>{milestone.title}</span>
                <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{milestone.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="card" style={{ display: 'grid', gap: 16, background: 'linear-gradient(160deg, rgba(212,175,55,0.2), rgba(15,15,16,0.88))' }}>
          <h2 style={{ margin: 0 }}>Meet our artisans</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', maxWidth: 620 }}>
            Each watch is assembled by a master artisan, engraved with their signature, and paired with an archival documentation. Private viewings are available upon invitation.
          </p>
        </section>
      </div>
    </div>
  );
}
