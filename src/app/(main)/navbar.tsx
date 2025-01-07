import Image from "next/image";

export const Navbar = () => {
  return (
    <nav>
      <div className="">
        <Image src="/logo.svg" alt="Logo" width={80} height={15} />
      </div>
    </nav>
  );
};
