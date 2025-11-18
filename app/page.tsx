import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { getFeaturedWatches, getWatches } from '../data/watches';
import ValuePillars from '../components/ValuePillars';
import StorySection from '../components/StorySection';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import StatsRibbon from '../components/StatsRibbon';

export default function HomePage() {
  const featured = getFeaturedWatches();
  const all = getWatches();

  return (
    <>
      <Hero />
      <StatsRibbon />
      <ProductGrid
        title="Featured Complications"
        description="Discover freshly unveiled limited releases, each accompanied by a collector dossier and concierge delivery."
        watches={featured}
        highlightFirst
      />
      <ValuePillars />
      <StorySection />
      <ProductGrid
        title="Maison Curations"
        description="Hand-selected references spanning travel complications, grand feu enamel artistry, and modernist daily companions."
        watches={all.slice(3)}
      />
      <Testimonials />
      <Newsletter />
    </>
  );
}
