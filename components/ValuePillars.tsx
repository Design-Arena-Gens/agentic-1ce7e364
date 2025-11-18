const pillars = [
  {
    title: 'Curated Excellence',
    description:
      'Every TSF watch undergoes a 72-hour atelier inspection, ensuring the calibre, finishing, and provenance meet our exacting maison standards.'
  },
  {
    title: 'Private Concierge',
    description:
      'Collectors enjoy a personal advisor for sourcing rare editions, arranging collector events, and managing annual maintenance care.'
  },
  {
    title: 'Immersive Storytelling',
    description:
      'Explore immersive narratives, archival sketches, and watchmaker interviews to connect with each timepiece on a deeper level.'
  }
];

export default function ValuePillars() {
  return (
    <section className="section dark">
      <div className="container" style={{ display: 'grid', gap: 32 }}>
        <div className="section-heading">
          <h2>Why collectors choose TSF.</h2>
          <p>
            TSF Watches merges Swiss mastery with digital craftsmanship. From atelier to your wrist, we orchestrate a frictionless journey filled with trust, transparency, and reverence for time.
          </p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {pillars.map((pillar) => (
            <div key={pillar.title} className="card" style={{ gap: 16, display: 'flex', flexDirection: 'column' }}>
              <span style={{ letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: 12, color: 'var(--color-primary)' }}>
                {pillar.title}
              </span>
              <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
