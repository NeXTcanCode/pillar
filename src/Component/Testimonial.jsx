import classNames from "classnames";
import React from "react";

const Testimonial = ({ src, person_name, person_designation }) => {
  return (
    <>
      <div className={classNames("container mx-auto grid grid-cols-12")}>
        <div className="col-span-12 flex flex-col items-center text-center bg-white">
          <p className="font-outfit_reg font-thin">
            Working as a hygienist at Pilar Outreach Foundation is incredibly
            communities brings me immense joy. The staff feels like a supportive
            family, and the sense of fellowship is inspiring. The foundation's
            commitment to making a difference is evident, and the professional
            development opportunities are exceptional. I am grateful to be part
            of an organization that positively impacts lives.
          </p>
          {/* <div className="absolute left-[55%] top-[35%]">
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Vector-2.png"
              alt=""
              className="h-[21px] w-[27px] "
            />
          </div> */}
          {/* unable to do ask Likhil Sir */}
        </div>

        <div className="col-span-12 items-center text-center mt-10 bg-[#14352C] flex flex-col relative">
          <div className="absolute top-[-34.5px]">
            <img
              src="https://cdn.siasat.com/wp-content/uploads/2022/06/New-Project-45.jpg"
              alt=""
              className="w-[69px] h-[69px] rounded-full"
            />
          </div>
          <div className="text-center">
            <p className="font-outfit_reg font-medium text-1xl text-white mt-10 font-outfit_reg font-normal font-outfit_reg font-normal ">
              SRK
            </p>
            <p className="font-outfit_reg font-normal text-base text-white mt-1">
              Astronaut
            </p>
          </div>
        </div>
        {/* <div className="col-span-12 flex flex-col items-center text-center mt-10 bg-[#14352C]">
          <p className="font-outfit_reg font-medium ">Vikas</p>
        </div>
        <div className="col-span-12 flex flex-col items-center text-center bg-[#14352C]">
          <p className="font-outfit_reg font-normal ">Astronaut</p>
        </div> */}
      </div>
    </>
  );
};

export default Testimonial;
