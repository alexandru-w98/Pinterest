import React, { useState } from "react";
import * as styles from "./pin-card.module.css";
import classNames from "classnames";
import ProfileImg from "../../../public/assets/profile-img.jpg";
import { ArrowTopRight, Dots, Download } from "../../icons";

const PinCard = ({ src, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardClasses = classNames(className, styles["container"]);

  const onMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };

  const onMouseLeave = () => {
    if (isHovered) {
      setIsHovered(false);
    }
  };

  return (
    <div
      className={cardClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles["card"]}>
        <img className={styles["card__img"]} src={src} />
        {isHovered && (
          <div className={styles["card__overlay"]}>
            <button className={styles["overlay__top-btn"]}>Save</button>
            <div className={styles["overlay__bottom-btns"]}>
              <button className={styles["overlay__bottom-btns--left"]}>
                <ArrowTopRight />
                <span className={styles["overlay__bottom-btns--left-text"]}>
                  photocircle.net
                </span>
              </button>
              <div className={styles["overlay__bottom-btns--right"]}>
                <button className={styles["button--bottom"]}>
                  <Download />
                </button>
                <button className={styles["button--bottom"]}>
                  <Dots />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <span className={styles["card__description"]}>lyra | color palette</span>
      <a href="#" className={styles["profile"]}>
        <div className={styles["profile__img-container"]}>
          <img className={styles["profile__img"]} src={ProfileImg} />
        </div>
        <span className={styles["profile__name"]}>Lucian Rabacu</span>
      </a>
    </div>
  );
};

export default PinCard;
