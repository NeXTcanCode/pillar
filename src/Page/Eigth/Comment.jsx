import React from "react";
import Testimonial from "../../Component/Testimonial";
import styles from "./Eigth.module.css";
import classNames from "classnames";
import LeftPart from "./LeftPart";

const Comment = () => {
  return (
    <div className={styles.bgPageEight}>
      <div
        className={classNames(
          "container mx-auto grid grid-cols-12 bgComment space-x-4 mt-1 ",
          styles.bgTEST
        )}
      >
        <div className="col-span-3">
          <LeftPart></LeftPart>
        </div>
        <div className="col-span-3">
          <Testimonial></Testimonial>
        </div>
        <div className="col-span-3">
          <Testimonial></Testimonial>
        </div>
        <div className="col-span-3">
          <Testimonial></Testimonial>
        </div>
      </div>
    </div>
  );
};

export default Comment;
