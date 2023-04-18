import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectThree } from "../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="HERE ARE SOME OF MY CRAFT WORK" des="My Projects" />
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14"> */}
      <div className="flex md:flex-row lgl:flex-row w-full sml:flex-col gap-10">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          github_link={"http://github.com/wubeshetA"}
          web_link={"http://localhost:5000"}
        />
        
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          github_link={"http://github.com/wubeshetA"}
          web_link={"http://localhost:5000"}
        />

        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
          github_link={"http://github.com/wubeshetA"}
          web_link={"http://localhost:5000"}
        />
      </div>
    </section>
  );
};

export default Projects;
