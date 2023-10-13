import React,{useState} from "react";

const ProfileImg = () => {
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div
          className="mt-40 ml-40"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className=" rounded-lg w-96 h-96 relative">
            <img
              src="/me.jpeg"
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
    )
}

export default ProfileImg