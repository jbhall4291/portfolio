import React from "react";
import "./ButtonFill.css";

export const ButtonFill = ({ text, href }) => {
  return (
    <a className="ButtonFill__a" href={href} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
};
