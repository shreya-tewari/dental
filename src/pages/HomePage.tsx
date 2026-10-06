import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../components/shared/Button';
import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { LogoMarquee } from '../components/shared/LogoMarquee';
import { FeatureRow } from '../components/shared/FeatureRow';
import { StatCounter } from '../components/shared/StatCounter';
import { TestimonialCard } from '../components/shared/TestimonialCard';
import { FAQAccordion } from '../components/shared/FAQAccordion';
import { XrayWithAIOverlay } from '../components/shared/Illustrations';
import {
  heroContent,
  productSuiteContent,
  featureShowcaseContent,
  howItWorksContent,
  statsContent,
  testimonialsContent,
  faqContent,
  missionContent,
  finalCtaContent,
} from '../content/homepage';

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-black min-h-[90vh] flex items-center relative overflow-hidden" aria-labelledby="hero-headline">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#F6F4F0 1px, transparent 1px), linear-gradient(90deg, #F6F4F0 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 md:py-28">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="label-tag text-muted mb-6 block">AI Platform for Dentistry</span>
              <h1
                id="hero-headline"
                className="display-headline text-neige mb-6 text-balance"
              >
                {heroContent.headline}
              </h1>
              <p className="text-neige/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                {heroContent.subheading}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button id="hero-cta-demo" variant="primary" href={heroContent.ctaPrimary.href} size="lg">
                  {heroContent.ctaPrimary.label}
                </Button>
                <Button
                  id="hero-cta-trial"
                  variant="secondary"
                  href={heroContent.ctaSecondary.href}
                  size="lg"
                  className="border-neige/40 text-neige hover:bg-neige/10 hover:border-neige"
                >
                  {heroContent.ctaSecondary.label}
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right: illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl overflow-hidden aspect-[4/3] soft-shadow border border-[#2A2A2A]"
          >
            <XrayWithAIOverlay />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// ─── Trusted By ──────────────────────────────────────────────────────────────

function TrustedBySection() {
  return (
    <Section bg="neige" className="py-10">
      <Container>
        <p className="label-tag text-center mb-8">Trusted by leading dental groups</p>
      </Container>
      <LogoMarquee />
    </Section>
  );
}

// ─── Product Suite ───────────────────────────────────────────────────────────

function ProductSuiteSection() {
  const [activeId, setActiveId] = useState('dentists');
  const active = productSuiteContent.audiences.find((a) => a.id === activeId)!;

  return (
    <Section bg="white" id="product-suite">
      <Container>
        <AnimatedSection>
          <h2 className="section-headline text-center mb-4 max-w-3xl mx-auto">
            {productSuiteContent.headline}
          </h2>
          <p className="text-center text-muted text-sm mb-12 max-w-lg mx-auto">
            One platform. Every stakeholder in the dental ecosystem.
          </p>
        </AnimatedSection>

        {/* Audience cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {productSuiteContent.audiences.map((audience) => (
            <button
              key={audience.id}
              id={`product-suite-tab-${audience.id}`}
              onClick={() => setActiveId(audience.id)}
              className={`rounded-2xl p-5 text-left border transition-all duration-200 ${
                activeId === audience.id
                  ? 'bg-black border-black text-neige shadow-lg'
                  : 'bg-neige-dark border-border text-body hover:border-black/30 hover:bg-neige'
              }`}
            >
              <div className={`text-xs font-bold uppercase tracking-[0.12em] mb-1 ${activeId === audience.id ? 'text-neige/60' : 'text-muted'}`}>
                For
              </div>
              <div className="text-base font-bold">{audience.label}</div>
            </button>
          ))}
        </div>

        {/* Active panel */}
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="card grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-10"
        >
          <div>
            <h3 className="text-2xl font-black text-black mb-4 tracking-tight">
              Built for {active.label}
            </h3>
            <p className="text-body leading-relaxed mb-6">{active.description}</p>
            <Button href={active.href} variant="primary" id={`product-suite-cta-${activeId}`}>
              Explore solutions <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <div>
            <p className="label-tag mb-4">Key benefits</p>
            <ul className="space-y-3">
              {active.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-white border border-border flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-black" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-body">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

// ─── Feature Showcase ─────────────────────────────────────────────────────────

function FeatureShowcaseSection() {
  return (
    <div>
      {featureShowcaseContent.map((feature, i) => (
        <FeatureRow
          key={feature.id}
          label={feature.label}
          title={feature.title}
          description={feature.description}
          bullets={feature.bullets}
          cta={feature.cta}
          learnMore={feature.learnMore}
          illustrationId={feature.id}
          reverse={i % 2 !== 0}
          bg={i % 2 === 0 ? 'neige' : 'white'}
        />
      ))}
      <div className="bg-white py-6">
        <Container>
          <div className="text-center">
            <Link
              to="/solutions/dentists"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-black hover:gap-3 transition-all duration-200 border-b border-black pb-0.5"
            >
              Explore all products for dentists <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorksSection() {
  return (
    <Section bg="neige" id="how-it-works">
      <Container>
        <AnimatedSection>
          <h2 className="section-headline text-center mb-16">{howItWorksContent.headline}</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-border" aria-hidden="true" />

          {howItWorksContent.steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.15}>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-6 relative z-10">
                  <span className="text-lg font-black text-neige">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                <p className="text-body text-sm leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ─── Stats Band ───────────────────────────────────────────────────────────────

function StatsBandSection() {
  return (
    <Section bg="black" id="stats">
      <Container>
        <AnimatedSection>
          <p className="label-tag text-muted text-center mb-12">Results that speak</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statsContent.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                note={stat.note}
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const items = testimonialsContent.items;
  const totalPages = Math.ceil(items.length / perPage);
  const visible = items.slice(page * perPage, page * perPage + perPage);

  return (
    <Section bg="neige" id="testimonials">
      <Container>
        <AnimatedSection>
          <h2 className="section-headline text-center mb-3">{testimonialsContent.headline}</h2>
          <p className="text-center text-muted mb-12">{testimonialsContent.subheadline}</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <AnimatedSection key={`${page}-${i}`} delay={i * 0.1}>
              <TestimonialCard
                quote={t.quote}
                name={t.name}
                role={t.role}
                practice={t.practice}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              id={`testimonial-page-${i}`}
              onClick={() => setPage(i)}
              aria-label={`Testimonials page ${i + 1}`}
              aria-current={page === i ? 'true' : undefined}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${page === i ? 'bg-black w-6' : 'bg-border hover:bg-muted'}`}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/customers"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-black hover:gap-3 transition-all duration-200 border-b border-black pb-0.5"
          >
            Our success stories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

function FAQSection() {
  return (
    <Section bg="white" id="faq">
      <Container narrow>
        <AnimatedSection>
          <h2 className="section-headline text-center mb-12">Frequently asked questions</h2>
        </AnimatedSection>
        <FAQAccordion items={faqContent} />
      </Container>
    </Section>
  );
}

// ─── Mission ──────────────────────────────────────────────────────────────────

function MissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id="mission"
      className="relative overflow-hidden py-32 md:py-40"
      style={{
        background: 'linear-gradient(135deg, #121212 0%, #1E1E1E 40%, #2A2A2A 70%, #121212 100%)',
        backgroundSize: '300% 300%',
        animation: 'gradient-shift 8s ease infinite',
      }}
      aria-labelledby="mission-headline"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, #3A3A3A 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="mission-headline"
            className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-neige mb-8 leading-tight max-w-4xl mx-auto text-balance"
          >
            {missionContent.statement}
          </h2>
          <p className="text-neige/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            {missionContent.body}
          </p>
          <Button
            id="mission-cta"
            variant="secondary"
            href={missionContent.cta.href}
            size="lg"
            className="border-neige/40 text-neige hover:bg-neige/10 hover:border-neige"
          >
            {missionContent.cta.label}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTASection() {
  return (
    <Section bg="neige">
      <Container>
        <AnimatedSection>
          <div className="text-center">
            <h2 className="section-headline mb-6">{finalCtaContent.headline}</h2>
            <p className="text-muted mb-10 max-w-md mx-auto">
              See how DentaIQ can transform your practice in under 30 minutes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button id="final-cta-demo" variant="primary" href={finalCtaContent.ctaPrimary.href} size="lg">
                {finalCtaContent.ctaPrimary.label}
              </Button>
              <Button id="final-cta-trial" variant="secondary" href={finalCtaContent.ctaSecondary.href} size="lg">
                {finalCtaContent.ctaSecondary.label}
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ProductSuiteSection />
      <FeatureShowcaseSection />
      <HowItWorksSection />
      <StatsBandSection />
      <TestimonialsSection />
      <FAQSection />
      <MissionSection />
      <FinalCTASection />
    </>
  );
}
