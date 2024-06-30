import React from "react";
import { Logo, BurgerMenu as BurgerMenuIcon } from "../../icons";
import * as styles from "./burger-menu.module.css";
import classNames from "classnames";

const BurgerMenu = ({ className }) => {
  const containerClasses = classNames(styles["container"], className);

  return (
    <div className={containerClasses}>
      <Logo />
      <span>Home Feed</span>
      <BurgerMenuIcon />
    </div>
  );
};

export default BurgerMenu;
