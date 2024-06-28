import React from "react";
import BurgerMenu from "../burger-menu";
import classNames from "classnames";
import SearchBar from "../search-bar";
import * as styles from "./navbar.module.css";

const Navbar = ({ className }) => {
  const containerClasses = classNames(styles["navbar"], className);

  return (
    <div className={containerClasses}>
      <BurgerMenu />
      <SearchBar className={styles["search"]} />
    </div>
  );
};

export default Navbar;
