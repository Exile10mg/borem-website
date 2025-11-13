'use client';

import { useEffect } from 'react';

interface BlogPostSchemaProps {
  post: {
    title: string;
    excerpt: string;
    author: string;
    authorBio: string;
    date: string;
    image: string;
    slug: string;
    category: string;
    tags: string[];
    readTime: string;
    keywords: string[];
  };
}

export default function BlogPostSchema({ post }: BlogPostSchemaProps) {
  useEffect(() => {
    // Article Schema
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: post.image,
      datePublished: convertPolishDateToISO(post.date),
      dateModified: convertPolishDateToISO(post.date),
      author: {
        '@type': 'Person',
        name: post.author,
        description: post.authorBio,
        url: 'https://borem.pl',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Borem.pl - Agencja Marketingowa',
        logo: {
          '@type': 'ImageObject',
          url: 'https://borem.pl/icon.svg',
          width: 512,
          height: 512,
        },
        url: 'https://borem.pl',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lublin',
          addressCountry: 'PL',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://borem.pl/blog/${post.slug}`,
      },
      url: `https://borem.pl/blog/${post.slug}`,
      keywords: post.keywords.join(', '),
      articleSection: post.category,
      articleBody: post.excerpt,
      inLanguage: 'pl-PL',
      about: {
        '@type': 'Thing',
        name: post.category,
      },
      mentions: post.keywords.map((keyword) => ({
        '@type': 'Thing',
        name: keyword,
      })),
      timeRequired: post.readTime,
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Strona główna',
          item: 'https://borem.pl',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://borem.pl/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: `https://borem.pl/blog/${post.slug}`,
        },
      ],
    };

    // Organization Schema (for brand recognition)
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Borem.pl',
      alternateName: 'Borem - Agencja Marketingowa',
      url: 'https://borem.pl',
      logo: 'https://borem.pl/icon.svg',
      description:
        'Agencja Marketingowa specjalizująca się w tworzeniu stron internetowych, e-commerce, SEO i marketing cyfrowy dla firm w Lublinie i całej Polsce.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lublin',
        addressRegion: 'Lubelskie',
        addressCountry: 'PL',
      },
      sameAs: [
        'https://www.facebook.com/borem.pl',
        'https://www.instagram.com/borem.pl',
        'https://www.linkedin.com/company/borem-pl',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        areaServed: 'PL',
        availableLanguage: 'Polish',
      },
    };

    // WebSite Schema (for site-wide search)
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Borem.pl - Blog',
      url: 'https://borem.pl/blog',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://borem.pl/blog?search={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    };

    // Insert all schemas
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify([
      articleSchema,
      breadcrumbSchema,
      organizationSchema,
      websiteSchema,
    ]);
    document.head.appendChild(schemaScript);

    return () => {
      document.head.removeChild(schemaScript);
    };
  }, [post]);

  return null;
}

// Helper function to convert Polish date to ISO format
function convertPolishDateToISO(polishDate: string): string {
  // Format: "13 Listopada 2025"
  const months: { [key: string]: string } = {
    Stycznia: '01',
    Lutego: '02',
    Marca: '03',
    Kwietnia: '04',
    Maja: '05',
    Czerwca: '06',
    Lipca: '07',
    Sierpnia: '08',
    Września: '09',
    Października: '10',
    Listopada: '11',
    Grudnia: '12',
  };

  const parts = polishDate.split(' ');
  const day = parts[0].padStart(2, '0');
  const month = months[parts[1]];
  const year = parts[2];

  return `${year}-${month}-${day}T10:00:00+01:00`;
}
