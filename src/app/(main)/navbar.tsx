import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRightIcon, MailIcon, MenuIcon } from "lucide-react";

import { NavbarLinks } from "./navbar-links";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SocialMedia } from "@/components/social-media";
import { LOGO_HEIGHT, LOGO_WIDTH } from "@/constants/image-dimensions";
import { CONTACT_EMAIL } from "@/constants/info-list";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <nav
      className={cn(
        "w-full fixed  px-5 lg:px-8 xl:px-[8%] py-4 z-50 flex items-center justify-between bg-background ",
        isScroll && " bg-opacity-50 backdrop-blur-lg shadow-sm"
      )}
    >
      <Link href="#top" className="pb-1">
        <Logo width={LOGO_WIDTH} height={LOGO_HEIGHT} />
      </Link>
      <div
        className={cn(
          "hidden md:flex items-center gap-6 lg:gap-8  px-12 py-3",
          isScroll && "bg-opacity-50 bg-background "
        )}
      >
        <NavbarLinks />
      </div>

      <div className="flex items-center justify-center">
        <ModeToggle />
        <Button
          variant="outline"
          className="hidden lg:flex items-center gap-1 px-10 py-2.5 border rounded-full ml-4"
          asChild
        >
          <Link href="#contact">
            Connect
            <ArrowUpRightIcon className="size-5 " />
          </Link>
        </Button>
        {/* TODO: Check if the sheet closes on link click */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full block md:hidden ml-3"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle />
            <div className=" flex flex-col justify-between h-full">
              <div className=" md:hidden flex flex-col items-center gap-6 pt-10">
                <NavbarLinks />
              </div>
              <div className="flex items-center justify-center flex-col gap-4">
                <div className="text-lg">
                  <MailIcon className="size-4 text-main" />
                  {CONTACT_EMAIL}
                </div>
                <div className="flex gap-4">
                  <SocialMedia iconSize={25} />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
