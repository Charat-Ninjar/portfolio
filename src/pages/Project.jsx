import React from "react";
import Navbar from "../components/Navbar";
import ProjectData from "../components/ProjectData";
import ProjectCard from "../components/ProjectCard";
import { Element } from "react-scroll";
import MiniProjectCard from "../components/MiniprojectCard";
import MobileProject from "../components/MobileProject";
const Project = () => {
  return (
    <div className="">
      <ProjectData>
      <Element name="projects" className="scroll-container">
        <div className="flex text-5xl pb-3  text-white h-fit  font-semibold border-b-4 pt-2 items-center mx-2">
          <div className="text-glow hover:text-glow ">Projects </div>
        </div>
        <ProjectCard></ProjectCard>
        <div id="projects" className="flex text-4xl pb-3 text-white h-fit font-semibold border-b-4 pt-2 items-center mx-2 ">
          <div className="text-glow hover:text-glow mt-10">Mini Projects </div>
        </div>
        <div className="hidden lg:flex">
        <MiniProjectCard/>
        </div>
        <div className="">
        <MobileProject/>
        </div>
        </Element>
      </ProjectData>
    </div>
  );
};

export default Project;
