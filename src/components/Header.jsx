import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const handleLinkClick = (event, target) => {
    event.preventDefault();
    //get the sticky header's height so it doesn't cover the content we scrolled to
    const navbarHeight = document.querySelector("#header").offsetHeight;
    const element = document.querySelector(target);
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header
      className="sticky top-0 grid grid-cols-1 bg-myTheme text-white md:px-6  md:grid-cols-[auto_1fr]"
      id="header"
    >
      <div className="flex justify-center bg-myTheme p-4 py-1 text-lg text-white hover:text-highlight md:py-2 ">
        {/* <a
          className="Navbar__a--home"
          href="#hero"
          onClick={(event) => handleLinkClick(event, "#hero")}
        >
          Johnny Hall | Software Developer
        </a> */}
        <Link to="/">Johnny Hall | Software Developer</Link>
      </div>

      <nav className="col-span-2 flex justify-center bg-myTheme  text-white md:col-start-2 md:col-end-3 md:row-start-1 md:justify-end ">
        <ul className="md:gap-18 flex gap-7 py-1.5 pt-0 text-lg text-white sm:gap-10 sm:p-2 ">
          <li className="hover:text-highlight">
            {/* <a
              href="#about"
              onClick={(event) => {
                handleLinkClick(event, "#about");
              }}
            >
              About
            </a> */}
            <Link to="/about">About</Link>
          </li>

          <li className="hover:text-highlight">
            {/* <a
              href="#skills"
              onClick={(event) => {
                handleLinkClick(event, "#skills");
              }}
            >
              Skills
            </a> */}
            <Link to="/skills">Skills</Link>
          </li>

          <li className="hover:text-highlight">
            {/* <a
              href="#projects"
              onClick={(event) => {
                handleLinkClick(event, "#projects");
              }}
            >
              Projects
            </a> */}
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-highlight">
            {/* <a
              href="#contact"
              onClick={(event) => {
                handleLinkClick(event, "#contact");
              }}
            >
              Contact
            </a> */}

            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
