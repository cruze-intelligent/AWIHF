import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Calendar, User, Clock, Bookmark, ExternalLink } from 'lucide-react';
import { DonateCTA } from '@/components/sections/DonateCTA';
import { PortableTextRenderer } from '@/components/cms/PortableTextRenderer';
import { getNewsPost, getNewsPosts } from '@/lib/content/news';
import { organizationProfile } from '@/lib/config/organization';

type NewsDetailProps = {
  params: Promise<{ slug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://acholiwomeninhealth.org';

function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }

  return `${siteUrl}${pathOrUrl}`;
}

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

  const articleImage = article.articleImage || article.image;
  const seoImage = article.seoImage || articleImage;
  const description = article.seoDescription || article.excerpt;

  return {
    title: article.seoTitle || `${article.title} | AWIHF News`,
    description,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `/news/${article.slug}`,
      title: article.title,
      description,
      images: [
        {
          url: seoImage,
          alt: article.imageAlt || article.articleImageAlt || article.title,
        },
      ],
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export default async function NewsDetailPage(props: NewsDetailProps) {
  const params = await props.params;
  const article = await getNewsPost(params.slug);

  if (!article) {
    notFound();
  }

  const articleImage = article.articleImage || article.image;
  const articleImageAlt = article.articleImageAlt || article.imageAlt || article.title;
  const description = article.seoDescription || article.excerpt;
  const articleUrl = `${siteUrl}/news/${article.slug}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description,
    image: [absoluteUrl(articleImage)],
    datePublished: article.publishedAt || article.date,
    dateModified: article.publishedAt || article.date,
    mainEntityOfPage: articleUrl,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'NGO',
      name: organizationProfile.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/images/AWIHF logo.webp'),
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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

          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-7 md:mb-10 shadow-sm border border-gray-200 bg-amber-50 flex items-center justify-center">
            <Image
              src={articleImage}
              alt=""
              fill
              aria-hidden="true"
              className="object-cover blur-xl scale-110 opacity-30 pointer-events-none"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <Image
              src={articleImage}
              alt={articleImageAlt}
              fill
              className="object-contain relative z-10 p-1 sm:p-2"
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

          {article.votingUrl && (
            <div className="mt-7 md:mt-9 rounded-xl border border-brand-orange/20 bg-orange-tint/40 p-5 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">Vote for AWIHF</h2>
              <p className="text-[#111111] text-[15px] md:text-[16px] leading-relaxed mb-5">
                Select Health and Social Care Social Enterprise of the Year, find Acholi Women in Health Foundation, and cast your vote.
              </p>
              <a
                href={article.votingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-gradient-brand-h px-5 py-3 text-[15px] md:text-[16px] font-semibold text-white transition-all duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
              >
                Vote Now
                <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
              </a>
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
