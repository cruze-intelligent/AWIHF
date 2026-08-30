import React from 'react';
import { PageHero } from '@/components/shared/PageHero';
import { NewsSearchClient } from '@/components/news/NewsSearchClient';
import { getNewsPosts } from '@/lib/content/news';

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
