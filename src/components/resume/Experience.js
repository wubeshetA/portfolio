import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full lgl:w-1/2 md:w-1/2 flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          {/* <h2 className="text-4xl font-bold">Job Experience</h2> */}
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Software Engineer Intern"
            subTitle="SHEBA PLASTIC (May 2023 - Present)"
            result="Rwanda (Hybrid)"
            des="Currently working on building a database and API for a conservation startup called SHEBA PLASTIC. I will also be responsible in building a smart bins that will connect with a mobile app and used to collect plastic waste in Rwanda."
          />
          <ResumeCard
            title="SAT Teacher"
            subTitle="Bridge2Rwanda - (Jun 2022 - Sept 2022)"
            result="Rwanda"
            des="Assisted Bridge2Rwanda scholars to improve their SAT results by 12% on average at ISOMO Bootcamp."
          />
          <ResumeCard
            title="BreakIntoTech club Mentor & committee"
            subTitle="African Leadership University - (Jan 2023 - present)"
            result="Rwanda"
            des="Mentor and committee member for the BreakIntoTech club at ALU. The club aims to help students learn about the tech industry and prepare them for internships and jobs."
          />
          
        </div>
      </div>

      {/*       
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
