import React, { useState } from "react";
import { X } from "../../icons";
import * as styles from "./search-bar.module.css";
import classNames from "classnames";
import SearchFilters from "./search-filters";

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
      <SearchFilters className={styles["filters"]} />
    </div>
  );
};

export default SearchBar;
