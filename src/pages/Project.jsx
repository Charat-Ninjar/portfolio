import React from "react";
import Navbar from "../components/Navbar";
import ProjectData from "../components/ProjectData";
import ProjectCard from "../components/ProjectCard";
import { Element } from "react-scroll";
import MiniProjectCard from "../components/MiniprojectCard";
const Project = () => {
  return (
    <div className="">
      <ProjectData>
      <Element name="projects" className="scroll-container">
        <div id="projects" className="flex text-7xl text-white h-[100px]  font-semibold border-b-4 mt-40 items-center mx-12 ">
          <div className="text-glow hover:text-glow px-2">Projects </div>
        </div>
        <ProjectCard></ProjectCard>
        <div id="projects" className="flex text-4xl text-white h-[100px]  font-semibold border-b-4 mt-40 items-center mx-10 ">
          <div className="text-glow hover:text-glow px-2">Mini Projects </div>
        </div>
        <MiniProjectCard/>
        </Element>
      </ProjectData>
    </div>
  );
};

export default Project;
