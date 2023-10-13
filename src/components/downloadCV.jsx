import React from "react";

const Download = () => {
  return (
    <a
      href="https://drive.google.com/file/d/10E3g9buCEIWRWNAsVEbN2PPR__bGhPbH/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="border-2 border-yellow-500 rounded-lg p-4 mr-8 text-center  shadow-lg icon hover:text-amber-200">
        <span class="text-xl font-semibold text-yellow-500 hover:text-amber-200">Download my CV here</span>
      </div>
    </a>
  );
};

export default Download;
