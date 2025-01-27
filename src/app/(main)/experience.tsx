import { WorkExperience } from "@/constants/info-list";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Experience = () => {
  return (
    <motion.div
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        Professional Journey
      </motion.h4>
      <motion.h2
        className="text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Where I&apos;ve Made an Impact
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Explore the milestones of my career, highlighting the roles and projects
        where I contributed, learned, and grew as a professional.
      </motion.p>
      <div className=" relative flex flex-col items-center space-y-12">
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-muted-foreground rounded-full" />

        {WorkExperience.map((job, index) => (
          <div
            className={cn(
              "flex flex-col items-center md:items-start md:w-1/2 space-y-4",
              index % 2 === 0 ? "md:ml-auto md:pr-6" : "md:mr-auto md:pl-6"
            )}
            style={{
              transform:
                index % 2 === 0 ? "translateX(50%)" : "translateX(-50%)",
            }}
            key={index}
          ></div>
        ))}
      </div>
    </motion.div>
  );
};
