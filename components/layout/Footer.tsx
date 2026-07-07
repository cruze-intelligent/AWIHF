import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Twitter, Instagram, Linkedin } from '@/components/ui/SocialIcons';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Impact', href: '/impact' },
  { name: 'News', href: '/news' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-brand-brown text-white pt-8 md:pt-16 pb-5 md:pb-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8 mb-7 md:mb-12">
          <div className="flex flex-col space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/AWIHF logo.webp"
                alt="Acholi Women in Health Foundation Logo"
                width={44}
                height={44}
                className="object-contain bg-white rounded-lg p-1 md:w-12 md:h-12"
              />
              <span className="text-brand-orange font-bold text-xl md:text-2xl tracking-tight">AWIHF</span>
            </div>
            <p className="text-white/80 max-w-sm text-sm md:text-base leading-relaxed">
              Healing Lives, Transforming Communities.
            </p>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 md:gap-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-brand-gold transition-colors py-1 text-sm md:text-base"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 text-white/80 text-sm md:text-base">
              <li className="flex items-start">
                <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2.5 md:mr-3 mt-0.5 shrink-0" />
                <a href="mailto:acholiwomeninhealth@gmail.com" className="hover:text-brand-gold transition-colors">
                  acholiwomeninhealth@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2.5 md:mr-3 mt-0.5 shrink-0" />
                <a href="tel:0762401363" className="hover:text-brand-gold transition-colors">
                  0762401363 / 0772388143
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2.5 md:mr-3 mt-0.5 shrink-0" />
                <span>P.O. Box 361606, Pece, Gulu City</span>
              </li>
            </ul>

            <div className="flex space-x-3 md:space-x-4">
              <a href="https://x.com/acholiwomen" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-gold transition-colors" aria-label="X (Twitter)">
                <Twitter className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.instagram.com/acholiwomeninhealth?igsh=MTltOW1oMWE3dHFleA==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/acholi-women-in-health-foundation-57686235a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-5 md:pt-8 mt-6 md:mt-8 text-center md:text-left">
          <p className="text-[12px] text-gray-400">
            &copy; 2025 AWIHF |{' '}
            <a
              href="https://mhussein.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors"
              aria-label="Website Developed by Web Developer Uganda, opens in a new tab"
            >
              Website Developed by Web Developer Uganda
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
