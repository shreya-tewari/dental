import { SolutionPageTemplate } from '../../components/shared/SolutionPageTemplate';
import { VoiceWaveform } from '../../components/shared/Illustrations';

export default function VoicePage() {
  return (
    <SolutionPageTemplate
      hero={{
        label: 'Voice AI Suite',
        headline: 'Document every visit. Miss nothing.',
        subheading:
          'DentaIQ Voice AI listens in the background and automatically generates accurate clinical notes, chart entries, and visit summaries — in real time.',
        ctaPrimary: { label: 'Book a demo', href: '/book-demo' },
        illustration: VoiceWaveform,
      }}
      benefits={[
        { title: 'Real-Time Transcription', description: 'Clinical conversations are transcribed instantly with dental terminology accuracy.' },
        { title: 'Automated Charting', description: 'Perio probing, restorative notes, and treatment plans are extracted and entered automatically.' },
        { title: 'Visit Summaries', description: 'A structured visit summary is ready for review before the patient leaves the chair.' },
        { title: 'Compliance Documentation', description: 'Every visit produces structured, defensible documentation that satisfies payer and legal requirements.' },
        { title: 'Revenue Cycle Support', description: 'Accurate procedure codes are suggested from documented clinical conversations.' },
        { title: 'Multi-Provider Support', description: 'Voice AI distinguishes between multiple speakers in the operatory for accurate attribution.' },
      ]}
    />
  );
}
