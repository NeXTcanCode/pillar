import React from "react";
import ProjectImg from "../../Component/ProjectImg";

const ProjectCarousel = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-3">
          <ProjectImg></ProjectImg>
        </div>
        <div className="col-span-3">
          <ProjectImg></ProjectImg>
        </div>
        <div className="col-span-3">
          <ProjectImg></ProjectImg>
        </div>
        <div className="col-span-3">
          <ProjectImg></ProjectImg>
        </div>
      </div>
    </>
  );
};

export default ProjectCarousel;
