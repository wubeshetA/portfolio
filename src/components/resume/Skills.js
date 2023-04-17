import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../../constants";
// from react-icons
// import { FaHtml5 } from "react-icons/fa";
const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            {/* Features */}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Design Skill</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>

          {skillsData.map(({ _id, title, percentage, icon }) => (
            // _id: 2001,
            // title: "HTML",
            // percentage: "90%",
            // icon: <FaHtml5 />,
          
            <div className="w-full flex gap-2" key={_id}>
              <div>
                {/* <FaHtml5 className="text-5xl text-designColor" /> */}
                {icon}
              </div>
              <div className="w-full overflow-x-hidden">
                <p className="text-sm uppercase font-medium">{title}</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 6 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ width: `${percentage}` }}
                    className="h-full bg-gradient-to-r from-cyan-600  to-cyan-100 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">{percentage}</span>
                  </motion.span>
                </span>
              </div>
            </div>
          ))}
      
        </div>
      </div>




      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            {/* Features */}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Design Skill</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>

          {skillsData.map(({ _id, title, percentage, icon }) => (
            // _id: 2001,
            // title: "HTML",
            // percentage: "90%",
            // icon: <FaHtml5 />,
          
            <div className="w-full flex gap-2" key={_id}>
              <div>
                {/* <FaHtml5 className="text-5xl text-designColor" /> */}
                {icon}
              </div>
              <div className="w-full overflow-x-hidden">
                <p className="text-sm uppercase font-medium">{title}</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 6 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ width: `${percentage}` }}
                    className="h-full bg-gradient-to-r from-cyan-600  to-cyan-100 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">{percentage}</span>
                  </motion.span>
                </span>
              </div>
            </div>
          ))}
      
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
