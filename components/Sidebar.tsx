import { NavItems } from './NavItems';

const Sidebar = () => {
  return (
    <nav className="hidden lg:flex flex-col w-64 h-[calc(100dvh-4rem)] px-3 bg-material-light-surface dark:bg-material-dark-surface pt-2">
      <NavItems />
    </nav>
  );
};
export { Sidebar };
