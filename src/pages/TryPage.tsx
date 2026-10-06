import { useState } from 'react';
import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  practice: string;
  pms: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  practice?: string;
}

const pmsSystems = ['Dentrix', 'Eaglesoft', 'Open Dental', 'Curve Dental', 'Carestream Dental', 'Other'];

const perks = [
  '30-day full-featured trial, no credit card required',
  'Works with your existing imaging sensors',
  'Onboarding support included',
  'Cancel anytime',
];

export default function TryPage() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', practice: '', pms: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid work email required';
    if (!form.practice.trim()) e.practice = 'Practice name is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <Section bg="neige" className="min-h-[70vh] flex items-center">
        <Container narrow>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-neige" />
            </div>
            <h1 className="section-headline mb-4">Trial activated!</h1>
            <p className="text-body max-w-md mx-auto">
              Check your inbox for setup instructions. Your 30-day trial starts now.
            </p>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <section className="bg-black py-24" aria-labelledby="try-headline">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-tag text-muted mb-4 block">Try for Free</span>
              <h1 id="try-headline" className="section-headline text-neige mb-6">
                Start your free 30-day trial
              </h1>
              <p className="text-neige/60 mb-8 leading-relaxed">
                Get full access to DentaIQ Vision AI, Insurance Verification, and Voice AI. No credit card. No commitment.
              </p>
              <ul className="space-y-3">
                {perks.map((perk, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-neige/10 border border-neige/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-neige" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-neige/70">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <AnimatedSection direction="right">
              <div className="card bg-neige rounded-2xl p-8">
                <h2 className="text-xl font-bold text-black mb-6">Create your account</h2>
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="try-name" className="label-tag block mb-1.5">Full name *</label>
                    <input
                      id="try-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-2.5 text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-black ${errors.name ? 'border-red-400' : 'border-border'}`}
                      placeholder="Dr. Jane Smith"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="try-email" className="label-tag block mb-1.5">Work email *</label>
                    <input
                      id="try-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-2.5 text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-black ${errors.email ? 'border-red-400' : 'border-border'}`}
                      placeholder="jane@yourpractice.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="try-practice" className="label-tag block mb-1.5">Practice name *</label>
                    <input
                      id="try-practice"
                      type="text"
                      value={form.practice}
                      onChange={(e) => setForm({ ...form, practice: e.target.value })}
                      className={`w-full border rounded-xl px-4 py-2.5 text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-black ${errors.practice ? 'border-red-400' : 'border-border'}`}
                      placeholder="Smith Family Dentistry"
                    />
                    {errors.practice && <p className="text-red-500 text-xs mt-1">{errors.practice}</p>}
                  </div>

                  <div>
                    <label htmlFor="try-pms" className="label-tag block mb-1.5">Practice management software</label>
                    <select
                      id="try-pms"
                      value={form.pms}
                      onChange={(e) => setForm({ ...form, pms: e.target.value })}
                      className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="">Select PMS</option>
                      {pmsSystems.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>

                  <button type="submit" id="try-submit" className="btn-primary w-full justify-center py-4 text-base">
                    Start free trial
                  </button>

                  <p className="text-xs text-muted text-center">
                    By signing up, you agree to our{' '}
                    <a href="#" className="underline hover:text-body">Terms & Conditions</a> and{' '}
                    <a href="#" className="underline hover:text-body">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
