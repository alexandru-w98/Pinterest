import React from "react";
import BurgerMenu from "../burger-menu";
import classNames from "classnames";

const Navbar = ({ className }) => {
  const containerClasses = classNames(className);

  return (
    <div className={containerClasses}>
      <BurgerMenu />
    </div>
  );
};

export default Navbar;
