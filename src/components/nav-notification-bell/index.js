import React from "react";
import { Bell } from "../../icons";
import withPopover from "../../hocs/with-popover";
import BellPopover from "./nav-bell-popover";

const NavNotificationBell = ({ className }) => {
  return (
    <div className={className}>
      <Bell />
    </div>
  );
};

export default withPopover(BellPopover)(NavNotificationBell);
