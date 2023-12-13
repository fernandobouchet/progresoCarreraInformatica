import { Navigation } from '@/components/Navigation';

export default function adminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Navigation>{children}</Navigation>;
}
