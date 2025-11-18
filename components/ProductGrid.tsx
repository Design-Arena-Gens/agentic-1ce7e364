import ProductCard from './ProductCard';
import type { Watch } from '../types/watch';

interface ProductGridProps {
  title: string;
  description?: string;
  watches: Watch[];
  highlightFirst?: boolean;
}

export default function ProductGrid({ title, description, watches, highlightFirst = false }: ProductGridProps) {
  return (
    <section className="section light">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div className="section-heading">
          <h2>{title}</h2>
          {description ? <p>{description}</p> : null}
        </div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
          }}
        >
          {watches.map((watch, index) => (
            <ProductCard
              key={watch.slug}
              watch={watch}
              layout={highlightFirst && index === 0 ? 'highlight' : 'default'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
