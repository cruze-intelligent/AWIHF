export const donationInfo = {
  name: 'donationInfo',
  title: 'Donation Information',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', initialValue: 'AWIHF Donation Details' },
    { name: 'mtnBusinessName', title: 'MTN MoMoPay Business Name', type: 'string' },
    { name: 'mtnMerchantCode', title: 'MTN MoMoPay Merchant Code', type: 'string' },
    { name: 'mtnPhoneNumber', title: 'MTN MoMo Number', type: 'string' },
    { name: 'airtelBusinessName', title: 'Airtel Pay Business Name', type: 'string' },
    { name: 'airtelMerchantCode', title: 'Airtel Pay Merchant Code', type: 'string' },
    { name: 'airtelPhoneNumber', title: 'Airtel Money Number', type: 'string' },
    { name: 'instructions', title: 'Donation Instructions', type: 'array', of: [{ type: 'string' }] },
  ],
};
