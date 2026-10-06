import { SolutionPageTemplate } from '../../components/shared/SolutionPageTemplate';
import { InsuranceVerificationMockup } from '../../components/shared/Illustrations';

export default function InsVerificationPage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: 'Insurance Verification',
        headline: 'Know coverage before the patient arrives.',
        subheading:
          'DentaIQ automatically verifies insurance eligibility and benefits days in advance, with code-level breakdowns your front desk and patients can actually use.',
        ctaPrimary: { label: 'Try for free', href: '/try' },
        ctaSecondary: { label: 'Book a demo', href: '/book-demo' },
        illustration: InsuranceVerificationMockup,
      }}
      benefits={[
        { title: '72-Hour Advance Verification', description: 'Verification runs automatically 72 hours before every appointment — no manual triggers needed.' },
        { title: '1,000+ Payer Integrations', description: 'Connected to the largest payer network in dental, covering virtually all US insurance plans.' },
        { title: 'Code-Level Coverage Details', description: 'See exact coverage percentages and dollar amounts broken down by CDT procedure code.' },
        { title: 'Patient Communication', description: 'Send patients an accurate cost estimate before they arrive so there are no financial surprises.' },
        { title: 'Automated Re-Verification', description: 'Coverage is re-verified on the day of service to catch any changes since the initial check.' },
        { title: 'Full Audit Trail', description: 'Every verification result is logged with timestamp and source data for compliance and dispute resolution.' },
      ]}
      faq={[
        { question: 'How many payers does it connect to?', answer: 'DentaIQ connects to 1,000+ payers including all major carriers and regional plans across the US.' },
        { question: 'Can it handle Medicaid plans?', answer: 'Yes. We connect to state Medicaid programs in most US states, with coverage expanding continuously.' },
        { question: 'What if a payer doesn\'t support electronic verification?', answer: 'For payers without an electronic connection, our team provides phone-based verification and manual data entry into the platform.' },
      ]}
    />
  );
}
