import React from "react";
import Col1 from "./Col1";
import Col2 from "./Col2";
import Col3 from "./Col3";
import styles from "./Nine.module.css";
const NinePage = () => {
  return (
    <div className={styles.bgPageNine}>
      <div className="container mx-auto grid grid-cols-12 gap-2 mt-10">
        <div className="col-span-3">
          <Col1></Col1>
        </div>
        <div className="col-span-6">
          <Col2></Col2>
        </div>
        <div className="col-3">
          <Col3></Col3>
        </div>
      </div>
    </div>
  );
};

export default NinePage;
