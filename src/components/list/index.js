// @ts-nocheck
import React from "react";
import Large from "../../../public/assets/large.jpg";
import Medium from "../../../public/assets/medium.jpg";
import Small from "../../../public/assets/small.jpg";
import * as styles from "./list.module.css";

const List = () => {
  const largeItem = (
    <div className={styles["item"]}>
      <img src={Large} />
    </div>
  );

  const mediumItem = (
    <div className={styles["item"]}>
      <img src={Medium} />
    </div>
  );

  const smallItem = (
    <div className={styles["item"]}>
      <img src={Small} />
    </div>
  );

  return (
    <div className={styles["container"]}>
      <div className={styles["list"]}>
        {[
          largeItem,
          smallItem,
          mediumItem,
          smallItem,
          largeItem,
          largeItem,
          smallItem,
          largeItem,
          smallItem,
        ]}
      </div>
    </div>
  );
};

export default List;
