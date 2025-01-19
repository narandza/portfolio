import Link from "next/link";
import { MailIcon } from "lucide-react";

import { Logo } from "@/components/logo";
import { SocialMedia } from "@/components/social-media";

export const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="flex flex-col items-center justify-center">
        {/* TODO: Reformat imports on all pages */}
        {/* TODO: Make logo component, replace in navbar also */}
        <Link href="#top" className="pb-1">
          <Logo width={160} height={30} />
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
          <SocialMedia iconSize={20} />
        </div>
      </div>
    </footer>
  );
};
