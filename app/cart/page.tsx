'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../components/CartProvider';

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem, clear } = useCart();

  const formattedSubtotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(subtotal);

  return (
    <section className="section dark" style={{ paddingTop: 120 }}>
      <div className="container" style={{ display: 'grid', gap: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="tag">Collector Cart</span>
          <h1 style={{ margin: 0 }}>Your curated selections.</h1>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', maxWidth: 640 }}>
            Review your chosen timepieces, adjust allocations, and proceed to secure concierge checkout. Our team will confirm details within 24 hours.
          </p>
        </div>
        {items.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: 48 }}>
            <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: 18 }}>
              Your cart is awaiting its first masterpiece.
            </p>
            <Link href="/watches" className="btn" style={{ marginTop: 24 }}>
              Explore the Collection
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gap: 24,
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
            }}
          >
            <div className="card" style={{ display: 'grid', gap: 20 }}>
              {items.map(({ watch, quantity }) => {
                const lineTotal = watch.price * quantity;
                const formattedLineTotal = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: watch.currency,
                  maximumFractionDigits: 0
                }).format(lineTotal);

                return (
                  <div key={watch.slug} style={{ display: 'grid', gridTemplateColumns: '96px 1fr', gap: 16 }}>
                    <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', aspectRatio: '1 / 1' }}>
                      <Image src={watch.images[0]} alt={watch.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <Link href={`/watches/${watch.slug}`} style={{ fontWeight: 600 }}>
                        {watch.name}
                      </Link>
                      <span style={{ fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                        {watch.collection}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <label style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
                          Qty
                          <input
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={(event) => updateQuantity(watch.slug, Number(event.target.value))}
                            style={{
                              width: 64,
                              marginLeft: 8,
                              padding: '6px 12px',
                              borderRadius: 999,
                              border: '1px solid rgba(255,255,255,0.18)',
                              background: 'transparent',
                              color: 'var(--color-text)'
                            }}
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => removeItem(watch.slug)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--color-text-muted)',
                            textDecoration: 'underline',
                            fontSize: 13
                          }}
                        >
                          Remove
                        </button>
                      </div>
                      <span style={{ fontWeight: 600 }}>{formattedLineTotal}</span>
                    </div>
                  </div>
                );
              })}
              <button
                type="button"
                onClick={clear}
                style={{
                  marginTop: 12,
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-text-muted)',
                  textDecoration: 'underline',
                  fontSize: 13,
                  justifySelf: 'flex-start'
                }}
              >
                Clear cart
              </button>
            </div>
            <div className="card" style={{ display: 'grid', gap: 16, height: 'fit-content', position: 'sticky', top: 120 }}>
              <h2 style={{ margin: 0 }}>Concierge Checkout</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16 }}>
                <span>Subtotal</span>
                <span>{formattedSubtotal}</span>
              </div>
              <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: 14 }}>
                Taxes and duties calculated by our concierge team based on your delivery destination.
              </p>
              <Link href="/contact" className="btn">
                Proceed with Concierge
              </Link>
              <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                Need assistance? Email <a href="mailto:concierge@tsfwatches.com" style={{ color: 'var(--color-primary)' }}>concierge@tsfwatches.com</a>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
