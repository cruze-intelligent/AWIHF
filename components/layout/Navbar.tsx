"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Impact', href: '/impact' },
  { name: 'News', href: '/news' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-50 w-full h-14 md:h-16 bg-brand-brown px-4 md:px-8 lg:px-16 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2.5">
          <Image 
            src="/images/AWIHF logo.webp" 
            alt="Acholi Women in Health Foundation Logo" 
            width={40} 
            height={40}
            className="object-contain w-9 h-9 md:w-10 md:h-10"
            priority
          />
          <span className="text-brand-orange font-bold text-xl tracking-tight hidden sm:inline-block">AWIHF</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-gold relative ${isActive ? 'text-brand-orange' : 'text-white'}`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-orange" />
                )}
              </Link>
            );
          })}
          <Link href="/donate">
            <Button variant="primary" size="medium" className="ml-4">Donate</Button>
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-[60] bg-brand-brown transform transition-transform duration-250 ease-in-out md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-14 px-4 flex items-center justify-between border-b border-white/10">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <Image 
              src="/images/AWIHF logo.webp" 
              alt="Acholi Women in Health Foundation Logo" 
              width={36} 
              height={36}
              className="object-contain"
            />
            <span className="text-brand-orange font-bold text-xl">AWIHF</span>
          </Link>
          <button 
            className="text-white p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-5 px-4 flex flex-col space-y-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-3 pl-4 transition-colors ${isActive ? 'text-brand-orange border-l-2 border-brand-orange' : 'text-white hover:text-brand-gold'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="p-4 border-t border-white/10">
          <Link href="/donate" className="block w-full" onClick={() => setIsOpen(false)}>
            <Button variant="primary" size="medium" className="w-full">Donate Now</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
