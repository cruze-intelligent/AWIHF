import React from 'react';
import Image from 'next/image';

export interface HeroStat {
  value: string;
  label: string;
  description?: string;
}

export interface PageHeroProps {
  /** Main heading title for the page */
  title: string;
  /** Optional subtitle or descriptive text */
  subtitle?: string | React.ReactNode;
  /** Optional stats rendered floating across the bottom boundary of the hero */
  stats?: HeroStat[];
  /** Optional grid column override for stats (2, 3, or 4). Defaults based on stats length */
  statsColumns?: 2 | 3 | 4;
  /** Optional action buttons or custom elements rendered inside the hero banner */
  children?: React.ReactNode;
  /** Optional custom background image (defaults to the canonical homepage hero image) */
  heroImage?: string;
  /** Optional alt text for the background image */
  imageAlt?: string;
  className?: string;
}

/**
 * StandardPageHero
 * Authoritative shared hero component for all internal pages across the AWIHF website.
 * Provides canonical dimensions, layered subdued photographic texture from the homepage hero image,
 * branded orange/gold gradient overlay, crisp typography, and optional floating statistics.
 */
export function PageHero({
  title,
  subtitle,
  stats = [],
  statsColumns,
  children,
  heroImage = '/images/AWIHF-Hero.webp',
  imageAlt,
  className = '',
}: PageHeroProps) {
  // Determine grid column layout based on number of stats if not explicitly passed
  const gridColsClass = React.useMemo(() => {
    const count = statsColumns || stats.length;
    if (count === 4) return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4';
    if (count === 2) return 'grid-cols-1 md:grid-cols-2';
    return 'grid-cols-1 md:grid-cols-3';
  }, [statsColumns, stats.length]);

  return (
    <>
      {/* Canonical Hero Banner */}
      <section className={`relative w-full min-h-[140px] md:min-h-[280px] py-8 px-4 md:py-16 md:px-8 flex items-center justify-center overflow-hidden bg-brand-brown ${className}`}>
        {/* Background Layers: Homepage photograph underneath + Semi-transparent orange/gold brand overlay on top */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Layer 3 (Bottom): Shared homepage hero image */}
          <Image
            src={heroImage}
            alt={imageAlt || `${title} hero banner`}
            fill
            className="object-cover object-[50%_25%] md:object-[50%_20%]"
            priority
            sizes="100vw"
          />
          {/* Layer 2 (Middle): AWIHF signature orange-to-gold brand overlay with tuned translucency */}
          <div className="absolute inset-0 bg-gradient-brand opacity-85" />
          <div className="absolute inset-0 bg-brand-brown/12" />
        </div>

        {/* Layer 1 (Top): 100% Opaque Hero Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl md:text-[36px] lg:text-[40px] font-bold leading-[1.15] md:leading-[1.2] mb-2 md:mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/90 text-sm md:text-[18px] leading-relaxed max-w-2xl mx-auto font-normal">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-5 md:mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
              {children}
            </div>
          )}
        </div>
      </section>

      {/* Optional Floating Impact Stats */}
      {stats.length > 0 && (
        <section className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-0 md:-mt-10 relative z-20 bg-gray-50 md:bg-transparent">
          <div className="max-w-content mx-auto">
            <div className={`grid ${gridColsClass} gap-4 md:gap-6`}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 shadow-sm md:shadow-lg p-5 md:p-6 rounded-xl text-center flex flex-col items-center justify-center min-h-[112px] md:min-h-[140px] hover:shadow-xl transition-all duration-200"
                >
                  <div
                    className={`text-brand-green font-bold mb-2 leading-tight ${
                      stat.value.length > 10
                        ? 'text-2xl md:text-[26px]'
                        : 'text-3xl md:text-4xl'
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-brand-brown font-semibold text-sm md:text-base">
                    {stat.label}
                  </div>
                  {stat.description && (
                    <p className="text-gray-500 text-xs mt-1 leading-snug">
                      {stat.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
