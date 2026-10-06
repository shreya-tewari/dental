import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { AnimatedSection } from '../components/shared/AnimatedSection';

const resources = [
  { type: 'Webinar', title: 'How AI is Changing Dental Diagnosis in 2026', date: 'Sep 30, 2026', duration: '45 min', image: '/images/vision-ai.jpg' },
  { type: 'White Paper', title: 'Clinical Validation of DentaIQ Vision AI', date: 'Aug 15, 2026', duration: '12 pages', image: '/images/hero-xray.jpg' },
  { type: 'Webinar', title: 'Automating Insurance Verification at Scale for DSOs', date: 'Aug 2, 2026', duration: '30 min', image: '/images/insurance-billing.jpg' },
  { type: 'Research', title: 'The State of AI in Dentistry: 2026 Industry Report', date: 'Jul 20, 2026', duration: '28 pages', image: '/images/imaging-operatory.jpg' },
  { type: 'Webinar', title: 'Voice AI in the Operatory: A Live Demo', date: 'Jun 18, 2026', duration: '60 min', image: '/images/voice-ai.jpg' },
  { type: 'Guide', title: 'HIPAA Compliance Guide for AI-Powered Dental Tools', date: 'Jun 5, 2026', duration: '8 pages', image: '/images/blog-hipaa.jpg' },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-black py-24" aria-labelledby="resources-headline">
        <Container>
          <div className="text-center">
            <span className="label-tag text-muted mb-4 block">Resources</span>
            <h1 id="resources-headline" className="section-headline text-neige mb-4">
              Webinars, research & guides
            </h1>
            <p className="text-neige/60 max-w-lg mx-auto">
              Everything you need to understand and implement AI in your dental practice.
            </p>
          </div>
        </Container>
      </section>

      <Section bg="neige">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="card-white flex flex-col h-full overflow-hidden group">
                  <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-neige-dark border border-border">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="label-tag mb-2">{r.type}</span>
                  <h2 className="text-base font-bold text-black mb-3 flex-1 leading-snug">{r.title}</h2>
                  <div className="flex items-center justify-between text-xs text-muted pt-3 border-t border-border mt-4">
                    <span>{r.date}</span>
                    <span>{r.duration}</span>
                  </div>
                  <a href="#" className="mt-4 btn-secondary text-xs justify-center">Access resource</a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
