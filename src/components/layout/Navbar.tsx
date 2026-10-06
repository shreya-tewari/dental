import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { megaMenus, resourcesMenu, companyMenu } from '../../content/nav';
import { cn } from '../../lib/utils';

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded-sm" aria-label="DentaIQ home">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="28" height="28" rx="6" fill="#121212" />
        <path d="M8 20 L8 8 L14 8 C18 8 20 10 20 14 C20 18 18 20 14 20 Z" fill="#F6F4F0" />
        <circle cx="14" cy="14" r="3" fill="#121212" />
      </svg>
      <span className="text-lg font-black tracking-tight text-black">DentaIQ</span>
    </Link>
  );
}

interface MegaPanelProps {
  dropdown: typeof megaMenus[0];
  onClose: () => void;
}

function MegaPanel({ dropdown, onClose }: MegaPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white rounded-2xl border border-border shadow-2xl z-50 overflow-hidden"
    >
      <div className={cn('grid gap-0', `grid-cols-${dropdown.groups.length}`)}>
        {dropdown.groups.map((group) => (
          <div key={group.label} className="p-6 border-r border-border last:border-r-0">
            <p className="label-tag mb-4">{group.label}</p>
            <ul className="space-y-1">
              {group.products.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.href}
                    onClick={onClose}
                    className="block rounded-xl p-3 hover:bg-neige transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-black">{product.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-muted mt-0.5 leading-snug">{product.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

interface SimplePanelProps {
  items: { name: string; description: string; href: string }[];
  onClose: () => void;
}

function SimplePanel({ items, onClose }: SimplePanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl border border-border shadow-2xl z-50 overflow-hidden"
    >
      <div className="p-4">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                onClick={onClose}
                className="block rounded-xl p-3 hover:bg-neige transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-black">{item.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-muted mt-0.5">{item.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  return (
    <header
      ref={navRef}
      className={cn(
        'sticky top-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-white border-b border-border'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0" aria-label="Main navigation">
            {megaMenus.map((menu) => (
              <div key={menu.label} className="relative">
                <button
                  id={`nav-${menu.label.toLowerCase()}`}
                  aria-expanded={activeMenu === menu.label}
                  aria-haspopup="true"
                  onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-body hover:text-black transition-colors rounded-lg"
                >
                  {menu.label}
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 text-muted transition-transform duration-200',
                      activeMenu === menu.label && 'rotate-180'
                    )}
                  />
                </button>
                <AnimatePresence>
                  {activeMenu === menu.label && (
                    <MegaPanel dropdown={menu} onClose={() => setActiveMenu(null)} />
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Resources */}
            <div className="relative">
              <button
                id="nav-resources"
                aria-expanded={activeMenu === 'resources'}
                aria-haspopup="true"
                onClick={() => setActiveMenu(activeMenu === 'resources' ? null : 'resources')}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-body hover:text-black transition-colors rounded-lg"
              >
                Resources
                <ChevronDown className={cn('w-3.5 h-3.5 text-muted transition-transform duration-200', activeMenu === 'resources' && 'rotate-180')} />
              </button>
              <AnimatePresence>
                {activeMenu === 'resources' && (
                  <SimplePanel items={resourcesMenu} onClose={() => setActiveMenu(null)} />
                )}
              </AnimatePresence>
            </div>

            {/* Company */}
            <div className="relative">
              <button
                id="nav-company"
                aria-expanded={activeMenu === 'company'}
                aria-haspopup="true"
                onClick={() => setActiveMenu(activeMenu === 'company' ? null : 'company')}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-body hover:text-black transition-colors rounded-lg"
              >
                Company
                <ChevronDown className={cn('w-3.5 h-3.5 text-muted transition-transform duration-200', activeMenu === 'company' && 'rotate-180')} />
              </button>
              <AnimatePresence>
                {activeMenu === 'company' && (
                  <SimplePanel items={companyMenu} onClose={() => setActiveMenu(null)} />
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/book-demo"
              id="nav-book-demo"
              className="btn-primary text-sm"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-toggle"
            className="lg:hidden p-2 rounded-lg hover:bg-neige transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-border bg-white overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 space-y-1" aria-label="Mobile navigation">
              {megaMenus.map((menu) => (
                <div key={menu.label}>
                  <p className="label-tag px-3 py-2">{menu.label}</p>
                  {menu.groups.flatMap((g) => g.products).map((p) => (
                    <Link
                      key={p.href + p.name}
                      to={p.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-sm font-medium text-body hover:text-black hover:bg-neige rounded-xl transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              ))}

              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <Link to="/book-demo" onClick={() => setMobileOpen(false)} className="btn-primary justify-center">
                  Book a demo
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
