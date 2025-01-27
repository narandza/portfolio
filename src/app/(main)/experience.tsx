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
      <div className=" relative flex flex-col items-center space-y-12  px-[12%] py-10 ">
        <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-muted-foreground rounded-full" />

        {WorkExperience.map((job, index) => (
          <div
            className={cn(
              "flex flex-col items-center md:items-start md:w-1/2 space-y-4 ",
              isEvenIndex(index) ? "md:ml-auto md:pr-6" : "md:mr-auto md:pl-6"
            )}
            style={{
              transform: isEvenIndex(index)
                ? "translateX(20%)"
                : "translateX(-20%)",
            }}
            key={index}
          >
            <div
              className={cn(
                "flex items-center justify-center gap-2",
                isEvenIndex(index) ? "" : "flex-row-reverse "
              )}
            >
              <div className="flex items-center justify-center size-5 bg-main rounded-full" />
              <p className="text-muted-foreground">
                {formatDate(job.startDate)} - {formatDate(job.endDate)}
              </p>
            </div>

            <div className="p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold">{job.position}</h3>
              <ul className="list-disc list-inside mt-2 text-muted-foreground">
                {job.description.map((description, i) => (
                  <li className="" key={i}>
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
