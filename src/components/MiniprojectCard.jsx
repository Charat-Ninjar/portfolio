import React from "react";
import { useData } from "./ProjectData";

const MiniProjectCard = () => {
  const { miniProjectList } = useData();

  return (
    <div className="flex gap-10 mt-12 px-12">
      {miniProjectList.map((project, index) => (
        <div
          key={index}
          className="card w-96 bg-base-100 shadow-xl image-full z-0"
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
              <a 
              href={project.url}
              target="_blank"
              rel="..">
              <button className="btn bg-yellow-400 hover:bg-yellow-200">Visit</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiniProjectCard;
