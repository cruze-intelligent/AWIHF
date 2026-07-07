import React from 'react';
import Image from 'next/image';
import { DonateCTA } from '../sections/DonateCTA';
import { CheckCircle, Target, Users, Settings } from 'lucide-react';

interface ProgramLayoutProps {
  title: string;
  heroImage: string;
  fieldImage: string;
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
  stats, 
  objective, 
  focusArea, 
  activities, 
  successIndicators, 
  description
}: ProgramLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[132px] md:min-h-[400px] flex items-center justify-center px-4 md:px-8 py-8 md:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt={`${title} programme hero image`} fill className="hidden md:block object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-brand md:bg-brand-brown/62" />
        </div>
        <div className="relative z-10 text-center max-w-3xl flex flex-col items-center">
          <h1 className="text-white text-2xl md:text-[40px] font-bold leading-[1.15] md:leading-[1.2]">{title}</h1>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-0 md:-mt-10 relative z-20 bg-gray-50 md:bg-transparent">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white border border-gray-200 shadow-sm md:shadow-lg p-5 md:p-6 rounded-xl text-center flex flex-col items-center justify-center min-h-[112px] md:min-h-[140px] hover:shadow-xl transition-all duration-200">
                <div className="text-brand-green text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-brand-brown font-semibold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & Objectives */}
      <section className="section-wrapper bg-white">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
            {/* Left: Overview */}
            <div className="lg:col-span-7 text-[#111111] text-[16px] leading-[1.6]">
              <span className="text-brand-orange font-semibold text-xs tracking-wider uppercase mb-2 block">Program Overview</span>
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
                <span className="text-[12px] uppercase font-bold text-brand-green tracking-wider block">Operational District</span>
                <span className="text-[#111111] font-semibold text-sm">Gulu & Acholi Sub-Region, Northern Uganda</span>
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
            <span className="text-brand-orange font-semibold text-xs tracking-wider uppercase mb-2 block">Our Track Record</span>
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

      {/* Field Activity */}
      <section className="section-wrapper bg-gray-50">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-brand-orange font-semibold text-xs tracking-wider uppercase mb-2 block">Field Activity</span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-brown mb-3 md:mb-4">Programme in Practice</h2>
              <p className="text-gray-600 text-[15px] md:text-[16px] leading-[1.7]">
                A field image from this programme, included to show real implementation activity without relying on unrelated filler photography.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-white shadow-sm border border-gray-200">
                <Image
                  src={fieldImage}
                  alt={`${title} field activity`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 720px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <DonateCTA />
    </>
  );
}
