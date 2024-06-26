import React from "react";
import { Logo, BurgerMenu as BurgerMenuIcon } from "../../icons";

const BurgerMenu = () => {
  return (
    <div>
      <Logo />
      <span>Flux Principal</span>
      <BurgerMenuIcon />
    </div>
  );
};

export default BurgerMenu;
