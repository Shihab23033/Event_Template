import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'eventData',
  title: 'Memory Album Settings',
  type: 'document',
  fields: [
    // --- Header Section & Client Details ---
    defineField({ 
      name: 'title', 
      title: 'Couple / Event Name (For Title Tag)', 
      type: 'string', 
      description: 'e.g., Hanna & Caleb' 
    }),
    
    // --- Styling & Customization (THEMING) ---
    defineField({ 
      name: 'themeColor', 
      title: 'Theme Accent Color', 
      type: 'string',
      description: 'Hex code (e.g., #D8B774 for gold, #e11d48 for rose). Used for buttons and accents.'
    }),
    defineField({ 
      name: 'fontStyle', 
      title: 'Font Style', 
      type: 'string',
      options: {
        list: [
          { title: 'Classic Serif (Elegance / Luxury)', value: 'serif' },
          { title: 'Modern Sans (Clean / Minimal)', value: 'sans' },
          { title: 'Playful Cursive / Handcrafted', value: 'cursive' },
        ],
      },
    }),

    // --- FULL SCREEN HERO SECTION ---
    defineField({
      name: 'heroImage',
      title: 'Full Screen Cover Photo',
      type: 'image',
      description: 'High-resolution image that fills the screen.',
      options: { hotspot: true }, // Important for responsive centering
      validation: Rule => Rule.required(),
    }),
    defineField({
  name: 'eventDateTime',
  title: 'Event Date & Time',
  type: 'datetime',
  description: 'Used to calculate time passed accurately.',
  options: {
    dateFormat: 'YYYY-MM-DD',
    timeFormat: 'HH:mm',
    timeStep: 15, // In Sanity v3, use 'step' instead of 'timeStep'
  },
  validation: (Rule) => Rule.required(),
}),
    defineField({ 
      name: 'heroDisplayDate', 
      title: 'Display Date (Text)', 
      type: 'string',
      description: 'How the date looks on screen. e.g., February 14, 2021',
    }),
    
    // --- The Welcome Section ---
    defineField({ 
      name: 'welcomeText', 
      title: 'Welcome Message', 
      type: 'text',
      description: 'The italicized welcome paragraph below the main hero.'
    }),

    // --- Photo Gallery Section ---
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
            { name: 'caption', title: 'Caption', type: 'string' },
            { name: 'category', title: 'Category (e.g., Ceremony, Reception)', type: 'string' },
          ],
        },
      ],
    }),
  ],
})