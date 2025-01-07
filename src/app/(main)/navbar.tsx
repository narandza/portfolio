import Image from "next/image";
import Link from "next/link";
import { NAVBAR_LINKS as links } from "@/constants/navbar-links";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 mt-2">
      {/* TODO: Add dimensions to constants */}
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={160}
          height={30}
          className="ml-4"
        />
      </Link>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-x-5">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="text-2xl">
            {link.title}
          </Link>
        ))}
      </div>
      <div className=""></div>
    </nav>
  );
};
