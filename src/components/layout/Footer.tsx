import { Link } from 'react-router-dom';

const footerLinks = [
  {
    heading: 'Solutions',
    links: [
      { label: 'Vision AI', href: '/solutions/vision-ai' },
      { label: 'AI-Native Imaging', href: '/solutions/imaging' },
      { label: 'Voice AI', href: '/solutions/voice' },
      { label: 'Insurance Verification', href: '/solutions/insurance-verification' },
      { label: 'Pre-Treatment Estimates', href: '/solutions/pre-treatment-estimates' },
      { label: 'RCM Overview', href: '/solutions/rcm' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Resources & Webinars', href: '/resources' },
      { label: 'Glossary', href: '/glossary' },
      { label: 'Customer Stories', href: '/customers' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Book a Demo', href: '/book-demo' },
      { label: 'Try for Free', href: '/try' },
    ],
  },
  {
    heading: 'Social',
    links: [
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter / X', href: '#' },
      { label: 'YouTube', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookie Notice', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'HIPAA Policy', href: '#' },
  { label: 'Trust Center', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-black text-neige" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Logo + tagline */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 mb-4" aria-label="DentaIQ home">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="28" height="28" rx="6" fill="#F6F4F0" />
              <path d="M8 20 L8 8 L14 8 C18 8 20 10 20 14 C20 18 18 20 14 20 Z" fill="#121212" />
              <circle cx="14" cy="14" r="3" fill="#F6F4F0" />
            </svg>
            <span className="text-lg font-black tracking-tight text-neige">DentaIQ</span>
          </Link>
          <p className="text-muted text-sm max-w-md leading-relaxed">
            The AI platform for dentistry. Helping dental practices, DSOs, insurers, and educators
            improve outcomes for every patient.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-neige/70 hover:text-neige transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#2A2A2A] pt-8 mb-6">
          <p className="text-xs text-muted leading-relaxed max-w-3xl">
            <strong className="text-neige/50">Disclaimer:</strong> AI outputs are decision-support tools and do not replace the
            clinical judgment of a licensed dentist. DentaIQ products are intended to assist, not
            replace, clinical evaluation.
          </p>
        </div>

        {/* Legal row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} DentaIQ, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs text-muted hover:text-neige transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
