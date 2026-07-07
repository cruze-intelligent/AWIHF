import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { getFeaturedNewsPosts } from '@/lib/content/news';

export async function LatestNews() {
  const latestPosts = await getFeaturedNewsPosts(3);

  return (
    <section className="section-wrapper bg-white">
      <div className="content-container">
        <div className="text-center md:text-left mb-5 md:mb-8">
          <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-2 block">Recent Milestones</span>
          <h2 className="section-heading">Latest News & Updates</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-5 md:mt-8 mb-8 md:mb-10">
          {latestPosts.map((item) => (
            <Card key={item.slug} className="group p-0 overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-video w-full bg-gray-100 overflow-hidden border-b border-gray-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 z-30">
                  <Badge variant="news" className="!bg-brand-orange !text-white text-[12px] shadow-md ring-1 ring-white/70">{item.category}</Badge>
                </div>
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <span className="text-gray-400 text-xs mb-2 block font-medium">{item.date}</span>
                <h4 className="text-[17px] md:text-[20px] font-semibold text-brand-brown mb-3 leading-[1.4] group-hover:text-brand-orange transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-4 flex-1">{item.excerpt}</p>
                <div className="mt-auto">
                  <Link href={`/news/${item.slug}`} className="text-brand-orange font-semibold text-sm hover:text-brand-gold transition-colors inline-flex items-center">
                    Read More <span className="ml-1">-&gt;</span>
                  </Link>
                </div>
              </div>
            </Card>
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
