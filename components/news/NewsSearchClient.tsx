"use client";

import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { StoryCard } from '@/components/shared/StoryCard';
import type { NewsPost } from '@/lib/content/news';

export function NewsSearchClient({ posts }: { posts: NewsPost[] }) {
  const [query, setQuery] = useState('');

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return posts;
    }

    return posts.filter((post) =>
      [post.title, post.excerpt, post.category].some((field) => field.toLowerCase().includes(normalized))
    );
  }, [posts, query]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-7 md:mb-10 items-center justify-between border-b border-gray-100 pb-5 md:pb-6">
        <input
          type="search"
          placeholder="Search news..."
          className="input-field max-w-md border-gray-200 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
          aria-label="Search news"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto mt-2 md:mt-0">
          <Badge variant="news" className="!bg-brand-orange !text-white shadow-sm ring-1 ring-brand-orange/20">All Updates</Badge>
          <Badge variant="news" className="bg-gray-100 text-gray-600 hover:bg-gray-200">Outreach</Badge>
          <Badge variant="news" className="bg-gray-100 text-gray-600 hover:bg-gray-200">Mentorship</Badge>
          <Badge variant="news" className="bg-gray-100 text-gray-600 hover:bg-gray-200">Preventive Care</Badge>
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8 text-center">
          <h2 className="text-xl font-bold text-brand-brown mb-2">No results found</h2>
          <p className="text-gray-600 mb-5">Try another keyword or clear the search field.</p>
          <button type="button" onClick={() => setQuery('')} className="font-semibold text-brand-orange hover:text-brand-brown">
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
          {filteredPosts.map((item) => (
            <StoryCard
              key={item.slug}
              title={item.title}
              category={item.category}
              date={item.date}
              author={item.author}
              excerpt={item.excerpt}
              image={item.image}
              href={`/news/${item.slug}`}
              ctaText="Read Full Article"
            />
          ))}
        </div>
      )}
    </>
  );
}
