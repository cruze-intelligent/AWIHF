"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Calendar, MapPin, Users } from 'lucide-react';

export function Spotlight() {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.12 });

  return (
    <section ref={ref} className="section-wrapper bg-brown-tint relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-brown/[0.04] rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="content-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image — sized to preserve the full launch photo */}
          <div className={`md:col-span-5 w-full max-w-[330px] md:max-w-[392px] mx-auto relative rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="aspect-[4/3] relative bg-brand-brown/5">
              <div className="absolute inset-0 bg-brand-brown/8 z-10 pointer-events-none" />
              <Image
                src="/images/AWIHF-Launch.webp"
                alt="Official launch of Acholi Women in Health Foundation at Gulu University Library Hall on 11 July 2026"
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100vw, 392px"
              />
            </div>
            {/* Photo credit badge */}
            <div className="absolute bottom-3 left-3 z-20 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5">
              <span className="text-white/80 text-[11px] font-medium">Official Launch, July 2026</span>
            </div>
          </div>

          {/* Content — expanded for balance */}
          <div className={`md:col-span-7 flex flex-col items-start transition-all duration-700 delay-150 ${isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h2 className="text-[24px] md:text-[32px] font-bold text-brand-brown leading-[1.25] mb-4 md:mb-5">
              Official Launch of AWIHF, July 2026
            </h2>
            <p className="text-[#111111] text-[15px] md:text-[17px] leading-[1.65] mb-5 md:mb-6">
              Acholi Women in Health Foundation was officially launched at Gulu University Library Hall in a gathering that affirmed our long-term commitment to women- and girl-centered healthcare in Northern Uganda. Graced by Deputy IGG Dr. Patricia Acan Okiria, Commissioner for Non-Communicable Diseases with the Ministry of Health Oyoo Charles Akiya, and a broad range of partners and stakeholders, the launch marked a defining moment for AWIHF&apos;s community-rooted mission and the next chapter of our work.
            </p>

            {/* Quick stats strip */}
            <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
              {[
                { icon: <Calendar className="w-4 h-4" />, text: '11 July 2026' },
                { icon: <MapPin className="w-4 h-4" />, text: 'Gulu University Library Hall' },
                { icon: <Users className="w-4 h-4" />, text: 'Leaders & Stakeholders' },
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

            <Link href="/news/awihf-official-launch-2026">
              <Button variant="secondary" size="medium">Read Launch Story</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
