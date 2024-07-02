import React from "react";
import * as styles from "./nav-bell-popover.module.css";
import { Dots, X } from "../../icons";

const BellPopover = () => {
  return (
    <div className={styles["popover"]}>
      <div className={styles["popover__title"]}>Updates</div>
      <div className={styles["popover__subtitle"]}>Seen</div>
      <div className={styles["popover__content"]}>
        <div className={styles["popover__item"]}>
          <div className={styles["popover__text"]}>
            Still searching? Explore ideas related to{" "}
            <span className={styles["text--bold"]}>Clothes Men Dark</span>
          </div>
          <div className={styles["popover__item__info"]}>
            <div className={styles["popover__date"]}>1d</div>
            <div className={styles["popover__more"]}>
              <Dots />
            </div>
          </div>
        </div>
        <div className={styles["popover__item"]}>
          <div className={styles["popover__text"]}>
            Still searching? Explore ideas related to{" "}
            <span className={styles["text--bold"]}>
              Men Outfit Black Streetwear
            </span>
          </div>
          <div className={styles["popover__item__info"]}>
            <div className={styles["popover__date"]}>1d</div>
            <div className={styles["popover__more"]}>
              <Dots />
            </div>
          </div>
        </div>
        <div className={styles["popover__item"]}>
          <div className={styles["popover__text"]}>
            Still searching? Explore ideas related to{" "}
            <span className={styles["text--bold"]}>Men Outfit</span>
          </div>
          <div className={styles["popover__item__info"]}>
            <div className={styles["popover__date"]}>1d</div>
            <div className={styles["popover__more"]}>
              <Dots />
            </div>
          </div>
        </div>
        <div className={styles["popover__item"]}>
          <div className={styles["popover__add-container"]}>
            <X />
          </div>
          <div className={styles["popover__text"]}>
            What ideas feel so Alex? Create your first Pin to share what
            inspires you.
          </div>
          <div className={styles["popover__item__info"]}>
            <div className={styles["popover__date"]}>1d</div>
            <div className={styles["popover__more"]}>
              <Dots />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BellPopover;
