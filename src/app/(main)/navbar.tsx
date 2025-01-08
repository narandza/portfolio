import Image from "next/image";
import Link from "next/link";
import { NAVBAR_LINKS as links } from "@/constants/navbar-links";
import { ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 flex items-center justify-between">
      {/* TODO: Add dimensions to constants */}
      <Link href="#top">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={160}
          height={30}
          className="ml-4"
        />
      </Link>
      <div className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="text-xl">
            {link.title}
          </Link>
        ))}
      </div>
      <div className=" ">
        <Link
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
        >
          Contact
          <ArrowUpRight className="size-5 ml-2" />
        </Link>
      </div>
    </nav>
  );
};
