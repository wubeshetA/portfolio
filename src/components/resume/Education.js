import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-1/2 flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4"></div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc(Hons) - Software Engineering"
            subTitle="The African Leadership University (Jan 2022 - Jun 2024)"
            result="4.7/5"
            des="The ALU Software Engineering program is a three-year undergraduate degree that blend the technical education with leadership developement. The curriculum emphasizes practical, hands-on experience with real-world projects, enabling students to develop valuable skills that are highly sought after in the tech industry."
          />

          <ResumeCard
            title="Bootcamp - Cloud developer Nanodegree"
            subTitle="Udacity (Dec 2022 - Mar 2023)"
            result="Graduated"
            des="Gained hands-on experience on cloud computing with AWS. I also learned the fundamentals DevOps."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Bahir Dar STEM Incubation center (2016 - 2020)"
            result="90/100"
            des="Completed my secondary education at a Science, Technology, Engineering & Math incubation center where I focus on Computer science and Math."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
