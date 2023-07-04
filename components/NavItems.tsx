'use client';
import { LinkWithIcon } from './ui/LinkWithIcon';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ThemeToggle from './ui/ThemeToggle';
import { Icons } from './Icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const TopItems = [
  {
    title: 'Inicio',
    href: '/',
    icon: <Icons.home className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Licenciatura',
    href: '/licenciatura',
    icon: <Icons.graduation className="h-4 w-4 mr-2" />,
  },
];

const AccordionItems = [
  {
    title: 'Informática',
    href: '/tecnicatura/informatica',
    icon: <Icons.computer className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Programación',
    href: '/tecnicatura/programacion',
    icon: <Icons.terminal className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Redes',
    href: '/tecnicatura/redes-y-operaciones',
    icon: <Icons.server className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Inteligencia artificial',
    href: '/tecnicatura/inteligencia-artificial',
    icon: <Icons.cpu className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Videojuegos',
    href: '/tecnicatura/videojuegos',
    icon: <Icons.gamepad className="h-4 w-4 mr-2" />,
  },
];

const BottomItems = [
  {
    title: 'Créditos',
    href: '/creditos',
    icon: <Icons.star className="h-4 w-4 mr-2" />,
  },
];

interface Props {
  onOpenChange?: (open: boolean) => void;
}

const NavItems = ({ onOpenChange }: Props) => {
  return (
    <>
      {TopItems.map((item) => (
        <LinkWithIcon key={item.href} item={item} onOpenChange={onOpenChange} />
      ))}
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'hover:bg-slate-300 dark:hover:bg-neutral-700 hover:no-underline flex justify-between text-base rounded-full py-6'
            )}
          >
            <div className="flex items-center">
              <Icons.award className="w-4 h-4 mr-2" />
              Tecnicaturas
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {AccordionItems.map((item) => (
              <LinkWithIcon
                key={item.href}
                item={item}
                onOpenChange={onOpenChange}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {BottomItems.map((item) => (
        <LinkWithIcon key={item.href} item={item} onOpenChange={onOpenChange} />
      ))}
      <div className="mt-auto ml-auto mb-3">
        <ThemeToggle />
      </div>
    </>
  );
};
export { NavItems };
