import { MetadataRoute } from 'next'

// This forces Next.js to regenerate the sitemap on every request
export const dynamic = 'force-dynamic'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://signalnewshub.com'

  // Define your main landing pages and category sectors
  const routes = [
    '',
    '/world',
    '/politics',
    '/business',
    '/tech',
    '/history',
    '/sports',
    '/entertainment',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}