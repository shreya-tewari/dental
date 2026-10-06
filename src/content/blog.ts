// Blog post content

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-xray-analysis-accuracy',
    title: 'How AI X-Ray Analysis Is Raising the Bar for Dental Diagnosis',
    excerpt: 'A deep dive into how modern vision models detect conditions that are easy to miss, and what this means for standard of care.',
    tag: 'Clinical AI',
    date: 'Oct 1, 2026',
    readTime: '6 min read',
    author: 'DentaIQ Team',
    image: '/images/vision-ai.jpg',
  },
  {
    slug: 'insurance-verification-automation',
    title: 'The Hidden Cost of Manual Insurance Verification (And How to Eliminate It)',
    excerpt: 'Front-desk staff spend an average of 8 hours per week on the phone with payers. Here\'s the math on what that costs your practice.',
    tag: 'Revenue Cycle',
    date: 'Sep 22, 2026',
    readTime: '5 min read',
    author: 'DentaIQ Team',
    image: '/images/blog-insurance.jpg',
  },
  {
    slug: 'voice-ai-dentistry',
    title: 'Voice AI in Dentistry: From Novelty to Necessity',
    excerpt: 'Ambient documentation is no longer a futuristic concept. Here\'s how leading practices are using it today.',
    tag: 'Voice AI',
    date: 'Sep 14, 2026',
    readTime: '7 min read',
    author: 'DentaIQ Team',
    image: '/images/blog-voice.jpg',
  },
  {
    slug: 'dso-ai-scale',
    title: 'How DSOs Use AI to Scale Without Losing Clinical Quality',
    excerpt: 'Growing a dental group from 5 to 50 locations introduces new clinical risks. AI helps you standardize quality across the network.',
    tag: 'DSO Strategy',
    date: 'Sep 5, 2026',
    readTime: '8 min read',
    author: 'DentaIQ Team',
    image: '/images/blog-dso.jpg',
  },
  {
    slug: 'hipaa-ai-compliance',
    title: 'HIPAA and Dental AI: What Practices Need to Know',
    excerpt: 'Everything your compliance officer needs to understand before deploying AI tools in your practice.',
    tag: 'Compliance',
    date: 'Aug 28, 2026',
    readTime: '6 min read',
    author: 'DentaIQ Team',
    image: '/images/blog-hipaa.jpg',
  },
  {
    slug: 'patient-education-ai',
    title: 'Show, Don\'t Tell: How AI Is Transforming Patient Education',
    excerpt: 'When patients see their X-rays with AI annotations, case acceptance rates climb. Here\'s the science behind it.',
    tag: 'Patient Experience',
    date: 'Aug 19, 2026',
    readTime: '4 min read',
    author: 'DentaIQ Team',
    image: '/images/patient-consultation.jpg',
  },
];

export const blogTags = ['All', 'Clinical AI', 'Revenue Cycle', 'Voice AI', 'DSO Strategy', 'Compliance', 'Patient Experience'];
