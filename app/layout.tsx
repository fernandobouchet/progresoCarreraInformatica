import './globals.css';
import { Open_Sans } from 'next/font/google';
import Provider from '@/context/AuthContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navigation } from '@/components/Navigation';
import { Toaster } from '@/components/ui/toaster';

const opensans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={opensans.className}>
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation>{children}</Navigation>
            <Toaster />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
