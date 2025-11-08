import { Metadata } from 'next';
import { projects, Project } from '@/data/projects';

type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p: Project) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Realizacja nie znaleziona | Borem.pl',
      description: 'Szukany projekt nie został znaleziony w naszym portfolio.',
    };
  }

  const metaTitle = `${project.title} - Case Study | Portfolio Borem.pl`;
  const metaDescription = project.description || `${project.subtitle} - Realizacja w kategorii ${project.category}. Technologie: ${project.technologies.slice(0, 3).join(', ')}.`;
  const keywords = [
    project.title,
    ...project.tags,
    project.category,
    project.client,
    'case study',
    'portfolio',
    'realizacja',
  ];

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords,
    authors: [{ name: 'Borem.pl' }],
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://borem.pl/realizacje/${project.slug}`,
      type: 'article',
      images: [
        {
          url: project.image,
          width: 1200,
          height: 800,
          alt: project.title,
        },
      ],
      siteName: 'Borem.pl - Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [project.image],
      creator: '@borempl',
    },
    alternates: {
      canonical: `https://borem.pl/realizacje/${project.slug}`,
    },
    other: {
      'article:tag': project.tags.join(', '),
      'article:section': project.category,
      'project:client': project.client,
      'project:year': project.year,
      'project:duration': project.duration,
      'project:technologies': project.technologies.join(', '),
    },
  };
}

// Generate static params for all projects (for SSG)
export async function generateStaticParams() {
  return projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

export default function ProjectLayout({ children }: Props) {
  return <>{children}</>;
}
