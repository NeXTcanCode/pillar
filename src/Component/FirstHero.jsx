import React from "react";

const FirstHero = ({ hook }) => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12">
          <div className="flex flex-col items-center">
            <img src={hook} alt="hookPng" className="" />
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1369.png"
              className="w-[319px] h-[189px]"
              alt="smallFramePng"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstHero;
