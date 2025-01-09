import Image from "next/image";
import Link from "next/link";
import { NAVBAR_LINKS as links } from "@/constants/navbar-links";
import { ArrowUpRightIcon, MenuIcon } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { NavbarLinks } from "./navbar-links";

export const Navbar = () => {
  return (
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 flex items-center justify-between">
      {/* TODO: Add dimensions to constants */}
      <Link href="#top" className="pb-1">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={160}
          height={30}
          className="ml-4 dark:hidden"
        />
        <Image
          src="/logo-dark.svg"
          alt="Logo"
          width={160}
          height={30}
          className="ml-4 hidden dark:block"
        />
      </Link>
      <NavbarLinks links={links} />
      <div className="flex items-center justify-center">
        <ModeToggle />
        <Button
          variant="ghost"
          className="hidden lg:flex items-center gap-1 px-10 py-2.5 border rounded-full ml-4"
          asChild
        >
          <Link href="#contact">
            Connect
            <ArrowUpRightIcon className="size-5 " />
          </Link>
        </Button>
        <Button variant="ghost" className="rounded-full block md:hidden ml-3">
          <MenuIcon className="" />
        </Button>
      </div>
    </nav>
  );
};
