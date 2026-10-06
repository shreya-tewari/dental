import { SolutionPageTemplate } from '../../components/shared/SolutionPageTemplate';
import { DashboardMockup } from '../../components/shared/Illustrations';

export default function DSOsPage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: 'For DSOs & Dental Groups',
        headline: 'Scale your group without scaling your problems',
        subheading:
          'DentaIQ gives DSOs the tools to standardize clinical quality, automate revenue cycle, and gain real-time visibility across every location.',
        ctaPrimary: { label: 'Talk to our DSO team', href: '/book-demo' },
        illustration: DashboardMockup,
      }}
      benefits={[
        { title: 'Network-Wide Diagnosis Standardization', description: 'Vision AI creates consistent diagnostic standards across all your locations and providers.' },
        { title: 'Multi-Location Insurance Automation', description: 'Verify benefits for hundreds of patients per day across all locations simultaneously.' },
        { title: 'Centralized Analytics Dashboard', description: 'Real-time performance metrics across clinical, financial, and operational dimensions.' },
        { title: 'Scalable Onboarding', description: 'Roll out DentaIQ to new locations in days, not months, with our structured implementation playbook.' },
        { title: 'Claim Volume at Scale', description: 'Process thousands of claims per day with AI-powered accuracy and payer integration.' },
        { title: 'Compliance & Audit Readiness', description: 'Structured documentation from Voice AI keeps every location audit-ready at all times.' },
      ]}
    />
  );
}
