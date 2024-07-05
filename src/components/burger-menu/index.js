import React from "react";
import { Logo, BurgerMenu as BurgerMenuIcon } from "../../icons";
import * as styles from "./burger-menu.module.css";
import classNames from "classnames";

const BurgerMenu = ({ className, isClicked }) => {
  const containerClasses = classNames(className, {
    [styles["container"]]: true,
    [styles["clicked"]]: isClicked,
  });

  return (
    <div className={containerClasses}>
      <Logo />
      <span className={styles["menu__text"]}>Pinterest</span>
      <BurgerMenuIcon className={styles["menu__burger-icon"]} />
    </div>
  );
};

export default BurgerMenu;
