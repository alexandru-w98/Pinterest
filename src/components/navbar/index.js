import React, { useEffect, useState } from "react";
import BurgerMenu from "../burger-menu";
import classNames from "classnames";
import SearchBar from "../search-bar";
import * as styles from "./navbar.module.css";
import { CaretDown, Message } from "../../icons";
import NavNotificationBell from "../nav-notification-bell";

const Navbar = ({ className }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isBackgroundActive, setIsBackgroundActive] = useState(false);

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
      {isBackgroundActive && <div className={styles["background"]} />}
      <div className={styles["content"]}>
        <BurgerMenu className={styles["burger-menu"]} />
        <SearchBar className={styles["search"]} />
        <NavNotificationBell className={styles["nav-btn"]} />
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
    </div>
  );
};

export default Navbar;
