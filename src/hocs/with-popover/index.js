import React, { useEffect, useRef, useState } from "react";
import * as styles from "./with-popover.module.css";
import useWindowDimensions from "../../hooks/use-window-dimensions";
import useClickOutside from "../../hooks/use-click-outside";
import classNames from "classnames";

const withPopover =
  (PopoverContent, { className, hasBackground } = {}) =>
  (WrappedComponent) => {
    const WithPopover = (props) => {
      const [isPopoverActive, setIsPopoverActive] = useState(false);
      const [popoverCoords, setPopoverCoords] = useState({
        left: 0,
        top: "100%",
      });
      const popoverRef = useRef(null);
      const elementRef = useRef(null);
      const containerRef = useRef(null);
      const { width } = useWindowDimensions();
      const popoverClasses = classNames(styles["popover"], className);

      const onWrapperClicked = () => {
        setIsPopoverActive((prev) => !prev);
      };

      const onBlurred = () => {
        setIsPopoverActive(false);
      };

      useClickOutside(containerRef, onBlurred);

      useEffect(() => {
        if (popoverRef.current && elementRef.current) {
          const elementPos = elementRef.current.getBoundingClientRect();

          const popoverWidth = popoverRef.current.offsetWidth;
          const popoverXRight =
            elementPos.x + (elementPos.width + popoverWidth) / 2;
          const popoverXLeft =
            elementPos.x + (elementPos.width - popoverWidth) / 2;

          if (popoverXRight > width - 10) {
            const updatedX = width - popoverWidth - elementPos.x - 10;
            setPopoverCoords({ left: updatedX, top: "100%" });
          } else if (popoverXLeft < 0) {
            const updatedX = -elementPos.x;
            setPopoverCoords({ left: updatedX, top: "100%" });
          } else {
            setPopoverCoords({
              left: -(popoverWidth - elementPos.width) / 2,
              top: "100%",
            });
          }
        }
      }, [popoverRef.current, elementRef.current, width, isPopoverActive]);

      return (
        <div className={styles["container"]} ref={containerRef}>
          <div onClick={onWrapperClicked} ref={elementRef}>
            <WrappedComponent {...props} isClicked={isPopoverActive} />
          </div>
          {isPopoverActive && (
            <>
              {hasBackground && (
                <div className={styles["popover__background"]}></div>
              )}
              <div
                className={popoverClasses}
                ref={popoverRef}
                style={{ left: popoverCoords.left, top: popoverCoords.top }}
              >
                <PopoverContent />
              </div>
            </>
          )}
        </div>
      );
    };

    return WithPopover;
  };

export default withPopover;
