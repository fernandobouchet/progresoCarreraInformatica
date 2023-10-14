import Image from "next/image";
import { Marcellus } from "next/font/google";
import { AvatarMenu } from "@/components/AvatarMenu";
import { MobileMenu } from "@/components/MobileMenu";
import logo from "@/public/logo-unahur.webp";

const marcellus = Marcellus({ subsets: ["latin"], weight: "400" });

const Topbar = () => {
  return (
    <nav className="bg-background-secondary flex justify-between items-center py-2 px-3 h-16 lg:h-[4.5rem] lg:rounded-none">
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
