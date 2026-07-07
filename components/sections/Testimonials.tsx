"use client";

import React from 'react';
import Link from 'next/link';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.1 });

  const testimonials = [
    {
      quote: "Before the outreach, I had no access to antenatal care. The nurses from AWIHF not only checked on my baby but also educated me on safe motherhood.",
      author: "Acayo Grace",
      role: "Community Member, Patiko",
      initials: "AG"
    },
    {
      quote: "The trauma healing groups have given us a safe space to share our pain. For the first time in years, I feel like I am not alone.",
      author: "Laker Susan",
      role: "Participant, Trauma Support Group",
      initials: "LS"
    },
    {
      quote: "Being trained as a peer educator empowered me to help other girls in my village stay in school by managing their reproductive health safely.",
      author: "Apiyo Florence",
      role: "SRHR Peer Educator",
      initials: "AF"
    }
  ];

  return (
    <section ref={ref} className="section-wrapper bg-white relative overflow-hidden">
      {/* Subtle connecting element to Impact section above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-brand-brown/20 to-transparent" />

      <div className="content-container">
        <div className={`text-center mb-9 md:mb-16 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3">
            Community Voices
          </span>
          <h2 className="section-heading text-center mx-auto after:mx-auto after:left-auto after:right-auto">
            Impact Through Their Eyes
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[17px] leading-[1.6] max-w-xl mx-auto mt-2">
            Real stories from the women and communities we serve — proof that change is happening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className={`group bg-gray-50 border-none relative pt-12 md:pt-14 pb-6 md:pb-8 px-5 md:px-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 rounded-2xl border-l-0 hover:border-l-[3px] hover:border-l-brand-orange transition-all duration-300 ${
                isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isRevealed ? `${150 + i * 120}ms` : '0ms' }}
            >
              <Quote className="absolute top-6 left-6 w-8 h-8 text-brand-orange/15 rotate-180" />
              
              {/* Testimonial Quote */}
              <p className="text-[#111111] text-[15px] md:text-[16px] leading-[1.65] mb-6 md:mb-8 relative z-10 italic flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>
              
              {/* Author & Initial Badge details */}
              <div className="flex items-center gap-4 border-t border-gray-200/50 pt-5 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-brand-h text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-brand-brown text-[15px] leading-tight">{t.author}</div>
                  <div className="text-[13px] text-brand-green font-semibold mt-0.5">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA to full stories */}
        <div className={`text-center mt-8 md:mt-12 transition-all duration-700 delay-500 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link href="/impact#stories">
            <Button variant="secondary" size="medium">
              Read More Stories →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
