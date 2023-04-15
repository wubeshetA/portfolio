import React from "react";

import { FaGithub } from "react-icons/fa";
// import TbWorld icon from react-icons
import { TbWorld } from "react-icons/tb";

function ProjectsCard({ title, des, src, github_link, web_link }) {
  return (
   
      <div className="flex justify-center group relative overflow-hidden rounded-xl shadow-shadowOne">
        {/* image overlay */}
        <div className="group-hover:bg-bodyColor/90 w-full h-full absolute z-40 transition-all duration-300"></div>
        {/* img */}
        <img
          className="group-hover:scale-125 transition-all duration-500"
          src={src}
          alt=""
        />

        <div className="absolute flex flex-col justify-center text-center items-center -bottom-full group-hover:bottom-4 transition-all duration-500 z-50">
          <div className="flex gap-7">
            <a href={github_link} target="_blank">
              <div>
                <FaGithub className="text-xl hover:text-designColor mb-2" />
              </div>
            </a>
            <a href={web_link} target="_blank">
              <div>
                <TbWorld className="text-xl hover:text-designColor mb-2" />
              </div>
            </a>
          </div>
          <div></div>
        </div>

        <div className="absolute w-80  flex flex-col justify-center text-center  -bottom-full group-hover:bottom-20 transition-all duration-700 z-50">
          <h1 className="text-2xl font-bold text-designColor mb-2">{title}</h1>
          <p className="mb-2">{des}</p>
        </div>
  
    </div>
  );
}

export default ProjectsCard;
