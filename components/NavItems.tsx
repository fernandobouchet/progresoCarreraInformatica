'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HomeIcon, AwardIcon, StarIcon, GraduationCapIcon } from 'lucide-react';

const AccordionItems = [
  {
    title: 'Informática',
    href: '/tecnicatura/informatica',
  },
  {
    title: 'Programación',
    href: '/tecnicatura/programacion',
  },
  {
    title: 'Redes y operaciones informáticas',
    href: '/tecnicatura/redes-y-operaciones',
  },
  {
    title: 'Inteligencia artificial',
    href: '/tecnicatura/inteligencia-artificial',
  },
  {
    title: 'Videojuegos',
    href: '/tecnicatura/videojuegos',
  },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <>
      <Link
        href={'/'}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          pathname === '/'
            ? 'bg-blue-100 hover:bg-muted'
            : 'hover:bg-transparent hover:bg-slate-200',
          'justify-start text-lg'
        )}
      >
        <HomeIcon className="w-4 h-4 mr-2" />
        Inicio
      </Link>
      <Link
        href={'/licenciatura'}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          pathname === '/licenciatura'
            ? 'bg-blue-100 hover:bg-muted'
            : 'hover:bg-transparent hover:bg-slate-200',
          'justify-start text-lg'
        )}
      >
        <GraduationCapIcon className="w-4 h-4 mr-2" />
        Licenciatura
      </Link>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              pathname === '*/tecnicatura/*'
                ? 'bg-blue-100 hover:bg-muted'
                : 'hover:bg-transparent hover:bg-slate-200 hover:no-underline',
              'flex justify-between text-lg'
            )}
          >
            <div className="flex items-center">
              <AwardIcon className="w-4 h-4 mr-2" />
              Tecnicatura
            </div>
          </AccordionTrigger>
          <AccordionContent className="pb-0">
            {AccordionItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  pathname === item.href
                    ? 'bg-blue-100 hover:bg-muted'
                    : 'hover:bg-transparent hover:bg-slate-200',
                  'justify-start text-lg w-full'
                )}
              >
                {item.title}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Link
        href={'/creditos'}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          pathname === '/creditos'
            ? 'bg-blue-100 hover:bg-muted'
            : 'hover:bg-transparent hover:bg-slate-200',
          'justify-start text-lg'
        )}
      >
        <StarIcon className="w-4 h-4 mr-2" />
        Créditos
      </Link>
    </>
  );
};
export { NavItems };
