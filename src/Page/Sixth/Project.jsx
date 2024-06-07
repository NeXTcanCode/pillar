import React from "react";
import styles from "../../Component/Common.module.css";
import ProjectIMG from "./ProjectCarousel";
import ProjectCarousel from "./ProjectCarousel";
const Project = () => {
  return (
    <div className={styles.bgPageFour}>
      <div className="container mx-auto grid grid-cols-12 my-10">
        <div className="col-span-12 flex justify-center items-center text-center">
          <div>
            <span className="text-6xl font-neue text-black">P</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/society 1.png"
              alt=""
              className="w-[47px] h-[47px]"
            />
            <div className={styles.bgLineProject}></div>
            <p>
              <span className="text-black text-3xl">ROJECT</span>
            </p>
          </div>
        </div>
      </div>

      <ProjectCarousel></ProjectCarousel>
    </div>
  );
};

export default Project;
