import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Poradniki o Stronach WWW, E-commerce i Marketingu 2025',
  description: '📚 Blog o tworzeniu stron internetowych ✓ Poradniki SEO ✓ E-commerce 2025 ✓ AI w biznesie ✓ Marketing internetowy ✓ Responsive design ✓ Web development ✓ Praktyczne porady i case studies',
  keywords: [
    'blog o stronach internetowych',
    'poradniki web development',
    'jak stworzyć stronę internetową',
    'seo poradnik 2025',
    'e-commerce blog',
    'marketing internetowy blog',
    'ai w biznesie',
    'responsive design',
    'tworzenie stron www porady',
    'pozycjonowanie stron blog',
    'sklep internetowy poradnik',
    'aplikacje webowe blog',
    'najlepsze praktyki web development',
  ],
  openGraph: {
    title: 'Blog - Poradniki o Stronach WWW, E-commerce i Marketingu 2025 | Borem.pl',
    description: '📚 Blog o tworzeniu stron internetowych ✓ Poradniki SEO ✓ E-commerce 2025 ✓ AI w biznesie ✓ Praktyczne porady',
    url: 'https://borem.pl/blog',
    type: 'website',
  },
  twitter: {
    title: 'Blog - Poradniki o Stronach WWW, E-commerce i Marketingu 2025',
    description: '📚 Blog o tworzeniu stron internetowych ✓ Poradniki SEO ✓ E-commerce 2025 ✓ AI w biznesie',
  },
  alternates: {
    canonical: 'https://borem.pl/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
