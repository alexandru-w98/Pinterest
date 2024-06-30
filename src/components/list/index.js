import React from "react";
import Large from "../../../public/assets/large.jpg";
import Medium from "../../../public/assets/medium.jpg";
import Small from "../../../public/assets/small.jpg";
import * as styles from "./list.module.css";
import PinCard from "../pin-card";
import classNames from "classnames";

const List = ({ className }) => {
  const containerClasses = classNames(styles["container"], className);

  return (
    <div className={containerClasses}>
      <div className={styles["list"]}>
        <PinCard src={Large} className={styles["pin-card"]} />
        <PinCard src={Medium} className={styles["pin-card"]} />
        <PinCard src={Small} className={styles["pin-card"]} />
        <PinCard src={Small} className={styles["pin-card"]} />
        <PinCard src={Medium} className={styles["pin-card"]} />
        <PinCard src={Large} className={styles["pin-card"]} />
        <PinCard src={Large} className={styles["pin-card"]} />
        <PinCard src={Medium} className={styles["pin-card"]} />
        <PinCard src={Small} className={styles["pin-card"]} />
        <PinCard src={Large} className={styles["pin-card"]} />
        <PinCard src={Large} className={styles["pin-card"]} />
        <PinCard src={Medium} className={styles["pin-card"]} />
        <PinCard src={Small} className={styles["pin-card"]} />
        <PinCard src={Small} className={styles["pin-card"]} />
        <PinCard src={Medium} className={styles["pin-card"]} />
        <PinCard src={Large} className={styles["pin-card"]} />
        <PinCard src={Large} className={styles["pin-card"]} />
        <PinCard src={Medium} className={styles["pin-card"]} />
        <PinCard src={Small} className={styles["pin-card"]} />
        <PinCard src={Large} className={styles["pin-card"]} />
      </div>
    </div>
  );
};

export default List;
