import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full text-cyan-50">
      <div className="flex w-full justify-between h-[68px] items-center fixed z-10 navbar">
        <div className="flex text-2xl h-[68px] justify-start items-center font-semibold text-glow hover:text-glow pl-20">
          Ninjar
        </div>
        <div>
          <a href="#profile">
            <div className="flex text-2xl h-[68px] justify-center items-center font-semibold text-glow hover:text-glow w-64">
              PROFILE
            </div>
          </a>
          <a href="#projects">
            <div className="flex text-2xl h-[68px] justify-center items-center font-semibold text-glow hover:text-glow w-64 ">
              PROJECTS
            </div>
          </a>
          <a href="#contact">
            <div className="flex text-2xl h-[68px] justify-center items-center font-semibold text-glow hover:text-glow w-64 ">
              CONTACT ME
            </div>
          </a>
        </div>
        <div className="flex gap-10 pr-10">
          <div className="flex items-center hover:text-glow rounded-full icon">
            <img
              src="src/assets/github-light.svg"
              className="h-[38px] rounded-full"
            ></img>
          </div>
          <div className="flex items-center bg-white object-contain rounded-full icon">
            <img
              src="src/assets/in1.png"
              className="h-[42px] w-[42px] rounded-full"
              alt="Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <Link to={"/"}>
          <div className="flex text-2xl h-[68px] justify-center items-center font-semibold text-glow hover:text-glow  w-64">
            PROFILE
          </div>
        </Link>
        <Link to={"/Project"}> 
          <div className="flex text-2xl h-[68px] justify-center items-center font-semibold text-glow hover:text-glow w-64 ">
            PROJECTS
          </div>
        </Link>
        <Link to={"/Contact"}>
          <div className="flex text-2xl h-[68px] justify-center items-center font-semibold text-glow hover:text-glow w-64 ">
            CONTACT ME
          </div>
        </Link> */
}
