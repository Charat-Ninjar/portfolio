import React, { useState } from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import Layout from "../Layout";
import Download from "../components/downloadCV";
import ProfileImg from "../components/ProfileImg";
const Me = () => {
  return (
    <div
      className="flex pl-12 mt-10 w-full items-center justify-center rounded-lg  gap-3 scroll-container"
    >
      <div className="mb-20 flex-col lg:flex  lg:mt-40">
        <div className="flex items-center">
          <WelcomeMessage />
        </div>
        <div className="pt-10 w-96">
          <Download />
        </div>
        {/* <div className="hidden lg:flex justify-center">
          <ProfileImg />
        </div> */}
      </div>
      <div>
      <div className="hidden lg:flex pb-10">
        <ProfileImg />
      </div>
      </div>
    </div>
  );
};

export default Me;
