'use client';

import { useMemo, useState } from 'react';
import type { Watch } from '../types/watch';
import ProductCard from './ProductCard';

interface WatchCatalogueProps {
  watches: Watch[];
}

const availabilityFilters: { label: string; value: 'all' | Watch['availability'] }[] = [
  { label: 'All', value: 'all' },
  { label: 'In Stock', value: 'in-stock' },
  { label: 'Limited', value: 'limited' },
  { label: 'Pre-Order', value: 'pre-order' }
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' }
];

export default function WatchCatalogue({ watches }: WatchCatalogueProps) {
  const [availability, setAvailability] = useState<'all' | Watch['availability']>('all');
  const [complication, setComplication] = useState('');
  const [sort, setSort] = useState('featured');

  const complications = useMemo(() => {
    const set = new Set<string>();
    watches.forEach((watch) => watch.complications.forEach((comp) => set.add(comp)));
    return Array.from(set);
  }, [watches]);

  const filtered = useMemo(() => {
    let result = [...watches];
    if (availability !== 'all') {
      result = result.filter((watch) => watch.availability === availability);
    }
    if (complication) {
      result = result.filter((watch) => watch.complications.includes(complication));
    }
    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [availability, complication, sort, watches]);

  return (
    <section className="section dark">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div className="card" style={{ display: 'grid', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span className="tag">Curated Complications</span>
            <h1 style={{ margin: 0 }}>Explore the TSF collection.</h1>
            <p style={{ margin: 0, color: 'var(--color-text-muted)', maxWidth: 640 }}>
              Navigate limited editions, atelier exclusives, and maison classics. Filter by availability or complication to find your signature timepiece.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gap: 16,
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                Availability
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {availabilityFilters.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setAvailability(filter.value)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 999,
                      border: '1px solid',
                      borderColor:
                        availability === filter.value ? 'var(--color-primary)' : 'rgba(255,255,255,0.14)',
                      background:
                        availability === filter.value
                          ? 'var(--color-primary)'
                          : 'rgba(255,255,255,0.06)',
                      color: availability === filter.value ? '#131313' : 'var(--color-text)',
                      fontSize: 13,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label
                htmlFor="complication-filter"
                style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}
              >
                Complication
              </label>
              <select
                id="complication-filter"
                value={complication}
                onChange={(event) => setComplication(event.target.value)}
                style={{
                  appearance: 'none',
                  padding: '12px 16px',
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.14)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--color-text)'
                }}
              >
                <option value="">All complications</option>
                {complications.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label
                htmlFor="sort"
                style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}
              >
                Sort by
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                style={{
                  appearance: 'none',
                  padding: '12px 16px',
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.14)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'var(--color-text)'
                }}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {filtered.map((watch) => (
            <ProductCard key={watch.slug} watch={watch} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>
              No timepieces match the selected filters. Adjust your preferences to discover more TSF creations.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
