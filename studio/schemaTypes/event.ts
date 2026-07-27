import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'eventData',
  title: 'Event Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Hero Title', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Hero Subtitle', type: 'string' }),
    defineField({ name: 'date', title: 'Event Date', type: 'string' }),
    defineField({ 
      name: 'themeColor', 
      title: 'Theme Color (Hex code)', 
      type: 'string',
      description: 'Example: #14b8a6 for teal. Keep the # symbol.'
    }),
    
    // --> ADDED GALLERY FIELD HERE <--
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true }, // Allows custom visual focus points
          fields: [
            { name: 'alt', title: 'Alternative Text (for accessibility)', type: 'string' },
            { name: 'caption', title: 'Caption', type: 'string' },
            { name: 'year', title: 'Year (for multi-year events)', type: 'string' },
          ],
        },
      ],
    }),
    
  ],
})