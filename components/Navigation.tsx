import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

interface Props {
  children: React.ReactNode;
}

const Navigation = ({ children }: Props) => {
  return (
    <div className="h-screen w-screen">
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};
export { Navigation };
