import Link from "next/link";
import { NAVBAR_LINKS as links } from "@/constants/navbar-links";

export const NavbarLinks = () => {
  return (
    <>
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="text-lg">
          {link.title}
        </Link>
      ))}
    </>
  );
};
