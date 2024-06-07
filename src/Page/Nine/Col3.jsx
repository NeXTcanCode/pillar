import React from "react";
import styles from "./Nine.module.css";
const Col3 = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12  ">
        <div className={styles.bgSubscribe}>
          <div className="col-span-12 p-2 mb-1"></div>
          <p className="font-outfit_reg font-normal text-2xl text-center text-white">
            SUBSCRIBE NOW
          </p>
          <div className="col-span-12  items-center text-center">
            <input
              type="email"
              placeholder="Enter Your Mail ID"
              className="mw-auto mh-auto p-2"
            />
            <button className="bg-black">
              <p className="font-outfit_reg font-normal text-white p-2">
                SUBSCRIBE
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12 border-4  border-solid divide-white">
          {/* google map location api will come here */}
        </div>
      </div>
    </>
  );
};

export default Col3;
