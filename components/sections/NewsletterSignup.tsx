import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export function NewsletterSignup() {
  return (
    <section className="section-wrapper bg-gray-50">
      <div className="content-container flex flex-col items-center text-center max-w-[560px] mx-auto">
        <h2 className="text-[24px] md:text-[30px] font-semibold text-brand-brown leading-[1.3] mb-3">
          Stay Connected
        </h2>
        <p className="text-gray-500 text-[15px] md:text-[18px] leading-[1.6] mb-6 md:mb-8">
          Follow AWIHF updates through our news page or contact the team directly for programme information.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/news">
            <Button variant="secondary" size="medium" className="w-full sm:w-auto">
              View News
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="primary" size="medium" className="w-full sm:w-auto">
              Contact AWIHF
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
