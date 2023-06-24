import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

interface Props {
  children: React.ReactNode;
}

const Navigation = ({ children }: Props) => {
  return (
    <div className="h-screen w-screen bg-slate-100 dark:bg-neutral-900">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};
export { Navigation };
