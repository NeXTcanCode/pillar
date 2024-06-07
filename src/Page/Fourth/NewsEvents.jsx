import React from "react";
import styles from "../../Component/Common.module.css";
import NewsText from "./NewsText";
// import NewsImg from "../../Component/NewsImg";
import style from "./Fourth.module.css";

const NewsEvents = () => {
  return (
    <div className={style.bgPageFour}>
      <div className="container mx-auto grid grid-cols-12 mt-10">
        <div className="col-span-12 flex justify-center items-center text-center">
          <NewsText></NewsText>
          <div className="flex flex-col items-center text-center">
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/envelope (1) 1.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className={styles.bgLineBIG}></div>
            <p>
              <span className="text-black text-3xl">EWS</span>{" "}
              <span className="text-black text-3xl">&</span>{" "}
              <span className="text-black text-3xl">EVENTS</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-4 my-4">
        <div className="col-span-3">
          <img
            src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1739.png"
            alt="largeFramePng"
          />
        </div>
        <div className="col-span-3">
          <img
            src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1739.png"
            alt="largeFramePng"
          />
        </div>
        <div className="col-span-3">
          <img
            src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1739.png"
            alt="largeFramePng"
          />
        </div>
        <div className="col-span-3">
          <img
            src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1739.png"
            alt="largeFramePng"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
