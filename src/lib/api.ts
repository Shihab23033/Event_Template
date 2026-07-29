import { sanityClient } from './sanity';
import { siteConfig } from '../config/site';

export async function getSiteSettings() {
  const query = `*[_type == "siteSettings"][0]{
    title,
    theme,
    eventDateTime,
    heroDisplayDate,
    location,
    welcomeText,
    heroImage
  }`;

  try {
    const data = await sanityClient.fetch(query);
    
    // Fall back to local default siteConfig if Sanity field is missing
    return {
      title: data?.title || siteConfig.title,
      theme: data?.theme || siteConfig.defaultTheme,
      eventDateTime: data?.eventDateTime || siteConfig.eventDate,
      heroDisplayDate: data?.heroDisplayDate || '',
      location: {
        venue: data?.location?.venue || siteConfig.location.name,
        city: data?.location?.city || siteConfig.location.city,
        country: data?.location?.country || siteConfig.location.country,
        googleMapsUrl: data?.location?.googleMapsUrl || siteConfig.location.googleMapsUrl,
      },
      welcomeText: data?.welcomeText || '',
      heroImage: data?.heroImage || null,
    };
  } catch (error) {
    console.warn("Failed to fetch Sanity siteSettings, using default config:", error);
    return {
      title: siteConfig.title,
      theme: siteConfig.defaultTheme,
      eventDateTime: siteConfig.eventDate,
      heroDisplayDate: '',
      location: {
        venue: siteConfig.location.name,
        city: siteConfig.location.city,
        country: siteConfig.location.country,
      },
      welcomeText: '',
      heroImage: null,
    };
  }
}