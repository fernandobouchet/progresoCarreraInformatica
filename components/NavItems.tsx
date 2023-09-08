'use client';
import { LinkWithIcon } from '@/components/LinkWithIcon';
import ThemeToggle from '@/components/ThemeToggle';
import { Icons } from '@/components/icons';
import { useUserCareer } from '@/lib/services/user/career';
import { usePathname } from 'next/navigation';
import LoadingBar from './ui/LoadingBar';

const RootItems = [
  {
    id: 0,
    title: 'Inicio',
    href: '/',
    icon: <Icons.home className="icon-button" />,
  },
  {
    id: 1,
    title: 'Licenciatura',
    href: '/licenciatura',
    icon: <Icons.graduation className="icon-button" />,
  },
  {
    id: 2,
    title: 'Informática',
    href: '/tecnicatura/informatica',
    icon: <Icons.computer className="icon-button" />,
  },
  {
    id: 3,
    title: 'Programación',
    href: '/tecnicatura/programacion',
    icon: <Icons.terminal className="icon-button" />,
  },
  {
    id: 4,
    title: 'Redes',
    href: '/tecnicatura/redes-y-operaciones',
    icon: <Icons.server className="icon-button" />,
  },
  {
    id: 5,
    title: 'Inteligencia artificial',
    href: '/tecnicatura/inteligencia-artificial',
    icon: <Icons.cpu className="icon-button" />,
  },
  {
    id: 6,
    title: 'Videojuegos',
    href: '/tecnicatura/videojuegos',
    icon: <Icons.gamepad className="icon-button" />,
  },
  {
    id: 7,
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
  const { career, isLoading, isError } = useUserCareer();

  if (isLoading) return <LoadingBar />;

  if (isError || career === undefined) return <h2>Error</h2>;

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
          {RootItems.filter((item) =>
            career.userCareers.some(
              (s: any) =>
                s.career.id === item.id || item.id === 0 || item.id === 7
            )
          ).map((item) => (
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
