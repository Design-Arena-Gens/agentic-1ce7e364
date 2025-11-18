'use client';

import type { Watch } from '../types/watch';
import { useCart } from './CartProvider';

interface ProductDetailActionsProps {
  watch: Watch;
}

export default function ProductDetailActions({ watch }: ProductDetailActionsProps) {
  const { addItem } = useCart();

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: watch.currency,
    maximumFractionDigits: 0
  }).format(watch.price);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <span style={{ fontSize: 28, fontWeight: 600 }}>{formattedPrice}</span>
      <span style={{
        fontSize: 13,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color:
          watch.availability === 'in-stock'
            ? '#34d399'
            : watch.availability === 'limited'
            ? 'var(--color-primary)'
            : '#f87171'
      }}>
        {watch.availability === 'in-stock'
          ? 'Available for immediate delivery'
          : watch.availability === 'limited'
          ? 'Limited allocation'
          : 'Pre-order reservation'}
      </span>
      <button type="button" className="btn" onClick={() => addItem(watch)}>
        Add to Cart
      </button>
      <a href="#concierge" className="btn secondary" style={{ textAlign: 'center' }}>
        Connect with Concierge
      </a>
      <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
        Includes worldwide insured shipping, authentication dossier, and lifetime care programme enrollment.
      </span>
    </div>
  );
}
