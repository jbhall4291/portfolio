import React from "react";
import "./Navbar.css";

export const Navbar = () => {
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

  return (
    <nav className="Navbar">
      <ul className="Navbar__ul">
        <li>
          <a
            href="#about"
            onClick={(event) => handleLinkClick(event, "#about")}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            onClick={(event) => handleLinkClick(event, "#skills")}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            onClick={(event) => handleLinkClick(event, "#projects")}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={(event) => handleLinkClick(event, "#contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
