import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import HeaderNavItem from "./Projects/HeaderNavItem";

function Header() {
  const currentPath = useLocation().pathname;

  return (
    <header
      className="fixed top-0 z-10 grid w-screen grid-cols-1  bg-white lg:grid-cols-[auto_1fr] lg:px-6"
      id="header"
    >
      <div className="flex justify-center  p-4 py-1 text-xl text-myTheme hover:text-highlight md:py-2">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-highlight" : ""
          }
        >
          <b>Johnny Hall : Software Developer</b>
        </NavLink>
      </div>

      <nav className="col-span-2 flex justify-center   text-myTheme hover:text-highlight lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:justify-end ">
        <ul className="flex gap-7 py-1.5 pt-0 text-lg text-myTheme  sm:gap-10  sm:p-2 md:gap-20 ">
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
            text="About"
            goToPath="/about"
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
