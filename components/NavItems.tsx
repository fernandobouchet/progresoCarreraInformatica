'use client';
import { LinkWithIcon } from '@/components/LinkWithIcon';
import ThemeToggle from '@/components/ThemeToggle';
import { Icons } from '@/components/icons';
import { usePathname } from 'next/navigation';

const RootItems = [
  {
    title: 'Inicio',
    href: '/',
    icon: <Icons.home className="icon-button" />,
  },
  {
    title: 'Licenciatura',
    href: '/licenciatura',
    icon: <Icons.graduation className="icon-button" />,
  },
  {
    title: 'Informática',
    href: '/tecnicatura/informatica',
    icon: <Icons.computer className="icon-button" />,
  },
  {
    title: 'Programación',
    href: '/tecnicatura/programacion',
    icon: <Icons.terminal className="icon-button" />,
  },
  {
    title: 'Redes',
    href: '/tecnicatura/redes-y-operaciones',
    icon: <Icons.server className="icon-button" />,
  },
  {
    title: 'Inteligencia artificial',
    href: '/tecnicatura/inteligencia-artificial',
    icon: <Icons.cpu className="icon-button" />,
  },
  {
    title: 'Videojuegos',
    href: '/tecnicatura/videojuegos',
    icon: <Icons.gamepad className="icon-button" />,
  },
  {
    title: 'Créditos',
    href: '/creditos',
    icon: <Icons.star className="icon-button" />,
  },
];

const AdminItems = [
  {
    title: 'Inicio',
    href: '/admin',
    icon: <Icons.home className="icon-button" />,
  },
  {
    title: 'Usuarios',
    href: '/admin/usuarios',
    icon: <Icons.users className="icon-button" />,
  },
  {
    title: 'Carreras',
    href: '/admin/carreras',
    icon: <Icons.graduation className="icon-button" />,
  },
  {
    title: 'Asignaturas',
    href: '/admin/asignaturas',
    icon: <Icons.books className="icon-button" />,
  },
  {
    title: 'Periodos',
    href: '/admin/periodos',
    icon: <Icons.periods className="icon-button" />,
  },
  {
    title: 'Créditos',
    href: '/admin/creditos',
    icon: <Icons.star className="icon-button" />,
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
