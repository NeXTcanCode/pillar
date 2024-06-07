import React, { useState } from "react";
import Button from "./Button";

const ProjectImg = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Add a longer delay before resetting button hover state
    setTimeout(() => {
      setButtonHovered(false);
    }, 5000); // Adjust the delay time (in milliseconds) as needed
  };

  const handleButtonMouseEnter = () => {
    setButtonHovered(true);
  };

  return (
    <div className="container mx-auto grid grid-cols-12">
      <div className="col-span-12 flex flex-col items-center">
        <img
          src="/public/Pilar Outreach Foundation Images/Rectangle 592.png"
          alt=""
          className={`transition-all duration-300 ${
            isHovered ? "w-[372px] h-[372px]" : "w-[250px] h-[250px]"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div
        className="col-span-12 flex flex-col items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1
          className={`transition-all duration-300  font-neue ${
            isHovered && "text-2xl"
          }`}
        >
          Project Title
        </h1>
      </div>
      <div
        className="col-span-12 flex flex-col items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p
          className={`transition-all duration-300 font-outfit_reg font-thin ${
            isHovered && "text-xl"
          }`}
        >
          Project Description
        </p>
      </div>
      <div className="col-span-12 flex flex-col items-center">
        {(isHovered || buttonHovered) && (
          <Button
            text={"Read More"}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={() => setButtonHovered(false)}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectImg;
