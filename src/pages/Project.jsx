import React from "react";
import Navbar from "../components/Navbar";
import ProjectData from "../components/ProjectData";
import ProjectCard from "../components/ProjectCard";
import { Element } from "react-scroll";
import MiniProjectCard from "../components/MiniprojectCard";
const Project = () => {
  return (
    <div className="pl-8">
      <ProjectData>
      <Element name="projects" className="scroll-container">
        <div className="flex text-7xl  text-white h-fit  font-semibold border-b-4 pt-2 items-center mx-2 ">
          <div className="text-glow hover:text-glow ">Projects </div>
        </div>
        <ProjectCard></ProjectCard>
        <div id="projects" className="flex text-4xl text-white h-fit font-semibold border-b-4 pt-2 items-center mx-2 ">
          <div className="text-glow hover:text-glow mt-10">Mini Projects </div>
        </div>
        <MiniProjectCard/>
        </Element>
      </ProjectData>
    </div>
  );
};

export default Project;
