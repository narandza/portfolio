import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import {
  HEADER_AVATAR_IMAGE_HEIGHT,
  HEADER_AVATAR_IMAGE_WIDTH,
} from "@/constants/image-dimensions";
import { Y_AXIS_INITIAL_POSITION } from "@/constants/animations";

export const Header = () => {
  return (
    <header className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 pt-[220px]">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src="/placeholder-image.png"
          alt="Profile Image"
          width={HEADER_AVATAR_IMAGE_WIDTH}
          height={HEADER_AVATAR_IMAGE_HEIGHT}
          className="rounded-full "
        />
      </motion.div>
      <motion.h3
        initial={{ y: Y_AXIS_INITIAL_POSITION, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl md:text-2xl mb-3"
      >
        Hi! I&apos;m Dimitrije Jovanovic
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl sm:text-6xl lg:text-[66px] "
      >
        frontend web developer based in Belgrade.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto"
      >
        I&apos;m a frontend developer from Belgrade, Serbia with 3+ years of
        experience
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className=""
        >
          <Link
            href="#contact"
            className="px-10 py-3 border rounded-full border-white bg-foreground text-background flex items-center gap-2"
          >
            Contact me <ArrowRightIcon />
          </Link>
        </motion.div>

        {/* TODO: Add resume */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className=""
        >
          <Link
            href=""
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            My Resume <DownloadIcon />
          </Link>
        </motion.div>
      </div>
    </header>
  );
};
