import React from "react";
import SecondMessage from "../../Component/SecondMessage";
import msg from "../../assets/StaticData/SecondMsg.js";

const Allmessage = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <SecondMessage
            topIcon={
              "/public/Pilar Outreach Foundation Images/output-onlinegiftools (17).gif"
            }
            topTitle={"AIM"}
            topMsg={msg[0]}
          ></SecondMessage>
        </div>
        <div className="col-span-3">
          <SecondMessage
            topIcon={
              "/public/Pilar Outreach Foundation Images/output-onlinegiftools (18).gif"
            }
            topTitle={"GOAL"}
            topMsg={msg[1]}
          ></SecondMessage>
        </div>
        <div className="col-span-3">
          <SecondMessage
            topIcon={
              "/public/Pilar Outreach Foundation Images/output-onlinegiftools (19).gif"
            }
            topTitle={"VISION"}
            topMsg={msg[2]}
          ></SecondMessage>
        </div>
        <div className="col-span-3">
          <SecondMessage
            topIcon={
              "/public/Pilar Outreach Foundation Images/output-onlinegiftools (20).gif"
            }
            topTitle={"MISSION"}
            topMsg={msg[3]}
          ></SecondMessage>
        </div>
      </div>
    </>
  );
};

export default Allmessage;
