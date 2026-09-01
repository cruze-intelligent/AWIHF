"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export interface ProgrammeInPracticeGalleryProps {
  title: string;
  description?: string;
  images: string[];
  autoPlayInterval?: number;
  className?: string;
}

export function ProgrammeInPracticeGallery({
  title,
  description,
  images,
  autoPlayInterval = 4200,
  className = '',
}: ProgrammeInPracticeGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = images.length;

  // Next slide (moves from right to left)
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Pure automatic right-to-left loop
  useEffect(() => {
    if (total <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [nextSlide, total, autoPlayInterval]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className={`section-wrapper bg-gray-50/80 border-t border-gray-100 ${className}`}>
      <div className="content-container">
        {/* 1. Heading (Top) */}
        <div className="text-center max-w-2xl mx-auto mb-5 md:mb-7">
          <h2 className="section-heading mb-3">Programme in Practice</h2>
          {/* 2. Sub-explanation (Below Heading) */}
          <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed">
            {description ||
              `Field documentation and photographic records from our ${title} community operations and outreach activities across Northern Uganda.`}
          </p>
        </div>

        {/* 3. Automatic Endless Slide of Images (Below Explanation) — 100% Uncropped & Proportioned */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[280px] sm:h-[340px] md:h-[400px] lg:h-[440px] w-full rounded-2xl overflow-hidden bg-amber-50 shadow-sm border border-gray-200">
            {images.map((src, index) => {
              const isActive = index === currentIndex;
              const isPrev = (currentIndex - 1 + total) % total === index;
              const isNext = (currentIndex + 1) % total === index;

              // Smooth right-to-left slide transition
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
                  key={src}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out flex items-center justify-center ${translateClass}`}
                  aria-hidden={!isActive}
                >
                  {/* Harmonious ambient backdrop to seamlessly blend aspect ratios without white voids */}
                  <Image
                    src={src}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="object-cover blur-xl scale-110 opacity-30 pointer-events-none"
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                  {/* Whole, uncropped, authentic image fitting perfectly */}
                  <Image
                    src={src}
                    alt={`${title} field documentation photo ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-contain relative z-10 p-2 sm:p-3"
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
