import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityClient } from './sanity';

const builder = createImageUrlBuilder(sanityClient);

// Converts Sanity image references into dynamic CDN URLs
export function urlFor(source: any) {
  return builder.image(source);
}