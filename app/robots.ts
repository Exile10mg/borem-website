import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://borem.pl'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
        ],
      },
      // Google crawlers
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      // Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
      // AI Crawlers - IMPORTANT dla AI Search!
      {
        userAgent: 'GPTBot', // OpenAI ChatGPT
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
      {
        userAgent: 'ChatGPT-User', // ChatGPT Browser
        allow: '/',
      },
      {
        userAgent: 'Google-Extended', // Google Bard/Gemini
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai', // Claude
        allow: '/',
      },
      {
        userAgent: 'Claude-Web', // Claude Browser
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot', // Perplexity AI
        allow: '/',
      },
      {
        userAgent: 'YouBot', // You.com
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended', // Apple Intelligence
        allow: '/',
      },
      {
        userAgent: 'CCBot', // Common Crawl (used by many AI)
        allow: '/',
      },
      {
        userAgent: 'Meta-ExternalAgent', // Meta AI
        allow: '/',
      },
      {
        userAgent: 'facebookexternalhit', // Facebook/Meta
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
