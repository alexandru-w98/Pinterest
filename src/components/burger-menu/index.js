import React from "react";
import { Logo, BurgerMenu as BurgerMenuIcon } from "../../icons";
import * as styles from "./burger-menu.module.css";

const BurgerMenu = () => {
  return (
    <div className={styles["container"]}>
      <Logo />
      <span>Flux principal</span>
      <BurgerMenuIcon />
    </div>
  );
};

export default BurgerMenu;
