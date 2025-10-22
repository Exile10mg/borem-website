import { post1 } from './post-1';
import { post2 } from './post-2';
import { post3 } from './post-3';
import { post4 } from './post-4';
import { post5 } from './post-5';
import { post6 } from './post-6';
import { post7 } from './post-7';
import { post8 } from './post-8';

// Eksportuj wszystkie posty jako obiekt (backward compatibility - by ID)
export const blogPostsData: { [key: string]: any } = {
  '1': post1,
  '2': post2,
  '3': post3,
  '4': post4,
  '5': post5,
  '6': post6,
  '7': post7,
  '8': post8,
};

// Eksportuj również jako array dla łatwiejszego iterowania
export const blogPostsArray = Object.values(blogPostsData);

// Typ dla wpisu z slug
type BlogPost = typeof post1 | typeof post2 | typeof post3 | typeof post4 | typeof post5 | typeof post6 | typeof post7 | typeof post8;

// Eksportuj obiekt z slug jako klucz (dla SEO-friendly URLs)
export const blogPostsBySlug: { [key: string]: BlogPost } = {
  'jak-stworzyc-skuteczna-strone-internetowa-2025': post1,
  'ai-w-biznesie-praktyczny-przewodnik-2025': post2,
  'ecommerce-2025-trendy-strategie-sprzedazy': post3,
  'seo-2025-kompletny-przewodnik-pozycjonowanie': post4,
  'responsive-design-mobile-first-2025': post5,
  'aplikacje-webowe-vs-natywne-pwa-2025': post6,
  'automatyzacja-procesow-biznesowych-ai-2025': post7,
  'jak-stworzyc-strone-internetowa-2025-przewodnik': post8,
};

// Helper function to get post by slug or id
export const getPostBySlugOrId = (slugOrId: string) => {
  return blogPostsBySlug[slugOrId] || blogPostsData[slugOrId];
};
