import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductDetailActions from '../../../components/ProductDetailActions';
import { getWatchBySlug, getWatches } from '../../../data/watches';

interface WatchDetailPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const watches = getWatches();
  return watches.map((watch) => ({ slug: watch.slug }));
}

export function generateMetadata({ params }: WatchDetailPageProps): Metadata {
  const watch = getWatchBySlug(params.slug);
  if (!watch) {
    return {
      title: 'Watch not found | TSF Watches'
    };
  }
  return {
    title: `${watch.name} | TSF Watches`,
    description: watch.shortDescription,
    openGraph: {
      title: `${watch.name} | TSF Watches`,
      description: watch.shortDescription,
      images: watch.images.map((src) => ({ url: src }))
    }
  };
}

export default function WatchDetailPage({ params }: WatchDetailPageProps) {
  const watch = getWatchBySlug(params.slug);

  if (!watch) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: watch.currency,
    maximumFractionDigits: 0
  }).format(watch.price);

  return (
    <article className="section dark" style={{ paddingTop: 120 }}>
      <div className="container" style={{ display: 'grid', gap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Link href="/watches" style={{ color: 'var(--color-text-muted)', fontSize: 14 }}>
            ← Back to Collection
          </Link>
          <span className="tag">{watch.collection}</span>
          <h1 style={{ margin: 0, fontSize: 'clamp(40px, 5vw, 60px)' }}>{watch.name}</h1>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', maxWidth: 720, lineHeight: 1.7 }}>
            {watch.description}
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24
          }}
        >
          {watch.images.map((src) => (
            <div
              key={src}
              style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', minHeight: 360 }}
            >
              <Image src={src} alt={`${watch.name} view`} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 48
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ display: 'grid', gap: 12 }}>
              <span style={{ letterSpacing: '0.12em', fontSize: 12, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                Investment
              </span>
              <span style={{ fontSize: 32, fontWeight: 600 }}>{formattedPrice}</span>
              <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>{watch.story}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ letterSpacing: '0.12em', fontSize: 12, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                Highlights
              </span>
              <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                {watch.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              <span style={{ letterSpacing: '0.12em', fontSize: 12, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                Specifications
              </span>
              <div style={{ display: 'grid', gap: 12 }}>
                {[{
                  label: 'Movement',
                  value: watch.movement
                },
                {
                  label: 'Case',
                  value: watch.case
                },
                {
                  label: 'Strap',
                  value: watch.strap
                },
                {
                  label: 'Water Resistance',
                  value: watch.waterResistance
                },
                {
                  label: 'Power Reserve',
                  value: watch.powerReserve ?? '72 hours'
                }].map((spec) => (
                  <div key={spec.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                      {spec.label}
                    </span>
                    <span>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="card" style={{ display: 'grid', gap: 24 }}>
            <ProductDetailActions watch={watch} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span style={{ letterSpacing: '0.12em', fontSize: 12, textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                Maison services
              </span>
              <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                <li>Complimentary seven-year movement warranty</li>
                <li>Annual regulation and detailing programme</li>
                <li>Global concierge delivery with insurance</li>
              </ul>
            </div>
          </div>
        </div>
        <section style={{ display: 'grid', gap: 24 }}>
          <h2 style={{ margin: 0 }}>Artistry & Complications</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {watch.features.map((feature) => (
              <div key={feature.title} className="card" style={{ gap: 12 }}>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{feature.title}</span>
                <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                  {feature.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section
          id="concierge"
          className="card"
          style={{ display: 'grid', gap: 16, background: 'linear-gradient(140deg, rgba(212,175,55,0.22), rgba(19,19,20,0.9))' }}
        >
          <span className="tag">Dedicated Concierge</span>
          <h2 style={{ margin: 0 }}>Reserve your consultation.</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', maxWidth: 620 }}>
            Connect with our specialist team to arrange a private viewing in Le Brassus, request a personalised strap, or coordinate discrete global delivery.
          </p>
          <Link href="/contact" className="btn" style={{ alignSelf: 'flex-start' }}>
            Begin your bespoke journey
          </Link>
        </section>
      </div>
    </article>
  );
}
