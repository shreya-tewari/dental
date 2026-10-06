import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="bg-black py-24" aria-labelledby="contact-headline">
        <Container>
          <div className="text-center">
            <span className="label-tag text-muted mb-4 block">Contact</span>
            <h1 id="contact-headline" className="section-headline text-neige mb-4">Get in touch</h1>
            <p className="text-neige/60 max-w-lg mx-auto">Our team is here to help. Choose the best way to reach us.</p>
          </div>
        </Container>
      </section>

      <Section bg="neige">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <AnimatedSection direction="left">
              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Sales', value: '1-800-111-2222', href: 'tel:+18001112222' },
                  { icon: Phone, label: 'Support', value: '1-800-111-3333', href: 'tel:+18001113333' },
                  { icon: Mail, label: 'General', value: 'hello@dentaiq.com', href: 'mailto:hello@dentaiq.com' },
                  { icon: MapPin, label: 'Headquarters', value: '123 Innovation Drive, San Francisco, CA 94105', href: '#' },
                ].map((item, i) => (
                  <div key={i} className="card-white flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-neige-dark border border-border flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-body" />
                    </div>
                    <div>
                      <p className="label-tag mb-0.5">{item.label}</p>
                      <a href={item.href} className="text-sm font-semibold text-black hover:underline">{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Contact form */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="card-white">
                <h2 className="text-xl font-bold text-black mb-6">Send us a message</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="label-tag block mb-1.5">Name</label>
                      <input id="contact-name" type="text" className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-black bg-neige focus:outline-none focus:ring-2 focus:ring-black" placeholder="Dr. Jane Smith" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="label-tag block mb-1.5">Email</label>
                      <input id="contact-email" type="email" className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-black bg-neige focus:outline-none focus:ring-2 focus:ring-black" placeholder="jane@practice.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="label-tag block mb-1.5">Subject</label>
                    <input id="contact-subject" type="text" className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-black bg-neige focus:outline-none focus:ring-2 focus:ring-black" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="label-tag block mb-1.5">Message</label>
                    <textarea id="contact-message" rows={5} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-black bg-neige focus:outline-none focus:ring-2 focus:ring-black resize-none" placeholder="Tell us more..." />
                  </div>
                  <button type="submit" id="contact-submit" className="btn-primary w-full justify-center">Send message</button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>
    </>
  );
}
