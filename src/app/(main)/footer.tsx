import Link from "next/link";
import Image from "next/image";
import { MailIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="flex flex-col items-center justify-center">
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

        <div className="w-max flex items-center gap-2 mx-auto">
          <MailIcon className="size-4 text-[#A31D1D]" />
          dimitrijejovanovic90210@gmail.com
        </div>
      </div>

      <div className="sm:flex items-center justify-between mt-12 mx-[10%] border-t border-muted-foreground py-6">
        {/* TODO: Make year dynamic */}
        <p className="">
          &copy; 2025 Dimitrije Jovanovic. All rights reserved.
        </p>
        <div className="flex gap-10 items-center justify-center mt-4 sm:mt-0">
          {/* TODO: Make separate component, navbar also */}
          <Link
            href="https://www.linkedin.com/in/jovanovic-dimitrije"
            target="_blank"
          >
            {/* TODO: Add constant for magic numbers */}
            <FaLinkedin size={20} />
          </Link>
          <Link href="#" target="_blank">
            <FaGithub size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
