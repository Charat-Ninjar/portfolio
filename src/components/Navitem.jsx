import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Navitem = () => {
  return (
    <div>
      <div className="dropdown dropdown-bottom lg:hidden flex justify-end items-end w-screen">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <AiOutlineMenu size={35} />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-6 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex-col-reverse space-y-reverse justify-start items-end align-middle"
        >
          <li>
            <a href="#profile">
              <div className="text-2xl h-[68px]  font-semibold text-glow hover:text-glow w-64 hover:scale-105 ">
                PROFILE
              </div>
            </a>
          </li>
          <li>
            <a href="#projects">
              <div className="text-2xl h-[68px] font-semibold text-glow hover:text-glow w-64 hover:scale-105 ">
                PROJECTS
              </div>
            </a>
          </li>
          <li>
            <a href="#contact">
              <div className="text-2xl h-[68px] font-semibold text-glow hover:text-glow w-64 hover:scale-105 ">
                CONTACT ME
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="hidden lg:flex justify-center w-full">
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
      </div>
    </div>
  );
};

export default Navitem;
