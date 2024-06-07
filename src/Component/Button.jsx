import React from "react";
import styles from "./Common.module.css";
const Button = ({ text }) => {
  const right_direction = (
    <i
      className="fa-solid fa-arrow-right py-1"
      style={{ color: "#fcfcfc" }}
    ></i>
  );
  return (
    <>
      <div className={styles.buttonBg}>
        <a href="#">
          <div className="flex justify-center gap-4  py-3">
            <p className="text-white align-middle">{text}</p>
            {right_direction}
          </div>
        </a>
      </div>
    </>
  );
};

export default Button;
