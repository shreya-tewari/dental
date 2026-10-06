import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { TestimonialCard } from '../components/shared/TestimonialCard';
import { testimonialsContent } from '../content/homepage';

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-black py-24" aria-labelledby="reviews-headline">
        <Container>
          <div className="text-center">
            <span className="label-tag text-muted mb-4 block">Reviews</span>
            <h1 id="reviews-headline" className="section-headline text-neige mb-4">
              {testimonialsContent.headline}
            </h1>
            <p className="text-neige/60 max-w-lg mx-auto">Verified reviews from dental professionals across the US.</p>
          </div>
        </Container>
      </section>

      <Section bg="neige">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsContent.items.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <TestimonialCard
                  quote={t.quote}
                  name={t.name}
                  role={t.role}
                  practice={t.practice}
                />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
