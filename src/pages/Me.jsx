import React, { useState } from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import Layout from "../Layout";
import Download from "../components/downloadCV";
import ProfileImg from "../components/ProfileImg";
const Me = () => {


  return (
      <div id="profile" className="flex :flex-col items-center justify-center align-middle rounded-lg nav-item-container gap-3 scroll-container">
        <div className="flex flex-col lg:flex mt-32 justify-center items-center ">
          <div className="mt-10 flex items-center"><WelcomeMessage/></div>
          <div className="pt-20 w-96"><Download/></div>
        </div>
        <div className="flex justify-center">
          <ProfileImg/>
        </div>
      </div>

  );
};

export default Me;
