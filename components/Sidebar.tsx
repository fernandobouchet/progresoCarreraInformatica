import { NavItems } from '@/components/NavItems';

const Sidebar = () => {
  return (
    <nav className="hidden lg:flex flex-col w-80 h-full px-3 pt-2">
      <NavItems />
    </nav>
  );
};
export { Sidebar };
