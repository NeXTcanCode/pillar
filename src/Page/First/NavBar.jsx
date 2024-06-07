import React from "react";
import styles from "./First.module.css";
import classNames from "classnames";
const NavBar = () => {
  return (
    <>
      <div className="flex justify-evenly ">
        <div>
          <img
            src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Pilar outreach Logo 1.png"
            alt=""
            className={classNames("w-[450px] h-[84px]")}
          />
        </div>
        <div className="flex justify-between gap-4 mt-8">
          <div>
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1341.png"
              alt=""
              className={classNames("w-[53px] h-[22px]", styles.NavHoverup)}
            />
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1748.png"
              alt=""
              className="w-[53px] h-[22px]"
            />
          </div>
          <div>
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1344.png"
              alt=""
              className={classNames("w-[72px] h-[22px]", styles.NavHoverup)}
            />
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1750.png"
              alt=""
              className="w-[72px] h-[22px]"
            />
          </div>
          <div>
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1345.png"
              alt=""
              className={classNames("w-[160px] h-[22px]", styles.NavHoverup)}
            />
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1752.png"
              alt=""
              className="w-[160px] h-[22px]"
            />
          </div>
          <div>
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1347.png"
              alt=""
              className={classNames("w-[105px] h-[22px]", styles.NavHoverup)}
            />
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1754.png"
              alt=""
              className="w-[105px] h-[22px]"
            />
          </div>
          <div>
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1349.png"
              alt=""
              className={classNames("w-[91px] h-[22px]", styles.NavHoverup)}
            />
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1756.png"
              alt=""
              className="w-[91px] h-[22px]"
            />
          </div>
          <div>
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1757.png"
              alt=""
              className={classNames("w-[96px] h-[22px]", styles.NavHoverup)}
            />
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1758.png"
              alt=""
              className="w-[96px] h-[22px]"
            />
          </div>
          <div>
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1759.png"
              alt=""
              className={classNames("w-[65px] h-[22px]", styles.NavHoverup)}
            />
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1760.png"
              alt=""
              className="w-[65px] h-[22px]"
            />
          </div>
          <div>
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1761.png"
              alt=""
              className={classNames("w-[90px] h-[22px]", styles.NavHoverup)}
            />
            <img
              src="/public/Pilar Outreach Foundation Images/Pilar Outreach Foundation/Group 1762.png"
              alt=""
              className="w-[90px] h-[22px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
