import React, { createContext, useContext, useState } from "react";
const DataContext = createContext();

const ProjectData = ({ children }) => {
  const [projectList, setProjectList] = useState([
    {
      name: "Keepfit",
      project: "/keepfit.png",
      description:
        "web application designed to help you monitor and analyze your daily activities, empowering you to make informed decisions for a more productive and fulfilling day.",
      url: "https://keepfit-demo.vercel.app/",
    },
  ]);

  const [miniProjectList, setminiProjectList] = useState([
    {
      name: "Colmar Academy",
      project: "/colmar.png",
      description: "The static web page uses the fundamentals of HTML and CSS.",
      url: "https://colmar-assignment.vercel.app/",
    },
    {
      name: "finding hat",
      project: "/findinghat2.png",
      description:
        "This mini-game project utilizes the fundamentals of JavaScript.",
      url: "https://replit.com/@CharatPrakobkit/09Ninjar-find-your-hat",
    },
    {
      name: "Simple Webpage",
      project: "/reactsimplepage.png",
      description:
        "a simple webpage using the fundamental building blocks of React, harnessing the power of React Hooks, and implementing routing for seamless navigation.",
      url: "https://ninjar-react-assignment.vercel.app/",
    },
  ]);
  return (
    <>
      <DataContext.Provider value={{ projectList, miniProjectList }}>
        {children}
      </DataContext.Provider>
    </>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export default ProjectData;
