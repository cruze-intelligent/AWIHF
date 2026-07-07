import React from 'react';
import { NewsSearchClient } from '@/components/news/NewsSearchClient';
import { getNewsPosts } from '@/lib/content/news';

export default async function NewsPage() {
  const newsPosts = await getNewsPosts();

  return (
    <section className="section-wrapper bg-white">
      <div className="content-container">
        <div className="mb-7 md:mb-10 text-center md:text-left">
          <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-2 block">Our Chronicles</span>
          <h1 className="text-2xl md:text-[40px] font-bold text-brand-brown mb-3 md:mb-4">News & Announcements</h1>
          <p className="text-gray-500 text-[15px] md:text-[18px] leading-relaxed">Stay updated with our official milestones, field reports, and program announcements.</p>
        </div>

        <NewsSearchClient posts={newsPosts} />
      </div>
    </section>
  );
}
