import React from 'react';
import Image from 'next/image';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { DonateCTA } from '@/components/sections/DonateCTA';

export default function ProgramsPage() {
  return (
    <>
      <section className="image-page-hero">
        <Image
          src="/images/AWIHF-Cervical Cancer.webp"
          alt="Regional Cervical Cancer Initiative programme work"
          fill
          priority
          className="hidden md:block object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-brand md:bg-brand-brown/70" />
        <div className="relative z-10 text-center max-w-2xl">
          <h1 className="page-hero-title">Our Programmes</h1>
          <p className="page-hero-subtitle">
            Comprehensive, community-based health interventions designed to close the gaps that peace has not yet closed in Northern Uganda.
          </p>
        </div>
      </section>
      
      <div className="py-0 md:py-8">
        <ProgramsGrid />
      </div>
      
      <DonateCTA />
    </>
  );
}
