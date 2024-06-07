import React from "react";
import LinkNine from "../../Component/LinkNine";

const Col2 = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12 gap-2">
        <div className="col-span-6 mb-4">
          <p className="font-outfit_reg font-normal">QUICK LINKS</p>
          <div className=" flex justify-start">
            <div className="col-span-3 leading-normal">
              <a href="#">
                <LinkNine link_name={"HOME"}></LinkNine>
              </a>
              <a href="#">
                <LinkNine link_name={"ABOUT US"}></LinkNine>
              </a>
              <a href="#">
                <LinkNine link_name={"PROJECT & ACTIVITIES"}></LinkNine>
              </a>
              <a href="#">
                <LinkNine link_name={"CREATIVE HUB"}></LinkNine>
              </a>
            </div>
            <div className="col-span-3 leading-normal">
              <a href="#">
                <LinkNine link_name={"SSW LEAGUE"}></LinkNine>
              </a>
              <a href="#">
                <LinkNine link_name={"PUBLICATION"}></LinkNine>
              </a>
              <a href="#">
                <LinkNine link_name={"GALLERY"}></LinkNine>
              </a>
              <a href="#">
                <LinkNine link_name={"CONTACT US"}></LinkNine>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-6">
          <p className="font-outfit_reg font-normal">CONTACT US</p>
          <div className="flex gap-2">
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Vector-6.png"
              alt=""
              className="w-[16px] h-[17px] mt-1"
            />
            <p className="font-outfit_reg font-thin">
              N-32, Jangpura Extension, New Delhi -110 014
            </p>
          </div>
          <div className="flex gap-2">
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Vector-7.png"
              alt=""
              className="w-[16px] h-[13px] mt-1"
            />
            <p className="font-outfit_reg font-thin">pilaroutreach@gmail.com</p>
          </div>
          <div className="flex gap-2">
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Vector-8.png"
              alt=""
              className="w-[16px] h-[16px] mt-1"
            />
            <p className="font-outfit_reg font-thin">011 - 43592570</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Col2;
