import { cn } from '../../lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: 'white' | 'neige' | 'neige-dark' | 'black';
  id?: string;
}

export function Section({ children, className, bg = 'white', id }: SectionProps) {
  const bgMap = {
    white: 'bg-white',
    neige: 'bg-neige',
    'neige-dark': 'bg-neige-dark',
    black: 'bg-black',
  };

  return (
    <section id={id} className={cn('section-pad', bgMap[bg], className)}>
      {children}
    </section>
  );
}
