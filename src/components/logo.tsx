import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

export const Logo = ({ width, height }: LogoProps) => {
  return (
    <>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={width}
        height={height}
        className="ml-4 dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="Logo"
        width={width}
        height={height}
        className="ml-4 hidden dark:block"
      />
    </>
  );
};
