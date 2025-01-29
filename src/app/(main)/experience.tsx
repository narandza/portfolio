import {
  CONTENT_DIV_DELAY_TIME,
  CONTENT_DIV_DURATION_TIME,
  DESCRIPTION_DELAY_TIME,
  DESCRIPTION_DURATION_TIME,
  PARENT_DIV_DURATION_TIME,
  PRIMARY_HEADING_DELAY_TIME,
  PRIMARY_HEADING_DURATION_TIME,
  SECONDARY_HEADING_DELAY_TIME,
  SECONDARY_HEADING_DURATION_TIME,
  Y_AXIS_INITIAL_POSITION,
} from "@/constants/animations";
import { WorkExperience } from "@/constants/info-list";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Experience = () => {
  const isEvenIndex = (index: number) => {
    return index % 2;
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <motion.div
      id="experience"
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
        Professional Journey
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
        Where I&apos;ve Made an Impact
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: DESCRIPTION_DURATION_TIME,
          delay: DESCRIPTION_DELAY_TIME,
        }}
      >
        Explore the milestones of my career, highlighting the roles and projects
        where I contributed, learned, and grew as a professional.
      </motion.p>
      <motion.div
        className="relative flex flex-col items-center space-y-12 px-4 py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: CONTENT_DIV_DURATION_TIME,
          delay: CONTENT_DIV_DELAY_TIME,
        }}
      >
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-muted rounded-full z-0" />

        {WorkExperience.map((job, index) => (
          <motion.div
            className={cn(
              "flex flex-col items-center w-full md:w-1/2 space-y-4 relative z-10",
              isEvenIndex(index) ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
            )}
            key={index}
            initial={
              isEvenIndex(index)
                ? { opacity: 0, x: 50 }
                : { opacity: 0, x: -50 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <div
              className={cn(
                "flex items-center justify-center gap-2 w-full",
                isEvenIndex(index) ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              <div className="flex items-center justify-center size-5 bg-main rounded-full z-20" />
              <p className="text-muted-foreground">
                {formatDate(job.startDate)} - {formatDate(job.endDate)}
              </p>
            </div>

            <div className="w-full p-4 shadow-md rounded-lg text-center md:text-left bg-background z-10">
              <h3 className="text-xl font-semibold">{job.position}</h3>
              <ul className="list-disc list-inside mt-2 text-muted-foreground">
                {job.description.map((description, i) => (
                  <li key={i}>{description}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
