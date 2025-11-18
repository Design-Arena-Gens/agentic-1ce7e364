export type AvailabilityState = 'in-stock' | 'limited' | 'pre-order';

export interface WatchFeature {
  title: string;
  detail: string;
}

export interface Watch {
  slug: string;
  name: string;
  brand: string;
  collection: string;
  price: number;
  currency: string;
  shortDescription: string;
  description: string;
  story: string;
  highlights: string[];
  images: string[];
  movement: string;
  case: string;
  strap: string;
  waterResistance: string;
  availability: AvailabilityState;
  editionNumber?: string;
  powerReserve?: string;
  complications: string[];
  features: WatchFeature[];
}
