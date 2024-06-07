import React from "react";

const StateMap = ({ location, name }) => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12 flex flex-col items-center text-center">
          <img src={location} alt="" />
          <p>{name}</p>
        </div>
      </div>
    </>
  );
};

export default StateMap;
