import { NavItems } from './NavItems';

const Sidebar = () => {
  return (
    <nav className="hidden lg:flex flex-col w-72 h-[calc(100dvh-3.5rem)] bg-slate-100 px-3">
      <NavItems />
    </nav>
  );
};
export { Sidebar };
