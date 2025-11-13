import { MetadataRoute } from 'next'
import { blogPostsArray } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://borem.pl'
  const currentDate = new Date()
  
  // Statyczne strony - wysoki priorytet
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cennik`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/realizacje`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/o-nas`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/proces-pracy`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]
  
  // Strony prawne - niższy priorytet
  const legalPages = [
    {
      url: `${baseUrl}/polityka-prywatnosci`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/regulamin`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/rodo`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]
  
  // Strony reklam - średni priorytet
  const adPages = [
    { url: `${baseUrl}/reklama-1`, priority: 0.5 },
    { url: `${baseUrl}/reklama-2`, priority: 0.5 },
    { url: `${baseUrl}/reklama-3`, priority: 0.5 },
    { url: `${baseUrl}/reklama-4`, priority: 0.5 },
    { url: `${baseUrl}/reklama-5`, priority: 0.5 },
    { url: `${baseUrl}/reklama-6`, priority: 0.5 },
    { url: `${baseUrl}/reklama-7`, priority: 0.5 },
    { url: `${baseUrl}/reklama-8`, priority: 0.5 },
    { url: `${baseUrl}/reklama-9`, priority: 0.5 },
  ].map(page => ({
    ...page,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
  }))
  
  // Blog posts - WYSOKI PRIORYTET dla AI Search!
  const blogUrls = blogPostsArray.map(post => {
    // Convert Polish date to ISO
    const convertDate = (polishDate: string) => {
      const months: { [key: string]: number } = {
        'Stycznia': 0, 'Lutego': 1, 'Marca': 2, 'Kwietnia': 3,
        'Maja': 4, 'Czerwca': 5, 'Lipca': 6, 'Sierpnia': 7,
        'Września': 8, 'Października': 9, 'Listopada': 10, 'Grudnia': 11
      }
      const [day, month, year] = polishDate.split(' ')
      return new Date(parseInt(year), months[month], parseInt(day))
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: convertDate(post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.9, // WYSOKIE! Blog = główne źródło organicznego ruchu
    }
  })

  // Realizacje pages
  const realizacjePages = [
    'dakro',
    'dakro-ev',
    'serwis-bmw-dakro',
    'dakro-multidealer',
    'dakro-warsztat',
    'dakro-parts',
    'dakro-truck',
    'dakro-classic',
    'dakro-service',
    'dakro-rental',
    'dakro-insurance',
    'dakro-financing',
    'dakro-auctions',
    'dakro-accessories',
  ].map(slug => ({
    url: `${baseUrl}/realizacje/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...blogUrls, // Blog posty - GŁÓWNY CONTENT!
    ...realizacjePages,
    ...legalPages,
    ...adPages,
  ]
}
