import React, { useState } from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import Layout from "../Layout";

const Me = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout>
      <div id="profile" className="flex items-center justify-between p-20 m-auto rounded-lg nav-item-container w-full gap-3 scroll-container">
        <div className="w-6/12 mt-9">
          <WelcomeMessage />
        </div>
        <div
          className="w-6/12 h-6/12 mt-40 ml-40"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="rounded-lg w-96 h-96 relative">
            <img
              src="src/assets/gunther.jpg"
              className={`rounded-lg  w-96 h-96 absolute bottom-10 right-10 z-0 ${
                isHovered ? "profile" : ""
              }`}
            ></img>
            {/* below is frame */}
            <div
              className={`rounded-lg p-3 border-2 w-96 h-96 ${
                isHovered ? " profile-frame" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Me;
