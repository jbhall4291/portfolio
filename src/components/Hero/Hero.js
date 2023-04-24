import React from "react";
import "./Hero.css";
const profilePic = require("../../images/profile_3_square.jpg");

export const Hero = () => {
  return (
    <>
      <section id="hero" className="Hero">
        <div className="Hero--image">
          <img src={profilePic} alt="johnny"></img>
        </div>
        <div className="Hero--text">
          <h1>Hi, I'm Johnny</h1>

          <h2 className="Hero__h2">
            <span className="Hero__span fade-in-underline">
              Full-stack software developer
            </span>{" "}
            by day, pizza enthusiast by night 🍕 <br></br> I love{" "}
            <span className="Hero__span fade-in-underline">
              building cool stuff
            </span>{" "}
            and{" "}
            <span className="Hero__span fade-in-underline">
              learning new technologies{" "}
            </span>
            🎓 <br></br> Whether it's front-end or back-end, I'm always{" "}
            <span className="Hero__span fade-in-underline">
              up for a challenge
            </span>{" "}
            🚀
          </h2>

          <h2 className="Hero__h2">
            I'm currently looking for an opportunity to contribute to a
            company's success, so if you're looking for a junior developer then
            get in touch & let's make something amazing!
          </h2>

          <div className="Hero__div--socials-container">
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
      </section>
      <div className="Hero__div--angled"></div>
      {/* <div className="triangle"></div> */}
    </>
  );
};
