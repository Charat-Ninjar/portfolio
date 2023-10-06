import React from "react";

const ContactInfo = () => {
  return (
    <div id="contact" className=" mt-14 scroll-container flex-col align-middle">
      <div
        id="projects"
        className="flex text-4xl text-white h-[100px]  font-semibold border-b-4 mt-40 items-center mx-10 "
      >
        <div className="text-glow hover:text-glow px-2">Contact</div>
      </div>
      <div className="flex justify-start gap-9 ml-10 mt-10 pb-10 pl-4">
        <div className="text-white text-1xl ">Email: Charatvc@gmail.com</div>
        <div className="text-white text-1xl">
          Linkedin: www.linkedin.com/in/charat-p
        </div>
        <div className="text-white text-1xl">
          Github: github.com/Charat-Ninjar
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
