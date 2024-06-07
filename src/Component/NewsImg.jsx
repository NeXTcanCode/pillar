import classNames from "classnames";
import React from "react";
import styles from "./Common.module.css";
const NewsImg = ({ img_src, text }) => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12">
          <div className={classNames(styles.newsBG)}>
            <img src={img_src} alt="" className="absolute max-w-90 max-h-70" />
          </div>
          <div>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsImg;
