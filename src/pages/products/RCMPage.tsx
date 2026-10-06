import { SolutionPageTemplate } from '../../components/shared/SolutionPageTemplate';
import { DashboardMockup } from '../../components/shared/Illustrations';

export default function RCMPage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: 'Revenue Cycle Management',
        headline: 'Get paid faster. Lose less to denials.',
        subheading:
          'DentaIQ\'s end-to-end revenue cycle solution automates verification, claim preparation, submission, and follow-up — so your revenue cycle runs itself.',
        ctaPrimary: { label: 'Book a demo', href: '/book-demo' },
        illustration: DashboardMockup,
      }}
      benefits={[
        { title: 'Automated Eligibility Verification', description: 'Benefits verified days before appointments for every scheduled patient.' },
        { title: 'AI Claim Preparation', description: 'Claims are assembled with procedure codes, narratives, and supporting images — automatically.' },
        { title: 'Denial Management', description: 'AI identifies denial reasons and routes appeals with the right documentation the first time.' },
        { title: 'Real-Time Status Tracking', description: 'Track every claim from submission to payment in a single dashboard view.' },
        { title: 'ERA Posting', description: 'Electronic remittance advice is automatically posted and matched to claims.' },
        { title: 'Reporting & Analytics', description: 'Identify top denial reasons, payer trends, and revenue opportunities with built-in reports.' },
      ]}
    />
  );
}
