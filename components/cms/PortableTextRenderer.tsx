import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { imageUrl } from '@/lib/sanity/image';

function safeHref(value: unknown) {
  if (typeof value !== 'string') {
    return '#';
  }

  if (
    value.startsWith('/') ||
    value.startsWith('https://') ||
    value.startsWith('http://') ||
    value.startsWith('mailto:') ||
    value.startsWith('tel:')
  ) {
    return value;
  }

  return '#';
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-brand-brown mt-10 mb-4 leading-tight">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-bold text-brand-orange mt-8 mb-3 leading-tight">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-bold text-brand-brown mt-6 mb-3 leading-tight">{children}</h4>
    ),
    normal: ({ children }) => <p className="text-base text-[#111111] leading-relaxed mb-5">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-orange pl-5 italic text-brand-brown my-7">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 space-y-2 mb-5 text-base text-[#111111] leading-relaxed">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 space-y-2 mb-5 text-base text-[#111111] leading-relaxed">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-brand-brown">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const href = safeHref(value?.href);
      const isExternal = href.startsWith('http://') || href.startsWith('https://');

      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="font-semibold text-brand-orange hover:text-brand-brown transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const src = imageUrl(value, 1200);
      if (!src) {
        return null;
      }

      return (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 my-8">
          <Image src={src} alt={value?.alt || 'AWIHF content image'} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
        </div>
      );
    },
  },
};

export function PortableTextRenderer({ value }: { value: unknown[] }) {
  return <PortableText value={value} components={components} />;
}
