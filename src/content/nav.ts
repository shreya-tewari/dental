// Navigation mega-menu content

export interface NavProduct {
  name: string;
  description: string;
  href: string;
}

export interface NavGroup {
  label: string;
  products: NavProduct[];
}

export interface NavDropdown {
  label: string;
  groups: NavGroup[];
}

export const megaMenus: NavDropdown[] = [
  {
    label: 'Dentists',
    groups: [
      {
        label: 'Clinical Intelligence',
        products: [
          {
            name: 'Vision AI',
            description: 'AI-assisted X-ray analysis and patient education',
            href: '/solutions/vision-ai',
          },
          {
            name: 'AI-Native Imaging',
            description: 'Imaging software with AI built in, not bolted on',
            href: '/solutions/imaging',
          },
          {
            name: 'Voice AI',
            description: 'Ambient AI that documents every patient visit',
            href: '/solutions/voice',
          },
        ],
      },
      {
        label: 'Revenue Cycle',
        products: [
          {
            name: 'RCM Overview',
            description: 'End-to-end revenue cycle management',
            href: '/solutions/rcm',
          },
          {
            name: 'Insurance Verification',
            description: 'Automated eligibility and benefits verification',
            href: '/solutions/insurance-verification',
          },
          {
            name: 'Pre-Treatment Estimates',
            description: 'Accurate cost estimates before treatment begins',
            href: '/solutions/pre-treatment-estimates',
          },
        ],
      },
    ],
  },
  {
    label: 'DSOs',
    groups: [
      {
        label: 'Clinical Intelligence',
        products: [
          {
            name: 'Vision AI',
            description: 'Standardize diagnosis across your entire network',
            href: '/solutions/vision-ai',
          },
          {
            name: 'Voice AI',
            description: 'Consistent documentation at every location',
            href: '/solutions/voice',
          },
        ],
      },
      {
        label: 'Revenue Cycle',
        products: [
          {
            name: 'Insurance Verification',
            description: 'Automated verification at scale for multi-location groups',
            href: '/solutions/insurance-verification',
          },
          {
            name: 'Instant Claim Approvals',
            description: 'AI-powered claim submission for faster reimbursement',
            href: '/solutions/rcm',
          },
        ],
      },
    ],
  },
  {
    label: 'Insurers',
    groups: [
      {
        label: 'For Insurers & Payers',
        products: [
          {
            name: 'Utilization Review',
            description: 'AI-assisted clinical review for payers',
            href: '/solutions/insurers',
          },
          {
            name: 'Provider Network Management',
            description: 'Data-driven network analytics and insights',
            href: '/solutions/insurers',
          },
          {
            name: 'Provider Portal',
            description: 'Streamlined portal for provider collaboration',
            href: '/solutions/insurers',
          },
        ],
      },
    ],
  },
  {
    label: 'Educators',
    groups: [
      {
        label: 'For Dental Schools',
        products: [
          {
            name: 'Vision AI for Education',
            description: 'Integrate AI into dental school curriculum',
            href: '/solutions/educators',
          },
        ],
      },
    ],
  },
];

export const resourcesMenu = [
  { name: 'Blog', description: 'Articles, guides, and industry insights', href: '/blog' },
  { name: 'Webinars & Research', description: 'On-demand sessions and white papers', href: '/resources' },
  { name: 'Glossary', description: 'A-Z dental AI terminology explained', href: '/glossary' },
  { name: 'Customer Stories', description: 'How practices grow with DentaIQ', href: '/customers' },
];

export const companyMenu = [
  { name: 'About Us', description: 'Our mission and team', href: '/about' },
  { name: 'Careers', description: 'Join us in reshaping dental care', href: '/careers' },
  { name: 'Contact', description: 'Get in touch with our team', href: '/contact' },
];
