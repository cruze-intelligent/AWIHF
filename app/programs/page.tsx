import React from 'react';
import { PageHero } from '@/components/shared/PageHero';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { DonateCTA } from '@/components/sections/DonateCTA';

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
