import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';
import { XrayWithAIOverlay, VisionAIMockup, DashboardMockup, InsuranceVerificationMockup, VoiceWaveform } from './Illustrations';
import { cn } from '../../lib/utils';

interface FeatureRowProps {
  label: string;
  title: string;
  description: string;
  bullets: string[];
  cta: { label: string; href: string };
  learnMore: string;
  illustrationId: string;
  reverse?: boolean;
  bg?: 'white' | 'neige';
}

const illustrations: Record<string, React.FC> = {
  'vision-ai': VisionAIMockup,
  'imaging': DashboardMockup,
  'insurance-verification': InsuranceVerificationMockup,
  'voice': VoiceWaveform,
};

export function FeatureRow({
  label,
  title,
  description,
  bullets,
  cta,
  learnMore,
  illustrationId,
  reverse = false,
  bg = 'white',
}: FeatureRowProps) {
  const IllustrationComponent = illustrations[illustrationId] || XrayWithAIOverlay;

  return (
    <div className={cn(bg === 'neige' ? 'bg-neige' : 'bg-white')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center',
            reverse && 'lg:grid-flow-dense'
          )}
        >
          {/* Text */}
          <AnimatedSection
            direction={reverse ? 'right' : 'left'}
            className={cn(reverse && 'lg:col-start-2')}
          >
            <span className="label-tag mb-4 block">{label}</span>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-black mb-4 leading-tight">
              {title}
            </h3>
            <p className="text-body mb-6 leading-relaxed">{description}</p>

            <ul className="space-y-3 mb-8">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-neige-dark border border-border flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-black" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-body">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center flex-wrap gap-4">
              <Link
                to={cta.href}
                className="btn-primary"
              >
                {cta.label}
              </Link>
              <Link
                to={learnMore}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-black hover:gap-3 transition-all duration-200"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Illustration */}
          <AnimatedSection
            direction={reverse ? 'left' : 'right'}
            delay={0.1}
            className={cn(
              'rounded-2xl overflow-hidden soft-shadow aspect-[4/3]',
              reverse && 'lg:col-start-1 lg:row-start-1'
            )}
          >
            <IllustrationComponent />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
