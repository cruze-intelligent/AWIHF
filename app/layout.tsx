import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PreviewBanner } from "@/components/layout/PreviewBanner";
import { organizationProfile } from "@/lib/config/organization";
import { draftMode } from "next/headers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const siteUrl = organizationProfile.url;
const coreNavigation = [
  { name: 'About', url: `${siteUrl}/about` },
  { name: 'Programs', url: `${siteUrl}/programs` },
  { name: 'Impact', url: `${siteUrl}/impact` },
  { name: 'News', url: `${siteUrl}/news` },
  { name: 'Get Involved', url: `${siteUrl}/get-involved` },
  { name: 'Contact', url: `${siteUrl}/contact` },
  { name: 'Donate', url: `${siteUrl}/donate` },
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AWIHF | Acholi Women in Health Foundation",
    template: "%s | AWIHF",
  },
  description: organizationProfile.description,
  keywords: [
    'Acholi Women in Health Foundation',
    'AWIHF',
    'Northern Uganda health NGO',
    'Gulu women health',
    'maternal health Uganda',
    'community health education',
    'healthcare mentorship Uganda',
  ],
  applicationName: 'AWIHF',
  authors: [{ name: organizationProfile.name, url: siteUrl }],
  creator: organizationProfile.name,
  publisher: organizationProfile.name,
  icons: {
    icon: [
      {
        url: "/images/AWIHF logo.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: [
      {
        url: "/images/AWIHF logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/images/AWIHF logo.svg",
      },
    ],
  },
  openGraph: {
    title: "AWIHF | Acholi Women in Health Foundation",
    description: organizationProfile.description,
    url: siteUrl,
    siteName: 'Acholi Women in Health Foundation',
    type: 'website',
    locale: 'en_UG',
    images: [
      {
        url: "/images/AWIHF logo.svg",
        width: 800,
        height: 800,
        alt: "Acholi Women in Health Foundation Logo",
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AWIHF | Acholi Women in Health Foundation',
    description: organizationProfile.description,
    images: ['/images/AWIHF logo.svg'],
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const draft = await draftMode();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NGO',
        '@id': `${siteUrl}/#organization`,
        name: organizationProfile.name,
        alternateName: organizationProfile.shortName,
        url: siteUrl,
        logo: `${siteUrl}/images/AWIHF logo.webp`,
        description: organizationProfile.description,
        slogan: organizationProfile.slogan,
        foundingDate: organizationProfile.foundingDate,
        email: organizationProfile.email,
        telephone: organizationProfile.phoneNumbers,
        address: {
          '@type': 'PostalAddress',
          postOfficeBoxNumber: organizationProfile.postalAddress.poBox.replace('P.O. Box ', ''),
          addressLocality: organizationProfile.postalAddress.locality,
          addressRegion: organizationProfile.postalAddress.region,
          addressCountry: organizationProfile.postalAddress.country,
        },
        areaServed: organizationProfile.areaServed.map((name) => ({ '@type': 'Place', name })),
        knowsAbout: organizationProfile.knowsAbout,
        sameAs: [
          organizationProfile.social.x,
          organizationProfile.social.instagram,
          organizationProfile.social.linkedin,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: organizationProfile.name,
        alternateName: organizationProfile.shortName,
        url: siteUrl,
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#site-navigation`,
        name: 'AWIHF primary site navigation',
        itemListElement: coreNavigation.map((item, index) => ({
          '@type': 'SiteNavigationElement',
          position: index + 1,
          name: item.name,
          url: item.url,
        })),
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-brand-brown">
          Skip to main content
        </a>
        {draft.isEnabled && <PreviewBanner />}
        <Navbar />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
