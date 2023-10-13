import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="flex-col justify-between">
      <div className="flex text-7xl text-white h-[68px]  font-semibold ">
        <div className="text-glow hover:text-glow">Hi  </div> 👋🏻
      </div>
      
      <div className="flex text-4xl text-white h-[68px]  font-semibold text-glow hover:text-glow  mt-6 w-96">
        my name is Ninjar
      </div>
      <div className="text-white text-xl mt-1 w-96">
        I'm Software Developer Learner At Generation Thailand.
      </div>
    </div>
  );
};

export default WelcomeMessage;
