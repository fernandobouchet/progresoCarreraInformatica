'use client';
import { LinkWithIcon } from './ui/LinkWithIcon';
import ThemeToggle from './ui/ThemeToggle';
import { Icons } from './icons';
import { usePathname } from 'next/navigation';

const RootItems = [
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
  {
    title: 'Créditos',
    href: '/creditos',
    icon: <Icons.star className="h-4 w-4 mr-2" />,
  },
];

const AdminItems = [
  {
    title: 'Inicio',
    href: '/admin',
    icon: <Icons.home className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Usuarios',
    href: '/admin/usuarios',
    icon: <Icons.users className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Carreras',
    href: '/admin/carreras',
    icon: <Icons.graduation className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Asignaturas',
    href: '/admin/asignaturas',
    icon: <Icons.books className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Periodos',
    href: '/admin/periodos',
    icon: <Icons.periods className="h-4 w-4 mr-2" />,
  },
  {
    title: 'Créditos',
    href: '/admin/creditos',
    icon: <Icons.star className="h-4 w-4 mr-2" />,
  },
];

interface Props {
  onOpenChange?: (open: boolean) => void;
}

const NavItems = ({ onOpenChange }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith('/admin') ? (
        <>
          {AdminItems.map((item) => (
            <LinkWithIcon
              key={item.href}
              item={item}
              onOpenChange={onOpenChange}
            />
          ))}
        </>
      ) : (
        <>
          {RootItems.map((item) => (
            <LinkWithIcon
              key={item.href}
              item={item}
              onOpenChange={onOpenChange}
            />
          ))}
        </>
      )}
      <div className="mt-auto ml-auto mb-3">
        <ThemeToggle />
      </div>
    </>
  );
};
export { NavItems };
