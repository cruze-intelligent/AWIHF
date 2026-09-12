"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

export type ProgrammeGalleryImage =
  | string
  | {
      src: string;
      alt: string;
      caption?: string;
    };

export interface ProgrammeInPracticeGalleryProps {
  title: string;
  heading?: string;
  description?: string;
  images: ProgrammeGalleryImage[];
  autoPlayInterval?: number;
  className?: string;
  wrapInSection?: boolean;
  showHeader?: boolean;
}

export function ProgrammeInPracticeGallery({
  title,
  heading = 'Programme in Practice',
  description,
  images,
  autoPlayInterval = 4200,
  className = '',
  wrapInSection = true,
  showHeader = true,
}: ProgrammeInPracticeGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const slides = images.map((image) =>
    typeof image === 'string'
      ? {
          src: image,
          alt: `${title} field documentation photo`,
          caption: undefined,
        }
      : image
  );
  const total = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (total <= 1 || prefersReducedMotion) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [nextSlide, total, autoPlayInterval, prefersReducedMotion]);

  if (!slides.length) {
    return null;
  }

  const activeSlide = slides[currentIndex];

  const galleryContent = (
    <>
      {showHeader && (
        <div className="text-center max-w-2xl mx-auto mb-5 md:mb-7">
          <h2 className="section-heading mb-3">{heading}</h2>
          <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed">
            {description ||
              `Field documentation and photographic records from our ${title} community operations and outreach activities across Northern Uganda.`}
          </p>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div
          className="relative h-[250px] sm:h-[310px] md:h-[370px] lg:h-[410px] w-full rounded-2xl overflow-hidden bg-amber-50 shadow-sm border border-gray-200"
          role="group"
          aria-roledescription="carousel"
          aria-label={`${heading} image gallery`}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            const isPrev = (currentIndex - 1 + total) % total === index;
            const isNext = (currentIndex + 1) % total === index;

            let translateClass = 'translate-x-full opacity-0 pointer-events-none z-0';
            if (isActive) {
              translateClass = 'translate-x-0 opacity-100 z-10';
            } else if (isPrev) {
              translateClass = '-translate-x-full opacity-0 pointer-events-none z-0';
            } else if (isNext) {
              translateClass = 'translate-x-full opacity-0 pointer-events-none z-0';
            }

            return (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out motion-reduce:transition-none flex items-center justify-center ${translateClass}`}
                aria-hidden={!isActive}
              >
                <Image
                  src={slide.src}
                  alt=""
                  fill
                  aria-hidden="true"
                  className="object-cover blur-xl scale-110 opacity-30 pointer-events-none"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-contain relative z-10 p-2 sm:p-3"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
            );
          })}
        </div>
        {activeSlide?.caption && (
          <p
            className="mt-3 md:mt-4 text-center text-[13px] md:text-[14px] leading-relaxed text-gray-600"
            aria-live="polite"
          >
            {activeSlide.caption}
          </p>
        )}
      </div>
    </>
  );

  if (!wrapInSection) {
    return <div className={className}>{galleryContent}</div>;
  }

  return (
    <section className={`section-wrapper bg-gray-50/80 border-t border-gray-100 ${className}`}>
      <div className="content-container">{galleryContent}</div>
    </section>
  );
}
