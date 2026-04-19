import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://signalnewshub.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Adding your main categories for better SEO indexing
    {
      url: 'https://signalnewshub.com/world',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://signalnewshub.com/tech',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}