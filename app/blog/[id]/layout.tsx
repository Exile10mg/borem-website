import { Metadata } from 'next';
import { getPostBySlugOrId, blogPostsArray } from '@/data/blog-posts';

type Props = {
  params: { id: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlugOrId(params.id);

  if (!post) {
    return {
      title: 'Post nie znaleziony | Borem.pl',
      description: 'Szukany artykuł nie został znaleziony w naszym blogu.',
    };
  }

  const metaTitle = (post as any).metaTitle || `${post.title} | Borem.pl - Blog`;
  const metaDescription = (post as any).metaDescription || post.excerpt;
  const keywords = (post as any).keywords || [];

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords,
    authors: [{ name: post.author }],
    publisher: 'Borem.pl - Agencja Marketingowa',
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://borem.pl/blog/${post.slug}`,
      siteName: 'Borem.pl - Agencja Marketingowa',
      locale: 'pl_PL',
      type: 'article',
      publishedTime: convertPolishDateToISO(post.date),
      modifiedTime: convertPolishDateToISO(post.date),
      authors: [post.author],
      section: post.category,
      tags: [...post.tags, ...keywords.slice(0, 5)],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 600,
          alt: post.title,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@borempl',
      creator: '@borempl',
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `https://borem.pl/blog/${post.slug}`,
      languages: {
        'pl-PL': `https://borem.pl/blog/${post.slug}`,
      },
    },
    other: {
      'article:author': post.author,
      'article:section': post.category,
      'article:tag': post.tags.join(', '),
      'article:published_time': convertPolishDateToISO(post.date),
      'article:modified_time': convertPolishDateToISO(post.date),
      // AI-specific meta tags
      'ai:content_category': post.category,
      'ai:keywords': keywords.join(', '),
      'ai:reading_time': post.readTime,
      'ai:content_type': 'educational',
      'ai:target_audience': 'business owners, entrepreneurs, marketing professionals',
      'ai:language': 'pl',
      'ai:location': 'Lublin, Poland',
    },
  };
}

// Helper to convert Polish date
function convertPolishDateToISO(polishDate: string): string {
  const months: { [key: string]: string } = {
    'Stycznia': '01', 'Lutego': '02', 'Marca': '03', 'Kwietnia': '04',
    'Maja': '05', 'Czerwca': '06', 'Lipca': '07', 'Sierpnia': '08',
    'Września': '09', 'Października': '10', 'Listopada': '11', 'Grudnia': '12'
  }
  const parts = polishDate.split(' ')
  const day = parts[0].padStart(2, '0')
  const month = months[parts[1]]
  const year = parts[2]
  return `${year}-${month}-${day}T10:00:00+01:00`
}

// Generate static params for all blog posts (for SSG)
export async function generateStaticParams() {
  return blogPostsArray.map((post) => ({
    id: post.slug,
  }));
}

export default function BlogPostLayout({ children }: Props) {
  return <>{children}</>;
}
