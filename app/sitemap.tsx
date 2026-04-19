import { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://signalnewshub.com'

  return [
    {
      url: `${baseUrl}/`, // Notice the added slash /
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/world`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    // ... rest of your categories
  ]
}