import React from "react";
import styles from "../../Component/Common.module.css";
import AchieveCarousel from "./AchieveCarousel";
import Button from "../../Component/Button";
import style from "./Achieve.module.css";

const Achievements = () => {
  return (
    <div className={style.bgPageFive}>
      <div className="container mx-auto grid grid-cols-12 mt-10">
        <div className="col-span-12 flex justify-center items-center text-center">
          <div>
            <span className="text-6xl font-neue text-black">O</span>
          </div>
          <div className="mt-2">
            <div className={styles.bgLineSMALL}></div>
            <p>
              <span className="text-2xl text-black">UR</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12 flex justify-center space-x-2">
          <img
            src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/toppng 1.png"
            alt=""
            className="w-[96px] h-[73px] -mt-8"
          />
          <h1 className="font-neue text-3xl mt-1">Achievements</h1>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-2"></div>
        <div className="col-span-6">
          <AchieveCarousel></AchieveCarousel>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-1">
          <img
            src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/pngwing 7.png"
            alt=""
            className="w-[116px] h-[240px]"
          />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12 flex justify-center ">
          <Button text={"VIEW ALL"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
