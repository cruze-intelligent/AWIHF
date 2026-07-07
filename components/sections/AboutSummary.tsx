import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { ShieldAlert, Users, Award } from 'lucide-react';

export function AboutSummary() {
  return (
    <section className="section-wrapper bg-white">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Heading and description */}
          <div className="lg:col-span-6">
            <span className="text-brand-orange font-semibold text-sm tracking-wider uppercase mb-3 block">Who We Are</span>
            <h2 className="section-heading">
              Women-led. Community-rooted. Health-focused.
            </h2>
            <p className="text-[#111111] text-[16px] md:text-[18px] leading-[1.65] md:leading-[1.6] mb-4 md:mb-5">
              Acholi Women in Health Foundation (AWIHF) was founded in 2024 to address the persistent health challenges facing women and girls in the post-conflict Acholi sub-region of Northern Uganda.
            </p>
            <p className="text-gray-600 text-[15px] md:text-[16px] leading-[1.65] md:leading-[1.6] mb-6 md:mb-8">
              Our mission is to close the gaps left behind by two decades of insurgency. We believe that when women are empowered to lead, innovate, and deliver high-quality care, the entire community thrives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button variant="secondary" size="medium" className="w-full sm:w-auto">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual highlights and vision callout */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            <div className="space-y-5 md:space-y-6">
              {/* Stat Card 1 */}
              <div className="bg-orange-tint/40 p-5 md:p-6 rounded-2xl border border-brand-orange/10 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-orange mb-3 md:mb-4 shadow-sm">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div className="text-brand-orange font-bold text-[28px] md:text-3xl mb-1">106.0</div>
                <div className="text-sm font-semibold text-brand-brown leading-relaxed">Maternal deaths per 100k births in Acholi</div>
              </div>
              
              {/* Stat Card 2 */}
              <div className="bg-green-tint/40 p-5 md:p-6 rounded-2xl border border-brand-green/10 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-green mb-3 md:mb-4 shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-brand-green font-bold text-[28px] md:text-3xl mb-1">24%</div>
                <div className="text-sm font-semibold text-brand-brown leading-relaxed">Teenage pregnancy rate in rural areas</div>
              </div>
            </div>

            {/* Vision Panel Card */}
            <div className="bg-brown-tint/50 p-5 md:p-8 rounded-2xl border border-brand-brown/15 flex flex-col justify-center relative overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-h-[190px] md:min-h-[240px]">
              <span className="absolute -right-4 -bottom-6 text-[120px] font-serif text-brand-brown/5 pointer-events-none select-none">“</span>
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-brown mb-4 md:mb-6 shadow-sm">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-bold text-brand-brown mb-3">Our Vision</h3>
              <p className="text-brand-brown text-[15px] leading-[1.6] italic relative z-10 font-medium">
                &quot;A community where women and girls are able to access equitable and holistic healthcare services.&quot;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
