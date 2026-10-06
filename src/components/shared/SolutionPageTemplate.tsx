import { Check } from 'lucide-react';
import { Button } from '../shared/Button';
import { Container } from '../shared/Container';
import { Section } from '../shared/Section';
import { AnimatedSection } from '../shared/AnimatedSection';
import { FAQAccordion } from '../shared/FAQAccordion';

interface Benefit {
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SolutionPageTemplateProps {
  hero: {
    label: string;
    headline: string;
    subheading: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary?: { label: string; href: string };
    illustration: React.FC;
  };
  benefits: Benefit[];
  faq?: FAQItem[];
  ctaBand?: {
    headline: string;
    body: string;
  };
}

export function SolutionPageTemplate({ hero, benefits, faq, ctaBand }: SolutionPageTemplateProps) {
  const Illustration = hero.illustration;

  return (
    <>
      {/* Hero */}
      <section className="bg-black py-24 md:py-32" aria-labelledby="solution-hero-headline">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-tag text-muted mb-6 block">{hero.label}</span>
              <h1
                id="solution-hero-headline"
                className="section-headline text-neige mb-6 text-balance"
              >
                {hero.headline}
              </h1>
              <p className="text-neige/70 text-lg leading-relaxed mb-10">{hero.subheading}</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href={hero.ctaPrimary.href} size="lg" id="solution-hero-cta-primary">
                  {hero.ctaPrimary.label}
                </Button>
                {hero.ctaSecondary && (
                  <Button
                    variant="secondary"
                    href={hero.ctaSecondary.href}
                    size="lg"
                    id="solution-hero-cta-secondary"
                    className="border-neige/40 text-neige hover:bg-neige/10"
                  >
                    {hero.ctaSecondary.label}
                  </Button>
                )}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] soft-shadow border border-[#2A2A2A]">
              <Illustration />
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits grid */}
      <Section bg="neige">
        <Container>
          <AnimatedSection>
            <h2 className="section-headline text-center mb-16">Key benefits</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-white h-full">
                  <div className="w-10 h-10 rounded-xl bg-neige-dark border border-border flex items-center justify-center mb-4">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-base font-bold text-black mb-2">{b.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{b.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <Section bg="white">
          <Container narrow>
            <AnimatedSection>
              <h2 className="section-headline text-center mb-12">Frequently asked questions</h2>
            </AnimatedSection>
            <FAQAccordion items={faq} />
          </Container>
        </Section>
      )}

      {/* CTA band */}
      <Section bg="black">
        <Container>
          <div className="text-center">
            <h2 className="section-headline text-neige mb-4">
              {ctaBand?.headline || 'Ready to get started?'}
            </h2>
            <p className="text-neige/60 mb-10 max-w-md mx-auto">
              {ctaBand?.body || 'See DentaIQ in action with a personalized demo.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" href="/book-demo" size="lg" id="solution-final-cta-demo">
                Book a demo
              </Button>
              <Button
                variant="secondary"
                href="/try"
                size="lg"
                id="solution-final-cta-trial"
                className="border-neige/40 text-neige hover:bg-neige/10"
              >
                Try for free
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
