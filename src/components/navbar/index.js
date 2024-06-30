import React from "react";
import BurgerMenu from "../burger-menu";
import classNames from "classnames";
import SearchBar from "../search-bar";
import * as styles from "./navbar.module.css";
import { Bell, CaretDown, Message } from "../../icons";

const Navbar = ({ className }) => {
  const containerClasses = classNames(styles["navbar"], className);

  return (
    <div className={containerClasses}>
      <BurgerMenu className={styles["burger-menu"]} />
      <SearchBar className={styles["search"]} />
      <div className={styles["nav-btn"]}>
        <Bell />
      </div>
      <div className={styles["nav-btn"]}>
        <Message />
      </div>
      <div className={styles["profile-container"]}>
        <div className={styles["profile"]}>A</div>
      </div>
      <div className={styles["settings-btn"]}>
        <CaretDown />
      </div>
    </div>
  );
};

export default Navbar;
