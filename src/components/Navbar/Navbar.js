import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <section className="Navbar">
      <ul className="Navbar__ul">
        <a href="#about">about</a>
        <a href="#skills">skills</a>

        <li>projects</li>
        <li>challenges</li>
        <li>contact</li>
      </ul>
    </section>
  );
};
