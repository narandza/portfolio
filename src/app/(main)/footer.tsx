import Link from "next/link";
import { MailIcon } from "lucide-react";

import { Logo } from "@/components/logo";
import { SocialMedia } from "@/components/social-media";
import { LOGO_HEIGHT, LOGO_WIDTH } from "@/constants/image-dimensions";
import { CONTACT_EMAIL } from "@/constants/info-list";

const currentYear = new Date().getFullYear();
const iconSize = 20;

export const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="flex flex-col items-center justify-center">
        <Link href="#top" className="pb-1">
          <Logo width={LOGO_WIDTH} height={LOGO_HEIGHT} />
        </Link>

        <div className="w-max flex items-center gap-2 mx-auto">
          <MailIcon className="size-4 text-main" />
          {CONTACT_EMAIL}
        </div>
      </div>

      <div className="sm:flex items-center justify-between mt-12 mx-[10%] border-t border-muted-foreground py-6">
        <p className="">
          &copy; {currentYear} Dimitrije Jovanovic. All rights reserved.
        </p>
        <div className="flex gap-10 items-center justify-center mt-4 sm:mt-0">
          <SocialMedia iconSize={iconSize} />
        </div>
      </div>
    </footer>
  );
};
