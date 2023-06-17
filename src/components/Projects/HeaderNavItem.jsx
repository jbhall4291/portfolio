import React from "react";
import { NavLink } from "react-router-dom";

function HeaderNavItem({ text, currentPath, goToPath }) {
  return (
    <li className=" text-xl text-myTheme hover:text-highlight">
      <h2 className="text-sm font-bold smallIphone:text-xl">
        <NavLink
          to={goToPath}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-highlight" : ""
          }
        >
          {text}
        </NavLink>
      </h2>
    </li>
  );
}

export default HeaderNavItem;
