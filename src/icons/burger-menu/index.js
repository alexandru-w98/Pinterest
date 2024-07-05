import React from "react";

const BurgerMenu = ({ fill = "inherit", className }) => {
  return (
    <svg
      height="12"
      role="img"
      viewBox="0 0 24 24"
      width="12"
      className={className}
      fill={fill}
    >
      <path d="M2.5 6.5h19A2.5 2.5 0 0 0 24 4a2.5 2.5 0 0 0-2.5-2.5h-19A2.5 2.5 0 0 0 0 4a2.5 2.5 0 0 0 2.5 2.5m19 3h-19A2.5 2.5 0 0 0 0 12a2.5 2.5 0 0 0 2.5 2.5h19A2.5 2.5 0 0 0 24 12a2.5 2.5 0 0 0-2.5-2.5M0 20a2.5 2.5 0 0 0 2.5 2.5h19A2.5 2.5 0 0 0 24 20a2.5 2.5 0 0 0-2.5-2.5h-19A2.5 2.5 0 0 0 0 20"></path>
    </svg>
  );
};

export default BurgerMenu;
