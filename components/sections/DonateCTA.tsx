import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { HeartHandshake } from 'lucide-react';

export function DonateCTA() {
  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-16 py-8 md:py-16">
      <div className="max-w-content mx-auto">
        <div className="relative overflow-hidden rounded-xl border border-brand-orange/20 bg-orange-tint/50 px-5 py-6 md:px-10 md:py-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-7">
            <div className="flex items-start gap-3 md:gap-4 md:max-w-2xl">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white text-brand-orange flex items-center justify-center shrink-0 shadow-sm">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-[22px] md:text-[30px] font-semibold text-brand-brown leading-[1.25] mb-2 md:mb-3">
                  Your support reaches the women who need it most.
                </h2>
                <p className="text-gray-700 text-[15px] md:text-[17px] leading-[1.6]">
                  Help fund safe motherhood care, mental health support, cervical cancer awareness, mentorship, and community health education in Northern Uganda.
                </p>
              </div>
            </div>
            <Link href="/donate" className="shrink-0">
              <Button size="large" className="w-full md:w-auto shadow-sm">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
