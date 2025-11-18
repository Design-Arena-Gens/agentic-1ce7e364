'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartProvider';
import type { Watch } from '../types/watch';

interface ProductCardProps {
  watch: Watch;
  layout?: 'default' | 'highlight';
}

export default function ProductCard({ watch, layout = 'default' }: ProductCardProps) {
  const { addItem } = useCart();

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: watch.currency,
    maximumFractionDigits: 0
  }).format(watch.price);

  return (
    <div
      className="card"
      style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: layout === 'highlight' ? 40 : undefined }}
    >
      <Link
        href={`/watches/${watch.slug}`}
        style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', minHeight: layout === 'highlight' ? 420 : 360 }}
      >
        <Image
          src={watch.images[0]}
          alt={watch.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Link>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <span style={{ letterSpacing: '0.12em', fontSize: 12, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
          {watch.collection}
        </span>
        <Link href={`/watches/${watch.slug}`} style={{ fontSize: 22, fontWeight: 600 }}>
          {watch.name}
        </Link>
        <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
          {watch.shortDescription}
        </p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 600, fontSize: 18 }}>{formattedPrice}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              fontSize: 13,
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: watch.availability === 'in-stock' ? '#6ee7b7' : watch.availability === 'limited' ? 'var(--color-primary)' : '#f87171'
            }}
          >
            {watch.availability === 'in-stock'
              ? 'Available'
              : watch.availability === 'limited'
              ? 'Limited'
              : 'Pre-order'}
          </span>
          <button
            type="button"
            className="btn"
            onClick={() => addItem(watch)}
            style={{ padding: '10px 20px', fontSize: 14 }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
