import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { Button } from '../components/shared/Button';

const caseStudies = [
  { name: 'Apex Dental Group', type: 'DSO · 12 locations', result: '40% reduction in claim denials within 90 days of deployment.', image: '/images/imaging-operatory.jpg' },
  { name: 'Clearpoint Family Dental', type: 'Private practice', result: 'Front desk reclaimed 10 hours per week previously spent on insurance calls.', image: '/images/insurance-billing.jpg' },
  { name: 'Meridian DSO', type: 'DSO · 80+ locations', result: 'Standardized diagnosis accuracy across all network providers in 6 weeks.', image: '/images/hero-xray.jpg' },
  { name: 'Summit Oral Care', type: 'Group practice · 5 locations', result: 'Case acceptance rate improved by 28% after implementing Vision AI patient education.', image: '/images/patient-consultation.jpg' },
  { name: 'Nova Dental Partners', type: 'Group practice', result: 'Voice AI reduced charting time per visit by 65% in the first month.', image: '/images/voice-ai.jpg' },
  { name: 'BlueStar Dental', type: 'Private practice', result: 'Full onboarding completed in 4 days with zero disruption to existing workflow.', image: '/images/vision-ai.jpg' },
];

export default function CustomersPage() {
  return (
    <>
      <section className="bg-black py-24" aria-labelledby="customers-headline">
        <Container>
          <div className="text-center">
            <span className="label-tag text-muted mb-4 block">Customer Stories</span>
            <h1 id="customers-headline" className="section-headline text-neige mb-4">
              Real practices. Real results.
            </h1>
            <p className="text-neige/60 max-w-lg mx-auto">
              See how dental groups of every size are growing with DentaIQ.
            </p>
          </div>
        </Container>
      </section>

      <Section bg="neige">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-white flex flex-col h-full overflow-hidden group">
                  <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-neige-dark border border-border">
                    <img
                      src={cs.image}
                      alt={cs.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="label-tag mb-1">{cs.type}</span>
                  <h2 className="text-lg font-bold text-black mb-3">{cs.name}</h2>
                  <p className="text-sm text-body leading-relaxed flex-1 mb-6">"{cs.result}"</p>
                  <a href="#" className="text-sm font-semibold text-black border-b border-black pb-0.5 inline-flex items-center gap-1 hover:gap-2 transition-all duration-200 self-start">
                    Read case study →
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="black">
        <Container>
          <div className="text-center">
            <h2 className="section-headline text-neige mb-4">Join thousands of practices</h2>
            <p className="text-neige/60 mb-10 max-w-md mx-auto">Start your 30-day free trial today — no credit card required.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" href="/book-demo" size="lg" id="customers-cta-demo">Book a demo</Button>
              <Button variant="secondary" href="/try" size="lg" id="customers-cta-trial" className="border-neige/40 text-neige hover:bg-neige/10">Try for free</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
