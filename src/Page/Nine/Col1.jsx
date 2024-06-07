import React from "react";

const Col1 = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12 flex flex-col items-center text-center">
          <img
            src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Pilar outreach Logo 2.png"
            alt=""
          />
        </div>
        <div className="col-span-12 flex flex-col items-center text-center">
          <p className="font-outfit_reg font-thin">FOLLOW US ON</p>
        </div>
        <div className="col-span-12 ">
          <div className=" flex justify-center items-center text-center">
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Vector-5.png"
              alt=""
              className="w-[20px] h-[18px]"
            />
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Vector-3.png"
              alt=""
              className="w-[20px] h-[18px]"
            />
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1700.png"
              alt=""
            />
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Vector-4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Col1;
