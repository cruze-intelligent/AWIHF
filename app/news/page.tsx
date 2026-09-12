import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { NewsSearchClient } from '@/components/news/NewsSearchClient';
import { getNewsPosts } from '@/lib/content/news';

export const metadata: Metadata = {
  title: 'News & Announcements',
  description: 'Official AWIHF news, field reports, outreach updates, awards announcements, and programme milestones from Gulu and Northern Uganda.',
  alternates: {
    canonical: '/news',
  },
};

export default async function NewsPage() {
  const newsPosts = await getNewsPosts();

  return (
    <>
      <PageHero
        title="News & Announcements"
        subtitle="Stay updated with our official milestones, field reports, and program announcements."
      />

      <section className="section-wrapper bg-white">
        <div className="content-container">
          <NewsSearchClient posts={newsPosts} />
        </div>
      </section>
    </>
  );
}
