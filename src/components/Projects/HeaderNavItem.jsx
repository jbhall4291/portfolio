import React from "react";
import { Link } from "react-router-dom";

function HeaderNavItem({ text, currentPath, goToPath }) {
  return (
    <li
      className={`hover:text-highlight ${
        currentPath === goToPath ? "text-highlight" : ""
      }`}
    >
      <Link to={goToPath}>{text}</Link>
    </li>
  );
}

export default HeaderNavItem;
