import Link from "next/link";
import { NAVBAR_LINKS as links } from "@/constants/navbar-links";

interface NavbarLinksProps {
  setIsOpen?: (open: boolean) => void;
}

export const NavbarLinks = ({ setIsOpen }: NavbarLinksProps) => {
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-lg"
          onClick={() => setIsOpen && setIsOpen(false)}
        >
          {link.title}
        </Link>
      ))}
    </>
  );
};
