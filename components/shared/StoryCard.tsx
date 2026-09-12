import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ArrowRight } from 'lucide-react';

export interface StoryCardProps {
  slug?: string;
  title: string;
  category: string;
  date?: string;
  author?: string;
  excerpt: string;
  image: string;
  imageAlt?: string;
  href: string;
  ctaText?: string;
  className?: string;
}

export function StoryCard({
  title,
  category,
  date,
  author,
  excerpt,
  image,
  imageAlt,
  href,
  ctaText = 'Read More',
  className = '',
}: StoryCardProps) {
  return (
    <Card className={`group p-0 overflow-hidden flex flex-col h-full bg-white border border-gray-200 hover:border-brand-orange/30 hover:shadow-md transition-all duration-300 ${className}`}>
      {/* Controlled Height Image Container with Uncropped Image Presentation */}
      <div className="relative h-44 sm:h-48 w-full bg-amber-50 overflow-hidden border-b border-gray-100 flex items-center justify-center">
        {/* Ambient blurred backdrop ensuring no harsh white or empty side voids */}
        <Image
          src={image}
          alt=""
          fill
          aria-hidden="true"
          className="object-cover blur-lg scale-110 opacity-35 pointer-events-none"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Whole, uncropped, authentic image */}
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-[1.02] p-1"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 z-20">
          <Badge
            variant="news"
            className="!bg-brand-orange !text-white text-[11px] font-semibold tracking-wide shadow-sm ring-1 ring-white/60"
          >
            {category}
          </Badge>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Metadata */}
        {(date || author) && (
          <div className="text-gray-400 text-xs mb-1.5 font-medium flex items-center gap-1.5">
            {date && <span>{date}</span>}
            {date && author && <span>•</span>}
            {author && <span>{author.startsWith('By ') ? author : `By ${author}`}</span>}
          </div>
        )}

        {/* Title */}
        <h3 className="text-[16px] md:text-[17px] font-bold text-brand-brown mb-2 leading-snug group-hover:text-brand-orange transition-colors duration-200 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-[13px] md:text-[13.5px] leading-relaxed mb-4 line-clamp-3 flex-1">
          {excerpt}
        </p>

        {/* CTA Link */}
        <div className="mt-auto pt-2 border-t border-gray-50">
          <Link
            href={href}
            className="text-brand-orange font-semibold text-xs md:text-sm hover:text-brand-gold transition-colors inline-flex items-center gap-1 group/link"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
