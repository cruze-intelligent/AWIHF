"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Heart, Award, MessageSquare } from 'lucide-react';

const pathways = [
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Donate',
    description: 'Fund safe births, mental health circles, cervical cancer screenings, and school dignity pad kits. Every contribution reaches the grassroots directly.',
    cta: 'Make a Donation',
    href: '/donate',
    accent: 'from-brand-orange to-brand-gold',
    iconBg: 'bg-brand-orange/10 text-brand-orange',
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Volunteer & Mentor',
    description: 'Are you a healthcare professional or student? Serve as a clinical mentor or community health educator in Northern Uganda.',
    cta: 'Apply to Volunteer',
    href: '/contact?subject=volunteer',
    accent: 'from-brand-green to-emerald-500',
    iconBg: 'bg-brand-green/10 text-brand-green',
  },
  {
    icon: <MessageSquare className="w-7 h-7" />,
    title: 'Advocate & Share',
    description: 'Amplify Acholi women\'s health rights. Share our impact stories, join national campaigns, and help raise awareness across your networks.',
    cta: 'Read Impact Stories',
    href: '/impact',
    accent: 'from-brand-brown to-amber-800',
    iconBg: 'bg-brand-brown/10 text-brand-brown',
  },
];

export function GetInvolvedCTA() {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.12 });

  return (
    <section ref={ref} className="section-wrapper bg-green-tint/50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-orange/[0.04] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="content-container relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 md:mb-14 transition-all duration-700 ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-brand-green font-semibold text-sm tracking-wider uppercase mb-3 block">
            Join the Movement
          </span>
          <h2 className="section-heading mx-auto text-center after:mx-auto after:left-auto after:right-auto">
            Get Involved
          </h2>
          <p className="section-subheading mx-auto mt-2">
            Your time, voice, and support can change lives in Northern Uganda. Find your role in our story.
          </p>
        </div>

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {pathways.map((path, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl border border-gray-200/80 p-5 md:p-8 flex flex-col h-full shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 overflow-hidden ${
                isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isRevealed ? `${150 + index * 120}ms` : '0ms' }}
            >
              {/* Top gradient accent line */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${path.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${path.iconBg} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300`}>
                {path.icon}
              </div>

              {/* Content */}
              <h3 className="text-[20px] font-bold text-brand-brown mb-3">{path.title}</h3>
              <p className="text-gray-600 text-[15px] leading-[1.65] mb-5 md:mb-8 flex-1">
                {path.description}
              </p>

              {/* CTA */}
              <Link href={path.href} className="mt-auto">
                <Button variant="secondary" size="medium" className="w-full group-hover:bg-brand-brown group-hover:text-white transition-colors duration-300">
                  {path.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
