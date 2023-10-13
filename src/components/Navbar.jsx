import React from "react";
import ContactIcon from "./ContactIcon";
import Navitem from "./Navitem";
const Navbar = () => {
  return (
    <div className="flex w-full text-cyan-50">
      <div className="flex w-full justify-center h-[68px] items-center fixed z-10 navbar pl-10">
        <div className="flex lg:w-1/6 text-2xl h-[68px] justify-start items-center font-semibold text-glow hover:text-glow pl-20 lg:pl-1">
          NINJAR
        </div>
        <div className="flex lg:w-4/6 justify-end lg:justify-center">
          <Navitem />
        </div>
        <div className="flex lg:flex lg:w-1/6 justify-center lg:justify-end">
          <ContactIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
