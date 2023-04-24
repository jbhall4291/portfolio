import React from "react";

import "./Form.css";

export const Form = () => {
  return (
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
  );
};
