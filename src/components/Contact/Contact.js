import React from "react";
import "./Contact.css";
import { Form } from "../Form/Form";

export const Contact = () => {
  return (
    <section id="contact" className="Contact">
      <h1>Contact</h1>
      <div className="Contact__div--container">
        <div className="contact-left">
          <Form />
        </div>
        <div className="contact-right">
          <p>
            If you have any questions, would like a copy of my resume, or are
            interested in collaborating on a project I’d love to hear from you!
            Fill in the form, or get in touch via LinkedIn, GitHub or good old
            fashioned email.
          </p>
          <i className="fa-brands fa-linkedin">
            <a
              href="https://www.linkedin.com/in/johnny-hall-dev"
              target="_blank"
              rel="noreferrer"
            ></a>
          </i>

          <i className="fa fa-github-square">
            <a
              href="https://www.github.com/jbhall4291"
              target="_blank"
              rel="noreferrer"
            ></a>
          </i>
          <i className="fa-solid fa-square-envelope">
            <a href="mailto:jbhall4291@gmail.com"></a>
          </i>
        </div>
      </div>
    </section>
  );
};
