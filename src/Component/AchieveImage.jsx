import React from "react";
import styles from "./Common.module.css";

const AchieveImage = () => {
  return (
    <div className={styles.achieveBG}>
      <div className={styles.backgroundImage}></div>
      <img
        src="/public/Pilar Outreach Foundation Images/Rectangle 592.png"
        alt=""
        className="w-[299px] h-[205px]"
      />
    </div>
  );
};

export default AchieveImage;
