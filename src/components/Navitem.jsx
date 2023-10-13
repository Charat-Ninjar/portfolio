import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import ContactIcon from "./ContactIcon";
const Navitem = () => {
  return (
    <div>
      <div className="dropdown dropdown-bottom flex lg:hidden justify-end items-end w-screen pr-28">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <AiOutlineMenu size={35} />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex-col  justify-start items-end align-middle text-black"
        >
          <li>
            <a href="#profile">
              <div className="text-2xl h-fit  font-semibold text-glow hover:text-glow w-64 hover:scale-105">
                PROFILE
              </div>
            </a>
          </li>
          <li>
            <a href="#projects">
              <div className="text-2xl h-fit mt-2 font-semibold text-glow hover:text-glow w-64 hover:scale-105 ">
                PROJECTS
              </div>
            </a>
          </li>
          <li>
            <a href="#contact">
              <div className="text-2xl h- mt-2 font-semibold text-glow hover:text-glow w-64 hover:scale-105 ">
                CONTACT ME
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="hidden lg:flex justify-center w-full lg:gap-10">
          <a href="#profile">
            <div className="flex text-2xl h-[68px] justify-center items-center font-semibold text-glow hover:text-glow w-fil hover:scale-105">
              PROFILE
            </div>
          </a>
          <a href="#projects">
            <div className="flex text-2xl h-[68px] justify-center items-center font-semibold text-glow hover:text-glow w-fit hover:scale-105">
              PROJECTS
            </div>
          </a>
          <a href="#contact">
            <div className="flex text-2xl h-[68px] justify-center items-center font-semibold text-glow hover:text-glow w-fit hover:scale-105">
              CONTACT ME
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navitem;
