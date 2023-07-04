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
          ? 'bg-sky-200 dark:bg-sky-800 hover:bg-muted dark:hover:bg-muted'
          : 'hover:bg-slate-300 dark:hover:bg-neutral-700',
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
