"use client";

import React from 'react';
import { StatCard } from '../ui/StatCard';

export function ImpactStrip() {
  return (
    <section className="w-full bg-gradient-brand-h px-4 md:px-8 lg:px-16 py-7 md:py-16">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          <StatCard endValue={1000} suffix="+" label="Households Reached" />
          <StatCard endValue={50} suffix="+" label="Healthcare Students Equipped" />
          <StatCard endValue={4} label="Core Programme Areas" />
          <StatCard endValue={3} label="Programme Phases Completed" />
        </div>
      </div>
    </section>
  );
}
