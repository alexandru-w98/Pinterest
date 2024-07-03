import React from "react";
import { Message } from "../../icons";
import classNames from "classnames";
import * as styles from "./nav-message-button.module.css";
import withPopover from "../../hocs/with-popover";
import NavMessagePopover from "./nav-message-popover";

const NavMessageButton = ({ className, isClicked }) => {
  const containerClasses = classNames(className, {
    [styles["clicked"]]: isClicked,
  });

  return (
    <div className={containerClasses}>
      <Message className={styles["icon"]} />
    </div>
  );
};

export default withPopover(NavMessagePopover)(NavMessageButton);
