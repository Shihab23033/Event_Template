import type { Theme } from '../config/themes';

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  defaultTheme: Theme;
  eventDate: string; // ISO date string: "2026-10-24T18:00:00"
  location: {
    name: string;
    city: string;
    country: string;
    googleMapsUrl?: string;
  };
  socialLinks?: {
    instagram?: string;
    facebook?: string;
  };
}