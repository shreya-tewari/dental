import { SolutionPageTemplate } from '../../components/shared/SolutionPageTemplate';
import { XrayWithAIOverlay } from '../../components/shared/Illustrations';

export default function EducatorsPage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: 'For Dental Educators',
        headline: 'Prepare students for the AI-augmented clinic',
        subheading:
          'DentaIQ Vision AI integrates directly into dental school curriculum, giving students hands-on experience with the technology they will use in practice.',
        ctaPrimary: { label: 'Schedule a faculty demo', href: '/book-demo' },
        illustration: XrayWithAIOverlay,
      }}
      benefits={[
        { title: 'Real-World AI Exposure', description: 'Students learn to interpret and validate AI findings — a critical skill for modern clinical practice.' },
        { title: 'Consistent Radiograph Grading', description: 'AI provides objective annotations to support faculty grading and reduce variability.' },
        { title: 'Enriched Case Library', description: 'Build a curated library of annotated cases for teaching, exam preparation, and research.' },
        { title: 'Student Performance Tracking', description: 'Monitor diagnostic accuracy and progress across cohorts with structured analytics.' },
        { title: 'Curriculum Integration', description: 'Works within your existing radiology and clinical workflow with minimal setup.' },
        { title: 'Research Enablement', description: 'Aggregate de-identified datasets for outcomes research and AI model development.' },
      ]}
    />
  );
}
