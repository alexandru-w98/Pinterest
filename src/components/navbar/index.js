import React, { useEffect, useState } from "react";
import BurgerMenu from "../burger-menu";
import classNames from "classnames";
import SearchBar from "../search-bar";
import * as styles from "./navbar.module.css";
import { Bell, CaretDown, Message } from "../../icons";

const Navbar = ({ className }) => {
  const [scrollY, setScrollY] = useState(0);

  const containerClasses = classNames(className, {
    [styles["navbar"]]: true,
    [styles["navbar--sticky"]]: scrollY > 0,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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
