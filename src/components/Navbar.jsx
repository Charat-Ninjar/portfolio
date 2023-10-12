import React from "react";
import ContactIcon from "./ContactIcon";

const Navbar = () => {
  return (
    <div className="flex w-full text-cyan-50">
      <div className="flex w-full justify-between h-[68px] items-center fixed z-10 navbar">
        <div className="flex text-2xl h-[68px] justify-start items-center font-semibold text-glow hover:text-glow pl-20">
          NINJAR
        </div>
        <div className="flex">
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
        <ContactIcon/>
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
