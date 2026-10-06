import { SolutionPageTemplate } from '../../components/shared/SolutionPageTemplate';
import { InsuranceVerificationMockup } from '../../components/shared/Illustrations';

export default function InsurersPage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: 'For Insurers & Payers',
        headline: 'Smarter utilization review powered by AI',
        subheading:
          'DentaIQ gives payers AI-powered tools to evaluate claims accurately, manage provider networks, and reduce fraud — while improving outcomes.',
        ctaPrimary: { label: 'Request a payer briefing', href: '/book-demo' },
        illustration: InsuranceVerificationMockup,
      }}
      benefits={[
        { title: 'AI Utilization Review', description: 'Automated clinical review of submitted X-rays and treatment plans against evidence-based guidelines.' },
        { title: 'Provider Network Management', description: 'Data-driven analytics on provider performance, quality, and network gaps.' },
        { title: 'Fraud Detection', description: 'Anomaly detection flags suspicious billing patterns before claims are paid.' },
        { title: 'Faster Pre-Authorization', description: 'Reduce pre-auth turnaround from days to hours with AI-assisted review workflows.' },
        { title: 'Provider Portal', description: 'Streamlined portal for providers to submit documentation, check status, and appeal decisions.' },
        { title: 'Outcome Data', description: 'Track treatment outcomes to evaluate provider quality and improve benefit design.' },
      ]}
    />
  );
}
