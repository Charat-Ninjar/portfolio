import React from "react";

const Navitem = () => {
    return(
        <div>
          <a href="#profile">
            <div className="flex text-2xl h-[68px] justify-center items-center font-semibold text-glow hover:text-glow w-64 hover:scale-105">
              PROFILE
            </div>
          </a>
          <a href="#projects">
            <div className="flex text-2xl h-[68px] justify-center items-center font-semibold text-glow hover:text-glow w-64 hover:scale-105">
              PROJECTS
            </div>
          </a>
          <a href="#contact">
            <div className="flex text-2xl h-[68px] justify-center items-center font-semibold text-glow hover:text-glow w-64 hover:scale-105">
              CONTACT ME
            </div>
          </a>
        </div>
    )
}

export default Navitem