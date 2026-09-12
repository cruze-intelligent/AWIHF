import type { Metadata } from 'next';
import { ContactPageClient } from '@/components/contact/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Acholi Women in Health Foundation in Gulu, Northern Uganda for partnerships, donations, volunteering, mentorship, and programme enquiries.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
