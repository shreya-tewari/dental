import { SolutionPageTemplate } from '../../components/shared/SolutionPageTemplate';
import { InsuranceVerificationMockup } from '../../components/shared/Illustrations';

export default function PreTreatmentPage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: 'Pre-Treatment Estimates',
        headline: 'Accurate estimates patients trust.',
        subheading:
          'DentaIQ generates code-level pre-treatment estimates that account for the patient\'s actual coverage — so financial conversations happen before treatment, not after.',
        ctaPrimary: { label: 'Book a demo', href: '/book-demo' },
        illustration: InsuranceVerificationMockup,
      }}
      benefits={[
        { title: 'Coverage-Informed Estimates', description: 'Estimates pull live coverage data from the verification layer for maximum accuracy.' },
        { title: 'Patient-Friendly Format', description: 'Clearly formatted breakdowns show patients exactly what insurance pays and what they owe.' },
        { title: 'Multi-Procedure Plans', description: 'Generate estimates for complex multi-visit treatment plans with accurate sequencing.' },
        { title: 'Faster Case Acceptance', description: 'When patients understand costs upfront, they say yes to treatment more often.' },
        { title: 'Digital Delivery', description: 'Send estimates to patients by text or email for review before their appointment.' },
        { title: 'Integrated Financing Options', description: 'Optionally present financing options alongside the estimate to remove cost barriers.' },
      ]}
    />
  );
}
