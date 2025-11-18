import WatchCatalogue from '../../components/WatchCatalogue';
import { getWatches } from '../../data/watches';

export const metadata = {
  title: 'TSF Watches | Collection',
  description:
    'Browse TSF Watches curated premium timepieces. Filter by complication, availability, and reserve limited releases with concierge support.'
};

export default function WatchesPage() {
  const watches = getWatches();
  return <WatchCatalogue watches={watches} />;
}
