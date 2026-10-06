import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  id?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className,
  type = 'button',
  disabled,
  id,
  size = 'md',
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    sizeMap[size],
    {
      'bg-black text-neige hover:bg-black-soft': variant === 'primary',
      'border border-black text-black hover:bg-neige': variant === 'secondary',
      'text-body hover:bg-neige': variant === 'ghost',
    },
    className
  );

  if (href) {
    return (
      <Link to={href} id={id} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} id={id} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  );
}
