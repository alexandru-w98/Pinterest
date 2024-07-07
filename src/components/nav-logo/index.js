import React from "react";
import * as styles from "./nav-logo.module.css";
import withPopover from "../../hocs/with-popover";
import NavLogoPopover from "./nav-logo-popover";
import BurgerMenu from "../burger-menu";

const NavLogo = ({ className, isClicked }) => {
  return (
    <div className={className}>
      <BurgerMenu isClicked={isClicked} />
    </div>
  );
};

export default withPopover(NavLogoPopover, {
  className: styles["logo-popover"],
  hasBackground: true,
})(NavLogo);
