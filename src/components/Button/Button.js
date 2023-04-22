import React from "react";
import "./Button.css";

export const Button = ({text, href}) => {
  return (
    <div className="Button__div" id="button-4">
      <div id="underline"></div>
      <a href={href} className="Button__a">{text}</a>
    </div>
  );
};
