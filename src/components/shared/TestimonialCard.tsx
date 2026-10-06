import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  practice: string;
  className?: string;
}

function parseQuote(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-black">{part}</strong> : part
  );
}

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');
  return (
    <div className="w-11 h-11 rounded-full bg-neige-dark border border-border flex items-center justify-center flex-shrink-0">
      <span className="text-xs font-bold text-muted uppercase">{initials}</span>
    </div>
  );
}

export function TestimonialCard({ quote, name, role, practice, className }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'card flex flex-col gap-4 h-full',
        className
      )}
    >
      {/* Quote mark */}
      <div className="text-3xl leading-none text-border font-serif select-none" aria-hidden="true">
        &ldquo;
      </div>

      <p className="text-body text-sm leading-relaxed flex-1">
        {parseQuote(quote)}
      </p>

      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <AvatarPlaceholder name={name} />
        <div>
          <div className="text-sm font-semibold text-black">{name}</div>
          <div className="text-xs text-muted">
            {role} · {practice}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
