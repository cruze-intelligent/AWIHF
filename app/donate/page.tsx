import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { getDonationInfo } from '@/lib/content/donation';
import { CheckCircle2, Phone, ShieldCheck } from 'lucide-react';

export default async function DonatePage() {
  const donationInfo = await getDonationInfo();
  const paymentOptions = [
    {
      name: 'MTN MoMoPay',
      businessName: donationInfo.mtnBusinessName,
      accent: 'bg-[#FFCC00]',
      code: donationInfo.mtnMerchantCode,
      phone: donationInfo.mtnPhoneNumber,
    },
    {
      name: 'Airtel Pay',
      businessName: donationInfo.airtelBusinessName,
      accent: 'bg-[#FF0000]',
      code: donationInfo.airtelMerchantCode,
      phone: donationInfo.airtelPhoneNumber,
    },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="text-center max-w-2xl">
          <h1 className="page-hero-title">Support Our Work</h1>
          <p className="page-hero-subtitle">
            Use AWIHF&apos;s mobile money organization codes to complete your donation securely from your own phone.
          </p>
        </div>
      </section>

      <section className="w-full px-4 py-8 md:py-16 md:-mt-14 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <Card className="lg:col-span-7 bg-white p-5 md:p-8 shadow-lg border border-gray-200">
            <Badge variant="news" className="!bg-brand-orange !text-white mb-5 shadow-sm ring-1 ring-brand-orange/20">
              Manual Mobile Money Donation
            </Badge>
            <h2 className="text-[24px] md:text-[32px] font-bold text-brand-brown leading-[1.25] mb-4">
              Donate through MTN MoMoPay or Airtel Pay
            </h2>
            <p className="text-gray-600 text-[15px] md:text-[16px] leading-[1.7] mb-6 md:mb-8">
              AWIHF does not process card payments or online checkout transactions on this website. The website only displays the official organization payment information. You complete the payment independently through your mobile money application.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {paymentOptions.map((option) => (
                <div key={option.name} className="rounded-xl border border-gray-200 bg-gray-50 p-4 md:p-5">
                  <div className={`w-10 h-10 ${option.accent} rounded-full mb-4 shadow-sm`} />
                  <h3 className="text-lg font-bold text-brand-brown mb-2">{option.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">Business Name</p>
                  <div className="rounded-lg bg-white border border-gray-200 px-4 py-3 font-semibold text-brand-brown mb-4">
                    {option.businessName}
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Organization Code</p>
                  <div className="rounded-lg bg-white border border-gray-200 px-4 py-3 font-semibold text-brand-brown">
                    {option.code}
                  </div>
                  <p className="text-sm text-gray-500 mb-2 mt-4">Mobile Money Number</p>
                  <div className="rounded-lg bg-white border border-gray-200 px-4 py-3 font-semibold text-brand-brown">
                    {option.phone}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="lg:col-span-5 space-y-6">
            <Card className="bg-green-tint border border-brand-green/20 p-5 md:p-7">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-green mb-5 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-4">How to Complete Your Donation</h3>
              <ol className="space-y-3">
                {donationInfo.instructions.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-brand-green text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </Card>

            <Card className="p-5 md:p-7 bg-white border border-gray-200">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-brand-brown mb-2">No Website Checkout</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    This page does not collect payment details, process transactions, or trigger mobile money prompts.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-wrapper bg-green-tint">
        <div className="content-container max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-6 md:mb-8">Where Your Support Goes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Maternal health supplies and safe motherhood care.',
              'Community outreach logistics and essential medical supplies.',
              'Reusable sanitary pads and dignity kits for vulnerable girls.',
              'Mental health counseling and trauma-informed support groups.',
            ].map((item) => (
              <div key={item} className="bg-white p-5 md:p-6 rounded-xl flex items-start gap-3 md:gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-7 md:mt-10">
            <Link href="/contact">
              <Button variant="secondary" size="medium">Contact AWIHF</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
