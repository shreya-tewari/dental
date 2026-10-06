// Pricing page content

export interface PricingFeature {
  name: string;
  practice: boolean | string;
  group: boolean | string;
  enterprise: boolean | string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  cta: { label: string; href: string };
  highlighted: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'practice',
    name: 'Practice',
    price: '$299',
    period: '/month per location',
    description: 'Everything a single-location practice needs to automate admin and elevate care.',
    cta: { label: 'Start free trial', href: '/try' },
    highlighted: false,
  },
  {
    id: 'group',
    name: 'Group',
    price: '$199',
    period: '/month per location',
    description: 'Built for multi-location groups and emerging DSOs ready to scale.',
    cta: { label: 'Start free trial', href: '/try' },
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large DSOs, insurers, and health systems. Custom implementation, SLAs, and support.',
    cta: { label: 'Contact sales', href: '/contact' },
    highlighted: false,
  },
];

export const pricingFeatures: PricingFeature[] = [
  { name: 'Vision AI — X-ray analysis', practice: true, group: true, enterprise: true },
  { name: 'Insurance Verification', practice: true, group: true, enterprise: true },
  { name: 'Voice AI Documentation', practice: true, group: true, enterprise: true },
  { name: 'Pre-Treatment Estimates', practice: true, group: true, enterprise: true },
  { name: 'Payer integrations', practice: '1,000+', group: '1,000+', enterprise: '1,000+ (custom)' },
  { name: 'Practice locations', practice: '1', group: '2–50', enterprise: 'Unlimited' },
  { name: 'Team seats', practice: '5', group: '20 per location', enterprise: 'Unlimited' },
  { name: 'AI-Native Imaging Software', practice: false, group: true, enterprise: true },
  { name: 'RCM Suite', practice: false, group: true, enterprise: true },
  { name: 'Analytics dashboard', practice: 'Basic', group: 'Advanced', enterprise: 'Custom' },
  { name: 'Dedicated onboarding', practice: false, group: true, enterprise: true },
  { name: 'Priority support', practice: false, group: false, enterprise: true },
  { name: 'Custom SLAs', practice: false, group: false, enterprise: true },
  { name: 'SSO / SAML', practice: false, group: false, enterprise: true },
  { name: 'White-label options', practice: false, group: false, enterprise: true },
];
