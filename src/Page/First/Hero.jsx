import React from "react";
import FirstHero from "../../Component/FirstHero";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12 relative ">
        <div className="col-span-2 z-0">
          <FirstHero
            hook={
              "/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1746.png"
            }
          />
          <FirstHero
            hook={
              "/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1740.png"
            }
          />
        </div>
        <div className="col-span-2 mt-8">
          <FirstHero
            hook={
              "/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1740.png"
            }
          ></FirstHero>
          <FirstHero
            hook={
              "/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1740.png"
            }
          ></FirstHero>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col items-center">
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1737.png"
              alt=""
              className="w-[567px] h-[69px]"
            />
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1739.png"
              alt=""
              className="w-[390px] h-[519px]"
            />
          </div>
        </div>
        <div className="col-span-2 z-0">
          <FirstHero
            hook={
              "/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1740.png"
            }
          />
          <FirstHero
            hook={
              "/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1740.png"
            }
          />
        </div>
        <div className="col-span-2 mt-8">
          <FirstHero
            hook={
              "/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1746.png"
            }
          ></FirstHero>
          <FirstHero
            hook={
              "/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1740.png"
            }
          ></FirstHero>
        </div>
      </div>
    </>
  );
};

export default Hero;
