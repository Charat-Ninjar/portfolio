import React from "react";
import { useData } from "./ProjectData";
const ProjectCard = () => {
  const { projectList } = useData();
  console.log(projectList);
  return (
    <div className="flex gap-10 mt-12 px-12">
      {projectList.map((project, index) => (
        <div
          key={index}
          className="card lg:w-96 bg-base-100 shadow-xl image-full z-0 hover:scale-110"
        >
          <figure>
            <img
              src={project.project} // Assuming you have an 'image' property in your project object
              alt={project.title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">{project.name}</h2>
            <p>{project.description}</p>
            <div className="card-actions justify-end">
              <div className="flex justify-end hoverable-item">
                <button className="btn bg-yellow-400 hover:bg-yellow-200 flex justify-end">
                  Visit
                </button>
                <div class="absolute tooltip w-fit ">Sorry, temporarily closed.</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
