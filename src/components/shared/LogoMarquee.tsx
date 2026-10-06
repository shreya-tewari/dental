import { trustedByLogos } from '../../content/homepage';

function PlaceholderLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-10 min-w-[160px] px-8">
      <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function LogoMarquee() {
  const doubled = [...trustedByLogos, ...trustedByLogos];

  return (
    <div
      className="marquee-container overflow-hidden py-2 select-none"
      aria-label="Trusted by dental groups"
      role="region"
    >
      <div className="flex animate-marquee gap-0">
        {doubled.map((name, i) => (
          <div
            key={i}
            className="flex items-center border-r border-border last:border-r-0"
          >
            <PlaceholderLogo name={name} />
          </div>
        ))}
      </div>
    </div>
  );
}
