import { NavItems } from './NavItems';

const Sidebar = () => {
  return (
    <nav className="hidden lg:flex flex-col w-72 h-[calc(100dvh-3.5rem)] px-3 bg-slate-200 dark:bg-neutral-800">
      <NavItems />
    </nav>
  );
};
export { Sidebar };
