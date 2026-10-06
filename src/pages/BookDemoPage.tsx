import { useState } from 'react';
import { Section } from '../components/shared/Section';
import { Container } from '../components/shared/Container';
import { AnimatedSection } from '../components/shared/AnimatedSection';
import { Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  practice: string;
  role: string;
  locations: string;
  pms: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  practice?: string;
  role?: string;
}

const pmsSystems = ['Dentrix', 'Eaglesoft', 'Open Dental', 'Curve Dental', 'Carestream Dental', 'Other'];
const roles = ['Dentist / Practice Owner', 'Associate Dentist', 'Office Manager', 'DSO Executive', 'Practice Administrator', 'Other'];

export default function BookDemoPage() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', practice: '', role: '', locations: '', pms: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid work email required';
    if (!form.practice.trim()) e.practice = 'Practice name is required';
    if (!form.role) e.role = 'Please select your role';
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
            <h1 className="section-headline mb-4">You're booked!</h1>
            <p className="text-body max-w-md mx-auto">
              We've received your request and a member of our team will reach out within one business day to confirm your demo time.
            </p>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <section className="bg-black py-24" aria-labelledby="demo-headline">
        <Container narrow>
          <div className="text-center">
            <span className="label-tag text-muted mb-4 block">Book a Demo</span>
            <h1 id="demo-headline" className="section-headline text-neige mb-4">See DentaIQ in action</h1>
            <p className="text-neige/60">A personalized 30-minute demo with a product specialist, tailored to your practice.</p>
          </div>
        </Container>
      </section>

      <Section bg="neige">
        <Container narrow>
          <AnimatedSection>
            <div className="card-white">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="demo-name" className="label-tag block mb-1.5">Full name *</label>
                  <input
                    id="demo-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm text-black bg-neige focus:outline-none focus:ring-2 focus:ring-black ${errors.name ? 'border-red-400' : 'border-border'}`}
                    placeholder="Dr. Jane Smith"
                    aria-describedby={errors.name ? 'demo-name-error' : undefined}
                  />
                  {errors.name && <p id="demo-name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="demo-email" className="label-tag block mb-1.5">Work email *</label>
                  <input
                    id="demo-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm text-black bg-neige focus:outline-none focus:ring-2 focus:ring-black ${errors.email ? 'border-red-400' : 'border-border'}`}
                    placeholder="jane@yourpractice.com"
                    aria-describedby={errors.email ? 'demo-email-error' : undefined}
                  />
                  {errors.email && <p id="demo-email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Practice */}
                <div>
                  <label htmlFor="demo-practice" className="label-tag block mb-1.5">Practice or DSO name *</label>
                  <input
                    id="demo-practice"
                    type="text"
                    value={form.practice}
                    onChange={(e) => setForm({ ...form, practice: e.target.value })}
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm text-black bg-neige focus:outline-none focus:ring-2 focus:ring-black ${errors.practice ? 'border-red-400' : 'border-border'}`}
                    placeholder="Smith Family Dentistry"
                    aria-describedby={errors.practice ? 'demo-practice-error' : undefined}
                  />
                  {errors.practice && <p id="demo-practice-error" className="text-red-500 text-xs mt-1">{errors.practice}</p>}
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="demo-role" className="label-tag block mb-1.5">Your role *</label>
                  <select
                    id="demo-role"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className={`w-full border rounded-xl px-4 py-2.5 text-sm text-black bg-neige focus:outline-none focus:ring-2 focus:ring-black ${errors.role ? 'border-red-400' : 'border-border'}`}
                    aria-describedby={errors.role ? 'demo-role-error' : undefined}
                  >
                    <option value="">Select your role</option>
                    {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                  {errors.role && <p id="demo-role-error" className="text-red-500 text-xs mt-1">{errors.role}</p>}
                </div>

                {/* Locations + PMS row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-locations" className="label-tag block mb-1.5">Number of locations</label>
                    <input
                      id="demo-locations"
                      type="number"
                      min="1"
                      value={form.locations}
                      onChange={(e) => setForm({ ...form, locations: e.target.value })}
                      className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-black bg-neige focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="1"
                    />
                  </div>
                  <div>
                    <label htmlFor="demo-pms" className="label-tag block mb-1.5">Practice management software</label>
                    <select
                      id="demo-pms"
                      value={form.pms}
                      onChange={(e) => setForm({ ...form, pms: e.target.value })}
                      className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-black bg-neige focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="">Select PMS</option>
                      {pmsSystems.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="demo-message" className="label-tag block mb-1.5">Anything you'd like us to know? (optional)</label>
                  <textarea
                    id="demo-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-black bg-neige focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    placeholder="Key challenges, specific features you want to see..."
                  />
                </div>

                <button type="submit" id="demo-submit" className="btn-primary w-full justify-center py-4 text-base">
                  Request demo
                </button>

                <p className="text-xs text-muted text-center">
                  By submitting, you agree to our{' '}
                  <a href="#" className="underline hover:text-body">Privacy Policy</a>.
                  We'll never share your information.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
