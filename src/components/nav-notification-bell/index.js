import React from "react";
import { Bell } from "../../icons";
import withPopover from "../../hocs/with-popover";
import BellPopover from "./nav-bell-popover";
import classNames from "classnames";
import * as styles from "./nav-notification-bell.module.css";

const NavNotificationBell = ({ className, isClicked }) => {
  const containerClasses = classNames(className, {
    [styles["clicked"]]: isClicked,
  });

  return (
    <div className={containerClasses}>
      <Bell className={styles["icon"]} />
    </div>
  );
};

export default withPopover(BellPopover)(NavNotificationBell);
