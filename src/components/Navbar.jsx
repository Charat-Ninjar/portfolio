import React from "react";
import ContactIcon from "./ContactIcon";
import Navitem from "./Navitem";
const Navbar = () => {
  return (
    <div className="flex w-full text-cyan-50">
      <div className="flex w-full justify-between h-[68px] items-center fixed z-10 navbar">
        <div className="flex text-2xl h-[68px] justify-start items-center font-semibold text-glow hover:text-glow pl-12">
          NINJAR
        </div>
        <div className="">
          <Navitem />
        </div>
        <div>
          <ContactIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
