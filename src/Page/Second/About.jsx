import React from "react";

const About = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12 mt-10">
        <div className="col-span-12 flex flex-col items-center text-center">
          <img
            src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1763.png"
            alt=""
          />
          <p className="w-[1031px] h-[28] font-outfit_reg font-normal my-5">
            Managed by eminent members with decades of expertise in the field of
            Education, Health and Social Work.
          </p>
          <p className="w-[1374px] h-[72px] font-outfit_thin font-thin">
            Pilar Outreach Foundation was founded by the Society of Missionaries
            of St. Francis Xavier, commonly known as the Society of Pilar, and
            operates within the Delhi province. On the 7th of June, 2016, the
            foundation was officially registered as an NGO under the guidance of
            esteemed individuals with extensive expertise in the fields of
            education, health, and social work.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
