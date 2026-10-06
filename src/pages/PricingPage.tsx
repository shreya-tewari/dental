import { Check, Minus } from 'lucide-react';
import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { PricingCard } from '../components/shared/PricingCard';
import { pricingTiers, pricingFeatures } from '../content/pricing';
import { cn } from '../lib/utils';

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-4 h-4 text-black mx-auto" />;
  if (value === false) return <Minus className="w-4 h-4 text-border mx-auto" />;
  return <span className="text-sm text-body font-medium">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black py-24 md:py-32" aria-labelledby="pricing-headline">
        <Container>
          <div className="text-center">
            <span className="label-tag text-muted mb-6 block">Pricing</span>
            <h1 id="pricing-headline" className="section-headline text-neige mb-6">
              Simple, transparent pricing
            </h1>
            <p className="text-neige/60 max-w-xl mx-auto">
              All plans include a 30-day free trial. No credit card required to start.
            </p>
          </div>
        </Container>
      </section>

      {/* Tier cards */}
      <Section bg="neige">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {pricingTiers.map((tier) => (
              <AnimatedSection key={tier.id}>
                <PricingCard tier={tier} />
              </AnimatedSection>
            ))}
          </div>

          {/* Feature comparison table */}
          <AnimatedSection>
            <h2 className="section-subheadline text-center mb-8">Feature comparison</h2>
          </AnimatedSection>
          <div className="rounded-2xl border border-border bg-white overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-4 gap-0 border-b border-border bg-neige-dark">
              <div className="p-4 text-sm font-semibold text-body">Feature</div>
              {pricingTiers.map((t) => (
                <div
                  key={t.id}
                  className={cn('p-4 text-center text-sm font-bold uppercase tracking-wider', t.highlighted ? 'bg-black text-neige' : 'text-black')}
                >
                  {t.name}
                </div>
              ))}
            </div>

            {pricingFeatures.map((feature, i) => (
              <div
                key={i}
                className={cn(
                  'grid grid-cols-4 gap-0 border-b border-border last:border-b-0',
                  i % 2 === 0 ? 'bg-white' : 'bg-neige/40'
                )}
              >
                <div className="p-4 text-sm text-body">{feature.name}</div>
                <div className="p-4 text-center"><FeatureValue value={feature.practice} /></div>
                <div className="p-4 text-center bg-black/[0.02]"><FeatureValue value={feature.group} /></div>
                <div className="p-4 text-center"><FeatureValue value={feature.enterprise} /></div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section bg="black">
        <Container>
          <div className="text-center">
            <h2 className="section-headline text-neige mb-4">Not sure which plan is right?</h2>
            <p className="text-neige/60 mb-10">Talk to our team and we\'ll help you find the right fit.</p>
            <a href="/contact" className="btn-primary text-sm px-8 py-4">Contact sales</a>
          </div>
        </Container>
      </Section>
    </>
  );
}
