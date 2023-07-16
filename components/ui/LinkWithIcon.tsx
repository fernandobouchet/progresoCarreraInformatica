'use client';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Props {
  item: {
    href: string;
    title: string;
    icon: JSX.Element;
  };
  onOpenChange?: (open: boolean) => void;
}

const LinkWithIcon = ({ item, onOpenChange }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.href}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        pathname === item.href
          ? 'bg-material-light-secondary text-material-light-on-secondary dark:bg-material-dark-secondary dark:text-material-dark-on-secondary hover:bg-muted  hover:text-muted dark:hover:bg-muted dark:hover:text-muted'
          : 'hover:bg-material-light-surface-hover dark:hover:bg-material-dark-surface-hover',
        'justify-start text-base w-full rounded-full py-6'
      )}
      onClick={() => onOpenChange?.(false)}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export { LinkWithIcon };
