import React from "react";
import styles from "./Common.module.css";
const SecondMessage = ({ topIcon, topTitle, topMsg }) => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12 ">
        <div className="col-span-12 flex flex-col items-center mt-20">
          <img src={topIcon} alt="" className="w-[59px] h-[59px]" />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12 ">
        <div className="col-span-12 flex flex-col items-center my-4">
          <div className={styles.bgLine}></div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12 flex flex-col items-center">
          <p className="font-neue font-normal">OUR {topTitle}</p>
          {/* use custom google font */}
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12 flex flex-col items-center text-center my-2">
          <p className="font-thin leading-6 font-outfit_reg">{topMsg}</p>
          {/* use custom google font */}
        </div>
      </div>
    </>
  );
};

export default SecondMessage;
