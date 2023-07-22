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
          <DropdownMenuItem className="hover:bg-material-light-surface-hover dark:hover:bg-material-dark-surface-hover rounded-2xl cursor-pointer active:bg-material-light-secondary dark:active:bg-material-dark-secondary focus:bg-material-light-surface-hover dark:focus:bg-material-dark-surface-hover">
            <Icons.userSettings className="mr-2 h-4 w-4" />
            <span>Modo usuario</span>
          </DropdownMenuItem>
        </Link>
      ) : (
        <Link href={'/admin'}>
          <DropdownMenuItem className="hover:bg-material-light-surface-hover dark:hover:bg-material-dark-surface-hover rounded-2xl cursor-pointer active:bg-material-light-secondary dark:active:bg-material-dark-secondary focus:bg-material-light-surface-hover dark:focus:bg-material-dark-surface-hover">
            <Icons.admin className="mr-2 h-4 w-4" />
            <span>Modo administrador</span>
          </DropdownMenuItem>
        </Link>
      )}
    </>
  );
};

export default RoleModePageToggle;
