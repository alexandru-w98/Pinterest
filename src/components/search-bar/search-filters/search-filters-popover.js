import React, { useState } from "react";
import * as styles from "./search-filters-popover.module.css";
import { map } from "ramda";
import { CURRENT_VALUE, VALUES } from "./mock-data";
import classNames from "classnames";

const SearchFiltersPopover = () => {
  const [hoveredItem, setHoveredItem] = useState(CURRENT_VALUE);

  const onItemHovered = (item) => () => {
    setHoveredItem(item);
  };

  const items = map((item) => {
    const itemClassNames = classNames(styles["item"], {
      [styles["item--hovered"]]: hoveredItem === item,
    });

    return (
      <div className={itemClassNames} onMouseEnter={onItemHovered(item)}>
        {item}
      </div>
    );
  })(VALUES);

  return <div className={styles["popover"]}>{items}</div>;
};

export default SearchFiltersPopover;
