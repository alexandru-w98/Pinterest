import React from "react";
import { map, prop, pipe } from "ramda";
import * as styles from "./section-list.module.css";

const SectionList = ({ data = [] }) => {
  const getSubSectionItemJsx = (subSection) =>
    pipe(
      prop("subSectionItems"),
      map((item) => {
        const status = prop("status")(item);

        return (
          <div className={styles["item"]}>
            <div className={styles["item__title"]}>
              {prop("itemTitle")(item)}
            </div>
            {status && <span className={styles["item__status"]}>{status}</span>}
          </div>
        );
      })
    )(subSection);

  const getSubSectionJsx = (section) =>
    pipe(
      prop("sectionItems"),
      map((subSection) => {
        const title = prop("subSectionTitle")(subSection);

        return (
          <div className={styles["subsection"]}>
            {title && (
              <div className={styles["subsection__title"]}>{title}</div>
            )}
            <div className={styles["items"]}>
              {getSubSectionItemJsx(subSection)}
            </div>
          </div>
        );
      })
    )(section);

  const sectionJsx = map((section) => {
    const title = prop("sectionTitle")(section);

    return (
      <div className={styles["section"]}>
        {title && <div className={styles["section__title"]}>{title}</div>}
        <div className={styles["subsections"]}>{getSubSectionJsx(section)}</div>
      </div>
    );
  })(data);

  return <div className={styles["sections"]}>{sectionJsx}</div>;
};

export default SectionList;
