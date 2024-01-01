import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="flex-col justify-center w-full">
      <div className="flex text-7xl  h-[68px]  font-semibold ">
        <div className="text-glow hover:text-glow">Hi  </div> 👋🏻
      </div>
      
      <div className="flex text-4xl  h-[68px]  font-semibold text-glow hover:text-glow  mt-6">
        my name is Ninjar
      </div>
      <div className=" text-xl mt-1">
        I'm (looking for a job as a) Software Developer.
      </div>
    </div>
  );
};

export default WelcomeMessage;
