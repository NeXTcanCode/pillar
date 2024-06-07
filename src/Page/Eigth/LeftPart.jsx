import React from "react";

const LeftPart = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12 flex flex-col mt-[-54.5px]">
          <img
            src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1655.png"
            alt=""
            className="w-[124px] h-[124px]"
          />
        </div>
        <div className="col-span-12">
          <div className="flex">
            <p>
              <span className="text-6xl font-outfit_reg font-medium text-white">
                F
              </span>
            </p>
            <div className="col-span-12 flex flex-col items-center text-center">
              <img
                src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/write 1.png"
                alt=""
              />
              <p>
                <span className="font-outfit_reg font-normal text-white">
                  ROM THE
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="flex">
            <span className="text-3xl text-white">DESK</span>
            <span className="text-3xl text-white">Of</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftPart;
