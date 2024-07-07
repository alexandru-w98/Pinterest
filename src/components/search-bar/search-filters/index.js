import React from "react";
import { CaretDown } from "../../../icons";
import * as styles from "./search-filters.module.css";
import SearchFiltersPopover from "./search-filters-popover";
import withPopover from "../../../hocs/with-popover";
import { CURRENT_VALUE } from "./mock-data";

const SearchFilters = () => {
  return (
    <div className={styles["filters"]}>
      <span>{CURRENT_VALUE}</span>
      <CaretDown />
    </div>
  );
};

export default withPopover(SearchFiltersPopover, {
  className: styles["filters-popover"],
})(SearchFilters);
