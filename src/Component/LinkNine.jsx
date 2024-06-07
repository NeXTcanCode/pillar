import React from "react";

const LinkNine = ({ link_name }) => {
  return (
    <>
      <div className="flex">
        <img
          src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Vector 16.png"
          alt=""
          className="mt-1"
        />

        <p className="font-outfit_reg font-normal  px-2">{link_name}</p>
      </div>
    </>
  );
};

export default LinkNine;
