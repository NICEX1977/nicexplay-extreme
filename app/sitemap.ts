 import { MetadataRoute } from 'next'
import { supabase } from '../lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://nicexplay.lat'

  // Páginas estáticas
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/solicitud`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacidad`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Artículos dinámicos desde Supabase
  const { data: articles } = await supabase
    .from('articles')
    .select('slug, created_at')
    .eq('is_published', true)

  const articlePages: MetadataRoute.Sitemap = (articles || []).map(a => ({
    url: `${baseUrl}/articulo/${a.slug}`,
    lastModified: new Date(a.created_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...articlePages]
}
