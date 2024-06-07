import React from "react";
import classNames from "classnames";
import styles from "./Project.module.css";
import Project from "./Project";

const ProjectActivities = () => {
  return (
    <div className={styles.ProjectActivities}>
      <Project></Project>

      <div className="container mx-auto grid grid-cols-12 gap-4 mt-10">
        <div className={classNames("col-span-3", styles.hoverEffect)}>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h1 className="font-bold text-5xl">Lorem</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eaque
              sunt qui? Ut totam similique quisquam cupiditate assumenda veniam,
              accusantium asperiores laborum, dolorum nihil laboriosam iure, vel
              facere quo maiores?
            </p>
            <div
              className={classNames(
                "bg-[#A24281] text-white py-2",
                styles.readMore
              )}
            >
              <a href="#">
                <p>
                  Read More{" "}
                  <i
                    className="fa-solid fa-arrow-right px-2"
                    style={{ color: "white" }}
                  ></i>
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className={classNames("col-span-3", styles.hoverEffect)}>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h1 className="font-bold text-5xl">Lorem</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eaque
              sunt qui? Ut totam similique quisquam cupiditate assumenda veniam,
              accusantium asperiores laborum, dolorum nihil laboriosam iure, vel
              facere quo maiores?
            </p>
            <div
              className={classNames(
                "bg-[#A24281] text-white py-2",
                styles.readMore
              )}
            >
              <a href="#">
                <p>
                  Read More{" "}
                  <i
                    className="fa-solid fa-arrow-right px-2"
                    style={{ color: "white" }}
                  ></i>
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className={classNames("col-span-3", styles.hoverEffect)}>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h1 className="font-bold text-5xl">Lorem</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eaque
              sunt qui? Ut totam similique quisquam cupiditate assumenda veniam,
              accusantium asperiores laborum, dolorum nihil laboriosam iure, vel
              facere quo maiores?
            </p>
            <div
              className={classNames(
                "bg-[#A24281] text-white py-2",
                styles.readMore
              )}
            >
              <a href="#">
                <p>
                  Read More{" "}
                  <i
                    className="fa-solid fa-arrow-right px-2"
                    style={{ color: "white" }}
                  ></i>
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className={classNames("col-span-3", styles.hoverEffect)}>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <h1 className="font-bold text-5xl">Lorem</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab eaque
              sunt qui? Ut totam similique quisquam cupiditate assumenda veniam,
              accusantium asperiores laborum, dolorum nihil laboriosam iure, vel
              facere quo maiores?
            </p>
            <div
              className={classNames(
                "bg-[#A24281] text-white py-2",
                styles.readMore
              )}
            >
              <a href="#">
                <p>
                  Read More{" "}
                  <i
                    className="fa-solid fa-arrow-right px-2"
                    style={{ color: "white" }}
                  ></i>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectActivities;
