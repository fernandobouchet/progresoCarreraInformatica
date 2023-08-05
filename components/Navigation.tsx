import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

interface Props {
  children: React.ReactNode;
}

const Navigation = ({ children }: Props) => {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full h-[calc(100dvh-4rem)]">{children}</div>
      </div>
    </>
  );
};
export { Navigation };
