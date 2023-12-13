import { Navigation } from '@/components/Navigation';

export default function userLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Navigation>{children}</Navigation>;
}
