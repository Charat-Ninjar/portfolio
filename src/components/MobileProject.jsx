import React, { useState } from "react";
import { useData } from "./ProjectData";

const MobileProject = () => {
  const { miniProjectList } = useData();
  const [imgIndex, setImgIndex] = useState(0);
  console.log(miniProjectList);

  const goToPrevious = () => {
    setImgIndex((prevIndex) =>
      prevIndex === 0 ? miniProjectList.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setImgIndex((prevIndex) =>
      prevIndex === miniProjectList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="px-8 mt-8 flex lg:hidden" style={{height:"600px"}}>
      <div
        className="card w-full h-full rounded-box relative bg-base-100 shadow-xl image-full z-0"
      >
        <img
          src={miniProjectList[imgIndex].project}
          className="w-full h-full object-cover  top-0 left-0 rounded-box"
          alt={`Slide ${imgIndex + 1}`}
        />

        <div className="absolute flex justify-between items-center w-full h-full px-3 z-40 rounded-box">
          <button className="btn btn-circle left-0" onClick={goToPrevious}>
            ❮
          </button>
          <button className="btn btn-circle right-0" onClick={goToNext}>
            ❯
          </button>
        </div>
        <div className="z-10 text-white mt-10 pl-10">
          <h2 className="card-title text-white mb-4 text-2xl">
            {miniProjectList[imgIndex].name}
          </h2>
          <p>{miniProjectList[imgIndex].description}</p>
          
        </div>
        <div className="card-actions justify-end items-end mb-10 mr-10 z-30">
              <a 
              href={miniProjectList[imgIndex].url}
              target="_blank"
              rel="..">
              <button className="btn bg-yellow-400 hover:bg-yellow-200 text-blue-800">Visit</button>
              </a>
            </div>
      </div>
    </div>
  );
};

export default MobileProject;
