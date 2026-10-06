import { SolutionPageTemplate } from '../../components/shared/SolutionPageTemplate';
import { XrayWithAIOverlay } from '../../components/shared/Illustrations';

export default function DentistsPage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: 'For Dentists & Private Practices',
        headline: 'AI that works as hard as you do',
        subheading:
          'DentaIQ automates the administrative burden of running a dental practice so you can focus entirely on delivering exceptional patient care.',
        ctaPrimary: { label: 'Book a demo', href: '/book-demo' },
        ctaSecondary: { label: 'Try for free', href: '/try' },
        illustration: XrayWithAIOverlay,
      }}
      benefits={[
        { title: 'AI-Assisted Diagnosis', description: 'Vision AI analyzes radiographs and surfaces findings instantly, improving consistency and speed.' },
        { title: 'Automated Insurance Verification', description: 'Know patient coverage before they arrive. No more manual calls to payers.' },
        { title: 'Ambient Voice Documentation', description: 'Charting happens automatically while you focus on the patient, not the screen.' },
        { title: 'Pre-Treatment Estimates', description: 'Give patients accurate, code-level estimates they can trust before agreeing to treatment.' },
        { title: 'Faster Claim Submissions', description: 'AI-prepared claims with supporting radiographs reduce rejections and accelerate reimbursement.' },
        { title: 'Patient Education', description: 'AI-annotated X-ray visualizations help patients understand their conditions and say yes to care.' },
      ]}
      faq={[
        { question: 'Which practice management systems does DentaIQ integrate with?', answer: 'DentaIQ integrates with Dentrix, Eaglesoft, Open Dental, Curve Dental, and many others. Our integration library covers 95%+ of practices in the US.' },
        { question: 'Does Vision AI replace my diagnosis?', answer: 'No. Vision AI provides decision-support findings that a licensed dentist reviews and confirms. AI outputs never replace clinical judgment.' },
        { question: 'How long does setup take?', answer: 'Most single-location practices are fully onboarded in under one week, including integrations and team training.' },
      ]}
    />
  );
}
