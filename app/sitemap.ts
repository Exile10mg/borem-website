import { MetadataRoute } from 'next'
 
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
  
  // TODO: Dodaj dynamiczne posty z bloga gdy będą
  // const blogPosts = await getBlogPosts()
  // const blogUrls = blogPosts.map(post => ({
  //   url: `${baseUrl}/blog/${post.id}`,
  //   lastModified: new Date(post.date),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }))
  
  // TODO: Dodaj dynamiczne realizacje gdy będą
  // const realizacje = await getRealizacje()
  // const realizacjeUrls = realizacje.map(projekt => ({
  //   url: `${baseUrl}/realizacje/${projekt.slug}`,
  //   lastModified: new Date(projekt.date),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }))
  
  return [
    ...staticPages,
    ...legalPages,
    ...adPages,
    // ...blogUrls, // Odkomentuj gdy będą dynamiczne posty
    // ...realizacjeUrls, // Odkomentuj gdy będą dynamiczne realizacje
  ]
}
