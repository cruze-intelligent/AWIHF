import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Calendar, User, Clock, Bookmark } from 'lucide-react';
import { DonateCTA } from '@/components/sections/DonateCTA';
import { PortableTextRenderer } from '@/components/cms/PortableTextRenderer';
import { getNewsPost, getNewsPosts } from '@/lib/content/news';

type NewsDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const newsPosts = await getNewsPosts();
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: NewsDetailProps): Promise<Metadata> {
  const params = await props.params;
  const article = await getNewsPost(params.slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | AWIHF News`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function NewsDetailPage(props: NewsDetailProps) {
  const params = await props.params;
  const article = await getNewsPost(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="w-full bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-gray-500">
          <Link href="/news" className="flex items-center gap-2 hover:text-brand-orange transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to News Updates
          </Link>
          <div className="flex items-center gap-1 text-brand-green font-semibold uppercase tracking-wider text-xs">
            <Bookmark className="w-4 h-4 shrink-0" /> Official Milestone
          </div>
        </div>
      </div>

      <article className="section-wrapper bg-white py-8 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 md:mb-8">
            <Badge variant="news" className="!bg-brand-orange !text-white mb-4 text-[12px] shadow-sm ring-1 ring-brand-orange/20">{article.category}</Badge>
            <h1 className="text-[26px] md:text-4xl lg:text-[40px] font-bold text-brand-brown leading-tight mb-5 md:mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-3 md:gap-6 text-sm text-gray-500 border-y border-gray-100 py-3 md:py-4">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-brand-orange" /> By {article.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-brand-orange" /> {article.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-brand-orange" /> {article.readTime}</span>
            </div>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-7 md:mb-10 shadow-sm border border-gray-200 bg-gray-50">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {article.body?.length ? (
            <div className="text-[#111111]">
              <PortableTextRenderer value={article.body} />
            </div>
          ) : (
            <div className="text-[#111111] text-[16px] md:text-[18px] leading-[1.7] space-y-5 md:space-y-6">
              {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}

          <div className="border-t border-gray-100 pt-6 md:pt-8 mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <Link href="/news" className="w-full sm:w-auto">
              <Button variant="secondary" size="medium" className="w-full sm:w-auto">
                All Articles
              </Button>
            </Link>
            <Link href="/donate" className="w-full sm:w-auto">
              <Button variant="primary" size="medium" className="w-full sm:w-auto">
                Support AWIHF Programs
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <DonateCTA />
    </>
  );
}
