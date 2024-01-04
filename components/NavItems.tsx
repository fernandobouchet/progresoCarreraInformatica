'use client';
import { LinkWithIcon } from '@/components/LinkWithIcon';
import ThemeToggle from '@/components/ThemeToggle';
import { Icons } from '@/components/icons';
import { api } from '@/lib/trcp';
import { usePathname } from 'next/navigation';
import LoadingBar from './ui/LoadingBar';

const RootItems = [
  {
    title: 'Inicio',
    href: '/',
    icon: <Icons.home className="icon-button" />,
    optionId: null,
  },
  {
    title: 'Licenciatura',
    href: '/licenciatura',
    icon: <Icons.graduation className="icon-button" />,
    optionId: 1,
  },
  {
    title: 'Informática',
    href: '/tecnicatura/informatica',
    icon: <Icons.computer className="icon-button" />,
    optionId: 2,
  },
  {
    title: 'Programación',
    href: '/tecnicatura/programacion',
    icon: <Icons.terminal className="icon-button" />,
    optionId: 3,
  },
  {
    title: 'Redes',
    href: '/tecnicatura/redes-y-operaciones',
    icon: <Icons.server className="icon-button" />,
    optionId: 4,
  },
  {
    title: 'Inteligencia artificial',
    href: '/tecnicatura/inteligencia-artificial',
    icon: <Icons.cpu className="icon-button" />,
    optionId: 5,
  },
  {
    title: 'Videojuegos',
    href: '/tecnicatura/videojuegos',
    icon: <Icons.gamepad className="icon-button" />,
    optionId: 6,
  },
  {
    title: 'Créditos',
    href: '/creditos',
    icon: <Icons.star className="icon-button" />,
    optionId: 10,
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

  const { data: selectedCareers } = api.user.getUserCareers.useQuery();

  if (!selectedCareers || selectedCareers === undefined) {
    return <LoadingBar />;
  }

  const selectedRootItems =
    selectedCareers.length >= 1
      ? RootItems.filter(
          (item) =>
            item.optionId === null ||
            selectedCareers?.some((career) => career.careerId === item.optionId)
        )
      : RootItems;

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
          {selectedRootItems.map((item) => (
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
