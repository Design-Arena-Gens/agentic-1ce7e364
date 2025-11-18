const stats = [
  { metric: '4.9 / 5', label: 'Collector satisfaction score' },
  { metric: '< 2s', label: 'Average site response time' },
  { metric: '38 Cities', label: 'Concierge delivery network' },
  { metric: '100+', label: 'Limited pieces curated annually' }
];

export default function StatsRibbon() {
  return (
    <section
      className="section dark"
      style={{
        paddingBlock: 48,
        borderBlock: '1px solid rgba(255,255,255,0.06)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 24,
          alignItems: 'center'
        }}
      >
        {stats.map((stat) => (
          <div key={stat.metric} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 28, fontWeight: 600, color: 'var(--color-primary)' }}>{stat.metric}</span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: 14 }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
