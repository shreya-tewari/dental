import { Button } from './Button';
import { cn } from '../../lib/utils';
import type { PricingTier } from '../../content/pricing';

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border p-8 transition-all duration-300',
        tier.highlighted
          ? 'bg-black border-black text-neige shadow-2xl scale-[1.02]'
          : 'bg-white border-border hover:border-black/30 hover:shadow-lg'
      )}
    >
      {tier.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-neige text-black text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
            Most popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={cn(
            'text-lg font-bold uppercase tracking-wider mb-1',
            tier.highlighted ? 'text-neige' : 'text-black'
          )}
        >
          {tier.name}
        </h3>
        <p className={cn('text-sm', tier.highlighted ? 'text-neige/70' : 'text-muted')}>
          {tier.description}
        </p>
      </div>

      <div className="mb-8">
        <span
          className={cn(
            'text-5xl font-black tracking-tighter',
            tier.highlighted ? 'text-neige' : 'text-black'
          )}
        >
          {tier.price}
        </span>
        <span className={cn('text-sm ml-1', tier.highlighted ? 'text-neige/60' : 'text-muted')}>
          {tier.period}
        </span>
      </div>

      <Button
        id={`pricing-cta-${tier.id}`}
        variant={tier.highlighted ? 'secondary' : 'primary'}
        href={tier.cta.href}
        className={cn(
          'w-full justify-center mb-8',
          tier.highlighted && 'border-neige text-neige hover:bg-neige/10'
        )}
      >
        {tier.cta.label}
      </Button>
    </div>
  );
}
