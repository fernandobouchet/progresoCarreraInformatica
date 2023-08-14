import { Sidebar } from '@/components/Sidebar';
import { Topbar } from '@/components/Topbar';

interface Props {
  children: React.ReactNode;
}

const Navigation = ({ children }: Props) => {
  return (
    <>
      <Topbar />
      <div className="flex h-[calc(100dvh-3rem)] lg:h-[calc(100dvh-4rem)]">
        <Sidebar />
        {children}
      </div>
    </>
  );
};
export { Navigation };
