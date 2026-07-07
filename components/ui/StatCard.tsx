"use client";

import React, { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';

interface StatCardProps {
  endValue: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({ endValue, suffix = '', label, icon, className = '' }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const count = useCountUp(endValue, 1500, isVisible);

  return (
    <div ref={ref} className={`flex flex-col items-center justify-center text-center p-4 md:p-6 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/15 hover:border-white/35 ${className}`}>
      {icon && <div className="mb-3 md:mb-4 text-white">{icon}</div>}
      <div className="text-[32px] md:text-[48px] font-bold text-white mb-1.5 md:mb-2 leading-none tracking-tight" aria-live="polite">
        {count}{suffix}
      </div>
      <div className="text-[12px] md:text-[14px] text-white/80 font-medium tracking-wide">
        {label}
      </div>
    </div>
  );
}
