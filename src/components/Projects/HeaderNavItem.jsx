import React from "react";
import { NavLink } from "react-router-dom";

function HeaderNavItem({ text, currentPath, goToPath }) {
  return (
    <li className=" text-myTheme hover:text-highlight text-xl">
      <NavLink
        to={goToPath}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-highlight" : ""
        }
      >
        {text}
      </NavLink>
    </li>
  );
}

export default HeaderNavItem;
