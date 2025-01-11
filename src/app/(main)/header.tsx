import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="pt-[220px]">
      <div className="mx-auto">
        <Image
          src="/placeholder-image.png"
          alt="Profile Image"
          width={32}
          height={32}
          className="rounded-full"
        />

        <h3 className="text-xl md:text-2xl mb-3">
          Hi! I&apos;m Dimitrije Jovanovic
        </h3>

        <h1 className="text-3xl sm:tet-6xl lg:text-[66px] ">
          frontend web developer based in Belgrade.
        </h1>
        <p className="max-w-2xl mx-auto">
          I&apos;m a frontend developer from Belgrade, Serbia with 3+ years of
          experience
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Link
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-foreground text-background flex items-center gap-2"
        >
          Contact me <ArrowRightIcon />
        </Link>
        {/* TODO: Add resume */}
        <Link
          href=""
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume <DownloadIcon />
        </Link>
      </div>
    </header>
  );
};
