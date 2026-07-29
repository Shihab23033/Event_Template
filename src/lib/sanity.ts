import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,//pore true korte hobe // Serves cached responses from edge servers for max speed
  apiVersion: 'v2026-07-29',
});