import { NavbarLink } from "@/constants/navbar-links";
import Link from "next/link";

interface NavbarLinksProps {
  links: NavbarLink[];
}

export const NavbarLinks = ({ links }: NavbarLinksProps) => {
  return (
    <div className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  bg-opacity-50 bg-background">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="text-lg">
          {link.title}
        </Link>
      ))}
    </div>
  );
};
