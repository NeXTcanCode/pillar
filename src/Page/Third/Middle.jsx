import classNames from "classnames";
import React from "react";
import styles from "./Third.module.css";
import StateMap from "../../Component/StateMap";
import Button from "../../Component/Button";

const Middle = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12">
        <div
          className={classNames(
            "col-span-12 flex flex-col items-center text-center",
            styles.middleBg
          )}
        >
          <img
            src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/POF Logo 2.png"
            alt=""
            className="w-[82px] h-[79px] my-2"
          />
          <p className="font-neue font-bold text-2xl text-white my-1">
            PILAR OUTREACH FOUNDATION
          </p>
          <p className="font-neue font-bold text-2xl text-white">WELCOMES</p>
          <p className="font-outfit_reg font-light w-[455px] h-[69px] text-white my-2">
            Any individual who has a passion to bring a change and contribute to
            society. If you wish to get involved in our various projects running
            in:
          </p>
          <div className="grid grid-cols-12 gap-4 w-full my-4">
            <div className="col-span-3">
              <StateMap
                location={
                  "/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1396.png"
                }
                name={"Delhi"}
              />
            </div>
            <div className="col-span-3">
              <StateMap
                location={
                  "/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1395.png"
                }
                name={"Himachal Pradesh"}
              />
            </div>
            <div className="col-span-3">
              <StateMap
                location={
                  "/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1398.png"
                }
                name={"Punjab"}
              />
            </div>
            <div className="col-span-3">
              <StateMap
                location={
                  "/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1397.png"
                }
                name={"Haryana"}
              />
            </div>
          </div>
          <div className="col-span-12 flex flex-col items-center text-center">
            <p className="text-white my-1 font-outfit_reg font-medium">
              You can send your CV to
            </p>
          </div>
          <div className={classNames("my-1", styles.buttonBG)}>
            <a href="mailto:pilaroutreach@gmail.com">
              <p className="text-white font-outfit_reg font-medium">
                pilaroutreach@gmail.com
              </p>
            </a>
          </div>
          <div className="col-span-12">
            <p className="text-white font-outfit_reg font-medium my-2">
              and also mention the nature of help that you can offer
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle;
