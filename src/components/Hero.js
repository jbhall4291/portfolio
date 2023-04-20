import React from "react";
const profilePic = require("../images/profile-pic.jpg");

export const Hero = () => {
  return (
    <>
      <section className="Hero">
        <div className="Hero--image">
          <img src={profilePic} alt="johnny"></img>
        </div>
        <div className="Hero--text">
          <h1>Hi, I'm Johnny</h1>
          <h2>Full-Stack Software Developer</h2>
          <h4>I like building stuff, something about pizza and pugs</h4>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa fa-github-square"></i>
          <i className="fa-solid fa-square-envelope"></i>
        </div>
      </section>
      <div className="Hero__div--angled"></div>
    </>
  );
};
