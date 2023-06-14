import React from "react";
import { NavLink } from "react-router-dom";

function HeaderNavItem({ text, currentPath, goToPath }) {
  return (
    <li className=" text-myTheme hover:text-highlight text-xl">
      <b><NavLink
        to={goToPath}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-highlight" : ""
        }
      >
        {text}
      </NavLink></b>
    </li>
  );
}

export default HeaderNavItem;
