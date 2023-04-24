import React from "react";
import "./ButtonFill.css";

export const ButtonFill = ({ text, href }) => {
  return (
    // <button className="Button__button--fill">
    //   <a href={href}>{text}</a>
    // </button>
    <a className="ButtonFill__a" href={href}>
      {text}
    </a>
  );
};
