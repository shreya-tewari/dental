import { SolutionPageTemplate } from '../../components/shared/SolutionPageTemplate';
import { XrayWithAIOverlay } from '../../components/shared/Illustrations';

export default function VisionAIPage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: 'Vision AI',
        headline: 'See more. Diagnose with confidence.',
        subheading:
          'DentaIQ Vision AI analyzes dental radiographs in seconds, detecting and annotating conditions so dentists can diagnose accurately and explain findings to patients clearly.',
        ctaPrimary: { label: 'Try for free', href: '/try' },
        ctaSecondary: { label: 'Book a demo', href: '/book-demo' },
        illustration: XrayWithAIOverlay,
      }}
      benefits={[
        { title: 'Caries Detection', description: 'Detects early-stage and advanced caries across all surfaces, including interproximal areas difficult to see on screen.' },
        { title: 'Bone Loss Analysis', description: 'Measures and annotates crestal bone levels to support periodontal diagnosis and documentation.' },
        { title: 'Anatomical Landmark Detection', description: 'Automatically identifies and labels key anatomical structures for faster diagnosis.' },
        { title: 'Patient-Facing Visualizations', description: 'AI-generated overlays translate clinical findings into visuals patients can immediately understand.' },
        { title: 'Insurance Documentation', description: 'AI annotations are automatically formatted for supporting documentation on claims.' },
        { title: 'Standardized Reporting', description: 'Every finding is logged in a structured format that supports team consistency and audit trails.' },
      ]}
      faq={[
        { question: 'What types of radiographs does Vision AI support?', answer: 'Vision AI supports periapical, bitewing, and panoramic radiographs from all major sensor brands.' },
        { question: 'How accurate is the AI?', answer: 'Our clinical validation studies show sensitivity and specificity comparable to experienced dental radiologists. Full data available in our white paper.' },
        { question: 'Does it work offline?', answer: 'Vision AI requires an internet connection to process images, but results are cached locally for reference without connectivity.' },
      ]}
    />
  );
}
