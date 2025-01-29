import { motion } from "motion/react";
import { ArrowRight, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { workData } from "@/constants/info-list";
import {
  PARENT_DIV_DURATION_TIME,
  PRIMARY_HEADING_DELAY_TIME,
  SECONDARY_HEADING_DELAY_TIME,
  SECONDARY_HEADING_DURATION_TIME,
  Y_AXIS_INITIAL_POSITION,
} from "@/constants/animations";

export const Work = () => {
  return (
    <motion.div
      id="work"
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
        My portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl"
        initial={{ opacity: 0, y: Y_AXIS_INITIAL_POSITION }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: PRIMARY_HEADING_DELAY_TIME }}
      >
        My latest work
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development
      </motion.p>

      <motion.div
        className="grid grid-cols-auto lg:grid-cols-4 my-10 gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {workData.map(({ title, description, bgImage }, index) => (
          <motion.div
            className="aspect-square bg-no-repeat bg-cover rounded-lg relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${bgImage})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* TODO: Make height the same */}
            <div className="bg-background w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between  duration-500 group-hover:bottom-7">
              <div className="">
                <h2 className="font-semibold ">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              <div className="border rounded-full border-foreground w-10 aspect-square flex items-center justify-center shadow-foreground shadow-sm">
                <SendIcon className="size-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Button
        asChild
        variant="outline"
        className="w-max flex items-center justify-center gap-2 text-muted-foreground rounded-full py-6 px-10 mx-auto my-20 hover:bg-muted "
      >
        <motion.a
          href=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Show more <ArrowRight className="size-4" />
        </motion.a>
      </Button>
    </motion.div>
  );
};
