import React from "react";
import "./Contact.css";
import { Form } from "../Form/Form";

export const Contact = () => {
  return (
    <section id="contact" className="Contact">
      <h2>Contact</h2>
      <div className="Contact__div--container">
        <div className="Contact__div--contact-form-container">
          <Form />
        </div>
        <div className="Contact__div--contact-text-and-socials-container">
          <p>
            If you have any questions, would like a copy of my CV, or are
            interested in collaborating on a project I’d love to hear from you!<br></br>
            <br></br>
            Fill in the form, or get in touch via LinkedIn, GitHub or email.
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
        </div>
      </div>
    </section>
  );
};
