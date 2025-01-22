import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { workData } from "@/constants/info-list";

export const Work = () => {
  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg "
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        My portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
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

      <motion.div className="grid grid-cols-auto lg:grid-cols-4 my-10 gap-5">
        {workData.map(({ title, description, bgImage }, index) => (
          <div
            className="aspect-square bg-no-repeat bg-cover rounded-lg relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${bgImage})` }}
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
          </div>
        ))}
      </motion.div>

      <Button
        asChild
        variant="ghost"
        className="w-max flex items-center justify-center gap-2 text-muted-foreground border-[0.5px] border-muted-foreground rounded-full py-6 px-10 mx-auto my-20 hover:bg-muted "
      >
        <Link href="">
          Show more <ArrowRight className="size-4" />
        </Link>
      </Button>
    </motion.div>
  );
};
