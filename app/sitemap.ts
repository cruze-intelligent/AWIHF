import type { MetadataRoute } from 'next';
import { getNewsPosts } from '@/lib/content/news';

const staticRoutes = [
  '',
  '/about',
  '/contact',
  '/donate',
  '/get-involved',
  '/impact',
  '/impact/report',
  '/mentorship',
  '/news',
  '/programs',
  '/team',
];

const programRoutes = [
  '/programs/maternal-reproductive-health',
  '/programs/mental-health-trauma-support',
  '/programs/community-health-education',
  '/programs/healthcare-systems-strengthening',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://acholiwomeninhealth.org';
  const newsPosts = await getNewsPosts();
  const routes = [
    ...staticRoutes,
    ...programRoutes,
    ...newsPosts.map((post) => `/news/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
