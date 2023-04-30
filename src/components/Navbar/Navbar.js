import React, { useState, useEffect } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleLinkClick = (event, target) => {
    event.preventDefault();
    const navbarHeight = document.querySelector(".Navbar").offsetHeight;
    const element = document.querySelector(target);
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const navbar = document.querySelector(".Navbar");
    const navbarHeight = navbar.offsetHeight;
    document.documentElement.style.setProperty(
      "--navbar-height",
      `${navbarHeight}px`
    );
  }, []);

  return (
    <nav className="Navbar">
      <a className="Navbar__a--home" href="#hero" onClick={(event) => handleLinkClick(event, "#hero")}>
        Johnny Hall <span className="separator">|</span> Software Developer
      </a>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a
              href="#about"
              onClick={(event) => {
                handleLinkClick(event, "#about");
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={(event) => {
                handleLinkClick(event, "#skills");
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={(event) => {
                handleLinkClick(event, "#projects");
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={(event) => {
                handleLinkClick(event, "#contact");
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <button
        className="hamburger"
        id="burger-menu"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <i className="fa-solid fa-bars bars here" name="menu-outline"></i>
      </button>
    </nav>
  );
};
