import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center mt-2">
      {/* TODO: Add dimensions to constants */}
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={160}
          height={30}
          className="cursor-pointer mr-4"
        />
      </Link>
      <div className=""></div>
    </nav>
  );
};
