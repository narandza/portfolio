import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="text-center">
        {/* TODO: Reformat imports on all pages */}
        {/* TODO: Make logo component, replace in navbar also */}
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
      </div>
    </footer>
  );
};
