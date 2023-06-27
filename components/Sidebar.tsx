import { NavItems } from './NavItems';

const Sidebar = () => {
  return (
    <nav className="hidden lg:flex flex-col w-60 h-[calc(100dvh-4rem)] px-3 bg-slate-200 dark:bg-neutral-800 pt-2">
      <NavItems />
    </nav>
  );
};
export { Sidebar };
