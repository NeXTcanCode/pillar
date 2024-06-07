import React from "react";
import styles from "../../Component/Common.module.css";
const GalleyLogo = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-12 flex justify-center items-center text-center">
          <div>
            <span className="text-6xl font-neue text-black">G</span>
          </div>

          <div className="mt-2">
            <img
              src="/public/Pilar Outreach Foundation Images/photos.gif"
              alt=""
              className="w-[40px] h-[40px] mx-8"
            />
            <div className={styles.bgLineProject}></div>
            <p>
              <span className="text-2xl text-black">ALLERY</span>
            </p>
          </div>
        </div>
        <div className="col-span-12 flex justify-center items-center text-center">
          <p>
            <span className="text-2xl text-black">SECTION</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default GalleyLogo;
