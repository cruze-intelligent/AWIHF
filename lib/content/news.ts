import newsSeed from '@/content/news.json';
import { logger } from '@/lib/observability/logger';
import { sanityFetch } from '@/lib/sanity/client';
import { imageUrl } from '@/lib/sanity/image';

export type CmsNewsArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string | Record<string, unknown>;
  author: string;
  readTime: string;
  content: string[];
  body?: unknown[];
};

export type NewsPost = Omit<CmsNewsArticle, 'image'> & {
  image: string;
};

function normalizeNewsArticle(article: CmsNewsArticle): NewsPost {
  return {
    slug: article.slug,
    title: article.title,
    category: article.category,
    date: article.date,
    excerpt: article.excerpt,
    image: imageUrl(article.image, 1200, 675) || '/images/AWIHF-Patiko.webp',
    author: article.author,
    readTime: article.readTime,
    content: article.content,
    body: article.body,
  };
}

async function fetchNewsFromCms(): Promise<CmsNewsArticle[]> {
  const sanityArticles = await sanityFetch<CmsNewsArticle[]>(`
    *[_type == "newsArticle"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      category,
      "excerpt": summary,
      "image": featuredImage,
      author,
      "date": coalesce(publishedAt, _createdAt),
      "readTime": coalesce(readTime, "3 min read"),
      body,
      "content": coalesce(body[].children[].text, [])
    }
  `).catch((error) => {
    logger.error('sanity.news.fetch_failed', error);
    return null;
  });

  if (sanityArticles?.length) {
    return sanityArticles;
  }

  return newsSeed as CmsNewsArticle[];
}

export async function getNewsPosts() {
  const articles = await fetchNewsFromCms();
  return articles.map(normalizeNewsArticle);
}

export async function getFeaturedNewsPosts(limit = 3) {
  const articles = await getNewsPosts();
  return articles.slice(0, limit);
}

export async function getNewsPost(slug: string) {
  const articles = await getNewsPosts();
  return articles.find((post) => post.slug === slug);
}
