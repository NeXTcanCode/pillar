import React from "react";
import Button from "../../Component/Button";
import Middle from "./Middle";
import styles from "./Third.module.css";
const Volunteer = () => {
  return (
    <div className={styles.bgPageThird}>
      <div className="container mx-auto grid grid-cols-12 mt-10">
        <div className="col-span-4 flex flex-col items-center text-center">
          <div className="flex justify-center items-center mt-7">
            <h1 className="text-4xl font-semibold">
              <span className="text-gray-700 font-neue font-light">
                How to be a
              </span>
              <p className="text-green-900 font-neue font-extrabold">
                {" "}
                Volunteer
              </p>
            </h1>
          </div>
          <img
            src="/public/Pilar Outreach Foundation Images/Animation - 1717501932602.gif"
            alt=""
            className="h-[111px] w-[105px] my-6"
          />
          <Button text={"Read More"}></Button>
        </div>
        <div className="col-span-4 flex flex-col items-center">
          <Middle></Middle>
        </div>
        <div className="col-span-4 flex flex-col items-center text-center">
          <div className="flex justify-center items-center mt-14">
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/image 5.png"
              alt="rupee"
              className="w-[212px] h-[207px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
