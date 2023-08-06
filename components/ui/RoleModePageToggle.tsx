import Link from 'next/link';
import { DropdownMenuItem } from './dropdown-menu';
import { usePathname } from 'next/navigation';
import { Icons } from '../icons';

const RoleModePageToggle = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith('/admin') ? (
        <Link href={'/'}>
          <DropdownMenuItem className="rounded-2xl cursor-pointer">
            <Icons.userSettings className="mr-2 h-4 w-4" />
            <span>Modo usuario</span>
          </DropdownMenuItem>
        </Link>
      ) : (
        <Link href={'/admin'}>
          <DropdownMenuItem className="rounded-2xl cursor-pointer">
            <Icons.admin className="mr-2 h-4 w-4" />
            <span>Modo administrador</span>
          </DropdownMenuItem>
        </Link>
      )}
    </>
  );
};

export default RoleModePageToggle;
