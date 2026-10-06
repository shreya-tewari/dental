// TopBar — slim contact bar, hidden on mobile

export function TopBar() {
  return (
    <div className="hidden md:block bg-black-soft border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end gap-8 h-9">
          <a
            href="tel:+18001112222"
            className="text-xs text-muted hover:text-neige transition-colors"
            aria-label="Sales phone number"
          >
            Sales: 1-800-111-2222
          </a>
          <a
            href="tel:+18001113333"
            className="text-xs text-muted hover:text-neige transition-colors"
            aria-label="Support phone number"
          >
            Support: 1-800-111-3333
          </a>
          <a
            href="tel:+18001114444"
            className="text-xs text-muted hover:text-neige transition-colors"
            aria-label="Billing phone number"
          >
            Billing: 1-800-111-4444
          </a>
        </div>
      </div>
    </div>
  );
}
