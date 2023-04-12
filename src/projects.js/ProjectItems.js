import React from "react";
import { projectOne } from "../assets";
import { FaGithub } from "react-icons/fa";
// import TbWorld icon from react-icons
import { TbWorld } from "react-icons/tb";

function ProjectItems() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center group relative overflow-hidden border-2 border-white/50 rounded-xl">
        {/* image overlay */}
        <div className="group-hover:bg-bodyColor/80 w-full h-full absolute z-40 transition-all duration-300"></div>
        {/* img */}
        <img
          className="group-hover:scale-125 transition-all duration-500"
          src={projectOne}
          alt=""
        />
        <div className="absolute flex flex-col justify-center text-center items-center -bottom-full group-hover:bottom-36 transition-all duration-500 z-50">
          <div className="flex gap-7">
            <a href="www.facebook.com/" target="_blank">
              <div>
                <FaGithub className="text-xl" />
              </div>
            </a>
            <a href="www.facebook.com/" target="_blank">
              <div>
                <TbWorld className="text-xl" />
              </div>
            </a>
          </div>
          <div></div>
        </div>

        <div className="absolute mx-20   flex flex-col justify-center text-center items-center -bottom-full group-hover:bottom-10 transition-all duration-700 z-50">
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectItems;
