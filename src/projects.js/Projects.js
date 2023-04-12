import React from "react";
import Title from "../layouts/Title";
import { projectOne } from "../assets";
import ProjectItems from "./ProjectItems";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title={"HERE ARE SOME OF THE PROJECTS I CRAFT"}
          des={"My Projects"}
        ></Title>
      </div>

      <ProjectItems/>
    </section>
  );
}

export default Projects;
