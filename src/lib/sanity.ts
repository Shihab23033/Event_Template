import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true, // Serves cached responses from edge servers for max speed
  apiVersion: '2026-07-27',
});