import React from "react";
import styles from "./Second.module.css";
const Image = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-9">
          <img
            src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1382.png"
            alt=""
            className="w-[892px] h-[360px]"
          />
        </div>
        <div className="col-span-3">
          <div className={styles.msgContainer}>
            <div className="flex flex-col items-center">
              <p className="leading-7 p-8 text-white font-neue font-thin">
                THE PURPOSE OF LIFE IS NOT TO BE HAPPY. IT IS TO BE{" "}
                <span>USEFUL</span>, TO BE <span>HONORABLE</span>, TO BE{" "}
                <span>COMPASSIONATE</span>, TO HAVE IT MAKE SOME DIFFERENCE THAT
                YOU HAVE <span>LIVED AND LIVED WELL</span>.
              </p>

              <p className="text-white mx-10 font-neue font-light">
                -RALPH WALDO EMERSON
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
