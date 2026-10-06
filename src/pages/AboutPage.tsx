import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { Button } from '../components/shared/Button';
import { missionContent } from '../content/homepage';

const values = [
  { title: 'Patient First', description: 'Every product decision starts with the question: does this improve patient outcomes?' },
  { title: 'Clinical Integrity', description: 'AI is a tool, not a replacement for clinical expertise. We build systems that augment dentists, not replace them.' },
  { title: 'Trust Through Transparency', description: 'We explain what our AI sees and why, building trust with every dentist and patient who uses our platform.' },
  { title: 'Relentless Improvement', description: 'Our models learn from every interaction, continuously improving accuracy and usefulness.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-black py-20 md:py-24" aria-labelledby="about-headline">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="label-tag text-muted mb-4 block">About Us</span>
            <h1 id="about-headline" className="section-headline text-neige mb-6">
              We're on a mission to improve oral health for everyone.
            </h1>
            <p className="text-neige/60 text-lg leading-relaxed">{missionContent.body}</p>
          </div>

          {/* High-Resolution Team & Clinical Context Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 group">
              <img
                src="/images/dental-team.jpg"
                alt="DentaIQ clinical and engineering team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                    Our People
                  </span>
                  <p className="text-sm font-semibold text-neige">
                    Clinicians, computer vision PhDs, and healthcare innovators working side by side.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 group">
              <img
                src="/images/patient-consultation.jpg"
                alt="Dentist and patient in modern operatory reviewing treatment plan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                    Clinical Impact
                  </span>
                  <p className="text-sm font-semibold text-neige">
                    Empowering dentists to communicate findings with clarity and patient trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section bg="neige">
        <Container>
          <AnimatedSection>
            <h2 className="section-headline mb-12">Our values</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card-white">
                  <h3 className="text-lg font-bold text-black mb-2">{v.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      <Section bg="black">
        <Container>
          <div className="text-center">
            <h2 className="section-headline text-neige mb-4">Want to join us?</h2>
            <p className="text-neige/60 mb-10 max-w-md mx-auto">We're building the future of dental care. Come help us do it.</p>
            <Button variant="primary" href="/careers" size="lg" id="about-cta-careers">View open roles</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
