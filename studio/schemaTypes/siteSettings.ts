import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      description: 'e.g. Alex & Jordan — Memory Album',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'theme',
      title: 'Site Theme',
      type: 'string',
      description: 'Select the color theme for this event',
      options: {
        list: [
          { title: 'Gold (Warm Luxury)', value: 'gold' },
          { title: 'Midnight (Dark Mode)', value: 'midnight' },
          { title: 'Rose (Soft Elegant)', value: 'rose' },
          { title: 'Emerald (Botanical)', value: 'emerald' },
        ],
        layout: 'radio',
      },
      initialValue: 'gold',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventDateTime',
      title: 'Event Date & Time',
      type: 'datetime',
      description: 'Used for the live countdown/timer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDisplayDate',
      title: 'Hero Display Date',
      type: 'string',
      description: 'e.g., "October 24, 2026" or "24.10.2026"',
    }),
    defineField({
      name: 'location',
      title: 'Event Location',
      type: 'object',
      fields: [
        defineField({ name: 'venue', title: 'Venue Name', type: 'string' }),
        defineField({ name: 'city', title: 'City', type: 'string' }),
        defineField({ name: 'country', title: 'Country', type: 'string' }),
        defineField({ name: 'googleMapsUrl', title: 'Google Maps Link', type: 'url' }),
      ],
    }),
    defineField({
      name: 'welcomeText',
      title: 'Welcome Note',
      type: 'text',
      rows: 3,
      description: 'Introductory note displayed in the hero/welcome section',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Cover Image',
      type: 'image',
      options: {
        hotspot: true, // Enables focal point selection
      },
    }),
  ],
});