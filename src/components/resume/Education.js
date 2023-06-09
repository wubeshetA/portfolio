import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full lgl:w-1/2 md:w-1/2 flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-5"></div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc(Hons) - Software Engineering"
            subTitle="The African Leadership University (Jan 2022 - Jun 2024)"
            result="4.7/5"
            des="The ALU Software Engineering is a three-year undergraduate degree that blend the technical education with leadership developement."
          />

          <ResumeCard
            title="Bootcamp - Cloud developer Nanodegree"
            subTitle="Udacity (Dec 2022 - Mar 2023)"
            result="Graduated"
            des="Gained hands-on experience on cloud computing with AWS. I also learned the fundamentals DevOps."
          />
          <ResumeCard
            title="Fullstack Web Development"
            subTitle="ALX (May - Sept 2022)"
            result="Graduated"
            des="I learned and gained hands-on experience on how to build a production-grade fullstack (backend heavy) web applications."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
