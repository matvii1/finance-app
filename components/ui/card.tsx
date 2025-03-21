import { cn } from '@/lib/utils';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className,
}: CardProps): React.JSX.Element {
  return (
    <div className={cn('rounded-lg bg-white p-4 shadow-sm', className)}>
      {children}
    </div>
  );
}
