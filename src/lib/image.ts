import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './sanity';

const builder = imageUrlBuilder(sanityClient);

// Converts Sanity image references into dynamic CDN URLs
export function urlFor(source: any) {
  return builder.image(source);
}