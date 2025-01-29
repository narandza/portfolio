import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { serviceData } from "@/constants/info-list";
import {
  PARENT_DIV_DURATION_TIME,
  PRIMARY_HEADING_DELAY_TIME,
  PRIMARY_HEADING_DURATION_TIME,
  SECONDARY_HEADING_DELAY_TIME,
  SECONDARY_HEADING_DURATION_TIME,
  Y_AXIS_INITIAL_POSITION,
} from "@/constants/animations";

export const Services = () => {
  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: PARENT_DIV_DURATION_TIME }}
    >
      <motion.h4
        className="text-center mb-2 text-lg"
        initial={{ opacity: 0, y: Y_AXIS_INITIAL_POSITION }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: SECONDARY_HEADING_DURATION_TIME,
          delay: SECONDARY_HEADING_DELAY_TIME,
        }}
      >
        What I offer
      </motion.h4>
      <motion.h2
        className="text-center text-5xl"
        initial={{ opacity: 0, y: Y_AXIS_INITIAL_POSITION }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: PRIMARY_HEADING_DURATION_TIME,
          delay: PRIMARY_HEADING_DELAY_TIME,
        }}
      >
        My Services
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        I am a frontend developer from Belgrade, Serbia with 3+ years of
        experience
      </motion.p>

      <motion.div
        className="grid grid-cols-auto lg:grid-cols-4 gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {serviceData.map(({ icon: Icon, title, description, link }, index) => (
          <motion.div
            className="border border-muted rounded-lg px-8 py-12 flex flex-col items-center hover:shadow-md cursor-pointer hover:bg-muted hover:-translate-y-1 duration-500 "
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="size-10 bg-main text-white rounded-sm p-2" />
            <h3 className="text-xl my-4">{title}</h3>
            <p className="text-sm leading-5">{description}</p>
            <Link
              href={link}
              className="flex items-center gap-1 text-muted-foreground text-sm mt-5"
            >
              Read more <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
