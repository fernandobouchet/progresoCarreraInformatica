import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

interface Props {
  children: React.ReactNode;
}

const Navigation = ({ children }: Props) => {
  return (
    <>
      <Topbar />
      <div className="flex h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-4.5rem)]">
        <Sidebar />
        <div className="bg-background-secondary w-full p-0 lg:pb-4 lg:pr-4">
          {children}
        </div>
      </div>
    </>
  );
};
export { Navigation };
