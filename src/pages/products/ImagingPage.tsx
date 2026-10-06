import { SolutionPageTemplate } from '../../components/shared/SolutionPageTemplate';
import { DashboardMockup } from '../../components/shared/Illustrations';

export default function ImagingPage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: 'AI-Native Imaging',
        headline: 'Crystal-clear images. AI built in from the start.',
        subheading:
          'DentaIQ\'s imaging software delivers exceptional image quality from any sensor, with AI intelligence woven into every step of the clinical workflow.',
        ctaPrimary: { label: 'Book a demo', href: '/book-demo' },
        illustration: DashboardMockup,
      }}
      benefits={[
        { title: 'Universal Sensor Compatibility', description: 'Works with every major X-ray sensor — no hardware upgrades required.' },
        { title: 'Automatic Image Enhancement', description: 'AI optimizes brightness, contrast, and sharpness automatically for every capture.' },
        { title: 'Auto-Population into Templates', description: 'Images are automatically sorted into the correct tooth position and clinical template.' },
        { title: 'No Cloud Storage Fees', description: 'Unlimited local storage with optional cloud sync — you own your data.' },
        { title: 'Built-In AI Analysis', description: 'Vision AI is native to the imaging workflow, not a separate add-on requiring export.' },
        { title: 'Chairside Patient Education', description: 'Show patients annotated images directly on the operatory screen at the moment of care.' },
      ]}
    />
  );
}
