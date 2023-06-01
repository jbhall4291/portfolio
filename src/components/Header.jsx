import React from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderNavItem from "./Projects/HeaderNavItem";

function Header() {
  const currentPath = useLocation().pathname;

  return (
    <header
      className="sticky top-0 grid grid-cols-1 bg-myTheme text-white md:grid-cols-[auto_1fr] md:px-6 "
      id="header"
    >
      <div className="flex justify-center bg-myTheme p-4 py-1 text-lg text-white hover:text-highlight md:py-2 ">
        <Link
          to="/"
          className={`hover:text-highlight ${
            currentPath === "/" ? "text-highlight" : ""
          }`}
        >
          Johnny Hall | Software Developer
        </Link>
      </div>

      <nav className="col-span-2 flex justify-center bg-myTheme  text-white md:col-start-2 md:col-end-3 md:row-start-1 md:justify-end ">
        <ul className="md:gap-18 flex gap-7 py-1.5 pt-0 text-lg text-white sm:gap-10 sm:p-2 ">
          <HeaderNavItem
            currentPath={currentPath}
            text="About"
            goToPath="/about"
          />

          <HeaderNavItem
            currentPath={currentPath}
            text="Skills"
            goToPath="/skills"
          />

          <HeaderNavItem
            currentPath={currentPath}
            text="Projects"
            goToPath="/projects"
          />

          <HeaderNavItem
            currentPath={currentPath}
            text="Contact"
            goToPath="/contact"
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
