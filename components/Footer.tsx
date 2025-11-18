import Link from 'next/link';

const footerLinks = [
  {
    title: 'Maison',
    items: [
      { label: 'About TSF', href: '/about' },
      { label: 'Le Brassus Atelier', href: '/experience#atelier' },
      { label: 'Press Room', href: '/experience#press' }
    ]
  },
  {
    title: 'Collectors',
    items: [
      { label: 'Private Consultations', href: '/contact#concierge' },
      { label: 'Bespoke Orders', href: '/experience#bespoke' },
      { label: 'Heritage Program', href: '/experience#heritage' }
    ]
  },
  {
    title: 'Support',
    items: [
      { label: 'Care & Services', href: '/experience#care' },
      { label: 'Warranty', href: '/experience#warranty' },
      { label: 'Contact', href: '/contact' }
    ]
  }
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 96 }}>
      <div className="section dark" style={{ paddingBottom: 32 }}>
        <div className="container" style={{ display: 'grid', gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ letterSpacing: '0.18em', fontSize: 13, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
              TSF WATCHES
            </span>
            <p style={{ margin: 0, maxWidth: 480, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Crafting mechanical poetry for the modern collector. Every TSF timepiece is assembled in Switzerland, finished by hand, and delivered with a bespoke collector&rsquo;s dossier.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gap: 32,
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))'
            }}
          >
            {footerLinks.map((section) => (
              <div key={section.title} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ letterSpacing: '0.16em', textTransform: 'uppercase', fontSize: 12, color: 'var(--color-text-muted)' }}>
                  {section.title}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {section.items.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      style={{ color: 'var(--color-text)', fontSize: 15 }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              paddingTop: 24,
              color: 'var(--color-text-muted)'
            }}
          >
            <span>© {new Date().getFullYear()} TSF Watches. All rights reserved.</span>
            <span style={{ fontSize: 13 }}>
              Crafted in Switzerland · Worldwide concierge delivery · Certified Maison partner
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
