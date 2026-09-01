import React from 'react';
import { PageHero } from './PageHero';
import { ProgrammeInPracticeGallery } from './ProgrammeInPracticeGallery';
import { DonateCTA } from '../sections/DonateCTA';
import { CheckCircle, Target, Users, Settings } from 'lucide-react';

interface ProgramLayoutProps {
  title: string;
  heroImage?: string;
  fieldImage?: string;
  practiceImages?: string[];
  practiceDescription?: string;
  stats: { value: string; label: string }[];
  objective: string;
  focusArea: string;
  activities: string[];
  successIndicators: string[];
  description: React.ReactNode;
}

export function ProgramLayout({ 
  title, 
  heroImage, 
  fieldImage,
  practiceImages,
  practiceDescription,
  stats, 
  objective, 
  focusArea, 
  activities, 
  successIndicators, 
  description
}: ProgramLayoutProps) {
  const resolvedImages = practiceImages && practiceImages.length > 0 
    ? practiceImages 
    : fieldImage ? [fieldImage] : [];

  return (
    <>
      {/* Standardized Shared Hero & Floating Impact Stats */}
      <PageHero
        title={title}
        stats={stats}
      />

      {/* Overview & Objectives */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Left: Overview */}
            <div className="lg:col-span-7 text-[#111111] text-[16px] leading-[1.6]">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-brown mb-4 md:mb-6">Scope of Work</h2>
              {description}
            </div>

            {/* Right: Objective Callout */}
            <div className="lg:col-span-5 bg-gold-tint border border-brand-gold/30 rounded-2xl p-5 md:p-8">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 md:mb-6 text-brand-orange shadow-sm shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-semibold text-brand-brown mb-3">Core Objective</h3>
              <p className="text-[#111111] text-[16px] leading-relaxed italic">
                {objective}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology, Focus, and Activities */}
      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Focus & Beneficiaries */}
            <div className="lg:col-span-5 bg-green-tint border border-brand-green/20 rounded-2xl p-5 md:p-8 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 md:mb-6 text-brand-green shadow-sm shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-[20px] font-semibold text-brand-brown mb-3">Target & Coverage</h3>
              <p className="text-[#111111] text-[15px] leading-relaxed mb-5 md:mb-6 flex-1">
                {focusArea}
              </p>
              <div className="border-t border-brand-green/10 pt-4 mt-auto">
                <span className="text-[12px] uppercase font-bold text-brand-green tracking-wider block">Area of operation</span>
                <span className="text-[#111111] font-semibold text-sm">Gulu, Acholi sub-region</span>
              </div>
            </div>

            {/* Right: Activities Conducted */}
            <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-5 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-tint flex items-center justify-center text-brand-orange shrink-0">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-[20px] font-semibold text-brand-brown">Core Activities & Interventions</h3>
              </div>
              <ul className="space-y-3">
                {activities.map((act, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0" />
                    <span className="text-[#111111] text-[15px] leading-relaxed">{act}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Success Indicators / Results */}
      <section className="section-wrapper bg-white">
        <div className="content-container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-brown">Success Indicators</h2>
          </div>
          <div className="bg-orange-tint/40 border border-brand-orange/20 rounded-2xl p-5 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {successIndicators.map((ind, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <p className="text-[#111111] text-[15px] leading-relaxed">{ind}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Programme in Practice Carousel Gallery */}
      {resolvedImages.length > 0 && (
        <ProgrammeInPracticeGallery
          title={title}
          description={practiceDescription}
          images={resolvedImages}
        />
      )}

      <DonateCTA />
    </>
  );
}
