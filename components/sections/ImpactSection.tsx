"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { StatCard } from '../ui/StatCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FlaskConical, Ribbon, HeartPulse, Users, Stethoscope, TrendingUp, Target, GraduationCap } from 'lucide-react';

const impactStats = [
  {
    endValue: 1000,
    suffix: '+',
    label: 'Households Reached',
    description: 'Across four days in Patiko, free medical consultations, vision screenings, and maternal care reached families in the most underserved rural Acholi communities.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    endValue: 50,
    suffix: '+',
    label: 'Healthcare Students Equipped',
    description: 'Nursing and medical students connected with experienced clinical mentors through our national mentorship pipeline, building the next generation of women-led health leadership.',
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    endValue: 3,
    suffix: '',
    label: 'Programme Phases Completed',
    description: 'From community assessments in January to mental health support groups in December — a full year of structured, phased health delivery across the Acholi sub-region.',
    icon: <Target className="w-6 h-6" />,
  },
  {
    endValue: 4,
    suffix: '',
    label: 'Core Programme Areas',
    description: 'Maternal health, mental health, community education, and systems strengthening — an integrated approach because women\'s health challenges do not exist in isolation.',
    icon: <Stethoscope className="w-6 h-6" />,
  },
];

const programmeHighlights = [
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: 'SRHR Research',
    description: 'Community-based research on barriers to sexual and reproductive health access',
  },
  {
    icon: <Ribbon className="w-5 h-5" />,
    title: 'GBV & AIDS Campaigns',
    description: 'National GBV prevention and HIV/AIDS awareness with a Northern Uganda focus',
  },
  {
    icon: <HeartPulse className="w-5 h-5" />,
    title: 'Cervical Cancer Awareness',
    description: 'Regional screening and early prevention education reaching rural women',
  },
];

export function ImpactSection() {
  const { ref: sectionRef, isRevealed: sectionRevealed } = useScrollReveal({ threshold: 0.08 });
  const { ref: highlightsRef, isRevealed: highlightsRevealed } = useScrollReveal({ threshold: 0.15, delay: 200 });

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative w-full px-4 md:px-8 lg:px-16 py-12 md:py-28 overflow-hidden"
    >
      {/* Background — rich dark brown with subtle pattern */}
      <div className="absolute inset-0 bg-brand-brown" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />
      {/* Subtle gradient accent at top edge */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-brand-h" />

      <div className="relative z-10 max-w-content mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-9 md:mb-16 transition-all duration-700 ${sectionRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm tracking-wider uppercase mb-4">
            <TrendingUp className="w-4 h-4" />
            Measurable Change
          </span>
          <h2 className="text-2xl md:text-[38px] font-bold text-white mb-4 md:mb-6 leading-[1.2]">
            Our 2025 Impact
          </h2>
          <p className="text-white/70 text-[15px] md:text-[17px] leading-[1.7] max-w-2xl mx-auto">
            In 2025, AWIHF delivered three phases of programming across the Acholi sub-region, establishing a strong evidence base and demonstrating high-volume, community-centred health delivery.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-9 md:mb-16">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-7 transition-all duration-500 hover:bg-white/[0.1] hover:border-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 ${
                sectionRevealed
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: sectionRevealed ? `${index * 120}ms` : '0ms' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-brand-h rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-brand-orange/15 flex items-center justify-center text-brand-orange mb-4 md:mb-5">
                {stat.icon}
              </div>

              {/* Animated Number */}
              <StatCard
                endValue={stat.endValue}
                suffix={stat.suffix}
                label={stat.label}
                className="bg-transparent border-none p-0 hover:scale-100 hover:bg-transparent hover:border-none items-start text-left"
              />

              {/* Contextual Description */}
              <p className="text-white/50 text-[13px] leading-[1.6] mt-3 group-hover:text-white/65 transition-colors duration-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-9 md:mb-14" />

        {/* Programme Highlights Strip */}
        <div
          ref={highlightsRef}
          className={`transition-all duration-700 ${highlightsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h3 className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase text-center mb-5 md:mb-8">
            2025 Programme Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {programmeHighlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 md:gap-4 bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 md:px-5 py-4 hover:bg-white/[0.08] transition-all duration-300"
                style={{ transitionDelay: highlightsRevealed ? `${index * 100}ms` : '0ms' }}
              >
                <div className="w-9 h-9 rounded-lg bg-brand-green/20 flex items-center justify-center text-brand-green shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-[15px] mb-1">{item.title}</h4>
                  <p className="text-white/50 text-[13px] leading-[1.5]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-9 md:mt-14 transition-all duration-700 delay-300 ${highlightsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link href="/impact/report">
            <Button variant="ghost" size="medium" className="text-white border-white/30 hover:bg-white/10 hover:text-white hover:border-white/50">
              See Full Impact Report →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
