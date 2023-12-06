import { AvatarMenu } from '@/components/AvatarMenu';
import { MobileMenu } from '@/components/MobileMenu';
import UnahurLogo from '@/components/ui/unahurLogo';

const Topbar = () => {
  return (
    <nav className="bg-background-secondary flex justify-between items-center py-2 px-3 h-16 lg:h-[4.5rem] lg:rounded-none">
      <MobileMenu />
      <div className="hidden lg:flex">
        <UnahurLogo />
      </div>
      <AvatarMenu />
    </nav>
  );
};
export { Topbar };
