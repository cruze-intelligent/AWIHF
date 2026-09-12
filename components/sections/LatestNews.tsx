import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { StoryCard } from '../shared/StoryCard';
import { getFeaturedNewsPosts } from '@/lib/content/news';

export async function LatestNews() {
  const latestPosts = await getFeaturedNewsPosts(3);

  return (
    <section className="section-wrapper bg-white">
      <div className="content-container">
        <div className="text-center md:text-left mb-5 md:mb-8">
          <h2 className="section-heading">Latest News & Updates</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7 mt-5 md:mt-8 mb-8 md:mb-10">
          {latestPosts.map((item) => (
            <StoryCard
              key={item.slug}
              title={item.title}
              category={item.category}
              date={item.date}
              author={item.author}
              excerpt={item.excerpt}
              image={item.image}
              imageAlt={item.imageAlt}
              href={`/news/${item.slug}`}
              ctaText="Read More"
            />
          ))}
        </div>
        <div className="text-center">
          <Link href="/news">
            <Button variant="secondary" size="medium">View All News & Announcements</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
