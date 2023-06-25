import { AvatarMenu } from './AvatarMenu';
import { MobileMenu } from './MobileMenu';

const Topbar = () => {
  return (
    <nav className="flex items-center py-2 px-3 h-12 m-2 lg:m-0 lg:h-14 rounded-full lg:rounded-none bg-slate-200 dark:bg-neutral-800">
      <MobileMenu />
      <div className="mx-auto lg:mx-0 lg:w-44">LOGO</div>
      <div className="lg:ml-auto">
        <AvatarMenu />
      </div>
    </nav>
  );
};
export { Topbar };
