import React from "react";

const WelcomeMessage = () => {
  return (
    <div>
      <div className="flex text-7xl text-white h-[68px]  font-semibold ">
        <div className="text-glow hover:text-glow">Hi  </div> 👋🏻
      </div>
      
      <div className="flex text-4xl text-white h-[68px]  font-semibold text-glow hover:text-glow  mt-6">
        my name is Gunther
      </div>
      <div className="text-white text-xl">
        I'm Software Developer Learner At Generation Thailand.
      </div>
    </div>
  );
};

export default WelcomeMessage;
