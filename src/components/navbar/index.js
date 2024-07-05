import React, { useEffect, useState } from "react";
import classNames from "classnames";
import SearchBar from "../search-bar";
import * as styles from "./navbar.module.css";
import { CaretDown } from "../../icons";
import NavNotificationBell from "../nav-notification-bell";
import NavMessageButton from "../nav-message-button";
import NavLogo from "../nav-logo";

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
        <NavLogo className={styles["burger-menu"]} />
        <SearchBar className={styles["search"]} />
        <NavNotificationBell className={styles["nav-btn"]} />
        <NavMessageButton className={styles["nav-btn"]} />
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
