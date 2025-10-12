import { post1 } from './post-1';
import { post2 } from './post-2';
import { post3 } from './post-3';
import { post4 } from './post-4';
import { post5 } from './post-5';
import { post6 } from './post-6';

// Eksportuj wszystkie posty jako obiekt
export const blogPostsData: { [key: string]: any } = {
  '1': post1,
  '2': post2,
  '3': post3,
  '4': post4,
  '5': post5,
  '6': post6,
};

// Eksportuj również jako array dla łatwiejszego iterowania
export const blogPostsArray = Object.values(blogPostsData);
