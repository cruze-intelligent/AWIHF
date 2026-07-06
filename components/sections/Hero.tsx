"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { ChevronDown, Users } from 'lucide-react';

export function Hero() {
  const mounted = true;

  return (
    <section className="w-full flex items-center justify-center relative overflow-hidden min-h-[520px] md:min-h-[600px] px-4 md:px-8 lg:px-16 py-[96px]">
      {/* Layer 1: Background Image positioned at the top of the container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/AWIHF-Hero.webp"
          alt="Acholi Women in Health Foundation field healthcare operations in Northern Uganda"
          fill
          priority
          className="object-cover object-top transition-transform duration-500"
        />
      </div>

      {/* Layer 2: Layered gradient overlay for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-brand-brown/70 z-10" />

      {/* Layer 3: Content Layer */}
      <div className="max-w-content mx-auto text-center flex flex-col items-center z-20">
        {/* Floating credibility badge */}
        <Link
          href="/impact/report"
          aria-label="View the 2025 AWIHF Impact Report"
          className={`inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          } hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-brown`}
          style={{ animation: mounted ? 'floatBadge 4s ease-in-out infinite 1.5s' : 'none' }}
        >
          <Users className="w-4 h-4 text-brand-gold" />
          <span className="text-white/90 text-[13px] font-medium tracking-wide">
            1,000+ households reached in 2025
          </span>
        </Link>

        {/* Heading — staggered fade */}
        <h1
          className={`text-white text-4xl md:text-[52px] font-bold leading-[1.08] mb-6 max-w-4xl transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Healing Lives, Transforming Communities.
        </h1>

        {/* Subtext — delayed fade */}
        <p
          className={`text-white/80 text-[18px] leading-[1.65] max-w-2xl mb-10 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Bringing community-rooted health services to the women and girls of Northern Uganda.
        </p>

        {/* Buttons — further delayed */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-[400ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link href="/donate">
            <Button size="large" variant="primary" className="w-full sm:w-auto shadow-lg shadow-brand-orange/25">
              Donate Now
            </Button>
          </Link>
          <Link href="/programs">
            <Button size="large" variant="ghost" className="w-full sm:w-auto text-white border-white/60 hover:bg-white/10 hover:text-white hover:border-white">
              Our Work
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 transition-all duration-700 delay-[800ms] ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ animation: mounted ? 'scrollHint 2s ease-in-out infinite 2s' : 'none' }}
      >
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}
