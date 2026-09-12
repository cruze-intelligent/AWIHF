import React from 'react';
import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { DonateCTA } from '@/components/sections/DonateCTA';

export const metadata: Metadata = {
  title: 'Programs',
  description: 'AWIHF programmes include maternal and reproductive health, mental health and trauma support, community health education, healthcare systems strengthening, outreach, and mentorship.',
  alternates: {
    canonical: '/programs',
  },
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Our Programmes"
        subtitle="Comprehensive, community-based health interventions designed to close the gaps that peace has not yet closed in Northern Uganda."
      />
      
      <div className="py-0 md:py-8">
        <ProgramsGrid />
      </div>
      
      <DonateCTA />
    </>
  );
}
