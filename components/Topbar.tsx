import Image from 'next/image';
import { AvatarMenu } from './AvatarMenu';
import { MobileMenu } from './MobileMenu';
import logo from '@/public/logo-unahur.webp';
import { Marcellus } from 'next/font/google';

const marcellus = Marcellus({ subsets: ['latin'], weight: '400' });

const Topbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-3 h-12 m-2 lg:m-0 lg:h-16 rounded-full lg:rounded-none bg-material-light-surface dark:bg-material-dark-surface">
      <MobileMenu />
      <div className="hidden lg:flex lg:justify-center lg:items-center lg:mx-0 lg:w-56">
        <Image src={logo} alt="logo" className="w-8 lg:w-12 h-auto" />
        <div className={`flex flex-col ${marcellus.className} pl-3`}>
          <p className="font-bold text-3xl">UNAHUR</p>
          <p className="font-bold text-[0.4rem]">
            UNIVERSIDAD NACIONAL DE HURLINGHAM
          </p>
        </div>
      </div>
      <AvatarMenu />
    </nav>
  );
};
export { Topbar };
