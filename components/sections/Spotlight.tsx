"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Calendar, Home, Stethoscope } from 'lucide-react';

export function Spotlight() {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.12 });

  return (
    <section ref={ref} className="section-wrapper bg-brown-tint relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-brown/[0.04] rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="content-container relative z-10">
        {/* Connecting label to Programs section above */}
        <div className={`text-center mb-7 md:mb-10 transition-all duration-600 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm tracking-wider uppercase">
            <span className="w-8 h-px bg-brand-orange/40" />
            See Our Programmes in Action
            <span className="w-8 h-px bg-brand-orange/40" />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image — reduced footprint with aspect constraint */}
          <div className={`md:col-span-5 w-full max-w-[320px] md:max-w-[380px] mx-auto relative rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="aspect-[4/3] md:aspect-[4/5] relative">
              <div className="absolute inset-0 bg-brand-brown/8 z-10 pointer-events-none" />
              <Image
                src="/images/AWIHF-Patiko.webp"
                alt="Acholi Women in Health Foundation team and community members at the Patiko Medical Outreach program"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>
            {/* Photo credit badge */}
            <div className="absolute bottom-3 left-3 z-20 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5">
              <span className="text-white/80 text-[11px] font-medium">Patiko, July 2025</span>
            </div>
          </div>

          {/* Content — expanded for balance */}
          <div className={`md:col-span-7 flex flex-col items-start transition-all duration-700 delay-150 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3">
              Programme Spotlight
            </span>
            <h2 className="text-[24px] md:text-[32px] font-bold text-brand-brown leading-[1.25] mb-4 md:mb-5">
              Patiko Medical Outreach - July 2025
            </h2>
            <p className="text-[#111111] text-[15px] md:text-[17px] leading-[1.65] mb-5 md:mb-6">
              Our largest single programme event reached over 1,000 households across four days, delivering free medical consultations, vision screenings, SRHR education, and post-abortion care referrals in the most underserved rural Acholi communities.
            </p>

            {/* Quick stats strip */}
            <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
              {[
                { icon: <Calendar className="w-4 h-4" />, text: '4 Days' },
                { icon: <Home className="w-4 h-4" />, text: '1,000+ Households' },
                { icon: <Stethoscope className="w-4 h-4" />, text: '6 Services Delivered' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 bg-white rounded-lg px-3.5 py-2 border border-gray-200/80 shadow-sm"
                >
                  <span className="text-brand-green">{stat.icon}</span>
                  <span className="text-brand-brown font-semibold text-[13px]">{stat.text}</span>
                </div>
              ))}
            </div>

            <Link href="/impact">
              <Button variant="secondary" size="medium">Read Full Story</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
