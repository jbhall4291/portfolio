import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact" className="Contact">
      <h2>Contact</h2>

      <p>
        If you have any questions, would like a copy of my CV, or are interested
        in collaborating on a project I’d love to hear from you! <br></br>Just
        fill in the form, or get in touch via LinkedIn, GitHub or email.
      </p>

      <div className="Contact__div--socials-container">
        <a
          href="https://www.linkedin.com/in/johnny-hall-dev"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://www.github.com/jbhall4291"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-github-square"></i>
        </a>

        <a href="mailto:jbhall4291@gmail.com">
          <i className="fa-solid fa-square-envelope"></i>
        </a>
      </div>

      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" name="message" rows="6" required></textarea>
        <div className="Form__form--input">
          <input className="submit" type="submit" value="Submit message" />
        </div>
      </form>
    </section>
  );
};
