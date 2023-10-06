import React from "react";

const ContactIcon = () => {
    return(
        <div className="flex gap-10 pr-10">
          <div className="flex items-center hover:text-glow rounded-full icon">
            <img
              src="/github-light.svg"
              className="h-[38px] rounded-full"
            ></img>
          </div>
          <div className="flex items-center bg-white object-contain rounded-full icon">
            <img
              src="/in1.png"
              className="h-[42px] w-[42px] rounded-full"
              alt="Icon"
            />
          </div>
        </div>
    )
}

export default ContactIcon