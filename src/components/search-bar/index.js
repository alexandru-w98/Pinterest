import React, { useState } from "react";
import { CaretDown, X } from "../../icons";
import * as styles from "./search-bar.module.css";
import classNames from "classnames";

const SearchBar = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const searchClasses = classNames(className, {
    [styles["container"]]: true,
    [styles["container--hovered"]]: isHovered,
  });

  const onContainerMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };

  const onContainerMouseLeave = () => {
    if (isHovered) {
      setIsHovered(false);
    }
  };

  return (
    <div className={searchClasses}>
      <div
        onMouseEnter={onContainerMouseEnter}
        onMouseLeave={onContainerMouseLeave}
        className={styles["input-wrapper"]}
      >
        <div className={styles["input-container"]}>
          <input className={styles["input"]} />
          <div className={styles["close-container"]}>
            <X />
          </div>
        </div>
      </div>
      <div className={styles["input__filters"]}>
        <span>All Pins</span>
        <CaretDown />
      </div>
    </div>
  );
};

export default SearchBar;
