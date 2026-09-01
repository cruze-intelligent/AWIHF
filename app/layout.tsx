import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PreviewBanner } from "@/components/layout/PreviewBanner";
import { organizationProfile } from "@/lib/config/organization";
import { draftMode } from "next/headers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://acholiwomeninhealth.org'),
  title: "AWIHF | Acholi Women in Health Foundation",
  description: "Improving healthcare outcomes for women and girls in Northern Uganda.",
  icons: {
    icon: "/images/AWIHF logo.svg",
    shortcut: "/images/AWIHF logo.svg",
    apple: "/images/AWIHF logo.svg",
  },
  openGraph: {
    title: "AWIHF | Acholi Women in Health Foundation",
    description: "Improving healthcare outcomes for women and girls in Northern Uganda.",
    images: [
      {
        url: "/images/AWIHF logo.svg",
        width: 800,
        height: 800,
        alt: "Acholi Women in Health Foundation Logo",
      }
    ]
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const draft = await draftMode();
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: organizationProfile.name,
    alternateName: organizationProfile.shortName,
    url: 'https://acholiwomeninhealth.org',
    email: organizationProfile.email,
    telephone: organizationProfile.phoneNumbers,
    address: {
      '@type': 'PostalAddress',
      postOfficeBoxNumber: organizationProfile.postalAddress.poBox.replace('P.O. Box ', ''),
      addressLocality: organizationProfile.postalAddress.locality,
      addressRegion: organizationProfile.postalAddress.region,
      addressCountry: organizationProfile.postalAddress.country,
    },
    sameAs: [
      organizationProfile.social.x,
      organizationProfile.social.instagram,
      organizationProfile.social.linkedin,
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
