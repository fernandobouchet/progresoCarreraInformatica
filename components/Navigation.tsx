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
        <div className="flex-grow h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-4rem)] bg-material-light-surface dark:bg-material-dark-surface">
          <div className="rounded-none lg:rounded-2xl w-full lg:w-[calc(100%-1rem)] h-full lg:h-[calc(100%-1rem)] p-4 bg-material-light-background dark:bg-material-dark-background">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export { Navigation };
