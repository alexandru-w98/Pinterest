import React from "react";
import * as styles from "./nav-logo-popover.module.css";
import SectionList from "../section-list";
import mockData from "./mock-data";

const NavLogoPopover = () => {
  return (
    <div className={styles["popover"]}>
      <SectionList data={mockData} />
    </div>
  );
};

export default NavLogoPopover;
