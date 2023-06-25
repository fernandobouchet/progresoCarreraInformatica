import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

interface Props {
  children: React.ReactNode;
}

const Navigation = ({ children }: Props) => {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-3.5rem)] bg-slate-200 dark:bg-neutral-800">
          <div className="rounded-none lg:rounded-lg w-full lg:w-[calc(100%-1rem)] h-full lg:h-[calc(100%-1rem)] p-4 bg-slate-100 dark:bg-neutral-900">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export { Navigation };
