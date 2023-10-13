import React from "react";
import Me from "./Me";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="flex-col w-full ">
      <Me />
      <Project />
      <Contact />
    </div>
  );
};

export default Home