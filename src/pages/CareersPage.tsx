import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { AnimatedSection } from '../components/shared/AnimatedSection';

const roles = [
  { title: 'Senior ML Engineer — Computer Vision', team: 'AI Research', location: 'Remote · US', type: 'Full-time' },
  { title: 'Full-Stack Engineer (TypeScript / React)', team: 'Product Engineering', location: 'Remote · US', type: 'Full-time' },
  { title: 'Dental Informaticist', team: 'Clinical AI', location: 'Remote · US', type: 'Full-time' },
  { title: 'Enterprise Account Executive — DSO', team: 'Sales', location: 'Remote · US', type: 'Full-time' },
  { title: 'Implementation Manager', team: 'Customer Success', location: 'Remote · US', type: 'Full-time' },
  { title: 'Product Designer', team: 'Design', location: 'Remote · US', type: 'Full-time' },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-black py-24" aria-labelledby="careers-headline">
        <Container>
          <div className="max-w-3xl">
            <span className="label-tag text-muted mb-4 block">Careers</span>
            <h1 id="careers-headline" className="section-headline text-neige mb-6">
              Help us build the future of dental care.
            </h1>
            <p className="text-neige/60 text-lg leading-relaxed">
              We're a team of engineers, clinicians, and operators united by one mission: making exceptional dental care accessible to every patient.
            </p>
          </div>
        </Container>
      </section>

      <Section bg="neige">
        <Container>
          <AnimatedSection>
            <h2 className="section-headline mb-10">Open roles</h2>
          </AnimatedSection>
          <div className="space-y-3">
            {roles.map((role, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <a href="#" className="card-white flex items-center justify-between group hover:shadow-md transition-shadow duration-200 p-6">
                  <div>
                    <h3 className="text-base font-bold text-black mb-1 group-hover:underline">{role.title}</h3>
                    <div className="flex gap-3 text-xs text-muted">
                      <span>{role.team}</span>
                      <span>·</span>
                      <span>{role.location}</span>
                      <span>·</span>
                      <span>{role.type}</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-black opacity-0 group-hover:opacity-100 transition-opacity">Apply →</span>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
