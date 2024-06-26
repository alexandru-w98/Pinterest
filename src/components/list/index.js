import React from "react";
import Large from "../../../public/assets/large.jpg";
import * as styles from "./list.module.css";
import PinCard from "../pin-card";

const List = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["list"]}>
        <PinCard src={Large} className={styles["pin-card"]} />
      </div>
    </div>
  );
};

export default List;
