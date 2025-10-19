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
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://borem.pl/blog/${post.slug}`,
      type: 'article',
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [post.image],
      creator: '@borempl',
    },
    alternates: {
      canonical: `https://borem.pl/blog/${post.slug}`,
    },
    other: {
      'article:author': post.author,
      'article:section': post.category,
      'article:tag': post.tags.join(', '),
    },
  };
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
