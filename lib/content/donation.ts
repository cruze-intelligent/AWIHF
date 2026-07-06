import donationSeed from '@/content/donation-info.json';
import { sanityFetch } from '@/lib/sanity/client';

export type DonationInfo = {
  mtnBusinessName: string;
  mtnMerchantCode: string;
  mtnPhoneNumber: string;
  airtelBusinessName: string;
  airtelMerchantCode: string;
  airtelPhoneNumber: string;
  instructions: string[];
};

export async function getDonationInfo(): Promise<DonationInfo> {
  const donationInfo = await sanityFetch<DonationInfo>(`
    *[_type == "donationInfo"][0] {
      mtnBusinessName,
      mtnMerchantCode,
      mtnPhoneNumber,
      airtelBusinessName,
      airtelMerchantCode,
      airtelPhoneNumber,
      instructions
    }
  `).catch((error) => {
    console.error('Sanity donation fetch failed', error);
    return null;
  });

  return {
    ...donationSeed,
    ...(donationInfo ?? {}),
    instructions: donationInfo?.instructions?.length ? donationInfo.instructions : donationSeed.instructions,
  };
}
