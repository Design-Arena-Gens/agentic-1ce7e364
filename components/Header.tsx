'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCart } from './CartProvider';

const navigation = [
  { name: 'Collection', href: '/watches' },
  { name: 'Experience', href: '/experience' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Header() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(16px)',
        background: 'rgba(15, 15, 16, 0.72)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      <div className="container" style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: 13 }}>
          TSF WATCHES
        </Link>
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div className="nav-links" style={{ display: 'none', alignItems: 'center', gap: 24 }}>
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    fontSize: 14,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)'
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <Link
            href="/cart"
            className="btn secondary"
            style={{ position: 'relative', paddingInline: 20, minWidth: 120, justifyContent: 'center' }}
          >
            Cart
            {totalItems > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  background: 'var(--color-primary)',
                  color: '#131313',
                  borderRadius: '999px',
                  padding: '4px 8px',
                  fontSize: 12,
                  fontWeight: 700
                }}
              >
                {totalItems}
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.22)',
              background: 'transparent',
              color: 'var(--color-text)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-toggle"
          >
            <span style={{ fontSize: 20 }}>{menuOpen ? '×' : '≡'}</span>
          </button>
        </nav>
      </div>
      {menuOpen && (
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(15,15,16,0.95)'
          }}
        >
          <div className="container" style={{ padding: '16px 24px', display: 'grid', gap: 12 }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  fontSize: 15,
                  padding: '12px 0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: pathname === item.href ? 'var(--color-primary)' : 'var(--color-text)'
                }}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/cart"
              style={{
                fontSize: 15,
                padding: '12px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-text)'
              }}
              onClick={() => setMenuOpen(false)}
            >
              View Cart
            </Link>
          </div>
        </div>
      )}
      <style jsx>{`
        @media(min-width: 960px) {
          .desktop-nav .nav-links {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
