import Image from "next/image";
import { motion } from "motion/react";

import {
  PROFILE_IMAGE_HEIGHT,
  PROFILE_IMAGE_WIDTH,
} from "@/constants/image-dimensions";
import { InfoList, toolsList } from "@/constants/info-list";
import {
  SECONDARY_HEADING_DELAY_TIME,
  SECONDARY_HEADING_DURATION_TIME,
} from "@/constants/animations";

export const About = () => {
  return (
    <motion.div
      id="about"
      className=" w-full px-[12%] py-10 scroll-mt-20 mt-[220px] flex flex-col items-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: SECONDARY_HEADING_DURATION_TIME,
          delay: SECONDARY_HEADING_DELAY_TIME,
        }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        About me
      </motion.h2>

      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20 justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/placeholder-image.png"
            alt="Profile Image"
            width={PROFILE_IMAGE_WIDTH}
            height={PROFILE_IMAGE_HEIGHT}
            className="rounded-3xl"
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {/* TODO: Add real content */}
          <p className="mb-10 max-w-4xl ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            reprehenderit sint a voluptate ab itaque, ratione aperiam.
            Doloremque vero repudiandae, totam, accusamus velit, quod quia quasi
            veritatis quidem consequuntur atque!
          </p>

          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {InfoList.map(({ icon: Icon, title, description }, index) => (
              <motion.li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer flex flex-col items-center justify-center hover:bg-muted hover:-translate-y-1 duration-500   hover:shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="size-8 mt-3 text-gray-700 dark:text-white" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm  dark:text-foreground">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            className="my-6 text-gray-700 text-lg dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
          >
            Tools I use
          </motion.h4>
          <motion.ul
            className=" flex items-center gap-3 sm:gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            {/* TODO: replace with images? */}
            {toolsList.map((Icon, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className=" flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 "
                key={index}
              >
                <Icon className="size-10" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
